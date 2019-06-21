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
                this.set_name("PCTRB400L00");
                this.set_titletext("계약템플릿현황");
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
            obj._setContents("<ColumnInfo><Column id=\"TKEY\" size=\"40\" type=\"string\"/><Column id=\"ALT_USE\" size=\"1\" type=\"string\"/><Column id=\"CD_CNTR_TYPE_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_CNTR_TYPE\" size=\"40\" type=\"string\"/><Column id=\"CD_CNTR_CTGR_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_CNTR_CTGR\" size=\"40\" type=\"string\"/><Column id=\"BRANCH_CD\" size=\"20\" type=\"string\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"TKEY\" size=\"40\" type=\"string\"/><Column id=\"CNTR_CNTNT\" size=\"4000\" type=\"string\"/><Column id=\"TTL\" size=\"600\" type=\"string\"/><Column id=\"CRTR_ID\" size=\"50\" type=\"string\"/><Column id=\"CRTR_NM\" size=\"90\" type=\"string\"/><Column id=\"RMARK\" size=\"1500\" type=\"string\"/><Column id=\"LAST_CHG_DT\" size=\"7\" type=\"string\"/><Column id=\"CD_CNTR_TYPE\" size=\"40\" type=\"string\"/><Column id=\"LAST_CHGR_ID\" size=\"50\" type=\"string\"/><Column id=\"CD_CNTR_CTGR_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_CNTR_CTGR\" size=\"40\" type=\"string\"/><Column id=\"CRT_DT\" size=\"7\" type=\"string\"/><Column id=\"PORG_ID\" size=\"20\" type=\"string\"/><Column id=\"CNTR_TMPL_ID\" size=\"40\" type=\"string\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReturn", this);
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

            obj = new Dataset("dsCdCT11", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCT19", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divCondition", "absolute", "0", "0", null, "43", "15", null, this);
            obj.set_taborder("45");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label", "absolute", "0", "10", "117", "24", null, null, this.divCondition);
            obj.set_taborder("1");
            obj.set_text("계약유형");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.divCondition.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label00", "absolute", "267", "10", "117", "24", null, null, this.divCondition);
            obj.set_taborder("3");
            obj.set_text("계약구분");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.divCondition.addChild(obj.name, obj);
            obj = new Combo("cboCdCntrType", "absolute", "384", "10", "150", "24", null, null, this.divCondition);
            this.divCondition.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_cssclass("cbo_default");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_innerdataset("dsCdCT19");
            obj.getSetter("objNm").set("계약구분");
            obj.set_index("-1");
            obj = new Static("sta_WFDA_Label01", "absolute", "534", "10", "117", "24", null, null, this.divCondition);
            obj.set_taborder("5");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.divCondition.addChild(obj.name, obj);
            obj = new Combo("cboAltUse", "absolute", "651", "10", "100", "24", null, null, this.divCondition);
            this.divCondition.addChild(obj.name, obj);
            var cboAltUse_innerdataset = new Dataset("cboAltUse_innerdataset", this.divCondition.cboAltUse);
            cboAltUse_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(cboAltUse_innerdataset);
            obj.set_taborder("8");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("사용여부");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("-1");
            obj = new Combo("cboCntrCtgr", "absolute", "117", "10", "150", "24", null, null, this.divCondition);
            this.divCondition.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_innerdataset("dsCdCT11");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("계약유형");
            obj.set_index("-1");

            obj = new Div("divViewCompBody00", "absolute", "0", "53", null, null, "7", "0", this);
            obj.set_taborder("47");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "4", null, null, "0", "37", this.divViewCompBody00);
            obj.set_taborder("5");
            obj.set_binddataset("dsList");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
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
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/><Column size=\"75\"/><Column size=\"352\"/><Column size=\"91\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"계약유형\" combodataset=\"ds_cdET31\" combocodecol=\"CD_NM_LO\" combodatacol=\"CD_ID\"/><Cell col=\"1\" text=\"관리번호\"/><Cell col=\"2\" text=\"계약명\"/><Cell col=\"3\" text=\"작성자\"/><Cell col=\"4\" text=\"작성일자\"/><Cell col=\"5\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:CD_CNTR_CTGR_NM\"/><Cell col=\"1\" displaytype=\"normal\" style=\"color:blue;color2:blue;\" cssclass=\"cell_link\" text=\"bind:CNTR_TMPLT_NO\" maskchar=\" \"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:TTL\"/><Cell col=\"3\" text=\"bind:CRTR_NM\"/><Cell col=\"4\" text=\"bind:CRT_DT\" mask=\"@@@@.@@.@@\" maskchar=\" \"/><Cell col=\"5\" expr=\"expr:ALT_USE=='Y'?'예':'아니오'\" maskchar=\" \"/></Band></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "10", this.divViewCompBody00);
            obj.set_taborder("6");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("페이징");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.divViewCompBody00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1042, 43, this.divCondition,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("45");
            		p.set_cssclass("div_WF_SearchBg");

            	}
            );
            this.divCondition.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("47");
            		p.set_text("Div00");

            	}
            );
            this.divViewCompBody00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1220, 711, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("frmSearchCond");
            		p.set_titletext("계약템플릿현황");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div_condition.cboCntrCtgr","value","dsCondition","CD_CNTR_CTGR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_condition.cb_cdCntrType","value","dsCondition","CD_CNTR_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divCondition.cboAltUse","value","dsCondition","ALT_USE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","divCondition.cboCntrCtgr","value","dsCondition","CD_CNTR_CTGR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","divCondition.cboCdCntrType","value","dsCondition","CD_CNTR_TYPE");
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
        this.registerScript("BCntrTemplateList.xfdl", function(exports) {
        /**
           @file       BCntrTemplateList.xfdl
           @desc       계약템플릿현황
           @author     안성민
           @makedate   2019.03.05
           @history    
        */

        /**
        	@function	FormOninit()
        	@desc   	폼 oninit이벤트
        */
        this.FormOninit = function(obj,e)
        {
        	this.fnSetCode();
        		
        }

        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function(){
        	
        	//콤보박스 생성시 S:선택, A:전체
        	var param = [
        					{code:"CT11", sSelectType:"A"} // 계약유형
        					 ,{code:"CT19", sSelectType:"A"} // 계약구분
        				];

        	//공통코드 데이터셋 생성
        	gfnGetCode(this, param);
        }

        /**
        	@function	FormOnload()
        	@desc   	폼 onload이벤트
        */
        this.FormOnload = function(obj,e)
        {
        	gfnSetObj("A");
        	//그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기(그리드 컴포넌트, 페이징div 컴포넌트, 폼오브젝트(this))
         	gfnSetGrdFunc(this.divViewCompBody00.grdList, this.divViewCompBody00.divPaging, this,{isTran:"Y", tranNm:"BRptService.searchRptRfqPrg", dsParam:this.dsCondition});
         	
        	//검색조건 DataSet Row추가
        	this.dsCondition.addRow();
        	
        	
        	//공통코드 콤보 index 처리
        	this.dsCondition.setColumn(0, "CD_CNTR_TYPE", "");
        	this.dsCondition.setColumn(0, "CD_CNTR_CTGR", "");
        	this.dsCondition.setColumn(0, "ALT_USE", "");
        	
        	this.fnSearch();
        	
        }

        /**
        	@function	fnPreSearch()
        	@desc   	조회 전 처리
        */
        this.fnPreSearch = function()
        {
        	return true;
        }

        /**
        	@function	fnSearch()
        	@desc   	조회 프로세스
        */
        this.fnSearch = function()
        {
        	if(!this.fnPreSearch()) return false;
            
            var sSvcID = "search";
        	var sController = "epro.cntr.service.BCntrService.searchTemplateList";
        	var sInDatasets = "dsCondition=dsCondition";
        	var sOutDatasets = "dsList=dsList";
        	var sCallbackFunc = "fnTrCallBack";
        		
         	var	oPaging = [      
                            {inDs:this.dsCondition, grid:this.divViewCompBody00.grdList, divPaging:this.divViewCompBody00.divPaging}
                        ];
             gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc, oPaging);
            
        }

        /**
        	@function	fnAdd()
        	@desc   	(공통버튼)신규
        */
        this.fnAdd = function()
        {
        	gfnOpenMenuUrl("BCNTR::BCntrTemplateDetail");
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
        	
        		case "search" :
        		break;

        		default:
        		break;	
        	}
        }

        /**
        	@function	grdListOnCelldblclick()
        	@desc   	그리드 더블클릭 이벤트
        */
        this.grdListOnCelldblclick = function(obj,e)
        {
        	if(gfnIsNull(this.dsList.getColumn(e.row, gfnGrdBindColId(obj, e.cell)))) return false;
        	if("CNTR_TMPLT_NO" == gfnGrdBindColId(obj, obj.getCellPos())){ 
        		gfnSetTmprData("CNTR_TMPLT_NO" ,this.dsList.getColumn(e.row, "CNTR_TMPLT_NO"));
        		gfnSetTmprData("BRANCH_CD" ,this.dsList.getColumn(e.row, "BRANCH_CD"));
        		gfnOpenMenuUrl("BCNTR::BCntrTemplateDetail");
        	}
        }
         
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.FormOnload, this);
            this.addEventHandler("oninit", this.FormOninit, this);
            this.divCondition.cboCdCntrType.addEventHandler("onitemchanged", this.div_condition_CD_RFQ_STTS_onitemchanged, this);
            this.divCondition.cboCntrCtgr.addEventHandler("onitemchanged", this.div_condition_CD_RFQ_STTS_onitemchanged, this);
            this.divViewCompBody00.grdList.addEventHandler("oncelldblclick", this.grdListOnCelldblclick, this);

        };

        this.loadIncludeScript("BCntrTemplateList.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
