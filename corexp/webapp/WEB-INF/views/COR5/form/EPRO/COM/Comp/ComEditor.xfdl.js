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
                this.set_name("PCTRB100P00");
                this.set_titletext("에디터 컴포넌트");
                this.set_cssclass("frm_POP_Search");
                this._setFormPosition(0,0,934,700);
            }
            this.style.set_font("9 arial");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsReturn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new WebBrowser("WebEditor", "absolute", "0", "0", null, null, "0", "0", this);
            obj.set_taborder("0");
            obj.getSetter("objNm").set("에디터");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 934, 700, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("UbiReport");
            		p.set_titletext("에디터 컴포넌트");
            		p.style.set_font("9 arial");
            		p.set_cssclass("frm_POP_Search");

            	}
            );
            obj.set_stepcount("");
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("ComEditor.xfdl", function(exports) {
        /**
           @file       ComEditor.xfdl
           @desc       에디터 컴포넌트
           @author     배열
           @makedate   2019.03.15
           @history    
        */

        
        this.fv_editorUrl = application.gvDomain+"/ckeditor/editor.jsp";
        //this.fv_editorUrl = application.gvDomain+"/daumeditor/editor.jsp";
        this.fv_content = "";
        this.fv_readMode = "N";
        this.dsObj = "";
        this.dsCol = "";
        this.dsRow = "";
        this.fv_callBack = ""

        this.fnEditorInit = function(content,readMode)
        {
        	this.fv_content = content;
        	this.fv_readMode = readMode;
        	this.WebEditor.set_url(this.fv_editorUrl);
        }

        this.getContent = function(dsObj,dsRow,dsCol,callBack)
        {
        	this.dsObj = dsObj;
        	this.dsRow = dsRow;
        	this.dsCol = dsCol;
        	this.fv_callBack = callBack;
        	this.WebEditor.callMethod("saveContent");
        }

        /**
        	@function	wbDaumEditorOnusernotify()
        	@desc   	
        */
        this.wbDaumEditorOnusernotify = function(obj,e)
        {
        	var sArg = {};	
        	//웹
        	if (e.userdata.indexOf("▦") == 0){
        		//read
        		if (gfnReplace(e.userdata,"▦","") == "true"){			
        			this.WebEditor.callMethod("setEditor",this.fv_content);
        		}
        		//tag
        		else if(gfnReplace(e.userdata,"▦","") == "SET_TAG") {
        			gfnModalPop(this, "TagPopup", "BCNTR::BCntrTagPop.xfdl", sArg, "fnPopCallBack", 800, 450);
        			//this.WebEditor.set_visible(true)
        		//mode
        		} else if(gfnReplace(e.userdata,"▦","") == "MODE") {
        			this.WebEditor.callMethod("setReadMode",this.fv_readMode);	
        		
        		}
        		//save
        		else {
        			this.dsObj.setColumn(this.dsRow, this.dsCol, gfnReplace(e.userdata,"▦",""));
        			eval("this.parent." + this.fv_callBack + "()")
        		}
        	}
        	//런타임
        	else if(obj.getProperty("document").getProperty("title").indexOf("▩") == 0){
        		//read
        		if (gfnReplace(obj.getProperty("document").getProperty("title"),"▩","") == "true"){
        			this.WebEditor.callMethod("setEditor", this.fv_content);
        		}
        		//tag
        		else if(gfnReplace(obj.getProperty("document").getProperty("title"),"▩","") == "SET_TAG"){
        			gfnModalPop(this, "TagPopup", "BCNTR::BCntrTagPop.xfdl", sArg, "fnPopCallBack", 800, 450);
        		}
        		//mode
        		else if(gfnReplace(obj.getProperty("document").getProperty("title"),"▩","") == "MODE"){
        			this.WebEditor.callMethod("setReadMode",this.fv_readMode);	
        		} 
        		//save
        		else {	
        			this.dsObj.setColumn(this.dsRow, this.dsCol, gfnReplace(obj.getProperty("document").getProperty("title"),"▩",""))
        			eval("this.parent." + this.fv_callBack + "()")
        		}
        	}
        }

        
        this.wb_daumEditor_onloadcompleted = function(obj,e)
        {
        	this.WebEditor.callMethod("setEditor",this.fv_content);	
        }

        /**
          *	@function	fnPopCallBack()
          *	@desc   	팝업 CallBack 함수
          */
        this.fnPopCallBack = function(sPopupId,rtn)
        {
        	this.dsReturn.clear();
        	this.dsReturn.loadXML(rtn);
        	switch(sPopupId){
        		case "TagPopup":
        			if(!gfnIsNull(this.dsReturn.getColumn(0,"TAG"))) {
        				this.WebEditor.callMethod("setTagEditor",this.dsReturn.getColumn(0,"TAG"));
        			}
        		break;
        	}
        }

        
        this.Button00_onclick = function(obj,e)
        {
        	this.WebEditor.callMethod("setReadMode");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.UbiReport_onload, this);
            this.WebEditor.addEventHandler("onusernotify", this.wbDaumEditorOnusernotify, this);
            this.WebEditor.addEventHandler("onloadcompleted", this.wb_daumEditor_onloadcompleted, this);

        };

        this.loadIncludeScript("ComEditor.xfdl", true);

       
    };
}
)();
