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
                this.set_name("BTndrList");
                this.set_titletext("입찰진행현황");
                this._setFormPosition(0,0,1220,768);
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
            obj._setContents("<ColumnInfo><Column id=\"RFQ_REQ_NO\" size=\"20\" type=\"STRING\"/><Column id=\"RFQ_ODR\" size=\"256\" type=\"INT\"/><Column id=\"CD_RFQ_STTS\" size=\"40\" type=\"STRING\"/><Column id=\"CD_DOC_CTGR\" size=\"40\" type=\"STRING\"/><Column id=\"TTL\" size=\"100\" type=\"STRING\"/><Column id=\"RFQ_CLOSE_DAY\" size=\"8\" type=\"STRING\"/><Column id=\"RFQ_CLOSE_TIME\" size=\"6\" type=\"STRING\"/><Column id=\"GOALAMT\" size=\"15\" type=\"INT\"/><Column id=\"CHRGR_NM\" size=\"50\" type=\"STRING\"/><Column id=\"REQ_DT\" size=\"256\" type=\"DATE\"/><Column id=\"ITEM_CNT\" size=\"20\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"20\" type=\"STRING\"/><Column id=\"TNDR_NO\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCondition", this);
            obj._setContents("<ColumnInfo><Column id=\"TNDR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_END\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_STR\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_JOIN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGE_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"SRCH_BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TTL\" type=\"STRING\" size=\"256\"/><Column id=\"CHRGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHRGR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PTNR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PTNR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReturn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompBody00", "absolute", "0", "37", null, null, "15", "0", this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "9", this.divViewCompBody00);
            obj.getSetter("objNm").set("페이징");
            obj.set_scrollbars("none");
            obj.set_taborder("2");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnDenial", "absolute", null, "3", "87", "24", "0", null, this.divViewCompBody00);
            obj.set_taborder("3");
            obj.set_text("참여거부");
            obj.set_cssclass("btn_WF_Ssign");
            obj.getSetter("objNm").set("참여거부버튼");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnAccpet", "absolute", null, "3", "87", "24", "93", null, this.divViewCompBody00);
            obj.set_taborder("4");
            obj.set_text("참여신청");
            obj.set_cssclass("btn_WF_Ssign");
            obj.getSetter("objNm").set("참여신청버튼");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0%", "39", null, null, "0%", "37", this.divViewCompBody00);
            obj.set_cssclass("grd_default");
            obj.set_taborder("5");
            obj.set_binddataset("dsList");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"55\"/><Column size=\"300\"/><Column size=\"154\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"86\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"운영단위\"/><Cell col=\"2\" text=\"구매유형\"/><Cell col=\"3\" text=\"참여여부\"/><Cell col=\"4\" text=\"입찰번호\"/><Cell col=\"5\" text=\"차수\"/><Cell col=\"6\" text=\"입찰요청명\"/><Cell col=\"7\" text=\"참여마감일시\"/><Cell col=\"8\" text=\"입찰시작일자\"/><Cell col=\"9\" text=\"시작시간\"/><Cell col=\"10\" text=\"구매목표가\"/><Cell col=\"11\" text=\"담당자명\"/><Cell col=\"12\" text=\"요청일자\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\" expandshow=\"hide\"/><Cell col=\"1\" text=\"bind:BRANCH_NM\"/><Cell col=\"2\" text=\"bind:CD_DOC_CTGR_NM\"/><Cell col=\"3\" text=\"bind:CD_PTNR_BID_STTS_NM\"/><Cell col=\"4\" cssclass=\"cell_link\" text=\"bind:TNDR_NO\"/><Cell col=\"5\" text=\"bind:TNDR_ODR\"/><Cell col=\"6\" style=\"align:left;\" text=\"bind:TTL\" tooltiptext=\"bind:TTL\"/><Cell col=\"7\" text=\"bind:TNDR_ATD_CLOSE_DAY\"/><Cell col=\"8\" displaytype=\"date\" text=\"bind:PRGRS_DAY\" mask=\"yyyy.MM.dd\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" text=\"bind:BGN_TIME\" mask=\"@@:@@\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:GOALAMT\" mask=\"#,##0\"/><Cell col=\"11\" text=\"bind:CHRGR_NM\"/><Cell col=\"12\" displaytype=\"date\" text=\"bind:REQ_DT\" mask=\"yyyy.MM.dd\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Div("divViewCompCond00", "absolute", "0", "0", null, "36", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.style.set_align("center");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            obj = new Combo("cboPorg", "absolute", "875", "5", "185", "24", null, null, this.divViewCompCond00);
            this.divViewCompCond00.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_innerdataset("dsCdCM10");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("운영단위");
            obj = new Static("staCrtDt", "absolute", "0", "5", "170", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("0");
            obj.set_text("입찰요청번호");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staDocCtgr", "absolute", "757", "5", "118", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("4");
            obj.set_text("운영단위");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Edit("edtTndrNo", "absolute", "170", "5", "157", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("6");
            obj.getSetter("objNm").set("입찰요청번호");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staPtnrNm00", "absolute", "332", "5", "118", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("7");
            obj.set_text("입찰요청일자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Div("divTndrDt", "absolute", "450", "6", "301", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("8");
            obj.set_text("Div01");
            obj.getSetter("objNm").set("입찰요청일자");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new CheckBox("chkAcceptYn", "absolute", "88.78%", "5", null, "24", "2.08%", null, this.divViewCompCond00);
            obj.set_taborder("9");
            obj.set_text("참여거부포함");
            obj.getSetter("objNm").set("참여거부포함");
            this.divViewCompCond00.addChild(obj.name, obj);


            
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
            obj = new Layout("default", "", 1220, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("입찰진행현황");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item8","divViewCompCond00.cboPorg","value","dsCondition","CD_DOC_CTGR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPagingVi","divViewCompBody00.divPaging","visible","dsObjBindVi","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPagingEn","divViewCompBody00.divPaging","enable","dsObjBindEn","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboDocCtgrVi","divViewCompCond00.cboPorg","visible","dsObjBindVi","cboDocCtgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboDocCtgrEn","divViewCompCond00.cboPorg","readonly","dsObjBindEn","cboDocCtgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCrtDtVi","divViewCompCond00.staCrtDt","visible","dsObjBindVi","staCrtDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCrtDtEn","divViewCompCond00.staCrtDt","enable","dsObjBindEn","staCrtDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staDocCtgrVi","divViewCompCond00.staDocCtgr","visible","dsObjBindVi","staDocCtgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staDocCtgrEn","divViewCompCond00.staDocCtgr","enable","dsObjBindEn","staDocCtgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","divViewCompCond00.edtTndrNo","value","dsCondition","PO_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","divViewCompCond00.edtTndrNo","visible","dsObjBindVi","edtPoNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","divViewCompCond00.edtTndrNo","readonly","dsObjBindEn","edtPoNo");
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
        this.registerScript("STndrList.xfdl", function(exports) {
        /**
         * @파일명			: sTndrList
         * @생성자			: 김승일
         * @생성일시		: 2019. 05. 09
         * @설명			: 경쟁입찰현황
         * @최종수정자		: 김승일
         * @최종수정일시	: 2019. 05. 09
        */  

        
         
        /**
          * @함수명	: FormOninit
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.InitEventInfo(이벤트변수)
          * @desc     	: 폼 oninit이벤트
          */
        this.FormOninit = function(obj,e)
        {
        	
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
         	gfnSetGrdFunc(this.divViewCompBody00.grdList, this.divViewCompBody00.divPaging, this,{isTran:"Y", tranNm:"STndrService.tndrReqSrch", dsParam:this.dsCondition});
         	
        	this.dsCondition.addRow();
        	this.dsCondition.setColumn(0,"CD_DOC_CTGR", application.gdsUserInfo.getColumn(0,"CD_DOC_CTGR"));
        	
        	//this.dsCondition.divTndrDt.fnSetDate(this.dsCondition, "REQ_DT_STR", "REQ_DT_END");
        	//this.dsCondition.setColumn(0,"REQ_DT_STR",this.gfn_addMonth(this.gfnToday(),-1));
        	//this.dsCondition.setColumn(0,"REQ_DT_END",this.gfn_addMonth(this.gfnToday(),1));
        	this.dsCondition.setColumn(0,"ALT_JOIN_YN","Y");
        	this.dsCondition.setColumn(0,"MANAGE_UNIT","");

        	this.fnSearch();
        }

         
        /**
          * @함수명	: fnSearch
          * @desc     	: 조회 프로세스
          */
        this.fnSearch = function(svcId)
        {
        	var sSvcID = "search";
        	var sController = "epro.tndr.service.STndrService.tndrReqSrch";
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
        		case "tndrAcp" :
        			this.fnSearch();
        		break;
        		case "tndrRjc" :
        			this.fnSearch();
        		break;
        		
        				
        		default:
        		break;	
        	}
        }
         
         
        /**
          * @함수명	: divViewCompBody00_btnAccpet_onclick
          * @input    	: 선택된 입찰번호
          * @desc     	: Transaction Callback함수
          */
        this.divViewCompBody00_btnAccpet_onclick = function(obj,e)
        {
        	//선택된 아이템의 유무를 리턴한다.
        	var rtn = gfnGetChkRowString(this.dsList);	
        	if(!rtn){
        		return;
        	}

        	
        	if(!gfnConfirm("참여신청 하시겠습니까?")) return;
        		
        	//DataBase 의 상태 값을 변경한다.
        	var sSvcID = "tndrAcp";
        	var sController = "epro.tndr.service.STndrService.tndrAcp";
        	var sInDatasets = "dsList=dsList:U";
        	var sOutDatasets = "dsList=dsList";
        	var sCallbackFunc = "fnTrCallBack";
        	
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }
        /**
          * @함수명	: divViewCompBody00_btnDenial_onclick
          * @input    	: 선택된 입찰번호
          * @desc     	: Transaction Callback함수
          */
        this.divViewCompBody00_btnDenial_onclick = function(obj,e)
        {
        	//선택된 아이템의 유무를 리턴한다.
        	var rtn = gfnGetChkRowString(this.dsList);	
        	if(!rtn){
        		return;
        	}

        
        	var sArg = {
        				};
        	gfnModalPop(this, "rejectReson", "STNDR::STndrRjcPopup.xfdl", sArg, "fnPopCallBack", 400, 300);
        }

        
        /**
        	@function	fn_popCallBack()
        	@desc   	팝업 CallBack 함수
        */
        this.fnPopCallBack = function(sPopupId,rtn)
        {

        	if(rtn.indexOf("<Dataset id=") == 0){
        		//callback을 받기위한 빈 DataSet을 미리 생성해 놓아야한다.
        		this.dsReturn.loadXML(rtn);
        		if(sPopupId == "rejectReson"){
        			this.dsReturn.loadXML(rtn);
        			for(var i = 0; i< this.dsList.rowcount;i++){
        				if(this.dsList.getColumn(i,"CHECKED")=="1"){
        					this.dsList.setColumn(i,"REASON",this.dsReturn.getColumn(0,"REASON"));
        				}
        			}
        			
        			var sSvcID = "tndrRjc";
        			var sController = "epro.tndr.service.STndrService.tndrRjc";
        			var sInDatasets = "dsList=dsList:U";
        			var sOutDatasets = "dsList=dsList";
        			var sCallbackFunc = "fnTrCallBack";
        			
        			gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        		}
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.FormOninit, this);
            this.addEventHandler("onload", this.FormOnload, this);
            this.divViewCompBody00.btnDenial.addEventHandler("onclick", this.divViewCompBody00_btnDenial_onclick, this);
            this.divViewCompBody00.btnAccpet.addEventHandler("onclick", this.divViewCompBody00_btnAccpet_onclick, this);
            this.divViewCompBody00.grdList.addEventHandler("oncelldblclick", this.div_body_grd_list_oncelldblclick, this);
            this.divViewCompCond00.staCrtDt.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond00.staDocCtgr.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond00.edtTndrNo.addEventHandler("onkeydown", this.fnKeydown, this);
            this.divViewCompCond00.staPtnrNm00.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);

        };

        this.loadIncludeScript("STndrList.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
