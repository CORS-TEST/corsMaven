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
                this.set_name("BPtnrSapReqPop");
                this.set_titletext("협력사 SAP 팝업");
                this._setFormPosition(0,0,1100,600);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSrchOpt", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SAP_VENDOR\" size=\"256\" type=\"STRING\"/><Column id=\"BIZ_NO\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_NM\" size=\"256\" type=\"STRING\"/><Column id=\"REQ_BIZ\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"GUBUN\" size=\"256\" type=\"STRING\"/><Column id=\"REQ_VENDOR\" size=\"256\" type=\"STRING\"/><Column id=\"REQ_ID\" size=\"256\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTmp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btnRtn", "absolute", null, "57", "65", "24", "10", null, this);
            obj.getSetter("objNm").set("적용");
            obj.set_taborder("4");
            obj.set_text("적용");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList", "absolute", "10", "86", null, null, "10", "37", this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj.set_cellclickbound("cell");
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
            obj.set_taborder("5");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"350\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" expr=\"\" text=\"Vendor\" tooltiptext=\"\"/><Cell col=\"2\" expr=\"\" text=\"사업자번호\"/><Cell col=\"3\" expr=\"\" text=\"업체명\" tooltiptext=\"\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\"/><Cell col=\"1\" text=\"bind:SAP_VENDOR\" tooltiptext=\"bind:SAP_VENDOR\"/><Cell col=\"2\" text=\"bind:BIZ_NO\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:PTNR_NM\" tooltiptext=\"bind:PTNR_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divPaging", "absolute", "5", null, null, "28", "5", "10", this);
            obj.set_scrollbars("none");
            obj.set_taborder("8");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("staViewCompCond00", "absolute", "10", "7", null, "45", "10", null, this);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSap", "absolute", "121", "17", "170", "24", null, null, this);
            obj.getSetter("objNm").set("협력사명");
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Static("staSap", "absolute", "16", "17", "100", "24", null, null, this);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_align("right middle");
            obj.set_taborder("21");
            obj.set_text("Vendor");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch", "absolute", null, "17", "60", "24", "16", null, this);
            obj.set_cssclass("btn_WF_Com_G");
            obj.set_taborder("15");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("staMtrlCd", "absolute", "299", "16", "130", "24", null, null, this);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_align("right");
            obj.set_taborder("22");
            obj.set_text("사업자번호");
            this.addChild(obj.name, obj);

            obj = new Edit("edBizNo", "absolute", "434", "16", "200", "24", null, null, this);
            obj.set_inputtype("number");
            obj.set_taborder("23");
            this.addChild(obj.name, obj);

            obj = new Static("staPtnrNm", "absolute", "648", "16", "116", "24", null, null, this);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_align("right");
            obj.set_taborder("24");
            obj.set_text("업체명");
            this.addChild(obj.name, obj);

            obj = new Edit("edPtnrNm", "absolute", "769", "16", "200", "24", null, null, this);
            obj.getSetter("objNm").set("협력사명");
            obj.set_taborder("25");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1100, 600, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("협력사 SAP 팝업");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edtSap","value","dsSrchOpt","SAP_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edBizNo","value","dsSrchOpt","BIZ_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edPtnrNm","value","dsSrchOpt","PTNR_NM");
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
        this.registerScript("BPtnrSapReqPop.xfdl", function(exports) {
        /**
         * @파일명       	: BPtnrSapReqPop.xfdl
         * @생성자       	: 송태봉
         * @생성일자     	: 2017. 12. 08.
         * @설명			    : Vendor code 등록
         * @최종수정자		: 송태봉
         * @최종수정일자	    : 2017. 12. 08.
        */ 

        this.popTitle = gfnMultiLabel("EPRO_LABEL_01338");
        var ptnrId = "";
        /**
          * @함수명	: fnOnLoad
          * @desc   : 폼 onload이벤트
          */
        this.fnOnLoad = function(obj,e)
        {
        	//그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기
        	gfnSetGrdFunc(this.grdList, this.divPaging, this);
        	
        	var ownFrame = this.getOwnerFrame();
        	this.dsSrchOpt.setColumn(0,"BIZ_NO",ownFrame.agv_biz);
        	ptnrId = ownFrame.agv_ptnr;
        	this.dsSrchOpt.setColumn(0,"GUBUN",ownFrame.agv_gubun);
        	this.dsSrchOpt.setColumn(0,"REQ_ID",application.gdsUserInfo.getColumn(0,"USER_ID"));
        	
        	this.fnSearch();	
        }

        /**
          * @함수명	: fnSearch
          * @desc     	: 조회 프로세스
          */
        this.fnSearch = function()
        {
        	var sSvcID = "searchPtnrSap";
        	var sController = "epro.ptnr.service.BPtnrService.searchPtnrSap";
        	var sInDatasets = "dsSrchOpt=dsSrchOpt";
        	var sOutDatasets = "dsList=dsList";
        	var sCallbackFunc = "fnTrCallBack";
        	
        	var	oPaging = [
        					{inDs:this.dsSrchOpt, grid:this.grdList, divPaging:this.divPaging}
        				];
        				
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc, oPaging);
        }

        /**
          * @함수명	: fnTrCallBack
          * @desc     	: Transaction Callback함수
          */
        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	if(strErrCd < 0){
        		return;
        	}
        	
        	switch(strSvcID){
        		case "searchComMtrl" :	
        			this.grdList.setFocus();
        		break;
         
        		case "savePtnrSap" :
        			gfnAlert(strErrMsg);
        			this.parent.close(this.dsList.saveXML());
        			
        		break;
         
        		default:
        		break;	
        	}
        }
           
        /**
          * @함수명		: fnRtnData
          * @desc     	: 그리드 cell 더블클릭
          */   
        this.fnRtnData = function(obj,e)
        {

        	if(this.dsList.getCaseCount("CHECKED== '1'")!=1){
        		gfnAlert(gfnMultiLabel("EPRO_LABEL_01316"));
        		return;
        	}else{
        		this.fnPreSave();
        	}
        }

        /**
          * @함수명	: grdListOnkeyup
          * @desc     	: 그리드 Onkeyup 이벤트
          */ 
        this.fnOnkeyup = function(obj,e)
        {
        	if(e.keycode == "13"){
        		this.fnSearch();
        	}
        }

        /**
          * @함수명	: grdListOnkeydown
          * @desc     	: 그리드 Onkeydown 이벤트
          */
        this.grdListOnkeydown = function(obj,e)
        {
        	if(e.keycode == "13"){
        		var rtn = gfnGetSelRowString(this.dsList);

        		if(rtn){
        			this.fnPreSave();
        		}
        	}
        }

        this.fnPreSave = function()
        {
        	if(this.dsSrchOpt.getColumn(0,"GUBUN") == "SR12BZ"){
        		if(this.dsSrchOpt.getColumn(0,"BIZ_NO") != this.dsList.getColumn(this.dsList.rowposition,"BIZ_NO")){
        			gfnAlert("EPRO_LABEL_01339");
        			return;
        		}
        	}
        	
        	if(!gfnConfirm(gfnMultiLabel("EPRO_LABEL_01340"))) return;
        	
        	this.dsList.set_enableevent(false);
        	this.dsList.filter("CHECKED==1");
        	this.dsTmp.copyData(this.dsList, true);
        	this.dsList.filter("");
        	this.dsList.set_enableevent(true);
        	this.dsSrchOpt.setColumn(0,"REQ_VENDOR",this.dsList.getColumn(this.dsList.rowposition,"SAP_VENDOR"));
        	
        	this.dsTmp.setColumn(0,"PTNR_ID",ptnrId);
        	this.dsTmp.setColumn(0,"BRANCH_CD",application.gdsUserInfo.getColumn(0,"BRANCH_CD"));
        	
        	var sSvcID = "savePtnrSap";
        	var sController = "epro.ptnr.service.BPtnrService.savePtnrSap";
        	var sInDatasets = "dsTmp=dsTmp";
        	var sOutDatasets = "";
        	var sCallbackFunc = "fnTrCallBack";
        	
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fnOnLoad, this);
            this.btnRtn.addEventHandler("onclick", this.fnRtnData, this);
            this.grdList.addEventHandler("oncelldblclick", this.fnRtnData, this);
            this.grdList.addEventHandler("onkeydown", this.grdListOnkeydown, this);
            this.edtSap.addEventHandler("onkeyup", this.fnOnkeyup, this);
            this.btnSearch.addEventHandler("onclick", this.fnSearch, this);
            this.edBizNo.addEventHandler("onkeyup", this.fnOnkeyup, this);
            this.edPtnrNm.addEventHandler("onkeyup", this.fnOnkeyup, this);

        };

        this.loadIncludeScript("BPtnrSapReqPop.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
