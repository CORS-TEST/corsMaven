/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 */
package core.web.intercepter;

import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.math.BigDecimal;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.ibatis.executor.statement.StatementHandler;
import org.apache.ibatis.mapping.BoundSql;
import org.apache.ibatis.mapping.MappedStatement;
import org.apache.ibatis.mapping.ParameterMapping;
import org.apache.ibatis.plugin.Interceptor;
import org.apache.ibatis.plugin.Intercepts;
import org.apache.ibatis.plugin.Invocation;
import org.apache.ibatis.plugin.Plugin;
import org.apache.ibatis.scripting.defaults.DefaultParameterHandler;

import core.common.config.Config;
import core.common.util.ReflectionUtils;

@Intercepts({
		@org.apache.ibatis.plugin.Signature(type = StatementHandler.class, method = "batch", args = {
				java.sql.Statement.class }),
		@org.apache.ibatis.plugin.Signature(type = StatementHandler.class, method = "update", args = {
				java.sql.Statement.class }),
		@org.apache.ibatis.plugin.Signature(type = StatementHandler.class, method = "query", args = {
				java.sql.Statement.class, org.apache.ibatis.session.ResultHandler.class }) })
public class StatementInterceptor implements Interceptor {

	private static final Log LOG = LogFactory.getLog(StatementInterceptor.class);

	public Object intercept(Invocation invocation) throws Throwable {
		String sql = null;

		if (LOG.isDebugEnabled()) {
			try {
				sql = getBoundSql(invocation);
				String sqlId = getSqlId(invocation);
				String blackList = Config.getString("BLACKLIST.SQLLOG");
				String[] blackListArr = blackList.split("\\|");
				boolean flag = true;
				for (int i = 0; i < blackListArr.length; i++) {
					if (sqlId.startsWith(blackListArr[i])) {
						flag = false;
					}
				}
				if (flag) {
					LOG.debug(sql);
				} else {
					LOG.trace(sql);
				}

			} catch (Exception e) {
				e.printStackTrace();
				LOG.error("Exception", e);
			}
		}

		return invocation.proceed();
	}

	private String getSqlId(Invocation invocation)
			throws NoSuchFieldException, SecurityException, IllegalArgumentException, IllegalAccessException {
		StatementHandler handler = (StatementHandler) invocation.getTarget();
		DefaultParameterHandler parameterHandler = (DefaultParameterHandler) handler.getParameterHandler();
		Field field = parameterHandler.getClass().getDeclaredField("mappedStatement");
		field.setAccessible(true);
		MappedStatement mappedStatement = (MappedStatement) field.get(parameterHandler);
		return mappedStatement.getId();
	}

	private String getBoundSql(Invocation invocation) {
		String result = null;
		try {
			StatementHandler handler = (StatementHandler) invocation.getTarget();
			BoundSql boundSql = handler.getBoundSql();

			String sql = boundSql.getSql();

			Object obj = handler.getParameterHandler().getParameterObject();
			List parameterList = boundSql.getParameterMappings();

			if (obj instanceof Map) {
				Map map = (Map) boundSql.getParameterObject();
				StringBuilder sb = new StringBuilder();

				String[] splitedSql = sql.split("\\?");
				if (parameterList.size() > 0) {
					for (int i = 0; i < parameterList.size(); ++i) {
						ParameterMapping parameterMapping = (ParameterMapping) parameterList.get(i);

						if (parameterMapping.getProperty().indexOf("__frch_") > -1) {
							sb.append(splitedSql[i]).append(
									getClassType(boundSql.getAdditionalParameter(parameterMapping.getProperty())));
						} else {
							sb.append(splitedSql[i]).append(getClassType(map, parameterMapping.getProperty()));
						}
					}

					if (splitedSql.length - parameterList.size() > 0)
						sb.append(splitedSql[(splitedSql.length - 1)]);
				} else {
					sb.append(sql);
				}

				result = sb.toString();
			} else {
				result = sql;
			}
		} catch (Exception e) {
			if (LOG.isErrorEnabled()) {
				LOG.error("Exception", e);
			}
		}

		return result;
	}

	public Object plugin(Object target) {
		return Plugin.wrap(target, this);
	}

	public void setProperties(Properties properties) {
	}

	private String getClassType(Map param, String key) {
		return getClassType(getValue(param, key));
	}

	private String getClassType(Object obj) {
		StringBuilder sb = new StringBuilder();
		if (obj == null) {
			return "null";
		}

		Class classType = obj.getClass();

		if ((classType.equals(BigDecimal.class)) || (classType.equals(Float.class)) || (classType.equals(Double.class))
				|| (classType.equals(Integer.class)) || (classType.equals(Long.class))) {
			sb.append(obj);
		} else {
			sb.append("'").append(obj).append("'");
		}

		return sb.toString();
	}

	private Object getValue(Map param, String key) {
		if ((key != null) && (!("".equals(key)))) {
			Object obj = param;
			String[] keylist = key.split("\\.");

			if (keylist.length == 0)
				obj = param.get(key);
			else {
				for (int i = 0; i < keylist.length; ++i) {
					obj = getMappingObject(obj, keylist[i]);
					if (obj == null) {
						break;
					}
				}

			}

			return obj;
		}

		return null;
	}

	private Object getMappingObject(Object obj, String key) {
		if (obj instanceof Map) {
			return ((Map) obj).get(key);
		}

		Object result = null;
		String methodName = new StringBuilder().append("get").append(StringUtils.capitalize(key)).toString();
		Method method = ReflectionUtils.getMethod(obj.getClass(), methodName, new Object[0]);
		try {
			result = method.invoke(obj, new Object[0]);
		} catch (IllegalAccessException e) {
			e.printStackTrace();
			LOG.error("IllegalAccessException", e);
		} catch (IllegalArgumentException e) {
			e.printStackTrace();
			LOG.error("IllegalArgumentException", e);
		} catch (InvocationTargetException e) {
			e.printStackTrace();
			LOG.error("InvocationTargetException", e);
		}
		return result;
	}
}