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
                this.set_name("BPtnrRtnRsnPop");
                this.set_titletext("등록거부사유");
                this._setFormPosition(0,0,400,220);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsReturn", this);
            obj._setContents("<ColumnInfo><Column id=\"MSG\" size=\"256\" type=\"STRING\"/><Column id=\"Confirm\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("staViewCompCond01", "absolute", "10", "5", null, "160", "10", null, this);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("staBody", "absolute", "10", "5", "85", "160", null, null, this);
            obj.set_cssclass("sta_WF_Label");
            obj.set_taborder("1");
            obj.set_text("거부사유");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtOpnn", "absolute", "99", "10", null, "150", "15", null, this);
            obj.set_lengthunit("ascii");
            obj.set_maxlength("1000");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave", "absolute", null, "178", "70", "24", "15", null, this);
            obj.set_taborder("3");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose", "absolute", null, "178", "70", "24", "90", null, this);
            obj.set_taborder("4");
            obj.set_text("취소");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 400, 220, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("등록거부사유");

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
        this.registerScript("BPtnrRtnRsnPop.xfdl", function(exports) {
        /**
          * @함수명  : fnSave
          * @input    : obj:Button(버튼 오브젝트), e:nexacro.ClickEventInfo(이벤트변수)
          * @desc     : 거부 확인 이벤트
          */
        this.popTitle = gfnMultiLabel("EPRO_LABEL_00335");

        this.fnSave = function(obj,e)
        {
        	if(gfnIsNull(this.txtOpnn.value)){ this.alert("거부사유를 입력하시요"); return;}
        	this.dsReturn.setColumn(0, "MSG",this.txtOpnn.value);
        	this.parent.close(this.dsReturn.saveXML());
        }

        /**
          * @함수명  : fnClose
          * @input    : obj:Button(버튼 오브젝트), e:nexacro.ClickEventInfo(이벤트변수)
          * @desc     : 팝업 취소 이벤트
          */
        this.fnClose = function(obj,e)
        {
        	this.parent.close();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnSave.addEventHandler("onclick", this.fnSave, this);
            this.btnClose.addEventHandler("onclick", this.fnClose, this);

        };

        this.loadIncludeScript("BPtnrRtnRsnPop.xfdl", true);

       
    };
}
)();
