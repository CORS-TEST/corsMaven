/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 *
 * @서비스명		: epro.ptnr.service BPtnrService.java                       
 * @생성자		:
 * @생성일시		:
 * @구분			:
 * @최종수정자		:
 * @최종수정일시	:
 */
package epro.pur.service;

import java.sql.Date;
import java.text.SimpleDateFormat;

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

@Service
public class BPrService extends CoreService {

	@Autowired
	CommandModule commandModule;
	@Autowired
	FileModule fileModule;
	@Autowired	
	MailSmsModule MailSmsModule;

	private static final Log LOG = LogFactory.getLog(BPrService.class);

	/**
	 * @메소드명 : searchPrList
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 구매요청 list 조회
	 */
	public CoreParamSet searchPrList(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");
		
		outParam.setCoreDataSet("dsList", getSqlManager().queryForCoreDataSet(dsCondition, "BPrService.searchPrList"));
		return outParam;
	}
	
	/**
	 * @메소드명 : readPr
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 구매요청 detail 조회
	 */
	public CoreParamSet searchPrItem(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsPr = inParams.getCoreDataSet("dsPr");
		
		outParam.setCoreDataSet("dsPrItem", getSqlManager().queryForCoreDataSet(dsPr, "BPrService.searchPrItem"));
		return outParam;
	}
	
	
    /**
	 * @메소드명 : searchPrPrePop
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 이전구매요청 품목 조회
	 */
	public CoreParamSet searchPrPrePop(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsSrchOpt = inParams.getCoreDataSet("dsCondition");
		
		outParam.setCoreDataSet("dsList", getSqlManager().queryForCoreDataSet(dsSrchOpt, "BPrService.purPreReqSrch"));
		return outParam;
	}

    /**
	 * @메소드명 : searchPrItemHist
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 구매요청 품목 진행상태 조회
	 */
	public CoreParamSet searchPrItemHist(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsPrItem = inParams.getCoreDataSet("dsCondition");
		
		outParam.setCoreDataSet("dsList", getSqlManager().queryForCoreDataSet(dsPrItem, "BPrService.searchPrItemHist"));
		
		return outParam;
	}
	
    /**
	 * @메소드명 : searchItem
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 구매요청품목검색 하나의 품목만 조회
	 */
	public CoreParamSet searchItem(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsPr = inParams.getCoreDataSet("dsPr");

		outParam.setCoreDataSet("dsPrItem", getSqlManager().queryForCoreDataSet(dsPr, "BPrService.searchItem"));
		return outParam;
	}
	
	
			
		
	/**
	 * @메소드명 : savePr
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 구매요청 저장
	 */
	public CoreParamSet savePr(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsPr = inParams.getCoreDataSet("inPr");
		CoreDataSet dsPrItem = inParams.getCoreDataSet("inPrItem");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		if (null == dsPr.getColumnAsString(0, "PR_NO") || "".equals(dsPr.getColumnAsString(0, "PR_NO"))) { 
			dsPr.setColumn(0, "PR_NO", commandModule.getSeqNextval("MM_PR_SEQ", CoerConstain.PROPAGATION_REQUIRED));

			getSqlManager().insertToCoreDataSet(dsPr, "BPrService.savePrHeader");

			for (int i = 0; i < dsPrItem.getRowCount(); i++) {
				dsPrItem.setColumn(i, "PR_ITEM_ID", commandModule.getSeqNextval("MM_PR_ITEM_SEQ", CoerConstain.PROPAGATION_REQUIRED));
				dsPrItem.setColumn(i, "PR_NO", dsPr.getColumnAsString(0, "PR_NO"));
				dsPrItem.setColumn(i, "ITM_NO", i + 1);

				dsPrItem.setActiveRow(i);
				getSqlManager().insertToCoreDataSet(dsPrItem, "BPrService.savePrItem");
				getSqlManager().insertToCoreDataSet(dsPrItem, "BPrService.savePrItemAdd");
			}
		} else {

			getSqlManager().updateToCoreDataSet(dsPr, "BPrService.updatePrHeader");

			for (int i = 0; i < dsPrItem.getRowCount(); i++) {
				String rowType = dsPrItem.getRowStatus(i);
				
				if (rowType.equals(CoerConstain.INSERT)) {
					dsPrItem.setColumn(i, "PR_ITEM_ID", commandModule.getSeqNextval("MM_PR_ITEM_SEQ", CoerConstain.PROPAGATION_REQUIRED));
					dsPrItem.setColumn(i, "PR_NO", dsPr.getColumnAsString(0, "PR_NO"));
					dsPrItem.setColumn(i, "ITM_NO", i + 1);
					
					dsPrItem.setActiveRow(i);
					getSqlManager().insertToCoreDataSet(dsPrItem, "BPrService.savePrItem");
					getSqlManager().insertToCoreDataSet(dsPrItem, "BPrService.savePrItemAdd");

				} else {
					dsPrItem.setColumn(i, "ITM_NO", i + 1);

					dsPrItem.setActiveRow(i);
					getSqlManager().updateToCoreDataSet(dsPrItem, "BPrService.updatePrItem");
					getSqlManager().updateToCoreDataSet(dsPrItem, "BPrService.updatePrItemAdd");
				}
			}

			for (int i = 0; i < dsPrItem.getDeleteRowCount(); i++) {
				CoreDataSet dsDelPrItem = outParam.getCoreDataSetInstance();
				dsDelPrItem.addStringColumn("PR_ITEM_ID");

				dsDelPrItem.appendRow();
				dsDelPrItem.setColumn(0, "PR_ITEM_ID", dsPrItem.getDeleteColumnAsString(i, "PR_ITEM_ID"));

				getSqlManager().deleteToCoreDataSet(dsDelPrItem, "BPrService.deletePrItem");
				getSqlManager().deleteToCoreDataSet(dsDelPrItem, "BPrService.deletePrItemAdd");
			}
		}

		inParams.put("bizGubun", "PR");
		outParam = fileModule.saveFileInfo(inParams);

		outParam.setCoreDataSet("inPr", dsPr);


		return outParam;
	}
 
	
	/**
	 * @메소드명 : readPr
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 구매요청상세
	 */
	public CoreParamSet readPr(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsPr = inParams.getCoreDataSet("inPr");
		//CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

			//if(dsPr.getColumnAsString(0, "BRANCH_CD") == null || "".equals(dsPr.getColumnAsString(0, "BRANCH_CD")))
			//{
			//	dsPr.setColumn(0, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
			//}
		
			
			outParam.setCoreDataSet("dsPr", getSqlManager().queryForCoreDataSet(dsPr, "BPrService.readPr"));
			outParam.setCoreDataSet("dsPrItem", getSqlManager().queryForCoreDataSet(dsPr, "BPrService.readPrItem"));
			
			CoreDataSet dsfile = outParam.getCoreDataSetInstance();
			//dsfile.addStringColumn("BRANCH_CD");
			dsfile.addStringColumn("REF_TBL_NM");
			dsfile.addStringColumn("REF_KEY_1");
			dsfile.appendRow();
			//dsfile.setColumn(0, "BRANCH_CD", dsPr.getColumnAsString(0, "BRANCH_CD"));
			dsfile.setColumn(0, "REF_TBL_NM", "'MM_PR','MM_PR_ITEM'");
			dsfile.setColumn(0, "REF_KEY_1", dsPr.getColumnAsString(0, "PR_NO"));
			outParam.setCoreDataSet("FileInfo", dsfile);
			outParam = fileModule.getFileInfo(outParam);
			
		return outParam;
	}
	
	/*
	 *  구매요청접수 처리부
	 */

	/**
	 * @메소드명 	: prRcvSrch
	 * @input 	: CoreParamSet inParams
	 * @return 	: CoreParamSet outParam
	 * @desc 	: 구매요청접수현화을 조회한다.
	 */
	public CoreParamSet prRcvSrch(CoreParamSet inParams) {
		
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");

		CoreDataSet dsSrch = getSqlManager().queryForCoreDataSet(dsCondition, "BPrService.prRcvSrch");
		outParam.setCoreDataSet("dsList", dsSrch);

		return outParam;
	}	
	
	/**
	 * @메소드명 	: savePrClose
	 * @input 	: CoreParamSet inParams
	 * @return 	: CoreParamSet outParam
	 * @desc 	: 구매의사가 변경되어 해당 구매를 완료 시키고자 할 경우 처리
	 */
	public CoreParamSet savePrClose(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsReturn = inParams.getCoreDataSet("dsReturn");
		
		for (int i = 0; i < dsReturn.getRowCount(); i++) {
			dsReturn.setActiveRow(i);
			getSqlManager().updateToCoreDataSet(dsReturn, "BPrService.savePrClose");

		}

		return outParam;
	}	
	
	/**
	 * @메소드명 	: prChgUserChk
	 * @input 	: CoreParamSet inParams
	 * @return 	: CoreParamSet outParam
	 * @desc 	: 구매요청접수 담당자지정 처리
	 */
	public CoreParamSet prChgUserChk(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsList = inParams.getCoreDataSet("dsList");
		
		for (int i = 0; i < dsList.getRowCount(); i++) {
			if("1".equals(dsList.getColumnAsString(i,"CHECKED"))){
				dsList.setActiveRow(i);
				CoreDataSet dsTkey = getSqlManager().queryForCoreDataSet(dsList, "BPrService.prChgUserChk");
				
				if(dsTkey.getRowCount() == 0) {
					outParam.setErrorCode(1);
					outParam.setErrorMessage("해당품목에 대한 변경 권한이 존재하지 않습니다.");
					break;
				}
			}
		}

		return outParam;
	}	
	
	/**
	 * @메소드명 	: savePtnrChange
	 * @input 	: CoreParamSet inParams
	 * @return 	: CoreParamSet outParam
	 * @desc 	: 구매요청접수 협력사지정 처리
	 */
	public CoreParamSet savePtnrChange(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsList = inParams.getCoreDataSet("dsList");
		
		for (int i = 0; i < dsList.getRowCount(); i++) {
			if("1".equals(dsList.getColumnAsString(i,"CHECKED"))){
				dsList.setActiveRow(i);
				getSqlManager().updateToCoreDataSet(dsList, "BPrService.savePtnrChange");
			}
		}

		return outParam;
	}	
	
	/**
	 * @메소드명 	: prRtnChgReqSrch
	 * @input 	: CoreParamSet inParams
	 * @return 	: CoreParamSet outParam
	 * @desc 	: 반품/교환 요청할 대상을 조회한다
	 */
	public CoreParamSet prRtnChgReqSrch(CoreParamSet inParams) {
		
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");
		
		CoreDataSet dsSrch = getSqlManager().queryForCoreDataSet(dsCondition, "BPrService.prRtnChgReqSrch");
		
		outParam.setCoreDataSet("dsList", dsSrch);

		return outParam;
	}	
	
	/**
	 * @메소드명 	: prRtnChgSrch
	 * @input 	: CoreParamSet inParams
	 * @return 	: CoreParamSet outParam
	 * @desc 	: 반품/교환요청 현황을 조회한다.
	 */
	public CoreParamSet prRtnChgSrch(CoreParamSet inParams) {
		
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");

		CoreDataSet dsSrch = getSqlManager().queryForCoreDataSet(dsCondition, "BPrService.prRtnChgSrch");
		
		outParam.setCoreDataSet("dsList", dsSrch);

		return outParam;
	}	
	
	/**
	 * @메소드명 	: saveReqRtnChg
	 * @input 	: CoreParamSet inParams
	 * @return 	: CoreParamSet outParam
	 * @desc 	: 반품/교환 요청
	 */
	public CoreParamSet saveReqRtnChg(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsList = inParams.getCoreDataSet("dsList");
		
		for (int i = 0; i < dsList.getRowCount(); i++) {
			if("1".equals(dsList.getColumnAsString(i,"CHECKED"))){
				dsList.setActiveRow(i);
				getSqlManager().updateToCoreDataSet(dsList, "BPrService.insertReqRtnChg");
				
				//구매요청히스토리 입력 해야함.
//				DataSet ds = new DataSet();
//				
//				Object[][] objArr = new Object[][]{
//				           {"PR_ITEM_ID",DataTypes.STRING}
//				           ,{"DOC_NO",DataTypes.STRING}
//				           ,{"TYPE",DataTypes.STRING}
//				           ,{"PRGRS_STEP",DataTypes.STRING}
//				           ,{"RMARK",DataTypes.STRING}
//				};
//				ds = Utility.dataSetAddColumn(ds, objArr);
//
//				String intType = "";
//				String rmark = "";
//				
//				if("A".equals(dsList.getString(i, "INT_TYPE"))){
//					intType = "반품요청";
//				}else if("B".equals(dsList.getString(i, "INT_TYPE"))){
//					intType = "교환요청";
//				}
//				
//				rmark = "수량:"+Utility.getCommaNum(dsList.getString(i, "QTY"))+", 사유 :"+dsList.getString(i, "RMARK");
//				
//				int row = ds.newRow();   
//				ds.set(row, "PR_ITEM_ID",dsList.getString(i, "PR_ITEM_ID"));
//				ds.set(row, "DOC_NO",dsList.getString(i, "VOC_NO"));
//				ds.set(row, "TYPE","VOC");
//				ds.set(row, "PRGRS_STEP",intType);
//				ds.set(row, "RMARK",rmark);
//
//				BPurDao.insertPurHist(ds,0);
				
			}
		}

		return outParam;
	}		
	
	/**
	 * @메소드명 : searchPrList
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 구매요청 list 조회
	 */
	public CoreParamSet searchPrReturnRcvList(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");


		outParam.setCoreDataSet("dsList", getSqlManager().queryForCoreDataSet(dsCondition, "BPrService.searchPrReturnRcvList"));
		return outParam;
	}
	
	/**
	 * @메소드명 	: savePrClose
	 * @input 	: CoreParamSet inParams
	 * @return 	: CoreParamSet outParam
	 * @desc 	: 구매의사가 변경되어 해당 구매를 완료 시키고자 할 경우 처리
	 */
	public CoreParamSet saveReturnPo(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsList = inParams.getCoreDataSet("dsList");
		
		long time = System.currentTimeMillis();
		SimpleDateFormat dayTime = new SimpleDateFormat("yyyyMMddhhmmssSSS");

		String timeStr = dayTime.format(new Date(time));
		
			
		for( int i = 0; i < dsList.getRowCount(); i++ ){
			String rowType = dsList.getRowStatus(i);

			if (rowType.equals(CoerConstain.UPDATE)) {
				
				dsList.setColumn(i, "DUMY1", timeStr);
				dsList.setColumn(i,"CD_VOC_STTS","ZZ22ING");
				dsList.setActiveRow(i);
				getSqlManager().updateToCoreDataSet(dsList, "BPrService.purItmVocDumyUpd");
				getSqlManager().updateToCoreDataSet(dsList, "BPrService.updateMmPrItemVocStts");
				
            }
		}
		// 발주대상 조회
		CoreDataSet dsPor = getSqlManager().queryForCoreDataSet(dsList, "BPrService.purItmVocReadForPor");
			
			
		if(dsPor.getRowCount() > 0){
			
			
			dsPor.setColumn(0, "PO_NO", commandModule.getSeqNextval(dsList.getColumnAsString(0, "SESSION_BRANCH_CD"),"MM_PO_SEQ", CoerConstain.PROPAGATION_REQUIRED));
			dsPor.setColumn(0, "CD_PO_STTS", "PO10WRI");
			dsPor.setColumn(0, "CD_PO_CTGR", "PO13RPO");
			dsPor.setColumn(0, "ALT_AUTO_PO", "N");
							
			
			dsPor.setActiveRow(0);
			// 발주서 작성
			getSqlManager().insertToCoreDataSet(dsPor, "BPrService.porInsertToPur");
			// 발주서 추가정보 작성
			getSqlManager().insertToCoreDataSet(dsPor, "BPrService.porAddInsertToPur");
			// 발주 지급일정 작성
			getSqlManager().insertToCoreDataSet(dsPor, "BPrService.porPayInsertToPur");
			// 발주 이력 저장
			//BPorBean.poHsryInsert(dsPor, dsPor.getString(i, "PO_NO"), "PO10WRI", "");
			
			CoreDataSet dsSrch = outParam.getCoreDataSetInstance();
			dsSrch.addStringColumn("TIME_STR");
			dsSrch.addStringColumn("BRANCH_CD");
			dsSrch.addStringColumn("PTNR_ID");
			dsSrch.addStringColumn("CD_DOC_CTGR");
			dsSrch.addStringColumn("LAST_CHGR_ID");

			dsSrch.appendRow();
			dsSrch.setColumn(0, "TIME_STR",timeStr);
			dsSrch.setColumn(0,"PTNR_ID",dsPor.getColumnAsString(0, "PTNR_ID"));
			dsSrch.setColumn(0,"CD_DOC_CTGR",dsPor.getColumnAsString(0, "CD_DOC_CTGR"));

			
			
			// 발주서 품목대상 조회
			CoreDataSet dsPorItm = getSqlManager().queryForCoreDataSet(dsSrch, "BPrService.purItmVocReadForPor");
			
			
			for(int j=0; j<dsPorItm.getRowCount(); j++){
				
				dsPorItm.setColumn(j, "PO_ITEM_ID"	, commandModule.getSeqNextval("MM_PO_ITEM_SEQ", CoerConstain.PROPAGATION_REQUIRED));
				dsPorItm.setColumn(j, "PO_NO"		, dsPor.getColumnAsString(0, "PO_NO"));
				dsPorItm.setColumn(j, "CD_PO_ITM_STTS", "PO12SAV");
				dsPorItm.setColumn(j, "QTY", "-" + dsPorItm.getColumnAsString(j, "QTY"));
				
				dsPorItm.setActiveRow(j);
				// 발주 품목 작성
				getSqlManager().insertToCoreDataSet(dsPorItm, "BPrService.porItmInsertToPur");
				// 발주품목 추가정보 작성
				getSqlManager().insertToCoreDataSet(dsPorItm, "BPrService.porItmAddInsertToPur");
				
				// 구매요청 품목 히스토리 저장
	 
//					DataSet ds = new DataSet();
//					
//					Object[][] objArr = new Object[][]{
//					           {"PR_ITEM_ID",DataTypes.STRING}
//					           ,{"DOC_NO",DataTypes.STRING}
//					           ,{"TYPE",DataTypes.STRING}
//					           ,{"PRGRS_STEP",DataTypes.STRING}
//					           ,{"RMARK",DataTypes.STRING}
//					};
//					ds = Utility.dataSetAddColumn(ds, objArr);
//					
//					int row = ds.newRow();   
//					ds.set(row, "PR_ITEM_ID",dsPorItm.getString(j, "PR_ITEM_ID"));
//					ds.set(row, "DOC_NO",dsPor.getString(i, "PO_NO"));
//					ds.set(row, "TYPE","발주");
//					ds.set(row, "PRGRS_STEP","반품발주작성");
//					ds.set(row, "RMARK",userInfo.getString(0, "USER_NM"));
//
				
				CoreDataSet dsPrItemHist = outParam.getCoreDataSetInstance();
				dsPrItemHist.addStringColumn("PR_ITEM_ID");
				dsPrItemHist.addStringColumn("DOC_NO");
				dsPrItemHist.addStringColumn("TYPE");
				dsPrItemHist.addStringColumn("PRGRS_STEP");
				dsPrItemHist.addStringColumn("RMARK");

				dsPrItemHist.appendRow();
				dsPrItemHist.setColumn(j, "PR_ITEM_ID",dsPorItm.getColumnAsString(j, "PR_ITEM_ID"));
				dsPrItemHist.setColumn(j, "DOC_NO",dsPor.getColumnAsString(0, "PO_NO"));
				dsPrItemHist.setColumn(j, "TYPE","발주");
				dsPrItemHist.setColumn(j, "PRGRS_STEP","반품발주작성");
				dsPrItemHist.setColumn(j, "RMARK",dsPorItm.getColumnAsString(0, "SESSION_USER_NM"));
				
				dsPorItm.setActiveRow(j);
				// 구매요청품목의 히스토리를 등록한다.
				getSqlManager().insertToCoreDataSet(dsPorItm, "CComHistService.insertPurHist");
				
				
				
				
			}
			
			outParam.setCoreDataSet("dsList", dsPor);
		}

		return outParam;
	}		
	

}