/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 */
package core.vo.model.coreset;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

/**
 * 기초가되는 paramset. 수정이 필요한사항 toString : 새로운 dataset이 추가될경우. 메시지 유틸이 완성되었을경우.
 * 
 */
public abstract class DefaultParamSet extends HashMap implements CoreParamSet {

	private Locale locale = null;
	private static final long serialVersionUID = 5615764047870555398L;

	public void setCoreDataSet(String datasetName, CoreDataSet dataset) {
		put(datasetName, dataset);
	}

	public Object getVariable(String key) {
		Object obj = get(key);
		if (obj != null) {
			return obj;
		}
		return "";
	}

	public List getVariableAsList(String key) {
		if (get(key) == null) {
			return new ArrayList();
		}
		String raw = get(key).toString();
		if (raw.length() <= 2) {
			return new ArrayList();
		}
		raw = raw.substring(1, raw.length() - 1);
		String[] vars = raw.split(",");
		return Arrays.asList(vars);
	}

	public Integer getVariableAsInteger(String key) {
		Object obj = get(key);
		if (obj != null) {
			return Integer.valueOf(Integer.parseInt(obj.toString()));
		}
		return Integer.valueOf(0);
	}

	public String getVariableAsString(String key) {
		Object obj = get(key);
		if (obj != null) {
			return obj.toString();
		}
		return "";
	}

	public void setErrorMessage(String code) {
		setVariable("ErrorCode", Integer.valueOf(-1));
		setVariable("SVC_ERR_MSG_CD", code);

		remove("SVC_MSG_CD");
		remove("SVC_MSG_TEXT");
		remove("SVC_STS_MSG_CD");
		remove("SVC_STS_MSG_TEXT");
	}

	public void setErrorMessage(String code, Object[] bindArgs) {
		setVariable("ErrorCode", Integer.valueOf(-1));
		setVariable("SVC_ERR_MSG_CD", code);
		setVariable("SVC_BIND_MSG", "에러메시지args");
		setVariable("SVC_ERR_MSG_TEXT", "에러메시지");

		remove("SVC_MSG_CD");
		remove("SVC_MSG_TEXT");

		remove("SVC_STS_MSG_CD");
		remove("SVC_STS_MSG_TEXT");
	}

	public void setMessage(String code) {
		setVariable("ErrorCode", Integer.valueOf(0));
		setVariable("SVC_MSG_CD", code);
		setVariable("SVC_MSG_TEXT", "메시지");

		remove("SVC_STS_MSG_CD");
		remove("SVC_STS_MSG_TEXT");
	}

	public void setMessage(String code, Object[] bindArgs) {
		setVariable("ErrorCode", Integer.valueOf(0));
		setVariable("SVC_MSG_CD", code);
		setVariable("SVC_BIND_MSG", "메시지args");
		setVariable("SVC_MSG_TEXT", "메시지");

		remove("SVC_STS_MSG_CD");
		remove("SVC_STS_MSG_TEXT");
	}

	public void setStatusMessage(String code) {
		setVariable("ErrorCode", Integer.valueOf(0));
		setVariable("SVC_STS_MSG_CD", code);
		setVariable("SVC_STS_MSG_TEXT", "메시지");

		remove("SVC_MSG_CD");
		remove("SVC_MSG_TEXT");
	}

	public void setStatusMessage(String code, Object[] bindArgs) {
		setVariable("ErrorCode", Integer.valueOf(0));
		setVariable("SVC_STS_MSG_CD", code);
		setVariable("SVC_BIND_MSG", "메시지args");
		setVariable("SVC_STS_MSG_TEXT", "메시지");

		remove("SVC_MSG_CD");
		remove("SVC_MSG_TEXT");
	}

	public void setErrorCode(int code) {
		setVariable("ErrorCode", Integer.valueOf(code));
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

	public void populateFromHttpRequest(HttpServletRequest request) {
		for (Iterator i$ = request.getParameterMap().entrySet().iterator(); i$.hasNext();) {
			Object obj = i$.next();
			Map.Entry mapEntry = (Map.Entry) obj;
			if ((mapEntry.getValue() != null) && (mapEntry.getValue() instanceof Object[])) {
				Object[] objArr = (Object[]) (Object[]) mapEntry.getValue();
				if (objArr.length == 1)
					put(mapEntry.getKey(), objArr[0]);
				else
					put(mapEntry.getKey(), objArr);
			} else {
				put(mapEntry.getKey(), mapEntry.getValue());
			}
		}
	}

	public Locale getLocale() {
		return this.locale;
	}

	public void setLocale(Locale locale) {
		this.locale = locale;
	}
}