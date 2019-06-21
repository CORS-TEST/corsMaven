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
                this.set_name("BMtrlPrSrchMultiPopup");
                this.set_titletext("품목검색멀티팝업(PR)");
                this._setFormPosition(0,0,1100,800);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSrchOpt", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LRG_CLS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MDL_CLS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SML_CLS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_INVNTRY_MGMT\" type=\"STRING\" size=\"256\"/><Column id=\"EXIST\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_STR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_STR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_NM1\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_NM3\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SRCH_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSelList", this);
            obj.set_enableevent("false");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"ATTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMtrlAttr1", this);
            obj._setContents("<ColumnInfo><Column id=\"ATTR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ATTR_NM\">--전체--</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMtrlAttr2", this);
            obj._setContents("<ColumnInfo><Column id=\"ATTR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ATTR_NM\">--전체--</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMtrlAttr3", this);
            obj._setContents("<ColumnInfo><Column id=\"ATTR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ATTR_NM\">--전체--</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReturn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("staMtrl", "absolute", "361", "17", "100", "24", null, null, this);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_expr("expr:gfnMultiLabel(\"EPRO_LABEL_00462\")");
            obj.style.set_align("right middle");
            obj.set_taborder("11");
            obj.set_text("품목");
            this.addChild(obj.name, obj);

            obj = new Div("divViewCompTitle00", "absolute", "0", "448", null, "36", "0", null, this);
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            obj.set_taborder("25");
            this.addChild(obj.name, obj);

            obj = new Div("divViewCompCond01", "absolute", "10", "42", null, "84", "10", null, this);
            obj.set_taborder("27");
            obj.set_cssclass("div_WF_SearchBg");
            obj.getSetter("objNm").set("");
            this.addChild(obj.name, obj);
            obj = new Static("staAttr3", "absolute", "710", "35", "110", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("128");
            obj.set_text("속성 3");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("사용여부");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staAttr2", "absolute", "355", "35", "110", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("129");
            obj.set_text("속성 2");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staWarning", "absolute", "0", null, null, "19", "0", "0", this.divViewCompCond01);
            obj.set_taborder("130");
            obj.set_text("- 검색조건 없이 검색 시 속도가 저하 될 수 있습니다.");
            obj.set_cssclass("sta_WF_SearchText");
            obj.getSetter("lbcd").set("");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staCdPrePrDist", "absolute", "0", "6", "110", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("131");
            obj.set_text("조회구분");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Combo("cboCdPrePrDist", "absolute", "110", "6", "120", "24", null, null, this.divViewCompCond01);
            this.divViewCompCond01.addChild(obj.name, obj);
            obj.set_taborder("132");
            obj.set_innerdataset("dsAltInvntry");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj = new CheckBox("chkExist", "absolute", "235", "6", "116", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("133");
            obj.set_text("재고있는품목만");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staOutStr", "absolute", "355", "6", "110", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("134");
            obj.set_text("출고창고");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtOutStrCd", "absolute", "465", "6", "100", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("135");
            obj.set_cssclass("edt_default_r");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("objNm").set("구매요청자ID");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtOutStrNm", "absolute", "570", "6", "315", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("136");
            obj.set_lengthunit("utf8");
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("구매요청자명");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Button("btnOutStr", "absolute", "861", "6", "24", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("137");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("구매요청자 검색 버튼");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staAttr1", "absolute", "0", "35", "110", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("138");
            obj.set_text("속성 1");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Combo("cboAttr11", "absolute", "110", "35", "120", "24", null, null, this.divViewCompCond01);
            this.divViewCompCond01.addChild(obj.name, obj);
            obj.set_taborder("139");
            obj.set_innerdataset("@dsCombo");
            obj.set_codecolumn("ATTR_ID");
            obj.set_datacolumn("ATTR_NM");
            obj.getSetter("objNm").set("사용여부");
            obj = new Combo("cboAttr12", "absolute", "235", "35", "120", "24", null, null, this.divViewCompCond01);
            this.divViewCompCond01.addChild(obj.name, obj);
            obj.set_taborder("140");
            obj.set_innerdataset("@dsMtrlAttr1");
            obj.set_codecolumn("ATTR_NM");
            obj.set_datacolumn("ATTR_NM");
            obj.set_value("--전체--");
            obj.set_text("--전체--");
            obj.set_index("0");
            obj = new Combo("cboAttr21", "absolute", "465", "35", "120", "24", null, null, this.divViewCompCond01);
            this.divViewCompCond01.addChild(obj.name, obj);
            obj.set_taborder("141");
            obj.set_innerdataset("@dsCombo");
            obj.set_codecolumn("ATTR_ID");
            obj.set_datacolumn("ATTR_NM");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("사용여부");
            obj = new Combo("cboAttr22", "absolute", "590", "35", "120", "24", null, null, this.divViewCompCond01);
            this.divViewCompCond01.addChild(obj.name, obj);
            obj.set_taborder("142");
            obj.set_innerdataset("@dsMtrlAttr2");
            obj.set_codecolumn("ATTR_NM");
            obj.set_datacolumn("ATTR_NM");
            obj.set_value("--전체--");
            obj.set_text("--전체--");
            obj.set_index("0");
            obj = new Combo("cboAttr31", "absolute", "820", "35", "120", "24", null, null, this.divViewCompCond01);
            this.divViewCompCond01.addChild(obj.name, obj);
            obj.set_taborder("143");
            obj.set_innerdataset("@dsCombo");
            obj.set_codecolumn("ATTR_ID");
            obj.set_datacolumn("ATTR_NM");
            obj.getSetter("objNm").set("사용여부");
            obj = new Combo("cboAttr32", "absolute", "945", "35", "120", "24", null, null, this.divViewCompCond01);
            this.divViewCompCond01.addChild(obj.name, obj);
            obj.set_taborder("144");
            obj.set_innerdataset("@dsMtrlAttr3");
            obj.set_codecolumn("ATTR_NM");
            obj.set_datacolumn("ATTR_NM");
            obj.set_value("--전체--");
            obj.set_text("--전체--");
            obj.set_index("0");

            obj = new Button("btnFold", "absolute", "502", "125", "56", "17", null, null, this);
            obj.set_taborder("28");
            obj.set_cssclass("btn_Fold_Close");
            this.addChild(obj.name, obj);

            obj = new Static("staMtrlType", "absolute", "16", "17", "100", "24", null, null, this);
            obj.set_taborder("29");
            obj.set_expr("expr:gfnMultiLabel(\"EPRO_LABEL_00464\")");
            obj.set_text("품목분류");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Div("divViewCompCond00", "absolute", "10", "7", null, "36", "10", null, this);
            obj.set_taborder("30");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);
            obj = new Static("staMtrlType", "absolute", "0", "5", "110", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("49");
            obj.set_text("품목분류");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Button("btnSearch", "absolute", null, "5", "60", "24", "5", null, this.divViewCompCond00);
            obj.set_taborder("50");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            obj.style.set_imagealign("left middle");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Edit("edtMtrlNm", "absolute", "638", "5", "200", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("51");
            obj.getSetter("objNm").set("품목명");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staMtrl", "absolute", "423", "5", "110", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("52");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Edit("edtMtrlCd", "absolute", "533", "5", "100", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("53");
            obj.getSetter("objNm").set("품목코드");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Div("divMtrlType", "absolute", "110", "5", "306", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("54");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("품목그룹");
            obj.set_url("CCOMP::CompMtrlType.xfdl");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Button("btnNewItemReg", "absolute", null, "5", "100", "24", "68", null, this.divViewCompCond00);
            obj.set_taborder("55");
            obj.set_text("신규상품등록");
            obj.set_cssclass("btn_WF_Custom");
            obj.getSetter("objNm").set("신규상품등록");
            this.divViewCompCond00.addChild(obj.name, obj);

            obj = new Div("divViewCompBody00", "absolute", "10", "147", null, null, "10", "0", this);
            obj.set_taborder("31");
            this.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "10", null, "329", "0", null, this.divViewCompBody00);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellclickbound("cell");
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
            obj._setContents("<Formats><Format id=\"SMODE\"><Columns><Column size=\"90\"/><Column size=\"551\"/><Column size=\"70\"/><Column size=\"115\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"60\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"품목코드\"/><Cell col=\"1\" text=\"품목명\"/><Cell col=\"2\" text=\"단위\"/><Cell col=\"3\" text=\"예상단가\"/><Cell col=\"4\" text=\"계정명\"/><Cell col=\"5\" text=\"재고수량\"/><Cell col=\"6\" displaytype=\"image\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" cssclass=\"cell_link\" text=\"bind:MTRL_CD\"/><Cell col=\"1\" style=\"align:left;\" cssclass=\"cell_link\" text=\"bind:MTRL_NM_SPEC\" tooltiptext=\"bind:MTRL_NM_SPEC\"/><Cell col=\"2\" displaytype=\"normal\" text=\"bind:CD_PUR_UNIT_NM\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CNTR_PRICE\" mask=\"#,##0.00\" expandshow=\"show\" expandsize=\"25\" expandimage=\"expr:CNTR_PTNR_ID==''?'':'img::ico_cont4.png'\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:GR_ACNT_NM\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:STOCK_QTY\" mask=\"#,##0.00\"/><Cell col=\"6\" displaytype=\"button\" style=\"align:center;\" text=\"bind:BTN_STATUS_NM\"/></Band></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", "338", null, "28", "0", null, this.divViewCompBody00);
            obj.set_taborder("1");
            obj.set_scrollbars("none");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "371", "255", "24", null, null, this.divViewCompBody00);
            obj.set_taborder("2");
            obj.set_text("선택한 품목");
            obj.set_cssclass("sta_WF_Subtitle");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staCntrCheck", "absolute", "775", "-906", "132", "24", null, null, this.divViewCompBody00);
            obj.set_taborder("3");
            obj.set_text("*계약단가 픔목");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_background("transparent URL('img::ico_cont4.png')");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnRtn", "absolute", null, "371", "65", "24", "0", null, this.divViewCompBody00);
            obj.set_taborder("4");
            obj.set_text("품목 적용");
            obj.getSetter("objNm").set("적용");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Grid("grdAddList", "absolute", "0", "400", null, null, "0", "14", this.divViewCompBody00);
            obj.set_taborder("5");
            obj.set_binddataset("dsSelList");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellclickbound("cell");
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
            obj._setContents("<Formats><Format id=\"SMODE\"><Columns><Column size=\"90\"/><Column size=\"550\"/><Column size=\"70\"/><Column size=\"115\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"60\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"품목코드\"/><Cell col=\"1\" text=\"품목명\"/><Cell col=\"2\" text=\"단위\"/><Cell col=\"3\" text=\"예상단가\"/><Cell col=\"4\" text=\"계정명\"/><Cell col=\"5\" text=\"재고수량\"/><Cell col=\"6\" displaytype=\"image\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" cssclass=\"cell_link\" text=\"bind:MTRL_CD\"/><Cell col=\"1\" style=\"align:left;\" cssclass=\"cell_link\" text=\"bind:MTRL_NM_SPEC\" tooltiptext=\"bind:MTRL_NM_SPEC\"/><Cell col=\"2\" displaytype=\"normal\" text=\"bind:CD_PUR_UNIT_NM\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CNTR_PRICE\" mask=\"#,##0.00\" expandshow=\"show\" expandsize=\"25\" expandimage=\"expr:CNTR_PTNR_ID==''?'':'img::ico_cont4.png'\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:GR_ACNT_NM\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:STOCK_QTY\" mask=\"#,##0.00\"/><Cell col=\"6\" displaytype=\"button\" style=\"align:center;\" text=\"bind:BTN_STATUS_NM\"/></Band></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompTitle00,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 타이틀");
            		p.set_taborder("25");

            	}
            );
            this.divViewCompTitle00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1042, 165, this.divViewCompCond01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("27");
            		p.set_cssclass("div_WF_SearchBg");
            		p.getSetter("objNm").set("");

            	}
            );
            this.divViewCompCond01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 36, this.divViewCompCond00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("30");
            		p.set_cssclass("div_WF_SearchBg");

            	}
            );
            this.divViewCompCond00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("31");

            	}
            );
            this.divViewCompBody00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1100, 800, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("품목검색멀티팝업(PR)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item2","div_condition1.cbo_cdPrePrDist","value","ds_srchOpt","ALT_INVNTRY_MGMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","div_condition1.CheckBox00","value","ds_srchOpt","EXIST");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","div_condition1.edt_outStrCd","value","ds_srchOpt","OUT_STR_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","div_condition1.edt_outStrNm","value","ds_srchOpt","OUT_STR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","div_condition1.cbo_attrID1","value","ds_srchOpt","ATTR_ID1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","div_condition1.cbo_mtrlattrNm1","value","ds_srchOpt","ATTR_NM1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","div_condition1.cbo_attrID2","value","ds_srchOpt","ATTR_ID2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","div_condition1.cbo_mtrlattrNm2","value","ds_srchOpt","ATTR_NM2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","div_condition1.cbo_attrID3","value","ds_srchOpt","ATTR_ID3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","div_condition1.cbo_mtrlattrNm3","value","ds_srchOpt","ATTR_NM3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","div_condition.edt_mtrlCd","value","ds_srchOpt","MTRL_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_condition.edt_mtrlNm","value","ds_srchOpt","MTRL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","divViewCompCond00.edtMtrlCd","value","dsSrchOpt","MTRL_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","divViewCompCond00.edtMtrlNm","value","dsSrchOpt","MTRL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","divViewCompCond01.cboCdPrePrDist","value","dsSrchOpt","ALT_INVNTRY_MGMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","divViewCompCond01.chkExist","value","dsSrchOpt","EXIST");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","divViewCompCond01.edtOutStrCd","value","dsSrchOpt","OUT_STR_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","divViewCompCond01.edtOutStrNm","value","dsSrchOpt","OUT_STR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","divViewCompCond01.cboAttr12","value","dsSrchOpt","ATTR_NM1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","divViewCompCond01.cboAttr22","value","dsSrchOpt","ATTR_NM2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","divViewCompCond01.cboAttr32","value","dsSrchOpt","ATTR_NM3");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompMtrlType.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
        };
        
        // User Script
        this.registerScript("BMtrlPrSrchMultiPopup.xfdl", function(exports) {
        /**
         * @파일명       	: BMtrlPrSrchMultiPopup.xfdl
         * @생성자       	: 김민성
         * @생성일자     	: 2019. 04. 30
         * @설명			: 품목검색멀티팝업(구매요청용)
         * @최종수정자		: 김민성
         * @최종수정일자	: 2019. 04. 30
        */ 

        this.popTitle = "품목검색";
        var idNum = 0;

        /**
          * @함수명	: fnOnLoad
          * @desc   : 폼 onload이벤트
          */
        this.fnOnLoad = function(obj,e)
        {
        	//그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기
        	gfnSetGrdFunc(this.divViewCompBody00.grdList, this.divViewCompBody00.divPaging, this);
        	
        	var sArg = [ 
        				{ttl:this.btnFold, body:this.divViewCompCond01, initFold:true}
        		   ];		   
        	gfnDivFold(this, sArg);
        	
        	this.divViewCompCond00.divMtrlType.fnSetBind(this.dsSrchOpt,"LRG_CLS_ID","MDL_CLS_ID","SML_CLS_ID");
        	
        	var ownFrame = this.getOwnerFrame();
        	
        	this.dsSrchOpt.addRow();
        	this.dsSrchOpt.setColumn(0,"IN_STR_CD",ownFrame.agv_id);
        	this.dsSrchOpt.setColumn(0,"MTRL_NM",ownFrame.agv_nm);
        	this.dsSrchOpt.setColumn(0,"BRANCH_CD", application.gdsUserInfo.getColumn(0,"BRANCH_CD"));
        	this.dsSrchOpt.setColumn(0,"ALT_INVNTRY_MGMT","");
        	this.dsSrchOpt.setColumn(0,"SRCH_TYPE","PR");
        	
        	if(!gfnIsNull(this.dsSrchOpt.getColumn(0,"MTRL_NM"))){
        		this.fnSearch();	
        	}
        	
        	this.fnAttrSearch();
        }

        /**
          * @함수명	: fnPreAttrSearch
          * @desc     	: 조회 전 처리
          */
        this.fnPreAttrSearch = function()
        {
        	return true;
        }

        /**
          * @함수명	: fnAttrSearch
          * @desc     	: 속성조회 프로세스
          */
        this.fnAttrSearch = function()
        {
        	if(!this.fnPreAttrSearch()) return false;

        	var sSvcID = "searchComAttr";
        	var sController = "epro.com.service.BComService.searchComAttr";
        	var sInDatasets = "dsCond=dsSrchOpt";
        	var sOutDatasets = "dsCombo=dsCombo";
        	var sCallbackFunc = "fnTrCallBack";	
        	
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc, null);
        	
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
          * @desc     	: 품목조회 프로세스
          */
        this.fnSearch = function()
        {
        	if(!this.fnPreSearch()) return false;

        	var sSvcID = "searchComMtrl";
        	var sController = "epro.com.service.BComService.searchComMtrl";
        	var sInDatasets = "dsSrchOpt=dsSrchOpt";
        	var sOutDatasets = "dsList=dsList";
        	var sCallbackFunc = "fnTrCallBack";	
        		
        	var	oPaging = [
        					{inDs:this.dsSrchOpt, grid:this.divViewCompBody00.grdList, divPaging:this.divViewCompBody00.divPaging}
        				];					
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc, oPaging);
        	
        }

        /**
          * @함수명	: fnMtrlAttrChange
          * @desc     	: 속성값 변경시 상세조회 함수
          */
        this.fnMtrlAttrChange = function(obj,e)
        {
        	var length = obj.name.length;
        	idNum = obj.name.substring(length-2,length-1);
        	this.dsSrchOpt.setColumn(0,"ATTR_ID",this.dsCombo.getColumn(e.postindex,"ATTR_ID"));
        	this.fnMtrlAttrSrch(idNum);
        }

        /**
        	@function fnMtrlAttrSrch
        	@desc 	  자재속성조회 함수
        */
        this.fnMtrlAttrSrch = function(idNum)
        {
        	var sSvcID = "searchComMtrlAttr";
        	var sController = "epro.com.service.BComService.searchComMtrlAttr";
        	var sInDatasets = "dsCond=dsSrchOpt";
        	var sOutDatasets = "dsMtrlAttr"+idNum+"=dsOut";
        	var sCallbackFunc = "fnTrCallBack";	
        	
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc, null);
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
        		case "searchComAttr" :	
        			this.divViewCompCond01.cboAttr11.set_index(0);
        			this.divViewCompCond01.cboAttr21.set_index(0);
        			this.divViewCompCond01.cboAttr31.set_index(0);
        			this.divViewCompCond01.cboAttr12.set_index(0);
        			this.divViewCompCond01.cboAttr22.set_index(0);
        			this.divViewCompCond01.cboAttr32.set_index(0);
        			break;
        		case "searchComMtrlAttr" :
        			this.dsSrchOpt.setColumn(0,"ATTR_NM"+idNum,"--전체--");
        			break;
        		
        		case "searchComMtrl" :	
        			
        			this.divViewCompBody00.grdList.setFocus();
        			
        			var rtnMsg="";
        			var rtnChk="";
        			
        			for(var i=0; i<this.dsList.getRowCount(); i++){
        			
        				var nRow = this.dsSelList.findRow("MTRL_CD", this.dsList.getColumn(i, "MTRL_CD"));
        	
        				if(nRow > -1){
        					rtnMsg = "삭제";
        					rtnChk = 0;
        				}else{
        					rtnMsg = "추가";
        					rtnChk = 1;
        				}
        				
        				this.dsList.setColumn(i, "BTN_STATUS_NM", rtnMsg);
        				this.dsList.setColumn(i, "BTN_STATUS", rtnChk);	
        			}
        			
        			// 데이터셋 틀 복사.
        			
        			if(this.dsSelList.colcount==0){
        				for(var i=0; i<this.dsList.colcount; i++){
        					this.dsSelList.addColumnInfo(this.dsList.getColumnInfo(i).name,this.dsList.getColumnInfo(i));
        				}
        			}
        		break;
         
        		default:
        		break;	
        	}
        }

        /**
          * @함수명	: fnAddData
          * @desc   : 목록에 추가하는 함수
          */
        this.fnAddData = function(mtrlCd) {
        	
        	this.dsList.set_enableevent(false);
        	
        	var ridx = 0;
        	
        	if(!gfnIsNull(mtrlCd)){
        		ridx = this.dsList.findRow("MTRL_CD", mtrlCd);
        	}else{
        		ridx = this.dsList.rowposition;
        	}
        	
        	if(this.dsList.getColumn(ridx, "BTN_STATUS") == "1"){
        		this.dsSelList.set_enableevent(false);
        		this.dsList.setColumn(ridx, "BTN_STATUS", "0");
        		this.dsList.setColumn(ridx, "BTN_STATUS_NM", "삭제");
        		var nRow = this.dsSelList.addRow();
        		this.dsSelList.copyRow(nRow, this.dsList, ridx);
        		this.dsSelList.set_enableevent(true);
        	}else{
        		var nRow = 0;
        		
        		if(ridx > -1){
        			nRow = this.dsSelList.findRow("MTRL_CD", this.dsList.getColumn(ridx, "MTRL_CD"));
        		}else{
        			nRow = this.dsSelList.rowposition;
        		}
        	
        		if(nRow > -1){
        			if(ridx > -1){
        				this.dsList.setColumn(ridx, "BTN_STATUS", "1");
        				this.dsList.setColumn(ridx, "BTN_STATUS_NM", "추가");
        			}
        			this.dsSelList.deleteRow(nRow);
        		}		
        	}
        	this.dsList.set_enableevent(true);
        }
           
        /**
          * @함수명		: fnRtnData
          * @desc     	: 적용버튼 클릭 이벤트
          */   
        this.fnRtnData = function(obj,e)
        {
        	
        	if(this.dsSelList.rowcount != 0){
        		this.parent.close(this.dsSelList.saveXML());
        	} else{
        		gfnAlert("선택한 항목이 없습니다.");
        	}
        }

        /**
          * @함수명	: grdListOnkeydown
          * @desc     	: 그리드 Onkeydown 이벤트
          */
        this.grdListOnkeydown = function(obj,e)
        {
        	if(e.keycode == "13"){
        		this.fnAddData();
        	}
        }

        /**
          * @함수명	: fnOnecellclick
          * @desc     	: 그리드 원클릭 이벤트
          */
        this.fnOnecellclick = function(obj,e)
        {
        	if(gfnGrdBindColId(obj,e.cell) == "BTN_STATUS_NM"){
        		if(obj.name=="grdList"){
        			this.fnAddData();
        		}else{
        			this.fnAddData(this.dsSelList.getColumn(this.dsSelList.rowposition, "MTRL_CD"));
        		}
        	}
        }

        /**
          * @함수명	: fnOncelldbClick
          * @desc     	: 그리드 더블클릭 이벤트
          */
        this.fnOncelldbClick = function(obj,e)
        {
        	if(gfnGrdBindColId(obj,e.cell) == "MTRL_CD" || gfnGrdBindColId(obj,e.cell) == "MTRL_NM_SPEC") {
        		this.alert("상세 준비중");
        	}else if(gfnGrdBindColId(obj,e.cell) != "BTN_STATUS_NM") {
        		if(obj.name=="grdList"){
        			this.fnAddData();
        		}
        	}
        	
        }

        /**
          * @함수명	: fnOnKeyUp
          * @desc     	: KEY UP 이벤트
          */
        this.fnOnKeyUp = function(obj,e)
        {
        	if(e.keycode == "13"){
        		
        		obj.updateToDataset();
        		
        		if(obj.name == "edtMtrlCd" || obj.name == "edtMtrlNm"){
        			
        			this.fnSearch();
        			
        		}else if(obj.name =="edtOutStrNm"){
        			
        			this.fnSrchOutStr();
        			
        		}
        	}
        }

        /**
          * @함수명	: fnOnTextChanged
          * @desc     	: 텍스트변경시 발생하는 이벤트
          */
        this.fnOnTextChanged = function(obj,e)
        {
        	if(obj.name =="edtOutStrNm"){
        		this.dsSrchOpt.setColumn(0,"OUT_STR_CD","");
        	}	
        }

        /**
          * @함수명	: fnChkExistOnchanged
          * @desc     	: 재고유무에 따른 검색영역 변경 처리
          */
        this.fnChkExistOnchanged = function(obj,e)
        {
        	if(null == this.dsSrchOpt.getColumn(0,"EXIST") || "false" == this.dsSrchOpt.getColumn(0,"EXIST")){
        		this.dsSrchOpt.setColumn(0,"ALT_INVNTRY_MGMT","Y");
        	}else{
        		this.dsSrchOpt.setColumn(0,"ALT_INVNTRY_MGMT","");
        	}
        }

        /**
          * @함수명	: fnSrchOutStr
          * @desc     	: 출고창고 검색
          */
        this.fnSrchOutStr = function(obj,e)
        {
        	var sArg = {
        		agv_id: ""
        		,agv_nm: this.dsSrchOpt.getColumn(0,"OUT_STR_NM")
        	};
        	gfnSearchComSl(this, "BSlSrchPopup", "fnPopCallBack", sArg);
        }

        /**
          * @함수명	: fnNewMtrlReg
          * @desc     	: 신규상품등록
          */
        this.fnNewMtrlReg = function(obj,e)
        {
        	this.dsSelList.clear();
        	this.dsSelList.addColumn("MTRL_CD","STRING");
        	var row = this.dsSelList.addRow();
        	this.dsSelList.setColumn(row,"MTRL_CD","NEWITEM");
        	this.parent.close(this.dsSelList.saveXML());
        }

        /**
        	@function	fnPopCallBack()
        	@desc   	팝업 CallBack 함수
        */
        this.fnPopCallBack = function(sPopupId,rtn)
        {
        	this.dsReturn.clear();
        	this.dsReturn.loadXML(rtn);
        	
        	switch(sPopupId){
        		case "BSlSrchPopup" :
        			this.dsSrchOpt.setColumn(0,"OUT_STR_CD",this.dsReturn.getColumn(0,"STR_CD"));
        			this.dsSrchOpt.setColumn(0,"OUT_STR_NM",this.dsReturn.getColumn(0,"SL_NM"));
        			break;
        		default:
        			break;	
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fnOnLoad, this);
            this.divViewCompCond01.staCdPrePrDist.addEventHandler("onclick", this.Tab00_tabpage1_div_condition_sta_WFSA_LabelP_onclick, this);
            this.divViewCompCond01.chkExist.addEventHandler("onchanged", this.fnChkExistOnchanged, this);
            this.divViewCompCond01.edtOutStrNm.addEventHandler("ontextchanged", this.fnOnTextChanged, this);
            this.divViewCompCond01.edtOutStrNm.addEventHandler("onkeyup", this.fnOnKeyUp, this);
            this.divViewCompCond01.btnOutStr.addEventHandler("onclick", this.fnSrchOutStr, this);
            this.divViewCompCond01.cboAttr11.addEventHandler("onitemchanged", this.fnMtrlAttrChange, this);
            this.divViewCompCond01.cboAttr21.addEventHandler("onitemchanged", this.fnMtrlAttrChange, this);
            this.divViewCompCond01.cboAttr31.addEventHandler("onitemchanged", this.fnMtrlAttrChange, this);
            this.btnFold.addEventHandler("onclick", this.btnFold_onclick, this);
            this.divViewCompCond00.staMtrlType.addEventHandler("onclick", this.Tab00_tabpage1_div_condition_sta_WFSA_LabelP_onclick, this);
            this.divViewCompCond00.btnSearch.addEventHandler("onclick", this.fnSearch, this);
            this.divViewCompCond00.edtMtrlNm.addEventHandler("onkeyup", this.fnOnKeyUp, this);
            this.divViewCompCond00.edtMtrlCd.addEventHandler("onkeyup", this.fnOnKeyUp, this);
            this.divViewCompCond00.btnNewItemReg.addEventHandler("onclick", this.fnNewMtrlReg, this);
            this.divViewCompBody00.grdList.addEventHandler("onkeydown", this.grdListOnkeydown, this);
            this.divViewCompBody00.grdList.addEventHandler("oncellclick", this.fnOnecellclick, this);
            this.divViewCompBody00.grdList.addEventHandler("oncelldblclick", this.fnOncelldbClick, this);
            this.divViewCompBody00.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompBody00.staCntrCheck.addEventHandler("onclick", this.Tab00_tabpage1_div_condition_sta_WFSA_LabelP_onclick, this);
            this.divViewCompBody00.btnRtn.addEventHandler("onclick", this.fnRtnData, this);
            this.divViewCompBody00.grdAddList.addEventHandler("oncellclick", this.fnOnecellclick, this);
            this.divViewCompBody00.grdAddList.addEventHandler("oncelldblclick", this.fnOncelldbClick, this);

        };

        this.loadIncludeScript("BMtrlPrSrchMultiPopup.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
