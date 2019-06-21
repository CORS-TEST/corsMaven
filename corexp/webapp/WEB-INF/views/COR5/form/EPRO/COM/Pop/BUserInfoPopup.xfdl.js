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
                this._setFormPosition(0,0,371,183);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSrchOpt", this);
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("staViewCompCond00", "absolute", "10", "10", null, "161", "10", null, this);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("staViewCompLine00", "absolute", "10", "10", null, "33", "10", null, this);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("41");
            this.addChild(obj.name, obj);

            obj = new Static("staName", "absolute", "10", "10", "85", "33", null, null, this);
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("left middle");
            obj.set_taborder("42");
            obj.set_text("이름");
            this.addChild(obj.name, obj);

            obj = new Edit("edtName", "absolute", "100", "15", null, "24", "15", null, this);
            obj.set_readonly("true");
            obj.set_taborder("43");
            this.addChild(obj.name, obj);

            obj = new Static("staViewCompLine01", "absolute", "10", "42", null, "33", "10", null, this);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("44");
            this.addChild(obj.name, obj);

            obj = new Static("staViewCompLine02", "absolute", "10", "74", null, "33", "10", null, this);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("45");
            this.addChild(obj.name, obj);

            obj = new Static("staViewCompLine03", "absolute", "10", "106", null, "33", "10", null, this);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("46");
            this.addChild(obj.name, obj);

            obj = new Static("staViewCompLine04", "absolute", "10", "138", null, "33", "10", null, this);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("47");
            this.addChild(obj.name, obj);

            obj = new Static("staEmail", "absolute", "10", "42", "85", "33", null, null, this);
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("left middle");
            obj.set_taborder("48");
            obj.set_text("EMAIL");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEmail", "absolute", "100", "47", null, "24", "15", null, this);
            obj.set_readonly("true");
            obj.set_taborder("49");
            this.addChild(obj.name, obj);

            obj = new Static("staTel", "absolute", "10", "74", "85", "33", null, null, this);
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("left middle");
            obj.set_taborder("50");
            obj.set_text("전화번호");
            this.addChild(obj.name, obj);

            obj = new Static("staHp", "absolute", "10", "106", "85", "33", null, null, this);
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("left middle");
            obj.set_taborder("51");
            obj.set_text("HP");
            this.addChild(obj.name, obj);

            obj = new Static("staFax", "absolute", "10", "138", "85", "33", null, null, this);
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("left middle");
            obj.set_taborder("52");
            obj.set_text("FAX");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTel", "absolute", "100", "78", null, "24", "15", null, this);
            obj.set_readonly("true");
            obj.set_taborder("53");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHp", "absolute", "100", "110", null, "24", "15", null, this);
            obj.set_readonly("true");
            obj.set_taborder("54");
            this.addChild(obj.name, obj);

            obj = new Edit("edtFax", "absolute", "100", "143", null, "24", "15", null, this);
            obj.set_readonly("true");
            obj.set_taborder("55");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 371, 183, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("사용자정보 팝업");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edtName","value","dsSrchOpt","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edtEmail","value","dsSrchOpt","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edtTel","value","dsSrchOpt","TEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edtHp","value","dsSrchOpt","HP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edtFax","value","dsSrchOpt","FAX");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("BUserInfoPopup.xfdl", function(exports) {
        /**
         * @파일명       	: BUserInfoPopup.xfdl
         * @생성자       	: 송태봉
         * @생성일자     	: 2017. 9. 13.
         * @설명			    : 사용자정보 팝업
         * @최종수정자		: 송태봉
         * @최종수정일자	    : 2017. 9. 13.
        */

        this.popTitle = "사용자정보"
         
        /**
          * @함수명	: fnOnLoad
          * @desc   : 폼 onload이벤트
          */ 
        this.fnOnLoad = function(obj,e)
        {
        	var ownFrame = this.getOwnerFrame();
        	var branchCd = ownFrame.branch_cd;
        	
        	if(gfnIsNull(branchCd)) branchCd = application.gdsUserInfo.getColumn(0,"BRANCH_CD");
        	
        	this.dsSrchOpt.setColumn(0,"BRANCH_CD",branchCd);
        	this.dsSrchOpt.setColumn(0,"USER_ID",ownFrame.agv_id);
        	this.fnSearch();
        }

        this.fnSearch = function()
        {
        	var sSvcID = "readComUserInfo";
        	var sController = "epro.com.service.BComService.readComUserInfo";
        	var sInDatasets = "dsSrchOpt=dsSrchOpt";
        	var sOutDatasets = "dsSrchOpt=dsList";
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
        		case "readComUserInfo" :	
        		break;
         
        		default:
        		break;	
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fnOnLoad, this);

        };

        this.loadIncludeScript("BUserInfoPopup.xfdl", true);

       
    };
}
)();
