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
                this.set_name("BCntrTmplList");
                this.set_titletext("계약템플릿현황");
                this._setFormPosition(0,0,1220,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"RFQ_REQ_NO\" size=\"20\" type=\"STRING\"/><Column id=\"RFQ_ODR\" size=\"256\" type=\"INT\"/><Column id=\"CD_RFQ_STTS\" size=\"40\" type=\"STRING\"/><Column id=\"CD_DOC_CTGR\" size=\"40\" type=\"STRING\"/><Column id=\"TTL\" size=\"100\" type=\"STRING\"/><Column id=\"RFQ_CLOSE_DAY\" size=\"8\" type=\"STRING\"/><Column id=\"RFQ_CLOSE_TIME\" size=\"6\" type=\"STRING\"/><Column id=\"GOALAMT\" size=\"15\" type=\"INT\"/><Column id=\"CHRGR_NM\" size=\"50\" type=\"STRING\"/><Column id=\"REQ_DT\" size=\"256\" type=\"DATE\"/><Column id=\"ITEM_CNT\" size=\"20\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"20\" type=\"STRING\"/><Column id=\"TNDR_NO\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCondition", this);
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CNTR_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CNTR_CTGR\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_USE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCT11", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCT19", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompBody00", "absolute", "0", "48", null, null, "15", "0", this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "1", null, null, "0", "37", this.divViewCompBody00);
            obj.set_autofittype("none");
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
            obj.set_taborder("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/><Column size=\"85\"/><Column size=\"75\"/><Column size=\"352\"/><Column size=\"91\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"계약유형\" combodataset=\"ds_cdET31\" combocodecol=\"CD_NM_LO\" combodatacol=\"CD_ID\"/><Cell col=\"1\" text=\"계약구분\"/><Cell col=\"2\" text=\"관리번호\"/><Cell col=\"3\" text=\"템플릿명\"/><Cell col=\"4\" text=\"작성자\"/><Cell col=\"5\" text=\"작성일자\"/><Cell col=\"6\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:CD_CNTR_CTGR_NM\"/><Cell col=\"1\" text=\"bind:CD_CNTR_TYPE_NM\"/><Cell col=\"2\" style=\"color:blue;color2:blue;\" cssclass=\"cell_link\" text=\"bind:CNTR_TMPL_ID\" maskchar=\" \"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:TTL\"/><Cell col=\"4\" text=\"bind:CRTR_NM\"/><Cell col=\"5\" text=\"bind:CRT_DT\" mask=\"@@@@.@@.@@\" maskchar=\" \"/><Cell col=\"6\" expr=\"expr:ALT_USE=='Y'?'사용':'미사용'\" maskchar=\" \"/></Band></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "10", this.divViewCompBody00);
            obj.getSetter("objNm").set("페이징");
            obj.set_scrollbars("none");
            obj.set_taborder("2");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Div("divViewCompCond00", "absolute", "0", "0", null, "36", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.style.set_align("center");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);
            obj = new Static("staCdCntrType", "absolute", "452", "5", "103", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("2");
            obj.set_text("계약구분");
            obj.style.set_align("right middle");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Combo("cboCdCntrType", "absolute", "559", "5", "146", "24", null, null, this.divViewCompCond00);
            this.divViewCompCond00.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_innerdataset("@dsCdCT19");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj = new Static("staCdCntrCtgr", "absolute", "12", "5", "170", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("7");
            obj.set_text("계약유형");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_align("right middle");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Combo("cboCdCntrCtgr", "absolute", "187", "5", "146", "24", null, null, this.divViewCompCond00);
            this.divViewCompCond00.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_innerdataset("@dsCdCT11");
            obj = new Combo("cboAltUse", "absolute", "932", "5", "146", "24", null, null, this.divViewCompCond00);
            this.divViewCompCond00.addChild(obj.name, obj);
            var cboAltUse_innerdataset = new Dataset("cboAltUse_innerdataset", this.divViewCompCond00.cboAltUse);
            cboAltUse_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">[전체]</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(cboAltUse_innerdataset);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj = new Static("staAltUse", "absolute", "824", "5", "103", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("10");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_align("right middle");
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
            		p.style.set_align("center");
            		p.set_taborder("3");

            	}
            );
            this.divViewCompCond00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1220, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("계약템플릿현황");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","divViewCompCond00.cboCdCntrCtgr","value","dsCondition","CD_CNTR_CTGR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divViewCompCond00.cboCdCntrType","value","dsCondition","CD_CNTR_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divViewCompCond00.cboAltUse","value","dsCondition","ALT_USE");
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
        this.registerScript("BCntrTmplList.xfdl", function(exports) {
        /**
         * @파일명			: BCntrTmplList
         * @생성자			: 안성민
         * @생성일시		: 2019. 05. 13.
         * @설명			: 계약템플릿현황
         * @최종수정자		: 안성민
         * @최종수정일시	: 2019. 05. 13.
        */  

        
        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {
        	var param = [	{code:"CT11", sSelectType:"A"} // 계약유형
        					,{code:"CT19", sSelectType:"A"} // 계약구분
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
         	gfnSetGrdFunc(this.divViewCompBody00.grdList, this.divViewCompBody00.divPaging, this,{isTran:"Y", tranNm:"BCntrService.searchTmplList", dsParam:this.dsCondition});
         	
        	//기본세팅
        	this.dsCondition.setColumn(0, "CD_CNTR_TYPE", "");
        	this.dsCondition.setColumn(0, "CD_CNTR_CTGR", "");
        	this.dsCondition.setColumn(0, "ALT_USE", "");

        	this.fnSearch();
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
        				
        	var sSvcID = "search";
        	var sController = "epro.cntr.service.BCntrService.searchTmplList";
        	var sInDatasets = "dsCondition=dsCondition";
        	var sOutDatasets = "dsList=dsList";
        	var sCallbackFunc = "fnTrCallBack";
        			  
         	var	oPaging = [      
                            {inDs:this.dsCondition, grid:this.divViewCompBody00.grdList, divPaging:this.divViewCompBody00.divPaging}
                        ];
             gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc, oPaging);
        }

        /**
          * @함수명	: fnAdd
          * @desc     	: 신구 프로세스
          */
        this.fnAdd = function()
        {
        	gfnOpenMenuUrl("BCNTR::BCntrTmplDetail");
        }

        /**
          * @함수명	: fnTrCallBack
          * @input    	: strSvcID(트랜잭션 ID), strErrCd(트랜잭션 결과 코드), strErrMsg(트랜잭션 결과 메시지)
          * @desc     	: Transaction Callback함수
          */
        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	if(strErrCd < 0) return;
        	
        	switch(strSvcID)
        	{
        		case "search" : 
        			break;
        		default:
        		break;	
        	}
        }

        /**
        	@function	fnKeydown
        	@desc   	에디터 키이벤트
        */
        this.fnKeydown = function(obj,e)
        {
        	if(e.keycode == "13"){
        		obj.updateToDataset();
        		this.fnSearch();
        	}
        	
        }

        /**
          * @함수명	: fnGridListOnCelldblclick
          * @desc     	: 그리드 리스트 셀 더블클릭이벤트
          */
        this.fnGridListOnCelldblclick = function(obj,e)
        {
        	if(gfnIsNull(this.dsList.getColumn(e.row, gfnGrdBindColId(obj, e.cell)))) return false;
        		
        	//템플릿번호
        	if("CNTR_TMPL_ID" == gfnGrdBindColId(obj, obj.getCellPos())) { 
        		gfnSetTmprData("CNTR_TMPL_ID", this.dsList.getColumn(e.row,"CNTR_TMPL_ID"));
        		gfnSetTmprData("BRANCH_CD", this.dsList.getColumn(e.row,"BRANCH_CD"));
        		gfnOpenMenuUrl("BCNTR::BCntrTmplDetail");
        	} 
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.FormOninit, this);
            this.addEventHandler("onload", this.FormOnload, this);
            this.divViewCompBody00.grdList.addEventHandler("oncelldblclick", this.fnGridListOnCelldblclick, this);
            this.divViewCompCond00.staCdCntrType.addEventHandler("onclick", this.div_condition_sta_geayakGyelFgCdDist_onclick, this);
            this.divViewCompCond00.cboCdCntrType.addEventHandler("onkeydown", this.fnKeydown, this);
            this.divViewCompCond00.staCdCntrCtgr.addEventHandler("onclick", this.div_condition_sta_geayakGyelFgCdDist_onclick, this);
            this.divViewCompCond00.cboCdCntrCtgr.addEventHandler("onkeydown", this.fnKeydown, this);
            this.divViewCompCond00.cboAltUse.addEventHandler("onkeydown", this.fnKeydown, this);
            this.divViewCompCond00.staAltUse.addEventHandler("onclick", this.div_condition_sta_geayakGyelFgCdDist_onclick, this);

        };

        this.loadIncludeScript("BCntrTmplList.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
