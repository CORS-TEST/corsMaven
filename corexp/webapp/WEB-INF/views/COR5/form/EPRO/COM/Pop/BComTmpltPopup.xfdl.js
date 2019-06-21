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
                this.set_name("BComTmpltPopup");
                this.set_titletext("계약템플릿팝업");
                this.set_cssclass("frm_POP_Search");
                this._setFormPosition(0,0,995,906);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTmplt", this);
            obj._setContents("<ColumnInfo><Column id=\"CNTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"4000\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompBody05", "absolute", "10", "10", null, null, "10", "10", this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_enable("true");
            obj.set_visible("false");
            obj.set_url("CCOMP::ComEditor.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 995, 906, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("계약템플릿팝업");
            		p.set_cssclass("frm_POP_Search");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::ComEditor.xfdl");
        };
        
        // User Script
        this.registerScript("BComTmpltPopup.xfdl", function(exports) {
        /***************************************************************************
         * Program ID    : BComTmpltPopup.xfdl
         * Program Name  : 계약템플릿 팝업
         * Author        : 안성민
         * Created On    : 2019.03.15
        **************************************************************************/
        this.popTitle = "계약내용"
        this.fv_readonly = "";

        this.FormOnload = function(obj,e)
        {
        	var ownFrame = this.getOwnerFrame();
        	
        	this.dsTmplt.setColumn(0,"BRANCH_CD",ownFrame.agv_branchCd);
        	this.dsTmplt.setColumn(0,"CNTR_NO",ownFrame.agv_no);
        	this.dsTmplt.setColumn(0,"CNTR_ORDR",ownFrame.agv_ordr);
        	this.dsTmplt.setColumn(0,"CONTENT",ownFrame.agv_content);
        	this.fv_readonly = ownFrame.agv_readonly;
        		
        	if("Y" == ownFrame.agv_search) {
        		this.fnSearch();
        	} else {
        		this.divViewCompBody05.fnEditorInit(this.dsTmplt.getColumn(0,"CONTENT"), this.fv_readonly);
        	}
        }

        this.fnSearch = function()
        {	
            var sSvcID = "selectCntrTemplatePop";
        	var sController = "epro.com.service.BComService.selectCntrTemplatePop";
        	var sInDatasets = "dsTmplt=dsTmplt";
        	var sOutDatasets = "dsTmplt=dsTmplt";
        	var sCallbackFunc = "fnTrCallBack";
        		  
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	if(strErrCd < 0){
        		return;
        	}
        	
        	switch(strSvcID)
        	{
        		case "selectCntrTemplatePop" :
        			this.divViewCompBody05.set_visible(true)
        			this.divViewCompBody05.fnEditorInit(this.dsTmplt.getColumn(0,"CONTENT"), this.fv_readonly);	
        			break;
        		default:
        			break;	
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.FormOnload, this);

        };

        this.loadIncludeScript("BComTmpltPopup.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
