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
                this.set_name("PCTRB300N00");
                this.set_titletext("일반계약상세");
                this._setFormPosition(0,0,1220,711);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cntr", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DOC_CTGR\" size=\"40\" type=\"string\"/><Column id=\"CNTR_NO\" size=\"40\" type=\"string\"/><Column id=\"TTL\" size=\"600\" type=\"string\"/><Column id=\"CD_CNTR_STTS\" size=\"40\" type=\"string\"/><Column id=\"PTNR_ID\" size=\"40\" type=\"string\"/><Column id=\"PTNR_NM\" size=\"200\" type=\"string\"/><Column id=\"CD_PYMT_CNDTN\" size=\"40\" type=\"string\"/><Column id=\"CD_CNTR_TYPE\" size=\"40\" type=\"string\"/><Column id=\"CD_CNTR_CTGR\" size=\"40\" type=\"string\"/><Column id=\"DFCT_GRNT_PRID\" size=\"60\" type=\"string\"/><Column id=\"CNTR_AMT\" size=\"22\" type=\"bigdecimal\"/><Column id=\"CNTR_BGN_DAY\" size=\"8\" type=\"string\"/><Column id=\"CNTR_END_DAY\" size=\"8\" type=\"string\"/><Column id=\"LNK_CNTR_NO\" size=\"40\" type=\"string\"/><Column id=\"LNK_CNTR_TTL\" size=\"600\" type=\"string\"/><Column id=\"CD_CRNC\" size=\"40\" type=\"string\"/><Column id=\"CHRGR_ID\" size=\"50\" type=\"string\"/><Column id=\"CHRGR_NM\" size=\"90\" type=\"string\"/><Column id=\"TEL\" size=\"30\" type=\"string\"/><Column id=\"EMAIL\" size=\"100\" type=\"string\"/><Column id=\"FAX\" size=\"30\" type=\"string\"/><Column id=\"RMARK\" size=\"1500\" type=\"string\"/><Column id=\"CNTR_TMPL_ID\" size=\"40\" type=\"string\"/><Column id=\"ALT_INTL_CFM\" size=\"1\" type=\"string\"/><Column id=\"SIGN_ORGNL\" size=\"4000\" type=\"string\"/><Column id=\"CRTR_ID\" size=\"50\" type=\"string\"/><Column id=\"UL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"UL_CNTR_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UL_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_return", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_porg", this);
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_PLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RPRSTV_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cntrItem", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_2", "absolute", "0%", "65", null, "24", "15", null, this);
            obj.set_taborder("11");
            obj.getSetter("objNm").set("DIV-헤더 타이틀");
            this.addChild(obj.name, obj);
            obj = new Button("btn_opHead", "absolute", "0%", "0", "147", "24", null, null, this.div_2);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_DivClose");
            obj.getSetter("objNm").set("기본정보");
            obj.set_text("기본정보");
            obj.getSetter("lbcd").set("");
            this.div_2.addChild(obj.name, obj);

            obj = new Div("div_21", "absolute", "0", "99", null, "190", "15", null, this);
            obj.set_taborder("1");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("DIV-헤더 상세");
            this.addChild(obj.name, obj);
            obj = new Tab("Tab01", "absolute", "0", "0", null, "157", "0", null, this.div_21);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.getSetter("objNm").set("특이사항");
            obj.set_cssclass("tab_default");
            this.div_21.addChild(obj.name, obj);
            obj = new Tabpage("tabp01", this.div_21.Tab01);
            obj.set_text("기본정보");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("기본정보");
            obj.getSetter("lbcd").set("");
            this.div_21.Tab01.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label05", "absolute", "0", "10", null, "78", "0", null, this.div_21.Tab01.tabp01);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edt_Ttl", "absolute", "117", "21", "797", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("0");
            obj.getSetter("objNm").set("계약명");
            obj.set_lengthunit("utf8");
            obj.set_cssclass("edt_default");
            obj.set_maxlength("100");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("st_Ttl", "absolute", "0", "21", "117", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("13");
            obj.set_text("<fc v='red'>* </fc>계약명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("lbcd").set("");
            obj.set_usedecorate("true");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("ed_cntrDt", "absolute", "0", "50", "117", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("19");
            obj.set_text("계약일자");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("objNm").set("계약일자");
            obj.getSetter("lbcd").set("");
            obj.set_usedecorate("true");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("st_RfqStates00", "absolute", "460", "50", "101", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("20");
            obj.set_text("하자보증기간");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("objNm").set("하자보증기간");
            obj.getSetter("lbcd").set("");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Combo("cbo_cdCntrStts", "absolute", "1003", "21", "150", "24", null, null, this.div_21.Tab01.tabp01);
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_cdCT10");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_enable("false");
            obj.set_value("null");
            obj.set_readonly("true");
            obj.getSetter("objNm").set("계약상태");
            obj.set_cssclass("cbo_default_r");
            obj.set_index("-1");
            obj = new Div("div_crtDt", "absolute", "117", "50", "220", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("9");
            obj.set_text("Div01");
            obj.getSetter("objNm").set("계약일자");
            obj.set_url("commComp::commCalFromTo.xfdl");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new MaskEdit("mae_cntrAmt", "absolute", "1003", "50", "150", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("8");
            obj.set_mask("9,999.###");
            obj.set_autoselect("true");
            obj.set_cssclass("mae_default");
            obj.style.set_color("blue");
            obj.style.set_font("bold 10 Dotum");
            obj.getSetter("objNm").set("계약금액");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edt_dfctGrntPrid", "absolute", "561", "50", "353", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("7");
            obj.set_lengthunit("utf8");
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("하자보증기간");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("st_cntrStates", "absolute", "886", "21", "117", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("14");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("lbcd").set("");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("st_cntrAmt", "absolute", "886", "50", "117", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("22");
            obj.set_text("계약금액");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("objNm").set("예산번호");
            obj.set_usedecorate("true");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Tabpage("tabp02", this.div_21.Tab01);
            obj.set_text("계약담당자  ");
            this.div_21.Tab01.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label00", "absolute", "0%", "10", null, "75", "0%", null, this.div_21.Tab01.tabp02);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Static("sta_cntrUser", "absolute", "0", "21", "117", "24", null, null, this.div_21.Tab01.tabp02);
            obj.set_taborder("0");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Static("sta_Tel", "absolute", "531", "21", "117", "24", null, null, this.div_21.Tab01.tabp02);
            obj.set_taborder("3");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Static("sta_email", "absolute", "0", "50", "117", "24", null, null, this.div_21.Tab01.tabp02);
            obj.set_taborder("5");
            obj.set_text("e-Mail");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Static("sta_fax", "absolute", "531", "50", "117", "24", null, null, this.div_21.Tab01.tabp02);
            obj.set_taborder("7");
            obj.set_text("Fax");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Edit("edt_cntrReqrId", "absolute", "117", "21", "100", "24", null, null, this.div_21.Tab01.tabp02);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("objNm").set("계약담당자ID");
            obj.set_cssclass("edt_default_r");
            obj.set_readonly("true");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Edit("edt_cntrReqrNm", "absolute", "220", "21", "250", "24", null, null, this.div_21.Tab01.tabp02);
            obj.set_taborder("2");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("계약담당자명");
            obj.set_cssclass("edt_default");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Button("btn_cntrUser", "absolute", "449", "21", "21", "24", null, null, this.div_21.Tab01.tabp02);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("계약담당자 검색 버튼");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Edit("edt_tel", "absolute", "648", "21", "400", "24", null, null, this.div_21.Tab01.tabp02);
            obj.set_taborder("4");
            obj.getSetter("objNm").set("계약담당자 전화번호");
            obj.set_cssclass("edt_default_r");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Edit("edt_email", "absolute", "117", "50", "353", "24", null, null, this.div_21.Tab01.tabp02);
            obj.set_taborder("6");
            obj.getSetter("objNm").set("계약담당자 EMAIL");
            obj.set_cssclass("edt_default_r");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Edit("edt_fax", "absolute", "648", "50", "400", "24", null, null, this.div_21.Tab01.tabp02);
            obj.set_taborder("8");
            obj.getSetter("objNm").set("계약담당자 FAX");
            obj.set_cssclass("edt_default_r");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Tabpage("tabp03", this.div_21.Tab01);
            obj.getSetter("objNm").set("특이사항");
            obj.set_text("특이사항");
            this.div_21.Tab01.addChild(obj.name, obj);
            obj = new TextArea("ta_rmark", "absolute", "0", "21", null, null, "0", "5", this.div_21.Tab01.tabp03);
            obj.set_taborder("1");
            obj.set_scrollbars("autovert");
            obj.getSetter("objNm").set("계약 특기사항");
            this.div_21.Tab01.tabp03.addChild(obj.name, obj);
            obj = new Tabpage("tabp04", this.div_21.Tab01);
            obj.set_text("첨부파일");
            obj.set_url("commComp::commFileUpDown.xfdl");
            this.div_21.Tab01.addChild(obj.name, obj);

            obj = new Div("div_3", "absolute", "0", "259", null, "24", "15", null, this);
            obj.set_taborder("2");
            obj.getSetter("objNm").set("DIV-품목 타이틀");
            this.addChild(obj.name, obj);
            obj = new Button("btn_opItem", "absolute", "0", "0", "99", "24", null, null, this.div_3);
            obj.set_taborder("34");
            obj.set_cssclass("btn_WF_DivClose");
            obj.getSetter("objNm").set("접기펼치기 버튼");
            obj.set_text("계약당사자");
            obj.getSetter("lbcd").set("");
            this.div_3.addChild(obj.name, obj);

            obj = new Div("div_31", "absolute", "0", "287", null, "189", "15", null, this);
            obj.set_taborder("3");
            obj.getSetter("objNm").set("계약당사자");
            obj.style.set_background("transparent");
            this.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label05", "absolute", "0", "10", null, "169", "0", null, this.div_31);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_31.addChild(obj.name, obj);
            obj = new Static("st_Ttl", "absolute", "0", "53", "117", "24", null, null, this.div_31);
            obj.set_taborder("1");
            obj.set_text("상호");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("lbcd").set("");
            this.div_31.addChild(obj.name, obj);
            obj = new Edit("edt_Ttl", "absolute", "117", "53", "400", "24", null, null, this.div_31);
            obj.set_taborder("2");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("상호");
            this.div_31.addChild(obj.name, obj);
            obj = new Edit("edt_Ttl00", "absolute", "117", "82", "400", "24", null, null, this.div_31);
            obj.set_taborder("3");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("주소");
            this.div_31.addChild(obj.name, obj);
            obj = new Edit("edt_Ttl01", "absolute", "117", "111", "400", "24", null, null, this.div_31);
            obj.set_taborder("4");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("사업자번호");
            this.div_31.addChild(obj.name, obj);
            obj = new Edit("edt_Ttl02", "absolute", "117", "140", "400", "24", null, null, this.div_31);
            obj.set_taborder("5");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("대표이사");
            this.div_31.addChild(obj.name, obj);
            obj = new Static("st_Ttl00", "absolute", "0", "82", "117", "24", null, null, this.div_31);
            obj.set_taborder("6");
            obj.set_text("주소");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("lbcd").set("");
            this.div_31.addChild(obj.name, obj);
            obj = new Static("st_Ttl01", "absolute", "0", "111", "117", "24", null, null, this.div_31);
            obj.set_taborder("7");
            obj.set_text("사업자번호");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("lbcd").set("");
            this.div_31.addChild(obj.name, obj);
            obj = new Static("st_Ttl02", "absolute", "0", "140", "117", "24", null, null, this.div_31);
            obj.set_taborder("8");
            obj.set_text("대표이사");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("lbcd").set("");
            this.div_31.addChild(obj.name, obj);
            obj = new Static("st_Ttl04", "absolute", "605", "111", "160", "24", null, null, this.div_31);
            obj.set_taborder("11");
            obj.set_text("번호(사업자,주민번호)");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("lbcd").set("");
            this.div_31.addChild(obj.name, obj);
            obj = new Edit("edt_Ttl04", "absolute", "765", "111", "400", "24", null, null, this.div_31);
            obj.set_taborder("12");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("150");
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("사업자번호");
            this.div_31.addChild(obj.name, obj);
            obj = new Edit("edt_Ttl05", "absolute", "765", "82", "400", "24", null, null, this.div_31);
            obj.set_taborder("13");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("주소");
            this.div_31.addChild(obj.name, obj);
            obj = new Static("st_Ttl05", "absolute", "648", "82", "117", "24", null, null, this.div_31);
            obj.set_taborder("14");
            obj.set_text("주소");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("lbcd").set("");
            this.div_31.addChild(obj.name, obj);
            obj = new Static("st_Ttl06", "absolute", "648", "53", "117", "24", null, null, this.div_31);
            obj.set_taborder("15");
            obj.set_text("계약당사자명");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("lbcd").set("");
            this.div_31.addChild(obj.name, obj);
            obj = new Edit("edt_Ttl06", "absolute", "765", "53", "400", "24", null, null, this.div_31);
            obj.set_taborder("16");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("상호");
            this.div_31.addChild(obj.name, obj);
            obj = new Static("st_Ttl07", "absolute", "208", "21", "139", "24", null, null, this.div_31);
            obj.set_taborder("17");
            obj.set_text("파라다이스");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("lbcd").set("");
            this.div_31.addChild(obj.name, obj);
            obj = new Static("st_Ttl08", "absolute", "861", "21", "139", "24", null, null, this.div_31);
            obj.set_taborder("18");
            obj.set_text("계약당사자");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("lbcd").set("");
            this.div_31.addChild(obj.name, obj);

            obj = new Div("div_7", "absolute", "0", "491", null, "24", "15", null, this);
            obj.set_taborder("9");
            obj.getSetter("objNm").set("DIV-대상업체");
            this.addChild(obj.name, obj);
            obj = new Button("btn_oPItem", "absolute", "0", "0", "185", "24", null, null, this.div_7);
            obj.set_taborder("5");
            obj.set_text("계약내용");
            obj.set_cssclass("btn_WF_DivClose");
            obj.getSetter("objNm").set("접기펼치기 버튼");
            obj.getSetter("lbcd").set("");
            this.div_7.addChild(obj.name, obj);
            obj = new Button("btn_cntrTemplate_Add", "absolute", null, "0", "150", "24", "2", null, this.div_7);
            obj.set_taborder("6");
            obj.set_text("계약내용 템플릿참조");
            obj.set_cssclass("btn_WF_Add");
            obj.getSetter("objNm").set("계약내용 템플릿참조");
            obj.getSetter("lbcd").set("");
            this.div_7.addChild(obj.name, obj);

            obj = new Div("div_71", "absolute", "0", "520", null, "560", "15", null, this);
            obj.set_taborder("10");
            obj.set_text("div_71");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new WebBrowser("WebBrowser00", "absolute", "0", "0", null, null, "0", "10", this.div_71);
            obj.set_taborder("1");
            this.div_71.addChild(obj.name, obj);
            obj = new WebBrowser("wb_daumEditor", "absolute", "0", "0", null, null, "0", "10", this.div_71);
            obj.set_taborder("0");
            this.div_71.addChild(obj.name, obj);

            obj = new Div("div_1", "absolute", "0", "0", null, "45", "15", null, this);
            obj.set_taborder("0");
            obj.getSetter("objNm").set("컨트롤 박스");
            obj.set_cssclass("div_WF_SearchBg3");
            this.addChild(obj.name, obj);
            obj = new Edit("mae_docNo", "absolute", "20", "10", "278", "24", null, null, this.div_1);
            obj.set_taborder("1");
            obj.getSetter("objNm").set("문서번호");
            obj.set_cssclass("input_point");
            obj.set_readonly("true");
            this.div_1.addChild(obj.name, obj);
            obj = new Button("btn_intlCfm", "absolute", null, "10", "70", "24", "3", null, this.div_1);
            obj.set_taborder("4");
            obj.set_text("내부확정");
            obj.set_cssclass("btn_WF_SearchBtn");
            obj.getSetter("objNm").set("내부확정");
            this.div_1.addChild(obj.name, obj);
            obj = new Button("btn_CntrCxl", "absolute", null, "10", "70", "24", "3", null, this.div_1);
            obj.set_taborder("5");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_SearchBtn");
            obj.getSetter("objNm").set("취소");
            this.div_1.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.div_2,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("11");
            		p.getSetter("objNm").set("DIV-헤더 타이틀");

            	}
            );
            this.div_2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_21.Tab01.tabp01,
            	//-- Layout function
            	function(p) {
            		p.set_text("기본정보");
            		p.set_scrollbars("none");
            		p.getSetter("objNm").set("기본정보");
            		p.getSetter("lbcd").set("");

            	}
            );
            this.div_21.Tab01.tabp01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_21.Tab01.tabp02,
            	//-- Layout function
            	function(p) {
            		p.set_text("계약담당자  ");

            	}
            );
            this.div_21.Tab01.tabp02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_21.Tab01.tabp03,
            	//-- Layout function
            	function(p) {
            		p.set_text("특이사항");
            		p.getSetter("objNm").set("특이사항");

            	}
            );
            this.div_21.Tab01.tabp03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 190, this.div_21,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_scrollbars("none");
            		p.getSetter("objNm").set("DIV-헤더 상세");

            	}
            );
            this.div_21.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.div_3,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.getSetter("objNm").set("DIV-품목 타이틀");

            	}
            );
            this.div_3.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 189, this.div_31,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.getSetter("objNm").set("계약당사자");
            		p.style.set_background("transparent");

            	}
            );
            this.div_31.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.div_7,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("9");
            		p.getSetter("objNm").set("DIV-대상업체");

            	}
            );
            this.div_7.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1042, 500, this.div_71,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("10");
            		p.set_text("div_71");
            		p.set_scrollbars("none");

            	}
            );
            this.div_71.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 45, this.div_1,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.getSetter("objNm").set("컨트롤 박스");
            		p.set_cssclass("div_WF_SearchBg3");

            	}
            );
            this.div_1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1220, 711, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("FrmTemplate100");
            		p.set_titletext("일반계약상세");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div_21.Tab01.tabp01.edt_Ttl","value","ds_cntr","TTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_21.Tab01.tabp01.cbo_cdCntrStts","value","ds_cntr","CD_CNTR_STTS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","div_21.Tab01.tabp01.mae_cntrAmt","value","ds_cntr","CNTR_AMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","div_21.Tab01.tabp02.edt_cntrReqrId","value","ds_cntr","CHRGR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","div_21.Tab01.tabp02.edt_cntrReqrNm","value","ds_cntr","CHRGR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","div_21.Tab01.tabp02.edt_tel","value","ds_cntr","TEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","div_21.Tab01.tabp02.edt_email","value","ds_cntr","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","div_21.Tab01.tabp02.edt_fax","value","ds_cntr","FAX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","div_21.Tab01.tabp03.ta_rmark","value","ds_cntr","RMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","div_1.mae_docNo","value","ds_cntr","CNTR_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","div_21.Tab01.tabp01.edt_dfctGrntPrid","value","ds_cntr","DFCT_GRNT_PRID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_31.edt_Ttl","value","ds_porg","BIZ_PLC_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","div_31.edt_Ttl00","value","ds_porg","ADDR1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","div_31.edt_Ttl01","value","ds_porg","BIZ_PLC_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","div_31.edt_Ttl02","value","ds_porg","RPRSTV_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","div_31.edt_Ttl06","value","ds_cntr","UL_CNTR_USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","div_31.edt_Ttl05","value","ds_cntr","UL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","div_31.edt_Ttl04","value","ds_cntr","UL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "commComp::commCalFromTo.xfdl");
            this._addPreloadList("fdl", "commComp::commFileUpDown.xfdl");
        };
        
        // User Script
        this.addIncludeScript("PCTRB300N00.xfdl", "lib::lib_all.xjs");
        this.registerScript("PCTRB300N00.xfdl", function(exports) {
        /**
           @file       PCTRB300N00.xfdl
           @desc       일반계약서상세
           @author     송태봉
           @makedate   2016.10.04
           @history    
        */
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::lib_all.xjs", null, exports); }	//include "lib::lib_all.xjs";

        /**
        	@function	form_oninit()
        	@desc   	폼 oninit이벤트
        */
        this.form_oninit = function(obj,e)
        {	
        	this.fn_setCode();	
        }

        this.fn_setCode = function()
        {
        	
        	//콤보박스 생성시 S:선택, A:전체
        	var param = [
        					{code:"CT10", sSelectType:"S"} // 계약상태
        				];

        	//공통코드 데이터셋 생성 : "ds_cd" + code + sfx
        	this.gfn_getCommonCode(param);
        }

        /**
        	@function	form_onload()
        	@desc   	폼 onload이벤트
        */
        this.form_onload = function(obj,e)
        {
        	// 시스템 공통함수 호출
        	this.gfn_formOnLoad(obj,"C");
        	
        	// 달력 데이터셋과 매핑
        	this.div_21.Tab01.tabp01.div_crtDt.fn_setDate(this.ds_cntr, "CNTR_BGN_DAY", "CNTR_END_DAY");
        	this.ds_cntr.addRow();
        		
        	this.fv_cntrNo = this.gfn_getTmprData("CNTR_NO");
        	//파라미터를 받은 이후에는 파라미터를 를 초기화 해준다.
        	this.gfn_clearTmprData(); 
        	
        	if(!this.gfn_isNull(this.fv_cntrNo)){
        		this.ds_cntr.setColumn(0,"CNTR_NO",this.fv_cntrNo);
        		this.fn_search();
        	} else{
        		this.parent.div_commBtns.btn_comDel.set_visible(false); // 삭제버튼
        		this.parent.div_commBtns.btn_commSave.set_visible(true); // 저장버튼
        		this.gfn_btnRange(this.parent.div_commBtns.btn_commSave);
        		
        		//신규 작성 시 파일내부의 Dataset을 초기화 시켜준다.
        		this.ds_cntr.setColumn(0,"CHRGR_ID",application.gds_userInfo.getColumn(0, "USER_ID"));
        		this.ds_cntr.setColumn(0,"CHRGR_NM",application.gds_userInfo.getColumn(0, "USER_NM"));
        		this.ds_cntr.setColumn(0,"TEL",application.gds_userInfo.getColumn(0, "TEL"));
        		this.ds_cntr.setColumn(0,"EMAIL",application.gds_userInfo.getColumn(0, "EMAIL"));
        		this.ds_cntr.setColumn(0,"FAX",application.gds_userInfo.getColumn(0, "FAX"));
        		this.ds_cntr.setColumn(0,"CD_CNTR_STTS","CT10WRI"); 								// 계약상태
        		this.ds_cntr.setColumn(0,"CD_CNTR_TYPE",""); 										// 계약유형
        		this.gfn_newFileDsInit(this.ds_cntr);
        		this.div_71.wb_daumEditor.set_url(application.services["svcurl"].url+"daumeditor/editor.jsp");
        	}
        	
        	//운영단위 정보 조회
        	this.fn_porgSrch();
        	
        	//FILE_JOB_1 : 데이터 조회 이후에 파일 정보를 조회하기 위해 동기화 한다.
        	this.gfn_fileCompInit(this.div_21.Tab01.tabp04);
        }

        /**
        	@function	fn_search()
        	@desc   	조회 프로세스
        */
        this.fn_search = function()
        {
        	var sSvcID = "Cntr_NormalRead";
        	var sController = "Cntr_NormalRead.do";
        	var sInDatasets = "in_ds=ds_cntr";
        	var sOutDatasets = "ds_cntr=ds_cntr";
        	var sCallbackFunc = "fn_trCallBack";

        	//FILE_JOB_2 :  트랜잭션 gfn_fileTran 으로 변경
            this.gfn_fileTran(sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
        	@function	fn_porgSrch()
        	@desc   	운영단위 조회 함수
        */
        this.fn_porgSrch = function()
        {
        	var sSvcID = "Cntr_BranchSrch";	
        	var sController = "Cntr_BranchSrch.do";
        	var sInDatasets = "";
        	var sOutDatasets = "ds_porg=out_list";
        	var sCallbackFunc = "fn_trCallBack";
        	
            this.gfn_tran(sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
        	@function	btn_cntrUser_onclick()
        	@desc   	담당자 검색 함수
        */
        this.btn_cntrUser_onclick = function(obj,e)
        {
        	var sArg = { 
        				agv_nm:this.ds_cntr.getColumn(0,"CHRGR_NM")
        			   };
        	this.gfn_CPop_ComUserSrch(sArg,"fn_popCallBack","PopupComUserSrchInput");
        }

        /**
        	@function	fn_popCallBack()
        	@desc   	팝업 CallBack 함수
        */
        this.fn_popCallBack = function(sPopupId,rtn)
        {
        	if(this.gfn_isNull(rtn)) return;
        	
        	if(rtn.indexOf("<Dataset id=") == 0){
        		this.ds_return.loadXML(rtn);
        		
        		// 계약내용 템플릿참조
        		if(sPopupId == "PopupCntrTmpl"){
        			this.ds_cntr.setColumn(this.ds_cntr.rowposition,"SIGN_ORGNL",this.ds_return.getColumn(0,"CNTR_CNTNT"));
        			this.ds_cntr.setColumn(this.ds_cntr.rowposition,"CNTR_TMPL_ID",this.ds_return.getColumn(0,"CNTR_TMPL_ID"));
        			this.div_71.wb_daumEditor.callMethod("setContent");
        		
        		// 계약담당자 검색
        		}else if(sPopupId == "PopupComUserSrchInput"){
        			
        			this.ds_cntr.setColumn(0,"CHRGR_ID",this.ds_return.getColumn(0,"USER_ID"));
        			this.ds_cntr.setColumn(0,"CHRGR_NM",this.ds_return.getColumn(0,"USER_NM"));
        			this.ds_cntr.setColumn(0,"TEL",this.ds_return.getColumn(0,"TEL"));
        			this.ds_cntr.setColumn(0,"EMAIL",this.ds_return.getColumn(0,"EMAIL"));
        			this.ds_cntr.setColumn(0,"FAX",this.ds_return.getColumn(0,"FAX"));
        		}
        	}
        }

        /**
        	@function	fn_callBack()
        	@desc   	Transaction Callback함수
        */
        this.fn_trCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	//strSvcID 가 read:fn_trCallBack 게 넘어옴
        	if(strErrCd < 0)
        	{
        		return;
        	}
        	
        	switch(strSvcID)
        	{
        		case "Cntr_BranchSrch" :
        		break;
        		
        		case "Cntr_NormalSave" : 
        			if(strErrMsg != ""){
        				
        				this.gfn_alert(strErrMsg);
        				//저장후 받아온 값으로 데이터조회
        				if(this.ds_cntr.getColumn(0,"CD_CNTR_STTS") == 'CT10SCLO'){
        					this.div_71.wb_daumEditor.set_visible(false);
        				}
        				
        				this.fv_cntrNo = this.ds_cntr.getColumn(0,"CNTR_NO");
        				this.fn_search();
        			}
        		break;
        		
        		case "Cntr_NormalRead" :
        			if(this.ds_cntr.getColumn(0,"CD_CNTR_STTS") == 'CT10WRI'){
        				this.div_71.wb_daumEditor.set_url(application.services["svcurl"].url+"daumeditor/editor.jsp");
        			} else{
        				this.gfn_objReSet(this,"R");
        				this.div_21.Tab01.tabp01.div_crtDt.set_enable(false);
        				this.parent.div_commBtns.btn_comDel.set_visible(false); // 삭제버튼
        				this.parent.div_commBtns.btn_commSave.set_visible(false); // 저장버튼
        				this.gfn_btnRange(this.parent.div_commBtns.btn_commNew);
        				this.div_71.wb_daumEditor.set_visible(false);
        				
        				var start = "<div style="+"color:#333333;font:20 malgun gothic;>";
        				var end   = "</div>";
        				var doc = this.div_71.WebBrowser00.getProperty("document");
        				doc.callMethod("write", start+this.ds_cntr.getColumn(0,"SIGN_ORGNL")+end);
        				
        				//취소상태
        				if(this.ds_cntr.getColumn(0,"CD_CNTR_STTS") == 'CT10CXL'){
        					this.div_1.btn_CntrCxl.set_visible(false);
        				}
        			}
        			
        			this.fn_getCompFileList1();
        		break;
        		
        		case "Cntr_NormalDel" :
        			if(strErrMsg != ""){
        				this.gfn_alert(strErrMsg);
        				this.gfn_openMenuUrl("CTRB::PCTRB300L00.xfdl");
        			}
        		break;
        		
        		case "Cntr_Cxl" :
        			if(strErrMsg != ""){
        				this.gfn_alert(strErrMsg);
        				
        				//저장후 받아온 값으로 데이터조회
        				this.fv_cntrNo = this.ds_cntr.getColumn(0,"CNTR_NO");

        				this.fn_search();
        			}
        		break
        		
        		default :
        		break;
        	}
        }

        /**
        	@function	div_7_btn_tndrItemAdd01_onclick()
        	@desc   	계약내용 템플릿참조버튼 클릭 함수
        */
        this.div_7_btn_tndrItemAdd01_onclick = function(obj,e)
        {
        	var sArg = {   };
        	this.gfn_dialog("PopupCntrTmpl", "CTRB::PCTRB100P01.xfdl", sArg, "fn_popCallBack");
        }

        /**
        	@function	div_71_wb_daumEditor_onusernotify()
        	@desc   	KSPARK - Daum editor
        */
        this.div_71_wb_daumEditor_onusernotify = function(obj,e)
        { 
        	//런타임
        	if(obj.getProperty("document").getProperty("title").indexOf("▩") == 0){
        		//read
        		if (this.gfn_replace(obj.getProperty("document").getProperty("title"),"▩","") == "true"){
        			this.div_71.wb_daumEditor.callMethod("setEditor",this.ds_cntr.getColumn(0,"SIGN_ORGNL"));
        		//save
        		} else {
        			this.ds_cntr.setColumn(0,"SIGN_ORGNL",this.gfn_replace(obj.getProperty("document").getProperty("title"),"▩",""));
        			this.fn_commSave2();
        		}

        	//웹
        	} else if (e.userdata.indexOf("▦") == 0){
        		//read
        		if (this.gfn_replace(e.userdata,"▦","") == "true"){			
        			this.div_71.wb_daumEditor.callMethod("setEditor",this.ds_cntr.getColumn(0,"SIGN_ORGNL"));
        		//save
        		} else {
        			this.ds_cntr.setColumn(0,"SIGN_ORGNL",this.gfn_replace(e.userdata,"▦",""));
        			this.fn_commSave2();
        		}
        	}
        }

        /**
        	@function	div_21_Tab01_onchanged()
        	@desc   	
        */
        this.div_21_Tab01_onchanged = function(obj,e)
        {
        	if(this.div_21.Tab01.tabindex == 3){
        		//FILE_COMP_JOB_7 : 파일 첨부 컴포넌트 초기화 & 조회
        		this.fn_getCompFileList1();
        	}
        }

        //FILE_JOB_6 : 파일 컴포넌트에 파일정보 셋팅 및 필터 추가(컴포넌트 갯수 만큼 function 추가)
        this.fn_getCompFileList1 = function()
        {
        	if(this.div_21.Tab01.tabindex == 3) //첨부파일
        	{	
        		var array = [this.ds_cntr.getColumn(this.ds_cntr.rowposition, "CNTR_NO")];
        		
        		if("CT10WRI" == this.ds_cntr.getColumn(0,"CD_CNTR_STTS")){
        			this.div_21.Tab01.tabpages[this.div_21.Tab01.tabindex].fn_fileCompInit(this, "MM_CNTR", this.ds_cntr, array, "N"); //초기화 및 조회(필터링)
        		}else{
        			this.div_21.Tab01.tabpages[this.div_21.Tab01.tabindex].fn_fileCompInit(this, "MM_CNTR", this.ds_cntr, array, "Y"); //초기화 및 조회(필터링)
        		}
        	}
        }

        /**
        	@function	fn_commAdd()
        	@desc   	공통 신규
        */
        this.fn_commAdd = function()
        {
        	if(!this.gfn_confirm("신규작성 하시겠습니까?")) return;
        	this.gfn_openMenuUrl("CTRB::PCTRB300N00.xfdl");
        }

        /**
        	@function	fn_commDelete()
        	@desc   	(공통버튼)삭제 프로세스
        */
        this.fn_commDelete = function()
        {
        	if(!this.gfn_confirm("삭제 하시겠습니까?")) return;
        	
        	var sSvcID = "Cntr_NormalDel";	
        	var sController = "Cntr_NormalDel.do";
        	var sInDatasets = "in_cntr=ds_cntr";
        	var sOutDatasets = "ds_cntr=in_cntr";
        	var sCallbackFunc = "fn_trCallBack";
        	
            this.gfn_tran(sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
        	@function	fn_reqSave()
        	@desc   	저장
        */
        this.fn_reqSave = function()
        {	
        	if(!this.gfn_validate(null,"N")){		
        		return false;
        	}
        	
        	return true;
        }

        /**
        	@function	fn_commSave()
        	@desc   	(공통버튼)저장 프로세스
        */
        this.fn_commSave = function()
        {
        	if (!this.fn_reqSave()) return false;
        	if(!this.gfn_confirm("저장 하시겠습니까?")) return;
        	this.div_71.wb_daumEditor.callMethod("saveContent");
        }

        /**
        	@function	fn_commSave2()
        	@desc   	(공통버튼)저장 프로세스
        */
        this.fn_commSave2 = function()
        {	
        	var sSvcID = "Cntr_NormalSave";
        	var sController = "Cntr_NormalSave.do";
        	var sInDatasets = "in_cntr=ds_cntr:A"; 
        	var sOutDatasets = "ds_cntr=in_cntr";
        	var sCallbackFunc = "fn_trCallBack";
        	
        	//FILE_JOB_3 :  트랜잭션 gfn_fileTran 으로 변경
        	this.gfn_fileSaveTran(sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
        	@function	fn_onkeydown()
        	@desc   	키눌림 함수
        */
        this.fn_onkeydown = function(obj,e)
        {
        	if(e.keycode == "13"){
        		obj.updateToDataset();
        		
        		// 계약담당자 검색
        		if(obj.name == "edt_cntrReqrNm"){
        			this.btn_cntrUser_onclick();
        		}
        	}
        }

        /**
        	@function	fn_ontextchanged()
        	@desc   	텍스트변경시 함수
        */
        this.fn_ontextchanged = function(obj,e)
        {
        	// 계약담당자
        	if(obj.name == "edt_cntrReqrNm"){
        		this.gfn_initKey(this.ds_cntr,e,"CHRGR_ID","TEL","EMAIL","FAX");
        	}
        }

        /**
        	@function	div_1_btn_intlCfm_onclick()
        	@desc   	내부확정 함수
        */
        this.div_1_btn_intlCfm_onclick = function(obj,e)
        {
        	if (!this.fn_reqSave()) return false;
        	if(!this.gfn_confirm("내부확정 하시겠습니까?")) return;
         	this.ds_cntr.setColumn(0,"CD_CNTR_STTS","CT10SCLO");
         	this.ds_cntr.setColumn(0,"ALT_INTL_CFM","Y");
         	this.div_71.wb_daumEditor.callMethod("saveContent");
        }

        /**
        	@function	div_1_btn_CntrCxl_onclick()
        	@desc   	취소
        */
        this.div_1_btn_CntrCxl_onclick = function(obj,e)
        {
        	if(!this.gfn_confirm("취소 하시겠습니까?")) return;
        	
        	var sSvcID = "Cntr_Cxl";
        	var sController = "Cntr_Cxl.do";
        	var sInDatasets = "in_cntr=ds_cntr:A in_item=ds_cntrItem:A"; 
        	var sOutDatasets = "ds_cntr=in_cntr";
        	var sCallbackFunc = "fn_trCallBack";
        	
            this.gfn_fileSaveTran(sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("oninit", this.form_oninit, this);
            this.div_2.btn_opHead.addEventHandler("onclick", this.fn_fold_onclick, this);
            this.div_21.Tab01.addEventHandler("onchanged", this.div_21_Tab01_onchanged, this);
            this.div_21.Tab01.tabp01.st_Ttl.addEventHandler("onclick", this.div_21_Tab01_tabp01_st_Ttl_onclick, this);
            this.div_21.Tab01.tabp01.cbo_cdCntrStts.addEventHandler("onitemchanged", this.div_21_Tab01_tabp01_cbo_cdCntrStts_onitemchanged, this);
            this.div_21.Tab01.tabp02.edt_cntrReqrNm.addEventHandler("onkeydown", this.fn_onkeydown, this);
            this.div_21.Tab01.tabp02.edt_cntrReqrNm.addEventHandler("ontextchanged", this.fn_ontextchanged, this);
            this.div_21.Tab01.tabp02.btn_cntrUser.addEventHandler("onclick", this.btn_cntrUser_onclick, this);
            this.div_3.btn_opItem.addEventHandler("onclick", this.fn_fold_onclick, this);
            this.div_31.st_Ttl.addEventHandler("onclick", this.div_21_Tab01_tabp01_st_Ttl_onclick, this);
            this.div_31.st_Ttl00.addEventHandler("onclick", this.div_21_Tab01_tabp01_st_Ttl_onclick, this);
            this.div_31.st_Ttl01.addEventHandler("onclick", this.div_21_Tab01_tabp01_st_Ttl_onclick, this);
            this.div_31.st_Ttl02.addEventHandler("onclick", this.div_21_Tab01_tabp01_st_Ttl_onclick, this);
            this.div_31.st_Ttl04.addEventHandler("onclick", this.div_21_Tab01_tabp01_st_Ttl_onclick, this);
            this.div_31.st_Ttl05.addEventHandler("onclick", this.div_21_Tab01_tabp01_st_Ttl_onclick, this);
            this.div_31.st_Ttl06.addEventHandler("onclick", this.div_21_Tab01_tabp01_st_Ttl_onclick, this);
            this.div_31.st_Ttl07.addEventHandler("onclick", this.div_21_Tab01_tabp01_st_Ttl_onclick, this);
            this.div_31.st_Ttl08.addEventHandler("onclick", this.div_21_Tab01_tabp01_st_Ttl_onclick, this);
            this.div_7.btn_oPItem.addEventHandler("onclick", this.fn_fold_onclick, this);
            this.div_7.btn_cntrTemplate_Add.addEventHandler("onclick", this.div_7_btn_tndrItemAdd01_onclick, this);
            this.div_71.wb_daumEditor.addEventHandler("onusernotify", this.div_71_wb_daumEditor_onusernotify, this);
            this.div_1.btn_intlCfm.addEventHandler("onclick", this.div_1_btn_intlCfm_onclick, this);
            this.div_1.btn_CntrCxl.addEventHandler("onclick", this.div_1_btn_CntrCxl_onclick, this);

        };

        this.loadIncludeScript("PCTRB300N00.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
