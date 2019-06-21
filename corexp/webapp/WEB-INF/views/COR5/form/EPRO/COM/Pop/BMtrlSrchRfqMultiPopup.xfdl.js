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
                this.set_name("BMtrlSrchMultiPopup");
                this.set_titletext("품목검색멀티팝업(입찰)");
                this._setFormPosition(0,0,1100,800);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSrchOpt", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"MTRL_CD\" size=\"256\" type=\"STRING\"/><Column id=\"MTRL_NM\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_USE\" size=\"256\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"SRC_LVL_1\" size=\"256\" type=\"STRING\"/><Column id=\"SRC_LVL_2\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAddList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdList", "absolute", "10", "62", null, "354", "10", null, this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj.set_cellclickbound("cell");
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
            obj.set_taborder("5");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/><Column size=\"320\"/><Column size=\"283\"/><Column size=\"50\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"품목코드\"/><Cell col=\"1\" expr=\"\" text=\"품목명\"/><Cell col=\"2\" expr=\"\" text=\"소싱그룹\"/><Cell col=\"3\"/></Band><Band id=\"body\"><Cell text=\"bind:MTRL_CD\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:MTRL_NM2\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:SRC_GRP_NM2\"/><Cell col=\"3\" displaytype=\"button\" expr=\"expr:BTN==&quot;추가&quot;?gfnMultiLabel(&quot;EPRO_LABEL_00144&quot;):gfnMultiLabel(&quot;EPRO_LABEL_00172&quot;)\" text=\"bind:BTN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divPaging", "absolute", "5", "416", null, "28", "5", null, this);
            obj.set_scrollbars("none");
            obj.set_taborder("8");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("staViewCompCond00", "absolute", "10", "7", null, "45", "10", null, this);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Static("staMtrlCd", "absolute", "489", "17", "100", "24", null, null, this);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_expr("expr:gfnMultiLabel(\"EPRO_LABEL_00462\")");
            obj.style.set_align("right middle");
            obj.set_taborder("11");
            obj.set_text("품목");
            this.addChild(obj.name, obj);

            obj = new Edit("edMtrlNm", "absolute", "699", "17", "200", "24", null, null, this);
            obj.getSetter("objNm").set("협력사명");
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Edit("edMtrlCd", "absolute", "596", "17", "100", "24", null, null, this);
            obj.set_inputtype("number");
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Grid("grdAddList", "absolute", "10", "483", null, null, "10", "10", this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsAddList");
            obj.set_cellclickbound("cell");
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
            obj.set_taborder("21");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"300\"/><Column size=\"40\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"품목코드\"/><Cell col=\"1\" expr=\"\" text=\"품목명\"/><Cell col=\"2\"/></Band><Band id=\"body\"><Cell text=\"bind:MTRL_CD\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:MTRL_NM2\"/><Cell col=\"2\" displaytype=\"button\" expr=\"expr:BTN==&quot;추가&quot;?gfnMultiLabel(&quot;EPRO_LABEL_00144&quot;):gfnMultiLabel(&quot;EPRO_LABEL_00172&quot;)\" text=\"bind:BTN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staMtrlNm00", "absolute", "16", "17", "158", "24", null, null, this);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_expr("expr:gfnMultiLabel(\"EPRO_LABEL_00464\")");
            obj.style.set_align("right middle");
            obj.set_taborder("23");
            obj.set_text("소싱그룹");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch", "absolute", null, "17", "60", "24", "16", null, this);
            obj.set_expr("expr:gfnMultiLabel(\"EPRO_LABEL_00005\")");
            obj.set_taborder("15");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Div("divComp01", "absolute", "177", "18", "298", "23", null, null, this);
            obj.set_taborder("24");
            obj.set_url("CCOMP::CompSrcType2.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divViewCompTitle00", "absolute", "0", "448", null, "36", "0", null, this);
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            obj.set_taborder("25");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "8", "6", "255", "24", null, null, this.divViewCompTitle00);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_expr("expr:gfnMultiLabel(\"EPRO_LABEL_00773\")");
            obj.set_taborder("0");
            obj.set_text("선택한 품목");
            this.divViewCompTitle00.addChild(obj.name, obj);
            obj = new Button("btnRtn", "absolute", null, "6", "65", "24", "10", null, this.divViewCompTitle00);
            obj.set_expr("expr:gfnMultiLabel(\"EPRO_LABEL_00772\");");
            obj.getSetter("objNm").set("적용");
            obj.set_taborder("1");
            obj.set_text("품목 적용");
            this.divViewCompTitle00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompTitle00,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 타이틀");
            		p.set_taborder("25");

            	}
            );
            this.divViewCompTitle00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1100, 800, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("품목검색멀티팝업(입찰)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edMtrlCd","value","dsSrchOpt","MTRL_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edMtrlNm","value","dsSrchOpt","MTRL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staViewCompTitle00LangBind2017110317184385322","divViewCompTitle00.staViewCompTitle00","text","gdsLabel","EPRO_LABEL_00083");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompSrcType2.xfdl");
        };
        
        // User Script
        this.registerScript("BMtrlSrchRfqMultiPopup.xfdl", function(exports) {
        /**
         * @파일명       	: BMtrlSrchRfqMultiPopup.xfdl
         * @생성자       	: 한의봉
         * @생성일자     	: 2017. 12. 04.
         * @설명			: 품목검색멀티팝업(입찰용)
         * @최종수정자		: 한의봉
         * @최종수정일자	: 2017. 12. 04.
        */ 

        this.popTitle = gfnMultiLabel("EPRO_LABEL_00938");

        /**
          * @함수명	: fnOnLoad
          * @desc   : 폼 onload이벤트
          */
        this.fnOnLoad = function(obj,e)
        {
        	//그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기
        	gfnSetGrdFunc(this.grdList, this.divPaging, this);
        	var ownFrame = this.getOwnerFrame();

        	this.divComp01.fnSetBind(this.dsSrchOpt,"SRC_LVL_1","SRC_LVL_2");
        	this.dsSrchOpt.addRow();
        	this.dsSrchOpt.setColumn(0,"MTRL_NM",ownFrame.agv_nm);
        	this.dsSrchOpt.setColumn(0,"BRANCH_CD", application.gdsUserInfo.getColumn(0,"BRANCH_CD"));
        	this.dsSrchOpt.setColumn(0,"SRC_LVL_1",ownFrame.agv_src_lvl_1);
        	this.divComp01.dsFilter(ownFrame.agv_src_lvl_1);
        	this.dsSrchOpt.setColumn(0,"SRC_LVL_2",ownFrame.agv_src_lvl_2);
        	
        	if(!gfnIsNull(this.dsSrchOpt.getColumn(0,"MTRL_NM"))){
        		this.fnSearch();	
        	}
        }
         
        /**
          * @함수명	: fnPreSearch
          * @desc     	: 조회 전 처리
          */
        this.fnPreSearch = function()
        {
        	return true;
        }

        /**
          * @함수명	: fnSearch
          * @desc     	: 조회 프로세스
          */
        this.fnSearch = function()
        {
        	if(!this.fnPreSearch()) return false;

        	var sSvcID = "searchComMtrl";
        	var sController = "epro.com.service.BComService.searchComMtrl";
        	var sInDatasets = "dsSrchOpt=dsSrchOpt";
        	var sOutDatasets = "dsList=dsList";
        	var sCallbackFunc = "fnTrCallBack";	
        		
        	var	oPaging = [
        					{inDs:this.dsSrchOpt, grid:this.grdList, divPaging:this.divPaging}
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
        		case "searchComMtrl" :	
        			this.grdList.setFocus();
        			
        			if(this.dsAddList.colcount == 0){
        				for(var i = 0 ; i < this.dsList.colcount ; i++){
        					this.dsAddList.addColumn(this.dsList.getColID(i),"STRING");
        				}
        			}
        			
        			if(this.dsAddList.rowcount != 0){
        				for(var i = 0 ; i < this.dsList.rowcount ; i++){
        					var nRow = this.dsAddList.findRow("MTRL_CD",this.dsList.getColumn(i,"MTRL_CD"));
        					
        					if(nRow != -1){
        						this.dsList.setColumn(i,"BTN","삭제");
        					}
        				}
        			}
        			
        		break;
         
        		default:
        		break;	
        	}
        }

        /**
          * @함수명	: fnAddData
          * @desc   : 목록에 추가하는 함수
          */
        this.fnAddData = function(obj)
        {
        	var bindDs = obj.getBindDataset();

        	if(bindDs.getColumn(bindDs.rowposition,"BTN") == "추가"){
        		this.dsList.setColumn(this.dsList.rowposition,"BTN",	"삭제");
        		var nRow = this.dsAddList.addRow();
        		this.dsAddList.copyRow(nRow,this.dsList,this.dsList.rowposition);
        		
        	} else{
        		var mtrlCd = bindDs.getColumn(bindDs.rowposition,"MTRL_CD");
        		var nRow = this.dsAddList.findRow("MTRL_CD",mtrlCd);
        		this.dsAddList.deleteRow(nRow);
        		
        		nRow = this.dsList.findRow("MTRL_CD",mtrlCd);
        		this.dsList.setColumn(nRow,"BTN","추가");
        	}
        }
           
        /**
          * @함수명		: fnRtnData
          * @desc     	: 적용버튼 클릭 이벤트
          */   
        this.fnRtnData = function(obj,e)
        {
        	if(this.dsAddList.rowcount != 0){
        		this.parent.close(this.dsAddList.saveXML());
        		
        	} else{
        		gfnAlert("EPRO_LABEL_00940")
        	}
        }

        /**
          * @함수명	: grdListOnkeyup
          * @desc     	: 에디트 Onkeyup 이벤트
          */ 
        this.fnOnkeyup = function(obj,e)
        {
        	if(e.keycode == "13"){
        		obj.updateToDataset();
        		if(obj.name == "edMtrlCd" || obj.name == "edMtrlNm"){
        				this.fnSearch()
        			}
        		}
        }

        /**
          * @함수명	: grdListOnkeydown
          * @desc     	: 그리드 Onkeydown 이벤트
          */
        this.grdListOnkeydown = function(obj,e)
        {
        	if(e.keycode == "13"){
        		obj.updateToDataset();
        		this.fnAddData(obj);
        	}
        }

        /**
          * @함수명	: fnOnecellclick
          * @desc     	: 그리드 원클릭 이벤트
          */
        this.fnOnecellclick = function(obj,e)
        {
        	if(gfnGrdBindColId(obj,e.cell) == "BTN"){
        		this.fnAddData(obj);
        	}
        }

        /**
          * @함수명	: fnOncelldbClick
          * @desc     	: 그리드 더블클릭 이벤트
          */
        this.fnOncelldbClick = function(obj,e)
        {
        	if(gfnGrdBindColId(obj,e.cell) != "BTN") this.fnAddData(obj);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fnOnLoad, this);
            this.grdList.addEventHandler("oncellclick", this.fnOnecellclick, this);
            this.grdList.addEventHandler("oncelldblclick", this.fnOncelldbClick, this);
            this.grdList.addEventHandler("onkeydown", this.grdListOnkeydown, this);
            this.edMtrlNm.addEventHandler("onkeyup", this.fnOnkeyup, this);
            this.edMtrlCd.addEventHandler("onkeyup", this.fnOnkeyup, this);
            this.grdAddList.addEventHandler("oncellclick", this.fnOnecellclick, this);
            this.grdAddList.addEventHandler("oncelldblclick", this.fnOncelldbClick, this);
            this.grdAddList.addEventHandler("onkeydown", this.grdListOnkeydown, this);
            this.btnSearch.addEventHandler("onclick", this.fnSearch, this);
            this.divViewCompTitle00.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompTitle00.btnRtn.addEventHandler("onclick", this.fnRtnData, this);

        };

        this.loadIncludeScript("BMtrlSrchRfqMultiPopup.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
