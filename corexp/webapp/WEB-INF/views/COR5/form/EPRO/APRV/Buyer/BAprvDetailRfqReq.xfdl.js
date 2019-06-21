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
                this.set_titletext("승인상세(입찰요청)");
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

            obj = new Dataset("dsRfqTco", this);
            obj._setContents("<ColumnInfo><Column id=\"RFQ_REQ_ITEM_ID\" size=\"256\" type=\"STRING\"/><Column id=\"TCO_YR\" size=\"256\" type=\"STRING\"/><Column id=\"QTY\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"ROWNUM\" size=\"256\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM22", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdET14", this);
            obj._setContents("");
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
            obj = new Static("staViewCompTitle00", "absolute", "0", "0", "167", "24", null, null, this.divViewCompTitle00);
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
            obj._setContents("<Formats><Format id=\"MMODE\"><Columns><Column band=\"left\" size=\"40\"/><Column size=\"53\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"267\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row band=\"head\" size=\"33\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell style=\"align:center;\"/><Cell col=\"1\" expr=\"\" text=\"순번\"/><Cell col=\"2\" expr=\"\" text=\"승인자명\"/><Cell col=\"3\" expr=\"\" text=\"직책\"/><Cell col=\"4\" expr=\"\" text=\"부서\"/><Cell col=\"5\" expr=\"\" text=\"전화번호\"/><Cell col=\"6\" expr=\"\" text=\"승인유형\"/><Cell col=\"7\" expr=\"\" text=\"승인의견\"/><Cell col=\"8\" expr=\"\" text=\"승인상태\"/><Cell col=\"9\" expr=\"\" text=\"승인일시\"/></Band><Band id=\"body\" style=\"cellpadding: ;\"><Cell displaytype=\"expr:UP_YN == 'N'  ? 'none' : 'checkbox'\" editdisplay=\"display\" edittype=\"expr:UP_YN == 'N'  ? 'none' : 'checkbox'\" expandshow=\"hide\" style=\"background2: ;\" text=\"bind:CHECKED\"/><Cell col=\"1\" style=\"align: ;\" text=\"bind:APRV_ORDR\"/><Cell col=\"2\" edittype=\"expr:UP_YN == 'N'  ? 'none' : 'text'\" expandimage=\"URL('img::grd_WF_Expand.png')\" expandshow=\"expr:UP_YN == 'N'  ? 'hide' : 'show'\" expandsize=\"28\" style=\"align:left;\" text=\"bind:APRVR_NM\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:PSTN\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:DEPT_NM\"/><Cell col=\"5\" text=\"bind:TEL\"/><Cell col=\"6\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" combodataset=\"dsCdAP14\" displaytype=\"combo\" style=\"align: ;\" text=\"bind:CD_APP_TYPE\"/><Cell autosizerow=\"limitmin\" calendardisplaynulltype=\"none\" col=\"7\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:OPNN\" wordwrap=\"char\"/><Cell col=\"8\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" combodataset=\"dsCdAP13\" displaytype=\"combo\" text=\"bind:CD_APRV_LN_STTS\"/><Cell calendardisplaynulltype=\"none\" col=\"9\" displaytype=\"date\" mask=\"yyyy-MM-dd HH:mm:ss\" style=\"align: ;\" text=\"bind:APRV_DT\"/></Band></Format><Format id=\"VMODE\"><Columns><Column size=\"53\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"267\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row band=\"head\" size=\"33\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"순번\"/><Cell col=\"1\" expr=\"\" text=\"승인자명\"/><Cell col=\"2\" expr=\"\" text=\"직책\"/><Cell col=\"3\" expr=\"\" text=\"부서\"/><Cell col=\"4\" expr=\"\" text=\"전화번호\"/><Cell col=\"5\" expr=\"\" text=\"승인유형\"/><Cell col=\"6\" expr=\"\" text=\"승인의견\"/><Cell col=\"7\" expr=\"\" text=\"승인상태\"/><Cell col=\"8\" expr=\"\" text=\"승인일시\"/></Band><Band id=\"body\"><Cell style=\"align: ;\" text=\"bind:APRV_ORDR\"/><Cell col=\"1\" edittype=\"none\" style=\"align:left;\" text=\"bind:APRVR_NM\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:PSTN\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:DEPT_NM\"/><Cell col=\"4\" text=\"bind:TEL\"/><Cell col=\"5\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" combodataset=\"dsCdAP14\" displaytype=\"combo\" style=\"align: ;\" text=\"bind:CD_APP_TYPE\"/><Cell autosizerow=\"limitmin\" calendardisplaynulltype=\"none\" col=\"6\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:OPNN\" wordwrap=\"char\"/><Cell col=\"7\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" combodataset=\"dsCdAP13\" displaytype=\"combo\" text=\"bind:CD_APRV_LN_STTS\"/><Cell calendardisplaynulltype=\"none\" col=\"8\" displaytype=\"date\" mask=\"yyyy-MM-dd HH:mm:ss\" style=\"align: ;\" text=\"bind:APRV_DT\"/></Band></Format></Formats>");
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

            obj = new Div("divViewCompBody03", "absolute", "0", "662", null, "1160", "15", null, this);
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.set_taborder("112");
            this.addChild(obj.name, obj);
            obj = new Div("divViewCompBody00", "absolute", "1", "29", null, "337", "1", null, this.divViewCompBody03);
            obj.getSetter("objNm").set("DIV-헤더 상세");
            obj.set_scrollbars("none");
            obj.set_taborder("0");
            this.divViewCompBody03.addChild(obj.name, obj);
            obj = new Tab("tabRfqInfo", "absolute", "0%", "0", null, "334", "0%", null, this.divViewCompBody03.divViewCompBody00);
            obj.getSetter("objNm").set("입찰요청서 TAB");
            obj.set_scrollbars("autoboth");
            obj.set_tabindex("0");
            obj.set_taborder("0");
            this.divViewCompBody03.divViewCompBody00.addChild(obj.name, obj);
            obj = new Tabpage("tabRfq", this.divViewCompBody03.divViewCompBody00.tabRfqInfo);
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("기본정보");
            obj.set_scrollbars("none");
            obj.style.set_background("white");
            obj.set_text("기본정보");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "37", null, "33", "0", null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("130");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staRfqCloseTime", "absolute", "422", "42", "28", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.getSetter("objNm").set("입찰마감시");
            obj.set_taborder("131");
            obj.set_text("시");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Calendar("calRfqCloseTime", "absolute", "357", "42", "60", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj.set_dateformat("HH");
            obj.set_editformat("HH");
            obj.set_locale("en_US");
            obj.getSetter("objNm").set("입찰마감시");
            obj.set_taborder("132");
            obj.set_type("spin");
            obj = new Static("staRfqCloseDay", "absolute", "313", "42", "44", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.getSetter("objNm").set("입찰마감일");
            obj.set_taborder("133");
            obj.set_text("일");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Calendar("cldRfqCloseDay", "absolute", "176", "42", "131", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj.set_cssclass("cal_default");
            obj.set_locale("en_US");
            obj.getSetter("objNm").set("입찰마감일");
            obj.set_taborder("134");
            obj = new Static("staRfqCloseDT", "absolute", "0", "37", "171", "33", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("입찰마감일시");
            obj.set_taborder("135");
            obj.set_text("입찰마감일시");
            obj.set_usedecorate("true");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "69", null, "33", "0", null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("136");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Combo("cboCdBidUnit", "absolute", "805", "74", "184", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_innerdataset("dsCdET23");
            obj.getSetter("objNm").set("응찰단위");
            obj.set_taborder("137");
            obj = new Static("staCdBidUnit", "absolute", "629", "69", "171", "33", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("응찰단위");
            obj.set_taborder("138");
            obj.set_text("응찰단위");
            obj.set_usedecorate("true");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Combo("cboCdRfqAim", "absolute", "176", "74", "250", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj.set_codecolumn("CD_ID");
            obj.set_cssclass("cbo_default");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_innerdataset("dsCdET27");
            obj.getSetter("objNm").set("입찰목적");
            obj.set_taborder("139");
            obj = new Static("staCdRfqAim", "absolute", "0", "69", "171", "33", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("입찰목적");
            obj.set_taborder("140");
            obj.set_text("입찰목적");
            obj.set_usedecorate("true");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staViewCompLine03", "absolute", "0", "101", null, "33", "0", null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("141");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Combo("cboCdRfqCrnc", "absolute", "805", "105", "184", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_innerdataset("dsCdCM15");
            obj.getSetter("objNm").set("입찰통화");
            obj.set_taborder("142");
            obj = new Static("staCdRfqCrnc", "absolute", "629", "101", "171", "33", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("입찰통화");
            obj.set_taborder("143");
            obj.set_text("제출통화");
            obj.set_usedecorate("true");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new MaskEdit("edtGoalamt", "absolute", "176", "105", "249", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_autoselect("true");
            obj.set_mask("#,##0");
            obj.getSetter("objNm").set("구매예상가");
            obj.set_readonly("true");
            obj.style.set_color("blue");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 10 Dotum");
            obj.set_taborder("144");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staGoalamt", "absolute", "0%", "101", "171", "33", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("총금액");
            obj.set_taborder("145");
            obj.set_text("구매예상가");
            obj.set_usedecorate("true");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staViewCompLine05", "absolute", "0", "133", null, "33", "0", null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("146");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staViewCompLine06", "absolute", "0", "165", null, "33", "0", null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("147");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staViewCompLine07", "absolute", "0", "229", null, "33", "0", null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("148");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Radio("cboEvalType", "absolute", "176", "233", "418", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            var cboEvalType_innerdataset = new Dataset("cboEvalType_innerdataset", this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.cboEvalType);
            cboEvalType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">가격평가</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">종합평가</Col></Row></Rows>");
            obj.set_innerdataset(cboEvalType_innerdataset);
            obj.set_codecolumn("CD_ID");
            obj.set_columncount("3");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_direction("vertical");
            obj.set_innerdataset("dsCdET14");
            obj.getSetter("objNm").set("평가구분");
            obj.set_rowcount("1");
            obj.set_taborder("149");
            obj = new Static("staEvalType", "absolute", "0", "229", "171", "33", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("평가구분");
            obj.set_taborder("150");
            obj.set_text("평가구분");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staViewCompLine08", "absolute", "0", "261", null, "33", "0", null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("151");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staEvalRate", "absolute", "0", "261", "171", "33", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("평가비율");
            obj.set_taborder("167");
            obj.set_text("평가비율");
            obj.set_usedecorate("true");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "5", null, "33", "0", null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("168");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staTtl", "absolute", "0%", "5", "171", "33", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("입찰요청명");
            obj.set_taborder("169");
            obj.set_text("입찰요청명");
            obj.set_usedecorate("true");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Edit("edtTtl", "absolute", "176", "9", "622", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("입찰요청명");
            obj.set_taborder("170");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Edit("edtRrqOdr", "absolute", "803", "9", "40", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.getSetter("objNm").set("입찰차수");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.style.setStyleValue("font", "disabled", "bold 9 Dotum");
            obj.set_taborder("171");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staRfqOdr", "absolute", "848", "9", "175", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.getSetter("objNm").set("입찰차수");
            obj.set_taborder("172");
            obj.set_text("회차");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staOption", "absolute", "0%", "133", "171", "33", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("입찰옵션");
            obj.set_taborder("173");
            obj.set_text("입찰옵션");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new CheckBox("chkAltBdgtOpen", "absolute", "176", "137", "182", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_cssclass("chk_default");
            obj.set_falsevalue("N");
            obj.getSetter("objNm").set("예가공개 여부");
            obj.set_taborder("174");
            obj.set_text("예가공개");
            obj.set_truevalue("Y");
            obj.set_value("N");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new CheckBox("chkAltTargCorpOpen", "absolute", "357", "137", "204", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_cssclass("chk_default");
            obj.set_falsevalue("N");
            obj.getSetter("objNm").set("대상업체공개 여부");
            obj.set_taborder("175");
            obj.set_text("대상업체공개");
            obj.set_truevalue("Y");
            obj.set_value("N");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staRfqCloseTimeMin", "absolute", "517", "42", "28", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.getSetter("objNm").set("입찰마감시");
            obj.set_taborder("176");
            obj.set_text("분");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staViewCompLine04", "absolute", "0", "197", null, "33", "0", null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("177");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staIncoterms", "absolute", "629", "133", "171", "33", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("Incoerms");
            obj.set_taborder("178");
            obj.set_text("Incoterms");
            obj.set_usedecorate("true");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Combo("cboIncoterms", "absolute", "805", "137", "184", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            var cboIncoterms_innerdataset = new Dataset("cboIncoterms_innerdataset", this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.cboIncoterms);
            cboIncoterms_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">전체공개</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">제한공개</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미공개</Col></Row></Rows>");
            obj.set_innerdataset(cboIncoterms_innerdataset);
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_innerdataset("dsCdCM22");
            obj.getSetter("objNm").set("Incoterms");
            obj.set_taborder("179");
            obj = new Static("staAltLowFailAply", "absolute", "0", "165", "171", "33", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("하한유찰가");
            obj.set_taborder("180");
            obj.set_text("하한유찰가");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new CheckBox("chkAltLowFailAply", "absolute", "176", "169", "92", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_cssclass("chk_default");
            obj.set_falsevalue("N");
            obj.getSetter("objNm").set("하한유찰가");
            obj.set_taborder("181");
            obj.set_text("하한유찰가");
            obj.set_truevalue("Y");
            obj.set_value("N");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staRfqOdr10", "absolute", "408", "170", "21", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.getSetter("objNm").set("하한유찰가원");
            obj.set_taborder("182");
            obj.set_text("원");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staAltRfqPriceSbmt", "absolute", "0", "197", "171", "33", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("입찰가제출");
            obj.set_taborder("183");
            obj.set_text("가격제출");
            obj.set_usedecorate("true");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staTcoBgnYr", "absolute", "629", "197", "171", "33", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("시작년도");
            obj.set_taborder("184");
            obj.set_text("시작년도");
            obj.set_usedecorate("true");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Edit("edtTcoBgnYr", "absolute", "805", "202", "133", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.getSetter("objNm").set("시작년도");
            obj.style.set_align("right middle");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.style.setStyleValue("font", "disabled", "bold 9 Dotum");
            obj.set_taborder("185");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Edit("edtTcoYr", "absolute", "943", "202", "46", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.getSetter("objNm").set("년도횟수");
            obj.style.set_align("right middle");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.style.setStyleValue("font", "disabled", "bold 9 Dotum");
            obj.set_taborder("186");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staRfqOdr00", "absolute", "994", "202", "21", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.getSetter("objNm").set("시작년도 횟수");
            obj.set_taborder("187");
            obj.set_text("회");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new CheckBox("chkAltRfqPriceSbmt", "absolute", "176", "202", "204", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_cssclass("chk_default");
            obj.set_falsevalue("N");
            obj.getSetter("objNm").set("가격미제출 여부");
            obj.set_taborder("188");
            obj.set_text("가격 미제출");
            obj.set_truevalue("Y");
            obj.set_value("N");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new MaskEdit("mskRfqLowAmt", "absolute", "286", "169", "117", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_mask("9,999");
            obj.set_taborder("189");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new MaskEdit("mskRfqCloseTimeMIN", "absolute", "451", "42", "61", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_mask("##");
            obj.set_maskchar(" ");
            obj.getSetter("objNm").set("입찰마감 분");
            obj.set_taborder("190");
            obj.set_type("string");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staRtQ", "absolute", "172", "261", "52", "33", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.getSetter("objNm").set("품질");
            obj.style.set_align("right middle");
            obj.set_taborder("191");
            obj.set_text("품질");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Edit("edtRtQ", "absolute", "229", "266", "40", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_maxlength("3");
            obj.getSetter("objNm").set("품질");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.style.setStyleValue("font", "disabled", "bold 9 Dotum");
            obj.set_taborder("192");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staRfqOdr05", "absolute", "275", "266", "21", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.getSetter("objNm").set("평가비율품질%");
            obj.set_taborder("193");
            obj.set_text("%");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staRtP", "absolute", "292", "261", "41", "33", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.getSetter("objNm").set("가격");
            obj.style.set_align("right middle");
            obj.set_taborder("194");
            obj.set_text("가격");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Edit("edtRtP", "absolute", "338", "266", "40", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_maxlength("3");
            obj.getSetter("objNm").set("가격");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.style.setStyleValue("font", "disabled", "bold 9 Dotum");
            obj.set_taborder("195");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staRfqOdr06", "absolute", "384", "266", "21", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.getSetter("objNm").set("평가비율가격%");
            obj.set_taborder("196");
            obj.set_text("%");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staRtC", "absolute", "400", "261", "80", "33", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.getSetter("objNm").set("원가절감");
            obj.style.set_align("right");
            obj.set_taborder("197");
            obj.set_text("원가절감");
            obj.set_wordwrap("english");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Edit("edtRtC", "absolute", "486", "266", "40", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_maxlength("3");
            obj.getSetter("objNm").set("원가절감");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.style.setStyleValue("font", "disabled", "bold 9 Dotum");
            obj.set_taborder("198");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staPer01", "absolute", "532", "261", "20", "33", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.getSetter("objNm").set("평가비율원가절감%");
            obj.set_taborder("199");
            obj.set_text("%");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staRtT", "absolute", "554", "261", "76", "33", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.getSetter("objNm").set("기술");
            obj.style.set_align("right middle");
            obj.set_taborder("200");
            obj.set_text("기술");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Edit("edtRtT", "absolute", "635", "266", "40", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_maxlength("3");
            obj.getSetter("objNm").set("기술");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.style.setStyleValue("font", "disabled", "bold 9 Dotum");
            obj.set_taborder("201");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staRfqOdr07", "absolute", "681", "266", "21", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.getSetter("objNm").set("평가비율기술%");
            obj.set_taborder("202");
            obj.set_text("%");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staRtD", "absolute", "703", "261", "60", "33", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.getSetter("objNm").set("납기");
            obj.style.set_align("right middle");
            obj.set_taborder("203");
            obj.set_text("납기");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Edit("edtRtD", "absolute", "768", "266", "40", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_maxlength("3");
            obj.getSetter("objNm").set("납기");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.style.setStyleValue("font", "disabled", "bold 9 Dotum");
            obj.set_taborder("204");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staRfqOdr08", "absolute", "814", "266", "21", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.getSetter("objNm").set("평가비율납기%");
            obj.set_taborder("205");
            obj.set_text("%");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staRtF", "absolute", "831", "261", "92", "33", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.getSetter("objNm").set("재무");
            obj.style.set_align("right middle");
            obj.set_taborder("206");
            obj.set_text("재무");
            obj.set_wordwrap("english");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Edit("edtRtF", "absolute", "928", "266", "40", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.set_maxlength("3");
            obj.getSetter("objNm").set("재무");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.style.setStyleValue("font", "disabled", "bold 9 Dotum");
            obj.set_taborder("207");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Static("staRfqOdr09", "absolute", "973", "266", "21", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.getSetter("objNm").set("평가비율재무%");
            obj.set_taborder("208");
            obj.set_text("%");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Edit("edtIncoterms2", "absolute", "995", "137", "198", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq);
            obj.getSetter("objNm").set("incoterms2");
            obj.style.set_align("left middle");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.style.setStyleValue("font", "disabled", "bold 9 Dotum");
            obj.set_taborder("209");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addChild(obj.name, obj);
            obj = new Tabpage("tabRfqRmark", this.divViewCompBody03.divViewCompBody00.tabRfqInfo);
            obj.getSetter("objNm").set("특기사항");
            obj.set_scrollbars("none");
            obj.style.set_background("white");
            obj.set_text("특이사항");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.addChild(obj.name, obj);
            obj = new TextArea("txaRmark", "absolute", "0", "5", null, null, "0", "10", this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfqRmark);
            obj.getSetter("objNm").set("특이사항");
            obj.set_scrollbars("autovert");
            obj.set_taborder("0");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfqRmark.addChild(obj.name, obj);
            obj = new Tabpage("tabp03", this.divViewCompBody03.divViewCompBody00.tabRfqInfo);
            obj.set_text("첨부파일");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.addChild(obj.name, obj);
            obj = new Div("divFile", "absolute", "3", "10", null, "250", "7", null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp03);
            obj.getSetter("objNm").set("첨부파일");
            obj.set_taborder("0");
            obj.set_url("CCOMP::CompNFileUpDown.xfdl");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp03.addChild(obj.name, obj);
            obj = new Tabpage("tabp04", this.divViewCompBody03.divViewCompBody00.tabRfqInfo);
            obj.getSetter("objNm").set("공개설명회");
            obj.style.set_background("white");
            obj.set_text("공개설명회");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.addChild(obj.name, obj);
            obj = new Radio("rdo_AltRfqOpen", "absolute", "436", "-37", "251", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04);
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.addChild(obj.name, obj);
            var rdo_AltRfqOpen_innerdataset = new Dataset("rdo_AltRfqOpen_innerdataset", this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.rdo_AltRfqOpen);
            rdo_AltRfqOpen_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">실시</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미실시</Col></Row></Rows>");
            obj.set_innerdataset(rdo_AltRfqOpen_innerdataset);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enableevent("false");
            obj.getSetter("objNm").set("공개설명회실시 여부");
            obj.set_taborder("96");
            obj = new Static("staViewCompLine00", "absolute", "0", "5", null, "33", "0", null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("99");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "37", null, "33", "0", null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("100");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "69", null, "33", "0", null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("101");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.addChild(obj.name, obj);
            obj = new Static("st_Ttl01", "absolute", "0%", "5", "171", "33", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("발주서명");
            obj.set_taborder("102");
            obj.set_text("공개설명회");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.addChild(obj.name, obj);
            obj = new Static("st_Ttl", "absolute", "0%", "37", "171", "33", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("발주서명");
            obj.set_taborder("103");
            obj.set_text("설명회 일시");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.addChild(obj.name, obj);
            obj = new Calendar("cal_openExplnDay", "absolute", "176", "41", "120", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04);
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.addChild(obj.name, obj);
            obj.set_dateformat("yyyy.MM.dd");
            obj.set_editformat("yyyy.MM.dd");
            obj.set_locale("en_US");
            obj.getSetter("objNm").set("공객설명회일자");
            obj.set_taborder("104");
            obj = new Static("Static02", "absolute", "302", "41", "24", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04);
            obj.set_taborder("105");
            obj.set_text("일");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "440", "41", "60", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04);
            obj.set_taborder("107");
            obj.set_text("시");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.addChild(obj.name, obj);
            obj = new Static("st_CrtrNm", "absolute", "0%", "69", "171", "33", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("구매조직");
            obj.set_taborder("110");
            obj.set_text("장소");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.addChild(obj.name, obj);
            obj = new Edit("edt_openExplnArea", "absolute", "176", "74", "1021", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04);
            obj.set_autoselect("true");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("설명회 장소");
            obj.set_taborder("111");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.addChild(obj.name, obj);
            obj = new Static("staViewCompLine03", "absolute", "0", "101", null, "80", "0", null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("112");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.addChild(obj.name, obj);
            obj = new Static("ed_PoAmt", "absolute", "0%", "101", "171", "80", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("총금액");
            obj.set_taborder("113");
            obj.set_text("참여조건");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.addChild(obj.name, obj);
            obj = new TextArea("txt_openExplnAttnCndtn", "absolute", "176", "106", "1021", "70", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04);
            obj.getSetter("objNm").set("공개설명회 참여조건");
            obj.set_scrollbars("none");
            obj.set_taborder("114");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.addChild(obj.name, obj);
            obj = new CheckBox("chkAltOpenExpln", "absolute", "176", "10", "204", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04);
            obj.set_cssclass("chk_default");
            obj.set_falsevalue("N");
            obj.getSetter("objNm").set("공개설명회실시여부");
            obj.set_taborder("115");
            obj.set_text("공개설명회 실시");
            obj.set_truevalue("Y");
            obj.set_value("N");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.addChild(obj.name, obj);
            obj = new Calendar("calOpenExplnTimte", "absolute", "330", "41", "104", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04);
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.addChild(obj.name, obj);
            obj.set_dateformat("HH:mm");
            obj.set_editformat("HH:mm");
            obj.set_locale("en_US");
            obj.getSetter("objNm").set("설명회시간");
            obj.set_taborder("116");
            obj.set_type("spin");
            obj.set_value("null");
            obj = new Tabpage("tabp05", this.divViewCompBody03.divViewCompBody00.tabRfqInfo);
            obj.getSetter("objNm").set("입찰 담당자");
            obj.style.set_background("white");
            obj.set_text("입찰 담당자  ");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "5", null, "33", "0", null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("64");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "37", null, "33", "0", null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("65");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "69", null, "33", "0", null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("66");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05.addChild(obj.name, obj);
            obj = new Static("staViewCompLine03", "absolute", "0", "101", null, "33", "0", null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("67");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05.addChild(obj.name, obj);
            obj = new Static("st_MtrlCd", "absolute", "0", "5", "171", "33", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05);
            obj.set_cssclass("sta_WF_Label");
            obj.set_taborder("68");
            obj.set_text("담당자");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05.addChild(obj.name, obj);
            obj = new Edit("edt_ChrgrId", "absolute", "176", "9", "100", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05);
            obj.set_cssclass("edt_default");
            obj.set_enable("true");
            obj.getSetter("objNm").set("입찰담당자ID");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_taborder("69");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05.addChild(obj.name, obj);
            obj = new Edit("edt_chrgrNm", "absolute", "281", "9", "272", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05);
            obj.set_cssclass("edt_default");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("입찰담당자명");
            obj.set_taborder("70");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05.addChild(obj.name, obj);
            obj = new Static("st_MtrlCd00", "absolute", "0", "37", "171", "33", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05);
            obj.set_cssclass("sta_WF_Label");
            obj.set_taborder("72");
            obj.set_text("전화번호");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05.addChild(obj.name, obj);
            obj = new Edit("edt_tel", "absolute", "176", "41", "400", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05);
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("전화번호");
            obj.set_taborder("73");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05.addChild(obj.name, obj);
            obj = new Static("st_MtrlCd01", "absolute", "0", "69", "171", "33", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05);
            obj.set_cssclass("sta_WF_Label");
            obj.set_taborder("74");
            obj.set_text("e-Mail");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05.addChild(obj.name, obj);
            obj = new Edit("edt_email", "absolute", "176", "74", "400", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05);
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("이메일");
            obj.set_taborder("75");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05.addChild(obj.name, obj);
            obj = new Static("st_MtrlCd02", "absolute", "0", "101", "171", "33", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05);
            obj.set_cssclass("sta_WF_Label");
            obj.set_taborder("76");
            obj.set_text("Fax");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05.addChild(obj.name, obj);
            obj = new Edit("edt_fax", "absolute", "176", "105", "400", "24", null, null, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05);
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("팩스");
            obj.set_taborder("77");
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05.addChild(obj.name, obj);
            obj = new Div("divViewCompBody01", "absolute", "1", "415", null, "202", "1", null, this.divViewCompBody03);
            obj.getSetter("objNm").set("DIV-품목 상세");
            obj.set_taborder("2");
            this.divViewCompBody03.addChild(obj.name, obj);
            obj = new Grid("grdRfqItem", "absolute", "0", "0", null, null, "0", "0", this.divViewCompBody03.divViewCompBody01);
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
            obj.getSetter("f_mode").set("N");
            obj.getSetter("f_save").set("N");
            obj.getSetter("f_sort").set("Y");
            obj.getSetter("objNm").set("품목정보");
            obj.set_taborder("2");
            obj._setContents("<Formats><Format id=\"Amode\"><Columns><Column size=\"96\"/><Column size=\"296\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"70\"/><Column size=\"55\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"품목코드\"/><Cell col=\"1\" expr=\"\" text=\"품목명\"/><Cell col=\"2\" expr=\"\" text=\"수량\"/><Cell col=\"3\" expr=\"\" text=\"단위\"/><Cell col=\"4\" expr=\"\" text=\"단가\"/><Cell col=\"5\" expr=\"\" text=\"구매목표가\"/><Cell col=\"6\" expr=\"\" text=\"납품요청일자\"/><Cell col=\"7\" expr=\"\" text=\"특이사항\"/><Cell col=\"8\" expr=\"\" text=\"파일\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:MTRL_CD\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:MTRL_NM\"/><Cell col=\"2\" edittype=\"none\" expandimage=\"URL('img::gridBtn__read.png')\" expandshow=\"show\" expandsize=\"20\" style=\"align:right;\" text=\"bind:QTY\"/><Cell col=\"3\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" combodataset=\"dsCdCM11\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:CD_UNIT\"/><Cell col=\"4\" displaytype=\"number\" mask=\"#,##0.####\" style=\"align:right;\" text=\"bind:GOALUNT_PRICE\"/><Cell col=\"5\" displaytype=\"number\" mask=\"#,###\" style=\"align:right;\" text=\"bind:GOALAMT\"/><Cell calendardisplaynulltype=\"none\" col=\"6\" displaytype=\"date\" edittype=\"none\" mask=\"yyyy-MM-dd\" style=\"align:center;\" text=\"bind:DLV_REQ_DAY\"/><Cell col=\"7\" displaytype=\"expr:RMARK==&quot;&quot;?'normal':(RMARK==null? 'normal':'button')\" edittype=\"expr:RMARK==&quot;&quot;?'none':(RMARK==null? 'none':'button')\" style=\"align:center middle;controlbackground:URL('img::gridBtn__read.png') center middle;controlborder:1 none #808080ff ;\" text=\" \"/><Cell col=\"8\" displaytype=\"expr:ATTCH_FILE_CNT&gt;0?'button':'normal'\" edittype=\"expr:ATTCH_FILE_CNT&gt;0?'button':'none'\" style=\"controlbackground:URL('img::grdBtn_file.png') center middle;controlborder:1 none #808080ff ;\" text=\" \"/></Band></Format><Format id=\"Bmode\"><Columns><Column size=\"96\"/><Column size=\"296\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"70\"/><Column size=\"55\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"품목코드\"/><Cell col=\"1\" expr=\"\" text=\"품목명\"/><Cell col=\"2\" expr=\"\" text=\"수량\"/><Cell col=\"3\" expr=\"\" text=\"단위\"/><Cell col=\"4\" expr=\"\" text=\"단가\"/><Cell col=\"5\" expr=\"\" text=\"구매목표가\"/><Cell col=\"6\" expr=\"\" text=\"납품요청일자\"/><Cell col=\"7\" expr=\"\" text=\"특이사항\"/><Cell col=\"8\" expr=\"\" text=\"파일\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:MTRL_CD\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:MTRL_NM\"/><Cell col=\"2\" edittype=\"none\" style=\"align:right;\" text=\"bind:QTY\"/><Cell col=\"3\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" combodataset=\"dsCdCM11\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:CD_UNIT\"/><Cell col=\"4\" displaytype=\"number\" mask=\"#,##0.####\" style=\"align:right;\" text=\"bind:GOALUNT_PRICE\"/><Cell col=\"5\" displaytype=\"number\" mask=\"#,###\" style=\"align:right;\" text=\"bind:GOALAMT\"/><Cell calendardisplaynulltype=\"none\" col=\"6\" displaytype=\"date\" edittype=\"none\" mask=\"yyyy-MM-dd\" style=\"align:center;\" text=\"bind:DLV_REQ_DAY\"/><Cell col=\"7\" displaytype=\"expr:RMARK==&quot;&quot;?'normal':(RMARK==null? 'normal':'button')\" edittype=\"expr:RMARK==&quot;&quot;?'none':(RMARK==null? 'none':'button')\" style=\"align:center middle;controlbackground:URL('img::gridBtn__read.png') center middle;controlborder:1 none #808080ff ;\" text=\" \"/><Cell col=\"8\" displaytype=\"expr:ATTCH_FILE_CNT&gt;0?'button':'normal'\" edittype=\"expr:ATTCH_FILE_CNT&gt;0?'button':'none'\" style=\"controlbackground:URL('img::grdBtn_file.png') center middle;controlborder:1 none #808080ff ;\" text=\" \"/></Band></Format></Formats>");
            this.divViewCompBody03.divViewCompBody01.addChild(obj.name, obj);
            obj = new Div("divViewCompTitle00", "absolute", "0", "0", null, "24", "0", null, this.divViewCompBody03);
            obj.getSetter("objNm").set("DIV-기본정보 타이틀");
            obj.set_taborder("3");
            this.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "0", "255", "24", null, null, this.divViewCompBody03.divViewCompTitle00);
            obj.set_cssclass("sta_WF_Subtitle02");
            obj.getSetter("objNm").set("기본정보타이틀");
            obj.set_taborder("0");
            obj.set_text("기본정보");
            this.divViewCompBody03.divViewCompTitle00.addChild(obj.name, obj);
            obj = new Div("divViewCompTitle01", "absolute", "0", "386", null, "24", "0", null, this.divViewCompBody03);
            obj.getSetter("objNm").set("DIV-품목정보 타이틀");
            obj.set_taborder("4");
            this.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle01", "absolute", "0", "0", "255", "24", null, null, this.divViewCompBody03.divViewCompTitle01);
            obj.set_cssclass("sta_WF_Subtitle02");
            obj.getSetter("objNm").set("품목정보타이틀");
            obj.set_taborder("0");
            obj.set_text("품목정보");
            this.divViewCompBody03.divViewCompTitle01.addChild(obj.name, obj);
            obj = new Div("divViewCompBody02", "absolute", "1", "666", null, "244", "1", null, this.divViewCompBody03);
            obj.getSetter("objNm").set("DIV-대상업체 상세");
            obj.set_scrollbars("none");
            obj.set_taborder("5");
            this.divViewCompBody03.addChild(obj.name, obj);
            obj = new Grid("grdRfqPtnr", "absolute", "0", "0", null, null, "0", "0", this.divViewCompBody03.divViewCompBody02);
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
            obj.getSetter("f_mode").set("N");
            obj.getSetter("f_save").set("N");
            obj.getSetter("f_sort").set("Y");
            obj.getSetter("objNm").set("대상협력사");
            obj.set_taborder("2");
            obj._setContents("<Formats><Format id=\"Bmode\"><Columns><Column size=\"103\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"185\"/><Column size=\"185\"/><Column size=\"185\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"협력사구분\"/><Cell col=\"1\" expr=\"\" text=\"VENDOR\"/><Cell col=\"2\" expr=\"\" text=\"사업자번호\"/><Cell col=\"3\" expr=\"\" text=\"협력사명\"/><Cell col=\"4\" expr=\"\" text=\"대표자명\"/><Cell col=\"5\" expr=\"\" text=\"제안설명회일자\"/><Cell col=\"6\" expr=\"\" text=\"제안설명회시간\"/><Cell col=\"7\" expr=\"\" text=\"제안설명회장소\"/></Band><Band id=\"body\"><Cell style=\"align:center middle;\" text=\"bind:CD_PORG_UNIT_STTS_NM\"/><Cell col=\"1\" text=\"bind:SAP_VENDOR\"/><Cell col=\"2\" mask=\"expr:BIZ_NO==null||BIZ_NO==&quot;&quot;?'':&quot;###-##-####&quot;\" maskchar=\" \" style=\"background: ;\" text=\"bind:BIZ_NO\"/><Cell col=\"3\" cssclass=\"cell_link\" style=\"align:left;\" text=\"bind:PTNR_NM\"/><Cell col=\"4\" style=\"align:center;\" text=\"bind:RPRSTV_NM\"/><Cell calendardisplaynulltype=\"none\" col=\"5\" displaytype=\"date\" edittype=\"none\" mask=\"yyyy-MM-dd\" style=\"align:center;\" text=\"bind:RFQ_EXPLN_DAY\"/><Cell calendardisplaynulltype=\"none\" col=\"6\" displaytype=\"date\" edittype=\"none\" mask=\"HH:mm\" style=\"align:center;\" text=\"bind:RFQ_EXPLN_TIME\"/><Cell col=\"7\" edittype=\"none\" style=\"align:left;\" text=\"bind:RFQ_EXPLN_AREA\"/></Band></Format></Formats>");
            this.divViewCompBody03.divViewCompBody02.addChild(obj.name, obj);
            obj = new Div("divViewCompTitle02", "absolute", "0", "637", null, "24", "10", null, this.divViewCompBody03);
            obj.getSetter("objNm").set("DIV-대상 협력사 타이틀");
            obj.set_taborder("6");
            this.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle02", "absolute", "0", "0", "255", null, null, "0", this.divViewCompBody03.divViewCompTitle02);
            obj.set_cssclass("sta_WF_Subtitle02");
            obj.getSetter("objNm").set("대상협력사타이틀");
            obj.set_taborder("8");
            obj.set_text("대상협력사");
            this.divViewCompBody03.divViewCompTitle02.addChild(obj.name, obj);
            obj = new Div("divViewCompBody03", "absolute", "1", "959", null, "164", "1", null, this.divViewCompBody03);
            obj.getSetter("objNm").set("DIV-입찰요청파일 상세");
            obj.set_scrollbars("none");
            obj.set_taborder("7");
            this.divViewCompBody03.addChild(obj.name, obj);
            obj = new Grid("grdRfqReqFile", "absolute", "0", "0", null, null, "0", "0", this.divViewCompBody03.divViewCompBody03);
            obj.set_autoenter("select");
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
            obj._setContents("<Formats><Format id=\"Bmode\"><Columns><Column size=\"382\"/><Column size=\"188\"/><Column size=\"146\"/><Column size=\"454\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"요청파일\"/><Cell col=\"1\" expr=\"\" text=\"파일유형\"/><Cell col=\"2\" expr=\"\" text=\"필수여부\"/><Cell col=\"3\" expr=\"\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:REQ_FILE_NM\"/><Cell calendardisplay=\"display\" calendardisplaynulltype=\"nullmask\" col=\"1\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" combodataset=\"dsCdCM32\" displaytype=\"combo\" edittype=\"none\" expandshow=\"show\" text=\"bind:CD_FILE_TYPE\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:ALT_MDT\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:RMARK\"/></Band></Format></Formats>");
            this.divViewCompBody03.divViewCompBody03.addChild(obj.name, obj);
            obj = new Div("divViewCompTitle03", "absolute", "0", "930", null, "24", "10", null, this.divViewCompBody03);
            obj.getSetter("objNm").set("DIV-입찰요청파일 타이틀");
            obj.set_taborder("8");
            this.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle03", "absolute", "0", "0", "255", "24", null, null, this.divViewCompBody03.divViewCompTitle03);
            obj.set_cssclass("sta_WF_Subtitle02");
            obj.getSetter("objNm").set("입찰요청파일타이틀");
            obj.set_taborder("6");
            obj.set_text("입찰요청파일");
            this.divViewCompBody03.divViewCompTitle03.addChild(obj.name, obj);

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
            obj = new Layout("default", "", 1042, 156, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq,
            	//-- Layout function
            	function(p) {
            		p.getSetter("lbcd").set("");
            		p.getSetter("objNm").set("기본정보");
            		p.set_scrollbars("none");
            		p.style.set_background("white");
            		p.set_text("기본정보");

            	}
            );
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfqRmark,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("특기사항");
            		p.set_scrollbars("none");
            		p.style.set_background("white");
            		p.set_text("특이사항");

            	}
            );
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfqRmark.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp03,
            	//-- Layout function
            	function(p) {
            		p.set_text("첨부파일");

            	}
            );
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("공개설명회");
            		p.style.set_background("white");
            		p.set_text("공개설명회");

            	}
            );
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("입찰 담당자");
            		p.style.set_background("white");
            		p.set_text("입찰 담당자  ");

            	}
            );
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 337, this.divViewCompBody03.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-헤더 상세");
            		p.set_scrollbars("none");
            		p.set_taborder("0");

            	}
            );
            this.divViewCompBody03.divViewCompBody00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1205, 187, this.divViewCompBody03.divViewCompBody01,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-품목 상세");
            		p.set_taborder("2");

            	}
            );
            this.divViewCompBody03.divViewCompBody01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompBody03.divViewCompTitle00,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-기본정보 타이틀");
            		p.set_taborder("3");

            	}
            );
            this.divViewCompBody03.divViewCompTitle00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompBody03.divViewCompTitle01,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-품목정보 타이틀");
            		p.set_taborder("4");

            	}
            );
            this.divViewCompBody03.divViewCompTitle01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 244, this.divViewCompBody03.divViewCompBody02,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-대상업체 상세");
            		p.set_scrollbars("none");
            		p.set_taborder("5");

            	}
            );
            this.divViewCompBody03.divViewCompBody02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompBody03.divViewCompTitle02,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-대상 협력사 타이틀");
            		p.set_taborder("6");

            	}
            );
            this.divViewCompBody03.divViewCompTitle02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 164, this.divViewCompBody03.divViewCompBody03,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-입찰요청파일 상세");
            		p.set_scrollbars("none");
            		p.set_taborder("7");

            	}
            );
            this.divViewCompBody03.divViewCompBody03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompBody03.divViewCompTitle03,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-입찰요청파일 타이틀");
            		p.set_taborder("8");

            	}
            );
            this.divViewCompBody03.divViewCompTitle03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 1160, this.divViewCompBody03,
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
            		p.set_titletext("승인상세(입찰요청)");

            	}
            );
            obj.set_stepcount("");
            obj.set_stepindex("");
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item13","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfqRmark.txaRmark","value","dsRfq","RMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabRfqInfoVi","divViewCompBody03.divViewCompBody00.tabRfqInfo","visible","dsObjBindVi","tabRfqInfo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabRfqInfoEn","divViewCompBody03.divViewCompBody00.tabRfqInfo","enable","dsObjBindEn","tabRfqInfo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabRfqVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq","visible","dsObjBindVi","tabRfq");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabRfqEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq","enable","dsObjBindEn","tabRfq");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sta_WFDA_Label05Vi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.sta_WFDA_Label05","visible","dsObjBindVi","sta_WFDA_Label05");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sta_WFDA_Label05En","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.sta_WFDA_Label05","enable","dsObjBindEn","sta_WFDA_Label05");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mae_goalamtVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.mae_goalamt","visible","dsObjBindVi","mae_goalamt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mae_goalamtEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.mae_goalamt","readonly","dsObjBindEn","mae_goalamt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabRfqRmarkVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfqRmark","visible","dsObjBindVi","tabRfqRmark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabRfqRmarkEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfqRmark","enable","dsObjBindEn","tabRfqRmark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp04Vi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04","visible","dsObjBindVi","tabp04");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp04En","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04","enable","dsObjBindEn","tabp04");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("rdo_AltRfqOpenVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.rdo_AltRfqOpen","visible","dsObjBindVi","rdo_AltRfqOpen");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("rdo_AltRfqOpenEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.rdo_AltRfqOpen","readonly","dsObjBindEn","rdo_AltRfqOpen");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabpage6Vi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05","visible","dsObjBindVi","tabpage6");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabpage6En","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05","enable","dsObjBindEn","tabpage6");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqCloseTimeVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRfqCloseTime","visible","dsObjBindVi","staRfqCloseTime");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqCloseTimeEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRfqCloseTime","enable","dsObjBindEn","staRfqCloseTime");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.calRfqCloseTime","value","dsRfq","RFQ_CLOSE_TIME_HR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqCloseDayVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRfqCloseDay","visible","dsObjBindVi","staRfqCloseDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqCloseDayEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRfqCloseDay","enable","dsObjBindEn","staRfqCloseDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.cldRfqCloseDay","value","dsRfq","RFQ_CLOSE_DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqCloseDTVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRfqCloseDT","visible","dsObjBindVi","staRfqCloseDT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqCloseDTEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRfqCloseDT","enable","dsObjBindEn","staRfqCloseDT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.cboCdBidUnit","value","dsRfq","CD_BID_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staCdBidUnit","visible","dsObjBindVi","staCdRfqCrnc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staCdBidUnit","enable","dsObjBindEn","staCdRfqCrnc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.cboCdRfqAim","value","dsRfq","CD_RFQ_AIM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCdRfqAimVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staCdRfqAim","visible","dsObjBindVi","staCdRfqAim");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCdRfqAimEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staCdRfqAim","enable","dsObjBindEn","staCdRfqAim");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.cboCdRfqCrnc","value","dsRfq","CD_RFQ_CRNC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCdRfqCrncVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staCdRfqCrnc","visible","dsObjBindVi","staCdRfqCrnc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCdRfqCrncEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staCdRfqCrnc","enable","dsObjBindEn","staCdRfqCrnc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.edtGoalamt","value","dsRfq","GOALAMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staEvalType","visible","dsObjBindVi","Undefined_8");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staEvalType","enable","dsObjBindEn","Undefined_8");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staEvalRate","visible","dsObjBindVi","staAltBdgtOpen");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staEvalRate","enable","dsObjBindEn","staAltBdgtOpen");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staTtl","visible","dsObjBindVi","staTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staTtl","enable","dsObjBindEn","staTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.edtTtl","value","dsRfq","TTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.edtRrqOdr","value","dsRfq","RFQ_ODR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdrVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr","visible","dsObjBindVi","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdrEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr","enable","dsObjBindEn","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Undefined_1Vi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staOption","visible","dsObjBindVi","Undefined_1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Undefined_1En","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staOption","enable","dsObjBindEn","Undefined_1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item67","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.chkAltBdgtOpen","value","dsRfq","ALT_BDGT_OPEN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.chkAltTargCorpOpen","value","dsRfq","ALT_TARG_CORP_OPEN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCdBidUnitVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staCdBidUnit","visible","dsObjBindVi","staCdBidUnit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCdBidUnitEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staCdBidUnit","enable","dsObjBindEn","staCdBidUnit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staGoalamtVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staGoalamt","visible","dsObjBindVi","staGoalamt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staGoalamtEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staGoalamt","enable","dsObjBindEn","staGoalamt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Undefined_00Vi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staEvalType","visible","dsObjBindVi","Undefined_00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Undefined_00En","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staEvalType","enable","dsObjBindEn","Undefined_00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAltBdgtOpen01Vi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staEvalRate","visible","dsObjBindVi","staAltBdgtOpen01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAltBdgtOpen01En","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staEvalRate","enable","dsObjBindEn","staAltBdgtOpen01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staOptionVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staOption","visible","dsObjBindVi","staOption");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staOptionEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staOption","enable","dsObjBindEn","staOption");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("st_Ttl01Vi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.st_Ttl01","visible","dsObjBindVi","st_Ttl01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("st_Ttl01En","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.st_Ttl01","enable","dsObjBindEn","st_Ttl01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("st_TtlVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.st_Ttl","visible","dsObjBindVi","st_Ttl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("st_TtlEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.st_Ttl","enable","dsObjBindEn","st_Ttl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cal_openExplnDayVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.cal_openExplnDay","visible","dsObjBindVi","cal_openExplnDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cal_openExplnDayEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.cal_openExplnDay","readonly","dsObjBindEn","cal_openExplnDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static02Vi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.Static02","visible","dsObjBindVi","Static02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static02En","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.Static02","enable","dsObjBindEn","Static02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mae_openExplnTimeVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.mae_openExplnTime","visible","dsObjBindVi","mae_openExplnTime");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mae_openExplnTimeEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.mae_openExplnTime","readonly","dsObjBindEn","mae_openExplnTime");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static03Vi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.Static03","visible","dsObjBindVi","Static03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static03En","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.Static03","enable","dsObjBindEn","Static03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("st_CrtrNmVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.st_CrtrNm","visible","dsObjBindVi","st_CrtrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("st_CrtrNmEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.st_CrtrNm","enable","dsObjBindEn","st_CrtrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edt_openExplnAreaVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.edt_openExplnArea","visible","dsObjBindVi","edt_openExplnArea");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edt_openExplnAreaEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.edt_openExplnArea","readonly","dsObjBindEn","edt_openExplnArea");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("ed_PoAmtVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.ed_PoAmt","visible","dsObjBindVi","ed_PoAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("ed_PoAmtEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.ed_PoAmt","enable","dsObjBindEn","ed_PoAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txt_openExplnAttnCndtnVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.txt_openExplnAttnCndtn","visible","dsObjBindVi","txt_openExplnAttnCndtn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txt_openExplnAttnCndtnEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.txt_openExplnAttnCndtn","readonly","dsObjBindEn","txt_openExplnAttnCndtn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCdBidUnitLangBind2017110317184315466","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staCdBidUnit","text","gdsLabel","EPRO_LABEL_00288");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Undefined_00LangBind2017110317184393897","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staEvalType","text","gdsLabel","EPRO_LABEL_00535");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staOptionLangBind2017110317184352941","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staOption","text","gdsLabel","EPRO_LABEL_00218");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static03LangBind2017110317184384135","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.Static03","text","gdsLabel","EPRO_LABEL_00416");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("st_MtrlCd00LangBind201711031718437421","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabpage6.st_MtrlCd00","text","gdsLabel","EPRO_LABEL_00510");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.cboIncoterms","value","dsRfq","CD_INCOTERMS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.cboEvalType","value","dsRfq","CD_EVAL_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.edtTcoBgnYr","value","dsRfq","TCO_BGN_YR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.edtTcoYr","value","dsRfq","TCO_YR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.chkAltLowFailAply","value","dsRfq","ALT_LOW_FAIL_APLY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05.edt_ChrgrId","value","dsRfq","CHRGR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05.edt_chrgrNm","value","dsRfq","CHRGR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item38","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05.edt_tel","value","dsRfq","TEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item39","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05.edt_email","value","dsRfq","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item42","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05.edt_fax","value","dsRfq","FAX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.chkAltRfqPriceSbmt","value","dsRfq","ALT_RFQ_PRICE_SBMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calRfqCloseTimeVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.calRfqCloseTime","visible","dsObjBindVi","calRfqCloseTime");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calRfqCloseTimeEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.calRfqCloseTime","readonly","dsObjBindEn","calRfqCloseTime");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cldRfqCloseDayVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.cldRfqCloseDay","visible","dsObjBindVi","cldRfqCloseDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cldRfqCloseDayEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.cldRfqCloseDay","readonly","dsObjBindEn","cldRfqCloseDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboCdBidUnitVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.cboCdBidUnit","visible","dsObjBindVi","cboCdBidUnit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboCdRfqAimVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.cboCdRfqAim","visible","dsObjBindVi","cboCdRfqAim");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboCdRfqAimEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.cboCdRfqAim","readonly","dsObjBindEn","cboCdRfqAim");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboCdRfqCrncVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.cboCdRfqCrnc","visible","dsObjBindVi","cboCdRfqCrnc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboCdRfqCrncEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.cboCdRfqCrnc","readonly","dsObjBindEn","cboCdRfqCrnc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtGoalamtVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.edtGoalamt","visible","dsObjBindVi","edtGoalamt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtGoalamtEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.edtGoalamt","readonly","dsObjBindEn","edtGoalamt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboEvalTypeVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.cboEvalType","visible","dsObjBindVi","cboEvalType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboEvalTypeEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.cboEvalType","readonly","dsObjBindEn","cboEvalType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staEvalTypeVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staEvalType","visible","dsObjBindVi","staEvalType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staEvalTypeEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staEvalType","enable","dsObjBindEn","staEvalType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staEvalRateVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staEvalRate","visible","dsObjBindVi","staEvalRate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staEvalRateEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staEvalRate","enable","dsObjBindEn","staEvalRate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.edtTtl","visible","dsObjBindVi","edtTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.edtTtl","readonly","dsObjBindEn","edtTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRrqOdrVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.edtRrqOdr","visible","dsObjBindVi","edtRrqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRrqOdrEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.edtRrqOdr","readonly","dsObjBindEn","edtRrqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkAltBdgtOpenVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.chkAltBdgtOpen","visible","dsObjBindVi","chkAltBdgtOpen");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkAltBdgtOpenEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.chkAltBdgtOpen","readonly","dsObjBindEn","chkAltBdgtOpen");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkAltTargCorpOpenVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.chkAltTargCorpOpen","visible","dsObjBindVi","chkAltTargCorpOpen");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkAltTargCorpOpenEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.chkAltTargCorpOpen","readonly","dsObjBindEn","chkAltTargCorpOpen");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqCloseTimeMinVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRfqCloseTimeMin","visible","dsObjBindVi","staRfqCloseTimeMin");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqCloseTimeMinEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRfqCloseTimeMin","enable","dsObjBindEn","staRfqCloseTimeMin");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staIncotermsVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staIncoterms","visible","dsObjBindVi","staIncoterms");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staIncotermsEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staIncoterms","enable","dsObjBindEn","staIncoterms");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboIncotermsVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.cboIncoterms","visible","dsObjBindVi","cboIncoterms");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboIncotermsEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.cboIncoterms","readonly","dsObjBindEn","cboIncoterms");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAltLowFailAplyVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staAltLowFailAply","visible","dsObjBindVi","staAltLowFailAply");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAltLowFailAplyEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staAltLowFailAply","enable","dsObjBindEn","staAltLowFailAply");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkAltLowFailAplyVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.chkAltLowFailAply","visible","dsObjBindVi","chkAltLowFailAply");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkAltLowFailAplyEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.chkAltLowFailAply","readonly","dsObjBindEn","chkAltLowFailAply");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr10Vi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr10","visible","dsObjBindVi","staRfqOdr10");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr10En","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr10","enable","dsObjBindEn","staRfqOdr10");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAltRfqPriceSbmtVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staAltRfqPriceSbmt","visible","dsObjBindVi","staAltRfqPriceSbmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAltRfqPriceSbmtEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staAltRfqPriceSbmt","enable","dsObjBindEn","staAltRfqPriceSbmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTcoBgnYrVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staTcoBgnYr","visible","dsObjBindVi","staTcoBgnYr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTcoBgnYrEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staTcoBgnYr","enable","dsObjBindEn","staTcoBgnYr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTcoBgnYrVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.edtTcoBgnYr","visible","dsObjBindVi","edtTcoBgnYr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTcoBgnYrEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.edtTcoBgnYr","readonly","dsObjBindEn","edtTcoBgnYr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTcoYrVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.edtTcoYr","visible","dsObjBindVi","edtTcoYr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTcoYrEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.edtTcoYr","readonly","dsObjBindEn","edtTcoYr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkAltRfqPriceSbmtVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.chkAltRfqPriceSbmt","visible","dsObjBindVi","chkAltRfqPriceSbmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkAltRfqPriceSbmtEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.chkAltRfqPriceSbmt","readonly","dsObjBindEn","chkAltRfqPriceSbmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item43","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfqRmark.txaRmark","visible","dsObjBindVi","txaRmark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item44","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfqRmark.txaRmark","readonly","dsObjBindEn","txaRmark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp03Vi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp03","visible","dsObjBindVi","tabp03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp03En","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp03","enable","dsObjBindEn","tabp03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp05Vi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05","visible","dsObjBindVi","tabp05");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp05En","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05","enable","dsObjBindEn","tabp05");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item47","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.mskRfqLowAmt","value","dsRfq","RFQ_LOW_AMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item48","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.mskRfqLowAmt","visible","dsObjBindVi","mskRfqLowAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item49","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.mskRfqLowAmt","readonly","dsObjBindEn","mskRfqLowAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edt_ChrgrIdVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05.edt_ChrgrId","visible","dsObjBindVi","edt_ChrgrId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edt_ChrgrIdEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05.edt_ChrgrId","readonly","dsObjBindEn","edt_ChrgrId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edt_chrgrNmVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05.edt_chrgrNm","visible","dsObjBindVi","edt_chrgrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edt_chrgrNmEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05.edt_chrgrNm","readonly","dsObjBindEn","edt_chrgrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("st_MtrlCd00Vi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05.st_MtrlCd00","visible","dsObjBindVi","st_MtrlCd00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("st_MtrlCd00En","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05.st_MtrlCd00","enable","dsObjBindEn","st_MtrlCd00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edt_telVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05.edt_tel","visible","dsObjBindVi","edt_tel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edt_telEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05.edt_tel","readonly","dsObjBindEn","edt_tel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("st_MtrlCd01Vi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05.st_MtrlCd01","visible","dsObjBindVi","st_MtrlCd01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("st_MtrlCd01En","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05.st_MtrlCd01","enable","dsObjBindEn","st_MtrlCd01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edt_emailVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05.edt_email","visible","dsObjBindVi","edt_email");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edt_emailEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05.edt_email","readonly","dsObjBindEn","edt_email");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edt_faxVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05.edt_fax","visible","dsObjBindVi","edt_fax");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edt_faxEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05.edt_fax","readonly","dsObjBindEn","edt_fax");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("st_MtrlCdVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05.st_MtrlCd","visible","dsObjBindVi","st_MtrlCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("st_MtrlCdEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05.st_MtrlCd","enable","dsObjBindEn","st_MtrlCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("st_MtrlCd02Vi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05.st_MtrlCd02","visible","dsObjBindVi","st_MtrlCd02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("st_MtrlCd02En","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05.st_MtrlCd02","enable","dsObjBindEn","st_MtrlCd02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboCdBidUnitEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.cboCdBidUnit","readonly","dsObjBindEn","cboCdBidUnit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item52","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.chkAltOpenExpln","value","dsRfq","ALT_OPEN_EXPLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item53","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.chkAltOpenExpln","visible","dsObjBindVi","rdo_AltRfqOpen");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item54","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.chkAltOpenExpln","readonly","dsObjBindEn","rdo_AltRfqOpen");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item68","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.mae_openExplnTime","value","dsRfq","OPEN_EXPLN_TIME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item69","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.cal_openExplnDay","value","dsRfq","OPEN_EXPLN_DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item70","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.edt_openExplnArea","value","dsRfq","OPEN_EXPLN_AREA");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item71","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.txt_openExplnAttnCndtn","value","dsRfq","OPEN_EXPLN_ATTN_CNDTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item72","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.mskRfqCloseTimeMIN","visible","dsObjBindVi","mskRfqCloseTimeMIN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item73","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.mskRfqCloseTimeMIN","readonly","dsObjBindEn","mskRfqCloseTimeMIN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item74","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.mskRfqCloseTimeMIN","value","dsRfq","RFQ_CLOSE_TIME_MIN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item78","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04","text","gdsLabel","EPRO_LABEL_00538");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item82","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05.st_MtrlCd01","text","gdsLabel","EPRO_LABEL_00124");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item86","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRfqCloseTimeMin","text","gdsLabel","EPRO_LABEL_01167");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item90","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr10","text","gdsLabel","EPRO_LABEL_00411");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item94","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staIncoterms","text","gdsLabel","EPRO_LABEL_00301");
            this.addChild(obj.name, obj);
            obj.bind();
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
            obj = new BindItem("grdRfqItemFormatId","divViewCompBody03.divViewCompBody01.grdRfqItem","formatid","dsObjBindGrid","grdRfqItem");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("grdRfqPtnrFormatId","divViewCompBody03.divViewCompBody02.grdRfqPtnr","formatid","dsObjBindGrid","grdRfqPtnr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divViewCompBody00.txaRmark","readonly","dsObjBindEn","txaRmark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRtQ","visible","dsObjBindVi","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRtQ","enable","dsObjBindEn","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr00Vi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRtQ","visible","dsObjBindVi","staRfqOdr00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr00En","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRtQ","enable","dsObjBindEn","staRfqOdr00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRtQVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRtQ","visible","dsObjBindVi","staRtQ");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRtQEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRtQ","enable","dsObjBindEn","staRtQ");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.edtRtQ","value","dsRfq","RT_Q");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRtQVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.edtRtQ","visible","dsObjBindVi","edtRtQ");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRtQEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.edtRtQ","readonly","dsObjBindEn","edtRtQ");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item57","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr05","visible","dsObjBindVi","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item58","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr05","enable","dsObjBindEn","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr05Vi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr05","visible","dsObjBindVi","staRfqOdr05");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr05En","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr05","enable","dsObjBindEn","staRfqOdr05");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item40","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRtP","visible","dsObjBindVi","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRtP","enable","dsObjBindEn","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr01Vi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRtP","visible","dsObjBindVi","staRfqOdr01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr01En","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRtP","enable","dsObjBindEn","staRfqOdr01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRtCVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRtP","visible","dsObjBindVi","staRtC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRtCEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRtP","enable","dsObjBindEn","staRtC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.edtRtP","value","dsRfq","RT_P");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.edtRtP","visible","dsObjBindVi","edtRtP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.edtRtP","readonly","dsObjBindEn","edtRtP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item59","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr06","visible","dsObjBindVi","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr06","enable","dsObjBindEn","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr06Vi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr06","visible","dsObjBindVi","staRfqOdr06");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr06En","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr06","enable","dsObjBindEn","staRfqOdr06");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCostVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRtC","visible","dsObjBindVi","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCostEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRtC","enable","dsObjBindEn","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.edtRtC","value","dsRfq","RT_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRtCVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.edtRtC","visible","dsObjBindVi","edtRtC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRtCEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.edtRtC","readonly","dsObjBindEn","edtRtC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPer01Vi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staPer01","visible","dsObjBindVi","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPer01En","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staPer01","enable","dsObjBindEn","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item45","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRtT","visible","dsObjBindVi","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item46","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRtT","enable","dsObjBindEn","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr02Vi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRtT","visible","dsObjBindVi","staRfqOdr02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr02En","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRtT","enable","dsObjBindEn","staRfqOdr02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRtTVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRtT","visible","dsObjBindVi","staRtT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRtTEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRtT","enable","dsObjBindEn","staRtT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.edtRtT","value","dsRfq","RT_T");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRtTVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.edtRtT","visible","dsObjBindVi","edtRtT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRtTEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.edtRtT","readonly","dsObjBindEn","edtRtT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item50","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr07","visible","dsObjBindVi","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item62","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr07","enable","dsObjBindEn","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr07Vi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr07","visible","dsObjBindVi","staRfqOdr07");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr07En","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr07","enable","dsObjBindEn","staRfqOdr07");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item51","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRtD","visible","dsObjBindVi","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item55","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRtD","enable","dsObjBindEn","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr03Vi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRtD","visible","dsObjBindVi","staRfqOdr03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr03En","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRtD","enable","dsObjBindEn","staRfqOdr03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRtDVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRtD","visible","dsObjBindVi","staRtD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRtDEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRtD","enable","dsObjBindEn","staRtD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item56","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.edtRtD","value","dsRfq","RT_D");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRtDVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.edtRtD","visible","dsObjBindVi","edtRtD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRtDEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.edtRtD","readonly","dsObjBindEn","edtRtD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item63","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr08","visible","dsObjBindVi","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item64","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr08","enable","dsObjBindEn","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr08Vi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr08","visible","dsObjBindVi","staRfqOdr08");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr08En","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr08","enable","dsObjBindEn","staRfqOdr08");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item65","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRtF","visible","dsObjBindVi","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item66","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRtF","enable","dsObjBindEn","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr04Vi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRtF","visible","dsObjBindVi","staRfqOdr04");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr04En","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRtF","enable","dsObjBindEn","staRfqOdr04");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRtFVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRtF","visible","dsObjBindVi","staRtF");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRtFEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRtF","enable","dsObjBindEn","staRtF");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item96","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.edtRtF","value","dsRfq","RT_F");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRtFVi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.edtRtF","visible","dsObjBindVi","edtRtF");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRtFEn","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.edtRtF","readonly","dsObjBindEn","edtRtF");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item97","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr09","visible","dsObjBindVi","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item98","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr09","enable","dsObjBindEn","staRfqOdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr09Vi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr09","visible","dsObjBindVi","staRfqOdr09");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqOdr09En","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr09","enable","dsObjBindEn","staRfqOdr09");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("grdRfqReqFileFormatId","divViewCompBody03.divViewCompBody03.grdRfqReqFile","formatid","dsObjBindGrid","grdRfqReqFile");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item99","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.calOpenExplnTimte","visible","dsObjBindEn","calOpenExplnTimte");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item100","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.calOpenExplnTimte","readonly","dsObjBindEn","calOpenExplnTimte");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item101","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.calOpenExplnTimte","value","dsRfq","OPEN_EXPLN_TIME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item102","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.edtIncoterms2","value","dsRfq","INCOTERMS2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtIncoterms2Vi","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.edtIncoterms2","visible","dsObjBindVi","edtIncoterms2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtIncoterms2En","divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.edtIncoterms2","readonly","dsObjBindEn","edtIncoterms2");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompNFileUpDown.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompNFileUpDown.xfdl");
        };
        
        // User Script
        this.registerScript("BAprvDetailRfqReq.xfdl", function(exports) {
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
        	var sOutDatasets = "dsAprvInfo=dsAprvInfo dsAprvLine=dsAprvLine dsRfq=dsRfq dsRfqItemList=dsRfqItemList dsRfqPtnr=dsRfqPtnr dsRfqReqFile=dsRfqReqFile dsRfqTco=dsRfqTco";
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
        			
        			sTableNm = "MM_RFQ_APRV";
        			arrFileKey = [this.dsAprvInfo.getColumn(0, "APP_DOC_ID")];
        			this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp03.divFile.fnFileInit(this, sTableNm, this.dsAprvInfo, arrFileKey,"Y");
        			
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
        			
        			if(this.dsRfq.getColumn(0,"ALT_SINGLE_PTNR")=="Y"){
        				this.divViewCompTitle00.staWarning.set_visible(true);
        			}
        			
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
        	this.dsAprvLine.setColumn(nRow,"UP_YN", "Y")
        	this.dsAprvLine.setColumn(nRow,"CRTR_ID",application.gdsUserInfo.getColumn(0,"USER_ID"));
        	
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
        		this.dsAprvLine.filter("");
        		gfnAlert("EPRO_LABEL_00895");
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
        	if(obj.getCurEditType() == "button"){
        		if(e.col=="7"){
        			ItemListRow = e.row;
        			var sArg = {
        							agv_rmk:this.dsRfqItemList.getColumn(e.row,"RMARK")
        							,agv_Yn:"Y"
        							,agv_title:""
        						};
        			
        			gfnModalPop(this, "BRfqRmkPopup", "BRFQ::BRfqRmkPop.xfdl", sArg, "fnPopCallBack", 500, 300);
        		}else if(e.col=="8"){
        			var sArg = {
        							agv_sTableNm:"MM_RFQ_ITEM_APRV"
        							,gv_arrFileKey:[this.dsAprvInfo.getColumn(0,"APP_DOC_ID")
        											,this.dsRfqItemList.getColumn(e.row,"RFQ_REQ_ITEM_ID")]
        							,agv_data:this.dsRfqItemList
        							,agv_form:this
        							,agv_view:"Y"
        						};
        			
        			gfnModalPop(this, "CompFileUpDownPopup", "CPOP::CompFileUpDownPopup.xfdl", sArg, "fnPopCallBack", 900, 350);
        		}
        	}
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
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.addEventHandler("onchanged", this.div_21_Tab01_onchanged, this);
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.cldRfqCloseDay.addEventHandler("oneditclick", this.div_21_Tab01_tabp01_cal_rfqCloseDay_oneditclick, this);
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRfqCloseDT.addEventHandler("onclick", this.div_21_Tab01_tabp01_st_CrtrNm_onclick, this);
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabRfq.staRfqOdr07.addEventHandler("onclick", this.divViewCompBody00_tabRfqInfo_tabRfq_staRfqOdr07_onclick, this);
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp04.chkAltOpenExpln.addEventHandler("onchanged", this.fnChkAltOpenExpln_onchanged, this);
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05.edt_chrgrNm.addEventHandler("onkeydown", this.div_21_Tab01_tabpage6_edt_chrgrNm_onkeydown, this);
            this.divViewCompBody03.divViewCompBody00.tabRfqInfo.tabp05.edt_chrgrNm.addEventHandler("ontextchanged", this.div_21_Tab01_tabpage6_edt_chrgrNm_ontextchanged, this);
            this.divViewCompBody03.divViewCompBody01.grdRfqItem.addEventHandler("oncellclick", this.fnRfqItemClick, this);
            this.divViewCompBody03.divViewCompBody01.grdRfqItem.addEventHandler("onexpanddown", this.fnRfqItem_ExpandDown, this);
            this.divViewCompBody03.divViewCompBody01.grdRfqItem.addEventHandler("ontextchange", this.fnItemListChange, this);
            this.divViewCompBody03.divViewCompTitle00.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompBody03.divViewCompBody02.grdRfqPtnr.addEventHandler("oncelldblclick", this.divViewCompBody02_grdRfqPtnr_oncelldblclick, this);
            this.divViewCompTitle04.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompTitle02.btnDel.addEventHandler("onclick", this.fnDelUser, this);
            this.divViewCompTitle02.btnAdd.addEventHandler("onclick", this.fnAddUser, this);
            this.divViewCompTitle02.btnUp.addEventHandler("onclick", this.fnMove, this);
            this.divViewCompTitle02.btnDown.addEventHandler("onclick", this.fnMove, this);

        };

        this.loadIncludeScript("BAprvDetailRfqReq.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
