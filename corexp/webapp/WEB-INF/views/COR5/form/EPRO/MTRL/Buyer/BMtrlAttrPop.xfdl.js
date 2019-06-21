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
                this.set_name("BMtrlAttrPop");
                this.set_titletext("품목속성관리팝업");
                this._setFormPosition(0,0,510,150);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsReturn", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CRTR_ID\" size=\"50\" type=\"string\"/><Column id=\"RMARK\" size=\"1500\" type=\"string\"/><Column id=\"ATTR_NM\" size=\"300\" type=\"string\"/><Column id=\"LAST_CHG_DT\" size=\"7\" type=\"string\"/><Column id=\"ALT_USE\" size=\"1\" type=\"string\"/><Column id=\"ATTR_ID\" size=\"20\" type=\"string\"/><Column id=\"LAST_CHGR_ID\" size=\"50\" type=\"string\"/><Column id=\"CRT_DT\" size=\"7\" type=\"string\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMtrlAttr", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CRTR_ID\" size=\"50\" type=\"string\"/><Column id=\"RMARK\" size=\"1500\" type=\"string\"/><Column id=\"ATTR_NM\" size=\"300\" type=\"string\"/><Column id=\"LAST_CHG_DT\" size=\"7\" type=\"string\"/><Column id=\"ALT_USE\" size=\"1\" type=\"string\"/><Column id=\"ATTR_ID\" size=\"20\" type=\"string\"/><Column id=\"LAST_CHGR_ID\" size=\"50\" type=\"string\"/><Column id=\"CRT_DT\" size=\"7\" type=\"string\"/><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("staViewCompCond01", "absolute", "10", "47", null, "65", "20", null, this);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("staViewCompLine01", "absolute", "10", "79", null, "33", "20", null, this);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave", "absolute", null, "9", "65", "24", "20", null, this);
            obj.getSetter("objNm").set("저장");
            obj.set_taborder("2");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Static("staViewCompLine00", "absolute", "10", "47", null, "33", "20", null, this);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("staAttrNm", "absolute", "10", "47", "100", "33", null, null, this);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("TTL_TOT_AMT");
            obj.set_taborder("4");
            obj.set_text("속성");
            obj.set_tooltiptext("대분류");
            this.addChild(obj.name, obj);

            obj = new Static("staRmark", "absolute", "10", "79", "100", "33", null, null, this);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("TTL_TOT_AMT");
            obj.set_taborder("5");
            obj.set_text("비고");
            obj.set_tooltiptext("중분류");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAttrNm", "absolute", "115", "50", "300", "26", null, null, this);
            obj.getSetter("objNm").set("속성");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRmark", "absolute", "115", "82", "300", "26", null, null, this);
            obj.getSetter("objNm").set("비고");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Button("btnDulChk", "absolute", null, "51", "65", "24", "25", null, this);
            obj.getSetter("objNm").set("중복체크");
            obj.set_taborder("10");
            obj.set_text("중복체크");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 510, 150, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("품목속성관리팝업");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edtAttrNm","value","dsMtrlAttr","ATTR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edtRmark","value","dsMtrlAttr","RMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnDulChkLangBind2017110317184218333","btnDulChk","text","gdsLabel","EPRO_LABEL_00213");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("BMtrlAttrPop.xfdl", function(exports) {
        /**
         * @파일명       	: BMtrlAttrPop.xfdl
         * @생성자       	: 정준화
         * @생성일자     	: 2017. 9. 07.
         * @설명			: 품목속성관리 팝업
         * @최종수정자		: 정준화
         * @최종수정일자	: 2017. 9. 07.
        */ 

        /*
         적용 또는 닫기 버튼으로 닫을 때는 
          this.parent.close(리턴문자열); 사용
        */

        
        this.popTitle = "품목속성관리";

        var fv_flag = false;
        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {
        	/*
        		MM_SYS_CD 테이블의 컬럼 참조		
        		code: CD_GRP + CD_CLS 		
        		, sSelectType:[A : --전체--], [B : --선택--]		
        		, sFiltered(코드 필터링): 구분자:CD, CD, CD, CD ......
        									가져올 코드만 표시 방법 - S:WRI, ING, CXL, RTN ......
        									빼고 가져올 코드표시 방법 - D:WRI, ING, CXL, RTN ......
        	*/
        	
        	var param = [
        				];
        	gfnGetCode(this, param);
        }

        /**
          * @함수명	: CSamplePopOninit
          * @desc     	: 폼 oninit이벤트
          */
        this.BMtrlSrcGrpMappPopOninit = function(obj,e)
        {
        	this.fnSetCode();	
        }

        /**
          * @함수명	: CSamplePopOnload
          * @desc     	: 폼 onload이벤트
          */
        this.BMtrlSrcGrpMappPopOnload = function(obj,e)
        {	
        	
        	var ownFrame = this.getOwnerFrame();
        	
        	//부모창으로 부터 전달받은 값을 NULL 이 아니면 검색조건 DataSet에 담는다.
        	if(!gfnIsNull(ownFrame.attr_id)){
        		
        		this.dsMtrlAttr.setColumn(0, "ATTR_ID"	, ownFrame.attr_id);
        		this.dsMtrlAttr.setColumn(0, "ATTR_NM"	, ownFrame.attr_nm);
        		
        		this.edtAttrNm.set_readonly(true);
        		this.btnDulChk.set_visible(false);
        		
        		if(!gfnIsNull(ownFrame.rmark)){		 		
        			this.dsMtrlAttr.setColumn(0, "RMARK"	, ownFrame.rmark);		
        		}
        		
        		fv_flag = true;
        	}

        
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
        		case "checkMtrlAttr" :	
        			if(strErrCd != 0){
        				gfnAlert(strErrMsg);
        				
        			} else{
        				if(0 == this.dsReturn.getColumn(0,"CNT")){
        					gfnAlert("사용가능한 속성명 입니다.");
        					fv_flag = true;
        				} else{
        					this.dsMtrlAttr.setColumn(0,"ATTR_NM","");
        					gfnAlert("속성이 중복 됩니다.");
        					fv_flag = false;
        				}
        			}
        		break;
        		
        		case "saveMtrlAttr" :
        			gfnAlert(strErrMsg);
        			this.parent.close(this.dsMtrlAttr.saveXML());
        		break;	
         
        		default:
        		break;	
        	}
        }

        
        /**
          * @함수명	: btnDulChk_onclick
          * @input    	: obj:Button(버튼 오브젝트), e:nexacro.ClickEventInfo(이벤트변수)
          * @desc     	: 속성 중복체크버튼 클릭 시 이벤트를 발생시킨다. 
          */
        this.btnDulChk_onclick = function(obj,e)
        {
        	if(gfnIsNull(this.dsMtrlAttr.getColumn(0,"ATTR_NM"))){
        		gfnAlert("속성을 입력 해 주세요.");
        		return;
        	}
        	
        	var sSvcID = "checkMtrlAttr";
        	var sController = "epro.mtrl.service.BMtrlService.checkMtrlAttr";
        	var sInDatasets = "dsMtrlAttr=dsMtrlAttr";
        	var sOutDatasets = "dsReturn=dsReturn";
        	var sCallbackFunc = "fnTrCallBack";	
        	
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);		
        	
        }

        /**
          * @함수명	: btnSave_onclick
          * @input    	: obj:Button(버튼 오브젝트), e:nexacro.ClickEventInfo(이벤트변수)
          * @desc     	: 저장버튼 클릭 시 이벤트를 발생시킨다. 
          */
        this.btnSave_onclick = function(obj,e)
        {
        	if(gfnIsNull(this.dsMtrlAttr.getColumn(0,"ATTR_NM"))){
        		gfnAlert("속성을 입력 해 주세요.");
        		return;
        	}
        	
        	if(fv_flag == false){
        		gfnAlert("중복체크를 해 주세요.");
        		return;
        	}
        	
        	if(!gfnConfirm("저장하시겠습니까?")) return;

        	var sSvcID = "saveMtrlAttr";
        	var sController = "epro.mtrl.service.BMtrlService.saveMtrlAttr";
        	var sInDatasets = "dsMtrlAttr=dsMtrlAttr";
        	var sOutDatasets = "";
        	var sCallbackFunc = "fnTrCallBack";	
        	
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);		
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.BMtrlSrcGrpMappPopOninit, this);
            this.addEventHandler("onload", this.BMtrlSrcGrpMappPopOnload, this);
            this.btnSave.addEventHandler("onclick", this.btnSave_onclick, this);
            this.btnDulChk.addEventHandler("onclick", this.btnDulChk_onclick, this);

        };

        this.loadIncludeScript("BMtrlAttrPop.xfdl", true);

       
    };
}
)();
