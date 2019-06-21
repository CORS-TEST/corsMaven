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
                this.set_name("SDlvMgmtList");
                this.set_titletext("납품서 관리");
                this._setFormPosition(0,0,1220,711);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCondition", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DLV_PLAN_DAY\" type=\"STRING\" size=\"8\"/><Column id=\"PO_NO_ARR\" size=\"20\" type=\"string\"/><Column id=\"DLV_NO_ARR\" size=\"20\" type=\"string\"/><Column id=\"TTL\" size=\"600\" type=\"string\"/><Column id=\"DLV_PLAN_DAY_STR\" type=\"STRING\" size=\"8\"/><Column id=\"DLV_PLAN_DAY_END\" type=\"STRING\" size=\"8\"/><Column id=\"STR_CD\" size=\"40\" type=\"string\"/><Column type=\"string\" id=\"CD_DLV_STTS\" size=\"40\"/><Column id=\"SORT_ITEM1\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ITEM2\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ITEM3\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ITEM4\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE1\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE2\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE3\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE4\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsList", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHECKED\" size=\"40\" type=\"string\"/><Column id=\"BRANCH_CD\" size=\"40\" type=\"string\"/><Column id=\"BRANCH_NM\" size=\"40\" type=\"string\"/><Column id=\"PO_NO\" size=\"40\" type=\"string\"/><Column id=\"DLV_NO\" size=\"40\" type=\"string\"/><Column id=\"CD_DLV_STTS\" size=\"40\" type=\"string\"/><Column id=\"CD_DLV_STTS_NM\" size=\"40\" type=\"string\"/><Column id=\"STR_CD\" size=\"40\" type=\"string\"/><Column id=\"SL_NM\" size=\"40\" type=\"string\"/><Column id=\"TTL\" size=\"40\" type=\"string\"/><Column id=\"PO_DAY\" size=\"40\" type=\"string\"/><Column id=\"DLV_PLAN_DAY\" size=\"40\" type=\"string\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdDL10", this);
            obj._setContents("");
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
            obj = new Button("btn_multiSelect", "absolute", "293", "10", "24", "24", null, null, this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_MultiSmall");
            obj.getSetter("objNm").set("발주번호 멀티선택 버튼");
            this.addChild(obj.name, obj);

            obj = new Div("div_condition", "absolute", "0", "0", null, "36", "15", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);
            obj = new Edit("edt_poNoArr", "absolute", "170", "5", "200", "24", null, null, this.div_condition);
            obj.set_taborder("18");
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("발주번호");
            this.div_condition.addChild(obj.name, obj);
            obj = new Static("staPtnrNm", "absolute", "0", "5", "170", "24", null, null, this.div_condition);
            obj.set_taborder("20");
            obj.set_text("발주작성일자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.div_condition.addChild(obj.name, obj);
            obj = new Static("staPtnrNm00", "absolute", "330", "5", "170", "24", null, null, this.div_condition);
            obj.set_taborder("21");
            obj.set_text("납품예정일자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.div_condition.addChild(obj.name, obj);
            obj = new Static("staPtnrNm01", "absolute", "690", "5", "170", "24", null, null, this.div_condition);
            obj.set_taborder("22");
            obj.set_text("운영단위");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.div_condition.addChild(obj.name, obj);

            obj = new Button("btn_fold", "absolute", null, "120", "63", "13", "15", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_SearchClose");
            this.addChild(obj.name, obj);

            obj = new Div("divViewCompCond01", "absolute", "0", "35", null, "85", "15", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_SearchBg");
            obj.getSetter("objNm").set("");
            this.addChild(obj.name, obj);
            obj = new Static("staWarning", "absolute", "-1", "64", null, "19", "0", null, this.divViewCompCond01);
            obj.set_taborder("73");
            obj.set_text("- 검색조건 없이 검색 시 속도가 저하 될 수 있습니다.");
            obj.set_cssclass("sta_WF_SearchText");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Button("btnSinglePop00", "absolute", "934", "5", "24", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("80");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("구매요청자 검색 버튼");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staPtnrNm", "absolute", "0", "5", "170", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("82");
            obj.set_text("납품서명");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtRprstvNm", "absolute", "170", "34", "219", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("85");
            obj.getSetter("objNm").set("대표자명");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staPtnrNm02", "absolute", "0", "34", "170", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("89");
            obj.set_text("정렬순서");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edt_ttl", "absolute", "170", "5", "200", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("6");
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("납품서명");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label00", "absolute", "417", "5", "117", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("91");
            obj.set_text("납품번호");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edt_dlvNoArr", "absolute", "534", "5", "200", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("92");
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("납품번호");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("sta_Fctry00", "absolute", "734", "5", "117", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("93");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Combo("cbo_cdDlvStts", "absolute", "851", "5", "150", "24", null, null, this.divViewCompCond01);
            this.divViewCompCond01.addChild(obj.name, obj);
            obj.set_taborder("94");
            obj.set_innerdataset("ds_cdDL10");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("창고");
            obj = new Static("Static02", "absolute", "51.45%", "29", "211", "5", null, null, this.divViewCompCond01);
            obj.set_taborder("95");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_align("center middle");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edt_dlvNoArr00", "absolute", "534", "34", "200", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("96");
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("납품번호");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new TextArea("TextArea00", "absolute", "1.08%", "43", null, "15", "92.52%", null, this.divViewCompCond01);
            obj.set_taborder("97");
            this.divViewCompCond01.addChild(obj.name, obj);

            obj = new Div("divViewCompBody00", "absolute", "-2", "152", null, null, "17", "-11", this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Grid("grdlist", "absolute", "0", "39", null, null, "0", "37", this.divViewCompBody00);
            obj.set_cssclass("grd_default");
            obj.set_taborder("14");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"443\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"70\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"운영단위\"/><Cell col=\"2\" text=\"납품서번호\"/><Cell col=\"3\" text=\"상태\"/><Cell col=\"4\" text=\"납품예정일자\"/><Cell col=\"5\" text=\"납품서명\"/><Cell col=\"6\" text=\"발주번호\" combodisplaynulltext=\"CD_CNTR_STTS\"/><Cell col=\"7\" text=\"발주유형\" tooltiptext=\"ㅇ\"/><Cell col=\"8\" text=\"발주일자\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"background: ;\" text=\"bind:CHECKED\" expandshow=\"hide\"/><Cell col=\"1\" text=\"bind:BRANCH_NM\" tooltiptext=\"bind:BRANCH_NM\"/><Cell col=\"2\" cssclass=\"cell_link\" text=\"bind:DLV_NO\" tooltiptext=\"bind:DLV_NO\"/><Cell col=\"3\" text=\"bind:CD_DLV_STTS_NM\" tooltiptext=\"bind:CD_DLV_STTS_NM\"/><Cell col=\"4\" displaytype=\"date\" text=\"bind:DLV_PLAN_DAY\" mask=\"yyyy.MM.dd\" calendardisplaynulltype=\"none\" tooltiptext=\"bind:DLV_PLAN_DAY\"/><Cell col=\"5\" style=\"align:left;\" cssclass=\"cell_link\" text=\"bind:TTL\" tooltiptext=\"bind:TTL\"/><Cell col=\"6\" edittype=\"none\" cssclass=\"cell_link\" text=\"bind:PO_NO\" maskchar=\" \" tooltiptext=\"bind:PO_NO\"/><Cell col=\"7\" text=\"bind:CD_PO_CTGR_NM\" tooltiptext=\"bind:CD_PO_CTGR_NM\"/><Cell col=\"8\" displaytype=\"date\" text=\"bind:PO_DAY\" mask=\"yyyy.MM.dd\" calendardisplaynulltype=\"none\" tooltiptext=\"bind:PO_DAY\"/></Band></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btn_delDlv", "absolute", null, "10", "78", "24", "0", null, this.divViewCompBody00);
            obj.set_taborder("15");
            obj.set_text("납품서삭제");
            obj.set_cssclass("btn_WF_Custom");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("납품서삭제버튼");
            this.divViewCompBody00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 36, this.div_condition,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_cssclass("div_WF_SearchBg");

            	}
            );
            this.div_condition.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 85, this.divViewCompCond01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_cssclass("div_WF_SearchBg");
            		p.getSetter("objNm").set("");

            	}
            );
            this.divViewCompCond01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.set_text("Div00");

            	}
            );
            this.divViewCompBody00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1220, 711, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("납품서 관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item21","divViewCompCond01.edtRprstvNm","value","dsCondition","RPRSTV_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRprstvNmVi","divViewCompCond01.edtRprstvNm","visible","dsObjBindVi","edtRprstvNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRprstvNmEn","divViewCompCond01.edtRprstvNm","readonly","dsObjBindEn","edtRprstvNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divViewCompCond01.edt_ttl","value","ds_condition","TTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","divViewCompCond01.edt_dlvNoArr","value","ds_condition","DLV_NO_ARR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","divViewCompCond01.cbo_cdDlvStts","value","ds_condition","CD_DLV_STTS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divViewCompCond01.edt_dlvNoArr00","value","ds_condition","DLV_NO_ARR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","divViewCompCond01.TextArea00","value","dsList","CD_DLV_STTS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("SDlvMgmtList.xfdl", function(exports) {
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
        					{code:"DL10", sSelectType:"A"}
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

        	gfnSetGrdFunc(this.divViewCompBody00.grdlist, this.divViewCompBody00.divPaging, this);
        	this.dsCondition.addRow();
        	
        	//공통코드 콤보 index 처리  
        //     this.dsCondition.setColumn(0,"DLV_PLAN_DAY_STR",this.gfn_addMonth(this.gfn_today(),-1));
        // 	this.dsCondition.setColumn(0,"DLV_PLAN_DAY_END",this.gfn_today());
        	
        	this.dsCondition.setColumn(0,"STR_CD","");
        	this.dsCondition.setColumn(0,"CD_DLV_STTS","");
        	
         	this.dsCondition.setColumn(0,"SORT_ITEM1","MPD.DLV_PLAN_DAY");
         	this.dsCondition.setColumn(0,"SORT_TYPE1","DESC");
         	this.dsCondition.setColumn(0,"SORT_ITEM2","MPD.DLV_NO");
         	this.dsCondition.setColumn(0,"SORT_TYPE2","DESC");
         	this.dsCondition.setColumn(0,"SORT_ITEM3","");
         	this.dsCondition.setColumn(0,"SORT_TYPE3","");	 	
         	this.dsCondition.setColumn(0,"SORT_ITEM4","");
         	this.dsCondition.setColumn(0,"SORT_TYPE4","");	
            this.fnSearch();
        }
        // 	var sSvcID = "SDlv_MgmtSrch";
        // 	var sController = "SDlv_MgmtSrch.do";
        // 	var sInDatasets = "in_ds=dsCondition";
        // 	var sOutDatasets = "ds_list=ds_srch";
        // 	var sCallbackFunc = "fn_trCallBack";
        // 	
        //     this.div_body.div_paing.gfn_pagingTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
            
            
            /**
          * @함수명	: fnSearch
          * @desc     	: 조회 기능
          */
        this.fnSearch = function()
        {
        	
        	//if(!this.fnPreSearch()) return false;
        	
        	var sSvcID = "searchDlvMgmtList";
        	var sController = "epro.dlv.service.SDlvService.searchDlvMgmtList";
        	var sInDatasets = "dsCondition=dsCondition";
        	var sOutDatasets = "dsList=dsList";
        	var sCallbackFunc = "fnTrCallBack";
        	
        	//var	oPaging = [
        		//			{inDs:this.dsCondition, grid:this.divViewCompBody00.grdList, divPaging:this.divViewCompBody00.divPaging}
        		//		];
        				
           gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
            
        }
        /**
          * @함수명	: fnTrCallBack
          * @input  	: strSvcID, strErrCd, strErrMsg
          * @desc     	: 콜백 함수
          */
        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg)
        {	

        }
        this.div_body_btn_delDlv_onclick = function(obj,e)
        {
        	this.dsList.set_enableevent(false);
        	this.dsList.filter("CHECKED == 1");
        	this.ds_return.copyData(this.dsList, true);
        	this.dsList.filter("");
        	this.dsList.set_enableevent(true);
        	
        	var nCnt = this.ds_return.getCaseCount("CD_DLV_STTS!='DL10SND' && CD_DLV_STTS!='DL10RTN'");	
        	if(nCnt > 0)
        	{
        		alert("납품서를 삭제할 수 없는 상태입니다.");
        		return;
        	}
        	
        	if(!application.confirm( "납품서를 삭제 하시겠습니까?" , "확인", "오류" )) return;
        	//if(this.gfnConfirm("납품서를 삭제 하시겠습니까?")) return;
        	//DataBase 의 상태 값을 변경한다.
        	
        	var sSvcID = "deleteDlv";
        	var sController = "epro.dlv.service.SDlvService.deleteDlv";
        	var sInDatasets = "in_dlv=ds_return:A";
        	var sOutDatasets = "";
        	var sCallbackFunc = "fnTrCallBack";
        	
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        this.div_body_grd_list_oncelldblclick = function(obj,e)
        {
        	if(this.dsList.rowcount==0) return;
        	if(gfnIsNull(this.dsList.getColumn(e.row, gfnGrdBindColId(obj, obj.getCellPos())))) return false;
        	
        	//if(this.gfn_grdBindColName(obj, e.cell)=="PO_NO")
        	if("PO_NO" == gfnGrdBindColId(obj, obj.getCellPos())){ 
        		alert("발주 팝업");
        		//this.gfn_setTmprData("BRANCH_CD"   , this.ds_list.getColumn(e.row, "BRANCH_CD"));
        		///*/*/this.gfn_setTmprData("PO_NO"	   , this.ds_list.getColumn(e.row, "PO_NO"));
        		//this.gfn_setTmprData("COREXP_KIDS" , this.dsList.getColumn(e.row, "PO_COREXP_KIDS"));

        		//this.gfn_dialog("PopupPo", "PORS::PPORS100P00.xfdl", "", "fn_popCallBack");
        		//SPor 팝업 페이지 연다.
        		
        	}
        	
        	if("TTL" == gfnGrdBindColId(obj, obj.getCellPos())){ 
        		var sArg = {	pop_poNo 		: this.dsList.getColumn(this.dsList.rowposition, "PO_NO")
        						,pop_dlvNo 		: this.dsList.getColumn(this.dsList.rowposition, "DLV_NO")
        						,pop_branchCd	: this.dsList.getColumn(this.dsList.rowposition, "BRANCH_CD")
        						,pop_strCd		: this.dsList.getColumn(this.dsList.rowposition, "STR_CD")
        						,pop_kid		: this.dsList.getColumn(this.dsList.rowposition, "COREXP_KIDS")
        						,agv_type		: "mgr"	//납품서관리화면에서 호출.
        				};
        		gfnModalPop(this, "popupid", "SDLV::SDlvPopup.xfdl", sArg, "fnPopCallBack", 1057, 1067);
        		//this.gfn_dialog("createDlvPop", "DLVS::PDLVS100P00.xfdl", sArg, "fn_popCallBack");
        	}
        	if("DLV_NO" == gfnGrdBindColId(obj, obj.getCellPos())){ 	
        		var sArg = {	pop_poNo 		: this.dsList.getColumn(this.dsList.rowposition, "PO_NO")
        						,pop_dlvNo 		: this.dsList.getColumn(this.dsList.rowposition, "DLV_NO")
        						,pop_branchCd	: this.dsList.getColumn(this.dsList.rowposition, "BRANCH_CD")
        						,pop_strCd		: this.dsList.getColumn(this.dsList.rowposition, "STR_CD")
        						,pop_kid		: this.dsList.getColumn(this.dsList.rowposition, "COREXP_KIDS")
        						,agv_type		: "mgr"	//납품서관리화면에서 호출.
        				};
        		gfnModalPop(this, "popupid", "SDLV::SDlvPopup.xfdl", sArg, "fnPopCallBack", 1057, 1067);
        		//this.gfn_dialog("createDlvPop", "DLVS::PDLVS100P00.xfdl", sArg, "fn_popCallBack");
        		
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.btn_multiSelect.addEventHandler("onclick", this.div_condition_btn_multiSelect_onclick, this);
            this.div_condition.edt_poNoArr.addEventHandler("onkeyup", this.fn_onkeyup_event, this);
            this.div_condition.staPtnrNm.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.div_condition.staPtnrNm00.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.div_condition.staPtnrNm01.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond01.btnSinglePop00.addEventHandler("onclick", this.fnPtnrSearch, this);
            this.divViewCompCond01.staPtnrNm.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond01.edtRprstvNm.addEventHandler("onkeyup", this.fnEnterOnkeyup, this);
            this.divViewCompCond01.staPtnrNm02.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond01.edt_ttl.addEventHandler("onkeyup", this.fn_onkeyup_event, this);
            this.divViewCompCond01.edt_dlvNoArr.addEventHandler("onkeyup", this.fn_onkeyup_event, this);
            this.divViewCompCond01.edt_dlvNoArr00.addEventHandler("onkeyup", this.fn_onkeyup_event, this);
            this.divViewCompBody00.grdlist.addEventHandler("oncelldblclick", this.div_body_grd_list_oncelldblclick, this);
            this.divViewCompBody00.btn_delDlv.addEventHandler("onclick", this.div_body_btn_delDlv_onclick, this);

        };

        this.loadIncludeScript("SDlvMgmtList.xfdl", true);

       
    };
}
)();
