<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ page import="com.ubireport.viewer.report.preview.UbiViewer" %>
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
	
	String NL = "\n";
	System.out.println(NL);
	System.out.println("[" + (new SimpleDateFormat("yyyy-MM-dd kk:mm:ss.SSS")).format(Calendar.getInstance().getTime()) + "] ubiviewerlib2.jsp 시작 =========================");
	
	String appUrl		= "http://localhost:8080";
	String fileURL		= appUrl + "/ubi4";	
	String ubiServerURL	= appUrl + "/UbiServer";	
	
	String jrfFileDir = fileURL + "/" + request.getParameter("reportDir") + "/";		// 리포트 파일 경로(URL)
	String jrfFileName = request.getParameter("reportFile");							// 리포트 파일명
	String arg = request.getParameter("arg");											// 아규먼트
	String dataType = request.getParameter("dataType");								// 데이타 타입	(DS/DB)
	String exportType = request.getParameter("exportType");							// 저장 유형
	String exportPath = request.getParameter("exportPath") + "/";
	String exportFileName = request.getParameter("exportFileNm");							// 저장 파일 명
	String rSsvData = request.getParameter("ssvdata");									// Dataset Data
	String datasource = request.getParameter("datasource");									// Dataset Data
	String exportFilePath	= exportPath + exportFileName + "." + exportType.toLowerCase();	
	
	System.out.println("   jrfFileDir====== " + jrfFileDir);
	System.out.println("   jrfFileName===== " + jrfFileName);
	System.out.println("           arg===== " + arg);
	System.out.println("      dataType===== " + dataType);
	System.out.println("    exportType===== " + exportType);
	System.out.println("    exportPath===== " + exportPath);
	System.out.println("exportFileName===== " + exportFileName);
	System.out.println("exportFilePath===== " + exportFilePath);
	
	try {

		UbiViewer ubiviewer = new UbiViewer(false, false);

		ubiviewer.isLocalFile = true;
		ubiviewer.isLocalData = true;
		ubiviewer.isDebug = true;
		ubiviewer.exectype 	 = "TYPE6"; //서버저장
		ubiviewer.clientType = "nexacro"; //nexacro 연동
		ubiviewer.exportAsOrgImage = true;
		ubiviewer.fileURL = fileURL;
		ubiviewer.ubiServerURL = ubiServerURL;
		ubiviewer.jrfFileDir = jrfFileDir;
		ubiviewer.jrfFileName = jrfFileName;
		ubiviewer.arg = arg;
		if( dataType != null && dataType.equals("DS") ) {
			System.out.println("rSsvData===== " + rSsvData);
			ubiviewer.dataSource = rSsvData;
		} else {
			System.out.println("datasource===== " + datasource);
			ubiviewer.dataSource = datasource;
		}
		ubiviewer.setExportParams(exportType, exportFilePath);
		
		System.out.println("[" + (new SimpleDateFormat("yyyy-MM-dd kk:mm:ss.SSS")).format(Calendar.getInstance().getTime()) + "] 파일 저장 시작");
		boolean isSuccess = ubiviewer.loadReport();
		System.out.println("[" + (new SimpleDateFormat("yyyy-MM-dd kk:mm:ss.SSS")).format(Calendar.getInstance().getTime()) + "] 파일 저장 종료");

		out.clearBuffer();
		if( isSuccess ) {
			out.println("success");
		} else
			out.println("fail");
		
		System.out.println("[" + (new SimpleDateFormat("yyyy-MM-dd kk:mm:ss.SSS")).format(Calendar.getInstance().getTime()) + "] export : " + isSuccess);
	}
	catch(Exception e) {

		out.println(e.getMessage());
		e.printStackTrace();
	}
	
	System.out.println("[" + (new SimpleDateFormat("yyyy-MM-dd kk:mm:ss.SSS")).format(Calendar.getInstance().getTime()) + "] export1.jsp 종료 =========================");
	System.out.println(NL);
%>
