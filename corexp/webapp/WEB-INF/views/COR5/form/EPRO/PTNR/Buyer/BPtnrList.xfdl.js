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
                this.set_name("CSampleList");
                this.set_titletext("협력사현황");
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
            obj._setContents("<ColumnInfo><Column id=\"PTNR_NM\" size=\"256\" type=\"STRING\"/><Column id=\"BIZ_NO\" size=\"256\" type=\"STRING\"/><Column id=\"CFMDT_STR\" size=\"256\" type=\"STRING\"/><Column id=\"CFMDT_END\" size=\"256\" type=\"STRING\"/><Column id=\"RPRSTV_NM\" size=\"256\" type=\"STRING\"/><Column id=\"SRC_GRP_01\" size=\"256\" type=\"STRING\"/><Column id=\"SRC_GRP_02\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_ITEM\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_CHT_DT\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_AUTO\" size=\"256\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CD_PTNR_CTGR\" size=\"256\" type=\"STRING\"/><Column id=\"PCHRGR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"PCHRGR_NM\" size=\"256\" type=\"STRING\"/><Column id=\"LANG_CD\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
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


            
            // UI Components Initialize
            obj = new Div("divViewCompCond01", "absolute", "0", "35", null, "171", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.getSetter("objNm").set("");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);
            obj = new Static("staCfmDt", "absolute", "47", "5", "123", "24", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.set_taborder("0");
            obj.set_text("등록확정일자");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staRprstvNm", "absolute", "7", "34", "163", "24", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.set_taborder("2");
            obj.set_text("대표자명");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtRprstvNm", "absolute", "170", "34", "219", "24", null, null, this.divViewCompCond01);
            obj.getSetter("objNm").set("대표자명");
            obj.set_taborder("3");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staPtnrChgDt", "absolute", "47", "63", "123", "24", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.set_taborder("9");
            obj.set_text("정보갱신일자");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtPtnrChgDt", "absolute", "170", "63", "164", "24", null, null, this.divViewCompCond01);
            obj.set_inputfilter("dot,comma,sign,symbol,alpha,space");
            obj.set_inputtype("number");
            obj.getSetter("objNm").set("정보갱신일자");
            obj.style.set_align("right middle");
            obj.set_taborder("10");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staPtnrChgDay", "absolute", "339", "63", null, "24", "815", null, this.divViewCompCond01);
            obj.set_taborder("11");
            obj.set_text("일 이상");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divCfmDt", "absolute", "170", "5", "219", "24", null, null, this.divViewCompCond01);
            obj.getSetter("objNm").set("등록확정일자");
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staWarning", "absolute", "0", "150", null, "19", "0", null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_SearchText");
            obj.set_taborder("14");
            obj.set_text("- 검색조건 없이 검색 시 속도가 저하 될 수 있습니다.");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staRprstvNm03", "absolute", "428", "12", "457", "17", null, null, this.divViewCompCond01);
            obj.style.set_background("transparent URL('img::img_WF_Question.png')");
            obj.style.set_padding("0 0 0 25");
            obj.set_taborder("18");
            obj.set_text("업체 등록확정일자로 검색한다");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staRprstvNm01", "absolute", "428", "41", "457", "17", null, null, this.divViewCompCond01);
            obj.style.set_background("transparent URL('img::img_WF_Question.png')");
            obj.style.set_padding("0 0 0 25");
            obj.set_taborder("20");
            obj.set_text("업체 대표자명으로 검색한다");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staRprstvNm02", "absolute", "428", "70", "457", "17", null, null, this.divViewCompCond01);
            obj.style.set_background("transparent URL('img::img_WF_Question.png')");
            obj.style.set_padding("0 0 0 25");
            obj.set_taborder("21");
            obj.set_text("업체 정보변경일자로 검색한다");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staRprstvNm04", "absolute", "428", "99", "457", "17", null, null, this.divViewCompCond01);
            obj.style.set_background("transparent URL('img::img_WF_Question.png')");
            obj.style.set_padding("0 0 0 25");
            obj.set_taborder("22");
            obj.set_text("업체지정 담당자로 검색한다");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staPchrgrNm", "absolute", "47", "92", "123", "24", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.set_taborder("23");
            obj.set_text("구매담당자");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtPchrgrId", "absolute", "170", "92", "85", "24", null, null, this.divViewCompCond01);
            obj.getSetter("objNm").set("대표자명");
            obj.set_readonly("true");
            obj.set_taborder("24");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtPchrgrNm", "absolute", "258", "92", "101", "24", null, null, this.divViewCompCond01);
            obj.getSetter("objNm").set("대표자명");
            obj.set_taborder("25");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Button("btnSearchPchrgr", "absolute", "363", "92", "24", "24", null, null, this.divViewCompCond01);
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("우편번호 검색 버튼");
            obj.set_taborder("26");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staRprstvNm05", "absolute", "428", "128", "457", "17", null, null, this.divViewCompCond01);
            obj.style.set_background("transparent URL('img::img_WF_Question.png')");
            obj.style.set_padding("0 0 2 26");
            obj.set_taborder("27");
            obj.set_text("업체유형( 전체 / 국내 / 해외 )로 검색한다");
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
            obj.set_taborder("6");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"110\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"300\"/><Column size=\"150\"/><Column size=\"121\"/><Column size=\"120\"/><Column size=\"109\"/><Column size=\"102\"/><Column size=\"300\"/><Column size=\"97\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"사업자번호\"/><Cell col=\"2\" text=\"구분\"/><Cell col=\"3\" text=\"업체유형\"/><Cell col=\"4\" text=\"소싱그룹\"/><Cell col=\"5\" text=\"업체명\"/><Cell col=\"6\" text=\"대표자명\"/><Cell col=\"7\" text=\"전화번호\"/><Cell col=\"8\" text=\"구매담당자\"/><Cell col=\"9\" text=\"정보갱신일자\"/><Cell col=\"10\" text=\"즐겨찾기\"/><Cell col=\"11\" text=\"주소\"/><Cell col=\"12\" text=\"등록확정일자\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\" tooltiptext=\"bind:CHECKED\"/><Cell col=\"1\" text=\"bind:BIZ_NO\" maskchar=\" \" tooltiptext=\"bind:BIZ_NO\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:CD_PORG_UNIT_STTS_NM\" tooltiptext=\"bind:CD_PORG_UNIT_STTS_NM\"/><Cell col=\"3\" text=\"bind:CD_PTNR_CTGR_NM\" tooltiptext=\"bind:CD_PTNR_CTGR_NM\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:SRC_GRP_NM\" tooltiptext=\"bind:SRC_GRP_NM\"/><Cell col=\"5\" style=\"align:left;\" cssclass=\"cell_link\" text=\"bind:PTNR_NM\" tooltiptext=\"bind:PTNR_NM\"/><Cell col=\"6\" text=\"bind:RPRSTV_NM\" tooltiptext=\"bind:RPRSTV_NM\"/><Cell col=\"7\" text=\"bind:TEL\" tooltiptext=\"bind:TEL\"/><Cell col=\"8\" text=\"bind:PCHRGR_NM\" tooltiptext=\"bind:PCHRGR_NM\"/><Cell col=\"9\" text=\"bind:PTNR_CHT_DT\" mask=\"####-##-##\" maskchar=\" \" tooltiptext=\"bind:PTNR_CHT_DT\"/><Cell col=\"10\" style=\"backgroundimage:EXPR(BOOKMARK == 'Y' ? 'img::btn_WF_FavoritesS_N.png' : '');\" text=\" \"/><Cell col=\"11\" style=\"align:left;\" text=\"bind:ADDR\" tooltiptext=\"bind:ADDR\"/><Cell col=\"12\" text=\"bind:CFMDT\" mask=\"####-##-##\" maskchar=\" \" tooltiptext=\"bind:CFMDT\"/></Band></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnStop", "absolute", null, "0", "100", "24", "0", null, this.divViewCompBody00);
            obj.set_cssclass("btn_WF_Com_G");
            obj.getSetter("objNm").set("미리보기버튼");
            obj.set_positionstep("1");
            obj.set_taborder("8");
            obj.set_text("거래중지");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnFavoriteDel", "absolute", null, "0", "115", "24", "105", null, this.divViewCompBody00);
            obj.set_cssclass("btn_WF_Com_G");
            obj.getSetter("objNm").set("미리보기버튼");
            obj.set_positionstep("1");
            obj.set_taborder("9");
            obj.set_text("즐겨찾기삭제");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnFavorite", "absolute", null, "0", "100", "24", "225", null, this.divViewCompBody00);
            obj.set_cssclass("btn_WF_Com_G");
            obj.getSetter("objNm").set("미리보기버튼");
            obj.set_positionstep("1");
            obj.set_taborder("10");
            obj.set_text("즐겨찾기추가");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "10", this.divViewCompBody00);
            obj.set_scrollbars("none");
            obj.set_taborder("11");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Button("btnFold", "absolute", "45.66%", "206", "56", "17", null, null, this);
            obj.set_cssclass("btn_Fold_Close");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Div("divViewCompCond00", "absolute", "0", "0", null, "36", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);
            obj = new Static("staBizNo", "absolute", "379", "5", "123", "24", null, null, this.divViewCompCond00);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.set_taborder("2");
            obj.set_text("사업자번호");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Edit("edtPtnrNm", "absolute", "170", "5", "219", "24", null, null, this.divViewCompCond00);
            obj.getSetter("objNm").set("협력사명");
            obj.set_taborder("1");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Edit("edtBizNo", "absolute", "501", "5", "219", "24", null, null, this.divViewCompCond00);
            obj.set_inputfilter("sign,symbol");
            obj.set_inputtype("number");
            obj.getSetter("objNm").set("사업자번호");
            obj.set_taborder("3");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staPtnrNm", "absolute", "47", "5", "123", "24", null, null, this.divViewCompCond00);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.set_taborder("7");
            obj.set_text("업체명");
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
            		p.set_titletext("협력사현황");

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
            obj = new BindItem("item17","divViewCompCond01.edtPtnrChgDt","value","dsCondition","PTNR_CHT_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","divViewCompCond01.edtRprstvNm","value","dsCondition","RPRSTV_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","divViewCompCond00.edtBizNo","value","dsCondition","BIZ_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","divViewCompCond00.edtPtnrNm","value","dsCondition","PTNR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCfmDtVi","divViewCompCond01.staCfmDt","visible","dsObjBindVi","staCfmDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCfmDtEn","divViewCompCond01.staCfmDt","enable","dsObjBindEn","staCfmDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRprstvNmVi","divViewCompCond01.staRprstvNm","visible","dsObjBindVi","staRprstvNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRprstvNmEn","divViewCompCond01.staRprstvNm","enable","dsObjBindEn","staRprstvNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRprstvNmVi","divViewCompCond01.edtRprstvNm","visible","dsObjBindVi","edtRprstvNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRprstvNmEn","divViewCompCond01.edtRprstvNm","readonly","dsObjBindEn","edtRprstvNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPtnrChgDtVi","divViewCompCond01.staPtnrChgDt","visible","dsObjBindVi","staPtnrChgDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPtnrChgDtEn","divViewCompCond01.staPtnrChgDt","enable","dsObjBindEn","staPtnrChgDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPtnrChgDtVi","divViewCompCond01.edtPtnrChgDt","visible","dsObjBindVi","edtPtnrChgDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPtnrChgDtEn","divViewCompCond01.edtPtnrChgDt","readonly","dsObjBindEn","edtPtnrChgDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPtnrChgDayVi","divViewCompCond01.staPtnrChgDay","visible","dsObjBindVi","staPtnrChgDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPtnrChgDayEn","divViewCompCond01.staPtnrChgDay","enable","dsObjBindEn","staPtnrChgDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divCfmDtVi","divViewCompCond01.divCfmDt","visible","dsObjBindVi","divCfmDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divCfmDtEn","divViewCompCond01.divCfmDt","enable","dsObjBindEn","divCfmDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnEvalTmplVi","divViewCompBody00.btnStop","visible","dsObjBindVi","btnEvalTmpl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnEvalTmplEn","divViewCompBody00.btnStop","enable","dsObjBindEn","btnEvalTmpl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnEvalTmpl00Vi","divViewCompBody00.btnFavoriteDel","visible","dsObjBindVi","btnEvalTmpl00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnEvalTmpl00En","divViewCompBody00.btnFavoriteDel","enable","dsObjBindEn","btnEvalTmpl00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnEvalTmpl01Vi","divViewCompBody00.btnFavorite","visible","dsObjBindVi","btnEvalTmpl01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnEvalTmpl01En","divViewCompBody00.btnFavorite","enable","dsObjBindEn","btnEvalTmpl01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPagingVi","divViewCompBody00.divPaging","visible","dsObjBindVi","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPagingEn","divViewCompBody00.divPaging","enable","dsObjBindEn","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnFoldVi","btnFold","visible","dsObjBindVi","btnFold");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnFoldEn","btnFold","enable","dsObjBindEn","btnFold");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staBizNoVi","divViewCompCond00.staBizNo","visible","dsObjBindVi","staBizNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staBizNoEn","divViewCompCond00.staBizNo","enable","dsObjBindEn","staBizNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPtnrNmVi","divViewCompCond00.edtPtnrNm","visible","dsObjBindVi","edtPtnrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPtnrNmEn","divViewCompCond00.edtPtnrNm","readonly","dsObjBindEn","edtPtnrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtBizNoVi","divViewCompCond00.edtBizNo","visible","dsObjBindVi","edtBizNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtBizNoEn","divViewCompCond00.edtBizNo","readonly","dsObjBindEn","edtBizNo");
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
            obj = new BindItem("staPtnrChgDayLangBind2017110317184352695","divViewCompCond01.staPtnrChgDay","text","gdsLabel","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divViewCompBody00LangBind2017110317184360214","divViewCompBody00","text","gdsLabel","EPRO_LABEL_00272");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","divViewCompCond01.staRprstvNm03","text","gdsLabel","");
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

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompCalFromTo.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
        };
        
        // User Script
        this.registerScript("BPtnrList.xfdl", function(exports) {
        /**
         * @파일명       	: BPtnrList.xfdl
         * @생성자       	: 한의봉
         * @생성일자     	: 2017. 9. 07.
         * @설명			: 협력사 현황
         * @최종수정자		: 안성민
         * @최종수정일자	: 2017. 11. 20.
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
        					isTran:"Y", tranNm:"BPtnrService.searchPtnrRst", dsParam:this.dsCondition
        				}
         	gfnSetGrdFunc(this.divViewCompBody00.grdList, this.divViewCompBody00.divPaging, this, sArgEx);
         	this.fnFold();
         	gfnSetObj("A");
         	
        	this.dsCondition.addRow();       
            //요청일자 셋팅
        	this.divViewCompCond01.divCfmDt.fnSetDate(this.dsCondition, "CFMDT_STR", "CFMDT_END");

        	this.dsCondition.setColumn(0, "CD_PTNR_CTGR", "")
        	this.dsCondition.setColumn(0, "ALT_AUTO", "N")
        	this.dsCondition.setColumn(0, "BRANCH_CD", application.gdsUserInfo.getColumn(0, "BRANCH_CD"));
         	
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

        	var sSvcID = "searchPtnrRst";
        	var sController = "epro.ptnr.service.BPtnrService.searchPtnrRst";
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
        		case "saveUserPtnrAdd" :
        			gfnAlert(strErrMsg);
        			this.fnSearch();
        			break;
        		case "saveUserPtnrDel" :
        			gfnAlert(strErrMsg);
        			this.fnSearch();
        			break;
        		case "savePtnrStop" :
        			gfnAlert(strErrMsg);
        			this.fnSearch();
        			break;	
        		
        		default:
        		break;	
        	}
        }

        /**
          * @함수명	: fnListOncelldblclick
          * @input    	: obj:Grid(그리드 오브젝트), e:nexacro.GridClickEventInfo(이벤트변수)
          * @desc     	: 리스트 그리드 oncelldblclick 이벤트
          */
        this.fnListOncelldblclick = function(obj,e)
        {
        	if(gfnIsNull(this.dsList.getColumn(e.row, gfnGrdBindColId(obj, e.cell)))) return false;
        	
        	if("PTNR_NM" == gfnGrdBindColId(obj, obj.getCellPos())){ 
        		gfnSetTmprData("PTNR_ID"		,this.dsList.getColumn(e.row, "PTNR_ID"));
        		gfnSetTmprData("FOR_CHECK"		,"isList");
        		gfnOpenMenuUrl("BPTNR::BPtnrDetail");
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
          * @함수명	: fnBookMarkAdd
          * @desc     	: 협력사를 즐겨찾기에 추가한다
         */
        this.fnBookMarkAdd = function(obj,e)
        {
        	if(!gfnGetChkRowString(this.dsList)) return;
        	this.dsReturn.loadXML(gfnGetChkRowString(this.dsList));
        	
        	var arr = [];
        	for(var i=0; i<this.dsReturn.getRowCount(); i++) {
        		if("Y" == this.dsReturn.getColumn(i, "BOOKMARK")) {
        			var msg = "'" + this.dsReturn.getColumn(i, "PTNR_NM") +  "' " + gfnMultiLabel("EPRO_LABEL_01020");
        			var type = gfnMultiLabel("EPRO_LABEL_00213");
        			var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"N"};
        			arr.push(objParam);
        		}
        	}
        	if(!gfnValidate(this, false, arr)) return false;

        	if(!gfnConfirm("즐겨찾기 추가 하시겠습니까?")) return;
        	
        	var sSvcID = "saveUserPtnrAdd";
        	var sController = "epro.ptnr.service.BPtnrService.saveUserPtnrAdd";
        	var sInDatasets = "dsReturn=dsReturn";
        	var sOutDatasets = "";
        	var sCallbackFunc = "fnTrCallBack";
        	
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**	
          * @함수명	: fnBookMarkAdd
          * @desc     	: 협력사를 즐겨찾기에서 삭제
         */
        this.fnBookMarkDel = function(obj,e)
        {
        	if(!gfnGetChkRowString(this.dsList)) return;	
        	this.dsReturn.loadXML(gfnGetChkRowString(this.dsList));
        	
        	var arr = [];
        	for(var i=0; i<this.dsReturn.getRowCount(); i++) {
        		if("N" == this.dsReturn.getColumn(i, "BOOKMARK")) {
        			var msg = "'" + this.dsReturn.getColumn(i, "PTNR_NM") +  "' " + gfnMultiLabel("EPRO_LABEL_01021");
        			var type = gfnMultiLabel("EPRO_LABEL_00213");
        			var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"N"};
        			arr.push(objParam);
        		}
        	}
        	if(!gfnValidate(this, false, arr)) return false;
        	
        	if(!gfnConfirm("즐겨찾기 삭제 하시겠습니까?")) return;
        	
        	var sSvcID = "saveUserPtnrDel";
        	var sController = "epro.ptnr.service.BPtnrService.saveUserPtnrDel";
        	var sInDatasets = "dsReturn=dsReturn";
        	var sOutDatasets = "";
        	var sCallbackFunc = "fnTrCallBack";
        	
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**	
          * @함수명	: fnPtnrRej
          * @desc     	: 협력사 거래중지
         */
        this.fnPtnrRej = function(obj,e)
        {
        	if(!gfnGetChkRowString(this.dsList)) return;
        	this.dsReturn.loadXML(gfnGetChkRowString(this.dsList));
        	if(!gfnConfirm("거래중지 하시겠습니까?")) return;
        	
        	this.dsSysCard.deleteAll();
        	var nRow = this.dsSysCard.addRow();
        	this.dsSysCard.setColumn(nRow, "MGMT_HSTR_NO", "");
        	this.dsSysCard.setColumn(nRow, "PTNR_ID", "");
        	this.dsSysCard.setColumn(nRow, "CD_MGMT_TYPE", "");
        	this.dsSysCard.setColumn(nRow, "ATTCH_FILE_CNT", "");
        	this.dsSysCard.setColumn(nRow, "CRTR_ID", "");
        	this.dsSysCard.setColumn(nRow, "LAST_CHGR_ID", "");
        	this.dsSysCard.setColumn(nRow, "TTL", gfnMultiLabel("EPRO_LABEL_00131"));
        	this.dsSysCard.setColumn(nRow, "MGMT_MEMO", gfnMultiLabel("EPRO_LABEL_01112"));
        	
        	var sSvcID = "savePtnrStop";
        	var sController = "epro.ptnr.service.BPtnrService.savePtnrStop";
        	var sInDatasets = "dsReturn=dsReturn dsSysCard=dsSysCard";
        	var sOutDatasets = "";
        	var sCallbackFunc = "fnTrCallBack";
        	
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
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

        
        this.btnFold_onclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.divViewCompCond01.staRprstvNm.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.divViewCompCond01.edtRprstvNm.addEventHandler("onkeyup", this.fnEnterOnkeyup, this);
            this.divViewCompCond01.edtPtnrChgDt.addEventHandler("onkeyup", this.fnEnterOnkeyup, this);
            this.divViewCompCond01.staPchrgrNm.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.divViewCompCond01.edtPchrgrId.addEventHandler("onkeyup", this.fnEnterOnkeyup, this);
            this.divViewCompCond01.edtPchrgrNm.addEventHandler("onkeyup", this.fnEnterOnkeyup, this);
            this.divViewCompCond01.edtPchrgrNm.addEventHandler("ontextchange", this.fnOnTextChanged, this);
            this.divViewCompCond01.btnSearchPchrgr.addEventHandler("onclick", this.fnUserSearch, this);
            this.divViewCompCond01.staPtnrType.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.divViewCompBody00.grdList.addEventHandler("oncelldblclick", this.fnListOncelldblclick, this);
            this.divViewCompBody00.btnStop.addEventHandler("onclick", this.fnPtnrRej, this);
            this.divViewCompBody00.btnFavoriteDel.addEventHandler("onclick", this.fnBookMarkDel, this);
            this.divViewCompBody00.btnFavorite.addEventHandler("onclick", this.fnBookMarkAdd, this);
            this.btnFold.addEventHandler("onclick", this.btnFold_onclick, this);
            this.divViewCompCond00.edtPtnrNm.addEventHandler("onkeyup", this.fnEnterOnkeyup, this);
            this.divViewCompCond00.edtBizNo.addEventHandler("onkeyup", this.fnEnterOnkeyup, this);
            this.divViewCompCond00.staPtnrNm.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);

        };

        this.loadIncludeScript("BPtnrList.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
