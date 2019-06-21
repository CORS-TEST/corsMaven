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
                this.set_name("bottomFrame");
                this.set_scrollbars("none");
                this.set_titletext("bottomFrame");
                this._setFormPosition(0,0,1280,30);
            }
            this.style.set_background("#ebeef5ff");
            this.style.set_border("1 solid #a3a7b4ff,0 none #808080ff,0 none #808080,0 none #808080");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn_msgHistory", "absolute", "0%", "0", "30", "30", null, null, this);
            obj.set_cssclass("btn_BF_AlertMessage");
            obj.getSetter("objNm").set("");
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", null, "0", "776", "30", "30", null, this);
            obj.style.set_align("right middle");
            obj.style.set_font("10 malgun gothic");
            obj.set_taborder("15");
            obj.set_text("Copyright  Cheong O Ram System. All rights reserved.");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1280, 30, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("bottom");
            		p.set_scrollbars("none");
            		p.style.set_background("#ebeef5ff");
            		p.style.set_border("1 solid #a3a7b4ff,0 none #808080ff,0 none #808080,0 none #808080");
            		p.set_titletext("bottomFrame");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("bottomFrame.xfdl", function(exports) {
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_msgHistory.addEventHandler("onclick", this.btn_msgHistory_onclick, this);

        };

        this.loadIncludeScript("bottomFrame.xfdl", true);

       
    };
}
)();
