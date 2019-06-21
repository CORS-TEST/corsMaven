/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 */
package core.common.util;

import javax.servlet.ServletRequest;

import core.common.config.Config;

/**
 * core.common.util CharactorUtil.java<br>
 * set,get charactorset
 * 
 * @author : mjpark
 * @Date : 2017. 6. 29.
 */
public class CharactorUtil {
	public static final String DEFAULT_CHARSET = resolveDefaultCharSet();

	public static String resolveDefaultCharSet() {
		return Config.getString("BASIC.CHARSET");// DEFAULT_CHARSET;
	}

	public static String getDefaultCharSet() {
		return Config.getString("BASIC.CHARSET");// DEFAULT_CHARSET;
	}

	public static String getJsonCharSet() {
		return "UTF-8";
	}

	public static String getDefaultCharSet(ServletRequest request) {
		String reqCharSet = request.getCharacterEncoding();

		if ((reqCharSet == null) || ("".equals(reqCharSet))) {
			return DEFAULT_CHARSET;
		}
		return reqCharSet;
	}
}
