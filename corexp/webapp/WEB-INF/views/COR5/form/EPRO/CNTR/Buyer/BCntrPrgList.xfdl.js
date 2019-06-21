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
                this.set_name("BCntrPrgList");
                this.set_titletext("계약진행현황");
                this._setFormPosition(0,0,1220,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsReturn", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);

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
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CNTR_STTS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DOC_CTGR\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PTNR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PTNR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TTL\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_REQR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_REQR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_DT_STR\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_DT_END\" type=\"STRING\" size=\"256\"/><Column id=\"CFM_DT_STR\" type=\"STRING\" size=\"256\"/><Column id=\"CFM_DT_END\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCT10", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM10", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompCond01", "absolute", "0", "36", null, "85", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.getSetter("objNm").set("");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            obj = new Static("staWarning", "absolute", "-1", "64", null, "19", "1", null, this.divViewCompCond01);
            obj.set_taborder("49");
            obj.set_text("- 검색조건 없이 검색 시 속도가 저하 될 수 있습니다.");
            obj.set_cssclass("sta_WF_SearchText");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staCntrItem", "absolute", "399", "6", "103", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("59");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_align("right middle");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staCntrCrtDt", "absolute", "14", "6", "115", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("66");
            obj.set_text("계약작성일자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_align("right middle");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divCntrCrtDt", "absolute", "134", "6", "260", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("67");
            obj.set_text("Div01");
            obj.getSetter("objNm").set("계약기간");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staCntrDt", "absolute", "14", "35", "115", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("68");
            obj.set_text("계약일자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_align("right middle");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divCntrDt", "absolute", "134", "35", "260", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("69");
            obj.set_text("Div01");
            obj.getSetter("objNm").set("계약기간");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staCntrTtl", "absolute", "831", "5", "75", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("70");
            obj.set_text("계약명");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_align("right middle");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staCntrItem00", "absolute", "399", "35", "103", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("72");
            obj.set_text("협력사");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_align("right middle");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staCntrReqr", "absolute", "831", "34", "75", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("76");
            obj.set_text("계약담당자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_align("right middle");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divMtrl", "absolute", "507", "6", "350", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("80");
            obj.getSetter("objNm").set("divMtrl");
            obj.set_url("CCOMP::ComSrchMtrl.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divPtnr", "absolute", "507", "35", "350", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("81");
            obj.getSetter("objNm").set("divMtrl");
            obj.set_url("CCOMP::ComSrchPtnr.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divUser", "absolute", "912", "35", null, "24", "10", null, this.divViewCompCond01);
            obj.set_taborder("82");
            obj.set_text("divUser");
            obj.getSetter("objNm").set("출고요청자");
            obj.set_url("CCOMP::ComSrchUser.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divCntrTtl", "absolute", "912", "6", "220", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("83");
            obj.set_text("Div00");
            obj.getSetter("objNm").set("검색조건-요청자");
            obj.set_url("CCOMP::ComSrchInput.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);

            obj = new Div("divViewCompBody00", "absolute", "0", "144", null, null, "15", "0", this);
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"90\"/><Column size=\"280\"/><Column size=\"90\"/><Column size=\"114\"/><Column size=\"104\"/><Column size=\"104\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"82\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"계약번호\"/><Cell col=\"1\" text=\"계약상태\"/><Cell col=\"2\" text=\"계약명\"/><Cell col=\"3\" text=\"계약유형\"/><Cell col=\"4\" text=\"협력사명\"/><Cell col=\"5\" text=\"계약시작일자\"/><Cell col=\"6\" text=\"계약종료일자\"/><Cell col=\"7\" text=\"총계약금액\"/><Cell col=\"8\" text=\"작성일자\"/><Cell col=\"9\" text=\"담당자\"/><Cell col=\"10\" text=\"구매유형\" combodataset=\"ds_cdET31\" combocodecol=\"CD_NM_LO\" combodatacol=\"CD_ID\"/></Band><Band id=\"body\"><Cell style=\"color:blue;color2:blue;\" cssclass=\"cell_link\" text=\"bind:CNTR_NO\" maskchar=\" \"/><Cell col=\"1\" text=\"bind:CD_CNTR_STTS_NM\"/><Cell col=\"2\" style=\"align:left;\" cssclass=\"cell_link\" text=\"bind:TTL\"/><Cell col=\"3\" text=\"bind:CD_CNTR_CTGR_NM\"/><Cell col=\"4\" style=\"align:left;\" cssclass=\"cell_link\" text=\"bind:PTNR_NM\"/><Cell col=\"5\" text=\"bind:CNTR_BGN_DAY\" mask=\"@@@@.@@.@@\" maskchar=\" \"/><Cell col=\"6\" text=\"bind:CNTR_END_DAY\" mask=\"@@@@.@@.@@\" maskchar=\" \"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CNTR_SUM\" mask=\"#,##0\"/><Cell col=\"8\" displaytype=\"date\" edittype=\"none\" text=\"bind:CRT_DT\" mask=\"yyyy.MM.dd\" maskchar=\" \" calendardisplaynulltype=\"nulltext\"/><Cell col=\"9\" cssclass=\"cell_link\" text=\"bind:CNTR_REQR_NM\"/><Cell col=\"10\" style=\"align:center;\" text=\"bind:CD_DOC_CTGR_NM\"/></Band></Format></Formats>");
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
            obj = new Static("staCdCntrStts", "absolute", "452", "5", "103", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("2");
            obj.set_text("계약서상태");
            obj.style.set_align("right middle");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staCntrNo", "absolute", "12", "5", "170", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("4");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_align("right middle");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Combo("cboCdCntrStts", "absolute", "559", "5", "146", "24", null, null, this.divViewCompCond00);
            this.divViewCompCond00.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_innerdataset("@dsCdCT10");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj = new Static("staCdDocCtgr", "absolute", "711", "5", "103", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("7");
            obj.set_text("구매유형");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_align("right middle");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Combo("cboCdCntrCtgr", "absolute", "819", "5", "146", "24", null, null, this.divViewCompCond00);
            this.divViewCompCond00.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_innerdataset("@dsCdCM10");
            obj = new Div("divCntrNo", "absolute", "186", "5", "220", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("9");
            obj.set_text("Div00");
            obj.getSetter("objNm").set("검색조건-요청자");
            obj.set_url("CCOMP::ComSrchInput.xfdl");
            this.divViewCompCond00.addChild(obj.name, obj);

            obj = new Button("btnFold", "absolute", "45.66%", "121", "56", "17", null, null, this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_Fold_Close");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 260, 24, this.divViewCompCond01.divCntrDt,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("69");
            		p.set_url("CCOMP::CompCalFromTo.xfdl");
            		p.set_text("Div01");
            		p.getSetter("objNm").set("계약기간");

            	}
            );
            this.divViewCompCond01.divCntrDt.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 85, this.divViewCompCond01,
            	//-- Layout function
            	function(p) {
            		p.set_cssclass("div_WF_SearchBg");
            		p.getSetter("objNm").set("");
            		p.set_taborder("0");

            	}
            );
            this.divViewCompCond01.addLayout(obj.name, obj);

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
            		p.set_titletext("계약진행현황");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","divViewCompCond00.cboCdCntrStts","value","dsCondition","CD_CNTR_STTS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divViewCompCond00.cboCdCntrCtgr","value","dsCondition","CD_DOC_CTGR");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompCalFromTo.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompCalFromTo.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComSrchMtrl.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComSrchPtnr.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComSrchUser.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComSrchInput.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComSrchInput.xfdl");
        };
        
        // User Script
        this.registerScript("BCntrPrgList.xfdl", function(exports) {
        /**
         * @파일명			: BCntrPrgList
         * @생성자			: 안성민
         * @생성일시		: 2019. 02. 28.
         * @설명			: 계약진행현황
         * @최종수정자		: 안성민
         * @최종수정일시	: 2019. 04. 30.
        */  

        
        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {
        	var param = [	{code:"CT10", sSelectType:"A", sFiltered:"D:CLO"} // 계약상태
        					,{code:"CM10", sSelectType:"A"} // 계약유형
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
        this.fnFormOnload = function(obj,e)
        {	
        	gfnSetObj("A");
        	
        	//그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기(그리드 컴포넌트, 페이징div 컴포넌트, 폼오브젝트(this))
         	gfnSetGrdFunc(this.divViewCompBody00.grdList, this.divViewCompBody00.divPaging, this,{isTran:"Y", tranNm:"BCntrService.searchCntrPrgList", dsParam:this.dsCondition});
         	
         	//조회조건 Div 접기/펼치기 세팅
         	this.fnFold();

        	//작성일자, 계약일자 세팅
        	this.divViewCompCond01.divCntrCrtDt.fnSetDate(this.dsCondition, "CRT_DT_STR", "CRT_DT_END");	
        	this.divViewCompCond01.divCntrDt.fnSetDate(this.dsCondition, "CNTR_DT_STR", "CNTR_DT_END");	
        	this.dsCondition.setColumn(0, "CD_CNTR_STTS", "");
        	this.dsCondition.setColumn(0, "CD_DOC_CTGR", "");
        	
        	//로그인정보에 담겨져 있는 개인정보를 검색조건에 셋팅한다.
        	if(application.gdsUserRole.findRow("ROLE_ID","B_MANAGER") < 0 ){
        		this.dsCondition.setColumn(0,"CNTR_REQR_ID",application.gdsUserInfo.getColumn(0,"USER_ID"));
        		this.dsCondition.setColumn(0,"CNTR_REQR_NM",application.gdsUserInfo.getColumn(0,"USER_NM"));
        	}	 
        	 		 
        	//품목팝업
        	this.divViewCompCond01.divMtrl.fnSet(this.dsCondition		, "MTRL_CD", "MTRL_NM");
        	//협력사팝업
        	this.divViewCompCond01.divPtnr.fnSet(this.dsCondition		, "PTNR_ID", "PTNR_NM");
        	//계약담당자명
        	this.divViewCompCond01.divUser.fnSet(this.dsCondition		, "CNTR_REQR_ID", "CNTR_REQR_NM");
        	//계약번호
        	this.divViewCompCond00.divCntrNo.fnSet(this.dsCondition		, "CNTR_NO", "fnSearch");
        	//계약명
        	this.divViewCompCond01.divCntrTtl.fnSet(this.dsCondition		, "TTL", "fnSearch");
        	
        	
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
        	var sController = "epro.cntr.service.BCntrService.searchCntrPrgList";
        	var sInDatasets = "dsCondition=dsCondition";
        	var sOutDatasets = "dsList=dsList";
        	var sCallbackFunc = "fnTrCallBack";
        			  
         	var	oPaging = [      
                            {inDs:this.dsCondition, grid:this.divViewCompBody00.grdList, divPaging:this.divViewCompBody00.divPaging}
                        ];
             gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc, oPaging);
        }

        this.fnAdd = function() 
        {
        	gfnAlert("작성")
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
        	@function	fnOnTextChanged
        	@desc   	에디터 키이벤트
        */
        this.fnOnTextChanged = function(obj,e)
        {
        	if(obj.name == "edtCntrItemNm") { this.dsCondition.setColumn(0,"MTRL_CD",""); }
        	if(obj.name == "edtCntrPtnrNm") { this.dsCondition.setColumn(0,"PTNR_ID",""); }
        	else if(obj.name == "edtCntrReqrNm") { this.dsCondition.setColumn(0,"CNTR_REQR_ID",""); }
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
        		gfnOpenMenuUrl("BCNTR::BCntrDetail");
        	} 
        	//제목
        	else if("TTL" == gfnGrdBindColId(obj, obj.getCellPos())) { 
        		gfnSetTmprData("BRANCH_CD", this.dsList.getColumn(e.row,"BRANCH_CD"));
        		gfnSetTmprData("CNTR_NO", this.dsList.getColumn(e.row,"CNTR_NO"));
        		//gfnOpenMenuUr("CTRB::PCTRB100N00.xfdl");
        		gfnOpenMenuUrl("BCNTR::BCntrDetail");
        	}
        	//협력사명
        	else if("PTNR_NM" == gfnGrdBindColId(obj, obj.getCellPos())) {
        		var sArg = { agv_id : this.dsList.getColumn(e.row, "PTNR_ID")
        					 , agv_nm : this.dsList.getColumn(e.row, "PTNR_NM")
        					};
        		gfnModalPop(this, "CtnrPtnrInfo", "CPOP::BPtnrInfoPopup.xfdl", sArg, "fnPopCallBack", 550, 500);
        	}
        	//담당자
        	else if("CNTR_REQR_NM" == gfnGrdBindColId(obj, obj.getCellPos())){ 	
        		var sArg = { agv_id : this.dsList.getColumn(e.row, "CNTR_REQR_ID") 
        					 , agv_nm : this.dsList.getColumn(e.row, "CNTR_REQR_NM")};
        		gfnModalPop(this, "CtnrUserInfo", "CPOP::BUserInfoPopup.xfdl", sArg, "fnPopCallBack", 550, 230);
        	}
        }

        /**
          * @함수명	: fnPtnrSrchPop
          * @desc     	: 협력사검색 팝업
          */
        // this.fnAdd = function()
        // {
        // 	gfnOpenMenuUrl("BCNTR::BCntrDetail");
        // }

        this.fnKeydown = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.divViewCompCond01.staCntrItem.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.divViewCompCond01.staCntrItem00.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.divViewCompCond01.staCntrReqr.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.divViewCompBody00.grdList.addEventHandler("oncelldblclick", this.fnGridListOnCelldblclick, this);
            this.divViewCompCond00.staCdCntrStts.addEventHandler("onclick", this.div_condition_sta_geayakGyelFgCdDist_onclick, this);
            this.divViewCompCond00.staCdDocCtgr.addEventHandler("onclick", this.div_condition_sta_geayakGyelFgCdDist_onclick, this);
            this.btnFold.addEventHandler("onclick", this.btnFold_onclick, this);

        };

        this.loadIncludeScript("BCntrPrgList.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
