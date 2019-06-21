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
                this.set_name("SPtnrRegPopup");
                this.set_titletext("신규거래신청");
                this._setFormPosition(0,0,401,187);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnBiz", "absolute", "10", "9", "185", null, null, "10", this);
            obj.style.set_background("#546f90ff");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("round 3 3");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 20 malgun gothic");
            obj.set_taborder("3");
            obj.set_text("국내");
            this.addChild(obj.name, obj);

            obj = new Button("btnForeign", "absolute", "199", "9", "195", null, null, "10", this);
            obj.style.set_background("#546f90ff");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("round 3 3");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 20 malgun gothic");
            obj.set_taborder("6");
            obj.set_text("해외");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 401, 187, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("신규거래신청");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("Button00LangBind2017110317184336762","Div00.Button00","text","gdsLabel","EPRO_LABEL_00435");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static02LangBind2017110317184396019","Div00.Static02","text","gdsLabel","EPRO_LABEL_00551");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("SPtnrReq.xfdl", function(exports) {
        /**
         * @파일명       	: SPtnrReq.xfdl
         * @생성자       	: 한민희
         * @생성일자     	: 2017. 11. 08.
         * @설명			: 신규거래신청 팝업
         * @최종수정자		: 한민희
         * @최종수정일자	: 2017. 11. 08.
        */

        this.popTitle = gfnMultiLabel("EPRO_LABEL_00745");
         
        /**
          * @함수명	: fnOnLoad
          * @desc     	: 폼 onload 이벤트
          */
        this.fnOnLoad = function(obj,e)
        {	
        }

        
        /**
          * @함수명	: fnGoRegulations
          * @input    	: sType(가입신청 구분자)
          * @desc     	: 거래신청진행을 위해 본 팝업을 닫고 약관 페이지로 이동한다.
          */
        this.fnGoRegulations = function(sType)
        {
        	this.parent.close(sType);
        }

        
        /**
          * @함수명	: fnBtnSignUpForeignOnclick
          * @input    	: obj:Button(버튼 오브젝트), e:nexacro.ClickEventInfo(이벤트변수)
          * @desc     	: 해외 가입
          */
        this.btnForeign_onclick = function(obj,e)
        {
        	this.fnGoRegulations("Foreign");	
        }

        /**
          * @함수명	: fnBtnSignUpBizOnclick
          * @input    	: obj:Button(버튼 오브젝트), e:nexacro.ClickEventInfo(이벤트변수)
          * @desc     	: 사업자 가입
          */
        this.btnBiz_onclick = function(obj,e)
        {
        	this.fnGoRegulations("Biz");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fnOnLoad, this);
            this.btnBiz.addEventHandler("onclick", this.btnBiz_onclick, this);
            this.btnForeign.addEventHandler("onclick", this.btnForeign_onclick, this);

        };

        this.loadIncludeScript("SPtnrReq.xfdl", true);

       
    };
}
)();
