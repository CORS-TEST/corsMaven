/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 */
package core.vo.model.paramset;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.json.simple.JSONObject;

import core.vo.model.coreset.CoreDataSet;
import core.vo.model.coreset.CoreDataSetFactory;
import core.vo.model.coreset.CoreParamSet;
import core.vo.model.dataset.HtmlDataSet;

/**
 * core.vo.model.paramset HtmlParamSet.java
 * 
 * @author : mjpark
 * @Date : 2017. 7. 18.<br>
 *       {variable:value,datasetname:{},ErrorCode:int,ErrorMsg:String}
 */
public class HtmlParamSet extends HashMap implements CoreParamSet {
	private static final Log LOG = LogFactory.getLog(HtmlParamSet.class);
	// private HashMap hash;

	public HtmlParamSet() {
		// this.hash = new HashMap();
		setVariable("ErrorCode", Integer.valueOf(0));
		setVariable("ErrorMsg", "");
	}

	public Object get(Object key) {
		Object result = super.get(key);
		if (result == null) {
			return null;
		}
		return result;
	}

	private Map getVariableListMap() {
		return this;
	}

	public String toString() {
		StringBuilder result = new StringBuilder("{ ");
		for (Iterator i$ = keySet().iterator(); i$.hasNext();) {
			Object key = i$.next();
			result.append(key).append(":").append(get(key)).append(", ");
		}
		if (result.lastIndexOf(",") > 0) {
			result.deleteCharAt(result.lastIndexOf(","));
		}
		result.append(" }");
		return result.toString();
	}

	@Override
	public CoreDataSet getCoreDataSet(String paramString) {
		Object obj = get(paramString);
		if (obj != null) {
			if (obj instanceof HtmlDataSet) {
				// HtmlDataSet data = new HtmlDataSet();
				// data.putAll(getVariableListMap());
				return ((HtmlDataSet) obj);
			}
		}
		return null;
	}

	@Override
	public CoreDataSet getCoreDataSetInstance() {
		return CoreDataSetFactory.getDataSet(this);
	}

	@Override
	public void setCoreDataSet(String paramString, CoreDataSet paramCoreDataSet) {
		put(paramString, paramCoreDataSet);
	}

	@Override
	public Object getVariable(String paramString) {
		Object obj = get(paramString);
		if (obj != null) {
			return obj;
		}
		return "";
	}

	@Override
	public void setVariable(String paramString, Object paramObject) {
		if (paramObject instanceof Map) {
			CoreDataSet dataset = new HtmlDataSet(paramString, (List) ((Map) paramObject).get("data"),
					(List) ((Map) paramObject).get("deleteDAta"));
			setCoreDataSet(paramString, dataset);
		} else if (paramObject instanceof HashMap) {
			CoreDataSet dataset = new HtmlDataSet(paramString, (List) ((Map) paramObject).get("data"),
					(List) ((Map) paramObject).get("deleteDAta"));
			setCoreDataSet(paramString, dataset);
		} else if (paramObject instanceof JSONObject) {
			CoreDataSet dataset = new HtmlDataSet(paramString, (List) ((Map) paramObject).get("data"),
					(List) ((Map) paramObject).get("deleteDAta"));
			setCoreDataSet(paramString, dataset);
		} else if (paramObject instanceof String) {
			put(paramString, (String) paramObject);
		} else {
			put(paramString, paramObject);
		}
	}

	@Override
	public List getVariableAsList(String paramString) {
		if (get(paramString) == null) {
			return new ArrayList();
		}
		String raw = get(paramString).toString();
		if (raw.length() <= 2) {
			return new ArrayList();
		}
		raw = raw.substring(1, raw.length() - 1);
		String[] vars = raw.split(",");
		return Arrays.asList(vars);
	}

	@Override
	public Integer getVariableAsInteger(String paramString) {
		Object obj = get(paramString);
		if (obj != null) {
			return Integer.valueOf(Integer.parseInt(obj.toString()));
		}
		return Integer.valueOf(0);
	}

	@Override
	public String getVariableAsString(String paramString) {
		Object obj = get(paramString);
		if (obj != null) {
			return obj.toString();
		}
		return "";
	}

	@Override
	public void setErrorMessage(String paramString) {
		setVariable("ErrorCode", Integer.valueOf(-1));
		setVariable("ErrorMsg", paramString);
	}

	@Override
	public void setErrorMessage(String paramString, Object[] paramArrayOfObject) {
		setVariable("ErrorCode", Integer.valueOf(-1));
		setVariable("ErrorMsg", paramString);
	}

	@Override
	public void setMessage(String paramString) {
		setVariable("ErrorCode", 0);
		setVariable("ErrorMsg", paramString);
	}

	@Override
	public void setMessage(String paramString, Object[] paramArrayOfObject) {
		setVariable("ErrorCode", 0);
		setVariable("ErrorMsg", paramString);
	}

	@Override
	public void setStatusMessage(String paramString) {
		setVariable("ErrorCode", 0);
		setVariable("ErrorMsg", paramString);
	}

	@Override
	public void setStatusMessage(String paramString, Object[] paramArrayOfObject) {
		setVariable("ErrorCode", 0);
		setVariable("ErrorMsg", paramString);
	}

	@Override
	public void setErrorCode(int paramInt) {
		setVariable("ErrorCode", Integer.valueOf(paramInt));
	}

	@Override
	public void populateFromHttpRequest(HttpServletRequest paramHttpServletRequest) {
		// TODO Auto-generated method stub

	}

	@Override
	public CoreParamSet getOriginalParameters() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void setUseXSS(Boolean paramBoolean) {
		// TODO Auto-generated method stub

	}

}
