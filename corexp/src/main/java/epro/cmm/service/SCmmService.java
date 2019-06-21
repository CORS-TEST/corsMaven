/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 *
 * @서비스명		: epro.cmm.service SCmmService.java                       
 * @생성자			: 김민성
 * @생성일시		: 2017.09.21.
 * @구분			: 협력업체 공지사항
 * @최종수정자		: 김민성
 * @최종수정일시	: 2017.09.21.
 */
package epro.cmm.service;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import core.vo.model.coreset.CoreDataSet;
import core.vo.model.coreset.CoreParamSet;
import core.vo.model.coreset.CoreParamSetFactory;
import core.web.service.CoreService;
import epro.com.module.FileModule;

@Service
public class SCmmService extends CoreService {

	@Autowired
	FileModule fileModule;

	private static final Log LOG = LogFactory.getLog(SCmmService.class);

	/**
	 * @메소드명 : searchCmmNotice
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc :
	 */
	public CoreParamSet searchCmmNotice(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		dsCondition.setColumn(0, "LANG_CD", gdsUserInfo.getColumnAsString(0, "LANG_CD"));

		outParam.setCoreDataSet("dsList",
				getSqlManager().queryForCoreDataSet(dsCondition, "SCmmService.searchCmmNotice"));

		return outParam;
	}

	/**
	 * @메소드명 : readCmmNotice
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc :
	 */
	public CoreParamSet readCmmNotice(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsBbs = inParams.getCoreDataSet("dsBbs");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		if (!dsBbs.containsColumn("LANG_CD")) {
			dsBbs.setUpdate(true);
			dsBbs.addStringColumn("LANG_CD");
		}
		dsBbs.setColumn(0, "LANG_CD", gdsUserInfo.getColumnAsString(0, "LANG_CD"));

		outParam.setCoreDataSet("dsBbs", getSqlManager().queryForCoreDataSet(dsBbs, "SCmmService.readCmmNotice"));

		CoreDataSet dsfile = outParam.getCoreDataSetInstance();
		dsfile.addStringColumn("BRANCH_CD");
		dsfile.addStringColumn("REF_TBL_NM");
		dsfile.addStringColumn("REF_KEY_1");
		dsfile.appendRow();
		dsfile.setColumn(0, "BRANCH_CD", dsBbs.getColumnAsString(0, "DOC_BRANCH_CD"));
		dsfile.setColumn(0, "REF_TBL_NM", "'MM_CM_BBS'");
		dsfile.setColumn(0, "REF_KEY_1", dsBbs.getColumnAsString(0, "DOC_NO"));
		outParam.setCoreDataSet("FileInfo", dsfile);
		outParam = fileModule.getFileInfo(outParam);

		if (!"Y".equals(dsBbs.getString("RELOAD"))) {
			getSqlManager().updateToCoreDataSet(dsBbs, "SCmmService.updateReadCnt");
		}

		return outParam;
	}

}
