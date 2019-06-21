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
                this.set_name("BAprvDetail");
                this.set_titletext("승인상세(입찰확정)");
                this._setFormPosition(0,0,1220,1067);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAprvInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"APP_DOC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"LOGIN_USER\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAprvLine", this);
            obj._setContents("<ColumnInfo><Column id=\"CHECKED\" size=\"256\" type=\"STRING\"/><Column id=\"APRV_ORDR\" size=\"256\" type=\"STRING\"/><Column id=\"APRVR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"APRVR_NM\" size=\"256\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"APP_DOC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CD_APP_TYPE\" size=\"256\" type=\"STRING\"/><Column id=\"CD_APRV_LN_STTS\" size=\"256\" type=\"STRING\"/><Column id=\"CRTR_ID\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReturn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdAP13", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdAP14", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRfq", this);
            obj._setContents("<ColumnInfo><Column id=\"TTL\" size=\"100\" type=\"STRING\"/><Column id=\"CD_RFQ_STTS\" size=\"40\" type=\"STRING\"/><Column id=\"RFQ_CLOSE_DAY\" size=\"8\" type=\"STRING\"/><Column id=\"RFQ_CLOSE_TIME\" size=\"4\" type=\"STRING\"/><Column id=\"CD_RFQ_AIM\" size=\"40\" type=\"STRING\"/><Column id=\"CD_DOC_CTGR\" size=\"40\" type=\"STRING\"/><Column id=\"CD_RFQ_CRNC\" size=\"40\" type=\"STRING\"/><Column id=\"ALT_RFQ_EXPLN_ACT\" size=\"1\" type=\"STRING\"/><Column id=\"ALT_RFQ_EXPLN_NXT_NTC\" size=\"1\" type=\"STRING\"/><Column id=\"ALT_BDGT_OPEN\" size=\"1\" type=\"STRING\"/><Column id=\"RMARK\" size=\"1000\" type=\"STRING\"/><Column id=\"RFQ_ODR\" size=\"256\" type=\"STRING\"/><Column id=\"USER_ID\" size=\"20\" type=\"STRING\"/><Column id=\"RFQ_REQ_NO\" size=\"256\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"GOALAMT\" size=\"256\" type=\"STRING\"/><Column id=\"CD_RFQ_STTS_NM\" size=\"256\" type=\"STRING\"/><Column id=\"FILESTRING\" size=\"256\" type=\"STRING\"/><Column id=\"CD_BID_UNIT\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_TARG_CORP_OPEN\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_QTY_OPEN\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_RFQ_PRICE_SBMT\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_LOW_FAIL_APLY\" size=\"256\" type=\"STRING\"/><Column id=\"RFQ_LOW_AMT\" size=\"256\" type=\"STRING\"/><Column id=\"GRP_NM\" size=\"256\" type=\"STRING\"/><Column id=\"SRC_GRP_NM\" size=\"256\" type=\"STRING\"/><Column id=\"SRC_GRP_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CFM_AMT\" size=\"256\" type=\"STRING\"/><Column id=\"REQ_DT\" size=\"256\" type=\"STRING\"/><Column id=\"ATTCH_FILE_CNT\" size=\"256\" type=\"STRING\"/><Column id=\"RFQ_END_DT\" size=\"256\" type=\"STRING\"/><Column id=\"APP_DOC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"APP_CMPLT_DT\" size=\"256\" type=\"STRING\"/><Column id=\"APP_REQ_DT\" size=\"256\" type=\"STRING\"/><Column id=\"NTC_APP_DOC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"NTC_APP_CMPLT_DT\" size=\"256\" type=\"STRING\"/><Column id=\"NTC_APP_REQ_DT\" size=\"256\" type=\"STRING\"/><Column id=\"TKEY\" size=\"256\" type=\"STRING\"/><Column id=\"CD_INCOTERMS\" size=\"256\" type=\"STRING\"/><Column id=\"CD_EVAL_TYPE\" size=\"256\" type=\"STRING\"/><Column id=\"RT_Q\" size=\"256\" type=\"STRING\"/><Column id=\"RT_C\" size=\"256\" type=\"STRING\"/><Column id=\"RT_T\" size=\"256\" type=\"STRING\"/><Column id=\"RT_D\" size=\"256\" type=\"STRING\"/><Column id=\"RT_F\" size=\"256\" type=\"STRING\"/><Column id=\"CHRGR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CHRGR_NM\" size=\"256\" type=\"STRING\"/><Column id=\"EMAIL\" size=\"256\" type=\"STRING\"/><Column id=\"TEL\" size=\"256\" type=\"STRING\"/><Column id=\"FAX\" size=\"256\" type=\"STRING\"/><Column id=\"CNCL_RSN\" size=\"256\" type=\"STRING\"/><Column id=\"CLOSED_RMK\" size=\"256\" type=\"STRING\"/><Column id=\"TCO_BGN_YR\" size=\"256\" type=\"STRING\"/><Column id=\"TCO_YR\" size=\"256\" type=\"STRING\"/><Column id=\"CRTR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CRT_DT\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_CHGR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_CHG_DT\" size=\"256\" type=\"STRING\"/><Column id=\"RFQ_CLOSE_TIME_HR\" size=\"256\" type=\"STRING\"/><Column id=\"RFQ_CLOSE_TIME_MIN\" size=\"256\" type=\"STRING\"/><Column id=\"RFQ_PTNR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_ID\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRfqPtnr", this);
            obj._setContents("<ColumnInfo><Column id=\"CHECKED\" size=\"1\" type=\"STRING\"/><Column id=\"RFQ_PTNR_ID\" size=\"20\" type=\"STRING\"/><Column id=\"BIZ_NO\" size=\"20\" type=\"STRING\"/><Column id=\"PTNR_NM\" size=\"50\" type=\"STRING\"/><Column id=\"RPRSTV_NM\" size=\"20\" type=\"STRING\"/><Column id=\"RFQ_EXPLN_DAY\" size=\"8\" type=\"STRING\"/><Column id=\"RFQ_EXPLN_TIME\" size=\"4\" type=\"STRING\"/><Column id=\"RFQ_EXPLN_AREA\" size=\"100\" type=\"STRING\"/><Column id=\"RFQ_REQ_NO\" size=\"20\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"20\" type=\"STRING\"/><Column id=\"RFQ_ODR\" size=\"256\" type=\"INT\"/><Column id=\"PTNR_ID\" size=\"20\" type=\"STRING\"/><Column id=\"USER_ID\" size=\"20\" type=\"STRING\"/><Column id=\"CD_RFQ_SUBM_STTS\" size=\"40\" type=\"STRING\"/><Column id=\"CD_RFQ_CRNC\" size=\"256\" type=\"STRING\"/><Column id=\"CD_PORG_UNIT_STTS\" size=\"256\" type=\"STRING\"/><Column id=\"CD_PORG_UNIT_STTS_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRfqItemList", this);
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"20\" type=\"STRING\"/><Column id=\"PR_ITEM_ID\" size=\"20\" type=\"STRING\"/><Column id=\"MTRL_CD\" size=\"20\" type=\"STRING\"/><Column id=\"MTRL_NM\" size=\"100\" type=\"STRING\"/><Column id=\"QTY\" size=\"256\" type=\"INT\"/><Column id=\"CD_UNIT\" size=\"40\" type=\"STRING\"/><Column id=\"GOALUNT_PRICE\" size=\"256\" type=\"INT\"/><Column id=\"GOALAMT\" size=\"256\" type=\"INT\"/><Column id=\"DLV_REQ_DAY\" size=\"8\" type=\"STRING\"/><Column id=\"SL_NM\" size=\"50\" type=\"STRING\"/><Column id=\"RMARK\" size=\"2000\" type=\"STRING\"/><Column id=\"PR_NO\" size=\"20\" type=\"STRING\"/><Column id=\"RFQ_REQ_ITEM_ID\" size=\"20\" type=\"STRING\"/><Column id=\"RFQ_REQ_NO\" size=\"256\" type=\"STRING\"/><Column id=\"RFQ_ODR\" size=\"256\" type=\"STRING\"/><Column id=\"CD_DOC_CTGR\" size=\"256\" type=\"STRING\"/><Column id=\"MTRL_GRP_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CD_UNIT_NM\" size=\"256\" type=\"STRING\"/><Column id=\"USER_NM\" size=\"256\" type=\"STRING\"/><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"ATTCH_FILE_CNT\" size=\"256\" type=\"STRING\"/><Column id=\"SRC_GRP_NM\" size=\"256\" type=\"STRING\"/><Column id=\"SRC_GRP_ID\" size=\"256\" type=\"STRING\"/><Column id=\"STR_CD\" size=\"256\" type=\"STRING\"/><Column id=\"CHECKED\" size=\"256\" type=\"STRING\"/><Column id=\"CD_RFQ_SUBM_STTS\" size=\"256\" type=\"STRING\"/><Column id=\"ROWNUM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
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

            obj = new Dataset("dsCdCM22", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdET14", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRfqPtnrItemExp", this);
            obj._setContents("<ColumnInfo><Column id=\"RFQ_PTNR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_RFQ_ITEM_ID\" size=\"256\" type=\"STRING\"/><Column id=\"SN\" size=\"256\" type=\"STRING\"/><Column id=\"EXP_ITEM\" size=\"256\" type=\"STRING\"/><Column id=\"EXP_AMT\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRfqItemTco", this);
            obj._setContents("<ColumnInfo><Column id=\"RFQ_PTNR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"RFQ_REQ_ITEM_ID\" size=\"256\" type=\"STRING\"/><Column id=\"MTRL_CD\" size=\"256\" type=\"STRING\"/><Column id=\"MTRL_NM\" size=\"256\" type=\"STRING\"/><Column id=\"TCO_YR\" size=\"256\" type=\"STRING\"/><Column id=\"QTY\" size=\"256\" type=\"STRING\"/><Column id=\"CD_UNIT\" size=\"256\" type=\"STRING\"/><Column id=\"RFQ_PRICE\" size=\"256\" type=\"STRING\"/><Column id=\"RFQ_AMT\" size=\"256\" type=\"STRING\"/><Column id=\"MTRL_RFQ_AMT\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRfqReqFile", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompTitle00", "absolute", "0", "0", null, "24", "0", null, this);
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            obj.set_positionstep("0");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "0", "173", "24", null, null, this.divViewCompTitle00);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("21");
            obj.set_text("기본정보");
            this.divViewCompTitle00.addChild(obj.name, obj);
            obj = new Static("staWarning", "absolute", "177", "0", "450", "24", null, null, this.divViewCompTitle00);
            obj.style.set_color("red");
            obj.style.set_font("bold 9 Arial Black");
            obj.set_taborder("22");
            obj.set_text("※ 본 입찰은 수의/지명 경쟁입찰입니다. 결재시 유의 바랍니다.");
            obj.set_visible("false");
            this.divViewCompTitle00.addChild(obj.name, obj);

            obj = new Div("divViewCompBody00", "absolute", "0", "29", null, "118", "15", null, this);
            obj.set_cssclass("div_WF_DetailBg");
            obj.getSetter("objNm").set("DIV-평가서 상세");
            obj.set_positionstep("0");
            obj.set_taborder("101");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "0", null, "33", "0", null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("16");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine03", "absolute", "0", "32", null, "80", "0", null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("19");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staTtl", "absolute", "0", "0", "171", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("승인문서명");
            obj.set_positionstep("1");
            obj.set_taborder("2");
            obj.set_text("승인문서명");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staRmark", "absolute", "0", "32", "171", "80", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("승인의견");
            obj.set_positionstep("1");
            obj.set_taborder("4");
            obj.set_text("승인의견");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new TextArea("txaRmark", "absolute", "176", "37", null, "70", "10", null, this.divViewCompBody00);
            obj.set_lengthunit("utf8");
            obj.set_maxlength("500");
            obj.getSetter("objNm").set("승인의견");
            obj.set_positionstep("1");
            obj.set_taborder("5");
            obj.set_wordwrap("char");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtTtl", "absolute", "176", "4", null, "24", "10", null, this.divViewCompBody00);
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("승인문서명");
            obj.set_positionstep("1");
            obj.set_taborder("6");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Div("divViewCompBody02", "absolute", "0", "408", null, "205", "15", null, this);
            obj.getSetter("objNm").set("DIV-대상업체 세부정보");
            obj.set_taborder("107");
            this.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "0", null, null, "0", "0", this.divViewCompBody02);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_autosizingtype("row");
            obj.set_binddataset("dsAprvLine");
            obj.set_extendsizetype("row");
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
            obj.set_taborder("4");
            obj._setContents("<Formats><Format id=\"MMODE\"><Columns><Column band=\"left\" size=\"40\"/><Column size=\"53\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"267\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row band=\"head\" size=\"33\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell style=\"align:center;\"/><Cell col=\"1\" expr=\"\" text=\"순번\"/><Cell col=\"2\" expr=\"\" text=\"승인자명\"/><Cell col=\"3\" expr=\"\" text=\"직책\"/><Cell col=\"4\" expr=\"\" text=\"부서\"/><Cell col=\"5\" expr=\"\" text=\"전화번호\"/><Cell col=\"6\" expr=\"\" text=\"승인유형\"/><Cell col=\"7\" expr=\"\" text=\"승인의견\"/><Cell col=\"8\" expr=\"\" text=\"승인상태\"/><Cell col=\"9\" expr=\"\" text=\"승인일시\"/></Band><Band id=\"body\" style=\"cellpadding: ;\"><Cell displaytype=\"expr:UP_YN == 'N'  ? 'none' : 'checkbox'\" editdisplay=\"display\" edittype=\"expr:UP_YN == 'N'  ? 'none' : 'checkbox'\" expandshow=\"hide\" style=\"background2: ;\" text=\"bind:CHECKED\"/><Cell col=\"1\" style=\"align: ;\" text=\"bind:APRV_ORDR\"/><Cell col=\"2\" edittype=\"expr:UP_YN == 'N'  ? 'none' : 'text'\" expandimage=\"URL('img::grd_WF_Expand.png')\" expandshow=\"expr:UP_YN == 'N'  ? 'hide' : 'show'\" expandsize=\"28\" style=\"align:left;\" text=\"bind:APRVR_NM\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:PSTN\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:DEPT_NM\"/><Cell col=\"5\" text=\"bind:TEL\"/><Cell col=\"6\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" combodataset=\"dsCdAP14\" displaytype=\"combo\" style=\"align: ;\" text=\"bind:CD_APP_TYPE\"/><Cell autosizerow=\"limitmin\" calendardisplaynulltype=\"none\" col=\"7\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:OPNN\" wordwrap=\"char\"/><Cell col=\"8\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" combodataset=\"dsCdAP13\" displaytype=\"combo\" text=\"bind:CD_APRV_LN_STTS\"/><Cell calendardisplaynulltype=\"none\" col=\"9\" displaytype=\"date\" mask=\"yyyy-MM-dd HH:mm:ss\" style=\"align: ;\" text=\"bind:APRV_DT\"/></Band></Format><Format id=\"VMODE\"><Columns><Column size=\"53\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"267\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row band=\"head\" size=\"33\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"순번\"/><Cell col=\"1\" expr=\"\" text=\"승인자명\"/><Cell col=\"2\" expr=\"\" text=\"직책\"/><Cell col=\"3\" expr=\"\" text=\"부서\"/><Cell col=\"4\" expr=\"\" text=\"전화번호\"/><Cell col=\"5\" expr=\"\" text=\"승인유형\"/><Cell col=\"6\" expr=\"\" text=\"승인의견\"/><Cell col=\"7\" expr=\"\" text=\"승인상태\"/><Cell col=\"8\" expr=\"\" text=\"승인일시\"/></Band><Band id=\"body\"><Cell style=\"align: ;\" text=\"bind:APRV_ORDR\"/><Cell col=\"1\" edittype=\"none\" style=\"align:left;\" text=\"bind:APRVR_NM\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:PSTN\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:DEPT_NM\"/><Cell col=\"4\" text=\"bind:TEL\"/><Cell col=\"5\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" combodataset=\"dsCdAP14\" displaytype=\"combo\" style=\"align: ;\" text=\"bind:CD_APP_TYPE\"/><Cell autosizerow=\"limitmin\" calendardisplaynulltype=\"none\" col=\"6\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:OPNN\" wordwrap=\"char\"/><Cell col=\"7\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" combodataset=\"dsCdAP13\" displaytype=\"combo\" text=\"bind:CD_APRV_LN_STTS\"/><Cell calendardisplaynulltype=\"none\" col=\"8\" displaytype=\"date\" mask=\"yyyy-MM-dd HH:mm:ss\" style=\"align: ;\" text=\"bind:APRV_DT\"/></Band></Format></Formats>");
            this.divViewCompBody02.addChild(obj.name, obj);

            obj = new Div("divViewCompTitle03", "absolute", "0", "633", null, "24", "0", null, this);
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            obj.set_taborder("111");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "0", "255", "24", null, null, this.divViewCompTitle03);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("0");
            obj.set_text("승인문서");
            this.divViewCompTitle03.addChild(obj.name, obj);

            obj = new Div("divViewCompBody03", "absolute", "0", "662", null, "1114", "15", null, this);
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.set_taborder("112");
            this.addChild(obj.name, obj);
            obj = new Tab("tabRfq", "absolute", "0%", "1", null, "1104", "0", null, this.divViewCompBody03);
            obj.getSetter("objNm").set("입찰 분석상세 TAB");
            obj.set_scrollbars("autoboth");
            obj.set_tabindex("0");
            obj.set_taborder("0");
            this.divViewCompBody03.addChild(obj.name, obj);
            obj = new Tabpage("tabRfqInfo", this.divViewCompBody03.tabRfq);
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("입찰결과");
            obj.set_scrollbars("none");
            obj.style.set_background("white");
            obj.set_text("입찰결과");
            this.divViewCompBody03.tabRfq.addChild(obj.name, obj);
            obj = new Div("divViewCompBody00", "absolute", "0", "34", null, "98", "0", null, this.divViewCompBody03.tabRfq.tabRfqInfo);
            obj.getSetter("objNm").set("DIV-헤더 상세");
            obj.set_scrollbars("none");
            obj.style.set_border("0 solid #c6c9cdff");
            obj.set_taborder("50");
            this.divViewCompBody03.tabRfq.tabRfqInfo.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "0", null, "33", "0", null, this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("91");
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staTtl", "absolute", "0", "0", "117", "33", null, null, this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("입찰요청명");
            obj.set_taborder("92");
            obj.set_text("입찰요청명");
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtTtl", "absolute", "122", "4", "556", "24", null, null, this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00);
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("입찰요청명");
            obj.set_readonly("true");
            obj.set_taborder("93");
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtRfqOdr", "absolute", "683", "4", "41", "24", null, null, this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00);
            obj.getSetter("objNm").set("회차");
            obj.set_readonly("true");
            obj.style.set_align("right middle");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.style.setStyleValue("font", "disabled", "bold 9 Dotum");
            obj.set_taborder("94");
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staRfqOdr", "absolute", "730", "4", "34", "24", null, null, this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00);
            obj.getSetter("objNm").set("회차");
            obj.set_taborder("95");
            obj.set_text("회차");
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "32", null, "33", "0", null, this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("98");
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.addChild(obj.name, obj);
            obj = new Combo("cboRfqAim", "absolute", "647", "37", "156", "24", null, null, this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00);
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.addChild(obj.name, obj);
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_innerdataset("@dsCdET27");
            obj.getSetter("objNm").set("입찰목적");
            obj.set_readonly("true");
            obj.set_taborder("99");
            obj = new Static("staRfqAim", "absolute", "524", "32", "117", "33", null, null, this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("입찰목적");
            obj.set_taborder("100");
            obj.set_text("입찰목적");
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.addChild(obj.name, obj);
            obj = new Combo("cboCdRfqCrnc", "absolute", "932", "37", "175", "24", null, null, this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00);
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.addChild(obj.name, obj);
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_innerdataset("@dsCdCM15");
            obj.getSetter("objNm").set("입찰통화");
            obj.set_readonly("true");
            obj.set_taborder("101");
            obj = new Static("st_RfqStates00", "absolute", "809", "32", "117", "33", null, null, this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("입찰통화");
            obj.set_taborder("102");
            obj.set_text("입찰통화");
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "64", null, "33", "0", null, this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("103");
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staGoalAmt", "absolute", "809", "64", "117", "33", null, null, this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("구매예상가");
            obj.set_taborder("104");
            obj.set_text("구매예상가");
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.addChild(obj.name, obj);
            obj = new MaskEdit("edtGoalAmt", "absolute", "932", "68", "264", "24", null, null, this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00);
            obj.set_autoselect("true");
            obj.set_mask("#,##0");
            obj.getSetter("objNm").set("구매예상가");
            obj.set_readonly("true");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 10 Dotum");
            obj.set_taborder("105");
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staIncoterms", "absolute", "0", "32", "117", "33", null, null, this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("입찰통화");
            obj.set_taborder("106");
            obj.set_text("Incoterms");
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.addChild(obj.name, obj);
            obj = new Combo("cboIncoterms", "absolute", "122", "37", "188", "24", null, null, this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00);
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.addChild(obj.name, obj);
            var cboIncoterms_innerdataset = new Dataset("cboIncoterms_innerdataset", this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.cboIncoterms);
            cboIncoterms_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">전체공개</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">제한공개</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미공개</Col></Row></Rows>");
            obj.set_innerdataset(cboIncoterms_innerdataset);
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_innerdataset("dsCdCM22");
            obj.getSetter("objNm").set("Incoterms");
            obj.set_taborder("107");
            obj = new Static("staEvalType", "absolute", "0", "64", "117", "33", null, null, this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("평가구분");
            obj.set_taborder("108");
            obj.set_text("평가구분");
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.addChild(obj.name, obj);
            obj = new Radio("cboEvalType", "absolute", "122", "69", "334", "24", null, null, this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00);
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.addChild(obj.name, obj);
            var cboEvalType_innerdataset = new Dataset("cboEvalType_innerdataset", this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.cboEvalType);
            cboEvalType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">가격평가</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">종합평가</Col></Row></Rows>");
            obj.set_innerdataset(cboEvalType_innerdataset);
            obj.set_codecolumn("CD_ID");
            obj.set_columncount("3");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_direction("vertical");
            obj.set_innerdataset("dsCdET14");
            obj.getSetter("objNm").set("평가구분");
            obj.set_rowcount("1");
            obj.set_taborder("109");
            obj = new Static("staTcoBgnYr", "absolute", "524", "64", "117", "33", null, null, this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("시작년도");
            obj.set_taborder("110");
            obj.set_text("시작년도");
            obj.set_usedecorate("true");
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtTcoBgnYr", "absolute", "647", "68", "79", "24", null, null, this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00);
            obj.getSetter("objNm").set("하한유찰가");
            obj.style.set_align("right middle");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.style.setStyleValue("font", "disabled", "bold 9 Dotum");
            obj.set_taborder("111");
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtTcoYr", "absolute", "732", "68", "46", "24", null, null, this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00);
            obj.getSetter("objNm").set("하한유찰가");
            obj.style.set_align("right middle");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.style.setStyleValue("font", "disabled", "bold 9 Dotum");
            obj.set_taborder("112");
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staRfqOdr00", "absolute", "783", "68", "21", "24", null, null, this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00);
            obj.getSetter("objNm").set("시작년도 횟수");
            obj.set_taborder("113");
            obj.set_text("회");
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtIncoterms2", "absolute", "316", "37", "202", "24", null, null, this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00);
            obj.getSetter("objNm").set("incoterms2");
            obj.style.set_align("left middle");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.style.setStyleValue("font", "disabled", "bold 9 Dotum");
            obj.set_taborder("114");
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.addChild(obj.name, obj);
            obj = new Combo("cboCdBidUnit", "absolute", "1113", "37", "83", "24", null, null, this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00);
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.addChild(obj.name, obj);
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_innerdataset("dsCdET23");
            obj.getSetter("objNm").set("응찰단위");
            obj.set_readonly("true");
            obj.set_taborder("115");
            obj = new Div("divViewCompBody02", "absolute", "0%", "181", null, "272", "0", null, this.divViewCompBody03.tabRfq.tabRfqInfo);
            obj.getSetter("objNm").set("DIV-대상업체 상세");
            obj.set_scrollbars("none");
            obj.set_taborder("51");
            this.divViewCompBody03.tabRfq.tabRfqInfo.addChild(obj.name, obj);
            obj = new Grid("grdRfqPtnr", "absolute", "0", "0", null, null, "0", "0", this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody02);
            obj.set_binddataset("dsRfqPtnr");
            obj.getSetter("f_colSize").set("N");
            obj.getSetter("f_excel").set("Y");
            obj.getSetter("f_filter").set("N");
            obj.getSetter("f_find").set("N");
            obj.getSetter("f_fix").set("Y");
            obj.getSetter("f_height").set("Y");
            obj.getSetter("f_hide").set("N");
            obj.getSetter("f_init").set("Y");
            obj.getSetter("f_mode").set("N");
            obj.getSetter("f_save").set("N");
            obj.getSetter("f_sort").set("Y");
            obj.getSetter("objNm").set("협력사정보");
            obj.set_taborder("2");
            obj._setContents("<Formats><Format id=\"Amode\"><Columns><Column band=\"left\" size=\"75\"/><Column band=\"left\" size=\"400\"/><Column size=\"135\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"85\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row band=\"head\" size=\"24\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" rowspan=\"2\" text=\"순위\"/><Cell col=\"1\" expr=\"\" rowspan=\"2\" text=\"협력사명\"/><Cell col=\"2\" expr=\"\" rowspan=\"2\" text=\"응찰상태\"/><Cell col=\"3\" expr=\"\" rowspan=\"2\" text=\"응찰담당자\"/><Cell col=\"4\" expr=\"\" rowspan=\"2\" text=\"응찰일시\"/><Cell col=\"5\" expr=\"\" rowspan=\"2\" text=\"입찰부대조건\"/></Band><Band id=\"body\"><Cell text=\"bind:RNK\"/><Cell col=\"1\" cssclass=\"cell_link\" style=\"align:left;\" text=\"bind:PTNR_NM\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:CD_PTNR_SUBM_STTS_NM\"/><Cell col=\"3\" text=\"bind:SBMTR_NM\"/><Cell calendardisplaynulltype=\"none\" col=\"4\" displaytype=\"date\" mask=\"yyyy-MM-dd HH:mm\" text=\"bind:SBMT_DT\"/><Cell col=\"5\" displaytype=\"expr:EXT_CNDTN!=&quot;&quot;?'button':'none'\" edittype=\"expr:EXT_CNDTN!=&quot;&quot;?'button':'none'\" style=\"controlbackground:URL('img::gridBtn__read.png') center middle;controlborder:1 none #808080ff ;\" text=\" \"/></Band></Format><Format id=\"Bmode\"><Columns><Column band=\"left\" size=\"62\"/><Column band=\"left\" size=\"217\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"85\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row band=\"head\" size=\"24\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" rowspan=\"2\" text=\"순위\"/><Cell col=\"1\" expr=\"\" rowspan=\"2\" text=\"협력사명\"/><Cell col=\"2\" expr=\"\" rowspan=\"2\" text=\"응찰상태\"/><Cell col=\"3\" expr=\"\" rowspan=\"2\" text=\"응찰담당자\"/><Cell col=\"4\" expr=\"\" rowspan=\"2\" text=\"응찰일시\"/><Cell col=\"5\" expr=\"\" rowspan=\"2\" text=\"우선대상여부\"/><Cell col=\"6\" expr=\"\" rowspan=\"2\" text=\"응찰금액\"/><Cell col=\"7\" expr=\"\" rowspan=\"2\" text=\"낙찰금액\"/><Cell col=\"8\" expr=\"\" rowspan=\"2\" text=\"평가점수\"/><Cell col=\"9\" expr=\"\" text=\"품질\"/><Cell col=\"10\" expr=\"\" text=\"가격\"/><Cell col=\"11\" expr=\"\"/><Cell col=\"12\" expr=\"\" text=\"기술력\"/><Cell col=\"13\" expr=\"\" text=\"납기\"/><Cell col=\"14\" expr=\"\" text=\"경영/재무\"/><Cell col=\"15\" expr=\"\" rowspan=\"2\" text=\"입찰부대조건\"/><Cell col=\"9\" expr=\"\" row=\"1\"/><Cell col=\"10\" expr=\"\" row=\"1\"/><Cell col=\"11\" expr=\"\" row=\"1\"/><Cell col=\"12\" expr=\"\" row=\"1\"/><Cell col=\"13\" expr=\"\" row=\"1\"/><Cell col=\"14\" expr=\"\" row=\"1\"/></Band><Band id=\"body\"><Cell text=\"bind:RNK\"/><Cell col=\"1\" cssclass=\"cell_link\" style=\"align:left;\" text=\"bind:PTNR_NM\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:CD_PTNR_SUBM_STTS_NM\"/><Cell col=\"3\" text=\"bind:SBMTR_NM\"/><Cell calendardisplaynulltype=\"none\" col=\"4\" displaytype=\"date\" mask=\"yyyy-MM-dd HH:mm\" text=\"bind:SBMT_DT\"/><Cell col=\"5\" style=\"color:EXPR(ALT_PWIN_PTNR==&quot;Y&quot;?'orangered':'');color2:EXPR(ALT_PWIN_PTNR==&quot;Y&quot;?'orangered':'');font:EXPR(ALT_PWIN_PTNR==&quot;Y&quot;?'bold 10 Dotum':'');\" text=\"bind:CD_ALT_PWIN_PTNR_NM\"/><Cell col=\"6\" displaytype=\"number\" mask=\"9,999.99\" style=\"align:right;font:bold 10 Dotum;\" text=\"bind:RFQ_AMT\"/><Cell calendardisplay=\"display\" calendardisplaynulltype=\"default\" col=\"7\" displaytype=\"expr:CFM_AMT&gt;0?'number':'none'\" editacceptsenter=\"true\" editlimit=\"0\" editlimitbymask=\"integer\" mask=\"9,999.99\" style=\"align:right;color:EXPR(ALT_PWIN_PTNR==&quot;Y&quot;?'orangered':'');color2:EXPR(ALT_PWIN_PTNR==&quot;Y&quot;?'orangered':'');font:EXPR(ALT_PWIN_PTNR==&quot;Y&quot;?'bold 10 Dotum':'');\" text=\"bind:CFM_AMT\"/><Cell col=\"8\" text=\"bind:EVAL_SCORE\"/><Cell col=\"9\" displaytype=\"expr:EVAL_Q&gt;0?'noraml':'none'\" text=\"bind:EVAL_Q\"/><Cell col=\"10\" text=\"bind:EVAL_P\"/><Cell col=\"11\" displaytype=\"expr:EVAL_C&gt;0?'normal':'none'\" text=\"bind:EVAL_C\"/><Cell col=\"12\" displaytype=\"expr:EVAL_T&gt;0?'noraml':'none'\" text=\"bind:EVAL_T\"/><Cell col=\"13\" displaytype=\"expr:EVAL_D&gt;0?'noraml':'none'\" text=\"bind:EVAL_D\"/><Cell col=\"14\" displaytype=\"expr:EVAL_F&gt;0?'noraml':'none'\" text=\"bind:EVAL_F\"/><Cell col=\"15\" displaytype=\"expr:EXT_CNDTN!=&quot;&quot;?'button':'none'\" edittype=\"expr:EXT_CNDTN!=&quot;&quot;?'button':'none'\" style=\"controlbackground:URL('img::gridBtn__read.png') center middle;controlborder:1 none #808080ff ;\" text=\" \"/></Band></Format><Format id=\"Cmode\"><Columns><Column band=\"left\" size=\"62\"/><Column band=\"left\" size=\"217\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"85\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row band=\"head\" size=\"24\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" rowspan=\"2\" text=\"순위\"/><Cell col=\"1\" expr=\"\" rowspan=\"2\" text=\"협력사명\"/><Cell col=\"2\" expr=\"\" rowspan=\"2\" text=\"응찰상태\"/><Cell col=\"3\" expr=\"\" rowspan=\"2\" text=\"응찰담당자\"/><Cell col=\"4\" expr=\"\" rowspan=\"2\" text=\"응찰일시\"/><Cell col=\"5\" expr=\"\" rowspan=\"2\" text=\"우선대상여부\"/><Cell col=\"6\" expr=\"\" rowspan=\"2\" text=\"응찰금액\"/><Cell col=\"7\" expr=\"\" rowspan=\"2\" text=\"부대비용\"/><Cell col=\"8\" expr=\"\" rowspan=\"2\" text=\"총응찰금액&#13;&#10;(부대비포함)\"/><Cell col=\"9\" expr=\"\" rowspan=\"2\" text=\"총낙찰금액&#13;&#10;(부대비포함)\"/><Cell col=\"10\" expr=\"\" rowspan=\"2\" text=\"평가점수\"/><Cell col=\"11\" expr=\"\" text=\"품질\"/><Cell col=\"12\" expr=\"\" text=\"가격\"/><Cell col=\"13\" expr=\"\"/><Cell col=\"14\" expr=\"\" text=\"기술력\"/><Cell col=\"15\" expr=\"\" text=\"납기\"/><Cell col=\"16\" expr=\"\" text=\"경영/재무\"/><Cell col=\"17\" expr=\"\" rowspan=\"2\" text=\"입찰부대조건\"/><Cell col=\"11\" expr=\"\" row=\"1\"/><Cell col=\"12\" expr=\"\" row=\"1\"/><Cell col=\"13\" expr=\"\" row=\"1\"/><Cell col=\"14\" expr=\"\" row=\"1\"/><Cell col=\"15\" expr=\"\" row=\"1\"/><Cell col=\"16\" expr=\"\" row=\"1\"/></Band><Band id=\"body\"><Cell text=\"bind:RNK\"/><Cell col=\"1\" cssclass=\"cell_link\" style=\"align:left;\" text=\"bind:PTNR_NM\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:CD_PTNR_SUBM_STTS_NM\"/><Cell col=\"3\" text=\"bind:SBMTR_NM\"/><Cell calendardisplaynulltype=\"none\" col=\"4\" displaytype=\"date\" mask=\"yyyy-MM-dd HH:mm\" text=\"bind:SBMT_DT\"/><Cell col=\"5\" style=\"color:EXPR(ALT_PWIN_PTNR==&quot;Y&quot;?'orangered':'');color2:EXPR(ALT_PWIN_PTNR==&quot;Y&quot;?'orangered':'');font:EXPR(ALT_PWIN_PTNR==&quot;Y&quot;?'bold 10 Dotum':'');\" text=\"bind:CD_ALT_PWIN_PTNR_NM\"/><Cell col=\"6\" displaytype=\"number\" mask=\"9,999.99\" style=\"align:right;\" text=\"bind:RFQ_AMT\"/><Cell col=\"7\" displaytype=\"number\" mask=\"9,999.99\" style=\"align:right;\" text=\"bind:EXP_AMT\"/><Cell col=\"8\" displaytype=\"number\" mask=\"9,999.99\" style=\"align:right;font:bold 10 Dotum;\" text=\"bind:RFQ_SUM\"/><Cell calendardisplay=\"display\" calendardisplaynulltype=\"default\" col=\"9\" displaytype=\"expr:CFM_AMT&gt;0?'number':'none'\" editacceptsenter=\"true\" editlimit=\"0\" editlimitbymask=\"integer\" mask=\"9,999.99\" style=\"align:right;color:EXPR(ALT_PWIN_PTNR==&quot;Y&quot;?'orangered':'');color2:EXPR(ALT_PWIN_PTNR==&quot;Y&quot;?'orangered':'');font:EXPR(ALT_PWIN_PTNR==&quot;Y&quot;?'bold 10 Dotum':'');\" text=\"bind:CFM_AMT\"/><Cell col=\"10\" text=\"bind:EVAL_SCORE\"/><Cell col=\"11\" displaytype=\"expr:EVAL_Q&gt;0?'normal':'none'\" text=\"bind:EVAL_Q\"/><Cell col=\"12\" text=\"bind:EVAL_P\"/><Cell col=\"13\" displaytype=\"expr:EVAL_C&gt;0?'normal':'none'\" text=\"bind:EVAL_C\"/><Cell col=\"14\" displaytype=\"expr:EVAL_T&gt;0?'normal':'none'\" text=\"bind:EVAL_T\"/><Cell col=\"15\" displaytype=\"expr:EVAL_D&gt;0?'normal':'none'\" text=\"bind:EVAL_D\"/><Cell col=\"16\" displaytype=\"expr:EVAL_F&gt;0?'normal':'none'\" text=\"bind:EVAL_F\"/><Cell col=\"17\" displaytype=\"expr:dataset.getColumn(&quot;EXT_CNDTN&quot;)!=&quot;&quot;?'button':'none'\" edittype=\"expr:dataset.getColumn(&quot;EXT_CNDTN&quot;)!=&quot;&quot;?'button':'none'\" style=\"controlbackground:URL('img::gridBtn__read.png') center middle;controlborder:1 none #808080ff ;\" text=\" \"/></Band></Format></Formats>");
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody02.addChild(obj.name, obj);
            obj = new Div("divViewCompBody01", "absolute", "0%", "502", null, "294", "0", null, this.divViewCompBody03.tabRfq.tabRfqInfo);
            obj.getSetter("objNm").set("DIV-품목 상세");
            obj.set_taborder("53");
            this.divViewCompBody03.tabRfq.tabRfqInfo.addChild(obj.name, obj);
            obj = new Grid("grdRfqItem", "absolute", "0", "0", null, null, "0", "0", this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody01);
            obj.set_binddataset("dsRfqItemList");
            obj.getSetter("f_colSize").set("N");
            obj.getSetter("f_excel").set("Y");
            obj.getSetter("f_filter").set("N");
            obj.getSetter("f_find").set("N");
            obj.getSetter("f_fix").set("Y");
            obj.getSetter("f_height").set("Y");
            obj.getSetter("f_hide").set("N");
            obj.getSetter("f_init").set("Y");
            obj.getSetter("f_mode").set("N");
            obj.getSetter("f_save").set("N");
            obj.getSetter("f_sort").set("Y");
            obj.getSetter("objNm").set("품목정보");
            obj.set_taborder("2");
            obj.getSetter("titletext").set("입찰분석상세( 부대,TCo )");
            obj._setContents("<Formats><Format id=\"Amode\"><Columns><Column band=\"left\" size=\"120\"/><Column band=\"left\" size=\"350\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"300\"/><Column size=\"81\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"품목코드\"/><Cell col=\"1\" expr=\"\" text=\"품목명\"/><Cell col=\"2\" expr=\"\" text=\"요청수량\"/><Cell col=\"3\" expr=\"\" text=\"단위\"/><Cell col=\"4\" expr=\"\" text=\"업체명\"/><Cell col=\"5\" expr=\"\" text=\"품목특이사항\"/></Band><Band id=\"body\"><Cell cssclass=\"cell_link\" style=\"align:center;\" suppress=\"1\" suppressalign=\"first\" text=\"bind:MTRL_CD\"/><Cell col=\"1\" style=\"align:left;\" suppress=\"1\" suppressalign=\"first\" text=\"bind:MTRL_NM\"/><Cell col=\"2\" style=\"align:right;\" suppress=\"3\" suppressalign=\"first\" text=\"bind:QTY\"/><Cell col=\"3\" style=\"align:left;\" suppress=\"3\" suppressalign=\"first\" text=\"bind:CD_UNIT_NM\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:PTNR_NM\"/><Cell col=\"5\" displaytype=\"expr:RMARK==&quot;&quot;?'none':'button'\" edittype=\"expr:RMARK==&quot;&quot;?'none':'button'\" style=\"controlbackground:URL('img::gridBtn__read.png') center middle;controlborder:1 none #808080ff ;\" text=\" \"/></Band></Format><Format id=\"Bmode\"><Columns><Column band=\"left\" size=\"120\"/><Column band=\"left\" size=\"250\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"158\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"81\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"품목코드\"/><Cell col=\"1\" expr=\"\" text=\"품목명\"/><Cell col=\"2\" expr=\"\" text=\"요청수량\"/><Cell col=\"3\" expr=\"\" text=\"단위\"/><Cell col=\"4\" expr=\"\" text=\"업체명\"/><Cell col=\"5\" expr=\"\" text=\"응찰단가\"/><Cell col=\"6\" expr=\"\" text=\"응찰금액\"/><Cell col=\"7\" expr=\"\" text=\"낙찰수량\"/><Cell col=\"8\" expr=\"\" text=\"총낙찰금액\"/><Cell col=\"9\" expr=\"\" text=\"품목특이사항\"/></Band><Band id=\"body\"><Cell cssclass=\"cell_link\" style=\"align:center;\" suppress=\"1\" suppressalign=\"first\" text=\"bind:MTRL_CD\"/><Cell col=\"1\" style=\"align:left;\" suppress=\"1\" suppressalign=\"first\" text=\"bind:MTRL_NM\"/><Cell col=\"2\" style=\"align:right;\" suppress=\"3\" suppressalign=\"first\" text=\"bind:QTY\"/><Cell col=\"3\" style=\"align:left;\" suppress=\"3\" suppressalign=\"first\" text=\"bind:CD_UNIT_NM\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:PTNR_NM\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"none\" mask=\"expr:CD_BID_UNIT ==&quot;ET23M1&quot;?'!#,##0.0':CD_BID_UNIT ==&quot;ET23M2&quot;?'!#,##0.00':CD_BID_UNIT ==&quot;ET23M3&quot;?'!#,##0.000':CD_BID_UNIT ==&quot;ET23M4&quot;?'!#,##0.0000':'#,##0'\" style=\"align:right;font:bold 10 Dotum;\" text=\"bind:RFQ_PRICE\"/><Cell col=\"6\" displaytype=\"number\" expandshow=\"hide\" mask=\"9,999.##\" style=\"align:right;font:bold 10 Dotum;\" text=\"bind:RFQ_AMT\"/><Cell col=\"7\" displaytype=\"expr:AWRD_QTY&gt;0?'number':'none'\" style=\"align:right;color:EXPR(AWRD_QTY&gt;0?'orangered':'');color2:EXPR(AWRD_QTY&gt;0?'orangered':'');font:EXPR(AWRD_QTY&gt;0?'bold 10 Dotum':'');\" text=\"bind:AWRD_QTY\"/><Cell col=\"8\" displaytype=\"expr:AWRD_QTY&gt;0?'number':'none'\" style=\"align:right;color:EXPR(AWRD_QTY&gt;0?'orangered':'');color2:EXPR(AWRD_QTY&gt;0?'orangered':'');font:EXPR(AWRD_QTY&gt;0?'bold 10 Dotum':'');\" text=\"bind:AWRD_AMT\"/><Cell col=\"9\" displaytype=\"expr:RMARK==&quot;&quot;?'none':'button'\" edittype=\"expr:RMARK==&quot;&quot;?'none':'button'\" style=\"controlbackground:URL('img::gridBtn__read.png') center middle;controlborder:1 none #808080ff ;\" text=\" \"/></Band></Format><Format id=\"Cmode\"><Columns><Column band=\"left\" size=\"120\"/><Column band=\"left\" size=\"250\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"158\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"품목코드\"/><Cell col=\"1\" expr=\"\" text=\"품목명\"/><Cell col=\"2\" expr=\"\" text=\"요청수량\"/><Cell col=\"3\" expr=\"\" text=\"단위\"/><Cell col=\"4\" expr=\"\" text=\"업체명\"/><Cell col=\"5\" expr=\"\" text=\"응찰평균단가\"/><Cell col=\"6\" expr=\"\" text=\"응찰금액\"/><Cell col=\"7\" expr=\"\" text=\"부대비용\"/><Cell col=\"8\" expr=\"\" text=\"총응찰금액&#13;&#10;(부대비포함)\"/><Cell col=\"9\" expr=\"\" text=\"낙찰수량\"/><Cell col=\"10\" expr=\"\" text=\"총낙찰금액&#13;&#10;(부대비포함)\"/></Band><Band id=\"body\"><Cell cssclass=\"cell_link\" style=\"align:center;\" suppress=\"1\" suppressalign=\"first\" text=\"bind:MTRL_CD\"/><Cell col=\"1\" style=\"align:left;\" suppress=\"1\" suppressalign=\"first\" text=\"bind:MTRL_NM\"/><Cell col=\"2\" style=\"align:right;\" suppress=\"3\" suppressalign=\"first\" text=\"bind:QTY\"/><Cell col=\"3\" style=\"align:left;\" suppress=\"3\" suppressalign=\"first\" text=\"bind:CD_UNIT_NM\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:PTNR_NM\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"none\" mask=\"expr:CD_BID_UNIT ==&quot;ET23M1&quot;?'!#,##0.0':CD_BID_UNIT ==&quot;ET23M2&quot;?'!#,##0.00':CD_BID_UNIT ==&quot;ET23M3&quot;?'!#,##0.000':CD_BID_UNIT ==&quot;ET23M4&quot;?'!#,##0.0000':'#,##0'\" style=\"align:right;font:bold 10 Dotum;\" text=\"bind:RFQ_PRICE\"/><Cell col=\"6\" displaytype=\"number\" expandimage=\"URL('img::gridBtn__read.png')\" expandshow=\"show\" expandsize=\"18\" mask=\"9,999.##\" style=\"align:right;font:bold 10 Dotum;\" text=\"bind:RFQ_AMT\"/><Cell celltype=\"none\" col=\"7\" displaytype=\"number\" expandimage=\"expr:EXP_AMT&gt;0?'img::gridBtn__read.png':''\" expandshow=\"show\" expandsize=\"18\" style=\"align:right;font:bold 10 Dotum;\" suppressalign=\"first\" text=\"bind:EXP_AMT\"/><Cell calendardisplaynulltype=\"none\" col=\"8\" displaytype=\"number\" mask=\"9,999.##\" style=\"align:right;color:blueviolet;color2:blueviolet;font:bold 10 Dotum;\" suppressalign=\"first\" text=\"bind:RFQ_SUM\"/><Cell col=\"9\" displaytype=\"expr:AWRD_QTY&gt;0?'number':'none'\" style=\"align:right;color:EXPR(AWRD_QTY&gt;0?'orangered':'');color2:EXPR(AWRD_QTY&gt;0?'orangered':'');font:EXPR(AWRD_QTY&gt;0?'bold 10 Dotum':'');\" text=\"bind:AWRD_QTY\"/><Cell col=\"10\" displaytype=\"expr:AWRD_QTY&gt;0?'number':'none'\" style=\"align:right;color:orangered;color2:orangered;font:bold 10 Dotum;\" text=\"bind:AWRD_AMT\"/></Band></Format><Format id=\"Dmode\"><Columns><Column band=\"left\" size=\"120\"/><Column band=\"left\" size=\"250\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"158\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"110\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"품목코드\"/><Cell col=\"1\" expr=\"\" text=\"품목명\"/><Cell col=\"2\" expr=\"\" text=\"요청수량\"/><Cell col=\"3\" expr=\"\" text=\"단위\"/><Cell col=\"4\" expr=\"\" text=\"업체명\"/><Cell col=\"5\" expr=\"\" text=\"응찰단가\"/><Cell col=\"6\" expr=\"\" text=\"응찰금액\"/><Cell col=\"7\" expr=\"\" text=\"부대비용\"/><Cell col=\"8\" expr=\"\" text=\"응찰단가&#13;&#10;(부대비포함)\"/><Cell col=\"9\" expr=\"\" text=\"총응찰금액&#13;&#10;(부대비포함)\"/><Cell col=\"10\" expr=\"\" text=\"낙찰수량\"/><Cell col=\"11\" expr=\"\" text=\"총낙찰금액&#13;&#10;(부대비포함)\"/></Band><Band id=\"body\"><Cell cssclass=\"cell_link\" style=\"align:center;\" suppress=\"1\" suppressalign=\"first\" text=\"bind:MTRL_CD\"/><Cell col=\"1\" style=\"align:left;\" suppress=\"1\" suppressalign=\"first\" text=\"bind:MTRL_NM\"/><Cell col=\"2\" style=\"align:right;\" suppress=\"3\" suppressalign=\"first\" text=\"bind:QTY\"/><Cell col=\"3\" style=\"align:left;\" suppress=\"3\" suppressalign=\"first\" text=\"bind:CD_UNIT_NM\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:PTNR_NM\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"none\" mask=\"expr:CD_BID_UNIT ==&quot;ET23M1&quot;?'!#,##0.0':CD_BID_UNIT ==&quot;ET23M2&quot;?'!#,##0.00':CD_BID_UNIT ==&quot;ET23M3&quot;?'!#,##0.000':CD_BID_UNIT ==&quot;ET23M4&quot;?'!#,##0.0000':'#,##0'\" style=\"align:right;font:bold 10 Dotum;\" text=\"bind:RFQ_PRICE\"/><Cell col=\"6\" displaytype=\"number\" expandshow=\"hide\" mask=\"9,999.##\" style=\"align:right;font:bold 10 Dotum;\" text=\"bind:RFQ_AMT\"/><Cell celltype=\"none\" col=\"7\" displaytype=\"number\" expandimage=\"expr:EXP_AMT&gt;0?'img::gridBtn__read.png':''\" expandshow=\"show\" expandsize=\"18\" style=\"align:right;font:bold 10 Dotum;\" suppressalign=\"first\" text=\"bind:EXP_AMT\"/><Cell col=\"8\" displaytype=\"number\" mask=\"expr:CD_BID_UNIT ==&quot;ET23M1&quot;?'!#,##0.0':CD_BID_UNIT ==&quot;ET23M2&quot;?'!#,##0.00':CD_BID_UNIT ==&quot;ET23M3&quot;?'!#,##0.000':CD_BID_UNIT ==&quot;ET23M4&quot;?'!#,##0.0000':'#,##0'\" style=\"align:right;\" text=\"bind:RFQ_EXP_PRICE\"/><Cell calendardisplaynulltype=\"none\" col=\"9\" displaytype=\"number\" mask=\"9,999.##\" style=\"align:right;color:blueviolet;color2:blueviolet;font:bold 10 Dotum;\" suppressalign=\"first\" text=\"bind:RFQ_SUM\"/><Cell col=\"10\" displaytype=\"expr:AWRD_QTY&gt;0?'number':'none'\" style=\"align:right;color:EXPR(AWRD_QTY&gt;0?'orangered':'');color2:EXPR(AWRD_QTY&gt;0?'orangered':'');font:bold 10 Dotum;\" text=\"bind:AWRD_QTY\"/><Cell col=\"11\" displaytype=\"expr:AWRD_QTY&gt;0?'number':'none'\" style=\"align:right;color:EXPR(AWRD_QTY&gt;0?'orangered':'');color2:EXPR(AWRD_QTY&gt;0?'orangered':'');font:EXPR(AWRD_QTY&gt;0?'bold 10 Dotum':'');\" text=\"bind:AWRD_AMT\"/></Band></Format></Formats>");
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody01.addChild(obj.name, obj);
            obj = new Div("divViewCompTitle00", "absolute", "0", "5", null, "24", "10", null, this.divViewCompBody03.tabRfq.tabRfqInfo);
            obj.getSetter("objNm").set("DIV-기본정보 타이틀");
            obj.set_taborder("54");
            this.divViewCompBody03.tabRfq.tabRfqInfo.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "0", "255", "24", null, null, this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompTitle00);
            obj.set_cssclass("sta_WF_Subtitle02");
            obj.getSetter("objNm").set("기본정보타이틀");
            obj.set_taborder("0");
            obj.set_text("입찰요청서");
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompTitle00.addChild(obj.name, obj);
            obj = new Div("divViewCompTitle01", "absolute", "0", "473", null, "24", "10", null, this.divViewCompBody03.tabRfq.tabRfqInfo);
            obj.getSetter("objNm").set("DIV-기본정보 타이틀");
            obj.set_taborder("55");
            this.divViewCompBody03.tabRfq.tabRfqInfo.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "0", "255", "24", null, null, this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompTitle01);
            obj.set_cssclass("sta_WF_Subtitle02");
            obj.getSetter("objNm").set("기본정보타이틀");
            obj.set_taborder("2");
            obj.set_text("품목");
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompTitle01.addChild(obj.name, obj);
            obj = new Div("divViewCompTitle02", "absolute", "0", "152", null, "24", "10", null, this.divViewCompBody03.tabRfq.tabRfqInfo);
            obj.getSetter("objNm").set("DIV-대상업체 타이틀");
            obj.set_taborder("56");
            this.divViewCompBody03.tabRfq.tabRfqInfo.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle02", "absolute", "0", "0", "255", "24", null, null, this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompTitle02);
            obj.set_cssclass("sta_WF_Subtitle02");
            obj.set_taborder("31");
            obj.set_text("협력사정보");
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompTitle02.addChild(obj.name, obj);
            obj = new Div("divViewCompBody03", "absolute", "0", "845", null, "216", "0", null, this.divViewCompBody03.tabRfq.tabRfqInfo);
            obj.getSetter("objNm").set("DIV-입찰요청파일 상세");
            obj.set_scrollbars("none");
            obj.set_taborder("57");
            this.divViewCompBody03.tabRfq.tabRfqInfo.addChild(obj.name, obj);
            obj = new Grid("grdRfqPtnrFile", "absolute", "0", "0", null, null, "0", "0", this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody03);
            obj.set_autofittype("col");
            obj.set_binddataset("dsRfqReqFile");
            obj.getSetter("objNm").set("입찰요청파일");
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"VMODE\"><Columns><Column size=\"250\"/><Column size=\"300\"/><Column size=\"250\"/><Column size=\"414\"/><Column size=\"50\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"요청파일\"/><Cell col=\"1\" expr=\"\" text=\"비고\"/><Cell col=\"2\" expr=\"\" text=\"협력사명\"/><Cell col=\"3\" expr=\"\" text=\"파일명\"/><Cell col=\"4\" expr=\"\" text=\"첨부파일\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" suppress=\"1\" text=\"bind:REQ_FILE_NM\"/><Cell col=\"1\" style=\"align:left;\" suppress=\"1\" text=\"bind:RMARK\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:PTNR_NM\"/><Cell col=\"3\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:IMG_NM\"/><Cell col=\"4\" displaytype=\"button\" edittype=\"button\" style=\"controlbackground:URL('img::grdBtn_file.png') center middle;controlborder:1 none #808080 ;\" text=\" \"/></Band></Format></Formats>");
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody03.addChild(obj.name, obj);
            obj = new Div("divViewCompTitle03", "absolute", "0", "816", null, "24", "10", null, this.divViewCompBody03.tabRfq.tabRfqInfo);
            obj.getSetter("objNm").set("DIV-대상업체 타이틀");
            obj.set_taborder("58");
            this.divViewCompBody03.tabRfq.tabRfqInfo.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle03", "absolute", "0", "-3", "255", "24", null, null, this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompTitle03);
            obj.set_cssclass("sta_WF_Subtitle02");
            obj.set_taborder("0");
            obj.set_text("입찰요청파일");
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompTitle03.addChild(obj.name, obj);
            obj = new Tabpage("tapRmark", this.divViewCompBody03.tabRfq);
            obj.getSetter("objNm").set("특이사항");
            obj.set_scrollbars("none");
            obj.style.set_background("white");
            obj.set_text("특이사항");
            this.divViewCompBody03.tabRfq.addChild(obj.name, obj);
            obj = new TextArea("txaRmark", "absolute", "8", "5", null, null, "8", "5", this.divViewCompBody03.tabRfq.tapRmark);
            obj.getSetter("objNm").set("특이사항");
            obj.set_scrollbars("autovert");
            obj.set_taborder("0");
            this.divViewCompBody03.tabRfq.tapRmark.addChild(obj.name, obj);
            obj = new Tabpage("tabp03", this.divViewCompBody03.tabRfq);
            obj.getSetter("objNm").set("완료비고");
            obj.set_scrollbars("none");
            obj.style.set_background("white");
            obj.set_text("완료비고");
            this.divViewCompBody03.tabRfq.addChild(obj.name, obj);
            obj = new TextArea("txt_mjrCstmr", "absolute", "8", "5", null, null, "8", "5", this.divViewCompBody03.tabRfq.tabp03);
            obj.set_cssclass("txt_default");
            obj.getSetter("objNm").set("완료비고");
            obj.set_scrollbars("autovert");
            obj.set_taborder("27");
            obj.set_wordwrap("char");
            this.divViewCompBody03.tabRfq.tabp03.addChild(obj.name, obj);

            obj = new Div("divViewCompTitle04", "absolute", "0", "167", null, "24", "0", null, this);
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            obj.set_taborder("113");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "0", "255", "24", null, null, this.divViewCompTitle04);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("0");
            obj.set_text("승인파일");
            this.divViewCompTitle04.addChild(obj.name, obj);

            obj = new Div("divFile", "absolute", "2", "167", null, "192", "15", null, this);
            obj.set_taborder("114");
            obj.set_url("CCOMP::CompNFileUpDown.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divViewCompTitle02", "absolute", "0", "379", null, "24", "15", null, this);
            obj.getSetter("objNm").set("DIV-대상업체 타이틀");
            obj.set_positionstep("0");
            obj.set_taborder("104");
            this.addChild(obj.name, obj);
            obj = new Button("btnDel", "absolute", null, "0", "50", "24", "0", null, this.divViewCompTitle02);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("승인자삭제");
            obj.set_positionstep("1");
            obj.set_taborder("16");
            obj.set_text(" 삭제");
            obj.set_visible("false");
            this.divViewCompTitle02.addChild(obj.name, obj);
            obj = new Button("btnAdd", "absolute", null, "0", "80", "24", "55", null, this.divViewCompTitle02);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("승인자추가");
            obj.set_positionstep("1");
            obj.set_taborder("17");
            obj.set_text("승인자추가");
            obj.set_visible("false");
            this.divViewCompTitle02.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle02", "absolute", "0", "0", "255", "24", null, null, this.divViewCompTitle02);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("20");
            obj.set_text("승인자정보");
            this.divViewCompTitle02.addChild(obj.name, obj);
            obj = new Button("btnUp", "absolute", null, "0", "40", "24", "185", null, this.divViewCompTitle02);
            obj.set_cssclass("btn_WF_Module");
            obj.set_taborder("21");
            obj.set_text("▲");
            obj.getSetter("userdata").set("btnUp");
            obj.set_visible("false");
            this.divViewCompTitle02.addChild(obj.name, obj);
            obj = new Button("btnDown", "absolute", null, "0", "40", "24", "140", null, this.divViewCompTitle02);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("btnDown");
            obj.set_taborder("22");
            obj.set_text("▼");
            obj.set_visible("false");
            this.divViewCompTitle02.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompTitle00,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 타이틀");
            		p.set_positionstep("0");
            		p.set_taborder("1");

            	}
            );
            this.divViewCompTitle00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 118, this.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.set_cssclass("div_WF_DetailBg");
            		p.getSetter("objNm").set("DIV-평가서 상세");
            		p.set_positionstep("0");
            		p.set_taborder("101");

            	}
            );
            this.divViewCompBody00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1042, 386, this.divViewCompBody02,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-대상업체 세부정보");
            		p.set_taborder("107");

            	}
            );
            this.divViewCompBody02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompTitle03,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 타이틀");
            		p.set_taborder("111");

            	}
            );
            this.divViewCompTitle03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1042, 68, this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-헤더 상세");
            		p.set_scrollbars("none");
            		p.style.set_border("0 solid #c6c9cdff");
            		p.set_taborder("50");

            	}
            );
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 272, this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody02,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-대상업체 상세");
            		p.set_scrollbars("none");
            		p.set_taborder("51");

            	}
            );
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 385, this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody01,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-품목 상세");
            		p.set_taborder("53");

            	}
            );
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompTitle00,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-기본정보 타이틀");
            		p.set_taborder("54");

            	}
            );
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompTitle00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompTitle01,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-기본정보 타이틀");
            		p.set_taborder("55");

            	}
            );
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompTitle01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompTitle02,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-대상업체 타이틀");
            		p.set_taborder("56");

            	}
            );
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompTitle02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 216, this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody03,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-입찰요청파일 상세");
            		p.set_scrollbars("none");
            		p.set_taborder("57");

            	}
            );
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompTitle03,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-대상업체 타이틀");
            		p.set_taborder("58");

            	}
            );
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompTitle03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1203, 1188, this.divViewCompBody03.tabRfq.tabRfqInfo,
            	//-- Layout function
            	function(p) {
            		p.getSetter("lbcd").set("");
            		p.getSetter("objNm").set("입찰결과");
            		p.set_scrollbars("none");
            		p.style.set_background("white");
            		p.set_text("입찰결과");

            	}
            );
            this.divViewCompBody03.tabRfq.tabRfqInfo.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.divViewCompBody03.tabRfq.tapRmark,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("특이사항");
            		p.set_scrollbars("none");
            		p.style.set_background("white");
            		p.set_text("특이사항");

            	}
            );
            this.divViewCompBody03.tabRfq.tapRmark.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.divViewCompBody03.tabRfq.tabp03,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("완료비고");
            		p.set_scrollbars("none");
            		p.style.set_background("white");
            		p.set_text("완료비고");

            	}
            );
            this.divViewCompBody03.tabRfq.tabp03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 1114, this.divViewCompBody03,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 타이틀");
            		p.style.set_border("1 solid #c2c2c2ff");
            		p.set_taborder("112");

            	}
            );
            this.divViewCompBody03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompTitle04,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 타이틀");
            		p.set_taborder("113");

            	}
            );
            this.divViewCompTitle04.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompTitle02,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-대상업체 타이틀");
            		p.set_positionstep("0");
            		p.set_taborder("104");

            	}
            );
            this.divViewCompTitle02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "Screen0", 1220, 1067, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("FrmTemplate100");
            		p.set_titletext("승인상세(입찰확정)");

            	}
            );
            obj.set_stepcount("");
            obj.set_stepindex("");
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item60","divViewCompBody00.edtTtl","value","dsAprvInfo","TTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item61","divViewCompBody00.txaRmark","value","dsAprvInfo","APRV_OPNN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnUpVi","divViewCompTitle02.btnUp","visible","dsObjBindVi","btnUp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnUpEn","divViewCompTitle02.btnUp","enable","dsObjBindEn","btnUp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnDownVi","divViewCompTitle02.btnDown","visible","dsObjBindVi","btnDown");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnDownEn","divViewCompTitle02.btnDown","enable","dsObjBindEn","btnDown");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTtlVi","divViewCompBody00.staTtl","visible","dsObjBindVi","staTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTtlEn","divViewCompBody00.staTtl","enable","dsObjBindEn","staTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnDelVi","divViewCompTitle02.btnDel","visible","dsObjBindVi","btnDel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnDelEn","divViewCompTitle02.btnDel","enable","dsObjBindEn","btnDel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txaRmarkVi","divViewCompBody00.txaRmark","visible","dsObjBindVi","txaRmark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRmarkVi","divViewCompBody00.staRmark","visible","dsObjBindVi","staRmark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRmarkEn","divViewCompBody00.staRmark","enable","dsObjBindEn","staRmark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTtlVi","divViewCompBody00.edtTtl","visible","dsObjBindVi","edtTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTtlEn","divViewCompBody00.edtTtl","readonly","dsObjBindEn","edtTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnAddVi","divViewCompTitle02.btnAdd","visible","dsObjBindVi","btnAdd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnAddEn","divViewCompTitle02.btnAdd","enable","dsObjBindEn","btnAdd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("grdListFormatId","divViewCompBody02.grdList","formatid","dsObjBindGrid","grdList");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staViewCompTitle00LangBind2017110317184242212","divViewCompTitle03.staViewCompTitle00","text","gdsLabel","EPRO_LABEL_00372");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnAddLangBind2017110317184266269","divViewCompTitle02.btnAdd","text","gdsLabel","EPRO_LABEL_00224");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divViewCompBody00.txaRmark","readonly","dsObjBindEn","txaRmark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","divViewCompBody03.tabRfq.tapRmark.txaRmark","value","dsRfq","RMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabRfqVi","divViewCompBody03.tabRfq","visible","dsObjBindVi","tabRfq");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabRfqEn","divViewCompBody03.tabRfq","enable","dsObjBindEn","tabRfq");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabRfqInfoVi","divViewCompBody03.tabRfq.tabRfqInfo","visible","dsObjBindVi","tabRfqInfo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabRfqInfoEn","divViewCompBody03.tabRfq.tabRfqInfo","enable","dsObjBindEn","tabRfqInfo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tapRmarkVi","divViewCompBody03.tabRfq.tapRmark","visible","dsObjBindVi","tapRmark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tapRmarkEn","divViewCompBody03.tabRfq.tapRmark","enable","dsObjBindEn","tapRmark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","divViewCompBody03.tabRfq.tapRmark.txaRmark","visible","dsObjBindVi","txaRmark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txaRmarkEn","divViewCompBody03.tabRfq.tapRmark.txaRmark","readonly","dsObjBindEn","txaRmark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp04Vi","divViewCompBody03.tabRfq.tabEval","visible","dsObjBindVi","tabp04");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp04En","divViewCompBody03.tabRfq.tabEval","enable","dsObjBindEn","tabp04");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sta_WFDA_Label02Vi","divViewCompBody03.tabRfq.tabp04.sta_WFDA_Label02","visible","dsObjBindVi","sta_WFDA_Label02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sta_WFDA_Label02En","divViewCompBody03.tabRfq.tabp04.sta_WFDA_Label02","enable","dsObjBindEn","sta_WFDA_Label02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("st_RfqStates00_11Vi","divViewCompBody03.tabRfq.tabp04.st_RfqStates00","visible","dsObjBindVi","st_RfqStates00_11");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("st_RfqStates00_11En","divViewCompBody03.tabRfq.tabp04.st_RfqStates00","enable","dsObjBindEn","st_RfqStates00_11");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cb_evalTmplIdVi","divViewCompBody03.tabRfq.tabp04.cb_evalTmplId","visible","dsObjBindVi","cb_evalTmplId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cb_evalTmplIdEn","divViewCompBody03.tabRfq.tabp04.cb_evalTmplId","readonly","dsObjBindEn","cb_evalTmplId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_3Vi","divViewCompBody03.tabRfq.tabp04.div_3","visible","dsObjBindVi","div_3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_3En","divViewCompBody03.tabRfq.tabp04.div_3","enable","dsObjBindEn","div_3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btn_opItemVi","divViewCompBody03.tabRfq.tabp04.div_3.btn_opItem","visible","dsObjBindVi","btn_opItem");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btn_opItemEn","divViewCompBody03.tabRfq.tabp04.div_3.btn_opItem","enable","dsObjBindEn","btn_opItem");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btn_evalUserAddVi","divViewCompBody03.tabRfq.tabp04.div_3.btn_evalUserAdd","visible","dsObjBindVi","btn_evalUserAdd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btn_evalUserAddEn","divViewCompBody03.tabRfq.tabp04.div_3.btn_evalUserAdd","enable","dsObjBindEn","btn_evalUserAdd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btn_evalUserDelVi","divViewCompBody03.tabRfq.tabp04.div_3.btn_evalUserDel","visible","dsObjBindVi","btn_evalUserDel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btn_evalUserDelEn","divViewCompBody03.tabRfq.tabp04.div_3.btn_evalUserDel","enable","dsObjBindEn","btn_evalUserDel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_31Vi","divViewCompBody03.tabRfq.tabp04.div_31","visible","dsObjBindVi","div_31");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_31En","divViewCompBody03.tabRfq.tabp04.div_31","enable","dsObjBindEn","div_31");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_01Vi","divViewCompBody03.tabRfq.tabp04.div_01","visible","dsObjBindVi","div_01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_01En","divViewCompBody03.tabRfq.tabp04.div_01","enable","dsObjBindEn","div_01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btn_EvalEndVi","divViewCompBody03.tabRfq.tabp04.btn_EvalEnd","visible","dsObjBindVi","btn_EvalEnd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btn_EvalEndEn","divViewCompBody03.tabRfq.tabp04.btn_EvalEnd","enable","dsObjBindEn","btn_EvalEnd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_00Vi","divViewCompBody03.tabRfq.tabp04.div_00","visible","dsObjBindVi","div_00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_00En","divViewCompBody03.tabRfq.tabp04.div_00","enable","dsObjBindEn","div_00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btn_opItem_31Vi","divViewCompBody03.tabRfq.tabp04.div_00.btn_opItem","visible","dsObjBindVi","btn_opItem_31");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btn_opItem_31En","divViewCompBody03.tabRfq.tabp04.div_00.btn_opItem","enable","dsObjBindEn","btn_opItem_31");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp03Vi","divViewCompBody03.tabRfq.tabp03","visible","dsObjBindVi","tabp03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp03En","divViewCompBody03.tabRfq.tabp03","enable","dsObjBindEn","tabp03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txt_mjrCstmrVi","divViewCompBody03.tabRfq.tabp03.txt_mjrCstmr","visible","dsObjBindVi","txt_mjrCstmr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txt_mjrCstmrEn","divViewCompBody03.tabRfq.tabp03.txt_mjrCstmr","readonly","dsObjBindEn","txt_mjrCstmr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("grdRfqPtnrFormatId","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody02.grdRfqPtnr","formatid","dsObjBindGrid","grdRfqPtnr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("grdRfqItemFormatId","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody01.grdRfqItem","formatid","dsObjBindGrid","grdRfqItem");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.staTtl","visible","dsObjBindVi","staTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.staTtl","enable","dsObjBindEn","staTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.edtTtl","value","dsRfq","TTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.edtTtl","visible","dsObjBindVi","edtTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.edtTtl","readonly","dsObjBindEn","edtTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.edtRfqOdr","value","dsRfq","RFQ_ODR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRfqOdrVi","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.edtRfqOdr","visible","dsObjBindVi","edtRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRfqOdrEn","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.edtRfqOdr","readonly","dsObjBindEn","edtRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdrVi","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.staRfqOdr","visible","dsObjBindVi","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdrEn","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.staRfqOdr","enable","dsObjBindEn","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.cboRfqAim","value","dsRfq","CD_RFQ_AIM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboRfqAimVi","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.cboRfqAim","visible","dsObjBindVi","cboRfqAim");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboRfqAimEn","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.cboRfqAim","readonly","dsObjBindEn","cboRfqAim");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqAimVi","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.staRfqAim","visible","dsObjBindVi","staRfqAim");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqAimEn","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.staRfqAim","enable","dsObjBindEn","staRfqAim");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.cboCdRfqCrnc","value","dsRfq","CD_RFQ_CRNC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboCdRfqCrncVi","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.cboCdRfqCrnc","visible","dsObjBindVi","cboCdRfqCrnc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboCdRfqCrncEn","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.cboCdRfqCrnc","readonly","dsObjBindEn","cboCdRfqCrnc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("st_RfqStates00Vi","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.st_RfqStates00","visible","dsObjBindVi","st_RfqStates00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("st_RfqStates00En","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.st_RfqStates00","enable","dsObjBindEn","st_RfqStates00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("st_RfqStates00LangBind2017110317184376176","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.st_RfqStates00","text","gdsLabel","EPRO_LABEL_00002");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staGoalAmtVi","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.staGoalAmt","visible","dsObjBindVi","staGoalAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staGoalAmtEn","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.staGoalAmt","enable","dsObjBindEn","staGoalAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.edtGoalAmt","value","dsRfq","GOALAMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtGoalAmtVi","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.edtGoalAmt","visible","dsObjBindVi","edtGoalAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtGoalAmtEn","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.edtGoalAmt","readonly","dsObjBindEn","edtGoalAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.cboIncoterms","value","dsRfq","CD_INCOTERMS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.staEvalType","visible","dsObjBindVi","Undefined_8");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.staEvalType","enable","dsObjBindEn","Undefined_8");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.staEvalType","visible","dsObjBindVi","Undefined_00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.staEvalType","enable","dsObjBindEn","Undefined_00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.cboEvalType","value","dsRfq","CD_EVAL_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staIncotermsVi","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.staIncoterms","visible","dsObjBindVi","staIncoterms");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staIncotermsEn","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.staIncoterms","enable","dsObjBindEn","staIncoterms");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboIncotermsVi","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.cboIncoterms","visible","dsObjBindVi","cboIncoterms");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboIncotermsEn","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.cboIncoterms","readonly","dsObjBindEn","cboIncoterms");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staEvalTypeVi","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.staEvalType","visible","dsObjBindVi","staEvalType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staEvalTypeEn","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.staEvalType","enable","dsObjBindEn","staEvalType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboEvalTypeVi","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.cboEvalType","visible","dsObjBindVi","cboEvalType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboEvalTypeEn","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.cboEvalType","readonly","dsObjBindEn","cboEvalType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTcoBgnYrVi","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.staTcoBgnYr","visible","dsObjBindVi","staTcoBgnYr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTcoBgnYrEn","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.staTcoBgnYr","enable","dsObjBindEn","staTcoBgnYr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.edtTcoBgnYr","value","dsRfq","TCO_BGN_YR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTcoBgnYrVi","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.edtTcoBgnYr","visible","dsObjBindVi","edtTcoBgnYr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTcoBgnYrEn","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.edtTcoBgnYr","readonly","dsObjBindEn","edtTcoBgnYr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.edtTcoYr","value","dsRfq","TCO_YR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTcoYrVi","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.edtTcoYr","visible","dsObjBindVi","edtTcoYr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTcoYrEn","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.edtTcoYr","readonly","dsObjBindEn","edtTcoYr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr00Vi","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.staRfqOdr00","visible","dsObjBindVi","staRfqOdr00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr00En","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.staRfqOdr00","enable","dsObjBindEn","staRfqOdr00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","divViewCompBody03.tabRfq.tabp03.txt_mjrCstmr","value","dsRfq","CLOSED_RMK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","divViewCompBody03.tabRfq.tabp03","text","gdsLabel","EPRO_LABEL_01148");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("grdRfqPtnrFileFormatId","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody03.grdRfqPtnrFile","formatid","dsObjBindGrid","grdRfqPtnrFile");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item95","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.edtIncoterms2","value","dsRfq","INCOTERMS2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.cboCdBidUnit","value","dsRfq","CD_BID_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtIncoterms2Vi","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.edtIncoterms2","visible","dsObjBindVi","edtIncoterms2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtIncoterms2En","divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.edtIncoterms2","readonly","dsObjBindEn","edtIncoterms2");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompNFileUpDown.xfdl");
        };
        
        // User Script
        this.registerScript("BAprvDetailRfqAls.xfdl", function(exports) {
        /**
         * @파일명       	: BAprvDetail.xfdl
         * @생성자       	: 송태봉
         * @생성일자     	: 2017. 9. 12.
         * @최종수정자		: 송태봉
         * @최종수정일자	    : 2017. 9. 12.
        */  

        this.fvGubun = "";
        this.fvTarget = -1;
        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {
        	 
        	var param = [
        					 {code:"AP13", sSelectType:"S"}
        					 ,{code:"AP14", sSelectType:"S"}
        					,{code:"CM10", sSelectType:"A"}								// 문서유형
        					,{code:"ET27", sSelectType:"S"}								// 입찰목적
        					,{code:"ET23", sSelectType:"S"}								// 응찰단위
        					,{code:"CM15", sSelectType:"S"} 							// 입찰통화
        					,{code:"CM11", sSelectType:"A"} 							// 단위
        					,{code:"CM32", sSelectType:"S"} 							// 파일유형
        					,{code:"CM22", sSelectType:"S"} 							// incoterms
        					,{code:"ET14"} 	
        				];
        			
        	gfnGetCode(this, param);
        }

        /**
          * @함수명	: fnOnload
          * @desc   : 폼 onload이벤트
          */
        this.fnFormOninit = function(obj,e)
        {
        	this.fnSetCode();
        }

        /**
          * @함수명	: fnOnload
          * @desc   : 폼 onload이벤트
          */
        this.fnOnload = function(obj,e)
        {
        	gfnSetGrdFunc(this.divViewCompBody02.grdList, null, this);

        	this.dsAprvInfo.setColumn(0,"LOGIN_USER",application.gdsUserInfo.getColumn(0,"USER_ID"));
        	this.dsAprvInfo.setColumn(0,"BRANCH_CD",application.gdsUserInfo.getColumn(0,"BRANCH_CD"));
        	this.dsAprvInfo.setColumn(0,"APP_DOC_ID",gfnGetTmprData("APP_DOC_ID"));
        	
        	this.fvGubun = gfnGetTmprData("GUBUN");
        	gfnClearTmprData();
        	gfnMakeFileDs(this);

        	this.fnSearch();
        }

        /**
        	@function	fnSearch()
        	@desc   	조회 이벤트
        */
        this.fnSearch = function(obj,e)
        {	
        	var sSvcID = "readAprv";
        	var sController = "epro.aprv.service.BAprvService.readAprv";
        	var sInDatasets = "dsAprvInfo=dsAprvInfo";
        	var sOutDatasets = "dsAprvInfo=dsAprvInfo dsAprvLine=dsAprvLine dsRfq=dsRfq dsRfqItemList=dsRfqItemList dsRfqPtnr=dsRfqPtnr dsRfqPtnrItemExp=dsRfqPtnrItemExp dsRfqItemTco=dsRfqItemTco dsRfqReqFile=dsRfqReqFile";
        	var sCallbackFunc = "fnTrCallBack";	

            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
        	@function	fnSave()
        	@desc   	저장 이벤트
        */
        this.fnSave = function()
        {
        	if(!gfnConfirm("EPRO_LABEL_00001")) return;

        	var sSvcID = "saveAprvReq";
        	var sController = "epro.aprv.service.BAprvService.saveAprvReq";
        	var sInDatasets = "dsAprvInfo=dsAprvInfo dsAprvLine=dsAprvLine";
        	var sOutDatasets = "dsAprvInfo=dsAprvInfo";
        	var sCallbackFunc = "fnTrCallBack";	

            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
        	@function	fnSave()
        	@desc   	저장 이벤트
        */
        this.fnAprvCxl = function()
        {
        	if(!gfnConfirm("EPRO_LABEL_00001")) return;
        	
        	this.dsAprvInfo.setColumn(0,"CD_APRV_STTS","AP10CXL");
        	
        	var sSvcID = "saveAprvCxl";
        	var sController = "epro.aprv.service.BAprvService.saveAprvCxl";
        	var sInDatasets = "dsAprvInfo=dsAprvInfo";
        	var sOutDatasets = "dsAprvInfo=dsAprvInfo";
        	var sCallbackFunc = "fnTrCallBack";	

            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
          * @함수명	: fnRemote
          * @desc     	: 리모콘 버튼 생성
          */
        this.fnRemote = function()
        {		   
        	var sArg = [
        				 {btnName:gfnMultiLabel("EPRO_LABEL_00787"), clickEventFunc:"fnAprvCxl"}
        				 ,{btnName:gfnMultiLabel("EPRO_LABEL_00788"), clickEventFunc:"fnAprvApp"}
        				 ,{btnName:gfnMultiLabel("EPRO_LABEL_00789"), clickEventFunc:"fnAprvReturn"}
        				];
        	
        	gfnRemote(this, sArg);
        }

        /**
          * @함수명	: fnAprvApp
          * @desc     	: 승인팝업
          */
        this.fnAprvApp = function()
        {
        	var sArg = { agv_gubun:"APP" };
        	gfnModalPop(this, "AprvApp", "BAPRV::BAprOpnnPopup.xfdl", sArg, "fnPopCallBack", 400, 260);
        }

        /**
          * @함수명	: fnSaveAprvCplt
          * @desc     	: 결과저장
          */
        this.fnSaveAprvCplt = function()
        {
        	var sSvcID = "saveAprvCplt";
        	var sController = "epro.aprv.service.BAprvService.saveAprvCplt";
        	var sInDatasets = "dsAprvInfo=dsAprvInfo dsAprvLine=dsAprvLine";
        	var sOutDatasets = "dsAprvInfo=dsAprvInfo";
        	var sCallbackFunc = "fnTrCallBack";	

            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
          * @함수명	: fnAprvReturn
          * @desc     	: 반려팝업
          */
        this.fnAprvReturn = function()
        {
        	var sArg = { agv_gubun:"RETURN" };
        	gfnModalPop(this, "AprvReturn", "BAPRV::BAprOpnnPopup.xfdl", sArg, "fnPopCallBack", 400, 260);
        }

        /**
          * @함수명	: fnClose
          * @desc     	: 닫기버튼
          */
        this.fnClose = function()
        {
        	return true;
        }

        /**
          * @함수명	: fnTrCallBack
          * @desc     	: Transaction Callback함수
          */
        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	if(strErrCd < 0){
        		return;
        	}
        	
        	switch(strSvcID){
        		case "readAprv" :
        			 
        			var sTableNm = "MM_APRV";
        			var arrFileKey = [this.dsAprvInfo.getColumn(0, "APP_DOC_ID")];
        			this.divFile.fnFileInit(this, sTableNm, this.dsAprvInfo, arrFileKey,"Y");
        			
        			//요청문서
        			if(this.fvGubun == "REQ"){
        				var wait = Number(this.dsAprvInfo.getColumn(0,"WAIT_SEQ"));
        				var nRow = this.dsAprvLine.findRow("APRVR_ID",this.dsAprvInfo.getColumn(0,"LOGIN_USER"));
        				
        				//자신은 승인라인에 없고 자신이 승인대리자일 경우
        				if(nRow == -1){
        					nRow = this.dsAprvLine.findRow("ABS_USER_ID",this.dsAprvInfo.getColumn(0,"LOGIN_USER"));
        					
        					if(wait == Number(this.dsAprvLine.getColumn(nRow,"APRV_ORDR")) 
        						&& "AP13WAT" == this.dsAprvLine.getColumn(nRow,"CD_APRV_LN_STTS")){
        						
        						this.fvTarget = nRow;
        						gfnSetObj("C");
        							
        					} else{
        						gfnSetObj("B");
        						
        					}
        				
        				//자신이 승인라인에 있을때
        				} else{
        					var mRow = this.dsAprvLine.findRow("ABS_USER_ID",this.dsAprvInfo.getColumn(0,"LOGIN_USER"));
        					
        					//자신이 승인대리자가 아닐때
        					if(mRow == -1){
        						if(wait == Number(this.dsAprvLine.getColumn(nRow,"APRV_ORDR")) 
        							&& "AP13WAT" == this.dsAprvLine.getColumn(nRow,"CD_APRV_LN_STTS")){
        							
        							this.fvTarget = nRow;
        							gfnSetObj("C");
        								
        						} else{
        							gfnSetObj("B");
        							
        						}
        					//자신이 승인라인에 있고, 승인대리자 이기도 할때
        					} else{
        						var nOrdr = Number(this.dsAprvLine.getColumn(nRow,"APRV_ORDR"));
        						var mOrdr = Number(this.dsAprvLine.getColumn(mRow,"APRV_ORDR"));
        						var tmpOrdr = "";
        						var tmpStts = "";
        						
        						if(wait == nOrdr){
        							this.fvTarget = nRow;
        							
        							tmpOrdr = nOrdr;
        							tmpStts = this.dsAprvLine.getColumn(nRow,"CD_APRV_LN_STTS");
        							
        						} else if(wait == mOrdr){
        							this.fvTarget = mRow;
        							
        							tmpOrdr = mOrdr;
        							tmpStts = this.dsAprvLine.getColumn(mRow,"CD_APRV_LN_STTS");
        						}
        						
        						if(wait == tmpOrdr && tmpStts == "AP13WAT"){
        							gfnSetObj("C");
        								
        						} else{
        							gfnSetObj("B");
        							
        						}
        					}
        				}
        			//완료문서
        			} else if(this.fvGubun == "RST"){
        				gfnSetObj("B");
        				
        			} else if(this.fvGubun == "DRAFT"){
        				var check = true;

        				for(var i = 0 ; i < this.dsAprvLine.rowcount ; i++){
        					if(this.dsAprvLine.getColumn(i,"CD_APRV_LN_STTS") == 'AP13CFM' || this.dsAprvLine.getColumn(i,"CD_APRV_LN_STTS") == 'AP13RTN'){
        						check = false;
        						break;
        					}
        				}
        				
        				if(this.dsAprvInfo.getColumn(0,"CD_APRV_STTS") == "AP10CXL") check = false;
        				
        				if(check){
        					gfnSetObj("A");
        					
        				} else{
        					gfnSetObj("B");
        					
        				}
        			}
        			
        			if(this.dsRfq.getColumn(0,"CD_RFQ_AIM")=="ET27TCO"){
        				this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody02.grdRfqPtnr.setFormat("Cmode");
        				this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody01.grdRfqItem.setFormat("Cmode");
        			}else if(this.dsRfq.getColumn(0,"CD_RFQ_AIM")=="ET27DSG"){
        				this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody02.grdRfqPtnr.setFormat("Cmode");
        				this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody01.grdRfqItem.setFormat("Dmode");
        			}else{
        				if(this.dsRfq.getColumn(0,"ALT_RFQ_PRICE_SBMT")=="Y"){
        					this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody02.grdRfqPtnr.setFormat("Amode");
        					this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody01.grdRfqItem.setFormat("Amode");
        				}else{
        					this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody02.grdRfqPtnr.setFormat("Bmode");
        					this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody01.grdRfqItem.setFormat("Bmode");
        				}
        			}
        			
        			if(this.dsRfq.getColumn(0,"ALT_SINGLE_PTNR")=="Y"){
        				this.divViewCompTitle00.staWarning.set_visible(true);
        			}
        			
        			//평가비율이 헤더 바인딩 적용이 안되어서 소스로 해결.
        //  			var ptnrGrid = this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody02.grdRfqPtnr;
        //  			var formId = ptnrGrid.formatid;
        //  			var idx=0;
        //  			if(formId=="Bmode"){
        // 				idx =16;
        //  			}else if(formId=="Cmode"){
        // 				idx =18;
        //  			}
        //  			
        // 			ptnrGrid.setCellProperty("Head", idx,"text",this.dsRfq.getColumn(0,"RT_Q"));
        // 			ptnrGrid.setCellProperty("Head", idx+1 ,"text",this.dsRfq.getColumn(0,"RT_P"));
        // 			ptnrGrid.setCellProperty("Head", idx+2 ,"text",this.dsRfq.getColumn(0,"RT_C"));
        // 			ptnrGrid.setCellProperty("Head", idx+3 ,"text",this.dsRfq.getColumn(0,"RT_T"));
        // 			ptnrGrid.setCellProperty("Head", idx+4 ,"text",this.dsRfq.getColumn(0,"RT_D"));
        // 			ptnrGrid.setCellProperty("Head", idx+5 ,"text",this.dsRfq.getColumn(0,"RT_F"));
        			
        		break;
        		
        		case "saveAprvReq" :
        			gfnAlert(strErrMsg);
        			this.fnSearch();
        			
        		break;
        		
        		case "saveAprvCxl" :
        			gfnAlert(strErrMsg);
        			this.fnSearch();
        		break;
        		
        		case "saveAprvCplt" :
        			gfnAlert(strErrMsg);
        			this.fnSearch();
        		break;
        		
        		default:
        		break;	
        	}
        }

        /**
          * @함수명	: fnMove
          * @desc     	: 승인자 순서 변경
          */
        this.fnMove = function(obj,e)
        {
        	var ordr = "";
        	var nRow = this.dsAprvLine.rowposition;
        	
        	if(this.dsAprvLine.getColumn(nRow,"APRVR_ID") == application.gdsUserInfo.getColumn(0,"USER_ID")){
        		gfnAlert("EPRO_LABEL_00890");
        		return;
        	}
        	
        	if(obj.name == "btnUp"){
        		if(this.dsAprvLine.getColumn(nRow,"UP_YN") == "Y" && this.dsAprvLine.getColumn(nRow - 1, "UP_YN") == "Y"){
        			if(gfnIsNull(this.dsAprvLine.getColumn(nRow,"APRVR_ID"))){
        				gfnAlert("EPRO_LABEL_00891");
        				return;
        				
        			} else if(gfnIsNull(this.dsAprvLine.getColumn(nRow -1,"APRVR_ID"))){
        				gfnAlert("EPRO_LABEL_00892");
        				return;
        			}
        			
        			ordr = this.dsAprvLine.getColumn(nRow,"APRV_ORDR");
        			this.dsAprvLine.setColumn(nRow,"APRV_ORDR",parseInt(ordr) - 1);
        			this.dsAprvLine.setColumn(nRow -1 ,"APRV_ORDR",ordr);
        			
        			this.dsAprvLine.moveRow(nRow,nRow-1);
        			
        		} else{
        			gfnAlert("EPRO_LABEL_00893");
        		}
        		
        	} else{
        		if(this.dsAprvLine.getColumn(nRow,"UP_YN") == "Y" && this.dsAprvLine.getColumn(nRow + 1, "UP_YN") == "Y"){
        			if(gfnIsNull(this.dsAprvLine.getColumn(nRow,"APRVR_ID"))){
        				gfnAlert("EPRO_LABEL_00891");
        				return;
        				
        			} else if(gfnIsNull(this.dsAprvLine.getColumn(nRow +1,"APRVR_ID"))){
        				gfnAlert("EPRO_LABEL_00892");
        				return;
        			}
        			
        			ordr = this.dsAprvLine.getColumn(nRow,"APRV_ORDR");
        			this.dsAprvLine.setColumn(nRow,"APRV_ORDR",parseInt(ordr) + 1);
        			this.dsAprvLine.setColumn(nRow +1 ,"APRV_ORDR",ordr);
        			
        			this.dsAprvLine.moveRow(nRow,nRow+1);
        		
        		} else{
        			gfnAlert("EPRO_LABEL_00894");
        		}
        	}
        }

        /**
          * @함수명	: fnAddUser
          * @desc     	: 승인자 추가
          */
        this.fnAddUser = function(obj,e)
        {
        	var nRow = this.dsAprvLine.addRow();
        	this.dsAprvLine.setColumn(nRow,"BRANCH_CD",this.dsAprvInfo.getColumn(0,"BRANCH_CD"));
        	this.dsAprvLine.setColumn(nRow,"APP_DOC_ID",this.dsAprvInfo.getColumn(0,"APP_DOC_ID"));
        	this.dsAprvLine.setColumn(nRow,"APRV_ORDR",this.dsAprvLine.getMax("APRV_ORDR") + 1);
        	this.dsAprvLine.setColumn(nRow,"CD_APRV_LN_STTS","AP13WAT");
        	this.dsAprvLine.setColumn(nRow,"CD_APP_TYPE","AP14CFM");
        	this.dsAprvLine.setColumn(nRow,"CRTR_ID",application.gdsUserInfo.getColumn(0,"USER_ID"));
        	this.dsAprvLine.setColumn(nRow,"UP_YN", "Y");
        	
        	this.dsAprvInfo.setColumn(0,"CD_APRV_STTS","AP10ING");
        	this.dsAprvInfo.setColumn(0,"APRV_CNT",this.dsAprvLine.rowcount);
        	this.dsAprvInfo.setColumn(0,"LAST_CHGR_ID",application.gdsUserInfo.getColumn(0,"USER_ID"));
        }

        /**
          * @함수명	: fnDelUser
          * @desc     	: 승인자 삭제
          */
        this.fnDelUser = function(obj,e)
        {
        	var orgRow = this.dsAprvLine.rowcount;
        	
        	this.dsAprvLine.filter("CHECKED==1");
        	
        	if(this.dsAprvLine.rowcount < 1){
        		
        		gfnAlert("EPRO_LABEL_00895");
        		this.dsAprvLine.filter("");
        		return;
        		
        	} else{
        		if(orgRow == this.dsAprvLine.rowcount +1){
        			this.dsAprvLine.filter("");
        			gfnAlert("EPRO_LABEL_00896");
        			return;
        			
        		} else{
        			this.dsAprvLine.filter("");
        			
        			if(!gfnConfirm("EPRO_LABEL_00897")) return;
        			
        			this.dsAprvLine.filter("CHECKED==1");
        			this.dsAprvLine.deleteAll();
        			this.dsAprvLine.filter("");
        		}
        	}
        	
        	for(var i = 0 ; i < this.dsAprvLine.rowcount ; i++){
        		this.dsAprvLine.setColumn(i ,"APRV_ORDR" ,i+1);
        	}
        	
        	var nRow = this.dsAprvLine.findRow("CD_APRV_LN_STTS","AP13WAT");
        	
        	if(nRow != -1) nRow = nRow + 1;
        	else nRow = this.dsAprvLine.rowcount;
        	
        	this.dsAprvInfo.setColumn(0,"APRV_CNT",this.dsAprvLine.rowcount);
        	this.dsAprvInfo.setColumn(0,"WAIT_SEQ",nRow);
        	this.dsAprvInfo.setColumn(0,"LAST_CHGR_ID",application.gdsUserInfo.getColumn(0,"USER_ID"));
        	
        	if(-1 == this.dsAprvLine.findRow("CD_APRV_LN_STTS","AP13WAT")){
        		this.dsAprvInfo.setColumn(0,"CD_APRV_STTS","AP10CLO");
        		
        	}
        }

        /**
          * @함수명	: fnSearchUser
          * @desc   : 유저검색
          */
        this.fnSearchUser = function(objNm)
        {
        	var sAgvNm = "";
        	var sPopupId = "";
        	
        	if(objNm == "grdList"){
        		if(!gfnIsNull(this.dsAprvLine.getColumn(this.dsAprvLine.rowposition ,"APRVR_ID"))) return;
        	
        		sPopupId = "BUserSrchPopup";
        		sAgvNm = this.dsAprvLine.getColumn(this.dsAprvLine.rowposition,"APRVR_NM")
        		
        	} 
        	
        	var sArg = { 
        				agv_nm:sAgvNm
        			   };

        	gfnSearchComUser(this, sPopupId, "fnPopCallBack", sArg)
        }

        /**
          * @함수명	: grdOnexpandUp
          * @desc   : 그리드 expandUp 이벤트
          */
        this.grdOnexpandUp = function(obj,e)
        {
        	obj.updateToDataset();
        	this.fnSearchUser(obj.name);
        }

        /**
        	@function	fnPopCallBack()
        	@desc   	팝업 CallBack 함수
        */
        this.fnPopCallBack = function(sPopupId,rtn)
        {
        	if(gfnIsNull(rtn)) return;

        	this.dsReturn.clear();
        	this.dsReturn.loadXML(rtn);
        	
        	switch(sPopupId){			
        		case "BUserSrchPopup":
        				if(!gfnIsNull(this.dsReturn.getColumn(0,"USER_ID"))){
        					if(-1 == this.dsAprvLine.findRow("APRVR_ID",this.dsReturn.getColumn(0,"USER_ID"))){
        						var nRow = this.dsAprvLine.rowposition;
        						this.dsAprvLine.setColumn(nRow,"APRVR_ID", this.dsReturn.getColumn(0,"USER_ID"));
        						this.dsAprvLine.setColumn(nRow,"APRVR_NM", this.dsReturn.getColumn(0,"USER_NM"));
        						this.dsAprvLine.setColumn(nRow,"PSTN", this.dsReturn.getColumn(0,"PSTN"));
        						this.dsAprvLine.setColumn(nRow,"DEPT_NM", this.dsReturn.getColumn(0,"DEPT_NM"));
        						this.dsAprvLine.setColumn(nRow,"TEL", this.dsReturn.getColumn(0,"TEL"));
        						
        					} else{
        						gfnAlert("EPRO_LABEL_00874");
        						this.dsAprvLine.setColumn(this.dsAprvLine.rowposition,"APRVR_NM","");
        					}
        				}
        				
        			break;
        		
        		case "AprvApp" :
        			this.dsAprvLine.setColumn(this.fvTarget,"CD_APRV_LN_STTS","AP13CFM");
        			this.dsAprvLine.setColumn(this.fvTarget,"OPNN",this.dsReturn.getColumn(0,"MSG"));
        			
        			if(Number(this.dsAprvInfo.getColumn(0,"WAIT_SEQ")) == Number(this.dsAprvInfo.getColumn(0,"APRV_CNT"))){
        				this.dsAprvInfo.setColumn(0,"CD_APRV_STTS","AP10CLO");
        				
        			} else{
        				this.dsAprvInfo.setColumn(0,"WAIT_SEQ",this.dsAprvInfo.getColumn(0,"WAIT_SEQ") + 1);
        			}
        			
        			this.dsAprvInfo.setColumn(0,"TARGET_ID",this.dsAprvLine.getColumn(this.fvTarget,"APRVR_ID"));
        			
        			this.fnSaveAprvCplt();
        			
        		break;
        		
        		case "AprvReturn" :
        			this.dsAprvLine.setColumn(this.fvTarget,"CD_APRV_LN_STTS","AP13RTN");
        			this.dsAprvLine.setColumn(this.fvTarget,"OPNN",this.dsReturn.getColumn(0,"MSG"));
        			
        			if(Number(this.dsAprvInfo.getColumn(0,"WAIT_SEQ")) != Number(this.dsAprvInfo.getColumn(0,"APRV_CNT"))){
        				this.dsAprvInfo.setColumn(0,"WAIT_SEQ",this.dsAprvInfo.getColumn(0,"WAIT_SEQ") + 1);
        			}
        			
        			this.dsAprvInfo.setColumn(0,"CD_APRV_STTS","AP10RTN");
        			this.dsAprvInfo.setColumn(0,"TARGET_ID",this.dsAprvLine.getColumn(this.fvTarget,"APRVR_ID"));
        			
        			this.fnSaveAprvCplt();
        			
        		break;
        		
        		default:
        			break;	
        	}
        }

        /**
        	@function	grdOnkeydown()
        	@desc   	그리드 키다운 이벤트
        */
        this.grdOnkeydown = function(obj,e)
        {
        	if(e.keycode == "13"){
        		if(gfnGrdBindColId(obj,obj.getCellPos()) == "APRVR_NM"){
        			obj.updateToDataset();
        			this.fnSearchUser(obj.name);
        		}
        	}
        }

        /**
        	@function	grdOntextchanged()
        	@desc   	그리드 텍스트변경 이벤트
        */
        this.grdOntextchanged = function(obj,e)
        {
        	if(gfnGrdBindColId(obj,obj.getCellPos()) == "APRVR_NM"){
        		this.dsAprvLine.setColumn(this.dsAprvLine.rowposition,"APRVR_ID","");
        		
        	}
        }

        /**
        	@function	fnOnkeydown()
        	@desc   	키업 이벤트
        */
        this.fnOnkeydown = function(obj,e)
        {
        	if(e.keycode == "13"){
        		obj.updateToDataset();
        		this.fnSearchUser(obj.name);
        	}
        }

        this.divViewCompBody02_grdRfqPtnr_oncelldblclick = function(obj,e)
        {
        	if( gfnGrdBindColId(obj, obj.getCellPos()) == "PTNR_NM"){
        		var sArg = {
        						agv_id:this.dsRfqPtnr.getColumn(e.row,"PTNR_ID")
        					};
        		gfnModalPop(this, "BPtnrInfoPopup", "CPOP::BPtnrInfoPopup.xfdl", sArg, "fnPopCallBack", 570, 465);
        	}
        }

        this.fnRfqItemClick = function(obj,e)
        {
        	if(obj.getCurEditType() == "button"&&e.col=="7"){
        		ItemListRow = e.row;
        		var sArg = {
        						agv_rmk:this.dsRfqItemList.getColumn(e.row,"RMARK")
        						,agv_Yn:"Y"
        						,agv_title:""
        					};
        		
        		gfnModalPop(this, "BRfqRmkPopup", "BRFQ::BRfqRmkPop.xfdl", sArg, "fnPopCallBack", 500, 300);
        	}
        }

        this.fnRfqItem_onexpanddown = function(obj,e)
        {
        	if( gfnGrdBindColId(obj, e.cell) == "RFQ_AMT"){
        		var sArg = { agv_data : this.dsRfqItemTco
        					,agv_rfq_ptnr_id : this.dsRfqItemList.getColumn(e.row,"RFQ_PTNR_ID")
        					,agv_rfq_item_id : this.dsRfqItemList.getColumn(e.row,"RFQ_REQ_ITEM_ID")
        					};
        		gfnModalPop(this, "BRfqTcoDetailPopup", "BRFQ::BRfqTcoDetailPop.xfdl", sArg, "fnPopCallBack", 850, 300);
        	}else if( gfnGrdBindColId(obj, e.cell) == "EXP_AMT"){
        		var sArg = { agv_data : this.dsRfqPtnrItemExp
        					,agv_rfq_ptnr_id : this.dsRfqItemList.getColumn(e.row,"RFQ_PTNR_ID")
        					,agv_rfq_item_id : this.dsRfqItemList.getColumn(e.row,"PTNR_RFQ_ITEM_ID")
        					};
        		gfnModalPop(this, "BRfqExpPopup", "BRFQ::BRfqExpPopup.xfdl", sArg, "fnPopCallBack", 400, 300);
        	}
        }

        this.tabRfq_tabRfqInfo_divViewCompBody02_grdRfqPtnr_oncelldblclick = function(obj,e)
        {
        	if( gfnGrdBindColId(obj, obj.getCellPos()) == "PTNR_NM"){
        		var sArg = {
        						agv_id:this.dsRfqPtnr.getColumn(e.row,"PTNR_ID")
        					};
        		gfnModalPop(this, "BPtnrInfoPopup", "CPOP::BPtnrInfoPopup.xfdl", sArg, "fnPopCallBack", 570, 465);
        	}
        }

        this.tabRfq_tabRfqInfo_divViewCompBody02_grdRfqPtnr_oncellclick = function(obj,e)
        {
        	if(obj.getCurEditType() == "button"){
        		var sArg = {
        						agv_rmk:this.dsRfqPtnr.getColumn(e.row,"EXT_CNDTN")
        						,agv_Yn:"Y"
        						,agv_title:gfnMultiLabel("EPRO_LABEL_01150")
        					};
        		
        		gfnModalPop(this, "BRfqRmkPopup", "BRFQ::BRfqRmkPop.xfdl", sArg, "fnPopCallBack", 500, 300);
        	}
        }

        this.tabRfq_tabRfqInfo_divViewCompBody01_grdRfqItem_oncelldblclick = function(obj,e)
        {
        	if( gfnGrdBindColId(obj, obj.getCellPos()) == "MTRL_CD"&&!gfnIsNull(this.dsRfqItemList.getColumn(e.row,"MTRL_CD"))){
        		var sArg = {
        						agv_id:this.dsRfqItemList.getColumn(e.row,"MTRL_CD")
        					};
        		gfnModalPop(this, "BMtrlInfoPopup", "CPOP::BMtrlInfoPopup.xfdl", sArg, "fnPopCallBack", 700, 350);
        	}
        }

        this.divViewCompBody03_tabRfq_tabRfqInfo_divViewCompBody01_grdRfqItem_oncellclick = function(obj,e)
        {
        	if(obj.getCurEditType() == "button"){
        		var sArg = {
        						agv_rmk:this.dsRfqItemList.getColumn(e.row,"RMARK")
        						,agv_Yn:"Y"
        					};
        		
        		gfnModalPop(this, "BRfqRmkPopup", "BRFQ::BRfqRmkPop.xfdl", sArg, "fnPopCallBack", 500, 300);
        	}
        }
        /*
          *	@function	fnCellClick
          *	@desc       입찰요청파일 첨부파일 버튼 클릭 이벤트
          */
        this.fnCellClick = function(obj,e)
        {
        	if(e.col == 4){
        		var rows = obj.currentrow;
        		var downUrl = application.gvDomain + "/controller/updown/downFile?fileName="+this.dsRfqReqFile.getColumn(rows,"PHY_FILE_NM")+"&lgclFileNm="+escape(encodeURIComponent(this.dsRfqReqFile.getColumn(rows,"LGCL_FILE_NM")))+"&filePathId="+this.dsRfqReqFile.getColumn(rows,"FILE_PATH_ID");
        		system.execBrowser(downUrl);
        	}
        }

        this.getEvalRate = function(type)
        {
        	return this.dsRfq.getColumn(0,type);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsRfq.addEventHandler("oncolumnchanged", this.fnDateChange, this);
            this.dsRfqItemList.addEventHandler("oncolumnchanged", this.fnChangeCell, this);
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.addEventHandler("onload", this.fnOnload, this);
            this.divViewCompTitle00.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompBody02.grdList.addEventHandler("onexpandup", this.grdOnexpandUp, this);
            this.divViewCompBody02.grdList.addEventHandler("onkeydown", this.grdOnkeydown, this);
            this.divViewCompBody02.grdList.addEventHandler("ontextchanged", this.grdOntextchanged, this);
            this.divViewCompTitle03.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompBody03.tabRfq.addEventHandler("onchanged", this.div_21_Tab01_onchanged, this);
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.edtRfqOdr.addEventHandler("oneditclick", this.div_21_RMARK_tabp01_RFQ_ODR_oneditclick, this);
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.cboIncoterms.addEventHandler("onitemchanged", this.div_21_Tab01_tabp01_cb_RfqOpen_onitemchanged, this);
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody00.cboEvalType.addEventHandler("onitemchanged", this.fnCboEvalType_onitemchanged, this);
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody02.grdRfqPtnr.addEventHandler("oncellclick", this.tabRfq_tabRfqInfo_divViewCompBody02_grdRfqPtnr_oncellclick, this);
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody02.grdRfqPtnr.addEventHandler("oncelldblclick", this.tabRfq_tabRfqInfo_divViewCompBody02_grdRfqPtnr_oncelldblclick, this);
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody01.grdRfqItem.addEventHandler("oncellclick", this.divViewCompBody03_tabRfq_tabRfqInfo_divViewCompBody01_grdRfqItem_oncellclick, this);
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody01.grdRfqItem.addEventHandler("oncelldblclick", this.tabRfq_tabRfqInfo_divViewCompBody01_grdRfqItem_oncelldblclick, this);
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody01.grdRfqItem.addEventHandler("onexpanddown", this.fnRfqItem_onexpanddown, this);
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompTitle00.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompTitle01.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompBody03.tabRfq.tabRfqInfo.divViewCompBody03.grdRfqPtnrFile.addEventHandler("oncellclick", this.fnCellClick, this);
            this.divViewCompBody03.tabRfq.tabp03.txt_mjrCstmr.addEventHandler("oneditclick", this.Tab01_tabp01_TextArea00_oneditclick, this);
            this.divViewCompTitle04.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompTitle02.btnDel.addEventHandler("onclick", this.fnDelUser, this);
            this.divViewCompTitle02.btnAdd.addEventHandler("onclick", this.fnAddUser, this);
            this.divViewCompTitle02.btnUp.addEventHandler("onclick", this.fnMove, this);
            this.divViewCompTitle02.btnDown.addEventHandler("onclick", this.fnMove, this);

        };

        this.loadIncludeScript("BAprvDetailRfqAls.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
