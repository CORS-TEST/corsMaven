/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 *
 * @서비스명     	: epro.utility CoreFileManager.java
 * @생성자       	: mjpark
 * @생성일시     	: 2017. 9. 13.
 * @구분         	: 
 * @최종수정자   	: mjpark
 * @최종수정일시	: 
 */
package epro.utility;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import core.common.config.Config;
import core.exception.userhandle.UserHandleException;
import core.vo.model.coreset.CoreDataSet;

public class CoreFileManager {
	private static final Log LOG = LogFactory.getLog(CoreFileManager.class);

	/**
	 * @메소드명 : getFileGubunInfo
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 파일업로드를 위한 구분을 정의한다.
	 */
	public static CoreDataSet getFileGubunInfo(String gubun, CoreDataSet fileInfoArr) {
		fileInfoArr.addStringColumn("FILE_PATH_ID");
		fileInfoArr.addStringColumn("FILE_GUBUN");
		fileInfoArr.addStringColumn("DS_NM");

		fileInfoArr.addStringColumn("BRANCH_CD");
		fileInfoArr.addStringColumn("KEY1");
		fileInfoArr.addStringColumn("KEY2");
		fileInfoArr.addStringColumn("KEY3");
		fileInfoArr.addStringColumn("KEY4");
		fileInfoArr.addStringColumn("KEY5");
		/***** 이곳에 else if문을 추가하여 구분한다. *****/
		if ("PR".equals(gubun)) {
			int row = fileInfoArr.appendRow();
			fileInfoArr.setColumn(row, "FILE_PATH_ID", "PR");
			fileInfoArr.setColumn(row, "FILE_GUBUN", "MM_PR");
			fileInfoArr.setColumn(row, "DS_NM", "inPr");
			fileInfoArr.setColumn(row, "KEY1", "PR_NO");
			row = fileInfoArr.appendRow();
			fileInfoArr.setColumn(row, "FILE_PATH_ID", "PR_ITEM");
			fileInfoArr.setColumn(row, "FILE_GUBUN", "MM_PR_ITEM");
			fileInfoArr.setColumn(row, "DS_NM", "inPrItem");
			fileInfoArr.setColumn(row, "KEY1", "PR_NO");
			fileInfoArr.setColumn(row, "KEY2", "PR_ITEM_ID");

		} else if ("PO".equals(gubun)) {
			int row = fileInfoArr.appendRow();
			fileInfoArr.setColumn(row, "FILE_PATH_ID", "PO");
			fileInfoArr.setColumn(row, "FILE_GUBUN", "MM_PO");
			fileInfoArr.setColumn(row, "DS_NM", "inPo");
			fileInfoArr.setColumn(row, "KEY1", "PO_NO");
			row = fileInfoArr.appendRow();
			fileInfoArr.setColumn(row, "FILE_PATH_ID", "PO_ITEM");
			fileInfoArr.setColumn(row, "FILE_GUBUN", "MM_PO_ITEM");
			fileInfoArr.setColumn(row, "DS_NM", "inPoItem");
			fileInfoArr.setColumn(row, "KEY1", "PO_NO");
			fileInfoArr.setColumn(row, "KEY2", "PO_ITEM_ID");
		} else if ("DLV".equals(gubun)) {
			int row = fileInfoArr.appendRow();
			fileInfoArr.setColumn(row, "FILE_PATH_ID", "DLV");
			fileInfoArr.setColumn(row, "FILE_GUBUN", "MM_PO_DLV");
			fileInfoArr.setColumn(row, "DS_NM", "dsDlv");
			fileInfoArr.setColumn(row, "KEY1", "DLV_NO");
			fileInfoArr.setColumn(row, "KEY2", "IS_TYPE");
		} else if ("IV".equals(gubun)) {
			int row = fileInfoArr.appendRow();
			fileInfoArr.setColumn(row, "FILE_PATH_ID", "IV");
			fileInfoArr.setColumn(row, "FILE_GUBUN", "MM_IV");
			fileInfoArr.setColumn(row, "DS_NM", "dsIv");
			fileInfoArr.setColumn(row, "KEY1", "INV_NO");
		} else if ("APRV".equals(gubun)) {
			int row = fileInfoArr.appendRow();
			fileInfoArr.setColumn(row, "FILE_PATH_ID", "APRV");
			fileInfoArr.setColumn(row, "FILE_GUBUN", "MM_APRV");
			fileInfoArr.setColumn(row, "DS_NM", "dsAprvInfo");
			fileInfoArr.setColumn(row, "KEY1", "APP_DOC_ID");
		} else if ("PTNR".equals(gubun)) {
			int row = fileInfoArr.appendRow();
			fileInfoArr.setColumn(row, "FILE_PATH_ID", "PTNR");
			fileInfoArr.setColumn(row, "FILE_GUBUN", "MM_PTNR");
			fileInfoArr.setColumn(row, "DS_NM", "dsPtnrFile");
			fileInfoArr.setColumn(row, "KEY1", "PTNR_ID");
			fileInfoArr.setColumn(row, "KEY2", "NO");
		} else if ("PTNR_MGMT".equals(gubun)) {
			int row = fileInfoArr.appendRow();
			fileInfoArr.setColumn(row, "FILE_PATH_ID", "PTNR_MGMT");
			fileInfoArr.setColumn(row, "FILE_GUBUN", "MM_PTNR_MGMT");
			fileInfoArr.setColumn(row, "DS_NM", "dsCard");
			fileInfoArr.setColumn(row, "KEY1", "MGMT_HSTR_NO");
			fileInfoArr.setColumn(row, "KEY2", "PTNR_ID");
		} else if ("TNDR".equals(gubun)) {
			int row = fileInfoArr.appendRow();
			fileInfoArr.setColumn(row, "FILE_PATH_ID", "TNDR");
			fileInfoArr.setColumn(row, "FILE_GUBUN", "MM_TNDR");
			fileInfoArr.setColumn(row, "DS_NM", "dsTndr");
			fileInfoArr.setColumn(row, "KEY1", "TNDR_NO");
			fileInfoArr.setColumn(row, "KEY2", "TNDR_ODR");
			row = fileInfoArr.appendRow();
			fileInfoArr.setColumn(row, "FILE_PATH_ID", "TNDR_ITEM");
			fileInfoArr.setColumn(row, "FILE_GUBUN", "MM_TNDR_ITEM");
			fileInfoArr.setColumn(row, "DS_NM", "dsTndrItem");
			fileInfoArr.setColumn(row, "KEY1", "TNDR_NO");
			fileInfoArr.setColumn(row, "KEY2", "TNDR_ODR");
			fileInfoArr.setColumn(row, "KEY3", "TNDR_ITEM_ID");
		} else if ("RFQ".equals(gubun)) {
			int row = fileInfoArr.appendRow();
			fileInfoArr.setColumn(row, "FILE_PATH_ID", "RFQ");
			fileInfoArr.setColumn(row, "FILE_GUBUN", "MM_RFQ");
			fileInfoArr.setColumn(row, "DS_NM", "dsRfq");
			fileInfoArr.setColumn(row, "KEY1", "RFQ_REQ_NO");
			fileInfoArr.setColumn(row, "KEY2", "RFQ_ODR");
			row = fileInfoArr.appendRow();
			fileInfoArr.setColumn(row, "FILE_PATH_ID", "RFQ");
			fileInfoArr.setColumn(row, "FILE_GUBUN", "MM_RFQ_ITEM");
			fileInfoArr.setColumn(row, "DS_NM", "dsRfqItemList");
			fileInfoArr.setColumn(row, "KEY1", "RFQ_REQ_NO");
			fileInfoArr.setColumn(row, "KEY2", "RFQ_ODR");
			fileInfoArr.setColumn(row, "KEY3", "RFQ_REQ_ITEM_ID");
			row = fileInfoArr.appendRow();
			fileInfoArr.setColumn(row, "FILE_PATH_ID", "RFQ");
			fileInfoArr.setColumn(row, "FILE_GUBUN", "MM_RFQ_QUOTE_FILE");
			fileInfoArr.setColumn(row, "DS_NM", "dsRfqReqFile");
			fileInfoArr.setColumn(row, "KEY1", "RFQ_REQ_NO");
			fileInfoArr.setColumn(row, "KEY2", "RFQ_ODR");
			fileInfoArr.setColumn(row, "KEY3", "RFQ_PTNR_ID");
			fileInfoArr.setColumn(row, "KEY4", "RFQ_REQ_FILE_ID");

		} else if ("CMM".equals(gubun)) {
			int row = fileInfoArr.appendRow();
			fileInfoArr.setColumn(row, "FILE_PATH_ID", "CMM");
			fileInfoArr.setColumn(row, "FILE_GUBUN", "MM_CM_BBS");
			fileInfoArr.setColumn(row, "DS_NM", "dsBbs");
			fileInfoArr.setColumn(row, "KEY1", "DOC_NO");

		} else if ("MTRL".equals(gubun)) {
			int row = fileInfoArr.appendRow();
			fileInfoArr.setColumn(row, "FILE_PATH_ID", "MTRL");
			fileInfoArr.setColumn(row, "FILE_GUBUN", "MM_MTRL");
			fileInfoArr.setColumn(row, "DS_NM", "dsMtrl");
			fileInfoArr.setColumn(row, "KEY1", "MTRL_CD");

		} else if ("CNTR".equals(gubun)) {
			int row = fileInfoArr.appendRow();
			fileInfoArr.setColumn(row, "FILE_PATH_ID", "CNTR");
			fileInfoArr.setColumn(row, "FILE_GUBUN", "MM_CNTR");
			fileInfoArr.setColumn(row, "DS_NM", "dsCntr");
			fileInfoArr.setColumn(row, "KEY1", "CNTR_NO");
		} else if ("CNTR_TMPLT".equals(gubun)) {
			int row = fileInfoArr.appendRow();
			fileInfoArr.setColumn(row, "FILE_PATH_ID", "CNTR_TMPLT");
			fileInfoArr.setColumn(row, "FILE_GUBUN", "MM_CNTR_TMPLT");
			fileInfoArr.setColumn(row, "DS_NM", "dsCntrTmpl");
			fileInfoArr.setColumn(row, "KEY1", "CNTR_TMPLT_NO");
		} else if ("EVL_SCJD".equals(gubun)) {
			int row = fileInfoArr.appendRow();
			fileInfoArr.setColumn(row, "FILE_PATH_ID", "EVL_SCJD");
			fileInfoArr.setColumn(row, "FILE_GUBUN", "MM_EVL_SCJD");
			fileInfoArr.setColumn(row, "DS_NM", "dsEval");
			fileInfoArr.setColumn(row, "KEY1", "SCJD_EVAL_ID");
		}
		/**********/
		return fileInfoArr;
	}

	/**
	 * @메소드명 : uploadAtomic
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc :
	 */
	public static String uploadAtomic(String tempfilePath, String phyFileNm, String filePath) {
		LOG.debug("tempfilePath : " + tempfilePath + " phyFileNm : " + phyFileNm + " filePath : " + filePath);
		File file = new File(tempfilePath + "/" + phyFileNm);
		String savePath = Config.getString("ATTACHFILE.DIR");
		//
		String newfilePath = savePath + "/" + filePath + "/";
		File newFile = new File(newfilePath + "/" + phyFileNm);

		// 파일 복사
		try {
			FileUtils.copyFile(file, newFile);
		} catch (IOException e) {
			if (LOG.isErrorEnabled()) {
				LOG.error(e, e);
			}
			throw new UserHandleException("-1", "MSG_COM_ERR_004");
		}
		// 기존파일 삭제
		file.delete();
		return newfilePath;
	}
}
