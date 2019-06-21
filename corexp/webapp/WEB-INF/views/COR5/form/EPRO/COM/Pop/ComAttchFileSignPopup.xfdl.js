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
                this.set_name("pop_docType");
                this.set_titletext("첨부파일 전자서명 팝업");
                this.set_cssclass("frm_POP_Search");
                this._setFormPosition(0,0,855,604);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFileCond", this);
            obj._setContents("<ColumnInfo><Column id=\"REF_TBL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_1\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_2\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_3\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_4\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_5\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_COL_1\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_COL_2\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_COL_3\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_COL_4\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_COL_5\" type=\"STRING\" size=\"256\"/><Column id=\"DS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"4000\"/><Column id=\"TBL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM1\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSignData", this);
            obj._setContents("<ColumnInfo><Column id=\"TBL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_1\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_2\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_DATA_A\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM1\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_DATA_B\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_MODE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCntr", this);
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"REASON\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "8", null, null, "0%", "8", this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Div("div_41", "absolute", "10", "30", null, "200", "10", null, this.Div00);
            obj.set_taborder("34");
            obj.set_text("Div04");
            obj.set_url("CCOMP::CompNFileUpDown.xfdl");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("btnSign", "absolute", null, "26", "132", "25", "11", null, this.Div00);
            obj.set_taborder("35");
            obj.set_text("전자서명");
            obj.set_cssclass("btn_WF_Custom");
            obj.getSetter("objNm").set("구매요청복사버튼");
            obj.getSetter("lbcd").set("");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("btnCntr", "absolute", null, "26", "133", "25", "149", null, this.Div00);
            obj.set_taborder("36");
            obj.set_text("합의");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00", "absolute", "4.68%", "64", null, "518", "3.16%", null, this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_text("Div00");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 855, 604, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("첨부파일 전자서명 팝업");
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
            this._addPreloadList("fdl", "CCOMP::CompNFileUpDown.xfdl");
        };
        
        // User Script
        this.registerScript("ComAttchFileSignPopup.xfdl", function(exports) {
        /***************************************************************************
         * Program ID    : SCntrPrgAttchFilePopup.xfdl
         * Program Name  : 계약진행현황 첨부파일
         * Author        : 안성민
         * Created On    : 2019.03.07
        **************************************************************************/
        this.popTitle = "첨부파일"
        var mode = "Y";

        this.fv_branch_cd 	= "";
        this.fv_ref_key_1 	= "";
        this.fv_ref_key_2 	= "";
        this.fv_col_nm1 	= "";
        this.fv_col_nm2 	= "";
        this.fv_tblNm		= "";
        this.fv_signMode	= "";
        	
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
        	
        	gfnMakeFileDs(this);
        	var ownFrame = this.getOwnerFrame();
        	
        	var arg = ownFrame.arg;
        		
        	this.dsFileCond.deleteAll();
        	this.dsFileCond.addRow()
        	this.dsFileCond.setColumn(0,"BRANCH_CD",arg.getColumn(0,"BRANCH_CD"));
        	this.dsFileCond.setColumn(0,"REF_TBL_NM",arg.getColumn(0,"REF_TBL_NM"));
        	this.dsFileCond.setColumn(0,"REF_KEY_1",arg.getColumn(0,"REF_KEY_1"));
        	this.dsFileCond.setColumn(0,"REF_KEY_2",arg.getColumn(0,"REF_KEY_2"));
        	this.dsFileCond.setColumn(0,"REF_KEY_3",arg.getColumn(0,"REF_KEY_3"));
        	this.dsFileCond.setColumn(0,"REF_KEY_4",arg.getColumn(0,"REF_KEY_4"));
        	this.dsFileCond.setColumn(0,"REF_KEY_5",arg.getColumn(0,"REF_KEY_5"));
        	this.dsFileCond.setColumn(0,"COL_NM1",arg.getColumn(0,"REF_KEY_COL_1"));
        	this.dsFileCond.setColumn(0,"COL_NM2",arg.getColumn(0,"REF_KEY_COL_2"));
        	this.dsFileCond.setColumn(0,"FILE_GUBUN",arg.getColumn(0,"FILE_GUBUN"));
        	this.dsFileCond.setColumn(0,"DS_NM",arg.getColumn(0,"DS_NM"));
        	this.dsFileCond.setColumn(0,"TBL_NM",arg.getColumn(0,"TBL_NM"));

        	this.dsFileCond.set_updatecontrol(false);
        	this.dsFileCond.setRowType(0, Dataset.ROWTYPE_NORMAL);
        	this.dsFileCond.set_updatecontrol(true);
        		
        	this.fv_branch_cd 	= arg.getColumn(0,"BRANCH_CD");
        	this.fv_ref_key_1 	= arg.getColumn(0,"REF_KEY_1");
        	this.fv_ref_key_2 	= arg.getColumn(0,"REF_KEY_2");
        	this.fv_col_nm1 	= arg.getColumn(0,"REF_KEY_COL_1");
        	this.fv_col_nm2 	= arg.getColumn(0,"REF_KEY_COL_2");
        	this.fv_tblNm		= arg.getColumn(0,"TBL_NM");
        	this.fv_signMode	= arg.getColumn(0,"SIGN_MODE");

        	if("Y" == arg.getColumn(0,"ALT_SIGN")) {
        		this.Div00.btnSign.set_visible(true);
        	} else {
        		this.Div00.btnCntr.set_right(this.Div00.btnSign.right);
        		this.Div00.btnCntr.set_visible(true);
        	}

        	this.fnSearch();
        }

        this.fnSearch = function()
        {	
            var sSvcID = "searchAttchFile";
        	var sController = "epro.com.service.BComService.searchAttchFile";
        	var sInDatasets = "dsFileCond=dsFileCond";
        	var sOutDatasets = "dsFileCond=dsFileCond";
        	var sCallbackFunc = "fnTrCallBack";
        		  
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
          * @함수명	: fnFileload
          * @desc     	: 탭페이지 첨부파일 셋팅
          */
        this.fnFileload= function(fUse)
        {
        	var tablenm = this.dsFileCond.getColumn(0, "REF_TBL_NM");
        	var sTableNm = tablenm.substring(tablenm.indexOf("'")+1,tablenm.lastIndexOf("'"));
        	var arrFileKey = [ this.dsFileCond.getColumn(0, "REF_KEY_1")
         					 ,this.dsFileCond.getColumn(0, "REF_KEY_2")
         					 ,this.dsFileCond.getColumn(0, "REF_KEY_3")]
         					 
        	this.Div00.div_41.fnFileInit(this, sTableNm, this.dsFileCond, arrFileKey, fUse);
        }

        
        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	if(strErrCd < 0){
        		return;
        	}
        	
        	switch(strSvcID)
        	{
        		case "searchAttchFile" :
        			this.fnFileload(mode);
        			break;
        		case "searchAttchFileHash" :
        			if(system.navigatorname == "nexacro") {
        				//this.SignData_ActiveX(this.dsFileHash.getColumn(0, "CONTENT"), application.gdsUserInfo.getColumn(0,"PTNR_ID"));
        				this.SignData_ActiveX(this.dsFileCond.getColumn(0, "CONTENT"), 1234567890);
        			} else {
        				trace(this.dsFileCond.getColumn(0, "CONTENT"))
        				trace(this.WebBrowser00.url)
        				//this.WebBrowser00.callMethod("signContent",this.dsHtml.getColumn(0, "CONTENT"),application.gdsUserInfo.getColumn(0,"PTNR_ID") );
        				this.WebBrowser00.callMethod("signContent",this.dsFileCond.getColumn(0, "CONTENT"),1234567890);
        			}
        			break;
        		case "saveSigned" :
        			if(strErrMsg!='' && strErrCd!=-1){
        				gfnAlert("서명이 정상적으로 처리되었습니다.");
        				this.Div00.btnSign.set_visible(false);
        				this.parent.opener.fnSearch();
        				this.parent.close();
        			} 
        			break;
        		case "cntrClo" :
        			gfnAlert("합의 되었습니다.");
        			this.Div00.btnCntr.set_visible(false);
        			this.parent.opener.fnSearch();
        			this.parent.close();
        			break;
        		default:
        			break;	
        	}
        }

        this.btnSignOnclick = function(obj,e)
        {
        	if(!confirm("서명 하시겠습니까?")) return ;	

        	var sSvcID = "searchAttchFileHash";
        	var sController = "epro.com.service.BComService.searchAttchFileHash";
        	var sInDatasets = "dsFileCond=dsFileCond" 
        	var sOutDatasets = "dsFileCond=dsFileCond"
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
        		signeddata = this.Plugin00.callMethod("SignData", signData, "SHA1", ""); 
        		if( signeddata == null || signeddata == "" )
        		{
        			errmsg = this.Plugin00.callMethod("GetErrorContent"); 
        			errcode = this.Plugin00.callMethod("GetErrorCode"); 
        			gfnAlert( "SignData :"+errmsg );
        			return;
        		}
        		else
        		{
        			getR = this.Plugin00.callMethod("GetRFromKey",userdn,sBizNo); 		//운영시 주석제거 아래와 교체
        			if (getR == "")
        			{
        				gfnAlert("주민번호/사업자번호를 확인할 수 없는 인증서입니다.");
        				return;
        			}
        			
        			ret = this.Plugin00.callMethod("ValidCert_VID",userdn,getR,sBizNo); //운영시 주석제거 아래와 교체
        			if (ret == "0"){
        				//alert("신원확인 성공");
        			}else{
        				alert("인증서의 사업자번호가 일치하지 않습니다.\n사업자 번호를 확인해 주세요.");
        				return; 
        			} 
        			
        			var nRow = this.dsSignData.addRow();

        			this.dsSignData.setColumn(nRow, "TBL_NM"		, this.fv_tblNm);
        			this.dsSignData.setColumn(nRow, "BRANCH_CD"		, this.fv_branch_cd);
        			this.dsSignData.setColumn(nRow, "REF_KEY_1"		, this.fv_ref_key_1);
        			this.dsSignData.setColumn(nRow, "REF_KEY_2"		, this.fv_ref_key_2);
        			this.dsSignData.setColumn(nRow, "COL_NM1"		, this.fv_col_nm1);
        			this.dsSignData.setColumn(nRow, "COL_NM2"		, this.fv_col_nm2);
        			this.dsSignData.setColumn(nRow, "SIGN_DATA_B"	, signeddata);
        			this.dsSignData.setColumn(nRow, "SIGN_MODE"		, this.fv_signMode);
        						
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
        		var nRow = this.dsSignData.addRow();
        		
        		this.dsSignData.setColumn(nRow, "TBL_NM"		, this.fv_tblNm);
        		this.dsSignData.setColumn(nRow, "BRANCH_CD"		, this.fv_branch_cd);
        		this.dsSignData.setColumn(nRow, "REF_KEY_1"		, this.fv_ref_key_1);
        		this.dsSignData.setColumn(nRow, "REF_KEY_2"		, this.fv_ref_key_2);
        		this.dsSignData.setColumn(nRow, "COL_NM1"		, this.fv_col_nm1);
        		this.dsSignData.setColumn(nRow, "COL_NM2"		, this.fv_col_nm2);
        		this.dsSignData.setColumn(nRow, "SIGN_DATA_B"	, gfnReplace(e.userdata,"▦",""));
        		this.dsSignData.setColumn(nRow, "SIGN_MODE"		, this.fv_signMode);
        		
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
        	this.dsCntr.setColumn(0, "BRANCH_CD", this.dsFileCond.getColumn(row, "BRANCH_CD"));
        	this.dsCntr.setColumn(0, "CNTR_NO", this.dsFileCond.getColumn(row, "REF_KEY_1"));
        	this.dsCntr.setColumn(0, "CNTR_ORDR", this.dsFileCond.getColumn(row, "REF_KEY_2"));

        	var sSvcID = "cntrClo";
        	var sController = "epro.cntr.service.SCntrService.updateCntrClo";
        	var sInDatasets = "dsCntr=dsCntr";
        	var sOutDatasets = "";
        	var sCallbackFunc = "fnTrCallBack";

            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.FormOnload, this);
            this.Div00.btnSign.addEventHandler("onclick", this.btnSignOnclick, this);
            this.Div00.btnCntr.addEventHandler("onclick", this.fnBtnCntrOnclick, this);
            this.WebBrowser00.addEventHandler("onusernotify", this.WebBrowser00_onusernotify, this);

        };

        this.loadIncludeScript("ComAttchFileSignPopup.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
