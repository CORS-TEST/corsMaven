package epro.com.module;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;
import java.util.regex.Pattern;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Service;

import core.exception.userhandle.UserHandleException;
import core.vo.model.coreset.CoreDataSet;
import core.vo.model.coreset.CoreParamSet;
import core.vo.model.coreset.CoreParamSetFactory;
import core.web.module.CoreModule;
import epro.utility.CorePrItemManager;

@Service
public class CommandModule extends CoreModule {
	private static final Log LOG = LogFactory.getLog(CommandModule.class);

	/**
	 * @메소드명 : getSeqNextval
	 * @input : String seqNm, int propagation
	 * @return : String seq
	 * @desc : 시퀀스 채번
	 */
	public String getSeqNextval(String seqNm, int propagation) {
		Map<String, Object> seqMap = new HashMap<String, Object>();
		seqMap.put("inTblAlias", seqNm);
		String seq = (String) getSqlManager().queryForObject(seqMap, "commonService.getSeq");
		return seq;
	}
	
	/**
	 * @메소드명 : getSeqNextval
	 * @input : String seqNm, int propagation
	 * @return : String seq
	 * @desc : 시퀀스 채번
	 */
	public String getSeqNextval(String branchCd ,String seqNm, int propagation) {
		Map<String, Object> seqMap = new HashMap<String, Object>();
		seqMap.put("inTblAlias", branchCd+"_"+seqNm);
		String seq = (String) getSqlManager().queryForObject(seqMap, "commonService.getSeq");
		return seq;
	}

	/**
	 * @메소드명 : isEqualsTkey
	 * @input : String tblNm, String tkey, Map<String, Object> condition
	 * @return : boolean rtn [true:tkey가 같음, false:tkey가 다름]
	 * @desc : tkey 체크
	 */
	public boolean isEqualsTkey(String tblNm, String tkey, Map<String, Object> condition) {
		boolean rtn = false;

		if (tblNm == null || tblNm.length() < 1) {
			throw new UserHandleException("-1", "commandModule.isEqualsTkey 호출 ::::: tblNm 안 넘김.");
		}

		if (tkey == null || tkey.length() < 1) {
			throw new UserHandleException("-1", "commandModule.isEqualsTkey 호출 ::::: tkey 안 넘김.");
		}

		if (condition == null || condition.size() < 1) {
			throw new UserHandleException("-1", "commandModule.isEqualsTkey 호출 ::::: condition(where절) 안 넘김.");
		}

		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("TABLE", tblNm);
		paramMap.put("TKEY", tkey);

		int i = 0;
		Set<String> key = condition.keySet();
		for (Iterator<String> iterator = key.iterator(); iterator.hasNext();) {
			String keyName = (String) iterator.next();
			String valueName = (String) condition.get(keyName);

			paramMap.put("COND_KEY_" + i, keyName);
			paramMap.put("COND_VALUE_" + i, valueName);

			i++;
		}

		String chk = (String) getSqlManager().queryForObject(paramMap, "commonService.isEqualsTkey");
		rtn = chk.equalsIgnoreCase("Y") ? true : false;

		return rtn;
	}

	/**
	 * @메소드명 : insertPrItemHist
	 * @input : Map<String, Object> map
	 * @return :
	 * @desc : 구매요청품목 이력을 저장한다.
	 */
	public void insertPrItemHist(Map<String, Object> map) {
		int resultCode = (int) getSqlManager().insertForObject(map, "commonService.insertPrItemHist");

		if (resultCode < 1) {
			throw new UserHandleException("-1", "commonService.insertPrItemHist 실패 :::: 실패한 PR_ITEM_ID :> " + map.get("PR_ITEM_ID"));
		}
	}

	/**
	 * @메소드명 : comUpdatePrItemStts
	 * @input : Map<String, Object> map
	 * @return :
	 * @desc : 구매요청품목상태를 변경한다.
	 */
	public void comUpdatePrItemStts(Map<String, Object> map) {
		int resultCode = (int) getSqlManager().updateForObject(map, "commonService.comUpdatePrItemStts");

		if (resultCode < 1) {
			throw new UserHandleException("-1", "commonService.comUpdatePrItemStts 실패 :::: 실패한 PR_ITEM_ID :> " + map.get("PR_ITEM_ID"));
		}
	}

	/**
	 * @메소드명 : saveItemToPrItem
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 구매요청품목이력저장, 구매요청품목상태변경
	 */
	public CoreParamSet saveItemToPrItem(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet inInfoArr = inParams.getCoreDataSetInstance();
		CoreDataSet hsInfoArr = inParams.getCoreDataSetInstance();
		String cdSubSys = (String) inParams.get("CD_SUB_SYS");
		inInfoArr = CorePrItemManager.getUpdateDataMapInfo(cdSubSys, inInfoArr);

		CoreDataSet dsHeader = inParams.getCoreDataSet(inInfoArr.getColumnAsString(0, "HEADER_DS"));
		CoreDataSet dsItem = inParams.getCoreDataSet(inInfoArr.getColumnAsString(0, "ITEM_DS"));
		hsInfoArr.appendRow();
		hsInfoArr.setUpdate(true);
		hsInfoArr.addStringColumn("BRANCH_CD");
		hsInfoArr.addStringColumn("PR_ITEM_ID");
		hsInfoArr.addStringColumn("DOC_NO");
		hsInfoArr.addStringColumn("CD_PRGRS_STEP");
		hsInfoArr.addStringColumn("CD_SUB_SYS");
		hsInfoArr.addStringColumn("CD_PR_ITEM_STTS");

		for (int i = 0; i < dsItem.getRowCount(); i++) {
			dsItem.setActiveRow(i);
			hsInfoArr.setColumn(0, "BRANCH_CD", dsItem.getColumnAsString(0, "BRANCH_CD"));
			hsInfoArr.setColumn(0, "PR_ITEM_ID", dsItem.getColumnAsString(0, "PR_ITEM_ID"));
			hsInfoArr.setColumn(0, "DOC_NO", dsHeader.getColumnAsString(0, inInfoArr.getColumnAsString(0, "DOC_NO")));
			hsInfoArr.setColumn(0, "CD_PRGRS_STEP", dsHeader.getColumnAsString(0, inInfoArr.getColumnAsString(0, "HEADER_DS_STTS")));
			hsInfoArr.setColumn(0, "CD_SUB_SYS", cdSubSys);
			hsInfoArr.setColumn(0, "CD_PR_ITEM_STTS", cdSubSys);

			getSqlManager().insertToCoreDataSet(hsInfoArr, "commonService.insertPrItemHist");
			getSqlManager().insertToCoreDataSet(hsInfoArr, "commonService.comUpdatePrItemStts");
		}

		for (int i = 0; i < dsItem.getDeleteRowCount(); i++) {
			dsItem.setActiveRow(i);
			hsInfoArr.setColumn(0, "BRANCH_CD", dsItem.getDeleteColumnAsString(0, "BRANCH_CD"));
			hsInfoArr.setColumn(0, "PR_ITEM_ID", dsItem.getDeleteColumnAsString(0, "PR_ITEM_ID"));
			hsInfoArr.setColumn(0, "DOC_NO", dsHeader.getColumnAsString(0, inInfoArr.getColumnAsString(0, "DOC_NO")));
			hsInfoArr.setColumn(0, "CD_PRGRS_STEP", dsHeader.getColumnAsString(0, inInfoArr.getColumnAsString(0, "HEADER_DS_STTS")));
			hsInfoArr.setColumn(0, "CD_SUB_SYS", cdSubSys);
			getSqlManager().insertToCoreDataSet(hsInfoArr, "commonService.insertPrItemHist");
		}
		return outParam;
	}
	
	/**
	 * @desc  input[사과,배,바나나] -> output['사과','배','바나나'] 형식으로 변경.
	 * @param  1. String str : 대상 문자열.
	 * @return String 으로 변환된 문자열
	 */
	public static String arrayJoin(String str) {
		if(str==null) return "";
		
		String result = "";
		str = str.replaceAll("'","");
		String[] sArr = str.split(",");
		
		for(int i=0; i<sArr.length; i++){
			if("".equals(sArr[i])) continue;
			result += "'" + sArr[i].trim() + "'";
			if(i<sArr.length - 1) result += ",";
		}
		
	    return result;
	}
	
	 /**
	 * @desc  배열-> 문자열로 변환
	 * @param  1. String gubunja : 문자열로 변환할 때 넣을 구분자.
	 * 		   2. String array[] : 문자열로 만들 배열.
	 * @return String 으로 변환된 배열
	 */
	public static String arrayJoin(String gubunja, String array[]) {
		if(array==null) return "";		
		
		String result = "";		
		for (int i=0; i<array.length; i++) {
			if("".equals(array[i])) continue;
			result += array[i].trim();
			if(i<array.length - 1) result+=gubunja;
	    }
	    
	    return result;
	}	
	
}
