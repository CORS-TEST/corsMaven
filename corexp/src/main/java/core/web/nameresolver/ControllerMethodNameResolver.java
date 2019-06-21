/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 */
package core.web.nameresolver;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.servlet.mvc.multiaction.MethodNameResolver;
import org.springframework.web.servlet.mvc.multiaction.NoSuchRequestHandlingMethodException;

public class ControllerMethodNameResolver implements MethodNameResolver {

	public String getHandlerMethodName(HttpServletRequest arg0) throws NoSuchRequestHandlingMethodException {
		return "commonController";
	}
}