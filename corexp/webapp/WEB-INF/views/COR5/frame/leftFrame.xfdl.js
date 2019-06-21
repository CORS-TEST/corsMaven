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
                this.set_name("leftFrame");
                this.set_scrollbars("none");
                this.set_titletext("Left 레이아웃(메뉴)");
                this.set_visible("true");
                this._setFormPosition(0,0,230,798);
            }
            this.style.set_background("#4d7990ff");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsLeftMenu", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMyMenu", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("sta_menuLine", "absolute", "0", "0", "29", "34", null, null, this);
            obj.set_cssclass("sta_TF_Line");
            obj.set_taborder("4");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "0%", "0", "30", null, null, "0", this);
            obj.set_cssclass("sta_LF_Bg");
            obj.set_taborder("3");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_menuLine00", "absolute", "30", "0", "29", "33", null, null, this);
            obj.set_cssclass("sta_TF_Line");
            obj.set_taborder("5");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdvMenu", "absolute", "310", "95", "198", "100%", null, null, this);
            obj.set_cssclass("pdiv_TF_Menubg");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btnExpand", "absolute", null, "45%", "20", null, "2", "45%", this.pdvMenu);
            obj.set_taborder("1");
            obj.set_text(">");
            this.pdvMenu.addChild(obj.name, obj);
            obj = new Grid("grd_menu", "absolute", "-1", "0", "100%", "100%", null, null, this.pdvMenu);
            obj.set_cssclass("grd_LF_Tree");
            obj.set_taborder("2");
            obj.set_binddataset("dsLeftMenu");
            obj.set_scrollbars("autovert");
            obj.set_treeuseline("false");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("collapse,all");
            obj.style.set_padding("4 10 4 20");
            obj.getSetter("objNm").set("마이메뉴");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"400\"/></Columns><Rows><Row size=\"33\"/></Rows><Band id=\"body\" style=\"cellpadding:2 4 2 10;\"><Cell displaytype=\"tree\" edittype=\"tree\" style=\"font:EXPR(LINK_URL == '' ? 'bold 9 굴림' : '9 굴림');selectfont:EXPR(LINK_URL == '' ? 'bold 9 굴림' : '9 굴림'); :mouseover {selectbackground:URL('theme://img/img_LF_TreeSelect.png') repeat-x;}\" text=\"bind:MENU_NM\" treelevel=\"bind:MENU_LEVEL\" treestartlevel=\"0\"/></Band></Format></Formats>");
            this.pdvMenu.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "0", "31", "29", "34", null, null, this);
            obj.set_cssclass("btn_WF_LeftMenuFA");
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Button("btn_setting", "absolute", "0", "65", "29", "33", null, null, this);
            obj.set_cssclass("btn_TF_UserSetting");
            obj.style.set_border("1 solid #31596bff,0 solid #31596bff");
            obj.style.set_bordertype("normal 0 0");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Button("btn_leftExpand", "absolute", "0", "0", "30", "31", null, null, this);
            obj.style.set_background("URL('theme://images/btn_mega_menu.png')");
            obj.style.set_border("1 solid #31596bff,0 solid #31596bff");
            obj.style.set_align("center top");
            obj.set_taborder("8");
            obj.set_cssclass("btn_menu");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdvMyMenu", "absolute", "590", "95", "198", "100%", null, null, this);
            obj.set_scrollbars("none");
            obj.set_cssclass("pdiv_TF_Menubg");
            this.addChild(obj.name, obj);
            obj = new Button("btnExpand", "absolute", null, "44.99%", "20", null, "2", "44.99%", this.pdvMyMenu);
            obj.set_taborder("3");
            obj.set_text(">");
            this.pdvMyMenu.addChild(obj.name, obj);
            obj = new Grid("grd_Mymenu", "absolute", "-1", "0", "100%", "100%", null, null, this.pdvMyMenu);
            obj.set_cssclass("grd_LF_Tree");
            obj.set_taborder("4");
            obj.set_binddataset("dsMyMenu");
            obj.set_scrollbars("autovert");
            obj.set_treeuseline("false");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("collapse,all");
            obj.style.set_padding("4 10 4 20");
            obj.getSetter("objNm").set("마이메뉴");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"400\"/></Columns><Rows><Row size=\"33\"/></Rows><Band id=\"body\" style=\"cellpadding:2 4 2 10;\"><Cell displaytype=\"tree\" edittype=\"tree\" style=\"font:EXPR(LINK_URL == '' ? 'bold 9 굴림' : '9 굴림');selectfont:EXPR(LINK_URL == '' ? 'bold 9 굴림' : '9 굴림'); :mouseover {selectbackground:URL('theme://img/img_LF_TreeSelect.png') repeat-x;}\" text=\"bind:MENU_NM\" treelevel=\"bind:MENU_LEVEL\" treestartlevel=\"0\"/></Band></Format></Formats>");
            this.pdvMyMenu.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 198, 0, this.pdvMenu,
            	//-- Layout function
            	function(p) {
            		p.set_cssclass("pdiv_TF_Menubg");
            		p.set_scrollbars("none");

            	}
            );
            this.pdvMenu.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 198, 0, this.pdvMyMenu,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_cssclass("pdiv_TF_Menubg");

            	}
            );
            this.pdvMyMenu.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 230, 798, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("left");
            		p.set_scrollbars("none");
            		p.style.set_background("#4d7990ff");
            		p.set_titletext("Left 레이아웃(메뉴)");
            		p.set_visible("true");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("leftFrame.xfdl", function(exports) {
        /**
           @file       leftFrame
           @desc       왼쪽 메뉴
           @author     공통
           @makedate   
           @history    
        */ 

        /**
        	@function	form_onload()
        	@desc   	폼 onload 이벤트
        */
        this.form_onload = function(obj,e)
        {	
        	if(application.gdsUserInfo.getColumn(0, "INT_USER_TYPE") != "B"){
        		//this.btnAVL.set_visible(false);
        		//this.btnCntr.set_visible(false);
        	}
         	this.fnChgMenu();
        } 

        /**
          * @function	: fnChgMenu
          * @desc     	: 
          */
        this.fnChgMenu = function()
        {
        	var filterExpr = "ALT_MENU == 'Y' && MENU_LEVEL != '0'";
        			
        	application.gdsMenu.set_enableevent(false);
        	this.dsLeftMenu.set_enableevent(false);
        		
        	application.gdsMenu.filter(filterExpr);
        	this.dsLeftMenu.copyData(application.gdsMenu, true);			
        	application.gdsMenu.filter("");
        	
        	application.gdsMenu.set_enableevent(true);
        	this.dsLeftMenu.set_enableevent(true);
        	
        	this.pdvMenu.set_top(0);
        	this.pdvMenu.set_left(0);
        }

        this.fn_MyMenuSrch = function(obj,e)
        {
        	var sSvcID = "getMyMenuSrch";
        	var sController = "epro.sys.service.BSysService.getMyMenuSrch";
        	var sInDatasets = "";
        	var sOutDatasets = "dsMyMenu=ds_mymenu";
        	var sCallbackFunc = "fn_trCallBack";
        	
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        
        /**
        	@function	btn_leftExpand_onclick()
        	@desc   	메뉴 펼침
        */
        this.btn_leftExpand_onclick = function(obj,e)
        {	
        	this.pdvMenu.trackPopupByComponent(this.sta_menuLine, 0, this.sta_menuLine.height);
        }

        /**
          * @function	: grd_Menu_oncellclick
          * @desc     	: 
          */
        this.grd_Menu_oncellclick = function(obj,e)
        {
        	if(e.clickitem == "treebutton") return;
        	
        	var nRow = this.dsLeftMenu.rowposition;
        	
        	if(gfnIsNull(this.dsLeftMenu.getColumn(nRow,"LINK_URL"))){
        		var check;
        		var treeRow = this.pdvMenu.grd_menu.getTreeRow(nRow);
        		
        		if(this.pdvMenu.grd_menu.getTreeStatus(treeRow) == 0) check = true;
        		else check = false;
        		
        		this.pdvMenu.grd_menu.setTreeStatus(treeRow,check);
        		
        	} else{
        		gfnOpenMenuUrl(this.dsLeftMenu.getColumn(this.dsLeftMenu.rowposition, "LINK_URL"));
        	}
        }

        /**
          * @함수명	: fnBtnExpandOnclick
          * @desc     	: leftMenu 늘리고 줄이기
          */
        this.fnBtnExpandOnclick = function(obj,e)
        {	
        	if(this.pdvMenu.width < 300){
        		this.pdvMenu.btnExpand.set_text("<");
        		this.pdvMenu.set_width(348);
        		
        	}else{
        		this.pdvMenu.btnExpand.set_text(">");
        		this.pdvMenu.set_width(198);		
        	}
        	
        	if(this.pdvMenu.isPopup()) this.pdvMenu.closePopup();
        	this.pdvMenu.trackPopupByComponent(this.sta_menuLine, 0, this.sta_menuLine.height);
        }
        /**
        	@function	fnPersonOnclick()
        	@desc   	개인화 팝업
        */
        this.fnPersonOnclick = function(obj,e)
        {
        	var sArg = {
        		agv_id:application.gdsUserInfo.getColumn(0, "USER_ID")
        		,agv_lang:application.gdsUserInfo.getColumn(0, "LANG_CD")
        	};
        	
        	if(application.gdsUserInfo.getColumn(0, "INT_USER_TYPE") == "B"){// 내부
        		gfnModalPop(this, "BSetUserPopup", "CPOP::BSetUserPopup.xfdl", sArg, "fnPopCallBack", 450, 313);
        	}else if(application.gdsUserInfo.getColumn(0, "INT_USER_TYPE") == "S"){// 외부
        		gfnModalPop(this, "SSetUserPopup", "CPOP::SSetUserPopup.xfdl", sArg, "fnPopCallBack", 450, 190);
        	}
        }

        /**
          * @함수명	: fnTrCallBack
          * @desc     	: Transaction Callback함수
          */
        this.fn_trCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	if(strErrCd < 0)return;
        	
        	switch(strSvcID){
        		case "getMyMenuSrch":
        			this.pdvMyMenu.trackPopupByComponent(this.sta_menuLine, 0, this.sta_menuLine.height);
        		break;

        		default:
        		break;	
        	}
        }

        /**
        	@function	fnPopCallBack()
        	@desc   	팝업 CallBack 함수
        */
        this.fnPopCallBack = function(sPopupId,rtn)
        {
        	switch(sPopupId){
        		case "BSetUserPopup" :
        		break;
        			
        		default:
        		break;	
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsLeftMenu.addEventHandler("oncolumnchanged", this.dsLeftMenu_oncolumnchanged, this);
            this.dsMyMenu.addEventHandler("oncolumnchanged", this.dsLeftMenu_oncolumnchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.Static04.addEventHandler("onclick", this.Static04_onclick, this);
            this.pdvMenu.btnExpand.addEventHandler("onclick", this.fnBtnExpandOnclick, this);
            this.pdvMenu.grd_menu.addEventHandler("oncellclick", this.grd_Menu_oncellclick, this);
            this.Button02.addEventHandler("onclick", this.fn_MyMenuSrch, this);
            this.btn_setting.addEventHandler("onclick", this.fnPersonOnclick, this);
            this.btn_leftExpand.addEventHandler("onclick", this.btn_leftExpand_onclick, this);
            this.pdvMyMenu.btnExpand.addEventHandler("onclick", this.fnBtnExpandOnclick, this);
            this.pdvMyMenu.grd_Mymenu.addEventHandler("oncellclick", this.grd_Menu_oncellclick, this);

        };

        this.loadIncludeScript("leftFrame.xfdl", true);

       
    };
}
)();
