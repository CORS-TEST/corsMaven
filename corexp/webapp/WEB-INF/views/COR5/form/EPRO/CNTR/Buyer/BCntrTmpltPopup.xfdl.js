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
                this.set_name("pop_docType");
                this.set_titletext("계약템플릿팝업");
                this.set_cssclass("frm_POP_Search");
                this._setFormPosition(0,0,995,930);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCntrTmplt", this);
            obj._setContents("<ColumnInfo><Column id=\"CNTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"4000\"/><Column id=\"CNTR_TMPLT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_RELOAD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompBody05", "absolute", "1%", "46", null, null, "9", "10", this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            obj.set_url("CCOMP::ComEditor.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divViewCompTitle04", "absolute", "7", "14", null, "24", "3", null, this);
            obj.set_taborder("1");
            obj.getSetter("objNm").set("DIV-품목정보 타이틀");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle01", "absolute", "0", "0", "255", "24", null, null, this.divViewCompTitle04);
            obj.set_taborder("0");
            obj.set_text("계약내용");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.getSetter("objNm").set("품목정보타이틀");
            this.divViewCompTitle04.addChild(obj.name, obj);
            obj = new Button("btnCntrTmpltOk", "absolute", null, "0", "65", "24", "10", null, this.divViewCompTitle04);
            obj.set_taborder("1");
            obj.set_text("완료");
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("품목추가버튼");
            this.divViewCompTitle04.addChild(obj.name, obj);
            obj = new Button("btnCntrTmpltOk00", "absolute", null, "0", "65", "24", "79", null, this.divViewCompTitle04);
            obj.set_taborder("2");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("품목추가버튼");
            this.divViewCompTitle04.addChild(obj.name, obj);
            obj = new Button("btnCntrTmpltOk01", "absolute", null, "0", "65", "24", "148", null, this.divViewCompTitle04);
            obj.set_taborder("3");
            obj.set_text("전체화면");
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("품목추가버튼");
            this.divViewCompTitle04.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompTitle04,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.getSetter("objNm").set("DIV-품목정보 타이틀");

            	}
            );
            this.divViewCompTitle04.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 995, 930, this,
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
            obj = new BindItem("btnRfqMtrlAddVi","divViewCompTitle04.btnCntrTmpltOk","visible","dsObjBindVi","btnRfqMtrlAdd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnRfqMtrlAddEn","divViewCompTitle04.btnCntrTmpltOk","enable","dsObjBindEn","btnRfqMtrlAdd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","divViewCompTitle04.btnCntrTmpltOk00","visible","dsObjBindVi","btnRfqMtrlAdd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divViewCompTitle04.btnCntrTmpltOk00","enable","dsObjBindEn","btnRfqMtrlAdd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divViewCompTitle04.btnCntrTmpltOk01","visible","dsObjBindVi","btnRfqMtrlAdd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","divViewCompTitle04.btnCntrTmpltOk01","enable","dsObjBindEn","btnRfqMtrlAdd");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::ComEditor.xfdl");
        };
        
        // User Script
        this.registerScript("BCntrTmpltPopup.xfdl", function(exports) {
        /***************************************************************************
         * Program ID    : BCntrTmpltPopup.xfdl
         * Program Name  : 계약템플릿 팝업
         * Author        : 안성민
         * Created On    : 2019.03.15
        **************************************************************************/
        this.popTitle = "미리보기"
        var mode = "";

        
        this.fv_top = ''
        this.fv_left = ''
        this.fv_width = ''
        this.fv_height = ''

        this.FormOnload = function(obj,e)
        {
        	this.fv_top = this.parent.parent.top;
        	this.fv_left = this.parent.parent.left;
        	this.fv_width = this.parent.parent.width;
        	this.fv_height = this.parent.parent.height;

        	var ownFrame = this.getOwnerFrame();
        	
        	this.dsCntrTmplt.setColumn(0,"BRANCH_CD",ownFrame.agv_branchCd);
        	this.dsCntrTmplt.setColumn(0,"CNTR_NO",ownFrame.agv_no);
        	this.dsCntrTmplt.setColumn(0,"CNTR_ORDR",ownFrame.agv_ordr);
        	this.dsCntrTmplt.setColumn(0,"CONTENT",ownFrame.agv_content);
        	this.dsCntrTmplt.setColumn(0,"CNTR_TMPLT_NO",ownFrame.agv_tmpltNo);
        	
        	this.fnSearch();	
        	
        }

        this.fnSearch = function()
        {	
            var sSvcID = "selectCntrTemplatePop";
        	var sController = "epro.cntr.service.BCntrService.selectCntrTemplatePop";
        	var sInDatasets = "dsCntrTmplt=dsCntrTmplt";
        	var sOutDatasets = "dsCntrTmplt=dsCntrTmplt";
        	var sCallbackFunc = "fnTrCallBack";
        		  
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        this.fnReload = function()
        {
        	this.dsCntrTmplt.setColumn(0,"ALT_RELOAD","Y");
        	this.fnSearch();
        //     var sSvcID = "selectCntrTemplateReload";
        // 	var sController = "epro.cntr.service.BCntrService.selectCntrTemplateReload";
        // 	var sInDatasets = "dsCntrTmplt=dsCntrTmplt";
        // 	var sOutDatasets = "dsCntrTmplt=dsCntrTmplt";
        // 	var sCallbackFunc = "fnTrCallBack";
        // 		  
        //     gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        this.fnSave = function()
        {	
            var sSvcID = "saveCntrTemplateCmplt";
        	var sController = "epro.cntr.service.BCntrService.saveCntrCntnt";
        	var sInDatasets = "dsCntrTmplt=dsCntrTmplt";
        	var sOutDatasets = "";
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
        		case "selectCntrTemplateReload" :
        			this.divViewCompBody05.fnEditorInit(this.dsCntrTmplt.getColumn(0,"CONTENT"));
        			break;
        		case "selectCntrTemplatePop" :
        			this.divViewCompBody05.fnEditorInit(this.dsCntrTmplt.getColumn(0,"CONTENT"));
        			break;

        		case "saveCntrTemplateCmplt":
        			this.fnClose();
        			break;
        		default:
        			break;	
        	}
        }

        this.fnClose = function() 
        {
        	this.parent.close(this.dsCntrTmplt.saveXML());
        }

        this.fnBtnCntrTmpltOkOnClick = function(obj,e)
        {
        	this.divViewCompBody05.getContent(this.dsCntrTmplt, 0, "CONTENT", "fnSave");
        }

        var fullscreen = "N"
        this.Button00_onclick = function(obj,e)
        {

        	if("N" == fullscreen) {
        		this.parent.parent.set_top(0)
        		this.parent.parent.set_left(0)
        		this.parent.parent.set_width(application.gv_mainframe.width)
        		this.parent.parent.set_height(application.gv_mainframe.height)
        		fullscreen = "Y"
        	} else {
        		this.parent.parent.set_top(this.fv_top)
        		this.parent.parent.set_left(this.fv_left)
        		this.parent.parent.set_width(this.fv_width)
        		this.parent.parent.set_height(this.fv_height)
        		fullscreen = "N"
        	}	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.FormOnload, this);
            this.divViewCompTitle04.btnCntrTmpltOk.addEventHandler("onclick", this.fnBtnCntrTmpltOkOnClick, this);
            this.divViewCompTitle04.btnCntrTmpltOk00.addEventHandler("onclick", this.fnReload, this);
            this.divViewCompTitle04.btnCntrTmpltOk01.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("BCntrTmpltPopup.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
