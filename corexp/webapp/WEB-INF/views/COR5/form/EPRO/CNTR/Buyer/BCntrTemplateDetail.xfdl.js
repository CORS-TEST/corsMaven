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
                this.set_name("BCntrTemplateDeteail");
                this.set_titletext("계약서템플릿작성");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1220,2269);
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
            obj._setContents("<ColumnInfo><Column id=\"ALT_USE\" size=\"1\" type=\"string\"/><Column id=\"CONTENT\" size=\"4000\" type=\"string\"/><Column id=\"TTL\" size=\"600\" type=\"string\"/><Column id=\"CRTR_ID\" size=\"50\" type=\"string\"/><Column id=\"CRTR_NM\" size=\"90\" type=\"string\"/><Column id=\"RMARK\" size=\"1500\" type=\"string\"/><Column id=\"LAST_CHG_DT\" size=\"7\" type=\"string\"/><Column id=\"CD_CNTR_TYPE_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_CNTR_TYPE\" size=\"40\" type=\"string\"/><Column id=\"LAST_CHGR_ID\" size=\"50\" type=\"string\"/><Column id=\"LAST_CHGR_NM\" size=\"90\" type=\"string\"/><Column id=\"CD_CNTR_CTGR_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_CNTR_CTGR\" size=\"40\" type=\"string\"/><Column id=\"CRT_DT\" size=\"7\" type=\"string\"/><Column id=\"CNTR_TMPLT_NO\" size=\"40\" type=\"string\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REPORT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCT19", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCT11", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReport", this);
            obj._setContents("<ColumnInfo><Column id=\"REPORT_FILE\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_1\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_2\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM1\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"TBL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static02", "absolute", "98.58%", "0", "15", "937", null, null, this);
            obj.set_taborder("48");
            obj.set_visible("false");
            obj.style.set_background("#ff7272ff");
            obj.set_text("w15");
            this.addChild(obj.name, obj);

            obj = new Div("divViewCompBody01", "absolute", "3", "264", null, null, "12", "10", this);
            obj.set_taborder("2");
            obj.set_scrollbars("none");
            obj.set_visible("false");
            obj.set_url("CCOMP::ComEditor.xfdl");
            this.addChild(obj.name, obj);

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
            obj.set_readonly("true");
            obj.set_index("-1");
            obj = new Edit("edtDocNo", "absolute", "172", "10", "240", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("1");
            obj.getSetter("objNm").set("문서번호");
            obj.set_readonly("true");
            this.divViewCompCond00.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0.66%", "45", null, "10", "4.43%", null, this);
            obj.set_taborder("77");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#ff7272ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0.82%", "81", null, "5", "4.26%", null, this);
            obj.set_taborder("78");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#ff7272ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "1.31%", "218", null, "10", "3.77%", null, this);
            obj.set_taborder("79");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#ff7272ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "1.48%", "257", null, "5", "3.61%", null, this);
            obj.set_taborder("80");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#ff7272ff");
            this.addChild(obj.name, obj);

            obj = new Div("divViewCompBody00", "absolute", "0", "81", null, "142", "15", null, this);
            obj.set_taborder("83");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("DIV-헤더 상세");
            this.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label05", "absolute", "0%", "5", null, "132", "0%", null, this.divViewCompBody00);
            obj.set_taborder("103");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("st_cdCntrType", "absolute", "600", "44", "124", "24", null, null, this.divViewCompBody00);
            obj.set_taborder("106");
            obj.set_text("계약구분");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("objNm").set("계약구분");
            obj.getSetter("lbcd").set("");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Combo("cb_cdCntrType", "absolute", "724", "44", "180", "24", null, null, this.divViewCompBody00);
            this.divViewCompBody00.addChild(obj.name, obj);
            obj.set_taborder("107");
            obj.set_innerdataset("ds_cdCT19");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("계약구분");
            obj = new Static("staViewCompLine00", "absolute", "0", "5", null, "33", "0", null, this.divViewCompBody00);
            obj.set_taborder("118");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staCntrTmplTtl", "absolute", "0", "5", "171", "33", null, null, this.divViewCompBody00);
            obj.set_taborder("119");
            obj.set_text("계약서명");
            obj.set_cssclass("sta_WF_Label_P");
            obj.set_positionstep("1");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtCntrTmplTtl", "absolute", "176", "9", "438", "24", null, null, this.divViewCompBody00);
            obj.set_taborder("120");
            obj.set_lengthunit("utf8");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("업태");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "37", null, "33", "0", null, this.divViewCompBody00);
            obj.set_taborder("121");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "69", null, "33", "0", null, this.divViewCompBody00);
            obj.set_taborder("122");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine03", "absolute", "0", "101", null, "33", "0", null, this.divViewCompBody00);
            obj.set_taborder("123");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staCntrtmplAltUse", "absolute", "0", "37", "171", "33", null, null, this.divViewCompBody00);
            obj.set_taborder("124");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staCntrTmplCrtr", "absolute", "0", "69", "171", "33", null, null, this.divViewCompBody00);
            obj.set_taborder("125");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staCntrTmplChgr", "absolute", "0", "101", "171", "33", null, null, this.divViewCompBody00);
            obj.set_taborder("126");
            obj.set_text("수정자");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staCntrTmplCrtrDt", "absolute", "618", "69", "171", "33", null, null, this.divViewCompBody00);
            obj.set_taborder("127");
            obj.set_text("작성일시");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Combo("cboAltUse", "absolute", "176", "42", "150", "24", null, null, this.divViewCompBody00);
            this.divViewCompBody00.addChild(obj.name, obj);
            var cboAltUse_innerdataset = new Dataset("cboAltUse_innerdataset", this.divViewCompBody00.cboAltUse);
            cboAltUse_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(cboAltUse_innerdataset);
            obj.set_taborder("129");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("objNm").set("계약유형");
            obj = new Edit("edtCntrTmplCrtr", "absolute", "176", "73", "150", "24", null, null, this.divViewCompBody00);
            obj.set_taborder("130");
            obj.set_lengthunit("utf8");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("업태");
            obj.style.set_color("black");
            obj.set_readonly("true");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtCntrTmplChgr", "absolute", "176", "106", "150", "24", null, null, this.divViewCompBody00);
            obj.set_taborder("131");
            obj.set_lengthunit("utf8");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("업태");
            obj.set_enable("true");
            obj.style.set_color("black");
            obj.set_readonly("true");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Calendar("calCntrTmplCrtrDt", "absolute", "796", "73", "180", "24", null, null, this.divViewCompBody00);
            this.divViewCompBody00.addChild(obj.name, obj);
            obj.set_taborder("132");
            obj.set_value("null");
            obj.set_dateformat("yyyy-MM-dd ddd HH:mm:ss");
            obj.set_enable("true");
            obj.style.set_color("black");
            obj.style.setStyleValue("color", "disabled", "black");
            obj.set_editformat("yyyy-MM-dd HH:mm:ss");
            obj.set_readonly("true");
            obj = new Calendar("calCntrTmplChgrDt", "absolute", "796", "106", "180", "24", null, null, this.divViewCompBody00);
            this.divViewCompBody00.addChild(obj.name, obj);
            obj.set_taborder("133");
            obj.set_enable("true");
            obj.style.set_color("black");
            obj.style.setStyleValue("color", "disabled", "black");
            obj.set_dateformat("yyyy-MM-dd ddd HH:mm:ss");
            obj.set_value("null");
            obj.set_editformat("yyyy-MM-dd HH:mm:ss");
            obj.set_readonly("true");
            obj = new Static("staCntrTmplChgrDt", "absolute", "618", "101", "171", "33", null, null, this.divViewCompBody00);
            obj.set_taborder("134");
            obj.set_text("수정일시");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtReportNm", "absolute", "618", "9", "171", "24", null, null, this.divViewCompBody00);
            obj.set_taborder("135");
            obj.set_readonly("false");
            obj.set_lengthunit("utf8");
            obj.set_positionstep("1");
            obj.style.set_color("black");
            obj.getSetter("objNm").set("업태");
            obj.set_inputmode("upper");
            obj.set_inputtype("number,english,symbol,digit,alpha");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnReportApply", "absolute", "787", "9", "77", "24", null, null, this.divViewCompBody00);
            obj.set_taborder("136");
            obj.set_text("리포트 적용");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Div("divViewCompTitle00", "absolute", "0", "57", null, "24", "10", null, this);
            obj.set_taborder("84");
            obj.getSetter("objNm").set("DIV-품목정보 타이틀");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "0", "255", "24", null, null, this.divViewCompTitle00);
            obj.set_taborder("0");
            obj.set_text("계약정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.getSetter("objNm").set("품목정보타이틀");
            this.divViewCompTitle00.addChild(obj.name, obj);

            obj = new Div("divViewCompTitle01", "absolute", "0", "238", null, "24", "10", null, this);
            obj.set_taborder("85");
            obj.getSetter("objNm").set("DIV-품목정보 타이틀");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle01", "absolute", "0", "0", "255", "24", null, null, this.divViewCompTitle01);
            obj.set_taborder("0");
            obj.set_text("계약내용");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.getSetter("objNm").set("품목정보타이틀");
            this.divViewCompTitle01.addChild(obj.name, obj);

            obj = new Div("divViewCompBody02", "absolute", "0", "890", null, null, "0%", "10", this);
            obj.set_taborder("86");
            obj.set_text("Div00");
            obj.set_visible("false");
            obj.style.set_border("1 none #808080ff");
            obj.set_scrollbars("none");
            obj.set_url("CCOMP::ComUbiReport.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divViewCompBody03", "absolute", "0", "1808", null, "208", "12", null, this);
            obj.set_taborder("87");
            obj.set_text("Div00");
            obj.set_visible("false");
            obj.set_url("CCOMP::CompNFileUpDown.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
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
            obj = new Layout("default", "", 0, 142, this.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("83");
            		p.set_scrollbars("none");
            		p.getSetter("objNm").set("DIV-헤더 상세");

            	}
            );
            this.divViewCompBody00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompTitle00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("84");
            		p.getSetter("objNm").set("DIV-품목정보 타이틀");

            	}
            );
            this.divViewCompTitle00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompTitle01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("85");
            		p.getSetter("objNm").set("DIV-품목정보 타이틀");

            	}
            );
            this.divViewCompTitle01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1220, 2269, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("FrmTemplate100");
            		p.set_titletext("계약서템플릿작성");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","divViewCompCond00.cboCntrCtgr","value","dsCntrTmpl","CD_CNTR_CTGR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divViewCompCond00.edtDocNo","value","dsCntrTmpl","CNTR_TMPLT_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divViewCompBody00.edtCntrTmplTtl","value","dsCntrTmpl","TTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","divViewCompBody00.cboAltUse","value","dsCntrTmpl","ALT_USE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","divViewCompBody00.edtCntrTmplCrtr","value","dsCntrTmpl","CRTR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","divViewCompBody00.edtCntrTmplChgr","value","dsCntrTmpl","LAST_CHGR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","divViewCompBody00.calCntrTmplCrtrDt","value","dsCntrTmpl","CRT_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","divViewCompBody00.calCntrTmplChgrDt","value","dsCntrTmpl","LAST_CHG_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","divViewCompBody00.edtReportNm","value","dsCntrTmpl","REPORT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtReportNmVi","divViewCompBody00.edtReportNm","visible","dsObjBindVi","edtReportNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtReportNmEn","divViewCompBody00.edtReportNm","readonly","dsObjBindEn","edtReportNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnReportApplyVi","divViewCompBody00.btnReportApply","visible","dsObjBindVi","btnReportApply");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnReportApplyEn","divViewCompBody00.btnReportApply","enable","dsObjBindEn","btnReportApply");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::ComEditor.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComUbiReport.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompNFileUpDown.xfdl");
        };
        
        // User Script
        this.registerScript("BCntrTemplateDetail.xfdl", function(exports) {
        /**
           @file       BCntrTemplateDetail.xfdl
           @desc       계약서 템플릿
           @author     안성민
           @makedate   2019.03.05
           @history    
        */

        /**
        	@function	FormOninit()
        	@desc   	폼 oninit이벤트
        */
        this.FormOninit = function(obj,e)
        {	
        	this.fnSetCode();
        }

        this.fnSetCode = function()
        {
        	
        	//콤보박스 생성시 S:선택, A:전체
        	var param = [
        					{code:"CT11", sSelectType:"S"} // 계약유형
        					,{code:"CT19", sSelectType:"S"} // 계약구분
        				];

        	//공통코드 데이터셋 생성
        	gfnGetCode(this, param);
        }

        /**
        	@function	FormOnload()
        	@desc   	폼 onload이벤트
        */
        this.FormOnload = function(obj,e)
        {	
        	this.dsCntrTmpl.addRow();
        	
        	//이전화면에서 넘어오는 파라미터를 받는다.
        	var cntrTmplId = gfnGetTmprData("CNTR_TMPLT_NO");
        	var branchCd   = gfnGetTmprData("BRANCH_CD");
        	
        	//파라미터를 받은 이후에는 파라미터를 를 초기화 해준다.
        	gfnClearTmprData();
        	gfnMakeFileDs(this);

        	if(gfnIsNull(cntrTmplId)){		
        		this.dsCntrTmpl.setColumn(0,"CRTR_NM",application.gdsUserInfo.getColumn(0,"USER_NM"));
        		this.dsCntrTmpl.setColumn(0,"CRTR_ID",application.gdsUserInfo.getColumn(0,"USER_ID"));
        		this.dsCntrTmpl.setColumn(0,"CRT_DT",gfnToday());
        		this.dsCntrTmpl.setColumn(0,"LAST_CHGR_ID",application.gdsUserInfo.getColumn(0,"USER_ID"));
        		this.dsCntrTmpl.setColumn(0,"LAST_CHGR_NM",application.gdsUserInfo.getColumn(0,"USER_NM"));
        		this.dsCntrTmpl.setColumn(0,"LAST_CHG_DT",gfnToday());
        		this.newCntrTemplate();
        	}

        	//파라미터가 존재하면 조회 
        	if(!gfnIsNull(cntrTmplId)){
        		this.dsCntrTmpl.setColumn(0,"CNTR_TMPLT_NO", cntrTmplId);
        		this.dsCntrTmpl.setColumn(0,"BRANCH_CD", branchCd);
        		this.fnSearch();
        	}
        	
        }

        /**
        	@function	newCntrTemplate()
        	@desc   	템플릿 계약유형선택 팝업
        */
        this.newCntrTemplate = function()
        {
        	var sArg = {};
        	gfnModalPop(this, "newCntrTemplate", "BCNTR::BCntrTemplateTypePop.xfdl", sArg, "fnPopCallBack", 445, 150);
        }

        /**
        	@function	fnPreSearch()
        	@desc   	조회 전 처리
        */
        this.fnPreSearch = function()
        {
        	return true;
        }

        /**
        	@function	fnSearch()
        	@desc   	조회 프로세스
        */
        this.fnSearch = function()
        {
        	if(!this.fnPreSearch()) return false;
        	
        	var sSvcID = "search";
        	var sController = "epro.cntr.service.BCntrService.searchCntrTmplDetail";
        	var sInDatasets = "dsCntrTmpl=dsCntrTmpl";
        	var sOutDatasets = "dsCntrTmpl=dsCntrTmpl";
        	var sCallbackFunc = "fnTrCallBack";
        		  
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        	
        }

        /**
        	@함수명	fnDelete
        	@desc   	(공통버튼)삭제 전처리
        */
        this.fnProDelete = function()
        {
        	return true;
        }

        /**
        	@function	fnDelete()
        	@desc   	(공통버튼)삭제 프로세스
        */
        this.fnDelete = function()
        {
        	if(!this.fnProDelete()) return;
        	if(!gfnConfirm("삭제하시겠습니까?")) return;

        	var sSvcID = "delete";
        	var sController = "epro.cntr.service.BCntrService.deleteCntrTmplDetail";
        	var sInDatasets = "dsCntrTmpl=dsCntrTmpl:A";
        	var sOutDatasets = "dsCntrTmpl=dsCntrTmpl";
        	var sCallbackFunc = "fnTrCallBack";
        		  
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
        	@function	fnPreSave()
        	@desc   	저장 전 처리
        */
        this.fnPreSave = function()
        {	
        	var arr = [];
        	if(gfnIsNull(this.dsCntrTmpl.getColumn(0,"TTL"))){
        		var msg = "계약서 템플릿명을 입력해주세요."
        		var type = "누락"
        		var objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        		arr.push(objParam);
        	}
        	
        	if("CT12T15" == this.dsCntrTmpl.getColumn(0,"CD_CNTR_TYPE")) {
        		if(gfnIsNull(this.dsCntrTmpl.getColumn(0,"REPORT_NM"))){
        			var msg = "리포트명을 입력해주세요."
        			var type = "누락"
        			var objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        			arr.push(objParam);
        		} else if(this.dsCntrTmpl.getColumn(0,"REPORT_NM") != this.divViewCompBody02.gettReportFileName().substring(0, this.divViewCompBody02.gettReportFileName().indexOf(".jrf"))) {
        			var msg = "리포트명이 다릅니다. 리포트를 적용해주세요."
        			var type = "누락"
        			var objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        			arr.push(objParam);
        		}
        	}
        	return gfnValidate(this, false, arr); 
        }

        /**
        	@function	fnSave()
        	@desc   	(공통버튼)저장 프로세스
        */
        this.fnSave = function()
        {
        	if (!this.fnPreSave()) return false;
        	if(!gfnConfirm("저장하시겠습니까?")) return;
        	
        	if("CT11B03" == this.dsCntrTmpl.getColumn(0, "CD_CNTR_CTGR")) {
        		this.fnSave2();
        	} else if("CT12T15" == this.dsCntrTmpl.getColumn(0,"CD_CNTR_TYPE")) {
        		this.fnSave2();
        	} else {
        		this.divViewCompBody01.getContent(this.dsCntrTmpl, 0, "CONTENT", "fnSave2");
        	}
        }

        /**
        	@function	fnSave2()
        	@desc   	(공통버튼)저장 프로세스
        */
        this.fnSave2 = function()
        {		
        	var sSvcID = "save";
        	var sController = "epro.cntr.service.BCntrService.saveCntrTmplDetail";
        	var sInDatasets = "dsCntrTmpl=dsCntrTmpl:A";
        	var sOutDatasets = "dsCntrTmpl=dsCntrTmpl";
        	var sCallbackFunc = "fnTrCallBack";
        		  
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
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
        			this.divViewCompBody01.set_visible(false);
        			this.divViewCompBody02.set_visible(false);
        			this.divViewCompBody03.set_visible(false);
        	
        			if("CT11B03" == this.dsCntrTmpl.getColumn(0, "CD_CNTR_CTGR")) {
        				gfnSetObj("B");
        				this.divViewCompBody03.set_top(this.divViewCompBody01.top);
        				this.divViewCompBody03.set_visible(true);
        				this.fnFileload("N");
        			} else if("CT12T15" == this.dsCntrTmpl.getColumn(0, "CD_CNTR_TYPE")) {
        				gfnSetObj("C");
        				this.divViewCompBody02.set_top(this.divViewCompBody01.top);
        				this.divViewCompBody02.set_visible(true);
        				var reportFile = this.dsCntrTmpl.getColumn(0, "REPORT_NM");
        				
        				this.dsReport.setColumn(0, "REPORT_FILE", reportFile + ".jrf");
        				this.dsReport.setColumn(0, "BRANCH_CD"	, this.dsCntrTmpl.getColumn(0, "BRANCH_CD"));
        				this.divViewCompBody02.UbiReportInit(this.dsReport);
        				this.resetScroll()
        			} else {
        				gfnSetObj("A");
        				this.divViewCompBody01.set_visible(true);
        				this.divViewCompBody01.fnEditorInit(this.dsCntrTmpl.getColumn(0, "CONTENT"));
        				this.resetScroll()
        			}
        		break;
        		
        		case "save" :
        			gfnAlert("저장되었습니다.");
        			this.fnSearch(); 
        		break;
        		
        		case "delete":
        			gfnAlert("삭제되었습니다.");	
        			this.parent.divComBtns.btnComClose.click()
        			break;		
        		break;
        		
        		case "searchReprotFile" :			
        			//리포트로 변경시 에디터 콘텐츠 내용을 전부 삭제
        				this.dsReport.setColumn(0, "CONTENT", "");
        				//리포트
        				this.divViewCompBody01.set_visible(false);
        				this.divViewCompBody02.set_top(this.divViewCompBody01.top);
        				this.divViewCompBody02.set_visible(true);
        				this.dsReport.setColumn(0, "REPORT_FILE", this.dsCntrTmpl.getColumn(0, "REPORT_NM") + ".jrf");
        				this.dsReport.setColumn(0, "BRANCH_CD"	, this.dsCntrTmpl.getColumn(0, "BRANCH_CD"));
        				this.divViewCompBody02.fnReSize();
        				this.divViewCompBody02.UbiReportInit(this.dsReport);
        				this.resetScroll()
        			break;
        			if(strErrCd == 1) {
        				gfnAlert("리포트 파일이 존재하지 않습니다.");
        				return;
        			} else {  
        				//리포트로 변경시 에디터 콘텐츠 내용을 전부 삭제
        				this.dsReport.setColumn(0, "CONTENT", "");
        				//리포트
        				this.divViewCompBody01.set_visible(false);
        				this.divViewCompBody02.set_top(this.divViewCompBody01.top);
        				this.divViewCompBody02.set_visible(true);
        				this.dsReport.setColumn(0, "REPORT_FILE", this.dsCntrTmpl.getColumn(0, "REPORT_NM") + ".jrf");
        				this.dsReport.setColumn(0, "BRANCH_CD"	, this.dsCntrTmpl.getColumn(0, "BRANCH_CD"));
        				this.divViewCompBody02.fnReSize();
        				this.divViewCompBody02.UbiReportInit(this.dsReport);
        				this.resetScroll()
        			}
        			break;
        			
        		default:
        		break;	
        	}
        }

        /**
          *	@function	fnPopCallBack()
          *	@desc   	팝업 CallBack 함수
          */
        this.fnPopCallBack = function(sPopupId,rtn)
        {
        	this.dsReturn.clear();
        	this.dsReturn.loadXML(rtn);
        	switch(sPopupId){
        		case "newCntrTemplate":
        			if(gfnIsNull(this.dsReturn.getColumn(0,"CD_CNTR_CTGR"))) {
        				this.parent.divComBtns.btnComClose.click();
        				return
        			}
        			
        			this.dsCntrTmpl.setColumn(0, "CD_CNTR_CTGR", this.dsReturn.getColumn(0,"CD_CNTR_CTGR"));
        			this.dsCntrTmpl.setColumn(0, "CD_CNTR_TYPE", this.dsReturn.getColumn(0,"CD_CNTR_TYPE"));
        			this.dsCntrTmpl.setColumn(0, "ALT_USE", "Y"); //사용여부
        			
        			//갑지
        			if("CT11B03" == this.dsReturn.getColumn(0,"CD_CNTR_CTGR")) {
        				gfnSetObj("B");
        				this.fnFileload("N");
        				this.divViewCompBody03.set_top(this.divViewCompBody01.top)
        				this.divViewCompBody03.set_visible(true);
        			} else {
        				//정형
        				if("CT12T15" == this.dsReturn.getColumn(0,"CD_CNTR_TYPE")) {
        					gfnSetObj("C");
        					//this.divViewCompBody01.fnEditorInit();
        					this.divViewCompBody01.set_visible(false);
        				}
        				//비정형
        				else {
        					gfnSetObj("A");
        					this.divViewCompBody01.fnEditorInit();
        					this.divViewCompBody01.set_visible(true);
        				}
        			}
        		break;
        	}
        }

        /**
          * @함수명	: fnFileload
          * @desc     	: 첨부파일 셋팅
          */
        this.fnFileload = function(fUse)
        {
        	var sTableNm = "MM_CNTR_TMPLT";
        	var arrFileKey = [this.dsCntrTmpl.getColumn(0, "CNTR_TMPLT_NO")];
        	this.divViewCompBody03.fnFileInit(this, sTableNm, this.dsCntrTmpl, arrFileKey, fUse);
        }

        /**
          *	@function	btnReportApplyOnClick()
          *	@desc   	템플릿 리포트 적용
          */
        this.btnReportApplyOnClick = function(obj,e)
        {
        	if(gfnIsNull(this.dsCntrTmpl.getColumn(0, "REPORT_NM"))) {
        		gfnAlert("리포트명을 입력해주세요.");
        		return;
        	}
        	
        	var sSvcID = "searchReprotFile";
        	var sController = "epro.cntr.service.BCntrService.searchReprotFile";
        	var sInDatasets = "dsCntrTmpl=dsCntrTmpl:A";
        	var sOutDatasets = "";
        	var sCallbackFunc = "fnTrCallBack";
        		  
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        this.fnOnKeyup = function(obj,e)
        {	
        	if(13 == e.keycode) {
        		if("edtReportNm" == obj.id) {
        			this.btnReportApplyOnClick();
        		}
        	} else if(8 == e.keycode) {
        		if("edtReportNm" == obj.id) {
        			
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.FormOnload, this);
            this.addEventHandler("oninit", this.FormOninit, this);
            this.divViewCompBody00.edtReportNm.addEventHandler("onkeyup", this.fnOnKeyup, this);
            this.divViewCompBody00.btnReportApply.addEventHandler("onclick", this.btnReportApplyOnClick, this);

        };

        this.loadIncludeScript("BCntrTemplateDetail.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
