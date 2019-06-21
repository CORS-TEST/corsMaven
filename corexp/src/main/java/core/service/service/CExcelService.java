/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 */
package core.service.service;

import java.util.ArrayList;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import core.common.config.Config;
import core.common.util.CommonUtil;
import core.common.util.ExcelCellMakeUtil;
import core.common.util.ExcelMakeUtil;
import core.exception.userhandle.UserHandleException;
import core.vo.model.coreset.CoreDataSet;
import core.vo.model.coreset.CoreDataSetFactory;
import core.vo.model.coreset.CoreParamSet;
import core.vo.model.coreset.CoreParamSetFactory;
import core.web.service.CoreService;
import epro.core.module.DrmModule;

/**
 * core.service.service ExcelService.java<br>
 *
 * 
 * @author : mjpark
 * @Date : 2017. 6. 28.
 */
@Service
public class CExcelService extends CoreService {
	private static final Log LOG = LogFactory.getLog(CExcelService.class);

	@Autowired
	DrmModule drmModule;

	public CoreParamSet getExcel(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsExcelInfo = inParams.getCoreDataSet("dsExcelInfo");
		CoreDataSet dsParam = inParams.getCoreDataSet("dsParam");

		dsParam.setUpdate(true);
		if (!dsParam.containsColumn("PAGE_STR_NO")) {
			dsParam.addStringColumn("PAGE_STR_NO");
		}
		if (!dsParam.containsColumn("PAGE_END_NO")) {
			dsParam.addStringColumn("PAGE_END_NO");
		}

		dsParam.setColumn(0, "PAGE_STR_NO", "0");
		dsParam.setColumn(0, "PAGE_END_NO", "70000");

		// header make

		// header make
		Document headerXml = CommonUtil.getXmlFromString(dsExcelInfo.getColumnAsString(0, "XML_HEADER"));
		Element xml = headerXml.getDocumentElement();
		if (!"".equals(dsExcelInfo.getColumnAsString(0, "FORMATID"))) {
			NodeList formatsList = xml.getElementsByTagName("Format");
			for (int i = 0; i < formatsList.getLength(); i++) {
				if ((dsExcelInfo.getColumnAsString(0, "FORMATID"))
						.equals(formatsList.item(i).getAttributes().getNamedItem("id").getTextContent())) {
					xml = (Element) formatsList.item(i);
					break;
				}
			}
		}

		CoreDataSet dsData = CoreDataSetFactory.getDataSet(inParams);
		// 여기서부터 데이터 맵핑
		if ("Y".equals(dsExcelInfo.getColumnAsString(0, "IS_TRAN"))) {
			dsData = getSqlManager().queryForCoreDataSet(dsParam, dsExcelInfo.getColumnAsString(0, "TRAN_NM"));
		} else {
			// ui data
			dsData = inParams.getCoreDataSet("dsData");
		}
		ExcelMakeUtil excel = new ExcelMakeUtil();
		int headerRows = 0;
		int colCnt = 0;
		// 헤더의 row를 센다.
		NodeList rowlist = xml.getElementsByTagName("Rows");
		NodeList rowslist = rowlist.item(0).getChildNodes();

		for (int i = 0; i < rowslist.getLength(); i++) {
			Node rowsNode = rowslist.item(i);
			if (rowsNode.getAttributes().getNamedItem("band") != null) {
				if ("head".equals(rowsNode.getAttributes().getNamedItem("band").getTextContent())) {
					headerRows++;
				}
			}
		}
		NodeList columnslist = xml.getElementsByTagName("Columns");
		colCnt = columnslist.item(0).getChildNodes().getLength();
		excel.setHeaderLine(headerRows);
		excel.setColCnt(colCnt);

		ArrayList<ExcelCellMakeUtil> bodyArr = new ArrayList<ExcelCellMakeUtil>();
		NodeList nodelist = xml.getElementsByTagName("Band");

		ExcelCellMakeUtil[][] headers = new ExcelCellMakeUtil[headerRows][colCnt];

		for (int i = 0; i < nodelist.getLength(); i++) {
			Node bandNode = nodelist.item(i);
			if ("head".equals(bandNode.getAttributes().getNamedItem("id").getTextContent())) {
				NodeList headCell = bandNode.getChildNodes();
				for (int j = 0; j < headCell.getLength(); j++) {
					Node headNode = headCell.item(j);
					ExcelCellMakeUtil ecmu = new ExcelCellMakeUtil("H");
					int rowIdx = -1;
					int colIdx = -1;
					if (headNode.getAttributes().getNamedItem("row") == null) {
						rowIdx = 0;
					} else {
						rowIdx = Integer.parseInt(headNode.getAttributes().getNamedItem("row").getTextContent());
					}
					if (headNode.getAttributes().getNamedItem("col") == null) {
						colIdx = 0;
					} else {
						colIdx = Integer.parseInt(headNode.getAttributes().getNamedItem("col").getTextContent());
					}

					if (headNode.getAttributes().getNamedItem("rowspan") != null) {
						ecmu.setRowspan(
								Integer.parseInt(headNode.getAttributes().getNamedItem("rowspan").getTextContent()));
					}
					if (headNode.getAttributes().getNamedItem("colspan") != null) {
						ecmu.setColspan(
								Integer.parseInt(headNode.getAttributes().getNamedItem("colspan").getTextContent()));
					}
					if (headNode.getAttributes().getNamedItem("text") != null) {
						ecmu.setText(headNode.getAttributes().getNamedItem("text").getTextContent());
					}
					headers[rowIdx][colIdx] = ecmu;
				}
			}
			if ("body".equals(bandNode.getAttributes().getNamedItem("id").getTextContent())) {
				NodeList bodyCell = bandNode.getChildNodes();
				for (int j = 0; j < bodyCell.getLength(); j++) {
					Node bodyNode = bodyCell.item(j);
					ExcelCellMakeUtil ecmu = new ExcelCellMakeUtil("C");
					if (bodyNode.getAttributes().getNamedItem("text") != null) {
						ecmu.setText(bodyNode.getAttributes().getNamedItem("text").getTextContent());
					}
					if (bodyNode.getAttributes().getNamedItem("mask") != null) {
						ecmu.setMask(bodyNode.getAttributes().getNamedItem("mask").getTextContent());
					}
					if (bodyNode.getAttributes().getNamedItem("style") != null) {
						ecmu.setAlign(bodyNode.getAttributes().getNamedItem("style").getTextContent());
					}
					bodyArr.add(ecmu);
				}
			}
		}

		excel.setHeaders(headers);
		excel.setDataColumnInfo(bodyArr);
		String path = excel.makeExcelFile(dsData);
		if ("".equals(path)) {
			throw new UserHandleException("-1", "생성실패");
		}
		// filemake
		// drm is yn - if drm use
		if ("Y".equals(Config.getString("BASIC.ALTDRM"))) {
			path = drmModule.getDrmPath(path);
		}
		dsExcelInfo.setColumn(0, "PATH", path);
		outParam.setCoreDataSet("dsExcelInfo", dsExcelInfo);
		outParam.setMessage("완료");
		return outParam;
	}

}
