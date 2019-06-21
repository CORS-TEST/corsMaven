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
                this.set_name("BSysUserDetail");
                this.set_titletext("사용자관리");
                this._setFormPosition(0,0,1200,926);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUser", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSrchOpt", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"USER_NM\" size=\"256\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReturn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRole", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCheckId", this);
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBranch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompBody00", "absolute", "0", "45", null, "508", "25", null, this);
            obj.getSetter("objNm").set("DIV-사용자리스트");
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Button("btnAdd", "absolute", null, "10", "50", "21", "53", null, this.divViewCompBody00);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("코드그룹추가버튼");
            obj.set_taborder("10");
            obj.set_text("추가");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnDel", "absolute", null, "10", "50", "21", "0", null, this.divViewCompBody00);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("코드그룹삭제버튼");
            obj.set_taborder("11");
            obj.set_text("삭제");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "11", "254", "23", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.getSetter("objNm").set("사용자리스트");
            obj.set_taborder("12");
            obj.set_text("사용자 리스트");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "35", null, null, "0", "29", this.divViewCompBody00);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsUser");
            obj.set_cellclickbound("cell");
            obj.getSetter("f_colSize").set("N");
            obj.getSetter("f_excel").set("Y");
            obj.getSetter("f_filter").set("N");
            obj.getSetter("f_find").set("N");
            obj.getSetter("f_fix").set("Y");
            obj.getSetter("f_height").set("N");
            obj.getSetter("f_hide").set("N");
            obj.getSetter("f_init").set("Y");
            obj.getSetter("f_mode").set("Y");
            obj.getSetter("f_save").set("N");
            obj.getSetter("f_sort").set("Y");
            obj.getSetter("objNm").set("사용자리스트");
            obj.set_taborder("13");
            obj._setContents("<Formats><Format id=\"MMODE\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" cssclass=\"Cellgrd_essential\" expr=\"\" text=\"사용자 ID\"/><Cell col=\"2\" cssclass=\"Cellgrd_essential\" expr=\"\" text=\"사용자명\"/><Cell col=\"3\" expr=\"\" text=\"사번\"/><Cell col=\"4\" expr=\"\" text=\"부서코드\"/><Cell col=\"5\" expr=\"\" text=\"부서명\"/><Cell col=\"6\" expr=\"\" text=\"주요업무\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\"/><Cell col=\"1\" text=\"bind:USER_ID\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:USER_NM\"/><Cell col=\"3\" text=\"bind:EMP_NO\"/><Cell col=\"4\" text=\"bind:DEPT_CD\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:DEPT_NM\"/><Cell col=\"6\" style=\"align:left;\" text=\"bind:MJR_JOB\"/></Band></Format><Format id=\"VMODE\"><Columns><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"사용자 ID\"/><Cell col=\"1\" expr=\"\" text=\"사용자명\"/><Cell col=\"2\" expr=\"\" text=\"사번\"/><Cell col=\"3\" expr=\"\" text=\"부서코드\"/><Cell col=\"4\" expr=\"\" text=\"부서명\"/><Cell col=\"5\" expr=\"\" text=\"주요업무\"/></Band><Band id=\"body\"><Cell text=\"bind:USER_ID\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:USER_NM\"/><Cell col=\"2\" text=\"bind:EMP_NO\"/><Cell col=\"3\" text=\"bind:DEPT_CD\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:DEPT_NM\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:MJR_JOB\"/></Band></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "1", this.divViewCompBody00);
            obj.getSetter("objNm").set("DIV-페이징");
            obj.set_scrollbars("none");
            obj.set_taborder("14");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Div("divViewCompCond00", "absolute", "0", "0", null, "45", "25", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.getSetter("objNm").set("DIV-사용자관리");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            obj = new Static("staUserId", "absolute", "0", "11", "170", "23", null, null, this.divViewCompCond00);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("objNm").set("사용자ID");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.set_taborder("4");
            obj.set_text("사용자 ID");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Edit("edtUserIdSrch", "absolute", "170", "11", "150", "23", null, null, this.divViewCompCond00);
            obj.set_inputmode("upper");
            obj.set_inputtype("english,symbol");
            obj.getSetter("objNm").set("사용자ID");
            obj.set_taborder("5");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staUserNm", "absolute", "320", "11", "170", "23", null, null, this.divViewCompCond00);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("objNm").set("사용자명");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.set_taborder("6");
            obj.set_text("사용자명");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Edit("edtUserNmSrch", "absolute", "490", "11", "150", "23", null, null, this.divViewCompCond00);
            obj.getSetter("objNm").set("사용자명");
            obj.set_taborder("7");
            this.divViewCompCond00.addChild(obj.name, obj);

            obj = new Div("divViewCompBody01", "absolute", "0", "599", null, "208", "25", null, this);
            obj.set_cssclass("div_WF_DetailBg");
            obj.getSetter("objNm").set("DIV-사용자상세");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "-1", null, "33", "0", null, this.divViewCompBody01);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("26");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine03", "absolute", "0", "95", null, "33", "0", null, this.divViewCompBody01);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("25");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "63", null, "33", "0", null, this.divViewCompBody01);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("27");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staRoleNm", "absolute", "370", "95", "150", "33", null, null, this.divViewCompBody01);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("부서");
            obj.set_taborder("18");
            obj.set_text("부서");
            obj.set_usedecorate("true");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staSiteGubun", "absolute", "0", "-1", "150", "33", null, null, this.divViewCompBody01);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("사용자ID");
            obj.set_taborder("0");
            obj.set_text("사용자 ID");
            obj.set_usedecorate("true");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staUserNm", "absolute", "370", "-1", "150", "33", null, null, this.divViewCompBody01);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("사용자명(한)");
            obj.set_taborder("2");
            obj.set_text("사용자명(한)");
            obj.set_usedecorate("true");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Edit("edtUserNm", "absolute", "525", "4", "150", "23", null, null, this.divViewCompBody01);
            obj.set_cssclass("essential");
            obj.set_inputfilter("dot,comma,sign,symbol,digit,alpha,space");
            obj.getSetter("lbcd").set("");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("사용자명(한)");
            obj.set_taborder("3");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Edit("edtUserId", "absolute", "170", "4", "150", "23", null, null, this.divViewCompBody01);
            obj.set_cssclass("readonly");
            obj.set_inputmode("upper");
            obj.set_inputtype("english");
            obj.getSetter("objNm").set("사용자 ID");
            obj.set_taborder("1");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staUserNmGb", "absolute", "820", "-1", "150", "33", null, null, this.divViewCompBody01);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("사용자명(영)");
            obj.set_taborder("4");
            obj.set_text("사용자명(영)");
            obj.set_usedecorate("true");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Edit("edtUserNmGb", "absolute", "975", "4", "150", "23", null, null, this.divViewCompBody01);
            obj.set_inputtype("english,space");
            obj.getSetter("lbcd").set("");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("사용자명(영)");
            obj.set_taborder("5");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Edit("edtDeptCd", "absolute", "525", "100", "100", "23", null, null, this.divViewCompBody01);
            obj.set_enable("true");
            obj.getSetter("objNm").set("부서코드");
            obj.set_taborder("19");
            obj.set_visible("true");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Edit("edtDeptNm", "absolute", "630", "100", "150", "23", null, null, this.divViewCompBody01);
            obj.getSetter("objNm").set("부서명");
            obj.set_taborder("20");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "31", null, "33", "0", null, this.divViewCompBody01);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("29");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staFax00", "absolute", "0", "31", "150", "33", null, null, this.divViewCompBody01);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("사번");
            obj.set_taborder("6");
            obj.set_text("사번");
            obj.set_usedecorate("true");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Edit("edtEmpNo", "absolute", "170", "36", "150", "23", null, null, this.divViewCompBody01);
            obj.set_inputtype("number");
            obj.getSetter("lbcd").set("");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("사번");
            obj.set_taborder("7");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staEmail", "absolute", "0", "95", "150", "33", null, null, this.divViewCompBody01);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("E-Mail");
            obj.set_taborder("14");
            obj.set_text("E-Mail");
            obj.set_usedecorate("true");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Edit("edtEmail", "absolute", "170", "100", "150", "23", null, null, this.divViewCompBody01);
            obj.set_inputtype("number,english,dot,symbol");
            obj.getSetter("lbcd").set("");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("E-Mail");
            obj.set_taborder("15");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staHp", "absolute", "370", "63", "150", "33", null, null, this.divViewCompBody01);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("핸드폰");
            obj.set_taborder("10");
            obj.set_text("핸드폰");
            obj.set_usedecorate("true");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Edit("edtHp", "absolute", "525", "68", "150", "23", null, null, this.divViewCompBody01);
            obj.set_inputfilter("dot,comma,sign");
            obj.set_inputtype("number");
            obj.getSetter("lbcd").set("");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("핸드폰");
            obj.set_taborder("11");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new CheckBox("chkAltUse", "absolute", "820", "100", "100", "23", null, null, this.divViewCompBody01);
            obj.set_falsevalue("N");
            obj.getSetter("objNm").set("chk사용여부");
            obj.set_taborder("21");
            obj.set_text("사용여부");
            obj.set_truevalue("Y");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new CheckBox("chkSmsYn", "absolute", "920", "100", "100", "23", null, null, this.divViewCompBody01);
            obj.set_falsevalue("N");
            obj.getSetter("objNm").set("chkSMS수신");
            obj.set_taborder("22");
            obj.set_text("SMS 수신");
            obj.set_truevalue("Y");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new CheckBox("chkEmailYn", "absolute", "1020", "100", "100", "23", null, null, this.divViewCompBody01);
            obj.set_falsevalue("N");
            obj.getSetter("objNm").set("undefined");
            obj.set_taborder("23");
            obj.set_text("E-Mail 수신");
            obj.set_truevalue("Y");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staTel", "absolute", "0", "63", "150", "33", null, null, this.divViewCompBody01);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("전화번호");
            obj.set_taborder("8");
            obj.set_text("전화번호");
            obj.set_usedecorate("true");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Edit("edtTel", "absolute", "170", "68", "150", "23", null, null, this.divViewCompBody01);
            obj.set_inputfilter("dot,comma,sign");
            obj.set_inputtype("number");
            obj.getSetter("lbcd").set("");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("전화번호");
            obj.set_taborder("9");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staFax", "absolute", "820", "63", "150", "33", null, null, this.divViewCompBody01);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("FAX");
            obj.set_taborder("12");
            obj.set_text("FAX");
            obj.set_usedecorate("true");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Edit("edtFax", "absolute", "975", "68", "150", "23", null, null, this.divViewCompBody01);
            obj.set_inputfilter("dot,comma,sign");
            obj.set_inputtype("number");
            obj.getSetter("lbcd").set("");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("FAX");
            obj.set_taborder("13");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staMajor", "absolute", "370", "31", "150", "33", null, null, this.divViewCompBody01);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("주요업무");
            obj.set_taborder("16");
            obj.set_text("주요업무");
            obj.set_usedecorate("true");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Edit("edtMajor", "absolute", "525", "36", "150", "23", null, null, this.divViewCompBody01);
            obj.getSetter("lbcd").set("");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("주요업무");
            obj.set_taborder("17");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staPstn", "absolute", "820", "31", "150", "33", null, null, this.divViewCompBody01);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("직책");
            obj.set_taborder("32");
            obj.set_text("직책");
            obj.set_usedecorate("true");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Edit("edtPstn", "absolute", "975", "36", "150", "23", null, null, this.divViewCompBody01);
            obj.getSetter("lbcd").set("");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("직책");
            obj.set_taborder("33");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine04", "absolute", "1", "159", null, "33", "0", null, this.divViewCompBody01);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("34");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staRole", "absolute", "0", "159", "150", "33", null, null, this.divViewCompBody01);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("코드설명");
            obj.set_taborder("35");
            obj.set_text("권한");
            obj.set_usedecorate("true");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine05", "absolute", "0", "127", null, "33", "0", null, this.divViewCompBody01);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("36");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staADID", "absolute", "0", "127", "150", "33", null, null, this.divViewCompBody01);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("AD_ID");
            obj.set_taborder("37");
            obj.set_text("ACTIVE DIRECTORY");
            obj.set_usedecorate("true");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Edit("edtAdId", "absolute", "170", "132", "151", "23", null, null, this.divViewCompBody01);
            obj.set_inputtype("number,english,dot,symbol");
            obj.getSetter("lbcd").set("");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("AD_ID");
            obj.set_taborder("38");
            this.divViewCompBody01.addChild(obj.name, obj);

            obj = new Static("staViewCompTitle01", "absolute", "0", "571", "254", "23", null, null, this);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("8");
            obj.set_text("사용자 상세");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1042, 667, this.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-사용자리스트");
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
            		p.getSetter("objNm").set("DIV-사용자관리");
            		p.set_taborder("0");

            	}
            );
            this.divViewCompCond00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1175, 262, this.divViewCompBody01,
            	//-- Layout function
            	function(p) {
            		p.set_cssclass("div_WF_DetailBg");
            		p.getSetter("objNm").set("DIV-사용자상세");
            		p.set_taborder("5");

            	}
            );
            this.divViewCompBody01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1200, 926, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("frmSearchCond");
            		p.set_titletext("사용자관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("staRoleVi","divViewCompBody01.staRole","visible","dsObjBindVi","staRole");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRoleEn","divViewCompBody01.staRole","enable","dsObjBindEn","staRole");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","divViewCompBody01.edtUserId","value","dsUser","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divViewCompBody01.edtUserNm","value","dsUser","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divViewCompBody01.edtUserNmGb","value","dsUser","USER_NM_GB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","divViewCompBody01.edtEmpNo","value","dsUser","EMP_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","divViewCompBody01.edtEmail","value","dsUser","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","divViewCompBody01.edtHp","value","dsUser","HP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","divViewCompBody01.edtTel","value","dsUser","TEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","divViewCompBody01.edtFax","value","dsUser","FAX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","divViewCompBody01.edtMajor","value","dsUser","MJR_JOB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","divViewCompBody01.edtDeptCd","value","dsUser","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","divViewCompBody01.edtDeptNm","value","dsUser","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","divViewCompBody01.chkAltUse","value","dsUser","ALT_USE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","divViewCompBody01.chkSmsYn","value","dsUser","ALT_SMS_RCV");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","divViewCompBody01.chkEmailYn","value","dsUser","ALT_MAIL_RCV");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","divViewCompCond00.edtUserIdSrch","value","dsSrchOpt","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","divViewCompCond00.edtUserNmSrch","value","dsSrchOpt","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","divViewCompBody01.edtPstn","value","dsUser","PSTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnAddVi","divViewCompBody00.btnAdd","visible","dsObjBindVi","btnAdd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnAddEn","divViewCompBody00.btnAdd","enable","dsObjBindEn","btnAdd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnDelVi","divViewCompBody00.btnDel","visible","dsObjBindVi","btnDel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnDelEn","divViewCompBody00.btnDel","enable","dsObjBindEn","btnDel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPagingVi","divViewCompBody00.divPaging","visible","dsObjBindVi","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPagingEn","divViewCompBody00.divPaging","enable","dsObjBindEn","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staUserIdVi","divViewCompCond00.staUserId","visible","dsObjBindVi","staUserId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staUserIdEn","divViewCompCond00.staUserId","enable","dsObjBindEn","staUserId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtUserIdSrchVi","divViewCompCond00.edtUserIdSrch","visible","dsObjBindVi","edtUserIdSrch");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtUserIdSrchEn","divViewCompCond00.edtUserIdSrch","readonly","dsObjBindEn","edtUserIdSrch");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staUserNmVi","divViewCompCond00.staUserNm","visible","dsObjBindVi","staUserNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staUserNmEn","divViewCompCond00.staUserNm","enable","dsObjBindEn","staUserNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtUserNmSrchVi","divViewCompCond00.edtUserNmSrch","visible","dsObjBindVi","edtUserNmSrch");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtUserNmSrchEn","divViewCompCond00.edtUserNmSrch","readonly","dsObjBindEn","edtUserNmSrch");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRoleNmVi","divViewCompBody01.staRoleNm","visible","dsObjBindVi","staRoleNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRoleNmEn","divViewCompBody01.staRoleNm","enable","dsObjBindEn","staRoleNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSiteGubunVi","divViewCompBody01.staSiteGubun","visible","dsObjBindVi","staSiteGubun");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSiteGubunEn","divViewCompBody01.staSiteGubun","enable","dsObjBindEn","staSiteGubun");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staUserNm_6Vi","divViewCompBody01.staUserNm","visible","dsObjBindVi","staUserNm_6");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staUserNm_6En","divViewCompBody01.staUserNm","enable","dsObjBindEn","staUserNm_6");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtUserNmVi","divViewCompBody01.edtUserNm","visible","dsObjBindVi","edtUserNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtUserNmEn","divViewCompBody01.edtUserNm","readonly","dsObjBindEn","edtUserNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtUserIdVi","divViewCompBody01.edtUserId","visible","dsObjBindVi","edtUserId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtUserIdEn","divViewCompBody01.edtUserId","readonly","dsObjBindEn","edtUserId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staUserNmGbVi","divViewCompBody01.staUserNmGb","visible","dsObjBindVi","staUserNmGb");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staUserNmGbEn","divViewCompBody01.staUserNmGb","enable","dsObjBindEn","staUserNmGb");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtUserNmGbVi","divViewCompBody01.edtUserNmGb","visible","dsObjBindVi","edtUserNmGb");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtUserNmGbEn","divViewCompBody01.edtUserNmGb","readonly","dsObjBindEn","edtUserNmGb");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDeptCdVi","divViewCompBody01.edtDeptCd","visible","dsObjBindVi","edtDeptCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDeptCdEn","divViewCompBody01.edtDeptCd","readonly","dsObjBindEn","edtDeptCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDeptNmVi","divViewCompBody01.edtDeptNm","visible","dsObjBindVi","edtDeptNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDeptNmEn","divViewCompBody01.edtDeptNm","readonly","dsObjBindEn","edtDeptNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staFax00Vi","divViewCompBody01.staFax00","visible","dsObjBindVi","staFax00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staFax00En","divViewCompBody01.staFax00","enable","dsObjBindEn","staFax00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtEmpNoVi","divViewCompBody01.edtEmpNo","visible","dsObjBindVi","edtEmpNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtEmpNoEn","divViewCompBody01.edtEmpNo","readonly","dsObjBindEn","edtEmpNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staEmailVi","divViewCompBody01.staEmail","visible","dsObjBindVi","staEmail");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staEmailEn","divViewCompBody01.staEmail","enable","dsObjBindEn","staEmail");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtEmailVi","divViewCompBody01.edtEmail","visible","dsObjBindVi","edtEmail");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtEmailEn","divViewCompBody01.edtEmail","readonly","dsObjBindEn","edtEmail");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staHpVi","divViewCompBody01.staHp","visible","dsObjBindVi","staHp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staHpEn","divViewCompBody01.staHp","enable","dsObjBindEn","staHp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtHpVi","divViewCompBody01.edtHp","visible","dsObjBindVi","edtHp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtHpEn","divViewCompBody01.edtHp","readonly","dsObjBindEn","edtHp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkAltUseVi","divViewCompBody01.chkAltUse","visible","dsObjBindVi","chkAltUse");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkAltUseEn","divViewCompBody01.chkAltUse","readonly","dsObjBindEn","chkAltUse");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkSmsYnVi","divViewCompBody01.chkSmsYn","visible","dsObjBindVi","chkSmsYn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkSmsYnEn","divViewCompBody01.chkSmsYn","readonly","dsObjBindEn","chkSmsYn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkEmailYnVi","divViewCompBody01.chkEmailYn","visible","dsObjBindVi","chkEmailYn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkEmailYnEn","divViewCompBody01.chkEmailYn","readonly","dsObjBindEn","chkEmailYn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTelVi","divViewCompBody01.staTel","visible","dsObjBindVi","staTel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTelEn","divViewCompBody01.staTel","enable","dsObjBindEn","staTel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTelVi","divViewCompBody01.edtTel","visible","dsObjBindVi","edtTel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTelEn","divViewCompBody01.edtTel","readonly","dsObjBindEn","edtTel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staFaxVi","divViewCompBody01.staFax","visible","dsObjBindVi","staFax");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staFaxEn","divViewCompBody01.staFax","enable","dsObjBindEn","staFax");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtFaxVi","divViewCompBody01.edtFax","visible","dsObjBindVi","edtFax");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtFaxEn","divViewCompBody01.edtFax","readonly","dsObjBindEn","edtFax");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staMajorVi","divViewCompBody01.staMajor","visible","dsObjBindVi","staMajor");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staMajorEn","divViewCompBody01.staMajor","enable","dsObjBindEn","staMajor");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtMajorVi","divViewCompBody01.edtMajor","visible","dsObjBindVi","edtMajor");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtMajorEn","divViewCompBody01.edtMajor","readonly","dsObjBindEn","edtMajor");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPstnVi","divViewCompBody01.staPstn","visible","dsObjBindVi","staPstn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPstnEn","divViewCompBody01.staPstn","enable","dsObjBindEn","staPstn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPstnVi","divViewCompBody01.edtPstn","visible","dsObjBindVi","edtPstn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPstnEn","divViewCompBody01.edtPstn","readonly","dsObjBindEn","edtPstn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkSYSTEMVi","divViewCompBody01.chkSYSTEM","visible","dsObjBindVi","chkSYSTEM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkSYSTEMEn","divViewCompBody01.chkSYSTEM","readonly","dsObjBindEn","chkSYSTEM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkWEBMASTERVi","divViewCompBody01.chkWEBMASTER","visible","dsObjBindVi","chkWEBMASTER");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkWEBMASTEREn","divViewCompBody01.chkWEBMASTER","readonly","dsObjBindEn","chkWEBMASTER");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkPCHRGRHEADVi","divViewCompBody01.chkPCHRGRHEAD","visible","dsObjBindVi","chkPCHRGRHEAD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkPCHRGRHEADEn","divViewCompBody01.chkPCHRGRHEAD","readonly","dsObjBindEn","chkPCHRGRHEAD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkPCHRGRVi","divViewCompBody01.chkPCHRGR","visible","dsObjBindVi","chkPCHRGR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkPCHRGREn","divViewCompBody01.chkPCHRGR","readonly","dsObjBindEn","chkPCHRGR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkGENERALVi","divViewCompBody01.chkGENERAL","visible","dsObjBindVi","chkGENERAL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkGENERALEn","divViewCompBody01.chkGENERAL","readonly","dsObjBindEn","chkGENERAL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("grdListFormatId","divViewCompBody00.grdList","formatid","dsObjBindGrid","grdList");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","divViewCompBody01.edtAdId","value","dsUser","AD_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtAdIdVi","divViewCompBody01.edtAdId","visible","dsObjBindVi","edtAdId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtAdIdEn","divViewCompBody01.edtAdId","readonly","dsObjBindEn","edtAdId");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
        };
        
        // User Script
        this.registerScript("BSysUserDetail.xfdl", function(exports) {
        /**
         * @파일명       	: BSysUserDetail.xfdl
         * @생성자       	: 송태봉
         * @생성일자     	: 2017. 9. 06.
         * @설명		    : 사용자관리
         * @최종수정자		: 송태봉
         * @최종수정일자	: 2017. 9. 06.
        */  

        
        var fvArrChk = [];

        /**
        	@function	formOnload()
        	@desc   	폼 onload이벤트
        */  
        this.formOnload = function(obj,e)
        {	
        	
        	var sArgEx = {
        					isTran:"Y", tranNm:"BSysService.searchSysUser", dsParam:this.dsSrchOpt
        				}
        	gfnSetGrdFunc(this.divViewCompBody00.grdList, this.divViewCompBody00.divPaging, this, sArgEx);
        	
        	this.fnRoleSearch();
        }

        /**
        	@function	fnRoleSearch()
        	@desc   	권한조회 및 운영단위 조회
        */  
        this.fnRoleSearch = function()
        {
        	var sSvcID = "readSysUserRole";
        	var sController = "epro.sys.service.BSysService.readSysUserRole";
        	var sInDatasets = "dsRole=dsRole";
        	var sOutDatasets = "dsRole=dsRole dsBranch=dsBranch";
        	var sCallbackFunc = "fnTrCallBack";	
        					
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
        	@function	fnPreSrch()
        	@desc   	조회전 이벤트
        */  
        this.fnPreSrch = function()
        {
        	if(gfnIsNull(this.dsSrchOpt.getColumn(0,"BRANCH_CD"))){
        		gfnAlert("EPRO_LABEL_00988");
        		return false;
        	}
        	
        	return true;
        }

        /**
        	@function	fnSearch()
        	@desc   	조회 이벤트
        */  
        this.fnSearch = function()
        {
        	if(!this.fnPreSrch()) return;

        	var sSvcID = "searchSysUser";
        	var sController = "epro.sys.service.BSysService.searchSysUser";
        	var sInDatasets = "dsSrchOpt=dsSrchOpt";
        	var sOutDatasets = "dsUser=dsUser";
        	var sCallbackFunc = "fnTrCallBack";	
        					
        	var	oPaging = [
        					{inDs:this.dsSrchOpt, grid:this.divViewCompBody00.grdList, divPaging:this.divViewCompBody00.divPaging}
        				];					
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc, oPaging);
        }

        /**
        	@function	fnPreSave()
        	@desc   	저장전 이벤트
        */  
        this.fnPreSave = function()
        {
        	var arr = [];
        	for(var i = 0 ; i < this.dsUser.rowcount ; i++){
        		if(gfnIsNull(this.dsUser.getColumn(i,"USER_ID"))){
        			var msg = gfnMultiLabel("EPRO_LABEL_00989");
        			var type = gfnMultiLabel("EPRO_LABEL_00753");
        			var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        			arr.push(objParam);
        		}
        		if(gfnIsNull(this.dsUser.getColumn(i,"USER_NM"))){
        			var msg = gfnMultiLabel("EPRO_LABEL_00990");
        			var type =  gfnMultiLabel("EPRO_LABEL_00753");
        			var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        			arr.push(objParam);
        		}
        	}
        	
        	if(!gfnValidate(this, false, arr)) return;

        	this.dsCheckId.deleteAll();
        	for(var i = 0 ; i < this.dsUser.rowcount ; i++){
        		if(this.dsUser.getRowType(i) == "2"){
        			var nRow = this.dsCheckId.addRow();
        			this.dsCheckId.copyRow(nRow,this.dsUser,i);
        		}
        	}
        	
        	if(this.dsCheckId.rowcount != 0){
        		var sSvcID = "checkUserId";
        		var sController = "epro.sys.service.BSysService.checkSysUserId";
        		var sInDatasets = "dsCheckId=dsCheckId";
        		var sOutDatasets = "dsCheckId=dsCheckId";
        		var sCallbackFunc = "fnTrCallBack";	
        						
        		gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        		
        		return false;
        	}
        	
        	return true;
        }

        /**
        	@function	fnSave()
        	@desc   	저장 이벤트
        */  
        this.fnSave = function()
        {
        	if(!this.fnPreSave()) return;
        	
        	if(!gfnConfirm("EPRO_LABEL_00001")) return;

        	var sSvcID = "saveSysUser";
        	var sController = "epro.sys.service.BSysService.saveSysUser";
        	var sInDatasets = "dsUser=dsUser:A";
        	var sOutDatasets = "dsUser=dsUser";
        	var sCallbackFunc = "fnTrCallBack";	
        					
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
          * @함수명	: fnTrCallBack
          * @desc     	: Transaction Callback함수
          */
        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	if(strErrCd < 0){
        		return;
        	}
        	
        	switch(strSvcID){
        		case "readSysUserRole" :
        			var startLeft	= 175;			//chkBox 최초 
        			var chkLeft 	= startLeft;	//chkBox left 위치
        			var chkTop 		= 165; 			// chkBox 최초 top 위치
        			var chkWidth 	= 120; 			// chkBox 최초 width 위치
        			var chkHeight 	= 23;			// chkBox 최초 height 위치
        			var lineChkcnt 	= 8;			// 한줄에 들어갈 chk수
        			var divBody01 	= this.divViewCompBody01;
        			var body01_Height = this.divViewCompBody01.height;
        			var divLine04 	= divBody01.staViewCompLine04;
        			var line04_Height = divLine04.height;
        			var staRole 	= divBody01.staRole;
        			var staRole_Height = staRole.height;

        			for(var i = 0 ; i < this.dsRole.rowcount ; i++){
        				if(i==lineChkcnt) {
        					chkTop += (chkHeight+5);
        					chkLeft = startLeft;
        					//divBody01.set_height(nexacro.toNumber(body01_Height) + nexacro.toNumber(line04_Height));
        					//divLine04.set_height(nexacro.toNumber(line04_Height) + nexacro.toNumber(line04_Height));
        					//staRole.set_height(nexacro.toNumber(staRole_Height) + nexacro.toNumber(staRole_Height));
        				}

        				var chkNm = "chk" + this.dsRole.getColumn(i,"ROLE_ID");
        				var objCheckBox = new CheckBox();
        				objCheckBox.init(chkNm, "absolute", chkLeft , chkTop ,chkWidth , chkHeight ,null ,null);
        				objCheckBox.addEventHandler("onclick", this.fnRoleCheck, this);
        				objCheckBox.set_text(this.dsRole.getColumn(i,"ROLE_NM_LO"));
        				objCheckBox.set_falsevalue("N");
        				objCheckBox.set_truevalue("Y");
        				objCheckBox.set_value("N");
        				chkLeft += 125; // width 120 , 체크박스 간격 5 기준
        				
        				this.divViewCompBody01.addChild(chkNm,objCheckBox);
        				objCheckBox.show();
        				
        				fvArrChk[i] = chkNm;
        			}
        			
        			this.dsSrchOpt.setColumn(0,"BRANCH_CD",application.gdsUserInfo.getColumn(0,"BRANCH_CD"));
        			this.fnSearch();
        			
        		break;
        		
        		case "searchSysUser" :
        			var type = null;
        			
        			if(this.dsSrchOpt.getColumn(0,"BRANCH_CD") == application.gdsUserInfo.getColumn(0,"BRANCH_CD")){
        				type = false;
        				gfnSetObj("A");
        				
        			} else{
        				type = true;
        				gfnSetObj("B");
        			}
        			
        			for(var i = 0 ; i < fvArrChk.length ; i++){
        				var chkNm = fvArrChk[i];
        				eval("this.divViewCompBody01." + chkNm + ".set_readonly(" + type + ")");
        			}
        			
        		
        			this.divViewCompBody00.grdList.setFocus();
        		break; 
        		
        		case "checkUserId" : 
        			if(strErrMsg != ""){
        				var arr = [];
        				var str = strErrMsg.split(',');
        				for(var i = 0 ; i < str.length ; i++){
        					var msg = str[i] + gfnMultiLabel("EPRO_LABEL_00949");
        					var type = gfnMultiLabel("EPRO_LABEL_00213");
        					var objParam = {agv_msg:msg, agv_type:type};
        					arr.push(objParam);
        				}
        				
        				if(!gfnValidate(this, false, arr)) return;
        			}
        			
        			if(!gfnConfirm("EPRO_LABEL_00001")) return;
        			
        			var sSvcID = "saveSysUser";
        			var sController = "epro.sys.service.BSysService.saveSysUser";
        			var sInDatasets = "dsUser=dsUser:A";
        			var sOutDatasets = "dsUser=dsUser";
        			var sCallbackFunc = "fnTrCallBack";	
        							
        			gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        			
        		break;
        		
        		case "saveSysUser" :
        			gfnAlert(strErrMsg);
        			this.fnSearch();
        		break;
        		
        		default:
        		break;	
        	}
        }

        /**
          * @함수명	: fnOnkeyup
          * @desc     	: 키다운 이벤트
          */
        this.fnOnkeyup = function(obj,e)
        {
        	if(e.keycode == 13){
        		obj.updateToDataset();
        		if(obj.name == "edtUserIdSrch" || obj.name == "edtUserNmSrch" || obj.name == "cboBranch") this.fnSearch();
        		else if (obj.name == "edtDeptNm") this.fnSlSearch();
        	}
        }

        /**
          * @함수명	: fnOntextchanged
          * @desc     	: 텍스트 변경이벤트
          */
        this.fnOntextchanged = function(obj,e)
        {
        	if(obj.name == "edtDeptNm") this.dsUser.setColumn(this.dsUser.rowposition,"DEPT_CD","");
        }

        
        /**
        	@function	fnPopCallBack()
        	@desc   	팝업 CallBack 함수
        */
        this.fnPopCallBack = function(sPopupId,rtn)
        {
        	this.dsReturn.clear();
        	this.dsReturn.loadXML(rtn);
        	
        	switch(sPopupId){
        		case "BSlSrchPopup" :
        				this.dsUser.setColumn(this.dsUser.rowposition,"DEPT_CD",this.dsReturn.getColumn(0,"STR_CD"));
        				this.dsUser.setColumn(this.dsUser.rowposition,"DEPT_NM",this.dsReturn.getColumn(0,"SL_NM"));
        			break;
        			
        		default:
        			break;	
        	}
        }

        /**
        	@function	fnDsUserOnrowposchanged()
        	@desc   	dsUser 로우변경이벤트
        */
        this.fnDsUserOnrowposchanged = function(obj,e)
        {
        	if(obj.getRowType(e.newrow) == 2){
        		this.divViewCompBody01.edtUserId.set_cssclass("essential");
        		this.divViewCompBody01.edtUserId.set_readonly(false)
        	} else{	
        		this.divViewCompBody01.edtUserId.set_cssclass("readonly");
        		this.divViewCompBody01.edtUserId.set_readonly(true)
        	}
        	for(var i = 0 ; i < this.dsRole.rowcount ; i++){
        		eval("this.divViewCompBody01.chk" + this.dsRole.getColumn(i,"ROLE_ID") + ".set_value('N')");
        	}
        	
        	if(!gfnIsNull(obj.getColumn(e.newrow,"ROLE_ID"))){
        		var arrRoleId = obj.getColumn(e.newrow,"ROLE_ID").split(',');
        		
        		for(var i = 0 ; i < arrRoleId.length ; i++){
        			var roleId = arrRoleId[i].substr(2,arrRoleId[i].length);
        			if(!gfnIsNull(this.dsRole.lookup("ROLE_ID", roleId, "ROLE_ID"))) {
        				eval("this.divViewCompBody01.chk" + roleId + ".set_value('Y')");
        			}	
        		}	
        	}
        }

        /**
        	@function	fnUserAdd()
        	@desc   	사용자 추가 이벤트
        */
        this.fnUserAdd = function(obj,e)
        {
        	var nRow = this.dsUser.addRow();
        	this.dsUser.setColumn(nRow,"BRANCH_CD",application.gdsUserInfo.getColumn(0,"BRANCH_CD"));
        }

        /**
        	@function	fnRoleCheck()
        	@desc   	권한 체크박스 선택 이벤트
        */
        this.fnRoleCheck = function(obj,e)
        {
        	var roleNm = "B_" + obj.name.substr(3,obj.name.length);
        	var nRow = this.dsUser.rowposition;

        	if(obj.value == "Y"){
        		if(gfnIsNull(this.dsUser.getColumn(nRow,"ROLE_ID"))) // 권한이 하나도 없을 때
        			this.dsUser.setColumn(nRow,"ROLE_ID",roleNm);
        		else 
        			this.dsUser.setColumn(nRow,"ROLE_ID" ,this.dsUser.getColumn(nRow,"ROLE_ID") + "," +roleNm);
        		
        	} else {
        		var delNm = "";
        		
        		if(this.dsUser.getColumn(nRow,"ROLE_ID") == roleNm){ // 하나의 권한만 있을때
        			delNm = this.dsUser.getColumn(nRow,"ROLE_ID").replace(roleNm,"").trim();
        			
        		} else{ // 복수의 권한이 있을때
        			var delIdx = this.dsUser.getColumn(nRow,"ROLE_ID").indexOf(roleNm);
        			
        			if(delIdx == 0)  // 체크한 권한이 문자열 맨앞에 존재할 때
        				delNm = this.dsUser.getColumn(nRow,"ROLE_ID").replace(roleNm + "," ,"").trim();
        			else 
        				delNm = this.dsUser.getColumn(nRow,"ROLE_ID").replace("," + roleNm ,"").trim();
        		}
        		
        		this.dsUser.setColumn(nRow,"ROLE_ID",delNm);
        	}
        }

        /**
        	@function	fnDel()
        	@desc   	삭제버튼 클릭이벤트
        */
        this.fnDel = function(obj,e)
        {
        	gfnChkDelConfirm(this.dsUser,"CHECKED");
        }

        /**
        	@function	fnDsUserCancolumnchange()
        	@desc   	dsUser 유효성체크
        */
        this.fnDsUserCancolumnchange = function(obj,e)
        {
        	if(e.columnid == "TEL"){
        		if(!gfnIsTel(e.newvalue) && !gfnIsNull(e.newvalue)){
        			e.newvalue = "";
        			gfnAlert("EPRO_LABEL_00991");
        			this.divViewCompBody01.edtTel.setFocus();
        			
        		}
        	} else if(e.columnid == "HP"){
        		if(!gfnIsTel(e.newvalue) && !gfnIsNull(e.newvalue)){
        			e.newvalue = "";
        			gfnAlert("EPRO_LABEL_00992");
        			this.divViewCompBody01.edtHp.setFocus();
        		}
        	
        	} else if(e.columnid == "FAX"){
        		if(!gfnIsTel(e.newvalue,"T") && !gfnIsNull(e.newvalue)){
        			e.newvalue = "";
        			gfnAlert("EPRO_LABEL_00993");
        			this.divViewCompBody01.edtFax.setFocus();
        		}
        		
        	} else if(e.columnid == "EMAIL"){
        		if(!gfnChkEmail(e.newvalue) && !gfnIsNull(e.newvalue)){
        			e.newvalue = "";
        			gfnAlert("EPRO_LABEL_00994");
        			this.divViewCompBody01.edtEmail.setFocus();
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsUser.addEventHandler("cancolumnchange", this.fnDsUserCancolumnchange, this);
            this.dsUser.addEventHandler("onrowposchanged", this.fnDsUserOnrowposchanged, this);
            this.addEventHandler("onload", this.formOnload, this);
            this.divViewCompBody00.btnAdd.addEventHandler("onclick", this.fnUserAdd, this);
            this.divViewCompBody00.btnDel.addEventHandler("onclick", this.fnDel, this);
            this.divViewCompCond00.edtUserIdSrch.addEventHandler("onkeyup", this.fnOnkeyup, this);
            this.divViewCompCond00.edtUserNmSrch.addEventHandler("onkeyup", this.fnOnkeyup, this);
            this.divViewCompBody01.staViewCompLine00.addEventHandler("onclick", this.Div21_Static01_onclick, this);
            this.divViewCompBody01.staViewCompLine03.addEventHandler("onclick", this.Div21_Static01_onclick, this);
            this.divViewCompBody01.staViewCompLine02.addEventHandler("onclick", this.Div21_Static01_onclick, this);
            this.divViewCompBody01.edtDeptNm.addEventHandler("onkeyup", this.fnOnkeyup, this);
            this.divViewCompBody01.edtDeptNm.addEventHandler("ontextchanged", this.fnOntextchanged, this);
            this.divViewCompBody01.staViewCompLine01.addEventHandler("onclick", this.Div21_Static01_onclick, this);
            this.divViewCompBody01.staViewCompLine04.addEventHandler("onclick", this.Div21_Static01_onclick, this);
            this.divViewCompBody01.staViewCompLine05.addEventHandler("onclick", this.Div21_Static01_onclick, this);

        };

        this.loadIncludeScript("BSysUserDetail.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
