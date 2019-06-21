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
                this.set_name("PCTRB100P00");
                this.set_titletext("유비리포트 출력물 팝업");
                this.set_cssclass("frm_POP_Search");
                this._setFormPosition(0,0,934,894);
            }
            this.style.set_font("9 arial");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsParams", this);
            obj._setContents("<ColumnInfo><Column id=\"JRF_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EXPORT_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"EXPORT_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EXPOTR_FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"IS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_1\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_3\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_2\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM1\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"MULTY_PARAM\" type=\"STRING\" size=\"256\"/><Column id=\"TBL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_MODE\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REF_TBL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHtml", this);
            obj._setContents("<ColumnInfo><Column id=\"contents\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_1\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSignData", this);
            obj._setContents("<ColumnInfo><Column id=\"TBL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_1\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_2\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_DATA_A\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM1\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_DATA_B\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_MODE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCntrSclo", this);
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"REASON\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_sign", "absolute", null, "16", "87", "25", "15", null, this);
            obj.set_taborder("5");
            obj.set_text("전자서명");
            obj.set_cssclass("btn_WF_Ssign");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new UbiReport4("UbiReport00", "absolute", "10", "45", null, "827", "10", null, this);
            obj.set_taborder("6");
            obj.set_text("UbiReport00");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00", "absolute", "4", "85", null, "795", "46", null, this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Button("btnCntr", "absolute", null, "16", "88", "25", "107", null, this);
            obj.set_taborder("8");
            obj.set_text("합의");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 934, 894, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("UbiReport");
            		p.set_titletext("유비리포트 출력물 팝업");
            		p.style.set_font("9 arial");
            		p.set_cssclass("frm_POP_Search");

            	}
            );
            obj.set_stepcount("");
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("ComUbiReportSign_copy.xfdl", function(exports) {
        /**
           @file       ComUbiReportSign.xfdl
           @desc       유비리포트 출력 및 서명
           @author     안성민
           @makedate   2019.03.07
           @history    
        */
        this.popTitle = "Report"

        var svcurl = "";
        var nowdate = new Date();
        var year  = nowdate.getFullYear();
        var month = nowdate.getMonth() + 1;   // 1월=0,12월=11이므로 1 더함
        var day   = nowdate.getDate();
        var hour  = nowdate.getHours();
        var min   = nowdate.getMinutes();
        var sec   = nowdate.getSeconds();
        var milsec = nowdate.getMilliseconds();

        if (("" + month).length == 1) { month = "0" + month; }
        if (("" + day).length   == 1) { day   = "0" + day;   }
        if (("" + hour).length  == 1) { hour  = "0" + hour;  }
        if (("" + min).length   == 1) { min   = "0" + min;   }
        if (("" + sec).length   == 1) { sec   = "0" + sec;   }

        this.UbiReport00.isStreaming = true;
        this.UbiReport00.scrollpage = "true";
        this.UbiReport00.key = ('' + year + month + day + hour + min + sec + milsec) + '_' + ((Math.random() * (1 << 30)).toString(16).replace('.',''));
        svcurl = application.gvDomain + "/";	
        	
        this.UbiReport00.resource = svcurl+"ubi4/js";
        this.fv_directPrint = false;
        this.fv_reportFile = "";
        this.fv_branch_cd = "";
        this.fv_ref_key_1 = "";
        this.fv_ref_key_2 = "";
        this.fv_col_nm1 = "";
        this.fv_col_nm2 = "";
        this.fv_multiArg = "";
        this.fv_tblNm = "";
        this.fv_signMode = "";

        
        /**
        	@function	UbiReport_onload()
        	@desc   	
        */
        this.UbiReport_onload = function(obj,e)
        {	
        	//전자인증
        	if(system.navigatorname == "nexacro") {
        		this.WebBrowser00.set_visible(false);
        		if(this.Plugin00 == undefined) {
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
         
        	if(this.UbiReport00.getTotalPage() == undefined) {			
        		// Create Object 
        		var objPlugin = new Plugin("Plugin", "absolute", 30, 120, 196, 46, null, null);
        		// Add Object to Parent Form  
        		this.addChild("Plugin", objPlugin);
        		this.Plugin.set_classid(application.gv_ubiClassid);
        		this.Plugin.set_codebase(application.gv_ubiCodebase);

        		this.Plugin.show();
        		this.reload();
        	}
        	//부모창으로 부터 전달받은 값	
         	var ownFrame = this.getOwnerFrame();
         	
         	var localdatasets	= ownFrame.datasets;
         	var reportFile		= ownFrame.reportFile; 	
         	var arg             = ownFrame.arg;	
         	var orientation		= ownFrame.orientation; 	
         	var imgDir;
         	
         	this.fv_reportFile = reportFile
         	
         	if("Y" == arg.getColumn(0,"ALT_SIGN")) {
        		this.btn_sign.set_visible(true);
        	} else {
        		this.btnCntr.set_right(this.btn_sign.right);
        		this.btnCntr.set_visible(true);
        	}
         	
        	imgDir = application.gvDomain + "/ubi4/work/commonimages/#";
         	
        	if(!gfnIsNull(ownFrame.directPrint)) {
        		this.fv_directPrint = ownFrame.directPrint;
        	}
         	
         	//용지방향에 따른 팝업 넓이 조절
         	if(orientation == "L") { //L - landscape
        		this.parent.set_width(1075);
        		this.parent.set_left(100);
         	}
         	else if(orientation == "P" || orientation == "") { // P - portrait
        		this.parent.set_width(780);
         	}
         	 	
        	// 리포트가 정의되지 않았을 경우 리턴
        	if (gfnIsNull(reportFile)) {
        		gfnAlert("리포트 파일명이 정의되지 않았습니다.");
        		return;
        	}
        	
        	// ---------------------------------------
        	// 리포트 파라미터 설정
        	// ---------------------------------------
        	//리포트파일명
        	this.UbiReport00.jrffile = reportFile;
        	// HTML의 리포트 통신을 담당할 URL 주소	
        	this.UbiReport00.ubiserverurl = svcurl+"UbiServer";
        	//페이지 맞춤설정 -9998(폭맞춤) -9999(쪽맞춤)
            this.UbiReport00.set_scale("-9998") 
        	// 리포트 파일을 가져올 URL (ActiveX에서 사용) : 리포트 파일명을 제외한 디렉토리까지 정의
        	this.UbiReport00.reporturl = svcurl+"ubi4/work_dev/";

        	// 리포트에서 쓸 이미지 아규먼트
        	var imgArg = "A_IMG#" + imgDir;
        	
        	// 하나의 리포트 파일을 여러 건의 파라미터를 넘겨 처리할 때.. ex) 아규먼트1#값1#값2#값3...
        	if(arg == "[object Dataset]") {
        		this.UbiReport00.ismultireport = true;
        		this.UbiReport00.multicount = arg.getRowCount();
        		
        		var totalArg = "";
        		
        		if(arg.getRowCount() == 1) {
        			this.fv_branch_cd 	= arg.getColumn(0,"BRANCH_CD");
        			this.fv_ref_key_1 	= arg.getColumn(0,"REF_KEY_1");
        			this.fv_ref_key_2 	= arg.getColumn(0,"REF_KEY_2");
        			this.fv_col_nm1 	= arg.getColumn(0,"COL_NM1");
        			this.fv_col_nm2 	= arg.getColumn(0,"COL_NM2");
        			this.fv_tblNm		= arg.getColumn(0,"TBL_NM");
        			this.fv_signMode	= arg.getColumn(0,"SIGN_MODE");
        			
        			totalArg = totalArg + imgArg + arg.getColumn(0,"COL_NM1") + "#" 
        										+ arg.getColumn(0,"REF_KEY_1")+ "#" 
        										+ arg.getColumn(0,"COL_NM2") + "#" 
        										+ arg.getColumn(0,"REF_KEY_2")+ "#";			
        		}else{
        			for(var i=0; i<arg.getRowCount(); i++) {	
        				var multiArg = "";
        				
        				if(arg.getRowCount() > 1)	imgArg = "A_IMG." + (i+1) + "#" + imgDir;
        				
        				for(var k=0; k<arg.getColCount(); k++) {
        					if(arg.getRowCount() > 1)
        						multiArg = multiArg + arg.getColID(k) + "." + (i+1) + "#" + arg.getColumn(i, arg.getColID(k)) + "#";
        					else
        						multiArg = multiArg + arg.getColID(k) + "#" + arg.getColumn(i, arg.getColID(k)) + "#";
        				}			
        				this.fv_multiArg = multiArg;
        				totalArg = totalArg + imgArg + multiArg;			
        			}
        		}
        		this.UbiReport00.arg = totalArg;
        	}
        	else if(arg!="[object Dataset]") {
        		this.UbiReport00.arg = imgArg;
        	}
        	
        	if(application.services["svcurl"].url.indexOf("localhost") > -1) {
        		this.UbiReport00.resid = "UBIHTML_DEV";
        	}

        	if(gfnIsNull(localdatasets)) {
        		if(application.services["svcurl"].url.indexOf("localhos") > -1) {
        			this.UbiReport00.datasource = "DEV";
        		}
        	} else {
        		for(var i=0; i<localdatasets.length; i++) {
        			this.UbiReport00.setDataset(localdatasets[i].id, localdatasets[i])	
        		}
        	}
        		
        	this.UbiReport00.setVisibleToolbar("SAVE", false);
        	this.UbiReport00.setPrintMenu('PDF');
        	this.UbiReport00.setVisibleToolbar("PRINT_PDF",false);
        	this.UbiReport00.setVisibleToolbar("PRINT_HTML",false);
        	this.UbiReport00.setVisibleToolbar("PRINT_UBI",false);
        	this.UbiReport00.setVisibleToolbar("SAVE",false);
        	this.UbiReport00.setVisibleToolbar("SAVE_PPTX",false); 
        	this.UbiReport00.setVisibleToolbar("EXPORT",false);
        	this.UbiReport00.setVisibleToolbar("EXPORT_EXCEL",false);
            this.UbiReport00.setVisibleToolbar("EXPORT_PPT",false);
            this.UbiReport00.setVisibleToolbar("EXPORT_DOC",false);
            this.UbiReport00.setVisibleToolbar("EXPORT_HWP",false);
            this.UbiReport00.setVisibleToolbar("EXPORT_HWPML",false);
        	
        	this.UbiReport00.retrieve(this, "UbiPreviewEnd");
        	return;
        }

        
        /**
        	@function	retrieveEnd()
        	@desc   	
        */
        this.retrieveEnd = function()
        {
        	//this.showUbiViewerLib();
        }

         
        this.UbiPreviewEnd = function()
        {
        	this.UbiReport00.setVisibleToolbar("SAVE", false);
        	this.UbiReport00.setPrintMenu('PDF');
        	this.UbiReport00.setVisibleToolbar("PRINT_PDF",false);
        	this.UbiReport00.setVisibleToolbar("PRINT_HTML",false);
        	this.UbiReport00.setVisibleToolbar("PRINT_UBI",false);
        	this.UbiReport00.setVisibleToolbar("SAVE",false);
        	this.UbiReport00.setVisibleToolbar("SAVE_PPTX",false); 
        	this.UbiReport00.setVisibleToolbar("EXPORT",false);
        	this.UbiReport00.setVisibleToolbar("EXPORT_EXCEL",false);
            this.UbiReport00.setVisibleToolbar("EXPORT_PPT",false);
            this.UbiReport00.setVisibleToolbar("EXPORT_DOC",false);
            this.UbiReport00.setVisibleToolbar("EXPORT_HWP",false);
            this.UbiReport00.setVisibleToolbar("EXPORT_HWPML",false);
        }

        this.fnPreSign = function()
        {
        	this.dsParams.deleteAll();
        	this.dsParams.addRow();
        	this.dsParams.setColumn(0, "JRF_FILE_NAME",  this.fv_reportFile);
        	this.dsParams.setColumn(0, "EXPORT_FILE_NAME", this.dsParams.getColumn(0, "JRF_FILE_NAME").substr(0,this.dsParams.getColumn(0, "JRF_FILE_NAME").lastIndexOf(".jrf"))+".urf");
        	this.dsParams.setColumn(0, "EXPOTR_FILE_TYPE", "URF");
        	this.dsParams.setColumn(0, "BRANCH_CD", this.fv_branch_cd);
        	this.dsParams.setColumn(0, "REF_KEY_1", this.fv_ref_key_1);
        	this.dsParams.setColumn(0, "REF_KEY_2", this.fv_ref_key_2);
        	this.dsParams.setColumn(0, "COL_NM1", this.fv_col_nm1);
        	this.dsParams.setColumn(0, "COL_NM2", this.fv_col_nm2);
        	this.dsParams.setColumn(0, "MULTY_PARAM", this.fv_multiArg);
        	this.dsParams.setColumn(0, "TBL_NM", this.fv_tblNm);
        	this.dsParams.setColumn(0, "SIGN_MODE", this.fv_signMode);
        	this.dsParams.setColumn(0, "SIGN_USER_NM", application.gdsUserInfo.getColumn(0,"USER_NM"));

        	if(!confirm("서명 하시겠습니까?")) return ;
        	this.showUbiViewerLib()
        }

        this.showUbiViewerLib = function() 
        {
            var sSvcID = "ubiReport";
        	var sController = "epro.com.service.BComService.ubiReport";
        	var sInDatasets = "dsParams=dsParams";
        	var sOutDatasets = "dsHtml=dsHtml";
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
        		case "ubiReport" : 
        			if(strErrCd!=-1){
        				if(system.navigatorname == "nexacro") {
        					this.SignData_ActiveX(this.dsHtml.getColumn(0, "CONTENT"),application.gdsUserInfo.getColumn(0,"PTNR_ID"));
        				} else {
        					this.WebBrowser00.callMethod("signContent",this.dsHtml.getColumn(0, "CONTENT"),application.gdsUserInfo.getColumn(0,"PTNR_ID"));
        				}
        			} 
        		break;
        		
        		case "saveSigned" : 
        			if(strErrMsg!='' && strErrCd!=-1){
        				gfnAlert("서명이 정상적으로 처리되었습니다.");
        				this.btn_sign.set_visible(false);
        				this.parent.opener.fnSearch();
        				this.close();
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

        		signeddata = this.Plugin00.callMethod("SignData", signData, "SHA1", ""); 
        		
        		if( signeddata == null || signeddata == "" )
        		{
        			errmsg = this.Plugin00.callMethod("GetErrorContent"); 
        			errcode = this.Plugin00.callMethod("GetErrorCode"); 
        			alert( "SignData :"+errmsg );
        			return;
        		}
        		else
        		{
        			if(application.services["svcurl"].url.indexOf("kops") > -1){
        			}else{
        				sBizNo = '1234567890';
        			}
        			
        			getR = this.Plugin00.callMethod("GetRFromKey",userdn,sBizNo); 		//운영시 주석제거 아래와 교체
        			if (getR == "")
        			{
        				alert("주민번호/사업자번호를 확인할 수 없는 인증서입니다.");
        				return;
        			}
        			
        			/*
        			ret = this.Plugin00.callMethod("ValidCert_VID",userdn,getR,sBizNo); //운영시 주석제거 아래와 교체
        			if (ret == "0"){
        				//alert("신원확인 성공");
        			}else{
        				alert("인증서의 사업자번호가 일치하지 않습니다.\n사업자 번호를 확인해 주세요.");
        				return; 
        			} 
        			*/
        			
        			var nRow = this.dsSignData.addRow();

        			this.dsSignData.setColumn(nRow, "TBL_NM"		, this.fv_tblNm);
        			this.dsSignData.setColumn(nRow, "BRANCH_CD"	, this.fv_branch_cd);
        			this.dsSignData.setColumn(nRow, "REF_KEY_1"	, this.fv_ref_key_1);
        			this.dsSignData.setColumn(nRow, "REF_KEY_2"	, this.fv_ref_key_2);
        			this.dsSignData.setColumn(nRow, "COL_NM1"		, this.fv_col_nm1);
        			this.dsSignData.setColumn(nRow, "COL_NM2"		, this.fv_col_nm2);
        			this.dsSignData.setColumn(nRow, "SIGN_DATA_B"	, signeddata);
        			this.dsSignData.setColumn(nRow, "SIGN_MODE"	, this.fv_signMode);
        						
        			var sSvcID = "saveSigned";
        			var sController = "epro.com.service.BComService.saveSigned";
        			var sInDatasets = "dsSignData=dsSignData";
        			var sOutDatasets = "dsHtml=dsHtml";
        			var sCallbackFunc = "fnTrCallBack";
        				  
        			gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        		}
        	}
        } 

        /**
        	@function	btn_close_onclick()
        	@desc   	
        */
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        this.WebBrowser00_onusernotify = function(obj,e)
        {
        	if(system.navigatorname != "nexacro") {
        		var nRow = this.dsSignData.addRow();

        		this.dsSignData.setColumn(nRow, "BRANCH_CD"		, this.fv_branch_cd);
        		this.dsSignData.setColumn(nRow, "TBL_NM"		, this.fv_tblNm);
        		this.dsSignData.setColumn(nRow, "REF_KEY_1"	, this.fv_ref_key_1);
        		this.dsSignData.setColumn(nRow, "REF_KEY_2"	, this.fv_ref_key_2);
        		this.dsSignData.setColumn(nRow, "COL_NM1"		, this.fv_col_nm1);
        		this.dsSignData.setColumn(nRow, "COL_NM2"		, this.fv_col_nm2);
        		this.dsSignData.setColumn(nRow, "SIGN_MODE"	, this.fv_signMode);
        		this.dsSignData.setColumn(nRow, "SIGN_DATA_B"	, gfnReplace(e.userdata,"▦",""));
        	  		
        		var sSvcID = "saveSigned";
        		var sController = "epro.com.service.BComService.saveSigned";
        		var sInDatasets = "dsSignData=dsSignData";
        		var sOutDatasets = "dsHtml=dsHtml";
        		var sCallbackFunc = "fnTrCallBack";
        			  
        		gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        	} 
        }

        this.fnBtnCntrOnclick = function(obj,e)
        {
        	if(!gfnConfirm("합의 하시겠습니까?")) return;

        	this.dsCntrSclo.deleteAll();
        	this.dsCntrSclo.addRow();
        	var row = this.dsList.findRow("CHECKED", 1);
        	this.dsCntrSclo.setColumn(0, "BRANCH_CD", this.dsFileCond.getColumn(row, "BRANCH_CD"));
        	this.dsCntrSclo.setColumn(0, "CNTR_NO", this.dsFileCond.getColumn(row, "REF_KEY_1"));
        	this.dsCntrSclo.setColumn(0, "CNTR_ORDR", this.dsFileCond.getColumn(row, "REF_KEY_2"));

        	var sSvcID = "cntrClo";
        	var sController = "epro.cntr.service.SCntrService.updateCntrClo";
        	var sInDatasets = "dsCntrSclo=dsCntrSclo";
        	var sOutDatasets = "";
        	var sCallbackFunc = "fnTrCallBack";

            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.UbiReport_onload, this);
            this.btn_sign.addEventHandler("onclick", this.fnPreSign, this);
            this.WebBrowser00.addEventHandler("onusernotify", this.WebBrowser00_onusernotify, this);
            this.btnCntr.addEventHandler("onclick", this.fnBtnCntrOnclick, this);

        };

        this.loadIncludeScript("ComUbiReportSign_copy.xfdl", true);

       
    };
}
)();
