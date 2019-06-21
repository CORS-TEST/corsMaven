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
                this.set_titletext("구매요청접수현황");
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
            obj._setContents("<ColumnInfo><Column id=\"PR_NO_ARR\" type=\"STRING\" size=\"256\"/><Column id=\"PR_NO\" type=\"string\" size=\"20\"/><Column id=\"CD_PR_ITEM_STTS\" type=\"string\" size=\"40\"/><Column id=\"REQ_DT_STR\" type=\"STRING\" size=\"8\"/><Column id=\"REQ_DT_END\" type=\"STRING\" size=\"8\"/><Column id=\"SRCH_STR_CD\" type=\"string\" size=\"40\"/><Column id=\"SRCH_STR_NM\" type=\"STRING\" size=\"300\"/><Column id=\"MTRL_CD\" type=\"string\" size=\"20\"/><Column id=\"MTRL_NM\" type=\"string\" size=\"20\"/><Column id=\"PCHRGR_ID\" type=\"string\" size=\"50\"/><Column id=\"PCHRGR_NM\" type=\"string\" size=\"50\"/><Column id=\"TTL\" type=\"string\" size=\"600\"/><Column id=\"CD_PR_CTGR\" type=\"STRING\" size=\"40\"/><Column id=\"SRCH_PTNR_ID\" type=\"STRING\" size=\"40\"/><Column id=\"SRCH_PTNR_NM\" type=\"STRING\" size=\"200\"/><Column id=\"IS_AUTO_PO\" type=\"STRING\" size=\"1\"/><Column id=\"SORT_ITEM1\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ITEM2\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ITEM3\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ITEM4\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE1\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE2\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE3\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE4\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_MTRL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CNST_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdPR13", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM10", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompCond01", "absolute", "0", "35", null, "110", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.getSetter("objNm").set("");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            obj = new Static("staWarning", "absolute", "-1", "89", null, "19", "0", null, this.divViewCompCond01);
            obj.set_taborder("49");
            obj.set_text("- 검색조건 없이 검색 시 속도가 저하 될 수 있습니다.");
            obj.set_cssclass("sta_WF_SearchText");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staPrNo", "absolute", "0", "5", "115", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("66");
            obj.set_text("구매요청번호");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staMtrl", "absolute", "363", "5", "85", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("70");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staPchrgrId", "absolute", "0", "34", "115", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("71");
            obj.set_text("구매담당자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("구매담당자");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staStr", "absolute", "817", "5", "85", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("74");
            obj.set_text("입고창고");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("입고창고");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staPchrgrId00", "absolute", "364", "34", "84", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("81");
            obj.set_text("구매요청자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("구매요청자");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divPrNo", "absolute", "115", "5", "220", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("82");
            obj.set_text("Div00");
            obj.getSetter("objNm").set("검색조건-요청자");
            obj.set_url("CCOMP::ComSrchInput.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divPchrgr", "absolute", "115", "34", "250", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("83");
            obj.set_text("Div00");
            obj.getSetter("objNm").set("검색조건-요청자");
            obj.set_url("CCOMP::ComSrchUser.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divReqr", "absolute", "448", "34", "250", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("84");
            obj.set_text("Div00");
            obj.getSetter("objNm").set("검색조건-요청자");
            obj.set_url("CCOMP::ComSrchUser.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divMtrl", "absolute", "448", "5", "350", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("85");
            obj.set_text("Div00");
            obj.getSetter("objNm").set("검색조건-품목");
            obj.set_url("CCOMP::ComSrchMtrl.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divStr", "absolute", "902", "5", "250", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("86");
            obj.set_text("Div00");
            obj.getSetter("objNm").set("검색조건-입고창고");
            obj.set_url("CCOMP::ComSrchStr.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);

            obj = new Div("divViewCompBody00", "absolute", "0", "171", null, null, "15", "0", this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "9", this.divViewCompBody00);
            obj.getSetter("objNm").set("페이징");
            obj.set_scrollbars("none");
            obj.set_taborder("2");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnPo", "absolute", null, "0", "87", "24", "264", null, this.divViewCompBody00);
            obj.set_taborder("3");
            obj.set_text("발주작성");
            obj.set_cssclass("btn_WF_Ssign");
            obj.getSetter("objNm").set("발주작성");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnRfq", "absolute", null, "0", "87", "24", "176", null, this.divViewCompBody00);
            obj.set_taborder("4");
            obj.set_text("견적작성");
            obj.set_cssclass("btn_WF_Ssign");
            obj.getSetter("objNm").set("견적작성");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnAutoPo", "absolute", null, "0", "87", "24", "0", null, this.divViewCompBody00);
            obj.set_taborder("5");
            obj.set_text("자동발주");
            obj.set_cssclass("btn_WF_Ssign");
            obj.getSetter("objNm").set("자동발주");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnTndr", "absolute", null, "0", "87", "24", "88", null, this.divViewCompBody00);
            obj.set_taborder("6");
            obj.set_text("입찰작성");
            obj.set_cssclass("btn_WF_Ssign");
            obj.getSetter("objNm").set("입찰작성");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnCntr", "absolute", null, "0", "87", "24", "352", null, this.divViewCompBody00);
            obj.set_taborder("7");
            obj.set_text("계약작성");
            obj.set_cssclass("btn_WF_Ssign");
            obj.getSetter("objNm").set("계약작성");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnChgPchrgr", "absolute", null, "0", "87", "24", "440", null, this.divViewCompBody00);
            obj.set_taborder("8");
            obj.set_text("담당자변경");
            obj.set_cssclass("btn_WF_Ssign");
            obj.getSetter("objNm").set("담당자변경");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnPrEnd", "absolute", null, "0", "87", "24", "616", null, this.divViewCompBody00);
            obj.set_taborder("9");
            obj.set_text("구매종료");
            obj.set_cssclass("btn_WF_Ssign");
            obj.getSetter("objNm").set("구매종료");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnPtnr", "absolute", null, "0", "87", "24", "528", null, this.divViewCompBody00);
            obj.set_taborder("10");
            obj.set_text("협력사지정");
            obj.set_cssclass("btn_WF_Ssign");
            obj.getSetter("objNm").set("협력사지정");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "31", null, null, "0", "36", this.divViewCompBody00);
            obj.set_cssclass("grd_default");
            obj.set_taborder("11");
            obj.set_binddataset("dsList");
            obj.set_autoenter("select");
            obj.set_selecttype("cell");
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
            obj.getSetter("f_version").set("20170114");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"102\"/><Column size=\"135\"/><Column size=\"77\"/><Column size=\"74\"/><Column size=\"90\"/><Column size=\"135\"/><Column size=\"90\"/><Column size=\"335\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"104\"/><Column size=\"150\"/><Column size=\"104\"/><Column size=\"150\"/><Column size=\"70\"/><Column size=\"104\"/><Column size=\"150\"/><Column size=\"200\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"구매요청번호\"/><Cell col=\"2\" text=\"구매요청품목번호\"/><Cell col=\"3\" text=\"품목분류\"/><Cell col=\"4\" text=\"상태\"/><Cell col=\"5\" text=\"입고창고\"/><Cell col=\"6\" text=\"입고창고명\"/><Cell col=\"7\" text=\"품목코드\"/><Cell col=\"8\" text=\"품목명\"/><Cell col=\"9\" text=\"수량\"/><Cell col=\"10\" text=\"단위\"/><Cell col=\"11\" text=\"단가\"/><Cell col=\"12\" text=\"금액\"/><Cell col=\"13\" text=\"납품요청일자\"/><Cell col=\"14\" text=\"협력사\"/><Cell col=\"15\" text=\"구매담당자\"/><Cell col=\"16\" text=\"접수일시\"/><Cell col=\"17\" text=\"요청자\"/><Cell col=\"18\" text=\"입고계정코드\"/><Cell col=\"19\" text=\"입고계정명\"/><Cell col=\"20\" text=\"품목분류\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\" expandshow=\"hide\"/><Cell col=\"1\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:PR_NO\"/><Cell col=\"2\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:PR_ITEM_ID\"/><Cell col=\"3\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:CD_DOC_CTGR_NM\"/><Cell col=\"4\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:CD_PR_ITEM_STTS_NM\"/><Cell col=\"5\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:STR_CD\"/><Cell col=\"6\" style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:STR_NM\"/><Cell col=\"7\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;color:blue;color2:blue;\" cssclass=\"cell_link\" text=\"bind:MTRL_CD\" tooltiptext=\"bind:MTRL_CD\"/><Cell col=\"8\" style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:MTRL_NM\" expandshow=\"show\" expandsize=\"24\" expandimage=\"bind:IMG_TYPE\" tooltiptext=\"bind:MTRL_NM\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:QTY\" mask=\"#,##0.00\"/><Cell col=\"10\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:CD_UNIT_NM\"/><Cell col=\"11\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:REQ_PRICE\" mask=\"#,##0.00\" editautoselect=\"true\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"expr:QTY * REQ_PRICE\" mask=\"#,##0.00\"/><Cell col=\"13\" displaytype=\"date\" edittype=\"none\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:DLV_REQ_DAY\" mask=\"yyyy.MM.dd\" editautoselect=\"true\" calendardisplaynulltext=\"none\"/><Cell col=\"14\" style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:PTNR_NM\"/><Cell col=\"15\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:PCHRGR_NM\"/><Cell col=\"16\" displaytype=\"normal\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:RCV_DT_MASK\"/><Cell col=\"17\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:REQR_NM\"/><Cell col=\"18\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:GR_ACNT_CD\" maskchar=\" \"/><Cell col=\"19\" style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:GR_ACNT_NM\"/><Cell col=\"20\" style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:MTRL_GRP_NM2\" tooltiptext=\"bind:MTRL_GRP_NM\"/></Band></Format><Format id=\"format_copy\"></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Div("divViewCompCond00", "absolute", "0", "0", null, "36", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.style.set_align("center");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);
            obj = new Div("divCntrDt", "absolute", "121", "6", "219", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("1");
            obj.getSetter("objNm").set("요청일자");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Combo("cboPrStts", "absolute", "652", "6", "111", "24", null, null, this.divViewCompCond00);
            this.divViewCompCond00.addChild(obj.name, obj);
            var cboPrStts_innerdataset = new Dataset("cboPrStts_innerdataset", this.divViewCompCond00.cboPrStts);
            cboPrStts_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows/>");
            obj.set_innerdataset(cboPrStts_innerdataset);
            obj.set_taborder("3");
            obj.set_innerdataset("@dsCdCM10");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("요청분류");
            obj.set_index("-1");
            obj = new Combo("cboPrCtgr", "absolute", "454", "6", "111", "24", null, null, this.divViewCompCond00);
            this.divViewCompCond00.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_innerdataset("@dsCdPR13");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("상태");
            obj = new Static("staPtnrNm", "absolute", "0", "5", "115", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("6");
            obj.set_text("요청일자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("요청일자");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staPtnrNm00", "absolute", "577", "6", "75", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("7");
            obj.set_text("요청분류");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("요청분류");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staPtnrNm01", "absolute", "369", "6", "85", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("8");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new CheckBox("chkAutoPo", "absolute", "826", "6", "76", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("9");
            obj.set_text("자동발주");
            obj.getSetter("objNm").set("자동발주");
            this.divViewCompCond00.addChild(obj.name, obj);

            obj = new Button("btnFold", "absolute", "45.66%", "145", "56", "17", null, null, this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_Fold_Close");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", null, "0", "15", null, "0", "0", this);
            obj.set_taborder("7");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 110, this.divViewCompCond01,
            	//-- Layout function
            	function(p) {
            		p.set_cssclass("div_WF_SearchBg");
            		p.getSetter("objNm").set("");
            		p.set_taborder("0");

            	}
            );
            this.divViewCompCond01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_text("Div00");

            	}
            );
            this.divViewCompBody00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 36, this.divViewCompCond00,
            	//-- Layout function
            	function(p) {
            		p.set_cssclass("div_WF_SearchBg");
            		p.style.set_align("center");
            		p.set_taborder("3");

            	}
            );
            this.divViewCompCond00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1220, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("구매요청접수현황");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","divViewCompCond00.cboPrStts","value","dsCondition","CD_PR_CTGR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","divViewCompCond00.cboPrCtgr","value","dsCondition","CD_PR_ITEM_STTS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnCntrAddVi","divViewCompBody00.btnPo","visible","dsObjBindVi","btnCntrAdd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnCntrAddEn","divViewCompBody00.btnPo","enable","dsObjBindEn","btnCntrAdd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","divViewCompBody00.btnRfq","visible","dsObjBindVi","btnCntrAdd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","divViewCompBody00.btnRfq","enable","dsObjBindEn","btnCntrAdd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","divViewCompBody00.btnAutoPo","visible","dsObjBindVi","btnCntrAdd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","divViewCompBody00.btnAutoPo","enable","dsObjBindEn","btnCntrAdd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","divViewCompBody00.btnTndr","visible","dsObjBindVi","btnCntrAdd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","divViewCompBody00.btnTndr","enable","dsObjBindEn","btnCntrAdd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","divViewCompBody00.btnCntr","visible","dsObjBindVi","btnCntrAdd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","divViewCompBody00.btnCntr","enable","dsObjBindEn","btnCntrAdd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","divViewCompBody00.btnChgPchrgr","visible","dsObjBindVi","btnCntrAdd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","divViewCompBody00.btnChgPchrgr","enable","dsObjBindEn","btnCntrAdd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","divViewCompBody00.btnPrEnd","visible","dsObjBindVi","btnCntrAdd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","divViewCompBody00.btnPrEnd","enable","dsObjBindEn","btnCntrAdd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","divViewCompBody00.btnPtnr","visible","dsObjBindVi","btnCntrAdd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","divViewCompBody00.btnPtnr","enable","dsObjBindEn","btnCntrAdd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPrNoVi","divViewCompCond01.staPrNo","visible","dsObjBindVi","staPrNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPrNoEn","divViewCompCond01.staPrNo","enable","dsObjBindEn","staPrNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staMtrlVi","divViewCompCond01.staMtrl","visible","dsObjBindVi","staMtrl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staMtrlEn","divViewCompCond01.staMtrl","enable","dsObjBindEn","staMtrl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPchrgrIdVi","divViewCompCond01.staPchrgrId","visible","dsObjBindVi","staPchrgrId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPchrgrIdEn","divViewCompCond01.staPchrgrId","enable","dsObjBindEn","staPchrgrId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPagingVi","divViewCompBody00.divPaging","visible","dsObjBindVi","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPagingEn","divViewCompBody00.divPaging","enable","dsObjBindEn","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnPoVi","divViewCompBody00.btnPo","visible","dsObjBindVi","btnPo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnPoEn","divViewCompBody00.btnPo","enable","dsObjBindEn","btnPo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnRfqVi","divViewCompBody00.btnRfq","visible","dsObjBindVi","btnRfq");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnRfqEn","divViewCompBody00.btnRfq","enable","dsObjBindEn","btnRfq");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnAutoPoVi","divViewCompBody00.btnAutoPo","visible","dsObjBindVi","btnAutoPo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnAutoPoEn","divViewCompBody00.btnAutoPo","enable","dsObjBindEn","btnAutoPo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnTndrVi","divViewCompBody00.btnTndr","visible","dsObjBindVi","btnTndr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnTndrEn","divViewCompBody00.btnTndr","enable","dsObjBindEn","btnTndr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnCntrVi","divViewCompBody00.btnCntr","visible","dsObjBindVi","btnCntr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnCntrEn","divViewCompBody00.btnCntr","enable","dsObjBindEn","btnCntr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnChgPchrgrVi","divViewCompBody00.btnChgPchrgr","visible","dsObjBindVi","btnChgPchrgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnChgPchrgrEn","divViewCompBody00.btnChgPchrgr","enable","dsObjBindEn","btnChgPchrgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnPrEndVi","divViewCompBody00.btnPrEnd","visible","dsObjBindVi","btnPrEnd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnPrEndEn","divViewCompBody00.btnPrEnd","enable","dsObjBindEn","btnPrEnd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnPtnrVi","divViewCompBody00.btnPtnr","visible","dsObjBindVi","btnPtnr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnPtnrEn","divViewCompBody00.btnPtnr","enable","dsObjBindEn","btnPtnr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divCntrDtVi","divViewCompCond00.divCntrDt","visible","dsObjBindVi","divCntrDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divCntrDtEn","divViewCompCond00.divCntrDt","enable","dsObjBindEn","divCntrDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboPrSttsVi","divViewCompCond00.cboPrStts","visible","dsObjBindVi","cboPrStts");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboPrSttsEn","divViewCompCond00.cboPrStts","readonly","dsObjBindEn","cboPrStts");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboPrCtgrVi","divViewCompCond00.cboPrCtgr","visible","dsObjBindVi","cboPrCtgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboPrCtgrEn","divViewCompCond00.cboPrCtgr","readonly","dsObjBindEn","cboPrCtgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPtnrNmVi","divViewCompCond00.staPtnrNm","visible","dsObjBindVi","staPtnrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPtnrNmEn","divViewCompCond00.staPtnrNm","enable","dsObjBindEn","staPtnrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPtnrNm00Vi","divViewCompCond00.staPtnrNm00","visible","dsObjBindVi","staPtnrNm00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPtnrNm00En","divViewCompCond00.staPtnrNm00","enable","dsObjBindEn","staPtnrNm00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPtnrNm01Vi","divViewCompCond00.staPtnrNm01","visible","dsObjBindVi","staPtnrNm01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPtnrNm01En","divViewCompCond00.staPtnrNm01","enable","dsObjBindEn","staPtnrNm01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnFoldVi","btnFold","visible","dsObjBindVi","btnFold");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnFoldEn","btnFold","enable","dsObjBindEn","btnFold");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static01Vi","Static01","visible","dsObjBindVi","Static01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static01En","Static01","enable","dsObjBindEn","Static01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","divViewCompCond01.staStr","visible","dsObjBindVi","staMtrl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","divViewCompCond01.staStr","enable","dsObjBindEn","staMtrl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item39","divViewCompCond01.staPchrgrId00","visible","dsObjBindVi","staPchrgrId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item40","divViewCompCond01.staPchrgrId00","enable","dsObjBindEn","staPchrgrId");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::ComSrchInput.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComSrchUser.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComSrchUser.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComSrchMtrl.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComSrchStr.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompCalFromTo.xfdl");
        };
        
        // User Script
        this.registerScript("BPrRcvList.xfdl", function(exports) {
        /**
         * @파일명			: BPrRcvList
         * @생성자			: 배열
         * @생성일시		: 2019. 05. 22.
         * @설명			: 구매요청접수현황
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
        					 {code:"PR13", sSelectType:"A"}
        					 ,{code:"CM10", sSelectType:"A"}
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
        				{ttl:this.btnFold, body:this.divViewCompCond01,initFold:true}
        		   ];		   
        	gfnDivFold(this, sArg);
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
         	gfnSetGrdFunc(this.divViewCompBody00.grdList, this.divViewCompBody00.divPaging, this,{isTran:"Y", tranNm:"BPrePrService.prRcvSrch", dsParam:this.dsCondition});
         	
         		
        	this.divViewCompCond00.divCntrDt.fnSetDate(this.dsCondition, "DAY_STR", "DAY_END");	
        	this.divViewCompCond01.divPrNo.fnSet(this.dsCondition, "PR_NO", "fnSearch");	
        	
        	this.divViewCompCond01.divMtrl.fnSet(this.dsCondition, "MTRL_CD", "MTRL_NM");	
        	this.divViewCompCond01.divPchrgr.fnSet(this.dsCondition, "PCHRGR_ID", "PCHRGR_NM");	
        	this.divViewCompCond01.divReqr.fnSet(this.dsCondition, "REQR_ID", "REQR_NM");	
        	this.divViewCompCond01.divStr.fnSet(this.dsCondition, "SRCH_STR_CD", "SRCH_STR_NM");	
        	this.dsCondition.setColumn(0,"CD_PR_ITEM_STTS","PR13RCV");
        	this.dsCondition.setColumn(0,"CD_PR_CTGR","");
         	
         	//로그인정보에 담겨져 있는 개인정보를 검색조건에 셋팅한다.
        	if(application.gdsUserRole.findRow("ROLE_ID","B_MANAGER")< 0 ){
        		this.dsCondition.setColumn(0,"CNTR_CHRGR_ID",application.gdsUserInfo.getColumn(0,"USER_ID"));
        		this.dsCondition.setColumn(0,"CNTR_CHRGR_NM",application.gdsUserInfo.getColumn(0,"USER_NM"));
        	}
        	
        	this.fnFold();
         	this.fnSearch();
        }

        /**
          * @함수명	: fnPreSearch
          * @desc     	: 조회 전 처리
          */
        this.fnPreSearch = function(arg,arg2)
        {
        	//선택된 아이템의 유무를 리턴한다.
        	var rtn = gfnGetChkRowString(this.dsList);	
        	if(!rtn) return false;
        	
        	this.dsList.set_enableevent(false);
        	this.dsList.filter("CHECKED==1");
        	
        	var cdDocCtgr = ""
        	for(var i=0; i<this.dsList.rowcount; i ++){

        		if(arg2 != "CAN"){
        			if("Y" == this.dsList.getColumn(i,"ALT_REQ_CXL")){
        				if(!gfnConfirm("구매요청자가 취소요청한 상품이 있습니다.\n진행하시겠습니까?")){
        					this.dsList.filter("");
        					this.dsList.set_enableevent(true);
        					return;
        				}
        			}
        		}

        		//구매요청상태가 접수 인것만 처리 가능
        		if("PR13RCV" != this.dsList.getColumn(i,"CD_PR_ITEM_STTS")){
        			gfnAlert("구매요청상태가 접수인것만 처리가능합니다.");
        			this.dsList.filter("");
        			this.dsList.set_enableevent(true);
        			return false;
        		}

        		if(arg!="CHGUSER"){
        			//로그인한 사람이 구매담당자인지를 확인
        			if("" == this.dsList.getColumn(i,"PCHRGR_ID")){
        				this.dsList.filter("");
        				this.dsList.set_enableevent(true);
        				return true;
        			} else if(this.dsList.getColumn(i,"PCHRGR_ID") != application.gdsUserInfo.getColumn(0,"USER_ID")){
        				gfnAlert("구매담당자가 다른 것을 변경할 수 없습니다.");
        				this.dsList.filter("");
        				this.dsList.set_enableevent(true);
        				return false;
        			}
        		}

        		if(arg =="CHGUSER"){
        			//담당자 변경일 경우 권한이 없으면 담당자를 변경 할 수 없음
        				if(this.dsList.getColumn(i,"PCHRGR_ID") != application.gdsUserInfo.getColumn(0,"USER_ID")){
        					if("" == this.dsList.getColumn(i,"PCHRGR_ID")){
        					this.dsList.filter("");
        					this.dsList.set_enableevent(true);
        					return true;
        				} else if("Y" != this.dsList.getColumn(i,"IS_AUTH")){
        					gfnAlert("구매담당자가 다른 것을 변경할 수 없습니다.");
        					this.dsList.filter("");
        					this.dsList.set_enableevent(true);
        					return false;
        				}
        			}
        		}
        		
        		//문서유형이 동일한 품목들만 처리 가능
        		if(arg=="A"){

        			if(i==0){
        				cdDocCtgr = this.dsList.getColumn(i,"CD_DOC_CTGR");
        			}else if(cdDocCtgr != this.dsList.getColumn(i,"CD_DOC_CTGR")){
        				gfnAlert("문서유형이 동일한 품목들만 처리가능합니다.");
        				this.dsList.filter("");
        				this.dsList.set_enableevent(true);
        				return false;
        			}
        			
        			if(this.dsList.getColumn(i,"MTRL_CD")==""){
        				gfnAlert("자재코드가 없는 품목은 진행하실 수 없습니다");
        				this.dsList.filter("");
        				this.dsList.set_enableevent(true);
        				return false;
        			}
        		}
        	}
        		
        	this.dsList.filter("");
        	this.dsList.set_enableevent(true);
        	
        	return true;
        }

        /**
          * @함수명	: fnSearch
          * @desc     	: 조회 프로세스
          */
        this.fnSearch = function(svcId)
        {
        	
        	var sSvcID = "prRcvSrch";
        	var sController = "epro.pur.service.BPrService.prRcvSrch";
        	var sInDatasets = "dsCondition=dsCondition";
        	var sOutDatasets = "dsList=dsList";
        	var sCallbackFunc = "fnTrCallBack";
        		
         	var	oPaging = [      
                            {inDs:this.dsCondition, grid:this.divViewCompBody00.grdList, divPaging:this.divViewCompBody00.divPaging}
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
        		case "prRcvSrch" :
        		break;
        		case "PrClosePop" :
        			gfnAlert("구매종료처리 되었습니다.");
        			this.fnSearch();
        		break;
        		
        		case "PrChgUserChk" :
        			var nRow = this.dsList.findRow("CHECKED","1");
        			alert(nRow);
        			var sArg = {
        						agv_id : this.dsList.getColumn(nRow,"PCHRGR_ID")
        						,agv_nm : this.dsList.getColumn(nRow,"PCHRGR_NM")
        						};
        			this.gfn_dialog("PopupPchrgr", "BPUR::BPrChgPchrgrPop.xfdl", sArg, "fnPopCallBack");
        		break;
        		
        		case "savePtnrChange" :
        			gfnAlert("협력사가 되었습니다.");
        			this.fnSearch();
        		break;
        		
        				
        		default:
        		break;	
        	}
        }

        
        /**
          * @함수명	: fnTrCallBack
          * @input    	: strSvcID(트랜잭션 ID), strErrCd(트랜잭션 결과 코드), strErrMsg(트랜잭션 결과 메시지)
          * @desc     	: Transaction Callback함수
          */
        this.grdListOnCelldblclick = function(obj,e)
        {
        	if(gfnIsNull(this.dsList.getColumn(e.row,gfnGrdBindColId(obj, e.cell)))) return false;

        	if(gfnGrdBindColId(obj, e.cell)=="PR_NO")	//요청번호
        	{
        		gfnSetTmprData("PR_NO" ,this.dsList.getColumn(e.row, "PR_NO"));
        		gfnOpenMenuUrl("BPUR::BPrePrDetail");
        	}
        }

        /**
          * @함수명	: fnTrCallBack
          * @input    	: strSvcID(트랜잭션 ID), strErrCd(트랜잭션 결과 코드), strErrMsg(트랜잭션 결과 메시지)
          * @desc     	: Transaction Callback함수
          */
        this.fnAdd = function() 
        {
        	gfnOpenMenuUrl("BPUR::BPrePrDetail");
        }
         
        /**
          * @함수명	: divViewCompBody00_btnPrEnd_onclick
          * @input    	: strSvcID(트랜잭션 ID), strErrCd(트랜잭션 결과 코드), strErrMsg(트랜잭션 결과 메시지)
          * @desc     	: 구매요청종료
          */
        this.divViewCompBody00_btnPrEnd_onclick = function(obj,e)
        {
        	if(this.fnPreSearch("A","CAN")){ 
        		
        		var sArg = { 
        					pr_item_id : this.dsList.getColumn(e.row, "PR_ITEM_ID")
        					};
        		gfnModalPop(this, "PrClosePop", "BPUR::BPrClosePop.xfdl", sArg, "fnPopCallBack", 550, 500);		
        	}
        	
        	
        }

        /**
          * @함수명	: divViewCompBody00_btnChgPchrgr_onclick
          * @input    	: strSvcID(트랜잭션 ID), strErrCd(트랜잭션 결과 코드), strErrMsg(트랜잭션 결과 메시지)
          * @desc     	: 담당자지정버튼
          */
        this.divViewCompBody00_btnChgPchrgr_onclick = function(obj,e)
        {
        	if(this.fnPreSearch("CHGUSER")){ 
        		
        		
        		var sSvcID = "PrChgUserChk";
        		var sController = "epro.pur.service.BPrService.prChgUserChk";
        		var sInDatasets = "dsReturn=dsReturn";
        		var sOutDatasets = "";
        		var sCallbackFunc = "fnTrCallBack";
        		
        		gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        		
        		 
        	}
        }

        
        /**
        	@function	fn_popCallBack()
        	@desc   	팝업 CallBack 함수
        */
        this.fnPopCallBack = function(sPopupId,rtn)
        {
        	if(gfnIsNull(rtn)) return;
        	
        	if(rtn.indexOf("<Dataset id=") == 0){
        		
        		this.dsReturn.loadXML(rtn);
        		
        		//요청창고 검색 CallBack
        		if(sPopupId == "strSearch"){
        			
        			this.dsCondition.setColumn(0,"SRCH_STR_CD",this.dsReturn.getColumn(0,"STR_CD"));
        			this.dsCondition.setColumn(0,"SRCH_STR_NM",this.dsReturn.getColumn(0,"SL_NM"));
        			
        		//자재검색 CallBack
        		}else if(sPopupId == "mtrlSearch"){
        			
        			this.dsCondition.setColumn(0,"MTRL_CD",this.dsReturn.getColumn(0,"MTRL_CD"));
        			this.dsCondition.setColumn(0,"MTRL_NM",this.dsReturn.getColumn(0,"MTRL_NM"));
        			
        		//구매담당자 검색 CallBack			
        		}else if(sPopupId == "pchrgeSearch"){
        			
        			this.dsCondition.setColumn(0,"PCHRGR_ID",this.dsReturn.getColumn(0,"USER_ID"));
        			this.dsCondition.setColumn(0,"PCHRGR_NM",this.dsReturn.getColumn(0,"USER_NM"));
        			
        		//구매요청자 검색 CallBack			
        		}else if(sPopupId == "reqrSearch"){
        			
        			this.dsCondition.setColumn(0,"REQR_ID",this.dsReturn.getColumn(0,"USER_ID"));
        			this.dsCondition.setColumn(0,"REQR_NM",this.dsReturn.getColumn(0,"USER_NM"));
        				
        		//구매담당자변경	
        		}else if(sPopupId == "PopupPchrgr"){
        			
        			for(var i = 0 ; i < this.dsList.rowcount; i ++){
        				if("1" == this.dsList.getColumn(i,"CHECKED")){
        					this.dsList.setColumn(i,"PCHRGR_ID",this.dsReturn.getColumn(0,"PCHRGR_ID"));
        					this.dsList.setColumn(i,"PCHRGR_NM",this.dsReturn.getColumn(0,"PCHRGR_NM"));
        					
        				}
        			}
        			//DataBase 의 상태 값을 변경한다.
        			var sSvcID = "BPur_PurChgUsr";
        			var sController = "BPur_PurChgUsr.do";
        			var sInDatasets = "in_prItem=dsList:U";
        			var sOutDatasets = "dsList=in_prItem";
        			var sCallbackFunc = "fnTrCallBack";

        			this.gfn_tran(sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        			
        		// 협력업체지정
        		}else if(sPopupId == "searchPtnr"){
        			if(!gfnConfirm("협력업체를 지정 하시겠습니까?")) return false;
        		
        			this.dsList.set_enableevent(false);
        			this.dsList.filter("CHECKED == 1");
        			
        			for(var i=0; i<this.dsList.rowcount; i++){
        				this.dsList.setColumn(i,"PTNR_ID",this.dsReturn.getColumn(0,"PTNR_ID"));
        				this.dsList.setColumn(i,"PTNR_NM",this.dsReturn.getColumn(0,"PTNR_NM"));
        			}
        			
        			this.dsList.filter("");
        			this.dsList.set_enableevent(true);
        			
        			this.fn_ptnrSetSave();
        			
        		// 구매종료 CallBack
        		}else if(sPopupId == "PrClosePop"){
        			
        			var sSvcID = "PrClosePop";
        			var sController = "epro.pur.service.BPrService.savePrClose";
        			var sInDatasets = "dsReturn=dsReturn";
        			var sOutDatasets = "";
        			var sCallbackFunc = "fnTrCallBack";
        			
        			gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        		}
        		
        	}
        }
        this.fn_onkeydown_event = function(obj,e)
        {
        	//Enter 입력시
        	if(e.keycode == "13"){
        		obj.updateToDataset();
        		
        		// 요청창고 검색
        		if(obj.name == "edtStrNm"){
        			this.fnStrSearch();
        			
        		// 품목 검색
        		}else if(obj.name == "edtMtrlNm"){
        			this.fnMtrlSearch();
        		
        		// 담당자 검색
        		}else if(obj.name == "edtPchrgrNm"){
        			this.fnPchrgeSearch();
        		
        		// 구매요청자 검색
        		}else if(obj.name == "edtReqrNm"){
        			this.fnReqrSearch();
        		
        		// 구매요청번호 검색
        		}else if(obj.name == "edtPrNo"){
        			this.fn_commSrch();
        		}
        		
        		
        	}	
        }
        /**
        	@function	fnMtrlSearch()
        	@desc   	품목검색 함수
        */ 
        this.fnMtrlSearch = function(obj,e)
        {
        	var sArg = {
        				agv_id 	: this.dsCondition.getColumn(0,"MTRL_CD")
        				,agv_nm : this.dsCondition.getColumn(0,"MTRL_NM")
        				};
        	gfnModalPop(this, "mtrlSearch", "CPOP::BMtrlSrchPopup.xfdl", sArg, "fnPopCallBack", 1000, 600);
        }
        /**
        	@function	fnStrSearch()
        	@desc   	입고창고검색 함수
        */
        this.fnStrSearch = function(obj,e)
        {
        	var sArg = {
        				agv_id 	: this.dsCondition.getColumn(0,"STR_CD")
        				,agv_nm : this.dsCondition.getColumn(0,"SL_NM")
        				};
        	gfnModalPop(this, "strSearch", "CPOP::BSlSrchPopup.xfdl", sArg, "fnPopCallBack", 800, 600);
        }
        /**
        	@function	fnPchrgeSearch()
        	@desc   	구매담당자검색 함수
        */
        this.fnPchrgeSearch = function(obj,e)
        {
        	var sArg = {
        				agv_id 	: this.dsCondition.getColumn(0,"USER_ID")
        				,agv_nm : this.dsCondition.getColumn(0,"USER_NM")
        				};
        	gfnModalPop(this, "pchrgeSearch", "CPOP::BUserSrchPopup.xfdl", sArg, "fnPopCallBack", 1000, 600);
        }
        /**
        	@function	fnReqrSearch()
        	@desc   	구매요청자검색 함수
        */
        this.fnReqrSearch = function(obj,e)
        {
        	var sArg = {
        				agv_id 	: this.dsCondition.getColumn(0,"USER_ID")
        				,agv_nm : this.dsCondition.getColumn(0,"USER_NM")
        				};
        	gfnModalPop(this, "reqrSearch", "CPOP::BUserSrchPopup.xfdl", sArg, "fnPopCallBack", 1000, 600);
        }

        this.Edit_ontextchanged = function(obj,e)
        {
        	// 요청창고 검색
        	if(obj.name == "edtStrNm"){
        		gfnInitKey(this.dsCondition,e,"SRCH_STR_CD");
        		
        	// 품목 검색
        	}else if(obj.name == "edtMtrlNm"){
        		gfnInitKey(this.dsCondition,e,"MTRL_CD");
        	
        	// 담당자 검색
        	}else if(obj.name == "edtPchrgrNm"){
        		gfnInitKey(this.dsCondition,e,"PCHRGR_ID");
        	
        	// 구매요청자 검색
        	}else if(obj.name == "edtReqrNm"){
        		gfnInitKey(this.dsCondition,e,"REQR_ID");
        	
        	// 구매요청번호 검색
        	}else if(obj.name == "edtPrNo"){
        		gfnInitKey(this.dsCondition,e,"REQ_DEPT_CD");
        	}
        }
        /**
        	@function	fnPtnrSearch()
        	@desc   	협력사지정 함수
        */
        this.fnPtnrSearch = function(obj,e)
        {
        	//선택된 아이템의 유무를 리턴한다.
        	//선택된 아이템의 유무를 리턴한다.
        	var rtn = gfnGetChkRowString(this.dsList);	
        	if(!rtn) return false;
        	
        	this.dsList.set_enableevent(false);
        	this.dsList.filter("CHECKED==1");
        	//로그인한 사람이 구매담당자인지를 확인
        	for(var i = 0 ; i < this.dsList.rowcount; i++){
        		
        		if("PR13RCV" != this.dsList.getColumn(i,"CD_PR_ITEM_STTS")){
        			gfnAlert("구매요청상태가 접수인것만 처리가능합니다.");
        			this.dsList.filter("");
        			this.dsList.set_enableevent(true);
        			return false;
        		}
        		
        		if(this.dsList.getColumn(i,"PCHRGR_ID") != application.gdsUserInfo.getColumn(0,"USER_ID")){
        			gfnAlert("구매담당자가 다른 것을 변경할 수 없습니다.");
        			this.dsList.filter("");
        			this.dsList.set_enableevent(true);
        			return false;
        		}
        		if(this.dsList.getColumn(i,"MTRL_CD") == ""){
        			gfnAlert("신규등록요청된 상품은 협력사지정을 하실 수 없습니다.");
        			this.dsList.filter("");
        			this.dsList.set_enableevent(true);
        			return false;
        		}
        	}
        	
        	this.dsList.filter("");
        	this.dsList.set_enableevent(true);
        	
        	
        	var sArg = {
        				agv_id 	: ""
        				,agv_nm : ""
        				};
        	gfnModalPop(this, "searchPtnr", "CPOP::BPtnrSrchPopup.xfdl", sArg, "fnPopCallBack", 800, 600);
        }

        

        /**
        	@function	fn_ptnrSetSave()
        	@desc   	협력업체지정 저장
        */
        this.fn_ptnrSetSave = function()
        {	
        	var sSvcID = "savePtnrChange";
        	var sController = "epro.pur.service.BPrService.savePtnrChange";
        	var sInDatasets = "dsList=dsList";
        	var sOutDatasets = "";
        	var sCallbackFunc = "fnTrCallBack";
        	
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }
        this.fnCntrWrite = function(obj,e)
        {
        	if(this.fnPreSearch("A")){
        		
        		if(!gfnConfirm("계약서를 작성하시겠습니까?")) return;
        		
        		//견적작성시 PR_ITEM 정보만 계약작성 화면으로 보낸다.
        		this.dsList.set_enableevent(false);
        		
        		var rtn = gfnGetChkRowString(this.dsList);
        		
        		gfnSetTmprData("PR_REQ_CNTR_YN", "Y");
        		gfnSetTmprData("PR_REQ_CNTR_DATA", rtn);
        		gfnOpenMenuUrl("BCNTR::BCntrDetail.xfdl");
        		
        		//임시로 진행하면 화면의 데이터 삭제
        		this.dsList.filter("CHECKED=='1'");
        		this.dsList.deleteAll();
        		this.dsList.filter("");
        		this.dsList.set_enableevent(true);
        	}
        }

        this.fnPoWrite = function(obj,e)
        {
        	if(this.fnPreSearch("A")){

        		if(!gfnConfirm("발주를 작성하시겠습니까?")) return;
        		gfnSetTmprData("PR_REQ_PO_YN", "Y");
        	
        		var rtn = gfnGetChkRowString(this.dsList);
        		this.dsReturn.loadXML(rtn);
        				
        		var prItemId_array = new Array();
        		for(var i=0; i<this.dsReturn.rowcount; i++){
        			 prItemId_array[i] = this.dsReturn.getColumn(i,"PR_ITEM_ID");
        		}
        		
        		gfnSetTmprData("PR_REQ_PO_PRITEMID", prItemId_array);
        		
        		gfnOpenMenuUrl("BPOR::BPorDetail.xfdl");
        		
        		//임시로 진행하면 화면의 데이터 삭제
        		this.dsList.set_enableevent(false);
        		this.dsList.filter("CHECKED=='1'");
        		this.dsList.deleteAll();
        		this.dsList.filter("");
        		this.dsList.set_enableevent(true);
        	}
        }

        this.fnRfqWrite = function(obj,e)
        {
        	if(this.fnPreSearch("A")){
        		
        		if(!gfnConfirm("견적서를 작성하시겠습니까?")) return;
        		
        		//견적작성시 PR_ITEM 정보만 견적작성 화면으로 보낸다.
        		this.dsList.set_enableevent(false);
        		var rtn = gfnGetChkRowString(this.dsList);
        		gfnSetTmprData("PR_REQ_RFQ_YN", "Y");
        		gfnSetTmprData("PR_REQ_RFQ_DATA", rtn);
        		gfnOpenMenuUrl("BRFQ::BRfqWrtDetail.xfdl");
        		
        		//임시로 진행하면 화면의 데이터 삭제
        		this.dsList.filter("CHECKED=='1'");
        		this.dsList.deleteAll();
        		this.dsList.filter("");
        		this.dsList.set_enableevent(true);
        	}	
        }

        this.fnTndrWrite = function(obj,e)
        {
        	if(this.fnPreSearch("A")){
        		
        		if(!gfnConfirm("입찰서를 작성하시겠습니까?")) return;
        		
        		//견적작성시 PR_ITEM 정보만 견적작성 화면으로 보낸다.
        		this.dsList.set_enableevent(false);
        		var rtn = gfnGetChkRowString(this.dsList);
        		gfnSetTmprData("PR_REQ_TNDR_YN", "Y");
        		gfnSetTmprData("PR_REQ_TNDR_DATA", rtn);
        		gfnOpenMenuUrl("BTNDR::BTndrDetail.xfdl");
        		
        		//임시로 진행하면 화면의 데이터 삭제
        		this.dsList.filter("CHECKED=='1'");
        		this.dsList.deleteAll();
        		this.dsList.filter("");
        		this.dsList.set_enableevent(true);
        	}
        }

        

        this.fnAutoPoWrite = function(obj,e)
        {
        	
        }

        this.divViewCompBody00_grdList_oncellclick = function(obj,e)
        {
        	if(gfnIsNull(this.dsList.getColumn(e.row,gfnGrdBindColId(obj, e.cell)))) return false;

        	if(gfnGrdBindColId(obj, e.cell)=="PR_NO")	//요청번호
        	{
        		gfnSetTmprData("PR_NO" ,this.dsList.getColumn(e.row, "PR_NO"));
        		gfnOpenMenuUrl("BPUR::BPrDetail");
        	}else if(gfnGrdBindColId(obj, e.cell)=="REQR_NM")	//요청자명
        	{
        		var sArg = {
        				agv_id 		: this.dsList.getColumn(e.row,"REQR_ID")
        				,branch_cd 	: application.gdsUserInfo.getColumn(0,"BRANCH_CD")
        				};
        		gfnModalPop(this, "", "CPOP::BUserInfoPopup.xfdl", sArg, "fnPopCallBack", 400, 230);
        	}else if(gfnGrdBindColId(obj, e.cell)=="PCHRGR_NM")	//구매담당자명
        	{
        		var sArg = {
        				agv_id 		: this.dsList.getColumn(e.row,"PCHRGR_ID")
        				,branch_cd 	: application.gdsUserInfo.getColumn(0,"BRANCH_CD")
        				};
        		gfnModalPop(this, "", "CPOP::BUserInfoPopup.xfdl", sArg, "fnPopCallBack", 400, 230);
        	}else if(gfnGrdBindColId(obj, e.cell)=="PTNR_NM")	//구매담당자명
        	{
        		var sArg = {
        				agv_id 		: this.dsList.getColumn(e.row,"PTNR_ID")
        				,branch_cd 	: application.gdsUserInfo.getColumn(0,"BRANCH_CD")
        				};
        		gfnModalPop(this, "", "CPOP::BPtnrInfoPopup.xfdl", sArg, "fnPopCallBack", 550, 470);
        	}else if(gfnGrdBindColId(obj, e.cell)=="MTRL_NM")	//구매담당자명
        	{
        		var sArg = {
        				agv_id 		: this.dsList.getColumn(e.row,"MTRL_CD")
        				,branch_cd 	: application.gdsUserInfo.getColumn(0,"BRANCH_CD")
        				};
        		gfnModalPop(this, "", "CPOP::BMtrlInfoPopup.xfdl", sArg, "fnPopCallBack", 680, 330);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.FormOninit, this);
            this.addEventHandler("onload", this.FormOnload, this);
            this.divViewCompCond01.staPrNo.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond01.staMtrl.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond01.staPchrgrId.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond01.staStr.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond01.staPchrgrId00.addEventHandler("onclick", this.fnPchrgeSearch, this);
            this.divViewCompBody00.btnPo.addEventHandler("onclick", this.fnPoWrite, this);
            this.divViewCompBody00.btnRfq.addEventHandler("onclick", this.fnRfqWrite, this);
            this.divViewCompBody00.btnAutoPo.addEventHandler("onclick", this.fnAutoPoWrite, this);
            this.divViewCompBody00.btnTndr.addEventHandler("onclick", this.fnTndrWrite, this);
            this.divViewCompBody00.btnCntr.addEventHandler("onclick", this.fnCntrWrite, this);
            this.divViewCompBody00.btnChgPchrgr.addEventHandler("onclick", this.divViewCompBody00_btnChgPchrgr_onclick, this);
            this.divViewCompBody00.btnPrEnd.addEventHandler("onclick", this.divViewCompBody00_btnPrEnd_onclick, this);
            this.divViewCompBody00.btnPtnr.addEventHandler("onclick", this.fnPtnrSearch, this);
            this.divViewCompBody00.grdList.addEventHandler("oncellclick", this.divViewCompBody00_grdList_oncellclick, this);
            this.divViewCompCond00.staPtnrNm.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond00.staPtnrNm00.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond00.staPtnrNm01.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.btnFold.addEventHandler("onclick", this.btnFold_onclick, this);

        };

        this.loadIncludeScript("BPrRcvList.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
