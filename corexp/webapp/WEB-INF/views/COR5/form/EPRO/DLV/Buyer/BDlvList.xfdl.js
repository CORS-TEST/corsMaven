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
                this.set_name("BDlvList");
                this.set_titletext("검수처리대기");
                this._setFormPosition(0,0,1220,683);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCondition", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DLV_PLAN_DAY_STR\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_PLAN_DAY_END\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DLV_STTS\" type=\"STRING\" size=\"256\"/><Column id=\"STR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PO_DAY_STR\" type=\"STRING\" size=\"256\"/><Column id=\"PO_DAY_END\" type=\"STRING\" size=\"256\"/><Column id=\"PO_NO_ARR\" type=\"STRING\" size=\"256\"/><Column id=\"INSP_CHRGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INSP_CHRGR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PTNR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PTNR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHRGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHRGR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ITEM1\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ITEM2\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ITEM3\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ITEM4\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE1\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE2\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE3\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE4\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DOC_CTGR\" type=\"STRING\" size=\"256\"/><Column id=\"PR_NO_ARR\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_PO11APP_IN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DLV_AREA\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Tab("Tab00", "absolute", "0%", "0", null, null, "15", "0", this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.Tab00);
            obj.set_text("검수처리대기");
            this.Tab00.addChild(obj.name, obj);
            obj = new Div("div_body", "absolute", "0", "180", null, null, "0", "0", this.Tab00.tabpage1);
            obj.set_taborder("9");
            obj.set_text("Div00");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Grid("grd_list", "absolute", "0", "20", null, null, "0", "37", this.Tab00.tabpage1.div_body);
            obj.set_cssclass("grd_default");
            obj.set_taborder("20");
            obj.set_binddataset("dsList");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"300\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"170\"/><Column size=\"90\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"검수번호\"/><Cell col=\"1\" text=\"검수상태\"/><Cell col=\"2\" text=\"발주번호\"/><Cell col=\"3\" text=\"발주명\"/><Cell col=\"4\" text=\"검수담당자\"/><Cell col=\"5\" text=\"입고예정일자\"/><Cell col=\"6\" text=\"협력사명\"/><Cell col=\"7\" text=\"검수금액\"/><Cell col=\"8\" text=\"발주일자\"/></Band><Band id=\"body\"><Cell cssclass=\"cell_link\" text=\"bind:DLV_NO\" tooltiptext=\"bind:DLV_NO\"/><Cell col=\"1\" text=\"bind:CD_DLV_STTS_NM\" tooltiptext=\"bind:CD_DLV_STTS_NM\"/><Cell col=\"2\" cssclass=\"cell_link\" text=\"bind:PO_NO\" tooltiptext=\"bind:PO_NO\"/><Cell col=\"3\" style=\"align:left;\" cssclass=\"cell_link\" text=\"bind:TTL\" tooltiptext=\"bind:TTL\"/><Cell col=\"4\" cssclass=\"cell_link\" text=\"bind:INSP_CHRGR_NM\" tooltiptext=\"bind:INSP_CHRGR_NM\"/><Cell col=\"5\" displaytype=\"date\" text=\"bind:DLV_PLAN_DAY\" mask=\"yyyy.MM.dd\" calendardisplaynulltype=\"none\" tooltiptext=\"bind:DLV_PLAN_DAY\"/><Cell col=\"6\" style=\"align:left;\" cssclass=\"cell_link\" text=\"bind:PTNR_NM\" tooltiptext=\"bind:PTNR_NM\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DLV_AMT\" mask=\"#,##0\" tooltiptext=\"bind:DLV_AMT\"/><Cell col=\"8\" displaytype=\"date\" text=\"bind:PO_DAY\" mask=\"yyyy.MM.dd\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.Tab00.tabpage1.div_body.addChild(obj.name, obj);
            obj = new Button("btn_fold", "absolute", null, "170", "63", "13", "0", null, this.Tab00.tabpage1);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_SearchClose");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Div("div_condition1", "absolute", "0", "53", null, "117", "0", null, this.Tab00.tabpage1);
            obj.set_taborder("11");
            obj.set_cssclass("div_WF_SearchBg2");
            obj.getSetter("objNm").set("");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("stc_warning", "absolute", "0", "97", null, "19", "0", null, this.Tab00.tabpage1.div_condition1);
            obj.set_taborder("88");
            obj.set_text("- 검색조건 없이 검색 시 속도가 저하 될 수 있습니다.");
            obj.set_cssclass("sta_WF_SearchText");
            obj.getSetter("lbcd").set("");
            this.Tab00.tabpage1.div_condition1.addChild(obj.name, obj);
            obj = new Static("sta_poDay", "absolute", "0", "10", "117", "24", null, null, this.Tab00.tabpage1.div_condition1);
            obj.set_taborder("89");
            obj.set_text("발주일자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.Tab00.tabpage1.div_condition1.addChild(obj.name, obj);
            obj = new Static("sta_mtrl", "absolute", "654", "10", "117", "24", null, null, this.Tab00.tabpage1.div_condition1);
            obj.set_taborder("91");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.Tab00.tabpage1.div_condition1.addChild(obj.name, obj);
            obj = new Edit("edt_mtrlCd", "absolute", "771", "10", "80", "24", null, null, this.Tab00.tabpage1.div_condition1);
            obj.set_taborder("92");
            obj.set_cssclass("edt_default_r");
            obj.set_enable("false");
            obj.getSetter("objNm").set("품목코드");
            this.Tab00.tabpage1.div_condition1.addChild(obj.name, obj);
            obj = new Edit("edt_mtrlNm", "absolute", "853", "10", "200", "24", null, null, this.Tab00.tabpage1.div_condition1);
            obj.set_taborder("93");
            obj.set_lengthunit("utf8");
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("품목명");
            this.Tab00.tabpage1.div_condition1.addChild(obj.name, obj);
            obj = new Button("btn_mtrl", "absolute", "1032", "10", "21", "24", null, null, this.Tab00.tabpage1.div_condition1);
            obj.set_taborder("94");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("자재 검색팝업 버튼");
            this.Tab00.tabpage1.div_condition1.addChild(obj.name, obj);
            obj = new Static("sta_poNo", "absolute", "337", "10", "117", "24", null, null, this.Tab00.tabpage1.div_condition1);
            obj.set_taborder("95");
            obj.set_text("발주번호");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.Tab00.tabpage1.div_condition1.addChild(obj.name, obj);
            obj = new Edit("edt_poNoArr", "absolute", "454", "10", "200", "24", null, null, this.Tab00.tabpage1.div_condition1);
            obj.set_taborder("96");
            obj.set_lengthunit("utf8");
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("발주번호");
            this.Tab00.tabpage1.div_condition1.addChild(obj.name, obj);
            obj = new Button("btn_multiSelect", "absolute", "633", "10", "21", "24", null, null, this.Tab00.tabpage1.div_condition1);
            obj.set_taborder("97");
            obj.set_cssclass("btn_WF_MultiSmall");
            obj.getSetter("objNm").set("발주번호 멀티선택 버튼");
            this.Tab00.tabpage1.div_condition1.addChild(obj.name, obj);
            obj = new Static("sta_ptnr", "absolute", "678", "39", "117", "24", null, null, this.Tab00.tabpage1.div_condition1);
            obj.set_taborder("98");
            obj.set_text("협력사");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.Tab00.tabpage1.div_condition1.addChild(obj.name, obj);
            obj = new Edit("edt_ptnrId", "absolute", "795", "39", "80", "24", null, null, this.Tab00.tabpage1.div_condition1);
            obj.set_taborder("99");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("10");
            obj.set_cssclass("edt_default_r");
            obj.set_enable("false");
            obj.getSetter("objNm").set("협력사번호");
            this.Tab00.tabpage1.div_condition1.addChild(obj.name, obj);
            obj = new Edit("edt_ptnrNm", "absolute", "877", "39", "200", "24", null, null, this.Tab00.tabpage1.div_condition1);
            obj.set_taborder("100");
            obj.set_lengthunit("utf8");
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("협력사명");
            this.Tab00.tabpage1.div_condition1.addChild(obj.name, obj);
            obj = new Button("btn_ptnr", "absolute", "1056", "39", "21", "24", null, null, this.Tab00.tabpage1.div_condition1);
            obj.set_taborder("101");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("협력사 검색팝업 버튼");
            this.Tab00.tabpage1.div_condition1.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label11", "absolute", "339", "39", "117", "24", null, null, this.Tab00.tabpage1.div_condition1);
            obj.set_taborder("102");
            obj.set_text("구매담당자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.Tab00.tabpage1.div_condition1.addChild(obj.name, obj);
            obj = new Edit("edt_chrgrId", "absolute", "456", "39", "70", "24", null, null, this.Tab00.tabpage1.div_condition1);
            obj.set_taborder("103");
            obj.set_cssclass("edt_default_r");
            obj.set_enable("false");
            obj.getSetter("objNm").set("구매담당자ID");
            this.Tab00.tabpage1.div_condition1.addChild(obj.name, obj);
            obj = new Edit("edt_chrgrNm", "absolute", "528", "39", "150", "24", null, null, this.Tab00.tabpage1.div_condition1);
            obj.set_taborder("104");
            obj.set_lengthunit("utf8");
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("구매담당자명");
            this.Tab00.tabpage1.div_condition1.addChild(obj.name, obj);
            obj = new Button("btn_user", "absolute", "657", "39", "21", "24", null, null, this.Tab00.tabpage1.div_condition1);
            obj.set_taborder("105");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("구매담당자 검색 버튼");
            this.Tab00.tabpage1.div_condition1.addChild(obj.name, obj);
            obj = new Static("sta_order00", "absolute", "0", "68", "117", "24", null, null, this.Tab00.tabpage1.div_condition1);
            obj.set_taborder("106");
            obj.set_text("정렬순서");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("정렬순서");
            this.Tab00.tabpage1.div_condition1.addChild(obj.name, obj);
            obj = new Static("sta_Fctry01", "absolute", "0", "39", "117", "24", null, null, this.Tab00.tabpage1.div_condition1);
            obj.set_taborder("108");
            obj.set_text("검수번호");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.Tab00.tabpage1.div_condition1.addChild(obj.name, obj);
            obj = new Edit("edt_dlvNo", "absolute", "117", "39", "220", "24", null, null, this.Tab00.tabpage1.div_condition1);
            obj.set_taborder("109");
            obj.set_lengthunit("utf8");
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("검수번호");
            this.Tab00.tabpage1.div_condition1.addChild(obj.name, obj);
            obj = new Div("div_condition", "absolute", "0", "10", null, "43", "0", null, this.Tab00.tabpage1);
            obj.set_taborder("12");
            obj.set_cssclass("div_WF_SearchBg");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("sta_Fctry", "absolute", "574", "10", "117", "24", null, null, this.Tab00.tabpage1.div_condition);
            obj.set_taborder("35");
            obj.set_text("입고창고");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.Tab00.tabpage1.div_condition.addChild(obj.name, obj);
            obj = new Static("sta_Fctry00", "absolute", "337", "10", "117", "24", null, null, this.Tab00.tabpage1.div_condition);
            obj.set_taborder("36");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.Tab00.tabpage1.div_condition.addChild(obj.name, obj);
            obj = new Combo("cbo_cdDlvStts", "absolute", "454", "10", "120", "24", null, null, this.Tab00.tabpage1.div_condition);
            this.Tab00.tabpage1.div_condition.addChild(obj.name, obj);
            obj.set_taborder("37");
            obj.set_innerdataset("ds_cdDL10");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("상태");
            obj = new Static("sta_dlvPlanDay", "absolute", "0", "10", "117", "24", null, null, this.Tab00.tabpage1.div_condition);
            obj.set_taborder("38");
            obj.set_text("입고예정일자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.Tab00.tabpage1.div_condition.addChild(obj.name, obj);
            obj = new Edit("ed_strCd", "absolute", "691", "10", "70", "24", null, null, this.Tab00.tabpage1.div_condition);
            obj.set_taborder("40");
            obj.set_readonly("true");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("objNm").set("품목코드");
            this.Tab00.tabpage1.div_condition.addChild(obj.name, obj);
            obj = new Edit("edt_slNm", "absolute", "763", "10", "150", "24", null, null, this.Tab00.tabpage1.div_condition);
            obj.set_taborder("41");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("품목명");
            this.Tab00.tabpage1.div_condition.addChild(obj.name, obj);
            obj = new Button("btn_str", "absolute", "892", "10", "21", "24", null, null, this.Tab00.tabpage1.div_condition);
            obj.set_taborder("42");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("품목코드(명)검색버튼");
            this.Tab00.tabpage1.div_condition.addChild(obj.name, obj);
            obj = new Static("sta_Fctry01", "absolute", "921", "10", "117", "24", null, null, this.Tab00.tabpage1.div_condition);
            obj.set_taborder("43");
            obj.set_text("배송처");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.Tab00.tabpage1.div_condition.addChild(obj.name, obj);
            obj = new Combo("cbo_cdDlvPlace", "absolute", "1038", "10", "120", "24", null, null, this.Tab00.tabpage1.div_condition);
            this.Tab00.tabpage1.div_condition.addChild(obj.name, obj);
            obj.set_taborder("44");
            obj.set_innerdataset("ds_cdPO14");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("배송처");
            obj = new Tabpage("tabpage2", this.Tab00);
            obj.set_text("발주참조 검수처리");
            this.Tab00.addChild(obj.name, obj);
            obj = new Div("div_body", "absolute", "0", "180", null, null, "0", "0", this.Tab00.tabpage2);
            obj.set_taborder("8");
            obj.set_text("Div00");
            this.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Grid("grd_list", "absolute", "0%", "39", null, null, "0", "37", this.Tab00.tabpage2.div_body);
            obj.set_cssclass("grd_default");
            obj.set_taborder("24");
            obj.set_binddataset("ds_list00");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"99\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"400\"/><Column size=\"200\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"발주번호\" combodisplaynulltext=\"CD_CNTR_STTS\"/><Cell col=\"2\" text=\"구매유형\"/><Cell col=\"3\" text=\"상태\"/><Cell col=\"4\" text=\"발주명\"/><Cell col=\"5\" text=\"협력사명\"/><Cell col=\"6\" text=\"구매담당자\"/><Cell col=\"7\" text=\"발주일자\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"background: ;\" text=\"bind:CHECKED\" expandshow=\"hide\"/><Cell col=\"1\" edittype=\"none\" cssclass=\"cell_link\" text=\"bind:PO_NO\" maskchar=\" \" tooltiptext=\"bind:PO_NO\"/><Cell col=\"2\" text=\"bind:CD_DOC_CTGR_NM\" tooltiptext=\"bind:CD_DOC_CTGR_NM\"/><Cell col=\"3\" text=\"bind:CD_PO_STTS_NM\" tooltiptext=\"bind:CD_PO_STTS_NM\"/><Cell col=\"4\" style=\"align:left;\" cssclass=\"cell_link\" text=\"bind:TTL\" tooltiptext=\"bind:TTL\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" style=\"align:left;padding:3 3 3 3;\" cssclass=\"cell_link\" text=\"bind:PTNR_NM\" editautoselect=\"true\" editdisplay=\"edit\" tooltiptext=\"bind:PTNR_NM\"/><Cell col=\"6\" cssclass=\"cell_link\" text=\"bind:CHRGR_NM\" tooltiptext=\"bind:CHRGR_NM\"/><Cell col=\"7\" displaytype=\"date\" edittype=\"none\" style=\"selectfont: ;\" text=\"bind:PO_DAY\" mask=\"yyyy.MM.dd\" calendardisplaynulltype=\"none\" tooltiptext=\"bind:PO_DAY\"/></Band></Format></Formats>");
            this.Tab00.tabpage2.div_body.addChild(obj.name, obj);
            obj = new Button("btn_createPo02", "absolute", null, "10", "93", "24", "1", null, this.Tab00.tabpage2.div_body);
            obj.set_taborder("25");
            obj.set_text("검수문서생성");
            obj.set_cssclass("btn_WF_Custom");
            obj.getSetter("objNm").set("검수문서생성");
            obj.getSetter("titletext").set("발주참조입고");
            this.Tab00.tabpage2.div_body.addChild(obj.name, obj);
            obj = new Div("div_condition1", "absolute", "0", "53", null, "117", "0", null, this.Tab00.tabpage2);
            obj.set_taborder("9");
            obj.set_cssclass("div_WF_SearchBg2");
            obj.getSetter("objNm").set("");
            this.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Static("stc_warning", "absolute", "0", "97", null, "19", "0", null, this.Tab00.tabpage2.div_condition1);
            obj.set_taborder("54");
            obj.set_text("- 검색조건 없이 검색 시 속도가 저하 될 수 있습니다.");
            obj.set_cssclass("sta_WF_SearchText");
            obj.getSetter("objNm").set("- 검색조건 없이 검색 시 속도가 저하 될 수 있습니다.");
            this.Tab00.tabpage2.div_condition1.addChild(obj.name, obj);
            obj = new Static("sta_poNm", "absolute", "581", "10", "117", "24", null, null, this.Tab00.tabpage2.div_condition1);
            obj.set_taborder("55");
            obj.set_text("구매요청번호");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("구매요청번호");
            this.Tab00.tabpage2.div_condition1.addChild(obj.name, obj);
            obj = new Static("sta_order00", "absolute", "0", "68", "117", "24", null, null, this.Tab00.tabpage2.div_condition1);
            obj.set_taborder("56");
            obj.set_text("정렬순서");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("정렬순서");
            this.Tab00.tabpage2.div_condition1.addChild(obj.name, obj);
            obj = new Edit("ed_poRefMtrlNm", "absolute", "535", "39", "200", "24", null, null, this.Tab00.tabpage2.div_condition1);
            obj.set_taborder("57");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("품목명");
            this.Tab00.tabpage2.div_condition1.addChild(obj.name, obj);
            obj = new Edit("ed_mtrlCd", "absolute", "453", "39", "80", "24", null, null, this.Tab00.tabpage2.div_condition1);
            obj.set_taborder("58");
            obj.set_readonly("true");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("objNm").set("품목코드");
            this.Tab00.tabpage2.div_condition1.addChild(obj.name, obj);
            obj = new Button("btn_mtrlCd", "absolute", "714", "39", "21", "24", null, null, this.Tab00.tabpage2.div_condition1);
            obj.set_taborder("59");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("품목코드(명)검색버튼");
            this.Tab00.tabpage2.div_condition1.addChild(obj.name, obj);
            obj = new Static("sta_mtrlCd", "absolute", "336", "39", "117", "24", null, null, this.Tab00.tabpage2.div_condition1);
            obj.set_taborder("60");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("품목코드(명)");
            this.Tab00.tabpage2.div_condition1.addChild(obj.name, obj);
            obj = new Static("sta_bsnsPlc", "absolute", "266", "10", "115", "24", null, null, this.Tab00.tabpage2.div_condition1);
            obj.set_taborder("61");
            obj.set_text("발주번호");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("발주번호");
            this.Tab00.tabpage2.div_condition1.addChild(obj.name, obj);
            obj = new Edit("edt_poNoArr", "absolute", "381", "10", "200", "24", null, null, this.Tab00.tabpage2.div_condition1);
            obj.set_taborder("62");
            obj.getSetter("objNm").set("발주번호");
            this.Tab00.tabpage2.div_condition1.addChild(obj.name, obj);
            obj = new Button("btn_multiSelect", "absolute", "556", "11", "25", "24", null, null, this.Tab00.tabpage2.div_condition1);
            obj.set_taborder("63");
            obj.set_cssclass("btn_WF_MultiSmall");
            obj.getSetter("objNm").set("발주번호멀티입력버튼");
            this.Tab00.tabpage2.div_condition1.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label11", "absolute", "-1", "39", "115", "24", null, null, this.Tab00.tabpage2.div_condition1);
            obj.set_taborder("64");
            obj.set_text("구매담당자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("발주담당자");
            this.Tab00.tabpage2.div_condition1.addChild(obj.name, obj);
            obj = new Edit("ed_poRefpChrgrId", "absolute", "114", "39", "70", "24", null, null, this.Tab00.tabpage2.div_condition1);
            obj.set_taborder("65");
            obj.set_readonly("true");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("objNm").set("발주담당자ID");
            this.Tab00.tabpage2.div_condition1.addChild(obj.name, obj);
            obj = new Edit("ed_poRefpChrgrNm", "absolute", "186", "39", "150", "24", null, null, this.Tab00.tabpage2.div_condition1);
            obj.set_taborder("66");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("발주담당자명");
            this.Tab00.tabpage2.div_condition1.addChild(obj.name, obj);
            obj = new Button("btn_poCharge", "absolute", "315", "39", "21", "24", null, null, this.Tab00.tabpage2.div_condition1);
            obj.set_taborder("67");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("발주담당자검색버튼");
            this.Tab00.tabpage2.div_condition1.addChild(obj.name, obj);
            obj = new Edit("edt_prNoArr", "absolute", "698", "10", "200", "24", null, null, this.Tab00.tabpage2.div_condition1);
            obj.set_taborder("68");
            obj.getSetter("objNm").set("구매요청번호");
            this.Tab00.tabpage2.div_condition1.addChild(obj.name, obj);
            obj = new Static("sta_docCtgr", "absolute", "-1", "10", "117", "24", null, null, this.Tab00.tabpage2.div_condition1);
            obj.set_taborder("70");
            obj.set_text("구매유형");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("구매유형");
            this.Tab00.tabpage2.div_condition1.addChild(obj.name, obj);
            obj = new Combo("cbo_cdDocCtgr", "absolute", "116", "10", "150", "24", null, null, this.Tab00.tabpage2.div_condition1);
            this.Tab00.tabpage2.div_condition1.addChild(obj.name, obj);
            obj.set_taborder("71");
            obj.set_innerdataset("ds_cdCM10");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("구매유형");
            obj = new CheckBox("CheckBox00", "absolute", "745", "39", "150", "24", null, null, this.Tab00.tabpage2.div_condition1);
            obj.set_taborder("72");
            obj.set_text("표준입고 검수 포함");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.Tab00.tabpage2.div_condition1.addChild(obj.name, obj);
            obj = new Button("btn_multiSelect00", "absolute", "873", "10", "25", "24", null, null, this.Tab00.tabpage2.div_condition1);
            obj.set_taborder("73");
            obj.set_cssclass("btn_WF_MultiSmall");
            obj.getSetter("objNm").set("발주번호멀티입력버튼");
            this.Tab00.tabpage2.div_condition1.addChild(obj.name, obj);
            obj = new Button("btn_fold", "absolute", null, "170", "63", "13", "0", null, this.Tab00.tabpage2);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_SearchClose");
            this.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Div("div_condition", "absolute", "0", "10", null, "43", "0", null, this.Tab00.tabpage2);
            obj.set_taborder("11");
            obj.set_cssclass("div_WF_SearchBg");
            this.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Static("sta_srchPoDay", "absolute", "0", "10", "117", "24", null, null, this.Tab00.tabpage2.div_condition);
            obj.set_taborder("42");
            obj.set_text("발주일자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("발주작성일자");
            this.Tab00.tabpage2.div_condition.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label04", "absolute", "676", "10", "117", "24", null, null, this.Tab00.tabpage2.div_condition);
            obj.set_taborder("44");
            obj.set_text("협력사");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("협력회사");
            this.Tab00.tabpage2.div_condition.addChild(obj.name, obj);
            obj = new Edit("ed_ptnrNo", "absolute", "793", "10", "80", "24", null, null, this.Tab00.tabpage2.div_condition);
            obj.set_taborder("45");
            obj.set_readonly("true");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("10");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("objNm").set("협력사코드");
            this.Tab00.tabpage2.div_condition.addChild(obj.name, obj);
            obj = new Edit("ed_poRefPtnrNm", "absolute", "875", "10", "200", "24", null, null, this.Tab00.tabpage2.div_condition);
            obj.set_taborder("46");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("협력사명");
            this.Tab00.tabpage2.div_condition.addChild(obj.name, obj);
            obj = new Button("btn_ptnr", "absolute", "1054", "10", "21", "24", null, null, this.Tab00.tabpage2.div_condition);
            obj.set_taborder("47");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("협력사검색버튼");
            this.Tab00.tabpage2.div_condition.addChild(obj.name, obj);
            obj = new Static("sta_Fctry", "absolute", "337", "10", "117", "24", null, null, this.Tab00.tabpage2.div_condition);
            obj.set_taborder("48");
            obj.set_text("입고창고");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.Tab00.tabpage2.div_condition.addChild(obj.name, obj);
            obj = new Edit("edt_strCd", "absolute", "454", "10", "70", "24", null, null, this.Tab00.tabpage2.div_condition);
            obj.set_taborder("49");
            obj.set_readonly("true");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("objNm").set("품목코드");
            this.Tab00.tabpage2.div_condition.addChild(obj.name, obj);
            obj = new Edit("edt_poRefSlNm", "absolute", "526", "10", "150", "24", null, null, this.Tab00.tabpage2.div_condition);
            obj.set_taborder("50");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("품목명");
            this.Tab00.tabpage2.div_condition.addChild(obj.name, obj);
            obj = new Button("btn_str", "absolute", "655", "10", "21", "24", null, null, this.Tab00.tabpage2.div_condition);
            obj.set_taborder("51");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("품목코드(명)검색버튼");
            this.Tab00.tabpage2.div_condition.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab00.tabpage1.div_body,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("9");
            		p.set_text("Div00");

            	}
            );
            this.Tab00.tabpage1.div_body.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 117, this.Tab00.tabpage1.div_condition1,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("11");
            		p.set_cssclass("div_WF_SearchBg2");
            		p.getSetter("objNm").set("");

            	}
            );
            this.Tab00.tabpage1.div_condition1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.Tab00.tabpage1.div_condition,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("12");
            		p.set_cssclass("div_WF_SearchBg");

            	}
            );
            this.Tab00.tabpage1.div_condition.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab00.tabpage1,
            	//-- Layout function
            	function(p) {
            		p.set_text("검수처리대기");

            	}
            );
            this.Tab00.tabpage1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1042, 483, this.Tab00.tabpage2.div_body,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("8");
            		p.set_text("Div00");

            	}
            );
            this.Tab00.tabpage2.div_body.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 117, this.Tab00.tabpage2.div_condition1,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("9");
            		p.set_cssclass("div_WF_SearchBg2");
            		p.getSetter("objNm").set("");

            	}
            );
            this.Tab00.tabpage2.div_condition1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.Tab00.tabpage2.div_condition,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("11");
            		p.set_cssclass("div_WF_SearchBg");

            	}
            );
            this.Tab00.tabpage2.div_condition.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab00.tabpage2,
            	//-- Layout function
            	function(p) {
            		p.set_text("발주참조 검수처리");

            	}
            );
            this.Tab00.tabpage2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1220, 683, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("검수처리대기");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item17","Tab00.tabpage2.div_condition1.ed_poRefMtrlNm","value","ds_condition00","MTRL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","Tab00.tabpage2.div_condition1.ed_mtrlCd","value","ds_condition00","MTRL_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","Tab00.tabpage2.div_condition1.edt_poNoArr","value","ds_condition00","PO_NO_ARR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","Tab00.tabpage2.div_condition1.ed_poRefpChrgrId","value","ds_condition00","CHRGR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","Tab00.tabpage2.div_condition1.ed_poRefpChrgrNm","value","ds_condition00","CHRGR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","Tab00.tabpage2.div_condition1.edt_prNoArr","value","ds_condition00","PR_NO_ARR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","Tab00.tabpage2.div_condition.div_poDay","cssclass","ds_condition00","PO_DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","Tab00.tabpage2.div_condition.ed_ptnrNo","value","ds_condition00","PTNR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","Tab00.tabpage2.div_condition.ed_poRefPtnrNm","value","ds_condition00","PTNR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","Tab00.tabpage1.div_condition.ed_strCd","value","ds_condition","STR_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Tab00.tabpage1.div_condition.edt_slNm","value","ds_condition","SL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Tab00.tabpage1.div_condition.cbo_cdDlvStts","value","ds_condition","CD_DLV_STTS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Tab00.tabpage1.div_condition1.edt_poNoArr","value","ds_condition","PO_NO_ARR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Tab00.tabpage1.div_condition1.edt_mtrlCd","value","ds_condition","MTRL_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Tab00.tabpage1.div_condition1.edt_mtrlNm","value","ds_condition","MTRL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Tab00.tabpage1.div_condition1.edt_ptnrId","value","ds_condition","PTNR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Tab00.tabpage1.div_condition1.edt_ptnrNm","value","ds_condition","PTNR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Tab00.tabpage1.div_condition1.edt_chrgrId","value","ds_condition","CHRGR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Tab00.tabpage1.div_condition1.edt_chrgrNm","value","ds_condition","CHRGR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","Tab00.tabpage2.div_condition.edt_strCd","value","ds_condition00","STR_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","Tab00.tabpage2.div_condition.edt_poRefSlNm","value","ds_condition00","SL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","Tab00.tabpage2.div_condition1.CheckBox00","value","ds_condition00","ALT_PO11APP_IN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","Tab00.tabpage2.div_condition1.cbo_cdDocCtgr","value","ds_condition00","CD_DOC_CTGR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","Tab00.tabpage1.div_condition.cbo_cdDlvPlace","value","ds_condition","CD_DLV_AREA");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Tab00.tabpage1.div_condition1.edt_dlvNo","value","ds_condition","DLV_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("BDlvList.xfdl", function(exports) {
        /**
         * @파일명       	: SDlvList.xfdl
         * @생성자       	: 이준호
         * @생성일자     	: 2019. 04. 26
         * @설명			: 납품서 작성
         * @최종수정자		: 이준호
         * @최종수정일자	: 2019. 04. 26
        */

        this.fnFormOnload = function(obj,e)
        {	
        	if(this.fv_tabpageOpen01)
        	{
        		//그리드 공통버튼 설정
        		this.Tab00.tabpage1.div_body.div_paing.fn_initGridInfo(application.getActiveForm() , this.Tab00.tabpage1.div_body.grd_list);
        		
        		//그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기
        		this.gfn_setGrdFunc(this.Tab00.tabpage1.div_body.grd_list);
        			
        		//조회조건 Div 접기/펼치기 세팅
        		this.gfn_setDivFoldBtn(this.Tab00.tabpage1.btn_fold);
        		
        		this.dsCondition.addRow();
        	
        		this.dsCondition.setColumn(0,"CD_DLV_AREA","");
        		this.dsCondition.setColumn(0,"CD_DLV_STTS","DL10SND");
        		
        		//검색조건 일자 DATASET BIND
        		this.Tab00.tabpage1.div_condition.div_inspDay.fn_setDate(this.dsCondition, "DLV_PLAN_DAY_STR", "DLV_PLAN_DAY_END"); //입고예정일자	
        		this.Tab00.tabpage1.div_condition1.div_poDay.fn_setDate(this.dsCondition, "PO_DAY_STR", "PO_DAY_END"); //발주일자	
        	}
        	
        	this.fv_tabpageOpen01 = false;
        				
        	this.dsCondition.setColumn(0,"SORT_ITEM1","MPD.DLV_NO");
        	this.dsCondition.setColumn(0,"SORT_TYPE1","DESC");
        	this.dsCondition.setColumn(0,"SORT_ITEM2","");
        	this.dsCondition.setColumn(0,"SORT_TYPE2","");
        	this.dsCondition.setColumn(0,"SORT_ITEM3","");
        	this.dsCondition.setColumn(0,"SORT_TYPE3","");
        	this.dsCondition.setColumn(0,"SORT_ITEM4","");
        	this.dsCondition.setColumn(0,"SORT_TYPE4","");
        	
        	//메인에서 파라미터가 넘어오면 검수번호를 셋팅하여 검색	
        	//if("" != this.gfn_getTmprData("DOC_NO")){
        		this.dsCondition.setColumn(0,"DLV_NO", "1235456");//this.gfn_getTmprData("DOC_NO"));
        		//this.gfn_clearTmprData(); 	
        	//}
        	//alert(1);
        	this.fnSearch();
        	
        }
        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function(){
        	var param = [					 
        					{code:"CM10", sSelectType:"A"} // 구매유형
        				   ,{code:"DL10", sSelectType:"A"} // 납품서상태 
        				   ,{code:"PO14", sSelectType:"A"} // 배송처 
        				];
        	gfnGetCode(this, param);
        }
         
        this.fnFormOninit = function(obj,e) 
        {
        	this.fnSetCode();
        }

        /**
        	@function	fnfnSearch()
        	@desc  		조회.
        */
        this.fnSearch = function()
        {
        	//if(!this.fn_predlvSearch()) return false;
        		
        	var sSvcID = "searchDlvList";
        	var sController = "epro.dlv.service.BDlvService.searchDlvList";
        	var sInDatasets = "dsCondition=dsCondition";
        	var sOutDatasets = "dsList=dsList";
        	var sCallbackFunc = "fnTrCallBack";
        		
           gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
           
        }

        

        
        this.fn_commSrch = function()
        {
        	if(this.Tab00.tabindex == 0)
        	{
        		
        	}
        	
        	else if(this.Tab00.tabindex == 1)
        	{
        		var sSvcID = "BDlv_PoRefSrch";
        		var sController = "BDlv_PoRefSrch.do";
        		var sInDatasets = "in_ds=ds_condition00";
        		var sOutDatasets = "ds_list00=ds_srch";
        		var sCallbackFunc = "fn_trCallBack";
        		
        		this.Tab00.tabpage2.div_body.div_paing.gfn_pagingTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        	}
        }
        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg)
        {	
        // 	if(strErrCd < 0)
        // 	{
        // 		return;
        // 	}
        // 	
        // 	switch(strSvcID)
        // 	{
        // 		case "BDlv_CreateMultiDoc" :
        // 			this.fn_commSrch();
        // 			this.gfn_alert(strErrMsg);			
        // 		break;
        // 		
        // 		case "BDlv_ReqSrch" :
        // 		break;
        // 		
        // 		case "rejectDlv" :
        // 			this.fn_commSrch();
        // 		break;
        // 		
        // 		case "dlvCfm" :
        // 			this.fn_commSrch();
        // 		break;
        // 		
        // 		default:
        // 		break;	
        // 	}
        }

        /**
        	@function	div_condition_btn_multiSelect_onclick()
        	@desc   	멀티입력 팝업을 호출
        */
        this.div_condition_btn_multiSelect_onclick = function(obj,e)
        {
        	//멀티입력 컴포넌트 호출
        	this.gfn_popMultiInput(this.div_condition.edt_poNo);
        }

        /**
        	@function	Tab00_tabpage2_div_body_btn_createPo02_onclick()
        	@desc   	검수문서생성
        */
        this.Tab00_tabpage2_div_body_btn_createPo02_onclick = function(obj,e)
        {
        	var rtn = this.gfn_getChkRowString(this.ds_list00);	
        	if(!rtn) return;
        	this.ds_return.loadXML(rtn);
        		
        	if(this.ds_return.getRowCount() == 1)
        	{
        		var sArg = { 
        						agv_poNo : this.ds_return.getColumn(this.ds_return.rowposition, "PO_NO")
        						,agv_kid : this.ds_return.getColumn(this.ds_return.rowposition, "PO_COREXP_KIDS")
        					};
        		this.gfn_dialog("PDLVB100P01_1", "DLVB::PDLVB100P00.xfdl", sArg, "fn_popCallBack");
        	}
        	else if(this.ds_return.getRowCount() > 1)
        	{	
        		if(!this.gfn_confirm("일괄검수문서생성 하시겠습니까?")) return;	
        			
        		var sSvcID = "BDlv_CreateMultiDoc";
        		var sController = "BDlv_CreateMultiDoc.do";
        		var sInDatasets = "in_ds=ds_return:A";
        		var sOutDatasets = "";
        		var sCallbackFunc = "fn_trCallBack";
        		this.gfn_fileSaveTran(sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        	}
        }

        /**
        	@function	div_body_grd_list_oncelldblclick()
        	@desc   	그리드 oncelldblclick 이벤트
        */
        this.div_body_grd_list_oncelldblclick = function(obj,e)
        {	
        	//var objDs = obj.getBindDataset();
        	//if(dsList.rowcount==0) return;	
        	//if(gfnIsNull(dsList.getColumn(e.row, gfnGrdBindColId(obj, obj.getCellPos())))) return false;

        	//alert(this.dsList.getColumn(0, "DLV_NO"));

        	//alert(gfnGrdBindColId(obj, obj.getCellPos()));
        	if("DLV_NO" == gfnGrdBindColId(obj, obj.getCellPos())){ 	
        		gfnSetTmprData("DLV_NO"	, this.dsList.getColumn(e.row, "DLV_NO"));
        		gfnSetTmprData("COREXP_KIDS"	,this.dsList.getColumn(e.row, "COREXP_KIDS"));
        		gfnOpenMenuUrl("BDLV::BDlvDetail");
        	}
        	if("PO_NO" == gfnGrdBindColId(obj, obj.getCellPos())){ 
        		gfnSetTmprData("BRANCH_CD"   , this.dsList.getColumn(e.row, "BRANCH_CD"));
        		gfnSetTmprData("PO_NO"	   , this.dsList.getColumn(e.row, "PO_NO"));
        		gfnSetTmprData("COREXP_KIDS" , this.dsList.getColumn(e.row, "PO_COREXP_KIDS"));
        		
        		gfnModalPop(this, "popupid", "BDLV::BDlvPopup.xfdl", sArg, "fnPopCallBack", 1057, 1067);
        		//gfnModalPop("PopupPo", "BDLV::BDlvPopup.xfdl", "", "fn_popCallBack");
        	} 
        	if("TTL" == gfnGrdBindColId(obj, obj.getCellPos())){ 	
        		gfnSetTmprData("BRANCH_CD"   , this.dsList.getColumn(e.row, "BRANCH_CD"));
        		gfnSetTmprData("PO_NO"	   , this.dsList.getColumn(e.row, "PO_NO"));
        		gfnSetTmprData("COREXP_KIDS" , this.dsList.getColumn(e.row, "PO_COREXP_KIDS"));

        		gfnModalPop("PopupPo", "BDLV::BDlvPopup.xfdl", "", "fn_popCallBack");
        	}
        	if("INSP_CHRGR_NM" == gfnGrdBindColId(obj, obj.getCellPos())){ 
        		var sArg = {	 branch_cd : application.gds_userInfo.getColumn(0, "BRANCH_CD")
        						,  user_id : this.dsList.getColumn(e.row, "INSP_CHRGR_ID")
        					};
        		gfnModalPop("PopupUserInfo", "commPop::PPOPC000P05.xfdl", sArg, "fn_popCallBack");
        	}
        	if("PTNR_NM" == gfnGrdBindColId(obj, obj.getCellPos())){ 	
        		var sArg = { agv_ptnrId:this.dsList.getColumn(e.row,"PTNR_ID")};
        		gfnModalPop("PopupComCorpRead", "commPop::PPOPC500P04.xfdl", sArg, "fn_popCallBack");
        	}
        	else if("CHRGR_NM" == gfnGrdBindColId(obj, obj.getCellPos()))	//요청자
        	{
        		var sArg = {	 branch_cd : application.gds_userInfo.getColumn(0, "BRANCH_CD")
        						,  user_id : this.dsList.getColumn(e.row, "CHRGR_ID")
        					};
        		gfnModalPop("PopupUserInfo", "commPop::PPOPC000P05.xfdl", sArg, "fn_popCallBack");
        	}
        }

        /**
        	@function	Tab00_tabpage1_div_condition1_btn_multiSelect_onclick()
        	@desc   	발주번호 멀티입력 팝업 호출
        */
        this.Tab00_tabpage1_div_condition1_btn_multiSelect_onclick = function(obj,e)
        {
        	//멀티입력 컴포넌트 호출
        	this.gfn_popMultiInput(this.Tab00.tabpage1.div_condition1.edt_poNoArr);	
        }

        /**
        	@function	fn_onkeyup_event()
        	@desc   	검색조건에서 ENTER(keycode::13) 이벤트를 발생시킨다.
        */
        this.fn_onkeyup_event = function(obj,e)
        {
        	//Enter 입력시
        	if(e.keycode == "13")
        	{
        		obj.updateToDataset();
        	
        		if(obj.name == "edt_poNoArr")
        		{
        			this.fn_commSrch();
        		}
        		else if(obj.name == "edt_slNm")
        		{
        			this.Tab00_tabpage1_div_condition_btn_str_onclick();
        		}
        		else if(obj.name == "edt_mtrlNm")
        		{
        			this.Tab00_tabpage1_div_condition1_btn_mtrl_onclick();
        		}
        		else if(obj.name == "edt_chrgrNm")
        		{
        			this.Tab00_tabpage1_div_condition1_btn_user_onclick();
        		}
        		else if(obj.name == "edt_inspChrgrNm")
        		{
        			this.Tab00_tabpage1_div_condition1_btn_user00_onclick();
        		}
        		else if(obj.name == "edt_ptnrNm")
        		{
        			this.Tab00_tabpage1_div_condition1_btn_ptnr_onclick();
        		}
        		else if(obj.name == "edt_poRefSlNm")
        		{
        			this.Tab00_tabpage2_div_condition_btn_str_onclick();
        		}
        		else if(obj.name == "ed_poRefPtnrNm")
        		{
        			this.Tab00_tabpage2_div_condition_btn_ptnr_onclick();
        		}
        		else if(obj.name == "ed_poRefMtrlNm")
        		{
        			this.Tab00_tabpage2_div_condition1_btn_mtrlCd_onclick();
        		}
        		else if(obj.name == "ed_poRefpChrgrNm")
        		{
        			this.Tab00_tabpage2_div_condition1_btn_poCharge_onclick();
        		}
        	}
        }

        /**
        	@function	fn_ontextchanged_event()
        	@desc   	ontextchanged 이벤트시 실행함수
        */
        this.fn_ontextchanged_event = function(obj,e)
        {	
        	if(obj.name == "edt_slNm")
        	{
        		this.gfn_initKey(this.ds_condition,e,"STR_CD");
        	}
        	else if(obj.name == "edt_mtrlNm")
        	{
        		this.gfn_initKey(this.ds_condition,e,"MTRL_CD");
        	}
        	else if(obj.name == "edt_chrgrNm")
        	{
        		this.gfn_initKey(this.ds_condition,e,"CHRGR_ID");
        	}
        	else if(obj.name == "edt_inspChrgrNm")
        	{
        		this.gfn_initKey(this.ds_condition,e,"INSP_CHRGR_ID");
        	}
        	else if(obj.name == "edt_ptnrNm")
        	{
        		this.gfn_initKey(this.ds_condition,e,"PTNR_ID");
        	}
        	else if(obj.name == "edt_poRefSlNm")
        	{
        		this.gfn_initKey(this.ds_condition00,e,"STR_CD");	
        	}
        	else if(obj.name == "ed_poRefPtnrNm")
        	{
        		this.gfn_initKey(this.ds_condition00,e,"PTNR_ID");
        	}
        	else if(obj.name == "ed_poRefMtrlNm")
        	{
        		this.gfn_initKey(this.ds_condition00,e,"MTRL_CD");
        	}
        	else if(obj.name == "ed_poRefpChrgrNm")
        	{
        		this.gfn_initKey(this.ds_condition00,e,"CHRGR_ID");
        	}
        }

        /**
        	@function	Tab00_tabpage1_div_condition_btn_str_onclick()
        	@desc   	입고창고 검색 팝업을 호출
        */
        this.Tab00_tabpage1_div_condition_btn_str_onclick = function(obj,e)
        {
        	var sArg = { 
        					agv_nm:this.ds_condition.getColumn(0, "SL_NM")
        			   };
        	this.gfn_CPop_comStorageSrch(sArg,"fn_popCallBack","StorageSingSrch");
        }

        /**
        	@function	Tab00_tabpage1_div_condition1_btn_mtrl_onclick()
        	@desc   	품목 검색 팝업을 호출
        */
        this.Tab00_tabpage1_div_condition1_btn_mtrl_onclick = function(obj,e)
        {	
        	var sArg = {
        				agv_nm:this.ds_condition.getColumn(0,"MTRL_NM")
        				};
        	this.gfn_CPop_ComMtrlSrch(sArg,"fn_popCallBack","MtrlSingSrch");
        }

        /**
        	@function	Tab00_tabpage1_div_condition1_btn_user_onclick()
        	@desc   	구매담당자 검색 팝업을 호출
        */
        this.Tab00_tabpage1_div_condition1_btn_user_onclick = function(obj,e)
        {
        	var sArg = { 
        					agv_nm:this.ds_condition.getColumn(0,"CHRGR_NM")
        			   };
        	this.gfn_CPop_ComUserSrch(sArg,"fn_popCallBack","UserSingSrch");
        }

        /**
        	@function	Tab00_tabpage1_div_condition1_btn_user00_onclick()
        	@desc   	검수담당자 검색 팝업을 호출
        */
        this.Tab00_tabpage1_div_condition1_btn_user00_onclick = function(obj,e)
        {
        	var sArg = { 
        					agv_nm:this.ds_condition.getColumn(0,"INSP_CHRGR_NM")
        			   };
        	this.gfn_CPop_ComUserSrch(sArg,"fn_popCallBack","UserSingSrch_insp");
        }

        /**
        	@function	Tab00_tabpage1_div_condition1_btn_ptnr_onclick()
        	@desc   	협력회사 검색 팝업을 호출
        */
        this.Tab00_tabpage1_div_condition1_btn_ptnr_onclick = function(obj,e)
        {
        	var sArg = { 
        					agv_nm:this.ds_condition.getColumn(0, "PTNR_NM")
        			   };
        	
        	this.gfn_CPop_ComCorpSrch(sArg,"fn_popCallBack","PtnrSingSrch");
        }

        /**
        	@function	fn_popCallBack()
        	@desc   	팝업 CallBack 함수
        */
        this.fn_popCallBack = function(sPopupId,rtn)
        {
        	if(this.gfn_isNull(rtn)) return;
        	
        	if(rtn.indexOf("<Dataset id=") == 0)
        	{
        		if(sPopupId == "MtrlSingSrch") //품목검색
        		{
        			this.ds_return.loadXML(rtn);
        			this.ds_condition.setColumn(0, "MTRL_CD" , this.ds_return.getColumn(0,"MTRL_CD"));
        			this.ds_condition.setColumn(0, "MTRL_NM" , this.ds_return.getColumn(0,"MTRL_NM"));		
        		}	
        		else if(sPopupId == "StorageSingSrch") //창고 검색
        		{
        			this.ds_return.loadXML(rtn);
        			this.ds_condition.setColumn(0, "STR_CD" , this.ds_return.getColumn(0,"STR_CD"));
        			this.ds_condition.setColumn(0, "SL_NM" , this.ds_return.getColumn(0,"SL_NM"));		
        		}
        		else if(sPopupId == "UserSingSrch") //구매담당자 검색
        		{
        			this.ds_return.loadXML(rtn);
        			this.ds_condition.setColumn(0, "CHRGR_ID" , this.ds_return.getColumn(0,"USER_ID"));
        			this.ds_condition.setColumn(0, "CHRGR_NM" , this.ds_return.getColumn(0,"USER_NM"));		
        		}	
        		else if(sPopupId == "UserSingSrch_insp") //검수담당자 검색
        		{
        			this.ds_return.loadXML(rtn);
        			this.ds_condition.setColumn(0, "INSP_CHRGR_ID" , this.ds_return.getColumn(0,"USER_ID"));
        			this.ds_condition.setColumn(0, "INSP_CHRGR_NM" , this.ds_return.getColumn(0,"USER_NM"));		
        		}
        		else if(sPopupId == "PtnrSingSrch")	//협력사검색
        		{
        			this.ds_return.loadXML(rtn);
        			this.ds_condition.setColumn(0, "PTNR_ID" , this.ds_return.getColumn(0,"PTNR_ID"));
        			this.ds_condition.setColumn(0, "PTNR_NM" , this.ds_return.getColumn(0,"PTNR_NM"));
        		}	
        		else if(sPopupId == "StorageSingSrch_poRef") //발주참조 검수처리 창고 검색
        		{
        			this.ds_return.loadXML(rtn);
        			this.ds_condition00.setColumn(0, "STR_CD" , this.ds_return.getColumn(0,"STR_CD"));
        			this.ds_condition00.setColumn(0, "SL_NM" , this.ds_return.getColumn(0,"SL_NM"));		
        		}
        		else if(sPopupId == "PtnrSingSrch_poRef")	//발주참조 검수처리 협력사검색
        		{
        			this.ds_return.loadXML(rtn);
        			this.ds_condition00.setColumn(0, "PTNR_ID" , this.ds_return.getColumn(0,"PTNR_ID"));
        			this.ds_condition00.setColumn(0, "PTNR_NM" , this.ds_return.getColumn(0,"PTNR_NM"));
        		}
        		if(sPopupId == "MtrlSingSrch_poRef") //발주참조 검수처리 품목검색
        		{
        			this.ds_return.loadXML(rtn);
        			this.ds_condition00.setColumn(0, "MTRL_CD" , this.ds_return.getColumn(0,"MTRL_CD"));
        			this.ds_condition00.setColumn(0, "MTRL_NM" , this.ds_return.getColumn(0,"MTRL_NM"));		
        		}
        		else if(sPopupId == "UserSingSrch_poRef") //발주참조 구매담당자 검색
        		{
        			this.ds_return.loadXML(rtn);
        			this.ds_condition00.setColumn(0, "CHRGR_ID" , this.ds_return.getColumn(0,"USER_ID"));
        			this.ds_condition00.setColumn(0, "CHRGR_NM" , this.ds_return.getColumn(0,"USER_NM"));		
        		}
        	}
        }

        /**
        	@function	Tab00_tabpage2_div_condition_btn_str_onclick()
        	@desc   	발주참조 검수처리 창고 검색 팝업 호출
        */
        this.Tab00_tabpage2_div_condition_btn_str_onclick = function(obj,e)
        {
        	var sArg = { 
        					agv_nm:this.ds_condition00.getColumn(0, "SL_NM")
        			   };
        	this.gfn_CPop_comStorageSrch(sArg,"fn_popCallBack","StorageSingSrch_poRef");
        }

        /**
        	@function	Tab00_tabpage2_div_condition_btn_ptnr_onclick()
        	@desc   	발주참조 검수처리 협력회사 검색 팝업 호출
        */
        this.Tab00_tabpage2_div_condition_btn_ptnr_onclick = function(obj,e)
        {
        	var sArg = { 
        					agv_nm:this.ds_condition00.getColumn(0, "PTNR_NM")
        			   };
        	
        	this.gfn_CPop_ComCorpSrch(sArg,"fn_popCallBack","PtnrSingSrch_poRef");
        }

        /**
        	@function	Tab00_tabpage2_div_condition_btn_ptnr_onclick()
        	@desc   	발주참조 검수처리 품목 검색 팝업 호출
        */
        this.Tab00_tabpage2_div_condition1_btn_mtrlCd_onclick = function(obj,e)
        {
        	var sArg = {
        				agv_nm:this.ds_condition00.getColumn(0,"MTRL_NM")
        				};
        	this.gfn_CPop_ComMtrlSrch(sArg,"fn_popCallBack","MtrlSingSrch_poRef");
        }

        /**
        	@function	Tab00_tabpage2_div_condition1_btn_poCharge_onclick()
        	@desc   	발주참조 검수처리 구매담당자 검색 팝업 호출
        */
        this.Tab00_tabpage2_div_condition1_btn_poCharge_onclick = function(obj,e)
        {
        	var sArg = { 
        					agv_nm:this.ds_condition00.getColumn(0,"CHRGR_NM")
        			   };
        	this.gfn_CPop_ComUserSrch(sArg,"fn_popCallBack","UserSingSrch_poRef");
        }

        /**
        	@function	Tab00_tabpage2_div_condition1_btn_multiSelect_onclick()
        	@desc   	발주참조 검수처리 발주번호 멀티입력 팝업 호출
        */
        this.Tab00_tabpage2_div_condition1_btn_multiSelect_onclick = function(obj,e)
        {
        	//멀티입력 컴포넌트 호출
        	this.gfn_popMultiInput(this.Tab00.tabpage2.div_condition1.edt_poNoArr);
        }

        /**
        	@function	Tab00_tabpage2_div_condition1_btn_multiSelect00_onclick()
        	@desc   	발주참조 검수처리 발주번호 멀티입력 팝업 호출
        */
        this.Tab00_tabpage2_div_condition1_btn_multiSelect00_onclick = function(obj,e)
        {
        	//멀티입력 컴포넌트 호출
        	this.gfn_popMultiInput(this.Tab00.tabpage2.div_condition1.edt_prNoArr);
        }

        
        this.BDlvList_oninit = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.Tab00.addEventHandler("onchanged", this.Tab00_onchanged, this);
            this.Tab00.tabpage1.div_body.grd_list.addEventHandler("oncelldblclick", this.div_body_grd_list_oncelldblclick, this);
            this.Tab00.tabpage1.div_condition1.edt_mtrlNm.addEventHandler("onkeyup", this.fn_onkeyup_event, this);
            this.Tab00.tabpage1.div_condition1.edt_mtrlNm.addEventHandler("ontextchanged", this.fn_ontextchanged_event, this);
            this.Tab00.tabpage1.div_condition1.btn_mtrl.addEventHandler("onclick", this.Tab00_tabpage1_div_condition1_btn_mtrl_onclick, this);
            this.Tab00.tabpage1.div_condition1.sta_poNo.addEventHandler("onclick", this.div_condition_sta_bsnsPlc_onclick, this);
            this.Tab00.tabpage1.div_condition1.edt_poNoArr.addEventHandler("onkeyup", this.fn_onkeyup_event, this);
            this.Tab00.tabpage1.div_condition1.btn_multiSelect.addEventHandler("onclick", this.Tab00_tabpage1_div_condition1_btn_multiSelect_onclick, this);
            this.Tab00.tabpage1.div_condition1.sta_ptnr.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.Tab00.tabpage1.div_condition1.edt_ptnrNm.addEventHandler("onkeyup", this.fn_onkeyup_event, this);
            this.Tab00.tabpage1.div_condition1.edt_ptnrNm.addEventHandler("ontextchanged", this.fn_ontextchanged_event, this);
            this.Tab00.tabpage1.div_condition1.btn_ptnr.addEventHandler("onclick", this.Tab00_tabpage1_div_condition1_btn_ptnr_onclick, this);
            this.Tab00.tabpage1.div_condition1.edt_chrgrNm.addEventHandler("onkeyup", this.fn_onkeyup_event, this);
            this.Tab00.tabpage1.div_condition1.edt_chrgrNm.addEventHandler("ontextchanged", this.fn_ontextchanged_event, this);
            this.Tab00.tabpage1.div_condition1.btn_user.addEventHandler("onclick", this.Tab00_tabpage1_div_condition1_btn_user_onclick, this);
            this.Tab00.tabpage1.div_condition1.edt_dlvNo.addEventHandler("onkeyup", this.fn_onkeyup_event, this);
            this.Tab00.tabpage1.div_condition.edt_slNm.addEventHandler("onkeyup", this.fn_onkeyup_event, this);
            this.Tab00.tabpage1.div_condition.edt_slNm.addEventHandler("ontextchanged", this.fn_ontextchanged_event, this);
            this.Tab00.tabpage1.div_condition.btn_str.addEventHandler("onclick", this.Tab00_tabpage1_div_condition_btn_str_onclick, this);
            this.Tab00.tabpage2.div_body.grd_list.addEventHandler("oncelldblclick", this.div_body_grd_list_oncelldblclick, this);
            this.Tab00.tabpage2.div_body.btn_createPo02.addEventHandler("onclick", this.Tab00_tabpage2_div_body_btn_createPo02_onclick, this);
            this.Tab00.tabpage2.div_condition1.sta_poNm.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label01_onclick, this);
            this.Tab00.tabpage2.div_condition1.ed_poRefMtrlNm.addEventHandler("onkeyup", this.fn_onkeyup_event, this);
            this.Tab00.tabpage2.div_condition1.ed_poRefMtrlNm.addEventHandler("ontextchanged", this.fn_ontextchanged_event, this);
            this.Tab00.tabpage2.div_condition1.btn_mtrlCd.addEventHandler("onclick", this.Tab00_tabpage2_div_condition1_btn_mtrlCd_onclick, this);
            this.Tab00.tabpage2.div_condition1.sta_mtrlCd.addEventHandler("onclick", this.div_condition1_sta_WFDA_Label02_onclick, this);
            this.Tab00.tabpage2.div_condition1.edt_poNoArr.addEventHandler("onkeyup", this.fn_onkeyup_event, this);
            this.Tab00.tabpage2.div_condition1.btn_multiSelect.addEventHandler("onclick", this.Tab00_tabpage2_div_condition1_btn_multiSelect_onclick, this);
            this.Tab00.tabpage2.div_condition1.ed_poRefpChrgrNm.addEventHandler("onkeyup", this.fn_onkeyup_event, this);
            this.Tab00.tabpage2.div_condition1.ed_poRefpChrgrNm.addEventHandler("ontextchanged", this.fn_ontextchanged_event, this);
            this.Tab00.tabpage2.div_condition1.btn_poCharge.addEventHandler("onclick", this.Tab00_tabpage2_div_condition1_btn_poCharge_onclick, this);
            this.Tab00.tabpage2.div_condition1.edt_prNoArr.addEventHandler("onkeyup", this.fn_onkeyup_event, this);
            this.Tab00.tabpage2.div_condition1.btn_multiSelect00.addEventHandler("onclick", this.Tab00_tabpage2_div_condition1_btn_multiSelect00_onclick, this);
            this.Tab00.tabpage2.div_condition.sta_WFDA_Label04.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.Tab00.tabpage2.div_condition.ed_poRefPtnrNm.addEventHandler("onkeyup", this.fn_onkeyup_event, this);
            this.Tab00.tabpage2.div_condition.ed_poRefPtnrNm.addEventHandler("ontextchanged", this.fn_ontextchanged_event, this);
            this.Tab00.tabpage2.div_condition.btn_ptnr.addEventHandler("onclick", this.Tab00_tabpage2_div_condition_btn_ptnr_onclick, this);
            this.Tab00.tabpage2.div_condition.edt_poRefSlNm.addEventHandler("onkeyup", this.fn_onkeyup_event, this);
            this.Tab00.tabpage2.div_condition.edt_poRefSlNm.addEventHandler("ontextchanged", this.fn_ontextchanged_event, this);
            this.Tab00.tabpage2.div_condition.btn_str.addEventHandler("onclick", this.Tab00_tabpage2_div_condition_btn_str_onclick, this);

        };

        this.loadIncludeScript("BDlvList.xfdl", true);

       
    };
}
)();
