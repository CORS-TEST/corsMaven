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
                this.set_name("pop_cntrRefSrch");
                this.set_titletext("계약참조팝업(견적에서사용)");
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
            obj._setContents("<ColumnInfo><Column id=\"TTL\" size=\"40\" type=\"string\"/><Column id=\"PTNR_NM\" size=\"600\" type=\"string\"/><Column id=\"CD_DOC_CTGR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"CRTR_ID\" type=\"string\" size=\"50\"/><Column id=\"CNTR_NO\" type=\"string\" size=\"40\"/><Column id=\"CRTR_NM\" type=\"string\" size=\"4000\"/><Column id=\"CNTR_REQ_DT\" type=\"string\" size=\"8\"/><Column id=\"PTNR_NM\" type=\"string\" size=\"4000\"/><Column id=\"PTNR_ID\" type=\"string\" size=\"40\"/><Column id=\"TTL\" type=\"string\" size=\"600\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cntrItem", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cntr", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grd_list", "absolute", "11", "89", null, null, "11", "37", this);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_cellclickbound("cell");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"553\"/><Column size=\"83\"/><Column size=\"121\"/><Column size=\"95\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"계약번호\"/><Cell col=\"1\" text=\"계약명\"/><Cell col=\"2\" text=\"계약일자\"/><Cell col=\"3\" text=\"협력사\"/><Cell col=\"4\" text=\"계약담당자\"/></Band><Band id=\"body\"><Cell text=\"bind:CNTR_NO\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:TTL\"/><Cell col=\"2\" displaytype=\"date\" style=\"align: ;\" text=\"bind:CNTR_REQ_DT\" mask=\"yyyy.MM.dd\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:PTNR_NM\"/><Cell col=\"4\" text=\"bind:CRTR_NM\" maskchar=\" \"/></Band></Format></Formats>");
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
            obj = new Static("edt_ptnrNm", "absolute", "516", "10", "81", "24", null, null, this.div_condition);
            obj.set_taborder("6");
            obj.set_text("협력사");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.div_condition.addChild(obj.name, obj);
            obj = new Edit("edt_Ttl", "absolute", "597", "10", "250", "24", null, null, this.div_condition);
            obj.set_taborder("7");
            obj.set_lengthunit("utf8");
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("계약명");
            this.div_condition.addChild(obj.name, obj);
            obj = new Static("edt_ttl", "absolute", "185", "10", "81", "24", null, null, this.div_condition);
            obj.set_taborder("8");
            obj.set_text("계약명");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.div_condition.addChild(obj.name, obj);
            obj = new Edit("edt_Ttl00", "absolute", "266", "10", "250", "24", null, null, this.div_condition);
            obj.set_taborder("9");
            obj.set_lengthunit("utf8");
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("계약명");
            this.div_condition.addChild(obj.name, obj);
            obj = new Combo("cb_SortType00", "absolute", "8.72%", "10", null, "24", "81.03%", null, this.div_condition);
            this.div_condition.addChild(obj.name, obj);
            var cb_SortType00_innerdataset = new Dataset("cb_SortType00_innerdataset", this.div_condition.cb_SortType00);
            cb_SortType00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">[선택]</Col></Row><Row><Col id=\"codecolumn\">ASC</Col><Col id=\"datacolumn\">오름차순</Col></Row><Row><Col id=\"codecolumn\">DESC</Col><Col id=\"datacolumn\">내림차순</Col></Row></Rows>");
            obj.set_innerdataset(cb_SortType00_innerdataset);
            obj.set_taborder("10");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("정렬방식_1");
            obj.set_innerdataset("ds_cdCM10");
            obj = new Static("edt_ttl01", "absolute", "4", "10", "81", "24", null, null, this.div_condition);
            obj.set_taborder("11");
            obj.set_text("계약명");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.div_condition.addChild(obj.name, obj);

            obj = new Static("sta_title00", "absolute", "0%", "5", null, "30", "91.89%", null, this);
            obj.set_taborder("1");
            obj.set_text("계약참조");
            obj.set_cssclass("sta_POP_PopTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close00", "absolute", "96.2%", "3", null, "30", "0.8%", null, this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_POP_CloseBtn");
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
            		p.set_titletext("계약참조팝업(견적에서사용)");
            		p.set_cssclass("frm_POP_Search");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div_condition.edt_Ttl","value","ds_condition","PTNR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_condition.edt_Ttl00","value","ds_condition","TTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","div_condition.cb_SortType00","value","ds_condition","SORT_TYPE1");
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
        this.addIncludeScript("PCTRB100P03.xfdl", "lib::lib_all.xjs");
        this.registerScript("PCTRB100P03.xfdl", function(exports) {
        /**
           @file       PCTRB100P03.xfdl
           @desc       계약참조팝업
           @author     배열
           @makedate   2016.08.08
           @history    
        */
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::lib_all.xjs", null, exports); }	//include "lib::lib_all.xjs"
         
        /**
        	@function	pop_cntrRefSrch_onload()
        	@desc   	폼 onload이벤트
        */
        this.pop_cntrRefSrch_onload = function(obj,e)
        {

        	var param = [
        					 {code:"CM10"} //단위
        				];

        	//공통코드 데이터셋 생성 : "ds_cd" + code + sfx
        	this.gfn_getCommonCode(param);
        	

        	//그리드 공통버튼 설정
        	this.div_paing.fn_initGridInfo(obj, this.grd_list);
        	//그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기
        	this.gfn_setGrdFunc(this.grd_list);
        	
        	//검색조건 DataSet Row추가
        	this.ds_condition.addRow();
        	//부모창으로 부터 전달받은 값	
        	var ownFrame = this.getOwnerFrame();
        	
        	this.ds_condition.setColumn(0,"CD_DOC_CTGR",ownFrame.cd_doc_ctgr);
        	
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
        	var sController = "Cntr_RefCntrSrch.do";
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
        		case "Cntr_ReadRefCntrItem" :	
        			this.close(this.ds_cntrItem.saveXML());
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
        	
        	this.ds_list.filter("CNTR_NO == '"+this.ds_list.getColumn(e.row,"CNTR_NO")+"'");
        	
        	var sSvcID = "Cntr_ReadRefCntrItem";
        	var sController = "Cntr_ReadRefCntrItem.do";
        	var sInDatasets = "in_ds=ds_list";
        	var sOutDatasets = "ds_cntr=ds_cntr ds_cntrItem=ds_cntrItem";
        	var sCallbackFunc = "fn_trCallBack";

        	this.gfn_tran(sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        	
        	
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.pop_cntrRefSrch_onload, this);
            this.grd_list.addEventHandler("oncelldblclick", this.grd_list_oncelldblclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.div_condition.btn_search.addEventHandler("onclick", this.div_condition_btn_search_onclick, this);
            this.div_condition.cb_SortType00.addEventHandler("onitemchanged", this.Div_SOption_cb_SortType00_onitemchanged, this);
            this.btn_close00.addEventHandler("onclick", this.btn_close_onclick, this);

        };

        this.loadIncludeScript("PCTRB100P03.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
