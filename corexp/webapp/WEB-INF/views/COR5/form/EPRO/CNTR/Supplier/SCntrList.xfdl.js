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
                this.set_name("SCntrList");
                this.set_titletext("계약현황");
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
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CNTR_STTS\" type=\"STRING\" size=\"256\"/><Column id=\"TTL\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_STR\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_END\" type=\"STRING\" size=\"256\"/><Column id=\"PTNR_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCT10", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM10", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompBody00", "absolute", "0", "51", null, null, "15", "0", this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "0", null, null, "0", "37", this.divViewCompBody00);
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"300\"/><Column size=\"90\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"70\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"운영단위\"/><Cell col=\"1\" text=\"계약번호\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"계약명\"/><Cell col=\"4\" text=\"계약유형\"/><Cell col=\"5\" text=\"계약시작일자\"/><Cell col=\"6\" text=\"계약종료일자\"/><Cell col=\"7\" text=\"총계약금액\"/><Cell col=\"8\" text=\"작성일자\"/><Cell col=\"9\" text=\"담당자\"/></Band><Band id=\"body\"><Cell text=\"bind:BRANCH_NM\" tooltiptext=\"bind:BRANCH_NM\"/><Cell col=\"1\" style=\"color:blue;color2:blue;\" cssclass=\"cell_link\" text=\"bind:CNTR_NO\" maskchar=\" \" tooltiptext=\"bind:CNTR_NO\"/><Cell col=\"2\" text=\"bind:CD_CNTR_STTS_NM\" tooltiptext=\"bind:CD_CNTR_STTS_NM\"/><Cell col=\"3\" style=\"align:left;\" cssclass=\"cell_link\" text=\"bind:TTL\" tooltiptext=\"bind:TTL\"/><Cell col=\"4\" text=\"bind:CD_CNTR_CTGR_NM\" tooltiptext=\"bind:CD_CNTR_CTGR_NM\"/><Cell col=\"5\" displaytype=\"date\" text=\"bind:CNTR_BGN_DAY\" mask=\"yyyy.MM.dd\" maskchar=\" \" calendardisplaynulltype=\"none\" tooltiptext=\"bind:CNTR_BGN_DAY\"/><Cell col=\"6\" displaytype=\"date\" text=\"bind:CNTR_END_DAY\" mask=\"yyyy.MM.dd\" maskchar=\" \" calendardisplaynulltype=\"none\" tooltiptext=\"bind:CNTR_END_DAY\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CNTR_AMT\" mask=\"#,##0.00\" tooltiptext=\"bind:CNTR_AMT\"/><Cell col=\"8\" displaytype=\"date\" edittype=\"none\" text=\"bind:CRT_DT\" mask=\"yyyy.MM.dd\" maskchar=\" \" calendardisplaynulltype=\"none\" tooltiptext=\"bind:CRT_DT\"/><Cell col=\"9\" cssclass=\"cell_link\" text=\"bind:CNTR_REQR_NM\" tooltiptext=\"bind:CNTR_REQR_NM\"/></Band></Format></Formats>");
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
            obj = new Static("staCdCntrStts", "absolute", "276", "5", "91", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("2");
            obj.set_text("계약상태");
            obj.style.set_align("right middle");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staCntrNo", "absolute", "12", "5", "91", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("4");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_align("right middle");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Edit("edtCntrNo", "absolute", "108", "5", "163", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("5");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Combo("cboCdCntrStts", "absolute", "372", "5", "147", "24", null, null, this.divViewCompCond00);
            this.divViewCompCond00.addChild(obj.name, obj);
            var cboCdCntrStts_innerdataset = new Dataset("cboCdCntrStts_innerdataset", this.divViewCompCond00.cboCdCntrStts);
            cboCdCntrStts_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">[선택]</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">유효</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">만료</Col></Row></Rows>");
            obj.set_innerdataset(cboCdCntrStts_innerdataset);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj = new Static("staCntrReqDt", "absolute", "524", "5", "91", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("7");
            obj.set_text("계약일자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_align("right middle");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Div("divCntrReqDt", "absolute", "620", "5", "260", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("8");
            obj.set_text("Div01");
            obj.getSetter("objNm").set("계약기간");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staCntrTtl", "absolute", "885", "5", "75", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("9");
            obj.set_text("계약명");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_align("right middle");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Edit("edtCntrTtl", "absolute", "965", "5", "229", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("10");
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
            		p.set_titletext("계약현황");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","divViewCompCond00.edtCntrNo","value","dsCondition","CNTR_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divViewCompCond00.cboCdCntrStts","value","dsCondition","CD_CNTR_STTS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divViewCompCond00.edtCntrTtl","value","dsCondition","TTL");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompCalFromTo.xfdl");
        };
        
        // User Script
        this.registerScript("SCntrList.xfdl", function(exports) {
        /**
         * @파일명			: SCntrList
         * @생성자			: 안성민
         * @생성일시		: 2019. 05. 13.
         * @설명			: 계약현황
         * @최종수정자		: 안성민
         * @최종수정일시	: 2019. 05. 13.
        */  

        
        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {
        	var param = [	{code:"CT10", sSelectType:"A", sFiltered:"D:WRI,CXL,WAT"} // 계약상태
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
          * @함수명	: fnFormOnload
          * @input    	: obj:Form(폼 오브젝트), e:nexacr o.LoadEventInfo(이벤트변수)
          * @desc     	: 폼 onload이벤트
          */
        this.FormOnload = function(obj,e)
        {	
        	gfnSetObj("A");
        	
        	//그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기(그리드 컴포넌트, 페이징div 컴포넌트, 폼오브젝트(this))
         	gfnSetGrdFunc(this.divViewCompBody00.grdList, this.divViewCompBody00.divPaging, this,{isTran:"Y", tranNm:"BCntrService.searchCntrList", dsParam:this.dsCondition});
         	
        	//확정일자, 계약일자	
        	this.divViewCompCond00.divCntrReqDt.fnSetDate(this.dsCondition, "REQ_DT_STR", "REQ_DT_END");
        	this.dsCondition.setColumn(0, "CD_CNTR_STTS", "");
        	this.dsCondition.setColumn(0, "PTNR_ID", application.gdsUserInfo.getColumn(0, "PTNR_ID"));
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
        this.fnSearch = function(svcId)
        {
        	if(!this.fnPreSearch()) return false;
        				
        	var sSvcID = "search";
        	var sController = "epro.cntr.service.SCntrService.searchCntrList";
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
          * @함수명	: fnGridListOnCelldblclick
          * @desc     	: 그리드 리스트 셀 더블클릭이벤트
          */
        this.fnGridListOnCelldblclick = function(obj,e)
        {
        	if(gfnIsNull(this.dsList.getColumn(e.row, gfnGrdBindColId(obj, e.cell)))) return false;
        	
        	//계약번호
        	if("CNTR_NO" == gfnGrdBindColId(obj, obj.getCellPos())) { 
        		gfnSetTmprData("BRANCH_CD", this.dsList.getColumn(e.row,"BRANCH_CD"));
        		gfnSetTmprData("CNTR_NO", this.dsList.getColumn(e.row,"CNTR_NO"));
        		//gfnOpenMenuUrl("CTRB::PCTRB100N00.xfdl");
        		gfnOpenMenuUrl("SCNTR::SCntrDetail");
        	} 
        	//제목
        	else if("TTL" == gfnGrdBindColId(obj, obj.getCellPos())) { 
        		gfnSetTmprData("BRANCH_CD", this.dsList.getColumn(e.row,"BRANCH_CD"));
        		gfnSetTmprData("CNTR_NO", this.dsList.getColumn(e.row,"CNTR_NO"));
        		//gfnOpenMenuUr("CTRB::PCTRB100N00.xfdl");
        		gfnOpenMenuUrl("SCNTR::SCntrDetail");
        	}
        	//담당자
        	else if("CNTR_REQR_NM" == gfnGrdBindColId(obj, obj.getCellPos())){ 	
        		var sArg = { agv_id : this.dsList.getColumn(this.dsList.rowposition, "CRTR_ID") };
        		gfnModalPop(this, "CtnrUserInfo", "CPOP::BUserInfoPopup.xfdl", sArg, "fnPopCallBack", 550, 230);
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.FormOninit, this);
            this.addEventHandler("onload", this.FormOnload, this);
            this.divViewCompBody00.grdList.addEventHandler("oncelldblclick", this.fnGridListOnCelldblclick, this);
            this.divViewCompCond00.staCdCntrStts.addEventHandler("onclick", this.div_condition_sta_geayakGyelFgCdDist_onclick, this);
            this.divViewCompCond00.edtCntrNo.addEventHandler("onkeydown", this.fnKeydown, this);
            this.divViewCompCond00.edtCntrTtl.addEventHandler("onkeydown", this.fnKeydown, this);

        };

        this.loadIncludeScript("SCntrList.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
