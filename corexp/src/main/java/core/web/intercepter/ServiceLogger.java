/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 */
package core.web.intercepter;

import org.apache.commons.lang3.time.StopWatch;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;

@Aspect
public class ServiceLogger {

	private static final Log LOG = LogFactory.getLog(ServiceLogger.class);

	@Pointcut("execution(* *..service.*Service.*(..))")
	public void serviceMethods() {
		if (LOG.isDebugEnabled())
			LOG.debug("## ServiceLogger serviceMethods");
	}

	@Around("serviceMethods()")
	public Object serviceMethodProfile(ProceedingJoinPoint joinPoint) throws Throwable {
		StopWatch stopWatch = new StopWatch();
		String methodName = joinPoint.getSignature().toShortString();
		if (LOG.isInfoEnabled()) {
			stopWatch = new StopWatch();
			String target = joinPoint.getTarget().toString();
			methodName = joinPoint.getSignature().toShortString();
			String classPath = target.substring(0, target.lastIndexOf(64));

			StringBuilder logMessage = new StringBuilder(classPath);
			logMessage.append(".").append(methodName).append("() called.");
			LOG.info(logMessage);

			stopWatch.start();
		}

		Object result = joinPoint.proceed();

		if (LOG.isInfoEnabled()) {
			stopWatch.stop();

			StringBuilder elapsedTime = new StringBuilder("Service method [");
			elapsedTime.append(methodName).append("] elapsed time : ");
			elapsedTime.append(stopWatch.getTime()).append(" ms.");
			LOG.info(elapsedTime);
		}
		return result;
	}
}