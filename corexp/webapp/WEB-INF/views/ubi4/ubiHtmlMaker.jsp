<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ page import=" java.text.*
				, java.util.*
				, java.io.BufferedReader
				, java.io.File
				, java.io.FileInputStream
				, java.io.InputStreamReader
				, com.ubireport.viewer.report.preview.UbiViewer
				"%>

<%
	request.setCharacterEncoding("UTF-8");

	String sContent = "";
	String NL = "\n";
	System.out.println(NL);
	System.out.println("[" + (new SimpleDateFormat("yyyy-MM-dd kk:mm:ss.SSS")).format(Calendar.getInstance().getTime()) + "] ubiviewerlib2.jsp 시작 =========================");

	String rDir = request.getParameter("reportDir");				// 리포트 파일 경로(URL)
	String rJrf = request.getParameter("reportFile");				// 리포트 파일명
	String rArg = request.getParameter("arg");				// 아규먼트
	String rDataType = request.getParameter("ubiDataType");		// 데이타 타입	(DS/SVC)
	String rExportType = request.getParameter("exportType");	// 저장 유형
	String rExportDir = Config.getString("ATTACHFILE.DIR") + "/";	
	String rExportFile = request.getParameter("exportFileNm");	// 저장 파일 명
	String rSsvData = request.getParameter("ssvdata");		// Dataset Data

	System.out.println("@@@@@@@@@@@@@@@@@     rDir ::::::>>>>>>>>>>>>> " + rDir);
	System.out.println("@@@@@@@@@@@@@@@@@     rJrf ::::::>>>>>>>>>>>>> " + rJrf);
	
	String app = "ubinexa";
	String host = request.getServerName() + ":" + request.getServerPort();
	String protocol = request.getProtocol().substring(0, request.getProtocol().indexOf("/")).toLowerCase();
	String url = protocol + "://" + host + (app.equals("")?"":("/" + app));
	
	String ds = "jdbc/support";	// WAS에 설정된 DataSource 명.
	String file_url = url + "/ubireport";	// 리포트에서 사용되는 이미지 또는 공통 아이템 정보를 가져오기위한 정보.
	String servlet_url1 = (rDir.indexOf("http")==0)?"":(url + "/UbiForm");	// Form 서블릿 URL.
	String servlet_url2 = (rDataType != null && rDataType.equals("DS"))?"":(url + "/UbiData");	// Data 서블릿 URL.
	String args = rArg;					// 아규먼트 정보.
	String export_dir = rExportDir;		// 파일 저장 경로.
	String export_file = rExportFile + "." + rExportType;	// 파일 명

	System.out.println("@@@@@@@@@@@@@@@@@     url ::::::>>>>>>>>>>>>> " + url);
	System.out.println("@@@@@@@@@@@@@@@@@     file_url ::::::>>>>>>>>>>>>> " + file_url);
	System.out.println("@@@@@@@@@@@@@@@@@     File Save Dir ::::::>>>>>>>>>>>>> " + export_dir);
	System.out.println("@@@@@@@@@@@@@@@@@     File Name ::::::>>>>>>>>>>>>> " + export_file);
	
	
	boolean isSuccess = false;

	try {

		UbiViewer ubiviewer = new UbiViewer(false, false);	// 객체 생성

		ubiviewer.clientType = "nexacro";

		ubiviewer.setParameters(file_url, servlet_url1, servlet_url2, rDir, rJrf, ds, args, "TYPE6"); // 파일 저장을 위한 기본 정보 설정
		ubiviewer.isDebug = true;		//서버와의 통신 옵션 (ubigateway.property의 속성과 같아야함)
		ubiviewer.isDeflater = true;	//서버와의 통신 옵션 (ubigateway.property의 속성과 같아야함)
		ubiviewer.isUnicode = false;	//서버와의 통신 옵션 (ubigateway.property의 속성과 같아야함)
		ubiviewer.isBase64 = true;		//서버와의 통신 옵션 (ubigateway.property의 속성과 같아야함)
		ubiviewer.isUTF8 = true;		//서버와의 통신 옵션 (ubigateway.property의 속성과 같아야함)
		ubiviewer.fontRevision = true;	// 변경 불가.

		if( rDataType != null && rDataType.equals("DS") )
			ubiviewer.dataSource = rSsvData;
		else
			ubiviewer.dataSource = ds;

		ubiviewer.setExportParams(rExportType, (export_dir + export_file)); // 파일 저장 설정
		
		System.out.println("[" + (new SimpleDateFormat("yyyy-MM-dd kk:mm:ss.SSS")).format(Calendar.getInstance().getTime()) + "] 파일 저장 시작");
		isSuccess = ubiviewer.loadReport(); // 파일 저장 수행.
		//System.out.println("getOrientation : " + ubiviewer.getOrientation());	// 마크애니 연동 시 활용
		System.out.println("[" + (new SimpleDateFormat("yyyy-MM-dd kk:mm:ss.SSS")).format(Calendar.getInstance().getTime()) + "] 파일 저장 종료");

		out.clearBuffer();
		if( isSuccess )
		{			
			out.println("success");
		}
		else
		{
			out.println("fail");
		}
	}
	catch(Exception e) {
		e.printStackTrace();
	}

	System.out.println("[" + (new SimpleDateFormat("yyyy-MM-dd kk:mm:ss.SSS")).format(Calendar.getInstance().getTime()) + "] export1.jsp 종료 =========================");
	System.out.println(NL);

%>

