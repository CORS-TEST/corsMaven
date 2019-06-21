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
                this.set_name("ComUbiReportToHtml");
                this.set_titletext("유비리포트 HTML변환");
                this._setFormPosition(0,0,934,894);
            }
            this.style.set_font("9 arial");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsParams", this);
            obj._setContents("<ColumnInfo><Column id=\"JRF_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EXPORT_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"EXPORT_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EXPOTR_FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"IS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_1\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_3\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_2\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM1\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"MULTY_PARAM\" type=\"STRING\" size=\"256\"/><Column id=\"TBL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_MODE\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REF_TBL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHtml", this);
            obj._setContents("<ColumnInfo><Column id=\"CONTENT\" type=\"STRING\" size=\"4000\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSignData", this);
            obj._setContents("<ColumnInfo><Column id=\"TBL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_1\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_2\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_DATA_A\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM1\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_DATA_B\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_MODE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCntrSclo", this);
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"REASON\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new WebBrowser("WebBrowser00", "absolute", "0", "50", null, null, "0", "0", this);
            obj.set_taborder("0");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSign", "absolute", "837", "10", null, "33", "10", null, this);
            obj.set_taborder("1");
            obj.set_text("전자서명");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser01", "absolute", "0", "50", null, null, "0", "0", this);
            obj.set_taborder("2");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 934, 894, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("UbiReport");
            		p.set_titletext("유비리포트 HTML변환");
            		p.style.set_font("9 arial");

            	}
            );
            obj.set_stepcount("");
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("ComUbiReportToHtml.xfdl", function(exports) {
        /**
           @file       ComUbiReportToHtml.xfdl
           @desc       유비리포트 html변환
           @author     안성민
           @makedate   2019.05.28
           @history    
        */

        this.fnFormOnload = function(obj,e)
        {
        	var ownFrame = this.getOwnerFrame();
        	this.ubiviewerlib_setting(ownFrame);
        	
        	/*
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
        	*/
        }

        /************************************************************************************
        * UbiViewerLib를 사용하여 서버에 파일 저장
        * Data : Local Dataset 사용
        * 저장 기능 페이지 : /ubiHtmlMaker.jsp
        ************************************************************************************/
        this.ubiviewerlib_setting = function(sArg)
        {	
        	var sRefDs = sArg.arg;
        	var reportFile = sArg.reportFile;
        	var localhostDs = sArg.datasets;
        	var exportType = "html";
        	var exportFileNm = "SIGNDATA_" + sRefDs.getColumn(0,"BRANCH_CD") + "_" + sArg.exportFileNm;
        	var exportPath =  "D:/00.Project/Cors19/upload/" + sRefDs.getColumn(0,"BRANCH_CD");
        	var ubiDataType = "";
        	var ubiData = [];
        	var ubiViewerUrl = "";
        	var reportDir = "";
        	var ssvData = [];
        	var resid = "";
        	var datasource = "";
        	this.content = sArg.content;
        	this.exportFilePath = exportPath + "/" + exportFileNm + "." + exportType.toLowerCase();

        	if(localhostDs == null || localhostDs.length == 0) {
        		ubiDataType = "DB";
        	} else {
        		ubiDataType = "DS";
        		for(var i=0; i<localhostDs.length; i++)	{
        			var dsId = localhostDs[i].id;
        			ubiData.push([dsId , localhostDs[i]]);
        		}
        				
        		if(application.services["svcurl"].url.indexOf("localhost") > -1) {
        			reportDir = "work_dev";
        		} else {
        			reportDir = "work";
        		}
        		
        		if( ubiDataType == "DB" ){
        			if(application.services["svcurl"].url.indexOf("localhost") > -1) {
        				datasource = "DEV"
        			}	
        		}else{
        			var _nrs_ = String.fromCharCode(28);
        			var _ncs_ = String.fromCharCode(29);
        			var _rs_ = String.fromCharCode(30);
        			var _cs_ = String.fromCharCode(31);
        		
        			ssvData.push("LOCALDATASET:" + _rs_);
        			for(var i=0; i<ubiData.length; i++) {
        				if( ubiData[i] && ubiData[i].length == 2 ) {	
        					ssvData.push(ubiData[i][0] + _cs_);
        					ssvData.push(ubiData[i][1].name + _cs_);
        					ssvData.push(_rs_);
        				}
        			}
        			for( var i = 0; i < ubiData.length; i++ ) {
        				if( ubiData[i] && ubiData[i].length == 2 ) {
        					if( i == 0 ){
        						ssvData.push("SSV:utf-8" + _rs_);
        					}
        					ssvData.push(ubiData[i][1].saveSSV());
        				}
        			}
        		}
        	}
        	
        	//html변환 jsp
        	ubiViewerUrl = application.gvDomain + "/ubi4/ubiexport2.jsp";
         		
        	var ubiArg = "";	
        	ubiArg = "BRANCH_CD#" + sRefDs.getColumn(0,"BRANCH_CD") + "#"	
        				+ sRefDs.getColumn(0,"COL_NM1") + "#" 
        				+ sRefDs.getColumn(0,"REF_KEY_1")+ "#" 
        				+ sRefDs.getColumn(0,"COL_NM2") + "#" 
        				+ sRefDs.getColumn(0,"REF_KEY_2")+ "#";	
        	/*
        	for(var r=0; r<sRefDs.rowcount; r++) {
        		for(var i=0; i<sRefDs.colcount; i++) {
        			ubiArg += sRefDs.getColID(i) + "#" + sRefDs.getColumn(r, sRefDs.getColID(i)) + "#"
        		}
        	}
        	*/
         	if(system.navigatorname == "nexacro"){
        		var str = "";
        		str +='<html>                                                                                           '; 
        		str +='<title>                                                                                          ';
        		str +='</title>                                                                                         ';
        		str +='<head>                                                                                           ';
        		str +='<meta charset="UTF-8">                                                                           ';
        		str +='</head>                                                                                          ';
        		str +='<body>                                                                                           ';
        		str +='<form id="postform" name="postform" action="'+ubiViewerUrl+'" method="post" accept-charset="utf-8">';	
        		str +='	<input type="hidden" id="reportFile" name="reportFile" value="'+reportFile+'">                  ';
        		str +='	<input type="hidden" id="reportDir" name="reportDir" value="'+reportDir+'">                     ';
        		str +='	<input type="hidden" id="arg" name="arg" value="'+ubiArg+'">                                    '; 
        		str +='	<input type="hidden" id="dataType" name="dataType" value="'+ubiDataType+'">                		';	
        		str +='	<input type="hidden" id="exportType" name="exportType" value="'+exportType+'">                	';
        		str +='	<input type="hidden" id="exportFileNm" name="exportFileNm" value="'+exportFileNm+'">            ';
        		str +='	<input type="hidden" id="exportPath" name="exportPath" value="'+exportPath+'">            		';
        		if( ubiDataType == "DS" ){
        			str +='	<input type="hidden" id="ssvdata" name="ssvdata" value="'+ssvData.join("")+'">              ';		
        		} else {
        			str +='	<input type="hidden" id="datasource" name="datasource" value="'+datasource+'"> 				';
        		}
        		str +='</form>                                                                                          ';
        		str +='<script type="text/javascript">                                                                  ';
        		str +='	document.title = "testWeb";                                                                     ';
        		str +='	document.postform.submit();                                                                     ';
        		str +='</script>                                                                                        ';	
        		str +='</body>                                                                                          ';
        		str +='</html>';
        			
        		this.WebBrowser00.getProperty("document").callMethod("Write", str);
        		this.WebBrowser00.getProperty("document").callMethod("Close");		
        		
        		this.fnCallback(exportType);
        	}else{	
        	
        	}	
        }

        var timerCnt;
        this.fnCallback = function(type)
        {
        	if(type=="html") {
        		timerCnt = 0;
        		this.setTimer(0,1000);
        	}
        }

        this.UbiReport_ontimer = function(obj,e)
        {
        	try{
        		timerCnt++;
        		var doc = this.WebBrowser00.getProperty("document");
        		var result = doc.getProperty("body").getProperty("innerHTML");
        		var strHtml = "";

        		if(result.trim()=="success" || timerCnt >= 10) {
        			this.killTimer( 0 );
        			this.ubiCallback();
        		} else if(result.trim()=="fail") {
        			trace("계약내용 html문서로 생성 실패!");
        			return;
        		}
        	}catch(e){
        		trace("계약내용 html문서로 생성 실패!");
        		trace(e.message);
        	}
        }

        this.ubiCallback = function()
        {	
        	this.dsHtml.deleteAll()
        	this.dsHtml.addRow();
        	this.dsHtml.setColumn(0, "CONTENT", this.content);
        	this.dsHtml.setColumn(0, "FILE_PATH", this.exportFilePath);
        	
        	var sSvcID = "readHtmlReport";
        	var sController = "epro.com.service.BComService.readHtmlReport";
        	var sInDatasets = "dsHtml=dsHtml";
        	var sOutDatasets = "dsHtml=dsHtml";
        	var sCallbackFunc = "fnTrCallBack";
        	
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);	
        }

        /**

        	@desc   	팝업 CallBack 함수
        */
        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	switch(strSvcID) {
        		case "readHtmlReport" :	
        			var start = "<div style="+"color:#333333;font:20 malgun gothic;>";
        			var end   = "</div>";			
        		
        			var doc = this.WebBrowser00.getProperty("document");
        			doc.callMethod("write", start + this.dsHtml.getColumn(0, "CONTENT") + end);
        	
        			break;
        		default:
        			break;		
        	}
        }

        this.fnPreSign = function()
        {
        	if(!confirm("서명 하시겠습니까?")) return ;

        	if(system.navigatorname == "nexacro") {
        		this.SignData_ActiveX(this.dsHtml.getColumn(0, "CONTENT"),application.gdsUserInfo.getColumn(0,"PTNR_ID"));
        	} else {
        		this.WebBrowser00.callMethod("signContent",this.dsHtml.getColumn(0, "CONTENT"),application.gdsUserInfo.getColumn(0,"PTNR_ID"));
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
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ontimer", this.UbiReport_ontimer, this);
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.WebBrowser01.addEventHandler("onusernotify", this.WebBrowser00_onusernotify, this);

        };

        this.loadIncludeScript("ComUbiReportToHtml.xfdl", true);

       
    };
}
)();
