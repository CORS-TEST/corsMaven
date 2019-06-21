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
                this.set_name("pop_cntrTmplSrch");
                this.set_titletext("계약서 템플릿참조");
                this.set_cssclass("frm_POP_Search");
                this._setFormPosition(0,0,999,509);
            }
            this.getSetter("inheritanceid").set("");

            
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
            obj._setContents("<ColumnInfo><Column id=\"CD_CNTR_CTGR\" size=\"40\" type=\"string\"/><Column id=\"CD_CNTR_TYPE\" size=\"40\" type=\"string\"/><Column id=\"TTL\" size=\"600\" type=\"string\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column type=\"string\" id=\"CHECKED\" size=\"1\"/><Column type=\"string\" id=\"TKEY\" size=\"40\"/><Column type=\"string\" id=\"ALT_USE\" size=\"1\"/><Column type=\"string\" id=\"CNTR_CNTNT\" size=\"4000\"/><Column type=\"string\" id=\"TTL\" size=\"600\"/><Column type=\"string\" id=\"CRTR_ID\" size=\"50\"/><Column type=\"string\" id=\"RMARK\" size=\"1500\"/><Column type=\"string\" id=\"LAST_CHG_DT\" size=\"7\"/><Column type=\"string\" id=\"CD_CNTR_TYPE_NM\" size=\"40\"/><Column type=\"string\" id=\"CD_CNTR_TYPE\" size=\"40\"/><Column type=\"string\" id=\"LAST_CHGR_ID\" size=\"50\"/><Column type=\"string\" id=\"CD_CNTR_CTGR_NM\" size=\"40\"/><Column type=\"string\" id=\"CD_CNTR_CTGR\" size=\"40\"/><Column type=\"string\" id=\"CRT_DT\" size=\"7\"/><Column type=\"string\" id=\"PORG_ID\" size=\"20\"/><Column type=\"string\" id=\"CNTR_TMPL_ID\" size=\"40\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grd_list", "absolute", "11", "113", null, null, "11", "37", this);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_cellclickbound("cell");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"203\"/><Column size=\"546\"/><Column size=\"95\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"계약유형\"/><Cell col=\"1\" text=\"계약구분\"/><Cell col=\"2\" text=\"제목\"/><Cell col=\"3\" text=\"최종수정일자\"/></Band><Band id=\"body\"><Cell text=\"bind:CD_CNTR_CTGR_NM\"/><Cell col=\"1\" text=\"bind:CD_CNTR_TYPE_NM\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:TTL\"/><Cell col=\"3\" text=\"bind:LAST_CHG_DT\" mask=\"@@@@.@@.@@\" maskchar=\" \"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "30", "30", "30", "8", null, this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_POP_CloseBtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_paing", "absolute", "1.2%", null, null, "28", "1.2%", "10", this);
            obj.set_taborder("6");
            obj.set_scrollbars("none");
            obj.set_url("commComp::commPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_condition", "absolute", "11", "36", null, "43", "11", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);
            obj = new Button("btn_search", "absolute", "905", "10", "59", "24", null, null, this.div_condition);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            obj.getSetter("objNm").set("검색버튼");
            this.div_condition.addChild(obj.name, obj);
            obj = new Static("sta_bsnsPlc", "absolute", "0", "10", "117", "24", null, null, this.div_condition);
            obj.set_taborder("0");
            obj.set_text("계약유형");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.div_condition.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label26", "absolute", "237", "10", "117", "24", null, null, this.div_condition);
            obj.set_taborder("2");
            obj.set_text("계약구분");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.div_condition.addChild(obj.name, obj);
            obj = new Combo("cb_cdCntrCtgr", "absolute", "117", "10", "120", "24", null, null, this.div_condition);
            this.div_condition.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_cdCT11");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("계약유형");
            obj = new Combo("cb_cdCntrType", "absolute", "354", "10", "120", "21", null, null, this.div_condition);
            this.div_condition.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_cdCT19");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("계약구분");
            obj = new Static("sta_WFDA_Label00", "absolute", "487", "10", "117", "24", null, null, this.div_condition);
            obj.set_taborder("6");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.div_condition.addChild(obj.name, obj);
            obj = new Edit("edt_Ttl", "absolute", "604", "10", "250", "24", null, null, this.div_condition);
            obj.set_taborder("7");
            obj.set_lengthunit("utf8");
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("계약명");
            this.div_condition.addChild(obj.name, obj);

            obj = new Static("sta_title00", "absolute", "0%", "0", null, "30", "64.06%", null, this);
            obj.set_taborder("1");
            obj.set_text("계약서 템플릿참조");
            obj.set_cssclass("sta_POP_PopTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close00", "absolute", "96.2%", "0", null, "30", "0.8%", null, this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_POP_CloseBtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_app", "absolute", null, "84", "59", "24", "22", null, this);
            obj.set_taborder("9");
            obj.set_text("적용");
            obj.set_cssclass("btn_WF_Custom");
            obj.getSetter("objNm").set("적용");
            obj.getSetter("lbcd").set("");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_condition,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.set_cssclass("div_WF_SearchBg");

            	}
            );
            this.div_condition.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 999, 509, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("계약서 템플릿참조");
            		p.set_cssclass("frm_POP_Search");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div_condition.edt_Ttl","value","ds_condition","TTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_condition.cb_cdCntrCtgr","value","ds_condition","CD_CNTR_CTGR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_condition.cb_cdCntrType","value","ds_condition","CD_CNTR_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "commComp::commPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("PCTRB100P01.xfdl", "lib::lib_all.xjs");
        this.registerScript("PCTRB100P01.xfdl", function(exports) {
        /**
           @file       PCTRB100P01.xfdl
           @desc       계약서 템플릿참조
           @author     김민성
           @makedate   2016.04.08
           @history    
        */
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::lib_all.xjs", null, exports); }	//include "lib::lib_all.xjs"

        /**
        	@var  this.fv_value
        	@desc 전역변수 사용안함
        */

        /**
        	@function	pop_cntrTmplSrch_oninit()
        	@desc   	폼 init이벤트
        */
        this.pop_cntrTmplSrch_oninit = function(obj,e)
        {
        	this.fn_setCode();
        }

        /**
        	@function	fn_setCode()
        	@desc   	콤보박스 세팅.
        */
        this.fn_setCode = function()
        {
        	var param = [
        					 {code:"CT19", sSelectType:"A"}
        					,{code:"CT11", sSelectType:"A"}
        				];

        	//공통코드 데이터셋 생성 : "ds_cd" + code + sfx
        	this.gfn_getCommonCode(param);
        }

        

        /**
        	@function	pop_cntrTmplSrch_onload()
        	@desc   	폼 onload이벤트
        */
         this.pop_cntrTmplSrch_onload = function(obj,e)
        {
        	//시스템 공통함수 호출 : 팝업
        	this.gfn_popOnLoad(this);
        	
        	//그리드 공통버튼 설정
        	this.div_paing.fn_initGridInfo(obj, this.grd_list);
        	//그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기
        	this.gfn_setGrdFunc(this.grd_list);
        	
        	//검색조건 DataSet Row추가
        	this.ds_condition.addRow();
        	this.ds_condition.setColumn(0,"CD_CNTR_TYPE","");
        	this.ds_condition.setColumn(0,"CD_CNTR_CTGR","");
        	this.ds_condition.setColumn(0,"ALT_USE","Y"); //템플릿 참조 시, 사용여부가 'Y'인것만을 불러온다.
        	
        	this.fn_search();
        }
         
        /**
        	@function	div_condition_btn_search_onclick()
        	@desc   	조회
        */
        this.div_condition_btn_search_onclick = function(obj,e)
        {
        	this.fn_search();
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
        	@function	fn_search()
        	@desc   	조회 프로세스
        */
        this.fn_search = function()
        {
        	if(!this.fn_preSearch()) return false;
        	var sSvcID = "search";
        	var sController = "Cntr_TmplSrch.do";
        	var sInDatasets = "in_ds=ds_condition";
        	var sOutDatasets = "ds_list=ds_srch";
        	var sCallbackFunc = "fn_trCallBack";
        	
            this.div_paing.gfn_pagingTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
        	@function	fn_callBack()
        	@desc   	Transaction Callback함수
        */
        this.fn_trCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	if(strErrCd < 0){
        		return;
        	}
        	
        	switch(strSvcID){
        		case "search" :	
        		break;
        		
        		default:
        		break;	
        	}
        }

        /**
        	@function	btn_close_onclick()
        	@desc   	팝업닫기
        */
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }
         

        /**
        	@function	grd_list_oncelldblclick()
        	@desc   	그리드 더블클릭시 데이터적용
        */
        this.grd_list_oncelldblclick = function(obj,e)
        {
        	var rtn = this.gfn_getSelRowString(this.ds_list);
        	
        	if(rtn){
        		this.close(rtn);
        	}
        }

        /**
        	@function	btn_app_onclick()
        	@desc   	적용버튼 클릭
        */
        this.btn_app_onclick = function(obj,e)
        {
        	if(this.ds_list.rowposition < 0){
        		this.gfn_alert("선택된 행이 없습니다.");
        		return;
        		
        	} else{
        		var rtn = this.gfn_getSelRowString(this.ds_list);
        		this.close(rtn);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.pop_cntrTmplSrch_onload, this);
            this.addEventHandler("oninit", this.pop_cntrTmplSrch_oninit, this);
            this.grd_list.addEventHandler("oncelldblclick", this.grd_list_oncelldblclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.div_condition.btn_search.addEventHandler("onclick", this.div_condition_btn_search_onclick, this);
            this.btn_close00.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_app.addEventHandler("onclick", this.btn_app_onclick, this);

        };

        this.loadIncludeScript("PCTRB100P01.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
