 /*
 ===============================================================================
 == Grid관련 공통함수들은 여기에 작성한다.
 ===============================================================================
 ● gfnGrdBindColId				: 그리드에서 바인드된 컬럼 ID 구하기
 ● gfnGrdBindColNm				: 그리드에서 바인드된 컬럼명 구하기
 ● gfnSetGrdFunc      			: 그리드 공통기능 적용(체크박스, 소트, 마우스 오른쪽 팝업메뉴....)
 ● gfnSetGrdHeadCheckbox		: 그리드 체크박스 전체선택/전체해제
 ● gfnSetGrdHeadSort			: 그리드 헤드 클릭시 소트
 ● gfnSetGrdTotalCnt			: 그리드에 바인딩 되어 있는 데이터셋의 레코드가 추가, 삭제되거나 행의 위치, 상태 등이 변경되었을 때 전체건수를 보여준다.  
 ● gfnSetGrdComboDropDown		: 콤보 셀 한번 클릭으로 dropdown 되도록 함.
 ● gfnGrdOnkeydown				: 그리드 복사 붙여넣기
 ● gfnGrdOnrbuttonup			: 그리드 마우스 우클릭 이벤트(팝업메뉴 띄움)
 ● gfnCreateGrdPopMenu			: 그리드의 팝업메뉴 생성
 ● gfnGrdPopMenuOnmenuclick	: 그리드의 팝업메뉴 클릭 이벤트
 ● gfnCellFix					: 그리드에서 마우스 우측클릭 팝업메뉴 - 틀고정
 ● gfnCxlCellFix				: 그리드에서 마우스 우측클릭 팝업메뉴 - 틀고정 취소
 ● gfnHide						: 그리드에서 마우스 우측클릭 팝업메뉴 - 숨기기
 ● gfnCxlHide					: 그리드에서 마우스 우측클릭 팝업메뉴 - 숨기기 취소
 ● gfnExportExcel				: 그리드의 내용을 Excel로 Export 
 ● gfnExportExcelOnsuccess		: 그리드 Excel Export onsuccess 이벤트
 ● gfnExportExcelOnerror		: 그리드 Excel Export onerror 이벤트
 */  

/**
  * @함수명	: gfnGrdBindColId
  * @input		: obj {Grid} 대상 그리드
				  nBodyCell {String} 선택 한 cell
  * @return		: tCellNM(바인딩 되어 있는 컬럼ID)
  * @desc		: 바인드 컬럼 ID 구하기
  */
gfnGrdBindColId = function(obj, nBodyCell)
{
	var tCellNM = obj.getCellProperty("body", nBodyCell, "text").toString();

	if(tCellNM.toUpperCase().indexOf("BIND:") < 0){
		tCellNM = "";
	}else{		
		tCellNM = tCellNM.replace("BIND:","");
		tCellNM = tCellNM.replace("bind:","");
		tCellNM = tCellNM.replace("Bind:","");
	}
	
	return tCellNM;
}

/**
	@function	gfnGrdBindColNm()
	@param		obj {Object} Grid Object
                nIdx {String} cell index
                strBand {String} 얻고자 하는 Cell의 영역('Head'/'Body'/'Summ'('Summary'))
	@return		{String} 컬럼명
	@desc   	그리드에서 바인드된 컬럼명 구하기
*/
gfnGrdBindColNm = function(obj,nIdx,strBand)
{
	if (strBand == null)
		strBand = "Body";
		
	var strCol;
	strCol = obj.getCellProperty(strBand, nIdx, "text");
	if (gfnIsNull(strCol)) return "";
	
	var strCol = obj.getCellProperty(strBand, nIdx, "text").replace("bind:", "");

	return strCol;
}

gfnGrdBindColType = function(obj, nBodyCell)
{
	var tCellNM	= "";
	
	try
	{
		tCellNM = obj.getCellProperty("body", nBodyCell, "displaytype").toString();

	}
	catch ( e )
	{
		tCellNM = "";
	}
	finally
	{
		return tCellNM;
	}
}

/**
  * @함수명	: gfnSetGrdFunc
  * @input		: grdObj {grid} 대상 그리드				
				  commDiv {div} 그리드 공통버튼 영역 div
				  form {form} 대상 form
				  excelObj {Object} 그리드 내용 엑셀다운로드 정보
  * @return		: tCellNM(바인딩 되어 있는 컬럼ID)
  * @desc		: 그리드 공통기능 적용
  */
gfnSetGrdFunc = function(grdObj, commDiv, form, excelObj)
{
	if(gfnIsNull(form)){
		var openId = application.gdsOpenMenu.getColumn(application.gdsOpenMenu.rowposition, "OPEN_ID");
		var framesInfo = application.gv_workFrameSet.frames;
		if(framesInfo[openId]){
			form = framesInfo[openId].form;
		}
	}
	
	/*그리드 포맷 원본 저장*/
	if(gfnIsNull(grdObj.orgFormatBak)) grdObj.orgFormatBak = grdObj.formats;
	
	/*체크박스 기능 적용*/
	grdObj.addEventHandler("onheadclick", gfnSetGrdHeadCheckbox, this);
	
	/*소트 기능 적용*/
	grdObj.addEventHandler("onheadclick", gfnSetGrdHeadSort, this);
	
	/* 그리드 전체건수 보여주기 */
	if(grdObj.f_totalCnt == "Y"){
		if(gfnIsNull(commDiv)){
			gfnAlert("EPRO_LABEL_00914");
		}else{
			grdObj.getBindDataset().totalCntDiv = commDiv;
			grdObj.getBindDataset().grd = grdObj;
			var nIndex = grdObj.getBindDataset().addEventHandler("onvaluechanged", gfnSetGrdTotalCnt, this);	
		}
	}
	
	/*콤보 dropdown 한번 클릭에 적용*/
	grdObj.addEventHandler("oncellclick", gfnSetGrdComboDropDown, this);
	
	//복사-붙여넣기 적용
	//if(grdObj.f_mode == "Y"){
	grdObj.addEventHandler("onkeydown", gfnGrdOnkeydown, this);
	//}
		
	/*마우스 오른쪽 클릭 메뉴 적용*/
	//grdObj.addEventHandler("onrbuttonup", gfnGrdOnrbuttonup, this);

 	if(grdObj && commDiv && form){
		commDiv.fnDivGrdComBtnsInit(form, grdObj, excelObj);
	}
}

/**
  * @함수명	: gfnSetGrdHeadCheckbox
  * @input		: obj {grid} 대상 그리드
				  e {event} GridClickEventInfo 이벤트
  * @desc		: 그리드 체크박스 전체선택/전체해제
  */
gfnSetGrdHeadCheckbox = function(obj, e)
{
	if(obj.readonly) return;
	if(obj.getCellProperty("head", e.cell, "displaytype") != "checkbox") return;
	
	// Head셋팅
	var strVal = obj.getCellProperty("head", e.cell, "expr");	
	if(gfnIsNull(strVal)){
		strVal = "0";
	}

	obj.setCellProperty("head", e.cell, "expr", strVal=='0'?'1':'0');
	strVal = (strVal=='0'?'1':'0');

	// Body셋팅
	var dsObj = obj.getBindDataset();	
	
	if(gfnIsNull(dsObj)) gfnAlert("EPRO_LABEL_00916");
	
	dsObj.set_enableevent(false);
	for(var i=0, x=dsObj.rowcount; i<x; i++){
		dsObj.setColumn(i, "CHECKED", strVal);
	}
	dsObj.set_enableevent(true);
}

/**
  * @함수명	: gfnSetGrdHeadSort
  * @input		: obj {grid} 대상 그리드
				  e {event} GridClickEventInfo 이벤트
  * @desc		: 그리드 헤드 클릭시 소트
  */
gfnSetGrdHeadSort = function(obj, e)
{
	//헤더의 2번째 로우 클릭시 에러발생하여 첫번째 로우만 동작하도록 수정, 2017-12-07 tbsong 
	if(0 != obj.getCellProperty("Head",e.cell,"row")) return;

	var v_Colid = obj.getCellProperty("body", e.cell, "text").split("bind:").join("");
	if(v_Colid == "CHECKED") return;
	obj.set_enableevent(false);
	var sHeadExpr = "";	// HEAD 명읽어오기
	var nLen 	  = ""; // HEAD 길이 읽기
	var ExprSub   = "";	// HEAD 뒤 특수문자 읽어오기
	var ExprSubZ  = ""; // HEAD 순수 HEAD명 읽어오기
	for(var i=0; i<obj.getCellCount("head"); i++){	
		
		sHeadExpr = obj.getCellProperty( "head", i, "expr");
		if(gfnIsNull(sHeadExpr)) continue;
		nLen = sHeadExpr.indexOf("+");
		ExprSub  = sHeadExpr.substr(nLen);
		ExprSubZ = sHeadExpr.substr(0, nLen);
		
		if(i == e.cell){
		
			var objDs = obj.getBindDataset();	
			var sColId = (obj.getCellProperty("body", e.col,"text")).toString().split(":");            
			
			if(ExprSub == "+'▲'"){
			
				obj.setCellProperty( "head", i, "expr", ExprSubZ+ "+'▼'");
				objDs.set_keystring("S:-" + sColId[1]);
				
			}else if (ExprSub == "+'▼'"){
			
				obj.setCellProperty( "head", i, "expr", ExprSubZ+ "+'▲'");
				objDs.set_keystring("S:+" + sColId[1]);
				
			}else{
				
				obj.setCellProperty( "head", i, "expr", sHeadExpr+"+'▲'");
				objDs.set_keystring("S:+" + sColId[1]);
			}
		}else{
			if (ExprSub == "+'▼'" || ExprSub == "+'▲'"){
				obj.setCellProperty( "head", i, "expr", ExprSubZ);
			}
		}
	}
	obj.set_enableevent(true);
}

/**
  * @함수명	: gfnSetGrdTotalCnt
  * @input		: obj {Dataset} 그리드에 바인딩 되어있는 데이터셋
				  e {event} DSColChangeEventInfo 이벤트
  * @desc		: 그리드에 바인딩 되어 있는 데이터셋의 레코드가 추가, 삭제되거나 행의 위치, 상태 등이 변경되었을 때 전체건수를 보여준다.
  */
gfnSetGrdTotalCnt = function(obj, e)
{	
	if(obj.grd.f_totalCnt != "Y") return;
	if(gfnIsNull(obj.getRowCount())) return;
	obj.totalCntDiv.fnSetTotalCnt(obj.getRowCount());
}


/**
  * @함수명	: gfnSetGrdComboDropDown
  * @input		: obj {grid} 대상 그리드
				  e {event} GridClickEventInfo 이벤트
  * @desc		: 콤보 셀 한번 클릭으로 dropdown 되도록 함.
  */
gfnSetGrdComboDropDown = function(obj, e)
{
	obj.dropdownCombo();
	obj.set_autoenter("select");
}

/**
  * @함수명	: gfnGrdOnkeydown
  * @input		: grid {grid} 대상 그리드
				  e {event} KeyEventInfo 이벤트
  * @desc		: 그리드 복사 붙여넣기
  */
gfnGrdOnkeydown = function(obj, e)
{	
	// TODO 셀에 EXPR 적용되어 있을경우 같이 적용될것.
	if(e.ctrlKey && e.keycode == 67){ //C		
		var sCopyData = "";
		var strSeperate = "	";

		for(var i=obj.selectstartrow; i<=obj.selectendrow; i++){
			for(var j=obj.selectstartcol; j<=obj.selectendcol; j++){
				sCopyData += obj.getCellText(i,j);
				
				if(j<obj.selectendcol){
					sCopyData += strSeperate;
				}
			}

			if(i<obj.selectendrow){
				sCopyData += "\r\n";
			}
		}

		//sCopyData += "\r\n";
		system.clearClipboard();
		system.setClipboard("CF_TEXT", sCopyData);
		//CF_UNICODETEXT
		
	}
// 	else if(e.ctrlKey && e.keycode == 86){ //V
// 		var pasteOriginal = system.getClipboard("CF_UNICODETEXT");
// 		if(gfnIsNull(pasteOriginal)) return;
// 		
// 		var arrRow = pasteOriginal.split("\n");		
// 		var oBindDs = obj.getBindDataset();
// 		var nCurRow = oBindDs.rowposition;
// 		
// 		oBindDs.set_enableevent(false);
// 		for(var i=0, x=arrRow.length-1; i<x; i++){
// 			nCurRow = oBindDs.insertRow(nCurRow+1);
// 			var arrCol = arrRow[i].split("\t");
// 			
// 			for(var j=0, y=arrCol.length; j<y; j++){
// 				var nColIdx = j + obj.getCellPos();
// 				var sText = arrCol[j];
// 			
// 				// 마스크 및 디스플레이 타입에 따라 변경할 때
// 				var sMask = obj.getCellProperty("body", nColIdx, "mask");
// 				if(!gfnIsNull(sMask)){
// 					var sDisplayType = obj.getCellProperty("body", nColIdx, "displaytype");					
// 					if(sDisplayType == "number"){
// 						sText = gfnReplace(sText, ",", "");						
// 					}
// 				}
// 				
// 				var arrBindColumId = obj.getCellProperty("body", nColIdx, "text").split("bind:");
// 				oBindDs.setColumn(nCurRow, arrBindColumId[1], sText);
// 			}
// 		}
// 		oBindDs.set_enableevent(true);
// 	}
}

/**
  * @함수명	: gfnGrdOnrbuttonup
  * @input		: grid {grid} 대상 그리드
				  e {event} GridMouseEventInfo 이벤트
  * @desc		: 그리드 마우스 우클릭 이벤트(팝업메뉴 띄움)
  */
gfnGrdOnrbuttonup = function(grid, e)
{
	var objPopMenu = gfnCreateGrdPopMenu(grid);	
	if(gfnIsNull(objPopMenu)) return;
	
	//R Click 이벤트 임시저장
	grid._rClickedCol = e.col; 
	grid._rClickedRow = e.row;
	grid._rClickedCell = e.cell;
	grid._rClickedX = e.screenX;
	grid._rClickedY = e.screenY;
	
	var x = nexacro.toNumber(nexacro.System.getCursorX()) - nexacro.toNumber(system.clientToScreenX(application.mainframe, 0))+10;
	var y = nexacro.toNumber(nexacro.System.getCursorY()) - nexacro.toNumber(system.clientToScreenY(application.mainframe, 0))+10;

	objPopMenu.trackPopup(x, y);
}

/**
  * @함수명	: gfnCreateGrdPopMenu
  * @input		: objGrid {grid} 대상 그리드
  * @desc		: 그리드의 팝업메뉴 가져옴
  */
gfnCreateGrdPopMenu = function(objGrid)
{
	var objPopupMenu = "";
	var openId = application.gdsOpenMenu.getColumn(application.gdsOpenMenu.rowposition, "OPEN_ID");					
	var sPopMenuNm = "gridPopMenu_" + openId;
	
	var framesInfo = application.gv_workFrameSet.frames;
	if(framesInfo[openId]){
		if(framesInfo[openId].form.components[sPopMenuNm]) framesInfo[openId].form.components[sPopMenuNm].destroy();
		
		objPopupMenu = new PopupMenu(sPopMenuNm, "absolute", null, null, 600, 600);
		objPopupMenu.setInnerDataset(application.gdsGrdPopMenu);
		objPopupMenu.set_idcolumn("menuId");
		objPopupMenu.set_userdatacolumn("menuId");
		objPopupMenu.set_captioncolumn("menuNm");
		objPopupMenu.set_levelcolumn("menuLvl");
		objPopupMenu.set_enablecolumn("enable");
		objPopupMenu.set_hotkeycolumn ("hotkey");
		objPopupMenu.objNm = "none";
		objPopupMenu.bindGrid = objGrid;
		objPopupMenu.form = framesInfo[openId].form.divWork;		
				
		objPopupMenu.setEventHandler("onmenuclick", gfnGrdPopMenuOnmenuclick, this);
		
		framesInfo[openId].form.addChild(sPopMenuNm, objPopupMenu);
		
		objPopupMenu.show();
	}
	
	return objPopupMenu;
}

/**
  * @함수명	: gfnGrdPopMenuOnmenuclick
  * @input		: obj {PopupMenu} PopupMenu
				  e {MenuClickEventInfo} MenuClickEventInfo
  * @desc		: 그리드의 팝업메뉴 선택
  */
gfnGrdPopMenuOnmenuclick = function(obj, e)
{
	var objGrid = obj.bindGrid;
	
	switch(e.userdata){
		/*필터*/
		case "filter":			
			var sArg = {	arg_bBgColor	: false
							, arg_grid		: objGrid
						};
			gfnModalPop(obj.form, "CompGrdFilterPop", "CPOP::CompGrdFilterPop.xfdl", sArg, "", 600, 285);
		break;
		
		/*필터 취소*/
		case "filtercancel": 				
			var ds = objGrid.getBindDataset();
			ds.filter("");
		break;
		
		/*틀고정*/
		case "fix":
			gfnCellFix(objGrid, objGrid._rClickedCell);
		break;
		
		/*틀고정 취소*/
		case "fixcancel":
			gfnCxlCellFix(objGrid);
		break;
		
		case "find": //검색
			var sArg = {	arg_bBgColor	: false
							, arg_grid		: objGrid
						};			
			gfnModalPop(obj.form, "CompGrdFindPop", "CPOP::CompGrdFindPop.xfdl", sArg, "", 300, 150);
		break;
		
		/*숨기기*/
		case "hide":
			gfnHide(objGrid, objGrid._rClickedCell);
		break;
		
		/*숨기기 취소*/
		case "show": 
			gfnCxlHide(objGrid, objGrid._rClickedCell);
		break;
		
		case "allcancel" : //전체 초기화
			objGrid.set_enableevent(false);
			objGrid.set_formats(objGrid.orgFormatBak);
			objGrid.set_enableevent(true);
			
			var ds = objGrid.getBindDataset();
			ds.filter("");		
		break;
		
		default:
		break;	
	}
}

/**
  * @함수명	: gfnCellFix
  * @input		: objGrid {grid} grid
				  nCell {String} 선택한 컬럼 index
  * @desc		: 그리드에서 마우스 우측클릭 팝업메뉴 - 틀고정
  */
gfnCellFix = function(objGrid, nCell)
{
	objGrid.set_enableevent(false);
	objGrid.set_enableredraw(false);
		
	/*틀고정 된 그리드 헤더의 백그라운드 색*/
	var sBackground = "#4D7990";
	
	/*틀고정 된 그리드 헤더의 테두리 속성*/
	var sLine       = "1 solid #eaeaeaff,2 solid #d2d2d2ff";
	
	for(var i=0, x=objGrid.getCellCount("Head"); i<x; i++){
		if(i <= nCell){
			objGrid.setFormatColProperty(i, "band", "left");
			objGrid.setCellProperty( "Head", i, "style", "background:"+sBackground+";");
			if(nCell == i) objGrid.setCellProperty( "Body", nCell, "line", sLine);
		}else{
			objGrid.setFormatColProperty(i, "band", "body");
			objGrid.setCellProperty( "Head", i, "style", "background:'';");
			objGrid.setCellProperty( "Body", i, "line", null);
		}
	}

	objGrid.set_cellmovingtype("none"); 
	objGrid.redraw();
	
	objGrid.set_enableevent(true);
	objGrid.set_enableredraw(true);
}

/**
  * @함수명	: gfnCxlCellFix
  * @input		: objGrid {grid} grid
  * @desc		: 그리드에서 마우스 우측클릭 팝업메뉴 - 틀고정 취소
  */
gfnCxlCellFix = function(objGrid)
{
	objGrid.set_enableevent(false);
	objGrid.set_enableredraw(false);

	for(var i=0, x=objGrid.getCellCount("Head"); i<x; i++){
		objGrid.setFormatColProperty(i, "band", "body");
		objGrid.setCellProperty( "Head", i, "style", "background:'';");
		objGrid.setCellProperty( "Body", i, "line", null);
	}

	objGrid.set_cellmovingtype("col"); 
	objGrid.redraw();
	
	objGrid.set_enableevent(true);
	objGrid.set_enableredraw(true);
}

/**
  * @함수명	: gfnHide
  * @input		: objGrid {grid} grid
				  nCell {String} 선택한 컬럼 index
  * @desc		: 그리드에서 마우스 우측클릭 팝업메뉴 - 숨기기
  */
gfnHide = function(objGrid, nCell)
{
	var nCol = objGrid.getCellProperty("Head", nCell, "col");
	var hidelist = gfnIsNull(objGrid.hidelist) ? "" : objGrid.hidelist;
	objGrid.hidelist = hidelist + String(nCell) + "|" + objGrid.getFormatColProperty(nCol, "size") + "|";
	objGrid.setFormatColProperty(nCol, "size", 0);
}

/**
  * @함수명	: gfnCxlHide
  * @input		: objGrid {grid} grid
				  nCell {String} 선택한 컬럼 index
  * @desc		: 그리드에서 마우스 우측클릭 팝업메뉴 - 숨기기 취소
  */
gfnCxlHide = function(objGrid, nCell)
{
	if(gfnIsNull(objGrid.hidelist)) return;

	var arrHideList = objGrid.hidelist.split("|");
	
	for(var i=arrHideList.length-2; i>-1; i=i-2){
		objGrid.setFormatColProperty(arrHideList[i-1], "size", arrHideList[i]);
	}
	
	objGrid.hidelist = "";
}

/**
  * @함수명	: gfnExportExcel
  * @input		: objGrid		{Grid}		출력 대상 그리드
				  bAllColumn	{String}	전체컬럼 여부(전체컬럼 여부가 true인 경우 그리드에 있는 모든 컬럼이 Export) [true:전체 | false:보이는컬럼만(default)] [생략가능]
				  sSheetName	{String}	Sheet 명[생략가능]
				  sFileName	{String}	파일명 명[생략가능]
  * @return		{String} dataset.saveXML()				  
  * @desc		: 그리드의 내용을 Excel로 Export
  */
gfnExportExcel = function(objGrid, bAllColumn, sSheetName, sFileName)
{
	var pgmId = application.gdsOpenMenu.getColumn(application.gdsOpenMenu.rowposition, "PGM_ID");
	var framesInfo = application.gv_workFrameSet.frames;
	if(framesInfo[pgmId]){		
		var form = framesInfo[pgmId].form;
		form.setWaitCursor(true);
	
		bAllColumn = gfnIsNull(bAllColumn) ? false : bAllColumn;	
		sSheetName = gfnIsNull(sSheetName) ? "Sheet1" : sSheetName;

		var objDate = new Date();
		var sTdoayTime = gfnTodayTime();
		sTdoayTime += objDate.getMilliseconds();	
		sFileName = gfnIsNull(sFileName) ? "ExcelExport_"+ sTdoayTime : sFileName;
		
		var objDs = objGrid.getBindDataset();
		
		form.removeChild(sFileName + "_excelGrid");
		var objGrid_excel = new Grid(sFileName + "_excelGrid", "absolute", 10, 10, 100, 100);
		form.addChild(objGrid_excel.name, objGrid_excel); 
		objGrid_excel.set_visible(false);
		//tobesoft 20151012 수정
		//objGrid.getCurFormatString(true) 
		//기존에는 true 없었으나. true 속성값 넣음
		//true는 오리지널 그리드 데이터를 가져오는것이고
		//false는 변경된 데이터를 가져오는 것인데. 브라우져에서 정상적으로 작동하지 않음
		objGrid_excel.set_formats("<Formats>"+objGrid.getCurFormatString(true)+"</Formats>");
		
		var tmpCnt;
		var checkHeadText;
		var sCellExpandchar;

		for(var i=objGrid_excel.getCellCount("body")-1; i>=0; i--){
			sCellExpandchar = objGrid_excel.getCellProperty("Head", i, "expandchar");
			checkHeadText = objGrid_excel.getCellProperty("Head", i, "text");
			
			if(checkHeadText.indexOf("<fc v='red'>") > -1){
				tmpCnt = checkHeadText.indexOf(">", 12);
				objGrid_excel.setCellProperty("Head", i, "text", checkHeadText.substr(tmpCnt+1,checkHeadText.length));
			}
			
			if(sCellExpandchar == "status" || sCellExpandchar == "btnDelete" || objGrid_excel.getCellProperty("Head", i, "edittype") == "checkbox"){
				objGrid_excel.deleteContentsCol(i);
			}
					
			if(bAllColumn){	
				if(objGrid_excel.getFormatColSize(i) <= 0){
					objGrid_excel.deleteContentsCol(i);
				}
			}
		}
		
		objGrid_excel.set_binddataset(objDs);	
		objGrid_excel.show(); 


		var objExport = new ExcelExportObject();
		
		objExport.objgrid = objGrid_excel;
		
		objExport.set_exporttype(nexacro.ExportTypes.EXCEL2007);
		objExport.set_exporturl(application.services["svcurl"].url+"XExportImport");
		objExport.addExportItem(nexacro.ExportItemTypes.GRID, objGrid_excel, sSheetName+"!A1","allband","allrecord","suppress","onlyvalue","none","color,background","both");
		objExport.set_exportfilename(sFileName);	
		
		objExport.set_exporteventtype("itemrecord");
		objExport.set_exportuitype("none");
		objExport.set_exportmessageprocess("");
		objExport.addEventHandler("onsuccess", gfnExportExcelOnsuccess, this);	
		objExport.addEventHandler("onerror", gfnExportExcelOnerror, this);	
			
		var result = objExport.exportData();
	}
}

/**
  * @함수명	: gfnExportExcelOnsuccess
  * @input		: obj	{ExcelExportObject}
				  e	{ExcelExportEventInfo}		  
  * @desc		: 그리드 Excel Export onsuccess 이벤트
  */
gfnExportExcelOnsuccess = function(obj, e)
{
	var pgmId = application.gdsOpenMenu.getColumn(application.gdsOpenMenu.rowposition, "PGM_ID");
	var framesInfo = application.gv_workFrameSet.frames;
	if(framesInfo[pgmId]){		
		var form = framesInfo[pgmId].form;
		form.setWaitCursor(false);		
		
		var objGrid_excel = form.objExport.objgrid;
		form.removeChild(objGrid_excel.name); 
		objGrid_excel.destroy(); 
		objGrid_excel = null;
	}
}

/**
  * @함수명	: gfnExportExcelOnerror
  * @input		: obj	{ExcelExportObject}
				  e	{ExcelExportEventInfo}		  
  * @desc		: 그리드 Excel Export onerror 이벤트
  */
gfnExportExcelOnerror = function(obj,  e)
{
	var pgmId = application.gdsOpenMenu.getColumn(application.gdsOpenMenu.rowposition, "PGM_ID");
	var framesInfo = application.gv_workFrameSet.frames;
	if(framesInfo[pgmId]){	
		gfnAlert("Excel Export Error!!");
		var form = framesInfo[pgmId].form;
		form.setWaitCursor(false);		
	}
}