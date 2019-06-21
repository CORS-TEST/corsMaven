﻿/*
 ===============================================================================
 == Form관련 공통함수들은 여기에 작성한다.
 ===============================================================================
 ● gfnBtnRange    			: 같은 scope에 위치한 버튼을 정렬한다.
 ● gfnOpenMenuUrl    		: 신규 윈도우 화면을 생성하고 open 시킴 (input : 링크url, 현재페이지 닫기여부)
 ● gfnOpenMenu    			: 신규 윈도우 화면을 생성하고 open 시킴 (input : dataset)
 ● gfnActiveFrame    		: 탭 활성화
 ● gfnWorkFormOnActivate	: ChildFrame ActivateEvent
 ● gfnWorkFormOnClose		: ChildFrame CloseEvent 
 ● gfnTabOnClose			: 탭 닫기 
 ● gfnRedrawTab			: 탭 버튼 재정렬 및 css 적용.
 ● gfnCallMain				: 메인화면 호출
 ● gfnGetCode				: 폼에 만들어 놓은 코드 데이터셋(빈 껍데기)에 코드값을 넣어준다. 
 ● gfnIsNull				: 데이터가 존재하는지 검사한다.
 ● gfnIsRole				: 권한정보를 String 으로 받아와 필요에 true/false 를 리턴한다.
 ● gfnTran					: 공통 트랜잭션 함수
 ● gfnTranCallBack			: 공통 Callback 함수
 ● gfnEncode				: 암호화를 한다.
 ● gfnDecode				: 복호화를 한다.
 ● gfnClearTmprData		: 화면간 변수값 전달을 위한 임시 변수값(Key/Value)을 초기화 하는 함수 
 ● gfnSetTmprData			: 화면간 변수값 전달을 위한 임시 변수값(Key/Value)을 설정하는 함수
 ● gfnGetTmprData			: 화면간 변수값 전달을 위한 임시 변수값(Key/Value)을 가져오는 함수
 ● gfnSetObj				: OBJ 적용
 ● gfnConvertMsg			: validate할 때 정규식을 이용한 공통메시지 치환
 ● gfnAddValidScreen		: validate할 때 application.gdsValidScreen 행추가 
 ● gfnGetTextGrdLine		: validate할 때 그리드 명 + 행 텍스트 가져오기 ex) "(품목 그리드 2 Line) " 
 ● gfnGetObjNM				: validate할 때 컴포넌트의 명칭 가져오기
 ● gfnValidate				: validate할 때 공통 유효성 체크
 ● gfnInitKey				: Edit 컴포넌트에서 enter/focusout 동작시 value값이 기존과 다르면 파라미터로 받은 데이터셋의 컬럼의 값을 공백으로 준다. 
 ● gfnRemote				: 리모콘 생성
 ● gfnRemoteSubFormOnloaded	: 리모콘 폼이 만들어지면 폼의 fnSetBtn 함수를 호출한다.\
 ● gfnRemoteOndrag				: 리모콘 ondrag 이벤트
 ● gfnRemoteOndragmove			: 리모콘 ondragmove 이벤트 
 ● gfnHideRemote				: 리모콘 감추기
 ● gfnRemoteBtnRange			: 리모콘 버튼 정렬
 ● gfnDivFold					: 입력받은 div 순서대로 접기/펼치기 기능을 추가한다.
 ● gfnFoldOnlick				: 접기/펼치기 버튼 이벤트
 ● gfnSortDiv					: Div 를 arrParam에 담긴 순서대로 정렬한다.
 ● gfnGetLabel					: 레이블 Text 가져오기 
 ● gfnGetObjNM					: 컴포넌트의 명칭 가져오기
 ● gfnGetCompPath				: 컴포넌트 경로 가져오기
 ● gfnGetFormCompPath			: 컴포넌트 경로 가져오기 : divWork 있을 경우 제거 후 가져옴
*/

/**
  * @함수명	: gfnBtnRange
  * @input		: btn(정렬할 기준 버튼 오브젝트)
				  direction(btn으로 입력받은 버튼을 기준으로 L:왼쪽정렬, R:오른쪽정렬(default))
  * @desc		: 같은 scope에 위치한 버튼을 정렬한다.
  */
gfnBtnRange = function(oBtn, sDirection)
{
	var oDiv = oBtn.parent;
	var aBtns = new Array();	
	if(gfnIsNull(sDirection)) sDirection = "R";

	for(var i=0, x=oDiv.components.length; i<x; i++){
		var findBtn = oDiv.components[i];
		if(findBtn.visible && findBtn instanceof Button){
			aBtns.push(findBtn);
		}
	}
		
	//정렬
	for(var i=0; i<aBtns.length; i++){
		for(var j=1; j<aBtns.length; j++){
			if(aBtns[j-1].getOffsetLeft() > aBtns[j].getOffsetLeft()){
				var temp = aBtns[j-1];
				aBtns[j-1] = aBtns[j];
				aBtns[j] = temp;
			}
		}
	}
	
	if(sDirection == "R"){
		aBtns = aBtns.reverse();
	}
	
	for(var i=1, x=aBtns.length; i<x; i++){
		var coordinates = (aBtns[i-1].getOffsetLeft() - aBtns[i].getOffsetWidth() - 2 );
		aBtns[i].move(coordinates, aBtns[i-1].getOffsetTop());
	}
}

/**
  * @함수명	: gfnOpenMenuUrl
  * @input		: linkUrl(이동할 메뉴 url)
				  altClose(파라미터가 넘어오면 현재페이지를 닫는다.)
  * @desc		: 신규 윈도우 화면을 생성하고 open 시킴
  */
gfnOpenMenuUrl = function(linkUrl, altClose)
{
	if(application.gdsOpenMenu.getRowCount() >= 10){
		gfnAlert("EPRO_LABEL_00904");
		return;
	}
	
	var pgmId = "";
	var menuNm = "";
	
	var nRow = application.gdsMenu.findRowAs("LINK_URL", linkUrl);
	if(nRow > -1){
		pgmId = application.gdsMenu.getColumn(nRow, "PGM_ID");
		menuNm = application.gdsMenu.getColumn(nRow, "MENU_NM");		
	}else{
		gfnAlert("메뉴가 등록되어있지 않습니다.");
		return;
	}
	
	if(!gfnIsNull(altClose)){
		gfnTabOnClose(application.gdsOpenMenu.getColumn(application.gdsOpenMenu.rowposition, "OPEN_ID"));
	}
	
	var ds = new Dataset;
	ds.addColumn( "LINK_URL", "string" );
	ds.addColumn( "PGM_ID", "string" );
	ds.addColumn( "MENU_NM", "string" );
	ds.addColumn( "PRE_PGM_ID", "string" );
	
	var nRow = ds.addRow();
	ds.setColumn(nRow, "LINK_URL", linkUrl);
	ds.setColumn(nRow, "PGM_ID", pgmId);
	ds.setColumn(nRow, "MENU_NM", menuNm);
	ds.setColumn(nRow, "PRE_PGM_ID", application.gdsOpenMenu.getColumn(application.gdsOpenMenu.rowposition, "PGM_ID"));

	gfnOpenMenu(ds);
}

/**
  * @함수명	: gfnOpenMenu
  * @input		: dataset(이동할 메뉴정보가 담긴 데이터셋)
  * @desc		: 신규 윈도우 화면을 생성하고 open 시킴
  */
gfnOpenMenu = function(dataset)
{
	if(gfnIsNull(dataset.getColumn(0, "LINK_URL"))) return;
	
	var pgmId = dataset.getColumn(0, "PGM_ID");
	var openId = (application.GV_ALT_USE_OVERLAP_TAB) ? pgmId + "_" + gfnMakeTempKey() : pgmId ;
	
	var nRow = application.gdsOpenMenu.findRow("OPEN_ID", openId);
	if(nRow > -1){
		gfnActiveFrame(openId, true);
	}else{
		var strTitle = dataset.getColumn(0, "MENU_NM");
		
		var addRow = application.gdsOpenMenu.addRow();
		application.gdsOpenMenu.setColumn(addRow, "CHECKED", 0);
		application.gdsOpenMenu.setColumn(addRow, "OPEN_ID", openId);
		application.gdsOpenMenu.setColumn(addRow, "PGM_ID", pgmId);
		application.gdsOpenMenu.setColumn(addRow, "MENU_NM", strTitle);
		application.gdsOpenMenu.setColumn(addRow, "LINK_URL", dataset.getColumn(0, "LINK_URL"));
		
		var newWin = new ChildFrame;
		newWin.init(openId, "absolute", 0, 0, application.gv_workFrameSet.getOffsetWidth() - 0, application.gv_workFrameSet.getOffsetHeight() - 0);		
		newWin.set_formurl("frame::workFrame.xfdl");		
		newWin.set_dragmovetype("all");
		newWin.set_showtitlebar(false);
		newWin.set_resizable(true);
		newWin.set_openstatus("maximize");
		newWin.set_titletext(strTitle);
		
		application.gv_workFrameSet.removeChild(openId);		
		application.gv_workFrameSet.addChild(openId, newWin);					
		
		newWin.arguments = [];
		newWin.arguments["openId"] = openId;		
		newWin.arguments["pgmId"] = dataset.getColumn(0, "PGM_ID");
		newWin.arguments["linkUrl"] = dataset.getColumn(0, "LINK_URL");
		newWin.arguments["prePgmId"] = dataset.getColumn(0, "PRE_PGM_ID");
		
		newWin.openId = openId;
		
		newWin.show();		
		
		newWin.addEventHandler("onclose", gfnWorkFormOnClose, this);
		newWin.addEventHandler("onactivate", gfnWorkFormOnActivate, this);

		/*탭추가*/
		application.gv_tabFrame.form.fnAddTab(openId, strTitle);
		
		application.gv_mainForm.set_formurl("");
		application.gv_vFrameSet0.set_separatesize("30,*,0");
	}
}

/**
  * @함수명	: gfnActiveFrame
  * @input		: openId {String} OPEN_ID
				  bReload {boolean} true:reload, default:false
				  aArgs {String} arguments
  * @desc		: 탭 활성화
  */
gfnActiveFrame = function (openId, bReload, aArgs)
{
	var framesInfo = application.gv_workFrameSet.frames;

	if(framesInfo[openId]){
		framesInfo[openId].arguments["prePgmId"] = application.gdsOpenMenu.getColumn(application.gdsOpenMenu.rowposition, "PGM_ID");	
	
		var nRow = application.gdsOpenMenu.findRow( "OPEN_ID", openId );
		application.gdsOpenMenu.set_rowposition(nRow);		
		framesInfo[openId].form.setFocus();
		gfnRedrawTab(openId);
		
		if(bReload){
			application.gv_vFrameSet0.set_separatesize("30,*,0");
			framesInfo[openId].form.reload();
		}
		
		if(!gfnIsNull(application.gv_mainForm.formurl)){
			application.gv_mainForm.set_formurl("");
			application.gv_vFrameSet0.set_separatesize("30,*,0");
		}
	}
}

/**
  * @함수명	: gfnWorkFormOnActivate
  * @input    	: obj:ChildFrame(프레임 오브젝트), e:nexacro.ActivateEventInfo(이벤트변수)
  * @desc     	: ChildFrame ActivateEvent
  */
gfnWorkFormOnActivate = function(obj, e)
{	
	var nRow = application.gdsOpenMenu.findRow( "OPEN_ID", obj.openId );
	application.gdsOpenMenu.set_rowposition(nRow);

	//workFrame의 divWork 영역이 아니면 실행안함. ex)팝업
	if(e.fromobject.name != "divWork") return;
	
	var openId = obj.openId;
	gfnActiveFrame(openId);
}

/**
  * @함수명	: gfnWorkFormOnClose
  * @input    	: obj:ChildFrame(프레임 오브젝트), e:nexacro.CloseEventInfo(이벤트변수)
  * @desc     	: ChildFrame CloseEvent
  */
gfnWorkFormOnClose = function(obj, e)
{
	//workFrame의 divWork 영역이 아니면 실행안함. ex)팝업
	if(e.fromobject.name != "divWork") return;
	
	var openId = obj.openId;
	gfnTabOnClose(openId);
}

/**
  * @함수명	: gfnTabOnClose
  * @input    	: openId(OPEN_ID _ null이면 모두 닫는다.)
  * @desc     	: 탭 닫기
  */
gfnTabOnClose = function(openId, temp)
{ 
	if(temp === true){
		for(var i=application.gv_tabFrame.form.divTab.components.length-1; i>=0; i--){
			var tabId = application.gv_tabFrame.form.divTab.components[i].id;			
			if(tabId.indexOf(openId) > -1) continue;			
			application.gv_tabFrame.form.divTab.components[i].destroy();
		}
		
		application.gdsOpenMenu.set_enableevent(false);
		for(var i=application.gdsOpenMenu.getRowCount()-1; i>=0; i--){
			if(application.gdsOpenMenu.getColumn(i, "OPEN_ID") == openId) continue;
			application.gdsOpenMenu.deleteRow(i);
		}
		application.gdsOpenMenu.set_enableevent(true);
	}
	else if(openId == null){
		
		for(var i=application.gv_tabFrame.form.divTab.components.length-1; i>=0; i--){
			application.gv_tabFrame.form.divTab.components[i].destroy();
		}		
		
		application.gdsOpenMenu.deleteAll();		
		gfnCallMain();
	}else{
		var nRow = application.gdsOpenMenu.findRow("OPEN_ID", openId);
		if(nRow > -1){	
			application.gdsOpenMenu.deleteRow(nRow);
			if(application.gdsOpenMenu.getRowCount() < 1){
				gfnCallMain();
			}
			
			var framesInfo = application.gv_workFrameSet.frames;		
			framesInfo[openId].destroy();	

			var tabX = application.gv_tabFrame.form.divTab.components["TAB_" + openId];
			if(tabX){
				tabX.destroy();
			}
			
			var closeX = application.gv_tabFrame.form.divTab.components["CLOSE_" + openId];
			if(closeX){
				closeX.destroy();
			}			
		}
	}
	
	//로그아웃 할 때는 divTab이 없다.
	if(application.gv_tabFrame.form.divTab){
		application.gv_tabFrame.form.divTab.resetScroll();
		var openId = application.gdsOpenMenu.getColumn(application.gdsOpenMenu.rowposition, "OPEN_ID");	
		gfnRedrawTab(openId);
	}	
}

/**
  * @함수명	: gfnRedrawTab
  * @input    	: openId {String} openId 넘겨주면 해당 openId 탭버튼만 활성화 css 적용.
				  inactiveAll {boolean} 모두 비활성화 css 적용
  * @desc     	: 탭 버튼 재정렬 및 css 적용.
  */
gfnRedrawTab = function(openId, inactiveAll)
{
	var right = 0;
	var tabComp = application.gv_tabFrame.form.divTab.components;
	
	for(var i=0, x=tabComp.length; i<x; i++){		
		if(i>0){
			right = tabComp[i-1].getOffsetRight();			
		}
		
		tabComp[i].setOffsetLeft(right);
		
		var css = "";		
		if(tabComp[i].id.indexOf(openId) > -1){
			if(tabComp[i].id.indexOf("TAB_") > -1){
				css = "btn_MDI_TabS";
			}
			if(tabComp[i].id.indexOf("CLOSE_") > -1){
				css = "btn_MDI_TabCloseS";
			}
		}else{
			if(tabComp[i].id.indexOf("TAB_") > -1){
				css = "btn_MDI_TabN";
			}
			if(tabComp[i].id.indexOf("CLOSE_") > -1){
				css = "btn_MDI_TabCloseN";
			}
		}
		
		tabComp[i].set_cssclass(css);
	}
}

/**
  * @함수명	: gfnCallMain
  * @desc     	: 메인화면 호출
  */
gfnCallMain = function()
{
	application.gv_mainForm.set_formurl(application.gv_mainFormUrl);
	application.gv_vFrameSet0.set_separatesize("30,0,*");
}

/**
  * @함수명	: gfnGetCode
  * @input    	: objForm(폼 오브젝트)
				  arrparam(필터링할 조건)
  * @desc     	: 폼에 만들어 놓은 코드 데이터셋(빈 껍데기)에 코드값을 넣어준다.
  */
gfnGetCode = function(objForm, arrparam)
{
	application.gdsCommCd.set_enableevent(false);	

	for(var i=0, x=arrparam.length; i<x; i++){
		var sCode = gfnIsNull(arrparam[i].code) ? "" : arrparam[i].code;
		if(sCode == "") return;
		
		var sDsName = "dsCd" + sCode;
		var fromCodeDs = objForm.lookup(sDsName);		
		if(gfnIsNull(fromCodeDs)){
			trace("form에 코드용 데이터셋이 없습니다. : " + sDsName);
			continue;
		}
				
		var sSelectType = gfnIsNull(arrparam[i].sSelectType) ? "" : arrparam[i].sSelectType;		
		var sFiltered = gfnIsNull(arrparam[i].sFiltered) ? "" : arrparam[i].sFiltered;
		var sFilter = "CD != '00' && CD_GRP == '"+sCode.substr(0,2)+"' && CD_CLS == '"+sCode.substr(2)+"'";

		if(!gfnIsNull(sFiltered)){
			var gubun = sFiltered.split(":")[0];
				
			if(gubun.length != 1){
				gubun = "D";
			}else{
				sFiltered = sFiltered.split(":")[1];
			}
			
			var filterArr = sFiltered.split(",");
 			for(var j=0, y=filterArr.length; j<y; j++){
				if(gubun == "D"){
					sFilter += " && CD != '"+filterArr[j]+"'";	
				}else if(gubun=="S"){
					if(j==0){
						sFilter += " && (";
					}else{
						sFilter += " || ";
					}
					sFilter += " CD == '"+filterArr[j]+"'";
					if(j==filterArr.length-1){
						sFilter += ")";
					}
				}
 			}
		}

		application.gdsCommCd.filter(sFilter);
		fromCodeDs.copyData(application.gdsCommCd, true);
		application.gdsCommCd.filter("");

		if(sSelectType == "A"){
			fromCodeDs.insertRow(0);
			fromCodeDs.setColumn(0, "CD_ID", "");			
			fromCodeDs.setColumn(0, "CD_NM_LO", application.gdsLabel.getColumn(application.gdsLabel.rowposition, "EPRO_LABEL_00786"));
			
		}else if(sSelectType == "S"){
			fromCodeDs.insertRow(0);
			fromCodeDs.setColumn(0, "CD_ID", "");
			fromCodeDs.setColumn(0, "CD_NM_LO", application.gdsLabel.getColumn(application.gdsLabel.rowposition, "EPRO_LABEL_00785"));
		}
	}
		
	application.gdsCommCd.set_enableevent(true);
}

/**
  * @함수명	: gfnIsNull
  * @return		: {boolean} true:데이터없음, false:데이터있음
  * @desc     	: 데이터가 존재하는지 검사한다.
  */
gfnIsNull = function()
{
	for(var i=0, x=arguments.length; i<x; i++){
		if(arguments[i] == "undefined") return true;
		if(arguments[i] == undefined) return true;
		if(arguments[i] == null) return true;
		if(arguments[i] == "null") return true;
		if(nexacro.isNumeric(arguments[i]) && isNaN(arguments[i])) return true;
		if(arguments[i].length == 0) return true;
	}    

	return false;
}

/**
  * @함수명	: gfnIsRole
  * @return		: {boolean} true / false
  * @desc     	: 권한정보를 String 으로 받아와 필요에 true/false 를 리턴한다.
  */
gfnIsRole = function(arg)
{
	var role = arg.split(",");
	var isChk = false;
	
 	for(var i = 0 ; i < application.gdsUserRole.rowcount ;i++){
 		for(var k = 0 ; k < role.length ;k++){
 		if(application.gdsUserRole.getColumn(i,"ROLE_ID") == role[k] ){
				isChk = true;
				break;
			}
 		}
 	}
 	return isChk
}

/**
  * @함수명	: gfnTran
  * @input    	: objForm {Form} 함수를 호출하는 form
				  svcID {String} Transaction 서비스ID(사용자지정)
				  URL {String} Transaction 요청 경로
				  inDatasets {String} 송신 Dataset(복수일 경우 " "으로 구분)
                  outDatasets {String} 수신 Dataset(복수일 경우 " "으로 구분)
                  callbackFunc {String} Callback 함수명(Default:fnTrCallBack())
                  oPaging {object} ds_paging:페이징 정보를 넣을 데이터셋, divPaging:페이징 div
                  argument {String} Dataset 외의 Transaction을 위한 인자값. a=b의 형태로 입력하고, 빈칸으로 구분
                  showProgress {boolean} 트랜잭션중 이미지 표시여부 - false시 표시안함. default:true(표시)
  * @desc     	: 공통 트랜잭션 함수
  */
gfnTran = function(objForm, svcID, URL, inDatasets, outDatasets, callbackFunc, oPaging, argument, bAsync, showProgress)
{	
	if(!gfnIsNull(oPaging)){
		for(var i=0, x=oPaging.length; i<x; i++){
			if(gfnIsNull(oPaging[i].inDs)){
				gfnAlert("EPRO_LABEL_00906");
				return;
			}
			
			if(gfnIsNull(oPaging[i].grid)){
				gfnAlert("EPRO_LABEL_00907");
				return;
			}
			
			if(gfnIsNull(oPaging[i].divPaging)){
				gfnAlert("EPRO_LABEL_00908");
				return;
			}

			/*
				페이징없이 전체건수만 보여주기 위해 그리드 userProperty에 설정해놓는게 f_totalCnt:Y 속성인데
				페이징을 사용하면서도 f_totalCnt:Y 설정해놓은 그리드가 있다.				
				그래서 페이징일 때는 전체건수 세팅하기 위한 f_totalCnt 값을 변경한다.
			*/
			oPaging[i].grid.f_totalCnt='N';
			
			oPaging[i].divPaging.fnSetPaingArgument(objForm, svcID, URL, inDatasets, outDatasets, callbackFunc, oPaging[i], argument, showProgress);			
			
			/*
				페이징 [페이지번호 클릭 or 이전,다음,10페이지 이전, 10페이지 다음] 으로 조회하는게 아니면
				첫번째 페이지를 검색한다.
			*/
			if(oPaging[i].grid.transactionType != "pagingTran"){				
				var nIndex = oPaging[i].inDs.addColumn("PAGE_STR_NO","Int");
				oPaging[i].inDs.addColumn("PAGE_END_NO","Int");					
				oPaging[i].inDs.setColumn(0,"PAGE_STR_NO","1");
				oPaging[i].inDs.setColumn(0,"PAGE_END_NO", oPaging[i].divPaging.cboMaxRowCnt.value);
				oPaging[i].divPaging.gfvCurrPageNo = 1;
			}else{
				argument = null;
				oPaging[i].grid.transactionType = "";
			}			
		}
	}

	if(gfnIsNull(callbackFunc)){
		callbackFunc = "fnTrCallBack";
	}

	if(!showProgress && !gfnIsNull(showProgress)){
		application.set_usewaitcursor(showProgress);
	}else{
		application.set_usewaitcursor(true);
	}
		
	if(gfnIsNull(argument)){
		argument = "";
	}
	
	if(gfnIsNull(bAsync)){
		bAsync = true;
	}
	
	/*
	//조회 후 onrowposchanged 이벤트 발생시키도록 함.
// 		var arrOuts = outDatasets.split(" ");
// 		for(var i=0 ; i<arrOuts.length ; i++){
// 			var sFormDs = arrOuts[i].split("=");
// 			try
// 			{
// 				if(objects[sFormDs[0]])
// 				{
// 					objects[sFormDs[0]].set_enableevent(false);
// 					objects[sFormDs[0]].set_rowposition(-1);
// 					objects[sFormDs[0]].set_enableevent(true);
// 				}		
// 			}
// 			catch(e)
// 			{
// 				trace(e.message);
// 			}
// 		}
	*/
	var strSvcID = svcID + ":" + callbackFunc;		
			
	var strURL = "svcurl::" + URL;
	if(!gfnIsNull(objForm._ds_mainFiles)){
		inDatasets = inDatasets + " gdsUserInfo=gdsUserInfo in_dsFile=_ds_mainFiles:U";
		outDatasets = outDatasets+" _ds_mainFiles=ds_files";
	}else{
		inDatasets = inDatasets + " gdsUserInfo=gdsUserInfo";
	}
	
	var strInDatasets = inDatasets ;
	var strOutDatasets = outDatasets;
	var strArgument = argument;
	var strCallbackFunc = function(strSvcID, errorCode, errorMsg){
								gfnTranCallBack(objForm, strSvcID, errorCode, errorMsg, oPaging)
						  };

	objForm.transaction(strSvcID, strURL, strInDatasets, strOutDatasets, strArgument, strCallbackFunc, bAsync, 2);
}

/**
  * @함수명	: gfnTranCallBack
  * @input    	: objForm {Form} 함수를 호출하는 form
				  svcID {String} Transaction 서비스ID + : + Callback 함수명
                  errorCode {String} 에러코드
                  errorMsg {String} 에러 메시지
                  oPaging {object} ds_paging:페이징 정보를 넣을 데이터셋, divPaging:페이징 div
  * @desc     	: 공통 Callback 함수
  */
gfnTranCallBack = function (objForm, strSvcID, errorCode, errorMsg, oPaging, strOutDatasets)
{
	var arrSvcID = strSvcID.split(":");
	
	if(errorCode < 0){
	
		if(errorCode == -1){
			gfnAlert(errorMsg);
		}else if(errorCode == -1000){
			gfnAlert("서비스가 등록되어있지 않습니다.");
			objForm.setWaitCursor(false);
			return;
		}else if(errorCode == -2000){
			gfnAlert("권한이 없습니다.");
			objForm.setWaitCursor(false);
			return;
		}else if(errorCode == -3000){
			gfnAlert("세션이 종료되었습니다.");
			objForm.setWaitCursor(false);
			
			if(system.navigatorname == "nexacro")
			{
				application.exit();
			}else{
				application.gdsUserInfo.clearData();
				application.gdsMenu.clear();
				application.gdsUserRole.clear();
				application.gdsOpenMenu.clearData();
				
				application.gv_topFrame.set_formurl("");
				application.gv_bottomFrame.set_formurl("");
				application.gv_leftFrame.set_formurl("");
				application.gv_tabFrame.set_formurl("");
				application.gv_mainForm.set_formurl("");
				application.gv_vFrameSet.set_separatesize("0,0,0,*");
				
				var framesInfo = application.gv_workFrameSet.frames;
				for(var i=framesInfo.length-1; i>=0; i--){		
					framesInfo[i].destroy();
				}
			}
			return;
		}
	}
			
// 			//위변조방지
// 			if(errorCode == -100){
// 				//열려있는 모든 팝업 닫기.
// 				gfn_allPopClose();
// 					
// 				gfnAlert(errorMsg);
// 				application.gv_mdiTabFrame.form.gfnTabOnClose(application.gdsOpenMenu.getColumn(application.gdsOpenMenu.rowposition, "WIN_ID"));
// 			
// 			// errorCode:-99999일 때 로그인화면으로 돌아가기
// 			}else if (errorCode == -99999){
// 								
// 				//로그인 화면이 아니면
// 				if(application.gv_vFrameSet.separatesize != "0,0,0,*"){
// 					application.gv_cntSessionMsg++;
// 					
// 					if(application.gv_cntSessionMsg < 2){
// 						gfnAlert(errorMsg);
// 					
// 						//로그인 화면으로 이동
// 						fn_goLoginForm();	
// 					}
// 				}
// 			
// 			// errorCode:-88888일 때 열려있는 application 종료.
// 			}else if(errorCode == -88888){
// 				application.gv_cntSessionMsg++;
// 				if(application.gv_cntSessionMsg < 2){
// 					gfnAlert(errorMsg);
// 					gfnSetTmprData("CONFIRM_PASS", "Y");		
// 							
// 					if(system.navigatorname == "nexacro"){ 
// 						application.exit();
// 					}else{ 
// 						//로그인 화면으로 이동
// 						fn_goLoginForm();
// 					}
// 				}		
// 			}else{
// 			}
// 		}else{
// 			if(arrSvcID.length > 2 && !gfnIsNull(arrSvcID[2])){
// 				gfnAlert(arrSvcID[2]);
// 			}

	
	
	if(!gfnIsNull(oPaging)){
		for(var i=0, x=oPaging.length; i<x; i++){
			oPaging[i].divPaging.fnCallPaging(oPaging[i].grid.getBindDataset());
		}
	}
	
	var callBack = objForm[arrSvcID[1]];
	if(callBack){
		callBack.call(objForm, arrSvcID[0], errorCode, errorMsg);
	}else{
		eval(arrSvcID[1]+"(objForm, arrSvcID[0], errorCode, errorMsg)");
	}
		
	objForm = null;
}

/**
  * @함수명	: gfnEncode
  * @input    	: str (암호화 할 값)
  * @return    	: str (암호화 된 값)
  * @desc     	: 암호화를 한다.
  */
gfnEncode = function(str)
{
	key = CryptoJS.enc.Utf8.parse(application.gv_secretKey);
	iv  = CryptoJS.enc.Utf8.parse(application.gv_secretKey);
 
	var encrypted =  CryptoJS.AES.encrypt(str, key, { iv: iv,mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.ZeroPadding});
	
	return encrypted;
}

/**
  * @함수명	: gfnDecode
  * @input    	: str (복호화 할 값)
  * @return    	: str (복호화 된 값)
  * @desc     	: 복호화를 한다.
  */
gfnDecode = function(str)
{
	key = CryptoJS.enc.Utf8.parse(application.gv_secretKey);
	iv  = CryptoJS.enc.Utf8.parse(application.gv_secretKey);
	
	var decrypted = CryptoJS.AES.decrypt(str,key,{iv:iv,padding:CryptoJS.pad.ZeroPadding});
	decrypted = decrypted.toString(CryptoJS.enc.Utf8);    
	
	return decrypted;
}

/**
  * @함수명	: gfnClearTmprData
  * @desc     	: 화면간 변수값 전달을 위한 임시 변수값(Key/Value)을 초기화 하는 함수
  */
gfnClearTmprData = function()
{
	application.gdsTmprData.clearData();
}

/**
  * @함수명	: gfnSetTmprData
  * @input    	: sKey(key)
				  sValue(value)
  * @desc     	: 화면간 변수값 전달을 위한 임시 변수값(Key/Value)을 설정하는 함수
  */
gfnSetTmprData = function(sKey, sValue)
{
	if(gfnIsNull(sKey)){
		gfnAlert("EPRO_LABEL_00911");
		return;
	}
	
	var nRow = application.gdsTmprData.findRow("key", sKey);	
	if(nRow == -1){
		nRow = application.gdsTmprData.addRow();
	}
	
	application.gdsTmprData.setColumn(nRow, "key", 	sKey);
	application.gdsTmprData.setColumn(nRow, "value", 	sValue);
}

/**
  * @함수명	: gfnGetTmprData
  * @input    	: sKey(key)
  * @desc     	: 화면간 변수값 전달을 위한 임시 변수값(Key/Value)을 가져오는 함수
  */
gfnGetTmprData = function(sKey)
{
	if(gfnIsNull(sKey)) {
		gfnAlert("EPRO_LABEL_00912");
		return;
	}
	
	var nRow = application.gdsTmprData.findRow("key", sKey);
	
	if(nRow == -1) {
		return "";
	}else if(nRow > -1) {	
		var val = application.gdsTmprData.getColumn(nRow, "value");		
		if(!gfnIsNull(val)){
			val = val.toUpperCase();
			
			if(val == "TRUE"){
				return true;
			}else if(val == "FALSE"){
				return false;
			}
		}
		/*
		if(nexacro.isNumeric(val)){
			return nexacro.toNumber(val, NaN)
		}
		*/
		
	}
	
	return application.gdsTmprData.getColumn(nRow, "value");
}

/**
  * @함수명	: gfnSetObj
  * @input    	: mode
  * @desc     	: OBJ적용
  */
gfnSetObj = function(mode)
{
	if(gfnIsNull(mode)){
		gfnAlert("EPRO_LABEL_00913");
		return;
	}
	
	var openId = application.gdsOpenMenu.getColumn(application.gdsOpenMenu.rowposition, "OPEN_ID");
	
	var framesInfo = application.gv_workFrameSet.frames;
	if(framesInfo[openId]){
		framesInfo[openId].form.fnSetObj(mode);
	}	
}

/**
  * @함수명	: gfnConvertMsg
  * @input    	: msg {form} 대상 폼
				  values {String} curMode
  * @desc     	: validate할 때 정규식을 이용한 공통메시지 치환
  */
gfnConvertMsg = function(msg, values)
{
    return msg.replace(/\{(\d+)\}/g, function() {
        return values[arguments[1]];
    });
};

/**
  * @함수명	: gfnAddValidScreen
  * @input    	: openId {String}
				  cMsg {String} 출력 메시지
				  sType {String} 출력 메시지 타입
				  isEssential {String} 필수입력여부
				  sErr {String} 에러인지 경고인지 구분자 _ 경고이미지 출력용
  * @desc     	: application.gdsValidScreen 행추가
  */ 	
gfnAddValidScreen = function(openId, cMsg, sType, isEssential, sErr)
{
	var nRow = application.gdsValidScreen.addRow();
	application.gdsValidScreen.setColumn(nRow,"OPEN_ID", openId);
 	application.gdsValidScreen.setColumn(nRow,"MSG", cMsg); 		// ex) xxx입니다.
 	application.gdsValidScreen.setColumn(nRow,"VALID_TYPE", sType); // ex) 필수요소누락
 	application.gdsValidScreen.setColumn(nRow,"IS_ESSENTIAL", gfnIsNull(isEssential) ? "" : "Y"); // ex) 필수입력여부
 	application.gdsValidScreen.setColumn(nRow,"ERR_LVL", gfnIsNull(sErr) ? (gfnIsNull(isEssential) ? "W" : "E") : sErr);  // 경고 "W" || 에러"E" _ 경고 이미지 관련
}

/**
  * @함수명	: gfnGetTextGrdLine
  * @input    	: objGrid:Grid(그리드 오브젝트), nIdx(순번)
  * @desc     	: 그리드 명 + 행 텍스트 가져오기 ex) "(품목 그리드 2 Line) "
  */
gfnGetTextGrdLine = function(objGrid, nIdx)
{
	return "(" + gfnGetObjNM(objGrid) + " " + (nIdx+1) + " Line) ";
}

/**
  * @함수명	: gfnGetObjNM
  * @input    	: obj(컴포넌트 오브젝트)
  * @return    	: 레이블 Text
  * @desc     	: 컴포넌트의 명칭 가져오기
  */
gfnGetObjNM = function(obj)
{
	if(gfnIsNull(obj)) return "";		
	if(!gfnIsNull(obj.objNm)) return obj.objNm;
	if(!gfnIsNull(obj.text)) return obj.text;
	
	return "";
}

/**
  * @함수명	: gfnValidate
  * @input    	: objForm(폼 오브젝트)
				  bEssential(필수체크검사:true, 필수체크검사 안함:false)
				  arrUserValid(사용자정의 유효성체크)
  * @desc     	: 공통 유효성 체크
  */
gfnValidate = function(objForm, bEssential, arrUserValid)
{
	application.gdsValidScreen.deleteAll();
	
	var openId = application.gdsOpenMenu.getColumn(application.gdsOpenMenu.rowposition, "OPEN_ID");	
	var framesInfo = application.gv_workFrameSet.frames;
	var dsObjBindEs = framesInfo[openId].form.dsObjBindEs;
	
	
	// 1. 컴포넌트 체크 시작
	dsObjBindEs.set_enableevent(false);	
	bEssential = bEssential == true ? true : false;	

	//true면 gfnAddValidScreen 실행한다.
	var bAddValid = false;		

	for(var i=0, x=dsObjBindEs.rowcount; i<x; i++){	

		
		var path = dsObjBindEs.getColumn(i, "PATH");

		if(path.indexOf("btnCom") > -1) continue;
		
		var comp = eval("framesInfo[openId].form.divWork" + "." + path);

		if(bEssential){
			//공통 컴포넌트 필수체크
			if(comp.url && comp.url.indexOf("CCOMP::") > -1){

				//CCOMP::CompCalFromTo.xfdl
				if(comp.url.indexOf("CCOMP::CompCalFromTo.xfdl") > -1){					
					comp.cldFrom.set_cssclass(gfnGetEsCss(comp.cldFrom.value));
					comp.cldTo.set_cssclass(gfnGetEsCss(comp.cldTo.value));					
					
					if(gfnIsNull(comp.cldFrom.value) || gfnIsNull(comp.cldTo.value)){	
						bAddValid = true;
					}
				}
				
				//CCOMP::CompSrcTypeOneLvl.xfdl
				if(comp.url.indexOf("CCOMP::CompSrcTypeOneLvl.xfdl") > -1){					
					comp.cboLvl1.set_cssclass(gfnGetEsCss(comp.cboLvl1.value));
					
					if(gfnIsNull(comp.cboLvl1.value)){
						bAddValid = true;
					}
				}
				
			}else if(gfnIsNull(comp.value)&&(dsObjBindEs.getColumn(i,"ESSENTIAL_"+framesInfo[openId].form.divDevelop.cboObj.value)==1)){ // 1-1. 필수체크		
				bAddValid = true;
			}
			
			if(bAddValid){
				comp.set_cssclass(gfnGetEsCss(comp.value));
			}
		}

		if(bAddValid){

			var sMsg = gfnMultiLabel("EPRO_LABEL_00814"); // 치환될 부분은 {0~N}으로 작성하며	치환값은 배열로 넘김
			var sText = dsObjBindEs.getColumn(i, "TEXT");
			sText = "<fc v='#002266'><b v='true'>" + sText + "</b></fc>";
			
			var	cMsg =  gfnConvertMsg(sMsg, [sText]);  //msg, value
			var sType = gfnMultiLabel("EPRO_LABEL_00813");
			gfnAddValidScreen(openId, cMsg, sType, "Y", "E");
			bAddValid = false;
		}		
		
		// 1-2. 최대길이			
		if(dsObjBindEs.getColumn(i, "STR_MAX_LEN") > 0){

			if(!gfnIsNull(comp.value)){
				//ebhan , 한글을 3바이트로 먹어서 DB랑 맞춰주기 위해 euckr 로 변경했는데
				//혹시 익스에서  오류나면 다시 원복 해야될듯.
				if(gfnGetStrByte(comp.value,"euckr") > dsObjBindEs.getColumn(i, "STR_MAX_LEN")){
					var sMsg = gfnMultiLabel("EPRO_LABEL_00816");					
					var sText = dsObjBindEs.getColumn(i, "TEXT");
					sText = "<fc v='#002266'><b v='true'>" + sText + "</b></fc>";
					
					var cMsg = gfnConvertMsg(sMsg, [sText, Number(dsObjBindEs.getColumn(i, "STR_MAX_LEN")/2).toFixed(), Number(dsObjBindEs.getColumn(i, "STR_MAX_LEN")).toFixed()]);
					var sType = gfnMultiLabel("EPRO_LABEL_00815");					
					gfnAddValidScreen(openId, cMsg, sType, "N");
					comp.set_cssclass("essential");
				}else{
					comp.set_cssclass("");
				}
			}			
		}		
	}
	dsObjBindEs.set_enableevent(true);

	//사용자 유효성 체크
	if(arrUserValid){
		for(var i=0; i<arrUserValid.length; i++){
			var isEs = gfnIsNull(arrUserValid[i].agv_isEs) ? "" : arrUserValid[i].agv_isEs;
			gfnAddValidScreen(openId, arrUserValid[i].agv_msg, arrUserValid[i].agv_type, isEs);
		}
	}

	if(application.gdsValidScreen.rowcount > 0){
		var sArg = {};
		gfnModalPop(objForm, "CompValidPop", "CPOP::CompValidPop.xfdl", sArg, null, 600, 320);
		return false;
	}
	
	return true;
}

/**
  * @함수명	: gfnGetEsCss
  * @input    	: val{Dataset} 대상 데이터셋
  * @desc     	: 유효성검사 필수체크시 값이 없으면 필수 css를 리턴한다.
  */
gfnGetEsCss = function(val)
{
	return gfnIsNull(val) ? "essential" : "";
}

/**
  * @함수명	: gfnInitKey
  * @input    	: {Dataset} 대상 데이터셋
				  {ChangeEventInfo} Change 이벤트
				  {String} 공백을 줄 컬럼명
  * @desc     	: Edit 컴포넌트에서 enter/focusout 동작시 value값이 기존과 다르면 파라미터로 받은 데이터셋의 컬럼의 값을 공백으로 준다.
  */
gfnInitKey = function()
{
	var delColumn = new Array();
	
	var objDs = arguments[0];
	var e = arguments[1];			
	
	for(var i=2, x=arguments.length; i<x; i++){
		arguments[i] = ""+arguments[i];
		delColumn[delColumn.length] = arguments[i].toUpperCase();		
	}
	
	if(gfnIsNull(e.pretext)) return;
	if(nexacro.trim(e.pretext) != nexacro.trim(e.posttext)){
		for(var k in delColumn){
			objDs.setColumn(objDs.rowposition, delColumn[k], "");
		}
	}
}

/**
  * @함수명	: gfnRemote
  * @input    	: objForm(폼 오브젝트)
				  arrparam(버튼 만들 조건이 설정된 오브젝트)
  * @desc     	: 리모콘 버튼 추가
  */  
var remoteArrParam;		//리모트 파라미터 담는 변수
gfnRemote = function(objForm, arrparam, btnWidth)
{	
	//TODO 파라미터 objForm 사용안함.

	var openId = application.gdsOpenMenu.getColumn(application.gdsOpenMenu.rowposition, "OPEN_ID");	
	var framesInfo = application.gv_workFrameSet.frames;
	var remoteForm = framesInfo[openId].form;
	
	if(remoteForm){
		remoteArrParam = arrparam;
		var divName = openId + "_divRemote";
		if(remoteForm.components[divName]) remoteForm.components[divName].destroy();
		
		// Create Object
		var objDiv = new Div(divName, "absolute", null, 40, 0, 0, 10, null);

		// Add Object to Parent Form
		remoteForm.addChild(divName, objDiv);

		objDiv.set_url("CCOMP::CompRemote.xfdl");
		
		objDiv.set_scrollbars("none");
		objDiv.btnWidth = gfnIsNull(btnWidth) ? 120 : btnWidth;

		// Show Object  
		objDiv.show();
	}
	
 	remoteForm.addEventHandler("ondrag", gfnRemoteOndrag, this);
 	remoteForm.addEventHandler("ondragmove", gfnRemoteOndragmove, this);
}

/**
  * @함수명	: gfnRemoteSubFormOnloaded
  * @input    	: obj(폼 오브젝트)
  * @desc     	: 리모콘 폼이 만들어지면 폼의 fnSetBtn 함수를 호출한다.
  */
gfnRemoteSubFormOnloaded = function(obj)
{
	obj.fnSetBtn(remoteArrParam);
	remoteArrParam = null;
}

/**
  * @함수명	: gfnRemoteOndrag
  * @input    	: obj(폼 오브젝트)
				  e:nexacro.DragEventInfo(이벤트 변수)
  * @desc     	: 리모콘 ondrag 이벤트
  */
gfnRemoteOndrag = function(obj, e)
{
	var openId = application.gdsOpenMenu.getColumn(application.gdsOpenMenu.rowposition, "OPEN_ID");
	var divName = openId + "_divRemote";
	var objDiv = obj.lookup(divName);

	if(objDiv){
		var refObj = e.fromreferenceobject;	
		if(refObj.name==divName || refObj.name=="divTitle"){
			objDiv.xx = (objDiv.getOffsetLeft() - e.clientX);
			objDiv.yy = (objDiv.getOffsetTop() - e.clientY);
			return true;
		}
	}
}

/**
  * @함수명	: gfnRemoteOndragmove
  * @input    	: obj(폼 오브젝트)
				  e:nexacro.DragEventInfo(이벤트 변수)
  * @desc     	: 리모콘 ondragmove 이벤트
  */
gfnRemoteOndragmove = function(obj, e)
{
	var openId = application.gdsOpenMenu.getColumn(application.gdsOpenMenu.rowposition, "OPEN_ID");
	var divName = openId + "_divRemote";
	var objDiv = obj.lookup(divName);
	
	if(objDiv){
		objDiv.move(nexacro.toNumber(e.clientX) + nexacro.toNumber(objDiv.xx), e.clientY + objDiv.yy);
	}
}

/**
  * @함수명	: gfnHideRemote
  * @desc     	: 리모콘 감추기
  */
gfnHideRemote = function(objForm)
{
	var openId = application.gdsOpenMenu.getColumn(application.gdsOpenMenu.rowposition, "OPEN_ID");
	var divName = openId + "_divRemote";
	var objDiv = objForm.lookup(divName);
	
	if(!gfnIsNull(objDiv)){
		objDiv.set_visible(false);
	}	
}

/**
  * @함수명	: gfnRemoteBtnRange
  * @input    	: div(리모콘 div 오브젝트)
  * @desc     	: 리모콘 버튼 정렬
  */
gfnRemoteBtnRange = function(div)
{	
	div.set_visible(false);
	
	var aBtns = new Array();	

	for(var i=0, x=div.components.length; i<x; i++){
		var findBtn = div.components[i];
		if(findBtn.visible && findBtn instanceof Button){
			aBtns.push(findBtn);
		}
	}
	
	if(aBtns.length < 1 ){
		div.set_visible(false);
		return;
	}
	
	// 버튼 this.fvMaxColCnt * n 형태일때	
	var initTop = 30;
	var btnTop = initTop;
	var initLeft = 10;
	var btnLeft = initLeft;
	
	for(var i=0, x=aBtns.length; i<x; i++){
	
		//버튼 top, left 위치
		if(i%div.fvMaxColCnt==0){
			btnTop = initTop * (i/div.fvMaxColCnt + 1);
			btnLeft = initLeft;
		}else{			
			var prevBtn = aBtns[i-1];
			btnLeft = btnLeft + prevBtn.getOffsetWidth() + 5;
		}
		
		//버튼 move
		aBtns[i].setOffsetTop(btnTop);
		aBtns[i].setOffsetLeft(btnLeft);
		
		//리모콘 넓이 조절
		if(x < div.fvMaxColCnt){
			if(x-1 == i){
				div.setOffsetWidth(aBtns[i].getOffsetRight() + initLeft + 5);
			}
		}else{
			if(div.fvMaxColCnt-1 == i){
				div.setOffsetWidth(aBtns[i].getOffsetRight() + initLeft + 5);
			}
		}
		
		//리모콘 높이 조절
		if(x-1 == i){
			div.setOffsetHeight(aBtns[i].getOffsetBottom()+ 15);			
		}
	}
	
	div.fvWidth = div.getOffsetWidth();
	div.fvHeight = div.getOffsetHeight();
	div.fvRight = div.getOffsetRight();
	div.fvLeft = div.getOffsetLeft();
	
	div.set_visible(true);
}

/**
  * @함수명	: gfnDivFold
  * @input    	: {objForm} 	대상 form
				  {arrparam}	아규먼트
  * @desc     	: 입력받은 div 순서대로 접기/펼치기 기능을 추가한다.
  */  
gfnDivFold = function(objForm, arrParam)
{
	for(var i=0, x=arrParam.length; i<x; i++){
		arrParam[i].ttl.arrParam = arrParam;
		arrParam[i].ttl.arrParamRow = i;
		arrParam[i].ttl.style.set_cursor("hand");
		arrParam[i].ttl.addEventHandler("onclick", gfnFoldOnlick, this);
		 
		if(arrParam[i].initFold){
			gfnFoldOnlick(arrParam[i].ttl);
		}
	}
	
	
}

/**
  * @함수명	: gfnFoldOnlick
  * @input    	: obj {Button} 접기/펼치기 버튼
				  e {ClickEventInfo} true시 클릭이벤트 실행
  * @desc     	: 접기/펼치기 버튼 이벤트
  */  
gfnFoldOnlick = function(obj, e)
{
	var arrParam = obj.arrParam;	
	var row = obj.arrParamRow;	
	var clickAction = false;

	if(gfnIsNull(e)){
		if(arrParam[row].initFold){
			
			//클릭이벤트 없이 initFold true로 설정되어 있으면 접기/펼치기.
			clickAction = true;
		}
	}else if(e.fromreferenceobject.name == arrParam[row].ttl.id){
		
		//클릭이벤트 발생시 접기/펼치기.
		clickAction = true;
	}
	
	if(clickAction){
		if(arrParam[row].body.visible){		
			arrParam[row].body.set_visible(false);		
		
			//접을 때 타이틀 div에 들어있는 버튼들을 안보여준다.
			if(arrParam[row].ttl.parent.id != "divWork"){
				for(var j in arrParam[row].ttl.components){
					//if(arrParam[row].ttl.id != arrParam[row].ttl.parent.components[j].id){					
						if(!gfnIsNull(arrParam[row].ttl.parent.components[j].id)){
							arrParam[row].ttl.parent.components[j].set_visible(false);
						}						
					//}
				}
			}			
		}else{
			arrParam[row].body.set_visible(true);
			
			//접을 때 타이틀 div에 들어있는 버튼들을 보여준다.
			if(arrParam[row].ttl.parent.id != "divWork"){
				for(var j in arrParam[row].ttl.parent.components){
					if(arrParam[row].ttl.id != arrParam[row].ttl.parent.components[j].id){
						if(!gfnIsNull(arrParam[row].ttl.parent.components[j].id)){
							//ebhan  obj 로 visible 꺼져있는 것들이 나와서 enable 인것들은 안나오게 수정
							//( obj 에서 안쓰는 버튼 은 visible ,enable  다 넣어야됨)
							if(arrParam[row].ttl.parent.components[j].enable == true){
								arrParam[row].ttl.parent.components[j].set_visible(true);
							}
						}
					}
				}
			}
		}
	}
	if(obj.cssclass == "btn_Fold_Open") //펼치기 실행
	{
		obj.set_cssclass("btn_Fold_Close");
	}
	else if(obj.cssclass == "btn_Fold_Close") //접기 실행
	{	
		obj.set_cssclass("btn_Fold_Open");
	}
	
	gfnSortDiv(arrParam);
}

/**
  * @함수명	: gfnSortDiv
  * @input    	: arrParam(접기/펼치기 div 정보가 담긴 오브젝트)
  * @desc     	: Div 를 arrParam에 담긴 순서대로 정렬한다.
  */  
gfnSortDiv = function(arrParam)
{
	/*Form내에 stepcontrol 속성이 존재하면 컴포넌트의 positionstep으로 정렬*/
// 	for(var i=0; i<rtnArrDiv.length; i++){
// 		for(var j=i+1; j<rtnArrDiv.length; j++){	
// 			if(!gfnIsNull(rtnArrDiv[j].positionstep) && !gfnIsNull(rtnArrDiv[i].positionstep)){
// 				if(rtnArrDiv[j].positionstep > rtnArrDiv[i].positionstep){
// 					var temp;
// 					temp = rtnArrDiv[j];
// 					rtnArrDiv[j] = rtnArrDiv[i];
// 					rtnArrDiv[i] = temp;
// 				}
// 			}
// 		}
// 	}

	for(var i=0, x=arrParam.length; i<x; i++){
		if(arrParam[i].ttl.parent.id == "divWork" || arrParam[i].ttl.parent.id == "divPopBody"){
			if(arrParam[i].body.visible){
				arrParam[i].ttl.setOffsetTop(arrParam[i].body.getOffsetBottom());				
			}else{
				arrParam[i].ttl.setOffsetTop(arrParam[i].body.getOffsetTop());
			}
			
			var objForm = arrParam[i].body.parent;
			for(var j in objForm.components){
				if(!(objForm.components[j] instanceof Div)) continue;
				if(objForm.components[j].getOffsetBottom() > arrParam[i].body.getOffsetBottom()){
					objForm.components[j].setOffsetTop(arrParam[i].ttl.getOffsetBottom());
				}
			}
				
		}else{			
			if(gfnIsNull(arrParam[i+1])) break;
		
			if(arrParam[i].body.visible){		
				arrParam[i+1].ttl.parent.setOffsetTop(arrParam[i].body.getOffsetBottom() + 20);
			}else{
				arrParam[i+1].ttl.parent.setOffsetTop(arrParam[i].ttl.parent.getOffsetBottom() + 20);
			}
			arrParam[i+1].body.setOffsetTop(arrParam[i+1].ttl.parent.getOffsetBottom()+5);
		}		
	}
	
	var openId = application.gdsOpenMenu.getColumn(application.gdsOpenMenu.rowposition, "OPEN_ID");
	var framesInfo = application.gv_workFrameSet.frames
	framesInfo[openId].form.divWork.resetScroll();
}


/**
  * @함수명	: gfnDivHeightSort
  * @input    	: target {form} 검색기준 form
  * @desc     	: 입력받은 div 순서대로 접기/펼치기 기능을 추가한다.
  */  
gfnDivHeightSort = function(target)
{
	var scope;
	
	if(!target){
		scope = this.components;
	}else{
		scope = target.components;
	}

	var arrDivs = [];

	//Div 모두 가져옴
	for(var i=0; i<scope.length; i++){
		if(scope[i].valueOf() == "[object Div]"){
			arrDivs.push(scope[i]);
		}
	}
	
	//Form내에 stepcontrol 속성이 존재하면 컴포넌트의 positionstep으로 정렬	
	for(var i=0; i<arrDivs.length; i++){
		for(var j=i+1; j<arrDivs.length; j++){	
			if(!gfnIsNull(arrDivs[j].positionstep) && !gfnIsNull(arrDivs[i].positionstep)){
				if(arrDivs[j].positionstep > arrDivs[i].positionstep){
					var temp = arrDivs[j];
					arrDivs[j] = arrDivs[i];
					arrDivs[i] = temp;
				}
			}
		}
	}
	
	//Top 순서대로 정렬
 	for(var i=0; i<arrDivs.length; i++){
		for(var j=i+1; j<arrDivs.length; j++){
			//Form내에 stepcontrol 속성이 존재하면 같은 positionstep 끼리 Top 순서대로 정렬한다.
			if(!gfnIsNull(arrDivs[j].positionstep) && !gfnIsNull(arrDivs[i].positionstep)){
				if(arrDivs[j].positionstep != arrDivs[i].positionstep){
					break;
				}	
			}
			
			if(arrDivs[j].getOffsetTop() < arrDivs[i].getOffsetTop()){
				var temp = arrDivs[j];
				arrDivs[j] = arrDivs[i];
				arrDivs[i] = temp;
			}
		}
	}

	//div 순서대로 정렬되었는지 확인용 trace	
//	for(var j=0; j<arrDivs.length; j++) 
//	{				
//		trace("stepindex :> " + arrDivs[j].positionstep + "         Div Id :> " + arrDivs[j].id + "               valueOf() :> " + arrDivs[j].valueOf()) ;
//	}
	
	return arrDivs;
}

/**
  * @함수명	: gfnGetLabel
  * @input    	: sId{String} 레이블 ID
  * @return    	: 레이블 Text
  * @desc     	: 레이블 Text 가져오기
  */  
gfnGetLabel = function(sId)
{
	if (gfnIsNull(sId)){
		return "";
	}	
	
	var nRow = 0 ;
	if(application.gv_langType == "KR"){
		nRow = application.gdsLabel.findRow("RSRC_KEY", sId);
 	}else if(application.gv_langType == "EN"){
		nRow = application.gdsLabel.findRow("RSRC_KEY", sId);
 	}else{
		nRow = application.gdsLabel.findRow("RSRC_KEY", sId);
 	}

 	if (nRow < 0){
 		return sId;
 	}
 	
 	var sRtnMsg = "";
 	if(application.gv_langType == "KR"){
		sRtnMsg = application.gds_label_kr.getColumn(nRow, "RSRC_NM");
 	}else if(application.gv_langType == "EN"){
		sRtnMsg = application.gds_label_en.getColumn(nRow, "RSRC_NM");
 	}else{
		sRtnMsg = application.gds_label_kr.getColumn(nRow, "RSRC_NM");
 	}
	return sRtnMsg;
}

/**
  * @함수명	: gfnGetObjNM
  * @input    	: obj (컴포넌트 obj)
  * @return    	: 레이블 Text
  * @desc     	: 컴포넌트의 명칭 가져오기
  */
var gv_isProtoType  = "Y";     //프로토타입의 경우 리소스 없을시 텍스트값으로 가져가게하기
gfnGetObjNM = function(obj)
{
	if(gfnIsNull(obj)) return;
	if(!gfnIsNull(obj.lbcd)){ 
		if(gv_isProtoType =="Y"){
			if(gfnGetLabel(obj.lbcd) == obj.lbcd && !gfnIsNull(obj.text)){
				return obj.text;
			}else{
				return gfnGetLabel(obj.lbcd); 
			}
		}else{
			return gfnGetLabel(obj.lbcd); 
		}
	}
		
	if(!gfnIsNull(obj.objNm)) return obj.objNm;
	if(!gfnIsNull(obj.text)) return obj.text;
	
	return "";
}

/**
  * @함수명	: gfnGetCompPath
  * @input    	: obj(오브젝트)
				  str(컴포넌트 경로)
  * @desc     	: 컴포넌트 경로 가져오기
  */  
gfnGetCompPath = function(obj, str)
{
	if(obj == "[object Form]"){
		return str;
	}else{
		var s = obj.name;
	}
	
	//if(str != "")
	if(!gfnIsNull(str)){
		s += "."+str
	}
	
	return gfnGetCompPath(obj.parent, s);
}

/**
  * @함수명	: gfnGetFormCompPath
  * @input    	: obj(오브젝트)
				  str(컴포넌트 경로)
  * @return    	: 레이블 Text				  
  * @desc     	: 컴포넌트 경로가져오기 : divWork 있을 경우 제거 후 가져옴
  */  
gfnGetFormCompPath = function(obj, str)
{
	var rtn = gfnGetCompPath(obj);
	
	if(!gfnIsNull(rtn) && rtn.indexOf("divWork.") == 0) return rtn.substr(9);
	else return rtn;
}