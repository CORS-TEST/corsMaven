package core.common.util;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLSession;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;
import javax.servlet.http.HttpServletRequest;

import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import core.common.config.Config;
import core.vo.model.coreset.CoreParamSet;

public class FileReadUtil {

	public static String readTemplateFile(String fileName) {

		StringBuffer templateBuff = new StringBuffer();
		String rtn = "";
		try {
			String fileRoot = Config.getString("BASIC.ROOT.APRV");
			if (!(fileRoot.endsWith("/") || fileRoot.endsWith("\\"))) {
				fileRoot += File.separator;
			}

			BufferedReader templateFile = new BufferedReader(
					new InputStreamReader(new FileInputStream(fileRoot + fileName), "UTF-8"));

			String readstr = null;

			while ((readstr = templateFile.readLine()) != null) {
				templateBuff.append(readstr.trim() + "\n");
			}
			templateFile.close();

			rtn = templateBuff.toString();
		} catch (Exception e) {
			// TODO: handle exception
		}
		return rtn;
	}

	public static String readTemplateUrl(String fileName, CoreParamSet inParam) {
		String rtn = "";
		try {
			HttpServletRequest curRequest = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes())
					.getRequest();

			String uri = "http://" + curRequest.getServerName() + ":" + curRequest.getServerPort()
					+ curRequest.getContextPath() + "/aprv/";

			URL aprvUrl = new URL(uri + fileName);

			URLConnection conn = aprvUrl.openConnection();
			conn.setDoOutput(true);
			conn.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");

			DataOutputStream out = new DataOutputStream(conn.getOutputStream());

			out.writeBytes(
					"parameter=" + URLEncoder.encode(CommonUtil.getCoreParamToJson(inParam).toString(), "UTF-8"));
			out.flush();

			InputStream is = conn.getInputStream();
			// Scanner scan = new Scanner(is);
			//
			// int line = 1;
			// while (scan.hasNext()) {
			// rtn += scan.nextLine();
			// System.out.println("===========");
			// System.out.println(rtn);
			// System.out.println("===========");
			// }

			// scan.close();

			BufferedReader br = new BufferedReader(new InputStreamReader(is, "UTF-8"));
			String line = null;
			while ((line = br.readLine()) != null) {
				rtn += line;
			}

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return rtn;
	}

	public static String readTemplateUrls(String fileName, CoreParamSet inParam) {
		String rtn = "";
		try {
			HttpServletRequest curRequest = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes())
					.getRequest();
			String uri = "";
			if (curRequest.isSecure()) {
				uri = "https://" + curRequest.getServerName() + ":" + curRequest.getServerPort()
						+ curRequest.getContextPath() + "/aprv/";

				TrustManager[] trustAllCerts = new TrustManager[] { new X509TrustManager() {

					@Override
					public X509Certificate[] getAcceptedIssuers() {
						// TODO Auto-generated method stub
						return null;
					}

					@Override
					public void checkServerTrusted(X509Certificate[] arg0, String arg1) throws CertificateException {
						// TODO Auto-generated method stub

					}

					@Override
					public void checkClientTrusted(X509Certificate[] arg0, String arg1) throws CertificateException {
						// TODO Auto-generated method stub

					}
				} };

				SSLContext sc = SSLContext.getInstance("SSL");
				sc.init(null, trustAllCerts, new java.security.SecureRandom());

				HttpsURLConnection.setDefaultSSLSocketFactory(sc.getSocketFactory());

				HostnameVerifier hv = new HostnameVerifier() {
					@Override
					public boolean verify(String arg0, SSLSession arg1) {
						// TODO Auto-generated method stub
						return true;
					}
				};

				URL aprvUrl = new URL(uri + fileName);
				HttpsURLConnection conn = (HttpsURLConnection) aprvUrl.openConnection();
				conn.setDoOutput(true);
				conn.setDoInput(true);
				conn.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");

				DataOutputStream out = new DataOutputStream(conn.getOutputStream());

				out.writeBytes(
						"parameter=" + URLEncoder.encode(CommonUtil.getCoreParamToJson(inParam).toString(), "UTF-8"));
				out.flush();

				InputStream is = conn.getInputStream();

				BufferedReader br = new BufferedReader(new InputStreamReader(is, "UTF-8"));
				String line = null;
				while ((line = br.readLine()) != null) {
					rtn += line;
				}
				br.close();
				out.close();
			} else {
				uri = "http://" + curRequest.getServerName() + ":" + curRequest.getServerPort()
						+ curRequest.getContextPath() + "/aprv/";
				URL aprvUrl = new URL(uri + fileName);

				URLConnection conn = aprvUrl.openConnection();
				conn.setDoOutput(true);
				conn.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");

				DataOutputStream out = new DataOutputStream(conn.getOutputStream());

				out.writeBytes(
						"parameter=" + URLEncoder.encode(CommonUtil.getCoreParamToJson(inParam).toString(), "UTF-8"));
				out.flush();

				InputStream is = conn.getInputStream();

				BufferedReader br = new BufferedReader(new InputStreamReader(is, "UTF-8"));
				String line = null;
				while ((line = br.readLine()) != null) {
					rtn += line;
				}
				br.close();
				out.close();
			}

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return rtn;
	}

	public static String replaceTemplateResource(String html, String langCd) {
		String rtnStr = html;
		Pattern pattern = Pattern.compile("▧(.*?)▨");

		Matcher match = pattern.matcher(rtnStr);

		while (match.find()) {
			rtnStr = rtnStr.replaceAll(match.group(0), ResourceUtil.getResource(match.group(1), langCd));
		}
		return rtnStr;
	}
}
