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
                this.set_name("BMtrlList");
                this.set_titletext("품목관리리스트");
                this._setFormPosition(0,0,1220,768);
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
            obj._setContents("<ColumnInfo><Column id=\"MTRL_NM\" size=\"500\" type=\"string\"/><Column id=\"MTRL_CD\" size=\"20\" type=\"string\"/><Column id=\"CORP_CD\" size=\"256\" type=\"STRING\"/><Column id=\"CORP_NM\" size=\"256\" type=\"STRING\"/><Column id=\"INT_NTAX\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_USE\" size=\"20\" type=\"string\"/><Column id=\"LRG_CLS_ID\" size=\"256\" type=\"STRING\"/><Column id=\"MDL_CLS_ID\" size=\"256\" type=\"STRING\"/><Column id=\"SML_CLS_ID\" size=\"256\" type=\"STRING\"/><Column id=\"ATTR_ID1\" size=\"256\" type=\"STRING\"/><Column id=\"ATTR_NM1\" size=\"256\" type=\"STRING\"/><Column id=\"ATTR_ID2\" size=\"256\" type=\"STRING\"/><Column id=\"ATTR_NM2\" size=\"256\" type=\"STRING\"/><Column id=\"ATTR_ID3\" size=\"256\" type=\"STRING\"/><Column id=\"ATTR_NM3\" size=\"256\" type=\"STRING\"/><Column id=\"FLAG\" size=\"256\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_CNTR\" size=\"256\" type=\"STRING\"/><Column id=\"SRC_LVL_2\" size=\"256\" type=\"STRING\"/><Column id=\"SRC_LVL_1\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"MTRL_CD\" size=\"256\" type=\"STRING\"/><Column id=\"MTRL_NM2\" size=\"256\" type=\"STRING\"/><Column id=\"MTRL_NM\" size=\"256\" type=\"STRING\"/><Column id=\"MTRL_GRP_ID\" size=\"256\" type=\"STRING\"/><Column id=\"MTRL_GRP_NM2\" size=\"256\" type=\"STRING\"/><Column id=\"CD_PO_UNIT\" size=\"256\" type=\"STRING\"/><Column id=\"CD_PO_UNIT_NM\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_PO_PRICE\" size=\"256\" type=\"STRING\"/><Column id=\"CNTR_PTNR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CNTR_PTNR_NM\" size=\"256\" type=\"STRING\"/><Column id=\"GR_ACNT_CD_MGMT\" size=\"256\" type=\"STRING\"/><Column id=\"CNTR_PRICE\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_USE\" size=\"256\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"INT_NTAX\" size=\"256\" type=\"STRING\"/><Column id=\"INT_NTAX_NM\" size=\"256\" type=\"STRING\"/><Column id=\"CNTR_END_DAY\" size=\"256\" type=\"STRING\"/><Column id=\"DLV_DAY\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_CHGR_ID\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSend", this);
            obj._setContents("<ColumnInfo><Column id=\"ATTR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"ATTR_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReturn", this);
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

            obj = new Dataset("dsMtrlAttrCombo1", this);
            obj._setContents("<ColumnInfo><Column id=\"ATTR_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"ATTR_NM\">--전체--</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMtrlAttrCombo3", this);
            obj._setContents("<ColumnInfo><Column id=\"ATTR_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"ATTR_NM\">--전체--</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMtrlAttrCombo2", this);
            obj._setContents("<ColumnInfo><Column id=\"ATTR_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"ATTR_NM\">--전체--</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"ATTR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"ATTR_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYear", this);
            obj._setContents("<ColumnInfo><Column id=\"READ_DAY\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM11", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_excelData", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"Column1\" size=\"256\" type=\"STRING\"/><Column id=\"Column2\" size=\"256\" type=\"STRING\"/><Column id=\"Column3\" size=\"256\" type=\"STRING\"/><Column id=\"Column4\" size=\"256\" type=\"STRING\"/><Column id=\"Column5\" size=\"256\" type=\"STRING\"/><Column id=\"Column6\" size=\"256\" type=\"STRING\"/><Column id=\"Column7\" size=\"256\" type=\"STRING\"/><Column id=\"Column8\" size=\"256\" type=\"STRING\"/><Column id=\"Column9\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompBody00", "absolute", "0", "46", null, null, "15", "10", this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "10", this.divViewCompBody00);
            obj.set_scrollbars("none");
            obj.set_taborder("7");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new FileUpload("FileUpload", "absolute", null, "0", "83", "25", "3", null, this.divViewCompBody00);
            obj.getSetter("objNm").set("엑셀업로드");
            obj.getSetter("retry").set("0");
            obj.style.set_itemheight("25");
            obj.style.set_buttonsize("83");
            obj.style.set_editborder("0 none white");
            obj.style.set_editcolor("black");
            obj.style.set_buttonbackground("#6f7786ff");
            obj.style.set_buttonborder("1 solid #808080ff");
            obj.style.set_buttoncolor("#ffffffff");
            obj.style.set_buttontext("엑셀업로드");
            obj.set_taborder("8");
            obj.set_index("0");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "30", null, null, "0", "38", this.divViewCompBody00);
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
            obj.set_taborder("9");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"400\"/><Column size=\"97\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"70\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"자재코드\"/><Cell col=\"1\" style=\"align:center;\" text=\"자재명\"/><Cell col=\"2\" text=\"자재분류\"/><Cell col=\"3\" text=\"자재분류명\"/><Cell col=\"4\" text=\"단위\"/><Cell col=\"5\" text=\"서브자제그룹\"/><Cell col=\"6\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:MTRL_CD\" tooltiptext=\"bind:MTRL_CD\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:MTRL_NM\" tooltiptext=\"bind:MTRL_NM\"/><Cell col=\"2\" text=\"bind:MTRL_GRP_ID\" tooltiptext=\"bind:MTRL_GRP_ID\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:MTRL_GRP_NM\" tooltiptext=\"bind:MTRL_GRP_NM2\"/><Cell col=\"4\" text=\"bind:BASIC_UNIT\"/><Cell col=\"5\" text=\"bind:SUB_MTRL_GRP_NM\"/><Cell col=\"6\" displaytype=\"checkbox\" text=\"bind:ALT_USE\"/></Band></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Div("divViewCompCond00", "absolute", "0", "0", null, "36", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);
            obj = new Edit("edtMtrlCd", "absolute", "170", "5", "161", "24", null, null, this.divViewCompCond00);
            obj.getSetter("objNm").set("품목코드");
            obj.set_taborder("5");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staTtl", "absolute", "0", "5", "170", "24", null, null, this.divViewCompCond00);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.set_taborder("6");
            obj.set_text("자재코드/명");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Edit("edtMtrlNm", "absolute", "333", "5", "220", "24", null, null, this.divViewCompCond00);
            obj.getSetter("objNm").set("품목명");
            obj.set_taborder("8");
            this.divViewCompCond00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");

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
            obj = new Layout("default", "", 1220, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("frmSearchCond");
            		p.set_titletext("품목관리리스트");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("grdListFormatId","divViewCompBody00.grdList","formatid","dsObjBindGrid","grdList");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","divCondition.edtTtl","value","dsCondition","TTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","divCondition.cboCdEvalRunStts","value","dsCondition","CD_EVAL_RUN_STTS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","Div_SOption.me_PrNo","value","ds_searchPrNo","PR_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","Div_SOption.cb_PrItemStatus","value","ds_SearchOpt","CD_PR_ITEM_STTS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Div_SOption.cd_WriteDayS","value","ds_SearchOpt","REQ_DT_S");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Div_SOption.cd_WriteDayE","value","ds_SearchOpt","REQ_DT_E");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Div_SOption.ed_RrqrNm","value","ds_SearchOpt","REQR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Div_SOption.ed_MtrlGrpId","value","ds_SearchOpt","MTRL_GRP_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Div_SOption.ed_MtrlCd","value","ds_SearchOpt","MTRL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Div_SOption.ed_MtrlGrpNm","value","ds_SearchOpt","MTRL_GRP_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","Div_SOption.ed_RrqrId","value","ds_SearchOpt","REQR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","Div_SOption.ed_CrtrId00","value","ds_SearchOpt","MTRL_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Div_SOption.ed_PchrgrId","value","ds_SearchOpt","PCHRGR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Div_SOption.ed_PchrgrNm","value","ds_SearchOpt","PCHRGR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","div_Search.cbo_prItemStatus","value","dsCondition","PCHRGR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","div_Search.cbo_bsnsPlc","value","dsCondition","PORG_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","divCondition1.edtEvalChrgrNm","value","dsCondition","EVAL_CHRGR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","divCondition1.edtEvalChrgrId","value","dsCondition","EVAL_CHRGR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item48","divCondition1.cboCdScjdEvalType","value","dsCondition","CD_DOC_CTGR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPagingVi","divViewCompBody00.divPaging","visible","dsObjBindVi","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPagingEn","divViewCompBody00.divPaging","enable","dsObjBindEn","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtMtrlCdVi","divViewCompCond00.edtMtrlCd","visible","dsObjBindVi","edtMtrlCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtMtrlCdEn","divViewCompCond00.edtMtrlCd","readonly","dsObjBindEn","edtMtrlCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTtlVi","divViewCompCond00.staTtl","visible","dsObjBindVi","staTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTtlEn","divViewCompCond00.staTtl","enable","dsObjBindEn","staTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtMtrlNmVi","divViewCompCond00.edtMtrlNm","visible","dsObjBindVi","edtMtrlNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtMtrlNmEn","divViewCompCond00.edtMtrlNm","readonly","dsObjBindEn","edtMtrlNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","divViewCompCond00.edtMtrlCd","value","dsCondition","MTRL_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","divViewCompCond00.edtMtrlNm","value","dsCondition","MTRL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("FileUploadVi","divViewCompBody00.FileUpload","visible","dsObjBindVi","FileUpload");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("FileUploadEn","divViewCompBody00.FileUpload","enable","dsObjBindEn","FileUpload");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
        };
        
        // User Script
        this.registerScript("BMtrlList.xfdl", function(exports) {
        /**
         * @파일명       	: BMtrlList.xfdl
         * @생성자       	: 정준화
         * @생성일자     	: 2017. 9. 11.
         * @설명			: 품목관리 리스트
         * @최종수정자		: 정준화
         * @최종수정일자	: 2017. 9. 11.
        */  

        var length; 	//길이 구하는 변수
        var idNum; 		//속성ID/명 1,2,3

        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {
        	var param = [
        				//	 {code:"EV21", sSelectType:"A"} // 평가상태
        					{code:"CM11", sSelectType:""} // 단위
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
        // 	var sArg = [ 
        // 				{ttl:this.btnFold, body:this.divViewCompCond01, initFold:true}
        // 		   ];		   
        // 	gfnDivFold(this, sArg);
        }

        /**
          * @함수명	: fnFormOnload
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.LoadEventInfo(이벤트변수)
          * @desc     	: 폼 onload이벤트
          */
        this.fnFormOnload = function(obj,e)
        {
        	var sArgEx = {
        					isTran:"Y", tranNm:"BMtrlService.searchMtrl", dsParam:this.dsCondition
        				}
         	gfnSetGrdFunc(this.divViewCompBody00.grdList, this.divViewCompBody00.divPaging, this, sArgEx);
         	
        	this.dsCondition.addRow();
        	
        	//디폴트 값 세팅
            this.dsCondition.setColumn(0,"BRANCH_CD",application.gdsUserInfo.getColumn(0, "BRANCH_CD"));
           	gfnSetObj("A");
           	
           	if(application.gdsUserRole.getCaseCount("ROLE_ID =='B_WEBMASTER'")>0){
        		this.divViewCompBody00.FileUpload.set_visible(true);
           	}
         	this.fnSearch();
         	

        }

        /**
          * @함수명	: fnClose
          * @desc     	: (공통버튼)닫기
          */
        this.fnClose = function()
        {	
        	return true;
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

        	var sSvcID = "searchMtrl";
        	var sController = "epro.mtrl.service.BMtrlService.searchMtrl";
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
          * @input    	: strSvcID(트랜잭션 ID), strErrCd(트랜잭션 결과 코드), strErrMsg(트랜잭션 결과 메시지)
          * @desc     	: Transaction Callback함수
          */
        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	if(strErrCd < 0) return;
        	
        	switch(strSvcID){
        		case "searchMtrl" :
        		break;
        		case "saveExcel" :
        			alert("엑셀업로드 성공하였습니다.");
        		break;
        		
        		
        		default:
        		break;	
        	}
        }

        /**
          * @함수명	: fnPopCallBack
          * @input    	: sPopupId(팝업ID), rtn(팝업에서 리턴하는 문자열)
          * @desc     	: 팝업 CallBack 함수
          */
        this.fnPopCallBack = function(sPopupId,rtn)
        {
        	if(gfnIsNull(rtn)) return;
        }

        /**
          * @함수명	: fnEnterOnkeyup
          * @input    	: obj:Edit(에디트 오브젝트), e:nexacro.KeyEventInfo(이벤트변수)
          * @desc     	: 검색조건에서 ENTER(keycode::13) 입력시 이벤트를 발생시킨다. 
          */
        this.fnEnterOnkeyup = function(obj,e)
        {
        	if(e.keycode == "13"){
        		if(obj.name == "edtMtrlCd" || obj.name == "edtMtrlNm"){
        			this.fnSearch();
        		} else{
        			this.fnSearch();
        		}
        	}
        }

        /**
          * @함수명	: fnOntextchanged
          * @input    	: obj:Edit(에디트 오브젝트), e:nexacro.TextChangedEventInfo(이벤트변수)
          * @desc     	: 검색조건에서 에디트에 바인딩 된 데이터셋 값이 변경될 때 값을 공백("")으로 변경한다.
          */
        this.fnOntextchanged = function(obj,e)
        {	

        }

        

        
        this.FileUpload_onitemchanged = function(obj,e)
        {
        	//this.divViewCompBody00.FileUpload.set_uploadurl(application.gvDomain + "/controller/updown/upExcelTempFile?callModule=BMtrlService&methodName=saveMtrlToExcel"); 
        	this.divViewCompBody00.FileUpload.set_uploadurl(application.gvDomain + "/controller/updown/upExcelTempFile?callModule=&methodName="); 
         	this.divViewCompBody00.FileUpload.upload();
         	
         	this.divViewCompBody00.FileUpload.deleteItem(0);
        	this.divViewCompBody00.FileUpload.appendItem();
         	
         	this.setWaitCursor(true);
        }
        this.FileUpload01_onsuccess = function(obj,e)
        {
        	this.setWaitCursor(false);

        	if(e.datasets[0]){
        		//gfnAlert("EPRO_LABEL_00943");
        		this.ds_excelData.copyData(e.datasets[0]);
        		var sSvcID = "saveExcel";
        		var sController = "epro.mtrl.service.BMtrlService.saveMtrlToExcel";
        		var sInDatasets = "ds_output=ds_excelData:A";
        		var sOutDatasets = "";
        		var sCallbackFunc = "fnTrCallBack";
        			
        		gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);  
        	}
        }
        this.FileUpload_onerror = function(obj,e)
        {
        	this.setWaitCursor(false);
        	gfnAlert("EPRO_LABEL_00942");
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.divViewCompBody00.FileUpload.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.divViewCompBody00.FileUpload.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.divViewCompBody00.FileUpload.addEventHandler("onsuccess", this.FileUpload01_onsuccess, this);
            this.divViewCompCond00.edtMtrlCd.addEventHandler("onkeyup", this.fnEnterOnkeyup, this);
            this.divViewCompCond00.edtMtrlNm.addEventHandler("onkeyup", this.fnEnterOnkeyup, this);

        };

        this.loadIncludeScript("BMtrlList.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
