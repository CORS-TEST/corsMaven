/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 *
 * @서비스명		: epro.mst.service BMstService.java                       
 * @생성자		: 정준화
 * @생성일시		: 2017.9. 06
 * @구분			: 기준정보 > 마스터관리
 * @최종수정자		: 정준화
 * @최종수정일시	: 2017. 9. 06
 */
package epro.mst.service;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import core.common.constain.CoerConstain;
import core.vo.model.coreset.CoreDataSet;
import core.vo.model.coreset.CoreDataSetFactory;
import core.vo.model.coreset.CoreParamSet;
import core.vo.model.coreset.CoreParamSetFactory;
import core.web.service.CoreService;
import epro.com.module.CommandModule;

@Service
public class BMstService extends CoreService {
	@Autowired
	CommandModule commandModule;
	private static final Log LOG = LogFactory.getLog(BMstService.class);

	/**
	 * @메소드명 : searchMstSrcGrp
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc :
	 */
	public CoreParamSet searchMstSrcGrp(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		if (!dsCondition.containsColumn("LANG_CD")) {
			dsCondition.setUpdate(true);
			dsCondition.addStringColumn("LANG_CD");
		}
		dsCondition.setColumn(0, "LANG_CD", gdsUserInfo.getColumnAsString(0, "LANG_CD"));

		outParam.setCoreDataSet("dsSrcGrpLvl1",
				getSqlManager().queryForCoreDataSet(dsCondition, "BMstService.searchMstSrcGrpLrg"));
		outParam.setCoreDataSet("dsSrcGrpLvl2",
				getSqlManager().queryForCoreDataSet(dsCondition, "BMstService.searchMstSrcGrpMdl"));
		outParam.setCoreDataSet("dsTmpUser",
				getSqlManager().queryForCoreDataSet(dsCondition, "BMstService.searchMstSrcGrpUser"));
		return outParam;

	}

	/**
	 * @메소드명 : searchMstMtrlGrp
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 자재 그룹 출력
	 */
	public CoreParamSet searchMstMtrlGrp(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");

		dsCondition.setColumn(0, "LVL", 1);
		outParam.setCoreDataSet("dsMtrlGrpLvl1",
				getSqlManager().queryForCoreDataSet(dsCondition, "BMstService.searchMstMtrl"));
		dsCondition.setColumn(0, "LVL", 2);
		outParam.setCoreDataSet("dsMtrlGrpLvl2",
				getSqlManager().queryForCoreDataSet(dsCondition, "BMstService.searchMstMtrl"));
		dsCondition.setColumn(0, "LVL", 3);
		outParam.setCoreDataSet("dsMtrlGrpLvl3",
				getSqlManager().queryForCoreDataSet(dsCondition, "BMstService.searchMstMtrl"));
		return outParam;

	}

	/**
	 * @메소드명 : saveMstSrcGrp
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc :
	 */
	public CoreParamSet saveMstSrcGrp(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsTmpUser = inParams.getCoreDataSet("dsTmpUser");
		CoreDataSet dsSrcGrpLvl1 = inParams.getCoreDataSet("dsSrcGrpLvl1");
		CoreDataSet dsSrcGrpLvl2 = inParams.getCoreDataSet("dsSrcGrpLvl2");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		// 레벨1 소싱 그룹 inser,update
		for (int i = 0; i < dsSrcGrpLvl1.getRowCount(); i++) {
			String strRowType = dsSrcGrpLvl1.getRowStatus(i);
			dsSrcGrpLvl1.setActiveRow(i);
			if (strRowType.equals(CoerConstain.INSERT)) {

				dsSrcGrpLvl1.setColumn(i, "LVL", 1);
				outParam.setCoreDataSet("dsTemp",
						getSqlManager().queryForCoreDataSet(dsSrcGrpLvl1, "BMstService.readCheckSrcGrp"));

				CoreDataSet dsTemp = outParam.getCoreDataSet("dsTemp");
				// 아이디가 중복일때
				if ("N".equals(dsTemp.getColumnAsString(0, "CHECK_SRC"))) {
					outParam.setMessage("EPRO_LABEL_00949");
					outParam.setErrorCode(1);
					return outParam;
				} else {
					// 소싱그룹 insert 부분
					dsSrcGrpLvl1.setColumn(i, "USER_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
					dsSrcGrpLvl1.setColumn(i, "SRC_GRP_NM2", dsSrcGrpLvl1.getColumnAsString(i, "SRC_GRP_NM"));
					getSqlManager().insertToCoreDataSet(dsSrcGrpLvl1, "BMstService.inserSrcGrp");
				}
			} else if (strRowType.equals(CoerConstain.UPDATE)) {
				dsSrcGrpLvl1.setColumn(i, "USER_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
				getSqlManager().updateToCoreDataSet(dsSrcGrpLvl1, "BMstService.updateSrcGrp");
			}
		}
		// 레벨2 소싱 그룹 inser,update
		for (int i = 0; i < dsSrcGrpLvl2.getRowCount(); i++) {
			String strRowType = dsSrcGrpLvl2.getRowStatus(i);
			dsSrcGrpLvl2.setActiveRow(i);
			if (strRowType.equals(CoerConstain.INSERT)) {

				dsSrcGrpLvl2.setColumn(i, "LVL", 2);
				outParam.setCoreDataSet("dsTemp",
						getSqlManager().queryForCoreDataSet(dsSrcGrpLvl2, "BMstService.readCheckSrcGrp"));

				CoreDataSet dsTemp = outParam.getCoreDataSet("dsTemp");
				// 아이디가 중복일때
				if ("N".equals(dsTemp.getColumnAsString(0, "CHECK_SRC"))) {
					outParam.setMessage("EPRO_LABEL_00949");
					outParam.setErrorCode(2);
					return outParam;
				} else {
					// 소싱그룹 insert 부분
					dsSrcGrpLvl2.setColumn(i, "USER_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
					getSqlManager().insertToCoreDataSet(dsSrcGrpLvl2, "BMstService.inserSrcGrp");
				}
			} else if (strRowType.equals(CoerConstain.UPDATE)) {
				dsSrcGrpLvl2.setColumn(i, "USER_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
				getSqlManager().updateToCoreDataSet(dsSrcGrpLvl2, "BMstService.updateSrcGrp");
			}
		}

		for (int i = 0; i < dsTmpUser.getDeleteRowCount(); i++) {

			CoreDataSet dsDeleted = CoreDataSetFactory.getDataSet(inParams);
			dsDeleted.addStringColumn("BRANCH_CD");
			dsDeleted.addStringColumn("SRC_GRP_ID");
			dsDeleted.addStringColumn("USER_ID");

			dsDeleted.appendRow();
			dsDeleted.setColumn(0, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
			dsDeleted.setColumn(0, "SRC_GRP_ID", dsTmpUser.getDeleteColumnAsString(i, "SRC_GRP_ID"));
			dsDeleted.setColumn(0, "USER_ID", dsTmpUser.getDeleteColumnAsString(i, "USER_ID"));

			dsDeleted.setActiveRow(0);
			getSqlManager().deleteToCoreDataSet(dsDeleted, "BMstService.deleteMstSrcGrpUser");
		}
		for (int i = 0; i < dsTmpUser.getRowCount(); i++) {
			String rowType = dsTmpUser.getRowStatus(i);
			dsTmpUser.setActiveRow(i);
			if (rowType.equals(CoerConstain.INSERT)) {
				dsTmpUser.setColumn(i, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
				dsTmpUser.setColumn(i, "CRTR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
				dsTmpUser.setColumn(i, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
				getSqlManager().insertToCoreDataSet(dsTmpUser, "BMstService.insertMstSrcGrpUser");
			} else if (rowType.equals(CoerConstain.UPDATE)) {
				dsTmpUser.setColumn(i, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
				dsTmpUser.setColumn(i, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
				getSqlManager().updateToCoreDataSet(dsTmpUser, "BMstService.updateMstSrcGrpUser");
			}
		}

		outParam.setCoreDataSet("dsTmpUser", dsTmpUser);
		outParam.setMessage("EPRO_LABEL_00002");

		return outParam;

	}

	/**
	 * @메소드명 : saveMstMtrlGrp
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc :
	 */
	public CoreParamSet saveMstMtrlGrp(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsMtrlGrpLvl1 = inParams.getCoreDataSet("dsMtrlGrpLvl1");
		CoreDataSet dsMtrlGrpLvl2 = inParams.getCoreDataSet("dsMtrlGrpLvl2");
		CoreDataSet dsMtrlGrpLvl3 = inParams.getCoreDataSet("dsMtrlGrpLvl3");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		// 레벨1 자재 그룹 insert,update
		for (int i = 0; i < dsMtrlGrpLvl1.getRowCount(); i++) {
			String strRowType = dsMtrlGrpLvl1.getRowStatus(i);
			dsMtrlGrpLvl1.setActiveRow(i);
			if (strRowType.equals(CoerConstain.INSERT)) {

				dsMtrlGrpLvl1.setColumn(i, "LVL", 1);
				outParam.setCoreDataSet("dsTemp",
						getSqlManager().queryForCoreDataSet(dsMtrlGrpLvl1, "BMstService.readCheckMtrlGrp"));

				CoreDataSet dsTemp = outParam.getCoreDataSet("dsTemp");
				// 아이디가 중복일때
				if ("N".equals(dsTemp.getColumnAsString(0, "CHECK_MTRL"))) {
					outParam.setMessage("EPRO_LABEL_00949");
					outParam.setErrorCode(1);
					return outParam;
				} else {
					// 소싱그룹 insert 부분
					dsMtrlGrpLvl1.setColumn(i, "USER_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
					getSqlManager().insertToCoreDataSet(dsMtrlGrpLvl1, "BMstService.inserMtrlGrp");
				}
			} else if (strRowType.equals(CoerConstain.UPDATE)) {
				dsMtrlGrpLvl1.setColumn(i, "USER_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
				getSqlManager().updateToCoreDataSet(dsMtrlGrpLvl1, "BMstService.updateMtrlGrp");
			}
		}
		// 레벨2 자재 그룹 insert,update
		for (int i = 0; i < dsMtrlGrpLvl2.getRowCount(); i++) {
			String strRowType = dsMtrlGrpLvl2.getRowStatus(i);
			dsMtrlGrpLvl2.setActiveRow(i);
			if (strRowType.equals(CoerConstain.INSERT)) {

				dsMtrlGrpLvl2.setColumn(i, "LVL", 2);
				outParam.setCoreDataSet("dsTemp",
						getSqlManager().queryForCoreDataSet(dsMtrlGrpLvl2, "BMstService.readCheckMtrlGrp"));

				CoreDataSet dsTemp = outParam.getCoreDataSet("dsTemp");
				// 아이디가 중복일때
				if ("N".equals(dsTemp.getColumnAsString(0, "CHECK_MTRL"))) {
					outParam.setMessage("EPRO_LABEL_00949");
					outParam.setErrorCode(1);
					return outParam;
				} else {
					// 소싱그룹 insert 부분
					dsMtrlGrpLvl2.setColumn(i, "USER_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
					getSqlManager().insertToCoreDataSet(dsMtrlGrpLvl2, "BMstService.inserMtrlGrp");
				}
			} else if (strRowType.equals(CoerConstain.UPDATE)) {
				dsMtrlGrpLvl2.setColumn(i, "USER_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
				getSqlManager().updateToCoreDataSet(dsMtrlGrpLvl2, "BMstService.updateMtrlGrp");
			}
		}
		// 레벨3 자재 그룹 insert,update
		for (int i = 0; i < dsMtrlGrpLvl3.getRowCount(); i++) {
			String strRowType = dsMtrlGrpLvl3.getRowStatus(i);
			dsMtrlGrpLvl3.setActiveRow(i);
			if (strRowType.equals(CoerConstain.INSERT)) {

				dsMtrlGrpLvl3.setColumn(i, "LVL", 3);
				outParam.setCoreDataSet("dsTemp",
						getSqlManager().queryForCoreDataSet(dsMtrlGrpLvl3, "BMstService.readCheckMtrlGrp"));

				CoreDataSet dsTemp = outParam.getCoreDataSet("dsTemp");
				// 아이디가 중복일때
				if ("N".equals(dsTemp.getColumnAsString(0, "CHECK_MTRL"))) {
					outParam.setMessage("EPRO_LABEL_00949");
					outParam.setErrorCode(1);
					return outParam;
				} else {
					// 소싱그룹 insert 부분
					dsMtrlGrpLvl3.setColumn(i, "USER_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
					getSqlManager().insertToCoreDataSet(dsMtrlGrpLvl3, "BMstService.inserMtrlGrp");
				}
			} else if (strRowType.equals(CoerConstain.UPDATE)) {
				dsMtrlGrpLvl3.setColumn(i, "USER_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
				getSqlManager().updateToCoreDataSet(dsMtrlGrpLvl3, "BMstService.updateMtrlGrp");
			}
		}

		outParam.setMessage("EPRO_LABEL_00002");

		return outParam;

	}

	/**
	 * @메소드명 : searchMstSrcGrpMapp
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 소싱그룹매핑조회
	 */
	public CoreParamSet searchMstSrcGrpMapp(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");

		outParam.setCoreDataSet("dsList",
				getSqlManager().queryForCoreDataSet(dsCondition, "BMstService.searchMstSrcGrpMapp"));
		return outParam;

	}

	/**
	 * @메소드명 : saveMstSrcGrpMapp
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 소싱그룹매핑 품목분류 소싱그룹 ID 변경
	 */
	public CoreParamSet saveMstSrcGrpMapp(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsList = inParams.getCoreDataSet("dsList");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		if (!dsList.containsColumn("LAST_CHGR_ID")) {
			dsList.setUpdate(true);
			dsList.addStringColumn("LAST_CHGR_ID");
		}

		for (int i = 0; i < dsList.getRowCount(); i++) {
			String rowType = dsList.getRowStatus(i);
			if (rowType.equals(CoerConstain.UPDATE)) {
				dsList.setColumn(i, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
				dsList.setActiveRow(i);
				getSqlManager().updateToCoreDataSet(dsList, "BMstService.updateMstSrcGrpMapp");
			}

		}

		outParam.setCoreDataSet("dsList", dsList);
		outParam.setMessage("EPRO_LABEL_00002");

		return outParam;
	}
}
