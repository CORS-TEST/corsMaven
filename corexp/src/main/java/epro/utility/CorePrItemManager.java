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

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import core.vo.model.coreset.CoreDataSet;

public class CorePrItemManager {
	private static final Log LOG = LogFactory.getLog(CorePrItemManager.class);

	/**
	 * @메소드명 : getFileGubunInfo
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 파일업로드를 위한 구분을 정의한다.
	 */
	public static CoreDataSet getUpdateDataMapInfo(String cdSubSys, CoreDataSet inInfoArr) {

		// CD_PRGRS_STEP를 가져오기위한 DS명
		inInfoArr.addStringColumn("HEADER_DS");
		// CD_PRGRS_STEP 을 가져오기위한 HEADER COLUMN NM
		inInfoArr.addStringColumn("HEADER_DS_STTS");
		// DOC_NO를 가져오기위한 HEADER COLUMN_NM
		inInfoArr.addStringColumn("DOC_NO");
		// ITEM DS명
		inInfoArr.addStringColumn("ITEM_DS");

		inInfoArr.addStringColumn("RMARK");

		/***** 이곳에 else if문을 추가하여 구분한다. *****/
		if ("PR13WRI".equals(cdSubSys)) {
			int row = inInfoArr.appendRow();
			inInfoArr.setColumn(row, "HEADER_DS", "dsPr");
			inInfoArr.setColumn(row, "HEADER_DS_STTS", "CD_PR_STTS");
			inInfoArr.setColumn(row, "ITEM_DS", "dsPrItemList");
			inInfoArr.setColumn(row, "DOC_NO", "PR_NO");
		}
		/**********/
		return inInfoArr;
	}
}
