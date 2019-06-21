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
                this.set_titletext("사업자번호 조회");
                this._setFormPosition(0,0,442,66);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPtnr", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"BIZ_NO\" size=\"256\" type=\"STRING\"/><Column id=\"CD_PTNR_STTS\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_ID\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPtnrChk", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"BIZ_NO\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static02", "absolute", "0", "0", "259", "36", null, null, this);
            obj.set_cssclass("sta_POP_PopTitle");
            obj.set_taborder("3");
            obj.set_text("사업자번호 조회");
            this.addChild(obj.name, obj);

            obj = new Static("staViewCompCond00", "absolute", "10", "15", null, "45", "10", null, this);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("staBizNo", "absolute", "16", "24", "156", "24", null, null, this);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_taborder("9");
            obj.set_text("사업자번호");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medBizNo", "absolute", "164", "24", "119", "24", null, null, this);
            obj.set_mask("###-##-#####");
            obj.set_maskchar("_");
            obj.set_taborder("13");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Button("btnCnfrm", "absolute", null, "24", "91", "24", "15", null, this);
            obj.getSetter("objNm").set("적용");
            obj.set_taborder("14");
            obj.set_text("적용");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 442, 66, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("POP_Setting");
            		p.set_cssclass("frm_POP_Search");
            		p.set_titletext("사업자번호 조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","medBizNo","value","dsPtnr","BIZ_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("SPtnrBizNoSrchPopup.xfdl", function(exports) {
        /**
         * @파일명       	: SBizNoSrchPopup.xfdl
         * @생성자       	: 한의봉
         * @생성일자     	: 2017.09.06.
         * @설명			: 사업자번호 조회
         * @최종수정자		: 안성민
         * @최종수정일자	: 2017.11.24.
        */  

        
        var bizNo = "";
        this.popTitle = gfnMultiLabel("EPRO_LABEL_00149");
        /**
          * @함수명	: fnFormOninit
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.InitEventInfo(이벤트변수)
          * @desc     	: 폼 oninit이벤트
          */
        this.fnFormOninit = function(obj,e)
        {
        }

        /**
          * @함수명	: fnFormOnload
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.LoadEventInfo(이벤트변수)
          * @desc     	: 폼 onload이벤트
          */
        this.fnFormOnload = function(obj,e)
        {
        	this.dsPtnr.setColumn(0, "PTNR_ID", "");
        	this.parent.btnClose.clearEventHandler("onclick");
        	this.parent.btnClose.addEventHandler("onclick",this.fnTmpClose,this);
        }

        this.fnTmpClose = function()
        {
        	if(!gfnConfirm("EPRO_LABEL_01054")) return;
        	this.parent.close();
        }

        /**
        	@function	fnChkBizNo()
        	@desc   	사업자번호 양식 조회
        */
        this.fnChkBizNo = function()
        {
        	var bizNo = this.dsPtnr.getColumn(0,"BIZ_NO");
        	
        	var check = 0;
        	var no = new Array(10);
        	var sum = 0;
        	var tmpNo = 0;
        	var tmpStr = 0;
        	
        	for(var i=0; i<10; i++) no[i] = parseInt(bizNo.charAt(i),10); // 1~10까지 숫자 얻기
        	
        	for(var i=0; i<10; i++) {
        		if((i%3)==0)          tmpNo = no[i] + 0;
        		else if ( (i%3) == 1) tmpNo = no[i] * 3;
        		else if ( (i%3) == 2) tmpNo = no[i] * 7;

        		if(i==8) {
        			tmpNo = no[i] * 5;
        			if(tmpNo > 9) {
        				tmpStr = tmpNo + "";
        				tmpNo = parseInt(tmpStr.charAt(0),10) + parseInt(tmpStr.charAt(1),10);
        			}
        		}
        		sum += tmpNo;
        	}
        	if( (sum % 10) == 0) return true; // 정확
        	else                 return false; // 부정확
        }
         
        /**
        	@fnCnfrm	fnSearch()
        	@desc   	사업자번호 조회
        */     
        this.fnCnfrm = function()
        {
        	if(gfnIsNull(this.dsPtnr.getColumn(0,"BIZ_NO"))){ //사업자번호 입력
        		gfnAlert("EPRO_LABEL_01120");
        		return;
        	 }
        	 
        	if(!this.fnChkBizNo()){ //사업자번호 유효성검사
        		gfnAlert("EPRO_LABEL_01121");
        		return;
        	}
        	
        	this.dsPtnrChk.copyData(this.dsPtnr);
        	
        	var sSvcID = "checkPtnrBizNo";
        	var sController = "epro.ptnr.service.SPtnrService.checkPtnrBizNo";
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
        		case "checkPtnrBizNo" :
        			if(this.dsPtnrChk.getRowCount()>0){
        				if(this.dsPtnrChk.getColumn(0,"CD_PTNR_STTS") == "SR10NCLO"){ //등록완료
        					gfnAlert("EPRO_LABEL_01114");
        				} else if(this.dsPtnrChk.getColumn(0,"CD_PTNR_STTS") == "SR10WRI"){ //작성중
        					gfnAlert("EPRO_LABEL_01115")
        					return;
        				} else if(this.dsPtnrChk.getColumn(0,"CD_PTNR_STTS") == "SR10NREQ"){ //등록요청
        					gfnAlert("EPRO_LABEL_01116")
        					return;
        				} else if(this.dsPtnrChk.getColumn(0,"CD_PTNR_STTS") == "SR10NREJ"){ //등록거부
        					gfnAlert("EPRO_LABEL_01117");
        					return;
        				} else if(this.dsPtnrChk.getColumn(0,"CD_PTNR_STTS") == "SR10NWAT"){ //등록보류
        					gfnAlert("EPRO_LABEL_01119");
        					return;
        				}				 
        			} else {
        				if(!gfnConfirm("EPRO_LABEL_01118")){ //신규업체
        					return;
        				}else{
        					this.dsPtnr.setColumn(0,"BIZ_NO", this.dsPtnr.getColumn(0,"BIZ_NO"));
        					this.dsPtnr.setColumn(0,"PTNR_ID", this.dsPtnrChk.getColumn(0,"PTNR_ID"));
        					this.parent.close(this.dsPtnr.saveXML());
        				}
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
        	if(e.keycode == "13"){
        		if(obj.name == "medBizNo"){
        			this.fnCnfrm();
        		}
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.medBizNo.addEventHandler("onkeyup", this.fnEnterOnkeyup, this);
            this.btnCnfrm.addEventHandler("onclick", this.fnCnfrm, this);

        };

        this.loadIncludeScript("SPtnrBizNoSrchPopup.xfdl", true);

       
    };
}
)();
