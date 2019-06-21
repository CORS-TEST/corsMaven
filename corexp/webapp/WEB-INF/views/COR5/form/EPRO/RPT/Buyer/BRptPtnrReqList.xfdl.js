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
                this.set_name("BRptPtnrReqList");
                this.set_titletext("신규업체현황");
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

            obj = new Dataset("dsCondition", this);
            obj._setContents("<ColumnInfo><Column id=\"PTNR_NM\" size=\"256\" type=\"STRING\"/><Column id=\"BIZ_NO\" size=\"256\" type=\"STRING\"/><Column id=\"CFMDT_STR\" size=\"256\" type=\"STRING\"/><Column id=\"CFMDT_END\" size=\"256\" type=\"STRING\"/><Column id=\"RPRSTV_NM\" size=\"256\" type=\"STRING\"/><Column id=\"SRC_GRP_01\" size=\"256\" type=\"STRING\"/><Column id=\"SRC_GRP_02\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_ITEM\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_CHT_DT\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_AUTO\" size=\"256\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CD_PTNR_CTGR\" size=\"256\" type=\"STRING\"/><Column id=\"PCHRGR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"PCHRGR_NM\" size=\"256\" type=\"STRING\"/><Column id=\"LANG_CD\" size=\"256\" type=\"STRING\"/><Column id=\"STD_FROM\" size=\"256\" type=\"STRING\"/><Column id=\"STD_TO\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReturn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdSR12", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdSR20", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSysCard", this);
            obj._setContents("<ColumnInfo><Column id=\"MGMT_HSTR_NO\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"TTL\" size=\"256\" type=\"STRING\"/><Column id=\"CD_MGMT_TYPE\" size=\"256\" type=\"STRING\"/><Column id=\"MGMT_MEMO\" size=\"256\" type=\"STRING\"/><Column id=\"ATTCH_FILE_CNT\" size=\"256\" type=\"STRING\"/><Column id=\"CRTR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_CHGR_ID\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompBody00", "absolute", "0", "36", null, null, "15", "0", this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "10", null, null, "0", "38", this.divViewCompBody00);
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
            obj.set_taborder("6");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/><Row band=\"summ\" size=\"24\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"월\"/><Cell col=\"1\" expr=\"\" text=\"전체\"/><Cell col=\"2\" expr=\"\" text=\"합격\"/><Cell col=\"3\" expr=\"\" text=\"불합격\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" mask=\"####.##\" maskchar=\" \" style=\"align:center;\" text=\"bind:YM\" tooltiptext=\"bind:YM\"/><Cell col=\"1\" style=\"align:right;\" text=\"bind:TOTAL_CNT\" tooltiptext=\"bind:TOTAL_CNT\"/><Cell col=\"2\" style=\"align:right;\" text=\"bind:NCLO_CNT\" tooltiptext=\"bind:NCLO_CNT\"/><Cell col=\"3\" style=\"align:right;\" text=\"bind:NREJ_CNT\" tooltiptext=\"bind:NREJ_CNT\"/></Band><Band id=\"summary\"><Cell expr=\"expr:gfnMultiLabel(&quot;EPRO_LABEL_01171&quot;)\" text=\"합계 : \"/><Cell col=\"1\" expr=\"expr:dataset.getSum(&quot;TOTAL_CNT*1&quot;)\"/><Cell col=\"2\" expr=\"expr:dataset.getSum(&quot;NCLO_CNT*1&quot;)\"/><Cell col=\"3\" expr=\"expr:dataset.getSum(&quot;NREJ_CNT*1&quot;)\"/></Band></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "10", this.divViewCompBody00);
            obj.set_scrollbars("none");
            obj.set_taborder("11");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Div("divViewCompCond00", "absolute", "0", "0", null, "36", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);
            obj = new Static("staStndDt", "absolute", "0", "5", "170", "24", null, null, this.divViewCompCond00);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.set_taborder("0");
            obj.set_text("기준일자");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Div("divStndDt", "absolute", "170", "5", "250", "24", null, null, this.divViewCompCond00);
            obj.getSetter("objNm").set("요청일자");
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.divViewCompCond00.addChild(obj.name, obj);


            
            // Layout Functions
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
            		p.set_titletext("신규업체현황");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
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
            obj = new BindItem("btnComInitVi","ns.btnComInit","visible","dsObjBindVi","btnComInit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnComInitEn","ns.btnComInit","enable","dsObjBindEn","btnComInit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnComSrchVi","ns.btnComSrch","visible","dsObjBindVi","btnComSrch");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnComSrchEn","ns.btnComSrch","enable","dsObjBindEn","btnComSrch");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnComSaveVi","ns.btnComSave","visible","dsObjBindVi","btnComSave");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnComSaveEn","ns.btnComSave","enable","dsObjBindEn","btnComSave");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnComNewVi","ns.btnComNew","visible","dsObjBindVi","btnComNew");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnComNewEn","ns.btnComNew","enable","dsObjBindEn","btnComNew");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnComDelVi","ns.btnComDel","visible","dsObjBindVi","btnComDel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnComDelEn","ns.btnComDel","enable","dsObjBindEn","btnComDel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnComPrintVi","ns.btnComPrint","visible","dsObjBindVi","btnComPrint");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnComPrintEn","ns.btnComPrint","enable","dsObjBindEn","btnComPrint");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnComCloseVi","ns.btnComClose","visible","dsObjBindVi","btnComClose");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnComCloseEn","ns.btnComClose","enable","dsObjBindEn","btnComClose");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnComMyMenuVi","ns.btnComMyMenu","visible","dsObjBindVi","btnComMyMenu");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnComMyMenuEn","ns.btnComMyMenu","enable","dsObjBindEn","btnComMyMenu");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnRemoteVi","ns.btnRemote","visible","dsObjBindVi","btnRemote");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnRemoteEn","ns.btnRemote","enable","dsObjBindEn","btnRemote");
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
        this.registerScript("BRptPtnrReqList.xfdl", function(exports) {
        /**
         * @파일명       	: BPtnrList.xfdl
         * @생성자       	: 한의봉
         * @생성일자     	: 2017. 9. 07.
         * @설명			: 협력사 현황
         * @최종수정자		: 안성민
         * @최종수정일자	: 2017. 11. 20.
        */  

        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function(){

        }

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
         	
        	var sArgEx = {
        					isTran:"Y", tranNm:"BRptService.searchRptPtnrReq", dsParam:this.dsCondition
        				}
         	gfnSetGrdFunc(this.divViewCompBody00.grdList, this.divViewCompBody00.divPaging, this, sArgEx);
         	
         	
        	this.dsCondition.addRow();  
        	this.divViewCompCond00.divStndDt.fnSetDate(this.dsCondition, "STD_FROM", "STD_TO");
        	this.dsCondition.setColumn(0, "STD_FROM", gfnAddMonth(gfnToday(), -12));//오늘일자-1month
            this.dsCondition.setColumn(0, "STD_TO", gfnToday());//오늘날짜    
        	gfnSetObj("A");   
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

        	var sSvcID = "searchRptPtnrReq";
        	var sController = "epro.rpt.service.BRptService.searchRptPtnrReq";
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
        		
        		default:
        		break;	
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.addEventHandler("onload", this.fnFormOnload, this);

        };

        this.loadIncludeScript("BRptPtnrReqList.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
