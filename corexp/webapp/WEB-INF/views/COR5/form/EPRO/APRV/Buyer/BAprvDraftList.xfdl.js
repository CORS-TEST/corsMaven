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
                this.set_name("BAprvDraftList");
                this.set_titletext("기안리스트");
                this._setFormPosition(0,0,1220,711);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
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

            obj = new Dataset("dsCdAP10", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdAP11", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCondition", this);
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"TTL\" size=\"256\" type=\"STRING\"/><Column id=\"CD_APRV_DOC_CTGR\" size=\"256\" type=\"STRING\"/><Column id=\"CD_APRV_STTS\" size=\"256\" type=\"STRING\"/><Column id=\"START_REQ_DT\" size=\"256\" type=\"STRING\"/><Column id=\"END_REQ_DT\" size=\"256\" type=\"STRING\"/><Column id=\"START_CMPLT_DT\" size=\"256\" type=\"STRING\"/><Column id=\"END_CMPLT_DT\" size=\"256\" type=\"STRING\"/><Column id=\"APP_DOC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"LANG_CD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj = new Static("staWarning", "absolute", "0", "92", null, "19", "0", null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_SearchText");
            obj.set_taborder("12");
            obj.set_text("- 검색조건 없이 검색 시 속도가 저하 될 수 있습니다.");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divReqDay", "absolute", "170", "5", "250", "24", null, null, this.divViewCompCond01);
            obj.getSetter("objNm").set("요청일자");
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staReqDay", "absolute", "0", "5", "170", "24", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right");
            obj.set_taborder("14");
            obj.set_text("기안일자");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("dviCmltDay", "absolute", "170", "34", "250", "24", null, null, this.divViewCompCond01);
            obj.getSetter("objNm").set("요청일자");
            obj.set_taborder("16");
            obj.set_text("Div01");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staDocId", "absolute", "0", "63", "170", "24", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right");
            obj.set_taborder("17");
            obj.set_text("승인문서번호");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtDocId", "absolute", "170", "63", "250", "24", null, null, this.divViewCompCond01);
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("평가담당자명");
            obj.set_taborder("19");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staCmpltDay", "absolute", "0", "34", "170", "24", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right");
            obj.set_taborder("21");
            obj.set_text("승인완료일자");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staAdvice00", "absolute", "428", "9", "303", "24", null, null, this.divViewCompCond01);
            obj.style.set_background("transparent URL('img::img_WF_Question.png')");
            obj.style.set_padding("0 0 7 25");
            obj.set_taborder("22");
            obj.set_text("승인 요청한 날짜");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staAdvice03", "absolute", "428", "38", "303", "24", null, null, this.divViewCompCond01);
            obj.style.set_background("transparent URL('img::img_WF_Question.png')");
            obj.style.set_padding("0 0 7 25");
            obj.set_taborder("23");
            obj.set_text("모든승인이 완료된 일자");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staAdvice02", "absolute", "428", "67", "303", "24", null, null, this.divViewCompCond01);
            obj.style.set_background("transparent URL('img::img_WF_Question.png')");
            obj.style.set_padding("0 0 7 25");
            obj.set_taborder("24");
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
            obj.getSetter("f_totalCnt").set("Y");
            obj.getSetter("objNm").set("검색결과 그리드");
            obj.set_taborder("6");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"85\"/><Column size=\"110\"/><Column size=\"350\"/><Column size=\"92\"/><Column size=\"110\"/><Column size=\"93\"/><Column size=\"97\"/><Column size=\"110\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"승인문서번호\" tooltiptext=\"\"/><Cell col=\"1\" expr=\"\" text=\"승인상태\" tooltiptext=\"\"/><Cell col=\"2\" expr=\"\" text=\"승인유형\" tooltiptext=\"\"/><Cell col=\"3\" expr=\"\" text=\"승인문서명\" tooltiptext=\"\"/><Cell col=\"4\" expr=\"\" text=\"승인대기자수\" tooltiptext=\"\"/><Cell col=\"5\" expr=\"\" text=\"승인대기자\" tooltiptext=\"\"/><Cell col=\"6\" expr=\"\" text=\"기안일자\" tooltiptext=\"\"/><Cell col=\"7\" expr=\"\" text=\"승인완료일자\" tooltiptext=\"\"/><Cell col=\"8\" expr=\"\" text=\"최종승인자\" tooltiptext=\"\"/></Band><Band id=\"body\"><Cell cssclass=\"cell_link\" text=\"bind:APP_DOC_ID\" tooltiptext=\"bind:APP_DOC_ID\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:CD_APRV_STTS_NM\" tooltiptext=\"bind:CD_APRV_STTS_NM\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:CD_APRV_DOC_CTGR_NM\" tooltiptext=\"bind:CD_APRV_DOC_CTGR_NM\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:TTL\" tooltiptext=\"bind:TTL\"/><Cell col=\"4\" style=\"align:right;\" text=\"bind:WAIT_CNT\" tooltiptext=\"bind:WAIT_CNT\"/><Cell col=\"5\" cssclass=\"cell_link\" style=\"align:center;cursor:EXPR(WAIT_NM==''?&quot;auto&quot;:&quot;hand&quot;);\" text=\"bind:WAIT_NM\" tooltiptext=\"bind:WAIT_NM\"/><Cell calendardisplaynulltype=\"none\" col=\"6\" displaytype=\"date\" mask=\"yyyy-MM-dd\" text=\"bind:REQ_DT\" tooltiptext=\"bind:REQ_DT\"/><Cell calendardisplaynulltype=\"none\" col=\"7\" displaytype=\"date\" mask=\"yyyy-MM-dd\" text=\"bind:APRV_CMPLT_DT\" tooltiptext=\"bind:APRV_CMPLT_DT\"/><Cell col=\"8\" cssclass=\"cell_link\" style=\"align:center;\" text=\"bind:FIN_NM\" tooltiptext=\"bind:FIN_NM\"/></Band></Format></Formats>");
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
            obj = new Edit("edtTtl", "absolute", "170", "5", "250", "24", null, null, this.divViewCompCond00);
            obj.getSetter("objNm").set("평가서명");
            obj.set_taborder("5");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staTtl", "absolute", "0", "5", "170", "24", null, null, this.divViewCompCond00);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right");
            obj.set_taborder("6");
            obj.set_text("승인문서명");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Combo("cboDocCtgr", "absolute", "570", "5", "150", "24", null, null, this.divViewCompCond00);
            this.divViewCompCond00.addChild(obj.name, obj);
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_innerdataset("@dsCdAP11");
            obj.getSetter("objNm").set("상태");
            obj.set_taborder("7");
            obj = new Static("staDocCtgr", "absolute", "401", "5", "170", "24", null, null, this.divViewCompCond00);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right");
            obj.set_taborder("9");
            obj.set_text("승인유형");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staStts", "absolute", "771", "5", "170", "24", null, null, this.divViewCompCond00);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right");
            obj.set_taborder("10");
            obj.set_text("승인상태");
            obj.set_visible("false");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Combo("cboStts", "absolute", "940", "5", "150", "24", null, null, this.divViewCompCond00);
            this.divViewCompCond00.addChild(obj.name, obj);
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_innerdataset("@dsCdAP10");
            obj.getSetter("objNm").set("상태");
            obj.set_taborder("11");
            obj.set_visible("false");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 113, this.divViewCompCond01,
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
            		p.set_titletext("기안리스트");

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
            obj = new BindItem("item2","divViewCompCond00.cboStts","value","dsCondition","CD_APRV_STTS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","divViewCompCond01.edtDocId","value","dsCondition","APP_DOC_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","divViewCompCond00.staStts","text","gdsLabel","EPRO_LABEL_00724");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompCalFromTo.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompCalFromTo.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
        };
        
        // User Script
        this.registerScript("BAprvDraftList.xfdl", function(exports) {
        /**
         * @파일명       	: BAprvDraftList.xfdl
         * @생성자       	: 배열
         * @생성일자     	: 2017. 9. 7.
         * @최종수정자		: 송태봉
         * @최종수정일자	    : 2017. 9. 7.
        */  

        /**
          * @함수명	: fnSetCode
          * @desc   : 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {
        	var param = [
        					 {code:"AP11", sSelectType:"A"}
        					 ,{code:"AP10", sSelectType:"A" ,sFiltered:"D:WRI"}
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
        	var sArgEx = {
        					isTran:"Y", tranNm:"BAprvService.searchAprvDraft", dsParam:this.dsCondition
        				}
        	gfnSetGrdFunc(this.divViewCompBody00.grdList, this.divViewCompBody00.divPaging, this, sArgEx);
        	gfnSetObj("A");
        	
        	this.divViewCompCond01.divReqDay.fnSetDate(this.dsCondition, "START_REQ_DT", "END_REQ_DT");
         	this.divViewCompCond01.dviCmltDay.fnSetDate(this.dsCondition, "START_CMPLT_DT", "END_CMPLT_DT");
        	
         	this.dsCondition.setColumn(0,"BRANCH_CD",application.gdsUserInfo.getColumn(0,"BRANCH_CD"));
         	this.dsCondition.setColumn(0,"USER_ID",application.gdsUserInfo.getColumn(0,"USER_ID"));
         	this.dsCondition.setColumn(0,"CD_APRV_DOC_CTGR","");
         	this.dsCondition.setColumn(0,"CD_APRV_STTS","");
         	
        	this.fnSearch();
        	this.fnFold();
        }

        /**
          * @함수명	: fnSearch
          * @desc   : 조회
          */
        this.fnSearch = function()
        {
        	var sSvcID = "searchAprvDraft";
        	var sController = "epro.aprv.service.BAprvService.searchAprvDraft";
        	var sInDatasets = "dsCondition=dsCondition";
        	var sOutDatasets = "dsList=dsList";
        	var sCallbackFunc = "fnTrCallBack";	
        					
        	/*
        		페이징일 때 oPaging 선언후 사용
        		inDs:검색조건 데이터셋, outDs:리스트 데이터셋, divPaging:페이징 div
        	*/
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
        		case "searchAprvDraft" :
        		break;
         
        		default:
        		break;	
        	}
        }

        this.fnListOncelldblclick = function(obj,e)
        {

        	if("APP_DOC_ID" == gfnGrdBindColId(obj, obj.getCellPos())){ 
        		
        		gfnSetTmprData("APP_DOC_ID"		,this.dsList.getColumn(e.row, "APP_DOC_ID"));
        		gfnSetTmprData("GUBUN","DRAFT");
        		gfnSetTmprData("DOC_CTGR",this.dsList.getColumn(e.row, "CD_APRV_DOC_CTGR"));
        		
        		gfnOpenMenuUrl("BAPRV::BAprvDetail");
        	
        	}else if(gfnGrdBindColId(obj, obj.getCellPos()) == "WAIT_NM" && !gfnIsNull(this.dsList.getColumn(e.row, "WAIT_NM"))){
        		var nRow = obj.currentrow;
        		var sArg = {
        					agv_id:this.dsList.getColumn(e.row, "WAIT_ID") //USER ID
        				   };
        		gfnModalPop(this, "BUserInfoPopup", "CPOP::BUserInfoPopup.xfdl", sArg, "", 550, 250);
        	}else if(gfnGrdBindColId(obj, obj.getCellPos()) == "FIN_NM" && !gfnIsNull(this.dsList.getColumn(e.row, "FIN_NM"))){
        		var nRow = obj.currentrow;
        		var sArg = {
        					agv_id:this.dsList.getColumn(e.row, "FIN_ID") //USER ID
        				   };
        		gfnModalPop(this, "BUserInfoPopup", "CPOP::BUserInfoPopup.xfdl", sArg, "", 550, 250);
        	}
        }

        this.fnOnkeyup = function(obj,e)
        {
        	if(e.keycode == "13"){
        		obj.updateToDataset();
        		this.fnSearch();
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.divViewCompCond01.staDocId.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.divViewCompCond01.edtDocId.addEventHandler("onkeyup", this.fnOnkeyup, this);
            this.divViewCompCond01.staAdvice00.addEventHandler("onclick", this.div_condition1_Static00_onclick, this);
            this.divViewCompCond01.staAdvice03.addEventHandler("onclick", this.div_condition1_Static00_onclick, this);
            this.divViewCompCond01.staAdvice02.addEventHandler("onclick", this.div_condition1_Static00_onclick, this);
            this.divViewCompBody00.grdList.addEventHandler("oncelldblclick", this.fnListOncelldblclick, this);
            this.divViewCompCond00.edtTtl.addEventHandler("onkeyup", this.fnOnkeyup, this);

        };

        this.loadIncludeScript("BAprvDraftList.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
