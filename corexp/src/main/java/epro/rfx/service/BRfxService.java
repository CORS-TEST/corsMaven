/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 *
 * @서비스명		: epro.sys.service BRfxService.java                       
 * @생성자		:
 * @생성일시		:
 * @구분			: 
 * @최종수정자		: 
 * @최종수정일시	: 
 */
package epro.rfx.service;

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

@Service
public class BRfxService extends CoreService {
	private static final Log LOG = LogFactory.getLog(BRfxService.class);
	@Autowired
	CommandModule commandModule;

}