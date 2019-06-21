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
                this.set_titletext("승인상세(정기평가)");
                this._setFormPosition(0,0,1220,1414);
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

            obj = new Dataset("dsEvalPtnr", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEval", this);
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"SCJD_EVAL_ID\" size=\"256\" type=\"STRING\"/><Column id=\"SRC_GRP_ID\" size=\"256\" type=\"STRING\"/><Column id=\"UP_SRC_GRP_ID\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdEV21", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdEV22", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsLvl1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsLvl2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompTitle00", "absolute", "0", "0", null, "24", "0", null, this);
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            obj.set_positionstep("0");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "0", "255", "24", null, null, this.divViewCompTitle00);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("21");
            obj.set_text("기본정보");
            this.divViewCompTitle00.addChild(obj.name, obj);

            obj = new Div("divViewCompBody00", "absolute", "0", "24", null, "115", "15", null, this);
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
            obj.set_positionstep("1");
            obj.set_taborder("2");
            obj.set_text("승인문서명");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staRmark", "absolute", "0", "32", "171", "80", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("특이사항");
            obj.set_positionstep("1");
            obj.set_taborder("4");
            obj.set_text("승인의견");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new TextArea("txaRmark", "absolute", "176", "37", null, "70", "12", null, this.divViewCompBody00);
            obj.set_lengthunit("utf8");
            obj.set_maxlength("500");
            obj.getSetter("objNm").set("특기사항");
            obj.set_positionstep("1");
            obj.set_taborder("5");
            obj.set_wordwrap("char");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtTtl", "absolute", "176", "4", null, "24", "12", null, this.divViewCompBody00);
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("평가서명");
            obj.set_positionstep("1");
            obj.set_taborder("6");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Div("divViewCompBody02", "absolute", "0", "400", null, "250", "15", null, this);
            obj.getSetter("objNm").set("DIV-대상업체 세부정보");
            obj.set_taborder("107");
            this.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "0", null, "250", "0", null, this.divViewCompBody02);
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

            obj = new Div("divViewCompTitle03", "absolute", "0", "670", null, "24", "0", null, this);
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            obj.set_taborder("111");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "0", "255", "24", null, null, this.divViewCompTitle03);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("0");
            obj.set_text("승인문서");
            this.divViewCompTitle03.addChild(obj.name, obj);

            obj = new Div("divViewCompBody03", "absolute", "0", "699", null, "685", "15", null, this);
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.set_taborder("112");
            this.addChild(obj.name, obj);
            obj = new Div("divViewCompTitle00", "absolute", "0", "0", null, "24", "0", null, this.divViewCompBody03);
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            obj.set_taborder("0");
            this.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "0", "255", "24", null, null, this.divViewCompBody03.divViewCompTitle00);
            obj.set_cssclass("sta_WF_Subtitle02");
            obj.set_taborder("0");
            obj.set_text("기본정보");
            this.divViewCompBody03.divViewCompTitle00.addChild(obj.name, obj);
            obj = new Div("divViewCompTitle02", "absolute", "0", "306", null, "24", "0", null, this.divViewCompBody03);
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            obj.set_taborder("1");
            this.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle02", "absolute", "0", "0", "255", "24", null, null, this.divViewCompBody03.divViewCompTitle02);
            obj.set_cssclass("sta_WF_Subtitle02");
            obj.set_taborder("0");
            obj.set_text("대상업체");
            this.divViewCompBody03.divViewCompTitle02.addChild(obj.name, obj);
            obj = new Div("divViewCompBody02", "absolute", "0", "335", null, "348", "0", null, this.divViewCompBody03);
            obj.getSetter("objNm").set("DIV-대상업체 세부정보");
            obj.set_taborder("2");
            this.divViewCompBody03.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "0", null, null, "0", "0", this.divViewCompBody03.divViewCompBody02);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsEvalPtnr");
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
            obj.getSetter("f_sort").set("Y");
            obj.getSetter("objNm").set("업체그리드");
            obj.set_taborder("7");
            obj._setContents("<Formats><Format id=\"VMODE\"><Columns><Column size=\"100\"/><Column size=\"144\"/><Column size=\"300\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row band=\"head\" size=\"24\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" rowspan=\"2\" text=\"사업자번호\"/><Cell col=\"1\" expr=\"\" rowspan=\"2\" text=\"Vendor\"/><Cell col=\"2\" expr=\"\" rowspan=\"2\" text=\"업체명\"/><Cell col=\"3\" expr=\"\" text=\"품질평가\"/><Cell col=\"4\" expr=\"\" text=\"원가절감\"/><Cell col=\"5\" expr=\"\" text=\"기술력\"/><Cell col=\"6\" expr=\"\" text=\"납기관리\"/><Cell col=\"7\" expr=\"\" text=\"경영/재무\"/><Cell col=\"8\" expr=\"\" rowspan=\"2\" text=\"합계\"/><Cell col=\"3\" row=\"1\"/><Cell col=\"4\" row=\"1\"/><Cell col=\"5\" row=\"1\"/><Cell col=\"6\" row=\"1\"/><Cell col=\"7\" row=\"1\"/></Band><Band id=\"body\"><Cell mask=\"expr:BIZ_NO==null||BIZ_NO==&quot;&quot;?'':&quot;###-##-####&quot;\" text=\"bind:BIZ_NO\"/><Cell col=\"1\" text=\"bind:SAP_VENDOR\"/><Cell col=\"2\" cssclass=\"cell_link\" style=\"align:left;\" text=\"bind:PTNR_NM\"/><Cell col=\"3\" displaytype=\"number\" mask=\"#,##0.##\" style=\"align:right;\" text=\"bind:RT_Q\"/><Cell col=\"4\" displaytype=\"number\" mask=\"#,##0.##\" style=\"align:right;\" text=\"bind:RT_C\"/><Cell col=\"5\" displaytype=\"number\" mask=\"#,##0.##\" style=\"align:right;\" text=\"bind:RT_T\"/><Cell col=\"6\" displaytype=\"number\" mask=\"#,##0.##\" style=\"align:right;\" text=\"bind:RT_D\"/><Cell col=\"7\" displaytype=\"number\" mask=\"#,##0.##\" style=\"align:right;\" text=\"bind:RT_F\"/><Cell col=\"8\" displaytype=\"number\" mask=\"#,##0.##\" style=\"align:right;\" text=\"bind:EVAL_SCORE\"/></Band></Format></Formats>");
            this.divViewCompBody03.divViewCompBody02.addChild(obj.name, obj);
            obj = new Tab("tapInfo", "absolute", "1", "29", null, "257", "1", null, this.divViewCompBody03);
            obj.set_scrollbars("autoboth");
            obj.set_tabindex("0");
            obj.set_taborder("3");
            this.divViewCompBody03.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.divViewCompBody03.tapInfo);
            obj.set_text("정기평가정보");
            this.divViewCompBody03.tapInfo.addChild(obj.name, obj);
            obj = new Div("divViewCompBody00", "absolute", "0", "5", null, null, "0", "10", this.divViewCompBody03.tapInfo.tabpage1);
            obj.getSetter("objNm").set("DIV-평가서 상세");
            obj.set_taborder("0");
            this.divViewCompBody03.tapInfo.tabpage1.addChild(obj.name, obj);
            obj = new Static("staViewCompLine04", "absolute", "0", "65", null, "33", "0", null, this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("68");
            this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "1", null, "33", "0", null, this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("69");
            this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine03", "absolute", "0", "129", null, "80", "0", null, this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("70");
            this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staTtl", "absolute", "0", "1", "171", "33", null, null, this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.set_taborder("71");
            obj.set_text("평가서명");
            this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staStts", "absolute", "690", "1", "171", "33", null, null, this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.set_taborder("72");
            obj.set_text("상태");
            this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staRmark", "absolute", "0", "129", "171", "80", null, null, this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("특이사항");
            obj.set_positionstep("1");
            obj.set_taborder("73");
            obj.set_text("특이사항");
            this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new TextArea("txaRmark", "absolute", "176", "134", null, "70", "3", null, this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00);
            obj.set_lengthunit("utf8");
            obj.set_maxlength("500");
            obj.getSetter("objNm").set("특기사항");
            obj.set_positionstep("1");
            obj.set_scrollbars("none");
            obj.set_taborder("74");
            obj.set_wordwrap("char");
            this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtTtl", "absolute", "176", "5", "400", "24", null, null, this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00);
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("평가서명");
            obj.set_positionstep("1");
            obj.set_taborder("75");
            this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Combo("cboStts", "absolute", "865", "5", "310", "24", null, null, this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00);
            this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_displayrowcount("4");
            obj.set_innerdataset("dsCdEV21");
            obj.getSetter("objNm").set("상태");
            obj.set_positionstep("1");
            obj.set_taborder("76");
            obj = new Static("staViewCompLine02", "absolute", "0", "97", null, "33", "0", null, this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("77");
            this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staPer", "absolute", "0", "97", "171", "33", null, null, this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.set_taborder("80");
            obj.set_text("평가비율");
            obj.set_wordwrap("char");
            this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staQuality", "absolute", "176", "97", "80", "33", null, null, this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00);
            obj.getSetter("objNm").set("상태");
            obj.style.set_align("right");
            obj.set_taborder("81");
            obj.set_text("품질");
            this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staPer00", "absolute", "311", "97", "20", "33", null, null, this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00);
            obj.getSetter("objNm").set("상태");
            obj.set_taborder("82");
            obj.set_text("%");
            this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staCost", "absolute", "333", "97", "91", "33", null, null, this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00);
            obj.getSetter("objNm").set("상태");
            obj.style.set_align("right");
            obj.set_taborder("83");
            obj.set_text("원가절감");
            this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staPer01", "absolute", "479", "97", "20", "33", null, null, this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00);
            obj.getSetter("objNm").set("상태");
            obj.set_taborder("84");
            obj.set_text("%");
            this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staSkill", "absolute", "496", "97", "80", "33", null, null, this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00);
            obj.getSetter("objNm").set("상태");
            obj.style.set_align("right");
            obj.set_taborder("85");
            obj.set_text("기술력");
            this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staPer02", "absolute", "631", "97", "20", "33", null, null, this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00);
            obj.getSetter("objNm").set("상태");
            obj.set_taborder("86");
            obj.set_text("%");
            this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staPeriod", "absolute", "656", "97", "80", "33", null, null, this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00);
            obj.getSetter("objNm").set("상태");
            obj.style.set_align("right");
            obj.set_taborder("87");
            obj.set_text("납기관리");
            this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staPer03", "absolute", "791", "97", "20", "33", null, null, this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00);
            obj.getSetter("objNm").set("상태");
            obj.set_taborder("88");
            obj.set_text("%");
            this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staMana", "absolute", "806", "97", "138", "33", null, null, this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00);
            obj.getSetter("objNm").set("상태");
            obj.style.set_align("right");
            obj.set_taborder("89");
            obj.set_text("경영/재무");
            this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staPer04", "absolute", "999", "97", "20", "33", null, null, this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00);
            obj.getSetter("objNm").set("상태");
            obj.set_taborder("90");
            obj.set_text("%");
            this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new MaskEdit("mskQuality", "absolute", "261", "101", "45", "24", null, null, this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00);
            obj.set_autoselect("true");
            obj.getSetter("col").set("RT_Q");
            obj.set_mask("#,##0.##");
            obj.getSetter("objNm").set("gfnMultiLabel(\"EPRO_LABEL_00343\")");
            obj.set_taborder("91");
            this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new MaskEdit("mskCost", "absolute", "429", "101", "45", "24", null, null, this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00);
            obj.set_autoselect("true");
            obj.getSetter("col").set("RT_C");
            obj.set_mask("#,##0.##");
            obj.getSetter("objNm").set("gfnMultiLabel(\"EPRO_LABEL_00122\")");
            obj.set_taborder("92");
            this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new MaskEdit("mskSkill", "absolute", "581", "101", "45", "24", null, null, this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00);
            obj.set_autoselect("true");
            obj.getSetter("col").set("RT_T");
            obj.set_mask("#,##0.##");
            obj.getSetter("objNm").set("gfnMultiLabel(\"EPRO_LABEL_00374\")");
            obj.set_taborder("93");
            this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new MaskEdit("mskPeriod", "absolute", "741", "101", "45", "24", null, null, this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00);
            obj.set_autoselect("true");
            obj.getSetter("col").set("RT_D");
            obj.set_mask("#,##0.##");
            obj.getSetter("objNm").set("gfnMultiLabel(\"EPRO_LABEL_00482\")");
            obj.set_taborder("94");
            this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new MaskEdit("mskMana", "absolute", "949", "101", "45", "24", null, null, this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00);
            obj.set_autoselect("true");
            obj.getSetter("col").set("RT_F");
            obj.set_mask("#,##0.##");
            obj.getSetter("objNm").set("gfnMultiLabel(\"EPRO_LABEL_00346\")");
            obj.set_taborder("95");
            this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staLimit", "absolute", "0", "65", "171", "33", null, null, this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.set_taborder("97");
            obj.set_text("거래정지옵션");
            this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Combo("cboLimit", "absolute", "176", "69", "250", "24", null, null, this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00);
            this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_displayrowcount("4");
            obj.set_innerdataset("dsCdEV22");
            obj.getSetter("objNm").set("거래정지옵션");
            obj.set_positionstep("1");
            obj.set_taborder("98");
            obj = new MaskEdit("mskLimit", "absolute", "431", "69", "45", "24", null, null, this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00);
            obj.set_autoselect("true");
            obj.set_mask("#,##0.##");
            obj.getSetter("objNm").set("거래정지점수");
            obj.set_taborder("99");
            this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staNum", "absolute", "481", "65", "50", "33", null, null, this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00);
            obj.getSetter("objNm").set("");
            obj.style.set_align("left");
            obj.set_taborder("100");
            obj.set_text("점");
            this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "33", null, "33", "0", null, this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("102");
            this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Div("divSrcGrpId", "absolute", "865", "37", "314", "24", null, null, this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00);
            obj.getSetter("objNm").set("소싱그룹");
            obj.set_taborder("103");
            obj.set_url("CCOMP::CompSrcType2.xfdl");
            this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staSrc", "absolute", "690", "33", "171", "33", null, null, this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.set_taborder("104");
            obj.set_text("소싱그룹");
            this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Div("dviEvalDay", "absolute", "176", "38", "250", "24", null, null, this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00);
            obj.getSetter("objNm").set("평가기준일");
            obj.set_positionstep("1");
            obj.set_taborder("105");
            obj.set_text("Div01");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staEvalDay", "absolute", "0", "33", "171", "33", null, null, this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.set_taborder("106");
            obj.set_text("평가기준일자");
            obj.set_wordwrap("char");
            this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.divViewCompBody03.tapInfo);
            obj.set_text("첨부파일");
            this.divViewCompBody03.tapInfo.addChild(obj.name, obj);
            obj = new Div("divViewCompBody01", "absolute", "0", "10", null, null, "0", "0", this.divViewCompBody03.tapInfo.tabpage2);
            obj.set_taborder("0");
            obj.set_url("CCOMP::CompNFileUpDown.xfdl");
            this.divViewCompBody03.tapInfo.tabpage2.addChild(obj.name, obj);

            obj = new Div("divViewCompTitle04", "absolute", "0", "159", null, "24", "0", null, this);
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            obj.set_taborder("113");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "0", "255", "24", null, null, this.divViewCompTitle04);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("0");
            obj.set_text("승인파일");
            this.divViewCompTitle04.addChild(obj.name, obj);

            obj = new Div("divFile", "absolute", "2", "159", null, "192", "15", null, this);
            obj.set_taborder("114");
            obj.set_url("CCOMP::CompNFileUpDown.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divViewCompTitle02", "absolute", "0", "371", null, "24", "10", null, this);
            obj.getSetter("objNm").set("DIV-대상업체 타이틀");
            obj.set_positionstep("0");
            obj.set_taborder("104");
            this.addChild(obj.name, obj);
            obj = new Button("btnDel", "absolute", null, "0", "50", "24", "7", null, this.divViewCompTitle02);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("삭제");
            obj.set_positionstep("1");
            obj.set_taborder("16");
            obj.set_text(" 삭제");
            obj.set_visible("false");
            this.divViewCompTitle02.addChild(obj.name, obj);
            obj = new Button("btnAdd", "absolute", null, "0", "80", "24", "62", null, this.divViewCompTitle02);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("협력사추가");
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
            obj = new Button("btnUp", "absolute", null, "0", "40", "24", "192", null, this.divViewCompTitle02);
            obj.set_cssclass("btn_WF_Module");
            obj.set_taborder("21");
            obj.set_text("▲");
            obj.set_visible("false");
            this.divViewCompTitle02.addChild(obj.name, obj);
            obj = new Button("btnDown", "absolute", null, "0", "40", "24", "147", null, this.divViewCompTitle02);
            obj.set_cssclass("btn_WF_Module");
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
            obj = new Layout("default", "", 0, 115, this.divViewCompBody00,
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
            obj = new Layout("default", "", 993, 139, this.divViewCompBody03.divViewCompTitle00,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 타이틀");
            		p.set_taborder("0");

            	}
            );
            this.divViewCompBody03.divViewCompTitle00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompBody03.divViewCompTitle02,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 타이틀");
            		p.set_taborder("1");

            	}
            );
            this.divViewCompBody03.divViewCompTitle02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1042, 386, this.divViewCompBody03.divViewCompBody02,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-대상업체 세부정보");
            		p.set_taborder("2");

            	}
            );
            this.divViewCompBody03.divViewCompBody02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 상세");
            		p.set_taborder("0");

            	}
            );
            this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.divViewCompBody03.tapInfo.tabpage1,
            	//-- Layout function
            	function(p) {
            		p.set_text("정기평가정보");

            	}
            );
            this.divViewCompBody03.tapInfo.tabpage1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.divViewCompBody03.tapInfo.tabpage2,
            	//-- Layout function
            	function(p) {
            		p.set_text("첨부파일");

            	}
            );
            this.divViewCompBody03.tapInfo.tabpage2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 685, this.divViewCompBody03,
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
            obj = new Layout("default", "Screen0", 1220, 1414, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("FrmTemplate100");
            		p.set_titletext("승인상세(정기평가)");

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
            obj = new BindItem("grdListFormatId","divViewCompBody02.grdList","formatid","","grdList");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staViewCompTitle00LangBind2017110317184242212","divViewCompTitle03.staViewCompTitle00","text","gdsLabel","EPRO_LABEL_00372");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnAddLangBind2017110317184266269","divViewCompTitle02.btnAdd","text","gdsLabel","EPRO_LABEL_00224");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","divViewCompBody03.divViewCompBody02.grdList","formatid","dsObjBindGrid","grdList");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPerLangBind2017110317184284284","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.staPer","text","gdsLabel","EPRO_LABEL_00309");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPer01LangBind2017110317184287850","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.staPer01","text","gdsLabel","EPRO_LABEL_00023");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPer03LangBind201711031718426100","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.staPer03","text","gdsLabel","EPRO_LABEL_00023");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.edtTtl","value","dsEval","TTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.cboStts","value","dsEval","CD_SCJD_STTS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.mskQuality","value","dsEval","RT_Q");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.mskCost","value","dsEval","RT_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.mskSkill","value","dsEval","RT_T");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.mskPeriod","value","dsEval","RT_D");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.mskMana","value","dsEval","RT_F");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.txaRmark","value","dsEval","RMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tapInfoVi","divViewCompBody03.tapInfo","visible","dsObjBindVi","tapInfo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tapInfoEn","divViewCompBody03.tapInfo","enable","dsObjBindEn","tapInfo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabpage1Vi","divViewCompBody03.tapInfo.tabpage1","visible","dsObjBindVi","tabpage1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabpage1En","divViewCompBody03.tapInfo.tabpage1","enable","dsObjBindEn","tabpage1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.staTtl","visible","dsObjBindVi","staTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.staTtl","enable","dsObjBindEn","staTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSttsVi","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.staStts","visible","dsObjBindVi","staStts");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSttsEn","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.staStts","enable","dsObjBindEn","staStts");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.staRmark","visible","dsObjBindVi","staRmark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.staRmark","enable","dsObjBindEn","staRmark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.txaRmark","visible","dsObjBindVi","txaRmark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.txaRmark","readonly","dsObjBindEn","txaRmark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.edtTtl","visible","dsObjBindVi","edtTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.edtTtl","readonly","dsObjBindEn","edtTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboSttsVi","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.cboStts","visible","dsObjBindVi","cboStts");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboSttsEn","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.cboStts","readonly","dsObjBindEn","cboStts");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPerVi","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.staPer","visible","dsObjBindVi","staPer");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPerEn","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.staPer","enable","dsObjBindEn","staPer");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staQualityVi","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.staQuality","visible","dsObjBindVi","staQuality");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staQualityEn","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.staQuality","enable","dsObjBindEn","staQuality");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPer00Vi","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.staPer00","visible","dsObjBindVi","staPer00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPer00En","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.staPer00","enable","dsObjBindEn","staPer00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCostVi","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.staCost","visible","dsObjBindVi","staCost");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCostEn","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.staCost","enable","dsObjBindEn","staCost");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPer01Vi","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.staPer01","visible","dsObjBindVi","staPer01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPer01En","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.staPer01","enable","dsObjBindEn","staPer01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSkillVi","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.staSkill","visible","dsObjBindVi","staSkill");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSkillEn","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.staSkill","enable","dsObjBindEn","staSkill");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPer02Vi","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.staPer02","visible","dsObjBindVi","staPer02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPer02En","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.staPer02","enable","dsObjBindEn","staPer02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPeriodVi","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.staPeriod","visible","dsObjBindVi","staPeriod");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPeriodEn","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.staPeriod","enable","dsObjBindEn","staPeriod");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPer03Vi","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.staPer03","visible","dsObjBindVi","staPer03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPer03En","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.staPer03","enable","dsObjBindEn","staPer03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staManaVi","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.staMana","visible","dsObjBindVi","staMana");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staManaEn","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.staMana","enable","dsObjBindEn","staMana");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPer04Vi","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.staPer04","visible","dsObjBindVi","staPer04");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPer04En","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.staPer04","enable","dsObjBindEn","staPer04");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskQualityVi","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.mskQuality","visible","dsObjBindVi","mskQuality");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskQualityEn","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.mskQuality","readonly","dsObjBindEn","mskQuality");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskCostVi","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.mskCost","visible","dsObjBindVi","mskCost");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskCostEn","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.mskCost","readonly","dsObjBindEn","mskCost");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskSkillVi","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.mskSkill","visible","dsObjBindVi","mskSkill");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskSkillEn","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.mskSkill","readonly","dsObjBindEn","mskSkill");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskPeriodVi","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.mskPeriod","visible","dsObjBindVi","mskPeriod");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskPeriodEn","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.mskPeriod","readonly","dsObjBindEn","mskPeriod");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskManaVi","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.mskMana","visible","dsObjBindVi","mskMana");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskManaEn","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.mskMana","readonly","dsObjBindEn","mskMana");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabpage2Vi","divViewCompBody03.tapInfo.tabpage2","visible","dsObjBindVi","tabpage2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabpage2En","divViewCompBody03.tapInfo.tabpage2","enable","dsObjBindEn","tabpage2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.staLimit","visible","dsObjBindVi","staStts");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.staLimit","enable","dsObjBindEn","staStts");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.staNum","visible","dsObjBindVi","staPeriod");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.staNum","enable","dsObjBindEn","staPeriod");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.cboLimit","value","dsEval","CD_TRD_LIMIT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staLimitVi","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.staLimit","visible","dsObjBindVi","staLimit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staLimitEn","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.staLimit","enable","dsObjBindEn","staLimit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboLimitVi","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.cboLimit","visible","dsObjBindVi","cboLimit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboLimitEn","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.cboLimit","readonly","dsObjBindEn","cboLimit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskLimitVi","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.mskLimit","visible","dsObjBindVi","mskLimit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskLimitEn","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.mskLimit","readonly","dsObjBindEn","mskLimit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staNumVi","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.staNum","visible","dsObjBindVi","staNum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staNumEn","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.staNum","enable","dsObjBindEn","staNum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.mskLimit","value","dsEval","TRD_LIMIT_SCORE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divSrcGrpIdVi","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.divSrcGrpId","visible","dsObjBindVi","divSrcGrpId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divSrcGrpIdEn","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.divSrcGrpId","enable","dsObjBindEn","divSrcGrpId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.staSrc","visible","dsObjBindVi","staStts");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.staSrc","enable","dsObjBindEn","staStts");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSrcVi","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.staSrc","visible","dsObjBindVi","staSrc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSrcEn","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.staSrc","enable","dsObjBindEn","staSrc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("dviEvalDayVi","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.dviEvalDay","visible","dsObjBindVi","dviEvalDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("dviEvalDayEn","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.dviEvalDay","enable","dsObjBindEn","dviEvalDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staEvalDayVi","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.staEvalDay","visible","dsObjBindVi","staEvalDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staEvalDayEn","divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.staEvalDay","enable","dsObjBindEn","staEvalDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txaRmarkVi","divViewCompBody00.txaRmark","visible","dsObjBindVi","txaRmark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txaRmarkEn","divViewCompBody00.txaRmark","readonly","dsObjBindEn","txaRmark");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompSrcType2.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompCalFromTo.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompNFileUpDown.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompNFileUpDown.xfdl");
        };
        
        // User Script
        this.registerScript("BAprvDetailScjdEval.xfdl", function(exports) {
        /**
         * @파일명       	: BAprvDetailRfqAls.xfdl
         * @생성자       	: 한의봉
         * @생성일자     	: 2017. 12. 06.
         * @최종수정자		: 한의봉
         * @최종수정일자	    : 2017. 12. 06.
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
        					 ,{code:"EV21", sSelectType:"S"}
        					 ,{code:"EV22", sSelectType:"S"}
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
        	this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.dviEvalDay.fnSetDate(this.dsEval,"EVAL_STD_BGN_DAY","EVAL_STD_END_DAY");
        	this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.divSrcGrpId.fnSetBind(this.dsEval, "UP_SRC_GRP_ID", "SRC_GRP_ID");
        	
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
        	var sOutDatasets = "dsAprvInfo=dsAprvInfo dsAprvLine=dsAprvLine dsEval=dsEval dsEvalPtnr=dsEvalPtnr";
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
        			//승인 파일
        			var sTableNm = "MM_APRV";
        			var arrFileKey = [this.dsAprvInfo.getColumn(0, "APP_DOC_ID")];
        			this.divFile.fnFileInit(this, sTableNm, this.dsAprvInfo, arrFileKey,"Y");
        			
        			//정기평가 파일
        			sTableNm = "MM_EVL_SCJD_APRV";
        			arrFileKey = [this.dsAprvInfo.getColumn(0, "APP_DOC_ID")];
        			this.divViewCompBody03.tapInfo.tabpage2.divViewCompBody01.fnFileInit(this, sTableNm, this.dsAprvInfo, arrFileKey,"Y");
        			
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
        				
        			//기안문서
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
        			
        			this.divViewCompBody03.divViewCompBody02.grdList.setCellProperty("Head", 9,"text",this.dsEval.getColumn(0,"RT_Q"));
        			this.divViewCompBody03.divViewCompBody02.grdList.setCellProperty("Head",10,"text",this.dsEval.getColumn(0,"RT_C"));
        			this.divViewCompBody03.divViewCompBody02.grdList.setCellProperty("Head",11,"text",this.dsEval.getColumn(0,"RT_T"));
        			this.divViewCompBody03.divViewCompBody02.grdList.setCellProperty("Head",12,"text",this.dsEval.getColumn(0,"RT_D"));
        			this.divViewCompBody03.divViewCompBody02.grdList.setCellProperty("Head",13,"text",this.dsEval.getColumn(0,"RT_F"));
        			this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.divSrcGrpId.fnSetView()
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
        			this.fvTarget = -1;
        			
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
        	
        	if(Number(this.dsAprvLine.getColumn(nRow,"APRV_ORDR")) == Number(this.dsAprvInfo.getColumn(0,"WAIT_SEQ"))){
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
        	this.dsAprvLine.setColumn(nRow,"LOGIN_USER",application.gdsUserInfo.getColumn(0,"USER_ID"));
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

        /**
        	@function	fnListOncelldblclick()
        	@desc   	협력사 팝업 생성
        */
        this.fnListOncelldblclick = function(obj,e)
        {
        	if( gfnGrdBindColId(obj, obj.getCellPos()) == "PTNR_NM"){
        		var sArg = {
        						agv_id:this.dsEvalPtnr.getColumn(e.row,"PTNR_ID")
        					};
        		gfnModalPop(this, "BPtnrInfoPopup", "CPOP::BPtnrInfoPopup.xfdl", sArg, "fnPopCallBack", 570, 465);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.addEventHandler("onload", this.fnOnload, this);
            this.divViewCompTitle00.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompBody02.grdList.addEventHandler("onexpandup", this.grdOnexpandUp, this);
            this.divViewCompBody02.grdList.addEventHandler("onkeydown", this.grdOnkeydown, this);
            this.divViewCompBody02.grdList.addEventHandler("ontextchanged", this.grdOntextchanged, this);
            this.divViewCompTitle03.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompBody03.divViewCompTitle00.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompBody03.divViewCompTitle02.staViewCompTitle02.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompBody03.divViewCompBody02.grdList.addEventHandler("oncelldblclick", this.fnListOncelldblclick, this);
            this.divViewCompBody03.divViewCompBody02.grdList.addEventHandler("ontextchanged", this.fnOntextchanged, this);
            this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.mskQuality.addEventHandler("onchanged", this.fnOnchanged, this);
            this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.mskCost.addEventHandler("onchanged", this.fnOnchanged, this);
            this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.mskSkill.addEventHandler("onchanged", this.fnOnchanged, this);
            this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.mskPeriod.addEventHandler("onchanged", this.fnOnchanged, this);
            this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.mskMana.addEventHandler("onchanged", this.fnOnchanged, this);
            this.divViewCompBody03.tapInfo.tabpage1.divViewCompBody00.mskLimit.addEventHandler("onchanged", this.fnOnchangedOpt, this);
            this.divViewCompTitle04.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompTitle02.btnDel.addEventHandler("onclick", this.fnDelUser, this);
            this.divViewCompTitle02.btnAdd.addEventHandler("onclick", this.fnAddUser, this);
            this.divViewCompTitle02.btnUp.addEventHandler("onclick", this.fnMove, this);
            this.divViewCompTitle02.btnDown.addEventHandler("onclick", this.fnMove, this);

        };

        this.loadIncludeScript("BAprvDetailScjdEval.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
