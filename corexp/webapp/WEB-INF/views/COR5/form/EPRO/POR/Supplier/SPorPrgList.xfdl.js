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
                this.set_name("SPorPrgList");
                this.set_titletext("발주진행현황");
                this._setFormPosition(0,0,1220,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCdCM10", this);
            obj._setContents("");
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
            obj._setContents("<ColumnInfo><Column id=\"RFQ_REQ_NO\" size=\"20\" type=\"STRING\"/><Column id=\"RFQ_ODR\" size=\"256\" type=\"INT\"/><Column id=\"CD_RFQ_STTS\" size=\"40\" type=\"STRING\"/><Column id=\"CD_DOC_CTGR\" size=\"40\" type=\"STRING\"/><Column id=\"TTL\" size=\"100\" type=\"STRING\"/><Column id=\"RFQ_CLOSE_DAY\" size=\"8\" type=\"STRING\"/><Column id=\"RFQ_CLOSE_TIME\" size=\"6\" type=\"STRING\"/><Column id=\"GOALAMT\" size=\"15\" type=\"INT\"/><Column id=\"CHRGR_NM\" size=\"50\" type=\"STRING\"/><Column id=\"REQ_DT\" size=\"256\" type=\"DATE\"/><Column id=\"ITEM_CNT\" size=\"20\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"20\" type=\"STRING\"/><Column id=\"TNDR_NO\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCondition", this);
            obj._setContents("<ColumnInfo><Column id=\"PO_DAY_STR\" type=\"STRING\" size=\"256\"/><Column id=\"PO_DAY_END\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PO_STTS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DOC_CTGR\" type=\"STRING\" size=\"256\"/><Column id=\"PO_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PTNR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TTL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReturn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTmp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompBody00", "absolute", "0", "108", null, null, "15", "0", this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "29", null, null, "0", "37", this.divViewCompBody00);
            obj.set_autofittype("none");
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
            obj.getSetter("objNm").set("검색결과 그리드");
            obj.set_taborder("2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"289\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"146\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"운영단위\"/><Cell col=\"2\" text=\"발주번호\" combodisplaynulltext=\"CD_CNTR_STTS\"/><Cell col=\"3\" text=\"발주명\"/><Cell col=\"4\" text=\"구매유형\"/><Cell col=\"5\" text=\"품목수\"/><Cell col=\"6\" text=\"총금액\"/><Cell col=\"7\" text=\"통화\"/><Cell col=\"8\" text=\"발주일자\"/><Cell col=\"9\" text=\"담당자\"/><Cell col=\"10\" text=\"지급조건\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\" expandshow=\"hide\"/><Cell col=\"1\" text=\"bind:BRANCH_NM\"/><Cell col=\"2\" edittype=\"none\" cssclass=\"cell_link\" text=\"bind:PO_NO\" maskchar=\" \"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:TTL\" tooltiptext=\"bind:TTL\"/><Cell col=\"4\" text=\"bind:CD_DOC_CTGR_NM\"/><Cell col=\"5\" style=\"align:right;\" text=\"bind:ITM_CNT\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:TOT_AMT\" mask=\"#,##0\"/><Cell col=\"7\" text=\"bind:CD_PO_CRNC_NM\"/><Cell col=\"8\" displaytype=\"date\" text=\"bind:PO_DAY\" mask=\"yyyy.MM.dd\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" cssclass=\"cell_link\" text=\"bind:WRTR_NM\"/><Cell col=\"10\" text=\"bind:CD_PYMT_CNDTN_NM\"/></Band></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "9", this.divViewCompBody00);
            obj.getSetter("objNm").set("페이징");
            obj.set_scrollbars("none");
            obj.set_taborder("3");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnPoRcpt", "absolute", null, "0", "87", "24", "105", null, this.divViewCompBody00);
            obj.set_taborder("0");
            obj.set_text("발주접수");
            obj.set_cssclass("btn_WF_Ssign");
            obj.getSetter("objNm").set("발주접수");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnPoChgReq", "absolute", null, "0", "100", "24", "0", null, this.divViewCompBody00);
            obj.set_taborder("1");
            obj.set_text("발주변경요청");
            obj.set_cssclass("btn_WF_Ssign");
            obj.getSetter("objNm").set("발주변경요청");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Div("divViewCompCond00", "absolute", "0", "0", null, "36", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.style.set_align("center");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            obj = new Div("divPoDay", "absolute", "892", "5", "250", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.getSetter("objNm").set("발주일자");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Combo("cboDocCtgr", "absolute", "573", "5", "170", "24", null, null, this.divViewCompCond00);
            this.divViewCompCond00.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_innerdataset("dsCdCM10");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("구매유형");
            obj = new Static("staPoDay", "absolute", "774", "5", "118", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("0");
            obj.set_text("발주일자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staDocCtgr", "absolute", "455", "5", "118", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("4");
            obj.set_text("구매유형");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staPoNo", "absolute", "0", "5", "170", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("6");
            obj.set_text("발주번호");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Edit("edtPoNo", "absolute", "170", "5", "285", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("7");
            obj.getSetter("objNm").set("발주번호");
            this.divViewCompCond00.addChild(obj.name, obj);

            obj = new Div("divViewCompCond01", "absolute", "0", "35", null, "56", "15", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_SearchBg");
            obj.getSetter("objNm").set("");
            this.addChild(obj.name, obj);
            obj = new Static("staWarning", "absolute", "-1", "35", null, "19", "0", null, this.divViewCompCond01);
            obj.set_taborder("6");
            obj.set_text("- 검색조건 없이 검색 시 속도가 저하 될 수 있습니다.");
            obj.set_cssclass("sta_WF_SearchText");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staTtl", "absolute", "0", "5", "170", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("7");
            obj.set_text("발주명");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtTtl", "absolute", "170", "5", "285", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("8");
            obj.getSetter("objNm").set("발주명");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staBranchCd", "absolute", "455", "5", "118", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("10");
            obj.set_text("운영단위");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divBranchCd", "absolute", "573", "5", "170", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("11");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("운영단위");
            obj.set_url("CCOMP::CompBranchCd.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);

            obj = new Button("btnFold", "absolute", "45.66%", "91", "56", "17", null, null, this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Fold_Close");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.set_text("Div00");

            	}
            );
            this.divViewCompBody00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 36, this.divViewCompCond00,
            	//-- Layout function
            	function(p) {
            		p.set_cssclass("div_WF_SearchBg");
            		p.style.set_align("center");
            		p.set_taborder("0");

            	}
            );
            this.divViewCompCond00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 56, this.divViewCompCond01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.set_cssclass("div_WF_SearchBg");
            		p.getSetter("objNm").set("");

            	}
            );
            this.divViewCompCond01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1220, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("발주진행현황");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item21","divViewCompCond01.edtTtl","value","dsCondition","TTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","divViewCompCond00.cboDocCtgr","value","dsCondition","CD_DOC_CTGR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divViewCompCond00.edtPoNo","value","dsCondition","PO_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPagingVi","divViewCompBody00.divPaging","visible","dsObjBindVi","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPagingEn","divViewCompBody00.divPaging","enable","dsObjBindEn","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnPoRcptVi","divViewCompBody00.btnPoRcpt","visible","dsObjBindVi","btnPoRcpt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnPoRcptEn","divViewCompBody00.btnPoRcpt","enable","dsObjBindEn","btnPoRcpt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnPoChgReqVi","divViewCompBody00.btnPoChgReq","visible","dsObjBindVi","btnPoChgReq");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnPoChgReqEn","divViewCompBody00.btnPoChgReq","enable","dsObjBindEn","btnPoChgReq");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPoDayVi","divViewCompCond00.divPoDay","visible","dsObjBindVi","divPoDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPoDayEn","divViewCompCond00.divPoDay","enable","dsObjBindEn","divPoDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboDocCtgrVi","divViewCompCond00.cboDocCtgr","visible","dsObjBindVi","cboDocCtgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboDocCtgrEn","divViewCompCond00.cboDocCtgr","readonly","dsObjBindEn","cboDocCtgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoDayVi","divViewCompCond00.staPoDay","visible","dsObjBindVi","staPoDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoDayEn","divViewCompCond00.staPoDay","enable","dsObjBindEn","staPoDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staDocCtgrVi","divViewCompCond00.staDocCtgr","visible","dsObjBindVi","staDocCtgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staDocCtgrEn","divViewCompCond00.staDocCtgr","enable","dsObjBindEn","staDocCtgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoNoVi","divViewCompCond00.staPoNo","visible","dsObjBindVi","staPoNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoNoEn","divViewCompCond00.staPoNo","enable","dsObjBindEn","staPoNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPoNoVi","divViewCompCond00.edtPoNo","visible","dsObjBindVi","edtPoNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPoNoEn","divViewCompCond00.edtPoNo","readonly","dsObjBindEn","edtPoNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTtlVi","divViewCompCond01.staTtl","visible","dsObjBindVi","staTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTtlEn","divViewCompCond01.staTtl","enable","dsObjBindEn","staTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTtlVi","divViewCompCond01.edtTtl","visible","dsObjBindVi","edtTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTtlEn","divViewCompCond01.edtTtl","readonly","dsObjBindEn","edtTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staBranchCdVi","divViewCompCond01.staBranchCd","visible","dsObjBindVi","staBranchCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staBranchCdEn","divViewCompCond01.staBranchCd","enable","dsObjBindEn","staBranchCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divBranchCdVi","divViewCompCond01.divBranchCd","visible","dsObjBindVi","divBranchCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divBranchCdEn","divViewCompCond01.divBranchCd","enable","dsObjBindEn","divBranchCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnFoldVi","btnFold","visible","dsObjBindVi","btnFold");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnFoldEn","btnFold","enable","dsObjBindEn","btnFold");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompCalFromTo.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompBranchCd.xfdl");
        };
        
        // User Script
        this.registerScript("SPorPrgList.xfdl", function(exports) {
        /**
         * @파일명			: SPorPrgList
         * @생성자			: 한의봉
         * @생성일시		: 2019. 04. 26.
         * @설명			: 발주진행현황
         * @최종수정자		: 한의봉
         * @최종수정일시	: 2019. 04. 26.
        */  

        
        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {
        	var param = [
        					 {code:"CM10", sSelectType:"A"}
        				];				
        	gfnGetCode(this, param);
        }

        /**
          * @함수명	: FormOninit
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.InitEventInfo(이벤트변수)
          * @desc     	: 폼 oninit이벤트
          */
        this.FormOninit = function(obj,e)
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
        				{ttl:this.btnFold, body:this.divViewCompCond01,initFold:true}
        		   ];		   
        	gfnDivFold(this, sArg);
        }
        /**
          * @함수명	: fnFormOnload
          * @input    	: obj:Form(폼 오브젝트), e:nexacr o.LoadEventInfo(이벤트변수)
          * @desc     	: 폼 onload이벤트
          */
        this.FormOnload = function(obj,e)
        {	
        	gfnSetObj("A");
        	//그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기(그리드 컴포넌트, 페이징div 컴포넌트, 폼오브젝트(this))
         	gfnSetGrdFunc(this.divViewCompBody00.grdList, this.divViewCompBody00.divPaging, this,{isTran:"Y", tranNm:"SPorService.searchPorPrgList", dsParam:this.dsCondition});
        	
        	this.fnFold();
        	//요청일자 셋팅
        	this.divViewCompCond00.divPoDay.fnSetDate(this.dsCondition, "PO_DAY_STR", "PO_DAY_END");
        	

        	this.dsCondition.addRow();
        	this.dsCondition.setColumn(0,"CD_DOC_CTGR", "");
        	this.dsCondition.setColumn(0,"PO_DAY_STR",gfnAddMonth(gfnToday(), -1));
         	this.dsCondition.setColumn(0,"PO_DAY_END",gfnToday());
         	
        	this.fnSearch();
        }

        /**
          * @함수명	: fnPreSearch
          * @desc     	: 조회 전 처리
          */
        this.fnPreSearch = function()
        {
        	this.dsCondition.setColumn(0, "BRANCH_CD", this.divViewCompCond01.divBranchCd.cboBranchCd.value);
        	return true;
        }

        /**
          * @함수명	: fnSearch
          * @desc     	: 조회 프로세스
          */
        this.fnSearch = function(svcId)
        {
        	if(!this.fnPreSearch()) return false;
        	
        	var sSvcID = "search";
        	var sController = "epro.por.service.SPorService.searchPorPrgList";
        	var sInDatasets = "dsCondition=dsCondition";
        	var sOutDatasets = "dsList=dsList";
        	var sCallbackFunc = "fnTrCallBack";
        		
         	var	oPaging = [      
                            {inDs:this.dsCondition, grid:this.divViewCompBody00.grdList, divPaging:this.divViewCompBody00.divPaging}
                        ];
             gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc, oPaging);
        }

        /**
          	@function	 btnPoRcpt_onclick()
          	@desc  		 발주접수
         */
        this.btnPoRcpt_onclick = function(obj,e)
        {
        	var rtn = gfnGetChkRowString(this.dsList);
        	
        	if(!rtn) return;
        	
        	this.dsReturn.loadXML(rtn);
        	
        	if(!gfnConfirm("신규발주를 접수 하시겠습니까?")) return;
        	
        	var sSvcID = "receipt";
        	var sController = "epro.por.service.SPorService.updatePorReceipt";
        	var sInDatasets = "inDs=dsReturn";
        	var sOutDatasets = "";
        	var sCallbackFunc = "fnTrCallBack";

             gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
          	@function	 btnPoChgReq_onclick()
          	@desc  		 발주변경요청
         */
        this.btnPoChgReq_onclick = function(obj,e)
        {
        	if(!gfnGetChkRowString(this.dsList)) return;
        	
        	var sArg = {};
        	gfnModalPop(this,"PopupPoChgReq", "SPOR::SPorChgReqPopUp.xfdl", sArg, "fnPopCallBack",400,300);
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
        		case "search" :
        		break;

        		case "receipt" :
        			gfnAlert("접수되었습니다.");
        			this.fnSearch();
        		break;
        				
        		case "changeReq" :
        			gfnAlert("변경요청되었습니다.");
        			this.fnSearch();
        		break;		
        				
        		default:
        		break;	
        	}
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
        		case "PopupPoChgReq" :
        			
        			this.dsTmp.loadXML(gfnGetChkRowString(this.dsList));

        			for(var i=0; i<this.dsTmp.getRowCount(); i++)
        			{
        				this.dsTmp.setColumn(i, "CNCL_RSN", this.dsReturn.getColumn(0, "CNCL_RSN"));
        			}

        			var sSvcID = "changeReq";
        			var sController = "epro.por.service.SPorService.updatePorChgReq";
        			var sInDatasets = "inDs=dsTmp";
        			var sOutDatasets = "";
        			var sCallbackFunc = "fnTrCallBack";
        			
        			gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        		break;

        		default:
        		break;	
        	}
        }

        /**
          * @함수명	: grdListOnCelldblclick
          * @desc     	: 그리드 더블클릭 이벤트
          */
        this.grdListOnCelldblclick = function(obj,e)
        {
        	if(gfnIsNull(this.dsList.getColumn(e.row,gfnGrdBindColId(obj, e.cell)))) return false;

        	if(gfnGrdBindColId(obj, e.cell)=="PO_NO"){
        		gfnSetTmprData("PO_NO" ,this.dsList.getColumn(e.row, "PO_NO"));
        		gfnSetTmprData("BRANCH_CD", this.dsList.getColumn(e.row, "BRANCH_CD"));
        		gfnOpenMenuUrl("SPOR::SPorDetail");
        	}else if(gfnGrdBindColId(obj, e.cell)=="WRTR_NM"){
        		var sArg = {	 branch_cd : this.dsList.getColumn(e.row, "BRANCH_CD")
        						,  agv_id : this.dsList.getColumn(e.row, "WRTR_ID")
        					};
        		gfnModalPop(this,"PopupUserInfo", "CPOP::BUserInfoPopup.xfdl", sArg, "fnPopCallBack",400,250);
        		
        	}
        }

        

        /**
          	@function	 fnEnterOnkeyup()
          	@desc  		 Enter or BackSpace 처리.
         */
        this.fnKeydown = function(obj,e)
        {
        	obj.updateToDataset();
        	//Enter 입력시
        	if(e.keycode == "13")
        	{
        		if(obj.name == "edtPoNo"|| obj.name == "edtTtl")
        		{
        			this.fnSearch();
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.FormOninit, this);
            this.addEventHandler("onload", this.FormOnload, this);
            this.divViewCompBody00.grdList.addEventHandler("oncelldblclick", this.grdListOnCelldblclick, this);
            this.divViewCompBody00.btnPoRcpt.addEventHandler("onclick", this.btnPoRcpt_onclick, this);
            this.divViewCompBody00.btnPoChgReq.addEventHandler("onclick", this.btnPoChgReq_onclick, this);
            this.divViewCompCond00.staPoDay.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond00.staDocCtgr.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond00.staPoNo.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond00.edtPoNo.addEventHandler("onkeydown", this.fnKeydown, this);
            this.divViewCompCond01.staTtl.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.divViewCompCond01.edtTtl.addEventHandler("onkeydown", this.fnKeydown, this);
            this.divViewCompCond01.staBranchCd.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.btnFold.addEventHandler("onclick", this.btnFold_onclick, this);

        };

        this.loadIncludeScript("SPorPrgList.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
