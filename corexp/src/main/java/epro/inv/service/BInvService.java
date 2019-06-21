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
package epro.inv.service;

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
public class BInvService extends CoreService {
	private static final Log LOG = LogFactory.getLog(BInvService.class);
	@Autowired
	CommandModule commandModule;
	@Autowired
	FileModule fileModule;
	
	/**
	 * @메소드명 : assetSrch
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 자산조회 LIST
	 */
	public CoreParamSet assetSrch(CoreParamSet inParams) {
		
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");
		CoreDataSet dsSrch = getSqlManager().queryForCoreDataSet(dsCondition, "BInvService.assetSrch");
		outParam.setCoreDataSet("dsSrch", dsSrch);

		return outParam;
	}
	
	/**
	 * @메소드명 : ivSrch
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 건별송장작성을 위한 LIST를 조회한다
	 */
	public CoreParamSet ivEachSrch(CoreParamSet inParams) {
		
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		dsCondition.setColumn(0, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
		dsCondition.setColumn(0, "LANG_CD", gdsUserInfo.getColumnAsString(0, "LANG_CD"));

		outParam.setCoreDataSet("dsList", getSqlManager().queryForCoreDataSet(dsCondition, "BInvService.ivEachSrch"));

		return outParam;
	}
	
	/**
	 * @메소드명 : dlvRead
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 정산관리 > 송장작성 > 송장작성 상세
	 */
	public CoreParamSet dlvRead(CoreParamSet inParams) {
		
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsIv = inParams.getCoreDataSet("dsIv");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");
		
		dsIv.setColumn(0, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
		
		outParam.setCoreDataSet("dsIv", getSqlManager().queryForCoreDataSet(dsIv, "BInvService.dlvRead"));
		outParam.setCoreDataSet("dsIvItem", getSqlManager().queryForCoreDataSet(dsIv, "BInvService.dlvReadItem"));
		

		return outParam;
	}	
	
	/**
	 * @메소드명 : invSave
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 정산관리 > 송장작성 > 송장작성 상세 납품완료된 품목을 조회한다. (건별송장작성)
	 */
	public CoreParamSet invSave(CoreParamSet inParams) {
		
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);

		CoreDataSet dsIv = inParams.getCoreDataSet("dsIv");
		CoreDataSet dsIvItem = inParams.getCoreDataSet("dsIvItem");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");
		
		String dlvItemIdArr = "";
		String headSeq = "";
		String itemSeq = "";	
		
		//INSERT
		if(dsIv.getColumnAsString(0, "INV_NO")==null || dsIv.getColumnAsString(0, "INV_NO").equals(""))
		{	
			for(int i=0; i<dsIvItem.getRowCount(); i++)
           	{		
				dlvItemIdArr += dsIvItem.getColumnAsString(i, "DLV_ITEM_ID");
				if(i<dsIvItem.getRowCount()-1) dlvItemIdArr += ", ";
           	}
			 
			dsIv.addStringColumn("DLV_ITEM_ID_ARR");
			dsIv.addStringColumn("BRANCH_CD");
			dsIv.setColumn(0, "DLV_ITEM_ID_ARR", commandModule.arrayJoin(dlvItemIdArr));
			dsIv.setColumn(0, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
			
			
			CoreDataSet dsTkey = getSqlManager().queryForCoreDataSet(dsIv, "BInvService.altAlreadyAddedItmRead");
			
			
			if(dsTkey.getRowCount() > 1)
			{
				outParam.setErrorCode(1);
				outParam.setErrorMessage("이미 " + dsTkey.getColumnAsString(0, "CRTR_NM") + "님이 송장문서 [" + dsTkey.getColumnAsString(0, "INV_NO") + "] 를 생성하였습니다.");
			}
			else
			{
				headSeq = commandModule.getSeqNextval("MM_IV_SEQ", CoerConstain.PROPAGATION_REQUIRED);
				
				
				dsIv.addStringColumn("INV_NO");
				dsIv.addStringColumn("USER_ID");
				dsIv.addStringColumn("USER_NM");
				dsIv.addStringColumn("BRANCH_CD");
				dsIv.addStringColumn("COREXP_KIDS");
				dsIv.addStringColumn("CD_INV_STTS");
				
				dsIv.setColumn(0, "INV_NO", headSeq);
				dsIv.setColumn(0, "USER_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
				dsIv.setColumn(0, "USER_NM", gdsUserInfo.getColumnAsString(0, "USER_NM"));
				dsIv.setColumn(0, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
				dsIv.setColumn(0, "COREXP_KIDS", AESManager.AES_Encode(headSeq));
				dsIv.setColumn(0, "CD_INV_STTS", "IV10WRI");
				
				getSqlManager().insertToCoreDataSet(dsIv, "BInvService.ivInsert");
				getSqlManager().insertToCoreDataSet(dsIv, "BInvService.ivAddInsert");
				
				dsIvItem.addStringColumn("INV_NO");
				dsIvItem.addStringColumn("INV_ITEM_ID");
				dsIvItem.addStringColumn("USER_ID");
				dsIvItem.addStringColumn("USER_NM");
				dsIvItem.addStringColumn("BRANCH_CD");
				dsIvItem.addStringColumn("PR_ITEM_ID");
				dsIvItem.addStringColumn("DOC_NO");
				dsIvItem.addStringColumn("TYPE");
				dsIvItem.addStringColumn("PRGRS_STEP");
				dsIvItem.addStringColumn("RMARK");
				dsIvItem.addStringColumn("CD_PR_ITEM_STTS");
				dsIvItem.addStringColumn("SLIP_PRCS_YN");
	            
	           	
	           	for(int i=0; i<dsIvItem.getRowCount(); i++)
	           	{
           			itemSeq = commandModule.getSeqNextval("MM_IV_ITEM_SEQ", CoerConstain.PROPAGATION_REQUIRED);
           			dsIvItem.setActiveRow(i);		
            		dsIvItem.setColumn(i, "INV_NO"			, headSeq);
            		dsIvItem.setColumn(i, "INV_ITEM_ID"	, itemSeq);
            		dsIvItem.setColumn(i, "ITM_NO"			, (i + 1) * 10);
            		dsIvItem.setColumn(i, "USER_ID"		, gdsUserInfo.getColumnAsString(0, "USER_ID"));
            		dsIvItem.setColumn(i, "USER_NM"		, gdsUserInfo.getColumnAsString(0, "USER_NM"));
            		dsIvItem.setColumn(i, "BRANCH_CD"		, gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
            		dsIvItem.setColumn(i, "CD_PR_ITEM_STTS", "PR13INV");
            		dsIvItem.setColumn(i, "SLIP_PRCS_YN"	, "Y");
            		
                	getSqlManager().insertToCoreDataSet(dsIvItem, "BInvService.ivItemInsert");
                	
                	//납품품목 전표처리여부 업데이트
                	getSqlManager().insertToCoreDataSet(dsIvItem, "BInvService.slipPrcsYnUpd");
            	
                	//구매요청품목 상태 변경 (송장)	                	
                	getSqlManager().insertToCoreDataSet(dsIvItem, "BInvService.prItemProcess");
                	
                	dsIvItem.setColumn(i, "DOC_NO"			, headSeq);						//각자 모듈의 문서번호
                	dsIvItem.setColumn(i, "TYPE"			, "정산");                      //모듈명
                	dsIvItem.setColumn(i, "PRGRS_STEP"		, "송장작성");                  //진행과정
	 				dsIvItem.setColumn(i, "RMARK"			, gdsUserInfo.getColumnAsString(0, "USER_NM")); //비고사항(송장담당자)			 

	 				getSqlManager().insertToCoreDataSet(dsIvItem, "BInvService.insertPurHist");
                	
	           	}
	           	
	           	//송장이력
	           	//ivHstyInsert(ds, headSeq, "IV10WRI", "");
	           	
	           	
	           	//FILE_JOB_2 : 첨부파일 정보 저장		
	           	inParams.put("bizGubun", "IV");
	    		outParam = fileModule.saveFileInfo(inParams);
				
			}
		}
		else
		{

			CoreDataSet dsTkey = getSqlManager().queryForCoreDataSet(dsIv, "BInvService.altAlreadyAddedItmRead");
			
			if(!dsIv.getColumnAsString(0, "TKEY").equals(dsTkey.getColumnAsString(0, "TKEY")))
			{					
				if(dsTkey.getColumnAsString(0, "TKEY")==null || dsTkey.getColumnAsString(0, "TKEY").length() < 1)
				{						
					outParam.setErrorCode(2);
					outParam.setErrorMessage("이미 삭제된 문서입니다.");
				}
				else
				{
					outParam.setErrorCode(3);
					outParam.setErrorMessage("이미 사용 중인 문서입니다. 최신정보로 재조회 하겠습니다");					
				}
			}
			else
			{					
				dsIv.setColumn(0, "CD_INV_STTS"	, "IV10WRI");
				dsIv.setColumn(0, "USER_ID"		, gdsUserInfo.getColumnAsString(0, "USER_ID"));
				dsIv.setColumn(0, "COREXP_KIDS"	, AESManager.AES_Encode(dsIv.getColumnAsString(0, "INV_NO")));
				
				
				dsIvItem.addStringColumn("SLIP_PRCS_YN");
				
				for(int i = 0; i<dsIvItem.getRowCount(); i++)
				{
				    CoreDataSet dsDeleted = CoreDataSetFactory.getDataSet(inParams);
					dsDeleted.addStringColumn("USER_ID");
					dsDeleted.addStringColumn("INV_ITEM_ID");

					dsDeleted.appendRow();
					dsDeleted.setColumn(0, "USER_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
					dsDeleted.setColumn(0, "INV_ITEM_ID", dsIvItem.getDeleteColumnAsString(i, "INV_ITEM_ID"));

					dsDeleted.setActiveRow(0);
					getSqlManager().deleteToCoreDataSet(dsDeleted, "BInvService.ivItemSlipPrcsN");
					getSqlManager().deleteToCoreDataSet(dsDeleted, "BInvService.ivItemDelete");
			  
		        }
				
				for(int i=0; i<dsIvItem.getRowCount(); i++)
				{
					if(dsIvItem.getRowType(i) == DataSet.ROW_TYPE_INSERTED)
					{
						itemSeq = commandModule.getSeqNextval("MM_IV_ITEM_SEQ", CoerConstain.PROPAGATION_REQUIRED);
						
	            		dsIvItem.setColumn(i, "INV_NO"			, dsIv.getColumnAsString(0, "INV_NO"));
	            		dsIvItem.setColumn(i, "INV_ITEM_ID"	, itemSeq);
	            		dsIvItem.setColumn(i, "ITM_NO"			, (i + 1) * 10);
	            		dsIvItem.setColumn(i, "USER_ID"		, gdsUserInfo.getColumnAsString(0, "USER_ID"));
	            		dsIvItem.setColumn(i, "USER_NM"		, gdsUserInfo.getColumnAsString(0, "USER_NM"));
	            		dsIvItem.setColumn(i, "BRANCH_CD"		, gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
	            		dsIvItem.setColumn(i, "SLIP_PRCS_YN"	, "Y");
	            		
	            		//납품품목 전표처리여부 업데이트
	            		getSqlManager().insertToCoreDataSet(dsIvItem, "BInvService.ivItemInsert");
	            		getSqlManager().updateToCoreDataSet(dsIvItem, "BInvService.slipPrcsYnUpd");
	            		
					}
					else if(dsIvItem.getRowType(i) == DataSet.ROW_TYPE_UPDATED)
					{
						dsIvItem.setActiveRow(i);
						getSqlManager().updateToCoreDataSet(dsIvItem, "BInvService.ivItemUpdate");
					}
				}
				
				getSqlManager().updateToCoreDataSet(dsIv, "BInvService.ivUpdate");
				
				//FILE_JOB_2 : 첨부파일 정보 저장		
				//파일 저장모듈 호출(화면에서 잔달받은 PlatformData,파일 맵핑 정보)
				inParams.put("bizGubun", "IV");
				outParam = fileModule.saveFileInfo(inParams);
				
			}
		}
		return outParam;
	}
	
	/**
	 * @메소드명 : invSave
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 일합,월합 송장작성 저장
	 */
	public CoreParamSet invDailySave(CoreParamSet inParams) {	
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);

		CoreDataSet dsIv = inParams.getCoreDataSet("dsIv");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");
		
		dsIv.addStringColumn("USER_ID");
		dsIv.addStringColumn("USER_NM");
		dsIv.addStringColumn("BRANCH_CD");
		
		dsIv.setColumn(0, "USER_ID"  , gdsUserInfo.getColumnAsString(0, "USER_ID"));  
		dsIv.setColumn(0, "USER_NM"  , gdsUserInfo.getColumnAsString(0, "USER_NM"));  
		dsIv.setColumn(0, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
		
		CoreDataSet dsHead = getSqlManager().queryForCoreDataSet(dsIv, "BInvService.dailyMonthlyIvSrch");
		CoreDataSet dsItem = getSqlManager().queryForCoreDataSet(dsIv, "BInvService.dailyMonthlyIvItemSrch");
		
		if(dsHead.getRowCount() < 1) {
			outParam.setErrorCode(-1);
			outParam.setErrorMessage("송장을 작성할 검수서가 없습니다.");	
		}
		
		//기본 정보
		for(int i=0; i<dsHead.getRowCount(); i++) {
			dsHead.setColumn(i, "INV_NO", commandModule.getSeqNextval(gdsUserInfo.getColumnAsString(0, "BRANCH_CD"),"MM_IV_SEQ", CoerConstain.PROPAGATION_REQUIRED));
			dsHead.setColumn(i, "TEL"		, gdsUserInfo.getColumnAsString(0, "TEL"));
			dsHead.setColumn(i, "CHRGR_ID"	, gdsUserInfo.getColumnAsString(0, "USER_ID"));
			dsHead.setColumn(i, "CHRGR_NM"	, gdsUserInfo.getColumnAsString(0, "USER_NM"));
			dsHead.setColumn(i, "FAX"		, gdsUserInfo.getColumnAsString(0, "FAX"));
			dsHead.setColumn(i, "EMAIL"		, gdsUserInfo.getColumnAsString(0, "EMAIL")); 
			
			dsHead.setActiveRow(i);
			getSqlManager().insertToCoreDataSet(dsHead, "BInvService.ivInsert");
			getSqlManager().insertToCoreDataSet(dsHead, "BInvService.ivAddInsert");
			
			//송장이력
			if(dsIv.getColumnAsString(0, "GUBUN").equalsIgnoreCase("DAILY"))
			{
				ivHstyInsert(outParam, dsHead.getColumnAsString(i, "INV_NO"), "IV10REQ", "[일합]일합송장작성후 발행요청 하였습니다.");	
			}
			else if(dsIv.getColumnAsString(0, "GUBUN").equalsIgnoreCase("MONTHLY"))
			{
				ivHstyInsert(outParam, dsHead.getColumnAsString(i, "INV_NO"), "IV10REQ", "[월합]월합송장작성후 발행요청 하였습니다.");
			}
			
		}
		
		
		
		dsItem.addStringColumn("INV_NO");
		dsItem.addStringColumn("INV_ITEM_ID");
		dsItem.addStringColumn("USER_ID");
		dsItem.addStringColumn("USER_NM");
		dsItem.addStringColumn("BRANCH_CD");
		dsItem.addStringColumn("PR_ITEM_ID");
		dsItem.addStringColumn("DOC_NO");
		dsItem.addStringColumn("TYPE");
		dsItem.addStringColumn("PRGRS_STEP");
		dsItem.addStringColumn("RMARK");
		dsItem.addStringColumn("CD_PR_ITEM_STTS");
		dsItem.addStringColumn("SLIP_PRCS_YN");

		for(int i=0; i<dsItem.getRowCount(); i++)
		{	
			for(int k=0; k<dsHead.getRowCount(); k++)
			{
				if(dsHead.getColumnAsString(k, "DLV_ITEM_ID_ARR").indexOf(dsItem.getColumnAsString(i, "DLV_ITEM_ID")) > -1)
				{
				//	dsItem.set(i, "INV_NO"		, invNoMappedDlvItemId.get(dsHead.getColumnAsString(k, "DLV_ITEM_ID_ARR")));
					break;
				}
			}
			
			dsItem.setColumn(i, "INV_ITEM_ID"	, commandModule.getSeqNextval("MM_IV_ITEM_SEQ", CoerConstain.PROPAGATION_REQUIRED));
			dsItem.setColumn(i, "ITM_NO"			, (i + 1) * 10);
			dsItem.setColumn(i, "USER_ID"		, gdsUserInfo.getColumnAsString(0, "USER_ID"));
			dsItem.setColumn(i, "USER_NM"		, gdsUserInfo.getColumnAsString(0, "USER_NM"));
			dsItem.setColumn(i, "BRANCH_CD"		, gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
			dsItem.setColumn(i, "CD_PR_ITEM_STTS", "PR13INV");
			dsItem.setColumn(i, "SLIP_PRCS_YN"	, "Y");
    		
			
			
			getSqlManager().insertToCoreDataSet(dsHead, "BInvService.ivItemInsert");
			
        	//납품품목 전표처리여부 업데이트
          	getSqlManager().updateToCoreDataSet(dsItem, "BInvService.slipPrcsYnUpd");
        	
        	//구매요청품목 상태 변경 (송장)	                	
          	getSqlManager().updateToCoreDataSet(dsItem, "BInvService.prItemProcess");
         	
        	dsItem.setColumn(i, "DOC_NO"		, dsItem.getColumnAsString(i, "INV_NO"));						//각자 모듈의 문서번호
        	dsItem.setColumn(i, "TYPE"		, "정산");                      //모듈명
        	dsItem.setColumn(i, "PRGRS_STEP"	, "송장작성");                  //진행과정
        	
        	if(dsIv.getColumnAsString(0, "GUBUN").equalsIgnoreCase("DAILY"))
			{
        		dsItem.setColumn(i, "RMARK"		, "[일합] / " + gdsUserInfo.getColumnAsString(0, "USER_NM")); //비고사항(송장담당자)	
			}
			else if(dsIv.getColumnAsString(0, "GUBUN").equalsIgnoreCase("MONTHLY"))
			{
				dsItem.setColumn(i, "RMARK"		, "[월합] / " + gdsUserInfo.getColumnAsString(0, "USER_NM")); //비고사항(송장담당자)
			}			 

			getSqlManager().updateToCoreDataSet(dsItem, "BPurService.insertPurHist");	
		}
		
		return outParam;
	}
 
	
	/**
	 * @메소드명 : invDelete
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 송장 삭제
	 */
	public CoreParamSet invDelete(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);

		CoreDataSet dsIv = inParams.getCoreDataSet("dsIv");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");
		
		dsIv.addStringColumn("USER_ID");
		dsIv.addStringColumn("CD_PR_ITEM_STTS");
		
		CoreDataSet dsTkey = getSqlManager().queryForCoreDataSet(dsIv, "BInvService.ivTkeyRead");
		
		if(!dsIv.getColumnAsString(0, "TKEY").equals(dsTkey.getColumnAsString(0, "TKEY")))
		{	
			if(dsTkey.getColumnAsString(0, "TKEY")==null || dsTkey.getColumnAsString(0, "TKEY").length() < 1)
			{						
				outParam.setErrorCode(1);
				outParam.setErrorMessage("이미 삭제된 문서입니다.");	
			}
		}
		else
		{
			dsIv.setColumn(0, "USER_ID"			, gdsUserInfo.getColumnAsString(0, "USER_ID"));
			dsIv.setColumn(0, "CD_PR_ITEM_STTS"	, "PR13DLV");
	    	
        	//구매요청품목 상태 변경 (송장)	                	
        	getSqlManager().insertToCoreDataSet(dsIv, "BInvService.prItemProcess");
			
			
			getSqlManager().deleteToCoreDataSet(dsIv, "BInvService.ivHstyDelete");
			getSqlManager().deleteToCoreDataSet(dsIv, "BInvService.ivAddDelete");
			getSqlManager().deleteToCoreDataSet(dsIv, "BInvService.ivItemAllSlipPrcsN");
			getSqlManager().deleteToCoreDataSet(dsIv, "BInvService.ivItemAllDelete");
			getSqlManager().deleteToCoreDataSet(dsIv, "BInvService.ivDelete");
			
			//FILE_JOB_3 : 문서 삭제 시 첨부파일 삭제
			//DataSet dsfile = new DataSet();
			//dsfile.addConstantColumn("BRANCH_CD"	, gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
			//dsfile.addConstantColumn("REF_TBL_NM"	, "'MM_IV', 'MM_IV_ITEM'");
			//dsfile.addConstantColumn("REF_KEY_1"	, ds.getColumnAsString(0, "INV_NO"));
			//FileBean.deleterFiles(dsfile);
	
		}
		
		return outParam;
	}
	
	/**
	 * @메소드명 : invSave
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 일합,월합 송장작성 저장
	 */
	public void ivHstyInsert(CoreParamSet inParams, String invNo, String type, String cntnt) {
		
		CoreDataSet targetDs = inParams.getCoreDataSet("dsHead");
		
		String[] invNoArr = new String[1];
		
		if(invNo.contains(",")){
			invNoArr = invNo.split(",");
		}else{
			invNoArr[0] = invNo;
		}
		
		
		if("IV10WRI".equalsIgnoreCase(type))	//생성
		{
			type = "생성";
			if(cntnt==null || "".equals(cntnt)) cntnt = "생성 하였습니다.";
		}
		else if("IV10CXL".equalsIgnoreCase(type))	//송장취소
		{
			type = "송장취소";
			if(cntnt==null || "".equals(cntnt)) cntnt = "송장취소 하였습니다.";
		}
		else if("IV10REQ".equalsIgnoreCase(type))	//발행요청
		{
			type = "발행요청";
			if(cntnt==null || "".equals(cntnt)) cntnt = "발행요청 하였습니다.";
		}
		else if("IV10TAX".equalsIgnoreCase(type))	//발행완료
		{
			type = "발행완료";
			if(cntnt==null || "".equals(cntnt)) cntnt = "발행완료 하였습니다.";
		}
		else if("IV10CLO".equalsIgnoreCase(type))	//송장완료
		{
			type = "송장완료";
			if(cntnt==null || "".equals(cntnt)) cntnt = "송장완료 하였습니다.";
		}			
		
		CoreDataSet dsIvHsty = CoreDataSetFactory.getDataSet(inParams);					
		//송장 이력 생성
		dsIvHsty.addStringColumn("SN");			
		dsIvHsty.addStringColumn("INV_NO");
		dsIvHsty.addStringColumn("BRANCH_CD");
		dsIvHsty.addStringColumn("CHRGR_NM");
		dsIvHsty.addStringColumn("CHRGR_ID");
		dsIvHsty.addStringColumn("CNTNT");
		dsIvHsty.addStringColumn("TYPE");
		
		for(int i=0; i<invNoArr.length; i++)
		{
			int rowIdx = dsIvHsty.appendRow();			
			dsIvHsty.setColumn(rowIdx, "SN"		 	, commandModule.getSeqNextval("MM_IV_HSTY_SEQ", CoerConstain.PROPAGATION_REQUIRED));
			dsIvHsty.setColumn(rowIdx, "INV_NO"	 	, commandModule.arrayJoin(invNoArr[i]));
			dsIvHsty.setColumn(rowIdx, "BRANCH_CD" 	, targetDs.getColumnAsString(0, "BRANCH_CD"));
			dsIvHsty.setColumn(rowIdx, "CHRGR_NM"	, targetDs.getColumnAsString(0, "USER_NM"));
			dsIvHsty.setColumn(rowIdx, "CHRGR_ID"	, targetDs.getColumnAsString(0, "USER_ID"));
			dsIvHsty.setColumn(rowIdx, "CNTNT"	 	, cntnt);
			dsIvHsty.setColumn(rowIdx, "TYPE"		, type);
				
			dsIvHsty.setActiveRow(i);
			getSqlManager().insertToCoreDataSet(dsIvHsty, "BInvService.ivHstyInsert");
		}		
		
	}
	
	/**
	 * @메소드명 : invRead
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 정산관리 > 송장작성 > 송장작성 상세
	 */
	public CoreParamSet invRead(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);

		CoreDataSet dsIv = inParams.getCoreDataSet("dsIv");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");
		 
		if(AESManager.checkEncrypt(dsIv.getColumnAsString(0, "INV_NO"), dsIv.getColumnAsString(0, "COREXP_KIDS")))
		{
			dsIv.setColumn(0, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
			
			outParam.setCoreDataSet("dsIv", getSqlManager().queryForCoreDataSet(dsIv, "BInvService.invRead"));
			outParam.setCoreDataSet("dsIvItem", getSqlManager().queryForCoreDataSet(dsIv, "BInvService.invItmList"));
			outParam.setCoreDataSet("dsIvHsty", getSqlManager().queryForCoreDataSet(dsIv, "BInvService.invHstyList"));
			 
			//FILE_JOB_1 : 첨부파일 dataset 추가(return PlatformData,파일 조회정보)
			/*
			 * DataSet dsfile =new DataSet("FileInfo"); dsfile.addColumn(new
			 * ColumnHeader("REF_TBL_NM", DataTypes.STRING)); dsfile.addColumn(new
			 * ColumnHeader("BRANCH_CD", DataTypes.STRING)); dsfile.addColumn(new
			 * ColumnHeader("REF_KEY_1", DataTypes.STRING)); int row = dsfile.newRow();
			 * dsfile.set(row,"REF_TBL_NM", "'MM_IV', 'MM_IV_ITEM'");
			 * dsfile.set(row,"BRANCH_CD", gds_userInfo.getColumnAsString(0, "BRANCH_CD"));
			 * dsfile.set(row,"REF_KEY_1", ds.getColumnAsString(0, "INV_NO")); rtnData =
			 * FileBean.readFileInfo(rtnData ,dsfile);
			 */
		}
		else
		{
			outParam.setErrorCode(-100);
			outParam.setErrorMessage("위변조 방지에 걸렸습니다.");	
		}	
		 
		
		return outParam;
	}
	
	/**
	 * @메소드명 : ivIngSrch
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 정산관리 > 송장작성 > 송장작성 상세
	 */
	public CoreParamSet ivIngSrch(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);

		CoreDataSet dsIv = inParams.getCoreDataSet("dsIv");
		
		outParam.setCoreDataSet("dsIv", getSqlManager().queryForCoreDataSet(dsIv, "BInvService.ivIngSrch"));
		
		return outParam;
	}
	
	/**
	 * @메소드명 : invTaxReq
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 계산서발행요청
	 */
	public CoreParamSet invTaxReq(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);

		CoreDataSet dsIv = inParams.getCoreDataSet("dsIv");
		CoreDataSet dsIvItem = inParams.getCoreDataSet("dsIvItem");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");
		
		
		outParam.setCoreDataSet("dsIv", getSqlManager().queryForCoreDataSet(dsIv, "BInvService.ivIngSrch"));
		
		return outParam;
	}
}