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
                this.set_name("SPtnrIdPw");
                this.set_titletext("아이디/패스워드 찾기");
                this._setFormPosition(0,0,460,316);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCondition", this);
            obj._setContents("<ColumnInfo><Column id=\"TYPE\" size=\"256\" type=\"STRING\"/><Column id=\"ID_USER_NM\" size=\"256\" type=\"STRING\"/><Column id=\"ID_EMAIL\" size=\"256\" type=\"STRING\"/><Column id=\"PW_USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"PW_USER_NM\" size=\"256\" type=\"STRING\"/><Column id=\"PW_EMAIL\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btnFind00", "absolute", null, "107", "60", "24", "10", null, this);
            obj.set_cssclass("btn_WF_Custom");
            obj.getSetter("lbcd").set("");
            obj.set_taborder("4");
            obj.set_text("찾기");
            this.addChild(obj.name, obj);

            obj = new Static("staViewCompLine01", "absolute", "10", "37", null, "33", "10", null, this);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Static("staUserNm00", "absolute", "10", "37", "170", "33", null, null, this);
            obj.set_cssclass("sta_WF_Label");
            obj.set_taborder("0");
            obj.set_text("사용자명");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("staViewCompLine02", "absolute", "10", "69", null, "33", "10", null, this);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Static("staEmail00", "absolute", "10", "69", "170", "33", null, null, this);
            obj.set_cssclass("sta_WF_Label");
            obj.set_taborder("2");
            obj.set_text("E-Mail");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Edit("edtIdEmail", "absolute", "190", "73", "248", "24", null, null, this);
            obj.set_lengthunit("utf8");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Edit("edtIdUserNm", "absolute", "190", "41", "248", "24", null, null, this);
            obj.set_lengthunit("utf8");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btnFind01", "absolute", null, "277", "60", "24", "10", null, this);
            obj.set_cssclass("btn_WF_Custom");
            obj.getSetter("lbcd").set("");
            obj.set_taborder("11");
            obj.set_text("찾기");
            this.addChild(obj.name, obj);

            obj = new Static("staViewCompLine04", "absolute", "10", "175", null, "33", "10", null, this);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("23");
            this.addChild(obj.name, obj);

            obj = new Static("staUserNm01", "absolute", "10", "175", "170", "33", null, null, this);
            obj.set_cssclass("sta_WF_Label");
            obj.set_taborder("5");
            obj.set_text("사용자명");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("staViewCompLine05", "absolute", "10", "239", null, "33", "10", null, this);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("25");
            this.addChild(obj.name, obj);

            obj = new Static("staEmail01", "absolute", "10", "239", "170", "33", null, null, this);
            obj.set_cssclass("sta_WF_Label");
            obj.set_taborder("9");
            obj.set_text("E-Mail");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPwEmail", "absolute", "190", "243", "248", "24", null, null, this);
            obj.set_lengthunit("utf8");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPwUserNm", "absolute", "190", "179", "248", "24", null, null, this);
            obj.set_lengthunit("utf8");
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("staViewCompLine06", "absolute", "10", "207", null, "33", "10", null, this);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("38");
            this.addChild(obj.name, obj);

            obj = new Static("staUserId", "absolute", "10", "207", "170", "33", null, null, this);
            obj.set_cssclass("sta_WF_Label");
            obj.set_taborder("7");
            obj.set_text("아이디");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPwUserId", "absolute", "190", "211", "248", "24", null, null, this);
            obj.set_lengthunit("utf8");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("staViewCompTitle00", "absolute", "10", "8", "255", "24", null, null, this);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("41");
            obj.set_text("ID 찾기");
            this.addChild(obj.name, obj);

            obj = new Static("staViewCompTitle01", "absolute", "10", "146", "255", "24", null, null, this);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("42");
            obj.set_text("패스워드찾기");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 460, 316, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("아이디/패스워드 찾기");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item3","edtIdUserNm","value","dsCondition","ID_USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edtIdEmail","value","dsCondition","ID_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","edtPwUserId","value","dsCondition","PW_USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","edtPwUserNm","value","dsCondition","PW_USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","edtPwEmail","value","dsCondition","PW_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","staEmail01","text","gdsLabel","EPRO_LABEL_00089");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","staViewCompTitle00","text","gdsLabel","EPRO_LABEL_01408");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("SPtnrIdPw.xfdl", function(exports) {
        /**
         * @파일명       	: SPtnrIdPw.xfdl
         * @생성자       	: 한민희
         * @생성일자     	: 2017. 11. 14.
         * @설명			: 사용자 아이디/패스워드 찾기
         * @최종수정자		: 안성민
         * @최종수정일자	: 2017. 12. 26.
        */

        this.popTitle = gfnMultiLabel("EPRO_LABEL_00783");

        /**
          * @함수명	: fnOnLoad
          * @desc     	: 폼 onload 이벤트
          */
        this.fnOnLoad = function(obj,e)
        {
        	this.dsCondition.addRow();
        }

        /**
          * @함수명	: fnBtnFindId
          * @desc     	: 아이디 찾기
          */
        this.fnBtnFindId = function(obj,e)
        {
        	this.fnBtnFindOnclick("FIND_USER_ID");
        }

        /**
          * @함수명	: fnBtnFindPw
          * @desc     	: 비밀번호 찾기
          */
        this.fnBtnFindPw = function(obj,e)
        {
        	this.fnBtnFindOnclick("FIND_USER_PW");
        }

        /**
          * @함수명	: fnBtnFindOnclick
          * @input    	: type:String(아이디/비밀번호찾기 구분자) [ID:아이디 찾기], [pw:비밀번호 찾기]
          * @desc     	: 아이디 또는 임시비밀번호를 발송하는 메일을 보낸다.
          */
        this.fnBtnFindOnclick = function(type)
        {	
        	this.dsCondition.setColumn(0, "TYPE", type);

        	if(type == "FIND_USER_ID"){				
        		if(gfnIsNull(this.dsCondition.getColumn(0, "ID_USER_NM"))){
        			gfnAlert("EPRO_LABEL_00996");
        			return;
        		}
        		
        		if(gfnIsNull(this.dsCondition.getColumn(0, "ID_EMAIL"))) {
        			gfnAlert("EPRO_LABEL_01380");
        			return;			
        		}else{ 		
        			if(!gfnChkEmail(this.dsCondition.getColumn(0, "ID_EMAIL"))){
        				gfnAlert("EPRO_LABEL_00994");
        				return;
        			}
        		}
        	}else if(type == "FIND_USER_PW"){
        		
        		if(gfnIsNull(this.dsCondition.getColumn(0, "PW_USER_NM"))){
        			gfnAlert("EPRO_LABEL_00996");
        			return;
        		}
        		
        		if(gfnIsNull(this.dsCondition.getColumn(0, "PW_USER_ID"))){
        			gfnAlert("EPRO_LABEL_00995");
        			return;
        		}
        		
        		if(gfnIsNull(this.dsCondition.getColumn(0, "PW_EMAIL"))) {
        			gfnAlert("EPRO_LABEL_01380");
        			return;		
        		}else{	
        			if(!gfnChkEmail(this.dsCondition.getColumn(0, "PW_EMAIL"))){
        				gfnAlert("EPRO_LABEL_00994");
        				return;
        			}
        		}
        	}
        		
        	var sSvcID = "findIdPw";
        	var sController = "epro.com.service.CLoginService.findIdPw";
        	var sInDatasets = "dsCondition=dsCondition";
        	var sOutDatasets = "";
        	var sCallbackFunc = "fnTrCallBack";

            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
          * @함수명	: fnTrCallBack
          * @desc     	: Transaction Callback함수
          */
        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	if(strErrCd < 0) return;
        	
        	switch(strSvcID){
        		case "findIdPw" :
        			if(!gfnIsNull(strErrMsg)) gfnAlert(strErrMsg);
        			if(strErrCd == 0){
        				this.parent.close();
        			}
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
            this.btnFind00.addEventHandler("onclick", this.fnBtnFindId, this);
            this.btnFind01.addEventHandler("onclick", this.fnBtnFindPw, this);

        };

        this.loadIncludeScript("SPtnrIdPw.xfdl", true);

       
    };
}
)();
