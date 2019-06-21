/*
 ===============================================================================
 == String관련 공통함수들은 여기에 작성한다.
 ===============================================================================
 ● gfnToString   	: 입력값을 String으로 변경한다.
 ● gfnIsKorean   	: 한글인지 체크한다. 
 ● gfnGetStrByte   : 입력받은 글자의 바이트를 리턴한다.
 ● gfnGetLength  	: 입력값 형태에 따라서 길이 또는 범위를 구하는 함수 
 ● gfnRightStr		: 문자열의 오른쪽부분을 지정한 길이만큼 Return 한다.
 ● gfnNvl        	: 입력값이 존재하는지를 판단하여 존재하는 경우 입력값을 그대로 반환, 그렇지 않으면 두 번째 파라미터를 반환하는 함수 
 ● gfnReplace    	: 입력된 문자열의 일부분을 다른 문자열로 치환하는 함수
 ● gfnSetComma		: 숫자에 ","를 집어넣기 
 ● gfnTrim 		: 공백 제거     
 */

/**
  * @함수명	: gfnToString
  * @input		: Val {object}
  * @return		: {String}
  * @desc		: 입력값을 String으로 변경한다.
  */
gfnToString = function (Val)
{
	if (gfnIsNull(Val)) 
	{
		return new String();
	}
	return new String(Val);
}

/**
  * @함수명	: gfnIsKorean
  * @input		: str {String} 검증할 문자
  * @return		: {boolean}
  * @desc		: 한글인지 체크한다.
  */
gfnIsKorean = function(str) 
{
    if(/^[가-힝]$/.test(str)){
		return true;
    }else{
		return false;
	}
}

/**
  * @함수명	: gfnGetStrByte
  * @input		: str {String} 검증할 문자열
				  isUtf8 {boolean} [true:utf-8(숫자,알파벳 1 그외 3)], [false:euc-kr(숫자,알파벳 1 그외 2)]
  * @return		: {boolean}
  * @desc		: 입력받은 글자의 바이트를 리턴한다.
  */
gfnGetStrByte = function (str, isUtf8)
{
	if(gfnIsNull(str)){
		return 0;
	}
	
	var charset = "";	
	if(gfnIsNull(isUtf8)){
		charset = "utf8";
	}else{
		charset = "euckr";
	}
	
	var rtnByte = 0;
	for(var i=0; i<str.length; i++){	
		// /, ", ' 3개빠짐
		if(/^[0-9a-zA-Z!@#$%^&*()_+?|\\<>.,:=;\-]$/.test(str.charAt(i))){
			rtnByte += 1;
		}else{
			if(charset == "utf8"){
				rtnByte += 3;
			}else if(charset == "euckr"){
				rtnByte += 2;
			}
		}
		
		//trace("str :> " + str[i] + "        rtnByte :> " + rtnByte );
	}
	
	return rtnByte;
}


/**
  * @함수명	: gfnGetLength
  * @input		: Val {object}
  * @return		: {String} 문자열 길이
  * @desc		: 입력값 형태에 따라서 길이 또는 범위를 구하는 함수
  */
gfnGetLength = function (Val)
{
	return gfnToString(Val).length;
}

/**
  * @함수명	: gfnRightStr
  * @input		: Val {String} 문자열
				  nSize {String} 얻어올 크기. [Default Value = 0]
  * @return		: rtnVal {String} 지정한 길이만큼의 문자열
  * @desc		: 문자열의 오른쪽부분을 지정한 길이만큼 Return 한다.
  */
gfnRightStr = function (Val, nSize)
{
	var nStart = gfnToString(Val).length;
	var nEnd = Number(nStart) - Number(nSize);
	var rtnVal = Val.substring(nStart, nEnd);

	return rtnVal;
}

/**
	@function	gfnNvl()
	@param		Val {String}
				newVal {String} Val이 null일경우 리턴 값
	@return		Val or newVal {String}
	@desc   	입력값이 존재하는지를 판단하여
				존재하는 경우 입력값을 그대로 반환, 그렇지 않으면
				두 번째 파라미터를 반환하는 함수
*/

/**
  * @함수명	: gfnNvl
  * @input		: Val {String}
				  newVal {String} Val이 null일경우 리턴 값
  * @return		: Val or newVal {String}
  * @desc		: 입력값이 존재하는지를 판단하여
				  존재하는 경우 입력값을 그대로 반환, 그렇지 않으면
				  두 번째 파라미터를 반환하는 함수
  */
gfnNvl = function (Val, newVal)
{
	if (gfnIsNull(Val)) 
	{
		return newVal;
	}
	return Val;
}

/**
  * @함수명	: gfnReplace
  * @input		: Val {String} 원본 문자열.
				  strOld {String} 원본 문자열에서 찾을 문자열.
				  strNew {String} 새로 바꿀 문자열.
  * @return		: Val {String} 대체된 문자열
  * @desc		: 입력된 문자열의 일부분을 다른 문자열로 치환하는 함수
  */
gfnReplace = function (Val, strOld, strNew)
{
   //trace("=== gfnReplace ===");
	Val = gfnToString(Val);
	Val = Val.split(eval("/" + strOld + "/g")).join(strNew);
	// Val = Val.split(strOld).join(strNew);
	return Val;
}

/**
  * @함수명	: gfnSetComma
  * @input		: sNum {String}
  * @return		: {String} , 추가된 문자열
  * @desc		: 숫자에 ","를 집어넣기
  */
gfnSetComma = function (sNum)
{
	return sNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
  * @함수명	: gfnTrim
  * @input		: sValue {String}
  * @return		: rtnVal {String} 공백 제거된 문자열 
  * @desc		: 문자열에서 공백 제거
  */
gfnTrim = function(sValue)
{
	if(gfnIsNull(sValue)) return "";	                                                             
    var retVal = (new String(sValue)).replace(/^\s+|\s+$/g, ''); 
    return retVal;
}
