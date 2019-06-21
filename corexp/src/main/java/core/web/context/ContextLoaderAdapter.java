/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 */
package core.web.context;

import javax.servlet.ServletContext;

public abstract interface ContextLoaderAdapter {
	public abstract void beforeInitialize(ServletContext paramServletContext);
	public abstract void afterInitialize(ServletContext paramServletContext);
	public abstract void beforeDestroy(ServletContext paramServletContext);
	public abstract void afterDestroy(ServletContext paramServletContext);
}
