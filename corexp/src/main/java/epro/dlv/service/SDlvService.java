/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 *
 * @서비스명		: epro.cmm.service SDlvService.java                       
 * @생성자			: 김민성
 * @생성일시		: 2017.09.21.
 * @구분			: 협력업체 공지사항
 * @최종수정자		: 김민성
 * @최종수정일시	: 2017.09.21.
 */
package epro.dlv.service;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.ColumnHeader;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.DataTypes;
import com.sun.corba.se.impl.util.Utility;

import core.common.constain.CoerConstain;
import core.vo.model.coreset.CoreDataSet;
import core.vo.model.coreset.CoreParamSet;
import core.vo.model.coreset.CoreParamSetFactory;
import core.web.service.CoreService;
import epro.com.module.CommandModule;
import epro.com.module.FileModule;
import epro.core.module.AESManager;

@Service
public class SDlvService extends CoreService {
	@Autowired
	CommandModule commandModule;
	
	@Autowired
	FileModule fileModule;

	private static final Log LOG = LogFactory.getLog(SDlvService.class);

	/**
	 * @메소드명 : searchDlvList
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 납품서 작성 리스트 조회 (납품서 작성)
	 */
	public CoreParamSet searchDlvList(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");
		
		
		//gdsUserInfo.setColumn(0, "BRANCH_CD", "ICA");
		dsCondition.setUpdate(true);
		dsCondition.addStringColumn("PTNR_ID");
		dsCondition.setColumn(0, "PTNR_ID", gdsUserInfo.getColumnAsString(0, "PTNR_ID")); //ASIS에선 어디서 넣어주지?

		outParam.setCoreDataSet("dsList", getSqlManager().queryForCoreDataSet(dsCondition, "SDlvService.searchDlvList"));

		return outParam;
	}
	/**
	 * @메소드명 :readDlvIngChk
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 작성중인 납품서 체크
	 */
	public CoreParamSet readDlvIngChk(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsIngChk = inParams.getCoreDataSet("dsIngChk");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");
		
	
		dsIngChk.setUpdate(true);
		dsIngChk.addStringColumn("PTNR_ID");
		dsIngChk.setColumn(0, "PTNR_ID", gdsUserInfo.getColumnAsString(0, "PTNR_ID"));
		outParam.setCoreDataSet("dsReturn", getSqlManager().queryForCoreDataSet(dsIngChk, "SDlvService.readDlvIngChk")); 
		return outParam;
	}
	/**
	 * @메소드명 : readDlv
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 납품서 작성 팝업 조회
	 */
	public CoreParamSet readDlv(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");
		

		CoreDataSet dsPo = getSqlManager().queryForCoreDataSet(dsCondition, "SDlvService.readDlv");
		CoreDataSet dsPoItem = getSqlManager().queryForCoreDataSet(dsCondition, "SDlvService.readDlvItem");
		
		outParam.setCoreDataSet("dsPo", dsPo); 
		outParam.setCoreDataSet("dsPoItem", dsPoItem);
		//System.out.println(dsPo.toString());
		//System.out.println("dddd333553");
		if("N".equals(dsPo.getColumnAsString(0, "ALT_GR_PYMT")))
		{
			//지급일정을 담는다. // BPor.poPayRead에서 가져옴 보류
		}
		System.out.println(dsPoItem.toString());
		if(!"".equals(dsPoItem.getColumnAsString(0, "DLV_NO")) && null!=dsPoItem.getColumnAsString(0, "DLV_NO"))
		{
			//유효기간관리를 담는다. //MM_PO_DLV_ITEM_EXP 유효기간의 데이터가 없다.
			outParam.setCoreDataSet("dsExp", getSqlManager().queryForCoreDataSet(dsPoItem, "SDlvService.readDlvExp"));
		}
		return outParam;
	}
		
	/**
	 * @메소드명 : searchDlvIngList
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 납품 작성 현황
	 */
	public CoreParamSet searchDlvIngList(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		
		CoreDataSet data = inParams.getCoreDataSet("in_ds");
	
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");
		
		
		data.setUpdate(true);
		data.addStringColumn("PTNR_ID");
		data.setColumn(0, "PTNR_ID", gdsUserInfo.getColumnAsString(0, "PTNR_ID"));
		System.out.println("ddddddd");
		System.out.println(data.toString());
		outParam.setCoreDataSet("ds_srch", getSqlManager().queryForCoreDataSet(data, "SDlvService.searchDlvIngList"));
		
		return outParam;
	}
	/**
	 * @메소드명 : readDlvMgmt
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 납품서 작성 팝업 조회
	 */
	public CoreParamSet readDlvMgmt(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		
		outParam.setCoreDataSet("dsPo", getSqlManager().queryForCoreDataSet(dsCondition, "SDlvService.readDlvMgmt")); 
		outParam.setCoreDataSet("dsPoItem", getSqlManager().queryForCoreDataSet(dsCondition, "SDlvService.readDlvMgmtItem")); 
			

		
		

		return outParam;
	}
	
	/**
	 * @메소드명 : deleteDlv
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 납품서 삭제
	 */
	public CoreParamSet deleteDlv(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet ds = inParams.getCoreDataSet("in_dlv");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");
		
		ds.setUpdate(true);
		ds.addStringColumn("CD_PR_ITEM_STTS");
		
			for(int i=0; i<ds.getRowCount(); i++)
			{
				ds.setActiveRow(i);
				ds.setColumn(i, "USER_ID"			, gdsUserInfo.getColumnAsString(0, "USER_ID"));
				ds.setColumn(i, "CD_PR_ITEM_STTS"	, "PR13POR");
		
				
				getSqlManager().deleteToCoreDataSet(ds, "SDlvService.deleteDlv");
				getSqlManager().deleteToCoreDataSet(ds, "SDlvService.deleteDlvItm");
				getSqlManager().deleteToCoreDataSet(ds, "SDlvService.deleteDlvPoItmSttsChg");
			}			
			
			return outParam;
	}
	/**
	 * @메소드명 : saveDlv
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 납품서 작성 팝업 조회
	 */
	public CoreParamSet saveDlv(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		CoreDataSet dsPo = inParams.getCoreDataSet("dsPo");

		CoreDataSet dsPoItem = inParams.getCoreDataSet("dsPoItem");
		
		String seq="";
		//dsCondition.setColumn(0, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
		//dsCondition.setColumn(0, "LANG_CD", gdsUserInfo.getColumnAsString(0, "LANG_CD"));
		System.out.println("ddfdf");
		dsPo.setUpdate(true);
		dsPo.addStringColumn("CD_DLV_STTS");
		dsPo.addStringColumn("USER_ID");
		dsPo.addStringColumn("USER_NM");
		dsPo.addStringColumn("STR_CD");
		dsPo.addStringColumn("INSP_CHRGR_ID");
		dsPo.setColumn(0, "CD_DLV_STTS" 	, "DL10SND");
		dsPo.setColumn(0, "USER_ID" 		, gdsUserInfo.getColumnAsString(0, "USER_ID"));
		dsPo.setColumn(0, "USER_NM" 		, gdsUserInfo.getColumnAsString(0, "USER_NM"));
		dsPo.setColumn(0, "STR_CD"			, dsPoItem.getColumnAsString(0, "STR_CD"));
		dsPo.setColumn(0, "INSP_CHRGR_ID"	, dsPoItem.getColumnAsString(0, "INSP_CHRGR_ID"));
		dsPo.setColumn(0, "TTL"				, "테스트 TTL");
		//dsPo.getColumnAsString(0, "TEMP_TTL"));
		if(dsPo.getColumnAsString(0, "DLV_NO")==null || "".equals(dsPo.getColumnAsString(0, "DLV_NO")))
		{
			seq = commandModule.getSeqNextval("MM_CM_BBS_SEQ", CoerConstain.PROPAGATION_REQUIRED);
			dsPo.setColumn(0, "DLV_NO"	, seq);
		}
		
		//INSERT PO_DLV_ITEM
		String itemSeq = "";			
		dsPoItem.setUpdate(true);
		dsPoItem.addStringColumn("CD_PR_ITEM_STTS");
		System.out.println("tedfgdddddd");
		for(int i=0; i<dsPoItem.getRowCount(); i++)
		{
			if("1".equals(dsPoItem.getColumnAsString(i, "CHECKED")) && "N".equals(dsPoItem.getColumnAsString(i, "ALT_DLV_CMPLT")))
			{
				dsPoItem.setActiveRow(i);
				dsPoItem.setColumn(i, "DLV_NO"  , seq);
				dsPoItem.setColumn(i, "USER_ID" , gdsUserInfo.getColumnAsString(0, "USER_ID"));
				System.out.println("tesjgdddd");
				if(dsPoItem.getColumnAsString(i, "DLV_ITEM_ID")==null || "".equals(dsPoItem.getColumnAsString(i, "DLV_ITEM_ID")))
				{
					itemSeq = commandModule.getSeqNextval("MM_PO_DLV_ITEM_SEQ", CoerConstain.PROPAGATION_REQUIRED);					
					dsPoItem.setColumn(i, "DLV_ITEM_ID"	, itemSeq);
					//System.out.println(dsPoItem.toString());아 이거 setRow로 하지 않았었나.. 
					System.out.println(dsPoItem.getColumnAsString(i, "USER_ID"));
					
					outParam.setCoreDataSet("dsPoItem", getSqlManager().queryForCoreDataSet(dsPoItem, "SDlvService.insertDlvItem"));
				}
				
				outParam.setCoreDataSet("dsPoItem", getSqlManager().queryForCoreDataSet(dsPoItem, "SDlvService.updateDlvItemCd")); //발주품목상태를 납품중으로 변경한다
							
				//구매요청품목 상태 변경 (납품)
	        	dsPoItem.setColumn(i, "CD_PR_ITEM_STTS", "PR13DLV");
	        	//outParam.setCoreDataSet("dsPoItem", getSqlManager().queryForCoreDataSet(dsPoItem, "SDlvService.updatePrItemCd"));
	        	
	        	//반품발주이면 유효기간관리는 필요없다.
	        	if(dsPo.getColumnAsString(0, "CD_PO_CTGR").equals("PO13RPO")) continue;
	        	
        		       	
			}
		}
		outParam.setCoreDataSet("dsPo", getSqlManager().queryForCoreDataSet(dsPo, "SDlvService.insertDlv")); //insertForCoreDataset으로 바꾸기 
		//outParam.setCoreDataSet("dsPo", getSqlManager().queryForCoreDataSet(dsPoItem, "SDlvService.insertDlvItem")); 
		

		return outParam;
	}
	/**
	 * @메소드명 : searchDlvMgmtList
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 납품서 관리 조회
	 */
	public CoreParamSet searchDlvMgmtList(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");
		
		System.out.println(33);
		dsCondition.setUpdate(true);
		dsCondition.addStringColumn("PTNR_ID");
		//dsCondition.setColumn(0, "PTNR_ID", gdsUserInfo.getColumnAsString(0, "PTNR_ID"));
		
		dsCondition.setColumn(0, "PTNR_ID", "1000000014");
		
		outParam.setCoreDataSet("dsList", getSqlManager().queryForCoreDataSet(dsCondition, "SDlvService.searchDlvMgmtList")); //dsCondition에서ㅜ gdsUserInfo로 바꿈
		//outParam.setCoreDataSet("dsPoItem", getSqlManager().queryForCoreDataSet(gdsUserInfo, "SDlvService.readDlvItem"));
		

		return outParam;
	}
	
	/**
	 * @메소드명 : searchCmmNotice
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc :
	 */
	public CoreParamSet searchCmmNotice(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		dsCondition.setColumn(0, "LANG_CD", gdsUserInfo.getColumnAsString(0, "LANG_CD"));

		outParam.setCoreDataSet("dsList",
				getSqlManager().queryForCoreDataSet(dsCondition, "SDlvService.searchCmmNotice"));

		return outParam;
	}

	/**
	 * @메소드명 : readCmmNotice
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc :
	 */
	public CoreParamSet readCmmNotice(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsBbs = inParams.getCoreDataSet("dsBbs");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		if (!dsBbs.containsColumn("LANG_CD")) {
			dsBbs.setUpdate(true);
			dsBbs.addStringColumn("LANG_CD");
		}
		dsBbs.setColumn(0, "LANG_CD", gdsUserInfo.getColumnAsString(0, "LANG_CD"));

		outParam.setCoreDataSet("dsBbs", getSqlManager().queryForCoreDataSet(dsBbs, "SDlvService.readCmmNotice"));

		CoreDataSet dsfile = outParam.getCoreDataSetInstance();
		dsfile.addStringColumn("BRANCH_CD");
		dsfile.addStringColumn("REF_TBL_NM");
		dsfile.addStringColumn("REF_KEY_1");
		dsfile.appendRow();
		dsfile.setColumn(0, "BRANCH_CD", dsBbs.getColumnAsString(0, "DOC_BRANCH_CD"));
		dsfile.setColumn(0, "REF_TBL_NM", "'MM_CM_BBS'");
		dsfile.setColumn(0, "REF_KEY_1", dsBbs.getColumnAsString(0, "DOC_NO"));
		outParam.setCoreDataSet("FileInfo", dsfile);
		outParam = fileModule.getFileInfo(outParam);

		if (!"Y".equals(dsBbs.getString("RELOAD"))) {
			getSqlManager().updateToCoreDataSet(dsBbs, "SDlvService.updateReadCnt");
		}

		return outParam;
	}

}
