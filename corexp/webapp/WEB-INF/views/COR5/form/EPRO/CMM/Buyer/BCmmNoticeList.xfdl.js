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
                this.set_name("BCmmNoticeList");
                this.set_titletext("공지사항");
                this._setFormPosition(0,0,1220,711);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCondition", this);
            obj.getSetter("firenextcount").set("0");
            obj._setContents("<ColumnInfo><Column id=\"DOC_NM\" size=\"400\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"20\" type=\"STRING\"/><Column id=\"INT_OPEN_SITE\" size=\"1\" type=\"STRING\"/><Column id=\"BBS_CTGR\" size=\"100\" type=\"STRING\"/><Column id=\"LANG_CD\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsList", this);
            obj.getSetter("firenextcount").set("0");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM91", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompBody00", "absolute", "0", "36", null, null, "15", "10", this);
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
            obj.getSetter("f_totalCnt").set("Y");
            obj.getSetter("objNm").set("공지사항현황그리드");
            obj.set_taborder("6");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"450\"/><Column size=\"114\"/><Column size=\"92\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"110\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"게시물번호\" tooltiptext=\"\"/><Cell col=\"1\" expr=\"\" text=\"제목\" tooltiptext=\"\"/><Cell col=\"2\" expr=\"\" text=\"공개여부\" tooltiptext=\"\"/><Cell col=\"3\" expr=\"\" text=\"조회수\" tooltiptext=\"\"/><Cell col=\"4\" expr=\"\" text=\"작성자\" tooltiptext=\"\"/><Cell col=\"5\" expr=\"\" text=\"작성일자\" tooltiptext=\"\"/><Cell col=\"6\" expr=\"\" text=\"수정자\" tooltiptext=\"\"/><Cell col=\"7\" expr=\"\" text=\"수정일자\" tooltiptext=\"\"/></Band><Band id=\"body\"><Cell cssclass=\"cell_link\" style=\"align: ;\" text=\"bind:DOC_NO\" tooltiptext=\"bind:DOC_NO\"/><Cell col=\"1\" style=\"align:left;color:EXPR(ALT_TOP_DISP=='Y'?'seagreen':'');color2:EXPR(ALT_TOP_DISP=='Y'?'seagreen':'');font:EXPR(ALT_TOP_DISP=='Y'?'bold 9 arial':'');selectcolor:EXPR(ALT_TOP_DISP=='Y'?'seagreen':'');selectfont:EXPR(ALT_TOP_DISP=='Y'?'bold 9 arial':'');\" text=\"bind:DOC_NM\" tooltiptext=\"bind:DOC_NM\"/><Cell calendardisplaynulltype=\"none\" col=\"2\" displaytype=\"normal\" text=\"bind:CD_INT_OPEN_SITE_NM\" tooltiptext=\"bind:CD_INT_OPEN_SITE_NM\"/><Cell col=\"3\" displaytype=\"number\" mask=\"9,999.##\" style=\"align:right;\" text=\"bind:READ_CNT\" tooltiptext=\"bind:READ_CNT\"/><Cell col=\"4\" displaytype=\"normal\" style=\"align:center;\" text=\"bind:WRTR_NM\" tooltiptext=\"bind:WRTR_NM\"/><Cell calendardisplaynulltype=\"none\" col=\"5\" displaytype=\"date\" mask=\"yyyy-MM-dd\" text=\"bind:CRT_DT\" tooltiptext=\"bind:CRT_DT\"/><Cell calendardisplaynulltype=\"none\" col=\"6\" displaytype=\"normal\" text=\"bind:LAST_CHGR_NM\" tooltiptext=\"bind:LAST_CHGR_NM\"/><Cell calendardisplaynulltype=\"none\" col=\"7\" displaytype=\"date\" mask=\"yyyy-MM-dd\" text=\"bind:LAST_CHG_DT\" tooltiptext=\"bind:LAST_CHG_DT\"/></Band></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "10", this.divViewCompBody00);
            obj.set_scrollbars("none");
            obj.set_taborder("7");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Div("divViewCompCond00", "absolute", "0", "0", null, "36", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);
            obj = new Static("staCdEvalRunStts", "absolute", "389", "5", "170", "24", null, null, this.divViewCompCond00);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("objNm").set("공개여부");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.set_taborder("2");
            obj.set_text("공개여부");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Edit("edtTtl", "absolute", "170", "5", "219", "24", null, null, this.divViewCompCond00);
            obj.getSetter("objNm").set("제목");
            obj.set_taborder("1");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staTtl", "absolute", "0", "5", "170", "24", null, null, this.divViewCompCond00);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("objNm").set("제목");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.set_taborder("0");
            obj.set_text("제목");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Combo("cboCdEvalRunStts", "absolute", "572", "5", "154", "24", null, null, this.divViewCompCond00);
            this.divViewCompCond00.addChild(obj.name, obj);
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_innerdataset("@dsCdCM91");
            obj.getSetter("objNm").set("공개여부");
            obj.set_positionstep("1");
            obj.set_taborder("4");


            
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
            		p.set_titletext("공지사항");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","divViewCompCond00.edtTtl","value","dsCondition","DOC_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPagingVi","divViewCompBody00.divPaging","visible","dsObjBindVi","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPagingEn","divViewCompBody00.divPaging","enable","dsObjBindEn","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCdEvalRunSttsVi","divViewCompCond00.staCdEvalRunStts","visible","dsObjBindVi","staCdEvalRunStts");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCdEvalRunSttsEn","divViewCompCond00.staCdEvalRunStts","enable","dsObjBindEn","staCdEvalRunStts");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTtlVi","divViewCompCond00.edtTtl","visible","dsObjBindVi","edtTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTtlEn","divViewCompCond00.edtTtl","readonly","dsObjBindEn","edtTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTtlVi","divViewCompCond00.staTtl","visible","dsObjBindVi","staTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTtlEn","divViewCompCond00.staTtl","enable","dsObjBindEn","staTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("grdListFormatId","divViewCompBody00.grdList","formatid","dsObjBindGrid","grdList");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","divViewCompCond00.cboCdEvalRunStts","value","dsCondition","INT_OPEN_SITE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboIntOpenSiteVi","divViewCompCond00.cboCdEvalRunStts","visible","dsObjBindVi","cboCdEvalRunStts");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboIntOpenSiteEn","divViewCompCond00.cboCdEvalRunStts","readonly","dsObjBindEn","cboCdEvalRunStts");
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
        this.registerScript("BCmmNoticeList.xfdl", function(exports) {
        /**
         * @파일명       	: BCmmNoticeList.xfdl
         * @생성자       	: 배열
         * @생성일자     	: 2017. 9. 06.
         * @설명			: 공지사항 리스트(내부)
         * @최종수정자		: 김민성
         * @최종수정일자	: 2017. 9. 20.
        */  

          /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {

        	var param = [
        					{code:"CM91", sSelectType:"A", sFiltered:"S:B,S"}	
        				];
        	gfnGetCode(this, param);
        }

        this.fnFormOninit = function(obj,e)
        {
        	this.fnSetCode();
        } 
         
        /**
          * @함수명	: fnFormOnload
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.LoadEventInfo(이벤트변수)
          * @desc     	: 폼 onload이벤트
          */
        this.fnFormOnload = function(obj,e){
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
        	
        	/*
        		그리드 기능 추가(그리드 컴포넌트, 페이징div, this(form), 엑셀다운로드 정보)
        		
        		*엑셀 다운로드 정보
        		isTran가 N이면 현재 화면에 보이는 그리드 내용만 엑셀 다운로드
        				   Y이면 쿼리조회한 내용 엑셀 다운로드 

        		tranNm : isTran Y일때 조회할 자바단 메소드
        		dsParam : isTran Y일때 조회할 때 조회조건이 담긴 데이터셋
        	*/
        	var sArgEx = {
        					isTran:"Y", tranNm:"BCmmService.searchCmmNotice", dsParam:this.dsCondition
        				}
         	gfnSetGrdFunc(this.divViewCompBody00.grdList, this.divViewCompBody00.divPaging, this, sArgEx);
         	gfnSetObj("A");
        	this.dsCondition.addRow();
        	//디폴트 값 세팅
        	this.dsCondition.setColumn(0, "DOC_NM", "");
        	this.dsCondition.setColumn(0, "INT_OPEN_SITE", "");
        	this.dsCondition.setColumn(0, "BBS_CTGR","NOTICE");
        	
        	this.dsCondition.setColumn(0, "BRANCH_CD", application.gdsUserInfo.getColumn(0, "BRANCH_CD"));
         	this.fnSearch();
        }

        /**
          * @함수명	: fnAdd
          * @desc     	: (공통버튼)신규
          */
        this.fnAdd = function(){
        	gfnOpenMenuUrl("BCMM::BCmmNoticeDetail.xfdl");
        }

        /**
          * @함수명	: fnDelete
          * @desc     	: (공통버튼)삭제
          */
        this.fnDelete = function(){

        }

        /**
          * @함수명	: fnPreSave
          * @desc     	: 저장 전 처리
          */
        this.fnPreSave = function(){
        	return true;
        }

        /**
          * @함수명	: fnSave
          * @desc     	: (공통버튼)저장
          */
        this.fnSave = function(){
        	if(!this.fnPreSave()) return false;
        }

        /**
          * @함수명	: fnClose
          * @desc     	: (공통버튼)닫기
          */
        this.fnClose = function(){	
        	return true;
        }

        /**
          * @함수명	: fnPreSearch
          * @desc     	: 조회 전 처리
          */
        this.fnPreSearch = function(){
        	return true;
        }

        /**
          * @함수명	: fnSearch
          * @desc     	: 조회 프로세스
          */
        this.fnSearch = function(){
        	if(!this.fnPreSearch()) return false;

        	var sSvcID = "searchCmmNotice";
        	var sController = "epro.cmm.service.BCmmService.searchCmmNotice";
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
        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg){
        	if(strErrCd < 0) return;
        	
        	switch(strSvcID){
        		case "searchCmmNotice" :
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
        this.fnListOncelldblclick = function(obj,e){
        	if(gfnIsNull(this.dsList.getColumn(e.row, gfnGrdBindColId(obj, e.cell)))) return false;
        	
        	if("DOC_NO" == gfnGrdBindColId(obj, obj.getCellPos())){  
        		gfnSetTmprData("DOC_NO",this.dsList.getColumn(e.row, "DOC_NO"));
        		gfnSetTmprData("BBS_CTGR",this.dsList.getColumn(e.row, "BBS_CTGR"));
        		gfnOpenMenuUrl("BCMM::BCmmNoticeDetail");
        	} 
        }
          
        /**
          * @함수명	: fnEnterOnkeyup
          * @input    	: obj:Edit(에디트 오브젝트), e:nexacro.KeyEventInfo(이벤트변수)
          * @desc     	: 검색조건에서 ENTER(keycode::13) 입력시 이벤트를 발생시킨다. 
          */
        this.fnEnterOnkeyup = function(obj,e){
        	if(e.keycode == "13"){
        			this.fnSearch();
        	}
        }
         

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.divViewCompBody00.grdList.addEventHandler("oncelldblclick", this.fnListOncelldblclick, this);
            this.divViewCompCond00.edtTtl.addEventHandler("onkeyup", this.fnEnterOnkeyup, this);

        };

        this.loadIncludeScript("BCmmNoticeList.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
