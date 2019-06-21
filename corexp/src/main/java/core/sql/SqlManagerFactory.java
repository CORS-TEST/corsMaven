/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 */
package core.sql;

import core.common.util.CoreBeanUtil;

/**
 * core.sql SqlManagerFactory.java<br>
 * ex) SqlManager sql =
 * (SqlManager)SqlManagerFactory.getSqlManager(dataSourceId)
 * 
 * @author : mjpark
 * @Date : 2017. 6. 28.
 */
public abstract class SqlManagerFactory {
	public static SqlManager getSqlManager() {
		return ((SqlManager) CoreBeanUtil.getBean("coreSqlManager"));
	}

	public static SqlManager getSqlManager(String dataSourceId) {
		return ((SqlManager) CoreBeanUtil.getBean(dataSourceId));
	}
}
