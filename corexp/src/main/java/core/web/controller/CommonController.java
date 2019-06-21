package core.web.controller;

import java.io.IOException;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Iterator;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.nexacro.xapi.data.DataSetList;
import com.nexacro.xapi.data.PlatformData;
import com.nexacro.xapi.data.VariableList;
import com.nexacro.xapi.tx.HttpPlatformRequest;
import com.nexacro.xapi.tx.HttpPlatformResponse;
import com.nexacro.xapi.tx.PlatformException;
import com.nexacro.xapi.tx.PlatformType;

import core.common.util.ReflectionUtils;
import core.exception.userhandle.UserHandleException;
import core.sql.SqlManager;
import core.sql.SqlManagerFactory;
import core.vo.model.coreset.CoreDataSetFactory;
import core.vo.model.coreset.CoreParamSet;
import core.vo.model.dataset.NexacroDataSet;
import core.vo.model.paramset.NexacroParamSet;

public class CommonController extends CoreController {
	private static final Log LOG = LogFactory.getLog(CommonController.class);

	public void commonController(HttpServletRequest request, HttpServletResponse response) throws IOException {
		CoreParamSet params = parseNexacroData(request);
		String agent = request.getHeader("User-Agent");
		String uri = request.getRequestURI();
		String service = uri.substring(uri.lastIndexOf(47) + 1, uri.lastIndexOf(46));
		String serviceBeanName = service.substring(service.lastIndexOf(46) + 1);
		if (!(Character.isUpperCase(serviceBeanName.charAt(1)))) {
			serviceBeanName = StringUtils.uncapitalize(serviceBeanName);
		}
		String methodName = uri.substring(uri.lastIndexOf(46) + 1);
/*		if (LOG.isDebugEnabled()) {
			LOG.debug("===========================================================");
			LOG.debug("URI : " + uri);
			LOG.debug("Service class : " + service);
			LOG.debug("service bean name : " + serviceBeanName);
			LOG.debug("method name : " + methodName);
			LOG.trace("params : " + params);
			LOG.debug("===========================================================");
		}*/

		String ip = request.getHeader("X-FORWARDED-FOR");
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getHeader("Proxy-Client-IP");
		}
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getHeader("WL-Proxy-Client-IP");
		}
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getHeader("HTTP_CLIENT_IP");
		}
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getHeader("HTTP_X_FORWARDED_FOR");
		}
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getRemoteAddr();
		}

		HttpSession session = request.getSession();
		String userId = "";
		if (session != null) {
			userId = (String) session.getAttribute("G_USER_ID");
		}

		SqlManager sqlManager = SqlManagerFactory.getSqlManager();

		HashMap logMap = new HashMap();
		logMap.put("SVC_NM", service);
		logMap.put("METHOD", methodName);
		logMap.put("PARAMETER", params.toString());
		logMap.put("CON_USR_IP", ip);
		logMap.put("TYPE", "A");
		logMap.put("REQR_ID", userId);
		logMap.put("TRACE_LOG", "");

		sqlManager.insertRequiresNew(logMap, "AccessNexaLog.insertMmSysPgmHstr");

		Object result = null;
		try {
			ReflectionUtils.getClass(service);
			result = ReflectionUtils.invokeMethod(serviceBeanName, methodName, params, CoreParamSet.class);
			if (result instanceof NexacroParamSet) {
				writeResponseToNexacro(request, response, (NexacroParamSet) NexacroParamSet.class.cast(result));
			} else {
				writeResponseToNexacro(request, response, (NexacroParamSet) NexacroParamSet.class.cast(params));
			}
		} catch (Exception e) {

			logMap.put("SVC_NM", service);
			logMap.put("METHOD", methodName);
			logMap.put("PARAMETER", params.toString());
			logMap.put("CON_USR_IP", ip);
			logMap.put("TYPE", "E");
			logMap.put("REQR_ID", userId);
			logMap.put("TRACE_LOG", e.toString());

			sqlManager.insertRequiresNew(logMap, "AccessNexaLog.insertMmSysPgmHstr");
			LOG.error(e.toString());

			if (e instanceof UserHandleException) {
				params.setErrorCode(((UserHandleException) e).getErrorCode());
				params.setErrorMessage(e.getMessage());
			} else {
				// logMap.clear();
				// logMap.put("Server",
				// Config.getString("ERRORLOGINFO.SERVER"));
				// logMap.put("Site", Config.getString("ERRORLOGINFO.SITE"));
				// logMap.put("ErrorUrl", uri);
				// logMap.put("ErrorFunction", methodName);
				// logMap.put("StackTrace", e.toString());
				// logMap.put("CustomMessage", e.getClass().getName());
				// logMap.put("SystemMessage", e.getClass().getName());
				// logMap.put("ClientUserID", userId);
				// logMap.put("ClientIP", ip);
				// logMap.put("UserAgent", agent);
				// logMap.put("SourceOwner",
				// Config.getString("ERRORLOGINFO.SOURCEOWNER"));
				// logMap.put("WebserviceName", service);
				// logMap.put("JSONRequest", params.toString());
				// sqlManager.insertRequiresNew(logMap,
				// "AccessNexaLog.insertErrorLog");
				params.setErrorCode(-1);
				// 시스템에 문제가 발생했습니다.
				params.setErrorMessage("SYSTEM ERROR");
			}
			writeResponseToNexacro(request, response, (NexacroParamSet) NexacroParamSet.class.cast(params));
		} finally {

		}
	}

	protected NexacroParamSet parseNexacroData(HttpServletRequest request) {
		NexacroParamSet parameters = null;
		DataSetList datasetList = null;
		VariableList variableList = null;
		try {
			HttpPlatformRequest req = new HttpPlatformRequest(request, PlatformType.CONTENT_TYPE_SSV);

			req.receiveData();
			PlatformData platformData = req.getData();
			datasetList = platformData.getDataSetList();
			variableList = platformData.getVariableList();
			parameters = ((NexacroDataSet) CoreDataSetFactory.getDataSet(NexacroDataSet.class))
					.putDatasetAndVariable(datasetList, variableList);

			HttpSession session = request.getSession();
			if (parameters != null) {
				parameters.setVariable("remoteNetworkAddress", (String) request.getAttribute("remoteNetworkAddress"));
				// parameters.setLocale(LocaleUtil.getUserLocale(session));

				Enumeration attrNames = session.getAttributeNames();
				while (attrNames.hasMoreElements()) {
					String attrName = (String) attrNames.nextElement();
					parameters.setVariable(attrName, session.getAttribute(attrName));
				}
			}

		} catch (PlatformException e) {
			if (LOG.isErrorEnabled()) {
				LOG.error(e, e);
			}
		}
		return parameters;
	}

	protected void writeResponseToNexacro(HttpServletRequest request, HttpServletResponse response,
			NexacroParamSet params) throws IOException {
		LOG.debug("writeResponseToNexacro [" + params.getVariable("ErrorCode") + "][" + params.getVariable("ErrorMsg")
				+ "]");
		HttpServletRequest curRequest = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes())
				.getRequest();

		DataSetList datasetList = new DataSetList();
		VariableList variableList = new VariableList();
		for (Iterator i$ = params.keySet().iterator(); i$.hasNext();) {
			Object key = i$.next();
			if (params.get(key) instanceof NexacroDataSet) {
				params.getCoreDataSet(key.toString()).getDataSet().setName(key.toString());
				datasetList.add(params.getCoreDataSet(key.toString()).getDataSet());
			} else {
				variableList.add(key.toString(), params.getVariable(key.toString()));
			}
		}
		try {
			HttpPlatformRequest req = new HttpPlatformRequest(request);
			HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_SSV);

			PlatformData platformData = new PlatformData();
			platformData.setDataSetList(datasetList);
			platformData.setVariableList(variableList);
			res.setData(platformData);
			res.sendData();
		} catch (PlatformException e) {
			if (LOG.isErrorEnabled()) {
				LOG.error(e, e);
			}
		}
	}
}
