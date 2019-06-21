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
                this.set_name("BMtrlAttr");
                this.set_titletext("품목속성관리");
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
            obj._setContents("<ColumnInfo><Column id=\"CHECKED\" size=\"256\" type=\"INT\"/><Column id=\"CRTR_ID\" size=\"50\" type=\"string\"/><Column id=\"RMARK\" size=\"1500\" type=\"string\"/><Column id=\"ATTR_NM\" size=\"300\" type=\"string\"/><Column id=\"LAST_CHG_DT\" size=\"7\" type=\"string\"/><Column id=\"ALT_USE\" size=\"1\" type=\"string\"/><Column id=\"ATTR_ID\" size=\"20\" type=\"string\"/><Column id=\"LAST_CHGR_ID\" size=\"50\" type=\"string\"/><Column id=\"LAST_CHGR_NM\" size=\"50\" type=\"STRING\"/><Column id=\"CRT_DT\" size=\"7\" type=\"string\"/><Column id=\"SEQ\" size=\"256\" type=\"INT\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"ATTR\" size=\"256\" type=\"STRING\"/><Column id=\"RMARK\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompBody00", "absolute", "0", "69", null, null, "15", "72", this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "27", null, null, "0", "37", this.divViewCompBody00);
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
            obj.getSetter("f_mode").set("N");
            obj.getSetter("f_save").set("N");
            obj.getSetter("f_sort").set("N");
            obj.getSetter("f_totalCnt").set("Y");
            obj.getSetter("objNm").set("검색결과 그리드");
            obj.set_taborder("8");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"300\"/><Column size=\"100\"/><Column size=\"85\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" expr=\"\" text=\"속성\"/><Cell col=\"2\" expr=\"\" text=\"비고\"/><Cell col=\"3\" expr=\"\" text=\"수정일자\"/><Cell col=\"4\" expr=\"\" text=\"수정자\"/><Cell col=\"5\" expr=\"\" text=\"수정\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\" tooltiptext=\"bind:CHECKED\"/><Cell col=\"1\" style=\"align: ;\" text=\"bind:ATTR_NM\" tooltiptext=\"bind:ATTR_NM\"/><Cell col=\"2\" cssclass=\"cell_link\" style=\"align:left;background2: ;\" text=\"bind:RMARK\" tooltiptext=\"bind:RMARK\"/><Cell calendardisplaynulltype=\"none\" col=\"3\" displaytype=\"date\" mask=\"yyyy.MM.dd\" style=\"background2: ;\" text=\"bind:LAST_CHG_DT\" tooltiptext=\"bind:LAST_CHG_DT\"/><Cell col=\"4\" text=\"bind:LAST_CHGR_NM\" tooltiptext=\"bind:LAST_CHGR_NM\"/><Cell calendardisplaynulltype=\"none\" col=\"5\" displaytype=\"button\" edittype=\"button\" text=\"수정\"/></Band></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "10", this.divViewCompBody00);
            obj.set_scrollbars("none");
            obj.set_taborder("9");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnMtrlAttrAdd", "absolute", null, "4", "65", "20", "69", null, this.divViewCompBody00);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("협력사추가");
            obj.set_positionstep("1");
            obj.set_taborder("10");
            obj.set_text("추가");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnMtrlAttrDel", "absolute", null, "4", "65", "20", "2", null, this.divViewCompBody00);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("협력사추가");
            obj.set_positionstep("1");
            obj.set_taborder("11");
            obj.set_text("삭제");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Div("divViewCompCond00", "absolute", "0", "0", null, "43", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);
            obj = new Static("staRmark", "absolute", "289", "10", "85", "24", null, null, this.divViewCompCond00);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_taborder("8");
            obj.set_text("비고");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Edit("edtAttrNm", "absolute", "69", "10", "220", "24", null, null, this.divViewCompCond00);
            obj.getSetter("objNm").set("평가서명");
            obj.set_taborder("9");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staAttrNm", "absolute", "0", "10", "69", "24", null, null, this.divViewCompCond00);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_taborder("10");
            obj.set_text("속성");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Edit("edtRmark", "absolute", "374", "10", "300", "24", null, null, this.divViewCompCond00);
            obj.getSetter("objNm").set("평가서명");
            obj.set_taborder("11");
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
            obj = new Layout("default", "", 0, 43, this.divViewCompCond00,
            	//-- Layout function
            	function(p) {
            		p.set_cssclass("div_WF_SearchBg");
            		p.set_taborder("3");

            	}
            );
            this.divViewCompCond00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1220, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("품목속성관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","divViewCompCond00.edtAttrNm","value","dsCondition","ATTR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divViewCompCond00.edtRmark","value","dsCondition","RMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnMtrlAttrAddLangBind2017110317184271058","divViewCompBody00.btnMtrlAttrAdd","text","gdsLabel","EPRO_LABEL_00144");
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
        this.registerScript("BMtrlAttr.xfdl", function(exports) {
        /**
         * @파일명       	: BMtrlAttrList.xfdl
         * @생성자       	: 정준화
         * @생성일자     	: 2017. 9. 07.
         * @설명			: 품목속성관리 리스트 화면
         * @최종수정자		: 정준화
         * @최종수정일자	: 2017. 9. 07.
        */  

        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {
        	/*
        		MM_SYS_CD 테이블의 컬럼 참조
        		code: CD_GRP + CD_CLS 
        		, sSelectType:[A : --전체--], [S : --선택--]
        		, sFiltered(코드 필터링): 구분자:CD, CD, CD, CD ......
        									가져올 코드만 표시 방법 - S:WRI, ING, CXL, RTN ......
        									빼고 가져올 코드표시 방법 - D:WRI, ING, CXL, RTN ......
        	*/

        	var param = [					
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
          * @함수명	: fnFormOnload
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.LoadEventInfo(이벤트변수)
          * @desc     	: 폼 onload이벤트
          */
        this.fnFormOnload = function(obj,e)
        {
        	/*
        		그리드 User Property 속성
        		f_excel		엑셀다운로드 버튼
        		f_filter	필터 버튼
        		f_hide		컬럼 숨기기/보이기 버튼
        		f_find 		찾기
        		f_sort 		정렬
        		f_fix 		틀고정
        		f_height 	그리드 높이 증가/감소
        		f_save 		그리드 포멧 저장
        		f_colSize 	컬럼 리사이즈
        		f_mode 		엑셀 입력 모드
        		f_init		초기화
        		f_totalCnt	페이징 아닐 때 토탈건수 보여주기
        	*/
        	
        	//그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기(그리드 컴포넌트, 페이징div 컴포넌트, 폼오브젝트(this))
         	gfnSetGrdFunc(this.divViewCompBody00.grdList, this.divViewCompBody00.divPaging, this);
         	
         	
        	this.dsCondition.addRow();
        	
        	//디폴트 값 세팅
        	this.dsCondition.setColumn(0,"BRANCH_CD", application.gdsUserInfo.getColumn(0, "BRANCH_CD"));
        	
        	
        	//기본검색
         	this.fnSearch();
        }

        /**
          * @함수명	: fnAdd
          * @desc     	: (공통버튼)신규
          */
        this.fnAdd = function()
        {
        	
        }

        /**
          * @함수명	: fnDelete
          * @desc     	: (공통버튼)삭제
          */
        this.fnDelete = function()
        {

        }

        /**
          * @함수명	: fnPreSave
          * @desc     	: 저장 전 처리
          */
        this.fnPreSave = function()
        {
        	return true;
        }

        /**
          * @함수명	: fnSave
          * @desc     	: (공통버튼)저장
          */
        this.fnSave = function()
        {
        	if(!this.fnPreSave()) return false;
        	
        	var sSvcID = "saveMtrlAttr";
        	var sController = "epro.mtrl.service.BMtrlService.saveMtrlAttr";
        	var sInDatasets = "dsList=dsList:A";
        	var sOutDatasets = "dsList=dsList";
        	var sCallbackFunc = "fnTrCallBack";
        		
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        	
        	
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

        	var sSvcID = "searchMtrlAttr";
        	var sController = "epro.mtrl.service.BMtrlService.searchMtrlAttr";
        	var sInDatasets = "dsCondition=dsCondition";
        	var sOutDatasets = "dsList=dsList";
        	var sCallbackFunc = "fnTrCallBack";
        	
        	/*
        		페이징일 때 oPaging 선언후 사용
        		inDs:검색조건 데이터셋, grid:그리드 컴포넌트, divPaging:페이징 div
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
        		case "searchMtrlAttr" :
        		break;
        		
        		case "deleteMtrlAttr" :
        		    gfnAlert(strErrMsg);
        		    this.fnSearch();
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
        	
        	if("LAST_CHGR_NM" == gfnGrdBindColId(obj, obj.getCellPos())){	//담당자
        		var sArg = { 	porg_id:this.dsList.getColumn(this.dsList.rowposition, "PORG_ID")
        						, user_id:this.dsList.getColumn(this.dsList.rowposition, "LAST_CHGR_ID           ")
        					};
        		gfnModalPop(this, "PopupUserInfo", "CPOP::PPOPC000P05.xfdl", sArg, "fnPopCallBack", 900, 500);
        	}
        }

        /**
          * @함수명	: fnListOncellclick
          * @input    	: obj:Grid(그리드 오브젝트), e:nexacro.GridClickEventInfo(이벤트변수)
          * @desc     	: 리스트 그리드 oncellclick 이벤트
          */
        this.fnListOncellclick = function(obj,e)
        {
        //	if(gfnIsNull(this.dsList.getColumn(e.row, gfnGrdBindColId(obj, e.cell)))) return false;
        	
        	if("수정" == obj.getCellProperty("Body",e.cell,"text")){
        		var sArg = { 
        					 attr_id:this.dsList.getColumn(e.row,"ATTR_ID")
        					,attr_nm:this.dsList.getColumn(e.row,"ATTR_NM")
        					,rmark:this.dsList.getColumn(e.row,"RMARK")
        					};
        		gfnModalPop(this, "mtrlAttrPop", "BMTRL::BMtrlAttrPop.xfdl", sArg, "fnPopCallBack", 510, 200);
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
        	
        	if(sPopupId == "samplePop"){
        		this.dsReturn.loadXML(rtn);
        		
        	}else if(sPopupId == "mtrlAttrPop"){
        		this.fnSearch();
        	}
        }

        /**
          * @함수명	: divViewCompBody00_btnMtrlAttrAdd_onclick
          * @input    	: obj:Button(버튼 오브젝트), e:nexacro.ClickEventInfo(이벤트변수)
          * @desc     	: 품목속성 추가 버튼 이벤트
          */
        this.divViewCompBody00_btnMtrlAttrAdd_onclick = function(obj,e)
        {
        	var sArg = { attr_id:""
        			   , attr_nm:"" 
        			   , popTitle:"품목속성관리"
        			   };
        	gfnModalPop(this, "mtrlAttrPop", "BMTRL::BMtrlAttrPop.xfdl", sArg, "fnPopCallBack", 510, 200);	
        }

        /**
          * @함수명	: divViewCompBody00_btnMtrlAttrDel_onclick
          * @input    	: obj:Button(버튼 오브젝트), e:nexacro.ClickEventInfo(이벤트변수)
          * @desc     	: 품목속성 추가 버튼 이벤트
          */
        this.divViewCompBody00_btnMtrlAttrDel_onclick = function(obj,e)
        {
        	if(!gfnIsGrdChk(this.dsList)){
        		gfnAlert("삭제할 내역이 존재하지 않습니다."); 
        		return;
        	}
        	
        	if(!gfnConfirm("선택한 속성을 삭제 하시겠습니까?")) return;
        	
        	var sSvcID = "deleteMtrlAttr";
        	var sController = "epro.mtrl.service.BMtrlService.deleteMtrlAttr";
        	var sInDatasets = "dsList=dsList:A";
        	var sOutDatasets = "dsList=dsList";
        	var sCallbackFunc = "fnTrCallBack";
        		
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.divViewCompBody00.grdList.addEventHandler("oncellclick", this.fnListOncellclick, this);
            this.divViewCompBody00.grdList.addEventHandler("oncelldblclick", this.fnListOncelldblclick, this);
            this.divViewCompBody00.btnMtrlAttrAdd.addEventHandler("onclick", this.divViewCompBody00_btnMtrlAttrAdd_onclick, this);
            this.divViewCompBody00.btnMtrlAttrDel.addEventHandler("onclick", this.divViewCompBody00_btnMtrlAttrDel_onclick, this);
            this.divViewCompCond00.edtAttrNm.addEventHandler("onkeyup", this.fnEnterOnkeyup, this);
            this.divViewCompCond00.edtRmark.addEventHandler("onkeyup", this.fnEnterOnkeyup, this);

        };

        this.loadIncludeScript("BMtrlAttr.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
