/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 *
 * @서비스명		: epro.sys.service STndrService.java                       
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

import core.common.constain.CoerConstain;
import core.vo.model.coreset.CoreDataSet;
import core.vo.model.coreset.CoreParamSet;
import core.vo.model.coreset.CoreParamSetFactory;
import core.web.service.CoreService;
import epro.com.module.CommandModule;
import epro.com.module.FileModule;

@Service
public class STndrService extends CoreService {
	private static final Log LOG = LogFactory.getLog(BTndrService.class);
	
	@Autowired
	CommandModule commandModule;
	@Autowired
	FileModule fileModule;
	
	/**
	 * 입찰관리 > 입찰요청현황
	 * 입찰요청현황을 조회한다.
	 * @param 	   DataSet data
	 * @return 	   PlatformData
	 * @exception  Exception
	 */
	public CoreParamSet tndrReqSrch(CoreParamSet inParams) throws Exception {
		
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet ds = inParams.getCoreDataSet("dsCondition");//데이터셋명 확인 필요!
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		ds.setColumn(0, "PTNR_ID", gdsUserInfo.getColumnAsString(0, "PTNR_ID"));
		
		outParam.setCoreDataSet("dsList", getSqlManager().queryForCoreDataSet(ds, "STndrService.tndrReqSrch"));
		
		return outParam;
	}
	
	/**
	 * 입찰관리 > 입찰 상세 조회
	 * 입찰 상세 조회 조회한다.
	 * @param 	   DataSet data
	 * @return 	   PlatformData
	 * @exception  Exception
	 */
	public CoreParamSet tndrRead(CoreParamSet inParams) throws Exception {
		//PlatformData rtnData = new PlatformData();
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet ds = inParams.getCoreDataSet("ds");
		
		//rtnData = STndrDao.tndrRead(data);
		outParam.setCoreDataSet("dsTndrRead", getSqlManager().queryForCoreDataSet(ds, "STndrService.tndrRead"));
		outParam.setCoreDataSet("dsTndrReadItem", getSqlManager().queryForCoreDataSet(ds, "STndrService.tndrReadItm"));
		outParam.setCoreDataSet("dsTndrReadRound", getSqlManager().queryForCoreDataSet(ds, "STndrService.tndrReadRound"));
		outParam.setCoreDataSet("dsTndrReadPtnr", getSqlManager().queryForCoreDataSet(ds, "STndrService.tndrReadPtnr"));
		

		//FILE_JOB_1 : 첨부파일 dataset 추가(return PlatformData,파일 조회정보)
		CoreDataSet dsfile = outParam.getCoreDataSetInstance();
		dsfile.addStringColumn("BRANCH_CD");
		dsfile.addStringColumn("REF_TBL_NM");
		dsfile.addStringColumn("REF_KEY_1");
		
		dsfile.appendRow();
		
		dsfile.setColumn(0, "BRANCH_CD", ds.getColumnAsString(0, "BRANCH_CD"));
		dsfile.setColumn(0, "REF_TBL_NM", "'MM_TNDR','MM_TNDR_ITEM'");
		dsfile.setColumn(0, "REF_KEY_1", ds.getColumnAsString(0, "TNDR_NO"));//확인필요
		
		outParam.setCoreDataSet("FileInfo", dsfile);
		outParam = fileModule.getFileInfo(outParam);
		
		return outParam;
	}
	
	/**
	 * 입찰관리 > 입찰진행현황
	 * 입찰진행현황을 조회한다.(라운드 시작 배치 프로그램을 CALL한다)
	 * @param 	   DataSet data
	 * @return 	   PlatformData
	 * @exception  Exception
	 */
	public CoreParamSet tndrGoSrch(CoreParamSet inParams) throws Exception {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet ds = inParams.getCoreDataSet("ds");
		//rtnData = STndrDao.tndrGoSrch(data);
		outParam.setCoreDataSet("dsTndrGoSrch", getSqlManager().queryForCoreDataSet(ds, "STndrService.tndrGoSrch"));
		
		return outParam;
	}
	
	/**
	 * 입찰관리 > 입찰결과
	 * 입찰결과을 조회한다.
	 * @param 	   DataSet data
	 * @return 	   PlatformData
	 * @exception  Exception
	 */
	public CoreParamSet tndrEndSrch(CoreParamSet inParams) throws Exception {
		//PlatformData rtnData = new PlatformData();
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet ds = inParams.getCoreDataSet("dsCondition");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		ds.setColumn(0, "PTNR_ID", gdsUserInfo.getColumnAsString(0, "PTNR_ID"));
		outParam.setCoreDataSet("dsList", getSqlManager().queryForCoreDataSet(ds, "STndrService.tndrEndSrch"));
		
		return outParam;
	}
	
	/**
	 * 입찰관리 > 입찰진행현황
	 * 입찰거부한다.
	 * @param 	   DataSet data
	 * @return 	   PlatformData
	 * @exception  Exception
	 */
	public CoreParamSet tndrRjc(CoreParamSet inParams) throws Exception {
		//PlatformData rtnData = new PlatformData();
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsTndr = inParams.getCoreDataSet("dsList");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");
		
		
		for( int i = 0; i < dsTndr.getRowCount(); i++ ){
			 String rowType = dsTndr.getRowStatus(i);

			if (rowType.equals(CoerConstain.UPDATE)) {			 
		    	dsTndr.setColumn(i, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
		    	dsTndr.setColumn(i, "PTNR_ID", gdsUserInfo.getColumnAsString(0, "PTNR_ID"));
		    	
		    	dsTndr.setActiveRow(i);
		    	getSqlManager().updateToCoreDataSet(dsTndr, "STndrService.tndrRjc");
		    	
		    }
		}
		
		outParam.setErrorCode(0);
		outParam.setErrorMessage("정상적으로 입찰참여거부 처리 되었습니다.");

		return outParam;
	}
	
	/**
	 * 입찰관리 > 입찰진행현황
	 * 입찰참여한다.
	 * @param 	   DataSet data
	 * @return 	   PlatformData
	 * @exception  Exception
	 */
	public CoreParamSet tndrAcp(CoreParamSet inParams) throws Exception {
		//PlatformData rtnData = new PlatformData();
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsTndr = inParams.getCoreDataSet("dsList");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");
		
		String Msg = "";
		
		for( int i = 0; i < dsTndr.getRowCount(); i++ ){
		    
		    String rowType = dsTndr.getRowStatus(i);

			if (rowType.equals(CoerConstain.UPDATE)) {
		       	
		    	CoreDataSet dsTime = getSqlManager().queryForCoreDataSet(dsTndr, "STndrService.tndrChkTime");
		    	
		    	if("Y".equals(dsTime.getColumnAsString(0,"TIME"))){
		    		dsTndr.setActiveRow(i);
		    		getSqlManager().updateToCoreDataSet(dsTndr, "STndrService.tndrAcpPtnrEnd");
		    		
		    		Msg += dsTndr.getColumnAsString(i,"TNDR_NO")+"-"+dsTndr.getColumnAsString(i,"TNDR_ODR")+",";
		    	}else{
		    		dsTndr.setColumn(i, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
			    	dsTndr.setColumn(i, "PTNR_ID", gdsUserInfo.getColumnAsString(0, "PTNR_ID"));
			    	getSqlManager().updateToCoreDataSet(dsTndr, "STndrService.tndrAcp");
		    	}
		    }
		}
		if(!"".equals(Msg)){
			outParam.setErrorCode(0);
			outParam.setErrorMessage("입찰번호: " + Msg + "\n참여신청 시간이 마감되어 참여신청 되지 않았습니다.");
		}else{
			outParam.setErrorCode(0);
			outParam.setErrorMessage("참여신청 되었습니다. 입찰진행시간을 확인하시고 입찰하시기 바랍니다.");
		}
		
		return outParam;
	}
	
	/**
	 * 입찰관리 > 입찰진행현황
	 * 업체 응찰을 위한 데이터 조회한다.
	 * @param 	   DataSet data
	 * @return 	   PlatformData
	 * @exception  Exception
	 */
	public CoreParamSet tndrGoRead(CoreParamSet inParams) throws Exception {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsTndr = inParams.getCoreDataSet("dsTndr");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");
		
		dsTndr.setColumn(0, "PTNR_ID", gdsUserInfo.getColumnAsString(0, "PTNR_ID"));
		//rtnData = STndrDao.tndrGoRead(ds);
		outParam.setCoreDataSet("dsTndrGoRead", getSqlManager().queryForCoreDataSet(dsTndr, "STndrService.tndrGoRead"));//업체응찰내용조회
		outParam.setCoreDataSet("dsTndrGoReadItem", getSqlManager().queryForCoreDataSet(dsTndr, "STndrService.tndrGoReadItem"));//업체응찰내용아이템조회
		outParam.setCoreDataSet("dsTndrGoReadRound", getSqlManager().queryForCoreDataSet(dsTndr, "STndrService.tndrGoReadRound"));//업체응찰내용라운드조회
		outParam.setCoreDataSet("dsTndrGoReadPtnr", getSqlManager().queryForCoreDataSet(dsTndr, "STndrService.tndrGoReadPtnr"));//업체 응찰내용 업체조회
		
		return outParam;
	}
	
	/**
	 * 입찰관리 > 입찰진행현황
	 * 라운드 시간을 재 조회한다.
	 * @param 	   DataSet data
	 * @return 	   PlatformData
	 * @exception  Exception
	 */
	public CoreParamSet tndrGoReadTime(CoreParamSet inParams) throws Exception {
		//PlatformData rtnData = new PlatformData();
		//VariableList varList = rtnData.getVariableList();
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsTndr = inParams.getCoreDataSet("dsTndr");
		
		//rtnData = STndrDao.tndrGoReadTime(ds);
		outParam.setCoreDataSet("dsTndrGoReadTime", getSqlManager().queryForCoreDataSet(dsTndr, "STndrService.tndrGoReadTime"));
		
		return outParam;
	}
	
	/**
	 * 입찰관리 > 입찰진행현황
	 * 최저가 공개시 업체 공개 금액을 5초 단위로 가져온다		--> 어떻게??
	 * @param 	   DataSet data
	 * @return 	   PlatformData
	 * @exception  Exception
	 */
	public CoreParamSet tndrGoReadAmt(CoreParamSet inParams) throws Exception {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsTndr = inParams.getCoreDataSet("dsTndr");
		
		outParam.setCoreDataSet("dsTndrGoReadPtnr", getSqlManager().queryForCoreDataSet(dsTndr, "STndrService.tndrGoReadPtnr"));
		
		return outParam;
	}
	
	/**
	 * 입찰관리 > 입찰진행현황
	 * 업체 응찰한다.
	 * @param 	   DataSet data
	 * @return 	   PlatformData
	 * @exception  Exception
	 */
	public CoreParamSet tndrGoAcp(CoreParamSet inParams) throws Exception {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsTndr = inParams.getCoreDataSet("dsTndr");
		CoreDataSet dsTndrPtnrItem = inParams.getCoreDataSet("dsTndrPtnrItem");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");
		
		CoreDataSet dsChkRoundTime = getSqlManager().queryForCoreDataSet(dsTndr, "STndrService.chkRoundTime");
		outParam.setCoreDataSet("dsChkRoundTime", dsChkRoundTime);
		
		//DataSet dsChk = paramDataSet.getDataSet("ds_chkRoundTime");
		
		if(dsChkRoundTime.getColumnAsInteger(0, "CNT") > 0){
		
			//입찰 협력사 업데이트
			for( int i = 0; i < dsTndr.getRowCount(); i++ ){
				dsTndr.setColumn(i, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
				dsTndr.setColumn(i, "PTNR_ID", gdsUserInfo.getColumnAsString(0, "PTNR_ID"));
		    	//STndrDao.tndrGoAcpUpd(ds, 0);
				dsTndr.setActiveRow(0);
				getSqlManager().updateToCoreDataSet(dsTndr, "STndrService.tndrGoAcpUpd");
				
			}
			String TNDR_PTNR_BID_ITEM_SEQ = "";
			//입찰 협력사 응찰품목 INSERT
			for( int i = 0; i < dsTndrPtnrItem.getRowCount(); i++ ){
				dsTndrPtnrItem.setColumn(i, "TNDR_PTNR_ID",dsTndr.getColumnAsString(0, "TNDR_PTNR_ID"));
				if(null == dsTndrPtnrItem.getColumnAsString(i,"PTNR_BID_ITEM_ID")||"".equals(dsTndrPtnrItem.getColumnAsString(i,"PTNR_BID_ITEM_ID"))){
					TNDR_PTNR_BID_ITEM_SEQ = commandModule.getSeqNextval("MM_TNDR_PTNR_BID_ITEM_SEQ", CoerConstain.PROPAGATION_REQUIRED);
					
					dsTndrPtnrItem.setColumn(i, "PTNR_BID_ITEM_ID", TNDR_PTNR_BID_ITEM_SEQ);
					dsTndrPtnrItem.setColumn(i, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
					dsTndrPtnrItem.setColumn(i, "BID_ODR",dsTndrPtnrItem.getColumnAsString(0,"BID_ODR"));
					
			    	//STndrDao.tndrGoAcpItemInsert(ds_tndrPtnrItem, i);
					dsTndrPtnrItem.setActiveRow(i);
					getSqlManager().insertToCoreDataSet(dsTndrPtnrItem, "STndrService.tndrGoAcpItemInsert");
				}else{
					//STndrDao.tndrGoAcpItemUpd(ds_tndrPtnrItem, i);
					dsTndrPtnrItem.setActiveRow(i);
					getSqlManager().updateToCoreDataSet(dsTndrPtnrItem, "STndrService.tndrGoAcpItemUpd");
				}
				//입찰 협력사 응찰 이력 INSERT
		    	//STndrDao.tndrGoAcpHstMerge(ds_tndrPtnrItem, i);
				dsTndrPtnrItem.setActiveRow(i);
				getSqlManager().insertToCoreDataSet(dsTndrPtnrItem, "STndrService.tndrGoAcpHstMerge");
			}
			
			//입찰 협력사 응찰 라운드 INSERT
			//STndrDao.tndrGoAcpRoundMerge(ds, 0);
			dsTndr.setActiveRow(0);
			getSqlManager().updateToCoreDataSet(dsTndr, "STndrService.tndrGoAcpRoundMerge");
			
			outParam.setErrorCode(0);
			outParam.setErrorMessage("응찰 되었습니다.");
		}else{
			outParam.setErrorCode(-1);
			outParam.setErrorMessage("입찰시간이 종료되어 응찰 할 수 없습니다.");
		}
		//저장되어진 KEY 값을 전달한다.
		outParam.setCoreDataSet("dsTndr", dsTndr);
		outParam.setCoreDataSet("dsTndrPtnrItem", dsTndrPtnrItem);

		return outParam;
	}
	
	/**
	 * 입찰관리 > 입찰진행현황
	 * 예약응찰, 해당 입찰의 라운드 차수만큼 응찰을 한다.
	 * @param 	   DataSet data
	 * @return 	   PlatformData
	 * @exception  Exception
	 */
	public CoreParamSet tndrGoReserveAcp(CoreParamSet inParams) throws Exception {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsTndr = inParams.getCoreDataSet("dsTndr");
		CoreDataSet dsTndrPtnrItem = inParams.getCoreDataSet("dsTndrPtnrItem");
		CoreDataSet dsTndrRound = inParams.getCoreDataSet("dsTndrRound");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");
		
		//입찰 협력사 업데이트
		for( int i = 0; i < dsTndr.getRowCount(); i++ ){
			dsTndr.setColumn(i, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
			dsTndr.setColumn(i, "PTNR_ID", gdsUserInfo.getColumnAsString(0, "PTNR_ID"));
		    //STndrDao.tndrGoAcpUpd(ds, 0);
			dsTndr.setActiveRow(0);
			getSqlManager().updateToCoreDataSet(dsTndr, "STndrService.tndrGoAcpUpd");
		}
		
		String TNDR_PTNR_BID_ITEM_SEQ = "";
		//입찰 협력사 응찰품목 INSERT
		for( int i = 0; i < dsTndrPtnrItem.getRowCount(); i++ ){
			dsTndrPtnrItem.setColumn(i, "TNDR_PTNR_ID",dsTndr.getColumnAsString(0, "TNDR_PTNR_ID"));
			if(null == dsTndrPtnrItem.getColumnAsString(i,"PTNR_BID_ITEM_ID")||"".equals(dsTndrPtnrItem.getColumnAsString(i,"PTNR_BID_ITEM_ID"))){
				TNDR_PTNR_BID_ITEM_SEQ = commandModule.getSeqNextval("MM_TNDR_PTNR_BID_ITEM_SEQ", CoerConstain.PROPAGATION_REQUIRED);
				
				dsTndrPtnrItem.setColumn(i, "PTNR_BID_ITEM_ID", TNDR_PTNR_BID_ITEM_SEQ);
				dsTndrPtnrItem.setColumn(i, "LAST_CHGR_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
				dsTndrPtnrItem.setColumn(i, "BID_ODR",dsTndrPtnrItem.getColumnAsString(0,"BID_ODR"));
		    	//STndrDao.tndrGoAcpItemInsert(ds_tndrPtnrItem, i);
		    	dsTndrPtnrItem.setActiveRow(i);
		    	getSqlManager().insertToCoreDataSet(dsTndrPtnrItem, "STndrService.tndrGoAcpItemInsert");
			}else{
				//STndrDao.tndrGoAcpItemUpd(ds_tndrPtnrItem, i);
				dsTndrPtnrItem.setActiveRow(i);
				getSqlManager().updateToCoreDataSet(dsTndrPtnrItem, "STndrService.tndrGoAcpItemUpd");
			}
			
			for(int j = 0 ; j < dsTndrRound.getRowCount(); j++){
				dsTndrPtnrItem.setColumn(i, "PRGRS_ROUND", i+1);
				//입찰 협력사 응찰 이력 INSERT
		    	//STndrDao.tndrGoAcpHstMerge(ds_tndrPtnrItem, i);
				dsTndrPtnrItem.setActiveRow(i);
				getSqlManager().insertToCoreDataSet(dsTndrPtnrItem, "STndrService.tndrGoAcpHstMerge");
			}
		}
		
		//입찰 협력사 응찰 라운드 INSERT
		for(int i = 0 ; i < dsTndrRound.getRowCount(); i++){
			dsTndr.setColumn(0, "PRGRS_ROUND", i+2);
			//STndrDao.tndrGoAcpRoundMerge(ds, 0);
			dsTndr.setActiveRow(0);
			getSqlManager().updateToCoreDataSet(dsTndr, "STndrService.tndrGoAcpRoundMerge");
		}
		
		//저장되어진 KEY 값을 전달한다.
		outParam.setCoreDataSet("dsTndr", dsTndr);
		outParam.setCoreDataSet("dsTndrPtnrItem", dsTndrPtnrItem);
		
		return outParam;
	}
	
	/**
	 * 입찰관리 
	 * 라운드시간이 경과되면 입찰테이블의 라운드 카운트를 업데이트 한다.
	 * @param 	   DataSet data
	 * @return 	   PlatformData
	 * @exception  Exception
	 */
	public CoreParamSet tndrGoAcpRoundUpd(CoreParamSet inParams) throws Exception {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsTndr = inParams.getCoreDataSet("dsTndr");
		
		dsTndr.setActiveRow(0);
		//rtnData = STndrDao.tndrGoAcpRoundUpd(data,0);
		
		return outParam;
	}
	
	/**
	 * 입찰관리 
	 * 라운드시간이 경과되면 입찰테이블의 라운드 카운트를 업데이트 한다.
	 * @param 	   DataSet data
	 * @return 	   PlatformData
	 * @exception  Exception
	 */
	public CoreParamSet tndrAcpEnd(CoreParamSet inParams) throws Exception {
		//PlatformData rtnData = new PlatformData();
		//DataSet ds = paramDataSet.getDataSet("in_tndr");
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsTndr = inParams.getCoreDataSet("dsTndr");
		
		
		//STndrDao.tndrAcpEnd(ds);
		dsTndr.setActiveRow(0);
		getSqlManager().updateForObject(dsTndr, "STndrService.tndrGoAcpET12WINEnd");
		getSqlManager().updateForObject(dsTndr, "STndrService.tndrGoAcpNAC");
		getSqlManager().updateForObject(dsTndr, "STndrService.tndrGoAcpItemNAC");
		
		//rtnData.addDataSet(ds);
		outParam.setCoreDataSet("dsTndr", dsTndr);
		
		return outParam;
	}
	
	/**
	 * 입찰관리 > 입찰진행현황
	 * 업체 응찰을 위한 데이터 조회한다.
	 * @param 	   DataSet data
	 * @return 	   PlatformData
	 * @exception  Exception
	 */
	public CoreParamSet tndrEndPtnrSrch(CoreParamSet inParams) throws Exception {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsTndr = inParams.getCoreDataSet("dsTndr");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");
		
		dsTndr.setColumn(0, "PTNR_ID", gdsUserInfo.getColumnAsString(0, "PTNR_ID"));
		//rtnData = STndrDao.tndrEndPtnrSrch(ds);
		
		outParam.setCoreDataSet("dsTndr", getSqlManager().queryForCoreDataSet(dsTndr, "STndr.tndrEndPtnrRead"));
		outParam.setCoreDataSet("dsTndrPtnrItem", getSqlManager().queryForCoreDataSet(dsTndr, "STndr.tndrEndPtnrReadItem"));
		outParam.setCoreDataSet("dsTndrRound", getSqlManager().queryForCoreDataSet(dsTndr, "STndr.tndrEndPtnrReadRound"));
		outParam.setCoreDataSet("dsTndrPtnr", getSqlManager().queryForCoreDataSet(dsTndr, "STndr.tndrEndPtnrReadPtnr"));
		
		return outParam;
	}
	
}
