/**
 * Copyright (c) 2011 CJ OliveNetworks All rights reserved.
 *
 * This software is the proprietary information of CJ OliveNetworks
 */
package epro.core.filter;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.nexacro.xapi.data.DataSetList;
import com.nexacro.xapi.data.PlatformData;
import com.nexacro.xapi.data.VariableList;
import com.nexacro.xapi.tx.HttpPlatformRequest;
import com.nexacro.xapi.tx.HttpPlatformResponse;
import com.nexacro.xapi.tx.PlatformException;
import com.nexacro.xapi.tx.PlatformType;

import core.common.config.Config;
import core.sql.SqlManager;
import core.sql.SqlManagerFactory;
import core.vo.model.coreset.CoreParamSet;
import core.vo.model.coreset.CoreParamSetFactory;
import core.vo.model.dataset.NexacroDataSet;
import core.vo.model.paramset.NexacroParamSet;

/**
 *
 * The class RoleCheckFilter (접근권한 체크 필터)<br>
 * <br>
 * 수행로직<br>
 *
 * @version 1.0
 *
 */
public class RoleCheckFilter implements Filter {

	private static final Log LOG = LogFactory.getLog(RoleCheckFilter.class);
	private FilterConfig config;
	public static final String LOGIN_SUCCESS_YN = "LOGIN_SUCCESS_YN";

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		if (LOG.isDebugEnabled()) {
			LOG.debug("RoleCheckFilter doFilter():::" + Config.getString("BASIC.ROLECHECK"));
		}
		if ("Y".equals(Config.getString("BASIC.ROLECHECK"))) {
			SqlManager sqlManager = SqlManagerFactory.getSqlManager();
			HttpServletRequest hReq = (HttpServletRequest) request;
			HttpServletResponse hRes = (HttpServletResponse) response;
			HttpSession session = hReq.getSession();

			String uri = hReq.getRequestURI();
			// epro.xx.xx.xxService
			String service = uri.substring(uri.lastIndexOf(47) + 1, uri.lastIndexOf(46));
			// xxService
			String serviceBeanName = service.substring(service.lastIndexOf(46) + 1);
			if (!(Character.isUpperCase(serviceBeanName.charAt(1)))) {
				serviceBeanName = StringUtils.uncapitalize(serviceBeanName);
			}
			// getxxxx
			String methodName = uri.substring(uri.lastIndexOf(46) + 1);

			String gUserId = (String) session.getAttribute("G_USER_ID");

			HashMap param = new HashMap<>();
			param.put("SVC_NM", service);
			param.put("METHOD", methodName);
			param.put("GUSER_ID", gUserId);
			// 요청 url에 따른 존재여부 확인
			ArrayList<HashMap> result = (ArrayList<HashMap>) sqlManager.queryForList(param,
					"RoleCheckFilter.getRoleCheckService");
			// 요천 url이 권한체크인지 확인
			if (result.size() == 0) {
				// 에러임
				if (LOG.isDebugEnabled()) {
					LOG.debug("RoleCheckFilter not regedit()");
				}
				CoreParamSet outParam = CoreParamSetFactory.create(NexacroParamSet.class);
				outParam.setErrorCode(-1000);
				writeResponseToNexacro(hReq, hRes, (NexacroParamSet) outParam);
				return;
			} else {
				if ("Y".equals(result.get(0).get("AUTHCHK"))) {
					if (LOG.isDebugEnabled()) {
						LOG.debug("RoleCheckFilter AUTHCHK [Y]");
					}

					if (gUserId == null) {
						CoreParamSet outParam = CoreParamSetFactory.create(NexacroParamSet.class);
						outParam.setErrorCode(-3000);
						writeResponseToNexacro(hReq, hRes, (NexacroParamSet) outParam);
						return;
					}

					// 요청 url이 권한체크일경우 권한을 체크
					int resultMap = (int) sqlManager.queryForObject(param, "RoleCheckFilter.getRoleCheckServiceCnt");
					if (resultMap == 0) {
						// 권한없음
						if (LOG.isDebugEnabled()) {
							LOG.debug("RoleCheckFilter service is Unauthorized");
						}
						CoreParamSet outParam = CoreParamSetFactory.create(NexacroParamSet.class);
						outParam.setErrorCode(-2000);
						writeResponseToNexacro(hReq, hRes, (NexacroParamSet) outParam);
						return;
					} else {
						// 통과
						if (LOG.isDebugEnabled()) {
							LOG.debug("RoleCheckFilter RoleChekc is ok");
						}
					}
				} else {
					if (LOG.isDebugEnabled()) {
						LOG.debug("RoleCheckFilter AUTHCHK [N]");
					}

				}
			}
		}
		// 체인 넘기기
		chain.doFilter(request, response);
	}

	protected void writeResponseToNexacro(HttpServletRequest request, HttpServletResponse response,
			NexacroParamSet params) throws IOException {
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

	@Override
	public void init(FilterConfig config) throws ServletException {
		if (LOG.isDebugEnabled()) {
			LOG.debug("RoleCheckFilter init()");
		}

		this.config = config;
	}

	@Override
	public void destroy() {
		if (LOG.isDebugEnabled()) {
			LOG.debug("RoleCheckFilter destroy()");
		}
	}

}
