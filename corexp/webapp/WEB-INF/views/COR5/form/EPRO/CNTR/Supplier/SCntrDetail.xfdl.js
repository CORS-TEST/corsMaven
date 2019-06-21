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
                this.set_name("BCntrDetail");
                this.set_titletext("계약상세");
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
            obj._setContents("<ColumnInfo><Column id=\"TKEY\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TTL\" type=\"STRING\" size=\"256\"/><Column id=\"LNK_CNTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"LNK_CNTR_TTL\" type=\"STRING\" size=\"256\"/><Column id=\"CHRGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHRGR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TEL\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"FAX\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PTNR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PTNR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PYMT_CNDTN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PYMT_CNDTN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CNTR_CTGR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CNTR_CTGR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CNTR_STTS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CNTR_STTS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CNTR_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CNTR_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DOC_CTGR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DOC_CTGR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CRNC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CRNC\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_REQR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RPRSTV_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_DATA\" type=\"STRING\" size=\"256\"/><Column id=\"CRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_CHGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_TMPL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RMARK\" type=\"STRING\" size=\"256\"/><Column id=\"DFCT_GRNT_PRID\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_BGN_DAY\" size=\"8\" type=\"string\"/><Column id=\"CNTR_END_DAY\" size=\"8\" type=\"string\"/><Column id=\"CNTR_CFM_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PTNR_CNTR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_INTL_CFM\" type=\"STRING\" size=\"256\"/><Column id=\"VAT\" type=\"STRING\" size=\"256\"/><Column id=\"APP_DOC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CRT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_ORGNL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"AMT\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TKEY\" type=\"STRING\" size=\"256\"/><Column id=\"CRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_REQ_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"STR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_CHGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CD_FCTRY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_FCTRY\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_ITEM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CD_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTCH_FILE_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"INT_NTAX\" type=\"STRING\" size=\"256\"/><Column id=\"SL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PR_ITEM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RMARK\" type=\"STRING\" size=\"256\"/><Column id=\"VAT\" type=\"STRING\" size=\"256\"/><Column id=\"UNT_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"TNDR_ITEM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RFQ_REQ_ITEM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PO_ITEM_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"CNTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RMARK\" type=\"STRING\" size=\"256\"/><Column id=\"PYMT_PLN_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"PYMT_RT\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_PAY_PLAN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"PYMT_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"PYMT_AMT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSign", this);
            obj._setContents("<ColumnInfo><Column id=\"SIGN_ORGNL\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCntrOrg", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM10", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCT11", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM13", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCT19", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM15", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCT10", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM11", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCT15", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCT16", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPrint", this);
            obj._setContents("<ColumnInfo><Column id=\"REF_KEY_1\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_2\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM1\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"TBL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_SIGN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompCond00", "absolute", "0", "0", null, "43", "15", null, this);
            obj.set_taborder("0");
            obj.getSetter("objNm").set("컨트롤 박스");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);
            obj = new Edit("maeCntrNo", "absolute", "110", "10", "200", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("1");
            obj.getSetter("objNm").set("문서번호");
            obj.set_readonly("true");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Combo("cboCdDocCtgr", "absolute", "5", "10", "100", "24", null, null, this.divViewCompCond00);
            this.divViewCompCond00.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_innerdataset("@dsCdCM10");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("문서유형");
            obj.set_readonly("true");

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
            obj = new Static("staViewCompLine00", "absolute", "0", "34", null, "33", "0", null, this.divViewCompBody00.Tab01.tabp01);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staTtl", "absolute", "0", "34", "117", "33", null, null, this.divViewCompBody00.Tab01.tabp01);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.style.set_padding("1 0 0 17");
            obj.set_text("<fc v='red'>* </fc>계약명");
            obj.set_usedecorate("true");
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
            obj = new Static("staViewCompLine01", "absolute", "0", "66", null, "33", "0", null, this.divViewCompBody00.Tab01.tabp01);
            obj.set_taborder("79");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "98", null, "33", "0", null, this.divViewCompBody00.Tab01.tabp01);
            obj.set_taborder("80");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine03", "absolute", "0", "130", null, "33", "0", null, this.divViewCompBody00.Tab01.tabp01);
            obj.set_taborder("81");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staPtnrNm", "absolute", "0", "66", "117", "33", null, null, this.divViewCompBody00.Tab01.tabp01);
            obj.set_taborder("82");
            obj.set_text("<fc v='red'>* </fc>협력사");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("1 0 0 17");
            obj.getSetter("objNm").set("협력사");
            obj.getSetter("lbcd").set("");
            obj.set_usedecorate("true");
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staCntrCtgr", "absolute", "0", "98", "117", "33", null, null, this.divViewCompBody00.Tab01.tabp01);
            obj.set_taborder("83");
            obj.set_text("<fc v='red'>* </fc>계약유형");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("1 0 0 17");
            obj.getSetter("objNm").set("계약유형");
            obj.getSetter("lbcd").set("");
            obj.set_usedecorate("true");
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staCntrDt", "absolute", "0", "130", "117", "33", null, null, this.divViewCompBody00.Tab01.tabp01);
            obj.set_taborder("84");
            obj.set_text("<fc v='red'>* </fc>계약일자");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("1 0 0 17");
            obj.getSetter("objNm").set("계약일자");
            obj.getSetter("lbcd").set("");
            obj.set_usedecorate("true");
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Div("divCntrDt", "absolute", "122", "135", "276", "24", null, null, this.divViewCompBody00.Tab01.tabp01);
            obj.set_taborder("85");
            obj.set_text("Div01");
            obj.getSetter("objNm").set("계약일자");
            obj.set_enable("false");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staCdCrnc", "absolute", "460", "130", "101", "33", null, null, this.divViewCompBody00.Tab01.tabp01);
            obj.set_taborder("86");
            obj.set_text("<fc v='red'>* </fc>통화단위");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("1 0 0 17");
            obj.getSetter("objNm").set("예산번호");
            obj.set_usedecorate("true");
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staPymtCndtn", "absolute", "38.24%", "66", "101", "33", null, null, this.divViewCompBody00.Tab01.tabp01);
            obj.set_taborder("87");
            obj.set_text("<fc v='red'>* </fc>지급조건");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("1 0 0 17");
            obj.getSetter("objNm").set("지급계정");
            obj.set_usedecorate("true");
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
            obj.set_text("<fc v='red'>* </fc>계약구분");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("1 0 0 17");
            obj.getSetter("objNm").set("계약구분");
            obj.getSetter("lbcd").set("");
            obj.set_usedecorate("true");
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtTtl", "absolute", "121", "39", null, "24", "25.44%", null, this.divViewCompBody00.Tab01.tabp01);
            obj.set_taborder("94");
            obj.set_readonly("true");
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Combo("cboCntrType", "absolute", "85.04%", "39", null, "24", "51", null, this.divViewCompBody00.Tab01.tabp01);
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("95");
            obj.set_innerdataset("@dsCdCT19");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_value("null");
            obj.set_readonly("true");
            obj = new Edit("edtPtnrId", "absolute", "121", "70", null, "24", "958", null, this.divViewCompBody00.Tab01.tabp01);
            obj.set_taborder("96");
            obj.set_readonly("true");
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtPtnrNm", "absolute", "20.78%", "70", null, "24", "64.84%", null, this.divViewCompBody00.Tab01.tabp01);
            obj.set_taborder("97");
            obj.set_readonly("true");
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Combo("cboCntrCtgr", "absolute", "121", "102", "125", "24", null, null, this.divViewCompBody00.Tab01.tabp01);
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("98");
            obj.set_innerdataset("@dsCdCT11");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_codecolumn("CD_ID");
            obj.set_readonly("true");
            obj = new Combo("cboPymtCndtn", "absolute", "47.05%", "70", "131", "24", null, null, this.divViewCompBody00.Tab01.tabp01);
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("99");
            obj.set_innerdataset("@dsCdCM13");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_readonly("true");
            obj = new Combo("cboCdCrnc", "absolute", "566", "134", "131", "24", null, null, this.divViewCompBody00.Tab01.tabp01);
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("100");
            obj.set_innerdataset("@dsCdCM15");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_readonly("true");
            obj = new Combo("cboCntrStts", "absolute", "769", "134", "128", "24", null, null, this.divViewCompBody00.Tab01.tabp01);
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("101");
            obj.set_innerdataset("@dsCdCT10");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_readonly("true");
            obj = new Edit("edtGrntPrid", "absolute", "566", "102", null, "24", "25.52%", null, this.divViewCompBody00.Tab01.tabp01);
            obj.set_taborder("102");
            obj.set_readonly("true");
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj = new MaskEdit("mdeCntrSum", "absolute", "85.12%", "70", null, "24", "0.42%", null, this.divViewCompBody00.Tab01.tabp01);
            obj.set_taborder("103");
            obj.set_mask("#,###");
            obj.set_readonly("true");
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj = new MaskEdit("medCntrAmt", "absolute", "85.12%", "102", null, "24", "0.58%", null, this.divViewCompBody00.Tab01.tabp01);
            obj.set_taborder("104");
            obj.set_mask("#,###");
            obj.set_readonly("true");
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj = new MaskEdit("medVat", "absolute", "85.12%", "134", null, "24", "0.67%", null, this.divViewCompBody00.Tab01.tabp01);
            obj.set_taborder("105");
            obj.set_mask("#,###");
            obj.set_readonly("true");
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
            obj = new Static("staViewCompLine00", "absolute", "0", "34", null, "33", "0", null, this.divViewCompBody00.Tab01.tabp02);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody00.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Static("staCntrChrgr", "absolute", "0", "34", "170", "33", null, null, this.divViewCompBody00.Tab01.tabp02);
            obj.set_taborder("15");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_Label");
            this.divViewCompBody00.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "66", null, "33", "0", null, this.divViewCompBody00.Tab01.tabp02);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody00.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Static("staTel", "absolute", "0", "66", "170", "33", null, null, this.divViewCompBody00.Tab01.tabp02);
            obj.set_taborder("17");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.divViewCompBody00.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Edit("edtCntrChrgrId", "absolute", "175", "38", "100", "24", null, null, this.divViewCompBody00.Tab01.tabp02);
            obj.set_taborder("18");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("objNm").set("계약담당자ID");
            this.divViewCompBody00.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Edit("edtCntrChrgrNm", "absolute", "280", "38", null, "24", "55.94%", null, this.divViewCompBody00.Tab01.tabp02);
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

            obj = new Div("divViewCompBody02", "absolute", "0", "891", null, "200", "15", null, this);
            obj.set_taborder("4");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("DIV-대상업체 상세");
            this.addChild(obj.name, obj);
            obj = new Grid("grdCntrPay", "absolute", "0", "0", null, null, "0", "0", this.divViewCompBody02);
            obj.set_taborder("0");
            obj.set_binddataset("dsCntrPay");
            obj.getSetter("objNm").set("지급계획 그리드");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"VMODE\"><Columns><Column size=\"86\"/><Column size=\"121\"/><Column size=\"120\"/><Column size=\"500\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" text=\"회차\"/><Cell col=\"1\" text=\"지급율\"/><Cell col=\"2\" text=\"지급금액\"/><Cell col=\"3\" text=\"지급조건\"/></Band><Band id=\"body\" style=\"cellpadding:2 2 2 2;\"><Cell displaytype=\"normal\" edittype=\"none\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:PYMT_ORDR\" editdisplay=\"edit\"/><Cell col=\"1\" celltype=\"none\" displaytype=\"normal\" edittype=\"none\" editfilter=\"number\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:PYMT_RT\" mask=\"###\" maskchar=\" \" editlimit=\"-1\" editautoselect=\"false\" editdisplay=\"edit\" suppress=\"0\" autosizecol=\"default\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:PYMT_AMT\" mask=\"9,999.###\" maskchar=\" \" editautoselect=\"true\" editdisplay=\"edit\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:RMARK\" editdisplay=\"edit\"/></Band></Format></Formats>");
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
            obj._setContents("<Formats><Format id=\"VMODE\"><Columns><Column size=\"300\"/><Column size=\"70\"/><Column size=\"55\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"373\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" text=\"품목명\"/><Cell col=\"1\" displaytype=\"normal\" text=\"수량\"/><Cell col=\"2\" text=\"단위\"/><Cell col=\"3\" displaytype=\"normal\" text=\"단가\"/><Cell col=\"4\" text=\"공급가\"/><Cell col=\"5\" text=\"부가세\"/><Cell col=\"6\" text=\"비고\"/></Band><Band id=\"body\" style=\"cellpadding:2 2 2 2;\"><Cell edittype=\"none\" style=\"align:left;\" cssclass=\"cell_link\" text=\"bind:MTRL_NM\" editdisplay=\"edit\" expandshow=\"hide\" calendardisplay=\"edit\" tooltiptext=\"bind:MTRL_NM\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:QTY\" mask=\"#,##0.00\" editautoselect=\"true\" editdisplay=\"edit\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"bind:CD_UNIT_NM\" combodisplay=\"edit\" calendardisplay=\"edit\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:UNT_PRICE\" mask=\"#,##0.00\" editclipmode=\"includespace\" editautoselect=\"false\" editdisplay=\"edit\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:AMT\" mask=\"#,##0\" editautoselect=\"true\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:VAT\" mask=\"#,##0\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" style=\"align:left;\" text=\"bind:RMARK\" editlimit=\"200\" editdisplay=\"edit\"/></Band></Format></Formats>");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Div("div_grdBottom", "absolute", "0%", null, null, "28", "0%", "10", this.divViewCompBody01);
            obj.set_taborder("3");
            obj.set_visible("false");
            obj.set_url("");
            this.divViewCompBody01.addChild(obj.name, obj);

            obj = new Div("divViewCompBody03", "absolute", "0", "1140", null, "200", "10", null, this);
            obj.set_taborder("5");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("DIV-대상업체 상세");
            this.addChild(obj.name, obj);
            obj = new Grid("grdInsrnc", "absolute", "0%", "0", null, null, "0%", "0", this.divViewCompBody03);
            obj.set_taborder("0");
            obj.set_binddataset("dsCntrInsrnc");
            obj.getSetter("objNm").set("품목 그리드");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"VMODE\"><Columns><Column size=\"115\"/><Column size=\"187\"/><Column size=\"304\"/><Column size=\"306\"/><Column size=\"292\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" text=\"회차\"/><Cell col=\"1\" text=\"이행보증구분\"/><Cell col=\"2\" text=\"보증유형\"/><Cell col=\"3\" text=\"보증금율\"/><Cell col=\"4\" text=\"보증금액\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:PYMT_ORDR\" combodisplay=\"edit\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:CD_GRNT_INSRNC_TYPE_NM\" combodisplay=\"edit\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:CD_GRNT_MTHD_NM\" combodisplay=\"edit\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:GRNT_RT\" mask=\"9,999.###\" maskchar=\" \" editdisplay=\"edit\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:GRNT_AMT\" mask=\"9,999.###\" maskchar=\" \" editdisplay=\"edit\"/></Band></Format></Formats>");
            this.divViewCompBody03.addChild(obj.name, obj);

            obj = new Div("divViewCompBody04", "absolute", "0", "1389", null, "516", "15", null, this);
            obj.set_taborder("6");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new WebBrowser("WebBrowser00", "absolute", "0", "3", null, "506", "0", null, this.divViewCompBody04);
            obj.set_taborder("0");
            this.divViewCompBody04.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser_Sign", "absolute", "16.56%", "11", null, "0", "40.57%", null, this);
            obj.set_taborder("76");
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

            obj = new Div("divViewCompTitle01", "absolute", "0", "862", null, "24", "15", null, this);
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

            obj = new Div("divViewCompTitle02", "absolute", "0", "1111", null, "24", "15", null, this);
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

            obj = new Div("divViewCompTitle03", "absolute", "0", "1360", null, "24", "10", null, this);
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

            obj = new Div("divViewCompBody05", "absolute", "0", "641", null, "201", "15", null, this);
            obj.set_taborder("96");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("DIV-품목 상세 - 텝 입력");
            this.addChild(obj.name, obj);
            obj = new Tab("Tab01", "absolute", "0", "34", null, "189", "0%", null, this.divViewCompBody05);
            obj.set_taborder("4");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.getSetter("objNm").set("입력탭");
            this.divViewCompBody05.addChild(obj.name, obj);
            obj = new Tabpage("tabp01", this.divViewCompBody05.Tab01);
            obj.set_text("상세정보");
            obj.style.set_background("white");
            obj.set_scrollbars("none");
            this.divViewCompBody05.Tab01.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label05", "absolute", "0%", "10", null, "103", "0%", null, this.divViewCompBody05.Tab01.tabp01);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.divViewCompBody05.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "34", null, "33", "0", null, this.divViewCompBody05.Tab01.tabp01);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody05.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Div("divViewCompTitle00", "absolute", "0", "5", null, "24", "10", null, this.divViewCompBody05.Tab01.tabp01);
            obj.set_taborder("67");
            obj.style.set_padding("1 0 0 17");
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            this.divViewCompBody05.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", null, "255", "24", null, "0", this.divViewCompBody05.Tab01.tabp01.divViewCompTitle00);
            obj.set_taborder("0");
            obj.set_text("상세정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 2 17");
            this.divViewCompBody05.Tab01.tabp01.divViewCompTitle00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "66", null, "33", "0", null, this.divViewCompBody05.Tab01.tabp01);
            obj.set_taborder("68");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody05.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "98", null, "33", "0", null, this.divViewCompBody05.Tab01.tabp01);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody05.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staMtrlGrp", "absolute", "0", "34", "117", "33", null, null, this.divViewCompBody05.Tab01.tabp01);
            obj.set_taborder("70");
            obj.set_text("품목그룹");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("품목그룹");
            this.divViewCompBody05.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtSrcGrp", "absolute", "122", "38", "157", "24", null, null, this.divViewCompBody05.Tab01.tabp01);
            obj.set_taborder("71");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.getSetter("objNm").set("소싱그룹코드");
            this.divViewCompBody05.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtSrcGrpNm", "absolute", "284", "38", "500", "24", null, null, this.divViewCompBody05.Tab01.tabp01);
            obj.set_taborder("72");
            obj.set_readonly("true");
            obj.style.setStyleValue("selectbackground", "disabled", "transparent");
            obj.getSetter("objNm").set("소싱그룹명");
            this.divViewCompBody05.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staMtrlCd", "absolute", "0", "66", "117", "33", null, null, this.divViewCompBody05.Tab01.tabp01);
            obj.set_taborder("73");
            obj.set_text("<fc v='red'>* </fc>품목코드");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("bold 10 malgun gothic");
            this.divViewCompBody05.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtMtrlCd", "absolute", "122", "70", "157", "24", null, null, this.divViewCompBody05.Tab01.tabp01);
            obj.set_taborder("74");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_default_r");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("objNm").set("품목코드");
            this.divViewCompBody05.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtMtrlNm", "absolute", "284", "70", "500", "24", null, null, this.divViewCompBody05.Tab01.tabp01);
            obj.set_taborder("75");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_default");
            obj.style.set_selectbackground("black");
            obj.getSetter("objNm").set("품목명");
            obj.set_readonly("true");
            this.divViewCompBody05.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staQtyUnit", "absolute", "0", "98", "117", "33", null, null, this.divViewCompBody05.Tab01.tabp01);
            obj.set_taborder("76");
            obj.set_text("<fc v='red'>* </fc>수량/단위");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Label");
            this.divViewCompBody05.Tab01.tabp01.addChild(obj.name, obj);
            obj = new MaskEdit("maeQty", "absolute", "122", "102", "157", "24", null, null, this.divViewCompBody05.Tab01.tabp01);
            obj.set_taborder("77");
            obj.set_mask("9,999.###");
            obj.set_autoselect("true");
            obj.getSetter("objNm").set("수량");
            obj.set_readonly("true");
            this.divViewCompBody05.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Combo("cboCdUnit", "absolute", "284", "102", "91", "24", null, null, this.divViewCompBody05.Tab01.tabp01);
            this.divViewCompBody05.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("78");
            obj.set_innerdataset("@dsCdCM11");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("단위");
            obj.set_readonly("true");
            obj = new Static("staPrice", "absolute", "380", "98", "117", "33", null, null, this.divViewCompBody05.Tab01.tabp01);
            obj.set_taborder("79");
            obj.set_text("<fc v='red'>* </fc>단가");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Label");
            this.divViewCompBody05.Tab01.tabp01.addChild(obj.name, obj);
            obj = new MaskEdit("maeUntPrice", "absolute", "502", "102", "282", "24", null, null, this.divViewCompBody05.Tab01.tabp01);
            obj.set_taborder("80");
            obj.set_mask("9,999.###");
            obj.set_autoselect("true");
            obj.getSetter("objNm").set("단가");
            obj.set_readonly("true");
            this.divViewCompBody05.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staDlvReqDt", "absolute", "790", "66", "117", "33", null, null, this.divViewCompBody05.Tab01.tabp01);
            obj.set_taborder("81");
            obj.set_text("납품요청일자");
            obj.set_cssclass("sta_WF_Label");
            this.divViewCompBody05.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staAmt", "absolute", "790", "98", "117", "33", null, null, this.divViewCompBody05.Tab01.tabp01);
            obj.set_taborder("82");
            obj.set_text("금액");
            obj.set_cssclass("sta_WF_Label");
            this.divViewCompBody05.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Calendar("calDlvReqDt", "absolute", "912", "70", "125", "24", null, null, this.divViewCompBody05.Tab01.tabp01);
            this.divViewCompBody05.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("83");
            obj.set_dateformat("yyyy.MM.dd");
            obj.set_editformat("yyyy.MM.dd");
            obj.getSetter("objNm").set("상세 납품요청일자");
            obj.set_readonly("true");
            obj = new MaskEdit("maeAmt", "absolute", "912", "102", null, "24", "5", null, this.divViewCompBody05.Tab01.tabp01);
            obj.set_taborder("84");
            obj.set_readonly("true");
            obj.set_mask(",");
            obj.getSetter("objNm").set("금액");
            this.divViewCompBody05.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Tabpage("tabp04", this.divViewCompBody05.Tab01);
            obj.set_text("비고");
            this.divViewCompBody05.Tab01.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label05", "absolute", "0%", "10", null, "97", "0%", null, this.divViewCompBody05.Tab01.tabp04);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.divViewCompBody05.Tab01.tabp04.addChild(obj.name, obj);
            obj = new Div("divViewCompTitle00", "absolute", "0", "5", null, "24", "10", null, this.divViewCompBody05.Tab01.tabp04);
            obj.set_taborder("5");
            obj.style.set_padding("1 0 0 17");
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            this.divViewCompBody05.Tab01.tabp04.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", null, "255", "24", null, "0", this.divViewCompBody05.Tab01.tabp04.divViewCompTitle00);
            obj.set_taborder("0");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 2 17");
            this.divViewCompBody05.Tab01.tabp04.divViewCompTitle00.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label01", "absolute", "0", "34", null, "97", "0", null, this.divViewCompBody05.Tab01.tabp04);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody05.Tab01.tabp04.addChild(obj.name, obj);
            obj = new TextArea("ta_rmark", "absolute", "122", "38", null, "89", "5", null, this.divViewCompBody05.Tab01.tabp04);
            obj.set_taborder("7");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("비고");
            this.divViewCompBody05.Tab01.tabp04.addChild(obj.name, obj);
            obj = new Edit("edtItmNo", "absolute", "0", "0", "100", "24", null, null, this.divViewCompBody05);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("objNm").set("품목코드");
            this.divViewCompBody05.addChild(obj.name, obj);
            obj = new Combo("cboItem", "absolute", "101", "0", "623", "24", null, null, this.divViewCompBody05);
            this.divViewCompBody05.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_innerdataset("@dsCntrItem");
            obj.set_codecolumn("ITM_NO");
            obj.set_datacolumn("MTRL_NM");
            obj.getSetter("objNm").set("계약품목변경");
            obj = new Button("btnCntrItemRowDown", "absolute", "749", "1", "26", "24", null, null, this.divViewCompBody05);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_ListDown");
            obj.getSetter("objNm").set("Down");
            this.divViewCompBody05.addChild(obj.name, obj);
            obj = new Button("btnCntrItemRowUp", "absolute", "726", "1", "24", "24", null, null, this.divViewCompBody05);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_ListUp");
            obj.getSetter("objNm").set("Up");
            this.divViewCompBody05.addChild(obj.name, obj);

            obj = new Div("divViewCompTitle04", "absolute", "0", "612", null, "24", "15", null, this);
            obj.set_taborder("97");
            obj.style.set_padding("1 0 0 17");
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", null, "255", "24", null, "0", this.divViewCompTitle04);
            obj.set_taborder("0");
            obj.set_text("품목 상세정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 2 17");
            this.divViewCompTitle04.addChild(obj.name, obj);


            
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
            obj = new Layout("default", "", 993, 139, this.divViewCompBody05.Tab01.tabp01.divViewCompTitle00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("67");
            		p.style.set_padding("1 0 0 17");
            		p.getSetter("objNm").set("DIV-평가서 타이틀");

            	}
            );
            this.divViewCompBody05.Tab01.tabp01.divViewCompTitle00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.divViewCompBody05.Tab01.tabp01,
            	//-- Layout function
            	function(p) {
            		p.set_text("상세정보");
            		p.style.set_background("white");
            		p.set_scrollbars("none");

            	}
            );
            this.divViewCompBody05.Tab01.tabp01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompBody05.Tab01.tabp04.divViewCompTitle00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.style.set_padding("1 0 0 17");
            		p.getSetter("objNm").set("DIV-평가서 타이틀");

            	}
            );
            this.divViewCompBody05.Tab01.tabp04.divViewCompTitle00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.divViewCompBody05.Tab01.tabp04,
            	//-- Layout function
            	function(p) {
            		p.set_text("비고");

            	}
            );
            this.divViewCompBody05.Tab01.tabp04.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 201, this.divViewCompBody05,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("96");
            		p.set_scrollbars("none");
            		p.getSetter("objNm").set("DIV-품목 상세 - 텝 입력");

            	}
            );
            this.divViewCompBody05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompTitle04,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("97");
            		p.style.set_padding("1 0 0 17");
            		p.getSetter("objNm").set("DIV-평가서 타이틀");

            	}
            );
            this.divViewCompTitle04.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1220, 711, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("FrmTemplate100");
            		p.set_titletext("계약상세");

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
            obj = new BindItem("item14","divViewCompBody00.Tab01.tabp02.edtCntrChrgrId","value","dsCntr","CHRGR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","divViewCompBody00.Tab01.tabp02.edtCntrChrgrNm","value","dsCntr","CHRGR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","divViewCompBody00.Tab01.tabp02.edtTel","value","dsCntr","TEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","divViewCompBody00.Tab01.tabp02.edtEmail","value","dsCntr","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","divViewCompBody00.Tab01.tabp02.edtFax","value","dsCntr","FAX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","divViewCompBody00.Tab01.tabp03.txaRmark","value","dsCntr","RMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item42","divViewCompBody05.cboItem","value","dsCntrItem","ITM_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item43","divViewCompBody05.edtItmNo","value","dsCntrItem","ITM_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","divViewCompBody05.Tab01.tabp01.edtSrcGrp","value","dsCntrItem","MTRL_GRP_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","divViewCompBody05.Tab01.tabp01.edtSrcGrpNm","value","dsCntrItem","MTRL_GRP_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","divViewCompBody05.Tab01.tabp01.edtMtrlCd","value","dsCntrItem","MTRL_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","divViewCompBody05.Tab01.tabp01.edtMtrlNm","value","dsCntrItem","MTRL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","divViewCompBody05.Tab01.tabp01.maeQty","value","dsCntrItem","QTY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","divViewCompBody05.Tab01.tabp01.cboCdUnit","value","dsCntrItem","CD_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","divViewCompBody05.Tab01.tabp01.maeUntPrice","value","dsCntrItem","UNT_PRICE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","divViewCompBody05.Tab01.tabp01.maeAmt","value","dsCntrItem","AMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","divViewCompBody05.Tab01.tabp01.calDlvReqDt","value","dsCntrItem","DLV_REQ_DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","divViewCompBody05.Tab01.tabp04.ta_rmark","value","dsCntrItem","RMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("maeCntrNoVi","divViewCompCond00.maeCntrNo","visible","dsObjBindVi","maeCntrNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("maeCntrNoEn","divViewCompCond00.maeCntrNo","readonly","dsObjBindEn","maeCntrNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboCdDocCtgrVi","divViewCompCond00.cboCdDocCtgr","visible","dsObjBindVi","cboCdDocCtgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboCdDocCtgrEn","divViewCompCond00.cboCdDocCtgr","readonly","dsObjBindEn","cboCdDocCtgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab01Vi","divViewCompBody00.Tab01","visible","dsObjBindVi","Tab01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab01En","divViewCompBody00.Tab01","enable","dsObjBindEn","Tab01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp01Vi","divViewCompBody00.Tab01.tabp01","visible","dsObjBindVi","tabp01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp01En","divViewCompBody00.Tab01.tabp01","enable","dsObjBindEn","tabp01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTtlVi","divViewCompBody00.Tab01.tabp01.staTtl","visible","dsObjBindVi","staTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTtlEn","divViewCompBody00.Tab01.tabp01.staTtl","enable","dsObjBindEn","staTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPtnrNmVi","divViewCompBody00.Tab01.tabp01.staPtnrNm","visible","dsObjBindVi","staPtnrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPtnrNmEn","divViewCompBody00.Tab01.tabp01.staPtnrNm","enable","dsObjBindEn","staPtnrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCntrCtgrVi","divViewCompBody00.Tab01.tabp01.staCntrCtgr","visible","dsObjBindVi","staCntrCtgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCntrCtgrEn","divViewCompBody00.Tab01.tabp01.staCntrCtgr","enable","dsObjBindEn","staCntrCtgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCntrDtVi","divViewCompBody00.Tab01.tabp01.staCntrDt","visible","dsObjBindVi","staCntrDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCntrDtEn","divViewCompBody00.Tab01.tabp01.staCntrDt","enable","dsObjBindEn","staCntrDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divCntrDtVi","divViewCompBody00.Tab01.tabp01.divCntrDt","visible","dsObjBindVi","divCntrDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divCntrDtEn","divViewCompBody00.Tab01.tabp01.divCntrDt","enable","dsObjBindEn","divCntrDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCdCrncVi","divViewCompBody00.Tab01.tabp01.staCdCrnc","visible","dsObjBindVi","staCdCrnc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCdCrncEn","divViewCompBody00.Tab01.tabp01.staCdCrnc","enable","dsObjBindEn","staCdCrnc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPymtCndtnVi","divViewCompBody00.Tab01.tabp01.staPymtCndtn","visible","dsObjBindVi","staPymtCndtn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPymtCndtnEn","divViewCompBody00.Tab01.tabp01.staPymtCndtn","enable","dsObjBindEn","staPymtCndtn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staGrntPridVi","divViewCompBody00.Tab01.tabp01.staGrntPrid","visible","dsObjBindVi","staGrntPrid");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staGrntPridEn","divViewCompBody00.Tab01.tabp01.staGrntPrid","enable","dsObjBindEn","staGrntPrid");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCntrSttsVi","divViewCompBody00.Tab01.tabp01.staCntrStts","visible","dsObjBindVi","staCntrStts");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCntrSttsEn","divViewCompBody00.Tab01.tabp01.staCntrStts","enable","dsObjBindEn","staCntrStts");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staVatVi","divViewCompBody00.Tab01.tabp01.staVat","visible","dsObjBindVi","staVat");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staVatEn","divViewCompBody00.Tab01.tabp01.staVat","enable","dsObjBindEn","staVat");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCntrAmtVi","divViewCompBody00.Tab01.tabp01.staCntrAmt","visible","dsObjBindVi","staCntrAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCntrAmtEn","divViewCompBody00.Tab01.tabp01.staCntrAmt","enable","dsObjBindEn","staCntrAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCntrSumVi","divViewCompBody00.Tab01.tabp01.staCntrSum","visible","dsObjBindVi","staCntrSum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCntrSumEn","divViewCompBody00.Tab01.tabp01.staCntrSum","enable","dsObjBindEn","staCntrSum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCntrTypeVi","divViewCompBody00.Tab01.tabp01.staCntrType","visible","dsObjBindVi","staCntrType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCntrTypeEn","divViewCompBody00.Tab01.tabp01.staCntrType","enable","dsObjBindEn","staCntrType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTtlVi","divViewCompBody00.Tab01.tabp01.edtTtl","visible","dsObjBindVi","edtTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTtlEn","divViewCompBody00.Tab01.tabp01.edtTtl","readonly","dsObjBindEn","edtTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboCntrTypeVi","divViewCompBody00.Tab01.tabp01.cboCntrType","visible","dsObjBindVi","cboCntrType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboCntrTypeEn","divViewCompBody00.Tab01.tabp01.cboCntrType","readonly","dsObjBindEn","cboCntrType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPtnrIdVi","divViewCompBody00.Tab01.tabp01.edtPtnrId","visible","dsObjBindVi","edtPtnrId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPtnrIdEn","divViewCompBody00.Tab01.tabp01.edtPtnrId","readonly","dsObjBindEn","edtPtnrId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPtnrNmVi","divViewCompBody00.Tab01.tabp01.edtPtnrNm","visible","dsObjBindVi","edtPtnrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPtnrNmEn","divViewCompBody00.Tab01.tabp01.edtPtnrNm","readonly","dsObjBindEn","edtPtnrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboCntrCtgrVi","divViewCompBody00.Tab01.tabp01.cboCntrCtgr","visible","dsObjBindVi","cboCntrCtgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboCntrCtgrEn","divViewCompBody00.Tab01.tabp01.cboCntrCtgr","readonly","dsObjBindEn","cboCntrCtgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboPymtCndtnVi","divViewCompBody00.Tab01.tabp01.cboPymtCndtn","visible","dsObjBindVi","cboPymtCndtn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboPymtCndtnEn","divViewCompBody00.Tab01.tabp01.cboPymtCndtn","readonly","dsObjBindEn","cboPymtCndtn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboCdCrncVi","divViewCompBody00.Tab01.tabp01.cboCdCrnc","visible","dsObjBindVi","cboCdCrnc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboCdCrncEn","divViewCompBody00.Tab01.tabp01.cboCdCrnc","readonly","dsObjBindEn","cboCdCrnc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboCntrSttsVi","divViewCompBody00.Tab01.tabp01.cboCntrStts","visible","dsObjBindVi","cboCntrStts");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboCntrSttsEn","divViewCompBody00.Tab01.tabp01.cboCntrStts","readonly","dsObjBindEn","cboCntrStts");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtGrntPridVi","divViewCompBody00.Tab01.tabp01.edtGrntPrid","visible","dsObjBindVi","edtGrntPrid");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtGrntPridEn","divViewCompBody00.Tab01.tabp01.edtGrntPrid","readonly","dsObjBindEn","edtGrntPrid");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mdeCntrSumVi","divViewCompBody00.Tab01.tabp01.mdeCntrSum","visible","dsObjBindVi","mdeCntrSum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mdeCntrSumEn","divViewCompBody00.Tab01.tabp01.mdeCntrSum","readonly","dsObjBindEn","mdeCntrSum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medCntrAmtVi","divViewCompBody00.Tab01.tabp01.medCntrAmt","visible","dsObjBindVi","medCntrAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medCntrAmtEn","divViewCompBody00.Tab01.tabp01.medCntrAmt","readonly","dsObjBindEn","medCntrAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medVatVi","divViewCompBody00.Tab01.tabp01.medVat","visible","dsObjBindVi","medVat");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medVatEn","divViewCompBody00.Tab01.tabp01.medVat","readonly","dsObjBindEn","medVat");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp02Vi","divViewCompBody00.Tab01.tabp02","visible","dsObjBindVi","tabp02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp02En","divViewCompBody00.Tab01.tabp02","enable","dsObjBindEn","tabp02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sta_WFDA_Label00Vi","divViewCompBody00.Tab01.tabp02.sta_WFDA_Label00","visible","dsObjBindVi","sta_WFDA_Label00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sta_WFDA_Label00En","divViewCompBody00.Tab01.tabp02.sta_WFDA_Label00","enable","dsObjBindEn","sta_WFDA_Label00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCntrChrgrVi","divViewCompBody00.Tab01.tabp02.staCntrChrgr","visible","dsObjBindVi","staCntrChrgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCntrChrgrEn","divViewCompBody00.Tab01.tabp02.staCntrChrgr","enable","dsObjBindEn","staCntrChrgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTelVi","divViewCompBody00.Tab01.tabp02.staTel","visible","dsObjBindVi","staTel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTelEn","divViewCompBody00.Tab01.tabp02.staTel","enable","dsObjBindEn","staTel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCntrChrgrIdVi","divViewCompBody00.Tab01.tabp02.edtCntrChrgrId","visible","dsObjBindVi","edtCntrChrgrId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCntrChrgrIdEn","divViewCompBody00.Tab01.tabp02.edtCntrChrgrId","readonly","dsObjBindEn","edtCntrChrgrId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCntrChrgrNmVi","divViewCompBody00.Tab01.tabp02.edtCntrChrgrNm","visible","dsObjBindVi","edtCntrChrgrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCntrChrgrNmEn","divViewCompBody00.Tab01.tabp02.edtCntrChrgrNm","readonly","dsObjBindEn","edtCntrChrgrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTelVi","divViewCompBody00.Tab01.tabp02.edtTel","visible","dsObjBindVi","edtTel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTelEn","divViewCompBody00.Tab01.tabp02.edtTel","readonly","dsObjBindEn","edtTel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staEmailVi","divViewCompBody00.Tab01.tabp02.staEmail","visible","dsObjBindVi","staEmail");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staEmailEn","divViewCompBody00.Tab01.tabp02.staEmail","enable","dsObjBindEn","staEmail");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staFaxVi","divViewCompBody00.Tab01.tabp02.staFax","visible","dsObjBindVi","staFax");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staFaxEn","divViewCompBody00.Tab01.tabp02.staFax","enable","dsObjBindEn","staFax");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtEmailVi","divViewCompBody00.Tab01.tabp02.edtEmail","visible","dsObjBindVi","edtEmail");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtEmailEn","divViewCompBody00.Tab01.tabp02.edtEmail","readonly","dsObjBindEn","edtEmail");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtFaxVi","divViewCompBody00.Tab01.tabp02.edtFax","visible","dsObjBindVi","edtFax");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtFaxEn","divViewCompBody00.Tab01.tabp02.edtFax","readonly","dsObjBindEn","edtFax");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp03Vi","divViewCompBody00.Tab01.tabp03","visible","dsObjBindVi","tabp03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp03En","divViewCompBody00.Tab01.tabp03","enable","dsObjBindEn","tabp03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txaRmarkVi","divViewCompBody00.Tab01.tabp03.txaRmark","visible","dsObjBindVi","txaRmark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txaRmarkEn","divViewCompBody00.Tab01.tabp03.txaRmark","readonly","dsObjBindEn","txaRmark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_grdBottomVi","divViewCompBody01.div_grdBottom","visible","dsObjBindVi","div_grdBottom");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_grdBottomEn","divViewCompBody01.div_grdBottom","enable","dsObjBindEn","div_grdBottom");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("WebBrowser00Vi","divViewCompBody04.WebBrowser00","visible","dsObjBindVi","WebBrowser00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("WebBrowser00En","divViewCompBody04.WebBrowser00","enable","dsObjBindEn","WebBrowser00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("WebBrowser_SignVi","WebBrowser_Sign","visible","dsObjBindVi","WebBrowser_Sign");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("WebBrowser_SignEn","WebBrowser_Sign","enable","dsObjBindEn","WebBrowser_Sign");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab01_3Vi","divViewCompBody05.Tab01","visible","dsObjBindVi","Tab01_3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab01_3En","divViewCompBody05.Tab01","enable","dsObjBindEn","Tab01_3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp01_4Vi","divViewCompBody05.Tab01.tabp01","visible","dsObjBindVi","tabp01_4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp01_4En","divViewCompBody05.Tab01.tabp01","enable","dsObjBindEn","tabp01_4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sta_WFDA_Label05Vi","divViewCompBody05.Tab01.tabp01.sta_WFDA_Label05","visible","dsObjBindVi","sta_WFDA_Label05");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sta_WFDA_Label05En","divViewCompBody05.Tab01.tabp01.sta_WFDA_Label05","enable","dsObjBindEn","sta_WFDA_Label05");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staMtrlGrpVi","divViewCompBody05.Tab01.tabp01.staMtrlGrp","visible","dsObjBindVi","staMtrlGrp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staMtrlGrpEn","divViewCompBody05.Tab01.tabp01.staMtrlGrp","enable","dsObjBindEn","staMtrlGrp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSrcGrpVi","divViewCompBody05.Tab01.tabp01.edtSrcGrp","visible","dsObjBindVi","edtSrcGrp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSrcGrpEn","divViewCompBody05.Tab01.tabp01.edtSrcGrp","readonly","dsObjBindEn","edtSrcGrp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSrcGrpNmVi","divViewCompBody05.Tab01.tabp01.edtSrcGrpNm","visible","dsObjBindVi","edtSrcGrpNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSrcGrpNmEn","divViewCompBody05.Tab01.tabp01.edtSrcGrpNm","readonly","dsObjBindEn","edtSrcGrpNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staMtrlCdVi","divViewCompBody05.Tab01.tabp01.staMtrlCd","visible","dsObjBindVi","staMtrlCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staMtrlCdEn","divViewCompBody05.Tab01.tabp01.staMtrlCd","enable","dsObjBindEn","staMtrlCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtMtrlCdVi","divViewCompBody05.Tab01.tabp01.edtMtrlCd","visible","dsObjBindVi","edtMtrlCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtMtrlCdEn","divViewCompBody05.Tab01.tabp01.edtMtrlCd","readonly","dsObjBindEn","edtMtrlCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtMtrlNmVi","divViewCompBody05.Tab01.tabp01.edtMtrlNm","visible","dsObjBindVi","edtMtrlNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtMtrlNmEn","divViewCompBody05.Tab01.tabp01.edtMtrlNm","readonly","dsObjBindEn","edtMtrlNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staQtyUnitVi","divViewCompBody05.Tab01.tabp01.staQtyUnit","visible","dsObjBindVi","staQtyUnit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staQtyUnitEn","divViewCompBody05.Tab01.tabp01.staQtyUnit","enable","dsObjBindEn","staQtyUnit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("maeQtyVi","divViewCompBody05.Tab01.tabp01.maeQty","visible","dsObjBindVi","maeQty");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("maeQtyEn","divViewCompBody05.Tab01.tabp01.maeQty","readonly","dsObjBindEn","maeQty");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboCdUnitVi","divViewCompBody05.Tab01.tabp01.cboCdUnit","visible","dsObjBindVi","cboCdUnit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboCdUnitEn","divViewCompBody05.Tab01.tabp01.cboCdUnit","readonly","dsObjBindEn","cboCdUnit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPriceVi","divViewCompBody05.Tab01.tabp01.staPrice","visible","dsObjBindVi","staPrice");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPriceEn","divViewCompBody05.Tab01.tabp01.staPrice","enable","dsObjBindEn","staPrice");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("maeUntPriceVi","divViewCompBody05.Tab01.tabp01.maeUntPrice","visible","dsObjBindVi","maeUntPrice");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("maeUntPriceEn","divViewCompBody05.Tab01.tabp01.maeUntPrice","readonly","dsObjBindEn","maeUntPrice");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staDlvReqDtVi","divViewCompBody05.Tab01.tabp01.staDlvReqDt","visible","dsObjBindVi","staDlvReqDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staDlvReqDtEn","divViewCompBody05.Tab01.tabp01.staDlvReqDt","enable","dsObjBindEn","staDlvReqDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAmtVi","divViewCompBody05.Tab01.tabp01.staAmt","visible","dsObjBindVi","staAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAmtEn","divViewCompBody05.Tab01.tabp01.staAmt","enable","dsObjBindEn","staAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calDlvReqDtVi","divViewCompBody05.Tab01.tabp01.calDlvReqDt","visible","dsObjBindVi","calDlvReqDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calDlvReqDtEn","divViewCompBody05.Tab01.tabp01.calDlvReqDt","readonly","dsObjBindEn","calDlvReqDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("maeAmtVi","divViewCompBody05.Tab01.tabp01.maeAmt","visible","dsObjBindVi","maeAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("maeAmtEn","divViewCompBody05.Tab01.tabp01.maeAmt","readonly","dsObjBindEn","maeAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp04Vi","divViewCompBody05.Tab01.tabp04","visible","dsObjBindVi","tabp04");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp04En","divViewCompBody05.Tab01.tabp04","enable","dsObjBindEn","tabp04");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sta_WFDA_Label05_48Vi","divViewCompBody05.Tab01.tabp04.sta_WFDA_Label05","visible","dsObjBindVi","sta_WFDA_Label05_48");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sta_WFDA_Label05_48En","divViewCompBody05.Tab01.tabp04.sta_WFDA_Label05","enable","dsObjBindEn","sta_WFDA_Label05_48");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sta_WFDA_Label01Vi","divViewCompBody05.Tab01.tabp04.sta_WFDA_Label01","visible","dsObjBindVi","sta_WFDA_Label01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sta_WFDA_Label01En","divViewCompBody05.Tab01.tabp04.sta_WFDA_Label01","enable","dsObjBindEn","sta_WFDA_Label01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("ta_rmarkVi","divViewCompBody05.Tab01.tabp04.ta_rmark","visible","dsObjBindVi","ta_rmark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("ta_rmarkEn","divViewCompBody05.Tab01.tabp04.ta_rmark","readonly","dsObjBindEn","ta_rmark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtItmNoVi","divViewCompBody05.edtItmNo","visible","dsObjBindVi","edtItmNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtItmNoEn","divViewCompBody05.edtItmNo","readonly","dsObjBindEn","edtItmNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboItemVi","divViewCompBody05.cboItem","visible","dsObjBindVi","cboItem");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboItemEn","divViewCompBody05.cboItem","readonly","dsObjBindEn","cboItem");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnCntrItemRowDownVi","divViewCompBody05.btnCntrItemRowDown","visible","dsObjBindVi","btnCntrItemRowDown");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnCntrItemRowDownEn","divViewCompBody05.btnCntrItemRowDown","enable","dsObjBindEn","btnCntrItemRowDown");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnCntrItemRowUpVi","divViewCompBody05.btnCntrItemRowUp","visible","dsObjBindVi","btnCntrItemRowUp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnCntrItemRowUpEn","divViewCompBody05.btnCntrItemRowUp","enable","dsObjBindEn","btnCntrItemRowUp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("grdCntrPayFormatId","divViewCompBody02.grdCntrPay","formatid","dsObjBindGrid","grdCntrPay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("grdCntrItemFormatId","divViewCompBody01.grdCntrItem","formatid","dsObjBindGrid","grdCntrItem");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("grdInsrncFormatId","divViewCompBody03.grdInsrnc","formatid","dsObjBindGrid","grdInsrnc");
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
        this.registerScript("SCntrDetail.xfdl", function(exports) {
        /**
         * @파일명			: SCntrDetail
         * @생성자			: 안성민
         * @생성일시		: 2019. 05. 20.
         * @설명			: 계약상세
         * @최종수정자		: 안성민
         * @최종수정일시	: 2019. 05. 20.
        */ 
         
        this.fv_cntrNo = "";	
        this.fv_reloadCnt = true;
        this.fv_print = false;

        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {
        	var param = [	{code:"CM13", sSelectType:"S"} // 지급조건
        					,{code:"CM10", sSelectType:"S"} // 문서유형
        					,{code:"CM11", sSelectType:"S"} // 단위
        					,{code:"CT10", sSelectType:"S"} // 계약상태
        					,{code:"CT11", sSelectType:"S", sFiltered:"S:DAN,ONE"} // 계약유형
        					,{code:"CT19", sSelectType:"S"} // 계약구분
        					,{code:"CM15", sSelectType:"S", sFiltered:"S:KRW"} // 통화
        					,{code:"CT15", sSelectType:"S"} // 보증유형
        					,{code:"CT16", sSelectType:"S"} // 보증구분
        				];		
        									
        									
        	gfnGetCode(this, param);
        }

        /**
          * @함수명	: fnRemote
          * @desc     	: 리모콘 버튼 생성
          */
        this.fnRemote = function()
        {
        		var sArg = [ 
        					{btnName:"계약합의", clickEventFunc:"fnCntrSclo"}
        			];	
        	gfnRemote(this, sArg);
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
          * @input    	: obj:Form(폼 오브젝트), e:nexacr o.LoadEventInfo(이벤트변수)
          * @desc     	: 폼 onload이벤트
          */
        this.fnFormOnload = function(obj,e)
        {	
        	gfnSetObj("A")
        	gfnMakeFileDs(this);
        	
        	this.dsCntr.deleteAll();
        	var cntrNo = gfnGetTmprData("CNTR_NO");
        	var branchCd = gfnGetTmprData("BRANCH_CD");
        	gfnClearTmprData();
        	
        	//그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기(그리드 컴포넌트, 페이징div 컴포넌트, 폼오브젝트(this))
         	gfnSetGrdFunc(this.divViewCompBody01.grdCntrItem, "", this);
         	gfnSetGrdFunc(this.divViewCompBody02.grdCntrPay, "", this);
         	gfnSetGrdFunc(this.divViewCompBody03.grdInsrnc, "", this);
        	
        	//this.divViewCompBody04.webEditor.set_url(application.gvDomain+"/ckeditor/editor.jsp");
        	this.divViewCompBody00.Tab01.tabp01.divCntrDt.fnSetDate(this.dsCntr, "CNTR_BGN_DAY", "CNTR_END_DAY")	
        	
        	this.dsCntr.addRow();
        	this.dsCntr.setColumn(0, "BRANCH_CD", branchCd);
        	this.dsCntr.setColumn(0, "CNTR_NO", cntrNo);
        	this.fnSearch();
        }

        /**
          * @함수명	: fnPreSearch
          * @desc     	: 조회
          */
        this.fnPreSearch = function()
        {
        	return true;
        }

        /**
          * @함수명	: fnSearch
          * @desc     	: 조회
          */
        this.fnSearch = function()
        {
        	if(!this.fnPreSearch()) return;
        	
        	var sSvcID = "readCntr";
        	var sController = "epro.cntr.service.SCntrService.readCntr";
        	var sInDatasets = "dsCntr=dsCntr";
        	var sOutDatasets = "dsCntr=dsCntr dsCntrItem=dsCntrItem dsCntrPay=dsCntrPay dsCntrInsrnc=dsCntrInsrnc";
        	var sCallbackFunc = "fnTrCallBack";
        				
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);	
        }

        this.fnPreSave = function()
        {
        	return true;
        }

        /**
          * @함수명	: fnSave
          * @desc     	: 저장
          */
        this.fv_trType; //REQ(계약요청)
        this.fnSave = function(type)
        {
        	if(!this.fnPreSave()) {
        		this.fv_trType = "";
        		return;
        	}
        	
        	this.fv_trType = type;
        	if(type == "SCLO") {			
        		var exportFileNm = this.dsCntr.getColumn(0, "CNTR_NO");
        		var reportFile = "PCTRB100N00_P01_SIGNDATA_HTML" + ".jrf";
        		var datasets = [this.dsCntr, this.dsCntrItem, this.dsCntrPay, this.dsCntrInsrnc]

        		this.dsPrint.deleteAll();
        		var nRow = this.dsPrint.addRow();
        		this.dsPrint.setColumn(nRow, "BRANCH_CD"	, this.dsCntr.getColumn(0,"BRANCH_CD"));
        		this.dsPrint.setColumn(nRow, "REF_KEY_1"	, this.dsCntr.getColumn(0,"CNTR_NO"));
        		this.dsPrint.setColumn(nRow, "REF_KEY_2"	, "");
        		this.dsPrint.setColumn(nRow, "COL_NM1"		, "CNTR_NO");
        		this.dsPrint.setColumn(nRow, "COL_NM2"		, "");
        		this.dsPrint.setColumn(nRow, "TBL_NM"		, "MM_CNTR_ADD");
        		this.dsPrint.setColumn(nRow, "ALT_SIGN"		, "Y");
        			
        		var sArg = { arg:this.dsPrint, reportFile:reportFile, datasets:datasets, exportFileNm:exportFileNm, content:this.dsCntr.getColumn(0, "SIGN_ORGNL")};				
        		gfnModalPop(this, "HtmlReportPop", "CCOMP::ComUbiReportToHtml.xfdl", sArg, "fnPopCallBack", 1000, 1000);
        		// 2. 에디터 관련 컬럼을 삭제한 데이터셋을 이용하여 HTML로 만든다.
        		//this.Div00.ubiviewerlib_setting(sArg);
        	}
        }

        /**

        	@desc   	팝업 CallBack 함수
        */
        this.fnTrCallBack = function(sPopupId,rtn)
        {
        	switch(sPopupId) {
        		case "readCntr" :	
        			var start = "<div style="+"color:#333333;font:20 malgun gothic;>";
        			var end   = "</div>";			
        			var doc = this.divViewCompBody04.WebBrowser00.getProperty("document");
        			doc.callMethod("write", start + this.dsCntr.getColumn(0,"SIGN_ORGNL") + end);
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
        	switch(sPopupId) {
        		//승인요청
        		case "fnPopCallBack" :
        			this.fnSearch();
        			break;
        		default:
        			break;		
        	}
        }

        this.fnDsCntrItemOncolumnchanged = function(obj,e)
        {
        	var nqty = 0;
        	var nprice = 0;
        	if(e.columnid == "QTY" || e.columnid == "UNT_PRICE") {
        		nqty = this.dsCntrItem.getColumn(e.row,"QTY");
        		nprice = this.dsCntrItem.getColumn(e.row,"UNT_PRICE");
        		
        		this.dsCntrItem.setColumn(e.row,"AMT",Math.round(nqty*nprice));
        		
        		if("T" == this.dsCntrItem.getColumn(e.row,"INT_NTAX")){
        			this.dsCntrItem.setColumn(e.row,"VAT",Math.round(nqty*nprice)*0.1);
        		}else{
        			this.dsCntrItem.setColumn(e.row,"VAT",0);
        		}
        		
        		var totalVat = 0;
        		var totalAmt = 0;
        		
        		for(var i = 0 ; i < this.dsCntrItem.rowcount ; i++){
        			totalVat += parseInt(this.dsCntrItem.getColumn(i,"VAT"));
        			totalAmt += parseInt(this.dsCntrItem.getColumn(i,"AMT"));
        		}
        		
        		//품목의 단가,수량 변경시 헤더의 금액,단가,부가세 변경
        		this.dsCntr.setColumn(0,"VAT",totalVat);				//부가세변경
        		this.dsCntr.setColumn(0,"CNTR_AMT",totalAmt);			//공급가변경	
        		this.dsCntr.setColumn(0,"CNTR_SUM",totalVat + totalAmt);	//부가세+공급가 변경
        	}
        }

        /**
        	@function	fnBtnCntrItemRowUpDown()
        	@desc   	자재를 위로 이동하여 편집
        */
        this.fnBtnCntrItemRowUpDown= function(obj,e)
        {
        	if(obj.name == "btnCntrItemRowUp") {
        		if(this.dsCntrItem.rowposition == 0) return;
        		this.dsCntrItem.set_rowposition(this.dsCntrItem.rowposition-1);
        	} else if(obj.name == "btnCntrItemRowDown") {
        		if(this.dsCntrItem.rowposition == this.dsCntrItem.rowcount-1) return;
        		this.dsCntrItem.set_rowposition(this.dsCntrItem.rowposition+1);
        	}
        	
        }

        this.fnWebEditorOnuserNotify = function(obj,e)
        {
        	//런타임
        	if(obj.getProperty("document").getProperty("title").indexOf("▩") == 0){
        		//read
        		if (gfnReplace(obj.getProperty("document").getProperty("title"),"▩","") == "true"){
        			this.divViewCompBody04.webEditor.callMethod("setEditor", this.dsCntr.getColumn(0,"SIGN_ORGNL"));
        		
        		} 
        		//readMode
        		else if(gfnReplace(obj.getProperty("document").getProperty("title"),"▩","") == "MODE"){
        			this.divViewCompBody04.webEditor.callMethod("setReadMode", "N");
        		
        		} 
        		//tag
        		else if(gfnReplace(obj.getProperty("document").getProperty("title"),"▩","") == "SET_TAG"){
        			
        		
        		} 
        		//save
        		else {
        			this.dsCntr.setColumn(0,"SIGN_ORGNL",gfnReplace(obj.getProperty("document").getProperty("title"),"▩",""));
        			this.fnSave2();
        		}

        	//웹
        	} else if (e.userdata.indexOf("▦") == 0){
        		//read
        		if (gfnReplace(e.userdata,"▦","") == "true"){			
        			this.divViewCompBody04.webEditor.callMethod("setEditor",this.dsCntr.getColumn(0,"SIGN_ORGNL"));
        		
        		} 
        		//readMode
        		else if (gfnReplace(e.userdata,"▦","") == "MODE"){			
        			this.divViewCompBody04.webEditor.callMethod("setReadMode", "N");
        		
        		} 
        		//tag
        		else if (gfnReplace(e.userdata,"▦","") == "SET_TAG"){			
        			
        		
        		} 
        		//save
        		else {
        			this.dsCntr.setColumn(0,"SIGN_ORGNL",gfnReplace(e.userdata,"▦",""));
        			this.fnSave2();
        		}
        	}
        }

        /**
        	@function	fnCntrReq()
        	@desc   	계약합의
        */
        this.fnCntrSclo = function()
        {
        	this.fnSave("SCLO");
        }

        /**
        	@function	fnTabOnchanged()
        	@desc   	탭 변경 이벤트
        */
        this.fnTabOnchanged = function(obj,e)
        {
        	if(obj.tabindex == 3) {
        		var sTableNm = "MM_CNTR";
        		var arrFileKey = [this.dsCntr.getColumn(0, "CNTR_NO")];
        		this.divViewCompBody00.Tab01.tabp04.fnFileInit(this, sTableNm, this.dsCntr, arrFileKey, "Y");
        	}
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsCntr.addEventHandler("oncolumnchanged", this.fnSsCntrOncolumnChanged, this);
            this.dsCntrItem.addEventHandler("oncolumnchanged", this.fnDsCntrItemOncolumnchanged, this);
            this.dsCntrInsrnc.addEventHandler("oncolumnchanged", this.fnDsCntrInsrncOncolumnChanged, this);
            this.dsCntrPay.addEventHandler("oncolumnchanged", this.fnDsCntrPayOncolumnChanged, this);
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.addEventHandler("ontimer", this.PCTRS100N00_ontimer, this);
            this.divViewCompBody00.Tab01.addEventHandler("onchanged", this.fnTabOnchanged, this);
            this.divViewCompBody00.Tab01.tabp01.staTtl.addEventHandler("onclick", this.div_21_Tab01_tabp01_st_Ttl_onclick, this);
            this.divViewCompBody00.Tab01.tabp01.divViewCompTitle00.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompBody00.Tab01.tabp01.staViewCompLine03.addEventHandler("onclick", this.divViewCompBody00_Tab01_tabp01_sta_WFDA_Label02_onclick, this);
            this.divViewCompBody00.Tab01.tabp01.edtPtnrNm.addEventHandler("onchanged", this.divViewCompBody00_Tab01_tabp01_edtPtnrNm_onchanged, this);
            this.divViewCompBody00.Tab01.tabp01.edtPtnrNm.addEventHandler("onkeydown", this.fnOnkeydown, this);
            this.divViewCompBody00.Tab01.tabp02.divViewCompTitle00.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompBody00.Tab01.tabp03.divViewCompTitle00.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompBody01.grdCntrItem.addEventHandler("onexpandup", this.fnGridCntrItemOnexpandup, this);
            this.divViewCompBody01.grdCntrItem.addEventHandler("oncellclick", this.fnGridCntrItemOncellclick, this);
            this.divViewCompTitle00.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompTitle01.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompTitle02.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompTitle03.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompBody05.Tab01.tabp01.divViewCompTitle00.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompBody05.Tab01.tabp01.edtMtrlNm.addEventHandler("onkeydown", this.fn_onkeydown_event, this);
            this.divViewCompBody05.Tab01.tabp01.edtMtrlNm.addEventHandler("ontextchanged", this.fn_ontextchanged_event, this);
            this.divViewCompBody05.cboItem.addEventHandler("onitemchanged", this.div_41_cbo_itemChg_onitemchanged, this);
            this.divViewCompBody05.btnCntrItemRowDown.addEventHandler("onclick", this.fnBtnCntrItemRowUpDown, this);
            this.divViewCompBody05.btnCntrItemRowUp.addEventHandler("onclick", this.fnBtnCntrItemRowUpDown, this);
            this.divViewCompTitle04.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);

        };

        this.loadIncludeScript("SCntrDetail.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
