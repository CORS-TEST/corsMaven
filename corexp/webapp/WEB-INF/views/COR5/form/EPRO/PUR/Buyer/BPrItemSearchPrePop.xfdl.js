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
                this.set_name("BPrHistPopup");
                this._setFormPosition(0,0,1001,450);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"CNTR_TAG_NO\" size=\"256\" type=\"STRING\"/><Column id=\"CNTR_TAG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TAG_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_TAG_COL\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_USE\" type=\"STRING\" size=\"256\"/><Column id=\"CRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CRT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_CHGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_CHG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TAG_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCondition", this);
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DAY_STA\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DAY_END\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LRG_CLS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MDL_CLS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SML_CLS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRtn", this);
            obj._setContents("<ColumnInfo><Column id=\"TAG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btnRtn", "absolute", null, "57", "65", "24", "10", null, this);
            obj.set_taborder("0");
            obj.set_text("적용");
            obj.getSetter("objNm").set("적용");
            this.addChild(obj.name, obj);

            obj = new Static("staViewCompCond00", "absolute", "10", "7", null, "45", "10", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("staMtrlCd", "absolute", "16", "17", "100", "24", null, null, this);
            obj.set_taborder("4");
            obj.set_text("요청일자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("staPtnrNm", "absolute", "408", "17", "100", "24", null, null, this);
            obj.set_taborder("5");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch", "absolute", null, "16", "60", "24", "16", null, this);
            obj.set_taborder("7");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList", "absolute", "0", "86", null, null, "0", "3", this);
            obj.set_taborder("10");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"97\"/><Column size=\"321\"/><Column size=\"61\"/><Column size=\"106\"/><Column size=\"151\"/><Column size=\"86\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" text=\"품목코드\"/><Cell col=\"2\" text=\"품목명\"/><Cell col=\"3\" text=\"단위\"/><Cell col=\"4\" text=\"단가\"/><Cell col=\"5\" text=\"계정명\"/><Cell col=\"6\" text=\"재고수량\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\"/><Cell col=\"1\" style=\"align:center middle;\" text=\"bind:MTRL_CD\"/><Cell col=\"2\" style=\"align:left;selectbackground:EXPR(gfnIsNull(VALIDATE) ? '' : VALIDATE=='N' ? 'antiquewhite' : 'aquamarine');\" text=\"bind:MTRL_NM_SPEC\"/><Cell col=\"3\" style=\"align:center middle;\" text=\"bind:CD_UNIT_NM\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CNTR_PRICE\" mask=\"#,##0.00\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:GR_ACNT_NM\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:STOCK_QTY\" mask=\"#,##0.00\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divCrtDt", "absolute", "123", "16", "245", "24", null, null, this);
            obj.set_taborder("11");
            obj.getSetter("objNm").set("작성일자");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mtrlCd", "absolute", "497", "17", "100", "24", null, null, this);
            obj.set_taborder("12");
            obj.getSetter("objNm").set("품목코드");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mtrlNm", "absolute", "599", "17", "200", "24", null, null, this);
            obj.set_taborder("13");
            obj.getSetter("objNm").set("품목명");
            this.addChild(obj.name, obj);

            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "0", this);
            obj.set_taborder("14");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("페이징");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1001, 450, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item3","cboCntrTagCol","value","dsCtgr","CD_CNST_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edt_mtrlCd","value","dsCondition","MTRL_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edt_mtrlNm","value","dsCondition","MTRL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPagingVi","divPaging","visible","dsObjBindVi","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPagingEn","divPaging","enable","dsObjBindEn","divPaging");
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
        this.registerScript("BPrItemSearchPrePop.xfdl", function(exports) {
        /**
         * @파일명       	: BPrItemSearchPre.xfdl
         * @생성자       	: 
         * @생성일자     	: 
         * @설명			: 
         * @최종수정자		: 
         * @최종수정일자	: 
        */

        this.popTitle = "이전구매요청참조";
         
        /**
          * @함수명	: fnOnLoad
          * @desc   : 폼 onload이벤트
          */ 
        this.fnOnLoad = function(obj,e)
        {
        	this.dsCondition.addRow();
        	this.divCrtDt.fnSetDate(this.dsCondition, "REQ_DAY_STR", "REQ_DAY_END");
        	this.fnSearch();
        	
        }

        this.fnSearch = function()
        {
        	var sSvcID = "searchPrPre";
        	var sController = "epro.pur.service.BPrService.searchPrPrePop";
        	var sInDatasets = "dsCondition=dsCondition";
        	var sOutDatasets = "dsList=dsList";
        	var sCallbackFunc = "fnTrCallBack";	

        	var	oPaging = [      
        				{inDs:this.dsCondition, grid:this.grdList, divPaging:this.divPaging}
        			];
        			
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc, oPaging);
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
        		case "searchPrPre" :	
        		break;
         
        		default:
        		break;	
        	}
        }

        
        this.fnRtnData = function(obj,e)
        { 
        	if(this.dsList.getCaseCount("CHECKED == 1")==0){
        		gfnAlert("하나 이상의 품목을 선택해 주시기 바랍니다.");
        		return;
        	}
        	
        	this.parent.close(gfnGetChkRowString(this.dsList));
        }

        this.grdList_oncelldblclick = function(obj,e)
        {
        	this.parent.close(gfnGetSelRowString(this.dsList));
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fnOnLoad, this);
            this.btnRtn.addEventHandler("onclick", this.fnRtnData, this);
            this.btnSearch.addEventHandler("onclick", this.fnSearch, this);
            this.grdList.addEventHandler("oncelldblclick", this.grdList_oncelldblclick, this);
            this.edt_mtrlCd.addEventHandler("onkeydown", this.fn_onkeydown_event, this);
            this.edt_mtrlNm.addEventHandler("onkeydown", this.fn_onkeydown_event, this);

        };

        this.loadIncludeScript("BPrItemSearchPrePop.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
