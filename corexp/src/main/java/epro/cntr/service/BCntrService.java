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
package epro.cntr.service;

import java.io.File;
import java.util.HashMap;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import core.common.constain.CoerConstain;
import core.vo.model.coreset.CoreDataSet;
import core.vo.model.coreset.CoreDataSetFactory;
import core.vo.model.coreset.CoreParamSet;
import core.vo.model.coreset.CoreParamSetFactory;
import core.web.service.CoreService;
import epro.com.module.CommandModule;
import epro.com.module.FileModule;

@Service
public class BCntrService extends CoreService {
	@Autowired
	CommandModule commandModule;
	@Autowired
	FileModule fileModule;

	private static final Log LOG = LogFactory.getLog(BCntrService.class);

	/**
	 * @메소드명 : searchCntrPrgList
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 계약진행현황
	 */
	public CoreParamSet searchCntrPrgList(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		dsCondition.setColumn(0, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
		dsCondition.setColumn(0, "LANG_CD", gdsUserInfo.getColumnAsString(0, "LANG_CD"));

		outParam.setCoreDataSet("dsList", getSqlManager().queryForCoreDataSet(dsCondition, "BCntrService.searchCntrPrgList"));
		return outParam;
	}

	/**
	 * @메소드명 : searchCntrList
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 계약완료현황
	 */
	public CoreParamSet searchCntrList(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		dsCondition.setColumn(0, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
		dsCondition.setColumn(0, "LANG_CD", gdsUserInfo.getColumnAsString(0, "LANG_CD"));

		outParam.setCoreDataSet("dsList", getSqlManager().queryForCoreDataSet(dsCondition, "BCntrService.searchCntrList"));
		return outParam;
	}

	/**
	 * @메소드명 : searchTmplList
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 계약템플릿현황
	 */
	public CoreParamSet searchTmplList(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		dsCondition.setColumn(0, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
		dsCondition.setColumn(0, "LANG_CD", gdsUserInfo.getColumnAsString(0, "LANG_CD"));

		outParam.setCoreDataSet("dsList", getSqlManager().queryForCoreDataSet(dsCondition, "BCntrService.searchTmplList"));
		return outParam;
	}

	/**
	 * @메소드명 : searchCntrNormalList
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 일반계약현황
	 */
	public CoreParamSet searchCntrNormalList(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		dsCondition.setColumn(0, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
		dsCondition.setColumn(0, "LANG_CD", gdsUserInfo.getColumnAsString(0, "LANG_CD"));

		outParam.setCoreDataSet("dsList", getSqlManager().queryForCoreDataSet(dsCondition, "BCntrService.searchCntrNormalList"));
		return outParam;
	}

	/**
	 * @메소드명 : searchCntrTmpl
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 계약템플릿리스트
	 */
	public CoreParamSet searchCntrTmpl(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		dsCondition.setColumn(0, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
		dsCondition.setColumn(0, "LANG_CD", gdsUserInfo.getColumnAsString(0, "LANG_CD"));

		outParam.setCoreDataSet("dsList", getSqlManager().queryForCoreDataSet(dsCondition, "BCntrService.searchCntrTmpl"));

		return outParam;
	}

	/**
	 * @메소드명 : readCntr
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 계약상세
	 */
	public CoreParamSet readCntr(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCntr = inParams.getCoreDataSet("dsCntr");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		dsCntr.setColumn(0, "LANG_CD", gdsUserInfo.getColumnAsString(0, "LANG_CD"));


		outParam.setCoreDataSet("dsCntr", getSqlManager().queryForCoreDataSet(dsCntr, "BCntrService.readCntr"));
		outParam.setCoreDataSet("dsCntrItem", getSqlManager().queryForCoreDataSet(dsCntr, "BCntrService.readCntrItem"));
		outParam.setCoreDataSet("dsCntrPay", getSqlManager().queryForCoreDataSet(dsCntr, "BCntrService.readCntrPay"));
		outParam.setCoreDataSet("dsCntrInsrnc", getSqlManager().queryForCoreDataSet(dsCntr, "BCntrService.readCntrInsrnc"));

		CoreDataSet dsfile = outParam.getCoreDataSetInstance();
		dsfile.addStringColumn("BRANCH_CD");
		dsfile.addStringColumn("REF_TBL_NM");
		dsfile.addStringColumn("REF_KEY_1");
		dsfile.appendRow();
		dsfile.setColumn(0, "BRANCH_CD", dsCntr.getColumnAsString(0, "BRANCH_CD"));
		dsfile.setColumn(0, "REF_TBL_NM", "'MM_CNTR'");
		dsfile.setColumn(0, "REF_KEY_1", dsCntr.getColumnAsString(0, "CNTR_NO"));
		outParam.setCoreDataSet("FileInfo", dsfile);
		outParam = fileModule.getFileInfo(outParam);

		return outParam;
	}

	/**
	 * @메소드명 : saveCntr
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 계약상세
	 */
	public CoreParamSet saveCntr(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCntr = inParams.getCoreDataSet("dsCntr");
		CoreDataSet dsCntrItem = inParams.getCoreDataSet("dsCntrItem");
		CoreDataSet dsCntrPay = inParams.getCoreDataSet("dsCntrPay");
		CoreDataSet dsCntrInsrnc = inParams.getCoreDataSet("dsCntrInsrnc");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		dsCntr.setColumn(0, "LANG_CD", gdsUserInfo.getColumnAsString(0, "LANG_CD"));

		int row;
		boolean upCheck = false;

		// 구매요청 품목상태 변경용 데이터셋
		CoreDataSet dsPrItem = outParam.getCoreDataSetInstance();
		dsPrItem.addStringColumn("BRANCH_CD");
		dsPrItem.addStringColumn("CNTR_NO");
		dsPrItem.addStringColumn("CD_PR_ITEM_STTS");
		dsPrItem.addStringColumn("LAST_CHGR_ID");

		row = dsPrItem.appendRow();
    	dsPrItem.setColumn(row, "CD_PR_ITEM_STTS", "PR13CNT");
    	dsPrItem.setColumn(row, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
    	dsPrItem.setColumn(row, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));

    	// 구매요청 품목 히스토리 저장을 위한 데이터셋
    	CoreDataSet dsPrHistory = outParam.getCoreDataSetInstance();
    	dsPrHistory.addStringColumn("PR_ITEM_ID");
    	dsPrHistory.addStringColumn("DOC_NO");
    	dsPrHistory.addStringColumn("TYPE");
    	dsPrHistory.addStringColumn("PRGRS_STEP");
    	dsPrHistory.addStringColumn("RMARK");

		//INSERT
		if(null == dsCntr.getColumnAsString(0,"CNTR_NO") || "".equals(dsCntr.getColumnAsString(0,"CNTR_NO"))) {
			//신규계약채번
			String cntrSeq = commandModule.getSeqNextval("MM_CNTR_SEQ", CoerConstain.PROPAGATION_REQUIRED);

			// 계약 작성
			dsCntr.setColumn(0, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
			dsCntr.setColumn(0, "CNTR_NO", cntrSeq);
			dsCntr.setColumn(0, "CRTR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));

			dsCntr.setActiveRow(0);
			getSqlManager().insertToCoreDataSet(dsCntr, "BCntrService.insertCntr");
			getSqlManager().insertToCoreDataSet(dsCntr, "BCntrService.insertCntrAdd");

			// 품목 작성
			for( int i = 0; i < dsCntrItem.getRowCount(); i++ ){
				//계약품목채번
				String cntrItemSeq = commandModule.getSeqNextval("MM_CNTR_ITEM_SEQ", CoerConstain.PROPAGATION_REQUIRED);

            	dsCntrItem.setColumn(i, "CNTR_ITEM_ID", cntrItemSeq);
            	dsCntrItem.setColumn(i, "CNTR_NO", dsCntr.getColumnAsString(0, "CNTR_NO"));
            	dsCntrItem.setColumn(i, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
            	dsCntrItem.setColumn(i, "CRTR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));

            	dsCntrItem.setActiveRow(i);
    			getSqlManager().insertToCoreDataSet(dsCntrItem, "BCntrService.insertCntrItem");
    			getSqlManager().insertToCoreDataSet(dsCntrItem, "BCntrService.insertCntrItemAdd");

            	//구매요청번호가 존재하면 해당 구매요청의 상태를 업데이트 한다.
            	if(null != dsCntrItem.getColumnAsString(i, "PR_ITEM_ID") && !"".equals(dsCntrItem.getColumnAsString(i, "PR_ITEM_ID"))){
            		row = dsPrHistory.appendRow();
            		dsPrHistory.setColumn(row, "PR_ITEM_ID", dsCntrItem.getColumnAsString(i, "PR_ITEM_ID"));
            		dsPrHistory.setColumn(row, "DOC_NO", dsCntr.getColumnAsString(0, "CNTR_NO"));
            		dsPrHistory.setColumn(row, "TYPE", "계약");
            		dsPrHistory.setColumn(row, "PRGRS_STEP", "계약작성");
            		dsPrHistory.setColumn(row, "RMARK", dsCntr.getColumnAsString(0, "CHRGR_NM"));

            		dsPrHistory.setActiveRow(row);
            		getSqlManager().insertToCoreDataSet(dsPrHistory, "BCntrService.insertPrHist");
				}
			}
			dsPrItem.setColumn(0, "CNTR_NO", dsCntr.getColumnAsString(0, "CNTR_NO"));

			dsPrItem.setActiveRow(0);
    		getSqlManager().updateToCoreDataSet(dsPrItem, "BCntrService.updatePrItemStts");

    		// 지급계획 작성
			for( int i = 0; i < dsCntrPay.getRowCount(); i++ ){
				String cntrPaySeq = commandModule.getSeqNextval("MM_CNTR_PAY_SEQ", CoerConstain.PROPAGATION_REQUIRED);

            	dsCntrPay.setColumn(i, "CNTR_PAY_PLAN_ID", cntrPaySeq);
            	dsCntrPay.setColumn(i, "CNTR_NO", dsCntr.getColumnAsString(0, "CNTR_NO"));
            	dsCntrPay.setColumn(i, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));

            	dsCntrPay.setActiveRow(i);
        		getSqlManager().insertToCoreDataSet(dsCntrPay, "BCntrService.insertCntrPay");

            	// 보증보험 작성
            	for( int j = 0; j < dsCntrInsrnc.getRowCount(); j++ ){
            		if(dsCntrPay.getColumnAsString(i,"PYMT_ORDR").equals(dsCntrInsrnc.getColumnAsString(j,"PYMT_ORDR"))){
		               	dsCntrInsrnc.setColumn(j, "CNTR_NO", dsCntr.getColumnAsString(0, "CNTR_NO"));
			           	dsCntrInsrnc.setColumn(j, "CNTR_PAY_PLAN_ID", dsCntrPay.getColumnAsString(i, "CNTR_PAY_PLAN_ID"));
			           	dsCntrInsrnc.setColumn(j, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
			           	dsCntrInsrnc.setColumn(j, "CRTR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));

			           	dsCntrInsrnc.setActiveRow(j);
			        	getSqlManager().insertToCoreDataSet(dsCntrInsrnc, "BCntrService.insertCntrInsrnc");
		            }
            	}
			}
		}
		//UPDATE
		else{

			Map<String, Object> conditionMap = new HashMap<String, Object>();
			conditionMap.put("CNTR_NO", dsCntr.getColumnAsString(0, "CNTR_NO"));
			boolean bTkey = commandModule.isEqualsTkey("MM_CNTR", dsCntr.getColumnAsString(0, "TKEY"), conditionMap);

			if (!bTkey) {
				outParam.setMessage("EPRO_LABEL_00924");
				return outParam;
			}

			dsCntr.setColumn(0, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
			dsCntr.setColumn(0, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));

			dsCntr.setActiveRow(0);
			getSqlManager().updateToCoreDataSet(dsCntr, "BCntrService.updateCntr");
			getSqlManager().updateToCoreDataSet(dsCntr, "BCntrService.updateCntrAdd");
			// 품목 추가 및 수정
			System.out.println("------------------------------------------");
			System.out.println(dsCntrItem.toString());
			for(int i = 0; i<dsCntrItem.getRowCount(); i++){
				String rowStts = dsCntrItem.getRowStatus(i);
				if(CoerConstain.INSERT.equals(rowStts)){
					//계약품목채번
					String cntrItemSeq = commandModule.getSeqNextval("MM_CNTR_ITEM_SEQ", CoerConstain.PROPAGATION_REQUIRED);

		            dsCntrItem.setColumn(i, "CNTR_ITEM_ID", cntrItemSeq);
	            	dsCntrItem.setColumn(i, "CNTR_NO", dsCntr.getColumnAsString(0, "CNTR_NO"));
	            	dsCntrItem.setColumn(i, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
	            	dsCntrItem.setColumn(i, "CRTR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));

	            	dsCntrItem.setActiveRow(i);
	    			getSqlManager().insertToCoreDataSet(dsCntrItem, "BCntrService.insertCntrItem");
	    			getSqlManager().insertToCoreDataSet(dsCntrItem, "BCntrService.insertCntrItemAdd");


	    			//구매요청번호가 존재하면 해당 구매요청의 상태를 업데이트 한다.
	            	if(null != dsCntrItem.getColumnAsString(i, "PR_ITEM_ID") && !"".equals(dsCntrItem.getColumnAsString(i, "PR_ITEM_ID"))){
	            		row = dsPrHistory.appendRow();
	            		dsPrHistory.setColumn(row, "PR_ITEM_ID", dsCntrItem.getColumnAsString(i, "PR_ITEM_ID"));
	            		dsPrHistory.setColumn(row, "DOC_NO", dsCntr.getColumnAsString(0, "CNTR_NO"));
	            		dsPrHistory.setColumn(row, "TYPE", "계약");
	            		dsPrHistory.setColumn(row, "PRGRS_STEP", "계약작성");
	            		dsPrHistory.setColumn(row, "RMARK", dsCntr.getColumnAsString(0, "CHRGR_NM"));

	            		dsPrHistory.setActiveRow(row);
	            		getSqlManager().insertToCoreDataSet(dsPrHistory, "BCntrService.insertPrHist");

	            		upCheck = true;
					}
				} else if(CoerConstain.UPDATE.equals(rowStts)){

		            	dsCntrItem.setColumn(i, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
		            	dsCntrItem.setColumn(i, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "LAST_CHGR_ID"));

		            	dsCntrItem.setActiveRow(i);
	            		getSqlManager().insertToCoreDataSet(dsCntrItem, "BCntrService.updateCntrItem");
		            	//계약아이템 추가정보에는 견적/입찰/발주품목번호가 들어 있으면 업데이트시 해당 데이터는 수정되지 않으로 업데이트가 필요없음
		            	//BCtrDao.cntrUpdItmAdd(dsCntrItem,i);
		        }
			}

			if(upCheck == true){
				dsPrItem.setColumn(0, "CNTR_NO", dsCntr.getColumnAsString(0, "CNTR_NO"));

				dsPrItem.setActiveRow(0);
		    	getSqlManager().updateToCoreDataSet(dsPrItem, "BCntrService.updatePrItemStts");
			}

			// 지금계획 추가 및 수정
			for( int i = 0; i < dsCntrPay.getRowCount(); i++ ){
				String rowStts = dsCntrPay.getRowStatus(i);
				if(CoerConstain.INSERT.equals(rowStts.toUpperCase()) ){
					String cntrPaySeq = commandModule.getSeqNextval("MM_CNTR_PAY_SEQ", CoerConstain.PROPAGATION_REQUIRED);

					dsCntrPay.setColumn(i, "CNTR_PAY_PLAN_ID", cntrPaySeq);
	            	dsCntrPay.setColumn(i, "CNTR_NO", dsCntr.getColumnAsString(0, "CNTR_NO"));
	            	dsCntrPay.setColumn(i, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));

	            	dsCntrPay.setActiveRow(i);
	        		getSqlManager().insertToCoreDataSet(dsCntrPay, "BCntrService.insertCntrPay");

				}else if( "UPDATE".equals(rowStts.toUpperCase()) ){
		           	dsCntrPay.setColumn(i, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));

		           	dsCntrPay.setActiveRow(i);
	        		getSqlManager().updateToCoreDataSet(dsCntrPay, "BCntrService.updateCntrPay");
		        }

				// 보증보험 추가 및 수정
				for( int j = 0; j < dsCntrInsrnc.getRowCount(); j++ ){
					String insrncRowStts = dsCntrInsrnc.getRowStatus(i);

					//지급차수가 같을 때만 넣어준다.
					if(dsCntrPay.getColumnAsString(i, "PYMT_ORDR").equals(dsCntrInsrnc.getColumnAsString(j, "PYMT_ORDR"))){
						// 추가
						if("INSERT".equals(insrncRowStts.toUpperCase())){
			            	dsCntrInsrnc.setColumn(j, "CNTR_NO", dsCntr.getColumnAsString(0, "CNTR_NO"));
			            	dsCntrInsrnc.setColumn(j, "CNTR_PAY_PLAN_ID", dsCntrPay.getColumnAsString(i, "CNTR_PAY_PLAN_ID"));
			            	dsCntrInsrnc.setColumn(j, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
			            	dsCntrInsrnc.setColumn(j, "CRTR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));

			            	dsCntrInsrnc.setActiveRow(j);
			        		getSqlManager().insertToCoreDataSet(dsCntrInsrnc, "BCntrService.insertCntrInsrnc");
						}
						// 수정
						else if("UPDATE".equals(insrncRowStts.toUpperCase())){

							dsCntrInsrnc.setColumn(j, "CNTR_PAY_PLAN_ID", dsCntrPay.getColumnAsString(i,"CNTR_PAY_PLAN_ID"));
							dsCntrInsrnc.setColumn(j, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
							dsCntrInsrnc.setColumn(j, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));

							dsCntrInsrnc.setActiveRow(j);
			        		getSqlManager().updateToCoreDataSet(dsCntrInsrnc, "BCntrService.updateCntrInsrnc");
					}
						}
				}
			}


			int purCnt  = 0;
			int tndrCnt = 0;
			int rfqCnt = 0 ;

			//PR_ITEM 상태 원복
			for(int i=0; i<dsCntrItem.getDeleteRowCount(); i++){
				if(!"".equals(dsCntrItem.getDeleteColumnAsString(i, "PR_ITEM_ID"))){
					purCnt++;
				}else if(!"".equals(dsCntrItem.getDeleteColumnAsString(i, "RFQ_REQ_ITEM_ID"))){
					rfqCnt++;
				}else if(!"".equals(dsCntrItem.getDeleteColumnAsString(i, "TNDR_ITEM_ID"))){
					tndrCnt++;
				}
			}

			if(tndrCnt > 0){
				dsPrItem.setColumn(0, "CD_PR_ITEM_STTS", "PR13TND");

		       	dsPrItem.setActiveRow(0);
	    		getSqlManager().updateToCoreDataSet(dsPrItem, "BCntrService.UpdateTndrStts");
			}else if(rfqCnt > 0){
				dsPrItem.setColumn(0, "CD_PR_ITEM_STTS", "PR13RFQ");

				dsPrItem.setActiveRow(0);
	    		getSqlManager().updateToCoreDataSet(dsPrItem, "BCntrService.UpdateRfqStts");
			}else if(purCnt > 0){
	        	dsPrItem.setColumn(0, "CD_PR_ITEM_STTS", "PR13RCV");

	           	dsPrItem.setActiveRow(0);
	    		getSqlManager().updateToCoreDataSet(dsPrItem, "BCntrService.UpdatePrStts");
			}


			//계약 품목 삭제
			for( int i=0; i<dsCntrItem.getDeleteRowCount(); i++ ){
				CoreDataSet dsDelCntrItem = outParam.getCoreDataSetInstance();
				dsDelCntrItem.addStringColumn("CNTR_ITEM_ID");
				dsDelCntrItem.appendRow();
				dsDelCntrItem.setColumn(0, "CNTR_ITEM_ID", dsCntrItem.getDeleteColumnAsString(0, "CNTR_ITEM_ID"));

				getSqlManager().deleteToCoreDataSet(dsDelCntrItem, "BCntrService.deleteCntrItem");
				getSqlManager().deleteToCoreDataSet(dsDelCntrItem, "BCntrService.deleteCntrItemAdd");
		    }
			//지급계획 삭제
			for( int i = 0; i < dsCntrPay.getDeleteRowCount(); i++ ){
				CoreDataSet dsDelCntrPay = outParam.getCoreDataSetInstance();
				dsDelCntrPay.addStringColumn("CNTR_PAY_PLAN_ID");
				dsDelCntrPay.appendRow();
				dsDelCntrPay.setColumn(0, "CNTR_PAY_PLAN_ID", dsCntrPay.getDeleteColumnAsString(0, "CNTR_PAY_PLAN_ID"));

				getSqlManager().deleteForObject(dsDelCntrPay, "BCntrService.deleteCntrItem");
		    }

			// 보증보험 삭제
			for( int i = 0; i < dsCntrInsrnc.getDeleteRowCount(); i++ ){
				CoreDataSet dsDelCntrInsrnc = outParam.getCoreDataSetInstance();
				dsDelCntrInsrnc.addStringColumn("CNTR_GRNT_ID");
				dsDelCntrInsrnc.appendRow();
				dsDelCntrInsrnc.setColumn(0, "CNTR_GRNT_ID", dsCntrInsrnc.getDeleteColumnAsString(0, "CNTR_GRNT_ID"));

				getSqlManager().deleteForObject(dsDelCntrInsrnc, "BCntrService.deleteCntrItem");
		    }
		}

		// 계약 금액계산
		getSqlManager().updateToCoreDataSet(dsCntr, "BCntrService.updateCntrAmt");

        //파일 저장모듈 호출(화면에서 잔달받은 PlatformData,파일 맵핑 정보)
		inParams.put("bizGubun", "CNTR");
		outParam = fileModule.saveFileInfo(inParams);

		outParam.setCoreDataSet("dsCntr", dsCntr);

		return outParam;
	}

	/**
	 * @메소드명 : updateCntrReq
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 계약요청
	 */
	public CoreParamSet updateCntrReq(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCntr = inParams.getCoreDataSet("dsCntr");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		dsCntr.setColumn(0, "LANG_CD", gdsUserInfo.getColumnAsString(0, "LANG_CD"));
		dsCntr.setColumn(0, "CD_CNTR_STTS", "CT10SREQ");
		dsCntr.setColumn(0, "CNTR_REQR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
		dsCntr.setColumn(0, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));


		getSqlManager().updateToCoreDataSet(dsCntr, "BCntrService.updateCntrReq");
		getSqlManager().updateToCoreDataSet(dsCntr, "BCntrService.updateCntrAddReq");

		outParam.setCoreDataSet("dsCntr", dsCntr);

		return outParam;
	}

	/**
	 * @메소드명 : updateCntrIntCfm
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 내부확정
	 */
	public CoreParamSet updateCntrIntCfm(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCntr = inParams.getCoreDataSet("dsCntr");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		dsCntr.setColumn(0, "LANG_CD", gdsUserInfo.getColumnAsString(0, "LANG_CD"));
		dsCntr.setColumn(0, "CD_CNTR_STTS", "CT10CLO");
		dsCntr.setColumn(0, "ALT_INTL_CFM", "Y");
		dsCntr.setColumn(0, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "LAST_CHGR_ID"));

		getSqlManager().updateToCoreDataSet(dsCntr, "BCntrService.updateCntrIntCfm");
		getSqlManager().updateToCoreDataSet(dsCntr, "BCntrService.updateCntrAddIntCfm");

		outParam.setCoreDataSet("dsCntr", dsCntr);

		return outParam;
	}

	/**
	 * @메소드명 : readCntrTmpl
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 계약템플릿상세
	 */
	public CoreParamSet readCntrTmpl(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCntrTmpl = inParams.getCoreDataSet("dsCntrTmpl");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");


		outParam.setCoreDataSet("dsCntrTmpl", getSqlManager().queryForCoreDataSet(dsCntrTmpl, "BCntrService.readCntrTmpl"));

		return outParam;
	}

	/**
	 * @메소드명 : saveCntrTmpl
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 계약템플릿저장
	 */
	public CoreParamSet saveCntrTmpl(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCntrTmpl = inParams.getCoreDataSet("dsCntrTmpl");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		dsCntrTmpl.setColumn(0, "LANG_CD", gdsUserInfo.getColumnAsString(0, "LANG_CD"));

		//INSERT CNTR_TMPL
		if(null == dsCntrTmpl.getColumnAsString(0,"CNTR_TMPL_ID")||"".equals(dsCntrTmpl.getColumnAsString(0,"CNTR_TMPL_ID"))) {
		    String seq = commandModule.getSeqNextval("MM_CNTR_TMPL_SEQ", CoerConstain.PROPAGATION_REQUIRED);
	        dsCntrTmpl.setColumn(0, "CNTR_TMPL_ID", seq);
	        dsCntrTmpl.setColumn(0, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
	        dsCntrTmpl.setColumn(0, "CRTR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
	        dsCntrTmpl.setColumn(0, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
	        dsCntrTmpl.setActiveRow(0);
	        getSqlManager().queryForCoreDataSet(dsCntrTmpl, "BCntrService.insertCntrTmpl");

		}else{
			dsCntrTmpl.setColumn(0, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
			dsCntrTmpl.setActiveRow(0);
	        getSqlManager().queryForCoreDataSet(dsCntrTmpl, "BCntrService.updateCntrTmpl");

		}

		outParam.setCoreDataSet("dsCntrTmpl", dsCntrTmpl);

		return outParam;
	}

	/**
	 * @메소드명 : deleteCntrTmpl
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 계약템플릿삭제
	 */
	public CoreParamSet deleteCntrTmpl(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCntrTmpl = inParams.getCoreDataSet("dsCntrTmpl");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		getSqlManager().deleteToCoreDataSet(dsCntrTmpl, "BCntrService.deleteCntrTmpl");

		return outParam;
	}

}
