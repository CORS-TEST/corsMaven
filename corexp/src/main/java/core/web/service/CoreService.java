/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 */
package core.web.service;

import core.sql.SqlManager;
import core.sql.SqlManagerFactory;

/**
 * core.web.service CoreService.java<br>
 * all service extend this service
 * 
 * @author : mjpark
 * @Date : 2017. 6. 28.
 */
public class CoreService {

	public SqlManager getSqlManager(String dataSourceId) {
		return SqlManagerFactory.getSqlManager(dataSourceId);
	}

	public SqlManager getSqlManager() {
		return SqlManagerFactory.getSqlManager("coreSqlManager");
	}

}
