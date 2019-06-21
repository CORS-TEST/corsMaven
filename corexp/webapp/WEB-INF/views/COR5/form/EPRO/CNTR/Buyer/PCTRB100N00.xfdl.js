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
                this.set_name("PCTRB100N00");
                this.set_titletext("계약서상세");
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
            obj._setContents("<ColumnInfo><Column id=\"BIZ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHRGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PYMT_CNDTN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PYMT_CNDTN\" type=\"STRING\" size=\"256\"/><Column id=\"LNK_CNTR_TTL\" type=\"STRING\" size=\"256\"/><Column id=\"PTNR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LNK_CNTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"TTL\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_ORGNL\" type=\"STRING\" size=\"256\"/><Column id=\"CRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CRNC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CRNC\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DOC_CTGR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DOC_CTGR\" type=\"STRING\" size=\"256\"/><Column id=\"TEL\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_REQR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_DATA\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_CHGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FAX\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CNTR_CTGR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CNTR_CTGR\" type=\"STRING\" size=\"256\"/><Column id=\"PTNR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RPRSTV_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_END_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"PTNR_CNTR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_CFM_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DFCT_GRNT_PRID\" type=\"STRING\" size=\"256\"/><Column id=\"RMARK\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CHRGR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_INTL_CFM\" type=\"STRING\" size=\"256\"/><Column id=\"VAT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CNTR_STTS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CNTR_STTS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CNTR_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CNTR_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_BGN_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"APP_DOC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CRT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_TMPL_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"AMT\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TKEY\" type=\"STRING\" size=\"256\"/><Column id=\"CRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_REQ_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"STR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_CHGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CD_FCTRY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_FCTRY\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_ITEM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CD_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTCH_FILE_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"INT_NTAX\" type=\"STRING\" size=\"256\"/><Column id=\"SL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PR_ITEM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RMARK\" type=\"STRING\" size=\"256\"/><Column id=\"VAT\" type=\"STRING\" size=\"256\"/><Column id=\"UNT_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"TNDR_ITEM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RFQ_REQ_ITEM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PO_ITEM_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cntrPay", this);
            obj._setContents("<ColumnInfo><Column id=\"CNTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RMARK\" type=\"STRING\" size=\"256\"/><Column id=\"PYMT_PLN_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"PYMT_RT\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_PAY_PLAN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"PYMT_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"PYMT_AMT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cntrInsrnc", this);
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GRNT_BGN_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"SIGNCNTNT\" type=\"STRING\" size=\"256\"/><Column id=\"CRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"GRNT_INSRNC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PCHRGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"GRNT_RT\" type=\"STRING\" size=\"256\"/><Column id=\"RJT_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_CHGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GRNT_STTS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GRNT_STTS\" type=\"STRING\" size=\"256\"/><Column id=\"PCHRGR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GRNT_REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"GRNT_END_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"GRNT_INSRNC_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_GRNT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ATTCH_FILE_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"GRNT_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GRNT_MTHD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GRNT_MTHD\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_CHG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_PAY_PLAN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"GRNT_CFM_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GRNT_INSRNC_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GRNT_INSRNC_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PYMT_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"CRT_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("ds_srchOpt", this);
            obj._setContents("<ColumnInfo><Column id=\"MTRL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cntrOrg", this);
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
            obj = new Tab("Tab01", "absolute", "0", "0", null, "189", "0", null, this.div_21);
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
            obj = new Static("sta_WFDA_Label05", "absolute", "0", "10", null, "132", "0", null, this.div_21.Tab01.tabp01);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("st_Ttl", "absolute", "0", "21", "117", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("13");
            obj.set_text("<fc v='red'>* </fc>계약명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("lbcd").set("");
            obj.set_usedecorate("true");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("st_ptnrNm", "absolute", "0", "50", "117", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("objNm").set("협력사");
            obj.set_text("<fc v='red'>* </fc>협력사");
            obj.getSetter("lbcd").set("");
            obj.set_usedecorate("true");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("ed_cntrDt", "absolute", "0", "108", "117", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("19");
            obj.set_text("<fc v='red'>* </fc>계약일자");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("objNm").set("계약일자");
            obj.getSetter("lbcd").set("");
            obj.set_usedecorate("true");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("ed_cntrType", "absolute", "0", "79", "117", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("17");
            obj.set_text("<fc v='red'>* </fc>계약유형");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("objNm").set("계약유형");
            obj.getSetter("lbcd").set("");
            obj.set_usedecorate("true");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("st_CrDt01", "absolute", "460", "50", "101", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("16");
            obj.set_text("<fc v='red'>* </fc>지급계정");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("objNm").set("지급조건");
            obj.set_usedecorate("true");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("st_RfqStates00", "absolute", "460", "79", "101", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("20");
            obj.set_text("하자보증기간");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("objNm").set("하자보증기간");
            obj.getSetter("lbcd").set("");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edt_ptnrId", "absolute", "117", "50", "99", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("54");
            obj.set_cssclass("edt_default");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("objNm").set("협력사코드");
            obj.set_readonly("true");
            obj.set_lengthunit("utf16");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edt_ptnrNm", "absolute", "218", "50", "242", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("2");
            obj.set_lengthunit("utf8");
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("협력사명");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Button("btn_ptnr", "absolute", "436", "50", "24", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("협력사 검색 버튼");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Div("div_crtDt", "absolute", "117", "108", "220", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("9");
            obj.set_text("Div01");
            obj.getSetter("objNm").set("계약일자");
            obj.set_url("commComp::commCalFromTo.xfdl");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Combo("cb_cdCntrType", "absolute", "1019", "21", "158", "24", null, null, this.div_21.Tab01.tabp01);
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_cdCT19");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("계약양식");
            obj.set_index("-1");
            obj = new MaskEdit("mae_cntrAmt", "absolute", "1019", "79", "158", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("8");
            obj.set_mask("9,999");
            obj.set_cssclass("mae_default_r");
            obj.style.set_color("blue");
            obj.style.set_font("bold 10 Dotum");
            obj.getSetter("objNm").set("공급가액");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Combo("cbo_cdCrnc", "absolute", "561", "108", "150", "24", null, null, this.div_21.Tab01.tabp01);
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("12");
            obj.set_innerdataset("ds_cdCM15");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("통화단위");
            obj = new Combo("cbo_cntrCtgr", "absolute", "117", "79", "220", "24", null, null, this.div_21.Tab01.tabp01);
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_cdCT11");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("계약유형");
            obj = new Static("st_cdCntrGubun", "absolute", "902", "21", "117", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("18");
            obj.set_text("<fc v='red'>* </fc>계약양식");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("objNm").set("계약양식");
            obj.getSetter("lbcd").set("");
            obj.set_usedecorate("true");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("st_cntrAmt", "absolute", "902", "79", "117", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("22");
            obj.set_text("공급가액");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("objNm").set("예산번호");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("st_cntrAmt00", "absolute", "481", "108", "80", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("68");
            obj.set_text("<fc v='red'>* </fc>통화단위");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("objNm").set("예산번호");
            obj.set_usedecorate("true");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("st_cntrAmt01", "absolute", "902", "108", "117", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("69");
            obj.set_text("부가세");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("objNm").set("예산번호");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new MaskEdit("mae_cntrAmt00", "absolute", "1019", "108", "158", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("70");
            obj.set_mask("9,999");
            obj.set_cssclass("mae_default_r");
            obj.style.set_color("blue");
            obj.style.set_font("bold 10 Dotum");
            obj.getSetter("objNm").set("부가세");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("st_cntrAmt02", "absolute", "902", "50", "117", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("71");
            obj.set_text("계약금액");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("objNm").set("예산번호");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new MaskEdit("mae_cntrSum", "absolute", "1019", "50", "158", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("72");
            obj.set_mask("9,999");
            obj.set_cssclass("mae_default_r");
            obj.style.set_color("blue");
            obj.style.set_font("bold 10 Dotum");
            obj.getSetter("objNm").set("계약금액");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Combo("cb_cdCntrCndtn", "absolute", "561", "50", "353", "24", null, null, this.div_21.Tab01.tabp01);
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_cdCM13");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("지급계정");
            obj.set_cssclass("cbo_default");
            obj = new Edit("edt_dfctGrntPrid", "absolute", "561", "79", "353", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("7");
            obj.set_lengthunit("utf8");
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("하자보증기간");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edt_Ttl", "absolute", "117", "21", "797", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("0");
            obj.getSetter("objNm").set("계약명");
            obj.set_lengthunit("utf8");
            obj.set_cssclass("edt_default");
            obj.set_maxlength("100");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Tabpage("tabp02", this.div_21.Tab01);
            obj.set_text("계약담당자");
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

            obj = new Div("div_3", "absolute", "0", "295", null, "24", "15", null, this);
            obj.set_taborder("2");
            obj.getSetter("objNm").set("DIV-품목 타이틀");
            this.addChild(obj.name, obj);
            obj = new Button("btn_opItem", "absolute", "0", "0", "73", "24", null, null, this.div_3);
            obj.set_taborder("34");
            obj.set_cssclass("btn_WF_DivClose");
            obj.getSetter("objNm").set("접기펼치기 버튼");
            obj.set_text("품목");
            obj.getSetter("lbcd").set("");
            this.div_3.addChild(obj.name, obj);
            obj = new Button("btn_Itm_Del", "absolute", null, "0", "60", "24", "2", null, this.div_3);
            obj.set_taborder("2");
            obj.set_text(" 삭제");
            obj.set_cssclass("btn_WF_Delete");
            obj.getSetter("objNm").set("품목삭제버튼");
            obj.getSetter("lbcd").set("");
            this.div_3.addChild(obj.name, obj);
            obj = new Button("btn_Itm_Add", "absolute", null, "0", "60", "24", "64", null, this.div_3);
            obj.set_taborder("1");
            obj.set_text(" 추가");
            obj.set_cssclass("btn_WF_Add");
            obj.getSetter("objNm").set("품목추가 버튼");
            obj.getSetter("lbcd").set("");
            this.div_3.addChild(obj.name, obj);
            obj = new Button("btn_mtrlAdd", "absolute", null, "0", "70", "24", "126", null, this.div_3);
            obj.set_taborder("35");
            obj.set_text("품목추가");
            obj.set_cssclass("btn_WF_Custom");
            obj.getSetter("objNm").set("품목추가 버튼");
            obj.getSetter("lbcd").set("");
            this.div_3.addChild(obj.name, obj);
            obj = new Static("sta_CrtrNm00", "absolute", null, "0", "117", "24", "392", null, this.div_3);
            obj.set_taborder("36");
            obj.set_text("납품요청일자");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("납품요청일자 Static");
            this.div_3.addChild(obj.name, obj);
            obj = new Calendar("Calendar00", "absolute", null, "0", "125", "24", "267", null, this.div_3);
            this.div_3.addChild(obj.name, obj);
            obj.set_taborder("37");
            obj.set_dateformat("yyyy.MM.dd ddd");
            obj.set_editformat("yyyy.MM.dd ddd");
            obj.getSetter("objNm").set("납품요청일자달력");
            obj = new Button("btn_Set_Day", "absolute", null, "0", "65", "24", "200", null, this.div_3);
            obj.set_taborder("38");
            obj.set_text("일괄적용");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("납품요청일자 일괄적용");
            this.div_3.addChild(obj.name, obj);

            obj = new Div("div_4", "absolute", "0", "693", null, "24", "15", null, this);
            obj.set_taborder("12");
            obj.getSetter("objNm").set("DIV-품목 상세-탭 헤더");
            this.addChild(obj.name, obj);
            obj = new Button("btn_opItemDetail", "absolute", "0%", "0", null, "24", "88.2%", null, this.div_4);
            obj.set_taborder("4");
            obj.set_text("품목 상세정보");
            obj.set_cssclass("btn_WF_DivClose");
            obj.getSetter("objNm").set("접기펼치기 버튼");
            this.div_4.addChild(obj.name, obj);

            obj = new Div("div_41", "absolute", "0", "727", null, "223", "15", null, this);
            obj.set_taborder("4");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("DIV-품목 상세 - 텝 입력");
            this.addChild(obj.name, obj);
            obj = new Tab("Tab01", "absolute", "0", "34", null, "189", "0%", null, this.div_41);
            obj.set_taborder("4");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.getSetter("objNm").set("입력탭");
            obj.set_visible("true");
            this.div_41.addChild(obj.name, obj);
            obj = new Tabpage("tabp01", this.div_41.Tab01);
            obj.set_text("상세데이터");
            obj.style.set_background("white");
            obj.set_scrollbars("none");
            obj.set_enable("true");
            this.div_41.Tab01.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label05", "absolute", "0%", "10", null, "103", "0%", null, this.div_41.Tab01.tabp01);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("sta_MtrlGrp", "absolute", "0", "21", "117", "24", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("29");
            obj.set_text("품목그룹");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("objNm").set("품목그룹");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("sta_MtrlCd", "absolute", "0", "50", "117", "24", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("33");
            obj.set_text("<fc v='red'>* </fc>품목코드");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_font("bold 10 malgun gothic");
            obj.set_usedecorate("true");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("sta_Price", "absolute", "368", "78", "117", "24", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_text("<fc v='red'>* </fc>단가");
            obj.set_usedecorate("true");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("sta_Amt", "absolute", "766", "78", "117", "24", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_text("금액");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new MaskEdit("mae_qty", "absolute", "117", "78", "157", "24", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("5");
            obj.set_cssclass("mae_default");
            obj.set_enable("true");
            obj.set_mask("9,999.###");
            obj.getSetter("objNm").set("수량");
            obj.set_autoselect("true");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edt_srcGrp", "absolute", "117", "21", "157", "24", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.getSetter("objNm").set("소싱그룹코드");
            obj.set_readonly("true");
            obj.set_cssclass("edt_default_r");
            obj.set_autoselect("true");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edt_srcGrpNm", "absolute", "275", "21", "492", "24", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("50");
            obj.set_enable("true");
            obj.getSetter("objNm").set("소싱그룹명");
            obj.set_readonly("true");
            obj.set_cssclass("edt_default_r");
            obj.style.setStyleValue("selectbackground", "disabled", "transparent");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edt_mtrlCd", "absolute", "117", "50", "157", "24", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.set_autoselect("true");
            obj.getSetter("objNm").set("품목코드");
            obj.set_cssclass("edt_default_r");
            obj.set_readonly("true");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edt_mtrlNm", "absolute", "275", "50", "492", "24", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("53");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.style.set_selectbackground("black");
            obj.getSetter("objNm").set("품목명");
            obj.set_cssclass("edt_default");
            obj.set_readonly("false");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Button("btn_mtrl", "absolute", "744", "50", "23", "24", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("자재검색버튼");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new MaskEdit("mae_untPrice", "absolute", "485", "78", "282", "24", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("7");
            obj.set_cssclass("mae_default");
            obj.set_mask("9,999.###");
            obj.getSetter("objNm").set("단가");
            obj.set_autoselect("true");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Combo("cbo_cdUnit", "absolute", "275", "78", "91", "24", null, null, this.div_41.Tab01.tabp01);
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_innerdataset("@ds_cdCM11");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("단위");
            obj.set_cssclass("cbo_default");
            obj = new MaskEdit("mae_amt", "absolute", "883", "78", "292", "24", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("8");
            obj.set_mask(",");
            obj.set_cssclass("mae_default");
            obj.set_readonly("true");
            obj.getSetter("objNm").set("금액");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("sta_QtyUnit", "absolute", "0", "78", "117", "24", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("62");
            obj.set_text("<fc v='red'>* </fc>수량/단위");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_usedecorate("true");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("sta_Fctry00", "absolute", "766", "50", "117", "24", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("63");
            obj.set_text("납품요청일자");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Calendar("cal_dlvReqDay", "absolute", "883", "50", "125", "24", null, null, this.div_41.Tab01.tabp01);
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("64");
            obj.set_dateformat("yyyy.MM.dd");
            obj.set_editformat("yyyy.MM.dd");
            obj.set_value("null");
            obj.getSetter("objNm").set("상세 납품요청일자");
            obj = new Tabpage("tabp04", this.div_41.Tab01);
            obj.set_text("비고");
            this.div_41.Tab01.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label05", "absolute", "0%", "10", null, "97", "0%", null, this.div_41.Tab01.tabp04);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_41.Tab01.tabp04.addChild(obj.name, obj);
            obj = new Static("st_ItemTxt", "absolute", "0", "10", "117", "97", null, null, this.div_41.Tab01.tabp04);
            obj.set_taborder("0");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_41.Tab01.tabp04.addChild(obj.name, obj);
            obj = new TextArea("ta_rmark", "absolute", "119", "14", "1080", "89", null, null, this.div_41.Tab01.tabp04);
            obj.set_taborder("1");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("비고");
            this.div_41.Tab01.tabp04.addChild(obj.name, obj);
            obj = new Edit("edt_itemNo", "absolute", "0", "0", "100", "24", null, null, this.div_41);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_cssclass("input_point");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("objNm").set("품목코드");
            this.div_41.addChild(obj.name, obj);
            obj = new Combo("cbo_itemChg", "absolute", "101", "0", "623", "24", null, null, this.div_41);
            this.div_41.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_innerdataset("@ds_cntrItem");
            obj.set_codecolumn("ITM_NO");
            obj.set_datacolumn("MTRL_NM");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("계약품목변경");
            obj = new Button("btn_cntrItemRowDown", "absolute", "749", "1", "26", "24", null, null, this.div_41);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_ListDown");
            obj.getSetter("objNm").set("Down");
            this.div_41.addChild(obj.name, obj);
            obj = new Button("btn_cntrItemRowUp", "absolute", "726", "1", "24", "24", null, null, this.div_41);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_ListUp");
            obj.getSetter("objNm").set("Up");
            this.div_41.addChild(obj.name, obj);

            obj = new Div("div_5", "absolute", "0", "957", null, "24", "15", null, this);
            obj.set_taborder("5");
            obj.getSetter("objNm").set("DIV-대상업체");
            this.addChild(obj.name, obj);
            obj = new Button("btn_oPItem", "absolute", "0", "0", "185", "24", null, null, this.div_5);
            obj.set_taborder("53");
            obj.set_text("지급계획");
            obj.set_cssclass("btn_WF_DivClose");
            obj.getSetter("objNm").set("접기펼치기 버튼");
            obj.getSetter("lbcd").set("");
            this.div_5.addChild(obj.name, obj);
            obj = new Button("btn_PayItm_Del", "absolute", null, "0", "60", "24", "2", null, this.div_5);
            obj.set_taborder("1");
            obj.set_text(" 삭제");
            obj.set_cssclass("btn_WF_Delete");
            obj.getSetter("objNm").set("품목삭제버튼");
            obj.getSetter("lbcd").set("");
            this.div_5.addChild(obj.name, obj);
            obj = new Button("btn_PayItm_Add", "absolute", null, "0", "60", "24", "64", null, this.div_5);
            obj.set_taborder("0");
            obj.set_text(" 추가");
            obj.set_cssclass("btn_WF_Add");
            obj.getSetter("objNm").set("품목추가 버튼");
            obj.getSetter("lbcd").set("");
            this.div_5.addChild(obj.name, obj);

            obj = new Div("div_51", "absolute", "0", "985", null, "128", "15", null, this);
            obj.set_taborder("6");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("DIV-대상업체 상세");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_cntrPay", "absolute", "0%", "0", null, null, "0%", "0", this.div_51);
            obj.set_taborder("0");
            obj.set_binddataset("ds_cntrPay");
            obj.getSetter("objNm").set("지급계획 그리드");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"MMODE\"><Columns><Column size=\"35\" band=\"left\"/><Column size=\"86\"/><Column size=\"121\"/><Column size=\"120\"/><Column size=\"500\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" displaytype=\"decoratetext\" text=\"회차\"/><Cell col=\"2\" text=\"지급율\"/><Cell col=\"3\" text=\"지급금액\"/><Cell col=\"4\" text=\"지급조건\"/></Band><Band id=\"body\" style=\"cellpadding:2 2 2 2 ;\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"background2: ;\" text=\"bind:CHECKED\" editdisplay=\"display\" expandshow=\"hide\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" style=\"align: ;\" text=\"bind:PYMT_ORDR\" editautoselect=\"true\" editdisplay=\"edit\"/><Cell col=\"2\" celltype=\"none\" displaytype=\"number\" edittype=\"mask\" editfilter=\"number\" style=\"align:right;\" text=\"bind:PYMT_RT\" mask=\"###\" maskchar=\" \" editlimit=\"-1\" editautoselect=\"true\" editdisplay=\"edit\" suppress=\"0\" autosizecol=\"default\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right;padding: ;\" text=\"bind:PYMT_AMT\" mask=\"#,##0.00\" editautoselect=\"true\" editdisplay=\"edit\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:RMARK\" editlimit=\"200\" editautoselect=\"true\" editdisplay=\"edit\"/></Band></Format><Format id=\"VMODE\"><Columns><Column size=\"86\"/><Column size=\"121\"/><Column size=\"120\"/><Column size=\"500\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" text=\"회차\"/><Cell col=\"1\" text=\"지급율\"/><Cell col=\"2\" text=\"지급금액\"/><Cell col=\"3\" text=\"지급조건\"/></Band><Band id=\"body\" style=\"cellpadding:2 2 2 2 ;\"><Cell displaytype=\"normal\" edittype=\"none\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:PYMT_ORDR\" editdisplay=\"edit\"/><Cell col=\"1\" celltype=\"none\" displaytype=\"normal\" edittype=\"none\" editfilter=\"number\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:PYMT_RT\" mask=\"###\" maskchar=\" \" editlimit=\"-1\" editautoselect=\"false\" editdisplay=\"edit\" suppress=\"0\" autosizecol=\"default\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:PYMT_AMT\" mask=\"9,999.###\" maskchar=\" \" editautoselect=\"true\" editdisplay=\"edit\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:RMARK\" editdisplay=\"edit\"/></Band></Format></Formats>");
            this.div_51.addChild(obj.name, obj);

            obj = new Div("div_31", "absolute", "0", "323", null, "363", "15", null, this);
            obj.set_taborder("3");
            obj.getSetter("objNm").set("DIV-품목 상세");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_cntrItem", "absolute", "0", "0", null, null, "0", "36", this.div_31);
            obj.set_taborder("2");
            obj.getSetter("objNm").set("품목 그리드");
            obj.set_binddataset("ds_cntrItem");
            obj.getSetter("f_filter").set("N");
            obj.getSetter("f_excel").set("Y");
            obj.getSetter("f_hide").set("N");
            obj.getSetter("f_find").set("N");
            obj.getSetter("f_sort").set("N");
            obj.getSetter("f_fix").set("Y");
            obj.getSetter("f_height").set("Y");
            obj.getSetter("f_save").set("N");
            obj.getSetter("f_mode").set("Y");
            obj.getSetter("f_init").set("Y");
            obj.getSetter("f_colSize").set("N");
            obj.set_autoenter("select");
            obj.set_cellmovingtype("col");
            obj.set_createcellasync("true");
            obj._setContents("<Formats><Format id=\"MMODE\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"300\"/><Column size=\"70\"/><Column size=\"55\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"95\"/><Column size=\"339\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;품목명\"/><Cell col=\"2\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;수량\"/><Cell col=\"3\" text=\"단위\"/><Cell col=\"4\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;단가\"/><Cell col=\"5\" text=\"공급가\"/><Cell col=\"6\" text=\"부가세\"/><Cell col=\"7\" text=\"비고\"/></Band><Band id=\"body\" style=\"cellpadding:2 2 2 2 ;\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:CHECKED\" editdisplay=\"display\" expandshow=\"hide\"/><Cell col=\"1\" edittype=\"expr:PR_ITEM_ID != '' || RFQ_REQ_ITEM_ID != '' || TNDR_ITEM_ID != '' || PO_ITEM_ID != '' ? 'none' : 'text'\" style=\"align:left;background:EXPR(PR_ITEM_ID != '' || RFQ_REQ_ITEM_ID != '' || TNDR_ITEM_ID != '' || PO_ITEM_ID != '' ? '#f5f5f5ff' : '');background2:EXPR(PR_ITEM_ID != '' || RFQ_REQ_ITEM_ID != '' || TNDR_ITEM_ID != '' || PO_ITEM_ID != '' ? '#f5f5f5ff' : '');\" text=\"bind:MTRL_NM\" editautoselect=\"true\" editdisplay=\"edit\" expandshow=\"show\" expandsize=\"24\" expandimage=\"expr:PR_ITEM_ID != '' || RFQ_REQ_ITEM_ID != '' || TNDR_ITEM_ID != '' || PO_ITEM_ID != '' ? '' : 'img::grd_WF_Expand.png'\" calendardisplay=\"edit\" tooltiptext=\"bind:MTRL_NM\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"expr:PR_ITEM_ID != '' || RFQ_REQ_ITEM_ID != '' || TNDR_ITEM_ID != '' || PO_ITEM_ID != '' ? 'none' : 'masknumber'\" style=\"align:right;background:EXPR(PR_ITEM_ID != '' || RFQ_REQ_ITEM_ID != '' || TNDR_ITEM_ID != '' || PO_ITEM_ID != '' ? '#f5f5f5ff' : '');background2:EXPR(PR_ITEM_ID != '' || RFQ_REQ_ITEM_ID != '' || TNDR_ITEM_ID != '' || PO_ITEM_ID != '' ? '#f5f5f5ff' : '');\" text=\"bind:QTY\" mask=\"#,##0.00\" editautoselect=\"true\" editdisplay=\"edit\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"expr:PR_ITEM_ID != '' || RFQ_REQ_ITEM_ID != '' || TNDR_ITEM_ID != '' || PO_ITEM_ID != '' ? 'none' : 'combo'\" style=\"background:EXPR(PR_ITEM_ID != '' || RFQ_REQ_ITEM_ID != '' || TNDR_ITEM_ID != '' || PO_ITEM_ID != '' ? '#f5f5f5ff' : '');background2:EXPR(PR_ITEM_ID != '' || RFQ_REQ_ITEM_ID != '' || TNDR_ITEM_ID != '' || PO_ITEM_ID != '' ? '#f5f5f5ff' : '');\" text=\"bind:CD_UNIT\" editautoselect=\"true\" combodataset=\"ds_cdCM11\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" combodisplay=\"edit\" calendardisplay=\"edit\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;padding: ;\" text=\"bind:UNT_PRICE\" mask=\"#,##0.00\" editclipmode=\"includespace\" editautoselect=\"true\" editdisplay=\"edit\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:AMT\" mask=\"#,##0\" editautoselect=\"true\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:VAT\" mask=\"#,##0\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:RMARK\" editlimit=\"200\" editautoselect=\"true\" editdisplay=\"edit\"/></Band></Format><Format id=\"VMODE\"><Columns><Column size=\"300\"/><Column size=\"70\"/><Column size=\"55\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"373\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" text=\"품목명\"/><Cell col=\"1\" displaytype=\"normal\" text=\"수량\"/><Cell col=\"2\" text=\"단위\"/><Cell col=\"3\" displaytype=\"normal\" text=\"단가\"/><Cell col=\"4\" text=\"공급가\"/><Cell col=\"5\" text=\"부가세\"/><Cell col=\"6\" text=\"비고\"/></Band><Band id=\"body\" style=\"cellpadding:2 2 2 2 ;\"><Cell edittype=\"none\" style=\"align:left;background2: ;\" cssclass=\"cell_link\" text=\"bind:MTRL_NM\" editdisplay=\"edit\" expandshow=\"hide\" calendardisplay=\"edit\" tooltiptext=\"bind:MTRL_NM\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background2: ;\" text=\"bind:QTY\" mask=\"#,##0.00\" editautoselect=\"true\" editdisplay=\"edit\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" style=\"background2: ;\" text=\"bind:CD_UNIT_NM\" combodisplay=\"edit\" calendardisplay=\"edit\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background2: ;\" text=\"bind:UNT_PRICE\" mask=\"#,##0.00\" editclipmode=\"includespace\" editautoselect=\"false\" editdisplay=\"edit\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background2: ;\" text=\"bind:AMT\" mask=\"#,##0\" editautoselect=\"true\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:VAT\" mask=\"#,##0\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" style=\"align:left;background: ;\" text=\"bind:RMARK\" editlimit=\"200\" editdisplay=\"edit\"/></Band></Format></Formats>");
            this.div_31.addChild(obj.name, obj);
            obj = new Div("div_gridCommBtn", "absolute", "0", null, null, "28", "0", "10", this.div_31);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.getSetter("objNm").set("그리드 버튼");
            obj.set_url("commComp::commGrdBtns.xfdl");
            this.div_31.addChild(obj.name, obj);

            obj = new Div("div_61", "absolute", "0", "1151", null, "182", "15", null, this);
            obj.set_taborder("8");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("DIV-대상업체 상세");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_insrncItem", "absolute", "0%", "0", null, null, "0%", "0", this.div_61);
            obj.set_taborder("0");
            obj.set_binddataset("ds_cntrInsrnc");
            obj.set_autofittype("col");
            obj.getSetter("objNm").set("이행보증 그리드");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"MMODE\"><Columns><Column size=\"43\"/><Column size=\"87\"/><Column size=\"161\"/><Column size=\"185\"/><Column size=\"163\"/><Column size=\"400\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" displaytype=\"decoratetext\" text=\"회차\"/><Cell col=\"2\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;이행보증구분\"/><Cell col=\"3\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;보증유형\"/><Cell col=\"4\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;보증금율\"/><Cell col=\"5\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;보증금액\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\" editautoselect=\"true\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:PYMT_ORDR\" editautoselect=\"true\" combodataset=\"ds_cntrPay\" combocodecol=\"PYMT_ORDR\" combodatacol=\"PYMT_ORDR\" combodisplay=\"edit\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:CD_GRNT_INSRNC_TYPE\" editautoselect=\"true\" combodataset=\"ds_cdCT16\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" combodisplay=\"edit\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:CD_GRNT_MTHD\" editautoselect=\"true\" combodataset=\"ds_cdCT15\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" combodisplay=\"edit\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"mask\" style=\"align:right;\" text=\"bind:GRNT_RT\" mask=\"###\" maskchar=\" \" editautoselect=\"true\" editdisplay=\"edit\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:GRNT_AMT\" mask=\"#,##0.00\" editautoselect=\"true\" editdisplay=\"edit\"/></Band></Format><Format id=\"VMODE\"><Columns><Column size=\"115\"/><Column size=\"187\"/><Column size=\"304\"/><Column size=\"306\"/><Column size=\"292\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" text=\"회차\"/><Cell col=\"1\" text=\"이행보증구분\"/><Cell col=\"2\" text=\"보증유형\"/><Cell col=\"3\" text=\"보증금율\"/><Cell col=\"4\" text=\"보증금액\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:PYMT_ORDR\" combodisplay=\"edit\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:CD_GRNT_INSRNC_TYPE_NM\" combodisplay=\"edit\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:CD_GRNT_MTHD_NM\" combodisplay=\"edit\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:GRNT_RT\" mask=\"9,999.###\" maskchar=\" \" editdisplay=\"edit\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:GRNT_AMT\" mask=\"9,999.###\" maskchar=\" \" editdisplay=\"edit\"/></Band></Format></Formats>");
            this.div_61.addChild(obj.name, obj);

            obj = new Div("div_6", "absolute", "0", "1123", null, "24", "15", null, this);
            obj.set_taborder("7");
            obj.getSetter("objNm").set("DIV-대상업체");
            this.addChild(obj.name, obj);
            obj = new Button("btn_oPItem", "absolute", "0", "0", "185", "24", null, null, this.div_6);
            obj.set_taborder("2");
            obj.set_text("이행보증");
            obj.set_cssclass("btn_WF_DivClose");
            obj.getSetter("objNm").set("접기펼치기 버튼");
            obj.getSetter("lbcd").set("");
            this.div_6.addChild(obj.name, obj);
            obj = new Button("btn_Insrnc_Add", "absolute", null, "0", "60", "24", "64", null, this.div_6);
            obj.set_taborder("0");
            obj.set_text(" 추가");
            obj.set_cssclass("btn_WF_Add");
            obj.getSetter("objNm").set("품목추가 버튼");
            obj.getSetter("lbcd").set("");
            this.div_6.addChild(obj.name, obj);
            obj = new Button("btn_Insrnc_Del", "absolute", null, "0", "60", "24", "2", null, this.div_6);
            obj.set_taborder("1");
            obj.set_text(" 삭제");
            obj.set_cssclass("btn_WF_Delete");
            obj.getSetter("objNm").set("품목삭제버튼");
            obj.getSetter("lbcd").set("");
            this.div_6.addChild(obj.name, obj);

            obj = new Div("div_7", "absolute", "0", "1343", null, "24", "15", null, this);
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

            obj = new Div("div_71", "absolute", "0", "1372", null, "560", "15", null, this);
            obj.set_taborder("10");
            obj.set_text("div_71");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new WebBrowser("wb_daumEditor", "absolute", "0", "0", null, null, "0", "10", this.div_71);
            obj.set_taborder("0");
            this.div_71.addChild(obj.name, obj);
            obj = new WebBrowser("WebBrowser00", "absolute", "0", "0", null, null, "0", "10", this.div_71);
            obj.set_taborder("1");
            obj.set_visible("false");
            this.div_71.addChild(obj.name, obj);

            obj = new Div("div_1", "absolute", "0", "0", null, "45", "15", null, this);
            obj.set_taborder("0");
            obj.getSetter("objNm").set("컨트롤 박스");
            obj.set_cssclass("div_WF_SearchBg3");
            this.addChild(obj.name, obj);
            obj = new Button("btn_CntrApv", "absolute", null, "10", "70", "24", "11", null, this.div_1);
            obj.set_taborder("3");
            obj.set_text("계약품의");
            obj.set_cssclass("btn_WF_SearchBtn");
            obj.getSetter("objNm").set("계약품의");
            obj.set_visible("false");
            this.div_1.addChild(obj.name, obj);
            obj = new Edit("mae_docNo", "absolute", "201", "10", "278", "24", null, null, this.div_1);
            obj.set_taborder("1");
            obj.getSetter("objNm").set("문서번호");
            obj.set_cssclass("input_point");
            obj.set_readonly("true");
            this.div_1.addChild(obj.name, obj);
            obj = new Button("btn_CntrReq", "absolute", null, "10", "70", "24", "315", null, this.div_1);
            obj.set_taborder("2");
            obj.set_text("계약요청");
            obj.set_cssclass("btn_WF_SearchBtn");
            obj.getSetter("objNm").set("계약요청");
            obj.set_visible("false");
            this.div_1.addChild(obj.name, obj);
            obj = new Combo("cb_cdDocCtgr", "absolute", "22", "10", "176", "24", null, null, this.div_1);
            this.div_1.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_cdCM10");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("문서유형");
            obj = new Button("btn_intlCfm", "absolute", null, "10", "70", "24", "243", null, this.div_1);
            obj.set_taborder("4");
            obj.set_text("내부확정");
            obj.set_cssclass("btn_WF_SearchBtn");
            obj.getSetter("objNm").set("내부확정");
            obj.set_visible("false");
            this.div_1.addChild(obj.name, obj);
            obj = new Button("btn_CntrApv00", "absolute", null, "10", "70", "24", "83", null, this.div_1);
            obj.set_taborder("5");
            obj.set_text("결재작성중");
            obj.set_cssclass("btn_WF_SearchBtn");
            obj.getSetter("objNm").set("계약품의");
            obj.set_visible("false");
            this.div_1.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "55.11%", "10", null, "24", "39.07%", null, this.div_1);
            obj.set_taborder("6");
            obj.set_text("내부결재");
            obj.set_visible("false");
            this.div_1.addChild(obj.name, obj);
            obj = new Button("btn_CntrApv01", "absolute", null, "10", "85", "24", "155", null, this.div_1);
            obj.set_taborder("7");
            obj.set_text("품의문서보기");
            obj.set_cssclass("btn_WF_SearchBtn");
            obj.set_visible("false");
            obj.getSetter("objNm").set("계약품의");
            this.div_1.addChild(obj.name, obj);
            obj = new Button("btn_CntrMailSend", "absolute", null, "10", "70", "24", "387", null, this.div_1);
            obj.set_taborder("8");
            obj.set_text("계약회람");
            obj.set_cssclass("btn_WF_SearchBtn");
            obj.getSetter("objNm").set("계약회람");
            obj.set_visible("false");
            this.div_1.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00", "absolute", "1275", "236", "315", "303", null, null, this);
            obj.set_taborder("13");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_cntrStates", "absolute", "886", "77", "117", "24", null, null, this);
            obj.set_taborder("14");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("lbcd").set("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_cdCntrStts", "absolute", "1003", "77", "150", "24", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_readonly("true");
            obj.set_innerdataset("ds_cdCT10");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_cssclass("cbo_default_r");
            obj.getSetter("objNm").set("계약상태");
            obj.set_visible("false");

            obj = new Button("btn_CntrCxl", "absolute", null, "32", "70", "24", "-116", null, this);
            obj.set_taborder("16");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_SearchBtn");
            obj.getSetter("objNm").set("취소");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "1275", "104", "147", "89", null, null, this);
            obj.set_taborder("17");
            obj.set_text("Div00");
            obj.set_visible("false");
            obj.set_url("CTRS::UbiViewerLib_HTML.xfdl");
            this.addChild(obj.name, obj);


            
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
            		p.set_text("계약담당자");

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
            obj = new Layout("default", "", 993, 139, this.div_4,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("12");
            		p.getSetter("objNm").set("DIV-품목 상세-탭 헤더");

            	}
            );
            this.div_4.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_41.Tab01.tabp01,
            	//-- Layout function
            	function(p) {
            		p.set_text("상세데이터");
            		p.style.set_background("white");
            		p.set_scrollbars("none");
            		p.set_enable("true");

            	}
            );
            this.div_41.Tab01.tabp01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_41.Tab01.tabp04,
            	//-- Layout function
            	function(p) {
            		p.set_text("비고");

            	}
            );
            this.div_41.Tab01.tabp04.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 223, this.div_41,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_scrollbars("none");
            		p.getSetter("objNm").set("DIV-품목 상세 - 텝 입력");

            	}
            );
            this.div_41.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.div_5,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.getSetter("objNm").set("DIV-대상업체");

            	}
            );
            this.div_5.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 128, this.div_51,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.set_scrollbars("none");
            		p.getSetter("objNm").set("DIV-대상업체 상세");

            	}
            );
            this.div_51.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 363, this.div_31,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.getSetter("objNm").set("DIV-품목 상세");

            	}
            );
            this.div_31.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1042, 164, this.div_61,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("8");
            		p.set_scrollbars("none");
            		p.getSetter("objNm").set("DIV-대상업체 상세");

            	}
            );
            this.div_61.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.div_6,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("7");
            		p.getSetter("objNm").set("DIV-대상업체");

            	}
            );
            this.div_6.addLayout(obj.name, obj);

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
            		p.set_titletext("계약서상세");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div_21.Tab01.tabp01.edt_Ttl","value","ds_cntr","TTL");
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
            obj = new BindItem("item8","div_21.Tab01.tabp01.mae_cntrAmt","value","ds_cntr","CNTR_AMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","div_21.Tab01.tabp01.cbo_cdCrnc","value","ds_cntr","CD_CRNC");
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
            obj = new BindItem("item20","div_41.Tab01.tabp01.edt_srcGrp","value","ds_cntrItem","MTRL_GRP_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","div_41.Tab01.tabp01.edt_srcGrpNm","value","ds_cntrItem","MTRL_GRP_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","div_41.Tab01.tabp01.edt_mtrlCd","value","ds_cntrItem","MTRL_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","div_41.Tab01.tabp01.edt_mtrlNm","value","ds_cntrItem","MTRL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","div_41.Tab01.tabp01.mae_qty","value","ds_cntrItem","QTY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","div_41.Tab01.tabp01.cbo_cdUnit","value","ds_cntrItem","CD_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","div_41.Tab01.tabp01.mae_untPrice","value","ds_cntrItem","UNT_PRICE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","div_41.Tab01.tabp01.mae_amt","value","ds_cntrItem","AMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","div_41.Tab01.tabp04.ta_rmark","value","ds_cntrItem","RMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","div_21.Tab01.tabp01.cb_cdCntrCndtn","value","ds_cntr","CD_PYMT_CNDTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","div_21.Tab01.tabp01.edt_dfctGrntPrid","value","ds_cntr","DFCT_GRNT_PRID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","div_41.edt_itemNo","value","ds_cntrItem","ITM_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","div_41.cbo_itemChg","text","ds_cntrItem","MTRL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","div_1.cb_cdDocCtgr","value","ds_cntr","CD_DOC_CTGR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","div_21.Tab01.tabp01.cbo_cntrCtgr","value","ds_cntr","CD_CNTR_CTGR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","div_41.Tab01.tabp01.cal_dlvReqDay","value","ds_cntrItem","DLV_REQ_DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","div_21.Tab01.tabp01.mae_cntRVat","value","ds_cntr","CNTR_AMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","cbo_cdCntrStts","value","ds_cntr","CD_CNTR_STTS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","div_21.Tab01.tabp01.mae_cntrSum","value","ds_cntr","CNTR_SUM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","div_21.Tab01.tabp01.mae_cntrAmt00","value","ds_cntr","VAT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","div_3.Calendar00","value","ds_cntr","CNTR_REQ_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "commComp::commCalFromTo.xfdl");
            this._addPreloadList("fdl", "commComp::commFileUpDown.xfdl");
            this._addPreloadList("fdl", "commComp::commGrdBtns.xfdl");
            this._addPreloadList("fdl", "CTRS::UbiViewerLib_HTML.xfdl");
        };
        
        // User Script
        this.addIncludeScript("PCTRB100N00.xfdl", "lib::lib_all.xjs");
        this.registerScript("PCTRB100N00.xfdl", function(exports) {
        /**
           @file       PCTRB100N00.xfdl
           @desc       계약서상세
           @author     김민성
           @makedate   2016.04.08
           @history    
        */
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::lib_all.xjs", null, exports); }	//include "lib::lib_all.xjs";

        /**
        	@var  this.fv_cntrNo
        	@desc 전역변수
        */
        this.fv_cntrNo = "";	
        this.fv_reloadCnt = true;
        this.fv_print = false;

        /**
        	@function	form_oninit()
        	@desc   	폼 oninit이벤트
        */
        this.form_oninit = function(obj,e)
        {	
        	this.fn_setCode();	
        }

        this.fn_setCode = function(){
        	
        	//콤보박스 생성시 S:선택, A:전체
        	var param = [
        					{code:"CM13", sSelectType:"S"}  // 지급조건
        					,{code:"CM10", sSelectType:"S"} // 문서유형
        					,{code:"CM11", sSelectType:"S"} // 단위
        					,{code:"CT10", sSelectType:"S"} // 계약상태
        					,{code:"CT11", sSelectType:"S",sFiltered:"&& CD_ID != 'CT11GEN'"} // 계약유형
        					,{code:"CT19", sSelectType:"S"} // 계약구분
        					,{code:"CM15", sSelectType:"S"} // 통화
        					,{code:"CT15", sSelectType:"S"} // 보증유형		
        					,{code:"CT16", sSelectType:"S"} // 보증보험유형
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
        	this.div_1.btn_CntrReq.set_right(11);
        	this.parent.div_commBtns.btn_commPrint.set_visible(false);
        	this.div_31.div_gridCommBtn.fn_initGridInfo(obj, this.div_31.grd_cntrItem);
        	
        	//그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기
        	this.gfn_setGrdFunc(this.div_31.grd_cntrItem);
        	this.gfn_setGrdFunc(this.div_51.grd_cntrPay);
        	this.gfn_setGrdFunc(this.div_61.grd_insrncItem);
        	
        	// 달력 데이터셋과 매핑
        	this.div_21.Tab01.tabp01.div_crtDt.fn_setDate(this.ds_cntr, "CNTR_BGN_DAY", "CNTR_END_DAY");

        	//이전화면에서 넘어오는 파라미터를 받는다.
        	this.fv_cntrNo = this.gfn_getTmprData("CNTR_NO");
        	var fv_cdCntrStts = this.gfn_getTmprData("CD_CNTR_STTS");
        	var fv_prReqCntrYn = this.gfn_getTmprData("PR_REQ_CNTR_YN");
        	var fv_prReqCntrData = this.gfn_getTmprData("PR_REQ_CNTR_DATA");
        	
        	//파라미터를 받은 이후에는 파라미터를 를 초기화 해준다.
        	this.gfn_clearTmprData(); 

        	this.ds_cntr.addRow();
        	this.ds_cntr.setColumn(0,"CNTR_REQ_DT",this.gfn_today());
        	
        	//파라미터가 존재하면 조회 
        	if("" != this.fv_cntrNo){
        		this.ds_cntr.setColumn(0,"CNTR_NO",this.fv_cntrNo);
        		this.WebBrowser00.set_url(application.services["svcurl"].url+"CAppTransaction.jsp");
        		this.fn_search();
        	}else if(fv_prReqCntrYn == "Y"){
        		// 구매요청에서 받아온 데이터를 계약서 양식에 맞춰 세팅.
        		this.fn_setCntrFromPr(fv_prReqCntrData);
        	}else{
        		this.parent.div_commBtns.btn_comDel.set_visible(false); // 삭제버튼
        		this.gfn_btnRange(this.parent.div_commBtns.btn_commSave);
        		this.gfn_popupComDocType();
        		//신규 작성 시 파일내부의 Dataset을 초기화 시켜준다.
        		this.ds_cntr.setColumn(0,"CHRGR_ID",application.gds_userInfo.getColumn(0, "USER_ID"));
        		this.ds_cntr.setColumn(0,"CHRGR_NM",application.gds_userInfo.getColumn(0, "USER_NM"));
        		this.ds_cntr.setColumn(0,"TEL",application.gds_userInfo.getColumn(0, "TEL"));
        		this.ds_cntr.setColumn(0,"EMAIL",application.gds_userInfo.getColumn(0, "EMAIL"));
        		this.ds_cntr.setColumn(0,"FAX",application.gds_userInfo.getColumn(0, "FAX"));
        		this.ds_cntr.setColumn(0,"CD_CNTR_CNDTN", "CM13C01"); 								// 지급조건
        		this.ds_cntr.setColumn(0,"CD_CNTR_STTS","CT10WRI"); 								// 계약상태
        		this.ds_cntr.setColumn(0,"CD_CNTR_TYPE",""); 										// 계약조건
        		this.ds_cntr.setColumn(0,"CD_CNTR_CTGR",""); 										// 계약유형
        		this.ds_cntr.setColumn(0,"CD_PYMT_CNDTN",""); 										// 지급조건
        		this.ds_cntr.setColumn(0,"CD_CRNC",""); 											// 계약금액단위
        		this.ds_cntr.setColumn(0,"CNTR_SUM",0);
        		this.ds_cntr.setColumn(0,"CNTR_AMT",0);
        		this.ds_cntr.setColumn(0,"VAT",0);
         		this.gfn_newFileDsInit(this.ds_cntr,this.ds_cntrItem);
         		this.div_71.wb_daumEditor.set_url(application.services["svcurl"].url+"daumeditor/editor.jsp");
        	}
        	trace(application.services["svcurl"].url);
        	//FILE_JOB_1 : 데이터 조회 이후에 파일 정보를 조회하기 위해 동기화 한다.
        	this.gfn_fileCompInit(this.div_21.Tab01.tabp04);

        }

        this.fn_setCntrFromPr = function(rtn)
        {
        	this.parent.div_commBtns.btn_comDel.set_visible(false); // 삭제버튼
        			
        	this.gfn_btnRange(this.parent.div_commBtns.btn_commSave);
        	
        	this.ds_return.loadXML(rtn);
        	
        	//신규 작성 시 파일내부의 Dataset을 초기화 시켜준다.
        	this.ds_cntr.setColumn(0,"CHRGR_ID",application.gds_userInfo.getColumn(0, "USER_ID"));
        	this.ds_cntr.setColumn(0,"CHRGR_NM",application.gds_userInfo.getColumn(0, "USER_NM"));
        	this.ds_cntr.setColumn(0,"TEL",application.gds_userInfo.getColumn(0, "TEL"));
        	this.ds_cntr.setColumn(0,"EMAIL",application.gds_userInfo.getColumn(0, "EMAIL"));
        	this.ds_cntr.setColumn(0,"FAX",application.gds_userInfo.getColumn(0, "FAX"));
        	this.ds_cntr.setColumn(0,"CD_CNTR_CNDTN", "CM13C01"); 										// 지급조건
        	this.ds_cntr.setColumn(0,"CD_CNTR_STTS","CT10WRI"); 										// 계약상태
        	this.ds_cntr.setColumn(0,"CD_CNTR_TYPE",""); 												// 계약조건
        	this.ds_cntr.setColumn(0,"CD_CNTR_CTGR",""); 												// 계약유형
        	this.ds_cntr.setColumn(0,"CD_PYMT_CNDTN",""); 												// 지급조건
        	this.ds_cntr.setColumn(0,"CD_CRNC",""); 													// 계약금액단위
        	this.ds_cntr.setColumn(0,"CD_DOC_CTGR",this.ds_return.getColumn(0,"CD_DOC_CTGR"));			// 문서유형
        	this.ds_cntr.setColumn(0,"CNTR_SUM",0);
        	this.ds_cntr.setColumn(0,"CNTR_AMT",0);
        	this.ds_cntr.setColumn(0,"VAT",0);
        	
        	
        	var ttl = this.ds_return.getColumn(0,"MTRL_NM");
        	if(ttl.indexOf("【") != -1){
        		ttl = ttl.substring(0,ttl.indexOf("【"));
        	}
        	
        	if(this.ds_return.rowcount>1){
        		ttl += " 외 "+(this.ds_return.rowcount-1)+"건";
        	}
        	
        	this.ds_cntr.setColumn(0,"TTL",ttl);			// 제목

        	this.div_1.cb_cdDocCtgr.set_enable(false);
        	
        	this.gfn_newFileDsInit(this.ds_cntr);
        	this.div_71.wb_daumEditor.set_url(application.services["svcurl"].url+"daumeditor/editor.jsp");
        	
        	var nItemNo = 1;
        	
        	this.ds_cntrItem.set_enableevent(false);
        	for(var i=0; i<this.ds_return.rowcount; i++){
        		
        		this.ds_cntrItem.addRow();
        		
        		this.ds_cntrItem.setColumn(i,"ITM_NO",nItemNo++);
        		this.ds_cntrItem.setColumn(i,"STR_CD",this.ds_return.getColumn(i,"STR_CD"));
        		this.ds_cntrItem.setColumn(i,"SL_NM",this.ds_return.getColumn(i,"SL_NM"));
        		this.ds_cntrItem.setColumn(i,"MTRL_CD",this.ds_return.getColumn(i,"MTRL_CD"));
        		this.ds_cntrItem.setColumn(i,"MTRL_NM",this.ds_return.getColumn(i,"MTRL_NM"));
        		this.ds_cntrItem.setColumn(i,"QTY",this.ds_return.getColumn(i,"QTY"));
        		this.ds_cntrItem.setColumn(i,"CD_UNIT",this.ds_return.getColumn(i,"CD_UNIT"));
        		if(this.gfn_isNull(this.ds_return.getColumn(i,"REQ_PRICE"))){
        			this.ds_cntrItem.setColumn(i,"UNT_PRICE",0);
        		} else{
        			this.ds_cntrItem.setColumn(i,"UNT_PRICE",this.ds_return.getColumn(i,"REQ_PRICE"));
        		}
        		this.ds_cntrItem.setColumn(i,"VAT",0);
        		this.ds_cntrItem.setColumn(i,"AMT",this.ds_cntrItem.getColumn(i,"UNT_PRICE") * this.ds_cntrItem.getColumn(i,"QTY"));
        		this.ds_cntrItem.setColumn(i,"DLV_REQ_DAY",this.ds_return.getColumn(i,"DLV_REQ_DAY"));
        		this.ds_cntrItem.setColumn(i,"MTRL_GRP_ID",this.ds_return.getColumn(i,"MTRL_GRP_ID"));
        		this.ds_cntrItem.setColumn(i,"MTRL_GRP_NM2",this.ds_return.getColumn(i,"MTRL_GRP_NM2"));
        		this.ds_cntrItem.setColumn(i,"RMARK",this.ds_return.getColumn(i,"RMARK"));
        		this.ds_cntrItem.setColumn(i,"PR_NO",this.ds_return.getColumn(i,"PR_NO"));
        		this.ds_cntrItem.setColumn(i,"PR_ITEM_ID",this.ds_return.getColumn(i,"PR_ITEM_ID"));
        	}
        	this.ds_cntrItem.set_enableevent(true);
        	
        	var totalVat = 0;
        	var totalAmt = 0;
        	
        	for(var i = 0 ; i < this.ds_cntrItem.rowcount ; i++){
        		totalVat += parseInt(this.ds_cntrItem.getColumn(i,"VAT"));
        		totalAmt += parseInt(this.ds_cntrItem.getColumn(i,"AMT"));
        	}
        	
        	//품목의 단가,수량 변경시 헤더의 금액,단가,부가세 변경
        	this.ds_cntr.setColumn(0,"VAT",totalVat);				//부가세변경
        	this.ds_cntr.setColumn(0,"CNTR_AMT",totalAmt);			//공급가변경	
        	this.ds_cntr.setColumn(0,"CNTR_SUM",totalVat + totalAmt);	//부가세+공급가 변경
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
        	
        	var sSvcID = "Cntr_Read";
        	var sController = "Cntr_Read.do";
        	var sInDatasets = "in_ds=ds_cntr";
        	var sOutDatasets = "ds_cntr=ds_cntr ds_cntrItem=ds_cntrItem ds_cntrPay=ds_cntrPay ds_cntrInsrnc=ds_cntrInsrnc";
        	var sCallbackFunc = "fn_trCallBack";

        	//FILE_JOB_2 :  트랜잭션 gfn_fileTran 으로 변경
            this.gfn_fileTran(sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        	
        }

        /**
        	@function	Fold_onclick()
        	@desc   	폴더접기
        */
        this.fn_fold_onclick = function(obj,e)
        {
        	this.gfn_divFold(obj);
        }

        /**
        	@function	fn_commAdd()
        	@desc   	(공통버튼)신규
        */
        this.fn_commAdd = function()
        {
        	this.gfn_openMenuUrl("CTRB::PCTRB100N00.xfdl");
        }

        /**
        	@function	fn_commDelete()
        	@desc   	(공통버튼)삭제 프로세스
        */
        this.fn_commDelete = function()
        {	
        	var sSvcID = "Cntr_DelCheck";
        	var sController = "Cntr_DelCheck.do";
        	var sInDatasets = "in_ds=ds_cntr"; 
        	var sOutDatasets = "ds_return=out_list";
        	var sCallbackFunc = "fn_trCallBack";
        	
            this.gfn_tran(sSvcID, sController, sInDatasets, sOutDatasets,sCallbackFunc);
        }

        /**
        	@function	div_1_btn_CntrApv_onclick()
        	@desc   	계약품의
        */
        this.div_1_btn_CntrApv_onclick = function(obj,e)
        {
        	if(!this.gfn_confirm("계약품의 하시겠습니까?")) return;
        	
        	var sSvcID = "App_MakeAppForm";
        	var sController = "App_MakeAppForm.do";
        	var sInDatasets = "in_ds=ds_cntr in_dsItem=ds_cntrItem in_dsPay=ds_cntrPay in_dsInsrnc=ds_cntrInsrnc";
        	var sOutDatasets = "ds_return=in_return";
        	var sCallbackFunc = "fn_trCallBack";
        	
        	this.gfn_tran(sSvcID, sController, sInDatasets, sOutDatasets,sCallbackFunc,"GUBUN='AP11CNT'");
        }

        /**
        	@function	fn_reqSave()
        	@desc   	저장
        */
        this.fn_reqSave = function()
        {	
        	var arrUserErr = [];
        	
        	if(this.ds_cntrItem.getRowCount() == 0){
        		var objParam = {agv_msg:"품목은 1개 이상  추가하셔야 합니다.", agv_objComp:this.div_51.grd_cntrPay, agv_errLvl:"E", agv_validType:"유효성 체크"};
        		arrUserErr.push(objParam);
        	}	

        	//지급계획에 대한 체크로직
        	var tmp = 0;
        	for(var i = 0 ; i < this.ds_cntrPay.rowcount ; i++){
        		tmp += parseInt(this.ds_cntrPay.getColumn(i,"PYMT_RT"));
        	}
        	
        	if(tmp > 100){
        		var objParam = {agv_msg:"지급율의 합은 100을 초과할 수 없습니다.", agv_objComp:this.div_51.grd_cntrPay, agv_errLvl:"E", agv_validType:"유효성 체크"};
        		arrUserErr.push(objParam);
        	}
        	
        	//확인 클릭
        	if(!this.gfn_validate(arrUserErr,"N")){		
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
        	@function	div_1_btn_intlCfm_onclick()
        	@desc   	내부확정
        */
        this.div_1_btn_intlCfm_onclick = function(obj,e)
        {
        	if (!this.fn_reqSave()) return false;
        	if(!this.gfn_confirm("내부확정 하시겠습니까?")) return;
        	trace("내부확정 :> CT10CLO로 UPDATE 중 나중에 다시 CT10SCLO로 원복 필요");
         	this.ds_cntr.setColumn(0,"CD_CNTR_STTS","CT10CLO");
         	this.ds_cntr.setColumn(0,"ALT_INTL_CFM","Y");
         	this.div_71.wb_daumEditor.callMethod("saveContent");
        }

        /**
        	@function	div_1_btn_CntrReq_onclick()
        	@desc   	계약요청
        */
        this.div_1_btn_CntrReq_onclick = function(obj,e)
        {
        	if (!this.fn_reqSave()) return false;
        	if(!this.gfn_confirm("계약요청 하시겠습니까?")) return;
         	this.ds_cntr.setColumn(0,"CD_CNTR_STTS","CT10SREQ");
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

        /**
        	@function	fn_commSave2()
        	@desc   	(공통버튼)저장 프로세스
        */
        this.fn_commSave2 = function()
        {	
        	var sSvcID = "Cntr_Save";
        	var sController = "Cntr_Save.do";
        	var sInDatasets = "in_cntr=ds_cntr:A in_cntrItem=ds_cntrItem:A in_cntrPay=ds_cntrPay:A in_cntrInsrnc=ds_cntrInsrnc:A"; 
        	var sOutDatasets = "ds_cntr=in_cntr";
        	var sCallbackFunc = "fn_trCallBack";
        	
        	//FILE_JOB_3 :  트랜잭션 gfn_fileTran 으로 변경
        	this.gfn_fileSaveTran(sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
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
        		case "Cntr_Read" :

        			//read 데이터가 존재하지 않으면 작성중인 상태로 데이터를 셋팅한다.
        			if(this.ds_cntr.rowcount > 0){
        				
        				// 그리드의 타입을 정의(작성중일 경우를 제외하고는 모두 VMODE로 변경한다.)
        				if("CT10WRI" == this.ds_cntr.getColumn(0,"CD_CNTR_STTS")){		
        					
        					this.gfn_objReSet(this, "U");
        					this.parent.div_commBtns.btn_commSave.set_visible(true);
        					this.parent.div_commBtns.btn_comDel.set_visible(true);
        					
        					this.div_1.Button00.set_visible(false);
        					this.div_1.btn_CntrMailSend.set_visible(false);
        					this.div_1.btn_intlCfm.set_visible(true);
        					this.div_1.btn_CntrApv.set_visible(false);
        					this.div_1.btn_CntrReq.set_visible(true);	
        					this.div_1.btn_CntrApv01.set_visible(false);
        					this.div_1.btn_CntrApv00.set_visible(false);
        					this.div_71.wb_daumEditor.set_visible(true);
        					this.div_71.WebBrowser00.set_visible(false);
        				}else{					
        					this.gfn_objReSet(this, "R");
        					this.div_71.wb_daumEditor.set_visible(false);
        					this.div_71.WebBrowser00.set_visible(true);
        					this.div_21.Tab01.tabp01.div_crtDt.set_enable(false);
        					this.div_3.sta_CrtrNm00.set_visible(false);
        					
        					if(this.fv_reloadCnt == true){
        						var start = "<div style="+"color:#333333;font:20 malgun gothic;>";
        						var end   = "</div>";
        						var doc = this.div_71.WebBrowser00.getProperty("document");
        						doc.callMethod("write", start+this.ds_cntr.getColumn(0,"SIGN_ORGNL")+end);
        					}
        					
        					this.fv_reloadCnt = false;
        					
        					// 합의완료
        					if("CT10SCLO" == this.ds_cntr.getColumn(0,"CD_CNTR_STTS")){
        						this.div_1.Button00.set_visible(false);
        						this.div_1.btn_CntrMailSend.set_visible(false);
        						
        						if(this.ds_cntr.getColumn(0,"ALT_INTL_CFM") != "Y"){
        							this.div_1.btn_intlCfm.set_visible(true);
        						}
        						this.div_1.btn_CntrReq.set_visible(false);
        						this.div_1.btn_CntrApv00.set_visible(false);
        						this.div_1.btn_CntrApv01.set_visible(false);
        						this.div_1.btn_CntrApv.set_visible(true);	
        					}
        					
        					// 품의중작성중
        					if("CT10WAT" == this.ds_cntr.getColumn(0,"CD_CNTR_STTS")){						
        						this.div_1.Button00.set_visible(false);
        						this.div_1.btn_CntrMailSend.set_visible(false);
        						this.div_1.btn_CntrReq.set_visible(false);
        						this.div_1.btn_intlCfm.set_visible(false);
        						this.div_1.btn_CntrApv01.set_visible(false);
        						this.div_1.btn_CntrApv00.set_visible(true);						
        						this.div_1.btn_CntrApv.set_visible(false);						
        					}
        					
        					// 품의중
        					if("CT10APP" == this.ds_cntr.getColumn(0,"CD_CNTR_STTS")){
        						this.div_1.Button00.set_visible(false);
        						this.div_1.btn_CntrMailSend.set_visible(false);
        						this.div_1.btn_CntrReq.set_visible(false);
        						this.div_1.btn_intlCfm.set_visible(false);
        						this.div_1.btn_CntrApv01.set_visible(true);
        						this.div_1.btn_CntrApv00.set_visible(false);						
        						this.div_1.btn_CntrApv.set_visible(false);
        					}
        					
        					// 취소, 합의요청
        					if("CT10CXL" == this.ds_cntr.getColumn(0,"CD_CNTR_STTS") || "CT10SREQ" == this.ds_cntr.getColumn(0,"CD_CNTR_STTS")){
        						this.div_1.Button00.set_visible(false);
        						this.div_1.btn_CntrMailSend.set_visible(false);
        						this.div_1.btn_CntrReq.set_visible(false);
        						this.div_1.btn_intlCfm.set_visible(false);
        						this.div_1.btn_CntrApv01.set_visible(false);
        						this.div_1.btn_CntrApv00.set_visible(false);						
        						this.div_1.btn_CntrApv.set_visible(false);
        					}
        					
        					// 계약완료
        					if("CT10CLO" == this.ds_cntr.getColumn(0,"CD_CNTR_STTS")){						
        						this.div_1.Button00.set_visible(false);						
        						this.div_1.btn_CntrMailSend.set_visible(true);							
        						this.div_1.btn_CntrReq.set_visible(false);
        						this.div_1.btn_intlCfm.set_visible(false);
        						this.div_1.btn_CntrApv01.set_visible(false);
        						this.div_1.btn_CntrApv00.set_visible(false);						
        						this.div_1.btn_CntrApv.set_visible(false);
        						this.parent.div_commBtns.btn_commPrint.set_visible(true);
        					}
        					
        					this.div_31.grd_cntrItem.setFormat("VMODE");
        					this.div_51.grd_cntrPay.setFormat("VMODE");
        					this.div_61.grd_insrncItem.setFormat("VMODE");
        					
        					this.parent.div_commBtns.btn_comDel.set_visible(false);
        					this.parent.div_commBtns.btn_commInit.set_visible(false);
        					this.parent.div_commBtns.btn_commSave.set_visible(false);
        					this.parent.div_commBtns.btn_commNew.set_visible(true);
        				}
        				
        				this.gfn_btnRange(this.parent.div_commBtns.btn_commNew);
        				this.gfn_btnRange(this.div_1.btn_CntrMailSend);
        				
        				//FILE_JOB_4 : 파일 부모 데이터셋에 시퀀스 추가			
        				this.gfn_fileDsSeq(this.ds_cntr);
        				
        				//FILE_JOB_5 : 저장 후 재조회를 마치고 나서 파일 컴포넌트에 파일정보를 재설정 한다.
        				this.fn_getCompFileList1();
        				
        				this.div_71.wb_daumEditor.set_url(application.services["svcurl"].url+"daumeditor/editor.jsp");
        			}	
        		break;
        		
        		case "Cntr_Save" : 
        			if(strErrMsg != ""){
        				
        				this.gfn_alert(strErrMsg);
        				//저장후 받아온 값으로 데이터조회
        				this.fv_cntrNo = this.ds_cntr.getColumn(0,"CNTR_NO");
        				this.fn_search();
        			}
        		break;
        		
        		case "Cntr_DelCheck" :
        			
        			var flag = false;
        			for(var i = 0 ; i < this.ds_return.rowcount ; i++){
        				if(this.ds_return.getColumn(i,"CNT") > 1){
        					flag = true;
        				}
        			}
        			
        			if(flag == true){
        				if(!this.gfn_confirm("해당 구매요청을 참조하고있는 문서가 함께 삭제됩니다. \n계속하시겠습니까?")) return;
        				
        				var sSvcID = "Cntr_DelCas";
        				var sController = "Cntr_DelCas.do";
        				var sInDatasets = "in_ds=ds_return"; 
        				var sOutDatasets = "ds_return=out_list";
        				var sCallbackFunc = "fn_trCallBack";
        				
        				this.gfn_fileTran(sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        				
        			} else{
        				if(!this.gfn_confirm("삭제하시겠습니까?")) return;
        				
        				var sSvcID = "Cntr_Del";
        				var sController = "Cntr_Del.do";
        				var sInDatasets = "in_cntr=ds_cntr:A in_item=ds_cntrItem:A"; 
        				var sOutDatasets = "ds_cntr=in_cntr";
        				var sCallbackFunc = "fn_trCallBack";
        				
        				this.gfn_fileTran(sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        			}
        			
        		break;
        		
        		case "Cntr_Del" :
        			if(strErrMsg != ""){
        				this.gfn_alert(strErrMsg);
        				this.parent.fn_close();
        				this.gfn_openMenuUrl("CTRB::PCTRB100L00.xfdl");
        			}
        		break;
        		
        		case "Cntr_DelCas" :
        			if(strErrMsg != ""){
        				this.gfn_alert(strErrMsg);
        				this.parent.fn_close();
        				this.gfn_openMenuUrl("CTRB::PCTRB100L00.xfdl");
        			}
        		break;
        		
        		case "Cntr_Cxl" :
        			if(strErrMsg != ""){
        				this.gfn_alert(strErrMsg);
        				
        				//저장후 받아온 값으로 데이터조회
        				this.fv_cntrNo = this.ds_cntr.getColumn(0,"CNTR_NO");

        				this.fn_search();
        			}
        		break;
        		
        		case "App_MakeAppForm" :
        			this.WebBrowser00.callMethod("send",this.ds_return.getColumn(0,"ACTION_URL"),this.ds_return.getColumn(0,"PARAM_VALUE"));
        			this.fn_search();
        		break;
        		
        		case "Ctr_MtrlSrch" :

        			if(this.ds_return.rowcount == 1){
        				this.ds_cntrItem.setColumn(this.ds_cntrItem.rowposition,"MTRL_CD",this.ds_return.getColumn(0,"MTRL_CD"));
        				this.ds_cntrItem.setColumn(this.ds_cntrItem.rowposition,"MTRL_NM",this.ds_return.getColumn(0,"MTRL_NM2"));
        				this.ds_cntrItem.setColumn(this.ds_cntrItem.rowposition,"MTRL_GRP_ID",this.ds_return.getColumn(0,"SML_CLS_ID"));
        				this.ds_cntrItem.setColumn(this.ds_cntrItem.rowposition,"MTRL_GRP_NM2",this.ds_return.getColumn(0,"MTRL_GRP_NM2"));
        				
        				if(this.gfn_isNull(this.ds_return.getColumn(0,"CNTR_PRICE"))){
        					this.ds_cntrItem.setColumn(this.ds_cntrItem.rowposition,"UNT_PRICE",0);
        				} else{
        					this.ds_cntrItem.setColumn(this.ds_cntrItem.rowposition,"UNT_PRICE",this.ds_return.getColumn(0,"CNTR_PRICE"));
        				}
        				
        				this.ds_cntrItem.setColumn(this.ds_cntrItem.rowposition,"CD_UNIT",this.ds_return.getColumn(0,"CD_PUR_UNIT"));
        			} else{
        				
        				var sArg = { 
        					agv_nm:this.ds_cntrItem.getColumn(this.ds_cntrItem.rowposition,"MTRL_NM")
        			   };
        				this.gfn_dialog("PPOPC700P02", "CTRB::PCTRB100P05.xfdl", sArg, "fn_popCallBack");	
        			}
        		break;
        		
        		case "SCntr_createHtml" :
        			if(this.fv_print)
        			{
        				var sArg = {
        							cntr_no:this.ds_cntr.getColumn(0, "CNTR_NO")
        							, branch_cd:this.ds_cntr.getColumn(0, "BRANCH_CD")
        							};
        				this.gfn_dialog("", "commPop::PPOPC2600P00.xfdl", sArg, "fn_popCallBack");
        			}
        			else
        			{
        				var sArg = {
        							cntr_no:this.ds_cntr.getColumn(0, "CNTR_NO")
        							, branch_cd:this.ds_cntr.getColumn(0, "BRANCH_CD")
        							};
        				this.gfn_dialog("", "CTRB::PCTRB100P06.xfdl", sArg, "fn_popCallBack");
        			}
        			
        		break;
        		
        		default:
        		break;	
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
        	@function	div_21_Tab01_onchanged()
        	@desc   	
        */
        this.div_21_Tab01_onchanged = function(obj,e)
        {
        	//FILE_COMP_JOB_7 : 파일 첨부 컴포넌트 초기화 & 조회
        	this.fn_getCompFileList1();
        }

        /**
        	@function	fn_onkeydown_event()
        	@desc   	키입력 이벤트
        */
        this.fn_onkeydown_event = function(obj,e)
        {
        	//Enter 입력시
        	if(e.keycode == "13"){
        		
        		obj.updateToDataset();
        		
        		// 협력사 검색
        		if(obj.name == "edt_ptnrNm"){
        			
        			this.btn_ptnr_onclick();
        		
        		// 관련계약 검색
        		}else if(obj.name == "edt_lnkCntrTtl"){
        			
        			this.btn_lnkCntr_onclick();
        		
        		// 계약담당자 검색
        		}else if(obj.name == "edt_cntrReqrNm"){
        			
        			this.btn_cntrUser_onclick();
        		
        		// 자재검색
        		}else if(obj.name == "edt_mtrlNm"){
        			
        			this.btn_mtrl_onclick();
        		
        		// 창고검색
        		}else if(obj.name == "edt_strNm"){
        			
        			this.btn_strSrch_onclick();
        			
        		}
        	}
        }

        /**
        	@function	fn_ontextchanged_event()
        	@desc   	키를 입력 받을시 세팅되어있던 값 삭제
        */
        this.fn_ontextchanged_event = function(obj,e)
        {
        	// 협력사
        	if(obj.name == "edt_ptnrNm"){
        		
        		this.gfn_initKey(this.ds_cntr,e,"PTNR_ID");
        	
        	// 관련계약
        	}else if(obj.name == "edt_lnkCntrTtl"){
        	
        		this.gfn_initKey(this.ds_cntr,e,"LNK_CNTR_NO");
        	
        	// 계약담당자
        	}else if(obj.name == "edt_cntrReqrNm"){
        	
        		this.gfn_initKey(this.ds_cntr,e,"CHRGR_ID","TEL","EMAIL","FAX");
        	
        	// 자재
        	}else if(obj.name == "edt_mtrlNm"){
        	
        		this.gfn_initKey(this.ds_cntrItem,e,"MTRL_CD","MTRL_GRP_ID","MTRL_GRP_NM","UNT_PRICE","CD_UNIT");
        		
        	// 창고
        	}else if(obj.name == "edt_strNm"){
        	
        		this.gfn_initKey(this.ds_cntrItem,e,"STR_CD");
        	}
        }

        /**
        	@function	btn_ptnr_onclick()
        	@desc   	협력업체검색 팝업
        */
        this.btn_ptnr_onclick = function(obj,e)
        {
        	var sArg = {
        				agv_nm:this.ds_cntr.getColumn(0,"PTNR_NM")
        			   };
        	
        	this.gfn_CPop_ComCorpSrch(sArg,"fn_popCallBack","PopupComCopSrchItm");
        }

        /**
        	@function	btn_lnkCntr_onclick()
        	@desc   	관련계약검색 팝업
        */
        this.btn_lnkCntr_onclick = function(obj,e)
        {
        	var sArg = { agv_id:""
        			    , agv_nm:this.ds_cntr.getColumn(0,"LNK_CNTR_TTL")
        				, agv_mode:"" };

        	this.gfn_dialog("PopupRefCntrInput", "CTRB::PCTRB100P02.xfdl", sArg, "fn_popCallBack");
        }

        /**
        	@function	btn_cntrUser_onclick()
        	@desc   	담당자검색
        */
        this.btn_cntrUser_onclick = function(obj,e)
        {
        	var sArg = { 
        				agv_nm:this.ds_cntr.getColumn(0,"CHRGR_NM")
        			   };
        	this.gfn_CPop_ComUserSrch(sArg,"fn_popCallBack","PopupComUserSrchInput");
        }

        /**
        	@function	btn_mtrl_onclick()
        	@desc   	자재검색팝업
        */
        this.btn_mtrl_onclick = function(obj,e)
        {
        	if(this.ds_cntrItem.rowcount==0) return;
        	
        	this.ds_srchOpt.setColumn(0,"MTRL_NM",this.ds_cntrItem.getColumn(this.ds_cntrItem.rowposition,"MTRL_NM"));
        	
        	var sSvcID = "Ctr_MtrlSrch";
        	var sController = "Ctr_MtrlSrch.do";
        	var sInDatasets = "in_ds=ds_srchOpt";
        	var sOutDatasets = "ds_return=out_list";
        	var sCallbackFunc = "fn_trCallBack";
        	
        	this.gfn_tran(sSvcID, sController, sInDatasets, sOutDatasets,sCallbackFunc);
        }

        /**
        	@function	btn_strSrch_onclick()
        	@desc   	창고검색팝업
        */
        this.btn_strSrch_onclick = function(obj,e)
        {
        	if(this.ds_cntrItem.rowcount==0) return;
        	
        	var sArg = { 
        					agv_nm : this.ds_cntrItem.getColumn(this.ds_cntrItem.rowposition,"SL_NM")
        			   };
        	this.gfn_CPop_comStorageSrch(sArg,"fn_popCallBack","PopupComStrSrch");
        }

        /**
        	@function	btn_mtrlAdd_onclick()
        	@desc   	그리드 품목검색(멀티)
        */
        this.btn_mtrlAdd_onclick = function(obj,e)
        {
        	this.gfn_dialog("PopupComMtrlMultySrch", "CTRB::PCTRB100P04.xfdl", null, "fn_popCallBack");
        }

        /**
        	@function	div_3_btn_Itm_Add_onclick()
        	@desc   	아이템 추가 ( 아이템 추가시 기본적으로 배송지도 1ROW 추가한다.
        */
        this.div_3_btn_Itm_Add_onclick = function(obj,e)
        {
        	var nRow = this.ds_cntrItem.addRow();
        	
        	this.ds_cntrItem.setColumn(nRow,"PR_ITEM_ID","");
        	this.ds_cntrItem.setColumn(nRow,"TNDR_ITEM_ID","");
        	this.ds_cntrItem.setColumn(nRow,"RFQ_REQ_ITEM_ID","");
        	this.ds_cntrItem.setColumn(nRow,"PO_ITEM_ID","");
        	this.ds_cntrItem.setColumn(nRow,"ITM_NO",nRow+1);
        	this.ds_cntrItem.setColumn(nRow,"CNTR_NO",this.ds_cntr.getColumn(0,"CNTR_NO"));
        	this.ds_cntrItem.setColumn(nRow,"CD_UNIT","");
        	this.ds_cntrItem.setColumn(nRow,"QTY",0);
        	this.ds_cntrItem.setColumn(nRow,"UNT_PRICE",0);
        	this.ds_cntrItem.setColumn(nRow,"VAT",0);
        	this.ds_cntrItem.setColumn(nRow,"AMT",0);
        }

        /**
        	@function	div_3_btn_Itm_Del_onclick()
        	@desc   	아이템 삭제 ( 아이템 삭제시 기본적으로 배송지도 삭제한다.
        */
        this.div_3_btn_Itm_Del_onclick = function(obj,e)
        {

        	//FILE_JOB_9 : 품목에 해당하는 파일 삭제 (품목DATASET,맵핑정보)
        	var array = [this.ds_cntrItem.getColumn(this.ds_cntrItem.rowposition, "CNTR_NO"),this.ds_cntrItem.getColumn(this.ds_cntrItem.rowposition, "CNTR_ITEM_ID")];
        	this.gfn_fileDelete(array);
        	
        	for(var i=this.ds_cntrItem.rowcount;i>=0;i--){
        		if(this.ds_cntrItem.getColumn(i,"CHECKED")==1){
        			this.ds_cntrItem.deleteRow(i);
        		}
        	}
        	
        	//행 삭제 시 품목 및 납품정보에 품번을 재설정 한다.
         	for(var i=0; i<this.ds_cntrItem.rowcount; i++){
         		if(i+1 != this.ds_cntrItem.getColumn(i,"ITM_NO")){	//품번이 변경되었을 때만 변경한다.
         			this.ds_cntrItem.setColumn(i,"ITM_NO",i+1);
         		}
         	}
        }

        /**
        	@function	div_31_grd_cntrItem_onexpandup()
        	@desc   	그리드 이미지 클릭이벤트
        */
        this.div_31_grd_cntrItem_onexpandup = function(obj,e)
        {
        	// 자재 검색
        	if("MTRL_NM" == this.gfn_grdBindColName(obj, e.cell)){
        		if(!this.gfn_isNull(this.ds_cntrItem.getColumn(e.row,"PR_ITEM_ID")) || 
        		   !this.gfn_isNull(this.ds_cntrItem.getColumn(e.row,"TNDR_ITEM_ID")) ||
        		   !this.gfn_isNull(this.ds_cntrItem.getColumn(e.row,"RFQ_REQ_ITEM_ID")) ||
        		   !this.gfn_isNull(this.ds_cntrItem.getColumn(e.row,"PO_ITEM_ID"))) return;
        		
        		this.btn_mtrl_onclick();
        	
        	// 창고 검색
        	}else if("SL_NM" == this.gfn_grdBindColName(obj, e.cell)){
        		
        		this.btn_strSrch_onclick();
        		
        	}
        }

        /**
        	@function	div_31_grd_cntrItem_onkeydown()
        	@desc   	그리드 키입력시 이벤트
        */
        this.div_31_grd_cntrItem_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		
        		obj.updateToDataset();
        		
        		// 자재 검색
        		if("MTRL_NM" == this.gfn_grdBindColName(obj, obj.getCellPos())){
        			this.btn_mtrl_onclick();
        		
        		// 창고 검색
        		}else if("SL_NM" == this.gfn_grdBindColName(obj, obj.getCellPos())){
        			
        			this.btn_strSrch_onclick();
        		
        		}
        	}
        }

        /**
        	@function	Tab00_tabpage1_Div21_grd_PurItem_ontextchanged()
        	@desc   	그리드 텍스트 변환시 이벤트
        */
        this.div_31_grd_cntrItem_ontextchanged = function(obj,e)
        {
        	// 자재검색
        	if("MTRL_NM" == this.gfn_grdBindColName(obj,obj.getCellPos())){
        		
        		this.gfn_initKey(this.ds_cntrItem,e,"MTRL_CD","MTRL_GRP_ID","MTRL_GRP_NM","UNT_PRICE","CD_UNIT","PR_ITEM_ID");
        	
        	// 입고계정
        	}else if("SL_NM" == this.gfn_grdBindColName(obj,obj.getCellPos())){
        		
        		this.gfn_initKey(this.ds_cntrItem,e,"STR_CD");
        	
        	}
        }

        /**
        	@function	ds_cntrItem_oncolumnchanged()
        	@desc   	item의 수량과 단가가 변경되면 헤더의 계약금액을 변경한다.
        */
        this.ds_cntrItem_oncolumnchanged = function(obj,e)
        {
        	var nqty = 0;
        	var nprice = 0;
        	if(e.columnid == "QTY" || e.columnid == "UNT_PRICE") {
        		nqty = this.ds_cntrItem.getColumn(e.row,"QTY");
        		nprice = this.ds_cntrItem.getColumn(e.row,"UNT_PRICE");
        		
        		this.ds_cntrItem.setColumn(e.row,"AMT",Math.round(nqty*nprice));
        		
        		if("T" == this.ds_cntrItem.getColumn(e.row,"INT_NTAX")){
        			this.ds_cntrItem.setColumn(e.row,"VAT",Math.round(nqty*nprice)*0.1);
        		}else{
        			this.ds_cntrItem.setColumn(e.row,"VAT",0);
        		}
        		
        		var totalVat = 0;
        		var totalAmt = 0;
        		
        		for(var i = 0 ; i < this.ds_cntrItem.rowcount ; i++){
        			totalVat += parseInt(this.ds_cntrItem.getColumn(i,"VAT"));
        			totalAmt += parseInt(this.ds_cntrItem.getColumn(i,"AMT"));
        		}
        		
        		//품목의 단가,수량 변경시 헤더의 금액,단가,부가세 변경
        		this.ds_cntr.setColumn(0,"VAT",totalVat);				//부가세변경
        		this.ds_cntr.setColumn(0,"CNTR_AMT",totalAmt);			//공급가변경	
        		this.ds_cntr.setColumn(0,"CNTR_SUM",totalVat + totalAmt);	//부가세+공급가 변경
        	}
        }

        /**
        	@function	ds_cntrPay_oncolumnchanged()
        	@desc   	Pay의 지급율이 변경되면 지급금액을 변경한다.
        */
        this.ds_cntrPay_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "PYMT_RT"){
        		if (obj.getColumn(e.row,"PYMT_RT") > 100){
        			obj.setColumn(e.row,"PYMT_RT",100);
        		}
        		
        		var nRt = (e.columnid=="PYMT_RT"? (e.newvalue > 100 ? 100 : e.newvalue): obj.getColumn(e.row,"PYMT_RT"));
        		var nAmt = this.ds_cntr.getColumn(0,"CNTR_SUM");
        		nRt = nRt*0.01;
        		if(this.gfn_isNull(nRt * nAmt)==false){
        			obj.setColumn(e.row,"PYMT_AMT", ( nRt * nAmt));
        		}	
        	}
        }

        /**
        	@function	ds_cntrInsrnc_oncolumnchanged()
        	@desc   	Insrnc의 보증급율율이 변경되면 금액을 변경한다.
        */
        this.ds_cntrInsrnc_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "GRNT_RT"){
        		if (obj.getColumn(e.row,"GRNT_RT") > 100){
        			obj.setColumn(e.row,"GRNT_RT",100);
        		}
        		
        		var amt = this.ds_cntr.getColumn(0,"CNTR_SUM");
        		var grnt = this.ds_cntrInsrnc.getColumn(e.row,"GRNT_RT");
        		grnt = grnt * 0.01;
        		if(this.gfn_isNull(Math.round(grnt * amt))==false){
        			obj.setColumn(e.row,"GRNT_AMT", (Math.round(grnt * amt )));
        		}	
        	}
        }

        /**
        	@function	ds_cntr_oncolumnchanged()
        	@desc   	계약금액변경시 보증금액과 지급금액 변경
        */
        this.ds_cntr_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "CNTR_SUM") {
        		var nAmt = this.ds_cntr.getColumn(0,"CNTR_SUM");
        		
        		for(var i = 0 ; i < this.ds_cntrPay.rowcount ; i++){
        			this.ds_cntrPay.setColumn(i,"PYMT_AMT",nAmt*(this.ds_cntrPay.getColumn(i,"PYMT_RT")*0.01));
        		}
        		
        		for(var i = 0 ; i < this.ds_cntrInsrnc.rowcount ; i++){
        			this.ds_cntrInsrnc.setColumn(i,"GRNT_AMT",nAmt*(this.ds_cntrInsrnc.getColumn(i,"GRNT_RT")*0.01));
        		}
        	}
        }

        /**
        	@function	div_41_cbo_itemChg_onitemchanged()
        	@desc   	아이템선택
        */
        this.div_41_cbo_itemChg_onitemchanged = function(obj,e)
        {
        	this.ds_cntrItem.set_rowposition(this.ds_cntrItem.findRow("ITM_NO",obj.value));
        }

        /**
        	@function	div_41_btn_cntrItemRowUp_onclick()
        	@desc   	자재를 위로 이동하여 편집
        */
        this.div_41_btn_cntrItemRowUp_onclick = function(obj,e)
        {
        	if(this.ds_cntrItem.rowposition==0) return;
        	this.ds_cntrItem.set_rowposition(this.ds_cntrItem.rowposition-1);
        }

        /**
        	@function	div_41_btn_cntrItemRowDown_onclick()
        	@desc   	자재를 아래로 이동하여 편집
        */
        this.div_41_btn_cntrItemRowDown_onclick = function(obj,e)
        {
        	if(this.ds_cntrItem.rowposition==this.ds_cntrItem.rowcount-1) return;
        	this.ds_cntrItem.set_rowposition(this.ds_cntrItem.rowposition+1);
        }

        /**
        	@function	div_5_btn_PayItm_Add_onclick()
        	@desc   	지급계획 추가버튼 클릭 이벤트
        */
        this.div_5_btn_PayItm_Add_onclick = function(obj,e)
        {
        	var nRow = this.ds_cntrPay.addRow();
        	
        	var nItemNo = 1;
        	if(nRow==0){
        		this.ds_cntrPay.setColumn(nRow,"PYMT_ORDR",nItemNo);
        	} else {
        		nItemNo = nexacro.toNumber(this.ds_cntrPay.getColumn(nRow-1,"PYMT_ORDR"))+1;
        		this.ds_cntrPay.setColumn(nRow,"PYMT_ORDR",nItemNo);
        	}
        	this.ds_cntrPay.setColumn(nRow,"CNTR_NO",this.ds_cntr.getColumn(0,"CNTR_NO"));
        }

        /**
        	@function	div_5_btn_PayItm_Del_onclick()
        	@desc   	지급계획의 삭제버튼 클릭 이벤트
        */
        this.div_5_btn_PayItm_Del_onclick = function(obj,e)
        {
        	//for(var i=0; i<this.ds_cntrPay.rowcount;i++){
        	for(var i=this.ds_cntrPay.rowcount; i>=0; i--){
        		if(this.ds_cntrPay.getColumn(i,"CHECKED")==1){
        			var nOrdr = this.ds_cntrPay.getColumn(i,"PYMT_ORDR");
        			//지급계획 삭제 시, 해당하는 지급차수의 보증보험 전부 삭제
        			for(var j=0; j<this.ds_cntrInsrnc.rowcount; j++){
        				if(nexacro.toNumber(nOrdr) == nexacro.toNumber(this.ds_cntrInsrnc.getColumn(j,"PYMT_ORDR"))){
        					this.ds_cntrInsrnc.deleteRow(j);
        				}
        			}
        			this.ds_cntrPay.deleteRow(i);
        		}
        	}
        }

        /**
        	@function	div_6_btn_Insrnc_Add_onclick()
        	@desc   	보증보험 추가버튼 클릭 이벤트
        */
        this.div_6_btn_Insrnc_Add_onclick = function(obj,e)
        {
        	var nRow = this.ds_cntrInsrnc.addRow();
        	this.ds_cntrInsrnc.setColumn(nRow,"CD_GRNT_INSRNC_TYPE",""); //보증보험유형
        	this.ds_cntrInsrnc.setColumn(nRow,"CD_GRNT_MTHD",""); 		//보증유형
        }

        /**
        	@function	div_6_btn_Insrnc_Del_onclick()
        	@desc   	보증보험의 삭제버튼 클릭 이벤트
        */
        this.div_6_btn_Insrnc_Del_onclick = function(obj,e)
        {
        	this.gfn_dsChkDel(this.ds_cntrInsrnc);
        }

        /**
        	@function	div_7_btn_tndrItemAdd01_onclick()
        	@desc   	계약내용 템플릿참조 버튼
        */
        this.div_7_btn_tndrItemAdd01_onclick = function(obj,e)
        {
        	var sArg = {   };
        	this.gfn_dialog("PopupCntrTmpl", "CTRB::PCTRB100P01.xfdl", sArg, "fn_popCallBack");
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
        		
        		// 문서유형
        		if(sPopupId == "popupComDocType"){
        			
        			this.ds_cntr.setColumn(0, "CD_DOC_CTGR", this.ds_return.getColumn(0,"CD_ID"));
        			// 문서유형을 반영 후 수정불가하게 처리한다.
        			this.div_1.cb_cdDocCtgr.set_enable(false);
        		
        		// 자재 검색
        		}else if(sPopupId == "PPOPC700P02"){
        			
        			this.ds_cntrItem.setColumn(this.ds_cntrItem.rowposition,"MTRL_CD",this.ds_return.getColumn(0,"MTRL_CD"));
        			this.ds_cntrItem.setColumn(this.ds_cntrItem.rowposition,"MTRL_NM",this.ds_return.getColumn(0,"MTRL_NM2"));
        			this.ds_cntrItem.setColumn(this.ds_cntrItem.rowposition,"MTRL_GRP_ID",this.ds_return.getColumn(0,"SML_CLS_ID"));
        			this.ds_cntrItem.setColumn(this.ds_cntrItem.rowposition,"MTRL_GRP_NM2",this.ds_return.getColumn(0,"MTRL_GRP_NM2"));
        			
        			if(this.gfn_isNull(this.ds_return.getColumn(0,"CNTR_PRICE"))){
        				this.ds_cntrItem.setColumn(this.ds_cntrItem.rowposition,"UNT_PRICE",0);
        			} else{
        				this.ds_cntrItem.setColumn(this.ds_cntrItem.rowposition,"UNT_PRICE",this.ds_return.getColumn(0,"CNTR_PRICE"));
        			}
        			
        			this.ds_cntrItem.setColumn(this.ds_cntrItem.rowposition,"CD_UNIT",this.ds_return.getColumn(0,"CD_PUR_UNIT"));
        		
        		// 창고 검색
        		}else if(sPopupId == "PopupComStrSrch"){
        			
        			this.ds_cntrItem.setColumn(this.ds_cntrItem.rowposition,"STR_CD",this.ds_return.getColumn(0,"STR_CD"));
        			this.ds_cntrItem.setColumn(this.ds_cntrItem.rowposition,"SL_NM",this.ds_return.getColumn(0,"SL_NM"));
        		
        		// 계약담당자 검색
        		}else if(sPopupId == "PopupComUserSrchInput"){
        			
        			this.ds_cntr.setColumn(0,"CHRGR_ID",this.ds_return.getColumn(0,"USER_ID"));
        			this.ds_cntr.setColumn(0,"CHRGR_NM",this.ds_return.getColumn(0,"USER_NM"));
        			this.ds_cntr.setColumn(0,"TEL",this.ds_return.getColumn(0,"TEL"));
        			this.ds_cntr.setColumn(0,"EMAIL",this.ds_return.getColumn(0,"EMAIL"));
        			this.ds_cntr.setColumn(0,"FAX",this.ds_return.getColumn(0,"FAX"));
        		
        		// 협력사 검색
        		}else if(sPopupId == "PopupComCopSrchItm"){
        		
        			this.ds_cntr.setColumn(0,"PTNR_ID",this.ds_return.getColumn(0,"PTNR_ID"));
        			this.ds_cntr.setColumn(0,"PTNR_NM",this.ds_return.getColumn(0,"PTNR_NM"));
        		
        		// 관련계약검색
        		}else if(sPopupId == "PopupRefCntrInput"){
        			
        			this.ds_cntr.setColumn(0,"LNK_CNTR_NO",this.ds_return.getColumn(0,"CNTR_NO"));
        			this.ds_cntr.setColumn(0,"LNK_CNTR_TTL",this.ds_return.getColumn(0,"TTL"));
        		
        		// 계약내용 템플릿참조
        		}else if(sPopupId == "PopupCntrTmpl"){
        			
        			this.ds_cntr.setColumn(this.ds_cntr.rowposition,"SIGN_ORGNL",this.ds_return.getColumn(0,"CNTR_CNTNT"));
        			this.ds_cntr.setColumn(this.ds_cntr.rowposition,"CNTR_TMPL_ID",this.ds_return.getColumn(0,"CNTR_TMPL_ID"));
        			this.div_71.wb_daumEditor.callMethod("setContent");
        		
        		// 품목검색 멀티
        		}else if(sPopupId == "PopupComMtrlMultySrch"){
        			this.ds_cntrItem.set_enableevent(false);
        			for(var i=0; i<this.ds_return.rowcount; i++){
        			
        				var nRow = this.ds_cntrItem.addRow();
        				this.ds_cntrItem.setColumn(nRow,"ITM_NO",nRow+1);
        				this.ds_cntrItem.setColumn(nRow,"MTRL_GRP_ID",	this.ds_return.getColumn(i,"SML_CLS_ID"));
        				this.ds_cntrItem.setColumn(nRow,"MTRL_GRP_NM2",	this.ds_return.getColumn(i,"MTRL_GRP_NM2"));
        				this.ds_cntrItem.setColumn(nRow,"MTRL_CD",	this.ds_return.getColumn(i,"MTRL_CD"));
        				this.ds_cntrItem.setColumn(nRow,"MTRL_NM",	this.ds_return.getColumn(i,"MTRL_NM2"));
        				this.ds_cntrItem.setColumn(nRow,"CD_UNIT", this.ds_return.getColumn(i,"CD_PUR_UNIT"));
        				this.ds_cntrItem.setColumn(nRow,"UNT_PRICE",this.ds_return.getColumn(i,"CNTR_PRICE"));
        				this.ds_cntrItem.setColumn(nRow,"INT_NTAX",this.ds_return.getColumn(i,"INT_NTAX"));
        				this.ds_cntrItem.setColumn(nRow,"PR_ITEM_ID","");
        				this.ds_cntrItem.setColumn(nRow,"TNDR_ITEM_ID","");
        				this.ds_cntrItem.setColumn(nRow,"RFQ_REQ_ITEM_ID","");
        				this.ds_cntrItem.setColumn(nRow,"PO_ITEM_ID","");
        				this.ds_cntrItem.setColumn(nRow,"QTY",0);
        				this.ds_cntrItem.setColumn(nRow,"VAT",0);
        				this.ds_cntrItem.setColumn(nRow,"AMT",0);
        				
        				if(this.gfn_isNull(this.ds_cntrItem.getColumn(nRow,"UNT_PRICE"))) this.ds_cntrItem.setColumn(nRow,"UNT_PRICE",0);
        				
        				//INT_NTAX = T 과세
        				//INT_NTAX = N 비과세
        			}
        			this.ds_cntrItem.set_enableevent(true);
        			
        		}else if(sPopupId == "PopupAppReq"){
        			this.fn_search();
        		}
        		
        	}
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

        this.Tab00_tabpage1_Div31_btn_Set_Day_onclick = function(obj,e)
        {	
        	this.ds_cntrItem.set_enableevent(false);
        	
        	for(var i = 0 ; i < this.ds_cntrItem.getRowCount() ; i++){
        		this.ds_cntrItem.setColumn(i,'DLV_REQ_DAY',this.div_3.Calendar00.value);
        	}
        	
        	this.ds_cntrItem.set_enableevent(true);
        }

        this.fn_commPrint = function()
        {
        	this.fv_print = true;
        	this.fn_createHtml();
        }

        this.div_1_btn_CntrApv00_onclick = function(obj,e)
        {
        	if(!this.gfn_appCheckWAT(this,this.ds_cntr.getColumn(0,"CNTR_NO"),"CNTR_NO","MM_CNTR","fn_search")) return;
        	
        	var sSvcID = "App_MakeAppForm";
        	var sController = "App_MakeAppForm.do";
        	var sInDatasets = "in_ds=ds_cntr in_dsItem=ds_cntrItem in_dsPay=ds_cntrPay in_dsInsrnc=ds_cntrInsrnc";
        	var sOutDatasets = "ds_return=in_return";
        	var sCallbackFunc = "fn_trCallBack";
        	
        	this.gfn_tran(sSvcID, sController, sInDatasets, sOutDatasets,sCallbackFunc,"GUBUN='AP11CNT'");
        }

        this.div_1_Button00_onclick = function(obj,e)
        {
        	var app_cntr = this.ds_cntr.saveXML();
        	var app_cntrItem     = this.ds_cntrItem.saveXML();    
        	var app_cntrPay = this.ds_cntrPay.saveXML();
        	var app_cntrInsrnc = this.ds_cntrInsrnc.saveXML();
        	var app_doc = app_cntr + "▩" + app_cntrItem + "▩" + app_cntrInsrnc + "▩" + app_cntrPay
        	
        	var sArg = { 
        					agv_doc_id 			: this.ds_cntr.getColumn(0, "APP_DOC_ID")			//품의문서ID
        					,agv_ttl			: "[계약] " + this.ds_cntr.getColumn(0,"TTL")	//품의문서명
        					,agv_ref_key_1		: this.ds_cntr.getColumn(0, "CNTR_NO")			//참조키1
        					,agv_app_doc		: app_doc											//품의문서 데이터셋
        					,agv_aprv_doc_ctgr	: "AP11CNT"											//품의문서유형			
        				};
        	this.gfn_dialog("PopupAppReq", "APPB::PAPPB100P01.xfdl",sArg, "fn_popCallBack");
        }

        this.div_31_grd_cntrItem_oncelldblclick = function(obj,e)
        {
        	if("MTRL_CD" == this.gfn_grdBindColName(obj, obj.getCellPos())) //품목
        	{	
        		var sArg = {
        					mtrl_cd:this.ds_cntrItem.getColumn(e.row, "MTRL_CD")
        					};
        		this.gfn_dialog("PopupComMtrlView", "commPop::PPOPC700P01.xfdl", sArg, "fn_popCallBack");
        	}
        	
        	if(this.div_31.grd_cntrItem.formatid == "VMODE"){
        		if("MTRL_NM" == this.gfn_grdBindColName(obj, obj.getCellPos())) //품목
        		{	
        			var sArg = {
        						mtrl_cd:this.ds_cntrItem.getColumn(e.row, "MTRL_CD")
        						};
        			this.gfn_dialog("PopupComMtrlView", "commPop::PPOPC700P01.xfdl", sArg, "fn_popCallBack");
        		}
        	}
        }

        this.div_1_btn_CntrApv01_onclick = function(obj,e)
        {
        	if(!this.gfn_appCheckWAT(this,this.ds_cntr.getColumn(0,"CNTR_NO"),"CNTR_NO","MM_CNTR","fn_search","Y")) return;
        	
        	if(application.services["svcurl"].url == "https://eps.paradian.com:8001/"){
        		this.WebBrowser00.callMethod("send",application.gv_portal+"/ekp/view/openapi/commonInterface?cmd=appView&token="+application.gv_ssoToken+"&appId="+this.ds_cntr.getColumn(0,"APP_DOC_ID"),"a");
        	}else{
        		this.WebBrowser00.callMethod("send",application.gv_portalDev+"/ekp/view/openapi/commonInterface?cmd=appView&token="+application.gv_ssoToken+"&appId="+this.ds_cntr.getColumn(0,"APP_DOC_ID"),"a");
        	}
        }

        /**
        	@function	div_1_btn_CntrMailSend_onclick()
        	@desc   	계약회람
        */
        this.div_1_btn_CntrMailSend_onclick = function(obj,e)
        {
        	this.fv_print = false;
        	this.fn_createHtml();
        }

        /**
        	@function	fn_createHtml()
        	@desc   	계약 html 생성
        */
        this.fn_createHtml = function()
        {
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
        	
        	this.ds_cntr.set_updatecontrol(true);	
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

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_cntr.addEventHandler("oncolumnchanged", this.ds_cntr_oncolumnchanged, this);
            this.ds_cntrItem.addEventHandler("oncolumnchanged", this.ds_cntrItem_oncolumnchanged, this);
            this.ds_cntrPay.addEventHandler("oncolumnchanged", this.ds_cntrPay_oncolumnchanged, this);
            this.ds_cntrInsrnc.addEventHandler("oncolumnchanged", this.ds_cntrInsrnc_oncolumnchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("oninit", this.form_oninit, this);
            this.div_2.btn_opHead.addEventHandler("onclick", this.fn_fold_onclick, this);
            this.div_21.Tab01.addEventHandler("onchanged", this.div_21_Tab01_onchanged, this);
            this.div_21.Tab01.tabp01.st_Ttl.addEventHandler("onclick", this.div_21_Tab01_tabp01_st_Ttl_onclick, this);
            this.div_21.Tab01.tabp01.ed_cntrDt.addEventHandler("onclick", this.div_21_Tab01_tabp01_ed_cntrDt_onclick, this);
            this.div_21.Tab01.tabp01.edt_ptnrNm.addEventHandler("onkeydown", this.fn_onkeydown_event, this);
            this.div_21.Tab01.tabp01.edt_ptnrNm.addEventHandler("ontextchanged", this.fn_ontextchanged_event, this);
            this.div_21.Tab01.tabp01.btn_ptnr.addEventHandler("onclick", this.btn_ptnr_onclick, this);
            this.div_21.Tab01.tabp01.cbo_cdCrnc.addEventHandler("onitemchanged", this.div_21_Tab01_tabp01_cbo_cdCrnc_onitemchanged, this);
            this.div_21.Tab01.tabp01.cb_cdCntrCndtn.addEventHandler("onitemchanged", this.div_21_Tab01_tabp01_cb_cdCntrCndtn_onitemchanged, this);
            this.div_21.Tab01.tabp02.edt_cntrReqrNm.addEventHandler("onkeydown", this.fn_onkeydown_event, this);
            this.div_21.Tab01.tabp02.edt_cntrReqrNm.addEventHandler("ontextchanged", this.fn_ontextchanged_event, this);
            this.div_21.Tab01.tabp02.btn_cntrUser.addEventHandler("onclick", this.btn_cntrUser_onclick, this);
            this.div_3.btn_opItem.addEventHandler("onclick", this.fn_fold_onclick, this);
            this.div_3.btn_Itm_Del.addEventHandler("onclick", this.div_3_btn_Itm_Del_onclick, this);
            this.div_3.btn_Itm_Add.addEventHandler("onclick", this.div_3_btn_Itm_Add_onclick, this);
            this.div_3.btn_mtrlAdd.addEventHandler("onclick", this.btn_mtrlAdd_onclick, this);
            this.div_3.btn_Set_Day.addEventHandler("onclick", this.Tab00_tabpage1_Div31_btn_Set_Day_onclick, this);
            this.div_4.btn_opItemDetail.addEventHandler("onclick", this.fn_fold_onclick, this);
            this.div_41.Tab01.tabp01.edt_mtrlNm.addEventHandler("ontextchanged", this.fn_ontextchanged_event, this);
            this.div_41.Tab01.tabp01.edt_mtrlNm.addEventHandler("onkeydown", this.fn_onkeydown_event, this);
            this.div_41.Tab01.tabp01.btn_mtrl.addEventHandler("onclick", this.btn_mtrl_onclick, this);
            this.div_41.cbo_itemChg.addEventHandler("onitemchanged", this.div_41_cbo_itemChg_onitemchanged, this);
            this.div_41.btn_cntrItemRowDown.addEventHandler("onclick", this.div_41_btn_cntrItemRowDown_onclick, this);
            this.div_41.btn_cntrItemRowUp.addEventHandler("onclick", this.div_41_btn_cntrItemRowUp_onclick, this);
            this.div_5.btn_oPItem.addEventHandler("onclick", this.fn_fold_onclick, this);
            this.div_5.btn_PayItm_Del.addEventHandler("onclick", this.div_5_btn_PayItm_Del_onclick, this);
            this.div_5.btn_PayItm_Add.addEventHandler("onclick", this.div_5_btn_PayItm_Add_onclick, this);
            this.div_31.grd_cntrItem.addEventHandler("ontextchanged", this.div_31_grd_cntrItem_ontextchanged, this);
            this.div_31.grd_cntrItem.addEventHandler("onkeydown", this.div_31_grd_cntrItem_onkeydown, this);
            this.div_31.grd_cntrItem.addEventHandler("onexpandup", this.div_31_grd_cntrItem_onexpandup, this);
            this.div_31.grd_cntrItem.addEventHandler("oncelldblclick", this.div_31_grd_cntrItem_oncelldblclick, this);
            this.div_6.btn_oPItem.addEventHandler("onclick", this.fn_fold_onclick, this);
            this.div_6.btn_Insrnc_Add.addEventHandler("onclick", this.div_6_btn_Insrnc_Add_onclick, this);
            this.div_6.btn_Insrnc_Del.addEventHandler("onclick", this.div_6_btn_Insrnc_Del_onclick, this);
            this.div_7.btn_oPItem.addEventHandler("onclick", this.fn_fold_onclick, this);
            this.div_7.btn_cntrTemplate_Add.addEventHandler("onclick", this.div_7_btn_tndrItemAdd01_onclick, this);
            this.div_71.wb_daumEditor.addEventHandler("onusernotify", this.div_71_wb_daumEditor_onusernotify, this);
            this.div_1.btn_CntrApv.addEventHandler("onclick", this.div_1_btn_CntrApv_onclick, this);
            this.div_1.btn_CntrReq.addEventHandler("onclick", this.div_1_btn_CntrReq_onclick, this);
            this.div_1.btn_intlCfm.addEventHandler("onclick", this.div_1_btn_intlCfm_onclick, this);
            this.div_1.btn_CntrApv00.addEventHandler("onclick", this.div_1_btn_CntrApv00_onclick, this);
            this.div_1.Button00.addEventHandler("onclick", this.div_1_Button00_onclick, this);
            this.div_1.btn_CntrApv01.addEventHandler("onclick", this.div_1_btn_CntrApv01_onclick, this);
            this.div_1.btn_CntrMailSend.addEventHandler("onclick", this.div_1_btn_CntrMailSend_onclick, this);
            this.cbo_cdCntrStts.addEventHandler("onitemchanged", this.div_21_Tab01_tabp01_cbo_cdCntrStts_onitemchanged, this);
            this.btn_CntrCxl.addEventHandler("onclick", this.div_1_btn_CntrCxl_onclick, this);

        };

        this.loadIncludeScript("PCTRB100N00.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
