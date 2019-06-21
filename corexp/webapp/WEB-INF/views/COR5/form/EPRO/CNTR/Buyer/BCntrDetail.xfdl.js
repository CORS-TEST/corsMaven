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
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Combo("cboCntrType", "absolute", "85.04%", "39", null, "24", "51", null, this.divViewCompBody00.Tab01.tabp01);
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("95");
            obj.set_innerdataset("@dsCdCT19");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_value("null");
            obj = new Edit("edtPtnrId", "absolute", "121", "70", null, "24", "958", null, this.divViewCompBody00.Tab01.tabp01);
            obj.set_taborder("96");
            obj.set_readonly("true");
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtPtnrNm", "absolute", "20.78%", "70", null, "24", "64.84%", null, this.divViewCompBody00.Tab01.tabp01);
            obj.set_taborder("97");
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Combo("cboCntrCtgr", "absolute", "121", "102", "125", "24", null, null, this.divViewCompBody00.Tab01.tabp01);
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("98");
            obj.set_innerdataset("@dsCdCT11");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_codecolumn("CD_ID");
            obj = new Combo("cboPymtCndtn", "absolute", "47.05%", "70", "131", "24", null, null, this.divViewCompBody00.Tab01.tabp01);
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("99");
            obj.set_innerdataset("@dsCdCM13");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj = new Combo("cboCdCrnc", "absolute", "566", "134", "131", "24", null, null, this.divViewCompBody00.Tab01.tabp01);
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("100");
            obj.set_innerdataset("@dsCdCM15");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj = new Combo("cboCntrStts", "absolute", "769", "134", "128", "24", null, null, this.divViewCompBody00.Tab01.tabp01);
            this.divViewCompBody00.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("101");
            obj.set_innerdataset("@dsCdCT10");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_readonly("true");
            obj = new Edit("edtGrntPrid", "absolute", "566", "102", null, "24", "25.52%", null, this.divViewCompBody00.Tab01.tabp01);
            obj.set_taborder("102");
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
            obj = new Button("btnPtnr", "absolute", "35.16%", "70", "24", "24", null, null, this.divViewCompBody00.Tab01.tabp01);
            obj.set_taborder("106");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("협력사 검색 버튼");
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
            obj._setContents("<Formats><Format id=\"MMODE\"><Columns><Column size=\"35\" band=\"left\"/><Column size=\"86\"/><Column size=\"121\"/><Column size=\"120\"/><Column size=\"500\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" displaytype=\"decoratetext\" text=\"회차\"/><Cell col=\"2\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;지급율\"/><Cell col=\"3\" text=\"지급금액\"/><Cell col=\"4\" text=\"지급조건\"/></Band><Band id=\"body\" style=\"cellpadding:2 2 2 2;\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\" editdisplay=\"display\" expandshow=\"hide\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"bind:PYMT_ORDR\" editautoselect=\"true\" editdisplay=\"edit\"/><Cell col=\"2\" celltype=\"none\" displaytype=\"number\" edittype=\"mask\" editfilter=\"number\" style=\"align:right;\" text=\"bind:PYMT_RT\" mask=\"###\" maskchar=\" \" editlimit=\"-1\" editautoselect=\"true\" editdisplay=\"edit\" suppress=\"0\" autosizecol=\"default\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:PYMT_AMT\" mask=\"#,##0.00\" editautoselect=\"true\" editdisplay=\"edit\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:RMARK\" editlimit=\"200\" editautoselect=\"true\" editdisplay=\"edit\"/></Band></Format><Format id=\"VMODE\"><Columns><Column size=\"86\"/><Column size=\"121\"/><Column size=\"120\"/><Column size=\"500\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" text=\"회차\"/><Cell col=\"1\" text=\"지급율\"/><Cell col=\"2\" text=\"지급금액\"/><Cell col=\"3\" text=\"지급조건\"/></Band><Band id=\"body\" style=\"cellpadding:2 2 2 2 ;\"><Cell displaytype=\"normal\" edittype=\"none\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:PYMT_ORDR\" editdisplay=\"edit\"/><Cell col=\"1\" celltype=\"none\" displaytype=\"normal\" edittype=\"none\" editfilter=\"number\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:PYMT_RT\" mask=\"###\" maskchar=\" \" editlimit=\"-1\" editautoselect=\"false\" editdisplay=\"edit\" suppress=\"0\" autosizecol=\"default\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:PYMT_AMT\" mask=\"9,999.###\" maskchar=\" \" editautoselect=\"true\" editdisplay=\"edit\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:RMARK\" editdisplay=\"edit\"/></Band></Format></Formats>");
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
            obj._setContents("<Formats><Format id=\"MMODE\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"300\"/><Column size=\"70\"/><Column size=\"55\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"95\"/><Column size=\"339\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;품목명\"/><Cell col=\"2\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;수량\"/><Cell col=\"3\" text=\"단위\"/><Cell col=\"4\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;단가\"/><Cell col=\"5\" text=\"공급가\"/><Cell col=\"6\" text=\"부가세\"/><Cell col=\"7\" text=\"비고\"/></Band><Band id=\"body\" style=\"cellpadding:2 2 2 2;\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:CHECKED\" editdisplay=\"display\" expandshow=\"hide\"/><Cell col=\"1\" edittype=\"expr:PR_ITEM_ID != '' || RFQ_REQ_ITEM_ID != '' || TNDR_ITEM_ID != '' || PO_ITEM_ID != '' ? 'none' : 'text'\" style=\"align:left;background:EXPR(PR_ITEM_ID != '' || RFQ_REQ_ITEM_ID != '' || TNDR_ITEM_ID != '' || PO_ITEM_ID != '' ? '#f5f5f5ff' : '');background2:EXPR(PR_ITEM_ID != '' || RFQ_REQ_ITEM_ID != '' || TNDR_ITEM_ID != '' || PO_ITEM_ID != '' ? '#f5f5f5ff' : '');\" text=\"bind:MTRL_NM\" editautoselect=\"true\" editdisplay=\"edit\" expandshow=\"show\" expandsize=\"24\" expandimage=\"expr:PR_ITEM_ID != '' || RFQ_REQ_ITEM_ID != '' || TNDR_ITEM_ID != '' || PO_ITEM_ID != '' ? '' : 'img::grd_WF_Expand.png'\" calendardisplay=\"edit\" tooltiptext=\"bind:MTRL_NM\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"expr:PR_ITEM_ID != '' || RFQ_REQ_ITEM_ID != '' || TNDR_ITEM_ID != '' || PO_ITEM_ID != '' ? 'none' : 'masknumber'\" style=\"align:right;background:EXPR(PR_ITEM_ID != '' || RFQ_REQ_ITEM_ID != '' || TNDR_ITEM_ID != '' || PO_ITEM_ID != '' ? '#f5f5f5ff' : '');background2:EXPR(PR_ITEM_ID != '' || RFQ_REQ_ITEM_ID != '' || TNDR_ITEM_ID != '' || PO_ITEM_ID != '' ? '#f5f5f5ff' : '');\" text=\"bind:QTY\" mask=\"#,##0.00\" editautoselect=\"true\" editdisplay=\"edit\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"expr:PR_ITEM_ID != '' || RFQ_REQ_ITEM_ID != '' || TNDR_ITEM_ID != '' || PO_ITEM_ID != '' ? 'none' : 'combo'\" style=\"background:EXPR(PR_ITEM_ID != '' || RFQ_REQ_ITEM_ID != '' || TNDR_ITEM_ID != '' || PO_ITEM_ID != '' ? '#f5f5f5ff' : '');background2:EXPR(PR_ITEM_ID != '' || RFQ_REQ_ITEM_ID != '' || TNDR_ITEM_ID != '' || PO_ITEM_ID != '' ? '#f5f5f5ff' : '');\" text=\"bind:CD_UNIT\" editautoselect=\"true\" combodataset=\"dsCdCM11\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" combodisplay=\"edit\" calendardisplay=\"edit\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:UNT_PRICE\" mask=\"#,##0.00\" editclipmode=\"includespace\" editautoselect=\"true\" editdisplay=\"edit\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:AMT\" mask=\"#,##0\" editautoselect=\"true\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:VAT\" mask=\"#,##0\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:RMARK\" editlimit=\"200\" editautoselect=\"true\" editdisplay=\"edit\"/></Band></Format><Format id=\"VMODE\"><Columns><Column size=\"300\"/><Column size=\"70\"/><Column size=\"55\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"373\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" text=\"품목명\"/><Cell col=\"1\" displaytype=\"normal\" text=\"수량\"/><Cell col=\"2\" text=\"단위\"/><Cell col=\"3\" displaytype=\"normal\" text=\"단가\"/><Cell col=\"4\" text=\"공급가\"/><Cell col=\"5\" text=\"부가세\"/><Cell col=\"6\" text=\"비고\"/></Band><Band id=\"body\" style=\"cellpadding:2 2 2 2 ;\"><Cell edittype=\"none\" style=\"align:left;background2: ;\" cssclass=\"cell_link\" text=\"bind:MTRL_NM\" editdisplay=\"edit\" expandshow=\"hide\" calendardisplay=\"edit\" tooltiptext=\"bind:MTRL_NM\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background2: ;\" text=\"bind:QTY\" mask=\"#,##0.00\" editautoselect=\"true\" editdisplay=\"edit\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" style=\"background2: ;\" text=\"bind:CD_UNIT_NM\" combodisplay=\"edit\" calendardisplay=\"edit\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background2: ;\" text=\"bind:UNT_PRICE\" mask=\"#,##0.00\" editclipmode=\"includespace\" editautoselect=\"false\" editdisplay=\"edit\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background2: ;\" text=\"bind:AMT\" mask=\"#,##0\" editautoselect=\"true\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:VAT\" mask=\"#,##0\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" style=\"align:left;background: ;\" text=\"bind:RMARK\" editlimit=\"200\" editdisplay=\"edit\"/></Band></Format></Formats>");
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
            obj._setContents("<Formats><Format id=\"MMODE\"><Columns><Column size=\"43\"/><Column size=\"87\"/><Column size=\"161\"/><Column size=\"185\"/><Column size=\"163\"/><Column size=\"400\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" displaytype=\"decoratetext\" text=\"회차\"/><Cell col=\"2\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;이행보증구분\"/><Cell col=\"3\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;보증유형\"/><Cell col=\"4\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;보증금율\"/><Cell col=\"5\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;보증금액\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\" editautoselect=\"true\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:PYMT_ORDR\" editautoselect=\"true\" combodataset=\"dsCntrPay\" combocodecol=\"PYMT_ORDR\" combodatacol=\"PYMT_ORDR\" combodisplay=\"edit\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:CD_GRNT_INSRNC_TYPE\" editautoselect=\"true\" combodataset=\"dsCdCT16\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" combodisplay=\"edit\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:CD_GRNT_MTHD\" editautoselect=\"true\" combodataset=\"dsCdCT15\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" combodisplay=\"edit\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"mask\" style=\"align:right;\" text=\"bind:GRNT_RT\" mask=\"###\" maskchar=\" \" editautoselect=\"true\" editdisplay=\"edit\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:GRNT_AMT\" mask=\"#,##0.00\" editautoselect=\"true\" editdisplay=\"edit\"/></Band></Format><Format id=\"VMODE\"><Columns><Column size=\"115\"/><Column size=\"187\"/><Column size=\"304\"/><Column size=\"306\"/><Column size=\"292\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" text=\"회차\"/><Cell col=\"1\" text=\"이행보증구분\"/><Cell col=\"2\" text=\"보증유형\"/><Cell col=\"3\" text=\"보증금율\"/><Cell col=\"4\" text=\"보증금액\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:PYMT_ORDR\" combodisplay=\"edit\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:CD_GRNT_INSRNC_TYPE_NM\" combodisplay=\"edit\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:CD_GRNT_MTHD_NM\" combodisplay=\"edit\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:GRNT_RT\" mask=\"9,999.###\" maskchar=\" \" editdisplay=\"edit\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:GRNT_AMT\" mask=\"9,999.###\" maskchar=\" \" editdisplay=\"edit\"/></Band></Format></Formats>");
            this.divViewCompBody03.addChild(obj.name, obj);

            obj = new Div("divViewCompBody04", "absolute", "0", "1389", null, "516", "15", null, this);
            obj.set_taborder("6");
            obj.set_scrollbars("none");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            obj = new Div("divEditor", "absolute", "0", "0", null, null, "0", "0", this.divViewCompBody04);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("CCOMP::ComEditor.xfdl");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new WebBrowser("WebBrowser00", "absolute", "0", "0", null, null, "0", "-8", this.divViewCompBody04);
            obj.set_taborder("1");
            obj.set_visible("false");
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
            obj = new Static("staDlvReqDt", "absolute", null, "0", "102", "24", "392", null, this.divViewCompTitle00);
            obj.set_taborder("1");
            obj.set_text("납품요청일자");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("납품요청일자 Static");
            this.divViewCompTitle00.addChild(obj.name, obj);
            obj = new Calendar("calDlvReqDt", "absolute", null, "0", "125", "24", "267", null, this.divViewCompTitle00);
            this.divViewCompTitle00.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy.MM.dd ddd");
            obj.set_editformat("yyyy.MM.dd ddd");
            obj.getSetter("objNm").set("납품요청일자달력");
            obj = new Button("btnSetReqDt", "absolute", null, "0", "65", "24", "200", null, this.divViewCompTitle00);
            obj.set_taborder("3");
            obj.set_text("일괄적용");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("납품요청일자 일괄적용");
            this.divViewCompTitle00.addChild(obj.name, obj);
            obj = new Button("btnMtrlAdd", "absolute", null, "0", "70", "24", "126", null, this.divViewCompTitle00);
            obj.set_taborder("4");
            obj.set_text("품목추가");
            obj.getSetter("objNm").set("품목추가 버튼");
            obj.getSetter("lbcd").set("");
            this.divViewCompTitle00.addChild(obj.name, obj);
            obj = new Button("btnAddItem", "absolute", null, "0", "60", "24", "64", null, this.divViewCompTitle00);
            obj.set_taborder("5");
            obj.set_text(" 추가");
            obj.getSetter("objNm").set("품목추가 버튼");
            obj.getSetter("lbcd").set("");
            this.divViewCompTitle00.addChild(obj.name, obj);
            obj = new Button("btnDelItem", "absolute", null, "0", "60", "24", "2", null, this.divViewCompTitle00);
            obj.set_taborder("6");
            obj.set_text(" 삭제");
            obj.getSetter("objNm").set("품목삭제버튼");
            obj.getSetter("lbcd").set("");
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
            obj = new Button("btnAddPayItm", "absolute", null, "0", "60", "24", "64", null, this.divViewCompTitle01);
            obj.set_taborder("1");
            obj.set_text(" 추가");
            obj.getSetter("objNm").set("품목추가 버튼");
            obj.getSetter("lbcd").set("");
            this.divViewCompTitle01.addChild(obj.name, obj);
            obj = new Button("btnDelPayItm", "absolute", null, "0", "60", "24", "2", null, this.divViewCompTitle01);
            obj.set_taborder("2");
            obj.set_text(" 삭제");
            obj.getSetter("objNm").set("품목삭제버튼");
            obj.getSetter("lbcd").set("");
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
            obj = new Button("btnAddInsrnc", "absolute", null, "0", "60", "24", "64", null, this.divViewCompTitle02);
            obj.set_taborder("1");
            obj.set_text(" 추가");
            obj.getSetter("objNm").set("품목추가 버튼");
            obj.getSetter("lbcd").set("");
            this.divViewCompTitle02.addChild(obj.name, obj);
            obj = new Button("btnDelInsrnc", "absolute", null, "0", "60", "24", "2", null, this.divViewCompTitle02);
            obj.set_taborder("2");
            obj.set_text(" 삭제");
            obj.getSetter("objNm").set("품목삭제버튼");
            obj.getSetter("lbcd").set("");
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
            obj = new Button("btnAddCntrTemplate", "absolute", null, "0", "150", "24", "2", null, this.divViewCompTitle03);
            obj.set_taborder("1");
            obj.set_text("계약내용 템플릿참조");
            obj.getSetter("objNm").set("계약내용 템플릿참조");
            obj.getSetter("lbcd").set("");
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
            this.divViewCompBody05.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Combo("cboCdUnit", "absolute", "284", "102", "91", "24", null, null, this.divViewCompBody05.Tab01.tabp01);
            this.divViewCompBody05.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("78");
            obj.set_innerdataset("@dsCdCM11");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("단위");
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
            obj = new Layout("default", "", 0, 516, this.divViewCompBody04,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.set_scrollbars("none");
            		p.set_visible("true");

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
            obj = new BindItem("item31","divViewCompTitle00.calDlvReqDt","value","ds_cntr","CNTR_REQ_DT");
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
            obj = new BindItem("btnPtnrVi","divViewCompBody00.Tab01.tabp01.btnPtnr","visible","dsObjBindVi","btnPtnr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnPtnrEn","divViewCompBody00.Tab01.tabp01.btnPtnr","enable","dsObjBindEn","btnPtnr");
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
            obj = new BindItem("WebBrowser_SignVi","WebBrowser_Sign","visible","dsObjBindVi","WebBrowser_Sign");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("WebBrowser_SignEn","WebBrowser_Sign","enable","dsObjBindEn","WebBrowser_Sign");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staDlvReqDtVi","divViewCompTitle00.staDlvReqDt","visible","dsObjBindVi","staDlvReqDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staDlvReqDtEn","divViewCompTitle00.staDlvReqDt","enable","dsObjBindEn","staDlvReqDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calDlvReqDtVi","divViewCompTitle00.calDlvReqDt","visible","dsObjBindVi","calDlvReqDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calDlvReqDtEn","divViewCompTitle00.calDlvReqDt","readonly","dsObjBindEn","calDlvReqDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnSetReqDtVi","divViewCompTitle00.btnSetReqDt","visible","dsObjBindVi","btnSetReqDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnSetReqDtEn","divViewCompTitle00.btnSetReqDt","enable","dsObjBindEn","btnSetReqDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnMtrlAddVi","divViewCompTitle00.btnMtrlAdd","visible","dsObjBindVi","btnMtrlAdd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnMtrlAddEn","divViewCompTitle00.btnMtrlAdd","enable","dsObjBindEn","btnMtrlAdd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnAddItemVi","divViewCompTitle00.btnAddItem","visible","dsObjBindVi","btnAddItem");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnAddItemEn","divViewCompTitle00.btnAddItem","enable","dsObjBindEn","btnAddItem");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnDelItemVi","divViewCompTitle00.btnDelItem","visible","dsObjBindVi","btnDelItem");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnDelItemEn","divViewCompTitle00.btnDelItem","enable","dsObjBindEn","btnDelItem");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnAddPayItmVi","divViewCompTitle01.btnAddPayItm","visible","dsObjBindVi","btnAddPayItm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnAddPayItmEn","divViewCompTitle01.btnAddPayItm","enable","dsObjBindEn","btnAddPayItm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnDelPayItmVi","divViewCompTitle01.btnDelPayItm","visible","dsObjBindVi","btnDelPayItm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnDelPayItmEn","divViewCompTitle01.btnDelPayItm","enable","dsObjBindEn","btnDelPayItm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnAddInsrncVi","divViewCompTitle02.btnAddInsrnc","visible","dsObjBindVi","btnAddInsrnc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnAddInsrncEn","divViewCompTitle02.btnAddInsrnc","enable","dsObjBindEn","btnAddInsrnc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnDelInsrncVi","divViewCompTitle02.btnDelInsrnc","visible","dsObjBindVi","btnDelInsrnc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnDelInsrncEn","divViewCompTitle02.btnDelInsrnc","enable","dsObjBindEn","btnDelInsrnc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnAddCntrTemplateVi","divViewCompTitle03.btnAddCntrTemplate","visible","dsObjBindVi","btnAddCntrTemplate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnAddCntrTemplateEn","divViewCompTitle03.btnAddCntrTemplate","enable","dsObjBindEn","btnAddCntrTemplate");
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
            obj = new BindItem("staDlvReqDt_48Vi","divViewCompBody05.Tab01.tabp01.staDlvReqDt","visible","dsObjBindVi","staDlvReqDt_48");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staDlvReqDt_48En","divViewCompBody05.Tab01.tabp01.staDlvReqDt","enable","dsObjBindEn","staDlvReqDt_48");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAmtVi","divViewCompBody05.Tab01.tabp01.staAmt","visible","dsObjBindVi","staAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAmtEn","divViewCompBody05.Tab01.tabp01.staAmt","enable","dsObjBindEn","staAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calDlvReqDt_49Vi","divViewCompBody05.Tab01.tabp01.calDlvReqDt","visible","dsObjBindVi","calDlvReqDt_49");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calDlvReqDt_49En","divViewCompBody05.Tab01.tabp01.calDlvReqDt","readonly","dsObjBindEn","calDlvReqDt_49");
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
            obj = new BindItem("sta_WFDA_Label05_61Vi","divViewCompBody05.Tab01.tabp04.sta_WFDA_Label05","visible","dsObjBindVi","sta_WFDA_Label05_61");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sta_WFDA_Label05_61En","divViewCompBody05.Tab01.tabp04.sta_WFDA_Label05","enable","dsObjBindEn","sta_WFDA_Label05_61");
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
            obj = new BindItem("st_ItemTxtVi","divViewCompBody05.Tab01.tabp04.st_ItemTxt","visible","dsObjBindVi","st_ItemTxt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("st_ItemTxtEn","divViewCompBody05.Tab01.tabp04.st_ItemTxt","enable","dsObjBindEn","st_ItemTxt");
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
            obj = new BindItem("divEditorVi","divViewCompBody04.divEditor","visible","dsObjBindVi","divEditor");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divEditorEn","divViewCompBody04.divEditor","enable","dsObjBindEn","divEditor");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompCalFromTo.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompNFileUpDown.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComEditor.xfdl");
        };
        
        // User Script
        this.registerScript("BCntrDetail.xfdl", function(exports) {
        /**
         * @파일명			: SCntrDetail
         * @생성자			: 안성민
         * @생성일시		: 2019. 05. 14.
         * @설명			: 계약상세
         * @최종수정자		: 안성민
         * @최종수정일시	: 2019. 05. 14.
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
        					{btnName:"승인요청", clickEventFunc:"fnAprvReq"}
        					//,{btnName:"계약회람", clickEventFunc:""}
        					,{btnName:"합의요청", clickEventFunc:"fnCntrReq"}
        					,{btnName:"내부확정", clickEventFunc:"fnIntlCfm"}
        					//,{btnName:"품의문서보기", clickEventFunc:""}
        					//,{btnName:"결재작성중", clickEventFunc:""}
        					//,{btnName:"계약품의", clickEventFunc:""}
        			];	
        	gfnRemote(this, sArg);
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
        	
        	this.divViewCompBody00.Tab01.tabp01.divCntrDt.fnSetDate(this.dsCntr, "CNTR_BGN_DAY", "CNTR_END_DAY")	
        	
        	//신규 or 조회
        	if(gfnIsNull(cntrNo)) {
        		this.fnNewCntr();
        	} else {
        		this.dsCntr.addRow();
        		this.dsCntr.setColumn(0, "BRANCH_CD", branchCd);
        		this.dsCntr.setColumn(0, "CNTR_NO", cntrNo);
        		this.fnSearch();
        	}
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
        	var sController = "epro.cntr.service.BCntrService.readCntr";
        	var sInDatasets = "dsCntr=dsCntr";
        	var sOutDatasets = "dsCntr=dsCntr dsCntrItem=dsCntrItem dsCntrPay=dsCntrPay dsCntrInsrnc=dsCntrInsrnc";
        	var sCallbackFunc = "fnTrCallBack";
        				
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);	
        }

        /**
          * @함수명	: fnNewCntr
          * @desc     	: 신규 데이터 초기화
          */
        this.fnNewCntr = function()
        {
        	//데이터셋 초기화
        	this.dsCntr.deleteAll();
        	this.dsCntr.addRow();
        	this.dsCntr.setColumn(0,"CHRGR_ID",application.gdsUserInfo.getColumn(0, "USER_ID"));
        	this.dsCntr.setColumn(0,"CHRGR_NM",application.gdsUserInfo.getColumn(0, "USER_NM"));
        	this.dsCntr.setColumn(0,"TEL",application.gdsUserInfo.getColumn(0, "TEL"));
        	this.dsCntr.setColumn(0,"EMAIL",application.gdsUserInfo.getColumn(0, "EMAIL"));
        	this.dsCntr.setColumn(0,"FAX",application.gdsUserInfo.getColumn(0, "FAX"));
        	this.dsCntr.setColumn(0,"CD_CNTR_STTS","CT10WRI"); 									// 계약상태
        	this.dsCntr.setColumn(0,"CD_CNTR_TYPE","CT19DM"); 									// 계약조건
        	this.dsCntr.setColumn(0,"CD_CNTR_CTGR","CT11DAN"); 									// 계약유형
        	this.dsCntr.setColumn(0,"CD_PYMT_CNDTN","CM13C01");									// 지급조건
        	this.dsCntr.setColumn(0,"CD_CRNC","CM15KRW");										// 계약금액단위
        	this.dsCntr.setColumn(0,"CNTR_SUM",0);
        	this.dsCntr.setColumn(0,"CNTR_AMT",0);
        	this.dsCntr.setColumn(0,"VAT",0);
        	
        	this.dsCntr.setColumn(0,"PTNR_ID", "1000000019");
        	this.dsCntr.setColumn(0,"PTNR_NM", "법인에이물산");
        	
        	this.divViewCompBody04.divEditor.fnEditorInit("", "N");
        	gfnModalPop(this, "DocCtgrPop", "BCNTR::BCntrDocCtgrPop.xfdl", {}, "fnPopCallBack", 300, 350);
        }

        /**
        	@function	fnPopCallBack()
        	@desc   	팝업 CallBack 함수
        */
        this.fnPopCallBack = function(sPopupId,rtn)
        {
        	if(gfnIsNull(rtn)) {
        		if(sPopupId == "DocCtgrPop") this.parent.fnBtnComCloseOnclick();
        		return;
        	}
        		
        	switch(sPopupId) {
        		//승인요청
        		case "BAprvReqPopup" :
        			this.fnSearch();
        			break;
        		//템플릿참조
        		case "CtnrTmplPop" :
        			this.dsReturn.clear();
        			this.dsReturn.loadXML(rtn);
        					
        			this.dsCntr.setColumn(0, "SIGN_ORGNL", this.dsReturn.getColumn(0,"CNTR_CNTNT"));
        			this.dsCntr.setColumn(0, "CNTR_TMPL_ID", this.dsReturn.getColumn(0,"CNTR_TMPL_ID"));
        			this.divViewCompBody04.divEditor.fnEditorInit(this.dsCntr.getColumn(0,"SIGN_ORGNL"), "N");
        			break;
        		//문서유형
        		case "DocCtgrPop" :
        			this.dsCntr.setColumn(0, "CD_DOC_CTGR", rtn);
        			break;
        		//협력사검색l
        		case "BPtnrSrchPopup" :
        			this.dsReturn.clear();
        			this.dsReturn.loadXML(rtn);
        			
        			if(!gfnIsNull(this.dsReturn.getColumn(0,"PTNR_ID"))){
        				this.dsCntr.setColumn(0,"PTNR_ID",this.dsReturn.getColumn(0,"PTNR_ID"));
        				this.dsCntr.setColumn(0,"PTNR_NM",this.dsReturn.getColumn(0,"PTNR_NM"));
        			}
        			break;
        		//품목검색
        		case "BMtrlSrchPopup" :
        		case "expandBMtrlSrchPopup" :
        		
        			this.dsReturn.clear();
        			this.dsReturn.loadXML(rtn);
        			
        			this.dsCntrItem.set_enableevent(false);
        			for(var i=0; i<this.dsReturn.rowcount; i++){
        				var nRow
        				if(sPopupId == "BMtrlSrchPopup") {
        					nRow = this.dsCntrItem.addRow();
        					this.dsCntrItem.setColumn(nRow,"ITM_NO",nRow+1);
        				} else {
        					nRow = this.dsCntrItem.rowposition
        				}
        				
        				this.dsCntrItem.setColumn(nRow,"MTRL_GRP_ID",	this.dsReturn.getColumn(i,"SML_CLS_ID"));
        				this.dsCntrItem.setColumn(nRow,"MTRL_GRP_NM2",	this.dsReturn.getColumn(i,"MTRL_GRP_NM2"));
        				this.dsCntrItem.setColumn(nRow,"MTRL_CD",	this.dsReturn.getColumn(i,"MTRL_CD"));
        				this.dsCntrItem.setColumn(nRow,"MTRL_NM",	this.dsReturn.getColumn(i,"MTRL_NM2"));
        				this.dsCntrItem.setColumn(nRow,"CD_UNIT", this.dsReturn.getColumn(i,"CD_PUR_UNIT"));
        				this.dsCntrItem.setColumn(nRow,"UNT_PRICE",this.dsReturn.getColumn(i,"CNTR_PRICE"));
        				this.dsCntrItem.setColumn(nRow,"INT_NTAX",this.dsReturn.getColumn(i,"INT_NTAX"));
        				this.dsCntrItem.setColumn(nRow,"PR_ITEM_ID","");
        				this.dsCntrItem.setColumn(nRow,"TNDR_ITEM_ID","");
        				this.dsCntrItem.setColumn(nRow,"RFQ_REQ_ITEM_ID","");
        				this.dsCntrItem.setColumn(nRow,"PO_ITEM_ID","");
        				this.dsCntrItem.setColumn(nRow,"QTY",0);
        				this.dsCntrItem.setColumn(nRow,"VAT",0);
        				this.dsCntrItem.setColumn(nRow,"AMT",0);
        				
        				this.dsCntrItem.setColumn(this.dsCntrItem.rowposition,"MTRL_CD",this.dsReturn.getColumn(0,"MTRL_CD"));
        				this.dsCntrItem.setColumn(this.dsCntrItem.rowposition,"MTRL_NM",this.dsReturn.getColumn(0,"MTRL_NM2"));
        				this.dsCntrItem.setColumn(this.dsCntrItem.rowposition,"MTRL_GRP_ID",this.dsReturn.getColumn(0,"SML_CLS_ID"));
        				this.dsCntrItem.setColumn(this.dsCntrItem.rowposition,"MTRL_GRP_NM2",this.dsReturn.getColumn(0,"MTRL_GRP_NM2"));
        				
        				if(gfnIsNull(this.dsReturn.getColumn(0,"CNTR_PRICE"))){
        					this.dsCntrItem.setColumn(this.dsCntrItem.rowposition,"UNT_PRICE",0);
        				} else{
        					this.dsCntrItem.setColumn(this.dsCntrItem.rowposition,"UNT_PRICE",this.dsReturn.getColumn(0,"CNTR_PRICE"));
        				}
        				
        				this.dsCntrItem.setColumn(this.dsCntrItem.rowposition,"CD_UNIT",this.dsReturn.getColumn(0,"CD_PUR_UNIT"));
        				
        				if(gfnIsNull(this.dsCntrItem.getColumn(nRow,"UNT_PRICE"))) this.dsCntrItem.setColumn(nRow,"UNT_PRICE",0);
        				
        				//INT_NTAX = T 과세
        				//INT_NTAX = N 비과세
        			}
        			this.dsCntrItem.set_enableevent(true);
        			break;
        		default:
        			break;	
        			
        	}
        }

        /**
          * @함수명	: fnValidate
          * @desc     	: 유효성검사
          */
        this.fnValidate = function()
        {
        	//--  헤더 --//
        	var arr = [];
        	//계약명
        	if(gfnIsNull(this.dsCntr.getColumn(0, "TTL"))){
        		var msg = "계약명을 입력해주세요."
        		var type = "필수입력"
        		var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        		arr.push(objParam);
        	}
        	//협력사
        	if(gfnIsNull(this.dsCntr.getColumn(0, "PTNR_ID"))){
        		var msg = "협력사을 입력해주세요."
        		var type = "필수입력"
        		var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        		arr.push(objParam);
        	}
        	//계약유형
        	if(gfnIsNull(this.dsCntr.getColumn(0, "CD_CNTR_CTGR"))){
        		var msg = "계약유형을 선택해주세요."
        		var type = "필수입력"
        		var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        		arr.push(objParam);
        	}
        	//계약일자
        	if(gfnIsNull(this.dsCntr.getColumn(0, "CNTR_BGN_DAY")) || gfnIsNull(this.dsCntr.getColumn(0, "CNTR_END_DAY"))){
        		var msg = "계약일자을 선택해주세요."
        		var type = "필수입력"
        		var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        		arr.push(objParam);
        	}
        	//지급조건
        	if(gfnIsNull(this.dsCntr.getColumn(0, "CD_PYMT_CNDTN"))){
        		var msg = "지급조건을 선택해주세요."
        		var type = "필수입력"
        		var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        		arr.push(objParam);
        	}
        	//통화단위
        	if(gfnIsNull(this.dsCntr.getColumn(0, "CD_CRNC"))){
        		var msg = "통화단위을 선택해주세요."
        		var type = "필수입력"
        		var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        		arr.push(objParam);
        	}
        	//계약구분
        	if(gfnIsNull(this.dsCntr.getColumn(0, "CD_CNTR_TYPE"))){
        		var msg = "계약구분을 선택해주세요."
        		var type = "필수입력"
        		var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        		arr.push(objParam);
        	}
        	
        	if(!gfnValidate(this, false, arr)) return false;
        	
        	//--  품목  --//
        	var arr = [];
        	//품목수 
        	if(this.dsCntrItem.rowcount < 1) { 
        		var msg =  "품목을 추가해주세요."
        		var type = "필수입력"
        		var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        		arr.push(objParam);

        		if(!gfnValidate(this, false, arr)) return false;
        	} else {
        		for(var i=0; i<this.dsCntrItem.rowcount; i++) {
        			//품목
        			if(gfnIsNull(this.dsCntrItem.getColumn(i, "MTRL_CD"))){
        				var msg =  this.dsCntrItem.getColumn(i, "ITM_NO") + "번 품목을 선택해주세요."
        				var type = "필수입력"
        				var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        				arr.push(objParam);
        			}
        			//수량
        			if(gfnIsNull(this.dsCntrItem.getColumn(i, "QTY"))){
        				var msg =  this.dsCntrItem.getColumn(i, "ITM_NO") + "번 수량을 입력해주세요."
        				var type = "필수입력"
        				var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        				arr.push(objParam);
        			}
        			//단가
        			if(gfnIsNull(this.dsCntrItem.getColumn(i, "UNT_PRICE"))){
        				var msg =  this.dsCntrItem.getColumn(i, "ITM_NO") + "번 단가을 입력해주세요."
        				var type = "필수입력"
        				var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        				arr.push(objParam);
        			}
        		}
        		if(!gfnValidate(this, false, arr)) return false;
        	}	
        	
        	//--  지급계획  --//
        	var arr = [];

        	if(this.dsCntrPay.rowcount < 1) { 
        		var msg =  "지급계획을 입력해주세요."
        		var type = "필수입력"
        		var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        		arr.push(objParam);

        		if(!gfnValidate(this, false, arr)) return false;
        	} else {
        		 for(var i=0; i<this.dsCntrPay.rowcount; i++) {
        			if(gfnIsNull(this.dsCntrPay.getColumn(i, "PYMT_RT"))) {
        				var msg =  this.dsCntrPay.getColumn(i, "PYMT_ORDR") + "회차 지급율을 입력해주세요."
        				var type = "필수입력"
        				var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        				arr.push(objParam);
        			}
        		 }
        		 if(this.dsCntrPay.getSum("PYMT_RT") > 100) {
        			var msg =  "지급율의 합은 100을 초과할 수 없습니다."
        			var type = "오류"
        			var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"N"};
        			arr.push(objParam);
        		 }
        	}
        	if(!gfnValidate(this, false, arr)) return false;
        	
        	//--  이행보증  --//
        	var arr = [];

        	if(this.dsCntrInsrnc.rowcount < 1) { 
        		var msg =  "이행보증을 입력해주세요."
        		var type = "필수입력"
        		var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        		arr.push(objParam);

        		if(!gfnValidate(this, false, arr)) return false;
        	} else {
        		for(var i=0; i<this.dsCntrInsrnc.rowcount; i++) {
        			//이행보증구분
        			if(gfnIsNull(this.dsCntrInsrnc.getColumn(i, "CD_GRNT_INSRNC_TYPE"))){
        				var msg =  this.dsCntrInsrnc.getColumn(i, "PYMT_ORDR") + "회차 이행보증구분을 선택해주세요."
        				var type = "필수입력"
        				var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        				arr.push(objParam);
        			}
        			//보증유형
        			if(gfnIsNull(this.dsCntrInsrnc.getColumn(i, "CD_GRNT_MTHD"))){
        				var msg =  this.dsCntrInsrnc.getColumn(i, "PYMT_ORDR") + "회차 보증유형을 선택해주세요."
        				var type = "필수입력"
        				var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        				arr.push(objParam);
        			}
        			//보증금율
        			if(gfnIsNull(this.dsCntrInsrnc.getColumn(i, "GRNT_RT"))){
        				var msg =  this.dsCntrInsrnc.getColumn(i, "PYMT_ORDR") + "회차 보증금율을 선택해주세요."
        				var type = "필수입력"
        				var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        				arr.push(objParam);
        			}	
        			//보증금액
        			if(gfnIsNull(this.dsCntrInsrnc.getColumn(i, "GRNT_AMT"))){
        				var msg =  this.dsCntrInsrnc.getColumn(i, "PYMT_ORDR") + "회차 보증금액을 선택해주세요."
        				var type = "필수입력"
        				var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        				arr.push(objParam);
        			}	
        		}
        		if(!gfnValidate(this, false, arr)) return false;
        	}
        	
         	return true;
        }

        /**
          * @함수명	: fnPreSave
          * @desc     	: 저장 전처리
          */
        this.fnPreSave = function()
        {
        	return this.fnValidate();
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
        	if(type == "REQ") {
        		if(!gfnConfirm("합의요청 하시겠습니까?")) return;
        	} else if(type == "INTCFM") {
        		if(!gfnConfirm("내부확정 하시겠습니까?")) return;
        		trace("내부확정 :> CT10CLO로 UPDATE 중 나중에 다시 CT10SCLO로 원복 필요");
        	} else if(type == "APRVREQ") {
        		if(!gfnConfirm("승인요청 하시겠습니까?")) return;
        	}
        	
        	this.divViewCompBody04.divEditor.getContent(this.dsCntr, 0, "SIGN_ORGNL", "fnSave2")
        }

        this.fnSave2 = function()
        {
        	var sSvcID = "saveCntr";
        	var sController = "epro.cntr.service.BCntrService.saveCntr";
        	var sInDatasets = "dsCntr=dsCntr:A dsCntrItem=dsCntrItem:A dsCntrInsrnc=dsCntrInsrnc:A dsCntrPay=dsCntrPay:A";
        	var sOutDatasets = "dsCntr=dsCntr";
        	var sCallbackFunc = "fnTrCallBack";
        				
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
          * @함수명	: fnTrCallBack
          * @input    	: strSvcID(트랜잭션 ID), strErrCd(트랜잭션 결과 코드), strErrMsg(트랜잭션 결과 메시지)
          * @desc     	: Transaction Callback함수
          */
        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	if(strErrCd < 0) return;
        	
        	switch(strSvcID)
        	{
        		case "readCntr" :
        			//작성중
        			if("CT10WRI" == this.dsCntr.getColumn(0,"CD_CNTR_STTS")){		
        				gfnSetObj("A"); //저장, 삭제, 내부확정, 합의요청		
        				this.divViewCompBody04.divEditor.fnEditorInit(this.dsCntr.getColumn(0,"SIGN_ORGNL"), "N");
        			}else{				
        				var start = "<div style="+"color:#333333;font:20 malgun gothic;>";
        				var end   = "</div>";			
        				var doc = this.divViewCompBody04.WebBrowser00.getProperty("document");
        				doc.callMethod("write", start + this.dsCntr.getColumn(0,"SIGN_ORGNL") + end);

        				// 합의완료
        				if("CT10SCLO" == this.dsCntr.getColumn(0,"CD_CNTR_STTS")){
        					gfnSetObj("B");  //계약품의
        					//내부확정 여부에 따라 내부확정 버튼 활성화
        					if(this.dsCntr.getColumn(0,"ALT_INTL_CFM") != "Y"){}
        				}
        				// 품의중작성중
        				if("CT10WAT" == this.dsCntr.getColumn(0,"CD_CNTR_STTS")){	
        					gfnSetObj("C");  //결재작성중				
        				}
        				// 품의중
        				if("CT10APP" == this.dsCntr.getColumn(0,"CD_CNTR_STTS")){
        					gfnSetObj("D");  //품의문서보기			
        				}
        				// 취소, 합의요청
        				if("CT10CXL" == this.dsCntr.getColumn(0,"CD_CNTR_STTS") || "CT10SREQ" == this.dsCntr.getColumn(0,"CD_CNTR_STTS")){
        					gfnSetObj("E");
        				}
        				// 계약완료
        				if("CT10CLO" == this.dsCntr.getColumn(0,"CD_CNTR_STTS")){	
        					gfnSetObj("F"); //출력, 계약회람
        				}
        			}
        			break;
        		case "saveCntr" : 
        			//합의요청
        			if(this.fv_trType == "REQ") {
        				var sSvcID = "updateCntrReq";
        				var sController = "epro.cntr.service.BCntrService.updateCntrReq";
        				var sInDatasets = "dsCntr=dsCntr";
        				var sOutDatasets = "dsCntr=dsCntr";
        				var sCallbackFunc = "fnTrCallBack";
        			
        				gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        			} 
        			//내부확정
        			else if(this.fv_trType == "INTCFM") { 
        				var sSvcID = "updateCntrIntCfm";
        				var sController = "epro.cntr.service.BCntrService.updateCntrIntCfm";
        				var sInDatasets = "dsCntr=dsCntr";
        				var sOutDatasets = "dsCntr=dsCntr";
        				var sCallbackFunc = "fnTrCallBack";
        			} 
        			//승인요청
        			else if(this.fv_trType == "APRVREQ") { 
        				var sArg = {	agv_doc:"AP11CNTR"
        								, agv_mthd:"AP12SEQ" 
        								, agv_appdoc : this.dsCntr.saveXML() + "▩" 
        												+ this.dsCntrItem.saveXML() + "▩" 
        												+ this.dsCntrPay.saveXML() + "▩" 
        												+ this.dsCntrInsrnc.saveXML()
        								, agv_ttl: "[계약]" + this.dsCntr.getColumn(0,"TTL")
        								, agv_ref1:this.dsCntr.getColumn(0,"CNTR_NO")
        								,agv_remote:"Y"			//팝업에 버튼이 있으면 Y , 없으면 N
        								,remote_btn: [{btnName:gfnMultiLabel("EPRO_LABEL_00456"), clickEventFunc:"fnReq"}]  //팝업에서 사용할 버튼들 이름. 
        							};
        				gfnModalPop(this, "BAprvReqPopup", "BAPRV::BAprvReqPopup.xfdl", sArg, "fnPopCallBack", 900, 800);
        			}
        			else {
        				gfnAlert("저장되었습니다.")
        				this.fnSearch();
        			}
        			this.fv_trType = "";
        			break;
        		case "updateCntrReq" : 
        			gfnAlert("합의요청 되었습니다.")
        			this.fnSearch();
        			break;
        		case "updateCntrIntCfm" : 
        			gfnAlert("내부확정 되었습니다.")
        			this.fnSearch();
        			break;
        		default:
        			break;	
        	}
        }

        /**
          * @함수명	: fnPtnrSrchPop
          * @desc     	: 협력사검색 팝업
          */
        this.fnPtnrSrchPop = function(obj,e)
        {
        	var sArg = { agv_id:this.dsCntr.getColumn(0,"PTNR_ID")
        				 ,agv_nm:this.dsCntr.getColumn(0,"PTNR_NM")
        			   }; 
        	gfnSearchComPtnr(this, "BPtnrSrchPopup", "fnPopCallBack", sArg);
        }

        /**
          * @함수명	: fnBtnAddItemMulti
          * @desc     	: 품목추가(멀티)
          */
        this.fnBtnAddItemMulti = function(obj,e)
        {
        	gfnSearchComMtrl(this, "BMtrlSrchPopup", "fnPopCallBack", {}, "Y");
        }

        /**
          * @함수명	: fnBtnAddItem
          * @desc     	: 품목추가(단일)
          */
        this.fnBtnAddItem = function(obj,e)
        {
        	var nRow = this.dsCntrItem.addRow();
        	this.dsCntrItem.setColumn(nRow,"PR_ITEM_ID","");
        	this.dsCntrItem.setColumn(nRow,"TNDR_ITEM_ID","");
        	this.dsCntrItem.setColumn(nRow,"RFQ_REQ_ITEM_ID","");
        	this.dsCntrItem.setColumn(nRow,"PO_ITEM_ID","");
        	this.dsCntrItem.setColumn(nRow,"ITM_NO",nRow+1);
        	this.dsCntrItem.setColumn(nRow,"CNTR_NO",this.dsCntr.getColumn(0,"CNTR_NO"));
        	this.dsCntrItem.setColumn(nRow,"CD_UNIT","");
        	this.dsCntrItem.setColumn(nRow,"QTY",0);
        	this.dsCntrItem.setColumn(nRow,"UNT_PRICE",0);
        	this.dsCntrItem.setColumn(nRow,"VAT",0);
        	this.dsCntrItem.setColumn(nRow,"AMT",0);
        }

        /**
          * @함수명	: fnBtnDelItem
          * @desc     	: 품목삭제
          */
        this.fnBtnDelItem = function(obj,e)
        {
        	
        	for(var i=this.dsCntrItem.rowcount;i>=0;i--){
        		if(this.dsCntrItem.getColumn(i,"CHECKED")==1){
        			this.dsCntrItem.deleteRow(i);
        		}
        	}
        	
        	//행 삭제 시 품목 및 납품정보에 품번을 재설정 한다.
         	for(var i=0; i<this.dsCntrItem.rowcount; i++){
         		if(i+1 != this.dsCntrItem.getColumn(i,"ITM_NO")){	//품번이 변경되었을 때만 변경한다.
         			this.dsCntrItem.setColumn(i,"ITM_NO",i+1);
         		}
         	}
        }

        /**
          * @함수명	: fnGridCntrItemOnexpandup
          * @desc     	: 그리드 expandup
          */
        this.fnGridCntrItemOnexpandup = function(obj,e)
        {
        	// 자재 검색
        	if("MTRL_NM" == gfnGrdBindColId(obj, obj.getCellPos())) { 
        		if(!gfnIsNull(this.dsCntrItem.getColumn(e.row,"PR_ITEM_ID")) || 
        		   !gfnIsNull(this.dsCntrItem.getColumn(e.row,"TNDR_ITEM_ID")) ||
        		   !gfnIsNull(this.dsCntrItem.getColumn(e.row,"RFQ_REQ_ITEM_ID")) ||
        		   !gfnIsNull(this.dsCntrItem.getColumn(e.row,"PO_ITEM_ID"))) return;
        		
        		var sArg = { agv_nm:this.dsCntrItem.getColumn(e.row,"MTRL_NM") }; 
        		gfnSearchComMtrl(this, "expandBMtrlSrchPopup", "fnPopCallBack", sArg, "N");
        	
        	// 창고 검색
        	}else if("SL_NM" == gfnGrdBindColId(obj, obj.getCellPos())){
        		//this.btn_strSrch_onclick();	
        	}
        }

        /**
          * @함수명	: fnBtnDlvReqDt
          * @desc     	: 납품요청일자 일괄적용
          */
        this.fnBtnDlvReqDt = function(obj,e)
        {
        	this.dsCntrItem.set_enableevent(false);
        	
        	for(var i=0; i<this.dsCntrItem.getRowCount(); i++){
        		this.dsCntrItem.setColumn(i,'DLV_REQ_DAY',this.divViewCompTitle00.calDlvReqDt.value);
        	}
        	
        	this.dsCntrItem.set_enableevent(true);
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
          * @함수명	: fnGridCntrItemOncellclick
          * @desc     	: 그리드 셀 클릭 이벤트
          */
        this.fnGridCntrItemOncellclick = function(obj,e)
        {
        			
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

        /**
        	@function	fnBtnPayItmOnclickAddDel()
        	@desc   	지급계획 추가,삭제 버튼 클릭 이벤트
        */
        this.fnBtnPayItmOnclickAddDel = function(obj,e)
        {
        	//추가
        	if(obj.name == "btnAddPayItm") {
        		var nRow = this.dsCntrPay.addRow();
        		
        		var nItemNo = 1;
        		if(nRow==0){
        			this.dsCntrPay.setColumn(nRow,"PYMT_ORDR",nItemNo);
        		} else {
        			nItemNo = nexacro.toNumber(this.dsCntrPay.getColumn(nRow-1,"PYMT_ORDR"))+1;
        			this.dsCntrPay.setColumn(nRow,"PYMT_ORDR",nItemNo);
        		}
        		this.dsCntrPay.setColumn(nRow,"CNTR_NO",this.dsCntr.getColumn(0,"CNTR_NO"));
        	} 
        	//삭제
        	else if (obj.name == "btnDelPayItm") {
        		for(var i=this.dsCntrPay.rowcount; i>=0; i--){
        			if(this.dsCntrPay.getColumn(i,"CHECKED")==1){
        				var nOrdr = this.dsCntrPay.getColumn(i,"PYMT_ORDR");
        				//지급계획 삭제 시, 해당하는 지급차수의 보증보험 전부 삭제
        				for(var j=0; j<this.dsCntrInsrnc.rowcount; j++){
        					if(nexacro.toNumber(nOrdr) == nexacro.toNumber(this.dsCntrInsrnc.getColumn(j,"PYMT_ORDR"))){
        						this.dsCntrInsrnc.deleteRow(j);
        					}
        				}
        				this.dsCntrPay.deleteRow(i);
        			}
        		}
        	}
        }

        /**
        	@function	fnBtnInsrncOnclickAddDel()
        	@desc   	보증보험 추가,삭제 버튼 클릭 이벤트
        */
        this.fnBtnInsrncOnclickAddDel = function(obj,e)
        {
        	//추가
        	if(obj.name == "btnAddInsrnc") {
        		if(this.dsCntrPay.rowcount < 1) {
        			gfnAlert("지급계획을 추가 해주세요");
        			return;
        		}
        		var nRow = this.dsCntrInsrnc.addRow();
        		this.dsCntrInsrnc.setColumn(nRow,"PYMT_ORDR", this.dsCntrPay.getColumn(this.dsCntrPay.rowposition, "PYMT_ORDR")); //보증보험유형
        		this.dsCntrInsrnc.setColumn(nRow,"CD_GRNT_INSRNC_TYPE",""); //보증보험유형
        		this.dsCntrInsrnc.setColumn(nRow,"CD_GRNT_MTHD",""); 		//보증유형
        	}
        	//삭제
        	else if(obj.name == "btnDelInsrnc") {
        		gfnDsChkDel(this.dsCntrInsrnc);
        	}
        }

        /**
        	@function	fnBtnAddCntrTemplateOnclick()
        	@desc   	계약내용 템플릿 참조 버튼 클릭 이벤트
        */
        this.fnBtnAddCntrTemplateOnclick = function(obj,e)
        {
        	var sArg = { avg_type: this.dsCntr.getColumn(0, "CD_CNTR_TYPE")
        				 , avg_ctgr: this.dsCntr.getColumn(0, "CD_CNTR_CTGR")};	
        	gfnModalPop(this, "CtnrTmplPop", "BCNTR::BCntrTmplPop.xfdl", {}, "fnPopCallBack", 1000, 500);
        }

        /**
        	@function	fnDsCntrPayOncolumnChanged()
        	@desc   	Pay의 지급율이 변경되면 지급금액을 변경한다.
        */
        this.fnDsCntrPayOncolumnChanged = function(obj,e)
        {
        	if(e.columnid == "PYMT_RT"){
        		this.fnCntrRtChanged(obj, e.columnid, e.row)
        	}
        }

        /**
        	@function	fnDsCntrInsrncOncolumnChanged()
        	@desc   	Insrnc의 보증급율이 변경되면 금액을 변경한다.
        */
        this.fnDsCntrInsrncOncolumnChanged = function(obj,e)
        {
        	if(e.columnid == "GRNT_RT"){
        		this.fnCntrRtChanged(obj, e.columnid, e.row)
        	}
        }

        /**
        	@function	fnCntrRtChanged
        	@desc   	지급율 보증률에 따라 금액을 변경한다
        */
        this.fnCntrRtChanged = function(obj,col,row)
        {
        	//지급계획
        	if(col == "PYMT_RT") {
        		if (obj.getColumn(row,"PYMT_RT") > 100){
        			obj.setColumn(row,"PYMT_RT",100);
        		}
        		var nRt = obj.getColumn(row,"PYMT_RT")
        		var nAmt = this.dsCntr.getColumn(0,"CNTR_SUM");
        		nRt = nRt*0.01;
        		if(gfnIsNull(nRt * nAmt)==false){
        			obj.setColumn(row,"PYMT_AMT", ( nRt * nAmt));
        		}	
        	} 
        	//이행보증
        	else if(col == "GRNT_RT") {
        		if (obj.getColumn(row,"GRNT_RT") > 100){
        			obj.setColumn(row,"GRNT_RT",100);
        		}
        		
        		var amt = this.dsCntr.getColumn(0,"CNTR_SUM");
        		var grnt = this.dsCntrInsrnc.getColumn(row,"GRNT_RT");
        		grnt = grnt * 0.01;
        		if(gfnIsNull(Math.round(grnt * amt))==false){
        			obj.setColumn(row,"GRNT_AMT", (Math.round(grnt * amt )));
        		}	
        	}
        }

        /**
        	@function	fnSsCntrOncolumnChanged()
        	@desc   	계약금액 변경시  수정
        */
        this.fnSsCntrOncolumnChanged = function(obj,e)
        {
        	if(e.columnid == "CNTR_SUM") {
        		for(var i=0; i<this.dsCntrPay.rowcount; i++) {
        			this.fnCntrRtChanged(this.dsCntrPay, "PYMT_RT", i);
        		}
        		
        		for(var i=0; i<this.dsCntrInsrnc.rowcount; i++) {
        			this.fnCntrRtChanged(this.dsCntrInsrnc, "GRNT_RT", i);
        		}
        	}	
        }

        /**
        	@function	fnOnkeydown()
        	@desc   	키 이벤트
        */
        this.fnOnkeydown = function(obj,e)
        {
        	if(e.keycode == 8) {
        		if(obj.name == "edtPtnrNm") {
        			this.dsCntr.setColumn(0, "PTNR_ID", "")
        		}		
        	} else if(e.keycode == 13) {
        		if(obj.name == "edtPtnrNm") {
        			var sArg = { agv_id:this.dsCntr.getColumn(0,"PTNR_ID")
        						 ,agv_nm:this.dsCntr.getColumn(0,"PTNR_NM")
        			   }; 
        			gfnSearchComPtnr(this, "BPtnrSrchPopup", "fnPopCallBack", sArg);
        		}		
        	}
        }

        /**
        	@function	fnCntrReq()
        	@desc   	합의요청
        */
        this.fnCntrReq = function()
        {
        	this.fnSave("REQ");
        }

        /**
        	@function	fnIntlCfm()
        	@desc   	내부확정
        */
        this.fnIntlCfm = function()
        {
        	this.fnSave("INTCFM");
        }

        /**
        	@function	fnAprvReq()
        	@desc   	승인요청
        */
        this.fnAprvReq = function()
        {
        	this.fnSave("APRVREQ");
        }

        /**
        	@function	fnTabOnchanged()
        	@desc   	승인요청
        */
        this.fnTabOnchanged = function(obj,e)
        {
        	if(obj.tabindex == 3) {
        		var sTableNm = "MM_CNTR";
        		var arrFileKey = [this.dsCntr.getColumn(0, "CNTR_NO")];
        		this.divViewCompBody00.Tab01.tabp04.fnFileInit(this, sTableNm, this.dsCntr, arrFileKey, "N");
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
            this.divViewCompBody00.Tab01.tabp01.btnPtnr.addEventHandler("onclick", this.fnPtnrSrchPop, this);
            this.divViewCompBody00.Tab01.tabp02.divViewCompTitle00.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompBody00.Tab01.tabp03.divViewCompTitle00.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompBody01.grdCntrItem.addEventHandler("onexpandup", this.fnGridCntrItemOnexpandup, this);
            this.divViewCompBody01.grdCntrItem.addEventHandler("oncellclick", this.fnGridCntrItemOncellclick, this);
            this.divViewCompTitle00.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompTitle00.btnSetReqDt.addEventHandler("onclick", this.fnBtnDlvReqDt, this);
            this.divViewCompTitle00.btnMtrlAdd.addEventHandler("onclick", this.fnBtnAddItemMulti, this);
            this.divViewCompTitle00.btnAddItem.addEventHandler("onclick", this.fnBtnAddItem, this);
            this.divViewCompTitle00.btnDelItem.addEventHandler("onclick", this.fnBtnDelItem, this);
            this.divViewCompTitle01.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompTitle01.btnAddPayItm.addEventHandler("onclick", this.fnBtnPayItmOnclickAddDel, this);
            this.divViewCompTitle01.btnDelPayItm.addEventHandler("onclick", this.fnBtnPayItmOnclickAddDel, this);
            this.divViewCompTitle02.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompTitle02.btnAddInsrnc.addEventHandler("onclick", this.fnBtnInsrncOnclickAddDel, this);
            this.divViewCompTitle02.btnDelInsrnc.addEventHandler("onclick", this.fnBtnInsrncOnclickAddDel, this);
            this.divViewCompTitle03.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompTitle03.btnAddCntrTemplate.addEventHandler("onclick", this.fnBtnAddCntrTemplateOnclick, this);
            this.divViewCompBody05.Tab01.tabp01.divViewCompTitle00.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompBody05.Tab01.tabp01.edtMtrlNm.addEventHandler("onkeydown", this.fn_onkeydown_event, this);
            this.divViewCompBody05.Tab01.tabp01.edtMtrlNm.addEventHandler("ontextchanged", this.fn_ontextchanged_event, this);
            this.divViewCompBody05.cboItem.addEventHandler("onitemchanged", this.div_41_cbo_itemChg_onitemchanged, this);
            this.divViewCompBody05.btnCntrItemRowDown.addEventHandler("onclick", this.fnBtnCntrItemRowUpDown, this);
            this.divViewCompBody05.btnCntrItemRowUp.addEventHandler("onclick", this.fnBtnCntrItemRowUpDown, this);
            this.divViewCompTitle04.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);

        };

        this.loadIncludeScript("BCntrDetail.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
