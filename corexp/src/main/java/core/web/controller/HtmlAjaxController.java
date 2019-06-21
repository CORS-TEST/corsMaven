package core.web.controller;

import java.io.IOException;
import java.util.Enumeration;
import java.util.Iterator;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import core.common.util.ReflectionUtils;
import core.exception.userhandle.UserHandleException;
import core.vo.model.coreset.CoreParamSet;
import core.vo.model.coreset.CoreParamSetFactory;
import core.vo.model.paramset.HtmlParamSet;

public class HtmlAjaxController extends CoreController {
	private static final Log LOG = LogFactory.getLog(HtmlAjaxController.class);

	public void commonController(HttpServletRequest request, HttpServletResponse response) throws IOException {
		CoreParamSet params = parseJsonData(request);
		String uri = request.getRequestURI();
		String service = uri.substring(uri.lastIndexOf(47) + 1, uri.lastIndexOf(46));
		String serviceBeanName = service.substring(service.lastIndexOf(46) + 1);
		if (!(Character.isUpperCase(serviceBeanName.charAt(1)))) {
			serviceBeanName = StringUtils.uncapitalize(serviceBeanName);
		}
		String methodName = uri.substring(uri.lastIndexOf(46) + 1);

		if (LOG.isDebugEnabled()) {
			LOG.debug("===========================================================");
			LOG.debug("URI : " + uri);
			LOG.debug("Service class : " + service);
			LOG.debug("service bean name : " + serviceBeanName);
			LOG.debug("method name : " + methodName);
			LOG.debug("===========================================================");
		}

		Object result = null;
		try {
			ReflectionUtils.getClass(service);
			result = ReflectionUtils.invokeMethod(serviceBeanName, methodName, params, CoreParamSet.class);
			if (result instanceof HtmlParamSet) {
				writeResponseToJson(request, response, (HtmlParamSet) HtmlParamSet.class.cast(result));
			} else {
				writeResponseToJson(request, response, (HtmlParamSet) HtmlParamSet.class.cast(params));
			}
		} catch (Exception e) {
			if (e instanceof UserHandleException) {
				params.setErrorCode(((UserHandleException) e).getErrorCode());
				params.setErrorMessage(e.getMessage());
			} else {
				params.setErrorCode(-1);
				params.setErrorMessage("시스템에 문제가 발생했습니다.");
			}
			writeResponseToJson(request, response, (HtmlParamSet) HtmlParamSet.class.cast(params));
		} finally {

		}
	}

	protected CoreParamSet parseJsonData(HttpServletRequest request) {
		HtmlParamSet parameters = CoreParamSetFactory.create(HtmlParamSet.class);
		StringBuilder returnValue = new StringBuilder();
		Enumeration enumer = request.getParameterNames();
		String paramKey = "";
		JSONObject obj = new JSONObject();

		while (enumer.hasMoreElements()) {
			String element = (String) enumer.nextElement();
			if (element != null) {
				paramKey += element;
			}
		}
		JSONParser parse = new JSONParser();
		try {
			obj = (JSONObject) parse.parse(paramKey);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		Set key = obj.keySet();
		for (Iterator iterator = key.iterator(); iterator.hasNext();) {
			String keyName = (String) iterator.next();
			Object valueName = obj.get(keyName);
			parameters.setVariable(keyName, valueName);
		}

		return parameters;
	}

	protected void writeResponseToJson(HttpServletRequest request, HttpServletResponse response, HtmlParamSet params)
			throws IOException {
		JSONObject obj = new JSONObject(params);
		response.setContentType("application/x-json; charset=UTF-8");
		response.getWriter().print(obj);
	}
}
