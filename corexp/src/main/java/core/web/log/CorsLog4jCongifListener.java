/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 */
package core.web.log;

import java.io.File;
import java.io.IOException;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.core.LoggerContext;
import org.springframework.core.io.DefaultResourceLoader;
import org.springframework.core.io.Resource;
import org.springframework.util.SystemPropertyUtils;

public class CorsLog4jCongifListener implements ServletContextListener {

	private static final Logger LOG = LogManager.getLogger(CorsLog4jCongifListener.class);
	private static final long CHECK_DELAY = 10000L;
	private static final DefaultResourceLoader DEFAULT_RESOURCE_LOADER = new DefaultResourceLoader();

	public void contextInitialized(ServletContextEvent event) {
		try {
			String resourcePath = SystemPropertyUtils.resolvePlaceholders(event.getServletContext().getInitParameter("log4jConfigLocation"));

			Resource resource = DEFAULT_RESOURCE_LOADER.getResource(resourcePath);
			File file = resource.getFile();
			String absolutePath = file.getAbsolutePath();

			if (LOG.isDebugEnabled()) {
				LOG.debug("ReloadableLog4jConfigListener resource info");
				LOG.debug("resourcePath : " + resourcePath);
				LOG.debug("resource : " + resource);
				LOG.debug("file : " + file);
				LOG.debug("isFile : " + file.isFile());
				LOG.debug("absolutePath : " + absolutePath);
			}

			LoggerContext context = (org.apache.logging.log4j.core.LoggerContext) LogManager.getContext(false);
			context.setConfigLocation(file.toURI());

		} catch (IOException e) {
			LOG.error("exception", e);
			e.printStackTrace();
		}
	}

	@Override
	public void contextDestroyed(ServletContextEvent arg0) {
		// TODO Auto-generated method stub

	}
}