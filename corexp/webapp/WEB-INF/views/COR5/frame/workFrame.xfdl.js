(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("workFrame");
                this.set_scrollbars("none");
                this.set_titletext("workFrame");
                this._setFormPosition(0,0,1072,100);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMyMenuSaveInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"PGM_ID\" size=\"256\" type=\"STRING\"/><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSysPgm", this);
            obj._setContents("<ColumnInfo><Column id=\"OPEN_ID\" size=\"256\" type=\"STRING\"/><Column id=\"PGM_ID\" size=\"40\" type=\"STRING\"/><Column id=\"OBJ\" size=\"4000\" type=\"STRING\"/><Column id=\"OBJ_BIND\" size=\"4000\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsObjBindEn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsObjBindVi", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsObjBindEs", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTemp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsObjBindGrid", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divWork", "absolute", "10", "41", null, null, "0", "0", this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Div("divComBtns", "absolute", null, "5", "500", "25", "0", null, this);
            obj.set_taborder("27");
            this.addChild(obj.name, obj);
            obj = new Button("btnComInit", "absolute", null, "0", "25", "25", "231", null, this.divComBtns);
            obj.set_cssclass("btn_ComInit");
            obj.getSetter("objNm").set("(공통버튼)초기화");
            obj.style.set_border("0 none #808080ff");
            obj.set_taborder("7");
            obj.set_tooltiptext("초기화");
            obj.set_visible("false");
            this.divComBtns.addChild(obj.name, obj);
            obj = new Button("btnComSrch", "absolute", null, "0", "25", "25", "204", null, this.divComBtns);
            obj.set_cssclass("btn_ComSrch");
            obj.getSetter("objNm").set("(공통버튼)조회");
            obj.set_taborder("11");
            obj.set_tooltiptext("조회");
            obj.set_visible("false");
            this.divComBtns.addChild(obj.name, obj);
            obj = new Button("btnComSave", "absolute", null, "0", "25", "25", "177", null, this.divComBtns);
            obj.set_cssclass("btn_ComSave");
            obj.getSetter("objNm").set("(공통버튼)저장");
            obj.style.set_border("0 none #808080ff");
            obj.set_taborder("9");
            obj.set_tooltiptext("저장");
            obj.set_visible("false");
            this.divComBtns.addChild(obj.name, obj);
            obj = new Button("btnComNew", "absolute", null, "0", "25", "25", "150", null, this.divComBtns);
            obj.set_cssclass("btn_ComNew");
            obj.getSetter("objNm").set("(공통버튼)신규");
            obj.style.set_border("0 none #808080ff");
            obj.set_taborder("6");
            obj.set_tooltiptext("신규");
            obj.set_visible("false");
            this.divComBtns.addChild(obj.name, obj);
            obj = new Button("btnComDel", "absolute", null, "0", "25", "25", "123", null, this.divComBtns);
            obj.set_cssclass("btn_ComDel");
            obj.getSetter("objNm").set("(공통버튼)삭제");
            obj.style.set_border("0 none #808080ff");
            obj.set_taborder("5");
            obj.set_tooltiptext("삭제");
            obj.set_visible("false");
            this.divComBtns.addChild(obj.name, obj);
            obj = new Button("btnComPrint", "absolute", null, "0", "25", "25", "96", null, this.divComBtns);
            obj.set_cssclass("btn_ComPrint");
            obj.getSetter("objNm").set("(공통버튼)인쇄");
            obj.style.set_border("0 none #808080ff");
            obj.set_taborder("10");
            obj.set_tooltiptext("인쇄");
            obj.set_visible("false");
            this.divComBtns.addChild(obj.name, obj);
            obj = new Button("btnComClose", "absolute", null, "0", "25", "25", "15", null, this.divComBtns);
            obj.set_cssclass("btn_ComClose");
            obj.getSetter("objNm").set("(공통버튼)닫기");
            obj.style.set_border("0 none #808080ff");
            obj.set_taborder("8");
            obj.set_tooltiptext("닫기");
            this.divComBtns.addChild(obj.name, obj);
            obj = new Button("btnComMyMenu", "absolute", null, "0", "25", "25", "69", null, this.divComBtns);
            obj.set_cssclass("btn_ComMyMenu");
            obj.getSetter("objNm").set("(공통버튼)즐겨찾기");
            obj.style.set_border("0 none #808080ff");
            obj.set_taborder("12");
            obj.set_tooltiptext("즐겨찾기");
            obj.set_visible("false");
            this.divComBtns.addChild(obj.name, obj);
            obj = new Button("btnRemote", "absolute", null, "0", "25", "25", "42", null, this.divComBtns);
            obj.set_cssclass("btn_Remote");
            obj.getSetter("objNm").set("(공통버튼)리모콘");
            obj.style.set_border("0 none #808080ff");
            obj.set_taborder("13");
            obj.set_tooltiptext("리모콘");
            obj.set_visible("false");
            this.divComBtns.addChild(obj.name, obj);

            obj = new Button("btnNaviIcon", "absolute", "10", "10", "20", "20", null, null, this);
            obj.set_cssclass("btn_NaviIcon");
            obj.getSetter("objNm").set("네비게이션 아이콘");
            obj.set_taborder("60");
            this.addChild(obj.name, obj);

            obj = new Static("staNavi", "absolute", "36", "6", "707", "25", null, null, this);
            obj.style.set_font("bold 12 malgun gothic");
            obj.set_taborder("24");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("divDevelop", "absolute", "497", "3", "216", "25", null, null, this);
            obj.set_taborder("56");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            obj = new Button("btnObj", "absolute", "111", "6", "38", "19", null, null, this.divDevelop);
            obj.getSetter("objNm").set("");
            obj.set_taborder("6");
            obj.set_text("ObJ");
            this.divDevelop.addChild(obj.name, obj);
            obj = new Combo("cboObj", "absolute", "40", "6", "68", "19", null, null, this.divDevelop);
            this.divDevelop.addChild(obj.name, obj);
            var cboObj_innerdataset = new Dataset("cboObj_innerdataset", this.divDevelop.cboObj);
            cboObj_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">A</Col></Row><Row><Col id=\"codecolumn\">B</Col><Col id=\"datacolumn\">B</Col></Row><Row><Col id=\"codecolumn\">C</Col><Col id=\"datacolumn\">C</Col></Row><Row><Col id=\"codecolumn\">D</Col><Col id=\"datacolumn\">D</Col></Row><Row><Col id=\"codecolumn\">E</Col><Col id=\"datacolumn\">E</Col></Row><Row><Col id=\"codecolumn\">F</Col><Col id=\"datacolumn\">F</Col></Row><Row><Col id=\"codecolumn\">G</Col><Col id=\"datacolumn\">G</Col></Row><Row><Col id=\"codecolumn\">H</Col><Col id=\"datacolumn\">H</Col></Row><Row><Col id=\"codecolumn\">I</Col><Col id=\"datacolumn\">I</Col></Row><Row><Col id=\"codecolumn\">J</Col><Col id=\"datacolumn\">J</Col></Row></Rows>");
            obj.set_innerdataset(cboObj_innerdataset);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_taborder("8");
            obj.set_index("-1");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.divWork,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");

            	}
            );
            this.divWork.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 500, 25, this.divComBtns,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("27");

            	}
            );
            this.divComBtns.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 216, 25, this.divDevelop,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("56");
            		p.set_visible("true");

            	}
            );
            this.divDevelop.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1072, 100, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("form_parent_general");
            		p.getSetter("inheritanceid").set("");
            		p.set_scrollbars("none");
            		p.set_titletext("workFrame");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","divComBtns.btnComInit","visible","dsObjBindVi","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divComBtns.btnComSrch","visible","dsObjBindVi","btnComSrch");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divComBtns.btnComSave","visible","dsObjBindVi","btnComSave");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","divComBtns.btnComNew","visible","dsObjBindVi","btnComNew");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","divComBtns.btnComDel","visible","dsObjBindVi","btnComDel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","divComBtns.btnComPrint","visible","dsObjBindVi","btnComPrint");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","divComBtns.btnComMyMenu","visible","dsObjBindVi","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","divComBtns.btnRemote","visible","dsObjBindVi","btnRemote");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("workFrame.xfdl", function(exports) {
        /**
         * @파일명       	: workFrame.xfdl
         * @생성자       	: 한민희
         * @생성일자     	: 2017. 8. 17.
         * @설명			: 워크프레임
         * @최종수정자		: 한민희
         * @최종수정일자	: 2017. 8. 17.
        */  

        /**
        	@var  this.fvOpenId
        	@desc 전역변수 - 화면 Key
        */
        this.fvOpenId;

        /**
          * @함수명	: fnFormOnload
          * @desc     	: 폼 onload 이벤트
          */
        this.fnFormOnload = function (obj,e){
        	this.divWork.set_async(false);
         	application.gv_topFrame.form.setWaitCursor(true);

        	this.fvOpenId = this.fnGetFrameAguments("openId");
        	
        	this.fnSetNavi();
        		
        	this.dsSysPgm.addRow();
        	this.dsSysPgm.setColumn(0,"PGM_ID", this.fnGetFrameAguments("pgmId"));
        	
        	this.fnSearch();
        	
        	//개발자 모드 세팅
        // 	if(application.gv_svcMode == "D")
        // 	{
         		//this.divDevelop.set_visible(true);
        // 	}
        }

        /**
          * @함수명	: fnSetNavi
          * @desc     	: 네비게이션 세팅.
          */
        this.fnSetNavi = function()
        {
        	//네비게이션 세팅 시작
        	var pgmId = this.fnGetFrameAguments("pgmId");

        	var arrMenuNm = new Array();
        	var altMenu = true;
        	var upPgmId = "";
        	var text = "";

        	while(true){		
        		if(!gfnIsNull(upPgmId)) pgmId = upPgmId;		
        		
        		var nRow = application.gdsMenu.findRow("PGM_ID", pgmId);		
        		if(application.gdsMenu.getColumn(nRow, "ALT_MENU") == "N"){
        			var prePgmId = this.fnGetFrameAguments("prePgmId");
        			
        			if(pgmId == prePgmId) prePgmId = application.gdsMenu.getColumn(nRow,"UP_PGM_ID");
        			
        			nRow = application.gdsMenu.findRow("PGM_ID", prePgmId);
        			altMenu = false;
        		}
        		
        		if(nRow > -1){
        			if(application.gdsMenu.getColumn(nRow, "TOP_MENU_LEVEL") < 0) break;		
        			arrMenuNm.push(application.gdsMenu.getColumn(nRow, "MENU_NM"));
        			upPgmId = application.gdsMenu.getColumn(nRow, "UP_PGM_ID");
        		}else{
        			break;
        		}
        	}	
        	
        	if(altMenu){
        		for(var i=arrMenuNm.length-1; i>=1; i--){
        			text += arrMenuNm[i] + " > ";
        		}
        		
        		this.staNavi.set_text(text + "<fc v='#000000'><b v='true'>" + arrMenuNm[0] + "</b></fc>");
        	}else{
        		for(var i=arrMenuNm.length-1; i>=0; i--){
        			text += arrMenuNm[i] + " > ";
        		}
        		
        		var menuNm = application.gdsOpenMenu.getColumn(application.gdsOpenMenu.rowposition, "MENU_NM");		
        		this.staNavi.set_text(text + "<fc v='#000000'><b v='true'>" + menuNm + "</b></fc>");
        	}	
        	
        	//네비게이션 세팅 끝
        }

        /**
          * @함수명	: fnSearch
          * @desc     	: 조회 프로세스
          */
        this.fnSearch = function()
        {	
        	var sSvcID = "searchObjInfo";
        	var sController = "epro.sys.service.BSysService.searchObjInfo";
        	var sInDatasets = "dsSysPgm=dsSysPgm";
        	var sOutDatasets = "dsSysPgm=dsSysPgm";
        	var sCallbackFunc = "fnTrCallBack";	
        					
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc, null);
        }

        /**
        	@function	callBack()
        	@desc   	트랜잭션 콜백 함수
        */
        this.fnTrCallBack = function (strSvcID,strErrCd,strErrMsg)
        {
        	switch(strSvcID){
        		case "searchObjInfo" :
        			this.setTimer(1,10);			
        			break;
        			
        		default:
        			break;	
        	}
        }

        /**
          * @함수명	: fnFormOntimer
          * @desc     	: 폼 ontimer 이벤트 - 폼이 열리는 사이 비어있는 하얀 화면뜨는 동안 로딩 이미지 띄우기 위해 타이머 주었음.
          */
        this.fnFormOntimer = function(obj,e)
        {	
        	this.killTimer(1);

        	/*
        		obj관리 데이터셋 세팅.
        	*/
        	if(this.dsSysPgm.getColumn(0,"OBJ_BIND")!=""){	
        		var obj = this.dsSysPgm.getColumn(0,"OBJ_BIND");
        		var info = obj.split("ㅫ");
        		
        		/*
        			enable, visible, grid mode loadXML() 하기전에 enableevent를 false로 적용한다.
        			적용하는 이유는 loadXML하면 무조건 0번째 로우 값으로 세팅되기 때문에 폼온로드후 원하는 모드로 바로 적용할 수 없다.
        			그래서 모드적용 (fnSetObj 펑션) 후 enableevent를 true로 풀어준다.
        		*/
        		this.dsObjBindEn.set_enableevent(false);
        		this.dsObjBindVi.set_enableevent(false);
        		this.dsObjBindGrid.set_enableevent(false);
        		this.dsObjBindEs.set_enableevent(false);
        		
        		this.dsObjBindEn.loadXML(info[0]);		
        		this.dsObjBindVi.loadXML(info[1]);		
        		this.dsObjBindGrid.loadXML(info[3]);
        		
        		this.dsObjBindEn.set_rowposition(-1);
        		this.dsObjBindVi.set_rowposition(-1);
        		this.dsObjBindGrid.set_rowposition(-1);		
        	}

        	var obj = this.dsSysPgm.getColumn(0,"OBJ");
        	this.dsTemp.loadXML(obj);
        	
        	var filterStr = "ESSENTIAL_A=='1' || ESSENTIAL_B=='1' || ESSENTIAL_C=='1' || ESSENTIAL_D=='1'"
         				+ "|| ESSENTIAL_E=='1' || ESSENTIAL_F=='1' || ESSENTIAL_G=='1' || ESSENTIAL_H=='1'"
         				+ "|| ESSENTIAL_I=='1' || ESSENTIAL_J=='1' || STR_MAX_LEN > 0";
        	this.dsTemp.filter(filterStr);	
        	this.dsObjBindEs.copyData(this.dsTemp, true);
        		
        	application.gv_topFrame.form.setWaitCursor(false);
        	
        	//공통 버튼 정렬
        	gfnBtnRange(this.divComBtns.btnComClose);
        	
        	var linkUrl = this.fnGetFrameAguments("linkUrl");
        	if(linkUrl.indexOf(".xfdl") < 0){
        		linkUrl += ".xfdl";
        	}
        	
        	linkUrl = gfnReplace(linkUrl, "commAdmin", "BSYS");
        	linkUrl = gfnReplace(linkUrl, "commPop", "CPOP");
        	linkUrl = gfnReplace(linkUrl, "commComp", "CCOMP");
        	
        	this.divWork.set_url(linkUrl);
        }

        /**
          * @함수명	: fnGetFrameAguments
          * @param		: sVal {String} Arguments
          *	@return		: Object {Object} 등록된 아큐먼트 리턴
          * @desc     	: child Frame에 등록한 아규먼트를 리턴.
          */
        this.fnGetFrameAguments = function(sVal)
        {
            return this.getOwnerFrame().arguments[sVal];
        }

        /**
          * @함수명	: fnBtnComInitOnclick
          * @desc     	: 초기화 버튼 onclick 이벤트
          */
        this.fnBtnComInitOnclick = function(obj,e)
        {
        	this.divWork.reload();
        }

        /**
          * @함수명	: fnBtnComPrintOnclick
          * @desc     	: 출력 버튼 onclick 이벤트
          */
        this.fnBtnComPrintOnclick = function(obj,e)
        {	
        // 	var pagePrintFunc = this.divWork.lookup("fnPrint");
        // 	if(gfnIsNull(pagePrintFunc)){
        // 		gfnAlert("페이지에 fnPrint() 만드세요!");
        // 		return;
        // 	}
        	this.divWork.fnPrint();
        }

        /**
          * @함수명	: fnBtnComSrchOnclick
          * @desc     	: 검색 버튼 onclick 이벤트
          */
        this.fnBtnComSrchOnclick = function(obj,e)
        {
        // 	var pageSearchFunc = this.divWork.lookup("fnSearch");
        // 	if(gfnIsNull(new String(pageSearchFunc))){
        // 		gfnAlert("페이지에 fnSearch() 만드세요!");
        // 		return;
        // 	}
        	this.divWork.fnSearch();
        }

        /**
          * @함수명	: fnBtnComNewOnclick
          * @desc     	: 신규 버튼 onclick 이벤트
          */
        this.fnBtnComNewOnclick = function(obj,e)
        {
        // 	var pageAddFunc = this.divWork.lookup("fnAdd");
        // 	if(gfnIsNull(pageAddFunc)){
        // 		gfnAlert("페이지에 fnAdd() 만드세요!");
        // 		return;
        // 	}
        	this.divWork.fnAdd();
        }

        /**
          * @함수명	: fnBtnComDelOnclick
          * @desc     	: 삭제 버튼 onclick 이벤트
          */
        this.fnBtnComDelOnclick = function(obj,e)
        {
        // 	var pageDeleteFunc = this.divWork.lookup("fnDelete");	
        // 	if(gfnIsNull(pageDeleteFunc)){
        // 		gfnAlert("페이지에 fnDelete() 만드세요!");
        // 		return;
        // 	}
        	this.divWork.fnDelete();
        }

        /**
          * @함수명	: fnBtnComSaveOnclick
          * @desc     	: 저장 버튼 onclick 이벤트
          */
        this.fnBtnComSaveOnclick = function(obj,e)
        {
        // 	var pageSaveFunc = this.divWork.lookup("fnSave");
        // 	if(gfnIsNull(pageSaveFunc)){
        // 		gfnAlert("페이지에 fnSave() 만드세요!");
        // 		return;
        // 	}
        	this.divWork.fnSave();
        }

        /**
          * @함수명	: fnBtnComCloseOnclick
          * @desc     	: 닫기 버튼 onclick 이벤트
          */
        this.fnBtnComCloseOnclick = function(obj,e)
        {
        // 	var pageCloseFunc = this.divWork.lookup("fnClose");
        // 	
        // 	if(gfnIsNull(pageCloseFunc)){
        // 		//각 화면에 fnClose 있는지 체크 안함...
        // 		//return;
        // 	}

        	var openId = this.fnGetFrameAguments("openId");
        	gfnTabOnClose(openId);	 
        }

        /**
          * @함수명	: fnBtnComCloseOnclick
          * @desc     	: 리모콘 버튼 onclick 이벤트
          */
        this.fnBtnRemoteOnclick = function(obj,e)
        {
        	var openId = this.fnGetFrameAguments("openId");
        	var framesInfo = application.gv_workFrameSet.frames;
        	if(framesInfo[openId]){
        		var divRemote = framesInfo[openId].form.lookup(openId + "_divRemote")
        		
        		if(gfnIsNull(divRemote)) return;
        		
        		if(divRemote.visible){
        			divRemote.set_visible(false);
        		}else{
        			divRemote.set_visible(true);
        			divRemote.divTitle.set_visible(true);
        		}
        		
        		divRemote.setOffsetTop(this.divWork.getOffsetTop());
        		
        		var systemRight = this.divWork.getOffsetRight() - 10;
        		divRemote.setOffsetRight(systemRight);
         		divRemote.setOffsetLeft(systemRight - divRemote.fvWidth);
         		divRemote.setOffsetHeight(divRemote.fvHeight);
         		
         		divRemote.fnDivFoldImgChg("M");
        	}
        }

        /**
          * @함수명	: fnCallObjPopup
          * @desc     	: 개발자 기능 : obj 버튼 onclick 이벤트
          */
        this.fnCallObjPopup = function(obj,e)
        {	
        	var pgmId = this.fnGetFrameAguments("pgmId");

        	var sArg = {	agv_form	: this.divWork
        					, agv_key		: pgmId
        				};
        	//gfnModelessPop("CompObjMgtPop", "CPOP::CompObjMgtPop.xfdl", sArg, "", 0, 0, 640, 480);
        	//gfnModelessPop("CompObjMgtPop", "CPOP::BComObjMgmtPop.xfdl", sArg);
        		
        	gfnModalPop(this, "BComObjMgmtPop", "CPOP::BComObjMgmtPop.xfdl", sArg, "fnPopCallBack", 1200, 800);
        }

        /**
          * @함수명	: fnPopCallBack
          * @desc     	: 팝업 CallBack 함수
          */
        this.fnPopCallBack = function(sPopupId,rtn)
        {
        	switch(sPopupId){
        		case "BComObjMgmtPop" :
        			break;
        		
        		default:
        			break;	
        	}
        }

        /**
          * @함수명	: fnChgObj
          * @desc     	: 개발자 기능 : obj 버튼 콤보박스
          */
        this.fnChgObj = function(obj,e)
        {
        	this.fnSetObj(e.postvalue);
        }

        
        /**
        	@function	fnSetObj()
        	@param 		type(A,B,C,D,E,F,G,H,I,J)
        	@desc   	오브젝트 타입설정
        */
        this.fnSetObj = function(type)
        {	
        	if(this.divDevelop.cboObj){
        		this.divDevelop.cboObj.set_value(type);
        	}

        	//enable 세팅
        	var idx = this.dsObjBindEn.findRow("TYPE",type);
        	if(idx >= 0){
        		this.dsObjBindEn.set_rowposition(idx);
        	}
        	
        	//visible 세팅
        	idx = this.dsObjBindVi.findRow("TYPE",type);
        	if(idx >= 0){		
        		this.dsObjBindVi.set_rowposition(idx);
        	}
        	
        	//필수체크 세팅
        	idx = this.dsObjBindEs.findRow("TYPE",type);
        	if(idx >= 0){
        		this.dsObjBindEs.set_rowposition(idx);
        	}
        	
        	//그리드 포멧 세팅
        	var idx = this.dsObjBindGrid.findRow("TYPE",type);
        	if(idx >= 0){
        		this.dsObjBindGrid.set_rowposition(idx);
        		
        		//모드 저장이 안되어 있으면 default 모드로 세팅한다.
        		if(gfnIsNull(this.dsObjBindGrid.getColumn(idx, "MODE_" + type))){
        			this.dsObjBindGrid.setColumn(idx, "MODE_" + type, "default");
        		}
        	}
        	
        	//첨부파일 모드 세팅
        	for(var i=0; i<this.dsObjBindGrid.getColCount(); i++){
        		var colvalue = this.dsObjBindGrid.getColumn(this.dsObjBindGrid.rowposition, i);		
        		if("Y" == colvalue || "N" == colvalue){
        			var divFile = this.dsObjBindGrid.getColID(i);
        			
        			var objFileComp = this.divWork.lookup(divFile);
        			if(objFileComp){
        				objFileComp.fnSetFileMode(colvalue);
        			}
        		}
        	}
        	
        	/*
        		enable, visible, grid mode loadXML() 하기전에 enableevent를 false로 적용한다.
        		적용하는 이유는 loadXML하면 무조건 0번째 로우 값으로 세팅되기 때문에 폼온로드후 원하는 모드로 바로 적용할 수 없다.
        		그래서 모드적용 (fnSetObj 펑션) 후 enableevent를 true로 풀어준다.
        	*/
        	this.dsObjBindEn.set_enableevent(true);
        	this.dsObjBindVi.set_enableevent(true);
        	this.dsObjBindGrid.set_enableevent(true);
        	this.dsObjBindEs.set_enableevent(true);
        	
        	//공통 버튼 정렬
        	gfnBtnRange(this.divComBtns.btnComClose);
        	
        	//리모컨 호출
        	var openId = application.gdsOpenMenu.getColumn(application.gdsOpenMenu.rowposition, "OPEN_ID");
        	var framesInfo = application.gv_workFrameSet.frames
        	if(framesInfo[openId].form){
        		var isFunc = new String(framesInfo[openId].form.divWork.lookup("fnRemote"));
        		if(!gfnIsNull(isFunc)){
        			framesInfo[openId].form.divWork.fnRemote.call();
        		}
        	}
        }

        /**
          * @함수명	: btnNaviOnclick
          * @desc     	: CUR 버튼 보이기 / 숨기기
          */
        this.btnNaviOnclick = function(obj,e)
        {
        	if(application.gdsUserRole.getCaseCount("ROLE_ID =='B_SYSTEM'")>0){
        		//if(application.gv_svcMode == "D") {
        			if(this.divDevelop.visible)
        			{
        				this.divDevelop.set_visible(false);
        			}
        			else
        			{
        				this.divDevelop.set_visible(true);
        			}
        		//}	
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.addEventHandler("ontimer", this.fnFormOntimer, this);
            this.divComBtns.btnComInit.addEventHandler("onclick", this.fnBtnComInitOnclick, this);
            this.divComBtns.btnComSrch.addEventHandler("onclick", this.fnBtnComSrchOnclick, this);
            this.divComBtns.btnComSave.addEventHandler("onclick", this.fnBtnComSaveOnclick, this);
            this.divComBtns.btnComNew.addEventHandler("onclick", this.fnBtnComNewOnclick, this);
            this.divComBtns.btnComDel.addEventHandler("onclick", this.fnBtnComDelOnclick, this);
            this.divComBtns.btnComPrint.addEventHandler("onclick", this.fnBtnComPrintOnclick, this);
            this.divComBtns.btnComClose.addEventHandler("onclick", this.fnBtnComCloseOnclick, this);
            this.divComBtns.btnComMyMenu.addEventHandler("onclick", this.fnBtnComMyMenuOnclick, this);
            this.divComBtns.btnRemote.addEventHandler("onclick", this.fnBtnRemoteOnclick, this);
            this.btnNaviIcon.addEventHandler("onclick", this.btnNaviOnclick, this);
            this.divDevelop.btnObj.addEventHandler("onclick", this.fnCallObjPopup, this);
            this.divDevelop.cboObj.addEventHandler("onitemchanged", this.fnChgObj, this);

        };

        this.loadIncludeScript("workFrame.xfdl", true);

       
    };
}
)();
