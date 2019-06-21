/*
 ===============================================================================
 == Util관련 공통함수들은 여기에 작성한다.
 =============================================================================== 
 ● gfnChkEmail    		: 입력값이 e-mail Type인지 체크하는 함수
 ● gfnIsNum 			: 숫자형식 여부를 반환하는 함수
 ● gfnIsTel 			: 전화번호 or 휴대폰번호  유효성 체크 
 ● gfnGetInteger 		: 입력받은 value가 숫자이면 정수부분을 리턴한다.
 ● gfnGetFloat 		: 입력받은 value가 숫자이면 소수점 뒷 부분을 리턴한다.
 ● gfnMultiLabel 		: 다국어 처리 (주로 그리드에서사용)
 ● gfnAlert    		: alert 메시지
 ● gfnConfirm    		: confirm 메시지
 ● gfnLabelRep   		: 리소스에 변수의 값을 넣어 리턴한다
*/

/**
  * @함수명	: gfnChkEmail
  * @input		: strValue {String}
  * @return		: {boolean} true = 입력값이 email형태일 경우
  * @desc		: 입력값이 e-mail Type인지 체크하는 함수
  */
gfnChkEmail = function (strValue)
{
	if(gfnIsNull(strValue)){
		return false;
	}

	var nIndexOfAt = strValue.indexOf("@");
	var nIndexOfDot = strValue.indexOf(".");
	var nLength = strValue.length;

	// "@" 이 하나도 없거나 맨 끝에 위치한  경우
	if(nIndexOfAt <= 0 || nIndexOfAt == nLength){
		return false;
	}

	// "." 이 하나도 없거나 맨 끝에 위치한 경우
	if(nIndexOfDot <= 0 || nIndexOfDot == nLength){
		return false;
	}

	// "@"이 두개 이상 존재하는 경우
	if(strValue.indexOf("@", nIndexOfAt + 1) != -1){
		return false;
	}

	// ".@" 인 경우 또는 "@."인 경우
	if(strValue.substr(nIndexOfAt - 1, 1) == "." || strValue.substr(nIndexOfAt + 1, 1) == "."){
		return false;
	}

	// "@" 이후에 "."이 존재하지 않는 경우
	if(strValue.indexOf(".", (nIndexOfAt + 2)) == -1){
		return false;
	}

	// 공백문자가 존재하는 경우
	if(strValue.indexOf(" ") != -1){
		return false;
	}

	return true;
}

/**
  * @함수명	: gfnIsNum
  * @input		: sNum {String}
  * @return		: ret {boolean}
  * @desc		: 숫자형식 여부를 반환하는 함수
  */
gfnIsNum = function(sNum)
{
	var c;
	var point_cnt=0;
	var ret=true;

	if(gfnIsNull(sNum)) return false;

	for(var i = 0 , x=sNum.length; i < x ; i++ )
	{
		c = sNum.charAt(i);
		if( i == 0 && ( c == "+" || c == "-" ) );
		else if( c >= "0" && c <= "9" );
		else if( c == "." || c == "," )
		{
			point_cnt++;
			if( point_cnt > 1 )
			{
				ret = false;
				break;
			}
		}
		else
		{
			ret = false;
			break;
		}
	}

	return ret;
}

/**
  * @함수명	: gfnIsTel
  * @input		: sValue {String} 검증값	
				  sGubun {String} null(전체) / "C"(휴대폰) / "T"(일반전화)
  * @return		: {boolean}
  * @desc		: 전화번호 or 휴대폰번호  유효성 체크
  */
gfnIsTel = function(sValue, sGubun)
{
	if(gfnIsNull(sValue)) return false;
	
	var chkStr = sValue;	    

	if (chkStr.length < 9 || chkStr.length > 11) 
	{
		//오류
		return false;
	}
	
	var format = "[0-9]+";
	var regexp = new RegExp(format, "ig");
	var sTmp   = regexp.exec(chkStr);

	if (sTmp == "" || sTmp == null) {
		return false;
	}

	if ((sTmp.index != 0) || (sTmp[0].length != chkStr.length)) {
		return false;
	}

	var telPattern = "";
	
	//전체체크
	if (gfnIsNull(sGubun)) 
	{
		telPattern = "02,031,032,033,041,042,043,051,052,053,054,055,061,062,063,064,010,011,016,017,018,019,0502,070";
	
	} 
	else if (sGubun == "C") //휴대폰체크
	{
		telPattern = "010,011,016,017,018,019";
	
	} 
	else if (sGubun == "T")  //전화번호체크
	{
		telPattern = "02,031,032,033,041,042,043,051,052,053,054,055,061,062,063,064,0502,070";
	}

	var localNum = telPattern.split(",");

	var tel1 = "";
	var tel2 = "";
	var tel3 = "";

	// 앞에 세 자리 가운데 지역번호 유효성 검사
	for (var ia = 0; ia < localNum.length; ia++) 
	{
		if (chkStr.substr(0, 3) == localNum[ia]) 
		{
		   tel1 = chkStr.substr(0, 3);
		   tel2 = chkStr.substr(3, chkStr.length);
		   break;
		}
	}

	// 앞에 두 자리 가운데 지역번호 유효성 검사
	if (tel1 == "") 
	{
		for (var ia = 0; ia < localNum.length; ia++) 
		{
			if (chkStr.substr(0, 2) == localNum[ia]) 
			{
				tel1 = chkStr.substr(0, 2);
				tel2 = chkStr.substr(2, chkStr.length);
				break;
			}
		}
	}

	// 앞에 네 자리 가운데 지역번호 유효성 검사
	if (tel1 == "") 
	{
		for (var ia = 0; ia < localNum.length; ia++) 
		{
			if (chkStr.substr(0, 4) == localNum[ia]) 
			{
				tel1 = chkStr.substr(0, 4);
				tel2 = chkStr.substr(4, chkStr.length);
				break;
			}
		}
	}

	// 앞에 2, 3, 4 자리 가운데 지역번호가 없으면 잘못된 번호
	if (tel1 == "" || tel2.length > 8) 
	{
		return false;
	}
		
	return true;

}



/**
  * @함수명	: gfnGetInteger
  * @input		: val {String}
  * @return		: {String} 정수부
  * @desc		: 입력받은 value가 숫자이면 정수부분을 리턴한다.
  */
gfnGetInteger = function(val)
{
	if(gfnIsNull(val)) return "";

	var val = String(val);
	if(!gfnIsNum(val)){
		trace("숫자형식이 아닙니다.");
		return "";
	}
	
	return (Number(val).toFixed());
}

/**
  * @함수명	: gfnGetFloat
  * @input		: val {String}
  * @return		: {String} 소수점 뒷 부분을 리턴
  * @desc		: 입력받은 value가 숫자이면 소수점 뒷 부분을 리턴한다.
  */
gfnGetFloat = function(val)
{
	if(gfnIsNull(val)) return "";

	var val = String(val);
	if(!gfnIsNum(val)){
		trace("숫자형식이 아닙니다.");
		return "";
	}
	
	var point_cnt = 0;
	var rtn = "";
	var c = "";
	
	for(var i=0, x=val.length; i<x; i++){
		c =  val.charAt(i);
		
		if( c == "."){
			point_cnt++;
		}
		
		if( point_cnt == 1 && c >= "0" && c <= "9" ){
			rtn = rtn + c;
		}		
	}
		
	return rtn;
}

/**
  * @함수명	: gfnMultiLabel
  * @input		: val(출력할 메시지)
  * @desc		: gdsLabel에서 검색하여 리턴한다.
  */  
gfnMultiLabel = function(val)
{
	if(gfnIsNull(val)) return "";
	if(gfnIsNull(application.gdsLabel.getColumn(0, val))) return val;
	return application.gdsLabel.getColumn(0, val).replace('▩','\n');
}

/**
  * @함수명	: gfnAlert
  * @input		: val(출력할 메시지)
  * @desc		: alert 메시지
  */
gfnAlert = function(val)
{
	var rtnMsg = application.gdsLabel.getColumn(0,val);
	var str = gfnIsNull(rtnMsg) ? val : rtnMsg.replace('▩','\n');
	application.alert(str, application.GV_TITLE_TEXT);
}

/**
  * @함수명	: gfnConfirm
  * @input		: val(출력할 메시지)
  * @desc		: confirm 메시지
  */
gfnConfirm = function(val)
{	
	var rtnMsg = application.gdsLabel.getColumn(0,val);
	var str = gfnIsNull(rtnMsg) ? val : rtnMsg.replace('▩','\n');	
	return application.confirm(str, application.GV_TITLE_TEXT, "question");
}

/**
  * @함수명	: gfnLabelRep
  * @input		: val(삽입할 값 ) val = [ "val1", "val2" ]
  * @desc		: 리소스에 변수의 값을 넣어 리턴한다
  */
gfnLabelRep = function(label, val)
{
	var regExp;
	var str = gfnMultiLabel(label);
	for(var i=0; i<val.length; i++) {
		regExp = String.fromCharCode(123) + i + String.fromCharCode(125);
		str = str.replace(regExp, val[i]);
	}
	return str;
}

gfnInitCross = function(form) 
{
	var Ret;
	var policies = "";

	 /* 법인상호연동용(범용) */                          	//
	policies +="1.2.410.200004.5.2.1.1"    + "|";          	// 한국정보인증               법인
	policies +="1.2.410.200004.5.1.1.7"    + "|";          	// 한국증권전산               법인, 단체, 개인사업자
	policies +="1.2.410.200005.1.1.5"      + "|";          	// 금융결제원                 법인, 임의단체, 개인사업자
	policies +="1.2.410.200004.5.3.1.1"    + "|";          	// 한국전산원                 기관(국가기관 및 비영리기관)
	policies +="1.2.410.200004.5.3.1.2"    + "|";          	// 한국전산원                 법인(국가기관 및 비영리기관을  제외한 공공기관, 법인)
	policies +="1.2.410.200004.5.4.1.2"    + "|";          	// 한국전자인증               법인, 단체, 개인사업자
	policies +="1.2.410.200012.1.1.3"      + "|";          	// 한국무역정보통신           법인
	policies +="1.2.410.200004.5.4.1.3"    + "|";          	//
	policies +="1.2.410.200004.5.4.1.36"    + "|";          //
	
	
	// 개인상호연동용(범용)                            	//
	policies +="1.2.410.200004.5.2.1.2"    + "|";          	// 한국정보인증               개인         
	

	
	Ret =  form.Plugin00.callMethod("SetCommonInfoFromVal","211.192.169.70",4502, 
														"211.192.169.180",389, 
														"211.192.169.180",389,
														"CN=ROOT-RSA-CRL,OU=ROOTCA,O=KISA,C=KR",
														"no",
														policies);
	if ( Ret != 0 )	{ 
		gfnAlert( "인증 초기 설정에 실패하였습니다." );
		return false;
	} else {
		Ret = form.Plugin00.callMethod("SetPKCSInform", 1, 0, 0, 0, 0, 0, 0, 1, "SEED"); 

		if ( Ret != 0 ) { 
			gfnAlert( "인증 초기 설정에 실패하였습니다." );
			return false;
		} else {
			return true;
		}
	}	
}