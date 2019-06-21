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
                this.set_name("BPrePrRcvList");
                this.set_titletext("사전요청접수현황");
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
            obj._setContents("<ColumnInfo><Column id=\"PR_REQ_DT_START\" type=\"STRING\" size=\"256\"/><Column id=\"PR_REQ_DT_END\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PR_STTS\" type=\"STRING\" size=\"40\"/><Column id=\"CD_PRE_PR_DIST\" type=\"STRING\" size=\"40\"/><Column id=\"REQR_ID\" type=\"STRING\" size=\"40\"/><Column id=\"REQR_NM\" type=\"STRING\" size=\"40\"/><Column id=\"PCHRGR_ID\" type=\"STRING\" size=\"40\"/><Column id=\"PCHRGR_NM\" type=\"STRING\" size=\"40\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdPR14", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdPR15", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompCond01", "absolute", "0", "35", null, "54", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.getSetter("objNm").set("");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            obj = new Static("staWarning", "absolute", "-1", "33", null, "19", "0", null, this.divViewCompCond01);
            obj.set_taborder("49");
            obj.set_text("- 검색조건 없이 검색 시 속도가 저하 될 수 있습니다.");
            obj.set_cssclass("sta_WF_SearchText");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtReqrId", "absolute", "130", "5", "121", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("61");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("10");
            obj.set_enable("false");
            obj.style.setStyleValue("color", "disabled", "black");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("objNm").set("요청자ID");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtReqrNm", "absolute", "254", "5", "176", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("62");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("요청자명");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Button("btnReqrSearch", "absolute", "430", "5", "24", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("64");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("구매요청자 검색 버튼");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staReqr", "absolute", "7", "5", "118", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("70");
            obj.set_text("요청자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("요청자");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staPchrgr", "absolute", "471", "5", "118", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("71");
            obj.set_text("구매담당자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("구매담당자");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtPchrgrId", "absolute", "594", "5", "121", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("72");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("10");
            obj.set_enable("false");
            obj.style.setStyleValue("color", "disabled", "black");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("objNm").set("구매담당자ID");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtPchrgrNm", "absolute", "718", "5", "176", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("73");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("구매담당자명");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Button("btnPchrgeSearch", "absolute", "894", "5", "24", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("74");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("구매요청자 검색 버튼");
            this.divViewCompCond01.addChild(obj.name, obj);

            obj = new Div("divViewCompBody00", "absolute", "0", "116", null, null, "15", "0", this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "9", this.divViewCompBody00);
            obj.getSetter("objNm").set("페이징");
            obj.set_scrollbars("none");
            obj.set_taborder("2");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnPrePrRcv", "absolute", null, "0", "87", "24", "0", null, this.divViewCompBody00);
            obj.set_taborder("3");
            obj.set_text("요청접수");
            obj.set_cssclass("btn_WF_Ssign");
            obj.getSetter("objNm").set("요청접수버튼");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0%", "32", null, null, "0%", "36", this.divViewCompBody00);
            obj.set_cssclass("grd_default");
            obj.set_taborder("4");
            obj.set_binddataset("dsList");
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
            obj.getSetter("f_version").set("20151023");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"300\"/><Column size=\"110\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"90\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"요청분류\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"요청명\"/><Cell col=\"4\" text=\"희망처리일자\"/><Cell col=\"5\" text=\"요청일자\"/><Cell col=\"6\" text=\"요청자\"/><Cell col=\"7\" text=\"처리일자\"/><Cell col=\"8\" text=\"처리자\"/><Cell col=\"9\" text=\"요청번호\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\"/><Cell col=\"1\" text=\"bind:CD_PRE_PR_DIST_NM\"/><Cell col=\"2\" text=\"bind:CD_PR_STTS_NM\"/><Cell col=\"3\" style=\"align:left;\" cssclass=\"cell_link\" text=\"bind:TTL\"/><Cell col=\"4\" displaytype=\"date\" text=\"bind:HOPE_REPLY_DAY\" mask=\"yyyy.MM.dd\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" displaytype=\"date\" text=\"bind:REQ_DT\" mask=\"yyyy.MM.dd\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"6\" cssclass=\"cell_link\" text=\"bind:REQR_NM\"/><Cell col=\"7\" displaytype=\"date\" text=\"bind:RTN_DT\" mask=\"yyyy.MM.dd\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"8\" cssclass=\"cell_link\" text=\"bind:PCHRGR_NM\"/><Cell col=\"9\" cssclass=\"cell_link\" text=\"bind:PR_NO\"/></Band></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Div("divViewCompCond00", "absolute", "0", "0", null, "36", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.style.set_align("center");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);
            obj = new Div("divReqDt", "absolute", "130", "6", "301", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.getSetter("objNm").set("요청일자");
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
            obj.getSetter("objNm").set("요청분류");
            obj = new Combo("cboPrCtgr", "absolute", "892", "6", "185", "24", null, null, this.divViewCompCond00);
            this.divViewCompCond00.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_innerdataset("@dsCdPR14");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("구매유형");
            obj = new Static("staReqDt", "absolute", "0", "5", "125", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("6");
            obj.set_text("요청일자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("요청일자");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staPrDist", "absolute", "476", "5", "118", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("7");
            obj.set_text("요청분류");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("요청분류");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staPrstts", "absolute", "774", "5", "118", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("8");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond00.addChild(obj.name, obj);

            obj = new Button("btnFold", "absolute", "45.66%", "89", "56", "17", null, null, this);
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
            obj = new Layout("default", "", 0, 54, this.divViewCompCond01,
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
            		p.set_titletext("사전요청접수현황");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","divViewCompCond00.cboPrStts","value","dsCondition","CD_PRE_PR_DIST");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","divViewCompCond01.edtReqrNm","value","dsCondition","REQR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","divViewCompCond01.edtReqrId","value","dsCondition","REQR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","divViewCompCond00.cboPrCtgr","value","dsCondition","CD_PR_STTS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divViewCompCond01.edtPchrgrId","value","dsCondition","PCHRGR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divViewCompCond01.edtPchrgrNm","value","dsCondition","PCHRGR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","divViewCompBody00.btnPrePrRcv","visible","dsObjBindVi","btnCntrAdd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","divViewCompBody00.btnPrePrRcv","enable","dsObjBindEn","btnCntrAdd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnRfqVi","divViewCompBody00.btnPrePrRcv","visible","dsObjBindVi","btnRfq");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnRfqEn","divViewCompBody00.btnPrePrRcv","enable","dsObjBindEn","btnRfq");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtReqrIdVi","divViewCompCond01.edtReqrId","visible","dsObjBindVi","edtReqrId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtReqrIdEn","divViewCompCond01.edtReqrId","readonly","dsObjBindEn","edtReqrId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtReqrNmVi","divViewCompCond01.edtReqrNm","visible","dsObjBindVi","edtReqrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtReqrNmEn","divViewCompCond01.edtReqrNm","readonly","dsObjBindEn","edtReqrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnReqrSearchVi","divViewCompCond01.btnReqrSearch","visible","dsObjBindVi","btnReqrSearch");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnReqrSearchEn","divViewCompCond01.btnReqrSearch","enable","dsObjBindEn","btnReqrSearch");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staReqrVi","divViewCompCond01.staReqr","visible","dsObjBindVi","staReqr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staReqrEn","divViewCompCond01.staReqr","enable","dsObjBindEn","staReqr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPchrgrVi","divViewCompCond01.staPchrgr","visible","dsObjBindVi","staPchrgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPchrgrEn","divViewCompCond01.staPchrgr","enable","dsObjBindEn","staPchrgr");
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
            obj = new BindItem("btnPchrgeSearchVi","divViewCompCond01.btnPchrgeSearch","visible","dsObjBindVi","btnPchrgeSearch");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnPchrgeSearchEn","divViewCompCond01.btnPchrgeSearch","enable","dsObjBindEn","btnPchrgeSearch");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPagingVi","divViewCompBody00.divPaging","visible","dsObjBindVi","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPagingEn","divViewCompBody00.divPaging","enable","dsObjBindEn","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnPrePrRcvVi","divViewCompBody00.btnPrePrRcv","visible","dsObjBindVi","btnPrePrRcv");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnPrePrRcvEn","divViewCompBody00.btnPrePrRcv","enable","dsObjBindEn","btnPrePrRcv");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divReqDtVi","divViewCompCond00.divReqDt","visible","dsObjBindVi","divReqDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divReqDtEn","divViewCompCond00.divReqDt","enable","dsObjBindEn","divReqDt");
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
            obj = new BindItem("staReqDtVi","divViewCompCond00.staReqDt","visible","dsObjBindVi","staReqDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staReqDtEn","divViewCompCond00.staReqDt","enable","dsObjBindEn","staReqDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPrDistVi","divViewCompCond00.staPrDist","visible","dsObjBindVi","staPrDist");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPrDistEn","divViewCompCond00.staPrDist","enable","dsObjBindEn","staPrDist");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPrsttsVi","divViewCompCond00.staPrstts","visible","dsObjBindVi","staPrstts");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPrsttsEn","divViewCompCond00.staPrstts","enable","dsObjBindEn","staPrstts");
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

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompCalFromTo.xfdl");
        };
        
        // User Script
        this.registerScript("BPrePrRcvList.xfdl", function(exports) {
        /**
         * @파일명			: BPrePrList
         * @생성자			: 배열
         * @생성일시		: 2019. 05. 22.
         * @설명			: 사전요청접수현황
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
         	gfnSetGrdFunc(this.divViewCompBody00.grdList, this.divViewCompBody00.divPaging, this,{isTran:"Y", tranNm:"BPrePrService.prePrRcvSrch", dsParam:this.dsCondition});
         	
         	//조회조건 Div 접기/펼치기 세팅
         	this.fnFold();
         		
        	//요청일자 셋팅
        	this.divViewCompCond00.divReqDt.fnSetDate(this.dsCondition, "PR_REQ_DT_START", "PR_REQ_DT_END");	
        	this.dsCondition.setColumn(0,"CD_PRE_PR_DIST","");
        	this.dsCondition.setColumn(0,"CD_PR_STTS","");
        	if(application.gdsUserRole.findRow("ROLE_ID","B_MANAGER")< 0 ){
        		this.dsCondition.setColumn(0,"PCHRGR_ID",application.gdsUserInfo.getColumn(0,"USER_ID"));
        		this.dsCondition.setColumn(0,"PCHRGR_NM",application.gdsUserInfo.getColumn(0,"USER_NM"));
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
        		
        	var sSvcID = "prePrRcvSrch";
        	var sController = "epro.pur.service.BPrePrService.prePrRcvSrch";
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
        		case "prePrRcvSrch" :
        		break;
        		case "savePreRcv" :
        			gfnAlert("접수처리 되었습니다.");
        			this.fnSearch();
        		break;
        				
        		default:
        		break;	
        	}
        }
         

         

        this.Edit_ontextchanged = function(obj,e)
        {
        	// 담당자 검색
        	if(obj.name == "edtPchrgrNm"){
        		gfnInitKey(this.dsCondition,e,"PCHRGR_ID");
        	
        	// 구매요청자 검색
        	}else if(obj.name == "edtReqrNm"){
        		gfnInitKey(this.dsCondition,e,"REQR_ID");
        	}
        }

        this.fnOnkeydownEvent = function(obj,e)
        {
        	//Enter 입력시
        	if(e.keycode == "13"){
        		obj.updateToDataset();
        		
        		if(obj.name == "edtPchrgrNm"){
        			this.fnPchrgeSearch();
        		
        		// 구매요청자 검색
        		}else if(obj.name == "edtReqrNm"){
        			this.fnReqrSearch();
        		}
        		
        		
        		
        	}	
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

        this.fnPrePrRcv = function(obj,e)
        {
        	var rtn = gfnGetChkRowString(this.dsList);	
        	if(!rtn) return false;
        		
        	this.dsList.set_enableevent(false);
        	this.dsList.filter("CHECKED==1");
        	for(var i = 0 ; i < this.dsList.rowcount; i++){
        		trace(this.dsList.getColumn(i,"CD_PR_STTS"));
        		if("PR14REQ" != this.dsList.getColumn(i,"CD_PR_STTS")){
        			gfnAlert("이미처리된 요청이 존재합니다./n상태를 확인해 주세요.");
        			this.dsList.filter("");
        			this.dsList.set_enableevent(true);
        			return false;
        		}
        	}
        	this.dsList.filter("");
        	this.dsList.set_enableevent(true);
        	
        	if(!gfnConfirm("접수처리를 하시겠습니까?")) return;
        	
        	var sSvcID = "savePreRcv";
        	var sController = "epro.pur.service.BPrePrService.savePreRcv";
        	var sInDatasets = "dsList=dsList";
        	var sOutDatasets = "";
        	var sCallbackFunc = "fnTrCallBack";
        	
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        this.div_body_grd_list_oncelldblclick = function(obj,e)
        {
        	if(gfnIsNull(this.dsList.getColumn(e.row,gfnGrdBindColId(obj, e.cell)))) return false;

        	if(gfnGrdBindColId(obj, e.cell)=="PR_NO")	//요청번호
        	{
        		gfnSetTmprData("PR_NO" ,this.dsList.getColumn(e.row, "PR_NO"));
        		gfnSetTmprData("CD_PR_STTS" ,this.dsList.getColumn(e.row, "CD_PR_STTS"));
        		gfnOpenMenuUrl("BPUR::BPrePrDetail");
        	}
        	 
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.FormOninit, this);
            this.addEventHandler("onload", this.FormOnload, this);
            this.divViewCompCond01.edtReqrNm.addEventHandler("ontextchanged", this.Edit_ontextchanged, this);
            this.divViewCompCond01.edtReqrNm.addEventHandler("onkeydown", this.fnOnkeydownEvent, this);
            this.divViewCompCond01.btnReqrSearch.addEventHandler("onclick", this.fnReqrSearch, this);
            this.divViewCompCond01.staReqr.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond01.staPchrgr.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond01.edtPchrgrNm.addEventHandler("ontextchanged", this.Edit_ontextchanged, this);
            this.divViewCompCond01.edtPchrgrNm.addEventHandler("onkeydown", this.fnOnkeydownEvent, this);
            this.divViewCompCond01.btnPchrgeSearch.addEventHandler("onclick", this.fnPchrgeSearch, this);
            this.divViewCompBody00.btnPrePrRcv.addEventHandler("onclick", this.fnPrePrRcv, this);
            this.divViewCompBody00.grdList.addEventHandler("oncelldblclick", this.div_body_grd_list_oncelldblclick, this);
            this.divViewCompCond00.staReqDt.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond00.staPrDist.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond00.staPrstts.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.btnFold.addEventHandler("onclick", this.btnFold_onclick, this);

        };

        this.loadIncludeScript("BPrePrRcvList.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
