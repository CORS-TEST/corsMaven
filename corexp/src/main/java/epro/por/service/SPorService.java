/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 *
 * @서비스명		: epro.sys.service BPorService.java                       
 * @생성자		:
 * @생성일시		:
 * @구분			: 
 * @최종수정자		: 
 * @최종수정일시	: 
 */
package epro.por.service;

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
import epro.com.module.FileModule;
import epro.core.module.AESManager;

@Service
public class SPorService extends CoreService {
	private static final Log LOG = LogFactory.getLog(SPorService.class);
	@Autowired
	CommandModule commandModule;
	@Autowired
	FileModule fileModule;

	/**
	 * @메소드명 : searchPorPrgList
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 발주진행현황조회
	 */
	public CoreParamSet searchPorPrgList(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		dsCondition.setColumn(0, "PTNR_ID", gdsUserInfo.getColumnAsString(0, "PTNR_ID"));

		outParam.setCoreDataSet("dsList", getSqlManager().queryForCoreDataSet(dsCondition, "SPorService.searchPoPrgList"));
		return outParam;
	}
	
	
	/**
	 * @메소드명 : updatePorReceipt
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 발주접수
	 */
	public CoreParamSet updatePorReceipt(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsPoList = inParams.getCoreDataSet("inDs");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		for(int i=0; i<dsPoList.getRowCount();i++) {
			dsPoList.setActiveRow(i);
			dsPoList.setColumn(i, "USER_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
			dsPoList.setColumn(i, "USER_NM", gdsUserInfo.getColumnAsString(0, "USER_NM"));
			dsPoList.setColumn(i, "CNTNT", "발주접수 하였습니다.");
			dsPoList.setColumn(i, "TYPE", "발주접수");
			
			getSqlManager().updateToCoreDataSet(dsPoList, "SPorService.updatePoReceipt");
			getSqlManager().updateToCoreDataSet(dsPoList, "SPorService.updatePoItemReceipt");
			getSqlManager().updateToCoreDataSet(dsPoList, "SPorService.savePoHsty");
			getSqlManager().updateToCoreDataSet(dsPoList, "SPorService.savePrItemHist");
		}
		
		return outParam;
	}
	
	/**
	 * @메소드명 : updatePorChgReq
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 발주변경요청
	 */
	public CoreParamSet updatePorChgReq(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsPoList = inParams.getCoreDataSet("inDs");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		for(int i=0; i<dsPoList.getRowCount();i++) {
			dsPoList.setActiveRow(i);
			dsPoList.setColumn(i, "USER_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
			dsPoList.setColumn(i, "USER_NM", gdsUserInfo.getColumnAsString(0, "USER_NM"));
			dsPoList.setColumn(i, "CNTNT", "변경요청 하였습니다.");
			dsPoList.setColumn(i, "TYPE", "변경요청");
			getSqlManager().updateToCoreDataSet(dsPoList, "SPorService.updatePoChgReq");
			getSqlManager().updateToCoreDataSet(dsPoList, "SPorService.updatePoItemChgReq");
			getSqlManager().updateToCoreDataSet(dsPoList, "SPorService.updatePoAddChgReq");
			
			getSqlManager().updateToCoreDataSet(dsPoList, "SPorService.savePoHsty");
		}


		return outParam;
	}
	
	/**
	 * @메소드명 : readPo
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 발주상세
	 */
	public CoreParamSet readPo(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsPo = inParams.getCoreDataSet("dsPo");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		outParam.setCoreDataSet("dsPo", getSqlManager().queryForCoreDataSet(dsPo, "SPorService.readPo"));
		outParam.setCoreDataSet("dsPoPay", getSqlManager().queryForCoreDataSet(dsPo, "SPorService.readPoPay"));
		outParam.setCoreDataSet("dsPoItem", getSqlManager().queryForCoreDataSet(dsPo, "SPorService.readPoItem"));
		outParam.setCoreDataSet("dsPoDlvItem", getSqlManager().queryForCoreDataSet(dsPo, "SPorService.readPoDlvItem"));

		
		/* File read 부분 */
		CoreDataSet dsfile = outParam.getCoreDataSetInstance();
		dsfile.addStringColumn("BRANCH_CD");
		dsfile.addStringColumn("REF_TBL_NM");
		dsfile.addStringColumn("REF_KEY_1");
		dsfile.addStringColumn("REF_KEY_2");
		dsfile.appendRow();
		dsfile.setColumn(0, "BRANCH_CD", dsPo.getColumnAsString(0, "BRANCH_CD"));
		dsfile.setColumn(0, "REF_TBL_NM", "'MM_PO','MM_PO_ITEM'");
		dsfile.setColumn(0, "REF_KEY_1", dsPo.getColumnAsString(0, "PO_NO"));
		dsfile.setColumn(0, "REF_KEY_2", dsPo.getColumnAsString(0, "PO_ITEM_ID"));
		outParam.setCoreDataSet("FileInfo", dsfile);
		outParam = fileModule.getFileInfo(outParam);
	
		return outParam;
	}
	
	
	/**
	 * @메소드명 : searchPorList
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 발주현황조회
	 */
	public CoreParamSet searchPorList(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		dsCondition.setColumn(0, "PTNR_ID", gdsUserInfo.getColumnAsString(0, "PTNR_ID"));

		outParam.setCoreDataSet("dsList", getSqlManager().queryForCoreDataSet(dsCondition, "SPorService.searchPoList"));
		return outParam;
	}
	
	/**
	 * @메소드명 : searchPorItemList
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 발주현황( 품목별 ) 조회
	 */
	public CoreParamSet searchPorItemList(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		dsCondition.setColumn(0, "PTNR_ID", gdsUserInfo.getColumnAsString(0, "PTNR_ID"));

		outParam.setCoreDataSet("dsList", getSqlManager().queryForCoreDataSet(dsCondition, "SPorService.searchPorItemList"));
		return outParam;
	}	
	
}