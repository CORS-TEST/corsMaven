<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ page import="com.ubireport.viewer.report.preview.*, com.ubireport.common.util.*, java.text.*, java.util.*"%>

<%
	request.setCharacterEncoding("UTF-8");
	
	String NL = "/n";
	System.out.println(NL);
	System.out.println("[" + (new SimpleDateFormat("yyyy-MM-dd kk:mm:ss.SSS")).format(Calendar.getInstance().getTime()) + "] export1.jsp 시작 =========================");

	String rDir = "C:/UbiContents/Tomcat6/webapps/newubi/ubi4/work/";
	String rJrf = request.getParameter("jrf");				// 리포트 파일명
	String rArg = request.getParameter("arg");				// 아규먼트
	String rDataType = request.getParameter("datatype");		// 데이타 타입	(DS/SVC)
	String rExportType = request.getParameter("exporttype");	// 저장 유형
	String rExportDir = request.getParameter("exportdir");	// 저장 경로
	String rExportFile = request.getParameter("exportfile");	// 저장 파일 명
	String rSsvData = request.getParameter("ssvdata");		// Dataset Data
	System.out.println(rDataType + " : " + rSsvData);
	String app = "newubi";
	String host = request.getServerName() + ":" + request.getServerPort();
	String protocol = request.getProtocol().substring(0, request.getProtocol().indexOf("/")).toLowerCase();
	String url = protocol + "://" + host + (app.equals("")?"":("/" + app));
	
	String ds = "";	// WAS에 설정된 DataSource 명.
	String file_url = url + "/ubi4";	// 리포트에서 사용되는 이미지 또는 공통 아이템 정보를 가져오기위한 정보.
	String ubiServerURL = url + "/UbiServer";
	String args = rArg;					// 아규먼트 정보.
	String export_dir = rExportDir;		// 파일 저장 경로.
	String export_file = rExportFile;	// 파일 명

	boolean isSuccess = false;

	try {

		UbiViewer ubiviewer = new UbiViewer(false, false);	// 객체 생성
		//ubiviewer.clientType = "nexacro";

		ubiviewer.isLocalData = true;
		//ubiviewer.isRuntimeReport = true;//nexacro 연동
		ubiviewer.exectype 	 = "TYPE6"; //서버저장
		ubiviewer.clientType = "nexacro"; //nexacro 연동
		
		ubiviewer.fileURL = file_url;
		ubiviewer.ubiServerURL = ubiServerURL;
		ubiviewer.jrfFileDir 	= rDir;
		ubiviewer.jrfFileName = rJrf;
		ubiviewer.arg = rArg;
		ubiviewer.exportAsOrgImage = true;

		if( rDataType != null && rDataType.equals("DS") ) {
			ubiviewer.dataSource = rSsvData;
		}

		ubiviewer.setExportParams(rExportType, (export_dir + export_file)); // 파일 저장 설정

		System.out.println("[" + (new SimpleDateFormat("yyyy-MM-dd kk:mm:ss.SSS")).format(Calendar.getInstance().getTime()) + "] 파일 저장 시작");
		isSuccess = ubiviewer.loadReport(); // 파일 저장 수행.
		System.out.println("[" + (new SimpleDateFormat("yyyy-MM-dd kk:mm:ss.SSS")).format(Calendar.getInstance().getTime()) + "] 파일 저장 종료");

		out.clearBuffer();
		if( isSuccess )
			out.println("Export Success : " + (export_dir + export_file) + "<BR><BR>");
			
		
		else
			out.println("Export Fail!" + "<BR><BR>");
	}
	catch(Exception e) {

		e.printStackTrace();
	}

	System.out.println("[" + (new SimpleDateFormat("yyyy-MM-dd kk:mm:ss.SSS")).format(Calendar.getInstance().getTime()) + "] export1.jsp 종료 =========================");
	System.out.println(NL);

%>
