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
                this.set_name("BRfqAlsDetail");
                this.set_titletext("입찰진행상세");
                this._setFormPosition(0,0,1220,1486);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAltRfqExplnNxtNtc", this);
            obj._setContents("<ColumnInfo><Column id=\"key\" size=\"256\" type=\"STRING\"/><Column id=\"value\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"key\">미실시</Col><Col id=\"value\"/></Row><Row><Col id=\"key\">선공개</Col><Col id=\"value\">Y</Col></Row><Row><Col id=\"key\">후공개</Col><Col id=\"value\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAltBdgtOpen", this);
            obj._setContents("<ColumnInfo><Column id=\"key\" size=\"256\" type=\"STRING\"/><Column id=\"value\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"key\">--선택--</Col></Row><Row><Col id=\"key\">공개</Col><Col id=\"value\">Y</Col></Row><Row><Col id=\"key\">미공개</Col><Col id=\"value\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRfqQuoteFile", this);
            obj._setContents("<ColumnInfo><Column id=\"RFQ_REQ_FILE_ID\" size=\"20\" type=\"STRING\"/><Column id=\"RFQ_PTNR_ID\" size=\"20\" type=\"STRING\"/><Column id=\"ATTCH_FILE_CNT\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRfqItemList", this);
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"20\" type=\"STRING\"/><Column id=\"PR_ITEM_ID\" size=\"20\" type=\"STRING\"/><Column id=\"MTRL_CD\" size=\"20\" type=\"STRING\"/><Column id=\"MTRL_NM\" size=\"100\" type=\"STRING\"/><Column id=\"QTY\" size=\"256\" type=\"INT\"/><Column id=\"CD_UNIT\" size=\"40\" type=\"STRING\"/><Column id=\"GOALUNT_PRICE\" size=\"256\" type=\"INT\"/><Column id=\"GOALAMT\" size=\"256\" type=\"INT\"/><Column id=\"DLV_REQ_DAY\" size=\"8\" type=\"STRING\"/><Column id=\"SL_NM\" size=\"50\" type=\"STRING\"/><Column id=\"RMARK\" size=\"2000\" type=\"STRING\"/><Column id=\"PR_NO\" size=\"20\" type=\"STRING\"/><Column id=\"RFQ_REQ_ITEM_ID\" size=\"20\" type=\"STRING\"/><Column id=\"RFQ_REQ_NO\" size=\"256\" type=\"STRING\"/><Column id=\"RFQ_ODR\" size=\"256\" type=\"STRING\"/><Column id=\"CD_DOC_CTGR\" size=\"256\" type=\"STRING\"/><Column id=\"MTRL_GRP_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CD_UNIT_NM\" size=\"256\" type=\"STRING\"/><Column id=\"USER_NM\" size=\"256\" type=\"STRING\"/><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"ATTCH_FILE_CNT\" size=\"256\" type=\"STRING\"/><Column id=\"SRC_GRP_NM\" size=\"256\" type=\"STRING\"/><Column id=\"SRC_GRP_ID\" size=\"256\" type=\"STRING\"/><Column id=\"STR_CD\" size=\"256\" type=\"STRING\"/><Column id=\"CHECKED\" size=\"256\" type=\"STRING\"/><Column id=\"CD_RFQ_SUBM_STTS\" size=\"256\" type=\"STRING\"/><Column id=\"ROWNUM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRfqPtnr", this);
            obj._setContents("<ColumnInfo><Column id=\"CHECKED\" size=\"1\" type=\"STRING\"/><Column id=\"RFQ_PTNR_ID\" size=\"20\" type=\"STRING\"/><Column id=\"BIZ_NO\" size=\"20\" type=\"STRING\"/><Column id=\"PTNR_NM\" size=\"50\" type=\"STRING\"/><Column id=\"RPRSTV_NM\" size=\"20\" type=\"STRING\"/><Column id=\"RFQ_EXPLN_DAY\" size=\"8\" type=\"STRING\"/><Column id=\"RFQ_EXPLN_TIME\" size=\"4\" type=\"STRING\"/><Column id=\"RFQ_EXPLN_AREA\" size=\"100\" type=\"STRING\"/><Column id=\"RFQ_REQ_NO\" size=\"20\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"20\" type=\"STRING\"/><Column id=\"RFQ_ODR\" size=\"256\" type=\"INT\"/><Column id=\"PTNR_ID\" size=\"20\" type=\"STRING\"/><Column id=\"USER_ID\" size=\"20\" type=\"STRING\"/><Column id=\"CD_RFQ_SUBM_STTS\" size=\"40\" type=\"STRING\"/><Column id=\"CD_RFQ_CRNC\" size=\"256\" type=\"STRING\"/><Column id=\"CD_PORG_UNIT_STTS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PORG_UNIT_STTS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRfqReqFile", this);
            obj._setContents("<ColumnInfo><Column id=\"CHECKED\" size=\"1\" type=\"STRING\"/><Column id=\"RFQ_REQ_FILE_ID\" size=\"256\" type=\"STRING\"/><Column id=\"RFQ_REQ_NO\" size=\"256\" type=\"STRING\"/><Column id=\"RFQ_ODR\" size=\"256\" type=\"STRING\"/><Column id=\"REQ_FILE_NM\" size=\"100\" type=\"STRING\"/><Column id=\"CD_FILE_TYPE\" size=\"40\" type=\"STRING\"/><Column id=\"ALT_MDT\" size=\"1\" type=\"STRING\"/><Column id=\"RMARK\" size=\"50\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReturn", this);
            obj.getSetter("dsDescription").set("팝업에서 전달받은 데이터를 담아놓는 데이터셋");
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAltRfqExplnAct", this);
            obj._setContents("<ColumnInfo><Column id=\"key\" size=\"256\" type=\"STRING\"/><Column id=\"value\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"key\">실시</Col><Col id=\"value\">Y</Col></Row><Row><Col id=\"key\">미실시</Col><Col id=\"value\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRfq", this);
            obj._setContents("<ColumnInfo><Column id=\"TTL\" size=\"100\" type=\"STRING\"/><Column id=\"CD_RFQ_STTS\" size=\"40\" type=\"STRING\"/><Column id=\"RFQ_CLOSE_DAY\" size=\"8\" type=\"STRING\"/><Column id=\"RFQ_CLOSE_TIME\" size=\"4\" type=\"STRING\"/><Column id=\"CD_RFQ_AIM\" size=\"40\" type=\"STRING\"/><Column id=\"CD_DOC_CTGR\" size=\"40\" type=\"STRING\"/><Column id=\"CD_RFQ_CRNC\" size=\"40\" type=\"STRING\"/><Column id=\"ALT_RFQ_EXPLN_ACT\" size=\"1\" type=\"STRING\"/><Column id=\"ALT_RFQ_EXPLN_NXT_NTC\" size=\"1\" type=\"STRING\"/><Column id=\"ALT_BDGT_OPEN\" size=\"1\" type=\"STRING\"/><Column id=\"RMARK\" size=\"1000\" type=\"STRING\"/><Column id=\"RFQ_ODR\" size=\"256\" type=\"STRING\"/><Column id=\"USER_ID\" size=\"20\" type=\"STRING\"/><Column id=\"RFQ_REQ_NO\" size=\"256\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"GOALAMT\" size=\"256\" type=\"STRING\"/><Column id=\"CD_RFQ_STTS_NM\" size=\"256\" type=\"STRING\"/><Column id=\"FILESTRING\" size=\"256\" type=\"STRING\"/><Column id=\"CD_BID_UNIT\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_TARG_CORP_OPEN\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_QTY_OPEN\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_RFQ_PRICE_SBMT\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_LOW_FAIL_APLY\" size=\"256\" type=\"STRING\"/><Column id=\"RFQ_LOW_AMT\" size=\"256\" type=\"STRING\"/><Column id=\"GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SRC_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SRC_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CFM_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ATTCH_FILE_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"RFQ_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"APP_DOC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APP_CMPLT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"APP_REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"NTC_APP_DOC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NTC_APP_CMPLT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"NTC_APP_REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TKEY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_INCOTERMS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_EVAL_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RT_Q\" type=\"STRING\" size=\"256\"/><Column id=\"RT_C\" type=\"STRING\" size=\"256\"/><Column id=\"RT_T\" type=\"STRING\" size=\"256\"/><Column id=\"RT_D\" type=\"STRING\" size=\"256\"/><Column id=\"RT_F\" type=\"STRING\" size=\"256\"/><Column id=\"CHRGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHRGR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"TEL\" type=\"STRING\" size=\"256\"/><Column id=\"FAX\" type=\"STRING\" size=\"256\"/><Column id=\"CNCL_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSED_RMK\" type=\"STRING\" size=\"256\"/><Column id=\"TCO_BGN_YR\" type=\"STRING\" size=\"256\"/><Column id=\"TCO_YR\" type=\"STRING\" size=\"256\"/><Column id=\"CRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CRT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_CHGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_CHG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RFQ_CLOSE_TIME_HR\" type=\"STRING\" size=\"256\"/><Column id=\"RFQ_CLOSE_TIME_MIN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRfqInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"RFQ_REQ_NO\" size=\"20\" type=\"STRING\"/><Column id=\"RFQ_ODR\" size=\"256\" type=\"INT\"/><Column id=\"BRANCH_CD\" size=\"20\" type=\"STRING\"/><Column id=\"RESTTS\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdET23", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM32", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM15", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdET27", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM11", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM10", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRfqTco", this);
            obj._setContents("<ColumnInfo><Column id=\"RFQ_REQ_ITEM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TCO_YR\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ROWNUM\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM22", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdET14", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompBody00", "absolute", "0", "92", null, "334", "15", null, this);
            obj.getSetter("objNm").set("DIV-헤더 상세");
            obj.set_scrollbars("none");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);
            obj = new Tab("tabRfqInfo", "absolute", "0%", "0", null, null, "0%", "0", this.divViewCompBody00);
            obj.getSetter("objNm").set("입찰요청서 TAB");
            obj.set_scrollbars("autoboth");
            obj.set_tabindex("0");
            obj.set_taborder("0");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Tabpage("tabRfq", this.divViewCompBody00.tabRfqInfo);
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("기본정보");
            obj.set_scrollbars("none");
            obj.style.set_background("white");
            obj.set_text("기본정보");
            this.divViewCompBody00.tabRfqInfo.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "37", null, "33", "0", null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("57");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Edit("edtCdRfqStts", "absolute", "805", "42", "184", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.getSetter("objNm").set("상태");
            obj.set_readonly("true");
            obj.set_taborder("12");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staCdRfqStts", "absolute", "629", "37", "171", "33", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("상태");
            obj.set_taborder("11");
            obj.set_text("상태");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Calendar("calRfqCloseTime", "absolute", "342", "42", "60", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj.set_dateformat("HH");
            obj.set_editformat("HH");
            obj.getSetter("objNm").set("입찰마감시");
            obj.set_taborder("7");
            obj.set_type("spin");
            obj.set_value("null");
            obj.set_locale("en_US");
            obj = new Calendar("cldRfqCloseDay", "absolute", "176", "42", "131", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj.set_cssclass("cal_default");
            obj.getSetter("objNm").set("입찰마감일");
            obj.set_taborder("5");
            obj.set_locale("en_US");
            obj = new Static("staRfqCloseDT", "absolute", "0", "37", "171", "33", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("입찰마감일시");
            obj.set_taborder("4");
            obj.set_text("입찰마감일시");
            obj.set_usedecorate("true");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "69", null, "33", "0", null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("58");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Combo("cboCdBidUnit", "absolute", "805", "74", "184", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_innerdataset("@dsCdET23");
            obj.getSetter("objNm").set("응찰단위");
            obj.set_taborder("16");
            obj = new Static("staCdBidUnit", "absolute", "629", "69", "171", "33", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("응찰단위");
            obj.set_taborder("15");
            obj.set_text("응찰단위");
            obj.set_usedecorate("true");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Combo("cboCdRfqAim", "absolute", "176", "74", "250", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj.set_codecolumn("CD_ID");
            obj.set_cssclass("cbo_default");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_innerdataset("@dsCdET27");
            obj.getSetter("objNm").set("입찰목적");
            obj.set_taborder("14");
            obj = new Static("staCdRfqAim", "absolute", "0", "69", "171", "33", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("입찰목적");
            obj.set_taborder("13");
            obj.set_text("입찰목적");
            obj.set_usedecorate("true");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staViewCompLine03", "absolute", "0", "101", null, "33", "0", null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("59");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Combo("cboCdRfqCrnc", "absolute", "805", "105", "184", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_innerdataset("@dsCdCM15");
            obj.getSetter("objNm").set("입찰통화");
            obj.set_taborder("20");
            obj = new Static("staCdRfqCrnc", "absolute", "629", "101", "171", "33", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("입찰통화");
            obj.set_taborder("19");
            obj.set_text("제출통화");
            obj.set_usedecorate("true");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new MaskEdit("edtGoalamt", "absolute", "176", "105", "249", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_autoselect("true");
            obj.set_mask("#,##0");
            obj.getSetter("objNm").set("구매예상가");
            obj.set_readonly("true");
            obj.style.set_color("blue");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 10 Dotum");
            obj.set_taborder("18");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staGoalamt", "absolute", "0%", "101", "171", "33", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("총금액");
            obj.set_taborder("17");
            obj.set_text("구매예상가");
            obj.set_usedecorate("true");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staViewCompLine05", "absolute", "0", "133", null, "33", "0", null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("60");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staViewCompLine06", "absolute", "0", "165", null, "33", "0", null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("61");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staViewCompLine07", "absolute", "0", "229", null, "33", "0", null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("62");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Radio("cboEvalType", "absolute", "176", "233", "331", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            var cboEvalType_innerdataset = new Dataset("cboEvalType_innerdataset", this.divViewCompBody00.tabRfqInfo.tabRfq.cboEvalType);
            cboEvalType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">가격평가</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">종합평가</Col></Row></Rows>");
            obj.set_innerdataset(cboEvalType_innerdataset);
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_direction("vertical");
            obj.getSetter("objNm").set("평가구분");
            obj.set_taborder("39");
            obj.set_innerdataset("dsCdET14");
            obj.set_rowcount("1");
            obj.set_columncount("3");
            obj = new Static("staEvalType", "absolute", "0", "229", "171", "33", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("평가구분");
            obj.set_taborder("38");
            obj.set_text("평가구분");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staViewCompLine08", "absolute", "0", "261", null, "33", "0", null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("41");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Edit("edtRtF", "absolute", "928", "266", "40", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.getSetter("objNm").set("재무");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.style.setStyleValue("font", "disabled", "bold 9 Dotum");
            obj.set_taborder("55");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Edit("edtRtD", "absolute", "768", "266", "40", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.getSetter("objNm").set("납기");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.style.setStyleValue("font", "disabled", "bold 9 Dotum");
            obj.set_taborder("52");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Edit("edtRtT", "absolute", "635", "266", "40", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.getSetter("objNm").set("기술");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.style.setStyleValue("font", "disabled", "bold 9 Dotum");
            obj.set_taborder("49");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Edit("edtRtC", "absolute", "486", "266", "40", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.getSetter("objNm").set("원가절감");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.style.setStyleValue("font", "disabled", "bold 9 Dotum");
            obj.set_taborder("46");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Edit("edtRtQ", "absolute", "229", "266", "40", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.getSetter("objNm").set("품질");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.style.setStyleValue("font", "disabled", "bold 9 Dotum");
            obj.set_taborder("43");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staEvalRate", "absolute", "0", "261", "171", "33", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("평가비율");
            obj.set_taborder("40");
            obj.set_text("평가비율");
            obj.set_usedecorate("true");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "5", null, "33", "0", null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("63");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staTtl", "absolute", "0%", "5", "171", "33", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("입찰요청명");
            obj.set_taborder("0");
            obj.set_text("입찰요청명");
            obj.set_usedecorate("true");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Edit("edtTtl", "absolute", "176", "9", "624", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("입찰요청명");
            obj.set_taborder("1");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Edit("edtRrqOdr", "absolute", "805", "9", "40", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.getSetter("objNm").set("입찰차수");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.style.setStyleValue("font", "disabled", "bold 9 Dotum");
            obj.set_taborder("2");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staRfqOdr", "absolute", "851", "9", "175", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.getSetter("objNm").set("입찰차수");
            obj.set_taborder("3");
            obj.set_text("회차");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staOption", "absolute", "0%", "133", "171", "33", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("입찰옵션");
            obj.set_taborder("21");
            obj.set_text("입찰옵션");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new CheckBox("chkAltBdgtOpen", "absolute", "176", "137", "182", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_cssclass("chk_default");
            obj.set_falsevalue("N");
            obj.getSetter("objNm").set("예가공개 여부");
            obj.set_taborder("22");
            obj.set_text("예가공개");
            obj.set_truevalue("Y");
            obj.set_value("N");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new CheckBox("chkAltTargCorpOpen", "absolute", "358", "137", "204", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_cssclass("chk_default");
            obj.set_falsevalue("N");
            obj.getSetter("objNm").set("대상업체공개 여부");
            obj.set_taborder("23");
            obj.set_text("대상업체공개");
            obj.set_truevalue("Y");
            obj.set_value("N");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staViewCompLine04", "absolute", "0", "197", null, "33", "0", null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staIncoterms", "absolute", "629", "133", "171", "33", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_taborder("24");
            obj.set_text("Incoterms");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("Incoerms");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Combo("cboIncoterms", "absolute", "805", "137", "184", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            var cboIncoterms_innerdataset = new Dataset("cboIncoterms_innerdataset", this.divViewCompBody00.tabRfqInfo.tabRfq.cboIncoterms);
            cboIncoterms_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">전체공개</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">제한공개</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미공개</Col></Row></Rows>");
            obj.set_innerdataset(cboIncoterms_innerdataset);
            obj.set_taborder("25");
            obj.set_innerdataset("@dsCdCM22");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_visible("true");
            obj.getSetter("objNm").set("Incoterms");
            obj = new Static("staAltLowFailAply", "absolute", "0", "165", "171", "33", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_taborder("26");
            obj.set_text("하한유찰가");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("하한유찰가");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new CheckBox("chkAltLowFailAply", "absolute", "176", "169", "92", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_taborder("27");
            obj.set_text("하한유찰가");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_cssclass("chk_default");
            obj.getSetter("objNm").set("하한유찰가");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staRfqOdr10", "absolute", "408", "170", "21", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_taborder("28");
            obj.set_text("원");
            obj.getSetter("objNm").set("하한유찰가원");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staAltRfqPriceSbmt", "absolute", "0", "197", "171", "33", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_taborder("29");
            obj.set_text("가격제출");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("입찰가제출");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staTcoBgnYr", "absolute", "629", "197", "171", "33", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_taborder("32");
            obj.set_text("시작년도");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("시작년도");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Edit("edtTcoBgnYr", "absolute", "805", "202", "133", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_taborder("33");
            obj.style.set_align("right middle");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.style.setStyleValue("font", "disabled", "bold 9 Dotum");
            obj.getSetter("objNm").set("하한유찰가");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Edit("edtTcoYr", "absolute", "943", "202", "46", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_taborder("34");
            obj.style.set_align("right middle");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.style.setStyleValue("font", "disabled", "bold 9 Dotum");
            obj.getSetter("objNm").set("하한유찰가");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staRfqOdr00", "absolute", "995", "202", "21", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_taborder("36");
            obj.set_text("회");
            obj.getSetter("objNm").set("시작년도 횟수");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new CheckBox("chkAltRfqPriceSbmt", "absolute", "176", "202", "204", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_taborder("30");
            obj.set_text("가격 미제출");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_cssclass("chk_default");
            obj.getSetter("objNm").set("가격미제출 여부");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new MaskEdit("mskRfqLowAmt", "absolute", "285", "169", "117", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_taborder("65");
            obj.set_mask("9,999");
            obj.getSetter("objNm").set("하한유찰가격");
            obj.set_readonly("false");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new MaskEdit("mskRfqCloseTimeMIN", "absolute", "440", "42", "61", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_taborder("66");
            obj.getSetter("objNm").set("입찰마감 분");
            obj.set_type("string");
            obj.set_maskchar(" ");
            obj.style.set_align("left middle");
            obj.set_mask("##");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staRfqCloseDay", "absolute", "312", "42", "24", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_taborder("77");
            obj.set_text("일");
            obj.getSetter("objNm").set("입찰마감일");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staRfqCloseTime", "absolute", "407", "42", "28", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_taborder("78");
            obj.set_text("시");
            obj.getSetter("objNm").set("입찰마감시");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staRfqCloseTimeMin", "absolute", "507", "42", "28", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_taborder("79");
            obj.set_text("분");
            obj.getSetter("objNm").set("입찰마감시");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staRtQ", "absolute", "172", "261", "52", "33", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_taborder("80");
            obj.set_text("품질");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("품질");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staRfqOdr05", "absolute", "275", "266", "21", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_taborder("81");
            obj.set_text("%");
            obj.getSetter("objNm").set("평가비율품질%");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staRtP", "absolute", "292", "261", "41", "33", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_taborder("82");
            obj.set_text("가격");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("가격");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staRfqOdr06", "absolute", "384", "266", "21", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_taborder("83");
            obj.set_text("%");
            obj.getSetter("objNm").set("평가비율가격%");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staRtT", "absolute", "554", "261", "76", "33", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_taborder("84");
            obj.set_text("기술");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("기술");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staRfqOdr07", "absolute", "681", "266", "21", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_taborder("85");
            obj.set_text("%");
            obj.getSetter("objNm").set("평가비율기술%");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staRtD", "absolute", "703", "261", "60", "33", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_taborder("86");
            obj.set_text("납기");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("납기");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staRfqOdr08", "absolute", "814", "266", "21", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_taborder("87");
            obj.set_text("%");
            obj.getSetter("objNm").set("평가비율납기%");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staRtF", "absolute", "831", "261", "92", "33", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_taborder("88");
            obj.set_text("재무");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("재무");
            obj.set_wordwrap("english");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staRfqOdr09", "absolute", "973", "266", "21", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_taborder("89");
            obj.set_text("%");
            obj.getSetter("objNm").set("평가비율재무%");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staRtC", "absolute", "400", "261", "80", "33", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_taborder("90");
            obj.set_text("원가절감");
            obj.style.set_align("right");
            obj.getSetter("objNm").set("원가절감");
            obj.set_wordwrap("english");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staPer01", "absolute", "532", "261", "20", "33", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_taborder("91");
            obj.set_text("%");
            obj.getSetter("objNm").set("평가비율원가절감%");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Edit("edtRtP", "absolute", "338", "266", "40", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_taborder("92");
            obj.set_maxlength("3");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.style.setStyleValue("font", "disabled", "bold 9 Dotum");
            obj.getSetter("objNm").set("가격");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Edit("edtIncoterms2", "absolute", "995", "137", "202", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_taborder("93");
            obj.style.set_align("left middle");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.style.setStyleValue("font", "disabled", "bold 9 Dotum");
            obj.getSetter("objNm").set("incoterms2");
            this.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Tabpage("tabRfqRmark", this.divViewCompBody00.tabRfqInfo);
            obj.getSetter("objNm").set("특기사항");
            obj.set_scrollbars("none");
            obj.style.set_background("white");
            obj.set_text("특이사항");
            this.divViewCompBody00.tabRfqInfo.addChild(obj.name, obj);
            obj = new TextArea("txaRmark", "absolute", "0", "5", null, null, "0", "17", this.divViewCompBody00.tabRfqInfo.tabRfqRmark);
            obj.getSetter("objNm").set("특이사항");
            obj.set_scrollbars("autovert");
            obj.set_taborder("0");
            this.divViewCompBody00.tabRfqInfo.tabRfqRmark.addChild(obj.name, obj);
            obj = new Tabpage("tabp03", this.divViewCompBody00.tabRfqInfo);
            obj.set_text("첨부파일");
            this.divViewCompBody00.tabRfqInfo.addChild(obj.name, obj);
            obj = new Div("divFile", "absolute", "3", "10", null, "250", "7", null, this.divViewCompBody00.tabRfqInfo.tabp03);
            obj.set_taborder("0");
            obj.getSetter("objNm").set("첨부파일");
            obj.set_url("CCOMP::CompNFileUpDown.xfdl");
            this.divViewCompBody00.tabRfqInfo.tabp03.addChild(obj.name, obj);
            obj = new Tabpage("tabp04", this.divViewCompBody00.tabRfqInfo);
            obj.getSetter("objNm").set("공개설명회");
            obj.style.set_background("white");
            obj.set_text("공개설명회");
            this.divViewCompBody00.tabRfqInfo.addChild(obj.name, obj);
            obj = new Radio("rdo_AltRfqOpen", "absolute", "436", "-37", "251", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabp04);
            this.divViewCompBody00.tabRfqInfo.tabp04.addChild(obj.name, obj);
            var rdo_AltRfqOpen_innerdataset = new Dataset("rdo_AltRfqOpen_innerdataset", this.divViewCompBody00.tabRfqInfo.tabp04.rdo_AltRfqOpen);
            rdo_AltRfqOpen_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">실시</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미실시</Col></Row></Rows>");
            obj.set_innerdataset(rdo_AltRfqOpen_innerdataset);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enableevent("false");
            obj.getSetter("objNm").set("공개설명회실시 여부");
            obj.set_taborder("96");
            obj = new Static("staViewCompLine00", "absolute", "0", "5", null, "33", "0", null, this.divViewCompBody00.tabRfqInfo.tabp04);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("99");
            this.divViewCompBody00.tabRfqInfo.tabp04.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "37", null, "33", "0", null, this.divViewCompBody00.tabRfqInfo.tabp04);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("100");
            this.divViewCompBody00.tabRfqInfo.tabp04.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "69", null, "33", "0", null, this.divViewCompBody00.tabRfqInfo.tabp04);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("101");
            this.divViewCompBody00.tabRfqInfo.tabp04.addChild(obj.name, obj);
            obj = new Static("st_Ttl01", "absolute", "0%", "5", "171", "33", null, null, this.divViewCompBody00.tabRfqInfo.tabp04);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("발주서명");
            obj.set_taborder("102");
            obj.set_text("공개설명회");
            this.divViewCompBody00.tabRfqInfo.tabp04.addChild(obj.name, obj);
            obj = new Static("st_Ttl", "absolute", "0%", "37", "171", "33", null, null, this.divViewCompBody00.tabRfqInfo.tabp04);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("발주서명");
            obj.set_taborder("103");
            obj.set_text("설명회 일시");
            this.divViewCompBody00.tabRfqInfo.tabp04.addChild(obj.name, obj);
            obj = new Calendar("cal_openExplnDay", "absolute", "176", "41", "120", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabp04);
            this.divViewCompBody00.tabRfqInfo.tabp04.addChild(obj.name, obj);
            obj.set_dateformat("yyyy.MM.dd");
            obj.set_editformat("yyyy.MM.dd");
            obj.getSetter("objNm").set("공객설명회일자");
            obj.set_taborder("104");
            obj.set_locale("en_US");
            obj = new Static("Static02", "absolute", "302", "41", "24", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabp04);
            obj.set_taborder("105");
            obj.set_text("일");
            this.divViewCompBody00.tabRfqInfo.tabp04.addChild(obj.name, obj);
            obj = new MaskEdit("mae_openExplnTime", "absolute", "331", "41", "104", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabp04);
            obj.set_clipmode("excludespace");
            obj.set_displaynulltext("00:00");
            obj.set_mask("##:##");
            obj.getSetter("objNm").set("공개설명회 마감시각");
            obj.set_taborder("106");
            obj.set_type("string");
            this.divViewCompBody00.tabRfqInfo.tabp04.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "440", "41", "62", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabp04);
            obj.set_taborder("107");
            obj.set_text("시");
            this.divViewCompBody00.tabRfqInfo.tabp04.addChild(obj.name, obj);
            obj = new Static("st_CrtrNm", "absolute", "0%", "69", "171", "33", null, null, this.divViewCompBody00.tabRfqInfo.tabp04);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("구매조직");
            obj.set_taborder("110");
            obj.set_text("장소");
            this.divViewCompBody00.tabRfqInfo.tabp04.addChild(obj.name, obj);
            obj = new Edit("edt_openExplnArea", "absolute", "176", "74", "1021", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabp04);
            obj.set_autoselect("true");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("설명회 장소");
            obj.set_taborder("111");
            this.divViewCompBody00.tabRfqInfo.tabp04.addChild(obj.name, obj);
            obj = new Static("staViewCompLine03", "absolute", "0", "101", null, "80", "0", null, this.divViewCompBody00.tabRfqInfo.tabp04);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("112");
            this.divViewCompBody00.tabRfqInfo.tabp04.addChild(obj.name, obj);
            obj = new Static("ed_PoAmt", "absolute", "0%", "101", "171", "80", null, null, this.divViewCompBody00.tabRfqInfo.tabp04);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("총금액");
            obj.set_taborder("113");
            obj.set_text("참여조건");
            this.divViewCompBody00.tabRfqInfo.tabp04.addChild(obj.name, obj);
            obj = new TextArea("txt_openExplnAttnCndtn", "absolute", "176", "106", "1021", "70", null, null, this.divViewCompBody00.tabRfqInfo.tabp04);
            obj.getSetter("objNm").set("공개설명회 참여조건");
            obj.set_scrollbars("none");
            obj.set_taborder("114");
            this.divViewCompBody00.tabRfqInfo.tabp04.addChild(obj.name, obj);
            obj = new CheckBox("chkAltOpenExpln", "absolute", "176", "10", "204", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabp04);
            obj.set_taborder("115");
            obj.set_text("공개설명회 실시");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_cssclass("chk_default");
            obj.getSetter("objNm").set("공개설명회실시여부");
            this.divViewCompBody00.tabRfqInfo.tabp04.addChild(obj.name, obj);
            obj = new Tabpage("tabp05", this.divViewCompBody00.tabRfqInfo);
            obj.getSetter("objNm").set("입찰 담당자");
            obj.style.set_background("white");
            obj.set_text("입찰 담당자  ");
            this.divViewCompBody00.tabRfqInfo.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "5", null, "33", "0", null, this.divViewCompBody00.tabRfqInfo.tabp05);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("64");
            this.divViewCompBody00.tabRfqInfo.tabp05.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "37", null, "33", "0", null, this.divViewCompBody00.tabRfqInfo.tabp05);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("65");
            this.divViewCompBody00.tabRfqInfo.tabp05.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "69", null, "33", "0", null, this.divViewCompBody00.tabRfqInfo.tabp05);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("66");
            this.divViewCompBody00.tabRfqInfo.tabp05.addChild(obj.name, obj);
            obj = new Static("staViewCompLine03", "absolute", "0", "101", null, "33", "0", null, this.divViewCompBody00.tabRfqInfo.tabp05);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("67");
            this.divViewCompBody00.tabRfqInfo.tabp05.addChild(obj.name, obj);
            obj = new Static("st_MtrlCd", "absolute", "0", "5", "171", "33", null, null, this.divViewCompBody00.tabRfqInfo.tabp05);
            obj.set_cssclass("sta_WF_Label");
            obj.set_taborder("68");
            obj.set_text("담당자");
            this.divViewCompBody00.tabRfqInfo.tabp05.addChild(obj.name, obj);
            obj = new Edit("edt_ChrgrId", "absolute", "176", "9", "100", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabp05);
            obj.set_cssclass("edt_default");
            obj.set_enable("false");
            obj.getSetter("objNm").set("입찰담당자ID");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_taborder("69");
            this.divViewCompBody00.tabRfqInfo.tabp05.addChild(obj.name, obj);
            obj = new Edit("edt_chrgrNm", "absolute", "281", "9", "272", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabp05);
            obj.set_cssclass("edt_default");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("입찰담당자명");
            obj.set_taborder("70");
            this.divViewCompBody00.tabRfqInfo.tabp05.addChild(obj.name, obj);
            obj = new Button("btn_chrgr", "absolute", "553", "9", "24", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabp05);
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("입찰담당자 검색 버튼");
            obj.set_taborder("71");
            this.divViewCompBody00.tabRfqInfo.tabp05.addChild(obj.name, obj);
            obj = new Static("st_MtrlCd00", "absolute", "0", "37", "171", "33", null, null, this.divViewCompBody00.tabRfqInfo.tabp05);
            obj.set_cssclass("sta_WF_Label");
            obj.set_taborder("72");
            obj.set_text("전화번호");
            this.divViewCompBody00.tabRfqInfo.tabp05.addChild(obj.name, obj);
            obj = new Edit("edt_tel", "absolute", "176", "41", "400", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabp05);
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("전화번호");
            obj.set_taborder("73");
            this.divViewCompBody00.tabRfqInfo.tabp05.addChild(obj.name, obj);
            obj = new Static("st_MtrlCd01", "absolute", "0", "69", "171", "33", null, null, this.divViewCompBody00.tabRfqInfo.tabp05);
            obj.set_cssclass("sta_WF_Label");
            obj.set_taborder("74");
            obj.set_text("e-Mail");
            this.divViewCompBody00.tabRfqInfo.tabp05.addChild(obj.name, obj);
            obj = new Edit("edt_email", "absolute", "176", "74", "400", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabp05);
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("이메일");
            obj.set_taborder("75");
            this.divViewCompBody00.tabRfqInfo.tabp05.addChild(obj.name, obj);
            obj = new Static("st_MtrlCd02", "absolute", "0", "101", "171", "33", null, null, this.divViewCompBody00.tabRfqInfo.tabp05);
            obj.set_cssclass("sta_WF_Label");
            obj.set_taborder("76");
            obj.set_text("Fax");
            this.divViewCompBody00.tabRfqInfo.tabp05.addChild(obj.name, obj);
            obj = new Edit("edt_fax", "absolute", "176", "105", "400", "24", null, null, this.divViewCompBody00.tabRfqInfo.tabp05);
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("팩스");
            obj.set_taborder("77");
            this.divViewCompBody00.tabRfqInfo.tabp05.addChild(obj.name, obj);

            obj = new Div("divViewCompBody02", "absolute", "0", "734", null, "234", "15", null, this);
            obj.getSetter("objNm").set("DIV-대상업체 상세");
            obj.set_scrollbars("none");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);
            obj = new Grid("grdRfqPtnr", "absolute", "0", "0", null, null, "0", "27", this.divViewCompBody02);
            obj.set_autofittype("col");
            obj.set_binddataset("dsRfqPtnr");
            obj.getSetter("f_colSize").set("N");
            obj.getSetter("f_excel").set("Y");
            obj.getSetter("f_filter").set("N");
            obj.getSetter("f_find").set("N");
            obj.getSetter("f_fix").set("Y");
            obj.getSetter("f_height").set("Y");
            obj.getSetter("f_hide").set("N");
            obj.getSetter("f_init").set("Y");
            obj.getSetter("f_mode").set("Y");
            obj.getSetter("f_save").set("N");
            obj.getSetter("f_sort").set("Y");
            obj.getSetter("objNm").set("대상협력사");
            obj.set_taborder("0");
            obj.set_locale("en_US");
            obj._setContents("<Formats><Format id=\"Bmode\"><Columns><Column size=\"103\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"185\"/><Column size=\"185\"/><Column size=\"185\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"협력사구분\" expr=\"expr:gfnMultiLabel(&quot;EPRO_LABEL_00703&quot;)\"/><Cell col=\"1\" text=\"VENDOR\" expr=\"expr:gfnMultiLabel(&quot;EPRO_LABEL_01151&quot;)\"/><Cell col=\"2\" text=\"사업자번호\" expr=\"expr:gfnMultiLabel(&quot;EPRO_LABEL_00149&quot;)\"/><Cell col=\"3\" text=\"협력사명\" expr=\"expr:gfnMultiLabel(&quot;EPRO_LABEL_00376&quot;)\"/><Cell col=\"4\" text=\"대표자명\" expr=\"expr:gfnMultiLabel(&quot;EPRO_LABEL_00530&quot;)\"/><Cell col=\"5\" cssclass=\"Cellgrd_edit\" text=\"제안설명회일자\" expr=\"expr:gfnMultiLabel(&quot;EPRO_LABEL_00622&quot;)\"/><Cell col=\"6\" cssclass=\"Cellgrd_edit\" text=\"제안설명회시간\" expr=\"expr:gfnMultiLabel(&quot;EPRO_LABEL_00668&quot;)\"/><Cell col=\"7\" cssclass=\"Cellgrd_edit\" text=\"제안설명회장소\" expr=\"expr:gfnMultiLabel(&quot;EPRO_LABEL_00706&quot;)\"/></Band><Band id=\"body\"><Cell style=\"align:center middle;\" text=\"bind:CD_PORG_UNIT_STTS_NM\"/><Cell col=\"1\" text=\"bind:SAP_VENDOR\"/><Cell col=\"2\" text=\"bind:BIZ_NO\"/><Cell col=\"3\" style=\"align:left;\" cssclass=\"cell_link\" text=\"bind:PTNR_NM\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:RPRSTV_NM\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"date\" style=\"align:center;\" text=\"bind:RFQ_EXPLN_DAY\" mask=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"date\" style=\"align:center;\" text=\"bind:RFQ_EXPLN_TIME\" mask=\"HH:mm\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" edittype=\"text\" style=\"align:left;\" text=\"bind:RFQ_EXPLN_AREA\" editlimit=\"100\" editlengthunit=\"utf8\"/></Band></Format></Formats>");
            this.divViewCompBody02.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "0", this.divViewCompBody02);
            obj.set_taborder("1");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("페이징");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.divViewCompBody02.addChild(obj.name, obj);

            obj = new Div("divViewCompBody03", "absolute", "0", "1017", null, "164", "15", null, this);
            obj.getSetter("objNm").set("DIV-입찰요청파일 상세");
            obj.set_scrollbars("none");
            obj.set_taborder("12");
            this.addChild(obj.name, obj);
            obj = new Grid("grdRfqReqFile", "absolute", "0", "0", null, null, "0", "0", this.divViewCompBody03);
            obj.set_autofittype("col");
            obj.set_binddataset("dsRfqReqFile");
            obj.getSetter("f_colSize").set("N");
            obj.getSetter("f_excel").set("Y");
            obj.getSetter("f_filter").set("N");
            obj.getSetter("f_find").set("N");
            obj.getSetter("f_fix").set("Y");
            obj.getSetter("f_height").set("N");
            obj.getSetter("f_hide").set("N");
            obj.getSetter("f_init").set("Y");
            obj.getSetter("f_mode").set("N");
            obj.getSetter("f_save").set("N");
            obj.getSetter("f_sort").set("N");
            obj.getSetter("objNm").set("품목 그리드");
            obj.set_taborder("0");
            obj.set_autoenter("none");
            obj._setContents("<Formats><Format id=\"Amode\"><Columns><Column size=\"40\"/><Column size=\"382\"/><Column size=\"188\"/><Column size=\"146\"/><Column size=\"454\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" cssclass=\"Cellgrd_edit\" text=\"요청파일\" expr=\"expr:gfnMultiLabel(&quot;EPRO_LABEL_00171&quot;)\"/><Cell col=\"2\" cssclass=\"Cellgrd_edit\" text=\"파일유형\" expr=\"expr:gfnMultiLabel(&quot;EPRO_LABEL_00575&quot;)\"/><Cell col=\"3\" cssclass=\"Cellgrd_edit\" text=\"필수여부\" expr=\"expr:gfnMultiLabel(&quot;EPRO_LABEL_00601&quot;)\"/><Cell col=\"4\" cssclass=\"Cellgrd_edit\" text=\"비고\" expr=\"expr:gfnMultiLabel(&quot;EPRO_LABEL_00444&quot;)\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:REQ_FILE_NM\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:CD_FILE_TYPE\" expandshow=\"show\" combodataset=\"dsCdCM32\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" calendardisplay=\"display\" calendardisplaynulltype=\"nullmask\"/><Cell col=\"3\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ALT_MDT\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:RMARK\"/></Band></Format></Formats>");
            this.divViewCompBody03.addChild(obj.name, obj);

            obj = new Div("divViewCompBody01", "absolute", "0%", "475", null, "210", "15", null, this);
            obj.getSetter("objNm").set("DIV-품목 상세");
            obj.set_taborder("13");
            this.addChild(obj.name, obj);
            obj = new Grid("grdRfqItem", "absolute", "0", "0", null, null, "0", "27", this.divViewCompBody01);
            obj.set_autoenter("none");
            obj.set_autofittype("col");
            obj.set_binddataset("dsRfqItemList");
            obj.getSetter("f_colSize").set("N");
            obj.getSetter("f_excel").set("Y");
            obj.getSetter("f_filter").set("N");
            obj.getSetter("f_find").set("N");
            obj.getSetter("f_fix").set("Y");
            obj.getSetter("f_height").set("Y");
            obj.getSetter("f_hide").set("N");
            obj.getSetter("f_init").set("Y");
            obj.getSetter("f_mode").set("Y");
            obj.getSetter("f_save").set("N");
            obj.getSetter("f_sort").set("Y");
            obj.getSetter("objNm").set("품목정보");
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"Amode\"><Columns><Column size=\"96\"/><Column size=\"296\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"품목코드\" expr=\"expr:gfnMultiLabel(&quot;EPRO_LABEL_00232&quot;)\"/><Cell col=\"1\" text=\"품목명\" expr=\"expr:gfnMultiLabel(&quot;EPRO_LABEL_00104&quot;)\"/><Cell col=\"2\" text=\"수량\" expr=\"expr:gfnMultiLabel(&quot;EPRO_LABEL_00617&quot;)\"/><Cell col=\"3\" text=\"단위\" expr=\"expr:gfnMultiLabel(&quot;EPRO_LABEL_00153&quot;)\"/><Cell col=\"4\" text=\"단가\" expr=\"expr:gfnMultiLabel(&quot;EPRO_LABEL_00572&quot;)\"/><Cell col=\"5\" text=\"구매목표가\" expr=\"expr:gfnMultiLabel(&quot;EPRO_LABEL_00715&quot;)\"/><Cell col=\"6\" text=\"납품요청일자\" expr=\"expr:gfnMultiLabel(&quot;EPRO_LABEL_00629&quot;)\"/><Cell col=\"7\" cssclass=\"Cellgrd_edit\" text=\"품목특이사항\" expr=\"expr:gfnMultiLabel(&quot;EPRO_LABEL_00679&quot;)\"/><Cell col=\"8\" cssclass=\"Cellgrd_edit\" text=\"파일\" expr=\"expr:gfnMultiLabel(&quot;EPRO_LABEL_00284&quot;)\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" cssclass=\"cell_link\" text=\"bind:MTRL_CD\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:MTRL_NM\"/><Cell col=\"2\" edittype=\"none\" style=\"align:right;\" text=\"bind:QTY\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('img::gridBtn__read.png')\"/><Cell col=\"3\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:CD_UNIT_NM\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:GOALUNT_PRICE\" mask=\"#,##0.####\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:GOALAMT\" mask=\"#,###.###\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"none\" style=\"align:center;\" text=\"bind:DLV_REQ_DAY\" mask=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"button\" edittype=\"button\" style=\"align:center middle;controlbackground:URL('img::gridBtn_input.png') center middle;controlborder:1 none #808080 ;\" text=\" \"/><Cell col=\"8\" displaytype=\"button\" edittype=\"button\" style=\"controlbackground:URL('img::grdBtn_file.png') center middle;controlborder:1 none #808080ff ;\" text=\" \"/></Band></Format><Format id=\"Bmode\"><Columns><Column size=\"96\"/><Column size=\"296\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"품목코드\" expr=\"expr:gfnMultiLabel(&quot;EPRO_LABEL_00232&quot;)\"/><Cell col=\"1\" text=\"품목명\" expr=\"expr:gfnMultiLabel(&quot;EPRO_LABEL_00104&quot;)\"/><Cell col=\"2\" text=\"수량\" expr=\"expr:gfnMultiLabel(&quot;EPRO_LABEL_00617&quot;)\"/><Cell col=\"3\" text=\"단위\" expr=\"expr:gfnMultiLabel(&quot;EPRO_LABEL_00153&quot;)\"/><Cell col=\"4\" text=\"단가\" expr=\"expr:gfnMultiLabel(&quot;EPRO_LABEL_00572&quot;)\"/><Cell col=\"5\" text=\"구매목표가\" expr=\"expr:gfnMultiLabel(&quot;EPRO_LABEL_00715&quot;)\"/><Cell col=\"6\" text=\"납품요청일자\" expr=\"expr:gfnMultiLabel(&quot;EPRO_LABEL_00629&quot;)\"/><Cell col=\"7\" cssclass=\"Cellgrd_edit\" text=\"품목특이사항\" expr=\"expr:gfnMultiLabel(&quot;EPRO_LABEL_00679&quot;)\"/><Cell col=\"8\" cssclass=\"Cellgrd_edit\" text=\"파일\" expr=\"expr:gfnMultiLabel(&quot;EPRO_LABEL_00284&quot;)\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" cssclass=\"cell_link\" text=\"bind:MTRL_CD\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:MTRL_NM\"/><Cell col=\"2\" edittype=\"none\" style=\"align:right;\" text=\"bind:QTY\"/><Cell col=\"3\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:CD_UNIT_NM\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:GOALUNT_PRICE\" mask=\"#,##0.####\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:GOALAMT\" mask=\"#,###.###\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"none\" style=\"align:center;\" text=\"bind:DLV_REQ_DAY\" mask=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"button\" edittype=\"button\" style=\"align:center middle;controlbackground:URL('img::gridBtn_input.png') center middle;controlborder:1 none #808080ff ;\" text=\" \"/><Cell col=\"8\" displaytype=\"button\" edittype=\"button\" style=\"controlbackground:URL('img::grdBtn_file.png') center middle;controlborder:1 none #808080ff ;\" text=\" \"/></Band></Format></Formats>");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "0", this.divViewCompBody01);
            obj.set_taborder("1");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("페이징");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.divViewCompBody01.addChild(obj.name, obj);

            obj = new Div("divViewCompTitle00", "absolute", "0", "63", null, "24", "10", null, this);
            obj.getSetter("objNm").set("DIV-기본정보 타이틀");
            obj.set_taborder("14");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "0", "255", "24", null, null, this.divViewCompTitle00);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.getSetter("objNm").set("기본정보타이틀");
            obj.set_taborder("0");
            obj.set_text("기본정보");
            this.divViewCompTitle00.addChild(obj.name, obj);

            obj = new Div("divViewCompCond00", "absolute", "0", "0", null, "43", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.getSetter("objNm").set("DIV-입찰 진행 상세 ");
            obj.set_taborder("15");
            this.addChild(obj.name, obj);
            obj = new Edit("edtRfqReqNo", "absolute", "6", "10", "171", "24", null, null, this.divViewCompCond00);
            obj.getSetter("objNm").set("입찰요청번호");
            obj.set_taborder("1");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Edit("edtRfqReqNo01", "absolute", "181", "10", "306", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("3");
            obj.getSetter("objNm").set("소싱그룹2");
            this.divViewCompCond00.addChild(obj.name, obj);

            obj = new Div("divViewCompTitle01", "absolute", "0", "446", null, "24", "10", null, this);
            obj.getSetter("objNm").set("DIV-품목정보 타이틀");
            obj.set_taborder("16");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle01", "absolute", "0", "0", "255", "24", null, null, this.divViewCompTitle01);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.getSetter("objNm").set("품목정보타이틀");
            obj.set_taborder("26");
            obj.set_text("품목정보");
            this.divViewCompTitle01.addChild(obj.name, obj);
            obj = new Button("Undefined_13", "absolute", null, "0", "120", "24", "6", null, this.divViewCompTitle01);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("납품일자 일괄설정");
            obj.set_taborder("29");
            obj.set_text("납품일자 일괄설정");
            this.divViewCompTitle01.addChild(obj.name, obj);

            obj = new Div("divViewCompTitle02", "absolute", "0", "705", null, "24", "10", null, this);
            obj.getSetter("objNm").set("DIV-대상 협력사 타이틀");
            obj.set_taborder("17");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle02", "absolute", "0", "0", "255", null, null, "0", this.divViewCompTitle02);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.getSetter("objNm").set("대상협력사타이틀");
            obj.set_taborder("4");
            obj.set_text("대상협력사");
            this.divViewCompTitle02.addChild(obj.name, obj);
            obj = new Button("btnRfqExplnMail", "absolute", null, "0", "132", "24", "6", null, this.divViewCompTitle02);
            obj.set_taborder("5");
            obj.set_text("제안설명회메일발송");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("제안설명회메일발송");
            this.divViewCompTitle02.addChild(obj.name, obj);

            obj = new Div("divViewCompTitle03", "absolute", "0", "988", null, "24", "10", null, this);
            obj.getSetter("objNm").set("DIV-입찰요청파일 타이틀");
            obj.set_taborder("18");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle03", "absolute", "0", "0", "255", "24", null, null, this.divViewCompTitle03);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.getSetter("objNm").set("입찰요청파일타이틀");
            obj.set_taborder("3");
            obj.set_text("입찰요청파일");
            this.divViewCompTitle03.addChild(obj.name, obj);
            obj = new Button("btnRfqFileDel", "absolute", null, "0", "61", "24", "6", null, this.divViewCompTitle03);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("입찰요청파일삭제");
            obj.set_positionstep("1");
            obj.set_taborder("5");
            obj.set_text("삭제");
            obj.set_visible("true");
            this.divViewCompTitle03.addChild(obj.name, obj);
            obj = new Button("btnRfqFileAdd", "absolute", null, "0", "61", "24", "72", null, this.divViewCompTitle03);
            obj.set_taborder("6");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Module");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("입찰요청파일추가");
            this.divViewCompTitle03.addChild(obj.name, obj);

            obj = new Div("divViewCompBody04", "absolute", "0", "1187", null, "83", "16", null, this);
            obj.set_taborder("19");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("DIV-입찰요청파일 상세");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv01", "absolute", "1227", "449", "125", "28", null, null, this);
            obj.set_text("PopupDiv01");
            this.addChild(obj.name, obj);
            obj = new Calendar("cal_dlvDayBat", "fixed", "0", "-1", "120", "24", null, null, this.PopupDiv01);
            this.PopupDiv01.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            obj.set_dateformat("yyyy.MM.dd ddd");
            obj.set_editformat("yyyy.MM.dd");
            obj.getSetter("objNm").set("납품일자 일괄설정 달력");
            obj.set_locale("en_US");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1042, 156, this.divViewCompBody00.tabRfqInfo.tabRfq,
            	//-- Layout function
            	function(p) {
            		p.getSetter("lbcd").set("");
            		p.getSetter("objNm").set("기본정보");
            		p.set_scrollbars("none");
            		p.style.set_background("white");
            		p.set_text("기본정보");

            	}
            );
            this.divViewCompBody00.tabRfqInfo.tabRfq.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.divViewCompBody00.tabRfqInfo.tabRfqRmark,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("특기사항");
            		p.set_scrollbars("none");
            		p.style.set_background("white");
            		p.set_text("특이사항");

            	}
            );
            this.divViewCompBody00.tabRfqInfo.tabRfqRmark.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.divViewCompBody00.tabRfqInfo.tabp03,
            	//-- Layout function
            	function(p) {
            		p.set_text("첨부파일");

            	}
            );
            this.divViewCompBody00.tabRfqInfo.tabp03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.divViewCompBody00.tabRfqInfo.tabp04,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("공개설명회");
            		p.style.set_background("white");
            		p.set_text("공개설명회");

            	}
            );
            this.divViewCompBody00.tabRfqInfo.tabp04.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.divViewCompBody00.tabRfqInfo.tabp05,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("입찰 담당자");
            		p.style.set_background("white");
            		p.set_text("입찰 담당자  ");

            	}
            );
            this.divViewCompBody00.tabRfqInfo.tabp05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 334, this.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-헤더 상세");
            		p.set_scrollbars("none");
            		p.set_taborder("5");

            	}
            );
            this.divViewCompBody00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 234, this.divViewCompBody02,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-대상업체 상세");
            		p.set_scrollbars("none");
            		p.set_taborder("10");

            	}
            );
            this.divViewCompBody02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 164, this.divViewCompBody03,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-입찰요청파일 상세");
            		p.set_scrollbars("none");
            		p.set_taborder("12");

            	}
            );
            this.divViewCompBody03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1205, 187, this.divViewCompBody01,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-품목 상세");
            		p.set_taborder("13");

            	}
            );
            this.divViewCompBody01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompTitle00,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-기본정보 타이틀");
            		p.set_taborder("14");

            	}
            );
            this.divViewCompTitle00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.divViewCompCond00,
            	//-- Layout function
            	function(p) {
            		p.set_cssclass("div_WF_SearchBg");
            		p.getSetter("objNm").set("DIV-입찰 진행 상세 ");
            		p.set_taborder("15");

            	}
            );
            this.divViewCompCond00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompTitle01,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-품목정보 타이틀");
            		p.set_taborder("16");

            	}
            );
            this.divViewCompTitle01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompTitle02,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-대상 협력사 타이틀");
            		p.set_taborder("17");

            	}
            );
            this.divViewCompTitle02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompTitle03,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-입찰요청파일 타이틀");
            		p.set_taborder("18");

            	}
            );
            this.divViewCompTitle03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 125, 28, this.PopupDiv01,
            	//-- Layout function
            	function(p) {
            		p.set_text("PopupDiv01");

            	}
            );
            this.PopupDiv01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1220, 1486, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("입찰진행상세");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("btnRfqFileAddVi","divViewCompTitle03.btnRfqFileAdd","visible","dsObjBindVi","btnRfqFileAdd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnRfqFileAddEn","divViewCompTitle03.btnRfqFileAdd","enable","dsObjBindEn","btnRfqFileAdd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnRfqFileAddLangBind2017110317184316455","divViewCompTitle03.btnRfqFileAdd","text","gdsLabel","EPRO_LABEL_00144");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","divViewCompCond00.edtRfqReqNo","value","dsRfq","RFQ_REQ_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","divViewCompBody00.tabRfqInfo.tabRfqRmark.txaRmark","value","dsRfq","RMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabRfqInfoVi","divViewCompBody00.tabRfqInfo","visible","dsObjBindVi","tabRfqInfo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabRfqInfoEn","divViewCompBody00.tabRfqInfo","enable","dsObjBindEn","tabRfqInfo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabRfqVi","divViewCompBody00.tabRfqInfo.tabRfq","visible","dsObjBindVi","tabRfq");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabRfqEn","divViewCompBody00.tabRfqInfo.tabRfq","enable","dsObjBindEn","tabRfq");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sta_WFDA_Label05Vi","divViewCompBody00.tabRfqInfo.tabRfq.sta_WFDA_Label05","visible","dsObjBindVi","sta_WFDA_Label05");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sta_WFDA_Label05En","divViewCompBody00.tabRfqInfo.tabRfq.sta_WFDA_Label05","enable","dsObjBindEn","sta_WFDA_Label05");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mae_goalamtVi","divViewCompBody00.tabRfqInfo.tabRfq.mae_goalamt","visible","dsObjBindVi","mae_goalamt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mae_goalamtEn","divViewCompBody00.tabRfqInfo.tabRfq.mae_goalamt","readonly","dsObjBindEn","mae_goalamt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabRfqRmarkVi","divViewCompBody00.tabRfqInfo.tabRfqRmark","visible","dsObjBindVi","tabRfqRmark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabRfqRmarkEn","divViewCompBody00.tabRfqInfo.tabRfqRmark","enable","dsObjBindEn","tabRfqRmark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp04Vi","divViewCompBody00.tabRfqInfo.tabp04","visible","dsObjBindVi","tabp04");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp04En","divViewCompBody00.tabRfqInfo.tabp04","enable","dsObjBindEn","tabp04");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("rdo_AltRfqOpenVi","divViewCompBody00.tabRfqInfo.tabp04.rdo_AltRfqOpen","visible","dsObjBindVi","rdo_AltRfqOpen");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("rdo_AltRfqOpenEn","divViewCompBody00.tabRfqInfo.tabp04.rdo_AltRfqOpen","readonly","dsObjBindEn","rdo_AltRfqOpen");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabpage6Vi","divViewCompBody00.tabRfqInfo.tabp05","visible","dsObjBindVi","tabpage6");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabpage6En","divViewCompBody00.tabRfqInfo.tabp05","enable","dsObjBindEn","tabpage6");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Undefined_13Vi","divViewCompTitle01.Undefined_13","visible","dsObjBindVi","Undefined_13");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Undefined_13En","divViewCompTitle01.Undefined_13","enable","dsObjBindEn","Undefined_13");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnRfqFileDelVi","divViewCompTitle03.btnRfqFileDel","visible","dsObjBindVi","btnRfqFileDel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnRfqFileDelEn","divViewCompTitle03.btnRfqFileDel","enable","dsObjBindEn","btnRfqFileDel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnRemote_0Vi","1500641_201710231358109_divRemote.btnRemote_0","visible","dsObjBindVi","btnRemote_0");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnRemote_0En","1500641_201710231358109_divRemote.btnRemote_0","enable","dsObjBindEn","btnRemote_0");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("grdRfqPtnrFormatId","divViewCompBody02.grdRfqPtnr","formatid","dsObjBindGrid","grdRfqPtnr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("grdRfqReqFileFormatId","divViewCompBody03.grdRfqReqFile","formatid","dsObjBindGrid","grdRfqReqFile");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("grdRfqItemFormatId","divViewCompBody01.grdRfqItem","formatid","dsObjBindGrid","grdRfqItem");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divViewCompBody00.tabRfqInfo.tabRfq.edtCdRfqStts","value","dsRfq","CD_RFQ_STTS_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCdRfqSttsVi","divViewCompBody00.tabRfqInfo.tabRfq.staCdRfqStts","visible","dsObjBindVi","staCdRfqStts");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCdRfqSttsEn","divViewCompBody00.tabRfqInfo.tabRfq.staCdRfqStts","enable","dsObjBindEn","staCdRfqStts");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","divViewCompBody00.tabRfqInfo.tabRfq.calRfqCloseTime","value","dsRfq","RFQ_CLOSE_TIME_HR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","divViewCompBody00.tabRfqInfo.tabRfq.cldRfqCloseDay","value","dsRfq","RFQ_CLOSE_DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqCloseDTVi","divViewCompBody00.tabRfqInfo.tabRfq.staRfqCloseDT","visible","dsObjBindVi","staRfqCloseDT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqCloseDTEn","divViewCompBody00.tabRfqInfo.tabRfq.staRfqCloseDT","enable","dsObjBindEn","staRfqCloseDT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","divViewCompBody00.tabRfqInfo.tabRfq.cboCdBidUnit","value","dsRfq","CD_BID_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","divViewCompBody00.tabRfqInfo.tabRfq.staCdBidUnit","visible","dsObjBindVi","staCdRfqCrnc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","divViewCompBody00.tabRfqInfo.tabRfq.staCdBidUnit","enable","dsObjBindEn","staCdRfqCrnc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","divViewCompBody00.tabRfqInfo.tabRfq.cboCdRfqAim","value","dsRfq","CD_RFQ_AIM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCdRfqAimVi","divViewCompBody00.tabRfqInfo.tabRfq.staCdRfqAim","visible","dsObjBindVi","staCdRfqAim");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCdRfqAimEn","divViewCompBody00.tabRfqInfo.tabRfq.staCdRfqAim","enable","dsObjBindEn","staCdRfqAim");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","divViewCompBody00.tabRfqInfo.tabRfq.cboCdRfqCrnc","value","dsRfq","CD_RFQ_CRNC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCdRfqCrncVi","divViewCompBody00.tabRfqInfo.tabRfq.staCdRfqCrnc","visible","dsObjBindVi","staCdRfqCrnc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCdRfqCrncEn","divViewCompBody00.tabRfqInfo.tabRfq.staCdRfqCrnc","enable","dsObjBindEn","staCdRfqCrnc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","divViewCompBody00.tabRfqInfo.tabRfq.edtGoalamt","value","dsRfq","GOALAMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","divViewCompBody00.tabRfqInfo.tabRfq.staEvalType","visible","dsObjBindVi","Undefined_8");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","divViewCompBody00.tabRfqInfo.tabRfq.staEvalType","enable","dsObjBindEn","Undefined_8");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","divViewCompBody00.tabRfqInfo.tabRfq.staEvalRate","visible","dsObjBindVi","staAltBdgtOpen");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","divViewCompBody00.tabRfqInfo.tabRfq.staEvalRate","enable","dsObjBindEn","staAltBdgtOpen");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTtlVi","divViewCompBody00.tabRfqInfo.tabRfq.staTtl","visible","dsObjBindVi","staTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTtlEn","divViewCompBody00.tabRfqInfo.tabRfq.staTtl","enable","dsObjBindEn","staTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","divViewCompBody00.tabRfqInfo.tabRfq.edtTtl","value","dsRfq","TTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divViewCompBody00.tabRfqInfo.tabRfq.edtRrqOdr","value","dsRfq","RFQ_ODR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdrVi","divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr","visible","dsObjBindVi","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdrEn","divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr","enable","dsObjBindEn","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Undefined_1Vi","divViewCompBody00.tabRfqInfo.tabRfq.staOption","visible","dsObjBindVi","Undefined_1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Undefined_1En","divViewCompBody00.tabRfqInfo.tabRfq.staOption","enable","dsObjBindEn","Undefined_1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item67","divViewCompBody00.tabRfqInfo.tabRfq.chkAltBdgtOpen","value","dsRfq","ALT_BDGT_OPEN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","divViewCompBody00.tabRfqInfo.tabRfq.chkAltTargCorpOpen","value","dsRfq","ALT_TARG_CORP_OPEN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCdBidUnitVi","divViewCompBody00.tabRfqInfo.tabRfq.staCdBidUnit","visible","dsObjBindVi","staCdBidUnit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCdBidUnitEn","divViewCompBody00.tabRfqInfo.tabRfq.staCdBidUnit","enable","dsObjBindEn","staCdBidUnit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staGoalamtVi","divViewCompBody00.tabRfqInfo.tabRfq.staGoalamt","visible","dsObjBindVi","staGoalamt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staGoalamtEn","divViewCompBody00.tabRfqInfo.tabRfq.staGoalamt","enable","dsObjBindEn","staGoalamt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Undefined_00Vi","divViewCompBody00.tabRfqInfo.tabRfq.staEvalType","visible","dsObjBindVi","Undefined_00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Undefined_00En","divViewCompBody00.tabRfqInfo.tabRfq.staEvalType","enable","dsObjBindEn","Undefined_00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAltBdgtOpen01Vi","divViewCompBody00.tabRfqInfo.tabRfq.staEvalRate","visible","dsObjBindVi","staAltBdgtOpen01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAltBdgtOpen01En","divViewCompBody00.tabRfqInfo.tabRfq.staEvalRate","enable","dsObjBindEn","staAltBdgtOpen01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staOptionVi","divViewCompBody00.tabRfqInfo.tabRfq.staOption","visible","dsObjBindVi","staOption");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staOptionEn","divViewCompBody00.tabRfqInfo.tabRfq.staOption","enable","dsObjBindEn","staOption");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("st_Ttl01Vi","divViewCompBody00.tabRfqInfo.tabp04.st_Ttl01","visible","dsObjBindVi","st_Ttl01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("st_Ttl01En","divViewCompBody00.tabRfqInfo.tabp04.st_Ttl01","enable","dsObjBindEn","st_Ttl01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("st_TtlVi","divViewCompBody00.tabRfqInfo.tabp04.st_Ttl","visible","dsObjBindVi","st_Ttl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("st_TtlEn","divViewCompBody00.tabRfqInfo.tabp04.st_Ttl","enable","dsObjBindEn","st_Ttl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cal_openExplnDayVi","divViewCompBody00.tabRfqInfo.tabp04.cal_openExplnDay","visible","dsObjBindVi","cal_openExplnDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cal_openExplnDayEn","divViewCompBody00.tabRfqInfo.tabp04.cal_openExplnDay","readonly","dsObjBindEn","cal_openExplnDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static02Vi","divViewCompBody00.tabRfqInfo.tabp04.Static02","visible","dsObjBindVi","Static02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static02En","divViewCompBody00.tabRfqInfo.tabp04.Static02","enable","dsObjBindEn","Static02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mae_openExplnTimeVi","divViewCompBody00.tabRfqInfo.tabp04.mae_openExplnTime","visible","dsObjBindVi","mae_openExplnTime");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mae_openExplnTimeEn","divViewCompBody00.tabRfqInfo.tabp04.mae_openExplnTime","readonly","dsObjBindEn","mae_openExplnTime");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static03Vi","divViewCompBody00.tabRfqInfo.tabp04.Static03","visible","dsObjBindVi","Static03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static03En","divViewCompBody00.tabRfqInfo.tabp04.Static03","enable","dsObjBindEn","Static03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("st_CrtrNmVi","divViewCompBody00.tabRfqInfo.tabp04.st_CrtrNm","visible","dsObjBindVi","st_CrtrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("st_CrtrNmEn","divViewCompBody00.tabRfqInfo.tabp04.st_CrtrNm","enable","dsObjBindEn","st_CrtrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edt_openExplnAreaVi","divViewCompBody00.tabRfqInfo.tabp04.edt_openExplnArea","visible","dsObjBindVi","edt_openExplnArea");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edt_openExplnAreaEn","divViewCompBody00.tabRfqInfo.tabp04.edt_openExplnArea","readonly","dsObjBindEn","edt_openExplnArea");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("ed_PoAmtVi","divViewCompBody00.tabRfqInfo.tabp04.ed_PoAmt","visible","dsObjBindVi","ed_PoAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("ed_PoAmtEn","divViewCompBody00.tabRfqInfo.tabp04.ed_PoAmt","enable","dsObjBindEn","ed_PoAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txt_openExplnAttnCndtnVi","divViewCompBody00.tabRfqInfo.tabp04.txt_openExplnAttnCndtn","visible","dsObjBindVi","txt_openExplnAttnCndtn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txt_openExplnAttnCndtnEn","divViewCompBody00.tabRfqInfo.tabp04.txt_openExplnAttnCndtn","readonly","dsObjBindEn","txt_openExplnAttnCndtn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCdRfqSttsLangBind2017110317184356760","divViewCompBody00.tabRfqInfo.tabRfq.staCdRfqStts","text","gdsLabel","EPRO_LABEL_00021");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqCloseDTLangBind2017110317184351790","divViewCompBody00.tabRfqInfo.tabRfq.staRfqCloseDT","text","gdsLabel","EPRO_LABEL_00036");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCdBidUnitLangBind2017110317184315466","divViewCompBody00.tabRfqInfo.tabRfq.staCdBidUnit","text","gdsLabel","EPRO_LABEL_00288");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCdRfqAimLangBind2017110317184311084","divViewCompBody00.tabRfqInfo.tabRfq.staCdRfqAim","text","gdsLabel","EPRO_LABEL_00126");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCdRfqCrncLangBind201711031718439081","divViewCompBody00.tabRfqInfo.tabRfq.staCdRfqCrnc","text","gdsLabel","EPRO_LABEL_00323");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staGoalamtLangBind2017110317184334333","divViewCompBody00.tabRfqInfo.tabRfq.staGoalamt","text","gdsLabel","EPRO_LABEL_00187");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Undefined_00LangBind2017110317184393897","divViewCompBody00.tabRfqInfo.tabRfq.staEvalType","text","gdsLabel","EPRO_LABEL_00535");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAltBdgtOpen01LangBind2017110317184373774","divViewCompBody00.tabRfqInfo.tabRfq.staEvalRate","text","gdsLabel","EPRO_LABEL_00309");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTtlLangBind2017110317184347696","divViewCompBody00.tabRfqInfo.tabRfq.staTtl","text","gdsLabel","EPRO_LABEL_00085");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdrLangBind2017110317184346874","divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr","text","gdsLabel","EPRO_LABEL_00440");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staOptionLangBind2017110317184352941","divViewCompBody00.tabRfqInfo.tabRfq.staOption","text","gdsLabel","EPRO_LABEL_00218");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("st_Ttl01LangBind2017110317184384842","divViewCompBody00.tabRfqInfo.tabp04.st_Ttl01","text","gdsLabel","EPRO_LABEL_00538");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("st_TtlLangBind2017110317184348965","divViewCompBody00.tabRfqInfo.tabp04.st_Ttl","text","gdsLabel","EPRO_LABEL_00094");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static02LangBind2017110317184310595","divViewCompBody00.tabRfqInfo.tabp04.Static02","text","gdsLabel","EPRO_LABEL_00493");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static03LangBind2017110317184384135","divViewCompBody00.tabRfqInfo.tabp04.Static03","text","gdsLabel","EPRO_LABEL_00416");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("st_CrtrNmLangBind2017110317184372752","divViewCompBody00.tabRfqInfo.tabp04.st_CrtrNm","text","gdsLabel","EPRO_LABEL_00383");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("ed_PoAmtLangBind2017110317184341754","divViewCompBody00.tabRfqInfo.tabp04.ed_PoAmt","text","gdsLabel","EPRO_LABEL_00355");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("st_MtrlCdLangBind2017110317184329309","divViewCompBody00.tabRfqInfo.tabpage6.st_MtrlCd","text","gdsLabel","EPRO_LABEL_00451");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("st_MtrlCd00LangBind201711031718437421","divViewCompBody00.tabRfqInfo.tabpage6.st_MtrlCd00","text","gdsLabel","EPRO_LABEL_00510");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("st_MtrlCd01LangBind2017110317184345111","divViewCompBody00.tabRfqInfo.tabpage6.st_MtrlCd01","text","gdsLabel","EPRO_LABEL_00124");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("st_MtrlCd02LangBind2017110317184310324","divViewCompBody00.tabRfqInfo.tabpage6.st_MtrlCd02","text","gdsLabel","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staViewCompTitle00LangBind2017110317184325914","divViewCompTitle00.staViewCompTitle00","text","gdsLabel","EPRO_LABEL_00047");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staViewCompTitle01LangBind2017110317184344207","divViewCompTitle01.staViewCompTitle01","text","gdsLabel","EPRO_LABEL_00161");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staViewCompTitle02LangBind2017110317184324288","divViewCompTitle02.staViewCompTitle02","text","gdsLabel","EPRO_LABEL_00135");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staViewCompTitle03LangBind2017110317184368491","divViewCompTitle03.staViewCompTitle03","text","gdsLabel","EPRO_LABEL_00295");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Undefined_13LangBind2017110317184391454","divViewCompTitle01.Undefined_13","text","gdsLabel","EPRO_LABEL_00390");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnRfqFileDelLangBind2017110317184310479","divViewCompTitle03.btnRfqFileDel","text","gdsLabel","EPRO_LABEL_00172");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","divViewCompBody00.tabRfqInfo.tabRfq.cboIncoterms","value","dsRfq","CD_INCOTERMS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","divViewCompBody00.tabRfqInfo.tabRfq.edtRtF","value","dsRfq","RT_F");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","divViewCompBody00.tabRfqInfo.tabRfq.edtRtD","value","dsRfq","RT_D");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","divViewCompBody00.tabRfqInfo.tabRfq.edtRtT","value","dsRfq","RT_T");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","divViewCompBody00.tabRfqInfo.tabRfq.edtRtC","value","dsRfq","RT_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","divViewCompBody00.tabRfqInfo.tabRfq.edtRtQ","value","dsRfq","RT_Q");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","divViewCompBody00.tabRfqInfo.tabRfq.cboEvalType","value","dsRfq","CD_EVAL_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","divViewCompBody00.tabRfqInfo.tabRfq.edtTcoBgnYr","value","dsRfq","TCO_BGN_YR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","divViewCompBody00.tabRfqInfo.tabRfq.edtTcoYr","value","dsRfq","TCO_YR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","divViewCompBody00.tabRfqInfo.tabRfq.chkAltLowFailAply","value","dsRfq","ALT_LOW_FAIL_APLY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","divViewCompBody00.tabRfqInfo.tabp05.edt_ChrgrId","value","dsRfq","CHRGR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","divViewCompBody00.tabRfqInfo.tabp05.edt_chrgrNm","value","dsRfq","CHRGR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item38","divViewCompBody00.tabRfqInfo.tabp05.edt_tel","value","dsRfq","TEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item39","divViewCompBody00.tabRfqInfo.tabp05.edt_email","value","dsRfq","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item42","divViewCompBody00.tabRfqInfo.tabp05.edt_fax","value","dsRfq","FAX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item44","divViewCompCond00.edtRfqReqNo01","value","dsRfq","SRC_GRP_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","divViewCompBody00.tabRfqInfo.tabRfq.chkAltRfqPriceSbmt","value","dsRfq","ALT_RFQ_PRICE_SBMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCdRfqSttsVi","divViewCompBody00.tabRfqInfo.tabRfq.edtCdRfqStts","visible","dsObjBindVi","edtCdRfqStts");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCdRfqSttsEn","divViewCompBody00.tabRfqInfo.tabRfq.edtCdRfqStts","readonly","dsObjBindEn","edtCdRfqStts");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calRfqCloseTimeVi","divViewCompBody00.tabRfqInfo.tabRfq.calRfqCloseTime","visible","dsObjBindVi","calRfqCloseTime");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calRfqCloseTimeEn","divViewCompBody00.tabRfqInfo.tabRfq.calRfqCloseTime","readonly","dsObjBindEn","calRfqCloseTime");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cldRfqCloseDayVi","divViewCompBody00.tabRfqInfo.tabRfq.cldRfqCloseDay","visible","dsObjBindVi","cldRfqCloseDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cldRfqCloseDayEn","divViewCompBody00.tabRfqInfo.tabRfq.cldRfqCloseDay","readonly","dsObjBindEn","cldRfqCloseDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboCdBidUnitVi","divViewCompBody00.tabRfqInfo.tabRfq.cboCdBidUnit","visible","dsObjBindVi","cboCdBidUnit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboCdRfqAimVi","divViewCompBody00.tabRfqInfo.tabRfq.cboCdRfqAim","visible","dsObjBindVi","cboCdRfqAim");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboCdRfqAimEn","divViewCompBody00.tabRfqInfo.tabRfq.cboCdRfqAim","readonly","dsObjBindEn","cboCdRfqAim");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboCdRfqCrncVi","divViewCompBody00.tabRfqInfo.tabRfq.cboCdRfqCrnc","visible","dsObjBindVi","cboCdRfqCrnc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboCdRfqCrncEn","divViewCompBody00.tabRfqInfo.tabRfq.cboCdRfqCrnc","readonly","dsObjBindEn","cboCdRfqCrnc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtGoalamtVi","divViewCompBody00.tabRfqInfo.tabRfq.edtGoalamt","visible","dsObjBindVi","edtGoalamt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtGoalamtEn","divViewCompBody00.tabRfqInfo.tabRfq.edtGoalamt","readonly","dsObjBindEn","edtGoalamt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboEvalTypeVi","divViewCompBody00.tabRfqInfo.tabRfq.cboEvalType","visible","dsObjBindVi","cboEvalType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboEvalTypeEn","divViewCompBody00.tabRfqInfo.tabRfq.cboEvalType","readonly","dsObjBindEn","cboEvalType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staEvalTypeVi","divViewCompBody00.tabRfqInfo.tabRfq.staEvalType","visible","dsObjBindVi","staEvalType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staEvalTypeEn","divViewCompBody00.tabRfqInfo.tabRfq.staEvalType","enable","dsObjBindEn","staEvalType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRtFVi","divViewCompBody00.tabRfqInfo.tabRfq.edtRtF","visible","dsObjBindVi","edtRtF");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRtFEn","divViewCompBody00.tabRfqInfo.tabRfq.edtRtF","readonly","dsObjBindEn","edtRtF");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRtDVi","divViewCompBody00.tabRfqInfo.tabRfq.edtRtD","visible","dsObjBindVi","edtRtD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRtDEn","divViewCompBody00.tabRfqInfo.tabRfq.edtRtD","readonly","dsObjBindEn","edtRtD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRtTVi","divViewCompBody00.tabRfqInfo.tabRfq.edtRtT","visible","dsObjBindVi","edtRtT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRtTEn","divViewCompBody00.tabRfqInfo.tabRfq.edtRtT","readonly","dsObjBindEn","edtRtT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRtCVi","divViewCompBody00.tabRfqInfo.tabRfq.edtRtC","visible","dsObjBindVi","edtRtC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRtCEn","divViewCompBody00.tabRfqInfo.tabRfq.edtRtC","readonly","dsObjBindEn","edtRtC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRtQVi","divViewCompBody00.tabRfqInfo.tabRfq.edtRtQ","visible","dsObjBindVi","edtRtQ");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRtQEn","divViewCompBody00.tabRfqInfo.tabRfq.edtRtQ","readonly","dsObjBindEn","edtRtQ");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staEvalRateVi","divViewCompBody00.tabRfqInfo.tabRfq.staEvalRate","visible","dsObjBindVi","staEvalRate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staEvalRateEn","divViewCompBody00.tabRfqInfo.tabRfq.staEvalRate","enable","dsObjBindEn","staEvalRate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTtlVi","divViewCompBody00.tabRfqInfo.tabRfq.edtTtl","visible","dsObjBindVi","edtTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTtlEn","divViewCompBody00.tabRfqInfo.tabRfq.edtTtl","readonly","dsObjBindEn","edtTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRrqOdrVi","divViewCompBody00.tabRfqInfo.tabRfq.edtRrqOdr","visible","dsObjBindVi","edtRrqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRrqOdrEn","divViewCompBody00.tabRfqInfo.tabRfq.edtRrqOdr","readonly","dsObjBindEn","edtRrqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkAltBdgtOpenVi","divViewCompBody00.tabRfqInfo.tabRfq.chkAltBdgtOpen","visible","dsObjBindVi","chkAltBdgtOpen");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkAltBdgtOpenEn","divViewCompBody00.tabRfqInfo.tabRfq.chkAltBdgtOpen","readonly","dsObjBindEn","chkAltBdgtOpen");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkAltTargCorpOpenVi","divViewCompBody00.tabRfqInfo.tabRfq.chkAltTargCorpOpen","visible","dsObjBindVi","chkAltTargCorpOpen");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkAltTargCorpOpenEn","divViewCompBody00.tabRfqInfo.tabRfq.chkAltTargCorpOpen","readonly","dsObjBindEn","chkAltTargCorpOpen");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staIncotermsVi","divViewCompBody00.tabRfqInfo.tabRfq.staIncoterms","visible","dsObjBindVi","staIncoterms");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staIncotermsEn","divViewCompBody00.tabRfqInfo.tabRfq.staIncoterms","enable","dsObjBindEn","staIncoterms");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboIncotermsVi","divViewCompBody00.tabRfqInfo.tabRfq.cboIncoterms","visible","dsObjBindVi","cboIncoterms");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboIncotermsEn","divViewCompBody00.tabRfqInfo.tabRfq.cboIncoterms","readonly","dsObjBindEn","cboIncoterms");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAltLowFailAplyVi","divViewCompBody00.tabRfqInfo.tabRfq.staAltLowFailAply","visible","dsObjBindVi","staAltLowFailAply");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAltLowFailAplyEn","divViewCompBody00.tabRfqInfo.tabRfq.staAltLowFailAply","enable","dsObjBindEn","staAltLowFailAply");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkAltLowFailAplyVi","divViewCompBody00.tabRfqInfo.tabRfq.chkAltLowFailAply","visible","dsObjBindVi","chkAltLowFailAply");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkAltLowFailAplyEn","divViewCompBody00.tabRfqInfo.tabRfq.chkAltLowFailAply","readonly","dsObjBindEn","chkAltLowFailAply");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr10Vi","divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr10","visible","dsObjBindVi","staRfqOdr10");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr10En","divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr10","enable","dsObjBindEn","staRfqOdr10");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAltRfqPriceSbmtVi","divViewCompBody00.tabRfqInfo.tabRfq.staAltRfqPriceSbmt","visible","dsObjBindVi","staAltRfqPriceSbmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAltRfqPriceSbmtEn","divViewCompBody00.tabRfqInfo.tabRfq.staAltRfqPriceSbmt","enable","dsObjBindEn","staAltRfqPriceSbmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTcoBgnYrVi","divViewCompBody00.tabRfqInfo.tabRfq.staTcoBgnYr","visible","dsObjBindVi","staTcoBgnYr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTcoBgnYrEn","divViewCompBody00.tabRfqInfo.tabRfq.staTcoBgnYr","enable","dsObjBindEn","staTcoBgnYr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTcoBgnYrVi","divViewCompBody00.tabRfqInfo.tabRfq.edtTcoBgnYr","visible","dsObjBindVi","edtTcoBgnYr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTcoBgnYrEn","divViewCompBody00.tabRfqInfo.tabRfq.edtTcoBgnYr","readonly","dsObjBindEn","edtTcoBgnYr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTcoYrVi","divViewCompBody00.tabRfqInfo.tabRfq.edtTcoYr","visible","dsObjBindVi","edtTcoYr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTcoYrEn","divViewCompBody00.tabRfqInfo.tabRfq.edtTcoYr","readonly","dsObjBindEn","edtTcoYr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkAltRfqPriceSbmtVi","divViewCompBody00.tabRfqInfo.tabRfq.chkAltRfqPriceSbmt","visible","dsObjBindVi","chkAltRfqPriceSbmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkAltRfqPriceSbmtEn","divViewCompBody00.tabRfqInfo.tabRfq.chkAltRfqPriceSbmt","readonly","dsObjBindEn","chkAltRfqPriceSbmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txaRmarkVi","divViewCompBody00.tabRfqInfo.tabRfqRmark.txaRmark","visible","dsObjBindVi","txaRmark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txaRmarkEn","divViewCompBody00.tabRfqInfo.tabRfqRmark.txaRmark","readonly","dsObjBindEn","txaRmark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp03Vi","divViewCompBody00.tabRfqInfo.tabp03","visible","dsObjBindVi","tabp03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp03En","divViewCompBody00.tabRfqInfo.tabp03","enable","dsObjBindEn","tabp03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp05Vi","divViewCompBody00.tabRfqInfo.tabp05","visible","dsObjBindVi","tabp05");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp05En","divViewCompBody00.tabRfqInfo.tabp05","enable","dsObjBindEn","tabp05");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPagingVi","divViewCompBody02.divPaging","visible","dsObjBindVi","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPagingEn","divViewCompBody02.divPaging","enable","dsObjBindEn","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPaging_88Vi","divViewCompBody01.divPaging","visible","dsObjBindVi","divPaging_87");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPaging_88En","divViewCompBody01.divPaging","enable","dsObjBindEn","divPaging_87");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRfqReqNoVi","divViewCompCond00.edtRfqReqNo","visible","dsObjBindVi","edtRfqReqNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRfqReqNoEn","divViewCompCond00.edtRfqReqNo","readonly","dsObjBindEn","edtRfqReqNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRfqReqNo01Vi","divViewCompCond00.edtRfqReqNo01","visible","dsObjBindVi","edtRfqReqNo01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRfqReqNo01En","divViewCompCond00.edtRfqReqNo01","readonly","dsObjBindEn","edtRfqReqNo01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","divViewCompBody00.tabRfqInfo.tabRfq.mskRfqLowAmt","value","dsRfq","RFQ_LOW_AMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item48","divViewCompBody00.tabRfqInfo.tabRfq.mskRfqLowAmt","visible","dsObjBindVi","mskRfqLowAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item49","divViewCompBody00.tabRfqInfo.tabRfq.mskRfqLowAmt","readonly","dsObjBindEn","mskRfqLowAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edt_ChrgrIdVi","divViewCompBody00.tabRfqInfo.tabp05.edt_ChrgrId","visible","dsObjBindVi","edt_ChrgrId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edt_ChrgrIdEn","divViewCompBody00.tabRfqInfo.tabp05.edt_ChrgrId","readonly","dsObjBindEn","edt_ChrgrId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edt_chrgrNmVi","divViewCompBody00.tabRfqInfo.tabp05.edt_chrgrNm","visible","dsObjBindVi","edt_chrgrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edt_chrgrNmEn","divViewCompBody00.tabRfqInfo.tabp05.edt_chrgrNm","readonly","dsObjBindEn","edt_chrgrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btn_chrgrVi","divViewCompBody00.tabRfqInfo.tabp05.btn_chrgr","visible","dsObjBindVi","btn_chrgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btn_chrgrEn","divViewCompBody00.tabRfqInfo.tabp05.btn_chrgr","enable","dsObjBindEn","btn_chrgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("st_MtrlCd00Vi","divViewCompBody00.tabRfqInfo.tabp05.st_MtrlCd00","visible","dsObjBindVi","st_MtrlCd00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("st_MtrlCd00En","divViewCompBody00.tabRfqInfo.tabp05.st_MtrlCd00","enable","dsObjBindEn","st_MtrlCd00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edt_telVi","divViewCompBody00.tabRfqInfo.tabp05.edt_tel","visible","dsObjBindVi","edt_tel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edt_telEn","divViewCompBody00.tabRfqInfo.tabp05.edt_tel","readonly","dsObjBindEn","edt_tel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("st_MtrlCd01Vi","divViewCompBody00.tabRfqInfo.tabp05.st_MtrlCd01","visible","dsObjBindVi","st_MtrlCd01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("st_MtrlCd01En","divViewCompBody00.tabRfqInfo.tabp05.st_MtrlCd01","enable","dsObjBindEn","st_MtrlCd01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edt_emailVi","divViewCompBody00.tabRfqInfo.tabp05.edt_email","visible","dsObjBindVi","edt_email");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edt_emailEn","divViewCompBody00.tabRfqInfo.tabp05.edt_email","readonly","dsObjBindEn","edt_email");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edt_faxVi","divViewCompBody00.tabRfqInfo.tabp05.edt_fax","visible","dsObjBindVi","edt_fax");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edt_faxEn","divViewCompBody00.tabRfqInfo.tabp05.edt_fax","readonly","dsObjBindEn","edt_fax");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("st_MtrlCdVi","divViewCompBody00.tabRfqInfo.tabp05.st_MtrlCd","visible","dsObjBindVi","st_MtrlCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("st_MtrlCdEn","divViewCompBody00.tabRfqInfo.tabp05.st_MtrlCd","enable","dsObjBindEn","st_MtrlCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("st_MtrlCd02Vi","divViewCompBody00.tabRfqInfo.tabp05.st_MtrlCd02","visible","dsObjBindVi","st_MtrlCd02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("st_MtrlCd02En","divViewCompBody00.tabRfqInfo.tabp05.st_MtrlCd02","enable","dsObjBindEn","st_MtrlCd02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboCdBidUnitEn","divViewCompBody00.tabRfqInfo.tabRfq.cboCdBidUnit","readonly","dsObjBindEn","cboCdBidUnit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","divViewCompBody00.tabRfqInfo.tabp04.chkAltOpenExpln","value","dsRfq","ALT_OPEN_EXPLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","divViewCompBody00.tabRfqInfo.tabp04.cal_openExplnDay","value","dsRfq","OPEN_EXPLN_DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","divViewCompBody00.tabRfqInfo.tabp04.mae_openExplnTime","value","dsRfq","OPEN_EXPLN_TIME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item47","divViewCompBody00.tabRfqInfo.tabp04.edt_openExplnArea","value","dsRfq","OPEN_EXPLN_AREA");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item52","divViewCompBody00.tabRfqInfo.tabp04.txt_openExplnAttnCndtn","value","dsRfq","OPEN_EXPLN_ATTN_CNDTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item53","divViewCompBody00.tabRfqInfo.tabp04.chkAltOpenExpln","visible","dsObjBindVi","rdo_AltRfqOpen");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item54","divViewCompBody00.tabRfqInfo.tabp04.chkAltOpenExpln","readonly","dsObjBindEn","rdo_AltRfqOpen");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item70","divViewCompBody00.tabRfqInfo.tabRfq.mskRfqCloseTimeMIN","visible","dsObjBindVi","calRfqCloseTimeMIN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item71","divViewCompBody00.tabRfqInfo.tabRfq.mskRfqCloseTimeMIN","readonly","dsObjBindEn","calRfqCloseTimeMIN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item72","divViewCompBody00.tabRfqInfo.tabRfq.mskRfqCloseTimeMIN","value","dsRfq","RFQ_CLOSE_TIME_MIN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnRfqExplnMailVi","divViewCompTitle02.btnRfqExplnMail","visible","dsObjBindVi","btnRfqExplnMail");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnRfqExplnMailEn","divViewCompTitle02.btnRfqExplnMail","enable","dsObjBindEn","btnRfqExplnMail");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnRfqExplnMailLangBind2017110317184345513","divViewCompTitle02.btnRfqExplnMail","text","gdsLabel","EPRO_LABEL_00048");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","divViewCompBody00.tabRfqInfo.tabRfq","text","gdsLabel","EPRO_LABEL_00047");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item43","divViewCompBody00.tabRfqInfo.tabRfqRmark","text","gdsLabel","EPRO_LABEL_00227");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item68","divViewCompBody00.tabRfqInfo.tabp03","text","gdsLabel","EPRO_LABEL_00314");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item69","divViewCompBody00.tabRfqInfo.tabp04","text","gdsLabel","EPRO_LABEL_00538");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item73","divViewCompBody00.tabRfqInfo.tabp05","text","gdsLabel","EPRO_LABEL_00509");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item74","divViewCompBody00.tabRfqInfo.tabp05.st_MtrlCd","text","gdsLabel","EPRO_LABEL_00451");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item75","divViewCompBody00.tabRfqInfo.tabp05.st_MtrlCd00","text","gdsLabel","EPRO_LABEL_00510");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item76","divViewCompBody00.tabRfqInfo.tabp05.st_MtrlCd01","text","gdsLabel","EPRO_LABEL_00124");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item77","divViewCompBody00.tabRfqInfo.tabp05.st_MtrlCd02","text","gdsLabel","EPRO_LABEL_00437");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item79","divViewCompBody00.tabRfqInfo.tabRfq.staAltLowFailAply","text","gdsLabel","EPRO_LABEL_00151");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item80","divViewCompBody00.tabRfqInfo.tabRfq.staAltRfqPriceSbmt","text","gdsLabel","EPRO_LABEL_00519");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item81","divViewCompBody00.tabRfqInfo.tabRfq.chkAltRfqPriceSbmt","text","gdsLabel","EPRO_LABEL_01186");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item82","divViewCompBody00.tabRfqInfo.tabRfq.chkAltLowFailAply","text","gdsLabel","EPRO_LABEL_00151");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item83","divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr10","text","gdsLabel","EPRO_LABEL_00411");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item84","divViewCompBody00.tabRfqInfo.tabRfq.chkAltBdgtOpen","text","gdsLabel","EPRO_LABEL_01184");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item85","divViewCompBody00.tabRfqInfo.tabRfq.chkAltTargCorpOpen","text","gdsLabel","EPRO_LABEL_01185");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item86","divViewCompBody00.tabRfqInfo.tabRfq.staIncoterms","text","gdsLabel","EPRO_LABEL_00301");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item87","divViewCompBody00.tabRfqInfo.tabRfq.staTcoBgnYr","text","gdsLabel","EPRO_LABEL_01160");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item88","divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr00","text","gdsLabel","EPRO_LABEL_01161");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqCloseDayVi","divViewCompBody00.tabRfqInfo.tabRfq.staRfqCloseDay","visible","dsObjBindVi","staRfqCloseDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqCloseDayEn","divViewCompBody00.tabRfqInfo.tabRfq.staRfqCloseDay","enable","dsObjBindEn","staRfqCloseDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqCloseDayLangBind2017110317184366182","divViewCompBody00.tabRfqInfo.tabRfq.staRfqCloseDay","text","gdsLabel","EPRO_LABEL_00493");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqCloseTimeVi","divViewCompBody00.tabRfqInfo.tabRfq.staRfqCloseTime","visible","dsObjBindVi","staRfqCloseTime");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqCloseTimeEn","divViewCompBody00.tabRfqInfo.tabRfq.staRfqCloseTime","enable","dsObjBindEn","staRfqCloseTime");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqCloseTimeLangBind2017110317184397021","divViewCompBody00.tabRfqInfo.tabRfq.staRfqCloseTime","text","gdsLabel","EPRO_LABEL_00416");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item78","divViewCompBody00.tabRfqInfo.tabRfq.staRfqCloseTimeMin","text","gdsLabel","EPRO_LABEL_01167");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqCloseTimeMinVi","divViewCompBody00.tabRfqInfo.tabRfq.staRfqCloseTimeMin","visible","dsObjBindVi","staRfqCloseTimeMin");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqCloseTimeMinEn","divViewCompBody00.tabRfqInfo.tabRfq.staRfqCloseTimeMin","enable","dsObjBindEn","staRfqCloseTimeMin");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","divViewCompBody00.tabRfqInfo.tabRfq.staRtQ","visible","dsObjBindVi","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","divViewCompBody00.tabRfqInfo.tabRfq.staRtQ","enable","dsObjBindEn","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr00Vi","divViewCompBody00.tabRfqInfo.tabRfq.staRtQ","visible","dsObjBindVi","staRfqOdr00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr00En","divViewCompBody00.tabRfqInfo.tabRfq.staRtQ","enable","dsObjBindEn","staRfqOdr00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr00LangBind2017110317184384067","divViewCompBody00.tabRfqInfo.tabRfq.staRtQ","text","gdsLabel","EPRO_LABEL_00343");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRtQVi","divViewCompBody00.tabRfqInfo.tabRfq.staRtQ","visible","dsObjBindVi","staRtQ");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRtQEn","divViewCompBody00.tabRfqInfo.tabRfq.staRtQ","enable","dsObjBindEn","staRtQ");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item57","divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr05","visible","dsObjBindVi","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item58","divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr05","enable","dsObjBindEn","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr05Vi","divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr05","visible","dsObjBindVi","staRfqOdr05");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr05En","divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr05","enable","dsObjBindEn","staRfqOdr05");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr05LangBind2017110317184328281","divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr05","text","gdsLabel","EPRO_LABEL_00023");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item40","divViewCompBody00.tabRfqInfo.tabRfq.staRtP","visible","dsObjBindVi","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","divViewCompBody00.tabRfqInfo.tabRfq.staRtP","enable","dsObjBindEn","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr01Vi","divViewCompBody00.tabRfqInfo.tabRfq.staRtP","visible","dsObjBindVi","staRfqOdr01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr01En","divViewCompBody00.tabRfqInfo.tabRfq.staRtP","enable","dsObjBindEn","staRfqOdr01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr01LangBind2017110317184338318","divViewCompBody00.tabRfqInfo.tabRfq.staRtP","text","gdsLabel","EPRO_LABEL_00110");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRtCVi","divViewCompBody00.tabRfqInfo.tabRfq.staRtP","visible","dsObjBindVi","staRtC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRtCEn","divViewCompBody00.tabRfqInfo.tabRfq.staRtP","enable","dsObjBindEn","staRtC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item59","divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr06","visible","dsObjBindVi","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item60","divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr06","enable","dsObjBindEn","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr06Vi","divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr06","visible","dsObjBindVi","staRfqOdr06");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr06En","divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr06","enable","dsObjBindEn","staRfqOdr06");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr06LangBind2017110317184394979","divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr06","text","gdsLabel","EPRO_LABEL_00023");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item45","divViewCompBody00.tabRfqInfo.tabRfq.staRtT","visible","dsObjBindVi","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item46","divViewCompBody00.tabRfqInfo.tabRfq.staRtT","enable","dsObjBindEn","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr02Vi","divViewCompBody00.tabRfqInfo.tabRfq.staRtT","visible","dsObjBindVi","staRfqOdr02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr02En","divViewCompBody00.tabRfqInfo.tabRfq.staRtT","enable","dsObjBindEn","staRfqOdr02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr02LangBind2017110317184332154","divViewCompBody00.tabRfqInfo.tabRfq.staRtT","text","gdsLabel","EPRO_LABEL_00278");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRtTVi","divViewCompBody00.tabRfqInfo.tabRfq.staRtT","visible","dsObjBindVi","staRtT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRtTEn","divViewCompBody00.tabRfqInfo.tabRfq.staRtT","enable","dsObjBindEn","staRtT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item61","divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr07","visible","dsObjBindVi","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item62","divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr07","enable","dsObjBindEn","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr07Vi","divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr07","visible","dsObjBindVi","staRfqOdr07");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr07En","divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr07","enable","dsObjBindEn","staRfqOdr07");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr07LangBind2017110317184345047","divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr07","text","gdsLabel","EPRO_LABEL_00023");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item50","divViewCompBody00.tabRfqInfo.tabRfq.staRtD","visible","dsObjBindVi","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item51","divViewCompBody00.tabRfqInfo.tabRfq.staRtD","enable","dsObjBindEn","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr03Vi","divViewCompBody00.tabRfqInfo.tabRfq.staRtD","visible","dsObjBindVi","staRfqOdr03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr03En","divViewCompBody00.tabRfqInfo.tabRfq.staRtD","enable","dsObjBindEn","staRfqOdr03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr03LangBind2017110317184333755","divViewCompBody00.tabRfqInfo.tabRfq.staRtD","text","gdsLabel","EPRO_LABEL_00393");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRtDVi","divViewCompBody00.tabRfqInfo.tabRfq.staRtD","visible","dsObjBindVi","staRtD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRtDEn","divViewCompBody00.tabRfqInfo.tabRfq.staRtD","enable","dsObjBindEn","staRtD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item63","divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr08","visible","dsObjBindVi","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item64","divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr08","enable","dsObjBindEn","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr08Vi","divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr08","visible","dsObjBindVi","staRfqOdr08");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr08En","divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr08","enable","dsObjBindEn","staRfqOdr08");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr08LangBind2017110317184374535","divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr08","text","gdsLabel","EPRO_LABEL_00023");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item55","divViewCompBody00.tabRfqInfo.tabRfq.staRtF","visible","dsObjBindVi","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item56","divViewCompBody00.tabRfqInfo.tabRfq.staRtF","enable","dsObjBindEn","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr04Vi","divViewCompBody00.tabRfqInfo.tabRfq.staRtF","visible","dsObjBindVi","staRfqOdr04");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr04En","divViewCompBody00.tabRfqInfo.tabRfq.staRtF","enable","dsObjBindEn","staRfqOdr04");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr04LangBind2017110317184398408","divViewCompBody00.tabRfqInfo.tabRfq.staRtF","text","gdsLabel","EPRO_LABEL_00157");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRtFVi","divViewCompBody00.tabRfqInfo.tabRfq.staRtF","visible","dsObjBindVi","staRtF");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRtFEn","divViewCompBody00.tabRfqInfo.tabRfq.staRtF","enable","dsObjBindEn","staRtF");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item65","divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr09","visible","dsObjBindVi","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item66","divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr09","enable","dsObjBindEn","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr09Vi","divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr09","visible","dsObjBindVi","staRfqOdr09");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr09En","divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr09","enable","dsObjBindEn","staRfqOdr09");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr09LangBind2017110317184342860","divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr09","text","gdsLabel","EPRO_LABEL_00023");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCostLangBind2017110317184234514","divViewCompBody00.tabRfqInfo.tabRfq.staRtC","text","gdsLabel","EPRO_LABEL_00122");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCostVi","divViewCompBody00.tabRfqInfo.tabRfq.staRtC","visible","dsObjBindVi","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCostEn","divViewCompBody00.tabRfqInfo.tabRfq.staRtC","enable","dsObjBindEn","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPer01LangBind2017110317184287850","divViewCompBody00.tabRfqInfo.tabRfq.staPer01","text","gdsLabel","EPRO_LABEL_00023");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPer01Vi","divViewCompBody00.tabRfqInfo.tabRfq.staPer01","visible","dsObjBindVi","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPer01En","divViewCompBody00.tabRfqInfo.tabRfq.staPer01","enable","dsObjBindEn","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item91","divViewCompBody00.tabRfqInfo.tabRfq.edtRtP","value","dsRfq","RT_P");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item92","divViewCompBody00.tabRfqInfo.tabRfq.edtRtP","visible","dsObjBindVi","edtRtP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item93","divViewCompBody00.tabRfqInfo.tabRfq.edtRtP","readonly","dsObjBindEn","edtRtP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item95","divViewCompBody00.tabRfqInfo.tabRfq.edtIncoterms2","value","dsRfq","INCOTERMS2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtIncoterms2Vi","divViewCompBody00.tabRfqInfo.tabRfq.edtIncoterms2","visible","dsObjBindVi","edtIncoterms2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtIncoterms2En","divViewCompBody00.tabRfqInfo.tabRfq.edtIncoterms2","readonly","dsObjBindEn","edtIncoterms2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item89","divViewCompBody00.tabRfqInfo.tabp04.chkAltOpenExpln","text","gdsLabel","EPRO_LABEL_01370");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompNFileUpDown.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
        };
        
        // User Script
        this.registerScript("BRfqReqDetail.xfdl", function(exports) {
        /**
         * @파일명			: BRfqReqDetail.xfdl
         * @생성자			: 한의봉
         * @생성일시		: 2017. 9. 1.
         * @설명			: 입찰진행상세
         * @최종수정자		: 한의봉	
         * @최종수정일시	: 2017. 11. 07.
        */  
        var ItemListRow = 0;

        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {

        	var param = [
        					{code:"CM10", sSelectType:"A"}								// 문서유형
        					,{code:"ET27", sSelectType:"S"}								// 입찰목적
        					,{code:"ET23", sSelectType:"S"}								// 응찰단위
        					,{code:"CM15", sSelectType:"S"} 							// 입찰통화
        					,{code:"CM11", sSelectType:"A"} 							// 단위
        					,{code:"CM32", sSelectType:"S"} 							// 파일유형
        					,{code:"CM22", sSelectType:"S"} 							// incoterms
        					,{code:"ET14"} 							// 평가구분
        				];
        	gfnGetCode(this, param);
        }

        /**
          * @함수명	: BRfqPrgDetail_oninit
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.InitEventInfo(이벤트변수)
          * @desc     	: 폼 oninit이벤트
          */
        this.BRfqPrgDetail_oninit = function(obj,e)
        {
        	this.fnSetCode();
        }

        /**
          * @함수명	: BRfqPrgDetail_onload
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.InitEventInfo(이벤트변수)
          * @desc     	: 폼 onload이벤트
          */
        this.BRfqPrgDetail_onload = function(obj,e)
        {
        	gfnSetObj("A");
        	gfnSetGrdFunc(this.divViewCompBody01.grdRfqItem, this.divViewCompBody01.divPaging, this,{isTran:"N", tranNm:"BRfqService.readRfq", dsParam:this.dsRfq});
        	gfnSetGrdFunc(this.divViewCompBody02.grdRfqPtnr, this.divViewCompBody02.divPaging, this,{isTran:"N", tranNm:"BRfqService.readRfq", dsParam:this.dsRfq});
        	gfnSetGrdFunc(this.divViewCompBody03.grdRfqReqFile, '', this);
        	gfnMakeFileDs(this);
        	
        	var sArg = [
                              {ttl:this.divViewCompTitle00.staViewCompTitle00, body:this.divViewCompBody00}      //서브타이틀0
                              ,{ttl:this.divViewCompTitle01.staViewCompTitle01, body:this.divViewCompBody01}   	 //서브타이틀1
                              ,{ttl:this.divViewCompTitle02.staViewCompTitle02, body:this.divViewCompBody02}     //서브타이틀2
                              ,{ttl:this.divViewCompTitle03.staViewCompTitle03, body:this.divViewCompBody03}	 //서브타이틀3
           ];                   
        	gfnDivFold(this, sArg);
        	
        	this.dsRfq.addRow();

        	this.dsRfq.setColumn(0, "RFQ_REQ_NO", gfnGetTmprData("RFQ_REQ_NO"));
        	this.dsRfq.setColumn(0, "RFQ_ODR", gfnGetTmprData("RFQ_ODR"));
        	this.dsRfq.setColumn(0, "BRANCH_CD", gfnGetTmprData("BRANCH_CD"));
        	gfnClearTmprData();
        	
        	this.fnReadRfq();

        }

        
        /**
          * @함수명	: fnRemote
          * @desc     	: 리모콘 버튼 생성
          */
        this.fnRemote = function()
        {
        	var sArg = [ 
        				{btnName:gfnMultiLabel("EPRO_LABEL_01158"), clickEventFunc:"fnRfqCxl"}
        		   ];		   
        	gfnRemote(this, sArg);
        }

        /**
          * @함수명	: fnReadRfq
          * @desc     	: 데이터를 불러오는 이벤트
          */
        this.fnReadRfq = function()
        {
        	var sSvcID = "readRfq";
         	var sController = "epro.rfq.service.BRfqService.readRfq";
         	var sInDatasets = "dsRfq=dsRfq";
         	var sOutDatasets = "dsRfq=dsRfq dsRfqItemList=dsRfqItemList dsRfqPtnr=dsRfqPtnr dsRfqReqFile=dsRfqReqFile dsRfqTco=dsRfqTco";
         	var sCallbackFunc = "fnTrCallBack";
        	
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
          * @함수명	: fnSaveCheck
          * @desc     	: 저장하기전 체크 
          */
        this.fnSaveCheck = function(){
        	var arr = [];

        	var closeHr = nexacro.trim(this.dsRfq.getColumn(0, "RFQ_CLOSE_TIME_HR"));
        	var closeMin = nexacro.trim(this.dsRfq.getColumn(0, "RFQ_CLOSE_TIME_MIN"));
        	
        	if(closeHr.toString().length == 1){
        		closeHr = "0" + closeHr;
        	}else if(closeHr.toString().length >2){
        		closeHr = closeHr.substr(0,2)
        	}else if(gfnIsNull(closeHr)){
        		closeHr = '00';
        	}
        	
        	if(closeMin.toString().length == 1){
        		closeMin = "0" + closeMin;
        	}else if(closeMin.toString().length >2){
        		closeMin = closeMin.substr(0,2)
        	}else if(gfnIsNull(closeMin)){
        		closeMin = '00';
        	}
        	
        	var time = closeHr+""+closeMin;
        	var day = this.dsRfq.getColumn(0, "RFQ_CLOSE_DAY");

        	if(this.fnDateCheck(time,day)||closeMin>59){
        		var msg = gfnMultiLabel("EPRO_LABEL_01270");
        		var type = gfnMultiLabel("EPRO_LABEL_01139");
        		var objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        		arr.push(objParam);
        	}else{
        		this.dsRfq.setColumn(0,"RFQ_CLOSE_TIME_HR",closeHr);
        		this.dsRfq.setColumn(0,"RFQ_CLOSE_TIME_MIN",closeMin);
        	}

        	return gfnValidate(this, false, arr);
        }

        /**
         * @함수명	: fnSave
         * @desc     	: (공통버튼)저장
         */
        this.fnSave = function()
        {
        	if(!this.fnSaveCheck()) return false;
        	
        	if(!gfnConfirm(gfnMultiLabel("EPRO_LABEL_00748"))) return ; 

        	var sSvcID = "saveRfqReq";
        	var sController = "epro.rfq.service.BRfqService.saveRfqReq";
        	var sInDatasets = "dsRfq=dsRfq:A dsRfqItemList=dsRfqItemList:A dsRfqPtnr=dsRfqPtnr:A dsRfqReqFile=dsRfqReqFile:A";
        	var sOutDatasets = "dsRfq=dsRfq";
        	var sCallbackFunc = "fnTrCallBack";
        		
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);  
        }

        /**
          * @함수명	: fnAltMailCheck
          * @desc     	: 메일보내기 전 체크
          */
        this.fnAltMailCheck = function()
        {
        	var msg ="";

        	for(var i=0;i<this.dsRfqPtnr.getRowCount();i++){
        		if(gfnIsNull(this.dsRfqPtnr.getColumn(i,"RFQ_EXPLN_DAY"))||gfnIsNull(this.dsRfqPtnr.getColumn(i,"RFQ_EXPLN_TIME"))||gfnIsNull(this.dsRfqPtnr.getColumn(i,"RFQ_EXPLN_AREA"))){
        			msg = gfnMultiLabel("EPRO_LABEL_01314");
        			break;
        		}
        	}
        	return msg;
        }

        /**
          *	@함수명	: btnScjdCorpAddOnclick
          * @desc     	: 제안설명회 메일발송
          */
        this.btnScjdCorpAddOnclick = function(obj,e)
        {
        	var msg = this.fnAltMailCheck();
        	if(gfnIsNull(msg)){
        		msg = gfnMultiLabel("EPRO_LABEL_01315");
        	}

        	if(!gfnConfirm(msg)) return false; 

        	var sSvcID = "saveRfqMailSnd";
        	var sController = "epro.rfq.service.BRfqService.saveRfqMailSnd";
        	var sInDatasets = "dsRfq=dsRfq:A dsRfqPtnr=dsRfqPtnr:A"; 
        	var sOutDatasets = "";
        	var sCallbackFunc = "fnTrCallBack";
        		
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);  
        }

        /**
          * @함수명	: fnRfqCxl
          * @desc     	: 입찰 취소 이벤트
          */
        this.fnRfqCxl = function()
        {
        	if(!gfnConfirm(gfnMultiLabel("EPRO_LABEL_01263"))) return false; 
        		
         	var sSvcID = "saveRfqAlsCxl";
         	var sController = "epro.rfq.service.BRfqService.saveRfqAlsCxl";
         	var sInDatasets = "dsRfq=dsRfq";
         	var sOutDatasets = "dsRfq=dsRfq";
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
        	switch(strSvcID){
        		case "readRfq":
        			if(this.dsRfq.getColumn(0,"CD_RFQ_AIM")=="ET27TCO"){
        				gfnSetObj("A"); 
        			}else{
        				gfnSetObj("B");
        			}
        			this.fnFileload();

        		break;	

        		case "saveRfqReq":
        			gfnAlert(strErrMsg);
        			this.fnReadRfq();
        		break;
        		
        		case "saveRfqMailSnd":
        			gfnAlert(strErrMsg);
        			this.fnReadRfq();
        		break;
        		
        		case "saveRfqAlsCxl":
        			gfnAlert(strErrMsg);
        			gfnOpenMenuUrl("BRFQ::BRfqPrgList.xfdl");
        			gfnTabOnClose("PGM000000063"); //난중에 바꿔야됨 동적으로 폼 id
        		return;
        		
        		break;
        		default:
        		break;	
        	}
        }
        /**
          *	@function	fnPopCallBack()
          *	@desc   	팝업 CallBack 함수
          */
        this.fnPopCallBack = function(sPopupId,rtn)
        {
        	this.dsReturn.clear();
        	this.dsReturn.loadXML(rtn);
        	switch(sPopupId){

        		case "BRfqRmkPopup":
        			if(this.dsReturn.rowcount != 0 ){
        				this.dsRfqItemList.setColumn(ItemListRow,"RMARK",this.dsReturn.getColumn(0,"RMARK"));
        			}
        		break;

        		case "BUserSrchPopup":
        			if(!gfnIsNull(this.dsReturn.getColumn(0,"USER_ID"))){
        				this.dsRfq.setColumn(0,"CHRGR_ID",this.dsReturn.getColumn(0,"USER_ID"));
        				this.dsRfq.setColumn(0,"CHRGR_NM",this.dsReturn.getColumn(0,"USER_NM"));
        				this.dsRfq.setColumn(0,"TEL",this.dsReturn.getColumn(0,"TEL"));
        				this.dsRfq.setColumn(0,"EMAIL",this.dsReturn.getColumn(0,"EMAIL"));
        				this.dsRfq.setColumn(0,"FAX",this.dsReturn.getColumn(0,"FAX"));
        			}
        		break;

        		default:
        		break;	
        	}
        }

        /**
          * @함수명	: fnRfqItemClick
          * @desc     	: 품목그리드 클릭이벤트
          */
        this.fnRfqItemClick = function(obj,e)
        {
        	if(obj.getCurEditType() == "button"){
        		if(e.col=="7"){
        			ItemListRow = e.row;
        			var sArg = {
        							agv_rmk:this.dsRfqItemList.getColumn(e.row,"RMARK")
        							,agv_Yn:"N"
        							,agv_title:""
        						};
        			
        			gfnModalPop(this, "BRfqRmkPopup", "BRFQ::BRfqRmkPop.xfdl", sArg, "fnPopCallBack", 500, 300);
        		}else if(e.col=="8"){
        			var row = obj.currentrow;
        			this.fnBtnFileUpDownOnclick(row);
        		}
        	}
        }

        
        /**
          * @함수명	: fnBtnFileUpDownOnclick
          * @desc     	: 파일 팝업 업로드
          */
        this.fnBtnFileUpDownOnclick = function(row)
        {
        	var sArg = {
        					agv_sTableNm:"MM_RFQ_ITEM"
        					,gv_arrFileKey:[this.dsRfqItemList.getColumn(row, "RFQ_REQ_NO")
        									,this.dsRfqItemList.getColumn(row, "RFQ_ODR")
        									,this.dsRfqItemList.getColumn(row,"RFQ_REQ_ITEM_ID")]
        					,agv_data:this.dsRfqItemList
        					,agv_form:this
        					,agv_view:"N"
        				};
        	
        	gfnModalPop(this, "CompFileUpDownPopup", "CPOP::CompFileUpDownPopup.xfdl", sArg, "fnPopCallBack", 900, 350);
        }

        
        /**
          * @함수명	: fnFileload
          * @desc     	: 탭페이지 첨부파일 셋팅
          */
        this.fnFileload= function()
        {
        	var sTableNm = "MM_RFQ";
        	var arrFileKey = [this.dsRfq.getColumn(0, "RFQ_REQ_NO")
         					 ,this.dsRfq.getColumn(0, "RFQ_ODR")];
        	this.divViewCompBody00.tabRfqInfo.tabp03.divFile.fnFileInit(this, sTableNm, this.dsRfq, arrFileKey,"N");
        }

        /**
          *	@함수명	: fnDateCheck
          * @desc     	: 현재시간 체크
          */
        this.fnDateCheck = function(time ,day)
        {
        	// 현재 시간
        	var objDate = gfnTodayTime().substr(0,12);
        	var date = day+""+time.substr(0,4);
        	if(objDate >= date){
        		return true;
        	}else{
        		return false;
        	}
        }

        /**
          * @함수명	: fnFileAdd
          * @desc     	: 입찰요청 파일 DataSet row 추가
          */
        this.fnFileAdd = function(obj,e)
        {
        	this.dsRfqReqFile.addRow();
        	this.dsRfqReqFile.setColumn(this.dsRfqReqFile.getRowCount()-1, "CD_FILE_TYPE", "");
        }
        /**
          * @함수명	: fnFileDel
          * @desc     	: 입찰요청 파일 DataSet row 삭제
          */
        this.fnFileDel = function(obj,e)
        {
        	//체크된 품목 삭제
        	gfnDsChkDel(this.dsRfqReqFile);
        }

        /**
          *	@function	fnChkAltRfqPriceSbmt_onchanged()
          *	@desc   	하한가 변경 이벤트
          */
        this.fnChkAltLowFailAply_onchanged = function(obj,e)
        {
        	if(e.postvalue =="Y"){
        		this.divViewCompBody00.tabRfqInfo.tabRfq.mskRfqLowAmt.set_readonly(false);
        	}else{
        		this.dsRfq.setColumn(0,"RFQ_LOW_AMT",0);
        		this.divViewCompBody00.tabRfqInfo.tabRfq.mskRfqLowAmt.set_readonly(true);
        	}
        }

        /**
          *	@function	fnChrgr_onclick()
          *	@desc   	담당자검색
          */
        this.fnChrgr_onclick = function(obj,e)
        {
        	var sArg = { 
        					agv_id:""
        					,agv_nm:this.dsRfq.getColumn(0,"CHRGR_NM")
        			   };
        	gfnSearchComUser(this, "BUserSrchPopup", "fnPopCallBack", sArg);
        }

        /**
          *	@함수명	: fnDateCheck
          * @desc     	: 현재시간 체크
          */
        this.fnDateCheck = function(time ,day)
        {
        	// 현재 시간
        	var objDate = gfnTodayTime().substr(0,12);
        	var date = day+""+time.substr(0,4);
        	if(objDate >= date){
        		return true;
        	}else{
        		return false;
        	}
        }

        /**
          *	@함수명	: fnMtrlSearch
          * @desc     	: 품목 검색
          */
        this.fnRfqItem_ExpandDown = function(obj,e)
        {
        	if( gfnGrdBindColId(obj, obj.getCellPos()) == "QTY"&& this.dsRfq.getColumn(0,"CD_RFQ_AIM")=="ET27TCO"){
        		
        		var sArg = { agv_data : this.dsRfqTco
        					,agv_Yn:"Y"
        					,agv_rfq_id : this.dsRfqItemList.getColumn(e.row,"RFQ_REQ_ITEM_ID")
        					,agv_row : this.dsRfqItemList.getColumn(e.row,"ROWNUM")
        					};
        		gfnModalPop(this, "BRfqTcoPopup", "BRFQ::BRfqTcoPopup.xfdl", sArg, "fnPopCallBack", 500, 400);
        	}	
        }

        /**
          *	@function	PopupDiv00_cal_dlvDayBat_onchanged()
          *	@desc   	품목에 납품일자 설정
          */
        this.div_3_btn_dlvBatSet_onclick = function(obj,e)
        {
        	this.PopupDiv01.trackPopupByComponent(obj,0,27);	
        	this.PopupDiv01.cal_dlvDayBat.set_value("");
        }

        /**
          *	@function	PopupDiv00_cal_dlvDayBat_onchanged()
          *	@desc   	품목에 납품일자 설정
          */
        this.PopupDiv00_cal_dlvDayBat_onchanged = function(obj,e)
        {
        	this.dsRfqItemList.set_enableevent(false);
        	for(var i=0; i<this.dsRfqItemList.rowcount; i++){
        		this.dsRfqItemList.setColumn(i,"DLV_REQ_DAY", obj.value);
        	}	
        	this.dsRfqItemList.set_enableevent(true);
        }

        this.divViewCompBody02_grdRfqPtnr_oncelldblclick = function(obj,e)
        {
        	if( gfnGrdBindColId(obj, obj.getCellPos()) == "PTNR_NM"){
        		var sArg = {
        						agv_id:this.dsRfqPtnr.getColumn(e.row,"PTNR_ID")
        					};
        		gfnModalPop(this, "BPtnrInfoPopup", "CPOP::BPtnrInfoPopup.xfdl", sArg, "fnPopCallBack", 550, 500);
        	}
        }

        this.fnRfqItem_oncelldblclick = function(obj,e)
        {
        	if( gfnGrdBindColId(obj, obj.getCellPos()) == "MTRL_CD"&&!gfnIsNull(this.dsRfqItemList.getColumn(e.row,"MTRL_CD"))){
        		var sArg = {
        						agv_id:this.dsRfqItemList.getColumn(e.row,"MTRL_CD")
        					};
        		gfnModalPop(this, "BMtrlInfoPopup", "CPOP::BMtrlInfoPopup.xfdl", sArg, "fnPopCallBack", 700, 350);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsRfqItemList.addEventHandler("oncolumnchanged", this.fnChangeCell, this);
            this.dsRfq.addEventHandler("oncolumnchanged", this.fnDateChange, this);
            this.addEventHandler("oninit", this.BRfqPrgDetail_oninit, this);
            this.addEventHandler("onload", this.BRfqPrgDetail_onload, this);
            this.divViewCompBody00.tabRfqInfo.addEventHandler("onchanged", this.div_21_Tab01_onchanged, this);
            this.divViewCompBody00.tabRfqInfo.tabRfq.cldRfqCloseDay.addEventHandler("oneditclick", this.div_21_Tab01_tabp01_cal_rfqCloseDay_oneditclick, this);
            this.divViewCompBody00.tabRfqInfo.tabRfq.staRfqCloseDT.addEventHandler("onclick", this.div_21_Tab01_tabp01_st_CrtrNm_onclick, this);
            this.divViewCompBody00.tabRfqInfo.tabRfq.cboCdBidUnit.addEventHandler("onitemchanged", this.div_21_Tab01_tabp01_cb_cdRfqCrnc_onitemchanged, this);
            this.divViewCompBody00.tabRfqInfo.tabRfq.cboCdRfqCrnc.addEventHandler("onitemchanged", this.div_21_Tab01_tabp01_cb_cdRfqCrnc_onitemchanged, this);
            this.divViewCompBody00.tabRfqInfo.tabRfq.cboEvalType.addEventHandler("onitemchanged", this.fnCboEvalType_onitemchanged, this);
            this.divViewCompBody00.tabRfqInfo.tabRfq.cboIncoterms.addEventHandler("onitemchanged", this.div_21_Tab01_tabp01_cb_RfqOpen_onitemchanged, this);
            this.divViewCompBody00.tabRfqInfo.tabRfq.chkAltLowFailAply.addEventHandler("onchanged", this.fnChkAltLowFailAply_onchanged, this);
            this.divViewCompBody00.tabRfqInfo.tabRfq.chkAltRfqPriceSbmt.addEventHandler("onchanged", this.fnChkAltRfqPriceSbmt_onchanged, this);
            this.divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr07.addEventHandler("onclick", this.divViewCompBody00_tabRfqInfo_tabRfq_staRfqOdr07_onclick, this);
            this.divViewCompBody00.tabRfqInfo.tabp04.chkAltOpenExpln.addEventHandler("onchanged", this.fnChkAltRfqPriceSbmt_onchanged, this);
            this.divViewCompBody00.tabRfqInfo.tabp05.edt_chrgrNm.addEventHandler("onkeydown", this.div_21_Tab01_tabpage6_edt_chrgrNm_onkeydown, this);
            this.divViewCompBody00.tabRfqInfo.tabp05.edt_chrgrNm.addEventHandler("ontextchanged", this.div_21_Tab01_tabpage6_edt_chrgrNm_ontextchanged, this);
            this.divViewCompBody00.tabRfqInfo.tabp05.btn_chrgr.addEventHandler("onclick", this.fnChrgr_onclick, this);
            this.divViewCompBody02.grdRfqPtnr.addEventHandler("oncelldblclick", this.divViewCompBody02_grdRfqPtnr_oncelldblclick, this);
            this.divViewCompBody01.grdRfqItem.addEventHandler("oncellclick", this.fnRfqItemClick, this);
            this.divViewCompBody01.grdRfqItem.addEventHandler("onexpanddown", this.fnRfqItem_ExpandDown, this);
            this.divViewCompBody01.grdRfqItem.addEventHandler("ontextchange", this.fnItemListChange, this);
            this.divViewCompBody01.grdRfqItem.addEventHandler("oncelldblclick", this.fnRfqItem_oncelldblclick, this);
            this.divViewCompTitle00.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompTitle01.Undefined_13.addEventHandler("onclick", this.div_3_btn_dlvBatSet_onclick, this);
            this.divViewCompTitle02.btnRfqExplnMail.addEventHandler("onclick", this.btnScjdCorpAddOnclick, this);
            this.divViewCompTitle03.btnRfqFileDel.addEventHandler("onclick", this.fnFileDel, this);
            this.divViewCompTitle03.btnRfqFileAdd.addEventHandler("onclick", this.fnFileAdd, this);
            this.PopupDiv01.cal_dlvDayBat.addEventHandler("onchanged", this.PopupDiv00_cal_dlvDayBat_onchanged, this);

        };

        this.loadIncludeScript("BRfqReqDetail.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
