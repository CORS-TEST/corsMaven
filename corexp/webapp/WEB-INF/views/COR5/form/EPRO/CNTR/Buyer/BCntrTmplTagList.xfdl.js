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
                this.set_name("BSysCodeRsrc");
                this.set_titletext("계약서태그관리");
                this._setFormPosition(0,0,1200,769);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCondition", this);
            obj._setContents("<ColumnInfo><Column id=\"CNTR_TAG_NM\" size=\"256\" type=\"STRING\"/><Column id=\"CD_TAG_TYPE\" size=\"256\" type=\"STRING\"/><Column id=\"CNTR_TAG_COL\" size=\"256\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_TAG_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_TAG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TAG_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_TAG_COL\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_USE\" type=\"STRING\" size=\"256\"/><Column id=\"CRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CRT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_CHGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_CHG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TAG_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("staViewCompTitle00", "absolute", "0", "67", "254", "23", null, null, this);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("142");
            obj.set_text("태그리스트");
            this.addChild(obj.name, obj);

            obj = new Div("divViewSeach", "absolute", "0", "0", null, "43", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.getSetter("objNm").set("메인검색");
            obj.style.set_align("center");
            obj.set_taborder("143");
            this.addChild(obj.name, obj);
            obj = new Static("staRsrcNm", "absolute", "404", "10", "85", "24", null, null, this.divViewSeach);
            obj.getSetter("objNm").set("컬럼ID");
            obj.set_taborder("2");
            obj.set_text("컬럼ID");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.divViewSeach.addChild(obj.name, obj);
            obj = new Edit("edtCntrTagNm", "absolute", "103", "10", "281", "24", null, null, this.divViewSeach);
            obj.getSetter("objNm").set("리소스ID");
            obj.set_taborder("1");
            this.divViewSeach.addChild(obj.name, obj);
            obj = new Static("staCntrTagNm", "absolute", "5", "10", "93", "24", null, null, this.divViewSeach);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("objNm").set("태그명");
            obj.set_taborder("0");
            obj.set_text("태그명");
            this.divViewSeach.addChild(obj.name, obj);
            obj = new Combo("cboTagType", "absolute", "862", "10", "124", "24", null, null, this.divViewSeach);
            this.divViewSeach.addChild(obj.name, obj);
            var cboTagType_innerdataset = new Dataset("cboTagType_innerdataset", this.divViewSeach.cboTagType);
            cboTagType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">[전체]</Col></Row><Row><Col id=\"codecolumn\">header</Col><Col id=\"datacolumn\">header</Col></Row><Row><Col id=\"codecolumn\">grid</Col><Col id=\"datacolumn\">grid</Col></Row></Rows>");
            obj.set_innerdataset(cboTagType_innerdataset);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("objNm").set("타입");
            obj.set_taborder("5");
            obj = new Static("staRsrcLang", "absolute", "741", "10", "114", "24", null, null, this.divViewSeach);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("objNm").set("언어");
            obj.style.set_align("right middle");
            obj.set_taborder("4");
            obj.set_text("태그타입");
            this.divViewSeach.addChild(obj.name, obj);
            obj = new Edit("edtRsrcNm", "absolute", "493", "10", "219", "24", null, null, this.divViewSeach);
            obj.getSetter("objNm").set("리소스명");
            obj.set_taborder("3");
            this.divViewSeach.addChild(obj.name, obj);

            obj = new Div("divViewCompBody00", "absolute", "0", "92", "560", null, null, "28", this);
            obj.set_taborder("144");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "1", null, null, "0", "61", this.divViewCompBody00);
            obj.set_autofittype("col");
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
            obj.getSetter("f_mode").set("N");
            obj.getSetter("f_save").set("N");
            obj.getSetter("f_sort").set("N");
            obj.getSetter("f_totalCnt").set("N");
            obj.getSetter("objNm").set("검색결과 그리드");
            obj.set_taborder("8");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"171\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"태그명\"/><Cell col=\"2\" text=\"타입\"/><Cell col=\"3\" text=\"컬럼ID\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\"/><Cell col=\"1\" style=\"align:left middle;\" text=\"bind:CNTR_TAG_NM\"/><Cell col=\"2\" style=\"align:left middle;selectbackground:EXPR(gfnIsNull(VALIDATE) ? '' : VALIDATE=='N' ? 'antiquewhite' : 'aquamarine');\" text=\"bind:CD_TAG_TYPE\"/><Cell col=\"3\" style=\"align:left middle;\" text=\"bind:CNTR_TAG_COL\"/></Band></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "59", "0", "1", this.divViewCompBody00);
            obj.set_scrollbars("none");
            obj.set_taborder("9");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Div("divViewCompBody01", "absolute", "570", "93", null, null, "16", "28", this);
            obj.set_cssclass("div_WF_DetailBg");
            obj.getSetter("objNm").set("DIV-헤더 상세");
            obj.set_scrollbars("none");
            obj.style.set_background("#ffffffff");
            obj.set_taborder("145");
            this.addChild(obj.name, obj);
            obj = new Static("sta_upPgmId", "absolute", "371", "-1", "117", "33", null, null, this.divViewCompBody01);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("상위프로그램ID");
            obj.set_taborder("296");
            obj.set_text("상위프로그램ID");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Edit("edt_upPgmId", "absolute", "493", "4", "194", "23", null, null, this.divViewCompBody01);
            obj.set_cssclass("readonly_P");
            obj.set_enable("false");
            obj.getSetter("objNm").set("상위프로그램ID");
            obj.set_taborder("297");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "-1", null, "33", "0", null, this.divViewCompBody01);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("298");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staRsrcId", "absolute", "0", "-1", "117", "33", null, null, this.divViewCompBody01);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("태그명");
            obj.set_taborder("0");
            obj.set_text("태그명");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Edit("edtRsrcId", "absolute", "122", "4", "474", "23", null, null, this.divViewCompBody01);
            obj.getSetter("objNm").set("리소스ID");
            obj.set_readonly("false");
            obj.set_taborder("1");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "31", null, "33", "0", null, this.divViewCompBody01);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("301");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staTagType", "absolute", "0", "31", "117", "33", null, null, this.divViewCompBody01);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("태그타입");
            obj.set_taborder("2");
            obj.set_text("태그타입");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "95", null, "33", "0", null, this.divViewCompBody01);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("306");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staCrtrId", "absolute", "0", "95", "117", "33", null, null, this.divViewCompBody01);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("생성자");
            obj.set_taborder("8");
            obj.set_text("생성자");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Edit("edtCrtrId", "absolute", "122", "100", "160", "23", null, null, this.divViewCompBody01);
            obj.getSetter("objNm").set("생성자");
            obj.set_readonly("true");
            obj.set_taborder("9");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine03", "absolute", "0", "127", null, "33", "0", null, this.divViewCompBody01);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("311");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staLastChgrId", "absolute", "0", "127", "117", "33", null, null, this.divViewCompBody01);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("최종수정자");
            obj.set_taborder("12");
            obj.set_text("최종수정자");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Edit("edtLastChgrId", "absolute", "122", "132", "160", "23", null, null, this.divViewCompBody01);
            obj.getSetter("objNm").set("최중수정자");
            obj.set_readonly("true");
            obj.set_taborder("13");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staCrtrDt", "absolute", "288", "95", "117", "33", null, null, this.divViewCompBody01);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("생성일시");
            obj.set_taborder("10");
            obj.set_text("생성일시");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staLastChgDt", "absolute", "288", "127", "117", "33", null, null, this.divViewCompBody01);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("최종수정일시");
            obj.set_taborder("14");
            obj.set_text("최종수정일시");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Calendar("calCrtrDt", "absolute", "414", "100", "183", "23", null, null, this.divViewCompBody01);
            this.divViewCompBody01.addChild(obj.name, obj);
            obj.set_locale("en_US");
            obj.getSetter("objNm").set("생성일시");
            obj.set_readonly("true");
            obj.style.set_buttonsize("0");
            obj.set_taborder("11");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj = new Calendar("calLastChgDt", "absolute", "414", "132", "183", "23", null, null, this.divViewCompBody01);
            this.divViewCompBody01.addChild(obj.name, obj);
            obj.set_locale("en_US");
            obj.getSetter("objNm").set("최종수정일시");
            obj.set_readonly("true");
            obj.style.set_buttonsize("0");
            obj.set_taborder("15");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj = new Static("staViewCompLine04", "absolute", "0", "63", null, "33", "0", null, this.divViewCompBody01);
            obj.set_taborder("323");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staCntrTagCol", "absolute", "0", "63", "117", "33", null, null, this.divViewCompBody01);
            obj.set_taborder("4");
            obj.set_text("컬럼ID");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("컬럼ID");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Edit("edtCntrTagCol", "absolute", "122", "68", "160", "23", null, null, this.divViewCompBody01);
            obj.set_taborder("5");
            obj.set_readonly("false");
            obj.getSetter("objNm").set("컬럼ID");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staAltUse", "absolute", "288", "31", "117", "33", null, null, this.divViewCompBody01);
            obj.set_taborder("6");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("사용여부");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Combo("cboAltUse", "absolute", "414", "36", "183", "23", null, null, this.divViewCompBody01);
            this.divViewCompBody01.addChild(obj.name, obj);
            var cboAltUse_innerdataset = new Dataset("cboAltUse_innerdataset", this.divViewCompBody01.cboAltUse);
            cboAltUse_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">[선택]</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(cboAltUse_innerdataset);
            obj.set_taborder("7");
            obj.set_autoselect("true");
            obj.set_text("전체");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("사용여부");
            obj.set_index("0");
            obj = new Combo("cboTagType", "absolute", "122", "36", "160", "23", null, null, this.divViewCompBody01);
            this.divViewCompBody01.addChild(obj.name, obj);
            var cboTagType_innerdataset = new Dataset("cboTagType_innerdataset", this.divViewCompBody01.cboTagType);
            cboTagType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">[선택]</Col></Row><Row><Col id=\"codecolumn\">header</Col><Col id=\"datacolumn\">header</Col></Row><Row><Col id=\"codecolumn\">grid</Col><Col id=\"datacolumn\">grid</Col></Row></Rows>");
            obj.set_innerdataset(cboTagType_innerdataset);
            obj.set_taborder("324");
            obj.set_autoselect("true");
            obj.set_text("전체");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("사용여부");
            obj.set_index("0");

            obj = new Button("btnAddTag", "absolute", null, "66", "74", "21", "101", null, this);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("태그추가");
            obj.set_taborder("146");
            obj.set_text("태그추가");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelTag", "absolute", null, "66", "74", "21", "22", null, this);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("태그삭제");
            obj.set_taborder("147");
            obj.set_text("태그삭제");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.divViewSeach,
            	//-- Layout function
            	function(p) {
            		p.set_cssclass("div_WF_SearchBg");
            		p.getSetter("objNm").set("메인검색");
            		p.style.set_align("center");
            		p.set_taborder("143");

            	}
            );
            this.divViewSeach.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 560, 0, this.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("144");
            		p.set_text("Div00");

            	}
            );
            this.divViewCompBody00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 614, 648, this.divViewCompBody01,
            	//-- Layout function
            	function(p) {
            		p.set_cssclass("div_WF_DetailBg");
            		p.getSetter("objNm").set("DIV-헤더 상세");
            		p.set_scrollbars("none");
            		p.style.set_background("#ffffffff");
            		p.set_taborder("145");

            	}
            );
            this.divViewCompBody01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1200, 769, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("FrmTemplate100");
            		p.set_titletext("계약서태그관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("RSRC_ID","divViewSeach.edtCntrTagNm","value","dsCondition","CNTR_TAG_NM ");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("RSRC_NM","divViewSeach.edtRsrcNm","value","dsCondition","CNTR_TAG_COL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("CD_RSRC_LANG","divViewSeach.cboTagType","value","dsCondition","CD_TAG_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","divViewCompBody01.edtRsrcId","value","dsList","CNTR_TAG_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divViewCompBody01.edtCrtrId","value","dsList","CRTR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","divViewCompBody01.calCrtrDt","value","dsList","CRT_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","divViewCompBody01.edtLastChgrId","value","dsList","LAST_CHGR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","divViewCompBody01.calLastChgDt","value","dsList","LAST_CHG_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divViewSeachVi","divViewSeach","visible","dsObjBindVi","divViewSeach");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divViewSeachEn","divViewSeach","enable","dsObjBindEn","divViewSeach");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRsrcNmVi","divViewSeach.staRsrcNm","visible","dsObjBindVi","staRsrcNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRsrcNmEn","divViewSeach.staRsrcNm","enable","dsObjBindEn","staRsrcNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRsrcIdVi","divViewSeach.staCntrTagNm","visible","dsObjBindVi","staRsrcId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRsrcIdEn","divViewSeach.staCntrTagNm","enable","dsObjBindEn","staRsrcId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRsrcLangVi","divViewSeach.staRsrcLang","visible","dsObjBindVi","staRsrcLang");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRsrcLangEn","divViewSeach.staRsrcLang","enable","dsObjBindEn","staRsrcLang");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPagingVi","divViewCompBody00.divPaging","visible","dsObjBindVi","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPagingEn","divViewCompBody00.divPaging","enable","dsObjBindEn","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sta_upPgmIdVi","divViewCompBody01.sta_upPgmId","visible","dsObjBindVi","sta_upPgmId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sta_upPgmIdEn","divViewCompBody01.sta_upPgmId","enable","dsObjBindEn","sta_upPgmId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edt_upPgmIdVi","divViewCompBody01.edt_upPgmId","visible","dsObjBindVi","edt_upPgmId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edt_upPgmIdEn","divViewCompBody01.edt_upPgmId","readonly","dsObjBindEn","edt_upPgmId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCrtrIdVi","divViewCompBody01.staCrtrId","visible","dsObjBindVi","staCrtrId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCrtrIdEn","divViewCompBody01.staCrtrId","enable","dsObjBindEn","staCrtrId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCrtrIdVi","divViewCompBody01.edtCrtrId","visible","dsObjBindVi","edtCrtrId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCrtrIdEn","divViewCompBody01.edtCrtrId","readonly","dsObjBindEn","edtCrtrId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staLastChgrIdVi","divViewCompBody01.staLastChgrId","visible","dsObjBindVi","staLastChgrId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staLastChgrIdEn","divViewCompBody01.staLastChgrId","enable","dsObjBindEn","staLastChgrId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtLastChgrIdVi","divViewCompBody01.edtLastChgrId","visible","dsObjBindVi","edtLastChgrId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtLastChgrIdEn","divViewCompBody01.edtLastChgrId","readonly","dsObjBindEn","edtLastChgrId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCrtrDtVi","divViewCompBody01.staCrtrDt","visible","dsObjBindVi","staCrtrDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCrtrDtEn","divViewCompBody01.staCrtrDt","enable","dsObjBindEn","staCrtrDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staLastChgDtVi","divViewCompBody01.staLastChgDt","visible","dsObjBindVi","staLastChgDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staLastChgDtEn","divViewCompBody01.staLastChgDt","enable","dsObjBindEn","staLastChgDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calCrtrDtVi","divViewCompBody01.calCrtrDt","visible","dsObjBindVi","calCrtrDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calCrtrDtEn","divViewCompBody01.calCrtrDt","readonly","dsObjBindEn","calCrtrDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calLastChgDtVi","divViewCompBody01.calLastChgDt","visible","dsObjBindVi","calLastChgDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calLastChgDtEn","divViewCompBody01.calLastChgDt","readonly","dsObjBindEn","calLastChgDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","divViewCompBody01.staCntrTagCol","visible","dsObjBindVi","staCrtrId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","divViewCompBody01.staCntrTagCol","enable","dsObjBindEn","staCrtrId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","divViewCompBody01.edtCntrTagCol","value","dsList","CNTR_TAG_COL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","divViewCompBody01.staAltUse","visible","dsObjBindVi","staCrtrDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","divViewCompBody01.staAltUse","enable","dsObjBindEn","staCrtrDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","divViewCompBody01.cboAltUse","value","dsList","ALT_USE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divViewCompBody01.cboTagType","value","dsList","CD_TAG_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
        };
        
        // User Script
        this.registerScript("BCntrTmplTagList.xfdl", function(exports) {
        /**
         * @파일명       	: BCntrTmplTagList.xfdl
         * @생성자       	: 한의봉
         * @생성일자     	: 2019. 03. 12.
         * @설명			: 일단 되는것만 볼려고 리스트를 다넘겨서 그냥 하고 있음.난중에 수정해야됨.
         * @최종수정자		: 
         * @최종수정일자	: 
        */  

        
        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {

        	var param = [
        					{code:"CM34"} // 언어
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
        	//this.fnSetCode();
        }

        
        /**
          * @함수명	: fnFormOnload
          * @desc     	: 폼 onload이벤트
          */
        this.fnFormOnload = function(obj,e)
        {	
        	gfnSetObj("A");
        	
        	gfnSetGrdFunc(this.divViewCompBody00.grdList, this.divViewCompBody00.divPaging, this);
        	
        	this.dsCondition.addRow();
        	this.dsCondition.setColumn(0, "CD_TAG_TYPE", "");
        	
        	this.fnSearch();
        }

        /**
        	@함수명	fnSearch()
        	@desc   	조회 프로세스
        */  
        this.fnSearch = function()
        {
        	var sSvcID = "readCntrTag";
        	var sController = "epro.cntr.service.BCntrService.readCntrTag";
        	var sInDatasets = "dsCondition=dsCondition"
        	var sOutDatasets = "dsList=dsTagList";
        	var sCallbackFunc = "fnTrCallBack";
        	var	oPaging = [	
        					{inDs:this.dsCondition, grid:this.divViewCompBody00.grdList, divPaging:this.divViewCompBody00.divPaging}
        				];
        				
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc, oPaging);
        }

        
        /**
        	@함수명	fnPreSave()
        	@desc   	저장전 처리
        */ 
        this.fnPreSave = function()
        { 
        	return true;
        }

        
        /**
        	@함수명	fnSave()
        	@desc   	저장
        */ 
        this.fnSave = function()
        {
        	if(!this.fnPreSave())return;
        	
        	var sSvcID = "saveCntrTag";
        	var sController = "epro.cntr.service.BCntrService.saveCntrTag";
        	var sInDatasets = "dsList=dsList:A";
        	var sOutDatasets = "dsCheckId=dsCheckId";
        	var sCallbackFunc = "fnTrCallBack";	
        					
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        
        /**
        	@함수명	fnTrCallBack()	
        	@desc   	Transaction Callback함수
        */      
        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	if(strErrCd < 0) return;	
        	
        	switch(strSvcID){
        		case "readCntrTag" :

        		break;
        		
        		case "saveCntrTag" :
        			gfnAlert("저장되었습니다.");
        			this.fnSearch();
        		break;

        		
        		default:
        		break;	
        	}
        }

        /**
        	@함수명	fnKeydown()	
        	@desc   	키입력 이벤트
        */  
        this.fnKeydown = function(obj,e)
        {
        	if(e.keycode == 13) { // Enter
        		if(obj.name == "edtCntrTagNm") {
        			this.fnSearch();
        		} else if(obj.name == "edtRsrcNm") {
        			this.fnSearch();
        		}
        	}
        }

        /**
        	@함수명	fnAddTag()	
        	@desc   	태그추가
        */  
        this.fnAddTag = function(obj,e)
        {
        	var nRow = this.dsList.addRow();
        	this.dsList.setColumn(nRow,"CD_TAG_TYPE","header");
        	this.dsList.setColumn(nRow,"ALT_USE","Y");
        	
        }

        /**
        	@함수명	fnDelRsrc()	
        	@desc   	리소스삭제 버튼
        */  
        this.fnDelTag = function(obj,e)
        {
        	if(!gfnConfirm("삭제하시겠습니까?")) return;
        	gfnDsChkDel(this.dsList,"CHECKED")
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.divViewSeach.edtCntrTagNm.addEventHandler("onkeydown", this.fnKeydown, this);
            this.divViewSeach.edtRsrcNm.addEventHandler("onkeydown", this.fnKeydown, this);
            this.btnAddTag.addEventHandler("onclick", this.fnAddTag, this);
            this.btnDelTag.addEventHandler("onclick", this.fnDelTag, this);

        };

        this.loadIncludeScript("BCntrTmplTagList.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
