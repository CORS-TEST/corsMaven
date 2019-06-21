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
                this.set_name("BRfqWrtDetail");
                this.set_titletext("견적요청서작성");
                this._setFormPosition(0,0,1220,925);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsRfq", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column type=\"string\" id=\"ALT_TARG_CORP_OPEN\" size=\"1\"/><Column type=\"BIGDECIMAL\" id=\"RFQ_ODR\" size=\"22\"/><Column type=\"string\" id=\"RFQ_CLOSE_DAY\" size=\"8\"/><Column type=\"string\" id=\"CHRGR_ID\" size=\"50\"/><Column type=\"string\" id=\"TKEY\" size=\"20\"/><Column type=\"string\" id=\"ALT_RFQ_RSLT_OPEN\" size=\"1\"/><Column type=\"string\" id=\"ALT_OPEN_EXPLN\" size=\"1\"/><Column type=\"string\" id=\"TTL\" size=\"600\"/><Column type=\"string\" id=\"CNCL_RSN\" size=\"1500\"/><Column type=\"int\" id=\"TNDR_ODR\" size=\"22\"/><Column type=\"string\" id=\"OPEN_EXPLN_TIME\" size=\"6\"/><Column type=\"string\" id=\"RFQ_REQ_NO\" size=\"20\"/><Column type=\"string\" id=\"FAX\" size=\"50\"/><Column type=\"string\" id=\"CD_RFQ_SBMT_MTHD_NM\" size=\"40\"/><Column type=\"string\" id=\"CD_RFQ_SBMT_MTHD\" size=\"40\"/><Column type=\"string\" id=\"ALT_BDGT_OPEN\" size=\"1\"/><Column type=\"string\" id=\"CD_OPEN_TYPE_NM\" size=\"40\"/><Column type=\"string\" id=\"CD_OPEN_TYPE\" size=\"40\"/><Column type=\"string\" id=\"CHRGR_NM\" size=\"30\"/><Column type=\"string\" id=\"ALT_SVC_RFQ\" size=\"1\"/><Column type=\"string\" id=\"ALT_RFQ_EXPLN_ACT\" size=\"1\"/><Column type=\"string\" id=\"BRANCH_CD\" size=\"20\"/><Column type=\"string\" id=\"RFQ_CLOSE_TIME\" size=\"6\"/><Column type=\"BIGDECIMAL\" id=\"GOALAMT\" size=\"22\"/><Column type=\"string\" id=\"ALT_SVC_DTL_BID\" size=\"1\"/><Column type=\"string\" id=\"CRTR_ID\" size=\"50\"/><Column type=\"string\" id=\"WRTR_NM\" size=\"30\"/><Column type=\"string\" id=\"TNDR_NO\" size=\"20\"/><Column type=\"string\" id=\"CD_DOC_CTGR_NM\" size=\"40\"/><Column type=\"string\" id=\"CD_DOC_CTGR\" size=\"40\"/><Column type=\"string\" id=\"OPEN_EXPLN_ATTN_CNDTN\" size=\"1500\"/><Column type=\"string\" id=\"OPEN_EXPLN_DAY\" size=\"8\"/><Column type=\"string\" id=\"TEL\" size=\"150\"/><Column type=\"string\" id=\"CD_RFQ_AIM_NM\" size=\"40\"/><Column type=\"string\" id=\"CD_RFQ_AIM\" size=\"40\"/><Column type=\"datetime\" id=\"REQ_DT\" size=\"7\"/><Column type=\"string\" id=\"ALT_RFQ_PRICE_SBMT\" size=\"1\"/><Column type=\"string\" id=\"EMAIL\" size=\"100\"/><Column type=\"BIGDECIMAL\" id=\"AWRD_AMT\" size=\"22\"/><Column type=\"string\" id=\"OPEN_EXPLN_DR_TIME\" size=\"6\"/><Column type=\"string\" id=\"LAST_CHGR_ID\" size=\"50\"/><Column type=\"string\" id=\"ALT_RFQ_OPEN\" size=\"1\"/><Column type=\"string\" id=\"CD_RFQ_STTS_NM\" size=\"40\"/><Column type=\"string\" id=\"CD_RFQ_STTS\" size=\"40\"/><Column type=\"string\" id=\"WRTR_ID\" size=\"50\"/><Column type=\"string\" id=\"ALT_RFQ_EXPLN_NXT_NTC\" size=\"1\"/><Column type=\"int\" id=\"ATTCH_FILE_CNT\" size=\"22\"/><Column type=\"string\" id=\"RMARK\" size=\"3000\"/><Column type=\"string\" id=\"ALT_CERT\" size=\"1\"/><Column type=\"datetime\" id=\"LAST_CHG_DT\" size=\"7\"/><Column type=\"string\" id=\"RFQ_SBMT_PLC\" size=\"300\"/><Column type=\"string\" id=\"OPEN_EXPLN_AREA\" size=\"300\"/><Column type=\"datetime\" id=\"CRT_DT\" size=\"7\"/><Column type=\"string\" id=\"APP_DOC_ID\" size=\"20\"/><Column type=\"string\" id=\"CD_RFQ_CRNC\" size=\"40\"/><Column type=\"string\" id=\"PTNR_QUOTE_CRT_YN\" size=\"1\"/><Column type=\"string\" id=\"CD_PR_ITEM_STTS\" size=\"40\"/><Column type=\"string\" id=\"ALT_QTY_OPEN\" size=\"1\"/><Column id=\"COREXP_KIDS\" type=\"STRING\" size=\"256\"/><Column id=\"PR_ITEM_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRfqItem", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column type=\"string\" id=\"CHECKED\" size=\"300\"/><Column type=\"string\" id=\"SRC_GRP_NM\" size=\"300\"/><Column type=\"int\" id=\"RFQ_ODR\" size=\"22\"/><Column type=\"string\" id=\"RFQ_REQ_ITEM_ID\" size=\"20\"/><Column type=\"string\" id=\"FWD_REMARK\" size=\"1500\"/><Column type=\"string\" id=\"ITM_NO\" size=\"5\"/><Column type=\"BIGDECIMAL\" id=\"GOALAMT\" size=\"22\"/><Column type=\"string\" id=\"CRTR_ID\" size=\"50\"/><Column type=\"STRING\" id=\"DLV_REQ_DAY\" size=\"8\"/><Column type=\"string\" id=\"MTRL_GRP_ID\" size=\"20\"/><Column type=\"BIGDECIMAL\" id=\"CFM_AMT\" size=\"22\"/><Column type=\"string\" id=\"DTL_ADDR\" size=\"600\"/><Column type=\"BIGDECIMAL\" id=\"QTY\" size=\"22\"/><Column type=\"BIGDECIMAL\" id=\"AWRD_AMT\" size=\"22\"/><Column type=\"string\" id=\"MTRL_NM\" size=\"500\"/><Column type=\"string\" id=\"ADDR\" size=\"600\"/><Column type=\"string\" id=\"MTRL_CD_NM\" size=\"20\"/><Column type=\"string\" id=\"MTRL_CD\" size=\"20\"/><Column type=\"string\" id=\"SRC_GRP_ID\" size=\"20\"/><Column type=\"string\" id=\"RFQ_REQ_NO\" size=\"20\"/><Column type=\"string\" id=\"LAST_CHGR_ID\" size=\"50\"/><Column type=\"string\" id=\"PTNR_ID\" size=\"20\"/><Column type=\"string\" id=\"PTNR_NM\" size=\"20\"/><Column type=\"BIGDECIMAL\" id=\"AWRD_PRICE\" size=\"22\"/><Column type=\"string\" id=\"SL_NM\" size=\"40\"/><Column type=\"string\" id=\"STR_CD\" size=\"40\"/><Column type=\"string\" id=\"CD_UNIT_NM\" size=\"40\"/><Column type=\"string\" id=\"CD_UNIT\" size=\"40\"/><Column type=\"string\" id=\"SRCH_KEY\" size=\"600\"/><Column type=\"BIGDECIMAL\" id=\"GOALUNT_PRICE\" size=\"22\"/><Column type=\"string\" id=\"MTRL_GRP_NM\" size=\"500\"/><Column type=\"BIGDECIMAL\" id=\"CFM_PRICE\" size=\"22\"/><Column type=\"string\" id=\"DLV_PLC_NM\" size=\"300\"/><Column type=\"int\" id=\"ATTCH_FILE_CNT\" size=\"22\"/><Column type=\"string\" id=\"PR_ITEM_ID\" size=\"20\"/><Column type=\"string\" id=\"RMARK\" size=\"3000\"/><Column type=\"datetime\" id=\"LAST_CHG_DT\" size=\"7\"/><Column type=\"string\" id=\"ZIP_NO\" size=\"30\"/><Column type=\"datetime\" id=\"CRT_DT\" size=\"7\"/><Column type=\"string\" id=\"BRANCH_CD\" size=\"20\"/><Column type=\"string\" id=\"PR_NO\" size=\"20\"/><Column type=\"string\" id=\"ALT_RMARK\" size=\"2\"/><Column type=\"string\" id=\"ALT_RMARK_NM\" size=\"10\"/><Column type=\"string\" id=\"TKEY\" size=\"10\"/><Column id=\"IM_ODR_NO\" type=\"STRING\" size=\"256\"/><Column type=\"string\" id=\"REQR_ID\" size=\"100\"/><Column type=\"string\" id=\"REQR_NM\" size=\"100\"/><Column id=\"SPEC_FILE_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRfqPtnr", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column type=\"string\" id=\"CHECKED\" size=\"300\"/><Column type=\"int\" id=\"RFQ_ODR\" size=\"22\"/><Column type=\"string\" id=\"RCV_DT\" size=\"7\"/><Column type=\"string\" id=\"SBMTR_NM\" size=\"30\"/><Column type=\"string\" id=\"RFQ_EXPLN_AREA\" size=\"300\"/><Column type=\"string\" id=\"RFQ_PTNR_ID\" size=\"20\"/><Column type=\"string\" id=\"CRTR_ID\" size=\"50\"/><Column type=\"string\" id=\"RCVR_NM\" size=\"30\"/><Column type=\"int\" id=\"EVAL_SCORE\" size=\"22\"/><Column type=\"string\" id=\"ALT_PRGRS_CMPL\" size=\"1\"/><Column type=\"BIGDECIMAL\" id=\"CFM_AMT\" size=\"22\"/><Column type=\"string\" id=\"ALT_PWIN_PTNR\" size=\"1\"/><Column type=\"string\" id=\"RFQ_REQ_NO\" size=\"20\"/><Column type=\"string\" id=\"LAST_CHGR_ID\" size=\"50\"/><Column type=\"string\" id=\"PTNR_ID\" size=\"20\"/><Column type=\"string\" id=\"PTNR_NM\" size=\"20\"/><Column type=\"string\" id=\"RCVR_ID\" size=\"50\"/><Column type=\"string\" id=\"CD_RFQ_SUBM_STTS_NM\" size=\"40\"/><Column type=\"string\" id=\"CD_RFQ_SUBM_STTS\" size=\"40\"/><Column type=\"int\" id=\"TECH_SCORE\" size=\"22\"/><Column type=\"string\" id=\"RFQ_EXPLN_DAY\" size=\"8\"/><Column type=\"string\" id=\"SBMTR_ID\" size=\"50\"/><Column type=\"string\" id=\"SBMT_DT\" size=\"7\"/><Column type=\"string\" id=\"RFQ_EXPLN_TIME\" size=\"6\"/><Column type=\"string\" id=\"ALT_PRGRS_TARG\" size=\"1\"/><Column type=\"int\" id=\"ATTCH_FILE_CNT\" size=\"22\"/><Column type=\"string\" id=\"RMARK\" size=\"1500\"/><Column type=\"BIGDECIMAL\" id=\"RFQ_AMT\" size=\"22\"/><Column type=\"string\" id=\"LAST_CHG_DT\" size=\"7\"/><Column type=\"string\" id=\"CRT_DT\" size=\"7\"/><Column type=\"string\" id=\"BRANCH_CD\" size=\"20\"/><Column type=\"string\" id=\"BIZ_NO\" size=\"20\"/><Column type=\"string\" id=\"RPRSTV_NM\" size=\"20\"/><Column type=\"string\" id=\"CD_RFQ_CRNC\" size=\"20\"/><Column type=\"string\" id=\"RPRSTV_HP\" size=\"100\"/><Column type=\"string\" id=\"RPRSTV_EMAIL\" size=\"100\"/><Column type=\"string\" id=\"RPRSTV_USER_ID\" size=\"100\"/><Column type=\"string\" id=\"EVAL_POINT\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRfqPtnrQuote", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column type=\"BIGDECIMAL\" id=\"AMT\" size=\"22\"/><Column type=\"string\" id=\"RFQ_REQ_ITEM_ID\" size=\"20\"/><Column type=\"BIGDECIMAL\" id=\"ETC_PAY\" size=\"22\"/><Column type=\"string\" id=\"CRTR_ID\" size=\"50\"/><Column type=\"string\" id=\"RFQ_PTNR_ID\" size=\"20\"/><Column type=\"string\" id=\"SPEC\" size=\"600\"/><Column type=\"BIGDECIMAL\" id=\"PSN_PAY\" size=\"22\"/><Column type=\"BIGDECIMAL\" id=\"CMF_QTY\" size=\"22\"/><Column type=\"BIGDECIMAL\" id=\"RFQ_PRICE\" size=\"22\"/><Column type=\"string\" id=\"DLV_AVL_DAY\" size=\"8\"/><Column type=\"BIGDECIMAL\" id=\"CFM_AMT\" size=\"22\"/><Column type=\"string\" id=\"INT_TYPE\" size=\"50\"/><Column type=\"BIGDECIMAL\" id=\"QTY\" size=\"22\"/><Column type=\"BIGDECIMAL\" id=\"PROFIT_PAY\" size=\"22\"/><Column type=\"string\" id=\"ITEM_NM\" size=\"600\"/><Column type=\"string\" id=\"LAST_CHGR_ID\" size=\"50\"/><Column type=\"string\" id=\"UNIT\" size=\"60\"/><Column type=\"int\" id=\"SEQ\" size=\"22\"/><Column type=\"BIGDECIMAL\" id=\"CFM_PRICE\" size=\"22\"/><Column type=\"BIGDECIMAL\" id=\"MTRL_PAY\" size=\"22\"/><Column type=\"string\" id=\"PTNR_RFQ_ITEM_ID\" size=\"20\"/><Column type=\"string\" id=\"CD_RFQ_CRNC_NM\" size=\"40\"/><Column type=\"string\" id=\"CD_RFQ_CRNC\" size=\"40\"/><Column type=\"string\" id=\"RMARK\" size=\"1500\"/><Column type=\"BIGDECIMAL\" id=\"RFQ_AMT\" size=\"22\"/><Column type=\"string\" id=\"LAST_CHG_DT\" size=\"7\"/><Column type=\"BIGDECIMAL\" id=\"UNT_PRICE\" size=\"22\"/><Column type=\"string\" id=\"CRT_DT\" size=\"7\"/></ColumnInfo><Rows><Row/></Rows>");
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

            obj = new Dataset("dsRfqReqFile", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column type=\"string\" id=\"CHECKED\" size=\"300\"/><Column type=\"int\" id=\"RFQ_ODR\" size=\"22\"/><Column type=\"string\" id=\"REQ_FILE_NM\" size=\"300\"/><Column type=\"string\" id=\"ALT_MDT\" size=\"1\"/><Column type=\"string\" id=\"RFQ_REQ_FILE_ID\" size=\"20\"/><Column type=\"string\" id=\"RMARK\" size=\"1500\"/><Column type=\"string\" id=\"CD_FILE_TYPE_NM\" size=\"40\"/><Column type=\"string\" id=\"CD_FILE_TYPE\" size=\"40\"/><Column type=\"string\" id=\"RFQ_REQ_NO\" size=\"20\"/><Column type=\"string\" id=\"BRANCH_CD\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRefFile", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"REF_REF_TBL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REF_REF_KEY_1\" type=\"STRING\" size=\"256\"/><Column id=\"REF_REF_KEY_2\" type=\"STRING\" size=\"256\"/><Column id=\"REF_REF_KEY_3\" type=\"STRING\" size=\"256\"/><Column id=\"REF_REF_KEY_4\" type=\"STRING\" size=\"256\"/><Column id=\"REF_REF_KEY_5\" type=\"STRING\" size=\"256\"/><Column id=\"REF_TBL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_1\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_2\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_3\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_4\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_5\" type=\"STRING\" size=\"256\"/><Column id=\"CRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PK1_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PK2_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PK3_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PK4_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PK5_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY1\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY2\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY3\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY4\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRprstv", this);
            obj._setContents("<ColumnInfo><Column type=\"string\" id=\"RPRSTV_HP\" size=\"100\"/><Column type=\"string\" id=\"RPRSTV_EMAIL\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSpecFile", this);
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PO_ITEM_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdET13", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdET27", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM20", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM11", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM15", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM10", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM32", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div1", "absolute", "0", "0", null, "43", "15", null, this);
            obj.set_taborder("30");
            obj.getSetter("objNm").set("컨트롤 박스");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);
            obj = new Combo("cboDocType", "absolute", "10", "10", "150", "24", null, null, this.div1);
            this.div1.addChild(obj.name, obj);
            obj.set_taborder("42");
            obj.set_innerdataset("@dsCdCM10");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("문서유형");
            obj.set_cssclass("cbo_default_r");
            obj.set_index("-1");
            obj = new Edit("edtDocNo", "absolute", "162", "10", "250", "24", null, null, this.div1);
            obj.set_taborder("45");
            obj.getSetter("objNm").set("견적요청번호");
            obj.set_cssclass("edt_default_r");
            this.div1.addChild(obj.name, obj);
            obj = new Button("btnRfqReq", "absolute", null, "10", "70", "24", "3", null, this.div1);
            obj.set_taborder("46");
            obj.set_text("견적요청");
            obj.set_cssclass("btn_WF_SearchBtn");
            obj.set_enable("true");
            obj.getSetter("objNm").set("견적요청");
            this.div1.addChild(obj.name, obj);

            obj = new Div("div2", "absolute", "0", "63", null, "24", "15", null, this);
            obj.set_taborder("31");
            obj.getSetter("objNm").set("DIV-헤더 타이틀");
            this.addChild(obj.name, obj);
            obj = new Button("btnOpHead", "absolute", "0%", "0", "147", "24", null, null, this.div2);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.getSetter("objNm").set("견적요청서 접기펼치기 버튼");
            obj.set_text("견적요청서");
            obj.getSetter("lbcd").set("");
            obj.style.set_background("URL('theme://images/sta_WF_Subtitle.png') left middle");
            obj.style.set_border("0 solid #d5d5d5ff");
            obj.style.set_padding("0 0 2 17");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 Dotum");
            this.div2.addChild(obj.name, obj);
            obj = new Button("btnRfqTypeSelect", "absolute", null, "0", "90", "24", "2", null, this.div2);
            obj.set_taborder("22");
            obj.set_text("견적유형선택");
            obj.set_cssclass("btn_WF_Custom");
            obj.getSetter("objNm").set("견적유형선택");
            this.div2.addChild(obj.name, obj);

            obj = new Div("div21", "absolute", "0", "95", null, "209", "15", null, this);
            obj.set_taborder("32");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("DIV-헤더 상세");
            this.addChild(obj.name, obj);
            obj = new Tab("Tab01", "absolute", "0%", "0", null, "220", "0%", null, this.div21);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.set_cssclass("tab_default");
            obj.getSetter("objNm").set("견적요청서 TAB");
            obj.set_preload("false");
            this.div21.addChild(obj.name, obj);
            obj = new Tabpage("tabp01", this.div21.Tab01);
            obj.set_text("기본정보");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("기본정보");
            obj.getSetter("lbcd").set("");
            this.div21.Tab01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "46", null, "33", "0", null, this.div21.Tab01.tabp01);
            obj.set_taborder("137");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "78", null, "33", "0", null, this.div21.Tab01.tabp01);
            obj.set_taborder("138");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine03", "absolute", "0", "110", null, "33", "0", null, this.div21.Tab01.tabp01);
            obj.set_taborder("139");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine04", "absolute", "0", "142", null, "33", "0", null, this.div21.Tab01.tabp01);
            obj.set_taborder("140");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "14", null, "33", "0", null, this.div21.Tab01.tabp01);
            obj.set_taborder("136");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staRfqStates", "absolute", "800", "14", "117", "33", null, null, this.div21.Tab01.tabp01);
            obj.set_taborder("4");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("기본정보-타이틀 : 상태");
            this.div21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtTtl", "absolute", "123", "18", "579", "24", null, null, this.div21.Tab01.tabp01);
            obj.set_taborder("1");
            obj.set_lengthunit("utf8");
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("견적요청명");
            this.div21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new MaskEdit("medGoalamt", "absolute", "122", "146", "220", "24", null, null, this.div21.Tab01.tabp01);
            obj.set_taborder("26");
            obj.set_readonly("true");
            obj.set_mask("#,##0");
            obj.set_autoselect("true");
            obj.set_cssclass("mae_default_r");
            obj.style.set_color("blue");
            obj.style.set_font("bold 10 Dotum");
            obj.getSetter("objNm").set("구매예상가");
            this.div21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtCdRfqStts", "absolute", "923", "18", "250", "24", null, null, this.div21.Tab01.tabp01);
            obj.set_taborder("5");
            obj.set_cssclass("edt_default_r");
            obj.getSetter("objNm").set("상태");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.div21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Button("btnGoalamt", "absolute", "337", "130", "24", "24", null, null, this.div21.Tab01.tabp01);
            obj.set_taborder("128");
            obj.set_cssclass("btn_WF_CalculatorSmall");
            obj.getSetter("objNm").set("총예산 계산 버튼");
            this.div21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staCrtrNm", "absolute", "0%", "46", "117", "33", null, null, this.div21.Tab01.tabp01);
            obj.set_taborder("6");
            obj.set_text("<fc v='red'>* </fc>견적마감일시");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("기본정보-타이틀 :  견적마감일시");
            obj.getSetter("lbcd").set("");
            obj.set_tooltiptext("견적마감일시를 지정합니다. 견적을 받은 업체는 지정된 시간안에 견적을 넣어야만 합니다.");
            obj.set_usedecorate("true");
            this.div21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staRfqAmt", "absolute", "0%", "142", "117", "33", null, null, this.div21.Tab01.tabp01);
            obj.set_taborder("25");
            obj.set_text("<fc v='red'>* </fc>구매예상가");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("기본정보-타이틀 : 구매예상가");
            obj.getSetter("lbcd").set("");
            obj.set_usedecorate("true");
            this.div21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Spin("spnRfqCloseTime", "absolute", "272", "51", "67", "24", null, null, this.div21.Tab01.tabp01);
            obj.set_taborder("8");
            obj.set_value("0");
            obj.set_max("23");
            obj.set_cssclass("cal_default");
            obj.getSetter("objNm").set("견적마감시간");
            this.div21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "339", "51", "24", "24", null, null, this.div21.Tab01.tabp01);
            obj.set_taborder("133");
            obj.set_text("시");
            this.div21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "248", "51", "24", "24", null, null, this.div21.Tab01.tabp01);
            obj.set_taborder("134");
            obj.set_text("일");
            this.div21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Calendar("cldRfqCloseDay", "absolute", "123", "51", "125", "24", null, null, this.div21.Tab01.tabp01);
            this.div21.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_cssclass("cal_default");
            obj.getSetter("objNm").set("견적마감일자");
            obj.set_editformat("yyyy.MM.dd");
            obj.set_dateformat("yyyy.MM.dd ddd");
            obj.set_value("null");
            obj = new Combo("cboCdRfqAim", "absolute", "523", "51", "250", "24", null, null, this.div21.Tab01.tabp01);
            this.div21.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.set_innerdataset("dsCdET27");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("견적목적");
            obj.set_value("null");
            obj.set_index("-1");
            obj = new Static("staRfqAmt00", "absolute", "0%", "110", "117", "33", null, null, this.div21.Tab01.tabp01);
            obj.set_taborder("20");
            obj.set_text("제안설명회");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("기본정보-타이틀 : 제안설명회");
            obj.getSetter("lbcd").set("");
            obj.set_tooltiptext("제안설명회를 필요로 하는 견적일 경우 실시여부와 일정을 공지합니다.");
            this.div21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staRfqAmt01", "absolute", "0%", "78", "117", "33", null, null, this.div21.Tab01.tabp01);
            obj.set_taborder("13");
            obj.set_text("견적옵션");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("기본정보-타이틀 : 견적옵션");
            obj.getSetter("lbcd").set("");
            obj.set_tooltiptext("예가공개 : 내부적으로 확인한 구매예상가격을업체에게 공개합니다.\r\n대상업체공개 : 견적을 받는 업체에게 자신을 제외하고 견적요청을 받은 업체를 정보를 알려줍니다.");
            this.div21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new CheckBox("chkAltTargCorpOpen", "absolute", "247", "83", "120", "24", null, null, this.div21.Tab01.tabp01);
            obj.set_taborder("15");
            obj.set_text("대상업체공개");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_cssclass("chk_default");
            obj.getSetter("objNm").set("대상업체공개 여부");
            obj.getSetter("lbcd").set("");
            this.div21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new CheckBox("chkAltBdgtOpen", "absolute", "123", "83", "120", "24", null, null, this.div21.Tab01.tabp01);
            obj.set_taborder("14");
            obj.set_text("예가공개");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_cssclass("chk_default");
            obj.getSetter("objNm").set("예가공개 여부");
            this.div21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Radio("rdAltRfqExplnAct", "absolute", "122", "115", "220", "24", null, null, this.div21.Tab01.tabp01);
            this.div21.Tab01.tabp01.addChild(obj.name, obj);
            var rdAltRfqExplnAct_innerdataset = new Dataset("rdAltRfqExplnAct_innerdataset", this.div21.Tab01.tabp01.rdAltRfqExplnAct);
            rdAltRfqExplnAct_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">실시</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미실시</Col></Row></Rows>");
            obj.set_innerdataset(rdAltRfqExplnAct_innerdataset);
            obj.set_taborder("21");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_cssclass("rdo_default");
            obj.getSetter("objNm").set("제안설명회실시 여부");
            obj = new CheckBox("chkAltRfqExplnNxtNtc", "absolute", "406", "115", "250", "24", null, null, this.div21.Tab01.tabp01);
            obj.set_taborder("22");
            obj.set_text("제안설명회 일정 추후 공고");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_cssclass("chk_default");
            obj.getSetter("objNm").set("제안설명회  추후공지여부");
            obj.getSetter("lbcd").set("");
            this.div21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staRfqStates03", "absolute", "800", "78", "117", "33", null, null, this.div21.Tab01.tabp01);
            obj.set_taborder("18");
            obj.set_text("<fc v='red'>* </fc>견적가제출");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("기본정보-타이틀 : 견적가제출");
            obj.getSetter("lbcd").set("");
            obj.set_usedecorate("true");
            this.div21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Radio("rdAltRfqPriceSbmt", "absolute", "923", "83", "250", "24", null, null, this.div21.Tab01.tabp01);
            this.div21.Tab01.tabp01.addChild(obj.name, obj);
            var rdAltRfqPriceSbmt_innerdataset = new Dataset("rdAltRfqPriceSbmt_innerdataset", this.div21.Tab01.tabp01.rdAltRfqPriceSbmt);
            rdAltRfqPriceSbmt_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">가격제출</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">가격 미제출</Col></Row></Rows>");
            obj.set_innerdataset(rdAltRfqPriceSbmt_innerdataset);
            obj.set_taborder("19");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_cssclass("rdo_default");
            obj.getSetter("objNm").set("견적가제출 여부");
            obj = new Static("staCrDt01", "absolute", "401", "46", "117", "33", null, null, this.div21.Tab01.tabp01);
            obj.set_taborder("9");
            obj.set_text("<fc v='red'>* </fc>견적목적");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("기본정보-타이틀 : 견적목적");
            obj.set_usedecorate("true");
            this.div21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "748", "18", "55", "24", null, null, this.div21.Tab01.tabp01);
            obj.set_taborder("3");
            obj.set_text("회차");
            obj.getSetter("lbcd").set("");
            this.div21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtRfqOdr", "absolute", "708", "18", "40", "24", null, null, this.div21.Tab01.tabp01);
            obj.set_taborder("2");
            obj.set_cssclass("edt_default");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.style.setStyleValue("font", "disabled", "bold 9 Dotum");
            obj.getSetter("objNm").set("견적차수");
            this.div21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Combo("cboCdOpenType", "absolute", "923", "51", "250", "24", null, null, this.div21.Tab01.tabp01);
            this.div21.Tab01.tabp01.addChild(obj.name, obj);
            var cboCdOpenType_innerdataset = new Dataset("cboCdOpenType_innerdataset", this.div21.Tab01.tabp01.cboCdOpenType);
            cboCdOpenType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">전체공개</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">제한공개</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미공개</Col></Row></Rows>");
            obj.set_innerdataset(cboCdOpenType_innerdataset);
            obj.set_taborder("12");
            obj.set_innerdataset("dsCdET13");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("공개유형");
            obj.set_visible("false");
            obj = new Static("staRfqStates00", "absolute", "800", "110", "117", "33", null, null, this.div21.Tab01.tabp01);
            obj.set_taborder("23");
            obj.set_text("<fc v='red'>* </fc>견적통화");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("기본정보-타이틀 : 견적통화");
            obj.getSetter("lbcd").set("");
            obj.set_usedecorate("true");
            this.div21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staRfqStates01", "absolute", "401", "142", "117", "33", null, null, this.div21.Tab01.tabp01);
            obj.set_taborder("27");
            obj.set_text("수량공개");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("기본정보-타이틀 : 수량공개");
            obj.getSetter("lbcd").set("");
            this.div21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Combo("cboCdRfqCrnc", "absolute", "923", "115", "250", "24", null, null, this.div21.Tab01.tabp01);
            this.div21.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("24");
            obj.set_innerdataset("dsCdCM15");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("견적통화");
            obj = new Static("staCrDt03", "absolute", "401", "78", "117", "33", null, null, this.div21.Tab01.tabp01);
            obj.set_taborder("16");
            obj.set_text("<fc v='red'>* </fc>인증서");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("기본정보-타이틀 : 인증서");
            obj.set_tooltiptext("견적시 공인인증서로 인증을 하고자 할 경우 사용합니다.");
            obj.set_usedecorate("true");
            this.div21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Radio("rdAltCert", "absolute", "523", "83", "250", "24", null, null, this.div21.Tab01.tabp01);
            this.div21.Tab01.tabp01.addChild(obj.name, obj);
            var rdAltCert_innerdataset = new Dataset("rdAltCert_innerdataset", this.div21.Tab01.tabp01.rdAltCert);
            rdAltCert_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(rdAltCert_innerdataset);
            obj.set_taborder("17");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_cssclass("rdo_default");
            obj.getSetter("objNm").set("인증서사용 여부");
            obj.set_rowcount("1");
            obj.set_index("-1");
            obj = new Radio("rdAltRfqExplnAct00", "absolute", "523", "146", "250", "24", null, null, this.div21.Tab01.tabp01);
            this.div21.Tab01.tabp01.addChild(obj.name, obj);
            var rdAltRfqExplnAct00_innerdataset = new Dataset("rdAltRfqExplnAct00_innerdataset", this.div21.Tab01.tabp01.rdAltRfqExplnAct00);
            rdAltRfqExplnAct00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">공개</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미공개</Col></Row></Rows>");
            obj.set_innerdataset(rdAltRfqExplnAct00_innerdataset);
            obj.set_taborder("28");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_cssclass("rdo_default");
            obj.getSetter("objNm").set("수량공개 여부");
            obj = new Static("staRfqStates02", "absolute", "800", "142", "117", "33", null, null, this.div21.Tab01.tabp01);
            obj.set_taborder("29");
            obj.set_text("<fc v='red'>* </fc>견적제출방식");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("기본정보-타이틀 : 견적제출방식");
            obj.getSetter("lbcd").set("");
            obj.set_usedecorate("true");
            this.div21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Radio("rdAltSvcDtlBid", "absolute", "923", "146", "250", "24", null, null, this.div21.Tab01.tabp01);
            this.div21.Tab01.tabp01.addChild(obj.name, obj);
            var rdAltSvcDtlBid_innerdataset = new Dataset("rdAltSvcDtlBid_innerdataset", this.div21.Tab01.tabp01.rdAltSvcDtlBid);
            rdAltSvcDtlBid_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">일반견적</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">상세견적</Col></Row></Rows>");
            obj.set_innerdataset(rdAltSvcDtlBid_innerdataset);
            obj.set_taborder("31");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_cssclass("rdo_default");
            obj.getSetter("objNm").set("견적제출방식");
            obj.set_index("-1");
            obj = new Static("staCrDt00", "absolute", "800", "46", "117", "33", null, null, this.div21.Tab01.tabp01);
            obj.set_taborder("135");
            obj.set_text("<fc v='red'>* </fc>공개유형");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("기본정보-타이틀 : 공개유형");
            obj.getSetter("lbcd").set("");
            obj.set_usedecorate("true");
            obj.set_visible("false");
            this.div21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staTtl", "absolute", "0%", "14", "117", "33", null, null, this.div21.Tab01.tabp01);
            obj.set_taborder("0");
            obj.set_text("<fc v='red'>*</fc> 견적요청명");
            obj.set_cssclass("sta_WF_Label");
            obj.set_usedecorate("true");
            obj.getSetter("objNm").set("기본정보-타이틀 : 견적요청명");
            this.div21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Tabpage("tabp02", this.div21.Tab01);
            obj.set_text("특이사항");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("특기사항");
            this.div21.Tab01.addChild(obj.name, obj);
            obj = new TextArea("txaRfqRemark", "absolute", "0", "10", null, null, "0", "17", this.div21.Tab01.tabp02);
            obj.set_taborder("8");
            obj.set_scrollbars("autovert");
            obj.set_cssclass("txt_default");
            obj.getSetter("objNm").set("특이사항");
            this.div21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Tabpage("tabpage6", this.div21.Tab01);
            obj.set_text("견적 담당자  ");
            obj.getSetter("objNm").set("견적 담당자");
            this.div21.Tab01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "20", null, "33", "0", null, this.div21.Tab01.tabpage6);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div21.Tab01.tabpage6.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "52", null, "33", "0", null, this.div21.Tab01.tabpage6);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div21.Tab01.tabpage6.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "84", null, "33", "0", null, this.div21.Tab01.tabpage6);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div21.Tab01.tabpage6.addChild(obj.name, obj);
            obj = new Static("staViewCompLine03", "absolute", "0", "116", null, "33", "0", null, this.div21.Tab01.tabpage6);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div21.Tab01.tabpage6.addChild(obj.name, obj);
            obj = new Static("staWFDALabel00", "absolute", "0%", "10", null, "132", "0%", null, this.div21.Tab01.tabpage6);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div21.Tab01.tabpage6.addChild(obj.name, obj);
            obj = new Static("staPchrgr", "absolute", "0", "20", "117", "33", null, null, this.div21.Tab01.tabpage6);
            obj.set_taborder("29");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("견적담당자-타이틀 : 담당자");
            this.div21.Tab01.tabpage6.addChild(obj.name, obj);
            obj = new Static("staTel", "absolute", "0", "52", "117", "33", null, null, this.div21.Tab01.tabpage6);
            obj.set_taborder("33");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("견적담당자-타이틀 : 전화번호");
            this.div21.Tab01.tabpage6.addChild(obj.name, obj);
            obj = new Static("staEmail", "absolute", "0", "84", "117", "33", null, null, this.div21.Tab01.tabpage6);
            obj.set_taborder("34");
            obj.set_text("e-Mail");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("견적담당자-타이틀 : 이메일");
            this.div21.Tab01.tabpage6.addChild(obj.name, obj);
            obj = new Static("staFax", "absolute", "0", "116", "117", "33", null, null, this.div21.Tab01.tabpage6);
            obj.set_taborder("35");
            obj.set_text("Fax");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("견적담당자-타이틀 : 팩스");
            this.div21.Tab01.tabpage6.addChild(obj.name, obj);
            obj = new Edit("edtChrgrId", "absolute", "123", "24", "100", "24", null, null, this.div21.Tab01.tabpage6);
            obj.set_taborder("36");
            obj.set_cssclass("edt_default");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("objNm").set("견적담당자ID");
            this.div21.Tab01.tabpage6.addChild(obj.name, obj);
            obj = new Edit("edtChrgrNm", "absolute", "225", "24", "298", "24", null, null, this.div21.Tab01.tabpage6);
            obj.set_taborder("37");
            obj.set_lengthunit("utf8");
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("견적담당자명");
            this.div21.Tab01.tabpage6.addChild(obj.name, obj);
            obj = new Button("btnChrgr", "absolute", "499", "24", "24", "24", null, null, this.div21.Tab01.tabpage6);
            obj.set_taborder("38");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("견적담당자 검색 버튼");
            this.div21.Tab01.tabpage6.addChild(obj.name, obj);
            obj = new Edit("edtTel", "absolute", "123", "57", "400", "24", null, null, this.div21.Tab01.tabpage6);
            obj.set_taborder("39");
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("전화번호");
            this.div21.Tab01.tabpage6.addChild(obj.name, obj);
            obj = new Edit("edtEmail", "absolute", "123", "89", "400", "24", null, null, this.div21.Tab01.tabpage6);
            obj.set_taborder("40");
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("이메일");
            this.div21.Tab01.tabpage6.addChild(obj.name, obj);
            obj = new Edit("edtFax", "absolute", "123", "121", "400", "24", null, null, this.div21.Tab01.tabpage6);
            obj.set_taborder("41");
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("팩스");
            this.div21.Tab01.tabpage6.addChild(obj.name, obj);
            obj = new Tabpage("tabp03", this.div21.Tab01);
            obj.set_text("첨부파일");
            obj.set_url("CCOMP::compNFileUpDown.xfdl");
            obj.getSetter("objNm").set("첨부파일");
            this.div21.Tab01.addChild(obj.name, obj);
            obj = new Tabpage("tabp04", this.div21.Tab01);
            obj.set_text("공개설명회");
            obj.getSetter("objNm").set("공개설명회");
            this.div21.Tab01.addChild(obj.name, obj);
            obj = new Static("staWFDALabel05", "absolute", "0%", "10", null, "158", "0%", null, this.div21.Tab01.tabp04);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div21.Tab01.tabp04.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "20", null, "33", "0", null, this.div21.Tab01.tabp04);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div21.Tab01.tabp04.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "52", null, "33", "0", null, this.div21.Tab01.tabp04);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div21.Tab01.tabp04.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "84", null, "33", "0", null, this.div21.Tab01.tabp04);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div21.Tab01.tabp04.addChild(obj.name, obj);
            obj = new Static("staViewCompLine03", "absolute", "0", "116", null, "50", "0", null, this.div21.Tab01.tabp04);
            obj.set_taborder("74");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div21.Tab01.tabp04.addChild(obj.name, obj);
            obj = new Static("staOpenExplnArea", "absolute", "0%", "84", "117", "33", null, null, this.div21.Tab01.tabp04);
            obj.set_taborder("57");
            obj.set_text("장소");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("공개설명회-타이틀 : 장소");
            this.div21.Tab01.tabp04.addChild(obj.name, obj);
            obj = new Static("staOpenExplnAttnCndtn", "absolute", "0%", "116", "117", "50", null, null, this.div21.Tab01.tabp04);
            obj.set_taborder("58");
            obj.set_text("참여조건");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("공개설명회-타이틀 : 참여조건");
            this.div21.Tab01.tabp04.addChild(obj.name, obj);
            obj = new Edit("edtOpenExplnArea", "absolute", "123", "88", "1063", "24", null, null, this.div21.Tab01.tabp04);
            obj.set_taborder("59");
            obj.set_lengthunit("utf8");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("설명회 장소");
            this.div21.Tab01.tabp04.addChild(obj.name, obj);
            obj = new TextArea("txaOpenExplnAttnCndtn", "absolute", "121", "119", "1065", "43", null, null, this.div21.Tab01.tabp04);
            obj.set_taborder("60");
            obj.set_scrollbars("none");
            obj.set_cssclass("txt_default");
            obj.getSetter("objNm").set("공개설명회 참여조건");
            this.div21.Tab01.tabp04.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "380", "57", "24", "24", null, null, this.div21.Tab01.tabp04);
            obj.set_taborder("62");
            obj.set_text("시");
            this.div21.Tab01.tabp04.addChild(obj.name, obj);
            obj = new Static("staTtl00", "absolute", "407", "57", "120", "24", null, null, this.div21.Tab01.tabp04);
            obj.set_taborder("63");
            obj.set_text("설명회  소요시간");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("objNm").set("발주서명");
            this.div21.Tab01.tabp04.addChild(obj.name, obj);
            obj = new Static("staOpenExplnDay", "absolute", "0%", "52", "117", "33", null, null, this.div21.Tab01.tabp04);
            obj.set_taborder("64");
            obj.set_text("설명회 일시");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("공개설명회-타이틀 : 설명회 일시");
            this.div21.Tab01.tabp04.addChild(obj.name, obj);
            obj = new Calendar("cldOpenExplnDay", "absolute", "123", "57", "120", "24", null, null, this.div21.Tab01.tabp04);
            this.div21.Tab01.tabp04.addChild(obj.name, obj);
            obj.set_taborder("65");
            obj.set_dateformat("yyyy.MM.dd");
            obj.set_cssclass("cal_default");
            obj.getSetter("objNm").set("공객설명회일자");
            obj.set_value("null");
            obj.set_editformat("yyyy.MM.dd");
            obj = new Static("Static02", "absolute", "247", "57", "24", "24", null, null, this.div21.Tab01.tabp04);
            obj.set_taborder("66");
            obj.set_text("일");
            this.div21.Tab01.tabp04.addChild(obj.name, obj);
            obj = new Static("staAltRfqOpen", "absolute", "0%", "20", "117", "33", null, null, this.div21.Tab01.tabp04);
            obj.set_taborder("67");
            obj.set_text("공개설명회");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("공개설명회-타이틀 : 공개설명회");
            this.div21.Tab01.tabp04.addChild(obj.name, obj);
            obj = new Radio("rdAltRfqOpen", "absolute", "123", "28", "251", "24", null, null, this.div21.Tab01.tabp04);
            this.div21.Tab01.tabp04.addChild(obj.name, obj);
            var rdAltRfqOpen_innerdataset = new Dataset("rdAltRfqOpen_innerdataset", this.div21.Tab01.tabp04.rdAltRfqOpen);
            rdAltRfqOpen_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">실시</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미실시</Col></Row></Rows>");
            obj.set_innerdataset(rdAltRfqOpen_innerdataset);
            obj.set_taborder("68");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_cssclass("rdo_default");
            obj.getSetter("objNm").set("공개설명회실시 여부");
            obj.set_enableevent("false");
            obj = new MaskEdit("medOpenExplnTime", "absolute", "271", "57", "104", "24", null, null, this.div21.Tab01.tabp04);
            obj.set_taborder("69");
            obj.set_displaynulltext("00:00:00");
            obj.set_type("string");
            obj.set_mask("##:##:##");
            obj.set_clipmode("excludespace");
            obj.set_cssclass("mae_default");
            obj.getSetter("objNm").set("공개설명회 마감시각");
            this.div21.Tab01.tabp04.addChild(obj.name, obj);
            obj = new MaskEdit("medOpenExplnDrTime", "absolute", "527", "57", "104", "24", null, null, this.div21.Tab01.tabp04);
            obj.set_taborder("70");
            obj.set_displaynulltext("00:00:00");
            obj.set_type("string");
            obj.set_mask("##:##:##");
            obj.set_clipmode("excludespace");
            obj.set_cssclass("mae_default");
            obj.getSetter("objNm").set("설명회 소요 시간");
            this.div21.Tab01.tabp04.addChild(obj.name, obj);

            obj = new Div("div3", "absolute", "0", "323", null, "24", "10", null, this);
            obj.set_taborder("33");
            obj.getSetter("objNm").set("DIV-품목 타이틀");
            this.addChild(obj.name, obj);
            obj = new Button("btnOPItem", "absolute", "0", "0", "288", "24", null, null, this.div3);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.getSetter("objNm").set("품목 접기펼치기 버튼");
            obj.set_text("품목");
            obj.getSetter("lbcd").set("");
            obj.style.set_background("URL('theme://images/sta_WF_Subtitle.png') left middle");
            obj.style.set_border("0 solid #d5d5d5ff");
            obj.style.set_padding("0 0 2 17");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 Dotum");
            this.div3.addChild(obj.name, obj);
            obj = new Button("btnRfqItmDel", "absolute", null, "0", "65", "24", "2", null, this.div3);
            obj.set_taborder("29");
            obj.set_text(" 삭제");
            obj.set_cssclass("btn_WF_Delete");
            obj.getSetter("objNm").set("품목삭제버튼");
            obj.getSetter("lbcd").set("");
            this.div3.addChild(obj.name, obj);
            obj = new Button("btnRfqItmAdd", "absolute", null, "0", "65", "24", "70", null, this.div3);
            obj.set_taborder("33");
            obj.set_text(" 추가");
            obj.set_cssclass("btn_WF_Add");
            obj.getSetter("objNm").set("품목추가버튼");
            obj.getSetter("lbcd").set("");
            this.div3.addChild(obj.name, obj);
            obj = new Button("btnDlvBatSet", "absolute", null, "0", "120", "24", "216", null, this.div3);
            obj.set_taborder("41");
            obj.set_text("납품일자 일괄설정");
            obj.set_cssclass("btn_WF_Custom");
            obj.getSetter("objNm").set("납품일자 일괄설정");
            obj.getSetter("lbcd").set("");
            this.div3.addChild(obj.name, obj);
            obj = new Button("btnPopExcelUp", "absolute", null, "0", "81", "24", "411", null, this.div3);
            obj.set_taborder("42");
            obj.set_text("엑셀업로드");
            obj.set_cssclass("btn_WF_Custom");
            obj.getSetter("title").set("엑셀업로드");
            obj.set_visible("false");
            this.div3.addChild(obj.name, obj);
            obj = new Button("btnCtnrAdd", "absolute", null, "0", "75", "24", "138", null, this.div3);
            obj.set_taborder("44");
            obj.set_text("계약참조");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_visible("true");
            obj.getSetter("objNm").set("계약참조");
            obj.getSetter("lbcd").set("");
            this.div3.addChild(obj.name, obj);
            obj = new Button("btnFavo", "absolute", null, "0", "70", "24", "339", null, this.div3);
            obj.set_taborder("45");
            obj.set_text("즐겨찾기");
            obj.set_cssclass("btn_WF_Custom");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("즐겨찾기");
            this.div3.addChild(obj.name, obj);

            obj = new Div("div4", "absolute", "0", "589", null, "24", "15", null, this);
            obj.set_taborder("36");
            obj.getSetter("objNm").set("DIV-품목 상세-탭 헤더");
            this.addChild(obj.name, obj);
            obj = new Button("btnOPItemDetail", "absolute", "0", "0", "133", "24", null, null, this.div4);
            obj.set_taborder("39");
            obj.set_cssclass("btn_WF_DivClose");
            obj.getSetter("objNm").set("품목 상세정보 접기펼치기");
            obj.set_text("품목 상세정보");
            obj.style.set_background("URL('theme://images/sta_WF_Subtitle.png') left middle");
            obj.style.set_border("0 solid #d5d5d5ff");
            obj.style.set_padding("0 0 2 17");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 Dotum");
            this.div4.addChild(obj.name, obj);

            obj = new Div("div41", "absolute", "0", "619", null, "293", "15", null, this);
            obj.set_taborder("3");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("DIV-품목 상세 - 텝 입력");
            this.addChild(obj.name, obj);
            obj = new Tab("Tab02", "absolute", "0.08%", "37", null, "261", "0%", null, this.div41);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.getSetter("objNm").set("품목 상세정보 TAB");
            this.div41.addChild(obj.name, obj);
            obj = new Tabpage("tabp01", this.div41.Tab02);
            obj.set_text("상세데이터");
            obj.style.set_background("white");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("상세데이터");
            this.div41.Tab02.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "20", null, "33", "0", null, this.div41.Tab02.tabp01);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div41.Tab02.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "52", null, "33", "0", null, this.div41.Tab02.tabp01);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div41.Tab02.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "84", null, "33", "0", null, this.div41.Tab02.tabp01);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div41.Tab02.tabp01.addChild(obj.name, obj);
            obj = new Static("staWFDALabel05", "absolute", "0%", "11", null, "102", "0%", null, this.div41.Tab02.tabp01);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div41.Tab02.tabp01.addChild(obj.name, obj);
            obj = new Static("staMtrlGrp", "absolute", "0%", "20", "117", "33", null, null, this.div41.Tab02.tabp01);
            obj.set_taborder("29");
            obj.set_text("품목분류");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("소싱그룹");
            this.div41.Tab02.tabp01.addChild(obj.name, obj);
            obj = new Static("staFctry", "absolute", "400", "20", "117", "24", null, null, this.div41.Tab02.tabp01);
            obj.set_taborder("31");
            obj.set_text("창고");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div41.Tab02.tabp01.addChild(obj.name, obj);
            obj = new Static("staPrice", "absolute", "401", "84", "117", "33", null, null, this.div41.Tab02.tabp01);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("단가");
            this.div41.Tab02.tabp01.addChild(obj.name, obj);
            obj = new Static("staAmt", "absolute", "813", "84", "117", "33", null, null, this.div41.Tab02.tabp01);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("구매예상가");
            this.div41.Tab02.tabp01.addChild(obj.name, obj);
            obj = new MaskEdit("medQty", "absolute", "123", "89", "157", "24", null, null, this.div41.Tab02.tabp01);
            obj.set_taborder("3");
            obj.set_cssclass("mae_default");
            obj.set_enable("true");
            obj.set_mask("#,##0.00");
            obj.getSetter("objNm").set("수량");
            obj.set_autoselect("true");
            this.div41.Tab02.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtMtrlGrpId", "absolute", "123", "25", "100", "24", null, null, this.div41.Tab02.tabp01);
            obj.set_taborder("49");
            obj.set_enable("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("objNm").set("품목그룹코드");
            obj.set_cssclass("edt_default_r");
            obj.set_readonly("true");
            this.div41.Tab02.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtMtrlGrpNm", "absolute", "225", "25", "250", "24", null, null, this.div41.Tab02.tabp01);
            obj.set_taborder("50");
            obj.set_enable("true");
            obj.getSetter("objNm").set("품목그룹명");
            obj.set_cssclass("edt_default_r");
            obj.set_readonly("true");
            this.div41.Tab02.tabp01.addChild(obj.name, obj);
            obj = new Button("btnMtrlGrpCd", "absolute", "451", "25", "24", "24", null, null, this.div41.Tab02.tabp01);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("소싱그룹 검색 버튼");
            obj.set_enableevent("false");
            obj.set_visible("false");
            this.div41.Tab02.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtMtrlCd", "absolute", "122", "57", "100", "24", null, null, this.div41.Tab02.tabp01);
            obj.set_taborder("52");
            obj.set_enable("true");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.set_autoselect("true");
            obj.getSetter("objNm").set("품목코드");
            obj.set_cssclass("edt_default");
            obj.set_visible("true");
            this.div41.Tab02.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtMtrlNm", "absolute", "224", "57", "250", "24", null, null, this.div41.Tab02.tabp01);
            obj.set_taborder("53");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.style.set_selectbackground("black");
            obj.getSetter("objNm").set("품목명");
            obj.set_cssclass("edt_default");
            obj.set_visible("true");
            this.div41.Tab02.tabp01.addChild(obj.name, obj);
            obj = new Button("btn_mtrlCd", "absolute", "450", "57", "24", "24", null, null, this.div41.Tab02.tabp01);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("자재검색버튼");
            this.div41.Tab02.tabp01.addChild(obj.name, obj);
            obj = new MaskEdit("medGoaluntPrice", "absolute", "524", "89", "250", "24", null, null, this.div41.Tab02.tabp01);
            obj.set_taborder("5");
            obj.set_cssclass("mae_default");
            obj.set_mask("#,##0.00");
            obj.getSetter("objNm").set("단가");
            obj.set_autoselect("true");
            this.div41.Tab02.tabp01.addChild(obj.name, obj);
            obj = new MaskEdit("medGoalamt", "absolute", "936", "89", "250", "24", null, null, this.div41.Tab02.tabp01);
            obj.set_taborder("6");
            obj.set_cssclass("mae_default_r");
            obj.set_mask("#,##0");
            obj.getSetter("objNm").set("구매예상가");
            obj.set_autoselect("true");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div41.Tab02.tabp01.addChild(obj.name, obj);
            obj = new Combo("cdCdUnit", "absolute", "282", "89", "90", "24", null, null, this.div41.Tab02.tabp01);
            this.div41.Tab02.tabp01.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_innerdataset("@dsCdCM11");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("단위");
            obj.set_cssclass("cbo_default");
            obj = new Static("staQtyUnit", "absolute", "0%", "84", "117", "33", null, null, this.div41.Tab02.tabp01);
            obj.set_taborder("61");
            obj.set_text("수량/단위");
            obj.set_cssclass("sta_WF_Label");
            this.div41.Tab02.tabp01.addChild(obj.name, obj);
            obj = new Static("staMtrlCd", "absolute", "0%", "52", "117", "33", null, null, this.div41.Tab02.tabp01);
            obj.set_taborder("62");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_Label");
            this.div41.Tab02.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtCdFctry", "absolute", "523", "25", "100", "24", null, null, this.div41.Tab02.tabp01);
            obj.set_taborder("68");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_default");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("objNm").set("품목코드");
            this.div41.Tab02.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtCdFctryNm", "absolute", "625", "25", "250", "24", null, null, this.div41.Tab02.tabp01);
            obj.set_taborder("69");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_default");
            obj.style.set_selectbackground("black");
            obj.getSetter("objNm").set("품목명");
            this.div41.Tab02.tabp01.addChild(obj.name, obj);
            obj = new Button("btnCdFctry", "absolute", "851", "25", "24", "24", null, null, this.div41.Tab02.tabp01);
            obj.set_taborder("70");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("자재검색버튼");
            this.div41.Tab02.tabp01.addChild(obj.name, obj);
            obj = new Tabpage("tabp04", this.div41.Tab02);
            obj.set_text("품목 특이사항");
            obj.getSetter("objNm").set("품목 특기사항");
            this.div41.Tab02.addChild(obj.name, obj);
            obj = new TextArea("txaFwdRemark", "absolute", "0", "10", null, "165", "0", null, this.div41.Tab02.tabp04);
            obj.set_taborder("1");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("품목텍스트");
            obj.set_cssclass("txt_default");
            this.div41.Tab02.tabp04.addChild(obj.name, obj);
            obj = new Tabpage("tabp05", this.div41.Tab02);
            obj.set_text("첨부파일");
            obj.getSetter("objNm").set("첨부파일");
            obj.set_url("CCOMP::compNFileUpDown.xfdl");
            this.div41.Tab02.addChild(obj.name, obj);
            obj = new Edit("edtItemNo00", "absolute", "1", "4", "119", "24", null, null, this.div41);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_cssclass("edt_default_r");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("objNm").set("품목코드");
            this.div41.addChild(obj.name, obj);
            obj = new Button("btnItemRowUp00", "absolute", "512", "4", "22", "24", null, null, this.div41);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_ListUp");
            obj.getSetter("objNm").set("이전(품목)");
            this.div41.addChild(obj.name, obj);
            obj = new Button("btnItemRowDown00", "absolute", "536", "4", "21", "24", null, null, this.div41);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_ListDown");
            obj.getSetter("objNm").set("다음(품목)");
            this.div41.addChild(obj.name, obj);
            obj = new Combo("cboItemChg00", "absolute", "122", "4", "387", "24", null, null, this.div41);
            this.div41.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_innerdataset("@dsRfqItem");
            obj.set_codecolumn("ITM_NO");
            obj.set_datacolumn("MTRL_NM");
            obj.set_cssclass("cbo_default_r");
            obj.getSetter("objNm").set("품목명");

            obj = new Div("div5", "absolute", "0", "938", null, "24", "15", null, this);
            obj.set_taborder("42");
            obj.getSetter("objNm").set("DIV-대상업체");
            this.addChild(obj.name, obj);
            obj = new Button("btnOPItem", "absolute", "0", "0", "185", "24", null, null, this.div5);
            obj.set_taborder("50");
            obj.set_cssclass("btn_WF_DivClose");
            obj.getSetter("objNm").set("대상업체 접기펼치기 버튼");
            obj.set_text("대상업체");
            obj.getSetter("lbcd").set("");
            obj.style.set_background("URL('theme://images/sta_WF_Subtitle.png') left middle");
            obj.style.set_border("0 solid #d5d5d5ff");
            obj.style.set_padding("0 0 2 17");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 Dotum");
            this.div5.addChild(obj.name, obj);
            obj = new Button("btnPtnrAdd", "absolute", null, "0", "108", "24", "0", null, this.div5);
            obj.set_taborder("43");
            obj.set_text(" 대상업체추가");
            obj.set_cssclass("btn_WF_Add");
            obj.getSetter("objNm").set("대상업체 추가버튼");
            obj.getSetter("lbcd").set("");
            this.div5.addChild(obj.name, obj);
            obj = new Button("btnRfqExplnMailSend", "absolute", null, "0", "128", "24", "110", null, this.div5);
            obj.set_taborder("51");
            obj.set_text("제안설명회메일발송");
            obj.set_cssclass("btn_module");
            obj.getSetter("objNm").set("제안설명회 메일 발송 버튼");
            obj.getSetter("lbcd").set("");
            obj.set_enable("true");
            this.div5.addChild(obj.name, obj);

            obj = new Div("div51", "absolute", "0", "972", null, "164", "15", null, this);
            obj.set_taborder("43");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("DIV-대상업체 상세");
            this.addChild(obj.name, obj);
            obj = new Grid("grdRfqPtnr", "absolute", "0%", "2", null, null, "0%", "3", this.div51);
            obj.set_taborder("0");
            obj.set_binddataset("dsRfqPtnr");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("comboselect");
            obj.set_cellsizingtype("col");
            obj.set_cellclickbound("cell");
            obj.getSetter("objNm").set("대상업체 그리드");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"MMODE\"><Columns><Column size=\"55\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"200\" band=\"left\"/><Column size=\"90\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"250\"/><Column size=\"55\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"평가\"/><Cell col=\"1\" text=\"사업자번호\"/><Cell col=\"2\" text=\"협력사명\"/><Cell col=\"3\" text=\"대표자명\"/><Cell col=\"4\" text=\"제안설명회일자\"/><Cell col=\"5\" text=\"제안설명회시간\"/><Cell col=\"6\" text=\"제안설명회장소\"/><Cell col=\"7\" text=\"삭제\"/></Band><Band id=\"body\"><Cell style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:EVAL_POINT\"/><Cell col=\"1\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:PTNR_ID\" mask=\"@@@-@@-@@@@@\" maskchar=\" \"/><Cell col=\"2\" style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:PTNR_NM\"/><Cell col=\"3\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:RPRSTV_NM\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"date\" text=\"bind:RFQ_EXPLN_DAY\" mask=\"yyyy.MM.dd\" maskchar=\".\" editautoselect=\"true\" editdisplay=\"display\" calendardisplay=\"edit\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"mask\" style=\"align:center;\" text=\"bind:RFQ_EXPLN_TIME\" mask=\"99:99\" maskchar=\"0\" editautoselect=\"true\" editdisplay=\"edit\" combodisplay=\"display\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:RFQ_EXPLN_AREA\" editautoselect=\"true\" editdisplay=\"edit\"/><Cell col=\"7\" displaytype=\"button\" text=\"삭제\"/></Band></Format><Format id=\"VMODE\"><Columns><Column size=\"55\" band=\"left\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"90\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"250\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"평가\"/><Cell col=\"1\" text=\"사업자번호\"/><Cell col=\"2\" text=\"협력사명\"/><Cell col=\"3\" text=\"대표자명\"/><Cell col=\"4\" text=\"제안설명회일자\"/><Cell col=\"5\" text=\"제안설명회시간\"/><Cell col=\"6\" text=\"제안설명회장소\"/></Band><Band id=\"body\"><Cell style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:EVAL_POINT\"/><Cell col=\"1\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:BIZ_NO\" mask=\"###-##-#####\" maskchar=\" \"/><Cell col=\"2\" style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:PTNR_NM\"/><Cell col=\"3\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:RPRSTV_NM\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"none\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:RFQ_EXPLN_DAY\" mask=\"yyyy.MM.dd\" editdisplay=\"display\" calendardisplay=\"edit\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" style=\"align:center;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:RFQ_EXPLN_TIME\" mask=\"@@:@@\" maskchar=\"0\" editdisplay=\"edit\" combodisplay=\"edit\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:RFQ_EXPLN_AREA\" editdisplay=\"edit\"/></Band></Format></Formats>");
            this.div51.addChild(obj.name, obj);
            obj = new PopupDiv("PopupDiv00", "absolute", "2.21%", "30.49%", "336", "90", null, null, this.div51);
            obj.set_text("PopupDiv00");
            obj.style.set_background("#ffffffff");
            obj.set_scrollbars("none");
            this.div51.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "0%", "0", null, "90", "0%", null, this.div51.PopupDiv00);
            obj.set_taborder("0");
            obj.set_binddataset("ds_rprstv");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"200\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"전화번호\"/><Cell col=\"1\" text=\"E-MAIL\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:RPRSTV_HP\"/><Cell col=\"1\" text=\"bind:RPRSTV_EMAIL\"/></Band></Format></Formats>");
            this.div51.PopupDiv00.addChild(obj.name, obj);

            obj = new Div("div6", "absolute", "0", "1160", null, "24", "15", null, this);
            obj.set_taborder("45");
            obj.getSetter("objNm").set("DIV-견적요청파일 타이틀");
            this.addChild(obj.name, obj);
            obj = new Button("btnFileAdd", "absolute", null, "0", "65", "24", "70", null, this.div6);
            obj.set_taborder("53");
            obj.set_text(" 추가");
            obj.set_cssclass("btn_WF_Add");
            obj.getSetter("objNm").set("견적요청 파일 추가 버튼");
            obj.getSetter("lbcd").set("");
            this.div6.addChild(obj.name, obj);
            obj = new Button("btnOPItem", "absolute", "0", "0", "219", "24", null, null, this.div6);
            obj.set_taborder("54");
            obj.set_cssclass("btn_WF_DivClose");
            obj.getSetter("objNm").set("견적요청파일 접기펼치기 버튼");
            obj.set_text("견적요청 파일");
            obj.getSetter("lbcd").set("");
            obj.style.set_background("URL('theme://images/sta_WF_Subtitle.png') left middle");
            obj.style.set_border("0 solid #d5d5d5ff");
            obj.style.set_padding("0 0 2 17");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 Dotum");
            this.div6.addChild(obj.name, obj);
            obj = new Button("btnFileDel", "absolute", null, "0", "65", "24", "2", null, this.div6);
            obj.set_taborder("51");
            obj.set_text(" 삭제");
            obj.set_cssclass("btn_WF_Delete");
            obj.getSetter("objNm").set("견적요청 파일 삭제 버튼");
            obj.getSetter("lbcd").set("");
            this.div6.addChild(obj.name, obj);

            obj = new Div("div61", "absolute", "0", "1194", null, "164", "15", null, this);
            obj.set_taborder("46");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("DIV-견적요청파일 상세");
            this.addChild(obj.name, obj);
            obj = new Grid("grdRfqReqFile", "absolute", "0%", "0", null, null, "0%", "5", this.div61);
            obj.set_taborder("0");
            obj.set_binddataset("dsRfqReqFile");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("comboselect");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_cellclickbound("cell");
            obj.set_selectscrollmode("scroll");
            obj.getSetter("objNm").set("견적요청파일 그리드");
            obj._setContents("<Formats><Format id=\"MMODE\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"250\" band=\"left\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"400\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" editdisplay=\"display\"/><Cell col=\"1\" text=\"요청 파일\"/><Cell col=\"2\" text=\"파일유형\"/><Cell col=\"3\" text=\"필수여부\"/><Cell col=\"4\" text=\"비고\"/><Cell col=\"5\" text=\"파일요청번호\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:CHECKED\" editdisplay=\"display\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" text=\"bind:REQ_FILE_NM\" editautoselect=\"true\" editdisplay=\"edit\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:CD_FILE_TYPE\" editautoselect=\"true\" combodataset=\"dsCdCM32\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" combodisplayrowcount=\"0\" combodisplay=\"edit\"/><Cell col=\"3\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ALT_MDT\" editautoselect=\"true\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"text\" text=\"bind:RMARK\" editautoselect=\"true\" editdisplay=\"edit\"/><Cell col=\"5\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:RFQ_REQ_FILE_ID\"/></Band></Format><Format id=\"VMODE\"><Columns><Column size=\"250\" band=\"left\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"400\"/><Column size=\"120\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"요청 파일\"/><Cell col=\"1\" text=\"파일유형\"/><Cell col=\"2\" text=\"필수여부\"/><Cell col=\"3\" text=\"비고\"/><Cell col=\"4\" text=\"파일요청번호\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"bind:REQ_FILE_NM\" editdisplay=\"edit\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"bind:CD_FILE_TYPE_NM\" combodataset=\"dsCdCM32\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" combodisplayrowcount=\"0\" combodisplay=\"edit\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"expr:ALT_MDT==&quot;1&quot;?&quot;예&quot;:&quot;아니오&quot;\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" text=\"bind:RMARK\" editdisplay=\"edit\"/><Cell col=\"4\" text=\"bind:RFQ_REQ_FILE_ID\"/></Band></Format></Formats>");
            this.div61.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "98.58%", "0", "15", "937", null, null, this);
            obj.set_taborder("48");
            obj.set_visible("false");
            obj.style.set_background("#ff7272ff");
            obj.set_text("w15");
            this.addChild(obj.name, obj);

            obj = new Div("div31", "absolute", "0%", "357", null, "211", "15", null, this);
            obj.set_taborder("62");
            obj.getSetter("objNm").set("DIV-품목 상세");
            this.addChild(obj.name, obj);
            obj = new Grid("grdRfqItem", "absolute", "0%", "0", null, null, "0%", "37", this.div31);
            obj.set_taborder("2");
            obj.getSetter("objNm").set("품목 그리드");
            obj.set_binddataset("dsRfqItem");
            obj.getSetter("f_filter").set("N");
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
            obj.set_selecttype("row");
            obj.set_cellsizingtype("row");
            obj.getSetter("f_copyitemcolumn").set("MTRL_CD");
            obj.set_cellmovingtype("col");
            obj.getSetter("f_editcol").set("MTRL_CD,ALT_RMARK_NM");
            obj.set_extendsizetype("row");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autosizebandtype("body");
            obj.set_autoenter("select");
            obj.set_enableevent("true");
            obj._setContents("<Formats><Format id=\"MMODE\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"55\"/><Column size=\"90\"/><Column size=\"300\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"130\"/><Column size=\"67\" band=\"right\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" text=\"품번\"/><Cell col=\"2\" text=\"품목코드\" autosizecol=\"default\"/><Cell col=\"3\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;품목명\"/><Cell col=\"4\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;수량\"/><Cell col=\"5\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;단위\"/><Cell col=\"6\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;단가\"/><Cell col=\"7\" text=\"구매예상가\"/><Cell col=\"8\" text=\"확정금액\"/><Cell col=\"9\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;납품요청일자\"/><Cell col=\"10\" displaytype=\"normal\" text=\"창고\"/><Cell col=\"11\" text=\"파일수\"/><Cell col=\"12\" text=\"요청자\"/><Cell col=\"13\" text=\"구매요청번호\"/><Cell col=\"14\" text=\"구매요청품목번호\"/><Cell col=\"15\" text=\"시방서\"/></Band><Band id=\"body\" style=\"cellpadding:2 2 2 2 ;\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"background2: ;\" text=\"bind:CHECKED\" editdisplay=\"display\" expandshow=\"hide\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"none\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:ITM_NO\" editdisplay=\"edit\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:MTRL_CD\" editautoselect=\"true\" editdisplay=\"edit\"/><Cell col=\"3\" edittype=\"expr:PR_ITEM_ID  == null ? 'text' : 'none'\" style=\"align:left;background:EXPR(PR_ITEM_ID  == null ? '' : '#f5f5f5ff');background2:EXPR(PR_ITEM_ID  == null ? '' : '#f5f5f5ff');\" text=\"bind:MTRL_NM\" editautoselect=\"true\" expandshow=\"expr:PR_ITEM_ID == null ? 'show' : 'hide'\" expandsize=\"21\" expandimage=\"expr:PR_ITEM_ID == null ? 'url(&quot;img::grd_WF_Expand.png&quot;)' : ''\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;padding: ;\" text=\"bind:QTY\" mask=\"#,##0.00\" editautoselect=\"true\" editdisplay=\"edit\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"expr:PR_ITEM_ID  == null ? 'combo' : 'none'\" style=\"background:EXPR(PR_ITEM_ID  == null ? '' : '#f5f5f5ff');background2:EXPR(PR_ITEM_ID  == null ? '' : '#f5f5f5ff');\" text=\"bind:CD_UNIT\" editautoselect=\"true\" combodataset=\"dsCdCM11\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" combodisplay=\"edit\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:GOALUNT_PRICE\" mask=\"#,##0.00\" editautoselect=\"true\" editdisplay=\"edit\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:GOALAMT\" mask=\"#,##0\" maskchar=\" \" editautoselect=\"true\" editdisplay=\"edit\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:AWRD_AMT\" mask=\"#,##0\" maskchar=\" \" editautoselect=\"true\"/><Cell col=\"9\" displaytype=\"date\" edittype=\"date\" style=\"align: ;\" text=\"bind:DLV_REQ_DAY\" mask=\"yyyy.MM.dd \" maskchar=\"-\" editautoselect=\"true\" expandsize=\"13\" calendardisplay=\"edit\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" displaytype=\"normal\" edittype=\"expr:PR_ITEM_ID  == null ? 'text' : 'none'\" style=\"align:left;background:EXPR(PR_ITEM_ID  == null ? '' : '#f5f5f5ff');background2:EXPR(PR_ITEM_ID  == null ? '' : '#f5f5f5ff');\" text=\"bind:SL_NM\" editautoselect=\"true\" editdisplay=\"edit\" expandshow=\"expr:PR_ITEM_ID == null ? 'show' : 'hide'\" expandsize=\"21\" expandimage=\"expr:PR_ITEM_ID == null ? 'url(&quot;img::grd_WF_Expand.png&quot;)' : ''\" combodisplay=\"edit\"/><Cell col=\"11\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:ATTCH_FILE_CNT\"/><Cell col=\"12\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:REQR_NM\"/><Cell col=\"13\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:PR_NO\"/><Cell col=\"14\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:PR_ITEM_ID\"/><Cell col=\"15\" displaytype=\"button\" edittype=\"button\" text=\"expr:SPEC_FILE_NO == '' ? '첨부' : '조회'\"/></Band></Format><Format id=\"VMODE\"><Columns><Column size=\"55\"/><Column size=\"90\"/><Column size=\"300\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"72\" band=\"right\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"품번\"/><Cell col=\"1\" text=\"품목코드\"/><Cell col=\"2\" text=\"품목명\"/><Cell col=\"3\" text=\"수량\"/><Cell col=\"4\" text=\"단위\"/><Cell col=\"5\" text=\"단가\"/><Cell col=\"6\" text=\"구매예상가\"/><Cell col=\"7\" text=\"확정금액\"/><Cell col=\"8\" text=\"납품요청일자\"/><Cell col=\"9\" text=\"품목특이사항\"/><Cell col=\"10\" text=\"창고\"/><Cell col=\"11\" text=\"파일수\"/><Cell col=\"12\" text=\"요청자\"/><Cell col=\"13\" text=\"구매요청번호\"/><Cell col=\"14\" text=\"품목번호\"/><Cell col=\"15\" text=\"시방서\"/></Band><Band id=\"body\" style=\"cellpadding:2 2 2 2 ;\"><Cell displaytype=\"normal\" edittype=\"none\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:ITM_NO\" editdisplay=\"edit\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:MTRL_CD\" editautoselect=\"true\" editdisplay=\"edit\"/><Cell col=\"2\" style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:MTRL_NM\" tooltiptext=\"bind:MTRL_NM\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:QTY\" mask=\"#,##0.00\" maskchar=\" \" editautoselect=\"true\" editdisplay=\"edit\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:CD_UNIT_NM\" combodataset=\"dsCdCM11\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" combodisplay=\"display\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:GOALUNT_PRICE\" mask=\"#,##0.00\" maskchar=\" \"/><Cell col=\"6\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:GOALAMT\" mask=\"#,##0.00\" maskchar=\" \" editautoselect=\"true\" editdisplay=\"edit\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:AMT\" mask=\"#,##0\" maskchar=\" \" editautoselect=\"true\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"none\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:DLV_REQ_DAY\" mask=\"@@@@.@@.@@\" maskchar=\" \" editautoselect=\"true\" expandsize=\"13\" calendardisplay=\"display\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" displaytype=\"normal\" edittype=\"none\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:RMARK\" editdisplay=\"edit\"/><Cell col=\"10\" displaytype=\"normal\" edittype=\"none\" style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:SL_NM\" combodisplay=\"display\"/><Cell col=\"11\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:ATTCH_FILE_CNT\"/><Cell col=\"12\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:REQR_NM\"/><Cell col=\"13\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:PR_NO\"/><Cell col=\"14\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:PR_ITEM_ID\"/><Cell col=\"15\" displaytype=\"button\" edittype=\"button\" text=\"expr:SPEC_FILE_NO == '' ? '미첨부' : '조회'\"/></Band></Format><Format id=\"MMODE_PR\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"55\"/><Column size=\"90\"/><Column size=\"300\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"67\" band=\"right\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" text=\"품번\"/><Cell col=\"2\" text=\"품목코드\" autosizecol=\"default\"/><Cell col=\"3\" displaytype=\"normal\" text=\"품목명\"/><Cell col=\"4\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;수량\"/><Cell col=\"5\" displaytype=\"normal\" text=\"단위\"/><Cell col=\"6\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;단가\"/><Cell col=\"7\" text=\"구매예상가\"/><Cell col=\"8\" text=\"확정금액\"/><Cell col=\"9\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;납품요청일자\"/><Cell col=\"10\" displaytype=\"normal\" text=\"창고\"/><Cell col=\"11\" text=\"파일수\"/><Cell col=\"12\" text=\"요청자\"/><Cell col=\"13\" text=\"구매요청번호\"/><Cell col=\"14\" text=\"품목번호\"/><Cell col=\"15\" text=\"시방서\"/></Band><Band id=\"body\" style=\"cellpadding:2 2 2 2 ;\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"background2: ;\" text=\"bind:CHECKED\" editdisplay=\"display\" expandshow=\"hide\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"none\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:ITM_NO\" editdisplay=\"edit\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:MTRL_CD\" editautoselect=\"true\" editdisplay=\"edit\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:MTRL_NM\" expandshow=\"hide\" expandsize=\"21\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;padding: ;\" text=\"bind:QTY\" mask=\"#,##0.00\" editautoselect=\"true\" editdisplay=\"edit\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:CD_UNIT_NM\" combodataset=\"dsCdCM11\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" combodisplay=\"edit\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:GOALUNT_PRICE\" mask=\"#,##0.00\" editautoselect=\"true\" editdisplay=\"edit\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:GOALAMT\" mask=\"#,##0.00\" maskchar=\" \" editautoselect=\"true\" editdisplay=\"edit\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:AWRD_AMT\" mask=\"#,##0\" maskchar=\" \" editautoselect=\"true\"/><Cell col=\"9\" displaytype=\"date\" edittype=\"date\" style=\"align: ;\" text=\"bind:DLV_REQ_DAY\" mask=\"yyyy.MM.dd \" maskchar=\"-\" editautoselect=\"true\" expandsize=\"13\" calendardisplay=\"edit\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" displaytype=\"normal\" edittype=\"none\" style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:SL_NM\" editdisplay=\"edit\" expandshow=\"hide\" expandsize=\"21\" combodisplay=\"edit\"/><Cell col=\"11\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:ATTCH_FILE_CNT\"/><Cell col=\"12\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:REQR_NM\"/><Cell col=\"13\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:PR_NO\"/><Cell col=\"14\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:PR_ITEM_ID\"/><Cell col=\"15\" displaytype=\"button\" edittype=\"button\" text=\"expr:SPEC_FILE_NO == '' ? '첨부' : '조회'\"/></Band></Format></Formats>");
            this.div31.addChild(obj.name, obj);
            obj = new Div("divGrdBottom", "absolute", "0%", null, null, "28", "0%", "10", this.div31);
            obj.set_taborder("3");
            obj.getSetter("objNm").set("품목 그리드 기능");
            obj.set_url("CCOMP::CompGrdBtns.xfdl");
            this.div31.addChild(obj.name, obj);

            obj = new Button("btnPtnrDel", "absolute", null, "938", "78", "24", "-132", null, this);
            obj.set_taborder("65");
            obj.set_text(" 행삭제");
            obj.set_cssclass("btn_WF_Delete");
            obj.getSetter("objNm").set("대상업체 삭제버튼");
            obj.getSetter("lbcd").set("");
            obj.set_visible("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv01", "absolute", "1235", "372", "125", "28", null, null, this);
            obj.set_text("PopupDiv01");
            this.addChild(obj.name, obj);
            obj = new Calendar("cldDlvDayBat", "fixed", "0", "-1", "120", "24", null, null, this.PopupDiv01);
            this.PopupDiv01.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            obj.set_dateformat("yyyy.MM.dd ddd");
            obj.set_editformat("yyyy.MM.dd");
            obj.getSetter("objNm").set("납품일자 일괄설정 달력");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div1,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("30");
            		p.getSetter("objNm").set("컨트롤 박스");
            		p.set_cssclass("div_WF_SearchBg");

            	}
            );
            this.div1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.div2,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("31");
            		p.getSetter("objNm").set("DIV-헤더 타이틀");

            	}
            );
            this.div2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1042, 156, this.div21.Tab01.tabp01,
            	//-- Layout function
            	function(p) {
            		p.set_text("기본정보");
            		p.set_scrollbars("none");
            		p.getSetter("objNm").set("기본정보");
            		p.getSetter("lbcd").set("");

            	}
            );
            this.div21.Tab01.tabp01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div21.Tab01.tabp02,
            	//-- Layout function
            	function(p) {
            		p.set_text("특이사항");
            		p.set_scrollbars("none");
            		p.getSetter("objNm").set("특기사항");

            	}
            );
            this.div21.Tab01.tabp02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div21.Tab01.tabpage6,
            	//-- Layout function
            	function(p) {
            		p.set_text("견적 담당자  ");
            		p.getSetter("objNm").set("견적 담당자");

            	}
            );
            this.div21.Tab01.tabpage6.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div21.Tab01.tabp04,
            	//-- Layout function
            	function(p) {
            		p.set_text("공개설명회");
            		p.getSetter("objNm").set("공개설명회");

            	}
            );
            this.div21.Tab01.tabp04.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 209, this.div21,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("32");
            		p.set_scrollbars("none");
            		p.getSetter("objNm").set("DIV-헤더 상세");

            	}
            );
            this.div21.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.div3,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("33");
            		p.getSetter("objNm").set("DIV-품목 타이틀");

            	}
            );
            this.div3.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.div4,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("36");
            		p.getSetter("objNm").set("DIV-품목 상세-탭 헤더");

            	}
            );
            this.div4.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div41.Tab02.tabp01,
            	//-- Layout function
            	function(p) {
            		p.set_text("상세데이터");
            		p.style.set_background("white");
            		p.set_scrollbars("none");
            		p.getSetter("objNm").set("상세데이터");

            	}
            );
            this.div41.Tab02.tabp01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div41.Tab02.tabp04,
            	//-- Layout function
            	function(p) {
            		p.set_text("품목 특이사항");
            		p.getSetter("objNm").set("품목 특기사항");

            	}
            );
            this.div41.Tab02.tabp04.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 293, this.div41,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.set_scrollbars("none");
            		p.getSetter("objNm").set("DIV-품목 상세 - 텝 입력");

            	}
            );
            this.div41.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.div5,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("42");
            		p.getSetter("objNm").set("DIV-대상업체");

            	}
            );
            this.div5.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 225, 169, this.div51.PopupDiv00,
            	//-- Layout function
            	function(p) {
            		p.set_text("PopupDiv00");
            		p.style.set_background("#ffffffff");
            		p.set_scrollbars("none");

            	}
            );
            this.div51.PopupDiv00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 164, this.div51,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("43");
            		p.set_scrollbars("none");
            		p.getSetter("objNm").set("DIV-대상업체 상세");

            	}
            );
            this.div51.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.div6,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("45");
            		p.getSetter("objNm").set("DIV-견적요청파일 타이틀");

            	}
            );
            this.div6.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 164, this.div61,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("46");
            		p.set_scrollbars("none");
            		p.getSetter("objNm").set("DIV-견적요청파일 상세");

            	}
            );
            this.div61.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 211, this.div31,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("62");
            		p.getSetter("objNm").set("DIV-품목 상세");

            	}
            );
            this.div31.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 125, 28, this.PopupDiv01,
            	//-- Layout function
            	function(p) {
            		p.set_text("PopupDiv01");

            	}
            );
            this.PopupDiv01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1220, 925, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("FrmTemplate100");
            		p.set_titletext("견적요청서작성");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div21.Tab01.tabp01.edtTtl","value","dsRfq","TTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div21.Tab01.tabp01.edtCdRfqSttsNm","value","dsRfq","CD_RFQ_STTS_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div21.Tab01.tabp01.cldRfqCloseDay","value","dsRfq","RFQ_CLOSE_DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","div21.Tab01.tabp01.spnRfqCloseTime","value","dsRfq","RFQ_CLOSE_TIME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","div21.Tab01.tabp01.cboCdRfqAim","value","dsRfq","CD_RFQ_AIM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","div21.Tab01.tabp01.cboCdOpenType","value","dsRfq","CD_OPEN_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","div21.Tab01.tabp01.chkAltBdgtOpen","value","dsRfq","ALT_BDGT_OPEN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","div21.Tab01.tabp01.chkAltTargCorpOpen","value","dsRfq","ALT_TARG_CORP_OPEN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","div21.Tab01.tabp01.rdAltCert","value","dsRfq","ALT_CERT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","div21.Tab01.tabp01.rdAltRfqPriceSbmt","value","dsRfq","ALT_RFQ_PRICE_SBMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","div21.Tab01.tabp01.rdAltRfqExplnAct","value","dsRfq","ALT_RFQ_EXPLN_ACT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","div21.Tab01.tabp01.chkAltRfqExplnNxtNtc","value","dsRfq","ALT_RFQ_EXPLN_NXT_NTC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","div21.Tab01.tabp01.medGoalamt","value","dsRfq","GOALAMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","div21.Tab01.tabp02.txaRfqRemark","value","dsRfq","RMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","div21.Tab01.tabp01.edtRfqOdr","value","dsRfq","RFQ_ODR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","div21.Tab01.tabp04.rdAltRfqOpen","value","dsRfq","ALT_OPEN_EXPLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","div21.Tab01.tabp04.cldOpenExplnDay","value","dsRfq","OPEN_EXPLN_DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","div21.Tab01.tabp04.edtOpenExplnArea","value","dsRfq","OPEN_EXPLN_AREA");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","div21.Tab01.tabp04.txaOpenExplnAttnCndtn","value","dsRfq","OPEN_EXPLN_ATTN_CNDTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","div21.Tab01.tabp05.rdAltSvcRfq","value","dsRfq","ALT_SVC_RFQ");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","div21.Tab01.tabp05.rdAltSvcDtlBid","value","dsRfq","ALT_SVC_DTL_BID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","div21.Tab01.tabpage6.edtPchrgrId","value","dsRfq","CHRGR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","div21.Tab01.tabpage6.edtPchrgrNm","value","dsRfq","CHRGR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","div21.Tab01.tabpage6.edtTel","value","dsRfq","TEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","div21.Tab01.tabpage6.edtEmail","value","dsRfq","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","div21.Tab01.tabpage6.edtFax","value","dsRfq","FAX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item47","div21.Tab01.tabp01.cboCdRfqCrnc","value","dsRfq","CD_RFQ_CRNC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","div21.Tab01.tabp04.medOpenExplnTime","value","dsRfq","OPEN_EXPLN_TIME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","div21.Tab01.tabp04.medOpenExplnDrTime","value","dsRfq","OPEN_EXPLN_DR_TIME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item48","div21.Tab01.tabp01.rdAltRfqExplnAct00","value","dsRfq","ALT_QTY_OPEN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item49","div21.Tab01.tabp01.rdAltSvcDtlBid","value","dsRfq","ALT_SVC_DTL_BID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","div41.Tab02.tabp03.edtPtnrId","value","dsRfqItem","PTNR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","div41.Tab02.tabp03.edtZipNo","value","dsRfqItem","ZIP_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","div41.Tab02.tabp03.edtAddr","value","dsRfqItem","ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","div41.Tab02.tabp03.edtDtlAddr","value","dsRfqItem","DTL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","div41.Tab02.tabp03.edtRwdRemark","value","dsRfqItem","FWD_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","div41.Tab02.tabp04.txaFwdRemark","value","dsRfqItem","RMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","div41.Tab02.tabpage6.txtSrchKey","value","dsRfqItem","SRCH_KEY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item38","div41.Tab02.tabp01.edtMtrlGrpId","value","dsRfqItem","MTRL_GRP_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item39","div41.Tab02.tabp01.edtMtrlGrpNm","value","dsRfqItem","MTRL_GRP_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item40","div41.Tab02.tabp01.edtMtrlCd","value","dsRfqItem","MTRL_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","div41.Tab02.tabp01.edtMtrlNm","value","dsRfqItem","MTRL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item43","div41.Tab02.tabp01.medQty","value","dsRfqItem","QTY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item44","div41.Tab02.tabp01.cdCdUnit","value","dsRfqItem","CD_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item45","div41.Tab02.tabp01.medGoaluntPrice","value","dsRfqItem","GOALUNT_PRICE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item46","div41.Tab02.tabp01.medGoalamt","value","dsRfqItem","GOALAMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","div1.cboDocType","value","dsRfq","CD_DOC_CTGR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","div1.edtDocNo","value","dsRfq","RFQ_REQ_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item50","div41.edtItemNo00","value","dsRfqItem","ITM_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item51","div41.cboItemChg00","text","dsRfqItem","MTRL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item52","div41.cboItemChg00","","dsPoItem","MTRL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item53","div41.Tab02.tabp03.edtPtnrNm00","value","dsRfqItem","DLV_PLC_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","div41.Tab02.tabp01.edtCdFctry","value","dsRfqItem","STR_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item54","div41.Tab02.tabp01.edtCdFctryNm","value","dsRfqItem","SL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::compNFileUpDown.xfdl");
            this._addPreloadList("fdl", "CCOMP::compNFileUpDown.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompGrdBtns.xfdl");
        };
        
        // User Script
        this.registerScript("BRfqWrtDetail.xfdl", function(exports) {
         /**
           @file       BRfqWrtDetail.xfdl
           @desc       견적요청작성
           @author     정현근
           @makedate   2019.05.02
           @history    
        */

        /**
        	@var  this.mailChk
        	@desc 전역변수 메일발송 체크 초기 셋팅 false
        */
        this.mailChk = false;

        this.fv_rfqReqNo;		
        this.fv_rfqOdr;		
        this.fv_rfqBranchCd;		
        this.fv_rfqCdRfqStts;	
        this.fv_prReqRfqYn;
        this.fv_prReqRfqData;	
        this.fv_corexpKids;

        /**
        	@function	fnFormOninit()
        	@desc   	폼 oninit이벤트
        */
        this.fnFormOninit = function(obj,e)
        {
            //공통코드 셋팅을 한다.
        	this.fnSetCode();
        }

        /**
        	@function	fnSetCode()
        	@desc   	공통코드 데이터셋을 생성한다.
        */
        this.fnSetCode = function(){
        	var param = [
        					 {code:"ET13", sSelectType:"S"} // 공개유형코드
        					,{code:"ET27", sSelectType:"S"} // 견적목적코드
        					,{code:"CM20", sSelectType:"S"} // 공장코드
        					,{code:"CM11", sSelectType:"S"} // 단위코드
        					,{code:"CM15", sSelectType:"S"} // 통화코드
        					,{code:"CM10", sSelectType:"S"} // 구매유형
        					,{code:"CM32", sSelectType:"S"} // 파일유형
        				];
        				
        	//공통코드 데이터셋 생성 : "dsCd" + code + sfx
        	gfnGetCode(this, param);
        }

        /**
        	@function	fnFormOnload()
        	@desc   	폼 onload이벤트
        */
        this.fnFormOnload = function(obj,e)
        {
        	//처음 로드시 추가
        	this.dsRfq.addRow();
        	
        	//이전화면에서 넘어오는 파라미터를 받는다.
        	this.fv_rfqReqNo = gfnGetTmprData("RFQ_REQ_NO");		
        	this.fv_rfqOdr = gfnGetTmprData("RFQ_ODR");		
        	this.fv_rfqBranchCd = gfnGetTmprData("BRANCH_CD");		
        	this.fv_rfqCdRfqStts = gfnGetTmprData("CD_RFQ_STTS");	
        	this.fv_prReqRfqYn = gfnGetTmprData("PR_REQ_RFQ_YN");
        	this.fv_prReqRfqData = gfnGetTmprData("PR_REQ_RFQ_DATA");	
        	
        	//파라미터를 받은 이후에는 파라미터를 를 초기화 해준다.
        	gfnClearTmprData();
        	
        	this.fnPreInit();
        	
            //견적상태값이 null 이면 obj 타입을 C로 설정한다.
        	if(this.fv_rfqCdRfqStts == ""){	    
        		gfnSetObj("A");				
        		if(this.dsRfq.rowcount==0) this.dsRfq.addRow();
        		
        	}else if(this.fv_rfqCdRfqStts == "ET10WRI"){  //견적상태 값이 작성중이면 obj 타입을 U로 설정한다.
        		gfnSetObj("B");
        		if(this.dsRfq.rowcount==0) this.dsRfq.addRow();
        		
        	}else{                                  //견적상태 값이 null이거나 작성중이 아니면  obj 타입을 R로 설정한다.
        		gfnSetObj("C");
        		
        		this.div31.grdRfqItem.setFormat("VMODE");
        		this.div51.grdRfqPtnr.setFormat("VMODE");
        		this.div61.grdRfqReqFile.setFormat("VMODE");
        		
        		gfnBtnRange(this.parent.divComBtns.btnComSrch);
        	}
        	
        	//그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기
        	gfnSetGrdFunc(this.div31.grdRfqItem);
         	gfnSetGrdFunc(this.div51.grdRfqPtnr);
         	gfnSetGrdFunc(this.div61.grdRfqReqFile);
        	

        	//견적마감시간 최대값 설정
        	this.div21.Tab01.tabp01.spnRfqCloseTime.set_max("23");
        	
        }

        /**
        	@function	fnPreSearch()
        	@desc   	조회 전 처리
        */
        this.fnPreInit= function()
        {
        	// 넘어온 견적요청번호가 있으면 데이터조회
        	if(this.fv_rfqReqNo != null && this.fv_rfqReqNo != "")
        	{
        		this.fnSearch(this.fv_rfqReqNo,this.fv_rfqOdr,this.fv_rfqBranchCd);
        	}else{
        		//구매요청에서 견적작성시
        		if(this.fv_prReqRfqYn != "" && this.fv_prReqRfqYn == "Y"){			
        			this.pr_reqRfq(this.fv_prReqRfqData);
        		}else{
        			//파라미터가 존재하지 않으면 구매유형선택팝업 호출
        			//gfnCallComDocTypePopup(this);
        			var sArg = { 
        							agv_id:""
        					   };
        			gfnModalPop(this, "BPurTypePop", "CPOP::BPurTypePop.xfdl", sArg, "fnPopCallBack", 700, 500);
        		}
        				
        		//신규작성시 필수값 세팅
        		this.dsRfq.setColumn(0,"RFQ_CLOSE_DAY",gfnToday());
        		this.dsRfq.setColumn(0,"CD_RFQ_AIM","ET27PRE");

        		//신규 작성 시 파일내부의 Dataset을 초기화 시켜준다.
         		//gfnNewFileDsInit(this.dsRfq,this.dsRfqItem);
        	}
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
        this.fnSearch = function(rfqReqNo,rfqOdr,rfqBranchCd)
        {
        	if(!this.fnPreSearch()) return false;
        	
        	if(rfqReqNo != ""){
        		this.dsRfq.setColumn(0,"RFQ_REQ_NO",rfqReqNo);
        		this.dsRfq.setColumn(0,"RFQ_ODR",rfqOdr);
        		this.dsRfq.setColumn(0,"BRANCH_CD",rfqBranchCd);
        		this.dsRfq.setColumn(0,"COREXP_KIDS", this.dsRfq.getColumn(0,"COREXP_KIDS"));
        	}
        	
        	var sSvcID = "read";
        	var sController = "BRfq_Read.do";
        	var sInDatasets = "in_ds=dsRfq";
        	var sOutDatasets = "dsRfq=dsRfq dsRfqItem=dsRfqItem dsRfqItemAdd=dsRfqItemAdd dsRfqPtnr=dsRfqPtnr dsRfqPtnrQuote=dsRfqPtnrQuote dsRfqReqFile=dsRfqReqFile dsRfqPr=dsRfqPr";
        	var sCallbackFunc = "fnTrCallBack";
        	
        	gfnFileTran(sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
        	@function	fnAdd()
        	@desc   	(공통버튼)신규
        */ 
        this.fnAdd = function()
        {
        	if(!gfnConfirm("신규작성 하시겠습니까?")) return;
        	gfnOpenMenuUrl("RFXB::PRFXB100N00.xfdl");
        }

        /**
        	@function	fnDelete()
        	@desc   	(공통버튼)삭제 프로세스
        */
        this.fnDelete = function()
        {
            //견적요청 상태가 작성중 요청중 상태일 때만 삭제가 가능함
        	if(this.dsRfq.getColumn(0,"CD_RFQ_STTS") != "ET10WRI" && this.dsRfq.getColumn(0,"CD_RFQ_STTS") != "ET10REQ"){
        		gfnAlert("작성 및 요청중 상태만 가능합니다.");
        		return;
        	}
        	
        	if(!gfnConfirm("삭제 하시겠습니까?")) return;
        	
        	var sSvcID = "delete";
        	var sController = "BRfq_Del.do";
        	var sInDatasets = "in_rfq=dsRfq:A in_rfqItem=dsRfqItem:A in_rfqItemAdd=dsRfqItemAdd:A in_rfqPtnr=dsRfqPtnr:A in_rfqItemPtnrQuote=dsRfqItemPtnrQuote:A in_rfqReqFile=dsRfqReqFile:A";
        	var sOutDatasets = "dsRfq=in_rfq";
        	var sCallbackFunc = "fnTrCallBack";
        	
            gfnFileSaveTran(sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
        	@function	fnPreSave()
        	@desc   	저장 전 처리
        */
        this.fnPreSave = function()
        {	
        	if(this.dsRfq.getColumn(0,"CD_RFQ_STTS") != "ET10WRI"){
        		gfnAlert("작성중 상태만 가능합니다.");
        		return;
        	}
        	
        	//데이터셋의 수정사항이 존재하는지 확인한다.
        // 	if(!(gfnGetDsUpdate(this.dsRfq)||gfnGetDsUpdate(this.dsRfqItem)
        // 		||gfnGetDsUpdate(this.dsRfqPtnr)||gfnGetDsUpdate(this.dsRfqPtnrQuote))){
        // 		gfnAlert("수정사항이 존재하지 않습니다.");
        // 		return false;
        // 	}else{
        // 		return true;
        // 	}
        return true;
        }

        /**
        	@function	fnSave()
        	@desc   	(공통버튼)저장 프로세스
        */ 
        this.fnSave = function()
        {	
        	if (!this.fnPreSave()) return false;
        	
        	//견적마감시간처리
        	var time = this.dsRfq.getColumn(0,"RFQ_CLOSE_TIME");

        	if(time.length ==1){
        		this.dsRfq.setColumn(0,"RFQ_CLOSE_TIME","0"+time);
        	}else{
        		this.dsRfq.setColumn(0,"RFQ_CLOSE_TIME",time);		
        	}
        	
        	var sSvcID = "saveRfq";
        	var sController = "epro.rfq.service.BRfqService.saveRfq";
        	var sInDatasets = "in_rfq=dsRfq:A in_rfqItem=dsRfqItem:A in_rfqItemAdd=dsRfqItemAdd:U in_rfqPtnr=dsRfqPtnr:U in_rfqItemPtnrQuote=dsRfqItemPtnrQuote:U in_rfqReqFile=dsRfqReqFile:U in_refFile=dsRefFile:A";
        	var sOutDatasets = "dsRfq=in_rfq";
        	var sCallbackFunc = "fnTrCallBack";
        	
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        this.fnRfqAppSave = function()
        {
        	if (!this.fnPreReq()) return false;
        	//견적마감시간처리
         	var time = this.dsRfq.getColumn(0,"RFQ_CLOSE_TIME")
         	if(time.length ==1){
         		this.dsRfq.setColumn(0,"RFQ_CLOSE_TIME","0"+time);
         	}else{
         		this.dsRfq.setColumn(0,"RFQ_CLOSE_TIME",time);
         	}
        	
        	this.dsRfq.setColumn(0,"CD_RFQ_STTS","ET10APP");  
        	this.dsRfq.setColumn(0,"PTNR_QUOTE_CRT_YN","Y");
        	
        	//견적요청파일이 존재하지 않으면 기본값으로 추가한다.
        	if(this.dsRfqReqFile.rowcount < 1){
        		var nRow = this.dsRfqReqFile.addRow();
        		//Default값을 설정
        		var nItemNo = 1;
        		if(nRow==0){
        			this.dsRfqReqFile.setColumn(nRow,"ITM_NO",nItemNo);
        		} else {
        			nItemNo = nexacro.toNumber(this.dsRfqReqFile.getColumn(nRow-1,"ITM_NO"))+1;
        			this.dsRfqReqFile.setColumn(nRow,"ITM_NO", nItemNo);
        		}
        		this.dsRfqReqFile.setColumn(nRow,"RFQ_REQ_NO",this.dsRfq.getColumn(0,"RFQ_REQ_NO"));
        		this.dsRfqReqFile.setColumn(nRow,"BRANCH_CD",this.dsRfq.getColumn(0,"BRANCH_CD"));
        		this.dsRfqReqFile.setColumn(nRow,"RFQ_ODR",this.dsRfq.getColumn(0,"RFQ_ODR"));
        		this.dsRfqReqFile.setColumn(nRow,"CD_FILE_TYPE","CM32ALL");
        		this.dsRfqReqFile.setColumn(nRow,"ALT_MDT","N");
        		this.dsRfqReqFile.setColumn(nRow,"REQ_FILE_NM","견적첨부파일");
        		this.dsRfqReqFile.setColumn(nRow,"RMARK","견적 제출시 필요한 파일을 첨부하세요.");
        	}
        	
         	var sSvcID = "appSave";
         	var sController = "BRfq_AppSave.do";
         	var sInDatasets = "in_rfq=dsRfq:A in_rfqItem=dsRfqItem:A in_rfqItemAdd=dsRfqItemAdd:U in_rfqPtnr=dsRfqPtnr:A in_rfqItemPtnrQuote=dsRfqItemPtnrQuote:U in_rfqReqFile=dsRfqReqFile:U in_refFile=dsRefFile:A";
         	var sOutDatasets = "dsRfq=in_rfq";
         	var sCallbackFunc = "fnTrCallBack";
         	
            gfnFileSaveTran(sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
        	@function	btnCommCancel()
        	@desc   	(공통버튼)취소 프로세스
        */  
        this.btnCommCancel = function()
        {
        }

        /**
        	@function	pr_reqRfq()
        	@desc   	구매요청에서 견적요청 처리
        */  
        this.pr_reqRfq = function(str)
        {
        	
        	this.dsRfq.set_enableevent(false);
        	this.dsRfqItem.set_enableevent(false);
        	
        	this.dsReturn.loadXML(str);
        	this.dsRfq.setColumn(0,"CD_DOC_CTGR",this.dsReturn.getColumn(0,"CD_DOC_CTGR"));		
        	this.div1.cboDocType.set_enable(false);	
        			
        	//기본정보세팅
        	this.dsRfq.setColumn(0,"BRANCH_CD",application.gdsUserInfo.getColumn(0,"BRANCH_CD"));
        	this.dsRfq.setColumn(0,"CD_RFQ_STTS","ET10WRI");
        	this.dsRfq.setColumn(0,"CD_RFQ_STTS_NM","작성중");
        	this.dsRfq.setColumn(0,"CD_RFQ_CRNC","CM15KRW"); //견적통화
        	this.dsRfq.setColumn(0,"RFQ_CLOSE_TIME","23"); //견적마감시간
        	
        	
        	var ttlMsg = this.dsReturn.getColumn(0,"MTRL_NM");
        	
        	if(ttlMsg.indexOf("【") != -1){
        		ttlMsg = ttlMsg.substring(0,ttlMsg.indexOf("【"));
        	}
        	
        	var cnt = this.dsReturn.rowcount-1;
        	if(cnt > 0){
        		this.dsRfq.setColumn(0,"TTL",ttlMsg+" 외 "+ cnt +" 건 ");
        		
        	}else{
        		this.dsRfq.setColumn(0,"TTL",ttlMsg);
        	}
        	

        	//문서유형별 기본정보세팅
        	if(this.dsReturn.getColumn(0,"CD_DOC_CTGR") != "CM109"){
        		this.dsRfq.setColumn(0,"ALT_QTY_OPEN","Y"); //수량공개여부
        		this.dsRfq.setColumn(0,"ALT_RFQ_PRICE_SBMT","Y"); //견적가제출여부
        		this.dsRfq.setColumn(0,"ALT_CERT","N"); //인증서사용여부
        		this.dsRfq.setColumn(0,"ALT_BDGT_OPEN","N"); //예산공개여부
        		this.dsRfq.setColumn(0,"ALT_TARG_CORP_OPEN","N"); //대상업체공개여부
        		this.dsRfq.setColumn(0,"ALT_RFQ_EXPLN_ACT","N"); //제안설명회실시여부
        		this.dsRfq.setColumn(0,"ALT_OPEN_EXPLN","N"); //현장설명회여부
        		this.dsRfq.setColumn(0,"ALT_SVC_RFQ","N"); //서비스견적여부
        		this.dsRfq.setColumn(0,"ALT_SVC_DTL_BID","Y"); //서비스세부견적여부		
        //		this.dsRfq.setColumn(0,"CD_RFQ_SBMT_MTHD","Y"); //서비스세부견적여부
        		
        		/* 20160812 JJH 수정 */
        //  		this.div21.Tab01.tabp01.rdAltSvcDtlBid.set_readonly(false);
        //  		this.div21.Tab01.tabp01.rdAltSvcDtlBid.set_cssclass("rdo_default_r");
        	}else{
        		this.dsRfq.setColumn(0,"ALT_QTY_OPEN","Y"); //수량공개여부
        		this.dsRfq.setColumn(0,"ALT_RFQ_PRICE_SBMT","Y"); //견적가제출여부
        		this.dsRfq.setColumn(0,"ALT_CERT","N"); //인증서사용여부
        		this.dsRfq.setColumn(0,"ALT_BDGT_OPEN","N"); //예산공개여부
        		this.dsRfq.setColumn(0,"ALT_TARG_CORP_OPEN","N"); //대상업체공개여부
        		this.dsRfq.setColumn(0,"ALT_RFQ_EXPLN_ACT","N"); //제안설명회실시여부
        		this.dsRfq.setColumn(0,"ALT_OPEN_EXPLN","Y"); //현장설명회여부
        		this.dsRfq.setColumn(0,"ALT_SVC_RFQ","Y"); //서비스견적여부
        		this.dsRfq.setColumn(0,"ALT_SVC_DTL_BID","N"); //서비스세부견적여부
        //		this.dsRfq.setColumn(0,"CD_RFQ_SBMT_MTHD","N"); //서비스세부견적여부
        	}
        	

        	//견적담당자정보 셋팅
        	this.dsRfq.setColumn(0, "CHRGR_ID", application.gdsUserInfo.getColumn(0,"USER_ID"));
        	this.dsRfq.setColumn(0, "CHRGR_NM", application.gdsUserInfo.getColumn(0,"USER_NM"));
        	this.dsRfq.setColumn(0, "TEL", application.gdsUserInfo.getColumn(0,"TEL"));
        	this.dsRfq.setColumn(0, "EMAIL", application.gdsUserInfo.getColumn(0,"EMAIL"));
        	this.dsRfq.setColumn(0, "FAX", application.gdsUserInfo.getColumn(0,"FAX"));

        	
        	//견적품목 추가
        	var file_cnt_flag = false;
        	
        	for(var i=0; i<this.dsReturn.rowcount; i++){
        		var nRow = this.dsRfqItem.addRow();
        		
        		/* 데이터 초기 생성시 값을 카피한다.*/
        		this.dsRfqItem.copyRow(nRow,this.dsReturn,i);
        		//Default값을 설정
        		var nItemNo = 1;
        		if(nRow==0){
        			this.dsRfqItem.setColumn(nRow,"ITM_NO",nItemNo);			
        		} else {
        			nItemNo = nexacro.toNumber(this.dsRfqItem.getColumn(nRow-1,"ITM_NO"))+1;			
        			this.dsRfqItem.setColumn(nRow,"ITM_NO", nItemNo);
        		}
        				
        		//this.dsRfqItem.copyRow(nRow,this.dsReturn,i);
         		this.dsRfqItem.setColumn(nRow,"GOALUNT_PRICE",this.dsReturn.getColumn(i,"REQ_PRICE"));
         		this.dsRfqItem.setColumn(nRow,"GOALUNT_AMT",this.dsReturn.getColumn(i,"REQ_AMT"));
         		
         		//구매요청에서 넘어온 품목명, 단위, 창고에 대한 처리 때문에 setColumn 한다.
         		this.dsRfqItem.setColumn(nRow,"PR_ITEM_ID",this.dsReturn.getColumn(i,"PR_ITEM_ID"));
        						
        		if(0 < this.dsReturn.getColumn(i,"FILE_CNT")){
        			file_cnt_flag = true;
        		}
        	}
        	 
        	
        	//구매예상가 합계
        	this.setAuotGoalSum();
        	
        	
        	//창고
        	//this.div41.Tab02.tabp01.edtCdFctry.set_readonly(true);
        	//this.div41.Tab02.tabp01.edtCdFctryNm.set_readonly(true);
        	//this.div41.Tab02.tabp01.btnCdFctry.set_visible(false);
        	//품목
        	//this.div41.Tab02.tabp01.edtMtrlCd.set_readonly(true);
        	//this.div41.Tab02.tabp01.edtMtrlNm.set_readonly(true);
        	//this.div41.Tab02.tabp01.btnMtrlCd.set_visible(false);
        	
        	//단위
        	//this.div41.Tab02.tabp01.cdCdUnit.set_readonly(true);
        	
        	this.dsRfq.set_enableevent(true);
        	this.dsRfqItem.set_enableevent(true);
        	
        	//구매요청 첨부파일팝업
        	if(file_cnt_flag){
        		this.purRefFileAdd();
        	}
        	
        	
        }

        /**
        	@function	fnTrCallBack()
        	@desc   	(폼 공통)Transaction Callback함수
        */  
        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	if(strErrCd < 0)
        	{
        		return;
        	}

        	switch(strSvcID)
        	{		
        		case "read" : 
        			//read 데이터가 존재하지 않으면 작성중인 상태로 데이터를 셋팅한다.
        			if(this.dsRfq.rowcount == 0){
        				this.dsRfq.addRow();			
        				//this.dsRfq.setColumn(0, "CD_PR_STTS", "PR11WRI");
        				//this.dsRfq.setColumn(0, "CD_BDGT_TYPE", "");
        				
        				/* 위의 항목이 맞는지 확인  */
        				this.dsRfq.setColumn(0, "CD_RFQ_STTS", "ET10WRI");
        				this.dsRfq.setColumn(0, "CD_RFQ_AIM", "");
        					
        				
        			}else{								
        				//FILE_COMP_JOB_4 : 조회 후 파일 부모 데이터셋에 시퀀스 추가(Row가 2건 이상인 DS 일경우)			
        				gfnFileDsSeq(this.dsRfq);
        				gfnFileDsSeq(this.dsRfqItem);
        				//FILE_COMP_JOB_5 : 조회 후 컴포넌트 파일정보 초기화 & 조회
        				this.fnGetCompFileList1();
        				this.fnGetCompFileList2();
        			}
        			
        			//문서유형이 자재일경우 readonly로 변경한다.
        // 			if(this.dsRfq.getColumn(0,"CD_DOC_CTGR") != "CM109"){
        // 				this.div21.Tab01.tabp01.rdAltSvcDtlBid.set_readonly(true);
        // 				this.div21.Tab01.tabp01.rdAltSvcDtlBid.set_cssclass("rdo_default_r");
        // 			}
        			
        			if(this.dsRfq.getColumn(0,"CD_RFQ_STTS") != "ET10WRI"){
        				gfnObjReSet(this, "R");
        				this.div31.grdRfqItem.setFormat("VMODE");
        				this.div51.grdRfqPtnr.setFormat("VMODE");
        				this.div61.grdRfqReqFile.setFormat("VMODE");
        			}else if(this.dsRfq.getColumn(0,"CD_RFQ_STTS") == "ET10WRI"){
        				gfnObjReSet(this, "U");
        				this.parent.divComBtns.btnComDel.set_visible(true);		//삭제
        				this.parent.divComBtns.btnComSave.set_visible(true);	//저장		
        			}
        				
        			this.fnCtrlBtn();
        						
        		break;
        		
        		case "save" : 
        			if(strErrMsg != ""){
        				if(this.mailChk){
        					this.mailChk = false;
        					
        					var sSvcID = "mail";
        					var sController = "BRfq_ExplnMailSnd.do";
        					var sInDatasets = "in_rfq=dsRfq:A in_rfqPtnr=dsRfqPtnr:A";
        					var sOutDatasets = "dsRfq=in_rfq";
        					var sCallbackFunc = "fnTrCallBack";
        				
        					gfnFileSaveTran(sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        				}else{
        					gfnAlert(strErrMsg);
        					this.fnSearch(this.dsRfq.getColumn(0,"RFQ_REQ_NO"),this.dsRfq.getColumn(0,"RFQ_ODR"),this.dsRfq.getColumn(0,"BRANCH_CD"));
        				}
        			}
        		break;
        		
        		case "req" : 
        			if(strErrMsg != ""){
        				gfnAlert(strErrMsg);
        				if(strErrCd != -1){
        					gfnObjReSet(this, "R");
        					this.div31.grdRfqItem.setFormat("VMODE");
        					this.div51.grdRfqPtnr.setFormat("VMODE");
        					this.div61.grdRfqReqFile.setFormat("VMODE");
        					
        					this.parent.divComBtns.btnComDel.set_visible(false);		//삭제
        					this.parent.divComBtns.btnComSave.set_visible(false);	//저장		
        				}
        				
        				//저장후 받아온 값으로 데이터조회
        				this.fnSearch(this.dsRfq.getColumn(0,"RFQ_REQ_NO"),this.dsRfq.getColumn(0,"RFQ_ODR"),this.dsRfq.getColumn(0,"BRANCH_CD"));
        			}
        		break;
        		
        		case "appSave" : 
        			if(strErrMsg != ""){
        				gfnAlert(strErrMsg);
        				if(strErrCd != -1){
        					gfnObjReSet(this, "R");
        					this.div31.grdRfqItem.setFormat("VMODE");
        					this.div51.grdRfqPtnr.setFormat("VMODE");
        					this.div61.grdRfqReqFile.setFormat("VMODE");
        				}
        				
        				//저장후 받아온 값으로 데이터조회
        				this.fnSearch(this.dsRfq.getColumn(0,"RFQ_REQ_NO"),this.dsRfq.getColumn(0,"RFQ_ODR"),this.dsRfq.getColumn(0,"BRANCH_CD"));
        			}
        	
        		break;
        		
        		
        		
        		case "delete" : 
        			if(strErrMsg != ""){
        				gfnAlert(strErrMsg);
        				gfnFormClose();
        			}
        		break;
        		
        		case "mail" : 
        			if(strErrMsg != ""){
        				gfnAlert(strErrMsg);
        				
        				//저장후 받아온 값으로 데이터조회
        				//this.fnSearch(this.dsRfq.getColumn(0,"RFQ_REQ_NO"),this.dsRfq.getColumn(0,"RFQ_ODR"),this.dsRfq.getColumn(0,"BRANCH_CD"));
        			}
        		break;
        		
        		default:
        		break;		
        	}
        }

        /**
        	@function	fnGetCompFileList1()
        	@desc   	탭의 첨부파일처리(견적요청서 첨부파일 처리)
        				파일 컴포넌트에 파일정보 초기화 & 조회
        */   
        this.fnGetCompFileList1 = function()
        {
        	if(this.div21.Tab01.tabindex == 2) //첨부파일 index
        	{
        		var sTableNm = "MM_RFQ"; //테이블 명
        		var arrFileKey = [this.dsRfq.getColumn(this.dsRfq.rowposition, "RFQ_REQ_NO"),this.dsRfq.getColumn(this.dsRfq.rowposition, "RFQ_ODR")]; //File Key
        		if(this.dsRfq.getColumn(0, "CD_RFQ_STTS") == "ET10WRI" || this.dsRfq.getColumn(0, "CD_RFQ_STTS") == "" || this.dsRfq.getColumn(0, "CD_RFQ_STTS") == null ){
        			var readOnly = "N";
        		}else{
        			var readOnly = "Y";
        		}
        		this.div21.Tab01.tabpages[this.div21.Tab01.tabindex].fnFileCompInit(this, sTableNm, this.dsRfq, arrFileKey, readOnly); //초기화 및 조회(필터링)		
        	}
        }

        /**
        	@function	fnGetCompFileList2()
        	@desc   	탭의 첨부파일처리(품목상세정보 첨부파일 처리)
        				파일 컴포넌트에 파일정보 초기화 & 조회
        */ 
        this.fnGetCompFileList2 = function()
        {
        	if(this.div41.Tab02.tabindex == 2) //첨부파일 index
        	{
        		var sTableNm = "MM_RFQ_ITEM"; //테이블 명
        		//File Key
        		var arrFileKey = [this.dsRfqItem.getColumn(this.dsRfqItem.rowposition, "RFQ_REQ_NO"), this.dsRfqItem.getColumn(this.dsRfqItem.rowposition, "RFQ_REQ_ITEM_ID")];
        		if(this.dsRfq.getColumn(0, "CD_RFQ_STTS") == "ET10WRI" || this.dsRfq.getColumn(0, "CD_RFQ_STTS") == "" || this.dsRfq.getColumn(0, "CD_RFQ_STTS") == null ){
        			var readOnly = "N";
        		}else{
        			var readOnly = "Y";
        		}
        		this.div41.Tab02.tabpages[this.div41.Tab02.tabindex].fnFileCompInit(this, sTableNm, this.dsRfqItem, arrFileKey, readOnly); //초기화 및 조회(필터링)
        	}	
        }

        /**
        	@function	fnClose ()
        	@desc   	(공통버튼)닫기 : form 닫기 전 공통에서 체크함
        */   
        this.fnClose = function()
        {
        	//데이터셋 수정여부 체크
        	if(gfnGetDsUpdate(this.dsRfq))
        	{
        		return false;
        	}
        	return true;
        }

        /**
        	@function	fnPreReq()
        	@desc   	견적요청 전 처리
        */   
        this.fnPreReq = function()
        {
        	var arrUserErr = [];
        	//컴포넌트 유효성 체크 추가
        	//TODO : 견적마감일시 오늘을 포함한 이전일자는 넣을 수 없음
        	var checkObj = this.div21.Tab01.tabp01.cldRfqCloseDay;
        	if(checkObj.value < gfnToday())
        	{
        		var sMsg = checkObj + "는 오늘 이후여야 합니다.";	
        		var objParam = {agv_msg:sMsg, agv_objComp:checkObj, agv_errLvl:"E", agv_validType:"유효성 체크"};
        		arrUserErr.push(objParam);
        	}
        	var objDate = new Date();
        	var hours = gfnRight("0" + objDate.getHours(), 2);
        	var checkObj2 = this.div21.Tab01.tabp01.spnRfqCloseTime;
        	if(checkObj.value == gfnToday() && checkObj2.value < hours)
        	{
        		var sMsg = checkObj2 + "은 현재시간 이후여야 합니다.";	
        		var objParam = {agv_msg:sMsg, agv_objComp:checkObj2, agv_errLvl:"E", agv_validType:"유효성 체크"};
        		arrUserErr.push(objParam);
        	}
        	
        	var checkObj3 = this.div21.Tab01.tabp01.rdAltSvcDtlBid;
        	if(this.dsRfq.getColumn(0,"ALT_SVC_DTL_BID") == "N")
        	{
        		if(1 < this.dsRfqItem.rowcount){
        			var sMsg = "세부견적이 필요할 경우 품목이 1건이어야 합니다.";
        			var objParam = {agv_msg:sMsg, agv_objComp:checkObj3, agv_errLvl:"E", agv_validType:"유효성 체크"};
        			arrUserErr.push(objParam);
        		}
        		for(var i=0; i<this.dsRfqItem.rowcount; i++){
        			if(this.dsRfqItem.getColumn(i,"QTY") != 1){
        				var sMsg = "세부견적이 필요할 경우 품목의 수량이 1개 이어야 합니다.";
        				var objParam = {agv_msg:sMsg, agv_objComp:checkObj3, agv_errLvl:"E", agv_validType:"유효성 체크"};
        				arrUserErr.push(objParam);
        				break;
        			}
        		}
        	}
        	
        	var checkObj3 = this.div21.Tab01.tabp01.cdCdRfqAim;
        	if(this.dsRfq.getColumn(0,"CD_RFQ_AIM") == "ET27LST" 
        		&& (this.dsRfq.getColumn(0,"TNDR_NO") == "" || this.dsRfq.getColumn(0,"TNDR_NO") == null)){
        		var sMsg = "최종견적에 필요한 입찰정보가 존재하지 않습니다. 견적목적을 변경하시길 바랍니다.";
        		var objParam = {agv_msg:sMsg, agv_objComp:checkObj3, agv_errLvl:"E", agv_validType:"필수체크"};
        		arrUserErr.push(objParam);
        	}
        	
        	//품목 NULL 체크
        	if(this.dsRfqItem.getRowCount() < 1){
        		var sMsg = "견적 품목은 1건 이상 추가 되어야 합니다.";	
        		var objParam = {agv_msg:sMsg, agv_objComp:checkObj, agv_errLvl:"E", agv_validType:"필수체크"};
        		arrUserErr.push(objParam);
        	}
        	//대상업체 NULL 체트
        	if(this.dsRfqPtnr.getRowCount() < 1){
        		var sMsg = "대상업체는 1건 이상 추가 되어야 합니다.";	
        		var objParam = {agv_msg:sMsg, agv_objComp:checkObj, agv_errLvl:"E", agv_validType:"필수체크"};
        		arrUserErr.push(objParam);
        	}
        	
        	//세부견적시 체크
        	if(this.dsRfq.getColumn(0,"ALT_SVC_DTL_BID") == "N" && this.dsRfqItem.getRowCount() > 1){
        		var sMsg = "견적 품목은 1건만 사용 할 수 있습니다.";	
        		var objParam = {agv_msg:sMsg, agv_objComp:checkObj, agv_errLvl:"E", agv_validType:"유효성 체크"};
        		arrUserErr.push(objParam);
        	}
        	
        	//그리드 유효성 체크 추가
         	for(var i=0;i<this.dsRfqItem.rowcount;i++)
         	{
         		var objGrd = this.div31.grdRfqItem;
         		if(gfnIsNull(this.dsRfqItem.getColumn(i, "DLV_REQ_DAY")) || this.dsRfqItem.getColumn(i, "DLV_REQ_DAY") <  gfnToday())
         		{
         			//TODO : 메시지 코드로 변경처리
         			var sMsg = gfnGetTextGrdLine(objGrd, i) +  "납품요청일자는 오늘 이전일자를 입력 할 수 없습니다.";
         			var objParam = {agv_msg:sMsg, agv_objComp:objGrd, agv_row:i, agv_dsCol:"DLV_REQ_DAY", agv_validType:"유효성 체크"};
         			arrUserErr.push(objParam);
         		}
         		if(gfnIsNull(this.dsRfqItem.getColumn(i, "QTY"))|| this.dsRfqItem.getColumn(i, "QTY") < 0){
        			var sMsg = gfnGetTextGrdLine(objGrd, i) +  "수량을 입력 해 주세요.";
         			var objParam = {agv_msg:sMsg, agv_objComp:objGrd, agv_row:i, agv_dsCol:"QTY", agv_validType:"유효성 체크"};
         			arrUserErr.push(objParam);
         		} 
         		if(gfnIsNull(this.dsRfqItem.getColumn(i, "MTRL_CD"))){
        			var sMsg = gfnGetTextGrdLine(objGrd, i) +  "품목을 입력 해 주세요.";
         			var objParam = {agv_msg:sMsg, agv_objComp:objGrd, agv_row:i, agv_dsCol:"MTRL_NM", agv_validType:"유효성 체크"};
         			arrUserErr.push(objParam);
         		}
         		
         		if(gfnIsNull(this.dsRfqItem.getColumn(i, "CD_UNIT"))){
        			var sMsg = gfnGetTextGrdLine(objGrd, i) +  "단위를 선택 해 주세요.";
         			var objParam = {agv_msg:sMsg, agv_objComp:objGrd, agv_row:i, agv_dsCol:"CD_UNIT", agv_validType:"유효성 체크"};
         			arrUserErr.push(objParam);
         		}
         		
         		if(!gfnIsNull(this.dsRfqItem.getColumn(i,"PR_ITEM_ID")) && gfnIsNull(this.dsRfqItem.getColumn(i, "STR_CD"))){
        			var sMsg = gfnGetTextGrdLine(objGrd, i) +  "창고를 입력 해 주세요.";
         			var objParam = {agv_msg:sMsg, agv_objComp:objGrd, agv_row:i, agv_dsCol:"STR_CD", agv_validType:"유효성 체크"};
         			arrUserErr.push(objParam);
         		}
         	}
        	
        	for(var i=0;i<this.dsRfqPtnr.rowcount;i++){
        		var objGrd = this.div51.grdRfqPtnr;
        		//제안설명회 실시 및 추후공고시 필수체크
        		if(this.dsRfq.getColumn(0,"ALT_RFQ_EXPLN_ACT") == "Y" && this.dsRfq.getColumn(0,"ALT_RFQ_EXPLN_NXT_NTC") != "Y"){
        			if(this.dsRfqPtnr.getColumn(i, "RFQ_EXPLN_DAY") == "" || this.dsRfqPtnr.getColumn(i, "RFQ_EXPLN_AREA") == "" ){
        				var sMsg = gfnGetTextGrdLine(objGrd, i) +  "제안설명회 일자 및 장소를 입력하셔야 합니다.";
        				var objParam = {agv_msg:sMsg, agv_objComp:objGrd, agv_row:i, agv_dsCol:"RFQ_EXPLN_DAY", agv_validType:"필수체크"};
        				arrUserErr.push(objParam);
        			}
        		}
        		
        		if(this.dsRfqPtnr.getColumn(i,"RFQ_EXPLN_TIME") == undefined || this.dsRfqPtnr.getColumn(i,"RFQ_EXPLN_TIME").length == 0) {
        			// 제안서 설명회 일자를 입력하지 않으면 시간도 설정하지 않는다..
        			if(this.dsRfqPtnr.getColumn(i, "RFQ_EXPLN_DAY") != "" || this.dsRfqPtnr.getColumn(i, "RFQ_EXPLN_AREA") != "" ){
        				this.dsRfqPtnr.setColumn(i,"RFQ_EXPLN_TIME","0000")
        			}
        		}
        		
        		var time = nexacro.toNumber(this.dsRfqPtnr.getColumn(i,"RFQ_EXPLN_TIME"));
         		if(time < 10){
        			time = time + "" + "000";
        			this.dsRfqPtnr.setColumn(i,"RFQ_EXPLN_TIME",time);
         		}else if(time < 100){
         			time = time + "" + "00";
         			this.dsRfqPtnr.setColumn(i,"RFQ_EXPLN_TIME",time);
         		}else if(time < 1000){
        			time = time + "" + "0";
         			this.dsRfqPtnr.setColumn(i,"RFQ_EXPLN_TIME",time);
         		}
        		
        		if(nexacro.toNumber(this.dsRfqPtnr.getColumn(i,"RFQ_EXPLN_TIME")) > 2359){
        			var sMsg = gfnGetTextGrdLine(objGrd, i) + "제안설명회 시간 형식이 잘못됬습니다.";
        			var objParam = {agv_msg:sMsg, agv_objComp:objGrd, agv_row:i, agv_dsCol:"RFQ_EXPLN_TIME", agv_validType:"유효성 체크"};
        			arrUserErr.push(objParam);
        		}
        		
        		//제안설명회 오늘 이전날짜는 넣을 수 없음
        		if(this.dsRfqPtnr.getColumn(i,"RFQ_EXPLN_DAY") != "" && this.dsRfqPtnr.getColumn(i,"RFQ_EXPLN_DAY") != "undefined"){
        			var objDate = new Date();
        			var checkTime = objDate.getHours() + "" +objDate.getMinutes();
        			var explnTime = this.dsRfqPtnr.getColumn(i,"RFQ_EXPLN_TIME");
        			
        			if(this.dsRfqPtnr.getColumn(i,"RFQ_EXPLN_DAY") < gfnToday()){
        				var sMsg = gfnGetTextGrdLine(objGrd, i) + "제안설명회 일자는 오늘 이후여야 합니다.";
        				var objParam = {agv_msg:sMsg, agv_objComp:objGrd, agv_row:i, agv_dsCol:"RFQ_EXPLN_DAY", agv_validType:"유효성 체크"};
        				arrUserErr.push(objParam);
        			}else if(this.dsRfqPtnr.getColumn(i,"RFQ_EXPLN_DAY") == gfnToday() && nexacro.toNumber(explnTime) < nexacro.toNumber(checkTime)){
        				var sMsg = gfnGetTextGrdLine(objGrd, i) + "제안설명회 시간은 현재시간 이후여야 합니다.";
        				var objParam = {agv_msg:sMsg, agv_objComp:objGrd, agv_row:i, agv_dsCol:"RFQ_EXPLN_TIME", agv_validType:"유효성 체크"};
        				arrUserErr.push(objParam);
        			}
        		}
        	}
        	
        	if(!gfnValidate(arrUserErr,"N")) //확인 클릭
        	{		
        		return false;
        	}
        	
        	return true;
        }

        /**
        	@function	div1_btn_rfqReq_onclick()
        	@desc   	견적요청 
        */   
        this.div1_btn_rfqReq_onclick = function(obj,e)
        {	
        	if (!this.fnPreReq()) return false;
        	
        	if(!gfnConfirm("견적요청 하시겠습니까?")) return;
        	
        	//견적마감시간처리
         	var time = this.dsRfq.getColumn(0,"RFQ_CLOSE_TIME");

         	if(time.length ==1){
         		this.dsRfq.setColumn(0,"RFQ_CLOSE_TIME","0"+time);
         	}else{		
         		this.dsRfq.setColumn(0,"RFQ_CLOSE_TIME",time); 		
         	}
        	
        	
        	this.dsRfq.setColumn(0,"CD_RFQ_STTS","ET10REQ");
        	this.dsRfq.setColumn(0,"PTNR_QUOTE_CRT_YN","Y");
        	
        	//견적요청파일이 존재하지 않으면 기본값으로 추가한다.
        	if(this.dsRfqReqFile.rowcount < 1){
        		var nRow = this.dsRfqReqFile.addRow();
        		//Default값을 설정
        		var nItemNo = 1;
        		if(nRow==0){
        			this.dsRfqReqFile.setColumn(nRow,"ITM_NO",nItemNo);
        		} else {
        			nItemNo = nexacro.toNumber(this.dsRfqReqFile.getColumn(nRow-1,"ITM_NO"))+1;
        			this.dsRfqReqFile.setColumn(nRow,"ITM_NO", nItemNo);
        		}
        		this.dsRfqReqFile.setColumn(nRow,"RFQ_REQ_NO",this.dsRfq.getColumn(0,"RFQ_REQ_NO"));
        		this.dsRfqReqFile.setColumn(nRow,"BRANCH_CD",this.dsRfq.getColumn(0,"BRANCH_CD"));
        		this.dsRfqReqFile.setColumn(nRow,"RFQ_ODR",this.dsRfq.getColumn(0,"RFQ_ODR"));
        		this.dsRfqReqFile.setColumn(nRow,"CD_FILE_TYPE","CM32ALL");
        		this.dsRfqReqFile.setColumn(nRow,"ALT_MDT","N");
        		this.dsRfqReqFile.setColumn(nRow,"REQ_FILE_NM","견적첨부파일");
        		this.dsRfqReqFile.setColumn(nRow,"RMARK","견적 제출시 필요한 파일을 첨부하세요.");
        	}
        	
        	var sSvcID = "req";
        	var sController = "BRfq_Req.do";
        	var sInDatasets = "in_rfq=dsRfq:A in_rfqItem=dsRfqItem:A in_rfqItemAdd=dsRfqItemAdd:U in_rfqPtnr=dsRfqPtnr:A in_rfqItemPtnrQuote=dsRfqItemPtnrQuote:U in_rfqReqFile=dsRfqReqFile:U in_refFile=dsRefFile:A";
        	var sOutDatasets = "dsRfq=in_rfq";
        	var sCallbackFunc = "fnTrCallBack";
        	
            gfnFileSaveTran(sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
        	@function	div3BtnPrReqAddOnclick()
        	@desc   	(품목)구매요청참조
        				아이템 추가시 기본적으로 배송지도 1ROW 추가한다	
        */  
        this.div3BtnPrReqAddOnclick = function(obj,e)
        {
        	var sArg = { agv_po_no:""
        			   , agv_doc_ctgr:this.dsRfq.getColumn(0,"CD_DOC_CTGR")};
        	gfnModalPop(this, "PopupComPurRef", "commPop::PPOPC200P00.xfdl", sArg, "fnPopCallBack");
        }

        /**
        	@function	div3BtnRfqItmAddOnclick()
        	@desc   	(품목)아이템 추가
        				아이템 추가시 기본적으로 배송지도 1ROW 추가한다.
        */  
        this.div3BtnRfqItmAddOnclick = function(obj,e)
        {	
        	if(gfnIsNull(this.dsRfqItem.getMax("PR_ITEM_ID")) == false){
        		alert("구매요청이 참조되어 추가할 수 없습니다.");
        		return false;
        	}
        	
        	var nRow = this.dsRfqItem.addRow();
         	//Default값을 설정
        	var nItemNo = 1;
        	if(nRow==0){
        		this.dsRfqItem.setColumn(nRow,"ITM_NO",nItemNo);
        	} else {
        		nItemNo = nexacro.toNumber(this.dsRfqItem.getColumn(nRow-1,"ITM_NO"))+1;
        		this.dsRfqItem.setColumn(nRow,"ITM_NO", nItemNo);
        	}
        	
        	this.dsRfqItem.setColumn(nRow,"STR_CD",application.gdsUserInfo.getColumn(0,"STR_CD"));
        	this.dsRfqItem.setColumn(nRow,"SL_NM",application.gdsUserInfo.getColumn(0,"SL_NM"));
        	this.dsRfqItem.setColumn(nRow,"DLV_REQ_DAY",gfnToday());
        	this.dsRfqItem.setColumn(nRow,"RFQ_REQ_NO",this.dsRfq.getColumn(0,"RFQ_REQ_NO"));
        	this.dsRfqItem.setColumn(nRow,"BRANCH_CD",this.dsRfq.getColumn(0,"BRANCH_CD"));
        	this.dsRfqItem.setColumn(nRow,"RFQ_ODR",this.dsRfq.getColumn(0,"RFQ_ODR"));
        	this.dsRfqItem.setColumn(nRow,"GOALUNT_PRICE","0");
        	this.dsRfqItem.setColumn(nRow,"SPEC_FILE_NO","");
        }

        /**
        	@function	div3_btnRfqItmDel_onclick()
        	@desc   	(품목)아이템 삭제
        				아이템 삭제시 기본적으로 배송지도 삭제한다.
        */   
        this.div3_btnRfqItmDel_onclick = function(obj,e)
        {
        	for(var i=this.dsRfqItem.rowcount;i>=0;i--){
        		if(this.dsRfqItem.getColumn(i,"CHECKED")==1){
        			var nItmNo = this.dsRfqItem.getColumn(i,"ITM_NO")
        			
        			//FILE_COMP_JOB_9 : 해당하는 파일 삭제
        			var arrFileKey = [this.dsRfqItem.getColumn(this.dsRfqItem.rowposition, "RFQ_REQ_NO"), this.dsRfqItem.getColumn(this.dsRfqItem.rowposition, "RFQ_REQ_ITEM_ID")];
        			gfnFileDelete(arrFileKey);
        			
        			this.dsRfqItem.deleteRow(i);
        		}
        	}  
        }

        /**
        	@function	div31GrdRfqItemOnexpandup()
        	@desc   	그리드 ROW 클릭이벤트
        */  
        this.div31GrdRfqItemOnexpandup = function(obj,e)
        {

        	
        	if("MTRL_NM" == gfnGrdBindColName(obj,obj.getCellPos())){		
        		
        		application.gdsCommCd.filter("CD_ID =='"+this.dsRfq.getColumn(0,"CD_DOC_CTGR")+"'");
        		var sArg = {
        					 agv_nm:this.dsRfqItem.getColumn(this.dsRfqItem.rowposition,"MTRL_NM")
        					 ,agv_cd_doc_ctgr : application.gdsCommCd.getColumn(0,"APPND_SET_NUM_1")
        					};		
        		gfnCPop_ComMtrlSrch(sArg,"fnPopCallBack","PopupComMtrlSrch");		
        	}else if("SL_NM" == gfnGrdBindColName(obj,obj.getCellPos())){
        		var sArg = { 
        					//agv_nm:this.div41.Tab02.tabp01.edtCdFctryNm.value
        					agv_nm:this.dsRfqItem.getColumn(this.dsRfqItem.rowposition,"SL_NM")
        				   };
        		gfnCPopComStorageSrch(sArg, "fnPopCallBack", "PPOPC1700P00");	
        	}
        }

        /**
        	@function	dsRfqItemOncolumnchanged()
        	@desc   	item의 수량과 단가가 변경되면 납품일정을 변경한다.
        */  
        this.dsRfqItemOncolumnchanged = function(obj,e)
        {
        	//단가 및 수량의 컬럼에 데이터가 변경되면 총금액을 계산한다.
         	if(e.columnid=="QTY" || e.columnid=="GOALUNT_PRICE"){
         		var nQty = ( e.columnid=="QTY"?e.newvalue:obj.getColumn(e.row,"QTY"));
         		var nPrice = ( e.columnid=="GOALUNT_PRICE"?e.newvalue:obj.getColumn(e.row,"GOALUNT_PRICE"));
         		if(gfnIsNull(nQty * nPrice)==false){
         			obj.setColumn(e.row,"GOALAMT", (nQty * nPrice));
         			this.dsRfq.setColumn(0,"GOALAMT",obj.getSum("GOALAMT"));
         		}
         	}
         	
        }

        /**
        	@function	dsRfqItemOnrowposchanged()
        	@desc   	데이터셋의 선택된 값이  변경되면 납품장소 그리드의 선택값을 변경한다.
        	            품목 상세정보 파일첨부 탭 파일 조회
        */  
        this.dsRfqItemOnrowposchanged = function(obj,e)
        {
        	//this.dsRfqItemDlv.filter("ITM_NO=="+this.dsRfqItem.getColumn(e.newrow,"ITM_NO"));	
        	//FILE_COMP_JOB_8 : 파일 조회(필터링)
        	this.fnGetCompFileList2();
        }

        /**
        	@function	div5BtnPtnrAddOnclick()
        	@desc   	(대상업체) 업체추가 클릭 이벤트
        */  
        this.div5BtnPtnrAddOnclick = function(obj,e)
        {
        	var sArg = { agv_doc_ctgr:this.dsRfq.getColumn(0,"CD_DOC_CTGR")
        				,agv_mode:"M"
        				,agv_opener_type : "RFQ" 
        	
        			 };
        	// 견적, 입찰 협력업체 검색팝업 (자재, 공사) 자재 공통으로 사용		 	
        	gfnModalPop(this, "PopupComCopSrchPtnr", "commPop::PPOPC500P02.xfdl", sArg, "fnPopCallBack");
        	
        }

        /**
        	@function	div5BtnPtnrDelOnclick()
        	@desc   	(대상업체) 업체삭제 클릭 이벤트
        */  
        this.div5BtnPtnrDelOnclick = function(obj,e)
        {
        	for(var i=this.dsRfqPtnr.rowcount;i>=0;i--){
        		if(this.dsRfqPtnr.getColumn(i,"CHECKED")==1){
        			this.dsRfqPtnr.deleteRow(i);
        		}
        	}
        }

        /**
        	@function	div6BtnFileAddOnclick()
        	@desc   	(견적요청파일) 파일추가 클릭 이벤트
        */  
        this.div6BtnFileAddOnclick = function(obj,e)
        {
        	var nRow = this.dsRfqReqFile.addRow();
         	//Default값을 설정
        	var nItemNo = 1;
        	if(nRow==0){
        		this.dsRfqReqFile.setColumn(nRow,"ITM_NO",nItemNo);
        	} else {
        		nItemNo = nexacro.toNumber(this.dsRfqReqFile.getColumn(nRow-1,"ITM_NO"))+1;
        		this.dsRfqReqFile.setColumn(nRow,"ITM_NO", nItemNo);
        	}
        	this.dsRfqReqFile.setColumn(nRow,"RFQ_REQ_NO",this.dsRfq.getColumn(0,"RFQ_REQ_NO"));
        	this.dsRfqReqFile.setColumn(nRow,"BRANCH_CD",this.dsRfq.getColumn(0,"BRANCH_CD"));
        	this.dsRfqReqFile.setColumn(nRow,"RFQ_ODR",this.dsRfq.getColumn(0,"RFQ_ODR"));
        	this.dsRfqReqFile.setColumn(nRow,"CD_FILE_TYPE","CM32ALL");
        }

        /**
        	@function	div6BtnFileDelOnclick()
        	@desc   	(견적요청파일) 파일삭제 클릭 이벤트
        */  
        this.div6BtnFileDelOnclick = function(obj,e)
        {
        /*	for(var i=this.dsRfqReqFile.rowcount;i>=0;i--){
        		if(this.dsRfqReqFile.getColumn(i,"CHECKED")==1){
        			this.dsRfqReqFile.deleteRow(i);
        		}
        	}
        */	
        	gfnDsChkDel(this.dsRfqReqFile);
        }

        /**
        	@function	div41_Tab01_tabp01_btnMtrlGrpCd_onclick()
        	@desc   	(품목상세) 품목그룹팝업 호출 이벤트
        */  
        this.div41_Tab01_tabp01_btnMtrlGrpCd_onclick = function(obj,e)
        {	
        	if(this.dsRfqItem.rowcount==0) return;
        	var sArg = { agv_src_id:this.div41.Tab02.tabp01.edtMtrlGrpId
        			    ,agv_src_nm:this.div41.Tab02.tabp01.edtMtrlGrpNm
        			    ,agv_mode:"" };
        	//gfnModalPop(this, "PopupComMtrlGrpSrch", "commPop::PPOPC800P00.xfdl", sArg, "fnPopCallBack");
        	gfnCPop_ComMtrlSrch(sArg, "fnPopCallBack", "PopupComMtrlGrpSrch");
        }

        /**
        	@function	div41_Tab01_tabp01_btnMtrlCd_onclick()
        	@desc   	(품목상세) 자재팝업 호출 이벤트
        */  
        this.div41_Tab01_tabp01_btnMtrlCd_onclick = function(obj,e)
        {	
        	application.gdsCommCd.filter("CD_ID =='"+this.dsRfq.getColumn(0,"CD_DOC_CTGR")+"'");
        		
        	if(this.dsRfqItem.rowcount==0) return;
        	var sArg = { agv_id:this.div41.Tab02.tabp01.edtMtrlCd.value
        			    ,agv_nm:this.div41.Tab02.tabp01.edtMtrlNm.value
        			    ,agv_src_id:this.div41.Tab02.tabp01.edtMtrlGrpId.value
        			    ,agv_src_nm:this.div41.Tab02.tabp01.edtMtrlGrpNm.value
        			    ,agv_cd_doc_ctgr : application.gdsCommCd.getColumn(0,"APPND_SET_NUM_1")
        				 };
        	gfnCPop_ComMtrlSrch( sArg, "fnPopCallBack", "PopupComMtrlSrch");
        }

        /**
        	@function	div21RMARKTabpage6BtnChrgrOnclick()
        	@desc   	(품목상세) 담당자검색팝업 호출 이벤트
        */  
        this.div21RMARKTabpage6BtnChrgrOnclick = function(obj,e)
        {
        	var sArg = { 
        			    agv_nm:this.div21.Tab01.tabpage6.edtChrgrNm.value
        			   };
        	//gfnModalPop(this, "PopupComUserSrchInput", "commPop::PPOPC600P01.xfdl", sArg, "fnPopCallBack");
        	gfnCPop_ComUserSrch(sArg, "fnPopCallBack", "PopupComUserSrchInput");
        }

        /**
        	@function	div41Tab01Tabp03BtnPtnrSearchOnclick()
        	@desc   	(품목상세) 협력사검색팝업 호출 이벤트
        */  
        this.div41Tab01Tabp03BtnPtnrSearchOnclick = function(obj,e)
        {
        	var sArg = { 
        			     agv_nm:this.div41.Tab02.tabp03.edt_ptnrNm00.vlaue };
        	gfnCPop_ComCorpSrch( sArg,"fnPopCallBack","PopupComCopSrchPtnrItm");
        	
        }

        /**
        	@function	div41Tab02Tabp03BtnZipNoOnclick()
        	@desc   	(품목상세) 우편번호검색팝업 호출 이벤트
        */  
        this.div41Tab02Tabp03BtnZipNoOnclick = function(obj,e)
        {
        	var sArg = { agv_id:""
        			   , agv_nm:"" };
        	gfnModalPop(this, "PopupComZipSrch", "commPop::PPOPC1100P00.xfdl", sArg, "fnPopCallBack");
        }

        /**
        	@function	fnPopCallBack()
        	@desc   	(공통)팝업 CallBack 함수
        */  
        this.fnPopCallBack = function(sPopupId,rtn)
        {
        	if(gfnIsNull(rtn)) return;

        	if(rtn.indexOf("<Dataset id=") == 0){
        		//callback을 받기위한 빈 DataSet을 미리 생성해 놓아야한다.
        		this.dsReturn.loadXML(rtn);
        		
        		if(sPopupId == "BPurTypePop"){
        			trace("1");
        			//문서유형 팝업 호출하는 경우는 신규작성이기 떄문에 Default Value 를 적용한다.
        			this.dsRfq.setColumn(0,"CD_DOC_CTGR",this.dsReturn.getColumn(0,"CD_ID"));		
        			this.div1.cboDocType.set_enable(false);
        			
        			//기본정보세팅
        			this.dsRfq.setColumn(0,"CD_RFQ_STTS","ET10WRI");
        			this.dsRfq.setColumn(0,"CD_RFQ_STTS_NM","작성중");
        			this.dsRfq.setColumn(0,"CD_RFQ_CRNC","CM15KRW"); //견적통화
        			this.dsRfq.setColumn(0,"RFQ_CLOSE_TIME","23"); //견적마감시간
        			
        			//문서유형별 기본정보세팅
        			if(this.dsReturn.getColumn(0,"CD_ID") != "CM109"){
        				this.dsRfq.setColumn(0,"ALT_QTY_OPEN","Y"); //수량공개여부
        				this.dsRfq.setColumn(0,"ALT_RFQ_PRICE_SBMT","Y"); //견적가제출여부
        				this.dsRfq.setColumn(0,"ALT_CERT","N"); //인증서사용여부
        				this.dsRfq.setColumn(0,"ALT_BDGT_OPEN","N"); //예산공개여부
        				this.dsRfq.setColumn(0,"ALT_TARG_CORP_OPEN","N"); //대상업체공개여부
        				this.dsRfq.setColumn(0,"ALT_RFQ_EXPLN_ACT","N"); //제안설명회실시여부
        				this.dsRfq.setColumn(0,"ALT_OPEN_EXPLN","N"); //현장설명회여부
        				this.dsRfq.setColumn(0,"ALT_SVC_RFQ","N"); //서비스견적여부
        				this.dsRfq.setColumn(0,"ALT_SVC_DTL_BID","Y"); //서비스세부견적여부
        //				this.dsRfq.setColumn(0,"CD_RFQ_SBMT_MTHD","Y"); //견적제출방식 
        				
        				/* 20160812 JJH 수정 */
        //  				this.div21.Tab01.tabp01.rdAltSvcDtlBid.set_readonly(false);
        //  				this.div21.Tab01.tabp01.rdAltSvcDtlBid.set_cssclass("rdo_default_r");
        			}else{
        				this.dsRfq.setColumn(0,"ALT_QTY_OPEN","Y"); //수량공개여부
        				this.dsRfq.setColumn(0,"ALT_RFQ_PRICE_SBMT","Y"); //견적가제출여부
        				this.dsRfq.setColumn(0,"ALT_CERT","N"); //인증서사용여부
        				this.dsRfq.setColumn(0,"ALT_BDGT_OPEN","N"); //예산공개여부
        				this.dsRfq.setColumn(0,"ALT_TARG_CORP_OPEN","N"); //대상업체공개여부
        				this.dsRfq.setColumn(0,"ALT_RFQ_EXPLN_ACT","N"); //제안설명회실시여부
        				this.dsRfq.setColumn(0,"ALT_OPEN_EXPLN","Y"); //현장설명회여부
        				this.dsRfq.setColumn(0,"ALT_SVC_RFQ","Y"); //서비스견적여부
        				this.dsRfq.setColumn(0,"ALT_SVC_DTL_BID","N"); //서비스세부견적여부
        ///				this.dsRfq.setColumn(0,"CD_RFQ_SBMT_MTHD","N"); //견적제출방식
        			}
        			//입찰담당자정보 셋팅
        			this.dsRfq.setColumn(0, "CHRGR_ID", application.gdsUserInfo.getColumn(0,"USER_ID"));
        			this.dsRfq.setColumn(0, "CHRGR_NM", application.gdsUserInfo.getColumn(0,"USER_NM"));
        			this.dsRfq.setColumn(0, "TEL", application.gdsUserInfo.getColumn(0,"TEL"));
        			this.dsRfq.setColumn(0, "EMAIL", application.gdsUserInfo.getColumn(0,"EMAIL"));
        			this.dsRfq.setColumn(0, "FAX", application.gdsUserInfo.getColumn(0,"FAX"));
        			
        		}else if(sPopupId == "PopupComUserSrchInput"){
        			this.dsRfq.setColumn(0,"CHRGR_ID",this.dsReturn.getColumn(0,"USER_ID"));
        			this.dsRfq.setColumn(0,"CHRGR_NM",this.dsReturn.getColumn(0,"USER_NM"));
        			this.dsRfq.setColumn(0,"TEL",this.dsReturn.getColumn(0,"TEL"));
        			this.dsRfq.setColumn(0,"EMAIL",this.dsReturn.getColumn(0,"EMAIL"));
        			this.dsRfq.setColumn(0,"FAX",this.dsReturn.getColumn(0,"FAX"));
        		}else if(sPopupId == "PopupComMtrlGrpSrch" || sPopupId ==  "PopupComMtrlGrpSrchInput"){ 
        			this.dsRfqItem.setColumn(this.dsRfqItem.rowposition,"SRC_GRP_ID",this.dsReturn.getColumn(0,"SRC_GRP_ID"));
        			this.dsRfqItem.setColumn(this.dsRfqItem.rowposition,"SRC_GRP_NM",this.dsReturn.getColumn(0,"SRC_GRP_NM"));
        			this.dsRfqItem.setColumn(this.dsRfqItem.rowposition,"MTRL_GRP_ID",this.dsReturn.getColumn(0,"SML_CLS_ID"));
        			this.dsRfqItem.setColumn(this.dsRfqItem.rowposition,"MTRL_GRP_NM",this.dsReturn.getColumn(0,"MTRL_GRP_NM2"));
        		}else if(sPopupId == "PopupComMtrlSrch"){
        // 			this.dsRfqItem.setColumn(this.dsRfqItem.rowposition,"MTRL_GRP_ID",this.dsReturn.getColumn(0,"MTRL_GRP_ID"));
        // 			this.dsRfqItem.setColumn(this.dsRfqItem.rowposition,"MTRL_GRP_NM",this.dsReturn.getColumn(0,"MTRL_GRP_NM"));
        			this.dsRfqItem.setColumn(this.dsRfqItem.rowposition,"MTRL_GRP_ID",this.dsReturn.getColumn(0,"SML_CLS_ID"));
        			this.dsRfqItem.setColumn(this.dsRfqItem.rowposition,"MTRL_GRP_NM",this.dsReturn.getColumn(0,"MTRL_GRP_NM2"));
        			this.dsRfqItem.setColumn(this.dsRfqItem.rowposition,"MTRL_CD",this.dsReturn.getColumn(0,"MTRL_CD"));
        			this.dsRfqItem.setColumn(this.dsRfqItem.rowposition,"MTRL_NM",this.dsReturn.getColumn(0,"MTRL_NM2"));
        			this.dsRfqItem.setColumn(this.dsRfqItem.rowposition,"CD_UNIT",this.dsReturn.getColumn(0,"CD_PUR_UNIT"));			
        		}else if(sPopupId == "PopupComCopSrchPtnr"){
        			for(var i=0;i<this.dsReturn.rowcount;i++){
        				if(this.dsRfqPtnr.findRow("PTNR_ID",this.dsReturn.getColumn(i,"PTNR_ID"))==-1){
        					var nRow = this.dsRfqPtnr.addRow();
        					this.dsRfqPtnr.setColumn(nRow,"RFQ_REQ_NO",this.dsRfq.getColumn(0,"RFQ_REQ_NO"));
        					this.dsRfqPtnr.setColumn(nRow,"BRANCH_CD",this.dsRfq.getColumn(0,"BRANCH_CD"));
        					this.dsRfqPtnr.setColumn(nRow,"RFQ_ODR",this.dsRfq.getColumn(0,"RFQ_ODR"));
        					this.dsRfqPtnr.setColumn(nRow,"PTNR_ID",this.dsReturn.getColumn(i,"PTNR_ID"));
        					this.dsRfqPtnr.setColumn(nRow,"PTNR_NM",this.dsReturn.getColumn(i,"PTNR_NM"));
        					this.dsRfqPtnr.setColumn(nRow,"BIZ_NO",this.dsReturn.getColumn(i,"BIZ_NO"));
        					this.dsRfqPtnr.setColumn(nRow,"RPRSTV_NM",this.dsReturn.getColumn(i,"RPRSTV_NM"));					
        					// 대상업체 대표사용자 클릭시 상세 팝업					
        					this.dsRfqPtnr.setColumn(nRow,"RPRSTV_USER_ID",this.dsReturn.getColumn(i,"RPRSTV_USER_ID"));						
        					this.dsRfqPtnr.setColumn(nRow,"RPRSTV_HP",this.dsReturn.getColumn(i,"RPRSTV_HP"));
        					this.dsRfqPtnr.setColumn(nRow,"RPRSTV_EMAIL",this.dsReturn.getColumn(i,"RPRSTV_EMAIL"));
        				}
        			}
        		}else if(sPopupId == "PopupComPurRef"){
        			for(var i=0;i<this.dsReturn.rowcount;i++){
        				if(this.dsRfqItem.findRow("PR_ITEM_ID",this.dsReturn.getColumn(i,"PR_ITEM_ID"))==-1){
        					var nRow = this.dsRfqItem.addRow();
        					//Default값을 설정
        					var nItemNo = 1;
        					if(nRow==0){
        						this.dsRfqItem.setColumn(nRow,"ITM_NO",nItemNo);
        					} else {
        						nItemNo = nexacro.toNumber(this.dsRfqItem.getColumn(nRow-1,"ITM_NO"))+1;
        						this.dsRfqItem.setColumn(nRow,"ITM_NO", nItemNo);
        					}
        					
        					this.dsRfqItem.setColumn(nRow,"RFQ_REQ_NO",this.dsRfq.getColumn(0,"RFQ_REQ_NO"));
        					this.dsRfqItem.setColumn(nRow,"BRANCH_CD",this.dsRfq.getColumn(0,"BRANCH_CD"));
        					this.dsRfqItem.setColumn(nRow,"RFQ_ODR",this.dsRfq.getColumn(0,"RFQ_ODR"));
        					this.dsRfqItem.setColumn(nRow,"IM_ODR_NO",this.dsReturn.getColumn(i,"IM_ODR_NO"));
        					this.dsRfqItem.setColumn(nRow,"PR_ITEM_ID",this.dsReturn.getColumn(i,"PR_ITEM_ID"));
        					this.dsRfqItem.setColumn(nRow,"PR_NO",this.dsReturn.getColumn(i,"PR_NO"));
        					this.dsRfqItem.setColumn(nRow,"MTRL_GRP_ID",this.dsReturn.getColumn(i,"MTRL_GRP_ID"));
        					this.dsRfqItem.setColumn(nRow,"MTRL_GRP_NM",this.dsReturn.getColumn(i,"MTRL_GRP_NM"));
        					this.dsRfqItem.setColumn(nRow,"MTRL_CD",this.dsReturn.getColumn(i,"MTRL_CD"));
        					this.dsRfqItem.setColumn(nRow,"MTRL_NM",this.dsReturn.getColumn(i,"MTRL_NM"));
        					this.dsRfqItem.setColumn(nRow,"QTY",this.dsReturn.getColumn(i,"QTY"));
        					this.dsRfqItem.setColumn(nRow,"GOALUNT_PRICE",this.dsReturn.getColumn(i,"REQ_PRICE"));
        					this.dsRfqItem.setColumn(nRow,"GOALUNT_AMT",this.dsReturn.getColumn(i,"REQ_AMT"));
        					this.dsRfqItem.setColumn(nRow,"CD_UNIT",this.dsReturn.getColumn(i,"CD_UNIT"));
        					this.dsRfqItem.setColumn(nRow,"DLV_REQ_DAY",this.dsReturn.getColumn(i,"DLV_REQ_DAY"));
        					this.dsRfqItem.setColumn(nRow,"STR_CD",this.dsReturn.getColumn(i,"STR_CD"));
        					this.dsRfqItem.setColumn(nRow,"SL_NM",this.dsReturn.getColumn(i,"SL_NM"));
        					this.dsRfqItem.setColumn(nRow,"RMARK",this.dsReturn.getColumn(i,"RMARK"));
        					this.dsRfqItem.setColumn(nRow,"TKEY",this.dsReturn.getColumn(i,"TKEY"));
        										
        					this.fnCtrlBtn();
        				}
        			}
        		}else if(sPopupId == "PPOPC1700P00"){
        			this.dsRfqItem.setColumn(this.dsRfqItem.rowposition,"SL_NM",this.dsReturn.getColumn(0,"SL_NM"));
        			this.dsRfqItem.setColumn(this.dsRfqItem.rowposition,"STR_CD",this.dsReturn.getColumn(0,"STR_CD"));			
        		}else if(sPopupId == "PopupComCopSrchPtnrItm"){
        			this.dsRfqItem.setColumn(this.dsRfqItem.rowposition,"PTNR_ID",this.dsReturn.getColumn(0,"PTNR_ID"));
        			this.dsRfqItem.setColumn(this.dsRfqItem.rowposition,"DLV_PLC_NM",this.dsReturn.getColumn(0,"PTNR_NM"));
        		}else if(sPopupId == "PopupDocType"){
        		/*	
        			//자재 일반견적
        			if(this.dsReturn.getColumn(0,"DOC_TYPE") == "CM10M01"){
        				this.dsRfq.setColumn(0,"ALT_QTY_OPEN","Y"); //수량공개여부
        				this.dsRfq.setColumn(0,"ALT_RFQ_PRICE_SBMT","Y"); //견적가제출여부
        				this.dsRfq.setColumn(0,"ALT_CERT","Y"); //인증서사용여부
        				this.dsRfq.setColumn(0,"ALT_BDGT_OPEN","N"); //예산공개여부
        				this.dsRfq.setColumn(0,"ALT_TARG_CORP_OPEN","N"); //대상업체공개여부
        				this.dsRfq.setColumn(0,"ALT_RFQ_EXPLN_ACT","N"); //제안설명회실시여부
        				this.dsRfq.setColumn(0,"ALT_OPEN_EXPLN","N"); //현장설명회여부
        				this.dsRfq.setColumn(0,"ALT_SVC_RFQ","N"); //서비스견적여부
        				this.dsRfq.setColumn(0,"ALT_SVC_DTL_BID","Y"); //서비스세부견적여부
        			//물량배분견적
        			}else if(this.dsReturn.getColumn(0,"DOC_TYPE") == "CM10M02"){
        				this.dsRfq.setColumn(0,"ALT_QTY_OPEN","N"); //수량공개여부
        				this.dsRfq.setColumn(0,"ALT_RFQ_PRICE_SBMT","Y"); //견적가제출여부
        				this.dsRfq.setColumn(0,"ALT_CERT","Y"); //인증서사용여부
        				this.dsRfq.setColumn(0,"ALT_BDGT_OPEN","N"); //예산공개여부
        				this.dsRfq.setColumn(0,"ALT_TARG_CORP_OPEN","N"); //대상업체공개여부
        				this.dsRfq.setColumn(0,"ALT_RFQ_EXPLN_ACT","N"); //제안설명회실시여부
        				this.dsRfq.setColumn(0,"ALT_OPEN_EXPLN","N"); //현장설명회여부
        				this.dsRfq.setColumn(0,"ALT_SVC_RFQ","N"); //서비스견적여부
        				this.dsRfq.setColumn(0,"ALT_SVC_DTL_BID","Y"); //서비스세부견적여부
        			//자재 월합계 견적
        			}else if(this.dsReturn.getColumn(0,"DOC_TYPE") == "CM10M03"){
        				this.dsRfq.setColumn(0,"ALT_QTY_OPEN","Y"); //수량공개여부
        				this.dsRfq.setColumn(0,"ALT_RFQ_PRICE_SBMT","Y"); //견적가제출여부
        				this.dsRfq.setColumn(0,"ALT_CERT","Y"); //인증서사용여부
        				this.dsRfq.setColumn(0,"ALT_BDGT_OPEN","N"); //예산공개여부
        				this.dsRfq.setColumn(0,"ALT_TARG_CORP_OPEN","N"); //대상업체공개여부
        				this.dsRfq.setColumn(0,"ALT_RFQ_EXPLN_ACT","N"); //제안설명회실시여부
        				this.dsRfq.setColumn(0,"ALT_OPEN_EXPLN","N"); //현장설명회여부
        				this.dsRfq.setColumn(0,"ALT_SVC_RFQ","N"); //서비스견적여부
        				this.dsRfq.setColumn(0,"ALT_SVC_DTL_BID","Y"); //서비스세부견적여부
        			//자재 자재 기술점수 반영
        			}else if(this.dsReturn.getColumn(0,"DOC_TYPE") == "CM10M04"){
        				this.dsRfq.setColumn(0,"ALT_QTY_OPEN","Y"); //수량공개여부
        				this.dsRfq.setColumn(0,"ALT_RFQ_PRICE_SBMT","Y"); //견적가제출여부
        				this.dsRfq.setColumn(0,"ALT_CERT","Y"); //인증서사용여부
        				this.dsRfq.setColumn(0,"ALT_BDGT_OPEN","N"); //예산공개여부
        				this.dsRfq.setColumn(0,"ALT_TARG_CORP_OPEN","N"); //대상업체공개여부
        				this.dsRfq.setColumn(0,"ALT_RFQ_EXPLN_ACT","Y"); //제안설명회실시여부
        				this.dsRfq.setColumn(0,"ALT_OPEN_EXPLN","Y"); //현장설명회여부
        				this.dsRfq.setColumn(0,"ALT_SVC_RFQ","N"); //서비스견적여부
        				this.dsRfq.setColumn(0,"ALT_SVC_DTL_BID","Y"); //서비스세부견적여부
        			}else if(this.dsReturn.getColumn(0,"DOC_TYPE") == "CM10C01"){
        				this.dsRfq.setColumn(0,"ALT_QTY_OPEN","Y"); //수량공개여부
        				this.dsRfq.setColumn(0,"ALT_RFQ_PRICE_SBMT","Y"); //견적가제출여부
        				this.dsRfq.setColumn(0,"ALT_CERT","Y"); //인증서사용여부
        				this.dsRfq.setColumn(0,"ALT_BDGT_OPEN","N"); //예산공개여부
        				this.dsRfq.setColumn(0,"ALT_TARG_CORP_OPEN","N"); //대상업체공개여부
        				this.dsRfq.setColumn(0,"ALT_RFQ_EXPLN_ACT","N"); //제안설명회실시여부
        				this.dsRfq.setColumn(0,"ALT_OPEN_EXPLN","Y"); //현장설명회여부
        				this.dsRfq.setColumn(0,"ALT_SVC_RFQ","Y"); //서비스견적여부
        				this.dsRfq.setColumn(0,"ALT_SVC_DTL_BID","N"); //서비스세부견적여부
        			}else if(this.dsReturn.getColumn(0,"DOC_TYPE") == "CM10C02"){
        				this.dsRfq.setColumn(0,"ALT_QTY_OPEN","Y"); //수량공개여부
        				this.dsRfq.setColumn(0,"ALT_RFQ_PRICE_SBMT","Y"); //견적가제출여부
        				this.dsRfq.setColumn(0,"ALT_CERT","Y"); //인증서사용여부
        				this.dsRfq.setColumn(0,"ALT_BDGT_OPEN","N"); //예산공개여부
        				this.dsRfq.setColumn(0,"ALT_TARG_CORP_OPEN","N"); //대상업체공개여부
        				this.dsRfq.setColumn(0,"ALT_RFQ_EXPLN_ACT","N"); //제안설명회실시여부
        				this.dsRfq.setColumn(0,"ALT_OPEN_EXPLN","N"); //현장설명회여부
        				this.dsRfq.setColumn(0,"ALT_SVC_RFQ","N"); //서비스견적여부
        				this.dsRfq.setColumn(0,"ALT_SVC_DTL_BID","Y"); //서비스세부견적여부
        			}else if(this.dsReturn.getColumn(0,"DOC_TYPE") == "CM10C03"){
        				this.dsRfq.setColumn(0,"ALT_QTY_OPEN","Y"); //수량공개여부
        				this.dsRfq.setColumn(0,"ALT_RFQ_PRICE_SBMT","Y"); //견적가제출여부
        				this.dsRfq.setColumn(0,"ALT_CERT","Y"); //인증서사용여부
        				this.dsRfq.setColumn(0,"ALT_BDGT_OPEN","N"); //예산공개여부
        				this.dsRfq.setColumn(0,"ALT_TARG_CORP_OPEN","N"); //대상업체공개여부
        				this.dsRfq.setColumn(0,"ALT_RFQ_EXPLN_ACT","Y"); //제안설명회실시여부
        				this.dsRfq.setColumn(0,"ALT_OPEN_EXPLN","Y"); //현장설명회여부
        				this.dsRfq.setColumn(0,"ALT_SVC_RFQ","Y"); //서비스견적여부
        				this.dsRfq.setColumn(0,"ALT_SVC_DTL_BID","N"); //서비스세부견적여부
        			}
        			*/			
        		//	this.dsRfq.setColumn(0,"CD_OPEN_TYPE", this.dsReturn.getColumn(0,"CD_OPEN_TYPE")); 					// 공개유형
        			this.dsRfq.setColumn(0,"CD_RFQ_CRNC", this.dsReturn.getColumn(0,"CD_RFQ_CRNC")); 						// 견적통화견적통화			
        			this.dsRfq.setColumn(0,"ALT_RFQ_EXPLN_ACT", this.dsReturn.getColumn(0,"ALT_RFQ_EXPLN_ACT")); 			// 제안설명회실시여부 제안설명회실시여부			
        			this.dsRfq.setColumn(0,"ALT_RFQ_EXPLN_NXT_NTC", this.dsReturn.getColumn(0,"ALT_RFQ_EXPLN_NXT_NTC"));	// 제안설명회추후공지여부
        			this.dsRfq.setColumn(0,"ALT_TARG_CORP_OPEN", this.dsReturn.getColumn(0,"ALT_TARG_CORP_OPEN")); 		// 대상업체공개여부 대상업체공개여부						
        			this.dsRfq.setColumn(0,"ALT_BDGT_OPEN", this.dsReturn.getColumn(0,"ALT_BDGT_OPEN")); 				    // 예산공개여부 예산공개여부
        			this.dsRfq.setColumn(0,"ALT_RFQ_PRICE_SBMT", this.dsReturn.getColumn(0,"ALT_RFQ_PRICE_SBMT")); 		// 견적가제출여부 견적가제출여부			
        			this.dsRfq.setColumn(0,"ALT_OPEN_EXPLN",this.dsReturn.getColumn(0,"ALT_OPEN_EXPLN")); 				// 현장설명회여부 공개설명회여부
        			this.dsRfq.setColumn(0,"ALT_CERT", this.dsReturn.getColumn(0,"ALT_CERT")); 							// 인증서사용여부 
        			this.dsRfq.setColumn(0,"ALT_SVC_RFQ", this.dsReturn.getColumn(0,"ALT_SVC_RFQ")); 						// 서비스견적여부 서비스결정여부			
        			this.dsRfq.setColumn(0,"ALT_QTY_OPEN", this.dsReturn.getColumn(0,"ALT_QTY_OPEN")); 					// 수량공개여부
        			
        			//this.dsRfq.setColumn(0,"CD_RFQ_SBMT_MTHD", this.dsReturn.getColumn(0,"CD_RFQ_SBMT_MTHD")); 			// 서비스세부견적여부(견적제출방법	)		 
        			if(this.dsReturn.getColumn(0, "CD_RFQ_SBMT_MTHD") == "N"){
        			   if(this.dsRfq.getColumn(0, "CD_DOC_CTGR") != "CM109"){
        			        gfnAlert("구매유형이 공사가 아닐경우 상세견적을 작성할 수 없습니다.");
        					this.dsRfq.setColumn(0,"ALT_SVC_DTL_BID", "Y");
        					//this.dsRfq.setColumn(0,"CD_RFQ_SBMT_MTHD", "Y");
        			   }else{
        					this.dsRfq.setColumn(0,"ALT_SVC_DTL_BID", this.dsReturn.getColumn(0,"CD_RFQ_SBMT_MTHD"));
        					//this.dsRfq.setColumn(0,"CD_RFQ_SBMT_MTHD", this.dsReturn.getColumn(0,"CD_RFQ_SBMT_MTHD"));
        			   }
        			}else{
        					this.dsRfq.setColumn(0,"ALT_SVC_DTL_BID", this.dsReturn.getColumn(0,"CD_RFQ_SBMT_MTHD"));	// 서비스세부견적여부(견적제출방법	)
        					//this.dsRfq.setColumn(0,"CD_RFQ_SBMT_MTHD", this.dsReturn.getColumn(0,"CD_RFQ_SBMT_MTHD"));
        			}
        						
        			//문서유형이 공사가 아닐경우 readonly로 변경한다.
        			/* 20160812 JJH 수정 */
        // 			if(this.dsRfq.getColumn(0,"CD_DOC_CTGR") != "CM109"){
        //  				this.div21.Tab01.tabp01.rdAltSvcDtlBid.set_readonly(false);
        //  				this.div21.Tab01.tabp01.rdAltSvcDtlBid.set_cssclass("rdo_default_r");
        // 			}
        		}else if(sPopupId == "PopupComZipSrch"){
        			this.dsRfqItem.setColumn(this.dsRfqItem.rowposition,"ZIP_NO",this.dsReturn.getColumn(0,"ZIPNO"));
        			this.dsRfqItem.setColumn(this.dsRfqItem.rowposition,"ADDR",this.dsReturn.getColumn(0,"ROADADDR"));
        		}else if(sPopupId == "purFileAdd"){
        			for(var i=0;i<this.dsReturn.rowcount;i++){
        				if(this.dsRefFile.findRow("FILE_ID",this.dsReturn.getColumn(i,"FILE_ID"))==-1){
        					var nRow = this.dsRefFile.addRow();
        					this.dsRefFile.setColumn(nRow,"FILE_ID",this.dsReturn.getColumn(i,"FILE_ID"));
        					this.dsRefFile.setColumn(nRow,"REF_KEY_1",this.dsReturn.getColumn(i,"REF_KEY_1"));
        					this.dsRefFile.setColumn(nRow,"REF_KEY_2",this.dsReturn.getColumn(i,"REF_KEY_2"));
        					this.dsRefFile.setColumn(nRow,"REF_KEY_3",this.dsReturn.getColumn(i,"REF_KEY_3"));
        					this.dsRefFile.setColumn(nRow,"REF_KEY_4",this.dsReturn.getColumn(i,"REF_KEY_4"));
        					this.dsRefFile.setColumn(nRow,"REF_KEY_5",this.dsReturn.getColumn(i,"REF_KEY_5"));
        					this.dsRefFile.setColumn(nRow,"REF_TBL_NM","MM_RFQ");
        					this.dsRefFile.setColumn(nRow,"PK1_NAME","RFQ_REQ_NO");
        					this.dsRefFile.setColumn(nRow,"PK2_NAME","RFQ_ODR");
        					this.dsRefFile.setColumn(nRow,"REF_KEY1",this.dsRfq.getColumn(0,"RFQ_REQ_NO"));
        					this.dsRefFile.setColumn(nRow,"REF_KEY2",this.dsRfq.getColumn(0,"RFQ_ODR"));
        				}
        			}
        			if(0 < this.dsRefFile.rowcount){
        				gfnAlert("추가된 파일은 저장 및 견적요청시 저장됩니다.");
        			}
        		}else if(sPopupId == "PopupAppReq"){
        			//저장후 받아온 값으로 데이터조회
        			if (!this.fnPreReq()) return false;
        		
        			//견적마감시간처리
        			var time = this.dsRfq.getColumn(0,"RFQ_CLOSE_TIME");
        			if(time.length ==1){
        				this.dsRfq.setColumn(0,"RFQ_CLOSE_TIME","0"+time);				
        			}else{
        				this.dsRfq.setColumn(0,"RFQ_CLOSE_TIME",time);				
        			}
        	
        			//this.dsRfq.setColumn(0,"CD_RFQ_STTS","ET10APP");
        			this.dsRfq.setColumn(0,"PTNR_QUOTE_CRT_YN","Y");
        			
        			//견적요청파일이 존재하지 않으면 기본값으로 추가한다.
        			if(this.dsRfqReqFile.rowcount < 1){
        				var nRow = this.dsRfqReqFile.addRow();
        				//Default값을 설정
        				var nItemNo = 1;
        				if(nRow==0){
        					this.dsRfqReqFile.setColumn(nRow,"ITM_NO",nItemNo);
        				} else {
        					nItemNo = nexacro.toNumber(this.dsRfqReqFile.getColumn(nRow-1,"ITM_NO"))+1;
        					this.dsRfqReqFile.setColumn(nRow,"ITM_NO", nItemNo);
        				}
        				this.dsRfqReqFile.setColumn(nRow,"RFQ_REQ_NO",this.dsRfq.getColumn(0,"RFQ_REQ_NO"));
        				this.dsRfqReqFile.setColumn(nRow,"BRANCH_CD",this.dsRfq.getColumn(0,"BRANCH_CD"));
        				this.dsRfqReqFile.setColumn(nRow,"RFQ_ODR",this.dsRfq.getColumn(0,"RFQ_ODR"));
        				this.dsRfqReqFile.setColumn(nRow,"CD_FILE_TYPE","CM32ALL");
        				this.dsRfqReqFile.setColumn(nRow,"ALT_MDT","N");
        				this.dsRfqReqFile.setColumn(nRow,"REQ_FILE_NM","견적첨부파일");
        				this.dsRfqReqFile.setColumn(nRow,"RMARK","견적 제출시 필요한 파일을 첨부하세요.");
        			}
        			
        			var sSvcID = "appSave";
        			var sController = "BRfq_Req.do";
        			var sInDatasets = "in_rfq=dsRfq:A in_rfqItem=dsRfqItem:A in_rfqItemAdd=dsRfqItemAdd:U in_rfqPtnr=dsRfqPtnr:A in_rfqItemPtnrQuote=dsRfqItemPtnrQuote:U in_rfqReqFile=dsRfqReqFile:U in_refFile=dsRefFile:A";
        			var sOutDatasets = "dsRfq=in_rfq";
        			var sCallbackFunc = "fnTrCallBack";
        			
        			gfnFileSaveTran(sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);		
        					
        			//this.fnSearch(this.dsRfq.getColumn(0,"RFQ_REQ_NO"),this.dsRfq.getColumn(0,"RFQ_ODR"),this.dsRfq.getColumn(0,"BRANCH_CD"));
        			}
        			else if(sPopupId == "commSpecFilePop") { //시방서 팝업
        			this.dsReturn.loadXML(rtn);			
        			
        			this.dsRfqItem.set_enableevent(false);
        			
        			if(gfnIsNull(this.dsReturn.getColumn(0, "REF_KEY_2")))
        			{
        				this.dsRfqItem.setColumn(this.dsRfqItem.rowposition, "SPEC_FILE_NO", "");
        			}
        			else
        			{
        				this.dsRfqItem.setColumn(this.dsRfqItem.rowposition, "SPEC_FILE_NO", this.dsReturn.getColumn(0, "REF_KEY_2"));
        			}
        			this.dsRfqItem.set_enableevent(true);
        		//계약참조	
        		}else if(sPopupId == "PopupCntrRef"){
        			this.dsRfqItem.set_enableevent(false);
        			for(var i=0;i<this.dsReturn.rowcount;i++){
        				
        				var nRow = this.dsRfqItem.addRow();
        				//Default값을 설정
        				var nItemNo = 1;
        				if(nRow==0){
        					this.dsRfqItem.setColumn(nRow,"ITM_NO",nItemNo);
        				} else {
        					nItemNo = nexacro.toNumber(this.dsRfqItem.getColumn(nRow-1,"ITM_NO"))+1;
        					this.dsRfqItem.setColumn(nRow,"ITM_NO", nItemNo);
        				}
        								
        				this.dsRfqItem.setColumn(nRow,"BRANCH_CD",this.dsRfq.getColumn(0,"BRANCH_CD"));
        			//	this.dsRfqItem.setColumn(nRow,"PR_ITEM_ID",this.dsReturn.getColumn(i,"PR_ITEM_ID"));
        				this.dsRfqItem.setColumn(nRow,"MTRL_GRP_ID",this.dsReturn.getColumn(i,"MTRL_GRP_ID"));
        				this.dsRfqItem.setColumn(nRow,"MTRL_GRP_NM",this.dsReturn.getColumn(i,"MTRL_GRP_NM"));
        				this.dsRfqItem.setColumn(nRow,"MTRL_CD",this.dsReturn.getColumn(i,"MTRL_CD"));
        				this.dsRfqItem.setColumn(nRow,"MTRL_NM",this.dsReturn.getColumn(i,"MTRL_NM"));
        				this.dsRfqItem.setColumn(nRow,"QTY",this.dsReturn.getColumn(i,"QTY"));
        				//this.dsRfqItem.setColumn(nRow,"GOALUNT_PRICE",this.dsReturn.getColumn(i,"UNT_PRICE"));
        				this.dsRfqItem.setColumn(nRow,"GOALUNT_PRICE","0");
        				this.dsRfqItem.setColumn(nRow,"GOALUNT_AMT",this.dsReturn.getColumn(i,"AMT"));
        				this.dsRfqItem.setColumn(nRow,"CD_UNIT",this.dsReturn.getColumn(i,"CD_UNIT"));
        				this.dsRfqItem.setColumn(nRow,"DLV_REQ_DAY",this.dsReturn.getColumn(i,"DLV_REQ_DAY"));
        				this.dsRfqItem.setColumn(nRow,"STR_CD",this.dsReturn.getColumn(i,"STR_CD"));
        				this.dsRfqItem.setColumn(nRow,"SL_NM",this.dsReturn.getColumn(i,"SL_NM"));
        				this.dsRfqItem.setColumn(nRow,"RMARK",this.dsReturn.getColumn(i,"RMARK"));
        				this.dsRfqItem.setColumn(nRow,"TKEY",this.dsReturn.getColumn(i,"TKEY"));
        				this.dsRfqItem.setColumn(nRow,"SPEC_FILE_NO","");
        				this.dsRfqItem.setColumn(nRow,"RFQ_ODR",this.dsRfq.getColumn(0,"RFQ_ODR"));
        								
        				//창고
        				this.div41.Tab02.tabp01.edtCdFctry.set_readonly(true);
        				this.div41.Tab02.tabp01.edtCdFctryNm.set_readonly(true);
        				this.div41.Tab02.tabp01.btnCdFctry.set_visible(false);
        				//품목
        				this.div41.Tab02.tabp01.edtMtrlCd.set_readonly(true);
        				this.div41.Tab02.tabp01.edtMtrlNm.set_readonly(true);
        				this.div41.Tab02.tabp01.btnMtrlCd.set_visible(false);
        				
        				//단위
        				this.div41.Tab02.tabp01.cdCdUnit.set_readonly(true);
        			}
        			
        			this.dsRfqItem.set_enableevent(true);
        			
        			//구매예상가 합계
        			this.setAuotGoalSum();
        			
        		} else if(sPopupId == "PPURB600P00"){
        			application.gdsCommCd.filter("CD_ID =='"+this.dsRfq.getColumn(0,"CD_DOC_CTGR")+"'");
        			var tmp = application.gdsCommCd.getColumn(0,"APPND_SET_NUM_1");
        		
        			for(var i = 0 ; i < this.dsReturn.rowcount ; i++){
        				if(this.dsReturn.getColumn(i,"LRG_CLS_ID") == tmp){
        					var nRow = this.dsRfqItem.addRow();
        					//Default값을 설정
        					var nItemNo = 1;
        					if(nRow==0){
        						this.dsRfqItem.setColumn(nRow,"ITM_NO",nItemNo);
        					} else {
        						nItemNo = nexacro.toNumber(this.dsRfqItem.getColumn(nRow-1,"ITM_NO"))+1;
        						this.dsRfqItem.setColumn(nRow,"ITM_NO", nItemNo);
        					}
        					this.dsRfqItem.setColumn(nRow,"MTRL_CD",this.dsReturn.getColumn(i,"MTRL_CD"));
        					this.dsRfqItem.setColumn(nRow,"MTRL_NM",this.dsReturn.getColumn(i,"MTRL_NM"));
        					this.dsRfqItem.setColumn(nRow,"CD_UNIT",this.dsReturn.getColumn(i,"CD_PACK_UNIT"));
        					this.dsRfqItem.setColumn(nRow,"GOALUNT_PRICE",this.dsReturn.getColumn(i,"CNTR_PRICE"));
        					this.dsRfqItem.setColumn(nRow,"STR_CD",application.gdsUserInfo.getColumn(0,"STR_CD"));
        					this.dsRfqItem.setColumn(nRow,"SL_NM",application.gdsUserInfo.getColumn(0,"SL_NM"));
        					this.dsRfqItem.setColumn(nRow,"DLV_REQ_DAY",gfnToday());
        					this.dsRfqItem.setColumn(nRow,"RFQ_REQ_NO",this.dsRfq.getColumn(0,"RFQ_REQ_NO"));
        					this.dsRfqItem.setColumn(nRow,"BRANCH_CD",this.dsRfq.getColumn(0,"BRANCH_CD"));
        					this.dsRfqItem.setColumn(nRow,"RFQ_ODR",this.dsRfq.getColumn(0,"RFQ_ODR"));
        					this.dsRfqItem.setColumn(nRow,"SPEC_FILE_NO","");
        				}
        			}
        		}
        		
        	}	
        }

        /**
        	@function	div21RMARKTabp01BtnGoalamtOnclick()
        	@desc   	(품목헤더) 구매예상가 계산 버튼 클릭 이벤트
        */  
        this.div21RMARKTabp01BtnGoalamtOnclick = function(obj,e)
        {
        	var sum = 0;
        	for(var i = 0 ; i < this.dsRfqItem.rowcount ; i++){
        		sum += nexacro.toNumber(this.dsRfqItem.getColumn(i,"QTY"))*nexacro.toNumber(this.dsRfqItem.getColumn(i,"GOALUNT_PRICE"));
        	}
        	
        	this.dsRfq.setColumn(0,"GOALAMT",sum);
        }

        /**
        	@function	div4CboItemChgOnitemchanged()
        	@desc   	(품목상세) 자재선택 콤보 박스 이벤트
        */  
        this.div4CboItemChgOnitemchanged = function(obj,e)
        {
        	this.dsRfqItem.set_rowposition(this.dsRfqItem.findRow("ITM_NO",obj.value));
        }

        /**
        	@function	div4BtnItemRowUpOnclick()
        	@desc   	(품목상세) 자재선택 콤보 박스 이벤트
        */  
        this.div4BtnItemRowUpOnclick = function(obj,e)
        {
        	if(this.dsRfqItem.rowposition==0) return;
        	this.dsRfqItem.set_rowposition(this.dsRfqItem.rowposition-1);
        }

        /**
        	@function	div4BtnItemRowDownOnclick()
        	@desc   	(품목상세) 자재를 아래로 이동하여 편집
        */  
        this.div4BtnItemRowDownOnclick = function(obj,e)
        {
        	if(this.dsRfqItem.rowposition==this.dsRfqItem.rowcount-1) return;
        	this.dsRfqItem.set_rowposition(this.dsRfqItem.rowposition+1);
        }

        /**
        	@function	div2BtnRfqTypeSelectOnclick()
        	@desc   	(품목헤더)견적유형선택
        */  
        this.div2BtnRfqTypeSelectOnclick = function(obj,e)
        {
        	var sArg = { agv_id:""
        			   , agv_nm:"" };
        	if(this.dsRfq.getColumn(0,"CD_DOC_CTGR") != "CM109"){
        		gfnModalPop(this, "PopupDocType", "RFXB::PRFXB100P00_01.xfdl", sArg, "fnPopCallBack");
        	}else{
        		gfnModalPop(this, "PopupDocType", "RFXB::PRFXB100P00_02.xfdl", sArg, "fnPopCallBack");
        	}		   
        }

        /**
        	@function	div5BtnRfqExplnMailSendOnclick()
        	@desc   	(대상업체)제안설명회 메일발송
        */  
        this.div5BtnRfqExplnMailSendOnclick = function(obj,e)
        {
        	if(this.dsRfqPtnr.getRowCount()<1){
        		gfnAlert("발송할 대상업체를 추가해주세요");
        		return;
        	}

        
        	//제안설명회 시간형식 체크
        	if(this.explnTimeCheck()){
        		if(!gfnConfirm("메일발송 하시겠습니까?")) return;
        		
        		this.mailChk = true;
        		this.fnSave();
        		
        		
        	}
        }

        /**
        	@function	explnTimeCheck()
        	@desc    	제안설명회 날짜 체크
        */  
        this.explnTimeCheck = function(){

        	for(var i=0;i<this.dsRfqPtnr.rowcount;i++){
        		if(this.dsRfqPtnr.getColumn(i,"RFQ_EXPLN_TIME") == undefined || this.dsRfqPtnr.getColumn(i,"RFQ_EXPLN_TIME").length == 0) {
        			this.dsRfqPtnr.setColumn(i,"RFQ_EXPLN_TIME","0000")
        		}
        		
        		var time = nexacro.toNumber(this.dsRfqPtnr.getColumn(i,"RFQ_EXPLN_TIME"));
         		if(time < 10){
        			time = time + "" + "000";
        			this.dsRfqPtnr.setColumn(i,"RFQ_EXPLN_TIME",time);
         		}else if(time < 100){
         			time = time + "" + "00";
         			this.dsRfqPtnr.setColumn(i,"RFQ_EXPLN_TIME",time);
         		}else if(time < 1000){
        			time = time + "" + "0";
         			this.dsRfqPtnr.setColumn(i,"RFQ_EXPLN_TIME",time);
         		}
        		if(nexacro.toNumber(this.dsRfqPtnr.getColumn(i,"RFQ_EXPLN_TIME")) > 2359){
        			gfnAlert("제안설명회 시간 형식이 잘못됬습니다.");
        			return false;
        		}
        		
        		//제안설명회 오늘 이전날짜는 넣을 수 없음
        		if(this.dsRfqPtnr.getColumn(i,"RFQ_EXPLN_DAY") != "" && this.dsRfqPtnr.getColumn(i,"RFQ_EXPLN_DAY") != "undefined"){
        			var objDate = new Date();
        			var checkTime = objDate.getHours() + "" +objDate.getMinutes();
        			var explnTime = this.dsRfqPtnr.getColumn(i,"RFQ_EXPLN_TIME");
        			
        			if(this.dsRfqPtnr.getColumn(i,"RFQ_EXPLN_DAY") < gfnToday()){
        				gfnAlert("제안설명회 일자는 오늘 이후여야 합니다.");
        				return false;
        			}else if(this.dsRfqPtnr.getColumn(i,"RFQ_EXPLN_DAY") == gfnToday() && nexacro.toNumber(explnTime) < nexacro.toNumber(checkTime)){
        				gfnAlert("제안설명회 시간은 현재시간 이후여야 합니다.");
        				return false;
        			}
        		}
        	}
        	return true;
        }

        /**
        	@function	div21Tab01Onchanged()
        	@desc   	(FILE_COMP_JOB_7)파일 첨부 컴포넌트 초기화 & 조회
        */  
        this.div21Tab01Onchanged = function(obj,e)
        {
        	//FILE_COMP_JOB_7 : 파일 첨부 컴포넌트 초기화 & 조회
        	this.fnGetCompFileList1();
        }

        /**
        	@function	div41Tab02Onchanged()
        	@desc   	(FILE_COMP_JOB_7)파일 첨부 컴포넌트 초기화 & 조회
        */ 
        this.div41Tab02Onchanged = function(obj,e)
        {
        	
        	this.fnGetCompFileList2();
        }

        /**
        	@function	fnFoldOnclick()
        	@desc   	(공통버튼)폴더접기  
        */  
        this.fnFoldOnclick = function(obj,e)
        {
        	gfnDivFold(obj);
        }

        /**
        	@function	div41Tab02Tabpage6BtnMtrlNmEqualOnclick()
        	@desc   	검색키워드 세팅
        */  
        this.div41Tab02Tabpage6BtnMtrlNmEqualOnclick = function(obj,e)
        {
        	var row = this.dsRfqItem.rowposition;
        	var itmNm = this.dsRfqItem.getColumn(row,"MTRL_NM");
        	this.dsRfqItem.setColumn(row,"SRCH_KEY",itmNm);
        }

        /**
        	@function	div41Tab02Tabpage6BtnMtrlNmInitOnclick()
        	@desc   	검색키워드 초기화
        */  
        this.div41Tab02Tabpage6BtnMtrlNmInitOnclick = function(obj,e)
        {
        	var row = this.dsRfqItem.rowposition;
        	this.dsRfqItem.setColumn(row,"SRCH_KEY","");
        }

        /**
        	@function	popupDiv01CldDlvDayBatOnchanged()
        	@desc   	납품일자 일괄설정
        */  
        this.popupDiv01CldDlvDayBatOnchanged = function(obj,e)
        {
        	this.dsRfqItem.set_enableevent(false);
        	for(var i=0; i<this.dsRfqItem.rowcount; i++){
        		this.dsRfqItem.setColumn(i, "DLV_REQ_DAY", obj.value);
        	}
        	this.dsRfqItem.set_enableevent(true);
        	this.fnGetCompFileList2();	

        	//this.PopupDiv01.set_visible(false);
        }

        /**
        	@function	setAuotGoalSum()
        	@desc   	자동합계(목표금액)
        */  
        this.setAuotGoalSum = function (){
        	for(var i=0; i<this.dsRfqItem.rowcount; i++){
        		var nQty = nexacro.toNumber(this.dsRfqItem.getColumn(i,"QTY"));
        		var nPrice = nexacro.toNumber(this.dsRfqItem.getColumn(i,"GOALUNT_PRICE"));
        		var nAmt = nQty * nPrice;
        		this.dsRfqItem.setColumn(i,"GOALAMT", nAmt);
        	}
        	this.dsRfq.setColumn(0,"GOALAMT",this.dsRfqItem.getSum("GOALAMT"));
        }

        /**
        	@function	div3BtnDlvBatSetOnclick()
        	@desc   	납품일자 일괄설정 화면 호출
        */  
        this.div3BtnDlvBatSetOnclick = function(obj,e)
        {
        	//this.PopupDiv00.trackPopupByComponent(obj,0,23);	
        	//this.PopupDiv00.trackPopupByComponent(this.div3.btnDlvBatSet, 0,23);	
        	this.PopupDiv01.trackPopupByComponent(obj,0,23);	
        	this.PopupDiv01.cldDlvDayBat.set_value("");

        // 	if(this.PopupDiv01.visible){
        // 		this.PopupDiv01.set_visible(false);
        // 	}else{
        // 		this.PopupDiv01.set_visible(true);
        // 	}
        }

        /**
        	@function	div31GrdRfqItemOncellclick()
        	@desc   	시방서 팝업 호출
        */  
        this.div31GrdRfqItemOncellclick = function(obj,e)
        {

        	if(this.dsRfqItem.rowcount==0) return;
        	
        	var bindCol = obj.getCellProperty("Body",e.cell,"text").split("bind:").join("");
        	if(this.dsRfqItem.getColumn(e.row,"ALT_RMARK")=="Y" && bindCol=="ALT_RMARK_NM") {
        		this.div41.Tab02.set_tabindex(3);

        	}else if(gfnGrdBindColType(obj, e.cell)=="button"){ //시방서ID
        		if(gfnIsNull(this.dsRfqItem.getColumn(e.row, "RFQ_REQ_ITEM_ID")))
        		{
        			gfnAlert("저장 후 시방서를 첨부하세요.");
        			return;
        		}
              	
        		var sArg = { agv_tbNm		 : "MM_MTRL_SFILE"
        					, agv_branchCd	 : application.gdsUserInfo.getColumn(0, "BRANCH_CD")					
        					, agv_refTblNm	 : "MM_RFQ_ITEM_ADD"
        					, agv_refKeyNm	 : "RFQ_REQ_ITEM_ID"
        					, agv_ds		 : this.dsSpecFile
        					, agv_mode		 : this.div31.grdRfqItem.formatid
        					, agv_keyArray   : [this.dsRfqItem.getColumn(this.dsRfqItem.rowposition, "MTRL_CD")
        										, this.dsRfqItem.getColumn(this.dsRfqItem.rowposition, "SPEC_FILE_NO")
        										, this.dsRfqItem.getColumn(this.dsRfqItem.rowposition, "RFQ_REQ_ITEM_ID")]
        					};
        		gfnModalPop(this, "commSpecFilePop", "commPop::PPOPC2300P00.xfdl", sArg, "fnPopCallBack");
        	}
        }

        /**
        	@function	div31GrdRfqItemOncelldblclick()
        	@desc   	품목코드 상세 팝업 호출
        */  
        this.div31GrdRfqItemOncelldblclick = function(obj,e)
        {
        	if(this.dsRfqItem.rowcount==0) return;
        	
        	if(this.div31.grdRfqItem.formatid == "MMODE"){
        		if(gfnGrdBindColName(obj, e.cell)=="MTRL_CD") {	
        			var temp = this.dsRfqItem.getColumn(e.row,"MTRL_CD");		
        			if(temp!="" && temp!=undefined){		
        				var sArg = { mtrl_cd:this.dsRfqItem.getColumn(e.row,"MTRL_CD")
        							};
        				gfnModalPop(this, "PopupComMtrlView", "commPop::PPOPC700P01.xfdl", sArg, "fnPopCallBack");
        			}	
        		}else if(gfnGrdBindColName(obj, e.cell)=="MTR_NM") {
        			var sArg = {
        						 agv_nm:this.dsRfqItem.getColumn(e.row,"MTRL_NM")
        						};
        			//gfnModalPop(this, "PopupComMtrlSrch", "commPop::PPOPC700P02.xfdl", sArg, "fnPopCallBack");
        			gfnCPop_ComMtrlSrch(sArg,"fnPopCallBack","PopupComMtrlSrch");
        			
        		}else if(gfnGrdBindColName(obj, e.cell)=="SL_NM") {
        			var sArg = {
        						agv_nm:this.dsRfqItem.getColumn(e.row,"SL_NM")			        
        					   };
        			gfnCPopComStorageSrch(sArg, "fnPopCallBack", "PPOPC1700P00");		
        		}else if(gfnGrdBindColName(obj, e.cell)=="REQR_NM") {
        			var user_id = this.dsRfqItem.getColumn(e.row,"REQR_ID");
        			if(user_id!="" && user_id!=undefined){
        				var sArg = { branch_cd:this.dsRfq.getColumn(0,"BRANCH_CD")
        							,user_id:user_id};
        				gfnModalPop(this, "PopupUserInfo", "commPop::PPOPC000P05.xfdl", sArg, "fnPopCallBack");
        			}			
        		}else if("PR_NO" == gfnGrdBindColName(obj, e.cell)){ //구매요청번호
        			var sArg = { agv_prNo:this.dsRfqItem.getColumn(e.row,"PR_NO")};
        			gfnModalPop(this, "PopupComCorpRead", "PURB::PPURB100P06.xfdl", sArg, "");
        			
        		}
        		
        	} else if(this.div31.grdRfqItem.formatid == "VMODE"){
        		if("MTRL_CD" == gfnGrdBindColName(obj, obj.getCellPos())) //품목
        		{	
        			var sArg = {
        						mtrl_cd:this.dsRfqItem.getColumn(e.row, "MTRL_CD")
        						};
        			gfnModalPop(this, "PopupComMtrlView", "commPop::PPOPC700P01.xfdl", sArg, "fnPopCallBack");
        		} else if("MTRL_NM" == gfnGrdBindColName(obj, obj.getCellPos())) //품목
        		{	
        			var sArg = {
        						mtrl_cd:this.dsRfqItem.getColumn(e.row, "MTRL_CD")
        						};
        			gfnModalPop(this, "PopupComMtrlView", "commPop::PPOPC700P01.xfdl", sArg, "fnPopCallBack");
        		} else if(gfnGrdBindColName(obj, e.cell)=="SL_NM"){ //창고
        			var sArg = {strCd:this.dsRfqItem.getColumn(e.row,"STR_CD")
        						,branchCd:application.gdsUserInfo.getColumn(0,"BRANCH_CD")};
        			gfnModalPop(this, "PPOPC400P00", "commPop::PPOPC400P00.xfdl", sArg);
        		} else if("PR_NO" == gfnGrdBindColName(obj, e.cell)){ //구매요청번호
        			var sArg = { agv_prNo:this.dsRfqItem.getColumn(e.row,"PR_NO")};
        			gfnModalPop(this, "PopupComCorpRead", "PURB::PPURB100P06.xfdl", sArg, "");
        		} else if(gfnGrdBindColName(obj, e.cell)=="REQR_NM")	//요청자
        		{
        			var sArg = {	 branch_cd : application.gdsUserInfo.getColumn(0, "BRANCH_CD")
        							,  user_id : this.dsRfqItem.getColumn(e.row, "REQR_ID")
        						};
        			gfnModalPop(this, "PopupUserInfo", "commPop::PPOPC000P05.xfdl", sArg, "fnPopCallBack");
        		}
        	}
        }

        /**
        	@function	div51GrdRfqPtnrOncellclick()
        	@desc   	대표자 상세정보 팝업호출
        */  
        this.div51GrdRfqPtnrOncellclick = function(obj,e)
        {
        	if(this.dsRfqPtnr.rowcount==0) return;
        	
        	if(this.dsRprstv.rowcount == 0) {
        		this.dsRprstv.addRow();
        	}
        	
        	var bindCol = obj.getCellProperty("Body",e.cell,"text").split("bind:").join("");
        // 	if(bindCol=="RPRSTV_NM") {
        //   		this.dsRprstv.setColumn(0,"RPRSTV_HP",this.dsRfqPtnr.getColumn(e.row,"RPRSTV_HP"));
        //   		this.dsRprstv.setColumn(0,"RPRSTV_EMAIL",this.dsRfqPtnr.getColumn(e.row,"RPRSTV_EMAIL"));
        //   		this.div51.PopupDiv00.trackPopup(500,550);  	
          	if(bindCol =="삭제"){
        	  this.dsRfqPtnr.deleteRow(e.row);
        	}
        	
        }

        /**
        	@var  _row
        	@desc 전역변수 견적품목 아이템의 로우 포지션을 가지고 있다.
        */
        this._row;

        
         /**
        	@function	fnPopCallBack_imsi()
        	@desc   	팝업 콜백함수 (div31GrdRfqItemOnkeydown)
        */  
        this.fnPopCallBack_imsi = function(sPopupId,rtn)
        {
        	if(gfnIsNull(rtn)) return;
        	if(rtn.indexOf("<Dataset id=") == 0){
        		//callback을 받기위한 빈 DataSet을 미리 생성해 놓아야한다.
        		this.dsReturn.loadXML(rtn);
        		
        		if(sPopupId == "PopupCtrlMtrlView"){
        			//문서유형 팝업 호출하는 경우는 신규작성이기 떄문에 Default Value 를 적용한다.

        			for(var i=0;i<this.dsReturn.rowcount;i++){
        			//trace(this.dsRfqItem.rowcount);
        				if(this._row+i==this.dsRfqItem.rowcount){	
        					var nRow = this.dsRfqItem.addRow();
        				}else {
        					var nRow = i+this._row;
        				}
        				//Default값을 설정
        				var nItemNo = 1;
        				if(nRow==0){
        					this.dsRfqItem.setColumn(nRow,"ITM_NO",nItemNo);
        				} else {
        					nItemNo = nexacro.toNumber(this.dsRfqItem.getColumn(nRow-1,"ITM_NO"))+1;
        					this.dsRfqItem.setColumn(nRow,"ITM_NO", nItemNo);
        				}
        				
        				this.dsRfqItem.setColumn(nRow,"BRANCH_CD",application.gdsUserInfo.getColumn(0,"BRANCH_CD"));
        				this.dsRfqItem.setColumn(nRow,"MTRL_CD",this.dsReturn.getColumn(i,"MTRL_CD"));
        				this.dsRfqItem.setColumn(nRow,"MTRL_NM",this.dsReturn.getColumn(i,"MTRL_NM"));
        				this.dsRfqItem.setColumn(nRow,"GOALUNT_PRICE",this.dsReturn.getColumn(i,"GOALUNT_PRICE"));
        				this.dsRfqItem.setColumn(nRow,"CD_UNIT",this.dsReturn.getColumn(i,"CD_UNIT"));
        			}
        		}
        	}
        }

        /**
        	@function	div3BtnPopExcelUpOnclick()
        	@desc   	(품목)재료비 엑셀업로드
        */  
        this.div3BtnPopExcelUpOnclick = function(obj,e)
        {
        	//gfnExcelUpPop(this.Tab00.tabpage1.div41.tab_rfqPtnrQuoteDtl.tabpage1.grd_mtrlPay);
        	
        // 		if(fv_prReqRfqYn != "" && fv_prReqRfqYn == "Y"){		
        // 		   gfnAlert("구매요청접수 및 입찰에서 작성된 문서는 엑셀 업로드를 사용 할 없슶니다.");
        // 		}else{
        // 			gfnExcelUpPop(this.div31.grdRfqItem);
        // 		}
        	if(gfnIsNull(this.dsRfqItem.getMax("PR_ITEM_ID")) == false){
        		alert("구매요청이 참조되어 추가할 수 없습니다.");
        		return false;
        	}else{
        		gfnExcelUpPop(this.div31.grdRfqItem);
        	}
        }

        /**
        	@function	div31GrdRfqItemOnkeyup()
        	@desc   	품목별 총금액 계산
        */  
        this.div31GrdRfqItemOnkeyup = function(obj,e)
        {	

        	var totAmt=0;
        	//obj.updateToDataset();
        	
        	for(var i=0; i<this.dsRfqItem.rowcount; i++){
        		var qtyIndex = obj.getBindCellIndex("body", "QTY");
        		var qtyRtn = obj.getCellValue(i, qtyIndex);
        		
        		var poPriceIndex = obj.getBindCellIndex("body", "GOALUNT_PRICE");
        		var poPriceRtn = obj.getCellValue(i, poPriceIndex);
        		
        		if(gfnIsNull(qtyRtn)) qtyRtn = 0;	
        		if(gfnIsNull(poPriceRtn)) poPriceRtn = 0;
        		
        		this.dsRfqItem.setColumn(i, "GOALAMT", (qtyRtn * poPriceRtn)); //품목별 총금액		
        		
        		totAmt = totAmt + (qtyRtn * poPriceRtn) ;		
        	}
        	
        	this.dsRfq.setColumn(0, "GOALAMT", totAmt);	//헤더 총금액

        	
        	
        }

        /**
        	@function	div1BtnRfqReqPopOnclick()
        	@desc   	
        */  
        this.div1BtnRfqReqPopOnclick = function(obj,e)
        {
        	var sArg = { agv_id:""
        			   , cd_doc_ctgr : this.dsRfq.getColumn(0,"CD_DOC_CTGR")
        			   };
        	gfnModalPop(this, "PopupDocType", "RFXB::PRFXB100P01.xfdl", sArg, "fnPopCallBack");
        }

        /**
        	@function	div1BtnRfqAppReqOnclick()
        	@desc   	
        */  
        this.div1BtnRfqAppReqOnclick = function(obj,e)
        {	
        	if(null == this.dsRfq.getColumn(0,"RFQ_REQ_NO") || "" == this.dsRfq.getColumn(0,"RFQ_REQ_NO") || "undefined" == this.dsRfq.getColumn(0,"RFQ_REQ_NO")){
        		alert("저장 후 결재요청을 할 수 있습니다.");
        		return;
        	}
        	/*this.dsRfq.setColumn(0,"CD_RFQ_STTS", "ET10APP");*/
        	var app_rfq        		= this.dsRfq.saveXML();       
        	var app_rfqItem        	= this.dsRfqItem.saveXML();       
        	var app_rfqPtnr     	= this.dsRfqPtnr.saveXML();    
        	var app_rfqPtnrQuote    = this.dsRfqPtnrQuote.saveXML();     
        	var app_rprstv  		= this.dsRprstv.saveXML(); 
        // 	var app_rfqFile      	= this.dsRefFile.saveXML();     
        // 	var app_rfqReqFile     	= this.dsRfqReqFile.saveXML();  

        	var app_doc = 	app_rfq+"▩"+      
        					app_rfqItem+"▩"+      
        					app_rfqPtnr+"▩"+   
        					app_rfqPtnrQuote+"▩"+    
        // 					app_rfqFile+"▩"+
        // 					app_rfqReqFile+"▩"+    
        					app_rprstv;   
        		
        	var sArg = { 
        				agv_doc_id: this.dsRfq.getColumn(0,"APP_DOC_ID")
        				,agv_ttl: "[견적요청] "+this.dsRfq.getColumn(0,"TTL")
        				,agv_ptnr_id: this.dsRfq.getColumn(0,"RFQ_REQ_NO")
        				//,agv_rfq_odr: this.dsRfq.getColumn(0,"RFQ_ODR")
        				,agv_app_doc: app_doc
        				,agv_aprv_doc_ctgr:"AP11RFQ"
        				};
        	gfnModalPop(this, "PopupAppReq", "APPB::PAPPB100P01.xfdl",sArg, "fnPopCallBack");
        					
        	
        	
        }

        /**
        	@function	div31GrdRfqItemOnkeyup()
        	@desc   	품목별 총금액 계산
        */  
        this.div41Tab02Tabp01BtnCdFctryOnclick = function(obj,e)
        {
        	if(this.dsRfqItem.rowcount==0) return;	
        	var sArg = { 
        			     agv_nm:this.div41.Tab02.tabp01.edtCdFctryNm.value
        			   };
        	
        	gfnCPopComStorageSrch(sArg, "fnPopCallBack", "PPOPC1700P00");
        }

        /**
        	@function	div3BtnCtnrAddOnclick()
        	@desc   	계약 참조
        */  
        this.div3BtnCtnrAddOnclick = function(obj,e)
        {
        	if(gfnIsNull(this.dsRfqItem.getMax("PR_ITEM_ID")) == false){
        		alert("구매요청이 참조되어 추가할 수 없습니다.");
        		return false;
        	}
        	
        	var sArg = { agv_id:""
        			   , cd_doc_ctgr : this.dsRfq.getColumn(0,"CD_DOC_CTGR")
        			   };
        	gfnModalPop(this, "PopupCntrRef", "CTRB::PCTRB100P03.xfdl", sArg, "fnPopCallBack");
        	
        	
        // 	if(fv_prReqRfqYn != "" && fv_prReqRfqYn == "Y"){		
        // 		   gfnAlert("구매요청접수 및 입찰에서 작성된 문서에서는 사용 할 없습니다.");
        // 	}else{
        // 			
        // 		}
        }

        /**
        	@function	div31GrdRfqItemOnkeyup()
        	@desc   	품목별 총금액 계산
        */  
        this.div21Tab01Tabp01RdAltSvcDtlBidOnitemchanged = function(obj,e)
        {
        	if(this.dsRfq.getColumn(0,"CD_DOC_CTGR") != "CM109"){	  
        		if(obj.value == "N"){
        			gfnAlert("구매유형이 공사가 아닐경우 상세견적을 작성할 수 없습니다.");
        			this.dsRfq.setColumn(0,"ALT_SVC_DTL_BID", "Y");
        		//	this.dsRfq.setColumn(0,"CD_RFQ_SBMT_MTHD", "Y");
        		}	
        	}
        }

        /**
        	@function	div31GrdRfqItemOnkeydown()
        	@desc   	품목 그리드 엔터 이벤트
        */  
        this.div31GrdRfqItemOnkeydown = function(obj,e)
        {
        					
        		if(e.keycode == "13"){		
        			obj.updateToDataset();
        			if("MTRL_NM" == gfnGrdBindColName(obj, obj.getCellPos())){
        				this.div31GrdRfqItemOnexpandup(obj,e);
        			}else if("SL_NM" == gfnGrdBindColName(obj, obj.getCellPos())){
        				this.div31GrdRfqItemOnexpandup(obj,e);
        			}
        	}		
        	
        }

        /**
        	@function	div31GrdRfqItemOntextchanged()
        	@desc   	품목 그리드 키 이벤트
        */  
        this.div31GrdRfqItemOntextchanged = function(obj,e)
        {
        	//  자재검색
        	if("MTRL_NM" == gfnGrdBindColName(obj,obj.getCellPos()) && this.dsRfqItem.getColumn(e.row,"MTRL_CD") != "" && this.dsRfqItem.getColumn(e.row,"MTRL_CD") != null){
        		gfnInitKey(this.dsRfqItem,e,"MTRL_CD","CD_UNIT","CD_UNIT_NM","MTRL_GRP_ID","MTRL_GRP_NM");
        	// 창고
        	}else if("SL_NM" == gfnGrdBindColName(obj,obj.getCellPos()) && this.dsRfqItem.getColumn(e.row,"STR_CD") != "" && this.dsRfqItem.getColumn(e.row,"STR_CD") != null){
        		gfnInitKey(this.dsRfqItem,e,"SL_NM","STR_CD");
        	}
        }

        
        /**
        	@function	div41Tab02Tabp01EdtMtrlNmOntextchanged()
        	@desc   	품목상세 키 이벤트
        */  
        this.div41Tab02Tabp01EdtMtrlNmOntextchanged = function(obj,e)
        {
        	// 자재검색
        	if(obj.name == "edtMtrlNm" ){
        		gfnInitKey(this.dsRfqItem,e,"MTRL_CD","CD_UNIT","CD_UNIT_NM","MTRL_GRP_ID","MTRL_GRP_NM");
        	// 창고
        	}else if(obj.name == "edtCdFctryNm" ){
        		gfnInitKey(this.dsRfqItem,e,"STR_CD");
        	}
        	
        }

        /**
        	@function	Div41_Tab01_tabp01_ed_MatNm_onkeydown()
        	@desc   	품목 상세 검색 이벤트
        */  
        this.div41Tab01Tabp01Onkeydown = function(obj,e)
        {
        	if(e.keycode == "13"){	
        		if(obj.name == "edtMtrlNm" ){
        			this.div41_Tab01_tabp01_btnMtrlCd_onclick();	
        		}else if(obj.name == "edtCdFctryNm" ){
        			this.div41_Tab02_tabp01_btnCdFctry_onclick();
        		}
        		
        	}	
        }

        /**
        	@function	div41Tab02Tabp01EdtMtrlNmOntextchanged()
        	@desc   	품목상세 키 이벤트
        */  
        this.div21Tab01Tabpage6EdtChrgrNmOntextchanged = function(obj,e)
        {
        	// 담당자
        	if(obj.name == "edtChrgrNm" ){
        		gfnInitKey(this.dsRfq,e,"CHRGR_ID","TEL","EMAIL","FAX");
        	}
        }

        this.div21Tab01Tabpage6EdtChrgrNmOnkeydown = function(obj,e)
        {
        	if(e.keycode == "13"){	
        		if(obj.name == "edtChrgrNm" ){
        			this.div21RMARKTabpage6BtnChrgrOnclick();			
        		}
        		
        	}	
        }

        this.fnCtrlBtn = function()
        {
        	if(this.dsRfq.getColumn(0, "PR_ITEM_ID") == null || this.dsRfq.getColumn(0, "PR_ITEM_ID") == "" ){
        		//창고
        		this.div41.Tab02.tabp01.edtCdFctry.set_readonly(false);
        		this.div41.Tab02.tabp01.edtCdFctryNm.set_readonly(false);
        		this.div41.Tab02.tabp01.btnCdFctry.set_visible(true);
        		//품목
        		this.div41.Tab02.tabp01.edtMtrlCd.set_readonly(false);
        		this.div41.Tab02.tabp01.edtMtrlNm.set_readonly(false);
        		this.div41.Tab02.tabp01.btnMtrlCd.set_visible(true);
        		
        		//단위
        		this.div41.Tab02.tabp01.cdCdUnit.set_readonly(false);
        		 
        	}else{
        		//창고
        		this.div41.Tab02.tabp01.edtCdFctry.set_readonly(true);
        		this.div41.Tab02.tabp01.edtCdFctryNm.set_readonly(true);
        		this.div41.Tab02.tabp01.btnCdFctry.set_visible(false);
        		//품목
        		this.div41.Tab02.tabp01.edtMtrlCd.set_readonly(true);
        		this.div41.Tab02.tabp01.edtMtrlNm.set_readonly(true);
        		this.div41.Tab02.tabp01.btnMtrlCd.set_visible(false);
        		
        		//단위
        		this.div41.Tab02.tabp01.cdCdUnit.set_readonly(true);			
        	}

        }

        this.div51GrdRfqPtnrOncelldblclick = function(obj,e)
        {
        	if(gfnGrdBindColName(obj, e.cell)=="PTNR_NM")	//협력사명
        	{
        		var sArg = { agv_ptnrId:this.dsRfqPtnr.getColumn(e.row, "PTNR_ID")};
        		gfnModalPop(this, "PopupComCorpRead", "commPop::PPOPC500P04.xfdl", sArg, "fnPopCallBack");
        	} else if(gfnGrdBindColName(obj, e.cell)=="BIZ_NO")	//협력사명
        	{
        		var sArg = { agv_ptnrId:this.dsRfqPtnr.getColumn(e.row, "PTNR_ID")};
        		gfnModalPop(this, "PopupComCorpRead", "commPop::PPOPC500P04.xfdl", sArg, "fnPopCallBack");
        	}else if(gfnGrdBindColName(obj, e.cell)=="PTNR_ID")	//협력사명
        	{
        		var sArg = { agv_ptnrId:this.dsRfqPtnr.getColumn(e.row, "PTNR_ID")};
        		gfnModalPop(this, "PopupComCorpRead", "commPop::PPOPC500P04.xfdl", sArg, "fnPopCallBack");
        	}
        }

        this.div3BtnFavoOnclick = function(obj,e)
        {
        	var sArg = {
         				agv_id:"" 
         				,agv_nm:""
         				,agv_mode:"" 
        		   };
        	gfnModalPop(this, "PPURB600P00", "PURB::PPURB600P00.xfdl", sArg, "fnPopCallBack");
        }

        this.dsRfqItemCancolumnchange = function(obj,e)
        {
        	if(e.columnid == "GOALUNT_PRICE"){
        		if(e.newvalue == "") e.newvalue = 0;
        	}
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsRfqItem.addEventHandler("oncolumnchanged", this.dsRfqItemOncolumnchanged, this);
            this.dsRfqItem.addEventHandler("onrowposchanged", this.dsRfqItemOnrowposchanged, this);
            this.dsRfqItem.addEventHandler("cancolumnchange", this.dsRfqItemCancolumnchange, this);
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.div1.cboDocType.addEventHandler("onitemchanged", this.div1CboDocTypeOnitemchanged, this);
            this.div1.btnRfqReq.addEventHandler("onclick", this.div1BtnRfqReqOnclick, this);
            this.div2.btnOpHead.addEventHandler("onclick", this.fnFoldOnclick, this);
            this.div2.btnRfqTypeSelect.addEventHandler("onclick", this.div2BtnRfqTypeSelectOnclick, this);
            this.div21.Tab01.addEventHandler("onchanged", this.div21Tab01Onchanged, this);
            this.div21.Tab01.tabp01.edtTtl.addEventHandler("oneditclick", this.div21Tab01Tabp01EdTtlOneditclick, this);
            this.div21.Tab01.tabp01.btnGoalamt.addEventHandler("onclick", this.div21RMARKTabp01BtnGoalamtOnclick, this);
            this.div21.Tab01.tabp01.staCrtrNm.addEventHandler("onclick", this.div21Tab01Tabp01StaCrtrNmOnclick, this);
            this.div21.Tab01.tabp01.spnRfqCloseTime.addEventHandler("onspin", this.div21Tab01Tabp01SpnRfqCloseTimeOnspin, this);
            this.div21.Tab01.tabp01.cldRfqCloseDay.addEventHandler("oneditclick", this.div21Tab01Tabp01CalRfqCloseDayOneditclick, this);
            this.div21.Tab01.tabp01.edtRfqOdr.addEventHandler("oneditclick", this.div21RMARK_tabp01RfqOdrOneditclick, this);
            this.div21.Tab01.tabp01.cboCdOpenType.addEventHandler("onitemchanged", this.div21Tab01Tabp01CboRfqOpenOnitemchanged, this);
            this.div21.Tab01.tabp01.cboCdRfqCrnc.addEventHandler("onitemchanged", this.div21Tab01Tabp01CboCdRfqCrncOnitemchanged, this);
            this.div21.Tab01.tabp01.rdAltSvcDtlBid.addEventHandler("onitemchanged", this.div21Tab01Tabp01RdAltSvcDtlBidOnitemchanged, this);
            this.div21.Tab01.tabpage6.edtChrgrNm.addEventHandler("ontextchanged", this.div21Tab01Tabpage6EdtChrgrNmOntextchanged, this);
            this.div21.Tab01.tabpage6.edtChrgrNm.addEventHandler("onkeydown", this.div21Tab01Tabpage6EdtChrgrNmOnkeydown, this);
            this.div21.Tab01.tabpage6.btnChrgr.addEventHandler("onclick", this.div21RMARKTabpage6BtnChrgrOnclick, this);
            this.div3.btnOPItem.addEventHandler("onclick", this.fnFoldOnclick, this);
            this.div3.btnRfqItmDel.addEventHandler("onclick", this.div3BtnRfqItmDelOnclick, this);
            this.div3.btnRfqItmAdd.addEventHandler("onclick", this.div3BtnRfqItmAddOnclick, this);
            this.div3.btnDlvBatSet.addEventHandler("onclick", this.div3BtnDlvBatSetOnclick, this);
            this.div3.btnPopExcelUp.addEventHandler("onclick", this.div3BtnPopExcelUpOnclick, this);
            this.div3.btnCtnrAdd.addEventHandler("onclick", this.div3BtnCtnrAddOnclick, this);
            this.div3.btnFavo.addEventHandler("onclick", this.div3BtnFavoOnclick, this);
            this.div4.btnOPItemDetail.addEventHandler("onclick", this.fnFoldOnclick, this);
            this.div41.Tab02.addEventHandler("onchanged", this.div41Tab02Onchanged, this);
            this.div41.Tab02.tabp01.btnMtrlGrpCd.addEventHandler("onclick", this.div41Tab01Tabp01BtnMtrlGrpCdOnclick, this);
            this.div41.Tab02.tabp01.edtMtrlCd.addEventHandler("onkeydown", this.div41Tab01Tabp01EdMatCdOnkeydown, this);
            this.div41.Tab02.tabp01.edtMtrlNm.addEventHandler("onkeydown", this.div41Tab01Tabp01Onkeydown, this);
            this.div41.Tab02.tabp01.edtMtrlNm.addEventHandler("ontextchanged", this.div41Tab02Tabp01EdtMtrlNmOntextchanged, this);
            this.div41.Tab02.tabp01.btn_mtrlCd.addEventHandler("onclick", this.div41Tab01Tabp01BtnMtrlCdOnclick, this);
            this.div41.Tab02.tabp01.edtCdFctry.addEventHandler("onkeydown", this.div41Tab01Tabp01EdMatCdOnkeydown, this);
            this.div41.Tab02.tabp01.edtCdFctryNm.addEventHandler("onkeydown", this.div41Tab01Tabp01Onkeydown, this);
            this.div41.Tab02.tabp01.edtCdFctryNm.addEventHandler("ontextchanged", this.div41Tab02Tabp01EdtMtrlNmOntextchanged, this);
            this.div41.Tab02.tabp01.btnCdFctry.addEventHandler("onclick", this.div41Tab02Tabp01BtnCdFctryOnclick, this);
            this.div41.btnItemRowUp00.addEventHandler("onclick", this.div4BtnItemRowUpOnclick, this);
            this.div41.btnItemRowDown00.addEventHandler("onclick", this.div4BtnItemRowDownOnclick, this);
            this.div41.cboItemChg00.addEventHandler("onitemchanged", this.div4CboItemChgOnitemchanged, this);
            this.div5.btnOPItem.addEventHandler("onclick", this.fnFoldOnclick, this);
            this.div5.btnPtnrAdd.addEventHandler("onclick", this.div5BtnPtnrAddOnclick, this);
            this.div5.btnRfqExplnMailSend.addEventHandler("onclick", this.div5BtnRfqExplnMailSendOnclick, this);
            this.div51.grdRfqPtnr.addEventHandler("oncellclick", this.div51GrdRfqPtnrOncellclick, this);
            this.div51.grdRfqPtnr.addEventHandler("oncelldblclick", this.div51GrdRfqPtnrOncelldblclick, this);
            this.div6.btnFileAdd.addEventHandler("onclick", this.div6BtnFileAddOnclick, this);
            this.div6.btnOPItem.addEventHandler("onclick", this.fnFoldOnclick, this);
            this.div6.btnFileDel.addEventHandler("onclick", this.div6BtnFileDelOnclick, this);
            this.div31.grdRfqItem.addEventHandler("onexpandup", this.div31GrdRfqItemOnexpandup, this);
            this.div31.grdRfqItem.addEventHandler("oncellclick", this.div31GrdRfqItemOncellclick, this);
            this.div31.grdRfqItem.addEventHandler("oncelldblclick", this.div31GrdRfqItemOncelldblclick, this);
            this.div31.grdRfqItem.addEventHandler("onkeydown", this.div31GrdRfqItemOnkeydown, this);
            this.div31.grdRfqItem.addEventHandler("onkeyup", this.div31GrdRfqItemOnkeyup, this);
            this.div31.grdRfqItem.addEventHandler("ontextchanged", this.div31GrdRfqItemOntextchanged, this);
            this.btnPtnrDel.addEventHandler("onclick", this.div5BtnPtnrDelOnclick, this);
            this.PopupDiv01.cldDlvDayBat.addEventHandler("onchanged", this.popupDiv01CldDlvDayBatOnchanged, this);

        };

        this.loadIncludeScript("BRfqWrtDetail.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
