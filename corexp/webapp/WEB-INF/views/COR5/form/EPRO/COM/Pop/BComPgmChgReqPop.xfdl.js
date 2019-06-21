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
                this.set_enableevent("true");
                this.set_name("BComPgmChgReqPop");
                this.set_titletext("화면변경요청팝업");
                this._setFormPosition(0,0,900,900);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPgmChg", this);
            obj._setContents("<ColumnInfo><Column id=\"PGM_ID\" size=\"40\" type=\"STRING\"/><Column id=\"CD_CHG_REQ\" size=\"20\" type=\"STRING\"/><Column id=\"REQR_NM\" size=\"40\" type=\"STRING\"/><Column id=\"PRCSR_NM\" size=\"40\" type=\"STRING\"/><Column id=\"REQ_CNTNT\" size=\"2000\" type=\"STRING\"/><Column id=\"REQ_TTL\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_CHGR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPgmChgList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM31", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM33", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDetailCondition", this);
            obj._setContents("<ColumnInfo><Column id=\"SN\" size=\"256\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTemp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompTitle00", "absolute", "10", "10", null, "24", "10", null, this);
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            obj.set_taborder("31");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "0", "194", "24", null, null, this.divViewCompTitle00);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("0");
            obj.set_text("변경요청");
            this.divViewCompTitle00.addChild(obj.name, obj);
            obj = new Button("btnReqAdd", "absolute", null, "0", "64", "20", "0", null, this.divViewCompTitle00);
            obj.set_cssclass("btn_WF_Module");
            obj.set_positionstep("1");
            obj.set_taborder("1");
            obj.set_text("요청하기");
            this.divViewCompTitle00.addChild(obj.name, obj);
            obj = new Button("btnNewReqAdd", "absolute", null, "0", "88", "20", "68", null, this.divViewCompTitle00);
            obj.set_cssclass("btn_WF_Module");
            obj.set_positionstep("1");
            obj.set_taborder("2");
            obj.set_text("신규작성하기");
            this.divViewCompTitle00.addChild(obj.name, obj);

            obj = new Div("divViewCompBody00", "absolute", "10", "34", null, "424", "10", null, this);
            obj.set_cssclass("div_WF_DetailBg");
            obj.getSetter("objNm").set("DIV-평가서 상세");
            obj.set_taborder("32");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "33", null, "33", "0", null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("39");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "1", null, "33", "0", null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("21");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "65", null, "350", "0", null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("22");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staReqTtl", "absolute", "0", "1", "90", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label_P");
            obj.set_positionstep("1");
            obj.set_taborder("25");
            obj.set_text("요청명");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Combo("cboCdChgReq", "absolute", "503", "5", "160", "24", null, null, this.divViewCompBody00);
            this.divViewCompBody00.addChild(obj.name, obj);
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_innerdataset("@dsCdCM31");
            obj.set_positionstep("1");
            obj.set_taborder("32");
            obj.set_index("-1");
            obj = new Static("staPrcsrNm", "absolute", "408", "33", "90", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label_P");
            obj.set_positionstep("1");
            obj.set_taborder("35");
            obj.set_text("처리자");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Combo("cboPrcsrNm", "absolute", "503", "37", "128", "24", null, null, this.divViewCompBody00);
            this.divViewCompBody00.addChild(obj.name, obj);
            var cboPrcsrNm_innerdataset = new Dataset("cboPrcsrNm_innerdataset", this.divViewCompBody00.cboPrcsrNm);
            cboPrcsrNm_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\"> --선택--</Col></Row><Row><Col id=\"codecolumn\">김승일</Col><Col id=\"datacolumn\">김승일</Col></Row><Row><Col id=\"codecolumn\">김동호</Col><Col id=\"datacolumn\">김동호</Col></Row><Row><Col id=\"codecolumn\">안성민</Col><Col id=\"datacolumn\">안성민</Col></Row><Row><Col id=\"codecolumn\">송태봉</Col><Col id=\"datacolumn\">송태봉</Col></Row><Row><Col id=\"codecolumn\">한의봉</Col><Col id=\"datacolumn\">한의봉</Col></Row><Row><Col id=\"codecolumn\">한민희</Col><Col id=\"datacolumn\">한민희</Col></Row><Row><Col id=\"codecolumn\">정준화</Col><Col id=\"datacolumn\">정준화</Col></Row></Rows>");
            obj.set_innerdataset(cboPrcsrNm_innerdataset);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_positionstep("1");
            obj.set_taborder("36");
            obj = new Static("staReqrNm", "absolute", "0", "33", "90", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label_P");
            obj.set_positionstep("1");
            obj.set_taborder("37");
            obj.set_text("요청자");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Combo("cboReqrNm", "absolute", "95", "37", "128", "24", null, null, this.divViewCompBody00);
            this.divViewCompBody00.addChild(obj.name, obj);
            var cboReqrNm_innerdataset = new Dataset("cboReqrNm_innerdataset", this.divViewCompBody00.cboReqrNm);
            cboReqrNm_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\"> --선택--</Col></Row><Row><Col id=\"codecolumn\">배열</Col><Col id=\"datacolumn\">배열</Col></Row><Row><Col id=\"codecolumn\">박민재</Col><Col id=\"datacolumn\">박민재</Col></Row><Row><Col id=\"codecolumn\">김민성</Col><Col id=\"datacolumn\">김민성</Col></Row></Rows>");
            obj.set_innerdataset(cboReqrNm_innerdataset);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_positionstep("1");
            obj.set_taborder("38");
            obj = new Static("staReqCntnt", "absolute", "0", "65", "90", "350", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label_P");
            obj.set_positionstep("1");
            obj.set_taborder("40");
            obj.set_text("요청내용");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new WebBrowser("wbContent", "absolute", "95", "71", null, "339", "4", null, this.divViewCompBody00);
            obj.getSetter("objNm").set("요청내용");
            obj.set_taborder("41");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staCdChgReq", "absolute", "408", "1", "90", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label_P");
            obj.set_positionstep("1");
            obj.set_taborder("42");
            obj.set_text("변경구분");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtReqTtl", "absolute", "95", "5", "304", "24", null, null, this.divViewCompBody00);
            obj.getSetter("objNm").set("요청명");
            obj.set_taborder("43");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Div("divViewCompTitle01", "absolute", "10", "474", null, "24", "20", null, this);
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            obj.set_taborder("33");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle01", "absolute", "0", "0", "194", "24", null, null, this.divViewCompTitle01);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("0");
            obj.set_text("변경요청내역");
            this.divViewCompTitle01.addChild(obj.name, obj);
            obj = new Button("btnCxl", "absolute", null, "0", "60", "20", "0", null, this.divViewCompTitle01);
            obj.set_cssclass("btn_WF_Module");
            obj.set_positionstep("1");
            obj.set_taborder("1");
            obj.set_text("취소");
            this.divViewCompTitle01.addChild(obj.name, obj);
            obj = new Button("btnClo", "absolute", null, "0", "80", "20", "62", null, this.divViewCompTitle01);
            obj.set_cssclass("btn_WF_Module");
            obj.set_positionstep("1");
            obj.set_taborder("2");
            obj.set_text("확인완료");
            this.divViewCompTitle01.addChild(obj.name, obj);
            obj = new Radio("rdListFilter", "absolute", "204", "0", "247", "24", null, null, this.divViewCompTitle01);
            this.divViewCompTitle01.addChild(obj.name, obj);
            var rdListFilter_innerdataset = new Dataset("rdListFilter_innerdataset", this.divViewCompTitle01.rdListFilter);
            rdListFilter_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">R</Col><Col id=\"datacolumn\">요청중</Col></Row><Row><Col id=\"codecolumn\">C</Col><Col id=\"datacolumn\">완료</Col></Row></Rows>");
            obj.set_innerdataset(rdListFilter_innerdataset);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_taborder("3");
            obj.set_value("A");
            obj.set_index("0");

            obj = new Div("divViewCompBody", "absolute", "10", "498", null, null, "20", "0", this);
            obj.set_taborder("34");
            this.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "10", this.divViewCompBody);
            obj.set_scrollbars("none");
            obj.set_taborder("11");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.divViewCompBody.addChild(obj.name, obj);
            obj = new Grid("grdPgmChgList", "absolute", "0", "0", null, null, "0", "38", this.divViewCompBody);
            obj.set_binddataset("dsPgmChgList");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj.set_taborder("12");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"33\"/><Column size=\"74\"/><Column size=\"80\"/><Column size=\"250\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"250\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" expr=\"\" text=\"변경구분\"/><Cell col=\"2\" expr=\"\" text=\"처리상태\"/><Cell col=\"3\" expr=\"\" text=\"요청명\"/><Cell col=\"4\" expr=\"\" text=\"요청자\"/><Cell col=\"5\" expr=\"\" text=\"요청일자\"/><Cell col=\"6\" expr=\"\" text=\"처리자\"/><Cell col=\"7\" expr=\"\" text=\"처리일자\"/><Cell col=\"8\" expr=\"\" text=\"처리내용\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\"/><Cell col=\"1\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" combodataset=\"dsCdCM31\" displaytype=\"combo\" edittype=\"none\" text=\"bind:CD_CHG_REQ\"/><Cell col=\"2\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" combodataset=\"dsCdCM33\" displaytype=\"combo\" edittype=\"none\" text=\"bind:CD_PRCS_STTS\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" style=\"align:left;\" text=\"bind:REQ_TTL\" tooltiptext=\"bind:REQ_CNTNT\"/><Cell col=\"4\" text=\"bind:REQR_NM\"/><Cell calendardisplaynulltype=\"none\" col=\"5\" displaytype=\"date\" mask=\"yyyy-MM-dd\" text=\"bind:REQ_DAY\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" text=\"bind:PRCSR_NM\"/><Cell calendardisplaynulltype=\"none\" col=\"7\" displaytype=\"date\" mask=\"yyyy-MM-dd\" text=\"bind:PRCS_DAY\"/><Cell col=\"8\" style=\"align:left;\" text=\"bind:PRCS_CNTNT\" tooltiptext=\"bind:PRCS_CNTNT\"/></Band></Format></Formats>");
            this.divViewCompBody.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompTitle00,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 타이틀");
            		p.set_taborder("31");

            	}
            );
            this.divViewCompTitle00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 424, this.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.set_cssclass("div_WF_DetailBg");
            		p.getSetter("objNm").set("DIV-평가서 상세");
            		p.set_taborder("32");

            	}
            );
            this.divViewCompBody00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompTitle01,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 타이틀");
            		p.set_taborder("33");

            	}
            );
            this.divViewCompTitle01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.divViewCompBody,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("34");

            	}
            );
            this.divViewCompBody.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 900, 900, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("FrmPopObjMgt");
            		p.set_enableevent("true");
            		p.set_titletext("화면변경요청팝업");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","divViewCompBody00.cboCdChgReq","value","dsPgmChg","CD_CHG_REQ");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","divViewCompBody00.cboPrcsrNm","value","dsPgmChg","PRCSR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","divViewCompTitle01.rdListFilter","value","ds_condition","RD_MODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","divViewCompBody00.cboReqrNm","value","dsPgmChg","REQR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","divViewCompBody00.edtReqTtl","value","dsPgmChg","REQ_TTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staReqrNmLangBind2017110317184252288","divViewCompBody00.staReqrNm","text","gdsLabel","EPRO_LABEL_00164");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnReqAddLangBind20171103171842295","divViewCompTitle00.btnReqAdd","text","gdsLabel","EPRO_LABEL_00485");
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
        this.registerScript("BComPgmChgReqPop.xfdl", function(exports) {
        /**
         * @파일명       	: BComPgmChgReqPop.xfdl
         * @생성자       	: 한민희
         * @생성일자     	: 2017.10.10.
         * @설명			: 화면변경요청팝업
         * @최종수정자		: 한민희
         * @최종수정일자	: 2017. 10. 10.
        */

        this.popTitle = "화면변경요청";

        this.fvPgmId;

        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {	
        	var param = [
        					  {code:"CM31", sSelectType:"S"} 	// 변경구분
        					 ,{code:"CM33", sSelectType:"S"}	// 처리상태
        				];

        	gfnGetCode(this, param);
        }

        /**
          * @함수명	: fnOninit()
          * @desc     	: 폼 oninit이벤트
          */
        this.fnOninit = function(obj,e)
        {
        	this.fnSetCode();
        }

        /**
          * @함수명	: fnOnLoad()
          * @desc     	: 폼 onload이벤트
          */
        this.fnOnLoad = function(obj,e)
        {
        	this.divViewCompBody00.wbContent.set_url(application.gvDomain + "/daumeditor/editor.jsp");	
        	
        	//그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기
        	gfnSetGrdFunc(this.divViewCompBody.grdPgmChgList, this.divViewCompBody.divPaging, this);
        	
        	var ownFrame = this.getOwnerFrame();
        	this.fvPgmId = ownFrame.agvKey;
        	
        	this.dsPgmChg.addRow();
        	this.dsPgmChg.setColumn(0,"PGM_ID", this.fvPgmId);
        	
        	this.dsPgmChg.setColumn(0,"CD_CHG_REQ", "");
        	this.dsPgmChg.setColumn(0,"REQR_NM", "");
        	this.dsPgmChg.setColumn(0,"PRCSR_NM", "");
        	
        	this.fnSearch();
        }

        /**
        	@함수명	fnSearch
        	@desc   	조회 프로세스
        */
        this.fnSearch = function()
        {
        	var sSvcID = "listPgmChgReq";
        	var sController = "epro.sys.service.BSysService.listPgmChgReq";
        	var sInDatasets = "dsPgmChg=dsPgmChg";
        	var sOutDatasets = "dsPgmChgList=dsPgmChgList";
        	var sCallbackFunc = "fnTrCallBack";

            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc); 
        }

        /**
          * @함수명	: fnInputFormInit()
          * @desc     	: 신규작성하기 - 입력창 초기화
          */
        this.fnInputFormInit = function()
        {
        	if(!gfnConfirm("편집중인 데이터는 저장되지 않습니다.\n신규작성 하시겠습니까?")) return false;
        	
        	this.dsPgmChg.deleteAll();
        	this.divViewCompBody00.wbContent.callMethod("setEditor", "");
        	
        	var nRow = this.dsPgmChg.addRow();
        	this.dsPgmChg.setColumn(nRow, "REQ_TTL", "");
        	this.dsPgmChg.setColumn(nRow, "CD_CHG_REQ", "");
        	this.dsPgmChg.setColumn(nRow, "REQR_NM", "");
        	this.dsPgmChg.setColumn(nRow, "PRCSR_NM", "");
        	this.dsPgmChg.setColumn(nRow, "REQ_CNTNT", "");
        	this.dsPgmChg.setColumn(nRow, "PGM_ID", this.fvPgmId);
        }

        /**
          * @함수명	: fnRdListFilterOnitemchanged()
          * @desc     	: 변경요청내역 라디오버튼 선택
          */
        this.fnRdListFilterOnitemchanged = function(obj,e)
        {
        	if("A" == e.postvalue){
        		this.dsPgmChgList.filter("");
        	}else{
        		this.dsPgmChgList.filter("LIST_FILTER=='"+e.postvalue+"'");
        	}
        }

        /**
          * @함수명	: fnReqAddOnclick()
          * @desc     	: 요청추가버튼
          */
        this.fnReqAddOnclick = function(obj,e)
        {
        // 	if(this.dsPgmChgList.getColumn(this.dsPgmChgList.rowposition, "CD_PRCS_STTS") != 'CM33REQ'){
        // 		gfnAlert("개발자가 진행중인 요청건입니다.");
        // 		return false;
        // 	}
        	
        	if(gfnIsNull(this.dsPgmChg.getColumn(0,"REQ_TTL"))){
        		gfnAlert("요청명은 필수입니다.");
        		return false;
        	}
        	if(gfnIsNull(this.dsPgmChg.getColumn(0,"CD_CHG_REQ"))){
        		gfnAlert("변경구분은 필수입니다.");
        		return false;
        	}
        	if(gfnIsNull(this.dsPgmChg.getColumn(0,"REQR_NM"))){
        		gfnAlert("요청자는 필수입니다.");
        		return false;
        	}
        	if(gfnIsNull(this.dsPgmChg.getColumn(0,"PRCSR_NM"))){
        		gfnAlert("처리자는 필수입니다.");
        		return false;
        	}
        	
        	this.divViewCompBody00.wbContent.callMethod("saveContent");	
        }

        /**
          * @함수명	: fnOnusernotify()
          * @desc     	: 웹브라우저 Onusernotify 이벤트
          */
        this.fnOnusernotify = function(obj,e)
        {
        	//런타임
        	if(obj.getProperty("document").getProperty("title").indexOf("▩") == 0){
        		//read
        		if (gfnReplace(obj.getProperty("document").getProperty("title"),"▩","") == "true"){
        			this.divViewCompBody00.wbContent.callMethod("setEditor", this.dsPgmChg.getColumn(0,"REQ_CNTNT"));
        		//save
        		} else {
        			this.dsPgmChg.setColumn(0,"REQ_CNTNT",gfnReplace(obj.getProperty("document").getProperty("title"),"▩",""));
        			this.fnSaveData();
        		}
        	//웹
        	} else if (e.userdata.indexOf("▦") == 0){
        		//read
        		if (gfnReplace(e.userdata,"▦","") == "true"){			
        			this.divViewCompBody00.wbContent.callMethod("setEditor", this.dsPgmChg.getColumn(0,"REQ_CNTNT"));
        		//save
        		} else {
        			this.dsPgmChg.setColumn(0,"REQ_CNTNT",gfnReplace(e.userdata,"▦",""));
        			this.fnSaveData();
        		}
        	}
        }

        /**
        	@함수명	fnSaveData()
        	@desc   	저장 프로세스
        */
        this.fnSaveData = function()
        {
        	if(gfnIsNull(this.dsPgmChg.getColumn(0,"REQ_CNTNT")) || this.dsPgmChg.getColumn(0,"REQ_CNTNT")=="<P>&nbsp;</P>"){
        		gfnAlert("요청내용은 필수입니다.");
        		return false;
        	}
        		
        	if(!gfnConfirm("요청 하시겠습니까?")) return false;
        	
        	var sSvcID = "savePgmChgReq";
        	var sController = "epro.sys.service.BSysService.savePgmChgReq";
        	var sInDatasets = "dsPgmChg=dsPgmChg:A";
        	var sOutDatasets = "";
        	var sCallbackFunc = "fnTrCallBack";
        				
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
          * @함수명	: fnCloOnclick()
          * @desc     	: 확인완료버튼
          */
        this.fnCloOnclick = function(obj,e)
        {
        	var chkData = gfnGetChkRowString(this.dsPgmChgList);	
        	if(chkData){
        		this.dsTemp.loadXML(chkData);
        		
        		if(this.dsTemp.findRowExpr("CD_PRCS_STTS != 'CM33END'") >= 0){
        			gfnAlert("처리완료된 것만 확인완료할 수 있습니다.");
        			return;
        		}
        		
        		if(!gfnConfirm("확인완료 하시겠습니까?")) return false;
        		this.fnSave("CLO");
        	}
        }

        /**
          * @함수명	: fnCxlOnclick()
          * @desc     	: 취소버튼
          */
        this.fnCxlOnclick = function(obj,e)
        {
        	var chkData = gfnGetChkRowString(this.dsPgmChgList);	
        	if(chkData){
        		this.dsTemp.loadXML(chkData);
        		
        		if(this.dsTemp.findRowExpr("CD_PRCS_STTS == 'CM33CXL' || CD_PRCS_STTS == 'CM33CLO'") >= 0){
        			gfnAlert("취소/확인완료 건은 취소할 수 없습니다.");
        			return;
        		}
        		
        		if(!gfnConfirm("취소 하시겠습니까?")) return false;
        		this.fnSave("CXL");
        	}
        }

        /**
        	@function	fnSave()
        	@desc   	확인완료 / 취소 버튼
        */ 
        this.fnSave = function(saveType)
        {	
        	if(!saveType) return;
        	
        	var sSvcID = "savePgmChgReqDetail";
        	var sController = "epro.sys.service.BSysService.savePgmChgReqDetail";
        	var sInDatasets = "dsTemp=dsTemp";
        	var sArgument = "SAVE_TYPE="+saveType;
        	var sOutDatasets = "";
        	var sCallbackFunc = "fnTrCallBack";
        	
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc, null, sArgument);
        }

        /**
        	@function	fnTrCallBack()
        	@desc   	Transaction Callback함수
        */
        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg){
        	
        	switch(strSvcID){		
        		case "listPgmChgReq" :
        		break;	
        		
        		case "readPgmChgReqDetail" :
        			this.divViewCompBody00.wbContent.callMethod("setEditor", this.dsPgmChg.getColumn(0,"REQ_CNTNT"));
        		break;	
        		
        		case "savePgmChgReq" : 
        			this.fnSearch();
        			gfnAlert(strErrMsg);
        		break;
        		
        		case "savePgmChgReqDetail" : 
        			this.fnSearch();
        			gfnAlert(strErrMsg);
        		break;
        		
        		default:
        			break;	
        	}
        }

        /**
          * @함수명	: fnDsPgmChgListOnrowposchanged
          * @input    	: obj:Dataset(데이터셋 오브젝트), e:nexacro.DSRowPosChangeEventInfo(이벤트변수)
          * @desc     	: 데이터셋 Onrowposchanged 이벤트
          */
        this.fnDsPgmChgListOnrowposchanged = function(obj,e)
        {
        	this.dsDetailCondition.deleteAll();
        	var nRow = this.dsDetailCondition.addRow();
        	if(nRow > -1){
        		this.dsDetailCondition.copyRow(nRow, this.dsPgmChgList, this.dsPgmChgList.rowposition);
         		this.fnDetailSearch();
        	}
        }

        /**
          * @함수명	: fnDetailSearch
          * @desc     	: 상세정보 조회 프로세스
          */
        this.fnDetailSearch = function()
        {
        	var sSvcID = "readPgmChgReqDetail";
        	var sController = "epro.sys.service.BSysService.readPgmChgReqDetail";
        	var sInDatasets = "dsDetailCondition=dsDetailCondition"
        	var sOutDatasets = "dsPgmChg=dsDetail";
        	var sCallbackFunc = "fnTrCallBack";				
        	
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);    
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPgmChgList.addEventHandler("onrowposchanged", this.fnDsPgmChgListOnrowposchanged, this);
            this.addEventHandler("oninit", this.fnOninit, this);
            this.addEventHandler("onload", this.fnOnLoad, this);
            this.divViewCompTitle00.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompTitle00.btnReqAdd.addEventHandler("onclick", this.fnReqAddOnclick, this);
            this.divViewCompTitle00.btnNewReqAdd.addEventHandler("onclick", this.fnInputFormInit, this);
            this.divViewCompBody00.wbContent.addEventHandler("onusernotify", this.fnOnusernotify, this);
            this.divViewCompBody00.edtReqTtl.addEventHandler("onkeyup", this.fnEnterOnkeyup, this);
            this.divViewCompTitle01.staViewCompTitle01.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompTitle01.btnCxl.addEventHandler("onclick", this.fnCxlOnclick, this);
            this.divViewCompTitle01.btnClo.addEventHandler("onclick", this.fnCloOnclick, this);
            this.divViewCompTitle01.rdListFilter.addEventHandler("onitemchanged", this.fnRdListFilterOnitemchanged, this);

        };

        this.loadIncludeScript("BComPgmChgReqPop.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
