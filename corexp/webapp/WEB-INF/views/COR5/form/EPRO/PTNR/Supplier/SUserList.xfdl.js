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
                this.set_name("SUserList");
                this.set_titletext("사용자관리");
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
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"USER_NM\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_ID\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompBody00", "absolute", "0", "40", null, null, "15", "0", this);
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
            obj.getSetter("objNm").set("검색결과 그리드");
            obj.set_taborder("6");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"136\"/><Column size=\"159\"/><Column size=\"119\"/><Column size=\"95\"/><Column size=\"208\"/><Column size=\"238\"/><Column size=\"99\"/><Column size=\"134\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"사용자ID\" tooltiptext=\"\"/><Cell col=\"1\" expr=\"\" text=\"사용자명\" tooltiptext=\"\"/><Cell col=\"2\" expr=\"\" text=\"부서\" tooltiptext=\"\"/><Cell col=\"3\" expr=\"\" text=\"직급\" tooltiptext=\"\"/><Cell col=\"4\" expr=\"\" text=\"전화번호\" tooltiptext=\"\"/><Cell col=\"5\" expr=\"\" text=\"휴대폰\" tooltiptext=\"\"/><Cell col=\"6\" expr=\"\" text=\"사용여부\" tooltiptext=\"\"/><Cell col=\"7\" expr=\"\" text=\"대표사용자\" tooltiptext=\"\"/></Band><Band id=\"body\"><Cell cssclass=\"cell_link\" text=\"bind:USER_ID\" tooltiptext=\"bind:USER_ID\"/><Cell col=\"1\" text=\"bind:USER_NM\" tooltiptext=\"bind:USER_NM\"/><Cell col=\"2\" text=\"bind:DEPT_NM\" tooltiptext=\"bind:DEPT_NM\"/><Cell col=\"3\" text=\"bind:MJR_JOB\" tooltiptext=\"bind:MJR_JOB\"/><Cell col=\"4\" text=\"bind:TEL\" tooltiptext=\"bind:TEL\"/><Cell col=\"5\" text=\"bind:HP\" tooltiptext=\"bind:HP\"/><Cell col=\"6\" text=\"bind:ALT_USE\" tooltiptext=\"bind:ALT_USE\"/><Cell col=\"7\" displaytype=\"checkbox\" text=\"bind:ALT_TEAM_LDR\"/></Band></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "10", this.divViewCompBody00);
            obj.set_scrollbars("none");
            obj.set_taborder("11");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Div("divViewCompCond00", "absolute", "0", "3", null, "36", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);
            obj = new Static("staUserNm", "absolute", "389", "5", "170", "24", null, null, this.divViewCompCond00);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("objNm").set("사용자명");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.set_taborder("2");
            obj.set_text("사용자명");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Edit("edtUserId", "absolute", "170", "5", "219", "24", null, null, this.divViewCompCond00);
            obj.getSetter("objNm").set("사용자Id");
            obj.set_taborder("1");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staUserId", "absolute", "0", "5", "170", "24", null, null, this.divViewCompCond00);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("objNm").set("사용자ID");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.set_taborder("0");
            obj.set_text("사용자ID");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Edit("edtUserNm", "absolute", "559", "5", "219", "24", null, null, this.divViewCompCond00);
            obj.getSetter("objNm").set("사용자명");
            obj.set_taborder("3");
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
            		p.set_titletext("사용자관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item2","divViewCompCond00.edtUserId","value","dsCondition","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","divViewCompCond00.edtUserNm","value","dsCondition","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPagingVi","divViewCompBody00.divPaging","visible","dsObjBindVi","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPagingEn","divViewCompBody00.divPaging","enable","dsObjBindEn","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staUserNmVi","divViewCompCond00.staUserNm","visible","dsObjBindVi","staUserNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staUserNmEn","divViewCompCond00.staUserNm","enable","dsObjBindEn","staUserNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtUserIdVi","divViewCompCond00.edtUserId","visible","dsObjBindVi","edtUserId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtUserIdEn","divViewCompCond00.edtUserId","readonly","dsObjBindEn","edtUserId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staUserIdVi","divViewCompCond00.staUserId","visible","dsObjBindVi","staUserId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staUserIdEn","divViewCompCond00.staUserId","enable","dsObjBindEn","staUserId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtUserNmVi","divViewCompCond00.edtUserNm","visible","dsObjBindVi","edtUserNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtUserNmEn","divViewCompCond00.edtUserNm","readonly","dsObjBindEn","edtUserNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("grdListFormatId","divViewCompBody00.grdList","formatid","dsObjBindGrid","grdList");
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
        this.registerScript("SUserList.xfdl", function(exports) {
        /**
         * @파일명       	: SUserList.xfdl
         * @생성자       	: 한의봉
         * @생성일자     	: 2017. 9. 07.
         * @설명			: 협력사 현황
         * @최종수정자		: 김동호
         * @최종수정일자	: 2017. 11. 08.
        */  

        

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
        	//그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기(그리드 컴포넌트, 페이징div 컴포넌트, 폼오브젝트(this))
         	
        	var sArgEx = {
        					isTran:"Y", tranNm:"SPtnrService.searchPtnrUser", dsParam:this.dsCondition
        				}
         	gfnSetGrdFunc(this.divViewCompBody00.grdList, this.divViewCompBody00.divPaging, this, sArgEx);
        	
        	this.dsCondition.setColumn(0, "PTNR_ID", application.gdsUserInfo.getColumn(0, "PTNR_ID"));
        	
        	this.dsCondition.addRow();
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

        	var sSvcID = "searchPtnrUser";
        	var sController = "epro.ptnr.service.SPtnrService.searchPtnrUser";
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
          * @input    	: strSvcID(트랜잭션 ID), strErrCd(트랜잭션 결과 코드), strErrMsg(트랜잭션 결과 메시지)
          * @desc     	: Transaction Callback함수
          */
        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	if(strErrCd < 0) return;
        	
        	switch(strSvcID){
        		case "searchPtnrUser" :
        			
        		break;
        		
        		default:
        		break;	
        	}
        }

        /**
          * @함수명	: fnListOncelldblclick
          * @input    	: obj:Grid(그리드 오브젝트), e:nexacro.GridClickEventInfo(이벤트변수)
          * @desc     	: 리스트 그리드 oncelldblclick 이벤트
          */
        this.fnListOncelldblclick = function(obj,e)
        {
        	if(gfnIsNull(this.dsList.getColumn(e.row, gfnGrdBindColId(obj, e.cell)))) return false;
        	
        	if("USER_ID" == gfnGrdBindColId(obj, obj.getCellPos())){ 
        		gfnSetTmprData("USER_ID"		,this.dsList.getColumn(e.row, "USER_ID"));
        		gfnOpenMenuUrl("SPTNR::SUserDetail");
        	}
        }
        /**
          * @함수명	: fnAdd
          * @desc     	: (공통버튼)신규
          */
        this.fnAdd = function(){
        	gfnOpenMenuUrl("SPTNR::SUserDetail");
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
        		switch(obj.name){
        			case "edtUserId": //구매담당자
        				this.fnSearch();
        			break;
        			
        			case "edtUserNm" : //업체명
        				this.fnSearch();
        			break;
        			
        			default:
        			
        			break;	
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.divViewCompBody00.grdList.addEventHandler("oncelldblclick", this.fnListOncelldblclick, this);
            this.divViewCompCond00.edtUserId.addEventHandler("onkeyup", this.fnEnterOnkeyup, this);
            this.divViewCompCond00.staUserId.addEventHandler("onclick", this.divViewCompCond00_staUserId_onclick, this);
            this.divViewCompCond00.edtUserNm.addEventHandler("onkeyup", this.fnEnterOnkeyup, this);

        };

        this.loadIncludeScript("SUserList.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
