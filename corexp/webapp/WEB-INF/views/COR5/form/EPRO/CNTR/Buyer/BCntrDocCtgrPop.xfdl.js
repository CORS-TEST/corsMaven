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
                this.set_name("BCntrDetail");
                this.set_titletext("문서유형팝업");
                this._setFormPosition(0,0,334,507);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCdCM10", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompBody00", "absolute", "10", "34", null, null, "10", "10", this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "0", null, null, "0", "0", this.divViewCompBody00);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("dsCdCM10");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"문서유형\"/></Band><Band id=\"body\"><Cell text=\"bind:CD_NM_LO\"/></Band></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Button("btnApply", "absolute", "77.84%", "5", null, "24", "5", null, this);
            obj.set_taborder("3");
            obj.set_text("적용");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");

            	}
            );
            this.divViewCompBody00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 334, 507, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("FrmTemplate100");
            		p.set_titletext("문서유형팝업");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("BCntrDocCtgrPop.xfdl", function(exports) {
        /**
         * @파일명			: BCntrDocCtgrPop
         * @생성자			: 안성민
         * @생성일시		: 2019. 05. 15.
         * @설명			: 문서유형선택
         * @최종수정자		: 안성민
         * @최종수정일시	: 2019. 05. 15.
        */  
        this.popTitle = "문서유형";

        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {
        	var param = [ {code:"CM10"} // 문서유형
        				];		
        																
        	gfnGetCode(this, param);
        }

        /**
          * @함수명	: fnFormOninit
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.InitEventInfo(이벤트변수)
          * @desc     	: 폼 oninit이벤트
          */
        this.fnFormOninit = function(obj,e)
        {
        	this.fnSetCode();
        }

        

        this.fnBtnApplyOnclick = function(obj,e)
        {
        	this.parent.close(this.dsCdCM10.getColumn(this.dsCdCM10.rowposition, "CD_ID"))
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.addEventHandler("ontimer", this.PCTRS100N00_ontimer, this);
            this.btnApply.addEventHandler("onclick", this.fnBtnApplyOnclick, this);

        };

        this.loadIncludeScript("BCntrDocCtgrPop.xfdl", true);

       
    };
}
)();
