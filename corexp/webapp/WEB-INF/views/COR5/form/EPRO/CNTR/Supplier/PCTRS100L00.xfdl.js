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
                this.set_name("PCTRS100L00");
                this.set_titletext("계약현황");
                this._setFormPosition(0,0,1220,711);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_condition", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"TTL\" size=\"600\" type=\"string\"/><Column id=\"CRTR_ID\" size=\"50\" type=\"string\"/><Column id=\"CD_DOC_CTGR_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_DOC_CTGR\" size=\"40\" type=\"string\"/><Column id=\"CNTR_REQR_ID\" size=\"50\" type=\"string\"/><Column id=\"CNTR_REQR_NM\" size=\"90\" type=\"string\"/><Column id=\"CD_CNTR_CTGR_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_CNTR_CTGR\" size=\"40\" type=\"string\"/><Column id=\"PTNR_ID\" size=\"40\" type=\"string\"/><Column id=\"PTNR_NM\" size=\"200\" type=\"string\"/><Column id=\"CNTR_NO\" size=\"40\" type=\"string\"/><Column id=\"CD_CNTR_STTS_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_CNTR_STTS\" size=\"40\" type=\"string\"/><Column id=\"CRT_DAY_STR\" size=\"8\" type=\"string\"/><Column id=\"CRT_DAY_END\" size=\"8\" type=\"string\"/><Column id=\"CRT_DT\" size=\"7\" type=\"string\"/><Column id=\"CRT_DT_STR\" size=\"7\" type=\"string\"/><Column id=\"CRT_DT_END\" size=\"7\" type=\"string\"/><Column id=\"MTRL_NM\" size=\"500\" type=\"string\"/><Column id=\"MTRL_CD\" size=\"20\" type=\"string\"/><Column id=\"CNTR_CFM_DT\" size=\"7\" type=\"string\"/><Column id=\"CNTR_REQ_DT_STR\" size=\"7\" type=\"string\"/><Column id=\"CNTR_REQ_DT_END\" size=\"7\" type=\"string\"/><Column id=\"SORT_ITEM1\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ITEM2\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ITEM3\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ITEM4\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE1\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE2\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE3\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE4\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_NO_ARR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_list", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CD_DFCT_GRNT_PRID_NM\" size=\"60\" type=\"string\"/><Column id=\"CD_DFCT_GRNT_PRID\" size=\"60\" type=\"string\"/><Column id=\"LNK_CNTR_NO\" size=\"40\" type=\"string\"/><Column id=\"TKEY\" size=\"40\" type=\"string\"/><Column id=\"CNTR_AMT\" size=\"22\" type=\"bigdecimal\"/><Column id=\"TTL\" size=\"600\" type=\"string\"/><Column id=\"CRTR_ID\" size=\"50\" type=\"string\"/><Column id=\"CD_CNTR_CNDTN_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_CNTR_CNDTN\" size=\"40\" type=\"string\"/><Column id=\"CD_CRNC_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_CRNC\" size=\"40\" type=\"string\"/><Column id=\"CD_DOC_CTGR_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_DOC_CTGR\" size=\"40\" type=\"string\"/><Column id=\"CNTR_REQR_ID\" size=\"50\" type=\"string\"/><Column id=\"CNTR_REQR_NM\" size=\"90\" type=\"string\"/><Column id=\"LAST_CHGR_ID\" size=\"50\" type=\"string\"/><Column id=\"CD_CNTR_CTGR_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_CNTR_CTGR\" size=\"40\" type=\"string\"/><Column id=\"PTNR_ID\" size=\"40\" type=\"string\"/><Column id=\"PTNR_NM\" size=\"200\" type=\"string\"/><Column id=\"CNTR_NO\" size=\"40\" type=\"string\"/><Column id=\"CNTR_END_DAY\" size=\"8\" type=\"string\"/><Column id=\"CNTR_CFM_DT\" size=\"7\" type=\"string\"/><Column id=\"ATTCH_FILE_CNT\" size=\"22\" type=\"bigdecimal\"/><Column id=\"RMARK\" size=\"1500\" type=\"string\"/><Column id=\"CNTR_PTNR_ID\" size=\"50\" type=\"string\"/><Column id=\"CNTR_REQ_DT\" size=\"7\" type=\"string\"/><Column id=\"ALT_INTL_CFM\" size=\"1\" type=\"string\"/><Column id=\"LAST_CHG_DT\" size=\"7\" type=\"string\"/><Column id=\"CD_CNTR_STTS_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_CNTR_STTS\" size=\"40\" type=\"string\"/><Column id=\"CD_CNTR_TYPE_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_CNTR_TYPE\" size=\"40\" type=\"string\"/><Column id=\"CNTR_BGN_DAY\" size=\"8\" type=\"string\"/><Column id=\"CRT_DT\" size=\"7\" type=\"string\"/><Column id=\"APP_DOC_ID\" size=\"40\" type=\"string\"/><Column id=\"CNTR_TMPL_ID\" size=\"40\" type=\"string\"/><Column id=\"PORG_ID\" size=\"20\" type=\"string\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_sortItem", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CD_NM_LO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_NM_LO\">선택</Col><Col id=\"CD_ID\"/></Row><Row><Col id=\"CD_NM_LO\">계약번호</Col><Col id=\"CD_ID\">C.CNTR_NO</Col></Row><Row><Col id=\"CD_NM_LO\">상태</Col><Col id=\"CD_ID\">C.CD_CNTR_STTS</Col></Row><Row><Col id=\"CD_NM_LO\">계약명</Col><Col id=\"CD_ID\">C.TTL</Col></Row><Row><Col id=\"CD_NM_LO\">계약유형</Col><Col id=\"CD_ID\">C.CD_CNTR_CTGR</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_return", this);
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


            
            // UI Components Initialize
            obj = new Div("div_body", "absolute", "0", "61", null, null, "15", "0", this);
            obj.set_taborder("36");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_list", "absolute", "0%", "10", null, null, "0%", "37", this.div_body);
            obj.set_taborder("8");
            obj.set_binddataset("ds_list");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.getSetter("objNm").set("검색결과 그리드");
            obj.set_cssclass("grd_default");
            obj.set_autoupdatetype("comboselect");
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
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"300\"/><Column size=\"90\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"70\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"운영단위\"/><Cell col=\"1\" text=\"계약번호\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"계약명\"/><Cell col=\"4\" text=\"계약유형\"/><Cell col=\"5\" text=\"계약시작일자\"/><Cell col=\"6\" text=\"계약종료일자\"/><Cell col=\"7\" text=\"총계약금액\"/><Cell col=\"8\" text=\"작성일자\"/><Cell col=\"9\" text=\"담당자\"/></Band><Band id=\"body\"><Cell text=\"bind:BRANCH_NM\" tooltiptext=\"bind:BRANCH_NM\"/><Cell col=\"1\" style=\"color:blue;color2:blue;\" cssclass=\"cell_link\" text=\"bind:CNTR_NO\" maskchar=\" \" tooltiptext=\"bind:CNTR_NO\"/><Cell col=\"2\" text=\"bind:CD_CNTR_STTS_NM\" tooltiptext=\"bind:CD_CNTR_STTS_NM\"/><Cell col=\"3\" style=\"align:left;\" cssclass=\"cell_link\" text=\"bind:TTL\" tooltiptext=\"bind:TTL\"/><Cell col=\"4\" text=\"bind:CD_CNTR_CTGR_NM\" tooltiptext=\"bind:CD_CNTR_CTGR_NM\"/><Cell col=\"5\" displaytype=\"date\" text=\"bind:CNTR_BGN_DAY\" mask=\"yyyy.MM.dd\" maskchar=\" \" calendardisplaynulltype=\"none\" tooltiptext=\"bind:CNTR_BGN_DAY\"/><Cell col=\"6\" displaytype=\"date\" text=\"bind:CNTR_END_DAY\" mask=\"yyyy.MM.dd\" maskchar=\" \" calendardisplaynulltype=\"none\" tooltiptext=\"bind:CNTR_END_DAY\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CNTR_AMT\" mask=\"#,##0.00\" tooltiptext=\"bind:CNTR_AMT\"/><Cell col=\"8\" displaytype=\"date\" edittype=\"none\" text=\"bind:CRT_DT\" mask=\"yyyy.MM.dd\" maskchar=\" \" calendardisplaynulltype=\"none\" tooltiptext=\"bind:CRT_DT\"/><Cell col=\"9\" cssclass=\"cell_link\" text=\"bind:CNTR_REQR_NM\" tooltiptext=\"bind:CNTR_REQR_NM\"/></Band></Format></Formats>");
            this.div_body.addChild(obj.name, obj);
            obj = new Div("div_paing", "absolute", "0%", null, null, "28", "0%", "10", this.div_body);
            obj.set_taborder("9");
            obj.set_scrollbars("none");
            obj.set_url("commComp::commPaging.xfdl");
            this.div_body.addChild(obj.name, obj);

            obj = new Div("div_condition", "absolute", "0", "0", null, "45", "15", null, this);
            obj.set_taborder("45");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label", "absolute", "0", "10", "117", "24", null, null, this.div_condition);
            obj.set_taborder("1");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.div_condition.addChild(obj.name, obj);
            obj = new Edit("edt_cntrNoArr", "absolute", "117", "10", "200", "24", null, null, this.div_condition);
            obj.set_taborder("2");
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("계약번호");
            this.div_condition.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label00", "absolute", "327", "10", "91", "24", null, null, this.div_condition);
            obj.set_taborder("3");
            obj.set_text("계약서상태");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.div_condition.addChild(obj.name, obj);
            obj = new Combo("cbo_cdCntrStts", "absolute", "418", "10", "150", "24", null, null, this.div_condition);
            this.div_condition.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_cssclass("cbo_default");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_innerdataset("ds_cdCT10");
            obj.getSetter("objNm").set("계약서상태");
            obj = new Button("btn_multiSelect", "absolute", "293", "10", "24", "24", null, null, this.div_condition);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_MultiSmall");
            obj.getSetter("objNm").set("계약번호 멀티선택 버튼");
            this.div_condition.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label01", "absolute", "552", "10", "117", "24", null, null, this.div_condition);
            obj.set_taborder("8");
            obj.set_text("계약요청일자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.div_condition.addChild(obj.name, obj);
            obj = new Div("div_crtDt", "absolute", "661", "10", "220", "24", null, null, this.div_condition);
            obj.set_taborder("9");
            obj.set_text("Div01");
            obj.getSetter("objNm").set("계약작성일자");
            obj.set_url("commComp::commCalFromTo.xfdl");
            this.div_condition.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label04", "absolute", "893", "10", "65", "24", null, null, this.div_condition);
            obj.set_taborder("10");
            obj.set_text("계약명");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.div_condition.addChild(obj.name, obj);
            obj = new Edit("edt_ttl", "absolute", "966", "10", "200", "24", null, null, this.div_condition);
            obj.set_taborder("11");
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("계약명");
            this.div_condition.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_body,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("36");
            		p.set_text("Div00");

            	}
            );
            this.div_body.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1042, 43, this.div_condition,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("45");
            		p.set_cssclass("div_WF_SearchBg");

            	}
            );
            this.div_condition.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1220, 711, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("frmSearchCond");
            		p.set_titletext("계약현황");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div_condition.edt_cntrNoArr","value","ds_condition","CNTR_NO_ARR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_condition.cbo_cdCntrStts","value","ds_condition","CD_CNTR_STTS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","div_condition.edt_ttl","value","ds_condition","TTL");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "commComp::commPaging.xfdl");
            this._addPreloadList("fdl", "commComp::commCalFromTo.xfdl");
        };
        
        // User Script
        this.addIncludeScript("PCTRS100L00.xfdl", "lib::lib_all.xjs");
        this.registerScript("PCTRS100L00.xfdl", function(exports) {
        /**
           @file       PCTRS100L00.xfdl
           @desc       계약현황
           @author     박기승
           @makedate   2016.01.28
           @history    2016.04.08  정준화 주석 작업및 추가사항 정리
           @history    2016.09.09  한민희 DB변경에 따라 쿼리 수정.
        */  

        if (this.executeIncludeScript) { this.executeIncludeScript("lib::lib_all.xjs", null, exports); }	//include "lib::lib_all.xjs";

        /**
        	@function	form_oninit()
        	@desc   	폼 oninit이벤트
        */
        this.form_oninit = function(obj,e)
        {
        	this.fn_setCode();
        }

        /**
        	@function   fn_setCode()
        	@desc       공통코드 데이터셋 생성
        */
        this.fn_setCode = function()
        {
        	var param = [
        					  {code:"CM10", sSelectType:"A"} // 문서유형
        					 ,{code:"CT10", sSelectType:"A", sFiltered:"&& CD_ID != 'CT10WRI' && CD_ID != 'CT10CXL' && CD_ID != 'CT10WAT'"} // 계약상태
        				];

        	//공통코드 데이터셋 생성
        	this.gfn_getCommonCode(param);	
        }

        /**
        	@function	form_onload()
        	@desc   	폼 onload이벤트
        */
        this.form_onload = function(obj,e)
        {	
        	// 시스템 공통함수 호출
        	this.gfn_formOnLoad(obj);
            	
        	//그리드 공통버튼 설정
        	this.div_body.div_paing.fn_initGridInfo(obj, this.div_body.grd_list);
        		
        	//그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기
        	this.gfn_setGrdFunc(this.div_body.grd_list);
        	
        	
        	this.div_condition.div_crtDt.fn_setDate(this.ds_condition, "CNTR_REQ_DT_STR", "CNTR_REQ_DT_END");
        	
        	//검색조건 DataSet Row추가
        	this.ds_condition.addRow();
        		
        	//공통코드 콤보 index 처리
        	this.ds_condition.setColumn(0, "CD_CNTR_STTS", "CT10SREQ");
        	this.ds_condition.setColumn(0, "PTNR_ID", application.gds_userInfo.getColumn(0, "PTNR_ID"));
        	
        	this.ds_condition.setColumn(0,"CRT_DAY_STR",this.gfn_addMonth(this.gfn_today(),-1));
        	this.ds_condition.setColumn(0,"CRT_DAY_END",this.gfn_today());
        	
        	//정렬 기본값 셋팅
        	this.ds_condition.setColumn(0,"SORT_ITEM1","");
        	this.ds_condition.setColumn(0,"SORT_TYPE1","");
        	this.ds_condition.setColumn(0,"SORT_ITEM2","");
        	this.ds_condition.setColumn(0,"SORT_TYPE2","");
        	this.ds_condition.setColumn(0,"SORT_ITEM3","");
        	this.ds_condition.setColumn(0,"SORT_TYPE3","");
        	this.ds_condition.setColumn(0,"SORT_ITEM4","");
        	this.ds_condition.setColumn(0,"SORT_TYPE4","");
        		
        	this.fn_commSrch();
        }

        /**
        	@function	fn_preSearch()
        	@desc   	조회 전 처리
        */
        this.fn_preSearch = function()
        {
        	
        	return true;
        }

        /**
        	@function	fn_commSrch()
        	@desc   	조회 프로세스
        */
        this.fn_commSrch = function()
        {
        	if(!this.fn_preSearch()) return false;
        	
        	var sSvcID = "search";
        	var sController = "SCntr_Srch.do";
        	var sInDatasets = "in_ds=ds_condition";
        	var sOutDatasets = "ds_list=ds_srch";
        	var sCallbackFunc = "fn_trCallBack";
        	
            this.div_body.div_paing.gfn_pagingTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
        	@function	fn_commAdd()
        	@desc   	(공통버튼)신규 프로세스
        */
        this.fn_commAdd = function()
        {

        }

        /**
        	@function	fn_commDelete()
        	@desc   	(공통버튼)삭제 프로세스
        */
        this.fn_commDelete = function()
        {

        }

        /**
        	@function	fn_preSave()
        	@desc   	저장 전 처리
        */
        this.fn_preSave = function()
        {
        	return true;
        }

        /**
        	@function	fn_commSave()
        	@desc   	(공통버튼)저장 프로세스
        */
        this.fn_commSave = function()
        {
        	return true;
        }

        /**
        	@function	btn_commCancel()
        	@desc   	(공통버튼)취소 프로세스
        */
        this.btn_commCancel = function()
        {
        	return true;
        }

        /**
        	@function	fn_trCallBack()
        	@desc   	Transaction Callback함수
        */
        this.fn_trCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	
        	if(strErrCd < 0)
        	{
        		return;
        	}
        	
        	switch(strSvcID)
        	{
        		case "search" : 
        		break;
        		
        		default:
        		break;	
        	}
        }

        /**
        	@function	fn_commClose()
        	@desc   	(공통버튼)닫기 : form 닫기 전 공통에서 체크함
        */
        this.fn_commClose = function()
        {	
        	return true;
        }

        /**
        	@function	div_condition_btn_multiSelect_onclick()
        	@desc   	멀티입력 팝업을 호출
        */
        this.div_condition_btn_multiSelect_onclick = function(obj,e)
        {
        	//멀티입력 컴포넌트 호출
        	this.gfn_popMultiInput(this.div_condition.edt_cntrNoArr);
        }

        /**
        	@function	fn_onkeyup_event()
        	@desc   	검색조건에서 ENTER(keycode::13) 입력시 이벤트
        */
        this.fn_onkeyup_event = function(obj,e)
        {
        	//Enter 입력시
        	if(e.keycode == "13")
        	{
        		this.fn_commSrch();
        	}
        }

        /**
        	@function	div_body_grd_list_oncelldblclick()
        	@desc   	그리드 더블클릭 이벤트
        */
        this.div_body_grd_list_oncelldblclick = function(obj,e)
        {
        	if(this.ds_list.rowcount==0) return;
        	if(this.gfn_isNull(this.ds_list.getColumn(e.row, this.gfn_grdBindColName(obj, e.cell)))) return false;
        	
        	if(this.gfn_grdBindColName(obj, e.cell)=="CNTR_NO")
        	{
        		if(system.navigatorname != "IE" && system.navigatorname != "nexacro"){
        			this.gfn_alert("계약은 IE 또는 넥사크로 전용브라우저에서만 실행 가능합니다.");
        			return;
        		}
        		
        		this.gfn_setTmprData("CNTR_NO"		, this.ds_list.getColumn(e.row,"CNTR_NO"));
        		this.gfn_setTmprData("COREXP_KIDS"	, this.ds_list.getColumn(e.row,"COREXP_KIDS"));
        		this.gfn_setTmprData("BRANCH_CD"	, this.ds_list.getColumn(e.row,"BRANCH_CD"));
        		this.gfn_setTmprData("CD_CNTR_STTS"	, this.ds_list.getColumn(e.row,"CD_CNTR_STTS"));
        		this.gfn_openMenuUrl("CTRS::PCTRS100N00.xfdl");
        	}
        	else if(this.gfn_grdBindColName(obj, e.cell)=="TTL")
        	{
        		if(system.navigatorname != "IE" && system.navigatorname != "nexacro"){
        			this.gfn_alert("계약은 IE 또는 넥사크로 전용브라우저에서만 실행 가능합니다.");
        			return;
        		}
        		this.gfn_setTmprData("CNTR_NO"		, this.ds_list.getColumn(e.row,"CNTR_NO"));
        		this.gfn_setTmprData("COREXP_KIDS"	, this.ds_list.getColumn(e.row,"COREXP_KIDS"));
        		this.gfn_setTmprData("BRANCH_CD"	, this.ds_list.getColumn(e.row,"BRANCH_CD"));
        		this.gfn_setTmprData("CD_CNTR_STTS"	, this.ds_list.getColumn(e.row,"CD_CNTR_STTS"));
        		this.gfn_openMenuUrl("CTRS::PCTRS100N00.xfdl");
        	}
        	else if("CNTR_REQR_NM" == this.gfn_grdBindColName(obj, obj.getCellPos())) // 협력사 유저검색
        	{
        		var sArg = {	 branch_cd : this.ds_list.getColumn(e.row, "BRANCH_CD")
        						,  user_id : this.ds_list.getColumn(e.row, "CNTR_REQR_ID")
        					};
        		this.gfn_dialog("PopupUserInfo", "commPop::PPOPC000P07.xfdl", sArg, "fn_popCallBack");
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("oninit", this.form_oninit, this);
            this.div_body.grd_list.addEventHandler("oncelldblclick", this.div_body_grd_list_oncelldblclick, this);
            this.div_condition.edt_cntrNoArr.addEventHandler("onkeyup", this.fn_onkeyup_event, this);
            this.div_condition.cbo_cdCntrStts.addEventHandler("onitemchanged", this.div_condition_CD_RFQ_STTS_onitemchanged, this);
            this.div_condition.btn_multiSelect.addEventHandler("onclick", this.div_condition_btn_multiSelect_onclick, this);
            this.div_condition.sta_WFDA_Label04.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.div_condition.edt_ttl.addEventHandler("onkeyup", this.fn_onkeyup_event, this);

        };

        this.loadIncludeScript("PCTRS100L00.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
