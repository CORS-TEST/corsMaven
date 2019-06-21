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
                this.set_name("BSysMenuDetail");
                this.set_titletext("메뉴관리");
                this._setFormPosition(0,0,1200,769);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" size=\"256\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMenuRsrc", this);
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

            obj = new Dataset("dsTreeRow", this);
            obj._setContents("<ColumnInfo><Column id=\"expand\" size=\"256\" type=\"STRING\"/><Column id=\"row\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM34", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdTree", "absolute", "0", "39", null, null, "720", "6", this);
            obj.set_autofittype("col");
            obj.set_binddataset("dsMenu");
            obj.set_taborder("137");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"183\"/><Column size=\"40\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"Menu Name\"/><Cell col=\"1\" text=\"Menu\"/></Band><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" text=\"bind:PGM_NM\" treelevel=\"bind:LVL\"/><Cell col=\"1\" text=\"bind:ALT_MENU\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divViewCompBody00", "absolute", null, "39", "686", null, "14", "6", this);
            obj.set_cssclass("div_WF_DetailBg");
            obj.getSetter("objNm").set("DIV-헤더 상세");
            obj.set_scrollbars("none");
            obj.style.set_background("#ffffffff");
            obj.set_taborder("138");
            this.addChild(obj.name, obj);
            obj = new Static("sta_upPgmId", "absolute", "371", "-1", "117", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("상위프로그램ID");
            obj.set_taborder("187");
            obj.set_text("상위프로그램ID");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edt_upPgmId", "absolute", "493", "4", "194", "23", null, null, this.divViewCompBody00);
            obj.set_cssclass("readonly_P");
            obj.set_enable("false");
            obj.getSetter("objNm").set("상위프로그램ID");
            obj.set_taborder("188");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("sta_pgmNmGb", "absolute", "371", "31", "117", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("프로그램명_GB");
            obj.set_taborder("189");
            obj.set_text("프로그램명_GB");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtPgmNmGb", "absolute", "493", "36", "194", "23", null, null, this.divViewCompBody00);
            obj.set_autoselect("true");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("프로그램명_GB");
            obj.set_taborder("190");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine04", "absolute", "0", "127", null, "33", "0", null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("191");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine05", "absolute", "0", "159", null, "33", "0", null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("192");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine06", "absolute", "0", "191", null, "33", "0", null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("193");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine07", "absolute", "0", "223", null, "33", "0", null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("194");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine08", "absolute", "0", "255", null, "33", "0", null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("195");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "-1", null, "33", "0", null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("196");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "31", null, "33", "0", null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("197");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "63", null, "33", "0", null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("198");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine03", "absolute", "0", "95", null, "33", "0", null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("199");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staSiteGubun", "absolute", "0", "31", "117", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("사이트구분");
            obj.set_taborder("200");
            obj.set_text("사이트구분");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staPgmNm", "absolute", "0", "63", "117", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("프로그램명");
            obj.set_taborder("201");
            obj.set_text("프로그램명");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtLinkUrl", "absolute", "122", "100", "558", "23", null, null, this.divViewCompBody00);
            obj.set_autoselect("true");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("연결URL");
            obj.set_taborder("202");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staLinkUrl", "absolute", "0", "95", "117", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("연결URL");
            obj.set_taborder("203");
            obj.set_text("연결URL");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staAltLoginReq", "absolute", "0", "159", "117", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("로그인필요");
            obj.set_taborder("204");
            obj.set_text("로그인필요");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staAryOrdr", "absolute", "371", "191", "117", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("정렬순서");
            obj.set_taborder("205");
            obj.set_text("정렬순서");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staAltUse", "absolute", "0", "191", "117", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.set_taborder("206");
            obj.set_text("사용여부");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staCrtrNm", "absolute", "0", "223", "117", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("생성자");
            obj.set_taborder("207");
            obj.set_text("생성자");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staCrtDay", "absolute", "371", "223", "117", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("생성일시");
            obj.set_taborder("208");
            obj.set_text("생성일자");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staLastChgrNm", "absolute", "0", "255", "117", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("최종수정자");
            obj.set_taborder("209");
            obj.set_text("최종수정자");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staLastChgDay", "absolute", "371", "255", "117", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("최종수정일자");
            obj.set_taborder("210");
            obj.set_text("최종수정일자");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtPgmNm", "absolute", "122", "68", "558", "23", null, null, this.divViewCompBody00);
            obj.set_autoselect("true");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("프로그램명");
            obj.set_taborder("211");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new CheckBox("chkAltLoginReq", "absolute", "122", "164", "159", "23", null, null, this.divViewCompBody00);
            obj.set_falsevalue("N");
            obj.getSetter("objNm").set("예약응찰");
            obj.set_taborder("212");
            obj.set_text("사용");
            obj.set_truevalue("Y");
            obj.set_value("Y");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtPgmExpln", "absolute", "122", "132", "558", "23", null, null, this.divViewCompBody00);
            obj.set_autoselect("true");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("프로그램설명");
            obj.set_taborder("213");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staPgmExpln", "absolute", "0", "127", "117", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("프로그램설명");
            obj.set_taborder("214");
            obj.set_text("프로그램설명");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtCrtrNm", "absolute", "122", "228", "211", "23", null, null, this.divViewCompBody00);
            obj.set_cssclass("readonly_P");
            obj.set_enable("false");
            obj.getSetter("objNm").set("생성자");
            obj.set_taborder("215");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtLastChgrNm", "absolute", "122", "260", "211", "23", null, null, this.divViewCompBody00);
            obj.set_cssclass("readonly_P");
            obj.set_enable("false");
            obj.getSetter("objNm").set("최종수정자");
            obj.set_taborder("216");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Calendar("calCrtDay", "absolute", "493", "228", "187", "23", null, null, this.divViewCompBody00);
            this.divViewCompBody00.addChild(obj.name, obj);
            obj.set_cssclass("readonly_P");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");
            obj.set_locale("en_US");
            obj.getSetter("objNm").set("생성일시");
            obj.set_readonly("true");
            obj.set_taborder("217");
            obj = new Calendar("calLastChgDay", "absolute", "493", "260", "187", "23", null, null, this.divViewCompBody00);
            this.divViewCompBody00.addChild(obj.name, obj);
            obj.set_cssclass("readonly_P");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");
            obj.set_locale("en_US");
            obj.getSetter("objNm").set("최종수정일자");
            obj.set_readonly("true");
            obj.set_taborder("218");
            obj = new Spin("spnAryOrdr", "absolute", "493", "196", "89", "23", null, null, this.divViewCompBody00);
            obj.set_max("100");
            obj.set_taborder("219");
            obj.set_value("0");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new CheckBox("chkAltUse", "absolute", "122", "196", "159", "23", null, null, this.divViewCompBody00);
            obj.set_falsevalue("N");
            obj.getSetter("objNm").set("예약응찰");
            obj.set_taborder("220");
            obj.set_text("사용");
            obj.set_truevalue("Y");
            obj.set_value("N");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Radio("rdSiteGubun", "absolute", "122", "36", "211", "23", null, null, this.divViewCompBody00);
            this.divViewCompBody00.addChild(obj.name, obj);
            var rdSiteGubun_innerdataset = new Dataset("rdSiteGubun_innerdataset", this.divViewCompBody00.rdSiteGubun);
            rdSiteGubun_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">B</Col><Col id=\"datacolumn\">내부</Col></Row><Row><Col id=\"codecolumn\">S</Col><Col id=\"datacolumn\">외부</Col></Row><Row><Col id=\"codecolumn\">C</Col><Col id=\"datacolumn\">공통</Col></Row></Rows>");
            obj.set_innerdataset(rdSiteGubun_innerdataset);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_taborder("221");
            obj = new Static("staPgmId", "absolute", "0", "-1", "117", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("프로그램ID");
            obj.set_taborder("222");
            obj.set_text("프로그램ID");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtPgmId", "absolute", "122", "4", "211", "23", null, null, this.divViewCompBody00);
            obj.set_cssclass("readonly_P");
            obj.getSetter("objNm").set("프로그램ID");
            obj.set_readonly("true");
            obj.set_taborder("223");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staAltMenu", "absolute", "371", "159", "117", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("메뉴여부");
            obj.set_taborder("224");
            obj.set_text("메뉴여부");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new CheckBox("chkAltMenu", "absolute", "493", "164", "159", "23", null, null, this.divViewCompBody00);
            obj.set_falsevalue("N");
            obj.getSetter("objNm").set("예약응찰");
            obj.set_taborder("225");
            obj.set_text("사용");
            obj.set_truevalue("Y");
            obj.set_value("N");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "0%", "293", null, "189", "0.14%", null, this.divViewCompBody00);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsMenuRsrc");
            obj.set_taborder("226");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"500\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"Language\"/><Cell col=\"1\" text=\"Title\"/></Band><Band id=\"body\"><Cell style=\"align:left middle;\" text=\"bind:CD_NM_LO\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" style=\"align:left middle;\" text=\"bind:RSRC_NM\" editlimit=\"2000\" editlengthunit=\"ascii\"/></Band></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Button("btnAddUnderRow", "absolute", null, "10", "122", "24", "216", null, this);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("메뉴추가");
            obj.set_taborder("139");
            obj.set_text("하위레벨메뉴추가");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddSameRow", "absolute", null, "10", "122", "24", "91", null, this);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("메뉴추가");
            obj.set_taborder("140");
            obj.set_text("동일레벨메뉴추가");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelMenu", "absolute", null, "10", "74", "24", "14", null, this);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("메뉴삭제");
            obj.set_taborder("141");
            obj.set_text("메뉴삭제");
            this.addChild(obj.name, obj);

            obj = new Static("staViewCompTitle00", "absolute", "0", "10", "254", "24", null, null, this);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("142");
            obj.set_text("메뉴조회");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 686, 0, this.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.set_cssclass("div_WF_DetailBg");
            		p.getSetter("objNm").set("DIV-헤더 상세");
            		p.set_scrollbars("none");
            		p.style.set_background("#ffffffff");
            		p.set_taborder("138");

            	}
            );
            this.divViewCompBody00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1200, 769, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("FrmTemplate100");
            		p.set_titletext("메뉴관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item15","divViewCompBody00.edtPgmId","value","dsMenu","PGM_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","divViewCompBody00.rdSiteGubun","value","dsMenu","INT_SITE_DIST");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","divViewCompBody00.edtPgmNm","value","dsMenu","PGM_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","divViewCompBody00.edtLinkUrl","value","dsMenu","LINK_URL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","divViewCompBody00.edtPgmExpln","value","dsMenu","PGM_EXPLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","divViewCompBody00.chkAltLoginReq","value","dsMenu","ALT_LOGIN_REQ");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","divViewCompBody00.chkAltMenu","value","dsMenu","ALT_MENU");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","divViewCompBody00.chkAltUse","value","dsMenu","ALT_USE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","divViewCompBody00.spnAryOrdr","value","dsMenu","ARY_ORDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","divViewCompBody00.edtCrtrNm","value","dsMenu","CRTR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","divViewCompBody00.edtLastChgrNm","value","dsMenu","LAST_CHGR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","divViewCompBody00.calCrtDay","value","dsMenu","CRT_DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","divViewCompBody00.calLastChgDay","value","dsMenu","LAST_CHG_DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","divViewCompBody00.edt_upPgmId","value","dsMenu","UP_PGM_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","divViewCompBody00.edtPgmNmGb","value","dsMenu","PGM_NM_GB");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("BSysMenuDetail.xfdl", function(exports) {
        /**
         * @파일명       	: BSysMenuDetail.xfdl
         * @생성자       	: 한민희
         * @생성일자     	: 2017. 8. 25.
         * @설명			: 메뉴관리
         * @최종수정자		: 안성민
         * @최종수정일자	: 2017. 11. 03.
        */  

        /**
          * @변수명	: fvNewMenuNm	
          * @desc     	: 새로운 메뉴명 기본설정
          */
        this.fvNewMenuNm = "추가메뉴"; //gfnMultiLabel("EPRO_LABEL_00747");
        this.fvOldPosition;

        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {
        	var param = [
        					{code:"CM34"} //  언어
        				];
        	gfnGetCode(this, param);
        }

        /**
          * @함수명	: fnFormOninit
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.InitEventInfo(이벤트변수)
          * @desc     	: 폼 oninit이벤트
          */
        this.fnFormOninit = function(obj,e)
        {
        	this.fnSetCode();
        }

        /**
          * @함수명	: fnFormOnload
          * @desc     	: 폼 onload이벤트
          */
        this.fnFormOnload = function(obj,e)
        {
        	gfnSetObj("A");
        	this.fnSearch();
        }

        /**
          * @함수명	: fnPreSearch
          * @desc     	: 조회전 이벤트
          */
        this.fnPreSearch = function()
        {
        	this.dsMenu.setColumn(0,"BRANCH_CD",application.gdsUserInfo.getColumn(0,"BRANCH_CD"));
        	return true;
        }
         
        /**
        	@함수명	fnSearch()
        	@desc   	조회 프로세스
        */ 
        this.fnSearch = function()
        {
        	if(!this.fnPreSearch()) return;

        	var sSvcID = "readSysMenu";
        	var sController = "epro.sys.service.BSysService.readSysMenu";
        	var sInDatasets = "dsMenu=dsMenu"
        	var sOutDatasets = "dsMenu=dsMenu dsMenuRsrc=dsMenuRsrc";
        	var sCallbackFunc = "fnTrCallBack";
        	
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
        	@함수명	fnPreSave()
        	@desc   	저장 전 처리
        */    
        this.fnPreSave = function(obj)
        {	
        	if(!gfnConfirm("EPRO_LABEL_00001")) return false;
        	
        	this.fvOldPosition = this.dsMenu.rowposition;
        	this.dsMenuRsrc.set_enableevent(false);
        	this.dsMenuRsrc.filter("");
        	
        	return true;
        } 

        /**
        	@함수명	fnSave()
        	@desc   	저장버튼
        */ 
        this.fnSave = function(obj,e)
        {
        	if (!this.fnPreSave(obj)) return false;
        		
        	var sSvcID = "saveSysMenu";
        	var sController = "epro.sys.service.BSysService.saveSysMenu";
        	var sInDatasets = "dsMenu=dsMenu:U dsMenuRsrc=dsMenuRsrc:A";
        	var sOutDatasets = "dsMenu=dsMenu dsMenuRsrc=dsMenuRsrc";
        	var sCallbackFunc = "fnTrCallBack"; 
        	
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
           
        }

        /**
        	@함수명	fnTrCallBack()
        	@desc   	Transaction Callback함수
        */      
        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	switch(strSvcID){
        		case "readSysMenu" : 
        			this.dsMenuRsrc.filter("PGM_ID=='"+this.dsMenu.getColumn(this.dsMenu.rowposition, "PGM_ID")+"'");
        			this.dsMenuRsrc.set_enableevent(true);
        			if(!gfnIsNull(this.fvOldPosition)) this.dsMenu.set_rowposition(this.fvOldPosition);	
        		break;
        		
        		case "saveSysMenu" : 
        			this.fnSearch();
        			gfnAlert(strErrMsg);
        		break;	
        		
        		case "reset" : 
        			this.fnSearch();
        		break;	
        		
        		default:
        		break;	
        	}
        }

        /**
        	@함수명	fnAddUnderRow()
        	@desc   	하위레벨 메뉴 추가
        */   
        this.fnAddUnderRow = function(obj,e)
        {
        	// 선택된 로우
        	var nCurRow = this.dsMenu.rowposition;	
        	var strExpr = "LVL =='"+this.dsMenu.getColumn(nCurRow,"LVL")+"'";
        	
        	if(this.dsMenu.getColumn(nCurRow,"UP_PGM_ID")==""){
        		strExpr += " && TMP_UP_PGM_ID =='"+this.dsMenu.getColumn(nCurRow,"TMP_UP_PGM_ID")+"'";
        	}else{
        		strExpr += " && UP_PGM_ID =='"+this.dsMenu.getColumn(nCurRow,"UP_PGM_ID")+"'";
        	}
        	
        	// 로우를 추가할 위치
        	var nRowCnt = this.dsMenu.findRowExpr(strExpr,nCurRow+1);
        	
        	if(nRowCnt<0){
        		var tmpCurRow = nCurRow;
        		for(var i=this.dsMenu.getColumn(nCurRow,"LVL")-1; i>=0; i--){
        			var strExpr2 = "LVL =='"+i+"'";
        			var nIdxRow = 0;
        			if(this.dsMenu.getColumn(tmpCurRow,"UP_PGM_ID")==""){
        				nIdxRow = this.dsMenu.findRow("TMP_PGM_ID",this.dsMenu.getColumn(tmpCurRow,"TMP_UP_PGM_ID"));
        			}else{
        				nIdxRow = this.dsMenu.findRow("PGM_ID",this.dsMenu.getColumn(tmpCurRow,"UP_PGM_ID"));
        			}
        			if(this.dsMenu.getColumn(nIdxRow,"UP_PGM_ID")==""){
        				strExpr2 += " && TMP_UP_PGM_ID =='"+this.dsMenu.getColumn(nIdxRow,"TMP_UP_PGM_ID")+"'";
        			}else{
        				strExpr2 += " && UP_PGM_ID =='"+this.dsMenu.getColumn(nIdxRow,"UP_PGM_ID")+"'";
        			}
        			tmpCurRow = nIdxRow;
        			nRowCnt = this.dsMenu.findRowExpr(strExpr2,nIdxRow+1);
        			if(nRowCnt >= 0) break;
        		}
        		if(nRowCnt<0) nRowCnt = nCurRow+1;
        	}
        	
        	var nRow = this.dsMenu.insertRow(nRowCnt);
        	this.dsMenu.setColumn(nRow, "PGM_ID","");
        	this.dsMenu.setColumn(nRow, "TMP_PGM_ID",gfnMakeTempKey()); //임시 시퀀스 생성
        	this.dsMenu.setColumn(nRow, "PGM_NM",this.fvNewMenuNm);
        	this.dsMenu.setColumn(nRow, "LVL",this.dsMenu.getColumn(nCurRow,"LVL")+1);
        	if(this.dsMenu.getColumn(nCurRow,"PGM_ID")==""){
        		this.dsMenu.setColumn(nRow, "TMP_UP_PGM_ID",this.dsMenu.getColumn(nCurRow,"TMP_PGM_ID"));
        		this.dsMenu.setColumn(nRow, "UP_PGM_ID","");
        	}else{
        		this.dsMenu.setColumn(nRow, "UP_PGM_ID",this.dsMenu.getColumn(nCurRow,"PGM_ID"));
        	}
        	this.dsMenu.setColumn(nRow, "ALT_LOGIN_REQ","Y");
        	this.dsMenu.setColumn(nRow, "ALT_MENU","N");
        	this.dsMenu.setColumn(nRow, "ALT_USE","Y");
        	this.dsMenu.setColumn(nRow, "GRID_INIT_STATUS","1");
        	this.dsMenu.setColumn(nRow, "INT_SITE_DIST",this.dsMenu.getColumn(nCurRow,"INT_SITE_DIST"));
        	
        	this.addRsrc(nRow);
        }

        /**
          * @함수명	: fnDsFilter
          * @desc     	: 언어필터
          */
        this.fnDsFilter = function() 
        {
        	if(this.dsMenu.getRowType(this.dsMenu.rowposition) == 2) {
        		this.dsMenuRsrc.filter("PGM_ID=='" + this.dsMenu.getColumn(this.dsMenu.rowposition,"TMP_PGM_ID")+"'");
        	} else {
        		this.dsMenuRsrc.filter("PGM_ID=='" + this.dsMenu.getColumn(this.dsMenu.rowposition,"PGM_ID")+"'");
        	}
        	
        	this.dsMenuRsrc.set_enableevent(true);
        	
        }	

        /**
          * @함수명	: addRsrc
          * @desc     	: 언어추가
          */
        this.addRsrc = function(nRow)
        {
        	this.dsMenuRsrc.set_enableevent(false);
        	this.dsMenuRsrc.filter("");
        	for(var i=0; i<this.dsCdCM34.getRowCount(); i++) {
        		var nRsrcRow = this.dsMenuRsrc.addRow();
        		this.dsMenuRsrc.setColumn( nRsrcRow, "PGM_ID", this.dsMenu.getColumn(nRow, "TMP_PGM_ID"));
        		this.dsMenuRsrc.setColumn( nRsrcRow, "CD_ID", this.dsCdCM34.getColumn(i, "CD_ID"));
        		this.dsMenuRsrc.setColumn( nRsrcRow, "CD_NM_LO", this.dsCdCM34.getColumn(i, "CD_NM_LO"));
        		this.dsMenuRsrc.setColumn( nRsrcRow, "CD", this.dsCdCM34.getColumn(i, "CD"));
        		this.dsMenuRsrc.setColumn( nRsrcRow, "CREATEYN", "Y");
        	}
        	this.fnDsFilter();
        }

        /**
          * @함수명	: fnAddSameRow
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnAddSameRow = function(obj,e)
        {
        	// 선택된 로우
        	var nCurRow = this.dsMenu.rowposition;	
        	
        	if(this.dsMenu.getColumn(nCurRow,"UP_PGM_ID")==""){
        		nCurRow = this.dsMenu.findRow("TMP_PGM_ID",this.dsMenu.getColumn(nCurRow,"TMP_UP_PGM_ID"));
        		if(nCurRow<0){
        			nCurRow = this.dsMenu.findRow("PGM_ID",this.dsMenu.getColumn(this.dsMenu.rowposition,"TMP_UP_PGM_ID"));
        		}
        	}else{
        		nCurRow = this.dsMenu.findRow("PGM_ID",this.dsMenu.getColumn(nCurRow,"UP_PGM_ID"));
        	}
        	
        	var strExpr = "LVL =='"+this.dsMenu.getColumn(nCurRow,"LVL")+"'";
        	
        	if(this.dsMenu.getColumn(nCurRow,"UP_PGM_ID")==""){
        		strExpr += " && TMP_UP_PGM_ID =='"+this.dsMenu.getColumn(nCurRow,"TMP_UP_PGM_ID")+"'";
        	}else{
        		strExpr += " && UP_PGM_ID =='"+this.dsMenu.getColumn(nCurRow,"UP_PGM_ID")+"'";
        	}
        	
        	// 로우를 추가할 위치
        	var nRowCnt = this.dsMenu.findRowExpr(strExpr,nCurRow+1);
        	
        	if(nRowCnt<0){
        		var tmpCurRow = nCurRow;
        		for(var i=this.dsMenu.getColumn(nCurRow,"LVL")-1; i>=0; i--){
        			var strExpr2 = "LVL =='"+i+"'";
        			var nIdxRow = 0;
        			if(this.dsMenu.getColumn(tmpCurRow,"UP_PGM_ID")==""){
        				nIdxRow = this.dsMenu.findRow("TMP_PGM_ID",this.dsMenu.getColumn(tmpCurRow,"TMP_UP_PGM_ID"));
        			}else{
        				nIdxRow = this.dsMenu.findRow("PGM_ID",this.dsMenu.getColumn(tmpCurRow,"UP_PGM_ID"));
        			}
        			if(this.dsMenu.getColumn(nIdxRow,"UP_PGM_ID")==""){
        				strExpr2 += " && TMP_UP_PGM_ID =='"+this.dsMenu.getColumn(nIdxRow,"TMP_UP_PGM_ID")+"'";
        			}else{
        				strExpr2 += " && UP_PGM_ID =='"+this.dsMenu.getColumn(nIdxRow,"UP_PGM_ID")+"'";
        			}
        			tmpCurRow = nIdxRow;
        			nRowCnt = this.dsMenu.findRowExpr(strExpr2,nIdxRow+1);
        			if(nRowCnt >= 0) break;
        		}
        		if(nRowCnt<0) nRowCnt = this.dsMenu.rowposition+1;
        	}
        	
        	var nRow = this.dsMenu.insertRow(nRowCnt);
        	this.dsMenu.setColumn(nRow, "PGM_ID","");
        	this.dsMenu.setColumn(nRow, "TMP_PGM_ID",gfnMakeTempKey()); //임시 시퀀스 생성
        	this.dsMenu.setColumn(nRow, "PGM_NM",this.fvNewMenuNm);
        	this.dsMenu.setColumn(nRow, "LVL",this.dsMenu.getColumn(nCurRow,"LVL")+1);
        	if(this.dsMenu.getColumn(nCurRow,"PGM_ID")==""){
        		this.dsMenu.setColumn(nRow, "TMP_UP_PGM_ID",this.dsMenu.getColumn(nCurRow,"TMP_PGM_ID"));
        		this.dsMenu.setColumn(nRow, "UP_PGM_ID","");
        	}else{
        		this.dsMenu.setColumn(nRow, "UP_PGM_ID",this.dsMenu.getColumn(nCurRow,"PGM_ID"));
        	}
        	this.dsMenu.setColumn(nRow, "ALT_LOGIN_REQ","Y");
        	this.dsMenu.setColumn(nRow, "ALT_MENU","N");
        	this.dsMenu.setColumn(nRow, "ALT_USE","Y");
        	this.dsMenu.setColumn(nRow, "GRID_INIT_STATUS","1");
        	this.dsMenu.setColumn(nRow, "INT_SITE_DIST",this.dsMenu.getColumn(nCurRow,"INT_SITE_DIST"));
        	
        	this.addRsrc(nRow);
        }

        /**
        	@함수명	fnDelMenu()
        	@desc   	메뉴삭제 클릭이벤트 메뉴를 삭제한다.
        */     
        this.fnDelMenu = function(obj,e)
        {
        	if(!gfnConfirm("EPRO_LABEL_00750") ) { return;}
        	
        	var nCurRow = this.dsMenu.rowposition;
        	var dsIdx = nCurRow;
        	var curLvl = this.dsMenu.getColumn(dsIdx,"LVL");
        	var arrGrdIdx = [];
        	var idx = 0;
        	
        	arrGrdIdx[idx++] = dsIdx;
        	while((dsIdx+1)<this.dsMenu.getRowCount()){
        		var nextLvl = this.dsMenu.getColumn(dsIdx+1,"LVL");
        		
        		if(curLvl < nextLvl){
        			arrGrdIdx[idx++] = ++dsIdx;
        		}else{
        			break;
        		}
        	}
        	
        	this.dsMenuRsrc.set_enableevent(false);
        	for(var i=0; i<arrGrdIdx.length; i++) {
        		if(this.dsMenu.getRowType(arrGrdIdx[i]) == "2") {
        			this.dsMenuRsrc.filter("PGM_ID=='" + this.dsMenu.getColumn(arrGrdIdx[i],"TMP_PGM_ID")+"'");
        		} else {
        			this.dsMenuRsrc.filter("PGM_ID=='" + this.dsMenu.getColumn(arrGrdIdx[i],"PGM_ID")+"'");
        		}
        		this.dsMenuRsrc.deleteAll();
        	}
        	this.dsMenuRsrc.set_enableevent(true);
        	
        	this.dsMenu.deleteMultiRows(arrGrdIdx);
        	this.fnSetTreeStatus();	
        }	

        /**
        	@함수명	fnSetTreeStatus()
        	@desc   	트리 세팅
        */   
        this.fnSetTreeStatus = function()
        {
        	for(var i=0; i<this.dsMenu.getRowCount(); i++){
        		if(this.dsMenu.getColumn(i,"GRID_INIT_STATUS")==1){
        			this.grdTree.setTreeStatus(this.grdTree.getTreeRow(i), true);
        		}
        	}
        }

        /**
        	@함수명	fnGrdTreeCantreestatuschange()
        	@desc   	트리 상태변경시 발생하는 이벤트
        */   
        this.fnGrdTreeCantreestatuschange = function(obj,e)
        {
        	this.dsMenu.setColumn(e.realrow,"GRID_INIT_STATUS",e.reason);
        }

        /**
        	@함수명	fnOncellclick()
        	@desc   	언어설정 필터
        */  
        this.fnOncellclick = function(obj,e)
        {
        	this.fnDsFilter();
        }

        /**
        	@함수명	fnDsMenuOnrowposchanged()
        	@desc   	메뉴 rowposition 변경이벤트
        */  
        this.fnDsMenuOnrowposchanged = function(obj,e)
        {
        	this.fnDsFilter();
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsMenu.addEventHandler("onrowposchanged", this.fnDsMenuOnrowposchanged, this);
            this.dsCdCM34.addEventHandler("oncolumnchanged", this.fnOncolumnchanged, this);
            this.dsCdCM34.addEventHandler("onrowposchanged", this.fnOnrowposchanged, this);
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.grdTree.addEventHandler("cantreestatuschange", this.fnGrdTreeCantreestatuschange, this);
            this.grdTree.addEventHandler("oncellclick", this.fnOncellclick, this);
            this.divViewCompBody00.edtPgmNm.addEventHandler("onchanged", this.divViewCompBody00_edtPgmNm_onchanged, this);
            this.divViewCompBody00.rdSiteGubun.addEventHandler("onitemclick", this.Div00_rdSiteGubun_onitemclick, this);
            this.btnAddUnderRow.addEventHandler("onclick", this.fnAddUnderRow, this);
            this.btnAddSameRow.addEventHandler("onclick", this.fnAddSameRow, this);
            this.btnDelMenu.addEventHandler("onclick", this.fnDelMenu, this);

        };

        this.loadIncludeScript("BSysMenuDetail.xfdl", true);

       
    };
}
)();
