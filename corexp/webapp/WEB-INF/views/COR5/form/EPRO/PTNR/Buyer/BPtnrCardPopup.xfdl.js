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
                this.set_name("BPtnrCardPopup");
                this.set_titletext("관리카드 팝업");
                this._setFormPosition(0,0,640,600);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCard", this);
            obj._setContents("<ColumnInfo><Column id=\"CRTR_NM\" size=\"256\" type=\"STRING\"/><Column id=\"CRTR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_CHG_DT\" size=\"256\" type=\"STRING\"/><Column id=\"MGMT_MEMO\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_CHGR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CD_MGMT_TYPE_NM\" size=\"256\" type=\"STRING\"/><Column id=\"CD_MGMT_TYPE\" size=\"256\" type=\"STRING\"/><Column id=\"CRT_DT\" size=\"256\" type=\"STRING\"/><Column id=\"TTL\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"MGMT_HSTR_NO\" size=\"256\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"LANG_CD\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdSR30", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("staViewCompTitle00", "absolute", "5", "5", "87", "24", null, null, this);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("0");
            obj.set_text("관리카드");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addCard", "absolute", null, "5", "70", "24", "10", null, this);
            obj.set_cssclass("btn_WF_Custom");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("추가버튼");
            obj.set_taborder("1");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "5", "34", null, "29", "10", null, this);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("sta_Ttl", "absolute", "5", "34", "171", "29", null, null, this);
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("lbcd").set("");
            obj.style.set_linespace("3");
            obj.style.set_background("#f6f7f9ff URL('theme://images/sta_WF_Label_P1.png') left middle");
            obj.style.set_border("1 solid #ced0d7ff,1 solid #e6e6e6ff");
            obj.style.set_padding("1 0 0 17");
            obj.set_taborder("3");
            obj.set_text("제목");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bizNo", "absolute", "28.28%", "38", null, "21", "2.97%", null, this);
            obj.set_autoselect("true");
            obj.set_cssclass("edt_defalut");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.getSetter("objNm").set("관리카드 제목");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "5", "129", null, "243", "10", null, this);
            obj.set_lengthunit("ascii");
            obj.set_maxlength("1000");
            obj.getSetter("objNm").set("관리카드 내용");
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Div("divFile", "absolute", "5", "383", null, null, "10", "20", this);
            obj.set_taborder("12");
            obj.set_url("CCOMP::CompNFileUpDown.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "5", "62", null, "29", "10", null, this);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Static("sta_CrtrNm", "absolute", "5", "62", null, "29", "72.5%", null, this);
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("작성자");
            obj.style.set_background("#f6f7f9ff URL('theme://images/sta_WF_Label_P1.png') left middle");
            obj.style.set_border("1 solid #ced0d7ff,1 solid #e6e6e6ff");
            obj.style.set_padding("1 0 0 17");
            obj.set_taborder("14");
            obj.set_text("관리유형");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_cdBdgtType", "absolute", "180", "66", "129", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_codecolumn("CD_ID");
            obj.set_cssclass("cbo_default");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_innerdataset("@dsCdSR30");
            obj.getSetter("objNm").set("관리유형");
            obj.set_taborder("15");

            obj = new Static("Static02", "absolute", "5", "90", null, "29", "10", null, this);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cdPrStts01", "absolute", "49.22%", "90", null, "29", "24.06%", null, this);
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("lbcd").set("");
            obj.style.set_background("#f6f7f9ff left middle");
            obj.style.set_border("1 solid #ced0d7ff,1 solid #e6e6e6ff");
            obj.style.set_padding("1 0 0 17");
            obj.set_taborder("17");
            obj.set_text("작성일자");
            this.addChild(obj.name, obj);

            obj = new Calendar("calCrtDt", "absolute", "76.72%", "94", null, "21", "3.13%", null, this);
            this.addChild(obj.name, obj);
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_locale("en_US");
            obj.getSetter("objNm").set("관리카드 작성일자");
            obj.set_readonly("true");
            obj.set_taborder("18");

            obj = new Edit("edCrtrNm", "absolute", "28.28%", "94", null, "21", "51.56%", null, this);
            obj.getSetter("objNm").set("관리카드 작성자명");
            obj.set_readonly("true");
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cdPrStts00", "absolute", "5", "90", null, "29", "72.5%", null, this);
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("lbcd").set("");
            obj.style.set_background("#f6f7f9ff left middle");
            obj.style.set_border("1 solid #ced0d7ff,1 solid #e6e6e6ff");
            obj.style.set_padding("1 0 0 17");
            obj.set_taborder("20");
            obj.set_text("작성자");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 640, 600, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("관리카드 팝업");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edt_bizNo","value","dsCard","TTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","TextArea00","value","dsCard","MGMT_MEMO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btn_addCardLangBind201711031718431693","btn_addCard","text","gdsLabel","EPRO_LABEL_00523");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","cbo_cdBdgtType","value","dsCard","CD_MGMT_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","calCrtDt","value","dsCard","CRT_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edCrtrNm","value","dsCard","CRTR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompNFileUpDown.xfdl");
        };
        
        // User Script
        this.registerScript("BPtnrCardPopup.xfdl", function(exports) {
        /**
         * @파일명       	: BRfqCtrPopup.xfdl
         * @생성자       	: 김승일
         * @생성일자     	: 2017. 11. 09.
         * @설명			: 관리카드 추가 팝업
         * @최종수정자		: 
         * @최종수정일자	: 
        */ 

        this.popTitle = gfnMultiLabel("EPRO_LABEL_00844");
        var mgmtHstrNo = "";//관리이력번호

        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {
        	var param = [
        					 {code:"SR30", sSelectType:"S"} //상태
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
        	//그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기
        	//gfnSetGrdFunc(this.grd_list, this.divPaging, this);
        	
        	var ownFrame = this.getOwnerFrame();
        	this.dsCard.addRow();
        	
        	mgmtHstrNo = ownFrame.agv_id;
        	
        	this.cbo_cdBdgtType.set_index(0);
        	
        	gfnMakeFileDs(this);
        	if(!gfnIsNull(mgmtHstrNo)){
        		this.dsCard.setColumn(0,"MGMT_HSTR_NO",mgmtHstrNo);
        		this.dsCard.setColumn(0,"PTNR_ID",ownFrame.agv_ptnr);
        		
        		this.edt_bizNo.set_readonly(true);
        		this.cbo_cdBdgtType.set_readonly(true);
        		this.TextArea00.set_readonly(true);
        		this.btn_addCard.set_visible(false);
        			
        		this.fnSearch();
        		
        	}else{
        		
        		this.dsCard.setColumn(0,"CRTR_ID",application.gdsUserInfo.getColumn(0,"USER_ID"));
        		this.dsCard.setColumn(0,"CRTR_NM",application.gdsUserInfo.getColumn(0,"USER_NM"));
        		this.dsCard.setColumn(0,"PTNR_ID",ownFrame.agv_ptnr);
        		this.dsCard.setColumn(0,"CD_MGMT_TYPE","");
        		this.dsCard.setColumn(0,"CRT_DT", gfnToday());
        		
        		this.dsCdSR30.filter("CD_ID!='SR30SYS'");
        		
        		this.fnFile("N");
        	}
        }

        this.fnFile = function(mode)
        {
        	var sTableNm = "MM_PTNR_MGMT";
        	var arrFileKey = [this.dsCard.getColumn(0, "MGMT_HSTR_NO"), this.dsCard.getColumn(0, "PTNR_ID")];
        	this.divFile.fnFileInit(this, sTableNm, this.dsCard, arrFileKey, mode);
        }

        
         
        /**
          * @함수명	: fnPreSearch
          * @desc     	: 조회 전 처리
          */
        this.fnPreSearch = function()
        {
        	return true;
        }

        /**
          * @함수명	: fnSearch
          * @desc     	: 조회 프로세스
          */
        this.fnSearch = function()
        {
        	if(!this.fnPreSearch()) return false;

        	var sSvcID = "readMgmtCard";
        	var sController = "epro.ptnr.service.BPtnrService.readMgmtCard";
        	var sInDatasets = "dsCard=dsCard";
        	var sOutDatasets = "dsCard=dsCard";
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
        		case "savePtnrMgmt" :
        			gfnAlert(strErrMsg);
        			this.parent.close(this.dsCard.saveXML());
        		break;
        		
        		case "readMgmtCard" :
        			this.fnFile("Y");
        			if("SR30SYS" == this.dsCard.getColumn(0, "CD_MGMT_TYPE")) {
        				this.dsCdSR30.filter("");
        			} else {
        				this.dsCdSR30.filter("CD_ID!='SR30SYS'");
        			}
        		break;
         
        		default:
        		break;		
        	}
        }
           

        /**
          * @함수명	: fnBtnAddCardClick
          * @desc   : 관리카드 저장
          */
        this.fnBtnAddCardClick = function(obj,e)
        {
        	var arr = [];
        	if(gfnIsNull(this.dsCard.getColumn(0,"TTL"))){
        		var msg = gfnMultiLabel("EPRO_LABEL_00831"); //"코드그룹을 입력 해 주세요.";
        		var type = gfnMultiLabel("EPRO_LABEL_00753"); //"필수";
        		var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        		arr.push(objParam);
        	} 
        	if(gfnIsNull(this.dsCard.getColumn(0,"CD_MGMT_TYPE"))){
        		var msg = gfnMultiLabel("EPRO_LABEL_00830");
        		var type = gfnMultiLabel("EPRO_LABEL_00753"); //"필수";
        		var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        		arr.push(objParam);
        	} 
        	if(gfnIsNull(this.dsCard.getColumn(0,"MGMT_MEMO"))){
        		var msg = gfnMultiLabel("EPRO_LABEL_00832");
        		var type = gfnMultiLabel("EPRO_LABEL_00753"); //"필수";
        		var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        		arr.push(objParam);
        	}
        	
        	if(!gfnValidate(this, false, arr)) return;
        	
        	if(!gfnConfirm("EPRO_LABEL_00001")) return;
        	
        	var sSvcID = "savePtnrMgmt";
        	var sController = "epro.ptnr.service.BPtnrService.savePtnrMgmt";
        	var sInDatasets = "dsCard=dsCard";
        	var sOutDatasets = "dsCard=dsCard";
        	var sCallbackFunc = "fnTrCallBack";
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.addEventHandler("onload", this.fnOnLoad, this);
            this.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.btn_addCard.addEventHandler("onclick", this.fnBtnAddCardClick, this);

        };

        this.loadIncludeScript("BPtnrCardPopup.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
