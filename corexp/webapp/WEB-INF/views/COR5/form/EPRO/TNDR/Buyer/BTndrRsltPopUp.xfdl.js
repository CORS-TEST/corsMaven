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
                this.set_name("BTndrRsltPopUp");
                this.set_titletext("협력사 응찰분석 팝업");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTndr", this);
            obj._setContents("<ColumnInfo><Column id=\"TKEY\" type=\"string\" size=\"20\"/><Column id=\"GOALAMT\" type=\"bigdecimal\" size=\"22\"/><Column id=\"WRTR_ID\" type=\"string\" size=\"50\"/><Column id=\"TTL\" type=\"string\" size=\"600\"/><Column id=\"PRGRS_ROUND\" type=\"bigdecimal\" size=\"22\"/><Column id=\"CRTR_ID\" type=\"string\" size=\"50\"/><Column id=\"TNDR_END_DT\" type=\"string\" size=\"7\"/><Column id=\"TNDR_NO\" type=\"string\" size=\"40\"/><Column id=\"ATTCH_FILE_CNT\" type=\"bigdecimal\" size=\"22\"/><Column id=\"WRTR_NM\" type=\"string\" size=\"30\"/><Column id=\"CD_DOC_CTGR_NM\" type=\"string\" size=\"40\"/><Column id=\"CD_DOC_CTGR\" type=\"string\" size=\"40\"/><Column id=\"TNDR_ODR\" type=\"bigdecimal\" size=\"22\"/><Column id=\"CD_TNDR_STTS_NM\" type=\"string\" size=\"40\"/><Column id=\"CD_TNDR_STTS\" type=\"string\" size=\"40\"/><Column id=\"RMARK\" type=\"string\" size=\"3000\"/><Column id=\"REQ_DT\" type=\"string\" size=\"7\"/><Column id=\"LAST_CHG_DT\" type=\"string\" size=\"7\"/><Column id=\"ROUND_CNT\" type=\"bigdecimal\" size=\"22\"/><Column id=\"AWRD_AMT\" type=\"bigdecimal\" size=\"22\"/><Column id=\"CD_TNDR_MTHD_NM\" type=\"string\" size=\"40\"/><Column id=\"CD_TNDR_MTHD\" type=\"string\" size=\"40\"/><Column id=\"LAST_CHGR_ID\" type=\"string\" size=\"50\"/><Column id=\"CRT_DT\" type=\"string\" size=\"7\"/><Column id=\"APP_DOC_ID\" type=\"string\" size=\"20\"/><Column id=\"BRANCH_CD\" type=\"string\" size=\"20\"/><Column id=\"FNL_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSED_RMK\" type=\"STRING\" size=\"256\"/><Column id=\"RFQ_REQ_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PO_DAY\" type=\"string\" size=\"20\"/><Column id=\"PR_REQ_DAY\" type=\"string\" size=\"20\"/><Column id=\"RFQ_TKEY\" type=\"string\" size=\"20\"/><Column id=\"PO_COREXP_KIDS\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_COREXP_KIDS\" type=\"STRING\" size=\"256\"/><Column id=\"RFQ_COREXP_KIDS\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTndrPtnr", this);
            obj._setContents("<ColumnInfo><Column id=\"TNDR_NO\" type=\"string\" size=\"20\"/><Column id=\"BID_DT\" type=\"string\" size=\"7\"/><Column id=\"TNDR_PTNR_NM\" type=\"string\" size=\"4000\"/><Column id=\"BIDR_NM\" type=\"string\" size=\"30\"/><Column id=\"CD_BID_RSLT_NM\" type=\"string\" size=\"40\"/><Column id=\"CD_BID_RSLT\" type=\"string\" size=\"40\"/><Column id=\"BID_AMT\" type=\"int\" size=\"22\"/><Column id=\"PTNR_ID\" type=\"string\" size=\"20\"/><Column id=\"LANKING\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"TNDR_ODR\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTndrPtnrItem", this);
            obj._setContents("<ColumnInfo><Column id=\"TNDR_NO\" type=\"string\" size=\"20\"/><Column id=\"CD_UNIT_NM\" type=\"string\" size=\"40\"/><Column id=\"GOALAMT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_UNIT\" type=\"string\" size=\"40\"/><Column id=\"QTY\" type=\"int\" size=\"22\"/><Column id=\"BID_UNIT_PRICE\" type=\"int\" size=\"22\"/><Column id=\"TNDR_PTNR_NM\" type=\"string\" size=\"4000\"/><Column id=\"MTRL_NM\" type=\"string\" size=\"500\"/><Column id=\"BID_AMT\" type=\"int\" size=\"22\"/><Column id=\"MTRL_CD\" type=\"string\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReturn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Tab("Tab01", "absolute", "0", "58", null, "454", "0", null, this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabp01", this.Tab01);
            obj.set_text("응찰결과");
            obj.style.set_background("white");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("상세데이터");
            this.Tab01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "45", null, "33", "0", null, this.Tab01.tabp01);
            obj.set_taborder("116");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staStrCd", "absolute", "336", "45", "171", "33", null, null, this.Tab01.tabp01);
            obj.set_taborder("117");
            obj.set_text("낙찰금액");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Div("div_00", "absolute", "0", "5", null, "24", "0", null, this.Tab01.tabp01);
            obj.set_taborder("118");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", null, "255", "24", null, "0", this.Tab01.tabp01.div_00);
            obj.set_taborder("12");
            obj.set_text("입찰정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 2 17");
            this.Tab01.tabp01.div_00.addChild(obj.name, obj);
            obj = new Button("btnChgBid", "absolute", null, "0", "78", "24", "5", null, this.Tab01.tabp01.div_00);
            obj.set_taborder("13");
            obj.set_text("낙찰결과변경");
            obj.set_cssclass("btn_WF_Add");
            obj.getSetter("objNm").set("대상업체 추가버튼");
            obj.getSetter("lbcd").set("");
            this.Tab01.tabp01.div_00.addChild(obj.name, obj);
            obj = new Static("staStrCd00", "absolute", "1", "45", "171", "33", null, null, this.Tab01.tabp01);
            obj.set_taborder("119");
            obj.set_text("구매목표가");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staStrCd01", "absolute", "669", "45", "171", "33", null, null, this.Tab01.tabp01);
            obj.set_taborder("120");
            obj.set_text("구매절감금액");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Grid("grd_list00", "absolute", "0", "80", null, null, "0", "189", this.Tab01.tabp01);
            obj.set_taborder("121");
            obj.set_binddataset("dsTndrPtnr");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"55\"/><Column size=\"120\"/><Column size=\"230\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순위\"/><Cell col=\"2\" text=\"사업자등록번호\"/><Cell col=\"3\" text=\"협력사명\"/><Cell col=\"4\" text=\"응찰자명\"/><Cell col=\"5\" text=\"응찰일시\"/><Cell col=\"6\" text=\"견적금액\"/><Cell col=\"7\" text=\"응찰금액\"/><Cell col=\"8\" text=\"입찰결과\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"background:EXPR(CD_BID_RSLT==&quot;ER25AWD&quot;?&quot;aquamarine&quot;:&quot;&quot;);background2:EXPR(CD_BID_RSLT=='ER25AWD'?'blue':'');\" text=\"bind:CHECKED\"/><Cell col=\"1\" style=\"background:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;green&quot;:&quot;&quot; );background2:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;green&quot;:&quot;&quot; );color:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;white&quot;:&quot;&quot; );color2:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;white&quot;:&quot;&quot; );font:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;bold&quot;:&quot;&quot; );selectbackground:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;green&quot;:&quot;&quot; );selectcolor:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;white&quot;:&quot;&quot; );selectfont:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;bold&quot;:&quot;&quot; );controlfont:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;bold&quot;:&quot;&quot; );\" text=\"bind:LANKING\"/><Cell col=\"2\" style=\"background:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;green&quot;:&quot;&quot; );background2:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;green&quot;:&quot;&quot; );color:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;white&quot;:&quot;&quot; );color2:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;white&quot;:&quot;&quot; );font:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;bold&quot;:&quot;&quot; );selectbackground:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;green&quot;:&quot;&quot; );selectcolor:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;white&quot;:&quot;&quot; );selectfont:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;bold&quot;:&quot;&quot; );controlfont:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;bold&quot;:&quot;&quot; );\" cssclass=\"cell_link\" text=\"bind:PTNR_ID\" mask=\"@@@-@@-@@@@@\"/><Cell col=\"3\" style=\"align:left;background:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;green&quot;:&quot;&quot; );background2:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;green&quot;:&quot;&quot; );color:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;white&quot;:&quot;&quot; );color2:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;white&quot;:&quot;&quot; );font:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;bold&quot;:&quot;&quot; );selectbackground:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;green&quot;:&quot;&quot; );selectcolor:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;white&quot;:&quot;&quot; );selectfont:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;bold&quot;:&quot;&quot; );controlfont:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;bold&quot;:&quot;&quot; );\" cssclass=\"cell_link\" text=\"bind:TNDR_PTNR_NM\"/><Cell col=\"4\" style=\"background:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;green&quot;:&quot;&quot; );background2:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;green&quot;:&quot;&quot; );color:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;white&quot;:&quot;&quot; );color2:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;white&quot;:&quot;&quot; );font:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;bold&quot;:&quot;&quot; );selectbackground:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;green&quot;:&quot;&quot; );selectcolor:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;white&quot;:&quot;&quot; );selectfont:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;bold&quot;:&quot;&quot; );controlfont:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;bold&quot;:&quot;&quot; );\" text=\"bind:BIDR_NM\"/><Cell col=\"5\" displaytype=\"normal\" style=\"background:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;green&quot;:&quot;&quot; );background2:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;green&quot;:&quot;&quot; );color:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;white&quot;:&quot;&quot; );color2:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;white&quot;:&quot;&quot; );font:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;bold&quot;:&quot;&quot; );selectbackground:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;green&quot;:&quot;&quot; );selectcolor:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;white&quot;:&quot;&quot; );selectfont:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;bold&quot;:&quot;&quot; );controlfont:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;bold&quot;:&quot;&quot; );\" text=\"bind:BID_DT\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;padding:0 5 0 5;background:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;green&quot;:&quot;&quot; );background2:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;green&quot;:&quot;&quot; );color:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;white&quot;:&quot;&quot; );color2:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;white&quot;:&quot;&quot; );font:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;bold&quot;:&quot;&quot; );selectbackground:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;green&quot;:&quot;&quot; );selectcolor:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;white&quot;:&quot;&quot; );selectfont:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;bold&quot;:&quot;&quot; );controlfont:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;bold&quot;:&quot;&quot; );\" text=\"bind:RFQ_AMT\" mask=\"#,##0\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;padding:0 5 0 5;background:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;green&quot;:&quot;&quot; );background2:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;green&quot;:&quot;&quot; );color:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;white&quot;:&quot;&quot; );color2:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;white&quot;:&quot;&quot; );font:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;bold&quot;:&quot;&quot; );selectbackground:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;green&quot;:&quot;&quot; );selectcolor:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;white&quot;:&quot;&quot; );selectfont:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;bold&quot;:&quot;&quot; );controlfont:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;bold&quot;:&quot;&quot; );\" text=\"bind:BID_AMT\" mask=\"#,##0\"/><Cell col=\"8\" style=\"background:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;green&quot;:&quot;&quot; );background2:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;green&quot;:&quot;&quot; );color:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;white&quot;:&quot;&quot; );color2:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;white&quot;:&quot;&quot; );font:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;bold&quot;:&quot;&quot; );selectbackground:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;green&quot;:&quot;&quot; );selectcolor:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;white&quot;:&quot;&quot; );selectfont:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;bold&quot;:&quot;&quot; );controlfont:EXPR(CD_BID_RSLT==&quot;ET25AWD&quot;?&quot;bold&quot;:&quot;&quot; );\" text=\"bind:CD_BID_RSLT_NM\"/></Band></Format></Formats>");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Div("div_01", "absolute", "0", "245", null, "24", "0", null, this.Tab01.tabp01);
            obj.set_taborder("122");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", null, "255", "24", null, "0", this.Tab01.tabp01.div_01);
            obj.set_taborder("0");
            obj.set_text("입찰품목");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 2 17");
            this.Tab01.tabp01.div_01.addChild(obj.name, obj);
            obj = new Grid("grd_list", "absolute", "0", null, null, "171", "0", "-15", this.Tab01.tabp01);
            obj.set_taborder("123");
            obj.set_binddataset("dsTndrPtnrItem");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"220\"/><Column size=\"70\"/><Column size=\"55\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"품목코드\"/><Cell col=\"1\" text=\"품목명\"/><Cell col=\"2\" text=\"수량\"/><Cell col=\"3\" text=\"단위\"/><Cell col=\"4\" text=\"구매예상가\"/><Cell col=\"5\" text=\"협력사명\"/><Cell col=\"6\" text=\"견적단가\"/><Cell col=\"7\" text=\"응찰단가\"/><Cell col=\"8\" text=\"응찰금액\"/></Band><Band id=\"body\"><Cell cssclass=\"cell_link\" text=\"bind:MTRL_CD\" suppress=\"1\"/><Cell col=\"1\" style=\"align:left;\" cssclass=\"cell_link\" text=\"bind:MTRL_NM\" suppress=\"1\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:QTY\" mask=\"#,##0.00\" suppress=\"1\"/><Cell col=\"3\" text=\"bind:CD_UNIT_NM\" suppress=\"1\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:GOALAMT\" mask=\"#,##0.00\" suppress=\"1\"/><Cell col=\"5\" style=\"align:left;\" cssclass=\"cell_link\" text=\"bind:TNDR_PTNR_NM\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RFQ_PRICE\" mask=\"#,##0.00\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BID_UNIT_PRICE\" mask=\"#,##0.00\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BID_AMT\" mask=\"#,##0.00\"/></Band></Format></Formats>");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new MaskEdit("mae_debt00", "absolute", "176", "50", "156", "24", null, null, this.Tab01.tabp01);
            obj.set_taborder("124");
            obj.set_readonly("true");
            obj.set_mask("#,##0.00");
            obj.set_autoselect("true");
            obj.set_cssclass("mae_default_r");
            obj.style.set_color("blue");
            obj.style.set_font("bold 10 Dotum");
            obj.getSetter("objNm").set("구매목표가");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new MaskEdit("mae_debt01", "absolute", "510", "50", "156", "24", null, null, this.Tab01.tabp01);
            obj.set_taborder("125");
            obj.set_readonly("true");
            obj.set_mask("#,##0.00");
            obj.set_autoselect("true");
            obj.set_cssclass("mae_default_r");
            obj.style.set_color("blue");
            obj.style.set_font("bold 10 Dotum");
            obj.getSetter("objNm").set("낙찰금액");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new MaskEdit("mae_debt02", "absolute", "844", "50", "156", "24", null, null, this.Tab01.tabp01);
            obj.set_taborder("126");
            obj.set_readonly("true");
            obj.set_mask("#,##0.00");
            obj.set_autoselect("true");
            obj.set_cssclass("mae_default_r");
            obj.style.set_color("blue");
            obj.style.set_font("bold 10 Dotum");
            obj.getSetter("objNm").set("구매절감금액");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Tabpage("tabp02", this.Tab01);
            obj.set_text("완료비고");
            obj.getSetter("objNm").set("품목 특이사항");
            this.Tab01.addChild(obj.name, obj);
            obj = new TextArea("txtItemTxt", "absolute", "2", "34", null, "278", "5", null, this.Tab01.tabp02);
            obj.set_taborder("4");
            obj.set_scrollbars("none");
            obj.set_wordwrap("char");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("500");
            obj.getSetter("objNm").set("품목 특이사항");
            this.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Div("div_00", "absolute", "0", "5", null, "24", "0", null, this.Tab01.tabp02);
            obj.set_taborder("5");
            this.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", null, "255", "24", null, "0", this.Tab01.tabp02.div_00);
            obj.set_taborder("10");
            obj.set_text("대상업체");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 2 17");
            this.Tab01.tabp02.div_00.addChild(obj.name, obj);
            obj = new Button("btn_ptnrAdd", "absolute", null, "0", "46", "24", "5", null, this.Tab01.tabp02.div_00);
            obj.set_taborder("11");
            obj.set_text("생성");
            obj.set_cssclass("btn_WF_Add");
            obj.getSetter("objNm").set("대상업체 추가버튼");
            obj.getSetter("lbcd").set("");
            this.Tab01.tabp02.div_00.addChild(obj.name, obj);

            obj = new Button("btnCnl", "absolute", null, "30", "78", "24", "339", null, this);
            obj.set_taborder("1");
            obj.set_text("입찰취소");
            obj.set_cssclass("btn_WF_CRUD");
            obj.getSetter("objNm").set("입찰취소");
            this.addChild(obj.name, obj);

            obj = new Button("btnReRfx", "absolute", null, "30", "78", "24", "256", null, this);
            obj.set_taborder("2");
            obj.set_text("최종견적요청");
            obj.set_cssclass("btn_WF_CRUD");
            obj.getSetter("objNm").set("최종견적요청");
            this.addChild(obj.name, obj);

            obj = new Button("btnWrtCntr", "absolute", null, "30", "78", "24", "173", null, this);
            obj.set_taborder("3");
            obj.set_text("계약서작성");
            obj.set_cssclass("btn_WF_CRUD");
            obj.getSetter("objNm").set("계약서작성");
            this.addChild(obj.name, obj);

            obj = new Button("btn_wrtPor", "absolute", null, "30", "78", "24", "90", null, this);
            obj.set_taborder("4");
            obj.set_text("발주서작성");
            obj.set_cssclass("btn_WF_CRUD");
            obj.getSetter("objNm").set("발주서작성");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reTndr", "absolute", null, "30", "78", "24", "7", null, this);
            obj.set_taborder("5");
            obj.set_text("재입찰작성");
            obj.set_cssclass("btn_WF_CRUD");
            obj.getSetter("objNm").set("재입찰작성");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.Tab01.tabp01.div_00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("118");

            	}
            );
            this.Tab01.tabp01.div_00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.Tab01.tabp01.div_01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("122");

            	}
            );
            this.Tab01.tabp01.div_01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1042, 158, this.Tab01.tabp01,
            	//-- Layout function
            	function(p) {
            		p.set_text("응찰결과");
            		p.style.set_background("white");
            		p.set_scrollbars("none");
            		p.getSetter("objNm").set("상세데이터");

            	}
            );
            this.Tab01.tabp01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.Tab01.tabp02.div_00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");

            	}
            );
            this.Tab01.tabp02.div_00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab01.tabp02,
            	//-- Layout function
            	function(p) {
            		p.set_text("완료비고");
            		p.getSetter("objNm").set("품목 특이사항");

            	}
            );
            this.Tab01.tabp02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("협력사 응찰분석 팝업");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item39","Tab01.tabp04.edt_ptnrId","value","dsPoItem","PTNR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item40","Tab01.tabp04.edt_ptnrNm","value","dsPoItem","PTNR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","Tab01.tabp04.edt_zipCd","value","dsPoItem","ZIP_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item42","Tab01.tabp04.edt_addr1","value","dsPoItem","ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item43","Tab01.tabp04.edt_addr2","value","dsPoItem","DTL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item44","Tab01.tabp04.edt_dlvContent","value","dsPoItem","FWD_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item49","Tab01.tabp09.edt_confirmUser","value","dsPoItem","RCVR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","Tab01.tabp03.edt_acntCd","value","dsPoItem","ACNT_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","Tab01.tabp03.edt_costCd","value","dsPoItem","COST_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","Tab01.tabp03.edt_accNm","value","dsPoItem","ACNT_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","Tab01.tabp03.edt_costNm","value","dsPoItem","COST_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","Tab01.tabp02.grd_rfqItem","binddataset","dsPoItemDlv","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item45","Tab01.tabp05.txt_itemTxt","value","dsPoItem","RMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item63","Tab01.tabp09.ma_confirmDt","value","dsPoItem","RCV_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","Tab01.tabp04.edtCnfrmUser","value","dsPoItem","RCVR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item38","Tab01.tabp04.maeCnfrmDt","value","dsPoItem","RCV_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Tab01.tabp01.mae_debt00","value","dsTndr","GOALAMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","Tab01.tabp01.mae_debt01","value","dsTndr","AWRD_AMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Tab01.tabp01.mae_debt02","value","dsTndr","FNL_AMT");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("BTndrRsltPopUp.xfdl", function(exports) {
        /**
         * @파일명       	: BTndrRsltPopup.xfdl
         * @생성자       	: 김승일
         * @생성일자     	: 2019. 05. 17.
         * @설명			: 입찰결과보기 팝업 (협력사 응찰분석)
         * @최종수정자		: 
         * @최종수정일자	: 
        */ 

        this.popTitle = "협력사 응찰분석";

        /**
        	@var  this.fv_row
        	@desc 전역변수 
        */
        this.fv_row = 0;

        /**
        	@var  this.fv_cd_tndr_stts
        	@desc 전역변수 
        */
        this.fv_cd_tndr_stts = "";

        
        /**
        	@function	pop_tndrEndPop_onload()
        	@desc   	팝업폼 onload 이벤트
        */
        this.pop_tndrEndPop_onload = function(obj,e)
        {
        	//시스템 공통함수 호출 : 팝업
        	//this.gfnPopOnLoad(this);
        	
        	//부모창으로 부터 전달받은 값	
        	var ownFrame = this.getOwnerFrame();
        	
        	if(ownFrame.endTndr == 'Y'){//경쟁입찰완료 페이지에서 넘어온 경우 버튼 안보이도록 셋팅
        		this.btnCnl.set_visible(false);
        		this.btnReRfx.set_visible(false);
        		this.btnWrtCntr.set_visible(false);
        		this.btn_wrtPor.set_visible(false);
        		this.btn_reTndr.set_visible(false);
        		this.Tab01.tabp01.div_00.btnChgBid.set_visible(false);
        		this.Tab01.tabp02.div_00.btn_ptnrAdd.set_visible(false);
        	}
        	
        	
        	//부모창으로 부터 전달받은 값을 NULL 이 아니면 검색조건 DataSet에 담는다.
        	var nRow = this.dsTndrPtnr.addRow();
        	this.dsTndrPtnr.setColumn(nRow,"TNDR_NO",ownFrame.agv_id);
        	this.dsTndrPtnr.setColumn(nRow,"TNDR_ODR",ownFrame.agv_tndr_odr);
        	this.dsTndrPtnr.setColumn(nRow,"BRANCH_CD",ownFrame.agv_branch_cd);
        	this.dsTndrPtnr.setColumn(nRow, "USER_ID", "");
        	
        	this.fnSearch();
        }

        /**
        	@function	fn_preSearch()
        	@desc   	조회 전 처리
        */
        this.fnPreSearch = function()
        {
        	return true;
        }

        /**
        	@function	fn_search()
        	@desc   	조회 프로세스
        */
        this.fnSearch = function()
        {
        	if(!this.fnPreSearch()) return false;
        	
        	var sSvcID = "search";
        	var sController = "epro.tndr.service.BTndrService.tndrEndPtnrSrch";
        	var sInDatasets = "dsTndrPtnr=dsTndrPtnr dsTndrPtnrItem=dsTndrPtnrItem";
        	var sOutDatasets = "dsTndrPtnr=dsTndrPtnr dsTndrPtnrItem=dsTndrPtnrItem dsTndr=dsTndr";
        	var sCallbackFunc = "fnTrCallBack";
        	
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
        	@function	btn_close_onclick()
        	@desc   	팝업닫기
        */
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        /**
        	@function	btn_reTndr_onclick()
        	@desc   	재입찰작성
        */
        this.btn_reTndr_onclick = function(obj,e)
        {
        	
        	this.fv_cd_tndr_stts = this.dsTndr.getColumn(0,"CD_TNDR_STTS");
        	
        	
        	
        	//완료비고메세지 생성
        	this.Tab00_tabpage2_btn_crtData_onclick();
        	
        	if(!gfnConfirm("재입찰작성 하시겠습니까?")) return;
        	
        // 	var sSvcID = "BTndr_reTndr";
        // 	var sController = "BTndr_reTndr.do";
        // 	var sInDatasets = "in_tndr=ds_tndr  in_tndrPtnr=ds_tndrPtnr";
        // 	var sOutDatasets = "ds_tndr=in_tndr";
        // 	var sCallbackFunc = "fn_trCallBack";
        //     this.gfn_tran(sSvcID, sController, sInDatasets, sOutDatasets,sCallbackFunc);
        	
        	var sSvcID = "saveReTndr";
        	var sController = "epro.tndr.service.BTndrService.saveReTndr";
        	var sInDatasets = "dsTndr=dsTndr dsTndrPtnr=dsTndrPtnr";
        	var sOutDatasets = "dsTndr=dsTndr";
        	var sCallbackFunc = "fnTrCallBack";
        	
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);

        }

        /**
        	@function	btn_reRfx_onclick()
        	@desc   	최종견적작성
        */
        this.btn_reRfx_onclick = function(obj,e)
        {	
        	if(gfnIsNull(this.dsTndr.getColumn(0,"CLOSED_RMK"))){
        		//완료비고메세지 생성
        		this.Tab00_tabpage2_btn_crtData_onclick();
        	}
        	//낙찰처리
        	
        	if(!gfnConfirm("최종견적작성 하시겠습니까?")) return;

        // 	var sSvcID = "BTndr_reRfx";
        // 	var sController = "BTndr_reRfx.do";
        // 	var sInDatasets = "in_tndr=ds_tndr in_tndrPtnr=ds_tndrPtnr";
        // 	if(this.ds_tndr.getColumn(0,"RFQ_REQ_NO") == null || this.ds_tndr.getColumn(0,"RFQ_REQ_NO") == ""){
        // 		var sOutDatasets = "ds_tndr=in_tndr";
        // 	}else{
        // 		var sOutDatasets = "";
        // 	}
        // 	
        // 	var sCallbackFunc = "fn_trCallBack";
        // 	this.gfn_tran(sSvcID, sController, sInDatasets, sOutDatasets,sCallbackFunc);
        	
        	var sSvcID = "tndrReRfx";
        	var sController = "epro.tndr.service.BTndrService.tndrReRfx";
        	var sInDatasets = "dsTndr=dsTndr";
        	if(this.dsTndr.getColumn(0, "RFQ_REQ_NO") == null || this.dsTndr.getColumn(0, "RFQ_REQ_NO") == ""){
        		var sOutDatasets = "dsTndr=dsTndr";
        	}else{
        		var sOutDatasets = "";
        	}
        	var sCallbackFunc = "fnTrCallBack";
        	
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        	
        }

        /**
        	@function	btn_wrtPor_onclick()
        	@desc   	발주작성
        */
        this.btn_wrtPor_onclick = function(obj,e)
        {
        	
        	if("Y" == this.dsTndr.getColumn(0,"ALT_TOT_BID")){
        	
        		for(var i = 0 ; i < this.dsTndrPtnrItem.rowcount ; i++){
        			if(this.dsTndrPtnrItem.getColumn(i,"QTY") != 1){
        				gfnAlert("총액응찰일 경우 최종견적 후 발주서를 작성하실 수 있습니다.");
        				return;		
        			}
        		}
        	
        	}
        	
        	if(!this.chkMjrCstmr){
        		if(gfnIsNull(this.dsTndr.getColumn(0,"CLOSED_RMK"))){
        			gfnAlert("최저가 업체가 낙찰 되지 않았습니다. 완료비고를 작성해 주십시오.");
        			return;
        		}
        	}else{
        			//완료비고메세지 생성
        		this.Tab00_tabpage2_btn_crtData_onclick();
        	}
        	
        	this.dsTndr.setColumn(0,"CD_CNST_TYPE",this.dsReturn.getColumn(0,"PO_TYPE"));
        	
        	if(!gfnConfirm("발주작성 하시겠습니까?")) return;
        	
        // 	var sSvcID = "BTndr_wrtPor";
        // 	var sController = "BTndr_wrtPor.do";
        // 	var sInDatasets = "in_tndr=ds_tndr  in_tndrPtnr=ds_tndrPtnr";
        // 	var sOutDatasets = "ds_tndr=in_tndr ";
        // 	var sCallbackFunc = "fn_trCallBack";
        // 	this.gfn_tran(sSvcID, sController, sInDatasets, sOutDatasets,sCallbackFunc);

        	var sSvcID = "createPor";
        	var sController = "epro.tndr.service.BTndrService.createPor";//	tndrWrtCntr
        	var sInDatasets = "dsTndr=dsTndr dsTndrPtnr=dsTndrPtnr";
        	var sOutDatasets = "dsTndr=dsTndr";
        	var sCallbackFunc = "fnTrCallBack";
        	
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets,sCallbackFunc);

        }

        /**
        	@function	btn_wrtCntr_onclick()
        	@desc   	계약서작성
        */
        this.btn_wrtCntr_onclick = function(obj,e)
        {
        		
        	if("Y" == this.dsTndr.getColumn(0,"ALT_TOT_BID")){
        		gfnAlert("최종견적요청을 클릭하여 최종견적을 받으신 후 계약서를 작성하시기 바랍니다.");
        		return;
        	}
        	
        	if(!this.chkMjrCstmr){
        		if(gfnIsNull(this.dsTndr.getColumn(0,"CLOSED_RMK"))){
        			gfnAlert("최저가 업체가 낙찰 되지 않았습니다. 완료비고를 작성해 주십시오.");
        			return;
        		}
        	}else{
        			//완료비고메세지 생성
        		this.Tab00_tabpage2_btn_crtData_onclick();
        	}
        	
        	if(!gfnConfirm("계약작성 하시겠습니까?")) return;
        	
        // 	var sSvcID = "BTndr_wrtCtr";
        // 	var sController = "BTndr_wrtCntr.do";
        // 	var sInDatasets = "in_tndr=ds_tndr in_tndrPtnr=ds_tndrPtnr";
        // 	var sOutDatasets = "ds_tndr=in_tndr";
        // 	var sCallbackFunc = "fn_trCallBack";

        	var sSvcID = "tndrWrtCntr";
        	var sController = "epro.tndr.service.BTndrService.saveTndrWrtCntr";//	tndrWrtCntr
        	var sInDatasets = "dsTndr=dsTndr";
        	var sOutDatasets = "dsTndr=dsTndr";
        	var sCallbackFunc = "fnTrCallBack";
        	
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets,sCallbackFunc);
        }

        /**
        	@function	fn_trCallBack()
        	@desc   	Transaction Callback함수	
        */
        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	if(strErrCd < 0) return; 
        	
        	switch(strSvcID)
        	{
        		case "saveReTndr" :
        			gfnAlert("재입찰 작성되었습니다.");
        			gfnSetTmprData("TNDR_NO", this.dsTndr.getColumn(0,"TNDR_NO"));
        			gfnSetTmprData("TNDR_ODR", this.dsTndr.getColumn(0,"TNDR_ODR")+1);
        			gfnSetTmprData("COREXP_KIDS", this.dsTndr.getColumn(0,"TNDR_COREXP_KIDS"));
        			alert('??');
        			gfnOpenMenuUrl("BTNDR::BTndrDetail.xfdl");
        			this.parent.close();
        			close();
        		break;
        		case "BTndr_wrtPor" :				
        			if(strErrCd == 1){
        				this.gfn_alert(strErrMsg);
        				this.gfn_setTmprData("PO_NO", this.ds_tndr.getColumn(0,"PO_NO"));
        				this.gfn_setTmprData("COREXP_KIDS", this.ds_tndr.getColumn(0,"PO_COREXP_KIDS"));
        				this.gfn_openMenuUrl("PORB::PPORB100N00.xfdl");
        						
        				this.close();
        			}else{
        				this.gfn_alert(strErrMsg);
        				this.close();
        			}
        			
        		break;
        		case "tndrWrtCntr" :	//계약서작성 콜백
        		   if(strErrCd == 1){
        				this.gfnAlert(strErrMsg);
        				this.gfnSetTmprData("CNTR_NO", this.ds_tndr.getColumn(0,"CNTR_NO"));
        				this.gfnSetTmprData("COREXP_KIDS", this.ds_tndr.getColumn(0,"CNTR_COREXP_KIDS"));
        				//this.gfnOpenMenuUrl("CTRB::PCTRB100N00.xfdl");
        					
        				this.close();
        		   }else{
        				gfnAlert(strErrMsg);
        				this.parent.close();
        				close();
        		   }
        			
        		break;
        		case "bidCancel" :	//입찰취소 
        			if(strErrCd != 0){
        				gfnAlert(strErrMsg);
        				return;
        			}
        			gfnAlert("입찰 취소 되었습니다.");
        			this.parent.close(this.dsTndr.saveXML());
        			close();
        		break;
        		case "tndrReRfx" :	
        			gfnAlert("최종견적 작성되었습니다.");
        			gfnSetTmprData("RFQ_REQ_NO", this.dsTndr.getColumn(0,"RFQ_REQ_NO"));
        			gfnSetTmprData("RFQ_ODR", this.dsTndr.getColumn(0,"RFQ_ODR")+1);
        			gfnSetTmprData("BRANCH_CD", application.gdsUserInfo.getColumn(0,"BRANCH_CD"));
        			gfnSetTmprData("COREXP_KIDS",this.dsTndr.getColumn(0,"RFQ_COREXP_KIDS"));
        			//gfnOpenMenuUrl("RFXB::PRFXB100N00.xfdl");//견적요청서작성화면 
        			this.parent.close();
        		break;
        		case "BTndr_EndPtnrSrch" :	
        			this.ds_tndr.getColumn(0,"CD_TNDR_STTS")
        			if('ET20YOO' == this.ds_tndr.getColumn(0,"CD_TNDR_STTS")||
        				'ET20CXL' == this.ds_tndr.getColumn(0,"CD_TNDR_STTS")||
        				'ET20CLO' == this.ds_tndr.getColumn(0,"CD_TNDR_STTS")||
        				'ET20REE' == this.ds_tndr.getColumn(0,"CD_TNDR_STTS")){
        					this.btn_reRfx.set_visible(false);
        					this.btn_wrtPor.set_visible(false);
        					this.btn_wrtCntr.set_visible(false);
        				if('ET20YOO' != this.ds_tndr.getColumn(0,"CD_TNDR_STTS")){
        					this.btn_reTndr.set_visible(false);
        					this.btn_cnl.set_visible(false);
        				}
        				this.Tab00.tabpage1.div_2.btn_nac.set_visible(false);
        				this.gfn_btnRange(this.btn_cnl);
        				
        				this.Tab00.tabpage2.btn_crtData.set_visible(false);
        			}
        			
        			this.ds_tndr.setColumn(0,"AWRD_AMT",this.ds_tndrPtnr.getColumn(this.ds_tndrPtnr.rowposition,"BID_AMT"))
        			this.ds_tndr.setColumn(0,"FNL_AMT",nexacro.toNumber(this.ds_tndr.getColumn(0,"GOALAMT"))-nexacro.toNumber(this.ds_tndr.getColumn(0,"AWRD_AMT")))
        			
        			
        		break;
        		
        		case "BTndr_nac" :
        			this.gfn_alert("선택된 업체로 변경되었습니다.");
        		break;
        		
        		case "search" :
        			
        		break;
        		
        		break;
        		default:
        		break;	
        	}
        }

        /**
        	@function	div_2_btn_nac_onclick()
        	@desc   	낙찰처리
        */
        this.div_2_btn_nac_onclick = function(obj,e)
        {
        	if(!this.gfn_confirm("선택된 업체로 낙찰업체를 변경하시겠습니까?")) return;
        	
        	
        	this.ds_tndr.setColumn(0,"AWRD_AMT",this.ds_tndrPtnr.getColumn(this.ds_tndrPtnr.rowposition,"BID_AMT"))
        	this.ds_tndr.setColumn(0,"FNL_AMT",nexacro.toNumber(this.ds_tndr.getColumn(0,"GOALAMT"))-nexacro.toNumber(this.ds_tndr.getColumn(0,"AWRD_AMT")))
        	for(var i = 0 ;  i < this.ds_tndrPtnr.rowcount; i++){
        		if("낙찰" == this.ds_tndrPtnr.getColumn(i,"CD_BID_RSLT_NM")){
        			this.ds_tndrPtnr.setColumn(i,"CD_BID_RSLT_NM","탈락(순위)");
        			this.ds_tndrPtnr.setColumn(i,"CD_BID_RSLT","ET25TALO");
        		}
        	}
        	this.ds_tndrPtnr.setColumn(this.ds_tndrPtnr.rowposition,"CD_BID_RSLT_NM","낙찰")
        	this.ds_tndrPtnr.setColumn(this.ds_tndrPtnr.rowposition,"CD_BID_RSLT","ET25AWD")

        	
        	var sSvcID = "BTndr_nac";
        	var sController = "BTndr_nac.do";
        	var sInDatasets = "in_tndr=ds_tndr in_tndrPtnr=ds_tndrPtnr";
        	var sOutDatasets = "";
        	var sCallbackFunc = "fn_trCallBack";
            this.gfn_tran(sSvcID, sController, sInDatasets, sOutDatasets,sCallbackFunc);
        	
        	
        }

        /**
        	@function	btn_cnl_onclick()
        	@desc   	취소처리
        				입찰 취소는 현재 입찰을 취소 처리하고 
        				신규입찰을 신규 차수로 작성하는 로직
        */
        this.btn_cnl_onclick = function(obj,e)
        {
        	if(!gfnConfirm("입찰을 취소처리 하시겠습니까?")) return;
        	
        // 	var sSvcID = "BTndr_cnlTndr";
        // 	var sController = "BTndr_cnlTndr.do"; tndrCnlTndr
        // 	var sInDatasets = "in_tndr=ds_tndr in_tndrItem=ds_tndrPtnrItem";
        // 	var sOutDatasets = "ds_tndr=in_tndr";
        // 	var sCallbackFunc = "fn_trCallBack";
        // 	this.gfn_tran(sSvcID, sController, sInDatasets, sOutDatasets,sCallbackFunc);

        	var sSvcID = "bidCancel";
        	var sController = "epro.tndr.service.BTndrService.tndrCnlTndr";
        	var sInDatasets = "dsTndr=dsTndr dsTndrPtnrItem=dsTndrPtnrItem";
        	var sOutDatasets = "dsTndr=dsTndr";
        	var sCallbackFunc = "fnTrCallBack";
        	
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);

        }

        /**
        	@function	fn_popCallBack()
        	@desc   	팝업 CallBack 함수
        */
        this.fn_popCallBack = function(sPopupId,rtn)
        {
        	if(this.gfn_isNull(rtn)) return;

        	if(rtn.indexOf("<Dataset id=") == 0){
        		//callback을 받기위한 빈 DataSet을 미리 생성해 놓아야한다.
        		this.ds_return.loadXML(rtn);
        		
        		if(sPopupId == "PopupPoDay"){
        			this.ds_tndr.setColumn(0,"PO_DAY",this.ds_return.getColumn(0,"PO_DAY"));
        			this.ds_tndr.setColumn(0,"CD_CNST_TYPE",this.ds_return.getColumn(0,"PO_TYPE"));
        			if(!this.gfn_confirm("발주작성 하시겠습니까?")) return;
        	
        			var sSvcID = "BTndr_wrtPor";
        			var sController = "BTndr_wrtPor.do";
        			var sInDatasets = "in_tndr=ds_tndr  in_tndrPtnr=ds_tndrPtnr";
        			var sOutDatasets = "ds_tndr=ds_tndrPoTarget ";
        			var sCallbackFunc = "fn_trCallBack";
        			this.gfn_tran(sSvcID, sController, sInDatasets, sOutDatasets,sCallbackFunc);
        		}
        	}
        }

        /**
        	@function	grd_list00_oncellclick()
        	@desc   	
        */
        this.grd_list00_oncellclick = function(obj,e)
        {
        	var bindColRow = obj.getCellProperty("Head", e.cell, "text");

        	if("CHECKED" == gfnGrdBindColNm(obj, e.cell)) {
        		if("1" == this.dsTndrPtnr.getColumn(e.row,"CHECKED" )){
        			for(var i = 0 ;  i < this.dsTndrPtnr.rowcount; i++){
        				if(i != e.row ){
        					this.dsTndrPtnr.setColumn(i,"CHECKED","0")
        					this.fv_row = i;
        				}
        			}
        		}else if("0" == this.dsTndrPtnr.getColumn(e.row,"CHECKED" )){
        			for(var i = 0 ;  i < this.dsTndrPtnr.rowcount; i++){
        				if(i != e.row ){
        					this.dsTndrPtnr.setColumn(i,"CHECKED","1")
        					
        				}
        			}
        		}
        	}
        }
         
        /**
        	@function	Tab00_tabpage2_btn_crtData_onclick()
        	@desc   	
        */ 
        this.Tab00_tabpage2_btn_crtData_onclick = function(obj,e)
        {
        	var MarkOrd =["가","나","다","라","마","바","사","아"];
        	var msg1 = "1. 견적업체\n";
        	var msg2 = "\n2. 확정금액\n";
        	for(var i = 0 ; i < this.dsTndrPtnr.rowcount; i ++){
        		//this.ds_tndrPtnr.getColumn(i,"LANKING")+"."
        		msg1 += "  "+ MarkOrd[this.dsTndrPtnr.getColumn(i,"LANKING")-1] +"." 
        			+this.dsTndrPtnr.getColumn(i,"TNDR_PTNR_NM")+" : "
        			+gfnSetComma(this.dsTndrPtnr.getColumn(i,"RFQ_AMT"))+"\n"
        		if("ET25AWD" == this.dsTndrPtnr.getColumn(i,"CD_BID_RSLT")){
        			msg2 += "  "+this.dsTndrPtnr.getColumn(i,"TNDR_PTNR_NM")+" : "
        					+gfnSetComma(this.dsTndrPtnr.getColumn(i,"BID_AMT"))+"\n"
        		}
        	}
        	this.dsTndr.setColumn(0,"CLOSED_RMK",msg1+msg2);
        }

        /**
        	@function	numberWithCommas()
        	@desc   	숫자형식에 콤마적용
        */
        this.numberWithCommas =  function(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        /**
        	@function	chkMjrCstmr()
        	@desc   	낙찰된 업체가 최저가 업체인지 유무를 판별
        */ 
         this.chkMjrCstmr = function(obj,e){
        	 
        	
        	var minBIdAmt = this.ds_tndrPtnr.getMin("BID_AMT");
        	var nRow = this.ds_tndrPtnr.findRow("BID_AMT",minBIdAmt);
        	var pntrId = this.ds_tndr.getColumn(nRow,"PTNR_ID");
        	
        	this.ds_tndrPtnr.filter("CD_BID_RSLT=='ET25AWD'");
        	for(var i=0; i<this.ds_tndrPtnr.rowcount; i++){
        		if(pntrId == this.ds_rfqPtnr.getColumn(i,"PTNR_ID")){
        			this.ds_tndrPtnr.filter("");
        			return true;
        		}
        	}
        	this.ds_tndrPtnr.filter("");
        	return false;
         }

        
        this.grd_list_oncelldblclick = function(obj,e)
        {
        	if(this.gfnGrdBindColId(obj, e.cell)=="TNDR_PTNR_NM")	//협력사명
        	{
        		var sArg = { agv_ptnrId:this.ds_tndrPtnr.getColumn(e.row, "PTNR_ID")};
        		this.gfn_dialog("PopupComCorpRead", "commPop::PPOPC500P04.xfdl", sArg, "fn_popCallBack");
        	} else if(this.gfn_grdBindColName(obj, e.cell)=="PTNR_ID")	//협력사명
        	{
        		var sArg = { agv_ptnrId:this.ds_tndrPtnr.getColumn(e.row, "PTNR_ID")};
        		this.gfn_dialog("PopupComCorpRead", "commPop::PPOPC500P04.xfdl", sArg, "fn_popCallBack");
        	}
        }

        
        this.Tab00_tabpage1_grd_list_oncelldblclick = function(obj,e)
        {
        	if("MTRL_CD" == this.gfn_grdBindColName(obj, obj.getCellPos())) //품목
        	{	
        		var sArg = {
        					mtrl_cd:this.ds_tndrPtnrItem.getColumn(e.row, "MTRL_CD")
        					};
        		this.gfn_dialog("PopupComMtrlView", "commPop::PPOPC700P01.xfdl", sArg, "fn_popCallBack");
        	} else if("MTRL_NM" == this.gfn_grdBindColName(obj, obj.getCellPos())) //품목
        	{	
        		var sArg = {
        					mtrl_cd:this.ds_tndrPtnrItem.getColumn(e.row, "MTRL_CD")
        					};
        		this.gfn_dialog("PopupComMtrlView", "commPop::PPOPC700P01.xfdl", sArg, "fn_popCallBack");
        	} else if(this.gfn_grdBindColName(obj, e.cell)=="TNDR_PTNR_NM")	//협력사명
        	{
        		var sArg = { agv_ptnrId:this.ds_tndrPtnrItem.getColumn(e.row, "PTNR_ID")};
        		this.gfn_dialog("PopupComCorpRead", "commPop::PPOPC500P04.xfdl", sArg, "fn_popCallBack");
        	}
        }

        
        /**
        	@function	fnChgBid()
        	@desc   	낙찰결과 변경
        */ 
        this.fnChgBid = function(obj,e)
        {
        	if(!gfnConfirm("선택된 업체로 낙찰업체를 변경하시겠습니까?")) return;
        	
        	//
        	for(var i=0; i<this.dsTndrPtnr.rowcount; i++){
        		this.dsTndrPtnr.setColumn(i, "USER_ID", application.gdsUserInfo.getColumn(0, "USER_ID"));
        	}
        	//
        	this.dsTndr.setColumn(0,"AWRD_AMT",this.dsTndrPtnr.getColumn(this.dsTndrPtnr.rowposition,"BID_AMT"))
        	this.dsTndr.setColumn(0,"FNL_AMT",nexacro.toNumber(this.dsTndr.getColumn(0,"GOALAMT"))-nexacro.toNumber(this.dsTndr.getColumn(0,"AWRD_AMT")))
        	for(var i = 0 ;  i < this.dsTndrPtnr.rowcount; i++){
        		if("낙찰" == this.dsTndrPtnr.getColumn(i,"CD_BID_RSLT_NM")){
        			this.dsTndrPtnr.setColumn(i,"CD_BID_RSLT_NM","탈락(순위)");
        			this.dsTndrPtnr.setColumn(i,"CD_BID_RSLT","ET25TALO");
        		}
        	}
        	this.dsTndrPtnr.setColumn(this.dsTndrPtnr.rowposition,"CD_BID_RSLT_NM","낙찰");
        	this.dsTndrPtnr.setColumn(this.dsTndrPtnr.rowposition,"CD_BID_RSLT","ET25AWD");
        	
        // 	var sSvcID = "BTndr_nac";
        // 	var sController = "BTndr_nac.do";				//tndrNac
        // 	var sInDatasets = "in_tndr=ds_tndr in_tndrPtnr=ds_tndrPtnr";
        // 	var sOutDatasets = "";
        // 	var sCallbackFunc = "fn_trCallBack";

        	var sSvcID = "update";
        	var sController = "epro.tndr.service.BTndrService.tndrNac";
        	var sInDatasets = "dsTndr=dsTndr dsTndrPtnr=dsTndrPtnr";
        	var sOutDatasets = "";
        	var sCallbackFunc = "fnTrCallBack";
        	
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets,sCallbackFunc);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.pop_tndrEndPop_onload, this);
            this.Tab01.addEventHandler("onchanged", this.div_41_Tab01_onchanged, this);
            this.Tab01.tabp01.div_00.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.Tab01.tabp01.div_00.btnChgBid.addEventHandler("onclick", this.fnChgBid, this);
            this.Tab01.tabp01.grd_list00.addEventHandler("onheadclick", this.grd_list00_oncellclick, this);
            this.Tab01.tabp01.grd_list00.addEventHandler("oncelldblclick", this.grd_list_oncelldblclick, this);
            this.Tab01.tabp01.div_01.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.Tab01.tabp01.grd_list.addEventHandler("oncelldblclick", this.Tab00_tabpage1_grd_list_oncelldblclick, this);
            this.Tab01.tabp02.div_00.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.Tab01.tabp02.div_00.btn_ptnrAdd.addEventHandler("onclick", this.div_5_btn_tndrPtnrAdd_onclick, this);
            this.btnCnl.addEventHandler("onclick", this.btn_cnl_onclick, this);
            this.btnReRfx.addEventHandler("onclick", this.btn_reRfx_onclick, this);
            this.btnWrtCntr.addEventHandler("onclick", this.btn_wrtCntr_onclick, this);
            this.btn_wrtPor.addEventHandler("onclick", this.btn_wrtPor_onclick, this);
            this.btn_reTndr.addEventHandler("onclick", this.btn_reTndr_onclick, this);

        };

        this.loadIncludeScript("BTndrRsltPopUp.xfdl", true);

       
    };
}
)();
