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
                this.set_titletext("휴면/거래중지업체현황");
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

            obj = new Dataset("dsCondition", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"PTNR_NM\" size=\"256\" type=\"STRING\"/><Column id=\"BIZ_NO\" size=\"256\" type=\"STRING\"/><Column id=\"CFM_DT_STR\" size=\"256\" type=\"STRING\"/><Column id=\"CFM_DT_END\" size=\"256\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_PORG_UNIT_STTS\" size=\"256\" type=\"STRING\"/><Column id=\"RPRSTV_NM\" size=\"256\" type=\"STRING\"/><Column id=\"PCHRGR_NM\" size=\"256\" type=\"STRING\"/><Column id=\"PCHRGR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"LANG_CD\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdSR20", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompCond01", "absolute", "0", "35", null, "113", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.getSetter("objNm").set("");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);
            obj = new Static("staWarning", "absolute", "0", "92", null, "19", "0", null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_SearchText");
            obj.set_taborder("12");
            obj.set_text("- 검색조건 없이 검색 시 속도가 저하 될 수 있습니다.");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staRprstvNm", "absolute", "15", "5", "156", "24", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.set_taborder("13");
            obj.set_text("대표자명");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtRprstvNm", "absolute", "170", "5", "250", "24", null, null, this.divViewCompCond01);
            obj.getSetter("objNm").set("업체명");
            obj.set_taborder("14");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staCfmDt", "absolute", "0", "34", "171", "24", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.set_taborder("17");
            obj.set_text("휴면/거래중지일자");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divCfmDt", "absolute", "170", "34", "250", "24", null, null, this.divViewCompCond01);
            obj.getSetter("objNm").set("등록확정일자");
            obj.set_taborder("18");
            obj.set_text("Div01");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtPchrgrId", "absolute", "170", "63", "85", "23", null, null, this.divViewCompCond01);
            obj.getSetter("objNm").set("견적담당자ID");
            obj.set_readonly("true");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_taborder("20");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtPchrgrNm", "absolute", "258", "63", "135", "23", null, null, this.divViewCompCond01);
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("견적담당자NM");
            obj.set_taborder("21");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Button("btnSinglePop00", "absolute", "397", "63", "24", "23", null, null, this.divViewCompCond01);
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("구매요청자 검색 버튼");
            obj.set_taborder("22");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staPchrgrNm", "absolute", "48", "63", "123", "24", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.set_taborder("23");
            obj.set_text("담당자");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staRprstvNm00", "absolute", "428", "11", "457", "17", null, null, this.divViewCompCond01);
            obj.style.set_background("transparent URL('img::img_WF_Question.png')");
            obj.style.set_padding("0 0 0 25");
            obj.set_taborder("28");
            obj.set_text("업체 대표자의 이름으로 검색한다");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staRprstvNm02", "absolute", "428", "39", "457", "17", null, null, this.divViewCompCond01);
            obj.style.set_background("transparent URL('img::img_WF_Question.png')");
            obj.style.set_padding("0 0 0 25");
            obj.set_taborder("30");
            obj.set_text("휴면/거래중지된 일자로 검색한다");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staRprstvNm03", "absolute", "428", "68", "457", "17", null, null, this.divViewCompCond01);
            obj.style.set_background("transparent URL('img::img_WF_Question.png')");
            obj.style.set_padding("0 0 0 25");
            obj.set_taborder("31");
            obj.set_text("업체지정 담당자로 검색한다");
            this.divViewCompCond01.addChild(obj.name, obj);

            obj = new Button("btnFold", "absolute", "45.66%", "148", "56", "17", null, null, this);
            obj.set_cssclass("btn_Fold_Close");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Div("divViewCompCond00", "absolute", "0", "0", null, "36", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);
            obj = new Static("staBizNo", "absolute", "447", "5", "123", "24", null, null, this.divViewCompCond00);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.set_taborder("2");
            obj.set_text("사업자번호");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Edit("edtPtnrNm", "absolute", "170", "5", "250", "24", null, null, this.divViewCompCond00);
            obj.getSetter("objNm").set("업체명");
            obj.set_taborder("1");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staPtnrNm", "absolute", "48", "5", "123", "24", null, null, this.divViewCompCond00);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.set_taborder("0");
            obj.set_text("업체명");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Edit("edtBizNo", "absolute", "570", "5", "219", "24", null, null, this.divViewCompCond00);
            obj.set_inputfilter("sign,symbol");
            obj.set_inputtype("number");
            obj.getSetter("objNm").set("사업자번호");
            obj.set_taborder("3");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staPorgStts", "absolute", "818", "5", "123", "24", null, null, this.divViewCompCond00);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.set_taborder("4");
            obj.set_text("상태");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Combo("cboPorgStts", "absolute", "940", "5", "221", "24", null, null, this.divViewCompCond00);
            this.divViewCompCond00.addChild(obj.name, obj);
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_innerdataset("@dsCdSR20");
            obj.getSetter("objNm").set("소싱그룹대분류");
            obj.set_taborder("5");

            obj = new Div("divViewCompBody00", "absolute", "0", "165", null, null, "15", "0", this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "10", null, null, "0", "37", this.divViewCompBody00);
            obj.set_autofittype("none");
            obj.set_autosizingtype("none");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"130\"/><Column size=\"280\"/><Column size=\"170\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"300\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"상태\"/><Cell col=\"1\" text=\"사업자번호\"/><Cell col=\"2\" text=\"업체명\"/><Cell col=\"3\" text=\"대표자명\"/><Cell col=\"4\" text=\"전화번호\"/><Cell col=\"5\" text=\"휴면/거래중지 지정일자\"/><Cell col=\"6\" text=\"담당자\"/><Cell col=\"7\" text=\"주소\"/></Band><Band id=\"body\"><Cell style=\"align:left middle;\" text=\"bind:CD_PORG_UNIT_STTS_NM\" maskchar=\" \" tooltiptext=\"bind:CD_PORG_UNIT_STTS_NM\"/><Cell col=\"1\" displaytype=\"normal\" style=\"align:center middle;\" text=\"bind:BIZ_NO\" maskchar=\" \" tooltiptext=\"bind:BIZ_NO\"/><Cell col=\"2\" style=\"align:left middle;\" cssclass=\"cell_link\" text=\"bind:PTNR_NM\" tooltiptext=\"bind:PTNR_NM\"/><Cell col=\"3\" style=\"align:center middle;\" text=\"bind:RPRSTV_NM\" tooltiptext=\"bind:RPRSTV_NM\"/><Cell col=\"4\" style=\"align:center middle;\" text=\"bind:TEL\" tooltiptext=\"bind:TEL\"/><Cell col=\"5\" displaytype=\"date\" style=\"align:center middle;\" text=\"bind:CFMDT\" mask=\"yyyy-MM-dd\" calendardisplay=\"edit\" calendardisplaynulltype=\"none\" tooltiptext=\"bind:CFMDT\"/><Cell col=\"6\" style=\"align:center middle;\" text=\"bind:SRC_GRP_USER_NM\" maskchar=\" \" tooltiptext=\"bind:SRC_GRP_USER_NM\"/><Cell col=\"7\" style=\"align:left;\" text=\"bind:ADDR\" tooltiptext=\"bind:ADDR\"/></Band></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "9", this.divViewCompBody00);
            obj.set_scrollbars("none");
            obj.set_taborder("11");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.divViewCompBody00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 113, this.divViewCompCond01,
            	//-- Layout function
            	function(p) {
            		p.set_cssclass("div_WF_SearchBg");
            		p.getSetter("objNm").set("");
            		p.set_taborder("1");

            	}
            );
            this.divViewCompCond01.addLayout(obj.name, obj);

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
            obj = new Layout("default", "", 0, 0, this.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.set_text("Div00");

            	}
            );
            this.divViewCompBody00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1220, 711, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("frmSearchCond");
            		p.set_titletext("휴면/거래중지업체현황");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("PTNR_NM","divViewCompCond00.edtPtnrNm","value","dsCondition","PTNR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("BIZ_NO","divViewCompCond00.edtBizNo","value","dsCondition","BIZ_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("CD_PORG_UNIT_STTS","divViewCompCond00.cboPorgStts","value","dsCondition","CD_PORG_UNIT_STTS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("RPRSTV_NM","divViewCompCond01.edtRprstvNm","value","dsCondition","RPRSTV_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("PCHRGR_ID","divViewCompCond01.edtPchrgrId","value","dsCondition","PCHRGR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("PCHRGR_NM","divViewCompCond01.edtPchrgrNm","value","dsCondition","PCHRGR_NM");
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
            obj = new BindItem("staCfmDtVi","divViewCompCond01.staCfmDt","visible","dsObjBindVi","staCfmDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCfmDtEn","divViewCompCond01.staCfmDt","enable","dsObjBindEn","staCfmDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divCfmDtVi","divViewCompCond01.divCfmDt","visible","dsObjBindVi","divCfmDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divCfmDtEn","divViewCompCond01.divCfmDt","enable","dsObjBindEn","divCfmDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPchrgrIdVi","divViewCompCond01.edtPchrgrId","visible","dsObjBindVi","edtPchrgrId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPchrgrIdEn","divViewCompCond01.edtPchrgrId","readonly","dsObjBindEn","edtPchrgrId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPchrgrNmVi","divViewCompCond01.edtPchrgrNm","visible","dsObjBindVi","edtPchrgrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPchrgrNmEn","divViewCompCond01.edtPchrgrNm","readonly","dsObjBindEn","edtPchrgrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnSinglePop00Vi","divViewCompCond01.btnSinglePop00","visible","dsObjBindVi","btnSinglePop00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnSinglePop00En","divViewCompCond01.btnSinglePop00","enable","dsObjBindEn","btnSinglePop00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPchrgrNmVi","divViewCompCond01.staPchrgrNm","visible","dsObjBindVi","staPchrgrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPchrgrNmEn","divViewCompCond01.staPchrgrNm","enable","dsObjBindEn","staPchrgrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRprstvNm00Vi","divViewCompCond01.staRprstvNm00","visible","dsObjBindVi","staRprstvNm00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRprstvNm00En","divViewCompCond01.staRprstvNm00","enable","dsObjBindEn","staRprstvNm00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRprstvNm02Vi","divViewCompCond01.staRprstvNm02","visible","dsObjBindVi","staRprstvNm02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRprstvNm02En","divViewCompCond01.staRprstvNm02","enable","dsObjBindEn","staRprstvNm02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRprstvNm03Vi","divViewCompCond01.staRprstvNm03","visible","dsObjBindVi","staRprstvNm03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRprstvNm03En","divViewCompCond01.staRprstvNm03","enable","dsObjBindEn","staRprstvNm03");
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
            obj = new BindItem("staPtnrNmVi","divViewCompCond00.staPtnrNm","visible","dsObjBindVi","staPtnrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPtnrNmEn","divViewCompCond00.staPtnrNm","enable","dsObjBindEn","staPtnrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtBizNoVi","divViewCompCond00.edtBizNo","visible","dsObjBindVi","edtBizNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtBizNoEn","divViewCompCond00.edtBizNo","readonly","dsObjBindEn","edtBizNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPorgSttsVi","divViewCompCond00.staPorgStts","visible","dsObjBindVi","staPorgStts");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPorgSttsEn","divViewCompCond00.staPorgStts","enable","dsObjBindEn","staPorgStts");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboPorgSttsVi","divViewCompCond00.cboPorgStts","visible","dsObjBindVi","cboPorgStts");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboPorgSttsEn","divViewCompCond00.cboPorgStts","readonly","dsObjBindEn","cboPorgStts");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPagingVi","divViewCompBody00.divPaging","visible","dsObjBindVi","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPagingEn","divViewCompBody00.divPaging","enable","dsObjBindEn","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","divViewCompCond01.staRprstvNm","text","gdsLabel","EPRO_LABEL_00530");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","divViewCompCond01.staRprstvNm02","text","gdsLabel","EPRO_LABEL_00452");
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
        this.registerScript("BPtnrStopList.xfdl", function(exports) {
        /**
         * @파일명       	: BPtnrReqList.xfdl
         * @생성자       	: 한의봉
         * @생성일자     	: 2017. 9. 07.
         * @설명			: 휴면/거래중지 업체현황
         * @최종수정자		: 김동호
         * @최종수정일자	: 2017. 12. 01.
        */  

        
        /**
          * @함수명	: fnFormOninit
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.InitEventInfo(이벤트변수)
          * @desc     	: 폼 oninit이벤트
          */
        this.fnFormOninit = function(obj,e)
        {
        	var param = [
        					{code:"SR20", sSelectType:"A", sFiltered:"S:RST,REJ"} // 협력사 상태
        				];
        	gfnGetCode(this, param);
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

        	//그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기(그리드 컴포넌트, 페이징div 컴포넌트, 폼오브젝트(this))
        	var sArgEx = {
        					isTran:"Y", tranNm:"BPtnrService.searchPtnrStop", dsParam:this.dsCondition
        				}
         	gfnSetGrdFunc(this.divViewCompBody00.grdList, this.divViewCompBody00.divPaging, this, sArgEx);
         	this.fnFold();
         	//요청일자 셋팅
        	this.divViewCompCond01.divCfmDt.fnSetDate(this.dsCondition, "CFM_DT_STR", "CFM_DT_END");
        	
        	this.dsCondition.addRow();
        	this.dsCondition.setColumn(0, "BRANCH_CD", application.gdsUserInfo.getColumn(0, "BRANCH_CD"));
        	this.dsCondition.setColumn(0, "CD_PORG_UNIT_STTS", "");

        	gfnSetObj("A");
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

        	var sSvcID = "searchPtnrStop";
        	var sController = "epro.ptnr.service.BPtnrService.searchPtnrStop";
        	var sInDatasets = "dsCondition=dsCondition";
        	var sOutDatasets = "dsList=dsList";
        	var sCallbackFunc = "fnTrCallBack";
        	
        	/*
        		페이징일 때 oPaging 선언후 사용
        		inDs:검색조건 데이터셋, outDs:리스트 데이터셋, divPaging:페이징 div
        	*/
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
        		case "searchPtnrReq" :
        		break;
        		case "searchPtnrStop" :

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
        		gfnSetTmprData("FOR_CHECK"		,"isStopList");
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
        			
        			case "edtPtnrNm" :
        				this.fnSearch();
        			break;
        			
        			case "edtBizNo" :
        				this.fnSearch();
        			break;
        			case "edtRprstvNm" :
        				this.fnSearch();
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
            this.divViewCompCond01.edtRprstvNm.addEventHandler("onkeyup", this.fnEnterOnkeyup, this);
            this.divViewCompCond01.edtPchrgrNm.addEventHandler("onkeydown", this.fnEnterOnkeyup, this);
            this.divViewCompCond01.edtPchrgrNm.addEventHandler("ontextchanged", this.fnOnTextChanged, this);
            this.divViewCompCond01.btnSinglePop00.addEventHandler("onclick", this.fnUserSearch, this);
            this.divViewCompCond00.edtPtnrNm.addEventHandler("onkeyup", this.fnEnterOnkeyup, this);
            this.divViewCompCond00.edtBizNo.addEventHandler("onkeyup", this.fnEnterOnkeyup, this);
            this.divViewCompBody00.grdList.addEventHandler("oncelldblclick", this.fnListOncelldblclick, this);

        };

        this.loadIncludeScript("BPtnrStopList.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
