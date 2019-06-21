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
                this.set_name("BMtrlSrcGrpMapping");
                this.set_titletext("소싱그룹매핑");
                this._setFormPosition(0,0,1220,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCondition", this);
            obj._setContents("<ColumnInfo><Column id=\"LRG_SRC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"MDL_SRC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"MTRL_GRP_ID\" size=\"256\" type=\"STRING\"/><Column id=\"MTRL_GRP_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHECKED\" size=\"256\" type=\"STRING\"/><Column id=\"LRG_CLS_ID\" size=\"256\" type=\"STRING\"/><Column id=\"LRG_CLS_NM\" size=\"256\" type=\"STRING\"/><Column id=\"MDL_CLS_ID\" size=\"256\" type=\"STRING\"/><Column id=\"MDL_CLS_NM\" size=\"256\" type=\"STRING\"/><Column id=\"SML_CLS_ID\" size=\"256\" type=\"STRING\"/><Column id=\"SML_CLS_NM\" size=\"256\" type=\"STRING\"/><Column id=\"SRC_GRP_ID\" size=\"256\" type=\"STRING\"/><Column id=\"SRC_GRP_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReturn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompBody00", "absolute", "0", "46", null, null, "15", "0", this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "30", null, null, "0", "37", this.divViewCompBody00);
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
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
            obj.set_taborder("8");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"300\"/><Column size=\"300\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" expr=\"\" text=\"품목그룹ID\"/><Cell col=\"2\" expr=\"\" text=\"품목그룹명\"/><Cell col=\"3\" expr=\"\" text=\"소싱그룹\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\"/><Cell col=\"1\" text=\"bind:MTRL_GRP_ID\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:MTRL_GRP_NM\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:SRC_GRP_NM2\"/></Band></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "10", this.divViewCompBody00);
            obj.set_scrollbars("none");
            obj.set_taborder("9");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnSrcGrpMap", "absolute", null, "0", "170", "25", "0", null, this.divViewCompBody00);
            obj.set_cssclass("btn_WF_Com_G");
            obj.set_expr("expr:gfnMultiLabel(\"EPRO_LABEL_00192\")");
            obj.getSetter("objNm").set("소싱그룹매핑");
            obj.set_positionstep("1");
            obj.set_taborder("10");
            obj.set_text("소싱그룹매핑");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Div("divViewCompCond00", "absolute", "0", "0", null, "36", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);
            obj = new Static("staCdEvalRunStts", "absolute", "740", "5", "170", "24", null, null, this.divViewCompCond00);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.set_taborder("8");
            obj.set_text("소싱그룹");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staGrpId", "absolute", "0", "5", "170", "24", null, null, this.divViewCompCond00);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.set_taborder("10");
            obj.set_text("품목그룹ID");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Div("divSrcGrp", "absolute", "910", "5", "267", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("13");
            obj.set_url("CCOMP::CompSrcType.xfdl");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Edit("edtGrpId", "absolute", "170", "5", "200", "24", null, null, this.divViewCompCond00);
            obj.getSetter("objNm").set("협력사명");
            obj.set_taborder("14");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staGrpNm", "absolute", "370", "5", "170", "24", null, null, this.divViewCompCond00);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.set_taborder("15");
            obj.set_text("품목그룹명");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Edit("edtGrpNm", "absolute", "540", "5", "200", "24", null, null, this.divViewCompCond00);
            obj.getSetter("objNm").set("협력사명");
            obj.set_taborder("16");
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
            obj = new Layout("default", "", 0, 36, this.divViewCompCond00,
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
            		p.set_titletext("소싱그룹매핑");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("divPagingVi","divViewCompBody00.divPaging","visible","dsObjBindVi","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPagingEn","divViewCompBody00.divPaging","enable","dsObjBindEn","divPaging");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnSrcGrpMapVi","divViewCompBody00.btnSrcGrpMap","visible","dsObjBindVi","btnSrcGrpMap");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnSrcGrpMapEn","divViewCompBody00.btnSrcGrpMap","enable","dsObjBindEn","btnSrcGrpMap");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCdEvalRunSttsVi","divViewCompCond00.staCdEvalRunStts","visible","dsObjBindVi","staCdEvalRunStts");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCdEvalRunSttsEn","divViewCompCond00.staCdEvalRunStts","enable","dsObjBindEn","staCdEvalRunStts");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTtlVi","divViewCompCond00.staGrpId","visible","dsObjBindVi","staTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTtlEn","divViewCompCond00.staGrpId","enable","dsObjBindEn","staTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divSrcGrpVi","divViewCompCond00.divSrcGrp","visible","dsObjBindVi","divSrcGrp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divSrcGrpEn","divViewCompCond00.divSrcGrp","enable","dsObjBindEn","divSrcGrp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("grdListFormatId","divViewCompBody00.grdList","formatid","dsObjBindGrid","grdList");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnSrcGrpMapLangBind2017110317184271793","divViewCompBody00.btnSrcGrpMap","text","gdsLabel","EPRO_LABEL_00192");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","divViewCompCond00.staGrpNm","visible","dsObjBindVi","staTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divViewCompCond00.staGrpNm","enable","dsObjBindEn","staTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divViewCompCond00.edtGrpId","value","dsCondition","MTRL_GRP_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","divViewCompCond00.edtGrpNm","value","dsCondition","MTRL_GRP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompSrcType.xfdl");
        };
        
        // User Script
        this.registerScript("BMstSrcGrpMapp.xfdl", function(exports) {
        /**
         * @파일명       	: BMstSrcGrpMappList.xfdl
         * @생성자       	: 정준화
         * @생성일자     	: 2017. 9. 04.
         * @설명			: 소싱그룹매핑 리스트
         * @최종수정자		: 안성민
         * @최종수정일자	: 2017. 11. 03.
        */  

        /**
          * @함수명	: fnFormOnload
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.LoadEventInfo(이벤트변수)
          * @desc     	: 폼 onload이벤트
          */
        this.fnFormOnload = function(obj,e)
        {	
        	var sArgEx = {
        					isTran:"Y", tranNm:"BMstService.searchMstSrcGrpMapp", dsParam:this.dsCondition
        				}
         	gfnSetGrdFunc(this.divViewCompBody00.grdList, this.divViewCompBody00.divPaging, this, sArgEx);
         	gfnSetObj("A");
         	
        	this.divViewCompCond00.divSrcGrp.fnSetBind(this.dsCondition,"LRG_SRC_ID","MDL_SRC_ID");
        	this.fnSearch();
        }

        /**
          * @함수명	: fnPreSave
          * @desc     	: 저장 전 처리
          */
        this.fnPreSave = function(){
        	var chk = false;
        	
        	for(var i = 0 ; i < this.dsList.rowcount ; i++){
        		if(this.dsList.getRowType(i) == "4"){
        			chk = true;
        			break;
        		}
        	}
        	
        	if(!chk){
        		gfnAlert("EPRO_LABEL_01344");
        		return false;
        	}

        	if(!gfnConfirm("EPRO_LABEL_00001")) return false;

        	return true;
        }

        /**
          * @함수명	: fnSave
          * @desc     	: (공통버튼)저장
          */
        this.fnSave = function(){
        	if(!this.fnPreSave()) return false;
        	
        	var sSvcID = "saveMstSrcGrpMapp";
        	var sController = "epro.mst.service.BMstService.saveMstSrcGrpMapp";
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
          * @함수명	: fnSearch
          * @desc     	: 조회 프로세스
          */
        this.fnSearch = function()
        {
        	var sSvcID = "searchMstSrcGrpMapp";
        	var sController = "epro.mst.service.BMstService.searchMstSrcGrpMapp";
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
        		case "searchMstSrcGrpMapp" :
        		break;
        		
        		case "saveMstSrcGrpMapp" :
        			gfnAlert(strErrMsg);
        			this.fnSearch();
        		break;
        				
        		default:
        		break;	
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
        	
        	if(sPopupId == "srcGrpMappPop"){	    
        		this.dsReturn.loadXML(rtn);

        		for(var i=0; i<this.dsList.getRowCount(); i++)
        		{
        			if(this.dsList.getColumn(i, "CHECKED") == "1")
        			{	
        				this.dsList.setColumn(i,"SRC_GRP_ID", this.dsReturn.getColumn(0, "MDL_SRC_ID"));
        				this.dsList.setColumn(i, "SRC_GRP_NM2", this.dsReturn.getColumn(0, "SRC_GRP_NM2"));
        			}
        		}
        	}
        }

        /**
          * @함수명	: divViewCompBody00_btnSrcGrpMap_onclick
          * @input    	: sPopupId(팝업ID), rtn(팝업에서 리턴하는 문자열)
          * @desc     	: 팝업 CallBack 함수
          */
        this.fnBtnSrcGrpMapOnclick = function(obj,e)
        {
        	if(!gfnIsGrdChk(this.dsList)) {
        		gfnAlert("EPRO_LABEL_00759");
        		return;
        		
        	} else {
        		var sArg = { };
        		gfnModalPop(this, "srcGrpMappPop", "BMST::BMstSrcGrpMappPop.xfdl", sArg, "fnPopCallBack", 520, 100);
        	}	
        }

        this.fnOnkeyup = function(obj,e)
        {
        	if(e.keycode == 13){
        		obj.updateToDataset();
        		this.fnSearch();
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.divViewCompBody00.btnSrcGrpMap.addEventHandler("onclick", this.fnBtnSrcGrpMapOnclick, this);
            this.divViewCompCond00.edtGrpId.addEventHandler("onkeyup", this.fnOnkeyup, this);
            this.divViewCompCond00.edtGrpNm.addEventHandler("onkeyup", this.fnOnkeyup, this);

        };

        this.loadIncludeScript("BMstSrcGrpMapp.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
