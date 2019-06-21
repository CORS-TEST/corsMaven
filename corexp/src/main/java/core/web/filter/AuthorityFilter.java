/**
 * Copyright (c) 2011 CJ OliveNetworks All rights reserved.
 *
 * This software is the proprietary information of CJ OliveNetworks
 */
package core.web.filter;

import java.io.IOException;
import java.util.Locale;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;
import org.springframework.web.servlet.FrameworkServlet;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;

/**
 *
 * The class AuthorityFilter (접근권한 체크 필터)<br>
 * <br>
 * 수행로직<br>
 *
 * @version 1.0
 *
 */
public class AuthorityFilter implements Filter {

	private static final Log LOG = LogFactory.getLog(AuthorityFilter.class);
	private FilterConfig config;
	public static final String LOGIN_SUCCESS_YN = "LOGIN_SUCCESS_YN";

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {

		HttpServletRequest hReq = (HttpServletRequest) request;
		HttpSession session = hReq.getSession();

		// 체인 넘기기
		chain.doFilter(request, response);
	}

	/**
	 * SessionLocaleResolver를 사용하여 현재 로케일을 획득한다.
	 *
	 * @param request
	 * @return locale 로케일
	 */
	private Locale getLocale(HttpServletRequest hReq) {

		WebApplicationContext webApplicationContext = WebApplicationContextUtils.getWebApplicationContext(
				config.getServletContext(), FrameworkServlet.SERVLET_CONTEXT_PREFIX + "dispatcher");
		// 에러메세지 출력시 국제화 적용을 위한 변수
		SessionLocaleResolver sessionLocaleResolver = null;
		if (webApplicationContext == null) {
			// log.debug(" webApplicationContext is null");
			sessionLocaleResolver = new SessionLocaleResolver();
		} else {
			// log.debug(" webApplicationContext is not null");
			sessionLocaleResolver = (SessionLocaleResolver) webApplicationContext.getBean("sessionLocaleResolver");
		}

		Locale locale = sessionLocaleResolver.resolveLocale(hReq);
		if (LOG.isDebugEnabled()) {
			LOG.debug(" locale : " + locale);
		}

		return locale;
	}

	@Override
	public void init(FilterConfig config) throws ServletException {
		if (LOG.isDebugEnabled()) {
			LOG.debug("AuthorityFilter init()");
		}

		this.config = config;
	}

	@Override
	public void destroy() {
		if (LOG.isDebugEnabled()) {
			LOG.debug("AuthorityFilter destroy()");
		}
	}

}
