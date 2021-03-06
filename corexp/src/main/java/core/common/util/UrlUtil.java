/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 */
package core.common.util;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.util.Enumeration;
import java.util.HashMap;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

public class UrlUtil {

	public static final String UTF_8 = "UTF-8";
	private static final Log LOG = LogFactory.getLog(UrlUtil.class);

	public static HashMap<String, Object> getKeyValues(String backURL) {
		return getKeyValues(backURL, "UTF-8");
	}

	public static HashMap<String, Object> getKeyValues(String backURL, String charset) {
		HashMap keyValues = new HashMap();

		String[] urlParams = StringUtils.splitPreserveAllTokens(backURL, "?");

		if ((urlParams != null) && (urlParams.length == 2)) {
			keyValues.put("http_request_back_url_key", urlParams[0]);

			String[] params = StringUtils.splitPreserveAllTokens(urlParams[1], "&");

			if ((params != null) && (params.length > 0)) {
				for (int i = 0; i < params.length; ++i) {
					String[] keyValue = StringUtils.splitPreserveAllTokens(params[i], "=");
					if ((keyValue == null) || (keyValue.length != 2))
						continue;
					try {
						keyValues.put(keyValue[0], URLDecoder.decode(keyValue[1], charset));
					} catch (Exception ex) {
						LOG.error("exception", ex);
					}

				}

			}

		}

		return keyValues;
	}

	public static String makeBackURL(HttpServletRequest request) {
		return makeBackURL(request, "UTF-8");
	}

	public static String makeBackURI(HttpServletRequest request) {
		return makeBackURI(request, "UTF-8");
	}

	public static String getParameterKeyValue(HttpServletRequest request) {
		return getParameterKeyValue(request, "UTF-8");
	}

	public static String makeBackURL(HttpServletRequest request, String charset) {
		String requestURI = request.getRequestURI();

		String tempURL = new StringBuilder().append("http://").append(request.getServerName()).append(":")
				.append(request.getServerPort()).append(requestURI).toString();

		StringBuilder backURL = new StringBuilder(tempURL);
		Enumeration enumer = request.getParameterNames();

		if (enumer.hasMoreElements()) {
			backURL.append("?");
		}

		String paramKey = null;
		while (enumer.hasMoreElements()) {
			paramKey = (String) enumer.nextElement();

			String[] paramValues = request.getParameterValues(paramKey);
			if ((paramValues == null) || (paramValues.length == 0)) {
				paramValues = new String[0];
			}
			try {
				if (paramValues.length > 1) {
					for (int index = 0; index < paramValues.length; ++index)
						backURL.append(paramKey).append("=").append(URLEncoder.encode(paramValues[index], charset))
								.append("&");
				} else
					backURL.append(paramKey).append("=")
							.append(URLEncoder.encode(request.getParameter(paramKey), charset)).append("&");
			} catch (UnsupportedEncodingException e) {
				LOG.error("exception", e);
				e.printStackTrace();
			}
		}

		String retStr = backURL.toString();

		if ("&".equals(retStr.substring(retStr.length() - 1, retStr.length()))) {
			retStr = retStr.substring(0, retStr.lastIndexOf(38));
		}
		return retStr;
	}

	public static String makeBackURI(HttpServletRequest request, String charset) {
		String requestURI = request.getRequestURI();

		StringBuilder backURI = new StringBuilder(requestURI);
		Enumeration enumer = request.getParameterNames();

		if (enumer.hasMoreElements()) {
			backURI.append("?");
		}

		String paramKey = null;
		while (enumer.hasMoreElements()) {
			paramKey = (String) enumer.nextElement();

			String[] paramValues = request.getParameterValues(paramKey);
			if ((paramValues == null) || (paramValues.length == 0)) {
				paramValues = new String[0];
			}
			try {
				if (paramValues.length > 1) {
					for (int index = 0; index < paramValues.length; ++index)
						backURI.append(paramKey).append("=").append(URLEncoder.encode(paramValues[index], charset))
								.append("&");
				} else
					backURI.append(paramKey).append("=")
							.append(URLEncoder.encode(request.getParameter(paramKey), charset)).append("&");
			} catch (UnsupportedEncodingException e) {
				LOG.error("exception", e);
				e.printStackTrace();
			}
		}

		String retStr = backURI.toString();

		if ("&".equals(retStr.substring(retStr.length() - 1, retStr.length()))) {
			retStr = retStr.substring(0, retStr.lastIndexOf(38));
		}
		return retStr;
	}

	public static String getInitParam(HttpServletRequest request, String key) {
		HttpSession session = request.getSession();
		ServletContext context = null;
		String value = "";
		if (session != null) {
			context = session.getServletContext();
		}

		if (context != null) {
			value = context.getInitParameter(key);
		}

		return ((value == null) ? "" : value);
	}

	public static String getParameterKeyValue(HttpServletRequest request, String charset) {
		StringBuilder returnValue = new StringBuilder();
		Enumeration enumer = request.getParameterNames();

		String paramKey = null;
		while (enumer.hasMoreElements()) {
			paramKey = (String) enumer.nextElement();

			String[] paramValues = request.getParameterValues(paramKey);
			if ((paramValues == null) || (paramValues.length == 0)) {
				paramValues = new String[0];
			}
			try {
				if (paramValues.length > 1) {
					for (int index = 0; index < paramValues.length; ++index) {
						returnValue.append("{").append(paramKey).append("=")
								.append(URLEncoder.encode(paramValues[index], charset)).append("},");
					}
				} else {
					returnValue.append("{").append(paramKey).append("=")
							.append(URLEncoder.encode(request.getParameter(paramKey), charset)).append("},");
				}
			} catch (UnsupportedEncodingException e) {
				LOG.error("exception", e);
				e.printStackTrace();
			}

		}

		String returnString = returnValue.toString();
		if ((StringUtils.isNotEmpty(returnString)) && (",".equals(returnString.substring(returnString.length() - 1)))) {
			returnString = returnString.substring(0, returnString.lastIndexOf(44));
		}
		return returnString;
	}
}