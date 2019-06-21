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
                this.set_name("BPtnrInfoPopup");
                this.set_titletext("협력사정보팝업");
                this._setFormPosition(0,0,550,428);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPtnrInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_ID\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPtnrUser", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPtnrEval", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTarget", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Tab("tabPtnr", "absolute", "10", "7", null, "412", "10", null, this);
            obj.set_scrollbars("autoboth");
            obj.set_tabindex("0");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabInfo", this.tabPtnr);
            obj.set_scrollbars("none");
            obj.set_text("기본정보");
            this.tabPtnr.addChild(obj.name, obj);
            obj = new Static("staViewCompCond01", "absolute", "-1", "38", null, "34", "-1", null, this.tabPtnr.tabInfo);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("41");
            this.tabPtnr.tabInfo.addChild(obj.name, obj);
            obj = new Static("staBizNo", "absolute", "-1", "38", "108", "34", null, null, this.tabPtnr.tabInfo);
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("1 0 0 17");
            obj.style.set_align("left middle");
            obj.set_taborder("42");
            obj.set_text("사업자번호");
            this.tabPtnr.tabInfo.addChild(obj.name, obj);
            obj = new Edit("edtBizNo", "absolute", "114", "43", null, "24", "6", null, this.tabPtnr.tabInfo);
            obj.set_readonly("true");
            obj.set_taborder("43");
            this.tabPtnr.tabInfo.addChild(obj.name, obj);
            obj = new Static("staViewCompCond02", "absolute", "-1", "71", null, null, "-1", "276", this.tabPtnr.tabInfo);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("44");
            this.tabPtnr.tabInfo.addChild(obj.name, obj);
            obj = new Static("staPtnrNm", "absolute", "-1", "71", "108", "34", null, null, this.tabPtnr.tabInfo);
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("1 0 0 17");
            obj.style.set_align("left middle");
            obj.set_taborder("45");
            obj.set_text("협력사명");
            this.tabPtnr.tabInfo.addChild(obj.name, obj);
            obj = new Edit("edtPtnrNm", "absolute", "114", "76", null, "24", "6", null, this.tabPtnr.tabInfo);
            obj.set_readonly("true");
            obj.set_taborder("46");
            this.tabPtnr.tabInfo.addChild(obj.name, obj);
            obj = new Static("staViewCompCond03", "absolute", "-1", "104", null, null, "-1", "243", this.tabPtnr.tabInfo);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("47");
            this.tabPtnr.tabInfo.addChild(obj.name, obj);
            obj = new Static("staCndtnNType", "absolute", "-1", "104", "108", "34", null, null, this.tabPtnr.tabInfo);
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("1 0 0 17");
            obj.style.set_align("left middle");
            obj.set_taborder("48");
            obj.set_text("업태/업종");
            this.tabPtnr.tabInfo.addChild(obj.name, obj);
            obj = new Edit("edtBizCndtn", "absolute", "114", "109", "160", "24", null, null, this.tabPtnr.tabInfo);
            obj.set_readonly("true");
            obj.set_taborder("49");
            this.tabPtnr.tabInfo.addChild(obj.name, obj);
            obj = new Edit("edtType", "absolute", "279", "109", null, "24", "6", null, this.tabPtnr.tabInfo);
            obj.set_readonly("true");
            obj.set_taborder("50");
            this.tabPtnr.tabInfo.addChild(obj.name, obj);
            obj = new Static("staViewCompCond04", "absolute", "-1", "137", null, null, "-1", "210", this.tabPtnr.tabInfo);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("51");
            this.tabPtnr.tabInfo.addChild(obj.name, obj);
            obj = new Static("staTel", "absolute", "-1", "137", "108", "34", null, null, this.tabPtnr.tabInfo);
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("1 0 0 17");
            obj.style.set_align("left middle");
            obj.set_taborder("52");
            obj.set_text("대표전화번호");
            this.tabPtnr.tabInfo.addChild(obj.name, obj);
            obj = new Edit("edtTel", "absolute", "114", "142", null, "24", "6", null, this.tabPtnr.tabInfo);
            obj.set_readonly("true");
            obj.set_taborder("53");
            this.tabPtnr.tabInfo.addChild(obj.name, obj);
            obj = new Static("staViewCompCond05", "absolute", "-1", "170", null, null, "-1", "177", this.tabPtnr.tabInfo);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("54");
            this.tabPtnr.tabInfo.addChild(obj.name, obj);
            obj = new Static("staFax", "absolute", "-1", "170", "108", "34", null, null, this.tabPtnr.tabInfo);
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("1 0 0 17");
            obj.style.set_align("left middle");
            obj.set_taborder("55");
            obj.set_text("FAX");
            this.tabPtnr.tabInfo.addChild(obj.name, obj);
            obj = new Edit("edtFax", "absolute", "114", "175", null, "24", "6", null, this.tabPtnr.tabInfo);
            obj.set_readonly("true");
            obj.set_taborder("56");
            this.tabPtnr.tabInfo.addChild(obj.name, obj);
            obj = new Static("staViewCompCond06", "absolute", "-1", "203", null, null, "-1", "144", this.tabPtnr.tabInfo);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("57");
            this.tabPtnr.tabInfo.addChild(obj.name, obj);
            obj = new Static("staFax00", "absolute", "-1", "203", "108", "34", null, null, this.tabPtnr.tabInfo);
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("1 0 0 17");
            obj.style.set_align("left middle");
            obj.set_taborder("58");
            obj.set_text("평가자");
            this.tabPtnr.tabInfo.addChild(obj.name, obj);
            obj = new Edit("edtBizCndtn00", "absolute", "114", "208", "159", "24", null, null, this.tabPtnr.tabInfo);
            obj.set_readonly("true");
            obj.set_taborder("59");
            this.tabPtnr.tabInfo.addChild(obj.name, obj);
            obj = new Static("staCmpltDt", "absolute", "279", "203", "94", "34", null, null, this.tabPtnr.tabInfo);
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("1 0 0 17");
            obj.style.set_align("left middle");
            obj.set_taborder("60");
            obj.set_text("최종평가일시");
            this.tabPtnr.tabInfo.addChild(obj.name, obj);
            obj = new Div("divEvalScore", "absolute", "-1", "280", null, null, "-1", "0", this.tabPtnr.tabInfo);
            obj.set_taborder("68");
            this.tabPtnr.tabInfo.addChild(obj.name, obj);
            obj = new Grid("grdEvalScore", "absolute", "0", "0", null, null, "0", "0", this.tabPtnr.tabInfo.divEvalScore);
            obj.set_autofittype("col");
            obj.set_binddataset("dsPtnrEval");
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"90\"/><Column size=\"82\"/><Column size=\"73\"/><Column size=\"150\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"품질\"/><Cell col=\"1\" expr=\"\" text=\"원가절감\"/><Cell col=\"2\" expr=\"\" text=\"기술력\"/><Cell col=\"3\" expr=\"\" text=\"납기관리\"/><Cell col=\"4\" expr=\"\" text=\"경영/재무\"/></Band><Band id=\"body\"><Cell text=\"bind:RT_Q\"/><Cell col=\"1\" text=\"bind:RT_C\"/><Cell col=\"2\" text=\"bind:RT_T\"/><Cell col=\"3\" text=\"bind:RT_D\"/><Cell col=\"4\" text=\"bind:RT_F\"/></Band></Format></Formats>");
            this.tabPtnr.tabInfo.divEvalScore.addChild(obj.name, obj);
            obj = new Calendar("calCmpltDt", "absolute", "378", "208", null, "24", "6", null, this.tabPtnr.tabInfo);
            this.tabPtnr.tabInfo.addChild(obj.name, obj);
            obj.set_locale("en_US");
            obj.set_readonly("true");
            obj.set_taborder("69");
            obj = new Static("staViewCompCond00", "absolute", "-1", "5", null, "34", "-1", null, this.tabPtnr.tabInfo);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("70");
            this.tabPtnr.tabInfo.addChild(obj.name, obj);
            obj = new Static("staVENDOR", "absolute", "-1", "5", "108", "34", null, null, this.tabPtnr.tabInfo);
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("1 0 0 17");
            obj.style.set_align("left middle");
            obj.set_taborder("71");
            obj.set_text("VENDOR");
            this.tabPtnr.tabInfo.addChild(obj.name, obj);
            obj = new Edit("edtBizNo00", "absolute", "114", "10", null, "24", "6", null, this.tabPtnr.tabInfo);
            obj.set_readonly("true");
            obj.set_taborder("72");
            this.tabPtnr.tabInfo.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", null, "255", "78", "24", "451", null, this.tabPtnr.tabInfo);
            obj.style.set_align("left middle");
            obj.set_taborder("73");
            obj.set_text("평가점수:");
            this.tabPtnr.tabInfo.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", null, "255", "35", "24", "416", null, this.tabPtnr.tabInfo);
            obj.style.set_align("right middle");
            obj.set_taborder("74");
            this.tabPtnr.tabInfo.addChild(obj.name, obj);
            obj = new Static("staScore", "absolute", null, "255", "146", "24", "257", null, this.tabPtnr.tabInfo);
            obj.style.set_align("left middle");
            obj.set_taborder("75");
            obj.set_text("점");
            this.tabPtnr.tabInfo.addChild(obj.name, obj);
            obj = new Tabpage("tabUserInfo", this.tabPtnr);
            obj.set_text("사용자정보");
            this.tabPtnr.addChild(obj.name, obj);
            obj = new Edit("edtSms", "absolute", "10", "320", null, "24", "10", null, this.tabPtnr.tabUserInfo);
            obj.set_taborder("8");
            this.tabPtnr.tabUserInfo.addChild(obj.name, obj);
            obj = new Button("btnSms", "absolute", null, "288", "80", "24", "10", null, this.tabPtnr.tabUserInfo);
            obj.set_taborder("10");
            obj.set_text("SMS전송");
            this.tabPtnr.tabUserInfo.addChild(obj.name, obj);
            obj = new Div("divUserInfo", "absolute", "0", "10", null, "269", "0", null, this.tabPtnr.tabUserInfo);
            obj.set_taborder("12");
            this.tabPtnr.tabUserInfo.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "0", null, "269", "0", null, this.tabPtnr.tabUserInfo.divUserInfo);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsPtnrUser");
            obj.set_cellclickbound("cell");
            obj.getSetter("f_colSize").set("N");
            obj.getSetter("f_excel").set("Y");
            obj.getSetter("f_filter").set("N");
            obj.getSetter("f_find").set("N");
            obj.getSetter("f_fix").set("Y");
            obj.getSetter("f_height").set("N");
            obj.getSetter("f_hide").set("N");
            obj.getSetter("f_init").set("Y");
            obj.getSetter("f_mode").set("N");
            obj.getSetter("f_save").set("N");
            obj.getSetter("f_sort").set("Y");
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" expr=\"\" text=\"사용자ID\"/><Cell col=\"2\" expr=\"\" text=\"사용자명\"/><Cell col=\"3\" expr=\"\" text=\"EMAIL\"/><Cell col=\"4\" expr=\"\" text=\"HP\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:USER_ID\"/><Cell col=\"2\" style=\"align:center;\" text=\"bind:USER_NM\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:EMAIL\"/><Cell col=\"4\" style=\"align:center;\" text=\"bind:HP\"/></Band></Format></Formats>");
            this.tabPtnr.tabUserInfo.divUserInfo.addChild(obj.name, obj);
            obj = new Static("stsSmsInfo", "absolute", "10", "288", null, "24", "395", null, this.tabPtnr.tabUserInfo);
            obj.set_taborder("13");
            obj.set_text("최대 30자(90Byte)");
            this.tabPtnr.tabUserInfo.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", null, "288", "63", "24", "94", null, this.tabPtnr.tabUserInfo);
            obj.set_taborder("14");
            obj.set_text("/ 90 (Byte)");
            this.tabPtnr.tabUserInfo.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", null, "288", "59", "24", "162", null, this.tabPtnr.tabUserInfo);
            obj.style.set_align("right");
            obj.set_taborder("15");
            obj.set_text("0");
            this.tabPtnr.tabUserInfo.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tabPtnr.tabInfo.divEvalScore,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("68");

            	}
            );
            this.tabPtnr.tabInfo.divEvalScore.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tabPtnr.tabInfo,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_text("기본정보");

            	}
            );
            this.tabPtnr.tabInfo.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 269, this.tabPtnr.tabUserInfo.divUserInfo,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("12");

            	}
            );
            this.tabPtnr.tabUserInfo.divUserInfo.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tabPtnr.tabUserInfo,
            	//-- Layout function
            	function(p) {
            		p.set_text("사용자정보");

            	}
            );
            this.tabPtnr.tabUserInfo.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 550, 428, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("협력사정보팝업");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","tabPtnr.tabInfo.edtBizNo","value","dsPtnrInfo","BIZ_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","tabPtnr.tabInfo.edtPtnrNm","value","dsPtnrInfo","PTNR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","tabPtnr.tabInfo.edtBizCndtn","value","dsPtnrInfo","BIZ_CNDTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","tabPtnr.tabInfo.edtType","value","dsPtnrInfo","BIZ_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","tabPtnr.tabInfo.edtTel","value","dsPtnrInfo","TEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","tabPtnr.tabInfo.edtFax","value","dsPtnrInfo","FAX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","tabPtnr.tabInfo.edtBizCndtn00","value","dsPtnrInfo","SCJD_CMPLT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","tabPtnr.tabInfo.calCmpltDt","value","dsPtnrInfo","SCJD_CMPLT_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","tabPtnr.tabInfo.edtBizNo00","value","dsPtnrInfo","SAP_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("BPtnrInfoPopup.xfdl", function(exports) {
        /**
         * @파일명       	: BUserInfoPopup.xfdl
         * @생성자       	: 송태봉
         * @생성일자     	: 2017. 9. 13.
         * @설명			    : 사용자정보 팝업
         * @최종수정자		: 안성민
         * @최종수정일자	    : 2017. 12. 07.
        */

        this.popTitle = "협력사정보"
         
        /**
          * @함수명	: fnOnLoad
          * @desc   : 폼 onload이벤트
          */ 
        this.fnOnLoad = function(obj,e)
        {
        	gfnSetGrdFunc(this.tabPtnr.tabUserInfo.divUserInfo.grdList, null, this);

        	var ownFrame = this.getOwnerFrame();
        	
        	this.dsPtnrInfo.setColumn(0,"BRANCH_CD",application.gdsUserInfo.getColumn(0,"BRANCH_CD"));
        	this.dsPtnrInfo.setColumn(0,"PTNR_ID",ownFrame.agv_id);
        	
        	this.fnSearch();
        }

        this.fnSearch = function()
        {
        	var sSvcID = "readComPtnrInfo";
        	var sController = "epro.com.service.BComService.readComPtnrInfo";
        	var sInDatasets = "dsPtnrInfo=dsPtnrInfo";
        	var sOutDatasets = "dsPtnrInfo=dsPtnrInfo dsPtnrUser=dsPtnrUser dsPtnrEval=dsPtnrEval";
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
        		case "searchComUser" :	
        		break;
         
        		case "sendComSms" :
        			gfnAlert(strErrMsg);
        			
        		break;
        		case "readComPtnrInfo":
        			if(gfnIsNull(this.dsPtnrInfo.getColumn(0, "SCJD_EVAL_SCORE"))){
        				//this.tabPtnr.tabInfo.staScore.set_text(gfnMultiLabel("EPRO_LABEL_01360"));
        			}
        		break;
        		default:
        		break;	
        	}
        }

        /**
          * @함수명	: dsPreSendSms
          * @desc     	: SMS전송 전처리
          */
        this.dsPreSendSms = function()
        {
        	if(!gfnGetChkRowString(this.dsPtnrUser)) return false;
        	if(gfnIsNull(this.tabPtnr.tabUserInfo.edtSms.value)) {
        		gfnAlert("EPRO_LABEL_00832");
        		return false;
        	}
        	this.dsTarget.loadXML(gfnGetChkRowString(this.dsPtnrUser))
        	
        	//SMS사용여부 확인
        	var arr = [];
        	
        	if(this.tabPtnr.tabUserInfo.edtSms.getLength("utf8") > 90){
        		var msg = gfnMultiLabel("EPRO_LABEL_01336");
        		var type = gfnMultiLabel("EPRO_LABEL_00753");
        		var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        		arr.push(objParam);
        	}
        	
        	for(var i =0; i<this.dsTarget.getRowCount(); i++) {
        		if("N" == this.dsTarget.getColumn(i, "ALT_SMS_RCV")) {
        			var msg = gfnMultiLabel("EPRO_LABEL_01282");
        			var type = gfnMultiLabel("EPRO_LABEL_01283");
        			var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        			arr.push(objParam);
        		} else {
        			this.dsTarget.setColumn(i, "CNTNT", this.tabPtnr.tabUserInfo.edtSms.value);
        		}
        	} 	
         	return gfnValidate(this, false, arr);
        }

        /**
          * @함수명	: fnSendSms
          * @desc     	: SMS전송
          */
        this.fnSendSms = function(obj,e)
        {
        	if(!this.dsPreSendSms()) return;
        	if(!gfnConfirm("EPRO_LABEL_01279")) return;
        	
        	var sSvcID = "sendComSms";
        	var sController = "epro.com.service.BComService.sendComSms";
        	var sInDatasets = "dsTarget=dsTarget";
        	var sOutDatasets = "";
        	var sCallbackFunc = "fnTrCallBack";	
        	
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        this.onTextChanged = function(obj,e)
        {
        	this.tabPtnr.tabUserInfo.Static01.set_text(this.tabPtnr.tabUserInfo.edtSms.getLength("utf8"));
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fnOnLoad, this);
            this.tabPtnr.tabUserInfo.edtSms.addEventHandler("onkeyup", this.fnOnkeyup, this);
            this.tabPtnr.tabUserInfo.edtSms.addEventHandler("ontextchanged", this.onTextChanged, this);
            this.tabPtnr.tabUserInfo.btnSms.addEventHandler("onclick", this.fnSendSms, this);
            this.tabPtnr.tabUserInfo.divUserInfo.grdList.addEventHandler("oncelldblclick", this.fnRtnData, this);
            this.tabPtnr.tabUserInfo.divUserInfo.grdList.addEventHandler("onkeydown", this.grdListOnkeydown, this);

        };

        this.loadIncludeScript("BPtnrInfoPopup.xfdl", true);

       
    };
}
)();
