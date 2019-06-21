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
                this.set_name("BSetUserPopup");
                this.set_titletext("개인화");
                this._setFormPosition(0,0,533,276);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUserInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"ABS_USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"ABS_USER_NM\" size=\"256\" type=\"STRING\"/><Column id=\"ABS_ST_DAY\" size=\"256\" type=\"STRING\"/><Column id=\"ABS_ED_DAY\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_SMS_RCV\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_MAIL_RCV\" size=\"256\" type=\"STRING\"/><Column id=\"TEL\" size=\"256\" type=\"STRING\"/><Column id=\"HP\" size=\"256\" type=\"STRING\"/><Column id=\"LANG_CD\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM34", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReturn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("staViewCompCond00", "absolute", "10", "10", null, null, "10", "10", this);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("staViewCompLine00", "absolute", "10", "10", null, "33", "10", null, this);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("staAbsUserID", "absolute", "10", "10", "160", "33", null, null, this);
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("0");
            obj.set_taborder("6");
            obj.set_text("부재시 대리인");
            this.addChild(obj.name, obj);

            obj = new Static("staViewCompLine01", "absolute", "10", "42", null, "33", "10", null, this);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("staAbsDay", "absolute", "10", "42", "160", "33", null, null, this);
            obj.set_cssclass("sta_WF_Label");
            obj.set_taborder("9");
            obj.set_text("부재일자");
            this.addChild(obj.name, obj);

            obj = new Static("staViewCompLine02", "absolute", "10", "74", null, "33", "10", null, this);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Static("staRcvSmsRcv", "absolute", "10", "74", "160", "33", null, null, this);
            obj.set_cssclass("sta_WF_Label");
            obj.set_taborder("11");
            obj.set_text("SMS수신 여부");
            this.addChild(obj.name, obj);

            obj = new Static("staViewCompLine03", "absolute", "10", "106", null, "33", "10", null, this);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Static("staRcvMailRcv", "absolute", "10", "106", "160", "33", null, null, this);
            obj.set_cssclass("sta_WF_Label");
            obj.set_taborder("13");
            obj.set_text("E-MAIL 수신 여부");
            this.addChild(obj.name, obj);

            obj = new Static("staViewCompLine04", "absolute", "10", "138", null, "33", "10", null, this);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Static("staTel", "absolute", "10", "138", "160", "33", null, null, this);
            obj.set_cssclass("sta_WF_Label");
            obj.set_taborder("15");
            obj.set_text("연락처");
            this.addChild(obj.name, obj);

            obj = new Static("staViewCompLine05", "absolute", "10", "170", null, "33", "10", null, this);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Static("staHp", "absolute", "10", "170", "160", "33", null, null, this);
            obj.set_cssclass("sta_WF_Label");
            obj.set_taborder("17");
            obj.set_text("휴대전화");
            this.addChild(obj.name, obj);

            obj = new Static("staViewCompLine06", "absolute", "10", "202", null, "33", "10", null, this);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("18");
            this.addChild(obj.name, obj);

            obj = new Static("staLangCd", "absolute", "10", "202", "160", "33", null, null, this);
            obj.set_cssclass("sta_WF_Label");
            obj.set_taborder("19");
            obj.set_text("언어 설정");
            this.addChild(obj.name, obj);

            obj = new Div("divEvalStdDay", "absolute", "176", "46", null, "24", "15", null, this);
            obj.getSetter("objNm").set("평가기준일");
            obj.set_positionstep("0");
            obj.set_taborder("21");
            obj.set_text("Div01");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkAltUse", "absolute", "176", "79", "100", "23", null, null, this);
            obj.set_expr("expr:gfnMultiLabel(\"EPRO_LABEL_00531\")");
            obj.set_falsevalue("N");
            obj.getSetter("objNm").set("chk사용여부");
            obj.set_taborder("22");
            obj.set_text("사용여부");
            obj.set_truevalue("Y");
            obj.set_value("N");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkAltUse00", "absolute", "176", "111", "100", "23", null, null, this);
            obj.set_expr("expr:gfnMultiLabel(\"EPRO_LABEL_00531\")");
            obj.set_falsevalue("N");
            obj.getSetter("objNm").set("chk사용여부");
            obj.set_taborder("23");
            obj.set_text("사용여부");
            obj.set_truevalue("Y");
            obj.set_value("N");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTel", "absolute", "176", "142", null, "24", "15", null, this);
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("평가서명");
            obj.set_readonly("true");
            obj.set_taborder("24");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHp", "absolute", "176", "174", null, "24", "15", null, this);
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("평가서명");
            obj.set_readonly("true");
            obj.set_taborder("25");
            this.addChild(obj.name, obj);

            obj = new Combo("cbLangCd", "absolute", "176", "206", null, "24", "15", null, this);
            this.addChild(obj.name, obj);
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_innerdataset("dsCdCM34");
            obj.set_taborder("26");

            obj = new Static("staViewCompLine07", "absolute", "10", "233", null, "33", "10", null, this);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("29");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAbsUserId", "absolute", "176", "15", "100", "24", null, null, this);
            obj.set_cssclass("readonly");
            obj.set_enable("false");
            obj.getSetter("objNm").set("구매요청자ID");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_taborder("30");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAbsUserNM", "absolute", "282", "15", null, "24", "15", null, this);
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("구매요청자명");
            obj.set_taborder("31");
            this.addChild(obj.name, obj);

            obj = new Button("btnSinglePop00", "absolute", null, "15", "24", "24", "15", null, this);
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("구매요청자 검색 버튼");
            obj.set_taborder("32");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave", "absolute", null, "237", "70", "24", "15", null, this);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("미리보기버튼");
            obj.set_taborder("33");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "15", "242", null, "16", "93", null, this);
            obj.style.set_color("red");
            obj.style.set_align("left top");
            obj.set_taborder("34");
            obj.set_text("※언어설정은 저장후 재로그인시 적용됩니다.");
            obj.set_usedecorate("true");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 533, 276, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("개인화");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("staTtlEn","staAbsUserID","readonly","dsObjBindEn","staTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","staAbsDay","readonly","dsObjBindEn","staTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","staRcvSmsRcv","readonly","dsObjBindEn","staTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","staRcvMailRcv","readonly","dsObjBindEn","staTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","staTel","readonly","dsObjBindEn","staTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","staHp","readonly","dsObjBindEn","staTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","staLangCd","readonly","dsObjBindEn","staTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static00Vi","divEvalStdDay.Static00","visible","dsObjBindVi","Static00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static00En","divEvalStdDay.Static00","readonly","dsObjBindEn","Static00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cal_fromVi","divEvalStdDay.cal_from","visible","dsObjBindVi","cal_from");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cal_fromEn","divEvalStdDay.cal_from","readonly","dsObjBindEn","cal_from");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cal_toVi","divEvalStdDay.cal_to","visible","dsObjBindVi","cal_to");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cal_toEn","divEvalStdDay.cal_to","readonly","dsObjBindEn","cal_to");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static02Vi","divEvalStdDay.Static02","visible","dsObjBindVi","Static02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static02En","divEvalStdDay.Static02","readonly","dsObjBindEn","Static02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("pdvCalVi","divEvalStdDay.pdvCal","visible","dsObjBindVi","pdvCal");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("pdvCalEn","divEvalStdDay.pdvCal","readonly","dsObjBindEn","pdvCal");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divEvalStdDayVi","divEvalStdDay","visible","dsObjBindVi","divEvalStdDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divEvalStdDayEn","divEvalStdDay","readonly","dsObjBindEn","divEvalStdDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item58","divEvalStdDay","enable","dsObjBindEn","divEvalStdDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","chkAltUse","value","dsUserInfo","ALT_SMS_RCV");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","chkAltUse00","value","dsUserInfo","ALT_MAIL_RCV");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","edtTel","value","dsUserInfo","TEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","edtHp","value","dsUserInfo","HP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","cbLangCd","value","dsUserInfo","LANG_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edtSinglePopId00","value","dsUser","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","edtSinglePopNm00","value","dsUser","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","edtAbsUserId","value","dsUserInfo","ABS_USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","edtAbsUserNM","value","dsUserInfo","ABS_USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompCalFromTo.xfdl");
        };
        
        // User Script
        this.registerScript("BSetUserPopup.xfdl", function(exports) {
        /**
         * @파일명       	: BSetUserPopup.xfdl
         * @생성자       	: 김동호
         * @생성일자     	: 2017.12.04.
         * @설명			: 개인화 팝업
         * @최종수정자		: 김동호
         * @최종수정일자	: 2017.12.05.
        */

        this.popTitle = gfnMultiLabel("EPRO_LABEL_01217");
        /**
          * @함수명	: fnSetCode
          * @desc   : 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {
        	var param = [
        					 {code:"CM34", sSelectType:""}
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
        /**
          * @함수명	: fnOnLoad
          * @desc   : 폼 onload이벤트
          */ 
        this.fnOnLoad = function(obj,e)
        {
        	var ownFrame = this.getOwnerFrame();
        	this.dsUserInfo.addRow();
        	this.dsUserInfo.setColumn(0, "USER_ID", ownFrame.agv_id);
        	
        	this.divEvalStdDay.fnSetDate(this.dsUserInfo,"ABS_ST_DAY","ABS_ED_DAY");
        	this.fnSearch();
        }

        /**
          * @함수명: fnSearch
          * @desc   : 사용자 정보 출력
          */ 
        this.fnSearch = function(){

        	var sSvcID = "searchSetUserInfo";
        	var sController = "epro.com.service.BComService.searchSetUser";
        	var sInDatasets = "dsUserInfo=dsUserInfo";
        	var sOutDatasets = "dsUserInfo=dsUserInfo";
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
        		case "searchSetUserInfo" :
        			var ownFrame = this.getOwnerFrame();
        			if(gfnIsNull(this.dsUserInfo.getColumn(0,"LANG_CD"))){
        				this.dsUserInfo.setColumn(0, "LANG_CD", ownFrame.agv_lang);
        			}
        			
        		break;
        		
        		case "saveSetUser" :
        			gfnAlert("EPRO_LABEL_00002");
        			
        		break;
        		
        		default:
        		break;	
        	}
        }
        /**
        	@function	fnPopCallBack()
        	@desc   	팝업 CallBack 함수
        */
        this.fnPopCallBack = function(sPopupId,rtn)
        {
        	this.dsReturn.clear();
        	this.dsReturn.loadXML(rtn);
        	switch(sPopupId){
        		case "BUserSrchPopup" :
        			var user_id = this.dsReturn.getColumn(0, "USER_ID");
        			if(user_id == this.dsUserInfo.getColumn(0, "USER_ID")){
        				gfnAlert("EPRO_LABEL_01226");
        				
        			}else{
        				this.dsUserInfo.setColumn(0, "ABS_USER_NM", this.dsReturn.getColumn(0, "USER_NM"));
        				this.dsUserInfo.setColumn(0, "ABS_USER_ID", this.dsReturn.getColumn(0, "USER_ID"));
        				
        			}
        			
        		break;
        		
        		default :
        		break;
        	}
        }
        this.fnSaveCheck = function(){
        	
        	var strDay = this.dsUserInfo.getColumn(0, "ABS_ST_DAY");
        	var endDay = this.dsUserInfo.getColumn(0, "ABS_ED_DAY");
        	
        	if(!gfnIsNull(this.dsUserInfo.getColumn(0,"ABS_USER_ID"))){
        		if(!((gfnIsNull(strDay) && gfnIsNull(endDay)) || (!gfnIsNull(strDay) && !gfnIsNull(endDay))) ){
        			gfnAlert("EPRO_LABEL_00985");
        			return false;
        		} 
        	}
        	
        	return true;
        	
        }
        /**
          * @함수명	: fnOnClick
          * @desc     	: 저장 함수 이벤트
          */
        this.fnOnClick = function(obj,e)
        {
        	if(!this.fnSaveCheck()) return;
        	if(!gfnConfirm("EPRO_LABEL_00001")) return;
        	
        	var sSvcID = "saveSetUser";
        	var sController = "epro.com.service.BComService.saveSetUser";
        	var sInDatasets = "dsUserInfo=dsUserInfo";
        	var sOutDatasets = "dsUserInfo=dsUserInfo";
        	var sCallbackFunc = "fnTrCallBack";	
        	
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        this.fnOnkeyup = function(obj,e)
        {
        	
        	if(e.keycode == "13"){

        		obj.updateToDataset();

        		if(obj.name == "edtAbsUserNM") this.fnUserSearch();
        	}
        }

        this.fnUserSearch = function(obj,e)
        {

        	var sArg = { 
        				agv_id:""
        				,agv_nm:this.dsUserInfo.getColumn(0,"ABS_USER_NM")
        				,agv_dept:""
        		   };
        	//매개변수 ::>    form, sPopupId, CallBack Function Name, arg
        	gfnSearchComUser(this, "BUserSrchPopup", "fnPopCallBack", sArg)
        }

        this.fnOnTextChanged = function(obj,e)
        {
        	if(obj.name == "edtAbsUserNM") {
        		this.dsUserInfo.setColumn(0,"ABS_USER_ID","");
        		this.dsUserInfo.setColumn(0,"ABS_ST_DAY","");
        		this.dsUserInfo.setColumn(0,"ABS_ED_DAY","");
        	}
        }
        this.fnOncolumnChanged = function(obj,e)
        {
        	if(gfnIsNull(this.dsUserInfo.getColumn(0,"ABS_USER_ID"))){
        		this.divEvalStdDay.set_enable(false);
        		
        	} else{
        		this.divEvalStdDay.set_enable(true);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsUserInfo.addEventHandler("oncolumnchanged", this.fnOncolumnChanged, this);
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.addEventHandler("onload", this.fnOnLoad, this);
            this.edtAbsUserId.addEventHandler("ontextchanged", this.fnOnTextChanged, this);
            this.edtAbsUserNM.addEventHandler("onkeydown", this.fnOnkeyup, this);
            this.edtAbsUserNM.addEventHandler("ontextchanged", this.fnOnTextChanged, this);
            this.btnSinglePop00.addEventHandler("onclick", this.fnUserSearch, this);
            this.btnSave.addEventHandler("onclick", this.fnOnClick, this);

        };

        this.loadIncludeScript("BSetUserPopup.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
