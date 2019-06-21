/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 *
 * @서비스명		: epro.ptnr.service BPtnrService.java                       
 * @생성자		:
 * @생성일시		:
 * @구분			:
 * @최종수정자		:
 * @최종수정일시	:
 */
package epro.ptnr.service;

import java.util.HashMap;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import core.common.config.Config;
import core.common.constain.CoerConstain;
import core.vo.model.coreset.CoreDataSet;
import core.vo.model.coreset.CoreDataSetFactory;
import core.vo.model.coreset.CoreParamSet;
import core.vo.model.coreset.CoreParamSetFactory;
import core.web.service.CoreService;
import epro.com.module.CommandModule;
import epro.com.module.FileModule;
import epro.com.module.MailSmsModule;

@Service
public class BPtnrService extends CoreService {

	@Autowired
	CommandModule commandModule;
	@Autowired
	FileModule fileModule;
	@Autowired
	MailSmsModule MailSmsModule;

	private static final Log LOG = LogFactory.getLog(BPtnrService.class);

	/**
	 * @메소드명 : searchPtnrReq
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 협력사 등록요청현황
	 */
	public CoreParamSet searchPtnrReq(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		dsCondition.setColumn(0, "LANG_CD", gdsUserInfo.getColumnAsString(0, "LANG_CD"));

		outParam.setCoreDataSet("dsList", getSqlManager().queryForCoreDataSet(dsCondition, "BPtnrService.searchPtnrReq"));
		return outParam;
	}

	/**
	 * @메소드명 : searchPtnrStop
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 협력사 휴면/거래중지현황
	 */
	public CoreParamSet searchPtnrStop(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		dsCondition.setColumn(0, "LANG_CD", gdsUserInfo.getColumnAsString(0, "LANG_CD"));

		outParam.setCoreDataSet("dsList", getSqlManager().queryForCoreDataSet(dsCondition, "BPtnrService.searchPtnrStop"));
		return outParam;
	}

	/**
	 * @메소드명 : searchPtnrRst
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 협력사 현황
	 */
	public CoreParamSet searchPtnrRst(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		dsCondition.setColumn(0, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
		dsCondition.setColumn(0, "USER_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
		dsCondition.setColumn(0, "LANG_CD", gdsUserInfo.getColumnAsString(0, "LANG_CD"));

		outParam.setCoreDataSet("dsList", getSqlManager().queryForCoreDataSet(dsCondition, "BPtnrService.searchPtnrRst"));
		return outParam;
	}

	/**
	 * @메소드명 : readPtnr
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 협력사 상세
	 */
	public CoreParamSet readPtnr(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsPtnr = inParams.getCoreDataSet("dsPtnr");
		CoreDataSet dsUser = inParams.getCoreDataSet("gdsUserInfo");

		dsPtnr.setColumn(0, "BRANCH_CD", dsUser.getColumnAsString(0, "BRANCH_CD"));
		dsPtnr.setColumn(0, "LANG_CD", dsUser.getColumnAsString(0, "LANG_CD"));
		dsPtnr.setColumn(0, "PCHRGR_ID", dsUser.getColumnAsString(0, "USER_ID"));

		outParam.setCoreDataSet("dsPtnr", getSqlManager().queryForCoreDataSet(dsPtnr, "BPtnrService.readPtnr"));
		//outParam.setCoreDataSet("dsPtnrPlant", getSqlManager().queryForCoreDataSet(dsPtnr, "BPtnrService.searchPtnrPlant"));
		//outParam.setCoreDataSet("dsPtnrMaker", getSqlManager().queryForCoreDataSet(dsPtnr, "BPtnrService.searchPtnrMaker"));
		outParam.setCoreDataSet("dsUser", getSqlManager().queryForCoreDataSet(dsPtnr, "BPtnrService.searchPtnrUserList"));
		//outParam.setCoreDataSet("dsCard", getSqlManager().queryForCoreDataSet(dsPtnr, "BPtnrService.searchPtnrMgmt"));
		//outParam.setCoreDataSet("dsEvlTmplList", getSqlManager().queryForCoreDataSet(dsPtnr, "BPtnrService.readEvlTmplList"));

		CoreDataSet dsfile = outParam.getCoreDataSetInstance();
		dsfile.addStringColumn("BRANCH_CD");
		dsfile.addStringColumn("REF_TBL_NM");
		dsfile.addStringColumn("REF_KEY_1");
		dsfile.appendRow();
		dsfile.setColumn(0, "BRANCH_CD", dsPtnr.getColumnAsString(0, "BRANCH_CD"));
		dsfile.setColumn(0, "REF_TBL_NM", "'MM_PTNR'");
		dsfile.setColumn(0, "REF_KEY_1", dsPtnr.getColumnAsString(0, "PTNR_ID"));
		outParam.setCoreDataSet("FileInfo", dsfile);
		outParam = fileModule.getFileInfo(outParam);

		return outParam;
	}

	/**
	 * @메소드명 : searchCard
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 협력사관리 카드 조회
	 */
	public CoreParamSet searchCard(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsPtnr = inParams.getCoreDataSet("dsPtnr");
		CoreDataSet dsUser = inParams.getCoreDataSet("gdsUserInfo");

		if (!dsPtnr.containsColumn("LANG_CD")) {
			dsPtnr.setUpdate(true);
			dsPtnr.addStringColumn("LANG_CD");
		}
		dsPtnr.setColumn(0, "LANG_CD", dsUser.getColumnAsString(0, "LANG_CD"));
		dsPtnr.setColumn(0, "BRANCH_CD", dsUser.getColumnAsString(0, "BRANCH_CD"));

		outParam.setCoreDataSet("dsCard", getSqlManager().queryForCoreDataSet(dsPtnr, "BPtnrService.searchPtnrMgmt"));
		return outParam;
	}

	/**
	 * @메소드명 : savePtnr
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 협력사 저장
	 */
	public CoreParamSet savePtnr(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsPtnr = inParams.getCoreDataSet("dsPtnr");
		CoreDataSet dsSelectGrp = inParams.getCoreDataSet("dsSelectGrp");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		Map<String, Object> conditionMap = new HashMap<String, Object>();
		conditionMap.put("PTNR_ID", dsPtnr.getColumnAsString(0, "PTNR_ID"));
		boolean bTkey = commandModule.isEqualsTkey("MM_PTNR", dsPtnr.getColumnAsString(0, "TKEY"), conditionMap);

		if (!bTkey) {
			outParam.setMessage("EPRO_LABEL_00924");
			return outParam;
		}

		if (!dsPtnr.containsColumn("LANG_CD")) {
			dsPtnr.setUpdate(true);
			dsPtnr.addStringColumn("LANG_CD");
		}
		dsPtnr.setColumn(0, "LANG_CD", gdsUserInfo.getColumnAsString(0, "LANG_CD"));

		CoreDataSet dsDel = CoreDataSetFactory.getDataSet(inParams);
		dsDel.addStringColumn("BRANCH_CD");
		dsDel.addStringColumn("PTNR_ID");
		dsDel.appendRow();
		dsDel.setColumn(0, "BRANCH_CD", dsPtnr.getColumnAsString(0, "BRANCH_CD"));
		dsDel.setColumn(0, "PTNR_ID", dsPtnr.getColumnAsString(0, "PTNR_ID"));
		getSqlManager().deleteToCoreDataSet(dsDel, "BPtnrService.deletePtnrPool");

		for (int i = 0; i < dsSelectGrp.getRowCount(); i++) {
			dsSelectGrp.setColumn(i, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
			dsSelectGrp.setActiveRow(i);
			getSqlManager().insertToCoreDataSet(dsSelectGrp, "BPtnrService.insertPtnrPool");
		}

		dsPtnr.setColumn(0, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
		getSqlManager().updateToCoreDataSet(dsPtnr, "BPtnrService.updatePtnr");
		getSqlManager().updateToCoreDataSet(dsPtnr, "BPtnrService.updatePtnrPorg");
		outParam.setCoreDataSet("dsPtnr", getSqlManager().queryForCoreDataSet(dsPtnr, "BPtnrService.readPtnr"));

		outParam.setMessage("EPRO_LABEL_00002");
		return outParam;
	}

	/**
	 * @메소드명 : savePtnrSms
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc :
	 */
	public CoreParamSet savePtnrSms(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsPtnrList = inParams.getCoreDataSet("dsPtnrList");
		CoreDataSet dsSms = inParams.getCoreDataSet("dsSms");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		String temp = "";
		for (int i = 0; i < dsPtnrList.getRowCount(); i++) {
			temp += "'" + dsPtnrList.getColumnAsString(i, "PTNR_ID") + "',";
		}
		temp = temp.substring(0, temp.length() - 1);
		dsSms.setColumn(0, "PTNR_ID", temp);

		String sndCntnt = dsSms.getColumnAsString(0, "SND_CNTNT");// sms 내용

		dsPtnrList = getSqlManager().queryForCoreDataSet(dsSms, "BPtnrService.selectSysSms");

		for (int i = 0; i < dsPtnrList.getRowCount(); i++) {
			dsPtnrList.setActiveRow(i);
			dsPtnrList.setColumn(i, "SMSID", commandModule.getSeqNextval("MM_SYS_SMS_SEQ", CoerConstain.PROPAGATION_REQUIRED));
			dsPtnrList.setColumn(i, "SND_CNTNT", sndCntnt);
			dsPtnrList.setColumn(i, "SNDR_SYS_TEL", Config.getString("EMAIL.SNDR_SYS_TEL"));

			getSqlManager().insertToCoreDataSet(dsPtnrList, "mailSmsService.insertSms");
		}

		outParam.setMessage("EPRO_LABEL_01293");
		return outParam;
	}

	/**
	 * @메소드명 : searchPtnrAvl
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc :
	 */
	public CoreParamSet searchPtnrAvl(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		dsCondition.setColumn(0, "LANG_CD", gdsUserInfo.getColumnAsString(0, "LANG_CD"));

		outParam.setCoreDataSet("dsList", getSqlManager().queryForCoreDataSet(dsCondition, "BPtnrService.searchPtnrAvl"));
		return outParam;
	}

	/**
	 * @메소드명 : savePtnrMgmt
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 관리카드 저장
	 */
	public CoreParamSet savePtnrMgmt(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCard = inParams.getCoreDataSet("dsCard");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		String seq = "";
		seq = commandModule.getSeqNextval("MM_PTNR_MGMT_SEQ", CoerConstain.PROPAGATION_REQUIRED);

		dsCard.setColumn(0, "MGMT_HSTR_NO", seq);
		dsCard.setColumn(0, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
		dsCard.setColumn(0, "CRTR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
		dsCard.setColumn(0, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
		getSqlManager().insertToCoreDataSet(dsCard, "BPtnrService.insertPtnrMgmt");

		inParams.put("bizGubun", "PTNR_MGMT");
		outParam = fileModule.saveFileInfo(inParams);
		outParam.setMessage("EPRO_LABEL_00002");

		return outParam;
	}

	/**
	 * @메소드명 : readPtnrMgmt
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 관리카드 조회
	 */
	public CoreParamSet readMgmtCard(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCard = inParams.getCoreDataSet("dsCard");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		dsCard.setColumn(0, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
		dsCard.setColumn(0, "LANG_CD", gdsUserInfo.getColumnAsString(0, "LANG_CD"));

		outParam.setCoreDataSet("dsCard", getSqlManager().queryForCoreDataSet(dsCard, "BPtnrService.readMgmtCard"));

		dsCard = outParam.getCoreDataSet("dsCard");

		CoreDataSet dsfile = outParam.getCoreDataSetInstance();
		dsfile.addStringColumn("BRANCH_CD");
		dsfile.addStringColumn("REF_TBL_NM");
		dsfile.addStringColumn("REF_KEY_1");
		dsfile.addStringColumn("REF_KEY_2");
		dsfile.appendRow();
		dsfile.setColumn(0, "BRANCH_CD", dsCard.getColumnAsString(0, "BRANCH_CD"));
		dsfile.setColumn(0, "REF_TBL_NM", "'MM_PTNR_MGMT'");
		dsfile.setColumn(0, "REF_KEY_1", dsCard.getColumnAsString(0, "MGMT_HSTR_NO"));
		dsfile.setColumn(0, "REF_KEY_2", dsCard.getColumnAsString(0, "PTNR_ID"));
		outParam.setCoreDataSet("FileInfo", dsfile);
		outParam = fileModule.getFileInfo(outParam);

		return outParam;
	}

	/**
	 * @메소드명 : savePtnrSel
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 잠재업체 지정
	 */
	public CoreParamSet savePtnrSel(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsPtnr = inParams.getCoreDataSet("dsPtnr");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");
		CoreDataSet dsSysCard = inParams.getCoreDataSet("dsSysCard");

		Map<String, Object> conditionMap = new HashMap<String, Object>();
		conditionMap.put("PTNR_ID", dsPtnr.getColumnAsString(0, "PTNR_ID"));
		boolean bTkey = commandModule.isEqualsTkey("MM_PTNR", dsPtnr.getColumnAsString(0, "TKEY"), conditionMap);

		if (!bTkey) {
			outParam.setMessage("EPRO_LABEL_00924");
			return outParam;
		}

		if (dsPtnr.getColumnAsString(0, "CD_PTNR_STTS").equals("SR10NREQ")) {
			MailSmsModule.saveMailSms("PTNR_SEL", inParams);
		}

		dsPtnr.setColumn(0, "CD_PTNR_STTS", "SR10NCLO");
		if (null == dsPtnr.getColumnAsString(0, "SAP_VENDOR") || "".equals(dsPtnr.getColumnAsString(0, "SAP_VENDOR"))) {
			dsPtnr.setColumn(0, "CD_PORG_UNIT_STTS", "SR20WAI");
		} else {
			dsPtnr.setColumn(0, "CD_PORG_UNIT_STTS", "SR20PTNR");
		}

		if (!dsPtnr.containsColumn("LANG_CD")) {
			dsPtnr.setUpdate(true);
			dsPtnr.addStringColumn("LANG_CD");
		}
		dsPtnr.setColumn(0, "LANG_CD", gdsUserInfo.getColumnAsString(0, "LANG_CD"));
		dsPtnr.setColumn(0, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
		dsPtnr.setColumn(0, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));

		getSqlManager().updateToCoreDataSet(dsPtnr, "BPtnrService.updateUser");
		if ("Y".equals(getSqlManager().queryForCoreDataSet(dsPtnr, "BPtnrService.chkUserRoleYN").getColumnAsString(0, "YN"))) {
			getSqlManager().insertToCoreDataSet(dsPtnr, "BPtnrService.insertUserRole");
		}

		dsSysCard.setColumn(0, "MGMT_HSTR_NO", commandModule.getSeqNextval("MM_PTNR_MGMT_SEQ", CoerConstain.PROPAGATION_REQUIRED));
		dsSysCard.setColumn(0, "PTNR_ID", dsPtnr.getColumnAsString(0, "PTNR_ID"));
		dsSysCard.setColumn(0, "CD_MGMT_TYPE", "SR30SYS");
		dsSysCard.setColumn(0, "ATTCH_FILE_CNT", "");
		dsSysCard.setColumn(0, "CRTR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
		dsSysCard.setColumn(0, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));

		getSqlManager().insertToCoreDataSet(dsSysCard, "BPtnrService.insertPtnrMgmt");

		getSqlManager().updateToCoreDataSet(dsPtnr, "BPtnrService.savePtnrSel");
		getSqlManager().updateToCoreDataSet(dsPtnr, "BPtnrService.savePtnrPorgSel");
		outParam.setCoreDataSet("dsPtnr", getSqlManager().queryForCoreDataSet(dsPtnr, "BPtnrService.readPtnr"));

		outParam.setMessage("EPRO_LABEL_00843");

		return outParam;
	}

	/**
	 * @메소드명 : savePtnrRej
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 잠재업체 등록거부
	 */
	public CoreParamSet savePtnrRej(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsPtnr = inParams.getCoreDataSet("dsPtnr");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");
		CoreDataSet dsSysCard = inParams.getCoreDataSet("dsSysCard");

		Map<String, Object> conditionMap = new HashMap<String, Object>();
		conditionMap.put("PTNR_ID", dsPtnr.getColumnAsString(0, "PTNR_ID"));
		boolean bTkey = commandModule.isEqualsTkey("MM_PTNR", dsPtnr.getColumnAsString(0, "TKEY"), conditionMap);

		if (!bTkey) {
			outParam.setMessage("EPRO_LABEL_00924");
			return outParam;
		}

		dsSysCard.setColumn(0, "MGMT_HSTR_NO", commandModule.getSeqNextval("MM_PTNR_MGMT_SEQ", CoerConstain.PROPAGATION_REQUIRED));
		dsSysCard.setColumn(0, "PTNR_ID", dsPtnr.getColumnAsString(0, "PTNR_ID"));
		dsSysCard.setColumn(0, "CD_MGMT_TYPE", "SR30SYS");
		dsSysCard.setColumn(0, "ATTCH_FILE_CNT", "");
		dsSysCard.setColumn(0, "CRTR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
		dsSysCard.setColumn(0, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));

		getSqlManager().insertToCoreDataSet(dsSysCard, "BPtnrService.insertPtnrMgmt");

		dsPtnr.setColumn(0, "CD_PTNR_STTS", "SR10NREJ");
		dsPtnr.setColumn(0, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
		if (!dsPtnr.containsColumn("LANG_CD")) {
			dsPtnr.setUpdate(true);
			dsPtnr.addStringColumn("LANG_CD");
		}
		dsPtnr.setColumn(0, "LANG_CD", gdsUserInfo.getColumnAsString(0, "LANG_CD"));

		getSqlManager().updateToCoreDataSet(dsPtnr, "BPtnrService.savePtnrRej");
		getSqlManager().updateToCoreDataSet(dsPtnr, "BPtnrService.savePtnrPorgRej");
		outParam.setCoreDataSet("dsPtnr", getSqlManager().queryForCoreDataSet(dsPtnr, "BPtnrService.readPtnr"));
		outParam.setMessage("EPRO_LABEL_01089");

		return outParam;
	}

	/**
	 * @메소드명 : savePtnrStop
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 협력사 거래중지
	 */
	public CoreParamSet savePtnrStop(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsPtnrStop = inParams.getCoreDataSet("dsReturn");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");
		CoreDataSet dsSysCard = inParams.getCoreDataSet("dsSysCard");

		Map<String, Object> conditionMap = new HashMap<String, Object>();
		conditionMap.put("PTNR_ID", dsPtnrStop.getColumnAsString(0, "PTNR_ID"));
		conditionMap.put("BRANCH_CD", dsPtnrStop.getColumnAsString(0, "BRANCH_CD"));
		boolean bTkey = commandModule.isEqualsTkey("MM_PTNR_PORG", dsPtnrStop.getColumnAsString(0, "PORG_TKEY"), conditionMap);

		if (!bTkey) {
			outParam.setMessage("EPRO_LABEL_00924");
			return outParam;
		}

		for (int i = 0; i < dsPtnrStop.getRowCount(); i++) {
			dsPtnrStop.setColumn(i, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));

			dsSysCard.setColumn(0, "MGMT_HSTR_NO", commandModule.getSeqNextval("MM_PTNR_MGMT_SEQ", CoerConstain.PROPAGATION_REQUIRED));
			dsSysCard.setColumn(0, "PTNR_ID", dsPtnrStop.getColumnAsString(i, "PTNR_ID"));
			dsSysCard.setColumn(0, "CD_MGMT_TYPE", "SR30SYS");
			dsSysCard.setColumn(0, "ATTCH_FILE_CNT", "");
			dsSysCard.setColumn(0, "CRTR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
			dsSysCard.setColumn(0, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));

			dsSysCard.setActiveRow(0);
			getSqlManager().insertToCoreDataSet(dsSysCard, "BPtnrService.insertPtnrMgmt");

			dsPtnrStop.setActiveRow(i);
			getSqlManager().updateToCoreDataSet(dsPtnrStop, "BPtnrService.savePtnrStop");
		}

		outParam.setMessage("EPRO_LABEL_01112");

		return outParam;
	}

	/**
	 * @메소드명 : saveUserPtnrAdd
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 협력사 즐겨찾기 추가
	 */
	public CoreParamSet saveUserPtnrAdd(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsBookMark = inParams.getCoreDataSet("dsReturn");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		for (int i = 0; i < dsBookMark.getRowCount(); i++) {
			dsBookMark.setActiveRow(i);
			dsBookMark.setColumn(i, "USER_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
			dsBookMark.setColumn(i, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
			getSqlManager().insertToCoreDataSet(dsBookMark, "BPtnrService.saveUserPtnrAdd");
		}

		outParam.setMessage("EPRO_LABEL_01019");

		return outParam;
	}

	/**
	 * @메소드명 : saveUserPtnrDel
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 협력사 즐겨찾기 삭제
	 */
	public CoreParamSet saveUserPtnrDel(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsBookMark = inParams.getCoreDataSet("dsReturn");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		for (int i = 0; i < dsBookMark.getRowCount(); i++) {
			dsBookMark.setActiveRow(i);
			dsBookMark.setColumn(i, "USER_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
			getSqlManager().deleteToCoreDataSet(dsBookMark, "BPtnrService.saveUserPtnrDel");
		}

		outParam.setMessage("EPRO_LABEL_00871");

		return outParam;
	}

	/**
	 * @메소드명 : readEvalPtnr
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 협력사 거래신청평가서 조회
	 */
	public CoreParamSet readEvalPtnr(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsEval = inParams.getCoreDataSet("dsEval");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		CoreDataSet dsList = null;
		CoreDataSet dsScale = null;

		if (!dsEval.containsColumn("LANG_CD")) {
			dsEval.setUpdate(true);
			dsEval.addStringColumn("LANG_CD");
		}
		dsEval.setColumn(0, "LANG_CD", gdsUserInfo.getColumnAsString(0, "LANG_CD"));

		if ("new".equals(dsEval.getColumnAsString(0, "STTS")) && dsEval.getColumnAsString(0, "EVAL_ID") == null) {
			dsScale = getSqlManager().queryForCoreDataSet(dsEval, "BPtnrService.readEvalScaleTmpl");
			dsList = getSqlManager().queryForCoreDataSet(dsEval, "BPtnrService.readEvalListTmpl");
			dsEval = getSqlManager().queryForCoreDataSet(dsEval, "BPtnrService.readEvalTmpl");

		} else {
			dsScale = getSqlManager().queryForCoreDataSet(dsEval, "BPtnrService.readEvalScale");
			dsList = getSqlManager().queryForCoreDataSet(dsEval, "BPtnrService.readEvalList");
			dsEval = getSqlManager().queryForCoreDataSet(dsEval, "BPtnrService.readEval");
		}

		outParam.setCoreDataSet("dsScale", dsScale);
		outParam.setCoreDataSet("dsList", dsList);
		outParam.setCoreDataSet("dsEval", dsEval);

		return outParam;
	}

	/**
	 * @메소드명 : saveEvalPtnr
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 협력사 거래신청평가서 저장
	 */
	public CoreParamSet saveEvalPtnr(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsEval = inParams.getCoreDataSet("dsEval");
		CoreDataSet dsList = inParams.getCoreDataSet("dsList");
		CoreDataSet dsScale = inParams.getCoreDataSet("dsScale");

		if ("".equals(dsEval.getColumnAsString(0, "EVAL_ID"))) {
			String seq = "";
			//			seq = commandModule.getSeqNextval("MM_EVL_RUN_SEQ", CoerConstain.PROPAGATION_REQUIRED);
			//
			//			dsEval.setColumn(0, "EVAL_ID", seq);
			//			getSqlManager().insertToCoreDataSet(dsEval, "BPtnrService.insertEval");
			//
			//			for (int i = 0; i < dsList.getRowCount(); i++) {
			//				dsList.setColumn(i, "EVAL_ID", seq);
			//				dsList.setColumn(i, "BRANCH_CD", dsEval.getColumnAsString(0, "BRANCH_CD"));
			//				dsList.setColumn(i, "CRTR_ID", dsEval.getColumnAsString(0, "EVAL_CHRGR_ID"));
			//
			//				dsList.setActiveRow(i);
			//				getSqlManager().insertToCoreDataSet(dsList, "BPtnrService.insertEvalItem");
			//			}

			for (int i = 0; i < dsScale.getRowCount(); i++) {
				dsScale.setColumn(i, "EVAL_ID", seq);
				if (!dsScale.containsColumn("BRANCH_CD")) {
					dsScale.setUpdate(true);
					dsScale.addStringColumn("BRANCH_CD");
				}
				dsScale.setColumn(i, "BRANCH_CD", dsEval.getColumnAsString(0, "BRANCH_CD"));

				dsScale.setActiveRow(i);
				getSqlManager().insertToCoreDataSet(dsScale, "BPtnrService.insertEvalItemScale");
			}

			outParam.setCoreDataSet("dsEval", dsEval);
			outParam.setMessage("EPRO_LABEL_01045");

		} else {
			getSqlManager().updateToCoreDataSet(dsEval, "BPtnrService.updateEval");

			for (int i = 0; i < dsList.getRowCount(); i++) {
				dsList.setColumn(i, "CRTR_ID", dsEval.getColumnAsString(0, "EVAL_CHRGR_ID"));

				dsList.setActiveRow(i);
				getSqlManager().updateToCoreDataSet(dsList, "BPtnrService.updateEvalItem");
			}

			outParam.setCoreDataSet("dsEval", dsEval);
			outParam.setMessage("EPRO_LABEL_01045");
		}

		getSqlManager().updateToCoreDataSet(dsEval, "BPtnrService.updateEvalToPtnr");

		return outParam;
	}

	/**
	 * @메소드명 : searchPtnrSap
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc :
	 */
	public CoreParamSet searchPtnrSap(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsSrchOpt = inParams.getCoreDataSet("dsSrchOpt");

		outParam.setCoreDataSet("dsList", getSqlManager().queryForCoreDataSet(dsSrchOpt, "BPtnrService.searchPtnrSap"));

		return outParam;
	}

	/**
	 * @메소드명 : savePtnrSap
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc :
	 */
	public CoreParamSet savePtnrSap(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsTmp = inParams.getCoreDataSet("dsTmp");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		dsTmp.setColumn(0, "USER_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
		getSqlManager().updateToCoreDataSet(dsTmp, "BPtnrService.savePtnrSap");

		outParam.setMessage("EPRO_LABEL_01341");
		return outParam;
	}
}