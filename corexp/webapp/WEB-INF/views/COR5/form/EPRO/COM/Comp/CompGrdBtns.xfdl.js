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
                this.set_name("CompGrdBtns");
                this.set_titletext("그리드 공통 기능 버튼");
                this._setFormPosition(0,0,298,28);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsExcelInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"IS_TRAN\" size=\"256\" type=\"STRING\"/><Column id=\"TRAN_NM\" size=\"256\" type=\"STRING\"/><Column id=\"XML_HEADER\" size=\"256\" type=\"STRING\"/><Column id=\"PATH\" size=\"256\" type=\"STRING\"/><Column id=\"FORMATID\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btnExcelDown", "absolute", null, "3", "22", "22", "264", null, this);
            obj.set_cssclass("btn_WF_GrdDown");
            obj.getSetter("objNm").set("엑셀다운로드");
            obj.set_taborder("0");
            obj.set_tooltiptext("엑셀다운로드");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnFilter", "absolute", null, "3", "22", "22", "240", null, this);
            obj.getSetter("objNm").set("필터");
            obj.style.set_background("#ffffffff URL('theme://images/btn_WF_GrdFilter_N.png')");
            obj.set_taborder("1");
            obj.set_tooltiptext("필터");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnHideCol", "absolute", null, "3", "22", "22", "216", null, this);
            obj.getSetter("objNm").set("컬럼 숨기기/보이기");
            obj.set_taborder("2");
            obj.set_tooltiptext("열 숨기기/취소");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnFind", "absolute", null, "3", "22", "22", "192", null, this);
            obj.getSetter("objNm").set("찾기");
            obj.set_taborder("3");
            obj.set_tooltiptext("찾기");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnMultiSort", "absolute", null, "3", "22", "22", "168", null, this);
            obj.set_cssclass("btn_WF_GrdSort");
            obj.getSetter("objNm").set("정렬");
            obj.set_taborder("4");
            obj.set_tooltiptext("정렬");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnFixCol", "absolute", null, "3", "22", "22", "144", null, this);
            obj.set_cssclass("btn_WF_GrdSellfixed");
            obj.getSetter("objNm").set("틀고정");
            obj.set_taborder("5");
            obj.set_tooltiptext("틀고정");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnGrdHeightUp", "absolute", null, "3", "22", "22", "120", null, this);
            obj.getSetter("objNm").set("그리드 높이 증가");
            obj.style.set_background("#ffffffff URL('theme://images/btn_WF_GrdSizeUp_N.png')");
            obj.set_taborder("6");
            obj.set_tooltiptext("그리드 높이 증가");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnGrdHeightDown", "absolute", null, "3", "22", "22", "96", null, this);
            obj.getSetter("objNm").set("그리드 높이 감소");
            obj.style.set_background("#ffffffff URL('theme://images/btn_WF_GrdSizeDown_N.png')");
            obj.set_taborder("7");
            obj.set_tooltiptext("그리드 높이 감소");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnColWidth", "absolute", null, "3", "22", "22", "72", null, this);
            obj.getSetter("objNm").set("컬럼 리사이즈");
            obj.style.set_background("#ffffffff URL('theme://images/btn_WF_GrdResize_N.png')");
            obj.set_taborder("9");
            obj.set_tooltiptext("컬럼 리사이즈");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnModeChng", "absolute", null, "3", "22", "22", "48", null, this);
            obj.set_cssclass("btn_WF_GrdChangeExcel");
            obj.getSetter("objNm").set("엑셀/입력 모드 변환");
            obj.set_taborder("10");
            obj.set_tooltiptext("행/열 선택 변환");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnClear", "absolute", null, "3", "22", "22", "24", null, this);
            obj.set_cssclass("btn_WF_GrdInitialization");
            obj.getSetter("objNm").set("초기화");
            obj.set_taborder("11");
            obj.set_tooltiptext("초기화");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnVisibleBtns", "absolute", null, "3", "22", "22", "0", null, this);
            obj.set_cssclass("btn_WF_GrdVisibleBtns_N");
            obj.getSetter("objNm").set("초기화");
            obj.set_taborder("13");
            obj.set_tooltiptext("그리드 기능 버튼 보이기/숨기기");
            obj.set_visible("true");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 298, 28, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("CompGrdBtns");
            		p.set_titletext("그리드 공통 기능 버튼");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item3","btnFind","tooltiptext","gdsLabel","EPRO_LABEL_00242");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","btnGrdHeightDown","tooltiptext","gdsLabel","EPRO_LABEL_00803");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","btnVisibleBtns","tooltiptext","gdsLabel","EPRO_LABEL_00806");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("CompGrdBtns.xfdl", function(exports) {
        /**
         * @파일명       	: CompGrdBtns.xfdl
         * @생성자       	: 한민희
         * @생성일자     	: 2017. 9. 4.
         * @설명			: 그리드 공통버튼
         * @최종수정자		: 한민희
         * @최종수정일자	: 2017. 9. 4.
        */  

        this.fvForm;			//대상 그리드가 속해있는 폼
        this.fvGrd;				//대상 그리드
        this.fvDataset;			//대상 그리드에 바인딩 되어 있는 데이터셋
        this.fvDivPaging		//페이징 div
        this.fvExcel;			//엑셀정보

        /**
          * @함수명	: fnDivGrdComBtnsInit
          * @input    	: objForm:Form(폼 오브젝트), objGrid:Grid(그리드), objDivPaging(페이징 div)
          * @desc   	: 초기화 (CompPaging.xfdl 의 fnDivGrdComBtnsInit 에서 호출함.)
          */
        this.fnDivGrdComBtnsInit = function(objForm,objGrid,objDivPaging,objExcel)
        {
        	this.fvForm = objForm;
        	this.fvGrd = objGrid;
        	this.fvDivPaging = objDivPaging
        	this.fvDataset = objGrid.getBindDataset();	
        	this.fvExcel = objExcel;
        	this.fnBtnVisibleBtnsOnclick();
        }

        /**
          * @함수명	: fnBtnExcelDownOnclick
          * @input    	: obj:Button(버튼 오브젝트), e:nexacro.ClickEventInfo(이벤트 변수)
          * @desc   	: 엑셀 다운로드
          */
        this.fnBtnExcelDownOnclick = function(obj,e)
        {
        	if(gfnIsNull(this.fvExcel)){
        		//예시) {isTran:"N", tranNm:"BRfqService.searchRfqPrg", dsParam:this.dsCondition}
        		gfnAlert("gfnSetGrdFunc() 함수에서 엑셀다운로드에 필요한 파라미터가 누락 되었습니다.");
        		return;
        	}	
        	
        	this.dsExcelInfo.clearData();
        	this.dsExcelInfo.addRow();
        	this.dsExcelInfo.setColumn(0,"IS_TRAN", this.fvExcel.isTran);	
        	this.dsExcelInfo.setColumn(0,"TRAN_NM", this.fvExcel.tranNm);
        	if(!gfnIsNull(this.fvExcel.formatId)){
        		this.dsExcelInfo.setColumn(0,"FORMATID", this.fvExcel.formatId);	
        	}else{
        		this.dsExcelInfo.setColumn(0,"FORMATID", this.fvGrd.formatid);	
        	}
        	this.dsExcelInfo.setColumn(0,"XML_HEADER",this.fvGrd.getFormatString());
           
        	var sSvcID = "excelDown";
        	var sController = "core.service.service.CExcelService.getExcel";
        	var sInDatasets = "dsExcelInfo=dsExcelInfo dsParam="+this.fvExcel.dsParam.name+" dsData="+this.fvDataset.name;
        	var sOutDatasets = "dsExcelInfo=dsExcelInfo";
        	var sCallbackFunc = "excelCallBakc";

        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
          * @함수명	: excelCallBakc
          * @input    	: strSvcID(트랜잭션 ID), strErrCd(트랜잭션 결과 코드), strErrMsg(트랜잭션 결과 메시지)
          * @desc   	: 엑셀 콜백
          */
        this.excelCallBakc =  function(strSvcID,strErrCd,strErrMsg)
        {
        	if(strErrCd < 0) return;
           
        	switch(strSvcID){
        		case "excelDown" :
        			var path = this.dsExcelInfo.getColumn(0,"PATH");
        			var downUrl = application.gvDomain + "/controller/updown/downExcelFile?excelFile="+escape(encodeURIComponent(path));
        			system.execBrowser(downUrl);
        		break;
              
        		default:
        		break;   
           }
        }

        /**
          * @함수명	: fnBtnFilterOnclick
          * @input    	: obj:Button(버튼 오브젝트), e:nexacro.ClickEventInfo(이벤트 변수)
          * @desc   	: 필터
          */
        this.fnBtnFilterOnclick = function(obj,e)
        {
        	var sArg = {	arg_bBgColor	: false
        					, arg_grid		: this.fvGrd
        					, arg_divPaging		: this.fvDivPaging
        				};
        	gfnModalPop(this.fvForm, "CompGrdFilterPop", "CPOP::CompGrdFilterPop.xfdl", sArg, "", 600, 285);
        }

        /**
          * @함수명	: fnBtnHideColOnclick
          * @input    	: obj:Button(버튼 오브젝트), e:nexacro.ClickEventInfo(이벤트 변수)
          * @desc   	: 열 숨기기
          */
        this.fnBtnHideColOnclick = function(obj,e)
        {		
        	var sArg = {	
        					arg_bBgColor	: false
        					, arg_grid		: this.fvGrd
        				};
        	gfnModalPop(this.fvForm, "CompGrdColumnHidePop", "CPOP::CompGrdColumnHidePop.xfdl", sArg, "", 600, 285);
        }

        /**
          * @함수명	: fnBtnMultiSortOnclick
          * @input    	: obj:Button(버튼 오브젝트), e:nexacro.ClickEventInfo(이벤트 변수)
          * @desc   	: 정렬
          */
        this.fnBtnMultiSortOnclick = function(obj,e)
        {	
        	var sArg = {	
        					arg_bBgColor	: false
        					, arg_grid		: this.fvGrd
        				};
        	gfnModalPop(this.fvForm, "CompGrdSortPop", "CPOP::CompGrdSortPop.xfdl", sArg, "", 350, 280);
        }

        /**
          * @함수명	: fnBtnFixColOnclick
          * @input     	: obj:Button(버튼 오브젝트), e:nexacro.ClickEventInfo(이벤트변수)
          * @desc     	: 틀고정
          */
        this.fnBtnFixColOnclick = function(obj,e)
        {
        	var sArg = {	
        					arg_bBgColor	: false
        					, arg_grid		: this.fvGrd
        				};
        	gfnModalPop(this.fvForm, "CompGrdFixPop", "CPOP::CompGrdFixPop.xfdl", sArg, "", 300, 80);
        }

        /**
          * @함수명	: fnBtnGrdHeightUpOnclick
          * @input     	: obj:Button(버튼 오브젝트), e:nexacro.ClickEventInfo(이벤트변수)
          * @desc     	: 그리드 높이 증가
          */
        this.fnBtnGrdHeightUpOnclick = function(obj,e)
        {
        	if(this.fvGrd.getOffsetHeight() < 1000){
        		if(this.fvGrd.parent == "[object Div]"){
        			this.fvGrd.parent.set_height(Number(this.fvGrd.parent.getOffsetHeight())+150);			
        		}else{
        			this.fvGrd.setOffsetHeight(Number(this.fvGrd.getOffsetHeight())+150);
        		}
        		
        		var openId = application.gdsOpenMenu.getColumn(application.gdsOpenMenu.rowposition, "OPEN_ID");
        		var framesInfo = application.gv_workFrameSet.frames
        		framesInfo[openId].form.divWork.resetScroll();
        		
        		this.fnSetDivHeight(this.fvGrd);
        	}	
        }

        /**
          * @함수명	: fnBtnGrdHeightDownOnclick
          * @input     	: obj:Button(버튼 오브젝트), e:nexacro.ClickEventInfo(이벤트변수)
          * @desc     	: 그리드 높이 감소
          */
        this.fnBtnGrdHeightDownOnclick = function(obj,e)
        {
        	if(this.fvGrd.getOffsetHeight() > 180){
        		if(this.fvGrd.parent == "[object Div]"){
        			this.fvGrd.parent.set_height(Number(this.fvGrd.parent.getOffsetHeight())-150);
        		}else{
        			this.fvGrd.set_height(Number(this.fvGrd.getOffsetHeight())-150);
        		}
        		
        		var openId = application.gdsOpenMenu.getColumn(application.gdsOpenMenu.rowposition, "OPEN_ID");
        		var framesInfo = application.gv_workFrameSet.frames
        		framesInfo[openId].form.divWork.resetScroll();
        		
        		this.fnSetDivHeight(this.fvGrd);
        	}
        }

        /**
          * @함수명	: fnSetDivHeight
          * @input     	: obj:Button(버튼 오브젝트), target(todo : 탭 존재할때 탭페이지 넣는다.)
          * @desc     	: 그리드 높이 조절
          */
        this.fnSetDivHeight = function(obj ,target)
        {
        	var targetDiv;
        	var objs = obj.parent;
        	for(var i =0 ; i < 10; i++){
        		objs = objs.parent;
        		if(objs instanceof Form){
        			break;
        		}
        	}
        	
        	var arrDivs = gfnDivHeightSort(objs);
        	
        	//대상 Div를 찾음
        	var btnDiv = obj.parent;
        	for(var i=0;i<arrDivs.length;i++){
        		if(btnDiv == arrDivs[i]){
        			targetDiv = arrDivs[i];
        			break;
        		}
        	}
        	
        	if(!targetDiv){
        		return;
        	}

        	for(var i=0;i<arrDivs.length;i++){
        		//이동 대상 Div 일 경우
        		if(arrDivs[i].getOffsetTop() > targetDiv.getOffsetTop()){
        			var preDiv = arrDivs[i-1];
        			if(!preDiv.visible){
        				preDiv = arrDivs[i-2];
        			}
        			
        			arrDivs[i].setOffsetTop(parseInt(preDiv.getOffsetTop()) + parseInt(preDiv.getOffsetHeight())+5);
        		}
        	}
        	objs.resetScroll();	
        }

        /**
          * @함수명	: fnBtnColWidthOnclick
          * @input     	: obj:Button(버튼 오브젝트), e:nexacro.ClickEventInfo(이벤트변수)
          * @desc     	: 컬럼 리사이즈
          */
        this.fnBtnColWidthOnclick = function(obj,e)
        {	
        	if(this.fvGrd.autofittype == "none"){
        		this.fvGrd.set_autofittype("col");
        	}else{
        		this.fvGrd.set_autofittype("none");
        	}
        }

        /**
          * @함수명	: fnBtnModeChngOnclick
          * @input     	: obj:Button(버튼 오브젝트), e:nexacro.ClickEventInfo(이벤트변수)
          * @desc     	: 엑셀/입력 모드 변경
          */
        this.fnBtnModeChngOnclick = function(obj,e)
        {	
        	if(this.fvGrd.autoenter == "none"){		
        		this.fvGrd.set_autoenter("select");
        		this.fvGrd.set_selecttype("row");
        		obj.set_cssclass("btn_WF_GrdChangeEdit");
        	}else{
        		this.fvGrd.set_autoenter("none");
        		this.fvGrd.set_selecttype("area");
        		obj.set_cssclass("btn_WF_GrdChangeExcel");
        	}	
        }

        /**
          * @함수명	: fnBtnClearOnclick
          * @input     	: obj:Button(버튼 오브젝트), e:nexacro.ClickEventInfo(이벤트변수)
          * @desc     	: 초기화
          */
        this.fnBtnClearOnclick = function(obj,e)
        {	
        	var orgFormatId = this.fvGrd.formatid;
        	this.fvGrd.set_enableevent(false);
        	this.fvGrd.set_formats(this.fvGrd.orgFormatBak);
        	this.fvGrd.set_formatid(orgFormatId);
        	this.fvGrd.set_enableevent(true);
        	
        	var ds = this.fvGrd.getBindDataset();
        	ds.filter("");
        }

        /**
        	@function	fnBtnVisibleBtnsOnclick()
        	@desc   	공통버튼 보이기/안보이기 버튼 onclick 이벤트
        */ 
        this.fnBtnVisibleBtnsOnclick = function(obj,e)
        {
        	if(this.btnVisibleBtns.cssclass == "btn_WF_GrdVisibleBtns_A")
        	{
        		this.btnExcelDown.set_visible(false);
        		this.btnFilter.set_visible(false);
        		this.btnHideCol.set_visible(false);
        		this.btnFind.set_visible(false);
        		this.btnMultiSort.set_visible(false);
        		this.btnFixCol.set_visible(false);		
        		this.btnGrdHeightUp.set_visible(false);
        		this.btnGrdHeightDown.set_visible(false);		
        		this.btnColWidth.set_visible(false);		
        		this.btnModeChng.set_visible(false);
        		this.btnClear.set_visible(false);
        		
        		this.btnVisibleBtns.set_cssclass("btn_WF_GrdVisibleBtns_N");
        	}
        	else if(this.btnVisibleBtns.cssclass == "btn_WF_GrdVisibleBtns_N")
        	{
        		if(gfnIsNull(this.fvGrd)) return;
        	
        		if(this.fvGrd.f_excel=="Y") this.btnExcelDown.set_visible(true);
        		else this.btnExcelDown.set_visible(false);
        		
        // 		if(this.fvGrd.f_filter=="Y") this.btnFilter.set_visible(true);
        // 		else this.btnFilter.set_visible(false);		
        		
        // 		if(this.fvGrd.f_hide=="Y") this.btnHideCol.set_visible(true);
        // 		else this.btnHideCol.set_visible(false);
        		
        // 		if(this.fvGrd.f_find=="Y") this.btnFind.set_visible(true);
        // 		else this.btnFind.set_visible(false);
        		
        		if(this.fvGrd.f_sort=="Y") this.btnMultiSort.set_visible(true);
        		else this.btnMultiSort.set_visible(false);
        		
        		if(this.fvGrd.f_fix=="Y") this.btnFixCol.set_visible(true);
        		else this.btnFixCol.set_visible(false);
        		
        		if(this.fvGrd.f_height=="Y")
        		{
        			this.btnGrdHeightUp.set_visible(true);
        			this.btnGrdHeightDown.set_visible(true);
        		}
        		else
        		{	
        			this.btnGrdHeightUp.set_visible(false);
        			this.btnGrdHeightDown.set_visible(false);
        		}
        				
        // 		if(this.fvGrd.f_colSize=="Y") this.btnColWidth.set_visible(true);
        // 		else this.btnColWidth.set_visible(false);
        		
        		if(this.fvGrd.f_mode=="Y") this.btnModeChng.set_visible(true);
        		else this.btnModeChng.set_visible(false);
        		
        		if(this.fvGrd.f_init=="Y") this.btnClear.set_visible(true);
        		else this.btnClear.set_visible(false);
        		
        		
        		//정렬
        // 		if(this.btnMultiSort.visible){
        // 			
        // 			var name = "pdiv_multiSort";	
        // 			
        // 			var pdiv = new PopupDiv();
        // 			pdiv.init(name, "absolute", 0, 0, 250, 237);
        // 			this.fvGrd.parent.addChild(pdiv.name, pdiv);	
        // 			pdiv.style.set_background_color("#ffffffff");
        // 			pdiv.style.set_border("1px solid gray");
        // 			//pdiv.addEventHandler("oncloseup", this._gfn_sortPdivOnCloseUpHandler, this);
        // 			pdiv.set_url("CCOMP::CompGrdSortPop.xfdl");
        // 			pdiv.show();
        // 			
        // 			// 대상 그리드 참조
        // 			//pdiv.grid = grid;	
        // 				
        // 			// 팝업 참조
        // 			//this.fvGrd.multiSortPopupDiv = pdiv;
        // 
        // 
        // 		}
        // 		
        // 		//틀고정 기능 초기화
        // 		if(this.btnFixCol.visible)
        // 		{
        // 			//this._gfn_setFixPopDiv(this.fvGrd);
        // 		}
        // 		
        // 		//숨기기 기능 초기화
        // 		if(this.btnHideCol.visible)
        // 		{
        // 			//this._gfn_setHidePopDiv(this.fvGrd);
        // 		}
        		
        		this.btnVisibleBtns.set_cssclass("btn_WF_GrdVisibleBtns_A");
        	}
        	
        	gfnBtnRange(this.btnVisibleBtns);		
        }

        /**
          * @함수명	: fnBtnFindOnclick
          * @input    	: obj:Button(버튼 오브젝트), e:nexacro.ClickEventInfo(이벤트 변수)
          * @desc   	: 찾기
          */
        this.fnBtnFindOnclick = function(obj,e)
        {	
        	var sArg = {	
        					arg_bBgColor	: false
        					, arg_grid		: this.fvGrd
        				};
        	gfnModalPop(this.fvForm, "CompGrdFindPop", "CPOP::CompGrdFindPop.xfdl", sArg, "", 300, 150);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnExcelDown.addEventHandler("onclick", this.fnBtnExcelDownOnclick, this);
            this.btnFilter.addEventHandler("onclick", this.fnBtnFilterOnclick, this);
            this.btnHideCol.addEventHandler("onclick", this.fnBtnHideColOnclick, this);
            this.btnFind.addEventHandler("onclick", this.fnBtnFindOnclick, this);
            this.btnMultiSort.addEventHandler("onclick", this.fnBtnMultiSortOnclick, this);
            this.btnFixCol.addEventHandler("onclick", this.fnBtnFixColOnclick, this);
            this.btnGrdHeightUp.addEventHandler("onclick", this.fnBtnGrdHeightUpOnclick, this);
            this.btnGrdHeightDown.addEventHandler("onclick", this.fnBtnGrdHeightDownOnclick, this);
            this.btnColWidth.addEventHandler("onclick", this.fnBtnColWidthOnclick, this);
            this.btnModeChng.addEventHandler("onclick", this.fnBtnModeChngOnclick, this);
            this.btnClear.addEventHandler("onclick", this.fnBtnClearOnclick, this);
            this.btnVisibleBtns.addEventHandler("onclick", this.fnBtnVisibleBtnsOnclick, this);

        };

        this.loadIncludeScript("CompGrdBtns.xfdl", true);

       
    };
}
)();
