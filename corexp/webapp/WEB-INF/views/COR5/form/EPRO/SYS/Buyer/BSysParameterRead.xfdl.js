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
                this.set_name("BSysParameterRead");
                this.set_titletext("프로그램사용이력 파라미터팝업");
                this._setFormPosition(0,0,570,560);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSrchOpt", this);
            obj._setContents("<ColumnInfo><Column id=\"SN\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("staViewCompCond01", "absolute", "10", "10", null, null, "10", "10", this);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new Static("staBody", "absolute", "10", "10", "85", null, null, "10", this);
            obj.set_cssclass("sta_WF_Label");
            obj.set_taborder("21");
            obj.set_text("Value");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtOpnn", "absolute", "99", "15", null, null, "15", "15", this);
            obj.set_readonly("true");
            obj.set_taborder("22");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 570, 560, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("프로그램사용이력 파라미터팝업");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("BSysParameterRead.xfdl", function(exports) {
        /**
         * @파일명       	: BSysParameterRead.xfdl
         * @생성자       	: 송태봉
         * @생성일자     	: 2017. 9. 26.
         * @설명			    : 프로그램사용이력 파라미터팝업
         * @최종수정자		: 송태봉
         * @최종수정일자	    : 2017. 9. 26.
        */ 

        this.popTitle = "PARAMETER/LOG";
        var strType = "";
        /**
          * @함수명	: fnOnLoad
          * @desc   : 폼 onload이벤트
          */
        this.fnOnLoad = function(obj,e)
        {
        	var ownFrame = this.getOwnerFrame();
        	this.dsSrchOpt.setColumn(0,"SN",ownFrame.agv_id);
        	strType = ownFrame.agv_Type;
        	this.fnSearch();
        }

        /**
          * @함수명	: fnSearch
          * @desc   : 조회
          */
        this.fnSearch = function()
        {
        	var sSvcID = "readSysParam";
        	var sController = "epro.sys.service.BSysService.readSysParam";
        	var sInDatasets = "dsSrchOpt=dsSrchOpt";
        	var sOutDatasets = "dsSrchOpt=dsSrchOpt";
        	var sCallbackFunc = "fnTrCallBack";	

            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
          * @함수명	: fnTrCallBack
          * @desc     	: Transaction Callback함수
          */
        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	if(strErrCd < 0){
        		return;
        	}
        	
        	switch(strSvcID){
        		case "readSysParam" :
        			if(strType == "PARAMETER"){
        				this.txtOpnn.set_value(this.dsSrchOpt.getColumn(0,"PARAMETER"));
        			}else if(strType == "LOG"){
        				this.txtOpnn.set_value(this.dsSrchOpt.getColumn(0,"LOG"));
        			}
        		break;
        	
        		default:
        		break;	
        	}
        }
        this.txtOpnn_oneditclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.fnOninit, this);
            this.addEventHandler("onload", this.fnOnLoad, this);
            this.txtOpnn.addEventHandler("oneditclick", this.txtOpnn_oneditclick, this);

        };

        this.loadIncludeScript("BSysParameterRead.xfdl", true);

       
    };
}
)();
