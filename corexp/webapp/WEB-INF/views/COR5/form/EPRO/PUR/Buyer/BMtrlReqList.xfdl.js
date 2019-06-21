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
                this.set_name("BPorPrgList");
                this.set_titletext("발주진행현황");
                this._setFormPosition(0,0,1220,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCdSM10", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM11", this);
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
            obj._setContents("<ColumnInfo><Column id=\"CD_PR_CTGR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PR_CTGR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DOC_CTGR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DOC_CTGR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PR_ITEM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PR_STTS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PR_STTS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PR_ITEM_STTS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PR_ITEM_STTS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PR_REQ_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_REQ_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"STR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"STR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DPMT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DPMT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"REQR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PCHRGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PCHRGR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GR_ACNT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GR_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RCV_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCondition", this);
            obj._setContents("<ColumnInfo><Column id=\"MTRL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_MTRL_REQ_STTS\" type=\"STRING\" size=\"256\"/><Column id=\"LRG_CLS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MDL_CLS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SML_CLS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ITEM1\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ITEM2\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ITEM3\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ITEM4\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReturn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompCond01", "absolute", "0", "35", null, "53", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.getSetter("objNm").set("");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);
            obj = new Static("staWarning", "absolute", "-1", null, null, "19", "1", "0", this.divViewCompCond01);
            obj.set_taborder("49");
            obj.set_text("- 검색조건 없이 검색 시 속도가 저하 될 수 있습니다.");
            obj.set_cssclass("sta_WF_SearchText");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staChrgrId", "absolute", "543", "4", "118", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("8");
            obj.set_text("요청자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divReqr", "absolute", "660", "4", "337", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("59");
            obj.set_text("Div00");
            obj.getSetter("objNm").set("검색조건-요청자");
            obj.set_url("CCOMP::ComSrchUser.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);

            obj = new Div("divViewCompBody00", "absolute", "0", "111", null, null, "15", "0", this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "9", this.divViewCompBody00);
            obj.getSetter("objNm").set("페이징");
            obj.set_scrollbars("none");
            obj.set_taborder("2");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnNewItemRequest", "absolute", null, "1", "101", "27", "0", null, this.divViewCompBody00);
            obj.set_taborder("3");
            obj.set_text("신규등록요청");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0%", "41", null, null, "0%", "37", this.divViewCompBody00);
            obj.set_cssclass("grd_default");
            obj.set_taborder("4");
            obj.set_binddataset("dsList");
            obj.set_autoupdatetype("comboselect");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.getSetter("objNm").set("검색결과 그리드");
            obj.getSetter("f_filter").set("Y");
            obj.getSetter("f_excel").set("Y");
            obj.getSetter("f_hide").set("Y");
            obj.getSetter("f_find").set("Y");
            obj.getSetter("f_sort").set("Y");
            obj.getSetter("f_fix").set("Y");
            obj.getSetter("f_height").set("Y");
            obj.getSetter("f_save").set("Y");
            obj.getSetter("f_mode").set("Y");
            obj.getSetter("f_init").set("Y");
            obj.getSetter("f_colSize").set("Y");
            obj.getSetter("f_version").set("20151023");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"300\"/><Column size=\"243\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"상태\"/><Cell col=\"1\" text=\"품목명\"/><Cell col=\"2\" text=\"품목그룹명\"/><Cell col=\"3\" text=\"요청자\"/><Cell col=\"4\" text=\"요청일자\"/><Cell col=\"5\" text=\"승인자\"/><Cell col=\"6\" text=\"승인일자\"/><Cell col=\"7\" text=\"요청번호\" combodataset=\"ds_cdET31\" combocodecol=\"CD_NM_LO\" combodatacol=\"CD_ID\"/><Cell col=\"8\" text=\"품목코드\"/><Cell col=\"9\" text=\"품목그룹\"/></Band><Band id=\"body\"><Cell text=\"bind:CD_MTRL_REQ_STTS_NM\"/><Cell col=\"1\" style=\"align:left;\" cssclass=\"cell_link\" text=\"bind:MTRL_NM_SPEC\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:MTRL_GRP_NM2\"/><Cell col=\"3\" displaytype=\"normal\" style=\"align: ;\" cssclass=\"cell_link\" text=\"bind:REQR_NM\"/><Cell col=\"4\" displaytype=\"date\" text=\"bind:REQ_DT\" mask=\"yyyy.MM.dd\" maskchar=\" \" calendardisplaynulltype=\"none\"/><Cell col=\"5\" cssclass=\"cell_link\" text=\"bind:APRVR_NM\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"none\" text=\"bind:APRV_DT\" mask=\"yyyy.MM.dd\" maskchar=\" \" calendardisplaynulltype=\"none\"/><Cell col=\"7\" style=\"align:center;\" cssclass=\"cell_link\" text=\"bind:MTRL_REQ_NO\"/><Cell col=\"8\" cssclass=\"cell_link\" text=\"bind:MTRL_CD\"/><Cell col=\"9\" text=\"bind:SML_CLS_ID\"/></Band></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Div("divViewCompCond00", "absolute", "0", "0", null, "36", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.style.set_align("center");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            obj = new Static("staCdPrStts", "absolute", "554", "5", "97", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("3");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_align("right middle");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Combo("cboCdMtrlReqStts", "absolute", "661", "5", "120", "24", null, null, this.divViewCompCond00);
            this.divViewCompCond00.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_innerdataset("dsCdSM10");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("상태");
            obj = new Static("staCrtDt", "absolute", "10", "4", "149", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("5");
            obj.set_text("품목코드/명");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_align("right middle");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Div("divMtrl", "absolute", "170", "5", "350", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.getSetter("objNm").set("검색조건-품목");
            obj.set_url("CCOMP::ComSrchMtrl.xfdl");
            this.divViewCompCond00.addChild(obj.name, obj);

            obj = new Button("btnFold", "absolute", "45.66%", "87", "56", "17", null, null, this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_Fold_Close");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 53, this.divViewCompCond01,
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
            obj = new Layout("default", "", 1220, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("발주진행현황");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item8","divViewCompCond00.cboCdMtrlReqStts","value","dsCondition","CD_MTRL_REQ_STTS");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::ComSrchUser.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComSrchMtrl.xfdl");
        };
        
        // User Script
        this.registerScript("BMtrlReqList.xfdl", function(exports) {
        /**
         * @파일명			: BPorPrgList
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
        					 {code:"SM10", sSelectType:"A"}
        					 ,{code:"CM11", sSelectType:"A"}
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
        // 	gfnSetGrdFunc(this.divViewCompBody00.grdPrList, this.divViewCompBody00.divPaging, this,{isTran:"Y", tranNm:"BPorService.searchPorPrgList", dsParam:this.dsCondition});
         	
         	//조회조건 Div 접기/펼치기 세팅
         	this.fnFold();
         	
         	this.divViewCompCond01.divReqr.fnSet(this.dsCondition, "REQR_ID", "REQR_NM");
         	this.divViewCompCond00.divMtrl.fnSet(this.dsCondition, "MTRL_CD", "MTRL_NM");
         	
        	//요청일자 셋팅
        	this.dsCondition.addRow();
        	this.dsCondition.setColumn(0,"BRANCH_CD",application.gdsUserInfo.getColumn(0,"BRANCH_CD"));
         	this.dsCondition.setColumn(0,"REQR_ID",application.gdsUserInfo.getColumn(0,"USER_ID"));
         	this.dsCondition.setColumn(0,"REQR_NM",application.gdsUserInfo.getColumn(0,"USER_NM"));
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
        	var sSvcID = "search";
        	var sController = "epro.mtrl.service.BMtrlService.searchMtrlRequestList";
        	var sInDatasets = "dsCondition=dsCondition";
        	var sOutDatasets = "dsList=dsList";
        	var sCallbackFunc = "fnTrCallBack";
        		
         	var	oPaging = [      
                            {inDs:this.dsCondition, grid:this.divViewCompBody00.grdList, divPaging:this.divViewCompBody00.divPaging}
                        ];
                        
        	 gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc, oPaging);
        }

        /**
        	@function	fnAdd()
        	@desc   	(공통버튼)신규
        */
        this.fnAdd = function() 
        {
        	gfnOpenMenuUrl("BMTRL::BMtrlReqDetail");
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

        
        this.grdListOnCelldblclick = function(obj,e)
        {

        }

        

        /**
          	@function	 fnEnterOnkeyup()
          	@desc  		 Enter or BackSpace 처리.
         */
        this.fnKeydown = function(obj,e)
        {

        }

        /**
          	@function	 fn_ontextchanged_event()
          	@desc  		 값변경시 ID 초기화
         */
        this.fn_ontextchanged_event = function(obj,e)
        {

        }

        /**
          	@function	 fnUserSearch()
          	@desc  		 사용자팝업
         */
        this.fnUserSearch = function(obj,e)
        {
        	var sArg = { 
        					agv_id:""
        					,agv_nm:this.dsCondition.getColumn(0,"REQR_NM")
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
        		case "BUserSrchPopup":
        			this.dsCondition.setColumn(0,"REQR_ID",this.dsReturn.getColumn(0,"REQR_ID"));
        			this.dsCondition.setColumn(0,"REQR_NM",this.dsReturn.getColumn(0,"REQR_NM"));
        			break;
        		default:
        			break;	
        	}
        }

        
        this.grdListOncelldblclick = function(obj,e)
        {
        	if(gfnIsNull(this.dsList.getColumn(e.row,gfnGrdBindColId(obj, e.cell)))) return false;

        	if(gfnGrdBindColId(obj, e.cell)=="MTRL_NM_SPEC")	//품목명
        	{
        		gfnSetTmprData("MTRL_REQ_NO" ,this.dsList.getColumn(e.row, "MTRL_REQ_NO"));
        		gfnSetTmprData("BRANCH_CD" ,this.dsList.getColumn(e.row, "BRANCH_CD"));
        		gfnOpenMenuUrl("BMTRL::BMtrlReqDetail");
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.FormOninit, this);
            this.addEventHandler("onload", this.FormOnload, this);
            this.divViewCompCond01.staChrgrId.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompBody00.btnNewItemRequest.addEventHandler("onclick", this.fnAdd, this);
            this.divViewCompBody00.grdList.addEventHandler("oncelldblclick", this.grdListOncelldblclick, this);
            this.btnFold.addEventHandler("onclick", this.btnFold_onclick, this);

        };

        this.loadIncludeScript("BMtrlReqList.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
