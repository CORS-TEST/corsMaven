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
                this.set_name("PCTRS100N00");
                this.set_titletext("계약서");
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
            obj._setContents("<ColumnInfo><Column id=\"CD_DFCT_GRNT_PRID_NM\" size=\"60\" type=\"string\"/><Column id=\"CD_DFCT_GRNT_PRID\" size=\"60\" type=\"string\"/><Column id=\"LNK_CNTR_NO\" size=\"40\" type=\"string\"/><Column id=\"LNK_CNTR_TTL\" size=\"600\" type=\"string\"/><Column id=\"TKEY\" size=\"40\" type=\"string\"/><Column id=\"CNTR_AMT\" size=\"22\" type=\"bigdecimal\"/><Column id=\"TTL\" size=\"600\" type=\"string\"/><Column id=\"CRTR_ID\" size=\"50\" type=\"string\"/><Column id=\"CD_CRNC_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_CRNC\" size=\"40\" type=\"string\"/><Column id=\"CD_DOC_CTGR_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_DOC_CTGR\" size=\"40\" type=\"string\"/><Column id=\"CD_PYMT_CNDTN\" size=\"40\" type=\"string\"/><Column id=\"CNTR_REQR_ID\" size=\"50\" type=\"string\"/><Column id=\"CNTR_REQR_NM\" size=\"90\" type=\"string\"/><Column id=\"LAST_CHGR_ID\" size=\"50\" type=\"string\"/><Column id=\"CD_CNTR_CTGR_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_CNTR_CTGR\" size=\"40\" type=\"string\"/><Column id=\"PTNR_ID\" size=\"40\" type=\"string\"/><Column id=\"PTNR_NM\" size=\"200\" type=\"string\"/><Column id=\"CNTR_NO\" size=\"40\" type=\"string\"/><Column id=\"CNTR_END_DAY\" size=\"8\" type=\"string\"/><Column id=\"CNTR_CFM_DT\" size=\"7\" type=\"string\"/><Column id=\"ATTCH_FILE_CNT\" size=\"22\" type=\"bigdecimal\"/><Column id=\"RMARK\" size=\"1500\" type=\"string\"/><Column id=\"CNTR_PTNR_ID\" size=\"50\" type=\"string\"/><Column id=\"CNTR_REQ_DT\" size=\"7\" type=\"string\"/><Column id=\"ALT_INTL_CFM\" size=\"1\" type=\"string\"/><Column id=\"LAST_CHG_DT\" size=\"7\" type=\"string\"/><Column id=\"CD_CNTR_STTS_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_CNTR_STTS\" size=\"40\" type=\"string\"/><Column id=\"CD_CNTR_TYPE_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_CNTR_TYPE\" size=\"40\" type=\"string\"/><Column id=\"CNTR_BGN_DAY\" size=\"8\" type=\"string\"/><Column id=\"CRT_DT\" size=\"7\" type=\"string\"/><Column id=\"APP_DOC_ID\" size=\"40\" type=\"string\"/><Column id=\"CNTR_TMPL_ID\" size=\"40\" type=\"string\"/><Column id=\"BRANCH_CD\" size=\"20\" type=\"string\"/><Column id=\"TEL\" size=\"30\" type=\"string\"/><Column id=\"EMAIL\" size=\"100\" type=\"string\"/><Column id=\"FAX\" size=\"30\" type=\"string\"/><Column id=\"CORP_CNTR_DT\" size=\"4000\" type=\"string\"/><Column id=\"SIGN_DATA\" size=\"4000\" type=\"string\"/><Column id=\"SIGN_ORGNL\" size=\"4000\" type=\"string\"/><Column type=\"string\" id=\"BIZ_NO\" size=\"20\"/><Column type=\"string\" id=\"RPRSTV_NM\" size=\"90\"/><Column type=\"string\" id=\"ADDR\" size=\"600\"/><Column id=\"COREXP_KIDS\" type=\"STRING\" size=\"256\"/><Column id=\"HTML_REPORT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cntrItem", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CNTR_ITEM_ID\" size=\"40\" type=\"string\"/><Column id=\"CNTR_NO\" size=\"40\" type=\"string\"/><Column id=\"CD_UNIT_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_UNIT\" size=\"40\" type=\"string\"/><Column id=\"AMT\" size=\"22\" type=\"bigdecimal\"/><Column id=\"ITM_NO\" size=\"5\" type=\"string\"/><Column id=\"MTRL_GRP_NM\" size=\"500\" type=\"string\"/><Column id=\"CRTR_ID\" size=\"50\" type=\"string\"/><Column id=\"DLV_REQ_DAY\" size=\"8\" type=\"string\"/><Column id=\"MTRL_GRP_ID\" size=\"20\" type=\"string\"/><Column id=\"RMARK\" size=\"1500\" type=\"string\"/><Column id=\"PR_ITEM_ID\" size=\"40\" type=\"string\"/><Column id=\"QTY\" size=\"22\" type=\"bigdecimal\"/><Column id=\"LAST_CHG_DT\" size=\"7\" type=\"string\"/><Column id=\"MTRL_NM\" size=\"500\" type=\"string\"/><Column id=\"MTRL_CD\" size=\"20\" type=\"string\"/><Column id=\"LAST_CHGR_ID\" size=\"50\" type=\"string\"/><Column id=\"UNT_PRICE\" size=\"22\" type=\"bigdecimal\"/><Column id=\"CRT_DT\" size=\"7\" type=\"string\"/><Column id=\"BRANCH_CD\" size=\"20\" type=\"string\"/><Column id=\"CD_FCTRY_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_FCTRY\" size=\"40\" type=\"string\"/><Column id=\"PR_NO\" size=\"40\" type=\"string\"/><Column id=\"SRC_GRP_ID\" size=\"40\" type=\"string\"/><Column id=\"SRC_GRP_NM\" size=\"300\" type=\"string\"/><Column id=\"ATTCH_FILE_CNT\" size=\"22\" type=\"bigdecimal\"/><Column id=\"CHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"STR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("ds_cntrInsrnc", this);
            obj._setContents("<ColumnInfo><Column id=\"PYMT_ORDR\" size=\"22\" type=\"bigdecimal\"/><Column id=\"REQR_NM\" size=\"30\" type=\"string\"/><Column id=\"GRNT_BGN_DAY\" size=\"8\" type=\"string\"/><Column id=\"SIGNCNTNT\" size=\"0\" type=\"string\"/><Column id=\"CRTR_ID\" size=\"50\" type=\"string\"/><Column id=\"GRNT_INSRNC_NO\" size=\"40\" type=\"string\"/><Column id=\"PCHRGR_ID\" size=\"30\" type=\"string\"/><Column id=\"GRNT_RT\" size=\"22\" type=\"bigdecimal\"/><Column id=\"RJT_RSN\" size=\"1500\" type=\"string\"/><Column id=\"REQR_ID\" size=\"50\" type=\"string\"/><Column id=\"LAST_CHGR_ID\" size=\"50\" type=\"string\"/><Column id=\"CNTR_NO\" size=\"40\" type=\"string\"/><Column id=\"CD_GRNT_STTS_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_GRNT_STTS\" size=\"40\" type=\"string\"/><Column id=\"PCHRGR_NM\" size=\"50\" type=\"string\"/><Column id=\"GRNT_REQ_DT\" size=\"7\" type=\"string\"/><Column id=\"GRNT_END_DAY\" size=\"8\" type=\"string\"/><Column id=\"GRNT_INSRNC_CORP\" size=\"40\" type=\"string\"/><Column id=\"CNTR_GRNT_ID\" size=\"40\" type=\"string\"/><Column id=\"ATTCH_FILE_CNT\" size=\"22\" type=\"bigdecimal\"/><Column id=\"GRNT_AMT\" size=\"22\" type=\"bigdecimal\"/><Column id=\"CD_GRNT_MTHD_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_GRNT_MTHD\" size=\"40\" type=\"string\"/><Column id=\"LAST_CHG_DT\" size=\"7\" type=\"string\"/><Column id=\"CNTR_PAY_PLAN_ID\" size=\"40\" type=\"string\"/><Column id=\"GRNT_CFM_DT\" size=\"7\" type=\"string\"/><Column id=\"CD_GRNT_INSRNC_TYPE_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_GRNT_INSRNC_TYPE\" size=\"40\" type=\"string\"/><Column id=\"CRT_DT\" size=\"7\" type=\"string\"/><Column id=\"BRANCH_CD\" size=\"20\" type=\"string\"/><Column id=\"CHECKED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cntrPay", this);
            obj._setContents("<ColumnInfo><Column id=\"CNTR_NO\" size=\"40\" type=\"string\"/><Column id=\"RMARK\" size=\"1500\" type=\"string\"/><Column id=\"PYMT_PLN_DAY\" size=\"8\" type=\"string\"/><Column id=\"PYMT_RT\" size=\"22\" type=\"STRING\"/><Column id=\"CNTR_PAY_PLAN_ID\" size=\"40\" type=\"string\"/><Column id=\"PYMT_ORDR\" size=\"22\" type=\"bigdecimal\"/><Column id=\"PYMT_AMT\" size=\"22\" type=\"bigdecimal\"/><Column id=\"BRANCH_CD\" size=\"20\" type=\"string\"/><Column id=\"CHECKED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_sign", this);
            obj._setContents("<ColumnInfo><Column id=\"SIGN_ORGNL\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cntrOrg", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_1", "absolute", "0", "0", null, "43", "15", null, this);
            obj.set_taborder("0");
            obj.getSetter("objNm").set("컨트롤 박스");
            obj.set_cssclass("div_WF_SearchBg3");
            this.addChild(obj.name, obj);
            obj = new Edit("mae_docNo", "absolute", "104", "10", "200", "24", null, null, this.div_1);
            obj.set_taborder("1");
            obj.getSetter("objNm").set("문서번호");
            obj.set_cssclass("input_point");
            obj.set_readonly("true");
            this.div_1.addChild(obj.name, obj);
            obj = new Button("btn_CntrClo", "absolute", null, "10", "70", "24", "8", null, this.div_1);
            obj.set_taborder("3");
            obj.set_text("계약합의");
            obj.set_cssclass("btn_WF_SearchBtn");
            obj.getSetter("objNm").set("계약합의버튼");
            this.div_1.addChild(obj.name, obj);
            obj = new Combo("cb_cdDocCtgr", "absolute", "2", "10", "100", "24", null, null, this.div_1);
            this.div_1.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_cdCM10");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("문서유형");
            obj.set_readonly("true");

            obj = new Div("div_2", "absolute", "0%", "63", null, "24", "15", null, this);
            obj.set_taborder("7");
            obj.getSetter("objNm").set("DIV-헤더 타이틀");
            this.addChild(obj.name, obj);
            obj = new Button("btn_opHead", "absolute", "0%", "0", "117", "24", null, null, this.div_2);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_DivClose");
            obj.getSetter("objNm").set("접기펼치기 버튼");
            obj.set_text("계약서");
            obj.getSetter("lbcd").set("");
            this.div_2.addChild(obj.name, obj);

            obj = new Div("div_21", "absolute", "0", "95", null, "195", "15", null, this);
            obj.set_taborder("1");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("DIV-헤더 상세");
            this.addChild(obj.name, obj);
            obj = new Tab("Tab01", "absolute", "0", "0", null, "187", "0", null, this.div_21);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.getSetter("objNm").set("TAB");
            obj.set_cssclass("tab_default");
            this.div_21.addChild(obj.name, obj);
            obj = new Tabpage("tabp01", this.div_21.Tab01);
            obj.set_text("기본정보");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("기본정보");
            obj.getSetter("lbcd").set("");
            this.div_21.Tab01.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label05", "absolute", "0%", "10", null, "132", "0%", null, this.div_21.Tab01.tabp01);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("st_cntrStates", "absolute", "703", "108", "61", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("13");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("lbcd").set("");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edt_Ttl", "absolute", "117", "20", "797", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("0");
            obj.getSetter("objNm").set("계약명");
            obj.set_lengthunit("utf8");
            obj.set_cssclass("edt_default_r");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("st_Ttl", "absolute", "0", "20", "117", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("12");
            obj.set_text("계약명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("lbcd").set("");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("st_ptnrNm", "absolute", "0", "49", "117", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("objNm").set("협력사");
            obj.set_text("협력사");
            obj.getSetter("lbcd").set("");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Combo("cb_cdCntrCndtn", "absolute", "561", "49", "353", "24", null, null, this.div_21.Tab01.tabp01);
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_cdCM13");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("지급조건");
            obj.set_cssclass("cbo_default_r");
            obj = new Static("ed_cntrDt", "absolute", "0", "108", "117", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("18");
            obj.set_text("계약일자");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("objNm").set("계약일자");
            obj.getSetter("lbcd").set("");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("ed_cntrType", "absolute", "0", "78", "117", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("16");
            obj.set_text("계약유형");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("objNm").set("계약유형");
            obj.getSetter("lbcd").set("");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("st_cdCntrGubun", "absolute", "902", "20", "117", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("17");
            obj.set_text("계약양식");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("objNm").set("계약구분");
            obj.getSetter("lbcd").set("");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("st_CrDt01", "absolute", "460", "49", "101", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("15");
            obj.set_text("지급계정");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("objNm").set("지급계정");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("st_RfqStates00", "absolute", "444", "78", "117", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("19");
            obj.set_text("하자보증기간");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("objNm").set("하자보증기간");
            obj.getSetter("lbcd").set("");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("st_cntrAmt", "absolute", "902", "49", "117", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("22");
            obj.set_text("계약금액");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("objNm").set("예산번호");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Combo("cbo_cdCntrStts", "absolute", "764", "108", "150", "24", null, null, this.div_21.Tab01.tabp01);
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_cdCT10");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_enable("true");
            obj.set_value("null");
            obj.set_readonly("true");
            obj.getSetter("objNm").set("계약상태");
            obj.set_cssclass("cbo_default_r");
            obj = new Edit("edt_ptnrId", "absolute", "117", "49", "100", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("3");
            obj.set_cssclass("edt_default");
            obj.set_enable("false");
            obj.getSetter("objNm").set("협력사코드");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edt_ptnrNm", "absolute", "219", "49", "242", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("4");
            obj.set_lengthunit("utf8");
            obj.set_cssclass("edt_default_r");
            obj.getSetter("objNm").set("협력사명");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Div("div_crtDt", "absolute", "117", "108", "220", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("7");
            obj.set_text("Div01");
            obj.set_enable("false");
            obj.getSetter("objNm").set("계약일자");
            obj.set_url("commComp::commCalFromTo.xfdl");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Combo("cb_cdCntrType", "absolute", "1019", "20", "158", "24", null, null, this.div_21.Tab01.tabp01);
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_cdCT19");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_cssclass("cbo_default_r");
            obj.getSetter("objNm").set("계약구분");
            obj = new MaskEdit("mae_cntrAmt", "absolute", "1019", "49", "158", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("11");
            obj.set_mask("9,999");
            obj.set_autoselect("true");
            obj.set_cssclass("mae_default_r");
            obj.style.set_color("blue");
            obj.style.set_font("bold 10 Dotum");
            obj.getSetter("objNm").set("계약금액");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edt_cdDfctGrntPrid", "absolute", "561", "78", "353", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("8");
            obj.set_lengthunit("utf8");
            obj.set_cssclass("edt_default_r");
            obj.getSetter("objNm").set("하자보증기간");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Combo("cbo_cntrCtgr", "absolute", "117", "78", "219", "24", null, null, this.div_21.Tab01.tabp01);
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_cdCT11");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_cssclass("cbo_default_r");
            obj.getSetter("objNm").set("계약유형");
            obj = new Static("st_cntrAmt00", "absolute", "902", "78", "117", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("72");
            obj.set_text("공급가액");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("objNm").set("예산번호");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new MaskEdit("mae_cntrAmt00", "absolute", "1019", "78", "158", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("73");
            obj.set_mask("9,999");
            obj.set_autoselect("true");
            obj.set_cssclass("mae_default_r");
            obj.style.set_color("blue");
            obj.style.set_font("bold 10 Dotum");
            obj.getSetter("objNm").set("공급가액");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("st_cntrAmt01", "absolute", "902", "108", "117", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("74");
            obj.set_text("부가세");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("objNm").set("예산번호");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new MaskEdit("mae_cntrAmt01", "absolute", "1019", "108", "158", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("75");
            obj.set_mask("9,999");
            obj.set_autoselect("true");
            obj.set_cssclass("mae_default_r");
            obj.style.set_color("blue");
            obj.style.set_font("bold 10 Dotum");
            obj.getSetter("objNm").set("부가세");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("st_cntrAmt02", "absolute", "481", "108", "80", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("76");
            obj.set_text("통화단위");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("objNm").set("예산번호");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Combo("cbo_cdCrnc", "absolute", "561", "108", "126", "24", null, null, this.div_21.Tab01.tabp01);
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("77");
            obj.set_innerdataset("ds_cdCM15");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_cssclass("cbo_default_r");
            obj.getSetter("objNm").set("통화단위");
            obj = new Tabpage("tabp02", this.div_21.Tab01);
            obj.set_text("계약담당자");
            this.div_21.Tab01.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label00", "absolute", "0%", "10", null, "75", "0%", null, this.div_21.Tab01.tabp02);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Static("sta_cntrUser", "absolute", "0", "20", "117", "24", null, null, this.div_21.Tab01.tabp02);
            obj.set_taborder("5");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Static("sta_Tel", "absolute", "0", "49", "117", "24", null, null, this.div_21.Tab01.tabp02);
            obj.set_taborder("6");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Static("sta_email", "absolute", "651", "21", "117", "24", null, null, this.div_21.Tab01.tabp02);
            obj.set_taborder("7");
            obj.set_text("e-Mail");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Static("sta_fax", "absolute", "651", "50", "117", "24", null, null, this.div_21.Tab01.tabp02);
            obj.set_taborder("8");
            obj.set_text("Fax");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Edit("edt_cntrReqrId", "absolute", "117", "21", "100", "24", null, null, this.div_21.Tab01.tabp02);
            obj.set_taborder("0");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("objNm").set("계약담당자ID");
            obj.set_cssclass("edt_default_r");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Edit("edt_cntrReqrNm", "absolute", "219", "21", "250", "24", null, null, this.div_21.Tab01.tabp02);
            obj.set_taborder("1");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("계약담당자명");
            obj.set_cssclass("edt_default");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Edit("edt_tel", "absolute", "117", "50", "352", "24", null, null, this.div_21.Tab01.tabp02);
            obj.set_taborder("3");
            obj.getSetter("objNm").set("계약담당자 전화번호");
            obj.set_cssclass("edt_default_r");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Edit("edt_email", "absolute", "768", "21", "400", "24", null, null, this.div_21.Tab01.tabp02);
            obj.set_taborder("2");
            obj.getSetter("objNm").set("계약담당자 EMAIL");
            obj.set_cssclass("edt_default_r");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Edit("edt_fax", "absolute", "768", "50", "400", "24", null, null, this.div_21.Tab01.tabp02);
            obj.set_taborder("4");
            obj.getSetter("objNm").set("계약담당자 FAX");
            obj.set_cssclass("edt_default_r");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Tabpage("tabp03", this.div_21.Tab01);
            obj.getSetter("objNm").set("첨부파일 텝");
            obj.set_text("특이사항");
            this.div_21.Tab01.addChild(obj.name, obj);
            obj = new TextArea("ta_rmark", "absolute", "0", "10", null, null, "0", "0", this.div_21.Tab01.tabp03);
            obj.set_taborder("1");
            obj.set_scrollbars("autovert");
            obj.getSetter("objNm").set("계약 특기사항");
            this.div_21.Tab01.tabp03.addChild(obj.name, obj);
            obj = new Tabpage("tabp04", this.div_21.Tab01);
            obj.set_text("첨부파일");
            obj.set_url("commComp::commFileUpDown.xfdl");
            this.div_21.Tab01.addChild(obj.name, obj);

            obj = new Div("div_3", "absolute", "0", "278", null, "24", "15", null, this);
            obj.set_taborder("8");
            obj.getSetter("objNm").set("DIV-품목 타이틀");
            this.addChild(obj.name, obj);
            obj = new Button("btn_opItem", "absolute", "0", "0", "117", "24", null, null, this.div_3);
            obj.set_taborder("34");
            obj.set_cssclass("btn_WF_DivClose");
            obj.getSetter("objNm").set("접기펼치기 버튼");
            obj.set_text("품목");
            obj.getSetter("lbcd").set("");
            this.div_3.addChild(obj.name, obj);

            obj = new Div("div_4", "absolute", "0", "635", null, "24", "15", null, this);
            obj.set_taborder("9");
            obj.getSetter("objNm").set("DIV-품목 상세-탭 헤더");
            this.addChild(obj.name, obj);

            obj = new Div("div_5", "absolute", "0", "637", null, "24", "15", null, this);
            obj.set_taborder("10");
            obj.getSetter("objNm").set("DIV-대상업체");
            this.addChild(obj.name, obj);
            obj = new Button("btn_oPItem", "absolute", "0", "0", "117", "24", null, null, this.div_5);
            obj.set_taborder("50");
            obj.set_cssclass("btn_WF_DivClose");
            obj.getSetter("objNm").set("접기펼치기 버튼");
            obj.set_text("지급계획");
            obj.getSetter("lbcd").set("");
            this.div_5.addChild(obj.name, obj);

            obj = new Div("div_51", "absolute", "0", "664", null, "200", "15", null, this);
            obj.set_taborder("4");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("DIV-대상업체 상세");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_cntrPay", "absolute", "0%", "0", null, null, "0%", "0", this.div_51);
            obj.set_taborder("0");
            obj.set_binddataset("ds_cntrPay");
            obj.getSetter("objNm").set("지급계획 그리드");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"VMODE\"><Columns><Column size=\"90\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"500\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"회차\"/><Cell col=\"1\" cssclass=\"cell_head\" text=\"지급율\"/><Cell col=\"2\" cssclass=\"cell_head\" text=\"지급금액\"/><Cell col=\"3\" cssclass=\"cell_head\" text=\"지급조건\"/></Band><Band id=\"body\" style=\"cellpadding:2 2 2 2 ;\"><Cell displaytype=\"normal\" edittype=\"none\" style=\"align: ;\" text=\"bind:PYMT_ORDR\" editdisplay=\"edit\"/><Cell col=\"1\" celltype=\"none\" displaytype=\"normal\" edittype=\"none\" editfilter=\"number\" style=\"align:right;\" text=\"bind:PYMT_RT\" mask=\"###\" maskchar=\" \" editlimit=\"-1\" editautoselect=\"false\" editdisplay=\"edit\" suppress=\"0\" autosizecol=\"default\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" style=\"align:right;padding: ;\" text=\"bind:PYMT_AMT\" mask=\"9,999.###\" maskchar=\" \" editautoselect=\"true\" editdisplay=\"edit\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" style=\"align:left;\" text=\"bind:RMARK\" editdisplay=\"edit\"/></Band></Format></Formats>");
            this.div_51.addChild(obj.name, obj);

            obj = new Div("div_31", "absolute", "0%", "307", null, "329", "15", null, this);
            obj.set_taborder("2");
            obj.getSetter("objNm").set("DIV-품목 상세");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_cntrItem", "absolute", "0%", "0", null, null, "0%", "37", this.div_31);
            obj.set_taborder("2");
            obj.getSetter("objNm").set("품목 그리드");
            obj.set_binddataset("ds_cntrItem");
            obj.getSetter("f_filter").set("Y");
            obj.getSetter("f_excel").set("Y");
            obj.getSetter("f_hide").set("Y");
            obj.getSetter("f_find").set("Y");
            obj.getSetter("f_sort").set("Y");
            obj.getSetter("f_fix").set("Y");
            obj.getSetter("f_height").set("Y");
            obj.getSetter("f_save").set("Y");
            obj.getSetter("f_mode").set("Y");
            obj.getSetter("f_init").set("Y");
            obj.getSetter("f_colSize").set("Y");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"VMODE\"><Columns><Column size=\"415\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"102\"/><Column size=\"270\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"품목명\"/><Cell col=\"1\" text=\"수량\"/><Cell col=\"2\" text=\"단위\"/><Cell col=\"3\" text=\"단가\"/><Cell col=\"4\" text=\"공급가\"/><Cell col=\"5\" text=\"부가세\"/><Cell col=\"6\" text=\"비고\"/></Band><Band id=\"body\"><Cell style=\"align:left;padding:3 3 3 3;\" text=\"expr:MTRL_NM\" editdisplay=\"edit\" expandshow=\"hide\" tooltiptext=\"bind:MTRL_NM\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"none\" style=\"align:right;padding:3 3 3 3;selectbackground: ;\" text=\"bind:QTY\" mask=\"#,##0.00\" editdisplay=\"edit\" expandshow=\"hide\"/><Cell col=\"2\" style=\"padding:3 3 3 3;\" text=\"bind:CD_UNIT_NM\" editdisplay=\"edit\" expandshow=\"hide\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right;padding:3 3 3 3;selectbackground: ;\" text=\"bind:UNT_PRICE\" mask=\"#,##0.00\" editdisplay=\"edit\" expandshow=\"hide\"/><Cell col=\"4\" style=\"align:right;padding:3 3 3 3;selectcolor: ;\" text=\"bind:AMT\" editdisplay=\"edit\" expandshow=\"hide\"/><Cell col=\"5\" style=\"align:right;\" text=\"bind:VAT\"/><Cell col=\"6\" style=\"align:left;padding:3 3 3 3;\" text=\"bind:RMARK\" editdisplay=\"edit\" expandshow=\"hide\" tooltiptext=\"bind:RMARK\"/></Band></Format></Formats>");
            this.div_31.addChild(obj.name, obj);
            obj = new Div("div_grdBottom", "absolute", "0%", null, null, "28", "0%", "10", this.div_31);
            obj.set_taborder("3");
            obj.set_visible("false");
            obj.set_url("commComp::commPaging.xfdl");
            this.div_31.addChild(obj.name, obj);

            obj = new Div("div_61", "absolute", "0", "902", null, "200", "15", null, this);
            obj.set_taborder("5");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("DIV-대상업체 상세");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_insrncItem", "absolute", "0%", "0", null, null, "0%", "0", this.div_61);
            obj.set_taborder("0");
            obj.set_binddataset("ds_cntrInsrnc");
            obj.getSetter("objNm").set("품목 그리드");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"VMODE\"><Columns><Column size=\"71\"/><Column size=\"154\"/><Column size=\"196\"/><Column size=\"192\"/><Column size=\"268\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"회차\"/><Cell col=\"1\" cssclass=\"cell_head\" text=\"이행보증구분\"/><Cell col=\"2\" cssclass=\"cell_head\" text=\"보증유형\"/><Cell col=\"3\" cssclass=\"cell_head\" text=\"보증금율\"/><Cell col=\"4\" cssclass=\"cell_head\" text=\"보증금액\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"bind:PYMT_ORDR\" combodataset=\"ds_cntrPay\" combocodecol=\"PYMT_ORDR\" combodatacol=\"PYMT_ORDR\" combodisplay=\"display\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"bind:CD_GRNT_INSRNC_TYPE_NM\" combodataset=\"ds_cdCT16\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" combodisplay=\"display\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"bind:CD_GRNT_MTHD_NM\" combodataset=\"ds_cdCT15\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" combodisplay=\"display\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" style=\"align:right;\" text=\"bind:GRNT_RT\" mask=\"###\" maskchar=\" \" editdisplay=\"edit\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" style=\"align:right;\" text=\"bind:GRNT_AMT\" mask=\"9,999.###\" maskchar=\" \" editdisplay=\"edit\"/></Band></Format></Formats>");
            this.div_61.addChild(obj.name, obj);

            obj = new Div("div_6", "absolute", "0", "876", null, "24", "15", null, this);
            obj.set_taborder("63");
            obj.getSetter("objNm").set("DIV-대상업체");
            this.addChild(obj.name, obj);
            obj = new Button("btn_oPItem", "absolute", "0", "0", "117", "24", null, null, this.div_6);
            obj.set_taborder("0");
            obj.set_text("이행보증");
            obj.set_cssclass("btn_WF_DivClose");
            obj.getSetter("objNm").set("접기펼치기 버튼");
            obj.getSetter("lbcd").set("");
            this.div_6.addChild(obj.name, obj);

            obj = new Div("div_7", "absolute", "0", "1113", null, "24", "15", null, this);
            obj.set_taborder("68");
            obj.getSetter("objNm").set("DIV-대상업체");
            this.addChild(obj.name, obj);
            obj = new Button("btn_oPItem", "absolute", "0", "0", "117", "24", null, null, this.div_7);
            obj.set_taborder("3");
            obj.set_text("계약내용");
            obj.set_cssclass("btn_WF_DivClose");
            obj.getSetter("objNm").set("접기펼치기 버튼");
            obj.getSetter("lbcd").set("");
            obj.style.set_color("black");
            this.div_7.addChild(obj.name, obj);

            obj = new Div("div_71", "absolute", "0", "1143", null, "516", "15", null, this);
            obj.set_taborder("6");
            obj.set_text("div_71");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new WebBrowser("WebBrowser00", "absolute", "0", "3", null, "506", "0", null, this.div_71);
            obj.set_taborder("0");
            this.div_71.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser_Sign", "absolute", "16.56%", "11", null, "0", "40.57%", null, this);
            obj.set_taborder("76");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00", "absolute", "1243", "240", "148", "64", null, null, this);
            obj.set_taborder("89");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser01", "absolute", "1240", "336", "148", "64", null, null, this);
            obj.set_taborder("90");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "1241", "416", "147", "89", null, null, this);
            obj.set_taborder("91");
            obj.set_text("Div00");
            obj.set_visible("false");
            obj.set_url("CTRS::UbiViewerLib_HTML.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_1,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.getSetter("objNm").set("컨트롤 박스");
            		p.set_cssclass("div_WF_SearchBg3");

            	}
            );
            this.div_1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.div_2,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("7");
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
            obj = new Layout("default", "", 1042, 163, this.div_21.Tab01.tabp02,
            	//-- Layout function
            	function(p) {
            		p.set_text("계약담당자");

            	}
            );
            this.div_21.Tab01.tabp02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_21.Tab01.tabp03,
            	//-- Layout function
            	function(p) {
            		p.set_text("특이사항");

            	}
            );
            this.div_21.Tab01.tabp03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 195, this.div_21,
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
            		p.set_taborder("8");
            		p.getSetter("objNm").set("DIV-품목 타이틀");

            	}
            );
            this.div_3.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.div_4,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("9");
            		p.getSetter("objNm").set("DIV-품목 상세-탭 헤더");

            	}
            );
            this.div_4.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.div_5,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("10");
            		p.getSetter("objNm").set("DIV-대상업체");

            	}
            );
            this.div_5.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 200, this.div_51,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_scrollbars("none");
            		p.getSetter("objNm").set("DIV-대상업체 상세");

            	}
            );
            this.div_51.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 329, this.div_31,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.getSetter("objNm").set("DIV-품목 상세");

            	}
            );
            this.div_31.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1042, 164, this.div_61,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.set_scrollbars("none");
            		p.getSetter("objNm").set("DIV-대상업체 상세");

            	}
            );
            this.div_61.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.div_6,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("63");
            		p.getSetter("objNm").set("DIV-대상업체");

            	}
            );
            this.div_6.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.div_7,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("68");
            		p.getSetter("objNm").set("DIV-대상업체");

            	}
            );
            this.div_7.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1042, 500, this.div_71,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.set_text("div_71");
            		p.set_scrollbars("none");

            	}
            );
            this.div_71.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1220, 711, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("FrmTemplate100");
            		p.set_titletext("계약서");

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
            obj = new BindItem("item2","div_21.Tab01.tabp01.edt_ptnrId","value","ds_cntr","PTNR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","div_21.Tab01.tabp01.edt_ptnrNm","value","ds_cntr","PTNR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","div_21.Tab01.tabp01.cb_cdCntrType","value","ds_cntr","CD_CNTR_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","div_21.Tab01.tabp01.mae_cntrAmt","value","ds_cntr","CNTR_SUM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","div_21.Tab01.tabp02.edt_cntrReqrId","value","ds_cntr","CNTR_REQR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","div_21.Tab01.tabp02.edt_cntrReqrNm","value","ds_cntr","CNTR_REQR_NM");
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
            obj = new BindItem("item30","div_21.Tab01.tabp01.cb_cdCntrCndtn","value","ds_cntr","CD_PYMT_CNDTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","div_21.Tab01.tabp01.edt_cdDfctGrntPrid","value","ds_cntr","DFCT_GRNT_PRID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","div_71","text","ds_cntr","SIGN_ORGNL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","div_1.cb_cdDocCtgr","value","ds_cntr","CD_DOC_CTGR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","div_21.Tab01.tabp01.cbo_cntrCtgr","value","ds_cntr","CD_CNTR_CTGR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","div_21.Tab01.tabp01.mae_cntrAmt00","value","ds_cntr","CNTR_AMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","div_21.Tab01.tabp01.mae_cntrAmt01","value","ds_cntr","VAT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","div_21.Tab01.tabp01.cbo_cdCrnc","value","ds_cntr","CD_CRNC");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "commComp::commCalFromTo.xfdl");
            this._addPreloadList("fdl", "commComp::commFileUpDown.xfdl");
            this._addPreloadList("fdl", "commComp::commPaging.xfdl");
            this._addPreloadList("fdl", "CTRS::UbiViewerLib_HTML.xfdl");
        };
        
        // User Script
        this.addIncludeScript("PCTRS100N00.xfdl", "lib::lib_all.xjs");
        this.registerScript("PCTRS100N00.xfdl", function(exports) {
        /**
           @file       PCTRS100N00.xfdl
           @desc       계약서상세
           @author     박기승
           @makedate   2016.01.28
           @history    2016.04.08  정준화 주석 작업및 추가사항 정리
        */  

        if (this.executeIncludeScript) { this.executeIncludeScript("lib::lib_all.xjs", null, exports); }	//include "lib::lib_all.xjs";

        this.cntWeb00Load = 0;
        this.cntWeb01Load = 0;

        /**
        	@function	form_oninit()
        	@desc   	폼 oninit이벤트
        */
        this.form_oninit = function(obj,e)
        {	
        	this.fn_setCode();
        }

        /**
        	@function   fn_setCode()
        	@desc       공통코드 데이터셋 생성
        */
        this.fn_setCode = function()
        {
        	var param = [
        					 {code:"CM13", sSelectType:"S"} // 지급조건
        					,{code:"CM10", sSelectType:"S"} // 문서유형
        					,{code:"CM20", sSelectType:"S"} // 공장
        					,{code:"CM11", sSelectType:"S"} // 단위
        					,{code:"CT10", sSelectType:"S"} // 계약상태
        					,{code:"CT11", sSelectType:"S"} // 계약유형
        					,{code:"CT19", sSelectType:"S"} // 계약구분
        					,{code:"CM15", sSelectType:"S"} // 통화
        					,{code:"CT17", sSelectType:"S"} // 보증보험상태
        					,{code:"CT16", sSelectType:"S"} // 보증보험유형
        					,{code:"CT15", sSelectType:"S"} // 보증유형
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
        	this.gfn_formOnLoad(obj,"R");
        	
        	this.ds_cntr.addRow();	
        	
         	//그리드 공통버튼 설정
         	this.div_31.div_grdBottom.fn_initGridInfo(obj, this.div_31.grd_cntrItem);
        	
        	//그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기
        	this.gfn_setGrdFunc(this.div_31.grd_cntrItem);
        	this.gfn_setGrdFunc(this.div_51.grd_cntrPay);
        	this.gfn_setGrdFunc(this.div_61.grd_insrncItem);

        	//이전화면에서 넘어오는 파라미터를 받는다.	
        	this.ds_cntr.setColumn(0,"CNTR_NO"		, this.gfn_getTmprData("CNTR_NO"));
        	this.ds_cntr.setColumn(0,"BRANCH_CD"	, this.gfn_getTmprData("BRANCH_CD"));
        	this.ds_cntr.setColumn(0,"COREXP_KIDS"	, this.gfn_getTmprData("COREXP_KIDS"));	

        	if(this.gfn_getTmprData("STATUS") != "1"){
        		this.WebBrowser00.set_url(application.services["svcurl"].url+"crosscert/Object_chk.jsp");
        	} else{
        		this.WebBrowser00.set_url("");
        	}
        	
        	this.gfn_clearTmprData(); 
        	
        	this.WebBrowser01.set_url(application.services["svcurl"].url+"crosscert/SignData.jsp");
        	this.div_21.Tab01.tabp01.div_crtDt.fn_setDate(this.ds_cntr, "CNTR_BGN_DAY", "CNTR_END_DAY");
        	
        	this.fn_search();
        	
        	//FILE_JOB_1 : 데이터 조회 이후에 파일 정보를 조회하기 위해 동기화 한다.
         	this.gfn_fileCompInit(this.div_21.Tab01.tabp04);
        }
        /**
        	@function	fn_preSearch()
        	@desc   	조회 전 처리
        */
        this.fn_preSearch = function()
        {
        	return true;
        }

        /**
        	@function	fn_search()
        	@desc   	조회 프로세스
        */
        this.fn_search = function()
        {
        	if(!this.fn_preSearch()) return false;

        	var sSvcID = "read";
        	var sController = "SCntr_Read.do";
        	var sInDatasets = "in_ds=ds_cntr";
        	var sOutDatasets = "ds_cntr=ds_cntr ds_cntrAdd=ds_cntrAdd ds_cntrItem=ds_cntrItem ds_cntrPay=ds_cntrPay ds_cntrInsrnc=ds_cntrInsrnc";
        	var sCallbackFunc = "fn_trCallBack";

        	//FILE_JOB_2 :  트랜잭션 gfn_fileTran 으로 변경
            this.gfn_fileTran(sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
        	@function	fn_fold_onclick()
        	@desc   	폴더접기
        */
        this.fn_fold_onclick = function(obj,e)
        {
        	this.gfn_divFold(obj);
        }

        /**
        	@function	fn_commAdd()
        	@desc   	(공통버튼)신규 프로세스
        */
        this.fn_commAdd = function()
        {
        	return true;
        }

        /**
        	@function	fn_commDelete()
        	@desc   	(공통버튼)삭제 프로세스
        */
        this.fn_commDelete = function()
        {
        	return true;
        }

        /**
        	@function	fn_preSave()
        	@desc   	저장 전 처리
        */
        this.fn_preSave = function()
        {	
        	if(!this.gfn_validate()) //확인 클릭
        	{		
        		return false;
        	}
        }

        /**
        	@function	div_1_btn_CntrClo_onclick()
        	@desc   	계약합의 프로세스
        */
        this.div_1_btn_CntrClo_onclick = function(obj,e)
        {
         	if(!this.Plugin00)
         	{
        		// Create Object	
        		var objPlugin = new Plugin("Plugin00", "absolute", 30, 120, 196, 46, null, null);
        		// Add Object to Parent Form  
        		this.addChild("Plugin00", objPlugin);
        		this.Plugin00.set_visible(false);
        		this.Plugin00.set_classid(application.gv_certClassid);
        		this.Plugin00.set_codebase(application.gv_certCodebase);	
        		this.Plugin00.show();
        	}
        	
        	// 1. SIGN_DATA에 저장할 HTML로 만들기 전 에디터 관련 컬럼을 삭제한다. 있으면 HTML로 만들 수 없다.(UbiviewerLib 에서 지원안함)
        	this.ds_cntrOrg.copyData(this.ds_cntr);
          	this.ds_cntr.set_updatecontrol(false);
          	this.ds_cntr.deleteColumn("SIGN_ORGNL");	
          	this.ds_cntr.deleteColumn("SIGN_DATA");
          	  	
        	// 2. 에디터 관련 컬럼을 삭제한 데이터셋을 이용하여 HTML로 만든다.
        	var sArg = {
        					ubiJrf:"PCTRB100N00_P01_SIGNDATA_HTML.jrf"
        					, key:[this.ds_cntr.getColumn(0, "BRANCH_CD"), this.ds_cntr.getColumn(0, "CNTR_NO")]
        					, localdaset:[this.ds_cntr, this.ds_cntrItem, this.ds_cntrPay, this.ds_cntrInsrnc]
        					, exportType : "html"
        					, exportUrl : this.ds_cntr.getColumn(0, "SIGNDATA_FILE_EXPORTURL")							
        					, signdataFileNm:this.ds_cntr.getColumn(0, "SIGNDATA_FILE_NM")
        				}
        	this.Div00.ubiviewerlib_setting(sArg);
        	
        	// 3. 1번에서 삭제한 데이터셋 원복
        	this.ds_cntr.copyData(this.ds_cntrOrg);
        }

        /**
        	@function	ubi_callback()
        	@desc   	생성된 HTML 파일에 계약내용(에디터내용) 치환하여 HTML파일 생성하기
        */
        this.ubi_callback = function()
        {
        	// 4. 2번에서 만든 HTML 파일에 에디터내용을 추가한다.
        	var sSvcID = "SCntr_createHtml";
        	var sController = "SCntr_createHtml.do";
        	var sInDatasets = "in_ds=ds_cntr";
        	var sOutDatasets = "ds_return=ds_return";
        	var sCallbackFunc = "fn_trCallBack";

            this.gfn_tran(sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        this.init_cross = function()
        {
        	var Ret;

        	var policies = "";

        	 /* 법인상호연동용(범용) */                            //
        	policies +="1.2.410.200004.5.2.1.1"    + "|";          // 한국정보인증               법인
        	policies +="1.2.410.200004.5.1.1.7"    + "|";          // 한국증권전산               법인, 단체, 개인사업자
        	policies +="1.2.410.200005.1.1.5"      + "|";          // 금융결제원                 법인, 임의단체, 개인사업자
        	policies +="1.2.410.200004.5.3.1.1"    + "|";          // 한국전산원                 기관(국가기관 및 비영리기관)
        	policies +="1.2.410.200004.5.3.1.2"    + "|";          // 한국전산원                 법인(국가기관 및 비영리기관을  제외한 공공기관, 법인)
        	policies +="1.2.410.200004.5.4.1.2"    + "|";          // 한국전자인증               법인, 단체, 개인사업자
        	policies +="1.2.410.200012.1.1.3"      + "|";          // 한국무역정보통신           법인

        	Ret =  this.Plugin00.callMethod("SetCommonInfoFromVal","211.192.169.70",4502, 
        														"211.192.169.180",389, 
        														"211.192.169.180",389,
        														"CN=ROOT-RSA-CRL,OU=ROOTCA,O=KISA,C=KR",
        														"no",
        														policies);
        	if ( Ret != 0 )
        	{ 
        		this.gfn_alert( "인증 초기 설정에 실패하였습니다." );
        		return false;
        	}
        	else
        	{
        		Ret = this.Plugin00.callMethod("SetPKCSInform", 1, 0, 0, 0, 0, 0, 0, 1, "SEED"); 
        		
        		
        		if ( Ret != 0 )
        		{ 
        			this.gfn_alert( "인증 초기 설정에 실패하였습니다." );
        			return false;
        		}
        		else
        		{
        			return true;
        		}
        	}	
        }

        

        /**
        	@function	fn_commSave()
        	@desc   	(공통버튼)저장 프로세스
        */
        this.fn_commSave = function()
        {
        	if (!this.fn_preSave()) return false;
        }

        /**
        	@function	btn_commCancel()
        	@desc   	(공통버튼)취소 프로세스
        */
        this.btn_commCancel = function()
        {
        	return true;
        }

        /**
        	@function	fn_commClose()
        	@desc   	(공통버튼)닫기 : form 닫기 전 공통에서 체크함
        */
        this.fn_commClose = function()
        {
        	return true;
        }

        /**
        	@function	fn_trCallBack()
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
        		case "read" : 
        			//FILE_JOB_4 : 파일 부모 데이터셋에 시퀀스 추가			
        			this.gfn_fileDsSeq(this.ds_cntr);
        			
        			//FILE_JOB_5 : 저장 후 재조회를 마치고 나서 파일 컴포넌트에 파일정보를 재설정 한다.
        			this.fn_getCompFileList1();
        					
        			var start = "<div style="+"color:#333333;font:20 malgun gothic;>";
        			var end   = "</div>";
        			var doc = this.div_71.WebBrowser00.getProperty("document");
        			doc.callMethod("write", start+this.ds_cntr.getColumn(0,"SIGN_ORGNL")+end);
        			
        			// 합의완료
        			if("CT10SREQ" != this.ds_cntr.getColumn(0,"CD_CNTR_STTS")){
        				this.div_1.btn_CntrClo.set_visible(false);
        			}
        			
        			
        		break;
        		
        		case "SCntr_Agree" : 
        			if(strErrMsg != ""){
        				this.gfn_alert(strErrMsg);
        				
        				this.gfn_setTmprData("CNTR_NO"		, this.ds_cntr.getColumn(0,"CNTR_NO"));
        				this.gfn_setTmprData("COREXP_KIDS"	, this.ds_cntr.getColumn(0,"COREXP_KIDS"));
        				this.gfn_setTmprData("BRANCH_CD"	, this.ds_cntr.getColumn(0,"BRANCH_CD"));
        				this.gfn_setTmprData("CD_CNTR_STTS"	, this.ds_cntr.getColumn(0,"CD_CNTR_STTS"));
        				this.gfn_setTmprData("STATUS"		, "1");
        				this.gfn_openMenuUrl("CTRS::PCTRS100N00.xfdl");
        			}
        		break;
        		
        		case "SCntr_createHtml" :
        			// 20170217 mhhan 로컬에서는 pdf파일이 잘 되나 개발에서는 인코딩 문제인지 한글이 깨짐...
        // 			// 5. 계약서 내용을 pdf로 만든다.
        // 			var temp = this.gfn_replace(this.ds_cntr.getColumn(0,"SIGN_ORGNL"), "\"", "\'");			
        // 			//temp = this.gfn_replace(temp , "mso-bidi-font-family: 'Times New Roman';", "mso-bidi-font-family: Times New Roman;");
        // 			this.ds_cntr.setColumn(0,"SIGN_ORGNL", temp);
        // 			var sArg = {
        // 							ubiJrf:"PCTRB100N00_P01_SIGNDATA_PDF.jrf"
        // 							, key:[this.ds_cntr.getColumn(0, "BRANCH_CD"), this.ds_cntr.getColumn(0, "CNTR_NO")]
        // 							, localdaset:[this.ds_cntr, this.ds_cntrItem, this.ds_cntrPay, this.ds_cntrInsrnc]
        // 							, exportType : "pdf"
        // 							, exportUrl : this.ds_cntr.getColumn(0, "SIGNDATA_FILE_EXPORTURL")							
        // 							, signdataFileNm:this.ds_cntr.getColumn(0, "SIGNDATA_FILE_NM")
        // 						}
        // 			this.Div00.ubiviewerlib_setting(sArg);
        		
        			// 6. 전자서명 프로세스 진행
        			var sign_data = this.ds_return.getColumn(0, "SIGN_DATA");
        			
        			//런타임 
        			if( system.navigatorname == "nexacro" ) {	
        				// 환경설정 함수 콜
        				this.init_cross();

        				var ret;
        				var signeddata, textin;
        				var userdn;
        				if( sign_data == null || sign_data == "" )
        				{
        					alert("서명할 데이타를 넣어주십시요");
        					return;
        				}

        				// 인증서 선택창 초기화 및 선택된 인증서의 DN 추출
        				// DN은 인증기관에서 유니크한 것임.
        				userdn = this.Plugin00.callMethod("GetUserDN");
        				if( userdn == null || userdn == "" )
        				{ 
        					return;
        				}
        				else
        				{

        					// 전자서명 생성
        					// BSTR *SignData(BSTR Source, BSTR HashAlgo, BSTR Password);
        					// parameters : 
        					//   Source : 전자서명할 메세지
        					//   HashAlgo : 서명 알고리즘 ("SHA1", "MD5") ==> SHA1이 표준
        					//   Password : 개인키 복호를 위한 패스워드
        					// return value : 생성된 전자서명 값
        					// 참 고 : 암호를 넣지 않았을 경우에는 암호 입력 다이얼로그 박스에 입력한다.
        					signeddata = this.Plugin00.callMethod("SignData", sign_data, "SHA1", ""); 
        					
        					if( signeddata == null || signeddata == "" )
        					{
        						errmsg = this.Plugin00.callMethod("GetErrorContent"); 
        						errcode = this.Plugin00.callMethod("GetErrorCode"); 
        						this.gfn_alert( "SignData :"+errmsg );
        						return;
        					}
        					else
        					{
        						var sBizNo = this.gfn_replace(this.ds_cntr.getColumn(0,"BIZ_NO"), "-", "");
        						getR = this.Plugin00.callMethod("GetRFromKey",userdn,sBizNo); 
        						//getR = this.Plugin00.callMethod("GetRFromKey",userdn,"1234567890"); 
        						if (getR == "")
        						{
        							alert("주민번호/사업자번호를 확인할 수 없는 인증서입니다.");
        							return;
        						}
        					}
        					if(!this.gfn_confirm("계약합의 하시겠습니까?")) return;
        					this.ds_cntr.setColumn(0,"SIGN_DATA",signeddata);			
        					
        					var sSvcID = "SCntr_Agree";
        					var sController = "SCntr_Agree.do";
        					var sInDatasets = "in_cntr=ds_cntr";
        					var sOutDatasets = "ds_cntr=ds_cntr";
        					var sCallbackFunc = "fn_trCallBack";

        					//FILE_JOB_2 :  트랜잭션 gfn_fileTran 으로 변경
        					this.gfn_fileTran(sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);			
        				}

        			// html5 
        			}else{
        				if( this.ds_cntr.getColumn(0,"SIGN_ORGNL") == null || this.ds_cntr.getColumn(0,"SIGN_ORGNL") == "" )
        				{
        					alert("서명할 데이타를 넣어주십시요");
        					return;
        				}
        				//this.WebBrowser01.callMethod("SignData",this.ds_cntr.getColumn(0,"SIGN_ORGNL"),this.ds_cntr.getColumn(0,"BIZ_NO"));		
        				
        				this.WebBrowser01.callMethod("SignData",sign_data,this.ds_cntr.getColumn(0,"BIZ_NO"));		
        				
        			}
        			
        			// Remove Object form Parent Form  
        			this.removeChild("Plugin00");
        		break;
        		default:
        		break;	  
        	}
        }

        /**
        	@function	fn_getCompFileList1()
        	@desc   	FILE_JOB_6 : 파일 컴포넌트에 파일정보 셋팅 및 필터 추가(컴포넌트 갯수 만큼 function 추가)
        */
        this.fn_getCompFileList1 = function()
        {
        	if(this.div_21.Tab01.tabindex == 3) //첨부파일
        	{	
        		var array = [this.ds_cntr.getColumn(this.ds_cntr.rowposition, "CNTR_NO")];
        		this.div_21.Tab01.tabpages[this.div_21.Tab01.tabindex].fn_fileCompInit(this, "MM_CNTR", this.ds_cntr, array, "Y"); //초기화 및 조회(필터링)
        	}
        }

        

        /**
        	@function	div_21_Tab01_onchanged()
        	@desc   	FILE_COMP_JOB_7 : 파일 첨부 컴포넌트 초기화 & 조회
        */
        this.div_21_Tab01_onchanged = function(obj,e)
        {
        	//FILE_COMP_JOB_7 : 파일 첨부 컴포넌트 초기화 & 조회
        	this.fn_getCompFileList1();
        }

        /**
        	@function	WebBrowser00_onusernotify()
        	@desc   	인증서관리프로그램 설치 완료시
        */
        this.WebBrowser00_onusernotify = function(obj,e)
        {	
        	this.cntWeb00Load++;
        	if(this.cntWeb00Load == 1)
        	{
        		if(this.gfn_replace(e.userdata,"▩","") == "fail")
        		{
        			this.gfn_alert("인증서관리프로그램이 설치되지 않았습니다.");
        			//this.WebBrowser00.set_url(application.services["svcurl"].url+"crosscert/Object_chk.jsp");
        		}
        		else if(this.gfn_replace(e.userdata,"▩","") == "success")
        		{
        			this.gfn_setTmprData("CNTR_NO"		, this.ds_cntr.getColumn(0,"CNTR_NO"));
        			this.gfn_setTmprData("COREXP_KIDS"	, this.ds_cntr.getColumn(0,"COREXP_KIDS"));
        			this.gfn_setTmprData("BRANCH_CD"	, this.ds_cntr.getColumn(0,"BRANCH_CD"));
        			this.gfn_setTmprData("CD_CNTR_STTS"	, this.ds_cntr.getColumn(0,"CD_CNTR_STTS"));
        			this.gfn_setTmprData("STATUS"		, "1");
        			this.gfn_openMenuUrl("CTRS::PCTRS100N00.xfdl");
        		}
        	}
        }

        /**
        	@function	WebBrowser01_onusernotify()
        	@desc   	전자서명
        */
        this.WebBrowser01_onusernotify = function(obj,e)
        {
        	this.cntWeb01Load++;
        	if(this.cntWeb01Load == 1)
        	{
        		if(system.navigatorname != "nexacro")
        		{ 
        			if(!this.gfn_confirm("계약합의 하시겠습니까?")) return;
        			this.ds_cntr.setColumn(0,"SIGN_DATA",this.gfn_replace(e.userdata,"▦",""))
        			
        			var sSvcID = "SCntr_Agree";
        			var sController = "SCntr_Agree.do";
        			var sInDatasets = "in_cntr=ds_cntr";
        			var sOutDatasets = "ds_cntr=ds_cntr";
        			var sCallbackFunc = "fn_trCallBack";

        			this.gfn_fileTran(sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        		}
        	}
        }

        var hiddenClick = false;
        this.div_1_mae_docNo_oneditclick = function(obj,e)
        {
        	if(!hiddenClick) return;
        	
        	var sArg = {
        				cntr_no:this.ds_cntr.getColumn(0, "CNTR_NO")
        				,branch_cd:this.ds_cntr.getColumn(0, "BRANCH_CD")
        				};
        	this.gfn_dialog("", "CTRB::PCTRB100P06.xfdl", sArg, "fn_popCallBack");
        }

        this.div_1_cb_cdDocCtgr_oneditclick = function(obj,e)
        {
        	hiddenClick = true;
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_cntr.addEventHandler("onrowposchanged", this.ds_tndr_onrowposchanged, this);
            this.ds_cntrItem.addEventHandler("onrowposchanged", this.ds_cntrItem_onrowposchanged, this);
            this.ds_cntrItem.addEventHandler("oncolumnchanged", this.ds_cntrItem_oncolumnchanged, this);
            this.ds_cntrInsrnc.addEventHandler("oncolumnchanged", this.ds_cntrInsrnc_oncolumnchanged, this);
            this.ds_cntrPay.addEventHandler("oncolumnchanged", this.ds_cntrPay_oncolumnchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("oninit", this.form_oninit, this);
            this.addEventHandler("ontimer", this.PCTRS100N00_ontimer, this);
            this.div_1.mae_docNo.addEventHandler("oneditclick", this.div_1_mae_docNo_oneditclick, this);
            this.div_1.btn_CntrClo.addEventHandler("onclick", this.div_1_btn_CntrClo_onclick, this);
            this.div_1.cb_cdDocCtgr.addEventHandler("oneditclick", this.div_1_cb_cdDocCtgr_oneditclick, this);
            this.div_2.btn_opHead.addEventHandler("onclick", this.fn_fold_onclick, this);
            this.div_21.Tab01.addEventHandler("onchanged", this.div_21_Tab01_onchanged, this);
            this.div_21.Tab01.tabp01.st_Ttl.addEventHandler("onclick", this.div_21_Tab01_tabp01_st_Ttl_onclick, this);
            this.div_21.Tab01.tabp01.cb_cdCntrCndtn.addEventHandler("onitemchanged", this.div_21_Tab01_tabp01_cb_cdCntrCndtn_onitemchanged, this);
            this.div_21.Tab01.tabp01.cbo_cdCntrStts.addEventHandler("onitemchanged", this.div_21_Tab01_tabp01_cbo_cdCntrStts_onitemchanged, this);
            this.div_21.Tab01.tabp01.cbo_cdCrnc.addEventHandler("onitemchanged", this.div_21_Tab01_tabp01_cbo_cdCrnc_onitemchanged, this);
            this.div_3.btn_opItem.addEventHandler("onclick", this.fn_fold_onclick, this);
            this.div_5.btn_oPItem.addEventHandler("onclick", this.fn_fold_onclick, this);
            this.div_31.grd_cntrItem.addEventHandler("onexpandup", this.div_31_grd_cntrItem_onexpandup, this);
            this.div_6.btn_oPItem.addEventHandler("onclick", this.fn_fold_onclick, this);
            this.div_7.btn_oPItem.addEventHandler("onclick", this.fn_fold_onclick, this);
            this.WebBrowser00.addEventHandler("onusernotify", this.WebBrowser00_onusernotify, this);
            this.WebBrowser01.addEventHandler("onusernotify", this.WebBrowser01_onusernotify, this);

        };

        this.loadIncludeScript("PCTRS100N00.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
