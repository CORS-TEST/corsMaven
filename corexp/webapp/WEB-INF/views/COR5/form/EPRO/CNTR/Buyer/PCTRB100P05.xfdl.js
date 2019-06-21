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
                this.set_name("pop_mtrlSrch");
                this.set_titletext("계약품목검색(싱글)");
                this.set_cssclass("frm_POP_Search");
                this._setFormPosition(0,0,1077,545);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_srchOpt", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"LRG_CLS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MDL_CLS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SML_CLS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SCREEN_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mtrl", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MTRL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PUR_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PUR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LRG_CLS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LRG_CLS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MDL_CLS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MDL_CLS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SML_CLS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SML_CLS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("sta_title", "absolute", "0", "4", null, "30", "640", null, this);
            obj.set_text("품목검색");
            obj.set_cssclass("sta_POP_PopTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "0", "30", "30", "8", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_POP_CloseBtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_condition", "absolute", "5", "42", null, "43", "5", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);
            obj = new Static("sta_WFSA_LabelP", "absolute", "0", "10", "117", "24", null, null, this.div_condition);
            obj.set_taborder("20");
            obj.set_text("품목분류");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div_condition.addChild(obj.name, obj);
            obj = new Button("btn_search", "absolute", null, "10", "60", "24", "11", null, this.div_condition);
            obj.set_taborder("21");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.div_condition.addChild(obj.name, obj);
            obj = new Edit("edt_mtrlGrpNm00", "absolute", "642", "10", "250", "24", null, null, this.div_condition);
            obj.set_taborder("23");
            obj.getSetter("objNm").set("품목명");
            this.div_condition.addChild(obj.name, obj);
            obj = new Static("sta_WFSA_PointLabel00", "absolute", "470", "10", "70", "24", null, null, this.div_condition);
            obj.set_taborder("24");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div_condition.addChild(obj.name, obj);
            obj = new Edit("edt_mtrlpNm", "absolute", "540", "10", "100", "24", null, null, this.div_condition);
            obj.set_taborder("25");
            obj.getSetter("objNm").set("품목코드");
            this.div_condition.addChild(obj.name, obj);
            obj = new Div("div_mtrlGrp", "absolute", "117", "10", "306", "24", null, null, this.div_condition);
            obj.set_taborder("26");
            obj.set_text("Div01");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("품목그룹");
            obj.set_url("commComp::commMtrlType.xfdl");
            this.div_condition.addChild(obj.name, obj);

            obj = new Grid("grd_list", "absolute", "5", "120", null, null, "5", "37", this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_mtrl");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellclickbound("cell");
            obj.getSetter("f_filter").set("N");
            obj.getSetter("f_excel").set("Y");
            obj.getSetter("f_hide").set("N");
            obj.getSetter("f_find").set("N");
            obj.getSetter("f_sort").set("Y");
            obj.getSetter("f_fix").set("N");
            obj.getSetter("f_height").set("N");
            obj.getSetter("f_save").set("N");
            obj.getSetter("f_mode").set("Y");
            obj.getSetter("f_init").set("N");
            obj.getSetter("f_colSize").set("N");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"557\"/><Column size=\"80\"/><Column size=\"45\"/><Column size=\"260\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"품목코드\"/><Cell col=\"1\" text=\"품목명\"/><Cell col=\"2\" text=\"단가\"/><Cell col=\"3\" text=\"단위\"/><Cell col=\"4\" text=\"품목분류명\"/><Cell col=\"5\" text=\"품목계정명\"/></Band><Band id=\"body\"><Cell cssclass=\"cell_link\" text=\"bind:MTRL_CD\"/><Cell col=\"1\" style=\"align:left;\" cssclass=\"cell_link\" text=\"bind:MTRL_NM2\" tooltiptext=\"bind:MTRL_NM2\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CNTR_PRICE\" mask=\"#,##0.00\"/><Cell col=\"3\" text=\"bind:CD_PUR_UNIT_NM\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:MTRL_GRP_NM2\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:GR_ACNT_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paing", "absolute", "5", null, null, "28", "5", "10", this);
            obj.set_taborder("4");
            obj.set_scrollbars("none");
            obj.set_url("commComp::commPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_rtn", "absolute", null, "91", "65", "24", "5", null, this);
            obj.set_taborder("5");
            obj.set_text("적용");
            obj.set_cssclass("btn_WF_CRUD");
            obj.getSetter("objNm").set("적용");
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
            obj = new Layout("default", "", 1077, 545, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("계약품목검색(싱글)");
            		p.set_cssclass("frm_POP_Search");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div_condition.edt_mtrlpNm","value","ds_srchOpt","MTRL_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_condition.edt_mtrlGrpNm00","value","ds_srchOpt","MTRL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "commComp::commMtrlType.xfdl");
            this._addPreloadList("fdl", "commComp::commPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("PCTRB100P05.xfdl", "lib::lib_all.xjs");
        this.registerScript("PCTRB100P05.xfdl", function(exports) {
        /**
           @file       PCTRB100P05.xfdl
           @desc       계약품목검색(싱글)
           @author     송태봉
           @makedate   2017.01.19
           @history    
        */  

        if (this.executeIncludeScript) { this.executeIncludeScript("lib::lib_all.xjs", null, exports); }	//include "lib::lib_all.xjs"

        
        /**
        	@function	pop_MatGroupSearch_onload()
        	@desc   	폼 onload 이벤트
        */
        this.pop_MatGroupSearch_onload = function(obj,e)
        {
        	//시스템 공통함수 호출 : 팝업
        	this.gfn_popOnLoad(this);
        	
        	//그리드 공통버튼 설정
        	this.div_paing.fn_initGridInfo(obj, this.grd_list);
        			
        	//그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기
        	this.gfn_setGrdFunc(this.grd_list);
         
        	this.ds_srchOpt.addRow();
        	
        	//부모창으로 부터 전달받은 값	
        	var ownFrame = this.getOwnerFrame();
        	
        	//부모창으로 부터 전달받은 값을 NULL 이 아니면 검색조건 DataSet에 담는다.
        	if(!this.gfn_isNull(ownFrame.agv_nm)){
        	 		this.ds_srchOpt.setColumn(0, "MTRL_NM"		,ownFrame.agv_nm);
        	 		this.fn_search();
        	}
        	
        	this.div_condition.div_mtrlGrp.fn_setMtrlGrp(this.ds_srchOpt,"LRG_CLS_ID","MDL_CLS_ID","SML_CLS_ID","",ownFrame.agv_cd_doc_ctgr);
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
        	
        	var sSvcID = "Ctr_MtrlSrch";
        	var sController = "Ctr_MtrlSrch.do";
        	var sInDatasets = "in_ds=ds_srchOpt";
        	var sOutDatasets = "ds_mtrl=out_list";
        	var sCallbackFunc = "fn_trCallBack";
        	
            this.div_paing.gfn_pagingTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
            
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
        		case "Sys_SrcGrpSrch" :	
        		break;
        		
        		case "CPop_ComMtrlSrch" :
        		break;
        		
        		case "Ctr_MtrlSrch" :
        			this.grd_list.setFocus();
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
         

        this.Tab00_tabpage1_grd_list_oncellclick = function(obj,e)
        {
        	if(this.ds_mtrl.rowcount==0) return;
        	var bindCol = obj.getCellProperty("Body",e.cell,"text").split("bind:").join("");
        }

        this.Tab00_tabpage1_div_condition_edt_mtrlGrpNm00_onkeyup = function(obj,e)
        {
        	//Enter 입력시
        	if(e.keycode == "13"){
        		this.fn_search();
        	}
        }

        this.grd_list_oncelldblclick = function(obj,e)
        {
        	if("MTRL_CD" == this.gfn_grdBindColName(obj, obj.getCellPos()))
        	{	
        		var sArg = {
        					mtrl_cd:this.ds_mtrl.getColumn(e.row, "MTRL_CD")
        					};
        		this.gfn_dialog("PopupComMtrlView", "commPop::PPOPC700P01.xfdl", sArg, "fn_popCallBack");
        	}else if("MTRL_NM2" == this.gfn_grdBindColName(obj, obj.getCellPos()))
        	{	
        		var sArg = {
        					mtrl_cd:this.ds_mtrl.getColumn(e.row, "MTRL_CD")
        					};
        		this.gfn_dialog("PopupComMtrlView", "commPop::PPOPC700P01.xfdl", sArg, "fn_popCallBack");
        	} else{
        		var rtn;
        		
        		rtn = this.gfn_getSelRowString(this.ds_mtrl);
        		if(rtn){
        			application.gds_commCd.filter("");
        			this.close(rtn);
        		}
        	}
        }

        this.btn_rtn_onclick = function(obj,e)
        {
        	var rtn;
        	rtn = this.gfn_getSelRowString(this.ds_mtrl);
        	
        	if(rtn){
        		application.gds_commCd.filter("");
        		this.close(rtn);
        	}	
        }

        this.grd_list_onkeyup = function(obj,e)
        {
        	if(e.keycode == "13"){
        		var rtn;
        		rtn = this.gfn_getSelRowString(this.ds_mtrl);
        		
        		if(rtn){
        			application.gds_commCd.filter("");
        			this.close(rtn);
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.pop_MatGroupSearch_onload, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.div_condition.btn_search.addEventHandler("onclick", this.fn_search, this);
            this.div_condition.edt_mtrlGrpNm00.addEventHandler("onkeydown", this.Div00_edMtrlGrpNm_onkeydown, this);
            this.div_condition.edt_mtrlGrpNm00.addEventHandler("onkeyup", this.Tab00_tabpage1_div_condition_edt_mtrlGrpNm00_onkeyup, this);
            this.div_condition.edt_mtrlGrpNm00.addEventHandler("oneditclick", this.Div00_edMtrlGrpNm_oneditclick, this);
            this.div_condition.edt_mtrlpNm.addEventHandler("onkeydown", this.Div00_edMtrlGrpNm_onkeydown, this);
            this.div_condition.edt_mtrlpNm.addEventHandler("onkeyup", this.Tab00_tabpage1_div_condition_edt_mtrlGrpNm00_onkeyup, this);
            this.div_condition.edt_mtrlpNm.addEventHandler("oneditclick", this.Div00_edMtrlGrpNm_oneditclick, this);
            this.grd_list.addEventHandler("oncelldblclick", this.grd_list_oncelldblclick, this);
            this.grd_list.addEventHandler("onkeyup", this.grd_list_onkeyup, this);
            this.btn_rtn.addEventHandler("onclick", this.btn_rtn_onclick, this);

        };

        this.loadIncludeScript("PCTRB100P05.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
