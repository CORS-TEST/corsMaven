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
                this.set_name("BCntrWriList");
                this.set_titletext("반품교환요청");
                this._setFormPosition(0,0,1220,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsReturn", this);
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

            obj = new Dataset("dsList", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"20\" type=\"STRING\"/><Column id=\"PR_NO\" size=\"256\" type=\"STRING\"/><Column id=\"CD_PR_STTS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PR_STTS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PRE_PR_DIST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PRE_PR_DIST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SRC_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TTL\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"HOPE_REPLY_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_CNTNT\" type=\"STRING\" size=\"256\"/><Column id=\"APP_DOC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ATTCH_FILE_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PCHRGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PCHRGR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RTN_CNTNT\" type=\"STRING\" size=\"256\"/><Column id=\"RCV_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RTN_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LINK_URL\" type=\"STRING\" size=\"256\"/><Column id=\"CRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DUMMY\" type=\"STRING\" size=\"256\"/><Column id=\"CRT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_CHGR_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCondition", this);
            obj._setContents("<ColumnInfo><Column id=\"INSP_DAY_STR\" type=\"STRING\" size=\"8\"/><Column id=\"INSP_DAY_END\" type=\"STRING\" size=\"8\"/><Column id=\"MTRL_CD\" type=\"STRING\" size=\"40\"/><Column id=\"MTRL_NM\" type=\"STRING\" size=\"400\"/><Column id=\"REQ_DAY_STR\" type=\"STRING\" size=\"8\"/><Column id=\"REQ_DAY_END\" type=\"STRING\" size=\"8\"/><Column id=\"INT_TYPE\" type=\"STRING\" size=\"1\"/><Column id=\"CD_VOC_STTS\" type=\"STRING\" size=\"20\"/><Column id=\"SRCH_MTRL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRCH_MTRL_NM\" type=\"STRING\" size=\"400\"/><Column id=\"REQR_ID\" type=\"STRING\" size=\"20\"/><Column id=\"REQR_NM\" type=\"STRING\" size=\"20\"/><Column id=\"SORT_ITEM1\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ITEM2\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ITEM3\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ITEM4\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE1\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE2\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE3\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE4\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdZZ22", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static01", "absolute", null, "0", "15", null, "0", "0", this);
            obj.set_taborder("7");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00", "absolute", "0", "10", null, null, "15", "0", this);
            obj.set_taborder("8");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.Tab00);
            obj.set_text("반품/교환요청");
            this.Tab00.addChild(obj.name, obj);
            obj = new Div("divViewCompCond00", "absolute", "0", "4", null, "36", "0", null, this.Tab00.tabpage1);
            obj.set_taborder("0");
            obj.style.set_align("center");
            obj.set_cssclass("div_WF_SearchBg");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Div("divPrDt", "absolute", "170", "6", "301", "24", null, null, this.Tab00.tabpage1.divViewCompCond00);
            obj.set_taborder("9");
            obj.set_text("Div01");
            obj.getSetter("objNm").set("구매요청일자");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.Tab00.tabpage1.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staPtnrNm", "absolute", "0", "5", "170", "24", null, null, this.Tab00.tabpage1.divViewCompCond00);
            obj.set_taborder("12");
            obj.set_text("구매요청일자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("구매요청일자");
            this.Tab00.tabpage1.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staMtrl", "absolute", "476", "5", "118", "24", null, null, this.Tab00.tabpage1.divViewCompCond00);
            obj.set_taborder("13");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("검색조건명-품목");
            this.Tab00.tabpage1.divViewCompCond00.addChild(obj.name, obj);
            obj = new Edit("edtMtrlCd", "absolute", "594", "5", "121", "24", null, null, this.Tab00.tabpage1.divViewCompCond00);
            obj.set_taborder("14");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("10");
            obj.set_enable("false");
            obj.style.setStyleValue("color", "disabled", "black");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("objNm").set("품목코드");
            this.Tab00.tabpage1.divViewCompCond00.addChild(obj.name, obj);
            obj = new Edit("edtMtrlNm", "absolute", "720", "5", "357", "24", null, null, this.Tab00.tabpage1.divViewCompCond00);
            obj.set_taborder("15");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("품목명");
            this.Tab00.tabpage1.divViewCompCond00.addChild(obj.name, obj);
            obj = new Button("btnSinglePop00", "absolute", "1053", "5", "24", "24", null, null, this.Tab00.tabpage1.divViewCompCond00);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("구매요청자 검색 버튼");
            this.Tab00.tabpage1.divViewCompCond00.addChild(obj.name, obj);
            obj = new Div("divBody", "absolute", "0", "40", null, null, "0", "10", this.Tab00.tabpage1);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0%", "35", null, null, "0%", "28", this.Tab00.tabpage1.divBody);
            obj.set_cssclass("grd_default");
            obj.set_taborder("14");
            obj.set_binddataset("dsList");
            obj.set_autoenter("select");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"36\"/><Column size=\"90\"/><Column size=\"270\"/><Column size=\"80\"/><Column size=\"55\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"144\"/><Column size=\"69\"/><Column size=\"234\"/><Column size=\"79\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"CHECKED\"/><Cell col=\"1\" text=\"입고일자\"/><Cell col=\"2\" text=\"품목명\"/><Cell col=\"3\" text=\"수량\"/><Cell col=\"4\" text=\"단위\"/><Cell col=\"5\" text=\"단가\"/><Cell col=\"6\" text=\"금액\"/><Cell col=\"7\" text=\"협력사명\"/><Cell col=\"8\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;수량\"/><Cell col=\"9\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;사유\"/><Cell col=\"10\" text=\"품목코드\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\"/><Cell col=\"1\" displaytype=\"date\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:INSP_DAY\" mask=\"yyyy.MM.dd\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"2\" style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:MTRL_NM\" tooltiptext=\"bind:MTRL_NM\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:DLV_QTY\" mask=\"#,##0.00\"/><Cell col=\"4\" displaytype=\"normal\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:CD_UNIT_NM\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:UNT_PRICE\" mask=\"#,##0.00\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:AMT\" mask=\"#,##0\"/><Cell col=\"7\" style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:PTNR_NM\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:QTY\" mask=\"#,##0.00\" editautoselect=\"true\"/><Cell col=\"9\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:RMARK\" editautoselect=\"true\"/><Cell col=\"10\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:MTRL_CD\"/></Band></Format></Formats>");
            this.Tab00.tabpage1.divBody.addChild(obj.name, obj);
            obj = new Button("btnRtn", "absolute", null, "6", "69", "24", "72", null, this.Tab00.tabpage1.divBody);
            obj.set_taborder("16");
            obj.set_text("반품요청");
            obj.set_cssclass("btn_WF_Custom");
            obj.getSetter("objNm").set("반품요청");
            this.Tab00.tabpage1.divBody.addChild(obj.name, obj);
            obj = new Button("btnExchange", "absolute", null, "6", "69", "24", "0", null, this.Tab00.tabpage1.divBody);
            obj.set_taborder("17");
            obj.set_text("교환요청");
            obj.set_cssclass("btn_WF_Custom");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("품목검색");
            this.Tab00.tabpage1.divBody.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "0", this.Tab00.tabpage1.divBody);
            obj.set_taborder("18");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("페이징");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.Tab00.tabpage1.divBody.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.Tab00);
            obj.set_text("반품/교환조회");
            this.Tab00.addChild(obj.name, obj);
            obj = new Div("divViewCompCond01", "absolute", "0", "39", null, "84", "0", null, this.Tab00.tabpage2);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBg");
            obj.getSetter("objNm").set("");
            this.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Static("staWarning", "absolute", "-1", "63", null, "19", "0", null, this.Tab00.tabpage2.divViewCompCond01);
            obj.set_taborder("74");
            obj.set_text("- 검색조건 없이 검색 시 속도가 저하 될 수 있습니다.");
            obj.set_cssclass("sta_WF_SearchText");
            this.Tab00.tabpage2.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtMtrlCd", "absolute", "170", "5", "121", "24", null, null, this.Tab00.tabpage2.divViewCompCond01);
            obj.set_taborder("75");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("10");
            obj.set_enable("false");
            obj.style.setStyleValue("color", "disabled", "black");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("objNm").set("품목코드");
            this.Tab00.tabpage2.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtMtrlNm", "absolute", "294", "5", "357", "24", null, null, this.Tab00.tabpage2.divViewCompCond01);
            obj.set_taborder("76");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("품목명");
            this.Tab00.tabpage2.divViewCompCond01.addChild(obj.name, obj);
            obj = new Button("btnSinglePop00", "absolute", "651", "5", "24", "24", null, null, this.Tab00.tabpage2.divViewCompCond01);
            obj.set_taborder("78");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("구매요청자 검색 버튼");
            this.Tab00.tabpage2.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staMtrl", "absolute", "52", "5", "118", "24", null, null, this.Tab00.tabpage2.divViewCompCond01);
            obj.set_taborder("82");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("품목");
            this.Tab00.tabpage2.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staReqr", "absolute", "52", "33", "118", "24", null, null, this.Tab00.tabpage2.divViewCompCond01);
            obj.set_taborder("83");
            obj.set_text("요청자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("요청자");
            this.Tab00.tabpage2.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtReqrId", "absolute", "170", "33", "121", "24", null, null, this.Tab00.tabpage2.divViewCompCond01);
            obj.set_taborder("84");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("10");
            obj.set_enable("false");
            obj.style.setStyleValue("color", "disabled", "black");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("objNm").set("요청자ID");
            this.Tab00.tabpage2.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtReqrNm", "absolute", "294", "33", "176", "24", null, null, this.Tab00.tabpage2.divViewCompCond01);
            obj.set_taborder("85");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("요청자명");
            this.Tab00.tabpage2.divViewCompCond01.addChild(obj.name, obj);
            obj = new Button("btnReqrSearch", "absolute", "470", "33", "24", "24", null, null, this.Tab00.tabpage2.divViewCompCond01);
            obj.set_taborder("86");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("구매요청자 검색 버튼");
            this.Tab00.tabpage2.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divViewCompCond00", "absolute", "0", "4", null, "36", "0", null, this.Tab00.tabpage2);
            obj.set_taborder("1");
            obj.style.set_align("center");
            obj.set_cssclass("div_WF_SearchBg");
            this.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Div("divReqDt", "absolute", "170", "6", "301", "24", null, null, this.Tab00.tabpage2.divViewCompCond00);
            obj.set_taborder("9");
            obj.getSetter("objNm").set("요청일자");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.Tab00.tabpage2.divViewCompCond00.addChild(obj.name, obj);
            obj = new Combo("cboPrStts", "absolute", "594", "6", "148", "24", null, null, this.Tab00.tabpage2.divViewCompCond00);
            this.Tab00.tabpage2.divViewCompCond00.addChild(obj.name, obj);
            var cboPrStts_innerdataset = new Dataset("cboPrStts_innerdataset", this.Tab00.tabpage2.divViewCompCond00.cboPrStts);
            cboPrStts_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">교환</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">반품</Col></Row></Rows>");
            obj.set_innerdataset(cboPrStts_innerdataset);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("objNm").set("구분");
            obj = new Combo("cboPrCtgr", "absolute", "892", "6", "185", "24", null, null, this.Tab00.tabpage2.divViewCompCond00);
            this.Tab00.tabpage2.divViewCompCond00.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_innerdataset("@dsCdZZ22");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("상태");
            obj = new Static("staReqDt", "absolute", "0", "5", "170", "24", null, null, this.Tab00.tabpage2.divViewCompCond00);
            obj.set_taborder("12");
            obj.set_text("요청일자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("검색조건명-요청일자");
            this.Tab00.tabpage2.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staPtnrNm00", "absolute", "476", "5", "118", "24", null, null, this.Tab00.tabpage2.divViewCompCond00);
            obj.set_taborder("13");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("구분");
            this.Tab00.tabpage2.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staPtnrNm01", "absolute", "774", "5", "118", "24", null, null, this.Tab00.tabpage2.divViewCompCond00);
            obj.set_taborder("14");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("상태");
            this.Tab00.tabpage2.divViewCompCond00.addChild(obj.name, obj);
            obj = new Button("btnFold", "absolute", "45.64%", "122", "56", "17", null, null, this.Tab00.tabpage2);
            obj.set_taborder("2");
            obj.set_cssclass("btn_Fold_Close");
            this.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Div("divBody", "absolute", "0", "136", null, null, "0", "0", this.Tab00.tabpage2);
            obj.set_taborder("3");
            obj.set_text("Div00");
            this.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "39", null, null, "0", "36", this.Tab00.tabpage2.divBody);
            obj.set_cssclass("grd_default");
            obj.set_taborder("11");
            obj.set_binddataset("dsList");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"300\"/><Column size=\"120\"/><Column size=\"110\"/><Column size=\"120\"/><Column size=\"110\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"CHECKED\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"품명\"/><Cell col=\"4\" text=\"요청일자\"/><Cell col=\"5\" text=\"요청자\"/><Cell col=\"6\" text=\"처리일자\"/><Cell col=\"7\" text=\"처리자\"/><Cell col=\"8\" text=\"사유\"/><Cell col=\"9\" text=\"구매팀의견\"/><Cell col=\"10\" text=\"요청번호\"/><Cell col=\"11\" text=\"품목코드\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\"/><Cell col=\"1\" displaytype=\"combo\" text=\"bind:INT_TYPE\" combodataset=\"ds_intType\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\"/><Cell col=\"2\" text=\"bind:CD_VOC_STTS_NM\"/><Cell col=\"3\" displaytype=\"normal\" style=\"align:left;\" cssclass=\"cell_link\" text=\"bind:MTRL_NM\" tooltiptext=\"bind:MTRL_NM\"/><Cell col=\"4\" displaytype=\"date\" text=\"bind:CRT_DT\" mask=\"yyyy.MM.dd\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"5\" cssclass=\"cell_link\" text=\"bind:REQR_NM\"/><Cell col=\"6\" displaytype=\"date\" text=\"bind:CMPLT_DT\" mask=\"yyyy.MM.dd\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"7\" cssclass=\"cell_link\" text=\"bind:PCHRGR_NM\"/><Cell col=\"8\" style=\"align:left;\" text=\"bind:RMARK\" tooltiptext=\"bind:RMARK\"/><Cell col=\"9\" style=\"align:left;\" text=\"bind:RTN_CNTNT\" tooltiptext=\"bind:RTN_CNTNT\"/><Cell col=\"10\" cssclass=\"cell_link\" text=\"bind:VOC_NO\"/><Cell col=\"11\" style=\"align: ;\" cssclass=\"cell_link\" text=\"bind:MTRL_CD\"/></Band></Format></Formats>");
            this.Tab00.tabpage2.divBody.addChild(obj.name, obj);
            obj = new Button("btnCancle", "absolute", null, "10", "70", "24", "2", null, this.Tab00.tabpage2.divBody);
            obj.set_taborder("13");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Custom");
            obj.getSetter("objNm").set("취소버튼");
            this.Tab00.tabpage2.divBody.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "12", this.Tab00.tabpage2.divBody);
            obj.set_taborder("14");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("페이징");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.Tab00.tabpage2.divBody.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 36, this.Tab00.tabpage1.divViewCompCond00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_align("center");
            		p.set_cssclass("div_WF_SearchBg");

            	}
            );
            this.Tab00.tabpage1.divViewCompCond00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab00.tabpage1.divBody,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_text("Div00");

            	}
            );
            this.Tab00.tabpage1.divBody.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab00.tabpage1,
            	//-- Layout function
            	function(p) {
            		p.set_text("반품/교환요청");

            	}
            );
            this.Tab00.tabpage1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 84, this.Tab00.tabpage2.divViewCompCond01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_cssclass("div_WF_SearchBg");
            		p.getSetter("objNm").set("");

            	}
            );
            this.Tab00.tabpage2.divViewCompCond01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 36, this.Tab00.tabpage2.divViewCompCond00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_align("center");
            		p.set_cssclass("div_WF_SearchBg");

            	}
            );
            this.Tab00.tabpage2.divViewCompCond00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab00.tabpage2.divBody,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.set_text("Div00");

            	}
            );
            this.Tab00.tabpage2.divBody.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab00.tabpage2,
            	//-- Layout function
            	function(p) {
            		p.set_text("반품/교환조회");

            	}
            );
            this.Tab00.tabpage2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1220, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("반품교환요청");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item7","Tab00.tabpage1.divViewCompCond00.edtMtrlCd","value","dsCondition","MTRL_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Tab00.tabpage1.divViewCompCond00.edtMtrlNm","value","dsCondition","MTRL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Tab00.tabpage2.divViewCompCond01.edtMtrlNm","value","dsCondition","MTRL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","Tab00.tabpage2.divViewCompCond01.edtMtrlCd","value","dsCondition","MTRL_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","Tab00.tabpage2.divViewCompCond00.cboPrStts","value","dsCondition","INT_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","Tab00.tabpage2.divViewCompCond00.cboPrCtgr","value","dsCondition","CD_VOC_STTS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Tab00.tabpage2.divViewCompCond01.edtReqrId","value","dsCondition","REQR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Tab00.tabpage2.divViewCompCond01.edtReqrNm","value","dsCondition","REQR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static01Vi","Static01","visible","dsObjBindVi","Static01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static01En","Static01","enable","dsObjBindEn","Static01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab00Vi","Tab00","visible","dsObjBindVi","Tab00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab00En","Tab00","enable","dsObjBindEn","Tab00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabpage1Vi","Tab00.tabpage1","visible","dsObjBindVi","tabpage1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabpage1En","Tab00.tabpage1","enable","dsObjBindEn","tabpage1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPrDtVi","Tab00.tabpage1.divViewCompCond00.divPrDt","visible","dsObjBindVi","divPrDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPrDtEn","Tab00.tabpage1.divViewCompCond00.divPrDt","enable","dsObjBindEn","divPrDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPtnrNmVi","Tab00.tabpage1.divViewCompCond00.staPtnrNm","visible","dsObjBindVi","staPtnrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPtnrNmEn","Tab00.tabpage1.divViewCompCond00.staPtnrNm","enable","dsObjBindEn","staPtnrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staMtrlVi","Tab00.tabpage1.divViewCompCond00.staMtrl","visible","dsObjBindVi","staMtrl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staMtrlEn","Tab00.tabpage1.divViewCompCond00.staMtrl","enable","dsObjBindEn","staMtrl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtMtrlCdVi","Tab00.tabpage1.divViewCompCond00.edtMtrlCd","visible","dsObjBindVi","edtMtrlCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtMtrlCdEn","Tab00.tabpage1.divViewCompCond00.edtMtrlCd","readonly","dsObjBindEn","edtMtrlCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtMtrlNmVi","Tab00.tabpage1.divViewCompCond00.edtMtrlNm","visible","dsObjBindVi","edtMtrlNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtMtrlNmEn","Tab00.tabpage1.divViewCompCond00.edtMtrlNm","readonly","dsObjBindEn","edtMtrlNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnSinglePop00Vi","Tab00.tabpage1.divViewCompCond00.btnSinglePop00","visible","dsObjBindVi","btnSinglePop00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnSinglePop00En","Tab00.tabpage1.divViewCompCond00.btnSinglePop00","enable","dsObjBindEn","btnSinglePop00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divBodyVi","Tab00.tabpage1.divBody","visible","dsObjBindVi","divBody");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divBodyEn","Tab00.tabpage1.divBody","enable","dsObjBindEn","divBody");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btn_reqRtnVi","Tab00.tabpage1.divBody.btnRtn","visible","dsObjBindVi","btn_reqRtn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btn_reqRtnEn","Tab00.tabpage1.divBody.btnRtn","enable","dsObjBindEn","btn_reqRtn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btn_reqChgVi","Tab00.tabpage1.divBody.btnExchange","visible","dsObjBindVi","btn_reqChg");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btn_reqChgEn","Tab00.tabpage1.divBody.btnExchange","enable","dsObjBindEn","btn_reqChg");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPagingVi","Tab00.tabpage1.divBody.divPaging","visible","dsObjBindVi","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPagingEn","Tab00.tabpage1.divBody.divPaging","enable","dsObjBindEn","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabpage2Vi","Tab00.tabpage2","visible","dsObjBindVi","tabpage2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabpage2En","Tab00.tabpage2","enable","dsObjBindEn","tabpage2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtMtrlCd_7Vi","Tab00.tabpage2.divViewCompCond01.edtMtrlCd","visible","dsObjBindVi","edtMtrlCd_7");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtMtrlCd_7En","Tab00.tabpage2.divViewCompCond01.edtMtrlCd","readonly","dsObjBindEn","edtMtrlCd_7");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtMtrlNm_8Vi","Tab00.tabpage2.divViewCompCond01.edtMtrlNm","visible","dsObjBindVi","edtMtrlNm_8");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtMtrlNm_8En","Tab00.tabpage2.divViewCompCond01.edtMtrlNm","readonly","dsObjBindEn","edtMtrlNm_8");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnSinglePop00_9Vi","Tab00.tabpage2.divViewCompCond01.btnSinglePop00","visible","dsObjBindVi","btnSinglePop00_9");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnSinglePop00_9En","Tab00.tabpage2.divViewCompCond01.btnSinglePop00","enable","dsObjBindEn","btnSinglePop00_9");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staMtrl_6Vi","Tab00.tabpage2.divViewCompCond01.staMtrl","visible","dsObjBindVi","staMtrl_6");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staMtrl_6En","Tab00.tabpage2.divViewCompCond01.staMtrl","enable","dsObjBindEn","staMtrl_6");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staReqrVi","Tab00.tabpage2.divViewCompCond01.staReqr","visible","dsObjBindVi","staReqr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staReqrEn","Tab00.tabpage2.divViewCompCond01.staReqr","enable","dsObjBindEn","staReqr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtReqrIdVi","Tab00.tabpage2.divViewCompCond01.edtReqrId","visible","dsObjBindVi","edtReqrId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtReqrIdEn","Tab00.tabpage2.divViewCompCond01.edtReqrId","readonly","dsObjBindEn","edtReqrId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtReqrNmVi","Tab00.tabpage2.divViewCompCond01.edtReqrNm","visible","dsObjBindVi","edtReqrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtReqrNmEn","Tab00.tabpage2.divViewCompCond01.edtReqrNm","readonly","dsObjBindEn","edtReqrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnReqrSearchVi","Tab00.tabpage2.divViewCompCond01.btnReqrSearch","visible","dsObjBindVi","btnReqrSearch");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnReqrSearchEn","Tab00.tabpage2.divViewCompCond01.btnReqrSearch","enable","dsObjBindEn","btnReqrSearch");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divReqDtVi","Tab00.tabpage2.divViewCompCond00.divReqDt","visible","dsObjBindVi","divReqDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divReqDtEn","Tab00.tabpage2.divViewCompCond00.divReqDt","enable","dsObjBindEn","divReqDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboPrSttsVi","Tab00.tabpage2.divViewCompCond00.cboPrStts","visible","dsObjBindVi","cboPrStts");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboPrSttsEn","Tab00.tabpage2.divViewCompCond00.cboPrStts","readonly","dsObjBindEn","cboPrStts");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboPrCtgrVi","Tab00.tabpage2.divViewCompCond00.cboPrCtgr","visible","dsObjBindVi","cboPrCtgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboPrCtgrEn","Tab00.tabpage2.divViewCompCond00.cboPrCtgr","readonly","dsObjBindEn","cboPrCtgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staReqDtVi","Tab00.tabpage2.divViewCompCond00.staReqDt","visible","dsObjBindVi","staReqDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staReqDtEn","Tab00.tabpage2.divViewCompCond00.staReqDt","enable","dsObjBindEn","staReqDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPtnrNm00Vi","Tab00.tabpage2.divViewCompCond00.staPtnrNm00","visible","dsObjBindVi","staPtnrNm00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPtnrNm00En","Tab00.tabpage2.divViewCompCond00.staPtnrNm00","enable","dsObjBindEn","staPtnrNm00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPtnrNm01Vi","Tab00.tabpage2.divViewCompCond00.staPtnrNm01","visible","dsObjBindVi","staPtnrNm01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPtnrNm01En","Tab00.tabpage2.divViewCompCond00.staPtnrNm01","enable","dsObjBindEn","staPtnrNm01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnFoldVi","Tab00.tabpage2.btnFold","visible","dsObjBindVi","btnFold");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnFoldEn","Tab00.tabpage2.btnFold","enable","dsObjBindEn","btnFold");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divBody_10Vi","Tab00.tabpage2.divBody","visible","dsObjBindVi","divBody_10");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divBody_10En","Tab00.tabpage2.divBody","enable","dsObjBindEn","divBody_10");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnCancleVi","Tab00.tabpage2.divBody.btnCancle","visible","dsObjBindVi","btnCancle");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnCancleEn","Tab00.tabpage2.divBody.btnCancle","enable","dsObjBindEn","btnCancle");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPaging_13Vi","Tab00.tabpage2.divBody.divPaging","visible","dsObjBindVi","divPaging_13");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPaging_13En","Tab00.tabpage2.divBody.divPaging","enable","dsObjBindEn","divPaging_13");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompCalFromTo.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompCalFromTo.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
        };
        
        // User Script
        this.registerScript("BPrReturnList.xfdl", function(exports) {
        /**
         * @파일명			: BPrePrList
         * @생성자			: 배열
         * @생성일시		: 2019. 05. 22.
         * @설명			: 사전요청현황
         * @최종수정자		: 배열
         * @최종수정일시	: 2019. 05. 22.
        */  

        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {
        	var param = [
        					 {code:"ZZ22",sSelectType:"A"} 	//상태
        				];				
        	gfnGetCode(this, param);
        }

        /**
          * @함수명	: BRfqPrgList_oninit
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.InitEventInfo(이벤트변수)
          * @desc     	: 폼 oninit이벤트
          */
        this.FormOninit = function(obj,e)
        {
        	this.fnSetCode();
        }

        /**
        	@함수명	fnFold
        	@desc   	타이틀 접기/펼치기 기능
        */
        this.fnFold = function()
        {
        	var sArg = [ 
        				{ttl:this.Tab00.tabpage2.btnFold, body:this.Tab00.tabpage2.divViewCompCond01,initFold:true}
        		   ];		   
        	gfnDivFold(this.parent.parent, sArg);
        }

        /**
          * @함수명	: fnFormOnload
          * @input    	: obj:Form(폼 오브젝트), e:nexacr o.LoadEventInfo(이벤트변수)
          * @desc     	: 폼 onload이벤트
          */
        this.FormOnload = function(obj,e)
        {	
        	gfnSetObj("A");
        	//그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기(그리드 컴포넌트, 페이징div 컴포넌트, 폼오브젝트(this))
         	gfnSetGrdFunc(this.Tab00.tabpage1.divBody.grdList, this.Tab00.tabpage1.divBody.divPaging, this,{isTran:"Y", tranNm:"BPrService.prRtnChgReqSrch", dsParam:this.dsCondition});
         	gfnSetGrdFunc(this.Tab00.tabpage2.divBody.grdList, this.Tab00.tabpage2.divBody.divPaging, this,{isTran:"Y", tranNm:"BPrService.prRtnChgSrch", dsParam:this.dsCondition});

         	//조회조건 Div 접기/펼치기 세팅
         	this.fnFold();
        	//요청일자 셋팅
        	this.Tab00.tabpage1.divViewCompCond00.divPrDt.fnSetDate(this.dsCondition, "INSP_DAY_STR", "INSP_DAY_END");	
        	this.Tab00.tabpage2.divViewCompCond00.divReqDt.fnSetDate(this.dsCondition, "REQ_DAY_STR", "REQ_DAY_END");
        	
        	// 반품/교환
        	//this.dsCondition.setColumn(0,"INSP_DAY_STR",this.gfnAddMonth(gfnToday(),-1));
        	//this.dsCondition.setColumn(0,"INSP_DAY_END",this.gfnToday());
        	
        	// 반품/교환조회
        	this.dsCondition.setColumn(0,"INT_TYPE","");
        	this.dsCondition.setColumn(0,"CD_VOC_STTS","");
        	//this.dsCondition.setColumn(0,"REQ_DAY_STR",gfnAddMonth(gfnToday(),-1));
        	//this.dsCondition.setColumn(0,"REQ_DAY_END",gfnToday());
        	
        	this.fnSearch();
        }  

        /**
          * @함수명	: fnPreSearch
          * @desc     	: 조회 전 처리
          */
        this.fnPreSearch = function()
        {
        	return true;
        }

        /**
          * @함수명	: fnSearch
          * @desc     	: 조회 프로세스
          */
        this.fnSearch = function(svcId)
        {
        	if(!this.fnPreSearch()) return false;
        	
        	if(this.Tab00.tabindex == 0){
        		var sSvcID = "prRtnChgReqSrch";
        		var sController = "epro.pur.service.BPrService.prRtnChgReqSrch";
        		var sInDatasets = "dsCondition=dsCondition";
        		var sOutDatasets = "dsList=dsList";
        		var sCallbackFunc = "fnTrCallBack";
        			
        		var	oPaging = [      
        						{inDs:this.dsCondition, grid:this.Tab00.tabpage1.divBody.grdList, divPaging:this.Tab00.tabpage1.divBody.divPaging}
        					];
        		 gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc, oPaging);	
        	}else if(this.Tab00.tabindex == 1){
        		var sSvcID = "prRtnChgSrch";
        		var sController = "epro.pur.service.BPrService.prRtnChgSrch";
        		var sInDatasets = "dsCondition=dsCondition";
        		var sOutDatasets = "dsList=dsList";
        		var sCallbackFunc = "fnTrCallBack";
        			
        		var	oPaging = [      
        						{inDs:this.dsCondition, grid:this.Tab00.tabpage2.divBody.grdList, divPaging:this.Tab00.tabpage2.divBody.divPaging}
        					];
        		 gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc, oPaging);			
        	}	
        	
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
        		case "prRtnChgReqSrch" :
        		break;
        		case "prRtnChgSrch" :
        		break;
        				
        		default:
        		break;	
        	}
        }

        this.fnRtnonclick = function(obj,e)
        {
        	this.fnReqCheck("A");
        }

        this.fnExchangeOnclick = function(obj,e)
        {
        	this.fnReqCheck("B");
        }

        
        this.fnReqCheck = function(arg)
        {
        	//선택된 아이템의 유무를 리턴한다.
        	var rtn = gfnGetChkRowString(this.dsList);	
        	if(!rtn) return false;
        	
        	//사용자 유효성 체크 추가
        	var arrUserErr = [];
        	var sMsg = ""
        	
        	if(arg=="A"){
        		sMsg = "반품";
        		
        	}else if(arg=="B"){
        		sMsg = "교환";
        	}
        	
        	this.dsList.set_enableevent(false);
        	this.dsList.filter("CHECKED == 1");
        	
        	for(var i=0; i<this.dsList.rowcount; i++){
        		if(Number(this.dsList.getColumn(i,"DLV_QTY")) < Number(this.dsList.getColumn(i,"QTY"))){
        			
        			var objParam = {agv_msg:sMsg+"수량이 입고수량보다 클 수 없습니다.", agv_objComp:this.Tab00.tabpage1.div_body.grd_list, agv_errLvl:"E", agv_validType:"필수 체크"};
        			
        			arrUserErr.push(objParam);
        		}
        		this.dsList.setColumn(i,"INT_TYPE",arg);
        	}
        	
        	// 필수항목 체크
        	if(!this.gfn_validate(arrUserErr, "N","")){
        		this.dsList.filter("");
        		this.dsList.set_enableevent(true);
        		return false;
        	}
        	
        	this.dsList.filter("");
        	this.dsList.set_enableevent(true);
        	
        	if(!gfnConfirm(sMsg+"요청 하시겠습니까?")) return false;
        	
        	 
        	var sSvcID = "saveReqRtnChg";
        	var sController = "epro.pur.service.BPrService.saveReqRtnChg";
        	var sInDatasets = "dsList=dsList";
        	var sOutDatasets = "dsList=dsList";
        	var sCallbackFunc = "fnTrCallBack";
        	
            this.gfn_tran(sSvcID, sController, sInDatasets,"",sCallbackFunc);
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.FormOninit, this);
            this.addEventHandler("onload", this.FormOnload, this);
            this.Tab00.tabpage1.divViewCompCond00.staPtnrNm.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.Tab00.tabpage1.divViewCompCond00.staMtrl.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.Tab00.tabpage1.divViewCompCond00.edtMtrlNm.addEventHandler("onkeydown", this.fnKeydown, this);
            this.Tab00.tabpage1.divViewCompCond00.edtMtrlNm.addEventHandler("ontextchanged", this.div_condition1_ed_ptnrNm_ontextchanged, this);
            this.Tab00.tabpage1.divViewCompCond00.btnSinglePop00.addEventHandler("onclick", this.fnPtnrSearch, this);
            this.Tab00.tabpage1.divBody.grdList.addEventHandler("oncelldblclick", this.Tab00_tabpage1_div_body_grd_list_oncelldblclick, this);
            this.Tab00.tabpage1.divBody.btnRtn.addEventHandler("onclick", this.fnRtnonclick, this);
            this.Tab00.tabpage1.divBody.btnExchange.addEventHandler("onclick", this.fnExchangeOnclick, this);
            this.Tab00.tabpage2.divViewCompCond01.edtMtrlNm.addEventHandler("onkeydown", this.fnKeydown, this);
            this.Tab00.tabpage2.divViewCompCond01.edtMtrlNm.addEventHandler("ontextchanged", this.div_condition1_ed_ptnrNm_ontextchanged, this);
            this.Tab00.tabpage2.divViewCompCond01.btnSinglePop00.addEventHandler("onclick", this.fnPtnrSearch, this);
            this.Tab00.tabpage2.divViewCompCond01.staMtrl.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.Tab00.tabpage2.divViewCompCond01.staReqr.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.Tab00.tabpage2.divViewCompCond01.edtReqrNm.addEventHandler("onkeydown", this.fnOnkeydownEvent, this);
            this.Tab00.tabpage2.divViewCompCond01.edtReqrNm.addEventHandler("ontextchanged", this.Edit_ontextchanged, this);
            this.Tab00.tabpage2.divViewCompCond01.btnReqrSearch.addEventHandler("onclick", this.fnPchrgeSearch, this);
            this.Tab00.tabpage2.divViewCompCond00.staReqDt.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.Tab00.tabpage2.divViewCompCond00.staPtnrNm00.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.Tab00.tabpage2.divViewCompCond00.staPtnrNm01.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.Tab00.tabpage2.btnFold.addEventHandler("onclick", this.btnFold_onclick, this);
            this.Tab00.tabpage2.divBody.grdList.addEventHandler("oncelldblclick", this.Tab00_tabpage1_div_body_grd_list_oncelldblclick, this);

        };

        this.loadIncludeScript("BPrReturnList.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
