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
                this.set_titletext("리소스관리");
                this._setFormPosition(0,0,1200,769);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsRsrc", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM34", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCondition", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_RSRC_LANG\" size=\"256\" type=\"STRING\"/><Column id=\"RSRC_NM\" size=\"256\" type=\"STRING\"/><Column id=\"RSRC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"LANG_CD\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCheckId", this);
            obj._setContents("<ColumnInfo><Column id=\"RSRC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"VALIDATE\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRsrcLang", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRsrcDel", this);
            obj._setContents("<ColumnInfo><Column id=\"RSRC_ID\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTmp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("staViewCompTitle00", "absolute", "0", "67", "254", "23", null, null, this);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("142");
            obj.set_text("리소스조회");
            this.addChild(obj.name, obj);

            obj = new Div("divViewSeach", "absolute", "0", "0", null, "43", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.getSetter("objNm").set("메인검색");
            obj.style.set_align("center");
            obj.set_taborder("143");
            this.addChild(obj.name, obj);
            obj = new Static("staRsrcNm", "absolute", "404", "10", "85", "24", null, null, this.divViewSeach);
            obj.getSetter("objNm").set("리소스명");
            obj.set_taborder("10");
            obj.set_text("리소스명");
            this.divViewSeach.addChild(obj.name, obj);
            obj = new Edit("edRsrcId", "absolute", "103", "10", "281", "24", null, null, this.divViewSeach);
            obj.getSetter("objNm").set("리소스ID");
            obj.set_taborder("11");
            this.divViewSeach.addChild(obj.name, obj);
            obj = new Static("staRsrcId", "absolute", "5", "10", "93", "24", null, null, this.divViewSeach);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("objNm").set("리소스ID");
            obj.set_taborder("12");
            obj.set_text("리소스ID");
            this.divViewSeach.addChild(obj.name, obj);
            obj = new Combo("cboRsrcLang", "absolute", "862", "10", "124", "24", null, null, this.divViewSeach);
            this.divViewSeach.addChild(obj.name, obj);
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_innerdataset("dsCdCM34");
            obj.getSetter("objNm").set("언어");
            obj.set_taborder("13");
            obj = new Static("staRsrcLang", "absolute", "741", "10", "114", "24", null, null, this.divViewSeach);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("objNm").set("언어");
            obj.style.set_align("right middle");
            obj.set_taborder("14");
            obj.set_text("언어");
            this.divViewSeach.addChild(obj.name, obj);
            obj = new Edit("edtRsrcNm", "absolute", "493", "10", "219", "24", null, null, this.divViewSeach);
            obj.getSetter("objNm").set("리소스명");
            obj.set_taborder("15");
            this.divViewSeach.addChild(obj.name, obj);

            obj = new Div("divViewCompBody00", "absolute", "0", "92", "560", null, null, "28", this);
            obj.set_taborder("144");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "1", null, null, "0", "61", this.divViewCompBody00);
            obj.set_autofittype("col");
            obj.set_binddataset("dsRsrc");
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
            obj.getSetter("f_totalCnt").set("Y");
            obj.getSetter("objNm").set("검색결과 그리드");
            obj.set_taborder("8");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"346\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"코드\"/><Cell col=\"1\" expr=\"\" text=\"코드명\"/></Band><Band id=\"body\"><Cell style=\"align:left middle;background:EXPR(gfnIsNull(VALIDATE) ? '' : VALIDATE=='N' ? 'antiquewhite' : 'aquamarine');background2:EXPR(gfnIsNull(VALIDATE) ? '' : VALIDATE=='N' ? 'antiquewhite' : 'aquamarine');selectbackground: ;\" text=\"bind:RSRC_ID\"/><Cell col=\"1\" style=\"align:left middle;background:EXPR(gfnIsNull(VALIDATE) ? '' : VALIDATE=='N' ? 'antiquewhite' : 'aquamarine');background2:EXPR(gfnIsNull(VALIDATE) ? '' : VALIDATE=='N' ? 'antiquewhite' : 'aquamarine');selectbackground:EXPR(gfnIsNull(VALIDATE) ? '' : VALIDATE=='N' ? 'antiquewhite' : 'aquamarine');\" text=\"bind:RSRC_NM\"/></Band></Format></Formats>");
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
            obj.getSetter("objNm").set("리소스ID");
            obj.set_taborder("299");
            obj.set_text("리소스ID");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Edit("edtRsrcId", "absolute", "122", "4", "428", "23", null, null, this.divViewCompBody01);
            obj.getSetter("objNm").set("리소스ID");
            obj.set_readonly("true");
            obj.set_taborder("300");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "31", null, "33", "0", null, this.divViewCompBody01);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("301");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staRsrcNm", "absolute", "0", "31", "117", "33", null, null, this.divViewCompBody01);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("리소스명");
            obj.set_taborder("302");
            obj.set_text("리소스명");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Edit("edtRsrcNm", "absolute", "122", "36", "474", "23", null, null, this.divViewCompBody01);
            obj.getSetter("objNm").set("리소스명");
            obj.set_taborder("303");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "63", null, "33", "0", null, this.divViewCompBody01);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("306");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staCrtrId", "absolute", "0", "63", "117", "33", null, null, this.divViewCompBody01);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("생성자");
            obj.set_taborder("307");
            obj.set_text("생성자");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Edit("edtCrtrId", "absolute", "122", "68", "149", "23", null, null, this.divViewCompBody01);
            obj.getSetter("objNm").set("생성자");
            obj.set_readonly("true");
            obj.set_taborder("308");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine03", "absolute", "0", "95", null, "33", "0", null, this.divViewCompBody01);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("311");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staLastChgrId", "absolute", "0", "95", "117", "33", null, null, this.divViewCompBody01);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("최종수정자");
            obj.set_taborder("312");
            obj.set_text("최종수정자");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Edit("edtLastChgrId", "absolute", "122", "100", "149", "23", null, null, this.divViewCompBody01);
            obj.getSetter("objNm").set("최중수정자");
            obj.set_readonly("true");
            obj.set_taborder("313");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staCrtrDt", "absolute", "288", "63", "117", "33", null, null, this.divViewCompBody01);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("생성일시");
            obj.set_taborder("319");
            obj.set_text("생성일시");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staLastChgDt", "absolute", "288", "95", "117", "33", null, null, this.divViewCompBody01);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("최종수정일시");
            obj.set_taborder("320");
            obj.set_text("최종수정일시");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Calendar("calCrtrDt", "absolute", "414", "68", "183", "23", null, null, this.divViewCompBody01);
            this.divViewCompBody01.addChild(obj.name, obj);
            obj.set_locale("en_US");
            obj.getSetter("objNm").set("생성일시");
            obj.set_readonly("true");
            obj.style.set_buttonsize("0");
            obj.set_taborder("321");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj = new Calendar("calLastChgDt", "absolute", "414", "100", "183", "23", null, null, this.divViewCompBody01);
            this.divViewCompBody01.addChild(obj.name, obj);
            obj.getSetter("objNm").set("최종수정일시");
            obj.set_readonly("true");
            obj.style.set_buttonsize("0");
            obj.set_taborder("322");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj = new Grid("grdRsrcLang", "absolute", "0%", "138", null, "188", "0.16%", null, this.divViewCompBody01);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsRsrcLang");
            obj.set_taborder("323");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"428\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"언어\"/><Cell col=\"1\" text=\"언어명\"/></Band><Band id=\"body\"><Cell style=\"align:left middle;\" text=\"bind:CD_NM_LO\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" style=\"align:left middle;\" text=\"bind:RSRC_NM\" editlimit=\"2000\" editlengthunit=\"ascii\"/></Band></Format></Formats>");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Button("btnReadId", "absolute", "550", "4", "46", "23", null, null, this.divViewCompBody01);
            obj.set_taborder("324");
            obj.set_text("MaxID");
            this.divViewCompBody01.addChild(obj.name, obj);

            obj = new Button("btnAddRsrc", "absolute", null, "64", "76", "24", "97", null, this);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("리소스추가");
            obj.set_taborder("146");
            obj.set_text("리소스추가");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelRsrc", "absolute", null, "64", "76", "24", "16", null, this);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("리소스삭제");
            obj.set_taborder("147");
            obj.set_text("리소스삭제");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "570", "66", "288", "21", null, null, this);
            obj.set_readonly("true");
            obj.style.set_background("white");
            obj.style.set_border("0 solid #d5d5d5ff");
            obj.style.set_color("#ff0000ff");
            obj.set_taborder("151");
            obj.set_value("\"\\n\" (줄바꿈)은 '▩' 로 작성해 주시기 바랍니다. ");
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
            		p.set_titletext("리소스관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("RSRC_ID","divViewSeach.edRsrcId","value","dsCondition","RSRC_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("RSRC_NM","divViewSeach.edtRsrcNm","value","dsCondition","RSRC_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("CD_RSRC_LANG","divViewSeach.cboRsrcLang","value","dsCondition","CD_RSRC_LANG");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","divViewCompBody01.edtRsrcId","value","dsRsrc","RSRC_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divViewCompBody01.edtRsrcNm","value","dsRsrc","RSRC_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divViewCompBody01.edtCrtrId","value","dsRsrc","CRTR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","divViewCompBody01.calCrtrDt","value","dsRsrc","CRT_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","divViewCompBody01.edtLastChgrId","value","dsRsrc","LAST_CHGR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","divViewCompBody01.calLastChgDt","value","dsRsrc","LAST_CHG_DT");
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
            obj = new BindItem("edRsrcIdVi","divViewSeach.edRsrcId","visible","dsObjBindVi","edRsrcId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edRsrcIdEn","divViewSeach.edRsrcId","readonly","dsObjBindEn","edRsrcId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRsrcIdVi","divViewSeach.staRsrcId","visible","dsObjBindVi","staRsrcId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRsrcIdEn","divViewSeach.staRsrcId","enable","dsObjBindEn","staRsrcId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboRsrcLangVi","divViewSeach.cboRsrcLang","visible","dsObjBindVi","cboRsrcLang");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboRsrcLangEn","divViewSeach.cboRsrcLang","readonly","dsObjBindEn","cboRsrcLang");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRsrcLangVi","divViewSeach.staRsrcLang","visible","dsObjBindVi","staRsrcLang");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRsrcLangEn","divViewSeach.staRsrcLang","enable","dsObjBindEn","staRsrcLang");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRsrcNmVi","divViewSeach.edtRsrcNm","visible","dsObjBindVi","edtRsrcNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRsrcNmEn","divViewSeach.edtRsrcNm","readonly","dsObjBindEn","edtRsrcNm");
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
            obj = new BindItem("staRsrcId_4Vi","divViewCompBody01.staRsrcId","visible","dsObjBindVi","staRsrcId_4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRsrcId_4En","divViewCompBody01.staRsrcId","enable","dsObjBindEn","staRsrcId_4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRsrcIdVi","divViewCompBody01.edtRsrcId","visible","dsObjBindVi","edtRsrcId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRsrcIdEn","divViewCompBody01.edtRsrcId","readonly","dsObjBindEn","edtRsrcId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRsrcNm_2Vi","divViewCompBody01.staRsrcNm","visible","dsObjBindVi","staRsrcNm_2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRsrcNm_2En","divViewCompBody01.staRsrcNm","enable","dsObjBindEn","staRsrcNm_2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRsrcNm_7Vi","divViewCompBody01.edtRsrcNm","visible","dsObjBindVi","edtRsrcNm_7");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRsrcNm_7En","divViewCompBody01.edtRsrcNm","readonly","dsObjBindEn","edtRsrcNm_7");
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
            obj = new BindItem("btnReadIdVi","divViewCompBody01.btnReadId","visible","dsObjBindVi","btnReadId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnReadIdEn","divViewCompBody01.btnReadId","enable","dsObjBindEn","btnReadId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnAddRsrcVi","btnAddRsrc","visible","dsObjBindVi","btnAddRsrc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnAddRsrcEn","btnAddRsrc","enable","dsObjBindEn","btnAddRsrc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnDelRsrcVi","btnDelRsrc","visible","dsObjBindVi","btnDelRsrc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnDelRsrcEn","btnDelRsrc","enable","dsObjBindEn","btnDelRsrc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Edit00Vi","Edit00","visible","dsObjBindVi","Edit00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Edit00En","Edit00","readonly","dsObjBindEn","Edit00");
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
        this.registerScript("BSysRsrc.xfdl", function(exports) {
        /**
         * @파일명       	: BSysCodeRsrc.xfdl
         * @생성자       	: 안성민
         * @생성일자     	: 2017. 10. 20.
         * @설명			: 리소스관리
         * @최종수정자		: 안성민
         * @최종수정일자	: 2017. 10. 20.
        */  

        //중복체크여부
        this.checkId = false;

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
        	this.fnSetCode();
        }

        
        /**
          * @함수명	: fnFormOnload
          * @desc     	: 폼 onload이벤트
          */
        this.fnFormOnload = function(obj,e)
        {	
        	
        	var sArgEx = {
        					isTran:"Y", tranNm:"BSysService.readSysRsrc", dsParam:this.dsCondition
        				}
        	gfnSetGrdFunc(this.divViewCompBody00.grdList, this.divViewCompBody00.divPaging, this, sArgEx);
        	
        	gfnSetObj("A");
        	this.dsCondition.addRow();
        	this.dsCondition.setColumn(0, "RSRC_ID", "")
        	this.dsCondition.setColumn(0, "RSRC_NM", "")
        	this.dsCondition.setColumn(0, "CD_RSRC_LANG", "")
        	this.fnSearch();
        }

        /**
        	@함수명	fnPreSave()
        	@desc   	저장전 처리
        */ 
        this.fnPreSave = function()
        { 
        	this.dsCheckId.deleteAll();
        	this.dsRsrcDel.deleteAll();
        	var arr = [];
        	var dataUpdateCheck = false;
        		
        	for(var i = 0 ; i < this.dsRsrc.rowcount ; i++){
        		if(gfnIsNull(this.dsRsrc.getColumn(i,"RSRC_ID"))){
        			var msg = gfnMultiLabel("EPRO_LABEL_00768");//"리소스ID를 입력해주세요";
        			var type = gfnMultiLabel("EPRO_LABEL_00770");//"미입력";
        			var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        			arr.push(objParam);	
        		}
        		
        		if(gfnIsNull(this.dsRsrc.getColumn(i,"RSRC_NM"))){
        			var msg = gfnMultiLabel("EPRO_LABEL_00769");//"리소스명을 입력해주세요";
        			var type = gfnMultiLabel("EPRO_LABEL_00770");//"미입력";
        			var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        			arr.push(objParam);	
        		}
        		
        		if(this.dsRsrc.getRowType(i) == 2) { // 추가
        			var nRow  = this.dsCheckId.addRow();
        			this.dsCheckId.setColumn(nRow, "RSRC_ID", this.dsRsrc.getColumn(i,"RSRC_ID"));
        			this.dsCheckId.setColumn(nRow, "VALIDATE", this.dsRsrc.getColumn(i,"VALIDATE"))
        		} else if(this.dsRsrc.getRowType(i) == 4) {	// 수정
        			dataUpdateCheck = true;
        		} else if(this.dsRsrc.getRowType(i) == 8) { //삭제
        			dataUpdateCheck = true;
        		}
        	}
        	for(var i=0; i<this.dsRsrc.getDeletedRowCount(); i++) {
        		var nRow = this.dsRsrcDel.addRow();
        		this.dsRsrcDel.setColumn(nRow, "RSRC_ID", this.dsRsrc.getDeletedColumn(i, "RSRC_ID"));
        	}
        	
        	if(!gfnValidate(this, false, arr)) return false;
        	
        	for(var i = 0 ; i < this.dsRsrcLang.rowcount ; i++){
        		if(this.dsRsrcLang.getRowType(i) == 4) {	
        			dataUpdateCheck = true;
        		} else if(this.dsRsrcLang.getRowType(i) == 8) {	
        			dataUpdateCheck = true;
        		}
        	}
        	if(this.dsRsrc.getDeletedRowCount() > 0) { //삭제된 로우 
        			dataUpdateCheck = true;
        	}	
        		
        	if(this.dsCheckId.rowcount > 0){
        		this.fnCheckRsrcId();		
        	} else {
        		if(dataUpdateCheck) {
        			this.checkId = true;
        			this.fnSave();
        		} else {
        			gfnAlert("EPRO_LABEL_00771");
        			
        		}
        	}
        }

        /**
        	@함수명	fnSave()
        	@desc   	저장
        */ 
        this.fnSave = function()
        {
        	if(!this.checkId) {
        		this.fnPreSave();
        	} else {
        		if(!gfnConfirm("EPRO_LABEL_00001")) {
        			this.checkId=false; 
        			return;
        		}
        		
        		var sSvcID = "reCheckSysRsrcId";
        		var sController = "epro.sys.service.BSysService.checkSysRsrcId";
        		var sInDatasets = "dsCheckId=dsCheckId dsRsrcDel=dsRsrcDel";
        		var sOutDatasets = "dsCheckId=dsCheckId";
        		var sCallbackFunc = "fnTrCallBack";	
        						
        		gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        	}
        	
        }

        /**
        	@함수명	fnSearch()
        	@desc   	조회 프로세스
        */  
        this.fnSearch = function()
        {
        	var sSvcID = "readSysRsrc";
        	var sController = "epro.sys.service.BSysService.readSysRsrc";
        	var sInDatasets = "dsCondition=dsCondition"
        	var sOutDatasets = "dsRsrc=dsRsrc dsRsrcLang=dsRsrcLang dsCondition=dsCondition";
        	var sCallbackFunc = "fnTrCallBack";
        	var	oPaging = [	
        					{inDs:this.dsCondition, grid:this.divViewCompBody00.grdList, divPaging:this.divViewCompBody00.divPaging}
        				];
        				
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc, oPaging);
        }

        /**
        	@함수명	fnCheckRowView	
        	@desc   	체크가완료된 ROW 중복여부 표시
        */  
        this.fnCheckRowView = function()
        {
        	this.dsRsrc.set_enableevent(false)
        	for(var i=0; i<this.dsCheckId.getRowCount(); i++) {
        		this.dsRsrc.filter("RSRC_ID=='" + this.dsCheckId.getColumn(i, "RSRC_ID") + "'")
        		for(var x=0; x<this.dsRsrc.getRowCount(); x++) {
        			if(2 == this.dsRsrc.getRowType(x)) {
        				this.dsRsrc.setColumn(x,"VALIDATE", this.dsCheckId.getColumn(i, "VALIDATE"));
        			}
        		}
        	}
        	this.dsRsrc.filter("")
        	this.dsRsrc.set_enableevent(true)	
        }

        /**
        	@함수명	fnValidateView	
        	@desc   	중복된 RSRC_ID를 팝업으로 표시
        */ 
        this.fnValidateView = function(str)
        {
        	var arrMsg = str.split(",");
        	  var arr = [];
        	for(var i = 0 ; i < arrMsg.length-1 ; i++){
        		var msg = "'" + arrMsg[i] + gfnMultiLabel("EPRO_LABEL_00757"); //"' 중복";
        		var type = gfnMultiLabel("EPRO_LABEL_00757"); //"중복";
        		var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        		arr.push(objParam);
        	}
        	if(!gfnValidate(this, false, arr)) return false;
        }

        /**
        	@함수명	fnTrCallBack()	
        	@desc   	Transaction Callback함수
        */      
        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	switch(strSvcID){
        		case "readSysRsrc" :
        			this.dsRsrcLang.loadXML(strErrMsg);
        			this.dsRsrcLang.filter("RSRC_ID=='" + this.dsRsrc.getColumn(this.dsRsrc.rowposition, "RSRC_ID") + "'");
        		break;
        		
        		case "saveSysRsrc" :
        			this.checkId = false;
        			gfnAlert(strErrMsg);
        			this.fnSearch();
        		break;
        		
        		case "readRsrcIdMax" :
        			this.dsRsrc.setColumn(this.dsRsrc.rowposition, "RSRC_ID", strErrMsg);
        		break;
        		
        		case "reCheckSysRsrcId" :
        			if("succ" == strErrMsg) {
        				var sSvcID = "saveSysRsrc";
        				var sController = "epro.sys.service.BSysService.saveSysRsrc";
        				var sInDatasets = "dsRsrc=dsRsrc:A dsRsrcLang=dsRsrcLang:A";
        				var sOutDatasets = "";
        				var sCallbackFunc = "fnTrCallBack";	
        								
        				gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        			} else {
        				this.fnCheckRowView();
        				this.fnValidateView(strErrMsg);	
        				this.checkId = false;								
        			}
        		break;
        		
        		case "checkSysRsrcId" :
        			this.fnCheckRowView();
        		
        			if("succ" == strErrMsg) {
        				this.checkId = true;
        				this.fnSave();
        			} else {
        				this.checkId = false;
        				this.fnValidateView(strErrMsg);		
        			}
        		break;
        		
        		case "readRsrcNewVer" :
        			for(var i=0;i<this.dsTmp.getRowCount();i++){
        				this.dsTmp.setColumn(i,"LABEL_STR",nexacro.replaceAll(nexacro.replaceAll(this.dsTmp.getColumn(i,"LABEL_STR"),"<","▨"),">","▧"));
        			}
        			
        			this.dsTmp.addConstColumn("VERSION");
        			this.dsTmp.setConstColumn("VERSION",application.gdsLabel.getConstColumn("VERSION"));
        			
        			var rtnLabel = application.setPrivateProfile("_gdsLabel", nexacro.wrapQuote(this.dsTmp.saveXML()));
        			
        			var selectedLangCd = application.gdsUserInfo.getColumn(0,"LANG_CD");
        			
        			var nRow = this.dsTmp.findRow("CD_ID", selectedLangCd);
        			application.gdsLabel.loadXML(nexacro.replaceAll(nexacro.replaceAll(this.dsTmp.getColumn(nRow, "LABEL_STR"),"▨","<"),"▧",">"));
        			application.gdsLabel.addConstColumn("VERSION");
        			application.gdsLabel.setConstColumn("VERSION",this.labelVer);
        			
        			var msg = "";
        			
        			if(rtnLabel) msg = "EPRO_LABEL_01402";
        			else msg ="EPRO_LABEL_01403";
        			
        			gfnAlert(msg);

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
        		if(obj.name == "edtRsrcNm") {
        			this.dsCondition.setColumn(0, "RSRC_NM", obj.value);
        		} else if(obj.name == "edRsrcId") {
        			this.dsCondition.setColumn(0, "RSRC_ID", obj.value);
        		}
        		this.fnSearch();
        	}
        }

        /**
        	@함수명	fnAddRsrc()	
        	@desc   	리소스추가 버튼
        */  
        this.fnAddRsrc = function(obj,e)
        {
        	var nRow = this.dsRsrc.insertRow(0);
        	this.dsRsrc.setColumn(nRow, "CD_RSRC_LANG", this.divViewSeach.cboRsrcLang.value);
        	this.dsRsrc.setColumn(nRow, "VALIDATE", "N");
        	
        	this.fnAddRsrcLang(nRow);
        }

        /**
        	@함수명	fnAddRsrcLang()	
        	@desc   	리소스언어 추가
        */  
        this.fnAddRsrcLang = function()
        {
        	this.dsRsrcLang.set_enableevent(false);
        	this.dsRsrcLang.filter("");
        	var tempKey = gfnMakeTempKey();
        	this.dsRsrc.setColumn(nRow, "TEMPKEY", tempKey);
        	for(var i=0; i<this.dsCdCM34.getRowCount(); i++) {
        		if(this.dsCdCM34.getColumn(i, "CD_ID") != this.divViewSeach.cboRsrcLang.value) {
        			var nRow = this.dsRsrcLang.addRow();
        			this.dsRsrcLang.setColumn(nRow, "TEMPKEY", tempKey)
        			this.dsRsrcLang.setColumn(nRow, "CD_ID", this.dsCdCM34.getColumn(i, "CD_ID"))
        			this.dsRsrcLang.setColumn(nRow, "CD_NM_LO", this.dsCdCM34.getColumn(i, "CD_NM_LO"))
        			this.dsRsrcLang.setColumn(nRow, "CD", this.dsCdCM34.getColumn(i, "CD"))
        		}
        		
        	}
        	this.dsRsrcLang.set_enableevent(true);
        	this.fnOnrowposchanged()
        }

        /**
        	@함수명	fnDelRsrc()	
        	@desc   	리소스삭제 버튼
        */  
        this.fnDelRsrc = function(obj,e)
        {
        	if(!gfnConfirm("EPRO_LABEL_928")) return;
        	this.fnDsFilter();
        	this.dsRsrcLang.deleteAll();
        	this.dsRsrc.deleteRow(this.dsRsrc.rowposition);
        }

        /**
        	@함수명	fnOnrowposchanged()	
        	@desc   	Row의 상태가 신규일때만 수정가능
        */  
        this.fnOnrowposchanged = function(obj,e)
        {
        	if("2" == this.dsRsrc.getRowType(this.dsRsrc.rowposition)) {
        		this.divViewCompBody01.edtRsrcId.set_readonly(false)
        		this.divViewCompBody01.btnReadId.set_enable(true);
        		this.divViewCompBody01.edtRsrcId.set_style("background:'antiquewhite'");
        	} else {
        		this.divViewCompBody01.edtRsrcId.set_readonly(true);
        		this.divViewCompBody01.btnReadId.set_enable(false);
        		this.divViewCompBody01.edtRsrcId.set_style("background:'#f4f4f4ff'");
        	}
        	
        	this.fnDsFilter();
        }

        /**
        	@함수명	fnDsFilter()	
        	@desc   	언어 필터
        */ 
        this.fnDsFilter = function()
        {
        	if(this.dsRsrc.getRowType(this.dsRsrc.rowposition) == "2") {
        		this.dsRsrcLang.filter("TEMPKEY=='" + this.dsRsrc.getColumn(this.dsRsrc.rowposition, "TEMPKEY") + "'");
        	} else {
        		this.dsRsrcLang.filter("RSRC_ID=='" + this.dsRsrc.getColumn(this.dsRsrc.rowposition, "RSRC_ID") + "' && TEMPKEY==''");
        	}
        }

        /**
        	@함수명	fnGrdListOncellclick()	
        	@desc   	그리드 원클릭
        */  
        this.fnGrdListOncellclick = function(obj,e)
        {
        	this.fnDsFilter();
        }

        /**
        	@함수명	fnOncolumnchanged()	
        	@desc   	
        */
        this.fnOncolumnchanged = function(obj,e)
        {
        	if("RSRC_ID" == e.columnid) {
        		this.fnDsFilter();
        		for(var i=0; i<this.dsRsrcLang.getRowCount(); i++) {
        			this.dsRsrcLang.setColumn(i, "RSRC_ID", this.dsRsrc.getColumn(e.row, "RSRC_ID"));
        		}
        	}
        }

        /**
        	@함수명	fnCboRsrcLangOnitemChanged()	
        	@desc   	언어콤보 변경시 조회
        */
        this.fnCboRsrcLangOnitemChanged = function(obj,e)
        {
        	obj.updateToDataset();
        	this.fnSearch();
        }

        /**
        	@함수명	fnCboRsrcLangOnitemChanged()	
        	@desc   	언어콤보 변경시 조회
        */
        this.fnOnColumnChanged = function(obj,e)
        {
        	this.fnDsFilter();
        	this.dsRsrcLang.set_enableevent(false);
        	for(var i=0; i<this.dsRsrcLang.getRowCount(); i++) {
        		this.dsRsrcLang.setColumn(i, "RSRC_ID", this.dsRsrc.getColumn(this.dsRsrc.rowposition, "RSRC_ID"))
        	}
        	this.dsRsrcLang.set_enableevent(true);
        }

        /**
        	@함수명	fnBtnMaxIdOnclick()	
        	@desc   	리소스 ID생성
        */
        this.fnBtnMaxIdOnclick = function(obj,e)
        {
        	var sSvcID = "readRsrcIdMax";
        	var sController = "epro.sys.service.BSysService.readRsrcIdMax";
        	var sInDatasets = "";
        	var sOutDatasets = "";
        	var sCallbackFunc = "fnTrCallBack";	
        	
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        this.fnSysApp = function(obj,e)
        {
        	if(!gfnConfirm("EPRO_LABEL_01378")) return;

        	var sSvcID = "readRsrcNewVer";
        	var sController = "epro.sys.service.BSysService.readRsrcNewVer";
        	var sInDatasets = "";
        	var sOutDatasets = "dsTmp=dsTmp";
        	var sCallbackFunc = "fnTrCallBack";

            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsRsrc.addEventHandler("oncolumnchanged", this.fnOnColumnChanged, this);
            this.dsRsrc.addEventHandler("onrowposchanged", this.fnOnrowposchanged, this);
            this.dsCdCM34.addEventHandler("oncolumnchanged", this.fnOncolumnchanged, this);
            this.dsCdCM34.addEventHandler("onrowposchanged", this.fnOnrowposchanged, this);
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.divViewSeach.edRsrcId.addEventHandler("onkeydown", this.fnKeydown, this);
            this.divViewSeach.cboRsrcLang.addEventHandler("onitemchanged", this.fnCboRsrcLangOnitemChanged, this);
            this.divViewSeach.edtRsrcNm.addEventHandler("onkeydown", this.fnKeydown, this);
            this.divViewCompBody00.grdList.addEventHandler("oncellclick", this.fnGrdListOncellclick, this);
            this.divViewCompBody01.edtRsrcId.addEventHandler("ontextchanged", this.divViewCompBody01_edtRsrcId_ontextchanged, this);
            this.divViewCompBody01.btnReadId.addEventHandler("onclick", this.fnBtnMaxIdOnclick, this);
            this.btnAddRsrc.addEventHandler("onclick", this.fnAddRsrc, this);
            this.btnDelRsrc.addEventHandler("onclick", this.fnDelRsrc, this);

        };

        this.loadIncludeScript("BSysRsrc.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
