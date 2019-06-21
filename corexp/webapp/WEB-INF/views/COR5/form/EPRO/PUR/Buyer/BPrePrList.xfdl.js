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
                this.set_titletext("사전요청현황");
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
            obj._setContents("<ColumnInfo><Column id=\"CRT_DT_START\" type=\"STRING\" size=\"256\"/><Column id=\"CRT_DT_END\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PR_STTS\" type=\"STRING\" size=\"40\"/><Column id=\"CD_PRE_PR_DIST\" type=\"STRING\" size=\"40\"/><Column id=\"MTRL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_NM\" type=\"STRING\" size=\"400\"/><Column id=\"REQR_ID\" type=\"STRING\" size=\"40\"/><Column id=\"REQR_NM\" type=\"STRING\" size=\"40\"/><Column id=\"ORDERBY\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ITEM1\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ITEM2\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ITEM3\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ITEM4\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE1\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE2\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE3\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE4\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdPR14", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdPR15", this);
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
            obj = new Static("staPrNo", "absolute", "0", "5", "170", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("66");
            obj.set_text("구매요청번호");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("검색어-구매요청번호");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staPrNm", "absolute", "0", "34", "170", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("67");
            obj.set_text("구매요청명");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("검색어-구매요청명");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staMtrl", "absolute", "476", "5", "118", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("70");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("검색어-품목");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staPchrgrId", "absolute", "476", "34", "118", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("71");
            obj.set_text("요청자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("검색어-요청자");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divPrNo", "absolute", "170", "5", "220", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("72");
            obj.set_text("Div00");
            obj.getSetter("objNm").set("검색조건-구매요청번호");
            obj.set_url("CCOMP::ComSrchInput.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divPrTtl", "absolute", "170", "34", "220", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("73");
            obj.set_text("Div00");
            obj.getSetter("objNm").set("검색조건-구매요청명");
            obj.set_url("CCOMP::ComSrchInput.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divMtrl", "absolute", "594", "5", "350", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("74");
            obj.set_text("Div00");
            obj.getSetter("objNm").set("검색조건-품목");
            obj.set_url("CCOMP::ComSrchMtrl.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divReqr", "absolute", "594", "34", "250", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("75");
            obj.set_text("Div00");
            obj.getSetter("objNm").set("검색조건-요청자");
            obj.set_url("CCOMP::ComSrchUser.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);

            obj = new Div("divViewCompBody00", "absolute", "0", "161", null, null, "15", "0", this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "29", null, null, "0", "37", this.divViewCompBody00);
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
            obj.set_taborder("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"387\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"99\"/><Column size=\"80\"/><Column size=\"110\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"요청번호\"/><Cell col=\"1\" text=\"상태명\"/><Cell col=\"2\" text=\"요청구분\"/><Cell col=\"3\" text=\"요청명\"/><Cell col=\"4\" text=\"요청일자\"/><Cell col=\"5\" text=\"요청자명\"/><Cell col=\"6\" text=\"회신희망일자\"/><Cell col=\"7\" text=\"구매담당자\"/><Cell col=\"8\" text=\"접수일자\"/><Cell col=\"9\" text=\"작성일자\"/></Band><Band id=\"body\"><Cell cssclass=\"cell_link\" text=\"bind:PR_NO\"/><Cell col=\"1\" text=\"bind:CD_PR_STTS_NM\"/><Cell col=\"2\" text=\"bind:CD_PRE_PR_DIST_NM\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:TTL\"/><Cell col=\"4\" displaytype=\"date\" text=\"bind:REQ_DT\" mask=\"yyyy.MM.dd\" calendardisplaynulltype=\"none\" tooltiptext=\"bind:REQ_DT\"/><Cell col=\"5\" cssclass=\"cell_link\" text=\"bind:REQR_NM\"/><Cell col=\"6\" displaytype=\"date\" text=\"bind:HOPE_REPLY_DAY\" mask=\"yyyy.MM.dd\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" cssclass=\"cell_link\" text=\"bind:PCHRGR_NM\"/><Cell col=\"8\" displaytype=\"date\" text=\"bind:RCV_DT\" mask=\"yyyy.MM.dd\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" displaytype=\"date\" text=\"bind:CRT_DT\" mask=\"yyyy.MM.dd\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "9", this.divViewCompBody00);
            obj.getSetter("objNm").set("페이징");
            obj.set_scrollbars("none");
            obj.set_taborder("2");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Div("divViewCompCond00", "absolute", "0", "0", null, "36", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.style.set_align("center");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);
            obj = new Div("divCntrDt", "absolute", "170", "6", "301", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.getSetter("objNm").set("검색조건-작성일자");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Combo("cboPrStts", "absolute", "594", "6", "148", "24", null, null, this.divViewCompCond00);
            this.divViewCompCond00.addChild(obj.name, obj);
            var cboPrStts_innerdataset = new Dataset("cboPrStts_innerdataset", this.divViewCompCond00.cboPrStts);
            cboPrStts_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows/>");
            obj.set_innerdataset(cboPrStts_innerdataset);
            obj.set_taborder("3");
            obj.set_innerdataset("@dsCdPR15");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("검색조건-요청분류");
            obj = new Combo("cboPrCtgr", "absolute", "892", "6", "185", "24", null, null, this.divViewCompCond00);
            this.divViewCompCond00.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_innerdataset("@dsCdPR14");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("검색조건-상태");
            obj = new Static("staPtnrNm", "absolute", "0", "5", "170", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("6");
            obj.set_text("작성일자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("검색어-작성일자");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staPtnrNm00", "absolute", "476", "5", "118", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("7");
            obj.set_text("요청분류");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("검색어-요청분류");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staPtnrNm01", "absolute", "774", "5", "118", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("8");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("검색어-상태");
            this.divViewCompCond00.addChild(obj.name, obj);

            obj = new Button("btnFold", "absolute", "45.66%", "145", "56", "17", null, null, this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_Fold_Close");
            obj.getSetter("objNm").set("버튼-접고펼치기");
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
            		p.set_titletext("사전요청현황");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","divViewCompCond00.cboPrStts","value","dsCondition","CD_PRE_PR_DIST");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","divViewCompCond00.cboPrCtgr","value","dsCondition","CD_PR_STTS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPrNoVi","divViewCompCond01.staPrNo","visible","dsObjBindVi","staPrNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPrNoEn","divViewCompCond01.staPrNo","enable","dsObjBindEn","staPrNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPrNmVi","divViewCompCond01.staPrNm","visible","dsObjBindVi","staPrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPrNmEn","divViewCompCond01.staPrNm","enable","dsObjBindEn","staPrNm");
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
            obj = new BindItem("divPrNoVi","divViewCompCond01.divPrNo","visible","dsObjBindVi","divPrNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPrNoEn","divViewCompCond01.divPrNo","enable","dsObjBindEn","divPrNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPrTtlVi","divViewCompCond01.divPrTtl","visible","dsObjBindVi","divPrTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPrTtlEn","divViewCompCond01.divPrTtl","enable","dsObjBindEn","divPrTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divMtrlVi","divViewCompCond01.divMtrl","visible","dsObjBindVi","divMtrl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divMtrlEn","divViewCompCond01.divMtrl","enable","dsObjBindEn","divMtrl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divReqrVi","divViewCompCond01.divReqr","visible","dsObjBindVi","divReqr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divReqrEn","divViewCompCond01.divReqr","enable","dsObjBindEn","divReqr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPagingVi","divViewCompBody00.divPaging","visible","dsObjBindVi","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPagingEn","divViewCompBody00.divPaging","enable","dsObjBindEn","divPaging");
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

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::ComSrchInput.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComSrchInput.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComSrchMtrl.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComSrchUser.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompCalFromTo.xfdl");
        };
        
        // User Script
        this.registerScript("BPrePrList.xfdl", function(exports) {
        /**
         * @파일명			: BPrePrList
         * @생성자			: 배열
         * @생성일시		: 2019. 05. 22.
         * @설명			: 사전요청현황
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
        					 {code:"PR14", sSelectType:"A"}
        					 , {code:"PR15", sSelectType:"A"}
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
         	gfnSetGrdFunc(this.divViewCompBody00.grdList, this.divViewCompBody00.divPaging, this,{isTran:"Y", tranNm:"BPrePrService.prePrSrch", dsParam:this.dsCondition});
         	
         	//조회조건 Div 접기/펼치기 세팅
         	this.fnFold();
         		
        	//요청일자 셋팅
        	this.divViewCompCond00.divCntrDt.fnSetDate(this.dsCondition, "DAY_STR", "DAY_END");	
        	this.divViewCompCond01.divMtrl.fnSet(this.dsCondition, "MTRL_CD", "MTRL_NM");	
        	this.divViewCompCond01.divReqr.fnSet(this.dsCondition, "REQR_ID", "REQR_NM");	
        	this.divViewCompCond01.divPrNo.fnSet(this.dsCondition, "PR_NO", "fnSearch");	
        	this.divViewCompCond01.divPrTtl.fnSet(this.dsCondition, "TTL", "fnSearch");	
        	this.dsCondition.setColumn(0,"CD_PRE_PR_DIST","");
        	this.dsCondition.setColumn(0,"CD_PR_STTS","");
        	
        	this.dsCondition.setColumn(0,"CD_CNTR_STTS","");
         	//로그인정보에 담겨져 있는 개인정보를 검색조건에 셋팅한다.
        	if(application.gdsUserRole.findRow("ROLE_ID","B_MANAGER")< 0 ){
        		this.dsCondition.setColumn(0,"CNTR_CHRGR_ID",application.gdsUserInfo.getColumn(0,"USER_ID"));
        		this.dsCondition.setColumn(0,"CNTR_CHRGR_NM",application.gdsUserInfo.getColumn(0,"USER_NM"));
        	}
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
        		
        	var sSvcID = "prePrSrch";
        	var sController = "epro.pur.service.BPrePrService.prePrSrch";
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
        		case "prePrSrch" :
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
        		gfnSetTmprData("CD_PR_STTS" ,this.dsList.getColumn(e.row, "CD_PR_STTS"));
        		gfnOpenMenuUrl("BPUR::BPrePrDetail");
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
         
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.FormOninit, this);
            this.addEventHandler("onload", this.FormOnload, this);
            this.divViewCompCond01.staPrNo.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond01.staPrNm.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.divViewCompCond01.staMtrl.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond01.staPchrgrId.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompBody00.grdList.addEventHandler("oncelldblclick", this.grdListOnCelldblclick, this);
            this.divViewCompCond00.staPtnrNm.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond00.staPtnrNm00.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond00.staPtnrNm01.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.btnFold.addEventHandler("onclick", this.btnFold_onclick, this);

        };

        this.loadIncludeScript("BPrePrList.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
