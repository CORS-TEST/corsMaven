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
                this.set_name("BRelReqList");
                this.set_titletext("출고등록");
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

            obj = new Dataset("dsCondition", this);
            obj._setContents("<ColumnInfo><Column id=\"SRCH_MTRL_CD\" type=\"STRING\" size=\"40\"/><Column id=\"SRCH_MTRL_NM\" type=\"STRING\" size=\"400\"/><Column id=\"SRCH_STR_CD\" type=\"STRING\" size=\"40\"/><Column id=\"SRCH_STR_NM\" type=\"STRING\" size=\"400\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRCH_REQ_DAY_STR\" type=\"STRING\" size=\"256\"/><Column id=\"SRCH_REQ_DAY_END\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"20\" type=\"STRING\"/><Column id=\"GI_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GI_STTS\" type=\"STRING\" size=\"256\"/><Column id=\"TTL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsItem", this);
            obj._setContents("<ColumnInfo><Column id=\"CHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"GI_REQ_ITEM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GI_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_STR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_STR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GI_REQ_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"GI_CFM_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"GI_CFMR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GI_RI_STTS\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_ITEM_ACC\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_ITEM_ACC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"CFM_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"CRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CRT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_CHGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_CHG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"STOCK_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"MOVE_REQ_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"RELEPOSS\" type=\"STRING\" size=\"256\"/><Column id=\"UNT_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PUR_UNIT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"TMP\" type=\"STRING\" size=\"256\"/><Column id=\"APP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHeader", this);
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GI_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"IN_STR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IN_STR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GI_STTS\" type=\"STRING\" size=\"256\"/><Column id=\"GI_REQR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"GI_REQR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GI_REQ_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"CRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_CHGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APP_DOC_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Tab("Tab01", "absolute", "0", "5", null, null, "0", "0", this);
            obj.set_taborder("0");
            obj.set_preload("true");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.set_cssclass("tab_default");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabp01", this.Tab01);
            obj.set_text("출고요청작성");
            obj.set_scrollbars("none");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("출고요청작성");
            this.Tab01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "-40", "5", null, "33", "0", null, this.Tab01.tabp01);
            obj.set_taborder("137");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtWriting", "absolute", "125", "9", "81", "24", null, null, this.Tab01.tabp01);
            obj.set_taborder("153");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("edtWriting");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Div("div_2", "absolute", "0", "49", null, "30", "3", null, this.Tab01.tabp01);
            obj.set_taborder("156");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("DIV_품목타이");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "0", "111", null, null, "0", this.Tab01.tabp01.div_2);
            obj.set_taborder("19");
            obj.set_text("출고요청정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_color("black");
            obj.style.set_padding("0 0 2 17");
            this.Tab01.tabp01.div_2.addChild(obj.name, obj);
            obj = new Static("staViewCompLine03", "absolute", "0", "88", null, "33", "0", null, this.Tab01.tabp01);
            obj.set_taborder("157");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Calendar("edtReqDate", "absolute", "417", "92", "150", "24", null, null, this.Tab01.tabp01);
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("158");
            obj.set_dateformat("yyyy.MM.dd ddd");
            obj.set_editformat("yyyy.MM.dd ddd");
            obj.getSetter("objNm").set("edtReqDate");
            obj = new Static("Static01", "absolute", "218", "9", null, "24", "974", null, this.Tab01.tabp01);
            obj.set_taborder("161");
            obj.set_text("건");
            obj.set_enable("true");
            obj.style.set_color("black");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "464", "9", null, "24", "727", null, this.Tab01.tabp01);
            obj.set_taborder("162");
            obj.set_text("건");
            obj.style.set_color("black");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtPos", "absolute", "373", "9", "81", "24", null, null, this.Tab01.tabp01);
            obj.set_taborder("164");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("edtPostulat");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Combo("edtStr", "absolute", "124", "92", "150", "24", null, null, this.Tab01.tabp01);
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("168");
            obj.set_innerdataset("dsCdCM91");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("edtStr");
            obj = new Div("div_00", "absolute", "0", "133", null, "30", "3", null, this.Tab01.tabp01);
            obj.set_taborder("169");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("DIV_품목타이");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "0", "111", null, null, "0", this.Tab01.tabp01.div_00);
            obj.set_taborder("0");
            obj.set_text("품목정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_color("black");
            obj.style.set_padding("0 0 2 17");
            this.Tab01.tabp01.div_00.addChild(obj.name, obj);
            obj = new Button("btn_Item_Search", "absolute", null, "3", "100", null, "62", "3", this.Tab01.tabp01.div_00);
            obj.set_taborder("1");
            obj.set_text("+품목검색");
            obj.set_cssclass("btn_WF_Add");
            obj.style.set_background("#dfdfdfff");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("이전요청검색");
            this.Tab01.tabp01.div_00.addChild(obj.name, obj);
            obj = new Button("btn_Itm_Del", "absolute", null, "3", "60", null, "0", "3", this.Tab01.tabp01.div_00);
            obj.set_taborder("2");
            obj.set_text("- 삭제");
            obj.set_cssclass("btn_WF_Delete");
            obj.style.set_background("#dfdfdfff");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("행삭제");
            this.Tab01.tabp01.div_00.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "173", null, null, "0", "0", this.Tab01.tabp01);
            obj.set_taborder("170");
            obj.set_autoenter("select");
            obj.set_selecttype("cell");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.getSetter("f_colSize").set("N");
            obj.getSetter("f_excel").set("Y");
            obj.getSetter("f_filter").set("N");
            obj.getSetter("f_find").set("N");
            obj.getSetter("f_fix").set("Y");
            obj.getSetter("f_height").set("N");
            obj.getSetter("f_hide").set("N");
            obj.getSetter("f_init").set("Y");
            obj.getSetter("f_mode").set("Y");
            obj.getSetter("f_save").set("N");
            obj.getSetter("f_sort").set("Y");
            obj.getSetter("objNm").set("품목그리드");
            obj.set_autofittype("col");
            obj.set_binddataset("dsItem");
            obj._setContents("<Formats><Format id=\"MMODE\"><Columns><Column size=\"43\"/><Column size=\"104\"/><Column size=\"371\"/><Column size=\"58\"/><Column size=\"99\"/><Column size=\"91\"/><Column size=\"87\"/><Column size=\"113\"/><Column size=\"118\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"품목코드\"/><Cell col=\"2\" text=\"품목명\"/><Cell col=\"3\" text=\"단위\"/><Cell col=\"4\" text=\"출고창고\"/><Cell col=\"5\" text=\"현재고\"/><Cell col=\"6\" text=\"출고대기\"/><Cell col=\"7\" text=\"출고가능수량\"/><Cell col=\"8\" text=\"요청수량\"/><Cell col=\"9\" text=\"출고계정명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\" maskchar=\" \" editdisplay=\"display\" expandshow=\"hide\"/><Cell col=\"1\" style=\"selectcolor:darkslateblue;\" text=\"bind:MTRL_CD\" tooltiptext=\"bind:MTRL_CD\"/><Cell col=\"2\" style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;selectcolor:darkslateblue;\" cssclass=\"cell_link\" text=\"bind:MTRL_NM2\" tooltiptext=\"bind:DOC_NM\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:CD_PUR_UNIT\" maskchar=\" \" combodataset=\"dsCdCM11\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" tooltiptext=\"bind:CD_PUR_UNIT\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;color:royalblue;color2:royalblue;selectcolor:blue;selectfont:9 Dotum bold;\" text=\"bind:OUT_STR_NM\" editautoselect=\"true\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;color:salmon;color2:salmon;font:9 Dotum bold;selectcolor:fuchsia;selectfont:9 Dotum bold;\" text=\"bind:STOCK_QTY\" mask=\"#,##0.00\" editautoselect=\"true\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:REQ_QTY\" mask=\"#,##0\" editautoselect=\"true\"/><Cell col=\"7\" edittype=\"none\" text=\"bind:RELEPOSS\" expandshow=\"show\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"8\" displaytype=\"date\" edittype=\"date\" text=\"bind:REQ_QTY\" mask=\"yyyy.MM.dd\" editautoselect=\"true\"/><Cell col=\"9\" edittype=\"text\" style=\"align:left;\" text=\"bind:OUT_ITEM_ACC_NM\" editautoselect=\"true\" expandshow=\"show\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/></Band></Format><Format id=\"VMODE\"><Columns><Column size=\"104\"/><Column size=\"288\"/><Column size=\"58\"/><Column size=\"61\"/><Column size=\"122\"/><Column size=\"110\"/><Column size=\"124\"/><Column size=\"94\"/><Column size=\"120\"/><Column size=\"147\"/><Column size=\"71\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"품목코드\"/><Cell col=\"1\" text=\"품목명\"/><Cell col=\"2\" text=\"단위\"/><Cell col=\"3\" text=\"수량\"/><Cell col=\"4\" text=\"예상단가\"/><Cell col=\"5\" text=\"금액\"/><Cell col=\"6\" text=\"입고부서\"/><Cell col=\"7\" text=\"입고요청일\"/><Cell col=\"8\" text=\"입고계정\"/><Cell col=\"9\" text=\"비고\"/><Cell col=\"10\" text=\"첨부파일\"/></Band><Band id=\"body\"><Cell style=\"selectcolor:darkslateblue;\" text=\"bind:MTRL_CD\" tooltiptext=\"bind:MTRL_CD\"/><Cell col=\"1\" edittype=\"none\" style=\"align:left;selectcolor:darkslateblue;\" cssclass=\"cell_link\" text=\"bind:MTRL_NM\" tooltiptext=\"bind:DOC_NM\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"none\" text=\"bind:CD_UNIT\" maskchar=\" \" combodataset=\"dsCdCM11\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" tooltiptext=\"bind:CD_PUR_UNIT\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right;color:royalblue;color2:royalblue;selectcolor:blue;selectfont:9 Dotum bold;\" text=\"bind:QTY\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"none\" style=\"align:right;color:salmon;color2:salmon;font:9 Dotum bold;selectcolor:fuchsia;selectfont:9 Dotum bold;\" text=\"bind:REQ_PRICE\" mask=\"#,##0.00\" editautoselect=\"true\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:REQ_AMT\" mask=\"#,##0\" editautoselect=\"true\"/><Cell col=\"6\" edittype=\"none\" text=\"bind:IN_STR_NM\" expandshow=\"hide\"/><Cell col=\"7\" displaytype=\"date\" edittype=\"none\" text=\"bind:DLV_REQ_DAY\" mask=\"yyyy.MM.dd\" editautoselect=\"true\"/><Cell col=\"8\" edittype=\"none\" style=\"align:left;\" text=\"bind:GR_ACNT_NM\" editautoselect=\"true\" expandshow=\"hide\"/><Cell col=\"9\" edittype=\"none\" style=\"align:left;\" text=\"bind:RMARK\" editautoselect=\"true\"/><Cell col=\"10\" displaytype=\"text\" cssclass=\"cell_link\" text=\"bind:ATTCH_FILE_CNT\"/></Band></Format></Formats>");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staPrNm", "absolute", "311", "92", "105", "24", null, null, this.Tab01.tabp01);
            obj.set_taborder("173");
            obj.set_text("출고요청일");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_color("black");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("userdata").set("출고요청일");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staStr", "absolute", "20", "92", "105", "24", null, null, this.Tab01.tabp01);
            obj.set_taborder("174");
            obj.set_text("입고창고");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_color("black");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("userdata").set("입고창고");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staWriting", "absolute", "20", "9", "105", "24", null, null, this.Tab01.tabp01);
            obj.set_taborder("175");
            obj.set_text("작성중");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_color("green");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("작성중");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staPos", "absolute", "267", "9", "105", "24", null, null, this.Tab01.tabp01);
            obj.set_taborder("176");
            obj.set_text("요청(품의중)");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_color("green");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("요청(품의중)");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "91.46%", "9", null, "24", "0.33%", null, this.Tab01.tabp01);
            obj.set_taborder("177");
            obj.set_text("출고품의요청");
            obj.set_cssclass("btn_WF_SearchBtn");
            obj.style.set_background("#888888ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 malgun gothic");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "9", this.Tab01.tabp01);
            obj.set_taborder("178");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("페이징");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Tabpage("tabp02", this.Tab01);
            obj.getSetter("objNm").set("출고현황");
            obj.set_text("출고현황");
            this.Tab01.addChild(obj.name, obj);
            obj = new Div("divViewCompCond00", "absolute", "0", "0", null, "36", "0", null, this.Tab01.tabp02);
            obj.set_taborder("0");
            obj.style.set_align("center");
            obj.set_cssclass("div_WF_SearchBg");
            this.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Edit("edtAll", "absolute", "82", "5", "56", "24", null, null, this.Tab01.tabp02.divViewCompCond00);
            obj.set_taborder("37");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("전체");
            this.Tab01.tabp02.divViewCompCond00.addChild(obj.name, obj);
            obj = new Edit("edtPos", "absolute", "192", "5", "56", "24", null, null, this.Tab01.tabp02.divViewCompCond00);
            obj.set_taborder("40");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("요청");
            this.Tab01.tabp02.divViewCompCond00.addChild(obj.name, obj);
            obj = new Edit("edtReqEnd", "absolute", "325", "5", "56", "24", null, null, this.Tab01.tabp02.divViewCompCond00);
            obj.set_taborder("42");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("출고완료");
            this.Tab01.tabp02.divViewCompCond00.addChild(obj.name, obj);
            obj = new Div("divPrDt", "absolute", "571", "6", "301", "24", null, null, this.Tab01.tabp02.divViewCompCond00);
            obj.set_taborder("43");
            obj.set_text("Div01");
            obj.getSetter("objNm").set("출고요청일");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.Tab01.tabp02.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staAll", "absolute", "0", "6", "82", "24", null, null, this.Tab01.tabp02.divViewCompCond00);
            obj.set_taborder("45");
            obj.set_text("전체");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_color("green");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.Tab01.tabp02.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staPos", "absolute", "111", "6", "82", "24", null, null, this.Tab01.tabp02.divViewCompCond00);
            obj.set_taborder("46");
            obj.set_text("요청");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_color("green");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.Tab01.tabp02.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staReqEnd", "absolute", "246", "6", "82", "24", null, null, this.Tab01.tabp02.divViewCompCond00);
            obj.set_taborder("47");
            obj.set_text("출고완료");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_color("green");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.Tab01.tabp02.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staReqDate", "absolute", "470", "6", "99", "24", null, null, this.Tab01.tabp02.divViewCompCond00);
            obj.set_taborder("48");
            obj.set_text("출고요청일");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.Tab01.tabp02.divViewCompCond00.addChild(obj.name, obj);
            obj = new Div("divViewCompCond01", "absolute", "0", "35", null, "88", "0", null, this.Tab01.tabp02);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_SearchBg");
            obj.getSetter("objNm").set("");
            this.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Static("staOrderBy", "absolute", "0", "34", "105", "24", null, null, this.Tab01.tabp02.divViewCompCond01);
            obj.set_taborder("91");
            obj.set_text("정렬순서");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_color("black");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.Tab01.tabp02.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divOrderBy", "absolute", "106", "34", null, "24", "87", null, this.Tab01.tabp02.divViewCompCond01);
            obj.set_taborder("92");
            obj.set_text("Div00");
            obj.getSetter("objNm").set("정렬순서");
            obj.set_url("CCOMP::CompOrderBy.xfdl");
            this.Tab01.tabp02.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staWarning", "absolute", "-1", "67", null, "19", "0", null, this.Tab01.tabp02.divViewCompCond01);
            obj.set_taborder("93");
            obj.set_text("- 검색조건 없이 검색 시 속도가 저하 될 수 있습니다.");
            obj.set_cssclass("sta_WF_SearchText");
            this.Tab01.tabp02.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staMtrl00", "absolute", "439", "6", "99", "24", null, null, this.Tab01.tabp02.divViewCompCond01);
            obj.set_taborder("99");
            obj.set_text("출고창고");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.Tab01.tabp02.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divReqStr", "absolute", "544", "6", null, "24", "417", null, this.Tab01.tabp02.divViewCompCond01);
            obj.set_taborder("100");
            obj.set_text("Div01");
            obj.getSetter("objNm").set("출고창고");
            obj.set_url("CCOMP::ComSrchStr.xfdl");
            this.Tab01.tabp02.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staMtrl01", "absolute", "773", "6", "99", "24", null, null, this.Tab01.tabp02.divViewCompCond01);
            obj.set_taborder("101");
            obj.set_text("입고창고");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.Tab01.tabp02.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divPutStr", "absolute", "882", "6", null, "24", "78", null, this.Tab01.tabp02.divViewCompCond01);
            obj.set_taborder("102");
            obj.set_text("Div01");
            obj.getSetter("objNm").set("입고창고");
            obj.set_url("CCOMP::ComSrchStr.xfdl");
            this.Tab01.tabp02.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staPrNm00", "absolute", "0", "6", "105", "24", null, null, this.Tab01.tabp02.divViewCompCond01);
            obj.set_taborder("103");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_color("black");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.Tab01.tabp02.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divMtrl", "absolute", "106", "6", null, "24", "748", null, this.Tab01.tabp02.divViewCompCond01);
            obj.set_taborder("104");
            obj.set_text("Div01");
            obj.getSetter("objNm").set("품목");
            obj.set_url("CCOMP::ComSrchMtrl.xfdl");
            this.Tab01.tabp02.divViewCompCond01.addChild(obj.name, obj);
            obj = new Button("btnFold", "absolute", "45.65%", "122", "56", "17", null, null, this.Tab01.tabp02);
            obj.set_taborder("2");
            obj.set_cssclass("btn_Fold_Close");
            this.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "177", null, null, "0", "9", this.Tab01.tabp02);
            obj.set_taborder("3");
            obj.set_binddataset("dsItem");
            obj.set_autoenter("select");
            obj.set_selecttype("cell");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj.getSetter("f_colSize").set("N");
            obj.getSetter("f_excel").set("Y");
            obj.getSetter("f_filter").set("N");
            obj.getSetter("f_find").set("N");
            obj.getSetter("f_fix").set("Y");
            obj.getSetter("f_height").set("N");
            obj.getSetter("f_hide").set("N");
            obj.getSetter("f_init").set("Y");
            obj.getSetter("f_mode").set("Y");
            obj.getSetter("f_save").set("N");
            obj.getSetter("f_sort").set("Y");
            obj.getSetter("objNm").set("품목그리드");
            obj._setContents("<Formats><Format id=\"MMODE\"><Columns><Column size=\"43\"/><Column size=\"104\"/><Column size=\"288\"/><Column size=\"89\"/><Column size=\"119\"/><Column size=\"114\"/><Column size=\"72\"/><Column size=\"70\"/><Column size=\"87\"/><Column size=\"83\"/><Column size=\"47\"/><Column size=\"77\"/><Column size=\"160\"/><Column size=\"107\"/><Column size=\"85\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"품목번호\"/><Cell col=\"2\" text=\"품목명\"/><Cell col=\"3\" text=\"출고요청일\"/><Cell col=\"4\" text=\"출고창고명\"/><Cell col=\"5\" text=\"입고창고명\"/><Cell col=\"6\" text=\"요청수량\"/><Cell col=\"7\" text=\"출고수량\"/><Cell col=\"8\" text=\"출고담당자\"/><Cell col=\"9\" text=\"출고완료일\"/><Cell col=\"10\" text=\"단위\"/><Cell col=\"11\" text=\"단가\"/><Cell col=\"12\" text=\"품목분류\"/><Cell col=\"13\" text=\"출고계정명\"/><Cell col=\"14\" text=\"상태\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\" maskchar=\" \" editdisplay=\"display\" expandshow=\"hide\"/><Cell col=\"1\" style=\"selectcolor:darkslateblue;\" text=\"bind:MTRL_CD\" tooltiptext=\"bind:MTRL_CD\"/><Cell col=\"2\" style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;selectcolor:darkslateblue;\" cssclass=\"cell_link\" text=\"bind:MTRL_NM2\" tooltiptext=\"bind:DOC_NM\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:CRT_DT\" maskchar=\" \" combodataset=\"dsCdCM11\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" tooltiptext=\"bind:CD_PUR_UNIT\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;color:royalblue;color2:royalblue;selectcolor:blue;selectfont:9 Dotum bold;\" text=\"bind:OUT_STR_NM\" editautoselect=\"true\"/><Cell col=\"5\"/><Cell col=\"6\" text=\"bind:CFM_QTY\"/><Cell col=\"7\" text=\"bind:REQ_QTY\"/><Cell col=\"8\"/><Cell col=\"9\" text=\"bind:LAST_CHG_DT\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\" text=\"bind:OUT_ITEM_ACC_NM\"/><Cell col=\"14\"/></Band></Format><Format id=\"VMODE\"><Columns><Column size=\"104\"/><Column size=\"288\"/><Column size=\"58\"/><Column size=\"61\"/><Column size=\"122\"/><Column size=\"110\"/><Column size=\"124\"/><Column size=\"94\"/><Column size=\"120\"/><Column size=\"147\"/><Column size=\"71\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"품목코드\"/><Cell col=\"1\" text=\"품목명\"/><Cell col=\"2\" text=\"단위\"/><Cell col=\"3\" text=\"수량\"/><Cell col=\"4\" text=\"예상단가\"/><Cell col=\"5\" text=\"금액\"/><Cell col=\"6\" text=\"입고부서\"/><Cell col=\"7\" text=\"입고요청일\"/><Cell col=\"8\" text=\"입고계정\"/><Cell col=\"9\" text=\"비고\"/><Cell col=\"10\" text=\"첨부파일\"/></Band><Band id=\"body\"><Cell style=\"selectcolor:darkslateblue;\" text=\"bind:MTRL_CD\" tooltiptext=\"bind:MTRL_CD\"/><Cell col=\"1\" edittype=\"none\" style=\"align:left;selectcolor:darkslateblue;\" cssclass=\"cell_link\" text=\"bind:MTRL_NM\" tooltiptext=\"bind:DOC_NM\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"none\" text=\"bind:CD_UNIT\" maskchar=\" \" combodataset=\"dsCdCM11\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" tooltiptext=\"bind:CD_PUR_UNIT\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right;color:royalblue;color2:royalblue;selectcolor:blue;selectfont:9 Dotum bold;\" text=\"bind:QTY\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"none\" style=\"align:right;color:salmon;color2:salmon;font:9 Dotum bold;selectcolor:fuchsia;selectfont:9 Dotum bold;\" text=\"bind:REQ_PRICE\" mask=\"#,##0.00\" editautoselect=\"true\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:REQ_AMT\" mask=\"#,##0\" editautoselect=\"true\"/><Cell col=\"6\" edittype=\"none\" text=\"bind:IN_STR_NM\" expandshow=\"hide\"/><Cell col=\"7\" displaytype=\"date\" edittype=\"none\" text=\"bind:DLV_REQ_DAY\" mask=\"yyyy.MM.dd\" editautoselect=\"true\"/><Cell col=\"8\" edittype=\"none\" style=\"align:left;\" text=\"bind:GR_ACNT_NM\" editautoselect=\"true\" expandshow=\"hide\"/><Cell col=\"9\" edittype=\"none\" style=\"align:left;\" text=\"bind:RMARK\" editautoselect=\"true\"/><Cell col=\"10\" displaytype=\"text\" cssclass=\"cell_link\" text=\"bind:ATTCH_FILE_CNT\"/></Band></Format></Formats>");
            this.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Div("div_2", "absolute", "0", "145", null, "30", "3", null, this.Tab01.tabp02);
            obj.set_taborder("4");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("DIV_품목타이");
            this.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Button("btnCancel", "absolute", null, "3", "60", null, "1", "3", this.Tab01.tabp02.div_2);
            obj.set_taborder("18");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Delete");
            obj.style.set_background("#dfdfdfff");
            obj.style.set_color("black");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("행삭제");
            this.Tab01.tabp02.div_2.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "9", this.Tab01.tabp02);
            obj.set_taborder("5");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("페이징");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.Tab01.tabp02.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1202, 622, this.Tab01.tabp01.div_2,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("156");
            		p.set_scrollbars("none");
            		p.getSetter("objNm").set("DIV_품목타이");

            	}
            );
            this.Tab01.tabp01.div_2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1202, 622, this.Tab01.tabp01.div_00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("169");
            		p.set_scrollbars("none");
            		p.getSetter("objNm").set("DIV_품목타이");

            	}
            );
            this.Tab01.tabp01.div_00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1042, 218, this.Tab01.tabp01,
            	//-- Layout function
            	function(p) {
            		p.set_text("출고요청작성");
            		p.set_scrollbars("none");
            		p.getSetter("lbcd").set("");
            		p.getSetter("objNm").set("출고요청작성");

            	}
            );
            this.Tab01.tabp01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 36, this.Tab01.tabp02.divViewCompCond00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_align("center");
            		p.set_cssclass("div_WF_SearchBg");

            	}
            );
            this.Tab01.tabp02.divViewCompCond00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 88, this.Tab01.tabp02.divViewCompCond01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_cssclass("div_WF_SearchBg");
            		p.getSetter("objNm").set("");

            	}
            );
            this.Tab01.tabp02.divViewCompCond01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1202, 622, this.Tab01.tabp02.div_2,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_scrollbars("none");
            		p.getSetter("objNm").set("DIV_품목타이");

            	}
            );
            this.Tab01.tabp02.div_2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab01.tabp02,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("출고현황");
            		p.set_text("출고현황");

            	}
            );
            this.Tab01.tabp02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1220, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("출고등록");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item23","Tab01.tabp02.div_2.btnCancel","enable","dsObjBindEn","btn_Itm_Del");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","Tab01.tabp02.div_2.btnCancel","visible","dsObjBindVi","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static01Vi","Static01","visible","dsObjBindVi","Static01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static01En","Static01","enable","dsObjBindEn","Static01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPrNmVi","divViewCompCond01.staPrNm","visible","dsObjBindVi","staPrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPrNmEn","divViewCompCond01.staPrNm","enable","dsObjBindEn","staPrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Div00Vi","divViewCompCond01.Div00","visible","dsObjBindVi","Div00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Div00En","divViewCompCond01.Div00","enable","dsObjBindEn","Div00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkMtrlVi","divViewCompCond01.chkMtrl","visible","dsObjBindVi","chkMtrl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkMtrlEn","divViewCompCond01.chkMtrl","readonly","dsObjBindEn","chkMtrl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staMtrlVi","divViewCompCond01.staMtrl","visible","dsObjBindVi","staMtrl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staMtrlEn","divViewCompCond01.staMtrl","enable","dsObjBindEn","staMtrl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staStrNmVi","divViewCompCond00.staStrNm","visible","dsObjBindVi","staStrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staStrNmEn","divViewCompCond00.staStrNm","enable","dsObjBindEn","staStrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staMtrlNmVi","divViewCompCond00.staMtrlNm","visible","dsObjBindVi","staMtrlNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staMtrlNmEn","divViewCompCond00.staMtrlNm","enable","dsObjBindEn","staMtrlNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staMtrlTypeVi","divViewCompCond00.staMtrlType","visible","dsObjBindVi","staMtrlType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staMtrlTypeEn","divViewCompCond00.staMtrlType","enable","dsObjBindEn","staMtrlType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divMtrlTypeVi","divViewCompCond00.divMtrlType","visible","dsObjBindVi","divMtrlType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divMtrlTypeEn","divViewCompCond00.divMtrlType","enable","dsObjBindEn","divMtrlType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divStrVi","divViewCompCond00.divStr","visible","dsObjBindVi","divStr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divStrEn","divViewCompCond00.divStr","enable","dsObjBindEn","divStr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divMtrlVi","divViewCompCond00.divMtrl","visible","dsObjBindVi","divMtrl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divMtrlEn","divViewCompCond00.divMtrl","enable","dsObjBindEn","divMtrl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnFoldVi","btnFold","visible","dsObjBindVi","btnFold");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnFoldEn","btnFold","enable","dsObjBindEn","btnFold");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPagingVi","divViewCompBody00.divPaging","visible","dsObjBindVi","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPagingEn","divViewCompBody00.divPaging","enable","dsObjBindEn","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","Tab01.tabp01.edtWriting","value","dsCnt","TMP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Tab01.tabp01.edtPos","value","dsCnt","APP");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompCalFromTo.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompOrderBy.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComSrchStr.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComSrchStr.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComSrchMtrl.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
        };
        
        // User Script
        this.registerScript("BRelReqList.xfdl", function(exports) {

        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {

        }

        /**
          * @함수명	: BRfqPrgList_oninit
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.InitEventInfo(이벤트변수)
          * @desc     	: 폼 oninit이벤트
          */
        this.FormOninit = function(obj,e)
        {

        }

        /**
        	@함수명	fnFold
        	@desc   	타이틀 접기/펼치기 기능
        */
        this.fnFold = function()
        {
        	var sArg = [ 
        				{ttl:this.Tab01.tabp02.btnFold, body:this.Tab01.tabp02.divViewCompCond01,initFold:true}
        		   ];		   
        	gfnDivFold(this, sArg);
        }

        this.FormOnload = function(obj,e)
        {
        	gfnSetObj("A");
        	//그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기(그리드 컴포넌트, 페이징div 컴포넌트, 폼오브젝트(this))
         	gfnSetGrdFunc(
        				this.Tab01.tabp01.grdList
        				,this.Tab01.tabp01.grdPaging
        				,this,{isTran:"Y", tranNm:"BRelService.reqList", dsParam:this.dsCondition}
        				);
         	
         	this.Tab01.tabp02.divViewCompCond01.divMtrl.fnSet(this.dsCondition		, "SRCH_MTRL_CD", "SRCH_MTRL_NM");
         	this.Tab01.tabp02.divViewCompCond01.divReqStr.fnSet(this.dsCondition		, "SRCH_STR_CD", "SRCH_STR_NM");
         	this.Tab01.tabp02.divViewCompCond01.divPutStr.fnSet(this.dsCondition		, "SRCH_STR_CD", "SRCH_STR_NM");
         	this.Tab01.tabp02.divViewCompCond00.divPrDt.fnSetDate(this.dsCondition	, "SRCH_REQ_DAY_STR", "SRCH_REQ_DAY_END");

         	
         	this.fnSearch();
         	
        	this.fnFold();		//조회조건 Div 접기/펼치기 세팅
        }

        
        /**
          * @함수명	: fnSearch
          * @desc     	: 조회 프로세스
          */
        this.fnSearch = function(svcId)
        {
        	
        	var sSvcID = "reqList";
        	var sController = "epro.rel.service.BRelService.reqList";
        	var sInDatasets = "dsCondition=dsCondition";
        	var sOutDatasets = "dsItem=dsItem dsCnt=dsCnt";
        	var sCallbackFunc = "fnTrCallBack";
        		
         	var	oPaging = [      
                            {inDs:this.dsCondition, grid:this.Tab01.tabp02.grdList, divPaging:this.Tab01.tabp02.divPaging}
                        ];
             gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc, oPaging);
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
        		case "reqList" :
        		break;
        		 
        		default:
        		break;	
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.FormOnload, this);
            this.addEventHandler("oninit", this.FormOninit, this);
            this.Tab01.tabp01.div_00.btn_Item_Search.addEventHandler("onclick", this.fnSearchPrPre, this);
            this.Tab01.tabp01.div_00.btn_Itm_Del.addEventHandler("onclick", this.Div3_btn_Itm_Del_onclick, this);
            this.Tab01.tabp01.staPrNm.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.Tab01.tabp01.staStr.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.Tab01.tabp01.staWriting.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.Tab01.tabp01.staPos.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.Tab01.tabp02.divViewCompCond00.staAll.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.Tab01.tabp02.divViewCompCond00.staPos.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.Tab01.tabp02.divViewCompCond00.staReqEnd.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.Tab01.tabp02.divViewCompCond00.staReqDate.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.Tab01.tabp02.divViewCompCond01.staOrderBy.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.Tab01.tabp02.divViewCompCond01.staMtrl00.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.Tab01.tabp02.divViewCompCond01.staMtrl01.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.Tab01.tabp02.divViewCompCond01.staPrNm00.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.Tab01.tabp02.btnFold.addEventHandler("onclick", this.btnFold_onclick, this);
            this.Tab01.tabp02.div_2.btnCancel.addEventHandler("onclick", this.Div3_btn_Itm_Del_onclick, this);

        };

        this.loadIncludeScript("BRelReqList.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
