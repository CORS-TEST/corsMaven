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
                this.set_name("BAprOpnnPopup");
                this.set_titletext("의견팝업");
                this._setFormPosition(0,0,400,220);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsReturn", this);
            obj._setContents("<ColumnInfo><Column id=\"MSG\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("staViewCompCond01", "absolute", "10", "45", null, "160", "10", null, this);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new Static("staBody", "absolute", "10", "45", "85", "160", null, null, this);
            obj.set_cssclass("sta_WF_Label");
            obj.set_taborder("21");
            obj.set_wordwrap("english");
            obj.set_text("결재의견");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtOpnn", "absolute", "99", "50", null, "150", "15", null, this);
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            obj = new Button("btnReq", "absolute", null, "10", "70", "24", "10", null, this);
            obj.set_taborder("25");
            obj.set_text("확인");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 400, 220, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("의견팝업");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","txtOpnn","value","dsReturn","MSG");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("BAprOpnnPopup.xfdl", function(exports) {
        /**
         * @파일명       	: BAprOpnnPopup.xfdl
         * @생성자       	: 송태봉
         * @생성일자     	: 2017. 9. 12.
         * @설명			    : 의견팝업
         * @최종수정자		: 송태봉
         * @최종수정일자	    : 2017. 9. 12.
        */ 

        this.fvGubun = "";
        this.popTitle = "";

        /**
          * @함수명	: fnOnLoad
          * @desc   : 폼 onload이벤트
          */
        this.fnOnLoad = function(obj,e)
        {
        	var ownFrame = this.getOwnerFrame();
        	
        	if(ownFrame.agv_gubun == "APP"){
        		this.fvGubun = ownFrame.agv_gubun;
        		this.popTitle = "승인";
        		//this.dsReturn.setColumn(0,"MSG",gfnMultiLabel("EPRO_LABEL_00899"));
        		
        	} else{
        		this.fvGubun = ownFrame.agv_gubun;
        		this.popTitle = "반려";
        		//this.dsReturn.setColumn(0,"MSG",gfnMultiLabel("EPRO_LABEL_00900"));
        	}
        	
        // 	var txt = "";
        // 	if(this.popTitle == "승인"){
        // 		txt = "승인의견";
        // 	} else{
        // 		txt = "반려의견";
        // 	}
        // 	
        // 	var objBindItem = new BindItem("Bind00","staBody","text","gdsLabel",txt);
        // 	this.addChild("Bind00",objBindItem);
        }

        this.fnPreSave = function()
        {
        	if(gfnIsNull(this.dsReturn.getColumn(0,"MSG"))){
        		gfnAlert("의견을 입력하시기 바랍니다.");
        		return false;
        	}
        	
        	var msg = "";
        	
        	if(this.fvGubun == "APP") msg = "승인 하시겠습니까?"
        	else msg = "반려 하시겠습니까?"
        	
        	if(!gfnConfirm(msg)) return false;
        	
        	return true
        }

        this.fnSave = function(obj,e)
        {
        	if(!this.fnPreSave()) return;
        	
        	this.parent.close(this.dsReturn.saveXML())
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.fnOninit, this);
            this.addEventHandler("onload", this.fnOnLoad, this);
            this.btnReq.addEventHandler("onclick", this.fnSave, this);

        };

        this.loadIncludeScript("BAprOpnnPopup.xfdl", true);

       
    };
}
)();
