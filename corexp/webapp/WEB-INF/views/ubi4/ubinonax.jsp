<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%
	System.out.println("request==="+request.getParameter("fileName"));
	
	//String fileDir = request.getSession().getServletContext().getRealPath("/ubi4/export")+"/";
	
	String fileDir = "https://kops.kpic.co.kr/ubi4/export/";
	String fileNm = request.getParameter("fileName")+".urf";
	fileDir = fileDir.replaceAll("\\\\", "/");
	System.out.println("======="+fileDir + fileNm);
%>
	<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
	<html>
	<head>
	<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>UbiReport4 WSViewer</title>
	<script src='./js/ubinonax.js'></script>
	<script src='./js/msg.js'></script>
	<script type='text/javascript'>
	<!--
		var app = '';
		var appUrl = self.location.protocol + '//' + self.location.host + (app==''?'':('/' + app));

		var wsViewer = null;
		var wsViewerWidth = 900;
		var wsViewerHeight = screen.height - 200;
		var wsViewerLeft = (screen.width - wsViewerWidth)/2;
		var wsViewerTop = (screen.height - wsViewerHeight)/2;

		var pServerUrl = appUrl + '/UbiServer';
		var pRootUrl = appUrl;
		var pFileUrl = appUrl + '/ubi4';
		var pScale = '-9998';
		var pToolbar = 'true';
		var pProgress = 'true';

		var pDatasource = '';
		var pJrfDir = '<%=fileDir%>';
		var pJrf = '<%=fileNm%>';
		var pArg = '';
		
		function Ubi_WSViewerInit() {

			InitWebSocket(ShowReport);
		}

		function ShowReport(ws) {
			
			wsViewer = new UbiWSViewer(ws);

			wsViewer.ubiserverurl = pServerUrl;
			wsViewer.servletrooturl = pRootUrl;
			wsViewer.fileurl = pFileUrl;
			wsViewer.scale = pScale;
			wsViewer.toolbar = pToolbar;
			wsViewer.progress = pProgress;
			wsViewer.datasource = pDatasource;
			wsViewer.jrffiledir = pJrfDir;

			wsViewer.jrffilename = pJrf;
			wsViewer.arg = pArg;

			wsViewer.setResize(wsViewerLeft, wsViewerTop, wsViewerWidth, wsViewerHeight);	// setResize('max');, setResize('hide');
			wsViewer.invisibletoolbar = 'EXPORT,EXPORT_PDF,EXPORT_EXCEL,EXPORT_PPT,EXPORT_DOC,EXPORT_HWP,EXPORT_HWPML';
			wsViewer.retrieve();
		}

		function RetrieveEnd() {
			window.open('','_self').close();
		}

		function PrintEnd(status) {
		}
		
		function ExportEnd(filePath) {

		}
		
		function Ubi_Version() {

			wsViewer.aboutBox();
		}

	//-->
	</script>
	</head>
	<body style="margin:2px">
	<h1>WebSocket</h1>
	<script type="text/javascript">
	<!--
		Ubi_WSViewerInit();
	//-->
	</script>
	</body>
	</html>
