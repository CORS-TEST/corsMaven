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
                this.set_name("BUserSrchPopup");
                this.set_titletext("승인요청팝업");
                this._setFormPosition(0,0,900,647);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAprvInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"APP_DOC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"TTL\" size=\"256\" type=\"STRING\"/><Column id=\"APRV_OPNN\" size=\"256\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_APRV_MTHD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_APRV_DOC_CTGR\" size=\"256\" type=\"STRING\"/><Column id=\"APP_DOC\" size=\"256\" type=\"STRING\"/><Column id=\"APRV_CNT\" size=\"256\" type=\"STRING\"/><Column id=\"REQR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"REF_KEY_1\" size=\"256\" type=\"STRING\"/><Column id=\"REF_KEY_2\" size=\"256\" type=\"STRING\"/><Column id=\"REF_KEY_3\" size=\"256\" type=\"STRING\"/><Column id=\"REF_KEY_4\" size=\"256\" type=\"STRING\"/><Column id=\"CD_HEADER_STTS\" size=\"256\" type=\"STRING\"/><Column id=\"CD_DETAIL_STTS\" size=\"256\" type=\"STRING\"/><Column id=\"CD_APRV_STTS\" size=\"256\" type=\"STRING\"/><Column id=\"WAIT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIN_USER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAprvLine", this);
            obj._setContents("<ColumnInfo><Column id=\"CHECKED\" size=\"256\" type=\"STRING\"/><Column id=\"APRV_ORDR\" size=\"256\" type=\"STRING\"/><Column id=\"APRVR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"APRVR_NM\" size=\"256\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"APP_DOC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CD_APP_TYPE\" size=\"256\" type=\"STRING\"/><Column id=\"CD_APRV_LN_STTS\" size=\"256\" type=\"STRING\"/><Column id=\"CRTR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"UP_YN\" size=\"256\" type=\"STRING\"/><Column id=\"PSTN\" size=\"256\" type=\"STRING\"/><Column id=\"DEPT_NM\" size=\"256\" type=\"STRING\"/><Column id=\"TEL\" size=\"256\" type=\"STRING\"/><Column id=\"LOGIN_USER\" size=\"256\" type=\"STRING\"/><Column id=\"OPNN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReturn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHeader", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDetail", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdAP12", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("staViewCompCond00", "absolute", "10", "44", null, "34", "10", null, this);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle", "absolute", "10", "44", "85", "34", null, null, this);
            obj.set_cssclass("sta_WF_Label_P");
            obj.set_taborder("11");
            obj.set_text("승인명");
            this.addChild(obj.name, obj);

            obj = new Edit("edTitle", "absolute", "99", "49", null, "24", "15", null, this);
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Static("staViewCompCond01", "absolute", "10", "77", null, "110", "10", null, this);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new Static("staBody", "absolute", "10", "77", "85", "110", null, null, this);
            obj.set_cssclass("sta_WF_Label");
            obj.set_taborder("21");
            obj.set_text("승인의견");
            obj.set_wordwrap("english");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "99", "82", null, "100", "15", null, this);
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd", "absolute", null, "405", "70", "24", "82", null, this);
            obj.set_taborder("23");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel", "absolute", null, "405", "70", "24", "10", null, this);
            obj.set_taborder("24");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Static("staViewCompTitle00", "absolute", "10", "405", "255", "24", null, null, this);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("26");
            obj.set_text("승인자");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList", "absolute", "10", "439", null, "180", "10", null, this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsAprvLine");
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
            obj.getSetter("f_sort").set("N");
            obj.set_taborder("28");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"130\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"승인자명\"/><Cell col=\"3\" text=\"직책\"/><Cell col=\"4\" text=\"부서\"/><Cell col=\"5\" text=\"전화번호\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:UP_YN == 'N'  ? 'none' : 'checkbox'\" edittype=\"expr:UP_YN == 'N'  ? 'none' : 'checkbox'\" text=\"bind:CHECKED\"/><Cell col=\"1\" text=\"bind:APRV_ORDR\"/><Cell col=\"2\" edittype=\"expr:UP_YN == 'N'  ? 'none' : 'text'\" style=\"align:left;\" text=\"bind:APRVR_NM\" expandshow=\"expr:UP_YN == 'N'  ? 'hide' : 'show'\" expandsize=\"28\" expandimage=\"URL('img::grd_WF_Expand.png')\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:PSTN\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:DEPT_NM\"/><Cell col=\"5\" text=\"bind:TEL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staViewCompTitle03", "absolute", "10", "10", "255", "24", null, null, this);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("37");
            obj.set_text("승인정보");
            this.addChild(obj.name, obj);

            obj = new Static("staViewCompTitle04", "absolute", "10", "200", "255", "24", null, null, this);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("38");
            obj.set_text("승인파일");
            this.addChild(obj.name, obj);

            obj = new Div("divFile", "absolute", "10", "200", null, "210", "10", null, this);
            obj.set_taborder("39");
            obj.set_url("CCOMP::CompNFileUpDown.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btnUp", "absolute", null, "405", "40", "24", "196", null, this);
            obj.set_taborder("40");
            obj.set_text("▲");
            this.addChild(obj.name, obj);

            obj = new Button("btnDown", "absolute", null, "405", "40", "24", "154", null, this);
            obj.set_taborder("41");
            obj.set_text("▼");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 900, 647, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("승인요청팝업");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edTitle","value","dsAprvInfo","TTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","TextArea00","value","dsAprvInfo","APRV_OPNN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staViewCompTitle03LangBind201711031718424142","staViewCompTitle03","text","gdsLabel","EPRO_LABEL_00016");
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
        this.registerScript("BAprvReqPopup.xfdl", function(exports) {
        /**
         * @파일명       	: BAprvReqPopup.xfdl
         * @생성자       	: 송태봉
         * @생성일자     	: 2017. 8. 31.
         * @설명			    : 승인요청팝업
         * @최종수정자		: 송태봉
         * @최종수정일자	    : 2017. 8. 31.
        */ 

        /*
        호출하는 화면에서 이렇게 호출해야됨.

        	var sArg = {
        					agv_doc:"AP11RFQ"
        					,agv_mthd:"AP12SEQ" 
        					,agv_html:this.dsRfq.getColumn(0,"FILESTRING")
        					,agv_appdoc : this.dsRfq.saveXML()+ "▩"
        					,agv_ttl:this.dsRfq.getColumn(0,"TTL")
        					,agv_ref1:this.dsRfq.getColumn(0,"RFQ_REQ_NO")
        					,agv_ref2:this.dsRfq.getColumn(0,"RFQ_ODR")
        					,agv_ref3:this.dsRfq.getColumn(0,"ALT_SINGLE_PTNR")
        					,agv_ref4:altOver
        					,agv_remote:"Y"													팝업에 버튼이 있으면 Y , 없으면 N
        					,remote_btn: [{btnName:gfnMultiLabel("EPRO_LABEL_00456"), clickEventFunc:"fnReq"}]   팝업에서 사용할 버튼들 이름. 
        				};
        	gfnModalPop(this, "BAprvReqPopup", "BAPRV::BAprvReqPopup.xfdl", sArg, "fnPopCallBack", 900, 800);

        */

        

        
        this.popTitle = gfnMultiLabel("승인요청");

        /**
          * @함수명	: fnSetCode
          * @desc   : 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {
        	var param = [
        					 {code:"AP12", sSelectType:"S"}
        				];
        	gfnGetCode(this, param);
        }

        /**
          * @함수명	: fnFormOninit
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.InitEventInfo(이벤트변수)
          * @desc     	: 폼 oninit이벤트
          */
        this.fnOninit = function(obj,e)
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
        	gfnSetGrdFunc(this.grdList, null, this);

        	var ownFrame = this.getOwnerFrame();
        	this.dsAprvInfo.addRow();
        	this.dsAprvInfo.setColumn(0,"BRANCH_CD",application.gdsUserInfo.getColumn(0,"BRANCH_CD"));
        	this.dsAprvInfo.setColumn(0,"REQR_ID",application.gdsUserInfo.getColumn(0,"USER_ID"));
        	this.dsAprvInfo.setColumn(0,"CD_APRV_DOC_CTGR",ownFrame.agv_doc);
        	this.dsAprvInfo.setColumn(0,"REF_KEY_1",ownFrame.agv_ref1);
        	this.dsAprvInfo.setColumn(0,"REF_KEY_2",ownFrame.agv_ref2);
        	this.dsAprvInfo.setColumn(0,"REF_KEY_3",ownFrame.agv_ref3);
        	this.dsAprvInfo.setColumn(0,"REF_KEY_4",ownFrame.agv_ref4);
        	this.dsAprvInfo.setColumn(0,"APP_DOC",ownFrame.agv_appdoc);
        	this.dsAprvInfo.setColumn(0,"TTL",ownFrame.agv_ttl);
        	this.dsAprvInfo.setColumn(0,"CD_APRV_MTHD","AP12SEQ");
        	this.dsAprvInfo.setColumn(0,"CD_APRV_STTS","AP10ING");
        	//var doc = this.webBrowser.getProperty("document");
        	//doc.callMethod("write",this.dsAprvInfo.getColumn(0,"APP_DOC"));

        	this.dsAprvLine.addRow();
        	this.dsAprvLine.setColumn(0,"BRANCH_CD",application.gdsUserInfo.getColumn(0,"BRANCH_CD"));
        	this.dsAprvLine.setColumn(0,"APRVR_ID",application.gdsUserInfo.getColumn(0,"USER_ID"));
        	this.dsAprvLine.setColumn(0,"APRVR_NM",application.gdsUserInfo.getColumn(0,"USER_NM"));
        	this.dsAprvLine.setColumn(0,"APRV_ORDR",1);
        	this.dsAprvLine.setColumn(0,"CD_APP_TYPE","AP14REQ");
        	this.dsAprvLine.setColumn(0,"CD_APRV_LN_STTS","AP13CFM");
        	this.dsAprvLine.setColumn(0,"UP_YN","N");
        	this.dsAprvLine.setColumn(0,"PSTN",application.gdsUserInfo.getColumn(0,"PSTN"));
        	this.dsAprvLine.setColumn(0,"DEPT_NM",application.gdsUserInfo.getColumn(0,"DEPT_NM"));
        	this.dsAprvLine.setColumn(0,"TEL",application.gdsUserInfo.getColumn(0,"TEL"));
        	
        	//this.fnReadLeader();
        	
        	gfnMakeFileDs(this);
        	var sTableNm = "MM_APRV";
        	var arrFileKey = [this.dsAprvInfo.getColumn(0, "APP_DOC_ID")];
        	this.divFile.fnFileInit(this, sTableNm, this.dsAprvInfo, arrFileKey, "N");
        }

        this.fnReadLeader = function()
        {
        	var sSvcID = "readLeader";
        	var sController = "epro.aprv.service.BAprvService.readLeader";
        	var sInDatasets = "dsAprvInfo=dsAprvInfo";
        	var sOutDatasets = "dsReturn=dsReturn";
        	var sCallbackFunc = "fnTrCallBack";	

            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
          * @함수명	: fnSearchUser
          * @desc   : 유저검색
          */
        this.fnSearchUser = function(objNm)
        {
        	var sAgvNm = "";
        	var sPopupId = "";
        	
        	if(objNm == "grdList"){
        		if(!gfnIsNull(this.dsAprvLine.getColumn(this.dsAprvLine.rowposition,"APRVR_ID"))) return;
        	
        		sPopupId = "BUserSrchPopup";
        		sAgvNm = this.dsAprvLine.getColumn(this.dsAprvLine.rowposition,"APRVR_NM")
        		
        	}
        	
        	var sArg = { 
        				agv_nm:sAgvNm
        			   };

        	gfnSearchComUser(this, sPopupId, "fnPopCallBack", sArg)
        }

        /**
        	@function	fnPopCallBack()
        	@desc   	팝업 CallBack 함수
        */
        this.fnPopCallBack = function(sPopupId,rtn)
        {
        	this.dsReturn.clear();
        	this.dsReturn.loadXML(rtn);
        	
        	switch(sPopupId){			
        		case "BUserSrchPopup":
        				if(!gfnIsNull(this.dsReturn.getColumn(0,"USER_ID"))){
        					if(-1 == this.dsAprvLine.findRow("APRVR_ID",this.dsReturn.getColumn(0,"USER_ID"))){
        						var nRow = this.dsAprvLine.rowposition;
        						this.dsAprvLine.setColumn(nRow,"APRVR_ID", this.dsReturn.getColumn(0,"USER_ID"));
        						this.dsAprvLine.setColumn(nRow,"APRVR_NM", this.dsReturn.getColumn(0,"USER_NM"));
        						this.dsAprvLine.setColumn(nRow,"PSTN", this.dsReturn.getColumn(0,"PSTN"));
        						this.dsAprvLine.setColumn(nRow,"DEPT_NM", this.dsReturn.getColumn(0,"DEPT_NM"));
        						this.dsAprvLine.setColumn(nRow,"TEL", this.dsReturn.getColumn(0,"TEL"));
        						
        					} else{
        						gfnAlert("EPRO_LABEL_00874");
        					}
        				}
        			break;
        		
        		default:
        			break;	
        	}
        }

        /**
        	@function	fnAprvrLineAdd()
        	@desc   	승인라인추가
        */
        this.fnAprvrLineAdd = function(obj,e)
        {
        	var nRow = this.dsAprvLine.addRow();
        	this.dsAprvLine.setColumn(nRow,"UP_YN","Y");
        	this.dsAprvLine.setColumn(nRow,"CHECKED","0");
        	this.dsAprvLine.setColumn(nRow,"APRV_ORDR" ,nRow+1);
        	this.dsAprvLine.setColumn(nRow,"CD_APP_TYPE","AP14CFM");
        	this.dsAprvLine.setColumn(nRow,"CD_APRV_LN_STTS","AP13WAT");
        	this.dsAprvLine.setColumn(nRow,"BRANCH_CD",application.gdsUserInfo.getColumn(0,"BRANCH_CD"));
        }

        /**
        	@function	fnAprvrLineDel()
        	@desc   	승인라인삭제
        */
        this.fnAprvrLineDel = function(obj,e)
        {
        	var check = gfnDsChkDel(this.dsAprvLine);
        	
        	if(check){
        		for(var i = 0 ; i < this.dsAprvLine.rowcount ; i++){
        			this.dsAprvLine.setColumn(i ,"APRV_ORDR" ,i+1);
        		}
        	}
        }

        /**
        	@function	grdOnexpanddown()
        	@desc   	expanddown 이벤트
        */
        this.grdOnexpanddown = function(obj,e)
        {
        	obj.updateToDataset();
        	this.fnSearchUser(obj.name);
        }

        /**
        	@function	grdListOnkeydown()
        	@desc   	그리드 키다운 이벤트
        */
        this.grdListOnkeydown = function(obj,e)
        {
        	if(e.keycode == "13"){
        		if(gfnGrdBindColId(obj,obj.getCellPos()) == "APRVR_NM"){
        			obj.updateToDataset();
        			this.fnSearchUser(obj.name);
        		}
        	}
        }

        /**
        	@function	grdOntextchanged()
        	@desc   	그리드 텍스트변경 이벤트
        */
        this.grdOntextchanged = function(obj,e)
        {
        	if(gfnGrdBindColId(obj,obj.getCellPos()) == "APRVR_NM"){
        		this.dsAprvLine.setColumn(this.dsAprvLine.rowposition,"APRVR_ID","");
        		this.dsAprvLine.setColumn(this.dsAprvLine.rowposition,"PSTN","");
        		this.dsAprvLine.setColumn(this.dsAprvLine.rowposition,"DEPT_NM","");
        		this.dsAprvLine.setColumn(this.dsAprvLine.rowposition,"TEL","");
        	}
        }

        /**
        	@function	fnPreReq()
        	@desc   	요청전 이벤트
        */
        this.fnPreReq = function(type)
        {
        	if(type =="REQ"){
        		if(this.dsAprvLine.rowcount < 2){
        		gfnAlert("승인자를 추가 하시기 바랍니다.");
        		return false;
        		} 
        	}
        	
        	if(gfnIsNull(this.dsAprvInfo.getColumn(0,"TTL"))){
        		gfnAlert("승인명을 입력하시기 바랍니다.");
        		return false;
        		
        	}
        	
        	for(var i = 0 ; i < this.dsAprvLine.rowcount ; i++){
        		if(gfnIsNull(this.dsAprvLine.getColumn(i,"APRVR_ID"))){
        			gfnAlert((i + 1) + gfnMultiLabel("행의 승인자의 정보를 찾을 수 없습니다."));
        			return false;
        		}
        	}
        	
        	this.dsAprvInfo.setColumn(0,"APRV_CNT", this.dsAprvLine.getMax("APRV_ORDR"));
        	
        	return true;
        }

        /**
        	@function	fnReq()
        	@desc   	요청 이벤트
        */
        this.fnReq = function(obj,e)
        {
        	if(!this.fnPreReq("REQ")) return;
        	
        	if(!gfnConfirm("승인요청 하시겠습니까?")) return;
        	
        	var sSvcID = "saveAprvReq";
        	var sController = "epro.aprv.service.BAprvService.saveAprvReq";
        	var sInDatasets = "dsAprvInfo=dsAprvInfo dsAprvLine=dsAprvLine";
        	var sOutDatasets = "dsAprvInfo=dsAprvInfo";
        	var sCallbackFunc = "fnTrCallBack";	

            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        this.fnCfm = function(obj,e)
        {
        	if(!this.fnPreReq("CFM")) return;
        	
        	if(!gfnConfirm("전결 하시겠습니까?")) return;

        	
        	var sSvcID = "saveAprvCfm";
        	var sController = "epro.aprv.service.BAprvService.saveAprvCfm";
        	var sInDatasets = "dsAprvInfo=dsAprvInfo dsAprvLine=dsAprvLine";
        	var sOutDatasets = "dsAprvInfo=dsAprvInfo";
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
        		case "saveAprvReq" :
        				gfnAlert(strErrMsg);
        				this.parent.close(this.dsAprvInfo.saveXML());
        		break;
        		
        		case "saveAprvCfm" :
        				gfnAlert(strErrMsg);
        				this.parent.close(this.dsAprvInfo.saveXML());
        		break;
        		
        		case "readLeader" :
        			for(var i = 0 ; i < this.dsReturn.rowcount ; i++){
        				var nRow = this.dsAprvLine.addRow();
        				this.dsAprvLine.setColumn(nRow,"BRANCH_CD",this.dsReturn.getColumn(i,"BRANCH_CD"));
        				this.dsAprvLine.setColumn(nRow,"APRVR_ID",this.dsReturn.getColumn(i,"USER_ID"));
        				this.dsAprvLine.setColumn(nRow,"APRVR_NM",this.dsReturn.getColumn(i,"USER_NM"));
        				this.dsAprvLine.setColumn(nRow,"APRV_ORDR",i+2);
        				this.dsAprvLine.setColumn(nRow,"CD_APP_TYPE","AP14CFM");
        				this.dsAprvLine.setColumn(nRow,"CD_APRV_LN_STTS","AP13WAT");
        				this.dsAprvLine.setColumn(nRow,"UP_YN","Y");
        				this.dsAprvLine.setColumn(nRow,"PSTN",this.dsReturn.getColumn(i,"PSTN"));
        				this.dsAprvLine.setColumn(nRow,"DEPT_NM",this.dsReturn.getColumn(i,"DEPT_NM"));
        				this.dsAprvLine.setColumn(nRow,"TEL",this.dsReturn.getColumn(i,"TEL"));
        			}
        		
        		break;
        		
        		default:
        		break;	
        	}
        }

        this.fnMove = function(obj,e)
        {
        	var ordr = "";
        	var nRow = this.dsAprvLine.rowposition;
        	
        	if(this.dsAprvLine.getColumn(nRow,"APRVR_ID") == application.gdsUserInfo.getColumn(0,"USER_ID")){
        		gfnAlert("EPRO_LABEL_00890");
        		return;
        	}
        	
        	if(obj.name == "btnUp"){
        		if(this.dsAprvLine.getColumn(nRow,"UP_YN") == "Y" && this.dsAprvLine.getColumn(nRow - 1, "UP_YN") == "Y"){
        			if(gfnIsNull(this.dsAprvLine.getColumn(nRow,"APRVR_ID"))){
        				gfnAlert("EPRO_LABEL_00891");
        				return;
        				
        			} else if(gfnIsNull(this.dsAprvLine.getColumn(nRow -1,"APRVR_ID"))){
        				gfnAlert("EPRO_LABEL_00892");
        				return;
        			}
        			
        			ordr = this.dsAprvLine.getColumn(nRow,"APRV_ORDR");
        			this.dsAprvLine.setColumn(nRow,"APRV_ORDR",parseInt(ordr) - 1);
        			this.dsAprvLine.setColumn(nRow -1 ,"APRV_ORDR",ordr);
        			
        			this.dsAprvLine.moveRow(nRow,nRow-1);
        			
        		} else{
        			gfnAlert("EPRO_LABEL_00893");
        		}
        		
        	} else{
        		if(this.dsAprvLine.getColumn(nRow,"UP_YN") == "Y" && this.dsAprvLine.getColumn(nRow + 1, "UP_YN") == "Y"){
        			if(gfnIsNull(this.dsAprvLine.getColumn(nRow,"APRVR_ID"))){
        				gfnAlert("EPRO_LABEL_00891");
        				return;
        				
        			} else if(gfnIsNull(this.dsAprvLine.getColumn(nRow +1,"APRVR_ID"))){
        				gfnAlert("EPRO_LABEL_00892");
        				return;
        			}
        			
        			ordr = this.dsAprvLine.getColumn(nRow,"APRV_ORDR");
        			this.dsAprvLine.setColumn(nRow,"APRV_ORDR",parseInt(ordr) + 1);
        			this.dsAprvLine.setColumn(nRow +1 ,"APRV_ORDR",ordr);
        			
        			this.dsAprvLine.moveRow(nRow,nRow+1);
        		
        		} else{
        			gfnAlert("EPRO_LABEL_00894");
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.fnOninit, this);
            this.addEventHandler("onload", this.fnOnLoad, this);
            this.edTitle.addEventHandler("onkeyup", this.fnOnkeyup, this);
            this.btnAdd.addEventHandler("onclick", this.fnAprvrLineAdd, this);
            this.btnDel.addEventHandler("onclick", this.fnAprvrLineDel, this);
            this.grdList.addEventHandler("onexpanddown", this.grdOnexpanddown, this);
            this.grdList.addEventHandler("onkeydown", this.grdListOnkeydown, this);
            this.grdList.addEventHandler("ontextchanged", this.grdOntextchanged, this);
            this.btnUp.addEventHandler("onclick", this.fnMove, this);
            this.btnDown.addEventHandler("onclick", this.fnMove, this);

        };

        this.loadIncludeScript("BAprvReqPopup.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
