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
import core.vo.model.dataset.NexacroDataSet;
import core.web.service.CoreService;
import epro.com.module.CommandModule;
import epro.com.module.FileModule;
import epro.core.module.AESManager;

@Service
public class BPorService extends CoreService {
	private static final Log LOG = LogFactory.getLog(BPorService.class);
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

		outParam.setCoreDataSet("dsList", getSqlManager().queryForCoreDataSet(dsCondition, "BPorService.searchPorPrgList"));
		return outParam;
	}
	
	/**
	 * @메소드명 : searchPorCfmList
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 발주완료현황조회
	 */
	public CoreParamSet searchPorCfmList(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");

		outParam.setCoreDataSet("dsList", getSqlManager().queryForCoreDataSet(dsCondition, "BPorService.searchPorCfmList"));
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

		outParam.setCoreDataSet("dsPo", getSqlManager().queryForCoreDataSet(dsPo, "BPorService.readPo"));
		outParam.setCoreDataSet("dsPoPay", getSqlManager().queryForCoreDataSet(dsPo, "BPorService.readPoPay"));
		outParam.setCoreDataSet("dsPoItem", getSqlManager().queryForCoreDataSet(dsPo, "BPorService.readPoItem"));
		outParam.setCoreDataSet("dsPoHsty", getSqlManager().queryForCoreDataSet(dsPo, "BPorService.readPoHsty"));
		outParam.setCoreDataSet("dsPoDlvItem", getSqlManager().queryForCoreDataSet(dsPo, "BPorService.readPoDlvItem"));
		/*outParam.setCoreDataSet("dsSpecFile", getSqlManager().queryForCoreDataSet(dsPo, "BPorService.readSpecFile"));*/

		/* File read 부분 */
		CoreDataSet dsfile = outParam.getCoreDataSetInstance();
		dsfile.addStringColumn("BRANCH_CD");
		dsfile.addStringColumn("REF_TBL_NM");
		dsfile.addStringColumn("REF_KEY_1");
		dsfile.addStringColumn("REF_KEY_2");
		dsfile.appendRow();
		dsfile.setColumn(0, "BRANCH_CD", dsPo.getColumnAsString(0, "SESSION_BRANCH_CD"));
		dsfile.setColumn(0, "REF_TBL_NM", "'MM_PO','MM_PO_ITEM'");
		dsfile.setColumn(0, "REF_KEY_1", dsPo.getColumnAsString(0, "PO_NO"));
		outParam.setCoreDataSet("FileInfo", dsfile);
		outParam = fileModule.getFileInfo(outParam);

		return outParam;
	}

	/**
	 * @메소드명 : searchPoPrReq
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 발주상세(구매요청에서 넘어온경우)
	 */
	public CoreParamSet searchPoPrReq(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsPo = inParams.getCoreDataSet("inDs");

		dsPo.setColumn(0, "PR_ITEM_ID_ARR"	, commandModule.arrayJoin(dsPo.getColumnAsString(0, "PR_ITEM_ID_ARR")));
		CoreDataSet outPo = getSqlManager().queryForCoreDataSet(dsPo, "BPorService.readPrToPo");
		
		outParam.setCoreDataSet("dsPo", outPo);

		if(outPo.getColumnAsString(0, "PTNR_ID") != null && !"".equals(outPo.getColumnAsString(0, "PTNR_ID")))
		{
			CoreDataSet outPtnr = getSqlManager().queryForCoreDataSet(dsPo, "BPorService.readPrToPtnr");
			outParam.setCoreDataSet("dsPtnr",outPtnr );
			
			
			outPo.setColumn(0, "CD_PO_CRNC"		, outPtnr.getColumnAsString(0, "CD_PO_CRNC"));
			outPo.setColumn(0, "CD_DLV_MTHD"	, outPtnr.getColumnAsString(0, "CD_DLV_MTHD"));
			outPo.setColumn(0, "CD_PYMT_CNDTN"	, outPtnr.getColumnAsString(0, "CD_PYMT_CNDTN"));
			outPo.setColumn(0, "CD_PAY_CTGR"	, outPtnr.getColumnAsString(0, "CD_PAY_CTGR"));
			outPo.setColumn(0, "CD_TAX_CD"		, outPtnr.getColumnAsString(0, "CD_TAX_CD"));
			outPo.setColumn(0, "CD_TAX_KIND"	, outPtnr.getColumnAsString(0, "CD_TAX_KIND"));
		}

		outParam.setCoreDataSet("dsPoPay", getSqlManager().queryForCoreDataSet(dsPo, "BPorService.readPrToPoPay"));
		outParam.setCoreDataSet("dsPoItem", getSqlManager().queryForCoreDataSet(dsPo, "BPorService.readPrToPoItem"));
		
		/* File read 부분 */
		CoreDataSet dsfile = outParam.getCoreDataSetInstance();
		dsfile.addStringColumn("BRANCH_CD");
		dsfile.addStringColumn("REF_TBL_NM");
		dsfile.addStringColumn("REF_KEY_1");
		dsfile.addStringColumn("REF_KEY_2");
		dsfile.appendRow();
		dsfile.setColumn(0, "BRANCH_CD", dsPo.getColumnAsString(0, "SESSION_BRANCH_CD"));
		dsfile.setColumn(0, "REF_TBL_NM", "'MM_PO','MM_PO_ITEM'");
		dsfile.setColumn(0, "REF_KEY_1", dsPo.getColumnAsString(0, "PO_NO"));
		outParam.setCoreDataSet("FileInfo", dsfile);
		outParam = fileModule.getFileInfo(outParam);
		
		return outParam;
	}
	
	
	/**
	 * @메소드명 : savePo
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 발주저장
	 */
	public CoreParamSet savePo(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsPo = inParams.getCoreDataSet("inPo");
		CoreDataSet dsPoItem = inParams.getCoreDataSet("inPoItem");
		CoreDataSet dsPoPay = inParams.getCoreDataSet("inPoPay");

		
		// 지금 발주에서 바로 작성할 수 있는 경우가 없음
		// 대략 형태만 잡아놓았음 , 난중에 고쳐야됨.
		if (null == dsPo.getColumnAsString(0, "PO_NO") || "".equals(dsPo.getColumnAsString(0, "PO_NO"))) {
			String strPoNo =  commandModule.getSeqNextval("MM_PO_SEQ", CoerConstain.PROPAGATION_REQUIRED);
			dsPo.setColumn(0, "PO_NO", strPoNo);

			getSqlManager().insertToCoreDataSet(dsPo, "BPorService.savePo");
			getSqlManager().insertToCoreDataSet(dsPo, "BCntrService.savePoAdd");
			
			
			for (int i = 0; i < dsPoItem.getRowCount(); i++) {
				dsPoItem.setActiveRow(i);
				dsPoItem.setColumn(i, "PO_NO", strPoNo);
				dsPoItem.setColumn(i, "PO_ITEM_ID", commandModule.getSeqNextval("MM_PO_ITEM_SEQ", CoerConstain.PROPAGATION_REQUIRED));

				getSqlManager().insertToCoreDataSet(dsPoItem, "BPorService.savePoItem");
				getSqlManager().insertToCoreDataSet(dsPoItem, "BPorService.savePoItemAdd");
				getSqlManager().insertToCoreDataSet(dsPoItem, "BPorService.updatePrItem");
				getSqlManager().insertToCoreDataSet(dsPoItem, "BPorService.savePrItemHsty");
			}
			
			for(int i=0; i<dsPoPay.getRowCount();i++) {
				dsPoPay.setActiveRow(i);
				dsPoPay.setColumn(i, "PO_NO", strPoNo);
				dsPoPay.setColumn(i, "ODR"	,i + 1 );
				getSqlManager().insertToCoreDataSet(dsPoPay, "BPorService.savePoPay");
			}
			
			getSqlManager().insertToCoreDataSet(dsPo, "BCntrService.updatePoAmt");
			
			poHsryInsert(dsPo,strPoNo,dsPo.getColumnAsString(0, "CD_PO_STTS"),"");
			
		} else {
			for (int i = 0; i < dsPoItem.getRowCount(); i++) {
				dsPoItem.setActiveRow(i);
				String rowType = dsPoItem.getRowStatus(i);
				
				// 품묵을 현재 추가할수 있는 부분이 없음
				// 나중에 고쳐야됨.
				if (rowType.equals(CoerConstain.INSERT)) {
					dsPoItem.setColumn(i, "PO_NO", dsPo.getColumnAsString(0, "PO_NO"));
					dsPoItem.setColumn(i, "PO_ITEM_ID", commandModule.getSeqNextval("MM_PO_ITEM_SEQ", CoerConstain.PROPAGATION_REQUIRED));

					getSqlManager().insertToCoreDataSet(dsPoItem, "BPorService.savePoItem");
					getSqlManager().insertToCoreDataSet(dsPoItem, "BPorService.savePoItemAdd");
					getSqlManager().insertToCoreDataSet(dsPoItem, "BPorService.updatePrItem");
					getSqlManager().insertToCoreDataSet(dsPoItem, "BPorService.savePrItemHsty");
				} else {
					getSqlManager().updateToCoreDataSet(dsPoItem, "BPorService.updatePoItem");
					getSqlManager().insertToCoreDataSet(dsPoItem, "BPorService.updatePoItemAdd");
				}
			}
			
			for (int i = 0; i < dsPoItem.getDeleteRowCount(); i++) {
				CoreDataSet dsPoItemDel = outParam.getCoreDataSetInstance();
				dsPoItemDel.addStringColumn("PO_ITEM_ID");
				dsPoItemDel.appendRow();
				
				dsPoItemDel.setColumn(0, "PO_ITEM_ID", dsPoItemDel.getDeleteColumnAsString(i, "PO_ITEM_ID"));

				getSqlManager().deleteToCoreDataSet(dsPoItemDel, "BPorService.deletePoItem");
				getSqlManager().deleteToCoreDataSet(dsPoItemDel, "BPorService.deletePoItemAdd");
				//품목 삭제하고 prItem 이랑 pritem 히스토리 도 업데이트 쳐야될듯
			}
			
			getSqlManager().updateToCoreDataSet(dsPo, "BPorService.updatePo");
			getSqlManager().updateToCoreDataSet(dsPo, "BPorService.updatePoAdd");
			
			getSqlManager().insertToCoreDataSet(dsPo, "BPorService.deletePoPay");
			for(int i=0; i<dsPoPay.getRowCount();i++) {
				dsPoPay.setActiveRow(i);
				dsPoPay.setColumn(i, "PO_NO", dsPo.getColumnAsString(0, "PO_NO"));
				dsPoPay.setColumn(i, "ODR"	,i + 1 );
				getSqlManager().insertToCoreDataSet(dsPoPay, "BPorService.savePoPay");
			}
		}

		inParams.put("bizGubun", "PO");
		outParam = fileModule.saveFileInfo(inParams);

		outParam.setCoreDataSet("outPo", dsPo);

		return outParam;
	}
	
	/**
	 * mhhan
	 * 발주이력 작성.
	 * @param 		DataSet targetDs, String poNo, String type, String cntnt
	 * @return 		PlatformData
	 * @exception 	Exception
	 */	
	public void poHsryInsert(CoreDataSet targetDs, String poNo, String type, String cntnt){		
		String[] poNoArr = new String[1];
		CoreDataSet dsPoHsty = new NexacroDataSet();
		
		if(poNo.contains(",")){
			poNoArr = poNo.split(",");
		}else{
			poNoArr[0] = poNo;
		}
			
		if("PO10WRI".equalsIgnoreCase(type))	//생성
		{
			type = "생성";
			if(cntnt==null || "".equals(cntnt)) cntnt = "생성 하였습니다.";
		}
		else if("PO10SND".equalsIgnoreCase(type))	//발주완료
		{
			type = "발주완료";
			if(cntnt==null || "".equals(cntnt)) cntnt = "발주완료 하였습니다.";
		}
		else if("PO10ING".equalsIgnoreCase(type))	//발주접수
		{
			type = "발주접수";
			if(cntnt==null || "".equals(cntnt)) cntnt = "발주접수 하였습니다.";
		}
		else if("PO10CLO".equalsIgnoreCase(type))	//납품완료
		{
			type = "납품완료";
			if(cntnt==null || "".equals(cntnt)) cntnt = "납품완료 하였습니다.";
		}
		else if("PO10CXL".equalsIgnoreCase(type))	//취소
		{
			type = "취소";
			if(cntnt==null || "".equals(cntnt)) cntnt = "취소 하였습니다.";
		}
		else if("PO10REQ".equalsIgnoreCase(type))	//변경요청
		{
			type = "변경요청";
			if(cntnt==null || "".equals(cntnt)) cntnt = "변경요청 하였습니다.";
		}
		else if("PO10REJ".equalsIgnoreCase(type))	//변경요청거부
		{
			type = "변경요청거부";
			if(cntnt==null || "".equals(cntnt)) cntnt = "변경요청거부 하였습니다.";
		}
		if("PO10REWRI".equalsIgnoreCase(type))	//[발주완료, 발주접수, 납품완료] 납품하기 전에 다시 발주를 작성하면 발주변경으로 이력을 남긴다.
		{
			type = "발주변경";
			if(cntnt==null || "".equals(cntnt)) cntnt = "발주변경 하였습니다.";
		}
					
		//발주 이력 생성			
		dsPoHsty.addStringColumn("SN");
		dsPoHsty.addStringColumn("PO_NO");
		dsPoHsty.addStringColumn("BRANCH_CD");
		dsPoHsty.addStringColumn("CHRGR_ID");
		dsPoHsty.addStringColumn("CHRGR_NM");
		dsPoHsty.addStringColumn("CNTNT");
		dsPoHsty.addStringColumn("TYPE");
		dsPoHsty.appendRow();
		for(int i=0; i<poNoArr.length; i++)
		{				
			dsPoHsty.setColumn(0, "SN"		 	, commandModule.getSeqNextval("MM_PO_HSTY_SEQ", CoerConstain.PROPAGATION_REQUIRED));
			dsPoHsty.setColumn(0, "PO_NO"	 	, poNoArr[i]);
			dsPoHsty.setColumn(0, "BRANCH_CD"	, targetDs.getColumnAsString(0, "SESSION_BRANCH_CD"));
			dsPoHsty.setColumn(0, "CHRGR_ID"	, targetDs.getColumnAsString(0, "SESSION_USER_ID"));
			dsPoHsty.setColumn(0, "CHRGR_NM"	, targetDs.getColumnAsString(0, "SESSION_USER_NM"));
			dsPoHsty.setColumn(0, "CNTNT"	 	, cntnt);
			dsPoHsty.setColumn(0, "TYPE"	 	, type);
			
			getSqlManager().insertToCoreDataSet(dsPoHsty, "BPorService.savePoHsty");
		}		
	}
	
	
	
}