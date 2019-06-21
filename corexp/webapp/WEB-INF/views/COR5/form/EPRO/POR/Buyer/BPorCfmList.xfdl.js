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
                this.set_name("BPorCfmList");
                this.set_titletext("발주완료현황");
                this._setFormPosition(0,0,1220,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCdCM10", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdPO10", this);
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


            
            // UI Components Initialize
            obj = new Div("divViewCompCond01", "absolute", "0", "35", null, "113", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.getSetter("objNm").set("");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            obj = new Static("staWarning", "absolute", "-1", "92", null, "19", "1", null, this.divViewCompCond01);
            obj.set_taborder("49");
            obj.set_text("- 검색조건 없이 검색 시 속도가 저하 될 수 있습니다.");
            obj.set_cssclass("sta_WF_SearchText");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtPtnrId", "absolute", "170", "63", "117", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("57");
            obj.set_enable("false");
            obj.style.setStyleValue("color", "disabled", "black");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("objNm").set("협력사ID");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtPtnrNm", "absolute", "292", "63", "163", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("58");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("협력사명");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtMtrlCd", "absolute", "573", "5", "121", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("61");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("10");
            obj.set_enable("false");
            obj.style.setStyleValue("color", "disabled", "black");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("objNm").set("품목코드");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtMtrlNm", "absolute", "699", "5", "214", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("62");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("품목명");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Button("btnMtrl", "absolute", "913", "5", "24", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("64");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("품목검색 버튼");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Button("btnPntr", "absolute", "455", "63", "24", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("65");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("협력사 검색 버튼");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staTtl", "absolute", "0", "34", "170", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("67");
            obj.set_text("발주명");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staPtnr", "absolute", "0", "63", "170", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("68");
            obj.set_text("협력사");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtTtl", "absolute", "170", "34", "285", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("69");
            obj.getSetter("objNm").set("발주명");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staPoMtrl", "absolute", "455", "5", "118", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("70");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staChrgrId", "absolute", "455", "34", "118", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("71");
            obj.set_text("발주담당자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtChrgrId", "absolute", "573", "34", "121", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("72");
            obj.set_enable("false");
            obj.style.setStyleValue("color", "disabled", "black");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("objNm").set("발주담당자ID");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtChrgrNm", "absolute", "699", "34", "214", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("73");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("발주담당자명");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Button("btnChrgr", "absolute", "913", "34", "24", "21", null, null, this.divViewCompCond01);
            obj.set_taborder("74");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("발주담당자 검색 버튼");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staPoDay", "absolute", "0", "5", "170", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("75");
            obj.set_text("발주일자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divPoDay", "absolute", "170", "5", "285", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("76");
            obj.set_text("Div01");
            obj.getSetter("objNm").set("발주일자");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);

            obj = new Div("divViewCompBody00", "absolute", "0", "164", null, null, "15", "0", this);
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"110\"/><Column size=\"90\"/><Column size=\"65\"/><Column size=\"400\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"118\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"발주번호\" combodisplaynulltext=\"CD_CNTR_STTS\"/><Cell col=\"2\" text=\"구매유형\"/><Cell col=\"3\" text=\"상태\"/><Cell col=\"4\" text=\"발주명\"/><Cell col=\"5\" text=\"사업자번호\"/><Cell col=\"6\" text=\"협력사명\"/><Cell col=\"7\" text=\"담당자\"/><Cell col=\"8\" text=\"발주일자\"/><Cell col=\"9\" text=\"발주접수일시\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\" expandshow=\"hide\"/><Cell col=\"1\" edittype=\"none\" cssclass=\"cell_link\" text=\"bind:PO_NO\" maskchar=\" \" tooltiptext=\"bind:PO_NO\"/><Cell col=\"2\" text=\"bind:CD_DOC_CTGR_NM\" tooltiptext=\"bind:CD_DOC_CTGR_NM\"/><Cell col=\"3\" text=\"bind:CD_PO_STTS_NM\" tooltiptext=\"bind:CD_PO_STTS_NM\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:TTL\" tooltiptext=\"bind:TTL\"/><Cell col=\"5\" text=\"bind:BIZ_NO\" mask=\"@@@-@@-@@@@@\" maskchar=\"_\" suppressalign=\"first\" tooltiptext=\"bind:BIZ_NO\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" style=\"align:left;padding:3 3 3 3;\" cssclass=\"cell_link\" text=\"bind:PTNR_NM\" editautoselect=\"true\" editdisplay=\"edit\" tooltiptext=\"bind:PTNR_NM\"/><Cell col=\"7\" cssclass=\"cell_link\" text=\"bind:WRTR_NM\" tooltiptext=\"bind:WRTR_NM\"/><Cell col=\"8\" displaytype=\"date\" edittype=\"none\" text=\"bind:PO_DAY\" mask=\"yyyy.MM.dd\" calendardisplaynulltype=\"none\" tooltiptext=\"bind:PO_DAY\"/><Cell col=\"9\" displaytype=\"date\" text=\"bind:RCV_DT\" mask=\"yyyy.MM.dd HH:mm\" calendardisplaynulltype=\"none\" tooltiptext=\"bind:RCV_DT\"/></Band></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "9", this.divViewCompBody00);
            obj.getSetter("objNm").set("페이징");
            obj.set_scrollbars("none");
            obj.set_taborder("2");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnPtnrChg", "absolute", null, "0", "87", "24", "0", null, this.divViewCompBody00);
            obj.set_taborder("3");
            obj.set_text("협력사변경");
            obj.set_cssclass("btn_WF_Ssign");
            obj.getSetter("objNm").set("협력사변경");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnPoCxl", "absolute", null, "0", "87", "24", "89", null, this.divViewCompBody00);
            obj.set_taborder("4");
            obj.set_text("발주취소");
            obj.set_cssclass("btn_WF_Ssign");
            obj.getSetter("objNm").set("발주취소");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnChgRej", "absolute", null, "0", "87", "24", "267", null, this.divViewCompBody00);
            obj.set_taborder("5");
            obj.set_text("변경요청거부");
            obj.set_cssclass("btn_WF_Ssign");
            obj.getSetter("objNm").set("변경요청거부");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnPoCfm", "absolute", null, "0", "87", "24", "178", null, this.divViewCompBody00);
            obj.set_taborder("6");
            obj.set_text("납품완료");
            obj.set_cssclass("btn_WF_Ssign");
            obj.getSetter("objNm").set("납품완료");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnCntrAdd", "absolute", null, "0", "87", "24", "356", null, this.divViewCompBody00);
            obj.set_taborder("7");
            obj.set_text("계약작성");
            obj.set_cssclass("btn_WF_Ssign");
            obj.getSetter("objNm").set("계약작성");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Div("divViewCompCond00", "absolute", "0", "0", null, "36", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.style.set_align("center");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);
            obj = new Combo("cboPostts", "absolute", "573", "5", "148", "24", null, null, this.divViewCompCond00);
            this.divViewCompCond00.addChild(obj.name, obj);
            var cboPostts_innerdataset = new Dataset("cboPostts_innerdataset", this.divViewCompCond00.cboPostts);
            cboPostts_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows/>");
            obj.set_innerdataset(cboPostts_innerdataset);
            obj.set_taborder("3");
            obj.set_innerdataset("dsCdPO10");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("상태");
            obj = new Combo("cboDocCtgr", "absolute", "892", "5", "185", "24", null, null, this.divViewCompCond00);
            this.divViewCompCond00.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_innerdataset("dsCdCM10");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("구매유형");
            obj = new Static("staPoStts", "absolute", "455", "5", "118", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("7");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staDocCtgr", "absolute", "774", "5", "118", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("8");
            obj.set_text("구매유형");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staPoNo", "absolute", "0", "5", "170", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("9");
            obj.set_text("발주번호");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Edit("edtPoNo", "absolute", "170", "5", "285", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("10");
            obj.getSetter("objNm").set("발주번호");
            this.divViewCompCond00.addChild(obj.name, obj);

            obj = new Button("btnFold", "absolute", "45.66%", "148", "56", "17", null, null, this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_Fold_Close");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 113, this.divViewCompCond01,
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
            		p.set_titletext("발주완료현황");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","divViewCompCond00.cboPostts","value","dsCondition","CD_PO_STTS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","divViewCompCond01.edtPtnrNm","value","dsCondition","PTNR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","divViewCompCond01.edtPtnrId","value","dsCondition","PTNR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","divViewCompCond01.edtMtrlNm","value","dsCondition","MTRL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","divViewCompCond01.edtMtrlCd","value","dsCondition","MTRL_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","divViewCompCond00.cboDocCtgr","value","dsCondition","CD_DOC_CTGR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","divViewCompCond01.edtTtl","value","dsCondition","TTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divViewCompCond01.edtChrgrId","value","dsCondition","CHRGR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","divViewCompCond01.edtChrgrNm","value","dsCondition","CHRGR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divViewCompCond00.edtPoNo","value","dsCondition","PO_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPtnrIdVi","divViewCompCond01.edtPtnrId","visible","dsObjBindVi","edtPtnrId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPtnrIdEn","divViewCompCond01.edtPtnrId","readonly","dsObjBindEn","edtPtnrId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPtnrNmVi","divViewCompCond01.edtPtnrNm","visible","dsObjBindVi","edtPtnrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPtnrNmEn","divViewCompCond01.edtPtnrNm","readonly","dsObjBindEn","edtPtnrNm");
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
            obj = new BindItem("btnPntrVi","divViewCompCond01.btnPntr","visible","dsObjBindVi","btnPntr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnPntrEn","divViewCompCond01.btnPntr","enable","dsObjBindEn","btnPntr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTtlVi","divViewCompCond01.staTtl","visible","dsObjBindVi","staTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTtlEn","divViewCompCond01.staTtl","enable","dsObjBindEn","staTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPtnrVi","divViewCompCond01.staPtnr","visible","dsObjBindVi","staPtnr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPtnrEn","divViewCompCond01.staPtnr","enable","dsObjBindEn","staPtnr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTtlVi","divViewCompCond01.edtTtl","visible","dsObjBindVi","edtTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTtlEn","divViewCompCond01.edtTtl","readonly","dsObjBindEn","edtTtl");
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
            obj = new BindItem("staPoDayVi","divViewCompCond01.staPoDay","visible","dsObjBindVi","staPoDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoDayEn","divViewCompCond01.staPoDay","enable","dsObjBindEn","staPoDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPoDayVi","divViewCompCond01.divPoDay","visible","dsObjBindVi","divPoDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPoDayEn","divViewCompCond01.divPoDay","enable","dsObjBindEn","divPoDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPagingVi","divViewCompBody00.divPaging","visible","dsObjBindVi","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPagingEn","divViewCompBody00.divPaging","enable","dsObjBindEn","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnPtnrChgVi","divViewCompBody00.btnPtnrChg","visible","dsObjBindVi","btnPtnrChg");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnPtnrChgEn","divViewCompBody00.btnPtnrChg","enable","dsObjBindEn","btnPtnrChg");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnPoCxlVi","divViewCompBody00.btnPoCxl","visible","dsObjBindVi","btnPoCxl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnPoCxlEn","divViewCompBody00.btnPoCxl","enable","dsObjBindEn","btnPoCxl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnChgRejVi","divViewCompBody00.btnChgRej","visible","dsObjBindVi","btnChgRej");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnChgRejEn","divViewCompBody00.btnChgRej","enable","dsObjBindEn","btnChgRej");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnPoCfmVi","divViewCompBody00.btnPoCfm","visible","dsObjBindVi","btnPoCfm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnPoCfmEn","divViewCompBody00.btnPoCfm","enable","dsObjBindEn","btnPoCfm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnCntrAddVi","divViewCompBody00.btnCntrAdd","visible","dsObjBindVi","btnCntrAdd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnCntrAddEn","divViewCompBody00.btnCntrAdd","enable","dsObjBindEn","btnCntrAdd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboPosttsVi","divViewCompCond00.cboPostts","visible","dsObjBindVi","cboPostts");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboPosttsEn","divViewCompCond00.cboPostts","readonly","dsObjBindEn","cboPostts");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboDocCtgrVi","divViewCompCond00.cboDocCtgr","visible","dsObjBindVi","cboDocCtgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboDocCtgrEn","divViewCompCond00.cboDocCtgr","readonly","dsObjBindEn","cboDocCtgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoSttsVi","divViewCompCond00.staPoStts","visible","dsObjBindVi","staPoStts");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoSttsEn","divViewCompCond00.staPoStts","enable","dsObjBindEn","staPoStts");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staDocCtgrVi","divViewCompCond00.staDocCtgr","visible","dsObjBindVi","staDocCtgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staDocCtgrEn","divViewCompCond00.staDocCtgr","enable","dsObjBindEn","staDocCtgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoNoVi","divViewCompCond00.staPoNo","visible","dsObjBindVi","staPoNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoNoEn","divViewCompCond00.staPoNo","enable","dsObjBindEn","staPoNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPoNoVi","divViewCompCond00.edtPoNo","visible","dsObjBindVi","edtPoNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPoNoEn","divViewCompCond00.edtPoNo","readonly","dsObjBindEn","edtPoNo");
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
            this._addPreloadList("fdl", "CCOMP::CompCalFromTo.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
        };
        
        // User Script
        this.registerScript("BPorCfmList.xfdl", function(exports) {
        /**
         * @파일명			: BPorCfmList
         * @생성자			: 한의봉
         * @생성일시		: 2019. 04. 26.
         * @설명			: 발주완료현황
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
        					 {code:"PO10", sSelectType:"A", sFiltered:"D:WRI,APP,,WAT"} //발주상태
        					 , {code:"CM10", sSelectType:"A"}
        					 
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
         	gfnSetGrdFunc(this.divViewCompBody00.grdList, this.divViewCompBody00.divPaging, this,{isTran:"Y", tranNm:"BPorService.searchPorCfmList", dsParam:this.dsCondition});
         	
         	//조회조건 Div 접기/펼치기 세팅
         	this.fnFold();
        	//요청일자 셋팅
        	this.divViewCompCond01.divPoDay.fnSetDate(this.dsCondition, "PO_DAY_STR", "PO_DAY_END");
        	
        	this.dsCondition.addRow();
        	
        	this.dsCondition.setColumn(0, "CD_PO_STTS", "");
        	this.dsCondition.setColumn(0, "CD_DOC_CTGR", "");
        	this.dsCondition.setColumn(0,"PO_DAY_STR",gfnAddMonth(gfnToday(), -1));
         	this.dsCondition.setColumn(0,"PO_DAY_END",gfnToday());

         	this.dsCondition.setColumn(0,"CHRGR_ID",application.gdsUserInfo.getColumn(0,"USER_ID"));
         	this.dsCondition.setColumn(0,"CHRGR_NM",application.gdsUserInfo.getColumn(0,"USER_NM"));

        	//메인에서 파라미터가 넘어오면 견적번호를 셋팅하여 검색	
        	if("" != gfnGetTmprData("DOC_NO")){
        		this.dsCondition.setColumn(0,"PO_NO",gfnGetTmprData("DOC_NO"));
        		this.dsCondition.setColumn(0,"CD_PO_STTS","PO10REQ");
        		this.gfn_clearTmprData(); 	
        	}else{
        		this.dsCondition.setColumn(0,"CD_PO_STTS","PO10SND");
        	}

        	this.fnSearch();
        }

        /**
          * @함수명	: fnSearch
          * @desc     	: 조회 프로세스
          */
        this.fnSearch = function(svcId)
        {	
        	var sSvcID = "search";
        	var sController = "epro.por.service.BPorService.searchPorCfmList";
        	var sInDatasets = "dsCondition=dsCondition";
        	var sOutDatasets = "dsList=dsList";
        	var sCallbackFunc = "fnTrCallBack";
        		
         	var	oPaging = [      
                            {inDs:this.dsCondition, grid:this.divViewCompBody00.grdList, divPaging:this.divViewCompBody00.divPaging}
                        ];
             gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc, oPaging);
        }

        /**
        	@function	fnAdd()
        	@desc   	(공통버튼)신규
        */
        this.fnAdd = function() 
        {
        	gfnOpenMenuUrl("BPOR::BPorDetail");
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
        				
        		case "cancle" :
        			gfnAlert("취소되었습니다.");
        			this.fnSearch();
        		break;

        		case "reject" :
        			gfnAlert("거부되었습니다.");
        			this.fnSearch();
        		break;
        		
        		default:
        		break;	
        	}
        }

        
        this.grdListOnCelldblclick = function(obj,e)
        {
        	if(gfnIsNull(this.dsList.getColumn(e.row,gfnGrdBindColId(obj, e.cell)))) return false;

        	if(gfnGrdBindColId(obj, e.cell)=="PO_NO")	//발주번호
        	{
        		gfnSetTmprData("PO_NO" ,this.dsList.getColumn(e.row, "PO_NO"));
        		gfnOpenMenuUrl("BPOR::BPorDetail");
        	}
        	else if(gfnGrdBindColId(obj, e.cell)=="PTNR_NM")	//협력사명
        	{
        		var sArg = { agv_id : this.dsList.getColumn(e.row, "PTNR_ID"),
        				 agv_nm : this.dsList.getColumn(e.row, "PTNR_NM")
        				};
        		gfnModalPop(this, "CtnrPtnrInfo", "CPOP::BPtnrInfoPopup.xfdl", sArg, "fnPopCallBack", 550, 500);
        	}
        	else if(gfnGrdBindColId(obj, e.cell)=="WRTR_NM")	//담당자
        	{
        		var sArg = { agv_id : this.dsList.getColumn(this.dsList.rowposition, "WRTR_ID") };
        		gfnModalPop(this, "CtnrUserInfo", "CPOP::BUserInfoPopup.xfdl", sArg, "fnPopCallBack", 550, 230);
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
        		case "PopupCnclRsn":
        		
        			var sSvcID = "cancle";
        			var sController = "epro.por.service.SPorService.updatePorCncl";
        			var sInDatasets = "in_po=dsReturn";
        			var sOutDatasets = "";
        			var sCallbackFunc = "fnTrCallBack";

        			 gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        			
        			break;
        		case "PopupChgRejRsn":
        		
        			var sSvcID = "reject";
        			var sController = "epro.por.service.SPorService.updatePorChgReject";
        			var sInDatasets = "in_po=dsReturn";
        			var sOutDatasets = "";
        			var sCallbackFunc = "fnTrCallBack";

        			 gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        			
        			break;
        			
        		default:
        			break;	
        	}
        }

        /**
          	@function	btnCntrAdd_onclick()
         	@desc  		계약작성
         */
        this.btnCntrAdd_onclick = function(obj,e)
        {
        	var rtn = this.gfnGetChkRowString(this.dsList);	
        	if(!rtn) return;
        	
        	this.dsReturn.loadXML(rtn);
        	this.dsReturn.filter("CD_PO_STTS!='PO10CLO' && CD_PO_STTS!='PO10ING' && CD_PO_STTS!='PO10SND'");
        	
        	var msg="";
        	for(var i=0; i<this.dsReturn.getRowCount(); i++)
        	{
        		msg += "발주번호 ["+this.dsReturn.getColumn(i, "PO_NO")+"]의 상태 [" +this.dsReturn.getColumn(i, "CD_PO_STTS_NM")+"] \n";	
        	}
        	
        	if(!this.gfn_isNull(msg))
        	{
        		gfnAlert(msg + "이므로 계약작성 할 수 없습니다.");
        		return;
        	}
        	
        	this.dsReturn.filter("");
        	if(this.dsReturn.getRowCount() > 1)
        	{
        		gfnAlert("계약을 작성하기 위해서는 한가지만 선택하세요.");
        		return;
        	}
        	
        	if(!gfnCnfirm("계약작성 하시겠습니까?")) return false;
        	
        	var sSvcID = "Po_CreateCntr";
        	var sController = "Po_CreateCntr.do";
        	var sInDatasets = "in_po=dsReturn:A";
        	var sOutDatasets = "ds_ctr=ds_ctr";
        	var sCallbackFunc = "fn_trCallBack";
        	
        	this.gfn_tran(sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        
        /**
          	@function	btnChgRej_onclick()
         	@desc  		변경요청거부
         */
        this.btnChgRej_onclick = function(obj,e)
        {
        	var rtn = this.gfnGetChkRowString(this.dsList);	
        	if(!rtn) return;
        	
        	this.dsReturn.loadXML(rtn);
        	this.dsReturn.set_enableevent(false);
        	this.dsReturn.filter("CD_PO_STTS!='PO10REQ'");
        	
        	var msg="";
        	for(var i=0; i<this.dsReturn.getRowCount(); i++)
        	{
        		msg += "발주번호 ["+this.dsReturn.getColumn(i, "PO_NO")+"]의 상태 [" +this.dsReturn.getColumn(i, "CD_PO_STTS_NM")+"] \n";	
        	}
        	
        	if(!this.gfn_isNull(msg))
        	{
        		gfnAlert(msg + "이므로 변경요청거부를 할 수 없습니다.");
        		return;
        	}
        	
        	var poNoArr=new Array();
        	this.dsReturn.filter("");
        	this.dsReturn.set_enableevent(true);
        	
        	for(var i=0; i<this.dsReturn.getRowCount(); i++)
        	{
        		if(this.dsList.getColumn(i, "WRTR_ID") != application.gdsUserInfo.getColumn(0, "USER_ID"))
        		{
        			gfnAlert("담당자가 다르므로 변경요청거부 할 수 없습니다.");
        			return;
        		}
        		
        		poNoArr[i] = this.dsReturn.getColumn(i, "PO_NO");
        	}
        	
        	var sArg = { 
        					agv_poNoArr:poNoArr.toString()
        			   };	

        	gfnModalPop(this,"PopupChgRejRsn", "BPOR::BPorChgRejPopUp.xfdl", sArg, "fnPopCallBack",400,300);
        	
        }

        /**
          	@function	btnPoCfm_onclick()
         	@desc  		납품완료
         */
        this.btnPoCfm_onclick = function(obj,e)
        {
        	if(this.dsList.getColumn(this.dsList.rowposition, "WRTR_ID") != application.gdsUserInfo.getColumn(0, "USER_ID"))
        	{
        		gfnAlert("담당자가 다르므로 납품완료 할 수 없습니다.");
        		return;
        	}
        	
        	var rtn = this.gfnGetChkRowString(this.dsList);	
        	if(!rtn) return;
        	
        	this.dsReturn.loadXML(rtn);
        	this.dsReturn.filter("CD_PO_STTS=='PO10CLO' || CD_PO_STTS=='PO10CXL'");
        	
        	var msg="";
        	for(var i=0; i<this.dsReturn.getRowCount(); i++)
        	{
        		msg += "발주번호 ["+this.dsReturn.getColumn(i, "PO_NO")+"]의 상태 [" +this.dsReturn.getColumn(i, "CD_PO_STTS_NM")+"] \n";	
        	}	
        	
        	if(!this.gfn_isNull(msg))
        	{
        		gfnAlert(msg + "이므로 납품완료 할 수 없습니다.");
        		return;
        	}
        		
        	var sSvcID = "Po_ProcessCloseItemSttsSrch";
        	var sController = "Po_ProcessCloseItemSttsSrch.do";
        	var sInDatasets = "in_po=dsReturn:A";
        	var sOutDatasets = "ds_closePor=in_ds";
        	var sCallbackFunc = "fn_trCallBack";
        	
        	this.gfn_tran(sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        
        /**
          	@function	btnPoCxl_onclick()
         	@desc  		발주취소
         */
        this.btnPoCxl_onclick = function(obj,e)
        {
        	var rtn = this.gfnGetChkRowString(this.dsList);
        	if(!rtn) return;
        	
        	this.dsReturn.loadXML(rtn);
        	this.dsReturn.set_enableevent(false);
        	this.dsReturn.filter("CD_PO_STTS!='PO10SND'");
        		
        	var msg="";	
        	for(var i=0; i<this.dsReturn.getRowCount(); i++)
        	{
        		msg += "발주번호 ["+this.dsReturn.getColumn(i, "PO_NO")+"]의 상태 [" +this.dsReturn.getColumn(i, "CD_PO_STTS_NM")+"] \n";
        	}
        		
        	if(!this.gfn_isNull(msg))
        	{
        		gfnAlert(msg + "이므로 발주취소 할 수 없습니다.");
        		return;
        	}
        	
        	var poNoArr=new Array();
        	this.dsReturn.filter("");
        	this.dsReturn.set_enableevent(true);
        	
        	for(var i=0; i<this.dsReturn.getRowCount(); i++)
        	{
        		if(this.dsReturn.getColumn(i, "WRTR_ID") != application.gdsUserInfo.getColumn(0, "USER_ID"))
        		{
        			gfnAlert("담당자가 다르므로 발주취소 할 수 없습니다.");
        			return;
        		}
        		
        		poNoArr[i] = this.dsReturn.getColumn(i, "PO_NO");
        	}
        		
        	var sArg = { 
        					agv_poNoArr:poNoArr.toString()
        			   };	

        	gfnModalPop(this,"PopupCnclRsn", "BPOR::BPorCnclPopUp.xfdl", sArg, "fnPopCallBack",400,300);
        }

        /**
          	@function	btnPtnrChg_onclick()
         	@desc  		협력사변경
         */
        this.btnPtnrChg_onclick = function(obj,e)
        {
        	if(this.dsList.getColumn(this.dsList.rowposition, "WRTR_ID") != application.gdsUserInfo.getColumn(0, "USER_ID"))
        	{
        		gfnAlert("담당자가 다르므로 협력사변경 할 수 없습니다.");
        		return;
        	}
        	
        	var rtn = this.gfnGetChkRowString(this.dsList);	
        	if(!rtn) return;

        	this.ds_ptnrChgRow.loadXML(rtn);				
        	this.dsReturn.loadXML(rtn);
        	this.dsReturn.filter("CD_PO_STTS!='PO10SND' && CD_PO_STTS!='PO10REQ'");
        	
        	var msg="";
        	for(var i=0; i<this.dsReturn.getRowCount(); i++)
        	{
        		msg += "발주번호 ["+this.dsReturn.getColumn(i, "PO_NO")+"]의 상태 [" +this.dsReturn.getColumn(i, "CD_PO_STTS_NM")+"] \n";	
        	}	
        	
        	if(!this.gfn_isNull(msg))
        	{
        		gfnAlert(msg + "이므로 협력사를 변경할 수 없습니다.");
        		return;
        	}
        	
        	//협력업체 검색 팝업 호출	
        	var sArg = { 
        					agv_nm:" "
        			   };	
        	this.gfn_CPop_ComCorpSrch(sArg,"fnPopCallBack","PtnrChgSrch");	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.FormOninit, this);
            this.addEventHandler("onload", this.FormOnload, this);
            this.divViewCompCond01.edtPtnrNm.addEventHandler("onkeydown", this.fnKeydown, this);
            this.divViewCompCond01.edtMtrlNm.addEventHandler("onkeydown", this.fnKeydown, this);
            this.divViewCompCond01.edtMtrlNm.addEventHandler("ontextchanged", this.div_condition1_ed_ptnrNm_ontextchanged, this);
            this.divViewCompCond01.btnMtrl.addEventHandler("onclick", this.fnMtrlSearch, this);
            this.divViewCompCond01.btnPntr.addEventHandler("onclick", this.divViewCompCond01_btnPntr_onclick, this);
            this.divViewCompCond01.staTtl.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.divViewCompCond01.edtTtl.addEventHandler("onkeydown", this.fnKeydown, this);
            this.divViewCompCond01.staPoMtrl.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond01.staChrgrId.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond01.edtChrgrNm.addEventHandler("onkeydown", this.fnKeydown, this);
            this.divViewCompCond01.edtChrgrNm.addEventHandler("ontextchanged", this.fn_ontextchanged_event, this);
            this.divViewCompCond01.btnChrgr.addEventHandler("onclick", this.fnUserSearch, this);
            this.divViewCompCond01.staPoDay.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompBody00.grdList.addEventHandler("oncelldblclick", this.grdListOnCelldblclick, this);
            this.divViewCompBody00.btnPtnrChg.addEventHandler("onclick", this.btnPtnrChg_onclick, this);
            this.divViewCompBody00.btnPoCxl.addEventHandler("onclick", this.btnPoCxl_onclick, this);
            this.divViewCompBody00.btnChgRej.addEventHandler("onclick", this.btnChgRej_onclick, this);
            this.divViewCompBody00.btnPoCfm.addEventHandler("onclick", this.btnPoCfm_onclick, this);
            this.divViewCompBody00.btnCntrAdd.addEventHandler("onclick", this.btnCntrAdd_onclick, this);
            this.divViewCompCond00.staPoStts.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond00.staDocCtgr.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond00.staPoNo.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond00.edtPoNo.addEventHandler("onkeydown", this.fnKeydown, this);
            this.btnFold.addEventHandler("onclick", this.btnFold_onclick, this);

        };

        this.loadIncludeScript("BPorCfmList.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
