/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 */
package core.common.util;

import java.io.StringReader;
import java.io.StringWriter;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.transform.OutputKeys;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;

import core.vo.model.coreset.CoreDataSet;
import core.vo.model.coreset.CoreParamSet;
import core.vo.model.dataset.HtmlDataSet;
import core.vo.model.dataset.NexacroDataSet;

public class CommonUtil {

	/**
	 * @MenthdName : getParamObj
	 * @InputParameterType :
	 * @OutputParameterType : JSONObject
	 */
	public static JSONObject getParamObj(HttpServletRequest request) {
		JSONParser parser = new JSONParser();
		JSONObject jsonObj = null;
		try {
			Object obj = parser.parse(request.getParameter("parameter"));
			jsonObj = (JSONObject) obj;

		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return jsonObj;
	}

	/**
	 * @MenthdName : getCoreParamToJson
	 * @InputParameterType :
	 * @OutputParameterType : JSONObject
	 */
	public static JSONObject getCoreParamToJson(CoreParamSet inParam) {
		JSONObject jsonObj = new JSONObject();

		Set set = inParam.keySet();
		Iterator iterator = set.iterator();

		while (iterator.hasNext()) {
			String key = (String) iterator.next();
			// System.out.println("hashMap Key : " + inParam.get(key));
			if (inParam.get(key) != null) {
				if (inParam.get(key).getClass().equals(NexacroDataSet.class)) {
					CoreDataSet ds = inParam.getCoreDataSet(key);

					JSONArray dsArr = new JSONArray();
					for (int i = 0; i < ds.getRowCount(); i++) {
						dsArr.add(new JSONObject(ds.getRowAsMap(i)));
					}

					jsonObj.put(key, dsArr);
				} else if (inParam.get(key).getClass().equals(HtmlDataSet.class)) {

				} else {
					jsonObj.put(key, inParam.get(key));
				}
			}
		}

		return jsonObj;
	}

	public static String getNvl(Object data, String replaceStr) {
		if (data == null || "".equals(data)) {
			data = replaceStr;
		}
		return data.toString();
	}

	public static String getNvl(String data, String replaceStr) {
		if ("".equals(data) || data == null || "undefined".equals(data) || "null".equals(data)) {
			data = replaceStr;
		}
		return data;
	}

	public static String getDateWithFormat(Object data, String format) {
		return getDateWithFormat(data.toString(), format);
	}

	/**
	 * @MenthdName : getDateWithFormat
	 * @InputParameterType : trans string, format string
	 * @OutputParameterType : String
	 * @desc y Year 2013 <br>
	 *       M Month in year July, 07, 7 <br>
	 *       d Day in month 1-31 <br>
	 *       E Day name in week Friday, Sunday <br>
	 *       a Am/pm marker AM, PM <br>
	 *       H Hour in day 0-23 <br>
	 *       h Hour in am/pm 1-12 <br>
	 *       m Minute in hour 0-60 <br>
	 *       s Second in minute 0-60
	 */
	public static String getDateWithFormat(String data, String format) {
		SimpleDateFormat dateFmt = new SimpleDateFormat(format);
		String tmpFormat = "";
		String rtnString = "";
		Date t;
		if (data == null || "".equals(data)) {
			t = new Date();
		} else if (data.length() == 2) {
			tmpFormat = "yy";
		} else if (data.length() == 4) {
			tmpFormat = "yyyy";
		} else if (data.length() == 6) {
			tmpFormat = "yyyyMM";
		} else if (data.length() == 8) {
			tmpFormat = "yyyyMMdd";
		} else if (data.length() == 10) {
			tmpFormat = "yyyyMMddHH";
		} else if (data.length() == 12) {
			tmpFormat = "yyyyMMddHHmm";
		} else if (data.length() == 14) {
			tmpFormat = "yyyyMMddHHmmss";
		} else {
			return data;
		}
		SimpleDateFormat tempFmt = new SimpleDateFormat(tmpFormat);
		try {
			t = tempFmt.parse(data);
			rtnString = dateFmt.format(t);
		} catch (java.text.ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			return rtnString;
		}
	}

	public static String getCommaNum(Object data) {
		return getCommaNum(data.toString());
	}

	/**
	 * @MenthdName : getCommaNum
	 * @InputParameterType :
	 * @OutputParameterType : String
	 */
	public static String getCommaNum(String str) {
		String rtn = "";
		if (str == null || "".equals(str)) {
			return "";
		} else {
			java.text.NumberFormat nf = java.text.NumberFormat.getNumberInstance();
			java.text.DecimalFormat df = (java.text.DecimalFormat) nf;
			df.applyPattern("#,###");

			String[] strs = str.split("\\.");
			if (strs.length > 1) {
				rtn = df.format(Double.valueOf(strs[0])) + "." + strs[1];
			} else {
				rtn = df.format(Double.valueOf(str));
			}
		}
		return rtn;
	}

	/**
	 * @MenthdName : getArrayToString
	 * @InputParameterType :
	 * @OutputParameterType : String
	 */
	public static String getArrayToString(ArrayList<String> arr, String delimiter) {
		String rtns = "";

		for (int i = 0; i < arr.size(); i++) {
			if (i != 0) {
				rtns += delimiter;
			}
			rtns += arr.get(i);
		}

		return rtns;
	}

	/**
	 * @MenthdName : getArrayToStringFormDataSet
	 * @InputParameterType :
	 * @OutputParameterType : String
	 */
	public static String getArrayToStringFormDataSet(CoreDataSet dsSet, String colName, String delimiter) {
		String rtns = "";

		for (int i = 0; i < dsSet.getRowCount(); i++) {
			if (i != 0) {
				rtns += delimiter;
			}
			rtns += dsSet.getColumnAsString(i, colName);
		}

		return rtns;
	}

	public static Document getXmlFromString(String arg) {
		Document xml = null;
		DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
		DocumentBuilder builder = null;
		try {
			builder = factory.newDocumentBuilder();
			xml = builder.parse(new InputSource(new StringReader(arg)));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return xml;
	}

	public static String getXmlFromStringToInsert(String arg) {
		Document xml = null;
		DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
		DocumentBuilder builder = null;
		String output = "";
		Document newXml = null;
		try {
			builder = factory.newDocumentBuilder();
			xml = builder.parse(new InputSource(new StringReader(arg)));
			newXml = builder.newDocument();

			newXml.appendChild(newXml.createElement("Rows"));

			NodeList row = xml.getElementsByTagName("Row");
			for (int i = 0; i < row.getLength(); i++) {
				Element rowNode = newXml.createElement("Row");
				NodeList col = row.item(i).getChildNodes();
				for (int j = 0; j < col.getLength(); j++) {
					Node colNode = col.item(j);
					if ("Col".equals(colNode.getNodeName())) {
						Element newColNode = newXml
								.createElement(colNode.getAttributes().getNamedItem("id").getTextContent());
						newColNode.setTextContent(colNode.getTextContent());
						rowNode.appendChild(newColNode);
					}
				}
				newXml.getElementsByTagName("Rows").item(0).appendChild(rowNode);
			}

			TransformerFactory tf = TransformerFactory.newInstance();
			Transformer transformer = tf.newTransformer();
			transformer.setOutputProperty(OutputKeys.OMIT_XML_DECLARATION, "yes");
			StringWriter writer = new StringWriter();
			transformer.transform(new DOMSource(newXml), new StreamResult(writer));
			output = writer.getBuffer().toString();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return output;
	}

}
