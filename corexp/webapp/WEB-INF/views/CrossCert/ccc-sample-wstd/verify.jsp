<%@ page language="java" import="java.io.*,java.util.*,crosscert.*" %>
<%@ page contentType = "text/html; charset=utf-8" %>

<%  
	/*-------------------------시작----------------------------*/ 
	response.setDateHeader("Expires",0); 
	response.setHeader("Prama","no-cache"); 

	if(request.getProtocol().equals("HTTP/1.1")) 
	{ 
		response.setHeader("Cache-Control","no-cache"); 
	} 
	/*------------------------- 끝----------------------------*/ 

	

	
	
	String signeddata = "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";		// 서명된 값 

	int nRet = 0;
	
	crosscert.Base64 CBase64 = new crosscert.Base64();
	nRet = CBase64.Decode(signeddata.getBytes(), signeddata.getBytes().length);
	if(nRet==0) 
	{
		out.println("서명값 Base64 Decode 결과 : 성공<br>") ;

		Verifier CVerifier = new Verifier();
		nRet=CVerifier.VerSignedData(CBase64.contentbuf, CBase64.contentlen); 
		if(nRet==0) 
		{
			String sOrgData = new String(CVerifier.contentbuf );
			out.println("전자서명 검증 결과 : 성공<br>") ;
			out.println("원문 : " + sOrgData + "<br>");


				
			//인증서 정보 추출 결과	
			Certificate CCertificate = new Certificate();
			nRet=CCertificate.ExtractCertInfo(CVerifier.certbuf, CVerifier.certlen);
			out.println("인증서 정보 추출 결과: 성공 <br>");
			
			out.println("인증서 DN  : " + CCertificate.subject +"<br>");


			// 인증서 검증
			String policies = "";

			// 개인상호연동용(범용)                            //
			policies +="1.2.410.200004.5.2.1.2"    + "|";          // 한국정보인증               개인
			policies +="1.2.410.200004.5.1.1.5"    + "|";          // 한국증권전산               개인
			policies +="1.2.410.200005.1.1.1"      + "|";          // 금융결제원                 개인
			policies +="1.2.410.200004.5.4.1.1"    + "|";          // 한국전자인증               개인
			policies +="1.2.410.200012.1.1.1"      + "|";          // 한국무역정보통신           개인 
			
			// 개인 용도제한용 인증서정책(OID)                 용도                    공인인증기관
			policies += "1.2.410.200004.5.4.1.101|";        // 은행거래용/보험용       한국전자인증
			policies += "1.2.410.200004.5.4.1.102|";        // 증권거래용              한국전자인증
			policies += "1.2.410.200004.5.4.1.103|";        // 신용카드용              한국전자인증
			policies += "1.2.410.200004.5.4.1.104|";        // 전자민원용              한국전자인증
			policies += "1.2.410.200004.5.2.1.7.1|";        // 은행거래용/보험용       한국정보인증
			policies += "1.2.410.200004.5.2.1.7.2|";        // 증권거래용/보험용       한국정보인증
			policies += "1.2.410.200004.5.2.1.7.3|";        // 신용카드용              한국정보인증
			policies += "1.2.410.200004.5.1.1.9|";          // 증권거래용/보험용       한국증전산
			policies += "1.2.410.200004.5.1.1.9.2|";        // 신용카드용              한국증전산
			policies += "1.2.410.200005.1.1.4|";            // 은행거래용/보험용       금융결제원
			policies += "1.2.410.200005.1.1.6.2|";          // 신용카드용              금융결제원
			policies += "1.2.410.200012.1.1.101|";          // 은행거래용/보험용       한국무역정보통신
			policies += "1.2.410.200012.1.1.103|";          // 증권거래용/보험용       한국무역정보통신
			policies += "1.2.410.200012.1.1.105|";           // 신용카드용              한국무역정보통신
			policies += "1.2.410.200005.1.1.4|";           // 은행              금결원
			// 법인상호연동용(범용)    
			policies +="1.2.410.200004.5.2.1.1"    + "|";          // 한국정보인증               법인
			policies +="1.2.410.200004.5.1.1.7"    + "|";          // 한국증권전산               법인, 단체, 개인사업자
			policies +="1.2.410.200005.1.1.5"      + "|";          // 금융결제원                 법인, 임의단체, 개인사업자
			policies +="1.2.410.200004.5.4.1.2"    + "|";          // 한국전자인증               법인, 단체, 개인사업자
			policies +="1.2.410.200012.1.1.3"      + "|";          // 한국무역정보통신           법인

			nRet=CCertificate.ValidateCert(CVerifier.certbuf, CVerifier.certlen, policies, 1);
			if(nRet==0) 
			{
				out.println("인증서 검증 결과 : 성공<br>") ;

			}
			else
			{
				out.println("인증서 검증 결과 : 실패<br>") ;
				out.println("에러내용 : " + CCertificate.errmessage + "<br>");
				out.println("에러코드 : " + CCertificate.errcode + "<br>");
			}
		}
		else
		{
			out.println("전자서명 검증 결과 : 실패<br>") ;
			out.println("에러내용 : " + CVerifier.errmessage + "<br>");
			out.println("에러코드 : " + CVerifier.errcode + "<br>");
			return;
		}
	}
	else
	{
		out.println("서명값 Base64 Decode 결과 : 실패<br>") ;
		out.println("에러내용 : " + CBase64.errmessage + "<br>");
		out.println("에러코드 : " + CBase64.errcode + "<br>");
	}
		
	
	
%>
