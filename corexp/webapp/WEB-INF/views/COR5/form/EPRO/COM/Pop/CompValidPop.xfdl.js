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
                this.set_name("CompValidPop");
                this.set_titletext("유효성검사 팝업");
                this._setFormPosition(0,0,704,288);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMsg", this);
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


            
            // UI Components Initialize
            obj = new Grid("grdMsg", "absolute", "10", "10", null, "236", "10", null, this);
            obj.set_autofittype("col");
            obj.set_binddataset("dsMsg");
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"140\"/><Column size=\"483\"/></Columns><Rows><Row band=\"head\" size=\"31\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"상태\"/><Cell col=\"1\" expr=\"\" text=\"분류\"/><Cell col=\"2\" expr=\"\" text=\"메세지\"/></Band><Band id=\"body\"><Cell displaytype=\"image\" text=\"expr:&quot;img::img_WF_&quot;+ERR_LVL+&quot;.png&quot;\"/><Cell col=\"1\" text=\"bind:VALID_TYPE\"/><Cell col=\"2\" displaytype=\"decoratetext\" edittype=\"none\" style=\"align:left;\" text=\"bind:MSG\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staErrorSentence", "absolute", "43", "252", "87", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_text("필수요소누락 :");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staErrorCnt", "absolute", "121", "252", "33", "21", null, null, this);
            obj.style.set_color("red");
            obj.style.set_align("right middle");
            obj.set_taborder("6");
            obj.set_text("건수");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staCnt", "absolute", "165", "252", "32", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_text("건");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staErrorImg", "absolute", "17", "254", "20", "21", null, null, this);
            obj.style.set_background("transparent URL('img::img_WF_E.png')");
            obj.style.set_align("center middle");
            obj.set_taborder("15");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staWarningImg", "absolute", "667", "254", "20", "21", null, null, this);
            obj.style.set_background("transparent URL('img::img_WF_W.png')");
            obj.style.set_align("center middle");
            obj.set_taborder("19");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 704, 288, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("유효성검사 팝업");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("CompValidPop.xfdl", function(exports) {
        /**
         * @파일명       	: CompValidPop.xfdl
         * @생성자       	: 한민희
         * @생성일자     	: 2017. 9. 11.
         * @설명			: 유효성체크 팝업
         * @최종수정자		: 한민희
         * @최종수정일자	: 2017. 9. 11.
        */  

        this.popTitle = gfnMultiLabel("EPRO_LABEL_00817");

        /**
        	@function	fnFormOnload
        	@desc   	
        */  
        this.fnFormOnload = function(obj,e)
        {	
        	this.dsMsg.copyData(application.gdsValidScreen);	
        	
        // 	this.dsMsg.set_enableevent(false);
        // 	this.dsMsg.filter("IS_ESSENTIAL == 'Y'");	
        // 	this.staErrorCnt.set_text(this.dsMsg.rowcount);
        // 	this.dsMsg.filter("");
        // 	this.dsMsg.set_enableevent(true);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fnFormOnload, this);

        };

        this.loadIncludeScript("CompValidPop.xfdl", true);

       
    };
}
)();
