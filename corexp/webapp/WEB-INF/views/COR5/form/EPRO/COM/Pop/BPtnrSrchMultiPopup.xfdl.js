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
                this.set_name("BPtnrSrchMultiPopup");
                this.set_titletext("업체검색멀티팝업");
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
            obj._setContents("<ColumnInfo><Column id=\"BIZ_NO\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_NM\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_USE\" size=\"256\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"USE_FORM\" size=\"256\" type=\"STRING\"/><Column id=\"CD_PORG_UNIT_STTS\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAddList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdSR20", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divPaging", "absolute", "5", "416", null, "28", "5", null, this);
            obj.set_scrollbars("none");
            obj.set_taborder("8");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("staViewCompCond00", "absolute", "10", "7", null, "45", "10", null, this);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch", "absolute", null, "16", "60", "24", "16", null, this);
            obj.set_expr("expr:gfnMultiLabel(\"EPRO_LABEL_00005\")");
            obj.set_taborder("15");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btnRtn", "absolute", null, "454", "65", "24", "10", null, this);
            obj.set_expr("expr:gfnMultiLabel(\"EPRO_LABEL_00410\")");
            obj.getSetter("objNm").set("적용");
            obj.set_taborder("22");
            obj.set_text("적용");
            this.addChild(obj.name, obj);

            obj = new Static("staMtrlCd", "absolute", "16", "16", "106", "24", null, null, this);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_taborder("23");
            obj.set_text("사업자번호");
            this.addChild(obj.name, obj);

            obj = new Edit("edBizNo", "absolute", "125", "16", "200", "24", null, null, this);
            obj.set_inputtype("number");
            obj.set_taborder("24");
            this.addChild(obj.name, obj);

            obj = new Static("staPtnrNm", "absolute", "325", "16", "115", "24", null, null, this);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_taborder("25");
            obj.set_text("업체명");
            this.addChild(obj.name, obj);

            obj = new Edit("edPtnrNm", "absolute", "442", "16", "200", "24", null, null, this);
            obj.getSetter("objNm").set("협력사명");
            obj.set_taborder("26");
            this.addChild(obj.name, obj);

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
            obj.set_taborder("27");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"300\"/><Column size=\"59\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"VENDOR\"/><Cell col=\"1\" expr=\"\" text=\"사업자번호\"/><Cell col=\"2\" expr=\"\" text=\"업체명\"/><Cell col=\"3\" expr=\"\" text=\"대표자명\"/><Cell col=\"4\" expr=\"\" text=\"업태\"/><Cell col=\"5\" expr=\"\" text=\"업종\"/><Cell col=\"6\" expr=\"\" text=\"주소\"/><Cell col=\"7\"/></Band><Band id=\"body\"><Cell text=\"bind:SAP_VENDOR\"/><Cell col=\"1\" text=\"bind:BIZ_NO\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:PTNR_NM\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:RPRSTV_NM\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:BIZ_CNDTN\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:BIZ_TYPE\"/><Cell col=\"6\" style=\"align:left;\" text=\"bind:ADDR\"/><Cell col=\"7\" displaytype=\"button\" expr=\"expr:BTN==&quot;추가&quot;?gfnMultiLabel(&quot;EPRO_LABEL_00144&quot;):gfnMultiLabel(&quot;EPRO_LABEL_00172&quot;)\" text=\"bind:BTN\"/></Band></Format></Formats>");
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
            obj.set_taborder("28");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"300\"/><Column size=\"59\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"VENDOR\"/><Cell col=\"1\" expr=\"\" text=\"사업자번호\"/><Cell col=\"2\" expr=\"\" text=\"업체명\"/><Cell col=\"3\" expr=\"\" text=\"대표자명\"/><Cell col=\"4\" expr=\"\" text=\"업태\"/><Cell col=\"5\" expr=\"\" text=\"업종\"/><Cell col=\"6\" expr=\"\" text=\"주소\"/><Cell col=\"7\"/></Band><Band id=\"body\"><Cell text=\"bind:SAP_VENDOR\"/><Cell col=\"1\" text=\"bind:BIZ_NO\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:PTNR_NM\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:RPRSTV_NM\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:BIZ_CNDTN\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:BIZ_TYPE\"/><Cell col=\"6\" style=\"align:left;\" text=\"bind:ADDR\"/><Cell col=\"7\" displaytype=\"button\" expr=\"expr:BTN==&quot;추가&quot;?gfnMultiLabel(&quot;EPRO_LABEL_00144&quot;):gfnMultiLabel(&quot;EPRO_LABEL_00172&quot;)\" text=\"bind:BTN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staPtnrPorgStts", "absolute", "642", "16", "85", "24", null, null, this);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_taborder("29");
            obj.set_text("업체구분");
            this.addChild(obj.name, obj);

            obj = new Combo("cboPtnrPorgStts", "absolute", "727", "16", "200", "24", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_innerdataset("dsCdSR20");
            obj.set_taborder("30");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1100, 800, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("업체검색멀티팝업");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edBizNo","value","dsSrchOpt","BIZ_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edPtnrNm","value","dsSrchOpt","PTNR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnRtnLangBind2017110317184291451","btnRtn","text","gdsLabel","EPRO_LABEL_00410");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","cboPtnrPorgStts","value","dsSrchOpt","CD_PORG_UNIT_STTS");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
        };
        
        // User Script
        this.registerScript("BPtnrSrchMultiPopup.xfdl", function(exports) {
        /**
         * @파일명       	: BPtnrSrchMultiPopup.xfdl
         * @생성자       	: 송태봉
         * @생성일자     	: 2017. 8. 31.
         * @설명			    : 업체검색멀티팝업
         * @최종수정자		: 송태봉
         * @최종수정일자	    : 2017. 8. 31.
        */ 

        this.popTitle = gfnMultiLabel("EPRO_LABEL_00919");

        this.fnSetCode = function()
        {
        	var param = [
        					 {code:"SR20", sSelectType:"A", sFiltered:"S:WAI,PTNR"}
        				];
        	
        	gfnGetCode(this, param);
        }

        
        /**
          * @함수명	: fnFormOninit
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.InitEventInfo(이벤트변수)
          * @desc     	: 폼 oninit이벤트
          */
        this.fnOninit = function(obj,e)
        {
        	this.fnSetCode();
        }

        /**
          * @함수명	: fnOnLoad
          * @desc   : 폼 onload이벤트
          */
        this.fnOnLoad = function(obj,e)
        {
        	//그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기
        	gfnSetGrdFunc(this.grdList, this.divPaging, this);
        	var ownFrame = this.getOwnerFrame();
        	this.dsSrchOpt.addRow();
        	this.dsSrchOpt.setColumn(0,"ALT_USE","Y");
        	this.dsSrchOpt.setColumn(0,"CD_PORG_UNIT_STTS","SR20PTNR");
        	this.dsSrchOpt.setColumn(0,"BRANCH_CD", application.gdsUserInfo.getColumn(0,"BRANCH_CD"));
        }
         
        /**
          * @함수명	: fnPreSearch
          * @desc     	: 조회 전 처리
          */
        this.fnPreSearch = function()
        {
        	if(gfnIsNull(this.dsSrchOpt.getColumn(0, "CD_PORG_UNIT_STTS"))){
        		this.dsSrchOpt.setColumn(0, "CD_PORG_UNIT_STTS", "ALL")
        	}
        	return true;
        }

        /**
          * @함수명	: fnSearch
          * @desc     	: 조회 프로세스
          */
        this.fnSearch = function()
        {
        	if(!this.fnPreSearch()) return false;

        	var sSvcID = "searchComPtnr";
        	var sController = "epro.com.service.BComService.searchComPtnr";
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
        		case "searchComPtnr" :	
        			this.grdList.setFocus();
        			
        			if(this.dsAddList.colcount == 0){
        				for(var i = 0 ; i < this.dsList.colcount ; i++){
        					this.dsAddList.addColumn(this.dsList.getColID(i),"STRING");
        				}
        			}
        			
        			if(this.dsAddList.rowcount != 0){
        				for(var i = 0 ; i < this.dsList.rowcount ; i++){
        					var nRow = this.dsAddList.findRow("BIZ_NO",this.dsList.getColumn(i,"BIZ_NO"));
        					
        					if(nRow != -1){
        						this.dsList.setColumn(i,"BTN","삭제");
        					}
        				}
        			}
        			
        			if("ALL" == this.dsSrchOpt.getColumn(0, "CD_PORG_UNIT_STTS")){
        				this.dsSrchOpt.setColumn(0, "CD_PORG_UNIT_STTS", "")
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
        		this.dsList.setColumn(this.dsList.rowposition,"BTN", "삭제");
        		var nRow = this.dsAddList.addRow();
        		this.dsAddList.copyRow(nRow,this.dsList,this.dsList.rowposition);
        		
        	} else{
        		var ptnrId = bindDs.getColumn(bindDs.rowposition,"PTNR_ID");
        		
        		var nRow = this.dsAddList.findRow("PTNR_ID",ptnrId);
        		this.dsAddList.deleteRow(nRow);
        		
        		nRow = this.dsList.findRow("PTNR_ID",ptnrId);
        		this.dsList.setColumn(nRow,"BTN", "추가");
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
        		gfnAlert("EPRO_LABEL_00937");
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
        		if(obj.name == "edBizNo" || obj.name == "edPtnrNm"){
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
            this.addEventHandler("oninit", this.fnOninit, this);
            this.addEventHandler("onload", this.fnOnLoad, this);
            this.btnSearch.addEventHandler("onclick", this.fnSearch, this);
            this.btnRtn.addEventHandler("onclick", this.fnRtnData, this);
            this.edBizNo.addEventHandler("onkeyup", this.fnOnkeyup, this);
            this.edPtnrNm.addEventHandler("onkeyup", this.fnOnkeyup, this);
            this.grdList.addEventHandler("oncellclick", this.fnOnecellclick, this);
            this.grdList.addEventHandler("oncelldblclick", this.fnOncelldbClick, this);
            this.grdList.addEventHandler("onkeydown", this.grdListOnkeydown, this);
            this.grdAddList.addEventHandler("oncellclick", this.fnOnecellclick, this);
            this.grdAddList.addEventHandler("oncelldblclick", this.fnOncelldbClick, this);
            this.grdAddList.addEventHandler("onkeydown", this.grdListOnkeydown, this);

        };

        this.loadIncludeScript("BPtnrSrchMultiPopup.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
