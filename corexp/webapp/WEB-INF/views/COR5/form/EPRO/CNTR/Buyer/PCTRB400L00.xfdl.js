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
                this.set_name("PCTRB400L00");
                this.set_titletext("계약템플릿작성현황");
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
            obj._setContents("<ColumnInfo><Column id=\"TKEY\" size=\"40\" type=\"string\"/><Column id=\"ALT_USE\" size=\"1\" type=\"string\"/><Column id=\"CD_CNTR_TYPE_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_CNTR_TYPE\" size=\"40\" type=\"string\"/><Column id=\"CD_CNTR_CTGR_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_CNTR_CTGR\" size=\"40\" type=\"string\"/><Column id=\"PORG_ID\" size=\"20\" type=\"string\"/><Column id=\"SORT_ITEM1\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ITEM2\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ITEM3\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ITEM4\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE1\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE2\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE3\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE4\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"TKEY\" size=\"40\" type=\"string\"/><Column id=\"ALT_USE\" size=\"1\" type=\"string\"/><Column id=\"CNTR_CNTNT\" size=\"4000\" type=\"string\"/><Column id=\"TTL\" size=\"600\" type=\"string\"/><Column id=\"CRTR_ID\" size=\"50\" type=\"string\"/><Column id=\"CRTR_NM\" size=\"90\" type=\"string\"/><Column id=\"RMARK\" size=\"1500\" type=\"string\"/><Column id=\"LAST_CHG_DT\" size=\"7\" type=\"string\"/><Column id=\"CD_CNTR_TYPE_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_CNTR_TYPE\" size=\"40\" type=\"string\"/><Column id=\"LAST_CHGR_ID\" size=\"50\" type=\"string\"/><Column id=\"CD_CNTR_CTGR_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_CNTR_CTGR\" size=\"40\" type=\"string\"/><Column id=\"CRT_DT\" size=\"7\" type=\"string\"/><Column id=\"PORG_ID\" size=\"20\" type=\"string\"/><Column id=\"CNTR_TMPL_ID\" size=\"40\" type=\"string\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("ds_sortItem", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CD_NM_LO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_NM_LO\">--선택--</Col><Col id=\"CD_ID\"/></Row><Row><Col id=\"CD_NM_LO\">계약유형</Col><Col id=\"CD_ID\">CD_CNTR_CTGR</Col></Row><Row><Col id=\"CD_NM_LO\">계약구분</Col><Col id=\"CD_ID\">CD_CNTR_TYPE</Col></Row><Row><Col id=\"CD_NM_LO\">사용여부</Col><Col id=\"CD_ID\">ALT_USE</Col></Row><Row><Col id=\"CD_NM_LO\">관리번호</Col><Col id=\"CD_ID\">CNTR_TMPL_ID</Col></Row><Row><Col id=\"CD_NM_LO\">계약명</Col><Col id=\"CD_ID\">TTL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_body", "absolute", "0", "120", null, null, "15", "0", this);
            obj.set_taborder("36");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_list", "absolute", "0", "10", null, null, "0", "37", this.div_body);
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
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/><Column size=\"85\"/><Column size=\"75\"/><Column size=\"352\"/><Column size=\"91\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"계약유형\" combodataset=\"ds_cdET31\" combocodecol=\"CD_NM_LO\" combodatacol=\"CD_ID\"/><Cell col=\"1\" text=\"계약구분\"/><Cell col=\"2\" text=\"관리번호\"/><Cell col=\"3\" text=\"계약명\"/><Cell col=\"4\" text=\"작성자\"/><Cell col=\"5\" text=\"작성일자\"/><Cell col=\"6\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:CD_CNTR_CTGR_NM\"/><Cell col=\"1\" text=\"bind:CD_CNTR_TYPE_NM\"/><Cell col=\"2\" style=\"color:blue;color2:blue;\" cssclass=\"cell_link\" text=\"bind:CNTR_TMPL_ID\" maskchar=\" \"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:TTL\"/><Cell col=\"4\" text=\"bind:CRTR_NM\"/><Cell col=\"5\" text=\"bind:CRT_DT\" mask=\"@@@@.@@.@@\" maskchar=\" \"/><Cell col=\"6\" expr=\"expr:ALT_USE=='Y'?'예':'아니오'\" maskchar=\" \"/></Band></Format></Formats>");
            this.div_body.addChild(obj.name, obj);
            obj = new Div("div_paing", "absolute", "0", null, null, "28", "0", "10", this.div_body);
            obj.set_taborder("9");
            obj.set_scrollbars("none");
            obj.set_url("commComp::commPaging.xfdl");
            this.div_body.addChild(obj.name, obj);

            obj = new Div("div_condition1", "absolute", "0", "43", null, "64", "15", null, this);
            obj.set_taborder("46");
            obj.set_cssclass("div_WF_SearchBg2");
            obj.getSetter("objNm").set("");
            this.addChild(obj.name, obj);
            obj = new Static("sta_order", "absolute", "0", "10", "117", "24", null, null, this.div_condition1);
            obj.set_taborder("107");
            obj.set_text("정렬순서");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("정렬순서");
            this.div_condition1.addChild(obj.name, obj);
            obj = new Static("stc_warning", "absolute", "0", "44", null, "19", "0", null, this.div_condition1);
            obj.set_taborder("108");
            obj.set_text("- 검색조건 없이 검색 시 속도가 저하 될 수 있습니다.");
            obj.set_cssclass("sta_WF_SearchText");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("- 검색조건 없이 검색 시 속도가 저하 될 수 있습니다.");
            this.div_condition1.addChild(obj.name, obj);
            obj = new Div("div_order", "absolute", "117", "10", "1058", "24", null, null, this.div_condition1);
            obj.set_taborder("118");
            obj.set_text("Div00");
            obj.getSetter("objNm").set("");
            obj.set_url("commComp::commOrderBy.xfdl");
            this.div_condition1.addChild(obj.name, obj);

            obj = new Button("btn_fold", "absolute", null, "107", "63", "13", "15", null, this);
            obj.set_taborder("47");
            obj.set_cssclass("btn_WF_SearchClose");
            this.addChild(obj.name, obj);

            obj = new Div("div_condition", "absolute", "0", "0", null, "43", "15", null, this);
            obj.set_taborder("45");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label", "absolute", "0", "10", "117", "24", null, null, this.div_condition);
            obj.set_taborder("1");
            obj.set_text("계약유형");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.div_condition.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label00", "absolute", "267", "10", "117", "24", null, null, this.div_condition);
            obj.set_taborder("3");
            obj.set_text("계약구분");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.div_condition.addChild(obj.name, obj);
            obj = new Combo("cb_cdCntrType", "absolute", "384", "10", "150", "24", null, null, this.div_condition);
            this.div_condition.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_cssclass("cbo_default");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_innerdataset("ds_cdCT19");
            obj.getSetter("objNm").set("계약구분");
            obj.set_index("-1");
            obj = new Static("sta_WFDA_Label01", "absolute", "534", "10", "117", "24", null, null, this.div_condition);
            obj.set_taborder("5");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.div_condition.addChild(obj.name, obj);
            obj = new Combo("cbo_altUse", "absolute", "651", "10", "100", "24", null, null, this.div_condition);
            this.div_condition.addChild(obj.name, obj);
            var cbo_altUse_innerdataset = new Dataset("cbo_altUse_innerdataset", this.div_condition.cbo_altUse);
            cbo_altUse_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(cbo_altUse_innerdataset);
            obj.set_taborder("8");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("사용여부");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("-1");
            obj = new Combo("cbo_cntrCtgr", "absolute", "117", "10", "150", "24", null, null, this.div_condition);
            this.div_condition.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_cdCT11");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("계약유형");
            obj.set_index("-1");


            
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
            obj = new Layout("default", "", 0, 64, this.div_condition1,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("46");
            		p.set_cssclass("div_WF_SearchBg2");
            		p.getSetter("objNm").set("");

            	}
            );
            this.div_condition1.addLayout(obj.name, obj);

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
            		p.set_titletext("계약템플릿작성현황");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div_condition.cb_cdCntrType","value","ds_condition","CD_CNTR_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_condition.cbo_cntrCtgr","value","ds_condition","CD_CNTR_CTGR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_condition.cbo_altUse","value","ds_condition","ALT_USE");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "commComp::commPaging.xfdl");
            this._addPreloadList("fdl", "commComp::commOrderBy.xfdl");
        };
        
        // User Script
        this.addIncludeScript("PCTRB400L00.xfdl", "lib::lib_all.xjs");
        this.registerScript("PCTRB400L00.xfdl", function(exports) {
        /**
           @file       PCTRB400L00.xfdl
           @desc       계약템플릿현황
           @author     김민성
           @makedate   2016.04.08
           @history    
        */
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::lib_all.xjs", null, exports); }	//include "lib::lib_all.xjs";

        /**
        	@var  this.fv_value
        	@desc 전역변수 사용안함
        */

        /**
        	@function	form_oninit()
        	@desc   	폼 oninit이벤트
        */
        this.form_oninit = function(obj,e)
        {
        	this.fn_setCode();
        		
        }

        this.fn_setCode = function(){
        	
        	//콤보박스 생성시 S:선택, A:전체
        	var param = [
        					{code:"CT11", sSelectType:"A"} // 계약유형
        					 ,{code:"CT19", sSelectType:"A"} // 계약구분
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
        	
        	this.parent.div_commBtns.btn_comDel.set_visible(false);  //삭제 버튼
        	this.parent.div_commBtns.btn_commSave.set_visible(false); //저장 버튼

        	//그리드설정
        	this.div_body.div_paing.fn_initGridInfo(obj, this.div_body.grd_list);
        	//그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기
        	this.gfn_setGrdFunc(this.div_body.grd_list);
        	
        	//조회조건 Div 접기/펼치기 세팅
        	this.gfn_setDivFoldBtn(this.btn_fold);
        	
        	this.gfn_btnRange(this.parent.div_commBtns.btn_commSrch);
        	
        	//검색조건 DataSet Row추가
        	this.ds_condition.addRow();
        	
        	//공통코드 콤보 index 처리
        	this.ds_condition.setColumn(0, "CD_CNTR_TYPE", "");
        	this.ds_condition.setColumn(0, "CD_CNTR_CTGR", "");
        	this.ds_condition.setColumn(0, "ALT_USE", "");
        	
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
        	var sController = "Cntr_TmplSrch.do";
        	var sInDatasets = "in_ds=ds_condition";
        	var sOutDatasets = "ds_list=ds_srch";
        	var sCallbackFunc = "fn_trCallBack";
        	
            this.div_body.div_paing.gfn_pagingTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
        	@function	fn_commAdd()
        	@desc   	(공통버튼)신규
        */
        this.fn_commAdd = function()
        {
        	this.gfn_openMenuUrl("CTRB::PCTRB400N00.xfdl");
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
        	@function	fn_callBack()
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
        	//데이터셋 수정여부 체크
        	if(this.gfn_getDsUpdate(this.ds_list))
        	{
        		return false;
        	}
        	
        	return true;
        }

        /**
        	@function	div_body_grd_list_oncelldblclick()
        	@desc   	그리드 더블클릭 이벤트
        */
        this.div_body_grd_list_oncelldblclick = function(obj,e)
        {
        	if(this.ds_list.rowcount==0) return;
        	
        	if(this.gfn_grdBindColName(obj, e.cell)=="CNTR_TMPL_ID") {
        		this.gfn_setTmprData("CNTR_TMPL_ID", this.ds_list.getColumn(e.row,"CNTR_TMPL_ID"));
        		this.gfn_setTmprData("BRANCH_CD", this.ds_list.getColumn(e.row,"BRANCH_CD"));
        		this.gfn_openMenuUrl("CTRB::PCTRB400N00.xfdl");
        	}
        }
         
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("oninit", this.form_oninit, this);
            this.div_body.grd_list.addEventHandler("oncelldblclick", this.div_body_grd_list_oncelldblclick, this);
            this.div_condition.cb_cdCntrType.addEventHandler("onitemchanged", this.div_condition_CD_RFQ_STTS_onitemchanged, this);
            this.div_condition.cbo_cntrCtgr.addEventHandler("onitemchanged", this.div_condition_CD_RFQ_STTS_onitemchanged, this);

        };

        this.loadIncludeScript("PCTRB400L00.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
