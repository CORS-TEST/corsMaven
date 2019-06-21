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
                this.set_name("BRelMgmtList");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1220,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Tab("Tab01", "absolute", "0", "5", null, null, "0", "0", this);
            obj.set_taborder("0");
            obj.set_preload("true");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.set_cssclass("tab_default");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabp01", this.Tab01);
            obj.set_text("출고관리");
            obj.set_scrollbars("none");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("출고관리");
            this.Tab01.addChild(obj.name, obj);
            obj = new Div("div_2", "absolute", "0", "49", null, "30", "3", null, this.Tab01.tabp01);
            obj.set_taborder("194");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("DIV_품목타이");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Div("div00", "absolute", "0", "0", null, "36", "0", null, this.Tab01.tabp01);
            obj.set_taborder("195");
            obj.style.set_align("center");
            obj.set_cssclass("div_WF_SearchBg");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Div("divPrDt", "absolute", "106", "6", "188", "24", null, null, this.Tab01.tabp01.div00);
            obj.set_taborder("63");
            obj.set_text("Div01");
            obj.getSetter("objNm").set("출고요청일");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.Tab01.tabp01.div00.addChild(obj.name, obj);
            obj = new Static("staReqDate", "absolute", "-20", "5", "125", "24", null, null, this.Tab01.tabp01.div00);
            obj.set_taborder("64");
            obj.set_text("출고요청일");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_color("black");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("구매요청일자");
            this.Tab01.tabp01.div00.addChild(obj.name, obj);
            obj = new Static("staReqStr", "absolute", "297", "6", "99", "24", null, null, this.Tab01.tabp01.div00);
            obj.set_taborder("65");
            obj.set_text("출고창고");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.Tab01.tabp01.div00.addChild(obj.name, obj);
            obj = new Div("divReqStr", "absolute", "397", "6", null, "24", "563", null, this.Tab01.tabp01.div00);
            obj.set_taborder("66");
            obj.set_text("Div01");
            obj.getSetter("objNm").set("출고창고");
            obj.set_url("CCOMP::ComSrchStr.xfdl");
            this.Tab01.tabp01.div00.addChild(obj.name, obj);
            obj = new Static("staRtnStr", "absolute", "637", "6", "99", "24", null, null, this.Tab01.tabp01.div00);
            obj.set_taborder("67");
            obj.set_text("입고창고");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.Tab01.tabp01.div00.addChild(obj.name, obj);
            obj = new Div("divRtnStr", "absolute", "742", "6", null, "24", "219", null, this.Tab01.tabp01.div00);
            obj.set_taborder("68");
            obj.set_text("Div01");
            obj.getSetter("objNm").set("입고창고");
            obj.set_url("CCOMP::ComSrchStr.xfdl");
            this.Tab01.tabp01.div00.addChild(obj.name, obj);
            obj = new Static("staPrCtgr", "absolute", "956", "6", "99", "24", null, null, this.Tab01.tabp01.div00);
            obj.set_taborder("69");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.Tab01.tabp01.div00.addChild(obj.name, obj);
            obj = new Combo("cboPrCtgr", "absolute", "87.01%", "6", null, "25", "62", null, this.Tab01.tabp01.div00);
            this.Tab01.tabp01.div00.addChild(obj.name, obj);
            obj.set_taborder("70");
            obj.getSetter("objNm").set("상태");
            obj = new Div("divViewCompCond01", "absolute", "0", "35", null, "88", "0", null, this.Tab01.tabp01);
            obj.set_taborder("196");
            obj.set_cssclass("div_WF_SearchBg");
            obj.getSetter("objNm").set("");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staOrderBy", "absolute", "0", "34", "105", "24", null, null, this.Tab01.tabp01.divViewCompCond01);
            obj.set_taborder("121");
            obj.set_text("정렬순서");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_color("black");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.Tab01.tabp01.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divOrderBy", "absolute", "106", "34", null, "24", "86", null, this.Tab01.tabp01.divViewCompCond01);
            obj.set_taborder("122");
            obj.set_text("Div00");
            obj.getSetter("objNm").set("정렬순서");
            obj.set_url("CCOMP::CompOrderBy.xfdl");
            this.Tab01.tabp01.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staWarning", "absolute", "-1", "67", null, "19", "0", null, this.Tab01.tabp01.divViewCompCond01);
            obj.set_taborder("123");
            obj.set_text("- 검색조건 없이 검색 시 속도가 저하 될 수 있습니다.");
            obj.set_cssclass("sta_WF_SearchText");
            this.Tab01.tabp01.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staMtrl", "absolute", "0", "6", "105", "24", null, null, this.Tab01.tabp01.divViewCompCond01);
            obj.set_taborder("124");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_color("black");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.Tab01.tabp01.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divMtrl", "absolute", "106", "6", null, "24", "747", null, this.Tab01.tabp01.divViewCompCond01);
            obj.set_taborder("125");
            obj.set_text("Div01");
            obj.getSetter("objNm").set("품목");
            obj.set_url("CCOMP::ComSrchMtrl.xfdl");
            this.Tab01.tabp01.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divUser", "absolute", "570", "6", null, "24", "392", null, this.Tab01.tabp01.divViewCompCond01);
            obj.set_taborder("126");
            obj.set_text("divUser");
            obj.getSetter("objNm").set("출고요청자");
            obj.set_url("CCOMP::ComSrchUser.xfdl");
            this.Tab01.tabp01.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staUser", "absolute", "469", "6", "99", "24", null, null, this.Tab01.tabp01.divViewCompCond01);
            obj.set_taborder("127");
            obj.set_text("출고요청자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.Tab01.tabp01.divViewCompCond01.addChild(obj.name, obj);
            obj = new Button("btnFold", "absolute", "45.65%", "122", "56", "17", null, null, this.Tab01.tabp01);
            obj.set_taborder("197");
            obj.set_cssclass("btn_Fold_Close");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "177", null, null, "0", "0", this.Tab01.tabp01);
            obj.set_taborder("198");
            obj.set_binddataset("dsPrItem");
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
            obj._setContents("<Formats><Format id=\"MMODE\"><Columns><Column size=\"43\"/><Column size=\"85\"/><Column size=\"95\"/><Column size=\"290\"/><Column size=\"93\"/><Column size=\"90\"/><Column size=\"103\"/><Column size=\"106\"/><Column size=\"108\"/><Column size=\"102\"/><Column size=\"99\"/><Column size=\"102\"/><Column size=\"103\"/><Column size=\"95\"/><Column size=\"114\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"상태\"/><Cell col=\"2\" text=\"품목코드\"/><Cell col=\"3\" text=\"품목명\"/><Cell col=\"4\" text=\"재고수량\"/><Cell col=\"5\" text=\"요청수량\"/><Cell col=\"6\" text=\"출고수량\"/><Cell col=\"7\" text=\"출고창고\"/><Cell col=\"8\" text=\"입고창고\"/><Cell col=\"9\" text=\"입고계정명\"/><Cell col=\"10\" text=\"출고요청일\"/><Cell col=\"11\" text=\"출고요청자\"/><Cell col=\"12\" text=\"출고완료일\"/><Cell col=\"13\" text=\"비고\"/><Cell col=\"14\" text=\"유효기간\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\" maskchar=\" \" editdisplay=\"display\" expandshow=\"hide\"/><Cell col=\"1\" style=\"selectcolor:darkslateblue;\" text=\"bind:MTRL_CD\" tooltiptext=\"bind:MTRL_CD\"/><Cell col=\"2\" style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;selectcolor:darkslateblue;\" cssclass=\"cell_link\" text=\"bind:MTRL_NM\" tooltiptext=\"bind:DOC_NM\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:CD_UNIT\" maskchar=\" \" combodataset=\"dsCdCM11\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" tooltiptext=\"bind:CD_PUR_UNIT\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;color:royalblue;color2:royalblue;selectcolor:blue;selectfont:9 Dotum bold;\" text=\"bind:QTY\" editautoselect=\"true\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/></Band></Format><Format id=\"VMODE\"><Columns><Column size=\"104\"/><Column size=\"288\"/><Column size=\"58\"/><Column size=\"61\"/><Column size=\"122\"/><Column size=\"110\"/><Column size=\"124\"/><Column size=\"94\"/><Column size=\"120\"/><Column size=\"147\"/><Column size=\"71\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"품목코드\"/><Cell col=\"1\" text=\"품목명\"/><Cell col=\"2\" text=\"단위\"/><Cell col=\"3\" text=\"수량\"/><Cell col=\"4\" text=\"예상단가\"/><Cell col=\"5\" text=\"금액\"/><Cell col=\"6\" text=\"입고부서\"/><Cell col=\"7\" text=\"입고요청일\"/><Cell col=\"8\" text=\"입고계정\"/><Cell col=\"9\" text=\"비고\"/><Cell col=\"10\" text=\"첨부파일\"/></Band><Band id=\"body\"><Cell style=\"selectcolor:darkslateblue;\" text=\"bind:MTRL_CD\" tooltiptext=\"bind:MTRL_CD\"/><Cell col=\"1\" edittype=\"none\" style=\"align:left;selectcolor:darkslateblue;\" cssclass=\"cell_link\" text=\"bind:MTRL_NM\" tooltiptext=\"bind:DOC_NM\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"none\" text=\"bind:CD_UNIT\" maskchar=\" \" combodataset=\"dsCdCM11\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" tooltiptext=\"bind:CD_PUR_UNIT\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right;color:royalblue;color2:royalblue;selectcolor:blue;selectfont:9 Dotum bold;\" text=\"bind:QTY\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"none\" style=\"align:right;color:salmon;color2:salmon;font:9 Dotum bold;selectcolor:fuchsia;selectfont:9 Dotum bold;\" text=\"bind:REQ_PRICE\" mask=\"#,##0.00\" editautoselect=\"true\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:REQ_AMT\" mask=\"#,##0\" editautoselect=\"true\"/><Cell col=\"6\" edittype=\"none\" text=\"bind:IN_STR_NM\" expandshow=\"hide\"/><Cell col=\"7\" displaytype=\"date\" edittype=\"none\" text=\"bind:DLV_REQ_DAY\" mask=\"yyyy.MM.dd\" editautoselect=\"true\"/><Cell col=\"8\" edittype=\"none\" style=\"align:left;\" text=\"bind:GR_ACNT_NM\" editautoselect=\"true\" expandshow=\"hide\"/><Cell col=\"9\" edittype=\"none\" style=\"align:left;\" text=\"bind:RMARK\" editautoselect=\"true\"/><Cell col=\"10\" displaytype=\"text\" cssclass=\"cell_link\" text=\"bind:ATTCH_FILE_CNT\"/></Band></Format></Formats>");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Div("div_00", "absolute", "0", "145", null, "30", "3", null, this.Tab01.tabp01);
            obj.set_taborder("199");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("DIV_품목타이");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Button("btnNo", "absolute", null, "3", "60", null, "1", "3", this.Tab01.tabp01.div_00);
            obj.set_taborder("2");
            obj.set_text("거부");
            obj.set_cssclass("btn_WF_Delete");
            obj.style.set_background("#dfdfdfff");
            obj.style.set_color("black");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("거부");
            this.Tab01.tabp01.div_00.addChild(obj.name, obj);
            obj = new Button("btnOk", "absolute", null, "3", "60", null, "64", "3", this.Tab01.tabp01.div_00);
            obj.set_taborder("3");
            obj.set_text("승인");
            obj.set_cssclass("btn_WF_Delete");
            obj.style.set_background("#dfdfdfff");
            obj.style.set_color("black");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("승인");
            this.Tab01.tabp01.div_00.addChild(obj.name, obj);
            obj = new Tabpage("tabp02", this.Tab01);
            obj.set_text("반입관리");
            obj.getSetter("objNm").set("반입관리");
            this.Tab01.addChild(obj.name, obj);
            obj = new Div("divViewCompCond00", "absolute", "0", "0", null, "36", "0", null, this.Tab01.tabp02);
            obj.set_taborder("10");
            obj.style.set_align("center");
            obj.set_cssclass("div_WF_SearchBg");
            this.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Div("divPrDt", "absolute", "106", "6", "188", "24", null, null, this.Tab01.tabp02.divViewCompCond00);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.getSetter("objNm").set("구매요청일자");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.Tab01.tabp02.divViewCompCond00.addChild(obj.name, obj);
            obj = new Div("divReqStr", "absolute", "397", "6", null, "24", "563", null, this.Tab01.tabp02.divViewCompCond00);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_url("CCOMP::ComSrchStr.xfdl");
            this.Tab01.tabp02.divViewCompCond00.addChild(obj.name, obj);
            obj = new Div("edtRtnStr", "absolute", "742", "6", null, "24", "219", null, this.Tab01.tabp02.divViewCompCond00);
            obj.set_taborder("5");
            obj.set_text("Div01");
            obj.set_url("CCOMP::ComSrchStr.xfdl");
            this.Tab01.tabp02.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staRtnDt", "absolute", "-20", "5", "125", "24", null, null, this.Tab01.tabp02.divViewCompCond00);
            obj.set_taborder("6");
            obj.set_text("반입요청일");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_color("black");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("구매요청일자");
            this.Tab01.tabp02.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staReqStr", "absolute", "297", "6", "99", "24", null, null, this.Tab01.tabp02.divViewCompCond00);
            obj.set_taborder("9");
            obj.set_text("출고창고");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.Tab01.tabp02.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staRtnStr", "absolute", "637", "6", "99", "24", null, null, this.Tab01.tabp02.divViewCompCond00);
            obj.set_taborder("10");
            obj.set_text("입고창고");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.Tab01.tabp02.divViewCompCond00.addChild(obj.name, obj);
            obj = new Div("divViewCompCond01", "absolute", "0", "35", null, "88", "0", null, this.Tab01.tabp02);
            obj.set_taborder("11");
            obj.set_cssclass("div_WF_SearchBg");
            obj.getSetter("objNm").set("");
            this.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Static("staOrderBy", "absolute", "0", "34", "105", "24", null, null, this.Tab01.tabp02.divViewCompCond01);
            obj.set_taborder("114");
            obj.set_text("정렬순서");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_color("black");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.Tab01.tabp02.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divOrderBy", "absolute", "106", "34", null, "24", "86", null, this.Tab01.tabp02.divViewCompCond01);
            obj.set_taborder("115");
            obj.set_text("Div00");
            obj.set_url("CCOMP::CompOrderBy.xfdl");
            this.Tab01.tabp02.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staWarning", "absolute", "-1", "67", null, "19", "0", null, this.Tab01.tabp02.divViewCompCond01);
            obj.set_taborder("116");
            obj.set_text("- 검색조건 없이 검색 시 속도가 저하 될 수 있습니다.");
            obj.set_cssclass("sta_WF_SearchText");
            this.Tab01.tabp02.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staMtrl", "absolute", "0", "6", "105", "24", null, null, this.Tab01.tabp02.divViewCompCond01);
            obj.set_taborder("117");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_color("black");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.Tab01.tabp02.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divMtrl", "absolute", "106", "6", null, "24", "747", null, this.Tab01.tabp02.divViewCompCond01);
            obj.set_taborder("118");
            obj.set_text("Div01");
            obj.set_url("CCOMP::ComSrchMtrl.xfdl");
            this.Tab01.tabp02.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divUser", "absolute", "570", "6", null, "24", "392", null, this.Tab01.tabp02.divViewCompCond01);
            obj.set_taborder("119");
            obj.set_url("CCOMP::ComSrchUser.xfdl");
            this.Tab01.tabp02.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staUser", "absolute", "469", "6", "99", "24", null, null, this.Tab01.tabp02.divViewCompCond01);
            obj.set_taborder("120");
            obj.set_text("반입요청자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.Tab01.tabp02.divViewCompCond01.addChild(obj.name, obj);
            obj = new Button("btnFold", "absolute", "45.65%", "122", "56", "17", null, null, this.Tab01.tabp02);
            obj.set_taborder("12");
            obj.set_cssclass("btn_Fold_Close");
            this.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "177", null, null, "0", "0", this.Tab01.tabp02);
            obj.set_taborder("13");
            obj.set_binddataset("dsPrItem");
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
            obj._setContents("<Formats><Format id=\"MMODE\"><Columns><Column size=\"43\"/><Column size=\"85\"/><Column size=\"117\"/><Column size=\"290\"/><Column size=\"93\"/><Column size=\"90\"/><Column size=\"103\"/><Column size=\"106\"/><Column size=\"108\"/><Column size=\"102\"/><Column size=\"99\"/><Column size=\"102\"/><Column size=\"103\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"상태\"/><Cell col=\"2\" text=\"품목코드\"/><Cell col=\"3\" text=\"품목명\"/><Cell col=\"4\" text=\"요청수량\"/><Cell col=\"5\" text=\"출고수량\"/><Cell col=\"6\" text=\"반출창고\"/><Cell col=\"7\" text=\"반입창고\"/><Cell col=\"8\" text=\"입고계정명\"/><Cell col=\"9\" text=\"반입요청일자\"/><Cell col=\"10\" text=\"반입요청자\"/><Cell col=\"11\" text=\"반입완료일자\"/><Cell col=\"12\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\" maskchar=\" \" editdisplay=\"display\" expandshow=\"hide\"/><Cell col=\"1\" style=\"selectcolor:darkslateblue;\" text=\"bind:MTRL_CD\" tooltiptext=\"bind:MTRL_CD\"/><Cell col=\"2\" style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;selectcolor:darkslateblue;\" cssclass=\"cell_link\" text=\"bind:MTRL_NM\" tooltiptext=\"bind:DOC_NM\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:CD_UNIT\" maskchar=\" \" combodataset=\"dsCdCM11\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" tooltiptext=\"bind:CD_PUR_UNIT\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;color:royalblue;color2:royalblue;selectcolor:blue;selectfont:9 Dotum bold;\" text=\"bind:QTY\" editautoselect=\"true\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/></Band></Format><Format id=\"VMODE\"><Columns><Column size=\"104\"/><Column size=\"288\"/><Column size=\"58\"/><Column size=\"61\"/><Column size=\"122\"/><Column size=\"110\"/><Column size=\"124\"/><Column size=\"94\"/><Column size=\"120\"/><Column size=\"147\"/><Column size=\"71\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"품목코드\"/><Cell col=\"1\" text=\"품목명\"/><Cell col=\"2\" text=\"단위\"/><Cell col=\"3\" text=\"수량\"/><Cell col=\"4\" text=\"예상단가\"/><Cell col=\"5\" text=\"금액\"/><Cell col=\"6\" text=\"입고부서\"/><Cell col=\"7\" text=\"입고요청일\"/><Cell col=\"8\" text=\"입고계정\"/><Cell col=\"9\" text=\"비고\"/><Cell col=\"10\" text=\"첨부파일\"/></Band><Band id=\"body\"><Cell style=\"selectcolor:darkslateblue;\" text=\"bind:MTRL_CD\" tooltiptext=\"bind:MTRL_CD\"/><Cell col=\"1\" edittype=\"none\" style=\"align:left;selectcolor:darkslateblue;\" cssclass=\"cell_link\" text=\"bind:MTRL_NM\" tooltiptext=\"bind:DOC_NM\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"none\" text=\"bind:CD_UNIT\" maskchar=\" \" combodataset=\"dsCdCM11\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" tooltiptext=\"bind:CD_PUR_UNIT\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right;color:royalblue;color2:royalblue;selectcolor:blue;selectfont:9 Dotum bold;\" text=\"bind:QTY\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"none\" style=\"align:right;color:salmon;color2:salmon;font:9 Dotum bold;selectcolor:fuchsia;selectfont:9 Dotum bold;\" text=\"bind:REQ_PRICE\" mask=\"#,##0.00\" editautoselect=\"true\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:REQ_AMT\" mask=\"#,##0\" editautoselect=\"true\"/><Cell col=\"6\" edittype=\"none\" text=\"bind:IN_STR_NM\" expandshow=\"hide\"/><Cell col=\"7\" displaytype=\"date\" edittype=\"none\" text=\"bind:DLV_REQ_DAY\" mask=\"yyyy.MM.dd\" editautoselect=\"true\"/><Cell col=\"8\" edittype=\"none\" style=\"align:left;\" text=\"bind:GR_ACNT_NM\" editautoselect=\"true\" expandshow=\"hide\"/><Cell col=\"9\" edittype=\"none\" style=\"align:left;\" text=\"bind:RMARK\" editautoselect=\"true\"/><Cell col=\"10\" displaytype=\"text\" cssclass=\"cell_link\" text=\"bind:ATTCH_FILE_CNT\"/></Band></Format></Formats>");
            this.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Div("div_2", "absolute", "0", "145", null, "30", "3", null, this.Tab01.tabp02);
            obj.set_taborder("14");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("DIV_품목타이");
            this.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Button("btnNo", "absolute", null, "3", "60", null, "1", "3", this.Tab01.tabp02.div_2);
            obj.set_taborder("0");
            obj.set_text("거부");
            obj.set_cssclass("btn_WF_Delete");
            obj.style.set_background("#dfdfdfff");
            obj.style.set_color("black");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("행삭제");
            this.Tab01.tabp02.div_2.addChild(obj.name, obj);
            obj = new Button("btnOk", "absolute", null, "3", "60", null, "64", "3", this.Tab01.tabp02.div_2);
            obj.set_taborder("1");
            obj.set_text("승인");
            obj.set_cssclass("btn_WF_Delete");
            obj.style.set_background("#dfdfdfff");
            obj.style.set_color("black");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("행삭제");
            this.Tab01.tabp02.div_2.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1202, 622, this.Tab01.tabp01.div_2,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("194");
            		p.set_scrollbars("none");
            		p.getSetter("objNm").set("DIV_품목타이");

            	}
            );
            this.Tab01.tabp01.div_2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 36, this.Tab01.tabp01.div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("195");
            		p.style.set_align("center");
            		p.set_cssclass("div_WF_SearchBg");

            	}
            );
            this.Tab01.tabp01.div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 88, this.Tab01.tabp01.divViewCompCond01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("196");
            		p.set_cssclass("div_WF_SearchBg");
            		p.getSetter("objNm").set("");

            	}
            );
            this.Tab01.tabp01.divViewCompCond01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1202, 622, this.Tab01.tabp01.div_00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("199");
            		p.set_scrollbars("none");
            		p.getSetter("objNm").set("DIV_품목타이");

            	}
            );
            this.Tab01.tabp01.div_00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1042, 218, this.Tab01.tabp01,
            	//-- Layout function
            	function(p) {
            		p.set_text("출고관리");
            		p.set_scrollbars("none");
            		p.getSetter("lbcd").set("");
            		p.getSetter("objNm").set("출고관리");

            	}
            );
            this.Tab01.tabp01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 36, this.Tab01.tabp02.divViewCompCond00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("10");
            		p.style.set_align("center");
            		p.set_cssclass("div_WF_SearchBg");

            	}
            );
            this.Tab01.tabp02.divViewCompCond00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 88, this.Tab01.tabp02.divViewCompCond01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("11");
            		p.set_cssclass("div_WF_SearchBg");
            		p.getSetter("objNm").set("");

            	}
            );
            this.Tab01.tabp02.divViewCompCond01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1202, 622, this.Tab01.tabp02.div_2,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("14");
            		p.set_scrollbars("none");
            		p.getSetter("objNm").set("DIV_품목타이");

            	}
            );
            this.Tab01.tabp02.div_2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab01.tabp02,
            	//-- Layout function
            	function(p) {
            		p.set_text("반입관리");
            		p.getSetter("objNm").set("반입관리");

            	}
            );
            this.Tab01.tabp02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1220, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item23","Tab01.tabp02.div_2.btnNo","enable","dsObjBindEn","btn_Itm_Del");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","Tab01.tabp02.div_2.btnNo","visible","dsObjBindVi","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","Tab01.tabp02.div_2.btnOk","enable","dsObjBindEn","btn_Itm_Del");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Tab01.tabp02.div_2.btnOk","visible","dsObjBindVi","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Tab01.tabp01.div_00.btnNo","enable","dsObjBindEn","btn_Itm_Del");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Tab01.tabp01.div_00.btnNo","visible","dsObjBindVi","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Tab01.tabp01.div_00.btnOk","enable","dsObjBindEn","btn_Itm_Del");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Tab01.tabp01.div_00.btnOk","visible","dsObjBindVi","");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompCalFromTo.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComSrchStr.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComSrchStr.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompOrderBy.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComSrchMtrl.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComSrchUser.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompCalFromTo.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComSrchStr.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComSrchStr.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompOrderBy.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComSrchMtrl.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComSrchUser.xfdl");
        };
        
        // User Script
        this.registerScript("BRelMgmtList.xfdl", function(exports) {

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
        				this.divViewCompBody00.grdList
        				,this.divViewCompBody00.divPaging
        				,this,{isTran:"Y", tranNm:"BPrService.searchPrReturnRcvList", dsParam:this.dsCondition}
        				);
         	
          
         	this.Tab01.tabp02.divViewCompCond00.divPrDt.fnSet(this.dsCondition		, "SRCH_STR_CD", "SRCH_STR_NM");
         	this.Tab01.tabp02.divViewCompCond00.divMtrl.fnSet(this.dsCondition		, "SRCH_MTRL_CD", "SRCH_MTRL_NM");
         	this.Tab01.tabp02.divViewCompCond00.divReqStr.fnSet(this.dsCondition		, "SRCH_STR_CD", "SRCH_STR_NM");
         	this.Tab01.tabp02.divViewCompCond00.divPutStr.fnSet(this.dsCondition		, "SRCH_STR_CD", "SRCH_STR_NM");
         	this.Tab01.tabp02.divViewCompCond00.divPrDt.fnSetDate(this.dsCondition	, "SRCH_REQ_DAY_STR", "SRCH_REQ_DAY_END");

         	this.fnFold();		//조회조건 Div 접기/펼치기 세팅
        	//this.fnSearch();

        }

        
        /**
          * @함수명	: fnSearch
          * @desc     	: 조회 프로세스
          */
        this.fnSearch = function(svcId)
        {
        	
        // 	var sSvcID = "reqList";
        // 	var sController = "epro.rel.service.BRelService.reqList";
        // 	var sInDatasets = "dsCondition=dsCondition";
        // 	var sOutDatasets = "dsList=dsList";
        // 	var sCallbackFunc = "fnTrCallBack";
        // 		
        //  	var	oPaging = [      
        //                     {inDs:this.dsCondition, grid:this.Tab01.tabp02.grdList, divPaging:this.Tab01.tabp02.divPaging}
        //                 ];
        //      gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc, oPaging);
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
            this.Tab01.tabp01.div00.staReqDate.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.Tab01.tabp01.div00.staReqStr.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.Tab01.tabp01.div00.staRtnStr.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.Tab01.tabp01.div00.staPrCtgr.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.Tab01.tabp01.divViewCompCond01.staOrderBy.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.Tab01.tabp01.divViewCompCond01.staMtrl.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.Tab01.tabp01.divViewCompCond01.staUser.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.Tab01.tabp01.btnFold.addEventHandler("onclick", this.btnFold_onclick, this);
            this.Tab01.tabp01.grdList.addEventHandler("oncellclick", this.div_21_grdList_oncellclick, this);
            this.Tab01.tabp01.grdList.addEventHandler("oncelldblclick", this.div_21_grdList_oncelldblclick, this);
            this.Tab01.tabp01.grdList.addEventHandler("onexpandup", this.divViewCompBody00_grdList_onexpandup, this);
            this.Tab01.tabp01.div_00.btnNo.addEventHandler("onclick", this.Div3_btn_Itm_Del_onclick, this);
            this.Tab01.tabp01.div_00.btnOk.addEventHandler("onclick", this.Div3_btn_Itm_Del_onclick, this);
            this.Tab01.tabp02.divViewCompCond00.staRtnDt.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.Tab01.tabp02.divViewCompCond00.staReqStr.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.Tab01.tabp02.divViewCompCond00.staRtnStr.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.Tab01.tabp02.divViewCompCond01.staOrderBy.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.Tab01.tabp02.divViewCompCond01.staMtrl.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.Tab01.tabp02.divViewCompCond01.staUser.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.Tab01.tabp02.btnFold.addEventHandler("onclick", this.btnFold_onclick, this);
            this.Tab01.tabp02.grdList.addEventHandler("oncellclick", this.div_21_grdList_oncellclick, this);
            this.Tab01.tabp02.grdList.addEventHandler("oncelldblclick", this.div_21_grdList_oncelldblclick, this);
            this.Tab01.tabp02.grdList.addEventHandler("onexpandup", this.divViewCompBody00_grdList_onexpandup, this);
            this.Tab01.tabp02.div_2.btnNo.addEventHandler("onclick", this.Div3_btn_Itm_Del_onclick, this);
            this.Tab01.tabp02.div_2.btnOk.addEventHandler("onclick", this.Div3_btn_Itm_Del_onclick, this);

        };

        this.loadIncludeScript("BRelMgmtList.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
