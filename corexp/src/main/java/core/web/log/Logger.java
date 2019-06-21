/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 */
package core.web.log;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import core.common.util.CharactorUtil;
import core.common.util.UrlUtil;

/**
 * core.web.log Logger.java<br>
 * log
 * 
 * @author : mjpark
 * @Date : 2017. 6. 29.
 */
public class Logger {

	private static final Log LOG = LogFactory.getLog(Logger.class);

	private static final String DEFAULT_CHARACTER_SET = CharactorUtil.getDefaultCharSet();

	public static void requestLogger(HttpServletRequest request) {
		if (!(LOG.isInfoEnabled())) {
			return;
		}

		String requestIP = (String) request.getAttribute("remoteNetworkAddress");

		String requestURL = request.getRequestURL().toString();
		String paramKeyValue = null;
		StringBuilder logMessage = new StringBuilder();

		if (StringUtils.isNotEmpty(getParameterKeyValue(request)))
			paramKeyValue = getParameterKeyValue(request);
		else {
			paramKeyValue = "none";
		}

		logMessage.append("[ ").append(requestIP).append("]");// IP
		logMessage.append("[").append(requestURL).append("]");// URL
		logMessage.append("[").append(paramKeyValue).append("]");// REQUESTPARAM

		LOG.info(logMessage.toString());
	}

	private static String getParameterKeyValue(HttpServletRequest request) {
		return getParameterKeyValue(request, DEFAULT_CHARACTER_SET);
	}

	private static String getParameterKeyValue(HttpServletRequest request, String charset) {
		return UrlUtil.getParameterKeyValue(request, charset);
	}
}