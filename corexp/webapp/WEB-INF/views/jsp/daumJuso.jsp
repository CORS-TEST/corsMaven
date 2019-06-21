<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<script src="https://ssl.daumcdn.net/dmaps/map_js_init/postcode.v2.js"></script>
<script>
    //본 예제에서는 도로명 주소 표기 방식에 대한 법령에 따라, 내려오는 데이터를 조합하여 올바른 주소를 구성하는 방법을 설명합니다.
        new daum.Postcode({
            oncomplete: function(data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 도로명 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var fullRoadAddr = data.roadAddress; // 도로명 주소 변수
                var extraRoadAddr = ''; // 도로명 조합형 주소 변수
				var roadAddr = '';

                if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                    extraRoadAddr += data.bname;
                }
                
                // 건물명이 있고, 공동주택일 경우 추가한다.
                if(data.buildingName !== '' && data.apartment === 'Y'){
                   extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                // 도로명, 지번 조합형 주소가 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                if(extraRoadAddr !== ''){
                    extraRoadAddr = ' (' + extraRoadAddr + ')';
                }
                // 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다.
                if(fullRoadAddr !== ''){
                    fullRoadAddr += extraRoadAddr;
                }

                // http://postcode.map.daum.net/guide#usage 참조 ebhan
                // 새우편번호 : zonecode; 
                // 도로명 :roadAddress;
                // 지번 : jibunAddress
                // 선택한 타입(R : 도로 , J : 지번 ) : userSelectedType
				
                roadAddr = data.zonecode+"▧"+fullRoadAddr+"▧"+ data.jibunAddress+"▧"+data.userSelectedType;
                
    			if (window.NEXACROWEBBROWSER) {
    				window.NEXACROWEBBROWSER.on_fire_onusernotify(window.NEXACROWEBBROWSER, "▦"+roadAddr);
    		  	} else {
    		  	 	window.document.title = "▩"+roadAddr;	
    			}	 
                
            }
        }).open();
</script>
<title>Insert title here</title>
</head>
<body>
<input type="hidden" id="postcode">
<input type="hidden" id="roadAddress">
<input type="hidden" id="jibunAddress">
</body>
</html>