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
                this.set_name("BUserInfoPopup");
                this.set_titletext("사용자정보 팝업");
                this._setFormPosition(0,0,371,222);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsReason", this);
            obj._setContents("<ColumnInfo><Column id=\"REASON\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("staViewCompCond00", "absolute", "10", "42", null, "161", "10", null, this);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("staName", "absolute", "10", "42", "85", "161", null, null, this);
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("left middle");
            obj.set_taborder("42");
            obj.set_text("사유");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtReson", "absolute", "98", "45", null, "153", "15", null, this);
            obj.set_taborder("43");
            this.addChild(obj.name, obj);

            obj = new Button("btnReson", "absolute", null, "11", "87", "24", "8", null, this);
            obj.set_taborder("44");
            obj.set_text("사유등록");
            obj.set_cssclass("btn_WF_Ssign");
            obj.getSetter("objNm").set("참여거부버튼");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 371, 222, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("사용자정보 팝업");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","txtReson","value","dsReason","REASON");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("STndrRjcPopup.xfdl", function(exports) {
        /**
         * @파일명       	: BUserInfoPopup.xfdl
         * @생성자       	: 송태봉
         * @생성일자     	: 2017. 9. 13.
         * @설명			    : 사용자정보 팝업
         * @최종수정자		: 송태봉
         * @최종수정일자	    : 2017. 9. 13.
        */

        this.popTitle = "입찰참여거부 사유입력"
         
        /**
          * @함수명	: fnOnLoad
          * @desc   : 폼 onload이벤트
          */ 
        this.fnOnLoad = function(obj,e)
        {
        	 
        }

        this.btnReson_onclick = function(obj,e)
        {
        	var rtn = this.dsReason.getColumn(0,"REASON");
        	
        	if(!gfnIsNull(rtn)){
        		//this.close(this.dsReason.saveXML());
        		this.parent.close(this.dsReason.saveXML());
        	}else{
        		alert("사유를 입력해 주세요");
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fnOnLoad, this);
            this.btnReson.addEventHandler("onclick", this.btnReson_onclick, this);

        };

        this.loadIncludeScript("STndrRjcPopup.xfdl", true);

       
    };
}
)();
