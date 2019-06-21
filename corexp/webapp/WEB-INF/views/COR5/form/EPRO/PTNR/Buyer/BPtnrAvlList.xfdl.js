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
                this.set_name("CSampleList");
                this.set_titletext("AVL등록");
                this._setFormPosition(0,0,1220,711);
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
            obj._setContents("<ColumnInfo><Column id=\"Column0\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCondition", this);
            obj._setContents("<ColumnInfo><Column id=\"PTNR_NM\" size=\"256\" type=\"STRING\"/><Column id=\"BIZ_NO\" size=\"256\" type=\"STRING\"/><Column id=\"PCHRGR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"PCHRGR_NM\" size=\"256\" type=\"STRING\"/><Column id=\"RPRSTV_NM\" size=\"256\" type=\"STRING\"/><Column id=\"SRC_GRP_01\" size=\"256\" type=\"STRING\"/><Column id=\"SRC_GRP_02\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_ITEM\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_CHG_DT\" size=\"256\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_PORG_UNIT_STTS\" size=\"256\" type=\"STRING\"/><Column id=\"CD_PTNR_CTGR\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_VENDOR_ONLY\" size=\"256\" type=\"STRING\"/><Column id=\"LANG_CD\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReturn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdSR20", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdSR12", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompCond01", "absolute", "0", "35", null, "114", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.getSetter("objNm").set("");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);
            obj = new Static("staRprstvNm", "absolute", "15", "5", "155", "24", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.set_taborder("2");
            obj.set_text("대표자명");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtRprstvNm", "absolute", "170", "5", "250", "24", null, null, this.divViewCompCond01);
            obj.getSetter("objNm").set("대표자명");
            obj.set_taborder("3");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staWarning", "absolute", "0", "93", null, "19", "0", null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_SearchText");
            obj.set_taborder("14");
            obj.set_text("- 검색조건 없이 검색 시 속도가 저하 될 수 있습니다.");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staPchrgrNm", "absolute", "47", "34", "123", "24", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.set_taborder("15");
            obj.set_text("구매담당자");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staPtnrType", "absolute", "47", "63", "123", "24", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.set_taborder("16");
            obj.set_text("업체유형");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Combo("cboPtnrType", "absolute", "170", "63", "250", "24", null, null, this.divViewCompCond01);
            this.divViewCompCond01.addChild(obj.name, obj);
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_innerdataset("@dsCdSR12");
            obj.getSetter("objNm").set("소싱그룹대분류");
            obj.set_taborder("17");
            obj = new Edit("edtPchrgrId", "absolute", "170", "34", "85", "24", null, null, this.divViewCompCond01);
            obj.getSetter("objNm").set("대표자명");
            obj.set_readonly("true");
            obj.set_taborder("18");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtPchrgrNm", "absolute", "258", "34", "137", "24", null, null, this.divViewCompCond01);
            obj.getSetter("objNm").set("대표자명");
            obj.set_taborder("19");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Button("btnSearchPchrgr", "absolute", "397", "34", "24", "24", null, null, this.divViewCompCond01);
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("우편번호 검색 버튼");
            obj.set_taborder("20");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staRprstvNm01", "absolute", "428", "40", "457", "17", null, null, this.divViewCompCond01);
            obj.style.set_background("transparent URL('img::img_WF_Question.png')");
            obj.style.set_padding("0 0 0 25");
            obj.set_taborder("22");
            obj.set_text("업체지정 담당자로 검색한다.");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staRprstvNm02", "absolute", "428", "70", "457", "17", null, null, this.divViewCompCond01);
            obj.style.set_background("transparent URL('img::img_WF_Question.png')");
            obj.style.set_padding("0 0 0 25");
            obj.set_taborder("23");
            obj.set_text("업체유형(전체 / 국내 / 해외)로 검색한다");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staRprstvNm03", "absolute", "428", "11", "457", "17", null, null, this.divViewCompCond01);
            obj.style.set_background("transparent URL('img::img_WF_Question.png')");
            obj.style.set_padding("0 0 0 25");
            obj.set_taborder("27");
            obj.set_text("업체 대표자의 이름으로 검색한다.");
            this.divViewCompCond01.addChild(obj.name, obj);

            obj = new Div("divViewCompBody00", "absolute", "0", "166", null, null, "15", "0", this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "10", null, null, "0", "37", this.divViewCompBody00);
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
            obj.set_taborder("6");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"361\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"300\"/><Column band=\"right\" size=\"84\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"Vendor\" tooltiptext=\"\"/><Cell col=\"1\" expr=\"\" text=\"사업자번호\" tooltiptext=\"\"/><Cell col=\"2\" expr=\"\" text=\"업체유형\" tooltiptext=\"\"/><Cell col=\"3\" expr=\"\" text=\"업체명\" tooltiptext=\"\"/><Cell col=\"4\" expr=\"\" text=\"구매담당자\" tooltiptext=\"\"/><Cell col=\"5\" expr=\"\" text=\"전화번호\" tooltiptext=\"\"/><Cell col=\"6\" expr=\"\" text=\"대표자명\" tooltiptext=\"\"/><Cell col=\"7\" expr=\"\" text=\"주소\" tooltiptext=\"\"/><Cell col=\"8\" expr=\"\" text=\"Mapping\" tooltiptext=\"\"/></Band><Band id=\"body\"><Cell text=\"bind:SAP_VENDOR\" tooltiptext=\"bind:SAP_VENDOR\"/><Cell col=\"1\" maskchar=\" \" text=\"bind:BIZ_NO\" tooltiptext=\"bind:BIZ_NO\"/><Cell col=\"2\" style=\"color2: ;\" text=\"bind:CD_PTNR_CTGR_NM\" tooltiptext=\"bind:CD_PTNR_CTGR_NM\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:PTNR_NM\" tooltiptext=\"bind:PTNR_NM\"/><Cell col=\"4\" style=\"color2: ;\" text=\"bind:PCHRGR_NM\" tooltiptext=\"bind:PCHRGR_NM\"/><Cell col=\"5\" text=\"bind:TEL\" tooltiptext=\"bind:TEL\"/><Cell col=\"6\" text=\"bind:RPRSTV_NM\" tooltiptext=\"bind:RPRSTV_NM\"/><Cell col=\"7\" style=\"align:left;\" text=\"bind:ADDR\" tooltiptext=\"bind:ADDR\"/><Cell col=\"8\" displaytype=\"button\" edittype=\"button\" expr=\"expr:gfnMultiLabel(&quot;EPRO_LABEL_01352&quot;)\" text=\"Mapping\" tooltiptext=\"expr:gfnMultiLabel(&quot;EPRO_LABEL_01352&quot;)\"/></Band></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "10", this.divViewCompBody00);
            obj.set_scrollbars("none");
            obj.set_taborder("11");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Button("btnFold", "absolute", "45.66%", "149", "56", "17", null, null, this);
            obj.set_cssclass("btn_Fold_Close");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Div("divViewCompCond00", "absolute", "0", "0", null, "36", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);
            obj = new Static("staBizNo", "absolute", "447", "5", "123", "24", null, null, this.divViewCompCond00);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.set_taborder("2");
            obj.set_text("사업자번호");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Edit("edtPtnrNm", "absolute", "170", "5", "250", "24", null, null, this.divViewCompCond00);
            obj.getSetter("objNm").set("협력사명");
            obj.set_taborder("1");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staPtnrNm", "absolute", "47", "5", "123", "24", null, null, this.divViewCompCond00);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.set_taborder("0");
            obj.set_text("업체명");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Edit("edtBizNo", "absolute", "570", "5", "219", "24", null, null, this.divViewCompCond00);
            obj.set_inputfilter("sign,symbol");
            obj.set_inputtype("number");
            obj.getSetter("objNm").set("사업자번호");
            obj.set_taborder("3");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new CheckBox("chkAltRfqPriceSbmt", "absolute", "872", "5", "204", "24", null, null, this.divViewCompCond00);
            obj.set_cssclass("chk_default");
            obj.set_falsevalue("N");
            obj.getSetter("objNm").set("벤더등록 대상만조회");
            obj.set_taborder("4");
            obj.set_text("대상업체조회");
            obj.set_truevalue("Y");
            obj.set_value("N");
            this.divViewCompCond00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 114, this.divViewCompCond01,
            	//-- Layout function
            	function(p) {
            		p.set_cssclass("div_WF_SearchBg");
            		p.getSetter("objNm").set("");
            		p.set_taborder("1");

            	}
            );
            this.divViewCompCond01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.set_text("Div00");

            	}
            );
            this.divViewCompBody00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 36, this.divViewCompCond00,
            	//-- Layout function
            	function(p) {
            		p.set_cssclass("div_WF_SearchBg");
            		p.set_taborder("4");

            	}
            );
            this.divViewCompCond00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1220, 711, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("frmSearchCond");
            		p.set_titletext("AVL등록");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","divViewCompCond00.edtPtnrNm","value","dsCondition","PTNR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divViewCompCond00.edtBizNo","value","dsCondition","BIZ_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divViewCompCond01.edtRprstvNm","value","dsCondition","RPRSTV_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","divViewCompCond01.edtPchrgrId","value","dsCondition","PCHRGR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","divViewCompCond01.edtPchrgrNm","value","dsCondition","PCHRGR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","divViewCompCond01.cboPtnrType","value","dsCondition","CD_PTNR_CTGR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPtnrTypeLangBind2017110317184326098","divViewCompCond01.staPtnrType","text","gdsLabel","EPRO_LABEL_00528");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPtnrNmLangBind2017110317184339428","divViewCompCond00.staPtnrNm","text","gdsLabel","EPRO_LABEL_00321");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","divViewCompCond00.chkAltRfqPriceSbmt","value","dsCondition","ALT_VENDOR_ONLY");
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
        this.registerScript("BPtnrAvlList.xfdl", function(exports) {
        /**
         * @파일명       	: BPtnrAvlList.xfdl
         * @생성자       	: 김승일
         * @생성일자     	: 2017. 11. 01.
         * @설명			: AVL 현황
         * @최종수정자		: 안성민
         * @최종수정일자	: 2017. 11 20.
        */  

        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function(){
        	var param = [
        					{code:"SR12", sSelectType:"A"} // 업체유형
        				];
        	gfnGetCode(this, param);
        }

        /**
          * @함수명	: fnFormOninit
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
        				{ttl:this.btnFold, body:this.divViewCompCond01, initFold:true}
        		   ];		   
        	gfnDivFold(this, sArg);
        }

        /**
          * @함수명	: fnFormOnload
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.LoadEventInfo(이벤트변수)
          * @desc     	: 폼 onload이벤트
          */
        this.fnFormOnload = function(obj,e)
        {	
        	var sArgEx = {
        					isTran:"Y", tranNm:"BPtnrService.searchPtnrAvl", dsParam:this.dsCondition
        				}
         	gfnSetGrdFunc(this.divViewCompBody00.grdList, this.divViewCompBody00.divPaging, this, sArgEx);
         	this.fnFold();
         	gfnSetObj("A");
         	
        	this.dsCondition.addRow();
        	this.divViewCompCond01.cboPtnrType.set_index(0);
        	this.dsCondition.setColumn(0, "BRANCH_CD", application.gdsUserInfo.getColumn(0, "BRANCH_CD"));
        	this.dsCondition.setColumn(0,"ALT_VENDOR_ONLY","Y");
         	this.fnSearch();
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

        	var sSvcID = "searchPtnrAvl";
        	var sController = "epro.ptnr.service.BPtnrService.searchPtnrAvl";
        	var sInDatasets = "dsCondition=dsCondition";
        	var sOutDatasets = "dsList=dsList";
        	var sCallbackFunc = "fnTrCallBack";
        	
        	/*
        		페이징일 때 oPaging 선언후 사용
        		inDs:검색조건 데이터셋, outDs:리스트 데이터셋, divPaging:페이징 div
        	*/
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
        		case "searchPtnrAvl" :
        			
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
        	
        	this.dsReturn.clear();
        	this.dsReturn.loadXML(rtn);
        	
        	switch(sPopupId){
        		case "BUserSrchPopup":
        			if(!gfnIsNull(this.dsReturn.getColumn(0,"USER_ID"))){
        					this.dsCondition.setColumn(0,"PCHRGR_ID",this.dsReturn.getColumn(0,"USER_ID"));
        					this.dsCondition.setColumn(0,"PCHRGR_NM",this.dsReturn.getColumn(0,"USER_NM"));
        			}
        		break;
        		
        		case "BPtnrSapReqPop":
        			this.fnSearch();
        		break;
        			
        		default:
        		break;	
        	}
        	
        }

        /**
          * @함수명	: fnEnterOnkeyup
          * @input    	: obj:Edit(에디트 오브젝트), e:nexacro.KeyEventInfo(이벤트변수)
          * @desc     	: 검색조건에서 ENTER(keycode::13) 입력시 이벤트를 발생시킨다. 
          */
        this.fnEnterOnkeyup = function(obj,e)
        {
        	if(e.keycode == "13"){
        		switch(obj.name){
        			case "edtPchrgrNm": //구매담당자
        				var sArg = { 
        							agv_id:""
        							,agv_nm:this.divViewCompCond01.edtPchrgrNm.value
        							};
        				gfnSearchComUser(this, "BUserSrchPopup", "fnPopCallBack", sArg);
        			break;
        			
        			case "edtPtnrNm" : //협력사명
        				this.fnSearch();
        			break;
        			
        			case "edtBizNo" : //사업자번호
        				this.fnSearch();
        			break;
        			
        			case "edtRprstvNm" ://대표자명
        				this.fnSearch();
        			break;
        			
        			
        			default:
        			
        			break;	
        		}
        	}
        }

        
        /**
          * @함수명   : fnUserSearch
          * @input    : 
          * @return   : 
          * @desc     :  사용자검색 팝업 이벤트
          */
        this.fnUserSearch = function(obj,e)
        {
        	var sArg = { 
        					agv_id:""
        					,agv_nm:this.dsCondition.getColumn(0,"PCHRGR_NM")
        			   };
        	//매개변수 ::>    form, sPopupId, CallBack Function Name, arg
        	gfnSearchComUser(this, "BUserSrchPopup", "fnPopCallBack", sArg);
        }

        /**
        	@function	fnOnTextChanged
        	@desc   	구매담당자 아이디 초기화
        */
        this.fnOnTextChanged = function(obj,e)
        {
        	if(obj.name == "edtPchrgrNm") this.dsCondition.setColumn(0, "PCHRGR_ID", "");
        }

        this.fnOnCellClick = function(obj,e)
        {
        	if("Mapping" == obj.getCellProperty("Body",e.cell,"text")){
        		var sArg = {
        						agv_biz : this.dsList.getColumn(e.row,"BIZ_NO")
        						,agv_ptnr : this.dsList.getColumn(e.row,"PTNR_ID")
        						,agv_gubun : this.dsList.getColumn(e.row,"CD_PTNR_CTGR")
        					};
        		gfnModalPop(this, "BPtnrSapReqPop", "BPTNR::BPtnrSapReqPop.xfdl", sArg, "fnPopCallBack", 1100, 600);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.divViewCompCond01.staRprstvNm.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.divViewCompCond01.edtRprstvNm.addEventHandler("onkeyup", this.fnEnterOnkeyup, this);
            this.divViewCompCond01.staPchrgrNm.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.divViewCompCond01.staPtnrType.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.divViewCompCond01.edtPchrgrId.addEventHandler("onkeyup", this.fnEnterOnkeyup, this);
            this.divViewCompCond01.edtPchrgrNm.addEventHandler("onkeyup", this.fnEnterOnkeyup, this);
            this.divViewCompCond01.edtPchrgrNm.addEventHandler("ontextchange", this.fnOnTextChanged, this);
            this.divViewCompCond01.btnSearchPchrgr.addEventHandler("onclick", this.fnUserSearch, this);
            this.divViewCompBody00.grdList.addEventHandler("oncellclick", this.fnOnCellClick, this);
            this.divViewCompBody00.grdList.addEventHandler("oncelldblclick", this.fnListOncelldblclick, this);
            this.divViewCompCond00.edtPtnrNm.addEventHandler("onkeyup", this.fnEnterOnkeyup, this);
            this.divViewCompCond00.staPtnrNm.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond00.edtBizNo.addEventHandler("onkeyup", this.fnEnterOnkeyup, this);
            this.divViewCompCond00.chkAltRfqPriceSbmt.addEventHandler("onchanged", this.fnChkAltRfqPriceSbmt_onchanged, this);

        };

        this.loadIncludeScript("BPtnrAvlList.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
