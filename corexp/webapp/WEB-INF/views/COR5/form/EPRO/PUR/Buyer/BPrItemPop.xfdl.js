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
                this.set_name("BPrItemPop");
                this.set_titletext("물품요청품목검색 멀티팝업");
                this._setFormPosition(0,0,1077,700);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSrchOpt", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"LRG_CLS_ID\" type=\"STRING\" size=\"20\"/><Column id=\"MDL_CLS_ID\" type=\"STRING\" size=\"20\"/><Column id=\"SML_CLS_ID\" type=\"STRING\" size=\"20\"/><Column id=\"MTRL_CD\" type=\"STRING\" size=\"20\"/><Column id=\"MTRL_NM\" type=\"STRING\" size=\"500\"/><Column id=\"OUT_STR_CD\" type=\"STRING\" size=\"40\"/><Column id=\"OUT_STR_NM\" type=\"STRING\" size=\"300\"/><Column id=\"IN_STR_CD\" type=\"STRING\" size=\"40\"/><Column id=\"EXIST\" type=\"STRING\" size=\"1\"/><Column id=\"ALT_INVNTRY_MGMT\" type=\"STRING\" size=\"1\"/><Column id=\"ATTR_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_NM1\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_NM3\" type=\"STRING\" size=\"256\"/><Column id=\"FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"IS_ROLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMtrl", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MTRL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PUR_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"GR_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"STOCK_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_STATUS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_STR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_DAY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_favorite", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column type=\"string\" id=\"SRC_GRP_NM\" size=\"300\"/><Column type=\"int\" id=\"LVL\" size=\"22\"/><Column type=\"string\" id=\"MTRL_GRP_ID\" size=\"20\"/><Column type=\"string\" id=\"MTRL_NM\" size=\"500\"/><Column type=\"string\" id=\"CHECKED\" size=\"0\"/><Column type=\"string\" id=\"MTRL_CD\" size=\"20\"/><Column type=\"string\" id=\"MTRL_GRP_NM\" size=\"500\"/><Column type=\"string\" id=\"SRC_GRP_ID\" size=\"20\"/><Column id=\"BTN_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_STATUS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_return", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mtrlAttrCombo3", this);
            obj._setContents("<ColumnInfo><Column id=\"ATTR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ATTR_NM\">--전체--</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mtrlAttrCombo1", this);
            obj._setContents("<ColumnInfo><Column id=\"ATTR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ATTR_NM\">--전체--</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mtrlAttrCombo2", this);
            obj._setContents("<ColumnInfo><Column id=\"ATTR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ATTR_NM\">--전체--</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_combo", this);
            obj._setContents("<ColumnInfo><Column id=\"ATTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_send", this);
            obj._setContents("<ColumnInfo><Column id=\"ATTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSelect", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MTRL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PUR_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"GR_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"STOCK_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_STATUS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_STR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_DAY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_condition", "absolute", "5", "42", null, "46", "5", null, this);
            obj.set_taborder("7");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);
            obj = new Static("sta_WFSA_LabelP", "absolute", "0", "10", "117", "24", null, null, this.div_condition);
            obj.set_taborder("41");
            obj.set_text("품목분류");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div_condition.addChild(obj.name, obj);
            obj = new Button("btn_search", "absolute", null, "10", "60", "24", "18", null, this.div_condition);
            obj.set_taborder("42");
            obj.set_cssclass("btn_WF_Search");
            this.div_condition.addChild(obj.name, obj);
            obj = new Edit("edt_mtrlNm", "absolute", "599", "10", "200", "24", null, null, this.div_condition);
            obj.set_taborder("44");
            obj.getSetter("objNm").set("품목명");
            this.div_condition.addChild(obj.name, obj);
            obj = new Static("sta_WFSA_PointLabel00", "absolute", "423", "10", "74", "24", null, null, this.div_condition);
            obj.set_taborder("45");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div_condition.addChild(obj.name, obj);
            obj = new Edit("edt_mtrlCd", "absolute", "497", "10", "100", "24", null, null, this.div_condition);
            obj.set_taborder("46");
            obj.getSetter("objNm").set("품목코드");
            this.div_condition.addChild(obj.name, obj);
            obj = new Button("btn_newItem", "absolute", null, "10", "93", "24", "80", null, this.div_condition);
            obj.set_taborder("48");
            obj.set_text("신규상품등록");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_visible("true");
            obj.getSetter("objNm").set("신규상품등록");
            this.div_condition.addChild(obj.name, obj);

            obj = new Div("div_condition1", "absolute", "5", "89", null, "84", "5", null, this);
            obj.set_taborder("10");
            obj.set_cssclass("div_WF_SearchBg2");
            obj.getSetter("objNm").set("");
            this.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label01", "absolute", "702", "35", "117", "24", null, null, this.div_condition1);
            obj.set_taborder("125");
            obj.set_text("속성 3");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("사용여부");
            this.div_condition1.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label00", "absolute", "359", "35", "117", "24", null, null, this.div_condition1);
            obj.set_taborder("122");
            obj.set_text("속성 2");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("사용여부");
            this.div_condition1.addChild(obj.name, obj);
            obj = new Static("stc_warning", "absolute", "0", null, null, "19", "0", "0", this.div_condition1);
            obj.set_taborder("111");
            obj.set_text("- 검색조건 없이 검색 시 속도가 저하 될 수 있습니다.");
            obj.set_cssclass("sta_WF_SearchText");
            obj.getSetter("lbcd").set("");
            this.div_condition1.addChild(obj.name, obj);
            obj = new Static("sta_WFSA_LabelP00", "absolute", "0", "6", "117", "24", null, null, this.div_condition1);
            obj.set_taborder("112");
            obj.set_text("조회구분");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div_condition1.addChild(obj.name, obj);
            obj = new Combo("cbo_cdPrePrDist", "absolute", "117", "6", "120", "24", null, null, this.div_condition1);
            this.div_condition1.addChild(obj.name, obj);
            obj.set_taborder("113");
            obj.set_innerdataset("ds_altInvntry");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("요청구분");
            obj = new CheckBox("CheckBox00", "absolute", "307", "6", "116", "24", null, null, this.div_condition1);
            obj.set_taborder("114");
            obj.set_text("재고있는품목만");
            this.div_condition1.addChild(obj.name, obj);
            obj = new Static("ed_prAmt38", "absolute", "423", "6", "117", "24", null, null, this.div_condition1);
            obj.set_taborder("115");
            obj.set_text("출고창고");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("TTL_TOT_AMT");
            this.div_condition1.addChild(obj.name, obj);
            obj = new Edit("edt_outStrCd", "absolute", "540", "6", "100", "24", null, null, this.div_condition1);
            obj.set_taborder("116");
            obj.set_cssclass("edt_default_r");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("objNm").set("구매요청자ID");
            this.div_condition1.addChild(obj.name, obj);
            obj = new Edit("edt_outStrNm", "absolute", "642", "6", "315", "24", null, null, this.div_condition1);
            obj.set_taborder("117");
            obj.set_lengthunit("utf8");
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("구매요청자명");
            this.div_condition1.addChild(obj.name, obj);
            obj = new Button("btn_depot", "absolute", "933", "6", "24", "24", null, null, this.div_condition1);
            obj.set_taborder("118");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("구매요청자 검색 버튼");
            this.div_condition1.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label05", "absolute", "0", "35", "117", "24", null, null, this.div_condition1);
            obj.set_taborder("119");
            obj.set_text("속성 1");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("사용여부");
            this.div_condition1.addChild(obj.name, obj);
            obj = new Combo("cbo_attrID1", "absolute", "117", "35", "120", "24", null, null, this.div_condition1);
            this.div_condition1.addChild(obj.name, obj);
            obj.set_taborder("120");
            obj.set_innerdataset("ds_combo");
            obj.set_codecolumn("ATTR_ID");
            obj.set_datacolumn("ATTR_NM");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("사용여부");
            obj = new Combo("cbo_mtrlattrNm1", "absolute", "239", "35", "120", "24", null, null, this.div_condition1);
            this.div_condition1.addChild(obj.name, obj);
            obj.set_taborder("121");
            obj.set_innerdataset("@ds_mtrlAttrCombo1");
            obj.set_codecolumn("ATTR_NM");
            obj.set_datacolumn("ATTR_NM");
            obj = new Combo("cbo_attrID2", "absolute", "460", "35", "120", "24", null, null, this.div_condition1);
            this.div_condition1.addChild(obj.name, obj);
            obj.set_taborder("123");
            obj.set_innerdataset("ds_combo");
            obj.set_codecolumn("ATTR_ID");
            obj.set_datacolumn("ATTR_NM");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("사용여부");
            obj = new Combo("cbo_mtrlattrNm2", "absolute", "582", "35", "120", "24", null, null, this.div_condition1);
            this.div_condition1.addChild(obj.name, obj);
            obj.set_taborder("124");
            obj.set_innerdataset("@ds_mtrlAttrCombo2");
            obj.set_codecolumn("ATTR_NM");
            obj.set_datacolumn("ATTR_NM");
            obj = new Combo("cbo_attrID3", "absolute", "803", "35", "120", "24", null, null, this.div_condition1);
            this.div_condition1.addChild(obj.name, obj);
            obj.set_taborder("126");
            obj.set_innerdataset("ds_combo");
            obj.set_codecolumn("ATTR_ID");
            obj.set_datacolumn("ATTR_NM");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("사용여부");
            obj = new Combo("cbo_mtrlattrNm3", "absolute", "925", "35", "120", "24", null, null, this.div_condition1);
            this.div_condition1.addChild(obj.name, obj);
            obj.set_taborder("127");
            obj.set_innerdataset("@ds_mtrlAttrCombo3");
            obj.set_codecolumn("ATTR_NM");
            obj.set_datacolumn("ATTR_NM");

            obj = new Button("btn_fold", "absolute", "93.69%", "173", "63", "13", null, null, this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_SearchClose");
            this.addChild(obj.name, obj);

            obj = new Div("div_body", "absolute", "0", "196", null, null, "0", "0", this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);
            obj = new Div("Div21", "absolute", "5", null, null, "234", "5", "10", this.div_body);
            obj.set_taborder("0");
            obj.style.set_background("transparent");
            obj.set_scrollbars("none");
            obj.set_cssclass("div_WF_bg");
            obj.getSetter("lbcd").set("");
            this.div_body.addChild(obj.name, obj);
            obj = new Grid("grd_list", "absolute", "0", "16", null, null, "0", "11", this.div_body.Div21);
            obj.set_taborder("0");
            obj.set_binddataset("dsSelect");
            obj.set_scrollbars("fixedvert");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellclickbound("cell");
            obj.getSetter("f_filter").set("N");
            obj.getSetter("f_excel").set("Y");
            obj.getSetter("f_hide").set("N");
            obj.getSetter("f_find").set("N");
            obj.getSetter("f_fix").set("N");
            obj.getSetter("f_height").set("N");
            obj.getSetter("f_save").set("N");
            obj.getSetter("f_mode").set("Y");
            obj.getSetter("f_init").set("N");
            obj.getSetter("f_colSize").set("N");
            obj.getSetter("f_sort").set("Y");
            obj._setContents("<Formats><Format id=\"SMODE\"><Columns><Column size=\"0\"/><Column size=\"90\"/><Column size=\"551\"/><Column size=\"70\"/><Column size=\"115\"/><Column size=\"0\"/><Column size=\"60\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"품목코드\"/><Cell col=\"2\" text=\"품목명\"/><Cell col=\"3\" text=\"단위\"/><Cell col=\"4\" text=\"예상단가\"/><Cell col=\"5\" text=\"저장창고\"/><Cell col=\"6\" displaytype=\"image\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" text=\"bind:ALT_INVNTRY_MGMT\" combodataset=\"ds_altInvntry\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\"/><Cell col=\"1\" style=\"align:center;\" cssclass=\"cell_link\" text=\"bind:MTRL_CD\"/><Cell col=\"2\" style=\"align:left;\" cssclass=\"cell_link\" text=\"bind:MTRL_NM2\" tooltiptext=\"bind:MTRL_NM_SPEC\"/><Cell col=\"3\" displaytype=\"normal\" text=\"bind:CD_PUR_UNIT\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CNTR_PRICE\" mask=\"#,##0.00\" expandshow=\"hide\" expandsize=\"25\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:OUT_STR_NM\"/><Cell col=\"6\" displaytype=\"button\" style=\"align:center;\" text=\"bind:BTN_STATUS_NM\"/></Band></Format></Formats>");
            this.div_body.Div21.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "16", "8", this.div_body.Div21);
            obj.set_taborder("1");
            obj.set_scrollbars("none");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.div_body.Div21.addChild(obj.name, obj);
            obj = new Div("div_2", "absolute", "5", null, null, "29", "5", "228", this.div_body);
            obj.set_taborder("1");
            obj.getSetter("objNm").set("DIV-헤더 타이틀");
            this.div_body.addChild(obj.name, obj);
            obj = new Button("btn_ptnrReq", "absolute", null, "0", "79", "24", "2", null, this.div_body.div_2);
            obj.set_taborder("9");
            obj.set_text("품목 적용");
            obj.set_cssclass("btn_WF_Custom");
            obj.getSetter("objNm").set("선택된 품목 적용");
            obj.getSetter("lbcd").set("");
            this.div_body.div_2.addChild(obj.name, obj);
            obj = new Button("btn_OP_Head", "absolute", "10", "0", "133", "24", null, null, this.div_body.div_2);
            obj.set_taborder("10");
            obj.set_text("선택한  품목");
            obj.set_cssclass("btn_WF_DivClose");
            obj.getSetter("objNm").set("접기펼치기 버튼");
            obj.getSetter("lbcd").set("");
            this.div_body.div_2.addChild(obj.name, obj);
            obj = new Static("sta_WFSA_LabelP00", "absolute", "775", "0", "132", "24", null, null, this.div_body.div_2);
            obj.set_taborder("11");
            obj.set_text("*계약단가 픔목");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div_body.div_2.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "5", "1", null, null, "5", "276", this.div_body);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.div_body.addChild(obj.name, obj);
            obj = new Grid("grd_mtrl", "absolute", "0", "0", null, null, "0", "27", this.div_body.Div00);
            obj.set_taborder("8");
            obj.set_binddataset("dsMtrl");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellclickbound("cell");
            obj.getSetter("f_filter").set("N");
            obj.getSetter("f_excel").set("Y");
            obj.getSetter("f_hide").set("N");
            obj.getSetter("f_find").set("N");
            obj.getSetter("f_fix").set("N");
            obj.getSetter("f_height").set("N");
            obj.getSetter("f_save").set("N");
            obj.getSetter("f_mode").set("Y");
            obj.getSetter("f_init").set("N");
            obj.getSetter("f_colSize").set("N");
            obj.set_scrollbars("fixedvert");
            obj.getSetter("f_sort").set("Y");
            obj._setContents("<Formats><Format id=\"SMODE\"><Columns><Column size=\"0\"/><Column size=\"90\"/><Column size=\"551\"/><Column size=\"70\"/><Column size=\"115\"/><Column size=\"0\"/><Column size=\"60\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"품목코드\"/><Cell col=\"2\" text=\"품목명\"/><Cell col=\"3\" text=\"단위\"/><Cell col=\"4\" text=\"예상단가\"/><Cell col=\"5\" text=\"저장창고\"/><Cell col=\"6\" displaytype=\"image\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" text=\"bind:ALT_INVNTRY_MGMT\" combodataset=\"ds_altInvntry\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\"/><Cell col=\"1\" style=\"align:center;\" cssclass=\"cell_link\" text=\"bind:MTRL_CD\"/><Cell col=\"2\" style=\"align:left;\" cssclass=\"cell_link\" text=\"bind:MTRL_NM2\" tooltiptext=\"bind:MTRL_NM_SPEC\"/><Cell col=\"3\" displaytype=\"normal\" text=\"bind:CD_PUR_UNIT\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CNTR_PRICE\" mask=\"#,##0.00\" expandshow=\"hide\" expandsize=\"25\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:OUT_STR_NM\"/><Cell col=\"6\" displaytype=\"button\" style=\"align:center;\" text=\"bind:BTN_STATUS_NM\"/></Band></Format></Formats>");
            this.div_body.Div00.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "16", "24", this.div_body.Div00);
            obj.set_taborder("9");
            obj.set_scrollbars("none");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.div_body.Div00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 46, this.div_condition,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("7");
            		p.set_cssclass("div_WF_SearchBg");

            	}
            );
            this.div_condition.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1042, 165, this.div_condition1,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("10");
            		p.set_cssclass("div_WF_SearchBg2");
            		p.getSetter("objNm").set("");

            	}
            );
            this.div_condition1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 234, this.div_body.Div21,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent");
            		p.set_scrollbars("none");
            		p.set_cssclass("div_WF_bg");
            		p.getSetter("lbcd").set("");

            	}
            );
            this.div_body.Div21.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.div_body.div_2,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.getSetter("objNm").set("DIV-헤더 타이틀");

            	}
            );
            this.div_body.div_2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_body.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.set_text("Div00");

            	}
            );
            this.div_body.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_body,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("12");

            	}
            );
            this.div_body.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1077, 700, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("물품요청품목검색 멀티팝업");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item4","div_condition.edt_mtrlCd","value","dsSrchOpt","MTRL_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","div_condition.edt_mtrlNm","value","dsSrchOpt","MTRL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_condition1.cbo_cdPrePrDist","value","dsSrchOpt","ALT_INVNTRY_MGMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","div_condition1.CheckBox00","value","dsSrchOpt","EXIST");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_condition1.edt_outStrCd","value","dsSrchOpt","OUT_STR_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","div_condition1.edt_outStrNm","value","dsSrchOpt","OUT_STR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","div_condition1.cbo_attrID1","value","dsSrchOpt","ATTR_ID1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","div_condition1.cbo_mtrlattrNm1","value","dsSrchOpt","ATTR_NM1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","div_condition1.cbo_attrID2","value","dsSrchOpt","ATTR_ID2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","div_condition1.cbo_mtrlattrNm2","value","dsSrchOpt","ATTR_NM2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","div_condition1.cbo_attrID3","value","dsSrchOpt","ATTR_ID3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","div_condition1.cbo_mtrlattrNm3","value","dsSrchOpt","ATTR_NM3");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
        };
        
        // User Script
        this.registerScript("BPrItemPop.xfdl", function(exports) {
        /**
           @file       BPrItemPop.xfdl
           @desc       물품요청 멀티품목검색
           @author     박소진
           @makedate   2019.04.29
           @history    
        */  

        // include "lib::lib_all.xjs"
        // 
        // this.formId = "";
        // var length;
        // var idNum;

        //권한을 통한 컨트롤이 필요할 경우 등록하여 사용한다.
        /*this.fv_roleId = "B_INSTALL,B_PUR_M,B_PUR,B_SYSTEM,B_WEBMASTER"*/

        

        
        /**
        	@function	pop_MatGroupSearch_onload()
        	@desc   	폼 onload 이벤트
        */
        this.fnFormOnload = function(obj,e)
        {

        	var ownerFrame = this.getOwnerFrame();//폼을 연 부모객체를 반환해줌. 화면에서 넘겨준 값을 가져오기 위해 씀
          	
          	this.dsSrchOpt.addRow();
          	this.dsMtrl.addRow();
          	var mtrlNm = ownerFrame.mtrl_nm;
          	
          	//부모창으로 부터 전달받은 값을 NULL 이 아니면 검색조건 DataSet에 담는다.
        	if(!gfnIsNull(mtrlNm)){
        		this.dsSrchOpt.setColumn(0, "MTRL_NM", mtrlNm);
        		
        		this.fnSearch();
        		}
          	
        	//검색조건에 사용될 속성조회
        //	this.fn_attrSrch();
        }

        
        /**
        	@function fn_attrSrch
        	@desc 	  속성조회 함수
        */
        // this.fn_attrSrch = function(obj:Button,  e:nexacro.ClickEventInfo)
        // {
        // 	var sSvcID = "Pur_AttrSrch";
        // 	var sController = "Pur_AttrSrch.do";
        // 	var sInDatasets = "in_ds=ds_srchOpt";
        // 	var sOutDatasets = "ds_combo=out_list";
        // 	var sCallbackFunc = "fn_trCallBack";
        // 	
        //     this.gfn_tran(sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);	
        // }

        
        /**
          * @함수명	: fnPreSearch
          * @desc     	: 조회 전 처리
          */
        this.fnPreSearch = function()
        {
        	return true;
        }

        
        //조회
        this.fnSearch = function(obj,e)
        {
        	//if(!this.fnPreSearch(arg)) return false;
        	
        	var sSvcID = "searchPrItemPop"; //고유아이디
        	var sController = "epro.pur.service.BPrService.searchPrItemPop"; //서버호출유알엘 service에 작성한 부분 호출
        	var sInDatasets = "dsSrchOpt=dsSrchOpt";//오른쪽이 주는쪽 왼쪽이 받는쪽 이름.
        	var sOutDatasets = "dsMtrl=dsMtrl";//서버에서 받아오는거
        	var sCallbackFunc = "fnTrCallBack";
        	
        // 	var	oPaging = [
        // 					{inDs:this.dsSrchOpt, grid:this.div_body.Div00.grd_mtrl, divPaging:this.div_body.Div00.divPaging}
        // 				];

        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        //조회버튼
        this.div_condition_btn_search_onclick = function(obj,e)
        {
        	this.fnSearch();
        }

        /**
        	@function	fn_BtnAddDel()
        	@desc       품목 추가 삭제
        */
        this.fnBtnAddDel = function(mtrlCd){
        	
        // 	this.dsItemDetail.set_enableevent(false);
        // 	this.dsItemDetail.filter("CHECKED==1")
        // 	this.dsItemDetail.deleteAll();
        // 	this.dsItemDetail.filter("")//초기화
        // 	this.dsItemDetail.set_enableevent(true);//이벤트 다시 켜줌
        	
        	
        	
        // 	for(var i = 0; i < this.dsList.getRowCount(); i++){
        // 	
        // 		if(this.dsList.getColumn(i, "CHECKED") == 1){
        // 
        // 		this.dsTemp.setColumn(this.dsTemp.addRow(), "DOC_NO", this.dsList.getColumn(i, "DOC_NO"))
        // 		
        // 		}
        // 		
        //   }
        	
        	
        	//var mtrlCd = this.getColumn(0, "MTRL_CD");
        	this.dsMtrl.set_enableevent(false);
        	
        	var ridx = 0;
        	
        	if(!gfnIsNull(mtrlCd)){
        		ridx = this.dsMtrl.findRow("MTRL_CD", mtrlCd);
        	}else{
        		ridx = this.dsMtrl.rowposition;
        	}
        	
        	if(this.dsMtrl.getColumn(ridx, "BTN_STATUS") == "1")
        	{
        		for(var i=0; i<=this.dsSelect.rowcount; i++)
        		{
        			if(this.dsSelect.getColumn(i,"MTRL_CD")==this.dsMtrl.getColumn(ridx, "MTRL_CD")){
        				this.alert("같은 품목을 추가하실 수 없습니다.");
        				return;
        			}
        		}
        		this.dsSelect.set_enableevent(false);
        		this.dsMtrl.setColumn(ridx, "BTN_STATUS", "0");
        		this.dsMtrl.setColumn(ridx, "BTN_STATUS_NM", "삭제");
        		var nRow = this.dsSelect.addRow();	
        		this.dsSelect.copyRow(nRow, this.dsMtrl, ridx);
        		this.dsSelect.set_enableevent(true);
        	}else{
        		
        		var nRow = 0;
        		
        		if(ridx > -1){
        			nRow = this.dsSelect.findRow("MTRL_CD", this.dsMtrl.getColumn(ridx, "MTRL_CD"));
        		}else{
        			nRow = this.dsSelect.rowposition;
        		}
        	
        		if(nRow > -1)
        		{
        			if(ridx > -1){
        				this.dsMtrl.setColumn(ridx, "BTN_STATUS", "1");
        				this.dsMtrl.setColumn(ridx, "BTN_STATUS_NM", "추가");
        			}
        			
        			this.dsSelect.deleteRow(nRow);
        		}		
        	}
        	this.dsMtrl.set_enableevent(true);
        	
        }

        
        /**
        	@function	Tab00_tabpage1_grd_list_oncellclick()
        	@desc       품목그리드 원클릭 이벤트
        */
        this.Tab00_tabpage1_grd_list_oncellclick = function(obj,e)
        {
        	if(gfnGrdBindColNm(obj, e.cell)=="BTN_STATUS_NM")
        	{
        		this.fnBtnAddDel();
        	}
        }

        /**
        	@function	Tab00_tabpage1_grd_list_oncellclick()
        	@desc       선택한 품목그리드 원클릭 이벤트
        */
        this.grd_list_oncellclick = function(obj,e)
        {
        	if(gfnGrdBindColNm(obj, e.cell)=="BTN_STATUS_NM")
        	{
        		this.fnBtnAddDel(this.dsSelect.getColumn(this.dsSelect.rowposition, "MTRL_CD"));
        	}
        	
        }

        
        /**
        	@function	btn_rtn_onclick()
        	@desc   	적용버튼 클릭
        */
        this.btn_rtn_onclick = function(obj,e)
        {		

        	this.parent.close(this.dsSelect.saveXML());
        	//this.close(this.dsSelect.saveXML());
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
         		case "saveBCmmDetail" :	//저장

         			//this.fnSearch();
         		
         			
         		break;		
        		case "deleteBCmmDetail" :	//삭제
        		
        			//gfnOpenMenuUrl("BCMM::BCmmList"); 

        		break;
         		case "searchPrItemPop" : 	//조회
        			this.div_body.Div00.grd_mtrl.setFocus();
        			
        			var rtnMsg="";
        			var rtnChk="";
        			
        			for(var i=0; i<this.dsMtrl.getRowCount(); i++)
        			{
        				var nRow = this.dsSelect.findRow("MTRL_CD", this.dsMtrl.getColumn(i, "MTRL_CD"));
        	
        				if(nRow > -1)
        				{
        					rtnMsg = "삭제";
        					rtnChk = 0;
        				}
        				else
        				{
        					rtnMsg = "추가";
        					rtnChk = 1;
        				}
        				
        				this.dsMtrl.setColumn(i, "BTN_STATUS_NM", rtnMsg);
        				this.dsMtrl.setColumn(i, "BTN_STATUS", rtnChk);	
        			}
        			
        			// 데이터셋 틀 복사.
        			for(var i=0; i<this.dsMtrl.colcount; i++){
        				this.dsSelect.addColumnInfo(this.dsMtrl.getColumnInfo(i).name,this.dsMtrl.getColumnInfo(i));
        			}
        			
        			
         		break;
         
        		default:
        		

        		break;		
         	}
         

        }	

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.div_condition.sta_WFSA_LabelP.addEventHandler("onclick", this.Tab00_tabpage1_div_condition_sta_WFSA_LabelP_onclick, this);
            this.div_condition.btn_search.addEventHandler("onclick", this.div_condition_btn_search_onclick, this);
            this.div_condition.edt_mtrlNm.addEventHandler("onkeydown", this.fn_onkeydown_event, this);
            this.div_condition.edt_mtrlCd.addEventHandler("onkeydown", this.fn_onkeydown_event, this);
            this.div_condition.btn_newItem.addEventHandler("onclick", this.div_condition_btn_newItem_onclick, this);
            this.div_condition1.sta_WFSA_LabelP00.addEventHandler("onclick", this.Tab00_tabpage1_div_condition_sta_WFSA_LabelP_onclick, this);
            this.div_condition1.CheckBox00.addEventHandler("onchanged", this.div_condition_CheckBox00_onchanged, this);
            this.div_condition1.edt_outStrNm.addEventHandler("onkeydown", this.fn_onkeydown_event, this);
            this.div_condition1.edt_outStrNm.addEventHandler("ontextchanged", this.fn_ontextchanged_event, this);
            this.div_condition1.btn_depot.addEventHandler("onclick", this.btn_depot_onclick, this);
            this.div_condition1.cbo_attrID1.addEventHandler("onitemchanged", this.fn_mtrlAttrChange, this);
            this.div_condition1.cbo_attrID2.addEventHandler("onitemchanged", this.fn_mtrlAttrChange, this);
            this.div_condition1.cbo_attrID3.addEventHandler("onitemchanged", this.fn_mtrlAttrChange, this);
            this.div_body.Div21.grd_list.addEventHandler("oncellclick", this.grd_list_oncellclick, this);
            this.div_body.div_2.btn_ptnrReq.addEventHandler("onclick", this.btn_rtn_onclick, this);
            this.div_body.div_2.btn_OP_Head.addEventHandler("onclick", this.fn_fold_onclick, this);
            this.div_body.div_2.sta_WFSA_LabelP00.addEventHandler("onclick", this.Tab00_tabpage1_div_condition_sta_WFSA_LabelP_onclick, this);
            this.div_body.Div00.grd_mtrl.addEventHandler("oncellclick", this.Tab00_tabpage1_grd_list_oncellclick, this);

        };

        this.loadIncludeScript("BPrItemPop.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
