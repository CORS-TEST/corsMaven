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
                this.set_name("SUserDetail");
                this.set_titletext("업체사용자정보");
                this._setFormPosition(0,0,1220,1067);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"USER_NM\" size=\"256\" type=\"STRING\"/><Column id=\"PWD\" size=\"256\" type=\"STRING\"/><Column id=\"PSTN\" size=\"256\" type=\"STRING\"/><Column id=\"HP\" size=\"256\" type=\"STRING\"/><Column id=\"FAX\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_MAIL_RCV\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_RPTST\" size=\"256\" type=\"STRING\"/><Column id=\"DEPT_NM\" size=\"256\" type=\"STRING\"/><Column id=\"CHECK_PW\" size=\"256\" type=\"STRING\"/><Column id=\"EMAIL\" size=\"256\" type=\"STRING\"/><Column id=\"TEL\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_USE\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_SMS_RCV\" size=\"256\" type=\"STRING\"/><Column id=\"MJR_JOB\" size=\"256\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"P_USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"COUNT\" size=\"256\" type=\"STRING\"/><Column id=\"ROLE_ID\" size=\"256\" type=\"STRING\"/><Column id=\"LDRCHECK\" size=\"256\" type=\"STRING\"/><Column id=\"CD_PTNR_CTGR\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserChk", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompTitle00", "absolute", "0", "0", null, "24", "0", null, this);
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            obj.set_positionstep("0");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "0", "255", "24", null, null, this.divViewCompTitle00);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.getSetter("objNm").set("기본정보");
            obj.set_taborder("21");
            obj.set_text("기본정보");
            this.divViewCompTitle00.addChild(obj.name, obj);

            obj = new Div("divViewCompBody00", "absolute", "0", "29", null, "375", "10", null, this);
            obj.set_cssclass("div_WF_DetailBg");
            obj.getSetter("objNm").set("DIV-평가서 상세");
            obj.set_positionstep("0");
            obj.set_taborder("101");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "0", null, "33", "0", null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("58");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "32", null, "33", "0", null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("60");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "64", null, "33", "0", null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("61");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staUserNm", "absolute", "0", "32", "171", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("사용자명");
            obj.set_positionstep("1");
            obj.set_taborder("5");
            obj.set_text("사용자명");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staUserId", "absolute", "0", "0", "171", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("사용자 ID");
            obj.set_positionstep("1");
            obj.set_taborder("0");
            obj.set_text("사용자ID");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staDeptNm", "absolute", "629", "32", "171", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("부서명");
            obj.set_positionstep("1");
            obj.set_taborder("7");
            obj.set_text("부서명");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staPwd", "absolute", "0", "64", "171", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("비밀번호");
            obj.set_positionstep("1");
            obj.set_taborder("9");
            obj.set_text("패스워드");
            obj.set_wordwrap("char");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staChckPwd", "absolute", "629", "64", "171", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("비밀번호확인");
            obj.set_positionstep("1");
            obj.set_taborder("11");
            obj.set_text("패스워드확인");
            obj.set_wordwrap("char");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine03", "absolute", "0", "96", null, "33", "0", null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("62");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staPstn", "absolute", "0", "96", "171", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("직급");
            obj.set_positionstep("1");
            obj.set_taborder("13");
            obj.set_text("직급");
            obj.set_wordwrap("char");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staEmail", "absolute", "629", "96", "171", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("EMAIL");
            obj.set_positionstep("1");
            obj.set_taborder("15");
            obj.set_text("E-MAIL");
            obj.set_wordwrap("char");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine04", "absolute", "0", "128", null, "33", "0", null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("64");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staHp", "absolute", "0", "128", "171", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("HP");
            obj.set_positionstep("1");
            obj.set_taborder("17");
            obj.set_text("휴대전화");
            obj.set_wordwrap("char");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine05", "absolute", "0", "160", null, "33", "0", null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("65");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staFax", "absolute", "0", "160", "171", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("팩스");
            obj.set_positionstep("1");
            obj.set_taborder("21");
            obj.set_text("FAX");
            obj.set_wordwrap("char");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine06", "absolute", "0", "224", null, "119", "0", null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("67");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staMjrJob", "absolute", "0", "224", "171", "119", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("주요업무");
            obj.set_positionstep("1");
            obj.set_taborder("29");
            obj.set_text("주요업무");
            obj.set_wordwrap("char");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtUserNm", "absolute", "177", "36", "166", "24", null, null, this.divViewCompBody00);
            obj.set_enable("true");
            obj.set_lengthunit("ascii");
            obj.getSetter("objNm").set("사용자명");
            obj.set_positionstep("1");
            obj.set_taborder("6");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staTel", "absolute", "629", "128", "171", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("전화번호");
            obj.set_positionstep("1");
            obj.set_taborder("19");
            obj.set_text("연락처");
            obj.set_wordwrap("char");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtPstn", "absolute", "177", "100", "166", "24", null, null, this.divViewCompBody00);
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("직급");
            obj.set_positionstep("1");
            obj.set_taborder("14");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtEmail1", "absolute", "806", "101", "166", "24", null, null, this.divViewCompBody00);
            obj.set_lengthunit("ascii");
            obj.getSetter("objNm").set("EMAIL");
            obj.set_positionstep("1");
            obj.set_taborder("16");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtDeptNm", "absolute", "806", "36", "166", "24", null, null, this.divViewCompBody00);
            obj.set_imemode("none");
            obj.set_lengthunit("ascii");
            obj.getSetter("objNm").set("부서명");
            obj.set_positionstep("1");
            obj.set_taborder("8");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtUserId", "absolute", "177", "4", "166", "24", null, null, this.divViewCompBody00);
            obj.set_inputtype("number,english,sign,symbol");
            obj.set_lengthunit("ascii");
            obj.getSetter("objNm").set("사용자ID");
            obj.set_positionstep("1");
            obj.set_taborder("1");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtFax", "absolute", "177", "164", "166", "24", null, null, this.divViewCompBody00);
            obj.set_inputfilter("sign,symbol");
            obj.set_inputtype("number");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("FAX");
            obj.set_positionstep("1");
            obj.set_taborder("22");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtHp", "absolute", "177", "132", "166", "24", null, null, this.divViewCompBody00);
            obj.set_inputfilter("sign,symbol");
            obj.set_inputtype("number");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("HP");
            obj.set_positionstep("1");
            obj.set_taborder("18");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtTel", "absolute", "806", "132", "166", "24", null, null, this.divViewCompBody00);
            obj.set_inputfilter("sign,symbol");
            obj.set_inputtype("number");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("Tel");
            obj.set_positionstep("1");
            obj.set_taborder("20");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new TextArea("txtMjrJob", "absolute", "177", "230", "1018", "107", null, null, this.divViewCompBody00);
            obj.set_lengthunit("ascii");
            obj.getSetter("objNm").set("주요업무");
            obj.set_taborder("30");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtPwd", "absolute", "177", "68", "166", "24", null, null, this.divViewCompBody00);
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("비밀번호");
            obj.set_password("true");
            obj.set_positionstep("1");
            obj.set_taborder("10");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtChckPwd", "absolute", "806", "68", "166", "24", null, null, this.divViewCompBody00);
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("비밀번호확인");
            obj.set_password("true");
            obj.set_positionstep("1");
            obj.set_taborder("12");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staRptst", "absolute", "629", "0", "171", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("대표사용자여부");
            obj.set_positionstep("1");
            obj.set_taborder("3");
            obj.set_text("대표사용자여부");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staAltUse", "absolute", "629", "160", "171", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("사용자여부");
            obj.set_positionstep("1");
            obj.set_taborder("23");
            obj.set_text("사용여부");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staAltMailRcv", "absolute", "0", "192", "171", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("메일수신여부");
            obj.set_positionstep("1");
            obj.set_taborder("25");
            obj.set_text("메일수신여부");
            obj.set_wordwrap("char");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staAltSmsRcv", "absolute", "629", "192", "171", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("SMS수신여부");
            obj.set_positionstep("1");
            obj.set_taborder("27");
            obj.set_text("SMS수신여부");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new CheckBox("chkRptst", "absolute", "806", "4", "168", "25", null, null, this.divViewCompBody00);
            obj.set_falsevalue("N");
            obj.getSetter("objNm").set("대표사용자여부");
            obj.set_taborder("4");
            obj.set_truevalue("Y");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new CheckBox("chkAltUse", "absolute", "806", "164", "168", "25", null, null, this.divViewCompBody00);
            obj.set_falsevalue("N");
            obj.getSetter("objNm").set("사용자여부");
            obj.set_taborder("24");
            obj.set_truevalue("Y");
            obj.set_value("N");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new CheckBox("chkAltSmsRcv", "absolute", "806", "196", "168", "25", null, null, this.divViewCompBody00);
            obj.set_falsevalue("N");
            obj.getSetter("objNm").set("SMS수신여부");
            obj.set_taborder("28");
            obj.set_truevalue("Y");
            obj.set_value("N");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new CheckBox("chkAltMailRcv", "absolute", "177", "196", "167", "25", null, null, this.divViewCompBody00);
            obj.set_falsevalue("N");
            obj.getSetter("objNm").set("메일수신여부");
            obj.set_taborder("26");
            obj.set_truevalue("Y");
            obj.set_value("N");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btn_chkId", "absolute", "349", "4", "124", "24", null, null, this.divViewCompBody00);
            obj.getSetter("objNm").set("아이디중복체크");
            obj.set_taborder("2");
            obj.set_text("아이디중복체크");
            obj.set_visible("false");
            this.divViewCompBody00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompTitle00,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 타이틀");
            		p.set_positionstep("0");
            		p.set_taborder("1");

            	}
            );
            this.divViewCompTitle00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 375, this.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.set_cssclass("div_WF_DetailBg");
            		p.getSetter("objNm").set("DIV-평가서 상세");
            		p.set_positionstep("0");
            		p.set_taborder("101");

            	}
            );
            this.divViewCompBody00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "Screen0", 1220, 1067, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("FrmTemplate100");
            		p.set_titletext("업체사용자정보");

            	}
            );
            obj.set_stepcount("");
            obj.set_stepindex("");
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","divViewCompBody00.edtUserId","value","dsDetail","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divViewCompBody00.edtUserNm","value","dsDetail","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divViewCompBody00.edtPwd","value","dsDetail","PWD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","divViewCompBody00.edtPstn","value","dsDetail","PSTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","divViewCompBody00.edtHp","value","dsDetail","HP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","divViewCompBody00.edtFax","value","dsDetail","FAX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","divViewCompBody00.edtDeptNm","value","dsDetail","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","divViewCompBody00.edtEmail1","value","dsDetail","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","divViewCompBody00.edtTel","value","dsDetail","TEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","divViewCompBody00.txtMjrJob","value","dsDetail","MJR_JOB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","divViewCompBody00.edtChckPwd","value","dsDetail","CHECK_PW");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staUserNmVi","divViewCompBody00.staUserNm","visible","dsObjBindVi","staUserNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staUserNmEn","divViewCompBody00.staUserNm","enable","dsObjBindEn","staUserNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staUserIdVi","divViewCompBody00.staUserId","visible","dsObjBindVi","staUserId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staUserIdEn","divViewCompBody00.staUserId","enable","dsObjBindEn","staUserId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staDeptNmVi","divViewCompBody00.staDeptNm","visible","dsObjBindVi","staDeptNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staDeptNmEn","divViewCompBody00.staDeptNm","enable","dsObjBindEn","staDeptNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPwdVi","divViewCompBody00.staPwd","visible","dsObjBindVi","staPwd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPwdEn","divViewCompBody00.staPwd","enable","dsObjBindEn","staPwd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staChckPwdVi","divViewCompBody00.staChckPwd","visible","dsObjBindVi","staChckPwd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staChckPwdEn","divViewCompBody00.staChckPwd","enable","dsObjBindEn","staChckPwd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPstnVi","divViewCompBody00.staPstn","visible","dsObjBindVi","staPstn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPstnEn","divViewCompBody00.staPstn","enable","dsObjBindEn","staPstn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staEmailVi","divViewCompBody00.staEmail","visible","dsObjBindVi","staEmail");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staEmailEn","divViewCompBody00.staEmail","enable","dsObjBindEn","staEmail");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staHpVi","divViewCompBody00.staHp","visible","dsObjBindVi","staHp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staHpEn","divViewCompBody00.staHp","enable","dsObjBindEn","staHp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staFaxVi","divViewCompBody00.staFax","visible","dsObjBindVi","staFax");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staFaxEn","divViewCompBody00.staFax","enable","dsObjBindEn","staFax");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staMjrJobVi","divViewCompBody00.staMjrJob","visible","dsObjBindVi","staMjrJob");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staMjrJobEn","divViewCompBody00.staMjrJob","enable","dsObjBindEn","staMjrJob");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtUserNmVi","divViewCompBody00.edtUserNm","visible","dsObjBindVi","edtUserNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtUserNmEn","divViewCompBody00.edtUserNm","readonly","dsObjBindEn","edtUserNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTelVi","divViewCompBody00.staTel","visible","dsObjBindVi","staTel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTelEn","divViewCompBody00.staTel","enable","dsObjBindEn","staTel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPstnVi","divViewCompBody00.edtPstn","visible","dsObjBindVi","edtPstn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPstnEn","divViewCompBody00.edtPstn","readonly","dsObjBindEn","edtPstn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtEmail1Vi","divViewCompBody00.edtEmail1","visible","dsObjBindVi","edtEmail1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtEmail1En","divViewCompBody00.edtEmail1","readonly","dsObjBindEn","edtEmail1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDeptNmVi","divViewCompBody00.edtDeptNm","visible","dsObjBindVi","edtDeptNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDeptNmEn","divViewCompBody00.edtDeptNm","readonly","dsObjBindEn","edtDeptNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtUserIdVi","divViewCompBody00.edtUserId","visible","dsObjBindVi","edtUserId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtUserIdEn","divViewCompBody00.edtUserId","readonly","dsObjBindEn","edtUserId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txtMjrJobVi","divViewCompBody00.txtMjrJob","visible","dsObjBindVi","txtMjrJob");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txtMjrJobEn","divViewCompBody00.txtMjrJob","readonly","dsObjBindEn","txtMjrJob");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPwdVi","divViewCompBody00.edtPwd","visible","dsObjBindVi","edtPwd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPwdEn","divViewCompBody00.edtPwd","readonly","dsObjBindEn","edtPwd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtChckPwdVi","divViewCompBody00.edtChckPwd","visible","dsObjBindVi","edtChckPwd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtChckPwdEn","divViewCompBody00.edtChckPwd","readonly","dsObjBindEn","edtChckPwd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRptstVi","divViewCompBody00.staRptst","visible","dsObjBindVi","staRptst");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRptstEn","divViewCompBody00.staRptst","enable","dsObjBindEn","staRptst");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAltUseVi","divViewCompBody00.staAltUse","visible","dsObjBindVi","staAltUse");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAltUseEn","divViewCompBody00.staAltUse","enable","dsObjBindEn","staAltUse");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAltMailRcvVi","divViewCompBody00.staAltMailRcv","visible","dsObjBindVi","staAltMailRcv");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAltMailRcvEn","divViewCompBody00.staAltMailRcv","enable","dsObjBindEn","staAltMailRcv");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAltSmsRcvVi","divViewCompBody00.staAltSmsRcv","visible","dsObjBindVi","staAltSmsRcv");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAltSmsRcvEn","divViewCompBody00.staAltSmsRcv","enable","dsObjBindEn","staAltSmsRcv");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtFaxVi","divViewCompBody00.edtFax","visible","dsObjBindVi","edtFax");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtFaxEn","divViewCompBody00.edtFax","readonly","dsObjBindEn","edtFax");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtHpVi","divViewCompBody00.edtHp","visible","dsObjBindVi","edtHp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtHpEn","divViewCompBody00.edtHp","readonly","dsObjBindEn","edtHp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTelVi","divViewCompBody00.edtTel","visible","dsObjBindVi","edtTel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTelEn","divViewCompBody00.edtTel","readonly","dsObjBindEn","edtTel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","divViewCompBody00.chkRptst","value","dsDetail","ALT_RPTST");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","divViewCompBody00.chkAltUse","value","dsDetail","ALT_USE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","divViewCompBody00.chkAltSmsRcv","value","dsDetail","ALT_SMS_RCV");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","divViewCompBody00.chkAltMailRcv","value","dsDetail","ALT_MAIL_RCV");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkRptstVi","divViewCompBody00.chkRptst","visible","dsObjBindVi","chkRptst");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkRptstEn","divViewCompBody00.chkRptst","readonly","dsObjBindEn","chkRptst");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkAltUseVi","divViewCompBody00.chkAltUse","visible","dsObjBindVi","chkAltUse");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkAltUseEn","divViewCompBody00.chkAltUse","readonly","dsObjBindEn","chkAltUse");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkAltSmsRcvVi","divViewCompBody00.chkAltSmsRcv","visible","dsObjBindVi","chkAltSmsRcv");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkAltSmsRcvEn","divViewCompBody00.chkAltSmsRcv","readonly","dsObjBindEn","chkAltSmsRcv");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkAltMailRcvVi","divViewCompBody00.chkAltMailRcv","visible","dsObjBindVi","chkAltMailRcv");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkAltMailRcvEn","divViewCompBody00.chkAltMailRcv","readonly","dsObjBindEn","chkAltMailRcv");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","divViewCompBody00.staPstn","text","gdsLabel","EPRO_LABEL_00069");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","divViewCompBody00.staMjrJob","text","gdsLabel","EPRO_LABEL_00492");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","divViewCompBody00.staEmail","text","gdsLabel","EPRO_LABEL_00089");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("LabelLang29","divViewCompBody00.btn_chkId","text","gdsLabel","EPRO_LABEL_00107");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btn_chkIdVi","divViewCompBody00.btn_chkId","visible","dsObjBindVi","btn_chkId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btn_chkIdEn","divViewCompBody00.btn_chkId","enable","dsObjBindEn","btn_chkId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","divViewCompBody00.chkAltUse","text","gdsLabel","");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("SUserDetail.xfdl", function(exports) {
        /**
         * @파일명       	: SUserDetail.xfdl
         * @생성자       	: 배열
         * @생성일자     	: 2017. 11. 08
         * @설명			: 업체사용자정보상세
         * @최종수정자		: 안성민
         * @최종수정일자	: 2017. 12. 04.
        */

        //중복체크여부
        this.isUserChk = false;
        //대표사용자 변경 로그아웃여부
        this.boolLogout = false;
        this.isPwdChk = false;

        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {
        	var param = [
        					
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
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.LoadEventInfo(이벤트변수)
          * @return   : 
          * @desc     	: 폼 onload이벤트
          */
        this.fnFormOnload = function(obj,e)
        {
        	this.dsUserInfo.addRow();
        	var id = gfnGetTmprData("USER_ID");
        	
        	if(gfnIsNull(id)){
        		this.fnTrCallBack("newForm");
        		this.ptnrCtgrChk();
        	}else{
        		this.dsUserInfo.setColumn(0, "USER_ID", id);
        		this.fnSearch();
        	}
        	gfnClearTmprData();
        }

        this.ptnrCtgrChk = function()
        {
        	var sSvcID = "readPtnrCtgrChk";
         	var sController = "epro.ptnr.service.SPtnrService.readPtnrCtgrChk";
         	var sInDatasets = "";
         	var sOutDatasets = "";
         	var sCallbackFunc = "fnTrCallBack";
         
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
          * @함수명	: fnPreSearch
          * @desc     	: 조회 전 처리
          */
        this.fnPreSearch = function()
        {
        	return true;
        }

        /**
          * @함수명	: fnSearch
          * @desc     	: 조회 프로세스
          */
        this.fnSearch = function()
        {
        	if(!this.fnPreSearch()) return false;
        	
         	var sSvcID = "readUserDetail";
         	var sController = "epro.ptnr.service.SPtnrService.readUserDetail";
         	var sInDatasets = "dsUserInfo=dsUserInfo";
         	var sOutDatasets = "dsDetail=dsDetail";
         	var sCallbackFunc = "fnTrCallBack";
         
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
          * @함수명  : fnSave
          * @input    : obj:Button,  e:nexacro.ClickEventInfo
          * @return   : 
          * @desc     : 저장
          */
        this.fnSave = function(obj,e)
        {
        	if(!this.fnPreSave()) return false;
        	
        	if(this.boolLogout) {
        		if(!gfnConfirm("EPRO_LABEL_01355")) return false; 
        	} else {
        		if(!gfnConfirm("EPRO_LABEL_00001")) return false; 
        	}
        	
         	var sSvcID = "savePtnrUser";
         	var sController = "epro.ptnr.service.SPtnrService.savePtnrUser";
         	var sInDatasets = "dsDetail=dsDetail:A";
         	var sOutDatasets = "dsDetail=dsDetail";
         	var sCallbackFunc = "fnTrCallBack";
         
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc); 
        }

        /**
          * @함수명  : fnTrCallBack
          * @input    : strSvcID ,strErrCd ,strErrMsg
          * @return   : 
          * @desc     : 트랜잭션 콜백
          */
        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	if(strErrCd < 0){
        		return;
        	}	
        	
        	switch(strSvcID){				
        		case "readUserDetail" :	//조회
        			this.isUserChk = true;
        			this.isPwdChk = true;
        			if("Y" == this.dsDetail.getColumn(0, "ALT_RPTST")) {
        				gfnSetObj("A");
        			} else {
        				gfnSetObj("C");
        			}
        		break;		
        		case "savePtnr" :	//저장
        			gfnAlert(strErrMsg);
        			this.fnSearch();
        		break;
        		case "newForm" : 	//신규
        			this.isUserChk = false;
        			this.fnUserIdEditColor(this.isUserChk)
        			this.dsDetail.addRow();
        			this.dsDetail.setColumn(0, "ALT_RPTST"	, "N");
        			this.dsDetail.setColumn(0, "ALT_USE"		, "Y");
        			this.dsDetail.setColumn(0, "ALT_SMS_RCV"	, "Y");
        			this.dsDetail.setColumn(0, "ALT_MAIL_RCV"	, "Y");

        			gfnSetObj("B");
        		break;
        		case "savePtnrUser" : // 사용자 정보 저장
        			gfnAlert(strErrMsg);
        			
        			if(strErrCd != 1){
        				if(this.boolLogout) { //로그아웃
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
        				} else {
        					this.dsUserInfo.setColumn(0, "USER_ID", this.dsDetail.getColumn(0, "USER_ID"));
        					this.fnSearch();
        				}
        				
        			} else if(strErrCd == 1){
        				this.dsDetail.set_updatecontrol(false);
        				this.dsDetail.setRowType(0, Dataset.ROWTYPE_INSERT);
        				this.dsDetail.set_updatecontrol(true);
        				this.isUserChk = false;
        				this.fnUserIdEditColor(this.isUserChk)
        			}
        			//사용자 유저 권한도 넣어준다.
        		break;
        		
        		case "readPtnrCtgrChk" : // 사용자업체유형
        			this.dsDetail.setColumn(0, "CD_PTNR_CTGR", strErrMsg);
        		break;
        		
        		case "checkPtnrUserId" : //아이디중복체크
        			if(this.dsUserChk.getRowCount()>0){
        				gfnAlert("EPRO_LABEL_01125");
        				this.isUserChk = false;
        				this.fnUserIdEditColor(this.isUserChk)
        			}else{
        				gfnAlert("EPRO_LABEL_01126");
        				this.isUserChk = true;
        				this.fnUserIdEditColor(this.isUserChk)
        			}
        			break;
        		break;
        		
        		default:
        		
        		
        		
        		
        		break;		
        	}
        }	
        /**
          * @함수명	: fnAdd
          * @desc     	: (공통버튼)신규
          */
        this.fnAdd = function(){
        	gfnOpenMenuUrl("SPTNR::SUserDetail");
        }
        /**
          * @함수명  : fnPreSave
          * @input    : 
          * @return   : 
          * @desc     : 저장전 유효성체크
          */
        this.fnPreSave = function()
        {	
        	var arr = [];
        	
        	if(!this.isUserChk) {
        		gfnAlert("EPRO_LABEL_01081");
        		return; 
        	}
        	
            var telCheckBool = true;//해외면 false
        	if("SR12AB" == this.dsDetail.getColumn(0, "CD_PTNR_CTGR")) { 
        		telCheckBool = false;
        	}
        	
        	// 사용자 ID 체크
        	if(gfnIsNull(this.dsDetail.getColumn(0, "USER_ID"))){
        		var msg = gfnMultiLabel("EPRO_LABEL_00995");
        		var type = gfnMultiLabel("EPRO_LABEL_00935"); 
        		var objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        		arr.push(objParam);
        	}
        	// 사용자명 체크
        	if(gfnIsNull(this.dsDetail.getColumn(0, "USER_NM"))){
        		var msg = gfnMultiLabel("EPRO_LABEL_00996");
        		var type = gfnMultiLabel("EPRO_LABEL_00935");
        		var objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        		arr.push(objParam);
        	}
        	// 휴대전화 체크
        	if(gfnIsNull(this.dsDetail.getColumn(0, "HP"))){	
        		var msg = gfnMultiLabel("EPRO_LABEL_00998");
        		var type = gfnMultiLabel("EPRO_LABEL_00935");
        		var objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        		arr.push(objParam);
        	} else {
        		if(!gfnIsTel(this.dsDetail.getColumn(0, "HP")) && telCheckBool) {
        			var msg = gfnMultiLabel("EPRO_LABEL_00992");
        			var type = gfnMultiLabel("EPRO_LABEL_00935");
        			var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        			arr.push(objParam);
        		}
        	}
        	//TEL
        	if(!gfnIsNull(this.dsDetail.getColumn(0, "TEL"))) {
        		if(!gfnIsTel(this.dsDetail.getColumn(0, "TEL")) && telCheckBool) {
        			var msg = gfnMultiLabel("EPRO_LABEL_00991");
        			var type = gfnMultiLabel("EPRO_LABEL_01194");
        			var objParam = {agv_msg:msg, agv_type:type};
        			arr.push(objParam);
        		} 
        	}
        	//FAX
        	if(!gfnIsNull(this.dsDetail.getColumn(0, "FAX"))) {
        		if(!gfnIsTel(this.dsDetail.getColumn(0, "FAX"), "T") && telCheckBool) {
        			var msg = gfnMultiLabel("EPRO_LABEL_01216");
        			var type = gfnMultiLabel("EPRO_LABEL_01194");
        			var objParam = {agv_msg:msg, agv_type:type};
        			arr.push(objParam);
        		} 
        	}
        	// EMAIL
        	if(gfnIsNull(this.dsDetail.getColumn(0, "EMAIL"))) {
        		var msg = gfnMultiLabel("EPRO_LABEL_01068");
        		var type = gfnMultiLabel("EPRO_LABEL_00935");
        		var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        		arr.push(objParam);
        	} else {
        		if(!gfnChkEmail(this.dsDetail.getColumn(0, "EMAIL"))) {
        			var msg = gfnMultiLabel("EPRO_LABEL_01140");
        			var type = gfnMultiLabel("EPRO_LABEL_01194");
        			var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        			arr.push(objParam);
        		}
        	}

        	var ldr = this.dsDetail.getColumn(0, "ALT_RPTST");
        	var use = this.dsDetail.getColumn(0, "ALT_USE");
        	
        	if((ldr == "Y" && use == "N")){
        		var msg = gfnMultiLabel("EPRO_LABEL_01006");
        		var type = gfnMultiLabel("EPRO_LABEL_00577");
        		var objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        		arr.push(objParam);
        	}
        	if((this.dsDetail.getColumn(0,"LDRCHECK") == "Y" && ldr == "N")){
        		var msg = gfnMultiLabel("EPRO_LABEL_01005");
        		var type = gfnMultiLabel("EPRO_LABEL_00577");
        		var objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        		arr.push(objParam);
        	}
        	
        	if(this.isPwdChk){
        		return gfnValidate(this, true, arr);
        	}else{
        		return this.fnPwdCheck(arr);
        	}
        	
        }

        /**
          * @함수명	: fnAltUseCanitemchange
          * @desc     	: 대표사용자는 사용여부 'N'으로 설정할수없음
          */
        this.fnAltUseCanitemchange = function(obj,e)
        {
        	if("N"==e.postvalue && "Y" == this.dsDetail.getColumn(0, "ALT_RPTST")) {
        		gfnAlert("EPRO_LABEL_01196");
        		return false;
        	}
        	
        	return true;
        }

        /**
          * @함수명	: fnRptstOnitemchanged
          * @desc     	: 대표사용자 선택시 사용여부 'Y' 설정
          */
        this.fnRptstOnitemchanged = function(obj,e)
        {
        	if("Y"==e.postvalue) {
        		this.divViewCompBody00.rdoAltUse.set_value("Y");
        		return true;
        	}
        }

        /**
          * @함수명  : fnPwdCheck
          * @input    :
          * @return   :
          * @desc     : 비밀번호 유효성체크
          */
        this.fnPwdCheck = function(arr)
        {
        	var pwd = this.dsDetail.getColumn(0,"PWD");
        	var repwd = this.dsDetail.getColumn(0,"CHECK_PW");
        	var SamePass_0 = 0; //동일문자 카운트
        	var SamePass_1 = 0; //연속성(+) 카운드
        	var SamePass_2 = 0; //연속성(-) 카운드

        	if(gfnIsNull(pwd)){
        		var msg = gfnMultiLabel("EPRO_LABEL_00934");
        		var type = gfnMultiLabel("EPRO_LABEL_00935");
        		var objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        		arr.push(objParam);
        		
        		return gfnValidate(this, true, arr);
        	}

        	if(gfnIsNull(repwd)){
        		var msg = gfnMultiLabel("EPRO_LABEL_01128");
        		var type = gfnMultiLabel("EPRO_LABEL_01139");
        		var objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        		arr.push(objParam);
        		
        		return gfnValidate(this, true, arr);
        	}

        	if(pwd != repwd){
        		var msg = gfnMultiLabel("EPRO_LABEL_00927");
        		var type = gfnMultiLabel("EPRO_LABEL_01139");
        		var objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        		arr.push(objParam);		
        	}
        	
        	if(pwd.length < 6 || pwd.length > 16){
        		var msg = gfnMultiLabel("EPRO_LABEL_01129");
        		var type = gfnMultiLabel("EPRO_LABEL_01194");
        		var objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        		arr.push(objParam);
        	}

        	if(!pwd.match(/([a-zA-Z0-9].*[!,@,#,$,%,^,&,*,?,_,~])|([!,@,#,$,%,^,&,*,?,_,~].*[a-zA-Z0-9])/)){
        		var msg = gfnMultiLabel("EPRO_LABEL_01130");
        		var type = gfnMultiLabel("EPRO_LABEL_01194");
        		var objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        		arr.push(objParam);
        	}

        	if(this.dsDetail.getColumn(0,"USER_ID").indexOf(pwd) > -1){
        		var msg = gfnMultiLabel("EPRO_LABEL_01131");
        		var type = gfnMultiLabel("EPRO_LABEL_01194");
        		var objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        		arr.push(objParam);
        	}

        	for(var i = 0 ; i < pwd.length; i++){
        		var chrPass_0 = pwd.charAt(i);
        		var chrPass_1 = pwd.charAt(i+1);
        		var chrPass_2 = pwd.charAt(i+2);

        		if(chrPass_0 == chrPass_1){
        			SamePass_0 = SamePass_0 + 1;
        		}

        		if(chrPass_0.charCodeAt(0) - chrPass_1.charCodeAt(0) == 1 && chrPass_1.charCodeAt(0) - chrPass_2.charCodeAt(0) == 1){
        			SamePass_1 = SamePass_1 + 1;
        		}

        		if(chrPass_0.charCodeAt(0) - chrPass_1.charCodeAt(0) == -1 && chrPass_1.charCodeAt(0) - chrPass_2.charCodeAt(0) == -1){
        			SamePass_2 = SamePass_2 + 1;
        		}
        	}

        	if(SamePass_0 > 1){
        		var msg = gfnMultiLabel("EPRO_LABEL_01132");
        		var type = gfnMultiLabel("EPRO_LABEL_01194");
        		var objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        		arr.push(objParam);
        	}

        	if(SamePass_1 > 1 || SamePass_2 > 1){
        		var msg = gfnMultiLabel("EPRO_LABEL_01133");
        		var type = gfnMultiLabel("EPRO_LABEL_01194");
        		var objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        		arr.push(objParam);
        	}
        	
        	
        	return gfnValidate(this, true, arr);
        }

        /**
          * @함수명  : fnChkRptstOnchanged
          * @input    :
          * @return   :
          * @desc     : 대표사용자 변경
          */
        this.fnChkRptstOnchange = function(obj,e)
        {
        	if("Y" == e.postvalue) {
        		if(gfnConfirm("EPRO_LABEL_01354")) {
        			this.divViewCompBody00.chkAltUse.set_value("Y");
        			this.divViewCompBody00.chkAltUse.set_readonly(true);
        			this.boolLogout = true;
        			return true;
        		} else {
        			this.divViewCompBody00.chkRptst.canchange
        			this.divViewCompBody00.chkAltUse.set_readonly(false);
        			this.boolLogout = false;
        			return false;	
        		}
        	} else {
        		this.divViewCompBody00.chkAltUse.set_readonly(false);
        		return true;
        	}
        }

        /**
          * @함수명  : fnUserIdChk
          * @input    : obj:Button,  e:nexacro.ClickEventInfo
          * @return   :
          * @desc     : 아이디 중복체크
          */
        this.fnUserIdChk = function(obj,e)
        {
        	this.divViewCompBody00.edtUserId.updateToDataset();
        	if(gfnIsNull(this.dsDetail.getColumn(0,"USER_ID"))){
        		gfnAlert("EPRO_LABEL_01124");
        		return;
        	 }
        	
        	 this.dsUserChk.clearData();
        	 var nRow = this.dsUserChk.addRow();
        	 this.dsUserChk.setColumn(nRow,"USER_ID",this.dsDetail.getColumn(0,"USER_ID"));

        	var sSvcID = "checkPtnrUserId";
        	var sController = "epro.ptnr.service.SPtnrService.checkPtnrUserId";
        	var sInDatasets = "dsUserChk=dsUserChk";
        	var sOutDatasets = "dsUserChk=dsUserChk";
        	var sCallbackFunc = "fnTrCallBack";

            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        this.fnUserIdEditColor = function(bool)
        {
        	if(bool) {
        		this.divViewCompBody00.edtUserId.style.set_background("#ffffffff")
        	} else {
        		this.divViewCompBody00.edtUserId.style.set_background("bisque")
        	}
        }

        /**
           @function   fnUserIdOnchanged()
           @desc       Id 변경시 다시 중복체크
        */
        this.fnUserIdOnchanged = function(obj,e)
        {
        	this.isUserChk = false;
        	this.fnUserIdEditColor(this.isUserChk);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.divViewCompTitle00.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompBody00.edtUserId.addEventHandler("onchanged", this.fnUserIdOnchanged, this);
            this.divViewCompBody00.chkRptst.addEventHandler("canchange", this.fnChkRptstOnchange, this);
            this.divViewCompBody00.btn_chkId.addEventHandler("onclick", this.fnUserIdChk, this);

        };

        this.loadIncludeScript("SUserDetail.xfdl", true);

       
    };
}
)();
