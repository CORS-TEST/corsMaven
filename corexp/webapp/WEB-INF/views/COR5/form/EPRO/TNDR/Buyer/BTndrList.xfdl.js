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
                this.set_name("BTndrList");
                this.set_titletext("입찰진행현황");
                this._setFormPosition(0,0,1220,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCdCM10", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdET10", this);
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
            obj._setContents("<ColumnInfo><Column id=\"RFQ_REQ_NO\" size=\"20\" type=\"STRING\"/><Column id=\"RFQ_ODR\" size=\"256\" type=\"INT\"/><Column id=\"CD_RFQ_STTS\" size=\"40\" type=\"STRING\"/><Column id=\"CD_DOC_CTGR\" size=\"40\" type=\"STRING\"/><Column id=\"TTL\" size=\"100\" type=\"STRING\"/><Column id=\"RFQ_CLOSE_DAY\" size=\"8\" type=\"STRING\"/><Column id=\"RFQ_CLOSE_TIME\" size=\"6\" type=\"STRING\"/><Column id=\"GOALAMT\" size=\"15\" type=\"INT\"/><Column id=\"CHRGR_NM\" size=\"50\" type=\"STRING\"/><Column id=\"REQ_DT\" size=\"256\" type=\"DATE\"/><Column id=\"ITEM_CNT\" size=\"20\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"20\" type=\"STRING\"/><Column id=\"TNDR_NO\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCondition", this);
            obj._setContents("<ColumnInfo><Column id=\"PO_DAY_STR\" type=\"STRING\" size=\"256\"/><Column id=\"PO_DAY_END\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PO_STTS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DOC_CTGR\" type=\"STRING\" size=\"256\"/><Column id=\"PO_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TTL\" type=\"STRING\" size=\"256\"/><Column id=\"CHRGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHRGR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PTNR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PTNR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReturn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCount", this);
            obj._setContents("<ColumnInfo><Column id=\"TNDR_TOTAL\" type=\"STRING\" size=\"256\"/><Column id=\"TNDR_WRI\" type=\"STRING\" size=\"256\"/><Column id=\"TNDR_ING\" type=\"STRING\" size=\"256\"/><Column id=\"TNDR_ANI\" type=\"STRING\" size=\"256\"/><Column id=\"TNDR_APP\" type=\"STRING\" size=\"256\"/><Column id=\"TNDR_ANN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompCond01", "absolute", "0", "43", null, "84", "15", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBg");
            obj.getSetter("objNm").set("");
            this.addChild(obj.name, obj);
            obj = new Static("staWarning", "absolute", "0", "63", null, "19", "0", null, this.divViewCompCond01);
            obj.set_taborder("57");
            obj.set_text("- 검색조건 없이 검색 시 속도가 저하 될 수 있습니다.");
            obj.set_cssclass("sta_WF_SearchText");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staTndrReqDt", "absolute", "0", "5", "170", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("61");
            obj.set_text("입찰요청일자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("검색어-입찰요청일자");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staPoMtrl", "absolute", "721", "5", "118", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("62");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("검색어-품목");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staChrgrId", "absolute", "721", "34", "118", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("63");
            obj.set_text("입찰담당자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("검색어-입찰담당자");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divTndrReqDt", "absolute", "170", "5", "285", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("67");
            obj.set_text("Div01");
            obj.getSetter("objNm").set("검색조건-입찰요청일자");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staTndrEndDt", "absolute", "0", "34", "170", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("68");
            obj.set_text("입찰마감일자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("검색어-입찰마감일자");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divTndrEndDt", "absolute", "170", "34", "285", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("69");
            obj.set_text("Div01");
            obj.getSetter("objNm").set("검색조건-입찰마감일자");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staBgtNo", "absolute", "455", "5", "118", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("70");
            obj.set_text("예산번호");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("검색어-예산번호");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtTndrReqNo", "absolute", "573", "34", "173", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("71");
            obj.getSetter("objNm").set("입찰요청번호");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staTndrReqNo", "absolute", "403", "34", "170", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("72");
            obj.set_text("입찰요청번호");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("검색어-입찰요청번호");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtBgtNo", "absolute", "573", "5", "173", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("73");
            obj.getSetter("objNm").set("예산번호");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divMtrl", "absolute", "69.74%", "5", null, "24", "1.25%", null, this.divViewCompCond01);
            obj.set_taborder("74");
            obj.set_text("Div00");
            obj.getSetter("objNm").set("검색조건-품목");
            obj.set_url("CCOMP::ComSrchMtrl.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divTndrChrg", "absolute", "69.74%", "34", null, "24", "1.25%", null, this.divViewCompCond01);
            obj.set_taborder("75");
            obj.set_text("Div00");
            obj.getSetter("objNm").set("검색조건-입찰담당자");
            obj.set_url("CCOMP::ComSrchMtrl.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);

            obj = new Div("divViewCompBody00", "absolute", "0", "139", null, null, "15", "-54", this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "33", null, null, "0", "33", this.divViewCompBody00);
            obj.set_taborder("4");
            obj.set_binddataset("dsList");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"55\"/><Column size=\"61\"/><Column size=\"300\"/><Column size=\"86\"/><Column size=\"100\"/><Column size=\"99\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"56\"/><Column size=\"55\"/><Column size=\"52\"/><Column size=\"83\"/><Column size=\"90\"/><Column size=\"70\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\"/><Cell col=\"1\" text=\"구매유형\"/><Cell col=\"2\" text=\"입찰요청번호\"/><Cell col=\"3\" text=\"차수\"/><Cell col=\"4\" text=\"상태\"/><Cell col=\"5\" text=\"입찰요청명\"/><Cell col=\"6\" text=\"ROUND\"/><Cell col=\"7\" text=\"입찰종료일자\"/><Cell col=\"8\" text=\"시작시간\"/><Cell col=\"9\" text=\"종료시간\"/><Cell col=\"10\" text=\"구매목표가\"/><Cell col=\"11\" text=\"요청\"/><Cell col=\"12\" text=\"참여\"/><Cell col=\"13\" text=\"응찰\"/><Cell col=\"14\" text=\"요청일자\"/><Cell col=\"15\" text=\"담당자명\"/><Cell col=\"16\" text=\"입찰결과\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\"/><Cell col=\"1\" text=\"bind:CD_DOC_CTGR_NM\"/><Cell col=\"2\" cssclass=\"cell_link\" text=\"bind:TNDR_NO\"/><Cell col=\"3\" text=\"bind:TNDR_ODR\"/><Cell col=\"4\" text=\"bind:CD_TNDR_STTS_NM\"/><Cell col=\"5\" style=\"align:left;color:#004db7ff;color2:#004db7ff;selectcolor:#004db7ff;\" cssclass=\"cell_link\" text=\"bind:TTL\" expandshow=\"hide\" expandsize=\"0\"/><Cell col=\"6\" text=\"bind:ROUND_CNT\"/><Cell col=\"7\" displaytype=\"date\" text=\"bind:PRGRS_DAY\" mask=\"yyyy.MM.dd\" maskchar=\" \" calendardisplay=\"edit\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" text=\"bind:BGN_TIME\" mask=\"##:##\"/><Cell col=\"9\" text=\"bind:END_TIME\" mask=\"##:##\" maskchar=\"_\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:GOALAMT\" mask=\"#,##0.00\"/><Cell col=\"11\" cssclass=\"cell_link\" text=\"bind:TNDR_REQ\"/><Cell col=\"12\" cssclass=\"cell_link\" text=\"bind:TNDR_VIW\"/><Cell col=\"13\" cssclass=\"cell_link\" text=\"bind:TNDR_CLO\"/><Cell col=\"14\" text=\"bind:REQ_DT\"/><Cell col=\"15\" cssclass=\"cell_link\" text=\"bind:CHRGR_NM\"/><Cell col=\"16\" displaytype=\"button\" edittype=\"button\" text=\"보기\"/></Band></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "40", this.divViewCompBody00);
            obj.set_taborder("5");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("페이징");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnAccpet", "absolute", null, "5", "87", "24", "0", null, this.divViewCompBody00);
            obj.set_taborder("6");
            obj.set_text("재입찰작성");
            obj.set_cssclass("btn_WF_Ssign");
            obj.getSetter("objNm").set("참여신청버튼");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Button("btnFold", "absolute", "45.66%", "127", "56", "17", null, null, this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_Fold_Close");
            obj.getSetter("objNm").set("버튼-접고펼치기");
            this.addChild(obj.name, obj);

            obj = new Div("div_condition", "absolute", "0", "0", null, "43", "15", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);
            obj = new Static("staTtl", "absolute", "723", "10", "117", "24", null, null, this.div_condition);
            obj.set_taborder("51");
            obj.set_text("입찰요청명");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("objNm").set("검색어-입찰요청명");
            this.div_condition.addChild(obj.name, obj);
            obj = new Edit("edtTtl", "absolute", "840", "10", "200", "24", null, null, this.div_condition);
            obj.set_taborder("52");
            obj.getSetter("objNm").set("입찰요청명");
            this.div_condition.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label00", "absolute", "0", "10", "42", "24", null, null, this.div_condition);
            obj.set_taborder("53");
            obj.set_text("전체");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_color("green");
            obj.getSetter("lbcd").set("");
            this.div_condition.addChild(obj.name, obj);
            obj = new Button("btnTotal", "absolute", "64", "10", "44", "24", null, null, this.div_condition);
            obj.set_taborder("54");
            this.div_condition.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label01", "absolute", "108", "10", "55", "24", null, null, this.div_condition);
            obj.set_taborder("55");
            obj.set_text("작성중");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_color("green");
            obj.getSetter("lbcd").set("");
            this.div_condition.addChild(obj.name, obj);
            obj = new Button("btnWrt", "absolute", "185", "10", "44", "24", null, null, this.div_condition);
            obj.set_taborder("56");
            this.div_condition.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label02", "absolute", "229", "10", "55", "24", null, null, this.div_condition);
            obj.set_taborder("57");
            obj.set_text("진행중");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_color("green");
            obj.getSetter("lbcd").set("");
            this.div_condition.addChild(obj.name, obj);
            obj = new Button("btnIng", "absolute", "306", "10", "44", "24", null, null, this.div_condition);
            obj.set_taborder("58");
            this.div_condition.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label03", "absolute", "350", "10", "55", "24", null, null, this.div_condition);
            obj.set_taborder("59");
            obj.set_text("심사중");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_color("green");
            obj.getSetter("lbcd").set("");
            this.div_condition.addChild(obj.name, obj);
            obj = new Button("btnAni", "absolute", "427", "10", "44", "24", null, null, this.div_condition);
            obj.set_taborder("60");
            this.div_condition.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label05", "absolute", "471", "10", "55", "24", null, null, this.div_condition);
            obj.set_taborder("61");
            obj.set_text("품의중");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_color("green");
            obj.getSetter("lbcd").set("");
            this.div_condition.addChild(obj.name, obj);
            obj = new Button("btnApp", "absolute", "548", "10", "43", "24", null, null, this.div_condition);
            obj.set_taborder("62");
            this.div_condition.addChild(obj.name, obj);
            obj = new Button("btnAnn", "absolute", "680", "10", "43", "24", null, null, this.div_condition);
            obj.set_taborder("63");
            this.div_condition.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label06", "absolute", "591", "10", "67", "24", null, null, this.div_condition);
            obj.set_taborder("64");
            obj.set_text("입찰공고");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_color("green");
            obj.getSetter("lbcd").set("");
            this.div_condition.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer00", "absolute", "42", "10", "22", "24", null, null, this.div_condition);
            obj.set_taborder("65");
            obj.style.set_background("transparent URL('img::ico_Top01.png')");
            obj.style.set_border("0 solid #bdbdbdff");
            this.div_condition.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer01", "absolute", "163", "10", "22", "24", null, null, this.div_condition);
            obj.set_taborder("66");
            obj.style.set_background("transparent URL('img::ico_Top02.png')");
            obj.style.set_border("0 solid #bdbdbdff");
            this.div_condition.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer03", "absolute", "284", "10", "22", "24", null, null, this.div_condition);
            obj.set_taborder("67");
            obj.style.set_background("transparent URL('img::ico_Top04.png')");
            obj.style.set_border("0 solid #bdbdbdff");
            this.div_condition.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer02", "absolute", "405", "10", "22", "24", null, null, this.div_condition);
            obj.set_taborder("68");
            obj.style.set_background("transparent URL('img::ico_Top04.png')");
            obj.style.set_border("0 solid #bdbdbdff");
            this.div_condition.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer04", "absolute", "526", "10", "22", "24", null, null, this.div_condition);
            obj.set_taborder("69");
            obj.style.set_background("transparent URL('img::ico_Top03.png')");
            obj.style.set_border("0 solid #bdbdbdff");
            this.div_condition.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer05", "absolute", "658", "10", "22", "24", null, null, this.div_condition);
            obj.set_taborder("70");
            obj.style.set_background("transparent URL('img::ico_Top04.png')");
            obj.style.set_border("0 solid #bdbdbdff");
            this.div_condition.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 84, this.divViewCompCond01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_cssclass("div_WF_SearchBg");
            		p.getSetter("objNm").set("");

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
            obj = new Layout("default", "", 0, 43, this.div_condition,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.set_cssclass("div_WF_SearchBg");

            	}
            );
            this.div_condition.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1220, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("입찰진행현황");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("staTndrReqDtVi","divViewCompCond01.staTndrReqDt","visible","dsObjBindVi","staTndrReqDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTndrReqDtEn","divViewCompCond01.staTndrReqDt","enable","dsObjBindEn","staTndrReqDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoMtrlVi","divViewCompCond01.staPoMtrl","visible","dsObjBindVi","staPoMtrl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoMtrlEn","divViewCompCond01.staPoMtrl","enable","dsObjBindEn","staPoMtrl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staChrgrIdVi","divViewCompCond01.staChrgrId","visible","dsObjBindVi","staChrgrId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staChrgrIdEn","divViewCompCond01.staChrgrId","enable","dsObjBindEn","staChrgrId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divTndrVi","divViewCompCond01.divTndrReqDt","visible","dsObjBindVi","divTndr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divTndrEn","divViewCompCond01.divTndrReqDt","enable","dsObjBindEn","divTndr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTndrEndDtVi","divViewCompCond01.staTndrEndDt","visible","dsObjBindVi","staTndrEndDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTndrEndDtEn","divViewCompCond01.staTndrEndDt","enable","dsObjBindEn","staTndrEndDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divCrtDt00Vi","divViewCompCond01.divTndrEndDt","visible","dsObjBindVi","divCrtDt00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divCrtDt00En","divViewCompCond01.divTndrEndDt","enable","dsObjBindEn","divCrtDt00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoMtrl00Vi","divViewCompCond01.staBgtNo","visible","dsObjBindVi","staPoMtrl00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoMtrl00En","divViewCompCond01.staBgtNo","enable","dsObjBindEn","staPoMtrl00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTndrNoVi","divViewCompCond01.edtTndrReqNo","visible","dsObjBindVi","edtTndrNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTndrNoEn","divViewCompCond01.edtTndrReqNo","readonly","dsObjBindEn","edtTndrNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTndrReqNumVi","divViewCompCond01.staTndrReqNo","visible","dsObjBindVi","staTndrReqNum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTndrReqNumEn","divViewCompCond01.staTndrReqNo","enable","dsObjBindEn","staTndrReqNum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTndrNo00Vi","divViewCompCond01.edtBgtNo","visible","dsObjBindVi","edtTndrNo00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTndrNo00En","divViewCompCond01.edtBgtNo","readonly","dsObjBindEn","edtTndrNo00");
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
            obj = new BindItem("item8","div_condition.edtTtl","value","dsCount","TTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","div_condition.btnTotal","text","dsCount","TNDR_TOTAL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","div_condition.btnWrt","text","dsCount","TNDR_WRI");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","div_condition.btnIng","text","dsCount","TNDR_ING");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","div_condition.btnAni","text","dsCount","TNDR_ANI");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","div_condition.btnApp","text","dsCount","TNDR_APP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","div_condition.btnAnn","text","dsCount","TNDR_ANN");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompCalFromTo.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompCalFromTo.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComSrchMtrl.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComSrchMtrl.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
        };
        
        // User Script
        this.registerScript("BTndrList.xfdl", function(exports) {
        /**
         * @파일명			: BTndrList
         * @생성자			: 김승일
         * @생성일시		: 2019. 05. 09
         * @설명			: 경쟁입찰현황
         * @최종수정자		: 김승일
         * @최종수정일시	: 2019. 05. 09
        */  

        
        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {
        	var param = [
        					   {code:"CM10", sSelectType:"A"}
        					 , {code:"ET20", sSelectType:"A"}
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
         	gfnSetGrdFunc(this.divViewCompBody00.grdList, this.divViewCompBody00.divPaging, this,{isTran:"Y", tranNm:"BTndrService.tndrGoSrch", dsParam:this.dsCondition});
         	//조회조건 Div 접기/펼치기 세팅
         	this.fnFold();
         	
        	this.dsCondition.addRow();
        	this.dsCondition.setColumn(0,"CD_DOC_CTGR", application.gdsUserInfo.getColumn(0,"CD_DOC_CTGR"));
        	this.dsCondition.setColumn(0,"CD_PO_STTS","");
        	this.dsCondition.setColumn(0,"CD_DOC_CTGR","");
        	this.dsCondition.setColumn(0,"PO_DAY_STR",gfnAddMonth(gfnToday(), -1));
         	this.dsCondition.setColumn(0,"PO_DAY_END",gfnToday());
         	
         	this.divViewCompCond01.divMtrl.fnSet(this.dsCondition		, "MTRL_CD", "MTRL_NM");		
        	//this.divViewCompCond00.divReqDt.fnSetDate(this.dsCondition	, "SRCH_REQ_DAY_STR", "SRCH_REQ_DAY_END");	

         	//this.dsCondition.setColumn(0,"CHRGR_ID",application.gdsUserInfo.getColumn(0,"USER_ID"));
         	//this.dsCondition.setColumn(0,"CHRGR_NM",application.gdsUserInfo.getColumn(0,"USER_NM"));

        	this.fnSearch();
        }

        /**
        	@function   fn_preSearch()
        	@desc       조회 전 처리
        */
        this.fn_preSearchHeader = function()
        {
        	this.dsCondition.setColumn(0,"BRANCH_CD", application.gdsUserInfo.getColumn(0,"BRANCH_CD"));
        	this.dsCondition.setColumn(0,"WRTR_ID", application.gdsUserInfo.getColumn(0,"USER_ID"));
        	return true;
        }

        /**
        	@function   fn_commSrch()
        	@desc       조회 프로세스
        */	
        this.fnCommSrchHeader = function()
        {
        	if(!this.fn_preSearchHeader()) return false;

        // 	var sSvcID = "searchHeader";
        // 	var sController = "BTndr_GoHeaderSrch.do";
        // 	var sInDatasets = "in_ds=ds_condition";
        // 	var sOutDatasets = "ds_count=ds_headerSrch";
        // 	var sCallbackFunc = "fn_trCallBack";
        // 	    
        //     this.gfn_fileTran(sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);

        	var sSvcID = "searchHeader";
        	var sController = "epro.tndr.service.BTndrService.tndrGoHeaderSrch";
        	var sInDatasets = "dsCondition=dsCondition";
        	var sOutDatasets = "dsCount=ds";
        	var sCallbackFunc = "fnTrCallBack";
        	
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
          * @함수명	: fnPreSearch
          * @desc     	: 조회 전 처리
          */
        this.fnPreSearch = function()
        {
        	this.fnCommSrchHeader();
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
        	var sController = "epro.tndr.service.BTndrService.tndrGoSrch";
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
        		case "search" :
        		break;
        				
        		case "update" :
        			
        		break;
        		
        		default:
        		break;	
        	}
        }

        
        this.grdListOnCelldblclick = function(obj,e)
        {
        	if(gfnIsNull(this.dsList.getColumn(e.row,gfnGrdBindColId(obj, e.cell)))) return false;

        	if(gfnGrdBindColId(obj, e.cell)=="TNDR_NO" || gfnGrdBindColId(obj, e.cell)=="TTL")	//입찰번호
        	{
        		gfnSetTmprData("CD_TNDR_STTS", this.dsList.getColumn(e.row, "CD_TNDR_STTS"));
        		gfnSetTmprData("TNDR_NO" ,this.dsList.getColumn(e.row, "TNDR_NO"));
        		gfnSetTmprData("TNDR_ODR" ,this.dsList.getColumn(e.row, "TNDR_ODR"));
        		gfnOpenMenuUrl("BTNDR::BTndrDetail");//경쟁입찰 상세로 이동
        	}else if(gfnGrdBindColId(obj, e.cell) == "CHRGR_NM"){//담당자명
        		var sArg = {	 branchCd : application.gdsUserInfo.getColumn(0, "BRANCH_CD")
        						,  agv_id : this.dsList.getColumn(e.row, "CHRGR_ID")
        					};
        		gfnModalPop(this, "PopupUserInfo", "CPOP::BUserInfoPopup.xfdl", sArg, "fnPopCallBack", 500, 300);
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
          	@function	 fnPtnrSearch()
          	@desc  		 협력사팝업
         */
        this.fnPtnrSearch = function(obj,e)
        {
        	var sArg = { 
        			agv_id:this.dsCondition.getColumn(0,"PTNR_ID")
        			,agv_nm:this.dsCondition.getColumn(0,"PTNR_NM")
        	   }; 
        	gfnSearchComPtnr(this, "BPtnrSrchPopup", "fnPopCallBack", sArg);
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
        		case "PopupUserInfo":
        		break;
        		default:
        			break;	
        	}
        }

        

        
        this.fnReTndr = function(obj,e)
        {
        	//선택된 아이템의 유무를 리턴한다.
        	if(!this.gfn_isGrdChk(this.ds_tndr)){
        		this.gfn_alert("선택된 아이템이 존재하지 않습니다."); 
        		return;
        	}
        }

        //그리드 셀 클릭 이벤트
        this.grdListOnCellClick = function(obj,e)
        {
        	if(this.dsList.rowcount == 0) return;
        	var bindCol = obj.getCellProperty("Body",e.cell,"text");
        	var bindColRow = obj.getCellProperty("Head", e.cell, "text");
        	
        	//입찰결과 확인 팝업
        	if(bindCol=="보기") {
        		//this.gfnModalPop();
        		if("ET20ANI" == this.dsList.getColumn(e.row,"CD_TNDR_STTS")){
        			var sArg = { 
        					agv_id:this.dsList.getColumn(e.row,"TNDR_NO") 
        					,agv_branch_cd:this.dsList.getColumn(e.row,"BRANCH_CD") 
        					,agv_tndr_odr:this.dsList.getColumn(e.row,"TNDR_ODR") 
        					};
        			gfnModalPop(this, "PopupEndTndr", "BTNDR::BTndrRsltPopUp.xfdl", sArg, "fnPopCallBack", 1000, 800);
        		}else{
        			gfnAlert("입찰결과는 심사중일때만  확인이 가능합니다.");
        			return;
        		}
        	}//업체 접수 및 응찰현황 팝업
        	if(bindColRow=="요청"||bindColRow=="참여"||bindColRow=="응찰") {
        		var sArg = { 
        					agv_id:this.dsList.getColumn(e.row,"TNDR_NO") 
        					,agv_branch_cd:this.dsList.getColumn(e.row,"BRANCH_CD") 
        					,agv_tndr_odr:this.dsList.getColumn(e.row,"TNDR_ODR") 
        					};
        		gfnModalPop(this, "PopupTndrPrgList", "BTNDR::BPtnrTndrPrgListPopup.xfdl", sArg, "fnPopCallBack", 800, 400);
        	}
        }

        //재입찰작성버튼 클릭
        this.btnReTndr = function(obj,e)
        {
        	//선택된 아이템의 유무를 리턴한다.
        	if(!gfnGetChkRowString(this.dsList)){
        		gfnAlert('선택된 아이템이 존재하지 않습니다.');
        		return;
        	}
        	
        	var fv_tndrNo = this.dsList.getColumn(this.dsList.rowposition,"TNDR_NO");
        	var fv_tndrOdr =  this.dsList.getColumn(this.dsList.rowposition,"TNDR_ODR")+1;	

        	if(!gfnConfirm("재입찰작성 하시겠습니까?")) return;

        // 	var sSvcID = "BTndr_EndTndrUpd";
        // 	var sController = "BTndr_EndTndrUpd.do";
        // 	var sInDatasets = "dsList=dsList:U";
        // 	var sOutDatasets = "ds_tndr=in_tndr";
        // 	var sCallbackFunc = "fn_trCallBack";
        	
        	var sSvcID = "update";
        	var sController = "epro.tndr.service.BTndrService.tndrEndTndrUpd";
        	var sInDatasets = "dsList=dsList:U";
        	var sOutDatasets = "dsList=dsList";
        	var sCallbackFunc = "fnTrCallBack";
        	
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.FormOninit, this);
            this.addEventHandler("onload", this.FormOnload, this);
            this.divViewCompCond01.staTndrReqDt.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond01.staPoMtrl.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond01.staChrgrId.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond01.staTndrEndDt.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond01.staBgtNo.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond01.edtTndrReqNo.addEventHandler("onkeydown", this.fnKeydown, this);
            this.divViewCompCond01.staTndrReqNo.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond01.edtBgtNo.addEventHandler("onkeydown", this.fnKeydown, this);
            this.divViewCompBody00.grdList.addEventHandler("oncellclick", this.grdListOnCellClick, this);
            this.divViewCompBody00.grdList.addEventHandler("oncelldblclick", this.grdListOnCelldblclick, this);
            this.divViewCompBody00.btnAccpet.addEventHandler("onclick", this.btnReTndr, this);
            this.btnFold.addEventHandler("onclick", this.btnFold_onclick, this);
            this.div_condition.staTtl.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.div_condition.edtTtl.addEventHandler("onkeydown", this.fn_onkeydown_event, this);
            this.div_condition.sta_WFDA_Label00.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.div_condition.btnTotal.addEventHandler("onclick", this.div_condition_btn_total_onclick, this);
            this.div_condition.sta_WFDA_Label01.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.div_condition.btnWrt.addEventHandler("onclick", this.div_condition_btn_wrt_onclick, this);
            this.div_condition.sta_WFDA_Label02.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.div_condition.btnIng.addEventHandler("onclick", this.div_condition_btn_ing_onclick, this);
            this.div_condition.sta_WFDA_Label03.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.div_condition.btnAni.addEventHandler("onclick", this.div_condition_btn_ani_onclick, this);
            this.div_condition.sta_WFDA_Label05.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.div_condition.btnApp.addEventHandler("onclick", this.div_condition_btn_app_onclick, this);
            this.div_condition.btnAnn.addEventHandler("onclick", this.div_condition_btn_ann_onclick, this);
            this.div_condition.sta_WFDA_Label06.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);

        };

        this.loadIncludeScript("BTndrList.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
