package core.common.util;

import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.apache.poi.xssf.usermodel.XSSFCellStyle;

public class ExcelCellMakeUtil {
	private static final Log LOG = LogFactory.getLog(ExcelCellMakeUtil.class);
	protected String align = "center";
	protected String text;
	protected String mask;
	protected String bindSet;
	protected String type = "";
	protected int rowspan;
	protected int colspan;

	/**
	 * @param type
	 *            : H or C
	 */
	public ExcelCellMakeUtil(String type) {
		this.type = type;
	}

	public String getAlign() {
		return align;
	}

	public void setAlign(String align) {
		this.align = align == null ? "center" : align;
	}

	public String getHeaderText() {
		if ("H".equals(this.type)) {
			return this.text;
		}
		return "";
	}

	public String getRtnText(Map dataRow) {
		String rtnText = "";

		if (this.text.startsWith("bind:")) {
			rtnText = removeBind(dataRow);
		}
		if (this.text.startsWith("expr:")) {
			rtnText = changeExpr(dataRow);
		}
		if (this.mask != null) {
			rtnText = changeMask(rtnText);
		}
		return rtnText;
	}

	public void setText(String text) {
		this.text = text == null ? "" : text;
	}

	public String getMask() {
		return mask;
	}

	public void setMask(String mask) {
		this.mask = mask == null ? "" : mask;
	}

	public String getBindSet() {
		return bindSet;
	}

	public void setBindSet(String bindSet) {
		this.bindSet = bindSet;
	}

	protected String removeBind(Map dataRow) {
		return dataRow.get(this.text.replaceAll("\"", "").replace("bind:", "")) == null ? ""
				: dataRow.get(this.text.replaceAll("\"", "").replace("bind:", "")).toString();
	}

	protected String changeExpr(Map dataRow) {
		return "";
	}

	protected String changeMask(String text) {
		try {
			// String mask = this.mask.replaceAll("-", "").replaceAll("/",
			// "").replaceAll(":", "").replaceAll(" ", "");
			// SimpleDateFormat transFormat = new SimpleDateFormat(mask);
			// String ssText = text.substring(0, mask.length());
			// Date to = transFormat.parse(ssText);
			// SimpleDateFormat fmt = new SimpleDateFormat(this.mask);
			// String rtn = fmt.format(to);
			return text;
		} catch (Exception e) {
			return text;
		}
	}

	public XSSFCellStyle getCellStyle(SXSSFWorkbook excelMakeWb) {
		XSSFCellStyle style = (XSSFCellStyle) excelMakeWb.createCellStyle();

		String align = "";

		String regex = "(ALIGN:)([^;]+);";
		Pattern pattern = Pattern.compile(regex);
		Matcher match = pattern.matcher(this.align.toUpperCase());

		if (match.find()) {
			align = match.group(0).replaceAll("ALIGN:", "").replaceAll(";", "");
		}

		if ("C".equals(this.type)) {
			if ("CENTER".equals(align)) {
				style.setAlignment(XSSFCellStyle.ALIGN_CENTER);
			} else if ("RIGHT".equals(align)) {
				style.setAlignment(XSSFCellStyle.ALIGN_RIGHT);
			} else if ("LEFT".equals(align)) {
				style.setAlignment(XSSFCellStyle.ALIGN_LEFT);
			} else {
				style.setAlignment(XSSFCellStyle.ALIGN_CENTER);
			}
		} else if ("H".equals(this.type)) {
			if ("CENTER".equals(align)) {
				style.setAlignment(XSSFCellStyle.ALIGN_CENTER);
			} else if ("RIGHT".equals(align)) {
				style.setAlignment(XSSFCellStyle.ALIGN_RIGHT);
			} else if ("LEFT".equals(align)) {
				style.setAlignment(XSSFCellStyle.ALIGN_LEFT);
			} else {
				style.setAlignment(XSSFCellStyle.ALIGN_CENTER);
			}
			style.setFillForegroundColor(IndexedColors.GREY_25_PERCENT.getIndex());
			style.setFillPattern(XSSFCellStyle.SOLID_FOREGROUND);
			style.setBorderLeft(XSSFCellStyle.BORDER_THIN);
			style.setBorderRight(XSSFCellStyle.BORDER_THIN);
			style.setBorderTop(XSSFCellStyle.BORDER_THIN);
			style.setBorderBottom(XSSFCellStyle.BORDER_THIN);
		}
		return style;
	}

	public void setRowspan(int rowspan) {
		this.rowspan = rowspan;
	}

	public void setColspan(int colspan) {
		this.colspan = colspan;
	}

	public int getRowspan() {
		return this.rowspan;
	}

	public int getColspan() {
		return this.colspan;
	}
}
