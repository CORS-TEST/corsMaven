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
                this.set_name("BTndrDetail");
                this.set_titletext("경쟁입찰상세");
                this._setFormPosition(0,0,1200,1135);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCdET30", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM11", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReturn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM10", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM13", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdET20", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM20", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCondition", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTndrItem", this);
            obj._setContents("<ColumnInfo><Column id=\"SRC_GRP_NM\" type=\"string\" size=\"300\"/><Column id=\"RFQ_REQ_ITEM_ID\" type=\"string\" size=\"20\"/><Column id=\"FWD_REMARK\" type=\"string\" size=\"1500\"/><Column id=\"ITM_NO\" type=\"string\" size=\"5\"/><Column id=\"PTNR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GOALAMT\" type=\"int\" size=\"22\"/><Column id=\"CRTR_ID\" type=\"string\" size=\"50\"/><Column id=\"TNDR_NO\" type=\"string\" size=\"20\"/><Column id=\"DLV_REQ_DAY\" type=\"string\" size=\"8\"/><Column id=\"MTRL_GRP_ID\" type=\"string\" size=\"20\"/><Column id=\"TNDR_ODR\" type=\"int\" size=\"22\"/><Column id=\"DTL_ADDR\" type=\"string\" size=\"600\"/><Column id=\"QTY\" type=\"int\" size=\"22\"/><Column id=\"TNDR_ITEM_ID\" type=\"string\" size=\"20\"/><Column id=\"MTRL_NM\" type=\"string\" size=\"500\"/><Column id=\"AWRD_AMT\" type=\"int\" size=\"22\"/><Column id=\"ADDR\" type=\"string\" size=\"600\"/><Column id=\"MTRL_CD\" type=\"string\" size=\"20\"/><Column id=\"LAST_CHGR_ID\" type=\"string\" size=\"50\"/><Column id=\"SRC_GRP_ID\" type=\"string\" size=\"20\"/><Column id=\"PTNR_ID\" type=\"string\" size=\"20\"/><Column id=\"CD_FCTRY_NM\" type=\"string\" size=\"40\"/><Column id=\"CD_FCTRY\" type=\"string\" size=\"40\"/><Column id=\"AWRD_PRICE\" type=\"int\" size=\"22\"/><Column id=\"CD_UNIT_NM\" type=\"string\" size=\"40\"/><Column id=\"CD_UNIT\" type=\"string\" size=\"40\"/><Column id=\"CHECKED\" type=\"string\" size=\"1\"/><Column id=\"GOALUNT_PRICE\" type=\"int\" size=\"22\"/><Column id=\"MTRL_GRP_NM\" type=\"string\" size=\"500\"/><Column id=\"DLV_PLC_NM\" type=\"string\" size=\"300\"/><Column id=\"ATTCH_FILE_CNT\" type=\"int\" size=\"22\"/><Column id=\"PR_ITEM_ID\" type=\"string\" size=\"20\"/><Column id=\"RMARK\" type=\"string\" size=\"3000\"/><Column id=\"LAST_CHG_DT\" type=\"string\" size=\"7\"/><Column id=\"ZIP_NO\" type=\"string\" size=\"30\"/><Column id=\"CRT_DT\" type=\"string\" size=\"7\"/><Column id=\"BRANCH_CD\" type=\"string\" size=\"20\"/><Column id=\"IM_ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TKEY\" type=\"STRING\" size=\"256\"/><Column id=\"STR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RFQ_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"REQR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_GRP_NM2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTndrRound", this);
            obj._setContents("<ColumnInfo><Column id=\"TNDR_NO\" type=\"string\" size=\"20\"/><Column id=\"TNDR_ODR\" type=\"int\" size=\"22\"/><Column id=\"ROUND_SEQ\" type=\"int\" size=\"22\"/><Column id=\"PRGRS_DAY\" type=\"string\" size=\"8\"/><Column id=\"BGN_TIME\" type=\"string\" size=\"6\"/><Column id=\"END_TIME\" type=\"string\" size=\"6\"/><Column id=\"CD_ROUND_NEXT_NM\" type=\"string\" size=\"40\"/><Column id=\"CD_ROUND_NEXT\" type=\"string\" size=\"40\"/><Column id=\"BRANCH_CD\" type=\"string\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTndr", this);
            obj._setContents("<ColumnInfo><Column id=\"TNDR_ATD_CLOSE_TIME\" type=\"string\" size=\"6\"/><Column id=\"ALT_OPEN\" type=\"string\" size=\"1\"/><Column id=\"CD_BID_UNIT_NM\" type=\"string\" size=\"40\"/><Column id=\"CD_BID_UNIT\" type=\"string\" size=\"40\"/><Column id=\"CHRGR_ID\" type=\"string\" size=\"50\"/><Column id=\"TKEY\" type=\"string\" size=\"20\"/><Column id=\"TTL\" type=\"string\" size=\"600\"/><Column id=\"ALT_OPEN_EXPLN\" type=\"string\" size=\"1\"/><Column id=\"ALT_PUR_AMT_OPEN\" type=\"string\" size=\"1\"/><Column id=\"PRGRS_ROUND\" type=\"int\" size=\"22\"/><Column id=\"TNDR_ATD_CLOSE_DAY\" type=\"string\" size=\"8\"/><Column id=\"CNCL_RSN\" type=\"string\" size=\"1500\"/><Column id=\"TNDR_ODR\" type=\"int\" size=\"22\"/><Column id=\"CD_TNDR_STTS_NM\" type=\"string\" size=\"40\"/><Column id=\"CD_TNDR_STTS\" type=\"string\" size=\"40\"/><Column id=\"ALT_EVAL_STD_OPEN\" type=\"string\" size=\"1\"/><Column id=\"OPEN_EXPLN_TIME\" type=\"string\" size=\"6\"/><Column id=\"FAX\" type=\"string\" size=\"50\"/><Column id=\"ALT_PRE_BID\" type=\"string\" size=\"1\"/><Column id=\"CD_BID_CRNC_NM\" type=\"string\" size=\"40\"/><Column id=\"CD_BID_CRNC\" type=\"string\" size=\"40\"/><Column id=\"ALT_LPRC_AMT_OPEN\" type=\"string\" size=\"1\"/><Column id=\"ALT_CNFDNC_OBY_AGRMT\" type=\"string\" size=\"1\"/><Column id=\"TNDR_LOW_AMT\" type=\"int\" size=\"22\"/><Column id=\"ALT_ATD_PTNR_OPEN\" type=\"string\" size=\"1\"/><Column id=\"CHRGR_NM\" type=\"string\" size=\"30\"/><Column id=\"LPRC_OPEN_PTNR_CNT\" type=\"int\" size=\"22\"/><Column id=\"ALT_PUR_AMT_APLY\" type=\"string\" size=\"1\"/><Column id=\"BRANCH_CD\" type=\"string\" size=\"20\"/><Column id=\"ALT_TOT_BID\" type=\"string\" size=\"1\"/><Column id=\"CD_PYMT_CNDTN_NM\" type=\"string\" size=\"40\"/><Column id=\"CD_PYMT_CNDTN\" type=\"string\" size=\"40\"/><Column id=\"GOALAMT\" type=\"int\" size=\"22\"/><Column id=\"CRTR_ID\" type=\"string\" size=\"50\"/><Column id=\"TNDR_NO\" type=\"string\" size=\"20\"/><Column id=\"WRTR_NM\" type=\"string\" size=\"30\"/><Column id=\"CD_DOC_CTGR_NM\" type=\"string\" size=\"40\"/><Column id=\"CD_DOC_CTGR\" type=\"string\" size=\"40\"/><Column id=\"ALT_TMP_BID\" type=\"string\" size=\"1\"/><Column id=\"OPEN_EXPLN_ATTN_CNDTN\" type=\"string\" size=\"1500\"/><Column id=\"TEL\" type=\"string\" size=\"150\"/><Column id=\"OPEN_EXPLN_DAY\" type=\"string\" size=\"8\"/><Column id=\"REQ_DT\" type=\"string\" size=\"7\"/><Column id=\"EMAIL\" type=\"string\" size=\"100\"/><Column id=\"AWRD_AMT\" type=\"int\" size=\"22\"/><Column id=\"OPEN_EXPLN_DR_TIME\" type=\"string\" size=\"6\"/><Column id=\"CD_TNDR_MTHD_NM\" type=\"string\" size=\"40\"/><Column id=\"CD_TNDR_MTHD\" type=\"string\" size=\"40\"/><Column id=\"LAST_CHGR_ID\" type=\"string\" size=\"50\"/><Column id=\"ALT_RFQ_CHG\" type=\"string\" size=\"1\"/><Column id=\"ALT_LOW_FAIL_APLY\" type=\"string\" size=\"1\"/><Column id=\"WRTR_ID\" type=\"string\" size=\"50\"/><Column id=\"ALT_LST_RFQ\" type=\"string\" size=\"1\"/><Column id=\"ATTCH_FILE_CNT\" type=\"int\" size=\"22\"/><Column id=\"RMARK\" type=\"string\" size=\"3000\"/><Column id=\"ALT_CERT\" type=\"string\" size=\"1\"/><Column id=\"LAST_CHG_DT\" type=\"string\" size=\"7\"/><Column id=\"ROUND_CNT\" type=\"int\" size=\"22\"/><Column id=\"ALT_LPRC_PTNR_OPEN\" type=\"string\" size=\"1\"/><Column id=\"OPEN_EXPLN_AREA\" type=\"string\" size=\"300\"/><Column id=\"CRT_DT\" type=\"string\" size=\"7\"/><Column id=\"APP_DOC_ID\" type=\"string\" size=\"20\"/><Column id=\"ALT_CHG_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"COREXP_KIDS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTndrPtnr", this);
            obj._setContents("<ColumnInfo><Column id=\"CHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_NO\" type=\"string\" size=\"20\"/><Column id=\"CD_PYMT_CNDTN_NM\" type=\"string\" size=\"40\"/><Column id=\"CD_PYMT_CNDTN\" type=\"string\" size=\"40\"/><Column id=\"CD_PTNR_BID_STTS_NM\" type=\"string\" size=\"40\"/><Column id=\"CD_PTNR_BID_STTS\" type=\"string\" size=\"40\"/><Column id=\"RCV_DT\" type=\"string\" size=\"7\"/><Column id=\"PTNR_NM\" type=\"string\" size=\"150\"/><Column id=\"TKEY\" type=\"string\" size=\"20\"/><Column id=\"RPRSTV_EMAIL\" type=\"string\" size=\"100\"/><Column id=\"ALT_WAST_PTNR\" type=\"string\" size=\"1\"/><Column id=\"CRTR_ID\" type=\"string\" size=\"50\"/><Column id=\"TNDR_NO\" type=\"string\" size=\"20\"/><Column id=\"RPRSTV_HP\" type=\"string\" size=\"150\"/><Column id=\"RCVR_NM\" type=\"string\" size=\"30\"/><Column id=\"CORP_REG_NO\" type=\"string\" size=\"60\"/><Column id=\"TNDR_ODR\" type=\"int\" size=\"22\"/><Column id=\"TEL\" type=\"string\" size=\"30\"/><Column id=\"ALT_PRGRS_CMPL\" type=\"string\" size=\"1\"/><Column id=\"DTL_ADDR\" type=\"string\" size=\"600\"/><Column id=\"ADDR\" type=\"string\" size=\"600\"/><Column id=\"BID_AMT\" type=\"int\" size=\"22\"/><Column id=\"SIGN_DATA\" type=\"string\" size=\"4000\"/><Column id=\"ALT_CNST_PTNR\" type=\"string\" size=\"1\"/><Column id=\"LAST_CHGR_ID\" type=\"string\" size=\"50\"/><Column id=\"FAX\" type=\"string\" size=\"150\"/><Column id=\"RCVR_ID\" type=\"string\" size=\"50\"/><Column id=\"PTNR_ID\" type=\"string\" size=\"20\"/><Column id=\"CD_PO_CRNC_NM\" type=\"string\" size=\"40\"/><Column id=\"CD_PO_CRNC\" type=\"string\" size=\"40\"/><Column id=\"RPRSTV_NM\" type=\"string\" size=\"90\"/><Column id=\"BIZ_TYPE\" type=\"string\" size=\"150\"/><Column id=\"BID_DT\" type=\"string\" size=\"7\"/><Column id=\"ALT_MTRL_PTNR\" type=\"string\" size=\"1\"/><Column id=\"RPTST_TEL\" type=\"string\" size=\"150\"/><Column id=\"ALT_PRGRS_TARG\" type=\"string\" size=\"1\"/><Column id=\"SRCH_KEY\" type=\"string\" size=\"1500\"/><Column id=\"ALT_USE\" type=\"string\" size=\"1\"/><Column id=\"TNDR_PTNR_ID\" type=\"string\" size=\"20\"/><Column id=\"HEAD_OFFCBIZ_NO\" type=\"string\" size=\"20\"/><Column id=\"RMARK\" type=\"string\" size=\"1500\"/><Column id=\"RFQ_AMT\" type=\"int\" size=\"22\"/><Column id=\"BIZ_CNDTN\" type=\"string\" size=\"150\"/><Column id=\"LAST_CHG_DT\" type=\"string\" size=\"7\"/><Column id=\"CD_BID_RSLT_NM\" type=\"string\" size=\"40\"/><Column id=\"CD_BID_RSLT\" type=\"string\" size=\"40\"/><Column id=\"ZIP_NO\" type=\"string\" size=\"30\"/><Column id=\"BIZ_BGN_DAY\" type=\"string\" size=\"8\"/><Column id=\"BIDR_ID\" type=\"string\" size=\"50\"/><Column id=\"CRT_DT\" type=\"string\" size=\"7\"/><Column id=\"BRANCH_CD\" type=\"string\" size=\"20\"/><Column id=\"CFM_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"SBMTR_ID\" type=\"STRING\" size=\"50\"/><Column id=\"SBMTR_NM\" type=\"STRING\" size=\"50\"/><Column id=\"EVAL_POINT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdET12", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdET23", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM15", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_1", "absolute", "0", "0", null, "34", "15", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBg");
            obj.getSetter("objNm").set("DIV-입찰 진행 상세 ");
            this.addChild(obj.name, obj);
            obj = new Edit("edtDocNo", "absolute", "160", "6", "220", "21", null, null, this.div_1);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_cssclass("edt_default_r");
            obj.getSetter("objNm").set("문서번호");
            this.div_1.addChild(obj.name, obj);
            obj = new Combo("cboDocType", "absolute", "5", "6", "150", "21", null, null, this.div_1);
            this.div_1.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_innerdataset("dsCdCM10");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_cssclass("cbo_default_r");
            obj.set_enable("false");
            obj.getSetter("objNm").set("구매유형");
            obj = new Button("btnTndrReq", "absolute", null, "4", "69", "24", "9", null, this.div_1);
            obj.set_taborder("6");
            obj.set_text("입찰요청");
            obj.set_cssclass("btn_WF_SearchBtn");
            obj.getSetter("objNm").set("입찰요청");
            this.div_1.addChild(obj.name, obj);

            obj = new Div("div_2", "absolute", "0", "44", null, "24", "10", null, this);
            obj.set_taborder("1");
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", null, "255", "24", null, "0", this.div_2);
            obj.set_taborder("0");
            obj.set_text("입찰요청서");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 2 17");
            this.div_2.addChild(obj.name, obj);
            obj = new Button("btnRfqTypeSelect", "absolute", null, "0", "90", "24", "3", null, this.div_2);
            obj.set_taborder("1");
            obj.set_text("입찰유형선택");
            obj.set_cssclass("btn_WF_Custom");
            obj.getSetter("objNm").set("견적유형선택");
            this.div_2.addChild(obj.name, obj);

            obj = new Div("div_21", "absolute", "0%", "73", null, "208", "15", null, this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);
            obj = new Tab("Tab01", "absolute", "0", "0", null, "198", "0", null, this.div_21);
            obj.set_taborder("0");
            obj.set_preload("true");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.set_cssclass("tab_default");
            obj.getSetter("objNm").set("");
            this.div_21.addChild(obj.name, obj);
            obj = new Tabpage("tabp01", this.div_21.Tab01);
            obj.set_text("기본정보");
            obj.set_scrollbars("none");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("기본정보");
            this.div_21.Tab01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "5", null, "33", "0", null, this.div_21.Tab01.tabp01);
            obj.set_taborder("162");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staPoDay", "absolute", "687", "5", "160", "33", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("163");
            obj.set_text("상태");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("발주일자");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staTtl", "absolute", "0", "5", "171", "33", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("164");
            obj.set_text("입찰요청명");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "37", null, "33", "0", null, this.div_21.Tab01.tabp01);
            obj.set_taborder("165");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staPoCtgr", "absolute", "687", "37", "160", "33", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("166");
            obj.set_text("응찰통화");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("발주유형");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staAmtVat", "absolute", "0", "37", "171", "33", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("167");
            obj.set_text("입찰참여마감일시");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "69", null, "33", "0", null, this.div_21.Tab01.tabp01);
            obj.set_taborder("168");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staDlvArea", "absolute", "687", "69", "160", "33", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("169");
            obj.set_text("지급조건");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("배송처");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staPoAmt", "absolute", "0", "69", "171", "33", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("170");
            obj.set_text("구매목표가");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine03", "absolute", "0", "101", null, "33", "0", null, this.div_21.Tab01.tabp01);
            obj.set_taborder("171");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staPtnr", "absolute", "0", "101", "171", "33", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("172");
            obj.set_text("입찰옵션");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new MaskEdit("maeTotAmt", "absolute", "177", "73", "220", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("173");
            obj.set_readonly("true");
            obj.set_mask("#,##0");
            obj.set_cssclass("input_point");
            obj.set_enable("false");
            obj.style.set_color("blue");
            obj.style.set_font("bold 10 Dotum");
            obj.getSetter("objNm").set("구매목표가");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtTtl", "absolute", "177", "9", "294", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("174");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("입찰요청명");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Combo("cboBidCur", "absolute", "853", "42", "150", "24", null, null, this.div_21.Tab01.tabp01);
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("175");
            obj.set_innerdataset("@dsCdCM15");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("응찰통화");
            obj = new Edit("edtCardAprvNo", "absolute", "1049", "265", "149", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("176");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("카드승인번호");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Combo("cboPayCond", "absolute", "853", "73", "150", "24", null, null, this.div_21.Tab01.tabp01);
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("177");
            obj.set_innerdataset("@dsCdCM13");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("지급조건");
            obj = new Edit("edtRnd", "absolute", "475", "9", "22", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("178");
            obj.set_lengthunit("utf8");
            obj.set_enable("false");
            obj.getSetter("objNm").set("회차");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Div("edtRound", "absolute", "501", "9", "34", "23", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("179");
            obj.set_text("회차");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Calendar("cal_tndrAtdCloseDay", "absolute", "177", "42", "150", "24", null, null, this.div_21.Tab01.tabp01);
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("180");
            obj.set_dateformat("yyyy.MM.dd ddd");
            obj.set_editformat("yyyy.MM.dd ddd");
            obj.getSetter("objNm").set("입찰참여마감일시");
            obj = new Div("edtRound01", "absolute", "445", "42", "34", "23", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("181");
            obj.set_text("시");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new CheckBox("chkDlvOk", "absolute", "178", "106", "98", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("182");
            obj.set_text("예약응찰");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.getSetter("objNm").set("예약응찰");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new CheckBox("chkDlvOk00", "absolute", "258", "106", "98", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("183");
            obj.set_text("모의투찰");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.getSetter("objNm").set("모의투찰");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new CheckBox("chkDlvOk01", "absolute", "339", "106", "98", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("184");
            obj.set_text("비밀준수 협약");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.getSetter("objNm").set("비밀준수협약");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new CheckBox("chkDlvOk02", "absolute", "451", "106", "98", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("185");
            obj.set_text("인증서");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.getSetter("objNm").set("인증서");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staPymtCndtn00", "absolute", "406", "69", "86", "33", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("186");
            obj.set_text("하한유찰가");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("하한유찰가");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtLowestBid", "absolute", "496", "73", "185", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("187");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("하한유찰가");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Combo("cboStat", "absolute", "853", "9", "150", "24", null, null, this.div_21.Tab01.tabp01);
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("188");
            obj.set_readonly("true");
            obj.set_innerdataset("@dsCdET20");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("상태");
            obj = new Div("edtRound02", "absolute", "26.81%", "42", null, "23", "70.31%", null, this.div_21.Tab01.tabp01);
            obj.set_taborder("189");
            obj.set_text("일");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new MaskEdit("mae_tndrAtdCloseTime", "absolute", "365", "42", "75", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("190");
            obj.set_type("string");
            obj.set_mask("##:##");
            obj.set_clipmode("excludespace");
            obj.set_autoselect("true");
            obj.set_cssclass("mae_default");
            obj.getSetter("objNm").set("입찰참여마감일시간");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Tabpage("tabp02", this.div_21.Tab01);
            obj.set_text("입찰설정");
            this.div_21.Tab01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "37", null, "33", "0", null, this.div_21.Tab01.tabp02);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Static("staExchgRt", "absolute", "0", "37", "171", "33", null, null, this.div_21.Tab01.tabp02);
            obj.set_taborder("47");
            obj.set_text("구매목표가");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "5", null, "33", "0", null, this.div_21.Tab01.tabp02);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Static("staPoCrnc", "absolute", "0", "5", "171", "33", null, null, this.div_21.Tab01.tabp02);
            obj.set_taborder("49");
            obj.set_text("입찰방법");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("입찰방법");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Combo("cboPoCrnc", "absolute", "704", "9", "181", "24", null, null, this.div_21.Tab01.tabp02);
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj.set_taborder("50");
            obj.set_innerdataset("@dsCdET30");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("입찰방식선택");
            obj = new Static("staViewCompLine02", "absolute", "0", "69", null, "33", "0", null, this.div_21.Tab01.tabp02);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Static("staViewCompLine03", "absolute", "0", "101", null, "33", "0", null, this.div_21.Tab01.tabp02);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Static("staViewCompLine04", "absolute", "0", "133", null, "33", "0", null, this.div_21.Tab01.tabp02);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Static("staExchgRt00", "absolute", "0", "69", "171", "33", null, null, this.div_21.Tab01.tabp02);
            obj.set_taborder("54");
            obj.set_text("업체공개");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Static("staExchgRt01", "absolute", "0", "101", "171", "33", null, null, this.div_21.Tab01.tabp02);
            obj.set_taborder("55");
            obj.set_text("업체/가격");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Static("staExchgRt02", "absolute", "0", "133", "171", "33", null, null, this.div_21.Tab01.tabp02);
            obj.set_taborder("56");
            obj.set_text("하한가 적용");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Radio("rdoPartialDlv", "absolute", "176", "10", "250", "24", null, null, this.div_21.Tab01.tabp02);
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            var rdoPartialDlv_innerdataset = new Dataset("rdoPartialDlv_innerdataset", this.div_21.Tab01.tabp02.rdoPartialDlv);
            rdoPartialDlv_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">자재별응찰</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">총액응찰</Col></Row></Rows>");
            obj.set_innerdataset(rdoPartialDlv_innerdataset);
            obj.set_taborder("57");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_cssclass("rdo_default");
            obj.getSetter("objNm").set("입찰방법radio");
            obj = new Static("staPoCrnc00", "absolute", "528", "5", "171", "33", null, null, this.div_21.Tab01.tabp02);
            obj.set_taborder("58");
            obj.set_text("입찰방식");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("입찰방식");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Static("staPoCrnc01", "absolute", "528", "37", "171", "33", null, null, this.div_21.Tab01.tabp02);
            obj.set_taborder("59");
            obj.set_text("최종내역");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Static("staPoCrnc02", "absolute", "528", "69", "171", "33", null, null, this.div_21.Tab01.tabp02);
            obj.set_taborder("60");
            obj.set_text("응찰단위");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new CheckBox("chkComOpen", "absolute", "176", "74", "104", "24", null, null, this.div_21.Tab01.tabp02);
            obj.set_taborder("61");
            obj.set_text("참여 업체 공개");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.getSetter("objNm").set("참여업체공개");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Edit("edtComCnt", "absolute", "301", "73", "97", "24", null, null, this.div_21.Tab01.tabp02);
            obj.set_taborder("62");
            obj.set_lengthunit("utf8");
            obj.style.set_displaynulltextcolor("#999999ff");
            obj.getSetter("objNm").set("참여업체공개갯수");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new CheckBox("chkApp", "absolute", "176", "42", "112", "24", null, null, this.div_21.Tab01.tabp02);
            obj.set_taborder("63");
            obj.set_text("구매목표가 적용");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.getSetter("objNm").set("구매목표가적용");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new CheckBox("chkOpen", "absolute", "301", "42", "112", "24", null, null, this.div_21.Tab01.tabp02);
            obj.set_taborder("64");
            obj.set_text("구매목표가 공개");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.getSetter("objNm").set("구매목표가공개");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Static("staWon01", "absolute", "398", "75", "74", "20", null, null, this.div_21.Tab01.tabp02);
            obj.set_taborder("65");
            obj.set_text("개 업체 공개");
            obj.style.set_align("left middle");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new CheckBox("chkLowestAmtOpen", "absolute", "176", "106", "112", "24", null, null, this.div_21.Tab01.tabp02);
            obj.set_taborder("66");
            obj.set_text("최저가 금액공개");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.getSetter("objNm").set("최저가금액공개");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new CheckBox("chkLowestComOpen", "absolute", "301", "106", "112", "24", null, null, this.div_21.Tab01.tabp02);
            obj.set_taborder("67");
            obj.set_text("최저가 업체공개");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.getSetter("objNm").set("최저가업체공개");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new CheckBox("chkDlvOk04", "absolute", "176", "138", "112", "24", null, null, this.div_21.Tab01.tabp02);
            obj.set_taborder("68");
            obj.set_text("하한 유찰가 적용");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.getSetter("objNm").set("하한유찰가적용");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Edit("edtExchgRmark01", "absolute", "301", "137", "97", "24", null, null, this.div_21.Tab01.tabp02);
            obj.set_taborder("69");
            obj.set_lengthunit("utf8");
            obj.style.set_displaynulltextcolor("#999999ff");
            obj.getSetter("objNm").set("하한유찰가");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Static("staWon00", "absolute", "398", "139", "74", "20", null, null, this.div_21.Tab01.tabp02);
            obj.set_taborder("70");
            obj.set_text("원");
            obj.style.set_align("left middle");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new CheckBox("chkFinalRfq", "absolute", "704", "42", "152", "24", null, null, this.div_21.Tab01.tabp02);
            obj.set_taborder("71");
            obj.set_text("낙찰 후 최종견적 필요");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.getSetter("objNm").set("낙찰후최종견적");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Combo("cboPoCrnc00", "absolute", "704", "73", "181", "24", null, null, this.div_21.Tab01.tabp02);
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj.set_taborder("72");
            obj.set_innerdataset("@dsCdET23");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("응찰단위선택");
            obj = new Tabpage("tabp03", this.div_21.Tab01);
            obj.set_text("ROUND");
            obj.getSetter("objNm").set("특이사항");
            this.div_21.Tab01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine04", "absolute", "0", "133", "500", "33", null, null, this.div_21.Tab01.tabp03);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_21.Tab01.tabp03.addChild(obj.name, obj);
            obj = new Static("staExchgRt02", "absolute", "0", "133", "171", "33", null, null, this.div_21.Tab01.tabp03);
            obj.set_taborder("25");
            obj.set_text("유휴시간");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_21.Tab01.tabp03.addChild(obj.name, obj);
            obj = new Static("staViewCompLine03", "absolute", "0", "101", "500", "33", null, null, this.div_21.Tab01.tabp03);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_21.Tab01.tabp03.addChild(obj.name, obj);
            obj = new Static("staExchgRt01", "absolute", "0", "101", "171", "33", null, null, this.div_21.Tab01.tabp03);
            obj.set_taborder("27");
            obj.set_text("라운드시간");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_21.Tab01.tabp03.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "69", "500", "33", null, null, this.div_21.Tab01.tabp03);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_21.Tab01.tabp03.addChild(obj.name, obj);
            obj = new Static("staExchgRt00", "absolute", "0", "69", "171", "33", null, null, this.div_21.Tab01.tabp03);
            obj.set_taborder("29");
            obj.set_text("시작시간");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_21.Tab01.tabp03.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "37", "500", "33", null, null, this.div_21.Tab01.tabp03);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_21.Tab01.tabp03.addChild(obj.name, obj);
            obj = new Static("staExchgRt", "absolute", "0", "37", "171", "33", null, null, this.div_21.Tab01.tabp03);
            obj.set_taborder("31");
            obj.set_text("진행일자");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_21.Tab01.tabp03.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "5", "500", "33", null, null, this.div_21.Tab01.tabp03);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_21.Tab01.tabp03.addChild(obj.name, obj);
            obj = new Static("staPoCrnc", "absolute", "0", "5", "171", "33", null, null, this.div_21.Tab01.tabp03);
            obj.set_taborder("33");
            obj.set_text("라운드 횟수");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_21.Tab01.tabp03.addChild(obj.name, obj);
            obj = new Grid("grd_tndrRound", "absolute", "503", "5", null, null, "0.79%", "0", this.div_21.Tab01.tabp03);
            obj.set_taborder("34");
            obj.set_binddataset("dsTndrRound");
            obj.set_autofittype("col");
            obj.getSetter("objNm").set("라운드 그리드");
            obj._setContents("<Formats><Format id=\"MMODE\"><Columns><Column size=\"55\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"300\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"차수\"/><Cell col=\"1\" text=\"진행일자\"/><Cell col=\"2\" text=\"시작시간\"/><Cell col=\"3\" text=\"종료시간\"/><Cell col=\"4\" text=\"라운드 종료 후 처리\"/></Band><Band id=\"body\"><Cell style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:ROUND_SEQ\"/><Cell col=\"1\" displaytype=\"date\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:PRGRS_DAY\" mask=\"yyyy.MM.dd\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:BGN_TIME\" mask=\"@@:@@\"/><Cell col=\"3\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:END_TIME\" mask=\"@@:@@\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;\" text=\"bind:CD_ROUND_NEXT\" combodataset=\"ds_cdET12\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" combodisplay=\"edit\"/></Band></Format><Format id=\"VMODE\"><Columns><Column size=\"80\"/><Column size=\"185\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"253\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"차수\"/><Cell col=\"1\" text=\"진행일자\"/><Cell col=\"2\" text=\"시작시간\"/><Cell col=\"3\" text=\"종료시간\"/><Cell col=\"4\" text=\"라운드 종료 후 처리\"/></Band><Band id=\"body\"><Cell text=\"bind:ROUND_SEQ\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:PRGRS_DAY\" mask=\"yyyy.MM.dd\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"normal\" text=\"bind:BGN_TIME\" mask=\"@@:@@\"/><Cell col=\"3\" text=\"bind:END_TIME\" mask=\"@@:@@\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"none\" style=\"align:center;\" text=\"bind:CD_ROUND_NEXT\" combodataset=\"ds_cdET12\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" combodisplay=\"edit\" calendardisplay=\"display\"/></Band></Format></Formats>");
            this.div_21.Tab01.tabp03.addChild(obj.name, obj);
            obj = new Static("staWon01", "absolute", "345", "11", "50", "20", null, null, this.div_21.Tab01.tabp03);
            obj.set_taborder("35");
            obj.set_text("회");
            obj.style.set_align("left middle");
            this.div_21.Tab01.tabp03.addChild(obj.name, obj);
            obj = new Calendar("cd_roundDay", "fixed", "176", "42", "166", "24", null, null, this.div_21.Tab01.tabp03);
            this.div_21.Tab01.tabp03.addChild(obj.name, obj);
            obj.set_taborder("36");
            obj.getSetter("objNm").set("라운드진행일자");
            obj = new MaskEdit("mae_tndrAtdCloseTime", "absolute", "176", "73", "166", "24", null, null, this.div_21.Tab01.tabp03);
            obj.set_taborder("37");
            obj.set_type("string");
            obj.set_mask("##:##");
            obj.set_clipmode("excludespace");
            obj.set_autoselect("true");
            obj.set_cssclass("mae_default");
            obj.getSetter("objNm").set("라운드 시작시간");
            this.div_21.Tab01.tabp03.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "345", "73", "24", "24", null, null, this.div_21.Tab01.tabp03);
            obj.set_taborder("38");
            obj.set_text("시");
            this.div_21.Tab01.tabp03.addChild(obj.name, obj);
            obj = new Static("staWon00", "absolute", "345", "107", "50", "20", null, null, this.div_21.Tab01.tabp03);
            obj.set_taborder("39");
            obj.set_text("분");
            obj.style.set_align("left middle");
            this.div_21.Tab01.tabp03.addChild(obj.name, obj);
            obj = new Static("staWon02", "absolute", "345", "140", "50", "20", null, null, this.div_21.Tab01.tabp03);
            obj.set_taborder("40");
            obj.set_text("분");
            obj.style.set_align("left middle");
            this.div_21.Tab01.tabp03.addChild(obj.name, obj);
            obj = new Spin("sp_roundCnt", "absolute", "176", "9", "166", "24", null, null, this.div_21.Tab01.tabp03);
            obj.set_taborder("41");
            obj.set_value("0");
            obj.set_max("5");
            obj.set_min("1");
            obj.getSetter("objNm").set("라운드횟수");
            this.div_21.Tab01.tabp03.addChild(obj.name, obj);
            obj = new Spin("sp_roundRateTime", "absolute", "176", "106", "166", "24", null, null, this.div_21.Tab01.tabp03);
            obj.set_taborder("42");
            obj.set_value("5");
            obj.set_max("100");
            obj.getSetter("objNm").set("라운드시간");
            this.div_21.Tab01.tabp03.addChild(obj.name, obj);
            obj = new Spin("sp_roundTime", "absolute", "176", "137", "166", "24", null, null, this.div_21.Tab01.tabp03);
            obj.set_taborder("43");
            obj.set_value("5");
            obj.set_max("100");
            obj.getSetter("objNm").set("라운드 유휴시간");
            this.div_21.Tab01.tabp03.addChild(obj.name, obj);
            obj = new Button("btn_round", "absolute", "435", "9", "60", "24", null, null, this.div_21.Tab01.tabp03);
            obj.set_taborder("44");
            obj.set_text("적용");
            obj.set_cssclass("btn_WF_Custom");
            obj.getSetter("objNm").set("버튼-라운드적용");
            obj.getSetter("lbcd").set("");
            this.div_21.Tab01.tabp03.addChild(obj.name, obj);
            obj = new Tabpage("tabpage7", this.div_21.Tab01);
            obj.set_text("공개설명회");
            this.div_21.Tab01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "5", null, "33", "0", null, this.div_21.Tab01.tabpage7);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_21.Tab01.tabpage7.addChild(obj.name, obj);
            obj = new Static("staTtl", "absolute", "0", "5", "171", "33", null, null, this.div_21.Tab01.tabpage7);
            obj.set_taborder("23");
            obj.set_text("공개설명회");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_21.Tab01.tabpage7.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "37", null, "33", "0", null, this.div_21.Tab01.tabpage7);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_21.Tab01.tabpage7.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "69", null, "33", "0", null, this.div_21.Tab01.tabpage7);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_21.Tab01.tabpage7.addChild(obj.name, obj);
            obj = new Static("staViewCompLine03", "absolute", "0", "101", null, "66", "0", null, this.div_21.Tab01.tabpage7);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_21.Tab01.tabpage7.addChild(obj.name, obj);
            obj = new Static("staTtl00", "absolute", "0", "37", "171", "33", null, null, this.div_21.Tab01.tabpage7);
            obj.set_taborder("27");
            obj.set_text("설명회 일시");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_21.Tab01.tabpage7.addChild(obj.name, obj);
            obj = new Static("staTtl01", "absolute", "0", "69", "171", "33", null, null, this.div_21.Tab01.tabpage7);
            obj.set_taborder("28");
            obj.set_text("장소");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_21.Tab01.tabpage7.addChild(obj.name, obj);
            obj = new Static("staTtl02", "absolute", "0", "101", "171", "66", null, null, this.div_21.Tab01.tabpage7);
            obj.set_taborder("29");
            obj.set_text("참여조건");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_21.Tab01.tabpage7.addChild(obj.name, obj);
            obj = new Edit("edtTtl", "absolute", "176", "73", "789", "24", null, null, this.div_21.Tab01.tabpage7);
            obj.set_taborder("30");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("공개설명회 장소");
            this.div_21.Tab01.tabpage7.addChild(obj.name, obj);
            obj = new Static("staTtl03", "absolute", "608", "37", "171", "33", null, null, this.div_21.Tab01.tabpage7);
            obj.set_taborder("31");
            obj.set_text("설명회 소요시간");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_21.Tab01.tabpage7.addChild(obj.name, obj);
            obj = new Div("edtRound", "absolute", "26.91%", "41", null, "23", "70.21%", null, this.div_21.Tab01.tabpage7);
            obj.set_taborder("32");
            obj.set_text("일");
            this.div_21.Tab01.tabpage7.addChild(obj.name, obj);
            obj = new Div("edtRound00", "absolute", "44.89%", "41", null, "23", "52.23%", null, this.div_21.Tab01.tabpage7);
            obj.set_taborder("33");
            obj.set_text("시");
            this.div_21.Tab01.tabpage7.addChild(obj.name, obj);
            obj = new TextArea("TextArea00", "absolute", "14.9%", "107", null, "55", "18.47%", null, this.div_21.Tab01.tabpage7);
            obj.set_taborder("34");
            obj.getSetter("objNm").set("공개설명회 참여조건");
            this.div_21.Tab01.tabpage7.addChild(obj.name, obj);
            obj = new Radio("rdo_altOpenExpln", "absolute", "176", "5", "155", "33", null, null, this.div_21.Tab01.tabpage7);
            this.div_21.Tab01.tabpage7.addChild(obj.name, obj);
            var rdo_altOpenExpln_innerdataset = new Dataset("rdo_altOpenExpln_innerdataset", this.div_21.Tab01.tabpage7.rdo_altOpenExpln);
            rdo_altOpenExpln_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">실시</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미실시</Col></Row></Rows>");
            obj.set_innerdataset(rdo_altOpenExpln_innerdataset);
            obj.set_taborder("35");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_cssclass("rdo_default");
            obj.set_enableevent("false");
            obj.getSetter("objNm").set("공개설명회 실시여부");
            obj = new Calendar("cd_cDay", "absolute", "181", "41", "144", "24", null, null, this.div_21.Tab01.tabpage7);
            this.div_21.Tab01.tabpage7.addChild(obj.name, obj);
            obj.set_taborder("36");
            obj.set_dateformat("yyyy.MM.dd ddd");
            obj.set_editformat("yyyy.MM.dd");
            obj.getSetter("objNm").set("공객설명회일자");
            obj = new MaskEdit("ed_roundStrTime00", "absolute", "352", "41", "185", "24", null, null, this.div_21.Tab01.tabpage7);
            obj.set_taborder("37");
            obj.set_displaynulltext("__:__");
            obj.set_type("string");
            obj.set_mask("##:##");
            obj.set_clipmode("excludespace");
            obj.getSetter("objNm").set("공개설명회일시");
            this.div_21.Tab01.tabpage7.addChild(obj.name, obj);
            obj = new MaskEdit("ed_roundStrTime", "absolute", "784", "41", "181", "24", null, null, this.div_21.Tab01.tabpage7);
            obj.set_taborder("38");
            obj.set_displaynulltext("__:__");
            obj.set_type("string");
            obj.set_mask("##:##");
            obj.set_clipmode("excludespace");
            obj.getSetter("objNm").set("공개설명회 소요 시간");
            this.div_21.Tab01.tabpage7.addChild(obj.name, obj);
            obj = new Tabpage("tabp05", this.div_21.Tab01);
            obj.set_text("입찰담당자");
            obj.getSetter("objNm").set("찰입찰담당");
            this.div_21.Tab01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine03", "absolute", "0", "101", null, "33", "0", null, this.div_21.Tab01.tabp05);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_21.Tab01.tabp05.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "37", null, "33", "0", null, this.div_21.Tab01.tabp05);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_21.Tab01.tabp05.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "5", null, "33", "0", null, this.div_21.Tab01.tabp05);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_21.Tab01.tabp05.addChild(obj.name, obj);
            obj = new Static("staWrtr", "absolute", "0", "5", "171", "33", null, null, this.div_21.Tab01.tabp05);
            obj.set_taborder("42");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_21.Tab01.tabp05.addChild(obj.name, obj);
            obj = new Static("staTel", "absolute", "0", "37", "171", "33", null, null, this.div_21.Tab01.tabp05);
            obj.set_taborder("43");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_21.Tab01.tabp05.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "69", null, "33", "0", null, this.div_21.Tab01.tabp05);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_21.Tab01.tabp05.addChild(obj.name, obj);
            obj = new Static("staEmail", "absolute", "0", "69", "171", "33", null, null, this.div_21.Tab01.tabp05);
            obj.set_taborder("45");
            obj.set_text("e-Mail");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_21.Tab01.tabp05.addChild(obj.name, obj);
            obj = new Static("staFax", "absolute", "0", "101", "171", "33", null, null, this.div_21.Tab01.tabp05);
            obj.set_taborder("46");
            obj.set_text("Fax");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_21.Tab01.tabp05.addChild(obj.name, obj);
            obj = new Edit("edtFax", "absolute", "177", "105", "356", "24", null, null, this.div_21.Tab01.tabp05);
            obj.set_taborder("47");
            obj.set_cssclass("edt_default_r");
            obj.getSetter("objNm").set("Fax");
            this.div_21.Tab01.tabp05.addChild(obj.name, obj);
            obj = new Edit("edtEmail", "absolute", "177", "73", "356", "24", null, null, this.div_21.Tab01.tabp05);
            obj.set_taborder("48");
            obj.set_cssclass("edt_default_r");
            obj.getSetter("objNm").set("e-Mail");
            this.div_21.Tab01.tabp05.addChild(obj.name, obj);
            obj = new Edit("edtTel", "absolute", "177", "41", "356", "24", null, null, this.div_21.Tab01.tabp05);
            obj.set_taborder("49");
            obj.set_cssclass("edt_default_r");
            obj.getSetter("objNm").set("전화번호");
            this.div_21.Tab01.tabp05.addChild(obj.name, obj);
            obj = new Edit("edtWrtrNm", "absolute", "282", "9", "250", "24", null, null, this.div_21.Tab01.tabp05);
            obj.set_taborder("50");
            obj.set_cssclass("edt_default_r");
            obj.getSetter("objNm").set("담당자명");
            this.div_21.Tab01.tabp05.addChild(obj.name, obj);
            obj = new Edit("edtWrtrId", "absolute", "177", "9", "100", "24", null, null, this.div_21.Tab01.tabp05);
            obj.set_taborder("51");
            obj.set_readonly("true");
            obj.set_cssclass("edt_default_r");
            obj.getSetter("objNm").set("담당자ID");
            this.div_21.Tab01.tabp05.addChild(obj.name, obj);
            obj = new Button("btnChrgr", "absolute", "531", "9", "24", "24", null, null, this.div_21.Tab01.tabp05);
            obj.set_taborder("52");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("담당자검색팝업버튼");
            this.div_21.Tab01.tabp05.addChild(obj.name, obj);
            obj = new Tabpage("tabp06", this.div_21.Tab01);
            obj.set_text("특이사항");
            obj.getSetter("objNm").set("");
            this.div_21.Tab01.addChild(obj.name, obj);
            obj = new TextArea("TextArea00", "absolute", "0.3%", "4", null, "159", "0.5%", null, this.div_21.Tab01.tabp06);
            obj.set_taborder("0");
            obj.getSetter("objNm").set("특이사항");
            this.div_21.Tab01.tabp06.addChild(obj.name, obj);
            obj = new Tabpage("tabp04", this.div_21.Tab01);
            obj.set_text("첨부파일");
            obj.set_url("CCOMP::CompNFileUpDown.xfdl");
            obj.getSetter("objNm").set("첨부파일");
            this.div_21.Tab01.addChild(obj.name, obj);

            obj = new Div("div_3", "absolute", "0", "283", null, "24", "10", null, this);
            obj.set_taborder("3");
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", null, "255", "24", null, "0", this.div_3);
            obj.set_taborder("0");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 2 17");
            this.div_3.addChild(obj.name, obj);

            obj = new Div("div_31", "absolute", "0", "311", null, "200", "15", null, this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "9", this.div_31);
            obj.set_taborder("11");
            obj.set_scrollbars("none");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.div_31.addChild(obj.name, obj);
            obj = new Grid("dsTndrItem", "absolute", "0%", "0", null, null, "0%", "37", this.div_31);
            obj.set_taborder("12");
            obj.set_binddataset("dsTndrItem");
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
            obj.getSetter("objNm").set("품목 그리드");
            obj._setContents("<Formats><Format id=\"MMODE\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"55\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"90\"/><Column size=\"300\"/><Column size=\"90\"/><Column size=\"55\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"70\"/><Column size=\"120\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" text=\"품번\"/><Cell col=\"2\" text=\"창고\"/><Cell col=\"3\" text=\"품목분류\"/><Cell col=\"4\" text=\"품목코드\"/><Cell col=\"5\" displaytype=\"normal\" text=\"품목명\"/><Cell col=\"6\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;수량\"/><Cell col=\"7\" text=\"단위\"/><Cell col=\"8\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;구매목표가\"/><Cell col=\"9\" text=\"금액\"/><Cell col=\"10\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;납품요청일자\"/><Cell col=\"11\" text=\"비고\"/><Cell col=\"12\" text=\"요청자\"/><Cell col=\"13\" text=\"구매요청번호\"/></Band><Band id=\"body\" style=\"cellpadding:2 2 2 2 ;\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"background2: ;\" text=\"bind:CHECKED\" editdisplay=\"display\" expandshow=\"hide\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:ITM_NO\" editdisplay=\"edit\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:SL_NM\" expandshow=\"hide\" expandimage=\"URL('img::grd_WF_Expand.png')\" combodisplay=\"edit\"/><Cell col=\"3\" edittype=\"none\" style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:MTRL_GRP_NM2\" editdisplay=\"edit\" expandshow=\"hide\" expandsize=\"21\" expandimage=\"URL('img::grd_WF_Expand.png')\" tooltiptext=\"bind:SRC_GRP_NM\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:MTRL_CD\" editautoselect=\"true\" editdisplay=\"edit\" tooltiptext=\"bind:MTRL_CD\"/><Cell col=\"5\" edittype=\"none\" style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:MTRL_NM\" editdisplay=\"edit\" expandshow=\"hide\" expandsize=\"21\" expandimage=\"URL('img::grd_WF_Expand.png')\" tooltiptext=\"bind:MTRL_NM\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;padding: ;\" text=\"bind:QTY\" mask=\"#,##0.00\" editautoselect=\"true\" editdisplay=\"edit\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"none\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:CD_UNIT_NM\" combodataset=\"ds_cdCM11\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" combodisplay=\"display\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;padding: ;\" text=\"bind:GOALUNT_PRICE\" mask=\"#,##0.00\" editautoselect=\"true\" editdisplay=\"edit\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:GOALAMT\" mask=\"#,##0\" editautoselect=\"true\"/><Cell col=\"10\" displaytype=\"date\" edittype=\"date\" style=\"align: ;\" text=\"bind:DLV_REQ_DAY\" mask=\"yyyy.MM.dd\" editautoselect=\"true\" expandsize=\"13\" calendardisplay=\"edit\" calendardisplaynulltype=\"none\"/><Cell col=\"11\" displaytype=\"normal\" edittype=\"none\" style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:RMARK\" editdisplay=\"edit\"/><Cell col=\"12\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:REQR_NM\"/><Cell col=\"13\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:PR_NO\" maskchar=\" \"/></Band></Format><Format id=\"VMODE\"><Columns><Column size=\"55\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"90\"/><Column size=\"300\"/><Column size=\"90\"/><Column size=\"55\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"75\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"품번\"/><Cell col=\"1\" text=\"창고\"/><Cell col=\"2\" text=\"품목분류\"/><Cell col=\"3\" text=\"품목코드\"/><Cell col=\"4\" text=\"품목명\"/><Cell col=\"5\" text=\"수량\"/><Cell col=\"6\" text=\"단위\"/><Cell col=\"7\" text=\"단가\"/><Cell col=\"8\" text=\"금액\"/><Cell col=\"9\" text=\"납품요청일자\"/><Cell col=\"10\" text=\"요청자\"/><Cell col=\"11\" text=\"구매요청번호\"/><Cell col=\"12\" text=\"비고\"/><Cell col=\"13\" text=\"파일수\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" style=\"align:center;padding:3 3 3 3;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:ITM_NO\" editdisplay=\"edit\"/><Cell col=\"1\" style=\"align:left;padding:3 3 3 3;background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:SL_NM\" editdisplay=\"edit\" expandshow=\"hide\" tooltiptext=\"bind:CD_FCTRY_NM\"/><Cell col=\"2\" style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:MTRL_GRP_NM\" editdisplay=\"edit\" expandshow=\"hide\" tooltiptext=\"bind:SRC_GRP_NM\"/><Cell col=\"3\" style=\"align:center;padding:3 3 3 3;background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:MTRL_CD\" editdisplay=\"edit\" expandshow=\"hide\" expandsize=\"23\" tooltiptext=\"bind:MTRL_CD\"/><Cell col=\"4\" style=\"align:left;padding:3 3 3 3;background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:MTRL_NM\" editdisplay=\"edit\" expandshow=\"hide\" tooltiptext=\"bind:MTRL_NM\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;padding:3 3 3 3;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:QTY\" mask=\"#,##0.00\" editdisplay=\"edit\" expandshow=\"hide\"/><Cell col=\"6\" style=\"padding:3 3 3 3;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:CD_UNIT_NM\" editdisplay=\"edit\" expandshow=\"hide\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;padding:3 3 3 3;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:GOALUNT_PRICE\" mask=\"#,##0.00\" editdisplay=\"edit\" expandshow=\"hide\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;padding:3 3 3 3;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:GOALAMT\" mask=\"#,##0\" editdisplay=\"edit\" expandshow=\"hide\"/><Cell col=\"9\" displaytype=\"date\" style=\"align:center;padding:2 2 2 2;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:DLV_REQ_DAY\" mask=\"yyyy.MM.dd\" editdisplay=\"edit\" expandshow=\"hide\" expandsize=\"13\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:REQR_NM\" editdisplay=\"edit\" expandshow=\"hide\"/><Cell col=\"11\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:PR_NO\"/><Cell col=\"12\" style=\"align:left;padding:3 3 3 3;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:RMARK\" editdisplay=\"edit\" expandshow=\"hide\" tooltiptext=\"bind:RMARK\"/><Cell col=\"13\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:ATTCH_FILE_CNT\" editdisplay=\"edit\" expandshow=\"hide\"/></Band></Format></Formats>");
            this.div_31.addChild(obj.name, obj);

            obj = new Div("div_4", "absolute", "0", "531", null, "24", "15", null, this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", null, "255", "24", null, "0", this.div_4);
            obj.set_taborder("0");
            obj.set_text("품목 상세정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 2 17");
            this.div_4.addChild(obj.name, obj);

            obj = new Div("div_41", "absolute", "0", "560", null, "323", "15", null, this);
            obj.set_taborder("6");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Edit("edtItemNo", "absolute", "0", "0", "118", "24", null, null, this.div_41);
            obj.set_taborder("21");
            obj.set_readonly("true");
            obj.set_cssclass("input_point");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("objNm").set("품번");
            this.div_41.addChild(obj.name, obj);
            obj = new Combo("cboItemChg", "absolute", "120", "0", "386", "24", null, null, this.div_41);
            this.div_41.addChild(obj.name, obj);
            obj.set_taborder("22");
            obj.set_readonly("true");
            obj.set_innerdataset("dsPoItem");
            obj.set_codecolumn("PO_ITEM_ID");
            obj.set_datacolumn("MTRL_NM");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("품목명");
            obj = new Button("btnPoItemRowUp", "absolute", "508", "2", "21", "21", null, null, this.div_41);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_ListUp");
            obj.getSetter("objNm").set("Up");
            this.div_41.addChild(obj.name, obj);
            obj = new Button("btnPoItemRowDown", "absolute", "531", "2", "21", "21", null, null, this.div_41);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_ListDown");
            obj.getSetter("objNm").set("Down");
            this.div_41.addChild(obj.name, obj);
            obj = new Tab("Tab01", "absolute", "0", "34", null, "225", "0", null, this.div_41);
            obj.set_taborder("25");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            this.div_41.addChild(obj.name, obj);
            obj = new Tabpage("tabp01", this.div_41.Tab01);
            obj.set_text("상세데이터");
            obj.style.set_background("white");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("상세데이터");
            this.div_41.Tab01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "5", null, "33", "0", null, this.div_41.Tab01.tabp01);
            obj.set_taborder("74");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staStrCd", "absolute", "0", "5", "171", "33", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("75");
            obj.set_text("품목분류");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "37", null, "33", "0", null, this.div_41.Tab01.tabp01);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staMtrl", "absolute", "0", "37", "171", "33", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("77");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("품목코드");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "69", null, "33", "0", null, this.div_41.Tab01.tabp01);
            obj.set_taborder("78");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staPoPrice", "absolute", "474", "69", "160", "33", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("79");
            obj.set_text("단가");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("단가");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staQtyUnit", "absolute", "0", "69", "171", "33", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("80");
            obj.set_text("수량/단위");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("수량/단위");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staAmtVat", "absolute", "794", "69", "160", "33", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("81");
            obj.set_text("금액");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("카드 승인번호");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtStrCd", "absolute", "177", "9", "100", "24", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("82");
            obj.set_readonly("true");
            obj.set_cssclass("edt_default_r");
            obj.getSetter("objNm").set("품목분류코드");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtSlNm", "absolute", "282", "9", "193", "24", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("83");
            obj.set_readonly("true");
            obj.set_cssclass("edt_default_r");
            obj.style.set_selectbackground("black");
            obj.getSetter("objNm").set("품목분류명");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtMtrlNm", "absolute", "282", "41", "193", "24", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("84");
            obj.set_readonly("true");
            obj.set_cssclass("edt_default_r");
            obj.style.set_selectbackground("black");
            obj.getSetter("objNm").set("품목명");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtMtrlCd", "absolute", "177", "41", "100", "24", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("85");
            obj.set_readonly("true");
            obj.set_cssclass("edt_default_r");
            obj.getSetter("objNm").set("품목코드");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new MaskEdit("maeQty", "absolute", "177", "73", "100", "24", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("86");
            obj.set_mask("#,##0.00");
            obj.set_cssclass("input_point");
            obj.getSetter("objNm").set("수량");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Combo("cboUnit", "absolute", "282", "73", "90", "24", null, null, this.div_41.Tab01.tabp01);
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("87");
            obj.set_innerdataset("ds_cdCM11");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("단위");
            obj = new MaskEdit("maePrice", "absolute", "639", "73", "149", "24", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("88");
            obj.set_mask("#,##0.00");
            obj.set_cssclass("mae_default");
            obj.getSetter("objNm").set("단가");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new MaskEdit("maePoAmt", "absolute", "958", "73", "220", "24", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("89");
            obj.set_mask("#,##0");
            obj.set_cssclass("input_point");
            obj.style.set_color("blue");
            obj.style.set_font("bold 10 Dotum");
            obj.getSetter("objNm").set("금액");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staPoItmStts", "absolute", "794", "5", "160", "33", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("90");
            obj.set_text("창고");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("창고");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtItemStatus", "absolute", "958", "9", "196", "24", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("91");
            obj.set_cssclass("edt_default_r");
            obj.getSetter("objNm").set("창고명");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Button("btnMtrl", "absolute", "480", "9", "24", "24", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("92");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("품목검색 버튼");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Button("btnMtrl00", "absolute", "480", "41", "24", "24", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("93");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("품목검색 버튼");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Tabpage("tabp02", this.div_41.Tab01);
            obj.set_text("품목 특이사항");
            obj.getSetter("objNm").set("품목 특이사항");
            this.div_41.Tab01.addChild(obj.name, obj);
            obj = new TextArea("txtItemTxt", "absolute", "0", "5", null, "131", "0", null, this.div_41.Tab01.tabp02);
            obj.set_taborder("0");
            obj.set_scrollbars("none");
            obj.set_wordwrap("char");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("500");
            obj.getSetter("objNm").set("품목 특이사항");
            this.div_41.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Tabpage("tabp03", this.div_41.Tab01);
            obj.set_text("첨부파일");
            obj.set_url("CCOMP::CompNFileUpDown.xfdl");
            obj.getSetter("objNm").set("첨부파일");
            this.div_41.Tab01.addChild(obj.name, obj);

            obj = new Div("div_51", "absolute", "0", "816", null, "258", "15", null, this);
            obj.set_taborder("7");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("DIV-대상업체 상세");
            this.addChild(obj.name, obj);
            obj = new Grid("dsTndrPtnr", "absolute", "0%", "69", null, "164", "0%", null, this.div_51);
            obj.set_taborder("2");
            obj.set_binddataset("dsTndrPtnr");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("comboselect");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_cellclickbound("cell");
            obj.getSetter("objNm").set("대상업체 그리드");
            obj._setContents("<Formats><Format id=\"MMODE\"><Columns><Column size=\"55\"/><Column size=\"120\"/><Column size=\"450\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"55\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"평가\"/><Cell col=\"1\" text=\"사업자번호\"/><Cell col=\"2\" text=\"협력사명\"/><Cell col=\"3\" text=\"견적담당자\"/><Cell col=\"4\" text=\"견적금액\"/><Cell col=\"5\" text=\"삭제\"/></Band><Band id=\"body\"><Cell style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:EVAL_POINT\"/><Cell col=\"1\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:BIZ_NO\" mask=\"@@@-@@-@@@@@\"/><Cell col=\"2\" style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:PTNR_NM\"/><Cell col=\"3\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;color:#0044ffff;\" text=\"bind:SBMTR_NM\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:RFQ_AMT\" mask=\"#,##0.00\"/><Cell col=\"5\" displaytype=\"button\" edittype=\"button\" text=\"삭제\"/></Band></Format><Format id=\"VMODE\"><Columns><Column size=\"51\"/><Column size=\"115\"/><Column size=\"676\"/><Column size=\"120\"/><Column size=\"110\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"평가\"/><Cell col=\"1\" text=\"사업자번호\"/><Cell col=\"2\" text=\"협력사명\"/><Cell col=\"3\" text=\"견적담당자\"/><Cell col=\"4\" text=\"견적금액\"/></Band><Band id=\"body\"><Cell text=\"bind:EVAL_POINT\"/><Cell col=\"1\" cssclass=\"cell_link\" text=\"bind:BIZ_NO\" mask=\"@@@-@@-@@@@@\"/><Cell col=\"2\" style=\"align:left;\" cssclass=\"cell_link\" text=\"bind:PTNR_NM\"/><Cell col=\"3\" text=\"bind:SBMTR_NM\"/><Cell col=\"4\" displaytype=\"number\" text=\"bind:RFQ_AMT\" mask=\"#,##0.00\"/></Band></Format></Formats>");
            this.div_51.addChild(obj.name, obj);
            obj = new Div("div_00", "absolute", "0", "38", null, "24", "-2", null, this.div_51);
            obj.set_taborder("3");
            this.div_51.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", null, "255", "24", null, "0", this.div_51.div_00);
            obj.set_taborder("6");
            obj.set_text("대상업체");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 2 17");
            this.div_51.div_00.addChild(obj.name, obj);
            obj = new Button("btn_ptnrAdd", "absolute", null, "0", "102", "24", "3", null, this.div_51.div_00);
            obj.set_taborder("7");
            obj.set_text(" 대상업체추가");
            obj.set_cssclass("btn_WF_Add");
            obj.getSetter("objNm").set("대상업체 추가버튼");
            obj.getSetter("lbcd").set("");
            this.div_51.div_00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 34, this.div_1,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_cssclass("div_WF_SearchBg");
            		p.getSetter("objNm").set("DIV-입찰 진행 상세 ");

            	}
            );
            this.div_1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.div_2,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.getSetter("objNm").set("DIV-평가서 타이틀");

            	}
            );
            this.div_2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1042, 218, this.div_21.Tab01.tabp01,
            	//-- Layout function
            	function(p) {
            		p.set_text("기본정보");
            		p.set_scrollbars("none");
            		p.getSetter("lbcd").set("");
            		p.getSetter("objNm").set("기본정보");

            	}
            );
            this.div_21.Tab01.tabp01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_21.Tab01.tabp02,
            	//-- Layout function
            	function(p) {
            		p.set_text("입찰설정");

            	}
            );
            this.div_21.Tab01.tabp02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_21.Tab01.tabp03,
            	//-- Layout function
            	function(p) {
            		p.set_text("ROUND");
            		p.getSetter("objNm").set("특이사항");

            	}
            );
            this.div_21.Tab01.tabp03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_21.Tab01.tabpage7,
            	//-- Layout function
            	function(p) {
            		p.set_text("공개설명회");

            	}
            );
            this.div_21.Tab01.tabpage7.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_21.Tab01.tabp05,
            	//-- Layout function
            	function(p) {
            		p.set_text("입찰담당자");
            		p.getSetter("objNm").set("찰입찰담당");

            	}
            );
            this.div_21.Tab01.tabp05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_21.Tab01.tabp06,
            	//-- Layout function
            	function(p) {
            		p.set_text("특이사항");
            		p.getSetter("objNm").set("");

            	}
            );
            this.div_21.Tab01.tabp06.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 208, this.div_21,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");

            	}
            );
            this.div_21.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.div_3,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.getSetter("objNm").set("DIV-평가서 타이틀");

            	}
            );
            this.div_3.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 200, this.div_31,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");

            	}
            );
            this.div_31.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.div_4,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");

            	}
            );
            this.div_4.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1042, 158, this.div_41.Tab01.tabp01,
            	//-- Layout function
            	function(p) {
            		p.set_text("상세데이터");
            		p.style.set_background("white");
            		p.set_scrollbars("none");
            		p.getSetter("objNm").set("상세데이터");

            	}
            );
            this.div_41.Tab01.tabp01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_41.Tab01.tabp02,
            	//-- Layout function
            	function(p) {
            		p.set_text("품목 특이사항");
            		p.getSetter("objNm").set("품목 특이사항");

            	}
            );
            this.div_41.Tab01.tabp02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1042, 189, this.div_41,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.set_scrollbars("none");

            	}
            );
            this.div_41.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.div_51.div_00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");

            	}
            );
            this.div_51.div_00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 258, this.div_51,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("7");
            		p.set_scrollbars("none");
            		p.getSetter("objNm").set("DIV-대상업체 상세");

            	}
            );
            this.div_51.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1200, 1135, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("경쟁입찰상세");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item51","div_1.edtDocNo","value","dsTndr","TNDR_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item54","div_1.cboDocType","value","dsTndr","CD_DOC_CTGR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","div_21.Tab01.tabp06.TextArea00","value","dsTndr","RMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item97","div_21.Tab01.tabp01.maeTotAmt","value","dsTndr","GOALAMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item104","div_21.Tab01.tabp01.edtTtl","value","dsTndr","TTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item106","div_21.Tab01.tabp01.cboBidCur","value","dsTndr","CD_BID_CRNC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item108","div_21.Tab01.tabp01.edtCardAprvNo","value","dsPo","CARD_APRV_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item115","div_21.Tab01.tabp01.cboPayCond","value","dsTndr","CD_PYMT_CNDTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item139","div_21.Tab01.tabp02.cboPoCrnc","value","dsTndr","CD_TNDR_MTHD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","div_21.Tab01.tabp05.edtFax","value","dsTndr","FAX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","div_21.Tab01.tabp05.edtEmail","value","dsTndr","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","div_21.Tab01.tabp05.edtTel","value","dsTndr","TEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","div_21.Tab01.tabp05.edtWrtrNm","value","dsTndr","CHRGR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","div_21.Tab01.tabp05.edtWrtrId","value","dsTndr","CHRGR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","div_21.Tab01.tabp01.edtRnd","value","dsTndr","TNDR_ODR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_21.Tab01.tabp01.cal_tndrAtdCloseDay","value","dsTndr","TNDR_ATD_CLOSE_DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","div_21.Tab01.tabp01.chkDlvOk","value","dsTndr","ALT_PRE_BID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","div_21.Tab01.tabp01.chkDlvOk00","value","dsTndr","ALT_TMP_BID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","div_21.Tab01.tabp01.chkDlvOk01","value","dsTndr","ALT_CNFDNC_OBY_AGRMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","div_21.Tab01.tabp01.chkDlvOk02","value","dsTndr","ALT_CERT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","div_21.Tab01.tabp01.edtLowestBid","value","dsTndr","TNDR_LOW_AMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","div_21.Tab01.tabp01.cboStat","value","dsTndr","CD_TNDR_STTS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","div_21.Tab01.tabp02.rdoPartialDlv","value","dsTndr","ALT_TOT_BID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","div_21.Tab01.tabp02.chkComOpen","value","dsTndr","ALT_ATD_PTNR_OPEN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","div_21.Tab01.tabp02.edtComCnt","value","dsTndr","LPRC_OPEN_PTNR_CNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","div_21.Tab01.tabp02.chkApp","value","dsTndr","ALT_PUR_AMT_APLY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","div_21.Tab01.tabp02.chkOpen","value","dsTndr","ALT_PUR_AMT_OPEN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","div_21.Tab01.tabp02.chkLowestAmtOpen","value","dsTndr","ALT_LPRC_AMT_OPEN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","div_21.Tab01.tabp02.chkLowestComOpen","value","dsTndr","ALT_LPRC_PTNR_OPEN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","div_21.Tab01.tabp02.chkDlvOk04","value","dsTndr","ALT_LOW_FAIL_APLY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","div_21.Tab01.tabp02.edtExchgRmark01","value","dsTndr","TNDR_LOW_AMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","div_21.Tab01.tabp02.chkFinalRfq","value","dsTndr","ALT_LST_RFQ");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","div_21.Tab01.tabp02.cboPoCrnc00","value","dsTndr","CD_BID_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item61","div_21.Tab01.tabpage7.edtTtl","value","dsTndr","OPEN_EXPLN_AREA");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item64","div_21.Tab01.tabpage7.rdo_altOpenExpln","value","dsTndr","ALT_OPEN_EXPLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item48","div_21.Tab01.tabpage7.TextArea00","value","dsTndr","OPEN_EXPLN_ATTN_CNDTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_21.Tab01.tabp01.mae_tndrAtdCloseTime","value","dsTndr","TNDR_ATD_CLOSE_TIME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","div_21.Tab01.tabp03.sp_roundCnt","value","dsTndr","ROUND_CNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item52","div_21.Tab01.tabpage7.cd_cDay","value","dsTndr","OPEN_EXPLN_DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item58","div_21.Tab01.tabpage7.ed_roundStrTime00","value","dsTndr","OPEN_EXPLN_TIME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item59","div_21.Tab01.tabpage7.ed_roundStrTime","value","dsTndr","OPEN_EXPLN_DR_TIME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item39","div_41.Tab01.tabp04.edt_ptnrId","value","dsPoItem","PTNR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item40","div_41.Tab01.tabp04.edt_ptnrNm","value","dsPoItem","PTNR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","div_41.Tab01.tabp04.edt_zipCd","value","dsPoItem","ZIP_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item42","div_41.Tab01.tabp04.edt_addr1","value","dsPoItem","ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item43","div_41.Tab01.tabp04.edt_addr2","value","dsPoItem","DTL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item44","div_41.Tab01.tabp04.edt_dlvContent","value","dsPoItem","FWD_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item49","div_41.Tab01.tabp09.edt_confirmUser","value","dsPoItem","RCVR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","div_41.Tab01.tabp03.edt_acntCd","value","dsPoItem","ACNT_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","div_41.Tab01.tabp03.edt_costCd","value","dsPoItem","COST_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","div_41.Tab01.tabp03.edt_accNm","value","dsPoItem","ACNT_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","div_41.Tab01.tabp03.edt_costNm","value","dsPoItem","COST_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","div_41.Tab01.tabp02.grd_rfqItem","binddataset","dsPoItemDlv","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item45","div_41.Tab01.tabp05.txt_itemTxt","value","dsPoItem","RMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item63","div_41.Tab01.tabp09.ma_confirmDt","value","dsPoItem","RCV_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item122","div_41.Tab01.tabp01.edtStrCd","value","dsTndrItem","MTRL_GRP_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item123","div_41.Tab01.tabp01.edtSlNm","value","dsTndrItem","MTRL_GRP_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item126","div_41.Tab01.tabp01.edtMtrlNm","value","dsTndrItem","MTRL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item127","div_41.Tab01.tabp01.edtMtrlCd","value","dsTndrItem","MTRL_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item128","div_41.Tab01.tabp01.maeQty","value","dsTndrItem","QTY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item129","div_41.Tab01.tabp01.cboUnit","value","dsTndrItem","CD_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item132","div_41.Tab01.tabp01.maePrice","value","dsTndrItem","GOALUNT_PRICE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","div_41.Tab01.tabp01.maePoAmt","value","dsTndrItem","GOALAMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","div_41.Tab01.tabp04.edtCnfrmUser","value","dsPoItem","RCVR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item38","div_41.Tab01.tabp04.maeCnfrmDt","value","dsPoItem","RCV_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","div_41.Tab01.tabp01.edtItemStatus","value","dsTndrItem","SL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item53","div_41.edtItemNo","value","dsTndrItem","ITM_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item57","div_41.cboItemChg","text","dsTndrItem","MTRL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item50","div_41.Tab01.tabp02.txtItemTxt","value","dsTndrItem","RMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_1Vi","div_1","visible","dsObjBindVi","div_1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_1En","div_1","enable","dsObjBindEn","div_1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDocNoVi","div_1.edtDocNo","visible","dsObjBindVi","edtDocNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDocNoEn","div_1.edtDocNo","readonly","dsObjBindEn","edtDocNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboDocTypeVi","div_1.cboDocType","visible","dsObjBindVi","cboDocType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboDocTypeEn","div_1.cboDocType","readonly","dsObjBindEn","cboDocType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_2Vi","div_2","visible","dsObjBindVi","div_2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_2En","div_2","enable","dsObjBindEn","div_2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_21Vi","div_21","visible","dsObjBindVi","div_21");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_21En","div_21","enable","dsObjBindEn","div_21");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab01Vi","div_21.Tab01","visible","dsObjBindVi","Tab01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab01En","div_21.Tab01","enable","dsObjBindEn","Tab01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp01Vi","div_21.Tab01.tabp01","visible","dsObjBindVi","tabp01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp01En","div_21.Tab01.tabp01","enable","dsObjBindEn","tabp01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoDayVi","div_21.Tab01.tabp01.staPoDay","visible","dsObjBindVi","staPoDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoDayEn","div_21.Tab01.tabp01.staPoDay","enable","dsObjBindEn","staPoDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTtlVi","div_21.Tab01.tabp01.staTtl","visible","dsObjBindVi","staTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTtlEn","div_21.Tab01.tabp01.staTtl","enable","dsObjBindEn","staTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoCtgrVi","div_21.Tab01.tabp01.staPoCtgr","visible","dsObjBindVi","staPoCtgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoCtgrEn","div_21.Tab01.tabp01.staPoCtgr","enable","dsObjBindEn","staPoCtgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAmtVatVi","div_21.Tab01.tabp01.staAmtVat","visible","dsObjBindVi","staAmtVat");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAmtVatEn","div_21.Tab01.tabp01.staAmtVat","enable","dsObjBindEn","staAmtVat");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staDlvAreaVi","div_21.Tab01.tabp01.staDlvArea","visible","dsObjBindVi","staDlvArea");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staDlvAreaEn","div_21.Tab01.tabp01.staDlvArea","enable","dsObjBindEn","staDlvArea");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoAmtVi","div_21.Tab01.tabp01.staPoAmt","visible","dsObjBindVi","staPoAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoAmtEn","div_21.Tab01.tabp01.staPoAmt","enable","dsObjBindEn","staPoAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPtnrVi","div_21.Tab01.tabp01.staPtnr","visible","dsObjBindVi","staPtnr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPtnrEn","div_21.Tab01.tabp01.staPtnr","enable","dsObjBindEn","staPtnr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("maeTotAmtVi","div_21.Tab01.tabp01.maeTotAmt","visible","dsObjBindVi","maeTotAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("maeTotAmtEn","div_21.Tab01.tabp01.maeTotAmt","readonly","dsObjBindEn","maeTotAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTtlVi","div_21.Tab01.tabp01.edtTtl","visible","dsObjBindVi","edtTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTtlEn","div_21.Tab01.tabp01.edtTtl","readonly","dsObjBindEn","edtTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboPoCtgrVi","div_21.Tab01.tabp01.cboBidCur","visible","dsObjBindVi","cboPoCtgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboPoCtgrEn","div_21.Tab01.tabp01.cboBidCur","readonly","dsObjBindEn","cboPoCtgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCardAprvNoVi","div_21.Tab01.tabp01.edtCardAprvNo","visible","dsObjBindVi","edtCardAprvNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCardAprvNoEn","div_21.Tab01.tabp01.edtCardAprvNo","readonly","dsObjBindEn","edtCardAprvNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboDlvAddrVi","div_21.Tab01.tabp01.cboPayCond","visible","dsObjBindVi","cboDlvAddr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboDlvAddrEn","div_21.Tab01.tabp01.cboPayCond","readonly","dsObjBindEn","cboDlvAddr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTtl00Vi","div_21.Tab01.tabp01.edtRnd","visible","dsObjBindVi","edtTtl00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTtl00En","div_21.Tab01.tabp01.edtRnd","readonly","dsObjBindEn","edtTtl00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRoundVi","div_21.Tab01.tabp01.edtRound","visible","dsObjBindVi","edtRound");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRoundEn","div_21.Tab01.tabp01.edtRound","enable","dsObjBindEn","edtRound");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calPoDay00Vi","div_21.Tab01.tabp01.cal_tndrAtdCloseDay","visible","dsObjBindVi","calPoDay00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calPoDay00En","div_21.Tab01.tabp01.cal_tndrAtdCloseDay","readonly","dsObjBindEn","calPoDay00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRound01Vi","div_21.Tab01.tabp01.edtRound01","visible","dsObjBindVi","edtRound01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRound01En","div_21.Tab01.tabp01.edtRound01","enable","dsObjBindEn","edtRound01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkDlvOkVi","div_21.Tab01.tabp01.chkDlvOk","visible","dsObjBindVi","chkDlvOk");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkDlvOkEn","div_21.Tab01.tabp01.chkDlvOk","readonly","dsObjBindEn","chkDlvOk");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkDlvOk00Vi","div_21.Tab01.tabp01.chkDlvOk00","visible","dsObjBindVi","chkDlvOk00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkDlvOk00En","div_21.Tab01.tabp01.chkDlvOk00","readonly","dsObjBindEn","chkDlvOk00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkDlvOk01Vi","div_21.Tab01.tabp01.chkDlvOk01","visible","dsObjBindVi","chkDlvOk01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkDlvOk01En","div_21.Tab01.tabp01.chkDlvOk01","readonly","dsObjBindEn","chkDlvOk01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkDlvOk02Vi","div_21.Tab01.tabp01.chkDlvOk02","visible","dsObjBindVi","chkDlvOk02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkDlvOk02En","div_21.Tab01.tabp01.chkDlvOk02","readonly","dsObjBindEn","chkDlvOk02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPymtCndtn00Vi","div_21.Tab01.tabp01.staPymtCndtn00","visible","dsObjBindVi","staPymtCndtn00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPymtCndtn00En","div_21.Tab01.tabp01.staPymtCndtn00","enable","dsObjBindEn","staPymtCndtn00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTtl02Vi","div_21.Tab01.tabp01.edtLowestBid","visible","dsObjBindVi","edtTtl02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTtl02En","div_21.Tab01.tabp01.edtLowestBid","readonly","dsObjBindEn","edtTtl02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboPoCtgr00Vi","div_21.Tab01.tabp01.cboStat","visible","dsObjBindVi","cboPoCtgr00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboPoCtgr00En","div_21.Tab01.tabp01.cboStat","readonly","dsObjBindEn","cboPoCtgr00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRound02Vi","div_21.Tab01.tabp01.edtRound02","visible","dsObjBindVi","edtRound02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRound02En","div_21.Tab01.tabp01.edtRound02","enable","dsObjBindEn","edtRound02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mae_tndrAtdCloseTimeVi","div_21.Tab01.tabp01.mae_tndrAtdCloseTime","visible","dsObjBindVi","mae_tndrAtdCloseTime");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mae_tndrAtdCloseTimeEn","div_21.Tab01.tabp01.mae_tndrAtdCloseTime","readonly","dsObjBindEn","mae_tndrAtdCloseTime");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp02Vi","div_21.Tab01.tabp02","visible","dsObjBindVi","tabp02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp02En","div_21.Tab01.tabp02","enable","dsObjBindEn","tabp02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staExchgRtVi","div_21.Tab01.tabp02.staExchgRt","visible","dsObjBindVi","staExchgRt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staExchgRtEn","div_21.Tab01.tabp02.staExchgRt","enable","dsObjBindEn","staExchgRt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoCrncVi","div_21.Tab01.tabp02.staPoCrnc","visible","dsObjBindVi","staPoCrnc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoCrncEn","div_21.Tab01.tabp02.staPoCrnc","enable","dsObjBindEn","staPoCrnc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboPoCrncVi","div_21.Tab01.tabp02.cboPoCrnc","visible","dsObjBindVi","cboPoCrnc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboPoCrncEn","div_21.Tab01.tabp02.cboPoCrnc","readonly","dsObjBindEn","cboPoCrnc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staExchgRt00Vi","div_21.Tab01.tabp02.staExchgRt00","visible","dsObjBindVi","staExchgRt00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staExchgRt00En","div_21.Tab01.tabp02.staExchgRt00","enable","dsObjBindEn","staExchgRt00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staExchgRt01Vi","div_21.Tab01.tabp02.staExchgRt01","visible","dsObjBindVi","staExchgRt01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staExchgRt01En","div_21.Tab01.tabp02.staExchgRt01","enable","dsObjBindEn","staExchgRt01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staExchgRt02Vi","div_21.Tab01.tabp02.staExchgRt02","visible","dsObjBindVi","staExchgRt02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staExchgRt02En","div_21.Tab01.tabp02.staExchgRt02","enable","dsObjBindEn","staExchgRt02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("rdoPartialDlvVi","div_21.Tab01.tabp02.rdoPartialDlv","visible","dsObjBindVi","rdoPartialDlv");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("rdoPartialDlvEn","div_21.Tab01.tabp02.rdoPartialDlv","readonly","dsObjBindEn","rdoPartialDlv");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoCrnc00Vi","div_21.Tab01.tabp02.staPoCrnc00","visible","dsObjBindVi","staPoCrnc00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoCrnc00En","div_21.Tab01.tabp02.staPoCrnc00","enable","dsObjBindEn","staPoCrnc00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoCrnc01Vi","div_21.Tab01.tabp02.staPoCrnc01","visible","dsObjBindVi","staPoCrnc01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoCrnc01En","div_21.Tab01.tabp02.staPoCrnc01","enable","dsObjBindEn","staPoCrnc01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoCrnc02Vi","div_21.Tab01.tabp02.staPoCrnc02","visible","dsObjBindVi","staPoCrnc02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoCrnc02En","div_21.Tab01.tabp02.staPoCrnc02","enable","dsObjBindEn","staPoCrnc02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkDlvOk_24Vi","div_21.Tab01.tabp02.chkComOpen","visible","dsObjBindVi","chkDlvOk_24");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkDlvOk_24En","div_21.Tab01.tabp02.chkComOpen","readonly","dsObjBindEn","chkDlvOk_24");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtExchgRmark00Vi","div_21.Tab01.tabp02.edtComCnt","visible","dsObjBindVi","edtExchgRmark00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtExchgRmark00En","div_21.Tab01.tabp02.edtComCnt","readonly","dsObjBindEn","edtExchgRmark00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkDlvOk00_25Vi","div_21.Tab01.tabp02.chkApp","visible","dsObjBindVi","chkDlvOk00_25");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkDlvOk00_25En","div_21.Tab01.tabp02.chkApp","readonly","dsObjBindEn","chkDlvOk00_25");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkDlvOk01_26Vi","div_21.Tab01.tabp02.chkOpen","visible","dsObjBindVi","chkDlvOk01_26");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkDlvOk01_26En","div_21.Tab01.tabp02.chkOpen","readonly","dsObjBindEn","chkDlvOk01_26");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staWon01Vi","div_21.Tab01.tabp02.staWon01","visible","dsObjBindVi","staWon01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staWon01En","div_21.Tab01.tabp02.staWon01","enable","dsObjBindEn","staWon01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkDlvOk02_27Vi","div_21.Tab01.tabp02.chkLowestAmtOpen","visible","dsObjBindVi","chkDlvOk02_27");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkDlvOk02_27En","div_21.Tab01.tabp02.chkLowestAmtOpen","readonly","dsObjBindEn","chkDlvOk02_27");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkDlvOk03Vi","div_21.Tab01.tabp02.chkLowestComOpen","visible","dsObjBindVi","chkDlvOk03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkDlvOk03En","div_21.Tab01.tabp02.chkLowestComOpen","readonly","dsObjBindEn","chkDlvOk03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkDlvOk04Vi","div_21.Tab01.tabp02.chkDlvOk04","visible","dsObjBindVi","chkDlvOk04");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkDlvOk04En","div_21.Tab01.tabp02.chkDlvOk04","readonly","dsObjBindEn","chkDlvOk04");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtExchgRmark01Vi","div_21.Tab01.tabp02.edtExchgRmark01","visible","dsObjBindVi","edtExchgRmark01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtExchgRmark01En","div_21.Tab01.tabp02.edtExchgRmark01","readonly","dsObjBindEn","edtExchgRmark01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staWon00Vi","div_21.Tab01.tabp02.staWon00","visible","dsObjBindVi","staWon00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staWon00En","div_21.Tab01.tabp02.staWon00","enable","dsObjBindEn","staWon00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkDlvOk05Vi","div_21.Tab01.tabp02.chkFinalRfq","visible","dsObjBindVi","chkDlvOk05");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkDlvOk05En","div_21.Tab01.tabp02.chkFinalRfq","readonly","dsObjBindEn","chkDlvOk05");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboPoCrnc00Vi","div_21.Tab01.tabp02.cboPoCrnc00","visible","dsObjBindVi","cboPoCrnc00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboPoCrnc00En","div_21.Tab01.tabp02.cboPoCrnc00","readonly","dsObjBindEn","cboPoCrnc00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp03Vi","div_21.Tab01.tabp03","visible","dsObjBindVi","tabp03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp03En","div_21.Tab01.tabp03","enable","dsObjBindEn","tabp03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staExchgRt02_39Vi","div_21.Tab01.tabp03.staExchgRt02","visible","dsObjBindVi","staExchgRt02_39");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staExchgRt02_39En","div_21.Tab01.tabp03.staExchgRt02","enable","dsObjBindEn","staExchgRt02_39");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staExchgRt01_38Vi","div_21.Tab01.tabp03.staExchgRt01","visible","dsObjBindVi","staExchgRt01_38");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staExchgRt01_38En","div_21.Tab01.tabp03.staExchgRt01","enable","dsObjBindEn","staExchgRt01_38");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staExchgRt00_37Vi","div_21.Tab01.tabp03.staExchgRt00","visible","dsObjBindVi","staExchgRt00_37");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staExchgRt00_37En","div_21.Tab01.tabp03.staExchgRt00","enable","dsObjBindEn","staExchgRt00_37");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staExchgRt_34Vi","div_21.Tab01.tabp03.staExchgRt","visible","dsObjBindVi","staExchgRt_34");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staExchgRt_34En","div_21.Tab01.tabp03.staExchgRt","enable","dsObjBindEn","staExchgRt_34");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoCrnc_35Vi","div_21.Tab01.tabp03.staPoCrnc","visible","dsObjBindVi","staPoCrnc_35");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoCrnc_35En","div_21.Tab01.tabp03.staPoCrnc","enable","dsObjBindEn","staPoCrnc_35");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staWon01_48Vi","div_21.Tab01.tabp03.staWon01","visible","dsObjBindVi","staWon01_48");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staWon01_48En","div_21.Tab01.tabp03.staWon01","enable","dsObjBindEn","staWon01_48");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cd_roundDayVi","div_21.Tab01.tabp03.cd_roundDay","visible","dsObjBindVi","cd_roundDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cd_roundDayEn","div_21.Tab01.tabp03.cd_roundDay","readonly","dsObjBindEn","cd_roundDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mae_tndrAtdCloseTime_32Vi","div_21.Tab01.tabp03.mae_tndrAtdCloseTime","visible","dsObjBindVi","mae_tndrAtdCloseTime_32");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mae_tndrAtdCloseTime_32En","div_21.Tab01.tabp03.mae_tndrAtdCloseTime","readonly","dsObjBindEn","mae_tndrAtdCloseTime_32");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static03Vi","div_21.Tab01.tabp03.Static03","visible","dsObjBindVi","Static03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static03En","div_21.Tab01.tabp03.Static03","enable","dsObjBindEn","Static03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staWon00_53Vi","div_21.Tab01.tabp03.staWon00","visible","dsObjBindVi","staWon00_53");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staWon00_53En","div_21.Tab01.tabp03.staWon00","enable","dsObjBindEn","staWon00_53");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staWon02Vi","div_21.Tab01.tabp03.staWon02","visible","dsObjBindVi","staWon02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staWon02En","div_21.Tab01.tabp03.staWon02","enable","dsObjBindEn","staWon02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sp_roundCntVi","div_21.Tab01.tabp03.sp_roundCnt","visible","dsObjBindVi","sp_roundCnt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sp_roundCntEn","div_21.Tab01.tabp03.sp_roundCnt","readonly","dsObjBindEn","sp_roundCnt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sp_roundRateTimeVi","div_21.Tab01.tabp03.sp_roundRateTime","visible","dsObjBindVi","sp_roundRateTime");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sp_roundRateTimeEn","div_21.Tab01.tabp03.sp_roundRateTime","readonly","dsObjBindEn","sp_roundRateTime");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sp_roundTimeVi","div_21.Tab01.tabp03.sp_roundTime","visible","dsObjBindVi","sp_roundTime");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sp_roundTimeEn","div_21.Tab01.tabp03.sp_roundTime","readonly","dsObjBindEn","sp_roundTime");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btn_roundVi","div_21.Tab01.tabp03.btn_round","visible","dsObjBindVi","btn_round");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btn_roundEn","div_21.Tab01.tabp03.btn_round","enable","dsObjBindEn","btn_round");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabpage7Vi","div_21.Tab01.tabpage7","visible","dsObjBindVi","tabpage7");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabpage7En","div_21.Tab01.tabpage7","enable","dsObjBindEn","tabpage7");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTtl_9Vi","div_21.Tab01.tabpage7.staTtl","visible","dsObjBindVi","staTtl_9");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTtl_9En","div_21.Tab01.tabpage7.staTtl","enable","dsObjBindEn","staTtl_9");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTtl00Vi","div_21.Tab01.tabpage7.staTtl00","visible","dsObjBindVi","staTtl00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTtl00En","div_21.Tab01.tabpage7.staTtl00","enable","dsObjBindEn","staTtl00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTtl01Vi","div_21.Tab01.tabpage7.staTtl01","visible","dsObjBindVi","staTtl01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTtl01En","div_21.Tab01.tabpage7.staTtl01","enable","dsObjBindEn","staTtl01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTtl02Vi","div_21.Tab01.tabpage7.staTtl02","visible","dsObjBindVi","staTtl02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTtl02En","div_21.Tab01.tabpage7.staTtl02","enable","dsObjBindEn","staTtl02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTtl_16Vi","div_21.Tab01.tabpage7.edtTtl","visible","dsObjBindVi","edtTtl_16");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTtl_16En","div_21.Tab01.tabpage7.edtTtl","readonly","dsObjBindEn","edtTtl_16");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTtl03Vi","div_21.Tab01.tabpage7.staTtl03","visible","dsObjBindVi","staTtl03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTtl03En","div_21.Tab01.tabpage7.staTtl03","enable","dsObjBindEn","staTtl03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRound_21Vi","div_21.Tab01.tabpage7.edtRound","visible","dsObjBindVi","edtRound_21");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRound_21En","div_21.Tab01.tabpage7.edtRound","enable","dsObjBindEn","edtRound_21");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRound00Vi","div_21.Tab01.tabpage7.edtRound00","visible","dsObjBindVi","edtRound00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRound00En","div_21.Tab01.tabpage7.edtRound00","enable","dsObjBindEn","edtRound00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("TextArea00Vi","div_21.Tab01.tabpage7.TextArea00","visible","dsObjBindVi","TextArea00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("TextArea00En","div_21.Tab01.tabpage7.TextArea00","readonly","dsObjBindEn","TextArea00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("rdo_altOpenExplnVi","div_21.Tab01.tabpage7.rdo_altOpenExpln","visible","dsObjBindVi","rdo_altOpenExpln");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("rdo_altOpenExplnEn","div_21.Tab01.tabpage7.rdo_altOpenExpln","readonly","dsObjBindEn","rdo_altOpenExpln");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cd_cDayVi","div_21.Tab01.tabpage7.cd_cDay","visible","dsObjBindVi","cd_cDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cd_cDayEn","div_21.Tab01.tabpage7.cd_cDay","readonly","dsObjBindEn","cd_cDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("ed_roundStrTime00Vi","div_21.Tab01.tabpage7.ed_roundStrTime00","visible","dsObjBindVi","ed_roundStrTime00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("ed_roundStrTime00En","div_21.Tab01.tabpage7.ed_roundStrTime00","readonly","dsObjBindEn","ed_roundStrTime00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("ed_roundStrTimeVi","div_21.Tab01.tabpage7.ed_roundStrTime","visible","dsObjBindVi","ed_roundStrTime");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("ed_roundStrTimeEn","div_21.Tab01.tabpage7.ed_roundStrTime","readonly","dsObjBindEn","ed_roundStrTime");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp05Vi","div_21.Tab01.tabp05","visible","dsObjBindVi","tabp05");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp05En","div_21.Tab01.tabp05","enable","dsObjBindEn","tabp05");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staWrtrVi","div_21.Tab01.tabp05.staWrtr","visible","dsObjBindVi","staWrtr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staWrtrEn","div_21.Tab01.tabp05.staWrtr","enable","dsObjBindEn","staWrtr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTelVi","div_21.Tab01.tabp05.staTel","visible","dsObjBindVi","staTel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTelEn","div_21.Tab01.tabp05.staTel","enable","dsObjBindEn","staTel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staEmailVi","div_21.Tab01.tabp05.staEmail","visible","dsObjBindVi","staEmail");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staEmailEn","div_21.Tab01.tabp05.staEmail","enable","dsObjBindEn","staEmail");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staFaxVi","div_21.Tab01.tabp05.staFax","visible","dsObjBindVi","staFax");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staFaxEn","div_21.Tab01.tabp05.staFax","enable","dsObjBindEn","staFax");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtFaxVi","div_21.Tab01.tabp05.edtFax","visible","dsObjBindVi","edtFax");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtFaxEn","div_21.Tab01.tabp05.edtFax","readonly","dsObjBindEn","edtFax");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtEmailVi","div_21.Tab01.tabp05.edtEmail","visible","dsObjBindVi","edtEmail");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtEmailEn","div_21.Tab01.tabp05.edtEmail","readonly","dsObjBindEn","edtEmail");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTelVi","div_21.Tab01.tabp05.edtTel","visible","dsObjBindVi","edtTel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTelEn","div_21.Tab01.tabp05.edtTel","readonly","dsObjBindEn","edtTel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtWrtrNmVi","div_21.Tab01.tabp05.edtWrtrNm","visible","dsObjBindVi","edtWrtrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtWrtrNmEn","div_21.Tab01.tabp05.edtWrtrNm","readonly","dsObjBindEn","edtWrtrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtWrtrIdVi","div_21.Tab01.tabp05.edtWrtrId","visible","dsObjBindVi","edtWrtrId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtWrtrIdEn","div_21.Tab01.tabp05.edtWrtrId","readonly","dsObjBindEn","edtWrtrId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnChrgrVi","div_21.Tab01.tabp05.btnChrgr","visible","dsObjBindVi","btnChrgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnChrgrEn","div_21.Tab01.tabp05.btnChrgr","enable","dsObjBindEn","btnChrgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp06Vi","div_21.Tab01.tabp06","visible","dsObjBindVi","tabp06");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp06En","div_21.Tab01.tabp06","enable","dsObjBindEn","tabp06");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("TextArea00_81Vi","div_21.Tab01.tabp06.TextArea00","visible","dsObjBindVi","TextArea00_81");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("TextArea00_81En","div_21.Tab01.tabp06.TextArea00","readonly","dsObjBindEn","TextArea00_81");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_3Vi","div_3","visible","dsObjBindVi","div_3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_3En","div_3","enable","dsObjBindEn","div_3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_31Vi","div_31","visible","dsObjBindVi","div_31");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_31En","div_31","enable","dsObjBindEn","div_31");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPagingVi","div_31.divPaging","visible","dsObjBindVi","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPagingEn","div_31.divPaging","enable","dsObjBindEn","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_4Vi","div_4","visible","dsObjBindVi","div_4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_4En","div_4","enable","dsObjBindEn","div_4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_41Vi","div_41","visible","dsObjBindVi","div_41");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_41En","div_41","enable","dsObjBindEn","div_41");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtItemNoVi","div_41.edtItemNo","visible","dsObjBindVi","edtItemNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtItemNoEn","div_41.edtItemNo","readonly","dsObjBindEn","edtItemNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboItemChgVi","div_41.cboItemChg","visible","dsObjBindVi","cboItemChg");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboItemChgEn","div_41.cboItemChg","readonly","dsObjBindEn","cboItemChg");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnPoItemRowUpVi","div_41.btnPoItemRowUp","visible","dsObjBindVi","btnPoItemRowUp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnPoItemRowUpEn","div_41.btnPoItemRowUp","enable","dsObjBindEn","btnPoItemRowUp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnPoItemRowDownVi","div_41.btnPoItemRowDown","visible","dsObjBindVi","btnPoItemRowDown");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnPoItemRowDownEn","div_41.btnPoItemRowDown","enable","dsObjBindEn","btnPoItemRowDown");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab01_6Vi","div_41.Tab01","visible","dsObjBindVi","Tab01_6");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab01_6En","div_41.Tab01","enable","dsObjBindEn","Tab01_6");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp01_7Vi","div_41.Tab01.tabp01","visible","dsObjBindVi","tabp01_7");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp01_7En","div_41.Tab01.tabp01","enable","dsObjBindEn","tabp01_7");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staStrCdVi","div_41.Tab01.tabp01.staStrCd","visible","dsObjBindVi","staStrCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staStrCdEn","div_41.Tab01.tabp01.staStrCd","enable","dsObjBindEn","staStrCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staMtrlVi","div_41.Tab01.tabp01.staMtrl","visible","dsObjBindVi","staMtrl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staMtrlEn","div_41.Tab01.tabp01.staMtrl","enable","dsObjBindEn","staMtrl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoPriceVi","div_41.Tab01.tabp01.staPoPrice","visible","dsObjBindVi","staPoPrice");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoPriceEn","div_41.Tab01.tabp01.staPoPrice","enable","dsObjBindEn","staPoPrice");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staQtyUnitVi","div_41.Tab01.tabp01.staQtyUnit","visible","dsObjBindVi","staQtyUnit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staQtyUnitEn","div_41.Tab01.tabp01.staQtyUnit","enable","dsObjBindEn","staQtyUnit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAmtVat_11Vi","div_41.Tab01.tabp01.staAmtVat","visible","dsObjBindVi","staAmtVat_11");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAmtVat_11En","div_41.Tab01.tabp01.staAmtVat","enable","dsObjBindEn","staAmtVat_11");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtStrCdVi","div_41.Tab01.tabp01.edtStrCd","visible","dsObjBindVi","edtStrCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtStrCdEn","div_41.Tab01.tabp01.edtStrCd","readonly","dsObjBindEn","edtStrCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSlNmVi","div_41.Tab01.tabp01.edtSlNm","visible","dsObjBindVi","edtSlNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSlNmEn","div_41.Tab01.tabp01.edtSlNm","readonly","dsObjBindEn","edtSlNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtMtrlNmVi","div_41.Tab01.tabp01.edtMtrlNm","visible","dsObjBindVi","edtMtrlNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtMtrlNmEn","div_41.Tab01.tabp01.edtMtrlNm","readonly","dsObjBindEn","edtMtrlNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtMtrlCdVi","div_41.Tab01.tabp01.edtMtrlCd","visible","dsObjBindVi","edtMtrlCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtMtrlCdEn","div_41.Tab01.tabp01.edtMtrlCd","readonly","dsObjBindEn","edtMtrlCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("maeQtyVi","div_41.Tab01.tabp01.maeQty","visible","dsObjBindVi","maeQty");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("maeQtyEn","div_41.Tab01.tabp01.maeQty","readonly","dsObjBindEn","maeQty");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboUnitVi","div_41.Tab01.tabp01.cboUnit","visible","dsObjBindVi","cboUnit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboUnitEn","div_41.Tab01.tabp01.cboUnit","readonly","dsObjBindEn","cboUnit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("maePriceVi","div_41.Tab01.tabp01.maePrice","visible","dsObjBindVi","maePrice");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("maePriceEn","div_41.Tab01.tabp01.maePrice","readonly","dsObjBindEn","maePrice");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("maePoAmtVi","div_41.Tab01.tabp01.maePoAmt","visible","dsObjBindVi","maePoAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("maePoAmtEn","div_41.Tab01.tabp01.maePoAmt","readonly","dsObjBindEn","maePoAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoItmSttsVi","div_41.Tab01.tabp01.staPoItmStts","visible","dsObjBindVi","staPoItmStts");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoItmSttsEn","div_41.Tab01.tabp01.staPoItmStts","enable","dsObjBindEn","staPoItmStts");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtItemStatusVi","div_41.Tab01.tabp01.edtItemStatus","visible","dsObjBindVi","edtItemStatus");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtItemStatusEn","div_41.Tab01.tabp01.edtItemStatus","readonly","dsObjBindEn","edtItemStatus");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnMtrlVi","div_41.Tab01.tabp01.btnMtrl","visible","dsObjBindVi","btnMtrl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnMtrlEn","div_41.Tab01.tabp01.btnMtrl","enable","dsObjBindEn","btnMtrl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnMtrl00Vi","div_41.Tab01.tabp01.btnMtrl00","visible","dsObjBindVi","btnMtrl00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnMtrl00En","div_41.Tab01.tabp01.btnMtrl00","enable","dsObjBindEn","btnMtrl00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp02_33Vi","div_41.Tab01.tabp02","visible","dsObjBindVi","tabp02_33");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp02_33En","div_41.Tab01.tabp02","enable","dsObjBindEn","tabp02_33");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txtItemTxtVi","div_41.Tab01.tabp02.txtItemTxt","visible","dsObjBindVi","txtItemTxt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txtItemTxtEn","div_41.Tab01.tabp02.txtItemTxt","readonly","dsObjBindEn","txtItemTxt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_51Vi","div_51","visible","dsObjBindVi","div_51");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_51En","div_51","enable","dsObjBindEn","div_51");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_00Vi","div_51.div_00","visible","dsObjBindVi","div_00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_00En","div_51.div_00","enable","dsObjBindEn","div_00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btn_ptnrAddVi","div_51.div_00.btn_ptnrAdd","visible","dsObjBindVi","btn_ptnrAdd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btn_ptnrAddEn","div_51.div_00.btn_ptnrAdd","enable","dsObjBindEn","btn_ptnrAdd");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompNFileUpDown.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompNFileUpDown.xfdl");
        };
        
        // User Script
        this.registerScript("BTndrDetail.xfdl", function(exports) {
        /**
         * @파일명			: BTndrDetail
         * @생성자			: 김승일
         * @생성일시		: 2019. 05. 20
         * @설명			: 경쟁입찰상세
         * @최종수정자		: 김승일
         * @최종수정일시	: 2019. 05. 20
        */ 

        /**
        	@var  this.fv_tndrNo
        	@desc 리스트화면에서 넘어오는 입찰번호
        */
        this.fv_tndrNo = "";			

        /**
        	@var  this.fv_tndrOdr
        	@desc 리스트화면에서 넘어오는 입찰차수
        */
        this.fv_tndrOdr = "";	

        /**
        	@var  this.fv_typeRfq
        	@desc 견적에서 입찰을 작성했는지 확인변수
        */
        this.fv_typeRfq = "";	

        /**
        	@var  this.fv_corexpKids
        	@desc 리스트화면에서 넘어오는 위방지변수
        */
        this.fv_corexpKids = "";

        
        this.pr_reqTndr = "";

        /**
        	@function	fnPreSave()
        	@desc   	저장 전 처리
        */ 
        this.fnPreSave = function()
        {
        	return true;
        }

        /**
        	@function	fnCommSave()
        	@desc   	(공통버튼)저장 프로세스
        */ 
        this.fnSave = function()
        {
        	if (!this.fnPreSave()) return false;
        	if(!this.fnPreSave()) return false;
        	
        	var sSvcID = "save";
        	var sController = "epro.tndr.service.BTndrService.tndSave";
        	var sInDatasets = "dsTndr=dsTndr dsTndrItem=dsTndrItem:A dsTndrRound=dsTndrRound:A dsTndrPtnr=dsTndrPtnr:U";
        	var sOutDatasets = "dsTndr=dsTndr";
        	var sCallbackFunc = "fnTrCallBack";
        	
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);

        }

        /**
        	@function	fn_commDelete()
        	@desc   	(공통버튼)삭제 프로세스
        */ 
        this.fnDelete = function()
        {
        	if(!gfnConfirm("삭제 하시겠습니까?")) return false;
        // 
        // 	var sSvcID = "BTndr_Del";
        // 	var sController = "BTndr_Del.do";
        // 	var sInDatasets = "in_tndr=ds_tndr in_tndrItem=ds_tndrItem";
        // 	var sOutDatasets = "";
        // 	var sCallbackFunc = "fn_trCallBack";
        // 	this.gfn_tran(sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);

        	var sSvcID = "delete";
        	var sController = "epro.tndr.service.BTndrService.deleteTndDel";
        	var sInDatasets = "dsTndr=dsTndr dsTndrItem=dsTndrItem";
        	var sOutDatasets = "";
        	var sCallbackFunc = "fnTrCallBack";
        	
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);

        	
        }

        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {
        	var param = [
        					   {code:"CM15", sSelectType:"S"}	//응찰통화
        					 , {code:"CM13", sSelectType:"S"}	//지급조건
        					 , {code:"CM10", sSelectType:"S"}	//문서유형
        					 , {code:"ET12", sSelectType:"S"}	//문서유형
        					 , {code:"ET20", sSelectType:"S"}	//입찰방식
        					 , {code:"ET30", sSelectType:"S"}	//
        					 , {code:"ET23", sSelectType:"S"}	//
        					 , {code:"CM20", sSelectType:"S"}	//공장
        					 , {code:"CM11", sSelectType:"S"}	//단위
        				];				
        	gfnGetCode(this, param);
        }

        /**
          * @함수명	: FormOninit
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.InitEventInfo(이벤트변수)
          * @desc     	: 폼 oninit이벤트
          */
        this.FormOninit = function(obj,e)
        {
        	this.fnSetCode();
        }

        
        /**
          * @함수명	: fnFormOnload
          * @input    	: obj:Form(폼 오브젝트), e:nexacr o.LoadEventInfo(이벤트변수)
          * @desc     	: 폼 onload이벤트
          */
        this.FormOnload = function(obj,e)
        {	
        	var cdTndrStts = gfnGetTmprData("CD_TNDR_STTS");
        	if(cdTndrStts == "ET20WRI"){//작성중
        		gfnSetObj("A");
        	}else{
        		gfnSetObj("B");
        	}
        	
        	
        	//그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기(그리드 컴포넌트, 페이징div 컴포넌트, 폼오브젝트(this))
         	//gfnSetGrdFunc(this.div_31.grdTndrItem, this.div_31.divPaging, this);
         	
        	//이전화면에서 넘어오는 파라미터를 받는다.
        	var fv_tndrNo = gfnGetTmprData("TNDR_NO");
        	var fv_tndrOdr = gfnGetTmprData("TNDR_ODR");
        	
        	var fv_corexpKids = gfnGetTmprData("COREXP_KIDS");
        	var fv_typeRfq = gfnGetTmprData("TYPE_RFQ");	
        	//파라미터를 받은 이후에는 파라미터를 를 초기화 해준다.
        	var fv_prReqTndrYn = gfnGetTmprData("PR_REQ_TNDR_YN");
        	var fv_prReqTndrData = gfnGetTmprData("PR_REQ_TNDR_DATA");	
        	
        	gfnClearTmprData();
        	
        	//파라미터가 존재하면 조회 
        	if("" != fv_tndrNo){
        		this.dsTndr.addRow();
        		this.dsTndr.setColumn(0,"BRANCH_CD",application.gdsUserInfo.getColumn(0,"BRANCH_CD"));
        		this.dsTndr.setColumn(0,"TNDR_NO",fv_tndrNo);
        		this.dsTndr.setColumn(0,"TNDR_ODR",fv_tndrOdr);		
        		this.dsTndr.setColumn(0,"COREXP_KIDS",fv_corexpKids);		
        		
        		// 시스템 공통함수 호출
        		this.fnSearch();
        	}else{//파라미터가 존재하지 않으면 구매유형선택팝업 호출
        		if(fv_prReqTndrYn != "" && fv_prReqTndrYn == "Y"){
        			//처음 로드시 추가
        			this.dsTndr.addRow();
        			this.pr_reqTndr(fv_prReqTndrData);
        		}else{
        			var sArg = { 
        					agv_doc_ctgr:this.dsTndr.getColumn(0,"CD_DOC_CTGR")
        					, agv_mode:"M" 
        					};
        			//this.gfnDialog("popupComDocType", "commPop::PPOPC100P00.xfdl", sArg, "fn_popCallBack");
        		}
        		
        		//신규 작성 시 파일내부의 Dataset을 초기화 시켜준다.
         		//this.gfnNewFileDsInit(this.dsTndr,this.dsTndrItem);
        	}
        	//FILE_JOB_1 : 데이터 조회 이후에 파일 정보를 조회하기 위해 동기화 한다.
        	//this.gfnFileCompInit(this.div_21.Tab01.tabp07, this.div_41.Tab01.tabp05);
        	
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
        this.fnSearch = function(svcId)
        {
        	if(!this.fnPreSearch()) return false;
        	
        	var sSvcID = "read";
        	var sController = "epro.tndr.service.BTndrService.tndrRead";
        	var sInDatasets = "dsTndr=dsTndr";
        	var sOutDatasets = "dsTndr=dsTndr dsTndrItem=dsTndrItem dsTndrRound=dsTndrRound dsTndrPtnr=dsTndrPtnr";
        	var sCallbackFunc = "fnTrCallBack";
        	
         	var	oPaging = [      
                             {inDs:this.dsCondition, grid:this.div_31.dsTndrItem, divPaging:this.div_31.divPaging}
                         ];
             gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc, oPaging);
        	
            //this.gfnFileTran(sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
        	@function	fn_fold_onclick()
        	@desc   	폴더접기
        */ 
        this.fnFoldOnclick = function(obj,e)
        {
        	this.gfnDivFold(obj);
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
        		//조회
        		case "read" :
        			
        		break;
        		
        		//저장
        		case "save" : 
        			this.fnSearch();
        		break;
        		
        		case "delete" :
        			
        		break;
        		default:
        		break;	
        	}
        }

        /**
        	@함수명	div_21_Tab01_tabp03_btn_round_onclick()
        	@desc   	라운드 적용버튼 클릭 이벤트
        */ 
        this.div_21_Tab01_tabp03_btn_round_onclick = function(obj,e)
        {
        	var vthis = this.div_21.Tab01.tabp03;	//적용버튼이 위치한 곳
        	
        	var rCnt = vthis.sp_roundCnt.value;		//적용횟수
        	var rData = vthis.cd_roundDay.value;	//적용일자
        	var rTime = this.div_21.Tab01.tabp03.mae_tndrAtdCloseTime.value;	//시작시간
        	var rDely = vthis.sp_roundRateTime.value;	//휴식시간
        	var rSrt = vthis.sp_roundTime.value;		//라운드간격
        	
        	if(null == rData){
        		alert("진행일자는 필수입력 사항입니다.");
        		return;
        	}
        	if("" == rTime){
        		alert("시작시간은 필수입력 사항입니다.");
        		return;
        	}
        	
        	this.dsTndrRound.deleteAll();
        	for(var i = 0 ; i < rCnt ; i++){
        		var nRow = this.dsTndrRound.addRow();
        		
        		this.dsTndrRound.setColumn(nRow,"ROUND_SEQ",vthis.grd_tndrRound.currentrow+1);                                            
        		this.dsTndrRound.setColumn(nRow,"TNDR_NO",this.dsTndr.getColumn(0,"TNDR_NO"));                                    
        		this.dsTndrRound.setColumn(nRow,"TNDR_ODR",this.dsTndr.getColumn(0,"TNDR_ODR"));                                    
        		this.dsTndrRound.setColumn(nRow,"PRGRS_DAY",rData);                                    
        		this.dsTndrRound.setColumn(nRow,"BGN_TIME",rTime);                                    
        		rTime = this.time_add(rTime,rDely);
        		this.dsTndrRound.setColumn(nRow,"END_TIME",rTime);                                    
        		this.dsTndrRound.setColumn(nRow,"CD_ROUND_NEXT","");                                        
        		rTime = this.time_add(rTime,rSrt);
        		this.dsTndrRound.setColumn(nRow,"CD_ROUND_NEXT","ET12NXT");  // 다음 라운드 진행
        		
        		this.dsTndrRound.setColumn(this.dsTndrRound.rowcount-1,"CD_ROUND_NEXT","ET12WIN");
        		this.dsTndr.setColumn(0,"ROUND_CNT",this.dsTndrRound.rowcount);
        	}
        }

        /**
        	@function	time_add()
        	@desc   	라운드 시간을 계산
        */ 
        this.time_add = function(time_str,dnum){
        	
        	
        	var arr_time=time_str.substring(0,2)+":"+time_str.substring(2,4); 
            var ToDay = new Date();
           
            var Qdate = new Date(ToDay.getYear()+"/"+(ToDay.getMonth()+1)+"/"+ToDay.getDate()+" "+arr_time);
            
            var Adate = Qdate.getTime() + 60  * dnum *1000 ;
            Qdate.setTime(Adate);
            return  (parseInt(Qdate.getHours()+100,10)+"").substring(1,3)+""+(parseInt(Qdate.getMinutes()+100,10)+"").substring(1,3);
        }

        /**
        	@function	div_21_Tab01_tabp05_btn_chrgr_onclick()
        	@desc   	담당자정보 검색팝업
        */
        this.div_21_Tab01_tabp05_btnChrgr_onclick = function(obj,e)
        {
        	var sArg = { agv_id:""
        			   , agv_nm:this.div_21.Tab01.tabp05.edtWrtrNm.value
        			   , agv_mode:"" };
        		gfnModalPop(this, "PopupComUserSrchInput", "CPOP::BUserSrchPopup.xfdl", sArg, "fnPopCallBack", 800, 600);
        }

        /**
        	@function	fnPopCallBack()
        	@desc   	팝업 CallBack 함수
        */ 
        this.fnPopCallBack = function(sPopupId,rtn)
        {
        	if(gfnIsNull(rtn)) return;
        	
        	if(rtn.indexOf("<Dataset id=") == 0){
        		this.dsReturn.loadXML(rtn);
        		
        		if(sPopupId == "popupComDocType"){
        			//문서유형 팝업 호출하는 경우는 신규작성이기 떄문에 Default Value 를 적용한다.		
        			this.dsTndr.addRow();
        			this.dsTndr.setColumn(0, "CD_DOC_CTGR", this.ds_return.getColumn(0,"CD_ID"));
        			this.div_1.cbo_docType.set_enable(false);
        			this.dsTndr.setColumn(0, "CD_TNDR_STTS", "ET20WRI");
        			this.dsTndr.setColumn(0, "CD_PYMT_CNDTN", "");
        			this.dsTndr.setColumn(0, "CD_BID_UNIT", "");
        			this.dsTndr.setColumn(0, "CD_TNDR_MTHD", "");
        			this.dsTndr.setColumn(0, "CD_BID_CRNC", "");
        			this.dsTndr.setColumn(0, "TNDR_ODR", "1");			
        			this.dsTndr.setColumn(0, "PRGRS_ROUND", "1");				//진행라운드
        			//입찰기본정보 DEFAULT 셋팅
        			this.dsTndr.setColumn(0, "ALT_TOT_BID", "Y");			//총액응찰                     
        			this.dsTndr.setColumn(0, "ALT_LST_RFQ", "Y");			//낙찰후최종견적필요           
        			this.dsTndr.setColumn(0, "ALT_ATD_PTNR_OPEN", "N");	//참여업체미공개         
        			this.dsTndr.setColumn(0, "ALT_PUR_AMT_APLY", "Y");		//구매목표가적용          
        			this.dsTndr.setColumn(0, "ALT_PUR_AMT_OPEN", "N");		//구매목표가미공개        
        			this.dsTndr.setColumn(0, "ALT_LPRC_AMT_OPEN", "N");	//최저(고)가 금액미공개  
        			this.dsTndr.setColumn(0, "ALT_LPRC_PTNR_OPEN", "N");	//최저(고)가업체미공개  
        			this.dsTndr.setColumn(0, "ALT_LOW_FAIL_APLY", "Y");	//하한유찰가적용         
        			this.dsTndr.setColumn(0, "CD_PYMT_CNDTN", "CM1311101000");	//지급조건-당사지급조건에서 현금으로 수정 확인사항(20161031 JJH)      
        			this.dsTndr.setColumn(0, "ALT_PRE_BID", "Y");			//예약응찰가능                 
        			this.dsTndr.setColumn(0, "CD_BID_CRNC", "CM15KRW");	//응찰통화KRW                  
        			this.dsTndr.setColumn(0, "ALT_TMP_BID", "Y");			//모의투찰실시                 
        			this.dsTndr.setColumn(0, "ALT_CNFDNC_OBY_AGRMT", "N");	//비밀준수협약필수아님
        			/* 개발 편의상 Default N 설정  차후 변경 : Y           		*/
        			this.dsTndr.setColumn(0, "ALT_CERT", "N");	    		//인증서사용      
        			this.dsTndr.setColumn(0, "ALT_OPEN_EXPLN", "N");  		//공개설명회여부
        			this.dsTndr.setColumn(0, "CD_TNDR_MTHD", "ET30L01");	//입찰방식
        			//라운드 정보 기본셋팅                         							
        			                         
        			//입찰담당자정보 셋팅
        			this.dsTndr.setColumn(0, "CHRGR_ID", application.gds_userInfo.getColumn(0,"USER_ID"));
        			this.dsTndr.setColumn(0, "CHRGR_NM", application.gds_userInfo.getColumn(0,"USER_NM"));
        			this.dsTndr.setColumn(0, "TEL", application.gds_userInfo.getColumn(0,"TEL"));
        			this.dsTndr.setColumn(0, "EMAIL", application.gds_userInfo.getColumn(0,"EMAIL"));
        			this.dsTndr.setColumn(0, "FAX", application.gds_userInfo.getColumn(0,"FAX"));
        			this.gfnObjReSet(this, "C");
        		
        		}else if(sPopupId == "PopupComCopSrch"){
        			for(var i = 0 ; i < this.dsReturn.rowcount; i++){
        				if(this.gfnDataOverlapCheck(this.dsReturn.getColumn(i,"PTNR_ID"),this.dsTndrPtnr,"PTNR_ID")){
        					var nRow = this.dsTndrPtnr.addRow();
        					this.dsTndrPtnr.setColumn(nRow,"CHECKED","0");
        					this.dsTndrPtnr.setColumn(nRow,"PTNR_NM",this.dsReturn.getColumn(i,"PTNR_NM"));
        					this.dsTndrPtnr.setColumn(nRow,"PTNR_ID",this.dsReturn.getColumn(i,"PTNR_ID"));
        					this.dsTndrPtnr.setColumn(nRow,"BIZ_NO",this.dsReturn.getColumn(i,"BIZ_NO"));
        					this.dsTndrPtnr.setColumn(nRow,"RPRSTV_NM",this.dsReturn.getColumn(i,"RPRSTV_NM"));
        					this.dsTndrPtnr.setColumn(nRow,"TNDR_NO",this.dsTndr.getColumn(0,"TNDR_NO"));
        					this.dsTndrPtnr.setColumn(nRow,"TNDR_ODR",this.dsTndr.getColumn(0,"TNDR_ODR"));
        				}
        			}
        		}else if(sPopupId == "PopupComCopSrchItm"){
        			this.dsTndrItem.setColumn(this.dsTndrItem.rowposition,"DLV_PLC_NM",this.dsReturn.getColumn(0,"DLV_PLC_NM"));
        			this.dsTndrItem.setColumn(this.dsTndrItem.rowposition,"PTNR_ID",this.dsReturn.getColumn(0,"PTNR_ID"));
        			this.dsTndrItem.setColumn(this.dsTndrItem.rowposition,"DLV_PLC_NM",this.dsReturn.getColumn(0,"PTNR_NM"));
        			this.dsTndrItem.setColumn(this.dsTndrItem.rowposition,"ADDR",this.dsReturn.getColumn(0,"ADDR"));
        			this.dsTndrItem.setColumn(this.dsTndrItem.rowposition,"DTL_ADDR",this.dsReturn.getColumn(0,"DTL_ADDR"));
        			this.dsTndrItem.setColumn(this.dsTndrItem.rowposition,"ZIP_NO",this.dsReturn.getColumn(0,"ZIP_NO"));
        		}else if(sPopupId == "PopupComMtrlGrpSrch" || sPopupId == "PopupComMtrlGrpSrchInput"){
        			this.dsTndrItem.setColumn(this.dsTndrItem.rowposition,"MTRL_GRP_ID",this.dsReturn.getColumn(0,"MTRL_GRP_ID"));
        			this.dsTndrItem.setColumn(this.dsTndrItem.rowposition,"MTRL_GRP_NM",this.dsReturn.getColumn(0,"MTRL_GRP_NM"));

        		}else if(sPopupId == "PopupComMtrlSrch" || sPopupId == "PopupComMtrlSrchInput"){
        			this.dsTndrItem.setColumn(this.dsTndrItem.rowposition,"MTRL_GRP_ID",this.dsReturn.getColumn(0,"MTRL_GRP_ID"));
        			this.dsTndrItem.setColumn(this.dsTndrItem.rowposition,"MTRL_GRP_NM",this.dsReturn.getColumn(0,"MTRL_GRP_NM"));
        			this.dsTndrItem.setColumn(this.dsTndrItem.rowposition,"MTRL_CD",this.dsReturn.getColumn(0,"MTRL_CD"));
        			this.dsTndrItem.setColumn(this.dsTndrItem.rowposition,"MTRL_NM",this.dsReturn.getColumn(0,"MTRL_NM"));
        			this.dsTndrItem.setColumn(this.dsTndrItem.rowposition,"CD_UNIT",this.dsReturn.getColumn(0,"CD_UNIT"));
        			this.dsTndrItem.setColumn(this.dsTndrItem.rowposition,"CD_UNIT_NM",this.dsReturn.getColumn(0,"CD_UNIT_NM"));
        		}else if(sPopupId == "PopupComUserSrchInput"){
        			this.dsTndr.setColumn(0,"CHRGR_ID",this.dsReturn.getColumn(0,"USER_ID"));
        			this.dsTndr.setColumn(0,"CHRGR_NM",this.dsReturn.getColumn(0,"USER_NM"));
        			this.dsTndr.setColumn(0,"TEL",this.dsReturn.getColumn(0,"TEL"));
        			this.dsTndr.setColumn(0,"EMAIL",this.dsReturn.getColumn(0,"EMAIL"));
        			this.dsTndr.setColumn(0,"FAX",this.dsReturn.getColumn(0,"FAX"));
        		}else if(sPopupId == "PopupComZipSrch"){
        			this.dsTndrItem.setColumn(this.dsTndrItem.rowposition,"ZIP_NO",this.dsReturn.getColumn(0,"ZIPNO"));
        			this.dsTndrItem.setColumn(this.dsTndrItem.rowposition,"ADDR",this.dsReturn.getColumn(0,"ROADADDR"));
        		}else if(sPopupId == "PopupComPurRef"){			
        			for(var i=0;i<this.dsReturn.rowcount;i++){
        				if(this.dsTndrItem.findRow("PR_ITEM_ID",this.dsReturn.getColumn(i,"PR_ITEM_ID"))==-1){
        					var nRow = this.dsTndrItem.addRow();
        					//Default값을 설정
        					var nItemNo = 1;
        					if(nRow==0){
        						this.dsTndrItem.setColumn(nRow,"ITM_NO",nItemNo);
        					} else {
        						nItemNo = nexacro.toNumber(this.dsTndrItem.getColumn(nRow-1,"ITM_NO"))+1;
        						this.dsTndrItem.setColumn(nRow,"ITM_NO", nItemNo);
        					}
        					
        					this.dsTndrItem.setColumn(nRow,"TNDR_NO",this.dsTndr.getColumn(0,"TNDR_NO"));
        					this.dsTndrItem.setColumn(nRow,"BRANCH_CD",this.dsTndr.getColumn(0,"BRANCH_CD"));
        					this.dsTndrItem.setColumn(nRow,"TNDR_ODR",this.dsTndr.getColumn(0,"TNDR_ODR"));
        					this.dsTndrItem.setColumn(nRow,"IM_ODR_NO",this.dsReturn.getColumn(i,"IM_ODR_NO"));
        					this.dsTndrItem.setColumn(nRow,"PR_ITEM_ID",this.dsReturn.getColumn(i,"PR_ITEM_ID"));
        					this.dsTndrItem.setColumn(nRow,"PR_NO",this.dsReturn.getColumn(i,"PR_NO"));
        					this.dsTndrItem.setColumn(nRow,"MTRL_GRP_ID",this.dsReturn.getColumn(i,"MTRL_GRP_ID"));
        					this.dsTndrItem.setColumn(nRow,"MTRL_GRP_NM",this.dsReturn.getColumn(i,"MTRL_GRP_NM"));
        					this.dsTndrItem.setColumn(nRow,"MTRL_CD",this.dsReturn.getColumn(i,"MTRL_CD"));
        					this.dsTndrItem.setColumn(nRow,"MTRL_NM",this.dsReturn.getColumn(i,"MTRL_NM"));
        					this.dsTndrItem.setColumn(nRow,"QTY",this.dsReturn.getColumn(i,"QTY"));
        					this.dsTndrItem.setColumn(nRow,"GOALUNT_PRICE",this.dsReturn.getColumn(i,"REQ_PRICE"));
        					this.dsTndrItem.setColumn(nRow,"GOALAMT",this.dsReturn.getColumn(i,"REQ_AMT"));
        					this.dsTndrItem.setColumn(nRow,"CD_UNIT",this.dsReturn.getColumn(i,"CD_UNIT"));
        					this.dsTndrItem.setColumn(nRow,"CD_UNIT_NM",this.dsReturn.getColumn(i,"CD_UNIT_NM"));
        					this.dsTndrItem.setColumn(nRow,"DLV_REQ_DAY",this.dsReturn.getColumn(i,"DLV_REQ_DAY"));
        					this.dsTndrItem.setColumn(nRow,"STR_CD",this.dsReturn.getColumn(i,"STR_CD"));
        					this.dsTndrItem.setColumn(nRow,"SL_NM",this.dsReturn.getColumn(i,"SL_NM"));
        					this.dsTndrItem.setColumn(nRow,"RMARK",this.dsReturn.getColumn(i,"RMARK"));
        					this.dsTndrItem.setColumn(nRow,"TKEY",this.dsReturn.getColumn(i,"TKEY"));
        				}
        			}
        		}else if(sPopupId == "PopupComRfxRef"){			
        			for(var i=0;i<this.dsReturn.rowcount;i++){
        				if(this.dsTndrItem.findRow("RFQ_REQ_ITEM_ID",this.dsReturn.getColumn(i,"RFQ_REQ_ITEM_ID"))==-1){
        					var nRow = this.dsTndrItem.addRow();
        					//Default값을 설정
        					var nItemNo = 1;
        					if(nRow==0){
        						this.dsTndrItem.setColumn(nRow,"ITM_NO",nItemNo);
        					} else {
        						nItemNo = nexacro.toNumber(this.dsTndrItem.getColumn(nRow-1,"ITM_NO"))+1;
        						this.dsTndrItem.setColumn(nRow,"ITM_NO", nItemNo);
        					}
        					
        					this.dsTndrItem.setColumn(nRow,"TNDR_NO",this.dsTndr.getColumn(0,"TNDR_NO"));
        					this.dsTndrItem.setColumn(nRow,"BRANCH_CD",this.dsTndr.getColumn(0,"BRANCH_CD"));
        					this.dsTndrItem.setColumn(nRow,"TNDR_ODR",this.dsTndr.getColumn(0,"TNDR_ODR"));
        					this.dsTndrItem.setColumn(nRow,"IM_ODR_NO",this.dsReturn.getColumn(i,"IM_ODR_NO"));
        					this.dsTndrItem.setColumn(nRow,"PR_ITEM_ID",this.dsReturn.getColumn(i,"PR_ITEM_ID"));
        					this.dsTndrItem.setColumn(nRow,"PR_NO",this.dsReturn.getColumn(i,"PR_NO"));
        					this.dsTndrItem.setColumn(nRow,"RFQ_REQ_ITEM_ID",this.dsReturn.getColumn(i,"RFQ_REQ_ITEM_ID"));
        					this.dsTndrItem.setColumn(nRow,"RFQ_REQ_NO",this.dsReturn.getColumn(i,"RFQ_REQ_NO"));
        					this.dsTndrItem.setColumn(nRow,"MTRL_GRP_ID",this.dsReturn.getColumn(i,"MTRL_GRP_ID"));
        					this.dsTndrItem.setColumn(nRow,"MTRL_GRP_NM",this.dsReturn.getColumn(i,"MTRL_GRP_NM"));
        					this.dsTndrItem.setColumn(nRow,"MTRL_CD",this.dsReturn.getColumn(i,"MTRL_CD"));
        					this.dsTndrItem.setColumn(nRow,"MTRL_NM",this.dsReturn.getColumn(i,"MTRL_NM"));
        					this.dsTndrItem.setColumn(nRow,"QTY",this.dsReturn.getColumn(i,"QTY"));
        					this.dsTndrItem.setColumn(nRow,"GOALUNT_PRICE",this.dsReturn.getColumn(i,"CFM_PRICE"));
        					this.dsTndrItem.setColumn(nRow,"GOALAMT",this.dsReturn.getColumn(i,"CFM_AMT"));
        					this.dsTndrItem.setColumn(nRow,"CD_UNIT",this.dsReturn.getColumn(i,"CD_UNIT"));
        					this.dsTndrItem.setColumn(nRow,"CD_UNIT_NM",this.dsReturn.getColumn(i,"CD_UNIT_NM"));
        					this.dsTndrItem.setColumn(nRow,"DLV_REQ_DAY",this.dsReturn.getColumn(i,"DLV_REQ_DAY"));
        					this.dsTndrItem.setColumn(nRow,"STR_CD",this.dsReturn.getColumn(i,"STR_CD"));
        					this.dsTndrItem.setColumn(nRow,"SL_NM",this.dsReturn.getColumn(i,"SL_NM"));
        					this.dsTndrItem.setColumn(nRow,"RMARK",this.dsReturn.getColumn(i,"RMARK"));
        					this.dsTndrItem.setColumn(nRow,"TKEY",this.dsReturn.getColumn(i,"TKEY"));
        				}
        			}	
        		}else if(sPopupId == "PopupDocType") {
        			
        			this.dsTndr.setColumn(0, "CD_TNDR_MTHD", this.dsReturn.getColumn(0,"CD_TNDR_MTHD"));	    			// 입찰방식 
        			this.dsTndr.setColumn(0, "CD_PYMT_CNDTN", this.dsReturn.getColumn(0,"CD_PYMT_CNDTN"));				// 지급조건-당사지급조건  
        			this.dsTndr.setColumn(0, "CD_BID_CRNC", this.dsReturn.getColumn(0,"CD_BID_CRNC"));     				// 응찰통화
        			this.dsTndr.setColumn(0, "CD_BID_UNIT", this.dsReturn.getColumn(0,"CD_BID_UNIT")); 					// 응찰단위
        			this.dsTndr.setColumn(0, "LPRC_OPEN_PTNR_CNT", this.dsReturn.getColumn(0,"LPRC_OPEN_PTNR_CNT")); 		// 최저가공개업체수
        			this.dsTndr.setColumn(0, "ALT_ATD_PTNR_OPEN", this.dsReturn.getColumn(0,"ALT_ATD_PTNR_OPEN")); 		// 참여업체공개여부
        			this.dsTndr.setColumn(0, "ALT_PRE_BID", this.dsReturn.getColumn(0,"ALT_PRE_BID"));					// 예약응찰가능여부
        			this.dsTndr.setColumn(0, "ALT_LOW_FAIL_APLY", this.dsReturn.getColumn(0,"ALT_LOW_FAIL_APLY")); 		// 하한유찰가적용여부
        			this.dsTndr.setColumn(0, "ALT_PUR_AMT_APLY", this.dsReturn.getColumn(0,"ALT_PUR_AMT_APLY"));			// 구매목표가적용여부
        			this.dsTndr.setColumn(0, "ALT_PUR_AMT_OPEN", this.dsReturn.getColumn(0,"ALT_PUR_AMT_OPEN"));			// 구매목표가공개여부     
        			this.dsTndr.setColumn(0, "ALT_CERT", this.dsReturn.getColumn(0,"ALT_CERT"));	    					// 인증서사용여부  			
        			this.dsTndr.setColumn(0, "ALT_CNFDNC_OBY_AGRMT", this.dsReturn.getColumn(0,"ALT_CNFDNC_OBY_AGRMT"));	// 비밀준수협약여부(필수아님)
        			this.dsTndr.setColumn(0, "ALT_LPRC_PTNR_OPEN", this.dsReturn.getColumn(0,"ALT_LPRC_PTNR_OPEN"));		// 최저(고)가업체미공개  최저가업체공개여부
        			this.dsTndr.setColumn(0, "ALT_LPRC_AMT_OPEN", this.dsReturn.getColumn(0,"ALT_LPRC_AMT_OPEN"));		// 최저(고)가 금액미공개   최저가금액공개여부
        			this.dsTndr.setColumn(0, "ALT_TMP_BID", this.dsReturn.getColumn(0,"ALT_TMP_BID"));					// 모의두탈가능여부
        			this.dsTndr.setColumn(0, "ALT_LST_RFQ", this.dsReturn.getColumn(0,"ALT_LST_RFQ"));					// 최종견적여부			
        			this.dsTndr.setColumn(0, "ALT_TOT_BID", this.dsReturn.getColumn(0,"ALT_TOT_BID"));					// 총액응찰여부			
        			this.dsTndr.setColumn(0, "ROUND_CNT", this.dsReturn.getColumn(0,"ROUND_CNT"));						// 라운드횟수				
        			this.dsTndr.setColumn(0, "ALT_OPEN_EXPLN", this.dsReturn.getColumn(0,"ALT_OPEN_EXPLN"));  			// 공개설명회여부 		

        			
        			var bgnTime = this.dsReturn.getColumn(0,"BGN_TIME");					// 시작시간			
        			this.div_21.Tab01.tabp03.mae_tndrAtdCloseTime.set_value(bgnTime.substring(0,4));
        			this.div_21.Tab01.tabp03.sp_roundRateTime.set_value(this.dsReturn.getColumn(0,"ROUND_TIME")); // 라운드시간
        			this.div_21.Tab01.tabp03.sp_roundTime.set_value(this.dsReturn.getColumn(0,"RST_TIME"));   // 유휴시간			
        			
        		}
        	}
        }

        /**
        	@function	div_5_btn_tndrPtnrAdd_onclick()
        	@desc   	입찰 대상업체 추가 이벤트
        */ 
        this.div_5_btn_tndrPtnrAdd_onclick = function(obj,e)
        {
        	var sArg = { agv_doc_ctgr:this.dsTndr.getColumn(0,"CD_DOC_CTGR")
        			, agv_mode:"M" };
        	// 견적, 입찰 협력업체 검색팝업 (자재, 공사) 자재 공통으로 사용	
        	//this.gfn_dialog("PopupComCopSrch", "commPop::PPOPC500P02.xfdl", sArg, "fn_popCallBack");
        	gfnModalPop(this, "PopupComCopSrch", "CPOP::BPtnrSrchRfqMultiPopup.xfdl", sArg, "fnPopCallBack", 1200, 900);
        }

        /**
        	@function	div_31_grd_tndrItem_oncelldblclick()
        	@desc   	입찰품목 그리드 더블클릭 이벤트
        */ 
        this.div_31_grd_tndrItem_oncelldblclick = function(obj,e)
        {
        	//REQR_NM
        	if(gfnIsNull(this.dsTndrItem.getColumn(e.row,gfnGrdBindColId(obj, e.cell)))) return false;

        	if(gfnGrdBindColId(obj, e.cell)=="REQR_NM")	//요청자
        	{
        		var userId = this.dsTndrItem.getColumn(e.row, "REQR_ID");
        		if(!gfnIsNull(userId)){
        			var sArg = {
        				branchCd : this.dsTndrItem.getColumn(e.row, "BRANCH_CD"),
        				agv_id : userId
        			};
        			gfnModalPop(this, "PopupUserInfo", "CPOP::BUserInfoPopup.xfdl", sArg, "fnPopCallBack", 500, 300);
        		}
        	}else if(gfnGrdBindColId(obj, e.cell) == "CHRGR_NM"){//담당자명
        		var sArg = {	 branch_cd : application.gdsUserInfo.getColumn(0, "BRANCH_CD")
        						,  user_id : this.dsList.getColumn(e.row, "CHRGR_ID")
        					};
        		gfnModalPop(this, "PopupUserInfo", "CPOP::BUserInfoPopup.xfdl", sArg, "fnPopCallBack", 500, 300);
        	}
        }

        /**
        	@function	div_1_btn_tndrReq_onclick()
        	@desc   	입찰요청 버튼 클릭 이벤트
        */  
        this.div_1_btn_tndrReq_onclick = function(obj,e)
        {
        	if(!this.fnPreReq()) return false;
        }

        
        /**
        	@function	fnPreReq()
        	@desc   	입찰요청 전 처리
        */ 
        this.fnPreReq = function()
        {
        	var arrUserErr = [];
        	//컴포넌트 유효성 체크 추가
        	//TODO : 입찰참여마감일시 오늘을 포함한 이전일자는 넣을 수 없음
        	if(gfnIsNull(this.div_21.Tab01.tabp01.mae_tndrAtdCloseTime.value)){
        		this.div_21.Tab01.tabp01.mae_tndrAtdCloseTime.set_value("000000");
        	}
        	
        	var checkObj = this.div_21.Tab01.tabp01.cal_tndrAtdCloseDay;
        	var checkTime =  this.div_21.Tab01.tabp01.cal_tndrAtdCloseDay.value + this.div_21.Tab01.tabp01.mae_tndrAtdCloseTime.value;
        	if(checkTime <= gfnTodayTime())
        	{
        		var sMsg = "입찰참여마감일시는 현재시간 보다 이전시간을 넣을 수 없습니다.";	
        		var objParam = {agv_msg:sMsg, agv_objComp:checkObj, agv_errLvl:"E", agv_validType:"유효성 체크"};
        		arrUserErr.push(objParam);
        	}
        	if(this.dsTndr.getColumn(0,"CD_BID_UNIT")  == "ET23P1")
        	{
        		if(this.dsTndr.getColumn(0,"ALT_TOT_BID") == "Y")
        		{	
        		var sMsg = "총액응찰 입찰방법의 응찰단위가 1원입니다.";
        		var objParam = {agv_msg:sMsg, agv_errLvl:"W", agv_validType:"경고"};
        		arrUserErr.push(objParam);
        		}
        	}
        	//TODO : 최고가 입찰은 하한가를 지정하지 않는 다, 메시지 "최고가 입찰은  하한가를 지정할 수 없습니다. 구매목표가만 설정 가능 합니다."
        	checkObj =  this.div_21.Tab01.tabp02.chkDlvOk04	//하한유찰가적용
        	if("ET30H01" == this.dsTndr.getColumn(0,"CD_TNDR_MTHD")||"ET30H02" == this.dsTndr.getColumn(0,"CD_TNDR_MTHD"))
        	{	
        		if(this.dsTndr.getColumn(0,"ALT_LOW_FAIL_APLY") == 'Y'){
        			var sMsg = "최고가 입찰은 하한가를 지정할 수 없습니다. 구매목표가만 설정 가능 합니다.";	
        			var objParam = {agv_msg:sMsg, agv_objComp:this.div_21.Tab01.tabp02.chkDlvOk04, agv_errLvl:"E", agv_validType:"유효성 체크"};
        			arrUserErr.push(objParam);
        		}
        	}
        	//TODO : 입찰참여마감일자는 라운드 시작 이전시간 까지만 가능합니다.
        	var time1 = this.dsTndr.getColumn(0,"TNDR_ATD_CLOSE_DAY")+""+this.dsTndr.getColumn(0,"TNDR_ATD_CLOSE_TIME");
        	var time2 = this.dsTndrRound.getColumn(0,"PRGRS_DAY")+""+this.dsTndrRound.getColumn(0,"BGN_TIME");
        	if(nexacro.toNumber(time1) > nexacro.toNumber(time2)){
        		var sMsg = "입찰참여마감일자는 라운드 시작 이전시간 까지만 가능합니다.";	
        		var objParam = {agv_msg:sMsg, agv_errLvl:"E", agv_validType:"유효성 체크"};
        		arrUserErr.push(objParam);
        	}
        	//TODO : 입찰 라운드는 하루를 넘어갈수 없습니다.
        	var time3 = this.dsTndrRound.getColumn(0,"PRGRS_DAY")+""+this.dsTndrRound.getColumn(0,"BGN_TIME");
        	var time4 = this.dsTndrRound.getColumn(this.dsTndrRound.rowcount-1,"PRGRS_DAY")+""+this.dsTndrRound.getColumn(this.dsTndrRound.rowcount-1,"END_TIME");	
        	if(nexacro.toNumber(time3) > nexacro.toNumber(time4)){
        		var sMsg = "입찰라운드는 하루를 넘어갈수 없습니다.";	
        		var objParam = {agv_msg:sMsg, agv_errLvl:"E", agv_validType:"유효성 체크"};
        		arrUserErr.push(objParam);
        	}
        	//TODO : 입찰작성현황-입찰설정-참여업체공개 체크한 후 입찰요청시 업체공개 메시지창이 떠도록 조치
        	checkObj =  this.div_21.Tab01.tabp02.edt_ptnrCnt
        	if("Y" == this.dsTndr.getColumn(0,"ALT_ATD_PTNR_OPEN"))
        	{
        		if(gfnIsNull(this.dsTndr.getColumn(0, "LPRC_OPEN_PTNR_CNT"))){
        			var sMsg = "참여 업체 공개시 공개할 업체수는 필수 항목입니다.";	
        			var objParam = {agv_msg:sMsg, agv_objComp:checkObj, agv_errLvl:"E", agv_validType:"유효성 체크"};
        			arrUserErr.push(objParam);
        		}
        	}
        	//TODO : 하한유찰가 적용시 하한유찰금액 필수체크
        	if(this.dsTndr.getColumn(0,"ALT_LOW_FAIL_APLY") == 'Y')
        	{
        		if(gfnIsNull(this.dsTndr.getColumn(0, "TNDR_LOW_AMT"))){
        			var sMsg = "하한 유찰가 적용시 하한유찰가는 필수 항목입니다.";	
        			var objParam = {agv_msg:sMsg, agv_objComp:this.div_21.Tab01.tabp01.edtLowestBid, agv_errLvl:"E", agv_validType:"유효성 체크"};
        			arrUserErr.push(objParam);
        		}
        	}
        	//TODO : 공개설명회 실시 할 경우 공개설명회는 라운드 시작일자 이후에는 진행할수 없음	
        	if(this.dsTndr.getColumn(0, "ALT_OPEN_EXPLN") == "Y")
        	{
        		if(this.dsTndr.getColumn(0,"OPEN_EXPLN_DAY") > this.dsTndrRound.getColumn(0,"PRGRS_DAY") )
        		var sMsg = "공개설명회는 라운드 시작일자 이후에는 진행할 수 없습니다.";	
        		var objParam = {agv_msg:sMsg, agv_objComp:this.div_21.Tab01.tabp04.rdo_altOpenExpln, agv_errLvl:"E", agv_validType:"유효성 체크"};
        		arrUserErr.push(objParam);
        	}
        	//품목 NULL 체크
        	if(this.dsTndrItem.getRowCount() < 1){
        		var sMsg = "입찰 품목은 1건 이상 추가 되어야 합니다.";	
        		var objParam = {agv_msg:sMsg, agv_objComp:this.div_31.dsTndrItem, agv_errLvl:"E", agv_validType:"유효성 체크"};
        		arrUserErr.push(objParam);
        	}
        	//ROUND NULL 체트
        	if(this.dsTndrRound.getRowCount() < 1){
        		var sMsg = "입찰 ROUND는 1건 이상 추가 되어야 합니다.";	
        		var objParam = {agv_msg:sMsg, agv_objComp:this.div_21.Tab01.tabp03.grd_tndrRound, agv_errLvl:"E", agv_validType:"유효성 체크"};
        		arrUserErr.push(objParam);
        	}
        	//대상업체 NULL 체트	
        	if(this.dsTndrPtnr.getRowCount() < 1){
        		var sMsg = "대상업체는 1건 이상 추가 되어야 합니다.";			
        		var objParam = {agv_msg:sMsg, agv_objComp:this.div_51.dsTndrPtnr, agv_errLvl:"E", agv_validType:"유효성체크"};
        		arrUserErr.push(objParam);
        	}
        	
        	//그리드 유효성 체크 추가
        	//라운드 종료후 유찰(ET12NOT)은 마지막라운드에만 적용될수 있음
        	var round_ds_cnt = this.dsTndrRound.rowcount;
        	
        	if(round_ds_cnt<1){
        		var sMsg = "라운드를 추가해 주시기 바랍니다.";
        		var objParam = {agv_msg:sMsg, agv_objComp:this.div_31.dsTndrItem, agv_validType:"라운드 미입력"};
        		arrUserErr.push(objParam);
        	}
        	
        	for(var i=0; i<round_ds_cnt; i++)
        	{
        		//구매목표가 공개일 경우 라운드 유형에 다음라운드 진행을 추가 하지 못한다.
        		if("Y" == this.dsTndr.getColumn(0,"ALT_PUR_AMT_OPEN")){
        			if(this.dsTndrRound.getColumn(i,"CD_ROUND_NEXT") == 'ET12NXT'){
        				var sMsg = "구매목표가 공개일 경우 라운드 종료 후 처리에 '다음 라운드 진행'을 사용 하실 수 없습니다.";
        				var objParam = {agv_msg:sMsg, agv_objComp:this.div_31.dsTndrItem, agv_row:i, agv_dsCol:"DLV_REQ_DAY", agv_validType:"라운드 설정오류"};
        				arrUserErr.push(objParam);
        			}
        		}
        	
        		if(this.dsTndrRound.getColumn(i,"CD_ROUND_NEXT") == 'ET12WIN'){
        			if("Y" != this.dsTndr.getColumn(0,"ALT_PUR_AMT_APLY")){
        				var sMsg = "라운드 중간에 구매목표가 낙찰이 설정 되었습니다. 구매목표가적용을 체크 하세요";
        				var objParam = {agv_msg:sMsg, agv_objComp:this.div_31.dsTndrItem, agv_row:i, agv_dsCol:"DLV_REQ_DAY", agv_validType:"구매목표가 적용오류"};
        				arrUserErr.push(objParam);
        			}
        		}		
        		
        		var objGrd = this.div_21.Tab01.tabp03.grd_tndrRound;
        		if(this.dsTndrRound.getColumn(i, "CD_ROUND_NEXT") == "ET12NOT" && i != (round_ds_cnt-1))
        		{
        			//TODO : 메시지 코드로 변경처리
        			//var sMsg = gfn_getTextGrdLine(objGrd, i) +  "라운드 종료후 유찰은 마지막라운드에만 적용 할 수 있습니다.";
        			var objParam = {agv_msg:sMsg, agv_objComp:objGrd, agv_row:i, agv_dsCol:"DLV_REQ_DAY", agv_validType:"라운드 설정오류"};
        			arrUserErr.push(objParam);
        		}		
        	}
        	if(!gfnValidate(arrUserErr, "", "fnPreReqIsSame"))  //확인 클릭 : this.fn_commSave(true) 호출됨.
        	{		
        		return false;
        	}else{
        		this.fnPreReqIsSame();
        	}
        }

        /**
        	@function	fn_preReqIsSame()
        	@desc   	입찰공고시 동일업체가  다른 입찰라운드 시간과 중복될  경우 경고메세지 출력
        */ 
        this.fnPreReqIsSame = function(){
        	
        	var sSvcID = "read";
        	var sController = "epro.tndr.service.BTndrService.tndrSameTime";
        	var sInDatasets = "dsTndr=dsTndr dsTndrRound=dsTndrRound";
        	var sOutDatasets = "dsTndr=dsTndr dsTndrItem=dsTndrItem dsTndrRound=dsTndrRound dsTndrPtnr=dsTndrPtnr";
        	var sCallbackFunc = "fnTrCallBack";
        	
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        	
        }

        

        /**
        	@function	div_51_grd_RfqPtnr_oncellclick()
        	@desc   	대상업체 그리드 삭제 버튼 클릭 이벤트
        */
        this.div_51_grd_RfqPtnr_oncellclick = function(obj,e)
        {
        	if(this.dsTndrPtnr.rowcount == 0){
        		return;
        	}
        	
        	var bindCol = obj.getCellProperty("Body", e.cell, "text").split("bind:").join("");
        	if(bindCol == "삭제"){
        		this.dsTndrPtnr.deleteRow(e.row);
        	}
        }

        /**
        	@function	div_51_grd_RfqPtnr_oncelldblclick()
        	@desc   	대상업체 그리드 더블클릭 이벤트
        */
        this.div_51_grd_RfqPtnr_oncelldblclick = function(obj,e)
        {
        	if(this.dsTndrPtnr.rowcount == 0){
        		return;
        	}
        	
        	if(gfnGrdBindColId(obj, e.cell) == "BIZ_NO"){//사업자번호
        		var sArg = { agv_id:this.dsTndrPtnr.getColumn(e.row, "PTNR_ID")};
        		gfnModalPop(this, "PopupComCorpRead", "CPOP::BPtnrInfoPopup.xfdl", sArg, "fnPopCallBack", 500, 400);
        	}else if(gfnGrdBindColId(obj, e.cell) == "PTNR_NM"){//협력사명
        		var sArg = { agv_id:this.dsTndrPtnr.getColumn(e.row, "PTNR_ID")};
        		gfnModalPop(this, "PopupComCorpRead", "CPOP::BPtnrInfoPopup.xfdl", sArg, "fnPopCallBack", 500, 400);
        	}
        }

        /**
        	@function	div_2_btn_rfqTypeSelect_onclick()
        	@desc   	입찰유형선택
        */
        this.div_2_btn_rfqTypeSelect_onclick = function(obj,e)
        {
        	var sArg = { agv_id:""
        			   , agv_nm:"" };
        	
        	gfnModalPop(this, "PopupDocType", "BTNDR::BTndrTypePopup.xfdl", sArg, "fnPopCallBack", 800, 400);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.FormOninit, this);
            this.addEventHandler("onload", this.FormOnload, this);
            this.div_1.btnTndrReq.addEventHandler("onclick", this.div_1_btn_tndrReq_onclick, this);
            this.div_2.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.div_2.btnRfqTypeSelect.addEventHandler("onclick", this.div_2_btn_rfqTypeSelect_onclick, this);
            this.div_21.Tab01.addEventHandler("onchanged", this.div_21_Tab01_onchanged, this);
            this.div_21.Tab01.tabp01.mae_tndrAtdCloseTime.addEventHandler("onkillfocus", this.div_21_Tab01_tabp01_mae_tndrAtdCloseTime_onkillfocus, this);
            this.div_21.Tab01.tabp01.mae_tndrAtdCloseTime.addEventHandler("onchanged", this.div_21_Tab01_tabp01_cal_tndrAtdCloseDay_onchanged, this);
            this.div_21.Tab01.tabp02.rdoPartialDlv.addEventHandler("onitemclick", this.div_21_Tab01_tabp01_Radio00_onitemclick, this);
            this.div_21.Tab01.tabp03.mae_tndrAtdCloseTime.addEventHandler("onkillfocus", this.div_21_Tab01_tabp01_mae_tndrAtdCloseTime_onkillfocus, this);
            this.div_21.Tab01.tabp03.btn_round.addEventHandler("onclick", this.div_21_Tab01_tabp03_btn_round_onclick, this);
            this.div_21.Tab01.tabpage7.rdo_altOpenExpln.addEventHandler("onitemclick", this.div_21_Tab01_tabp04_rdo_altOpenExpln_onitemclick, this);
            this.div_21.Tab01.tabp05.btnChrgr.addEventHandler("onclick", this.div_21_Tab01_tabp05_btnChrgr_onclick, this);
            this.div_3.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.div_31.dsTndrItem.addEventHandler("oncellclick", this.div_31_dsTndrItem_oncellclick, this);
            this.div_31.dsTndrItem.addEventHandler("oncelldblclick", this.div_31_grd_tndrItem_oncelldblclick, this);
            this.div_31.dsTndrItem.addEventHandler("onexpandup", this.div_31_grd_tndrItem_onexpandup, this);
            this.div_4.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.div_41.cboItemChg.addEventHandler("onitemchanged", this.Div4_cbo_itemChg_onitemchanged, this);
            this.div_41.btnPoItemRowUp.addEventHandler("onclick", this.div_4_btn_poItemRowUp_onclick, this);
            this.div_41.btnPoItemRowDown.addEventHandler("onclick", this.div_4_btn_poItemRowDown_onclick, this);
            this.div_41.Tab01.addEventHandler("onchanged", this.div_41_Tab01_onchanged, this);
            this.div_41.Tab01.tabp01.edtSlNm.addEventHandler("onkeydown", this.fnOnkeydown, this);
            this.div_41.Tab01.tabp01.edtSlNm.addEventHandler("ontextchanged", this.fnOntextchanged, this);
            this.div_41.Tab01.tabp01.edtMtrlCd.addEventHandler("onkeydown", this.Div41_Tab01_tabp01_edt_MatCd_onkeydown, this);
            this.div_41.Tab01.tabp01.btnMtrl.addEventHandler("onclick", this.fnMtrlSearch, this);
            this.div_41.Tab01.tabp01.btnMtrl00.addEventHandler("onclick", this.fnMtrlSearch, this);
            this.div_51.dsTndrPtnr.addEventHandler("oncellclick", this.div_51_grd_RfqPtnr_oncellclick, this);
            this.div_51.dsTndrPtnr.addEventHandler("oncelldblclick", this.div_51_grd_RfqPtnr_oncelldblclick, this);
            this.div_51.div_00.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.div_51.div_00.btn_ptnrAdd.addEventHandler("onclick", this.div_5_btn_tndrPtnrAdd_onclick, this);

        };

        this.loadIncludeScript("BTndrDetail.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
