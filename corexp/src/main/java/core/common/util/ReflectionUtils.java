/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 */
package core.common.util;

import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import core.exception.system.SystemException;
import core.exception.userhandle.UserHandleException;

public class ReflectionUtils {

	private static final Log LOG = LogFactory.getLog(ReflectionUtils.class);

	public static Class<?> getClass(String classname) throws ClassNotFoundException {
		Class clazz = null;
		clazz = Class.forName(classname, false, Thread.currentThread().getContextClassLoader());
		return clazz;
	}

	public static Field getField(Class clazz, String fieldName) {
		return getField(clazz, fieldName, Boolean.valueOf(false));
	}

	public static Field getField(Class clazz, String fieldName, Boolean findInSuperClass) {
		Field field = null;
		try {
			field = clazz.getDeclaredField(fieldName);
		} catch (SecurityException e) {
			throw new SecurityException(e);
		} catch (NoSuchFieldException e) {
			if (findInSuperClass.booleanValue())
				field = getField(clazz.getSuperclass(), fieldName, findInSuperClass);
			else {
				throw new IllegalStateException(e);
			}
		}
		return field;
	}

	public static Object getValue(Class clazz, Object object, String fieldName) {
		return getValue(clazz, object, fieldName, Boolean.valueOf(false));
	}

	public static Object getValue(Class clazz, Object object, String fieldName, Boolean findInSuperClass) {
		Field field = getField(clazz, fieldName, findInSuperClass);
		field.setAccessible(true);

		Object result = null;
		try {
			result = field.get(object);
		} catch (IllegalArgumentException e) {
			throw new IllegalArgumentException(e);
		} catch (IllegalAccessException e) {
			throw new IllegalStateException(e);
		}
		return result;
	}

	public static Class getType(Class clazz, String fieldName) {
		Field field = getField(clazz, fieldName);
		return field.getType();
	}

	public static Class getSubType(Class clazz, Object object, String fieldName) {
		Field field = getField(clazz, fieldName);
		field.setAccessible(true);

		Object realObject = null;
		try {
			realObject = field.get(object);
		} catch (IllegalArgumentException e) {
			throw new IllegalArgumentException(e);
		} catch (IllegalAccessException e) {
			throw new IllegalStateException(e);
		}

		return realObject.getClass();
	}

	public static Object callMethod(Class clazz, String methodName, Object[] object) {
		Object result = null;
		Method[] methods = clazz.getMethods();
		for (Method method : methods) {
			if (method.getName().equals(methodName)) {
				try {
					if (method.getReturnType() != null)
						result = method.invoke(clazz.newInstance(), object);
					else
						method.invoke(clazz.newInstance(), object);
				} catch (InstantiationException e) {
					if (LOG.isErrorEnabled())
						LOG.error(e, e);
				} catch (IllegalArgumentException e) {
					throw new IllegalArgumentException(e);
				} catch (IllegalAccessException e) {
					throw new IllegalStateException(e);
				} catch (InvocationTargetException e) {
					throw new IllegalStateException(e);
				}
			}
		}
		return result;
	}

	public static Method getMethod(Class clazz, String methodName, Object[] params) {
		Method result = null;
		Class[] clazzes = new Class[params.length];
		for (int i = 0; i < params.length; ++i) {
			clazzes[i] = params[i].getClass();
		}
		try {
			result = clazz.getMethod(methodName, clazzes);
		} catch (SecurityException e) {
			throw new SecurityException(e);
		} catch (NoSuchMethodException e) {
			throw new SystemException(e);
		}
		return result;
	}

	public static Method getMethod(Class clazz, String methodName, Class paramType) {
		Method result = null;
		try {
			result = clazz.getMethod(methodName, new Class[] { paramType });
		} catch (SecurityException e) {
			throw new SecurityException(e);
		} catch (NoSuchMethodException e) {
			throw new SystemException(e);
		}
		return result;
	}

	public static Object invokeMethod(Class clazz, String beanName, String methodName, Object[] params) {
		Object result = null;
		Method method = getMethod(clazz, methodName, params);
		try {
			if (method.getReturnType() != null)
				result = method.invoke(CoreBeanUtil.getBean(beanName), params);
			else
				method.invoke(CoreBeanUtil.getBean(beanName), params);
		} catch (Exception e) {
			if (e.getCause() instanceof UserHandleException)
				throw ((UserHandleException) e.getCause());
			if (e.getCause() instanceof SystemException) {
				throw ((SystemException) e.getCause());
			}
			throw new SystemException(e);
		}

		return result;
	}

	public static Object invokeMethod(String beanName, String methodName, Object[] params) {
		Object result = null;
		try {
			Object bean = CoreBeanUtil.getBean(beanName);
			Method method = getMethod(bean.getClass(), methodName, params);
			if (method.getReturnType() != null)
				result = method.invoke(CoreBeanUtil.getBean(beanName), params);
			else
				method.invoke(CoreBeanUtil.getBean(beanName), params);
		} catch (Exception e) {
			if (e.getCause() instanceof UserHandleException)
				throw ((UserHandleException) e.getCause());
			if (e.getCause() instanceof SystemException) {
				throw ((SystemException) e.getCause());
			}
			throw new SystemException(e);
		}

		return result;
	}

	/**
	 * @MenthdName : invokeMethod
	 * @InputParameterType :
	 * @OutputParameterType : Object <br>
	 *                      find method run
	 */
	public static Object invokeMethod(String beanName, String methodName, Object params, Class<?> paramType) {
		Object result = null;
		try {
			Object bean = CoreBeanUtil.getBean(beanName);
			Method method = getMethod(bean.getClass(), methodName, paramType);
			if (method.getReturnType() != null) {
				result = method.invoke(CoreBeanUtil.getBean(beanName), new Object[] { params });
			} else {
				method.invoke(CoreBeanUtil.getBean(beanName), new Object[] { params });
			}
		} catch (Exception e) {
			if (e.getCause() instanceof UserHandleException)
				throw ((UserHandleException) e.getCause());
			if (e.getCause() instanceof SystemException) {
				throw ((SystemException) e.getCause());
			}
			throw new SystemException(e);
		}
		return result;
	}
}