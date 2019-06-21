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
                this.set_name("BRptPtnrEvlList");
                this.set_titletext("업체평가현황");
                this._setFormPosition(0,0,1220,711);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
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
            obj._setContents("<ColumnInfo><Column id=\"PTNR_NM\" size=\"256\" type=\"STRING\"/><Column id=\"BIZ_NO\" size=\"256\" type=\"STRING\"/><Column id=\"CFMDT_STR\" size=\"256\" type=\"STRING\"/><Column id=\"CFMDT_END\" size=\"256\" type=\"STRING\"/><Column id=\"RPRSTV_NM\" size=\"256\" type=\"STRING\"/><Column id=\"SRC_GRP_01\" size=\"256\" type=\"STRING\"/><Column id=\"SRC_GRP_02\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_ITEM\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_CHT_DT\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_AUTO\" size=\"256\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CD_PTNR_CTGR\" size=\"256\" type=\"STRING\"/><Column id=\"PCHRGR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"PCHRGR_NM\" size=\"256\" type=\"STRING\"/><Column id=\"LANG_CD\" size=\"256\" type=\"STRING\"/><Column id=\"EVAL_SCORE_END\" size=\"256\" type=\"STRING\"/><Column id=\"EVAL_SCORE_STR\" size=\"256\" type=\"STRING\"/><Column id=\"SCJD_CMPLT_DT_STR\" size=\"256\" type=\"STRING\"/><Column id=\"SCJD_CMPLT_DT_END\" size=\"256\" type=\"STRING\"/><Column id=\"CHT_DT_STR\" size=\"256\" type=\"STRING\"/><Column id=\"CHT_DT_END\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReturn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdSR12", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdSR20", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSysCard", this);
            obj._setContents("<ColumnInfo><Column id=\"MGMT_HSTR_NO\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"TTL\" size=\"256\" type=\"STRING\"/><Column id=\"CD_MGMT_TYPE\" size=\"256\" type=\"STRING\"/><Column id=\"MGMT_MEMO\" size=\"256\" type=\"STRING\"/><Column id=\"ATTCH_FILE_CNT\" size=\"256\" type=\"STRING\"/><Column id=\"CRTR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_CHGR_ID\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEvlCnt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompCond01", "absolute", "0", "35", null, "171", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.getSetter("objNm").set("");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);
            obj = new Static("staPtnrChgDt", "absolute", "0", "34", "170", "24", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.set_taborder("9");
            obj.set_text("정보갱신일자");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staWarning", "absolute", "0", "150", null, "19", "0", null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_SearchText");
            obj.set_taborder("14");
            obj.set_text("- 검색조건 없이 검색 시 속도가 저하 될 수 있습니다.");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staPchrgrNm", "absolute", "0", "5", "170", "24", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.set_taborder("23");
            obj.set_text("구매담당자");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtPchrgrId", "absolute", "170", "5", "85", "24", null, null, this.divViewCompCond01);
            obj.getSetter("objNm").set("대표자명");
            obj.set_readonly("true");
            obj.set_taborder("24");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtPchrgrNm", "absolute", "258", "5", "101", "24", null, null, this.divViewCompCond01);
            obj.getSetter("objNm").set("대표자명");
            obj.set_taborder("25");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Button("btnSearchPchrgr", "absolute", "363", "5", "24", "24", null, null, this.divViewCompCond01);
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("우편번호 검색 버튼");
            obj.set_taborder("26");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staPtnrType", "absolute", "47", "121", "123", "24", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.set_taborder("28");
            obj.set_text("업체유형");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Combo("cboPtnrType", "absolute", "170", "121", "219", "24", null, null, this.divViewCompCond01);
            this.divViewCompCond01.addChild(obj.name, obj);
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_innerdataset("@dsCdSR12");
            obj.getSetter("objNm").set("소싱그룹대분류");
            obj.set_taborder("29");
            obj = new Static("staSrcGrp", "absolute", "0", "92", "170", "24", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.set_taborder("30");
            obj.set_text("소싱그룹");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divSrcGrp", "absolute", "170", "92", "221", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("31");
            obj.set_text("Div00");
            obj.set_url("CCOMP::CompSrcType.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divEvlDt", "absolute", "170", "63", "219", "24", null, null, this.divViewCompCond01);
            obj.getSetter("objNm").set("요청일자");
            obj.set_taborder("32");
            obj.set_text("Div01");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staEvlDt", "absolute", "0", "63", "170", "24", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.set_taborder("33");
            obj.set_text("평가일자");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divPtnrChgDt", "absolute", "170", "34", "219", "24", null, null, this.divViewCompCond01);
            obj.getSetter("objNm").set("요청일자");
            obj.set_taborder("34");
            obj.set_text("Div01");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);

            obj = new Div("divViewCompBody00", "absolute", "0", "222", null, null, "15", "0", this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "30", null, null, "0", "38", this.divViewCompBody00);
            obj.set_autofittype("none");
            obj.set_binddataset("dsList");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
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
            obj.getSetter("objNm").set("검색결과 그리드");
            obj.set_taborder("10");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"100\"/><Column size=\"300\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"109\"/><Column size=\"97\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"60\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"구분\" tooltiptext=\"\"/><Cell col=\"1\" expr=\"\" text=\"VENDOR\" tooltiptext=\"\"/><Cell col=\"2\" expr=\"\" text=\"업체명\" tooltiptext=\"\"/><Cell col=\"3\" editlimitbymask=\"integer\" expr=\"\" text=\"평가점수\"/><Cell col=\"4\" expr=\"\" text=\"평가등급\"/><Cell col=\"5\" expr=\"\" text=\"평가일자\"/><Cell col=\"6\" expr=\"\" text=\"대표자명\"/><Cell col=\"7\" expr=\"\" text=\"정보갱신일자\" tooltiptext=\"\"/><Cell col=\"8\" expr=\"\" text=\"등록확정일자\" tooltiptext=\"\"/><Cell col=\"9\" expr=\"\" text=\"구매담당자\" tooltiptext=\"\"/><Cell col=\"10\" expr=\"\" text=\"업체유형\" tooltiptext=\"\"/><Cell col=\"11\" expr=\"\" text=\"내/외자\"/><Cell col=\"12\" expr=\"\" text=\"전장업체\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:CD_PORG_UNIT_STTS_NM\" tooltiptext=\"bind:CD_PORG_UNIT_STTS_NM\"/><Cell col=\"1\" text=\"bind:SAP_VENDOR\" tooltiptext=\"bind:SAP_VENDOR\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:PTNR_NM\" tooltiptext=\"bind:PTNR_NM\"/><Cell col=\"3\" displaytype=\"number\" mask=\"###\" style=\"align:right;\" text=\"bind:SCJD_EVAL_SCORE\" tooltiptext=\"bind:SCJD_EVAL_SCORE\"/><Cell col=\"4\" style=\"color:bind:EVAL_COLOR;color2:bind:EVAL_COLOR;\" text=\"bind:EVAL_GRADE\" tooltiptext=\"bind:EVAL_GRADE\"/><Cell col=\"5\" mask=\"####-##-##\" maskchar=\" \" text=\"bind:SCJD_CMPLT_DT\" tooltiptext=\"bind:SCJD_CMPLT_DT\"/><Cell col=\"6\" text=\"bind:RPRSTV_NM\" tooltiptext=\"bind:RPRSTV_NM\"/><Cell col=\"7\" mask=\"####-##-##\" maskchar=\" \" text=\"bind:PTNR_CHT_DT\" tooltiptext=\"bind:PTNR_CHT_DT\"/><Cell col=\"8\" mask=\"####-##-##\" maskchar=\" \" text=\"bind:CFMDT\" tooltiptext=\"bind:CFMDT\"/><Cell col=\"9\" text=\"bind:PCHRGR_NM\" tooltiptext=\"bind:PCHRGR_NM\"/><Cell col=\"10\" text=\"bind:CD_PTNR_CTGR_NM\" tooltiptext=\"bind:CD_PTNR_CTGR_NM\"/><Cell col=\"11\" text=\"bind:CD_INOUT_TYPE_NM\" tooltiptext=\"bind:CD_INOUT_TYPE_NM\"/><Cell col=\"12\" text=\"bind:ALT_AUTO\" tooltiptext=\"bind:ALT_AUTO\"/></Band></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "10", this.divViewCompBody00);
            obj.set_scrollbars("none");
            obj.set_taborder("11");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staGreen", "absolute", null, "0", "48", "27", "415", null, this.divViewCompBody00);
            obj.style.set_color("green");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum bold");
            obj.set_taborder("0");
            obj.set_text("Green : ");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staYellow", "absolute", null, "0", "60", "27", "310", null, this.divViewCompBody00);
            obj.style.set_color("#f9db06ff");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum bold");
            obj.set_taborder("2");
            obj.set_text("Yellow : ");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staRed", "absolute", null, "0", "45", "27", "220", null, this.divViewCompBody00);
            obj.style.set_color("red");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum bold");
            obj.set_taborder("4");
            obj.set_text("Red : ");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staGray", "absolute", null, "0", "40", "27", "135", null, this.divViewCompBody00);
            obj.style.set_color("gray");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum bold");
            obj.set_taborder("6");
            obj.set_text("Gray : ");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staTotal", "absolute", null, "0", "40", "27", "50", null, this.divViewCompBody00);
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum bold");
            obj.set_taborder("8");
            obj.set_text("Total : ");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staGreenVal", "absolute", null, "0", "43", "27", "370", null, this.divViewCompBody00);
            obj.style.set_align("left middle");
            obj.style.set_font("9 Dotum bold");
            obj.set_taborder("1");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staYellowVal", "absolute", null, "0", "45", "27", "267", null, this.divViewCompBody00);
            obj.style.set_align("left middle");
            obj.style.set_font("9 Dotum bold");
            obj.set_taborder("3");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staTotalVal", "absolute", null, "0", "44", "27", "3", null, this.divViewCompBody00);
            obj.style.set_align("left middle");
            obj.style.set_font("9 Dotum bold");
            obj.set_taborder("9");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staGrayVal", "absolute", null, "0", "44", "27", "89", null, this.divViewCompBody00);
            obj.style.set_align("left middle");
            obj.style.set_font("9 Dotum bold");
            obj.set_taborder("7");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staRedVal", "absolute", null, "0", "45", "27", "176", null, this.divViewCompBody00);
            obj.style.set_align("left middle");
            obj.style.set_font("9 Dotum bold");
            obj.set_taborder("5");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Button("btnFold", "absolute", "45.66%", "206", "56", "17", null, null, this);
            obj.set_cssclass("btn_Fold_Close");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Div("divViewCompCond00", "absolute", "0", "0", null, "36", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);
            obj = new Static("staEvlPoint", "absolute", "0", "5", "170", "24", null, null, this.divViewCompCond00);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.set_taborder("0");
            obj.set_text("평가점수");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Edit("edtUserId", "absolute", "170", "5", "85", "24", null, null, this.divViewCompCond00);
            obj.set_inputtype("number");
            obj.getSetter("objNm").set("입찰담당자ID");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_taborder("1");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Edit("edtUserId00", "absolute", "274", "5", "85", "24", null, null, this.divViewCompCond00);
            obj.set_inputtype("number");
            obj.getSetter("objNm").set("입찰담당자ID");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_taborder("2");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "259", "10", "22", "16", null, null, this.divViewCompCond00);
            obj.set_taborder("3");
            obj.set_text("~");
            this.divViewCompCond00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1205, 177, this.divViewCompCond01,
            	//-- Layout function
            	function(p) {
            		p.set_cssclass("div_WF_SearchBg");
            		p.getSetter("objNm").set("");
            		p.set_taborder("1");

            	}
            );
            this.divViewCompCond01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.set_text("Div00");

            	}
            );
            this.divViewCompBody00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 36, this.divViewCompCond00,
            	//-- Layout function
            	function(p) {
            		p.set_cssclass("div_WF_SearchBg");
            		p.set_taborder("4");

            	}
            );
            this.divViewCompCond00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1220, 711, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("frmSearchCond");
            		p.set_titletext("업체평가현황");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item14","divCondition.edtTtl","value","dsCondition","TTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","divCondition.cboCdEvalRunStts","value","dsCondition","CD_EVAL_RUN_STTS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","Div_SOption.me_PrNo","value","ds_searchPrNo","PR_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","Div_SOption.cb_PrItemStatus","value","ds_SearchOpt","CD_PR_ITEM_STTS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Div_SOption.cd_WriteDayS","value","ds_SearchOpt","REQ_DT_S");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Div_SOption.cd_WriteDayE","value","ds_SearchOpt","REQ_DT_E");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Div_SOption.ed_RrqrNm","value","ds_SearchOpt","REQR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Div_SOption.ed_MtrlGrpId","value","ds_SearchOpt","MTRL_GRP_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Div_SOption.ed_MtrlCd","value","ds_SearchOpt","MTRL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Div_SOption.ed_MtrlGrpNm","value","ds_SearchOpt","MTRL_GRP_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","Div_SOption.ed_RrqrId","value","ds_SearchOpt","REQR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","Div_SOption.ed_CrtrId00","value","ds_SearchOpt","MTRL_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Div_SOption.ed_PchrgrId","value","ds_SearchOpt","PCHRGR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Div_SOption.ed_PchrgrNm","value","ds_SearchOpt","PCHRGR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","div_Search.cbo_prItemStatus","value","dsCondition","PCHRGR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","div_Search.cbo_bsnsPlc","value","dsCondition","PORG_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","divCondition1.edtEvalChrgrNm","value","dsCondition","EVAL_CHRGR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","divCondition1.edtEvalChrgrId","value","dsCondition","EVAL_CHRGR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item48","divCondition1.cboCdScjdEvalType","value","dsCondition","CD_DOC_CTGR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPagingVi","divViewCompBody00.divPaging","visible","dsObjBindVi","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPagingEn","divViewCompBody00.divPaging","enable","dsObjBindEn","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnComInitVi","ns.btnComInit","visible","dsObjBindVi","btnComInit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnComInitEn","ns.btnComInit","enable","dsObjBindEn","btnComInit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnComSrchVi","ns.btnComSrch","visible","dsObjBindVi","btnComSrch");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnComSrchEn","ns.btnComSrch","enable","dsObjBindEn","btnComSrch");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnComSaveVi","ns.btnComSave","visible","dsObjBindVi","btnComSave");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnComSaveEn","ns.btnComSave","enable","dsObjBindEn","btnComSave");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnComNewVi","ns.btnComNew","visible","dsObjBindVi","btnComNew");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnComNewEn","ns.btnComNew","enable","dsObjBindEn","btnComNew");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnComDelVi","ns.btnComDel","visible","dsObjBindVi","btnComDel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnComDelEn","ns.btnComDel","enable","dsObjBindEn","btnComDel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnComPrintVi","ns.btnComPrint","visible","dsObjBindVi","btnComPrint");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnComPrintEn","ns.btnComPrint","enable","dsObjBindEn","btnComPrint");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnComCloseVi","ns.btnComClose","visible","dsObjBindVi","btnComClose");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnComCloseEn","ns.btnComClose","enable","dsObjBindEn","btnComClose");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnComMyMenuVi","ns.btnComMyMenu","visible","dsObjBindVi","btnComMyMenu");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnComMyMenuEn","ns.btnComMyMenu","enable","dsObjBindEn","btnComMyMenu");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnRemoteVi","ns.btnRemote","visible","dsObjBindVi","btnRemote");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnRemoteEn","ns.btnRemote","enable","dsObjBindEn","btnRemote");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPchrgrNmLangBind2017110317184387656","divViewCompCond01.staPchrgrNm","text","gdsLabel","EPRO_LABEL_00521");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","divViewCompCond01.edtPchrgrId","value","dsCondition","PCHRGR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","divViewCompCond01.edtPchrgrNm","value","dsCondition","PCHRGR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","divViewCompCond01.cboPtnrType","value","dsCondition","CD_PTNR_CTGR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","divViewCompCond00.edtUserId","value","dsCondition","EVAL_SCORE_STR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","divViewCompCond00.edtUserId00","value","dsCondition","EVAL_SCORE_END");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","divViewCompBody00.staGreenVal","text","dsEvlCnt","GREEN_CNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","divViewCompBody00.staYellowVal","text","dsEvlCnt","YELLOW_CNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","divViewCompBody00.staRedVal","text","dsEvlCnt","RED_CNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","divViewCompBody00.staGrayVal","text","dsEvlCnt","GRAY_CNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","divViewCompBody00.staTotalVal","text","dsEvlCnt","TOT_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompSrcType.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompCalFromTo.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompCalFromTo.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
        };
        
        // User Script
        this.registerScript("BRptPtnrEvlList.xfdl", function(exports) {
        /**
         * @파일명       	: BRptPtnrEvlList.xfdl
         * @생성자       	: 한의봉
         * @생성일자     	: 2018.01.19.
         * @설명			: 업체평가현황
         * @최종수정자		: 한의봉
         * @최종수정일자	: 2018.01.19.
        */  

        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function(){
        	var param = [
        					{code:"SR12", sSelectType:"A"} // 업체유형
        				];
        	gfnGetCode(this, param);
        }

        /**
          * @함수명	: fnFormOninit
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.InitEventInfo(이벤트변수)
          * @desc     	: 폼 oninit이벤트
          */
        this.fnFormOninit = function(obj,e)
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
        				{ttl:this.btnFold, body:this.divViewCompCond01, initFold:true}
        		   ];		   
        	gfnDivFold(this, sArg);
        }

        /**
          * @함수명	: fnFormOnload
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.LoadEventInfo(이벤트변수)
          * @desc     	: 폼 onload이벤트
          */
        this.fnFormOnload = function(obj,e)
        {
         	
        	var sArgEx = {
        					isTran:"Y", tranNm:"BRptService.searchRptPtnrEvl", dsParam:this.dsCondition
        				}
         	gfnSetGrdFunc(this.divViewCompBody00.grdList, this.divViewCompBody00.divPaging, this, sArgEx);
         	this.fnFold();
         	gfnSetObj("A");
         	
        	this.dsCondition.addRow();       
        	this.divViewCompCond01.divEvlDt.fnSetDate(this.dsCondition, "SCJD_CMPLT_DT_STR", "SCJD_CMPLT_DT_END");
        	this.divViewCompCond01.divPtnrChgDt.fnSetDate(this.dsCondition, "CHT_DT_STR", "CHT_DT_END");

        	this.divViewCompCond01.divSrcGrp.fnSetBind(this.dsCondition, "SRC_GRP_01", "SRC_GRP_02");
        	this.dsCondition.setColumn(0, "CD_PTNR_CTGR", "")
         	
         	this.fnSearch();
        }

        /**
          * @함수명	: fnClose
          * @desc     	: (공통버튼)닫기
          */
        this.fnClose = function()
        {	
        	return true;
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
        this.fnSearch = function()
        {
        	if(!this.fnPreSearch()) return false;

        	var sSvcID = "searchRptPtnrEvl";
        	var sController = "epro.rpt.service.BRptService.searchRptPtnrEvl";
        	var sInDatasets = "dsCondition=dsCondition";
        	var sOutDatasets = "dsList=dsList dsEvlCnt=dsEvlCnt";
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
        		
        		default:
        		break;	
        	}
        }

        
        /**
          * @함수명	: fnPopCallBack
          * @input    	: sPopupId(팝업ID), rtn(팝업에서 리턴하는 문자열)
          * @desc     	: 팝업 CallBack 함수
          */
        this.fnPopCallBack = function(sPopupId,rtn)
        {
        	if(gfnIsNull(rtn)) return;
        	
        	this.dsReturn.clear();
        	this.dsReturn.loadXML(rtn);
        	
        	switch(sPopupId){
        		case "BUserSrchPopup":
        			if(!gfnIsNull(this.dsReturn.getColumn(0,"USER_ID"))){
        					this.dsCondition.setColumn(0,"PCHRGR_ID",this.dsReturn.getColumn(0,"USER_ID"));
        					this.dsCondition.setColumn(0,"PCHRGR_NM",this.dsReturn.getColumn(0,"USER_NM"));
        			}
        		break;
        			
        		default:
        		break;	
        	}
        	
        }

        /**	
          * @함수명	: fnEnterOnkeyup
          * @input    	: obj:Edit(에디트 오브젝트), e:nexacro.KeyEventInfo(이벤트변수)
          * @desc     	: 검색조건에서 ENTER(keycode::13) 입력시 이벤트를 발생시킨다. 
         */
        this.fnEnterOnkeyup = function(obj,e)
        {
        	if(e.keycode == "13"){
        		switch(obj.name){
        			case "edtPchrgrNm": //구매담당자
        				var sArg = { 
        							agv_id:""
        							,agv_nm:this.divViewCompCond01.edtPchrgrNm.value
        							};
        				gfnSearchComUser(this, "BUserSrchPopup", "fnPopCallBack", sArg);
        			break;
        			
        			case "edtPtnrNm" : //업체명
        				this.fnSearch();
        			break;
        			
        			case "edtBizNo" : //사업자번호
        				this.fnSearch();
        			break;

        			case "edtPtnrItem" : //주요취급품목
        				this.fnSearch();
        			break;
        			
        			case "edtRprstvNm" ://대표자명
        				this.fnSearch();
        			break;
        			
        			case "edtPtnrChgDt" : //정보갱신일자
        				this.fnSearch();
        			break;
        			
        			default:
        			
        			break;	
        		}
        	}
        }

        /**
          * @함수명   : fnUserSearch
          * @input    : 
          * @return   : 
          * @desc     :  사용자검색 팝업 이벤트
          */
        this.fnUserSearch = function(obj,e)
        {
        	var sArg = { 
        					agv_id:""
        					,agv_nm:this.dsCondition.getColumn(0,"PCHRGR_NM")
        			   };
        	//매개변수 ::>    form, sPopupId, CallBack Function Name, arg
        	gfnSearchComUser(this, "BUserSrchPopup", "fnPopCallBack", sArg);
        }

        /**
        	@function	fnOnTextChanged
        	@desc   	구매담당자 아이디 초기화
        */
        this.fnOnTextChanged = function(obj,e)
        {
        	if(obj.name == "edtPchrgrNm") this.dsCondition.setColumn(0, "PCHRGR_ID", "");
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.divViewCompCond01.staPchrgrNm.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.divViewCompCond01.edtPchrgrId.addEventHandler("onkeyup", this.fnEnterOnkeyup, this);
            this.divViewCompCond01.edtPchrgrNm.addEventHandler("onkeyup", this.fnEnterOnkeyup, this);
            this.divViewCompCond01.edtPchrgrNm.addEventHandler("ontextchange", this.fnOnTextChanged, this);
            this.divViewCompCond01.btnSearchPchrgr.addEventHandler("onclick", this.fnUserSearch, this);
            this.divViewCompCond01.staPtnrType.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.divViewCompBody00.grdList.addEventHandler("oncelldblclick", this.fnListOncelldblclick, this);
            this.divViewCompCond00.staEvlPoint.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);

        };

        this.loadIncludeScript("BRptPtnrEvlList.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
