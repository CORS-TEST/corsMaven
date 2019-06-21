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
                this.set_name("BAprvDetail");
                this.set_titletext("디테일");
                this._setFormPosition(0,0,1220,1200);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAprvInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"APP_DOC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"LOGIN_USER\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAprvLine", this);
            obj._setContents("<ColumnInfo><Column id=\"CHECKED\" size=\"256\" type=\"STRING\"/><Column id=\"APRV_ORDR\" size=\"256\" type=\"STRING\"/><Column id=\"APRVR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"APRVR_NM\" size=\"256\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"APP_DOC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CD_APP_TYPE\" size=\"256\" type=\"STRING\"/><Column id=\"CD_APRV_LN_STTS\" size=\"256\" type=\"STRING\"/><Column id=\"CRTR_ID\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReturn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdAP13", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdAP14", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCntr", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCntrItem", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCntrAdd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCT10", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdZZ10", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCT11", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM11", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM20", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompTitle00", "absolute", "0", "0", null, "24", "0", null, this);
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            obj.set_positionstep("0");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "0", "255", "24", null, null, this.divViewCompTitle00);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("21");
            obj.set_text("기본정보");
            this.divViewCompTitle00.addChild(obj.name, obj);

            obj = new Div("divViewCompBody00", "absolute", "0", "29", null, "115", "10", null, this);
            obj.set_cssclass("div_WF_DetailBg");
            obj.getSetter("objNm").set("DIV-평가서 상세");
            obj.set_positionstep("0");
            obj.set_taborder("101");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "0", null, "33", "0", null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("16");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine03", "absolute", "0", "32", null, "80", "0", null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("19");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staTtl", "absolute", "0", "0", "171", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label_P");
            obj.set_positionstep("1");
            obj.set_taborder("2");
            obj.set_text("승인문서명");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staRmark", "absolute", "0", "32", "171", "80", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("특이사항");
            obj.set_positionstep("1");
            obj.set_taborder("4");
            obj.set_text("승인의견");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new TextArea("txaRmark", "absolute", "176", "37", null, "70", "10", null, this.divViewCompBody00);
            obj.set_lengthunit("utf8");
            obj.set_maxlength("500");
            obj.getSetter("objNm").set("승인의견");
            obj.set_positionstep("1");
            obj.set_taborder("5");
            obj.set_wordwrap("char");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtTtl", "absolute", "176", "4", null, "24", "10", null, this.divViewCompBody00);
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("승인문서명");
            obj.set_positionstep("1");
            obj.set_taborder("6");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Div("divViewCompBody02", "absolute", "0", "413", null, "250", "10", null, this);
            obj.getSetter("objNm").set("DIV-대상업체 세부정보");
            obj.set_taborder("107");
            this.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "0", null, null, "0", "0", this.divViewCompBody02);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_autosizingtype("row");
            obj.set_binddataset("dsAprvLine");
            obj.set_extendsizetype("row");
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
            obj.getSetter("objNm").set("품목 그리드");
            obj.set_taborder("4");
            obj._setContents("<Formats><Format id=\"MMODE\"><Columns><Column band=\"left\" size=\"40\"/><Column size=\"53\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"267\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row band=\"head\" size=\"33\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell style=\"align:center;\"/><Cell col=\"1\" expr=\"\" text=\"순번\"/><Cell col=\"2\" expr=\"\" text=\"승인자명\"/><Cell col=\"3\" expr=\"\" text=\"직책\"/><Cell col=\"4\" expr=\"\" text=\"부서\"/><Cell col=\"5\" expr=\"\" text=\"전화번호\"/><Cell col=\"6\" expr=\"\" text=\"승인유형\"/><Cell col=\"7\" expr=\"\" text=\"승인의견\"/><Cell col=\"8\" expr=\"\" text=\"승인상태\"/><Cell col=\"9\" expr=\"\" text=\"승인일시\"/></Band><Band id=\"body\" style=\"cellpadding:2 2 2 2 ;\"><Cell displaytype=\"expr:UP_YN == 'N'  ? 'none' : 'checkbox'\" editdisplay=\"display\" edittype=\"expr:UP_YN == 'N'  ? 'none' : 'checkbox'\" expandshow=\"hide\" style=\"background2: ;\" text=\"bind:CHECKED\"/><Cell col=\"1\" style=\"align: ;\" text=\"bind:APRV_ORDR\"/><Cell col=\"2\" edittype=\"expr:UP_YN == 'N'  ? 'none' : 'text'\" expandimage=\"URL('img::grd_WF_Expand.png')\" expandshow=\"expr:UP_YN == 'N'  ? 'hide' : 'show'\" expandsize=\"28\" style=\"align:left;\" text=\"bind:APRVR_NM\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:PSTN\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:DEPT_NM\"/><Cell col=\"5\" text=\"bind:TEL\"/><Cell col=\"6\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" combodataset=\"dsCdAP14\" displaytype=\"combo\" style=\"align: ;\" text=\"bind:CD_APP_TYPE\"/><Cell autosizerow=\"limitmin\" calendardisplaynulltype=\"none\" col=\"7\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:OPNN\" wordwrap=\"char\"/><Cell col=\"8\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" combodataset=\"dsCdAP13\" displaytype=\"combo\" text=\"bind:CD_APRV_LN_STTS\"/><Cell calendardisplaynulltype=\"none\" col=\"9\" displaytype=\"date\" mask=\"yyyy-MM-dd HH:mm:ss\" style=\"align: ;\" text=\"bind:APRV_DT\"/></Band></Format><Format id=\"VMODE\"><Columns><Column size=\"53\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"267\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row band=\"head\" size=\"33\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"순번\"/><Cell col=\"1\" expr=\"\" text=\"승인자명\"/><Cell col=\"2\" expr=\"\" text=\"직책\"/><Cell col=\"3\" expr=\"\" text=\"부서\"/><Cell col=\"4\" expr=\"\" text=\"전화번호\"/><Cell col=\"5\" expr=\"\" text=\"승인유형\"/><Cell col=\"6\" expr=\"\" text=\"승인의견\"/><Cell col=\"7\" expr=\"\" text=\"승인상태\"/><Cell col=\"8\" expr=\"\" text=\"승인일시\"/></Band><Band id=\"body\" style=\"cellpadding:2 2 2 2 ;\"><Cell style=\"align: ;\" text=\"bind:APRV_ORDR\"/><Cell col=\"1\" edittype=\"none\" style=\"align:left;\" text=\"bind:APRVR_NM\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:PSTN\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:DEPT_NM\"/><Cell col=\"4\" text=\"bind:TEL\"/><Cell col=\"5\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" combodataset=\"dsCdAP14\" displaytype=\"combo\" style=\"align: ;\" text=\"bind:CD_APP_TYPE\"/><Cell autosizerow=\"limitmin\" calendardisplaynulltype=\"none\" col=\"6\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:OPNN\" wordwrap=\"char\"/><Cell col=\"7\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" combodataset=\"dsCdAP13\" displaytype=\"combo\" text=\"bind:CD_APRV_LN_STTS\"/><Cell calendardisplaynulltype=\"none\" col=\"8\" displaytype=\"date\" mask=\"yyyy-MM-dd HH:mm:ss\" style=\"align: ;\" text=\"bind:APRV_DT\"/></Band></Format></Formats>");
            this.divViewCompBody02.addChild(obj.name, obj);

            obj = new Div("divViewCompTitle03", "absolute", "0", "683", null, "24", "0", null, this);
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            obj.set_taborder("111");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "0", "255", "24", null, null, this.divViewCompTitle03);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("0");
            obj.set_text("승인문서");
            this.divViewCompTitle03.addChild(obj.name, obj);

            obj = new Div("divViewCompBody03", "absolute", "0", "712", null, "486", "10", null, this);
            obj.getSetter("objNm").set("");
            obj.set_taborder("112");
            obj.style.set_border("1 solid #808080ff");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Div("divViewCompTitle04", "absolute", "0", "164", null, "24", "10", null, this);
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            obj.set_taborder("113");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "0", "255", "24", null, null, this.divViewCompTitle04);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("0");
            obj.set_text("승인파일");
            this.divViewCompTitle04.addChild(obj.name, obj);

            obj = new Div("divFile", "absolute", "2", "164", null, "197", "10", null, this);
            obj.set_taborder("114");
            obj.set_url("CCOMP::CompNFileUpDown.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divViewCompTitle02", "absolute", "0", "384", null, "24", "10", null, this);
            obj.getSetter("objNm").set("DIV-대상업체 타이틀");
            obj.set_positionstep("0");
            obj.set_taborder("104");
            this.addChild(obj.name, obj);
            obj = new Button("btnDel", "absolute", null, "0", "50", "24", "0", null, this.divViewCompTitle02);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("삭제");
            obj.set_positionstep("1");
            obj.set_taborder("16");
            obj.set_text(" 삭제");
            obj.set_visible("false");
            this.divViewCompTitle02.addChild(obj.name, obj);
            obj = new Button("btnAdd", "absolute", null, "0", "80", "24", "55", null, this.divViewCompTitle02);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("승인자추가");
            obj.set_positionstep("1");
            obj.set_taborder("17");
            obj.set_text("승인자추가");
            obj.set_visible("false");
            this.divViewCompTitle02.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle02", "absolute", "0", "0", "255", "24", null, null, this.divViewCompTitle02);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("20");
            obj.set_text("승인자정보");
            this.divViewCompTitle02.addChild(obj.name, obj);
            obj = new Button("btnUp", "absolute", null, "0", "40", "24", "185", null, this.divViewCompTitle02);
            obj.set_cssclass("btn_WF_Module");
            obj.set_taborder("21");
            obj.set_text("▲");
            obj.set_visible("false");
            this.divViewCompTitle02.addChild(obj.name, obj);
            obj = new Button("btnDown", "absolute", null, "0", "40", "24", "140", null, this.divViewCompTitle02);
            obj.set_cssclass("btn_WF_Module");
            obj.set_taborder("22");
            obj.set_text("▼");
            obj.set_visible("false");
            this.divViewCompTitle02.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompTitle00,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 타이틀");
            		p.set_positionstep("0");
            		p.set_taborder("1");

            	}
            );
            this.divViewCompTitle00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 115, this.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.set_cssclass("div_WF_DetailBg");
            		p.getSetter("objNm").set("DIV-평가서 상세");
            		p.set_positionstep("0");
            		p.set_taborder("101");

            	}
            );
            this.divViewCompBody00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1042, 386, this.divViewCompBody02,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-대상업체 세부정보");
            		p.set_taborder("107");

            	}
            );
            this.divViewCompBody02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompTitle03,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 타이틀");
            		p.set_taborder("111");

            	}
            );
            this.divViewCompTitle03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 486, this.divViewCompBody03,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("");
            		p.set_taborder("112");
            		p.style.set_border("1 solid #808080ff");
            		p.set_enable("true");

            	}
            );
            this.divViewCompBody03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompTitle04,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 타이틀");
            		p.set_taborder("113");

            	}
            );
            this.divViewCompTitle04.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompTitle02,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-대상업체 타이틀");
            		p.set_positionstep("0");
            		p.set_taborder("104");

            	}
            );
            this.divViewCompTitle02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "Screen0", 1220, 1200, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("FrmTemplate100");
            		p.set_titletext("디테일");

            	}
            );
            obj.set_stepcount("");
            obj.set_stepindex("");
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item60","divViewCompBody00.edtTtl","value","dsAprvInfo","TTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item61","divViewCompBody00.txaRmark","value","dsAprvInfo","APRV_OPNN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("grdListFormatId","divViewCompBody02.grdList","formatid","dsObjBindGrid","grdList");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txaRmarkVi","divViewCompBody00.txaRmark","visible","dsObjBindVi","txaRmark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txaRmarkEn","divViewCompBody00.txaRmark","readonly","dsObjBindEn","txaRmark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTtlVi","divViewCompBody00.edtTtl","visible","dsObjBindVi","edtTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTtlEn","divViewCompBody00.edtTtl","readonly","dsObjBindEn","edtTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnDelVi","divViewCompTitle02.btnDel","visible","dsObjBindVi","btnDel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnDelEn","divViewCompTitle02.btnDel","enable","dsObjBindEn","btnDel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnAddVi","divViewCompTitle02.btnAdd","visible","dsObjBindVi","btnAdd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnAddEn","divViewCompTitle02.btnAdd","enable","dsObjBindEn","btnAdd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnUpVi","divViewCompTitle02.btnUp","visible","dsObjBindVi","btnUp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnUpEn","divViewCompTitle02.btnUp","enable","dsObjBindEn","btnUp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnDownVi","divViewCompTitle02.btnDown","visible","dsObjBindVi","btnDown");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnDownEn","divViewCompTitle02.btnDown","enable","dsObjBindEn","btnDown");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompNFileUpDown.xfdl");
        };
        
        // User Script
        this.registerScript("BAprvDetail.xfdl", function(exports) {
        /**
         * @파일명       	: BAprvDetail.xfdl
         * @생성자       	: 
         * @생성일자     	: 2017. 9. 12.
         * @최종수정자		: 
         * @최종수정일자	    : 2017. 9. 12.
        */  

        this.fvGubun = "";
        this.fvTarget = -1;

        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {
        	 
        	var param = [
        					 {code:"AP13", sSelectType:"S"}
        					,{code:"AP14", sSelectType:"S"}
        					,{code:"CT10", sSelectType:"S"} // 계약상태
        					,{code:"ZZ10", sSelectType:"S"} // 공사구분
        					,{code:"CT11", sSelectType:"S"} // 계약유형
        					,{code:"CM11", sSelectType:"S"} // 단위
        					,{code:"CM20", sSelectType:"S"} // 사업장
        				];

        	gfnGetCode(this, param);
        }

        /**
          * @함수명	: fnOnload
          * @desc   : 폼 onload이벤트
          */
        this.fnFormOninit = function(obj,e)
        {
        	this.fnSetCode();
        }

        /**
          * @함수명	: fnOnload
          * @desc   : 폼 onload이벤트
          */
        this.fnOnload = function(obj,e)
        {
        	gfnSetGrdFunc(this.divViewCompBody02.grdList, null, this);

        	this.dsAprvInfo.setColumn(0,"LOGIN_USER",application.gdsUserInfo.getColumn(0,"USER_ID"));
        	this.dsAprvInfo.setColumn(0,"BRANCH_CD",application.gdsUserInfo.getColumn(0,"BRANCH_CD"));
        	this.dsAprvInfo.setColumn(0,"APP_DOC_ID",gfnGetTmprData("APP_DOC_ID"));
        	var docCtgr = gfnGetTmprData("DOC_CTGR");
        	this.fvGubun = gfnGetTmprData("GUBUN");
        	gfnClearTmprData();
        	
        	if(docCtgr=="AP11CNTR"){
        		this.divViewCompBody03.set_height(1400);
        		this.divViewCompBody03.set_url("BAPRV::BAprvDetail_Cntr.xfdl");
        	}
        	
        	
        	gfnMakeFileDs(this);

        	this.fnSearch();
        }

        /**
        	@function	fnSearch()
        	@desc   	조회 이벤트
        */
        this.fnSearch = function(obj,e)
        {	
        	var sSvcID = "readAprv";
        	var sController = "epro.aprv.service.BAprvService.readAprv";
        	var sInDatasets = "dsAprvInfo=dsAprvInfo";
        	var sOutDatasets = "dsAprvInfo=dsAprvInfo dsAprvLine=dsAprvLine";
        	var sCallbackFunc = "fnTrCallBack";	

            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
        	@function	fnSave()
        	@desc   	저장 이벤트
        */
        this.fnSave = function()
        {
        	if(!gfnConfirm("EPRO_LABEL_00001")) return;

        	var sSvcID = "saveAprvReq";
        	var sController = "epro.aprv.service.BAprvService.saveAprvReq";
        	var sInDatasets = "dsAprvInfo=dsAprvInfo dsAprvLine=dsAprvLine";
        	var sOutDatasets = "dsAprvInfo=dsAprvInfo";
        	var sCallbackFunc = "fnTrCallBack";	

            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
        	@function	fnSave()
        	@desc   	저장 이벤트
        */
        this.fnAprvCxl = function()
        {
        	if(!gfnConfirm("EPRO_LABEL_00001")) return;
        	
        	this.dsAprvInfo.setColumn(0,"CD_APRV_STTS","AP10CXL");
        	
        	var sSvcID = "saveAprvCxl";
        	var sController = "epro.aprv.service.BAprvService.saveAprvCxl";
        	var sInDatasets = "dsAprvInfo=dsAprvInfo";
        	var sOutDatasets = "dsAprvInfo=dsAprvInfo";
        	var sCallbackFunc = "fnTrCallBack";	

            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
          * @함수명	: fnRemote
          * @desc     	: 리모콘 버튼 생성
          */
        this.fnRemote = function()
        {		   
        	var sArg = [
        				 {btnName:"회수", clickEventFunc:"fnAprvCxl"}
        				 ,{btnName:"승인", clickEventFunc:"fnAprvApp"}
        				 ,{btnName:"반려", clickEventFunc:"fnAprvReturn"}
        				];
        	
        	gfnRemote(this, sArg);
        }

        /**
          * @함수명	: fnAprvApp
          * @desc     	: 승인팝업
          */
        this.fnAprvApp = function()
        {
        	var sArg = { agv_gubun:"APP" };
        	gfnModalPop(this, "AprvApp", "BAPRV::BAprOpnnPopup.xfdl", sArg, "fnPopCallBack", 400, 260);
        }

        /**
          * @함수명	: fnSaveAprvCplt
          * @desc     	: 결과저장
          */
        this.fnSaveAprvCplt = function()
        {
        	var sSvcID = "saveAprvCplt";
        	var sController = "epro.aprv.service.BAprvService.saveAprvCplt";
        	var sInDatasets = "dsAprvInfo=dsAprvInfo dsAprvLine=dsAprvLine";
        	var sOutDatasets = "dsAprvInfo=dsAprvInfo";
        	var sCallbackFunc = "fnTrCallBack";	
        	
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
          * @함수명	: fnAprvReturn
          * @desc     	: 반려팝업
          */
        this.fnAprvReturn = function()
        {
        	var sArg = { agv_gubun:"RETURN" };
        	gfnModalPop(this, "AprvReturn", "BAPRV::BAprOpnnPopup.xfdl", sArg, "fnPopCallBack", 400, 260);
        }

        /**
          * @함수명	: fnClose
          * @desc     	: 닫기버튼
          */
        this.fnClose = function()
        {
        	return true;
        }

        /**
          * @함수명	: fnTrCallBack
          * @desc     	: Transaction Callback함수
          */
        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	if(strErrCd < 0){
        		return;
        	}
        	
        	switch(strSvcID){
        		case "readAprv" :
        			//var doc = this.divViewCompBody03.webBrowser.getProperty("document");
        			//doc.callMethod("write",this.dsAprvInfo.getColumn(0,"APP_DOC"));
        			
        			// 각화면에서 저장한 데이터셋 가져와서 셋팅해주기
        			var appArr =  this.dsAprvInfo.getColumn(0,"APP_DOC").split("▩");

        			if(this.dsAprvInfo.getColumn(0,"CD_APRV_DOC_CTGR")=="AP11CNTR"){
        				this.dsCntr.loadXML(appArr[0]);
        				this.dsCntrItem.loadXML(appArr[1]);
        				this.dsCntrAdd.loadXML(appArr[2]);
        				//this.divViewCompBody03.divViewCompBody07.wb_daumEditor.set_url(application.gvDomain+"/daumeditor/editor.jsp");
        			}

        			
        			var sTableNm = "MM_APRV";
        			var arrFileKey = [this.dsAprvInfo.getColumn(0, "APP_DOC_ID")];
        			this.divFile.fnFileInit(this, sTableNm, this.dsAprvInfo, arrFileKey);
        			
        			//요청문서
        			if(this.fvGubun == "REQ"){
        				var wait = Number(this.dsAprvInfo.getColumn(0,"WAIT_SEQ"));
        				var nRow = this.dsAprvLine.findRow("APRVR_ID",this.dsAprvInfo.getColumn(0,"LOGIN_USER"));
        				
        				//자신은 승인라인에 없고 자신이 승인대리자일 경우
        				if(nRow == -1){
        					nRow = this.dsAprvLine.findRow("ABS_USER_ID",this.dsAprvInfo.getColumn(0,"LOGIN_USER"));
        					
        					if(wait == Number(this.dsAprvLine.getColumn(nRow,"APRV_ORDR")) 
        						&& "AP13WAT" == this.dsAprvLine.getColumn(nRow,"CD_APRV_LN_STTS")){
        						
        						this.fvTarget = nRow;
        						gfnSetObj("C");
        							
        					} else{
        						gfnSetObj("B");
        						
        					}
        				
        				//자신이 승인라인에 있을때
        				} else{
        					var mRow = this.dsAprvLine.findRow("ABS_USER_ID",this.dsAprvInfo.getColumn(0,"LOGIN_USER"));
        					
        					//자신이 승인대리자가 아닐때
        					if(mRow == -1){
        						if(wait == Number(this.dsAprvLine.getColumn(nRow,"APRV_ORDR")) 
        							&& "AP13WAT" == this.dsAprvLine.getColumn(nRow,"CD_APRV_LN_STTS")){
        							
        							this.fvTarget = nRow;
        							gfnSetObj("C");
        								
        						} else{
        							gfnSetObj("B");
        							
        						}
        					//자신이 승인라인에 있고, 승인대리자 이기도 할때
        					} else{
        						var nOrdr = Number(this.dsAprvLine.getColumn(nRow,"APRV_ORDR"));
        						var mOrdr = Number(this.dsAprvLine.getColumn(mRow,"APRV_ORDR"));
        						var tmpOrdr = "";
        						var tmpStts = "";
        						
        						if(wait == nOrdr){
        							this.fvTarget = nRow;
        							
        							tmpOrdr = nOrdr;
        							tmpStts = this.dsAprvLine.getColumn(nRow,"CD_APRV_LN_STTS");
        							
        						} else if(wait == mOrdr){
        							this.fvTarget = mRow;
        							
        							tmpOrdr = mOrdr;
        							tmpStts = this.dsAprvLine.getColumn(mRow,"CD_APRV_LN_STTS");
        						}
        						
        						if(wait == tmpOrdr && tmpStts == "AP13WAT"){
        							gfnSetObj("C");
        								
        						} else{
        							gfnSetObj("B");
        							
        						}
        					}
        				}
        			//완료문서
        			} else if(this.fvGubun == "RST"){
        				gfnSetObj("B");
        				
        			//기안문서
        			} else if(this.fvGubun == "DRAFT"){
        				var check = true;

        				for(var i = 0 ; i < this.dsAprvLine.rowcount ; i++){
        					if(this.dsAprvLine.getColumn(i,"CD_APRV_LN_STTS") == 'AP13CFM' || this.dsAprvLine.getColumn(i,"CD_APRV_LN_STTS") == 'AP13RTN'){
        						check = false;
        						break;
        					}
        				}
        				
        				if(this.dsAprvInfo.getColumn(0,"CD_APRV_STTS") == "AP10CXL") check = false;
        				
        				if(check){
        					gfnSetObj("A");
        					
        				} else{
        					gfnSetObj("B");
        					
        				}
        			}

        		break;
        		
        		case "saveAprvReq" :
        			gfnAlert(strErrMsg);
        			this.fnSearch();
        			
        		break;
        		
        		case "saveAprvCxl" :
        			gfnAlert(strErrMsg);
        			this.fnSearch();
        		break;
        		
        		case "saveAprvCplt" :
        			this.fvTarget = -1;
        			
        			gfnAlert(strErrMsg);
        			this.fnSearch();
        		break;
        		
        		default:
        		break;	
        	}
        }

        /**
          * @함수명	: fnMove
          * @desc     	: 승인자 순서 변경
          */
        this.fnMove = function(obj,e)
        {
        	var ordr = "";
        	var nRow = this.dsAprvLine.rowposition;
        	
        	if(Number(this.dsAprvLine.getColumn(nRow,"APRV_ORDR")) == Number(this.dsAprvInfo.getColumn(0,"WAIT_SEQ"))){
        		gfnAlert("EPRO_LABEL_00890");
        		return;
        	}
        	
        	if(obj.name == "btnUp"){
        		if(this.dsAprvLine.getColumn(nRow,"UP_YN") == "Y" && this.dsAprvLine.getColumn(nRow - 1, "UP_YN") == "Y"){
        			if(gfnIsNull(this.dsAprvLine.getColumn(nRow,"APRVR_ID"))){
        				gfnAlert("EPRO_LABEL_00891");
        				return;
        				
        			} else if(gfnIsNull(this.dsAprvLine.getColumn(nRow -1,"APRVR_ID"))){
        				gfnAlert("EPRO_LABEL_00892");
        				return;
        			}
        			
        			ordr = this.dsAprvLine.getColumn(nRow,"APRV_ORDR");
        			this.dsAprvLine.setColumn(nRow,"APRV_ORDR",parseInt(ordr) - 1);
        			this.dsAprvLine.setColumn(nRow -1 ,"APRV_ORDR",ordr);
        			
        			this.dsAprvLine.moveRow(nRow,nRow-1);
        			
        		} else{
        			gfnAlert("EPRO_LABEL_00893");
        		}
        		
        	} else{
        		if(this.dsAprvLine.getColumn(nRow,"UP_YN") == "Y" && this.dsAprvLine.getColumn(nRow + 1, "UP_YN") == "Y"){
        			if(gfnIsNull(this.dsAprvLine.getColumn(nRow,"APRVR_ID"))){
        				gfnAlert("EPRO_LABEL_00891");
        				return;
        				
        			} else if(gfnIsNull(this.dsAprvLine.getColumn(nRow +1,"APRVR_ID"))){
        				gfnAlert("EPRO_LABEL_00892");
        				return;
        			}
        			
        			ordr = this.dsAprvLine.getColumn(nRow,"APRV_ORDR");
        			this.dsAprvLine.setColumn(nRow,"APRV_ORDR",parseInt(ordr) + 1);
        			this.dsAprvLine.setColumn(nRow +1 ,"APRV_ORDR",ordr);
        			
        			this.dsAprvLine.moveRow(nRow,nRow+1);
        		
        		} else{
        			gfnAlert("EPRO_LABEL_00894");
        		}
        	}
        }

        /**
          * @함수명	: fnAddUser
          * @desc     	: 승인자 추가
          */
        this.fnAddUser = function(obj,e)
        {
        	var nRow = this.dsAprvLine.addRow();
        	this.dsAprvLine.setColumn(nRow,"BRANCH_CD",this.dsAprvInfo.getColumn(0,"BRANCH_CD"));
        	this.dsAprvLine.setColumn(nRow,"APP_DOC_ID",this.dsAprvInfo.getColumn(0,"APP_DOC_ID"));
        	this.dsAprvLine.setColumn(nRow,"APRV_ORDR",this.dsAprvLine.getMax("APRV_ORDR") + 1);
        	this.dsAprvLine.setColumn(nRow,"CD_APRV_LN_STTS","AP13WAT");
        	this.dsAprvLine.setColumn(nRow,"CD_APP_TYPE","AP14CFM");
        	this.dsAprvLine.setColumn(nRow,"CRTR_ID",application.gdsUserInfo.getColumn(0,"USER_ID"));
        	this.dsAprvLine.setColumn(nRow,"LOGIN_USER",application.gdsUserInfo.getColumn(0,"USER_ID"));
        	
        	this.dsAprvInfo.setColumn(0,"CD_APRV_STTS","AP10ING");
        	this.dsAprvInfo.setColumn(0,"APRV_CNT",this.dsAprvLine.rowcount);
        	this.dsAprvInfo.setColumn(0,"LAST_CHGR_ID",application.gdsUserInfo.getColumn(0,"USER_ID"));
        }

        /**
          * @함수명	: fnDelUser
          * @desc     	: 승인자 삭제
          */
        this.fnDelUser = function(obj,e)
        {
        	var orgRow = this.dsAprvLine.rowcount;
        	
        	this.dsAprvLine.filter("CHECKED==1");
        	
        	if(this.dsAprvLine.rowcount < 1){
        		this.dsAprvLine.filter("");
        		gfnAlert("EPRO_LABEL_00895");
        		return;
        		
        	} else{
        		if(orgRow == this.dsAprvLine.rowcount +1){
        			this.dsAprvLine.filter("");
        			gfnAlert("EPRO_LABEL_00896");
        			return;
        			
        		} else{
        			this.dsAprvLine.filter("");
        			
        			if(!gfnConfirm("EPRO_LABEL_00897")) return;
        			
        			this.dsAprvLine.filter("CHECKED==1");
        			this.dsAprvLine.deleteAll();
        			this.dsAprvLine.filter("");
        		}
        	}
        	
        	for(var i = 0 ; i < this.dsAprvLine.rowcount ; i++){
        		this.dsAprvLine.setColumn(i ,"APRV_ORDR" ,i+1);
        	}
        	
        	var nRow = this.dsAprvLine.findRow("CD_APRV_LN_STTS","AP13WAT");
        	
        	if(nRow != -1) nRow = nRow + 1;
        	else nRow = this.dsAprvLine.rowcount;
        	
        	this.dsAprvInfo.setColumn(0,"APRV_CNT",this.dsAprvLine.rowcount);
        	this.dsAprvInfo.setColumn(0,"WAIT_SEQ",nRow);
        	this.dsAprvInfo.setColumn(0,"LAST_CHGR_ID",application.gdsUserInfo.getColumn(0,"USER_ID"));
        	
        	if(-1 == this.dsAprvLine.findRow("CD_APRV_LN_STTS","AP13WAT")){
        		this.dsAprvInfo.setColumn(0,"CD_APRV_STTS","AP10CLO");
        		
        	}
        }

        /**
          * @함수명	: fnSearchUser
          * @desc   : 유저검색
          */
        this.fnSearchUser = function(objNm)
        {
        	var sAgvNm = "";
        	var sPopupId = "";
        	
        	if(objNm == "grdList"){
        		if(!gfnIsNull(this.dsAprvLine.getColumn(this.dsAprvLine.rowposition ,"APRVR_ID"))) return;
        	
        		sPopupId = "BUserSrchPopup";
        		sAgvNm = this.dsAprvLine.getColumn(this.dsAprvLine.rowposition,"APRVR_NM")
        		
        	} 
        	
        	var sArg = { 
        				agv_nm:sAgvNm
        			   };

        	gfnSearchComUser(this, sPopupId, "fnPopCallBack", sArg)
        }

        /**
          * @함수명	: grdOnexpandUp
          * @desc   : 그리드 expandUp 이벤트
          */
        this.grdOnexpandUp = function(obj,e)
        {
        	obj.updateToDataset();
        	this.fnSearchUser(obj.name);
        }

        /**
        	@function	fnPopCallBack()
        	@desc   	팝업 CallBack 함수
        */
        this.fnPopCallBack = function(sPopupId,rtn)
        {
        	if(gfnIsNull(rtn)) return;

        	this.dsReturn.clear();
        	this.dsReturn.loadXML(rtn);
        	
        	switch(sPopupId){			
        		case "BUserSrchPopup":
        				if(!gfnIsNull(this.dsReturn.getColumn(0,"USER_ID"))){
        					if(-1 == this.dsAprvLine.findRow("APRVR_ID",this.dsReturn.getColumn(0,"USER_ID"))){
        						var nRow = this.dsAprvLine.rowposition;
        						this.dsAprvLine.setColumn(nRow,"APRVR_ID", this.dsReturn.getColumn(0,"USER_ID"));
        						this.dsAprvLine.setColumn(nRow,"APRVR_NM", this.dsReturn.getColumn(0,"USER_NM"));
        						this.dsAprvLine.setColumn(nRow,"PSTN", this.dsReturn.getColumn(0,"PSTN"));
        						this.dsAprvLine.setColumn(nRow,"DEPT_NM", this.dsReturn.getColumn(0,"DEPT_NM"));
        						this.dsAprvLine.setColumn(nRow,"TEL", this.dsReturn.getColumn(0,"TEL"));
        						
        					} else{
        						gfnAlert("EPRO_LABEL_00874");
        						this.dsAprvLine.setColumn(this.dsAprvLine.rowposition,"APRVR_NM","");
        					}
        				}
        				
        			break;
        		
        		case "AprvApp" :
        			this.dsAprvLine.setColumn(this.fvTarget,"CD_APRV_LN_STTS","AP13CFM");
        			this.dsAprvLine.setColumn(this.fvTarget,"OPNN",this.dsReturn.getColumn(0,"MSG"));
        			
        			if(Number(this.dsAprvInfo.getColumn(0,"WAIT_SEQ")) == Number(this.dsAprvInfo.getColumn(0,"APRV_CNT"))){
        				this.dsAprvInfo.setColumn(0,"CD_APRV_STTS","AP10CLO");
        				
        			} else{
        				this.dsAprvInfo.setColumn(0,"WAIT_SEQ",this.dsAprvInfo.getColumn(0,"WAIT_SEQ") + 1);
        			}
        			
        			this.dsAprvInfo.setColumn(0,"TARGET_ID",this.dsAprvLine.getColumn(this.fvTarget,"APRVR_ID"));
        			
        			//trace(this.dsAprvInfo.saveXML());
        			this.fnSaveAprvCplt();
        			
        		break;
        		
        		case "AprvReturn" :
        			this.dsAprvLine.setColumn(this.fvTarget,"CD_APRV_LN_STTS","AP13RTN");
        			this.dsAprvLine.setColumn(this.fvTarget,"OPNN",this.dsReturn.getColumn(0,"MSG"));
        			
        			if(Number(this.dsAprvInfo.getColumn(0,"WAIT_SEQ")) != Number(this.dsAprvInfo.getColumn(0,"APRV_CNT"))){
        				this.dsAprvInfo.setColumn(0,"WAIT_SEQ",this.dsAprvInfo.getColumn(0,"WAIT_SEQ") + 1);
        			}
        			
        			this.dsAprvInfo.setColumn(0,"CD_APRV_STTS","AP10RTN");
        			this.dsAprvInfo.setColumn(0,"TARGET_ID",this.dsAprvLine.getColumn(this.fvTarget,"APRVR_ID"));
        			
        			this.fnSaveAprvCplt();
        			
        		break;
        		
        		default:
        			break;	
        	}
        }

        /**
        	@function	grdOnkeydown()
        	@desc   	그리드 키다운 이벤트
        */
        this.grdOnkeydown = function(obj,e)
        {
        	if(e.keycode == "13"){
        		if(gfnGrdBindColId(obj,obj.getCellPos()) == "APRVR_NM"){
        			obj.updateToDataset();
        			this.fnSearchUser(obj.name);
        		}
        	}
        }

        /**
        	@function	grdOntextchanged()
        	@desc   	그리드 텍스트변경 이벤트
        */
        this.grdOntextchanged = function(obj,e)
        {
        	if(gfnGrdBindColId(obj,obj.getCellPos()) == "APRVR_NM"){
        		this.dsAprvLine.setColumn(this.dsAprvLine.rowposition,"APRVR_ID","");
        		
        	}
        }

        /**
        	@function	fnOnkeydown()
        	@desc   	키업 이벤트
        */
        this.fnOnkeydown = function(obj,e)
        {
        	if(e.keycode == "13"){
        		obj.updateToDataset();
        		this.fnSearchUser(obj.name);
        	}
        }

        /**
        	@function	fnOnusernotify()
        	@desc   	Onusernotify 이벤트
        */
        this.fnOnusernotify = function(obj,e)
        {
           var doc = this.divViewCompBody03.webBrowser.getProperty("document");   
           var body = doc.getProperty("body");
           
           if(body){
              var height = body.getProperty("scrollHeight");
              this.divViewCompBody03.set_height(height+30);
              this.resetScroll();
           }
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.addEventHandler("onload", this.fnOnload, this);
            this.divViewCompTitle00.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompBody02.grdList.addEventHandler("onexpandup", this.grdOnexpandUp, this);
            this.divViewCompBody02.grdList.addEventHandler("onkeydown", this.grdOnkeydown, this);
            this.divViewCompBody02.grdList.addEventHandler("ontextchanged", this.grdOntextchanged, this);
            this.divViewCompTitle03.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompTitle04.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompTitle02.btnDel.addEventHandler("onclick", this.fnDelUser, this);
            this.divViewCompTitle02.btnAdd.addEventHandler("onclick", this.fnAddUser, this);
            this.divViewCompTitle02.btnUp.addEventHandler("onclick", this.fnMove, this);
            this.divViewCompTitle02.btnDown.addEventHandler("onclick", this.fnMove, this);

        };

        this.loadIncludeScript("BAprvDetail.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
