<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">


<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@page import="com.oreilly.servlet.multipart.DefaultFileRenamePolicy"%>
<%@page import="com.oreilly.servlet.MultipartRequest"%>
<%@page import="java.io.*"%>
<%@page import="org.apache.commons.io.FileUtils"%>
<html>
<head>
<title>Insert title here</title>
<%
try{
		int maxSize=1024*1024*3; 
		String realPath = application.getRealPath("/editorPictor");
		
		File f = new File(realPath);
		if(!f.isFile()){
			if(!f.isDirectory()){
				f.mkdir();
			}
		}
		
		MultipartRequest multi = new MultipartRequest(request, realPath, maxSize, "utf-8", new DefaultFileRenamePolicy());
		
		String sysName = multi.getFilesystemName("fileUpload");
		String filepath ="/editorPictor/"+sysName;

		File file = multi.getFile("fileUpload");
		
		long fileSize = 0;
		fileSize = file.length();

%>
<script type="text/javascript">
// <![CDATA[

	function done() {
		_mockdata = {
			'imageurl': '<%=filepath%>',
			'filename': '<%=sysName%>',
			'filesize': '<%=fileSize%>',
			'imagealign': 'L',
			'originalurl': '<%=filepath%>',
			'thumburl': '<%=filepath%>'
		};
		
		parent.done(_mockdata);
		parent.close();
	}
	function initUploader(){
	    var _opener = PopupUtil.getOpener();
	    if (!_opener) {
	        alert('잘못된 경로로 접근하셨습니다.');
	        return;
	    }

	    var _attacher = getAttacher('image', _opener);
	    registerAction(_attacher);
	    window.opener.close();
	}
// ]]>
</script>
</head>
<body onload="done();">
	<div class="wrapper">
	<div class="header">
		<h1>&nbsp;&nbsp;&nbsp; PREVIEW PICTURE</h1>
	</div>
	</div>
	<center>
	<div style="overflow:auto; width:570px; height:340px; border: double; border-color:#8692a0;">
		<center><img src="<%=filepath%>"></center>
	</div>
	</center>
	<input type="button" value="등록" onclick="done();"> <input type="button" value="취소" onclick="window.close();">

<%
}catch(Exception e){
	e.toString();
}
%>

</body>
</html>




