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
                this.set_name("BMtrlReqDetail");
                this.set_titletext("구매요청작성");
                this._setFormPosition(0,0,1220,800);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBasicInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"MTRL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_MTRL_REQ_STTS\" type=\"STRING\" size=\"256\"/><Column id=\"SPEC\" type=\"STRING\" size=\"256\"/><Column id=\"LRG_CLS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MDL_CLS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SML_CLS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ATTCH_FILE_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"SVO_MTRL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_USE\" type=\"STRING\" size=\"256\"/><Column id=\"CRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CRT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_CHGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_CHG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REQR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PUR_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PUR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PACK_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PACK_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PACK_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INT_NTAX\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DUMY1\" type=\"STRING\" size=\"256\"/><Column id=\"DUMY2\" type=\"STRING\" size=\"256\"/><Column id=\"DUMY3\" type=\"STRING\" size=\"256\"/><Column id=\"DUMY4\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_TOT_PUR\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_PTNR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"GR_ACNT_CD_BIZ\" type=\"STRING\" size=\"256\"/><Column id=\"GR_ACNT_CD_BIZ_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GR_ACNT_CD_MGMT\" type=\"STRING\" size=\"256\"/><Column id=\"GR_ACNT_CD_MGMT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_ITEM_ACC_BIZ\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_ITEM_ACC_BIZ_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_ITEM_ACC_MGMT\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_ITEM_ACC_MGMT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_FILE_PATH_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MIN_ORD_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_PO_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_PO_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"LASTPO_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RPC_MTRL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RPC_ABLE_MTRL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_DDATE_MGT\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_SC\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_CATALOG\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_MEAL\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_INVNTRY_MGMT\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"OVER_GR_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"RMARK\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_BARCD\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_RENT\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_FASSET\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_FASSET_MGT\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_WASSET\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_FIXED_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_PTNR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_END_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"APRVR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APRV_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BASIC_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"SVO_MTRL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"STD_SUGAR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_MTRL_REQ_STTS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAttr", this);
            obj._setContents("<ColumnInfo><Column id=\"MTRL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RMARK\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_CHGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CRT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_CHG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_MDT\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMtrlType3", this);
            obj._setContents("<ColumnInfo><Column id=\"MTRL_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UP_MTRL_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RMARK\" type=\"STRING\" size=\"256\"/><Column id=\"ARY_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_USE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMtrlType1", this);
            obj._setContents("<ColumnInfo><Column id=\"MTRL_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UP_MTRL_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RMARK\" type=\"STRING\" size=\"256\"/><Column id=\"ARY_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_USE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MTRL_GRP_NM\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMtrlType2", this);
            obj._setContents("<ColumnInfo><Column id=\"MTRL_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UP_MTRL_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RMARK\" type=\"STRING\" size=\"256\"/><Column id=\"ARY_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_USE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMtrlGrpId", this);
            obj._setContents("<ColumnInfo><Column id=\"MTRL_GRP_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsComboAttr", this);
            obj._setContents("<ColumnInfo><Column id=\"ATTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM11", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdSM10", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdSM11", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCond", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReturn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMtrlGrpSpec", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_2", "absolute", "0", "403", null, "30", "15", null, this);
            obj.set_taborder("2");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("DIV_속성그리드상단");
            this.addChild(obj.name, obj);
            obj = new Button("btnAttrAdd", "absolute", null, "3", "63", null, "70", "3", this.div_2);
            obj.set_taborder("8");
            obj.set_text("+행추가");
            obj.set_cssclass("btn_WF_Add");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("행추가버튼");
            obj.style.set_background("#dfdfdfff");
            this.div_2.addChild(obj.name, obj);
            obj = new Button("btnAttrDel", "absolute", null, "3", "60", null, "1", "3", this.div_2);
            obj.set_taborder("9");
            obj.set_text(" -행삭제");
            obj.set_cssclass("btn_WF_Delete");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("행삭제버튼");
            obj.style.set_background("#dfdfdfff");
            this.div_2.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "0", "76", null, null, "0", this.div_2);
            obj.set_taborder("10");
            obj.set_text("품목속성");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 2 17");
            obj.getSetter("objNm").set("타이틀-품목속성");
            this.div_2.addChild(obj.name, obj);

            obj = new Div("div_21", "absolute", "0", "445", null, null, "15", "0", this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.getSetter("objNm").set("Div_속성그리드");
            this.addChild(obj.name, obj);
            obj = new Grid("gridAttrList", "absolute", "0%", "5", null, null, "0%", "0", this.div_21);
            obj.set_taborder("0");
            obj.set_binddataset("dsAttr");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.getSetter("f_filter").set("Y");
            obj.getSetter("f_excel").set("Y");
            obj.getSetter("f_hide").set("N");
            obj.getSetter("f_find").set("Y");
            obj.getSetter("f_sort").set("Y");
            obj.getSetter("f_fix").set("Y");
            obj.getSetter("f_height").set("Y");
            obj.getSetter("f_save").set("Y");
            obj.getSetter("f_mode").set("Y");
            obj.getSetter("f_init").set("Y");
            obj.getSetter("f_colSize").set("Y");
            obj.getSetter("objNm").set("픔");
            obj._setContents("<Formats><Format id=\"MMOD\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"300\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"CHECKED\" expr=\"0\"/><Cell col=\"1\" text=\"속성\"/><Cell col=\"2\" text=\"규격\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:ATTR_ID\" editdisplay=\"edit\" combodataset=\"dsComboAttr\" combocodecol=\"ATTR_ID\" combodatacol=\"ATTR_NM\" combodisplay=\"edit\" calendardisplay=\"display\"/><Cell col=\"2\" edittype=\"expr:ATTR_ID == '' ? 'none' : 'text'\" style=\"align:left;\" text=\"bind:ATTR\" calendardisplay=\"display\"/></Band></Format><Format id=\"VMOD\"><Columns><Column size=\"100\"/><Column size=\"300\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"속성\"/><Cell col=\"1\" text=\"규격\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"none\" text=\"bind:ATTR_ID\" editdisplay=\"edit\" combodataset=\"dsComboAttr\" combocodecol=\"ATTR_ID\" combodatacol=\"ATTR_NM\" combodisplay=\"edit\"/><Cell col=\"1\" edittype=\"none\" style=\"align:left;\" text=\"bind:ATTR\"/></Band></Format></Formats>");
            this.div_21.addChild(obj.name, obj);

            obj = new Div("div_0", "absolute", "0", "0", null, "34", "15", null, this);
            obj.set_taborder("6");
            obj.set_cssclass("div_WF_SearchBg");
            obj.getSetter("objNm").set("DIV_최상단");
            this.addChild(obj.name, obj);
            obj = new Edit("edtPrNo", "absolute", "7", "6", "109", "21", null, null, this.div_0);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_cssclass("edt_default_r");
            obj.getSetter("objNm").set("품목등록요청번호");
            obj.style.set_align("center middle");
            this.div_0.addChild(obj.name, obj);
            obj = new Button("btn_App_Pr", "absolute", null, "3", "70", null, "3", "3", this.div_0);
            obj.set_taborder("3");
            obj.set_text("등록요청");
            obj.set_cssclass("btn_WF_SearchBtn");
            obj.style.set_background("#888888ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 malgun gothic");
            obj.getSetter("objNm").set("등록요청");
            this.div_0.addChild(obj.name, obj);
            obj = new Static("staStts", "absolute", "123", "6", "117", "21", null, null, this.div_0);
            obj.set_taborder("4");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("품목등록상");
            this.div_0.addChild(obj.name, obj);

            obj = new Div("div_1", "absolute", "0", "44", null, "24", "10", null, this);
            obj.set_taborder("7");
            obj.getSetter("objNm").set("DIV_헤더타이");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", null, "255", "24", null, "0", this.div_1);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 2 17");
            obj.getSetter("objNm").set("타이틀-기본정보");
            this.div_1.addChild(obj.name, obj);

            obj = new Div("div_11", "absolute", "0%", "65", null, "335", "15", null, this);
            obj.set_taborder("8");
            obj.getSetter("objNm").set("DIV_헤더상");
            this.addChild(obj.name, obj);
            obj = new Tab("Tab01", "absolute", "0", "5", null, null, "0", "0", this.div_11);
            obj.set_taborder("0");
            obj.set_preload("true");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.set_cssclass("tab_default");
            this.div_11.addChild(obj.name, obj);
            obj = new Tabpage("tabp01", this.div_11.Tab01);
            obj.set_text("기본정보");
            obj.set_scrollbars("none");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("기본정보");
            this.div_11.Tab01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "5", null, "33", "0", null, this.div_11.Tab01.tabp01);
            obj.set_taborder("93");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "37", null, "33", "0", null, this.div_11.Tab01.tabp01);
            obj.set_taborder("96");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "69", null, "33", "0", null, this.div_11.Tab01.tabp01);
            obj.set_taborder("99");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine03", "absolute", "0", "101", null, "33", "0", null, this.div_11.Tab01.tabp01);
            obj.set_taborder("102");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine04", "absolute", "0", "133", null, "33", "0", null, this.div_11.Tab01.tabp01);
            obj.set_taborder("103");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine05", "absolute", "0", "165", null, "33", "0", null, this.div_11.Tab01.tabp01);
            obj.set_taborder("104");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine06", "absolute", "0", "197", null, "33", "0", null, this.div_11.Tab01.tabp01);
            obj.set_taborder("105");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine07", "absolute", "0", "225", null, "33", "0", null, this.div_11.Tab01.tabp01);
            obj.set_taborder("106");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staMtrlCdNm", "absolute", "0", "5", "115", "33", null, null, this.div_11.Tab01.tabp01);
            obj.set_taborder("112");
            obj.set_text("<fc v='red'>* </fc>품목코드/명");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Label");
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staSpec", "absolute", "0", "37", "115", "33", null, null, this.div_11.Tab01.tabp01);
            obj.set_taborder("113");
            obj.set_text("규격");
            obj.set_cssclass("sta_WF_Label");
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("edMtrlGrp", "absolute", "0", "69", "115", "33", null, null, this.div_11.Tab01.tabp01);
            obj.set_taborder("114");
            obj.set_text("<fc v='red'>* </fc>품목분류");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("품목분류");
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staPurUnit", "absolute", "0", "101", "115", "33", null, null, this.div_11.Tab01.tabp01);
            obj.set_taborder("115");
            obj.set_text("<fc v='red'>* </fc>구매(재고)단위");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("작성일시");
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staQtyUnit", "absolute", "0", "133", "115", "33", null, null, this.div_11.Tab01.tabp01);
            obj.set_taborder("116");
            obj.set_text("<fc v='red'>* </fc>포장수량/단위");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("작성일시");
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staTax", "absolute", "0", "165", "115", "33", null, null, this.div_11.Tab01.tabp01);
            obj.set_taborder("117");
            obj.set_text("관리속성");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("총금액");
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staCrtrNm", "absolute", "0", "197", "115", "33", null, null, this.div_11.Tab01.tabp01);
            obj.set_taborder("118");
            obj.set_text("요정자");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("작성자");
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staMroItem", "absolute", "0", "225", "115", "33", null, null, this.div_11.Tab01.tabp01);
            obj.set_taborder("119");
            obj.set_text("서브원품목");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("총금액");
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtMtrlCd", "absolute", "123", "10", "100", "24", null, null, this.div_11.Tab01.tabp01);
            obj.set_taborder("120");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_default_r");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("objNm").set("품목코드");
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtMtrlNm", "absolute", "225", "10", "298", "24", null, null, this.div_11.Tab01.tabp01);
            obj.set_taborder("121");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_default");
            obj.style.set_selectbackground("black");
            obj.getSetter("objNm").set("품목명");
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Button("btnSetSpec", "absolute", "525", "42", "93", "24", null, null, this.div_11.Tab01.tabp01);
            obj.set_taborder("123");
            obj.set_text("세부속성적용");
            obj.set_cssclass("btn_WF_Custom");
            obj.getSetter("objNm").set("품목속성적용 버튼");
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtMtrlSpec", "absolute", "123", "42", "400", "24", null, null, this.div_11.Tab01.tabp01);
            obj.set_taborder("124");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_default");
            obj.style.set_selectbackground("black");
            obj.getSetter("objNm").set("규격");
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Combo("cbMtrlGrp1", "absolute", "123", "75", "131", "24", null, null, this.div_11.Tab01.tabp01);
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("125");
            obj.set_text("Combo00");
            obj.set_innerdataset("dsMtrlType1");
            obj.set_codecolumn("MTRL_GRP_ID");
            obj.set_datacolumn("MTRL_GRP_NM");
            obj.getSetter("objNm").set("대분류");
            obj = new Combo("cbMtrlGrp2", "absolute", "255", "75", "132", "24", null, null, this.div_11.Tab01.tabp01);
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("126");
            obj.set_text("Combo00");
            obj.set_innerdataset("dsMtrlType2");
            obj.set_codecolumn("MTRL_GRP_ID");
            obj.set_datacolumn("MTRL_GRP_NM");
            obj.getSetter("objNm").set("중분류");
            obj = new Combo("cbMtrlGrp3", "absolute", "389", "75", "131", "24", null, null, this.div_11.Tab01.tabp01);
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("127");
            obj.set_text("Combo00");
            obj.set_innerdataset("dsMtrlType3");
            obj.set_codecolumn("MTRL_GRP_ID");
            obj.set_datacolumn("MTRL_GRP_NM");
            obj.getSetter("objNm").set("소분류");
            obj = new Edit("edMtrlGrpCd", "absolute", "522", "75", "158", "24", null, null, this.div_11.Tab01.tabp01);
            obj.set_taborder("128");
            obj.set_visible("false");
            obj.getSetter("objNm").set("품목분류코드(임시)");
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Combo("cboCdUnit", "absolute", "123", "105", "100", "24", null, null, this.div_11.Tab01.tabp01);
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("129");
            obj.set_innerdataset("@dsCdCM11");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("구매단위");
            obj = new MaskEdit("mePrAmt00", "absolute", "123", "137", "100", "24", null, null, this.div_11.Tab01.tabp01);
            obj.set_taborder("130");
            obj.set_mask("9,999.###");
            obj.set_autoselect("true");
            obj.set_cssclass("mae_default");
            obj.style.set_color("blue");
            obj.style.set_font("bold 10 Dotum");
            obj.getSetter("objNm").set("포장수량");
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("Static0100", "absolute", "228", "137", "10", "24", null, null, this.div_11.Tab01.tabp01);
            obj.set_taborder("131");
            obj.set_text("/");
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Combo("cboCdUnit01", "absolute", "243", "137", "100", "24", null, null, this.div_11.Tab01.tabp01);
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("132");
            obj.set_innerdataset("@dsCdCM11");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("포장단위");
            obj = new CheckBox("CheckBox00", "absolute", "750", "107", "210", "24", null, null, this.div_11.Tab01.tabp01);
            obj.set_taborder("134");
            obj.set_text("대상 ( 통합 단가 적용 )");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.getSetter("objNm").set("통합구매품목여부");
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Radio("Radio00", "absolute", "10.31%", "169", null, "24", "80.13%", null, this.div_11.Tab01.tabp01);
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            var Radio00_innerdataset = new Dataset("Radio00_innerdataset", this.div_11.Tab01.tabp01.Radio00);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">T</Col><Col id=\"datacolumn\">과세</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">비과세</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_taborder("135");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.getSetter("objNm").set("과세비과세여부");
            obj = new Edit("edtUserId", "absolute", "123", "200", "100", "24", null, null, this.div_11.Tab01.tabp01);
            obj.set_taborder("136");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_default_r");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("objNm").set("요청자ID");
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtUserNm", "absolute", "225", "200", "250", "24", null, null, this.div_11.Tab01.tabp01);
            obj.set_taborder("137");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_default");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("objNm").set("요청자명");
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edSubCd", "absolute", "123", "230", "100", "24", null, null, this.div_11.Tab01.tabp01);
            obj.set_taborder("138");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_default_r");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("objNm").set("서브원품목코드");
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtSubNm", "absolute", "225", "230", "250", "24", null, null, this.div_11.Tab01.tabp01);
            obj.set_taborder("139");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_default");
            obj.style.set_selectbackground("black");
            obj.style.setStyleValue("background", "disabled", "#ffffffff");
            obj.style.setStyleValue("color", "disabled", "#333333ff");
            obj.getSetter("objNm").set("서브원품목명");
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Button("btnMroSearch", "absolute", "451", "230", "24", "24", null, null, this.div_11.Tab01.tabp01);
            obj.set_taborder("140");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("서브원품목검색 버튼");
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staHeadItem", "absolute", "621", "101", "115", "33", null, null, this.div_11.Tab01.tabp01);
            obj.set_taborder("141");
            obj.set_text("통합구매품목");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("총금액");
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Button("btnSetSub", "absolute", "477", "230", "57", "24", null, null, this.div_11.Tab01.tabp01);
            obj.set_taborder("142");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Custom");
            obj.getSetter("objNm").set("서브원품목적용 삭제 버튼");
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Tabpage("tabp03", this.div_11.Tab01);
            obj.set_text("요청사항");
            obj.getSetter("objNm").set("특이사항");
            this.div_11.Tab01.addChild(obj.name, obj);
            obj = new TextArea("taRfqRemark", "absolute", "5", "5", null, null, "5", "5", this.div_11.Tab01.tabp03);
            obj.set_taborder("0");
            obj.set_value("신선도가 제일 중요합니다.");
            obj.set_scrollbars("autovert");
            obj.getSetter("objNm").set("헤더텍스트");
            this.div_11.Tab01.tabp03.addChild(obj.name, obj);
            obj = new Tabpage("tab05", this.div_11.Tab01);
            obj.set_text("운영단위별 구매정보");
            this.div_11.Tab01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "5", null, "33", "0", null, this.div_11.Tab01.tab05);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_11.Tab01.tab05.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "37", null, "199", "0", null, this.div_11.Tab01.tab05);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_11.Tab01.tab05.addChild(obj.name, obj);
            obj = new Static("staViewCompLine08", "absolute", "0", "235", null, "33", "0", null, this.div_11.Tab01.tab05);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_11.Tab01.tab05.addChild(obj.name, obj);
            obj = new Static("staViewCompLine09", "absolute", "0", "263", null, "33", "0", null, this.div_11.Tab01.tab05);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_11.Tab01.tab05.addChild(obj.name, obj);
            obj = new Static("staGr01", "absolute", "0", "235", "117", "32", null, null, this.div_11.Tab01.tab05);
            obj.set_taborder("26");
            obj.set_text("입고계정(영업)");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("총금액");
            this.div_11.Tab01.tab05.addChild(obj.name, obj);
            obj = new Static("staGr02", "absolute", "0", "264", "117", "32", null, null, this.div_11.Tab01.tab05);
            obj.set_taborder("27");
            obj.set_text("입고계정(관리)");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("총금액");
            this.div_11.Tab01.tab05.addChild(obj.name, obj);
            obj = new Edit("edtGrAcntCdMgmt", "absolute", "123", "267", "100", "24", null, null, this.div_11.Tab01.tab05);
            obj.set_taborder("28");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_default_r");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("objNm").set("입고계정(관리)");
            this.div_11.Tab01.tab05.addChild(obj.name, obj);
            obj = new Edit("edtGrAcntNmMgmt", "absolute", "225", "267", "250", "24", null, null, this.div_11.Tab01.tab05);
            obj.set_taborder("29");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_default");
            obj.style.set_selectbackground("black");
            obj.getSetter("objNm").set("입고계정명(관리)");
            this.div_11.Tab01.tab05.addChild(obj.name, obj);
            obj = new Button("btnGrMgmt", "absolute", "451", "267", "24", "24", null, null, this.div_11.Tab01.tab05);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("입고계정(관리)검색 버튼");
            this.div_11.Tab01.tab05.addChild(obj.name, obj);
            obj = new Edit("edtGrAcntCdBiz", "absolute", "123", "238", "100", "24", null, null, this.div_11.Tab01.tab05);
            obj.set_taborder("31");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_default_r");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("objNm").set("입고계정(영업)");
            this.div_11.Tab01.tab05.addChild(obj.name, obj);
            obj = new Edit("edtGrAcntNmBiz", "absolute", "225", "238", "250", "24", null, null, this.div_11.Tab01.tab05);
            obj.set_taborder("32");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_default");
            obj.style.set_selectbackground("black");
            obj.getSetter("objNm").set("입고계정명(영업)");
            this.div_11.Tab01.tab05.addChild(obj.name, obj);
            obj = new Button("btnGrBiz", "absolute", "451", "238", "24", "24", null, null, this.div_11.Tab01.tab05);
            obj.set_taborder("33");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("입고계정(영업)검색 버튼");
            this.div_11.Tab01.tab05.addChild(obj.name, obj);
            obj = new Static("staGr10", "absolute", "522", "235", "130", "32", null, null, this.div_11.Tab01.tab05);
            obj.set_taborder("34");
            obj.set_text("출고계정(영업)");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("작성일시");
            this.div_11.Tab01.tab05.addChild(obj.name, obj);
            obj = new Static("staGr11", "absolute", "522", "264", "130", "32", null, null, this.div_11.Tab01.tab05);
            obj.set_taborder("35");
            obj.set_text("출고계정(관리)");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("작성일시");
            this.div_11.Tab01.tab05.addChild(obj.name, obj);
            obj = new Edit("edtOutItemAccBiz", "absolute", "657", "238", "100", "24", null, null, this.div_11.Tab01.tab05);
            obj.set_taborder("36");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_default_r");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("objNm").set("출고계정(영업)");
            this.div_11.Tab01.tab05.addChild(obj.name, obj);
            obj = new Edit("edtOutItemAccMgmt", "absolute", "657", "268", "100", "24", null, null, this.div_11.Tab01.tab05);
            obj.set_taborder("37");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_default_r");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("objNm").set("출고계정(관리)");
            this.div_11.Tab01.tab05.addChild(obj.name, obj);
            obj = new Edit("edtOutItemAccMgmtNm", "absolute", "758", "268", "250", "24", null, null, this.div_11.Tab01.tab05);
            obj.set_taborder("38");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_default");
            obj.style.set_selectbackground("black");
            obj.getSetter("objNm").set("출고계정명(관리)");
            this.div_11.Tab01.tab05.addChild(obj.name, obj);
            obj = new Edit("edtOutItemAccBizNm", "absolute", "758", "238", "250", "24", null, null, this.div_11.Tab01.tab05);
            obj.set_taborder("39");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_default");
            obj.style.set_selectbackground("black");
            obj.getSetter("objNm").set("출고계정명(영업)");
            this.div_11.Tab01.tab05.addChild(obj.name, obj);
            obj = new Button("btnOutBiz", "absolute", "985", "238", "23", "24", null, null, this.div_11.Tab01.tab05);
            obj.set_taborder("40");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("출고계정(영업)검색 버튼");
            this.div_11.Tab01.tab05.addChild(obj.name, obj);
            obj = new Button("btnOutMgmt", "absolute", "985", "268", "24", "24", null, null, this.div_11.Tab01.tab05);
            obj.set_taborder("41");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("출고계정(관리)검색 버튼");
            this.div_11.Tab01.tab05.addChild(obj.name, obj);
            obj = new Static("staOverRate", "absolute", "334", "6", "117", "32", null, null, this.div_11.Tab01.tab05);
            obj.set_taborder("42");
            obj.set_text("과입고 허용율");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("작성일시");
            this.div_11.Tab01.tab05.addChild(obj.name, obj);
            obj = new MaskEdit("me_PrAmt03", "absolute", "459", "9", "100", "24", null, null, this.div_11.Tab01.tab05);
            obj.set_taborder("43");
            obj.set_mask("9,999.###");
            obj.set_autoselect("true");
            obj.set_cssclass("mae_default");
            obj.style.set_color("blue");
            obj.style.set_font("bold 10 Dotum");
            obj.getSetter("objNm").set("과입고 허용율");
            this.div_11.Tab01.tab05.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "559", "9", "47", "24", null, null, this.div_11.Tab01.tab05);
            obj.set_taborder("44");
            obj.set_text("%");
            this.div_11.Tab01.tab05.addChild(obj.name, obj);
            obj = new CheckBox("cbDdate", "absolute", "133", "113", "300", "24", null, null, this.div_11.Tab01.tab05);
            obj.set_taborder("46");
            obj.set_text("유효기간 관리 ( 입고시 유효기간 필수 입력 )");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.getSetter("objNm").set("유효기간관리여부");
            this.div_11.Tab01.tab05.addChild(obj.name, obj);
            obj = new Static("staDlvDay", "absolute", "0", "6", "117", "32", null, null, this.div_11.Tab01.tab05);
            obj.set_taborder("47");
            obj.set_text("납품소요일");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("작성일시");
            this.div_11.Tab01.tab05.addChild(obj.name, obj);
            obj = new MaskEdit("me_PrAmt04", "absolute", "125", "9", "100", "24", null, null, this.div_11.Tab01.tab05);
            obj.set_taborder("49");
            obj.set_mask("9,999.###");
            obj.set_autoselect("true");
            obj.set_cssclass("mae_default");
            obj.style.set_color("blue");
            obj.style.set_font("bold 10 Dotum");
            obj.getSetter("objNm").set("납품소요일");
            this.div_11.Tab01.tab05.addChild(obj.name, obj);
            obj = new CheckBox("cbSugar", "absolute", "133", "142", "323", "24", null, null, this.div_11.Tab01.tab05);
            obj.set_taborder("50");
            obj.set_text("당도 관리 ( 검수시 샘플에 의한 당도 등록 필요 ) , ");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.getSetter("objNm").set("당도관리대상");
            this.div_11.Tab01.tab05.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "230", "10", "117", "24", null, null, this.div_11.Tab01.tab05);
            obj.set_taborder("48");
            obj.set_text("일");
            this.div_11.Tab01.tab05.addChild(obj.name, obj);
            obj = new CheckBox("cbDirectPur", "absolute", "660", "111", "446", "24", null, null, this.div_11.Tab01.tab05);
            obj.set_taborder("51");
            obj.set_text("직사입 ( 현업직구매 대상 품목 )");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.getSetter("objNm").set("직사입여부");
            this.div_11.Tab01.tab05.addChild(obj.name, obj);
            obj = new CheckBox("cbCatalog", "absolute", "133", "171", "310", "24", null, null, this.div_11.Tab01.tab05);
            obj.set_taborder("52");
            obj.set_text("카타로그 대상 (검수이전에 이미지 첨부 필요함 )");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.getSetter("objNm").set("카타로그대상");
            this.div_11.Tab01.tab05.addChild(obj.name, obj);
            obj = new CheckBox("cbStorage", "absolute", "660", "82", "446", "24", null, null, this.div_11.Tab01.tab05);
            obj.set_taborder("53");
            obj.set_text("저장품 ( 재고 관리 대상 품목, 출고요청에 의한 불출 처리 품목 )");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.getSetter("objNm").set("저장품여부");
            this.div_11.Tab01.tab05.addChild(obj.name, obj);
            obj = new CheckBox("cbContract", "absolute", "133", "201", "881", "24", null, null, this.div_11.Tab01.tab05);
            obj.set_taborder("55");
            obj.set_text("계약단가 고정 ( 단가계약에 의한 일별 단가 적용 예외로 협력사, 단가, 계약일자 직접 지정 )");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.getSetter("objNm").set("계약단가고정여부");
            this.div_11.Tab01.tab05.addChild(obj.name, obj);
            obj = new CheckBox("cbBarcode", "absolute", "133", "52", "881", "24", null, null, this.div_11.Tab01.tab05);
            obj.set_taborder("56");
            obj.set_text("통합 바코드 발행대상");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.getSetter("objNm").set("통합바코드");
            this.div_11.Tab01.tab05.addChild(obj.name, obj);
            obj = new CheckBox("cbAssect01", "absolute", "133", "83", "506", "24", null, null, this.div_11.Tab01.tab05);
            obj.set_taborder("59");
            obj.set_text("자산관리대상 ( 감가상각 대상 )");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.getSetter("objNm").set("자산관리대상");
            this.div_11.Tab01.tab05.addChild(obj.name, obj);
            obj = new Static("staDist", "absolute", "0", "37", "117", "199", null, null, this.div_11.Tab01.tab05);
            obj.set_taborder("60");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("총금액");
            this.div_11.Tab01.tab05.addChild(obj.name, obj);
            obj = new MaskEdit("meStdSugar", "absolute", "458", "142", "100", "24", null, null, this.div_11.Tab01.tab05);
            obj.set_taborder("61");
            obj.getSetter("objNm").set("당도");
            this.div_11.Tab01.tab05.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "560", "142", "44", "24", null, null, this.div_11.Tab01.tab05);
            obj.set_taborder("62");
            obj.set_text("Brix");
            this.div_11.Tab01.tab05.addChild(obj.name, obj);
            obj = new CheckBox("cbUse", "absolute", "657", "9", "446", "24", null, null, this.div_11.Tab01.tab05);
            obj.set_taborder("63");
            obj.set_text("미사용");
            obj.set_value("N");
            obj.set_truevalue("N");
            obj.set_falsevalue("Y");
            obj.getSetter("objNm").set("사용여부");
            this.div_11.Tab01.tab05.addChild(obj.name, obj);
            obj = new Tabpage("tabp04", this.div_11.Tab01);
            obj.set_text("첨부파일");
            obj.set_url("CCOMP::CompNFileUpDown.xfdl");
            obj.getSetter("objNm").set("첨부파일");
            this.div_11.Tab01.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1202, 622, this.div_2,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.set_scrollbars("none");
            		p.getSetter("objNm").set("DIV_속성그리드상단");

            	}
            );
            this.div_2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_21,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.set_text("Div00");
            		p.getSetter("objNm").set("Div_속성그리드");

            	}
            );
            this.div_21.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 34, this.div_0,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.set_cssclass("div_WF_SearchBg");
            		p.getSetter("objNm").set("DIV_최상단");

            	}
            );
            this.div_0.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.div_1,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("7");
            		p.getSetter("objNm").set("DIV_헤더타이");

            	}
            );
            this.div_1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1042, 218, this.div_11.Tab01.tabp01,
            	//-- Layout function
            	function(p) {
            		p.set_text("기본정보");
            		p.set_scrollbars("none");
            		p.getSetter("lbcd").set("");
            		p.getSetter("objNm").set("기본정보");

            	}
            );
            this.div_11.Tab01.tabp01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_11.Tab01.tabp03,
            	//-- Layout function
            	function(p) {
            		p.set_text("요청사항");
            		p.getSetter("objNm").set("특이사항");

            	}
            );
            this.div_11.Tab01.tabp03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_11.Tab01.tab05,
            	//-- Layout function
            	function(p) {
            		p.set_text("운영단위별 구매정보");

            	}
            );
            this.div_11.Tab01.tab05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 335, this.div_11,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("8");
            		p.getSetter("objNm").set("DIV_헤더상");

            	}
            );
            this.div_11.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1220, 800, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("구매요청작성");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item8","div_0.edtPrNo","value","dsBasicInfo","MTRL_REQ_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","div_11.Tab01.tabp01.edtMtrlCd","value","dsBasicInfo","MTRL_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_11.Tab01.tabp01.edtMtrlNm","value","dsBasicInfo","MTRL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","div_11.Tab01.tabp01.edtMtrlSpec","value","dsBasicInfo","SPEC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","div_11.Tab01.tabp01.cbMtrlGrp1","value","dsBasicInfo","LRG_CLS_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","div_11.Tab01.tabp01.cbMtrlGrp2","value","dsBasicInfo","MDL_CLS_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","div_11.Tab01.tabp01.cbMtrlGrp3","value","dsBasicInfo","SML_CLS_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_11.Tab01.tabp01.cboCdUnit","value","dsBasicInfo","CD_PUR_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","div_11.Tab01.tabp01.mePrAmt00","value","dsBasicInfo","PACK_QTY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","div_11.Tab01.tabp01.cboCdUnit01","value","dsBasicInfo","CD_PACK_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","div_11.Tab01.tabp01.CheckBox00","value","dsBasicInfo","ALT_TOT_PUR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","div_11.Tab01.tabp01.Radio00","value","dsBasicInfo","INT_NTAX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","div_11.Tab01.tabp01.edtUserId","value","dsBasicInfo","REQR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","div_11.Tab01.tabp01.edtUserNm","value","dsBasicInfo","REQR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","div_11.Tab01.tabp01.edSubCd","value","dsBasicInfo","SVO_MTRL_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","div_11.Tab01.tabp01.edtSubNm","value","dsBasicInfo","SVO_MTRL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","div_11.Tab01.tabpage5.edt_grAcntCdMgmt","value","dsBasicInfo","GR_ACNT_CD_MGMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","div_11.Tab01.tabpage5.edt_grAcntNmMgmt","value","dsBasicInfo","GR_ACNT_CD_MGMT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","div_11.Tab01.tabpage5.edt_grAcntCdBiz","value","dsBasicInfo","GR_ACNT_CD_BIZ");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","div_11.Tab01.tabpage5.edt_grAcntNmBiz","value","dsBasicInfo","GR_ACNT_CD_BIZ_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","div_11.Tab01.tabpage5.edt_outItemAccBiz","value","dsBasicInfo","OUT_ITEM_ACC_BIZ");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","div_11.Tab01.tabpage5.edt_outItemAccMgmt","value","dsBasicInfo","OUT_ITEM_ACC_MGMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","div_11.Tab01.tabpage5.edt_edt_outItemAccMgmtNm","value","dsBasicInfo","OUT_ITEM_ACC_MGMT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","div_11.Tab01.tabpage5.edt_outItemAccBizNm","value","dsBasicInfo","OUT_ITEM_ACC_BIZ_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","div_11.Tab01.tabpage5.me_PrAmt03","value","dsBasicInfo","OVER_GR_RATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","div_11.Tab01.tabpage5.CheckBox01","value","dsBasicInfo","ALT_DDATE_MGT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","div_11.Tab01.tabpage5.me_PrAmt04","value","dsBasicInfo","DLV_DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","div_11.Tab01.tabpage5.CheckBox02","value","dsBasicInfo","ALT_SC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","div_11.Tab01.tabpage5.CheckBox03","value","dsBasicInfo","ALT_MEAL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","div_11.Tab01.tabpage5.CheckBox04","value","dsBasicInfo","ALT_CATALOG");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","div_11.Tab01.tabpage5.CheckBox00","value","dsBasicInfo","ALT_INVNTRY_MGMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","div_11.Tab01.tabpage5.CheckBox06","value","dsBasicInfo","ALT_WASSET");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","div_11.Tab01.tabpage5.CheckBox10","value","dsBasicInfo","ALT_FIXED_CONT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","div_11.Tab01.tabpage5.CheckBox05","value","dsBasicInfo","ALT_BARCD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","div_11.Tab01.tabpage5.CheckBox07","value","dsBasicInfo","ALT_FASSET");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","div_11.Tab01.tabpage5.CheckBox08","value","dsBasicInfo","ALT_RENT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","div_11.Tab01.tabpage5.CheckBox09","value","dsBasicInfo","ALT_FASSET_MGT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","div_11.Tab01.tabpage5.MaskEdit00","value","dsBasicInfo","STD_SUGAR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","div_11.Tab01.tabpage5.CheckBox11","value","dsBasicInfo","ALT_USE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_2Vi","div_2","visible","dsObjBindVi","div_2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_2En","div_2","enable","dsObjBindEn","div_2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnAttrAddVi","div_2.btnAttrAdd","visible","dsObjBindVi","btnAttrAdd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnAttrAddEn","div_2.btnAttrAdd","enable","dsObjBindEn","btnAttrAdd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnAttrDelVi","div_2.btnAttrDel","visible","dsObjBindVi","btnAttrDel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnAttrDelEn","div_2.btnAttrDel","enable","dsObjBindEn","btnAttrDel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_0Vi","div_0","visible","dsObjBindVi","div_0");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_0En","div_0","enable","dsObjBindEn","div_0");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPrNoVi","div_0.edtPrNo","visible","dsObjBindVi","edtPrNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPrNoEn","div_0.edtPrNo","readonly","dsObjBindEn","edtPrNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btn_App_PrVi","div_0.btn_App_Pr","visible","dsObjBindVi","btn_App_Pr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btn_App_PrEn","div_0.btn_App_Pr","enable","dsObjBindEn","btn_App_Pr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_1Vi","div_1","visible","dsObjBindVi","div_1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_1En","div_1","enable","dsObjBindEn","div_1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_11Vi","div_11","visible","dsObjBindVi","div_11");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_11En","div_11","enable","dsObjBindEn","div_11");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab01Vi","div_11.Tab01","visible","dsObjBindVi","Tab01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab01En","div_11.Tab01","enable","dsObjBindEn","Tab01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp01Vi","div_11.Tab01.tabp01","visible","dsObjBindVi","tabp01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp01En","div_11.Tab01.tabp01","enable","dsObjBindEn","tabp01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtMtrlCdVi","div_11.Tab01.tabp01.edtMtrlCd","visible","dsObjBindVi","edtMtrlCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtMtrlCdEn","div_11.Tab01.tabp01.edtMtrlCd","readonly","dsObjBindEn","edtMtrlCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtMtrlNmVi","div_11.Tab01.tabp01.edtMtrlNm","visible","dsObjBindVi","edtMtrlNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtMtrlNmEn","div_11.Tab01.tabp01.edtMtrlNm","readonly","dsObjBindEn","edtMtrlNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnSetSpecVi","div_11.Tab01.tabp01.btnSetSpec","visible","dsObjBindVi","btnSetSpec");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnSetSpecEn","div_11.Tab01.tabp01.btnSetSpec","enable","dsObjBindEn","btnSetSpec");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtMtrlSpecVi","div_11.Tab01.tabp01.edtMtrlSpec","visible","dsObjBindVi","edtMtrlSpec");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtMtrlSpecEn","div_11.Tab01.tabp01.edtMtrlSpec","readonly","dsObjBindEn","edtMtrlSpec");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Combo00Vi","div_11.Tab01.tabp01.cbMtrlGrp1","visible","dsObjBindVi","Combo00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Combo00En","div_11.Tab01.tabp01.cbMtrlGrp1","readonly","dsObjBindEn","Combo00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Combo01Vi","div_11.Tab01.tabp01.cbMtrlGrp2","visible","dsObjBindVi","Combo01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Combo01En","div_11.Tab01.tabp01.cbMtrlGrp2","readonly","dsObjBindEn","Combo01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Combo02Vi","div_11.Tab01.tabp01.cbMtrlGrp3","visible","dsObjBindVi","Combo02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Combo02En","div_11.Tab01.tabp01.cbMtrlGrp3","readonly","dsObjBindEn","Combo02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Edit00Vi","div_11.Tab01.tabp01.edMtrlGrpCd","visible","dsObjBindVi","Edit00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Edit00En","div_11.Tab01.tabp01.edMtrlGrpCd","readonly","dsObjBindEn","Edit00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboCdUnitVi","div_11.Tab01.tabp01.cboCdUnit","visible","dsObjBindVi","cboCdUnit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboCdUnitEn","div_11.Tab01.tabp01.cboCdUnit","readonly","dsObjBindEn","cboCdUnit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mePrAmt00Vi","div_11.Tab01.tabp01.mePrAmt00","visible","dsObjBindVi","mePrAmt00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mePrAmt00En","div_11.Tab01.tabp01.mePrAmt00","readonly","dsObjBindEn","mePrAmt00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboCdUnit01Vi","div_11.Tab01.tabp01.cboCdUnit01","visible","dsObjBindVi","cboCdUnit01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboCdUnit01En","div_11.Tab01.tabp01.cboCdUnit01","readonly","dsObjBindEn","cboCdUnit01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("CheckBox00Vi","div_11.Tab01.tabp01.CheckBox00","visible","dsObjBindVi","CheckBox00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("CheckBox00En","div_11.Tab01.tabp01.CheckBox00","readonly","dsObjBindEn","CheckBox00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Radio00Vi","div_11.Tab01.tabp01.Radio00","visible","dsObjBindVi","Radio00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Radio00En","div_11.Tab01.tabp01.Radio00","readonly","dsObjBindEn","Radio00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtUserIdVi","div_11.Tab01.tabp01.edtUserId","visible","dsObjBindVi","edtUserId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtUserIdEn","div_11.Tab01.tabp01.edtUserId","readonly","dsObjBindEn","edtUserId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtUserNmVi","div_11.Tab01.tabp01.edtUserNm","visible","dsObjBindVi","edtUserNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtUserNmEn","div_11.Tab01.tabp01.edtUserNm","readonly","dsObjBindEn","edtUserNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edSubCdVi","div_11.Tab01.tabp01.edSubCd","visible","dsObjBindVi","edSubCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edSubCdEn","div_11.Tab01.tabp01.edSubCd","readonly","dsObjBindEn","edSubCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSubNmVi","div_11.Tab01.tabp01.edtSubNm","visible","dsObjBindVi","edtSubNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSubNmEn","div_11.Tab01.tabp01.edtSubNm","readonly","dsObjBindEn","edtSubNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnMroSearchVi","div_11.Tab01.tabp01.btnMroSearch","visible","dsObjBindVi","btnMroSearch");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnMroSearchEn","div_11.Tab01.tabp01.btnMroSearch","enable","dsObjBindEn","btnMroSearch");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp03Vi","div_11.Tab01.tabp03","visible","dsObjBindVi","tabp03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp03En","div_11.Tab01.tabp03","enable","dsObjBindEn","tabp03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("taRfqRemarkVi","div_11.Tab01.tabp03.taRfqRemark","visible","dsObjBindVi","taRfqRemark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("taRfqRemarkEn","div_11.Tab01.tabp03.taRfqRemark","readonly","dsObjBindEn","taRfqRemark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tab05Vi","div_11.Tab01.tab05","visible","dsObjBindVi","tab05");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tab05En","div_11.Tab01.tab05","enable","dsObjBindEn","tab05");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtGrAcntCdMgmtVi","div_11.Tab01.tab05.edtGrAcntCdMgmt","visible","dsObjBindVi","edtGrAcntCdMgmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtGrAcntCdMgmtEn","div_11.Tab01.tab05.edtGrAcntCdMgmt","readonly","dsObjBindEn","edtGrAcntCdMgmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtGrAcntNmMgmtVi","div_11.Tab01.tab05.edtGrAcntNmMgmt","visible","dsObjBindVi","edtGrAcntNmMgmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtGrAcntNmMgmtEn","div_11.Tab01.tab05.edtGrAcntNmMgmt","readonly","dsObjBindEn","edtGrAcntNmMgmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnGrMgmtVi","div_11.Tab01.tab05.btnGrMgmt","visible","dsObjBindVi","btnGrMgmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnGrMgmtEn","div_11.Tab01.tab05.btnGrMgmt","enable","dsObjBindEn","btnGrMgmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtGrAcntCdBizVi","div_11.Tab01.tab05.edtGrAcntCdBiz","visible","dsObjBindVi","edtGrAcntCdBiz");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtGrAcntCdBizEn","div_11.Tab01.tab05.edtGrAcntCdBiz","readonly","dsObjBindEn","edtGrAcntCdBiz");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtGrAcntNmBizVi","div_11.Tab01.tab05.edtGrAcntNmBiz","visible","dsObjBindVi","edtGrAcntNmBiz");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtGrAcntNmBizEn","div_11.Tab01.tab05.edtGrAcntNmBiz","readonly","dsObjBindEn","edtGrAcntNmBiz");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnGrBizVi","div_11.Tab01.tab05.btnGrBiz","visible","dsObjBindVi","btnGrBiz");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnGrBizEn","div_11.Tab01.tab05.btnGrBiz","enable","dsObjBindEn","btnGrBiz");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtOutItemAccBizVi","div_11.Tab01.tab05.edtOutItemAccBiz","visible","dsObjBindVi","edtOutItemAccBiz");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtOutItemAccBizEn","div_11.Tab01.tab05.edtOutItemAccBiz","readonly","dsObjBindEn","edtOutItemAccBiz");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtOutItemAccMgmtVi","div_11.Tab01.tab05.edtOutItemAccMgmt","visible","dsObjBindVi","edtOutItemAccMgmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtOutItemAccMgmtEn","div_11.Tab01.tab05.edtOutItemAccMgmt","readonly","dsObjBindEn","edtOutItemAccMgmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtOutItemAccMgmtNmVi","div_11.Tab01.tab05.edtOutItemAccMgmtNm","visible","dsObjBindVi","edtOutItemAccMgmtNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtOutItemAccMgmtNmEn","div_11.Tab01.tab05.edtOutItemAccMgmtNm","readonly","dsObjBindEn","edtOutItemAccMgmtNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtOutItemAccBizNmVi","div_11.Tab01.tab05.edtOutItemAccBizNm","visible","dsObjBindVi","edtOutItemAccBizNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtOutItemAccBizNmEn","div_11.Tab01.tab05.edtOutItemAccBizNm","readonly","dsObjBindEn","edtOutItemAccBizNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnOutBizVi","div_11.Tab01.tab05.btnOutBiz","visible","dsObjBindVi","btnOutBiz");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnOutBizEn","div_11.Tab01.tab05.btnOutBiz","enable","dsObjBindEn","btnOutBiz");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnOutMgmtVi","div_11.Tab01.tab05.btnOutMgmt","visible","dsObjBindVi","btnOutMgmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnOutMgmtEn","div_11.Tab01.tab05.btnOutMgmt","enable","dsObjBindEn","btnOutMgmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("me_PrAmt03Vi","div_11.Tab01.tab05.me_PrAmt03","visible","dsObjBindVi","me_PrAmt03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("me_PrAmt03En","div_11.Tab01.tab05.me_PrAmt03","readonly","dsObjBindEn","me_PrAmt03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cbDdateVi","div_11.Tab01.tab05.cbDdate","visible","dsObjBindVi","cbDdate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cbDdateEn","div_11.Tab01.tab05.cbDdate","readonly","dsObjBindEn","cbDdate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("me_PrAmt04Vi","div_11.Tab01.tab05.me_PrAmt04","visible","dsObjBindVi","me_PrAmt04");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("me_PrAmt04En","div_11.Tab01.tab05.me_PrAmt04","readonly","dsObjBindEn","me_PrAmt04");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cbSugarVi","div_11.Tab01.tab05.cbSugar","visible","dsObjBindVi","cbSugar");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cbSugarEn","div_11.Tab01.tab05.cbSugar","readonly","dsObjBindEn","cbSugar");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cbDirectPurVi","div_11.Tab01.tab05.cbDirectPur","visible","dsObjBindVi","cbDirectPur");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cbDirectPurEn","div_11.Tab01.tab05.cbDirectPur","readonly","dsObjBindEn","cbDirectPur");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cbCatalogVi","div_11.Tab01.tab05.cbCatalog","visible","dsObjBindVi","cbCatalog");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cbCatalogEn","div_11.Tab01.tab05.cbCatalog","readonly","dsObjBindEn","cbCatalog");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cbStorageVi","div_11.Tab01.tab05.cbStorage","visible","dsObjBindVi","cbStorage");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cbStorageEn","div_11.Tab01.tab05.cbStorage","readonly","dsObjBindEn","cbStorage");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cbContractVi","div_11.Tab01.tab05.cbContract","visible","dsObjBindVi","cbContract");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cbContractEn","div_11.Tab01.tab05.cbContract","readonly","dsObjBindEn","cbContract");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cbBarcodeVi","div_11.Tab01.tab05.cbBarcode","visible","dsObjBindVi","cbBarcode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cbBarcodeEn","div_11.Tab01.tab05.cbBarcode","readonly","dsObjBindEn","cbBarcode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cbAssect01Vi","div_11.Tab01.tab05.cbAssect01","visible","dsObjBindVi","cbAssect01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cbAssect01En","div_11.Tab01.tab05.cbAssect01","readonly","dsObjBindEn","cbAssect01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("meStdSugarVi","div_11.Tab01.tab05.meStdSugar","visible","dsObjBindVi","meStdSugar");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("meStdSugarEn","div_11.Tab01.tab05.meStdSugar","readonly","dsObjBindEn","meStdSugar");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cbUseVi","div_11.Tab01.tab05.cbUse","visible","dsObjBindVi","cbUse");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cbUseEn","div_11.Tab01.tab05.cbUse","readonly","dsObjBindEn","cbUse");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp05Vi","div_11.Tab01.tabp05","visible","dsObjBindVi","tabp05");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp05En","div_11.Tab01.tabp05","enable","dsObjBindEn","tabp05");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item40","div_11.Tab01.tab05.edtGrAcntCdBiz","value","dsBasicInfo","GR_ACNT_CD_BIZ");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item42","div_11.Tab01.tab05.edtGrAcntCdMgmt","value","dsBasicInfo","GR_ACNT_CD_MGMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item43","div_11.Tab01.tab05.edtOutItemAccMgmt","value","dsBasicInfo","OUT_ITEM_ACC_MGMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item44","div_11.Tab01.tab05.edtOutItemAccBiz","value","dsBasicInfo","OUT_ITEM_ACC_BIZ");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item45","div_11.Tab01.tab05.edtOutItemAccMgmtNm","value","dsBasicInfo","OUT_ITEM_ACC_MGMT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item46","div_11.Tab01.tab05.edtOutItemAccBizNm","value","dsBasicInfo","OUT_ITEM_ACC_BIZ_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item47","div_11.Tab01.tab05.edtGrAcntNmMgmt","value","dsBasicInfo","GR_ACNT_CD_MGMT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item48","div_11.Tab01.tab05.edtGrAcntNmBiz","value","dsBasicInfo","GR_ACNT_CD_BIZ_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item49","div_11.Tab01.tab05.me_PrAmt04","value","dsBasicInfo","DLV_DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item50","div_11.Tab01.tab05.me_PrAmt03","value","dsBasicInfo","OVER_GR_RATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item51","div_11.Tab01.tab05.cbUse","value","dsBasicInfo","ALT_USE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item52","div_11.Tab01.tab05.cbBarcode","value","dsBasicInfo","ALT_BARCD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item53","div_11.Tab01.tab05.cbAssect01","value","dsBasicInfo","ALT_FASSET");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item54","div_11.Tab01.tab05.cbStorage","value","dsBasicInfo","ALT_INVNTRY_MGMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item55","div_11.Tab01.tab05.cbDdate","value","dsBasicInfo","ALT_DDATE_MGT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item56","div_11.Tab01.tab05.cbDirectPur","value","dsBasicInfo","ALT_MEAL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item57","div_11.Tab01.tab05.cbSugar","value","dsBasicInfo","ALT_SC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item58","div_11.Tab01.tab05.meStdSugar","value","dsBasicInfo","STD_SUGAR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item59","div_11.Tab01.tab05.cbCatalog","value","dsBasicInfo","ALT_CATALOG");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item60","div_11.Tab01.tab05.cbContract","value","dsBasicInfo","ALT_FIXED_CONT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item61","div_11.Tab01.tabp03.taRfqRemark","value","dsBasicInfo","RMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item38","div_0.staStts","text","dsBasicInfo","CD_MTRL_REQ_STTS_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item39","div_11.Tab01.tabp01.btnSetSub","visible","dsObjBindVi","btnSetSpec");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item62","div_11.Tab01.tabp01.btnSetSub","enable","dsObjBindEn","btnSetSpec");
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
        this.registerScript("BMtrlReqDetail.xfdl", function(exports) {
        /**
         * @파일명       	: readPr.xfdl
         * @생성자       	: 박소진
         * @생성일자     	: 2019. 04. 29
         * @설명			: BPur 디테일
         * @최종수정자		: 박소진
         * @최종수정일자	: 
        */

        
        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function(){

        	var param = [
        				{code:"SM11", sSelectType:"S"} 		// 자재구분
        				,{code:"SM10"} 	// 자재등록요청상태					
        				,{code:"CM11", sSelectType:"S"} 	// 단위		
        				];
        	gfnGetCode(this, param);
        	
        }

        /**
          * @함수명	: fnRemote
          * @desc     	: 리모콘 버튼 생성
          */
        this.fnRemote = function()
        {
        	var sArg = {btnName:"품목등록요청", clickEventFunc:"fnMtrlReq"};		   
        	gfnRemote(this, sArg);
        }

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
        	@함수명	fnFold
        	@desc   	타이틀 접기/펼치기 기능
        **/
        this.fnFold = function()
        {
        	/*
        		상단에서부터 div 순서대로 기입.
        		ttl:접기/펼치기 클릭 하는 컴포넌트, body:실제로 접혀지거나 펼쳐지는 컴포넌트, initFold:true면 접는다.
        	*/
        	var sArg = [ 
        //				{ttl:this.div_1.staViewCompTitle00 , body:this.div_11, initFold:true}	//기본정보
        				{ttl:this.div_1.staViewCompTitle00 , body:this.div_11}	//기본정보
        				,{ttl:this.div_2.staViewCompTitle00 , body:this.div_21}	//품목정보
        		   ];
         	gfnDivFold(this, sArg);
        	
        	//그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기(그리드 컴포넌트, 페이징div 컴포넌트, 폼오브젝트(this))
         	gfnSetGrdFunc(this.div_21.gridAttrList , '', this);
        }

        

        /**
          * @함수명	: fnFormOnload
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.LoadEventInfo(이벤트변수)
          * @desc     	: 화면이 로딩 될때마다 실행되는 이벤트 
          */
        this.fnFormOnload = function(obj,e)
        {
            //그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기(그리드 컴포넌트, 페이징div 컴포넌트, 폼오브젝트(this))
         	//gfnSetGrdFunc(this.div_31.grdPoItem , '', this);
        	//gfnSetGrdFunc(this.div_31.grdPoItem , this.div_31.divPaging , this);

        	//gfnMakeFileDs(this);
        	this.fnFold();
                                 
        	//품목등록요청현황에서 넘겨받는 파라미터
        	this.dsBasicInfo.setColumn(0, "MTRL_REQ_NO"			, gfnGetTmprData("MTRL_REQ_NO"));
        	this.dsBasicInfo.setColumn(0, "BRANCH_CD"			, gfnGetTmprData("BRANCH_CD"));
        	
        	gfnClearTmprData(); 
        	
        	
        	if(!gfnIsNull(this.dsBasicInfo.getColumn(0,"MTRL_REQ_NO"))) {
        		this.fnSearch();
        	} else {
        		this.fnBtnSetView();
        	}

        		//품목분류설정
        	this.fnSearchMtrlGrp();

        }

        
        /**
        	@function	fn_preSearch()
        	@desc   	조회 전 처리
        */
        this.fnPreSearch = function(arg)
        {
        	// 품목등록요청 작성화면
        		if(this.dsBasicInfo.getRowCount()<1){
        			this.dsBasicInfo.addRow();
        		}
        		
        		if(arg != "" && arg != null){
        			this.dsBasicInfo.setColumn(0,"PR_NO",arg);
        		}

        	
        	return true;
        }

        /**
        	@function	fn_commSrch()
        	@desc   	조회 프로세스
        */
        this.fnSearch = function()
        {
        	var sSvcID = "search";
        	var sController = "epro.mtrl.service.BMtrlService.readMtrlReq";
        	var sInDatasets = "dsBasicInfo=dsBasicInfo:A";
        	var sOutDatasets = "dsBasicInfo=dsBasicInfo dsAttr=dsAttr";
        	var sCallbackFunc = "fnTrCallBack";
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        

        //팝업콜백
        this.fnPopCallBack = function(sPopupId,rtn){ //닫기버튼 눌렀을때 팝업에서 넘겨온 값
        	if(gfnIsNull(rtn)) return;
        	
        	this.dsReturn.clear(); //팝업에서 넘겨온 값을 ㅇ여기서 쓰기 우ㅣ해 임시데이터셋 만들어준다.
        	this.dsReturn.loadXML(rtn);//팝업 닫힐때 xml정보 넘겨줌. 값이 있으면 dsReturn라는 임시데이터셋에 값세팅.

        	switch(sPopupId){
        		//입고계정(영업)
        		case "btnGrBiz":
        			if(!gfnIsNull(this.dsReturn.getColumn(0,"ACNT_CD"))){
        				this.dsBasicInfo.setColumn(0, "GR_ACNT_CD_BIZ", this.dsReturn.getColumn(i, "ACNT_CD"));
        				this.dsBasicInfo.setColumn(0, "GR_ACNT_CD_BIZ_NM", this.dsReturn.getColumn(i, "ACNT_NM"));
        			}
        			break;
        		//입고계정(관리)
        		case "btnGrMgmt":
        			if(!gfnIsNull(this.dsReturn.getColumn(0,"ACNT_CD"))){
        				this.dsBasicInfo.setColumn(0, "GR_ACNT_CD_MGMT", this.dsReturn.getColumn(i, "ACNT_CD"));
        				this.dsBasicInfo.setColumn(0, "GR_ACNT_CD_MGMT_NM", this.dsReturn.getColumn(i, "ACNT_NM"));
        			}
        			break;
        		//출고계정(영업)
        		case "btnOutBiz":
        			if(!gfnIsNull(this.dsReturn.getColumn(0,"ACNT_CD"))){
        				this.dsBasicInfo.setColumn(0, "OUT_ITEM_ACC_BIZ", this.dsReturn.getColumn(i, "ACNT_CD"));
        				this.dsBasicInfo.setColumn(0, "OUT_ITEM_ACC_BIZ_NM", this.dsReturn.getColumn(i, "ACNT_NM"));
        			}
        			break;
        		//출고계정(관리)
        		case "btnOutMgmt":
        			if(!gfnIsNull(this.dsReturn.getColumn(0,"ACNT_CD"))){
        				this.dsBasicInfo.setColumn(0, "OUT_ITEM_ACC_MGMT", this.dsReturn.getColumn(i, "ACNT_CD"));
        				this.dsBasicInfo.setColumn(0, "OUT_ITEM_ACC_MGMT_NM", this.dsReturn.getColumn(i, "ACNT_NM"));
        			}
        			break;
         			
        		default:
        		break;	
        	}
        }

        
         
        /**
        	@function	fnSave()
        	@param		type {String} app:결재팝업호출전 저장. 그외:임시저장.
        	@desc   	(공통버튼)저장
        */
        this.fnSave = function()
        {
        	if( !( gfnIsNull(this.dsBasicInfo.getColumn(0, "CD_MTRL_REQ_STTS")) || this.dsBasicInfo.getColumn(0,"CD_MTRL_REQ_STTS") == "SM10WRI" )){
        		alert("작성중인 상태가 아니라 저장할 수 없습니다.");
        		return false;
        	}
        	//품명 체크
        	if(gfnIsNull(this.dsBasicInfo.getColumn(0,"MTRL_NM"))){  
        		alert("품명을 입력 하시기 바랍니다.");
        		return false;
        	}
        	//품목속성 체크
        	if(this.dsAttr.rowcount==0){
        		alert("품목속성을 1개이상 지정 하시기 바랍니다.");
        		return false;
        	}
        	
        	//속성 필수 체크
        	for(var i=0;i<this.dsAttr.rowcount;i++){
        		if(gfnIsNull(this.dsAttr.getColumn(i,"ATTR_ID"))) {
        			alert("품목의 속성은 반드시 지정하시기 바랍니다.");	
        			return false;
        		} 
        	}	
        	if(gfnIsNull(this.dsBasicInfo.getColumn(0, "CD_MTRL_REQ_STTS"))) this.dsBasicInfo.setColumn(0,"CD_MTRL_REQ_STTS","SM10WRI");
        	
        	var sSvcID = "save";
        	var sController = "epro.mtrl.service.BMtrlService.saveMtrlReq";
        	var sInDatasets = "dsBasicInfo=dsBasicInfo:A dsAttr=dsAttr:A";
        	var sOutDatasets = "dsBasicInfo=dsBasicInfo";
        	var sCallbackFunc = "fnTrCallBack";
        	
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);

        }

        

        /**
        	@function	fnPrReq()
        	@param		inSvcID {String} 
        	@desc   	임시저장을 제외한 나머지 저장
        */
        this.fnSaveReq = function()
        {
        	if(this.fnPreSave()) {
        		if(!gfnConfirm("등록요청하시겠습니까?")) return;
        		
        		this.dsBasicInfo.setColumn(0,"CD_MTRL_REQ_STTS", "SM10REQ");
        		var sSvcID = "mtrlReq";
        		var sController = "epro.mtrl.service.BMtrlService.saveMtrlReq";
        		var sInDatasets = "dsBasicInfo=dsBasicInfo:A dsAttr=dsAttr:A";
        		var sOutDatasets = "dsBasicInfo=dsBasicInfo";
        		var sCallbackFunc = "fnTrCallBack";
        		gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
            }
        }

        /**
        	@function	fnSearchMtrlGrp()
        	@param		
        	@desc   	자재그룹(대,중,소) 조회 및 속성마스터 조회
        */
        this.fnSearchMtrlGrp = function()
        {
        	var sSvcID = "MtrlGrp";
        	var sController = "epro.com.service.BComService.searchComMtrlCls";
        	var sInDatasets = "dsCond=dsCond:A";
        	var sOutDatasets = "dsMtrlType1=dsMtrlType1 dsMtrlType2=dsMtrlType2 dsMtrlType3=dsMtrlType3 dsComboAttr=dsComboAttr";
        	var sCallbackFunc = "fnTrCallBack";
        	
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
          * @함수명  : fnTrCallBack
          * @input    : strSvcID ,strErrCd ,strErrMsg
          * @return   : 
          * @desc     : 트랜잭션 콜백
          */
        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	if(strErrCd < 0){
        		return;
        	}	
        	
        	
        	switch(strSvcID){				
         		//임시저장
         		case "save" :	
        			alert("저장되었습니다.");
        			this.fnSearch();
        			break;		
        		
        		//임시저장
         		case "mtrlReq" :	
        			alert("등록요청되었습니다.");
        			this.fnSearch();
        			break;		
        			
          		//품목분류검색후 중분류, 소분류 설정 
         		case "MtrlGrp" :	
        			this.dsMtrlType2.filter("UPMTRL_GRP_ID =="+this.div_11.Tab01.tabp01.cbMtrlGrp1.value);
        			this.dsMtrlType3.filter("UPMTRL_GRP_ID =="+this.div_11.Tab01.tabp01.cbMtrlGrp2.value);
        			
        			break;		
        		case "searchMtrlAttr" :
        			for(var i=0; i<this.dsMtrlGrpSpec.rowcount; i++){
        				this.dsAttr.addRow();
        				this.dsAttr.copyRow(i,this.dsMtrlGrpSpec,i);
        				}
        			break;
        		
        		default:
        			this.fnBtnSetView();
        			break;		
         	}
         }

        

        /**
          * @함수명  : fnPreSave
          * @input    : 
          * @return   : 
          * @desc     : 저장전 유효성체크
          */
        this.fnPreSave = function(type)
        {	
        	//사용자 유효성 체크 추가
         	var arrUserErr = [];

        	//품목명 체크
        	if(gfnIsNull(this.dsBasicInfo.getColumn(0,"MTRL_NM"))){
        		var sMsg = "품목명은 필수입니다.";	
        		var objParam = {agv_msg:sMsg, agv_type:"필수입력오류", agv_isEs:"Y" };
        		arrUserErr.push(objParam);
        	}
        	
        	//품목분류 체크
        	if(gfnIsNull(this.dsBasicInfo.getColumn(0,"SML_CLS_ID"))){  
        		var sMsg = "품목분류는 필수입니다.";	
        		var objParam = {agv_msg:sMsg, agv_type:"필수입력오류", agv_isEs:"Y" };
        		arrUserErr.push(objParam);
        	}

        	//구매단위 체크
        	if(gfnIsNull(this.dsBasicInfo.getColumn(0,"CD_PUR_UNIT"))){  
        		var sMsg = "구매단위는 필수입니다.";	
        		var objParam = {agv_msg:sMsg, agv_type:"필수입력오류", agv_isEs:"Y" };
        		arrUserErr.push(objParam);
        	}

        	//포장수량단위 체크
        	if(gfnIsNull(this.dsBasicInfo.getColumn(0,"CD_PACK_UNIT"))||gfnIsNull(this.dsBasicInfo.getColumn(0,"PACK_QTY"))){  
        		var sMsg = "포장수량/단위는 필수입니다.";	
        		var objParam = {agv_msg:sMsg, agv_type:"필수입력오류", agv_isEs:"Y" };
        		arrUserErr.push(objParam);
        	}
        	
        	// 필수항목 체크
        	if(!gfnValidate(this, false, arrUserErr)){
        		return false;
        	}
        	return true;
        }

        /**
        	@function	fnBtnSetView()
        	@desc   	상태별 버튼 View 제어
        */
        this.fnBtnSetView = function()
        {	
        	//작성중 or 변경가능
        	if(gfnIsNull(this.dsBasicInfo.getColumn(0,"MTRL_REQ_NO")) || "SM10WRI" == this.dsBasicInfo.getColumn(0, "CD_MTRL_REQ_STTS"))
        	{		
        		gfnSetObj("A");
        		this.div_21.gridAttrList.setFormat("MMOD");

        	}		
        	else {
        		gfnSetObj("C");
        		this.div_21.gridAttrList.setFormat("VMOD");
        	}
        }

        
        this.fnAttradd = function(obj,e)
        {
        	var idx = this.dsAttr.addRow();
        	this.dsAttr.setColumn(idx,"ATTR_ID","");
        }

        this.fnAttrDel = function(obj,e)
        {
        	gfnDsChkDel(this.dsAttr);
        }

        /**
          * @함수명  : fnChkChgMtrlGroup
          * @input    : 
          * @return   : 
          * @desc     : 입력모드에서 품목분류가 변경되면 품목속성 변경
          */
        this.fnChkChgMtrlGroup = function()
        {
        	if(this.dsAttr.rowcount != 0)
        	{
        		if(!gfnConfirm("품목분류를 변경하시면 요청된 정보는 초기화됩니다.\계속하시겠습니까?")) return false;	
        		else
        		{
        			this.dsAttr.deleteAll();
        			this.dsBasicInfo.setColumn(0,"SPEC","");
        		}
        	}	
        	return true;
        }	

        /**
          * @함수명  : fnMtrlGrp1Changed
          * @input    : 
          * @return   : 
          * @desc     : 대분류변경처리
          */
        this.fnMtrlGrp1Changed = function(obj,e)
        {
        	if(!this.fnChkChgMtrlGroup()) return;

        	if(obj.value == ""){
        		this.dsMtrlType2.filter("");
        		this.dsMtrlType3.filter("");
        		this.div_11.Tab01.tabp01.cbMtrlGrp2.set_value("");
        		this.div_11.Tab01.tabp01.cbMtrlGrp3.set_value("");
        		this.div_11.Tab01.tabp01.cbMtrlGrp2.set_readonly(true);
        		this.div_11.Tab01.tabp01.cbMtrlGrp3.set_readonly(true);
        		this.div_11.Tab01.tabp01.edMtrlGrpCd.set_value("");
        	}else{
        		this.dsMtrlType2.filter("UP_MTRL_GRP_ID =="+obj.value+" || MTRL_GRP_ID == ''");
        		this.div_11.Tab01.tabp01.cbMtrlGrp2.set_readonly(false);
        		this.div_11.Tab01.tabp01.cbMtrlGrp2.set_value("");
        		this.div_11.Tab01.tabp01.cbMtrlGrp3.set_value("");
        		this.div_11.Tab01.tabp01.cbMtrlGrp3.set_readonly(true);
        		this.div_11.Tab01.tabp01.edMtrlGrpCd.set_value(obj.value);
        	}	
        }

        this.fnMtrlGrp2Changed = function(obj,e)
        {
        	if(!this.fnChkChgMtrlGroup()) return;

        	if(obj.value == ""){
        		this.dsMtrlType3.filter("");
        		this.div_11.Tab01.tabp01.cbMtrlGrp3.set_value("");
        		this.div_11.Tab01.tabp01.cbMtrlGrp3.set_readonly(true);
        	}else{
        		this.dsMtrlType3.filter("UP_MTRL_GRP_ID =="+obj.value+" || MTRL_GRP_ID == ''");
        		this.div_11.Tab01.tabp01.cbMtrlGrp3.set_value("");
        		this.div_11.Tab01.tabp01.cbMtrlGrp3.set_readonly(false);
        		this.div_11.Tab01.tabp01.edMtrlGrpCd.set_value(obj.value);
        	}	
        }

        /**
          * @함수명  : fnMtrlGrp3Changed
          * @input    : 
          * @return   : 
          * @desc     : 소분류변경처리
          */
        this.fnMtrlGrp3Changed = function(obj,e)
        {
        	this.div_11.Tab01.tabp01.edMtrlGrpCd.set_value(obj.value);
        	
        	if(this.dsMtrlGrpId.rowcount == 0) this.dsMtrlGrpId.addRow();
        	
        	if(!this.fnChkChgMtrlGroup()) return;
        	
        	this.dsMtrlGrpId.setColumn(0,"MTRL_GRP_ID",obj.value);
        	
        	var sSvcID = "searchMtrlAttr";
        	var sController = "epro.mtrl.service.BMtrlService.searchMtrlAttr";
        	var sInDatasets = "dsMtrlGrpId=dsMtrlGrpId";
        	var sOutDatasets = "dsMtrlGrpSpec=dsMtrlGrpSpec";
        	var sCallbackFunc = "fnTrCallBack"; 
        	
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc)
            
        }

        
        /**
          * @함수명  : dsAttr_cancolumnchange
          * @input    : 
          * @return   : 
          * @desc     : 속성변경시 중보체크 
          */
        this.dsAttr_cancolumnchange = function(obj,e)
        {
        	var cnt = this.dsAttr.getCaseCount(("ATTR_ID == '"+ e.newvalue+"'"));
        	
        	if(cnt > 0 && e.value != "")
        	{
        		gfnAlert("지정하신 속성이 이미 존재합니다.");
        		return false;
        	}	
        }

        /**
          * @함수명  : Div21_Tab01_tabp01_grid_dtlInfo_oncloseup
          * @input    : 
          * @return   : 
          * @desc     : 속성변경시 중보체크를 위해 DS에 콤보선택시 바로 ds에 업데이트 
          */
        this.Div21_Tab01_tabp01_grid_dtlInfo_oncloseup = function(obj,e)
        {
        	obj.updateToDataset();
        }

        /**
          * @함수명  : srchAccountPop
          * @input    : 
          * @return   : 
          * @desc     : 입출고 계정 지정 팝업
          */
        this.srchAccountPop = function(obj,e)
        {
        		var sArg = {
        				agv_nm : ""
        				};
        		gfnModalPop(this, obj.name, "CPOP::BAcntSrchPopup.xfdl", sArg, "fnPopCallBack", 800, 600);
        }

        

        this.fnSetDetailAttr = function(obj,e)
        {
        	if(this.dsAttr.rowcount==0){
        		alert("품목속성을 지정하시기 바랍니다.");
        		return;
        	}
        	var vStr = "";
        	for(var i=0;i<this.dsAttr.rowcount;i++){
        		if(!gfnIsNull(this.dsAttr.getColumn(i,"ATTR"))) {
        			vStr += this.dsAttr.getColumn(i,"ATTR") + ",";
        		} 
        	}
        	vStr = vStr.substring(0,vStr.length-1);
        	
        	if(!gfnIsNull(this.dsBasicInfo.getColumn(0,"SPEC")) && this.dsBasicInfo.getColumn(0,"SPEC") != vStr){
        		if(!gfnConfirm("기존에 작성된 규격을 품목속성으로 대체합니다. \n적용하시겠습니까?")) return;
        		
        		this.dsBasicInfo.setColumn(0,"SPEC",vStr);
        	} else if(gfnIsNull(this.dsBasicInfo.getColumn(0,"SPEC"))){
        		this.dsBasicInfo.setColumn(0,"SPEC",vStr);
        	} 
        	
        	
        }

        this.fnSetSub = function(obj,e)
        {
        	this.dsBasicInfo.setColumn(0,"SVO_MTRL_ID","");
        	this.dsBasicInfo.setColumn(0,"SVO_MTRL_NM","");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsAttr.addEventHandler("cancolumnchange", this.dsAttr_cancolumnchange, this);
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.div_2.btnAttrAdd.addEventHandler("onclick", this.fnAttradd, this);
            this.div_2.btnAttrDel.addEventHandler("onclick", this.fnAttrDel, this);
            this.div_2.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.div_21.gridAttrList.addEventHandler("oncloseup", this.Div21_Tab01_tabp01_grid_dtlInfo_oncloseup, this);
            this.div_0.btn_App_Pr.addEventHandler("onclick", this.fnSaveReq, this);
            this.div_1.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.div_11.Tab01.addEventHandler("onchanged", this.div_21_Tab01_onchanged, this);
            this.div_11.Tab01.tabp01.edtMtrlCd.addEventHandler("onkeydown", this.Div41_Tab01_tabp01_ed_MatCd_onkeydown, this);
            this.div_11.Tab01.tabp01.edtMtrlCd.addEventHandler("oneditclick", this.Div21_Tab01_tabp01_edt_mtrlCd_oneditclick, this);
            this.div_11.Tab01.tabp01.edtMtrlNm.addEventHandler("onkeydown", this.Div41_Tab01_tabp01_ed_MatNm_onkeydown, this);
            this.div_11.Tab01.tabp01.btnSetSpec.addEventHandler("onclick", this.fnSetDetailAttr, this);
            this.div_11.Tab01.tabp01.edtMtrlSpec.addEventHandler("onkeydown", this.Div41_Tab01_tabp01_ed_MatNm_onkeydown, this);
            this.div_11.Tab01.tabp01.cbMtrlGrp1.addEventHandler("onitemchanged", this.fnMtrlGrp1Changed, this);
            this.div_11.Tab01.tabp01.cbMtrlGrp2.addEventHandler("onitemchanged", this.fnMtrlGrp2Changed, this);
            this.div_11.Tab01.tabp01.cbMtrlGrp3.addEventHandler("onitemchanged", this.fnMtrlGrp3Changed, this);
            this.div_11.Tab01.tabp01.edtUserId.addEventHandler("onkeydown", this.Div41_Tab01_tabp01_ed_MatCd_onkeydown, this);
            this.div_11.Tab01.tabp01.edtUserId.addEventHandler("oneditclick", this.Div21_Tab01_tabp01_edt_mtrlCd_oneditclick, this);
            this.div_11.Tab01.tabp01.edtUserNm.addEventHandler("onkeydown", this.Div41_Tab01_tabp01_ed_MatCd_onkeydown, this);
            this.div_11.Tab01.tabp01.edtUserNm.addEventHandler("oneditclick", this.Div21_Tab01_tabp01_edt_mtrlCd_oneditclick, this);
            this.div_11.Tab01.tabp01.edtSubNm.addEventHandler("onkeydown", this.fn_onkeydown, this);
            this.div_11.Tab01.tabp01.edtSubNm.addEventHandler("ontextchanged", this.fn_ontextchanged, this);
            this.div_11.Tab01.tabp01.btnMroSearch.addEventHandler("onclick", this.Div21_Tab01_tabp01_btn_sub_onclick, this);
            this.div_11.Tab01.tabp01.btnSetSub.addEventHandler("onclick", this.fnSetSub, this);
            this.div_11.Tab01.tabp03.taRfqRemark.addEventHandler("oneditclick", this.Div21_Tab01_tabp02_ta_RfqRemark_oneditclick, this);
            this.div_11.Tab01.tab05.edtGrAcntNmMgmt.addEventHandler("onkeydown", this.fn_onkeydown, this);
            this.div_11.Tab01.tab05.edtGrAcntNmMgmt.addEventHandler("ontextchanged", this.fn_ontextchanged, this);
            this.div_11.Tab01.tab05.btnGrMgmt.addEventHandler("onclick", this.srchAccountPop, this);
            this.div_11.Tab01.tab05.edtGrAcntNmBiz.addEventHandler("onkeydown", this.fn_onkeydown, this);
            this.div_11.Tab01.tab05.edtGrAcntNmBiz.addEventHandler("ontextchanged", this.fn_ontextchanged, this);
            this.div_11.Tab01.tab05.btnGrBiz.addEventHandler("onclick", this.srchAccountPop, this);
            this.div_11.Tab01.tab05.edtOutItemAccMgmtNm.addEventHandler("onkeydown", this.fn_onkeydown, this);
            this.div_11.Tab01.tab05.edtOutItemAccMgmtNm.addEventHandler("ontextchange", this.fn_ontextchanged, this);
            this.div_11.Tab01.tab05.edtOutItemAccBizNm.addEventHandler("onkeydown", this.fn_onkeydown, this);
            this.div_11.Tab01.tab05.edtOutItemAccBizNm.addEventHandler("ontextchanged", this.fn_ontextchanged, this);
            this.div_11.Tab01.tab05.btnOutBiz.addEventHandler("onclick", this.srchAccountPop, this);
            this.div_11.Tab01.tab05.btnOutMgmt.addEventHandler("onclick", this.srchAccountPop, this);
            this.div_11.Tab01.tab05.cbDirectPur.addEventHandler("onclick", this.Div21_Tab01_tabp04_CheckBox03_onclick, this);
            this.div_11.Tab01.tab05.cbBarcode.addEventHandler("onclick", this.Div21_Tab01_tabp04_CheckBox05_onclick, this);
            this.div_11.Tab01.tab05.cbBarcode.addEventHandler("onchanged", this.Div21_Tab01_tabp01_CheckBox02_onchanged, this);

        };

        this.loadIncludeScript("BMtrlReqDetail.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
