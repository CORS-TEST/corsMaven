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
                this.set_name("BSysRoleDetail");
                this.set_titletext("권한관리");
                this._setFormPosition(0,0,1200,769);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSrchOpt", this);
            obj.getSetter("dsDescription").set("검색조건 데이터셋");
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"INT_SITE_DIST\" size=\"1\" type=\"STRING\"/><Column id=\"ALT_USE\" size=\"1\" type=\"STRING\"/><Column id=\"ROLE_NM_LO\" size=\"40\" type=\"STRING\"/><Column id=\"ROLE_ID\" size=\"40\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRole", this);
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

            obj = new Dataset("dsMenu", this);
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

            obj = new Dataset("dsRoleMenu", this);
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

            obj = new Dataset("dsGrCd", this);
            obj._setContents("<ColumnInfo><Column id=\"INT_SITE_DIST\" size=\"256\" type=\"STRING\"/><Column id=\"INT_SITE_DIST_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"INT_SITE_DIST\">B</Col><Col id=\"INT_SITE_DIST_NM\">내부</Col></Row><Row><Col id=\"INT_SITE_DIST\">S</Col><Col id=\"INT_SITE_DIST_NM\">외부</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsIsYn", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"ALT_USE\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_USE_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"ALT_USE\">Y</Col><Col id=\"ALT_USE_NM\">예</Col></Row><Row><Col id=\"ALT_USE\">N</Col><Col id=\"ALT_USE_NM\">아니오</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReturn", this);
            obj.getSetter("dsDescription").set("팝업에서 전달받은 데이터를 담아놓는 데이터셋");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompBody00", "absolute", "0", "45", null, null, "400", "232", this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "39", null, null, "0", "29", this.divViewCompBody00);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsRole");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj.getSetter("objNm").set("검색결과 그리드");
            obj.set_taborder("8");
            obj._setContents("<Formats><Format id=\"MODE\"><Columns><Column size=\"40\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"70\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"사이트구분\"/><Cell col=\"2\" cssclass=\"Cellgrd_essential\" text=\"권한ID\"/><Cell col=\"3\" cssclass=\"Cellgrd_essential\" text=\"권한명\"/><Cell col=\"4\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"none\" text=\"bind:INT_SITE_DIST\" editdisplay=\"edit\" combodataset=\"dsGrCd\" combocodecol=\"INT_SITE_DIST\" combodatacol=\"INT_SITE_DIST_NM\" combodisplay=\"edit\"/><Cell col=\"2\" text=\"bind:ROLE_ID\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" style=\"align:left;\" text=\"bind:ROLE_NM_LO\" editdisplay=\"edit\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"none\" style=\"align:left;\" text=\"bind:ALT_USE\" editdisplay=\"edit\" combodataset=\"dsIsYn\" combocodecol=\"ALT_USE\" combodatacol=\"ALT_USE_NM\" combodisplay=\"edit\"/></Band></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnRoleAdd", "absolute", null, "10", "60", "24", "65", null, this.divViewCompBody00);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("코드그룹추가버튼");
            obj.set_taborder("10");
            obj.set_text("추가");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnRoleDel", "absolute", null, "10", "60", "24", "0", null, this.divViewCompBody00);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("코드그룹삭제버튼");
            obj.set_taborder("11");
            obj.set_text("삭제");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "10", "254", "24", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("12");
            obj.set_text("권한관리");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Div("divViewCompCond00", "absolute", "0", "0", null, "45", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            obj = new Static("staSiteGubun", "absolute", "19", "11", "85", "23", null, null, this.divViewCompCond00);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("사이트 구분");
            obj.set_taborder("0");
            obj.set_text("사이트 구분");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Combo("cboSiteGubun", "absolute", "106", "11", "133", "23", null, null, this.divViewCompCond00);
            this.divViewCompCond00.addChild(obj.name, obj);
            var cboSiteGubun_innerdataset = new Dataset("cboSiteGubun_innerdataset", this.divViewCompCond00.cboSiteGubun);
            cboSiteGubun_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">B</Col><Col id=\"datacolumn\">내부</Col></Row><Row><Col id=\"codecolumn\">S</Col><Col id=\"datacolumn\">외부</Col></Row></Rows>");
            obj.set_innerdataset(cboSiteGubun_innerdataset);
            obj.set_codecolumn("codecolumn");
            obj.set_cssclass("cbo_default");
            obj.set_datacolumn("datacolumn");
            obj.set_displayrowcount("-1");
            obj.getSetter("objNm").set("코드그룹");
            obj.set_taborder("13");
            obj.set_text("전체");
            obj.set_index("0");
            obj = new Static("staIsYn", "absolute", "268", "11", "85", "23", null, null, this.divViewCompCond00);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("사용여부");
            obj.set_taborder("14");
            obj.set_text("사용여부");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Combo("cboIsYn", "absolute", "337", "11", "133", "23", null, null, this.divViewCompCond00);
            this.divViewCompCond00.addChild(obj.name, obj);
            var cboIsYn_innerdataset = new Dataset("cboIsYn_innerdataset", this.divViewCompCond00.cboIsYn);
            cboIsYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(cboIsYn_innerdataset);
            obj.set_autoselect("true");
            obj.set_codecolumn("codecolumn");
            obj.set_cssclass("cbo_default");
            obj.set_datacolumn("datacolumn");
            obj.set_displayrowcount("-1");
            obj.getSetter("objNm").set("사용여부");
            obj.set_taborder("15");
            obj.set_text("전체");
            obj.set_index("0");
            obj = new Static("staAuth", "absolute", "499", "11", "85", "23", null, null, this.divViewCompCond00);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("사용여부");
            obj.set_taborder("16");
            obj.set_text("권한명");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Edit("edtAuth", "absolute", "554", "11", "250", "23", null, null, this.divViewCompCond00);
            obj.set_cssclass("edt_default");
            obj.getSetter("lbcd").set("");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("그룹");
            obj.set_taborder("17");
            this.divViewCompCond00.addChild(obj.name, obj);

            obj = new Div("div_menu", "absolute", null, "45", "364", null, "16", "0", this);
            obj.getSetter("objNm").set("DIV-헤더 상세");
            obj.set_scrollbars("none");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle02", "absolute", "0", "10", "254", "24", null, null, this.div_menu);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("1");
            obj.set_text("메뉴권한관리");
            this.div_menu.addChild(obj.name, obj);
            obj = new Grid("grdTree", "absolute", "0", "39", null, null, "0", "0", this.div_menu);
            obj.set_autofittype("col");
            obj.set_binddataset("dsMenu");
            obj.set_taborder("0");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"183\"/></Columns><Rows><Row size=\"27\"/></Rows><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" text=\"bind:PGM_NM\" treecheck=\"bind:CHECKED\" treelevel=\"bind:LVL\"/></Band></Format></Formats>");
            this.div_menu.addChild(obj.name, obj);

            obj = new Div("div_input", "absolute", "0", null, null, "197", "400", "0", this);
            obj.set_cssclass("div_WF_DetailBg");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "-1", null, "33", "0", null, this.div_input);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("53");
            this.div_input.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "31", null, "33", "0", null, this.div_input);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("54");
            this.div_input.addChild(obj.name, obj);
            obj = new Static("staViewCompLine03", "absolute", "0", "63", null, "33", "0", null, this.div_input);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("55");
            this.div_input.addChild(obj.name, obj);
            obj = new Static("staViewCompLine04", "absolute", "0", "95", null, "100", "0", null, this.div_input);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("56");
            this.div_input.addChild(obj.name, obj);
            obj = new Static("staRoleNm", "absolute", "0", "31", "100", "33", null, null, this.div_input);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("코드설명");
            obj.set_taborder("38");
            obj.set_text("권한명");
            obj.set_usedecorate("true");
            this.div_input.addChild(obj.name, obj);
            obj = new Edit("edtRoleNm", "absolute", "105", "36", "290", "23", null, null, this.div_input);
            obj.set_cssclass("essential");
            obj.getSetter("lbcd").set("");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("코드설명");
            obj.set_taborder("39");
            this.div_input.addChild(obj.name, obj);
            obj = new Static("staSiteGubun", "absolute", "0", "-1", "100", "33", null, null, this.div_input);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("코드설명");
            obj.set_taborder("40");
            obj.set_text("사이트구분");
            obj.set_usedecorate("true");
            this.div_input.addChild(obj.name, obj);
            obj = new Combo("cboSiteGubun", "absolute", "105", "4", "100", "23", null, null, this.div_input);
            this.div_input.addChild(obj.name, obj);
            var cboSiteGubun_innerdataset = new Dataset("cboSiteGubun_innerdataset", this.div_input.cboSiteGubun);
            cboSiteGubun_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">B</Col><Col id=\"datacolumn\">내부</Col></Row><Row><Col id=\"codecolumn\">S</Col><Col id=\"datacolumn\">외부</Col></Row></Rows>");
            obj.set_innerdataset(cboSiteGubun_innerdataset);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("objNm").set("코드그룹");
            obj.set_taborder("41");
            obj.set_text("내부");
            obj.set_value("B");
            obj.set_index("0");
            obj = new Static("staRoleId", "absolute", "400", "-1", "100", "33", null, null, this.div_input);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("코드설명");
            obj.set_taborder("42");
            obj.set_text("권한ID");
            obj.set_usedecorate("true");
            this.div_input.addChild(obj.name, obj);
            obj = new Edit("edtRoleId", "absolute", "505", "4", "100", "23", null, null, this.div_input);
            obj.set_cssclass("essential");
            obj.getSetter("lbcd").set("");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("코드설명");
            obj.set_taborder("43");
            this.div_input.addChild(obj.name, obj);
            obj = new Static("staRoleNmEn", "absolute", "400", "31", "100", "33", null, null, this.div_input);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("코드설명");
            obj.set_taborder("44");
            obj.set_text("권한명(영)");
            obj.set_usedecorate("true");
            this.div_input.addChild(obj.name, obj);
            obj = new Edit("edtRoleNmEn", "absolute", "505", "36", "289", "23", null, null, this.div_input);
            obj.getSetter("lbcd").set("");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("코드설명");
            obj.set_taborder("45");
            this.div_input.addChild(obj.name, obj);
            obj = new Static("staAuthInfo", "absolute", "0", "95", "100", "100", null, null, this.div_input);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("코드설명");
            obj.set_taborder("46");
            obj.set_text("권한상세정보");
            obj.set_usedecorate("true");
            this.div_input.addChild(obj.name, obj);
            obj = new Static("staIsYn", "absolute", "0", "63", "100", "33", null, null, this.div_input);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("코드설명");
            obj.set_taborder("48");
            obj.set_text("사용여부");
            obj.set_usedecorate("true");
            this.div_input.addChild(obj.name, obj);
            obj = new Combo("cboIsYn", "absolute", "105", "68", "100", "23", null, null, this.div_input);
            this.div_input.addChild(obj.name, obj);
            var cboIsYn_innerdataset = new Dataset("cboIsYn_innerdataset", this.div_input.cboIsYn);
            cboIsYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(cboIsYn_innerdataset);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("objNm").set("코드그룹");
            obj.set_taborder("49");
            obj.set_text("예");
            obj.set_value("Y");
            obj.set_index("0");
            obj = new Static("staOrder", "absolute", "400", "63", "100", "33", null, null, this.div_input);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("코드설명");
            obj.set_taborder("50");
            obj.set_text("정렬순서");
            obj.set_usedecorate("true");
            this.div_input.addChild(obj.name, obj);
            obj = new Edit("edtOrder", "absolute", "505", "68", "100", "23", null, null, this.div_input);
            obj.set_inputtype("number");
            obj.getSetter("lbcd").set("");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("코드설명");
            obj.set_taborder("51");
            this.div_input.addChild(obj.name, obj);
            obj = new TextArea("txaAuthInfo", "absolute", "105", "100", null, "90", "6", null, this.div_input);
            obj.getSetter("objNm").set("요청내역");
            obj.set_readonly("false");
            obj.set_taborder("52");
            this.div_input.addChild(obj.name, obj);

            obj = new Static("staViewCompTitle01", "absolute", "0", null, "254", "23", null, "198", this);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("8");
            obj.set_text("권한상세");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1042, 667, this.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_text("Div00");

            	}
            );
            this.divViewCompBody00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 45, this.divViewCompCond00,
            	//-- Layout function
            	function(p) {
            		p.set_cssclass("div_WF_SearchBg");
            		p.set_taborder("0");

            	}
            );
            this.divViewCompCond00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 364, 0, this.div_menu,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-헤더 상세");
            		p.set_scrollbars("none");
            		p.set_taborder("3");

            	}
            );
            this.div_menu.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 197, this.div_input,
            	//-- Layout function
            	function(p) {
            		p.set_cssclass("div_WF_DetailBg");
            		p.set_taborder("5");

            	}
            );
            this.div_input.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1200, 769, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("frmSearchCond");
            		p.set_titletext("권한관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item4","divViewCompCond00.cboSiteGubun","value","dsSrchOpt","INT_SITE_DIST");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","divViewCompCond00.cboIsYn","value","dsSrchOpt","ALT_USE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divViewCompCond00.edtAuth","value","dsSrchOpt","ROLE_NM_LO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_input.edtOrder","value","dsRole","ARY_ORDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","div_input.edtRoleId","value","dsRole","ROLE_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","div_input.cboSiteGubun","value","dsRole","INT_SITE_DIST");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","div_input.edtRoleNm","value","dsRole","ROLE_NM_LO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","div_input.edtRoleNmEn","value","dsRole","ROLE_NM_GB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","div_input.cboIsYn","value","dsRole","ALT_USE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","div_input.txaAuthInfo","value","dsRole","ROLE_EXPLN");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("BSysRoleDetail.xfdl", function(exports) {
        /**
         * @파일명       	: BSysRoleDetail.xfdl
         * @생성자       	: 송태봉
         * @생성일자     	: 2017. 9. 04.
         * @설명		    : 권한관리
         * @최종수정자		: 안성민
         * @최종수정일자	: 2017. 11. 03.
        */  

        /**
        	@function	formOnload()
        	@desc   	폼 onload이벤트
        */  
        this.formOnload = function(obj,e)
        {
        	gfnSetGrdFunc(this.divViewCompBody00.grdList);
        	gfnSetObj("A");
            
        	this.dsSrchOpt.addRow();
         	this.dsSrchOpt.setColumn(0, "INT_SITE_DIST", "");
         	this.dsSrchOpt.setColumn(0, "ALT_USE", "");
            
        	this.fnSearch();
        }

        /**
        	@function	fnPreSearch()
        	@desc   	조회 전 처리
        */   
        this.fnPreSearch = function()
        {
        	return true;
        }

        
        /**
        	@function	fnSearch()
        	@desc   	조회 프로세스
        */   
        this.fnSearch = function()
        {
        	if(!this.fnPreSearch()) return false;
        	
        	var sSvcID = "readSysRole";
        	var sController = "epro.sys.service.BSysService.readSysRole";
        	var sInDatasets = "dsSrchOpt=dsSrchOpt";
        	var sOutDatasets = "dsRole=dsRole";
        	var sCallbackFunc = "fnTrCallBack";
        	
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
        	@function	fnPreMenuSearch()
        	@desc   	조회 전 처리
        */   
        this.fnPreMenuSearch = function()
        {
        	this.dsSrchOpt.setColumn(0,"ROLE_ID",this.dsRole.getColumn(this.dsRole.rowposition,"INT_SITE_DIST")+"_"+this.dsRole.getColumn(this.dsRole.rowposition,"ROLE_ID"));
        	return true;
        }

        
        /**
        	@function	fnMenuSearch()
        	@desc   	조회 프로세스
        */   
        this.fnMenuSearch = function()
        {
        	if(!this.fnPreMenuSearch()) return false;
        	
        	var sSvcID = "readSysRoleMenu";
        	var sController = "epro.sys.service.BSysService.readSysRoleMenu";
        	var sInDatasets = "dsSrchOpt=dsSrchOpt";
        	var sOutDatasets = "dsMenu=dsMenu";
        	var sCallbackFunc = "fnTrCallBack";
        	
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
        	@function	fnPreSave()
        	@desc   	저장 전 처리
        */      
        this.fnPreSave = function(obj)
        {
        	var arr = [];
        	for(var i = 0 ; i < this.dsRole.rowcount ; i++){
        		if(gfnIsNull(this.dsRole.getColumn(i,"ROLE_ID"))){
        			var msg = gfnMultiLabel("EPRO_LABEL_00752"); //"권한 ID를 입력 해 주세요.";
        			var type = gfnMultiLabel("EPRO_LABEL_00753"); //"필수";
        			var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        			arr.push(objParam);
        		}
        		
        		if(gfnIsNull(this.dsRole.getColumn(i,"ROLE_NM_LO"))){
        			var msg = gfnMultiLabel("EPRO_LABEL_00751");
        			var type = gfnMultiLabel("EPRO_LABEL_00753");
        			var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        			arr.push(objParam);
        		}
        	}
        	
        	if(!gfnValidate(this, false, arr)) return;

        
        	this.dsSrchOpt.setColumn(0,"ROLE_ID",this.dsRole.getColumn(this.dsRole.rowposition,"INT_SITE_DIST")+"_"+this.dsRole.getColumn(this.dsRole.rowposition,"ROLE_ID"));
        	
        	this.dsMenu.set_enableevent(false);
        	this.dsMenu.filter("INT_SITE_DIST=='"+this.dsRole.getColumn(this.dsRole.rowposition,"INT_SITE_DIST")+"' && CHECKED==1");
        	this.dsRoleMenu.copyData(this.dsMenu,true);
        	this.dsMenu.filter("INT_SITE_DIST=='"+this.dsRole.getColumn(this.dsRole.rowposition,"INT_SITE_DIST")+"'");
        	this.dsMenu.set_enableevent(true);
        	
        	if(!gfnConfirm("EPRO_LABEL_00001")) return false;
        	
        	return true;
        }

        /**
        	@function	fnSave()
        	@desc   	권한 저장
        */
        this.fnSave = function(obj,e)
        {
        	if (!this.fnPreSave(obj)) return false;
        	
        	var sSvcID = "saveSysRole";
        	var sController = "epro.sys.service.BSysService.saveSysRole";
        	var sInDatasets = "dsRole=dsRole:A dsRoleMenu=dsRoleMenu:A dsSrchOpt=dsSrchOpt";
        	var sOutDatasets = "";
        	var sCallbackFunc = "fnTrCallBack";
        	
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
        	@function	fnTrCallBack()
        	@desc   	Transaction Callback함수
        */          
        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	switch(strSvcID)
        	{	
        		case "readSysRole" :
        			break;
        		case "readSysRoleMenu" :	
        			this.dsMenu.filter("INT_SITE_DIST=='"+this.dsRole.getColumn(this.dsRole.rowposition,"INT_SITE_DIST")+"'");
        			break;
        		case "saveSysRole" :
        			gfnAlert(strErrMsg);
        			this.fnSearch();	
        			break;
        		
        		default:
        		break;		
        	}
        }

        /**
        	@function	fnRoleAdd()
        	@desc   	권한 추가
        */
        this.fnRoleAdd = function(obj,e)
        {
        	var nRow = this.dsRole.addRow();
        	
        	this.dsRole.setColumn(nRow,"INT_SITE_DIST","B");
        	this.dsRole.setColumn(nRow,"ALT_USE","Y");
        }

        /**
        	@function	fnRoleDel()
        	@desc   	권한 삭제
        */
        this.fnRoleDel = function(obj,e)
        {
        	if(!gfnConfirm("EPRO_LABEL_00754")) return; //선택된 권한을 삭제하시겠습니까?
        	gfnDsChkDel(this.dsRole);
        	this.fnMenuSearch();
        }

        /**
        	@function	fnDsRoleCanrowposchange()
        	@desc   	권한을 클릭시 메뉴수정사항있는지 조회
        */
        this.fnDsRoleCanrowposchange = function(obj,e)
        {
        	return true;
        }

        /**
        	@function	fnDsRoleOnrowposchanged()
        	@desc   	권한을 클릭시 권한별 메뉴조회
        */
        this.fnDsRoleOnrowposchanged = function(obj,e)
        {
        	this.fnMenuSearch();
        }

        /**
        	@function	fnSetTreeStatus()
        	@desc   	트리 세팅
        */   
        this.fnSetTreeStatus = function()
        {
        	for(var i=0; i<this.dsMenu.getRowCount(); i++){
        		if(this.dsMenu.getColumn(i,"GRID_INIT_STATUS")==1){
        			this.div_menu.grdTree.setTreeStatus(this.div_menu.grdTree.getTreeRow(i), true);
        		}
        	}
        }

        /**
        	@function	fnSetTreeStatus()
        	@desc   	트리 상태변경시 발생하는 이벤트
        */   
        this.fnGrdTreeCantreestatuschange = function(obj,e)
        {
        	this.dsMenu.setColumn(e.realrow,"GRID_INIT_STATUS",e.reason);
        }

        /**
        	@function	fnDsRoleOnvaluechanged()
        	@desc   	권한 사이트값 변경시 메뉴변경
        */
        this.fnDsRoleOnvaluechanged = function(obj,e)
        {
        	if(e.columnid=="INT_SITE_DIST"){
        		this.dsMenu.filter("INT_SITE_DIST=='"+e.newvalue+"'");
        	}
        }

        /**
        	@function	fnDsRoleOnvaluechanged()
        	@desc   	메뉴클릭시 권한아이디 세팅
        */
        this.fnDsMenuOnvaluechanged = function(obj,e)
        {
        	if(e.columnid=="CHECKED"){
        		if(e.newvalue==1){
        			this.dsMenu.setColumn(e.row,"ROLE_ID",this.dsRole.getColumn(this.dsRole.rowposition,"ROLE_ID"));
        		}else{
        			this.dsMenu.setColumn(e.row,"ROLE_ID","");
        		}
        	}
        }

        /**
        	@function	fnDsMenuOncolumnchanged()
        	@desc   	메뉴클릭시 자식노드 세팅
        */
        this.fnDsMenuOncolumnchanged = function(obj,e)
        {
        	if(e.columnid=="CHECKED"){
        		if(e.newvalue == 1){
        			var upPgm = this.dsMenu.getColumn(e.row,"UP_PGM_ID");
        			var nRow = this.dsMenu.findRow("PGM_ID",upPgm);
        			
        			while(nRow != -1){
        				this.dsMenu.setColumn(nRow,"CHECKED",e.newvalue);
        				
        				upPgm = this.dsMenu.getColumn(nRow,"UP_PGM_ID");
        				nRow = this.dsMenu.findRow("PGM_ID",upPgm);
        			}
        		} 
        		for(var i = e.row + 1 ; i < this.dsMenu.rowcount ; i++){
        			if(this.dsMenu.getColumn(e.row,"LVL") < this.dsMenu.getColumn(i,"LVL")){
        				this.dsMenu.setColumn(i,"CHECKED",e.newvalue);
        				
        			} else break;
        		}
        		
        	}	
        }

        /**
        	@function	fnOnkeydown()
        	@desc   	검색조건에서 ENTER(keycode::13) 입력시 이벤트를 발생시킨다.
        */         
        this.fnOnkeydown = function(obj,e)
        {
        	//Enter 입력시
        	if(e.keycode == "13"){
        		obj.updateToDataset();
        		this.fnSearch();
        	} 
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsRole.addEventHandler("canrowposchange", this.fnDsRoleCanrowposchange, this);
            this.dsRole.addEventHandler("onrowposchanged", this.fnDsRoleOnrowposchanged, this);
            this.dsRole.addEventHandler("onvaluechanged", this.fnDsRoleOnvaluechanged, this);
            this.dsMenu.addEventHandler("oncolumnchanged", this.fnDsMenuOncolumnchanged, this);
            this.dsMenu.addEventHandler("onvaluechanged", this.fnDsMenuOnvaluechanged, this);
            this.addEventHandler("onload", this.formOnload, this);
            this.divViewCompBody00.btnRoleAdd.addEventHandler("onclick", this.fnRoleAdd, this);
            this.divViewCompBody00.btnRoleDel.addEventHandler("onclick", this.fnRoleDel, this);
            this.divViewCompCond00.edtAuth.addEventHandler("onkeydown", this.fnOnkeydown, this);
            this.div_menu.grdTree.addEventHandler("cantreestatuschange", this.fnGrdTreeCantreestatuschange, this);
            this.div_input.staViewCompLine00.addEventHandler("onclick", this.Div21_Static01_onclick, this);
            this.div_input.staViewCompLine01.addEventHandler("onclick", this.Div21_Static01_onclick, this);
            this.div_input.staViewCompLine03.addEventHandler("onclick", this.Div21_Static01_onclick, this);
            this.div_input.staViewCompLine04.addEventHandler("onclick", this.Div21_Static01_onclick, this);

        };

        this.loadIncludeScript("BSysRoleDetail.xfdl", true);

       
    };
}
)();
