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
                this.set_name("BDlvDetail");
                this.set_titletext("검수상세");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_return", this);
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

            obj = new Dataset("ds_dlv", this);
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"10\" type=\"string\"/><Column id=\"CD_DOC_CTGR\" size=\"10\" type=\"string\"/><Column id=\"DLV_NO\" size=\"10\" type=\"string\"/><Column id=\"PO_NO\" size=\"10\" type=\"string\"/><Column id=\"CD_INSP_OPNN\" size=\"10\" type=\"string\"/><Column id=\"PTNR_ID\" size=\"10\" type=\"string\"/><Column id=\"PTNR_NM\" size=\"10\" type=\"string\"/><Column id=\"DLV_AMT\" size=\"10\" type=\"string\"/><Column id=\"CD_CRNC\" size=\"10\" type=\"string\"/><Column id=\"VAT\" size=\"10\" type=\"string\"/><Column id=\"CD_DLV_STTS\" size=\"10\" type=\"string\"/><Column id=\"STR_CD\" size=\"10\" type=\"string\"/><Column id=\"SL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_PLAN_DAY\" size=\"10\" type=\"string\"/><Column id=\"INSP_DAY\" size=\"10\" type=\"string\"/><Column id=\"ALT_PRE_MM_GR\" size=\"10\" type=\"string\"/><Column id=\"COREXP_KIDS\" type=\"STRING\" size=\"256\"/><Column id=\"INT_DLV_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dlvItem", this);
            obj._setContents("<ColumnInfo><Column id=\"CHECKED\" type=\"string\" size=\"10\"/><Column id=\"DLV_ITEM_ID\" type=\"string\" size=\"10\"/><Column id=\"BRANCH_CD\" type=\"string\" size=\"10\"/><Column id=\"DLV_NO\" type=\"string\" size=\"10\"/><Column id=\"MTRL_CD\" type=\"string\" size=\"10\"/><Column id=\"MTRL_NM\" type=\"string\" size=\"10\"/><Column id=\"QTY\" type=\"string\" size=\"10\"/><Column id=\"TOT_DLV_QTY\" type=\"string\" size=\"10\"/><Column id=\"DLV_PLAN_QTY\" type=\"string\" size=\"10\"/><Column id=\"EDIT_DLV_QTY\" type=\"string\" size=\"10\"/><Column id=\"CD_UNIT\" type=\"string\" size=\"10\"/><Column id=\"CD_UNIT_NM\" type=\"string\" size=\"10\"/><Column id=\"UNT_PRICE\" type=\"string\" size=\"10\"/><Column id=\"DLV_PLAN_AMT\" type=\"string\" size=\"10\"/><Column id=\"ALT_DLV_CMPLT\" type=\"string\" size=\"10\"/><Column id=\"DLV_OVR_RT\" type=\"string\" size=\"10\"/><Column id=\"MAX_QTY\" type=\"string\" size=\"10\"/><Column id=\"SL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dlvItemExp", this);
            obj._setContents("<ColumnInfo><Column id=\"CHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_ITEM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"EFF_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"PO_ITEM_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_poPay", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_1", "absolute", "0", "0", null, "43", "15", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBg3");
            obj.getSetter("objNm").set("컨트롤 박스");
            this.addChild(obj.name, obj);
            obj = new Combo("cb_cdDocCtgr", "absolute", "10", "10", "150", "24", null, null, this.div_1);
            this.div_1.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_cdCM10");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_cssclass("cbo_default_r");
            obj.getSetter("objNm").set("문서유형");
            obj = new Edit("edt_docNo", "absolute", "165", "10", "250", "24", null, null, this.div_1);
            obj.set_taborder("7");
            obj.set_cssclass("edt_default_r");
            obj.getSetter("objNm").set("문서번호");
            this.div_1.addChild(obj.name, obj);
            obj = new Button("btn_cfm", "absolute", null, "10", "70", "25", "143", null, this.div_1);
            obj.set_taborder("8");
            obj.set_text("검수완료");
            obj.set_cssclass("btn_WF_SearchBtn");
            obj.set_visible("true");
            obj.getSetter("objNm").set("입고완료버튼");
            this.div_1.addChild(obj.name, obj);
            obj = new Button("btn_rej", "absolute", null, "10", "45", "25", "96", null, this.div_1);
            obj.set_taborder("9");
            obj.set_text("반려");
            obj.set_cssclass("btn_WF_SearchBtn");
            obj.set_visible("true");
            obj.getSetter("objNm").set("반려버튼");
            this.div_1.addChild(obj.name, obj);
            obj = new Button("btn_barcode", "absolute", null, "10", "86", "25", "8", null, this.div_1);
            obj.set_taborder("10");
            obj.set_text("바코드 출력");
            obj.set_cssclass("btn_WF_SearchBtn");
            obj.getSetter("objNm").set("바코드출력");
            this.div_1.addChild(obj.name, obj);

            obj = new Div("div_2", "absolute", "0", "63", null, "24", "15", null, this);
            obj.set_taborder("1");
            obj.getSetter("objNm").set("DIV-헤더 타이틀");
            this.addChild(obj.name, obj);
            obj = new Button("btn_opHead", "absolute", "0%", "0", "147", "24", null, null, this.div_2);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_cssclass("btn_WF_DivClose");
            obj.getSetter("objNm").set("접기펼치기 버튼");
            obj.getSetter("lbcd").set("");
            this.div_2.addChild(obj.name, obj);

            obj = new Div("div_21", "absolute", "0", "97", null, "188", "15", null, this);
            obj.set_taborder("2");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("DIV-헤더 상세");
            this.addChild(obj.name, obj);
            obj = new Tab("Tab01", "absolute", "0", "0", null, null, "0", "0", this.div_21);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.set_cssclass("tab_default");
            obj.getSetter("objNm").set("TAB");
            this.div_21.addChild(obj.name, obj);
            obj = new Tabpage("tabp01", this.div_21.Tab01);
            obj.set_text("기본정보");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("기본정보");
            obj.getSetter("lbcd").set("");
            this.div_21.Tab01.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label05", "absolute", "0", "10", null, "131", "0", null, this.div_21.Tab01.tabp01);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("st_RfqStates", "absolute", "731", "20", "115", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("77");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("lbcd").set("");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("st_CrtrNm", "absolute", "0", "49", "115", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("78");
            obj.set_text("협력사");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("objNm").set("작성자");
            obj.getSetter("lbcd").set("");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("ed_RfqAmt01", "absolute", "0", "78", "115", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("79");
            obj.set_text("발주번호");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("objNm").set("총금액");
            obj.getSetter("lbcd").set("");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("st_RfqStates00", "absolute", "730", "78", "115", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("80");
            obj.set_text("입고예정일자");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("objNm").set("상태");
            obj.getSetter("lbcd").set("");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("st_CrDt02", "absolute", "730", "107", "115", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("81");
            obj.set_text("검수완료일자");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("objNm").set("예산번호");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Combo("cbo_cdDlvStts", "absolute", "845", "20", "150", "24", null, null, this.div_21.Tab01.tabp01);
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("82");
            obj.set_readonly("true");
            obj.set_innerdataset("ds_cdDL10");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("상태");
            obj = new Edit("edt_ptnrId", "absolute", "114", "49", "100", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("83");
            obj.set_cssclass("edt_default_r");
            obj.getSetter("objNm").set("협력사코드");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edt_ptnrNm", "absolute", "216", "49", "469", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("84");
            obj.set_lengthunit("utf8");
            obj.set_cssclass("edt_default_r");
            obj.getSetter("objNm").set("협력사명");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new MaskEdit("mae_DlvAmt", "absolute", "114", "107", "150", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("85");
            obj.set_mask("#,##0");
            obj.set_cssclass("mae_default_r");
            obj.style.set_color("blue");
            obj.style.set_align("right middle");
            obj.style.set_font("bold 10 Dotum");
            obj.getSetter("objNm").set("하한유찰가");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Combo("cbo_cdDlvCrnc", "absolute", "265", "107", "112", "24", null, null, this.div_21.Tab01.tabp01);
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("86");
            obj.set_innerdataset("ds_cdCM15");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_cssclass("cbo_default_r");
            obj.getSetter("objNm").set("응찰통화");
            obj = new MaskEdit("me_dlvTax", "absolute", "535", "107", "150", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("87");
            obj.set_mask("#,##0");
            obj.set_cssclass("mae_default_r");
            obj.style.set_color("blue");
            obj.style.set_align("right middle");
            obj.style.set_font("bold 10 Dotum");
            obj.getSetter("objNm").set("부가세");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "393", "107", "143", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("88");
            obj.set_text("부가세");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edt_poNo", "absolute", "114", "78", "150", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("89");
            obj.set_cssclass("edt_default_r");
            obj.getSetter("objNm").set("발주번호");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("ed_RfqAmt00", "absolute", "0", "107", "115", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("90");
            obj.set_text("공급가액");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("objNm").set("총금액");
            obj.getSetter("lbcd").set("");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Calendar("cal_poDay", "absolute", "845", "78", "125", "24", null, null, this.div_21.Tab01.tabp01);
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("91");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy.MM.dd ddd");
            obj.set_editformat("yyyy.MM.dd ddd");
            obj.getSetter("objNm").set("발주일자");
            obj = new Calendar("cal_inspDay", "absolute", "845", "107", "125", "24", null, null, this.div_21.Tab01.tabp01);
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("92");
            obj.set_dateformat("yyyy.MM.dd ddd");
            obj.set_editformat("yyyy.MM.dd ddd");
            obj.getSetter("objNm").set("검수완료일자");
            obj = new CheckBox("chk_altPreMmGr", "absolute", "984", "108", "131", "21", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("93");
            obj.set_text("전월말일자 입고");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.getSetter("objNm").set("전월말일자 입고");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("st_CrtrNm00", "absolute", "0", "19", "115", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("94");
            obj.set_text("검수의견");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("objNm").set("작성자");
            obj.getSetter("lbcd").set("");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Combo("cbo_cdInspOpnn", "absolute", "114", "19", "261", "24", null, null, this.div_21.Tab01.tabp01);
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            var cbo_cdInspOpnn_innerdataset = new Dataset("cbo_cdInspOpnn_innerdataset", this.div_21.Tab01.tabp01.cbo_cdInspOpnn);
            cbo_cdInspOpnn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">특이사항 없음</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">품질불량</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">납기지연</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">포장불량</Col></Row><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">서비스 불만족</Col></Row></Rows>");
            obj.set_innerdataset(cbo_cdInspOpnn_innerdataset);
            obj.set_taborder("95");
            obj.set_innerdataset("ds_cdDL20");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("검수의견");

            obj = new Div("div_3", "absolute", "0", "285", null, "24", "15", null, this);
            obj.set_taborder("3");
            obj.getSetter("objNm").set("DIV-품목 타이틀");
            this.addChild(obj.name, obj);
            obj = new Button("btn_opItem", "absolute", "0", "0", "73", "24", null, null, this.div_3);
            obj.set_taborder("36");
            obj.set_text("품목");
            obj.set_cssclass("btn_WF_DivClose");
            obj.getSetter("objNm").set("접기펼치기 버튼");
            obj.getSetter("lbcd").set("");
            this.div_3.addChild(obj.name, obj);
            obj = new Button("btn_sugar", "absolute", null, "1", "87", "23", "1", null, this.div_3);
            obj.set_taborder("37");
            obj.set_text("측정당도입력");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_visible("false");
            obj.getSetter("objNm").set("측정당도입력");
            this.div_3.addChild(obj.name, obj);

            obj = new Div("div_4", "absolute", "0", "568", null, "24", "15", null, this);
            obj.set_taborder("4");
            obj.getSetter("objNm").set("DIV-품목 상세-탭 헤더");
            this.addChild(obj.name, obj);
            obj = new Button("btn_opItemDetail00", "absolute", "0", "0", "142", "24", null, null, this.div_4);
            obj.set_taborder("0");
            obj.set_text("품목 상세정보");
            obj.set_cssclass("btn_WF_DivClose");
            obj.getSetter("objNm").set("접기펼치기 버튼");
            this.div_4.addChild(obj.name, obj);

            obj = new Div("div_41", "absolute", "0", "597", null, "259", "15", null, this);
            obj.set_taborder("5");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("DIV-품목 상세 - 텝 입력");
            this.addChild(obj.name, obj);
            obj = new Tab("Tab01", "absolute", "0", "34", null, "189", "0", null, this.div_41);
            obj.set_taborder("5");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.getSetter("objNm").set("입력탭");
            this.div_41.addChild(obj.name, obj);
            obj = new Tabpage("tabp04", this.div_41.Tab01);
            obj.set_text("품목 특이사항");
            this.div_41.Tab01.addChild(obj.name, obj);
            obj = new TextArea("txt_itemTxt", "absolute", "0", "10", null, "131", "0", null, this.div_41.Tab01.tabp04);
            obj.set_taborder("0");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("품목텍스트");
            this.div_41.Tab01.tabp04.addChild(obj.name, obj);
            obj = new Tabpage("tabpage5", this.div_41.Tab01);
            obj.set_text("유효기간 관리");
            obj.getSetter("objNm").set("유효기간 관리");
            this.div_41.Tab01.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "0%", "39", null, null, "0%", "0", this.div_41.Tab01.tabpage5);
            obj.set_taborder("3");
            obj.set_binddataset("ds_dlvItemExp");
            obj.set_selecttype("cell");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"MMODE\"><Columns><Column size=\"40\"/><Column size=\"512\"/><Column size=\"655\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"수량\"/><Cell col=\"2\" text=\"유효일자\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\" editautoselect=\"true\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"text\" style=\"align:right;\" text=\"bind:DLV_QTY\" mask=\"#,##0.00\" editautoselect=\"true\" editdisplay=\"edit\" tooltiptext=\"bind:DLV_QTY\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"date\" text=\"bind:EFF_DAY\" mask=\"yyyy.MM.dd\" editautoselect=\"true\" editdisplay=\"display\" combodisplay=\"display\" calendardisplay=\"edit\" calendardisplaynulltype=\"none\" tooltiptext=\"bind:EFF_DAY\"/></Band></Format><Format id=\"VMODE\"><Columns><Column size=\"512\"/><Column size=\"655\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"수량\"/><Cell col=\"1\" text=\"유효일자\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" style=\"align:right;\" text=\"bind:DLV_QTY\" mask=\"#,##0.00\" editdisplay=\"edit\" tooltiptext=\"bind:DLV_QTY\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:EFF_DAY\" mask=\"yyyy.MM.dd\" editdisplay=\"display\" combodisplay=\"display\" calendardisplay=\"edit\" calendardisplaynulltype=\"none\" tooltiptext=\"bind:EFF_DAY\"/></Band></Format></Formats>");
            this.div_41.Tab01.tabpage5.addChild(obj.name, obj);
            obj = new Button("btn_dlvItemDel", "absolute", null, "10", "60", "24", "2", null, this.div_41.Tab01.tabpage5);
            obj.set_taborder("4");
            obj.set_text(" 삭제");
            obj.set_cssclass("btn_WF_Delete");
            obj.set_visible("false");
            obj.getSetter("objNm").set("품목삭제버튼");
            obj.getSetter("lbcd").set("");
            this.div_41.Tab01.tabpage5.addChild(obj.name, obj);
            obj = new Button("btn_dlvItemAdd", "absolute", null, "10", "60", "24", "64", null, this.div_41.Tab01.tabpage5);
            obj.set_taborder("5");
            obj.set_text(" 추가");
            obj.set_cssclass("btn_WF_Add");
            obj.set_visible("false");
            obj.getSetter("objNm").set("품목삭제버튼");
            obj.getSetter("lbcd").set("");
            this.div_41.Tab01.tabpage5.addChild(obj.name, obj);
            obj = new Button("btn_dlvItemRowDown", "absolute", "755", "0", "24", "21", null, null, this.div_41);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_ListDown");
            obj.getSetter("objNm").set("down");
            this.div_41.addChild(obj.name, obj);
            obj = new Button("btn_dlvItemRowUp", "absolute", "729", "0", "24", "24", null, null, this.div_41);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_ListUp");
            obj.getSetter("objNm").set("up");
            this.div_41.addChild(obj.name, obj);
            obj = new Combo("cbo_itemChg", "absolute", "102", "0", "622", "24", null, null, this.div_41);
            this.div_41.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_dlvItem");
            obj.set_codecolumn("DLV_ITEM_ID");
            obj.set_datacolumn("MTRL_NM");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("발주품목변경");
            obj = new Edit("ed_itemNo", "absolute", "0", "0", "100", "24", null, null, this.div_41);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_cssclass("input_point");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("objNm").set("품목코드");
            this.div_41.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "1.07%", "551", null, "20", "87.5%", null, this);
            obj.set_taborder("6");
            obj.set_text("h19");
            obj.set_visible("false");
            obj.style.set_background("#ff7272ff");
            this.addChild(obj.name, obj);

            obj = new Div("div_31", "absolute", "0", "314", null, "254", "15", null, this);
            obj.set_taborder("7");
            obj.getSetter("objNm").set("DIV-품목 상세");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_dlvItem", "absolute", "0", "0", null, "210", "0", null, this.div_31);
            obj.set_taborder("4");
            obj.set_binddataset("ds_dlvItem");
            obj.set_autoenter("select");
            obj.set_selecttype("cell");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj.getSetter("objNm").set("품목 그리드");
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
            obj._setContents("<Formats><Format id=\"MMODE\"><Columns><Column size=\"82\"/><Column size=\"349\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"73\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"품목코드\"/><Cell col=\"1\" text=\"품명\"/><Cell col=\"2\" text=\"입고창고\"/><Cell col=\"3\" text=\"요청\"/><Cell col=\"4\" text=\"납품완료\"/><Cell col=\"5\" text=\"검수요청\"/><Cell col=\"6\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;검수수량\"/><Cell col=\"7\" text=\"단위\"/><Cell col=\"8\" text=\"단가\"/><Cell col=\"9\" text=\"금액\"/><Cell col=\"10\" text=\"납품완료\"/></Band><Band id=\"body\" style=\"cellpadding:2 2 2 2 ;\"><Cell displaytype=\"normal\" edittype=\"none\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:MTRL_CD\" editautoselect=\"true\" editdisplay=\"edit\" tooltiptext=\"bind:MTRL_CD\"/><Cell col=\"1\" edittype=\"none\" style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:MTRL_NM\" editdisplay=\"edit\" expandshow=\"show\" expandsize=\"24\" expandimage=\"bind:IMG_TYPE\" tooltiptext=\"bind:MTRL_NM\"/><Cell col=\"2\" style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:SL_NM\" tooltiptext=\"bind:SL_NM\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:QTY\" mask=\"#,##0.00\" editautoselect=\"true\" editdisplay=\"edit\" tooltiptext=\"bind:QTY\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:TOT_DLV_QTY\" mask=\"#,##0.00\" tooltiptext=\"bind:TOT_DLV_QTY\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:DLV_PLAN_QTY\" mask=\"#,##0.00\" tooltiptext=\"bind:DLV_PLAN_QTY\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:DLV_QTY\" mask=\"#,##0.00\" editautoselect=\"true\" editdisplay=\"edit\" tooltiptext=\"bind:DLV_QTY\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"none\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:CD_UNIT_NM\" tooltiptext=\"bind:CD_UNIT_NM\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:UNT_PRICE\" mask=\"#,##0.00\" editautoselect=\"true\" editdisplay=\"edit\" tooltiptext=\"bind:UNT_PRICE\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:DLV_PLAN_AMT\" mask=\"#,##0\" editautoselect=\"true\" tooltiptext=\"bind:DLV_PLAN_AMT\"/><Cell col=\"10\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ALT_DLV_CMPLT\" editautoselect=\"true\" suppressalign=\"first\"/></Band></Format><Format id=\"VMODE\"><Columns><Column size=\"82\"/><Column size=\"349\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"73\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"품목코드\"/><Cell col=\"1\" text=\"품명\"/><Cell col=\"2\" text=\"입고창고\"/><Cell col=\"3\" text=\"요청\"/><Cell col=\"4\" text=\"납품완료\"/><Cell col=\"5\" text=\"검수요청\"/><Cell col=\"6\" text=\"검수수량\"/><Cell col=\"7\" text=\"단위\"/><Cell col=\"8\" text=\"단가\"/><Cell col=\"9\" text=\"금액\"/><Cell col=\"10\" text=\"납품완료\"/></Band><Band id=\"body\" style=\"cellpadding:2 2 2 2 ;\"><Cell displaytype=\"normal\" edittype=\"none\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:MTRL_CD\" editautoselect=\"true\" editdisplay=\"edit\" tooltiptext=\"bind:MTRL_CD\"/><Cell col=\"1\" edittype=\"none\" style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:MTRL_NM\" editdisplay=\"edit\" expandshow=\"show\" expandsize=\"24\" expandimage=\"bind:IMG_TYPE\" tooltiptext=\"bind:MTRL_NM\"/><Cell col=\"2\" style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:SL_NM\" tooltiptext=\"bind:SL_NM\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:QTY\" mask=\"#,##0.00\" editautoselect=\"true\" editdisplay=\"edit\" tooltiptext=\"bind:QTY\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:TOT_DLV_QTY\" mask=\"#,##0.00\" tooltiptext=\"bind:TOT_DLV_QTY\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:DLV_PLAN_QTY\" mask=\"#,##0.00\" tooltiptext=\"bind:DLV_PLAN_QTY\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:DLV_QTY\" mask=\"#,##0.00\" editdisplay=\"edit\" tooltiptext=\"bind:DLV_QTY\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"none\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:CD_UNIT_NM\" tooltiptext=\"bind:CD_UNIT_NM\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:UNT_PRICE\" mask=\"#,##0.00\" editautoselect=\"true\" editdisplay=\"edit\" tooltiptext=\"bind:UNT_PRICE\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:AMT\" mask=\"#,##0\" editautoselect=\"true\" tooltiptext=\"bind:AMT\"/><Cell col=\"10\" displaytype=\"checkbox\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:ALT_DLV_CMPLT\" expr=\"ALT_DLV_CMPLT=='Y'||ALT_DLV_CMPLT=='1' ? 1 : 0\" suppressalign=\"first\"/></Band></Format></Formats>");
            this.div_31.addChild(obj.name, obj);

            obj = new Div("div_51", "absolute", "0", "872", null, "144", "20", null, this);
            obj.set_taborder("8");
            obj.set_visible("false");
            obj.getSetter("objNm").set("DIV-품목 상세");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_poPay", "absolute", "0", "0", null, "142", "0", null, this.div_51);
            obj.set_taborder("0");
            obj.set_binddataset("ds_poPay");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"MMODE\"><Columns><Column size=\"80\"/><Column size=\"117\"/><Column size=\"227\"/><Column size=\"154\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"회차\"/><Cell col=\"1\" text=\"지급율(%)\"/><Cell col=\"2\" text=\"지급금액\"/><Cell col=\"3\" text=\"지급조건\"/></Band><Band id=\"body\"><Cell text=\"bind:ODR\"/><Cell col=\"1\" text=\"bind:PYMT_RT\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PYMT_PLN_AMT\" mask=\"#,##0\" editdisplay=\"edit\"/><Cell col=\"3\" style=\"align: ;\" text=\"bind:RMARK\" calendardisplay=\"edit\" calendardisplaynulltype=\"none\"/></Band></Format><Format id=\"VMODE\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"886\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"회차\"/><Cell col=\"1\" text=\"지급율(%)\"/><Cell col=\"2\" text=\"지급금액\"/><Cell col=\"3\" text=\"지급조건\"/></Band><Band id=\"body\"><Cell text=\"bind:ODR\" tooltiptext=\"bind:ODR\"/><Cell col=\"1\" text=\"bind:PYMT_RT\" tooltiptext=\"bind:PYMT_RT\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PYMT_PLN_AMT\" mask=\"#,##0\" editdisplay=\"edit\" tooltiptext=\"bind:PYMT_PLN_AMT\"/><Cell col=\"3\" style=\"align: ;\" text=\"bind:RMARK\" calendardisplay=\"edit\" tooltiptext=\"bind:RMARK\"/></Band></Format></Formats>");
            this.div_51.addChild(obj.name, obj);

            obj = new Div("div_5", "absolute", "0", "844", null, "24", "20", null, this);
            obj.set_taborder("9");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Button("btn_opItemDetail", "absolute", "0", "0", "72", "22", null, null, this.div_5);
            obj.set_taborder("0");
            obj.set_text("지급차수");
            obj.set_cssclass("btn_WF_DivClose");
            this.div_5.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_1,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_cssclass("div_WF_SearchBg3");
            		p.getSetter("objNm").set("컨트롤 박스");

            	}
            );
            this.div_1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.div_2,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.getSetter("objNm").set("DIV-헤더 타이틀");

            	}
            );
            this.div_2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_21.Tab01.tabp01,
            	//-- Layout function
            	function(p) {
            		p.set_text("기본정보");
            		p.set_scrollbars("none");
            		p.getSetter("objNm").set("기본정보");
            		p.getSetter("lbcd").set("");

            	}
            );
            this.div_21.Tab01.tabp01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1042, 172, this.div_21,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.set_scrollbars("none");
            		p.getSetter("objNm").set("DIV-헤더 상세");

            	}
            );
            this.div_21.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.div_3,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.getSetter("objNm").set("DIV-품목 타이틀");

            	}
            );
            this.div_3.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.div_4,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.getSetter("objNm").set("DIV-품목 상세-탭 헤더");

            	}
            );
            this.div_4.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_41.Tab01.tabp04,
            	//-- Layout function
            	function(p) {
            		p.set_text("품목 특이사항");

            	}
            );
            this.div_41.Tab01.tabp04.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_41.Tab01.tabpage5,
            	//-- Layout function
            	function(p) {
            		p.set_text("유효기간 관리");
            		p.getSetter("objNm").set("유효기간 관리");

            	}
            );
            this.div_41.Tab01.tabpage5.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 259, this.div_41,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.set_scrollbars("none");
            		p.getSetter("objNm").set("DIV-품목 상세 - 텝 입력");

            	}
            );
            this.div_41.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 254, this.div_31,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("7");
            		p.getSetter("objNm").set("DIV-품목 상세");

            	}
            );
            this.div_31.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 144, this.div_51,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("8");
            		p.set_visible("false");
            		p.getSetter("objNm").set("DIV-품목 상세");

            	}
            );
            this.div_51.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.div_5,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("9");
            		p.set_visible("false");

            	}
            );
            this.div_5.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("검수상세");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item9","div_1.edt_docNo","value","ds_dlv","DLV_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","div_1.cb_cdDocCtgr","value","ds_dlv","CD_DOC_CTGR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","div_21.Tab01.tabp01.cbo_cdDlvStts","value","ds_dlv","CD_DLV_STTS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_21.Tab01.tabp01.edt_ptnrId","value","ds_dlv","PTNR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_21.Tab01.tabp01.edt_ptnrNm","value","ds_dlv","PTNR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","div_21.Tab01.tabp01.edt_poNo","value","ds_dlv","PO_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","div_21.Tab01.tabp01.mae_DlvAmt","value","ds_dlv","DLV_AMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","div_21.Tab01.tabp01.me_dlvTax","value","ds_dlv","VAT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","div_21.Tab01.tabp05.edt_inspChrgrId","value","ds_dlv","INSP_CHRGR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","div_21.Tab01.tabp05.edt_inspChrgrNm","value","ds_dlv","INSP_CHRGR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","div_21.Tab01.tabp05.edt_tel","value","ds_dlv","TEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","div_21.Tab01.tabp05.edt_email","value","ds_dlv","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","div_21.Tab01.tabp05.edt_fax","value","ds_dlv","FAX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","div_21.Tab01.tabp06.ta_rmark","value","ds_dlv","RMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","div_21.Tab01.tabp01.cbo_cdDlvCrnc","value","ds_dlv","CD_CRNC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item58","div_21.Tab01.tabp01.cal_poDay","value","ds_dlv","DLV_PLAN_DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","div_21.Tab01.tabp01.cal_inspDay","value","ds_dlv","INSP_DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","div_21.Tab01.tabp01.cbo_cdInspOpnn","value","ds_dlv","CD_INSP_OPNN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","div_21.Tab01.tabp01.chk_altPreMmGr","value","ds_dlv","ALT_PRE_MM_GR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","div_41.Tab01.tabp01.edt_srcGrp","value","ds_dlvItem","SRC_GRP_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","div_41.Tab01.tabp01.edt_srcGrpNm","value","ds_dlvItem","SRC_GRP_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","div_41.Tab01.tabp01.edt_mtrlCd","value","ds_dlvItem","MTRL_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","div_41.Tab01.tabp01.edt_mtrlNm","value","ds_dlvItem","MTRL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","div_41.Tab01.tabp01.me_qty","value","ds_dlvItem","DLV_PLAN_QTY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","div_41.Tab01.tabp01.cbo_unit","value","ds_dlvItem","CD_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","div_41.Tab01.tabp01.me_untPrice","value","ds_dlvItem","UNT_PRICE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","div_41.Tab01.tabp01.me_amt","value","ds_dlvItem","DLV_PLAN_AMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","div_41.ed_itemNo","value","ds_dlvItem","ITM_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","div_41.cbo_itemChg","text","ds_dlvItem","MTRL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","div_41.Tab01.tabp01.chk_altDlvCmplt","value","ds_dlvItem","ALT_DLV_CMPLT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","div_41.Tab01.tabp01.me_dlvOvrRt","value","ds_dlvItem","DLV_OVR_RT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item39","div_41.Tab01.tabp03.edt_ptnrId","value","ds_poItem","PTNR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item40","div_41.Tab01.tabp03.edt_ptnrNm","value","ds_poItem","PTNR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","div_41.Tab01.tabp03.edt_zipCd","value","ds_poItem","ZIP_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item42","div_41.Tab01.tabp03.edt_addr1","value","ds_poItem","ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item43","div_41.Tab01.tabp03.edt_addr2","value","ds_poItem","DTL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item44","div_41.Tab01.tabp03.edt_dlvContent","value","ds_poItem","FWD_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item45","div_41.Tab01.tabp04.txt_itemTxt","value","ds_dlvItem","RMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("BDlvDetail.xfdl", function(exports) {
        /**
         * @파일명       	: SDlvList.xfdl
         * @생성자       	: 이준호
         * @생성일자     	: 2019. 04. 26
         * @설명			: 납품서 작성
         * @최종수정자		: 이준호
         * @최종수정일자	: 2019. 04. 26
        */
        /**
          * @함수명	: fnFormOninit
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.InitEventInfo(이벤트변수)
          * @desc     	: 화면이 최초 열렸을때 실행되는 이벤트.
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
        					 {code:"CM10", sSelectType:"S"} // 문서유형					 
        					,{code:"CM20", sSelectType:"S"} // 공장
        					,{code:"CM11", sSelectType:"S"} // 단위
        					,{code:"CM15", sSelectType:"S"} // 통화
        					,{code:"DL10", sSelectType:"S"} // 납품서상태
        					,{code:"DL20", sSelectType:"[특이사항 없음]"} // 검수의견
        				];
        	gfnGetCode(this, param);
        }
        /**
          * @함수명	: fnFormOnload
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.LoadEventInfo(이벤트변수)
          * @desc     	: 화면이 로딩 될때마다 실행되는 이벤트 
          */
        this.fnFormOnload = function(obj,e)
        {
        	//gfnSetGrdFunc(this.divivViewCompBody00.SDlvList, this.divViewCompBody00.divPaging, this);
        	
        	this.ds_dlv.addRow();
        	this.ds_dlv.setColumn(0, "DLV_NO"		, gfnGetTmprData("DLV_NO"));
        	this.ds_dlv.setColumn(0, "COREXP_KIDS"	, gfnGetTmprData("COREXP_KIDS"));
        	
            this.fnSearch();  
        }

        

        /**
        	@function	fn_preSearch()
        	@desc   	조회 전 처리
        */
        this.fn_preSearch = function()
        {
        	return true;
        }

        /**
        	@function	fn_search()
        	@desc   	조회 프로세스
        */
        this.fnSearch = function()
        {
        	if(!this.fn_preSearch()) return false;
        	 
        	var sSvcID = "readDlvDetail";
        	var sController = "epro.dlv.service.BDlvService.readDlvDetail";
        	var sInDatasets = "in_ds=ds_dlv";
        	var sOutDatasets = "ds_dlv=ds_dlv ds_dlvItem=ds_dlvItem ds_dlvItemExp=ds_dlvItemExp ds_poPay=ds_poPay";
        	var sCallbackFunc = "fnTrCallBack";
        	
        	//var	oPaging = [
        		//			{inDs:this.dsCondition, grid:this.divViewCompBody00.grdList, divPaging:this.divViewCompBody00.divPaging}
        		//		];
        				
           gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
        	@function	Fold_onclick()
        	@desc   	폴더접기
        */
        this.fn_fold_onclick = function(obj,e)
        {
        	this.gfn_divFold(obj);
        }

        /**
        	@function	fn_commAdd()
        	@desc   	(공통버튼)신규
        */
        this.fn_commAdd = function()
        {
        	return true;
        }

        /**
        	@function	fn_commAdd()
        	@desc   	(공통버튼)삭제
        */
        this.fn_commDelete = function()
        {

        }

        /**
        	@function	fn_preSave()
        	@param		type {String} [Y:임시저장, N:검수완료]
        	@desc   	저장 전 처리
        */
        this.fn_preSave = function(type)
        {			
        	if(!this.gfn_validate(null, type, "")) //확인 클릭 : this.fn_commSave(true) 호출됨.
        	{		
        		return false;
        	}
        	
        	var totQty = 0;
        	var expQty = 0;
        	
        	for(var i=0; i<this.ds_dlvItem.getRowCount(); i++)
        	{
        		//측정당도 입력했는지 체크...
        		if(type == "N")
        		{
        			if(this.ds_dlvItem.getColumn(i,"ALT_SC") == 'Y' && this.ds_dlvItem.getColumn(i,"SUGAR") <= 0)
        			{
        				this.gfn_alert("측정당도를 입력하지 않았습니다.\n측정당도입력 팝업에서 입력하십시오.");
        				this.div_3_btn_sugar_onclick(); //측정당도입력 팝업
        				return false;
        			}
        		}		

        		//반품발주
        		if(this.ds_dlv.getColumn(0,"CD_PO_CTGR") == "PO13RPO")
        		{			
        			if(this.ds_dlvItem.getColumn(i,"TOT_DLV_QTY") <= this.ds_dlvItem.getColumn(i,"QTY"))
        			{
        				this.gfn_alert("이미 완료 되어 있습니다. 반려 처리하십시오.");
        				return false;
        			}
        		}
        		
        		//구매발주
        		else if(this.ds_dlv.getColumn(0,"CD_PO_CTGR") == "PO13NPO")
        		{
        			if(this.ds_dlvItem.getColumn(i,"TOT_DLV_QTY") >= this.ds_dlvItem.getColumn(i,"QTY"))
        			{
        				this.gfn_alert("이미 완료 되어 있습니다. 반려 처리하십시오.");
        				return false;
        			}
        		}		
        		
        		//반품발주이면...
        		if(this.ds_dlv.getColumn(0, "CD_PO_CTGR")=="PO13RPO") continue;
        		
        		if(this.ds_dlvItem.getColumn(i,"DLV_QTY") > this.ds_dlvItem.getColumn(i,"MAX_QTY"))
        		{
        			this.ds_dlvItem.set_rowposition(i);
        			this.gfn_alert("품목 ("+(i+1)+"번째 Line) " + "요청된 검수 수량을 초과하였습니다.");
        			return false;
        		}
        		
        		//유효기간관리 여부
        		if("Y"==this.ds_dlvItem.getColumn(i,"ALT_DDATE_MGT"))
        		{			
        			if(type=="Y")
        			{
        				this.ds_dlvItemExp.filter("");
        				var nCnt = this.ds_dlvItemExp.getCaseCount("PO_ITEM_ID=='"+this.ds_dlvItem.getColumn(i,"PO_ITEM_ID")+"' && EFF_DAY==''");		
        				if(nCnt > 0)
        				{
        					this.div_41.Tab01.set_tabindex(1);
        					this.ds_dlvItem.set_rowposition(i);
        					this.ds_dlvItemExp.filter("PO_ITEM_ID=='" + this.ds_dlvItem.getColumn(this.ds_dlvItem.rowposition, "PO_ITEM_ID") + "'");
        					this.gfn_alert("품목 ("+(i+1)+"번째 Line) " + "유효기간관리의 유효일자는 필수 입력입니다.");
        					return false;
        				}
        			}

        			this.ds_dlvItemExp.filter("");
        			var nCnt = this.ds_dlvItemExp.getCaseCount("PO_ITEM_ID=='"+this.ds_dlvItem.getColumn(i,"PO_ITEM_ID")+"' && EFF_DAY<"+Number(this.gfn_today()));
        			if(nCnt > 0)
        			{
        				this.div_41.Tab01.set_tabindex(1);
        				this.ds_dlvItem.set_rowposition(i);
        				this.ds_dlvItemExp.filter("PO_ITEM_ID=='" + this.ds_dlvItem.getColumn(this.ds_dlvItem.rowposition, "PO_ITEM_ID") + "'");
        				this.gfn_alert("품목 ("+(i+1)+"번째 Line) " + "유효기간관리의 유효일자는 오늘 이후로 가능합니다.");
        				return false;
        			}

        			totQty = this.ds_dlvItem.getColumn(i,"DLV_QTY");	
        			this.ds_dlvItemExp.set_enableevent(false);
        			this.ds_dlvItemExp.filter("");
        			expQty = this.ds_dlvItemExp.getCaseSum("PO_ITEM_ID=='"+this.ds_dlvItem.getColumn(i,"PO_ITEM_ID")+"'", "DLV_QTY");
        			this.ds_dlvItemExp.filter("PO_ITEM_ID=='" + this.ds_dlvItem.getColumn(this.ds_dlvItem.rowposition, "PO_ITEM_ID") + "'");
        			this.ds_dlvItemExp.set_enableevent(true);
        						
        			if(expQty > totQty)
        			{
        				this.div_41.Tab01.set_tabindex(1);
        				this.ds_dlvItem.set_rowposition(i);
        				this.gfn_alert("품목 ("+(i+1)+"번째 Line) " + "유효기간관리의 수량에 검수 수량보다 많은 수량이 입력되었습니다.");
        				return false;
        			}		
        						
        			if(expQty < totQty)
        			{
        				this.div_41.Tab01.set_tabindex(1);
        				this.ds_dlvItem.set_rowposition(i);
        				this.gfn_alert("품목 ("+(i+1)+"번째 Line) " + "유효기간관리의 수량에 검수 수량보다 적은 수량이 입력되었습니다.");
        				return false;
        			}
        		}
        	}

        	return true;
        }

        /**
        	@function	fn_commSave()
        	@desc   	(공통버튼)저장 프로세스
        */
        this.fn_commSave = function()
        {
        	if(!this.fn_preSave("Y")) return false;
        	if(!this.gfn_confirm("저장 하시겠습니까?")) return false;
        	this.fv_appPopCall = false;
        		
        	var sSvcID = "BDlv_Save";
        	var sController = "BDlv_Save.do";
        	var sInDatasets = "in_dlv=ds_dlv:A in_dlvItem=ds_dlvItem:A in_dlvItemExp=ds_dlvItemExp:A";
        	var sOutDatasets = "ds_dlv=in_dlv";
        	var sCallbackFunc = "fn_trCallBack";
        	this.gfn_fileSaveTran(sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
        	@function	div_1_btn_CfmDlv_onclick()
        	@desc   	검수완료
        */
        this.div_1_btn_CfmDlv_onclick = function(obj,e)
        {
        	if(!this.fn_preSave("N")) return false;
        	if(!this.gfn_confirm("검수완료 하시겠습니까?")) return false;
        	this.fv_appPopCall = false;

        	var sSvcID = "BDlv_Clo";
        	var sController = "BDlv_Clo.do";
        	var sInDatasets = "in_dlv=ds_dlv:A in_dlvItem=ds_dlvItem:A in_dlvItemExp=ds_dlvItemExp:A";
        	var sOutDatasets = "ds_dlv=in_dlv";
        	var sCallbackFunc = "fn_trCallBack";
        	this.gfn_fileSaveTran(sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
        	@function	div_1_btn_RejectDlv_onclick()
        	@desc   	반려
        */
        this.div_1_btn_RejectDlv_onclick = function(obj,e)
        {
        	//반려사유 팝업 호출
        	var sArg = { };	
        	this.gfn_dialog("PopupInspRtnRmark", "DLVB::PDLVB100P03.xfdl", sArg, "fn_popCallBack");
        }

        /**
        	@function	btn_commCancel()
        	@desc   	(공통버튼)취소 프로세스
        */
        this.btn_commCancel = function()
        {
        	return true;
        }

        /**
        	@function	fn_commClose()
        	@desc   	(공통버튼)닫기
        */
        this.fn_commClose = function()
        {
        	return true;
        }

        /**
        	@function	fn_trCallBack()
        	@desc   	Transaction Callback함수
        */
        this.fn_trCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	//strSvcID 가 read:fn_trCallBack 게 넘어옴
        	if(strErrCd < 0)
        	{
        		return;
        	}
        	
        	switch(strSvcID)
        	{
        		case "BDlv_Read" : 	
        		
        			//FILE_JOB_1 : 데이터 조회 이후에 파일 정보를 조회하기 위해 동기화 한다.
        			this.gfn_fileCompInit(this.div_21.Tab01.tabp07, this.div_21.Tab01.tabpage5);
        	
        			//FILE_JOB_4 : 파일 부모 데이터셋에 시퀀스 추가			
        			this.gfn_fileDsSeq(this.ds_dlv);
        			
        			//FILE_JOB_5 : 저장 후 재조회를 마치고 나서 파일 컴포넌트에 파일정보를 재설정 한다.
        			this.fn_getCompFileList1();
        			this.fn_getCompFileList2();
        			
        			//파라미터를 받은 이후에는 파라미터를 를 초기화 해준다.
        			this.gfn_clearTmprData(); 
        			
        			//유효기간관리 버튼이 안보이는 버그가 있어 탭페이지 클릭 유도를 위해 세팅.
        			this.div_41.Tab01.set_tabindex(0);
        			
        			//지급차수 그리드 visible
        			if(this.ds_dlv.getColumn(0,"INT_DLV_TYPE") == "PAY" && this.ds_poPay.getRowCount() > 1) //차수별 검수
        			{
        				this.div_5.setOffsetTop(this.div_21.getOffsetBottom());
        				this.div_51.setOffsetTop(this.div_5.getOffsetBottom());
        				
        				this.div_3.setOffsetTop(this.div_51.getOffsetBottom()+20);
        				this.div_31.setOffsetTop(this.div_3.getOffsetBottom());
        				
        				this.div_4.setOffsetTop(this.div_31.getOffsetBottom()+20);
        				this.div_41.setOffsetTop(this.div_4.getOffsetBottom());
        				
        				this.div_5.set_visible(true);
        				this.div_51.set_visible(true);
        				
        				this.resetScroll();
        			}			
        						
        			if("DL10SND" == this.ds_dlv.getColumn(0,"CD_DLV_STTS"))
        			{	
        				this.gfn_objReSet(this, "U");

        				//저장 기능 안쓴다고 하여 버튼 안보이게 함. 저장 로직은 살아있음. 20170202 mhhan
        				//this.parent.div_commBtns.btn_commSave.set_visible(true);						
        				this.div_1.btn_cfm.set_visible(true);
        				this.gfn_btnRange(this.div_1.btn_cfm);
        				
        				//당도측정할 품목이 존재하면...
        				if(this.ds_dlv.getColumn(0, "IS_EXISTS_SUGAR") == "Y")
        				{
        					this.div_3.btn_sugar.set_visible(true);
        				}
        				
        				//구매발주
        				if(this.ds_dlv.getColumn(0, "CD_PO_CTGR") == "PO13NPO")
        				{
        					this.div_31.grd_dlvItem.setFormat("MMODE");
        					this.div_41.Tab01.tabpage5.Grid00.setFormat("MMODE");
        				}
        				
        				//반품발주
        				else if(this.ds_dlv.getColumn(0, "CD_PO_CTGR") == "PO13RPO")
        				{
        					this.div_31.grd_dlvItem.setFormat("VMODE");
        					this.div_41.Tab01.tabpage5.Grid00.setFormat("VMODE");
        				}
        			}
        			else
        			{
        				this.gfn_objReSet(this, "R");					
        				this.div_31.grd_dlvItem.setFormat("VMODE");
        				this.div_41.Tab01.tabpage5.Grid00.setFormat("VMODE");
        				//저장 기능 안쓴다고 하여 버튼 안보이게 함. 저장 로직은 살아있음. 20170202 mhhan
        				//this.parent.div_commBtns.btn_commSave.set_visible(false);
        			}		
        			this.gfn_btnRange(this.parent.div_commBtns.btn_commInit);
        			
        		break;
        				
        		case "BDlv_Clo" : 
        		case "BDlv_Rtn" :
        			if(strErrMsg != "")
        			{
        				this.gfn_alert(strErrMsg);
        				this.gfn_setTmprData("DLV_NO"		, this.ds_dlv.getColumn(0, "DLV_NO"));
        				this.gfn_setTmprData("COREXP_KIDS"	, this.ds_dlv.getColumn(0, "COREXP_KIDS"));				
        				this.fn_search();
        			}
        		break;
        		
        		case "BDlv_Save" :
        		
        			this.gfn_setTmprData("DLV_NO"		, this.ds_dlv.getColumn(0, "DLV_NO"));
        			this.gfn_setTmprData("COREXP_KIDS"	, this.ds_dlv.getColumn(0, "COREXP_KIDS"));		
        			this.fn_search();	

        			if(this.fv_appPopCall == true)
        			{
        				// 프로토타입에서 사용하던 결재. 로직변경(개별 결재에서 검수마감품의로 변경) 및 그룹웨어 결재사용으로 아래 코드는 사용안함.
        // 				var doc_id = this.ds_dlv.getColumn(0, "APP_DOC_ID");
        // 				var appTtl = this.ds_dlv.getColumn(0, "TTL");
        // 				var app_dlv			= this.ds_dlv.saveXML();       
        // 				var app_dlvItem		= this.ds_dlvItem.saveXML();				
        // 				var app_dlvItemExp	= this.ds_dlvItemExp.saveXML();
        // 				var app_poPay		= this.ds_poPay.saveXML();
        // 								
        // 				var app_doc = 	app_dlv+"▩"+
        // 								app_dlvItem+"▩"+
        // 								app_dlvItemExp+"▩"+
        // 								app_poPay;
        // 
        // 				var sArg = { 
        // 								agv_doc_id			: this.ds_dlv.getColumn(0, "APP_DOC_ID")
        // 								,agv_ttl			: "[검수] " + appTtl
        // 								,agv_ref_key_1 		: this.ds_dlv.getColumn(0, "DLV_NO")
        // 								,agv_app_doc		: app_doc
        // 								,agv_aprv_doc_ctgr	: "AP11DLV"
        // 							};
        // 				this.gfn_dialog("PopupAppReq", "APPB::PAPPB100P01.xfdl",sArg, "fn_popCallBack");
        			}
        			else
        			{
        				if(strErrMsg != "") this.gfn_alert(strErrMsg);
        			}
        		break;
        		
        		default:
        		break;	
        	}
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
        		if(sPopupId == "PopupInspRtnRmark")
        		{
        			this.ds_return.loadXML(rtn);
        			this.ds_dlv.setColumn(0, "INSP_RTN_RMARK", this.ds_return.getColumn(0, "INSP_RTN_RMARK"));			
        		
        			var sSvcID = "BDlv_Rtn";
        			var sController = "BDlv_Rtn.do";
        			var sInDatasets = "in_dlv=ds_dlv:A";
        			var sOutDatasets = "ds_dlv=in_dlv";
        			var sCallbackFunc = "fn_trCallBack";
        			this.gfn_fileSaveTran(sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        		}
        		else if(sPopupId =="PopupAppReq")	// 결재요청 팝업
        		{
        			this.ds_return.loadXML(rtn);
        			var isSucc = this.ds_return.getColumn(0, "IS_SUCCESS");
        			
        			if(isSucc == "Y") this.fn_search();
        		}
        		else if(sPopupId =="PopupSugarInfo")	// 당도입력 팝업
        		{
        			this.ds_return.loadXML(rtn);
        			
        			this.ds_dlvItem.set_enableevent(false);
        			for(var i=0; i<this.ds_return.getRowCount(); i++)
        			{
        				var fRow = this.ds_dlvItem.findRow("DLV_ITEM_ID", this.ds_return.getColumn(i, "DLV_ITEM_ID"));
        				
        				if(fRow > -1)
        				{
        					this.ds_dlvItem.setColumn(fRow, "SUGAR", this.ds_return.getColumn(i, "SUGAR"));
        				}
        			}
        			
        			this.ds_dlvItem.set_enableevent(true);			
        		}		
        	}
        }

        /**
        	@function	fn_getCompFileList1()
        	@desc   	FILE_JOB_6 : 파일 컴포넌트에 파일정보 셋팅 및 필터 추가(컴포넌트 갯수 만큼 function 추가)
        */
        this.fn_getCompFileList1 = function()
        {	
        	if(this.div_21.Tab01.tabindex == 1) //협력사 첨부파일
        	{	
        		var array = [this.ds_dlv.getColumn(this.ds_dlv.rowposition, "DLV_NO")];		
        		this.div_21.Tab01.tabpages[this.div_21.Tab01.tabindex].fn_fileCompInit(this, "MM_PO_DLV", this.ds_dlv, array, "Y", "String(CRTR_ID).indexOf('S') >= 0"); //초기화 및 조회(필터링)	
        	}
        }

        /**
        	@function	fn_getCompFileList2()
        	@desc   	FILE_JOB_6 : 파일 컴포넌트에 파일정보 셋팅 및 필터 추가(컴포넌트 갯수 만큼 function 추가)
        */
        this.fn_getCompFileList2 = function()
        {
        	if(this.div_21.Tab01.tabindex == 2) //검수담당 첨부파일
        	{
        		var array = [this.ds_dlv.getColumn(this.ds_dlv.rowposition, "DLV_NO")];
        		
        		var readOnly="";
        		if(this.ds_dlv.getColumn(0, "CD_DLV_STTS")=="DL10SND")
        		{
        			readOnly = "N";
        		}
        		else
        		{
        			readOnly = "Y";
        		}
        		
        		this.div_21.Tab01.tabpages[this.div_21.Tab01.tabindex].fn_fileCompInit(this, "MM_PO_DLV", this.ds_dlv, array, readOnly, "String(CRTR_ID).indexOf('B') >= 0"); //초기화 및 조회(필터링)	
        	}
        }

        /**
        	@function	div_21_Tab01_onchanged()
        	@desc   	FILE_COMP_JOB_7 : 파일 첨부 컴포넌트 초기화 & 조회
        */
        this.div_21_Tab01_onchanged = function(obj,e)
        {
        	if(this.div_21.Tab01.tabindex == 1) //협력사 첨부파일
        	{	
        		//FILE_COMP_JOB_7 : 파일 첨부 컴포넌트 초기화 & 조회
        		this.fn_getCompFileList1();
        	}
        	else if(this.div_21.Tab01.tabindex == 2) //검수담당 첨부파일
        	{
        		this.fn_getCompFileList2();
        	}
        }

        /**
        	@function	div_41_Tab01_onchanged()
        	@desc   	FILE_COMP_JOB_7 : 파일 첨부 컴포넌트 초기화 & 조회
        */
        this.div_41_Tab01_onchanged = function(obj,e)
        {	
        	//유효기간관리 여부
        	if("Y"==this.ds_dlvItem.getColumn(this.ds_dlvItem.rowposition,"ALT_DDATE_MGT"))
        	{
        		this.div_41.Tab01.tabpage5.btn_dlvItemAdd.set_visible(true);
        		this.div_41.Tab01.tabpage5.btn_dlvItemDel.set_visible(true);
        	}
        	
        	//FILE_COMP_JOB_7 : 파일 첨부 컴포넌트 초기화 & 조회
        	this.fn_getCompFileList2();
        }

        /**
        	@function	ds_dlvItem_onrowposchanged()
        	@desc   	품목에 대한 첨부파일 변경을 위한 탭 변경 이벤트 호출
        */
        this.ds_dlvItem_onrowposchanged = function(obj,e)
        {
        	this.fn_getCompFileList2();
        	this.ds_dlvItemExp.filter("PO_ITEM_ID=='" + this.ds_dlvItem.getColumn(this.ds_dlvItem.rowposition, "PO_ITEM_ID") + "'");
        	
        	//유효기간관리 여부
        	if("Y"==this.ds_dlvItem.getColumn(this.ds_dlvItem.rowposition,"ALT_DDATE_MGT"))
        	{
        		this.div_41.Tab01.tabpage5.btn_dlvItemAdd.set_visible(true);
        		this.div_41.Tab01.tabpage5.btn_dlvItemDel.set_visible(true);
        	}
        }

        /**
        	@function	div_41_cbo_itemChg_onitemchanged()
        	@desc   	아이템선택
        */
         this.div_41_cbo_itemChg_onitemchanged = function(obj,e)
        {
        	this.ds_dlvItem.set_rowposition(this.ds_dlvItem.findRow("DLV_ITEM_ID",obj.value));
        }

        /**
        	@function	div_41_cbo_itemChg_onitemchanged()
        	@desc   	자재를 위로 이동하여 편집
        */
        this.div_41_btn_dlvItemRowUp_onclick = function(obj,e)
        {
        	if(this.ds_dlvItem.rowposition==0) return;
        	this.ds_dlvItem.set_rowposition(this.ds_dlvItem.rowposition-1);
        }

        /**
        	@function	div_41_btn_dlvItemRowDown_onclick()
        	@desc   	자재를 아래로 이동하여 편집
        */
        this.div_41_btn_dlvItemRowDown_onclick = function(obj,e)
        {
        	if(this.ds_dlvItem.rowposition==this.ds_dlvItem.rowcount-1) return;
        	this.ds_dlvItem.set_rowposition(this.ds_dlvItem.rowposition+1);
        }

        /**
        	@function	fn_onkeyup_event()
        	@desc   	검색조건에서 ENTER(keycode::13) BACKSPACE(keycode::8) 입력시 이벤트를 발생시킨다.
        */
        this.fn_onkeyup_event = function(obj,e)
        {
        	//Enter 입력시
        	if(e.keycode == "13")
        	{
        		if(obj.name == "edt_inspChrgrNm")
        		{
        			this.div_21_Tab01_tabp05_btn_chrgr_onclick();
        		}
        	}
        }

        /**
        	@function	div_41_Tab01_tabpage5_btn_dlvItemAdd_onclick()
        	@desc   	유효기간관리 그리드 행추가
        */
        this.div_41_Tab01_tabpage5_btn_dlvItemAdd_onclick = function(obj,e)
        {
        	var nRow = this.ds_dlvItemExp.addRow();
        	this.ds_dlvItemExp.setColumn(nRow, "PO_ITEM_ID", this.ds_dlvItem.getColumn(this.ds_dlvItem.rowposition, "PO_ITEM_ID"));
        	this.ds_dlvItemExp.setColumn(nRow, "DLV_ITEM_ID", "");	
        	this.ds_dlvItemExp.setColumn(nRow, "EFF_DAY", "");
        	this.ds_dlvItemExp.setColumn(nRow, "DLV_QTY", "");
        }

        /**
        	@function	div_41_Tab01_tabpage5_btn_dlvItemDel_onclick()
        	@desc   	유효기간관리 그리드 행삭제
        */
        this.div_41_Tab01_tabpage5_btn_dlvItemDel_onclick = function(obj,e)
        {
        	this.gfn_dsChkDel(this.ds_dlvItemExp);
        	this.ds_dlvItemExp.filter("PO_ITEM_ID=='" + this.ds_dlvItem.getColumn(this.ds_dlvItem.rowposition, "PO_ITEM_ID") + "'");
        }

        /**
        	@function	div_21_Tab01_tabp01_chk_altPreMmGr_onchanged()
        	@desc   	전월말일자 체크박스 onchanged
        */
        this.div_21_Tab01_tabp01_chk_altPreMmGr_onchanged = function(obj,e)
        {
        	var yyyymmdd = e.postvalue == "Y" ? this.gfn_preMonthLastDay() : this.gfn_today();
        	this.ds_dlv.setColumn(this.ds_dlv.rowposition, "INSP_DAY", yyyymmdd);		
        }

        /**
        	@function	ds_dlvItemExp_oncolumnchanged()
        	@desc   	유효기간관리 데이터셋 oncolumnchanged 이벤트
        */
        this.ds_dlvItemExp_oncolumnchanged = function(obj,e)
        {
        	if("EFF_DAY" == e.columnid)
        	{
        		for(var i=this.ds_dlvItemExp.getRowCount()-2; i>=0; i--)
        		{
        			if(this.ds_dlvItemExp.getColumn(i, "EFF_DAY") == "") continue;
        			if(this.ds_dlvItemExp.getColumn(i, "EFF_DAY") == this.ds_dlvItemExp.getColumn(this.ds_dlvItemExp.getRowCount()-1, "EFF_DAY"))
        			{
        				this.gfn_alert("유효기간관리의 유효일자는 중복될 수 없습니다.");
        				this.ds_dlvItemExp.setColumn(this.ds_dlvItemExp.getRowCount()-1, "EFF_DAY", "");
        				break;
        			}
        		}
        	}
        }

        /**
        	@function	ds_dlvItem_oncolumnchanged()
        	@desc   	품목 데이터셋 oncolumnchanged 이벤트
        */
        this.ds_dlvItem_oncolumnchanged = function(obj,e)
        {
        	if("DLV_QTY" == e.columnid)
        	{
        		//검수수량 변경시 금액 변경
        		var dSum = this.ds_dlvItem.getSum("DLV_QTY * UNT_PRICE", this.ds_dlvItem.rowposition, this.ds_dlvItem.rowposition+1);
        		this.ds_dlvItem.setColumn(this.ds_dlvItem.rowposition, "DLV_PLAN_AMT", dSum);
        		
        		if(this.ds_dlvItem.getColumn(this.ds_dlvItem.rowposition, "INT_NTAX") == "T")
        		{
        			var sVat = this.ds_dlvItem.getSum("DLV_QTY * UNT_PRICE * 0.1", this.ds_dlvItem.rowposition, this.ds_dlvItem.rowposition+1);
        			this.ds_dlvItem.setColumn(this.ds_dlvItem.rowposition, "VAT", sVat);
        		}
        		
        		var compareVal = this.ds_dlvItem.getSum("TOT_DLV_QTY + DLV_QTY", this.ds_dlvItem.rowposition, this.ds_dlvItem.rowposition+1);
        		if(compareVal >= this.ds_dlvItem.getColumn(this.ds_dlvItem.rowposition, "QTY"))
        			this.ds_dlvItem.setColumn(this.ds_dlvItem.rowposition, "ALT_DLV_CMPLT", 1);
        		else
        			this.ds_dlvItem.setColumn(this.ds_dlvItem.rowposition, "ALT_DLV_CMPLT", 0);
        		
        		dSum = this.ds_dlvItem.getSum("DLV_QTY * UNT_PRICE");
        		this.ds_dlv.setColumn(this.ds_dlv.rowposition, "DLV_AMT", dSum);
        		
        		sVat = this.ds_dlvItem.getSum("VAT");
        		this.ds_dlv.setColumn(this.ds_dlv.rowposition, "VAT", sVat);
        	}
        }

        /**
        	@function	div_31_grd_dlvItem_oncelldblclick()
        	@desc   	품목 그리드 oncelldblclick 이벤트
        */
        this.div_31_grd_dlvItem_oncelldblclick = function(obj,e)
        {
        	if(this.gfn_isNull(this.ds_dlvItem.getColumn(e.row, this.gfn_grdBindColName(obj, e.cell)))) return false;
        	
        	if(this.gfn_grdBindColName(obj, e.cell)=="MTRL_CD")	//품목코드
        	{
        		var sArg = { 
        						mtrl_cd:this.ds_dlvItem.getColumn(e.row, "MTRL_CD")	
        					};
        		this.gfn_dialog("PopupComMtrlView", "commPop::PPOPC700P01.xfdl", sArg, "fn_popCallBack");
        	}
        	else if(this.gfn_grdBindColName(obj, e.cell)=="MTRL_NM")	//품목코드
        	{
        		var sArg = { 
        						mtrl_cd:this.ds_dlvItem.getColumn(e.row, "MTRL_CD")	
        					};
        		this.gfn_dialog("PopupComMtrlView", "commPop::PPOPC700P01.xfdl", sArg, "fn_popCallBack");
        	}
        	else if(this.gfn_grdBindColName(obj, e.cell)=="SL_NM"){ //창고
        		var sArg = {strCd:this.ds_dlvItem.getColumn(e.row,"STR_CD")
        		            ,branchCd:application.gds_userInfo.getColumn(0,"BRANCH_CD")};
        		this.gfn_dialog("PPOPC400P00", "commPop::PPOPC400P00.xfdl", sArg);
        	}
        }

        /**
        	@function	div_31_grd_dlvItem_oncellclick()
        	@desc   	품목 그리드 oncellclick 이벤트
        */
        this.div_31_grd_dlvItem_oncellclick = function(obj,e)
        {
        	if(this.gfn_isNull(this.ds_dlvItem.getColumn(e.row, this.gfn_grdBindColName(obj, e.cell)))) return false;
        	
        	if(this.gfn_grdBindColName(obj, e.cell)=="ALT_DLV_CMPLT")	//품목코드
        	{
        		//납품완료 체크  - 차수별 검수일 경우에는 불가.
        		if(this.ds_dlv.getColumn(0,"INT_DLV_TYPE") != "PAY") //차수별 검수
        		{
        			this.ds_dlvItem.setColumn(this.ds_dlvItem.rowposition, "ALT_DLV_CMPLT", obj.getCellValue(e.row, e.col));
        		}
        	}
        }

        /**
        	@function	div_3_btn_sugar_onclick()
        	@desc   	측정당도 입력
        */
        this.div_3_btn_sugar_onclick = function(obj,e)
        {
        	var sArg = { 
        					agv_branchCd:this.ds_dlv.getColumn(0, "BRANCH_CD")
        					, agv_dlvNo:this.ds_dlv.getColumn(0, "DLV_NO")
        			   };
        	this.gfn_dialog("PopupSugarInfo", "DLVB::PDLVB100P04.xfdl", sArg, "fn_popCallBack");
        }

        /**
        	@function	div_1_btn_barcode_onclick()
        	@desc   	바코드출력 팝업
        */
        this.div_1_btn_barcode_onclick = function(obj,e)
        {
        	var sArg = { 
        					agv_branchCd:this.ds_dlv.getColumn(0, "BRANCH_CD")
        					, agv_dlvNo:this.ds_dlv.getColumn(0, "DLV_NO")
        			   };
        	this.gfn_dialog("PopupBarcode", "DLVB::PDLVB100P05.xfdl", sArg, "fn_popCallBack");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_dlvItem.addEventHandler("onrowposchanged", this.ds_dlvItem_onrowposchanged, this);
            this.ds_dlvItem.addEventHandler("oncolumnchanged", this.ds_dlvItem_oncolumnchanged, this);
            this.ds_dlvItemExp.addEventHandler("oncolumnchanged", this.ds_dlvItemExp_oncolumnchanged, this);
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.div_1.btn_cfm.addEventHandler("onclick", this.div_1_btn_CfmDlv_onclick, this);
            this.div_1.btn_rej.addEventHandler("onclick", this.div_1_btn_RejectDlv_onclick, this);
            this.div_1.btn_barcode.addEventHandler("onclick", this.div_1_btn_barcode_onclick, this);
            this.div_2.btn_opHead.addEventHandler("onclick", this.fn_fold_onclick, this);
            this.div_21.Tab01.addEventHandler("onchanged", this.div_21_Tab01_onchanged, this);
            this.div_21.Tab01.tabp01.edt_ptnrNm.addEventHandler("onkeyup", this.fn_onkeyup_event, this);
            this.div_21.Tab01.tabp01.chk_altPreMmGr.addEventHandler("onchanged", this.div_21_Tab01_tabp01_chk_altPreMmGr_onchanged, this);
            this.div_3.btn_opItem.addEventHandler("onclick", this.fn_fold_onclick, this);
            this.div_3.btn_sugar.addEventHandler("onclick", this.div_3_btn_sugar_onclick, this);
            this.div_4.btn_opItemDetail00.addEventHandler("onclick", this.fn_fold_onclick, this);
            this.div_41.Tab01.addEventHandler("onchanged", this.div_41_Tab01_onchanged, this);
            this.div_41.Tab01.tabpage5.btn_dlvItemDel.addEventHandler("onclick", this.div_41_Tab01_tabpage5_btn_dlvItemDel_onclick, this);
            this.div_41.Tab01.tabpage5.btn_dlvItemAdd.addEventHandler("onclick", this.div_41_Tab01_tabpage5_btn_dlvItemAdd_onclick, this);
            this.div_41.btn_dlvItemRowDown.addEventHandler("onclick", this.div_41_btn_dlvItemRowDown_onclick, this);
            this.div_41.btn_dlvItemRowUp.addEventHandler("onclick", this.div_41_btn_dlvItemRowUp_onclick, this);
            this.div_41.cbo_itemChg.addEventHandler("onitemchanged", this.div_41_cbo_itemChg_onitemchanged, this);
            this.div_31.grd_dlvItem.addEventHandler("oncellclick", this.div_31_grd_dlvItem_oncellclick, this);
            this.div_31.grd_dlvItem.addEventHandler("oncelldblclick", this.div_31_grd_dlvItem_oncelldblclick, this);
            this.div_51.grd_poPay.addEventHandler("onkeyup", this.div_21_Tab01_tabp01_grd_poPay_onkeyup, this);
            this.div_51.grd_poPay.addEventHandler("onmouseleave", this.div_21_Tab01_tabp01_grd_poPay_onmouseleave, this);
            this.div_5.btn_opItemDetail.addEventHandler("onclick", this.fn_fold_onclick, this);

        };

        this.loadIncludeScript("BDlvDetail.xfdl", true);

       
    };
}
)();
