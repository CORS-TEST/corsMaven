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
                this.set_name("BComSrcGrpPopup");
                this.set_titletext("소싱그룹");
                this._setFormPosition(0,0,441,500);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"SRC_GRP_ID\" size=\"256\" type=\"STRING\"/><Column id=\"UP_SRC_GRP_ID\" size=\"256\" type=\"STRING\"/><Column id=\"SRC_GRP_NM\" size=\"256\" type=\"STRING\"/><Column id=\"RMARK\" size=\"256\" type=\"STRING\"/><Column id=\"LVL\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdList", "absolute", "10", "50", null, null, "10", "10", this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj.set_cellclickbound("cell");
            obj.getSetter("f_excel").set("Y");
            obj.getSetter("f_sort").set("N");
            obj.set_scrollbars("alwaysvert");
            obj.set_taborder("5");
            obj.set_treeusebutton("use");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("true");
            obj.set_treeuseline("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"422\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"소싱그룹\"/></Band><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" text=\"bind:SRC_GRP_NM\" treelevel=\"bind:LVL\" treestartlevel=\"1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnApp", "absolute", null, "16", "60", "24", "10", null, this);
            obj.set_cssclass("btn_WF_Com_G");
            obj.set_taborder("15");
            obj.set_text("적용");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 441, 500, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("소싱그룹");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("BComSrcGrpPopup.xfdl", function(exports) {
        /**
         * @파일명       	: BComSrcGrpPopup.xfdl
         * @생성자       	: 송태봉
         * @생성일자     	: 2017. 10. 30.
         * @설명			    : 소싱그룹 선택 팝업
         * @최종수정자		: 송태봉
         * @최종수정일자	    : 2017. 10. 30.
        */ 

        this.popTitle = "Sourcing Group";

        /**
          * @함수명	: fnOnLoad
          * @desc   : 폼 onload이벤트
          */
        this.fnOnLoad = function(obj,e)
        {	
        	this.parent.btnClose.set_visible(false);
        	this.fnSearch();	
        }
         
        /**
          * @함수명	: fnSearch
          * @desc     	: 조회 프로세스
          */
        this.fnSearch = function()
        {
        	var sSvcID = "searchComSrcGrp";
        	var sController = "epro.com.service.BComService.searchComSrcGrp";
        	var sInDatasets = "dsList=dsList";
        	var sOutDatasets = "dsList=dsList";
        	var sCallbackFunc = "fnTrCallBack";	
        				
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
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
        		case "searchComSrcGrp" :	
        			this.grdList.setFocus();
        			
        		break;
         
        		default:
        		break;	
        	}
        }
           
        /**
          * @함수명		: fnRtnData
          * @desc     	: 그리드 cell 더블클릭
          */   
        this.fnRtnData = function()
        {
        	if(this.dsList.rowposition < 0||this.dsList.getColumn(this.dsList.rowposition,"LVL")==1){
        		return 
        	}
        	
        	var rtn = gfnGetSelRowString(this.dsList);
        	
        	if(rtn){
        		this.parent.close(rtn);
        	}	
        }
        this.grdList_oncelldblclick = function(obj,e)
        {
        	if(this.dsList.getColumn(e.row,"LVL")>1){
        		this.fnRtnData();
        	}
        }

        this.grdList_oncellclick = function(obj,e)
        {
        	if(e.clickitem == "treebutton") return;
        	
        	var check;
        	var treeRow = this.grdList.getTreeRow(this.dsList.rowposition);

        	if(this.grdList.getTreeStatus(treeRow) == 0) check = true;
        	else check = false;
        	
        	if(this.dsList.getColumn(e.row,"LVL")>1){
        		
        	}else{
        		this.grdList.setTreeStatus(treeRow,check);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fnOnLoad, this);
            this.grdList.addEventHandler("oncellclick", this.grdList_oncellclick, this);
            this.grdList.addEventHandler("oncelldblclick", this.grdList_oncelldblclick, this);
            this.btnApp.addEventHandler("onclick", this.fnRtnData, this);

        };

        this.loadIncludeScript("BComSrcGrpPopup.xfdl", true);

       
    };
}
)();
