/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 */
package core.exception.userhandle;

import core.common.util.NoticeMessageUtil;

public class UserHandleException extends RuntimeException {

	private static final long serialVersionUID = -8838508461104216866L;
	private int errorCode;
	private String errorMsgCode;
	private String errorMsg;
	private Object[] args;

	public UserHandleException(Throwable throwable) {
		super(throwable);
	}

	public UserHandleException(String errorCode, String errorMsgCode) {
		super(errorMsgCode);
		this.errorCode = Integer.parseInt(errorCode);
		this.errorMsg = NoticeMessageUtil.getMessage(errorMsgCode);
	}

	public UserHandleException(String errorCode, String errorMsgCode, Throwable throwable) {
		super(errorMsgCode, throwable);
		this.errorCode = Integer.parseInt(errorCode);
		this.errorMsg = NoticeMessageUtil.getMessage(errorMsgCode);
	}

	public Integer getErrorCode() {
		return this.errorCode;
	}

	public void setErrorCode(String errorCode) {
		this.errorCode = Integer.parseInt(errorCode);
	}

	public String getErrorMsg() {
		return this.errorMsg;
	}

	public void setErrorMsg(String errorMsg) {
		this.errorMsg = errorMsg;
	}

}