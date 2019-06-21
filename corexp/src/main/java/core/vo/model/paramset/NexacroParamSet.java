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
import javax.servlet.http.HttpSession;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.nexacro.xapi.data.Variable;
import com.nexacro.xapi.data.VariableList;

import core.common.util.CodeUtil;
import core.vo.model.coreset.CoreDataSet;
import core.vo.model.coreset.CoreDataSetFactory;
import core.vo.model.coreset.CoreParamSet;
import core.vo.model.dataset.NexacroDataSet;

public class NexacroParamSet extends HashMap implements CoreParamSet {
	private static final Log LOG = LogFactory.getLog(NexacroParamSet.class);
	private VariableList variableList;
	
	public NexacroParamSet() {
		this.variableList = new VariableList();
	}

	public void setVariableList(VariableList variableList) {
		this.variableList = variableList;
	}

	private Map getVariableListMap(VariableList variableList) {
		Map variableListMap = new HashMap();
		 
		List keyList = variableList.keyList();
		List valueList = variableList.valueList();

		Iterator keyIterator = keyList.iterator();
		Iterator valueIterator = valueList.iterator();

		while ((keyIterator.hasNext()) && (valueIterator.hasNext())) {
			String variableKey = (String) keyIterator.next();
			Object variableValue = valueIterator.next();

			if (variableKey.indexOf(46) == -1) {
				variableListMap.put(variableKey, variableValue);
			}
		}
		return variableListMap;
	}

	public Object get(Object key) {
		Object result = super.get(key);
		if (result == null) {
			return null;
		}
		Object finalReturn = null;
		if (result.getClass().equals(Variable.class)) {
			Variable var = (Variable) result;

			switch (var.getType()) {
			case 3:
				finalReturn = Integer.valueOf(var.getInt());
				break;
			case 4:
				finalReturn = Boolean.valueOf(var.getBoolean());
				break;
			case 5:
				finalReturn = Long.valueOf(var.getLong());
				break;
			case 6:
				finalReturn = Float.valueOf(var.getFloat());
				break;
			case 7:
				finalReturn = Double.valueOf(var.getDouble());
				break;
			case 8:
				finalReturn = var.getDecimal();
				break;
			case 9:
			case 10:
			case 11:
				finalReturn = var.getDateTime();
				break;
			case 12:
				finalReturn = var.getBlob();
				break;
			default:
				finalReturn = var.getString();// (this.useXSS.booleanValue()) ?
												// getXssShield().stripXss(var.getString())
												// : var.getString();
			}

			return finalReturn;
		}
		return result;
	}

	@Override
	public NexacroDataSet getCoreDataSet(String paramString) {
		Object obj = get(paramString);
		if (obj != null) {
			if (obj instanceof NexacroDataSet) {
				NexacroDataSet data = (NexacroDataSet) obj;
				if (this.variableList != null) {
					data.putAll(getVariableListMap(this.variableList));
				}
				
				return ((NexacroDataSet) obj);
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
		put(paramString, paramObject);
		this.variableList.add(paramString, paramObject);
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

		// remove("ErrorMsg");
	}

	@Override
	public void setErrorMessage(String paramString, Object[] paramArrayOfObject) {

		setVariable("ErrorCode", Integer.valueOf(-1));
		setVariable("ErrorMsg", paramString);
		// remove("ErrorMsg");
	}

	@Override
	public void setMessage(String paramString) {
		setVariable("ErrorCode", 0);
		setVariable("ErrorMsg", paramString);

		// remove("ErrorMsg");
	}

	@Override
	public void setMessage(String paramString, Object[] paramArrayOfObject) {
		setVariable("ErrorCode", 0);
		setVariable("ErrorMsg", paramString);

		// remove("ErrorMsg");

	}

	@Override
	public void setStatusMessage(String paramString) {
		setVariable("ErrorCode", 0);
		setVariable("ErrorMsg", paramString);

		// remove("ErrorMsg");
	}

	@Override
	public void setStatusMessage(String paramString, Object[] paramArrayOfObject) {
		setVariable("ErrorCode", 0);
		setVariable("ErrorMsg", paramString);

		// remove("ErrorMsg");
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
