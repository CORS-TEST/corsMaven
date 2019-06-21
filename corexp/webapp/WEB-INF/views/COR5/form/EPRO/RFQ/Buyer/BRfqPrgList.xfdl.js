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
                this.set_name("CSampleList");
                this.set_titletext("견적진행현황");
                this._setFormPosition(0,0,1220,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCount", this);
            obj._setContents("<ColumnInfo><Column id=\"RFQ_TOT\" type=\"STRING\" size=\"256\"/><Column id=\"RFQ_WRI\" type=\"STRING\" size=\"256\"/><Column id=\"RFQ_APP\" type=\"STRING\" size=\"256\"/><Column id=\"RFQ_REQ\" type=\"STRING\" size=\"256\"/><Column id=\"RFQ_ANI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCondition", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column type=\"string\" id=\"CHECKED\" size=\"300\"/><Column type=\"string\" id=\"ALT_TARG_CORP_OPEN\" size=\"1\"/><Column type=\"int\" id=\"RFQ_ODR\" size=\"22\"/><Column type=\"string\" id=\"RFQ_CLOSE_DAY\" size=\"8\"/><Column type=\"string\" id=\"RFQ_CLOSE_DAY_START\" size=\"8\"/><Column type=\"string\" id=\"RFQ_CLOSE_DAY_END\" size=\"8\"/><Column type=\"string\" id=\"CHRGR_ID\" size=\"50\"/><Column type=\"string\" id=\"TKEY\" size=\"20\"/><Column type=\"string\" id=\"ALT_RFQ_RSLT_OPEN\" size=\"1\"/><Column type=\"string\" id=\"ALT_OPEN_EXPLN\" size=\"1\"/><Column type=\"string\" id=\"TTL\" size=\"600\"/><Column type=\"string\" id=\"CNCL_RSN\" size=\"1500\"/><Column type=\"int\" id=\"TNDR_ODR\" size=\"22\"/><Column type=\"string\" id=\"OPEN_EXPLN_TIME\" size=\"6\"/><Column type=\"string\" id=\"RFQ_REQ_NO\" size=\"20\"/><Column type=\"string\" id=\"FAX\" size=\"50\"/><Column type=\"string\" id=\"CD_RFQ_SBMT_MTHD\" size=\"40\"/><Column type=\"string\" id=\"ALT_BDGT_OPEN\" size=\"1\"/><Column type=\"string\" id=\"CD_OPEN_TYPE\" size=\"40\"/><Column type=\"string\" id=\"CHRGR_NM\" size=\"30\"/><Column type=\"string\" id=\"ALT_SVC_RFQ\" size=\"1\"/><Column type=\"string\" id=\"ALT_RFQ_EXPLN_ACT\" size=\"1\"/><Column type=\"string\" id=\"BRANCH_CD\" size=\"20\"/><Column type=\"string\" id=\"RFQ_CLOSE_TIME\" size=\"6\"/><Column type=\"int\" id=\"GOALAMT\" size=\"22\"/><Column type=\"string\" id=\"ALT_SVC_DTL_BID\" size=\"1\"/><Column type=\"string\" id=\"CRTR_ID\" size=\"50\"/><Column type=\"string\" id=\"WRTR_NM\" size=\"30\"/><Column type=\"string\" id=\"TNDR_NO\" size=\"20\"/><Column type=\"string\" id=\"CD_DOC_CTGR\" size=\"40\"/><Column type=\"string\" id=\"OPEN_EXPLN_ATTN_CNDTN\" size=\"1500\"/><Column type=\"string\" id=\"OPEN_EXPLN_DAY\" size=\"8\"/><Column type=\"string\" id=\"TEL\" size=\"150\"/><Column type=\"string\" id=\"CD_RFQ_AIM\" size=\"40\"/><Column type=\"DATE\" id=\"REQ_DT\" size=\"7\"/><Column type=\"DATE\" id=\"REQ_DT_START\" size=\"7\"/><Column type=\"DATE\" id=\"REQ_DT_END\" size=\"7\"/><Column type=\"string\" id=\"ALT_RFQ_PRICE_SBMT\" size=\"1\"/><Column type=\"string\" id=\"EMAIL\" size=\"100\"/><Column type=\"int\" id=\"AWRD_AMT\" size=\"22\"/><Column type=\"string\" id=\"OPEN_EXPLN_DR_TIME\" size=\"6\"/><Column type=\"string\" id=\"LAST_CHGR_ID\" size=\"50\"/><Column type=\"string\" id=\"ALT_RFQ_OPEN\" size=\"1\"/><Column type=\"string\" id=\"CD_RFQ_STTS\" size=\"40\"/><Column type=\"string\" id=\"WRTR_ID\" size=\"50\"/><Column type=\"string\" id=\"ALT_RFQ_EXPLN_NXT_NTC\" size=\"1\"/><Column type=\"int\" id=\"ATTCH_FILE_CNT\" size=\"22\"/><Column type=\"string\" id=\"RMARK\" size=\"3000\"/><Column type=\"string\" id=\"ALT_CERT\" size=\"1\"/><Column type=\"DATE\" id=\"LAST_CHG_DT\" size=\"7\"/><Column type=\"string\" id=\"MTRL_CD\" size=\"40\"/><Column type=\"string\" id=\"MTRL_NM\" size=\"200\"/><Column type=\"string\" id=\"PR_NO\" size=\"22\"/><Column id=\"PAGE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ITEM1\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ITEM2\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ITEM3\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ITEM4\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE1\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE2\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE3\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE4\" type=\"STRING\" size=\"256\"/><Column id=\"IM_ODR_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsList", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column type=\"string\" id=\"ALT_TARG_CORP_OPEN\" size=\"1\"/><Column type=\"int\" id=\"RFQ_ODR\" size=\"22\"/><Column type=\"string\" id=\"RFQ_CLOSE_DAY\" size=\"8\"/><Column type=\"string\" id=\"CHRGR_ID\" size=\"50\"/><Column type=\"string\" id=\"TKEY\" size=\"20\"/><Column type=\"string\" id=\"ALT_RFQ_RSLT_OPEN\" size=\"1\"/><Column type=\"string\" id=\"ALT_OPEN_EXPLN\" size=\"1\"/><Column type=\"string\" id=\"TTL\" size=\"600\"/><Column type=\"string\" id=\"CNCL_RSN\" size=\"1500\"/><Column type=\"int\" id=\"TNDR_ODR\" size=\"22\"/><Column type=\"string\" id=\"OPEN_EXPLN_TIME\" size=\"6\"/><Column type=\"string\" id=\"RFQ_REQ_NO\" size=\"20\"/><Column type=\"string\" id=\"FAX\" size=\"50\"/><Column type=\"string\" id=\"CD_RFQ_SBMT_MTHD\" size=\"40\"/><Column type=\"string\" id=\"ALT_BDGT_OPEN\" size=\"1\"/><Column type=\"string\" id=\"CD_OPEN_TYPE\" size=\"40\"/><Column type=\"string\" id=\"CD_OPEN_TYPE_NM\" size=\"40\"/><Column type=\"string\" id=\"CHRGR_NM\" size=\"30\"/><Column type=\"string\" id=\"ALT_SVC_RFQ\" size=\"1\"/><Column type=\"string\" id=\"ALT_RFQ_EXPLN_ACT\" size=\"1\"/><Column type=\"string\" id=\"BRANCH_CD\" size=\"20\"/><Column type=\"string\" id=\"RFQ_CLOSE_TIME\" size=\"6\"/><Column type=\"int\" id=\"GOALAMT\" size=\"22\"/><Column type=\"string\" id=\"ALT_SVC_DTL_BID\" size=\"1\"/><Column type=\"string\" id=\"CRTR_ID\" size=\"50\"/><Column type=\"string\" id=\"WRTR_NM\" size=\"30\"/><Column type=\"string\" id=\"TNDR_NO\" size=\"20\"/><Column type=\"string\" id=\"CD_DOC_CTGR\" size=\"40\"/><Column type=\"string\" id=\"OPEN_EXPLN_ATTN_CNDTN\" size=\"1500\"/><Column type=\"string\" id=\"OPEN_EXPLN_DAY\" size=\"8\"/><Column type=\"string\" id=\"TEL\" size=\"150\"/><Column type=\"string\" id=\"CD_RFQ_AIM\" size=\"40\"/><Column type=\"datetime\" id=\"REQ_DT\" size=\"7\"/><Column type=\"string\" id=\"ALT_RFQ_PRICE_SBMT\" size=\"1\"/><Column type=\"string\" id=\"EMAIL\" size=\"100\"/><Column type=\"int\" id=\"AWRD_AMT\" size=\"22\"/><Column type=\"string\" id=\"OPEN_EXPLN_DR_TIME\" size=\"6\"/><Column type=\"string\" id=\"LAST_CHGR_ID\" size=\"50\"/><Column type=\"string\" id=\"ALT_RFQ_OPEN\" size=\"1\"/><Column type=\"string\" id=\"CD_RFQ_STTS\" size=\"40\"/><Column type=\"string\" id=\"WRTR_ID\" size=\"50\"/><Column type=\"string\" id=\"ALT_RFQ_EXPLN_NXT_NTC\" size=\"1\"/><Column type=\"int\" id=\"ATTCH_FILE_CNT\" size=\"22\"/><Column type=\"string\" id=\"RMARK\" size=\"3000\"/><Column type=\"string\" id=\"ALT_CERT\" size=\"1\"/><Column type=\"datetime\" id=\"LAST_CHG_DT\" size=\"7\"/><Column id=\"CHECKED\" type=\"INT\" size=\"256\"/><Column type=\"string\" id=\"PTNR_CNT\" size=\"22\"/><Column type=\"string\" id=\"PTNR_QUOTE_CNT\" size=\"22\"/><Column type=\"string\" id=\"WRTR_ID\" size=\"50\"/><Column type=\"string\" id=\"WRTR_NM\" size=\"50\"/></ColumnInfo><Rows/>");
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

            obj = new Dataset("dsChgRfq", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RFQ_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RFQ_ODR\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column type=\"string\" id=\"LAST_CHGR_ID\" size=\"50\"/><Column type=\"string\" id=\"CD_DOC_CTGR\" size=\"40\"/><Column id=\"RFQ_CLOSE_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"RFQ_CLOSE_TIME\" type=\"STRING\" size=\"256\"/><Column type=\"string\" id=\"WRTR_ID\" size=\"50\"/><Column type=\"string\" id=\"WRTR_NM\" size=\"50\"/><Column type=\"string\" id=\"CD_RFQ_STTS\" size=\"50\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSortItem", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CD_NM_LO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_NM_LO\">--선택--</Col><Col id=\"CD_ID\"/></Row><Row><Col id=\"CD_NM_LO\">견적요청번호</Col><Col id=\"CD_ID\">RFQ_REQ_NO</Col></Row><Row><Col id=\"CD_NM_LO\">차수</Col><Col id=\"CD_ID\">R.RFQ_ODR</Col></Row><Row><Col id=\"CD_ID\">R.RFQ_CLOSE_DAY</Col><Col id=\"CD_NM_LO\">견적마감일자</Col></Row><Row><Col id=\"CD_ID\">R.RFQ_CLOSE_TIME</Col><Col id=\"CD_NM_LO\">종료시간</Col></Row><Row><Col id=\"CD_NM_LO\">요청일자</Col><Col id=\"CD_ID\">R.REQ_DT</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdET10", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM10", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompCond01", "absolute", "0", "35", null, "112", "15", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBg");
            obj.getSetter("objNm").set("");
            this.addChild(obj.name, obj);
            obj = new Static("staWarning", "absolute", "0", "91", null, "19", "0", null, this.divViewCompCond01);
            obj.set_taborder("37");
            obj.set_text("- 검색조건 없이 검색 시 속도가 저하 될 수 있습니다.");
            obj.set_cssclass("sta_WF_SearchText");
            obj.style.set_padding("0 0 0 19");
            obj.style.set_align("left");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staWFDALabel20", "absolute", "0", "63", "170", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("38");
            obj.set_text("정렬순서");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right");
            obj.set_positionstep("0");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staWFDALabel11", "absolute", "727", "5", "117", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("42");
            obj.set_text("견적담당자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right");
            obj.set_positionstep("0");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staWFDALabel24", "absolute", "390", "5", "117", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("43");
            obj.set_text("견적마감일자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right");
            obj.set_positionstep("0");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staWFDALabel", "absolute", "0", "5", "170", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("44");
            obj.set_text("견적요청일자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right");
            obj.set_positionstep("0");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "170", "63", "1033", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("45");
            obj.getSetter("objNm").set("정렬순서");
            obj.set_positionstep("0");
            obj.set_url("CCOMP::CompOrderBy.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divReqDt", "absolute", "170", "5", "220", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("46");
            obj.getSetter("objNm").set("견적요청일자");
            obj.set_positionstep("0");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divRfqCloseDay", "absolute", "507", "5", "220", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("47");
            obj.getSetter("objNm").set("견적마감일자");
            obj.set_positionstep("0");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staWFDALabel00", "absolute", "390", "34", "117", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("48");
            obj.set_text("구매요청번호");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right");
            obj.set_positionstep("0");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staWFDALabel01", "absolute", "0", "34", "170", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("50");
            obj.set_text("견적요청번호");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right");
            obj.set_positionstep("0");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtRfqReqNo", "absolute", "170", "34", "220", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("51");
            obj.getSetter("objNm").set("견적요청번호");
            obj.set_positionstep("0");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Button("btnMultiSelect", "absolute", "366", "34", "24", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("52");
            obj.set_cssclass("btn_WF_MultiSmall");
            obj.getSetter("objNm").set("견적요청번호 멀티선택 버튼");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divPchrgr", "absolute", "844", "5", "250", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("53");
            obj.set_text("Div00");
            obj.getSetter("objNm").set("검색조건-요청자");
            obj.set_url("CCOMP::ComSrchUser.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divPrNo", "absolute", "507", "34", "220", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("54");
            obj.set_text("Div00");
            obj.getSetter("objNm").set("검색조건-요청자");
            obj.set_url("CCOMP::ComSrchInput.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);

            obj = new Button("btnFold", "absolute", "45.66%", "146", "56", "17", null, null, this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_Fold_Close");
            this.addChild(obj.name, obj);

            obj = new Div("divViewCompCond00", "absolute", "0", "0", null, "36", "15", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);
            obj = new Static("staWFDALabel04", "absolute", "488", "5", "117", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("8");
            obj.set_text("견적요청명");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Button("btnAni", "absolute", "445", "5", "43", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("9");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staWFDALabel05", "absolute", "383", "5", "62", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("10");
            obj.set_text("심사중");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_color("green");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("lbcd").set("");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Button("btnIng", "absolute", "339", "5", "44", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("11");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staWFDALabel03", "absolute", "255", "5", "62", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("12");
            obj.set_text("진행중");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_color("green");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("lbcd").set("");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer03", "absolute", "317", "5", "22", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("13");
            obj.style.set_background("transparent URL('img::ico_Top04.png')");
            obj.style.set_border("0 solid #bdbdbdff");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Button("btnWrt", "absolute", "212", "5", "43", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("14");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer01", "absolute", "190", "5", "22", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("15");
            obj.style.set_background("transparent URL('img::ico_Top02.png')");
            obj.style.set_border("0 solid #bdbdbdff");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staWFDALabel01", "absolute", "128", "5", "62", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("16");
            obj.set_text("작성중");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_color("green");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("lbcd").set("");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Button("btnTotal", "absolute", "85", "5", "43", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("17");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer00", "absolute", "63", "5", "22", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("18");
            obj.style.set_background("transparent URL('img::ico_Top01.png')");
            obj.style.set_border("0 solid #bdbdbdff");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staWFDALabel00", "absolute", "1", "5", "62", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("19");
            obj.set_text("전체");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_color("green");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staWFDALabel02", "absolute", "806", "5", "90", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("20");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Div("divMtrl", "absolute", "896", "5", "297", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("21");
            obj.set_text("Div00");
            obj.getSetter("objNm").set("검색조건-품목");
            obj.set_url("CCOMP::ComSrchMtrl.xfdl");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Div("divRfqNm", "absolute", "605", "5", "220", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("22");
            obj.set_text("Div00");
            obj.getSetter("objNm").set("검색조건-요청자");
            obj.set_url("CCOMP::ComSrchInput.xfdl");
            this.divViewCompCond00.addChild(obj.name, obj);

            obj = new Div("divViewCompBody00", "absolute", "0%", "162", null, null, "15", "10", this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);
            obj = new Button("btnChgRfqCloseDay", "absolute", null, "0", "116", "24", "1", null, this.divViewCompBody00);
            obj.set_taborder("20");
            obj.set_text("견적마감일 변경");
            obj.set_cssclass("btn_WF_Com_G");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnRfqReReq", "absolute", null, "0", "84", "24", "120", null, this.divViewCompBody00);
            obj.set_taborder("21");
            obj.set_text("견적재요청");
            obj.set_cssclass("btn_WF_Com_G");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("견적재요청");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "0", this.divViewCompBody00);
            obj.set_taborder("22");
            obj.set_scrollbars("none");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0%", "29", null, null, "0.08%", "28", this.divViewCompBody00);
            obj.set_taborder("23");
            obj.set_binddataset("dsList");
            obj.set_autoupdatetype("comboselect");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.style.set_align("middle");
            obj.getSetter("objNm").set("검색결과 그리드");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"300\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"55\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"130\"/><Column size=\"55\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"품목구분\" combodataset=\"ds_cdET31\" combocodecol=\"CD_NM_LO\" combodatacol=\"CD_ID\"/><Cell col=\"2\" text=\"견적상태\"/><Cell col=\"3\" text=\"견적요청명\"/><Cell col=\"4\" text=\"견적마감일\"/><Cell col=\"5\" text=\"종료시간\"/><Cell col=\"6\" text=\"구매예상가\"/><Cell col=\"7\" text=\"견적업체\"/><Cell col=\"8\" text=\"제출\"/><Cell col=\"9\" text=\"담당자명\"/><Cell col=\"10\" text=\"요청일자\"/><Cell col=\"11\" text=\"견적서\"/><Cell col=\"12\" text=\"견적요청번호\"/><Cell col=\"13\" text=\"차수\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\"/><Cell col=\"1\" style=\"align:center;\" text=\"bind:CD_DOC_CTGR_NM\"/><Cell col=\"2\" text=\"bind:CD_RFQ_STTS_NM\"/><Cell col=\"3\" style=\"align:left;\" cssclass=\"cell_link\" text=\"bind:TTL\"/><Cell col=\"4\" displaytype=\"date\" text=\"bind:RFQ_CLOSE_DAY\" mask=\"yyyy.MM.dd\" maskchar=\" \" calendardisplaynulltype=\"none\"/><Cell col=\"5\" text=\"bind:RFQ_CLOSE_TIME\" mask=\"##:##\" maskchar=\"  \"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:GOALAMT\" mask=\"#,##0\"/><Cell col=\"7\" style=\"color:#0044ffff;color2:#0044ffff;selectcolor:#0044ffff;\" cssclass=\"cell_link\" text=\"bind:PTNR_CNT\"/><Cell col=\"8\" style=\"color:#0044ffff;color2:#0044ffff;selectcolor:#0044ffff;\" cssclass=\"cell_link\" text=\"bind:PTNR_QUOTE_CNT\"/><Cell col=\"9\" cssclass=\"cell_link\" text=\"bind:CHRGR_NM\"/><Cell col=\"10\" displaytype=\"date\" text=\"bind:REQ_DT\" mask=\"yyyy.MM.dd\" maskchar=\" \" calendardisplaynulltype=\"none\"/><Cell col=\"11\" displaytype=\"button\" edittype=\"button\" text=\"조회\"/><Cell col=\"12\" style=\"color:#0044ffff;color2:#0044ffff;\" cssclass=\"cell_link\" text=\"bind:RFQ_REQ_NO\" maskchar=\" \"/><Cell col=\"13\" text=\"bind:RFQ_ODR\"/></Band></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1205, 177, this.divViewCompCond01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_cssclass("div_WF_SearchBg");
            		p.getSetter("objNm").set("");

            	}
            );
            this.divViewCompCond01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 36, this.divViewCompCond00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.set_cssclass("div_WF_SearchBg");

            	}
            );
            this.divViewCompCond00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1205, 546, this.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");

            	}
            );
            this.divViewCompBody00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1220, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("견적진행현황");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("divViewCompBody00LangBind2017110317184360214","divViewCompBody00","text","gdsLabel","EPRO_LABEL_00272");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnAni","divViewCompCond00.btnAni","text","dsCount","RFQ_ANI");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnReq","divViewCompCond00.btnIng","text","dsCount","RFQ_REQ");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnWrt","divViewCompCond00.btnWrt","text","dsCount","RFQ_WRI");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnTot","divViewCompCond00.btnTotal","text","dsCount","RFQ_TOT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","divViewCompCond01.divRfqCloseDay","text","dsCondition","RFQ_CLOSE_DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","divViewCompCond01.edtRfqReqNo","value","dsCondition","RFQ_REQ_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sta_WFDA_Label20Vi","divViewCompCond01.sta_WFDA_Label20","visible","dsObjBindVi","sta_WFDA_Label20");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sta_WFDA_Label20En","divViewCompCond01.sta_WFDA_Label20","enable","dsObjBindEn","sta_WFDA_Label20");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edt_wrtrNmVi","divViewCompCond01.edt_wrtrNm","visible","dsObjBindVi","edt_wrtrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edt_wrtrNmEn","divViewCompCond01.edt_wrtrNm","readonly","dsObjBindEn","edt_wrtrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btn_RrqrUserVi","divViewCompCond01.btn_RrqrUser","visible","dsObjBindVi","btn_RrqrUser");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btn_RrqrUserEn","divViewCompCond01.btn_RrqrUser","enable","dsObjBindEn","btn_RrqrUser");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edt_wrtrIdVi","divViewCompCond01.edt_wrtrId","visible","dsObjBindVi","edt_wrtrId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edt_wrtrIdEn","divViewCompCond01.edt_wrtrId","readonly","dsObjBindEn","edt_wrtrId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sta_WFDA_Label11Vi","divViewCompCond01.sta_WFDA_Label11","visible","dsObjBindVi","sta_WFDA_Label11");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sta_WFDA_Label11En","divViewCompCond01.sta_WFDA_Label11","enable","dsObjBindEn","sta_WFDA_Label11");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sta_WFDA_Label24Vi","divViewCompCond01.sta_WFDA_Label24","visible","dsObjBindVi","sta_WFDA_Label24");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sta_WFDA_Label24En","divViewCompCond01.sta_WFDA_Label24","enable","dsObjBindEn","sta_WFDA_Label24");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sta_WFDA_LabelVi","divViewCompCond01.sta_WFDA_Label","visible","dsObjBindVi","sta_WFDA_Label");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sta_WFDA_LabelEn","divViewCompCond01.sta_WFDA_Label","enable","dsObjBindEn","sta_WFDA_Label");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Div00Vi","divViewCompCond01.Div00","visible","dsObjBindVi","Div00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Div00En","divViewCompCond01.Div00","enable","dsObjBindEn","Div00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_reqDtVi","divViewCompCond01.div_reqDt","visible","dsObjBindVi","div_reqDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_reqDtEn","divViewCompCond01.div_reqDt","enable","dsObjBindEn","div_reqDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_rfqCloseDayVi","divViewCompCond01.div_rfqCloseDay","visible","dsObjBindVi","div_rfqCloseDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_rfqCloseDayEn","divViewCompCond01.div_rfqCloseDay","enable","dsObjBindEn","div_rfqCloseDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sta_WFDA_Label00Vi","divViewCompCond01.sta_WFDA_Label00","visible","dsObjBindVi","sta_WFDA_Label00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sta_WFDA_Label00En","divViewCompCond01.sta_WFDA_Label00","enable","dsObjBindEn","sta_WFDA_Label00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edt_prNoVi","divViewCompCond01.edt_prNo","visible","dsObjBindVi","edt_prNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edt_prNoEn","divViewCompCond01.edt_prNo","readonly","dsObjBindEn","edt_prNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sta_WFDA_Label01Vi","divViewCompCond01.sta_WFDA_Label01","visible","dsObjBindVi","sta_WFDA_Label01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sta_WFDA_Label01En","divViewCompCond01.sta_WFDA_Label01","enable","dsObjBindEn","sta_WFDA_Label01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edt_rfqReqNoVi","divViewCompCond01.edt_rfqReqNo","visible","dsObjBindVi","edt_rfqReqNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edt_rfqReqNoEn","divViewCompCond01.edt_rfqReqNo","readonly","dsObjBindEn","edt_rfqReqNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btn_multiSelectVi","divViewCompCond01.btn_multiSelect","visible","dsObjBindVi","btn_multiSelect");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btn_multiSelectEn","divViewCompCond01.btn_multiSelect","enable","dsObjBindEn","btn_multiSelect");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnFoldVi","btnFold","visible","dsObjBindVi","btnFold");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnFoldEn","btnFold","enable","dsObjBindEn","btnFold");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edt_mtrlNmVi","divViewCompCond00.edt_mtrlNm","visible","dsObjBindVi","edt_mtrlNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edt_mtrlNmEn","divViewCompCond00.edt_mtrlNm","readonly","dsObjBindEn","edt_mtrlNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edt_mtrlCdVi","divViewCompCond00.edt_mtrlCd","visible","dsObjBindVi","edt_mtrlCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edt_mtrlCdEn","divViewCompCond00.edt_mtrlCd","readonly","dsObjBindEn","edt_mtrlCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edt_ttlVi","divViewCompCond00.edt_ttl","visible","dsObjBindVi","edt_ttl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edt_ttlEn","divViewCompCond00.edt_ttl","readonly","dsObjBindEn","edt_ttl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sta_WFDA_Label04Vi","divViewCompCond00.sta_WFDA_Label04","visible","dsObjBindVi","sta_WFDA_Label04");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sta_WFDA_Label04En","divViewCompCond00.sta_WFDA_Label04","enable","dsObjBindEn","sta_WFDA_Label04");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btn_aniVi","divViewCompCond00.btn_ani","visible","dsObjBindVi","btn_ani");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btn_aniEn","divViewCompCond00.btn_ani","enable","dsObjBindEn","btn_ani");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sta_WFDA_Label05Vi","divViewCompCond00.sta_WFDA_Label05","visible","dsObjBindVi","sta_WFDA_Label05");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sta_WFDA_Label05En","divViewCompCond00.sta_WFDA_Label05","enable","dsObjBindEn","sta_WFDA_Label05");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btn_ingVi","divViewCompCond00.btn_ing","visible","dsObjBindVi","btn_ing");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btn_ingEn","divViewCompCond00.btn_ing","enable","dsObjBindEn","btn_ing");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sta_WFDA_Label03Vi","divViewCompCond00.sta_WFDA_Label03","visible","dsObjBindVi","sta_WFDA_Label03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sta_WFDA_Label03En","divViewCompCond00.sta_WFDA_Label03","enable","dsObjBindEn","sta_WFDA_Label03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("ImageViewer03Vi","divViewCompCond00.ImageViewer03","visible","dsObjBindVi","ImageViewer03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("ImageViewer03En","divViewCompCond00.ImageViewer03","enable","dsObjBindEn","ImageViewer03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btn_wrtVi","divViewCompCond00.btn_wrt","visible","dsObjBindVi","btn_wrt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btn_wrtEn","divViewCompCond00.btn_wrt","enable","dsObjBindEn","btn_wrt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("ImageViewer01Vi","divViewCompCond00.ImageViewer01","visible","dsObjBindVi","ImageViewer01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("ImageViewer01En","divViewCompCond00.ImageViewer01","enable","dsObjBindEn","ImageViewer01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sta_WFDA_Label01_13Vi","divViewCompCond00.sta_WFDA_Label01","visible","dsObjBindVi","sta_WFDA_Label01_13");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sta_WFDA_Label01_13En","divViewCompCond00.sta_WFDA_Label01","enable","dsObjBindEn","sta_WFDA_Label01_13");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btn_totalVi","divViewCompCond00.btn_total","visible","dsObjBindVi","btn_total");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btn_totalEn","divViewCompCond00.btn_total","enable","dsObjBindEn","btn_total");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("ImageViewer00Vi","divViewCompCond00.ImageViewer00","visible","dsObjBindVi","ImageViewer00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("ImageViewer00En","divViewCompCond00.ImageViewer00","enable","dsObjBindEn","ImageViewer00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sta_WFDA_Label00_11Vi","divViewCompCond00.sta_WFDA_Label00","visible","dsObjBindVi","sta_WFDA_Label00_11");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sta_WFDA_Label00_11En","divViewCompCond00.sta_WFDA_Label00","enable","dsObjBindEn","sta_WFDA_Label00_11");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sta_WFDA_Label02Vi","divViewCompCond00.sta_WFDA_Label02","visible","dsObjBindVi","sta_WFDA_Label02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sta_WFDA_Label02En","divViewCompCond00.sta_WFDA_Label02","enable","dsObjBindEn","sta_WFDA_Label02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnStopVi","divViewCompBody00.btnStop","visible","dsObjBindVi","btnStop");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnStopEn","divViewCompBody00.btnStop","enable","dsObjBindEn","btnStop");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnRfqReReqVi","divViewCompBody00.btnRfqReReq","visible","dsObjBindVi","btnRfqReReq");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnRfqReReqEn","divViewCompBody00.btnRfqReReq","enable","dsObjBindEn","btnRfqReReq");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPagingVi","divViewCompBody00.divPaging","visible","dsObjBindVi","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPagingEn","divViewCompBody00.divPaging","enable","dsObjBindEn","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompOrderBy.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompCalFromTo.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompCalFromTo.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComSrchUser.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComSrchInput.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComSrchMtrl.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComSrchInput.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
        };
        
        // User Script
        this.registerScript("BRfqPrgList.xfdl", function(exports) {
        /**
           @file       BRfqPrgList.xfdl
           @desc       견적진행현황
           @author     정현근
           @makedate   2019.04.29
        */  

        
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
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
        */
        this.fnSetCode = function(){
        	var param = [
        				//	 {code:"ET10"
        				//		,sSelectType:"A"
        				//		,sFiltered:"&& CD_ID != 'ET10CLO' && CD_ID != 'ET10REE' && CD_ID != 'ET10CXL'"	} //견적요청상태
        					{code:"CM10", sSelectType:"A"} // 구매유형
        				];

        	// 데이터셋 생성
        	gfnGetCode(this, param);	
        }

        
        /**
        	@function	fnFold
        	@desc   	타이틀 접기/펼치기 기능
        */
        this.fnFold = function()
        {
        	/*
        		상단에서부터 div 순서대로 기입.
        		ttl:접기/펼치기 클릭 하는 컴포넌트, body:실제로 접혀지거나 펼쳐지는 컴포넌트
        	*/
        	var sArg = [{
        				ttl:this.btnFold, body:this.divViewCompCond01, initFold:true
        				}];		   
        	gfnDivFold(this, sArg);
        }

        /**
        	@function   form_onload()
        	@desc       폼 onload이벤트
        */
        this.fnFormOnload = function(obj,e)
        {
        	//그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기(그리드 컴포넌트, 페이징div 컴포넌트, 폼오브젝트(this))
        	var sArgEx = {
        					isTran:"Y", tranNm:"BRfqService.searchRfqPrg", dsParam:this.dsCondition
        				}
         	gfnSetGrdFunc(this.divViewCompBody00.grdList, this.divViewCompBody00.divPaging, this, sArgEx);
        	
        	this.divViewCompCond01.divReqDt.fnSetDate(this.dsCondition, "REQ_DT_START", "REQ_DT_END");
        	this.divViewCompCond01.divRfqCloseDay.fnSetDate(this.dsCondition, "RFQ_CLOSE_DAY_START", "RFQ_CLOSE_DAY_END");
        	this.divViewCompCond01.divPchrgr.fnSet(this.dsCondition, "WRTR_ID", "WRTR_NM");
        	this.divViewCompCond00.divMtrl.fnSet(this.dsCondition, "MTRL_CD", "MTRL_NM");
        	this.divViewCompCond01.divPrNo.fnSet(this.dsCondition, "PR_NO", "fnSearch");
        	this.divViewCompCond00.divRfqNm.fnSet(this.dsCondition, "TTL", "fnSearch");
        	
        	if(application.gdsUserRole.findRow("ROLE_ID","B_MANAGER") < 0){
        		this.dsCondition.setColumn(0,"WRTR_ID",application.gdsUserInfo.getColumn(0,"USER_ID"));
        		this.dsCondition.setColumn(0,"WRTR_NM",application.gdsUserInfo.getColumn(0,"USER_NM"));
        	} 
        	
        	//검색조건 DataSet Row추가
        	this.dsCondition.addRow();
        	this.dsCondition.setColumn(0, "CD_RFQ_STTS", "");
        	this.dsCondition.setColumn(0,"PAGE_ID","BRfqPrgList"); 
        	this.dsCondition.setColumn(0,"BRANCH_CD", application.gdsUserInfo.getColumn(0,"BRANCH_CD"));
        	this.dsCondition.setColumn(0,"SORT_ITEM1","");
        	this.dsCondition.setColumn(0,"SORT_TYPE1","");
        	this.dsCondition.setColumn(0,"SORT_ITEM2","");
        	this.dsCondition.setColumn(0,"SORT_TYPE2","");
        	this.dsCondition.setColumn(0,"SORT_ITEM3","");
        	this.dsCondition.setColumn(0,"SORT_TYPE3","");
        	this.dsCondition.setColumn(0,"SORT_ITEM4","");
        	this.dsCondition.setColumn(0,"SORT_TYPE4","");
        	
        	//메인에서 파라미터가 넘어오면 견적번호를 셋팅하여 검색
        	if("" != gfnGetTmprData("DOC_NO")){
        		this.dsCondition.setColumn(0,"RFQ_REQ_NO",gfnGetTmprData("DOC_NO"));
        		gfnClearTmprData();
        	}
        	
        	gfnSetObj("A");
        	this.fnFold();	
        	this.fnSearch();
        }

        /**
        	@function   fnPreSearch()
        	@desc       조회 전 처리
        */
        this.fnPreSearchHeader = function()
        {
        	
        	return true;
        }

        /**
        	@function   fnSearchHeader()
        	@desc       진행현황 카운트 조회 프로세스
        */	
        this.fnSearchHeader = function()
        {
        	if(!this.fnPreSearchHeader()) return false;
        	
        	var sSvcID = "readRfqHeaderCount";
        	var sController = "epro.rfq.service.BRfqService.readRfqHeaderCount";
        	var sInDatasets = "dsCondition=dsCondition";
        	var sOutDatasets = "dsCount=dsCount";
        	var sCallbackFunc = "fnTrCallBack";
        	    
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
        	@function   fnPreSearch()
        	@desc       조회 전 처리
        */
        this.fnPreSearch = function()
        {
        	this.divViewCompCond01.divReqDt.fnSetDate(this.dsCondition, "REQ_DT_START", "REQ_DT_END");
        	this.divViewCompCond01.divRfqCloseDay.fnSetDate(this.dsCondition, "RFQ_CLOSE_DAY_START", "RFQ_CLOSE_DAY_END");
        	return true;
        }

        /**
        	@function   fnSearch()
        	@desc       조회 프로세스
        */	
        this.fnSearch = function()
        {
        	this.fnSearchHeader();
        	if(!this.fnPreSearch()) return false;
        	
        	var sSvcID = "searchRfqPrg";
        	var sController = "epro.rfq.service.BRfqService.searchRfqPrg";
        	var sInDatasets = "dsCondition=dsCondition";
        	var sOutDatasets = "dsList=dsList";
        	var sCallbackFunc = "fnTrCallBack";
        	
        	/*
        		페이징일 때 oPaging 선언후 사용
        		inDs:검색조건 데이터셋, outDs:리스트 데이터셋, divPaging:페이징 div
        	*/
        	var	oPaging = [
        					{inDs:this.dsCondition, grid:this.divViewCompBody00.grdList, divPaging:this.divViewCompBody00.divPaging}
        				];
        				
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc, oPaging);
        }

        /**
        	@function   fnPreSave()
        	@desc       저장 전 처리
        */
        this.fnPreSave = function()
        {
        	return true;
        }

        /**
        	@function   fnCommAdd()
        	@desc       (공통버튼)신규
        */
        this.fnAdd = function()
        {
        	gfnOpenMenuUrl("BRFQ::BRfqWrtDetail.xfdl");
        }

        /**
        	@function   fnCommDelete()
        	@desc       (공통버튼)삭제 프로세스
        */
        this.fnDelete = function()
        {

        }

        /**
        	@function   btnCommCancel()
        	@desc       (공통버튼)취소 프로세스
        */
        this.btnCommCancel = function()
        {
        	return true;
        }

        /**
        	@function   fnTrCallBack()
        	@desc       Transaction Callback함수
        */
        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	if(strErrCd < 0)
        	{
        		return;
        	}
        	
        	switch(strSvcID)
        	{
        		case "searchRfqPrg" : 
        			if(strErrMsg != "" && strErrCd == -1){
        				gfnAlert(strErrMsg);
        			}
        		break;
        		
        		case "readRfqHeaderCount" : 		 
        		break;
        		
        		case "req" : 
        			if(strErrMsg != ""){
        				gfnAlert(strErrMsg);
        				this.fnSearch();
        				
        				gfnSetTmprData("BRANCH_CD", this.dsChgRfq.getColumn(0,"BRANCH_CD"));
        				gfnSetTmprData("RFQ_REQ_NO", this.dsChgRfq.getColumn(0,"RFQ_REQ_NO"));
        				gfnSetTmprData("RFQ_ODR", this.dsChgRfq.getColumn(0,"RFQ_ODR"));
        				gfnOpenMenuUrl("BRFQ::RfqWrtDetail.xfdl");
        			}
        		break;
        		
        		case "clsDayChg" : 
        			if(strErrMsg != ""){
        				gfnAlert(strErrMsg);
        				this.fnSearch();
        			}
        		break;
        		
        		default:
        		break;	
        	}
        }

        /**
          * @함수명	: fnClose
          * @desc     	: (공통버튼)닫기
          */
        this.fnClose = function()
        {	
        	//데이터셋 수정여부 체크
        	if(gfnGetDsUpdate(this.dsList))
        	{
        		return false;
        	}
        	
        	return true;
        }

        /**
        	@function   divBodyGrdListOncellclick()
        	@desc       견적요청작성화면 이동 그리드 셀 클릭 이벤트
        */
        this.divBodyGrdListOncellclick = function(obj,e)
        {
        	if(this.dsList.rowcount==0) return;
        	var bindCol = obj.getCellProperty("Body",e.cell,"text").split("bind:").join("");
        	 
        	if(bindCol=="PTNR_CNT") {	
        		var sArg = { 
        					 branch_cd:this.dsList.getColumn(e.row,"BRANCH_CD")
        					,rfq_req_no:this.dsList.getColumn(e.row,"RFQ_REQ_NO")
        					,rfq_odr:this.dsList.getColumn(e.row,"RFQ_ODR")
        					};
        		gfnModalPop(this, "BRfqPtnrPop", "BRFQ::BRfqPtnrPop.xfdl", sArg, "fnPopCallBack", "934", "291");
        	}else if(bindCol=="PTNR_QUOTE_CNT") {	 
        		if(this.dsList.getColumn(e.row,"PTNR_QUOTE_CNT") == "0"){
        			gfnAlert("제출한 업체가 없습니다.");
        			return;
        		}
        		var sArg = { 
        					 branch_cd:this.dsList.getColumn(e.row,"BRANCH_CD")
        					,rfq_req_no:this.dsList.getColumn(e.row,"RFQ_REQ_NO")
        					,rfq_odr:this.dsList.getColumn(e.row,"RFQ_ODR")
        					,rfq_sumb_stts:"ET11SND"
        					};
        		gfnModalPop(this, "BRfqPtnrPop", "BRFQ::BRfqPtnrPop.xfdl", sArg, "fnPopCallBack", "934", "291");
        	
        	}else if(bindCol =="조회") {	
        	   if(this.dsList.getColumn(e.row,"CD_RFQ_STTS")!="ET10ANI"){
        			gfnAlert("견적이 종료되어야 협력업체에서 제출한 \n견적정보를 열람하실 수 있습니다");
        			return;
        		}else{
        			gfnSetTmprData("BRANCH_CD", this.dsList.getColumn(e.row,"BRANCH_CD"));
        			gfnSetTmprData("RFQ_REQ_NO", this.dsList.getColumn(e.row,"RFQ_REQ_NO"));
        			gfnSetTmprData("RFQ_ODR", this.dsList.getColumn(e.row,"RFQ_ODR"));
        			gfnSetTmprData("CD_RFQ_STTS", this.dsList.getColumn(e.row,"CD_RFQ_STTS"));
        			gfnSetTmprData("CD_DOC_CTGR", this.dsList.getColumn(e.row,"CD_DOC_CTGR"));
        			gfnSetTmprData("COREXP_KIDS", this.dsList.getColumn(e.row, "COREXP_KIDS"));
        			gfnOpenMenuUrl("RFXB::PRFXB200D00.xfdl");
        		}
        	}
        }
         
        /**
        	@function   btn_chgRfqCloseDay_onclick()
        	@desc       견적마감일 변경 버튼 클릭 이벤트
        */
        this.btnChgRfqCloseDayOnclick = function(obj,e)
        {
        	if(!gfnIsGrdChk(this.dsList)){
        		gfnAlert("선택된 견적서가 존재하지 않습니다."); 
        		return false;
        	}
        	
        	for(var i=0;i<this.dsList.rowcount;i++){
        		if(this.dsList.getColumn(i,"CHECKED")==1 && this.dsList.getColumn(i,"CD_RFQ_STTS") != "ET10REQ"){
        			gfnAlert("요청중인 견적만 선택 할 수 있습니다.");
        			return false;
        		}
        	}
        	
        	if(!gfnConfirm("견적마감일을 변경하시겠습니까?")) return;
        	
        	var sArg = { RFQ_CLOSE_DAY:this.dsList.getColumn(e.row,"RFQ_CLOSE_DAY")
        				,RFQ_CLOSE_TIME:this.dsList.getColumn(e.row,"RFQ_CLOSE_TIME") };
        	gfnModalPop(this, "BRfqClsDtChgPop", "BRFQ::BRfqClsDtChgPop.xfdl", sArg, "fnPopCallBack", "400", "150");
        }

        /**
        	@function   divBodyBtnRfqReReqOnclick()
        	@desc       견적재요청 버튼 클릭 이벤트
        */
        this.divBodyBtnRfqReReqOnclick = function(obj,e)
        {
        	if(!gfnIsGrdChk(this.dsList)){
        		gfnAlert("선택된 견적서가 존재하지 않습니다."); 
        		return false;
        	}
        	
        	//데이터셋 초기화
        	this.dsChgRfq.clearData();
        	//Check 되어있는 row 의 정보셋팅
        	for(var i=0;i<this.dsList.rowcount;i++){
        		if(this.dsList.getColumn(i,"CHECKED")==1 && this.dsList.getColumn(i,"CD_RFQ_STTS") == "ET10REQ"){
        			var nRow = this.dsChgRfq.addRow();
        			this.dsChgRfq.setColumn(nRow,"RFQ_REQ_NO",this.dsList.getColumn(i,"RFQ_REQ_NO"));
        			this.dsChgRfq.setColumn(nRow,"RFQ_ODR",this.dsList.getColumn(i,"RFQ_ODR"));
        			this.dsChgRfq.setColumn(nRow,"BRANCH_CD",this.dsList.getColumn(i,"BRANCH_CD"));
        			this.dsChgRfq.setColumn(nRow,"CD_DOC_CTGR",this.dsList.getColumn(i,"CD_DOC_CTGR"));
        			this.dsChgRfq.setColumn(nRow,"CD_RFQ_STTS","ET10WRI");
        		}else if(this.dsList.getColumn(i,"CHECKED")==1 && this.dsList.getColumn(i,"CD_RFQ_STTS") != "ET10REQ"){
        			gfnAlert("요청중인 견적만 선택 할 수 있습니다.");
        			return false;
        		}
        	}
        	
        	if(1 < this.dsChgRfq.rowcount){
        		gfnAlert("1건만 선택 할 수 있습니다.");
        		return false;
        	}
        	
        	if(!gfnConfirm("견적재요청 하시겠습니까?")) return;
        	
        	var sSvcID = "rfqReReq";
        	var sController = "epro.rfq.service.BRfqService.rfqReReq";
        	var sInDatasets = "dsChgRfq=dsChgRfq:A";
        	var sOutDatasets = "dsChgRfq=dsChgRfq";
        	var sCallbackFunc = "fnTrCallBack";
        	
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
        	@function   fnPopCallBack()
        	@desc       (공통)팝업 CallBack 함수
        */
        this.fnPopCallBack = function(sPopupId,rtn,e)
        {
        	if(gfnIsNull(rtn)) return;
        	
        	this.dsReturn.clear();
        	this.dsReturn.loadXML(rtn);
        	
        	switch(sPopupId){
        		case "BRfqClsDtChgPop" :
        			this.dsChgRfq.clearData();
        			//Check 되어있는 row 의 정보셋팅
        			for(var i=0;i<this.dsList.rowcount;i++){
        				if(this.dsList.getColumn(i,"CHECKED")==1){
        									
        					var closeTime = this.dsReturn.getColumn(0,"RFQ_CLOSE_TIME");

        					if(closeTime < 10){
        						closeTime = "0"+closeTime+"0000"; 
        					}else{
        						closeTime = closeTime+"0000";
        					}
        					var nRow = this.dsChgRfq.addRow();
        					this.dsChgRfq.setColumn(nRow,"RFQ_REQ_NO",this.dsList.getColumn(i,"RFQ_REQ_NO"));
        					this.dsChgRfq.setColumn(nRow,"RFQ_ODR",this.dsList.getColumn(i,"RFQ_ODR"));
        					this.dsChgRfq.setColumn(nRow,"BRANCH_CD",this.dsList.getColumn(i,"BRANCH_CD"));
        					this.dsChgRfq.setColumn(nRow,"RFQ_CLOSE_DAY",this.dsReturn.getColumn(0,"RFQ_CLOSE_DAY"));
        					this.dsChgRfq.setColumn(nRow,"RFQ_CLOSE_TIME",closeTime);
        				}
        			}
        			var sSvcID = "clsDayChg";
        			var sController = "BRfq_ClsDayChg.do";
        			var sInDatasets = "in_ds=dsChgRfq";
        			var sOutDatasets = "dsChgRfq=in_ds";
        			var sCallbackFunc = "fnTrCallBack";
        			gfnTran(sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        		break;
        		 
        		//멀티입력 CallBack
        		case "CompMultiInputPop":
        			if(!gfnIsNull(this.dsReturn.getColumn(0,"KEY"))){
        				this.dsCondition.setColumn(0,"RFQ_REQ_NO",this.dsReturn.getColumn(0,"KEY"));
        			}
        		break;
        		
        		default:
        		break;	
        	}
        }

        
         
        /**
        	@function   div_condition_btn_multiSelect_onclick()
        	@desc       멀티입력 팝업 호출 버튼 클릭 이벤트
        */
        this.divConditionBtnMultiSelectOnclick = function(obj,e)
        {
        	var sArg = {};
        	//멀티입력 컴포넌트 호출
        	gfnModalPop(this, "CompMultiInputPop", "CPOP::CompMultiInputPop.xfdl", sArg, "fnPopCallBack", "600", "400");
        }

        this.divConditionBtnTotalOnclick = function(obj,e)
        {
        	this.dsCondition.setColumn(0, "CD_RFQ_STTS", "");
        	this.fnSearch();
        }

        this.divConditionBtnWrtOnclick = function(obj,e)
        {
        	this.dsCondition.setColumn(0, "CD_RFQ_STTS", "ET10WRI");
        	this.fnSearch();
        }

        this.divConditionBtnIngOnclick = function(obj,e)
        {
        	this.dsCondition.setColumn(0, "CD_RFQ_STTS", "ET10REQ");
        	this.fnSearch();
        }

        this.divConditionBtnAniOnclick = function(obj,e)
        {
        	this.dsCondition.setColumn(0, "CD_RFQ_STTS", "ET10ANI");
        	this.fnSearch();	
        }

        /**
        	@function   divBodyGrdListOncelldblclick()
        	@desc       그리드 요소 더블클릭시 발생 이벤트
        */
        this.divBodyGrdListOncelldblclick = function(obj,e)
        {
        	if(this.dsList.rowcount==0) return;
        	
        	if(gfnGrdBindColNm(obj, e.cell)=="RFQ_REQ_NO") {	// 견적 
        		var sArg = { 
        					rfq_req_no:this.dsList.getColumn(e.row,"RFQ_REQ_NO")
        				  , rfq_odr:this.dsList.getColumn(e.row,"RFQ_ODR")
        				  , branch_cd:this.dsList.getColumn(e.row,"BRANCH_CD") };
        		gfnDialog("PopupPoMtrlPrint", "RFXS::PRFXS100P00.xfdl", sArg, "fnPopCallBack");
        	}else if(gfnGrdBindColNm(obj, e.cell)=="TTL") {	// 견적 상세
        		gfnSetTmprData("RFQ_REQ_NO", this.dsList.getColumn(e.row,"RFQ_REQ_NO"));
        		gfnSetTmprData("RFQ_ODR", this.dsList.getColumn(e.row,"RFQ_ODR"));
        		gfnSetTmprData("BRANCH_CD", this.dsList.getColumn(e.row,"BRANCH_CD"));
        		gfnSetTmprData("CD_RFQ_STTS", this.dsList.getColumn(e.row,"CD_RFQ_STTS"));
        		gfnSetTmprData("COREXP_KIDS", this.dsList.getColumn(e.row,"COREXP_KIDS"));
        		gfnOpenMenuUrl("BRFQ::BRfqWrtDetail.xfdl");
        		
        	}else if(gfnGrdBindColNm(obj, e.cell)=="CHRGR_NM")	// 담당자 정보 팝업
        	{
        		var sArg = {	 branch_cd : application.gdsUserInfo.getColumn(0, "BRANCH_CD")
        						,  agv_id : this.dsList.getColumn(e.row, "CHRGR_ID")
        					};
        		gfnModalPop(this, "BUserInfoPopup", "CPOP::BUserInfoPopup.xfdl", sArg, "fnPopCallBack", "400", "240");
        	}
        }
         
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.divViewCompCond01.edtRfqReqNo.addEventHandler("onkeydown", this.fnOnkeydownEvent, this);
            this.divViewCompCond01.btnMultiSelect.addEventHandler("onclick", this.divConditionBtnMultiSelectOnclick, this);
            this.btnFold.addEventHandler("onclick", this.btnFold_onclick, this);
            this.divViewCompCond00.staWFDALabel04.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.divViewCompCond00.btnAni.addEventHandler("onclick", this.divConditionBtnAniOnclick, this);
            this.divViewCompCond00.staWFDALabel05.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.divViewCompCond00.btnIng.addEventHandler("onclick", this.divConditionBtnIngOnclick, this);
            this.divViewCompCond00.staWFDALabel03.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.divViewCompCond00.btnWrt.addEventHandler("onclick", this.divConditionBtnWrtOnclick, this);
            this.divViewCompCond00.staWFDALabel01.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.divViewCompCond00.btnTotal.addEventHandler("onclick", this.divConditionBtnTotalOnclick, this);
            this.divViewCompCond00.staWFDALabel00.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.divViewCompCond00.staWFDALabel02.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.divViewCompBody00.btnChgRfqCloseDay.addEventHandler("onclick", this.btnChgRfqCloseDayOnclick, this);
            this.divViewCompBody00.btnRfqReReq.addEventHandler("onclick", this.divBodyBtnRfqReReqOnclick, this);
            this.divViewCompBody00.grdList.addEventHandler("oncellclick", this.divBodyGrdListOncellclick, this);
            this.divViewCompBody00.grdList.addEventHandler("oncelldblclick", this.divBodyGrdListOncelldblclick, this);

        };

        this.loadIncludeScript("BRfqPrgList.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
