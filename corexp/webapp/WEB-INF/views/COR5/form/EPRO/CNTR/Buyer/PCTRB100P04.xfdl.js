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
                this.set_name("pop_mtrlSrch");
                this.set_titletext("계약품목검색(멀티)");
                this.set_cssclass("frm_POP_Search");
                this._setFormPosition(0,0,1077,600);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_srchOpt", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"LRG_CLS_ID\" type=\"STRING\" size=\"20\"/><Column id=\"MDL_CLS_ID\" type=\"STRING\" size=\"20\"/><Column id=\"SML_CLS_ID\" type=\"STRING\" size=\"20\"/><Column id=\"MTRL_CD\" type=\"STRING\" size=\"20\"/><Column id=\"MTRL_NM\" type=\"STRING\" size=\"500\"/><Column id=\"SRCH_STR_CD\" type=\"STRING\" size=\"40\"/><Column id=\"STR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mtrl", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column type=\"string\" id=\"SRC_GRP_NM\" size=\"300\"/><Column type=\"int\" id=\"LVL\" size=\"22\"/><Column type=\"string\" id=\"MTRL_GRP_ID\" size=\"20\"/><Column type=\"string\" id=\"MTRL_NM\" size=\"500\"/><Column type=\"string\" id=\"CHECKED\" size=\"0\"/><Column type=\"string\" id=\"MTRL_CD\" size=\"20\"/><Column type=\"string\" id=\"MTRL_GRP_NM\" size=\"500\"/><Column type=\"string\" id=\"SRC_GRP_ID\" size=\"20\"/><Column id=\"BTN_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_STATUS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_Select", this);
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

            obj = new Dataset("ds_retun", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("sta_title", "absolute", "0", "0", null, "30", "640", null, this);
            obj.set_text("품목검색");
            obj.set_cssclass("sta_POP_PopTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "0", "30", "30", "8", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_POP_CloseBtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_condition", "absolute", "5", "40", null, "46", "5", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);
            obj = new Static("sta_WFSA_LabelP", "absolute", "0", "10", "100", "24", null, null, this.div_condition);
            obj.set_taborder("20");
            obj.set_text("품목분류");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div_condition.addChild(obj.name, obj);
            obj = new Button("btn_search", "absolute", null, "10", "60", "24", "11", null, this.div_condition);
            obj.set_taborder("21");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.div_condition.addChild(obj.name, obj);
            obj = new Edit("edt_mtrlNm", "absolute", "638", "10", "250", "24", null, null, this.div_condition);
            obj.set_taborder("23");
            obj.getSetter("objNm").set("품목명");
            this.div_condition.addChild(obj.name, obj);
            obj = new Static("sta_WFSA_PointLabel00", "absolute", "436", "10", "100", "24", null, null, this.div_condition);
            obj.set_taborder("24");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div_condition.addChild(obj.name, obj);
            obj = new Edit("edt_mtrlCd", "absolute", "536", "10", "100", "24", null, null, this.div_condition);
            obj.set_taborder("25");
            obj.getSetter("objNm").set("품목코드");
            this.div_condition.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "100", "10", "336", "24", null, null, this.div_condition);
            obj.set_taborder("26");
            obj.set_text("Div00");
            obj.set_url("commComp::commMtrlType.xfdl");
            this.div_condition.addChild(obj.name, obj);

            obj = new Div("Div21", "absolute", "5", "92", null, "243", "5", null, this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_list00", "absolute", "0", "10", null, null, "0", "27", this.Div21);
            obj.set_taborder("2");
            obj.set_binddataset("ds_mtrl");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellclickbound("cell");
            obj.getSetter("f_filter").set("N");
            obj.getSetter("f_excel").set("Y");
            obj.getSetter("f_hide").set("N");
            obj.getSetter("f_find").set("N");
            obj.getSetter("f_sort").set("Y");
            obj.getSetter("f_fix").set("N");
            obj.getSetter("f_height").set("N");
            obj.getSetter("f_save").set("N");
            obj.getSetter("f_mode").set("Y");
            obj.getSetter("f_init").set("N");
            obj.getSetter("f_colSize").set("N");
            obj.getSetter("f_version").set("20151023");
            obj._setContents("<Formats><Format id=\"SMODE\"><Columns><Column size=\"90\"/><Column size=\"300\"/><Column size=\"44\"/><Column size=\"90\"/><Column size=\"300\"/><Column size=\"100\"/><Column size=\"40\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"품목코드\"/><Cell col=\"1\" text=\"품목명\"/><Cell col=\"2\" text=\"단위\"/><Cell col=\"3\" text=\"단가\"/><Cell col=\"4\" text=\"품목분류명\"/><Cell col=\"5\" text=\"품목계정명\"/><Cell col=\"6\" displaytype=\"image\" style=\"background2: ;\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" cssclass=\"cell_link\" text=\"bind:MTRL_CD\"/><Cell col=\"1\" style=\"align:left;\" cssclass=\"cell_link\" text=\"bind:MTRL_NM2\"/><Cell col=\"2\" displaytype=\"normal\" text=\"bind:CD_PUR_UNIT_NM\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CNTR_PRICE\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:MTRL_GRP_NM2\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:GR_ACNT_NM\"/><Cell col=\"6\" displaytype=\"button\" style=\"align:center;backgroundimage: ;\" text=\"bind:BTN_STATUS_NM\"/></Band></Format></Formats>");
            this.Div21.addChild(obj.name, obj);
            obj = new Div("div_paing", "absolute", "0", null, null, "28", "0", "0", this.Div21);
            obj.set_taborder("3");
            obj.set_scrollbars("none");
            obj.set_url("commComp::commPaging.xfdl");
            this.Div21.addChild(obj.name, obj);

            obj = new Grid("grd_list", "absolute", "5", "380", null, null, "5", "10", this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_Select");
            obj.set_autoenter("select");
            obj.set_cellclickbound("cell");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"SMODE\"><Columns><Column size=\"100\"/><Column size=\"300\"/><Column size=\"50\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"품목코드\"/><Cell col=\"1\" text=\"품목명\"/><Cell col=\"2\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" cssclass=\"cell_link\" text=\"bind:MTRL_CD\"/><Cell col=\"1\" style=\"align:left;\" cssclass=\"cell_link\" text=\"bind:MTRL_NM2\"/><Cell col=\"2\" displaytype=\"button\" edittype=\"button\" text=\"bind:BTN_STATUS_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ptnrReq", "absolute", null, "345", "79", "24", "14", null, this);
            obj.set_taborder("6");
            obj.set_text("품목 적용");
            obj.set_cssclass("btn_WF_Custom");
            obj.getSetter("objNm").set("선택된 품목 적용");
            obj.getSetter("lbcd").set("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_OP_Head", "absolute", "0.84%", "344", null, "24", "86.63%", null, this);
            obj.set_taborder("7");
            obj.set_text("선택한  품목");
            obj.set_cssclass("btn_WF_DivClose");
            obj.getSetter("objNm").set("접기펼치기 버튼");
            obj.getSetter("lbcd").set("");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 46, this.div_condition,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.set_cssclass("div_WF_SearchBg");

            	}
            );
            this.div_condition.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 243, this.Div21,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_text("Div00");

            	}
            );
            this.Div21.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1077, 600, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("계약품목검색(멀티)");
            		p.set_cssclass("frm_POP_Search");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div_condition.edt_mtrlCd","value","ds_srchOpt","MTRL_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_condition.edt_mtrlNm","value","ds_srchOpt","MTRL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "commComp::commMtrlType.xfdl");
            this._addPreloadList("fdl", "commComp::commPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("PCTRB100P04.xfdl", "lib::lib_all.xjs");
        this.registerScript("PCTRB100P04.xfdl", function(exports) {
        /**
           @file       PCTRB100P04.xfdl
           @desc       계약품목검색(멀티)
           @author     송태봉
           @makedate   2017.01.19
           @history    
        */  

        if (this.executeIncludeScript) { this.executeIncludeScript("lib::lib_all.xjs", null, exports); }	//include "lib::lib_all.xjs"

        /**
        	@var  this.fv_mtrlgrpcd
        	@desc 전역변수
        */
        this.fv_mtrlgrpcd = "";
        this.fv_mtrlname = "";

        /**
        	@function	pop_MatGroupSearch_onload()
        	@desc   	폼 onload 이벤트
        */
        this.pop_MatGroupSearch_onload = function(obj,e)
        {
        	//시스템 공통함수 호출 : 팝업
        	this.gfn_popOnLoad(this);
            		
        	//그리드 공통버튼 설정
        	this.Div21.div_paing.fn_initGridInfo(obj, this.Div21.grd_list00);
        		
        	//그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기
        	this.gfn_setGrdFunc(this.Div21.grd_list00);
        	
        	// 소싱그룹 서치 데이터셋에 매핑
        	this.div_condition.Div00.fn_setMtrlGrp(this.ds_srchOpt,"LRG_CLS_ID","MDL_CLS_ID","SML_CLS_ID");
        	
        	this.ds_srchOpt.addRow();	
        	this.ds_srchOpt.setColumn(0,"STR_CD",application.gds_userInfo.getColumn(0,"STR_CD"));
         
        	//부모창으로 부터 전달받은 값	
        	var ownFrame = this.getOwnerFrame();

        	//부모창으로 부터 전달받은 값을 NULL 이 아니면 검색조건 DataSet에 담는다.
        	if(!this.gfn_isNull(ownFrame.agv_id)){
        		fv_mtrlgrpcd = ownFrame.agv_id.substring(4,5)+"0";
        		this.ds_srchOpt.setColumn(0,"LRG_CLS_ID",fv_mtrlgrpcd);
        	} else if(!this.gfn_isNull(ownFrame.agv_nm)){
        		this.ds_srchOpt.setColumn(0,"MTRL_NM",ownFrame.agv_nm);
        		this.fn_search();
        	}
        }

        /**
        	@function	div_condition_btn_search_onclick()
        	@desc   	조회
        */
        this.div_condition_btn_search_onclick = function(obj,e)
        {
        	this.fn_search();
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
        	
        	var sSvcID = "Ctr_MtrlSrch";
        	var sController = "Ctr_MtrlSrch.do";
        	var sInDatasets = "in_ds=ds_srchOpt";
        	var sOutDatasets = "ds_mtrl=out_list";
        	var sCallbackFunc = "fn_trCallBack";
        	
            this.Div21.div_paing.gfn_pagingTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
            
        }

        /**
        	@function	fn_callBack()
        	@desc   	Transaction Callback함수
        */
        this.fn_trCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	if(strErrCd < 0){
        		return;
        	}
        	
        	switch(strSvcID){
        		case "Ctr_MtrlSrch" :
        			this.Div21.grd_list00.setFocus();
        			
        			var rtnMsg="";
        			var rtnChk="";
        			for(var i=0; i<this.ds_mtrl.getRowCount(); i++)
        			{
        				var nRow = this.ds_Select.findRow("MTRL_CD", this.ds_mtrl.getColumn(i, "MTRL_CD"));
        	
        				if(nRow > -1)
        				{
        					rtnMsg = "삭제";
        					rtnChk = 0;
        				}
        				else
        				{
        					rtnMsg = "추가";
        					rtnChk = 1;
        				}
        				
        				this.ds_mtrl.setColumn(i, "BTN_STATUS_NM", rtnMsg);
        				this.ds_mtrl.setColumn(i, "BTN_STATUS", rtnChk);				
        			}
        			
        			//컬럼 정보 복사
        			for(var i=0; i<this.ds_mtrl.colcount; i++)
        			{
        				var colInfo = this.ds_mtrl.getColumnInfo(i);
        				this.ds_Select.addColumnInfo(colInfo.name, colInfo);
        			}
        			
        			
        			break;
        		
        		default:
        			break;	
        	}
        }

        /**
        	@function	btn_close_onclick()
        	@desc   	팝업닫기
        */
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        /**
        	@function	btn_rtn_onclick()
        	@desc   	적용버튼 클릭
        */
        this.btn_rtn_onclick = function(obj,e)
        {		
        	this.close(this.ds_Select.saveXML());
        }

        /**
        	@function	btn_ptnr_Add_onclick()
        	@desc       품목추가버튼	
        */
        this.btn_ptnr_Add_onclick = function(obj,e)
        {
        	this.ds_mtrl.set_enableevent(false);
        	this.ds_mtrl.filter("CHECKED==1");
        	for(var i=0;i<this.ds_mtrl.rowcount;i++){
        		var row = this.ds_Select.addRow();
        		this.ds_Select.copyRow(row,this.ds_mtrl,i);
        		this.ds_mtrl.setColumn(i,"CHECKED",0);
        		this.ds_Select.setColumn(row,"CHECKED",0);
        	}
        	this.ds_mtrl.filter("");
        	this.ds_mtrl.set_enableevent(true);
        }

        /**
        	@function	Tab00_tabpage1_grd_list_oncelldblclick()
        	@desc       품목추가
        */
        this.Tab00_tabpage1_grd_list_oncelldblclick = function(obj,e)
        {
        	if("MTRL_CD" == this.gfn_grdBindColName(obj, obj.getCellPos())) //품목
        	{	
        		var sArg = {
        					mtrl_cd:this.ds_mtrl.getColumn(e.row, "MTRL_CD")
        					};
        		this.gfn_dialog("PopupComMtrlView", "commPop::PPOPC700P01.xfdl", sArg, "fn_popCallBack");
        	}else if("MTRL_NM2" == this.gfn_grdBindColName(obj, obj.getCellPos())) //품목
        	{	
        		var sArg = {
        					mtrl_cd:this.ds_mtrl.getColumn(e.row, "MTRL_CD")
        					};
        		this.gfn_dialog("PopupComMtrlView", "commPop::PPOPC700P01.xfdl", sArg, "fn_popCallBack");
        	}
        	else{
        		this.fn_BtnAddDel();
        	}
        }

        this.Tab00_tabpage1_grd_list_oncellclick = function(obj,e)
        {
        	if(this.gfn_grdBindColName(obj, e.cell)=="BTN_STATUS_NM")
        	{
        		this.fn_BtnAddDel();
        	}
        }

        /**
        	@function	fn_BtnAddDel()
        	@desc       품목 추가 삭제
        */
        this.fn_BtnAddDel = function(mtrlCd)
        {
        	this.ds_mtrl.set_enableevent(false);

        	if(!this.gfn_isNull(mtrlCd))
        	{
        		var ridx = this.ds_mtrl.findRow("MTRL_CD", mtrlCd);
        	}
        	else
        	{
        		var ridx = this.ds_mtrl.rowposition;
        	}

        	if(this.ds_mtrl.getColumn(ridx, "BTN_STATUS") == "1")
        	{
        		for(var i=0; i<=this.ds_Select.rowcount; i++)
        		{
        			if(this.ds_Select.getColumn(i,"MTRL_CD")==this.ds_mtrl.getColumn(ridx, "MTRL_CD")){
        				this.alert("같은 품목을 추가하실 수 없습니다.");
        				return;
        			}
        		}
        		
        		this.ds_mtrl.setColumn(ridx, "BTN_STATUS", "0");
        		this.ds_mtrl.setColumn(ridx, "BTN_STATUS_NM", "삭제");
        		var nRow = this.ds_Select.addRow();	
        		this.ds_Select.copyRow(nRow, this.ds_mtrl, ridx);
        		
        	}
        	else
        	{
        		var nRow = 0;
        		
        		if(ridx > -1){
        			nRow = this.ds_Select.findRow("MTRL_CD", this.ds_mtrl.getColumn(ridx, "MTRL_CD"));
        		}else{
        			nRow = this.ds_Select.rowposition;
        		}
        		
        		if(nRow > -1)
        		{
        			if(ridx > -1){
        				this.ds_mtrl.setColumn(ridx, "BTN_STATUS", "1");
        				this.ds_mtrl.setColumn(ridx, "BTN_STATUS_NM", "추가");
        			}
        			this.ds_Select.deleteRow(nRow);
        		}		
        	}
        	
        	this.ds_mtrl.set_enableevent(true);
        }

        this.btn_ptnrDel_onclick = function(obj,e)
        {
        	this.ds_retun.copyData(this.ds_Select);
        	
        	for(var i=0; i<this.ds_retun.getRowCount(); i++)
        	{
        		if(this.ds_retun.getColumn(i, "CHECKED") == "1")
        		{
        			this.fn_BtnAddDel(this.ds_retun.getColumn(i, "MTRL_CD"));
        		}
        	}
        }

        this.grd_list_oncellclick = function(obj,e)
        {
        	if(this.gfn_grdBindColName(obj, e.cell)=="BTN_STATUS_NM")
        	{
        		this.fn_BtnAddDel(this.ds_Select.getColumn(this.ds_Select.rowposition, "MTRL_CD"));
        	}
        }

        this.Tab00_tabpage2_grd_list_oncellclick = function(obj,e)
        {
        	if(this.gfn_grdBindColName(obj, e.cell)=="BTN_STATUS_NM")
        	{
        		this.fn_BtnAddDel();
        	}
        }

        this.onkeydown = function(obj,e)
        {
        	if(e.keycode == "13"){
        		obj.updateToDataset();
        		
        		if(obj.name == "edt_mtrlCd" || obj.name == "edt_mtrlNm"){
        			this.fn_search();
        		}
        	}
        }

        this.grd_list_oncelldblclick = function(obj,e)
        {
        	if("MTRL_CD" == this.gfn_grdBindColName(obj, obj.getCellPos()) || "MTRL_NM2" == this.gfn_grdBindColName(obj, obj.getCellPos())) //품목
        	{	
        		var sArg = {
        					mtrl_cd:this.ds_Select.getColumn(e.row, "MTRL_CD")
        					};
        		this.gfn_dialog("PopupComMtrlView", "commPop::PPOPC700P01.xfdl", sArg, "fn_popCallBack");
        	}
        }

        this.Div21_grd_list00_onkeyup = function(obj,e)
        {
        	if(e.keycode == "13"){
        		this.fn_BtnAddDel();
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.pop_MatGroupSearch_onload, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.div_condition.btn_search.addEventHandler("onclick", this.fn_search, this);
            this.div_condition.edt_mtrlNm.addEventHandler("onkeydown", this.onkeydown, this);
            this.div_condition.edt_mtrlCd.addEventHandler("onkeydown", this.onkeydown, this);
            this.div_condition.edt_mtrlCd.addEventHandler("oneditclick", this.Div00_edMtrlGrpNm_oneditclick, this);
            this.Div21.grd_list00.addEventHandler("oncellclick", this.Tab00_tabpage1_grd_list_oncellclick, this);
            this.Div21.grd_list00.addEventHandler("oncelldblclick", this.Tab00_tabpage1_grd_list_oncelldblclick, this);
            this.Div21.grd_list00.addEventHandler("onkeyup", this.Div21_grd_list00_onkeyup, this);
            this.grd_list.addEventHandler("oncellclick", this.grd_list_oncellclick, this);
            this.grd_list.addEventHandler("oncelldblclick", this.grd_list_oncelldblclick, this);
            this.btn_ptnrReq.addEventHandler("onclick", this.btn_rtn_onclick, this);
            this.btn_OP_Head.addEventHandler("onclick", this.fn_fold_onclick, this);

        };

        this.loadIncludeScript("PCTRB100P04.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
