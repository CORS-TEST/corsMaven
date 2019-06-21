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
                this.set_name("CompSrchInput");
                this.set_titletext("AddOn-Input검색조건");
                this._setFormPosition(0,0,263,24);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsComReturn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Edit("edtComInput", "absolute", "0%", "0", null, "24", "0%", null, this);
            obj.set_taborder("1");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("구매담당자명");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 263, 24, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("CompCalFromTo");
            		p.set_titletext("AddOn-Input검색조건");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("ComSrchInput.xfdl", function(exports) {
        /**
           @file       CompSrcType.xfdl
           @desc       소싱그룹 컴포넌트
           @author     송태봉
           @makedate   2017.09.13
           @history    
        */

        this.fvFuntion = "";

        /**
          * @함수명	: fnSetDate
          * @input    	: objDs:Dataset(데이터셋 오브젝트), sFromDtCol(from 날짜), sToDtCol(to 날짜)
          * @desc     	: 데이터셋 입력된 날짜를 바인딩
          */
        this.fnSet = function(objDs,sFromDtCol,sToDtCol)
        {
        	this.removeChild("Bind01");
        	this.removeChild("Bind02");
        	var objBindItem = new BindItem("Bind01", "edtComInput", "value", objDs.name,sFromDtCol);
        	this.addChild("Bind01", objBindItem);
        	objBindItem.bind();
        	
        	this.fvFuntion = sToDtCol;

        }

        this.fnOnkeydownEvent = function(obj,e)
        {
        	
        	if(e.keycode == "13"){
        		eval("this.parent.parent." + this.fvFuntion+"()" )
        		
        	}
        }
         
         
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.edtComInput.addEventHandler("onkeydown", this.fnOnkeydownEvent, this);

        };

        this.loadIncludeScript("ComSrchInput.xfdl", true);

       
    };
}
)();
