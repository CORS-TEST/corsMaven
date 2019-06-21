/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 */
package core.web.module;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import core.sql.SqlManager;
import core.sql.SqlManagerFactory;

/**
 * core.web.module CoreModule.java
 * 
 * @author : mjpark
 * @Date : 2017. 7. 6.
 */
public class CoreModule {
	private static final Log LOG = LogFactory.getLog(CoreModule.class);

	public SqlManager getSqlManager(String dataSourceId) {
		return SqlManagerFactory.getSqlManager(dataSourceId);
	}

	public SqlManager getSqlManager() {
		return SqlManagerFactory.getSqlManager("coreSqlManager");
	}
}
