/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 */
package core.vo.model.coreset;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

/**
 * TOP VO
 * 
 */
public abstract interface CoreParamSet extends Map, Serializable {

	public abstract CoreDataSet getCoreDataSet(String paramString);

	public abstract CoreDataSet getCoreDataSetInstance();

	public abstract void setCoreDataSet(String paramString, CoreDataSet paramCoreDataSet);

	public abstract Object getVariable(String paramString);

	public abstract void setVariable(String paramString, Object paramObject);

	public abstract List getVariableAsList(String paramString);

	public abstract Integer getVariableAsInteger(String paramString);

	public abstract String getVariableAsString(String paramString);

	public abstract void setErrorMessage(String paramString);

	public abstract void setErrorMessage(String paramString, Object[] paramArrayOfObject);

	public abstract void setMessage(String paramString);

	public abstract void setMessage(String paramString, Object[] paramArrayOfObject);

	public abstract void setStatusMessage(String paramString);

	public abstract void setStatusMessage(String paramString, Object[] paramArrayOfObject);

	public abstract void setErrorCode(int paramInt);

	public abstract String toString();

	public abstract void populateFromHttpRequest(HttpServletRequest paramHttpServletRequest);

	public abstract CoreParamSet getOriginalParameters();

	public abstract void setUseXSS(Boolean paramBoolean);
}