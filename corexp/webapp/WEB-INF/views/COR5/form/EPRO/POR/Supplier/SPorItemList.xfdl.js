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
                this.set_name("SPorItemList");
                this.set_titletext("발주현황(품목별)");
                this._setFormPosition(0,0,1220,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCdCM10", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdPO10", this);
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
            obj._setContents("<ColumnInfo><Column id=\"PO_DAY_STR\" type=\"STRING\" size=\"256\"/><Column id=\"PO_DAY_END\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PO_STTS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DOC_CTGR\" type=\"STRING\" size=\"256\"/><Column id=\"PO_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PTNR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RCV_DT_STR\" type=\"STRING\" size=\"256\"/><Column id=\"RCV_DT_END\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReturn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompCond01", "absolute", "0", "35", null, "56", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.getSetter("objNm").set("");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            obj = new Static("staWarning", "absolute", "-1", "35", null, "19", "0", null, this.divViewCompCond01);
            obj.set_taborder("49");
            obj.set_text("- 검색조건 없이 검색 시 속도가 저하 될 수 있습니다.");
            obj.set_cssclass("sta_WF_SearchText");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staPoDay", "absolute", "0", "5", "170", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("0");
            obj.set_text("발주일자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staRcvDt", "absolute", "455", "5", "118", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("2");
            obj.set_text("발주접수일자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divPoDay", "absolute", "170", "5", "285", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.getSetter("objNm").set("발주일자");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divRcvDt", "absolute", "573", "5", "194", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.getSetter("objNm").set("발주접수일자");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staBranchCd", "absolute", "774", "5", "118", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("50");
            obj.set_text("운영단위");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divBranchCd", "absolute", "892", "5", "187", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("51");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("운영단위");
            obj.set_url("CCOMP::CompBranchCd.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);

            obj = new Div("divViewCompBody00", "absolute", "0", "108", null, null, "15", "0", this);
            obj.set_taborder("1");
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
            obj.set_taborder("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"83\"/><Column size=\"55\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"300\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"운영단위\"/><Cell col=\"1\" text=\"발주번호\" combodisplaynulltext=\"CD_CNTR_STTS\"/><Cell col=\"2\" text=\"품번\"/><Cell col=\"3\" text=\"창고\"/><Cell col=\"4\" text=\"품목코드\"/><Cell col=\"5\" text=\"품목명\"/><Cell col=\"6\" text=\"단위\"/><Cell col=\"7\" text=\"단가\"/><Cell col=\"8\" text=\"수량\"/><Cell col=\"9\" text=\"총금액\"/><Cell col=\"10\" text=\"납품요청일자\"/></Band><Band id=\"body\"><Cell text=\"bind:BRANCH_NM\" tooltiptext=\"bind:BRANCH_NM\"/><Cell col=\"1\" edittype=\"none\" cssclass=\"cell_link\" text=\"bind:PO_NO\" maskchar=\" \" tooltiptext=\"bind:PO_NO\"/><Cell col=\"2\" text=\"bind:ITM_NO\" tooltiptext=\"bind:ITM_NO\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:SL_NM\" tooltiptext=\"bind:SL_NM\"/><Cell col=\"4\" text=\"bind:MTRL_CD\" tooltiptext=\"bind:MTRL_CD\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:MTRL_NM\" tooltiptext=\"bind:MTRL_NM\"/><Cell col=\"6\" text=\"bind:CD_UNIT_NM\" tooltiptext=\"bind:CD_UNIT_NM\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PO_PRICE\" mask=\"#,##0.00\" maskchar=\"_\" suppressalign=\"first\" tooltiptext=\"bind:PO_PRICE\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:QTY\" mask=\"#,##0.00\" tooltiptext=\"bind:QTY\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TOT_AMT\" mask=\"#,##0\" tooltiptext=\"bind:TOT_AMT\"/><Cell col=\"10\" displaytype=\"date\" text=\"bind:DLV_REQ_DAY\" mask=\"yyyy.MM.dd\" calendardisplaynulltype=\"none\" tooltiptext=\"bind:DLV_REQ_DAY\"/></Band></Format><Format id=\"format_copy\"></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "9", this.divViewCompBody00);
            obj.getSetter("objNm").set("페이징");
            obj.set_scrollbars("none");
            obj.set_taborder("2");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Div("divViewCompCond00", "absolute", "0", "0", null, "36", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.style.set_align("center");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);
            obj = new Combo("cboPoStts", "absolute", "573", "5", "148", "24", null, null, this.divViewCompCond00);
            this.divViewCompCond00.addChild(obj.name, obj);
            var cboPoStts_innerdataset = new Dataset("cboPoStts_innerdataset", this.divViewCompCond00.cboPoStts);
            cboPoStts_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows/>");
            obj.set_innerdataset(cboPoStts_innerdataset);
            obj.set_taborder("3");
            obj.set_innerdataset("dsCdPO10");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("상태");
            obj = new Static("staPoStts", "absolute", "455", "5", "118", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("2");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staPoNo", "absolute", "0", "5", "170", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("0");
            obj.set_text("발주번호");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Edit("edtPoNo", "absolute", "170", "5", "285", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("1");
            obj.getSetter("objNm").set("발주번호");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staDocCtgr", "absolute", "774", "5", "118", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("4");
            obj.set_text("구매유형");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Combo("cboDocCtgr", "absolute", "892", "5", "187", "24", null, null, this.divViewCompCond00);
            this.divViewCompCond00.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_innerdataset("dsCdCM10");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("구매유형");

            obj = new Button("btnFold", "absolute", "45.66%", "91", "56", "17", null, null, this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_Fold_Close");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 56, this.divViewCompCond01,
            	//-- Layout function
            	function(p) {
            		p.set_cssclass("div_WF_SearchBg");
            		p.getSetter("objNm").set("");
            		p.set_taborder("0");

            	}
            );
            this.divViewCompCond01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
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
            		p.set_taborder("3");

            	}
            );
            this.divViewCompCond00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1220, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("발주현황(품목별)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","divViewCompCond00.cboPoStts","value","dsCondition","CD_PO_STTS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divViewCompCond00.edtPoNo","value","dsCondition","PO_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","divViewCompCond00.cboDocCtgr","value","dsCondition","CD_DOC_CTGR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoDayVi","divViewCompCond01.staPoDay","visible","dsObjBindVi","staPoDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoDayEn","divViewCompCond01.staPoDay","enable","dsObjBindEn","staPoDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRcvDtVi","divViewCompCond01.staRcvDt","visible","dsObjBindVi","staRcvDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRcvDtEn","divViewCompCond01.staRcvDt","enable","dsObjBindEn","staRcvDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPoDayVi","divViewCompCond01.divPoDay","visible","dsObjBindVi","divPoDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPoDayEn","divViewCompCond01.divPoDay","enable","dsObjBindEn","divPoDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divRcvDtVi","divViewCompCond01.divRcvDt","visible","dsObjBindVi","divRcvDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divRcvDtEn","divViewCompCond01.divRcvDt","enable","dsObjBindEn","divRcvDt");
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
            obj = new BindItem("divPagingVi","divViewCompBody00.divPaging","visible","dsObjBindVi","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPagingEn","divViewCompBody00.divPaging","enable","dsObjBindEn","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboPoSttsVi","divViewCompCond00.cboPoStts","visible","dsObjBindVi","cboPoStts");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboPoSttsEn","divViewCompCond00.cboPoStts","readonly","dsObjBindEn","cboPoStts");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoSttsVi","divViewCompCond00.staPoStts","visible","dsObjBindVi","staPoStts");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoSttsEn","divViewCompCond00.staPoStts","enable","dsObjBindEn","staPoStts");
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
            obj = new BindItem("staDocCtgrVi","divViewCompCond00.staDocCtgr","visible","dsObjBindVi","staDocCtgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staDocCtgrEn","divViewCompCond00.staDocCtgr","enable","dsObjBindEn","staDocCtgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboDocCtgrVi","divViewCompCond00.cboDocCtgr","visible","dsObjBindVi","cboDocCtgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboDocCtgrEn","divViewCompCond00.cboDocCtgr","readonly","dsObjBindEn","cboDocCtgr");
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
            this._addPreloadList("fdl", "CCOMP::CompCalFromTo.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompCalFromTo.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompBranchCd.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
        };
        
        // User Script
        this.registerScript("SPorItemList.xfdl", function(exports) {
        /**
         * @파일명			: SPorItemList
         * @생성자			: 한의봉
         * @생성일시		: 2019. 04. 26.
         * @설명			: 발주현황( 품목별 )
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
        					 {code:"PO10", sSelectType:"A", sFiltered:"D:SND,CXL,WRI,APP,WAT"}
        					 , {code:"CM10", sSelectType:"A"}
        					 
        				];				
        	gfnGetCode(this, param);
        }

        /**
          * @함수명	: BRfqPrgList_oninit
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
         	gfnSetGrdFunc(this.divViewCompBody00.grdList, this.divViewCompBody00.divPaging, this,{isTran:"Y", tranNm:"SPorService.searchPorItemList", dsParam:this.dsCondition});
         	
         	//조회조건 Div 접기/펼치기 세팅
         	this.fnFold();
         		
        	//요청일자 셋팅
        	this.divViewCompCond01.divPoDay.fnSetDate(this.dsCondition, "PO_DAY_STR", "PO_DAY_END");
        	this.divViewCompCond01.divRcvDt.fnSetDate(this.dsCondition, "RCV_DT_STR", "RCV_DT_END");
        	
        	this.dsCondition.addRow();
        	
        	this.dsCondition.setColumn(0,"CD_PO_STTS", "");
        	this.dsCondition.setColumn(0,"CD_DOC_CTGR", "");
        	this.dsCondition.setColumn(0,"PO_DAY_STR",gfnAddMonth(gfnToday(), -1));
         	this.dsCondition.setColumn(0,"PO_DAY_END",gfnToday());
        	this.dsCondition.setColumn(0,"RCV_DT_STR",gfnAddMonth(gfnToday(), -1));
         	this.dsCondition.setColumn(0,"RCV_DT_END",gfnToday());
         	
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
        	var sController = "epro.por.service.SPorService.searchPorItemList";
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
        		case "search" :
        		break;
        				
        		default:
        		break;	
        	}
        }

        /**
          	@function	 grdListOnCelldblclick()
          	@desc  		 그리드 더블클릭 이벤트
         */
        this.grdListOnCelldblclick = function(obj,e)
        {
        	if(gfnIsNull(this.dsList.getColumn(e.row,gfnGrdBindColId(obj, e.cell)))) return false;

        	if(gfnGrdBindColId(obj, e.cell)=="PO_NO")	//발주번호
        	{
        		gfnSetTmprData("PO_NO" ,this.dsList.getColumn(e.row, "PO_NO"));
        		gfnSetTmprData("BRANCH_CD", this.dsList.getColumn(e.row, "BRANCH_CD"));
        		gfnOpenMenuUrl("SPOR::SPorDetail");
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
        		if(obj.name == "edtPoNo")
        		{
        			this.fnSearch();
        		}
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

        		default:
        		break;	
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.FormOninit, this);
            this.addEventHandler("onload", this.FormOnload, this);
            this.divViewCompCond01.staPoDay.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.divViewCompCond01.staRcvDt.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond01.staBranchCd.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompBody00.grdList.addEventHandler("oncelldblclick", this.grdListOnCelldblclick, this);
            this.divViewCompCond00.staPoStts.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond00.staPoNo.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond00.edtPoNo.addEventHandler("onkeydown", this.fnKeydown, this);
            this.divViewCompCond00.staDocCtgr.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.btnFold.addEventHandler("onclick", this.btnFold_onclick, this);

        };

        this.loadIncludeScript("SPorItemList.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
