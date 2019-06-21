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
                this.set_name("BCmmNoticePopup");
                this.set_titletext("공지사항 팝업");
                this._setFormPosition(0,0,700,800);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBbs", this);
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"DOC_NO\" size=\"256\" type=\"STRING\"/><Column id=\"RELOAD\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("staViewCompLine00", "absolute", "10", "10", null, "33", "10", null, this);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("stattlWf", "absolute", "10", "10", "130", "33", null, null, this);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("TTL_TOT_AMT");
            obj.set_taborder("3");
            obj.set_text("제목");
            this.addChild(obj.name, obj);

            obj = new Static("staTtl", "absolute", "150", "15", "530", "24", null, null, this);
            obj.getSetter("lbcd").set("TTL_TOT_AMT");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("staViewCompLine01", "absolute", "10", "42", null, "33", "10", null, this);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("staWrtrInfoWf", "absolute", "10", "42", "130", "33", null, null, this);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("TTL_TOT_AMT");
            obj.set_taborder("7");
            obj.set_text("작성자 / 작성일자");
            this.addChild(obj.name, obj);

            obj = new Static("staLastChgrInfoWf", "absolute", "350", "42", "130", "33", null, null, this);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("TTL_TOT_AMT");
            obj.set_taborder("8");
            obj.set_text("수정자 / 수정일자");
            this.addChild(obj.name, obj);

            obj = new Static("staWrtrInfo", "absolute", "150", "47", "192", "24", null, null, this);
            obj.getSetter("lbcd").set("TTL_TOT_AMT");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("staLastChgrInfo", "absolute", "490", "47", "192", "24", null, null, this);
            obj.getSetter("lbcd").set("TTL_TOT_AMT");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("webBrowser", "absolute", "10", "91", null, null, "10", "260", this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Div("divViewCompBody00", "absolute", "10", null, null, "230", "10", "10", this);
            obj.set_taborder("12");
            obj.set_url("CCOMP::CompNFileUpDown.xfdl");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkToday", "absolute", "10", null, null, "25", "10", "10", this);
            obj.set_expr("expr:gfnMultiLabel(\"EPRO_LABEL_00915\")");
            obj.set_taborder("13");
            obj.set_text("오늘하루 그만보기");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 700, 800, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("공지사항 팝업");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","staTtl","text","dsBbs","DOC_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","staWrtrInfo","text","dsBbs","WRTR_INFO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","staLastChgrInfo","text","dsBbs","LAST_WRTR_INFO");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompNFileUpDown.xfdl");
        };
        
        // User Script
        this.registerScript("BComNoticePopup.xfdl", function(exports) {
        /**
         * @파일명       	: BCmmNoticePopup.xfdl
         * @생성자       	: 송태봉
         * @생성일자     	: 2017. 9. 20.
         * @설명			    : 공지사항 팝업
         * @최종수정자		: 송태봉
         * @최종수정일자	    : 2017. 9. 21.
        */ 

        this.popTitle = gfnMultiLabel("EPRO_LABEL_00948");

        /**
          * @함수명	: fnOnLoad
          * @desc   : 폼 onload이벤트
          */
        this.fnOnLoad = function(obj,e)
        {
        	gfnMakeFileDs(this);
        	
        	var ownFrame = this.getOwnerFrame();
        	
        	this.dsBbs.addRow();
        	this.dsBbs.setColumn(0,"DOC_NO",ownFrame.agv_id);
        	
        	this.fnSearch();
        }

        /**
          * @함수명	: fnSearch
          * @desc     	: 조회 프로세스
          */
        this.fnSearch = function()
        {	
        	var sSvcID = "readComNoticePop";
        	var sController = "epro.com.service.BComService.readComNoticePop";
        	var sInDatasets = "dsBbs=dsBbs:A";
        	var sOutDatasets = "dsBbs=dsBbs";
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
        		case "readComNoticePop" :	
        			var doc = this.webBrowser.getProperty("document");
        			doc.callMethod("write",this.dsBbs.getColumn(0,"CONTENT"));
        			
        			var sTableNm = "MM_CM_BBS";
        			var arrFileKey = [this.dsBbs.getColumn(0, "DOC_NO")];
        			this.divViewCompBody00.fnFileInit(this, sTableNm, this.dsBbs, arrFileKey, "Y");
        			
        		break;
         
        		default:
        		break;	
        	}
        }

        /**
          * @함수명	: fnOnclick
          * @desc   : 
          */
        this.fnOnclick = function(obj,e)
        {
        	var today = this.dsBbs.getColumn(0,"TODAY");
        	
        	if(this.chkToday.value){
        		if(gfnIsNull(application.getPrivateProfile(today))){
        			application.setPrivateProfile(today,"N");
        		}
        	}
        	
        	this.close();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fnOnLoad, this);
            this.chkToday.addEventHandler("onclick", this.fnOnclick, this);

        };

        this.loadIncludeScript("BComNoticePopup.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
