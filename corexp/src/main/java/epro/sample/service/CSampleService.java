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
package epro.sample.service;

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
public class CSampleService extends CoreService {
	private static final Log LOG = LogFactory.getLog(CSampleService.class);
	@Autowired
	CommandModule commandModule;
	@Autowired
	FileModule fileModule;

	/**
	 * @메소드명 : sampleSrch
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : SAMPLE 리스트를 조회한다.
	 */
	public CoreParamSet sampleSrch(CoreParamSet inParams) {
		
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");
		CoreDataSet dsSrch = getSqlManager().queryForCoreDataSet(dsCondition, "CSampleService.cSampleSrch");
		outParam.setCoreDataSet("dsList", dsSrch);

		return outParam;
	}

	/**
	 * @메소드명 : savePr
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : SAMPLE 데이터를 저장한다.
	 */
	public CoreParamSet savePr(CoreParamSet inParams) {
		
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsSample = inParams.getCoreDataSet("dsSample");
		CoreDataSet dsSampleItem = inParams.getCoreDataSet("dsSampleItem");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		//구매요청신규 작성이면
		if (null == dsSample.getColumnAsString(0, "PR_NO") || "".equals(dsSample.getColumnAsString(0, "PR_NO"))) {
			dsSample.setColumn(0, "PR_NO"			, commandModule.getSeqNextval("MM_SAMPLE_SEQ", CoerConstain.PROPAGATION_REQUIRED));
			dsSample.setColumn(0, "LOGIN_USER_ID"	, gdsUserInfo.getColumnAsString(0, "USER_ID"));
			dsSample.setColumn(0, "BRANCH_CD"		, gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
			
			getSqlManager().insertToCoreDataSet(dsSample, "CSampleService.saveSample");
			
			//사용가능여부 점검 필요
			//dsSampleItem.setConstColumn("PR_NO", dsSample.getColumnAsString(0, "PR_NO"));
			//dsSampleItem.setConstColumn("LOGIN_USER_ID", dsSample.getColumnAsString(0, "USER_ID"));
			
			for (int i = 0; i < dsSampleItem.getRowCount(); i++) {
				dsSampleItem.setColumn(i, "PR_NO"		, dsSample.getColumnAsString(0, "PR_NO"));
				dsSampleItem.setColumn(i, "ITM_NO"		, i + 1);
				dsSampleItem.setColumn(i, "LOGIN_USER_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
				
				dsSampleItem.setActiveRow(i);
				getSqlManager().insertToCoreDataSet(dsSampleItem, "CSampleService.saveSampleItem");
			}
			
		//구매요청 업데이트이면	
		} else {
			
			
			//사용가능여부 점검 필요
			//dsSampleItem.setConstColumn("PR_NO", dsSample.getColumnAsString(0, "PR_NO"));
			//dsSampleItem.setConstColumn("LOGIN_USER_ID", dsSample.getColumnAsString(0, "USER_ID"));
			//dsSampleItem.setConstColumn("LOGIN_USER_NM", dsSample.getColumnAsString(0, "USER_NM"));
			
			
			for (int i = 0; i < dsSampleItem.getRowCount(); i++) {
				String rowType = dsSampleItem.getRowStatus(i);

				//INSERT , UPDATE , DELETE 에 공통적으로 사용할 데이터 맵핑
				dsSampleItem.setColumn(i, "LOGIN_USER_ID"	, gdsUserInfo.getColumnAsString(0, "USER_ID"));
				dsSampleItem.setColumn(i, "LOGIN_USER_NM"	, gdsUserInfo.getColumnAsString(0, "USER_NM"));
				dsSampleItem.setColumn(i, "ITM_NO"			, i + 1);
				
				//활성화된 행을 선택함.
				dsSampleItem.setActiveRow(i);
				
				if (rowType.equals(CoerConstain.INSERT)) {
					dsSampleItem.setColumn(i, "PR_NO"		, dsSample.getColumnAsString(0, "PR_NO"));
					getSqlManager().insertToCoreDataSet(dsSampleItem, "CSampleService.saveSampleItem");
				} else {
					getSqlManager().updateToCoreDataSet(dsSampleItem, "CSampleService.updateSampleItem");
				}
			}
			
			//품목중 삭제된 품목을 찾아 삭제처리한다.
			for (int i = 0; i < dsSampleItem.getDeleteRowCount(); i++) {
				//활성화된 행을 선택함.
				dsSampleItem.setActiveRow(i);

				getSqlManager().deleteToCoreDataSet(dsSampleItem, "BCntrService.deleteSampleItem");
			}
			
			getSqlManager().updateToCoreDataSet(dsSample, "CSampleService.updateSample");
			
		}

		return outParam;
	}
	
	/**
	 * @메소드명 	: cancelSample
	 * @input 	: CoreParamSet inParams
	 * @return 	: CoreParamSet outParam
	 * @desc 	: 샘플데이터를 취소한다.
	 */
	public CoreParamSet cancelSample(CoreParamSet inParams) {
		
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsSample = inParams.getCoreDataSet("dsSample");

		//삭제하고자 하는데이터의 상태의 컨디션을 체크하여 이상이 없으면 취소로 업데이트 한다.
		CoreDataSet dsStts = getSqlManager().queryForCoreDataSet(dsSample, "CSampleService.cSampleItemStts");
		
		if(dsStts.getRowCount() > 0) {
			outParam.setErrorCode(-1);
			outParam.setErrorMessage("이미 처리된 품목이 존재하여 처리할 수 없습니다.");	
		}else {
			getSqlManager().updateToCoreDataSet(dsSample, "CSampleService.cancelSample");
			getSqlManager().updateToCoreDataSet(dsSample, "CSampleService.cancelSampleItem");
			
			outParam.setErrorCode(0);
			outParam.setErrorMessage("정상적으로 삭제처리 되었습니다.");	
		}
		return outParam;
	}	
	
 	
	 
}