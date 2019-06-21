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
                this.set_name("BRfqRstList");
                this.set_titletext("입찰실적( 단가 )");
                this._setFormPosition(0,0,1220,768);
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
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"RFQ_REQ_NO\" size=\"20\" type=\"STRING\"/><Column id=\"TTL\" size=\"100\" type=\"STRING\"/><Column id=\"CD_RFQ_AIM\" size=\"40\" type=\"STRING\"/><Column id=\"CD_DOC_CTGR\" size=\"40\" type=\"STRING\"/><Column id=\"RFQ_CLOSE_DAY_FROM\" size=\"256\" type=\"STRING\"/><Column id=\"RFQ_CLOSE_DAY_TO\" size=\"256\" type=\"STRING\"/><Column id=\"RFQ_REQ_ITEM_ID\" size=\"20\" type=\"STRING\"/><Column id=\"CHRGR_ID\" size=\"20\" type=\"STRING\"/><Column id=\"CHRGR_NM\" size=\"50\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"MTRL_CD\" size=\"256\" type=\"STRING\"/><Column id=\"MTRL_NM\" size=\"256\" type=\"STRING\"/><Column id=\"LANG_CD\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_PWIN\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdET27", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompCond01", "absolute", "0", "35", null, "113", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.getSetter("objNm").set("");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            obj = new Static("staChrgr", "absolute", "0", "63", "170", "24", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("objNm").set("입찰담당자");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.set_taborder("9");
            obj.set_text("입찰담당자");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtChrgrId", "absolute", "170", "63", "85", "24", null, null, this.divViewCompCond01);
            obj.set_cssclass("readonly");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("10");
            obj.getSetter("objNm").set("입찰담당자ID");
            obj.set_taborder("10");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtChrgrNm", "absolute", "260", "63", "135", "24", null, null, this.divViewCompCond01);
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("입찰담당자명");
            obj.set_taborder("11");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Button("btnEvalReqr", "absolute", "398", "63", "21", "24", null, null, this.divViewCompCond01);
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("평가담당자 검색 버튼");
            obj.set_taborder("12");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtRfqReqNo", "absolute", "170", "34", "250", "24", null, null, this.divViewCompCond01);
            obj.getSetter("objNm").set("입찰요청번호");
            obj.style.set_align("left middle");
            obj.set_taborder("7");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staRfqReqNo", "absolute", "0", "34", "170", "24", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("objNm").set("입찰요청번호");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.set_taborder("6");
            obj.set_text("입찰요청번호");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staWarning", "absolute", "0", "92", null, "19", "0", null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_SearchText");
            obj.set_taborder("49");
            obj.set_text("- 검색조건 없이 검색 시 속도가 저하 될 수 있습니다.");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtTtl", "absolute", "170", "5", "250", "24", null, null, this.divViewCompCond01);
            obj.getSetter("objNm").set("입찰요청명");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("left middle");
            obj.set_taborder("50");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staTtl", "absolute", "0", "5", "170", "24", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("objNm").set("입찰요청명");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.set_taborder("51");
            obj.set_text("입찰요청명");
            this.divViewCompCond01.addChild(obj.name, obj);

            obj = new Div("divViewCompBody00", "absolute", "0", "164", null, null, "15", "0", this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "10", null, null, "0", "37", this.divViewCompBody00);
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/><Column size=\"50\"/><Column size=\"300\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"173\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"65\"/><Column size=\"120\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"입찰번호\" tooltiptext=\"\"/><Cell col=\"1\" expr=\"\" text=\"차수\" tooltiptext=\"\"/><Cell col=\"2\" expr=\"\" text=\"입찰요청명\" tooltiptext=\"\"/><Cell col=\"3\" expr=\"\"/><Cell col=\"4\" expr=\"\" text=\"자재코드\"/><Cell col=\"5\" expr=\"\" text=\"자재명\"/><Cell col=\"6\" expr=\"\" text=\"Vendor\"/><Cell col=\"7\" expr=\"\"/><Cell col=\"8\" expr=\"\" text=\"단가\"/><Cell col=\"9\" expr=\"\" text=\"통화\"/><Cell col=\"10\" expr=\"\" text=\"단위\"/><Cell col=\"11\" expr=\"\"/></Band><Band id=\"body\"><Cell combodisplay=\"edit\" style=\"selectcolor: ;\" text=\"bind:RFQ_REQ_NO\" tooltiptext=\"bind:RFQ_REQ_NO\"/><Cell col=\"1\" style=\"align:center;\" text=\"bind:RFQ_ODR\" tooltiptext=\"bind:RFQ_ODR\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:TTL\" tooltiptext=\"bind:TTL\"/><Cell col=\"3\" text=\"bind:CRTR_NM\" tooltiptext=\"bind:CRTR_NM\"/><Cell col=\"4\" style=\"align:center;\" text=\"bind:MTRL_CD\" tooltiptext=\"bind:MTRL_CD\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:MTRL_NM\" tooltiptext=\"bind:MTRL_NM\"/><Cell col=\"6\" text=\"bind:SAP_VENDOR\" tooltiptext=\"bind:SAP_VENDOR\"/><Cell col=\"7\" style=\"align:left;\" text=\"bind:PTNR_NM\" tooltiptext=\"bind:PTNR_NM\"/><Cell col=\"8\" displaytype=\"number\" mask=\"!#,##0.0000\" style=\"align:right;\" text=\"bind:RFQ_PRICE\" tooltiptext=\"bind:RFQ_PRICE\"/><Cell col=\"9\" text=\"bind:CD_RFQ_CRNC_NM\" tooltiptext=\"bind:CD_RFQ_CRNC_NM\"/><Cell col=\"10\" text=\"bind:CD_UNIT_NM\" tooltiptext=\"bind:CD_UNIT_NM\"/><Cell col=\"11\" text=\"expr:ALT_PWIN_PTNR==&quot;Y&quot;?gfnMultiLabel(&quot;EPRO_LABEL_00677&quot;):''\" tooltiptext=\"expr:ALT_PWIN_PTNR==&quot;Y&quot;?gfnMultiLabel(&quot;EPRO_LABEL_00677&quot;):''\"/></Band></Format><Format id=\"sap\"><Columns><Column size=\"100\"/><Column size=\"120\"/><Column size=\"88\"/><Column size=\"75\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"125\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"Vendor\"/><Cell col=\"1\" text=\"Material\"/><Cell col=\"2\" text=\"Purch. Org\"/><Cell col=\"3\" text=\"Plant\"/><Cell col=\"4\" text=\"Amount\"/><Cell col=\"5\" text=\"Unit\"/><Cell col=\"6\" text=\"Per\"/><Cell col=\"7\" text=\"Unit of Measure\"/><Cell col=\"8\" text=\"Valid From\"/><Cell col=\"9\" text=\"Valid To\"/><Cell col=\"10\" text=\"Tax code\"/><Cell col=\"11\" text=\"TK Method\"/></Band><Band id=\"body\"><Cell text=\"bind:SAP_VENDOR\"/><Cell col=\"1\" style=\"align:center;\" text=\"bind:MTRL_CD\"/><Cell col=\"2\" text=\"bind:PURCH_ORG\"/><Cell col=\"3\" text=\"bind:PLANT\"/><Cell col=\"4\" displaytype=\"number\" mask=\"!#,##0.0000\" style=\"align:right;\" text=\"bind:AMOUNT\"/><Cell col=\"5\" text=\"bind:CD_RFQ_CRNC_NM\"/><Cell col=\"6\" text=\"bind:PER\"/><Cell col=\"7\" text=\"bind:CD_UNIT_NM\"/><Cell calendardisplaynulltype=\"none\" col=\"8\" displaytype=\"date\" mask=\"yyyy-MM-dd\" style=\"align:center;\" text=\"bind:VALID_FROM\" tooltiptext=\"bind:VALID_FROM\"/><Cell col=\"9\" displaytype=\"date\" mask=\"yyyy-MM-dd\" style=\"align:center;\" text=\"bind:VALID_TO\" tooltiptext=\"bind:VALID_TO\"/><Cell col=\"10\" text=\"bind:TAX_CODE\"/><Cell col=\"11\" text=\"bind:TK_METHOD\"/></Band></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "10", this.divViewCompBody00);
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
            obj = new Static("staRfqCloseDt", "absolute", "0", "5", "170", "24", null, null, this.divViewCompCond00);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("objNm").set("입찰마감일자");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.set_taborder("2");
            obj.set_text("입찰종료일자");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Div("divRfqCloseDt", "absolute", "170", "5", "250", "24", null, null, this.divViewCompCond00);
            obj.getSetter("objNm").set("입찰마감일자");
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Combo("cboCdRfqAim", "absolute", "643", "5", "204", "24", null, null, this.divViewCompCond00);
            this.divViewCompCond00.addChild(obj.name, obj);
            obj.set_codecolumn("CD_ID");
            obj.set_cssclass("cbo_default");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_innerdataset("dsCdET27");
            obj.getSetter("objNm").set("입찰목적");
            obj.set_taborder("4");
            obj = new Static("staAim", "absolute", "473", "5", "170", "24", null, null, this.divViewCompCond00);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("objNm").set("입찰목적");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.set_taborder("5");
            obj.set_text("입찰목적");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new CheckBox("chkAltPwin", "absolute", "964", "5", "219", "24", null, null, this.divViewCompCond00);
            obj.set_falsevalue("N");
            obj.set_taborder("6");
            obj.set_text("우선협상대상만조회");
            obj.set_truevalue("Y");
            obj.set_value("N");
            this.divViewCompCond00.addChild(obj.name, obj);

            obj = new Button("btnFold", "absolute", "45.66%", "147", "56", "17", null, null, this);
            obj.set_cssclass("btn_Fold_Close");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 113, this.divViewCompCond01,
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
            		p.set_titletext("입찰실적( 단가 )");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item3","divViewCompCond01.edtChrgrId","value","dsCondition","CHRGR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","divViewCompCond01.edtChrgrNm","value","dsCondition","CHRGR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","divViewCompCond01.edtRfqReqNo","value","dsCondition","RFQ_REQ_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","divViewCompCond00.cboCdRfqAim","value","dsCondition","CD_RFQ_AIM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divViewCompCond01.edtTtl","value","dsCondition","TTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtChrgrIdVi","divViewCompCond01.edtChrgrId","visible","dsObjBindVi","edtChrgrId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtChrgrIdEn","divViewCompCond01.edtChrgrId","readonly","dsObjBindEn","edtChrgrId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtChrgrNmVi","divViewCompCond01.edtChrgrNm","visible","dsObjBindVi","edtChrgrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtChrgrNmEn","divViewCompCond01.edtChrgrNm","readonly","dsObjBindEn","edtChrgrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRfqReqNoVi","divViewCompCond01.edtRfqReqNo","visible","dsObjBindVi","edtRfqReqNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRfqReqNoEn","divViewCompCond01.edtRfqReqNo","readonly","dsObjBindEn","edtRfqReqNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTtlVi","divViewCompCond01.edtTtl","visible","dsObjBindVi","edtTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTtlEn","divViewCompCond01.edtTtl","readonly","dsObjBindEn","edtTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPagingVi","divViewCompBody00.divPaging","visible","dsObjBindVi","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPagingEn","divViewCompBody00.divPaging","enable","dsObjBindEn","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","divViewCompCond00.chkAltPwin","value","dsCondition","ALT_PWIN");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompCalFromTo.xfdl");
        };
        
        // User Script
        this.registerScript("BRptRfqRstPriceList.xfdl", function(exports) {
        /**
         * @파일명			: BRtpInfoList.xfdl
         * @생성자			: 한의봉
         * @생성일시		: 2017. 8. 31.
         * @설명			: 리포트
         * @최종수정자		: 한의봉	
         * @최종수정일시	: 2018. 1. 10.
        */  

        
        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {

        	var param = [
        					{code:"ET27", sSelectType:"A"}
        				];
        	gfnGetCode(this, param);
        }

        /**
          * @함수명	: BRfqPrgList_oninit
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.InitEventInfo(이벤트변수)
          * @desc     	: 폼 oninit이벤트
          */
        this.fnBRfqRstListOninit = function(obj,e)
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
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.LoadEventInfo(이벤트변수)
          * @desc     	: 폼 onload이벤트
          */
        this.fnBRfqRstListOnload = function(obj,e)
        {
        	
        	//그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기(그리드 컴포넌트, 페이징div 컴포넌트, 폼오브젝트(this))
         	gfnSetGrdFunc(this.divViewCompBody00.grdList, this.divViewCompBody00.divPaging, this,{isTran:"Y", tranNm:"BRptService.searchInfoRptExcel", dsParam:this.dsCondition,formatId:"sap"});
         	
         	//조회조건 Div 접기/펼치기 세팅
         	this.fnFold();
         	gfnSetObj("A");
        	this.dsCondition.addRow();

            this.dsCondition.setColumn(0,"BRANCH_CD",application.gdsUserInfo.getColumn(0, "BRANCH_CD"));

        	//입찰 마감일자 
        	this.divViewCompCond00.divRfqCloseDt.fnSetDate(this.dsCondition, "RFQ_CLOSE_DAY_FROM", "RFQ_CLOSE_DAY_TO");
        	this.dsCondition.setColumn(0, "RFQ_CLOSE_DAY_FROM", gfnAddMonth(gfnToday(), -12));//오늘일자-1month
            this.dsCondition.setColumn(0, "RFQ_CLOSE_DAY_TO", gfnToday());//오늘날짜
            
            this.dsCondition.setColumn(0,"ALT_PWIN","Y");
            this.dsCondition.setColumn(0,"CD_RFQ_AIM","");

        	
         	this.fnSearch();
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
        this.fnSearch = function(svcId)
        {
        	if(!this.fnPreSearch()) return false;
        	
         	var sSvcID = "searchRptRfqPriceRst";
         	var sController = "epro.rpt.service.BRptService.searchRptRfqPriceRst";
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
        	
        		case "searchRptRfqPriceRst" :			
        		break;

        		default:
        		break;	
        	}
        }

        /**
          * @함수명   : fnUserSearch
          * @desc     :  입찰담당자 팝업 이벤트
          */
        this.fnUserSearch = function(obj,e)
        {
        	var sArg = { 
        					agv_id:""
        					,agv_nm:this.dsCondition.getColumn(0,"USER_NM")
        			   };
        			   
        	gfnSearchComUser(this, "BUserSrchPopup", "fnPopCallBack", sArg);
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
        		case "BMtrlSrchPopup" :
        			if(!gfnIsNull(this.dsReturn.getColumn(0,"MTRL_CD"))){
        				this.dsCondition.setColumn(0,"MTRL_CD",this.dsReturn.getColumn(0,"MTRL_CD"));
        				this.dsCondition.setColumn(0,"MTRL_NM",this.dsReturn.getColumn(0,"MTRL_NM2"));
        			}
        			break;
        		case "BUserSrchPopup":
        			if(!gfnIsNull(this.dsReturn.getColumn(0,"USER_ID"))){
        					this.dsCondition.setColumn(0,"CHRGR_ID",this.dsReturn.getColumn(0,"USER_ID"));
        					this.dsCondition.setColumn(0,"CHRGR_NM",this.dsReturn.getColumn(0,"USER_NM"));
        				}
        			break;
        			
        		default:
        			break;	
        	}
        }

        /**
        	@function	fnOnTextChanged
        	@desc   	에디터 키이벤트
        */
        this.fnOnTextChanged = function(obj,e)
        {
        	if(obj.name == "edtChrgrNm") this.dsCondition.setColumn(0,"CHRGR_ID","");
        	else if(obj.name == "edtMtrlNm") this.dsCondition.setColumn(0,"MTRL_CD","");
        }

        /**
        	@function	fnKeydown
        	@desc   	에디터 키이벤트
        */
        this.fnKeydown = function(obj,e)
        {
        	if(e.keycode == "13"){
        	obj.updateToDataset();
        		if(obj.name == "edtChrgrNm"){
        			var sArg = { 
        			
        					agv_id:""
        					,agv_nm:this.divViewCompCond01.edtChrgrNm.value
        					,agv_dept:""
        			   };
        			//매개변수 ::>    form, sPopupId, CallBack Function Name, arg
        			gfnSearchComUser(this, "BUserSrchPopup", "fnPopCallBack", sArg)
        		}else if(obj.name == "edtMtrlNm"){
        			var sArg = { 
        				 agv_id: ""
        				,agv_nm: this.divViewCompCond01.edtMtrlNm.value
        		   };
        			//매개변수 ::>    form, sPopupId, CallBack Function Name, arg
        			gfnSearchComMtrl(this, "BMtrlSrchPopup", "fnPopCallBack", sArg)
        		}else if(obj.name == "edtRfqReqNo" || obj.name == "edtTtl"){
        			this.fnSearch("searchRfqList");
        		}
        	}
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.fnBRfqRstListOninit, this);
            this.addEventHandler("onload", this.fnBRfqRstListOnload, this);
            this.divViewCompCond01.edtChrgrNm.addEventHandler("onkeydown", this.fnKeydown, this);
            this.divViewCompCond01.edtChrgrNm.addEventHandler("ontextchanged", this.fnOnTextChanged, this);
            this.divViewCompCond01.btnEvalReqr.addEventHandler("onclick", this.fnUserSearch, this);
            this.divViewCompCond01.edtRfqReqNo.addEventHandler("onkeydown", this.fnKeydown, this);
            this.divViewCompCond01.edtTtl.addEventHandler("onkeydown", this.fnKeydown, this);
            this.divViewCompCond00.staRfqCloseDt.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.btnFold.addEventHandler("onclick", this.btnFold_onclick, this);

        };

        this.loadIncludeScript("BRptRfqRstPriceList.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
