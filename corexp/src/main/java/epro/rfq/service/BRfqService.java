/**
 * Copyright (c) 2019 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 *
 * @서비스명		: epro.rfq.service BRfqService.java                       
 * @생성자		:
 * @생성일시		:
 * @구분			:
 * @최종수정자		:
 * @최종수정일시	:
 */
package epro.rfq.service;

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
import epro.com.module.MailSmsModule;
import epro.core.module.AESManager;

@Service
public class BRfqService extends CoreService {

	@Autowired
	CommandModule commandModule;
	@Autowired
	FileModule fileModule;
	@Autowired
	MailSmsModule MailSmsModule;

	private static final Log LOG = LogFactory.getLog(BRfqService.class);

	/**
	 * @메소드명 : searchRfqPrg
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 견적진행현황 List 조회
	 */
	public CoreParamSet searchRfqPrg(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");

		outParam.setCoreDataSet("dsList", getSqlManager().queryForCoreDataSet(dsCondition, "BRfqService.searchRfqPrg"));
		return outParam;
	}
	

	/**
	 * @메소드명 : readRfqHeaderCount
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 견적진행현황 List 조회
	 */
	public CoreParamSet readRfqHeaderCount(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");

		outParam.setCoreDataSet("dsCount", getSqlManager().queryForCoreDataSet(dsCondition, "BRfqService.readRfqHeaderCount"));
		return outParam;
	}
	
	/**
	 * @메소드명 : readRfqPtnrQuote
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 견적요청업체정보 조회
	 */
	public CoreParamSet readRfqPtnrQuote(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsRfqPtnr = inParams.getCoreDataSet("dsRfqPtnr");

		outParam.setCoreDataSet("dsRfqPtnr", getSqlManager().queryForCoreDataSet(dsRfqPtnr, "BRfqService.readRfqPtnrQuote"));
		return outParam;
	}

	/**
	 * @메소드명 : rfqReReq
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 견적재요청
	 */
	public CoreParamSet rfqReReq(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsChgRfq = inParams.getCoreDataSet("dsChgRfq");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		//현재견적취소
		dsChgRfq.setColumn(0, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
		getSqlManager().queryForCoreDataSet(dsChgRfq, "BRfqService.updateRfqCxl");
		
		//견적재요청 유저 정보 세팅
		dsChgRfq.setColumn(0, "WRTR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
		dsChgRfq.setColumn(0, "WRTR_NM", gdsUserInfo.getColumnAsString(0, "USER_NM"));

		//견적재요청
		getSqlManager().queryForCoreDataSet(dsChgRfq, "BRfqService.insertRfqReReq");
		getSqlManager().queryForCoreDataSet(dsChgRfq, "BRfqService.insertRfqReReqAdd");
		getSqlManager().queryForCoreDataSet(dsChgRfq, "BRfqService.insertRfqReReqItm");
		getSqlManager().queryForCoreDataSet(dsChgRfq, "BRfqService.insertRfqReReqItmAdd");
		getSqlManager().queryForCoreDataSet(dsChgRfq, "BRfqService.insertRfqReReqPtnr");
		getSqlManager().queryForCoreDataSet(dsChgRfq, "BRfqService.insertRfqReReqFile");
				
		//갱신된 KEY 값을 전달한다.
		dsChgRfq.setColumn(0, "RFQ_ODR", Integer.toString(dsChgRfq.getColumnAsInteger(0, "RFQ_ODR")+1));
		
		outParam.setCoreDataSet("dsChgRfq", dsChgRfq);
		return outParam;
	}
	
	/**
	 * @메소드명 : saveRfq
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 견적관리 > 견적요청서 작성 견적요청서를 저장한다
	 */
	public CoreParamSet saveRfq(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		
		CoreDataSet dsRfq = inParams.getCoreDataSet("in_rfq");
		CoreDataSet dsRfqItem = inParams.getCoreDataSet("in_rfqItem");
		CoreDataSet dsRfqPtnr = inParams.getCoreDataSet("in_rfqPtnr");
		CoreDataSet dsRfqReqFile = inParams.getCoreDataSet("in_rfqReqFile");
		//CoreDataSet dsRefFile = inParams.getCoreDataSet("in_refFile");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gds_userInfo");
		
		
		String seq = "";
		boolean prTkeyFlag = true;
		boolean rfqTkeyFlag = true;
		
		
		
		//구매요청 TKEY체크
		for( int i = 0; i < dsRfqItem.getRowCount(); i++ ){
			String rowType = dsRfqItem.getRowStatus(i);
			if( rowType.equals(CoerConstain.INSERT)  || rowType.equals(CoerConstain.UPDATE) ){
				if(!"".equals(dsRfqItem.getColumnAsString(i, "PR_ITEM_ID")) && dsRfqItem.getColumnAsString(i, "PR_ITEM_ID") != null){
					dsRfqItem.setColumn(i, "BRANCH_CD",gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
					
					CoreDataSet dsTkey = getSqlManager().queryForCoreDataSet(dsRfqItem, "BRfqService.chkPrItmTkey");
					
					if(dsTkey.getRowCount() < 1)
					{
						prTkeyFlag = false;
						break;
					}
				}
			}
		}
		
		
		//견적 TKEY체크
		for( int i = 0; i < dsRfq.getRowCount(); i++ ){
			String rowType = dsRfq.getRowStatus(i);
			if( rowType.equals(CoerConstain.UPDATE)  && !"".equals(dsRfq.getColumnAsString(i, "TKEY"))){
				if(!"".equals(dsRfqItem.getColumnAsString(i, "PR_ITEM_ID")) && dsRfqItem.getColumnAsString(i, "PR_ITEM_ID") != null){
					
					CoreDataSet dsTkey = getSqlManager().queryForCoreDataSet(dsRfqItem, "BRfqService.chkRfqTkey");
					
					if(dsTkey.getRowCount() < 1)
					{
						rfqTkeyFlag = false;
						break;
					}
				}
			}
		}
		
		//TKEY 체크 후 이상없으면 진행
		if(prTkeyFlag && rfqTkeyFlag){
			//INSERT
			if(null == dsRfq.getColumnAsString(0,"RFQ_REQ_NO")||"".equals(dsRfq.getColumnAsString(0,"RFQ_REQ_NO"))){
				//INSERT RFQ, RFQ_ADD
				for( int i = 0; i < dsRfq.getRowCount(); i++ ){
					
					
						seq = commandModule.getSeqNextval(gdsUserInfo.getColumnAsString(0, "BRANCH_CD"), "MM_RFQ_SEQ", CoerConstain.PROPAGATION_REQUIRED);
						
						dsRfq.setColumn(0, "RFQ_REQ_NO", seq);
						
						dsRfq.setColumn(0, "CRTR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
						dsRfq.setColumn(0, "WRTR_NM", gdsUserInfo.getColumnAsString(0, "USER_NM"));
						dsRfq.setColumn(0, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
						dsRfq.setColumn(0, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
						
						
						dsRfq.setUpdate(true);
						dsRfq.addStringColumn("COREXP_KIDS");
						dsRfq.setColumn(0, "COREXP_KIDS"	, AESManager.AES_Encode(""+dsRfq.getColumnAsString(0, "RFQ_REQ_NO")));

						//견적차수
						if(null == dsRfq.getColumnAsString(0,"RFQ_ODR") || "".equals(dsRfq.getColumnAsString(0, "RFQ_ODR"))){
							dsRfq.setColumn(0, "RFQ_ODR", "1");
						}

						//견적상태
						if(null == dsRfq.getColumnAsString(0,"CD_RFQ_STTS") || "".equals(dsRfq.getColumnAsString(0, "CD_RFQ_STTS"))){
							dsRfq.setColumn(0, "CD_RFQ_STTS", "ET10WRI");
						}

						//견적제출방법
						if(null == dsRfq.getColumnAsString(0,"CD_RFQ_SBMT_MTHD") || "".equals(dsRfq.getColumnAsString(0, "CD_RFQ_SBMT_MTHD"))){
							dsRfq.setColumn(0, "CD_RFQ_SBMT_MTHD", "ET31ON");
						}

						//담당자
						if(null == dsRfq.getColumnAsString(0,"CHRGR_ID") || "".equals(dsRfq.getColumnAsString(0, "CHRGR_ID"))){
							dsRfq.setColumn(0, "CHRGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
							dsRfq.setColumn(0, "CHRGR_NM", gdsUserInfo.getColumnAsString(0, "USER_NM"));
						}
						
						getSqlManager().insertToCoreDataSet(dsRfq, "BRfqService.rfqInsert");
						getSqlManager().insertToCoreDataSet(dsRfq, "BRfqService.rfqInsertAdd");
				}

				//INSERT RFQ_ITEM, RFQ_ITEM_ADD
				String itemSeq = "";
				for( int i = 0; i < dsRfqItem.getRowCount(); i++ ){
					String rowType = dsRfqItem.getRowStatus(i);
					if( rowType.equals(CoerConstain.INSERT)  ){
						
						itemSeq = commandModule.getSeqNextval("MM_RFQ_ITEM_SEQ", CoerConstain.PROPAGATION_REQUIRED);
						
						
						dsRfqItem.setColumn(i, "RFQ_REQ_NO", dsRfq.getColumnAsString(0,"RFQ_REQ_NO"));
						dsRfqItem.setColumn(i, "RFQ_ODR", dsRfq.getColumnAsString(0,"RFQ_ODR"));
						dsRfqItem.setColumn(i, "RFQ_REQ_ITEM_ID", itemSeq);
						dsRfqItem.setColumn(i, "CRTR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
						dsRfqItem.setColumn(i, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
						dsRfqItem.setColumn(i, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
						
						dsRfqItem.setActiveRow(i);
						getSqlManager().insertToCoreDataSet(dsRfqItem, "BRfqService.rfqInsertItm");
						getSqlManager().insertToCoreDataSet(dsRfqItem, "BRfqService.rfqInsertItmAdd");

						//견적단가계약 작성시 계약참조시 구매요청아이템 번호가 없을 수 있으므로 없으면 TKEY를 업데이트 할 필요가 없다. 
						if(!"".equals(dsRfqItem.getColumnAsString(i, "PR_ITEM_ID"))){
							//구매요청 품목의 TKEY를 업데이트한다.
							dsRfqItem.setActiveRow(i);
							getSqlManager().updateToCoreDataSet(dsRfqItem, "BRfqService.rfqUpdPrItmTkey");
							
						}
						
						
						if(!"".equals(dsRfqItem.getColumnAsString(i, "PR_ITEM_ID")) && null != dsRfqItem.getColumnAsString(i, "PR_ITEM_ID")){
							
							
							CoreDataSet dspurHist = outParam.getCoreDataSetInstance();
							dspurHist.addStringColumn("PR_ITEM_ID");
							dspurHist.addStringColumn("DOC_NO");
							dspurHist.addStringColumn("TYPE");
							dspurHist.addStringColumn("PRGRS_STEP");
							dspurHist.addStringColumn("RMARK");

							int row = dspurHist.appendRow();
							dspurHist.setColumn(row, "PR_ITEM_ID"	, dsRfqItem.getColumnAsString(i, "PR_ITEM_ID"));
							dspurHist.setColumn(row, "DOC_NO"		, dsRfq.getColumnAsString(0, "RFQ_REQ_NO")+"-"+dsRfq.getColumnAsString(0, "RFQ_ODR"));	//각자 모듈의 문서번호
							dspurHist.setColumn(row, "TYPE"			, "견적");                      //모듈명
			 				if("ET10REQ".equals(dsRfq.getColumnAsString(0, "CD_RFQ_STTS"))){
			 					dspurHist.setColumn(row, "PRGRS_STEP"	, "견적요청");                  //진행과정
			 				}else{
			 					dspurHist.setColumn(row, "PRGRS_STEP"	, "견적작성");                  //진행과정	
			 				}
			 				
			 				dspurHist.setColumn(row, "RMARK"			, dsRfq.getColumnAsString(0, "CHRGR_NM")); //비고사항(발주담당자)			 
							
			 				//구매요청히스토리 업데이트 쿼리 실행하야함 
			 				//미구현
			 				//공통으로 처리 필요
			 				//getSqlManager().insertToCoreDataSet(dsRfqItem, "BRfqService.rfqInsertItm");
			 				
						}
						
						
					}
				}
				 

				//INSERT RFQ_PTNR
				String ptnrSeq = "";
				for( int i = 0; i < dsRfqPtnr.getRowCount(); i++ ){
					String rowType = dsRfqPtnr.getRowStatus(i);
					if( rowType.equals(CoerConstain.INSERT)  ){
						
						ptnrSeq = commandModule.getSeqNextval("MM_RFQ_PTNR_SEQ", CoerConstain.PROPAGATION_REQUIRED);
						
						dsRfqPtnr.setColumn(i, "RFQ_PTNR_ID", ptnrSeq);
						dsRfqPtnr.setColumn(i, "RFQ_REQ_NO", dsRfq.getColumnAsString(0,"RFQ_REQ_NO"));
						dsRfqPtnr.setColumn(i, "RFQ_ODR", dsRfq.getColumnAsString(0,"RFQ_ODR"));
						dsRfqPtnr.setColumn(i, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
						dsRfqPtnr.setColumn(i, "CD_RFQ_CRNC", dsRfq.getColumnAsString(0,"CD_RFQ_CRNC"));
						dsRfqPtnr.setColumn(i, "CRTR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
						dsRfqPtnr.setColumn(i, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
						//견적요청시 업체상태변경
						if("ET10REQ".equals(dsRfq.getColumnAsString(0, "CD_RFQ_STTS")) && "Y".equals(dsRfq.getColumnAsString(0, "PTNR_QUOTE_CRT_YN"))){
							dsRfqPtnr.setColumn(i, "CD_RFQ_SUBM_STTS", "ET11REQ");
						}
						dsRfqPtnr.setActiveRow(i);
						getSqlManager().insertToCoreDataSet(dsRfqPtnr, "BRfqService.rfqInsertPtnr");
						
					}
				}
				
				//INSERT RFQ_PTNR_QUOTE
				//견적요청시 견적목적이 최종견적일경우
				if("ET10REQ".equals(dsRfq.getColumnAsString(0, "CD_RFQ_STTS")) && "Y".equals(dsRfq.getColumnAsString(0, "PTNR_QUOTE_CRT_YN")) 
						&& "ET27LST".equals(dsRfq.getColumnAsString(0, "CD_RFQ_AIM"))){
					dsRfq.setColumn(0, "CRTR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
					dsRfq.setColumn(0, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
					
					getSqlManager().insertToCoreDataSet(dsRfq, "BRfqService.rfqInsertPtnrQuote");
					
				}
				
				
				//INSERT RFQ_REQ_FILE
				//첨부파일 처리 아직 미구현
				//미구현
//				String fileSeq = "";
//				for( int i = 0; i < ds_rfqReqFile.getRowCount(); i++ ){
//					int rowType = ds_rfqReqFile.getRowType(i);
//					if( rowType == DataSet.ROW_TYPE_INSERTED ){
//						fileSeq = commandUtil.getSeqNextval("MM_RFQ_REQ_FILE_SEQ");
//						ds_rfqReqFile.setColumn(i, "RFQ_REQ_FILE_ID", fileSeq);
//						ds_rfqReqFile.setColumn(i, "RFQ_REQ_NO", dsRfq.getColumnAsString(0,"RFQ_REQ_NO"));
//						ds_rfqReqFile.setColumn(i, "RFQ_ODR", dsRfq.getColumnAsString(0,"RFQ_ODR"));
//						ds_rfqReqFile.setColumn(i, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
//						BRfxDao.rfqInsertReqFile(ds_rfqReqFile, i);
//					}
//				}
			}else{
					
				dsRfq.setUpdate(true);
				dsRfq.addStringColumn("COREXP_KIDS");
				dsRfq.setColumn(0, "COREXP_KIDS"	, AESManager.AES_Encode(""+dsRfq.getColumnAsString(0, "RFQ_REQ_NO")));
				
            	getSqlManager().updateToCoreDataSet(dsRfqItem, "BRfqService.rfqUpd");
            	getSqlManager().updateToCoreDataSet(dsRfqItem, "BRfqService.rfqUpdAdd");
            
				

				//DELETE RFQ_ITEM, RFQ_ITEM_ADD
				//삭제의 경우 getRemovedRowCount() 를 사용하여 삭제된 로우만 찾아 처리한다.
				for( int i = 0; i < dsRfqItem.getDeleteRowCount(); i++ ){
					//구매요청 품목의 상태를 업데이트한다.
					
					dsRfqItem.setActiveRow(i);
					getSqlManager().updateToCoreDataSet(dsRfqItem, "BRfqService.rfqDelPurItemSttsUpd");
					getSqlManager().deleteToCoreDataSet(dsRfqItem, "BRfqService.rfqDelItem");
					getSqlManager().deleteToCoreDataSet(dsRfqItem, "BRfqService.rfqDelItemAdd");
					
		        }

				//UPDATE RFQ_ITEM, RFQ_ITEM_ADD or INSERT RFQ_ITEM, RFQ_ITEM_ADD
				String itemSeq = "";
				for( int i = 0; i < dsRfqItem.getRowCount(); i++ ){
					String rowType = dsRfq.getRowStatus(i);
		            if( rowType.equals(CoerConstain.INSERT) ){
		            	
		            	itemSeq = commandModule.getSeqNextval("MM_RFQ_ITEM_SEQ", CoerConstain.PROPAGATION_REQUIRED);
		            	
		            	dsRfq.setColumn(i, "RFQ_REQ_NO", dsRfq.getColumnAsString(0,"RFQ_REQ_NO"));
		            	dsRfq.setColumn(i, "RFQ_REQ_ITEM_ID", itemSeq);
		            	dsRfq.setColumn(i, "CRTR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
		            	dsRfq.setColumn(i, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
		            	dsRfq.setColumn(i, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
		            	
		            	
		            	dsRfqItem.setActiveRow(i);
						getSqlManager().insertToCoreDataSet(dsRfqItem, "BRfqService.rfqInsertItm");
						getSqlManager().insertToCoreDataSet(dsRfqItem, "BRfqService.rfqInsertItmAdd");
		            	

						//구매요청 품목의 TKEY를 업데이트한다.
						getSqlManager().updateToCoreDataSet(dsRfqItem, "BRfqService.rfqUpdPrItmTkey");
						
						if(!"".equals(dsRfqItem.getColumnAsString(i, "PR_ITEM_ID")) && null != dsRfqItem.getColumnAsString(i, "PR_ITEM_ID")){
							
							CoreDataSet dspurHist = outParam.getCoreDataSetInstance();
							dspurHist.addStringColumn("PR_ITEM_ID");
							dspurHist.addStringColumn("DOC_NO");
							dspurHist.addStringColumn("TYPE");
							dspurHist.addStringColumn("PRGRS_STEP");
							dspurHist.addStringColumn("RMARK");

							int row = dspurHist.appendRow();
							dspurHist.setColumn(row, "PR_ITEM_ID"	, dsRfqItem.getColumnAsString(i, "PR_ITEM_ID"));
							dspurHist.setColumn(row, "DOC_NO"		, dsRfq.getColumnAsString(0, "RFQ_REQ_NO")+"-"+dsRfq.getColumnAsString(0, "RFQ_ODR"));	//각자 모듈의 문서번호
							dspurHist.setColumn(row, "TYPE"			, "견적");                      //모듈명
			 				if("ET10REQ".equals(dsRfq.getColumnAsString(0, "CD_RFQ_STTS"))){
			 					dspurHist.setColumn(row, "PRGRS_STEP"	, "견적요청");                  //진행과정
			 				}else{
			 					dspurHist.setColumn(row, "PRGRS_STEP"	, "견적작성");                  //진행과정	
			 				}
			 				
			 				dspurHist.setColumn(row, "RMARK"			, dsRfq.getColumnAsString(0, "CHRGR_NM")); //비고사항(발주담당자)			
			 				//구매요청히스토리 업데이트 쿼리 실행하야함 
			 				//미구현
			 				//공통으로 처리 필요
			 				//getSqlManager().insertToCoreDataSet(dsRfqItem, "BRfqService.rfqInsertItm");
							
						}
						
		            }else if( rowType.equals(CoerConstain.UPDATE) ){
		            	
		            	dsRfqItem.setActiveRow(i);
		            	getSqlManager().updateToCoreDataSet(dsRfqItem, "BRfqService.rfqUpdItm");
		            	getSqlManager().updateToCoreDataSet(dsRfqItem, "BRfqService.rfqUpdItmAdd");
		            	
		            	
		            }
				}

				//DELETE RFQ_PTNR
				for( int i = 0; i < dsRfqPtnr.getDeleteRowCount(); i++ ){
					dsRfqPtnr.setActiveRow(i);
					getSqlManager().deleteToCoreDataSet(dsRfqPtnr, "BRfqService.rfqDelPtnr");
		        }

				//UPDATE RFQ_PTNR or INSERT RFQ_PTNR
				String ptnrSeq = "";
				for( int i = 0; i < dsRfqPtnr.getRowCount(); i++ ){
					String rowType = dsRfq.getRowStatus(i);
		            if( rowType.equals(CoerConstain.INSERT) ){
						
						ptnrSeq = commandModule.getSeqNextval("MM_RFQ_PTNR_SEQ", CoerConstain.PROPAGATION_REQUIRED);
						
						dsRfqPtnr.setColumn(i, "RFQ_PTNR_ID", ptnrSeq);
						dsRfqPtnr.setColumn(i, "RFQ_REQ_NO", dsRfq.getColumnAsString(0,"RFQ_REQ_NO"));
						dsRfqPtnr.setColumn(i, "RFQ_ODR", dsRfq.getColumnAsString(0,"RFQ_ODR"));
						dsRfqPtnr.setColumn(i, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
						dsRfqPtnr.setColumn(i, "CD_RFQ_CRNC", dsRfq.getColumnAsString(0,"CD_RFQ_CRNC"));
						dsRfqPtnr.setColumn(i, "CRTR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
						dsRfqPtnr.setColumn(i, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
						//견적요청시 업체상태변경
						if("ET10REQ".equals(dsRfq.getColumnAsString(0, "CD_RFQ_STTS")) && "Y".equals(dsRfq.getColumnAsString(0, "PTNR_QUOTE_CRT_YN"))){
							dsRfqPtnr.setColumn(i, "CD_RFQ_SUBM_STTS", "ET11REQ");
						}
						dsRfqPtnr.setActiveRow(i);
						getSqlManager().insertToCoreDataSet(dsRfqPtnr, "BRfqService.rfqInsertPtnr");
						
					}else if( rowType.equals(CoerConstain.UPDATE) ){
						//견적요청시 업체상태변경
						if("ET10REQ".equals(dsRfq.getColumnAsString(0, "CD_RFQ_STTS")) && "Y".equals(dsRfq.getColumnAsString(0, "PTNR_QUOTE_CRT_YN"))){
							dsRfqPtnr.setColumn(i, "CD_RFQ_SUBM_STTS", "ET11REQ");
						}
						dsRfqPtnr.setActiveRow(i);
						getSqlManager().updateToCoreDataSet(dsRfqItem, "BRfqService.rfqUpdPtnr");
					}else{
						//견적요청시 업체상태변경
						if("ET10REQ".equals(dsRfq.getColumnAsString(0, "CD_RFQ_STTS")) && "Y".equals(dsRfq.getColumnAsString(0, "PTNR_QUOTE_CRT_YN"))){
							dsRfqItem.setColumn(i, "CD_RFQ_SUBM_STTS", "ET11REQ");
							dsRfqPtnr.setActiveRow(i);
							getSqlManager().updateToCoreDataSet(dsRfqItem, "BRfqService.rfqUpdPtnr");
							
						}
					}
				}

				//INSERT RFQ_PTNR_QUOTE
				for( int i = 0; i < dsRfq.getRowCount(); i++ ){
					//견적요청시 견적목적이 최종견적일경우
					if("ET10REQ".equals(dsRfq.getColumnAsString(0, "CD_RFQ_STTS")) && "Y".equals(dsRfq.getColumnAsString(0, "PTNR_QUOTE_CRT_YN")) 
							&& "ET27LST".equals(dsRfq.getColumnAsString(0, "CD_RFQ_AIM"))){
						dsRfq.setColumn(i, "CRTR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
						dsRfq.setColumn(i, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
						dsRfq.setActiveRow(i);
						getSqlManager().insertToCoreDataSet(dsRfq, "BRfqService.rfqInsertPtnrQuote");
						
					}
				}
				
				//DELETE RFQ_REQ_FILE
				for( int i = 0; i < dsRfqReqFile.getDeleteRowCount(); i++ ){
					dsRfqPtnr.setActiveRow(i);
					getSqlManager().deleteToCoreDataSet(dsRfqPtnr, "BRfqService.rfqDelPtnr");
		        }

				//UPDATE INSERT RFQ_REQ_FILE or UPDATE RFQ_REQ_FILE
				//첨부파일
				//미구현
//				String fileSeq = "";
//				for( int i = 0; i < dsRfqReqFile.getRowCount(); i++ ){
//					int rowType = ds_rfqReqFile.getRowType(i);
//					if( rowType == DataSet.ROW_TYPE_INSERTED ){
//						fileSeq = commandUtil.getSeqNextval("MM_RFQ_REQ_FILE_SEQ");
//						ds_rfqReqFile.setColumn(i, "RFQ_REQ_FILE_ID", fileSeq);
//						ds_rfqReqFile.setColumn(i, "RFQ_REQ_NO", dsRfq.getColumnAsString(0,"RFQ_REQ_NO"));
//						ds_rfqReqFile.setColumn(i, "RFQ_ODR", dsRfq.getColumnAsString(0,"RFQ_ODR"));
//						ds_rfqReqFile.setColumn(i, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
//						BRfxDao.rfqInsertReqFile(ds_rfqReqFile, i);
//					}else if( rowType == DataSet.ROW_TYPE_UPDATED ){
//						BRfxDao.rfqUpdReqFile(ds_rfqReqFile, i);
//					}
//				}
			}
						
			//구매요청 품목의 상태를 업데이트한다.
			dsRfq.setColumn(0, "CD_PR_ITEM_STTS", "PR13RFQ");
			getSqlManager().deleteToCoreDataSet(dsRfq, "BRfqService.rfqPurItemSttsUpd");
			
			
			
//			//구매요청 참조파일을 저장한다.
//			for(int i=0; i<ds_refFile.getRowCount(); i++){
//				ds_refFile.setColumn(i, "REF_KEY1", dsRfq.getColumnAsString(0, "RFQ_REQ_NO"));
//				ds_refFile.setColumn(i, "REF_KEY_1", dsRfq.getColumnAsString(0,"RFQ_REQ_NO"));
//				ds_refFile.setColumn(i, "REF_KEY2", dsRfq.getColumnAsString(0, "RFQ_ODR"));
//				ds_refFile.setColumn(i, "REF_KEY_2", dsRfq.getColumnAsString(0,"RFQ_ODR"));
//				ds_refFile.setColumn(i, "CRTR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
//				BRfxDao.refInsertFile(ds_refFile,i);
//				BRfxDao.updateRefCnt(ds_refFile,i);
//			}
//			if(0 < ds_refFile.getRowCount()){
//				FileDao.updateRefTable(ds_refFile,0);
//			}
			
			//메일발송
//			if("ET10REQ".equals(dsRfq.getColumnAsString(0, "CD_RFQ_STTS")) && "Y".equals(dsRfq.getColumnAsString(0, "PTNR_QUOTE_CRT_YN"))){
//				
//				PlatformData rtnMail = new PlatformData();
//				rtnMail = BRfxDao.rfqSndMail(ds_rfq);
//				DataSet ds_mail = rtnMail.getDataSet("ds_rfqMail");
//
//				PlatformData mailData = new PlatformData();
//				
//				mailData.addDataSet(ds_mail);
//				MailManager.save(mailData,"RfqReq");
//				
//				for(int m = 0 ;  m < ds_mail.getRowCount() ; m++){
//					//SMS전송 
//					if("Y".equals(ds_mail.getColumnAsString(m, "ALT_SMS_RCV"))){
//						PlatformData tmpData = new PlatformData();
//						DataSet smsDs = new DataSet("in_ds");
//						DataSet smsDsInfo = new DataSet("in_dsItem");
//						
//						smsDs.addColumn("SND_CNTNT"	, DataTypes.STRING);
//						smsDsInfo.addColumn("USER_ID"		, DataTypes.STRING);
//						smsDsInfo.addColumn("BRANCH_CD"		, DataTypes.STRING);
//						
//						smsDs.newRow();
//						smsDs.setColumn(0, "SND_CNTNT", ds_mail.getColumnAsString(m, "SMS_MSG"));
//						
//						smsDsInfo.newRow();
//						smsDsInfo.setColumn(0, "USER_ID", ds_mail.getColumnAsString(m, "USER_ID"));
//						smsDsInfo.setColumn(0, "BRANCH_CD", "SUPP");
//
//						tmpData.addDataSet(smsDs);
//						tmpData.addDataSet(smsDsInfo);
//						tmpData.addDataSet(ds_userInfo);
//						
//						SmsManager.createSmsUserId(tmpData,true);
//					}
//				}
//				
//			}
			
			//FILE_JOB_2 : 첨부파일 정보 저장
			
//			FileBean.setFileInfo(paramDataSet,"RFQ");
			//첨부파일 저장 끝

			if("ET10REQ".equals(dsRfq.getColumnAsString(0, "CD_RFQ_STTS")) && "Y".equals(dsRfq.getColumnAsString(0, "PTNR_QUOTE_CRT_YN"))){
				outParam.setErrorCode(0);
				outParam.setErrorMessage("견적요청 되었습니다.");
			}else{
				outParam.setErrorCode(0);
				outParam.setErrorMessage("저장되었습니다");
			}
		}else{
			if(!prTkeyFlag){
				outParam.setErrorCode(1);
				outParam.setErrorMessage("참조된 구매요청품목의 상태가 변경되었습니다. 확인하시길 바랍니다.");
			}else{
				outParam.setErrorCode(1);
				outParam.setErrorMessage("견적의 상태가 변경되었습니다. 확인하시길 바랍니다.");
			}
		} 

		return outParam;
	}	
	
}