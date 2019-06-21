/**
 * Copyright (c) 2017 Cheong O Ram All rights reserved.
 *
 * This software is the proprietary information of Cheong O Ram System
 *
 * @서비스명		: epro.com.service BComService.java                       
 * @생성자		: 
 * @생성일시		: 
 * @구분			: 공통팝업
 * @최종수정자		: 송태봉
 * @최종수정일시	: 2017.09.07
 */
package epro.com.service;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.ubireport.viewer.report.preview.UbiViewer;

import core.common.config.Config;
import core.vo.model.coreset.CoreDataSet;
import core.vo.model.coreset.CoreParamSet;
import core.vo.model.coreset.CoreParamSetFactory;
import core.web.service.CoreService;
import crosscert.Base64;
import crosscert.Certificate;
import crosscert.PrivateKey;
import crosscert.Signer;
import crosscert.Verifier;
import epro.com.module.FileModule;
import epro.com.module.MailSmsModule;

@Service
public class BComService extends CoreService {
	private static final Log LOG = LogFactory.getLog(BComService.class);

	@Autowired
	MailSmsModule mailSmsModule;

	@Autowired
	FileModule fileModule;

	/**
	 * @메소드명 : searchComMtrlCls
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 품목분류 검색
	 */
	public CoreParamSet searchComMtrlCls(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCond = inParams.getCoreDataSet("dsCond");
		CoreDataSet dsMtrlType1 = getSqlManager().queryForCoreDataSet(dsCond, "BComService.searchComMtrlType1");
		CoreDataSet dsMtrlType2 = getSqlManager().queryForCoreDataSet(dsCond, "BComService.searchComMtrlType2");
		CoreDataSet dsMtrlType3 = getSqlManager().queryForCoreDataSet(dsCond, "BComService.searchComMtrlType3");
		CoreDataSet dsComboAttr = getSqlManager().queryForCoreDataSet(dsCond, "BComService.searchComAttr");
		outParam.setCoreDataSet("dsMtrlType1", dsMtrlType1);
		outParam.setCoreDataSet("dsMtrlType2", dsMtrlType2);
		outParam.setCoreDataSet("dsMtrlType3", dsMtrlType3);
		outParam.setCoreDataSet("dsComboAttr", dsComboAttr);

		return outParam;
	}
	
	/**
	 * @메소드명 : searchComAttr
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 속성 검색
	 */
	public CoreParamSet searchComAttr(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCond = inParams.getCoreDataSet("dsCond");
		CoreDataSet dsCombo = getSqlManager().queryForCoreDataSet(dsCond, "BComService.searchComAttr");
		outParam.setCoreDataSet("dsCombo", dsCombo);

		return outParam;
	}
	
	/**
	 * @메소드명 : searchComMtrlAttr
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 품목속성 검색
	 */
	public CoreParamSet searchComMtrlAttr(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCond = inParams.getCoreDataSet("dsCond");
		CoreDataSet dsOut = getSqlManager().queryForCoreDataSet(dsCond, "BComService.searchComMtrlAttr");
		outParam.setCoreDataSet("dsOut", dsOut);

		return outParam;
	}
	
	/**
	 * @메소드명 : searchComMtrl
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 품목검색
	 */
	public CoreParamSet searchComMtrl(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsSrchOpt = inParams.getCoreDataSet("dsSrchOpt");
		CoreDataSet dsList = null;
		
		if("PR".equals(dsSrchOpt.getColumnAsString(0, "SRCH_TYPE"))) {
			dsList = getSqlManager().queryForCoreDataSet(dsSrchOpt, "BComService.searchPrMtrl");
		}else {
			dsList = getSqlManager().queryForCoreDataSet(dsSrchOpt, "BComService.searchComMtrl");
		}
		outParam.setCoreDataSet("dsList", dsList);

		return outParam;
	}
	
	/**
	 * @메소드명 : searchComSl
	 * @input  : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc   : 창고검색
	 */
	public CoreParamSet searchComSl(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsSrchOpt = inParams.getCoreDataSet("dsSrchOpt");
		CoreDataSet dsList = getSqlManager().queryForCoreDataSet(dsSrchOpt, "BComService.searchComSl");
		outParam.setCoreDataSet("dsList", dsList);

		return outParam;
	}
	
	/**
	 * @메소드명 : searchComUser
	 * @input  : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc   : 사용자검색
	 */
	public CoreParamSet searchComUser(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsSrchOpt = inParams.getCoreDataSet("dsSrchOpt");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		if (!dsSrchOpt.containsColumn("LANG_CD")) {
			dsSrchOpt.setUpdate(true);
			dsSrchOpt.addStringColumn("LANG_CD");
		}

		dsSrchOpt.setColumn(0, "LANG_CD", gdsUserInfo.getColumnAsString(0, "LANG_CD"));

		CoreDataSet dsList = getSqlManager().queryForCoreDataSet(dsSrchOpt, "BComService.searchComUser");
		outParam.setCoreDataSet("dsList", dsList);

		return outParam;
	}
	
	/**
	 * @메소드명 : searchComPtnr
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 업체검색
	 */
	public CoreParamSet searchComPtnr(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsSrchOpt = inParams.getCoreDataSet("dsSrchOpt");

		CoreDataSet dsList = null;
		dsList = getSqlManager().queryForCoreDataSet(dsSrchOpt, "BComService.searchComPtnr");

		outParam.setCoreDataSet("dsList", dsList);

		return outParam;
	}
	
	/**
	 * @메소드명 : searchComAccount
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 계정검색
	 */
	public CoreParamSet searchComAccount(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsSrchOpt = inParams.getCoreDataSet("dsSrchOpt");
		CoreDataSet dsList = getSqlManager().queryForCoreDataSet(dsSrchOpt, "BComService.searchComAccount");
		outParam.setCoreDataSet("dsList", dsList);

		return outParam;
	}
	
	/**
	 * @메소드명 : searchComPorg
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 운영단위검색
	 */
	public CoreParamSet searchComPorg(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsSrchOpt = inParams.getCoreDataSet("dsSrchOpt");
		CoreDataSet dsList = getSqlManager().queryForCoreDataSet(dsSrchOpt, "BComService.searchComPorg");
		outParam.setCoreDataSet("dsList", dsList);

		return outParam;
	}

	/**
	 * @메소드명 : fnSearchSrc
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 소싱그룹을 조회
	 */
	public CoreParamSet searchSrcGrp(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCond = inParams.getCoreDataSet("dsCond");
		CoreDataSet dsLvl1 = getSqlManager().queryForCoreDataSet(dsCond, "BComService.searchComSrcLvl1");
		CoreDataSet dsLvl2 = getSqlManager().queryForCoreDataSet(dsCond, "BComService.searchComSrcLvl2");
		outParam.setCoreDataSet("dsLvl1", dsLvl1);
		outParam.setCoreDataSet("dsLvl2", dsLvl2);

		return outParam;
	}

	/**
	 * @메소드명 : searchComSrcLvl1
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 소싱그룹 레벨1 조회
	 */
	public CoreParamSet searchComSrcLvl1(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCond = inParams.getCoreDataSet("dsCond");
		CoreDataSet dsLvl1 = getSqlManager().queryForCoreDataSet(dsCond, "BComService.searchComSrcLvl");
		outParam.setCoreDataSet("dsLvl1", dsLvl1);

		return outParam;
	}

	/**
	 * @메소드명 : searchComSrcLvl2
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 소싱그룹 레벨2 조회
	 */
	public CoreParamSet searchComSrcLvl2(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCond = inParams.getCoreDataSet("dsCond");
		CoreDataSet dsLvl2 = getSqlManager().queryForCoreDataSet(dsCond, "BComService.searchComSrcLvl");
		outParam.setCoreDataSet("dsLvl2", dsLvl2);

		return outParam;
	}

	/**
	 * @메소드명 : readComPtnrInfo
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc :
	 */
	public CoreParamSet readComPtnrInfo(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsPtnrInfo = inParams.getCoreDataSet("dsPtnrInfo");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		if (!dsPtnrInfo.containsColumn("LANG_CD")) {
			dsPtnrInfo.setUpdate(true);
			dsPtnrInfo.addStringColumn("LANG_CD");
		}
		dsPtnrInfo.setColumn(0, "LANG_CD", gdsUserInfo.getColumnAsString(0, "LANG_CD"));

		outParam.setCoreDataSet("dsPtnrInfo",
				getSqlManager().queryForCoreDataSet(dsPtnrInfo, "BComService.readComPtnrInfo"));
		/*
		 * outParam.setCoreDataSet("dsPtnrEval",
		 * getSqlManager().queryForCoreDataSet(dsPtnrInfo,
		 * "BComService.readComPtnrEval"));
		 */
		outParam.setCoreDataSet("dsPtnrUser",
				getSqlManager().queryForCoreDataSet(dsPtnrInfo, "BComService.readComPtnrUserInfo"));

		return outParam;
	}

	/**
	 * @메소드명 : readComPtnrInfo
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc :
	 */
	public CoreParamSet sendComSms(CoreParamSet inParams) {

		return mailSmsModule.saveMailSms("PTNR_USER", inParams);
	}

	/**
	 * @메소드명 : searchComDept
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc :
	 */
	public CoreParamSet searchComDept(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);

		return outParam;
	}

	/**
	 * @메소드명 : readComUserInfo
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc :
	 */
	public CoreParamSet readComUserInfo(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsSrchOpt = inParams.getCoreDataSet("dsSrchOpt");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		if (!dsSrchOpt.containsColumn("LANG_CD")) {
			dsSrchOpt.setUpdate(true);
			dsSrchOpt.addStringColumn("LANG_CD");
		}

		dsSrchOpt.setColumn(0, "LANG_CD", gdsUserInfo.getColumnAsString(0, "LANG_CD"));
		CoreDataSet dsList = getSqlManager().queryForCoreDataSet(dsSrchOpt, "BComService.readComUserInfo");
		outParam.setCoreDataSet("dsList", dsList);

		return outParam;
	}

	/**
	 * @메소드명 : readComNoticePop
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc :
	 */
	public CoreParamSet readComNoticePop(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");
		CoreDataSet dsBbs = inParams.getCoreDataSet("dsBbs");

		if (!dsBbs.containsColumn("LANG_CD")) {
			dsBbs.setUpdate(true);
			dsBbs.addStringColumn("LANG_CD");
		}
		dsBbs.setColumn(0, "LANG_CD", gdsUserInfo.getColumnAsString(0, "LANG_CD"));
		outParam.setCoreDataSet("dsBbs", getSqlManager().queryForCoreDataSet(dsBbs, "BComService.readComNoticePop"));

		CoreDataSet dsfile = outParam.getCoreDataSetInstance();
		dsfile.addStringColumn("BRANCH_CD");
		dsfile.addStringColumn("REF_TBL_NM");
		dsfile.addStringColumn("REF_KEY_1");
		dsfile.appendRow();
		dsfile.setColumn(0, "BRANCH_CD", "HMAX");
		dsfile.setColumn(0, "REF_TBL_NM", "'MM_CM_BBS'");
		dsfile.setColumn(0, "REF_KEY_1", dsBbs.getColumnAsString(0, "DOC_NO"));
		outParam.setCoreDataSet("FileInfo", dsfile);
		outParam = fileModule.getFileInfo(outParam);

		return outParam;
	}

	/**
	 * @메소드명 : readComPrHist
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc :
	 */
	public CoreParamSet readComPrHist(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsSrchOpt = inParams.getCoreDataSet("dsSrchOpt");

		outParam.setCoreDataSet("dsSrchOpt",
				getSqlManager().queryForCoreDataSet(dsSrchOpt, "BComService.readComPrHist"));

		return outParam;
	}

	/**
	 * @메소드명 : readComMtrlInfo
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 품목상세팝업
	 */
	public CoreParamSet readComMtrlInfo(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsMtrl = inParams.getCoreDataSet("dsMtrl");

		outParam.setCoreDataSet("dsMtrl", getSqlManager().queryForCoreDataSet(dsMtrl, "BComService.readComMtrlInfo"));
		/*
		 * CoreDataSet dsfile = outParam.getCoreDataSetInstance();
		 * dsfile.addStringColumn("BRANCH_CD");
		 * dsfile.addStringColumn("REF_TBL_NM");
		 * dsfile.addStringColumn("REF_KEY_1"); dsfile.appendRow();
		 * dsfile.setColumn(0, "BRANCH_CD", dsMtrl.getColumnAsString(0,
		 * "BRANCH_CD")); dsfile.setColumn(0, "REF_TBL_NM", "'MM_MTRL'");
		 * dsfile.setColumn(0, "REF_KEY_1", dsMtrl.getColumnAsString(0,
		 * "SRCH_MTRL_CD")); outParam.setCoreDataSet("FileInfo", dsfile);
		 * outParam = fileModule.getFileInfo(outParam);
		 */
		return outParam;
	}

	/**
	 * @메소드명 : readCompBranchCd
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 구매조직 조회
	 */
	public CoreParamSet readCompBranchCd(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		outParam.setCoreDataSet("dsBranchCd",
				getSqlManager().queryForCoreDataSet(inParams, "BComService.readCompBranchCd"));
		return outParam;
	}

	/**
	 * @메소드명 : searchComSrcGrp
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 소싱그룹 선택
	 */
	public CoreParamSet searchComSrcGrp(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		outParam.setCoreDataSet("dsList", getSqlManager().queryForCoreDataSet(inParams, "BComService.searchComSrcGrp"));
		return outParam;
	}

	/**
	 * @메소드명 : searchSetUser
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 개인화 사용자 정보 조회
	 */
	public CoreParamSet searchSetUser(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsUserInfo = inParams.getCoreDataSet("dsUserInfo");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");
		if (!dsUserInfo.containsColumn("LANG_CD")) {
			dsUserInfo.setUpdate(true);
			dsUserInfo.addStringColumn("LANG_CD");
		}
		dsUserInfo.setColumn(0, "LANG_CD", gdsUserInfo.getColumnAsString(0, "LANG_CD"));

		outParam.setCoreDataSet("dsUserInfo",
				getSqlManager().queryForCoreDataSet(dsUserInfo, "BComService.searchSetUser"));
		return outParam;
	}

	/**
	 * @메소드명 : checkSUserPW
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 협력사 비밀번호 변경전 체크
	 */
	public CoreParamSet checkSUserPW(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsUserInfo = inParams.getCoreDataSet("dsUserInfo");
		outParam.setCoreDataSet("dsReturn",
				getSqlManager().queryForCoreDataSet(dsUserInfo, "BComService.checkSUserPW"));

		return outParam;
	}

	/**
	 * @메소드명 : saveSSetUser
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 개인화 협력사 사용자 정보 저장
	 */
	public CoreParamSet saveSSetUser(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsUserInfo = inParams.getCoreDataSet("dsUserInfo");

		getSqlManager().updateToCoreDataSet(dsUserInfo, "BComService.saveSSetUser");

		return outParam;
	}

	/**
	 * @메소드명 : saveSetUser
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 개인화 사용자 정보 저장
	 */
	public CoreParamSet saveSetUser(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsUserInfo = inParams.getCoreDataSet("dsUserInfo");

		getSqlManager().updateToCoreDataSet(dsUserInfo, "BComService.saveSetUser");

		return outParam;
	}

	/**
	 * @메소드명 : ubiReport
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 리포트변환
	 */
	public CoreParamSet ubiReport(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsParams = inParams.getCoreDataSet("dsParams");
		CoreDataSet dsUserInfo = inParams.getCoreDataSet("dsUserInfo");

		// 세션가져오기
		HttpServletRequest curRequest = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes())
				.getRequest();
		HttpSession session = curRequest.getSession();

		try {
			String appUrl = "http://localhost:8090/"; // 리포팅서버

			String fileURL = appUrl + "/ubi4"; // 리포트파일경로
			String ubiServerURL = appUrl + "/UbiServer"; // 리포트서버
			String ds = "";
			// 리포트파일 경로
			String jrfFileDir = "";
			if ("service".equals(Config.getString("BASIC.MODE"))) {
				ds = "KPIC";
				jrfFileDir = appUrl + "/ubi4/work/";
			} else {
				ds = "DEV";
				jrfFileDir = appUrl + "/ubi4/work_dev/";
			}

			String fileExtension = "";

			// 리포트 파일명
			String jrfFileName = dsParams.getColumnAsString(0, "JRF_FILE_NAME");
			if ("".equals(jrfFileName) || "" == jrfFileName) {
				new NullPointerException();
			}
			// 리포트파일 변환타입
			String exportfileType = dsParams.getColumnAsString(0, "EXPOTR_FILE_TYPE");
			if ("".equals(exportfileType) || exportfileType == null)
				exportfileType = "URFIA";

			// 변환된 리포트파일명
			String exportFileName = dsParams.getColumnAsString(0, "EXPORT_FILE_NAME");
			LOG.info("exportFileName 11==" + exportFileName);
			if ("".equals(exportFileName) || exportFileName == null) {
				exportFileName = jrfFileName.replace(".jrf", "");
			}
			LOG.info("exportFileName 22==" + exportFileName);
			// 변환파일 네임에 확장자를 넣었다면 확장자를 지워준다.
			if (exportFileName.indexOf(".") > -1) {
				exportFileName = exportFileName.substring(0, (exportFileName.lastIndexOf("."))) + "_"
						+ dsParams.getColumnAsString(0, "REF_KEY_1") + "_" + dsParams.getColumnAsString(0, "REF_KEY_2");
			}
			LOG.info("exportFileName 33==" + exportFileName);
			// 파일의 확장자명
			if ("URFIA".equals(exportfileType)) {
				// fileExtension = ".xml";
				fileExtension = "";
			} else {
				fileExtension = "." + exportfileType.toLowerCase();
			}

			// 변환된 리포트파일의 경로
			String exportFilePath = session.getServletContext().getRealPath("/ubi4/export/") + "\\" + exportFileName
					+ ("URFIA".equals(exportfileType) ? "" : fileExtension);

			// 디렉토리 생성
			File desti = new File(session.getServletContext().getRealPath("/ubi4/export"));
			// 해당 디렉토리의 존재여부를 확인
			if (!desti.exists()) {
				// 없다면 생성
				desti.mkdirs();
			}

			// String exportFilePath = "D:/"+"/"+exportFileName +
			// ("URFIA".equals(exportfileType) ? "" : fileExtension);
			// 리포트파일에 넘길 아규먼트
			String arg = "BRANCH_CD#" + dsParams.getColumnAsString(0, "BRANCH_CD") + "#"
					+ dsParams.getColumnAsString(0, "COL_NM1") + "#" + dsParams.getColumnAsString(0, "REF_KEY_1") + "#"
					+ dsParams.getColumnAsString(0, "COL_NM2") + "#" + dsParams.getColumnAsString(0, "REF_KEY_2")
					+ "#IS_SIGN#Y" + "#SIGN_USER_NM#" + dsParams.getColumnAsString(0, "SIGN_USER_NM");

			UbiViewer ubi = new UbiViewer(false, false);

			ubi.fileURL = fileURL;
			ubi.ubiServerURL = ubiServerURL;
			ubi.isLocalFile = true;
			ubi.jrfFileDir = jrfFileDir;
			ubi.jrfFileName = jrfFileName;
			ubi.arg = arg;
			ubi.dataSource = ds;
			ubi.setExportParams(exportfileType, exportFilePath);
			ubi.exectype = "TYPE6";
			ubi.fontRevision = true;
			ubi.isDebug = false;

			boolean isSuccess = ubi.loadReport();
			// boolean isSuccess = true;

			if (isSuccess) {
				outParam.setErrorCode(0);
				outParam.setErrorMessage("Export Success!");
				LOG.info(exportFileName + " Export Success!");

				/// 데이터셋 생성
				CoreDataSet dsHtml = outParam.getCoreDataSetInstance();
				dsHtml.addStringColumn("CONTENT");
				dsHtml.addStringColumn("TBL_NM");
				dsHtml.addStringColumn("COL_NM1");
				dsHtml.addStringColumn("COL_NM2");
				dsHtml.addStringColumn("REF_KEY_1");
				dsHtml.addStringColumn("REF_KEY_2");
				int row = dsHtml.appendRow();

				if ("MM_CNTR_ADD".equals(dsParams.getColumnAsString(0, "TBL_NM"))) {
					dsParams.setColumn(0, "REF_KEY_3", "NORMAL");
					dsParams.setColumn(0, "REF_TBL_NM", "'MM_CNTR'");
				}
				outParam.setCoreDataSet("FileInfo", dsParams);
				outParam = fileModule.getFileInfo(outParam);

				CoreDataSet dsfile = outParam.getCoreDataSetInstance();
				dsfile = outParam.getCoreDataSet("ds_files");

				String content = "";

				for (int k = 0; k < dsfile.getRowCount(); k++) {
					content += fileModule.fileHashSHA256(dsfile.getColumnAsString(k, "PHY_FILE_NM"),
							dsfile.getColumnAsString(k, "FILE_GUBUN")) + "▩";
				}

				String totalContent = fileModule.fileToBinary(exportFilePath) + "▩" + content;
				String[] dataString = totalContent.split("▩");

				dsHtml.setColumn(row, "CONTENT", totalContent);
				dsHtml.setColumn(row, "TBL_NM", dsParams.getColumnAsString(0, "TBL_NM"));
				dsHtml.setColumn(row, "COL_NM1", dsParams.getColumnAsString(0, "COL_NM1"));
				dsHtml.setColumn(row, "COL_NM2", dsParams.getColumnAsString(0, "COL_NM2"));
				dsHtml.setColumn(row, "REF_KEY_1", dsParams.getColumnAsString(0, "REF_KEY_1"));
				dsHtml.setColumn(row, "REF_KEY_2", dsParams.getColumnAsString(0, "REF_KEY_2"));
				outParam.setCoreDataSet("dsHtml", dsHtml);

				getSqlManager().updateToCoreDataSet(dsHtml, "BComService.saveSignOrgDoc");

			} else {
				outParam.setErrorCode(-1);
				outParam.setErrorMessage("Export Fail!");
				LOG.info(exportFileName + " Export Fail!");
			}
		} catch (NullPointerException e) {
			LOG.error("NullPointerException:" + e.toString());
			outParam.setErrorCode(-1);
			outParam.setErrorMessage("Report File NotFind");
			e.printStackTrace();
		} catch (Exception e) {
			LOG.error("Exception:" + e.toString());
			outParam.setErrorCode(-1);
			outParam.setErrorMessage("_MSG_PROCESS_FAIL");
			e.printStackTrace();
		}

		return outParam;
	}

	/**
	 * @메소드명 : saveSigned
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 협력업체가 서명한 데이터와 대한유화 서명한 데이터를 저장한다.
	 */
	public CoreParamSet saveSigned(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsSignData = inParams.getCoreDataSet("dsSignData");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		try {
			dsSignData.setColumn(0, "USER_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
			dsSignData.setColumn(0, "USER_NM", gdsUserInfo.getColumnAsString(0, "USER_NM"));

			String signeddata = dsSignData.getColumnAsString(0, "SIGN_DATA_B");

			int nRet = 0;

			crosscert.Base64 CBase64 = new crosscert.Base64();
			nRet = CBase64.Decode(signeddata.getBytes(), signeddata.getBytes().length);
			if (nRet == 0) {
				System.out.println("서명값 Base64 Decode 결과 : 성공<br>");

				Verifier CVerifier = new Verifier();
				nRet = CVerifier.VerSignedData(CBase64.contentbuf, CBase64.contentlen);
				if (nRet == 0) {
					String sOrgData = new String(CVerifier.contentbuf);
					System.out.println("전자서명 검증 결과 : 성공<br>");
					System.out.println("원문 : " + sOrgData + "<br>");

					// 인증서 정보 추출 결과
					Certificate CCertificate = new Certificate();
					nRet = CCertificate.ExtractCertInfo(CVerifier.certbuf, CVerifier.certlen);

					System.out.println("인증서 정보 추출 결과: 성공 <br>");
					System.out.println("인증서 DN  : " + CCertificate.subject + "<br>");

					// 인증서 검증
					String policies = "";

					// 개인상호연동용(범용) //
					policies += "1.2.410.200004.5.2.1.2" + "|"; // 한국정보인증 개인
					policies += "1.2.410.200004.5.1.1.5" + "|"; // 한국증권전산 개인
					policies += "1.2.410.200005.1.1.1" + "|"; // 금융결제원 개인
					policies += "1.2.410.200004.5.4.1.1" + "|"; // 한국전자인증 개인
					policies += "1.2.410.200012.1.1.1" + "|"; // 한국무역정보통신 개인

					// 개인 용도제한용 인증서정책(OID) 용도 공인인증기관
					policies += "1.2.410.200004.5.4.1.101|"; // 은행거래용/보험용 한국전자인증
					policies += "1.2.410.200004.5.4.1.102|"; // 증권거래용 한국전자인증
					policies += "1.2.410.200004.5.4.1.103|"; // 신용카드용 한국전자인증
					policies += "1.2.410.200004.5.4.1.104|"; // 전자민원용 한국전자인증
					policies += "1.2.410.200004.5.2.1.7.1|"; // 은행거래용/보험용 한국정보인증
					policies += "1.2.410.200004.5.2.1.7.2|"; // 증권거래용/보험용 한국정보인증
					policies += "1.2.410.200004.5.2.1.7.3|"; // 신용카드용 한국정보인증
					policies += "1.2.410.200004.5.1.1.9|"; // 증권거래용/보험용 한국증전산
					policies += "1.2.410.200004.5.1.1.9.2|"; // 신용카드용 한국증전산
					policies += "1.2.410.200005.1.1.4|"; // 은행거래용/보험용 금융결제원
					policies += "1.2.410.200005.1.1.6.2|"; // 신용카드용 금융결제원
					policies += "1.2.410.200012.1.1.101|"; // 은행거래용/보험용 한국무역정보통신
					policies += "1.2.410.200012.1.1.103|"; // 증권거래용/보험용 한국무역정보통신
					policies += "1.2.410.200012.1.1.105|"; // 신용카드용 한국무역정보통신
					policies += "1.2.410.200005.1.1.4|"; // 은행 금결원
					// 법인상호연동용(범용)
					policies += "1.2.410.200004.5.2.1.1" + "|"; // 한국정보인증 법인
					policies += "1.2.410.200004.5.1.1.7" + "|"; // 한국증권전산 법인,
																// 단체, 개인사업자
					policies += "1.2.410.200005.1.1.5" + "|"; // 금융결제원 법인, 임의단체,
																// 개인사업자
					policies += "1.2.410.200004.5.4.1.2" + "|"; // 한국전자인증 법인,
																// 단체, 개인사업자
					policies += "1.2.410.200012.1.1.3" + "|"; // 한국무역정보통신 법인
					policies += "1.2.410.200004.5.4.1.3" + "|"; //
					policies += "1.2.410.200004.5.4.1.36" + "|"; //

					nRet = CCertificate.ValidateCert(CVerifier.certbuf, CVerifier.certlen, policies, 1);
					if (nRet == 0) {
						String signedData = "";
						System.out
								.println("인증서 검증 결과 : 성공<br> TYPE ===" + dsSignData.getColumnAsString(0, "SIGN_MODE"));
						if ("S".equals(dsSignData.getColumnAsString(0, "SIGN_MODE"))) {
							signedData = signeddata;
						} else {
							signedData = signCORS(signeddata);
							dsSignData.setColumn(0, "SIGN_DATA_A", signedData);
						}

						if ("S".equals(dsSignData.getColumnAsString(0, "SIGN_MODE"))) {
							// 전자서명한 데이터를 저장한다.
							getSqlManager().updateToCoreDataSet(dsSignData, "BComService.signedSingleSave");
							// 전자서명 후 발주 및 계약의 상태를 업데이트 한다.
							getSqlManager().updateToCoreDataSet(dsSignData, "BComService.signedSigleUpdStts");
						} else {
							// 전자서명한 데이터를 저장한다.
							getSqlManager().updateToCoreDataSet(dsSignData, "BComService.signedSave");
							// 전자서명 후 발주 및 계약의 상태를 업데이트 한다.
							getSqlManager().updateToCoreDataSet(dsSignData, "BComService.signedUpdStts");
						}

						if ("MM_CNTR_ADD".equals(dsSignData.getColumnAsString(0, "TBL_NM"))) {
							CoreDataSet dsCntrHistory = outParam.getCoreDataSetInstance();
							dsCntrHistory.addStringColumn("BRANCH_CD");
							dsCntrHistory.addStringColumn("CNTR_NO");
							dsCntrHistory.addStringColumn("CNTR_ORDR");
							dsCntrHistory.addStringColumn("TYPE");
							dsCntrHistory.addStringColumn("CNTNT");
							dsCntrHistory.addStringColumn("CHRGR_ID");
							dsCntrHistory.addStringColumn("CHRGR_NM");

							dsCntrHistory.appendRow();
							dsCntrHistory.setColumn(0, "BRANCH_CD", dsSignData.getColumnAsString(0, "BRANCH_CD"));
							dsCntrHistory.setColumn(0, "CNTR_NO", dsSignData.getColumnAsString(0, "REF_KEY_1"));
							dsCntrHistory.setColumn(0, "CNTR_ORDR", dsSignData.getColumnAsString(0, "REF_KEY_2"));
							dsCntrHistory.setColumn(0, "TYPE", "합의완료");
							dsCntrHistory.setColumn(0, "CHRGR_ID", dsSignData.getColumnAsString(0, "USER_ID"));
							dsCntrHistory.setColumn(0, "CHRGR_NM", dsSignData.getColumnAsString(0, "USER_NM"));
							dsCntrHistory.setColumn(0, "CNTNT",
									"합의완료" + ", 합의담당자 : " + dsSignData.getColumnAsString(0, "USER_NM"));

							getSqlManager().insertToCoreDataSet(dsCntrHistory, "BCntrService.saveCntrHistory");

						}
					} else {
						System.out.println("인증서 검증 결과 : 실패<br>");
						System.out.println("에러내용 : " + CCertificate.errmessage + "<br>");
						System.out.println("에러코드 : " + CCertificate.errcode + "<br>");

						outParam.setErrorCode(-1);
						outParam.setErrorMessage("전자서명에 실패 하였습니다 인증서 검증 결과 실패 : " + CCertificate.errmessage);
					}
				} else {
					System.out.println("전자서명 검증 결과 : 실패<br>");
					System.out.println("에러내용 : " + CVerifier.errmessage + "<br>");
					System.out.println("에러코드 : " + CVerifier.errcode + "<br>");

					outParam.setErrorCode(-1);
					outParam.setErrorMessage("전자서명에 실패 하였습니다 전자서명 검증 결과 실패 : " + CVerifier.errmessage);
				}
			} else {
				System.out.println("서명값 Base64 Decode 결과 : 실패<br>");
				System.out.println("에러내용 : " + CBase64.errmessage + "<br>");
				System.out.println("에러코드 : " + CBase64.errcode + "<br>");

				outParam.setErrorCode(-1);
				outParam.setErrorMessage("전자서명에 실패 하였습니다 서명값 Base64 Decode 결과 : " + CBase64.errmessage);
			}

			// 저장되어진 KEY 값을 전달한다.
			outParam.setCoreDataSet("dsSignData", dsSignData);

		} catch (

		Exception e) {
			outParam.setErrorCode(-1);
			outParam.setErrorMessage(e.getMessage());
			e.printStackTrace();
		}
		return outParam;
	}

	public String signCORS(String signedData) throws Exception {
		String sInput = signedData;

		int nPrilen = 0;
		int nCertlen = 0;
		int nRet;

		InputStream inPri = null;
		InputStream inCert = null;

		byte[] Prifilebuf;
		byte[] Certfilebuf;

		inPri = new FileInputStream(new File(Config.getString("CONT.SIGNCERT.KEY_PATH")));
		inCert = new FileInputStream(new File(Config.getString("CONT.SIGNCERT.DER_PATH")));

		nPrilen = inPri.available();
		Prifilebuf = new byte[nPrilen];
		nRet = inPri.read(Prifilebuf);
		inPri.close();

		PrivateKey privateKey = new PrivateKey();
		nRet = privateKey.DecryptPriKey(Config.getString("CONT.CERT.PASSWORD"), Prifilebuf, nPrilen);

		if (nRet != 0) {
			LOG.error("errmsg : " + privateKey.errmessage);
			throw new Exception("_MSG_SYSTEM_ERR");
		}

		nCertlen = inCert.available();
		Certfilebuf = new byte[nCertlen];

		nRet = inCert.read(Certfilebuf);
		inCert.close();

		Signer signer = new Signer();
		nRet = signer.GetSignedData(privateKey.prikeybuf, privateKey.prikeylen, Certfilebuf, nCertlen,
				sInput.getBytes(), sInput.getBytes().length);

		if (nRet != 0) {
			LOG.error("errmsg : " + signer.errmessage);
			throw new Exception("_MSG_SYSTEM_ERR");
		}

		Verifier verifier = new Verifier();
		nRet = verifier.VerSignedData(signer.signedbuf, signer.signedlen);

		if (nRet != 0) {
			LOG.error("�쒕챸寃�利� �먮윭�댁슜 : " + verifier.errmessage);
			throw new Exception("_MSG_SYSTEM_ERR");
		}

		Certificate certificate = new Certificate();
		nRet = certificate.ExtractCertInfo(verifier.certbuf, verifier.certlen);

		LOG.debug("result : " + Integer.toHexString(nRet));
		LOG.debug("version : " + certificate.version);
		LOG.debug("serial : " + certificate.serial);
		LOG.debug("issuer : " + certificate.issuer);
		LOG.debug("subject : " + certificate.subject);
		LOG.debug("subjectAlgId : " + certificate.subjectAlgId);
		LOG.debug("from : " + certificate.from);
		LOG.debug("to : " + certificate.to);
		LOG.debug("signatureAlgId : " + certificate.signatureAlgId);
		LOG.debug("pubkey : " + certificate.pubkey);
		LOG.debug("signature : " + certificate.signature);
		LOG.debug("issuerAltName : " + certificate.issuerAltName);
		LOG.debug("subjectAltName : " + certificate.subjectAltName);
		LOG.debug("keyusage : " + certificate.keyusage);
		LOG.debug("policy : " + certificate.policy);
		LOG.debug("basicConstraint : " + certificate.basicConstraint);
		LOG.debug("policyConstraint : " + certificate.policyConstraint);
		LOG.debug("distributionPoint : " + certificate.distributionPoint);
		LOG.debug("authorityKeyId : " + certificate.authorityKeyId);
		LOG.debug("subjectKeyId : " + certificate.subjectKeyId);

		if (nRet != 0) {
			LOG.error("errmsg : " + certificate.errmessage);
			throw new Exception("_MSG_SYSTEM_ERR");
		}

		String Policies = "1.2.410.200004.5.2.1.2|1.2.410.200004.5.4.1.1|1.2.410.200004.5.4.1.2|1.2.410.200004.5.4.1.3|1.2.410.200004.5.4.1.4|1.2.410.200004.5.4.1.5|1.2.410.200004.5.4.1.3|1.2.410.200004.5.4.1.36";

		nRet = certificate.ValidateCert(verifier.certbuf, verifier.certlen, Policies, 0);

		if (nRet != 0) {
			LOG.error("errcode : " + Integer.toHexString(certificate.errcode));
			LOG.error("errmsg : " + certificate.errmessage);
			throw new Exception("_MSG_SYSTEM_ERR");
		}
		Base64 CBase64 = new Base64();
		nRet = CBase64.Encode(signer.signedbuf, signer.signedbuf.length);
		if (nRet != 0) {
			LOG.error("errcode : " + Integer.toHexString(CBase64.errcode));
			LOG.error("errmsg : " + CBase64.errmessage);
			// throw new ProcessingException("_MSG_SYSTEM_ERR");
		}

		String SignedData = new String(CBase64.contentbuf);

		return SignedData;
	}

	/**
	 * @메소드명 : selectCntrTemplatePop
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 계약내용조회
	 */
	public CoreParamSet selectCntrTemplatePop(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsTmplt = inParams.getCoreDataSet("dsTmplt");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		outParam.setCoreDataSet("dsTmplt",
				getSqlManager().queryForCoreDataSet(dsTmplt, "BComService.selectCntrTemplatePop"));

		return outParam;
	}

	/**
	 * @메소드명 : searchAttchFile
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 계약내용조회
	 */
	public CoreParamSet searchAttchFile(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsFileCond = inParams.getCoreDataSet("dsFileCond");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		/* File read 부분 */
		CoreDataSet dsfile = outParam.getCoreDataSetInstance();
		dsfile.addStringColumn("BRANCH_CD");
		dsfile.addStringColumn("REF_TBL_NM");
		dsfile.addStringColumn("REF_KEY_1");
		dsfile.addStringColumn("REF_KEY_2");
		dsfile.addStringColumn("REF_KEY_3");
		dsfile.addStringColumn("REF_KEY_4");
		dsfile.addStringColumn("REF_KEY_5");
		dsfile.appendRow();
		dsfile.setColumn(0, "BRANCH_CD", dsFileCond.getColumnAsString(0, "BRANCH_CD"));
		dsfile.setColumn(0, "REF_TBL_NM", dsFileCond.getColumnAsString(0, "REF_TBL_NM"));
		dsfile.setColumn(0, "REF_KEY_1", dsFileCond.getColumnAsString(0, "REF_KEY_1"));
		if (null != dsFileCond.getColumnAsString(0, "REF_KEY_2")) {
			dsfile.setColumn(0, "REF_KEY_2", dsFileCond.getColumnAsString(0, "REF_KEY_2"));
		}
		if (null != dsFileCond.getColumnAsString(0, "REF_KEY_3")) {
			dsfile.setColumn(0, "REF_KEY_3", dsFileCond.getColumnAsString(0, "REF_KEY_3"));
		}
		if (null != dsFileCond.getColumnAsString(0, "REF_KEY_4")) {
			dsfile.setColumn(0, "REF_KEY_4", dsFileCond.getColumnAsString(0, "REF_KEY_4"));
		}
		if (null != dsFileCond.getColumnAsString(0, "REF_KEY_5")) {
			dsfile.setColumn(0, "REF_KEY_5", dsFileCond.getColumnAsString(0, "REF_KEY_5"));
		}
		outParam.setCoreDataSet("FileInfo", dsfile);
		outParam = fileModule.getFileInfo(outParam);

		outParam.setCoreDataSet("dsFileInfo", dsFileCond);

		return outParam;
	}

	/**
	 * @메소드명 : saveAttchFile
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 첨부파일저장
	 */
	public CoreParamSet saveAttchFile(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsFileCond = inParams.getCoreDataSet("dsFileCond");
		CoreDataSet dsFileInfo = inParams.getCoreDataSet(dsFileCond.getColumnAsString(0, "DS_NM"));
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		inParams.put("bizGubun", dsFileCond.getColumnAsString(0, "FILE_GUBUN"));
		outParam = fileModule.saveFileInfo(inParams);

		outParam.setCoreDataSet("dsFileInfo", dsFileCond);
		outParam.setCoreDataSet(dsFileCond.getColumnAsString(0, "DS_NM"), dsFileInfo);

		return outParam;
	}

	/**
	 * @메소드명 : searchAttchFileHash
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 갑지계약 첨부파일 해쉬값 추출
	 */
	public CoreParamSet searchAttchFileHash(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsFileCond = inParams.getCoreDataSet("dsFileCond");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		try {
			outParam.setCoreDataSet("FileInfo", dsFileCond);
			outParam = fileModule.getFileInfo(outParam);

			CoreDataSet dsfile = outParam.getCoreDataSetInstance();
			dsfile = outParam.getCoreDataSet("ds_files");

			String content = "";

			for (int k = 0; k < dsfile.getRowCount(); k++) {
				content += fileModule.fileHashSHA256(dsfile.getColumnAsString(k, "PHY_FILE_NM"),
						dsfile.getColumnAsString(k, "FILE_GUBUN")) + "▩";
			}

			dsFileCond.setColumn(0, "CONTENT", content);

			outParam.remove("FileInfo");
			outParam.put("dsFileCond", dsFileCond);

			getSqlManager().updateToCoreDataSet(dsFileCond, "BComService.saveSignOrgDoc");
		} catch (Exception e) {
			e.printStackTrace();
		}

		return outParam;
	}

	/**
	 * @메소드명 : searchAttchFileUnSign
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 갑지계약 첨부파일 전자 서명 복호화
	 */
	public CoreParamSet searchAttchFileUnSign(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsFileCond = inParams.getCoreDataSet("dsFileCond");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		try {
			outParam.setCoreDataSet("FileInfo", dsFileCond);
			outParam = fileModule.getFileInfo(outParam);

			CoreDataSet dsfile = outParam.getCoreDataSetInstance();
			dsfile = outParam.getCoreDataSet("ds_files");

			String content = "";

			for (int k = 0; k < dsfile.getRowCount(); k++) {
				content += fileModule.fileHashSHA256(dsfile.getColumnAsString(k, "PHY_FILE_NM"),
						dsfile.getColumnAsString(k, "FILE_GUBUN")) + "▩";
			}

			String[] fileHash = content.split("▩");

			CoreDataSet dsSignInfo = getSqlManager().queryForCoreDataSet(dsFileCond, "BComService.unSignContent");

			String OrgData = null;
			if ("S".equals(dsFileCond.getColumnAsString(0, "SIGN_MODE"))) {
				OrgData = unSignKOPS(dsSignInfo.getColumnAsString(0, "B_SIGN_DATA"));
			} else {
				OrgData = unSignKOPS(unSignKOPS(dsSignInfo.getColumnAsString(0, "A_SIGN_DATA")));
			}

			String[] dataString = OrgData.split("▩");
			if (content.equals(OrgData)) {
				for (int i = 0; i < fileHash.length; i++) {
					if (!fileHash[i].equals(dataString[i])) {
						outParam.remove("ds_files");
						outParam.setErrorCode(-1);
						outParam.setErrorMessage("파일이 변경되었습니다.");
						return outParam;
					}
				}
			}

			/*
			 * System.out.println(
			 * "================================================");
			 * System.out.println(content); for (int i = 0; i < fileHash.length;
			 * i++) { System.out.println(fileHash[i]); } System.out.println(
			 * "------------------------------------------------");
			 * System.out.println(OrgData); for (int i = 0; i <
			 * dataString.length; i++) { System.out.println(dataString[i]); }
			 * System.out.println(
			 * "================================================");
			 */

		} catch (Exception e) {
			e.printStackTrace();
		}

		return outParam;
	}

	/**
	 * @메소드명 : saveTempltOrgDoc
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 템플릿 원본문서 저장
	 */
	public CoreParamSet saveTempltOrgDoc(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsTmplt = inParams.getCoreDataSet("dsTmplt");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		try {
			if ("MM_CNTR_ADD".equals(dsTmplt.getColumnAsString(0, "TBL_NM"))) {
				dsTmplt.setColumn(0, "REF_KEY_3", "NORMAL");
				dsTmplt.setColumn(0, "REF_TBL_NM", "'MM_CNTR'");
			}

			CoreDataSet dsSignInfo = getSqlManager().queryForCoreDataSet(dsTmplt, "BComService.selectSignInfo");

			outParam.setCoreDataSet("FileInfo", dsTmplt);
			outParam = fileModule.getFileInfo(outParam);

			CoreDataSet dsfile = outParam.getCoreDataSetInstance();
			dsfile = outParam.getCoreDataSet("ds_files");

			String content = "";

			for (int k = 0; k < dsfile.getRowCount(); k++) {
				content += fileModule.fileHashSHA256(dsfile.getColumnAsString(k, "PHY_FILE_NM"),
						dsfile.getColumnAsString(k, "FILE_GUBUN")) + "▩";
			}

			String totalContent = dsTmplt.getColumnAsString(0, "CONTENT") + "<P></P>" + "<P></P>" + "<P></P>"
					+ "<table border='1' cellpadding='1' cellspacing='1' style='width: 100%;'>" + "<thead>" + "<tr>"
					+ "<th colspan='2' rowspan='1' scope='col' style='width: 50%;'>발 주 자</th>"
					+ "<th colspan='2' rowspan='1' scope='col' style='width: 50%;'>계 약 자</th>" + "</tr>" + "</thead>"
					+ "<tbody>" + "<tr>" + "<td style='width: 10%;'>등록번호</td>" + "<td>"
					+ dsSignInfo.getColumnAsString(0, "A_BIZ_NO") + "</td>" + "<td style='width: 10%;'>등록번호</td>"
					+ "<td>" + dsSignInfo.getColumnAsString(0, "B_BIZ_NO") + "</td>" + "</tr>" + "<tr>"
					+ "<td style='width: 10%;'>상호</td>" + "<td>" + dsSignInfo.getColumnAsString(0, "A_CORP_NM")
					+ "</td>" + "<td style='width: 10%;'>상호</td>" + "<td>"
					+ dsSignInfo.getColumnAsString(0, "B_CORP_NM") + "</td>" + "</tr>" + "<tr>"
					+ "<td style='width: 10%;'>사업장 주소</td>" + "<td>" + dsSignInfo.getColumnAsString(0, "A_ADDR")
					+ "</td>" + "<td style='width: 10%;'>사업장 주소</td>" + "<td>"
					+ dsSignInfo.getColumnAsString(0, "B_ADDR") + "</td>" + "</tr>" + "<tr>"
					+ "<td style='width: 10%;'>대표자</td>" + "<td>" + dsSignInfo.getColumnAsString(0, "A_PNAME") + "</td>"
					+ "<td style='width: 10%;'>대표자</td>" + "<td>" + dsSignInfo.getColumnAsString(0, "B_PNAME") + "</td>"
					+ "</tr>" + "<tr>" + "<td style='width: 10%;'>담당자</td>" + "<td>"
					+ dsSignInfo.getColumnAsString(0, "A_CHARGR") + "</td>" + "<td style='width: 10%;'>담당자</td>"
					+ "<td>" + gdsUserInfo.getColumnAsString(0, "USER_NM") + "</td>" + "</tr>" + "<tr>"
					+ "<td style='width: 10%;'>전자서명</td>" + "<td>" + dsSignInfo.getColumnAsString(0, "A_SIGN") + "</td>"
					+ "<td style='width: 10%;'>전자서명</td>" + "<td>" + dsSignInfo.getColumnAsString(0, "B_SIGN") + "</td>"
					+ "</tr>" + "</tbody>" + "</table>" + "<P></P>" + "<P></P>"
					+ "<DIV>* 전자서명법 등 관련 법령(전자서명법 제 3조 1항, 2항, 전자거래기본법 제 5조, 7조, 18조)에 의하여 효력이 인정되는 공인인증기관이 발행한 인증서를 사용하여 전자서명된 문서입니다. </DIV>"
					+ "▩" + content;
			dsTmplt.setColumn(0, "CONTENT", totalContent);

			outParam.remove("FileInfo");
			outParam.setCoreDataSet("dsTmplt", dsTmplt);
			getSqlManager().updateToCoreDataSet(dsTmplt, "BComService.saveSignOrgDoc");

		} catch (Exception e) {
			outParam.setErrorCode(-1);
			outParam.setErrorMessage(e.getMessage());
			e.printStackTrace();
		}

		return outParam;
	}

	/**
	 * @메소드명 : unSignReport
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 전자서명 복호화
	 */
	public CoreParamSet unSignReport(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsUnSign = inParams.getCoreDataSet("dsUnSign");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		// 세션가져오기
		HttpServletRequest curRequest = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes())
				.getRequest();
		HttpSession session = curRequest.getSession();

		CoreDataSet dsSignInfo = getSqlManager().queryForCoreDataSet(dsUnSign, "BComService.unSignContent");

		try {

			FileOutputStream fos = null;

			String OrgData = "";

			if ("S".equals(dsUnSign.getColumnAsString(0, "SIGN_MODE"))) {
				if ("".equals(dsSignInfo.getColumnAsString(0, "B_SIGN_DATA"))) {
					outParam.setErrorCode(-1);
					outParam.setErrorMessage("서명데이터가 비어 있습니다.");
					return outParam;
				} else {
					OrgData = unSignKOPS(dsSignInfo.getColumnAsString(0, "B_SIGN_DATA"));
				}
			} else {
				if ("".equals(dsSignInfo.getColumnAsString(0, "A_SIGN_DATA"))) {
					outParam.setErrorCode(-1);
					outParam.setErrorMessage("서명데이터가 비어 있습니다.");
					return outParam;
				} else {
					OrgData = unSignKOPS(unSignKOPS(dsSignInfo.getColumnAsString(0, "A_SIGN_DATA")));
				}
			}

			String[] dataString = OrgData.split("▩");

			OrgData = dataString[0];

			if ("MM_CNTR_ADD".equals(dsUnSign.getColumnAsString(0, "TBL_NM"))) {
				dsUnSign.setColumn(0, "TBL_NM", "CNTR");
			}

			String fileUrl = "";
			fileUrl = session.getServletContext().getRealPath("/ubi4/export/") + "/"
					+ dsUnSign.getColumnAsString(0, "TBL_NM") + "_" + dsUnSign.getColumnAsString(0, "REF_KEY_1") + "_"
					+ dsUnSign.getColumnAsString(0, "REF_KEY_2") + ".urf";

			System.out.println(fileUrl);
			File destFile = new File(fileUrl);
			byte[] buff = OrgData.getBytes();
			String toStr = new String(buff);
			byte[] b64dec = fileModule.base64Dec(toStr);

			System.out.println("============" + destFile.toString());
			try {
				fos = new FileOutputStream(destFile);
				fos.write(b64dec);
				fos.close();
			} catch (IOException e) {
				System.out.println(
						"Exception position : FileUtil - binaryToFile(String binaryFile, String filePath, String fileName)");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}

		return outParam;
	}

	public String unSignKOPS(String signedData) throws Exception {
		byte[] BSign = signedData.getBytes();

		int nRet = 0;

		Base64 CBase64 = new Base64();
		nRet = CBase64.Decode(BSign, BSign.length);

		if (nRet != 0) {
			LOG.error("errcode : " + Integer.toHexString(CBase64.errcode));
			LOG.error("errmsg : " + CBase64.errmessage);
		}

		Verifier verifier = new Verifier();
		nRet = verifier.VerSignedData(CBase64.contentbuf, CBase64.contentlen);

		if (nRet != 0) {
			LOG.error("errcode : " + verifier.errcode);
			LOG.error("errmsg : " + verifier.errmessage);
		}

		String sOrgData = new String(verifier.contentbuf);
		sOrgData = sOrgData.replaceAll("&amp", "&");
		sOrgData = sOrgData.replaceAll("&lt", "<");
		sOrgData = sOrgData.replaceAll("&gt", ">");

		return sOrgData;
	}

	/**
	 * @메소드명 : selectCntrTemplateUnSignPop
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 템플릿 전자서명 복호화
	 */
	public CoreParamSet selectCntrTemplateUnSignPop(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsTmplt = inParams.getCoreDataSet("dsTmplt");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		CoreDataSet dsSignInfo = getSqlManager().queryForCoreDataSet(dsTmplt, "BComService.unSignContent");

		try {

			FileOutputStream fos = null;

			String OrgData = "";

			if ("S".equals(dsTmplt.getColumnAsString(0, "SIGN_MODE"))) {
				if ("".equals(dsSignInfo.getColumnAsString(0, "B_SIGN_DATA"))) {
					outParam.setErrorCode(-1);
					outParam.setErrorMessage("서명데이터가 비어 있습니다.");
				} else {
					OrgData = unSignKOPS(dsSignInfo.getColumnAsString(0, "B_SIGN_DATA"));
				}
			} else {
				if ("".equals(dsSignInfo.getColumnAsString(0, "A_SIGN_DATA"))) {
					outParam.setErrorCode(-1);
					outParam.setErrorMessage("서명데이터가 비어 있습니다.");
				} else {
					OrgData = unSignKOPS(unSignKOPS(dsSignInfo.getColumnAsString(0, "A_SIGN_DATA")));
				}
			}

			String[] dataString = OrgData.split("▩");

			dsTmplt.setColumn(0, "CONTENT", dataString[0]);
			outParam.setCoreDataSet("dsTmplt", dsTmplt);

		} catch (Exception e) {
			e.printStackTrace();
		}

		return outParam;
	}

	/**
	 * @메소드명 : chkPreSign
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 전자서명 전 체크
	 */
	public CoreParamSet chkPreSign(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsParams = inParams.getCoreDataSet("dsParams");
		CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

		CoreDataSet dsPreSignInfo = getSqlManager().queryForCoreDataSet(dsParams, "BComService.preSignInfo");
		if ("MM_CNTR_ADD".equals(dsParams.getColumnAsString(0, "TBL_NM"))) {
			if ("Y".equals(dsPreSignInfo.getColumnAsString(0, "ALT_TSTAMP"))) {
				if (0 != dsPreSignInfo.getColumnAsInteger(0, "TSTAMP")) {
					outParam.setErrorCode(-1);
					outParam.setErrorMessage("인지세를 확인해주세요.");
				}
			}
		}

		return outParam;
	}
	
	/**
	 * @메소드명 : chkPreSign
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 전자서명 전 체크
	 */ 
	
	public void insertPurHist(String PrItemId , String DocNo , String Type , String PrgrsStep , String Rmark , CoreParamSet inParams) {
		
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsPrItemHist = outParam.getCoreDataSetInstance();
		
		dsPrItemHist.addStringColumn("PR_ITEM_ID");
		dsPrItemHist.addStringColumn("DOC_NO");
		dsPrItemHist.addStringColumn("TYPE");
		dsPrItemHist.addStringColumn("PRGRS_STEP");
		dsPrItemHist.addStringColumn("RMARK");

		dsPrItemHist.appendRow();
		dsPrItemHist.setColumn(0, "PR_ITEM_ID"	,PrItemId);
		dsPrItemHist.setColumn(0, "DOC_NO"		,DocNo);
		dsPrItemHist.setColumn(0, "TYPE"		,Type);
		dsPrItemHist.setColumn(0, "PRGRS_STEP"	,PrgrsStep);
		dsPrItemHist.setColumn(0, "RMARK"		,Rmark);
		
		dsPrItemHist.setActiveRow(0);
		// 구매요청품목의 히스토리를 등록한다.
		getSqlManager().insertToCoreDataSet(dsPrItemHist, "CComHistService.insertPurHist");
	}
	
	
}
