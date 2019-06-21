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
                this.set_titletext("입찰실적( 팀 )");
                this._setFormPosition(0,0,1220,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCdCM10", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUser", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"USER_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMtrl", this);
            obj._setContents("<ColumnInfo><Column id=\"MTRL_CD\" size=\"256\" type=\"STRING\"/><Column id=\"MTRL_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
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

            obj = new Dataset("dsSortItem", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CD_NM_LO\" size=\"256\" type=\"STRING\"/><Column id=\"CD_ID\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD_NM_LO\">--선택--</Col><Col id=\"CD_ID\"/></Row><Row><Col id=\"CD_NM_LO\">입찰요청번호</Col><Col id=\"CD_ID\">RFQ_REQ_NO</Col></Row><Row><Col id=\"CD_NM_LO\">입찰마감일</Col><Col id=\"CD_ID\">RFQ_CLOSE_DAY</Col></Row><Row><Col id=\"CD_NM_LO\">종료시간</Col><Col id=\"CD_ID\">RFQ_CLOSE_TIME</Col></Row><Row><Col id=\"CD_ID\">REQ_DT</Col><Col id=\"CD_NM_LO\">요청일자</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdET10", this);
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
            obj._setContents("<ColumnInfo><Column id=\"RFQ_REQ_NO\" size=\"20\" type=\"STRING\"/><Column id=\"TTL\" size=\"100\" type=\"STRING\"/><Column id=\"CD_RFQ_STTS\" size=\"40\" type=\"STRING\"/><Column id=\"CD_DOC_CTGR\" size=\"40\" type=\"STRING\"/><Column id=\"REQ_DT_FROM\" size=\"256\" type=\"STRING\"/><Column id=\"REQ_DT_TO\" size=\"256\" type=\"STRING\"/><Column id=\"RFQ_CLOSE_DAY_FROM\" size=\"256\" type=\"STRING\"/><Column id=\"RFQ_CLOSE_DAY_TO\" size=\"256\" type=\"STRING\"/><Column id=\"RFQ_REQ_ITEM_ID\" size=\"20\" type=\"STRING\"/><Column id=\"CHRGR_ID\" size=\"20\" type=\"STRING\"/><Column id=\"CHRGR_NM\" size=\"50\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"MTRL_CD\" size=\"256\" type=\"STRING\"/><Column id=\"MTRL_NM\" size=\"256\" type=\"STRING\"/><Column id=\"SRC_LVL_1\" size=\"256\" type=\"STRING\"/><Column id=\"SRC_LVL_2\" size=\"256\" type=\"STRING\"/><Column id=\"LANG_CD\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRRfq", this);
            obj._setContents("<ColumnInfo><Column id=\"RFQ_REQ_NO\" size=\"256\" type=\"STRING\"/><Column id=\"RFQ_ODR\" size=\"256\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"TKEY\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompCond01", "absolute", "0", "35", null, "55", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.getSetter("objNm").set("");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            obj = new Static("staRfqSrc", "absolute", "0", "5", "170", "24", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("objNm").set("소싱그룹");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.set_taborder("6");
            obj.set_text("소싱그룹");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divComp01", "absolute", "170", "5", "250", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("7");
            obj.set_url("CCOMP::CompSrcType.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staWarning", "absolute", "0", "34", null, "19", "0", null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_SearchText");
            obj.set_taborder("8");
            obj.set_text("- 검색조건 없이 검색 시 속도가 저하 될 수 있습니다.");
            this.divViewCompCond01.addChild(obj.name, obj);

            obj = new Div("divViewCompBody00", "absolute", "0", "107", null, null, "15", "0", this);
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
            obj.getSetter("titletext").set("입찰실적( 팀 )");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"650\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"구매팀\"/><Cell col=\"1\" expr=\"\" text=\"총건수\"/><Cell col=\"2\" expr=\"\" text=\"낙찰건수\"/><Cell col=\"3\" expr=\"\" text=\"Pending건수\"/><Cell col=\"4\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:CD_DEPT_NM\" tooltiptext=\"bind:CD_DEPT_NM\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TOT_CNT\" tooltiptext=\"bind:TOT_CNT\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CLO_CNT\" tooltiptext=\"bind:CLO_CNT\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PEN_CNT\" tooltiptext=\"bind:PEN_CNT\"/><Cell col=\"4\"/></Band></Format></Formats>");
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
            obj.set_taborder("0");
            obj.set_text("입찰종료일자");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Div("divRfqCloseDt", "absolute", "170", "5", "250", "24", null, null, this.divViewCompCond00);
            obj.getSetter("objNm").set("입찰마감일자");
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.divViewCompCond00.addChild(obj.name, obj);

            obj = new Button("btnFold", "absolute", "45.66%", "90", "56", "17", null, null, this);
            obj.set_cssclass("btn_Fold_Close");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 55, this.divViewCompCond01,
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
            		p.set_titletext("입찰실적( 팀 )");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("divPagingVi","divViewCompBody00.divPaging","visible","dsObjBindVi","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPagingEn","divViewCompBody00.divPaging","enable","dsObjBindEn","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("grdListFormatId","divViewCompBody00.grdList","formatid","dsObjBindGrid","grdList");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","btnFold","visible","dsObjBindVi","btnFold");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","btnFold","enable","dsObjBindEn","btnFold");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqCloseDtVi","divViewCompCond00.staRfqCloseDt","visible","dsObjBindVi","staRfqCloseDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqCloseDtEn","divViewCompCond00.staRfqCloseDt","enable","dsObjBindEn","staRfqCloseDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divRfqCloseDtVi","divViewCompCond00.divRfqCloseDt","visible","dsObjBindVi","divRfqCloseDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divRfqCloseDtEn","divViewCompCond00.divRfqCloseDt","enable","dsObjBindEn","divRfqCloseDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqSrcVi","divViewCompCond01.staRfqSrc","visible","dsObjBindVi","staRfqSrc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRfqSrcEn","divViewCompCond01.staRfqSrc","enable","dsObjBindEn","staRfqSrc");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompSrcType.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompCalFromTo.xfdl");
        };
        
        // User Script
        this.registerScript("BRptRfqRstTeamList.xfdl", function(exports) {
        /**
         * @파일명			: BRfqRfqRstTeamList.xfdl
         * @생성자			: 입찰실적( 팀 )
         * @생성일시		: 2018.01.19.
         * @설명			: 입찰실적( 팀 )
         * @최종수정자		: 한의봉	
         * @최종수정일시	: 2018.01.19.
        */  

        
        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {

        	var param = [
        			
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
         	gfnSetGrdFunc(this.divViewCompBody00.grdList, this.divViewCompBody00.divPaging, this,{isTran:"Y", tranNm:"BRptService.searchRptRfqTeamRst", dsParam:this.dsCondition});
         	
         	//조회조건 Div 접기/펼치기 세팅
         	this.fnFold();
         	
         	this.divViewCompCond00.divRfqCloseDt.fnSetDate(this.dsCondition, "RFQ_CLOSE_DAY_FROM", "RFQ_CLOSE_DAY_TO");
        	this.dsCondition.addRow();
        	this.dsCondition.setColumn(0, "RFQ_CLOSE_DAY_FROM", gfnAddMonth(gfnToday(), -12));//오늘일자-1month
            this.dsCondition.setColumn(0, "RFQ_CLOSE_DAY_TO", gfnToday());//오늘날짜
        	
        	this.divViewCompCond01.divComp01.fnSetBind(this.dsCondition,"SRC_LVL_1","SRC_LVL_2");

        	gfnSetObj("A");
         	this.fnSearch("searchRfqList");
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
        	
         	var sSvcID = svcId;
         	var sController = "epro.rpt.service.BRptService.searchRptRfqTeamRst";
         	var sInDatasets = "dsCondition=dsCondition";
         	var sOutDatasets = "dsList=dsList";
         	var sCallbackFunc = "fnTrCallBack";
        	
             gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
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
        	
        		case "searchRfqList" :
        		break;

        		default:
        		break;	
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.fnBRfqRstListOninit, this);
            this.addEventHandler("onload", this.fnBRfqRstListOnload, this);
            this.divViewCompCond00.staRfqCloseDt.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.btnFold.addEventHandler("onclick", this.btnFold_onclick, this);

        };

        this.loadIncludeScript("BRptRfqRstTeamList.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
