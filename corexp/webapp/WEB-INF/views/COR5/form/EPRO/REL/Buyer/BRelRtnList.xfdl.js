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
                this.set_name("BRelRtnList");
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
            obj.set_text("반입등록");
            obj.set_scrollbars("none");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("반입등록");
            this.Tab01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "-40", "5", null, "33", "0", null, this.Tab01.tabp01);
            obj.set_taborder("173");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtWriting", "absolute", "125", "9", "81", "24", null, null, this.Tab01.tabp01);
            obj.set_taborder("174");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("작성중");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Div("div_2", "absolute", "0", "49", null, "30", "3", null, this.Tab01.tabp01);
            obj.set_taborder("175");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("DIV_품목타이");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "0", "111", null, null, "0", this.Tab01.tabp01.div_2);
            obj.set_taborder("0");
            obj.set_text("반입등록정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_color("black");
            obj.style.set_padding("0 0 2 17");
            this.Tab01.tabp01.div_2.addChild(obj.name, obj);
            obj = new Static("staViewCompLine03", "absolute", "0", "88", null, "33", "0", null, this.Tab01.tabp01);
            obj.set_taborder("176");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Calendar("edtRtnDate", "absolute", "767", "92", "150", "24", null, null, this.Tab01.tabp01);
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("177");
            obj.set_dateformat("yyyy.MM.dd ddd");
            obj.set_editformat("yyyy.MM.dd ddd");
            obj.getSetter("objNm").set("반입요청일");
            obj = new Static("Static01", "absolute", "218", "9", null, "24", "974", null, this.Tab01.tabp01);
            obj.set_taborder("178");
            obj.set_text("건");
            obj.style.set_color("black");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "464", "9", null, "24", "727", null, this.Tab01.tabp01);
            obj.set_taborder("179");
            obj.set_text("건");
            obj.style.set_color("black");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtPos", "absolute", "373", "9", "81", "24", null, null, this.Tab01.tabp01);
            obj.set_taborder("181");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("요청(미반입)");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Div("div_00", "absolute", "0", "133", null, "30", "3", null, this.Tab01.tabp01);
            obj.set_taborder("185");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("DIV_품목타이");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "0", "111", null, null, "0", this.Tab01.tabp01.div_00);
            obj.set_taborder("3");
            obj.set_text("품목정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_color("black");
            obj.style.set_padding("0 0 2 17");
            this.Tab01.tabp01.div_00.addChild(obj.name, obj);
            obj = new Button("btn_Pre_Pr_Search", "absolute", null, "3", "100", null, "62", "3", this.Tab01.tabp01.div_00);
            obj.set_taborder("4");
            obj.set_text("+품목검색");
            obj.set_cssclass("btn_WF_Add");
            obj.style.set_background("#dfdfdfff");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("이전요청검색");
            this.Tab01.tabp01.div_00.addChild(obj.name, obj);
            obj = new Button("btn_Itm_Del", "absolute", null, "3", "60", null, "0", "3", this.Tab01.tabp01.div_00);
            obj.set_taborder("5");
            obj.set_text("- 삭제");
            obj.set_cssclass("btn_WF_Delete");
            obj.style.set_background("#dfdfdfff");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("행삭제");
            this.Tab01.tabp01.div_00.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "173", null, null, "0", "0", this.Tab01.tabp01);
            obj.set_taborder("186");
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
            obj._setContents("<Formats><Format id=\"MMODE\"><Columns><Column size=\"43\"/><Column size=\"104\"/><Column size=\"371\"/><Column size=\"111\"/><Column size=\"106\"/><Column size=\"150\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"품목코드\"/><Cell col=\"2\" text=\"품목명\"/><Cell col=\"3\" text=\"재고수량\"/><Cell col=\"4\" text=\"반출수량\"/><Cell col=\"5\" text=\"반출계정명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\" maskchar=\" \" editdisplay=\"display\" expandshow=\"hide\"/><Cell col=\"1\" style=\"selectcolor:darkslateblue;\" text=\"bind:MTRL_CD\" tooltiptext=\"bind:MTRL_CD\"/><Cell col=\"2\" style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;selectcolor:darkslateblue;\" cssclass=\"cell_link\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:CD_UNIT\" maskchar=\" \" combodataset=\"dsCdCM11\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" tooltiptext=\"bind:CD_PUR_UNIT\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;color:royalblue;color2:royalblue;selectcolor:blue;selectfont:9 Dotum bold;\" text=\"bind:QTY\" editautoselect=\"true\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" style=\"align:right;color:salmon;color2:salmon;font:9 Dotum bold;selectcolor:fuchsia;selectfont:9 Dotum bold;\" text=\"bind:REQ_PRICE\" editautoselect=\"true\"/></Band></Format><Format id=\"VMODE\"><Columns><Column size=\"104\"/><Column size=\"288\"/><Column size=\"58\"/><Column size=\"61\"/><Column size=\"122\"/><Column size=\"110\"/><Column size=\"124\"/><Column size=\"94\"/><Column size=\"120\"/><Column size=\"147\"/><Column size=\"71\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"품목코드\"/><Cell col=\"1\" text=\"품목명\"/><Cell col=\"2\" text=\"단위\"/><Cell col=\"3\" text=\"수량\"/><Cell col=\"4\" text=\"예상단가\"/><Cell col=\"5\" text=\"금액\"/><Cell col=\"6\" text=\"입고부서\"/><Cell col=\"7\" text=\"입고요청일\"/><Cell col=\"8\" text=\"입고계정\"/><Cell col=\"9\" text=\"비고\"/><Cell col=\"10\" text=\"첨부파일\"/></Band><Band id=\"body\"><Cell style=\"selectcolor:darkslateblue;\" text=\"bind:MTRL_CD\" tooltiptext=\"bind:MTRL_CD\"/><Cell col=\"1\" edittype=\"none\" style=\"align:left;selectcolor:darkslateblue;\" cssclass=\"cell_link\" text=\"bind:MTRL_NM\" tooltiptext=\"bind:DOC_NM\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"none\" text=\"bind:CD_UNIT\" maskchar=\" \" combodataset=\"dsCdCM11\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" tooltiptext=\"bind:CD_PUR_UNIT\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right;color:royalblue;color2:royalblue;selectcolor:blue;selectfont:9 Dotum bold;\" text=\"bind:QTY\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"none\" style=\"align:right;color:salmon;color2:salmon;font:9 Dotum bold;selectcolor:fuchsia;selectfont:9 Dotum bold;\" text=\"bind:REQ_PRICE\" mask=\"#,##0.00\" editautoselect=\"true\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:REQ_AMT\" mask=\"#,##0\" editautoselect=\"true\"/><Cell col=\"6\" edittype=\"none\" text=\"bind:IN_STR_NM\" expandshow=\"hide\"/><Cell col=\"7\" displaytype=\"date\" edittype=\"none\" text=\"bind:DLV_REQ_DAY\" mask=\"yyyy.MM.dd\" editautoselect=\"true\"/><Cell col=\"8\" edittype=\"none\" style=\"align:left;\" text=\"bind:GR_ACNT_NM\" editautoselect=\"true\" expandshow=\"hide\"/><Cell col=\"9\" edittype=\"none\" style=\"align:left;\" text=\"bind:RMARK\" editautoselect=\"true\"/><Cell col=\"10\" displaytype=\"text\" cssclass=\"cell_link\" text=\"bind:ATTCH_FILE_CNT\"/></Band></Format></Formats>");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Combo("comReqStr", "absolute", "482", "92", "150", "24", null, null, this.Tab01.tabp01);
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("189");
            obj.set_innerdataset("dsCdCM91");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("반출창고");
            obj = new Div("divStr", "absolute", "123", "92", null, "24", "841", null, this.Tab01.tabp01);
            obj.set_taborder("191");
            obj.set_text("Div01");
            obj.getSetter("objNm").set("반입창고");
            obj.set_url("CCOMP::ComSrchStr.xfdl");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staWriting", "absolute", "10", "9", "105", "24", null, null, this.Tab01.tabp01);
            obj.set_taborder("192");
            obj.set_text("작성중");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_color("green");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staPos", "absolute", "259", "9", "105", "24", null, null, this.Tab01.tabp01);
            obj.set_taborder("193");
            obj.set_text("요청(미반입)");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_color("green");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staPrNm02", "absolute", "10", "92", "105", "24", null, null, this.Tab01.tabp01);
            obj.set_taborder("194");
            obj.set_text("반입창고");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_color("black");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staPrNm03", "absolute", "371", "92", "105", "24", null, null, this.Tab01.tabp01);
            obj.set_taborder("195");
            obj.set_text("반출창고");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_color("black");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staRtnDate", "absolute", "657", "92", "105", "24", null, null, this.Tab01.tabp01);
            obj.set_taborder("196");
            obj.set_text("반입요청일");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_color("black");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "91.46%", "9", null, "24", "0.33%", null, this.Tab01.tabp01);
            obj.set_taborder("197");
            obj.set_text("반입등록");
            obj.style.set_background("#888888ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 malgun gothic");
            obj.set_cssclass("btn_WF_SearchBtn");
            this.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Tabpage("tabp02", this.Tab01);
            obj.set_text("반입현황");
            obj.getSetter("objNm").set("반입현황");
            this.Tab01.addChild(obj.name, obj);
            obj = new Div("divViewCompCond00", "absolute", "0", "0", null, "36", "0", null, this.Tab01.tabp02);
            obj.set_taborder("5");
            obj.style.set_align("center");
            obj.set_cssclass("div_WF_SearchBg");
            this.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Div("divPrDt", "absolute", "106", "6", "301", "24", null, null, this.Tab01.tabp02.divViewCompCond00);
            obj.set_taborder("51");
            obj.set_text("Div01");
            obj.getSetter("objNm").set("반입요청일");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.Tab01.tabp02.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staPtnrNm", "absolute", "-20", "5", "125", "24", null, null, this.Tab01.tabp02.divViewCompCond00);
            obj.set_taborder("52");
            obj.set_text("반입요청일");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_color("black");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("구매요청일자");
            this.Tab01.tabp02.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staMtrl00", "absolute", "431", "6", "99", "24", null, null, this.Tab01.tabp02.divViewCompCond00);
            obj.set_taborder("53");
            obj.set_text("반입창고");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.Tab01.tabp02.divViewCompCond00.addChild(obj.name, obj);
            obj = new Div("divRtnStr", "absolute", "532", "6", null, "24", "429", null, this.Tab01.tabp02.divViewCompCond00);
            obj.set_taborder("54");
            obj.set_text("Div01");
            obj.getSetter("objNm").set("반입창고");
            obj.set_url("CCOMP::ComSrchStr.xfdl");
            this.Tab01.tabp02.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staMtrl01", "absolute", "773", "6", "99", "24", null, null, this.Tab01.tabp02.divViewCompCond00);
            obj.set_taborder("55");
            obj.set_text("반출창고");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.Tab01.tabp02.divViewCompCond00.addChild(obj.name, obj);
            obj = new Div("divReqStr", "absolute", "877", "6", null, "24", "84", null, this.Tab01.tabp02.divViewCompCond00);
            obj.set_taborder("56");
            obj.set_text("Div01");
            obj.getSetter("objNm").set("반출창고");
            obj.set_url("CCOMP::ComSrchStr.xfdl");
            this.Tab01.tabp02.divViewCompCond00.addChild(obj.name, obj);
            obj = new Div("divViewCompCond01", "absolute", "0", "35", null, "88", "0", null, this.Tab01.tabp02);
            obj.set_taborder("6");
            obj.set_cssclass("div_WF_SearchBg");
            obj.getSetter("objNm").set("");
            this.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Static("staOrderBy", "absolute", "0", "34", "105", "24", null, null, this.Tab01.tabp02.divViewCompCond01);
            obj.set_taborder("105");
            obj.set_text("정렬순서");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_color("black");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.Tab01.tabp02.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divOrderBy", "absolute", "106", "34", null, "24", "87", null, this.Tab01.tabp02.divViewCompCond01);
            obj.set_taborder("106");
            obj.set_text("Div00");
            obj.getSetter("objNm").set("정렬순서");
            obj.set_url("CCOMP::CompOrderBy.xfdl");
            this.Tab01.tabp02.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staWarning", "absolute", "-1", "67", null, "19", "0", null, this.Tab01.tabp02.divViewCompCond01);
            obj.set_taborder("107");
            obj.set_text("- 검색조건 없이 검색 시 속도가 저하 될 수 있습니다.");
            obj.set_cssclass("sta_WF_SearchText");
            this.Tab01.tabp02.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staPrNm00", "absolute", "0", "6", "105", "24", null, null, this.Tab01.tabp02.divViewCompCond01);
            obj.set_taborder("112");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_color("black");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.Tab01.tabp02.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("Div03", "absolute", "106", "6", null, "24", "748", null, this.Tab01.tabp02.divViewCompCond01);
            obj.set_taborder("113");
            obj.set_text("Div01");
            obj.getSetter("objNm").set("품목");
            obj.set_url("CCOMP::ComSrchMtrl.xfdl");
            this.Tab01.tabp02.divViewCompCond01.addChild(obj.name, obj);
            obj = new Button("btnFold", "absolute", "45.65%", "122", "56", "17", null, null, this.Tab01.tabp02);
            obj.set_taborder("7");
            obj.set_cssclass("btn_Fold_Close");
            this.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "177", null, null, "0", "0", this.Tab01.tabp02);
            obj.set_taborder("8");
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
            obj._setContents("<Formats><Format id=\"MMODE\"><Columns><Column size=\"43\"/><Column size=\"85\"/><Column size=\"117\"/><Column size=\"93\"/><Column size=\"93\"/><Column size=\"222\"/><Column size=\"75\"/><Column size=\"73\"/><Column size=\"154\"/><Column size=\"89\"/><Column size=\"99\"/><Column size=\"102\"/><Column size=\"103\"/><Column size=\"107\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"상태\"/><Cell col=\"2\" text=\"반입요청일\"/><Cell col=\"3\" text=\"반입창고명\"/><Cell col=\"4\" text=\"품목코드\"/><Cell col=\"5\" text=\"품목명\"/><Cell col=\"6\" text=\"구매단위\"/><Cell col=\"7\" text=\"구매단가\"/><Cell col=\"8\" text=\"품목분류\"/><Cell col=\"9\" text=\"입고계정\"/><Cell col=\"10\" text=\"반출요청수량\"/><Cell col=\"11\" text=\"반출확정수량\"/><Cell col=\"12\" text=\"입고담당자\"/><Cell col=\"13\" text=\"입고일자\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\" maskchar=\" \" editdisplay=\"display\" expandshow=\"hide\"/><Cell col=\"1\" style=\"selectcolor:darkslateblue;\" text=\"bind:MTRL_CD\" tooltiptext=\"bind:MTRL_CD\"/><Cell col=\"2\" style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;selectcolor:darkslateblue;\" cssclass=\"cell_link\" text=\"bind:MTRL_NM\" tooltiptext=\"bind:DOC_NM\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:CD_UNIT\" maskchar=\" \" combodataset=\"dsCdCM11\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" tooltiptext=\"bind:CD_PUR_UNIT\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;color:royalblue;color2:royalblue;selectcolor:blue;selectfont:9 Dotum bold;\" text=\"bind:QTY\" editautoselect=\"true\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/></Band></Format><Format id=\"VMODE\"><Columns><Column size=\"104\"/><Column size=\"288\"/><Column size=\"58\"/><Column size=\"61\"/><Column size=\"122\"/><Column size=\"110\"/><Column size=\"124\"/><Column size=\"94\"/><Column size=\"120\"/><Column size=\"147\"/><Column size=\"71\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"품목코드\"/><Cell col=\"1\" text=\"품목명\"/><Cell col=\"2\" text=\"단위\"/><Cell col=\"3\" text=\"수량\"/><Cell col=\"4\" text=\"예상단가\"/><Cell col=\"5\" text=\"금액\"/><Cell col=\"6\" text=\"입고부서\"/><Cell col=\"7\" text=\"입고요청일\"/><Cell col=\"8\" text=\"입고계정\"/><Cell col=\"9\" text=\"비고\"/><Cell col=\"10\" text=\"첨부파일\"/></Band><Band id=\"body\"><Cell style=\"selectcolor:darkslateblue;\" text=\"bind:MTRL_CD\" tooltiptext=\"bind:MTRL_CD\"/><Cell col=\"1\" edittype=\"none\" style=\"align:left;selectcolor:darkslateblue;\" cssclass=\"cell_link\" text=\"bind:MTRL_NM\" tooltiptext=\"bind:DOC_NM\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"none\" text=\"bind:CD_UNIT\" maskchar=\" \" combodataset=\"dsCdCM11\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" tooltiptext=\"bind:CD_PUR_UNIT\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right;color:royalblue;color2:royalblue;selectcolor:blue;selectfont:9 Dotum bold;\" text=\"bind:QTY\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"none\" style=\"align:right;color:salmon;color2:salmon;font:9 Dotum bold;selectcolor:fuchsia;selectfont:9 Dotum bold;\" text=\"bind:REQ_PRICE\" mask=\"#,##0.00\" editautoselect=\"true\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:REQ_AMT\" mask=\"#,##0\" editautoselect=\"true\"/><Cell col=\"6\" edittype=\"none\" text=\"bind:IN_STR_NM\" expandshow=\"hide\"/><Cell col=\"7\" displaytype=\"date\" edittype=\"none\" text=\"bind:DLV_REQ_DAY\" mask=\"yyyy.MM.dd\" editautoselect=\"true\"/><Cell col=\"8\" edittype=\"none\" style=\"align:left;\" text=\"bind:GR_ACNT_NM\" editautoselect=\"true\" expandshow=\"hide\"/><Cell col=\"9\" edittype=\"none\" style=\"align:left;\" text=\"bind:RMARK\" editautoselect=\"true\"/><Cell col=\"10\" displaytype=\"text\" cssclass=\"cell_link\" text=\"bind:ATTCH_FILE_CNT\"/></Band></Format></Formats>");
            this.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Div("div_2", "absolute", "0", "145", null, "30", "3", null, this.Tab01.tabp02);
            obj.set_taborder("9");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("DIV_품목타이");
            this.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Button("btn_Itm_Del", "absolute", null, "3", "60", null, "1", "3", this.Tab01.tabp02.div_2);
            obj.set_taborder("0");
            obj.set_text("취소");
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
            		p.set_taborder("175");
            		p.set_scrollbars("none");
            		p.getSetter("objNm").set("DIV_품목타이");

            	}
            );
            this.Tab01.tabp01.div_2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1202, 622, this.Tab01.tabp01.div_00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("185");
            		p.set_scrollbars("none");
            		p.getSetter("objNm").set("DIV_품목타이");

            	}
            );
            this.Tab01.tabp01.div_00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1042, 218, this.Tab01.tabp01,
            	//-- Layout function
            	function(p) {
            		p.set_text("반입등록");
            		p.set_scrollbars("none");
            		p.getSetter("lbcd").set("");
            		p.getSetter("objNm").set("반입등록");

            	}
            );
            this.Tab01.tabp01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 36, this.Tab01.tabp02.divViewCompCond00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.style.set_align("center");
            		p.set_cssclass("div_WF_SearchBg");

            	}
            );
            this.Tab01.tabp02.divViewCompCond00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 88, this.Tab01.tabp02.divViewCompCond01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.set_cssclass("div_WF_SearchBg");
            		p.getSetter("objNm").set("");

            	}
            );
            this.Tab01.tabp02.divViewCompCond01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1202, 622, this.Tab01.tabp02.div_2,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("9");
            		p.set_scrollbars("none");
            		p.getSetter("objNm").set("DIV_품목타이");

            	}
            );
            this.Tab01.tabp02.div_2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab01.tabp02,
            	//-- Layout function
            	function(p) {
            		p.set_text("반입현황");
            		p.getSetter("objNm").set("반입현황");

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
            obj = new BindItem("item23","Tab01.tabp02.div_2.btn_Itm_Del","enable","dsObjBindEn","btn_Itm_Del");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","Tab01.tabp02.div_2.btn_Itm_Del","visible","dsObjBindVi","");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::ComSrchStr.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompCalFromTo.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComSrchStr.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComSrchStr.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompOrderBy.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComSrchMtrl.xfdl");
        };
        
        // User Script
        this.registerScript("BRelRtnList.xfdl", function(exports) {

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
         	
          
         	this.Tab01.tabp01.divStr.fnSet(this.dsCondition		, "SRCH_STR_CD", "SRCH_STR_NM");

        
         	this.fnFold();		//조회조건 Div 접기/펼치기 세팅
        	//this.fnSearch();

        }

        
        /**
          * @함수명	: fnSearch
          * @desc     	: 조회 프로세스
          */
        this.fnSearch = function(svcId)
        {
        // 	
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
            this.Tab01.tabp01.div_00.btn_Pre_Pr_Search.addEventHandler("onclick", this.fnSearchPrPre, this);
            this.Tab01.tabp01.div_00.btn_Itm_Del.addEventHandler("onclick", this.Div3_btn_Itm_Del_onclick, this);
            this.Tab01.tabp01.grdList.addEventHandler("oncellclick", this.div_21_grdList_oncellclick, this);
            this.Tab01.tabp01.grdList.addEventHandler("oncelldblclick", this.div_21_grdList_oncelldblclick, this);
            this.Tab01.tabp01.grdList.addEventHandler("onexpandup", this.divViewCompBody00_grdList_onexpandup, this);
            this.Tab01.tabp01.staWriting.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.Tab01.tabp01.staPos.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.Tab01.tabp01.staPrNm02.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.Tab01.tabp01.staPrNm03.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.Tab01.tabp01.staRtnDate.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.Tab01.tabp02.divViewCompCond00.staPtnrNm.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.Tab01.tabp02.divViewCompCond00.staMtrl00.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.Tab01.tabp02.divViewCompCond00.staMtrl01.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.Tab01.tabp02.divViewCompCond01.staOrderBy.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.Tab01.tabp02.divViewCompCond01.staPrNm00.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.Tab01.tabp02.btnFold.addEventHandler("onclick", this.btnFold_onclick, this);
            this.Tab01.tabp02.grdList.addEventHandler("oncellclick", this.div_21_grdList_oncellclick, this);
            this.Tab01.tabp02.grdList.addEventHandler("oncelldblclick", this.div_21_grdList_oncelldblclick, this);
            this.Tab01.tabp02.grdList.addEventHandler("onexpandup", this.divViewCompBody00_grdList_onexpandup, this);
            this.Tab01.tabp02.div_2.btn_Itm_Del.addEventHandler("onclick", this.Div3_btn_Itm_Del_onclick, this);

        };

        this.loadIncludeScript("BRelRtnList.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
