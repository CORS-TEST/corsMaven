/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 */
package core.vo.model.coreset;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * 이곳에서 파라미터 분기처리한다.
 * 
 */
public abstract class CoreParamSetFactory {

	private static final Log LOG = LogFactory.getLog(CoreParamSetFactory.class);

	public static final <T extends CoreParamSet> T create(T paramSet) {
		try {

			return (T) paramSet.getClass().newInstance();
		} catch (InstantiationException e) {
			e.printStackTrace();
		} catch (IllegalAccessException e) {
			e.printStackTrace();
		}
		return null;
	}

	public static final <T extends CoreParamSet> T create(Class<T> clazz) {
		try {
			return clazz.newInstance();
		} catch (InstantiationException e) {
			e.printStackTrace();
		} catch (IllegalAccessException e) {
			e.printStackTrace();
		}
		return null;
	}

	public static final <T extends CoreParamSet> T create(HttpServletRequest requestz) {

		return null;
	}

	public abstract CoreDataSet makeDataset(Object paramObject);

	public abstract CoreDataSet makeDataset(Object paramObject, String paramString);

	public abstract CoreDataSet makeDataset(List<?> paramList, String paramString);

	public abstract CoreDataSet makeDataset(List<?> paramList1, List<?> paramList2, String paramString);
}