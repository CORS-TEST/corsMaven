<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ page import="com.ubireport.viewer.report.preview.UbiViewer" %>
<%@ page import="java.net.URLDecoder.*" %>
<%@ page import="java.net.URLEncoder.*" %>
<%@ page import="java.io.BufferedInputStream"%>
<%@ page import="java.io.FileInputStream"%>
<%@ page import="java.io.File"%>
<%@ page import="java.io.IOException"%>
<%@ page import="javax.servlet.ServletException"%>
<%@ page import="javax.servlet.ServletOutputStream"%>
<%@ page import="javax.servlet.http.HttpServletRequest"%>
<%@ page import="javax.servlet.http.HttpServletResponse"%>
<%
	response.setContentType("text/xml; charset=UTF-8");
	response.setHeader("Content-Encoding", "gzip");
	
	System.out.println("request==="+request.getParameter("fileName"));
	
	String filePath = request.getSession().getServletContext().getRealPath("/ubi4/export/")+"\\"+request.getParameter("fileName")+".urf";
	
	// 디렉토리 생성
	File desti = new File(session.getServletContext().getRealPath("/ubi4/export"));
	// 해당 디렉토리의 존재여부를 확인
	if (!desti.exists()) {
		// 없다면 생성
		desti.mkdirs();
	}
				
	//String filePath = "D:\\"+request.getParameter("fileName")+".urf";
	String userAgent = request.getHeader("User-Agent");
	if (userAgent.indexOf("MSIE") > -1) 
	{
		System.out.println("================ie"+userAgent);
		
	}else
	{
		System.out.println("================else"+userAgent);
	}
	
	ServletOutputStream out_stream	= null;
	BufferedInputStream in_stream	= null;
	System.out.println("================"+filePath);
	byte[] buffer = new byte[1024];
	
	File fis = new File(filePath);
	
	if(fis.exists())
	{
		try
		{
			out.clear();
			out = pageContext.pushBody();	
			
			out_stream = response.getOutputStream();
			in_stream = new BufferedInputStream(new FileInputStream(fis));
	
			int n = 0;
			while ((n = in_stream.read(buffer, 0, 1024)) != -1) 
			{
				out_stream.write(buffer, 0, n);
			}
		} 
		catch (Exception e) 
		{
			e.printStackTrace();
		} 
		finally 
		{
			if (in_stream != null) 
			{
				try 
				{
					in_stream.close();
				} 
				catch (Exception e) 
				{
					e.printStackTrace();
				}
			}
			if (out_stream != null) 
			{
				try 
				{
					out_stream.close();
				} 
				catch (Exception e) 
				{
					e.printStackTrace();
				}
			}
		}
	}
	else
	{
		response.sendRedirect("unknownfile");
	}
%>