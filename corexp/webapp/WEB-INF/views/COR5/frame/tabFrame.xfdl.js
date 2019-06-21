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
                this.set_cssclass("frm_MDI");
                this.set_name("form");
                this.set_scrollbars("none");
                this.set_titletext("탭프레임");
                this._setFormPosition(0,0,1072,30);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "0", "0", null, "33", "0", null, this);
            obj.set_cssclass("sta_MDI_Bg");
            obj.style.set_color("#333333ff");
            obj.set_taborder("25");
            this.addChild(obj.name, obj);

            obj = new Button("btnCloseAll", "absolute", null, "3", "24", "24", "1", null, this);
            obj.set_cssclass("btn_Mdi_Close");
            obj.style.set_padding("0 0 0 20");
            obj.set_tooltiptext("모두닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btnMaximize", "absolute", null, "3", "24", "24", "97", null, this);
            obj.set_cssclass("btn_Mdi_Max");
            obj.style.set_padding("0 0 0 7");
            obj.set_tooltiptext("최대화");
            this.addChild(obj.name, obj);

            obj = new Div("divTab", "absolute", "41", "1", null, "46", "203", null, this);
            obj.set_scrollbars("fixedhorz");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btnCascade", "absolute", null, "3", "24", "24", "73", null, this);
            obj.set_cssclass("btn_T");
            obj.set_tooltiptext("타일");
            this.addChild(obj.name, obj);

            obj = new Button("btnHome", "absolute", "0", "0", "33", "33", null, null, this);
            obj.set_cssclass("btn_MDI_Home");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("btnMdiList", "absolute", null, "3", "46", "24", "121", null, this);
            obj.set_cssclass("btn_MdiList");
            obj.set_tooltiptext("탭리스트");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdvOpenMenu", "absolute", "715", "66", "200", "254", null, null, this);
            obj.style.set_background("#7ab7cfff 0cfff");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Grid("grdOpenMenu", "absolute", "0", "0", null, null, "0", "40", this.pdvOpenMenu);
            obj.set_autofittype("col");
            obj.set_binddataset("gdsOpenMenu");
            obj.set_taborder("6");
            obj.set_useselcolor("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"107\"/><Column size=\"22\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:MENU_NM\"/><Cell col=\"2\" displaytype=\"image\" edittype=\"none\" style=\"align:center middle;\" text=\"URL('img::img_MDI_MenuClose.png')\"/></Band></Format></Formats>");
            this.pdvOpenMenu.addChild(obj.name, obj);
            obj = new Button("btnChkClose", "absolute", "7.74%", "223", null, "23", "50.97%", null, this.pdvOpenMenu);
            obj.set_taborder("7");
            obj.set_text("선택닫기");
            this.pdvOpenMenu.addChild(obj.name, obj);
            obj = new Button("btnAllClose", "absolute", "50.97%", "223", null, "23", "7.74%", null, this.pdvOpenMenu);
            obj.set_taborder("8");
            obj.set_text("전체닫기");
            this.pdvOpenMenu.addChild(obj.name, obj);

            obj = new Button("btnTilevertical", "absolute", null, "3", "24", "24", "49", null, this);
            obj.set_cssclass("btn_Mdi_ver");
            obj.set_taborder("19");
            obj.set_tooltiptext("수직");
            this.addChild(obj.name, obj);

            obj = new Button("btnTilehorizontal", "absolute", null, "3", "24", "24", "25", null, this);
            obj.set_cssclass("btn_Mdi_hor");
            obj.set_taborder("20");
            obj.set_tooltiptext("수평");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrev", "absolute", null, "3", "16", "24", "183", null, this);
            obj.set_cssclass("btnPrev");
            obj.set_taborder("21");
            this.addChild(obj.name, obj);

            obj = new Button("btnNext", "absolute", null, "3", "16", "24", "167", null, this);
            obj.set_cssclass("btnNext");
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            obj = new Button("btnTmplTab", "absolute", "1.77%", "57", null, "24", "56.9%", null, this);
            obj.set_taborder("24");
            obj.set_text("탭css 샘플. 지우지 말것");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 46, this.divTab,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("fixedhorz");
            		p.set_taborder("2");

            	}
            );
            this.divTab.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 200, 254, this.pdvOpenMenu,
            	//-- Layout function
            	function(p) {
            		p.style.set_background("#7ab7cfff 0cfff");
            		p.set_visible("false");

            	}
            );
            this.pdvOpenMenu.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1072, 30, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("MDI");
            		p.set_cssclass("frm_MDI");
            		p.set_scrollbars("none");
            		p.set_titletext("탭프레임");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item6","btnCloseAll","tooltiptext","gdsLabel","EPRO_LABEL_00984");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("tabFrame.xfdl", function(exports) {
        /**
         * @파일명       	: tabFrame.xfdl
         * @생성자       	: 한민희
         * @생성일자     	: 2017. 9. 6.
         * @설명			: 탭프레임
         * @최종수정자		: 한민희
         * @최종수정일자	: 2017. 9. 6.
        */  

        /**
          * @함수명	: fnAddTab
          * @input     	: openId {String} OPEN_ID
        				  strTitle {String} PGM_NM
          * @desc     	: 탭 추가
          */
        this.fnAddTab = function (openId,strTitle)
        {
        	var tabId;
        	var closeBtnId;
        	var lastIdx;	//화면에 보이고 있는 마지막 탭 순번
        	var lastTab;	//화면에 보이고 있는 마지막 탭

        	tabId = "TAB_" + openId;
        	lastIdx = (this.divTab.components.length-1) > 0 ? (this.divTab.components.length-1) : 0;
        	lastTab = gfnIsNull(this.divTab.components[lastIdx]) ? 0 : this.divTab.components[lastIdx].getOffsetRight();
        	
        	//생성되는 탭 버튼
        	var tabBtn = new Button();
            var nWidth = application.gv_multyLangage ? (strTitle.length * 6) + 30 : (strTitle.length * 13) + 30;	
        	tabBtn.init(tabId, "absolute", lastTab, 1, nWidth, 30);
        	tabBtn.set_text(strTitle);
        	//tabBtn.style.set_align("left");
        	//tabBtn.style.set_padding("0 20 0 10");
        	tabBtn.set_cssclass("btn_MDI_TabS");
        	
        	tabBtn.set_tooltiptext(strTitle);	
        	tabBtn.setEventHandler("onclick", this.fnBtnTabOnclick, this);
        	tabBtn.setEventHandler("onrbuttonup", this.fnBtnTabOnrbuttonup, this);
        	
        	this.divTab.addChild(tabId, tabBtn);
        	tabBtn.set_visible(false);
        	tabBtn.show();
        	
        	var objSize = nexacro.getTextSize( strTitle, this.btnTmplTab.currentstyle.font );
        	tabBtn.set_width(parseInt(objSize.nx) + 40);
        	tabBtn.set_visible(true);	
        	
        	//닫기 버튼
        	closeBtnId = "CLOSE_" + openId;
        	var closeBtn = new Button();	
        	closeBtn.init(closeBtnId, "absolute", tabBtn.getOffsetRight(), 1, 30,28);

        	//closeBtn.set_text("X");
        	//closeBtn.set_tooltiptext("닫기");
        	closeBtn.set_cssclass("btn_MDI_TabCloseS");
        	
        	closeBtn.setEventHandler("onclick", this.fnBtnCloseOnclick, this);
        	closeBtn.set_visible(true);	
        	this.divTab.addChild(closeBtnId, closeBtn);
        	closeBtn.show();
        	
        	gfnRedrawTab(openId);
         
        	this.divTab.resetScroll();
        }

         
        /**
          * @함수명	: fnBtnTabOnclick
          * @input     	: obj:Button(버튼 오브젝트), e:ClickEventInfo(이벤트변수)
          * @desc     	: 탭 버튼 onclick 이벤트
          */
        this.fnBtnTabOnclick = function (obj,e)
        {
        	var openId = obj.name.split("TAB_").join("");
        	gfnActiveFrame(openId);
        }

        /**
          * @함수명	: fnBtnTabOnrbuttonup
          * @input     	: obj:Button(버튼 오브젝트), e:ClickEventInfo(이벤트변수)
          * @desc     	: 탭에서 오른쪽 마우스 onclick 이벤트
          */
        this.fnBtnTabOnrbuttonup = function (obj,e)
        {
        	var objPopupMenu = "";
        	var openId = obj.name.split("TAB_").join("");
        	var sPopMenuNm = "tabOnRbuttonPopMenu_" + openId;

        	if(this.components[sPopMenuNm]) this.components[sPopMenuNm].destroy();
        	
        	objPopupMenu = new PopupMenu(sPopMenuNm, "absolute", 0, 0, 100, 100);

        	var ds = new Dataset;
        	ds.addColumn("ID", "string");
        	ds.addColumn("NM", "string");
        	ds.addColumn("LVL", "string");
        	ds.addColumn("ENABLE", "string");
        	ds.addRow();
        	ds.setColumn(0, "ID", "close");
        	ds.setColumn(0, "NM", "Close All But This");
        	ds.setColumn(0, "LVL", 0);
        	ds.setColumn(0, "ENABLE", 1);
        	
        	objPopupMenu.set_idcolumn("ID");
        	objPopupMenu.set_userdatacolumn("ID");
        	objPopupMenu.set_captioncolumn("NM");
        	objPopupMenu.set_levelcolumn("LVL");
        	objPopupMenu.set_enablecolumn("ENABLE");
        	
         	objPopupMenu.setInnerDataset(ds);
        	
        	objPopupMenu.setEventHandler("onmenuclick", this.fnBtnTabPopMenuOnmenuclick, this);
        	
        	this.addChild(sPopMenuNm, objPopupMenu);
        	
        	objPopupMenu.show();
        		
        	var x = nexacro.toNumber(nexacro.System.getCursorX()) - nexacro.toNumber(system.clientToScreenX(application.mainframe, 0))+10;
        	var y = nexacro.toNumber(nexacro.System.getCursorY()) - nexacro.toNumber(system.clientToScreenY(application.mainframe, 0))+10;

        	objPopupMenu.trackPopup(x, y);
        }

        /**
          * @함수명	: fnBtnTabPopMenuOnmenuclick
          * @input     	: obj {PopupMenu} PopupMenu
        				  e {MenuClickEventInfo} MenuClickEventInfo
          * @desc     	: 탭 팝업메뉴 onclick 이벤트
          */
        this.fnBtnTabPopMenuOnmenuclick = function(obj,e)
        {
            var openId = obj.name.split("tabOnRbuttonPopMenu_").join("");
        	gfnTabOnClose(openId, true);
        }

        /**
          * @함수명	: fnBtnCloseOnclick
          * @input     	: obj:Button(버튼 오브젝트), e:ClickEventInfo(이벤트변수)
          * @desc     	: 탭 닫기 버튼 onclick 이벤트
          */
        this.fnBtnCloseOnclick = function (obj,e)
        {
            var openId = obj.name.split("CLOSE_").join("");
        	gfnTabOnClose(openId);
        }

        /**
          * @함수명	: fnGrdOpenMenuOncellclick
          * @input     	: obj:Grid(그리드 오브젝트), e:nexacro.GridClickEventInfo(이벤트변수)
          * @desc     	: 열려있는 화면목록이 뜨는 그리드의 oncellclick 이벤트
          */
        this.fnGrdOpenMenuOncellclick = function(obj,e)
        {
        	var openId = application.gdsOpenMenu.getColumn(application.gdsOpenMenu.rowposition, "OPEN_ID");
        	
        	if("MENU_NM" == gfnGrdBindColNm(obj, e.cell)){
        		gfnActiveFrame(openId);
        	}else if("CHECKED" != gfnGrdBindColNm(obj, e.cell)){
        		gfnTabOnClose(openId);
        	}
        }

        /**
          * @함수명	: fnBtnChkCloseOnclick
          * @input     	: obj:Button(버튼 오브젝트), e:nexacro.ClickEventInfo(이벤트변수)
          * @desc     	: 열려있는 화면목록이 뜨는 그리드에서 선택한 화면 닫기
          */
        this.fnBtnChkCloseOnclick = function(obj,e)
        {
        	if(!gfnIsGrdChk(application.gdsOpenMenu)){
        		gfnAlert("선택된 화면이 없습니다");
        		return;
        	}
        		
        	for(var i=application.gdsOpenMenu.getRowCount()-1; i>=0; i--){
        		if("1" == application.gdsOpenMenu.getColumn(i, "CHECKED")){
        			gfnTabOnClose(application.gdsOpenMenu.getColumn(i, "OPEN_ID"));
        		}		
        	}
        }

        /**
          * @함수명	: fnBtnAllCloseOnclick
          * @input     	: obj:Button(버튼 오브젝트), e:nexacro.ClickEventInfo(이벤트변수)
          * @desc     	: 열려있는 화면목록이 뜨는 그리드에서 전체 화면 닫기
          */
        this.fnBtnAllCloseOnclick = function(obj,e)
        {
        	this.fnRemoveTrashForm();
        	gfnTabOnClose(null);
        }

        /**
          * @함수명	: fnRemoveTrashForm
          * @desc     	: 탭에 없는데 남아있는 화면 삭제
          */
        this.fnRemoveTrashForm = function()
        {
        	var framesInfo = application.gv_workFrameSet.frames;
        	if(application.gdsOpenMenu.getRowCount() < framesInfo.length){
        		for(var i=framesInfo.length-1; i>=0; i--){
        			var nRow = application.gdsOpenMenu.findRow( "OPEN_ID", framesInfo[i].id );
        			
        			if(nRow < 0){
        				framesInfo[i].destroy();
        			}
        		}
        	}
        }

        /**
          * @함수명	: fnBtnMdiListOnclick
          * @input     	: obj:Button(버튼 오브젝트), e:nexacro.ClickEventInfo(이벤트변수)
          * @desc     	: 탭리스트 열기
          */
        this.fnBtnMdiListOnclick = function(obj,e)
        {
        	if(application.gdsOpenMenu.getRowCount() < 1) return;
        	this.pdvOpenMenu.trackPopupByComponent(obj, 0, 30);
        }

        /**
          * @함수명	: fnBtnMaximizeOnclick
          * @input     	: obj:Button(버튼 오브젝트), e:nexacro.ClickEventInfo(이벤트변수)
          * @desc     	: maximize
          */
        this.fnBtnMaximizeOnclick = function(obj,e)
        {
        	this.fnRemoveTrashForm();
        	this.fnArrangeWin("maximize");	
        }

        /**
          * @함수명	: fnBtnCascadeOnclick
          * @input     	: obj:Button(버튼 오브젝트), e:nexacro.ClickEventInfo(이벤트변수)
          * @desc     	: cascade
          */
        this.fnBtnCascadeOnclick = function(obj,e)
        {
        	this.fnRemoveTrashForm();
        	this.fnArrangeWin("cascade");	
        }

        /**
          * @함수명	: fnBtnTileverticalOnclick
          * @input     	: obj:Button(버튼 오브젝트), e:nexacro.ClickEventInfo(이벤트변수)
          * @desc     	: tilevertical
          */
        this.fnBtnTileverticalOnclick = function(obj,e)
        {
        	this.fnRemoveTrashForm();
        	this.fnArrangeWin("tilevertical");	
        }

        /**
          * @함수명	: fnBtnTilehorizontalOnclick
          * @input     	: obj:Button(버튼 오브젝트), e:nexacro.ClickEventInfo(이벤트변수)
          * @desc     	: tilehorizontal
          */
        this.fnBtnTilehorizontalOnclick = function(obj,e)
        {
        	this.fnRemoveTrashForm();
        	this.fnArrangeWin("tilehorizontal");	
        }

        /**
          * @함수명	: fnBtnCloseAllOnclick
          * @input     	: obj:Button(버튼 오브젝트), e:nexacro.ClickEventInfo(이벤트변수)
          * @desc     	: closeAll
          */
        this.fnBtnCloseAllOnclick = function(obj,e)
        {	
        	this.fnRemoveTrashForm();
        	this.fnArrangeWin("closeAll");	
        }

        /**
          * @함수명	: fnArrangeWin
          * @input     	: strType {String} 정렬할 명령어
          * @desc     	: 열려있는 workFrame 화면을 최대화, cascade 등등으로 정렬
          */
        this.fnArrangeWin = function(strType) 
        {
        	// workFrame영역에 open된 childFrame 갯수
        	var iFramesCnt = application.gv_workFrameSet.frames.length;
        	
        	if(application.gdsOpenMenu.getRowCount() < 1) return;

        	switch(strType){
        		case "maximize" :
        			for(var i=0; i<iFramesCnt; i++){
        				application.gv_workFrameSet.frames[i].set_openstatus("maximize");		
        				application.gv_workFrameSet.frames[i].set_showtitlebar(false);		
        				application.gv_workFrameSet.frames[i].style.set_border("0 solid #006666ff");
        			}
        		break;
        	   
        		case "closeAll" :		
        			gfnTabOnClose(null);			
        	    break;
        	    
        	    case "minimize" :
        			for (i=0; i<iFramesCnt; i++){			
        				application.gv_workFrameSet.frames[i].set_showtitlebar(true);
        				application.gv_workFrameSet.frames[i].style.set_border("1 solid #7f7f7bff");
        				application.gv_workFrameSet.frames[i].style.set_bordertype("round 3 3");
        				application.gv_workFrameSet.frames[i].set_openstatus("minimize");		
        			}
        			
        			application.gv_workFrameSet.arrange(strType);
        	    break;
        	    
        	    default :
        			for (i=0; i<iFramesCnt; i++){			
        				application.gv_workFrameSet.frames[i].set_showtitlebar(true);
        				application.gv_workFrameSet.frames[i].style.set_border("1 solid #7f7f7bff");
        				application.gv_workFrameSet.frames[i].style.set_bordertype("round 3 3");
        				application.gv_workFrameSet.frames[i].set_openstatus("normal");							
        			}
        			
        			application.gv_workFrameSet.arrange(strType);			
        	    break;	   
        	}
        }

        /**
          * @함수명	: fnBtnPrevOnclick
          * @input     	: obj:Button(버튼 오브젝트), e:nexacro.ClickEventInfo(이벤트변수)
          * @desc     	: 탭 왼쪽으로 스크롤
          */
        this.fnBtnPrevOnclick = function(obj,e)
        {
        	this.divTab.hscrollbar.set_pos(this.divTab.hscrollbar.pos - 120);
        }

        /**
          * @함수명	: fnBtnNextOnclick
          * @input     	: obj:Button(버튼 오브젝트), e:nexacro.ClickEventInfo(이벤트변수)
          * @desc     	: 탭 오른쪽으로 스크롤
          */
        this.fnBtnNextOnclick = function(obj,e)
        {
        	this.divTab.hscrollbar.set_pos(this.divTab.hscrollbar.pos + 120);
        }

        /**
          * @함수명	: fnBtnHomeOnclick
          * @input     	: obj:Button(버튼 오브젝트), e:nexacro.ClickEventInfo(이벤트변수)
          * @desc     	: 메인화면으로 이동
          */
        this.fnBtnHomeOnclick = function(obj,e)
        {
        	this.fnRemoveTrashForm();
        	gfnRedrawTab("", true);
        	gfnCallMain();
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnCloseAll.addEventHandler("onclick", this.fnBtnCloseAllOnclick, this);
            this.btnMaximize.addEventHandler("onclick", this.fnBtnMaximizeOnclick, this);
            this.btnCascade.addEventHandler("onclick", this.fnBtnCascadeOnclick, this);
            this.btnHome.addEventHandler("onclick", this.fnBtnHomeOnclick, this);
            this.btnMdiList.addEventHandler("onclick", this.fnBtnMdiListOnclick, this);
            this.pdvOpenMenu.grdOpenMenu.addEventHandler("oncellclick", this.fnGrdOpenMenuOncellclick, this);
            this.pdvOpenMenu.btnChkClose.addEventHandler("onclick", this.fnBtnChkCloseOnclick, this);
            this.pdvOpenMenu.btnAllClose.addEventHandler("onclick", this.fnBtnAllCloseOnclick, this);
            this.btnTilevertical.addEventHandler("onclick", this.fnBtnTileverticalOnclick, this);
            this.btnTilehorizontal.addEventHandler("onclick", this.fnBtnTilehorizontalOnclick, this);
            this.btnPrev.addEventHandler("onclick", this.fnBtnPrevOnclick, this);
            this.btnNext.addEventHandler("onclick", this.fnBtnNextOnclick, this);
            this.btnTmplTab.addEventHandler("onclick", this.fnBtnChkCloseOnclick, this);

        };

        this.loadIncludeScript("tabFrame.xfdl", true);

       
    };
}
)();
