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
                this.set_name("BCntrTmplPop");
                this.set_titletext("계약템플릿참조 팝업");
                this._setFormPosition(0,0,999,456);
            }
            this.getSetter("inheritanceid").set("");

            
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
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CNTR_CTGR\" size=\"40\" type=\"string\"/><Column id=\"CD_CNTR_TYPE\" size=\"40\" type=\"string\"/><Column id=\"TTL\" size=\"600\" type=\"string\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column type=\"string\" id=\"CHECKED\" size=\"1\"/><Column type=\"string\" id=\"TKEY\" size=\"40\"/><Column type=\"string\" id=\"ALT_USE\" size=\"1\"/><Column type=\"string\" id=\"CNTR_CNTNT\" size=\"4000\"/><Column type=\"string\" id=\"TTL\" size=\"600\"/><Column type=\"string\" id=\"CRTR_ID\" size=\"50\"/><Column type=\"string\" id=\"RMARK\" size=\"1500\"/><Column type=\"string\" id=\"LAST_CHG_DT\" size=\"7\"/><Column type=\"string\" id=\"CD_CNTR_TYPE_NM\" size=\"40\"/><Column type=\"string\" id=\"CD_CNTR_TYPE\" size=\"40\"/><Column type=\"string\" id=\"LAST_CHGR_ID\" size=\"50\"/><Column type=\"string\" id=\"CD_CNTR_CTGR_NM\" size=\"40\"/><Column type=\"string\" id=\"CD_CNTR_CTGR\" size=\"40\"/><Column type=\"string\" id=\"CRT_DT\" size=\"7\"/><Column type=\"string\" id=\"PORG_ID\" size=\"20\"/><Column type=\"string\" id=\"CNTR_TMPL_ID\" size=\"40\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCT11", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCT19", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompCond00", "absolute", "10", "7", null, "36", "10", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);
            obj = new Button("btnSearch", "absolute", "904", "5", "67", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.getSetter("objNm").set("검색버튼");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staCntrCtgr", "absolute", "0", "4", "117", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("0");
            obj.set_text("계약유형");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staCntrType", "absolute", "247", "4", "117", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("2");
            obj.set_text("계약구분");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Combo("cboCntrCtgr", "absolute", "122", "5", "120", "24", null, null, this.divViewCompCond00);
            this.divViewCompCond00.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_innerdataset("dsCdCT11");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("계약유형");
            obj = new Combo("cboCntrType", "absolute", "369", "5", "120", "24", null, null, this.divViewCompCond00);
            this.divViewCompCond00.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_innerdataset("dsCdCT19");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("계약구분");
            obj = new Static("staTtl", "absolute", "494", "4", "117", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("6");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Edit("edtTtl", "absolute", "616", "5", "250", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("7");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("계약명");
            this.divViewCompCond00.addChild(obj.name, obj);

            obj = new Button("btnApply", "absolute", null, "48", "69", "24", "12", null, this);
            obj.set_taborder("9");
            obj.set_text("적용");
            obj.getSetter("objNm").set("적용");
            obj.getSetter("lbcd").set("");
            this.addChild(obj.name, obj);

            obj = new Div("divViewCompBody00", "absolute", "10", "77", null, null, "10", "10", this);
            obj.set_taborder("10");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "0", this.divViewCompBody00);
            obj.set_taborder("6");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("페이징");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "0", null, null, "0", "28", this.divViewCompBody00);
            obj.set_taborder("7");
            obj.set_binddataset("dsList");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"203\"/><Column size=\"546\"/><Column size=\"95\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"계약유형\"/><Cell col=\"1\" text=\"계약구분\"/><Cell col=\"2\" text=\"제목\"/><Cell col=\"3\" text=\"최종수정일자\"/></Band><Band id=\"body\"><Cell text=\"bind:CD_CNTR_CTGR_NM\"/><Cell col=\"1\" text=\"bind:CD_CNTR_TYPE_NM\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:TTL\"/><Cell col=\"3\" text=\"bind:LAST_CHG_DT\" mask=\"@@@@.@@.@@\" maskchar=\" \"/></Band></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 36, this.divViewCompCond00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.set_cssclass("div_WF_SearchBg");

            	}
            );
            this.divViewCompCond00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("10");
            		p.set_text("Div00");

            	}
            );
            this.divViewCompBody00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 999, 456, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("계약템플릿참조 팝업");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div_condition.edt_Ttl","value","dsCondition","TTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_condition.cb_cdCntrCtgr","value","dsCondition","CD_CNTR_CTGR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_condition.cb_cdCntrType","value","dsCondition","CD_CNTR_TYPE");
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
        this.registerScript("BCntrTmplPop.xfdl", function(exports) {
        /**
         * @파일명			: SCntrDetail
         * @생성자			: 안성민
         * @생성일시		: 2019. 05. 14.
         * @설명			: 계약상세
         * @최종수정자		: 안성민
         * @최종수정일시	: 2019. 05. 14.
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
        this.fnFormOninit = function(obj,e)
        {
        	this.fnSetCode();
        }

        /**
          * @함수명	: fnFormOnload
          * @input    	: obj:Form(폼 오브젝트), e:nexacr o.LoadEventInfo(이벤트변수)
          * @desc     	: 폼 onload이벤트
          */
        this.fnFormOnload = function(obj,e)
        {	
        	
        	//그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기(그리드 컴포넌트, 페이징div 컴포넌트, 폼오브젝트(this))
         	gfnSetGrdFunc(this.divViewCompBody00.grdList, this.divViewCompBody00.divPaging, this);
        	
        	var ownFrame = this.getOwnerFrame();
        	var type = ownFrame.avg_type;
        	var ctgr = ownFrame.avg_ctgr;
        	//검색조건 DataSet Row추가
        	this.dsCondition.addRow();
        	this.dsCondition.setColumn(0,"CD_CNTR_TYPE",type);
        	this.dsCondition.setColumn(0,"CD_CNTR_CTGR",ctgr);
        	this.dsCondition.setColumn(0,"ALT_USE","Y"); //템플릿 참조 시, 사용여부가 'Y'인것만을 불러온다.
        	
        	this.fnSearch();
        }
        /**
        	@function	fnPreSearch()
        	@desc   	조회 전처리
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
            if(!this.fnPreSearch()) return;
        	
        	var sSvcID = "search";
        	var sController = "epro.cntr.service.BCntrService.searchCntrTmpl";
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
        	
        	switch(strSvcID)
        	{
        		case "search" : 
        			break;
        		default:
        		break;	
        	}
        }

        /**
        	@function	fnBtnApplyOnclick()
        	@desc   	적용버튼클릭 
        */
        this.fnBtnApplyOnclick = function(obj,e)
        {
        	if(this.dsList.rowposition < 0){
        		gfnAlert("선택된 행이 없습니다.");
        		return;
        	} else{
        		var rtn = gfnGetSelRowString(this.dsList);
        		this.parent.close(rtn);
        	}
        }

        /**
        	@function	fnGrdListOncelldblClick()
        	@desc   	그리드 더블클릭시 데이터적용
        */
        this.fnGrdListOncelldblClick = function(obj,e)
        {
        	var rtn = gfnGetSelRowString(this.dsList);
        	
        	if(rtn){
        		this.parent.close(rtn);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.divViewCompCond00.btnSearch.addEventHandler("onclick", this.fnSearch, this);
            this.btnApply.addEventHandler("onclick", this.fnBtnApplyOnclick, this);
            this.divViewCompBody00.grdList.addEventHandler("oncelldblclick", this.fnGrdListOncelldblClick, this);

        };

        this.loadIncludeScript("BCntrTmplPop.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
