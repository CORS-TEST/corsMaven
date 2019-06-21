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
                this.set_name("BPtnrSrchPopup");
                this.set_titletext("업체검색팝업");
                this._setFormPosition(0,0,1100,576);
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
            obj._setContents("<ColumnInfo><Column id=\"BIZ_NO\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_NM\" size=\"256\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsList", this);
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"194\"/><Column size=\"300\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"업체명\"/><Cell col=\"1\" expr=\"\" text=\"사업자번호\"/><Cell col=\"2\" expr=\"\" text=\"대표자명\"/><Cell col=\"3\" expr=\"\" text=\"대표전화\"/><Cell col=\"4\" expr=\"\" text=\"주소\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:PTNR_NM\"/><Cell col=\"1\" text=\"bind:BIZ_NO\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:RPRSTV_NM\"/><Cell col=\"3\" text=\"bind:RPTST_TEL\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:ADDR\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divPaging", "absolute", "5", null, null, "28", "5", "10", this);
            obj.set_scrollbars("none");
            obj.set_taborder("8");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divViewCompCond00", "absolute", "10", "7", null, "36", "10", null, this);
            obj.set_taborder("9");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);
            obj = new Static("staBizNo", "absolute", "0", "5", "110", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("66");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Button("btnSearch", "absolute", null, "5", "60", "24", "5", null, this.divViewCompCond00);
            obj.set_taborder("67");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            obj.style.set_imagealign("left middle");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Edit("edtPtnrNm", "absolute", "560", "5", "200", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("68");
            obj.getSetter("objNm").set("품목명");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Edit("edtBizNo", "absolute", "110", "5", "120", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("69");
            obj.getSetter("objNm").set("품목코드");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staPtnrNm", "absolute", "450", "5", "110", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("70");
            obj.set_text("협력사명");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 36, this.divViewCompCond00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("9");
            		p.set_cssclass("div_WF_SearchBg");

            	}
            );
            this.divViewCompCond00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1100, 576, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("업체검색팝업");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item12","divViewCompCond00.edtBizNo","value","dsSrchOpt","BIZ_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","divViewCompCond00.edtPtnrNm","value","dsSrchOpt","PTNR_NM");
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
        this.registerScript("BPtnrSrchPopup.xfdl", function(exports) {
        /**
         * @파일명       	: BPtnrSrchPopup.xfdl
         * @생성자       	: 김민성
         * @생성일자     	: 2019. 05. 03.
         * @설명			: 협력사 검색팝업
         * @최종수정자		: 김민성
         * @최종수정일자	: 2019. 05. 03.
        */ 

        this.popTitle = "협력사 검색"

        /**
          * @함수명	: fnOnLoad
          * @desc   : 폼 onload이벤트
          */
        this.fnOnLoad = function(obj,e)
        {
        	//그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기
        	gfnSetGrdFunc(this.grdList, this.divPaging, this);
        	var ownFrame = this.getOwnerFrame();
        	
        	this.dsSrchOpt.addRow();
        	this.dsSrchOpt.setColumn(0,"BIZ_NO",ownFrame.agv_id);
        	this.dsSrchOpt.setColumn(0,"PTNR_NM",ownFrame.agv_nm);
        	this.dsSrchOpt.setColumn(0,"BRANCH_CD", application.gdsUserInfo.getColumn(0,"BRANCH_CD"));
        	
        	if(!gfnIsNull(this.dsSrchOpt.getColumn(0,"PTNR_NM"))){
        		this.fnSearch();	
        	}
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

        	var sSvcID = "searchComPtnr";
        	var sController = "epro.com.service.BComService.searchComPtnr";
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
        		case "searchComPtnr" :	
        			this.grdList.setFocus();
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
        	var rtn = gfnGetSelRowString(this.dsList);
        			
        	if(rtn){
        		this.parent.close(rtn);
        	}	
        }

        /**
          * @함수명	: grdListOnkeyup
          * @desc     	: 그리드 Onkeyup 이벤트
          */ 
        this.fnOnkeyup = function(obj,e)
        {
        	if(e.keycode == "13"){
        		obj.updateToDataset();
        		this.fnSearch()
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
        			this.parent.close(rtn);
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fnOnLoad, this);
            this.btnRtn.addEventHandler("onclick", this.fnRtnData, this);
            this.grdList.addEventHandler("oncelldblclick", this.fnRtnData, this);
            this.grdList.addEventHandler("onkeydown", this.grdListOnkeydown, this);
            this.divViewCompCond00.staBizNo.addEventHandler("onclick", this.Tab00_tabpage1_div_condition_sta_WFSA_LabelP_onclick, this);
            this.divViewCompCond00.btnSearch.addEventHandler("onclick", this.fnSearch, this);
            this.divViewCompCond00.edtPtnrNm.addEventHandler("onkeyup", this.fnOnkeyup, this);
            this.divViewCompCond00.edtBizNo.addEventHandler("onkeyup", this.fnOnkeyup, this);
            this.divViewCompCond00.staPtnrNm.addEventHandler("onclick", this.Tab00_tabpage1_div_condition_sta_WFSA_LabelP_onclick, this);

        };

        this.loadIncludeScript("BPtnrSrchPopup.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
