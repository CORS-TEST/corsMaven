/*
 ===============================================================================
 == date 관련 공통함수들은 여기에 작성한다.
 ===============================================================================
 ● gfnToday			: 오늘 날짜 yyyymmdd 가져오기
 ● gfnTodayTime 		: 오늘 날짜+시간을 yyyymmddhhmiss 가져온다.
 ● gfnAddDay			: 입력된 날짜로부터 입력된 숫자만큼의 날짜를 더한/뺀 날짜 yyyyMMdd 를 리턴
 ● gfnCheckDate		: 날짜 8자리 유효성 체크
 ● gfnCheckSlashDate	: 날짜 유효성 체크
 ● gfnCheckDateMonth	: 년월 날짜 인지 유효성 체크
 ● gfnFirstDay			: 입력된 월,일에 해당된 첫일자 구하기
 ● gfnAddMonth			: 입력된 날짜로부터 입력된 숫자만큼의 개월을 더한/뺀 날짜를 리턴
 ● gfnDateTime			: 년도, 월, 일을 받아서 yyyyMMdd 형태의 String을 리턴	
 ● gfnLastDateNum		: 해당월의 마지막 날짜 
 ● gfnIsLeapYear		: 윤년여부 확인
 ● gfnPreMonthLastDay	: 전월말일자
 ● gfnCheckPreDate		: 입력된 날짜가 지난 날짜이면 false 같거나 다가올 날짜이면 true를 리턴
 ● gfnThisYearStrDay	: 오늘 날짜 기준으로 그 해 1월 1일 ex)20160101
 ● gfnThisYearEndDay	: 오늘 날짜 기준으로 그 해 12월 31일 ex)20161231
 ● Date.prototype.toFormatString	: 날짜 포멧 설정
 ● gfnMakeTempKey		: yyyymmddhh24misss 형태의 현재 시각
 */

/**
  * @함수명	: gfnToday
  * @return		: sToday {String} yyyymmdd 포멧의 오늘 날짜
  * @desc		: 오늘 날짜 yyyymmdd 가져오기
*/
gfnToday = function()
{
	var sToday = "";
	var objDate = new Date();
	var sToday  = objDate.getFullYear() + "";
	var sMonth = objDate.getMonth()+1;
	var sDate = objDate.getDate();
		
	if(sMonth.toString().length == 1){
		sMonth = "0" + sMonth;
	}
	if(sDate.toString().length == 1){
		sDate = "0" + sDate;
	}
	sToday = sToday+sMonth+sDate;
	
	return sToday;
}

/**
  * @함수명	: gfnTodayTime
  * @return		: strToday {String} yyyymmddhhmiss 포멧의 오늘 날짜+시간
  * @desc		: 오늘 날짜+시간을 yyyymmddhhmiss 가져온다.
  */
gfnTodayTime = function()
{
	var strToday = gfnToday();

	var objDate = new Date();
	strToday += gfnRightStr("0" + objDate.getHours(), 2);
	strToday += gfnRightStr("0" + objDate.getMinutes(), 2);
	strToday += gfnRightStr("0" + objDate.getSeconds(), 2);

	return strToday;
}

/**
  * @함수명	: gfnAddDay
  * @input		: sDate {String} yyyyMMdd 형태의 날짜 String
				  nOffSet {String} 달로부터 증가,감소값
  * @return		: sDate {String} yyyyMMdd
  * @desc		: 입력된 날짜로부터 입력된 숫자만큼의 날짜를 더한/뺀 날짜 yyyyMMdd 를 리턴
  */
gfnAddDay = function(sDate, nOffSet)
{	
	if( gfnIsNull(sDate) || gfnIsNull(nOffSet))	return "";
	
	sDate = String(sDate);
	
	var nYear 	= parseInt(sDate.substr(0, 4));
	var nMonth 	= parseInt(sDate.substr(4, 2));
	var nDate 	= parseInt(sDate.substr(6, 2)) + nOffSet;
	var nLastDate;
	var flag = true;
	
	/*해당월의 마지막 날짜를 넘었을때*/
	while(gfnLastDateNum(sDate) < nDate){
		nDate = nDate-gfnLastDateNum(sDate);
		nMonth = nMonth + 1;
		
		if(nMonth > 12){
			nMonth = 1;
			nYear = nYear + 1;
		}
		
		if(nMonth.toString().length == 1){
			nMonth = "0" + nMonth;
		}else{
			nMonth = nMonth+"";
		}
		
		if(nDate.toString().length == 1){
			nDate = "0" + nDate;
		}else{
			nDate = nDate+"";
		}
		
		sDate = nYear+nMonth+nDate;
		
		flag = false;
	}
	
	if(nDate < 1){
		nMonth = nMonth-1;
		
		if(nMonth <= 0){
			nYear = nYear - 1;
			nMonth = 12;
		}

		if(nMonth.toString().length == 1){
			nMonth = "0" + nMonth;
		}else{
			nMonth = nMonth+"";
		}
		
		if(nDate.toString().length == 1){
			nDate = "0" + nDate;
		}else{
			nDate = nDate+"";
		}
		
		nDate = Number(gfnLastDateNum(nYear.toString()+nMonth.toString()+nDate.toString()))+Number(nDate);
	}
	
	if(flag){
		if(nMonth.toString().length == 1){
			nMonth = "0" + nMonth;
		}else{
			nMonth = nMonth+"";
		}
		
		if(nDate.toString().length == 1){
			nDate = "0" + nDate;
		}else{
			nDate = nDate+"";
		}
		sDate = nYear+nMonth+nDate;
	}
		
	return sDate;
}

/**
  * @함수명	: gfnCheckDate
  * @input		: day {String} yyyyMMdd 형태의 날짜 String
  * @return		: {boolean}
  * @desc		: 날짜 8자리 유효성 체크
  */  
gfnCheckDate = function(day)
{	
	if(gfnGetLength(day) != 8 ){
		return false;
	}
	
	var yyyy = day.substring(0,4);
	var mm = day.substring(4,6);
	var dd = day.substring(6,8);
	
	var m = parseInt(mm,10) - 1;
	var d = parseInt(dd,10);

	var end = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
	if ((yyyy % 4 == 0 && yyyy % 100 != 0) || yyyy % 400 == 0){
		end[1] = 29;
	}

	return (d >= 1 && d <= end[m]);
}

/**
  * @함수명	: gfnCheckSlashDate
  * @input		: strValue {String} 체크할 string
  * @return		: {boolean} true = 입력값이 10자리 날짜 형태일 경우
				  허용 입력 타입(yyyy-MM-dd, yyyy/MM/dd, yyyy.MM.dd)
  * @desc		: 입력값이 날짜 형태 인지 체크하는 함수
  */  
gfnCheckSlashDate = function(strValue)
{
	return gfnCheckDate(gfn_replace(gfn_replace(gfn_replace(strValue, "/", ""), "-", ""), ".", ""));
}

/**
  * @함수명	: gfnCheckDateMonth
  * @input		: strValue {String} 체크할 string
  * @return		: {boolean}
  * @desc		: 입력값이 년월날짜 형태 인지 체크하는 함수
  */  
gfnCheckDateMonth = function(strValue)
{
	if(gfnGetLength(strValue) != 6){
		return false;
	}else if (!gfnCheckDate(strValue + "01")){
		return false;
	}
	
	return true;
}

/**
  * @함수명	: gfnFirstDay
  * @input		: sDate {String} yyyymmdd
  * @return		: {String} 첫일자
  * @desc		: 입력된 월,일에 해당된 첫일자 구하기
  */ 
gfnFirstDay = function(sDate)
{
	// 파라메타 값이 없으면 오늘일자로 세팅
	if(gfnIsNull(sDate)){
		sDate = gfnToday();
	}
	
	return sDate.toString(10).substr(0,6) + "01"; 
} 

/**
  * @함수명	: gfnAddMonth
  * @input		: sDate {String} yyyyMMdd 형태의 날짜 String
				  nOffSet {String} 달로부터 증가,감소값
  * @return		: {String} yyyyMMdd
  * @desc		: 입력된 날짜로부터 입력된 숫자만큼의 개월을 더한/뺀 날짜를 리턴
  */
gfnAddMonth = function(sDate, nOffSet)
{
	if( gfnIsNull(sDate) || gfnIsNull(nOffSet))	return "";
	sDate = String(sDate);
	var nYear 	= parseInt(sDate.substr(0, 4));
	var nMonth 	= parseInt(sDate.substr(4, 2)) + nOffSet;
	var nDate 	= parseInt(sDate.substr(6, 2));
	var nLastDate, sRet;
	
	if(nDate.toString().length == 1){
		nDate = "0" + nDate;
	}
	
	sRet 		= gfnDateTime(nYear, nMonth, 1);	
	nLastDate 	= gfnLastDateNum(sRet);
	sRet 		= sRet.substr(0, 6);
	
	if( nDate > nLastDate )	{
		sRet += nLastDate.toString();
	}else{
		sRet += nDate.toString();
	}
		
	return sRet;
}

/**
  * @함수명	: gfnDateTime
  * @input		: nYear {String} 년도
				  nMonth {String} 월
				  nDate {String} 일
  * @return		: {String} yyyyMMdd
  * @desc		: 년도, 월, 일을 받아서 yyyyMMdd 형태의 String을 리턴	
  */
gfnDateTime = function(nYear, nMonth, nDate)
{
	if(gfnIsNull(nYear) || gfnIsNull(nMonth) || gfnIsNull(nDate) ){
		return -1;
	}
	
	var objDate = new Date(nYear, nMonth-1, nDate);

	var sYear   = objDate.getFullYear().toString();
	var sMonth  = gfnRightStr("0" + (objDate.getMonth() + 1), 2);
	var sDate   = gfnRightStr("0" + objDate.getDate(), 2);

	return sYear + sMonth + sDate;
}

/**
  * @함수명	: gfnDateTime
  * @input		: sDate {String} yyyyMMdd
  * @return		: {String} dd
  * @desc		: 해당월의 마지막 날짜	
  */
gfnLastDateNum = function(sDate)
{
	var nMonth, nLastDate;

	if(gfnIsNull(sDate) )	return -1;
	
	nMonth = parseInt(sDate.substr(4, 2), 10);
	if( nMonth == 1 || nMonth == 3 || nMonth == 5 || nMonth == 7  || nMonth == 8 || nMonth == 10 || nMonth == 12 )
	{
		nLastDate = 31;
	} else if( nMonth == 2 ) {
		if( gfnIsLeapYear(sDate) == true )
		{
			nLastDate = 29;
		} else {
			nLastDate = 28;
		}
	} else { 
		nLastDate = 30;
	}	
	return nLastDate;
}

/**
  * @함수명	: gfnIsLeapYear
  * @input		: sDate {String} yyyyMMdd
  * @return		: ret {boolean} true = 윤년, false = 윤년이 아님
  * @desc		: 윤년 여부를 확인하는 함수
  */
gfnIsLeapYear = function(sDate)
{
	var ret;
	var nY;
	
	if(gfnIsNull(sDate))		return -1;
	
	nY = parseInt(sDate.substring(0,4), 10);

	if((nY % 4) == 0){
		if((nY % 100) != 0 || (nY % 400) == 0){		
			ret = true;
		}else{ 
			ret = false;
		}
	}else{
		ret = false;
	}
  
	return ret;
}

/**
  * @함수명	: gfnPreMonthLastDay
  * @return		: {String} yyyyMMdd
  * @desc		: 전월말일자
  */
gfnPreMonthLastDay = function()
{
	var objDate = new Date();
	objDate.addMonth(-1);
	
	var yymm = objDate.toFormatString("yyyymm");
	var lastdate = gfnLastDateNum(yymm);

	return yymm + lastdate;
}

/**
  * @함수명	: gfnCheckPreDate
  * @input		: strDate {String} yyyyMMdd
  * @return		: {boolean} true  = 다가올 날짜 이거나 오늘
				  false = 이미 지나간 날짜
  * @desc		: 입력된 날짜가 지나간 날짜인지 확인하는 함수.
  */
gfnCheckPreDate = function(strDate)
{
	var today = gfnToday();	
	return (parseInt(today)<= parseInt(strDate));
}

/**
  * @함수명	: gfnThisYearStrDay
  * @return		: {String} yyyy0101
  * @desc		: 오늘 날짜 기준으로 그 해 1월 1일 ex)20160101
  */
gfnThisYearStrDay = function()
{
	var objDate = new Date();	
	return objDate.toFormatString("yyyy0101");
}

/**
  * @함수명	: gfnThisYearEndDay
  * @return		: {String} yyyy1231
  * @desc		: 오늘 날짜 기준으로 그 해 12월 31일 ex)20161231
  */
gfnThisYearEndDay = function()
{
	var objDate = new Date();	
	return objDate.toFormatString("yyyy1231");
}

/**
  * @함수명	: toFormatString
  * @return		: fmt {String} ex)yyyy.mm.dd or yy.mm 등등
  * @desc		: 포멧설정
  */
Date.prototype.toFormatString = function(fmt)
{
	if (!this.valueOf()) return "";
 
	var dt = this;
	return fmt.replace(/(yyyy|yy|mm|dd|hh24|hh|mi|sss|ss|am|pm)/gi,
		function($1){
			switch ($1){
				case 'yyyy': return dt.getFullYear();
				case 'yy':   return dt.getFullYear().toString().substr(2);
				case 'mm':   return (dt.getMonth()+1) < 10 ? "0"+(dt.getMonth()+1) : dt.getMonth()+1;               
				case 'dd':   return (dt.getDate()) < 10 ? "0"+dt.getDate() : dt.getDate();
				case 'hh24': return dt.getHours();
				case 'hh':   return (h = dt.getHours() % 12) ? h : 12;				
				case 'mi':   return (dt.getMinutes()) < 10 ? "0"+(dt.getMinutes()) : dt.getMinutes();
				case 'sss':   return dt.getMilliseconds();
				case 'ss':   return dt.getSeconds();				
				case 'am':   return dt.getHours() < 12 ? 'am' : 'pm';
				case 'pm':   return dt.getHours() < 12 ? 'am' : 'pm';
			}
		} 
	);
}

/**
  * @함수명	: gfnMakeTempKey
  * @return		: yyyymmddhh24misss 형태의 현재 시각
  * @desc		: yyyymmddhh24misss 형태의 현재 시각
  */
gfnMakeTempKey = function(date)
{
	var objDate = (!gfnIsNull(date) && date instanceof Date) ? date : new Date();
	return objDate.toFormatString("yyyymmddhh24misss");
}
