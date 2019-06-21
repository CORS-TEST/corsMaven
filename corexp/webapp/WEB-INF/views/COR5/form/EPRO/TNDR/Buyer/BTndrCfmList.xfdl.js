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
                this.set_name("BTndrCfmList");
                this.set_titletext("입찰완료현황");
                this._setFormPosition(0,0,1220,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCdET20", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReturn", this);
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

            obj = new Dataset("dsCdCM10", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCondition", this);
            obj._setContents("<ColumnInfo><Column id=\"TNDR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TNDR_STTS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PO_STTS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DOC_CTGR\" type=\"STRING\" size=\"256\"/><Column id=\"PO_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IM_ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TTL\" type=\"STRING\" size=\"256\"/><Column id=\"CHRGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"STR_PRGRS_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"END_PRGRS_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"END_REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"STR_REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTndr", this);
            obj._setContents("<ColumnInfo><Column id=\"CHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"TNDR_REQ\" type=\"int\" size=\"22\"/><Column id=\"CHRGR_ID\" type=\"string\" size=\"50\"/><Column id=\"GOALAMT\" type=\"int\" size=\"22\"/><Column id=\"TNDR\" type=\"string\" size=\"20\"/><Column id=\"TTL\" type=\"string\" size=\"600\"/><Column id=\"BGN_TIME\" type=\"string\" size=\"6\"/><Column id=\"PRGRS_ROUND\" type=\"int\" size=\"22\"/><Column id=\"TNDR_NO\" type=\"string\" size=\"20\"/><Column id=\"CD_DOC_CTGR_NM\" type=\"string\" size=\"40\"/><Column id=\"CD_DOC_CTGR\" type=\"string\" size=\"40\"/><Column id=\"TNDR_CLO\" type=\"int\" size=\"22\"/><Column id=\"CD_TNDR_STTS_NM\" type=\"string\" size=\"40\"/><Column id=\"CD_TNDR_STTS\" type=\"string\" size=\"40\"/><Column id=\"PRGRS_DAY\" type=\"string\" size=\"8\"/><Column id=\"REQ_DT\" type=\"string\" size=\"7\"/><Column id=\"CHRGR_NM\" type=\"string\" size=\"30\"/><Column id=\"END_TIME\" type=\"string\" size=\"6\"/><Column id=\"TNDR_VIW\" type=\"int\" size=\"22\"/><Column id=\"TNDR_ODR\" type=\"STRING\" size=\"256\"/><Column id=\"COREXP_KIDS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompCond01", "absolute", "0", "33", null, "84", "15", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBg");
            obj.getSetter("objNm").set("");
            this.addChild(obj.name, obj);
            obj = new Static("staWarning", "absolute", "0", "63", null, "19", "0", null, this.divViewCompCond01);
            obj.set_taborder("57");
            obj.set_text("- 검색조건 없이 검색 시 속도가 저하 될 수 있습니다.");
            obj.set_cssclass("sta_WF_SearchText");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtMtrlCd", "absolute", "839", "5", "121", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("58");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("10");
            obj.set_enable("false");
            obj.style.setStyleValue("color", "disabled", "black");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("objNm").set("품목코드");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtMtrlNm", "absolute", "965", "5", "214", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("59");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("품목명");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Button("btnMtrl", "absolute", "1179", "5", "24", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("60");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("품목검색 버튼");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staTndrReqDt", "absolute", "0", "5", "170", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("61");
            obj.set_text("입찰요청일자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staPoMtrl", "absolute", "721", "5", "118", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("62");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staChrgrId", "absolute", "454", "34", "118", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("63");
            obj.set_text("입찰담당자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtChrgrId", "absolute", "572", "34", "121", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("64");
            obj.set_enable("false");
            obj.style.setStyleValue("color", "disabled", "black");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("objNm").set("입찰담당자ID");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtChrgrNm", "absolute", "698", "34", "214", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("65");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("입찰담당자명");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Button("btnChrgr", "absolute", "912", "34", "24", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("66");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("발주담당자 검색 버튼");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divTndr", "absolute", "170", "5", "285", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("67");
            obj.set_text("Div01");
            obj.getSetter("objNm").set("발주작성일자");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staTndrEndDt", "absolute", "0", "34", "170", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("68");
            obj.set_text("입찰마감일자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divCrtDt00", "absolute", "170", "34", "285", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("69");
            obj.set_text("Div01");
            obj.getSetter("objNm").set("입찰마감일자");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staTndrReqNm", "absolute", "455", "5", "118", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("70");
            obj.set_text("입찰요청명");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtTndrReqNm", "absolute", "573", "5", "173", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("71");
            obj.getSetter("objNm").set("입찰요청명");
            this.divViewCompCond01.addChild(obj.name, obj);

            obj = new Div("divViewCompBody00", "absolute", "0", "176", null, null, "15", "-12", this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "40", this.divViewCompBody00);
            obj.set_taborder("4");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("페이징");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0%", "10", null, null, "0%", "36", this.divViewCompBody00);
            obj.set_cssclass("grd_default");
            obj.set_taborder("5");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"120\"/><Column size=\"55\"/><Column size=\"90\"/><Column size=\"300\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"구매유형\"/><Cell col=\"1\" text=\"입찰요청번호\"/><Cell col=\"2\" text=\"차수\"/><Cell col=\"3\" text=\"입찰결과\"/><Cell col=\"4\" text=\"입찰요청명\"/><Cell col=\"5\" text=\"ROUND\"/><Cell col=\"6\" text=\"입찰종료일자\"/><Cell col=\"7\" text=\"종료시간\"/><Cell col=\"8\" text=\"구매목표가\"/><Cell col=\"9\" text=\"담당자명\"/><Cell col=\"10\" text=\"입찰결과\"/></Band><Band id=\"body\"><Cell text=\"bind:CD_DOC_CTGR_NM\"/><Cell col=\"1\" cssclass=\"cell_link\" text=\"bind:TNDR_NO\"/><Cell col=\"2\" text=\"bind:TNDR_ODR\"/><Cell col=\"3\" text=\"bind:CD_TNDR_STTS_NM\"/><Cell col=\"4\" style=\"align:left;\" cssclass=\"cell_link\" text=\"bind:TTL\"/><Cell col=\"5\" text=\"bind:PRGRS_ROUND\"/><Cell col=\"6\" displaytype=\"date\" text=\"bind:PRGRS_DAY\" mask=\"yyyy.MM.dd\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" text=\"bind:END_TIME\" mask=\"##:##\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:GOALAMT\" mask=\"#,##0.00\"/><Cell col=\"9\" cssclass=\"cell_link\" text=\"bind:CHRGR_NM\"/><Cell col=\"10\" displaytype=\"button\" edittype=\"button\" text=\"보기\"/></Band></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Button("btnFold", "absolute", "45.7%", "115", "56", "17", null, null, this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_Fold_Close");
            this.addChild(obj.name, obj);

            obj = new Div("div_1", "absolute", "0", "0", null, "34", "15", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_SearchBg");
            obj.getSetter("objNm").set("DIV-입찰 진행 상세 ");
            this.addChild(obj.name, obj);
            obj = new Combo("cboDocType", "absolute", "573", "6", "173", "21", null, null, this.div_1);
            this.div_1.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_innerdataset("dsCdET20");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_cssclass("cbo_default_r");
            obj.getSetter("objNm").set("입찰상태");
            obj = new Static("staTndrReqNo", "absolute", "0", "5", "170", "24", null, null, this.div_1);
            obj.set_taborder("12");
            obj.set_text("입찰요청번호");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.div_1.addChild(obj.name, obj);
            obj = new Edit("edtTndrNo", "absolute", "170", "5", "173", "24", null, null, this.div_1);
            obj.set_taborder("13");
            obj.getSetter("objNm").set("입찰요청번호");
            this.div_1.addChild(obj.name, obj);
            obj = new Static("staTndrStat", "absolute", "403", "5", "170", "24", null, null, this.div_1);
            obj.set_taborder("14");
            obj.set_text("입찰상태");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.div_1.addChild(obj.name, obj);
            obj = new Static("staPrType", "absolute", "669", "5", "170", "24", null, null, this.div_1);
            obj.set_taborder("15");
            obj.set_text("구매유형");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.div_1.addChild(obj.name, obj);
            obj = new Combo("cboDocType00", "absolute", "839", "6", "173", "21", null, null, this.div_1);
            this.div_1.addChild(obj.name, obj);
            obj.set_taborder("16");
            obj.set_readonly("true");
            obj.set_innerdataset("dsCdCM10");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_cssclass("cbo_default_r");
            obj.getSetter("objNm").set("구매유형");


            
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
            obj = new Layout("default", "", 0, 34, this.div_1,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.set_cssclass("div_WF_SearchBg");
            		p.getSetter("objNm").set("DIV-입찰 진행 상세 ");

            	}
            );
            this.div_1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1220, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("입찰완료현황");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item6","divViewCompCond01.edtMtrlNm","value","dsCondition","MTRL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","divViewCompCond01.edtMtrlCd","value","dsCondition","MTRL_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divViewCompCond01.edtChrgrId","value","dsCondition","CHRGR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","divViewCompCond01.edtChrgrNm","value","dsCondition","CHRGR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtMtrlCdVi","divViewCompCond01.edtMtrlCd","visible","dsObjBindVi","edtMtrlCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtMtrlCdEn","divViewCompCond01.edtMtrlCd","readonly","dsObjBindEn","edtMtrlCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtMtrlNmVi","divViewCompCond01.edtMtrlNm","visible","dsObjBindVi","edtMtrlNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtMtrlNmEn","divViewCompCond01.edtMtrlNm","readonly","dsObjBindEn","edtMtrlNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnMtrlVi","divViewCompCond01.btnMtrl","visible","dsObjBindVi","btnMtrl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnMtrlEn","divViewCompCond01.btnMtrl","enable","dsObjBindEn","btnMtrl");
            this.addChild(obj.name, obj);
            obj.bind();
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
            obj = new BindItem("edtChrgrIdVi","divViewCompCond01.edtChrgrId","visible","dsObjBindVi","edtChrgrId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtChrgrIdEn","divViewCompCond01.edtChrgrId","readonly","dsObjBindEn","edtChrgrId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtChrgrNmVi","divViewCompCond01.edtChrgrNm","visible","dsObjBindVi","edtChrgrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtChrgrNmEn","divViewCompCond01.edtChrgrNm","readonly","dsObjBindEn","edtChrgrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnChrgrVi","divViewCompCond01.btnChrgr","visible","dsObjBindVi","btnChrgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnChrgrEn","divViewCompCond01.btnChrgr","enable","dsObjBindEn","btnChrgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divTndrVi","divViewCompCond01.divTndr","visible","dsObjBindVi","divTndr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divTndrEn","divViewCompCond01.divTndr","enable","dsObjBindEn","divTndr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTndrEndDtVi","divViewCompCond01.staTndrEndDt","visible","dsObjBindVi","staTndrEndDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTndrEndDtEn","divViewCompCond01.staTndrEndDt","enable","dsObjBindEn","staTndrEndDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divCrtDt00Vi","divViewCompCond01.divCrtDt00","visible","dsObjBindVi","divCrtDt00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divCrtDt00En","divViewCompCond01.divCrtDt00","enable","dsObjBindEn","divCrtDt00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTndrReqNmVi","divViewCompCond01.staTndrReqNm","visible","dsObjBindVi","staTndrReqNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTndrReqNmEn","divViewCompCond01.staTndrReqNm","enable","dsObjBindEn","staTndrReqNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTndrReqNmVi","divViewCompCond01.edtTndrReqNm","visible","dsObjBindVi","edtTndrReqNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTndrReqNmEn","divViewCompCond01.edtTndrReqNm","readonly","dsObjBindEn","edtTndrReqNm");
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
            obj = new BindItem("div_1Vi","div_1","visible","dsObjBindVi","div_1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_1En","div_1","enable","dsObjBindEn","div_1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboDocTypeVi","div_1.cboDocType","visible","dsObjBindVi","cboDocType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboDocTypeEn","div_1.cboDocType","readonly","dsObjBindEn","cboDocType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTndrReqNoVi","div_1.staTndrReqNo","visible","dsObjBindVi","staTndrReqNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTndrReqNoEn","div_1.staTndrReqNo","enable","dsObjBindEn","staTndrReqNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTndrNoVi","div_1.edtTndrNo","visible","dsObjBindVi","edtTndrNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTndrNoEn","div_1.edtTndrNo","readonly","dsObjBindEn","edtTndrNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTndrStatVi","div_1.staTndrStat","visible","dsObjBindVi","staTndrStat");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTndrStatEn","div_1.staTndrStat","enable","dsObjBindEn","staTndrStat");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPrTypeVi","div_1.staPrType","visible","dsObjBindVi","staPrType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPrTypeEn","div_1.staPrType","enable","dsObjBindEn","staPrType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboDocType00Vi","div_1.cboDocType00","visible","dsObjBindVi","cboDocType00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboDocType00En","div_1.cboDocType00","readonly","dsObjBindEn","cboDocType00");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompCalFromTo.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompCalFromTo.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
        };
        
        // User Script
        this.registerScript("BTndrCfmList.xfdl", function(exports) {
        /**
         * @파일명			: BTndrCfmList
         * @생성자			: 김승일
         * @생성일시		: 2019. 05. 17
         * @설명			: 경쟁입찰완료현황
         * @최종수정자		: 
         * @최종수정일시	: 
        */  

        
        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {
        	var param = [
        					 {code:"ET10", sSelectType:"A"}
        					 , {code:"ET20", sSelectType:"A"}
        					 , {code:"CM10", sSelectType:"A"}
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
         	gfnSetGrdFunc(this.divViewCompBody00.grdList, this.divViewCompBody00.divPaging, this,{isTran:"Y", tranNm:"BTndrService.tndrEndSrch", dsParam:this.dsCondition});
         	//조회조건 Div 접기/펼치기 세팅
         	this.fnFold();

        	this.dsCondition.addRow();
        	this.dsCondition.setColumn(0, "BRANCH_CD", application.gdsUserInfo.getColumn(0, "BRANCH_CD"));
        	this.dsCondition.setColumn(0,"CD_DOC_CTGR", application.gdsUserInfo.getColumn(0,"CD_DOC_CTGR"));
        	this.dsCondition.setColumn(0,"CD_PO_STTS","");
        	this.dsCondition.setColumn(0,"CD_DOC_CTGR","");
        	this.dsCondition.setColumn(0,"PO_DAY_STR",gfnAddMonth(gfnToday(), -1));
         	this.dsCondition.setColumn(0,"PO_DAY_END",gfnToday());

         	//this.dsCondition.setColumn(0,"CHRGR_ID",application.gdsUserInfo.getColumn(0,"USER_ID"));
         	//this.dsCondition.setColumn(0,"CHRGR_NM",application.gdsUserInfo.getColumn(0,"USER_NM"));

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
        	var sController = "epro.tndr.service.BTndrService.tndrEndSrch";
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
        				
        		default:
        		break;	
        	}
        }

        
        this.grdListOnCelldblclick = function(obj,e)
        {
        	if(gfnIsNull(this.dsList.getColumn(e.row,gfnGrdBindColId(obj, e.cell)))) return false;

        	if(gfnGrdBindColId(obj, e.cell)=="TNDR_NO" || gfnGrdBindColId(obj, e.cell)=="TTL")	//입찰번호
        	{
        		gfnSetTmprData("TNDR_NO" ,this.dsList.getColumn(e.row, "TNDR_NO"));
        		gfnSetTmprData("TNDR_ODR" ,this.dsList.getColumn(e.row, "TNDR_ODR"));
        		gfnOpenMenuUrl("BTNDR::BTndrDetail");
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

        
        //그리드 셀 더블클릭 이벤트
        this.div_body_grd_list_oncelldblclick = function(obj,e)
        {
        	if(gfnIsNull(this.dsList.getColumn(e.row,gfnGrdBindColId(obj, e.cell)))) return false;

        	if(gfnGrdBindColId(obj, e.cell)=="TNDR_NO" || gfnGrdBindColId(obj, e.cell)=="TTL")	//입찰번호
        	{
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

        //그리드 셀 클릭 이벤트
        this.div_body_grd_list_oncellclick = function(obj,e)
        {
        	if(this.dsList.rowcount == 0) return;
        	var bindCol = obj.getCellProperty("Body",e.cell,"text");
        	var bindColRow = obj.getCellProperty("Head", e.cell, "text");
        	
        	//입찰결과 확인 팝업
        	if(bindCol=="보기"){		
        		var sArg = { 
        				agv_id:this.dsList.getColumn(e.row,"TNDR_NO") 
        				,agv_branch_cd:this.dsList.getColumn(e.row,"BRANCH_CD") 
        				,agv_tndr_odr:this.dsList.getColumn(e.row,"TNDR_ODR")
        				,endTndr:'Y'
        				};
        		gfnModalPop(this, "PopupEndTndr", "BTNDR::BTndrRsltPopUp.xfdl", sArg, "fnPopCallBack", 1000, 800);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.FormOninit, this);
            this.addEventHandler("onload", this.FormOnload, this);
            this.divViewCompCond01.edtMtrlNm.addEventHandler("onkeydown", this.fnKeydown, this);
            this.divViewCompCond01.edtMtrlNm.addEventHandler("ontextchanged", this.fn_ontextchanged_event, this);
            this.divViewCompCond01.btnMtrl.addEventHandler("onclick", this.fnMtrlSearch, this);
            this.divViewCompCond01.staTndrReqDt.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond01.staPoMtrl.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond01.staChrgrId.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond01.edtChrgrNm.addEventHandler("onkeydown", this.fnKeydown, this);
            this.divViewCompCond01.edtChrgrNm.addEventHandler("ontextchanged", this.fn_ontextchanged_event, this);
            this.divViewCompCond01.btnChrgr.addEventHandler("onclick", this.fnUserSearch, this);
            this.divViewCompCond01.staTndrEndDt.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond01.staTndrReqNm.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond01.edtTndrReqNm.addEventHandler("onkeydown", this.fnKeydown, this);
            this.divViewCompBody00.grdList.addEventHandler("oncellclick", this.div_body_grd_list_oncellclick, this);
            this.divViewCompBody00.grdList.addEventHandler("oncelldblclick", this.div_body_grd_list_oncelldblclick, this);
            this.btnFold.addEventHandler("onclick", this.btnFold_onclick, this);
            this.div_1.staTndrReqNo.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.div_1.edtTndrNo.addEventHandler("onkeydown", this.fnKeydown, this);
            this.div_1.staTndrStat.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.div_1.staPrType.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);

        };

        this.loadIncludeScript("BTndrCfmList.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
