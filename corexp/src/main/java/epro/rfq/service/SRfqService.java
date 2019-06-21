/**
 * Copyright (c) 2019 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 *
 * @서비스명		: epro.rfq.service SRfqService.java                       
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

import core.web.service.CoreService;
import epro.com.module.CommandModule;
import epro.com.module.FileModule;
import epro.com.module.MailSmsModule;

@Service
public class SRfqService extends CoreService {
	
	@Autowired
	CommandModule commandModule;
	@Autowired
	FileModule fileModule;
	@Autowired
	MailSmsModule MailSmsModule;
	
	private static final Log LOG = LogFactory.getLog(SRfqService.class);


}
