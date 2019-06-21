package core.exception.manager;

import org.apache.commons.logging.Log;
/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 */
import org.apache.commons.logging.LogFactory;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;

import core.exception.system.SystemException;
import core.exception.userhandle.UserHandleException;

@Aspect
public class ExceptionManager {

	private static final Log LOG = LogFactory.getLog(ExceptionManager.class);

	@AfterThrowing(pointcut = "(execution(* *..service.*Service.*(..)))", throwing = "ex")
	public void exceptionHandler(JoinPoint joinPoint, Throwable ex) throws Throwable {
		ex.printStackTrace();
		if (LOG.isErrorEnabled()) {
			LOG.error("exceptionHandler called!!!!!!!! : " + ex);
		} else {
			ex.printStackTrace();
		}
		if (ex instanceof UserHandleException) {
			throw ex;
		}

		SystemException systemException = new SystemException(ex);

		systemException.setExceptionNo("-1");

		throw systemException;
	}
}
