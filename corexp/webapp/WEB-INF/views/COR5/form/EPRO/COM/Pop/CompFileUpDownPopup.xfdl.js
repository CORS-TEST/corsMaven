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
                this.set_name("CompFileUpDownPopup");
                this.set_titletext("파일업다운로드팝업");
                this._setFormPosition(0,0,1040,222);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0.48%", "7", null, "285", "1.54%", null, this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("CCOMP::CompNFileUpDown.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1040, 222, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("파일업다운로드팝업");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompNFileUpDown.xfdl");
        };
        
        // User Script
        this.registerScript("CompFileUpDownPopup.xfdl", function(exports) {
        /**
         * @파일명       	: BUserSrchPopup.xfdl
         * @생성자       	: 박민재
         * @생성일자     	: 2017. 9. 13.
         * @설명			: 파일업다운로드팝업
         * @최종수정자		: 박민재
         * @최종수정일자	    : 2017. 9. 13.
        */ 

        //this.popTitle = gfnMultiLabel("EPRO_LABEL_01411");
        this.popTitle = "파일업다운로드"

        /**
          * @함수명	: fnOnLoad
          * @desc   : 폼 onload이벤트
          */
        this.fnOnLoad = function(obj,e)
        {
        	var ownFrame = this.getOwnerFrame();
        	var forms = ownFrame.agv_form;
        	var sTableNm = ownFrame.agv_sTableNm;
        	var dataSet = ownFrame.agv_data;
        	var arrFileKey = ownFrame.agv_arrFileKey;
        	var view = ownFrame.agv_view;
        	var fileExt = ownFrame.agv_fileExt;
        	
        	this.Div00.fnFileInit(forms, sTableNm, dataSet, arrFileKey, view,'',fileExt);
        }

        this.fnReturn = function(){
        	return this.Div00.Grid00.rowcount;
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fnOnLoad, this);

        };

        this.loadIncludeScript("CompFileUpDownPopup.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
