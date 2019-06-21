package core.common.util;

import java.util.LinkedHashMap;

import org.apache.poi.ss.usermodel.BuiltinFormats;
import org.apache.poi.ss.usermodel.DataFormatter;
import org.apache.poi.xssf.model.SharedStringsTable;
import org.apache.poi.xssf.model.StylesTable;
import org.apache.poi.xssf.usermodel.XSSFCellStyle;
import org.apache.poi.xssf.usermodel.XSSFRichTextString;
import org.xml.sax.Attributes;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;

public class CorsXSSFSheetHandler extends DefaultHandler {
	private final SharedStringsTable sst;
	private String lastContents;
	private LinkedHashMap<String, String> headerMap = new LinkedHashMap<String, String>();
	private boolean headerFlag = false;
	private StylesTable styles;
	private final DataFormatter formatter;
	private int idx;
	private short formatIndex;
	private String formatString;
	private xssfDataType nextDataType;
	private StringBuffer xmlStr;

	enum xssfDataType {
		BOOL, ERROR, FORMULA, INLINESTR, SSTINDEX, NUMBER,
	}

	public CorsXSSFSheetHandler(StylesTable styles, SharedStringsTable sst) {
		this.sst = sst;
		this.styles = styles;
		this.formatter = new DataFormatter();
		this.nextDataType = xssfDataType.NUMBER;
		this.xmlStr = new StringBuffer();
		this.idx = 0;
	}

	public void startDocument() throws SAXException {
		this.xmlStr.append("<Rows>");
	}

	public void endDocument() throws SAXException {
		this.xmlStr.append("</Rows>");
	}

	public void startElement(String namespaceURI, String localName, String qName, Attributes attrs) {
		if ("row".equals(qName)) {
			if (!headerFlag) {
				headerMap = new LinkedHashMap<String, String>();
			} else {
				this.xmlStr.append("<Row>");
			}
		} else if ("c".equals(qName)) {
			this.formatIndex = -1;
			this.formatString = null;

			this.nextDataType = xssfDataType.NUMBER;
			this.formatIndex = -1;
			this.formatString = null;
			String cellType = attrs.getValue("t");
			String cellStyleStr = attrs.getValue("s");
			if ("b".equals(cellType))
				nextDataType = xssfDataType.BOOL;
			else if ("e".equals(cellType))
				nextDataType = xssfDataType.ERROR;
			else if ("inlineStr".equals(cellType))
				nextDataType = xssfDataType.INLINESTR;
			else if ("s".equals(cellType))
				nextDataType = xssfDataType.SSTINDEX;
			else if ("str".equals(cellType))
				nextDataType = xssfDataType.FORMULA;
			else if (cellStyleStr != null) {
				// It's a number, but almost certainly one
				// with a special style or format
				int styleIndex = Integer.parseInt(cellStyleStr);
				XSSFCellStyle style = styles.getStyleAt(styleIndex);
				this.formatIndex = style.getDataFormat();
				this.formatString = style.getDataFormatString();
				if (this.formatString == null)
					this.formatString = BuiltinFormats.getBuiltinFormat(this.formatIndex);
			}

		}
		lastContents = "";
	}

	public void endElement(String namespaceURI, String localName, String qName) {

		if ("row".equals(qName)) {
			if (headerFlag) {
				this.idx = 0;
				this.xmlStr.append("</Row>");
			} else {
				headerFlag = true;
				this.idx = 0;
			}
		} else if ("c".equals(qName)) {
			switch (nextDataType) {
			case BOOL:
				break;
			case ERROR:
				break;
			case FORMULA:
				break;
			case INLINESTR:
				// TODO: have seen an example of this, so it's untested.
				XSSFRichTextString rtsi = new XSSFRichTextString(this.lastContents);
				this.lastContents = rtsi.toString();
				break;

			case SSTINDEX:
				try {
					int idx = Integer.parseInt(lastContents);
					lastContents = new XSSFRichTextString(this.sst.getEntryAt(idx)).toString();
				} catch (NumberFormatException ex) {
					System.out.println("Failed to parse SST index : " + ex.toString());
				}
				break;

			case NUMBER:
				if (this.formatString != null) {
					lastContents = formatter.formatRawCellContents(Double.parseDouble(lastContents), this.formatIndex,
							this.formatString);
				}
				break;

			default:
				break;
			}
			if (!headerFlag) {
				headerMap.put("KEY" + String.valueOf(this.idx++), this.lastContents);
			} else {
				this.xmlStr.append("<").append(headerMap.get("KEY" + String.valueOf(this.idx))).append(">")
						.append(this.lastContents).append("</")
						.append(headerMap.get("KEY" + String.valueOf(this.idx++))).append(">");
			}
		} else if ("v".equals(qName)) {
		}
	}

	public void characters(char[] ch, int start, int length) {
		lastContents += new String(ch, start, length);
	}

	public StringBuffer getXmlStr() {
		return this.xmlStr;
	}
}