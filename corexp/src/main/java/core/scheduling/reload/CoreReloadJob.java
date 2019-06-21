/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 */
package core.scheduling.reload;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.springframework.scheduling.quartz.QuartzJobBean;

import core.common.util.CodeUtil;

/**
 * The class ReloadJob
 *
 * @author
 * @version 1.0
 *
 */
public class CoreReloadJob extends QuartzJobBean {

	private static final Log LOG = LogFactory.getLog(CoreReloadJob.class);

	protected void executeInternal(JobExecutionContext ctx) throws JobExecutionException {
		CodeUtil.init();
		LOG.debug("Quarts Common Code Job End now.");
	}
}
