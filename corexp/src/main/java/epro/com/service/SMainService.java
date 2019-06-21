/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 *
 * @서비스명		: epro.com.service BMainService.java                       
 * @생성자		: 
 * @생성일시		: 
 * @구분			: 내부 메인
 * @최종수정자		: 송태봉
 * @최종수정일시	: 2017.09.21
 */

package epro.com.service;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Service;

import core.vo.model.coreset.CoreDataSet;
import core.vo.model.coreset.CoreParamSet;
import core.vo.model.coreset.CoreParamSetFactory;
import core.web.service.CoreService;

@Service
public class SMainService extends CoreService {
	private static final Log LOG = LogFactory.getLog(BMainService.class);

	/**
	 * @메소드명 : readRfq
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 협력사사용자 메인화면의 요소를 조회한다.
	 */
	public CoreParamSet searchSMain(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		//outParam.setCoreDataSet("dsPtnr", getSqlManager().queryForCoreDataSet(gdsUserInfo, "SMainService.readPtnrInfo"));
		outParam.setCoreDataSet("dsNotice", getSqlManager().queryForCoreDataSet(gdsUserInfo, "SMainService.searchNotice"));

		return outParam;
	}

}