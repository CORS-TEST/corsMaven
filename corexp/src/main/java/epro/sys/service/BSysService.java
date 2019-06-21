/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 *
 * @서비스명		: epro.sys.service BSysService.java                       
 * @생성자		:
 * @생성일시		:
 * @구분			: 시스템관리
 * @최종수정자		: 송태봉
 * @최종수정일시	: 2017.09.07
 */
package epro.sys.service;

import java.util.ArrayList;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import core.common.constain.CoerConstain;
import core.common.util.CodeUtil;
import core.common.util.ResourceUtil;
import core.vo.model.coreset.CoreDataSet;
import core.vo.model.coreset.CoreDataSetFactory;
import core.vo.model.coreset.CoreParamSet;
import core.vo.model.coreset.CoreParamSetFactory;
import core.web.service.CoreService;
import epro.com.module.CommandModule;

@Service
public class BSysService extends CoreService {
	private static final Log LOG = LogFactory.getLog(BSysService.class);
	@Autowired
	CommandModule commandModule;

	/**
	 * @메소드명 : readSysRole
	 * @input : CoreParamSet inParams (조회용 입력값)
	 * @return : CoreParamSet outParam (조회한 코드값)
	 * @desc : 권한을 조회한다.
	 */
	public CoreParamSet readSysRole(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsIn = inParams.getCoreDataSet("dsSrchOpt");

		outParam.setCoreDataSet("dsRole", getSqlManager().queryForCoreDataSet(dsIn, "BSysService.readSysRole"));

		return outParam;
	}

	/**
	 * @메소드명 : readSysRoleMenu
	 * @input : CoreParamSet inParams (조회용 입력값)
	 * @return : CoreParamSet outParam (조회한 코드값)
	 * @desc : 권한에 따른 메뉴를 조회한다.
	 */
	public CoreParamSet readSysRoleMenu(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsIn = inParams.getCoreDataSet("dsSrchOpt");

		outParam.setCoreDataSet("dsMenu", getSqlManager().queryForCoreDataSet(dsIn, "BSysService.readSysRoleMenu"));

		return outParam;
	}

	/**
	 * @MenthdName : saveSysRole
	 * @InputParameterType :
	 * @OutputParameterType : CoreParamSet
	 * @desc : 권한 저장
	 */
	public CoreParamSet saveSysRole(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsRole = inParams.getCoreDataSet("dsRole");
		CoreDataSet dsMenu = inParams.getCoreDataSet("dsRoleMenu");
		CoreDataSet dsCond = inParams.getCoreDataSet("dsSrchOpt");
		CoreDataSet dsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		// 권한삭제
		for (int i = 0; i < dsRole.getDeleteRowCount(); i++) {
			CoreDataSet tmpDs = CoreDataSetFactory.getDataSet(inParams);
			tmpDs.addStringColumn("ROLE_ID");
			tmpDs.appendRow();
			tmpDs.setColumn(0, "ROLE_ID", dsRole.getDeleteColumnAsString(i, "INT_SITE_DIST") + "_" + dsRole.getDeleteColumnAsString(i, "ROLE_ID"));

			getSqlManager().deleteToCoreDataSet(tmpDs, "BSysService.deleteRoleUser");
			getSqlManager().deleteToCoreDataSet(tmpDs, "BSysService.deleteMenuRole");
			getSqlManager().deleteToCoreDataSet(tmpDs, "BSysService.deleteRole");
		}
		// 권한생성,수정
		for (int i = 0; i < dsRole.getRowCount(); i++) {
			if (dsRole.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
				dsRole.setColumn(i, "ROLE_ID", dsRole.getColumnAsString(i, "INT_SITE_DIST") + "_" + dsRole.getColumnAsString(i, "ROLE_ID"));
				dsRole.setColumn(i, "CRTR_ID", dsUserInfo.getColumnAsString(0, "USER_ID"));

				dsRole.setActiveRow(i);
				getSqlManager().insertToCoreDataSet(dsRole, "BSysService.insertRole");
			} else if (dsRole.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
				dsRole.setColumn(i, "ROLE_ID", dsRole.getColumnAsString(i, "INT_SITE_DIST") + "_" + dsRole.getColumnAsString(i, "ROLE_ID"));
				dsRole.setColumn(i, "CRTR_ID", dsUserInfo.getColumnAsString(0, "USER_ID"));

				dsRole.setActiveRow(i);
				getSqlManager().updateToCoreDataSet(dsRole, "BSysService.updateRole");
			}
		}

		getSqlManager().deleteToCoreDataSet(dsCond, "BSysService.deleteMenuRole");

		for (int i = 0; i < dsMenu.getRowCount(); i++) {
			dsMenu.setColumn(i, "ROLE_ID", dsCond.getColumnAsString(0, "ROLE_ID"));
			dsMenu.setColumn(i, "CRTR_ID", dsUserInfo.getColumnAsString(0, "USER_ID"));

			dsMenu.setActiveRow(i);
			getSqlManager().insertToCoreDataSet(dsMenu, "BSysService.insertRoleMenu");
		}

		outParam.setMessage("EPRO_LABEL_00002");
		return outParam;
	}

	/**
	 * @메소드명 : getSysMenuSrch
	 * @input : CoreParamSet inParams (조회용 입력값)
	 * @return : CoreParamSet outParam (조회한 코드값)
	 * @desc : 메뉴를 조회한다.
	 */
	public CoreParamSet getSysMenuSrch(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsIn = inParams.getCoreDataSet("in_ds");

		outParam.setCoreDataSet("ds_menu", getSqlManager().queryForCoreDataSet(dsIn, "BSysService.sysMenuSrch"));
		outParam.setCoreDataSet("ds_auth", getSqlManager().queryForCoreDataSet(dsIn, "BSysService.sysRoleSrch"));
		outParam.setCoreDataSet("ds_pgmAuth", getSqlManager().queryForCoreDataSet(dsIn, "BSysService.syspPgmRoleSrch"));

		return outParam;
	}

	/**
	 * @메소드명 : searchObjInfo
	 * @input : CoreParamSet inParams (조회용 입력값)
	 * @return : CoreParamSet outParam (조회한 오브젝트정보)
	 * @desc : 오브젝트를 조회한다.
	 */
	public CoreParamSet searchObjInfo(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsSysPgm = inParams.getCoreDataSet("dsSysPgm");

		outParam.setCoreDataSet("dsSysPgm", getSqlManager().queryForCoreDataSet(dsSysPgm, "BSysService.searchObjInfo"));

		return outParam;
	}

	/**
	 * @메소드명 : savePgmObj
	 * @input : CoreParamSet inParams (저장할 오브젝트 데이터)
	 * @return : CoreParamSet outParam ()
	 * @desc : 화면에 오브젝트를 저장한다.
	 */
	public CoreParamSet savePgmObj(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsSysPgm = inParams.getCoreDataSet("dsSysPgm");

		getSqlManager().updateToCoreDataSet(dsSysPgm, "BSysService.updatePgmObj");

		return outParam;
	}

	/**
	 * @메소드명 : readSysMenu
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc :메뉴조회
	 */
	public CoreParamSet readSysMenu(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsMenu");
		CoreDataSet gdsUser = inParams.getCoreDataSet("gdsUserInfo");

		if (0 == dsCondition.getRowCount()) {
			int nRow = dsCondition.appendRow();
		}
		dsCondition.setColumn(0, "BRANCH_CD", gdsUser.getColumnAsString(0, "BRANCH_CD"));
		dsCondition.setColumn(0, "LANG_CD", gdsUser.getColumnAsString(0, "LANG_CD"));

		outParam.setCoreDataSet("dsMenu", getSqlManager().queryForCoreDataSet(dsCondition, "BSysService.readSysMenu"));
		outParam.setCoreDataSet("dsMenuRsrc", getSqlManager().queryForCoreDataSet(dsCondition, "BSysService.readSysMenuRsrc"));

		return outParam;
	}

	/**
	 * @메소드명 : readSysCdTree
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc :코드조회
	 */
	public CoreParamSet readSysCdTree(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCd = inParams.getCoreDataSet("dsCd");
		CoreDataSet dsUser = inParams.getCoreDataSet("gdsUserInfo");

		if (0 == dsCd.getRowCount()) {
			int nRow = dsCd.appendRow();
		}
		dsCd.setColumn(0, "BRANCH_CD", dsUser.getColumnAsString(0, "BRANCH_CD"));
		dsCd.setColumn(0, "LANG_CD", dsUser.getColumnAsString(0, "LANG_CD"));

		outParam.setCoreDataSet("dsCd", getSqlManager().queryForCoreDataSet(dsCd, "BSysService.readSysCdTree"));
		outParam.setCoreDataSet("dsCdRsrc", getSqlManager().queryForCoreDataSet(dsCd, "BSysService.readSysCdRsrc"));
		return outParam;
	}

	/**
	 * @MenthdName : saveSysMenu
	 * @input : CoreParamSet inParams
	 * @OutputParameterType : CoreParamSet
	 */
	public CoreParamSet saveSysMenu(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsMenu = inParams.getCoreDataSet("dsMenu");
		CoreDataSet dsMenuRsrc = inParams.getCoreDataSet("dsMenuRsrc");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		// 임시키와 시퀀스를 매핑해주는 리스트배열
		ArrayList<String[]> arrSeqPgmId = new ArrayList<String[]>();

		// 메뉴 등록
		int iMenuCnt = dsMenu.getRowCount();
		String[] seqPgmIdMenu = new String[2];

		for (int i = 0; i < iMenuCnt; i++) {
			dsMenu.setColumn(i, "CRTR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));

			String rowType = dsMenu.getRowStatus(i);

			// 추가
			if (rowType.equals(CoerConstain.INSERT)) {

				// 임시키와 시퀀스를 추출해서 매핑
				seqPgmIdMenu[0] = dsMenu.getColumnAsString(i, "TMP_PGM_ID");
				seqPgmIdMenu[1] = commandModule.getSeqNextval("MM_SYS_PGM_SEQ", CoerConstain.PROPAGATION_REQUIRED);

				System.out.println("seqPgmIdMenu[0] : " + seqPgmIdMenu[0] + "  ////////     seqPgmIdMenu[1] : " + seqPgmIdMenu[1]);

				dsMenu.setColumn(i, "PGM_ID", dsMenu.getColumnAsString(i, "TMP_PGM_ID"));

				if ("".equals(dsMenu.getColumnAsString(i, "UP_PGM_ID"))) {
					dsMenu.setColumn(i, "UP_PGM_ID", dsMenu.getColumnAsString(i, "TMP_UP_PGM_ID"));
				}

				arrSeqPgmId.add(seqPgmIdMenu);

				dsMenu.setActiveRow(i);
				getSqlManager().insertToCoreDataSet(dsMenu, "BSysService.insertMenuCSys");
			} else if (rowType.equals(CoerConstain.UPDATE)) {
				dsMenu.setActiveRow(i);
				getSqlManager().updateToCoreDataSet(dsMenu, "BSysService.updateMenuCSys");
			}
		}

		// 메뉴언어
		for (int i = 0; i < dsMenuRsrc.getRowCount(); i++) {
			if (dsMenuRsrc.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
				dsMenuRsrc.setColumn(i, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
				dsMenuRsrc.setColumn(i, "CRTR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
				dsMenuRsrc.setActiveRow(i);

				getSqlManager().insertToCoreDataSet(dsMenuRsrc, "BSysService.insertMenuRsrc");

			} else if (dsMenuRsrc.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {

				dsMenuRsrc.setColumn(i, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
				dsMenuRsrc.setActiveRow(i);

				if ("Y".equals(dsMenuRsrc.getColumnAsString(i, "CREATEYN"))) {
					dsMenuRsrc.setColumn(i, "CRTR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
					getSqlManager().insertToCoreDataSet(dsMenuRsrc, "BSysService.insertMenuRsrc");
				} else {
					getSqlManager().updateToCoreDataSet(dsMenuRsrc, "BSysService.updateMenuRsrc");
				}
			}
		}

		// 임시키를 시퀀스로 교체
		String[] seqPgmId;

		for (int i = 0; i < arrSeqPgmId.size(); i++) {
			seqPgmId = arrSeqPgmId.get(i);

			CoreDataSet changedKey = CoreDataSetFactory.getDataSet(inParams);
			changedKey.addStringColumn("TEMP_PGM_ID");
			changedKey.addStringColumn("PGM_ID");

			changedKey.appendRow();
			changedKey.setColumn(0, "TEMP_PGM_ID", seqPgmId[0]);
			changedKey.setColumn(0, "PGM_ID", seqPgmId[1]);

			getSqlManager().updateToCoreDataSet(changedKey, "BSysService.updateChangeKeyMenuCSys");
			getSqlManager().updateToCoreDataSet(changedKey, "BSysService.updateChangeUpKeyMenuCSys");
			getSqlManager().updateToCoreDataSet(changedKey, "BSysService.updateChangeUpKeyMenuRsrc");

		}

		// 메뉴 삭제
		int iDelMenuCnt = dsMenu.getDeleteRowCount();
		for (int i = 0; i < iDelMenuCnt; i++) {
			CoreDataSet dsDeleted = CoreDataSetFactory.getDataSet(inParams);
			dsDeleted.addStringColumn("PGM_ID");

			dsDeleted.appendRow();
			dsDeleted.setColumn(0, "PGM_ID", dsMenu.getDeleteColumnAsString(i, "PGM_ID"));

			getSqlManager().deleteToCoreDataSet(dsDeleted, "BSysService.deleteMenuCSys");
			getSqlManager().deleteToCoreDataSet(dsDeleted, "BSysService.deleteMenuRsrc");

		}

		outParam.setCoreDataSet("dsMenu", dsMenu);
		outParam.setMessage("EPRO_LABEL_00002"); // 저장되었습니다.
		return outParam;
	}

	/**
	 * @메소드명 : searchSysCode
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 코드조회
	 */
	public CoreParamSet searchSysCode(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsIn = inParams.getCoreDataSet("dsAllCd");

		outParam.setCoreDataSet("dsAllCd", getSqlManager().queryForCoreDataSet(dsIn, "BSysService.searchSysCode"));
		return outParam;
	}

	/**
	 * @메소드명 : saveSysCodeGrp
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 코드그룹 저장
	 */
	public CoreParamSet saveSysCodeGrp(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsGrp = inParams.getCoreDataSet("dsGrp");

		getSqlManager().deleteToCoreDataSet(dsGrp, "BSysService.delSysCodeGrp");

		for (int i = 0; i < dsGrp.getRowCount(); i++) {
			String cdId = dsGrp.getColumnAsString(i, "CD_GRP") + dsGrp.getColumnAsString(i, "CD_CLS") + dsGrp.getColumnAsString(i, "CD");
			dsGrp.setColumn(i, "CD_ID", cdId);

			dsGrp.setActiveRow(i);
			getSqlManager().insertToCoreDataSet(dsGrp, "BSysService.insertSysCd");
		}

		outParam.setCoreDataSet("dsGrp", dsGrp);
		outParam.setMessage("정상적으로 저장되었습니다.");

		return outParam;
	}

	/**
	 * @메소드명 : saveSysCodeCls
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 코드클래스 저장
	 */
	public CoreParamSet saveSysCodeCls(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCls = inParams.getCoreDataSet("dsCls");

		getSqlManager().deleteToCoreDataSet(dsCls, "BSysService.delSysCodeCls");

		for (int i = 0; i < dsCls.getRowCount(); i++) {
			if (!"00".equals(dsCls.getColumnAsString(i, "CD_CLS"))) {
				String cdId = dsCls.getColumnAsString(i, "CD_GRP") + dsCls.getColumnAsString(i, "CD_CLS") + dsCls.getColumnAsString(i, "CD");
				dsCls.setColumn(i, "CD_ID", cdId);

				dsCls.setActiveRow(i);
				getSqlManager().insertToCoreDataSet(dsCls, "BSysService.insertSysCd");
			}
		}

		outParam.setCoreDataSet("dsGrp", dsCls);
		outParam.setMessage("정상적으로 저장되었습니다.");

		return outParam;
	}

	/**
	 * @메소드명 : saveSysCodeCd
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 코드 저장
	 */
	public CoreParamSet saveSysCodeCd(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCd = inParams.getCoreDataSet("dsCd");

		getSqlManager().deleteToCoreDataSet(dsCd, "BSysService.delSysCodeCd");

		for (int i = 0; i < dsCd.getRowCount(); i++) {
			if (!"00".equals(dsCd.getColumnAsString(i, "CD"))) {
				dsCd.setActiveRow(i);
				getSqlManager().insertToCoreDataSet(dsCd, "BSysService.insertSysCd");
			}
		}

		outParam.setCoreDataSet("dsGrp", dsCd);
		outParam.setMessage("정상적으로 저장되었습니다.");

		return outParam;
	}

	/**
	 * @메소드명 : searchSysUser
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 사용자검색
	 */
	public CoreParamSet searchSysUser(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsSrchOpt = inParams.getCoreDataSet("dsSrchOpt");

		outParam.setCoreDataSet("dsUser", getSqlManager().queryForCoreDataSet(dsSrchOpt, "BSysService.searchSysUser"));
		return outParam;
	}

	/**
	 * @메소드명 : readSysUserRole
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 권한조회 및 운영단위 조회
	 */
	public CoreParamSet readSysUserRole(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsRole = inParams.getCoreDataSet("dsRole");

		outParam.setCoreDataSet("dsRole", getSqlManager().queryForCoreDataSet(dsRole, "BSysService.readSysUserRole"));
		//outParam.setCoreDataSet("dsBranch", getSqlManager().queryForCoreDataSet(dsRole, "BSysService.readSysBranch"));

		return outParam;
	}

	/**
	 * @메소드명 : saveSysUser
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 유저저장
	 */
	public CoreParamSet saveSysUser(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsUser = inParams.getCoreDataSet("dsUser");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		for (int i = 0; i < dsUser.getRowCount(); i++) {
			if (CoerConstain.INSERT.equals(dsUser.getRowStatus(i))) {
				dsUser.setColumn(i, "USER_ID", "B_" + dsUser.getColumnAsString(i, "USER_ID"));
				dsUser.setColumn(i, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
				dsUser.setColumn(i, "PTNR_ID", gdsUserInfo.getColumnAsString(0, "PTNR_ID"));
				dsUser.setColumn(i, "CRTR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));

				dsUser.setActiveRow(i);
				getSqlManager().insertToCoreDataSet(dsUser, "BSysService.insertUser");

				if (!"".equals(dsUser.getColumnAsString(i, "ROLE_ID")) && null != dsUser.getColumnAsString(i, "ROLE_ID")) {
					String role[] = dsUser.getColumnAsString(i, "ROLE_ID").split(",");

					for (int j = 0; j < role.length; j++) {
						CoreDataSet tmpDs = CoreDataSetFactory.getDataSet(inParams);
						tmpDs.addStringColumn("BRANCH_CD");
						tmpDs.addStringColumn("USER_ID");
						tmpDs.addStringColumn("ROLE_ID");
						tmpDs.addStringColumn("CRTR_ID");
						tmpDs.appendRow();
						tmpDs.setColumn(0, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
						tmpDs.setColumn(0, "USER_ID", dsUser.getColumnAsString(i, "USER_ID"));
						tmpDs.setColumn(0, "ROLE_ID", role[j]);
						tmpDs.setColumn(0, "CRTR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));

						tmpDs.setActiveRow(0);
						getSqlManager().insertToCoreDataSet(tmpDs, "BSysService.insertUserRole");
					}
				}

			} else if (CoerConstain.UPDATE.equals(dsUser.getRowStatus(i))) {
				dsUser.setColumn(i, "USER_ID", "B_" + dsUser.getColumnAsString(i, "USER_ID"));
				dsUser.setColumn(i, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));

				dsUser.setActiveRow(i);
				getSqlManager().updateToCoreDataSet(dsUser, "BSysService.updateUser");
				getSqlManager().deleteToCoreDataSet(dsUser, "BSysService.deleteUserRole");

				if (!"".equals(dsUser.getColumnAsString(i, "ROLE_ID")) && null != dsUser.getColumnAsString(i, "ROLE_ID")) {
					String role[] = dsUser.getColumnAsString(i, "ROLE_ID").split(",");

					for (int j = 0; j < role.length; j++) {
						CoreDataSet tmpDs = CoreDataSetFactory.getDataSet(inParams);
						tmpDs.addStringColumn("BRANCH_CD");
						tmpDs.addStringColumn("USER_ID");
						tmpDs.addStringColumn("ROLE_ID");
						tmpDs.addStringColumn("CRTR_ID");
						tmpDs.appendRow();
						tmpDs.setColumn(0, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
						tmpDs.setColumn(0, "USER_ID", dsUser.getColumnAsString(i, "USER_ID"));
						tmpDs.setColumn(0, "ROLE_ID", role[j]);
						tmpDs.setColumn(0, "CRTR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));

						tmpDs.setActiveRow(0);
						getSqlManager().insertToCoreDataSet(tmpDs, "BSysService.insertUserRole");
					}
				}
			}
		}

		for (int i = 0; i < dsUser.getDeleteRowCount(); i++) {
			CoreDataSet tmpDs = CoreDataSetFactory.getDataSet(inParams);
			tmpDs.addStringColumn("BRANCH_CD");
			tmpDs.addStringColumn("USER_ID");
			tmpDs.appendRow();
			tmpDs.setColumn(0, "BRANCH_CD", dsUser.getDeleteColumnAsString(i, "BRANCH_CD"));
			tmpDs.setColumn(0, "USER_ID", "B_" + dsUser.getDeleteColumnAsString(i, "USER_ID"));

			tmpDs.setActiveRow(0);
			getSqlManager().deleteToCoreDataSet(tmpDs, "BSysService.deleteUser");
			getSqlManager().deleteToCoreDataSet(tmpDs, "BSysService.deleteUserRole");
		}

		outParam.setMessage("EPRO_LABEL_00002");
		return outParam;
	}

	/**
	 * @메소드명 : checkSysUserId
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 아이디 중복체크
	 */
	public CoreParamSet checkSysUserId(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCheckId = inParams.getCoreDataSet("dsCheckId");

		String msg = "";
		CoreDataSet tmpDs = CoreDataSetFactory.getDataSet(inParams);
		for (int i = 0; i < dsCheckId.getRowCount(); i++) {
			dsCheckId.setActiveRow(i);
			tmpDs = getSqlManager().queryForCoreDataSet(dsCheckId, "BSysService.checkSysUserId");

			if ("FALSE".equals(tmpDs.getColumnAsString(0, " ID_USE"))) {
				msg += dsCheckId.getColumnAsString(i, "USER_ID") + ",";
			}
		}

		if (!"".equals(msg)) {
			msg = msg.substring(0, msg.length() - 1);
		}

		outParam.setMessage(msg);
		return outParam;
	}

	/**
	 * @메소드명 : readMethodAuth
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 메소드별 권한조회
	 */
	public CoreParamSet readMethodAuth(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsTmp = inParams.getCoreDataSet("dsTmp");

		outParam.setCoreDataSet("dsAuth", getSqlManager().queryForCoreDataSet(dsTmp, "BSysService.readMethodAuth"));

		return outParam;
	}

	/**
	 * @메소드명 : readSysMethod
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 메소드권한관리 조회
	 */
	public CoreParamSet readSysMethod(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");

		outParam.setCoreDataSet("dsList", getSqlManager().queryForCoreDataSet(dsCondition, "BSysService.readSysMethod"));
		outParam.setCoreDataSet("dsAuth", getSqlManager().queryForCoreDataSet(dsCondition, "BSysService.readMethodAuth"));

		return outParam;
	}

	/**
	 * @메소드명 : readSysMethodGubun
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc :
	 */
	public CoreParamSet readSysMethodGubun(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsGubun = inParams.getCoreDataSet("dsGubun");

		outParam.setCoreDataSet("dsGubun", getSqlManager().queryForCoreDataSet(dsGubun, "BSysService.readSysMethodGubun"));

		return outParam;
	}

	/**
	 * @메소드명 : readMethodCheck
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc :
	 */
	public CoreParamSet readMethodCheck(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsTmp = inParams.getCoreDataSet("dsTmp");

		String msg = "";
		CoreDataSet resultDs = CoreDataSetFactory.getDataSet(inParams);

		for (int i = 0; i < dsTmp.getRowCount(); i++) {
			if (!"Y".equals(dsTmp.getColumnAsString(i, "UP_YN"))) {
				dsTmp.setActiveRow(i);
				resultDs = getSqlManager().queryForCoreDataSet(dsTmp, "BSysService.readMethodCheck");

				if ("FALSE".equals(resultDs.getColumnAsString(0, "USED"))) {
					msg += dsTmp.getColumnAsString(i, "SVC_NM") + ":" + dsTmp.getColumnAsString(i, "METHOD") + ",";
				}
			}
		}

		if (!"".equals(msg)) {
			msg = msg.substring(0, msg.length() - 1);
		}

		outParam.setMessage(msg);

		return outParam;
	}

	/**
	 * @메소드명 : saveMethodAuth
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc :
	 */
	public CoreParamSet saveMethodAuth(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsList = inParams.getCoreDataSet("dsList");
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		CoreDataSet dsRole = CoreDataSetFactory.getDataSet(inParams);
		dsRole.addStringColumn("SVC_NM");
		dsRole.addStringColumn("METHOD");
		dsRole.addStringColumn("ROLE_ID");
		dsRole.appendRow();

		for (int i = 0; i < dsList.getRowCount(); i++) {
			if (dsList.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
				dsList.setColumn(i, "CRTR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
				dsList.setActiveRow(i);
				getSqlManager().updateToCoreDataSet(dsList, "BSysService.updateMethod");

				// Role삭제
				getSqlManager().deleteToCoreDataSet(dsList, "BSysService.deleteMethodRole");

				dsRole.setColumn(0, "SVC_NM", dsList.getColumnAsString(i, "SVC_NM"));
				dsRole.setColumn(0, "METHOD", dsList.getColumnAsString(i, "METHOD"));
				dsRole.setActiveRow(0);
				String[] str = dsList.getColumnAsString(i, "ROLE_ID").split(",");
				for (int y = 0; y < str.length; y++) {
					dsRole.setColumn(0, "ROLE_ID", str[y]);
					getSqlManager().insertToCoreDataSet(dsRole, "BSysService.insertMethodRole");
				}

			} else if (dsList.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
				dsList.setColumn(i, "CRTR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
				dsList.setActiveRow(i);
				getSqlManager().insertToCoreDataSet(dsList, "BSysService.insertMethod");

				// Role삭제
				getSqlManager().deleteToCoreDataSet(dsList, "BSysService.deleteMethodRole");

				dsRole.setColumn(0, "SVC_NM", dsList.getColumnAsString(i, "SVC_NM"));
				dsRole.setColumn(0, "METHOD", dsList.getColumnAsString(i, "METHOD"));
				dsRole.setActiveRow(0);
				String[] str = dsList.getColumnAsString(i, "ROLE_ID").split(",");
				for (int y = 0; y < str.length; y++) {
					dsRole.setColumn(0, "ROLE_ID", str[y]);
					getSqlManager().insertToCoreDataSet(dsRole, "BSysService.insertMethodRole");
				}
			}
		}

		for (int i = 0; i < dsList.getDeleteRowCount(); i++) {
			CoreDataSet dsTmp = CoreDataSetFactory.getDataSet(inParams);
			dsTmp.addStringColumn("SVC_NM");
			dsTmp.addStringColumn("METHOD");
			dsTmp.appendRow();

			dsTmp.setColumn(0, "SVC_NM", dsList.getDeleteColumnAsString(i, "SVC_NM"));
			dsTmp.setColumn(0, "METHOD", dsList.getDeleteColumnAsString(i, "METHOD"));

			getSqlManager().deleteToCoreDataSet(dsTmp, "BSysService.deleteMethod");
			getSqlManager().deleteToCoreDataSet(dsTmp, "BSysService.deleteMethodRole");
		}

		outParam.setMessage("EPRO_LABEL_00002");

		return outParam;
	}

	/**
	 * @메소드명 : checkSysCdId
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 코드 중복체크
	 */
	public CoreParamSet checkSysCdId(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCheckId = inParams.getCoreDataSet("dsCheckId");

		String msg = "";
		CoreDataSet tmpDs = CoreDataSetFactory.getDataSet(inParams);
		for (int i = 0; i < dsCheckId.getRowCount(); i++) {
			dsCheckId.setActiveRow(i);
			tmpDs = getSqlManager().queryForCoreDataSet(dsCheckId, "BSysService.checkSysCdId");

			if ("FALSE".equals(tmpDs.getColumnAsString(0, "USE"))) {
				msg += dsCheckId.getColumnAsString(i, "CD_ID") + ",";
			}
		}

		if (!"".equals(msg)) {
			msg = msg.substring(0, msg.length() - 1);
		}

		outParam.setMessage(msg);
		return outParam;
	}

	/**
	 * @MenthdName : saveSysCd
	 * @InputParameterType :
	 * @OutputParameterType : CoreParamSet
	 */
	public CoreParamSet saveSysCd(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCd = inParams.getCoreDataSet("dsCd");
		CoreDataSet dsCdRsrc = inParams.getCoreDataSet("dsCdRsrc");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		for (int i = 0; i < dsCd.getDeleteRowCount(); i++) {
			CoreDataSet tmpDs = CoreDataSetFactory.getDataSet(inParams);
			tmpDs.addStringColumn("CD_ID");
			tmpDs.appendRow();
			tmpDs.setColumn(0, "CD_ID", dsCd.getDeleteColumnAsString(i, "CD_ID"));

			getSqlManager().deleteToCoreDataSet(tmpDs, "BSysService.deleteSysCd");
			getSqlManager().deleteToCoreDataSet(tmpDs, "BSysService.deleteSysCdRsrc");
		}

		for (int i = 0; i < dsCd.getRowCount(); i++) {
			if (dsCd.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
				dsCd.setColumn(i, "CRTR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
				dsCd.setColumn(i, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
				dsCd.setActiveRow(i);

				getSqlManager().insertToCoreDataSet(dsCd, "BSysService.insertSysCd");

			} else if (dsCd.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
				dsCd.setColumn(i, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
				dsCd.setActiveRow(i);

				getSqlManager().insertToCoreDataSet(dsCd, "BSysService.updateSysCd");

			}
		}

		for (int i = 0; i < dsCdRsrc.getRowCount(); i++) {
			if (dsCdRsrc.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
				dsCdRsrc.setColumn(i, "CRTR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
				dsCdRsrc.setColumn(i, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
				dsCdRsrc.setActiveRow(i);

				getSqlManager().insertToCoreDataSet(dsCdRsrc, "BSysService.insertSysCdRsrc");

			} else if (dsCdRsrc.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
				if ("Y".equals(dsCdRsrc.getColumnAsString(i, "CREATEYN"))) {
					dsCdRsrc.setColumn(i, "CRTR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
					dsCdRsrc.setColumn(i, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
					dsCdRsrc.setActiveRow(i);
					getSqlManager().insertToCoreDataSet(dsCdRsrc, "BSysService.insertSysCdRsrc");

				} else {
					dsCdRsrc.setColumn(i, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
					dsCdRsrc.setActiveRow(i);
					getSqlManager().updateToCoreDataSet(dsCdRsrc, "BSysService.updateSysCdRsrc");
				}
			}
		}

		if (!gdsUserInfo.containsColumn("SYS_VERSION")) {
			gdsUserInfo.setUpdate(true);
			gdsUserInfo.addStringColumn("SYS_VERSION");
		}

		// 코드 저장 후 리소스랑 코드 재조회 호출
		//String sysVersion = commandModule.getSeqNextval("MM_SYS_VERSION_SEQ", CoerConstain.PROPAGATION_REQUIRED);
		//gdsUserInfo.setColumn(0, "SYS_VERSION", sysVersion);
		//getSqlManager().updateToCoreDataSet(gdsUserInfo, "BSysService.updateSysVersion");

		ResourceUtil.init();
		CodeUtil.init();

		outParam.setMessage("EPRO_LABEL_00002");

		return outParam;
	}

	/**
	 * @메소드명 : searchSysPgmHist
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 프로그램사용이력 조회
	 */
	public CoreParamSet searchSysPgmHist(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");
		if (!dsCondition.containsColumn("LANG_CD")) {
			dsCondition.setUpdate(true);
			dsCondition.addStringColumn("LANG_CD");
		}
		dsCondition.setColumn(0, "LANG_CD", gdsUserInfo.getColumnAsString(0, "LANG_CD"));

		outParam.setCoreDataSet("dsList", getSqlManager().queryForCoreDataSet(dsCondition, "BSysService.searchSysPgmHist"));

		return outParam;
	}

	/**
	 * @메소드명 : readSysParam
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 프로그램사용이력 파라미터조회
	 */
	public CoreParamSet readSysParam(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsSrchOpt = inParams.getCoreDataSet("dsSrchOpt");

		outParam.setCoreDataSet("dsSrchOpt", getSqlManager().queryForCoreDataSet(dsSrchOpt, "BSysService.readSysParam"));

		return outParam;
	}

	/**
	 * @메소드명 : readSysRsrc
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc :리소조회
	 */
	public CoreParamSet readSysRsrc(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");
		CoreDataSet dsUser = inParams.getCoreDataSet("gdsUserInfo");

		if (null == dsCondition.getColumnAsString(0, "CD_RSRC_LANG") || "".equals(dsCondition.getColumnAsString(0, "CD_RSRC_LANG"))) {
			dsCondition.setColumn(0, "CD_RSRC_LANG", dsUser.getColumnAsString(0, "LANG_CD"));
		}
		dsCondition.setColumn(0, "LANG_CD", dsUser.getColumnAsString(0, "LANG_CD"));
		outParam.setCoreDataSet("dsRsrc", getSqlManager().queryForCoreDataSet(dsCondition, "BSysService.readSysRsrc"));
		outParam.setCoreDataSet("dsRsrcLang", getSqlManager().queryForCoreDataSet(dsCondition, "BSysService.readSysRsrcLang"));
		outParam.setCoreDataSet("dsCondition", dsCondition);
		outParam.setMessage(String.valueOf(outParam.getCoreDataSet("dsRsrcLang")));

		return outParam;
	}

	/**
	 * @메소드명 : saveSysRsrc
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 리소스 저장
	 */
	public CoreParamSet saveSysRsrc(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsRsrc = inParams.getCoreDataSet("dsRsrc");
		CoreDataSet dsRsrcLang = inParams.getCoreDataSet("dsRsrcLang");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		// 리소스 삭제
		CoreDataSet deleteRsrc = CoreDataSetFactory.getDataSet(inParams);
		deleteRsrc.addStringColumn("RSRC_ID");
		deleteRsrc.appendRow();
		for (int i = 0; i < dsRsrc.getDeleteRowCount(); i++) {
			deleteRsrc.setColumn(0, "RSRC_ID", dsRsrc.getDeleteColumnAsString(i, "RSRC_ID"));
			getSqlManager().deleteToCoreDataSet(deleteRsrc, "BSysService.deleteSysRsrc");
		}

		// 리소스 저장 수정
		String rsrcLang = "";
		for (int i = 0; i < dsRsrc.getRowCount(); i++) {
			dsRsrc.setActiveRow(i);
			if (dsRsrc.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
				dsRsrc.setColumn(i, "CRTR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
				dsRsrc.setColumn(i, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
				getSqlManager().insertToCoreDataSet(dsRsrc, "BSysService.saveSysRsrc");

				rsrcLang = dsRsrc.getColumnAsString(i, "CD_RSRC_LANG");

			} else if (dsRsrc.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
				dsRsrc.setColumn(i, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
				getSqlManager().updateToCoreDataSet(dsRsrc, "BSysService.updateSysRsrc");
			}
		}

		// 리소스언어 저장 수정
		for (int i = 0; i < dsRsrcLang.getRowCount(); i++) {
			if (dsRsrcLang.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
				dsRsrcLang.setColumn(i, "CRTR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
				dsRsrcLang.setColumn(i, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
				dsRsrcLang.setColumn(i, "LANG", rsrcLang);
				dsRsrcLang.setActiveRow(i);
				getSqlManager().insertToCoreDataSet(dsRsrcLang, "BSysService.saveSysRsrcLang");
			} else if (dsRsrcLang.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
				if ("Y".equals(dsRsrcLang.getColumnAsString(i, "CREATEYN"))) {
					dsRsrcLang.setColumn(i, "CRTR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
					dsRsrcLang.setColumn(i, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
					dsRsrcLang.setColumn(i, "LANG", rsrcLang);
					dsRsrcLang.setActiveRow(i);
					getSqlManager().insertToCoreDataSet(dsRsrcLang, "BSysService.saveSysRsrcLang");
				}
				dsRsrcLang.setColumn(i, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
				dsRsrcLang.setActiveRow(i);
				getSqlManager().insertToCoreDataSet(dsRsrcLang, "BSysService.updateSysRsrcLang");
			}
		}

		if (!gdsUserInfo.containsColumn("SYS_VERSION")) {
			gdsUserInfo.setUpdate(true);
			gdsUserInfo.addStringColumn("SYS_VERSION");
		}

		// 코드 저장 후 리소스랑 코드 재조회 호출
		//String sysVersion = commandModule.getSeqNextval("MM_SYS_VERSION_SEQ", CoerConstain.PROPAGATION_REQUIRED);
		//gdsUserInfo.setColumn(0, "SYS_VERSION", sysVersion);
		//getSqlManager().updateToCoreDataSet(gdsUserInfo, "BSysService.updateSysVersion");

		ResourceUtil.init();
		CodeUtil.init();

		outParam.setMessage("EPRO_LABEL_00002");
		return outParam;
	}

	/**
	 * @메소드명 : readRsrcIdMax
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc :리소스 ID생성
	 */
	public CoreParamSet readRsrcIdMax(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsEmpty = CoreDataSetFactory.getDataSet(inParams);

		String rsrcId = getSqlManager().queryForCoreDataSet(dsEmpty, "BSysService.readRsrcIdMax").getColumnAsString(0, "RSRC_ID");
		outParam.setMessage(rsrcId);

		return outParam;
	}

	/**
	 * @메소드명 : checkSysRsrcId
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc :리소스 중복체크
	 */
	public CoreParamSet checkSysRsrcId(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCheckId = inParams.getCoreDataSet("dsCheckId");
		CoreDataSet dsRsrcDel = inParams.getCoreDataSet("dsRsrcDel");
		String strId = ""; // 중복된 항목의 ID를 가지는 문자열
		boolean checkId = true; // 중복없음 저장가능
		boolean bool = true; // 새로생성한 ROW 내에서 중복되지않음

		CoreDataSet chkds = CoreDataSetFactory.getDataSet(inParams);
		chkds.addStringColumn("RSRC_ID");
		chkds.addIntegerColumn("ROW");

		// 새로 생성한 항목중에서 중복검사
		for (int x = 0; x < dsCheckId.getRowCount(); x++) {
			bool = true;
			for (int y = 0; y < x; y++) {
				if (dsCheckId.getColumnAsString(x, "RSRC_ID").equals(dsCheckId.getColumnAsString(y, "RSRC_ID"))) { // 중복인경우
					dsCheckId.setColumn(x, "VALIDATE", "N");
					strId += dsCheckId.getColumnAsString(x, "RSRC_ID") + ",";
					bool = false;
					checkId = false;
				}
			}
			if (bool) { // 중복되지않은것
				if (0 < dsRsrcDel.getRowCount()) {
					for (int y = 0; y < dsRsrcDel.getRowCount(); y++) { // 삭제추가
						if (dsCheckId.getColumnAsString(x, "RSRC_ID").equals(dsRsrcDel.getColumnAsString(y, "RSRC_ID"))) {
							dsCheckId.setColumn(x, "VALIDATE", "Y");
							bool = false;
						}
					}
				}
				if (bool) {
					int nRow = chkds.appendRow();
					chkds.setColumn(nRow, "RSRC_ID", dsCheckId.getColumnAsString(x, "RSRC_ID"));
					chkds.setColumn(nRow, "ROW", x);
				}

			}
		}

		// DB중복검사
		for (int i = 0; i < chkds.getRowCount(); i++) {
			chkds.setActiveRow(i);
			if (0 < getSqlManager().queryForCoreDataSet(chkds, "BSysService.checkSysRsrcId").getRowCount()) { // 사용중인
																													// ID존재
				dsCheckId.setColumn(chkds.getColumnAsInteger(i, "ROW"), "VALIDATE", "N");
				strId += dsCheckId.getColumnAsString(i, "RSRC_ID") + ",";
				checkId = false;
			} else {
				dsCheckId.setColumn(chkds.getColumnAsInteger(i, "ROW"), "VALIDATE", "Y");
			}
		}
		outParam.setCoreDataSet("dsCheckId", dsCheckId);
		if (checkId) {
			outParam.setMessage("succ");
		} else {
			outParam.setMessage(strId);
		}

		return outParam;
	}

	/**
	 * @MenthdName : readRsrcNewVer
	 * @InputParameterType :
	 * @OutputParameterType : CoreParamSet
	 */
	public CoreParamSet readRsrcNewVer(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsParam = inParams.getCoreDataSetInstance();

		outParam.setCoreDataSet("dsTmp", getSqlManager().queryForCoreDataSet(dsParam, "cResourceService.getResourceString"));

		return outParam;
	}

	/**
	 * @메소드명 : getMyMenuSrch
	 * @input : CoreParamSet inParams (조회용 입력값)
	 * @return : CoreParamSet outParam (조회한 코드값)
	 * @desc : 메뉴를 조회한다.
	 */
	public CoreParamSet getMyMenuSrch(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		outParam.setCoreDataSet("ds_mymenu", getSqlManager().queryForCoreDataSet(dsUserInfo, "BSysService.getMyMenuSrch"));

		return outParam;
	}
}