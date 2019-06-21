/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 */
package core.common.util;

import org.springframework.context.ApplicationContext;

import core.common.context.ApplicationContextProvider;

public class CoreBeanUtil {
	public static Object getBean(String beanId) {

		ApplicationContext applicationContext = ApplicationContextProvider.getApplicationContext();

		if (applicationContext == null) {
			throw new NullPointerException("Spring ApplicationContext not initial");
		}

		return applicationContext.getBean(beanId);
	}
}
