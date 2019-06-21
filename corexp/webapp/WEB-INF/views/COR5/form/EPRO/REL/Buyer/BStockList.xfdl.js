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
                this.set_name("BStockList");
                this.set_titletext("재고현황");
                this._setFormPosition(0,0,1220,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"20\" type=\"STRING\"/><Column id=\"MTRL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PACK_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"STR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"STOCK_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"STOCK_CST\" type=\"STRING\" size=\"256\"/><Column id=\"STOCK_AMT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReturn", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCondition", this);
            obj._setContents("<ColumnInfo><Column id=\"SRCH_MTRL_CD\" type=\"STRING\" size=\"40\"/><Column id=\"SRCH_MTRL_NM\" type=\"STRING\" size=\"400\"/><Column id=\"SRCH_STR_CD\" type=\"STRING\" size=\"40\"/><Column id=\"SRCH_STR_NM\" type=\"STRING\" size=\"400\"/><Column id=\"LRG_CLS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MDL_CLS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SML_CLS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static01", "absolute", null, "0", "15", null, "0", "0", this);
            obj.set_taborder("0");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Div("divViewCompCond01", "absolute", "0", "35", null, "88", "15", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_SearchBg");
            obj.getSetter("objNm").set("");
            this.addChild(obj.name, obj);
            obj = new Static("staPrNm", "absolute", "0", "34", "105", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("80");
            obj.set_text("정렬순서");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("정렬순서");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divOrderBy", "absolute", "105", "34", null, "24", "86", null, this.divViewCompCond01);
            obj.set_taborder("87");
            obj.set_text("divOrderBy");
            obj.getSetter("objNm").set("divOrderBy");
            obj.set_url("CCOMP::CompOrderBy.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staWarning", "absolute", "-1", "67", null, "19", "0", null, this.divViewCompCond01);
            obj.set_taborder("88");
            obj.set_text("- 검색조건 없이 검색 시 속도가 저하 될 수 있습니다.");
            obj.set_cssclass("sta_WF_SearchText");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new CheckBox("chkMtrl", "absolute", "105", "10", null, "15", "1084", null, this.divViewCompCond01);
            obj.set_taborder("89");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staMtrl", "absolute", "124", "10", null, "14", "975", null, this.divViewCompCond01);
            obj.set_taborder("90");
            obj.set_text("재고있는 품목만");
            this.divViewCompCond01.addChild(obj.name, obj);

            obj = new Div("divViewCompCond00", "absolute", "0", "0", null, "36", "15", null, this);
            obj.set_taborder("2");
            obj.style.set_align("center");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);
            obj = new Static("staStrNm", "absolute", "0", "5", "106", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("12");
            obj.set_text("창고");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("창고");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staMtrlNm", "absolute", "367", "6", "47", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("20");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("품목");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staMtrlType", "absolute", "745", "6", "72", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("25");
            obj.set_text("품목분류");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("품목분류");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Div("divMtrlType", "absolute", "815", "6", null, "24", "86", null, this.divViewCompCond00);
            obj.set_taborder("26");
            obj.getSetter("objNm").set("divMtrlType");
            obj.set_url("CCOMP::CompMtrlType.xfdl");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Div("divStr", "absolute", "106", "5", "250", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("27");
            obj.getSetter("objNm").set("divStr");
            obj.set_url("CCOMP::ComSrchStr.xfdl");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Div("divMtrl", "absolute", "414", "5", "350", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("28");
            obj.getSetter("objNm").set("divMtrl");
            obj.set_url("CCOMP::ComSrchMtrl.xfdl");
            this.divViewCompCond00.addChild(obj.name, obj);

            obj = new Button("btnFold", "absolute", "45.66%", "122", "56", "17", null, null, this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_Fold_Close");
            this.addChild(obj.name, obj);

            obj = new Div("divViewCompBody00", "absolute", "0", "161", null, null, "15", "0", this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "29", null, null, "0", "37", this.divViewCompBody00);
            obj.set_taborder("3");
            obj.set_binddataset("dsList");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.getSetter("f_colSize").set("N");
            obj.getSetter("f_excel").set("Y");
            obj.getSetter("f_filter").set("N");
            obj.getSetter("f_find").set("N");
            obj.getSetter("f_fix").set("Y");
            obj.getSetter("f_height").set("N");
            obj.getSetter("f_hide").set("N");
            obj.getSetter("f_init").set("Y");
            obj.getSetter("f_mode").set("Y");
            obj.getSetter("f_save").set("N");
            obj.getSetter("f_sort").set("Y");
            obj.getSetter("objNm").set("검색결과 그리드");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"104\"/><Column size=\"226\"/><Column size=\"387\"/><Column size=\"96\"/><Column size=\"135\"/><Column size=\"73\"/><Column size=\"74\"/><Column size=\"113\"/><Column size=\"118\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"품목코드\"/><Cell col=\"1\" text=\"품목그룹\"/><Cell col=\"2\" text=\"품목명\"/><Cell col=\"3\" text=\"창고코드\"/><Cell col=\"4\" text=\"창고명\"/><Cell col=\"5\" text=\"재고단위\"/><Cell col=\"6\" text=\"재고수량\"/><Cell col=\"7\" text=\"재고단가\"/><Cell col=\"8\" text=\"재고금액\"/></Band><Band id=\"body\"><Cell cssclass=\"cell_link\" text=\"bind:MTRL_CD\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:MTRL_GRP_NM2\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:MTRL_NM2\"/><Cell col=\"3\" text=\"bind:STR_CD\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:SL_NM\"/><Cell col=\"5\" displaytype=\"none\" text=\"bind:CD_PUR_UNIT_NM\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" style=\"align:right;\" text=\"bind:STOCK_QTY\"/><Cell col=\"7\" style=\"align:right;\" text=\"bind:STOCK_CST\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" style=\"align:right;\" text=\"bind:STOCK_AMT\"/></Band></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "9", this.divViewCompBody00);
            obj.set_taborder("4");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("페이징");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.divViewCompBody00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 88, this.divViewCompCond01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_cssclass("div_WF_SearchBg");
            		p.getSetter("objNm").set("");

            	}
            );
            this.divViewCompCond01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 36, this.divViewCompCond00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.style.set_align("center");
            		p.set_cssclass("div_WF_SearchBg");

            	}
            );
            this.divViewCompCond00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_text("Div00");

            	}
            );
            this.divViewCompBody00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1220, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("재고현황");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompOrderBy.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompMtrlType.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComSrchStr.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComSrchMtrl.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
        };
        
        // User Script
        this.registerScript("BStockList.xfdl", function(exports) {

        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {

        }

        /**
          * @함수명	: BRfqPrgList_oninit
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.InitEventInfo(이벤트변수)
          * @desc     	: 폼 oninit이벤트
          */
        this.FormOninit = function(obj,e)
        {

        }

        /**
        	@함수명	fnFold
        	@desc   	타이틀 접기/펼치기 기능
        */
        this.fnFold = function()
        {
        	var sArg = [ 
        				{ttl:this.btnFold, body:this.divViewCompCond01,initFold:true}
        		   ];		   
        	gfnDivFold(this, sArg);
        }

        this.FormOnload = function(obj,e)
        {
        	gfnSetObj("A");
        	//그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기(그리드 컴포넌트, 페이징div 컴포넌트, 폼오브젝트(this))
         	gfnSetGrdFunc(
        				this.divViewCompBody00.grdList
        				,this.divViewCompBody00.divPaging
        				,this,{isTran:"Y", tranNm:"BRelService.stockSrch", dsParam:this.dsCondition}
        				);
         	
          
         	this.divViewCompCond00.divStr.fnSet(this.dsCondition		, "SRCH_STR_CD", "SRCH_STR_NM");
         	this.divViewCompCond00.divMtrl.fnSet(this.dsCondition		, "SRCH_MTRL_CD", "SRCH_MTRL_NM");
        	this.divViewCompCond00.divMtrlType.fnSetBind(this.dsCondition,"LRG_CLS_ID","MDL_CLS_ID","SML_CLS_ID");

         	this.fnFold();		//조회조건 Div 접기/펼치기 세팅
        	//this.fnSearch();

        }

        
        /**
          * @함수명	: fnSearch
          * @desc     	: 조회 프로세스
          */
        this.fnSearch = function(svcId)
        {
        	
        	var sSvcID = "stockSrch";
        	var sController = "epro.rel.service.BRelService.stockSrch";
        	var sInDatasets = "dsCondition=dsCondition";
        	var sOutDatasets = "dsList=dsList";
        	var sCallbackFunc = "fnTrCallBack";
        		
         	var	oPaging = [      
                            {inDs:this.dsCondition, grid:this.divViewCompBody00.grdList, divPaging:this.divViewCompBody00.divPaging}
                        ];
             gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc, oPaging);
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
        		case "stockSrch" :
        		break;
        		 
        		default:
        		break;	
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.FormOninit, this);
            this.addEventHandler("onload", this.FormOnload, this);
            this.divViewCompCond01.staPrNm.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.divViewCompCond00.staStrNm.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond00.staMtrlNm.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond00.staMtrlType.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.btnFold.addEventHandler("onclick", this.btnFold_onclick, this);

        };

        this.loadIncludeScript("BStockList.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
