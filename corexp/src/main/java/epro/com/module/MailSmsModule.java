package epro.com.module;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import core.common.config.Config;
import core.common.constain.CoerConstain;
import core.common.util.FileReadUtil;
import core.exception.userhandle.UserHandleException;
import core.vo.model.coreset.CoreDataSet;
import core.vo.model.coreset.CoreDataSetFactory;
import core.vo.model.coreset.CoreParamSet;
import core.vo.model.coreset.CoreParamSetFactory;
import core.web.module.CoreModule;

@Service
public class MailSmsModule extends CoreModule {
	private static final Log LOG = LogFactory.getLog(MailSmsModule.class);

	@Autowired
	CommandModule commandModule;
	@Autowired
	FileModule fileModule;

	/**
	 * @메소드명 : saveItemToPrItem
	 * @input : CoreParamSet inParams
	 * @return : CoreParamSet outParam
	 * @desc : 비밀번호 찾기(PASSWORD) 협력사등록요청(PTNR_REQ) 입찰공고승인요청 / 입찰완료승인요청 /
	 *       평가승인요청(APRV) 입찰요청(RFQ_SEND) 입찰설명회(RFQ_INTRO) 우선대상업체선정(RFQ_SUCCESS)
	 *       입찰탈락(RFQ_FAIL) 협력사사용자(PTNR_USER) 입찰요청(TndrReq)
	 */
	public CoreParamSet saveMailSms(String module, CoreParamSet inParams) {
		CoreParamSet outParam = CoreParamSetFactory.create(inParams);

		if ("FIND_USER_ID".equals(module)) {
			CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");
			CoreDataSet dsUserInfo = getSqlManager().queryForCoreDataSet(dsCondition, "mailSmsService.readFindUserId");

			if ((dsUserInfo.getRowCount() < 1)) {
				throw new UserHandleException("1", "User information does not exist. Please, Check again.");
			}

			outParam.setCoreDataSet("dsEmail", dsUserInfo);
			dsUserInfo.setColumn(0, "EMAIL_TTL", "[HOPE] ID Information");

			dsUserInfo.setColumn(0, "SMSID",
					commandModule.getSeqNextval("MM_SYS_SMS_SEQ", CoerConstain.PROPAGATION_REQUIRED));
			dsUserInfo.setColumn(0, "SNDR_TEL", Config.getString("SMS.SNDR_TEL"));
			dsUserInfo.setColumn(0, "RCVR_TEL", dsUserInfo.getColumnAsString(0, "HP"));
			dsUserInfo.setColumn(0, "SND_CNTNT",
					"[HOPE] \n문의하신 아이디는 [" + dsUserInfo.getColumnAsString(0, "LOGIN_USER_ID") + "] 입니다.");
			dsUserInfo.setColumn(0, "BRANCH_CD", "HMAX");
			dsUserInfo.setColumn(0, "EMAIL_ID",
					commandModule.getSeqNextval("MM_SYS_EMAIL_SEQ", CoerConstain.PROPAGATION_REQUIRED));

			String fileString = "";
			fileString = FileReadUtil.readTemplateUrls("Mail_FindId.jsp", outParam);

			dsUserInfo.setColumn(0, "EMAIL_CNTNT", fileString);

			dsUserInfo.setColumn(0, "RCVR_EMAIL_ID", dsUserInfo.getColumnAsString(0, "EMAIL"));
			dsUserInfo.setColumn(0, "SNDR_EMAIL_ID", Config.getString("EMAIL.SNDR_EMAIL_ID"));
			dsUserInfo.setColumn(0, "SNDR_SYS_EMAIL_ID", Config.getString("EMAIL.SNDR_EMAIL_ID"));
			dsUserInfo.setColumn(0, "SNDR_SYS_TEL", Config.getString("EMAIL.SNDR_SYS_TEL"));

			outParam.setMessage("E-mail/Sms has been sent.");

			getSqlManager().insertToCoreDataSet(dsUserInfo, "mailSmsService.insertSms");
			getSqlManager().insertToCoreDataSet(dsUserInfo, "mailSmsService.insertEmail");

		} else if ("FIND_USER_PW".equals(module)) {

			CoreDataSet dsCondition = inParams.getCoreDataSet("dsCondition");
			CoreDataSet dsUserInfo = getSqlManager().queryForCoreDataSet(dsCondition, "mailSmsService.readFindUserPw");

			if ((dsUserInfo.getRowCount() < 1)) {
				throw new UserHandleException("1", "User information does not exist. Please, Check again.");
			}

			char pwCollection[] = new char[] { '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'A', 'B', 'C', 'D',
					'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
					'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
					's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')' };

			String ranPw = "";
			for (int i = 0; i < 10; i++) {
				int selectRandomPw = (int) (Math.random() * (pwCollection.length));
				ranPw += pwCollection[selectRandomPw];
			}

			dsUserInfo.setColumn(0, "SMSID",
					commandModule.getSeqNextval("MM_SYS_SMS_SEQ", CoerConstain.PROPAGATION_REQUIRED));
			dsUserInfo.setColumn(0, "SNDR_TEL", Config.getString("SMS.SNDR_TEL"));
			dsUserInfo.setColumn(0, "RCVR_TEL", dsUserInfo.getColumnAsString(0, "HP"));
			dsUserInfo.setColumn(0, "SND_CNTNT", "[HOPE] \n비밀번호가 " + ranPw + "로 초기화 되었습니다.");
			dsUserInfo.setColumn(0, "BRANCH_CD", "HMAX");
			dsUserInfo.setColumn(0, "PWD", ranPw);
			dsUserInfo.setColumn(0, "EMAIL_ID",
					commandModule.getSeqNextval("MM_SYS_EMAIL_SEQ", CoerConstain.PROPAGATION_REQUIRED));
			dsUserInfo.setColumn(0, "EMAIL_TTL", "[HOPE] Password Intialization");
			outParam.setCoreDataSet("dsEmail", dsUserInfo);

			String fileString = "";
			fileString = FileReadUtil.readTemplateUrls("Mail_FindPwd.jsp", outParam);

			dsUserInfo.setColumn(0, "EMAIL_CNTNT", fileString);

			dsUserInfo.setColumn(0, "RCVR_EMAIL_ID", dsUserInfo.getColumnAsString(0, "EMAIL"));
			dsUserInfo.setColumn(0, "SNDR_EMAIL_ID", Config.getString("EMAIL.SNDR_EMAIL_ID"));
			dsUserInfo.setColumn(0, "SNDR_SYS_EMAIL_ID", Config.getString("EMAIL.SNDR_EMAIL_ID"));
			dsUserInfo.setColumn(0, "SNDR_SYS_TEL", Config.getString("EMAIL.SNDR_SYS_TEL"));

			outParam.setMessage("E-mail/Sms has been sent.");

			getSqlManager().updateToCoreDataSet(dsUserInfo, "mailSmsService.updatePwd");
			getSqlManager().insertToCoreDataSet(dsUserInfo, "mailSmsService.insertSms");
			getSqlManager().insertToCoreDataSet(dsUserInfo, "mailSmsService.insertEmail");

		} else if ("PTNR_REQ".equals(module)) { // 업체등록요청 PTNR_ID를 받아 담당 사용자를 찾아
												// insert 한다. PTNR_ID
			CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");
			CoreDataSet dsPtnr = inParams.getCoreDataSet("dsPtnr");

			CoreDataSet dsUserInfo = getSqlManager().queryForCoreDataSet(dsPtnr, "mailSmsService.searchPtnrReq");

			String fileString = "";
			for (int i = 0; i < dsUserInfo.getRowCount(); i++) {
				outParam.setCoreDataSet("dsEmail", dsUserInfo);

				dsUserInfo.setColumn(0, "SMSID",
						commandModule.getSeqNextval("MM_SYS_SMS_SEQ", CoerConstain.PROPAGATION_REQUIRED));
				dsUserInfo.setColumn(0, "SND_CNTNT",
						"[HOPE]\n협력사 등록 요청되었습니다.\n협력사명 : " + dsUserInfo.getColumnAsString(0, "PTNR_NM"));
				dsUserInfo.setColumn(0, "BRANCH_CD", "HMAX");
				dsUserInfo.setColumn(0, "EMAIL_ID",
						commandModule.getSeqNextval("MM_SYS_EMAIL_SEQ", CoerConstain.PROPAGATION_REQUIRED));
				dsUserInfo.setColumn(0, "EMAIL_TTL", "[HOPE] Supplier Registration Request");
				fileString = FileReadUtil.readTemplateUrls("PTNR_REQ.jsp", outParam);
				dsUserInfo.setColumn(0, "EMAIL_CNTNT", fileString);
				dsUserInfo.setColumn(0, "SNDR_SYS_EMAIL_ID", Config.getString("EMAIL.SNDR_EMAIL_ID"));
				dsUserInfo.setColumn(0, "SNDR_SYS_TEL", Config.getString("EMAIL.SNDR_SYS_TEL"));

				if ("Y".equals(dsUserInfo.getColumnAsString(0, "ALT_SMS_RCV"))) {
					getSqlManager().insertToCoreDataSet(dsUserInfo, "mailSmsService.insertSms");
				}

				if ("Y".equals(dsUserInfo.getColumnAsString(0, "ALT_MAIL_RCV"))) {
					getSqlManager().insertToCoreDataSet(dsUserInfo, "mailSmsService.insertEmail");
				}
			}
		} else if ("APRV".equals(module)) {
			// 입찰공고승인요청,입찰완료승인요청,평가승인요청
			CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");
			CoreDataSet dsAprvInfo = inParams.getCoreDataSet("dsAprvInfo");
			String docCtgr = dsAprvInfo.getColumnAsString(0, "CD_APRV_DOC_CTGR");
			CoreDataSet dsAprvUser = getSqlManager().queryForCoreDataSet(dsAprvInfo, "mailSmsService.searchAprvUser");

			for (int i = 0; i < dsAprvUser.getRowCount(); i++) {
				dsAprvUser.setColumn(0, "ALT_SINGLE_PTNR", dsAprvInfo.getColumnAsString(0, "REF_KEY_3"));
				if ("AP11ARFQ".equals(docCtgr)) {
					dsAprvUser.setColumn(0, "SND_CNTNT", "[HOPE]\n입찰공고 승인요청이 있습니다.");
					dsAprvUser.setColumn(0, "EMAIL_TTL", "[HOPE] Approval Request for bid announcement");
				} else if ("AP11RFQ".equals(docCtgr)) {
					dsAprvUser.setColumn(0, "SND_CNTNT", "[HOPE]\n입찰완료 승인요청이 있습니다.");
					dsAprvUser.setColumn(0, "EMAIL_TTL", "[HOPE] Approval Request for tender complete");
				} else if ("AP11EVL".equals(docCtgr)) {
					dsAprvUser.setColumn(0, "SND_CNTNT", "[HOPE]\n정기평가 승인요청이 있습니다.");
					dsAprvUser.setColumn(0, "EMAIL_TTL", "[HOPE] Approval Request for periodical eval");
				}

				String fileString = "";
				outParam.setCoreDataSet("dsEmail", dsAprvUser);

				fileString = FileReadUtil.readTemplateUrls("APP_MAIL.jsp", outParam);

				dsAprvUser.setColumn(0, "SMSID",
						commandModule.getSeqNextval("MM_SYS_SMS_SEQ", CoerConstain.PROPAGATION_REQUIRED));
				dsAprvUser.setColumn(0, "BRANCH_CD", gdsUserInfo.getColumnAsString(0, "BRANCH_CD"));
				dsAprvUser.setColumn(0, "SNDR_TEL", gdsUserInfo.getColumnAsString(0, "TEL"));
				dsAprvUser.setColumn(0, "EMAIL_ID",
						commandModule.getSeqNextval("MM_SYS_EMAIL_SEQ", CoerConstain.PROPAGATION_REQUIRED));
				dsAprvUser.setColumn(0, "EMAIL_CNTNT", fileString);
				dsAprvUser.setColumn(0, "SNDR_EMAIL_ID", gdsUserInfo.getColumnAsString(0, "EMAIL"));
				dsAprvUser.setColumn(0, "AD_ID", gdsUserInfo.getColumnAsString(0, "AD_ID"));
				dsAprvUser.setColumn(0, "SNDR_USER_NM", gdsUserInfo.getColumnAsString(0, "USER_NM"));
				dsAprvUser.setColumn(0, "SNDR_EMAIL", gdsUserInfo.getColumnAsString(0, "EMAIL"));
				dsAprvUser.setColumn(0, "SNDR_SYS_EMAIL_ID", Config.getString("EMAIL.SNDR_EMAIL_ID"));
				dsAprvUser.setColumn(0, "SNDR_SYS_TEL", Config.getString("EMAIL.SNDR_SYS_TEL"));

				if ("Y".equals(dsAprvUser.getColumnAsString(0, "ALT_SMS_RCV"))) {
					getSqlManager().insertToCoreDataSet(dsAprvUser, "mailSmsService.insertSms");
				}

				if ("Y".equals(dsAprvUser.getColumnAsString(0, "ALT_MAIL_RCV"))) {
					getSqlManager().insertToCoreDataSet(dsAprvUser, "mailSmsService.insertEmail");
				}
			}
		} else if ("RFQ_SEND".equals(module)) {

			CoreDataSet dsAprvInfo = inParams.getCoreDataSet("dsAprvInfo");

			dsAprvInfo.setColumn(0, "RFQ_REQ_NO", dsAprvInfo.getColumnAsString(0, "REF_KEY_1"));
			dsAprvInfo.setColumn(0, "RFQ_ODR", dsAprvInfo.getColumnAsString(0, "REF_KEY_2"));
			CoreDataSet dsPtnrUser = getSqlManager().queryForCoreDataSet(dsAprvInfo, "mailSmsService.searchRfqPtnr");

			String fileString = "";

			for (int i = 0; i < dsPtnrUser.getRowCount(); i++) {
				dsPtnrUser.setActiveRow(i);

				dsPtnrUser.setColumn(i, "SMSID",
						commandModule.getSeqNextval("MM_SYS_SMS_SEQ", CoerConstain.PROPAGATION_REQUIRED));
				dsPtnrUser.setColumn(i, "SND_CNTNT", "[HOPE]\n입찰요청되었습니다. 확인바랍니다.");
				dsPtnrUser.setColumn(i, "EMAIL_ID",
						commandModule.getSeqNextval("MM_SYS_EMAIL_SEQ", CoerConstain.PROPAGATION_REQUIRED));
				dsPtnrUser.setColumn(i, "EMAIL_TTL", "[HOPE] Bid participation Request");
				outParam.setCoreDataSet("dsEmail", dsPtnrUser);

				fileString = FileReadUtil.readTemplateUrls("Rfq_Send.jsp", outParam);

				dsPtnrUser.setColumn(i, "EMAIL_CNTNT", fileString);
				dsPtnrUser.setColumn(i, "SNDR_SYS_EMAIL_ID", Config.getString("EMAIL.SNDR_EMAIL_ID"));
				dsPtnrUser.setColumn(i, "SNDR_SYS_TEL", Config.getString("EMAIL.SNDR_SYS_TEL"));

				if ("Y".equals(dsPtnrUser.getColumnAsString(i, "ALT_SMS_RCV"))) {
					getSqlManager().insertToCoreDataSet(dsPtnrUser, "mailSmsService.insertSms");
				}

				if ("Y".equals(dsPtnrUser.getColumnAsString(i, "ALT_MAIL_RCV"))) {
					getSqlManager().insertToCoreDataSet(dsPtnrUser, "mailSmsService.insertEmail");
				}
			}
		} else if ("RFQ_CHG".equals(module)) {

			CoreDataSet dsRfq = inParams.getCoreDataSet("dsRfq");
			CoreDataSet dsPtnrUser = getSqlManager().queryForCoreDataSet(dsRfq, "mailSmsService.searchRfqPtnr");

			String fileString = "";

			for (int i = 0; i < dsPtnrUser.getRowCount(); i++) {
				dsPtnrUser.setActiveRow(i);

				dsPtnrUser.setColumn(i, "SMSID",
						commandModule.getSeqNextval("MM_SYS_SMS_SEQ", CoerConstain.PROPAGATION_REQUIRED));
				dsPtnrUser.setColumn(i, "SND_CNTNT", "[HOPE]\n입찰이 변경되었습니다. 확인바랍니다.");
				dsPtnrUser.setColumn(i, "EMAIL_ID",
						commandModule.getSeqNextval("MM_SYS_EMAIL_SEQ", CoerConstain.PROPAGATION_REQUIRED));
				dsPtnrUser.setColumn(i, "EMAIL_TTL", "[HOPE] Request Bid confirmation");
				dsPtnrUser.setColumn(i, "MAIL_TYPE", "Y");
				outParam.setCoreDataSet("dsEmail", dsPtnrUser);

				fileString = FileReadUtil.readTemplateUrls("Rfq_Send.jsp", outParam);

				dsPtnrUser.setColumn(i, "EMAIL_CNTNT", fileString);
				dsPtnrUser.setColumn(i, "SNDR_SYS_EMAIL_ID", Config.getString("EMAIL.SNDR_EMAIL_ID"));
				dsPtnrUser.setColumn(i, "SNDR_SYS_TEL", Config.getString("EMAIL.SNDR_SYS_TEL"));

				if ("Y".equals(dsPtnrUser.getColumnAsString(i, "ALT_SMS_RCV"))) {
					getSqlManager().insertToCoreDataSet(dsPtnrUser, "mailSmsService.insertSms");
				}

				if ("Y".equals(dsPtnrUser.getColumnAsString(i, "ALT_MAIL_RCV"))) {
					getSqlManager().insertToCoreDataSet(dsPtnrUser, "mailSmsService.insertEmail");
				}
			}

		} else if ("RFQ_INTRO".equals(module)) {

			CoreDataSet dsRfq = inParams.getCoreDataSet("dsRfq");
			CoreDataSet dsPtnrUser = getSqlManager().queryForCoreDataSet(dsRfq, "mailSmsService.searchRfqPtnr");

			String fileString = "";

			for (int i = 0; i < dsPtnrUser.getRowCount(); i++) {
				dsPtnrUser.setActiveRow(i);
				if (!"".equals(dsPtnrUser.getColumnAsString(i, "RFQ_CLOSE_TIME"))
						&& null != dsPtnrUser.getColumnAsString(i, "RFQ_CLOSE_TIME")
						&& "undefined" != dsPtnrUser.getColumnAsString(i, "RFQ_CLOSE_TIME")
						&& !"".equals(dsPtnrUser.getColumnAsString(i, "RFQ_EXPLN_AREA"))
						&& null != dsPtnrUser.getColumnAsString(i, "RFQ_EXPLN_AREA")
						&& "undefined" != dsPtnrUser.getColumnAsString(i, "RFQ_EXPLN_AREA")) {
					dsPtnrUser.setColumn(i, "SMSID",
							commandModule.getSeqNextval("MM_SYS_SMS_SEQ", CoerConstain.PROPAGATION_REQUIRED));
					dsPtnrUser.setColumn(i, "SND_CNTNT", "[HOPE]\n입찰설명회 요청이 있습니다.");
					dsPtnrUser.setColumn(i, "EMAIL_ID",
							commandModule.getSeqNextval("MM_SYS_EMAIL_SEQ", CoerConstain.PROPAGATION_REQUIRED));
					dsPtnrUser.setColumn(i, "EMAIL_TTL", "[HOPE] Request proposal presentation");
					outParam.setCoreDataSet("dsEmail", dsPtnrUser);

					fileString = FileReadUtil.readTemplateUrls("Rfq_Intro.jsp", outParam);

					dsPtnrUser.setColumn(i, "EMAIL_CNTNT", fileString);
					dsPtnrUser.setColumn(i, "SNDR_SYS_EMAIL_ID", Config.getString("EMAIL.SNDR_EMAIL_ID"));
					dsPtnrUser.setColumn(i, "SNDR_SYS_TEL", Config.getString("EMAIL.SNDR_SYS_TEL"));

					if ("Y".equals(dsPtnrUser.getColumnAsString(i, "ALT_SMS_RCV"))) {
						getSqlManager().insertToCoreDataSet(dsPtnrUser, "mailSmsService.insertSms");
					}

					if ("Y".equals(dsPtnrUser.getColumnAsString(i, "ALT_MAIL_RCV"))) {
						getSqlManager().insertToCoreDataSet(dsPtnrUser, "mailSmsService.insertEmail");
					}
				}
			}

		} else if ("RFQ_CLO".equals(module)) {
			CoreDataSet dsAprvInfo = inParams.getCoreDataSet("dsAprvInfo");

			dsAprvInfo.setColumn(0, "RFQ_REQ_NO", dsAprvInfo.getColumnAsString(0, "REF_KEY_1"));
			dsAprvInfo.setColumn(0, "RFQ_ODR", dsAprvInfo.getColumnAsString(0, "REF_KEY_2"));
			CoreDataSet dsPtnrUser = getSqlManager().queryForCoreDataSet(dsAprvInfo, "mailSmsService.searchRfqCloPtnr");

			String fileString = "";
			String msg = "";

			for (int i = 0; i < dsPtnrUser.getRowCount(); i++) {
				dsPtnrUser.setActiveRow(i);
				dsPtnrUser.setColumn(i, "EMAIL_TTL", "[HOPE] Notice bid result");
				outParam.setCoreDataSet("dsEmail", dsPtnrUser);
				if ("Y".equals(dsPtnrUser.getColumnAsString(i, "ALT_PWIN_PTNR"))) {

					fileString = FileReadUtil.readTemplateUrls("Rfq_Success.jsp", outParam);

					msg = "[HOPE]\n입찰결과 우선대상업체로 선정되었습니다.";

				} else {

					fileString = FileReadUtil.readTemplateUrls("Rfq_Fail.jsp", outParam);

					msg = "[HOPE]\n입찰결과 우선대상업체로 선정되지 않았습니다.";
				}

				dsPtnrUser.setColumn(i, "EMAIL_CNTNT", fileString);
				dsPtnrUser.setColumn(i, "SND_CNTNT", msg);
				dsPtnrUser.setColumn(i, "SMSID",
						commandModule.getSeqNextval("MM_SYS_SMS_SEQ", CoerConstain.PROPAGATION_REQUIRED));
				dsPtnrUser.setColumn(i, "EMAIL_ID",
						commandModule.getSeqNextval("MM_SYS_EMAIL_SEQ", CoerConstain.PROPAGATION_REQUIRED));
				dsPtnrUser.setColumn(i, "SNDR_SYS_EMAIL_ID", Config.getString("EMAIL.SNDR_EMAIL_ID"));
				dsPtnrUser.setColumn(i, "SNDR_SYS_TEL", Config.getString("EMAIL.SNDR_SYS_TEL"));

				if ("Y".equals(dsPtnrUser.getColumnAsString(i, "ALT_SMS_RCV"))) {
					getSqlManager().insertToCoreDataSet(dsPtnrUser, "mailSmsService.insertSms");
				}
				if ("Y".equals(dsPtnrUser.getColumnAsString(i, "ALT_MAIL_RCV"))) {
					getSqlManager().insertToCoreDataSet(dsPtnrUser, "mailSmsService.insertEmail");
				}
			}
		} else if ("PTNR_USER".equals(module)) {
			long time = System.currentTimeMillis();
			SimpleDateFormat dayTime = new SimpleDateFormat("YYYYMMddhhmmss");
			String str = dayTime.format(new Date(time));

			CoreDataSet dsTarget = inParams.getCoreDataSet("dsTarget");
			CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");

			CoreDataSet dsSms = CoreDataSetFactory.getDataSet(inParams);
			dsSms.addStringColumn("SMSID");
			dsSms.addStringColumn("RCVR_TEL");
			dsSms.addStringColumn("SND_CNTNT");
			dsSms.addStringColumn("SNDR_SYS_TEL");
			dsSms.addStringColumn("AD_ID");
			dsSms.addStringColumn("WRT_DTTM");

			for (int i = 0; i < dsTarget.getRowCount(); i++) {
				int nRow = dsSms.appendRow();

				dsSms.setColumn(nRow, "SMSID",
						commandModule.getSeqNextval("MM_SYS_SMS_SEQ", CoerConstain.PROPAGATION_REQUIRED));
				dsSms.setColumn(nRow, "RCVR_TEL", dsTarget.getColumnAsString(i, "HP"));
				dsSms.setColumn(nRow, "SND_CNTNT", dsTarget.getColumnAsString(i, "CNTNT"));
				dsSms.setColumn(nRow, "SNDR_SYS_TEL", Config.getString("EMAIL.SNDR_SYS_TEL"));
				dsSms.setColumn(nRow, "AD_ID", gdsUserInfo.getColumnAsString(0, "AD_ID"));
				dsSms.setColumn(nRow, "WRT_DTTM", str);
				dsSms.setActiveRow(nRow);

				if ("Y".equals(dsTarget.getColumnAsString(i, "ALT_SMS_RCV"))) {
					getSqlManager().insertToCoreDataSet(dsSms, "mailSmsService.insertSms");
				}
			}
			outParam.setMessage("EPRO_LABEL_01293");
		} else if ("SPTNR_CHG".equals(module)) { // 업체정보 변경 Email
			CoreDataSet dsPtnr = inParams.getCoreDataSet("dsPtnr");
			CoreDataSet dsPtnrinfo = getSqlManager().queryForCoreDataSet(dsPtnr, "mailSmsService.chargePtnrRead");

			CoreDataSet dsEmail = CoreDataSetFactory.getDataSet(inParams);

			dsEmail.addStringColumn("PTNR_NM");
			dsEmail.addStringColumn("USER_NM");
			dsEmail.addStringColumn("PTNR_CHT_DT");
			dsEmail.addStringColumn("RCVR_EMAIL_ID");
			dsEmail.addStringColumn("EMAIL_TTL");
			dsEmail.addStringColumn("EMAIL_CNTNT");
			dsEmail.addStringColumn("SNDR_SYS_EMAIL_ID");
			dsEmail.appendRow();

			dsEmail.setColumn(0, "PTNR_NM", dsPtnrinfo.getColumnAsString(0, "PTNR_NM")); // 정보가
																							// 변경된
																							// 업체명
			dsEmail.setColumn(0, "USER_NM", dsPtnrinfo.getColumnAsString(0, "USER_NM")); // 업체
																							// 대표사용자
																							// 이름/번호/email
			dsEmail.setColumn(0, "PTNR_CHT_DT", dsPtnrinfo.getColumnAsString(0, "PTNR_CHT_DT")); // 수정일자
			dsEmail.setColumn(0, "RCVR_EMAIL_ID", dsPtnrinfo.getColumnAsString(0, "B_EMAIL")); // 받는사람
			dsEmail.setColumn(0, "EMAIL_TTL", "[HOPE] Company Information Renewal"); // 내용
			dsEmail.setColumn(0, "SNDR_SYS_EMAIL_ID", Config.getString("EMAIL.SNDR_EMAIL_ID")); // 보내는사람
																								// system

			outParam.setCoreDataSet("dsEmail", dsEmail);

			String fileString = "";
			fileString = FileReadUtil.readTemplateUrls("Ptnr_Change.jsp", outParam);

			dsEmail.setColumn(0, "EMAIL_CNTNT", fileString);

			getSqlManager().insertToCoreDataSet(dsEmail, "mailSmsService.insertEmail");
		} else if ("PTNR_SEL".equals(module)) { // 잠재업체지정 Email & SMS
			CoreDataSet dsPtnr = inParams.getCoreDataSet("dsPtnr");
			CoreDataSet gdsUserInfo = inParams.getCoreDataSet("gdsUserInfo");
			CoreDataSet dsPtnrinfo = getSqlManager().queryForCoreDataSet(dsPtnr, "mailSmsService.ptnrSelRead");

			CoreDataSet dsEmail = CoreDataSetFactory.getDataSet(inParams);
			dsEmail.addStringColumn("PTNR_NM");
			dsEmail.addStringColumn("USER_NM");
			dsEmail.addStringColumn("LAST_CHG_DT");
			dsEmail.addStringColumn("RCVR_EMAIL_ID");
			dsEmail.addStringColumn("EMAIL_TTL");
			dsEmail.addStringColumn("EMAIL_CNTNT");
			dsEmail.addStringColumn("SNDR_SYS_EMAIL_ID");

			// Sms
			dsEmail.addStringColumn("SMSID");
			dsEmail.addStringColumn("RCVR_TEL");
			dsEmail.addStringColumn("SNDR_SYS_TEL");
			dsEmail.addStringColumn("SND_CNTNT");
			dsEmail.addStringColumn("AD_ID");
			dsEmail.addStringColumn("WRT_DTTM");

			dsEmail.appendRow();

			// Email
			dsEmail.setColumn(0, "PTNR_NM", dsPtnrinfo.getColumnAsString(0, "PTNR_NM")); // 업체명
			dsEmail.setColumn(0, "USER_NM", dsPtnrinfo.getColumnAsString(0, "USER_NM")); // 내부
																							// 담당자
																							// 정보
			dsEmail.setColumn(0, "LAST_CHG_DT", dsPtnrinfo.getColumnAsString(0, "LAST_CHG_DT")); // 지정일자
			dsEmail.setColumn(0, "RCVR_EMAIL_ID", dsPtnrinfo.getColumnAsString(0, "EMAIL")); // 협체
																								// 대표사용자
																								// email
			dsEmail.setColumn(0, "EMAIL_TTL", "[HOPE] Notice registration result"); // 제목
			dsEmail.setColumn(0, "SNDR_SYS_EMAIL_ID", Config.getString("EMAIL.SNDR_EMAIL_ID")); // 보내는사람
																								// system
			// Sms
			dsEmail.setColumn(0, "SMSID",
					commandModule.getSeqNextval("MM_SYS_SMS_SEQ", CoerConstain.PROPAGATION_REQUIRED));
			dsEmail.setColumn(0, "RCVR_TEL", dsPtnrinfo.getColumnAsString(0, "HP")); // 업체
																						// 대표사용자
																						// 번호
			dsEmail.setColumn(0, "SNDR_SYS_TEL", Config.getString("EMAIL.SNDR_SYS_TEL")); // 보내는사람
			// system
			dsEmail.setColumn(0, "SND_CNTNT", "[HOPE] 잠재업체로 지정되었습니다."); // 내용
			dsEmail.setColumn(0, "AD_ID", gdsUserInfo.getColumnAsString(0, "AD_ID"));
			dsEmail.setColumn(0, "WRT_DTTM", dsPtnrinfo.getColumnAsString(0, "WRT_DTTM"));

			outParam.setCoreDataSet("dsEmail", dsEmail);

			String fileString = "";
			fileString = FileReadUtil.readTemplateUrls("Ptnr_Wait.jsp", outParam);

			dsEmail.setColumn(0, "EMAIL_CNTNT", fileString);
			dsEmail.setActiveRow(0);

			if ("Y".equals(dsPtnrinfo.getColumnAsString(0, "ALT_SMS_RCV"))) {
				getSqlManager().insertToCoreDataSet(dsEmail, "mailSmsService.insertSms");
			}
			if ("Y".equals(dsPtnrinfo.getColumnAsString(0, "ALT_MAIL_RCV"))) {
				getSqlManager().insertToCoreDataSet(dsEmail, "mailSmsService.insertEmail");
			}

		} else if("TndrReq".equals(module)) {//입찰요청
			CoreDataSet ds = inParams.getCoreDataSet("rtnMail");
			
		}

		return outParam;

	}
	
	/**
     * 사번를 통해 SMS를 전송
     * @param   paramData     PlatformData   SMS Information
     *          flag  true -> 송신자 : 로그인 USER , 수신자 DataSet에 담긴 user / false 송신자 : DataSet에 담긴 user, 송신자 -> 로그인 User
     * @return  void
     * @throws common.ProcessingException
     */
	public CoreParamSet saveSmsUserId(CoreParamSet inParams, boolean flag) throws Exception{
    	CoreParamSet outParam = CoreParamSetFactory.create(inParams);
    	CoreDataSet tmpDs = outParam.getCoreDataSetInstance();
		CoreDataSet ds = inParams.getCoreDataSet("ds");					//발신내용이 담긴 데이터셋
    	CoreDataSet dsItem = inParams.getCoreDataSet("dsItem");			
    	CoreDataSet userInfo = inParams.getCoreDataSet("gdsUserInfo");	//사용자정보가 담긴 데이터셋
    	
    	try{
			tmpDs = getSqlManager().queryForCoreDataSet(dsItem, "MailSmsService.readUserInfo");
			CoreDataSet sendData = outParam.getCoreDataSetInstance();
			sendData.put("SMS_ID", tmpDs.getColumnAsString(0, "SEQ")); // SMS_ID

			if(true == flag){
				sendData.put("SNDR_TEL", userInfo.getColumnAsString(0, "HP")); // 송신자 전화번호
				sendData.put("RCVR_TEL", tmpDs.getColumnAsString(0, "SNDR_TEL")); // 수신자 전화번호
			} else{
				sendData.put("SNDR_TEL", tmpDs.getColumnAsString(0, "SNDR_TEL")); // 송신자 전화번호
				sendData.put("RCVR_TEL", userInfo.getColumnAsString(0, "HP")); // 수신자 전화번호
			}
			
			sendData.put("BRANCH_CD", userInfo.getColumnAsString(0, "BRANCH_CD")); // 구매조직
			sendData.put("USER_ID", userInfo.getColumnAsString(0, "USER_ID")); // 생성자
			sendData.put("SND_CNTNT", ds.getColumnAsString(0, "SND_CNTNT")); // 발신내용
			
			getSqlManager().insertToCoreDataSet(sendData, "MailSmsService.insertSms");
			
			outParam.setErrorCode(0);
			outParam.setErrorMessage("성공적으로 발송하였습니다.");
				
	    } catch(Exception e) {
			// 검색 실패인 경우 리턴 코드 및 메세지 세팅한다
			outParam.setErrorCode(-1);
			outParam.setErrorMessage("시스템처리에 오류가 발생하였습니다.\\n시스템 담당자에게 문의하시기 바랍니다.");
		}
    	
    	return outParam;
	}

}
