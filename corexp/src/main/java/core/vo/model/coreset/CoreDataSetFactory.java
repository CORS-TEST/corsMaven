/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 */
package core.vo.model.coreset;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import core.vo.model.dataset.HtmlDataSet;
import core.vo.model.dataset.NexacroDataSet;
import core.vo.model.paramset.HtmlParamSet;
import core.vo.model.paramset.NexacroParamSet;

public abstract class CoreDataSetFactory {

	private static final Log LOG = LogFactory.getLog(CoreDataSetFactory.class);

	/*
	 * return dataset by dataset type (nexacrodataset,htmldataset)
	 * 
	 */
	public static <T extends CoreDataSet> CoreDataSet getDataSet(Class<T> clazz) {
		try {
			return clazz.newInstance();
		} catch (InstantiationException e) {
			e.printStackTrace();
		} catch (IllegalAccessException e) {
			e.printStackTrace();
		}
		return null;
	}

	/*
	 * return dataset by paramset type (nexacrodataset,htmldataset)
	 * 
	 */
	public static <T extends CoreDataSet> CoreDataSet getDataSet(CoreParamSet clazz) {
		try {
			if (clazz.getClass().equals(NexacroParamSet.class)) {
				return NexacroDataSet.class.newInstance();
			} else if (clazz.getClass().equals(HtmlParamSet.class)) {
				return HtmlDataSet.class.newInstance();
			}

		} catch (InstantiationException e) {
			e.printStackTrace();
		} catch (IllegalAccessException e) {
			e.printStackTrace();
		}
		return null;
	}

	public abstract CoreDataSet makeDataset(Object paramObject);

	public abstract CoreDataSet makeDataset(Object paramObject, String paramString);

	public abstract CoreDataSet makeDataset(List<?> paramList, String paramString);

	public abstract CoreDataSet makeDataset(List<?> paramList1, List<?> paramList2, String paramString);
}