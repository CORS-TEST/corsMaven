/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 */
package core.web.intercepter;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.context.ApplicationContext;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.TransactionCallback;
import org.springframework.transaction.support.TransactionTemplate;

import core.common.context.ApplicationContextProvider;
import core.exception.system.SystemException;
import core.exception.userhandle.UserHandleException;
import core.vo.model.coreset.CoreParamSet;

@Aspect
public class CoreModuleIntercepter {
	private static final Log LOG = LogFactory.getLog(CoreModuleIntercepter.class);

	@Pointcut("execution(* *..module.*Module.*(..))")
	public void serviceMethods() {
	}

	@Around("serviceMethods()")
	public Object serviceMethodProfile(ProceedingJoinPoint joinPoint) throws Throwable {
		Object[] obj = joinPoint.getArgs();
		/*
		 * when not propagation on input parameter
		 */
		if ((obj.length == 0) || (!(obj[0] instanceof CoreParamSet)) || (obj.length != 2)) {
			return joinPoint.proceed();
		}
		/*
		 * when propagation on input parameter
		 * 
		 */
		int propagation = ((Integer) obj[1]).intValue();

		ApplicationContext applicationContext = ApplicationContextProvider.getApplicationContext();

		PlatformTransactionManager transactionManager = (PlatformTransactionManager) applicationContext
				.getBean("transactionManager");
		TransactionTemplate transactionTemplate = new TransactionTemplate(transactionManager);
		transactionTemplate.setPropagationBehavior(propagation);

		class TrCallback implements TransactionCallback {
			ProceedingJoinPoint joinPoint;

			TrCallback(ProceedingJoinPoint joinPoint) {
				this.joinPoint = joinPoint;
			}

			@Override
			public Object doInTransaction(TransactionStatus status) {
				Object result = null;
				try {
					joinPoint.proceed();
				} catch (UserHandleException ue) {
					status.setRollbackOnly();
					CoreModuleIntercepter.LOG.error("UserHandleException", ue);
					throw ue;
				} catch (SystemException re) {
					status.setRollbackOnly();
					CoreModuleIntercepter.LOG.error("SystemException", re);
					throw re;
				} catch (Throwable e) {
					e.printStackTrace();
					status.setRollbackOnly();
					CoreModuleIntercepter.LOG.error("Throwable", e);
					throw new SystemException(e);
				}
				return result;
			}

		}

		return transactionTemplate.execute(new TrCallback(joinPoint));
	}
}
