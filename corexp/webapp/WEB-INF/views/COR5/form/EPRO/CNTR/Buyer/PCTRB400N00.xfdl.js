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
                this.set_name("PCTRB400N00");
                this.set_titletext("계약서템플릿작성");
                this._setFormPosition(0,0,1220,711);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
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

            obj = new Dataset("ds_cntrTmpl", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"TKEY\" size=\"40\" type=\"string\"/><Column id=\"ALT_USE\" size=\"1\" type=\"string\"/><Column id=\"CNTR_CNTNT\" size=\"4000\" type=\"STRING\"/><Column id=\"TTL\" size=\"600\" type=\"string\"/><Column id=\"CRTR_ID\" size=\"50\" type=\"string\"/><Column id=\"CRTR_NM\" size=\"90\" type=\"string\"/><Column id=\"RMARK\" size=\"1500\" type=\"string\"/><Column id=\"LAST_CHG_DT\" size=\"7\" type=\"string\"/><Column id=\"CD_CNTR_TYPE_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_CNTR_TYPE\" size=\"40\" type=\"string\"/><Column id=\"LAST_CHGR_ID\" size=\"50\" type=\"string\"/><Column id=\"LAST_CHGR_NM\" size=\"90\" type=\"string\"/><Column id=\"CD_CNTR_CTGR_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_CNTR_CTGR\" size=\"40\" type=\"string\"/><Column id=\"CRT_DT\" size=\"7\" type=\"string\"/><Column id=\"PORG_ID\" size=\"20\" type=\"string\"/><Column id=\"CNTR_TMPL_ID\" size=\"40\" type=\"string\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_2", "absolute", "0", "58", null, "24", "15", null, this);
            obj.set_taborder("3");
            obj.getSetter("objNm").set("DIV-헤더 타이틀");
            this.addChild(obj.name, obj);
            obj = new Button("btn_opHead", "absolute", "0", "-4", "147", "24", null, null, this.div_2);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_DivClose");
            obj.getSetter("objNm").set("접기펼치기 버튼");
            obj.set_text("계약서");
            obj.getSetter("lbcd").set("");
            this.div_2.addChild(obj.name, obj);

            obj = new Div("div_21", "absolute", "0", "81", null, "142", "15", null, this);
            obj.set_taborder("1");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("DIV-헤더 상세");
            this.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label05", "absolute", "0%", "5", null, "132", "0%", null, this.div_21);
            obj.set_taborder("80");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_21.addChild(obj.name, obj);
            obj = new Edit("edt_Ttl", "absolute", "117", "15", "400", "24", null, null, this.div_21);
            obj.set_taborder("0");
            obj.set_lengthunit("utf8");
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("계약서명");
            this.div_21.addChild(obj.name, obj);
            obj = new Static("st_Ttl", "absolute", "0", "15", "117", "24", null, null, this.div_21);
            obj.set_taborder("82");
            obj.set_text("계약서명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("lbcd").set("");
            this.div_21.addChild(obj.name, obj);
            obj = new Static("st_cdCntrType", "absolute", "600", "44", "124", "24", null, null, this.div_21);
            obj.set_taborder("87");
            obj.set_text("계약구분");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("objNm").set("계약구분");
            obj.getSetter("lbcd").set("");
            this.div_21.addChild(obj.name, obj);
            obj = new Combo("cb_cdCntrType", "absolute", "724", "44", "180", "24", null, null, this.div_21);
            this.div_21.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_cdCT19");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("계약구분");
            obj = new Static("st_altUse", "absolute", "0", "44", "117", "24", null, null, this.div_21);
            obj.set_taborder("93");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("objNm").set("계약구분");
            obj.getSetter("lbcd").set("");
            obj.set_text("사용여부");
            this.div_21.addChild(obj.name, obj);
            obj = new Static("st_crtrNm", "absolute", "0", "73", "117", "24", null, null, this.div_21);
            obj.set_taborder("95");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("objNm").set("계약유형");
            obj.getSetter("lbcd").set("");
            this.div_21.addChild(obj.name, obj);
            obj = new Static("st_crtDt", "absolute", "600", "73", "124", "24", null, null, this.div_21);
            obj.set_taborder("96");
            obj.set_text("작성일자");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("objNm").set("계약구분");
            obj.getSetter("lbcd").set("");
            this.div_21.addChild(obj.name, obj);
            obj = new Static("st_lastChgrNm", "absolute", "0", "102", "117", "24", null, null, this.div_21);
            obj.set_taborder("97");
            obj.set_text("수정자");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("objNm").set("수정자");
            obj.getSetter("lbcd").set("");
            this.div_21.addChild(obj.name, obj);
            obj = new Static("st_lastChgDt", "absolute", "600", "102", "124", "24", null, null, this.div_21);
            obj.set_taborder("98");
            obj.set_text("수정일자");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("objNm").set("계약구분");
            obj.getSetter("lbcd").set("");
            this.div_21.addChild(obj.name, obj);
            obj = new Combo("cbo_altUse", "absolute", "117", "44", "100", "24", null, null, this.div_21);
            this.div_21.addChild(obj.name, obj);
            var cbo_altUse_innerdataset = new Dataset("cbo_altUse_innerdataset", this.div_21.cbo_altUse);
            cbo_altUse_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(cbo_altUse_innerdataset);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("사용여부");
            obj = new Edit("edt_lastChgrNm", "absolute", "117", "102", "250", "24", null, null, this.div_21);
            obj.set_taborder("100");
            obj.set_cssclass("edt_default_r");
            obj.getSetter("objNm").set("수정자");
            obj.set_enable("false");
            this.div_21.addChild(obj.name, obj);
            obj = new Calendar("cal_lastChgDt", "absolute", "724", "102", "120", "24", null, null, this.div_21);
            this.div_21.addChild(obj.name, obj);
            obj.set_taborder("101");
            obj.set_dateformat("yyyy.MM.dd");
            obj.set_cssclass("cal_default");
            obj.getSetter("objNm").set("수정일자");
            obj.set_enable("false");
            obj.set_value("null");
            obj.set_editformat("yyyy.MM.dd");
            obj = new Calendar("cal_crtDt", "absolute", "724", "73", "120", "24", null, null, this.div_21);
            this.div_21.addChild(obj.name, obj);
            obj.set_taborder("102");
            obj.set_dateformat("yyyy.MM.dd");
            obj.set_cssclass("cal_default");
            obj.getSetter("objNm").set("작성일자");
            obj.set_enable("false");
            obj.set_value("null");
            obj.set_editformat("yyyy.MM.dd");
            obj = new Edit("edt_crtrNm", "absolute", "117", "73", "250", "24", null, null, this.div_21);
            obj.set_taborder("3");
            obj.set_cssclass("edt_default_r");
            obj.getSetter("objNm").set("작성자");
            obj.set_enable("false");
            this.div_21.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "98.58%", "0", "15", "937", null, null, this);
            obj.set_taborder("48");
            obj.set_visible("false");
            obj.style.set_background("#ff7272ff");
            obj.set_text("w15");
            this.addChild(obj.name, obj);

            obj = new Div("div_31", "absolute", "0", "262", null, null, "15", "13", this);
            obj.set_taborder("2");
            obj.set_text("div_71");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new WebBrowser("wb_daumEditor", "absolute", "0", "0", null, null, "0", "0", this.div_31);
            obj.set_taborder("0");
            obj.getSetter("objNm").set("에디터");
            this.div_31.addChild(obj.name, obj);

            obj = new Div("div_1", "absolute", "0", "0", null, "44", "15", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBg3");
            obj.getSetter("objNm").set("컨트롤 박스");
            this.addChild(obj.name, obj);
            obj = new Combo("cbo_cntrCtgr", "absolute", "20", "10", "150", "24", null, null, this.div_1);
            this.div_1.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_cdCT11");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("계약유형");
            obj = new Edit("mae_docNo", "absolute", "172", "10", "240", "24", null, null, this.div_1);
            obj.set_taborder("1");
            obj.set_cssclass("input_point");
            obj.getSetter("objNm").set("문서번호");
            this.div_1.addChild(obj.name, obj);

            obj = new Div("div_3", "absolute", "0", "231", null, "24", "7", null, this);
            obj.set_taborder("76");
            obj.getSetter("objNm").set("DIV-헤더 타이틀");
            this.addChild(obj.name, obj);
            obj = new Button("btn_oPItem", "absolute", "0", "0", "108", "22", null, null, this.div_3);
            obj.set_taborder("0");
            obj.set_text("계약내용");
            obj.set_cssclass("btn_WF_DivClose");
            obj.getSetter("objNm").set("접기펼치기 버튼");
            obj.getSetter("lbcd").set("");
            this.div_3.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0.66%", "45", null, "10", "4.43%", null, this);
            obj.set_taborder("77");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#ff7272ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0.82%", "81", null, "5", "4.26%", null, this);
            obj.set_taborder("78");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#ff7272ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "1.31%", "218", null, "10", "3.77%", null, this);
            obj.set_taborder("79");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#ff7272ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "1.48%", "257", null, "5", "3.61%", null, this);
            obj.set_taborder("80");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#ff7272ff");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.div_2,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.getSetter("objNm").set("DIV-헤더 타이틀");

            	}
            );
            this.div_2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 142, this.div_21,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_scrollbars("none");
            		p.getSetter("objNm").set("DIV-헤더 상세");

            	}
            );
            this.div_21.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1042, 500, this.div_31,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.set_text("div_71");
            		p.set_scrollbars("none");

            	}
            );
            this.div_31.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 44, this.div_1,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_cssclass("div_WF_SearchBg3");
            		p.getSetter("objNm").set("컨트롤 박스");

            	}
            );
            this.div_1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.div_3,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("76");
            		p.getSetter("objNm").set("DIV-헤더 타이틀");

            	}
            );
            this.div_3.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1220, 711, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("FrmTemplate100");
            		p.set_titletext("계약서템플릿작성");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div_21.cbo_altUse","value","ds_cntrTmpl","ALT_USE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_21.edt_Ttl","value","ds_cntrTmpl","TTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_1.mae_docNo","value","ds_cntrTmpl","CNTR_TMPL_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","div_1.cbo_cntrCtgr","value","ds_cntrTmpl","CD_CNTR_CTGR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","div_21.cb_cdCntrType","value","ds_cntrTmpl","CD_CNTR_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","div_21.edt_crtrNm","value","ds_cntrTmpl","CRTR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","div_21.cal_crtDt","value","ds_cntrTmpl","CRT_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","div_21.cal_lastChgDt","value","ds_cntrTmpl","LAST_CHG_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","div_21.edt_lastChgrNm","value","ds_cntrTmpl","LAST_CHGR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("PCTRB400N00.xfdl", "lib::lib_all.xjs");
        this.registerScript("PCTRB400N00.xfdl", function(exports) {
        /**
           @file       PCTRB400N00.xfdl
           @desc       계약서 템플릿
           @author     김민성
           @makedate   2016.04.08
           @history    
        */
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::lib_all.xjs", null, exports); }	//include "lib::lib_all.xjs";

        /**
        	@var  this.fv_cntrTmplId
        	@desc 전역변수
        */
        this.fv_cntrTmplId = "";			//리스트화면에서 넘어오는 파라미터를 정의한다. 넘어온 파라미터는 onload에서 처리한다.
        this.fv_branchCd = "";				//리스트화면에서 넘어오는 파라미터를 정의한다. 넘어온 파라미터는 onload에서 처리한다.

        /**
        	@function	form_oninit()
        	@desc   	폼 oninit이벤트
        */
        this.form_oninit = function(obj,e)
        {	
        	this.fn_setCode();
        }

        this.fn_setCode = function(){
        	
        	//콤보박스 생성시 S:선택, A:전체
        	var param = [
        					{code:"CT11", sSelectType:"S"} // 계약유형
        					,{code:"CT19", sSelectType:"S"} // 계약구분
        				];

        	//공통코드 데이터셋 생성
        	this.gfn_getCommonCode(param);
        }

        /**
        	@function	form_onload()
        	@desc   	폼 onload이벤트
        */
        this.form_onload = function(obj,e)
        {	
        	this.ds_cntrTmpl.addRow();
        	
        	//이전화면에서 넘어오는 파라미터를 받는다.
        	this.fv_cntrTmplId = this.gfn_getTmprData("CNTR_TMPL_ID");
        	this.fv_branchCd   = this.gfn_getTmprData("BRANCH_CD");

        	if(this.fv_cntrTmplId == ""){
        		this.gfn_formOnLoad(obj,"C");
        		this.parent.div_commBtns.btn_comDel.set_visible(false);  //삭제 버튼
        		
        		this.ds_cntrTmpl.setColumn(0,"CRTR_NM",application.gds_userInfo.getColumn(0,"USER_NM"));
        		this.ds_cntrTmpl.setColumn(0,"CRT_DT",this.gfn_today());
        		this.ds_cntrTmpl.setColumn(0,"LAST_CHGR_NM",application.gds_userInfo.getColumn(0,"USER_NM"));
        		this.ds_cntrTmpl.setColumn(0,"LAST_CHG_DT",this.gfn_today());
        		
        	} else {
        		this.parent.div_commBtns.btn_comDel.set_visible(true);  //삭제 버튼
        		this.gfn_formOnLoad(obj,"U");
        	}

        	//파라미터를 받은 이후에는 파라미터를 를 초기화 해준다.
        	this.gfn_clearTmprData(); 
        	
        	//파라미터가 존재하면 조회 
        	if("" != this.fv_cntrTmplId){
        		this.ds_cntrTmpl.setColumn(0,"CNTR_TMPL_ID",this.fv_cntrTmplId);
        		this.ds_cntrTmpl.setColumn(0,"BRANCH_CD",this.fv_branchCd);
        		this.fn_search();
        	}else{
        		this.gfn_popupComCntrType();

        		this.ds_cntrTmpl.setColumn(0, "ALT_USE", "Y"); //사용여부
        		this.ds_cntrTmpl.setColumn(0, "CD_CNTR_TYPE", ""); //계약구분
        		
        		this.div_31.wb_daumEditor.set_url(application.services["svcurl"].url+"daumeditor/editor.jsp");
        	}
        	
        	this.gfn_btnRange(this.parent.div_commBtns.btn_commSrch);
        }

        /**
        	@function	fn_preSearch()
        	@desc   	조회 전 처리
        */
        this.fn_preSearch = function()
        {
        	return true;
        }

        /**
        	@function	fn_search()
        	@desc   	조회 프로세스
        */
        this.fn_search = function()
        {
        	if(!this.fn_preSearch()) return false;
        	
        	var sSvcID = "read";
        	var sController = "Cntr_TmplRead.do";
        	var sInDatasets = "in_ds=ds_cntrTmpl";
        	var sOutDatasets = "ds_cntrTmpl=ds_cntrTmpl";
        	var sCallbackFunc = "fn_trCallBack";

        	//FILE_JOB_2 :  트랜잭션 gfn_fileTran 으로 변경
            this.gfn_tran(sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        	
        }

        /**
        	@function	Fold_onclick()
        	@desc   	폴더접기
        */
        this.fn_fold_onclick = function(obj,e)
        {
        	this.gfn_divFold(obj);
        }

        /**
        	@function	fn_commAdd()
        	@desc   	(공통버튼)신규
        */
        this.fn_commAdd = function()
        {
        	//데이터셋의 수정사항이 존재하는지 확인한다.
        	if(this.gfn_getDsUpdate(this.ds_cntrTmpl)){
        		if(!this.gfn_confirm("수정사항이 존재합니다. 그래도 신규작성 하시겠습니까?")) return false;
        	}
        	
        	//모든 데이터셋을 초기화 한다.
        	this.ds_cntrTmpl.clearData();
        	
        	this.gfn_popupComCntrType();
        		
        	this.ds_cntrTmpl.addRow();
        		
        	//신규 작성 시 파일내부의 Dataset을 초기화 시켜준다.
        	this.ds_cntrTmpl.setColumn(0, "ALT_USE", "Y"); //사용여부
        	this.ds_cntrTmpl.setColumn(0, "CD_CNTR_TYPE", ""); //계약구분
        	
        }

        /**
        	@function	fn_commDelete()
        	@desc   	(공통버튼)삭제 프로세스
        */
        this.fn_commDelete = function()
        {
        	var sSvcID = "delete";
        	var sController = "Cntr_TmplDelete.do";
        	var sInDatasets = "in_cntrTmpl=ds_cntrTmpl:A"; 
        	var sOutDatasets = "ds_cntrTmpl=in_cntrTmpl";
        	var sCallbackFunc = "fn_trCallBack";
        	
        	//FILE_JOB_3 :  트랜잭션 gfn_fileTran 으로 변경
        	this.gfn_fileSaveTran(sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
        	@function	fn_preSave()
        	@desc   	저장 전 처리
        */
        this.fn_preSave = function()
        {	

        	if(!this.gfn_validate()) //확인 클릭
        	{		
        		return false;
        	}
        	
        	return true;
        }

        /**
        	@function	fn_commSave()
        	@desc   	(공통버튼)저장 프로세스
        */
        this.fn_commSave = function()
        {
        	if (!this.fn_preSave()) return false;
        	
        	this.div_31.wb_daumEditor.callMethod("saveContent");
        }

        /**
        	@function	fn_commSave2()
        	@desc   	(공통버튼)저장 프로세스
        */
        this.fn_commSave2 = function()
        {
        	var sSvcID = "save";
        	var sController = "Cntr_TmplSave.do";
        	var sInDatasets = "in_cntrTmpl=ds_cntrTmpl:A"; 
        	var sOutDatasets = "ds_cntrTmpl=in_cntrTmpl";
        	var sCallbackFunc = "fn_trCallBack";
        	
        	//FILE_JOB_3 :  트랜잭션 gfn_fileTran 으로 변경
        	this.gfn_fileSaveTran(sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
        	@function	btn_commCancel()
        	@desc   	(공통버튼)취소 프로세스
        */
        this.btn_commCancel = function()
        {
        	return true;
        }

        /**
        	@function	fn_commClose()
        	@desc   	(공통버튼)닫기 : form 닫기 전 공통에서 체크함
        */
        this.fn_commClose = function()
        {
        	//데이터셋 수정여부 체크
        	if(this.gfn_getDsUpdate(this.ds_cntrTmpl))
        	{
        		return false;
        	}
        	
        	return true;
        }

        /**
        	@function	fn_callBack()
        	@desc   	Transaction Callback함수
        */
        this.fn_trCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	//strSvcID 가 read:fn_trCallBack 게 넘어옴
        	if(strErrCd < 0)
        	{
        		return;
        	}
        	
        	switch(strSvcID)
        	{
        		case "read" : 
        			//read 데이터가 존재하지 않으면 작성중인 상태로 데이터를 셋팅한다.
        			if(this.ds_cntrTmpl.rowcount > 0){
        				//this.gfn_formOnLoad(this,"U");
        				this.gfn_objReSet(this, "U");
        			}
        			
        			this.div_31.wb_daumEditor.set_url(application.services["svcurl"].url+"daumeditor/editor.jsp");
        			
        		break;
        		
        		case "save" : 
        			if(strErrMsg != ""){
        				this.gfn_alert(strErrMsg);
        				//저장후 받아온 값으로 데이터조회
        				this.fv_cntrTmplId = this.ds_cntrTmpl.getColumn(0,"CNTR_TMPL_ID");
        				
        				this.fn_search();
        			}
        		break;
        		
        		case "delete":
        			if(strErrMsg != ""){
        				this.gfn_alert(strErrMsg);	
        							
        				//sUrl {String} 화면경로, formCloseYn {Y|N} (새로운 화면을 호출하는) 기존화면 닫기 여부
        				this.gfn_openMenuUrl("CTRB::PCTRB400L00.xfdl", "Y");

        			}
        		break;
        		
        		default:
        		break;	
        	}
        }

        /**
        	@function	fn_popCallBack()
        	@desc   	팝업 CallBack 함수
        */
        this.fn_popCallBack = function(sPopupId,rtn)
        {
        	if(this.gfn_isNull(rtn)) return;
        	
        	if(rtn.indexOf("<Dataset id=") == 0){
        		if(sPopupId == "popupComCntrType"){
        			this.ds_return.loadXML(rtn);
        			//계약유형을 반영 후 수정불가하게 처리한다.
        			this.ds_cntrTmpl.setColumn(0, "CD_CNTR_CTGR", this.ds_return.getColumn(0,"CD_ID"));
        			this.div_1.cbo_cntrCtgr.set_enable(false);

        		}
        	}
        }

        /**
        	@function	div_71_wb_daumEditor_onusernotify()
        	@desc   	KSPARK - Daum editor
        */
        this.div_71_wb_daumEditor_onusernotify = function(obj,e)
        { 
        	//런타임
        	if(obj.getProperty("document").getProperty("title").indexOf("▩") == 0){
        		//read
        		if (this.gfn_replace(obj.getProperty("document").getProperty("title"),"▩","") == "true"){
        			this.div_31.wb_daumEditor.callMethod("setEditor",this.ds_cntrTmpl.getColumn(0,"CNTR_CNTNT"));
        		//save
        		} else {
        			this.ds_cntrTmpl.setColumn(0,"CNTR_CNTNT",this.gfn_replace(obj.getProperty("document").getProperty("title"),"▩",""));
        			this.fn_commSave2();
        		}

        	//웹
        	} else if (e.userdata.indexOf("▦") == 0){
        		//read
        		if (this.gfn_replace(e.userdata,"▦","") == "true"){			
        			this.div_31.wb_daumEditor.callMethod("setEditor",this.ds_cntrTmpl.getColumn(0,"CNTR_CNTNT"));
        		//save
        		} else {
        			this.ds_cntrTmpl.setColumn(0,"CNTR_CNTNT",this.gfn_replace(e.userdata,"▦",""));
        			this.fn_commSave2();
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("oninit", this.form_oninit, this);
            this.div_2.btn_opHead.addEventHandler("onclick", this.fn_fold_onclick, this);
            this.div_21.st_Ttl.addEventHandler("onclick", this.div_21_Tab01_tabp01_st_Ttl_onclick, this);
            this.div_31.wb_daumEditor.addEventHandler("onusernotify", this.div_71_wb_daumEditor_onusernotify, this);
            this.div_3.btn_oPItem.addEventHandler("onclick", this.fn_fold_onclick, this);

        };

        this.loadIncludeScript("PCTRB400N00.xfdl", true);

       
    };
}
)();
