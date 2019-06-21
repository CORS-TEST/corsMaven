/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 */
package core.exception.system;

public class SystemException extends RuntimeException {

	private static final long serialVersionUID = 5882031904858227366L;
	private String errorCode;
	private String excepitonNo = null;

	public SystemException() {
	}

	public SystemException(Throwable e) {
		super(e);
		this.errorCode = "-1";
	}

	public SystemException(String errorCode) {
		super(errorCode);
		this.errorCode = errorCode;
	}

	public void setExceptionNo(String exceptionNo) {
		this.excepitonNo = exceptionNo;
	}

	public String getExceptionNo() {
		return this.excepitonNo;
	}
}