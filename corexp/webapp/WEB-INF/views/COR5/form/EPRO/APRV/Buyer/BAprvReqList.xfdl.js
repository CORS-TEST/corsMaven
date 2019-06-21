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
                this.set_name("BAprvReqList");
                this.set_titletext("요청리스트");
                this._setFormPosition(0,0,1220,711);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCondition", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"TTL\" size=\"256\" type=\"STRING\"/><Column id=\"CD_APRV_DOC_CTGR\" size=\"256\" type=\"STRING\"/><Column id=\"START_REQ_DT\" size=\"256\" type=\"STRING\"/><Column id=\"END_REQ_DT\" size=\"256\" type=\"STRING\"/><Column id=\"REQR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"REQR_NM\" size=\"256\" type=\"STRING\"/><Column id=\"APP_DOC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"SORT_ITEM1\" size=\"256\" type=\"STRING\"/><Column id=\"SORT_ITEM2\" size=\"256\" type=\"STRING\"/><Column id=\"SORT_ITEM3\" size=\"256\" type=\"STRING\"/><Column id=\"SORT_ITEM4\" size=\"256\" type=\"STRING\"/><Column id=\"SORT_TYPE1\" size=\"256\" type=\"STRING\"/><Column id=\"SORT_TYPE2\" size=\"256\" type=\"STRING\"/><Column id=\"SORT_TYPE3\" size=\"256\" type=\"STRING\"/><Column id=\"SORT_TYPE4\" size=\"256\" type=\"STRING\"/><Column id=\"LANG_CD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsList", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSortItem", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CD_NM_LO\" size=\"256\" type=\"STRING\"/><Column id=\"CD_ID\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD_NM_LO\">--선택--</Col><Col id=\"CD_ID\"/></Row><Row><Col id=\"CD_NM_LO\">승인문서번호</Col><Col id=\"CD_ID\">MA.APP_DOC_ID</Col></Row><Row><Col id=\"CD_NM_LO\">승인유형</Col><Col id=\"CD_ID\">MA.CD_APRV_DOC_CTGR</Col></Row><Row><Col id=\"CD_ID\">MA.REQR_ID</Col><Col id=\"CD_NM_LO\">기안자</Col></Row><Row><Col id=\"CD_ID\">MA.REQ_DT</Col><Col id=\"CD_NM_LO\">기안일자</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdAP11", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReturn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompCond01", "absolute", "0", "35", null, "113", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.getSetter("objNm").set("");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);
            obj = new Div("divReqDay", "absolute", "170", "5", "257", "24", null, null, this.divViewCompCond01);
            obj.getSetter("objNm").set("요청일자");
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staUserId", "absolute", "0", "34", "170", "24", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.set_taborder("2");
            obj.set_text("기안자");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtUserId", "absolute", "170", "34", "100", "24", null, null, this.divViewCompCond01);
            obj.set_cssclass("readonly");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("10");
            obj.getSetter("objNm").set("평가담당자ID");
            obj.set_taborder("3");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtUserNm", "absolute", "273", "34", "130", "24", null, null, this.divViewCompCond01);
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("평가담당자명");
            obj.set_taborder("4");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Button("btnUser", "absolute", "403", "34", "24", "24", null, null, this.divViewCompCond01);
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("평가담당자 검색 버튼");
            obj.set_taborder("5");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staReqDay", "absolute", "0", "5", "170", "24", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.set_taborder("14");
            obj.set_text("기안일자");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staDocId", "absolute", "0", "63", "170", "24", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.set_taborder("17");
            obj.set_text("승인문서번호");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtDocId", "absolute", "170", "63", "257", "24", null, null, this.divViewCompCond01);
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("평가담당자명");
            obj.set_taborder("19");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staWarning", "absolute", "0", "92", null, "19", "0", null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_SearchText");
            obj.set_taborder("20");
            obj.set_text("- 검색조건 없이 검색 시 속도가 저하 될 수 있습니다.");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staAdvice00", "absolute", "428", "9", "303", "17", null, null, this.divViewCompCond01);
            obj.style.set_background("transparent URL('img::img_WF_Question.png')");
            obj.style.set_padding("0 0 0 25");
            obj.set_taborder("21");
            obj.set_text("승인 요청한 날짜");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staAdvice01", "absolute", "428", "39", "303", "17", null, null, this.divViewCompCond01);
            obj.style.set_background("transparent URL('img::img_WF_Question.png')");
            obj.style.set_padding("0 0 0 25");
            obj.set_taborder("22");
            obj.set_text("승인 요청한 담당자");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staAdvice02", "absolute", "428", "69", "303", "17", null, null, this.divViewCompCond01);
            obj.style.set_background("transparent URL('img::img_WF_Question.png')");
            obj.style.set_padding("0 0 0 25");
            obj.set_taborder("23");
            obj.set_text("승인 요청 문서번호");
            this.divViewCompCond01.addChild(obj.name, obj);

            obj = new Div("divViewCompBody00", "absolute", "0", "165", null, null, "15", "0", this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "10", null, null, "0", "37", this.divViewCompBody00);
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj.getSetter("f_colSize").set("N");
            obj.getSetter("f_excel").set("Y");
            obj.getSetter("f_filter").set("N");
            obj.getSetter("f_find").set("N");
            obj.getSetter("f_fix").set("Y");
            obj.getSetter("f_height").set("N");
            obj.getSetter("f_hide").set("N");
            obj.getSetter("f_init").set("Y");
            obj.getSetter("f_mode").set("Y");
            obj.getSetter("f_save").set("N");
            obj.getSetter("f_sort").set("Y");
            obj.getSetter("f_totalCnt").set("N");
            obj.getSetter("objNm").set("검색결과 그리드");
            obj.set_taborder("6");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/><Column size=\"110\"/><Column size=\"450\"/><Column size=\"92\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"93\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"승인문서번호\" tooltiptext=\"\"/><Cell col=\"1\" expr=\"\" text=\"승인유형\" tooltiptext=\"\"/><Cell col=\"2\" expr=\"\" text=\"승인문서명\" tooltiptext=\"\"/><Cell col=\"3\" expr=\"\" text=\"승인대기자수\" tooltiptext=\"\"/><Cell col=\"4\" expr=\"\" text=\"승인대기자\" tooltiptext=\"\"/><Cell col=\"5\" expr=\"\" text=\"기안자\" tooltiptext=\"\"/><Cell col=\"6\" expr=\"\" text=\"기안일자\" tooltiptext=\"\"/></Band><Band id=\"body\"><Cell cssclass=\"cell_link\" text=\"bind:APP_DOC_ID\" tooltiptext=\"bind:APP_DOC_ID\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:CD_APRV_DOC_CTGR_NM\" tooltiptext=\"bind:CD_APRV_DOC_CTGR_NM\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:TTL\" tooltiptext=\"bind:TTL\"/><Cell col=\"3\" style=\"align:right;\" text=\"bind:WAIT_CNT\" tooltiptext=\"bind:WAIT_CNT\"/><Cell col=\"4\" cssclass=\"cell_link\" style=\"align:center;\" text=\"bind:WAIT_NM\" tooltiptext=\"bind:WAIT_NM\"/><Cell col=\"5\" cssclass=\"cell_link\" style=\"align:center;\" text=\"bind:REQR_NM\" tooltiptext=\"bind:REQR_NM\"/><Cell calendardisplaynulltype=\"none\" col=\"6\" displaytype=\"date\" mask=\"yyyy-MM-dd\" text=\"bind:REQR_DT\" tooltiptext=\"bind:REQR_DT\"/></Band></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "10", this.divViewCompBody00);
            obj.set_scrollbars("none");
            obj.set_taborder("7");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Button("btnFold", "absolute", "45.66%", "148", "56", "17", null, null, this);
            obj.set_cssclass("btn_Fold_Close");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Div("divViewCompCond00", "absolute", "0", "0", null, "36", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);
            obj = new Edit("edtTtl", "absolute", "170", "5", "257", "24", null, null, this.divViewCompCond00);
            obj.getSetter("objNm").set("평가서명");
            obj.set_taborder("5");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staTtl", "absolute", "0", "5", "170", "24", null, null, this.divViewCompCond00);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.set_taborder("6");
            obj.set_text("승인문서명");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Combo("cboDocCtgr", "absolute", "643", "5", "150", "24", null, null, this.divViewCompCond00);
            this.divViewCompCond00.addChild(obj.name, obj);
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_innerdataset("@dsCdAP11");
            obj.getSetter("objNm").set("상태");
            obj.set_taborder("7");
            obj = new Static("staDocCtgr", "absolute", "473", "5", "170", "24", null, null, this.divViewCompCond00);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.set_taborder("9");
            obj.set_text("승인유형");
            this.divViewCompCond00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1205, 86, this.divViewCompCond01,
            	//-- Layout function
            	function(p) {
            		p.set_cssclass("div_WF_SearchBg");
            		p.getSetter("objNm").set("");
            		p.set_taborder("1");

            	}
            );
            this.divViewCompCond01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.set_text("Div00");

            	}
            );
            this.divViewCompBody00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 36, this.divViewCompCond00,
            	//-- Layout function
            	function(p) {
            		p.set_cssclass("div_WF_SearchBg");
            		p.set_taborder("4");

            	}
            );
            this.divViewCompCond00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1220, 711, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("frmSearchCond");
            		p.set_titletext("요청리스트");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","divViewCompCond00.edtTtl","value","dsCondition","TTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divViewCompCond00.cboDocCtgr","value","dsCondition","CD_APRV_DOC_CTGR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divViewCompCond01.edtUserId","value","dsCondition","REQR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","divViewCompCond01.edtUserNm","value","dsCondition","REQR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","divViewCompCond01.edtDocId","value","dsCondition","APP_DOC_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staWarningLangBind2017110317184217930","divViewCompCond01.staWarning","text","gdsLabel","EPRO_LABEL_00177");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divViewCompBody00LangBind2017110317184275321","divViewCompBody00","text","gdsLabel","EPRO_LABEL_00272");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompCalFromTo.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
        };
        
        // User Script
        this.registerScript("BAprvReqList.xfdl", function(exports) {
        /**
         * @파일명       	: BAprvReqList.xfdl
         * @생성자       	: 배열
         * @생성일자     	: 2017. 9. 07.
         * @최종수정자		: 송태봉
         * @최종수정일자	    : 2017. 9. 08.
        */  

        /**
          * @함수명	: fnSetCode
          * @desc   : 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {
        	var param = [
        					 {code:"AP11", sSelectType:"A"}
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
        	@함수명	fnFold
        	@desc   	타이틀 접기/펼치기 기능
        */
        this.fnFold = function()
        {
        	var sArg = [ 
        				{ttl:this.btnFold, body:this.divViewCompCond01, initFold:true}
        		   ];		   
        	gfnDivFold(this, sArg);
        }

        /**
          * @함수명	: fnFormOnload
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.LoadEventInfo(이벤트변수)
          * @desc     	: 폼 onload이벤트
          */
        this.fnFormOnload = function(obj,e)
        {
        	gfnSetObj("A");

         	this.dsCondition.setColumn(0,"BRANCH_CD",application.gdsUserInfo.getColumn(0,"BRANCH_CD"));
         	this.dsCondition.setColumn(0,"USER_ID",application.gdsUserInfo.getColumn(0,"USER_ID"));
         	this.dsCondition.setColumn(0,"CD_APRV_DOC_CTGR","");
         	
         	this.divViewCompCond01.divReqDay.fnSetDate(this.dsCondition, "START_REQ_DT", "END_REQ_DT");
         	var sArgEx = {
        					isTran:"Y", tranNm:"BAprvService.searchAprvReq", dsParam:this.dsCondition
        				}
         	gfnSetGrdFunc(this.divViewCompBody00.grdList, this.divViewCompBody00.divPaging, this, sArgEx);
         	this.fnFold();
         	
        	this.dsCondition.setColumn(0,"SORT_ITEM1","MA.APP_DOC_ID");
        	this.dsCondition.setColumn(0,"SORT_TYPE1","DESC");
        	this.dsCondition.setColumn(0,"SORT_ITEM2","");
        	this.dsCondition.setColumn(0,"SORT_TYPE2","");
        	this.dsCondition.setColumn(0,"SORT_ITEM3","");
        	this.dsCondition.setColumn(0,"SORT_TYPE3","");
        	this.dsCondition.setColumn(0,"SORT_ITEM4","");
        	this.dsCondition.setColumn(0,"SORT_TYPE4","");
        	
        	this.fnSearch();
        }

        /**
          * @함수명	: fnSearch
          * @desc   : 조회이벤트
          */
        this.fnSearch = function()
        {
        	var sSvcID = "searchAprvReq";
        	var sController = "epro.aprv.service.BAprvService.searchAprvReq";
        	var sInDatasets = "dsCondition=dsCondition";
        	var sOutDatasets = "dsList=dsList";
        	var sCallbackFunc = "fnTrCallBack";	
        					
        	var	oPaging = [
        					{inDs:this.dsCondition, grid:this.divViewCompBody00.grdList, divPaging:this.divViewCompBody00.divPaging}
        				];					
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc, oPaging);
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
        		case "searchAprvReq" :
        		break;
         
        		default:
        		break;	
        	}
        }

        /**
          * @함수명	: fnSrchUser
          * @desc   : 유저검색
          */
        this.fnSrchUser = function(obj,e)
        {
        	var sArg = { 
        					agv_nm:this.dsCondition.getColumn(0,"REQR_NM")
        			   };
        	gfnSearchComUser(this, "BUserSrchPopup", "fnPopCallBack", sArg)
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
        		case "BUserSrchPopup" :
        				this.dsCondition.setColumn(0,"REQR_ID",this.dsReturn.getColumn(0,"USER_ID"));
        				this.dsCondition.setColumn(0,"REQR_NM",this.dsReturn.getColumn(0,"USER_NM"));
        			break;
        			
        		default:
        			break;	
        	}
        }

        /**
        	@function	fnOntextchanged()
        	@desc   	텍스트 변경이벤트
        */
        this.fnOntextchanged = function(obj,e)
        {
        	this.dsCondition.setColumn(0,"REQR_ID","");
        }

        /**
        	@function	fnOnkeyup()
        	@desc   	키업이벤트
        */
        this.fnOnkeyup = function(obj,e)
        {
        	if(e.keycode == "13"){
        		obj.updateToDataset();
        		if(obj.name == "edtUserNm") this.fnSrchUser();
        		else this.fnSearch();
        	}
        }

        /**
        	@function	fnListOncelldblclick()
        	@desc   	그리드 원클릭 이벤트
        */
        this.fnListOncelldblclick = function(obj,e)
        {
        	
        	if("APP_DOC_ID" == gfnGrdBindColId(obj, obj.getCellPos())){ 
        		gfnSetTmprData("APP_DOC_ID"		,this.dsList.getColumn(e.row, "APP_DOC_ID"));
        		gfnSetTmprData("GUBUN","REQ");
        		gfnSetTmprData("DOC_CTGR",this.dsList.getColumn(e.row, "CD_APRV_DOC_CTGR"));
        		
        		gfnOpenMenuUrl("BAPRV::BAprvDetail");
        		
        	}else if(gfnGrdBindColId(obj, obj.getCellPos()) == "WAIT_NM" && !gfnIsNull(this.dsList.getColumn(e.row, "WAIT_NM"))){
        		var nRow = obj.currentrow;
        		var sArg = {
        					agv_id:this.dsList.getColumn(e.row, "APRVR_ID") //USER ID
        				   };
        		gfnModalPop(this, "BUserInfoPopup", "CPOP::BUserInfoPopup.xfdl", sArg, "", 550, 250);
        	}else if(gfnGrdBindColId(obj, obj.getCellPos()) == "REQR_NM" && !gfnIsNull(this.dsList.getColumn(e.row, "REQR_NM"))){
        		var nRow = obj.currentrow;
        		var sArg = {
        					agv_id:this.dsList.getColumn(e.row, "REQR_ID") //USER ID
        				   };
        		gfnModalPop(this, "BUserInfoPopup", "CPOP::BUserInfoPopup.xfdl", sArg, "", 550, 250);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.divViewCompCond01.staUserId.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.divViewCompCond01.edtUserNm.addEventHandler("onkeyup", this.fnOnkeyup, this);
            this.divViewCompCond01.edtUserNm.addEventHandler("ontextchanged", this.fnOntextchanged, this);
            this.divViewCompCond01.btnUser.addEventHandler("onclick", this.fnSrchUser, this);
            this.divViewCompCond01.staDocId.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.divViewCompCond01.edtDocId.addEventHandler("onkeyup", this.fnOnkeyup, this);
            this.divViewCompCond01.staAdvice00.addEventHandler("onclick", this.div_condition1_Static00_onclick, this);
            this.divViewCompCond01.staAdvice01.addEventHandler("onclick", this.div_condition1_Static00_onclick, this);
            this.divViewCompCond01.staAdvice02.addEventHandler("onclick", this.div_condition1_Static00_onclick, this);
            this.divViewCompBody00.grdList.addEventHandler("oncelldblclick", this.fnListOncelldblclick, this);
            this.divViewCompCond00.edtTtl.addEventHandler("onkeyup", this.fnOnkeyup, this);

        };

        this.loadIncludeScript("BAprvReqList.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
