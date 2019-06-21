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
                this.set_name("SSetUserPopup");
                this.set_titletext("외부 개인화");
                this._setFormPosition(0,0,455,148);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUserInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"PWD\" size=\"256\" type=\"STRING\"/><Column id=\"NEWPWD\" size=\"256\" type=\"STRING\"/><Column id=\"NEWPWDCK\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReturn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("staViewCompCond00", "absolute", "10", "10", null, null, "10", "140", this);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("staViewCompLine00", "absolute", "10", "10", null, "33", "10", null, this);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("staViewCompLine01", "absolute", "10", "42", null, "33", "10", null, this);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("staViewCompLine02", "absolute", "10", "74", null, "33", "10", null, this);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("staAbsUserID", "absolute", "10", "10", "155", "33", null, null, this);
            obj.set_cssclass("sta_WF_Label");
            obj.set_taborder("26");
            obj.set_text("현재 비밀번호");
            this.addChild(obj.name, obj);

            obj = new Static("staRcvSmsRcv", "absolute", "10", "74", "155", "33", null, null, this);
            obj.set_cssclass("sta_WF_Label");
            obj.set_taborder("38");
            obj.set_text("새 비밀번호 확인");
            this.addChild(obj.name, obj);

            obj = new Static("staAbsDay", "absolute", "10", "42", "155", "33", null, null, this);
            obj.set_cssclass("sta_WF_Label");
            obj.set_taborder("39");
            obj.set_text("새 비밀번호");
            this.addChild(obj.name, obj);

            obj = new Button("btnPWDCK", "absolute", null, "15", "70", "24", "15", null, this);
            obj.set_cssclass("btn_WF_Module");
            obj.set_enable("true");
            obj.getSetter("objNm").set("미리보기버튼");
            obj.set_taborder("40");
            obj.set_text("확인");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staViewCompLine03", "absolute", "10", "106", null, "33", "10", null, this);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("41");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave", "absolute", null, "110", "70", "24", "15", null, this);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("미리보기버튼");
            obj.set_taborder("42");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPWD", "absolute", "170", "15", null, "24", "92", null, this);
            obj.set_enable("true");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("50");
            obj.getSetter("objNm").set("구매요청자명");
            obj.set_password("true");
            obj.set_taborder("43");
            this.addChild(obj.name, obj);

            obj = new Edit("edtNewPWD", "absolute", "170", "46", null, "24", "92", null, this);
            obj.set_lengthunit("utf8");
            obj.set_maxlength("50");
            obj.getSetter("objNm").set("구매요청자명");
            obj.set_password("true");
            obj.set_readonly("true");
            obj.set_taborder("44");
            this.addChild(obj.name, obj);

            obj = new Edit("edtNewPWDCK", "absolute", "170", "79", null, "24", "92", null, this);
            obj.set_lengthunit("utf8");
            obj.set_maxlength("50");
            obj.getSetter("objNm").set("구매요청자명");
            obj.set_password("true");
            obj.set_readonly("true");
            obj.set_taborder("45");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "15", "107", null, "30", "90", null, this);
            obj.style.set_color("red");
            obj.style.set_font("8 Dotum");
            obj.set_taborder("46");
            obj.set_text("※ 비밀번호는 6 ~ 16 자리이며 영문/특수문자 포함되어야 하며 영문은 대소문자를 구분합니다.");
            obj.set_usedecorate("true");
            obj.set_wordwrap("english");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 455, 148, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("외부 개인화");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","staAbsDay","readonly","dsObjBindEn","staTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","staRcvSmsRcv","readonly","dsObjBindEn","staTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTtlEn","staAbsUserID","readonly","dsObjBindEn","staTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edtPWD","value","dsUserInfo","PWD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edtNewPWD","value","dsUserInfo","NEWPWD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","edtNewPWDCK","value","dsUserInfo","NEWPWDCK");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("SSetUserPopup.xfdl", function(exports) {
        /**
         * @파일명       	: SSetUserPopup.xfdl
         * @생성자       	: 김동호
         * @생성일자     	: 2017.12.27.
         * @설명			: 협력사 개인화 팝업
         * @최종수정자		: 김동호
         * @최종수정일자	: 2017.12.27.
        */

        this.popTitle = gfnMultiLabel("EPRO_LABEL_01217");
        /**
          * @함수명	: fnOnLoad
          * @desc   : 폼 onload이벤트
          */ 
        this.fnOnLoad = function(obj,e)
        {
        	var ownFrame = this.getOwnerFrame();
        	
        	this.dsUserInfo.setColumn(0, "USER_ID", ownFrame.agv_id);
        	
        }
        /**
          * @함수명: preCheck
          * @desc   : 비밀번호 체크전 처리
          */ 
        this.preCheck = function(){
        	
        	if(gfnIsNull(this.dsUserInfo.getColumn(0, "PWD"))){
        		gfnAlert("EPRO_LABEL_00997");
        		return false;
        	}else{
        		return true;
        	}
        }

        /**
          * @함수명: fnPWCKOnClick
          * @desc   : 비밀번호 체크
          */ 
        this.fnPWCKOnClick = function(obj,e)
        {
        	if(!this.preCheck()) return;
        	
        	var sSvcID = "checkSUserPW";
        	var sController = "epro.com.service.BComService.checkSUserPW";
        	var sInDatasets = "dsUserInfo=dsUserInfo";
        	var sOutDatasets = "dsReturn=dsReturn";
        	var sCallbackFunc = "fnTrCallBack";	
        	
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
          * @함수명: preCheck
          * @desc   : 비밀번호 체크전 처리
          */ 
        this.preSave = function(){
        	
        	var pwd = this.dsUserInfo.getColumn(0, "NEWPWD");
        	var pwdCk = this.dsUserInfo.getColumn(0, "NEWPWDCK");
        	
        	if(gfnIsNull(pwd)){
        		gfnAlert("EPRO_LABEL_01379");
        		return false;
        	}else if(gfnIsNull(pwdCk)){
        		gfnAlert("EPRO_LABEL_01380");
        		return false;
        	}else if(pwd != pwdCk){
        		gfnAlert("EPRO_LABEL_01381");
        		return false;
        	}else if(!this.fnPwdCheck()){
        		return;
        	}else{
        		return true;
        	}
        }
        /**
          * @함수명: fnSaveOnClick
          * @desc   : 새로운 비밀번호 설정
          */ 
        this.fnSaveOnClick = function(obj,e)
        {
        	if(!this.preSave()) return;
        	
        	var sSvcID = "saveSSetUser";
        	var sController = "epro.com.service.BComService.saveSSetUser";
        	var sInDatasets = "dsUserInfo=dsUserInfo";
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
        	if(strErrCd < 0){
        		return;
        	}
        	
        	switch(strSvcID){
        		case "checkSUserPW":
        			if(this.dsReturn.getColumn(0, "PWCK") == 'Y'){
        				gfnAlert("EPRO_LABEL_01382");
        				this.btnPWDCK.set_visible(false);
        				this.edtPWD.set_enable(false);
        				this.edtNewPWD.set_readonly(false);
        				this.edtNewPWDCK.set_readonly(false);
        			}else if(this.dsReturn.getColumn(0, "PWCK") == 'N'){
        				gfnAlert("EPRO_LABEL_01383");
        				this.edtNewPWD.set_readonly(true);
        				this.edtNewPWDCK.set_readonly(true);
        			}
        		break;
        		case "saveSSetUser":
        			gfnAlert("EPRO_LABEL_01384");
        			this.dsUserInfo.setColumn(0, "NEWPWD", "");
        			this.dsUserInfo.setColumn(0, "NEWPWDCK", "");
        			this.dsUserInfo.setColumn(0, "PWD", "");
        			this.btnPWDCK.set_visible(true);
        			this.edtPWD.set_enable(true);
        			this.edtNewPWD.set_readonly(true);
        			this.edtNewPWDCK.set_readonly(true);
        		break;
        		default:
        		break;	
        	}
        }

        /**
          * @함수명  : fnPwdCheck
          * @input    :
          * @return   :
          * @desc     : 비밀번호 유효성체크
          */
        this.fnPwdCheck = function()
        {
        	var pwd = this.dsUserInfo.getColumn(0,"NEWPWD");
        	var repwd = this.dsUserInfo.getColumn(0,"NEWPWDCK");
        	var SamePass_0 = 0; //동일문자 카운트
        	var SamePass_1 = 0; //연속성(+) 카운드
        	var SamePass_2 = 0; //연속성(-) 카운드
        	
        	var ds = "dsUserInfo"
        	if(gfnIsNull(pwd)){
        		
        		gfnAlert("EPRO_LABEL_00934");
        		return false;
        	}
        	
        	if(!gfnIsNull(pwd)) {
        		
        		if(pwd.length < 6 || pwd.length > 16){
        			
        			gfnAlert("EPRO_LABEL_01129");
        			return false;
        		}

        		if(!pwd.match(/([a-zA-Z0-9].*[!,@,#,$,%,^,&,*,?,_,~])|([!,@,#,$,%,^,&,*,?,_,~].*[a-zA-Z0-9])/)){
        			
        			gfnAlert("EPRO_LABEL_01130");
        			return false;
        		}

        		if(this.dsUserInfo.getColumn(0,"USER_ID").indexOf(pwd) > -1){
        			
        			gfnAlert("EPRO_LABEL_01131");
        			return false;
        		}

        		for(var i = 0 ; i < pwd.length; i++){
        			var chrPass_0 = pwd.charAt(i);
        			var chrPass_1 = pwd.charAt(i+1);
        			var chrPass_2 = pwd.charAt(i+2);

        			if(chrPass_0 == chrPass_1){
        				SamePass_0 = SamePass_0 + 1;
        			}

        			if(chrPass_0.charCodeAt(0) - chrPass_1.charCodeAt(0) == 1 && chrPass_1.charCodeAt(0) - chrPass_2.charCodeAt(0) == 1){
        				SamePass_1 = SamePass_1 + 1;
        			}

        			if(chrPass_0.charCodeAt(0) - chrPass_1.charCodeAt(0) == -1 && chrPass_1.charCodeAt(0) - chrPass_2.charCodeAt(0) == -1){
        				SamePass_2 = SamePass_2 + 1;
        			}
        		}

        		if(SamePass_0 > 1){
        			
        			gfnAlert("EPRO_LABEL_01132");
        			return false;
        		}

        		if(SamePass_1 > 1 || SamePass_2 > 1){
        			
        			gfnAlert("EPRO_LABEL_01133");
        			return false;
        		}
        		
        		if(gfnIsNull(repwd)){
        			gfnAlert("EPRO_LABEL_01128");
        			return false;
        		}
        		
        		if(pwd != repwd){
        			gfnAlert("EPRO_LABEL_00927");
        			return false;
        		}
        	}

        	
        	return true;
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsUserInfo.addEventHandler("oncolumnchanged", this.fnOncolumnChanged, this);
            this.addEventHandler("onload", this.fnOnLoad, this);
            this.btnPWDCK.addEventHandler("onclick", this.fnPWCKOnClick, this);
            this.btnSave.addEventHandler("onclick", this.fnSaveOnClick, this);
            this.edtPWD.addEventHandler("onkeydown", this.fnOnkeyup, this);
            this.edtPWD.addEventHandler("ontextchanged", this.fnOnTextChanged, this);
            this.edtNewPWD.addEventHandler("onkeydown", this.fnOnkeyup, this);
            this.edtNewPWD.addEventHandler("ontextchanged", this.fnOnTextChanged, this);
            this.edtNewPWDCK.addEventHandler("onkeydown", this.fnOnkeyup, this);
            this.edtNewPWDCK.addEventHandler("ontextchanged", this.fnOnTextChanged, this);

        };

        this.loadIncludeScript("SSetUserPopup.xfdl", true);

       
    };
}
)();
