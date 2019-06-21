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
                this.set_name("SNewCntrReqList");
                this.set_titletext("계약진행현황");
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
            obj._setContents("<ColumnInfo><Column id=\"CNTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TTL\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_BGN_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_END_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CNTR_STTS\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PTNR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CD_FCTRY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPrint", this);
            obj._setContents("<ColumnInfo><Column id=\"REF_KEY_1\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_2\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM1\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"TBL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_MODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM20", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFileCond", this);
            obj._setContents("<ColumnInfo><Column id=\"REF_TBL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_1\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_2\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_3\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_4\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_5\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_COL_1\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_COL_2\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_COL_3\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_COL_4\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_COL_5\" type=\"STRING\" size=\"256\"/><Column id=\"DS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"TBL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompBody00", "absolute", "0", "49", null, null, "15", "0", this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "4", null, null, "0", "37", this.divViewCompBody00);
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"113\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"349\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"128\"/><Column size=\"123\"/><Column size=\"130\"/><Column size=\"98\"/><Column size=\"99\"/><Column size=\"98\"/><Column size=\"188\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"계약번호\"/><Cell col=\"1\" text=\"차수\"/><Cell col=\"2\" text=\"계약구분\"/><Cell col=\"3\" text=\"계약명\"/><Cell col=\"4\" text=\"첨부파일\"/><Cell col=\"5\" text=\"착공계\"/><Cell col=\"6\" text=\"계약보증\"/><Cell col=\"7\" text=\"선급보증\"/><Cell col=\"8\" text=\"하자보증\"/><Cell col=\"9\" text=\"계약종료일\"/><Cell col=\"10\" text=\"사업장\"/><Cell col=\"11\" text=\"계약금액\"/><Cell col=\"12\" text=\"인지세\"/><Cell col=\"13\" text=\"구매담당자\"/><Cell col=\"14\" text=\"서명자\"/><Cell col=\"15\" text=\"계약체결일시\"/></Band><Band id=\"body\"><Cell cssclass=\"cell_link\" text=\"bind:CNTR_NO\"/><Cell col=\"1\" text=\"bind:CNTR_ORDR\"/><Cell col=\"2\" text=\"bind:CD_CNST_TYPE_NM\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:TTL\"/><Cell col=\"4\" style=\"align:center;\" cssclass=\"cell_link\" text=\"bind:ATTCH_FILE_CNT\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" text=\"bind:BC_FILE_CNT\" expandshow=\"show\" expandsize=\"23\" expandimage=\"URL('img::btn_TP_SearchDrop_N.png')\"/><Cell col=\"6\" text=\"bind:CNTR_GRNT_FILE_CNT\" expandshow=\"expr:ALT_CNTR_GRNT == 'Y' ? 'show' : 'hide'\" expandsize=\"23\" expandimage=\"URL('img::btn_TP_SearchDrop_N.png')\"/><Cell col=\"7\" text=\"bind:PPAY_GRNT_FILE_CNT\" expandshow=\"expr:ALT_PPAY_GRNT == 'Y' ? 'show' : 'hide'\" expandsize=\"23\" expandimage=\"URL('img::btn_TP_SearchDrop_N.png')\"/><Cell col=\"8\" text=\"bind:CPAY_GRNT_FILE_CNT\" expandshow=\"expr:ALT_CPAY_GRNT == 'Y' ? 'show' : 'hide'\" expandsize=\"23\" expandimage=\"URL('img::btn_TP_SearchDrop_N.png')\"/><Cell col=\"9\" displaytype=\"date\" text=\"bind:CNTR_END_DAY\" mask=\"yyyy.MM.dd\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" text=\"bind:CD_FCTRY_NM\"/><Cell col=\"11\" style=\"align:right;\" text=\"bind:CNTR_AMT\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TSTAMP_RUN_AMT\" mask=\"#,###\"/><Cell col=\"13\" text=\"bind:CNTR_CHRGR_NM\"/><Cell col=\"14\" text=\"bind:B_CHARGR\"/><Cell col=\"15\" displaytype=\"text\" text=\"bind:B_SIGN_DT\"/></Band></Format></Formats>");
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
            obj = new Static("sta_bsnsPlc", "absolute", "12", "6", null, "24", "92.77%", null, this.divViewCompCond00);
            obj.set_taborder("0");
            obj.set_text("계약일자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Div("divCntrDt", "absolute", "92", "6", "242", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.getSetter("objNm").set("계약기간");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Edit("edtCtnrTtl", "absolute", "429", "6", "229", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("2");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("자재그룹명");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("sta_srchPoDay00", "absolute", "349", "6", "75", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("3");
            obj.set_text("계약명");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("sta_bsnsPlc00", "absolute", "663", "6", "75", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("4");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("CD_CNTR_TYPE");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Edit("edtCntrNo", "absolute", "743", "6", "213", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("5");
            obj.getSetter("objNm").set("");
            this.divViewCompCond00.addChild(obj.name, obj);


            
            // Layout Functions
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
            		p.set_titletext("계약진행현황");

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
            obj = new BindItem("divViewCompBody00LangBind2017110317184316804","divViewCompBody00","text","gdsLabel","EPRO_LABEL_00272");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","divViewCompCond00.edtCtnrTtl","value","dsCondition","TTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divViewCompCond00.edtCntrNo","value","dsCondition","CNTR_NO");
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
        this.registerScript("SCntrPrgList.xfdl", function(exports) {
        /**
         * @파일명			: SCntrPrgList
         * @생성자			: 안성민
         * @생성일시		: 2019. 02. 28.
         * @설명			: 계약진행현황
         * @최종수정자		: 안성민
         * @최종수정일시	: 2019. 02. 28.
        */  

        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {
        	var param = [
        					{code:"CM20", sSelectType:"S"} // 사업장
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
         	gfnSetGrdFunc(this.divViewCompBody00.grdList, this.divViewCompBody00.divPaging, this);
         	
         	//조회조건 Div 접기/펼치기 세팅
         	this.fnFold();
         		
        	this.dsCondition.setColumn(0,"BRANCH_CD", application.gdsUserInfo.getColumn(0,"BRANCH_CD"));
        	this.dsCondition.setColumn(0,"PTNR_ID", application.gdsUserInfo.getColumn(0,"PTNR_ID"));
        	this.dsCondition.setColumn(0,"CD_FCTRY", "");

        	//요청일자 셋팅
        	this.divViewCompCond00.divCntrDt.fnSetDate(this.dsCondition, "CNTR_BGN_DAY", "CNTR_END_DAY");	

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
        	var sController = "epro.cntr.service.SCntrService.searchCntrPrgList";
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
        		
        		case "unSignReport" : //unSign
        			this.dsPrint.deleteAll();
        			var nRow = this.dsPrint.addRow();
        			this.dsPrint.setColumn(nRow, "BRANCH_CD"	, this.dsList.getColumn(this.dsList.rowposition,"BRANCH_CD"));
        			this.dsPrint.setColumn(nRow, "REF_KEY_1"	, this.dsList.getColumn(this.dsList.rowposition,"CNTR_NO"));
        			this.dsPrint.setColumn(nRow, "REF_KEY_2"	, this.dsList.getColumn(this.dsList.rowposition,"CNTR_ORDR"));
        			this.dsPrint.setColumn(nRow, "COL_NM1"		, "CNTR_NO");
        			this.dsPrint.setColumn(nRow, "COL_NM2"		, "CNTR_ORDR");
        			this.dsPrint.setColumn(nRow, "TBL_NM"		, "MM_CNTR_ADD");
        			
        			var sArg = { arg:this.dsPrint, arg_file_nm:"CNTR_" + this.dsList.getColumn(this.dsList.rowposition,"CNTR_NO") + "_" + this.dsList.getColumn(this.dsList.rowposition,"CNTR_ORDR")};
        			gfnModalPop(this, "PopupReport", "CPOP::ComUbiReportUnSign.xfdl", sArg, "fnPopCallBack", 1000, 950);	
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
        					agv_id:this.dsCondition.getColumn(0,"CNTR_CHRGR_ID")
        					,agv_nm:this.dsCondition.getColumn(0,"CNTR_CHRGR_NM")
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
        			if(!gfnIsNull(this.dsReturn.getColumn(0,"USER_ID"))){
        					this.dsCondition.setColumn(0,"CNTR_CHRGR_ID",this.dsReturn.getColumn(0,"USER_ID"));
        					this.dsCondition.setColumn(0,"CNTR_CHRGR_NM",this.dsReturn.getColumn(0,"USER_NM"));
        			}
        			break;
        		case "BPtnrSrchPopup":
        			trace(this.dsReturn.saveXML())
        			if(!gfnIsNull(this.dsReturn.getColumn(0,"PTNR_ID"))){
        					this.dsCondition.setColumn(0,"PTNR_ID",this.dsReturn.getColumn(0,"PTNR_ID"));
        					this.dsCondition.setColumn(0,"PTNR_NM",this.dsReturn.getColumn(0,"PTNR_NM"));
        			}
        			break;
        			
        		default:
        			break;	
        	}
        }

        /**
        	@function	fnKeydown
        	@desc   	에디터 키이벤트
        */
        this.fnKeydown = function(obj,e)
        {
        	trace(e.keycode)
        	if(e.keycode == "13"){
        		obj.updateToDataset();
        		if(obj.name == "edCntrChrgrNm"){
        			this.fnUserSearch();
        		}else if(obj.name == "edtPtnrNm"){
        			this.fnPtnrSearch();
        		}else if(obj.name == "edtCtnrTtl" || obj.name == "edtCntrNo"){
        			this.fnSearch();
        		}
        	} else if(e.keycode == "8"){
        		obj.updateToDataset();
        		if(obj.name == "edCntrChrgrNm"){
        			this.dsCondition.setColumn(0,"CNTR_CHRGR_ID","");
        		}else if(obj.name == "edtPtnrNm"){
        			this.dsCondition.setColumn(0,"PTNR_ID","");
        		}
        	}
        }
        this.grdListOnCelldblclick = function(obj,e)
        {
        	if(gfnIsNull(this.dsList.getColumn(e.row, gfnGrdBindColId(obj, e.cell)))) return false;
        	
        	if("CNTR_NO" == gfnGrdBindColId(obj, obj.getCellPos())){ 
        		if("CT11B03" == this.dsList.getColumn(e.row,"CD_CNTR_CTGR")) {
        			//첨부파일	
        			this.dsFileCond.deleteAll();
        			this.dsFileCond.addRow();
        			this.dsFileCond.setColumn(0, "BRANCH_CD", this.dsList.getColumn(this.dsList.rowposition, "BRANCH_CD"));
        			this.dsFileCond.setColumn(0, "REF_TBL_NM", "'MM_CNTR'");
        			this.dsFileCond.setColumn(0, "REF_KEY_COL_1", "CNTR_NO");
        			this.dsFileCond.setColumn(0, "REF_KEY_1", this.dsList.getColumn(this.dsList.rowposition, "CNTR_NO"));
        			this.dsFileCond.setColumn(0, "REF_KEY_COL_2", "CNTR_ORDR");
        			this.dsFileCond.setColumn(0, "REF_KEY_2", this.dsList.getColumn(this.dsList.rowposition, "CNTR_ORDR"));
        			this.dsFileCond.setColumn(0, "REF_KEY_COL_3", "FILE_TYPE");
        			this.dsFileCond.setColumn(0, "REF_KEY_3", "NORMAL");
        			this.dsFileCond.setColumn(0, "DS_NM", "dsCntr");
        			this.dsFileCond.setColumn(0, "FILE_GUBUN", "CNTR")
        			this.dsFileCond.setColumn(0, "TBL_NM", "MM_CNTR_ADD");
        			//this.dsFileCond.setColumn(0, "SIGN_MODE", "S");
        			
        			if("Y" == this.dsList.getColumn(e.row,"ALT_SIGN")) {				
        				var sArg = { arg:this.dsFileCond, agv_mode:"Y" };			
        				gfnModalPop(this, "comAttchFileSignPopup", "CPOP::ComAttchFileUnSignPopup.xfdl", sArg, "fnPopCallBack", 1000, 300);
        			} else {
        				var sArg = { arg:this.dsFileCond, agv_mode:"Y" };			
        				gfnModalPop(this, "cntrPrgAttchFilePopup", "CPOP::ComAttchFilePopup.xfdl", sArg, "fnPopCallBack", 1000, 300);
        			}
        		} else if("CT12T15" == this.dsList.getColumn(e.row,"CD_CNTR_TYPE")) {
        			//리포트
        			this.dsPrint.deleteAll();
        			var nRow = this.dsPrint.addRow();
        			this.dsPrint.setColumn(nRow, "BRANCH_CD"	, this.dsList.getColumn(e.row,"BRANCH_CD"));
        			this.dsPrint.setColumn(nRow, "REF_KEY_1"	, this.dsList.getColumn(e.row,"CNTR_NO"));
        			this.dsPrint.setColumn(nRow, "REF_KEY_2"	, this.dsList.getColumn(e.row,"CNTR_ORDR"));
        			this.dsPrint.setColumn(nRow, "COL_NM1"		, "CNTR_NO");
        			this.dsPrint.setColumn(nRow, "COL_NM2"		, "CNTR_ORDR");
        			this.dsPrint.setColumn(nRow, "TBL_NM"		, "MM_CNTR_ADD");	
        		
        			if("Y" == this.dsList.getColumn(e.row,"ALT_SIGN")) {
        				//전자서명 복호화
        				var sSvcID = "unSignReport";
        				var sController = "epro.com.service.BComService.unSignReport";
        				var sInDatasets = "dsUnSign=dsPrint";
        				var sOutDatasets = "";
        				var sCallbackFunc = "fnTrCallBack";
        					
        				gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        			} else {	
        				var reportType =  this.dsList.getColumn(e.row,"REPORT_NM") + ".jrf";
        				var sArg = { arg:this.dsPrint, reportFile:reportType};			
        				gfnModalPop(this, "PopupReport", "CPOP::ComUbiReportNoSign.xfdl", sArg, "fnPopCallBack", 1000, 950);
        			}
        		} else {
        			//에디터
        			this.dsPrint.deleteAll();
        			var nRow = this.dsPrint.addRow();
        			this.dsPrint.setColumn(nRow, "BRANCH_CD"	, this.dsList.getColumn(e.row,"BRANCH_CD"));
        			this.dsPrint.setColumn(nRow, "REF_KEY_1"	, this.dsList.getColumn(e.row,"CNTR_NO"));
        			this.dsPrint.setColumn(nRow, "REF_KEY_2"	, this.dsList.getColumn(e.row,"CNTR_ORDR"));
        			this.dsPrint.setColumn(nRow, "COL_NM1"		, "CNTR_NO");
        			this.dsPrint.setColumn(nRow, "COL_NM2"		, "CNTR_ORDR");
        			this.dsPrint.setColumn(nRow, "TBL_NM"		, "MM_CNTR_ADD");
        			
        			var sArg = { agv_branchCd: this.dsList.getColumn(this.dsList.rowposition, "BRANCH_CD"),
        						agv_no: this.dsList.getColumn(this.dsList.rowposition, "CNTR_NO"),
        						agv_ordr: this.dsList.getColumn(this.dsList.rowposition, "CNTR_ORDR"),
        						arg: this.dsPrint,
        						agv_search: "Y",
        						agv_readonly : "Y"
        					};
        		
        			if("Y" == this.dsList.getColumn(e.row,"ALT_SIGN")) {			
        				gfnModalPop(this, "PopupTemplateSign", "CPOP::BComTmpltPopupUnSign.xfdl", sArg, "fnPopCallBack", 1000, 1000);
        			} else {
        				gfnModalPop(this, "PopupTemplate", "CPOP::BComTmpltPopup.xfdl", sArg, "fnPopCallBack", 1000, 1000);
        			}
        		}	
        	} else if("ATTCH_FILE_CNT" == gfnGrdBindColId(obj, obj.getCellPos())) {
        		this.dsFileCond.deleteAll();
        		this.dsFileCond.addRow();
        		this.dsFileCond.setColumn(0, "BRANCH_CD", this.dsList.getColumn(this.dsList.rowposition, "BRANCH_CD"));
        		this.dsFileCond.setColumn(0, "REF_TBL_NM", "'MM_CNTR'");
        		this.dsFileCond.setColumn(0, "REF_KEY_COL_1", "CNTR_NO");
        		this.dsFileCond.setColumn(0, "REF_KEY_1", this.dsList.getColumn(this.dsList.rowposition, "CNTR_NO"));
        		this.dsFileCond.setColumn(0, "REF_KEY_COL_2", "CNTR_ORDR");
        		this.dsFileCond.setColumn(0, "REF_KEY_2", this.dsList.getColumn(this.dsList.rowposition, "CNTR_ORDR"));
        		this.dsFileCond.setColumn(0, "REF_KEY_COL_3", "FILE_TYPE");
        		this.dsFileCond.setColumn(0, "REF_KEY_3", "NORMAL");
        		this.dsFileCond.setColumn(0, "DS_NM", "dsCntr");
        		this.dsFileCond.setColumn(0, "FILE_GUBUN", "CNTR")
        		this.dsFileCond.setColumn(0, "TBL_NM", "MM_CNTR_ADD");
        		//this.dsFileCond.setColumn(0, "SIGN_MODE", "S");
        				
        		if("CT11B03" == this.dsList.getColumn(e.row,"CD_CNTR_CTGR") && "Y" == this.dsList.getColumn(e.row,"ALT_SIGN")) {
        			var sArg = { arg:this.dsFileCond, agv_mode:"Y" };			
        			gfnModalPop(this, "comAttchFileSignPopup", "CPOP::ComAttchFileUnSignPopup.xfdl", sArg, "fnPopCallBack", 1000, 300);
        		} else {
        			var sArg = { arg:this.dsFileCond, agv_mode:"Y" };			
        			gfnModalPop(this, "cntrPrgAttchFilePopup", "CPOP::ComAttchFilePopup.xfdl", sArg, "fnPopCallBack", 1000, 300);
        		}
        	}
        }

        this.grdListOnExpandup = function(obj,e)
        {
        	var type = "";

        	if(gfnGrdBindColId(obj, obj.getCellPos())=="CNTR_GRNT_FILE_CNT") type = "CNTR";
        	else if(gfnGrdBindColId(obj, obj.getCellPos())=="PPAY_GRNT_FILE_CNT") type = "PPAY";
        	else if(gfnGrdBindColId(obj, obj.getCellPos())=="CPAY_GRNT_FILE_CNT") type = "CPAY";
        	else if(gfnGrdBindColId(obj, obj.getCellPos())=="BC_FILE_CNT") type = "BPAY";
        	
        	this.dsFileCond.deleteAll();
        	this.dsFileCond.addRow();
        	this.dsFileCond.setColumn(0, "BRANCH_CD", this.dsList.getColumn(this.dsList.rowposition, "BRANCH_CD"));
        	this.dsFileCond.setColumn(0, "REF_TBL_NM", "'MM_CNTR'");
        	this.dsFileCond.setColumn(0, "REF_KEY_COL_1", "CNTR_NO");
        	this.dsFileCond.setColumn(0, "REF_KEY_1", this.dsList.getColumn(this.dsList.rowposition, "CNTR_NO"));
        	this.dsFileCond.setColumn(0, "REF_KEY_COL_2", "CNTR_ORDR");
        	this.dsFileCond.setColumn(0, "REF_KEY_2", this.dsList.getColumn(this.dsList.rowposition, "CNTR_ORDR"));
        	this.dsFileCond.setColumn(0, "REF_KEY_COL_3", "FILE_TYPE");
        	this.dsFileCond.setColumn(0, "REF_KEY_3", type);
        	this.dsFileCond.setColumn(0, "DS_NM", "dsCntr");
        	this.dsFileCond.setColumn(0, "FILE_GUBUN", "CNTR")
        	this.dsFileCond.setColumn(0, "TBL_NM", "MM_CNTR_ADD");
        	//this.dsFileCond.setColumn(0, "SIGN_MODE", "S");
        			
        	var sArg = { arg:this.dsFileCond, agv_mode:"" };			
        	gfnModalPop(this, "cntrPrgAttchFilePopup", "CPOP::ComAttchFilePopup.xfdl", sArg, "fnPopCallBack", 1000, 300);

        } 
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.FormOninit, this);
            this.addEventHandler("onload", this.FormOnload, this);
            this.divViewCompBody00.grdList.addEventHandler("oncelldblclick", this.grdListOnCelldblclick, this);
            this.divViewCompBody00.grdList.addEventHandler("onexpandup", this.grdListOnExpandup, this);
            this.divViewCompCond00.edtCtnrTtl.addEventHandler("onkeydown", this.fnKeydown, this);
            this.divViewCompCond00.edtCtnrTtl.addEventHandler("ontextchanged", this.div_condition1_ed_ptnrNm_ontextchanged, this);
            this.divViewCompCond00.edtCntrNo.addEventHandler("onkeydown", this.fnKeydown, this);

        };

        this.loadIncludeScript("SCntrPrgList.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
