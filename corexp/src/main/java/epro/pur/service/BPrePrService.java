/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 *
 * @서비스명		: epro.sys.service BInvService.java                       
 * @생성자		:
 * @생성일시		:
 * @구분			: 
 * @최종수정자		: 
 * @최종수정일시	: 
 */
package epro.pur.service;

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

@Service
public class BPrePrService extends CoreService {
	private static final Log LOG = LogFactory.getLog(BPrePrService.class);
	@Autowired
	CommandModule commandModule;
	@Autowired
	FileModule fileModule;

	/**
	 * @메소드명 	: prePrSrch
	 * @input 	: CoreParamSet inParams
	 * @return 	: CoreParamSet outParam
	 * @desc 	: 사전요청현황을 조회한다.
	 */
	public CoreParamSet prePrSrch(CoreParamSet inParams) {
		
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		dsCondition.setColumn(0, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
		
		CoreDataSet dsSrch = getSqlManager().queryForCoreDataSet(dsCondition, "BPrePrService.prePrSrch");
		outParam.setCoreDataSet("dsList", dsSrch);

		return outParam;
	}
	
	/**
	 * @메소드명 	: prePrRead
	 * @input 	: CoreParamSet inParams
	 * @return 	: CoreParamSet outParam
	 * @desc 	: 사전요청상세를 조회한다.
	 */
	public CoreParamSet prePrRead(CoreParamSet inParams) {
		
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsPrePr = inParams.getCoreDataSet("dsPrePr");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		dsPrePr.setColumn(0, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
		
		CoreDataSet dsSrch = getSqlManager().queryForCoreDataSet(dsPrePr, "BPrePrService.prePrRead");
		outParam.setCoreDataSet("dsPrePr", dsSrch);

		return outParam;
	}	

	/**
	 * @메소드명 	: prePrSrch
	 * @input 	: CoreParamSet inParams
	 * @return 	: CoreParamSet outParam
	 * @desc 	: 사전요청상세 소싱그룹에 해당하는 담당자 정보를 찾는다.
	 */
	public CoreParamSet prePrPchrgrUserSrch(CoreParamSet inParams) {
		
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsPrePr = inParams.getCoreDataSet("dsPrePr");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		dsPrePr.setColumn(0, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
		
		CoreDataSet dsSrch = getSqlManager().queryForCoreDataSet(dsPrePr, "BPrePrService.prePrPchrgrUserSrch");
		outParam.setCoreDataSet("dsReturn", dsSrch);

		return outParam;
	}
	
	/**
	 * @메소드명 	: prePrSave
	 * @input 	: CoreParamSet inParams
	 * @return 	: CoreParamSet outParam
	 * @desc 	: 사전요청을 저장한다.
	 */
	public CoreParamSet prePrSave(CoreParamSet inParams) {
		
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsPrePr = inParams.getCoreDataSet("dsPrePr");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");
		
//		dsPrePr.setUpdate(true);
//		dsPrePr.addStringColumn("LOGIN_USER_ID");
//		dsPrePr.addStringColumn("LOGIN_USER_NM");
		
		dsPrePr.setColumn(0, "BRANCH_CD"	, gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
		dsPrePr.setColumn(0, "LOGIN_USER_NM", gdsUserInfo.getColumnAsString(0, "USER_NM"));
		dsPrePr.setColumn(0, "LOGIN_USER_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
		//INSERT
		if (null == dsPrePr.getColumnAsString(0, "PR_NO") || "".equals(dsPrePr.getColumnAsString(0, "PR_NO"))) 
		{	
			dsPrePr.setColumn(0, "PR_NO"		, commandModule.getSeqNextval(dsPrePr.getColumnAsString(0, "BRANCH_CD"),"MM_PRE_PR_SEQ", CoerConstain.PROPAGATION_REQUIRED));
			dsPrePr.setColumn(0, "CD_PR_STTS"	, "PR14WRI");
		
			getSqlManager().insertToCoreDataSet(dsPrePr, "BPrePrService.insertPrePr");
		}else{				
			
			dsPrePr.setActiveRow(0);
			getSqlManager().updateToCoreDataSet(dsPrePr, "BPrePrService.updatePrePr");
		}
		
		inParams.put("bizGubun", "PO");
		outParam = fileModule.saveFileInfo(inParams);
		
		outParam.setCoreDataSet("dsPrePr", dsPrePr);
		
		return outParam;
	}	
 
	/**
	 * @메소드명 	: prePrSrch
	 * @input 	: CoreParamSet inParams
	 * @return 	: CoreParamSet outParam
	 * @desc 	: 사전요청현황을 조회한다.
	 */
	public CoreParamSet prePrRcvSrch(CoreParamSet inParams) {
		
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		dsCondition.setColumn(0, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
		
		CoreDataSet dsSrch = getSqlManager().queryForCoreDataSet(dsCondition, "BPrePrService.prePrRcvSrch");
		outParam.setCoreDataSet("dsList", dsSrch);

		return outParam;
	}	
		
	/**
	 * @메소드명 	: savePreRcv
	 * @input 	: CoreParamSet inParams
	 * @return 	: CoreParamSet outParam
	 * @desc 	: 사전요청 접수
	 */
	public CoreParamSet savePreRcv(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsList = inParams.getCoreDataSet("dsList");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");
		
		for (int i = 0; i < dsList.getRowCount(); i++) {
			if("1".equals(dsList.getColumnAsString(i,"CHECKED"))){
				
				
				dsList.setColumn(i, "CD_PR_STTS"	,"PR14RCV");
				dsList.setColumn(i, "BRANCH_CD"		, gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
				dsList.setColumn(i, "LAST_CHGR_ID"	, gdsUserInfo.getColumnAsString(0, "USER_ID"));
				dsList.setActiveRow(i);
				
				getSqlManager().updateToCoreDataSet(dsList, "BPrePrService.savePreRcv");
			}
		}

		return outParam;
	}	
	
	/**
	 * @메소드명 	: savePreAnswer
	 * @input 	: CoreParamSet inParams
	 * @return 	: CoreParamSet outParam
	 * @desc 	: 사전요청 회신
	 */
	public CoreParamSet savePreAnswer(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsPrePr = inParams.getCoreDataSet("dsPrePr");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");
		
				
		dsPrePr.setColumn(0, "CD_PR_STTS"	,"PR14RTN");
		dsPrePr.setColumn(0, "BRANCH_CD"	, gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
		dsPrePr.setColumn(0, "LAST_CHGR_ID"	, gdsUserInfo.getColumnAsString(0, "USER_ID"));
		
		getSqlManager().updateToCoreDataSet(dsPrePr, "BPrePrService.savePreAnswer");
	
		outParam.setCoreDataSet("dsPrePr", dsPrePr);

		return outParam;
	}	
}