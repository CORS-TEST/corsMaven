/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 *
 * @서비스명		: epro.ptnr.service SPtnrService.java                       
 * @생성자		:
 * @생성일시		:
 * @구분			:
 * @최종수정자		:
 * @최종수정일시	:
 */
package epro.ptnr.service;

import java.util.GregorianCalendar;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.nexacro.xapi.data.DataSet;

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
public class SPtnrService extends CoreService {
	private static final Log LOG = LogFactory.getLog(SPtnrService.class);
	@Autowired
	CommandModule commandModule;
	@Autowired
	FileModule fileModule;
	@Autowired
	MailSmsModule MailSmsModule;

	/**
	 * @메소드명 : checkPtnrBizNo
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 사업자번호 체크
	 */
	public CoreParamSet checkPtnrBizNo(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsPtnrChk = inParams.getCoreDataSet("dsPtnrChk");

		outParam.setCoreDataSet("dsPtnrChk", getSqlManager().queryForCoreDataSet(dsPtnrChk, "SPtnrService.checkBizNo"));
		return outParam;
	}

	/**
	 * @메소드명 : checkPtnrUserId
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 아이디 중복 체크
	 */
	public CoreParamSet checkPtnrUserId(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsUserChk = inParams.getCoreDataSet("dsUserChk");

		outParam.setCoreDataSet("dsUserChk",
				getSqlManager().queryForCoreDataSet(dsUserChk, "SPtnrService.checkUserId"));
		return outParam;
	}

	/**
	 * @메소드명 : savePtnrReq
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 협력사 등록요청
	 */
	public CoreParamSet savePtnrReq(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsPtnr = inParams.getCoreDataSet("dsPtnr");
		CoreDataSet dsPtnrMaker = inParams.getCoreDataSet("dsPtnrMaker");
		CoreDataSet dsUser = inParams.getCoreDataSet("dsUser");
		CoreDataSet dsPtnrPlant = inParams.getCoreDataSet("dsPtnrPlant");
		CoreDataSet dsSelectGrp = inParams.getCoreDataSet("dsSelectGrp");

		Map<String, Object> conditionMap = new HashMap<String, Object>();
		conditionMap.put("PTNR_ID", dsPtnr.getColumnAsString(0, "PTNR_ID"));
		boolean bTkey = commandModule.isEqualsTkey("MM_PTNR", dsPtnr.getColumnAsString(0, "TKEY"), conditionMap);

		if (!bTkey) {
			outParam.setMessage("EPRO_LABEL_00924");
			return outParam;
		}

		getSqlManager().updateToCoreDataSet(dsPtnr, "SPtnrService.updatePtnrReq");
		getSqlManager().updateToCoreDataSet(dsPtnr, "SPtnrService.updatePtnrPorgReq");

		if("SR10WRI".equals(dsPtnr.getColumnAsString(0, "CD_PTNR_STTS"))) {
			MailSmsModule.saveMailSms("PTNR_REQ", inParams);
		}
		

		outParam.setMessage("EPRO_LABEL_01127");
		outParam.setCoreDataSet("dsPtnr", dsPtnr);

		return outParam;
	}

	/**
	 * @메소드명 : savePtnrUser
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 신규 사용자 추가
	 */
	public CoreParamSet savePtnrUser(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsDetail = inParams.getCoreDataSet("dsDetail");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		dsDetail.setColumn(0, "P_USER_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
		dsDetail.setColumn(0, "ROLE_ID", "S_GENERAL");
		// 신규 사용자
		if (dsDetail.getRowStatus(0).equals(CoerConstain.INSERT)) {
			// 아이디 중복체크
			outParam.setCoreDataSet("dsTemp",
					getSqlManager().queryForCoreDataSet(dsDetail, "SPtnrService.readCheckUser"));

			CoreDataSet dsTemp = outParam.getCoreDataSet("dsTemp");
			// 아이디가 중복일때
			if ("N".equals(dsTemp.getColumnAsString(0, "CHECK_USER"))) {
				outParam.setMessage("EPRO_LABEL_00949");
				outParam.setErrorCode(1);
				return outParam;
			} else {
				dsDetail.setColumn(0, "PTNR_ID", gdsUserInfo.getColumnAsString(0, "PTNR_ID"));
				// 사용자 정보 insert 부분
				getSqlManager().insertToCoreDataSet(dsDetail, "SPtnrService.insertPtnrUser");

			}
		}

		if (dsDetail.getRowStatus(0).equals(CoerConstain.INSERT)
				|| dsDetail.getRowStatus(0).equals(CoerConstain.UPDATE)) {
			// 대표자 권한 일떄
			if ("Y".equals(dsDetail.getColumnAsString(0, "ALT_RPTST"))) {
				dsDetail.setColumn(0, "ROLE_ID", "S_RPTST");
				// MM_SYS_USER_ROLE테이블의 자신의 권한을 update 하거나 insert 한다.
				getSqlManager().insertToCoreDataSet(dsDetail, "SPtnrService.megerUserRole");
				// MM_SYS_USER_ROLE테이블의 이전사람의 권한을 바꾼다.
				getSqlManager().insertToCoreDataSet(dsDetail, "SPtnrService.updateUserRole");
				getSqlManager().insertToCoreDataSet(dsDetail, "SPtnrService.updateRptstUser");
			} else {
				// MM_SYS_USER_ROLE테이블의 자신의 권한을 update 하거나 insert 한다.
				getSqlManager().insertToCoreDataSet(dsDetail, "SPtnrService.megerUserRole");
			}
			// 권한 데이터 수정후 UPDATE
			if (dsDetail.getRowStatus(0).equals(CoerConstain.UPDATE)) {
				// 사용자 정보 update 부분
				getSqlManager().insertToCoreDataSet(dsDetail, "SPtnrService.updatePtnrUser");
			}
		}

		outParam.setMessage("EPRO_LABEL_00002");
		return outParam;
	}

	/**
	 * @메소드명 : readPtnrReq
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 신규협력사 상세
	 */
	public CoreParamSet readPtnrReq(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsPtnr = inParams.getCoreDataSet("dsPtnr");

		HttpServletRequest curRequest = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes())
				.getRequest();
		HttpSession session = curRequest.getSession();
		dsPtnr.setColumn(0, "LANG_CD", (String) session.getAttribute("LANG_CD"));

		outParam.setCoreDataSet("dsLrgGrp", getSqlManager().queryForCoreDataSet(dsPtnr, "SPtnrService.searchLrgGrp"));
		outParam.setCoreDataSet("dsMdlGrp", getSqlManager().queryForCoreDataSet(dsPtnr, "SPtnrService.searchMdlGrp"));
		outParam.setCoreDataSet("dslvl1", getSqlManager().queryForCoreDataSet(dsPtnr, "SPtnrService.searchSrcLvl1"));
		outParam.setCoreDataSet("dslvl2", getSqlManager().queryForCoreDataSet(dsPtnr, "SPtnrService.searchSrcLvl2"));
		// 협력사 번호가 비었거나, 존재하지 않은 상태 DB에
		if ("".equals(dsPtnr.getColumnAsString(0, "PTNR_ID")) || null == dsPtnr.getColumnAsString(0, "PTNR_ID")
				|| dsPtnr.getColumnAsString(0, "PTNR_ID").trim().isEmpty()) {
			GregorianCalendar today = new GregorianCalendar();
			dsPtnr.setColumn(0, "YR_1", String.valueOf(today.get(today.YEAR) - 1));
			dsPtnr.setColumn(0, "YR_2", String.valueOf(today.get(today.YEAR) - 2));
			dsPtnr.setColumn(0, "YR_3", String.valueOf(today.get(today.YEAR) - 3));
			dsPtnr.setColumn(0, "RPTST_SRC_GRP_ID", "");
			dsPtnr.setColumn(0, "LRG_GRP_ID", "");
			outParam.setCoreDataSet("dsPtnr", dsPtnr);
			return outParam;
		} else {
			dsPtnr.setColumn(0, "BRANCH_CD", "HMAX");
			outParam.setCoreDataSet("dsPtnr", getSqlManager().queryForCoreDataSet(dsPtnr, "SPtnrService.readPtnr"));
			outParam.setCoreDataSet("dsPtnrPlant",
					getSqlManager().queryForCoreDataSet(dsPtnr, "SPtnrService.readPtnrPlant"));
			outParam.setCoreDataSet("dsPtnrMaker",
					getSqlManager().queryForCoreDataSet(dsPtnr, "SPtnrService.readPtnrMaker"));
			outParam.setCoreDataSet("dsUser", getSqlManager().queryForCoreDataSet(dsPtnr, "SPtnrService.readPtnrUser"));
			outParam.setCoreDataSet("dsSelectGrp",
					getSqlManager().queryForCoreDataSet(dsPtnr, "SPtnrService.searchSrcGrp"));

			dsPtnr = outParam.getCoreDataSet("dsPtnr");

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

		}

		return outParam;
	}

	/**
	 * @메소드명 : saveTmpPtnrReq
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 신규협력사 임시저장
	 */
	public CoreParamSet saveTmpPtnrReq(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsPtnr = inParams.getCoreDataSet("dsPtnr");
		CoreDataSet dsPtnrMaker = inParams.getCoreDataSet("dsPtnrMaker");
		CoreDataSet dsUser = inParams.getCoreDataSet("dsUser");
		CoreDataSet dsPtnrPlant = inParams.getCoreDataSet("dsPtnrPlant");
		CoreDataSet dsPtnrFile = inParams.getCoreDataSet("dsPtnrFile");
		CoreDataSet dsSelectGrp = inParams.getCoreDataSet("dsSelectGrp");

		if (null == dsPtnr.getColumnAsString(0, "PTNR_ID") || "".equals(dsPtnr.getColumnAsString(0, "PTNR_ID"))) {
			// 사용자id 중복체크
			dsUser.setActiveRow(0);
			if (0 < getSqlManager().queryForCoreDataSet(dsUser, "SPtnrService.checkUserId").getRowCount()) {
				outParam.setMessage("EPRO_LABEL_00949");
				outParam.setErrorCode(1);
				return outParam;
			}

			String strPtnrId = commandModule.getSeqNextval("MM_PTNR_SEQ", CoerConstain.PROPAGATION_REQUIRED);
			dsPtnr.setColumn(0, "PTNR_ID", strPtnrId);
			if ("".equals(dsPtnr.getColumnAsString(0, "BRANCH_CD"))
					|| null == dsPtnr.getColumnAsString(0, "BRANCH_CD")) {
				dsPtnr.setColumn(0, "BRANCH_CD", "HMAX");
			}
			if ("".equals(dsPtnr.getColumnAsString(0, "TRD_REQ_BRANCH_CD"))
					|| null == dsPtnr.getColumnAsString(0, "TRD_REQ_BRANCH_CD")) {
				dsPtnr.setColumn(0, "TRD_REQ_BRANCH_CD", "HMAX");
			}

			// 공장저장
			for (int i = 0; i < dsPtnrPlant.getRowCount(); i++) {
				String strPtnrPlantId = commandModule.getSeqNextval("MM_PTNR_PLANT_SEQ",
						CoerConstain.PROPAGATION_REQUIRED);
				dsPtnrPlant.setColumn(i, "PTNR_PLANT_ID", strPtnrPlantId);
				dsPtnrPlant.setColumn(i, "PTNR_ID", dsPtnr.getColumnAsString(0, "PTNR_ID"));
				dsPtnrPlant.setColumn(i, "CRTR_ID", "SYSTEM");
				dsPtnrPlant.setColumn(i, "LAST_CHGR_ID", "SYSTEM");

				dsPtnrPlant.setActiveRow(i);
				getSqlManager().insertToCoreDataSet(dsPtnrPlant, "SPtnrService.insertPtnrPlant");
			}
			// Maker
			for (int i = 0; i < dsPtnrMaker.getRowCount(); i++) {
				String strPtnrMakerId = commandModule.getSeqNextval("MM_PTNR_MAKER_SEQ",
						CoerConstain.PROPAGATION_REQUIRED);
				dsPtnrMaker.setColumn(i, "PTNR_MAKER_ID", strPtnrMakerId);
				dsPtnrMaker.setColumn(i, "PTNR_ID", dsPtnr.getColumnAsString(0, "PTNR_ID"));
				dsPtnrMaker.setColumn(i, "CRTR_ID", "SYSTEM");
				dsPtnrMaker.setColumn(i, "LAST_CHGR_ID", "SYSTEM");

				dsPtnrMaker.setActiveRow(i);
				getSqlManager().insertToCoreDataSet(dsPtnrMaker, "SPtnrService.insertPtnrMaker");
			}

			// 소싱
			for (int i = 0; i < dsSelectGrp.getRowCount(); i++) {
				dsSelectGrp.setColumn(i, "BRANCH_CD", dsPtnr.getColumnAsString(0, "BRANCH_CD"));
				dsSelectGrp.setColumn(i, "PTNR_ID", dsPtnr.getColumnAsString(0, "PTNR_ID"));
				dsSelectGrp.setColumn(i, "CRTR_ID", "SYSTEM");
				dsSelectGrp.setColumn(i, "LAST_CHGR_ID", "SYSTEM");

				dsSelectGrp.setActiveRow(i);
				getSqlManager().insertToCoreDataSet(dsSelectGrp, "SPtnrService.insertPtnrPool");
			}
			// 사용자
			dsUser.setActiveRow(0);
			dsUser.setColumn(0, "BRANCH_CD", "SUP");
			dsUser.setColumn(0, "PTNR_ID", dsPtnr.getColumnAsString(0, "PTNR_ID"));
			dsUser.setColumn(0, "CRTR_ID", "SYSTEM");
			dsUser.setColumn(0, "LAST_CHGR_ID", "SYSTEM");
			getSqlManager().insertToCoreDataSet(dsUser, "SPtnrService.insertPtnrUser");
			// 협력사
			dsPtnr.setActiveRow(0);
			dsPtnr.setColumn(0, "CRTR_ID", "SYSTEM");
			dsPtnr.setColumn(0, "LAST_CHGR_ID", "SYSTEM");
			dsPtnr.setColumn(0, "CD_PTNR_STTS", "SR10WRI");
			dsPtnr.setColumn(0, "RPTST_USER_ID", dsUser.getColumnAsString(0, "USER_ID"));
			getSqlManager().insertToCoreDataSet(dsPtnr, "SPtnrService.insertPtnr");

			getSqlManager().insertToCoreDataSet(dsPtnr, "SPtnrService.insertPtnrPorg");
		} else {

			Map<String, Object> conditionMap = new HashMap<String, Object>();
			conditionMap.put("PTNR_ID", dsPtnr.getColumnAsString(0, "PTNR_ID"));
			boolean bTkey = commandModule.isEqualsTkey("MM_PTNR", dsPtnr.getColumnAsString(0, "TKEY"), conditionMap);

			if (!bTkey) {
				outParam.setMessage("EPRO_LABEL_00924");
				return outParam;
			}

			// Maker삭제
			CoreDataSet delDs = CoreDataSetFactory.getDataSet(inParams);
			delDs.addStringColumn("PTNR_MAKER_ID");
			for (int i = 0; i < dsPtnrMaker.getDeleteRowCount(); i++) {
				int dRow = delDs.appendRow();
				delDs.setColumn(dRow, "PTNR_MAKER_ID", dsPtnrMaker.getDeleteColumnAsString(i, "PTNR_MAKER_ID"));

				delDs.setActiveRow(i);
				getSqlManager().insertToCoreDataSet(delDs, "SPtnrService.deletePtnrMaker");

			}
			// Maker수정
			for (int i = 0; i < dsPtnrMaker.getRowCount(); i++) {
				if (dsPtnrMaker.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
					String strPtnrMakerId = commandModule.getSeqNextval("MM_PTNR_MAKER_SEQ",
							CoerConstain.PROPAGATION_REQUIRED);
					dsPtnrMaker.setColumn(i, "PTNR_MAKER_ID", strPtnrMakerId);
					dsPtnrMaker.setColumn(i, "PTNR_ID", dsPtnr.getColumnAsString(0, "PTNR_ID"));
					// dsPtnrMaker.setColumn(i, "CRTR_ID", "SYSTEM");
					dsPtnrMaker.setColumn(i, "LAST_CHGR_ID", "SYSTEM");

					dsPtnrMaker.setActiveRow(i);
					getSqlManager().insertToCoreDataSet(dsPtnrMaker, "SPtnrService.insertPtnrMaker");
				} else if (dsPtnrMaker.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
					dsPtnrMaker.setColumn(i, "LAST_CHGR_ID", "SYSTEM");
					dsPtnrMaker.setActiveRow(i);
					getSqlManager().updateToCoreDataSet(dsPtnrMaker, "SPtnrService.updatePtnrMaker");
				}

			}

			// 공장삭제
			delDs = CoreDataSetFactory.getDataSet(inParams);
			delDs.addStringColumn("PTNR_PLANT_ID");
			for (int i = 0; i < dsPtnrPlant.getDeleteRowCount(); i++) {
				int dRow = delDs.appendRow();
				delDs.setColumn(dRow, "PTNR_PLANT_ID", dsPtnrPlant.getDeleteColumnAsString(i, "PTNR_PLANT_ID"));

				delDs.setActiveRow(i);
				getSqlManager().insertToCoreDataSet(delDs, "SPtnrService.deletePtnrPlant");

			}
			// 공장수정
			for (int i = 0; i < dsPtnrPlant.getRowCount(); i++) {
				if (dsPtnrPlant.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
					String strPtnrPlantId = commandModule.getSeqNextval("MM_PTNR_PLANT_SEQ",
							CoerConstain.PROPAGATION_REQUIRED);
					dsPtnrPlant.setColumn(i, "PTNR_PLANT_ID", strPtnrPlantId);
					dsPtnrPlant.setColumn(i, "PTNR_ID", dsPtnr.getColumnAsString(0, "PTNR_ID"));
					dsPtnrPlant.setColumn(i, "CRTR_ID", "SYSTEM");
					dsPtnrPlant.setColumn(i, "LAST_CHGR_ID", "SYSTEM");

					dsPtnrPlant.setActiveRow(i);
					getSqlManager().insertToCoreDataSet(dsPtnrPlant, "SPtnrService.insertPtnrPlant");
				} else if (dsPtnrPlant.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
					dsPtnrPlant.setColumn(i, "LAST_CHGR_ID", "SYSTEM");
					dsPtnrPlant.setActiveRow(i);
					getSqlManager().updateToCoreDataSet(dsPtnrPlant, "SPtnrService.updatePtnrPlant");
				}

			}

			// Pool삭제
			getSqlManager().insertToCoreDataSet(dsPtnr, "SPtnrService.deletePtnrPool");

			// Pool저장
			for (int i = 0; i < dsSelectGrp.getRowCount(); i++) {
				dsSelectGrp.setColumn(i, "BRANCH_CD", dsPtnr.getColumnAsString(0, "BRANCH_CD"));
				dsSelectGrp.setColumn(i, "PTNR_ID", dsPtnr.getColumnAsString(0, "PTNR_ID"));

				dsSelectGrp.setActiveRow(i);
				getSqlManager().insertToCoreDataSet(dsSelectGrp, "SPtnrService.insertPtnrPool");
			}
			// 사용자 저장
			dsUser.setActiveRow(0);
			dsUser.setColumn(0, "LAST_CHGR_ID", "SYSTEM");
			getSqlManager().updateToCoreDataSet(dsUser, "SPtnrService.updtaePtnrUser");

			// 협력사
			dsPtnr.setActiveRow(0);
			getSqlManager().updateToCoreDataSet(dsPtnr, "SPtnrService.updatePtnr");
		}

		for (int i = 0; i < dsPtnrFile.getRowCount(); i++) {
			dsPtnrFile.setColumn(i, "BRANCH_CD", dsPtnr.getColumnAsString(0, "BRANCH_CD"));
			dsPtnrFile.setColumn(i, "PTNR_ID", dsPtnr.getColumnAsString(0, "PTNR_ID"));
		}

		inParams.put("bizGubun", "PTNR");
		outParam = fileModule.saveFileInfo(inParams);

		// 읽어오기
		outParam.setCoreDataSet("dsPtnr", getSqlManager().queryForCoreDataSet(dsPtnr, "SPtnrService.readPtnr"));
		outParam.setCoreDataSet("dsPtnrPlant",
				getSqlManager().queryForCoreDataSet(dsPtnr, "SPtnrService.readPtnrPlant"));
		outParam.setCoreDataSet("dsPtnrMaker",
				getSqlManager().queryForCoreDataSet(dsPtnr, "SPtnrService.readPtnrMaker"));
		outParam.setCoreDataSet("dsSelectGrp",
				getSqlManager().queryForCoreDataSet(dsPtnr, "SPtnrService.searchSrcGrp"));
		outParam.setCoreDataSet("dsUser", getSqlManager().queryForCoreDataSet(dsPtnr, "SPtnrService.readPtnrUser"));

		dsUser = outParam.getCoreDataSet("dsUser");
		dsUser.setColumn(0, "PWDCH", dsUser.getColumnAsString(0, "PWD"));
		outParam.setCoreDataSet("dsUser", dsUser);

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

		outParam.setMessage("EPRO_LABEL_00002");

		return outParam;
	}

	/**
	 * @메소드명 : searchPtnrUser
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 협력사 유저 목록
	 */
	public CoreParamSet searchPtnrUser(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		dsCondition.setColumn(0, "PTNR_ID", gdsUserInfo.getColumnAsString(0, "PTNR_ID"));

		outParam.setCoreDataSet("dsList",
				getSqlManager().queryForCoreDataSet(dsCondition, "SPtnrService.searchPtnrUser"));

		return outParam;
	}

	/**
	 * @메소드명 : searchPtnrUser
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 협력사 유저 상세
	 */
	public CoreParamSet readUserDetail(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsUserInfo = inParams.getCoreDataSet("dsUserInfo");

		outParam.setCoreDataSet("dsDetail",
				getSqlManager().queryForCoreDataSet(dsUserInfo, "SPtnrService.readUserDetail"));
		return outParam;
	}

	/**
	 * @메소드명 : readSPtnrDetail
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 협력사 상세
	 */
	public CoreParamSet readSPtnrDetail(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsPtnr = inParams.getCoreDataSet("dsPtnr");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		dsPtnr.setColumn(0, "BRANCH_CD", "HMAX");

		outParam.setCoreDataSet("dsPtnr", getSqlManager().queryForCoreDataSet(dsPtnr, "SPtnrService.readSPtnr"));
		outParam.setCoreDataSet("dsPtnrMail",
				getSqlManager().queryForCoreDataSet(dsPtnr, "SPtnrService.readSPtnrMailCheck"));

		outParam.setCoreDataSet("dsLrgGrp", getSqlManager().queryForCoreDataSet(dsPtnr, "SPtnrService.searchLrgGrp"));
		outParam.setCoreDataSet("dsMdlGrp", getSqlManager().queryForCoreDataSet(dsPtnr, "SPtnrService.searchMdlGrp"));
		outParam.setCoreDataSet("dslvl1", getSqlManager().queryForCoreDataSet(dsPtnr, "SPtnrService.searchSrcLvl1"));
		outParam.setCoreDataSet("dslvl2", getSqlManager().queryForCoreDataSet(dsPtnr, "SPtnrService.searchSrcLvl2"));
		outParam.setCoreDataSet("dsSelectGrp",
				getSqlManager().queryForCoreDataSet(dsPtnr, "SPtnrService.searchSrcGrp"));
		outParam.setCoreDataSet("dsPtnrMaker", getSqlManager().queryForCoreDataSet(dsPtnr, "SPtnrService.readSMaker"));
		outParam.setCoreDataSet("dsPtnrPlant", getSqlManager().queryForCoreDataSet(dsPtnr, "SPtnrService.readSPlant"));

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
	 * @메소드명 : saveSPtnr
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 외부 협력사 저장
	 */
	public CoreParamSet saveSPtnr(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsPtnr = inParams.getCoreDataSet("dsPtnr");
		CoreDataSet dsPtnrMail = inParams.getCoreDataSet("dsPtnrMail");
		CoreDataSet dsPtnrPlant = inParams.getCoreDataSet("dsPtnrPlant");
		CoreDataSet dsPtnrMaker = inParams.getCoreDataSet("dsPtnrMaker");
		CoreDataSet dsSelectGrp = inParams.getCoreDataSet("dsSelectGrp");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");
		CoreDataSet dsPtnrFile = inParams.getCoreDataSet("dsPtnrFile");
		// ROW상태
		String strRowType = "";

		dsPtnr.setColumn(0, "BRANCH_CD", "HMAX");

		Map<String, Object> conditionMap = new HashMap<String, Object>();
		conditionMap.put("PTNR_ID", dsPtnr.getColumnAsString(0, "PTNR_ID"));
		boolean bTkey = commandModule.isEqualsTkey("MM_PTNR", dsPtnr.getColumnAsString(0, "TKEY"), conditionMap);

		if (!bTkey) {
			outParam.setMessage("EPRO_LABEL_00924");

			return outParam;
		}

		dsPtnr.setColumn(0, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
		// 협력사 기본정보 UPDATE
		getSqlManager().updateToCoreDataSet(dsPtnr, "SPtnrService.updateSPtnr");
		if(0 < dsPtnrMail.getColumnAsInteger(0, "MAILCHECK")){
			MailSmsModule.saveMailSms("SPTNR_CHG", inParams);
		}
		// 협력사 공장유무 INSERT/UPDATE
		for (int i = 0; i < dsPtnrPlant.getRowCount(); i++) {
			strRowType = dsPtnrPlant.getRowStatus(i);
			dsPtnrPlant.setActiveRow(i);
			if (strRowType.equals(CoerConstain.INSERT)) {
				String strPtnrPlantId = commandModule.getSeqNextval("MM_PTNR_PLANT_SEQ",
						CoerConstain.PROPAGATION_REQUIRED);
				dsPtnrPlant.setColumn(i, "PTNR_PLANT_ID", strPtnrPlantId);
				dsPtnrPlant.setColumn(i, "PTNR_ID", dsPtnr.getColumnAsString(0, "PTNR_ID"));
				dsPtnrPlant.setColumn(i, "CRTR_ID", "SYSTEM");
				dsPtnrPlant.setColumn(i, "LAST_CHGR_ID", "SYSTEM");
				getSqlManager().insertToCoreDataSet(dsPtnrPlant, "SPtnrService.insertPtnrPlant");
			} else if (strRowType.equals(CoerConstain.UPDATE)) {
				getSqlManager().updateToCoreDataSet(dsPtnrPlant, "SPtnrService.updatePtnrPlant");
			}
		}

		// MAKER INSERT/UPDATE
		for (int i = 0; i < dsPtnrMaker.getRowCount(); i++) {
			strRowType = dsPtnrMaker.getRowStatus(i);
			dsPtnrMaker.setActiveRow(i);
			if (strRowType.equals(CoerConstain.INSERT)) {
				String strPtnrMakerId = commandModule.getSeqNextval("MM_PTNR_MAKER_SEQ",
						CoerConstain.PROPAGATION_REQUIRED);

				dsPtnrMaker.setColumn(i, "PTNR_MAKER_ID", strPtnrMakerId);
				dsPtnrMaker.setColumn(i, "PTNR_ID", dsPtnr.getColumnAsString(0, "PTNR_ID"));
				dsPtnrMaker.setColumn(i, "CRTR_ID", "SYSTEM");
				dsPtnrMaker.setColumn(i, "LAST_CHGR_ID", "SYSTEM");

				getSqlManager().insertToCoreDataSet(dsPtnrMaker, "SPtnrService.insertPtnrMaker");
			} else if (strRowType.equals(CoerConstain.UPDATE)) {
				getSqlManager().updateToCoreDataSet(dsPtnrMaker, "SPtnrService.updatePtnrMaker");
			}
		}
		// 취급품목 INSERT
		for (int i = 0; i < dsSelectGrp.getRowCount(); i++) {
			strRowType = dsSelectGrp.getRowStatus(i);
			dsSelectGrp.setActiveRow(i);
			if (strRowType.equals(CoerConstain.INSERT)) {
				dsSelectGrp.setColumn(i, "BRANCH_CD", dsPtnr.getColumnAsString(0, "BRANCH_CD"));
				dsSelectGrp.setColumn(i, "PTNR_ID", dsPtnr.getColumnAsString(0, "PTNR_ID"));
				dsSelectGrp.setColumn(i, "CRTR_ID", "SYSTEM");
				dsSelectGrp.setColumn(i, "LAST_CHGR_ID", "SYSTEM");
				getSqlManager().insertToCoreDataSet(dsSelectGrp, "SPtnrService.insertPtnrPool");
			}
		}

		CoreDataSet dsDeleted;

		// 공장 DELETE
		dsDeleted = CoreDataSetFactory.getDataSet(inParams);
		dsDeleted.addStringColumn("PTNR_PLANT_ID");
		for (int i = 0; i < dsPtnrPlant.getDeleteRowCount(); i++) {
			int dRow = dsDeleted.appendRow();
			dsDeleted.setColumn(dRow, "PTNR_PLANT_ID", dsPtnrPlant.getDeleteColumnAsString(i, "PTNR_PLANT_ID"));

			dsDeleted.setActiveRow(dRow);
			getSqlManager().insertToCoreDataSet(dsDeleted, "SPtnrService.deletePtnrPlant");

		}
		// MAKER DELETE
		dsDeleted = CoreDataSetFactory.getDataSet(inParams);
		dsDeleted.addStringColumn("PTNR_MAKER_ID");
		for (int i = 0; i < dsPtnrMaker.getDeleteRowCount(); i++) {
			int dRow = dsDeleted.appendRow();
			dsDeleted.setColumn(dRow, "PTNR_MAKER_ID", dsPtnrMaker.getDeleteColumnAsString(i, "PTNR_MAKER_ID"));

			dsDeleted.setActiveRow(dRow);
			getSqlManager().insertToCoreDataSet(dsDeleted, "SPtnrService.deletePtnrMaker");

		}
		// 취급품목 DELETE
		dsDeleted = CoreDataSetFactory.getDataSet(inParams);
		dsDeleted.addStringColumn("BRANCH_CD");
		dsDeleted.addStringColumn("SRC_GRP_ID");
		dsDeleted.addStringColumn("PTNR_ID");

		for (int i = 0; i < dsSelectGrp.getDeleteRowCount(); i++) {
			int dRow = dsDeleted.appendRow();

			dsDeleted.setColumn(dRow, "BRANCH_CD", dsSelectGrp.getDeleteColumnAsString(i, "BRANCH_CD"));
			dsDeleted.setColumn(dRow, "SRC_GRP_ID", dsSelectGrp.getDeleteColumnAsString(i, "SRC_GRP_ID"));
			dsDeleted.setColumn(dRow, "PTNR_ID", dsSelectGrp.getDeleteColumnAsString(i, "PTNR_ID"));

			dsDeleted.setActiveRow(dRow);
			getSqlManager().insertToCoreDataSet(dsDeleted, "SPtnrService.deleteSelectGrp");

		}

		for (int i = 0; i < dsPtnrFile.getRowCount(); i++) {
			dsPtnrFile.setColumn(i, "BRANCH_CD", dsPtnr.getColumnAsString(0, "BRANCH_CD"));
			dsPtnrFile.setColumn(i, "PTNR_ID", dsPtnr.getColumnAsString(0, "PTNR_ID"));
		}
		inParams.put("bizGubun", "PTNR");
		outParam = fileModule.saveFileInfo(inParams);
		outParam.setCoreDataSet("dsPtnr", dsPtnr);
		outParam.setMessage("EPRO_LABEL_00002");
		return outParam;
	}

	/**
	 * @메소드명 : readPtnrCtgrChk
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 협력사 신규유저 협력사 유형체크
	 */
	public CoreParamSet readPtnrCtgrChk(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		outParam.setMessage(getSqlManager().queryForCoreDataSet(gdsUserInfo, "SPtnrService.readPtnrCtgrChk")
				.getColumnAsString(0, "CD_PTNR_CTGR"));
		return outParam;
	}

	/**
	 * @메소드명 : checkPtnrUser
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 협력사 신규유저 협력사 유형체크
	 */
	public CoreParamSet checkPtnrUser(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsPtnrChk = inParams.getCoreDataSet("dsPtnrChk");

		outParam.setCoreDataSet("dsPtnrChk",
				getSqlManager().queryForCoreDataSet(dsPtnrChk, "SPtnrService.checkPtnrUser"));
		return outParam;
	}

}
