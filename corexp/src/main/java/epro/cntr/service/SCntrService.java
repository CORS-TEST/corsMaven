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

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import core.common.config.Config;
import core.vo.model.coreset.CoreDataSet;
import core.vo.model.coreset.CoreParamSet;
import core.vo.model.coreset.CoreParamSetFactory;
import core.web.service.CoreService;
import epro.com.module.CommandModule;
import epro.com.module.FileModule;

@Service
public class SCntrService extends CoreService {
	@Autowired
	CommandModule commandModule;
	@Autowired
	FileModule fileModule;

	private static final Log LOG = LogFactory.getLog(BCntrService.class);
	
	/**
	 * @메소드명 : searchCntrList
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 계약현황
	 */
	public CoreParamSet searchCntrList(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		dsCondition.setColumn(0, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
		dsCondition.setColumn(0, "LANG_CD", gdsUserInfo.getColumnAsString(0, "LANG_CD"));

		outParam.setCoreDataSet("dsList", getSqlManager().queryForCoreDataSet(dsCondition, "SCntrService.searchCntrList"));
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

		
		CoreDataSet readCntr = getSqlManager().queryForCoreDataSet(dsCntr, "SCntrService.readCntr");
		outParam.setCoreDataSet("dsCntrItem", getSqlManager().queryForCoreDataSet(dsCntr, "SCntrService.readCntrItem"));
		outParam.setCoreDataSet("dsCntrPay", getSqlManager().queryForCoreDataSet(dsCntr, "SCntrService.readCntrPay"));
		outParam.setCoreDataSet("dsCntrInsrnc", getSqlManager().queryForCoreDataSet(dsCntr, "SCntrService.readCntrInsrnc"));
				
		String savePath = Config.getString("ATTACHFILE.DIR") + "/" + readCntr.getColumnAsString(0, "BRANCH_CD") + "/";			
		File filePath = new File(savePath); 
		if (!filePath.exists()) { filePath.mkdirs(); }
		readCntr.setColumn(0, "SIGNDATA_FILE_EXPORTURL", savePath);
		
		outParam.setCoreDataSet("dsCntr", readCntr);
	
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

}

