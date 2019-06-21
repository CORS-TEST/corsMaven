/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 */
package core.common.util;

import java.util.HashMap;
import java.util.Map;

import core.sql.SqlManager;
import core.sql.SqlManagerFactory;
import core.vo.model.coreset.CoreDataSet;
import core.vo.model.coreset.CoreDataSetFactory;
import core.vo.model.dataset.NexacroDataSet;

/**
 * The class ResourceUtil<br>
 * <br>
 * 리소스 조회 유틸 클래스<br>
 * <br>
 *
 */
public class ResourceUtil {

	/**
	 * 시스템 기동시 리소스 정보를 담는 공유 객체
	 */
	protected static CoreDataSet nexaResourceDataSet = null;
	protected static CoreDataSet resourceDataSet = null;
	protected static CoreDataSet resourceAllDataSet = null;
	private static Map<String, Map<String, String>> resMap = null;
	private static Map<String, Map<String, Map<String, String>>> htmlListMap = null;

	/**
	 * 최초 로딩과 이후 refersh를 구분하기 위해 클래스 전역변수 flag 선언
	 */
	private static boolean isInitialized = false;

	/**
	 * 
	 */
	private ResourceUtil() {
	}

	/**
	 * @MenthdName : init
	 * @InputParameterType :
	 * @OutputParameterType : void
	 */
	public static synchronized void init() {
		if (!isInitialized) {
			nexaResourceDataSet = CoreDataSetFactory.getDataSet(NexacroDataSet.class);
			resourceDataSet = CoreDataSetFactory.getDataSet(NexacroDataSet.class);
			resourceAllDataSet = CoreDataSetFactory.getDataSet(NexacroDataSet.class);
			resMap = new HashMap<String, Map<String, String>>();
		}

		SqlManager sqlManager = SqlManagerFactory.getSqlManager();
		nexaResourceDataSet = sqlManager.queryForCoreDataSet(nexaResourceDataSet, "cResourceService.getResourceString");

		/* 여기해야함 */
		resourceDataSet = sqlManager.queryForCoreDataSet(resourceDataSet, "cResourceService.getLangCd");
		resourceAllDataSet = sqlManager.queryForCoreDataSet(resourceAllDataSet, "cResourceService.getResource");
		String lang = "";
		Map<String, String> rangMap = null;
		for (int i = 0; i < resourceDataSet.getRowCount(); i++) {
			resourceDataSet.setActiveRow(i);
			lang = resourceDataSet.getColumnAsString(i, "CD_ID");
			rangMap = new HashMap<String, String>();
			for (int j = 0; j < resourceAllDataSet.getRowCount(); j++) {
				if (lang.equals(resourceAllDataSet.getColumnAsString(j, "CD_RSRC_LANG"))) {
					rangMap.put(resourceAllDataSet.getColumnAsString(j, "RSRC_ID"), resourceAllDataSet.getColumnAsString(j, "RSRC_NM"));
				}
			}
			resMap.put(lang, rangMap);
		}

		if (!isInitialized) {
			isInitialized = true;
		}
	}

	/**
	 * @MenthdName : getResourceString
	 * @InputParameterType :
	 * @OutputParameterType : boolean
	 */
	public static String getResourceString(String langCd) {
		String xmlString = "";
		for (int i = 0; i < nexaResourceDataSet.getRowCount(); i++) {
			if (langCd.equals(nexaResourceDataSet.getColumnAsString(i, "CD_ID"))) {
				xmlString = nexaResourceDataSet.getColumnAsString(i, "LABEL_STR");
				break;
			}
		}
		return xmlString;
	}

	public static String getResource(String resKey, String langCd) {
		if (resMap.get(langCd) != null) {
			if (resMap.get(langCd).get(resKey) != null) {
				return resMap.get(langCd).get(resKey);
			}
		}
		return resKey;
	}

	public static CoreDataSet getNexaResourceDataSet() {
		return nexaResourceDataSet;
	}
}
