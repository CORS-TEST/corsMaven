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
                this.set_name("SDlvListddfsd");
                this.set_titletext("납품서작성");
                this._setFormPosition(0,0,1220,711);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReturn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsIngChk", this);
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM10", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdPO11", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCondition", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PO_NO_ARR\" size=\"20\" type=\"string\"/><Column id=\"BRANCH_CD\" size=\"40\" type=\"string\"/><Column id=\"CD_DOC_CTGR\" size=\"40\" type=\"string\"/><Column id=\"CD_DLV_MTHD\" size=\"40\" type=\"string\"/><Column id=\"PO_DAY_STR\" type=\"STRING\" size=\"256\"/><Column id=\"PO_DAY_END\" type=\"STRING\" size=\"256\"/><Column id=\"PO_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_REQ_DAY_STR\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_REQ_DAY_END\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_REQ_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"TTL\" size=\"600\" type=\"string\"/><Column id=\"ALT_IPGO_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PO_STTS\" size=\"40\" type=\"string\"/><Column id=\"SORT_ITEM1\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ITEM2\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ITEM3\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ITEM4\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE1\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE2\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE3\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE4\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompTitle00", "absolute", "0", "0", "1205", "36", null, null, this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);
            obj = new Static("staPoNo", "absolute", "0", "5", "116", "24", null, null, this.divViewCompTitle00);
            obj.set_taborder("0");
            obj.set_text("발주번호");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompTitle00.addChild(obj.name, obj);
            obj = new Edit("edtPoNo", "absolute", "115", "5", "200", "24", null, null, this.divViewCompTitle00);
            obj.set_taborder("1");
            this.divViewCompTitle00.addChild(obj.name, obj);
            obj = new Static("staPoDay", "absolute", "322", "5", "116", "24", null, null, this.divViewCompTitle00);
            obj.set_taborder("2");
            obj.set_text("발주일자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompTitle00.addChild(obj.name, obj);
            obj = new Static("staDocCtrg", "absolute", "658", "5", "116", "24", null, null, this.divViewCompTitle00);
            obj.set_taborder("3");
            obj.set_text("구매유형");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompTitle00.addChild(obj.name, obj);
            obj = new Combo("cboDocCtgr", "absolute", "773", "5", "150", "24", null, null, this.divViewCompTitle00);
            this.divViewCompTitle00.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_codecolumn("CD_ID");
            obj.set_innerdataset("@dsCdCM10");
            obj = new Div("divPoDay", "absolute", "436", "5", "221", "24", null, null, this.divViewCompTitle00);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.divViewCompTitle00.addChild(obj.name, obj);

            obj = new Div("divViewCompTitle01", "absolute", "0", "36", "1205", "55", null, null, this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);
            obj = new Static("staTtl", "absolute", "0", "5", "116", "24", null, null, this.divViewCompTitle01);
            obj.set_taborder("0");
            obj.set_text("발주명");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompTitle01.addChild(obj.name, obj);
            obj = new Edit("edtTtl", "absolute", "115", "5", "200", "24", null, null, this.divViewCompTitle01);
            obj.set_taborder("1");
            this.divViewCompTitle01.addChild(obj.name, obj);
            obj = new Static("staWarning", "absolute", "-1", "34", null, "19", "1", null, this.divViewCompTitle01);
            obj.set_taborder("2");
            obj.set_text("- 검색조건 없이 검색 시 속도가 저하 될 수 있습니다.");
            obj.set_cssclass("sta_WF_SearchText");
            this.divViewCompTitle01.addChild(obj.name, obj);
            obj = new Static("staPoDay", "absolute", "321", "5", "116", "24", null, null, this.divViewCompTitle01);
            obj.set_taborder("3");
            obj.set_text("납품요청일자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.divViewCompTitle01.addChild(obj.name, obj);
            obj = new Div("div_dlvReqDay", "absolute", "436", "5", "220", "24", null, null, this.divViewCompTitle01);
            obj.set_taborder("4");
            obj.set_text("Div01");
            obj.getSetter("objNm").set("납품요청일자");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.divViewCompTitle01.addChild(obj.name, obj);

            obj = new Div("divViewCompBody00", "absolute", "0", "105", null, null, "15", "0", this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "39", "1205", "530", null, null, this.divViewCompBody00);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.getSetter("objNm").set("검색결과 그리드");
            obj.getSetter("f_filter").set("Y");
            obj.getSetter("f_excel").set("Y");
            obj.getSetter("f_hide").set("Y");
            obj.getSetter("f_find").set("Y");
            obj.getSetter("f_sort").set("Y");
            obj.getSetter("f_fix").set("Y");
            obj.getSetter("f_height").set("Y");
            obj.getSetter("f_save").set("Y");
            obj.getSetter("f_mode").set("Y");
            obj.getSetter("f_init").set("Y");
            obj.getSetter("f_colSize").set("Y");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"485\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"110\"/><Column size=\"60\"/><Column size=\"90\"/><Column size=\"81\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"운영단위\"/><Cell col=\"2\" text=\"발주번호\" combodisplaynulltext=\"CD_CNTR_STTS\"/><Cell col=\"3\" text=\"발주명\"/><Cell col=\"4\" text=\"구매유형\"/><Cell col=\"5\" text=\"품목수\"/><Cell col=\"6\" text=\"총금액\"/><Cell col=\"7\" text=\"통화\"/><Cell col=\"8\" text=\"발주일자\"/><Cell col=\"9\" text=\"담당자\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"controlbackground: ;\" text=\"bind:CHECKED\"/><Cell col=\"1\" text=\"bind:BRANCH_NM\" tooltiptext=\"bind:BRANCH_NM\"/><Cell col=\"2\" edittype=\"none\" cssclass=\"cell_link\" text=\"bind:PO_NO\" maskchar=\" \" tooltiptext=\"bind:PO_NO\"/><Cell col=\"3\" style=\"align:left;\" cssclass=\"cell_link\" text=\"bind:TTL\" tooltiptext=\"bind:TTL\"/><Cell col=\"4\" text=\"bind:CD_DOC_CTGR_NM\" tooltiptext=\"bind:CD_DOC_CTGR_NM\"/><Cell col=\"5\" style=\"align:right;\" text=\"bind:ITM_CNT\" tooltiptext=\"bind:ITM_CNT\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:TOT_AMT\" mask=\"#,##0\" tooltiptext=\"bind:TOT_AMT\"/><Cell col=\"7\" style=\"align: ;\" text=\"bind:CD_PO_CRNC_NM\" tooltiptext=\"bind:CD_PO_CRNC_NM\"/><Cell col=\"8\" displaytype=\"date\" text=\"bind:PO_DAY\" mask=\"yyyy.MM.dd\" calendardisplaynulltype=\"none\" tooltiptext=\"bind:PO_DAY\"/><Cell col=\"9\" cssclass=\"cell_link\" text=\"bind:WRTR_NM\" tooltiptext=\"bind:WRTR_NM\"/></Band></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnCreateDlv", "absolute", "1114", "10", "91", "24", null, null, this.divViewCompBody00);
            obj.set_taborder("2");
            obj.set_text("납품서작성");
            obj.set_cssclass("btn_WF_Com_G");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", "541", "1205", "28", null, null, this.divViewCompBody00);
            obj.set_taborder("3");
            obj.set_scrollbars("none");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Button("btnFold", "absolute", "586", "91", "56", "17", null, null, this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_Fold_Close");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1205, 36, this.divViewCompTitle00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_cssclass("div_WF_SearchBg");

            	}
            );
            this.divViewCompTitle00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1205, 55, this.divViewCompTitle01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.set_text("Div00");
            		p.set_cssclass("div_WF_SearchBg");

            	}
            );
            this.divViewCompTitle01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("7");

            	}
            );
            this.divViewCompBody00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1220, 711, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("납품서작성");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","divViewCompTitle00.edtPoNo","value","dsCondition","PO_NO_ARR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divViewCompTitle01.edtTtl","value","dsCondition","TTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","divViewCompTitle00.divPoDay","text","dsCondition","PO_DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","divViewCompTitle01.div_dlvReqDay","text","dsCondition","DLV_REQ_DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divViewCompTitle00.cboDocCtgr","value","dsCondition","CD_DOC_CTGR");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompCalFromTo.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompCalFromTo.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
        };
        
        // User Script
        this.registerScript("SDlvList.xfdl", function(exports) {
        /**
         * @파일명       	: SDlvList.xfdl
         * @생성자       	: 이준호
         * @생성일자     	: 2019. 04. 26
         * @설명			: 납품서 작성
         * @최종수정자		: 이준호
         * @최종수정일자	: 2019. 04. 26
        */
        /**
          * @함수명	: fnFormOninit
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.InitEventInfo(이벤트변수)
          * @desc     	: 화면이 최초 열렸을때 실행되는 이벤트.
          */
        this.fnFormOninit = function(obj,e)
        {
        	this.fnSetCode();
        }

        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function(){
        	var param = [
        					 {code:"CM10", sSelectType:"A"} //구매유형
        					,{code:"PO11", sSelectType:"A"} //납품방법
        				];
        	gfnGetCode(this, param);
        }
        /**
          * @함수명	: fnFormOnload
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.LoadEventInfo(이벤트변수)
          * @desc     	: 화면이 로딩 될때마다 실행되는 이벤트 
          */
        this.fnFormOnload = function(obj,e)
        {
        	//공통함수 호출 obj 안하고있음.
        	gfnSetGrdFunc(this.divViewCompBody00.grdList, this.divViewCompBody00.divPaging, this);
        	gfnSetObj("A");
        	this.fnFold(); //아래 쓰면 안되나보네..
        	
        	this.dsCondition.addRow();
        	this.divViewCompTitle00.divPoDay.fnSetDate(this.dsCondition, "PO_DAY_STR", "PO_DAY_END");
        // 	this.ds_condition.setColumn(0,"PO_DAY_STR",this.gfn_addMonth(this.gfn_today(),-1));
        // 	this.ds_condition.setColumn(0,"PO_DAY_END",this.gfn_today());
        	
        	this.divViewCompTitle01.div_dlvReqDay.fnSetDate(this.dsCondition, "DLV_REQ_DAY_STR", "DLV_REQ_DAY_END");
        // 	this.ds_condition.setColumn(0,"DLV_REQ_DAY_STR",this.gfn_addMonth(this.gfn_today(),-1));
        // 	this.ds_condition.setColumn(0,"DLV_REQ_DAY_END",this.gfn_today());
        		
            this.dsCondition.setColumn(0, "CD_DOC_CTGR", "");
            this.dsCondition.setColumn(0, "CD_DLV_MTHD", "");

        	//정렬 기본값 셋팅
         	this.dsCondition.setColumn(0,"SORT_ITEM1","MP.PO_NO");
         	this.dsCondition.setColumn(0,"SORT_TYPE1","DESC");	
         	
         	this.dsCondition.setColumn(0,"SORT_ITEM2","");
        	this.dsCondition.setColumn(0,"SORT_TYPE2","");
         	this.dsCondition.setColumn(0,"SORT_ITEM3","");
        	this.dsCondition.setColumn(0,"SORT_TYPE3","");		
        	this.dsCondition.setColumn(0,"SORT_ITEM4","");
        	this.dsCondition.setColumn(0,"SORT_TYPE4","");
        	
            this.fnSearch();
        }

        
        /**
        	@함수명	fnFold
        	@desc   	타이틀 접기/펼치기 기능
        */

        this.fnFold = function()
        {
        	var sArg = [ 
        				 {ttl:this.btnFold, body:this.divViewCompTitle01, initFold:false}
        		   ];		   
        	gfnDivFold(this, sArg);
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
          * @desc     	: 조회 기능
          */
        this.fnSearch = function()
        {
        	
        	if(!this.fnPreSearch()) return false;
        	
        	var sSvcID = "searchDlvList";
        	var sController = "epro.dlv.service.SDlvService.searchDlvList";
        	var sInDatasets = "dsCondition=dsCondition";
        	var sOutDatasets = "dsList=dsList";
        	var sCallbackFunc = "fnTrCallBack";
        	
        	var	oPaging = [
        					{inDs:this.dsCondition, grid:this.divViewCompBody00.grdList, divPaging:this.divViewCompBody00.divPaging}
        				];
        				
           gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc, oPaging);
        }
        /**
          * @함수명	: btnCreate
          * @input  	: obj:Button, e:nexacro.ClickEventInfo
          * @desc     	: 납품서 작성 버튼
          */
        this.btnCreate = function(obj,e)
        {
        	if(this.dsList.getCaseCount("CHECKED==1")==0){
        		gfnAlert("발주서를 선택하십시오."); 
        		return false;
        	}
        	this.dsList.set_enableevent(false);
        	this.dsList.filter("CHECKED==1");
        	this.dsIngChk.copyData(this.dsList,true);
        	this.dsList.filter("");
        	this.dsList.set_enableevent(true);
        		
        	var sSvcID = "readDlvIngChk";
        	var sController = "epro.dlv.service.SDlvService.readDlvIngChk";
        	var sInDatasets = "dsIngChk=dsIngChk";
        	var sOutDatasets = "dsReturn=dsReturn";
        	var sCallbackFunc = "fnTrCallBack";
        	
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }
        /**
          * @함수명	: fnTrCallBack
          * @input  	: strSvcID, strErrCd, strErrMsg
          * @desc     	: 콜백 함수
          */
        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg)
        {	
        	if(strErrCd < 0)
        	{
        		return;
        	}
        	
        	switch(strSvcID)
        	{
        		case "searchDlvList" :
        		break;
        		
        		case "readDlvIngChk" :
        			//if(this.dsReturn.getColumn(0, "DL10SND_CNT") < 1)
        			if(this.dsReturn.getColumn(0, "DL10SND_CNT")=="0") //검수요청건이 0건일 경우 == 납품작성 하지 않은 경우
        			{
        				var sArg = {	pop_poNo 		: this.dsIngChk.getColumn(0, "PO_NO")
        							,pop_branchCd	: this.dsIngChk.getColumn(0, "BRANCH_CD")
        							,pop_strCd		: this.dsIngChk.getColumn(0, "STR_CD")
        							,pop_kid		: this.dsIngChk.getColumn(0, "COREXP_KIDS")
        							,pop_dlvNo		: this.dsIngChk.getColumn(0, "DLV_NO")
        							,agv_type		: "wri"	//납품서작성화면에서 호출.
        						};		
        				gfnModalPop(this, "createDlvPop", "SDLV::SDlvPopup.xfdl", sArg, "fnPopCallBack", 1057, 1067);
        			}
        			else
        			{
        				alert("진행중인 납품서가 존재하여 작성할 수 없습니다.");
        			}
        		break;	
        		default:
        		break;	
        	}
        }
        /**
          * @함수명	: fnPopCallBack
          * @desc     	: 사용자 팝업 콜백
          */
        this.fnPopCallBack = function(sPopupId,rtn)
        {
        	if(gfnIsNull(rtn)) return;
        		this.dsReturn.clear();
        		this.dsReturn.loadXML(rtn); //이거 필요없나..?
        	switch(sPopupId){
        		case "createDlvPop":
        					this.fnSearch();
        		break;
        		default:
        		break;	
        	}
        }

        this.grdList_oncellclick = function(obj,e)
        {
        	this.dsList.set_enableevent(false);
        	for(var i=0; i<this.dsList.getRowCount(); i++)
        	{
        		this.dsList.setColumn(i, "CHECKED", "0");
        	}
        	this.dsList.setColumn(e.row, "CHECKED", "1");
        	this.dsList.set_enableevent(true);
        }

        this.grdList_oncelldblclick = function(obj,e)
        {
        	if(this.dsList.rowcount==0) return;	
        	if(this.gfnIsNull(this.dsList.getColumn(e.row, gfnGrdBindColId(obj, obj.getCellPos())))) return false;
        	
        	if(gfnGrdBindColId(obj, obj.getCellPos())=="PO_NO")
        	{
        		gfnSetTmprData("BRANCH_CD"   , this.dsList.getColumn(e.row, "BRANCH_CD"));
        		gfnSetTmprData("PO_NO"	   , this.dsList.getColumn(e.row, "PO_NO"));
        		gfnSetTmprData("COREXP_KIDS" , this.dsList.getColumn(e.row, "COREXP_KIDS"));
        		//상단 ASIS코드는 gfnOpenMenuUrl 쓰는 코드인데
        		//팝업으로 열어야되는데 뭘로 열어야하나
        		//gfnOpenMenuUrl("SDLV::SDlvPopup");
        		//gfnModalPop(this, "popupid", "SDLV::SDlvPopup.xfdl", sArg, "fnPopCallBack", 1057, 1067);
        		//gfnModalPop("PopupPo", "BPOR::PPORB100P00.xfdl", "", "fn_popCallBack");
        	}
        	else if(this.gfn_grdBindColName(obj, e.cell)=="TTL")
        	{
        		this.gfn_setTmprData("BRANCH_CD"   , this.ds_list.getColumn(e.row, "BRANCH_CD"));
        		this.gfn_setTmprData("PO_NO"	   , this.ds_list.getColumn(e.row, "PO_NO"));
        		this.gfn_setTmprData("COREXP_KIDS" , this.ds_list.getColumn(e.row, "COREXP_KIDS"));

        		this.gfn_dialog("PopupPo", "PORS::PPORS100P00.xfdl", "", "fn_popCallBack");
        	}
        	else if(this.gfn_grdBindColName(obj, e.cell)=="WRTR_NM")	//담당자
        	{
        		var sArg = {	 branch_cd : this.ds_list.getColumn(e.row, "BRANCH_CD")
        						,  user_id : this.ds_list.getColumn(e.row, "WRTR_ID")
        					};
        		this.gfn_dialog("PopupUserInfo", "commPop::PPOPC000P07.xfdl", sArg, "fn_popCallBack");
        	}
        }

        /**
        	@function	div_condition_btn_multiSelect_onclick()
        	@desc   	멀티입력 팝업을 호출
        */
        this.div_condition_btn_multiSelect_onclick = function(obj,e)
        {
        	//멀티입력 컴포넌트 호출 //libForm에 해당 메소드가 없음.
        	gfnPopMultiInput(this.divViewCompTitle00.edtPoNo);	
        }

        /**
        	@function	onKeyUp
        	@desc   	검색조건에서 ENTER(keycode::13) BACKSPACE(keycode::8) 입력시 이벤트를 발생시킨다.
        */
        this.onKeyUp = function(obj,e)
        {
        	//Enter 입력시
        	if(e.keycode == "13")
        	{
        			this.fnSearch();
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.divViewCompTitle00.edtPoNo.addEventHandler("onkeyup", this.onKeyUp, this);
            this.divViewCompTitle01.edtTtl.addEventHandler("onkeyup", this.onKeyUp, this);
            this.divViewCompBody00.grdList.addEventHandler("oncellclick", this.grdList_oncellclick, this);
            this.divViewCompBody00.grdList.addEventHandler("oncelldblclick", this.grdList_oncelldblclick, this);
            this.divViewCompBody00.btnCreateDlv.addEventHandler("onclick", this.btnCreate, this);
            this.btnFold.addEventHandler("onclick", this.btnFold_onclick, this);

        };

        this.loadIncludeScript("SDlvList.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
