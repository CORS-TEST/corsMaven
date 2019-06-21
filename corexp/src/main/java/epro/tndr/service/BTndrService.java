/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 *
 * @서비스명		: epro.sys.service BTndrService.java                       
 * @생성자		:
 * @생성일시		:
 * @구분			: 
 * @최종수정자		: 
 * @최종수정일시	: 
 */
package epro.tndr.service;


import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.DataTypes;

import core.common.constain.CoerConstain;
import core.common.util.CodeUtil;
import core.common.util.ResourceUtil;
import core.vo.model.coreset.CoreDataSet;
import core.vo.model.coreset.CoreDataSetFactory;
import core.vo.model.coreset.CoreParamSet;
import core.vo.model.coreset.CoreParamSetFactory;
import core.web.service.CoreService;
import epro.com.module.CommandModule;
import epro.com.module.MailSmsModule;
import epro.core.module.AESManager;

@Service
public class BTndrService extends CoreService {
	private static final Log LOG = LogFactory.getLog(BTndrService.class);
	@Autowired
	CommandModule commandModule;
	@Autowired
	MailSmsModule mailSmsModule;

	/**
	 * @메소드명 : tndrWrtSrch
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 입찰관리 > 입찰작성현황
	 */
	public CoreParamSet tndrWrtSrch(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		dsCondition.setColumn(0, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));

		outParam.setCoreDataSet("dsList", getSqlManager().queryForCoreDataSet(dsCondition, "BTndrService.tndrWrtSrch"));
		return outParam;
	}	
	
	/**
	 * @메소드명 : tndrWrtSrch
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 입찰관리 > 입찰작성현황
	 */
	public CoreParamSet tndrRead(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsTndr = inParams.getCoreDataSet("dsTndr");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");
		
		//if(AESManager.checkEncrypt(dsTndr.getColumnAsString(0, "TNDR_NO"),dsTndr.getColumnAsString(0, "COREXP_KIDS"))){
			
			outParam.setCoreDataSet("dsTndr", getSqlManager().queryForCoreDataSet(dsTndr, "BTndrService.tndrRead"));
			outParam.setCoreDataSet("dsTndrItem", getSqlManager().queryForCoreDataSet(dsTndr, "BTndrService.tndrReadItm"));
			outParam.setCoreDataSet("dsTndrRound", getSqlManager().queryForCoreDataSet(dsTndr, "BTndrService.tndrReadRound"));
			outParam.setCoreDataSet("dsTndrPtnr", getSqlManager().queryForCoreDataSet(dsTndr, "BTndrService.tndrReadPtnr"));
			
			
			//FILE_JOB_1 : 첨부파일 dataset 추가(return PlatformData,파일 조회정보)
			//DataSet dsfile =new DataSet("FileInfo");
			//dsfile.addColumn(new ColumnHeader("BRANCH_CD", DataTypes.STRING));
			//dsfile.addColumn(new ColumnHeader("REF_TBL_NM", DataTypes.STRING));
			//dsfile.addColumn(new ColumnHeader("REF_KEY_1", DataTypes.STRING));
			//int row = dsfile.newRow();
			//dsfile.setColumn(row,"BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
			//dsfile.setColumn(row,"REF_TBL_NM", "'TNDR','TNDR_ITEM'");
			//dsfile.setColumn(row,"REF_KEY_1", data.getColumnAsString(0, "TNDR_NO"));
			//rtnData = FileBean.readFileInfo(rtnData ,dsfile);
			
		//}else{
			//outParam.setErrorCode(-100);
			//outParam.setErrorMessage("위변조 방지에 걸렸음");	
		//}
		
		
		
		return outParam;
	}
	
	/**
	 * @메소드명 : tndSave
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @throws Exception 
	 * @desc : 입찰관리 > 입찰작성상세
	 */
	public CoreParamSet tndSave(CoreParamSet inParams) throws Exception {
		String method = "tndSave";
		
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsTndr = inParams.getCoreDataSet("dsTndr");				//입찰
		CoreDataSet dsTndrItem = inParams.getCoreDataSet("dsTndrItem");		//입찰아이템
		CoreDataSet dsTndrRound = inParams.getCoreDataSet("dsTndrRound");	//입찰라운드
		CoreDataSet dsTndrPtnr = inParams.getCoreDataSet("dsTndrPtnr");		//입찰업체
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");	//사용자정보
		
		String seq = "";
		
		//입찰번호가 존재하지 않으면 신규등록
		if(null == dsTndr.getColumnAsString(0,"TNDR_NO")||"".equals(dsTndr.getColumnAsString(0,"TNDR_NO"))){
			for( int i = 0; i < dsTndr.getRowCount(); i++ ){
				int rowType = dsTndr.getRowType(i);
	            if( rowType == DataSet.ROW_TYPE_INSERTED ){

	            	seq = commandModule.getSeqNextval(gdsUserInfo.getColumnAsString(0, "BRANCH_CD"),"MM_TNDR_SEQ", CoerConstain.PROPAGATION_REQUIRED);
	            	
	            	dsTndr.setColumn(i, "TNDR_NO", seq);
	            	dsTndr.setColumn(i,"COREXP_KIDS",AESManager.AES_Encode(seq));
	            	dsTndr.setColumn(i, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));				//구매조직ID
	            	dsTndr.setColumn(i, "CRTR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));					//작성자ID
	            	dsTndr.setColumn(i, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));		//수정자ID
	            	dsTndr.setColumn(i, "CHRGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));				//구매담당자ID
	            	dsTndr.setColumn(i, "CHRGR_NM", gdsUserInfo.getColumnAsString(0, "USER_NM"));			//구매담당자명
	            	dsTndr.setColumn(i, "WRTR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));				//작성자ID
	            	dsTndr.setColumn(i, "WRTR_NM", gdsUserInfo.getColumnAsString(0, "USER_NM"));			//작성자명
	            	
	            	//입찰차수
	            	if(null == dsTndr.getColumnAsString(i,"TNDR_ODR") || "".equals(dsTndr.getColumnAsString(i, "TNDR_ODR"))){
						dsTndr.setColumn(i, "TNDR_ODR", "1");
					}
	            	
	            	dsTndr.setActiveRow(i);
	            	getSqlManager().insertToCoreDataSet(dsTndr, "BTndrService.tndrInsert");			//입찰저장
	            	getSqlManager().insertToCoreDataSet(dsTndr, "BTndrService.tndrAddInsert");		//입찰추가정보저장
	            	getSqlManager().insertToCoreDataSet(dsTndr, "BTndrService.tndrCondInsert");		//입찰조건저장
	            }
			}
			String itemSeq = "";
			//INSERT TNDR_ITEM
			for( int i = 0; i < dsTndrItem.getRowCount(); i++ ){
	            int rowType = dsTndrItem.getRowType(i);
	            if( rowType == DataSet.ROW_TYPE_INSERTED ){
	            	itemSeq = commandModule.getSeqNextval("MM_TNDR_ITEM_SEQ", CoerConstain.PROPAGATION_REQUIRED);//입찰아이템번호생성
	            	dsTndrItem.setColumn(i, "TNDR_ITEM_ID", itemSeq);								//입찰아이템번호
	            	dsTndrItem.setColumn(i, "TNDR_NO", seq);										//입찰번호
	            	dsTndrItem.setColumn(i, "TNDR_ODR", dsTndr.getColumnAsString(0, "TNDR_ODR"));
	            	dsTndrItem.setColumn(i, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));		//구매조직ID
	            	dsTndrItem.setColumn(i, "CRTR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));		//작성자ID
	            	dsTndrItem.setColumn(i, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));	//수정자ID
	            	
	            	dsTndrItem.setActiveRow(i);
	            	getSqlManager().insertToCoreDataSet(dsTndrItem, "BTndrService.tndrItemInsert");//입찰아이템저장
	            	getSqlManager().insertToCoreDataSet(dsTndrItem, "BTndrService.tndrItemAddInsert");//입찰아이템추가정보저장
	            	
	        		CoreDataSet dsPurHist = CoreDataSetFactory.getDataSet(inParams);               
				    //송장 이력 생성
		 			dsPurHist.addStringColumn("PR_ITEM_ID");
		 			dsPurHist.addStringColumn("DOC_NO");
		 			dsPurHist.addStringColumn("TYPE");
		 			dsPurHist.addStringColumn("PRGRS_STEP");
		 			dsPurHist.addStringColumn("RMARK");
		 									
		 									
		 									
	 				if(!"".equals(dsTndrItem.getColumnAsString(i, "PR_ITEM_ID")) && null != dsTndrItem.getColumnAsString(i, "PR_ITEM_ID")){
		 				int row = dsPurHist.appendRow();
		 				dsPurHist.setColumn(row, "PR_ITEM_ID"	, dsTndrItem.getColumnAsString(i, "PR_ITEM_ID"));
		 				dsPurHist.setColumn(row, "DOC_NO"		, dsTndr.getColumnAsString(0, "TNDR_NO") + "-" + dsTndr.getColumnAsString(0, "TNDR_ODR"));	//각자 모듈의 문서번호
		 				dsPurHist.setColumn(row, "TYPE"			, "입찰");                      //모듈명
		 				if("ET20ANN".equals(dsTndr.getColumnAsString(0,"CD_TNDR_STTS"))){
		 					dsPurHist.setColumn(row, "PRGRS_STEP"	, "입찰공고");                  //진행과정
		 				}else{
		 					dsPurHist.setColumn(row, "PRGRS_STEP"	, "입찰작성");                  //진행과정	
		 				}
		 				dsPurHist.setColumn(row, "RMARK"			, dsTndr.getColumnAsString(0, "CHRGR_NM")); //비고사항(발주담당자)			 
		 				dsPurHist.setActiveRow(i);
		 				getSqlManager().insertToCoreDataSet(dsPurHist, "BComService.savePurHist");
	 				}
	            }
			}
							
			//INSERT TNDR_ROUND
			for( int i = 0; i < dsTndrRound.getRowCount(); i++ ){
				int rowType = dsTndrRound.getRowType(i);
	            if( rowType == DataSet.ROW_TYPE_INSERTED ){
	            	dsTndrRound.setColumn(i, "TNDR_NO", seq);																//입찰번호
	            	dsTndrRound.setColumn(i, "TNDR_ODR", dsTndr.getColumnAsString(0, "TNDR_ODR"));
	            	dsTndrRound.setColumn(i, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));				//구매조직ID
	            	
	            	dsTndrRound.setActiveRow(i);
	            	getSqlManager().insertToCoreDataSet(dsTndrRound, "BTndrService.tndrRoundInsert");//입찰라운드저장
	            }
			}
			
			//INSERT TNDR_PTNR
			for( int i = 0; i < dsTndrPtnr.getRowCount(); i++ ){
				int rowType = dsTndrPtnr.getRowType(i);
	            if( rowType == DataSet.ROW_TYPE_INSERTED ){
	            	String ptnrSeq = commandModule.getSeqNextval("MM_TNDR_PTNR_SEQ", CoerConstain.PROPAGATION_REQUIRED);
	            	
	            	dsTndrPtnr.setColumn(i, "TNDR_PTNR_ID", ptnrSeq);
	            	dsTndrPtnr.setColumn(i, "TNDR_NO", seq);
	            	dsTndrPtnr.setColumn(i, "TNDR_ODR", dsTndr.getColumnAsString(0, "TNDR_ODR"));
	            	dsTndrPtnr.setColumn(i, "CRTR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
	            	dsTndrPtnr.setColumn(i, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
	            	dsTndrPtnr.setColumn(i, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
	            	
	            	dsTndrPtnr.setActiveRow(i);
	            	getSqlManager().insertToCoreDataSet(dsTndrPtnr, "BTndrService.tndrPtnrInsert");//입찰 협력사 insert
	            }
			}
			

		//입찰정보 업데이트
		}else{
			for( int i = 0; i < dsTndr.getRowCount(); i++ ){
				
				//String rowType = dsTndr.getRowStatus(i);
				//System.out.println("rowType:: "+rowType);
				//System.out.println("ROW_TYPE_UPDATED:: "+CoerConstain.UPDATE);
				
	            //if( rowType.equals(CoerConstain.UPDATE) ){
				System.out.println("여기");
	            	dsTndr.setColumn(i, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));			//수정자ID
	            	
	            	dsTndr.setActiveRow(i);
	            	getSqlManager().updateToCoreDataSet(dsTndr, "BTndrService.tndrUpd");		//입찰업데이트
	            	getSqlManager().updateToCoreDataSet(dsTndr, "BTndrService.tndrAddUpd");		//입찰 추가정보 업데이트
	            	getSqlManager().updateToCoreDataSet(dsTndr, "BTndrService.tndrCondUpd");	//입찰 조건정보 업데이트
	            //}
			}
			
			for( int i = 0; i < dsTndrItem.getDeleteRowCount(); i++ ){
				dsTndrItem.setActiveRow(i);
				getSqlManager().deleteToCoreDataSet(dsTndrItem, "BTndrService.tndrItemDel");	//입찰아이템 삭제
				getSqlManager().deleteToCoreDataSet(dsTndrItem, "BTndrService.tndrItemAddDel");	//입찰아이템 추가정보 삭제
	        }
			
			for( int i = 0; i < dsTndrPtnr.getDeleteRowCount(); i++ ){
				dsTndrPtnr.setActiveRow(i);
				getSqlManager().deleteToCoreDataSet(dsTndrPtnr, "BTndrService.tndrPtnrDel");	//입찰참여업체정보 삭제
	        }

			
			String itemSeq = "";
			for( int i = 0; i < dsTndrItem.getRowCount(); i++ ){
				
				int rowType = dsTndrItem.getRowType(i);
				
				if( rowType == DataSet.ROW_TYPE_INSERTED ){
	            	itemSeq = commandModule.getSeqNextval("MM_TNDR_PTNR_SEQ", CoerConstain.PROPAGATION_REQUIRED);
	            	dsTndrItem.setColumn(i, "TNDR_ITEM_ID", itemSeq);												//입찰아이템번호
	            	dsTndrItem.setColumn(i, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));				//구매조직ID
	            	dsTndrItem.setColumn(i, "CRTR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));				//작성자ID
	            	dsTndrItem.setColumn(i, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));		//수정자ID
	            	
	            	dsTndrItem.setActiveRow(i);
	            	getSqlManager().insertToCoreDataSet(dsTndrItem, "BTndrService.tndrItemInsert");		//입찰아이템저장
	            	getSqlManager().insertToCoreDataSet(dsTndrItem, "BTndrService.tndrItemAddInsert");	//입찰아이템추가정보저장
	            	
	            }else if( rowType == DataSet.ROW_TYPE_UPDATED ){
	            	dsTndrItem.setActiveRow(i);
	            	getSqlManager().updateToCoreDataSet(dsTndrItem, "BTndrService.tndrItemUpd");
	            	getSqlManager().updateToCoreDataSet(dsTndrItem, "BTndrService.tndrItemAddUpd");
	            }
			}
			
			//INSERT TNDR_PTNR
			for( int i = 0; i < dsTndrPtnr.getRowCount(); i++ ){
				int rowType = dsTndrPtnr.getRowType(i);
	            if( rowType == DataSet.ROW_TYPE_INSERTED ){
	            	String ptnrSeq = commandModule.getSeqNextval("MM_TNDR_PTNR_SEQ", CoerConstain.PROPAGATION_REQUIRED);
	            	dsTndrPtnr.setColumn(i, "TNDR_PTNR_ID", ptnrSeq);
	            	dsTndrPtnr.setColumn(i, "CRTR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
	            	dsTndrPtnr.setColumn(i, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
	            	dsTndrPtnr.setColumn(i, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
	            	
	            	dsTndrPtnr.setActiveRow(i);
	            	getSqlManager().insertToCoreDataSet(dsTndrPtnr, "BTndrService.tndrPtnrInsert");
	            }else if( rowType == DataSet.ROW_TYPE_UPDATED ){
	            	dsTndrPtnr.setColumn(i, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
	            	
	            	dsTndrPtnr.setActiveRow(i);
	            	getSqlManager().updateToCoreDataSet(dsTndrPtnr, "BTndrService.tndrPtnrUpd");
	            }
			}
			
			getSqlManager().deleteToCoreDataSet(dsTndrRound, "BTndrService.tndrRoundDel");//입찰라운드정보 삭제
			
			//INSERT TNDR_ROUND
			for( int i = 0; i < dsTndrRound.getRowCount(); i++ ){
				dsTndrRound.setColumn(i, "TNDR_NO", dsTndr.getColumnAsString(0,"TNDR_NO"));							//입찰번호
				dsTndrRound.setColumn(i, "TNDR_ODR", dsTndr.getColumnAsString(0,"TNDR_ODR"));						//입찰번호
            	dsTndrRound.setColumn(i, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));				//구매조직ID
            	
            	dsTndrRound.setActiveRow(i);
            	getSqlManager().insertToCoreDataSet(dsTndrRound, "BTndrService.tndrRoundInsert");	//입찰라운드저장
	        }
			
		}
		
		//입찰아이템의 품목상태를 업데이트 한다.
		for( int i = 0; i < dsTndrItem.getRowCount(); i++ ){
			//log.info(method,"=================="+dsTndrItem.getColumnAsString(i, "PR_ITEM_ID"));
			if(!"".equals(dsTndrItem.getColumnAsString(i, "PR_ITEM_ID")) && "null" != dsTndrItem.getColumnAsString(i, "PR_ITEM_ID") ){			//구매요청아이템 번호가 존재하면 입찰(PR13TND)로 변경한다.
				dsTndrItem.setActiveRow(i);
				getSqlManager().updateToCoreDataSet(dsTndrItem, "BTndrService.tndrPurItemSttsUpd");
			}
		}
		
		//저장시 상태값이 입찰요청이면 
		if("ET20ANN".equals(dsTndr.getColumnAsString(0,"CD_TNDR_STTS"))){
			dsTndr.setActiveRow(0);
			getSqlManager().updateToCoreDataSet(dsTndr, "BTndrService.tndrSttsUpd");//입찰상태가 입찰공고로 넘어오면 업데이트 한다.
			
			//입찰업체 테이블의 상태를 업데이트 한다.
			for( int i = 0; i < dsTndrPtnr.getRowCount(); i++ ){
				dsTndrPtnr.setActiveRow(i);
				getSqlManager().updateToCoreDataSet(dsTndrPtnr ,"BTndrService.tndrPtnrSttsUpd");
			}
			
			
			//입찰공고 메일 발송
			//메일발송 필수요소  
			//쿼리 작성시 업체 , 사용자 테이블 까지 조인하여 보내야함.
			//아래의 내용은 필수입력 항목임.
			//EMAIL							받는사람 EMAIL
	        //USER_NM 						받는사람 이름
			//BRANCH_CD						사업장번호
			//SEND_USER_ID				보내는사람 아이디
			//MAIL_TYPE						메일템플릿명
			//MAIL_TITLE						메일타이틀
			
			//SMS
			//USER_ID 받는 사람 아이디 필수
			CoreDataSet rtnMail = getSqlManager().queryForCoreDataSet(dsTndr, "BTndrService.tndSndMail");
			inParams.setCoreDataSet("rtnMail", getSqlManager().queryForCoreDataSet(dsTndr, "BTndrService.tndSndMail"));
			
			mailSmsModule.saveMailSms("TndrReq", inParams);
			
			for(int m = 0 ;  m < rtnMail.getRowCount() ; m++){
				//SMS전송
				if("Y".equals(rtnMail.getColumnAsString(m, "ALT_SMS_RCV"))){
					CoreDataSet smsDs = outParam.getCoreDataSetInstance();
					CoreDataSet smsDsInfo = outParam.getCoreDataSetInstance();
					
					smsDs.appendRow();
					smsDs.addStringColumn("SND_CNTNT");
					smsDs.addStringColumn("USER_ID");
					smsDs.addStringColumn("BRANCH_CD");
					smsDs.setColumn(0, "SND_CNTNT", rtnMail.getColumnAsString(0, "SMS_MSG"));
					
					smsDsInfo.appendRow();
					smsDsInfo.addStringColumn("USER_ID");
					smsDsInfo.addStringColumn("BRANCH_CD");
					smsDsInfo.setColumn(0, "USER_ID", rtnMail.getColumnAsString(m, "USER_ID"));
					smsDsInfo.setColumn(0, "BRANCH_CD", rtnMail.getColumnAsString(m, "BRANCH_CD"));
					
					outParam.setCoreDataSet("smsDs", smsDs);
					outParam.setCoreDataSet("smsDsInfo", smsDsInfo);
					outParam.setCoreDataSet("gdsUserInfo", gdsUserInfo);
					
					mailSmsModule.saveSmsUserId(outParam, true);
				}
			}
		}
		
		//FILE_JOB_2 : 첨부파일 정보 저장
		//파일 저장모듈 호출(화면에서 잔달받은 PlatformData,파일 맵핑 정보)
		//FileBean.setFileInfo(paramDataSet,"TNDR");
		//첨부파일 저장 끝
		
		
		if("ET20ANN".equals(dsTndr.getColumnAsString(0,"CD_TNDR_STTS"))){
			outParam.setErrorCode(0);
			outParam.setErrorMessage("입찰공고되었습니다.");
		}else{
			outParam.setErrorCode(0);
			outParam.setErrorMessage("저장되었습니다.");
		}
		
		
		//저장되어진 KEY 값을 전달한다.
		outParam.setCoreDataSet("dsTndr", dsTndr);
		outParam.setCoreDataSet("dsTndrItem", dsTndrItem);
		outParam.setCoreDataSet("dsTndrRound", dsTndrRound);
		outParam.setCoreDataSet("dsTndrPtnr", dsTndrPtnr);
		
		return outParam;
	}
	
	/** 
	 * 입찰관리 > 입찰작성상세
	 * 입찰 삭제 및 상태 원복한다.
	 * @param CoreParamSet inParams
	 * @return CoreParamSet
	 * @exception Exception
	 */
	public CoreParamSet deleteTndDel(CoreParamSet inParams) throws Exception {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsTndr = inParams.getCoreDataSet("dsTndr");				//입찰
		CoreDataSet dsTndrItem = inParams.getCoreDataSet("dsTndrItem");		//입찰품목
		
		
		System.out.println("!@#"+dsTndrItem);
		
		
		//원복대상 아이템을 확인한다.
		CoreDataSet rtnData = getSqlManager().queryForCoreDataSet(dsTndr, "BTndrService.tndChgItemSrch");
		CoreDataSet rtnDs = rtnData;
		
		if(rtnDs.getRowCount() > 0){
			for(int i = 0 ; i < rtnDs.getRowCount(); i++){
				rtnDs.setActiveRow(i);
				//구매요청아이템의 상태를
				if(!"".equals(rtnDs.getColumnAsString(i, "PR_ITEM_ID"))){
					//견적번호가 있으면 PR13RFQ	견적
					if(!"".equals(rtnDs.getColumnAsString(i, "RFQ_REQ_ITEM_ID"))){
						rtnDs.setColumn(i, "CD_PR_ITEM_STTS", "PR13RFQ");
						getSqlManager().updateToCoreDataSet(rtnDs, "BTndrService.tndRtnPr");
					//견적번호가 없으면 PR13RCV	구매접수
					}else{
						rtnDs.setColumn(i, "CD_PR_ITEM_STTS", "PR13RCV");
						getSqlManager().updateToCoreDataSet(rtnDs, "BTndrService.tndRtnPr");
					}
				}
			}
		}
		
		dsTndr.setActiveRow(0);
		getSqlManager().deleteToCoreDataSet(dsTndr, "BTndrService.tndDel");
		
		CoreDataSet dsPurHist = CoreDataSetFactory.getDataSet(inParams);               
	    //송장 이력 생성
/*		dsPurHist.addStringColumn("PR_ITEM_ID");
		dsPurHist.addStringColumn("DOC_NO");
		dsPurHist.addStringColumn("TYPE");
		dsPurHist.addStringColumn("PRGRS_STEP");
		dsPurHist.addStringColumn("RMARK");
*/
		for(int j=0; j<dsTndrItem.getRowCount(); j++)
		{
			
			if(!"".equals(dsTndrItem.getColumnAsString(j, "PR_ITEM_ID")) && null != dsTndrItem.getColumnAsString(j, "PR_ITEM_ID")){
 				System.out.println("잘 도나 ??? ");
 				dsPurHist.appendRow();
				dsPurHist.setColumn(j, "PR_ITEM_ID"	, dsTndrItem.getColumnAsString(j, "PR_ITEM_ID"));
 				dsPurHist.setColumn(j, "DOC_NO"		, dsTndr.getColumnAsString(0, "TNDR_NO") + "-" + dsTndr.getColumnAsString(0, "TNDR_ODR"));	//각자 모듈의 문서번호
 				dsPurHist.setColumn(j, "TYPE"			, "입찰");                      //모듈명
 				dsPurHist.setColumn(j, "PRGRS_STEP"	, "입찰취소");                  //진행과정	
 				dsPurHist.setColumn(j, "RMARK"			, dsTndr.getColumnAsString(0, "CHRGR_NM")); //비고사항(발주담당자)
 				dsPurHist.setActiveRow(j);
 				getSqlManager().insertToCoreDataSet(dsPurHist, "BComService.savePurHist");
			}
		}
		
		return outParam;
	}
	
	/**
	 * 입찰관리  > 입찰진행현황
	 * 입찰진행 현황 Count를 조회한다.
	 * @param CoreParamSet inParams
	 * @return CoreParamSet
	 * @exception Exception
	 */
	public CoreParamSet tndrGoHeaderSrch(CoreParamSet inParams) throws Exception {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet ds = inParams.getCoreDataSet("dsCondition");
		
		outParam.setCoreDataSet("ds", getSqlManager().queryForCoreDataSet(ds, "BTndrService.tndrGoHeaderSrch"));
		
		return outParam;
	}
	
	/**
	 * 입찰관리  > 입찰진행현황
	 * 입찰진행 현황 LIST을 조회한다.
	 * @param CoreParamSet inParams
	 * @return CoreParamSet
	 * @exception Exception
	 */
	public CoreParamSet tndrGoSrch(CoreParamSet inParams) throws Exception {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");
		dsCondition.setColumn(0, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
    	outParam.setCoreDataSet("dsList", getSqlManager().queryForCoreDataSet(dsCondition, "BTndrService.tndrGoSrch"));
		
		return outParam;
	}
	
	/**
	 * 입찰관리  > 입찰진행현황
	 * 진행중인 입찰을 마감처리한다.
	 * @param CoreParamSet inParams
	 * @return CoreParamSet
	 * @exception Exception
	 */
	public CoreParamSet tndrEndTndrUpd(CoreParamSet inParams) throws Exception {
		//PlatformData rtnData = new PlatformData();
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		//VariableList varList = rtnData.getVariableList();
		//DataSet ds = paramDataSet.getDataSet("in_tndr");
		CoreDataSet dsTndr = inParams.getCoreDataSet("dsList");
		//DataSet gds_userInfo = paramDataSet.getDataSet("gds_userInfo");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");
		
		
    	//ds.set(0, "LAST_CHGR_ID", gds_userInfo.getString(0, "USER_ID"));
    	dsTndr.setColumn(0, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
    	
    	//BTndrDao.tndrEndTndrUpd(ds,0);
    	dsTndr.setActiveRow(0);
    	getSqlManager().updateToCoreDataSet(dsTndr, "BTndrService.tndrEndTndrUpd");
    	
    	//PlatformData pf = BTndrDao.tndrRead(ds); as-is 쿼리 4개 조회..
    	outParam.setCoreDataSet("dsTndrRead", getSqlManager().queryForCoreDataSet(dsTndr, "BTndrService.tndrRead"));
		outParam.setCoreDataSet("dsTndrReadItm", getSqlManager().queryForCoreDataSet(dsTndr, "BTndrService.tndrReadItm"));
		outParam.setCoreDataSet("dsTndrReadRound", getSqlManager().queryForCoreDataSet(dsTndr, "BTndrService.tndrReadRound"));
		outParam.setCoreDataSet("dsTndrReadPtnr", getSqlManager().queryForCoreDataSet(dsTndr, "BTndrService.tndrReadPtnr"));
		
    	
    	//DataSet in_dsItem = pf.getDataSet("ds_tndrItem");
		CoreDataSet dsItem = outParam.getCoreDataSet("dsTndrReadItm");
		
		//BTndrDao.tndrReInsert(ds,0);
		dsTndr.setActiveRow(0);
		getSqlManager().insertToCoreDataSet(dsTndr, "BTndrService.tndrReInsert");
		getSqlManager().insertToCoreDataSet(dsTndr, "BTndrService.tndrReInsertAdd");
		getSqlManager().insertToCoreDataSet(dsTndr, "BTndrService.tndrReInsertCond");
		getSqlManager().insertToCoreDataSet(dsTndr, "BTndrService.tndrReInsertPtnr");
		
		String TndrItemSeq = "";
		for( int i = 0; i < dsItem.getRowCount(); i++ ){
			TndrItemSeq = commandModule.getSeqNextval("MM_TNDR_ITEM_SEQ", CoerConstain.PROPAGATION_REQUIRED);
			dsItem.setColumn(i, "TNDR_ITEM_ID", TndrItemSeq);
		    
			dsItem.setActiveRow(i);
			//BTndrDao.tndrReInsertItem(in_dsItem,i);
			getSqlManager().insertToCoreDataSet(dsItem, "BTndrService.tndrReInsertItem");
			
			//BTndrDao.tndrReInsertItemAdd(in_dsItem,i);
			getSqlManager().insertToCoreDataSet(dsItem, "BTndrService.tndrReInsertItemAdd");
			
		}
		
		CoreDataSet dsPurHist = CoreDataSetFactory.getDataSet(inParams);               
	    //송장 이력 생성
		dsPurHist.addStringColumn("PR_ITEM_ID");
		dsPurHist.addStringColumn("DOC_NO");
		dsPurHist.addStringColumn("TYPE");
		dsPurHist.addStringColumn("PRGRS_STEP");
		dsPurHist.addStringColumn("RMARK");

		for(int j=0; j<dsItem.getRowCount(); j++)
		{
			dsPurHist.setActiveRow(j);
			if(!"".equals(dsItem.getColumnAsString(j, "PR_ITEM_ID")) && null != dsItem.getColumnAsString(j, "PR_ITEM_ID")){
 				
				dsPurHist.setColumn(j, "PR_ITEM_ID"	, dsItem.getColumnAsString(j, "PR_ITEM_ID"));
 				dsPurHist.setColumn(j, "DOC_NO"		, dsTndr.getColumnAsString(0, "TNDR_NO") + "-" + dsTndr.getColumnAsString(0, "TNDR_ODR"));	//각자 모듈의 문서번호
 				dsPurHist.setColumn(j, "TYPE"			, "입찰");                      //모듈명
 				dsPurHist.setColumn(j, "PRGRS_STEP"	, "입찰취소");                  //진행과정	
 				dsPurHist.setColumn(j, "RMARK"			, dsTndr.getColumnAsString(0, "CHRGR_NM")); //비고사항(발주담당자)			 

 				getSqlManager().insertToCoreDataSet(dsPurHist, "BComService.savePurHist");
			}
		}

		//재입찰을 작성하면 해당 입찰은 차수가 한개 증가하여 작성되므로 파라미터를 넘겨줄때 한개 증가하여 보내준다.
		dsTndr.setColumn(0, "TNDR_ODR", dsTndr.getColumnAsInteger(0, "TNDR_ODR")+1);
		//rtnData.addDataSet(ds);
		outParam.setCoreDataSet("dsTndr", dsTndr);
		
		//varList.add("ErrorCode", "0");
		//varList.add("ErrorMsg", "재입찰 작성되었습니다.");
		outParam.setErrorCode(0);
		outParam.setErrorMessage("재입찰 작성되었습니다.");
		
		return outParam;
	}
	
	/**
	 * 입찰관리  > 입찰진행현황			
	 * 입찰진행 업체접수 및 응찰현황 팝업
	 * @param CoreParamSet inParams
	 * @return CoreParamSet
	 * @exception Exception
	 */
	public CoreParamSet tndrGoPtnrSrch(CoreParamSet inParams) throws Exception {
		
		//PlatformData rtnData = new PlatformData();
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet ds = inParams.getCoreDataSet("dsTndrPtnr");//데이터셋명 확인 필요
		
		outParam.setCoreDataSet("dsTndrPtnr", getSqlManager().queryForCoreDataSet(ds, "BTndrService.tndrGoPtnrSrch"));
		
		return outParam;
	}
	
	/**
	 * 입찰관리  > 입찰결과조회
	 * 입찰결과조회 현황을 조회한다.
	 * @param CoreParamSet inParams
	 * @return CoreParamSet
	 * @exception Exception
	 */
	public CoreParamSet tndrEndSrch(CoreParamSet inParams) throws Exception {
		//PlatformData rtnData = new PlatformData();
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet ds = inParams.getCoreDataSet("dsCondition");
		
		outParam.setCoreDataSet("dsList", getSqlManager().queryForCoreDataSet(ds, "BTndrService.tndrEndSrch"));
			
		return outParam;
	}
	
	/**
	 * 입찰관리 > 입찰진행현황
	 * 업체별 응찰결과 및 자재별 응찰결과 
	 * @param CoreParamSet inParams
	 * @return CoreParamSet
	 * @exception Exception
	 */
	public CoreParamSet tndrEndPtnrSrch(CoreParamSet inParams) throws Exception {
		
		//PlatformData rtnData = new PlatformData();
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet ds = inParams.getCoreDataSet("dsTndrPtnr");
		
		//rtnData = BTndrDao.tndrEndPtnrSrch(data);
		outParam.setCoreDataSet("dsTndr", getSqlManager().queryForCoreDataSet(ds, "BTndrService.tndrEndTndrSrch"));
		outParam.setCoreDataSet("dsTndrPtnr", getSqlManager().queryForCoreDataSet(ds, "BTndrService.tndrEndPtnrSrch"));
		outParam.setCoreDataSet("dsTndrPtnrItem", getSqlManager().queryForCoreDataSet(ds, "BTndrService.tndrEndPtnrItemSrch"));

		return outParam;
	}
	
	/**
	 * 입찰관리  > 입찰작성
	 * 협력사 조회 기존협력사을 조회한다.
	 * @param CoreParamSet inParams
	 * @return CoreParamSet
	 * @exception Exception
	 */
	public CoreParamSet srchPoCorp(CoreParamSet inParams) throws Exception {

		//PlatformData rtnData = new PlatformData();
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet ds = inParams.getCoreDataSet("ds");//데이터셋명 확인 필요
		
		//rtnData = BTndrDao.srchPoCorp(data);
		//outParam.setCoreDataSet("dsPoCorp", getSqlManager().queryForCoreDataSet(ds, "BTndrService."));//as-is에 쿼리가 없어서 일단 스킵. 나중에 테스트하면서 확인 후 쿼리 작성 할것.
			
		return outParam;
	}
	
	/**
	 * 입찰관리 > 입찰공고메일 발송
	 * 입찰공고메일 발송한다.
	 * @param CoreParamSet inParams
	 * @return CoreParamSet
	 * @exception Exception
	 */
	public CoreParamSet tndSndMail(CoreParamSet inParams) throws Exception {

		//PlatformData rtnData = new PlatformData();
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet ds = inParams.getCoreDataSet("ds");//데이터셋명 확인 필요
		
		
		//rtnData = BTndrDao.tndSndMail(data);
		outParam.setCoreDataSet("dsTndrMail", getSqlManager().queryForCoreDataSet(ds, "BTndrService.tndSndMail"));
		
		return outParam;
	}
	
	/**
	 * 입찰관리 > 입찰진행현황
	 * 재입찰작성한다.
	 * @param CoreParamSet inParams
	 * @return CoreParamSet
	 * @exception Exception
	 */
	public CoreParamSet saveReTndr(CoreParamSet inParams) throws Exception {
		//PlatformData rtnData = new PlatformData();
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		//DataSet ds = paramDataSet.getDataSet("in_tndr");
		CoreDataSet dsTndr = inParams.getCoreDataSet("dsTndr");
			
		//PlatformData pf = BTndrDao.tndrRead(ds);
		//DataSet in_dsItem = pf.getDataSet("ds_tndrItem");
		CoreDataSet dsTndrItem = getSqlManager().queryForCoreDataSet(dsTndr, "BTndrService.tndrReadItm");

		//재입찰 작성시 기존입찰의 상태를 완료처리한다.
		//완료처리시 생성한 완료비고메세지를 저장한다.
		//입찰완료 처리 및 완료비고 메세지를 업데이트 한다.
		//BTndrDao.tndrReeTndr(ds);
		dsTndr.setActiveRow(0);
		getSqlManager().updateToCoreDataSet(dsTndr, "BTndrService.tndrReeTndr");
		
		//BTndrDao.tndrReInsert(ds,0);
		//dsTndr.setColumn(0, "TNDR_ODR", Integer.parseInt(dsTndr.getColumnAsString(0, "TNDR_ODR")));
		System.out.println("!@#"+dsTndr.getColumnAsString(0, "TNDR_ODR"));
		getSqlManager().insertToCoreDataSet(dsTndr, "BTndrService.tndrReInsert");
		
		String TndrItemSeq = "";
		for( int i = 0; i < dsTndrItem.getRowCount(); i++ ){
			TndrItemSeq = commandModule.getSeqNextval("MM_TNDR_ITEM_SEQ", CoerConstain.PROPAGATION_REQUIRED);
			dsTndrItem.setColumn(i, "TNDR_ITEM_ID", TndrItemSeq);
			dsTndrItem.setActiveRow(i);
			
			//BTndrDao.tndrReInsertItem(in_dsItem,i);
			getSqlManager().insertToCoreDataSet(dsTndrItem, "BTndrService.tndrReInsertItem");
			
		    //BTndrDao.tndrReInsertItemAdd(in_dsItem,i);
			getSqlManager().insertToCoreDataSet(dsTndrItem, "BTndrService.tndrReInsertItemAdd");
			
		}
		
		
		CoreDataSet dsPurHist = CoreDataSetFactory.getDataSet(inParams);               
	    //송장 이력 생성
		dsPurHist.addStringColumn("PR_ITEM_ID");
		dsPurHist.addStringColumn("DOC_NO");
		dsPurHist.addStringColumn("TYPE");
		dsPurHist.addStringColumn("PRGRS_STEP");
		dsPurHist.addStringColumn("RMARK");
								
								
		for(int j=0; j<dsTndrItem.getRowCount(); j++) {
			if(!"".equals(dsTndrItem.getColumnAsString(j, "PR_ITEM_ID")) && null != dsTndrItem.getColumnAsString(j, "PR_ITEM_ID")){
 				int row = dsPurHist.appendRow();
 				dsPurHist.setColumn(row, "PR_ITEM_ID"	, dsTndrItem.getColumnAsString(j, "PR_ITEM_ID"));
 				dsPurHist.setColumn(row, "DOC_NO"		, dsTndr.getColumnAsString(0, "TNDR_NO") + "-" + dsTndr.getColumnAsString(0, "TNDR_ODR"));	//각자 모듈의 문서번호
 				dsPurHist.setColumn(row, "TYPE"			, "입찰");                      //모듈명
 				if("ET20ANN".equals(dsTndr.getColumnAsString(0,"CD_TNDR_STTS"))){
 					dsPurHist.setColumn(row, "PRGRS_STEP"	, "입찰공고");                  //진행과정
 				}else{
 					dsPurHist.setColumn(row, "PRGRS_STEP"	, "입찰작성");                  //진행과정	
 				}
 				dsPurHist.setColumn(row, "RMARK"			, dsTndr.getColumnAsString(0, "CHRGR_NM")); //비고사항(발주담당자)			 
 				
 				dsPurHist.setActiveRow(j);
 				getSqlManager().insertToCoreDataSet(dsPurHist, "BComService.savePurHist");
			}
		}	
		outParam.setCoreDataSet("dsTndr", dsTndr);
		return outParam;
	}
	
	
	/**
	 * 입찰관리 > 입찰진행현황
	 * 낙찰처리한다.
	 * @param CoreParamSet inParams
	 * @return CoreParamSet
	 * @exception Exception
	 */
	public CoreParamSet tndrNac(CoreParamSet inParams) throws Exception {
		
		//PlatformData rtnData = new PlatformData();
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		
		//DataSet ds = paramDataSet.getDataSet("in_tndr");
		//DataSet ds_tndrPtnr = paramDataSet.getDataSet("in_tndrPtnr");
		//DataSet gds_userInfo = paramDataSet.getDataSet("gds_userInfo");
		
		CoreDataSet dsTndr = inParams.getCoreDataSet("dsTndr");
		CoreDataSet dsTndrPtnr = inParams.getCoreDataSet("dsTndrPtnr");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");
		
		
		/*System.out.println("addStringColumn 전!");
		dsTndrPtnr.addStringColumn("USER_ID");
		System.out.println("addStringColumn 후!");*/
		
		//입찰완료 처리 및 완료비고 메세지를 업데이트 한다.
		for(int i = 0 ; i < dsTndrPtnr.getRowCount();i++){
			//ds_tndrPtnr = Utility.dataSetAddColumn(ds_tndrPtnr, "USER_ID", DataTypes.STRING);
			
			
			
			//ds_tndrPtnr.set(i, "USER_ID", gds_userInfo.getString(0, "USER_ID"));
			dsTndrPtnr.setColumn(i, "USER_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
			//BTndrDao.tndrNacPtnrUpd(ds_tndrPtnr,i);
			getSqlManager().updateToCoreDataSet(dsTndrPtnr, "BTndrService.tndrNacPtnrUpd");
		}
		
		//PlatformData pf = BTndrDao.tndrNacItem(ds);
		//DataSet in_dsNacItem = pf.getDataSet("ds_nacItem");
		CoreDataSet dsNacItem = getSqlManager().queryForCoreDataSet(dsTndr, "BTndrService.tndrNacItem");
		
		for(int i =0 ; i < dsNacItem.getRowCount();i++){
			dsNacItem.setActiveRow(i);
			getSqlManager().updateToCoreDataSet(dsNacItem, "BTndrService.tndrPtnrBidItemUpd");
		}
		
		return outParam;
	}
	
	/**
	 * 입찰관리 > 입찰진행현황
	 * 최종견적작성한다.
	 * @param CoreParamSet inParams
	 * @return CoreParamSet
	 * @exception Exception
	 */
	public CoreParamSet tndrReRfx(CoreParamSet inParams) throws Exception {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsTndr = inParams.getCoreDataSet("dsTndr");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");
			
		getSqlManager().updateToCoreDataSet(dsTndr, "BTndrService.tndrCloseTndr");
		getSqlManager().updateToCoreDataSet(dsTndr, "BTndrService.tndrCloseRmk");
		CoreDataSet dsNacItem = getSqlManager().queryForCoreDataSet(dsTndr, "BTndrService.tndrNacItem");
		
		//입찰완료 처리 및 완료비고 메세지를 업데이트 한다.
		for(int i = 0 ; i < dsNacItem.getRowCount(); i++){
			dsNacItem.setActiveRow(i);
			getSqlManager().updateToCoreDataSet(dsNacItem, "BTndrService.tndrPtnrBidItemUpd");
		}	
		CoreDataSet dsTndrReadItem = getSqlManager().queryForCoreDataSet(dsTndr, "BTndrService.tndrReadItm");
		
		CoreDataSet dsPurHist = CoreDataSetFactory.getDataSet(inParams);
		//송장 이력 생성
		dsPurHist.addStringColumn("PR_ITEM_ID");
		dsPurHist.addStringColumn("DOC_NO");
		dsPurHist.addStringColumn("TYPE");
		dsPurHist.addStringColumn("PRGRS_STEP");
		dsPurHist.addStringColumn("RMARK");

		//구매요청시 입찰요청으로 작성하였을경우 견적요청번호가 없기 때문에 최종견적작성시 
		if("".equals(dsTndr.getColumnAsString(0, "RFQ_REQ_NO")) || dsTndr.getColumnAsString(0, "RFQ_REQ_NO") == null ){
			//dsTndr.addStringColumn("USER_ID");
			
			String RfqReqNo = "";
			RfqReqNo = commandModule.getSeqNextval("MM_RFQ_SEQ", CoerConstain.PROPAGATION_REQUIRED);
			
			dsTndr.setColumn(0, "RFQ_REQ_NO", RfqReqNo);
			dsTndr.setColumn(0, "RFQ_ODR", "0");
			dsTndr.setColumn(0, "RFQ_COREXP_KIDS", AESManager.AES_Encode(dsTndr.getColumnAsString(0, "RFQ_REQ_NO")));
			dsTndr.setColumn(0, "USER_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
			
			dsTndr.setActiveRow(0);
			getSqlManager().insertToCoreDataSet(dsTndr, "BTndrService.tndrRfxInsert");
								
 			
 			for(int j=0; j<dsTndrReadItem.getRowCount(); j++)
 			{
 				if(!"".equals(dsTndrReadItem.getColumnAsString(j, "PR_ITEM_ID")) && null != dsTndrReadItem.getColumnAsString(j, "PR_ITEM_ID")){
	 				int row = dsPurHist.appendRow();
	 				dsPurHist.setColumn(row, "PR_ITEM_ID"	, dsTndrReadItem.getColumnAsString(j, "PR_ITEM_ID"));
	 				dsPurHist.setColumn(row, "DOC_NO"		, dsTndr.getColumnAsString(0, "RFQ_REQ_NO") + "-" + dsTndr.getColumnAsString(0, "RFQ_ODR")+1);	//각자 모듈의 문서번호
	 				dsPurHist.setColumn(row, "TYPE"			, "견적");                      //모듈명
	 				dsPurHist.setColumn(row, "PRGRS_STEP"	, "견적작성");                  //진행과정	
	 				dsPurHist.setColumn(row, "RMARK"			, dsTndr.getColumnAsString(0, "CHRGR_NM")); //비고사항(발주담당자)			 

	 				dsPurHist.setActiveRow(j);
	 				getSqlManager().insertToCoreDataSet(dsPurHist, "BComService.savePurHist");
 				}
 			}
 			outParam.setCoreDataSet("dsTndr", dsTndr);
		}else { // 정상적인  최종견적작성시 
			dsTndr.setColumn(0, "RFQ_COREXP_KIDS", AESManager.AES_Encode(dsTndr.getColumnAsString(0, "RFQ_REQ_NO")));
			dsTndr.setActiveRow(0);
			getSqlManager().insertToCoreDataSet(dsTndr, "BTndrService.tndrReRfxInsert");
			getSqlManager().insertToCoreDataSet(dsTndr, "BTndrService.tndrReRfxAddInsert");
			getSqlManager().insertToCoreDataSet(dsTndr, "BTndrService.tndrReRfxPtnrInsert");
			
			String RdqReqItemNo = "";
			for( int i = 0; i < dsTndrReadItem.getRowCount(); i++ ){
				RdqReqItemNo = commandModule.getSeqNextval("MM_RFQ_ITEM_SEQ", CoerConstain.PROPAGATION_REQUIRED);
				dsTndrReadItem.setColumn(i, "NEW_RFQ_REQ_ITEM_ID", RdqReqItemNo);
				getSqlManager().insertToCoreDataSet(dsTndrReadItem, "BTndrService.tndrReRfxItemInsert");
				getSqlManager().insertToCoreDataSet(dsTndrReadItem, "BTndrService.tndrReRfxItemAddInsert");
			}

 			for(int j=0; j<dsTndrReadItem.getRowCount(); j++)
 			{
 				if(!"".equals(dsTndrReadItem.getColumnAsString(j, "PR_ITEM_ID")) && null != dsTndrReadItem.getColumnAsString(j, "PR_ITEM_ID")){
	 				int row = dsPurHist.appendRow();
	 				dsPurHist.setColumn(row, "PR_ITEM_ID"	, dsTndrReadItem.getColumnAsString(j, "PR_ITEM_ID"));
	 				dsPurHist.setColumn(row, "DOC_NO"		, dsTndr.getColumnAsString(0, "RFQ_REQ_NO") + "-" + dsTndr.getColumnAsString(0, "RFQ_ODR"));	//각자 모듈의 문서번호
	 				dsPurHist.setColumn(row, "TYPE"			, "견적");                      //모듈명
	 				dsPurHist.setColumn(row, "PRGRS_STEP"	, "견적작성");                  //진행과정	
	 				dsPurHist.setColumn(row, "RMARK"			, dsTndr.getColumnAsString(0, "CHRGR_NM")); //비고사항(발주담당자)			 

	 				dsPurHist.setActiveRow(j);
	 				getSqlManager().insertToCoreDataSet(dsPurHist, "BComService.savePurHist");
 				}
 			}
 			outParam.setCoreDataSet("dsTndr", dsTndr);
		}
		return outParam;
	}
	
	
	/**
	 * 입찰관리 > 입찰진행현황	
	 * 발주작성한다.
	 * @param CoreParamSet inParams
	 * @return CoreParamSet
	 * @exception Exception
	 */
	public CoreParamSet createPor(CoreParamSet inParams) throws Exception {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsTndr = inParams.getCoreDataSet("dsTndr");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");
			
		dsTndr.setActiveRow(0);
		CoreDataSet dsTndrNacItem = getSqlManager().queryForCoreDataSet(dsTndr, "BTndrService.tndrNacItem");
		
		//입찰완료 처리 및 완료비고 메세지를 업데이트 한다.
		for(int i = 0 ; i < dsTndrNacItem.getRowCount(); i++){
			dsTndrNacItem.setActiveRow(i);
			getSqlManager().updateToCoreDataSet(dsTndrNacItem, "BTndrService.tndrPtnrBidItemUpd");
		}
	
		//발주대상조회
		CoreDataSet dsTndrPoTarget = getSqlManager().queryForCoreDataSet(dsTndr, "BTndrService.tndrReadPoTarget");
		
		//생성된 발주 문서가 복수일 경우 메세지 처리를 위한 변수
		String rtnPonNo = "";
		//BTndrDao.tndrCloseRmk(ds);
		dsTndr.setActiveRow(0);
		getSqlManager().updateToCoreDataSet(dsTndr, "BTndrService.tndrCloseTndr");//입찰완료처리
		getSqlManager().updateToCoreDataSet(dsTndr, "BTndrService.tndrCloseRmk");//입찰완료처리
		
		
		String PoNo = "";
		for( int i = 0; i < dsTndrPoTarget.getRowCount(); i++ ){				
			//발주일자 설정				
			//ds_tndrPoTarget.set(i, "PO_DAY", ds.getString(0, "PO_DAY"));
			dsTndrPoTarget.setColumn(i, "PO_DAY", dsTndr.getColumnAsString(0, "PO_DAY"));
			
			//ds_tndrPoTarget.set(i, "CD_CNST_TYPE", ds.getString(0, "CD_CNST_TYPE"));
			dsTndrPoTarget.setColumn(i, "CD_CNST_TYPE", dsTndr.getColumnAsString(0, "CD_CNST_TYPE"));
			
			//PoNo = commandUtil.getSeqNextval( ds_userInfo.getString(0, "BRANCH_CD"),"MM_PO_SEQ");
			PoNo = commandModule.getSeqNextval("MM_PO_SEQ", CoerConstain.PROPAGATION_REQUIRED);
					
			//ds_tndrPoTarget.set(i, "PO_NO", PoNo);
			//ds_tndrPoTarget.set(i, "PO_COREXP_KIDS", AESManager.AES_Encode(ds_tndrPoTarget.getString(i, "PO_NO")));
			//ds_tndrPoTarget.set(i, "USER_ID", ds_userInfo.getString(0, "USER_ID"));
			//ds_tndrPoTarget.set(i, "USER_NM", ds_userInfo.getString(0, "USER_NM"));
			dsTndrPoTarget.setColumn(i, "PO_NO", PoNo);
			dsTndrPoTarget.setColumn(i, "PO_COREXP_KIDS", AESManager.AES_Encode(dsTndrPoTarget.getColumnAsString(i, "PO_NO")));
			dsTndrPoTarget.setColumn(i, "USER_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
			dsTndrPoTarget.setColumn(i, "USER_NM", gdsUserInfo.getColumnAsString(0, "USER_NM"));
			
			
			//발주작성
			//BTndrDao.tndrWrtPo(ds_tndrPoTarget, i);
			dsTndrPoTarget.setActiveRow(i);
			getSqlManager().insertToCoreDataSet(dsTndrPoTarget, "BTndrService.poInsert");
			getSqlManager().insertToCoreDataSet(dsTndrPoTarget, "BTndrService.poAddInsert");
			getSqlManager().insertToCoreDataSet(dsTndrPoTarget, "BTndrService.poItemInsert");
			getSqlManager().insertToCoreDataSet(dsTndrPoTarget, "BTndrService.poItemAddInsert");
			getSqlManager().insertToCoreDataSet(dsTndrPoTarget, "BTndrService.poPayInsert");
			getSqlManager().updateToCoreDataSet(dsTndrPoTarget, "BTndrService.poVatUpdate");
			
			//BPorBean.poHsryInsert(ds_tndrPoTarget, ds_tndrPoTarget.getString(i, "PO_NO"), "PO10WRI", "");
			//getSqlManager().insertToCoreDataSet(dsTndrPoTarget, "BPorService."); 							BPorService.xml에 쿼리가 없어서 패쓰함.
			
			//메세지 처리
			if(i == 0){
				rtnPonNo += PoNo;
			}else{
				rtnPonNo += ", "+PoNo;
			}
			
		}
		
		//ds_tndrPoTarget = Utility.dataSetAddColumn(ds_tndrPoTarget, "PO_NO_ARR", DataTypes.STRING);
		//dsTndrPoTarget.addStringColumn("PO_NO_ARR");
		//ds_tndrPoTarget.set(0, "PO_NO_ARR"		, rtnPonNo);
		dsTndrPoTarget.setColumn(0, "PO_NO_ARR", rtnPonNo);
		
		//발주번호ARR로 발주품번id 조회해서 와야 한다.
	    //DataSet ds_item =  BPorDao.poItemPurHist(ds_tndrPoTarget).getDataSet("ds_item");
	    //CoreDataSet dsItem = getSqlManager().queryForCoreDataSet(dsTndrPoTarget, "BPorService.");	//BPorService.xml에 쿼리가 없어서 패쓰함. 
		
		// 1. 구매요청 품목 히스토리 저장
		CoreDataSet dsPurHist = CoreDataSetFactory.getDataSet(inParams);
		//송장 이력 생성
		dsPurHist.addStringColumn("PR_ITEM_ID");
		dsPurHist.addStringColumn("DOC_NO");
		dsPurHist.addStringColumn("TYPE");
		dsPurHist.addStringColumn("PRGRS_STEP");
		dsPurHist.addStringColumn("RMARK");

		/*for(int i=0; i<dsItem.getRowCount(); i++)
		{
			int row = dsPurHist.appendRow();
			dsPurHist.setColumn(row, "PR_ITEM_ID"	, dsItem.getColumnAsString(i, "PR_ITEM_ID"));
			dsPurHist.setColumn(row, "DOC_NO"		, dsItem.getColumnAsString(i, "PO_NO"));	//각자 모듈의 문서번호
			dsPurHist.setColumn(row, "TYPE"			, "발주");                      //모듈명
			dsPurHist.setColumn(row, "PRGRS_STEP"	, "발주작성");                  //진행과정
			dsPurHist.setColumn(row, "RMARK"			, dsItem.getColumnAsString(0, "CHRGR_NM")); //비고사항(발주담당자)			 

			//BPurDao.insertPurHist(ds_purHist,row);
			dsPurHist.setActiveRow(i);
			getSqlManager().insertToCoreDataSet(dsPurHist, "BComService.savePurHist");
			
		}*/
		
		
		//메세지 처리
		String rtnMsg = "";
		String rtnCode = "";
		if(1 < dsTndrPoTarget.getRowCount()){
			rtnMsg = dsTndrPoTarget.getRowCount() + "건의 발주문서가 작성되었습니다. ("+rtnPonNo+")\n\n";
			rtnMsg += "발주진행현황에서 조회 후 진행하시길 바랍니다.";
			rtnCode = "0";
		}else{
			dsTndr.setColumn(0, "PO_NO", rtnPonNo);
			dsTndr.setColumn(0, "PO_COREXP_KIDS", AESManager.AES_Encode(rtnPonNo));
			rtnCode = "1";
			rtnMsg = "발주작성 되었습니다.";
		}
		
		//저장되어진 KEY 값을 전달한다.
		outParam.setCoreDataSet("dsTndr", dsTndr);
		
		return outParam;
	}	
	
	/**
	 * 입찰관리 > 협력사 응찰결과				
	 * 낙찰을 취소처리한다. 취소시 구매요청의 상태 및 견적의 상태도 돌려야한다.
	 * @param CoreParamSet inParams
	 * @return CoreParamSet
	 * @exception Exception
	 */
	public CoreParamSet tndrCnlTndr(CoreParamSet inParams) throws Exception {
		//PlatformData rtnData = new PlatformData();
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsTndr = inParams.getCoreDataSet("dsTndr");//입찰
		CoreDataSet dsTndrItem = inParams.getCoreDataSet("dsTndrPtnrItem");//입찰품목
		
		
		//rtnData = BTndrDao.tndrCnlTndr(ds);
		dsTndr.setActiveRow(0);
		getSqlManager().updateToCoreDataSet(dsTndr, "BTndrService.tndrCnlTndr");//낙찰취소처리
		getSqlManager().updateToCoreDataSet(dsTndr, "BTndrService.tndrCnlTndrUpdRfq");//낙찰취소처리
		
		
		
		
		// 1. 구매요청 품목 히스토리 저장
		CoreDataSet dsPurHist = CoreDataSetFactory.getDataSet(inParams);
		//송장 이력 생성
		dsPurHist.addStringColumn("PR_ITEM_ID");
		dsPurHist.addStringColumn("DOC_NO");
		dsPurHist.addStringColumn("TYPE");
		dsPurHist.addStringColumn("PRGRS_STEP");
		dsPurHist.addStringColumn("RMARK");
		
		for(int j=0; j<dsTndrItem.getRowCount(); j++)
		{
			if(!"".equals(dsTndrItem.getColumnAsString(j, "PR_ITEM_ID")) && null != dsTndrItem.getColumnAsString(j, "PR_ITEM_ID")){
 				int row = dsPurHist.appendRow();
 				dsPurHist.setColumn(row, "PR_ITEM_ID"	, dsTndrItem.getColumnAsString(j, "PR_ITEM_ID"));
 				dsPurHist.setColumn(row, "DOC_NO"		, dsTndr.getColumnAsString(0, "RFQ_REQ_NO") + "-" + dsTndr.getColumnAsString(0, "RFQ_ODR"));	//각자 모듈의 문서번호
 				dsPurHist.setColumn(row, "TYPE"			, "입찰");                      //모듈명
 				dsPurHist.setColumn(row, "PRGRS_STEP"	, "입찰삭제");                  //진행과정	
 				dsPurHist.setColumn(row, "RMARK"		, dsTndr.getColumnAsString(0, "CHRGR_NM")); //비고사항(발주담당자)			 

 				//BPurDao.insertPurHist(ds_purHist,row);
 				dsPurHist.setActiveRow(j);
 				getSqlManager().insertToCoreDataSet(dsPurHist, "BComService.savePurHist");
			}
		}
		
		outParam.setCoreDataSet("dsTndr", dsTndr);
		
		return outParam;
	}
	
	/**
	 * 입찰관리 > 공고요청
	 * 입찰공고시 동일업체가  다른 입찰라운드 시간과 중복될  경우 경고메세지
	 * @param CoreParamSet inParams
	 * @return CoreParamSet
	 * @exception Exception
	 */	
	public CoreParamSet tndrSameTime(CoreParamSet inParams) throws Exception {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsTndrRound = inParams.getCoreDataSet("dsTndrRound");
		
		String BgnTime = "";
		
		for(int i = 0 ; i < dsTndrRound.getRowCount() ; i++){
			if("1".equals(dsTndrRound.getColumnAsString(i, "ROUND_SEQ"))){
				BgnTime = dsTndrRound.getColumnAsString(i, "PRGRS_DAY")+dsTndrRound.getColumnAsString(i, "BGN_TIME");
			}
		}
		
		//DataSet dsRound = new DataSet();				
		//dsRound.addColumn(new ColumnHeader("BGN_TIME", DataTypes.STRING));
		CoreDataSet dsRound = outParam.getCoreDataSetInstance();
		dsRound.addStringColumn("BGN_TIME");
		
		int row = dsRound.appendRow();
		dsRound.setColumn(row, "BGN_TIME",BgnTime);
		
		//data = BTndrDao.tndrSameTime(dsRound);
		outParam.setCoreDataSet("dsRound", getSqlManager().queryForCoreDataSet(dsRound, "BTndrService.tndrSameTime"));
		
		return outParam;
	}
	
	/**
	 * 입찰작성화면
	 * 입찰유형을 가져온다. 
	 * @param 	   CoreParamSet inParams
	 * @return 	   CoreParamSet
	 * @exception  Exception
	 */
	public CoreParamSet tndrDocTypeSrch(CoreParamSet inParams) throws Exception {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");//데이터셋 명 확인 필요 !
		CoreDataSet dsDocType = getSqlManager().queryForCoreDataSet(dsCondition, "BTndrService.tndrDocTypeSrch");
		
		outParam.setCoreDataSet("dsDocType", dsDocType);
		
		return outParam;
	}
	
	/**
	 * 입찰관리 > 입찰진행현황
	 * 계약작성한다.
	 * @param CoreParamSet inParams
	 * @return CoreParamSet
	 * @exception Exception
	 */
	public CoreParamSet saveTndrWrtCntr(CoreParamSet inParams) throws Exception {//tndrWrtCntr
		//PlatformData rtnData = new PlatformData();
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		//DataSet ds = paramDataSet.getDataSet("in_tndr");
		//DataSet ds_userInfo = paramDataSet.getDataSet("gds_userInfo");
		CoreDataSet dsTndr = inParams.getCoreDataSet("dsTndr");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");
		
		//DataSet in_dsNacItem = pfa.getDataSet("ds_nacItem");
		CoreDataSet dsNacItem = getSqlManager().queryForCoreDataSet(dsTndr, "BTndrService.tndrNacItem");//낙찰아이템 정보 수집
		
		//입찰완료 처리 및 완료비고 메세지를 업데이트 한다.
		for(int i =0 ; i < dsNacItem.getRowCount();i++){
			//BTndrDao.tndrPtnrBidItemUpd(in_dsNacItem,i);
			dsNacItem.setActiveRow(i);
			getSqlManager().updateToCoreDataSet(dsNacItem, "BTndrService.tndrPtnrBidItemUpd");
		}
		
		//계약대상조회
		//PlatformData data = BTndrDao.tndrCntrTargetRead(ds);
		//DataSet ds_tndrCntrTarget = data.getDataSet("ds_tndrCntrTarget");
		CoreDataSet dsTndrCntrTarget = getSqlManager().queryForCoreDataSet(dsTndr, "BTndrService.tndrReadCntrTarget");//계약대상 조회
		
		//BTndrDao.tndrCloseRmk(ds);
		getSqlManager().updateToCoreDataSet(dsTndr, "BTndrService.tndrCloseTndr");
		getSqlManager().updateToCoreDataSet(dsTndr, "BTndrService.tndrCloseRmk");
		String rtnCntrNo = "";
		
		String CntrNo = "";
		for( int i = 0; i < dsTndrCntrTarget.getRowCount(); i++ ){
			CntrNo = commandModule.getSeqNextval(gdsUserInfo.getColumnAsString(0, "BRANCH_CD"), "MM_CNTR_SEQ", CoerConstain.PROPAGATION_REQUIRED);
			
			//ds_tndrCntrTarget.set(i, "CNTR_NO", CntrNo);
			//ds_tndrCntrTarget.set(i, "CNTR_COREXP_KIDS", AESManager.AES_Encode(ds_tndrCntrTarget.getString(i, "CNTR_NO")));
			//ds_tndrCntrTarget.set(i, "USER_ID", ds_userInfo.getString(0, "USER_ID"));
			//ds_tndrCntrTarget.set(i, "USER_NM", ds_userInfo.getString(0, "USER_NM"));
			dsTndrCntrTarget.setColumn(i, "CNTR_NO", CntrNo);
			dsTndrCntrTarget.setColumn(i, "CNTR_COREXP_KIDS", AESManager.AES_Encode(dsTndrCntrTarget.getColumnAsString(i, "CNTR_NO")));
			dsTndrCntrTarget.setColumn(i, "USER_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
			dsTndrCntrTarget.setColumn(i, "USER_NM", gdsUserInfo.getColumnAsString(0, "USER_NM"));
			
			//계약작성
			//BTndrDao.tndrWrtCntr(ds_tndrCntrTarget, i);
			dsTndrCntrTarget.setActiveRow(i);
			getSqlManager().insertToCoreDataSet(dsTndrCntrTarget, "BTndrService.cntrInsert");
			getSqlManager().insertToCoreDataSet(dsTndrCntrTarget, "BTndrService.cntrAddInsert");
			getSqlManager().insertToCoreDataSet(dsTndrCntrTarget, "BTndrService.cntrItemInsert");
			getSqlManager().insertToCoreDataSet(dsTndrCntrTarget, "BTndrService.cntrItemIAddnsert");
			
			if(i == 0){
				rtnCntrNo += CntrNo;
			}else{
				rtnCntrNo += ", "+CntrNo;
			}

		}
		
		//ds_tndrCntrTarget = Utility.dataSetAddColumn(ds_tndrCntrTarget, "CNTR_NO_ARR", DataTypes.STRING);
		//ds_tndrCntrTarget.set(0, "CNTR_NO_ARR"		, rtnCntrNo);
		//dsTndrCntrTarget.addStringColumn("CNTR_NO_ARR");
		dsTndrCntrTarget.setColumn(0, "CNTR_NO_ARR", rtnCntrNo);
		//발주번호ARR로 발주품번id 조회해서 와야 한다.
	    //DataSet dsItem =  BTndrDao.tndrItemPurHist(ds_tndrCntrTarget).getDataSet("ds_item");
		dsTndrCntrTarget.setActiveRow(0);
		CoreDataSet dsItem = getSqlManager().queryForCoreDataSet(dsTndrCntrTarget, "BTndrService.tndrItemPurHist"); 
		
		CoreDataSet dsPurHist = CoreDataSetFactory.getDataSet(inParams);               
	    //송장 이력 생성
		dsPurHist.addStringColumn("PR_ITEM_ID");
		dsPurHist.addStringColumn("DOC_NO");
		dsPurHist.addStringColumn("TYPE");
		dsPurHist.addStringColumn("PRGRS_STEP");
		dsPurHist.addStringColumn("RMARK");

		for(int i=0; i<dsItem.getRowCount(); i++)
		{
			if(!"".equals(dsItem.getColumnAsString(i, "PR_ITEM_ID")) && null != dsItem.getColumnAsString(i, "PR_ITEM_ID")){
 				int row = dsPurHist.appendRow();
 				dsPurHist.setColumn(row, "PR_ITEM_ID"	, dsItem.getColumnAsString(i, "PR_ITEM_ID"));
 				dsPurHist.setColumn(row, "DOC_NO"		, dsItem.getColumnAsString(i, "CNTR_NO"));	//각자 모듈의 문서번호
 				dsPurHist.setColumn(row, "TYPE"			, "계약");                      //모듈명
 				dsPurHist.setColumn(row, "PRGRS_STEP"	, "계약작성");                  //진행과정
 				dsPurHist.setColumn(row, "RMARK"			, dsItem.getColumnAsString(0, "CHRGR_NM")); //비고사항(발주담당자)			 
 				
 				//BPurDao.insertPurHist(ds_purHist,row);
 				dsPurHist.setActiveRow(i);
 				getSqlManager().insertToCoreDataSet(dsPurHist, "BComService.savePurHist");
			}
		}
	
		outParam.setCoreDataSet("dsTndr", dsTndr);
		return outParam;
	}	
}

