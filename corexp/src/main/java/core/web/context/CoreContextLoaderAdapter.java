/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 */
package core.web.context;

import javax.servlet.ServletContext;
import javax.servlet.ServletRequest;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;
import org.springframework.web.servlet.support.RequestContextUtils;

import core.common.config.Config;

public class CoreContextLoaderAdapter implements ContextLoaderAdapter {
	private static final Log LOG = LogFactory.getLog(CoreContextLoaderAdapter.class);
	private static WebApplicationContext webApplicationContext;
	private static ApplicationContext applicationContext;

	@Override
	public void afterInitialize(ServletContext paramServletContext) {
		webApplicationContext = WebApplicationContextUtils.getWebApplicationContext(paramServletContext);
		Config.loadConfig();
	}

	@Override
	public void beforeInitialize(ServletContext paramServletContext) {
		// TODO Auto-generated method stub
		Config.setConfigLocation(paramServletContext.getInitParameter("systemConfigLocation"));
	}

	@Override
	public void beforeDestroy(ServletContext paramServletContext) {
		// TODO Auto-generated method stub

	}

	@Override
	public void afterDestroy(ServletContext paramServletContext) {
		// TODO Auto-generated method stub

	}

	public static final void setWebApplicationContext(ServletRequest request) {
		webApplicationContext = RequestContextUtils.getWebApplicationContext(request);
	}

	public static final void setWebApplicationContext(WebApplicationContext context) {
		webApplicationContext = context;
	}

	public static final void setApplicationContext(ApplicationContext context) {
		applicationContext = context;
	}

	public static final ApplicationContext getApplicationContext() {
		return applicationContext;
	}

	public static final WebApplicationContext getWebApplicationContext() {
		return webApplicationContext;
	}
}
