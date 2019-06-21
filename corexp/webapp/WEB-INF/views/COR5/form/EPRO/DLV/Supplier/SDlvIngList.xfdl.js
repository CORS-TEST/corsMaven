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
                this.set_name("SDlvIngList");
                this.set_titletext("납품진행현황");
                this._setFormPosition(0,0,1220,711);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_sortItem", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM_LO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_NM_LO\">[선택]</Col><Col id=\"CD_ID\"/></Row><Row><Col id=\"CD_ID\">MPD.PO_NO</Col><Col id=\"CD_NM_LO\">발주번호</Col></Row><Row><Col id=\"CD_ID\">MPD.DLV_NO</Col><Col id=\"CD_NM_LO\">납품서번호</Col></Row><Row><Col id=\"CD_ID\">MPD.DLV_PLAN_DAY</Col><Col id=\"CD_NM_LO\">납품예정일자</Col></Row><Row><Col id=\"CD_ID\">MPI.DLV_REQ_DAY</Col><Col id=\"CD_NM_LO\">납품요청일자</Col></Row><Row><Col id=\"CD_NM_LO\">품번</Col><Col id=\"CD_ID\">MPDI.ITM_NO</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_condition", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PO_NO_ARR\" size=\"20\" type=\"string\"/><Column id=\"BRANCH_CD\" size=\"20\" type=\"string\"/><Column id=\"PO_DAY\" size=\"20\" type=\"string\"/><Column id=\"DLV_REQ_DAY_STR\" size=\"20\" type=\"string\"/><Column id=\"DLV_REQ_DAY_END\" size=\"20\" type=\"string\"/><Column id=\"DLV_PLAN_DAY_STR\" size=\"20\" type=\"string\"/><Column id=\"DLV_PLAN_DAY_END\" size=\"20\" type=\"string\"/><Column id=\"MTRL_CD\" size=\"20\" type=\"string\"/><Column id=\"MTRL_NM\" size=\"20\" type=\"string\"/><Column id=\"DLV_NO_ARR\" size=\"20\" type=\"string\"/><Column id=\"CD_DLV_STTS\" size=\"20\" type=\"string\"/><Column id=\"STR_CD\" size=\"20\" type=\"string\"/><Column id=\"SORT_ITEM1\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ITEM2\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ITEM3\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ITEM4\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE1\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE2\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE3\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE4\" type=\"STRING\" size=\"256\"/><Column id=\"PO_DAY_STR\" type=\"STRING\" size=\"256\"/><Column id=\"PO_DAY_END\" type=\"STRING\" size=\"256\"/><Column id=\"SL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_list", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"40\" type=\"string\"/><Column id=\"BRANCH_NM\" size=\"40\" type=\"string\"/><Column id=\"PO_NO\" size=\"40\" type=\"string\"/><Column id=\"DLV_NO\" size=\"40\" type=\"string\"/><Column id=\"CD_DLV_STTS\" size=\"40\" type=\"string\"/><Column id=\"CD_DLV_STTS_NM\" size=\"40\" type=\"string\"/><Column id=\"ITM_NO\" size=\"40\" type=\"string\"/><Column id=\"MTRL_CD\" size=\"40\" type=\"string\"/><Column id=\"MTRL_NM\" size=\"40\" type=\"string\"/><Column id=\"STR_CD\" size=\"40\" type=\"string\"/><Column id=\"SL_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_UNIT\" size=\"40\" type=\"string\"/><Column id=\"CD_UNIT_NM\" size=\"40\" type=\"string\"/><Column id=\"UNT_PRICE\" size=\"40\" type=\"string\"/><Column id=\"DLV_QTY\" size=\"40\" type=\"string\"/><Column id=\"AMT\" size=\"40\" type=\"string\"/><Column id=\"DLV_PLAN_DAY\" size=\"40\" type=\"string\"/><Column id=\"DLV_REQ_DAY\" size=\"40\" type=\"string\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_return", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_body", "absolute", "0", "170", null, null, "15", "0", this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_list", "absolute", "0%", "10", null, null, "0%", "37", this.div_body);
            obj.set_cssclass("grd_default");
            obj.set_taborder("14");
            obj.set_binddataset("ds_list");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"85\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"166\"/><Column size=\"110\"/><Column size=\"60\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"운영단위\"/><Cell col=\"1\" text=\"발주번호\" combodisplaynulltext=\"CD_CNTR_STTS\"/><Cell col=\"2\" text=\"납품서번호\"/><Cell col=\"3\" text=\"상태\"/><Cell col=\"4\" text=\"품번\"/><Cell col=\"5\" text=\"품목코드\"/><Cell col=\"6\" text=\"품목명\"/><Cell col=\"7\" text=\"창고\"/><Cell col=\"8\" text=\"단위\"/><Cell col=\"9\" text=\"단가\"/><Cell col=\"10\" text=\"수량\"/><Cell col=\"11\" text=\"금액\"/><Cell col=\"12\" text=\"납품예정일자\"/><Cell col=\"13\" text=\"납품요청일자\"/></Band><Band id=\"body\"><Cell text=\"bind:BRANCH_NM\" tooltiptext=\"bind:BRANCH_NM\"/><Cell col=\"1\" edittype=\"none\" cssclass=\"cell_link\" text=\"bind:PO_NO\" maskchar=\" \" tooltiptext=\"bind:PO_NO\"/><Cell col=\"2\" cssclass=\"cell_link\" text=\"bind:DLV_NO\" tooltiptext=\"bind:DLV_NO\"/><Cell col=\"3\" text=\"bind:CD_DLV_STTS_NM\" tooltiptext=\"bind:CD_DLV_STTS_NM\"/><Cell col=\"4\" style=\"align: ;\" text=\"bind:ITM_NO\" tooltiptext=\"bind:ITM_NO\"/><Cell col=\"5\" text=\"bind:MTRL_CD\" tooltiptext=\"bind:MTRL_CD\"/><Cell col=\"6\" style=\"align:left;\" text=\"bind:MTRL_NM\" tooltiptext=\"bind:MTRL_NM\"/><Cell col=\"7\" style=\"align:left;\" text=\"bind:SL_NM\" tooltiptext=\"bind:SL_NM\"/><Cell col=\"8\" text=\"bind:CD_UNIT_NM\" tooltiptext=\"bind:CD_UNIT_NM\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:UNT_PRICE\" mask=\"#,##0.00\" tooltiptext=\"bind:UNT_PRICE\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:DLV_QTY\" mask=\"#,##0.00\" tooltiptext=\"bind:DLV_QTY\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AMT\" mask=\"#,##0\" tooltiptext=\"bind:AMT\"/><Cell col=\"12\" displaytype=\"date\" text=\"bind:DLV_PLAN_DAY\" mask=\"yyyy.MM.dd\" calendardisplaynulltype=\"none\" tooltiptext=\"bind:DLV_PLAN_DAY\"/><Cell col=\"13\" displaytype=\"date\" text=\"bind:DLV_REQ_DAY\" mask=\"yyyy.MM.dd\" calendardisplaynulltype=\"none\" tooltiptext=\"bind:DLV_REQ_DAY\"/></Band></Format></Formats>");
            this.div_body.addChild(obj.name, obj);

            obj = new Button("btn_fold", "absolute", null, "160", "63", "13", "15", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_SearchClose");
            this.addChild(obj.name, obj);

            obj = new Div("div_condition1", "absolute", "0", "43", null, "117", "15", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_SearchBg2");
            obj.getSetter("objNm").set("");
            this.addChild(obj.name, obj);
            obj = new Static("stc_warning", "absolute", "0%", "97", null, "19", "0%", null, this.div_condition1);
            obj.set_taborder("34");
            obj.set_text("- 검색조건 없이 검색 시 속도가 저하 될 수 있습니다.");
            obj.set_cssclass("sta_WF_SearchText");
            obj.getSetter("lbcd").set("");
            this.div_condition1.addChild(obj.name, obj);
            obj = new Static("sta_poDay", "absolute", "0", "10", "117", "24", null, null, this.div_condition1);
            obj.set_taborder("35");
            obj.set_text("발주일자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.div_condition1.addChild(obj.name, obj);
            obj = new Static("sta_order", "absolute", "0", "68", "117", "24", null, null, this.div_condition1);
            obj.set_taborder("38");
            obj.set_text("정렬순서");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.div_condition1.addChild(obj.name, obj);
            obj = new Static("sta_poDay00", "absolute", "337", "10", "117", "24", null, null, this.div_condition1);
            obj.set_taborder("39");
            obj.set_text("납품요청일자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.div_condition1.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label11", "absolute", "399", "39", "117", "24", null, null, this.div_condition1);
            obj.set_taborder("41");
            obj.set_text("납품서번호");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.div_condition1.addChild(obj.name, obj);
            obj = new Edit("edt_dlvNoArr", "absolute", "516", "39", "200", "24", null, null, this.div_condition1);
            obj.set_taborder("42");
            obj.getSetter("objNm").set("납품서번호");
            this.div_condition1.addChild(obj.name, obj);
            obj = new Static("sta_poDay01", "absolute", "674", "10", "117", "24", null, null, this.div_condition1);
            obj.set_taborder("43");
            obj.set_text("납품예정일자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.div_condition1.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label09", "absolute", "0", "39", "117", "24", null, null, this.div_condition1);
            obj.set_taborder("45");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.div_condition1.addChild(obj.name, obj);
            obj = new Edit("edt_mtrlCd", "absolute", "117", "39", "80", "24", null, null, this.div_condition1);
            obj.set_taborder("46");
            obj.set_cssclass("edt_default");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("objNm").set("품목코드");
            this.div_condition1.addChild(obj.name, obj);
            obj = new Edit("edt_mtrlNm", "absolute", "199", "39", "200", "24", null, null, this.div_condition1);
            obj.set_taborder("47");
            obj.set_lengthunit("utf8");
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("품목명");
            this.div_condition1.addChild(obj.name, obj);
            obj = new Button("btn_mtrl", "absolute", "374", "39", "25", "24", null, null, this.div_condition1);
            obj.set_taborder("48");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("자재 검색 버튼");
            this.div_condition1.addChild(obj.name, obj);
            obj = new Combo("cbo_cdDlvStts", "absolute", "833", "39", "150", "24", null, null, this.div_condition1);
            this.div_condition1.addChild(obj.name, obj);
            obj.set_taborder("49");
            obj.set_innerdataset("ds_cdDL10");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("상태");
            obj = new Static("sta_Fctry00", "absolute", "716", "39", "117", "24", null, null, this.div_condition1);
            obj.set_taborder("50");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.div_condition1.addChild(obj.name, obj);
            obj = new Button("btn_multiSelect", "absolute", "691", "39", "25", "21", null, null, this.div_condition1);
            obj.set_taborder("51");
            obj.set_cssclass("btn_WF_MultiSmall");
            obj.getSetter("objNm").set("발주번호 멀티선택 버튼");
            this.div_condition1.addChild(obj.name, obj);

            obj = new Div("div_condition", "absolute", "0%", "0", null, "43", "15", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);
            obj = new Static("sta_docCtgr00", "absolute", "633", "10", "117", "21", null, null, this.div_condition);
            obj.set_taborder("11");
            obj.set_text("운영단위");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.div_condition.addChild(obj.name, obj);
            obj = new Static("sta_bsnsPlc", "absolute", "0", "10", "117", "21", null, null, this.div_condition);
            obj.set_taborder("12");
            obj.set_text("발주번호");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.div_condition.addChild(obj.name, obj);
            obj = new Static("sta_docCtgr", "absolute", "316", "10", "117", "21", null, null, this.div_condition);
            obj.set_taborder("13");
            obj.set_text("창고");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.div_condition.addChild(obj.name, obj);
            obj = new Edit("edt_poNoArr", "absolute", "116", "10", "200", "24", null, null, this.div_condition);
            obj.set_taborder("14");
            obj.getSetter("objNm").set("발주번호");
            this.div_condition.addChild(obj.name, obj);
            obj = new Button("btn_multiSelect", "absolute", "291", "10", "25", "24", null, null, this.div_condition);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_MultiSmall");
            obj.getSetter("objNm").set("발주번호 멀티선택 버튼");
            this.div_condition.addChild(obj.name, obj);
            obj = new Edit("edt_slNm", "absolute", "433", "9", "200", "24", null, null, this.div_condition);
            obj.set_taborder("17");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("품목명");
            this.div_condition.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_body,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div00");

            	}
            );
            this.div_body.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 117, this.div_condition1,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.set_cssclass("div_WF_SearchBg2");
            		p.getSetter("objNm").set("");

            	}
            );
            this.div_condition1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_condition,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.set_cssclass("div_WF_SearchBg");

            	}
            );
            this.div_condition.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1220, 711, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("납품진행현황");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item5","div_condition1.edt_dlvNoArr","value","ds_condition","DLV_NO_ARR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","div_condition1.edt_mtrlCd","value","ds_condition","MTRL_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","div_condition1.edt_mtrlNm","value","ds_condition","MTRL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","div_condition1.cbo_cdDlvStts","value","ds_condition","CD_DLV_STTS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","div_condition.edt_poNoArr","value","ds_condition","PO_NO_ARR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_condition.edt_slNm","value","ds_condition","SL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("SDlvIngList.xfdl", function(exports) {
        /**
         * @파일명       	: SDlvList.xfdl
         * @생성자       	: 이준호
         * @생성일자     	: 2019. 05. 03
         * @설명			: 납품진행현황
         * @최종수정자		: 이준호
         * @최종수정일자	: 2019. 05. 03
        */
        /**
          * @함수명	: fnFormOninit
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.InitEventInfo(이벤트변수)
          * @desc     	: 화면이 최초 열렸을때 실행되는 이벤트.
          */
        this.fnFormOninit = function(obj,e)
        {
        	this.fnSetCode();
        }

        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function(){
        	var param = [
        					 {code:"CM10", sSelectType:"A"}
        					,{code:"DL10", sSelectType:"A"}
        				];
        	gfnGetCode(this, param);
        }
        /**
          * @함수명	: fnFormOnload
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.LoadEventInfo(이벤트변수)
          * @desc     	: 화면이 로딩 될때마다 실행되는 이벤트 
          */
        this.fnFormOnload = function(obj,e)
        {
        	//this.gfn_formOnLoad(obj);
            		
        	//그리드 공통버튼 설정
        	gfnSetGrdFunc(this.div_body.grd_list, this.div_body.divPaging, this);
        		
        	//this.div_condition1.div_poDay.fn_setDate(this.ds_condition, "PO_DAY_STR", "PO_DAY_END");
        	//this.div_condition1.div_poDay00.fn_setDate(this.ds_condition, "DLV_REQ_DAY_STR", "DLV_REQ_DAY_END");
        	//this.div_condition1.div_poDay01.fn_setDate(this.ds_condition, "DLV_PLAN_DAY_STR", "DLV_PLAN_DAY_END");
        	
        	this.ds_condition.addRow();	
        	
            this.ds_condition.setColumn(0, "CD_DLV_STTS","");
            
        //  this.ds_condition.setColumn(0,"DLV_PLAN_DAY_STR",this.gfn_addMonth(this.gfn_today(),-1));
        // 	this.ds_condition.setColumn(0,"DLV_PLAN_DAY_END",this.gfn_today());
        		
        	this.ds_condition.setColumn(0,"SORT_ITEM1","MPD.DLV_NO");
        	this.ds_condition.setColumn(0,"SORT_TYPE1","DESC");
        		
        	this.ds_condition.setColumn(0,"SORT_ITEM2","MPD.DLV_PLAN_DAY");
        	this.ds_condition.setColumn(0,"SORT_TYPE2","DESC");

        	this.ds_condition.setColumn(0,"SORT_ITEM3","MPDI.ITM_NO");
        	this.ds_condition.setColumn(0,"SORT_TYPE3","ASC");	
        	this.ds_condition.setColumn(0,"SORT_ITEM4","");
        	this.ds_condition.setColumn(0,"SORT_TYPE4","");

            this.fnSearch();
        }

        
        	// 시스템 공통함수 호출
        	
         
        /**
        	@function	fn_preSearch()
        	@desc   	조회 전 처리
        */
        this.fn_preSearch = function()
        {
        	//this.ds_condition.setColumn(0, "BRANCH_CD", this.div_condition.div_branchCd.cbo_branchCd.value);
        	return true;
        }

        /**
        	@function	fnSearch()
        	@desc   	조회 프로세스
        */
        this.fnSearch = function()
        {
        	if(!this.fn_preSearch()) return false;
        	
            var sSvcID = "searchDlvIngList";
        	var sController = "epro.dlv.service.SDlvService.searchDlvIngList";
        	var sInDatasets = "in_ds=ds_condition";
        	var sOutDatasets = "ds_list=ds_srch";
        	var sCallbackFunc = "fnTrCallBack";
        	
        	//var	oPaging = [
        		//			{inDs:this.dsCondition, grid:this.divViewCompBody00.grdList, divPaging:this.divViewCompBody00.divPaging}
        		//		];
        				
           gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
        	@function	fn_commAdd()
        	@desc   	(공통버튼)신규
        */
        this.fn_commAdd = function()
        {

        }

        /**
        	@function	fn_commDelete()
        	@desc   	(공통버튼)삭제 
        */
        this.fn_commDelete = function()
        {

        }

        /**
        	@function	fn_preSave()
        	@desc   	저장 전 처리
        */
        this.fn_preSave = function()
        {
        	return true;
        }

        /**
        	@function	fn_commSave()
        	@desc   	(공통버튼)저장
        */
        this.fn_commSave = function()
        {
        	if (!fn_preSave()) return false;
        }

        /**
        	@function	btn_commCancel()
        	@desc   	(공통버튼)취소
        */
        this.btn_commCancel = function()
        {

        }

        /**
        	@function	fn_trCallBack()
        	@desc   	Transaction Callback함수
        */
        this.fn_trCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	if(strErrCd < 0)
        	{
        		return;
        	}
        	
        	switch(strSvcID)
        	{
        		case "search" :
        		break;
        		
        		default:
        		break;	
        	}
        }

        /**
        	@function	fn_commClose()
        	@desc   	(공통버튼)닫기
        */
        this.fn_commClose = function()
        {
        	return true;
        }

        /**
        	@function	div_body_grd_list_oncelldblclick()
        	@desc   	그리드 oncelldblclick 이벤트
        */
        this.div_body_grd_list_oncelldblclick = function(obj,e)
        {
        	if(this.ds_list.rowcount==0) return;
        	if(this.gfn_isNull(this.ds_list.getColumn(e.row, this.gfn_grdBindColName(obj, e.cell)))) return false;
        	
        	if("PO_NO" == this.gfn_grdBindColName(obj, obj.getCellPos()))
        	{
        		this.gfn_setTmprData("BRANCH_CD"   , this.ds_list.getColumn(e.row, "BRANCH_CD"));
        		this.gfn_setTmprData("PO_NO"	   , this.ds_list.getColumn(e.row, "PO_NO"));
        		this.gfn_setTmprData("COREXP_KIDS" , this.ds_list.getColumn(e.row, "PO_COREXP_KIDS"));

        		this.gfn_dialog("PopupPo", "PORS::PPORS100P00.xfdl", "", "fn_popCallBack");
        	}
        	else if("DLV_NO" == this.gfn_grdBindColName(obj, obj.getCellPos()))
        	{
        		var sArg = {	agv_poNo 		: this.ds_list.getColumn(this.ds_list.rowposition, "PO_NO")
        						,agv_dlvNo 		: this.ds_list.getColumn(this.ds_list.rowposition, "DLV_NO")
        						,agv_branchCd	: this.ds_list.getColumn(this.ds_list.rowposition, "BRANCH_CD")
        						,agv_strCd		: this.ds_list.getColumn(this.ds_list.rowposition, "STR_CD")
        						,agv_kid		: this.ds_list.getColumn(this.ds_list.rowposition, "COREXP_KIDS")
        						,agv_type		: "mgr"	//납품서관리화면에서 호출.
        				};
        		this.gfn_dialog("createDlvPop", "DLVS::PDLVS100P00.xfdl", sArg, "fn_popCallBack");
        	}
        	else if("MTRL_CD" == this.gfn_grdBindColName(obj, obj.getCellPos()))
        	{
        // 		var sArg = { 
        // 						mtrl_cd:this.ds_list.getColumn(this.ds_list.rowposition, "MTRL_CD")	
        // 					};
        // 		this.gfn_dialog("PopupComMtrlView", "commPop::PPOPC700P01.xfdl", sArg, "fn_popCallBack");
        	}
        }

        /**
        	@function	div_condition1_btn_mtrl_onclick()
        	@desc   	자재검색팝업 호출
        */
        this.div_condition1_btn_mtrl_onclick = function(obj,e)
        {
        	var sArg = { agv_id:""
        			    , agv_nm:this.div_condition1.edt_mtrlNm.value
        				, agv_mode:"" };
        	this.gfn_dialog("PopupComMtrlSrch", "commPop::PPOPC700P00.xfdl", sArg, "fn_popCallBack");
        }

        /**
        	@function	fn_popCallBack()
        	@desc   	팝업 CallBack 함수
        */
        this.fn_popCallBack = function(sPopupId,rtn)
        {
        	if(this.gfn_isNull(rtn)) return;
        	
        	if(rtn.indexOf("<Dataset id=") == 0){
        		//자재 검색 CallBack
        		if(sPopupId == "PopupComMtrlSrch")
        		{
        			this.ds_return.loadXML(rtn);
        			this.ds_srchOpt.setColumn(0,"MTRL_CD",this.ds_return.getColumn(0,"MTRL_CD"));
        			this.ds_srchOpt.setColumn(0,"MTRL_NM",this.ds_return.getColumn(0,"MTRL_NM"));
        		}
        		if(sPopupId == "StorageSingSrch") //창고 검색
        		{
        			this.ds_return.loadXML(rtn);
        			this.ds_condition.setColumn(0, "STR_CD" , this.ds_return.getColumn(0,"STR_CD"));
        			this.ds_condition.setColumn(0, "SL_NM" , this.ds_return.getColumn(0,"SL_NM"));		
        		}
        	}
        }

        /**
        	@function	fn_onkeyup_event()
        	@desc   	검색조건에서 ENTER(keycode::13) BACKSPACE(keycode::8) 입력시 이벤트를 발생시킨다.
        */
        this.fn_onkeyup_event = function(obj,e)
        {
        	//Enter 입력시
        	if(e.keycode == "13")
        	{
        		this.fn_commSrch();
        	}
        }

        /**
        	@function	div_condition_btn_multiSelect_onclick()
        	@desc   	발주번호 멀티입력 팝업 호출
        */
        this.div_condition_btn_multiSelect_onclick = function(obj,e)
        {
        	//멀티입력 컴포넌트 호출
        	this.gfn_popMultiInput(this.div_condition.edt_poNoArr);	
        }

        /**
        	@function	div_condition1_btn_multiSelect_onclick()
        	@desc   	납품번호 멀티입력 팝업 호출
        */
        this.div_condition1_btn_multiSelect_onclick = function(obj,e)
        {
        	//멀티입력 컴포넌트 호출
        	this.gfn_popMultiInput(this.div_condition.edt_dlvNoArr);	
        }

        /**
        	@function	fn_ontextchanged_event()
        	@desc   	ontextchanged 이벤트
        */
        this.fn_ontextchanged_event = function(obj,e)
        {
        	if(obj.name == "edt_mtrlNm")
        	{
        		this.gfn_initKey(this.ds_condition,e,"MTRL_CD");
        	}
        	else if(obj.name == "edt_slNm")
        	{
        		this.gfn_initKey(this.ds_condition,e,"STR_CD");
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.div_body.grd_list.addEventHandler("oncelldblclick", this.div_body_grd_list_oncelldblclick, this);
            this.div_condition1.edt_dlvNoArr.addEventHandler("onkeyup", this.fn_onkeyup_event, this);
            this.div_condition1.edt_mtrlNm.addEventHandler("onkeyup", this.fn_onkeyup_event, this);
            this.div_condition1.edt_mtrlNm.addEventHandler("ontextchanged", this.fn_ontextchanged_event, this);
            this.div_condition1.btn_mtrl.addEventHandler("onclick", this.div_condition1_btn_mtrl_onclick, this);
            this.div_condition1.btn_multiSelect.addEventHandler("onclick", this.div_condition1_btn_multiSelect_onclick, this);
            this.div_condition.edt_poNoArr.addEventHandler("onkeyup", this.fn_onkeyup_event, this);
            this.div_condition.btn_multiSelect.addEventHandler("onclick", this.div_condition_btn_multiSelect_onclick, this);
            this.div_condition.edt_slNm.addEventHandler("onkeyup", this.fn_onkeyup_event, this);
            this.div_condition.edt_slNm.addEventHandler("ontextchanged", this.fn_ontextchanged_event, this);

        };

        this.loadIncludeScript("SDlvIngList.xfdl", true);

       
    };
}
)();
