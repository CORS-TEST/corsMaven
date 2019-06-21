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
                this.set_name("BCntrWriList");
                this.set_titletext("반품교환접수현황");
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
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"20\" type=\"STRING\"/><Column id=\"PR_NO\" size=\"256\" type=\"STRING\"/><Column id=\"CD_PR_STTS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PR_STTS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PRE_PR_DIST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PRE_PR_DIST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SRC_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TTL\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"HOPE_REPLY_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_CNTNT\" type=\"STRING\" size=\"256\"/><Column id=\"APP_DOC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ATTCH_FILE_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PCHRGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PCHRGR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RTN_CNTNT\" type=\"STRING\" size=\"256\"/><Column id=\"RCV_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RTN_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LINK_URL\" type=\"STRING\" size=\"256\"/><Column id=\"CRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DUMMY\" type=\"STRING\" size=\"256\"/><Column id=\"CRT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_CHGR_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCondition", this);
            obj._setContents("<ColumnInfo><Column id=\"SRCH_REQ_DAY_STR\" type=\"STRING\" size=\"8\"/><Column id=\"SRCH_REQ_DAY_END\" type=\"STRING\" size=\"8\"/><Column id=\"SRCH_MTRL_CD\" type=\"STRING\" size=\"40\"/><Column id=\"SRCH_MTRL_NM\" type=\"STRING\" size=\"400\"/><Column id=\"SRCH_INT_TYPE\" type=\"STRING\" size=\"1\"/><Column id=\"SRCH_CD_VOC_STTS\" type=\"STRING\" size=\"20\"/><Column id=\"SRCH_REQR_ID\" type=\"STRING\" size=\"20\"/><Column id=\"SRCH_REQR_NM\" type=\"STRING\" size=\"20\"/><Column id=\"SRCH_PCHRGR_ID\" type=\"STRING\" size=\"20\"/><Column id=\"SRCH_PCHRGR_NM\" type=\"STRING\" size=\"20\"/><Column id=\"SRCH_PTNR_ID\" type=\"STRING\" size=\"40\"/><Column id=\"SRCH_PTNR_NM\" type=\"STRING\" size=\"400\"/><Column id=\"SRCH_STR_CD\" type=\"STRING\" size=\"40\"/><Column id=\"SRCH_STR_NM\" type=\"STRING\" size=\"400\"/><Column id=\"SRCH_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SRCH_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SRCH_INPUT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdZZ22", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompCond01", "absolute", "0", "35", null, "110", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.getSetter("objNm").set("");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            obj = new Static("staWarning", "absolute", "-1", "89", null, "19", "0", null, this.divViewCompCond01);
            obj.set_taborder("49");
            obj.set_text("- 검색조건 없이 검색 시 속도가 저하 될 수 있습니다.");
            obj.set_cssclass("sta_WF_SearchText");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staPchrgr", "absolute", "0", "5", "115", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("66");
            obj.set_text("구매담당자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("검색어-구매담당자");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staMtrl", "absolute", "363", "5", "85", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("70");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("검색어-품목");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staReqr", "absolute", "0", "34", "115", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("71");
            obj.set_text("요청자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("검색어-요청자");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staStr", "absolute", "817", "5", "85", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("74");
            obj.set_text("입고창고");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("검색어-입고창고");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staPtnr", "absolute", "375", "34", "73", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("81");
            obj.set_text("협력사");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("검색어-협력사");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divPchrgr", "absolute", "120", "5", "250", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("85");
            obj.set_text("Div00");
            obj.getSetter("objNm").set("검색조건-구매담당자");
            obj.set_url("CCOMP::ComSrchUser.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divReqr", "absolute", "120", "34", "250", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("86");
            obj.set_text("Div00");
            obj.getSetter("objNm").set("검색조건-요청자");
            obj.set_url("CCOMP::ComSrchUser.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divMtrl", "absolute", "454", "5", "350", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("87");
            obj.set_text("Div00");
            obj.getSetter("objNm").set("검색조건-품목");
            obj.set_url("CCOMP::ComSrchMtrl.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divStr", "absolute", "902", "5", "250", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("88");
            obj.set_text("Div00");
            obj.getSetter("objNm").set("검색조건-입고창고");
            obj.set_url("CCOMP::ComSrchStr.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divPtnr", "absolute", "454", "34", "250", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("89");
            obj.set_text("Div00");
            obj.getSetter("objNm").set("검색조건-협력사");
            obj.set_url("CCOMP::ComSrchPtnr.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staReqr00", "absolute", "0", "62", "115", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("90");
            obj.set_text("반품요청번호");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("검색어-요청자");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divInput", "absolute", "120", "62", "220", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("91");
            obj.set_text("Div00");
            obj.getSetter("objNm").set("검색조건-요청자");
            obj.set_url("CCOMP::ComSrchInput.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);

            obj = new Div("divViewCompBody00", "absolute", "0", "171", null, null, "15", "0", this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "9", this.divViewCompBody00);
            obj.getSetter("objNm").set("페이징");
            obj.set_scrollbars("none");
            obj.set_taborder("2");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnRcv", "absolute", null, "0", "87", "24", "264", null, this.divViewCompBody00);
            obj.set_taborder("3");
            obj.set_text("접수");
            obj.set_cssclass("btn_WF_Ssign");
            obj.getSetter("objNm").set("버튼-접수");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnReturnClose", "absolute", null, "0", "87", "24", "176", null, this.divViewCompBody00);
            obj.set_taborder("4");
            obj.set_text("교환완료");
            obj.set_cssclass("btn_WF_Ssign");
            obj.getSetter("objNm").set("버튼-교환완료");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnReturn", "absolute", null, "0", "87", "24", "0", null, this.divViewCompBody00);
            obj.set_taborder("5");
            obj.set_text("반려");
            obj.set_cssclass("btn_WF_Ssign");
            obj.getSetter("objNm").set("버튼-반려");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnReturnPo", "absolute", null, "0", "87", "24", "88", null, this.divViewCompBody00);
            obj.set_taborder("6");
            obj.set_text("반품발주");
            obj.set_cssclass("btn_WF_Ssign");
            obj.getSetter("objNm").set("버튼-반품발주");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "39", null, null, "0", "37", this.divViewCompBody00);
            obj.set_cssclass("grd_default");
            obj.set_taborder("7");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"114\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"70\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"요청구분\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"구매유형\"/><Cell col=\"4\" text=\"품목코드\"/><Cell col=\"5\" text=\"품목명\"/><Cell col=\"6\" text=\"입고수량\"/><Cell col=\"7\" text=\"단위\"/><Cell col=\"8\" text=\"입고일자\"/><Cell col=\"9\" text=\"수량\"/><Cell col=\"10\" text=\"요청자\"/><Cell col=\"11\" text=\"사유\"/><Cell col=\"12\" text=\"구매담당자\"/><Cell col=\"13\" text=\"구매팀의견\"/><Cell col=\"14\" text=\"요청일시\"/><Cell col=\"15\" text=\"협력사\"/><Cell col=\"16\" text=\"입고번호\"/><Cell col=\"17\" text=\"구매요청번호\"/><Cell col=\"18\" text=\"품번\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"background: ;\" text=\"bind:CHECKED\" expandshow=\"hide\"/><Cell col=\"1\" displaytype=\"combo\" text=\"bind:INT_TYPE\" combodataset=\"ds_intType\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\"/><Cell col=\"2\" text=\"bind:CD_VOC_STTS_NM\"/><Cell col=\"3\" text=\"bind:CD_DOC_CTGR_NM\"/><Cell col=\"4\" cssclass=\"cell_link\" text=\"bind:MTRL_CD\"/><Cell col=\"5\" style=\"align:left;\" cssclass=\"cell_link\" text=\"bind:MTRL_NM\"/><Cell col=\"6\" style=\"align:right;\" text=\"bind:DLV_QTY\"/><Cell col=\"7\" text=\"bind:CD_UNIT_NM\"/><Cell col=\"8\" displaytype=\"date\" text=\"bind:INSP_DAY\" mask=\"yyyy.MM.dd\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"9\" style=\"align:right;\" text=\"bind:QTY\"/><Cell col=\"10\" cssclass=\"cell_link\" text=\"bind:REQR_NM\"/><Cell col=\"11\" style=\"align:left;\" text=\"bind:RMARK\"/><Cell col=\"12\" cssclass=\"cell_link\" text=\"bind:PCHRGR_NM\"/><Cell col=\"13\" text=\"bind:RTN_CNTNT\"/><Cell col=\"14\" displaytype=\"date\" text=\"bind:CRT_DT\" mask=\"yyyy.MM.dd HH:mm\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"15\" style=\"align:left;\" cssclass=\"cell_link\" text=\"bind:PTNR_NM\"/><Cell col=\"16\" text=\"bind:DLV_NO\"/><Cell col=\"17\" cssclass=\"cell_link\" text=\"bind:PR_NO\"/><Cell col=\"18\" text=\"bind:ITM_NO\"/></Band></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Div("divViewCompCond00", "absolute", "0", "0", null, "36", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.style.set_align("center");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);
            obj = new Div("divReqDt", "absolute", "121", "6", "219", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("1");
            obj.getSetter("objNm").set("검색조건-요청일자");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Combo("cboIntType", "absolute", "652", "6", "111", "24", null, null, this.divViewCompCond00);
            this.divViewCompCond00.addChild(obj.name, obj);
            var cboIntType_innerdataset = new Dataset("cboIntType_innerdataset", this.divViewCompCond00.cboIntType);
            cboIntType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">--전체--</Col></Row><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">반품</Col></Row><Row><Col id=\"codecolumn\">B</Col><Col id=\"datacolumn\">교환</Col></Row></Rows>");
            obj.set_innerdataset(cboIntType_innerdataset);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("objNm").set("검색조건-요청분류");
            obj.set_index("-1");
            obj = new Combo("cboCdVocStts", "absolute", "454", "6", "111", "24", null, null, this.divViewCompCond00);
            this.divViewCompCond00.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_innerdataset("@dsCdZZ22");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("검색조건-상태");
            obj = new Static("staPtnrNm", "absolute", "0", "5", "115", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("6");
            obj.set_text("요청일자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("검색어-요청일자");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staPtnrNm00", "absolute", "577", "6", "75", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("7");
            obj.set_text("요청구분");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("검색어-요청구분");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staPtnrNm01", "absolute", "369", "6", "85", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("8");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("검색어-상태");
            this.divViewCompCond00.addChild(obj.name, obj);

            obj = new Button("btnFold", "absolute", "45.66%", "145", "56", "17", null, null, this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_Fold_Close");
            obj.getSetter("objNm").set("버튼-접고펼치기");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 110, this.divViewCompCond01,
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
            		p.set_titletext("반품교환접수현황");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item10","divViewCompCond00.cboCdVocStts","value","dsCondition","SRCH_CD_VOC_STTS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","divViewCompCond00.cboIntType","value","dsCondition","SRCH_INT_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::ComSrchUser.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComSrchUser.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComSrchMtrl.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComSrchStr.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComSrchPtnr.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComSrchInput.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompCalFromTo.xfdl");
        };
        
        // User Script
        this.registerScript("BPrReturnRcvList.xfdl", function(exports) {
        /**
         * @파일명			: BPrRcvList
         * @생성자			: 배열
         * @생성일시		: 2019. 05. 22.
         * @설명			: 구매요청접수현황
         * @최종수정자		: 배열
         * @최종수정일시	: 2019. 05. 22.
        */  

        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {
        	var param = [
        					 {code:"ZZ22", sSelectType:"A"}
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
         	gfnSetGrdFunc(
        				this.divViewCompBody00.grdList
        				,this.divViewCompBody00.divPaging
        				,this,{isTran:"Y", tranNm:"BPrService.searchPrReturnRcvList", dsParam:this.dsCondition}
        				);
         	
         	this.divViewCompCond01.divPchrgr.fnSet(this.dsCondition		, "SRCH_PCHRGR_ID", "SRCH_PCHRGR_NM");		 	
         	this.divViewCompCond01.divReqr.fnSet(this.dsCondition		, "SRCH_REQR_ID", "SRCH_REQR_NM");		
         	this.divViewCompCond01.divMtrl.fnSet(this.dsCondition		, "SRCH_MTRL_CD", "SRCH_MTRL_NM");		
         	this.divViewCompCond01.divStr.fnSet(this.dsCondition		, "SRCH_STR_CD", "SRCH_STR_NM");		
         	this.divViewCompCond01.divPtnr.fnSet(this.dsCondition		, "SRCH_PTNR_CD", "SRCH_PTNR_NM");		
        	this.divViewCompCond01.divInput.fnSet(this.dsCondition		, "SRCH_INPUT", "fnSearch");		
        	this.divViewCompCond00.divReqDt.fnSetDate(this.dsCondition	, "SRCH_REQ_DAY_STR", "SRCH_REQ_DAY_END");	
        	
        	this.dsCondition.setColumn(0,"SRCH_INT_TYPE","");
        	this.dsCondition.setColumn(0,"SRCH_CD_VOC_STTS","");
        	
        	
         	this.fnFold();		//조회조건 Div 접기/펼치기 세팅
        	this.fnSearch();
        }

        /**
          * @함수명	: fnPreSearch
          * @desc     	: 조회 전 처리
          */
        this.fnPreSearch = function(arg)
        {
        	//선택된 아이템의 유무를 리턴한다.
        	var rtn = gfnGetChkRowString(this.dsList);	
        	if(!rtn) return false;
        	
        	this.dsList.set_enableevent(false);
        	this.dsList.filter("CHECKED==1");
        	
        	// 접수 전 체크로직
        	if(arg=="RCV"){
        		
        		var intType = "";
        		for(var i=0; i<this.dsList.rowcount; i++){
        			
        			if(this.dsList.getColumn(i,"CD_VOC_STTS")!="ZZ22REQ"){
        				gfnAlert("요청중인 상태만 접수 하실수 있습니다.");
        				
        				this.dsList.filter("");
        				this.dsList.set_enableevent(true);
        				
        				return false;
        			}			
        			if(i==0){ 
        			
        				intType = this.dsList.getColumn(0,"INT_TYPE");
        			
        			}else{
        				if(intType != this.dsList.getColumn(i,"INT_TYPE")){
        					gfnAlert("반품과 교환은 같이  접수 하실수 없습니다.");
        				
        					this.dsList.filter("");
        					this.dsList.set_enableevent(true);
        					
        					return false;
        				}
        			}
        		}
        		
        	// 교환완료 전 체크로직
        	}else if(arg=="CHG"){
        		
        		for(var i=0; i<this.dsList.rowcount; i++){
        			
        			if(this.dsList.getColumn(i,"CD_VOC_STTS")!="ZZ22RCV"){
        				gfnAlert("접수 상태에서만 교환완료 하실수 있습니다.");
        				
        				this.dsList.filter("");
        				this.dsList.set_enableevent(true);
        				
        				return false;
        			}
        			
        			if(this.dsList.getColumn(i,"INT_TYPE")!="B"){
        				gfnAlert("교환 품목만 교환완료 하실수 있습니다.");
        				
        				this.dsList.filter("");
        				this.dsList.set_enableevent(true);
        				
        				return false;
        			}
        		}
        	
        	// 반려 전 체크로직
        	}else if(arg=="RTN"){
        		
        		for(var i=0; i<this.dsList.rowcount; i++){
        			
        			if(this.dsList.getColumn(i,"CD_VOC_STTS")!="ZZ22REQ" && this.dsList.getColumn(i,"CD_VOC_STTS")!="ZZ22RCV"){
        				gfnAlert("요청이나 접수 상태에서만 반려 하실수 있습니다.");
        				
        				this.dsList.filter("");
        				this.dsList.set_enableevent(true);
        				
        				return false;
        			}
        		}
        	
        	// 반품발주 전 체크로직
        	}else if(arg=="PO"){
        		
        		var ptnrId = "";
        		var cdDocCtgr = "";
        		for(var i=0; i<this.dsList.rowcount; i++){
        			
        			if(this.dsList.getColumn(i,"CD_VOC_STTS")!="ZZ22RCV"){
        				gfnAlert("접수 상태에서만 반품발주를 하실수 있습니다.");
        				
        				this.dsList.filter("");
        				this.dsList.set_enableevent(true);
        				
        				return false;
        			}
        			if(i==0){ 
        			
        				ptnrId = this.dsList.getColumn(0,"PTNR_ID");
        				cdDocCtgr = this.dsList.getColumn(0,"CD_DOC_CTGR");
        			
        			}else{
        				
        				if(this.dsList.getColumn(i,"INT_TYPE") != "A"){
        					gfnAlert("반품 품목만 반품발주를 하실수 있습니다.");
        					
        					this.dsList.filter("");
        					this.dsList.set_enableevent(true);
        					
        					return false;
        				}
        				
        				if(ptnrId != this.dsList.getColumn(i,"PTNR_ID")){
        					gfnAlert("협력업체가 다른 품목은 함께 발주를 진행할수 없습니다.");
        				
        					this.dsList.filter("");
        					this.dsList.set_enableevent(true);
        					
        					return false;
        				}
        				
        				if(cdDocCtgr != this.dsList.getColumn(i,"CD_DOC_CTGR")){
        					gfnAlert("구매유형이 다른 품목은 함께 발주를 진행할수 없습니다.");
        				
        					this.dsList.filter("");
        					this.dsList.set_enableevent(true);
        					
        					return false;
        				}
        			}
        		}
        		
        		if(!this.gfn_confirm("반품발주 하시겠습니까?")) {
        			this.dsList.filter("");
        			this.dsList.set_enableevent(true);
        			return false;
        		}
        	}
        	
        	this.dsList.filter("");
        	this.dsList.set_enableevent(true);
        	
        	return true;
        }

        /**
          * @함수명	: fnSearch
          * @desc     	: 조회 프로세스
          */
        this.fnSearch = function(svcId)
        {
        	
        	var sSvcID = "searchPrReturnRcvList";
        	var sController = "epro.pur.service.BPrService.searchPrReturnRcvList";
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
        		case "searchPrReturnRcvList" :
        		break;
        		 
        		default:
        		break;	
        	}
        }

        
         /**
          * @함수명	: divViewCompBody00_btnRcv_onclick
          * @desc     	: 접수버튼
          */
        this.divViewCompBody00_btnRcv_onclick = function(obj,e)
        {

        	if(!this.fnPreSearch("RCV"))  return; 
        	
        	var sArg = { 
        				gubun : "RCV"
        				, intType:this.dsList.getColumn(this.dsList.findRow("CHECKED",1),"INT_TYPE")
        				};
        	gfnModalPop(this, "BPrReturnRmarkPop", "BPUR::BPrReturnRmarkPop.xfdl", sArg, "fnPopCallBack", 550, 500);		
        		 
        }
         /**
          * @함수명	: divViewCompBody00_btnReturnClose_onclick
          * @desc     	: 교환완료버튼
          */
        this.divViewCompBody00_btnReturnClose_onclick = function(obj,e)
        {
        	if(!this.fnPreSearch("CHG"))  return; 
        	
        	var sArg = { 
        				gubun : "CHG"
        				, intType:this.dsList.getColumn(this.dsList.findRow("CHECKED",1),"INT_TYPE")
        				};
        	gfnModalPop(this, "BPrReturnRmarkPop", "BPUR::BPrReturnRmarkPop.xfdl", sArg, "fnPopCallBack", 550, 500);		
        }
         /**
          * @함수명	: divViewCompBody00_btnReturnPo_onclick
          * @desc     	: 반품발주버튼
          */
        this.divViewCompBody00_btnReturnPo_onclick = function(obj,e)
        {
        	if (!this.fnPreSearch("PO")) return;
        	
        	var sSvcID = "saveReturnPo";
        	var sController = "epro.pur.service.BPrService.saveReturnPo";
        	var sInDatasets = "dsList=dsList";
        	var sOutDatasets = "";
        	var sCallbackFunc = "fnTrCallBack";
        	
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);

        	
        }
         /**
          * @함수명	: divViewCompBody00_btnReturn_onclick
          * @desc     	: 반려버튼
          */
        this.divViewCompBody00_btnReturn_onclick = function(obj,e)
        {
        	if(!this.fnPreSearch("RTN"))  return; 
        	
        	var sArg = { 
        				gubun : "RTN"
        				, intType:this.dsList.getColumn(this.dsList.findRow("CHECKED",1),"INT_TYPE")
        				};
        	gfnModalPop(this, "BPrReturnRmarkPop", "BPUR::BPrReturnRmarkPop.xfdl", sArg, "fnPopCallBack", 550, 500);		
        }
         
        /**
        	@function	fn_popCallBack()
        	@desc   	팝업 CallBack 함수
        */
        this.fnPopCallBack = function(sPopupId,rtn)
        {
        	if(gfnIsNull(rtn)) return;
        	
        	if(rtn.indexOf("<Dataset id=") == 0){
        		
        		this.dsReturn.loadXML(rtn);
        		
        		if(sPopupId == ""){
        			
        		} 
        		
        	}
        }
         
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.FormOninit, this);
            this.addEventHandler("onload", this.FormOnload, this);
            this.divViewCompCond01.staPchrgr.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond01.staMtrl.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond01.staReqr.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond01.staStr.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond01.staPtnr.addEventHandler("onclick", this.fnPchrgeSearch, this);
            this.divViewCompCond01.staReqr00.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompBody00.btnRcv.addEventHandler("onclick", this.divViewCompBody00_btnRcv_onclick, this);
            this.divViewCompBody00.btnReturnClose.addEventHandler("onclick", this.divViewCompBody00_btnReturnClose_onclick, this);
            this.divViewCompBody00.btnReturn.addEventHandler("onclick", this.divViewCompBody00_btnReturn_onclick, this);
            this.divViewCompBody00.btnReturnPo.addEventHandler("onclick", this.divViewCompBody00_btnReturnPo_onclick, this);
            this.divViewCompCond00.staPtnrNm.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond00.staPtnrNm00.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond00.staPtnrNm01.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.btnFold.addEventHandler("onclick", this.btnFold_onclick, this);

        };

        this.loadIncludeScript("BPrReturnRcvList.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
