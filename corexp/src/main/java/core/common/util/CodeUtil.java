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
import core.vo.model.dataset.HtmlDataSet;
import core.vo.model.dataset.NexacroDataSet;

/**
 * The class CodeUtil<br>
 * <br>
 * 공통코드 조회 유틸 클래스<br>
 * <br>
 *
 */
public class CodeUtil {

	private static CoreDataSet nexaCodeDataSet = null;
	private static CoreDataSet htmlCodeDataSet = null;
	private static Map<String, Map<String, Map<String, String>>> nexaListMap = null;
	private static Map<String, Map<String, Map<String, String>>> htmlListMap = null;

	/**
	 * 
	 */
	private CodeUtil() {
	}

	/**
	 * 최초 로딩과 이후 refersh를 구분하기 위해 클래스 전역변수 flag 선언
	 */
	private static boolean isInitialized = false;

	/**
	 * @MenthdName : init
	 * @InputParameterType :
	 * @OutputParameterType : void
	 */
	public static synchronized void init() {
		if (!isInitialized) {
			nexaCodeDataSet = CoreDataSetFactory.getDataSet(NexacroDataSet.class);
			htmlCodeDataSet = CoreDataSetFactory.getDataSet(HtmlDataSet.class);
			nexaListMap = new HashMap<String, Map<String, Map<String, String>>>();
			htmlListMap = new HashMap<String, Map<String, Map<String, String>>>();
		}

		SqlManager sqlManager = SqlManagerFactory.getSqlManager();
		nexaCodeDataSet = sqlManager.queryForCoreDataSet(nexaCodeDataSet, "cCodeService.getMultiUseCodes");
		htmlCodeDataSet = sqlManager.queryForCoreDataSet(htmlCodeDataSet, "cCodeService.getMultiUseCodes");
		Map<String, Map<String, String>> codeMap = null;

		for (int i = 0; i < nexaCodeDataSet.getRowCount(); i++) {
			nexaCodeDataSet.setActiveRow(i);
			if (nexaListMap.get(nexaCodeDataSet.getColumnAsString(i, "CD_ID")) != null) {
				codeMap = nexaListMap.get(nexaCodeDataSet.getColumnAsString(i, "CD_ID"));
			} else {
				codeMap = new HashMap();
			}
			codeMap.put(nexaCodeDataSet.getColumnAsString(i, "LANG_CD"), nexaCodeDataSet.getActiveRowData());
			nexaListMap.put(nexaCodeDataSet.getColumnAsString(i, "CD_ID"), codeMap);
		}

		for (int i = 0; i < htmlCodeDataSet.getRowCount(); i++) {
			htmlCodeDataSet.setActiveRow(i);

			if (htmlListMap.get(htmlCodeDataSet.getColumnAsString(i, "CD_ID")) != null) {
				codeMap = htmlListMap.get(htmlCodeDataSet.getColumnAsString(i, "CD_ID"));
			} else {
				codeMap = new HashMap();
			}
			codeMap.put(htmlCodeDataSet.getColumnAsString(i, "LANG_CD"), htmlCodeDataSet.getActiveRowData());
			htmlListMap.put(htmlCodeDataSet.getColumnAsString(i, "CD_ID"), codeMap);
		}
		//System.out.println(nexaListMap.toString());
		if (!isInitialized) {
			isInitialized = true;
		}
	}

	/**
	 * @MenthdName : getCodeName
	 * @InputParameterType :
	 * @OutputParameterType : String
	 */
	public static String getCodeName(String cdId, String languageCode) {
		if (nexaCodeDataSet.getRowCount() != 0) {
			if (validNexaCode(cdId, languageCode)) {
				return (String) nexaListMap.get(cdId).get(languageCode).get("CD_NM_LO");
			} else {
				return cdId;
			}
		} else if (htmlCodeDataSet.getRowCount() != 0) {
			if (validHtmlCode(cdId, languageCode)) {
				return (String) htmlListMap.get(cdId).get(languageCode).get("CD_NM_LO");
			} else {
				return cdId;
			}
		}
		return cdId;
	}

	/**
	 * @MenthdName : validNexaCode
	 * @InputParameterType :
	 * @OutputParameterType : boolean
	 */
	public static boolean validNexaCode(String cdId, String languageCode) {
		if (nexaListMap.get(cdId) == null) {
			return false;
		}
		if (nexaListMap.get(cdId).get(languageCode) == null) {
			return false;
		}
		if (nexaListMap.get(cdId).get(languageCode).get("CD_NM_LO") == null) {
			return false;
		}
		return true;
	}

	/**
	 * @MenthdName : validHtmlCode
	 * @InputParameterType :
	 * @OutputParameterType : boolean
	 */
	public static boolean validHtmlCode(String cdId, String languageCode) {
		if (htmlListMap.get(cdId) == null) {
			return false;
		}
		if (htmlListMap.get(cdId).get(languageCode) == null) {
			return false;
		}
		if (htmlListMap.get(cdId).get(languageCode).get("CD_NM_LO") == null) {
			return false;
		}
		return true;
	}

	/**
	 * @MenthdName : getNexacroCodeCoreDataSet
	 * @InputParameterType :
	 * @OutputParameterType : CoreDataSet
	 */
	public static CoreDataSet getNexacroCodeCoreDataSet() {
		return nexaCodeDataSet;
	}

	/**
	 * @MenthdName : getHtmlCodeCoreDataSet
	 * @InputParameterType :
	 * @OutputParameterType : CoreDataSet
	 */
	public static CoreDataSet getHtmlCodeCoreDataSet() {
		return htmlCodeDataSet;
	}
}
