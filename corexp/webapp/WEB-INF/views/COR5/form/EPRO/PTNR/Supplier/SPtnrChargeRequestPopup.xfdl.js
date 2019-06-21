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
                this.set_cssclass("frm_POP_Search");
                this.set_name("POP_Setting");
                this.set_titletext("정보변경팝업");
                this._setFormPosition(0,0,442,90);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPtnrUser", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"USER_PW_ORG\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPtnrChk", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"USER_PW_ORG\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CD_PTNR_STTS\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Edit("edtId", "absolute", "8", "6", "295", "35", null, null, this);
            obj.set_imemode("alpha");
            obj.set_inputtype("number,english,sign,symbol");
            obj.getSetter("objNm").set("아이디");
            obj.style.set_background("#ffffffff URL('theme://images/img_login_id.png')");
            obj.style.set_padding("5 10 3 60");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPwd", "absolute", "8", "46", "295", "35", null, null, this);
            obj.getSetter("objNm").set("비밀번호");
            obj.set_password("true");
            obj.style.set_background("#ffffffff URL('theme://images/img_login_pw.png')");
            obj.style.set_color("black");
            obj.style.set_padding("5 10 3 60");
            obj.set_taborder("5");
            obj.set_value("dlvldptm");
            this.addChild(obj.name, obj);

            obj = new Button("btnLogin", "absolute", "308", "6", "124", "75", null, null, this);
            obj.set_cssclass("btn_MF_login");
            obj.getSetter("objNm").set("로그인");
            obj.style.set_background("#003399ff");
            obj.set_taborder("6");
            obj.set_text("Search");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 442, 90, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("POP_Setting");
            		p.set_cssclass("frm_POP_Search");
            		p.set_titletext("정보변경팝업");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edtId","value","dsPtnrUser","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edtPwd","value","dsPtnrUser","USER_PW_ORG");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("SPtnrChargeRequestPopup.xfdl", function(exports) {
        /**
         * @파일명       	: SPtnrChargeRequestPopup.xfdl
         * @생성자       	: 안성민
         * @생성일자     	: 2018.01.04.
         * @설명			: 신규 저장한 업체의 정보 조회
         * @최종수정자		: 안성민
         * @최종수정일자	: 2018.01.04.
        */  

        
        var bizNo = "";
        this.popTitle = "Change Request"//gfnMultiLabel("EPRO_LABEL_00149");

        /**
          * @함수명	: fnFormOnload
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.LoadEventInfo(이벤트변수)
          * @desc     	: 폼 onload이벤트
          */
        this.fnFormOnload = function(obj,e)
        {
        	this.dsPtnrUser.deleteAll(); this.dsPtnrUser.addRow();
        	this.dsPtnrChk.deleteAll(); this.dsPtnrChk.addRow();
        	this.parent.btnClose.clearEventHandler("onclick");
        	this.parent.btnClose.addEventHandler("onclick",this.fnTmpClose,this);
        }

        this.fnTmpClose = function()
        {
        	this.parent.close();
        }

        /**
        	@fnCnfrm	fnPreSearch()
        	@desc   	조회 전 처리
        */ 
        this.fnPreSearch = function()
        {
        	if(gfnIsNull(this.dsPtnrUser.getColumn(0, "USER_ID"))) {
        		this.edtId.setFocus();
        		gfnAlert("EPRO_LABEL_00995");
        		return false;
        	}
        	
        	if(gfnIsNull(this.dsPtnrUser.getColumn(0, "USER_PW_ORG"))) {
        		this.edtPwd.setFocus();
        		gfnAlert("EPRO_LABEL_00934");
        		return false;
        	}
        	return true;
        }

        /**
        	@fnCnfrm	fnSearch()
        	@desc   	사업자번호 조회
        */     
        this.fnSearch = function()
        {	
        	if(!this.fnPreSearch()) return;
        	this.dsPtnrChk.copyData(this.dsPtnrUser);
        	
        	var sSvcID = "checkPtnrUser";
        	var sController = "epro.ptnr.service.SPtnrService.checkPtnrUser";
        	var sInDatasets = "dsPtnrChk=dsPtnrChk:A";
        	var sOutDatasets = "dsPtnrChk=dsPtnrChk";
        	var sCallbackFunc = "fnTrCallBack";

            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc); 
        }
         

        /**
        	@function	fnTrCallBack()
        	@desc   	Transaction Callback함수
        */      
        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	if(strErrCd < 0){
        		return;
        	}	
        	switch(strSvcID)
        	{	
        		case "checkPtnrUser" :
        			if(0 < this.dsPtnrChk.getRowCount()) {
        				var prntStts = this.dsPtnrChk.getColumn(0, "CD_PTNR_STTS");
        				if("SR10NCLO" == prntStts) {
        					gfnAlert("EPRO_LABEL_01114");
        					return;
        				} else if("SR10NREJ" == prntStts&&this.dsPtnrChk.getColumn(0,"ALT_REJ_DAY")!="Y") {
        					gfnAlert("EPRO_LABEL_01117");
        					return;
        				} else if("SR10NREQ" == prntStts) {
        					if(!gfnConfirm("EPRO_LABEL_01400")) return;
        					gfnSetTmprData("bizType", "CR");
        					gfnSetTmprData("ptnrId", this.dsPtnrChk.getColumn(0, "PTNR_ID"));
        					gfnSetTmprData("ptnrCtgr", this.dsPtnrChk.getColumn(0, "CD_PTNR_CTGR"));
        					application.gv_loginFrame.set_formurl("SPTNR::SPtnrReqDetail.xfdl");
        					this.fnTmpClose();
        				} else if("SR10WRI" == prntStts||("SR10NREJ" == prntStts&&this.dsPtnrChk.getColumn(0,"ALT_REJ_DAY")=="Y")) {
        					gfnSetTmprData("bizType", "CR");
        					gfnSetTmprData("ptnrId", this.dsPtnrChk.getColumn(0, "PTNR_ID"));
        					gfnSetTmprData("ptnrCtgr", this.dsPtnrChk.getColumn(0, "CD_PTNR_CTGR"));
        					application.gv_loginFrame.set_formurl("SPTNR::SPtnrReqDetail.xfdl");
        					this.fnTmpClose();
        				} else if("SR10NWAT" == prntStts) {
        					gfnAlert("EPRO_LABEL_01119");
        					return;
        				}
        			} else {
        				gfnAlert("EPRO_LABEL_01393");
        			}
        			
        			break;
        		default:
        		break;	
        	}
        }

        /**
          * @함수명	: fnEnterOnkeyup
          * @input    	: obj:Edit(에디트 오브젝트), e:nexacro.KeyEventInfo(이벤트변수)
          * @desc     	: 검색조건에서 ENTER(keycode::13) 입력시 이벤트를 발생시킨다. 
          */
        this.fnEnterOnkeyup = function(obj,e)
        {
        	this.edtId.updateToDataset();
        	this.edtPwd.updateToDataset();
        	if(e.keycode == "13"){
        			this.fnSearch();
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.edtId.addEventHandler("onkeydown", this.fnEnterOnkeyup, this);
            this.edtPwd.addEventHandler("onkeydown", this.fnEnterOnkeyup, this);
            this.btnLogin.addEventHandler("onclick", this.fnSearch, this);

        };

        this.loadIncludeScript("SPtnrChargeRequestPopup.xfdl", true);

       
    };
}
)();
