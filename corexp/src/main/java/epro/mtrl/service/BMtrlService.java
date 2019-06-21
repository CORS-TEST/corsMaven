/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 *
 * @서비스명		: epro.mtrl.service BMtrlService.java                       
 * @생성자		: 정준화
 * @생성일시		: 2017. 9. 05
 * @구분			: 기준정보 > 품목관리
 * @최종수정자		: 정준화
 * @최종수정일시	: 2017. 9. 05
 */
package epro.mtrl.service;

import java.util.HashMap;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import core.common.constain.CoerConstain;
import core.common.util.CommonUtil;
import core.exception.userhandle.UserHandleException;
import core.vo.model.coreset.CoreDataSet;
import core.vo.model.coreset.CoreParamSet;
import core.vo.model.coreset.CoreParamSetFactory;
import core.web.service.CoreService;
import epro.com.module.CommandModule;

@Service
public class BMtrlService extends CoreService {
	@Autowired
	CommandModule commandModule;
	private static final Log LOG = LogFactory.getLog(BMtrlService.class);

	/**
	 * @메소드명 : searchMtrl
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc :
	 */
	public CoreParamSet searchMtrl(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");
		outParam.setCoreDataSet("dsList", getSqlManager().queryForCoreDataSet(dsCondition, "BMtrlService.searchMtrl"));
		return outParam;
	}

	/**
	 * @메소드명 : searchCntrMtrl
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc :
	 */
	public CoreParamSet searchCntrMtrl(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");

		//outParam.setCoreDataSet("dsList",getSqlManager().queryForCoreDataSet(dsCondition, "BMtrlService.searchCntrMtrl"));
		return outParam;
	}

	/**
	 * @메소드명 : searchNoneCodeMtrl
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc :
	 */
	public CoreParamSet searchNoneCodeMtrl(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		if (!dsCondition.containsColumn("LANG_CD")) {
			dsCondition.setUpdate(true);
			dsCondition.addStringColumn("LANG_CD");
		}
		dsCondition.setColumn(0, "LANG_CD", gdsUserInfo.getColumnAsString(0, "LANG_CD"));

		outParam.setCoreDataSet("dsList", getSqlManager().queryForCoreDataSet(dsCondition, "BMtrlService.searchNoneCodeMtrl"));
		return outParam;
	}

	/**
	 * @메소드명 : saveNoneCodeMtrl
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 입찰에 품목코드 지정 후 저장
	 */
	public CoreParamSet saveNoneCodeMtrl(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsList = inParams.getCoreDataSet("dsList");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		for (int i = 0; i < dsList.getRowCount(); i++) {
			dsList.setActiveRow(i);
			if ((CoerConstain.UPDATE).equals(dsList.getRowStatus(i))) {
				dsList.setColumn(i, "USER_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
				getSqlManager().updateToCoreDataSet(dsList, "BMtrlService.saveNoneCodeMtrl");
			}
		}

		outParam.setMessage("EPRO_LABEL_00002");
		return outParam;
	}

	/**
	 * @메소드명 : searchPoGr
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc :
	 */
	public CoreParamSet searchPoGr(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");

		outParam.setCoreDataSet("dsList", getSqlManager().queryForCoreDataSet(dsCondition, "BMtrlService.searchPoGr"));
		return outParam;
	}

	/**
	 * @메소드명 : saveCntrToExcel
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc :
	 */
	public CoreParamSet saveCntrToExcel(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet ds_output = inParams.getCoreDataSet("ds_output");

		Map<String, Object> seqMap = new HashMap<String, Object>();
		seqMap.put("XML_STRING", CommonUtil.getXmlFromStringToInsert(ds_output.toXmlString()));
		seqMap.put("OUT_STR", "");
		getSqlManager().insertForObject(seqMap, "BMtrlService.insertExcelMmMtrlCntr");
		String returnStr = (String) seqMap.get("OUT_STR");
		if (returnStr != null) {
			LOG.error("ERRORRRR!!!!!!!!!" + returnStr);
			throw new UserHandleException("-1", "에러");
		}
		LOG.debug("returnStr:::::::::::::" + returnStr);
		return outParam;
	}

	/**
	 * @메소드명 : savePoToExcel
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc :
	 */
	public CoreParamSet savePoToExcel(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet ds_output = inParams.getCoreDataSet("ds_output");

		Map<String, Object> seqMap = new HashMap<String, Object>();
		seqMap.put("XML_STRING", CommonUtil.getXmlFromStringToInsert(ds_output.toXmlString()));
		seqMap.put("OUT_STR", "");
		getSqlManager().insertForObject(seqMap, "BMtrlService.insertExcelMmMtrlPogr");
		String returnStr = (String) seqMap.get("OUT_STR");
		if (returnStr != null) {
			LOG.error("ERRORRRR!!!!!!!!!" + returnStr);
			throw new UserHandleException("-1", "에러");
		}
		LOG.debug("returnStr:::::::::::::" + returnStr);
		return outParam;
	}

	/**
	 * @메소드명 : saveMtrlToExcel
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc :
	 */
	public CoreParamSet saveMtrlToExcel(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet ds_output = inParams.getCoreDataSet("ds_output");

		Map<String, Object> seqMap = new HashMap<String, Object>();
		seqMap.put("XML_STRING", CommonUtil.getXmlFromStringToInsert(ds_output.toXmlString()));
		seqMap.put("OUT_STR", "");
		getSqlManager().insertForObject(seqMap, "BMtrlService.insertExcelMmMtrl");
		String returnStr = (String) seqMap.get("OUT_STR");
		if (returnStr != null) {
			LOG.error("ERRORRRR!!!!!!!!!" + returnStr);
			throw new UserHandleException("-1", "에러");
		}
		LOG.debug("returnStr:::::::::::::" + returnStr);
		return outParam;
	}
	
	/**
	 * @메소드명 : searchMtrlRequestList
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 품목등록요청 list 조회
	 */
	public CoreParamSet searchMtrlRequestList(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");
		CoreDataSet dsList = inParams.getCoreDataSet("dsList");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		outParam.setCoreDataSet("dsList", getSqlManager().queryForCoreDataSet(dsCondition, "BMtrlService.searchMtrlRequestList"));
		return outParam;
	}
	
	/**
	 * @메소드명 : searchMtrlAttr
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 자재그룹별 세부속성 조회
	 */
	public CoreParamSet searchMtrlAttr(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsMtrlGrpId");
		
		outParam.setCoreDataSet("dsMtrlGrpSpec", getSqlManager().queryForCoreDataSet(dsCondition, "BMtrlService.searchMtrlAttr"));
		return outParam;
	}
	
	/**
	 * @메소드명 : saveMtrlReq
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 품목등록요청
	 */
	public CoreParamSet saveMtrlReq(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsMtrlReq = inParams.getCoreDataSet("dsBasicInfo");
		CoreDataSet dsAttr = inParams.getCoreDataSet("dsAttr");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		if (null == dsMtrlReq.getColumnAsString(0, "MTRL_REQ_NO") || "".equals(dsMtrlReq.getColumnAsString(0, "MTRL_REQ_NO"))) { 
			dsMtrlReq.setColumn(0, "MTRL_REQ_NO", commandModule.getSeqNextval("MM_MTRL_REQ_SEQ", CoerConstain.PROPAGATION_REQUIRED));
			dsMtrlReq.setColumn(0, "CRTR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
			dsMtrlReq.setColumn(0, "REQR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
			dsMtrlReq.setColumn(0, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));

			getSqlManager().insertToCoreDataSet(dsMtrlReq, "BMtrlService.saveMtrlReq");

		} else {

			dsMtrlReq.setColumn(0, "REQR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
			dsMtrlReq.setColumn(0, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
			getSqlManager().updateToCoreDataSet(dsMtrlReq, "BMtrlService.updateMtrlReq");
			
		}
		
		
		dsMtrlReq.setColumn(0, "MTRL_CD", dsMtrlReq.getColumnAsString(0, "MTRL_REQ_NO"));
		LOG.debug("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
		LOG.debug("===="+dsMtrlReq.getColumnAsString(0, "MTRL_CD"));
		
		//이전속성 Delete
		getSqlManager().deleteToCoreDataSet(dsMtrlReq, "BMtrlService.deleteMtrlAttr");
		
		for (int i = 0; i < dsAttr.getRowCount(); i++) {
			dsAttr.setColumn(i, "MTRL_CD", dsMtrlReq.getColumnAsString(0, "MTRL_REQ_NO"));
			dsAttr.setColumn(i, "CRTR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
			dsAttr.setColumn(i, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));

			dsAttr.setActiveRow(i);
			getSqlManager().insertToCoreDataSet(dsAttr, "BMtrlService.saveMtrlAttr");
		}

		outParam.setCoreDataSet("dsBasicInfo", dsMtrlReq);


		return outParam;
	}	
	
	/**
	 * @메소드명 : readMtrlReq
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 품목등록요청 상세정보
	 */
	public CoreParamSet readMtrlReq(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsBasicInfo = inParams.getCoreDataSet("dsBasicInfo");
		
		outParam.setCoreDataSet("dsBasicInfo", getSqlManager().queryForCoreDataSet(dsBasicInfo, "BMtrlService.readMtrlReqRead"));
		outParam.setCoreDataSet("dsAttr", getSqlManager().queryForCoreDataSet(dsBasicInfo, "BMtrlService.readMtrlAttr"));
		
		return outParam;
	}	
	
	
	
}
