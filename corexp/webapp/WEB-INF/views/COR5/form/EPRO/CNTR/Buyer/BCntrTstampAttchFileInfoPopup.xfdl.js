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
                this.set_name("SCntrTstampAttchFileInfoPopup");
                this.set_titletext("인지세 납부증빙 첨부파일 안내");
                this.set_cssclass("frm_POP_Search");
                this._setFormPosition(0,0,999,376);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new ImageViewer("ImageViewer00", "absolute", "1.5%", "8", null, "354", "1.5%", null, this);
            obj.set_taborder("0");
            obj.set_image("URL('img::pcntrsTstampFileInfo.png')");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 999, 376, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("인지세 납부증빙 첨부파일 안내");
            		p.set_cssclass("frm_POP_Search");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("BCntrTstampAttchFileInfoPopup.xfdl", function(exports) {
        /***************************************************************************
         * Program ID    : BCntrTstampAttchFileInfoPopup.xfdl
         * Program Name  : 인지세 납부증빙 첨부파일 안내
         * Author        : 안성민
         * Created On    : 2019.03.22
        **************************************************************************/
        this.popTitle = "인지세 납부증빙 첨부파일 안내"
        var mode = "";

        this.FormOnload = function(obj,e)
        {

        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.FormOnload, this);

        };

        this.loadIncludeScript("BCntrTstampAttchFileInfoPopup.xfdl", true);

       
    };
}
)();
