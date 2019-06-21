/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 *
 * @서비스명		: epro.sys.service BRfxService.java                       
 * @생성자		:
 * @생성일시		:
 * @구분			: 
 * @최종수정자		: 
 * @최종수정일시	: 
 */
package epro.rel.service;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import core.vo.model.coreset.CoreDataSet;
import core.vo.model.coreset.CoreParamSet;
import core.vo.model.coreset.CoreParamSetFactory;
import core.web.service.CoreService;
import epro.com.module.CommandModule;

@Service
public class BRelService extends CoreService {
	private static final Log LOG = LogFactory.getLog(BRelService.class);
	@Autowired
	CommandModule commandModule;
	
	/**
	 * @메소드명 	: prePrSrch
	 * @input 	: CoreParamSet inParams
	 * @return 	: CoreParamSet outParam
	 * @desc 	: 재고현황 LIST를 조회한다
	 */
	public CoreParamSet stockSrch(CoreParamSet inParams) {
		
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");
		
		dsCondition.setColumn(0, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
	
		CoreDataSet dsSrch = getSqlManager().queryForCoreDataSet(dsCondition, "BRelService.stockSrch");
		outParam.setCoreDataSet("dsList", dsSrch);

		return outParam;
	}
	
	/**
	 * @메소드명 	: prePrSrch
	 * @input 	: CoreParamSet inParams
	 * @return 	: CoreParamSet outParam
	 * @desc 	: 출고등록 Read
	 */
	public CoreParamSet reqList(CoreParamSet inParams) {
		
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		dsCondition.setColumn(0, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
		
		outParam.setCoreDataSet("dsCnt", getSqlManager().queryForCoreDataSet(dsCondition, "BRelService.relReadCnt"));
	/*	outParam.setCoreDataSet("dsList", getSqlManager().queryForCoreDataSet(dsCondition, "BRelService.relReadList"));
		outParam.setCoreDataSet("dsHeader", getSqlManager().queryForCoreDataSet(dsCondition, "BRelService.relReadHeader"));*/
		outParam.setCoreDataSet("dsItem", getSqlManager().queryForCoreDataSet(dsCondition, "BRelService.relReadItem"));
		
		return outParam;
	}

}