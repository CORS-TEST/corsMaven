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
                this.set_name("BCntrTmplDetail");
                this.set_titletext("계약서템플릿상세");
                this._setFormPosition(0,0,1220,711);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsReturn", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCntrTmpl", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"TKEY\" size=\"40\" type=\"string\"/><Column id=\"ALT_USE\" size=\"1\" type=\"string\"/><Column id=\"CNTR_CNTNT\" size=\"4000\" type=\"STRING\"/><Column id=\"TTL\" size=\"600\" type=\"string\"/><Column id=\"CRTR_ID\" size=\"50\" type=\"string\"/><Column id=\"CRTR_NM\" size=\"90\" type=\"string\"/><Column id=\"RMARK\" size=\"1500\" type=\"string\"/><Column id=\"LAST_CHG_DT\" size=\"7\" type=\"string\"/><Column id=\"CD_CNTR_TYPE_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_CNTR_TYPE\" size=\"40\" type=\"string\"/><Column id=\"LAST_CHGR_ID\" size=\"50\" type=\"string\"/><Column id=\"LAST_CHGR_NM\" size=\"90\" type=\"string\"/><Column id=\"CD_CNTR_CTGR_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_CNTR_CTGR\" size=\"40\" type=\"string\"/><Column id=\"CRT_DT\" size=\"7\" type=\"string\"/><Column id=\"PORG_ID\" size=\"20\" type=\"string\"/><Column id=\"CNTR_TMPL_ID\" size=\"40\" type=\"string\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCT19", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCT11", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompBody00", "absolute", "0", "78", null, "130", "15", null, this);
            obj.set_taborder("1");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("DIV-헤더 상세");
            this.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label05", "absolute", "0%", "5", null, "132", "0%", null, this.divViewCompBody00);
            obj.set_taborder("80");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine09", "absolute", "0", "0", null, "33", "0", null, this.divViewCompBody00);
            obj.set_taborder("103");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staTtl", "absolute", "0", "0", "117", "33", null, null, this.divViewCompBody00);
            obj.set_taborder("104");
            obj.set_text("계약서명");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtTtl", "absolute", "122", "4", "400", "24", null, null, this.divViewCompBody00);
            obj.set_taborder("105");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("계약서명");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "32", null, "33", "0", null, this.divViewCompBody00);
            obj.set_taborder("118");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staCdCntrType", "absolute", "600", "32", "124", "33", null, null, this.divViewCompBody00);
            obj.set_taborder("119");
            obj.set_text("계약구분");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("계약구분");
            obj.getSetter("lbcd").set("");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Combo("cbCdCntrType", "absolute", "729", "36", "180", "24", null, null, this.divViewCompBody00);
            this.divViewCompBody00.addChild(obj.name, obj);
            obj.set_taborder("120");
            obj.set_innerdataset("dsCdCT19");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("계약구분");
            obj = new Static("staAltUse", "absolute", "0", "32", "117", "33", null, null, this.divViewCompBody00);
            obj.set_taborder("121");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("계약구분");
            obj.getSetter("lbcd").set("");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Combo("cboAltUse", "absolute", "122", "36", "100", "24", null, null, this.divViewCompBody00);
            this.divViewCompBody00.addChild(obj.name, obj);
            var cboAltUse_innerdataset = new Dataset("cboAltUse_innerdataset", this.divViewCompBody00.cboAltUse);
            cboAltUse_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(cboAltUse_innerdataset);
            obj.set_taborder("122");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("objNm").set("사용여부");
            obj = new Static("staViewCompLine01", "absolute", "0", "64", null, "33", "0", null, this.divViewCompBody00);
            obj.set_taborder("123");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staCrtrNm", "absolute", "0", "64", "117", "33", null, null, this.divViewCompBody00);
            obj.set_taborder("124");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("계약유형");
            obj.getSetter("lbcd").set("");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtCrtrNm", "absolute", "122", "68", "250", "24", null, null, this.divViewCompBody00);
            obj.set_taborder("125");
            obj.getSetter("objNm").set("작성자");
            obj.set_readonly("true");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staCrtDt", "absolute", "600", "64", "124", "33", null, null, this.divViewCompBody00);
            obj.set_taborder("126");
            obj.set_text("작성일자");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("계약구분");
            obj.getSetter("lbcd").set("");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Calendar("calCrtDt", "absolute", "729", "68", "120", "24", null, null, this.divViewCompBody00);
            this.divViewCompBody00.addChild(obj.name, obj);
            obj.set_taborder("127");
            obj.set_dateformat("yyyy.MM.dd");
            obj.set_editformat("yyyy.MM.dd");
            obj.getSetter("objNm").set("작성일자");
            obj.set_readonly("true");
            obj = new Static("staViewCompLine02", "absolute", "0", "96", null, "33", "0", null, this.divViewCompBody00);
            obj.set_taborder("128");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtLastChgrNm", "absolute", "122", "100", "250", "24", null, null, this.divViewCompBody00);
            obj.set_taborder("129");
            obj.getSetter("objNm").set("수정자");
            obj.set_readonly("true");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staLastChgrNm", "absolute", "0", "96", "117", "33", null, null, this.divViewCompBody00);
            obj.set_taborder("130");
            obj.set_text("수정자");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("수정자");
            obj.getSetter("lbcd").set("");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staLastChgDt", "absolute", "600", "96", "124", "33", null, null, this.divViewCompBody00);
            obj.set_taborder("131");
            obj.set_text("수정일자");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("계약구분");
            obj.getSetter("lbcd").set("");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Calendar("calLastChgDt", "absolute", "729", "100", "120", "24", null, null, this.divViewCompBody00);
            this.divViewCompBody00.addChild(obj.name, obj);
            obj.set_taborder("132");
            obj.set_dateformat("yyyy.MM.dd");
            obj.set_editformat("yyyy.MM.dd");
            obj.getSetter("objNm").set("수정일자");
            obj.set_readonly("true");

            obj = new Static("Static02", "absolute", "98.58%", "0", "15", "937", null, null, this);
            obj.set_taborder("48");
            obj.set_visible("false");
            obj.style.set_background("#ff7272ff");
            obj.set_text("w15");
            this.addChild(obj.name, obj);

            obj = new Div("divViewCompBody01", "absolute", "0", "247", null, null, "15", "10", this);
            obj.set_taborder("2");
            obj.set_text("div_71");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new WebBrowser("webEditor", "absolute", "0", "0", null, null, "0", "0", this.divViewCompBody01);
            obj.set_taborder("0");
            obj.getSetter("objNm").set("에디터");
            this.divViewCompBody01.addChild(obj.name, obj);

            obj = new Div("divViewCompCond00", "absolute", "0", "0", null, "44", "15", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBg");
            obj.getSetter("objNm").set("컨트롤 박스");
            this.addChild(obj.name, obj);
            obj = new Combo("cboCntrCtgr", "absolute", "20", "10", "150", "24", null, null, this.divViewCompCond00);
            this.divViewCompCond00.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_innerdataset("dsCdCT11");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("계약유형");
            obj.set_readonly("false");
            obj = new Edit("maeDocNo", "absolute", "172", "10", "240", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("1");
            obj.getSetter("objNm").set("문서번호");
            obj.set_readonly("true");
            this.divViewCompCond00.addChild(obj.name, obj);

            obj = new Div("divViewCompTitle00", "absolute", "0", "49", null, "24", "15", null, this);
            obj.set_taborder("81");
            obj.style.set_padding("1 0 0 17");
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", null, "255", "24", null, "0", this.divViewCompTitle00);
            obj.set_taborder("0");
            obj.set_text("계약서");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 2 17");
            this.divViewCompTitle00.addChild(obj.name, obj);

            obj = new Div("divViewCompTitle01", "absolute", "0", "218", null, "24", "15", null, this);
            obj.set_taborder("82");
            obj.style.set_padding("1 0 0 17");
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", null, "255", "24", null, "0", this.divViewCompTitle01);
            obj.set_taborder("0");
            obj.set_text("계약내용");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 2 17");
            this.divViewCompTitle01.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 130, this.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_scrollbars("none");
            		p.getSetter("objNm").set("DIV-헤더 상세");

            	}
            );
            this.divViewCompBody00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1042, 500, this.divViewCompBody01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.set_text("div_71");
            		p.set_scrollbars("none");

            	}
            );
            this.divViewCompBody01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 44, this.divViewCompCond00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_cssclass("div_WF_SearchBg");
            		p.getSetter("objNm").set("컨트롤 박스");

            	}
            );
            this.divViewCompCond00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompTitle00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("81");
            		p.style.set_padding("1 0 0 17");
            		p.getSetter("objNm").set("DIV-평가서 타이틀");

            	}
            );
            this.divViewCompTitle00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompTitle01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("82");
            		p.style.set_padding("1 0 0 17");
            		p.getSetter("objNm").set("DIV-평가서 타이틀");

            	}
            );
            this.divViewCompTitle01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1220, 711, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("FrmTemplate100");
            		p.set_titletext("계약서템플릿상세");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item9","divViewCompCond00.cboCntrCtgr","value","dsCntrTmpl","CD_CNTR_CTGR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","divViewCompCond00.maeDocNo","value","dsCntrTmpl","CNTR_TMPL_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divViewCompBody00.edtTtl","value","dsCntrTmpl","TTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divViewCompBody00.cboAltUse","value","dsCntrTmpl","ALT_USE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","divViewCompBody00.edtCrtrNm","value","dsCntrTmpl","CRTR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","divViewCompBody00.edtLastChgrNm","value","dsCntrTmpl","LAST_CHGR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","divViewCompBody00.cbCdCntrType","value","dsCntrTmpl","CD_CNTR_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","divViewCompBody00.calCrtDt","value","dsCntrTmpl","CRT_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","divViewCompBody00.calLastChgDt","value","dsCntrTmpl","LAST_CHG_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sta_WFDA_Label05Vi","divViewCompBody00.sta_WFDA_Label05","visible","dsObjBindVi","sta_WFDA_Label05");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sta_WFDA_Label05En","divViewCompBody00.sta_WFDA_Label05","enable","dsObjBindEn","sta_WFDA_Label05");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTtlVi","divViewCompBody00.staTtl","visible","dsObjBindVi","staTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTtlEn","divViewCompBody00.staTtl","enable","dsObjBindEn","staTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTtlVi","divViewCompBody00.edtTtl","visible","dsObjBindVi","edtTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTtlEn","divViewCompBody00.edtTtl","readonly","dsObjBindEn","edtTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCdCntrTypeVi","divViewCompBody00.staCdCntrType","visible","dsObjBindVi","staCdCntrType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCdCntrTypeEn","divViewCompBody00.staCdCntrType","enable","dsObjBindEn","staCdCntrType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cbCdCntrTypeVi","divViewCompBody00.cbCdCntrType","visible","dsObjBindVi","cbCdCntrType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cbCdCntrTypeEn","divViewCompBody00.cbCdCntrType","readonly","dsObjBindEn","cbCdCntrType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAltUseVi","divViewCompBody00.staAltUse","visible","dsObjBindVi","staAltUse");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAltUseEn","divViewCompBody00.staAltUse","enable","dsObjBindEn","staAltUse");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboAltUseVi","divViewCompBody00.cboAltUse","visible","dsObjBindVi","cboAltUse");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboAltUseEn","divViewCompBody00.cboAltUse","readonly","dsObjBindEn","cboAltUse");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCrtrNmVi","divViewCompBody00.staCrtrNm","visible","dsObjBindVi","staCrtrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCrtrNmEn","divViewCompBody00.staCrtrNm","enable","dsObjBindEn","staCrtrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCrtrNmVi","divViewCompBody00.edtCrtrNm","visible","dsObjBindVi","edtCrtrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCrtrNmEn","divViewCompBody00.edtCrtrNm","readonly","dsObjBindEn","edtCrtrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCrtDtVi","divViewCompBody00.staCrtDt","visible","dsObjBindVi","staCrtDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCrtDtEn","divViewCompBody00.staCrtDt","enable","dsObjBindEn","staCrtDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calCrtDtVi","divViewCompBody00.calCrtDt","visible","dsObjBindVi","calCrtDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calCrtDtEn","divViewCompBody00.calCrtDt","readonly","dsObjBindEn","calCrtDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtLastChgrNmVi","divViewCompBody00.edtLastChgrNm","visible","dsObjBindVi","edtLastChgrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtLastChgrNmEn","divViewCompBody00.edtLastChgrNm","readonly","dsObjBindEn","edtLastChgrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staLastChgrNmVi","divViewCompBody00.staLastChgrNm","visible","dsObjBindVi","staLastChgrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staLastChgrNmEn","divViewCompBody00.staLastChgrNm","enable","dsObjBindEn","staLastChgrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staLastChgDtVi","divViewCompBody00.staLastChgDt","visible","dsObjBindVi","staLastChgDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staLastChgDtEn","divViewCompBody00.staLastChgDt","enable","dsObjBindEn","staLastChgDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calLastChgDtVi","divViewCompBody00.calLastChgDt","visible","dsObjBindVi","calLastChgDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calLastChgDtEn","divViewCompBody00.calLastChgDt","readonly","dsObjBindEn","calLastChgDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static02Vi","Static02","visible","dsObjBindVi","Static02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static02En","Static02","enable","dsObjBindEn","Static02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("webEditorVi","divViewCompBody01.webEditor","visible","dsObjBindVi","webEditor");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("webEditorEn","divViewCompBody01.webEditor","enable","dsObjBindEn","webEditor");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboCntrCtgrVi","divViewCompCond00.cboCntrCtgr","visible","dsObjBindVi","cboCntrCtgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboCntrCtgrEn","divViewCompCond00.cboCntrCtgr","readonly","dsObjBindEn","cboCntrCtgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("maeDocNoVi","divViewCompCond00.maeDocNo","visible","dsObjBindVi","maeDocNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("maeDocNoEn","divViewCompCond00.maeDocNo","readonly","dsObjBindEn","maeDocNo");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("BCntrTmplDetail.xfdl", function(exports) {
        /**
         * @파일명			: BCntrTmplDetail
         * @생성자			: 안성민
         * @생성일시		: 2019. 05. 21.
         * @설명			: 계약템플릿상세
         * @최종수정자		: 안성민
         * @최종수정일시	: 2019. 05. 21.
        */ 

        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {
        	var param = [
        					{code:"CT11", sSelectType:"S"} // 계약유형
        					,{code:"CT19", sSelectType:"S"} // 계약구분
        				];
        												
        	gfnGetCode(this, param);
        }

        /**
          * @함수명	: fnRemote
          * @desc     	: 리모콘 버튼 생성
          */
        this.fnRemote = function()
        {
        	var sArg = [ ];	
        	gfnRemote(this, sArg);
        }

        /**
          * @함수명	: BRfqPrgList_oninit
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.InitEventInfo(이벤트변수)
          * @desc     	: 폼 oninit이벤트
          */
        this.fnFormOninit = function(obj,e)
        {
        	this.fnSetCode();
        }

        /**
          * @함수명	: fnFormOnload
          * @input    	: obj:Form(폼 오브젝트), e:nexacr o.LoadEventInfo(이벤트변수)
          * @desc     	: 폼 onload이벤트
          */
        this.fnFormOnload = function(obj,e)
        {	
        	this.dsCntrTmpl.addRow();
        	
        	//이전화면에서 넘어오는 파라미터를 받는다.
        	var cntrTmplId = gfnGetTmprData("CNTR_TMPL_ID");
        	var branchCd   = gfnGetTmprData("BRANCH_CD");
        	//파라미터를 받은 이후에는 파라미터를 를 초기화 해준다.
        	gfnClearTmprData(); 
        	gfnSetObj("A");
        	if(gfnIsNull(cntrTmplId)){
        		this.dsCntrTmpl.setColumn(0,"CRTR_NM",application.gdsUserInfo.getColumn(0,"USER_NM"));
        		this.dsCntrTmpl.setColumn(0,"CRT_DT",gfnToday());
        		this.dsCntrTmpl.setColumn(0,"LAST_CHGR_NM",application.gdsUserInfo.getColumn(0,"USER_NM"));
        		this.dsCntrTmpl.setColumn(0,"LAST_CHG_DT",gfnToday());
        		this.dsCntrTmpl.setColumn(0, "ALT_USE", "Y"); //사용여부
        		this.dsCntrTmpl.setColumn(0, "CD_CNTR_TYPE", ""); //계약구분
        		
        		gfnModalPop(this, "CntrCtgrPop", "BCNTR::BCntrCtgrPop.xfdl", {}, "fnPopCallBack", 300, 500);
        		this.divViewCompBody01.webEditor.set_url(application.services["url"].url+"daumeditor/editor.jsp");
        	} else {
        		this.dsCntrTmpl.setColumn(0,"BRANCH_CD", branchCd);
        		this.dsCntrTmpl.setColumn(0,"CNTR_TMPL_ID", cntrTmplId);
        		this.fnSearch();
        	}
        }

        /**
          * @함수명	: fnPreSearch
          * @desc     	: 조회
          */
        this.fnPreSearch = function()
        {
        	return true;
        }

        /**
          * @함수명	: fnSearch
          * @desc     	: 조회
          */
        this.fnSearch = function()
        {
        	if(!this.fnPreSearch()) return;
        	
        	var sSvcID = "readCntrTmpl";
        	var sController = "epro.cntr.service.BCntrService.readCntrTmpl";
        	var sInDatasets = "dsCntrTmpl=dsCntrTmpl";
        	var sOutDatasets = "dsCntrTmpl=dsCntrTmpl";
        	var sCallbackFunc = "fnTrCallBack";
        				
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);	
        }

        /**
        	@function	fnPreDelete()
        	@desc   	삭제 전처리
        */
        this.fnPreDelete = function()
        {
        	return true;
        }

        /**
        	@function	fnDelete()
        	@desc   	(공통버튼)삭제 프로세스
        */
        this.fnDelete = function()
        {
        	if(!this.fnPreDelete()) return;
        	
        	if(!gfnConfirm("삭제하시겠습니까?")) return;
        	
        	var sSvcID = "deleteCntrTmpl";
        	var sController = "epro.cntr.service.BCntrService.deleteCntrTmpl";
        	var sInDatasets = "dsCntrTmpl=dsCntrTmpl"; 
        	var sOutDatasets = "dsCntrTmpl=dsCntrTmpl";
        	var sCallbackFunc = "fnTrCallBack";
        	
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);	
        }

        /**
        	@function	fn_preSave()
        	@desc   	저장 전 처리
        */
        this.fnPreSave = function()
        {	
        	var arr = [];
        	
        	if(gfnIsNull(this.dsCntrTmpl.getColumn(0, "TTL"))){
        		var msg = "계약서명을 입력해주세요"
        		var type = "필수입력"
        		var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        		arr.push(objParam);
        	}
        	return gfnValidate(this, false, arr);
        }

        /**
        	@function	fn_commSave()
        	@desc   	(공통버튼)저장 프로세스
        */
        this.fnSave = function()
        {
        	if (!this.fnPreSave()) return false;
        	
        	this.divViewCompBody01.webEditor.callMethod("saveContent");
        }

        /**
        	@function	fnSave2()
        	@desc   	(공통버튼)저장 프로세스
        */
        this.fnSave2 = function()
        {
        	var sSvcID = "saveCntrTmpl";
        	var sController = "epro.cntr.service.BCntrService.saveCntrTmpl";
        	var sInDatasets = "dsCntrTmpl=dsCntrTmpl"; 
        	var sOutDatasets = "dsCntrTmpl=dsCntrTmpl";
        	var sCallbackFunc = "fnTrCallBack";

        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);	
        }

        /**
        	@function	fnTrCallBack()
        	@desc   	Transaction Callback함수
        */
        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg)
        {	
        	switch(strSvcID)
        	{
        		case "readCntrTmpl" : 
        			this.divViewCompBody01.webEditor.set_url(application.services["url"].url+"daumeditor/editor.jsp");	
        			break;
        		
        		case "saveCntrTmpl" : 
        			this.fnSearch();
        			break;
        		
        		case "deleteCntrTmpl":
        			gfnAlert("삭제되었습니다.");
        			this.parent.fnBtnComCloseOnclick();
        			break;
        		
        		default:
        		break;	
        	}
        }

        /**
        	@function	fnPopCallBack()
        	@desc   	팝업 CallBack 함수
        */
        this.fnPopCallBack = function(sPopupId,rtn)
        {
        	if(gfnIsNull(rtn)) {
        		if(sPopupId == "CntrCtgrPop") this.parent.fnBtnComCloseOnclick();
        		return;
        	}
        		
        	switch(sPopupId) {
        		//승인요청
        		case "CntrCtgrPop" :
        			this.dsCntrTmpl.setColumn(0, "CD_CNTR_CTGR", rtn);
        			break;
        		default:
        			break;	
        			
        	}
        }

        /**
        	@function	div_71_wb_daumEditor_onusernotify()
        	@desc   	KSPARK - Daum editor
        */
        this.fnWebEditorOnusernotify = function(obj,e)
        {
        	//런타임
        	if(obj.getProperty("document").getProperty("title").indexOf("▩") == 0){
        		//read
        		if (gfnReplace(obj.getProperty("document").getProperty("title"),"▩","") == "true"){
        			this.divViewCompBody01.webEditor.callMethod("setEditor",this.dsCntrTmpl.getColumn(0,"CNTR_CNTNT"));
        		//save
        		} else {
        			this.dsCntrTmpl.setColumn(0,"CNTR_CNTNT",gfnReplace(obj.getProperty("document").getProperty("title"),"▩",""));
        			this.fnSave2();
        		}

        	//웹
        	} else if (e.userdata.indexOf("▦") == 0){
        		//read
        		if (gfnReplace(e.userdata,"▦","") == "true"){			
        			this.divViewCompBody01.webEditor.callMethod("setEditor",this.dsCntrTmpl.getColumn(0,"CNTR_CNTNT"));
        		//save
        		} else {
        			this.dsCntrTmpl.setColumn(0,"CNTR_CNTNT",gfnReplace(e.userdata,"▦",""));
        			this.fnSave2();
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.divViewCompBody00.staTtl.addEventHandler("onclick", this.div_21_Tab01_tabp01_st_Ttl_onclick, this);
            this.divViewCompBody01.webEditor.addEventHandler("onusernotify", this.fnWebEditorOnusernotify, this);
            this.divViewCompTitle00.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompTitle01.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);

        };

        this.loadIncludeScript("BCntrTmplDetail.xfdl", true);

       
    };
}
)();
