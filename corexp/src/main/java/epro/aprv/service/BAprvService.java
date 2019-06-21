/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 *
 * @서비스명		: epro.aprv.service BAprvService.java                       
 * @생성자		:
 * @생성일시		:
 * @구분			: 승인
 * @최종수정자		: 송태봉
 * @최종수정일시	: 2017.09.07
 */
package epro.aprv.service;

import java.util.HashMap;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import core.common.constain.CoerConstain;
import core.vo.model.coreset.CoreDataSet;
import core.vo.model.coreset.CoreParamSet;
import core.vo.model.coreset.CoreParamSetFactory;
import core.web.service.CoreService;
import epro.cntr.service.BCntrService;
import epro.com.module.CommandModule;
import epro.com.module.FileModule;

@Service
public class BAprvService extends CoreService {

	@Autowired
	CommandModule commandModule;
	@Autowired
	FileModule fileModule;

	@Autowired
	BCntrService BCntrService;
	// @Autowired
	// MailSmsModule MailSmsModule;

	private static final Log LOG = LogFactory.getLog(BAprvService.class);

	/**
	 * @메소드명 : followUpAprv
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 승인 후속처리
	 */
	public void followUpAprv(CoreDataSet dsAprvInfo, CoreParamSet inParams) {
		String aprvStts = dsAprvInfo.getColumnAsString(0, "CD_APRV_STTS");
		String docCtgr = dsAprvInfo.getColumnAsString(0, "CD_APRV_DOC_CTGR");
		
		if (!dsAprvInfo.containsColumn("CD_HEADER_STTS")) {
			dsAprvInfo.setUpdate(true);
			dsAprvInfo.addStringColumn("CD_HEADER_STTS");
			dsAprvInfo.addStringColumn("CD_DETAIL_STTS");
		}

		if ("AP11PUR".equals(docCtgr)) {
			if ("AP10ING".equals(aprvStts)) { // 승인요청
				dsAprvInfo.setColumn(0, "CD_HEADER_STTS", "PR11APP");
				dsAprvInfo.setColumn(0, "CD_DETAIL_STTS", "PR13APP");
			} else if ("AP10CLO".equals(aprvStts)) { // 승인완료
				dsAprvInfo.setColumn(0, "CD_HEADER_STTS", "PR11CLO");
				dsAprvInfo.setColumn(0, "CD_DETAIL_STTS", "PR13RCV");
			} else { // 승인 취소,반려
				dsAprvInfo.setColumn(0, "CD_HEADER_STTS", "PR11WRI");
				dsAprvInfo.setColumn(0, "CD_DETAIL_STTS", "PR13WRI");
			}
			
			// 후속 처리
			getSqlManager().updateToCoreDataSet(dsAprvInfo, "BAprvService.updatePrStts");
			getSqlManager().updateToCoreDataSet(dsAprvInfo, "BAprvService.updatePrItemStts");
		}else if ("AP11CNTR".equals(docCtgr)) {
			if ("AP10ING".equals(aprvStts)) { // 승인요청
				dsAprvInfo.setColumn(0, "CD_HEADER_STTS", "CT10APP");
				//CoreDataSet dsCntr = getSqlManager().queryForCoreDataSet(dsAprvInfo, "BAprvService.readCntrInfo");

				/*if (!"CT11B03".equals(dsCntr.getColumnAsString(0, "CD_CNTR_CTGR")) && ("".equals(dsCntr.getColumnAsString(0, "REPORT_NM")) || null == dsCntr.getColumnAsString(0, "REPORT_NM"))) {
					dsCntr.setColumn(0, "CONTENT", BCntrService.bagicTagChange(dsCntr, dsCntr.getColumnAsString(0, "CONTENT"), "header", true));
				}*/

				//getSqlManager().updateToCoreDataSet(dsCntr, "BAprvService.updateCntrCntnt");
				
				// // 파일복사
				// if (!dsAprvInfo.containsColumn("REF_TBL_NM")) {
				// dsAprvInfo.setUpdate(true);
				// dsAprvInfo.addStringColumn("REF_TBL_NM");
				// }
				// dsAprvInfo.setColumn(0, "REF_TBL_NM",
				// "'MM_RFQ','MM_RFQ_ITEM'");
				// CoreDataSet dsRfqFile =
				// getSqlManager().queryForCoreDataSet(dsAprvInfo,
				// "BAprvService.readFile");
				// for (int j = 0; j < dsRfqFile.getRowCount(); j++) {
				// dsRfqFile.setActiveRow(j);
				// dsRfqFile.setColumn(j, "CRTR_ID", "SYSTEM");
				// dsRfqFile.setColumn(j, "REF_TBL_NM",
				// dsRfqFile.getColumnAsString(j, "REF_TBL_NM") + "_APRV");
				// dsRfqFile.setColumn(j, "REF_KEY_1",
				// dsAprvInfo.getColumnAsString(0, "APP_DOC_ID"));
				// getSqlManager().queryForCoreDataSet(dsRfqFile,
				// "FileService.insertFileRef");
				// getSqlManager().queryForCoreDataSet(dsRfqFile,
				// "FileService.updateFileRefCnt");
				// }
				
				getSqlManager().insertToCoreDataSet(dsAprvInfo, "BAprvService.insertCntrHistory");
			} else if ("AP10CLO".equals(aprvStts)) { // 승인완료
				dsAprvInfo.setColumn(0, "CD_HEADER_STTS", "CT10SREQ");
				getSqlManager().insertToCoreDataSet(dsAprvInfo, "BAprvService.insertCntrHistory");

				// MailSmsModule.saveMailSms("RFQ_SEND", inParams);
			} else { // 승인 취소,반려
				dsAprvInfo.setColumn(0, "CD_HEADER_STTS", "CT10WRI");
				getSqlManager().insertToCoreDataSet(dsAprvInfo, "BAprvService.insertCntrHistory");
			}
			// 후속 처리
			getSqlManager().updateToCoreDataSet(dsAprvInfo, "BAprvService.updateCntrStts");

		}else if ("AP11POR".equals(docCtgr)) {
			if ("AP10ING".equals(aprvStts)) { // 승인요청
				dsAprvInfo.setColumn(0, "CD_HEADER_STTS", "PO10APP");
			} else if ("AP10CLO".equals(aprvStts)) { // 승인완료
				dsAprvInfo.setColumn(0, "CD_HEADER_STTS", "PO10SND");
				dsAprvInfo.setColumn(0, "CD_DETAIL_STTS", "PO12NEW");
			} else { // 승인 취소,반려
				dsAprvInfo.setColumn(0, "CD_HEADER_STTS", "PO10WRI");
			}
			// 후속 처리
			getSqlManager().updateToCoreDataSet(dsAprvInfo, "BAprvService.updatePoStts");
			getSqlManager().updateToCoreDataSet(dsAprvInfo, "BAprvService.updatePoItemStts");
		}
	}

	/**
	 * @메소드명 : saveAprvReq
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 승인처리
	 */
	public CoreParamSet saveAprvReq(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);

		CoreDataSet dsAprvInfo = inParams.getCoreDataSet("dsAprvInfo");
		CoreDataSet dsAprvLine = inParams.getCoreDataSet("dsAprvLine");

		// 승인 요청
		if (null == dsAprvInfo.getColumnAsString(0, "APP_DOC_ID")) {
			String seq = commandModule.getSeqNextval("MM_APRV_SEQ", CoerConstain.PROPAGATION_REQUIRED);
			dsAprvInfo.setColumn(0, "APP_DOC_ID", seq);

			getSqlManager().insertToCoreDataSet(dsAprvInfo, "BAprvService.insertReqAprvInfo");

			// 승인자 Insert
			String crtrId = dsAprvLine.getColumnAsString(0, "APRVR_ID");
			for (int i = 0; i < dsAprvLine.getRowCount(); i++) {
				dsAprvLine.setColumn(i, "APP_DOC_ID", seq);
				dsAprvLine.setColumn(i, "CRTR_ID", crtrId);
				dsAprvLine.setColumn(i, "LOGIN_USER", crtrId);
				dsAprvLine.setActiveRow(i);

				getSqlManager().insertToCoreDataSet(dsAprvLine, "BAprvService.insertReqAprvLine");
			}

			// 후속처리
			followUpAprv(dsAprvInfo, inParams);

			inParams.put("bizGubun", "APRV");
			outParam = fileModule.saveFileInfo(inParams);

			// MailSmsModule.saveMailSms("APRV", inParams);
			outParam.setMessage("승인요청 되었습니다.");
			outParam.setCoreDataSet("dsAprvInfo", dsAprvInfo);

			// 승인 수정
		} else {

			Map<String, Object> conditionMap = new HashMap<String, Object>();
			conditionMap.put("BRANCH_CD", dsAprvInfo.getColumnAsString(0, "BRANCH_CD"));
			conditionMap.put("APP_DOC_ID", dsAprvInfo.getColumnAsString(0, "APP_DOC_ID"));
			boolean bTkey = commandModule.isEqualsTkey("MM_APRV", dsAprvInfo.getColumnAsString(0, "TKEY"), conditionMap);

			if (!bTkey) {
				outParam.setMessage("EPRO_LABEL_00924");
				return outParam;
			}

			// 부재자일경우
			if (!dsAprvInfo.getColumnAsString(0, "REQR_ID").equals(dsAprvInfo.getColumnAsString(0, "LOGIN_USER"))) {
				CoreDataSet tmpDs = outParam.getCoreDataSetInstance();
				tmpDs.addStringColumn("BRANCH_CD");
				tmpDs.addStringColumn("TARGET_ID");
				tmpDs.addStringColumn("LOGIN_USER");
				tmpDs.appendRow();
				tmpDs.setColumn(0, "BRANCH_CD", dsAprvInfo.getColumnAsString(0, "BRANCH_CD"));
				tmpDs.setColumn(0, "TARGET_ID", dsAprvInfo.getColumnAsString(0, "REQR_ID"));
				tmpDs.setColumn(0, "LOGIN_USER", dsAprvInfo.getColumnAsString(0, "LOGIN_USER"));
				tmpDs = getSqlManager().queryForCoreDataSet(tmpDs, "BAprvService.checkAbsUser");

				if ("N".equals(tmpDs.getColumnAsString(0, "CHK_YN")) || 0 == tmpDs.getRowCount()) {
					outParam.setMessage("EPRO_LABEL_01229");
					return outParam;
				}
			}

			getSqlManager().deleteToCoreDataSet(dsAprvInfo, "BAprvService.deleteAprvr");

			for (int i = 0; i < dsAprvLine.getRowCount(); i++) {
				dsAprvLine.setActiveRow(i);
				getSqlManager().insertToCoreDataSet(dsAprvLine, "BAprvService.insertReqAprvLine");
			}

			getSqlManager().updateToCoreDataSet(dsAprvInfo, "BAprvService.saveAprvCplt");

			if ("AP10CLO".equals(dsAprvInfo.getColumnAsString(0, "CD_APRV_STTS"))) {
				followUpAprv(dsAprvInfo, inParams);
				// MailSmsModule.saveMailSms("APRV", inParams);
				outParam.setMessage("승인요청 되었습니다.");
			} else {
				outParam.setMessage("EPRO_LABEL_00002");
			}

		}

		return outParam;
	}

	/**
	 * @메소드명 : saveAprvCplt
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 결과저장
	 */
	public CoreParamSet saveAprvCplt(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsAprvInfo = inParams.getCoreDataSet("dsAprvInfo");
		CoreDataSet dsAprvLine = inParams.getCoreDataSet("dsAprvLine");

		Map<String, Object> conditionMap = new HashMap<String, Object>();
		conditionMap.put("BRANCH_CD", dsAprvInfo.getColumnAsString(0, "BRANCH_CD"));
		conditionMap.put("APP_DOC_ID", dsAprvInfo.getColumnAsString(0, "APP_DOC_ID"));
		boolean bTkey = commandModule.isEqualsTkey("MM_APRV", dsAprvInfo.getColumnAsString(0, "TKEY"), conditionMap);

		if (!bTkey) {
			outParam.setMessage("EPRO_LABEL_00924");
			return outParam;
		}
		// 부재자일경우
		if (!dsAprvInfo.getColumnAsString(0, "TARGET_ID").equals(dsAprvInfo.getColumnAsString(0, "LOGIN_USER"))) {
			CoreDataSet tmpDs = outParam.getCoreDataSetInstance();
			tmpDs.addStringColumn("BRANCH_CD");
			tmpDs.addStringColumn("TARGET_ID");
			tmpDs.addStringColumn("LOGIN_USER");
			tmpDs.appendRow();
			tmpDs.setColumn(0, "BRANCH_CD", dsAprvInfo.getColumnAsString(0, "BRANCH_CD"));
			tmpDs.setColumn(0, "TARGET_ID", dsAprvInfo.getColumnAsString(0, "TARGET_ID"));
			tmpDs.setColumn(0, "LOGIN_USER", dsAprvInfo.getColumnAsString(0, "LOGIN_USER"));
			tmpDs = getSqlManager().queryForCoreDataSet(tmpDs, "BAprvService.checkAbsUser");

			if ("N".equals(tmpDs.getColumnAsString(0, "CHK_YN")) || 0 == tmpDs.getRowCount()) {
				outParam.setMessage("EPRO_LABEL_01229");
				return outParam;
			}
		}
		getSqlManager().deleteToCoreDataSet(dsAprvInfo, "BAprvService.deleteAprvr");

		for (int i = 0; i < dsAprvLine.getRowCount(); i++) {
			dsAprvLine.setActiveRow(i);
			getSqlManager().insertToCoreDataSet(dsAprvLine, "BAprvService.insertReqAprvLine");
		}
		getSqlManager().updateToCoreDataSet(dsAprvInfo, "BAprvService.saveAprvCplt");

		String msg = "";

		for (int i = 0; i < dsAprvLine.getRowCount(); i++) {
			if (dsAprvInfo.getColumnAsString(0, "TARGET_ID").equals(dsAprvLine.getColumnAsString(i, "APRVR_ID"))) {
				msg = dsAprvLine.getColumnAsString(i, "CD_APRV_LN_STTS");

				if (msg.equals("AP13CFM"))
					msg = "승인되었습니다.";
				else
					msg = "EPRO_LABEL_00881";

				dsAprvLine.setActiveRow(i);
				getSqlManager().updateToCoreDataSet(dsAprvLine, "BAprvService.saveAprvCpltLine");
			}
		}

		if (!"AP10ING".equals(dsAprvInfo.getColumnAsString(0, "CD_APRV_STTS"))) {
			followUpAprv(dsAprvInfo, inParams); // 후속처리
		} else {
			// MailSmsModule.saveMailSms("APRV", inParams);
		}

		outParam.setMessage(msg);

		return outParam;
	}

	/**
	 * @메소드명 : saveAprvCfm
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 전결처리
	 */
	public CoreParamSet saveAprvCfm(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsAprvInfo = inParams.getCoreDataSet("dsAprvInfo");
		CoreDataSet dsAprvLine = inParams.getCoreDataSet("dsAprvLine");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		int aprvLineCnt = 0;
		if (null == dsAprvInfo.getColumnAsString(0, "APP_DOC_ID")) {
			String seq = commandModule.getSeqNextval("MM_APRV_SEQ", CoerConstain.PROPAGATION_REQUIRED);
			dsAprvInfo.setColumn(0, "APP_DOC_ID", seq);

			getSqlManager().insertToCoreDataSet(dsAprvInfo, "BAprvService.insertReqAprvInfo");

			// 승인자 Insert
			String crtrId = dsAprvLine.getColumnAsString(0, "APRVR_ID");
			aprvLineCnt = dsAprvLine.getRowCount();
			for (int i = 0; i < aprvLineCnt; i++) {
				dsAprvLine.setActiveRow(i);
				dsAprvLine.setColumn(i, "APP_DOC_ID", seq);
				dsAprvLine.setColumn(i, "CRTR_ID", crtrId);
				dsAprvLine.setColumn(i, "LOGIN_USER", crtrId);
				dsAprvLine.setColumn(i, "CD_APRV_LN_STTS", "AP13CFM");
				dsAprvLine.setColumn(i, "OPNN", gdsUserInfo.getColumnAsString(0, "USER_NM") + "에 의해 전결 처리 되었습니다.");

				getSqlManager().insertToCoreDataSet(dsAprvLine, "BAprvService.insertReqAprvLine");
			}

		}

		// 후속처리
		followUpAprv(dsAprvInfo, inParams);
		dsAprvInfo.setColumn(0, "CD_APRV_STTS", "AP10CLO");
		followUpAprv(dsAprvInfo, inParams);

		dsAprvInfo.setColumn(0, "WAIT_SEQ", aprvLineCnt);
		dsAprvInfo.setColumn(0, "APRV_CNT", aprvLineCnt);
		dsAprvInfo.setColumn(0, "APRV_OPNN", gdsUserInfo.getColumnAsString(0, "USER_NM") + "에 의해 전결 처리 되었습니다.");
		dsAprvInfo.setColumn(0, "LOGIN_USER", gdsUserInfo.getColumnAsString(0, "USER_ID"));
		getSqlManager().updateToCoreDataSet(dsAprvInfo, "BAprvService.saveAprvCplt");

		inParams.put("bizGubun", "APRV");
		outParam = fileModule.saveFileInfo(inParams);

		outParam.setMessage("전결처리 되었습니다.");
		outParam.setCoreDataSet("dsAprvInfo", dsAprvInfo);

		return outParam;
	}

	/**
	 * @메소드명 : searchAprvDraft
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 기안문서 조회
	 */
	public CoreParamSet searchAprvDraft(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		dsCondition.setColumn(0, "LANG_CD", gdsUserInfo.getColumnAsString(0, "LANG_CD"));

		CoreDataSet dsList = getSqlManager().queryForCoreDataSet(dsCondition, "BAprvService.searchAprvDraft");
		outParam.setCoreDataSet("dsList", dsList);

		return outParam;
	}

	/**
	 * @메소드명 : searchAprvReq
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 승인요청현황
	 */
	public CoreParamSet searchAprvReq(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		dsCondition.setColumn(0, "LANG_CD", gdsUserInfo.getColumnAsString(0, "LANG_CD"));

		CoreDataSet dsList = getSqlManager().queryForCoreDataSet(dsCondition, "BAprvService.searchAprvReq");
		outParam.setCoreDataSet("dsList", dsList);

		return outParam;
	}

	/**
	 * @메소드명 : searchAprvRst
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 승인완료현황
	 */
	public CoreParamSet searchAprvRst(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		dsCondition.setColumn(0, "LANG_CD", gdsUserInfo.getColumnAsString(0, "LANG_CD"));

		CoreDataSet dsList = getSqlManager().queryForCoreDataSet(dsCondition, "BAprvService.searchAprvRst");
		outParam.setCoreDataSet("dsList", dsList);

		return outParam;
	}

	/**
	 * @메소드명 : readAprv
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 승인 상세조회
	 */
	public CoreParamSet readAprv(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsAprvInfo = inParams.getCoreDataSet("dsAprvInfo");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		if (!dsAprvInfo.containsColumn("LANG_CD")) {
			dsAprvInfo.setUpdate(true);
			dsAprvInfo.addStringColumn("LANG_CD");
		}
		dsAprvInfo.setColumn(0, "LANG_CD", gdsUserInfo.getColumnAsString(0, "LANG_CD"));
		CoreDataSet aprvData = getSqlManager().queryForCoreDataSet(dsAprvInfo, "BAprvService.readAprv");
		outParam.setCoreDataSet("dsAprvInfo", aprvData);
		outParam.setCoreDataSet("dsAprvLine", getSqlManager().queryForCoreDataSet(dsAprvInfo, "BAprvService.readAprvLine"));
		String REF_TBL_NM = "";
		if ("AP11ARFQ".equals(aprvData.getColumnAsString(0, "CD_APRV_DOC_CTGR"))) {

		}

		// CoreDataSet dsfile = outParam.getCoreDataSetInstance();
		// dsfile.addStringColumn("BRANCH_CD");
		// dsfile.addStringColumn("REF_TBL_NM");
		// dsfile.addStringColumn("REF_KEY_1");
		// dsfile.appendRow();
		// dsfile.setColumn(0, "BRANCH_CD", gdsUserInfo.getColumnAsString(0,
		// "BRANCH_CD"));
		// dsfile.setColumn(0, "REF_TBL_NM", REF_TBL_NM);
		// dsfile.setColumn(0, "REF_KEY_1", dsAprvInfo.getColumnAsString(0,
		// "APP_DOC_ID"));
		// outParam.setCoreDataSet("FileInfo", dsfile);
		// outParam = fileModule.getFileInfo(outParam);

		return outParam;
	}

	/**
	 * @메소드명 : readLeader
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 팀장 조회
	 */
	public CoreParamSet readLeader(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsAprvInfo = inParams.getCoreDataSet("dsAprvInfo");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		if (!dsAprvInfo.containsColumn("DEPT_CD")) {
			dsAprvInfo.setUpdate(true);
			dsAprvInfo.addStringColumn("DEPT_CD");
		}
		dsAprvInfo.setColumn(0, "DEPT_CD", gdsUserInfo.getColumnAsString(0, "DEPT_CD"));

		if (!dsAprvInfo.containsColumn("LANG_CD")) {
			dsAprvInfo.setUpdate(true);
			dsAprvInfo.addStringColumn("LANG_CD");
		}
		dsAprvInfo.setColumn(0, "LANG_CD", gdsUserInfo.getColumnAsString(0, "LANG_CD"));

		outParam.setCoreDataSet("dsReturn", getSqlManager().queryForCoreDataSet(dsAprvInfo, "BAprvService.readLeader"));

		return outParam;
	}

	/**
	 * @메소드명 : saveAprvCxl
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 결재 취소
	 */
	public CoreParamSet saveAprvCxl(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsAprvInfo = inParams.getCoreDataSet("dsAprvInfo");

		Map<String, Object> conditionMap = new HashMap<String, Object>();
		conditionMap.put("BRANCH_CD", dsAprvInfo.getColumnAsString(0, "BRANCH_CD"));
		conditionMap.put("APP_DOC_ID", dsAprvInfo.getColumnAsString(0, "APP_DOC_ID"));
		boolean bTkey = commandModule.isEqualsTkey("MM_APRV", dsAprvInfo.getColumnAsString(0, "TKEY"), conditionMap);

		if (!bTkey) {
			outParam.setMessage("EPRO_LABEL_00924");
			return outParam;
		}

		// 부재자일경우
		if (!dsAprvInfo.getColumnAsString(0, "REQR_ID").equals(dsAprvInfo.getColumnAsString(0, "LOGIN_USER"))) {
			CoreDataSet tmpDs = outParam.getCoreDataSetInstance();
			tmpDs.addStringColumn("BRANCH_CD");
			tmpDs.addStringColumn("TARGET_ID");
			tmpDs.addStringColumn("LOGIN_USER");
			tmpDs.appendRow();
			tmpDs.setColumn(0, "BRANCH_CD", dsAprvInfo.getColumnAsString(0, "BRANCH_CD"));
			tmpDs.setColumn(0, "TARGET_ID", dsAprvInfo.getColumnAsString(0, "REQR_ID"));
			tmpDs.setColumn(0, "LOGIN_USER", dsAprvInfo.getColumnAsString(0, "LOGIN_USER"));
			tmpDs = getSqlManager().queryForCoreDataSet(tmpDs, "BAprvService.checkAbsUser");

			if ("N".equals(tmpDs.getColumnAsString(0, "CHK_YN")) || 0 == tmpDs.getRowCount()) {
				outParam.setMessage("EPRO_LABEL_01229");
				return outParam;
			}
		}

		getSqlManager().updateToCoreDataSet(dsAprvInfo, "BAprvService.saveAprvCxl");

		// 결재 후속처리
		followUpAprv(dsAprvInfo, inParams);

		outParam.setMessage("EPRO_LABEL_01143");

		return outParam;
	}
}