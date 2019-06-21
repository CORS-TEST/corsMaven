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
                this.set_name("CSampleDetail");
                this.set_titletext("협력사SMS발송");
                this._setFormPosition(0,0,1220,497);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsReturn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPtnrList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHECKED\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_NM\" size=\"256\" type=\"STRING\"/><Column id=\"BIZ_NO\" size=\"256\" type=\"STRING\"/><Column id=\"RPRSTV_NM\" size=\"256\" type=\"STRING\"/><Column id=\"RPTST_TEL\" size=\"256\" type=\"STRING\"/><Column id=\"ADDR\" size=\"256\" type=\"STRING\"/><Column id=\"SMSID\" size=\"256\" type=\"STRING\"/><Column id=\"SAP_VENDOR\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSms", this);
            obj._setContents("<ColumnInfo><Column id=\"SND_CNTNT\" size=\"256\" type=\"STRING\"/><Column id=\"SMSID\" size=\"256\" type=\"STRING\"/><Column id=\"INT_TRSMT_STTS\" size=\"256\" type=\"STRING\"/><Column id=\"SNDR_TEL\" size=\"256\" type=\"STRING\"/><Column id=\"RCVR_TEL\" size=\"256\" type=\"STRING\"/><Column id=\"TRSMT_ERR\" size=\"256\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"CRTR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CRT_DT\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_CHGR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_CHG_DT\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_ID\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompTitle00", "absolute", "0", "0", null, "24", "0", null, this);
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            obj.set_positionstep("0");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "0", "255", "24", null, null, this.divViewCompTitle00);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("21");
            obj.set_text("업체SMS발송");
            this.divViewCompTitle00.addChild(obj.name, obj);
            obj = new Button("btnSend", "absolute", null, "0", "51", "24", "10", null, this.divViewCompTitle00);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("발송버튼");
            obj.set_taborder("22");
            obj.set_text("발송");
            this.divViewCompTitle00.addChild(obj.name, obj);

            obj = new Div("divViewCompBody00", "absolute", "0", "30", null, "121", "10", null, this);
            obj.set_cssclass("div_WF_DetailBg");
            obj.getSetter("objNm").set("DIV-평가서 상세");
            obj.set_positionstep("0");
            obj.set_taborder("101");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "0", null, null, "0", "0", this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("30");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staTtl", "absolute", "0", "1", "171", null, null, "0", this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.set_taborder("32");
            obj.set_text("발송내용");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new TextArea("TextArea00", "absolute", "176", "5", "897", null, null, "5", this.divViewCompBody00);
            obj.set_lengthunit("ascii");
            obj.getSetter("objNm").set("SMS내용");
            obj.set_taborder("33");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("sta_inputByte2", "absolute", "92.23%", "94", null, "20", "1.82%", null, this.divViewCompBody00);
            obj.getSetter("objNm").set("SMS글자수");
            obj.style.set_align("center middle");
            obj.set_taborder("34");
            obj.set_text(" / 90 bytes");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("sta_inputByte", "absolute", "91.4%", "94", null, "20", "6.69%", null, this.divViewCompBody00);
            obj.set_taborder("35");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Div("divViewCompTitle05", "absolute", "0", "171", null, "24", "10", null, this);
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            obj.set_taborder("113");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle01", "absolute", "0", "0", "255", "24", null, null, this.divViewCompTitle05);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("0");
            obj.set_text("대상업체");
            this.divViewCompTitle05.addChild(obj.name, obj);
            obj = new Button("btnEvalTmpl", "absolute", null, "0", "90", "24", "56", null, this.divViewCompTitle05);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("협력사추가버튼");
            obj.set_positionstep("1");
            obj.set_taborder("1");
            obj.set_text("협력사추가");
            this.divViewCompTitle05.addChild(obj.name, obj);
            obj = new Button("btnEvalTmpl00", "absolute", null, "0", "51", "24", "0", null, this.divViewCompTitle05);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("협력사 삭제버튼");
            obj.set_positionstep("1");
            obj.set_taborder("2");
            obj.set_text("삭제");
            this.divViewCompTitle05.addChild(obj.name, obj);

            obj = new Div("divViewCompBody05", "absolute", "0", "200", null, "287", "10", null, this);
            obj.getSetter("objNm").set("DIV-평가서 상세");
            obj.set_taborder("114");
            this.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "0", "0", null, null, "0", "0", this.divViewCompBody05);
            obj.set_autofittype("col");
            obj.set_binddataset("dsPtnrList");
            obj.getSetter("objNm").set("협력사 grid");
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"37\"/><Column size=\"100\"/><Column size=\"300\"/><Column size=\"182\"/><Column size=\"279\"/><Column size=\"300\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" expr=\"\" text=\"VENDOR\"/><Cell col=\"2\" expr=\"\" text=\"협력사명\" tooltiptext=\"\"/><Cell col=\"3\" expr=\"\" text=\"사업자번호\" tooltiptext=\"\"/><Cell col=\"4\" expr=\"\" text=\"대표사용자명\" tooltiptext=\"\"/><Cell col=\"5\" expr=\"\" text=\"주소\" tooltiptext=\"\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\"/><Cell col=\"1\" text=\"bind:SAP_VENDOR\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:PTNR_NM\" tooltiptext=\"bind:PTNR_NM\"/><Cell col=\"3\" text=\"bind:BIZ_NO\" tooltiptext=\"bind:BIZ_NO\"/><Cell col=\"4\" text=\"bind:RPRSTV_NM\" tooltiptext=\"bind:RPRSTV_NM\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:ADDR\" tooltiptext=\"bind:ADDR\"/></Band></Format></Formats>");
            this.divViewCompBody05.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompTitle00,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 타이틀");
            		p.set_positionstep("0");
            		p.set_taborder("1");

            	}
            );
            this.divViewCompTitle00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 121, this.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.set_cssclass("div_WF_DetailBg");
            		p.getSetter("objNm").set("DIV-평가서 상세");
            		p.set_positionstep("0");
            		p.set_taborder("101");

            	}
            );
            this.divViewCompBody00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompTitle05,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 타이틀");
            		p.set_taborder("113");

            	}
            );
            this.divViewCompTitle05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 287, this.divViewCompBody05,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 상세");
            		p.set_taborder("114");

            	}
            );
            this.divViewCompBody05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "Screen0", 1220, 497, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("FrmTemplate100");
            		p.set_titletext("협력사SMS발송");

            	}
            );
            obj.set_stepcount("");
            obj.set_stepindex("");
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","divViewCompBody00.TextArea00","value","dsSms","SND_CNTNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnSendVi","divViewCompTitle00.btnSend","visible","dsObjBindVi","btnSend");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnSendEn","divViewCompTitle00.btnSend","enable","dsObjBindEn","btnSend");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTtlVi","divViewCompBody00.staTtl","visible","dsObjBindVi","staTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTtlEn","divViewCompBody00.staTtl","enable","dsObjBindEn","staTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("TextArea00Vi","divViewCompBody00.TextArea00","visible","dsObjBindVi","TextArea00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("TextArea00En","divViewCompBody00.TextArea00","readonly","dsObjBindEn","TextArea00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static01Vi","divViewCompBody00.sta_inputByte2","visible","dsObjBindVi","Static01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static01En","divViewCompBody00.sta_inputByte2","enable","dsObjBindEn","Static01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staViewCompTitle01LangBind2017110317184329212","divViewCompTitle05.staViewCompTitle01","text","gdsLabel","EPRO_LABEL_00202");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnEvalTmplVi","divViewCompTitle05.btnEvalTmpl","visible","dsObjBindVi","btnEvalTmpl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnEvalTmplEn","divViewCompTitle05.btnEvalTmpl","enable","dsObjBindEn","btnEvalTmpl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnEvalTmpl00Vi","divViewCompTitle05.btnEvalTmpl00","visible","dsObjBindVi","btnEvalTmpl00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnEvalTmpl00En","divViewCompTitle05.btnEvalTmpl00","enable","dsObjBindEn","btnEvalTmpl00");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("BPtnrSmsSend.xfdl", function(exports) {
        /**
         * @파일명       	: CSampleDetail.xfdl
         * @생성자       	: 한민희
         * @생성일자     	: 2017. 8. 17.
         * @설명			: 협력사 SMS 발송
         * @최종수정자		: 김승일
         * @최종수정일자	: 2017. 10. 31.
        */  

        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function(){
        	var param = [
        					 
        				];

        	gfnGetCode(this, param);
        }

        /**
          * @함수명	: fnFormOninit
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.InitEventInfo(이벤트변수)
          * @desc     	: 폼 oninit이벤트
          */
        this.fnFormOninit = function(obj,e){
        	this.fnSetCode();
        }

        /**
        	@함수명	fnFold
        	@desc   	타이틀 접기/펼치기 기능
        */
        this.fnFold = function(){
        	/*
        		상단에서부터 div 순서대로 기입.
        		ttl:접기/펼치기 클릭 하는 컴포넌트, body:실제로 접혀지거나 펼쳐지는 컴포넌트
        	*/
        	var sArg = [ 
        				{ttl:this.divViewCompTitle00.staViewCompTitle00, body:this.divViewCompBody00}	//서브타이틀1
        				
        		   ];		   
        	gfnDivFold(this, sArg);
        }

        /**
          * @함수명	: fnFormOnload
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.LoadEventInfo(이벤트변수)
          * @desc     	: 폼 onload이벤트
          */
        this.fnFormOnload = function(obj,e){
        	
        	//타이틀 접기/펼치기 기능
        	this.fnFold();
        	
        	//그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기
        	gfnSetGrdFunc(this.divViewCompBody05.Grid00, this.divViewCompBody05.divGrdBtns, this);
        	
        	gfnSetObj("A");
        }

        /**
        	@함수명	fnClose
        	@desc   	(공통버튼)닫기
        */
        this.fnClose = function(){
        	return true;
        }

        /**
        	@함수명	fnAdd
        	@desc   	(공통버튼)신규
        */
        this.fnAdd = function(){	
        	
        }

        /**
        	@function	btnScjdCorpAddOnclick
        	@desc   	협력사추가 버튼 onclick 이벤트
        */
        this.btnPtnrAddOnclick = function(obj,e){
        	var sArg = {};
        	gfnModalPop(this, "BPtnrSrchMultiPopup", "CPOP::BPtnrSrchMultiPopup.xfdl", sArg, "fnPopCallBack", 1100, 800);
        }

        /**
        	@function	btnScjdCorpDelOnclick
        	@desc   	삭제
        */
        this.btnPtnrDelOnclick = function(obj,e){
        // 	for(var i=this.dsPtnrList.rowcount; i>=0; i--){
        // 		if(this.dsPtnrList.getColumn(i, "CHECKED") == '1'){
        // 			this.dsPtnrList.deleteRow(i);
        // 		}
        // 	}
        	gfnDsChkDel(this.dsPtnrList);
        }

        
        /**
          *	@함수명	: fnMPPreSave
          * @desc     협력사 추가 전 처리
          */
        this.fnPreAddPtnr = function(){
        	var arr = [];
        	for(var i=0; i<this.dsPtnrList.rowcount; i++){
        		for(var j = i+1; j < this.dsPtnrList.rowcount ; j++){
        			if(this.dsPtnrList.getColumn(i,"PTNR_ID") == this.dsPtnrList.getColumn(j,"PTNR_ID")){
        			this.dsPtnrList.deleteRow(j);
        				var msg = gfnMultiLabel("EPRO_LABEL_01305");
        				var type = gfnMultiLabel("EPRO_LABEL_01306");
        				var objParam = {
        						 agv_msg : msg
        						,agv_type : type
        					};
        				arr.push(objParam);
        			}
        		}
        	}
        	return gfnValidate(this, true, arr);
        }

        

        /**
        	@function	fnPopCallBack()
        	@desc   	팝업 CallBack 함수
        */
        this.fnPopCallBack = function(sPopupId,rtn){
        	
        	this.dsReturn.clear();
        	this.dsReturn.loadXML(rtn);
        	
        	switch(sPopupId){
        		case "BPtnrSrchMultiPopup" :
        			if(this.dsReturn.rowcount != 0){
        				var row = this.dsPtnrList.rowcount;
        				for(var i = row; i < (this.dsReturn.rowcount + row); i++){
        					if(!this.fnPreAddPtnr()) return;
        					this.dsPtnrList.addRow();
        					this.dsPtnrList.setColumn(i, "CHECKED"	, '0');
         					this.dsPtnrList.setColumn(i, "BIZ_NO"	, this.dsReturn.getColumn(i - row, "BIZ_NO"));
         					this.dsPtnrList.setColumn(i, "PTNR_NM"	, this.dsReturn.getColumn(i - row, "PTNR_NM"));
         					this.dsPtnrList.setColumn(i, "RPRSTV_NM", this.dsReturn.getColumn(i - row, "RPRSTV_NM"));
         					this.dsPtnrList.setColumn(i, "PTNR_ID"	, this.dsReturn.getColumn(i - row, "PTNR_ID"));
         					this.dsPtnrList.setColumn(i, "ADDR" 	, this.dsReturn.getColumn(i - row, "ADDR"));
         					this.dsPtnrList.setColumn(i, "SAP_VENDOR" 	, this.dsReturn.getColumn(i - row, "SAP_VENDOR"));
        				}
        			}
        		break;
        		
        		default:
        		break;	
        	}
        }

        	

        /**
        	@function	preBtnSendOnclick()
        	@desc   	발송 전처리
        */
        this.preBtnSendOnclick = function(){
        	
        	if(this.dsSms.getColumn(0, "SND_CNTNT") == null || this.dsSms.getColumn(0, "SND_CNTNT") == ""){
        		gfnAlert("EPRO_LABEL_00832");
        		return false;
        	}
        	
        	if(this.dsPtnrList.rowcount == 0){
        		gfnAlert("EPRO_LABEL_00853");
        		return false;
        	}
        	
        	return true;
        }

        /**
        	@function	btnSendOnclick()
        	@desc   	발송버튼 클릭 이벤트
        */
        this.btnSendOnclick = function(obj,e)
        {
        	if(!this.preBtnSendOnclick()) return;
        	
        	if(this.divViewCompBody00.sta_inputByte.text > 90){
        		  gfnAlert("EPRO_LABEL_00815");
        		  this.divViewCompBody00.TextArea00.setFocus();
              return;
        	}
        	
        	if(!gfnConfirm("EPRO_LABEL_01279")) return;
        	
        	var sSvcID = "savePtnrSms";
        	var sController = "epro.ptnr.service.BPtnrService.savePtnrSms";
        	var sInDatasets = "dsPtnrList=dsPtnrList:A dsSms=dsSms";
        	var sOutDatasets = "";
        	var sCallbackFunc = "fnTrCallBack";
        	
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc); 
        }

        /**
        	@function	fnTrCallBack()
        	@desc   	Transaction Callback함수
        */
        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg){
        	if(strErrCd < 0){
        		return;
        	}	
        	
        	switch(strSvcID){		
        		case "savePtnrSms" : //SMS저장 콜백
        			gfnAlert("EPRO_LABEL_01293");
        			this.reload();
        		break;	
        		
        		case "" :
        		break;
        		
        		default:
        		break;	
        	}
        }
        	
        /**
        	@function	divViewCompBody00_TextArea00_onkillfocus()
        	@desc   	sms 글자수 체크
        */

        this.divViewCompBody00_TextArea00_onchanged = function(obj,e)
        {
           this.divViewCompBody00.sta_inputByte.set_text(this.divViewCompBody00.TextArea00.getLength("ascii"));
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.divViewCompTitle00.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompTitle00.btnSend.addEventHandler("onclick", this.btnSendOnclick, this);
            this.divViewCompBody00.TextArea00.addEventHandler("onchanged", this.divViewCompBody00_TextArea00_onchanged, this);
            this.divViewCompTitle05.btnEvalTmpl.addEventHandler("onclick", this.btnPtnrAddOnclick, this);
            this.divViewCompTitle05.btnEvalTmpl00.addEventHandler("onclick", this.btnPtnrDelOnclick, this);

        };

        this.loadIncludeScript("BPtnrSmsSend.xfdl", true);

       
    };
}
)();
