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
                this.set_name("BComTmpltPopup");
                this.set_titletext("계약템플릿 전자서명 팝업");
                this.set_cssclass("frm_POP_Search");
                this._setFormPosition(0,0,995,930);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTmplt", this);
            obj._setContents("<ColumnInfo><Column id=\"CNTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"4000\"/><Column id=\"REF_KEY_1\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_2\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM1\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"TBL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_MODE\" type=\"STRING\" size=\"256\"/><Column id=\"REF_TBL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSignData", this);
            obj._setContents("<ColumnInfo><Column id=\"TBL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_1\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_2\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_DATA_A\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM1\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_DATA_B\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_MODE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCntr", this);
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"REASON\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompBody05", "absolute", "10", "46", null, null, "10", "10", this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.style.set_border("0 none #808080ff");
            obj.set_visible("false");
            obj.set_url("CCOMP::ComEditor.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sign", "absolute", null, "10", "87", "25", "11", null, this);
            obj.set_taborder("1");
            obj.set_text("전자서명");
            obj.set_cssclass("btn_WF_Ssign");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnCntr", "absolute", null, "10", "89", "25", "103", null, this);
            obj.set_taborder("2");
            obj.set_text("합의");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00", "absolute", "2.41%", "67", null, "810", "2.41%", null, this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 995, 930, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("계약템플릿 전자서명 팝업");
            		p.set_cssclass("frm_POP_Search");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::ComEditor.xfdl");
        };
        
        // User Script
        this.registerScript("BComTmpltPopupSign.xfdl", function(exports) {
        /***************************************************************************
         * Program ID    : BComTmpltPopup.xfdl
         * Program Name  : 계약템플릿 팝업
         * Author        : 안성민
         * Created On    : 2019.03.15
        **************************************************************************/
        this.popTitle = "계약내용"
        var mode = "";

        this.fv_branch_cd = "";
        this.fv_ref_key_1 = "";
        this.fv_ref_key_2 = "";
        this.fv_col_nm1 = "";
        this.fv_col_nm2 = "";
        this.fv_tblNm = "";
        this.fv_signMode = "";
        this.fv_readonly = "";

        this.FormOnload = function(obj,e)
        {
        	if(system.navigatorname == "nexacro") {
        		this.WebBrowser00.set_visible(false);
        		if(this.Plugin00 == undefined)
        		{
        			// Create Object	
        			var objPlugin = new Plugin("Plugin00", "absolute", 30, 120, 196, 46, null, null);
        			// Add Object to Parent Form  
        			this.addChild("Plugin00", objPlugin);
        			this.Plugin00.set_visible(false);
        			this.Plugin00.set_classid(application.gv_certClassid);
        			this.Plugin00.set_codebase(application.gv_certCodebase);	
        			this.Plugin00.show();
        		}
        	} else {
        		this.WebBrowser00.set_url(application.gvDomain +"/CrossCert/Sign.html");	
        		this.WebBrowser00.set_visible(true);			
        	}
        	
        	var ownFrame = this.getOwnerFrame();
        	
        	this.dsTmplt.setColumn(0,"BRANCH_CD",ownFrame.agv_branchCd);
        	this.dsTmplt.setColumn(0,"CNTR_NO",ownFrame.agv_no);
        	this.dsTmplt.setColumn(0,"CNTR_ORDR",ownFrame.agv_ordr);
        	this.dsTmplt.setColumn(0,"CONTENT",ownFrame.agv_content);
        	this.fv_readonly = ownFrame.agv_readonly;

        	
        	var arg = ownFrame.arg;
        	this.fv_branch_cd 	= arg.getColumn(0,"BRANCH_CD");
        	this.fv_ref_key_1 	= arg.getColumn(0,"REF_KEY_1");
        	this.fv_ref_key_2 	= arg.getColumn(0,"REF_KEY_2");
        	this.fv_col_nm1 	= arg.getColumn(0,"COL_NM1");
        	this.fv_col_nm2 	= arg.getColumn(0,"COL_NM2");
        	this.fv_tblNm		= arg.getColumn(0,"TBL_NM");
        	this.fv_signMode	= arg.getColumn(0,"SIGN_MODE");
        	
        	if("Y" == arg.getColumn(0,"ALT_SIGN")) {
        		this.btn_sign.set_visible(true);
        	} else {
        		this.btnCntr.set_right(this.btn_sign.right);
        		this.btnCntr.set_visible(true);
        	}

        	mode = ownFrame.agv_mode;
        	
        	this.fnSearch();
        }

        this.fnSearch = function()
        {	
            var sSvcID = "selectCntrTemplatePop";
        	var sController = "epro.com.service.BComService.selectCntrTemplatePop";
        	var sInDatasets = "dsTmplt=dsTmplt";
        	var sOutDatasets = "dsTmplt=dsTmplt";
        	var sCallbackFunc = "fnTrCallBack";
        		  
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	if(strErrCd < 0){
        		return;
        	}
        	switch(strSvcID)
        	{
        		case "selectCntrTemplatePop" :
        			this.divViewCompBody05.set_visible(true)
        			//var contentStr = decodeURI(this.dsTmplt.getColumn(0, "CONTENT")).split("▩");
        			var contentStr = this.dsTmplt.getColumn(0, "CONTENT")
        			this.divViewCompBody05.fnEditorInit(contentStr, this.fv_readonly);
        			break;
        		case "saveSigned" :
        			if(strErrMsg!='' && strErrCd!=-1){
        				gfnAlert("서명이 정상적으로 처리되었습니다.");
        				this.btn_sign.set_visible(false);
        				this.parent.opener.fnSearch();
        				this.close();
        			} 
        			break;
        		case "saveTempltOrgDoc" :
        			if(system.navigatorname == "nexacro") {
        				//this.SignData_ActiveX(this.dsTmplt.getColumn(0, "CONTENT"), application.gdsUserInfo.getColumn(0,"PTNR_ID"));				
        				this.SignData_ActiveX(this.dsTmplt.getColumn(0, "CONTENT"), 1234567890);
        			} else {
        				//this.divViewCompBody05.WebBrowser00.callMethod("signContent",this.dsHtml.getColumn(0, "CONTENT"),application.gdsUserInfo.getColumn(0,"PTNR_ID"));
        				this.divViewCompBody05.WebBrowser00.callMethod("signContent",this.dsTmplt.getColumn(0, "CONTENT"),1234567890);
        			}
        			break;
        		case "preSign" :
        			if(strErrMsg!='' && strErrCd!=-1){
        				if(!confirm("서명 하시겠습니까?")) return ;
        				this.divViewCompBody05.getContent(this.dsTmplt, 0, "CONTENT", "showUbiViewerLib");
        			} 
        			break;
        		case "cntrClo" :
        			gfnAlert("합의 되었습니다.");
        			this.btnCntr.set_visible(false);
        			this.parent.opener.fnSearch();
        			this.parent.close();
        			break;
        			
        		default:
        			break;	
        	}
        }

        this.fnPreSign = function()
        {
        	this.dsTmplt.setColumn(0, "REF_KEY_1", this.fv_ref_key_1)
        	this.dsTmplt.setColumn(0, "REF_KEY_2", this.fv_ref_key_2)
        	this.dsTmplt.setColumn(0, "COL_NM1", this.fv_col_nm1)
        	this.dsTmplt.setColumn(0, "COL_NM2", this.fv_col_nm2)
        	this.dsTmplt.setColumn(0, "TBL_NM", this.fv_tblNm)
        	this.dsTmplt.setColumn(0, "SIGN_MODE", this.fv_signMode)

        	var sSvcID = "preSign";
        	var sController = "epro.com.service.BComService.chkPreSign";
        	var sInDatasets = "dsParams=dsTmplt";
        	var sOutDatasets = "";
        	var sCallbackFunc = "fnTrCallBack";
        				  
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        

        this.showUbiViewerLib = function() 
        {		
        	var sSvcID = "saveTempltOrgDoc";
        	var sController = "epro.com.service.BComService.saveTempltOrgDoc";
        	var sInDatasets = "dsTmplt=dsTmplt" 
        	var sOutDatasets = "dsTmplt=dsTmplt"
        	var sCallbackFunc = "fnTrCallBack";
        	
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        this.SignData_ActiveX = function(signData,sBizNo){
        	
        	// 환경설정 함수 콜
        	gfnInitCross(this);

        	var ret;
        	var signeddata, textin;
        	var userdn;

        	
        	// 인증서 선택창 초기화 및 선택된 인증서의 DN 추출
        	// DN은 인증기관에서 유니크한 것임.
        	userdn = this.Plugin00.callMethod("GetUserDN");
        	
        	if( userdn == null || userdn == "" )
        	{ 
        		return;
        	}
        	else
        	{
        		var enCodeData = encodeURI(signData)
        		signeddata = this.Plugin00.callMethod("SignData", enCodeData, "SHA1", ""); 
        	
        		if( signeddata == null || signeddata == "" )
        		{
        			errmsg = this.Plugin00.callMethod("GetErrorContent"); 
        			errcode = this.Plugin00.callMethod("GetErrorCode"); 
        			alert( "SignData :"+errmsg );
        			return;
        		}
        		else
        		{
        			getR = this.Plugin00.callMethod("GetRFromKey",userdn,sBizNo);  //운영시 주석제거 아래와 교체
        			if (getR == "")
        			{
        				alert("주민번호/사업자번호를 확인할 수 없는 인증서입니다.");
        				return;
        			}
        			
        			ret = this.Plugin00.callMethod("ValidCert_VID",userdn,getR,sBizNo); //운영시 주석제거 아래와 교체
        			if (ret == "0"){
        				//alert("신원확인 성공");
        			}else{
        				alert("인증서의 사업자번호가 일치하지 않습니다.\n사업자 번호를 확인해 주세요.");
        				return; 
        			} 
        			var str = this.Plugin00.callMethod("VerifySignData", signeddata, "SHA1")
        			 
        			this.dsSignData.deleteAll();			
        			this.dsSignData.addRow();

        			this.dsSignData.setColumn(0, "TBL_NM"		, this.fv_tblNm);
        			this.dsSignData.setColumn(0, "BRANCH_CD"		, this.fv_branch_cd);
        			this.dsSignData.setColumn(0, "REF_KEY_1"		, this.fv_ref_key_1);
        			this.dsSignData.setColumn(0, "REF_KEY_2"		, this.fv_ref_key_2);
        			this.dsSignData.setColumn(0, "COL_NM1"		, this.fv_col_nm1);
        			this.dsSignData.setColumn(0, "COL_NM2"		, this.fv_col_nm2);
        			this.dsSignData.setColumn(0, "SIGN_DATA_B"	, signeddata);
        			this.dsSignData.setColumn(0, "SIGN_MODE"		, this.fv_signMode);
        											
        			var sSvcID = "saveSigned";
        			var sController = "epro.com.service.BComService.saveSigned";
        			var sInDatasets = "dsSignData=dsSignData";
        			var sOutDatasets = "";
        			var sCallbackFunc = "fnTrCallBack";
        				  
        			gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        			
        		}
        	}
        } 

        this.WebBrowser00_onusernotify = function(obj,e)
        {
        	if(system.navigatorname != "nexacro") {
        		
        		this.dsSignData.deleteAll();
        		this.dsSignData.addRow();
        		
        		this.dsSignData.setColumn(0, "TBL_NM"		, this.fv_tblNm);
        		this.dsSignData.setColumn(0, "BRANCH_CD"	, this.fv_branch_cd);
        		this.dsSignData.setColumn(0, "REF_KEY_1"	, this.fv_ref_key_1);
        		this.dsSignData.setColumn(0, "REF_KEY_2"	, this.fv_ref_key_2);
        		this.dsSignData.setColumn(0, "COL_NM1"		, this.fv_col_nm1);
        		this.dsSignData.setColumn(0, "COL_NM2"		, this.fv_col_nm2);
        		this.dsSignData.setColumn(0, "SIGN_DATA_B"	, gfnReplace(e.userdata,"▦",""));
        		this.dsSignData.setColumn(0, "SIGN_MODE"	, this.fv_signMode);
        		
        		var sSvcID = "saveSigned";
        		var sController = "epro.com.service.BComService.saveSigned";
        		var sInDatasets = "dsSignData=dsSignData";
        		var sOutDatasets = "";
        		var sCallbackFunc = "fnTrCallBack";
        			  
        		gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        	} 
        }

        this.fnBtnCntrOnclick = function(obj,e)
        {
        	if(!gfnConfirm("합의 하시겠습니까?")) return;

        	this.dsCntr.deleteAll();
        	this.dsCntr.addRow();
        	var row = this.dsList.findRow("CHECKED", 1);
        	this.dsCntr.setColumn(0, "BRANCH_CD", this.dsTmplt.getColumn(0, "BRANCH_CD"));
        	this.dsCntr.setColumn(0, "CNTR_NO", this.dsTmplt.getColumn(0, "CNTR_NO"));
        	this.dsCntr.setColumn(0, "CNTR_ORDR", this.dsTmplt.getColumn(0, "CNTR_ORDR"));

        	var sSvcID = "cntrClo";
        	var sController = "epro.cntr.service.SCntrService.updateCntrClo";
        	var sInDatasets = "dsCntr=dsCntr";
        	var sOutDatasets = "";
        	var sCallbackFunc = "fnTrCallBack";

            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        this.wb_daumEditor_onloadcompleted = function(obj,e)
        {
        	this.divViewCompBody05.wb_daumEditor.callMethod("setEditor",this.dsTmplt.getColumn(0, "CONTENT"));
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.FormOnload, this);
            this.btn_sign.addEventHandler("onclick", this.fnPreSign, this);
            this.btnCntr.addEventHandler("onclick", this.fnBtnCntrOnclick, this);
            this.WebBrowser00.addEventHandler("onusernotify", this.WebBrowser00_onusernotify, this);

        };

        this.loadIncludeScript("BComTmpltPopupSign.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
