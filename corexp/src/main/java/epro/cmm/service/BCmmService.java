/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 *
 * @서비스명		: epro.cmm.service BCmmService.java                       
 * @생성자		:
 * @생성일시		:
 * @구분			:
 * @최종수정자		:
 * @최종수정일시	:
 */
package epro.cmm.service;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import core.common.constain.CoerConstain;
import core.vo.model.coreset.CoreDataSet;
import core.vo.model.coreset.CoreParamSet;
import core.vo.model.coreset.CoreParamSetFactory;
import core.web.service.CoreService;
import epro.com.module.CommandModule;
import epro.com.module.FileModule;
import epro.com.module.MailSmsModule;

@Service
public class BCmmService extends CoreService {
	@Autowired
	CommandModule commandModule;

	@Autowired
	FileModule fileModule;
	@Autowired
	MailSmsModule mailSmsModule;

	private static final Log LOG = LogFactory.getLog(BCmmService.class);

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

		dsCondition.setColumn(0, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
		dsCondition.setColumn(0, "LANG_CD", gdsUserInfo.getColumnAsString(0, "LANG_CD"));

		outParam.setCoreDataSet("dsList",
				getSqlManager().queryForCoreDataSet(dsCondition, "BCmmService.searchCmmNotice"));

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
		dsBbs.setColumn(0, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));

		outParam.setCoreDataSet("dsBbs", getSqlManager().queryForCoreDataSet(dsBbs, "BCmmService.readCmmNotice"));

		CoreDataSet dsfile = outParam.getCoreDataSetInstance();
		dsfile.addStringColumn("BRANCH_CD");
		dsfile.addStringColumn("REF_TBL_NM");
		dsfile.addStringColumn("REF_KEY_1");
		dsfile.appendRow();
		dsfile.setColumn(0, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
		dsfile.setColumn(0, "REF_TBL_NM", "'MM_CM_BBS'");
		dsfile.setColumn(0, "REF_KEY_1", dsBbs.getColumnAsString(0, "DOC_NO"));
		outParam.setCoreDataSet("FileInfo", dsfile);
		outParam = fileModule.getFileInfo(outParam);

		if (!"Y".equals(dsBbs.getString("RELOAD"))) {
			getSqlManager().updateToCoreDataSet(dsBbs, "BCmmService.updateReadCnt");
		}

		return outParam;
	}

	/**
	 * @메소드명 : saveCmmNotice
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc :
	 */
	public CoreParamSet saveCmmNotice(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsBbs = inParams.getCoreDataSet("dsBbs");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		String rowType = dsBbs.getRowStatus(0);
		if (rowType.equals(CoerConstain.INSERT)) {
			dsBbs.setColumn(0, "USER_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
			dsBbs.setColumn(0, "USER_NM", gdsUserInfo.getColumnAsString(0, "USER_NM"));
			dsBbs.setColumn(0, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
			dsBbs.setColumn(0, "DOC_NO",
					commandModule.getSeqNextval("MM_CM_BBS_SEQ", CoerConstain.PROPAGATION_REQUIRED));

			getSqlManager().insertToCoreDataSet(dsBbs, "BCmmService.insertBbs");

		} else if (rowType.equals(CoerConstain.UPDATE)) {

			dsBbs.setColumn(0, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
			getSqlManager().updateToCoreDataSet(dsBbs, "BCmmService.updateBbs");
		}

		inParams.put("bizGubun", "CMM");
		outParam = fileModule.saveFileInfo(inParams);

		outParam.setCoreDataSet("dsBbs", dsBbs);
		outParam.setMessage("EPRO_LABEL_00002");

		return outParam;
	}

	/**
	 * @메소드명 : deleteCmmNotice
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc :
	 */
	public CoreParamSet deleteCmmNotice(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsBbs = inParams.getCoreDataSet("dsBbs");

		getSqlManager().deleteToCoreDataSet(dsBbs, "BCmmService.deleteBbs");

		outParam.setCoreDataSet("dsBbs", dsBbs);
		outParam.setMessage("EPRO_LABEL_00871");

		return outParam;
	}
}
