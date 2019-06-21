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
            obj = new Dataset("dsCntr", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"20\" type=\"string\"/><Column id=\"CNTR_NO\" size=\"40\" type=\"string\"/><Column id=\"LNK_CNTR_NO\" size=\"40\" type=\"string\"/><Column id=\"CNTR_TMPL_ID\" size=\"40\" type=\"string\"/><Column id=\"PTNR_ID\" size=\"40\" type=\"string\"/><Column id=\"PTNR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CNTR_STTS\" size=\"40\" type=\"string\"/><Column id=\"CD_DOC_CTGR\" size=\"40\" type=\"string\"/><Column id=\"CD_CNTR_CTGR\" size=\"40\" type=\"string\"/><Column id=\"CD_CNTR_TYPE\" size=\"40\" type=\"string\"/><Column id=\"CD_PYMT_CNDTN\" size=\"40\" type=\"string\"/><Column id=\"CNTR_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CNTR_AMT\" size=\"22\" type=\"bigdecimal\"/><Column id=\"VAT\" size=\"22\" type=\"bigdecimal\"/><Column id=\"CD_CRNC\" size=\"40\" type=\"string\"/><Column id=\"CNTR_BGN_DAY\" size=\"8\" type=\"string\"/><Column id=\"CNTR_END_DAY\" size=\"8\" type=\"string\"/><Column id=\"TTL\" size=\"600\" type=\"string\"/><Column id=\"RMARK\" size=\"1500\" type=\"string\"/><Column id=\"CNTR_REQR_ID\" size=\"50\" type=\"string\"/><Column id=\"CNTR_REQR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQR_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"REQR_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"REQR_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_REQ_DT\" size=\"7\" type=\"STRING\"/><Column id=\"CNTR_CFM_DT\" size=\"7\" type=\"STRING\"/><Column id=\"APP_DOC_ID\" size=\"40\" type=\"string\"/><Column id=\"TKEY\" size=\"40\" type=\"string\"/><Column id=\"ATTCH_FILE_CNT\" size=\"22\" type=\"bigdecimal\"/><Column id=\"DFCT_GRNT_PRID\" size=\"300\" type=\"string\"/><Column id=\"ALT_INTL_CFM\" size=\"1\" type=\"STRING\"/><Column id=\"CRTR_ID\" size=\"50\" type=\"string\"/><Column id=\"CRT_DT\" size=\"7\" type=\"STRING\"/><Column id=\"LAST_CHGR_ID\" size=\"50\" type=\"string\"/><Column id=\"LAST_CHG_DT\" size=\"7\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCntrItem", this);
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

            obj = new Dataset("dsReturn", this);
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

            obj = new Dataset("dsCntrInsrnc", this);
            obj._setContents("<ColumnInfo><Column id=\"PYMT_ORDR\" size=\"22\" type=\"bigdecimal\"/><Column id=\"REQR_NM\" size=\"30\" type=\"string\"/><Column id=\"GRNT_BGN_DAY\" size=\"8\" type=\"string\"/><Column id=\"SIGNCNTNT\" size=\"0\" type=\"string\"/><Column id=\"CRTR_ID\" size=\"50\" type=\"string\"/><Column id=\"GRNT_INSRNC_NO\" size=\"40\" type=\"string\"/><Column id=\"PCHRGR_ID\" size=\"30\" type=\"string\"/><Column id=\"GRNT_RT\" size=\"22\" type=\"bigdecimal\"/><Column id=\"RJT_RSN\" size=\"1500\" type=\"string\"/><Column id=\"REQR_ID\" size=\"50\" type=\"string\"/><Column id=\"LAST_CHGR_ID\" size=\"50\" type=\"string\"/><Column id=\"CNTR_NO\" size=\"40\" type=\"string\"/><Column id=\"CD_GRNT_STTS_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_GRNT_STTS\" size=\"40\" type=\"string\"/><Column id=\"PCHRGR_NM\" size=\"50\" type=\"string\"/><Column id=\"GRNT_REQ_DT\" size=\"7\" type=\"string\"/><Column id=\"GRNT_END_DAY\" size=\"8\" type=\"string\"/><Column id=\"GRNT_INSRNC_CORP\" size=\"40\" type=\"string\"/><Column id=\"CNTR_GRNT_ID\" size=\"40\" type=\"string\"/><Column id=\"ATTCH_FILE_CNT\" size=\"22\" type=\"bigdecimal\"/><Column id=\"GRNT_AMT\" size=\"22\" type=\"bigdecimal\"/><Column id=\"CD_GRNT_MTHD_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_GRNT_MTHD\" size=\"40\" type=\"string\"/><Column id=\"LAST_CHG_DT\" size=\"7\" type=\"string\"/><Column id=\"CNTR_PAY_PLAN_ID\" size=\"40\" type=\"string\"/><Column id=\"GRNT_CFM_DT\" size=\"7\" type=\"string\"/><Column id=\"CD_GRNT_INSRNC_TYPE_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_GRNT_INSRNC_TYPE\" size=\"40\" type=\"string\"/><Column id=\"CRT_DT\" size=\"7\" type=\"string\"/><Column id=\"BRANCH_CD\" size=\"20\" type=\"string\"/><Column id=\"CHECKED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCntrPay", this);
            obj._setContents("<ColumnInfo><Column id=\"CNTR_NO\" size=\"40\" type=\"string\"/><Column id=\"RMARK\" size=\"1500\" type=\"string\"/><Column id=\"PYMT_PLN_DAY\" size=\"8\" type=\"string\"/><Column id=\"PYMT_RT\" size=\"22\" type=\"STRING\"/><Column id=\"CNTR_PAY_PLAN_ID\" size=\"40\" type=\"string\"/><Column id=\"PYMT_ORDR\" size=\"22\" type=\"bigdecimal\"/><Column id=\"PYMT_AMT\" size=\"22\" type=\"bigdecimal\"/><Column id=\"BRANCH_CD\" size=\"20\" type=\"string\"/><Column id=\"CHECKED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSign", this);
            obj._setContents("<ColumnInfo><Column id=\"SIGN_ORGNL\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCntrOrg", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompCond00", "absolute", "0", "0", null, "43", "15", null, this);
            obj.set_taborder("0");
            obj.getSetter("objNm").set("컨트롤 박스");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);
            obj = new Edit("maeCntrNo", "absolute", "104", "10", "200", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("1");
            obj.getSetter("objNm").set("문서번호");
            obj.set_readonly("true");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Button("btnCntrClo", "absolute", null, "10", "70", "24", "8", null, this.divViewCompCond00);
            obj.set_taborder("3");
            obj.set_text("계약합의");
            obj.set_cssclass("btn_WF_SearchBtn");
            obj.getSetter("objNm").set("계약합의버튼");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Combo("cboCdDocCtgr", "absolute", "2", "10", "100", "24", null, null, this.divViewCompCond00);
            this.divViewCompCond00.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_cdCM10");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("문서유형");
            obj.set_readonly("true");

            obj = new Div("div_2", "absolute", "0%", "63", null, "24", "15", null, this);
            obj.set_taborder("7");
            obj.getSetter("objNm").set("DIV-헤더 타이틀");
            this.addChild(obj.name, obj);

            obj = new Div("divViewCompBody00", "absolute", "0", "48", null, "195", "15", null, this);
            obj.set_taborder("1");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("DIV-헤더 상세");
            this.addChild(obj.name, obj);
            obj = new Tab("Tab01", "absolute", "0", "0", null, "194", "0", null, this.divViewCompBody00);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.getSetter("objNm").set("TAB");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Tabpage("tabp01", this.divViewCompBody00.Tab01);
            obj.set_text("기본정보");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("기본정보");
            obj.getSetter("lbcd").set("");
            this.divViewCompBody00.Tab01.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label05", "absolute", "0", "34", null, "33", "0", null, this.divViewCompBody00.Tab01.tabp01);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staTtl", "absolute", "0", "34", "117", "33", null, null, this.divViewCompBody00.Tab01.tabp01);
            obj.set_taborder("12");
            obj.set_text("계약명");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.style.set_padding("1 0 0 17");
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Div("divViewCompTitle00", "absolute", "0", "5", null, "24", "10", null, this.divViewCompBody00.Tab01.tabp01);
            obj.set_taborder("78");
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            obj.style.set_padding("1 0 0 17");
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", null, "255", "24", null, "0", this.divViewCompBody00.Tab01.tabp01.divViewCompTitle00);
            obj.set_taborder("2");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 2 17");
            this.divViewCompBody00.Tab01.tabp01.divViewCompTitle00.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label00", "absolute", "0", "66", null, "33", "0", null, this.divViewCompBody00.Tab01.tabp01);
            obj.set_taborder("79");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label01", "absolute", "0", "98", null, "33", "0", null, this.divViewCompBody00.Tab01.tabp01);
            obj.set_taborder("80");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label02", "absolute", "0", "130", null, "33", "0", null, this.divViewCompBody00.Tab01.tabp01);
            obj.set_taborder("81");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staPtnrNm", "absolute", "0", "66", "117", "33", null, null, this.divViewCompBody00.Tab01.tabp01);
            obj.set_taborder("82");
            obj.set_text("협력사");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("1 0 0 17");
            obj.getSetter("objNm").set("협력사");
            obj.getSetter("lbcd").set("");
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staCntrCtgr", "absolute", "0", "98", "117", "33", null, null, this.divViewCompBody00.Tab01.tabp01);
            obj.set_taborder("83");
            obj.set_text("계약유형");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("1 0 0 17");
            obj.getSetter("objNm").set("계약유형");
            obj.getSetter("lbcd").set("");
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staCntrDt", "absolute", "0", "130", "117", "33", null, null, this.divViewCompBody00.Tab01.tabp01);
            obj.set_taborder("84");
            obj.set_text("계약일자");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("1 0 0 17");
            obj.getSetter("objNm").set("계약일자");
            obj.getSetter("lbcd").set("");
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Div("divCntrDt", "absolute", "122", "135", "276", "24", null, null, this.divViewCompBody00.Tab01.tabp01);
            obj.set_taborder("85");
            obj.set_text("Div01");
            obj.set_enable("false");
            obj.getSetter("objNm").set("계약일자");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staCdCrnc", "absolute", "460", "130", "101", "33", null, null, this.divViewCompBody00.Tab01.tabp01);
            obj.set_taborder("86");
            obj.set_text("통화단위");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("1 0 0 17");
            obj.getSetter("objNm").set("예산번호");
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staPymtCndtn", "absolute", "38.24%", "66", "101", "33", null, null, this.divViewCompBody00.Tab01.tabp01);
            obj.set_taborder("87");
            obj.set_text("지급조건");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("1 0 0 17");
            obj.getSetter("objNm").set("지급계정");
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staGrntPrid", "absolute", "460", "98", "101", "33", null, null, this.divViewCompBody00.Tab01.tabp01);
            obj.set_taborder("88");
            obj.set_text("하자보증기간");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("1 0 0 17");
            obj.getSetter("objNm").set("하자보증기간");
            obj.getSetter("lbcd").set("");
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staCntrStts", "absolute", "703", "130", "61", "33", null, null, this.divViewCompBody00.Tab01.tabp01);
            obj.set_taborder("89");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("1 0 0 17");
            obj.getSetter("lbcd").set("");
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staVat", "absolute", "902", "130", "117", "33", null, null, this.divViewCompBody00.Tab01.tabp01);
            obj.set_taborder("90");
            obj.set_text("부가세");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("1 0 0 17");
            obj.getSetter("objNm").set("예산번호");
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staCntrAmt", "absolute", "902", "98", "117", "33", null, null, this.divViewCompBody00.Tab01.tabp01);
            obj.set_taborder("91");
            obj.set_text("공급가액");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("1 0 0 17");
            obj.getSetter("objNm").set("예산번호");
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staCntrSum", "absolute", "902", "66", "117", "33", null, null, this.divViewCompBody00.Tab01.tabp01);
            obj.set_taborder("92");
            obj.set_text("계약금액");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("1 0 0 17");
            obj.getSetter("objNm").set("예산번호");
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staCntrType", "absolute", "74.98%", "34", "117", "33", null, null, this.divViewCompBody00.Tab01.tabp01);
            obj.set_taborder("93");
            obj.set_text("계약구분");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("1 0 0 17");
            obj.getSetter("objNm").set("계약구분");
            obj.getSetter("lbcd").set("");
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtTtl", "absolute", "121", "39", null, "24", "25.44%", null, this.divViewCompBody00.Tab01.tabp01);
            obj.set_taborder("94");
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Combo("cboCntrType", "absolute", "85.12%", "39", null, "24", "4.24%", null, this.divViewCompBody00.Tab01.tabp01);
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("95");
            obj.set_value("null");
            obj = new Edit("edtPtnrId", "absolute", "121", "70", "124", "24", null, null, this.divViewCompBody00.Tab01.tabp01);
            obj.set_taborder("96");
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtPtnrNm", "absolute", "250", "70", null, "24", "62.18%", null, this.divViewCompBody00.Tab01.tabp01);
            obj.set_taborder("97");
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Combo("cboCntrCtgr", "absolute", "121", "102", null, "24", "957", null, this.divViewCompBody00.Tab01.tabp01);
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("98");
            obj = new Combo("cboPymtCndtn", "absolute", "566", "70", null, "24", "506", null, this.divViewCompBody00.Tab01.tabp01);
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("99");
            obj = new Combo("cboCdCrnc", "absolute", "566", "134", null, "24", "506", null, this.divViewCompBody00.Tab01.tabp01);
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("100");
            obj = new Combo("cboCntrStts", "absolute", "769", "134", null, "24", "306", null, this.divViewCompBody00.Tab01.tabp01);
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("101");
            obj = new Edit("edtGrntPrid", "absolute", "566", "102", null, "24", "25.52%", null, this.divViewCompBody00.Tab01.tabp01);
            obj.set_taborder("102");
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj = new MaskEdit("mdeCntrSum", "absolute", "85.12%", "70", null, "24", "0.42%", null, this.divViewCompBody00.Tab01.tabp01);
            obj.set_taborder("103");
            obj.set_mask("#,###");
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj = new MaskEdit("medCntrAmt", "absolute", "85.12%", "102", null, "24", "0.58%", null, this.divViewCompBody00.Tab01.tabp01);
            obj.set_taborder("104");
            obj.set_mask("#,###");
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj = new MaskEdit("medVat", "absolute", "85.12%", "134", null, "24", "0.67%", null, this.divViewCompBody00.Tab01.tabp01);
            obj.set_taborder("105");
            obj.set_mask("#,###");
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Tabpage("tabp02", this.divViewCompBody00.Tab01);
            obj.set_text("계약담당자");
            this.divViewCompBody00.Tab01.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label00", "absolute", "0%", "10", null, "75", "0%", null, this.divViewCompBody00.Tab01.tabp02);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.divViewCompBody00.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Div("divViewCompTitle00", "absolute", "0", "5", null, "24", "0", null, this.divViewCompBody00.Tab01.tabp02);
            obj.set_taborder("10");
            obj.style.set_padding("1 0 0 17");
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            this.divViewCompBody00.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", null, "255", "24", null, "0", this.divViewCompBody00.Tab01.tabp02.divViewCompTitle00);
            obj.set_taborder("0");
            obj.set_text("계약담당자");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 2 17");
            this.divViewCompBody00.Tab01.tabp02.divViewCompTitle00.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label01", "absolute", "0", "34", null, "33", "0", null, this.divViewCompBody00.Tab01.tabp02);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody00.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Static("staCntrReqr", "absolute", "0", "34", "170", "33", null, null, this.divViewCompBody00.Tab01.tabp02);
            obj.set_taborder("15");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_Label");
            this.divViewCompBody00.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label02", "absolute", "0", "66", null, "33", "0", null, this.divViewCompBody00.Tab01.tabp02);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody00.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Static("staTel", "absolute", "0", "66", "170", "33", null, null, this.divViewCompBody00.Tab01.tabp02);
            obj.set_taborder("17");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.divViewCompBody00.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Edit("edtCntrReqrId", "absolute", "175", "38", "100", "24", null, null, this.divViewCompBody00.Tab01.tabp02);
            obj.set_taborder("18");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("objNm").set("계약담당자ID");
            this.divViewCompBody00.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Edit("edtCntrReqrNm", "absolute", "280", "38", null, "24", "55.94%", null, this.divViewCompBody00.Tab01.tabp02);
            obj.set_taborder("19");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("계약담당자명");
            this.divViewCompBody00.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Edit("edtTel", "absolute", "175", "71", null, "24", "55.94%", null, this.divViewCompBody00.Tab01.tabp02);
            obj.set_taborder("20");
            obj.getSetter("objNm").set("계약담당자 전화번호");
            this.divViewCompBody00.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Static("staEmail", "absolute", "44.47%", "34", "170", "33", null, null, this.divViewCompBody00.Tab01.tabp02);
            obj.set_taborder("21");
            obj.set_text("EMail");
            obj.set_cssclass("sta_WF_Label");
            this.divViewCompBody00.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Static("staFax", "absolute", "44.47%", "66", "170", "33", null, null, this.divViewCompBody00.Tab01.tabp02);
            obj.set_taborder("22");
            obj.set_text("Fax");
            obj.set_cssclass("sta_WF_Label");
            this.divViewCompBody00.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Edit("edtEmail", "absolute", "59.02%", "38", null, "23", "7.73%", null, this.divViewCompBody00.Tab01.tabp02);
            obj.set_taborder("23");
            obj.set_cssclass("edt_default_r");
            obj.getSetter("objNm").set("계약담당자 EMAIL");
            this.divViewCompBody00.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Edit("edtFax", "absolute", "59.02%", "71", null, "24", "7.73%", null, this.divViewCompBody00.Tab01.tabp02);
            obj.set_taborder("24");
            obj.set_cssclass("edt_default_r");
            obj.getSetter("objNm").set("계약담당자 FAX");
            this.divViewCompBody00.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Tabpage("tabp03", this.divViewCompBody00.Tab01);
            obj.getSetter("objNm").set("첨부파일 텝");
            obj.set_text("특이사항");
            this.divViewCompBody00.Tab01.addChild(obj.name, obj);
            obj = new TextArea("txaRmark", "absolute", "0", "34", null, null, "0", "5", this.divViewCompBody00.Tab01.tabp03);
            obj.set_taborder("0");
            this.divViewCompBody00.Tab01.tabp03.addChild(obj.name, obj);
            obj = new Div("divViewCompTitle00", "absolute", "0", "5", null, "24", "10", null, this.divViewCompBody00.Tab01.tabp03);
            obj.set_taborder("1");
            obj.style.set_padding("1 0 0 17");
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            this.divViewCompBody00.Tab01.tabp03.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", null, "255", "24", null, "0", this.divViewCompBody00.Tab01.tabp03.divViewCompTitle00);
            obj.set_taborder("0");
            obj.set_text("특이사항");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 2 17");
            this.divViewCompBody00.Tab01.tabp03.divViewCompTitle00.addChild(obj.name, obj);
            obj = new Tabpage("tabp04", this.divViewCompBody00.Tab01);
            obj.set_text("첨부파일");
            obj.set_url("CCOMP::CompNFileUpDown.xfdl");
            this.divViewCompBody00.Tab01.addChild(obj.name, obj);

            obj = new Div("div_4", "absolute", "0", "635", null, "24", "15", null, this);
            obj.set_taborder("9");
            obj.getSetter("objNm").set("DIV-품목 상세-탭 헤더");
            this.addChild(obj.name, obj);

            obj = new Div("divViewCompBody02", "absolute", "0", "641", null, "200", "15", null, this);
            obj.set_taborder("4");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("DIV-대상업체 상세");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_cntrPay", "absolute", "0", "0", null, null, "0", "0", this.divViewCompBody02);
            obj.set_taborder("0");
            obj.set_binddataset("dsCntrPay");
            obj.getSetter("objNm").set("지급계획 그리드");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"VMODE\"><Columns><Column size=\"90\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"500\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"회차\"/><Cell col=\"1\" cssclass=\"cell_head\" text=\"지급율\"/><Cell col=\"2\" cssclass=\"cell_head\" text=\"지급금액\"/><Cell col=\"3\" cssclass=\"cell_head\" text=\"지급조건\"/></Band><Band id=\"body\" style=\"cellpadding:2 2 2 2 ;\"><Cell displaytype=\"normal\" edittype=\"none\" style=\"align: ;\" text=\"bind:PYMT_ORDR\" editdisplay=\"edit\"/><Cell col=\"1\" celltype=\"none\" displaytype=\"normal\" edittype=\"none\" editfilter=\"number\" style=\"align:right;\" text=\"bind:PYMT_RT\" mask=\"###\" maskchar=\" \" editlimit=\"-1\" editautoselect=\"false\" editdisplay=\"edit\" suppress=\"0\" autosizecol=\"default\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" style=\"align:right;padding: ;\" text=\"bind:PYMT_AMT\" mask=\"9,999.###\" maskchar=\" \" editautoselect=\"true\" editdisplay=\"edit\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" style=\"align:left;\" text=\"bind:RMARK\" editdisplay=\"edit\"/></Band></Format></Formats>");
            this.divViewCompBody02.addChild(obj.name, obj);

            obj = new Div("divViewCompBody01", "absolute", "0%", "292", null, "300", "15", null, this);
            obj.set_taborder("2");
            obj.getSetter("objNm").set("DIV-품목 상세");
            this.addChild(obj.name, obj);
            obj = new Grid("grdCntrItem", "absolute", "0", "0", null, null, "0", "0", this.divViewCompBody01);
            obj.set_taborder("2");
            obj.getSetter("objNm").set("품목 그리드");
            obj.set_binddataset("dsCntrItem");
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
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Div("div_grdBottom", "absolute", "0%", null, null, "28", "0%", "10", this.divViewCompBody01);
            obj.set_taborder("3");
            obj.set_visible("false");
            obj.set_url("");
            this.divViewCompBody01.addChild(obj.name, obj);

            obj = new Div("divViewCompBody03", "absolute", "0", "890", null, "200", "10", null, this);
            obj.set_taborder("5");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("DIV-대상업체 상세");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_insrncItem", "absolute", "0%", "0", null, null, "0%", "0", this.divViewCompBody03);
            obj.set_taborder("0");
            obj.set_binddataset("dsCntrInsrnc");
            obj.getSetter("objNm").set("품목 그리드");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"VMODE\"><Columns><Column size=\"71\"/><Column size=\"154\"/><Column size=\"196\"/><Column size=\"192\"/><Column size=\"268\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"회차\"/><Cell col=\"1\" cssclass=\"cell_head\" text=\"이행보증구분\"/><Cell col=\"2\" cssclass=\"cell_head\" text=\"보증유형\"/><Cell col=\"3\" cssclass=\"cell_head\" text=\"보증금율\"/><Cell col=\"4\" cssclass=\"cell_head\" text=\"보증금액\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"bind:PYMT_ORDR\" combodataset=\"dsCntrPay\" combocodecol=\"PYMT_ORDR\" combodatacol=\"PYMT_ORDR\" combodisplay=\"display\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"bind:CD_GRNT_INSRNC_TYPE_NM\" combodataset=\"ds_cdCT16\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" combodisplay=\"display\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"bind:CD_GRNT_MTHD_NM\" combodataset=\"ds_cdCT15\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" combodisplay=\"display\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" style=\"align:right;\" text=\"bind:GRNT_RT\" mask=\"###\" maskchar=\" \" editdisplay=\"edit\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" style=\"align:right;\" text=\"bind:GRNT_AMT\" mask=\"9,999.###\" maskchar=\" \" editdisplay=\"edit\"/></Band></Format></Formats>");
            this.divViewCompBody03.addChild(obj.name, obj);

            obj = new Div("divViewCompBody04", "absolute", "0", "1143", null, "516", "15", null, this);
            obj.set_taborder("6");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new WebBrowser("WebBrowser00", "absolute", "0", "3", null, "506", "0", null, this.divViewCompBody04);
            obj.set_taborder("0");
            this.divViewCompBody04.addChild(obj.name, obj);

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
            obj.set_url("");
            this.addChild(obj.name, obj);

            obj = new Div("divViewCompTitle00", "absolute", "0", "263", null, "24", "15", null, this);
            obj.set_taborder("92");
            obj.style.set_padding("1 0 0 17");
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", null, "255", "24", null, "0", this.divViewCompTitle00);
            obj.set_taborder("0");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 2 17");
            this.divViewCompTitle00.addChild(obj.name, obj);

            obj = new Div("divViewCompTitle01", "absolute", "0", "612", null, "24", "15", null, this);
            obj.set_taborder("93");
            obj.style.set_padding("1 0 0 17");
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", null, "255", "24", null, "0", this.divViewCompTitle01);
            obj.set_taborder("0");
            obj.set_text("지급계획");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 2 17");
            this.divViewCompTitle01.addChild(obj.name, obj);

            obj = new Div("divViewCompTitle02", "absolute", "0", "861", null, "24", "15", null, this);
            obj.set_taborder("94");
            obj.style.set_padding("1 0 0 17");
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", null, "255", "24", null, "0", this.divViewCompTitle02);
            obj.set_taborder("0");
            obj.set_text("이행보증");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 2 17");
            this.divViewCompTitle02.addChild(obj.name, obj);

            obj = new Div("divViewCompTitle03", "absolute", "8", "1113", null, "24", "2", null, this);
            obj.set_taborder("95");
            obj.style.set_padding("1 0 0 17");
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", null, "255", "24", null, "0", this.divViewCompTitle03);
            obj.set_taborder("0");
            obj.set_text("계약내용");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 2 17");
            this.divViewCompTitle03.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.divViewCompCond00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.getSetter("objNm").set("컨트롤 박스");
            		p.set_cssclass("div_WF_SearchBg");

            	}
            );
            this.divViewCompCond00.addLayout(obj.name, obj);

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
            obj = new Layout("default", "", 993, 139, this.divViewCompBody00.Tab01.tabp01.divViewCompTitle00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("78");
            		p.getSetter("objNm").set("DIV-평가서 타이틀");
            		p.style.set_padding("1 0 0 17");

            	}
            );
            this.divViewCompBody00.Tab01.tabp01.divViewCompTitle00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.divViewCompBody00.Tab01.tabp01,
            	//-- Layout function
            	function(p) {
            		p.set_text("기본정보");
            		p.set_scrollbars("none");
            		p.getSetter("objNm").set("기본정보");
            		p.getSetter("lbcd").set("");

            	}
            );
            this.divViewCompBody00.Tab01.tabp01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompBody00.Tab01.tabp02.divViewCompTitle00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("10");
            		p.style.set_padding("1 0 0 17");
            		p.getSetter("objNm").set("DIV-평가서 타이틀");

            	}
            );
            this.divViewCompBody00.Tab01.tabp02.divViewCompTitle00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1042, 163, this.divViewCompBody00.Tab01.tabp02,
            	//-- Layout function
            	function(p) {
            		p.set_text("계약담당자");

            	}
            );
            this.divViewCompBody00.Tab01.tabp02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompBody00.Tab01.tabp03.divViewCompTitle00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_padding("1 0 0 17");
            		p.getSetter("objNm").set("DIV-평가서 타이틀");

            	}
            );
            this.divViewCompBody00.Tab01.tabp03.divViewCompTitle00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.divViewCompBody00.Tab01.tabp03,
            	//-- Layout function
            	function(p) {
            		p.set_text("특이사항");

            	}
            );
            this.divViewCompBody00.Tab01.tabp03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 195, this.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_scrollbars("none");
            		p.getSetter("objNm").set("DIV-헤더 상세");

            	}
            );
            this.divViewCompBody00.addLayout(obj.name, obj);

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
            obj = new Layout("default", "", 0, 200, this.divViewCompBody02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_scrollbars("none");
            		p.getSetter("objNm").set("DIV-대상업체 상세");

            	}
            );
            this.divViewCompBody02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 300, this.divViewCompBody01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.getSetter("objNm").set("DIV-품목 상세");

            	}
            );
            this.divViewCompBody01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1042, 164, this.divViewCompBody03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.set_scrollbars("none");
            		p.getSetter("objNm").set("DIV-대상업체 상세");

            	}
            );
            this.divViewCompBody03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1042, 500, this.divViewCompBody04,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.set_scrollbars("none");

            	}
            );
            this.divViewCompBody04.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompTitle00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("92");
            		p.style.set_padding("1 0 0 17");
            		p.getSetter("objNm").set("DIV-평가서 타이틀");

            	}
            );
            this.divViewCompTitle00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompTitle01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("93");
            		p.style.set_padding("1 0 0 17");
            		p.getSetter("objNm").set("DIV-평가서 타이틀");

            	}
            );
            this.divViewCompTitle01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompTitle02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("94");
            		p.style.set_padding("1 0 0 17");
            		p.getSetter("objNm").set("DIV-평가서 타이틀");

            	}
            );
            this.divViewCompTitle02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompTitle03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("95");
            		p.style.set_padding("1 0 0 17");
            		p.getSetter("objNm").set("DIV-평가서 타이틀");

            	}
            );
            this.divViewCompTitle03.addLayout(obj.name, obj);

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
            obj = new BindItem("item0","divViewCompBody00.Tab01.tabp01.edtTtl","value","dsCntr","TTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divViewCompBody00.Tab01.tabp01.edtPtnrNm","value","dsCntr","PTNR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divViewCompBody00.Tab01.tabp01.edtPtnrId","value","dsCntr","PTNR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","divViewCompBody00.Tab01.tabp01.cboCntrCtgr","value","dsCntr","CD_CNTR_CTGR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","divViewCompBody00.Tab01.tabp01.cboPymtCndtn","value","dsCntr","CD_PYMT_CNDTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","divViewCompBody00.Tab01.tabp01.edtGrntPrid","value","dsCntr","DFCT_GRNT_PRID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","divViewCompBody00.Tab01.tabp01.cboCdCrnc","value","dsCntr","CD_CRNC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","divViewCompBody00.Tab01.tabp01.cboCntrStts","value","dsCntr","CD_CNTR_STTS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","divViewCompBody00.Tab01.tabp01.cboCntrType","value","dsCntr","CD_CNTR_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","divViewCompBody00.Tab01.tabp01.mdeCntrSum","value","dsCntr","CNTR_SUM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","divViewCompBody00.Tab01.tabp01.medCntrAmt","value","dsCntr","CNTR_AMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","divViewCompBody00.Tab01.tabp01.medVat","value","dsCntr","VAT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","divViewCompCond00.cboCdDocCtgr","value","dsCntr","CD_DOC_CTGR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","divViewCompCond00.maeCntrNo","value","dsCntr","CNTR_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","divViewCompBody00.Tab01.tabp02.edtCntrReqrId","value","dsCntr","CNTR_REQR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","divViewCompBody00.Tab01.tabp02.edtCntrReqrNm","value","dsCntr","CNTR_REQR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","divViewCompBody00.Tab01.tabp02.edtTel","value","dsCntr","REQR_TEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","divViewCompBody00.Tab01.tabp02.edtEmail","value","dsCntr","REQR_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","divViewCompBody00.Tab01.tabp02.edtFax","value","dsCntr","REQR_FAX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","divViewCompBody00.Tab01.tabp03.txaRmark","value","dsCntr","RMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompCalFromTo.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompNFileUpDown.xfdl");
        };
        
        // User Script
        this.registerScript("SCntrDetail1.xfdl", function(exports) {
        /**
         * @파일명			: SCntrDetail
         * @생성자			: 안성민
         * @생성일시		: 2019. 05. 14.
         * @설명			: 계약상세
         * @최종수정자		: 안성민
         * @최종수정일시	: 2019. 05. 14.
        */  

        this.cntWeb00Load = 0;
        this.cntWeb01Load = 0;

        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {
        	var param = [	{code:"CM13", sSelectType:"S"} // 지급조건
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
        									
        									
        	gfnGetCode(this, param);
        }

        /**
          * @함수명	: BRfqPrgList_oninit
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.InitEventInfo(이벤트변수)
          * @desc     	: 폼 oninit이벤트
          */
        this.fnFormOninit = function(obj,e)
        {
        	this.fnSetCode();
        }

        /**
          * @함수명	: fnFormOnload
          * @input    	: obj:Form(폼 오브젝트), e:nexacr o.LoadEventInfo(이벤트변수)
          * @desc     	: 폼 onload이벤트
          */
        this.fnFormOnload = function(obj,e)
        {	
        	gfnSetObj("A");
        	
        	//그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기(그리드 컴포넌트, 페이징div 컴포넌트, 폼오브젝트(this))
         	gfnSetGrdFunc(this.divViewCompBody00.grdList, this.divViewCompBody00.divPaging, this,{isTran:"Y", tranNm:"BCntrService.searchCntrList", dsParam:this.dsCondition});
         	
        	//확정일자, 계약일자	
        	this.divViewCompCond00.divCntrReqDt.fnSetDate(this.dsCondition, "REQ_DT_STR", "REQ_DT_END");
        	this.dsCondition.setColumn(0, "CD_CNTR_STTS", "");
        	this.dsCondition.setColumn(0, "PTNR_ID", application.gdsUserInfo.getColumn(0, "PTNR_ID"));
        	this.fnSearch();
        }

        /**
        	@function	form_onload()
        	@desc   	폼 onload이벤트
        */
        this.form_onload = function(obj,e)
        {	
        	this.dsCntr.addRow();	
        	
         	//그리드 공통버튼 설정
         	this.div_31.div_grdBottom.fn_initGridInfo(obj, this.div_31.grd_cntrItem);
        	
        	//그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기
        	this.gfn_setGrdFunc(this.div_31.grd_cntrItem);
        	this.gfn_setGrdFunc(this.div_51.grd_cntrPay);
        	this.gfn_setGrdFunc(this.div_61.grd_insrncItem);

        	//이전화면에서 넘어오는 파라미터를 받는다.	
        	this.dsCntr.setColumn(0,"CNTR_NO"		, this.gfnGetTmprData("CNTR_NO"));
        	this.dsCntr.setColumn(0,"BRANCH_CD"	, this.gfn_getTmprData("BRANCH_CD"));
        	this.dsCntr.setColumn(0,"COREXP_KIDS"	, this.gfn_getTmprData("COREXP_KIDS"));	

        	if(this.gfn_getTmprData("STATUS") != "1"){
        		this.WebBrowser00.set_url(application.services["svcurl"].url+"crosscert/Object_chk.jsp");
        	} else{
        		this.WebBrowser00.set_url("");
        	}
        	
        	this.gfn_clearTmprData(); 
        	
        	this.WebBrowser01.set_url(application.services["svcurl"].url+"crosscert/SignData.jsp");
        	this.div_21.Tab01.tabp01.div_crtDt.fn_setDate(this.dsCntr, "CNTR_BGN_DAY", "CNTR_END_DAY");
        	
        	this.fn_search();
        	
        	//FILE_JOB_1 : 데이터 조회 이후에 파일 정보를 조회하기 위해 동기화 한다.
         	this.gfn_fileCompInit(this.div_21.Tab01.tabp04);
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

        	var sSvcID = "read";
        	var sController = "SCntr_Read.do";
        	var sInDatasets = "in_ds=dsCntr";
        	var sOutDatasets = "dsCntr=dsCntr dsCntrAdd=dsCntrAdd dsCntrItem=dsCntrItem dsCntrPay=dsCntrPay dsCntrInsrnc=dsCntrInsrnc";
        	var sCallbackFunc = "fn_trCallBack";

        	//FILE_JOB_2 :  트랜잭션 gfn_fileTran 으로 변경
            this.gfn_fileTran(sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
        	@function	fn_preSave()
        	@desc   	저장 전 처리
        */
        this.fnPreSave = function()
        {	
        	return true;
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
        	this.dsCntrOrg.copyData(this.dsCntr);
          	this.dsCntr.set_updatecontrol(false);
          	this.dsCntr.deleteColumn("SIGN_ORGNL");	
          	this.dsCntr.deleteColumn("SIGN_DATA");
          	  	
        	// 2. 에디터 관련 컬럼을 삭제한 데이터셋을 이용하여 HTML로 만든다.
        	var sArg = {
        					ubiJrf:"PCTRB100N00_P01_SIGNDATA_HTML.jrf"
        					, key:[this.dsCntr.getColumn(0, "BRANCH_CD"), this.dsCntr.getColumn(0, "CNTR_NO")]
        					, localdaset:[this.dsCntr, this.dsCntrItem, this.dsCntrPay, this.dsCntrInsrnc]
        					, exportType : "html"
        					, exportUrl : this.dsCntr.getColumn(0, "SIGNDATA_FILE_EXPORTURL")							
        					, signdataFileNm:this.dsCntr.getColumn(0, "SIGNDATA_FILE_NM")
        				}
        	this.Div00.ubiviewerlib_setting(sArg);
        	
        	// 3. 1번에서 삭제한 데이터셋 원복
        	this.dsCntr.copyData(this.dsCntrOrg);
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
        	var sInDatasets = "in_ds=dsCntr";
        	var sOutDatasets = "dsReturn=dsReturn";
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
        			this.gfn_fileDsSeq(this.dsCntr);
        			
        			//FILE_JOB_5 : 저장 후 재조회를 마치고 나서 파일 컴포넌트에 파일정보를 재설정 한다.
        			this.fn_getCompFileList1();
        					
        			var start = "<div style="+"color:#333333;font:20 malgun gothic;>";
        			var end   = "</div>";
        			var doc = this.div_71.WebBrowser00.getProperty("document");
        			doc.callMethod("write", start+this.dsCntr.getColumn(0,"SIGN_ORGNL")+end);
        			
        			// 합의완료
        			if("CT10SREQ" != this.dsCntr.getColumn(0,"CD_CNTR_STTS")){
        				this.div_1.btn_CntrClo.set_visible(false);
        			}
        			
        			
        		break;
        		
        		case "SCntr_Agree" : 
        			if(strErrMsg != ""){
        				this.gfn_alert(strErrMsg);
        				
        				this.gfn_setTmprData("CNTR_NO"		, this.dsCntr.getColumn(0,"CNTR_NO"));
        				this.gfn_setTmprData("COREXP_KIDS"	, this.dsCntr.getColumn(0,"COREXP_KIDS"));
        				this.gfn_setTmprData("BRANCH_CD"	, this.dsCntr.getColumn(0,"BRANCH_CD"));
        				this.gfn_setTmprData("CD_CNTR_STTS"	, this.dsCntr.getColumn(0,"CD_CNTR_STTS"));
        				this.gfn_setTmprData("STATUS"		, "1");
        				this.gfn_openMenuUrl("CTRS::PCTRS100N00.xfdl");
        			}
        		break;
        		
        		case "SCntr_createHtml" :
        			// 20170217 mhhan 로컬에서는 pdf파일이 잘 되나 개발에서는 인코딩 문제인지 한글이 깨짐...
        // 			// 5. 계약서 내용을 pdf로 만든다.
        // 			var temp = this.gfn_replace(this.dsCntr.getColumn(0,"SIGN_ORGNL"), "\"", "\'");			
        // 			//temp = this.gfn_replace(temp , "mso-bidi-font-family: 'Times New Roman';", "mso-bidi-font-family: Times New Roman;");
        // 			this.dsCntr.setColumn(0,"SIGN_ORGNL", temp);
        // 			var sArg = {
        // 							ubiJrf:"PCTRB100N00_P01_SIGNDATA_PDF.jrf"
        // 							, key:[this.dsCntr.getColumn(0, "BRANCH_CD"), this.dsCntr.getColumn(0, "CNTR_NO")]
        // 							, localdaset:[this.dsCntr, this.dsCntrItem, this.dsCntrPay, this.dsCntrInsrnc]
        // 							, exportType : "pdf"
        // 							, exportUrl : this.dsCntr.getColumn(0, "SIGNDATA_FILE_EXPORTURL")							
        // 							, signdataFileNm:this.dsCntr.getColumn(0, "SIGNDATA_FILE_NM")
        // 						}
        // 			this.Div00.ubiviewerlib_setting(sArg);
        		 
        			// 6. 전자서명 프로세스 진행
        			var sign_data = this.dsReturn.getColumn(0, "SIGN_DATA");
        			
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
        						var sBizNo = this.gfn_replace(this.dsCntr.getColumn(0,"BIZ_NO"), "-", "");
        						getR = this.Plugin00.callMethod("GetRFromKey",userdn,sBizNo); 
        						//getR = this.Plugin00.callMethod("GetRFromKey",userdn,"1234567890"); 
        						if (getR == "")
        						{
        							alert("주민번호/사업자번호를 확인할 수 없는 인증서입니다.");
        							return;
        						}
        					}
        					if(!this.gfn_confirm("계약합의 하시겠습니까?")) return;
        					this.dsCntr.setColumn(0,"SIGN_DATA",signeddata);			
        					
        					var sSvcID = "SCntr_Agree";
        					var sController = "SCntr_Agree.do";
        					var sInDatasets = "in_cntr=dsCntr";
        					var sOutDatasets = "dsCntr=dsCntr";
        					var sCallbackFunc = "fn_trCallBack";

        					//FILE_JOB_2 :  트랜잭션 gfn_fileTran 으로 변경
        					this.gfn_fileTran(sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);			
        				}

        			// html5 
        			}else{
        				if( this.dsCntr.getColumn(0,"SIGN_ORGNL") == null || this.dsCntr.getColumn(0,"SIGN_ORGNL") == "" )
        				{
        					alert("서명할 데이타를 넣어주십시요");
        					return;
        				}
        				//this.WebBrowser01.callMethod("SignData",this.dsCntr.getColumn(0,"SIGN_ORGNL"),this.dsCntr.getColumn(0,"BIZ_NO"));		
        				
        				this.WebBrowser01.callMethod("SignData",sign_data,this.dsCntr.getColumn(0,"BIZ_NO"));		
        				
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
        		var array = [this.dsCntr.getColumn(this.dsCntr.rowposition, "CNTR_NO")];
        		this.div_21.Tab01.tabpages[this.div_21.Tab01.tabindex].fn_fileCompInit(this, "MM_CNTR", this.dsCntr, array, "Y"); //초기화 및 조회(필터링)
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
        			this.gfn_setTmprData("CNTR_NO"		, this.dsCntr.getColumn(0,"CNTR_NO"));
        			this.gfn_setTmprData("COREXP_KIDS"	, this.dsCntr.getColumn(0,"COREXP_KIDS"));
        			this.gfn_setTmprData("BRANCH_CD"	, this.dsCntr.getColumn(0,"BRANCH_CD"));
        			this.gfn_setTmprData("CD_CNTR_STTS"	, this.dsCntr.getColumn(0,"CD_CNTR_STTS"));
        			this.gfn_setTmprData("STATUS"		, "1");
        			this.gfn_openMenuUrl("SCNTR::PCTRS100N00.xfdl");
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
        			this.dsCntr.setColumn(0,"SIGN_DATA",this.gfn_replace(e.userdata,"▦",""))
        			
        			var sSvcID = "SCntr_Agree";
        			var sController = "SCntr_Agree.do";
        			var sInDatasets = "in_cntr=dsCntr";
        			var sOutDatasets = "dsCntr=dsCntr";
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
        				cntr_no:this.dsCntr.getColumn(0, "CNTR_NO")
        				,branch_cd:this.dsCntr.getColumn(0, "BRANCH_CD")
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
            this.dsCntr.addEventHandler("onrowposchanged", this.ds_tndr_onrowposchanged, this);
            this.dsCntrItem.addEventHandler("onrowposchanged", this.dsCntrItem_onrowposchanged, this);
            this.dsCntrItem.addEventHandler("oncolumnchanged", this.dsCntrItem_oncolumnchanged, this);
            this.dsCntrInsrnc.addEventHandler("oncolumnchanged", this.dsCntrInsrnc_oncolumnchanged, this);
            this.dsCntrPay.addEventHandler("oncolumnchanged", this.dsCntrPay_oncolumnchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("oninit", this.form_oninit, this);
            this.addEventHandler("ontimer", this.PCTRS100N00_ontimer, this);
            this.divViewCompCond00.btnCntrClo.addEventHandler("onclick", this.div_1_btn_CntrClo_onclick, this);
            this.divViewCompBody00.Tab01.addEventHandler("onchanged", this.div_21_Tab01_onchanged, this);
            this.divViewCompBody00.Tab01.tabp01.staTtl.addEventHandler("onclick", this.div_21_Tab01_tabp01_st_Ttl_onclick, this);
            this.divViewCompBody00.Tab01.tabp01.divViewCompTitle00.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompBody00.Tab01.tabp02.divViewCompTitle00.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompBody00.Tab01.tabp03.divViewCompTitle00.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompBody01.grdCntrItem.addEventHandler("onexpandup", this.div_31_grd_cntrItem_onexpandup, this);
            this.WebBrowser00.addEventHandler("onusernotify", this.WebBrowser00_onusernotify, this);
            this.WebBrowser01.addEventHandler("onusernotify", this.WebBrowser01_onusernotify, this);
            this.divViewCompTitle00.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompTitle01.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompTitle02.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompTitle03.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);

        };

        this.loadIncludeScript("SCntrDetail1.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
