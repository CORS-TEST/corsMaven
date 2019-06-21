package epro.com.service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import core.common.util.CodeUtil;
import core.common.util.ResourceUtil;
import core.exception.userhandle.UserHandleException;
import core.vo.model.coreset.CoreDataSet;
import core.vo.model.coreset.CoreDataSetFactory;
import core.vo.model.coreset.CoreParamSet;
import core.vo.model.coreset.CoreParamSetFactory;
import core.web.service.CoreService;
import epro.com.module.MailSmsModule;

/**
 * epro.com.service CLoginService.java
 * 
 * @author : mjpark
 * @Date : 2017. 7. 4.
 */
@Service
public class CLoginService extends CoreService {
	private static final Log LOG = LogFactory.getLog(CLoginService.class);

	@Autowired
	MailSmsModule MailSmsModule;

	/**
	 * @MenthdName : saveComLogin
	 * @InputParameterType :
	 * @OutputParameterType : CoreParamSet
	 */
	public CoreParamSet saveComLogin(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsUserInfo = inParams.getCoreDataSet("dsUser");

		CoreDataSet chkData = null;
		if ("".equals(dsUserInfo.getColumnAsString(0, "AD_ID")) || null == dsUserInfo.getColumnAsString(0, "AD_ID")) {
			chkData = getSqlManager().queryForCoreDataSet(dsUserInfo, "cLoginService.loginChk");
		} else {
			chkData = getSqlManager().queryForCoreDataSet(dsUserInfo, "cLoginService.loginSsoChk");
		}

		if (chkData.getRowCount() < 1)
			throw new UserHandleException("-1", "ID is not exist");

		CoreDataSet gdsUserInfo = getSqlManager().queryForCoreDataSet(chkData, "cLoginService.userInfo");

		if (gdsUserInfo.getRowCount() < 1 || "N".equals(chkData.getColumnAsString(0, "LOGIN_CHK")))
			throw new UserHandleException("-1", "Pleases, Check the ID and Password , again.");

		// Session 세팅
		chkSession(gdsUserInfo);

		if ("S".equals(gdsUserInfo.getColumnAsString(0, "INT_USER_TYPE"))) {
			// if (!"SR10NCLO".equals(gdsUserInfo.getColumnAsString(0,
			// "CD_PTNR_STTS"))) {
			// throw new UserHandleException("-1", "시스템을 사용할 권한이 존재하지
			// 않습니다. 시스템관리자에게 문의하세요.");
			// }
		}
		if (!"".equals(gdsUserInfo.getColumnAsString(0, "LANG_CD")) && null != gdsUserInfo.getColumnAsString(0, "LANG_CD")) {
			chkData.setColumn(0, "LANG_CD", gdsUserInfo.getColumnAsString(0, "LANG_CD"));
		}

		outParam.setCoreDataSet("gdsUserInfo", gdsUserInfo);
		outParam.setCoreDataSet("gdsMenu", getSqlManager().queryForCoreDataSet(chkData, "cLoginService.menu"));
		outParam.setCoreDataSet("gdsUserRole", getSqlManager().queryForCoreDataSet(chkData, "cLoginService.readAuth"));
		//outParam.setCoreDataSet("dsLabel", getSqlManager().queryForCoreDataSet(chkData, "cResourceService.getResourceString"));
		return outParam;
	}

	/**
	 * @MenthdName : chkSession
	 * @InputParameterType :
	 * @OutputParameterType :
	 */
	public void chkSession(CoreDataSet gdsUserInfo) {
		HttpServletRequest curRequest = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();
		HttpSession session = curRequest.getSession();

		if (session == null)
			throw new UserHandleException("-2", "인증 데이터가 잘못되었습니다");

		// 필터 체크용
		session.setAttribute("G_USER_ID", gdsUserInfo.getColumnAsString(0, "USER_ID"));
		session.setAttribute("G_USER_NM", gdsUserInfo.getColumnAsString(0, "USER_NM"));
		session.setAttribute("G_BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
		session.setAttribute("G_LANG_CD", gdsUserInfo.getColumnAsString(0, "LANG_CD"));
	}

	/**
	 * @MenthdName : searchComAllCodesLabel
	 * @InputParameterType :
	 * @OutputParameterType : CoreParamSet
	 */
	public CoreParamSet searchComAllCodesLabel(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);

		CoreDataSet dsParam = inParams.getCoreDataSetInstance();

		outParam.setCoreDataSet("dsLabel", ResourceUtil.getNexaResourceDataSet());
		outParam.setCoreDataSet("dsCommCd", CodeUtil.getNexacroCodeCoreDataSet());

		return outParam;
	}

	/**
	 * @MenthdName : findIdPw
	 * @InputParameterType :
	 * @OutputParameterType : CoreParamSet
	 */
	public CoreParamSet findIdPw(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");

		outParam = MailSmsModule.saveMailSms(dsCondition.getColumnAsString(0, "TYPE"), inParams);
		return outParam;
	}

	/**
	 * @MenthdName : ssoSession
	 * @InputParameterType :
	 * @OutputParameterType : CoreParamSet
	 */
	public CoreParamSet ssoSession(CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);
		CoreDataSet dsSso = getSqlManager().queryForCoreDataSet(CoreDataSetFactory.getDataSet(inParams), "cLoginService.readVersion");

		//HttpServletRequest curRequest = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();
		// String ssdid = "conin\\co_cors1";

		//		String ssdid = "";
		//
		//		if (null != curRequest.getUserPrincipal()) {
		//			ssdid = curRequest.getUserPrincipal().getName();
		//		}
		//
		//		if (!"".equals(ssdid) || null != ssdid) {
		//			if (ssdid.split("\\\\").length == 2) {
		//				String strDomain = ssdid.split("\\\\")[0];
		//				String strAccount = ssdid.split("\\\\")[1];
		//				dsSso.setColumn(0, "AD_ID", strAccount);
		//			}
		//		} else {
		//			dsSso.setColumn(0, "AD_ID", "");
		//		}
		outParam.setCoreDataSet("dsSso", dsSso);
		return outParam;
	}
}
