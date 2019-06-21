/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 */
package core.web.context;

import javax.servlet.ServletContextEvent;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.util.StringUtils;

public class ContextLoaderListener extends org.springframework.web.context.ContextLoaderListener {
	private static final Log LOG = LogFactory.getLog(ContextLoaderListener.class);
	private ContextLoaderAdapter adapter;

	public void contextInitialized(ServletContextEvent event) {

		loadContextLoaderAdapter(event);
		if (adapter != null) {
			adapter.beforeInitialize(event.getServletContext());
		}
		super.contextInitialized(event);
		if (adapter != null) {
			adapter.afterInitialize(event.getServletContext());
		}
	}

	public void contextDestroyed(ServletContextEvent event) {

		if (adapter != null) {
			adapter.beforeDestroy(event.getServletContext());
		}
		super.contextDestroyed(event);

		if (adapter != null) {
			adapter.afterDestroy(event.getServletContext());
		}
	}

	private void loadContextLoaderAdapter(ServletContextEvent event) {
		String adapterClassName = event.getServletContext().getInitParameter("contextLoaderAdapter");
		if (StringUtils.isEmpty(adapterClassName)) {
			return;
		}
		try {
			Class<?> adapterClass = Class.forName(adapterClassName);
			adapter = (ContextLoaderAdapter) adapterClass.newInstance();
		} catch (ClassNotFoundException e) {
			if (LOG.isErrorEnabled()) {
				LOG.error(e, e);
			}
		} catch (InstantiationException e) {
			if (LOG.isErrorEnabled()) {
				LOG.error(e, e);
			}
		} catch (IllegalAccessException e) {
			if (LOG.isErrorEnabled()) {
				LOG.error(e, e);
			}
		}
	}

}
