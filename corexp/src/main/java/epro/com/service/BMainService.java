/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 *
 * @서비스명		: epro.com.service BMainService.java                       
 * @생성자		: 
 * @생성일시		: 
 * @구분			: 내부 메인
 * @최종수정자		: 송태봉
 * @최종수정일시	: 2017.09.21
 */

package epro.com.service;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Service;

import core.vo.model.coreset.CoreDataSet;
import core.vo.model.coreset.CoreParamSet;
import core.vo.model.coreset.CoreParamSetFactory;
import core.web.service.CoreService;

@Service
public class BMainService extends CoreService {
	private static final Log LOG = LogFactory.getLog(BMainService.class);

	/**
	 * @메소드명 : readNoticePop
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc :
	 */
	public CoreParamSet readNoticePop(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsNotice = inParams.getCoreDataSet("dsNotice");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		if ("S".equals(dsNotice.getColumnAsString(0, "DENY"))) {
			dsNotice.setColumn(0, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
		} else {
			dsNotice.setColumn(0, "PTNR_ID", gdsUserInfo.getColumnAsString(0, "PTNR_ID"));
		}

		outParam.setCoreDataSet("dsNotice", getSqlManager().queryForCoreDataSet(dsNotice, "BMainService.readNoticePop"));

		return outParam;
	}

	/**
	 * @메소드명 : searchBMain
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 내부사용자 메인화면의 요소를 조회한다.
	 */
	public CoreParamSet searchBMain(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");
		CoreDataSet dsSrchOpt = inParams.getCoreDataSet("dsSrchOpt");

		String deptCd = dsSrchOpt.getColumnAsString(0, "DEPT_CD");

		if (!"".equals(deptCd) && null != deptCd && "undefined" != deptCd) {
			if (deptCd.indexOf("CM90") >= 0) {
				dsSrchOpt.setColumn(0, "DEPT_CD", deptCd.substring(4));
			}
		}
		dsSrchOpt.setColumn(0, "LANG_CD", gdsUserInfo.getColumnAsString(0, "LANG_CD"));

		//outParam.setCoreDataSet("dsTeamUser", getSqlManager().queryForCoreDataSet(dsSrchOpt, "BMainService.readTeamUser"));

		//outParam.setCoreDataSet("dsCount", getSqlManager().queryForCoreDataSet(dsSrchOpt, "BMainService.readRfqCnt"));
		//outParam.setCoreDataSet("dsList", getSqlManager().queryForCoreDataSet(dsSrchOpt, "BMainService.searchRfqList"));

		return outParam;
	}

}