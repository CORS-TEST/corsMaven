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
                this.set_name("BPorPrgList");
                this.set_titletext("발주진행현황");
                this._setFormPosition(0,0,1220,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCdCM10", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdPR11", this);
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
            obj._setContents("<ColumnInfo><Column id=\"CD_PR_CTGR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PR_CTGR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DOC_CTGR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DOC_CTGR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PR_ITEM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PR_STTS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PR_STTS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PR_ITEM_STTS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PR_ITEM_STTS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PR_REQ_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_REQ_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"STR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"STR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DPMT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DPMT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"REQR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PCHRGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PCHRGR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GR_ACNT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GR_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RCV_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCondition", this);
            obj._setContents("<ColumnInfo><Column id=\"CRT_DT_STR\" type=\"STRING\" size=\"256\"/><Column id=\"CRT_DT_END\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PR_STTS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DOC_CTGR\" type=\"STRING\" size=\"256\"/><Column id=\"PR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TTL\" type=\"STRING\" size=\"256\"/><Column id=\"CHRGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHRGR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRCH_STR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRCH_STR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PR_ITEM_STTS\" type=\"STRING\" size=\"256\"/><Column id=\"REQR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReturn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdDL10", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompCond01", "absolute", "0", "35", null, "86", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.getSetter("objNm").set("");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);
            obj = new Static("staWarning", "absolute", "-1", "65", null, "19", "1", null, this.divViewCompCond01);
            obj.set_taborder("49");
            obj.set_text("- 검색조건 없이 검색 시 속도가 저하 될 수 있습니다.");
            obj.set_cssclass("sta_WF_SearchText");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staPoNo", "absolute", "0", "5", "170", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("0");
            obj.set_text("품목구분");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("검색어-품목구분");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staChrgrId", "absolute", "455", "33", "118", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("8");
            obj.set_text("요청자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("검색어-요청자");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staChrgrId00", "absolute", "456", "5", "118", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("50");
            obj.set_text("입고부서");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("검색어-입고부서");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Combo("cboCdDocCtgr", "absolute", "171", "5", "244", "24", null, null, this.divViewCompCond01);
            this.divViewCompCond01.addChild(obj.name, obj);
            obj.set_taborder("54");
            obj.set_innerdataset("@dsCdCM10");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("검색조건-품목구분");
            obj = new Static("staPoNo00", "absolute", "0", "33", "170", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("55");
            obj.set_text("구매요청번호");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("검색어-구매요청번호");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divReqr", "absolute", "574", "33", "250", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("57");
            obj.set_text("Div00");
            obj.getSetter("objNm").set("검색조건-요청자");
            obj.set_url("CCOMP::ComSrchUser.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divStr", "absolute", "574", "5", "250", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("58");
            obj.set_text("Div00");
            obj.getSetter("objNm").set("검색조건-입고부서");
            obj.set_url("CCOMP::ComSrchStr.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divPrNo", "absolute", "171", "33", "244", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("59");
            obj.set_text("Div00");
            obj.getSetter("objNm").set("검색조건-요청자");
            obj.set_url("CCOMP::ComSrchInput.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);

            obj = new Div("divViewCompBody00", "absolute", "0", "164", null, null, "15", "0", this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "9", this.divViewCompBody00);
            obj.getSetter("objNm").set("페이징");
            obj.set_scrollbars("none");
            obj.set_taborder("2");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnNewPr", "absolute", null, "1", "80", "27", "0", null, this.divViewCompBody00);
            obj.set_taborder("3");
            obj.set_text("신규작성");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Grid("grdPrList", "absolute", "0", "36", null, null, "0", "37", this.divViewCompBody00);
            obj.set_taborder("4");
            obj.set_binddataset("dsList");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("none");
            obj.getSetter("f_filter").set("N");
            obj.getSetter("f_excel").set("Y");
            obj.getSetter("f_hide").set("N");
            obj.getSetter("f_find").set("N");
            obj.getSetter("f_sort").set("Y");
            obj.getSetter("f_fix").set("Y");
            obj.getSetter("f_height").set("N");
            obj.getSetter("f_save").set("N");
            obj.getSetter("f_mode").set("Y");
            obj.getSetter("f_init").set("Y");
            obj.getSetter("f_colSize").set("N");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"98\"/><Column size=\"118\"/><Column size=\"312\"/><Column size=\"135\"/><Column size=\"77\"/><Column size=\"68\"/><Column size=\"103\"/><Column size=\"117\"/><Column size=\"96\"/><Column size=\"102\"/><Column size=\"104\"/><Column size=\"101\"/><Column size=\"78\"/><Column size=\"91\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"상태\"/><Cell col=\"1\" text=\"구매요청번호\"/><Cell col=\"2\" text=\"품목명\"/><Cell col=\"3\" text=\"입고부서\"/><Cell col=\"4\" text=\"수량\"/><Cell col=\"5\" text=\"단위\"/><Cell col=\"6\" text=\"단가\"/><Cell col=\"7\" text=\"금액\"/><Cell col=\"8\" text=\"입고요청일\"/><Cell col=\"9\" text=\"구매담당자\"/><Cell col=\"10\" text=\"접수일시\"/><Cell col=\"11\" text=\"입고계정명\"/><Cell col=\"12\" text=\"요청자\"/><Cell col=\"13\" text=\"품목코드\"/></Band><Band id=\"body\"><Cell style=\"selectcolor:#0044ffff;\" cssclass=\"cell_link\" text=\"bind:CD_PR_STTS_NM\"/><Cell col=\"1\" cssclass=\"cell_link\" text=\"bind:PR_NO\"/><Cell col=\"2\" style=\"align:left;\" cssclass=\"cell_link\" text=\"bind:MTRL_NM\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:STR_NM\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:QTY\" mask=\"#,##0\"/><Cell col=\"5\" text=\"bind:CD_UNIT_NM\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:REQ_PRICE\" mask=\"#,##0\" maskchar=\"_\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:REQ_AMT\" mask=\"#,##0\"/><Cell col=\"8\" displaytype=\"date\" text=\"bind:DLV_REQ_DAY\" mask=\"yyyy.MM.dd\"/><Cell col=\"9\" text=\"bind:PCHRGR_NM\"/><Cell col=\"10\" text=\"bind:RCV_DT\"/><Cell col=\"11\" text=\"bind:GR_ACNT_NM\"/><Cell col=\"12\" text=\"bind:REQR_NM\"/><Cell col=\"13\" text=\"bind:MTRL_CD\"/></Band></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Div("divViewCompCond00", "absolute", "0", "0", null, "36", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.style.set_align("center");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            obj = new Div("divCrtDt", "absolute", "170", "5", "245", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("0");
            obj.getSetter("objNm").set("검색조건-작성일자");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staCdPrStts", "absolute", "440", "5", "97", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("3");
            obj.set_text("물품요청상태");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("objNm").set("검색어-물품요청상태");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Combo("cboCdPrStts", "absolute", "535", "5", "100", "24", null, null, this.divViewCompCond00);
            this.divViewCompCond00.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_innerdataset("@dsCdPR11");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("상태");
            obj = new Static("staCrtDt", "absolute", "10", "4", "149", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("5");
            obj.set_text("작성일자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("검색어-작성일자");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staMtrl", "absolute", "643", "4", "82", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("9");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("검색어-품목");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Div("divMtrl", "absolute", "725", "4", "350", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("10");
            obj.set_text("Div00");
            obj.getSetter("objNm").set("검색조건-품목");
            obj.set_url("CCOMP::ComSrchMtrl.xfdl");
            this.divViewCompCond00.addChild(obj.name, obj);

            obj = new Button("btnFold", "absolute", "45.66%", "119", "56", "17", null, null, this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_Fold_Close");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 86, this.divViewCompCond01,
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
            		p.set_taborder("2");
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
            		p.set_taborder("0");

            	}
            );
            this.divViewCompCond00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1220, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("발주진행현황");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","divViewCompCond00.cboCdPrStts","value","dsCondition","CD_PR_STTS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divViewCompCond01.cboCdDocCtgr","value","dsCondition","CD_DOC_CTGR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoNoVi","divViewCompCond01.staPoNo","visible","dsObjBindVi","staPoNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoNoEn","divViewCompCond01.staPoNo","enable","dsObjBindEn","staPoNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staChrgrIdVi","divViewCompCond01.staChrgrId","visible","dsObjBindVi","staChrgrId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staChrgrIdEn","divViewCompCond01.staChrgrId","enable","dsObjBindEn","staChrgrId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staChrgrId00Vi","divViewCompCond01.staChrgrId00","visible","dsObjBindVi","staChrgrId00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staChrgrId00En","divViewCompCond01.staChrgrId00","enable","dsObjBindEn","staChrgrId00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboCdDocCtgrVi","divViewCompCond01.cboCdDocCtgr","visible","dsObjBindVi","cboCdDocCtgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboCdDocCtgrEn","divViewCompCond01.cboCdDocCtgr","readonly","dsObjBindEn","cboCdDocCtgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoNo00Vi","divViewCompCond01.staPoNo00","visible","dsObjBindVi","staPoNo00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoNo00En","divViewCompCond01.staPoNo00","enable","dsObjBindEn","staPoNo00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divReqrVi","divViewCompCond01.divReqr","visible","dsObjBindVi","divReqr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divReqrEn","divViewCompCond01.divReqr","enable","dsObjBindEn","divReqr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divStrVi","divViewCompCond01.divStr","visible","dsObjBindVi","divStr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divStrEn","divViewCompCond01.divStr","enable","dsObjBindEn","divStr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPrNoVi","divViewCompCond01.divPrNo","visible","dsObjBindVi","divPrNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPrNoEn","divViewCompCond01.divPrNo","enable","dsObjBindEn","divPrNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPagingVi","divViewCompBody00.divPaging","visible","dsObjBindVi","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPagingEn","divViewCompBody00.divPaging","enable","dsObjBindEn","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnNewPrVi","divViewCompBody00.btnNewPr","visible","dsObjBindVi","btnNewPr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnNewPrEn","divViewCompBody00.btnNewPr","enable","dsObjBindEn","btnNewPr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divCrtDtVi","divViewCompCond00.divCrtDt","visible","dsObjBindVi","divCrtDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divCrtDtEn","divViewCompCond00.divCrtDt","enable","dsObjBindEn","divCrtDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCdPrSttsVi","divViewCompCond00.staCdPrStts","visible","dsObjBindVi","staCdPrStts");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCdPrSttsEn","divViewCompCond00.staCdPrStts","enable","dsObjBindEn","staCdPrStts");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboCdPrSttsVi","divViewCompCond00.cboCdPrStts","visible","dsObjBindVi","cboCdPrStts");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboCdPrSttsEn","divViewCompCond00.cboCdPrStts","readonly","dsObjBindEn","cboCdPrStts");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCrtDtVi","divViewCompCond00.staCrtDt","visible","dsObjBindVi","staCrtDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCrtDtEn","divViewCompCond00.staCrtDt","enable","dsObjBindEn","staCrtDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staMtrlVi","divViewCompCond00.staMtrl","visible","dsObjBindVi","staMtrl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staMtrlEn","divViewCompCond00.staMtrl","enable","dsObjBindEn","staMtrl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divMtrlVi","divViewCompCond00.divMtrl","visible","dsObjBindVi","divMtrl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divMtrlEn","divViewCompCond00.divMtrl","enable","dsObjBindEn","divMtrl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnFoldVi","btnFold","visible","dsObjBindVi","btnFold");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnFoldEn","btnFold","enable","dsObjBindEn","btnFold");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::ComSrchUser.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComSrchStr.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComSrchInput.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompCalFromTo.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComSrchMtrl.xfdl");
        };
        
        // User Script
        this.registerScript("BPrList.xfdl", function(exports) {
        /**
         * @파일명			: BPorPrgList
         * @생성자			: 한의봉
         * @생성일시		: 2019. 04. 26.
         * @설명			: 발주진행현황
         * @최종수정자		: 한의봉
         * @최종수정일시	: 2019. 04. 26.
        */  

        
        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {
        	var param = [
        					 {code:"PR11", sSelectType:"A"}
        					 , {code:"CM10", sSelectType:"A"}
        					 , {code:"DL10", sSelectType:"A"}
        				];				
        	gfnGetCode(this, param);
        }

        /**
          * @함수명	: FormOninit
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
        // 	gfnSetGrdFunc(this.divViewCompBody00.grdPrList, this.divViewCompBody00.divPaging, this,{isTran:"Y", tranNm:"BPorService.searchPorPrgList", dsParam:this.dsCondition});
         	
         	//조회조건 Div 접기/펼치기 세팅
         	this.fnFold();
        	 		
        	//요청일자 셋팅
        	this.divViewCompCond00.divCrtDt.fnSetDate(this.dsCondition, "CRT_DT_STR", "CRT_DT_END");
        	this.divViewCompCond00.divMtrl.fnSet(this.dsCondition, "MTRL_CD", "MTRL_NM");
        	this.divViewCompCond01.divReqr.fnSet(this.dsCondition, "REQR_ID", "REQR_NM");
        	this.divViewCompCond01.divStr.fnSet(this.dsCondition, "SRCH_STR_CD", "SRCH_STR_NM");
        	this.divViewCompCond01.divPrNo.fnSet(this.dsCondition, "TTL", "fnSearch");
        	
        	this.dsCondition.addRow();
        	this.dsCondition.setColumn(0,"CD_DOC_CTGR", application.gdsUserInfo.getColumn(0,"CD_DOC_CTGR"));
        	this.dsCondition.setColumn(0,"CD_PR_STTS","");
        	this.dsCondition.setColumn(0,"CD_DOC_CTGR","");
        	this.dsCondition.setColumn(0,"CRT_DT_STR",gfnAddMonth(gfnToday(), -1));
         	this.dsCondition.setColumn(0,"CRT_DT_END",gfnToday());

         	this.dsCondition.setColumn(0,"BRANCH_CD",application.gdsUserInfo.getColumn(0,"BRANCH_CD"));
         	this.dsCondition.setColumn(0,"REQR_ID",application.gdsUserInfo.getColumn(0,"USER_ID"));
         	this.dsCondition.setColumn(0,"REQR_NM",application.gdsUserInfo.getColumn(0,"USER_NM"));
        	this.fnSearch();
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
        this.fnSearch = function(svcId)
        {
        	if(!this.fnPreSearch()) return false;
        	var sSvcID = "search";
        	var sController = "epro.pur.service.BPrService.searchPrList";
        	var sInDatasets = "dsCondition=dsCondition";
        	var sOutDatasets = "dsList=dsList";
        	var sCallbackFunc = "fnTrCallBack";
        		
         	var	oPaging = [      
                            {inDs:this.dsCondition, grid:this.divViewCompBody00.grdPrList, divPaging:this.divViewCompBody00.divPaging}
                        ];
                        
        	 gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc, oPaging);
        }

        /**
        	@function	fnAdd()
        	@desc   	(공통버튼)신규
        */
        this.fnAdd = function() 
        {
        	gfnOpenMenuUrl("BPUR::BPrDetail");
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
        		case "search" :
        			trace(this.dsList.saveXML());
        		break;
        				
        		default:
        		break;	
        	}
        }

        
        this.grdListOnCelldblclick = function(obj,e)
        {
        	if(gfnIsNull(this.dsList.getColumn(e.row,gfnGrdBindColId(obj, e.cell)))) return false;

        	if(gfnGrdBindColId(obj, e.cell)=="PR_NO")	//구매요청번호
        	{
        		gfnSetTmprData("PR_NO" ,this.dsList.getColumn(e.row, "PR_NO"));
        		gfnOpenMenuUrl("BPUR::BPrDetail");
        	}
        	else if(gfnGrdBindColId(obj, e.cell)=="CD_PR_STTS_NM")	//구매요청History
        	{
        		var sArg = { agv_id : this.dsList.getColumn(e.row, "PR_ITEM_ID") };
        		gfnModalPop(this, "PrItemInfo", "CPOP::BPrHistPopup.xfdl", sArg, "fnPopCallBack", 800, 500);
        	}else if(gfnGrdBindColId(obj, e.cell)=="MTRL_NM")	//품목정보
        	{
        		var sArg = { agv_id : this.dsList.getColumn(e.row, "MTRL_CD")};
        		gfnModalPop(this, "readMtrlInfo", "CPOP::BMtrlInfoPopup.xfdl", sArg, "fnPopCallBack", 800, 500);
        	}
        }

        

        /**
          	@function	 fnEnterOnkeyup()
          	@desc  		 Enter or BackSpace 처리.
         */
        this.fnKeydown = function(obj,e)
        {
        	//Enter 입력시
        	if(e.keycode == "13")
        	{
        		obj.updateToDataset();
        		if(obj.name == "edtPoNo" || obj.name == "edtTtl")
        		{
        			this.fnSearch();
        		}
        		else if(obj.name == "edtPtnrNm")
        		{
        			this.fnPtnrSearch()
        		}
        		else if(obj.name == "edtChrgrNm")
        		{
        			this.fnUserSearch()
        		}
        		else if(obj.name == "edtItemNm")
        		{
        			this.div_condition1_btn_mtrlCd_onclick();
        		}
        	}
        }

        /**
          	@function	 fn_ontextchanged_event()
          	@desc  		 값변경시 ID 초기화
         */
        this.fn_ontextchanged_event = function(obj,e)
        {
        	if(obj.name == "edtPtnrNm")
        	{
        		gfnInitKey(this.dsCondition,e,"PTNR_ID");	
        	}
        	else if(obj.name == "edtChrgrNm")
        	{
        		gfnInitKey(this.dsCondition,e,"CHRGR_ID");	
        	}
        	else if(obj.name == "edtMtrlNm")
        	{
        		gfnInitKey(this.dsCondition,e,"MTRL_CD");
        	}
        }

        /**
          	@function	 fnUserSearch()
          	@desc  		 사용자팝업
         */
        this.fnUserSearch = function(obj,e)
        {
        	var sArg = { 
        					agv_id:""
        					,agv_nm:this.dsCondition.getColumn(0,"CHRGR_NM")
        			   };
        			   
        	gfnSearchComUser(this, "BUserSrchPopup", "fnPopCallBack", sArg);
        }

        /**
          	@function	 fnItemSearch()
          	@desc  		 품목팝업
         */
        this.fnMtrlSearch = function(obj,e)
        {
        	var sArg = { 
        					agv_id:""
        					,agv_nm:this.dsCondition.getColumn(0,"ITEM_NM")
        			   };
        			   
        	gfnSearchComMtrl(this, "MtrlSrchPopup", "fnPopCallBack", sArg);
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
        		case "MtrlSrchPopup" :
        			this.dsCondition.setColumn(0,"MTRL_CD",this.dsReturn.getColumn(0,"MTRL_CD"));
        			this.dsCondition.setColumn(0,"MTRL_NM",this.dsReturn.getColumn(0,"MTRL_NM"));
        			break;
        		case "BPtnrSrchPopup":
        			this.dsCondition.setColumn(0,"PTNR_ID",this.dsReturn.getColumn(0,"PTNR_ID"));
        			this.dsCondition.setColumn(0,"PTNR_NM",this.dsReturn.getColumn(0,"PTNR_NM"));
        			break;
        		case "BUserSrchPopup":
        			this.dsCondition.setColumn(0,"CHRGR_ID",this.dsReturn.getColumn(0,"USER_ID"));
        			this.dsCondition.setColumn(0,"CHRGR_NM",this.dsReturn.getColumn(0,"USER_NM"));
        			break;
        		default:
        			break;	
        	}
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.FormOninit, this);
            this.addEventHandler("onload", this.FormOnload, this);
            this.divViewCompCond01.staPoNo.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond01.staChrgrId.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond01.staChrgrId00.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond01.staPoNo00.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompBody00.btnNewPr.addEventHandler("onclick", this.fnAdd, this);
            this.divViewCompBody00.grdPrList.addEventHandler("oncelldblclick", this.grdListOnCelldblclick, this);
            this.divViewCompCond00.staMtrl.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.btnFold.addEventHandler("onclick", this.btnFold_onclick, this);

        };

        this.loadIncludeScript("BPrList.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
