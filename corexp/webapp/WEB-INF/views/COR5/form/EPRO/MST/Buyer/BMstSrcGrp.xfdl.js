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
                this.set_name("BMtrlSrcGrp");
                this.set_titletext("소싱그룹상세");
                this._setFormPosition(0,0,1220,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSrcGrpLvl1", this);
            obj._setContents("<ColumnInfo><Column id=\"SRC_GRP_ID\" size=\"256\" type=\"STRING\"/><Column id=\"UP_SRC_GRP_ID\" size=\"256\" type=\"STRING\"/><Column id=\"LVL\" size=\"256\" type=\"STRING\"/><Column id=\"SRC_GRP_NM\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_USE\" size=\"256\" type=\"STRING\"/><Column id=\"O_RGI\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSrcGrpLvl2", this);
            obj._setContents("<ColumnInfo><Column id=\"SRC_GRP_ID\" size=\"256\" type=\"STRING\"/><Column id=\"UP_SRC_GRP_ID\" size=\"256\" type=\"STRING\"/><Column id=\"LVL\" size=\"256\" type=\"STRING\"/><Column id=\"SRC_GRP_NM\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_USE\" size=\"256\" type=\"STRING\"/><Column id=\"O_RGI\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSrcGrpUsr", this);
            obj._setContents("<ColumnInfo><ColumnInfo><Column id=\"CHECKED\" size=\"256\" type=\"STRING\"/><Column id=\"CRTR_ID\" size=\"50\" type=\"string\"/><Column id=\"BRANCH_CD\" size=\"4\" type=\"string\"/><Column id=\"USER_ID\" size=\"50\" type=\"string\"/><Column id=\"ALT_RPTST_YN\" size=\"1\" type=\"string\"/><Column id=\"SRC_GRP_ID\" size=\"40\" type=\"string\"/><Column id=\"CRT_DT\" size=\"7\" type=\"string\"/><Column id=\"USER_NM\" size=\"256\" type=\"STRING\"/><Column id=\"DEPT_CD\" size=\"256\" type=\"STRING\"/><Column id=\"DEPT_NM\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_CHGR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_CHG_DT\" size=\"256\" type=\"STRING\"/></ColumnInfo></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCondition", this);
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"UP_SRC_GRP_ID\" size=\"256\" type=\"STRING\"/><Column id=\"SRC_GRP_ID\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTmpUser", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReturn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCopySrcGrpLvl", this);
            obj._setContents("<ColumnInfo><Column id=\"SRC_GRP_ID\" size=\"256\" type=\"STRING\"/><Column id=\"UP_SRC_GRP_ID\" size=\"256\" type=\"STRING\"/><Column id=\"LVL\" size=\"256\" type=\"STRING\"/><Column id=\"SRC_GRP_NM\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_USE\" size=\"256\" type=\"STRING\"/><Column id=\"O_RGI\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompTitle00", "absolute", "8", "32", "425", "24", null, null, this);
            obj.getSetter("objNm").set("DIV-대상업체 타이틀");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "0", "126", "24", null, null, this.divViewCompTitle00);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("23");
            obj.set_text("대분류");
            this.divViewCompTitle00.addChild(obj.name, obj);
            obj = new Button("btnSrcGrpLvl1Add", "absolute", null, "0", "60", "20", "0", null, this.divViewCompTitle00);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("대분류 추가");
            obj.set_positionstep("1");
            obj.set_taborder("24");
            obj.set_text("추가");
            this.divViewCompTitle00.addChild(obj.name, obj);
            obj = new Button("btnSrcGrpLvl1Del", "absolute", null, "0", "60", "20", "64", null, this.divViewCompTitle00);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("대분류  삭제");
            obj.set_positionstep("1");
            obj.set_taborder("25");
            obj.set_text("삭제");
            obj.set_visible("false");
            this.divViewCompTitle00.addChild(obj.name, obj);

            obj = new Div("divViewCompBody00", "absolute", "8", "64", "445", null, null, "10", this);
            obj.getSetter("objNm").set("DIV-대상업체 세부정보");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "0", null, null, "20", "37", this.divViewCompBody00);
            obj.set_autofittype("col");
            obj.set_binddataset("dsSrcGrpLvl1");
            obj.getSetter("f_colSize").set("N");
            obj.getSetter("f_excel").set("Y");
            obj.getSetter("f_filter").set("N");
            obj.getSetter("f_find").set("N");
            obj.getSetter("f_fix").set("N");
            obj.getSetter("f_height").set("N");
            obj.getSetter("f_hide").set("N");
            obj.getSetter("f_init").set("N");
            obj.getSetter("f_mode").set("Y");
            obj.getSetter("f_save").set("N");
            obj.getSetter("f_sort").set("Y");
            obj.getSetter("objNm").set("품목 그리드");
            obj.set_taborder("6");
            obj._setContents("<Formats><Format id=\"MMODE\"><Columns><Column size=\"70\"/><Column size=\"139\"/><Column size=\"60\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"코드\"/><Cell col=\"1\" expr=\"\" text=\"코드명\"/><Cell col=\"2\" expr=\"\" text=\"사용여부\"/></Band><Band id=\"body\" style=\"cellpadding: ;\"><Cell displaytype=\"text\" edittype=\"expr:O_RGI==undefined?'text':'none'\" style=\"align: ;\" text=\"bind:SRC_GRP_ID\" tooltiptext=\"bind:SRC_GRP_ID\"/><Cell col=\"1\" displaytype=\"text\" editlengthunit=\"ascii\" editlimit=\"100\" edittype=\"text\" style=\"align:left middle;\" text=\"bind:SRC_GRP_NM\" tooltiptext=\"bind:SRC_GRP_NM\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ALT_USE\"/></Band></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "21", "10", this.divViewCompBody00);
            obj.set_scrollbars("none");
            obj.set_taborder("7");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Div("divViewCompTitle01", "absolute", "442", "32", "445", "24", null, null, this);
            obj.getSetter("objNm").set("DIV-대상업체 타이틀");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "0", "220", "24", null, null, this.divViewCompTitle01);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("28");
            obj.set_text("중분류");
            this.divViewCompTitle01.addChild(obj.name, obj);
            obj = new Button("btnSrcGrpLvl2Add", "absolute", null, "0", "60", "20", "0", null, this.divViewCompTitle01);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("중분류 추가");
            obj.set_positionstep("1");
            obj.set_taborder("29");
            obj.set_text("추가");
            this.divViewCompTitle01.addChild(obj.name, obj);
            obj = new Button("btnSrcGrpLvl2Del", "absolute", null, "0", "60", "20", "64", null, this.divViewCompTitle01);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("중분류 삭제");
            obj.set_positionstep("1");
            obj.set_taborder("30");
            obj.set_text("삭제");
            obj.set_visible("false");
            this.divViewCompTitle01.addChild(obj.name, obj);

            obj = new Div("divViewCompBody01", "absolute", "442", "64", "445", null, null, "10", this);
            obj.getSetter("objNm").set("DIV-대상업체 세부정보");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "0", null, null, "0", "37", this.divViewCompBody01);
            obj.set_autofittype("col");
            obj.set_binddataset("dsSrcGrpLvl2");
            obj.getSetter("f_colSize").set("N");
            obj.getSetter("f_excel").set("Y");
            obj.getSetter("f_filter").set("N");
            obj.getSetter("f_find").set("N");
            obj.getSetter("f_fix").set("N");
            obj.getSetter("f_height").set("N");
            obj.getSetter("f_hide").set("N");
            obj.getSetter("f_init").set("N");
            obj.getSetter("f_mode").set("Y");
            obj.getSetter("f_save").set("N");
            obj.getSetter("f_sort").set("Y");
            obj.getSetter("objNm").set("품목 그리드");
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"MMODE\"><Columns><Column size=\"64\"/><Column size=\"70\"/><Column size=\"143\"/><Column size=\"60\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"상위코드\"/><Cell col=\"1\" expr=\"\" text=\"코드\"/><Cell col=\"2\" expr=\"\" text=\"코드명\"/><Cell col=\"3\" expr=\"\" text=\"사용여부\"/></Band><Band id=\"body\" style=\"cellpadding: ;\"><Cell text=\"bind:UP_SRC_GRP_ID\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"expr:O_RGI==undefined?'text':'none'\" style=\"align: ;\" text=\"bind:SRC_GRP_ID\" tooltiptext=\"bind:SRC_GRP_ID\"/><Cell col=\"2\" displaytype=\"text\" editlengthunit=\"ascii\" editlimit=\"100\" edittype=\"text\" style=\"align:left middle;\" text=\"bind:SRC_GRP_NM\" tooltiptext=\"bind:SRC_GRP_NM\"/><Cell col=\"3\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ALT_USE\"/></Band></Format></Formats>");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "10", this.divViewCompBody01);
            obj.set_scrollbars("none");
            obj.set_taborder("1");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.divViewCompBody01.addChild(obj.name, obj);

            obj = new Div("divViewCompTitle02", "absolute", "892", "32", null, "24", "12", null, this);
            obj.getSetter("objNm").set("DIV-대상업체 타이틀");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);
            obj = new Button("btnSrcGrpUsrDel", "absolute", null, "0", "60", "20", "0", null, this.divViewCompTitle02);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("삭제");
            obj.set_positionstep("1");
            obj.set_taborder("26");
            obj.set_text(" 삭제");
            this.divViewCompTitle02.addChild(obj.name, obj);
            obj = new Button("btnSrcGrpUsrAdd", "absolute", null, "0", "60", "20", "68", null, this.divViewCompTitle02);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("협력사추가");
            obj.set_positionstep("1");
            obj.set_taborder("27");
            obj.set_text("추가");
            this.divViewCompTitle02.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "0", "170", "24", null, null, this.divViewCompTitle02);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("28");
            obj.set_text("구매담당자");
            this.divViewCompTitle02.addChild(obj.name, obj);
            obj = new Grid("grdEvalCorp", "absolute", "0", "-13", null, null, "0", "24", this.divViewCompTitle02);
            obj.set_autofittype("col");
            obj.set_binddataset("dsEvalCorp");
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
            obj.getSetter("objNm").set("품목 그리드");
            obj.set_taborder("30");
            obj._setContents("<Formats><Format id=\"MMODE\"><Columns><Column size=\"70\"/><Column size=\"200\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"코드\"/><Cell col=\"1\" cssclass=\"Cellgrd_essential\" expr=\"\" text=\"코드명\"/></Band><Band id=\"body\" style=\"cellpadding:2 2 2 2 ;\"><Cell style=\"align:right middle;\" text=\"bind:PRE_EVAL_POINT\" tooltiptext=\"bind:PRE_EVAL_POINT\"/><Cell col=\"1\" style=\"align:left middle;\" text=\"bind:PTNR_NM\" tooltiptext=\"bind:PTNR_NM\"/></Band></Format></Formats>");
            this.divViewCompTitle02.addChild(obj.name, obj);

            obj = new Div("divViewCompBody02", "absolute", "894", "64", null, null, "12", "10", this);
            obj.getSetter("objNm").set("DIV-대상업체 세부정보");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "0", null, null, "0", "37", this.divViewCompBody02);
            obj.set_autofittype("col");
            obj.set_binddataset("dsTmpUser");
            obj.getSetter("f_colSize").set("N");
            obj.getSetter("f_excel").set("Y");
            obj.getSetter("f_filter").set("N");
            obj.getSetter("f_find").set("N");
            obj.getSetter("f_fix").set("N");
            obj.getSetter("f_height").set("N");
            obj.getSetter("f_hide").set("N");
            obj.getSetter("f_init").set("N");
            obj.getSetter("f_mode").set("Y");
            obj.getSetter("f_save").set("N");
            obj.getSetter("f_sort").set("Y");
            obj.getSetter("objNm").set("품목 그리드");
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"MMODE\"><Columns><Column size=\"50\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"60\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" cssclass=\"Cellgrd_essential\" expr=\"\" text=\"구매담당자\"/><Cell col=\"2\" expr=\"\" text=\"부서명\"/><Cell col=\"3\" expr=\"\" text=\"주담당\"/></Band><Band id=\"body\" style=\"cellpadding: ;\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\"/><Cell col=\"1\" editlengthunit=\"ascii\" editlimit=\"40\" edittype=\"expr:dataset.getRowType(currow) == 2 ? 'normal' : 'none'\" expandimage=\"URL('img::grd_WF_Expand.png')\" expandshow=\"expr:dataset.getRowType(currow) == 2 ? 'show' : 'hide'\" expandsize=\"21\" style=\"align: ;\" text=\"bind:USER_NM\" tooltiptext=\"bind:USER_NM\"/><Cell col=\"2\" style=\"align:left middle;\" text=\"bind:DEPT_NM\" tooltiptext=\"bind:DEPT_NM\"/><Cell col=\"3\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ALT_RPTST_YN\" tooltiptext=\"bind:ALT_RPTST_YN\"/></Band></Format></Formats>");
            this.divViewCompBody02.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "10", this.divViewCompBody02);
            obj.set_scrollbars("none");
            obj.set_taborder("1");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.divViewCompBody02.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompTitle00,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-대상업체 타이틀");
            		p.set_taborder("0");

            	}
            );
            this.divViewCompTitle00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1042, 386, this.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-대상업체 세부정보");
            		p.set_taborder("1");

            	}
            );
            this.divViewCompBody00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompTitle01,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-대상업체 타이틀");
            		p.set_taborder("2");

            	}
            );
            this.divViewCompTitle01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1042, 386, this.divViewCompBody01,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-대상업체 세부정보");
            		p.set_taborder("3");

            	}
            );
            this.divViewCompBody01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompTitle02,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-대상업체 타이틀");
            		p.set_taborder("4");

            	}
            );
            this.divViewCompTitle02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1042, 386, this.divViewCompBody02,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-대상업체 세부정보");
            		p.set_taborder("5");

            	}
            );
            this.divViewCompBody02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1220, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("소싱그룹상세");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("btnSrcGrpUsrAddLangBind2017110317184234947","divViewCompTitle02.btnSrcGrpUsrAdd","text","gdsLabel","EPRO_LABEL_00144");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnSrcGrpLvl1AddVi","divViewCompTitle00.btnSrcGrpLvl1Add","visible","dsObjBindVi","btnSrcGrpLvl1Add");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnSrcGrpLvl1AddEn","divViewCompTitle00.btnSrcGrpLvl1Add","enable","dsObjBindEn","btnSrcGrpLvl1Add");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnSrcGrpLvl2AddVi","divViewCompTitle01.btnSrcGrpLvl2Add","visible","dsObjBindVi","btnSrcGrpLvl2Add");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnSrcGrpLvl2AddEn","divViewCompTitle01.btnSrcGrpLvl2Add","enable","dsObjBindEn","btnSrcGrpLvl2Add");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnSrcGrpLvl1DelVi","divViewCompTitle00.btnSrcGrpLvl1Del","visible","dsObjBindVi","btnSrcGrpLvl1Del");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnSrcGrpLvl1DelEn","divViewCompTitle00.btnSrcGrpLvl1Del","enable","dsObjBindEn","btnSrcGrpLvl1Del");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnSrcGrpLvl2DelVi","divViewCompTitle01.btnSrcGrpLvl2Del","visible","dsObjBindVi","btnSrcGrpLvl2Del");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnSrcGrpLvl2DelEn","divViewCompTitle01.btnSrcGrpLvl2Del","enable","dsObjBindEn","btnSrcGrpLvl2Del");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
        };
        
        // User Script
        this.registerScript("BMstSrcGrp.xfdl", function(exports) {
        /**
         * @파일명       	: BMstSrcGrp.xfdl
         * @생성자       	: 정준화
         * @생성일자     	: 2017. 9. 05.
         * @설명			: 소싱그룹별담당자 
         * @최종수정자		: 김동호
         * @최종수정일자	: 2017. 11. 02.
        */  

        var fv_delRow; //추가 여부
        var fv_addRow; //삭제 여부
        var fv_chkRow; //주담당변경 여부
        var UP_SRC_ID = "";//대분류 추가시 넣을 UP_SRC_GRP_ID
        var UP_SRC_NM = "";//중분류 추가시 넣을 UP_SRC_GRP_NM
        var filter_1 = "";
        var filter_2 = "";

        
        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {
        	var param = [ ];
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
          * @함수명	: fnFormOnload
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.LoadEventInfo(이벤트변수)
          * @desc     	: 폼 onload이벤트
          */
        this.fnFormOnload = function(obj,e)
        {
        	this.dsCondition.addRow();
        	this.dsCondition.setColumn(0,"BRANCH_CD", application.gdsUserInfo.getColumn(0, "BRANCH_CD"));
        	//그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기(그리드 컴포넌트, 페이징div 컴포넌트, 폼오브젝트(this))
         	var sArgEx_1 = {
        					isTran:"N", tranNm:"", dsParam:this.dsSrcGrpLvl1
        				}
         	gfnSetGrdFunc(this.divViewCompBody00.grdList, this.divViewCompBody00.divPaging, this, sArgEx_1);
         	var sArgEx_2 = {
        					isTran:"Y", tranNm:"BMstService.searchMstSrcGrpMdl", dsParam:this.dsCondition
        				}
         	gfnSetGrdFunc(this.divViewCompBody01.grdList, this.divViewCompBody01.divPaging, this, sArgEx_2);
         	var sArgEx_3 = {
        					isTran:"Y", tranNm:"BMstService.searchMstSrcGrpUser", dsParam:this.dsCondition
        				}
         	gfnSetGrdFunc(this.divViewCompBody02.grdList, this.divViewCompBody02.divPaging, this, sArgEx_3);

        	gfnSetObj("A");
         	this.fnSearch();
        }

        /**
          * @함수명	: fnPreSave
          * @desc     	: 저장 전 처리
          */
        this.fnPreSave = function()
        {
        	var srcGrp2Data = this.dsSrcGrpLvl1.getColumn(this.divViewCompBody00.grdList.currentrow,"SRC_GRP_ID");
        	
        	var userData = null;
        	
        	if(this.divViewCompBody01.grdList.currentrow>=0){
        		userData = this.dsSrcGrpLvl2.getColumn(this.divViewCompBody01.grdList.currentrow,"UP_SRC_GRP_ID")+""+this.dsSrcGrpLvl2.getColumn(this.divViewCompBody01.grdList.currentrow,"SRC_GRP_ID");
        	}
        	
        	var arr = [];
        	var lrg = this.dsSrcGrpLvl1.getColumn(this.dsMtrlGrpLvl1,"SRC_GRP_ID");
        	//dsSrcGrpLvl1 체크
        	for(var x = 0; x< this.dsSrcGrpLvl1.getRowCount(); x++){
        		var cd = this.dsSrcGrpLvl1.getColumn(x, "SRC_GRP_ID");
        		var nm = this.dsSrcGrpLvl1.getColumn(x, "SRC_GRP_NM");
        		// 코드입력
        		if(gfnIsNull(cd)){ 
        			var msg = gfnMultiLabel("EPRO_LABEL_01334");;
        			var type = gfnMultiLabel("EPRO_LABEL_00770");
        			var objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        			arr.push(objParam);
        		// 코드명 입력
        		}else if(gfnIsNull(nm)){ 
        			
        			var msg =  gfnMultiLabel("EPRO_LABEL_00276")+" "+this.dsSrcGrpLvl1.getColumn(x,"SRC_GRP_ID")+" "+gfnMultiLabel("EPRO_LABEL_01333")
        			var type = gfnMultiLabel("EPRO_LABEL_00770");
        			var objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        			arr.push(objParam);
        			
        		}
        	}
        	
        	this.dsSrcGrpLvl2.set_enableevent(false);
        	this.dsSrcGrpLvl2.filter("UP_SRC_GRP_ID!=''");
        	//dsSrcGrpLvl2 체크
        	for(var x = 0; x< this.dsSrcGrpLvl2.getRowCount(); x++){
        		var cd = this.dsSrcGrpLvl2.getColumn(x, "SRC_GRP_ID");
        		var nm = this.dsSrcGrpLvl2.getColumn(x, "SRC_GRP_NM");
        		
        		// 코드입력
        		if(gfnIsNull(cd)){ 
        			
        			var msg = this.dsSrcGrpLvl2.getColumn(x,"UP_SRC_GRP_ID") +" "+ gfnMultiLabel("EPRO_LABEL_00763");;
        			var type = gfnMultiLabel("EPRO_LABEL_00770");
        			var objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        			arr.push(objParam);
        		// 코드명 입력
        		}else if(gfnIsNull(nm)){ 
        			
        			var msg = gfnMultiLabel("EPRO_LABEL_00441")+" :"+this.dsSrcGrpLvl2.getColumn(x,"UP_SRC_GRP_ID")+" "+gfnMultiLabel("EPRO_LABEL_01278");;
        			var type = gfnMultiLabel("EPRO_LABEL_00764");
        			var objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        			arr.push(objParam);
        		}
        	}
        	this.dsSrcGrpLvl2.filter("");
        	this.dsSrcGrpLvl2.set_enableevent(true);
        	
        	var checkNum = 0;
        	var chkRptst = false; //주담당자 지정 체크 //false:미지정 true:지정
        	this.dsTmpUser.set_enableevent(false);
        	for(var x=0; x<this.dsSrcGrpLvl2.getRowCount(); x++) {
        		this.dsTmpUser.filter("SRC_GRP_ID=='" +this.dsSrcGrpLvl2.getColumn(x,"UP_SRC_GRP_ID")+""+this.dsSrcGrpLvl2.getColumn(x,"SRC_GRP_ID")+ "'");
        		checkNum = 0;
        		chkRptst = false; 
        		for(var y=0; y<this.dsTmpUser.getRowCount(); y++) {
        			if(this.dsTmpUser.getColumn(y, "ALT_RPTST_YN")=="Y"||this.dsTmpUser.getColumn(y, "ALT_RPTST_YN")=="1"){ 
        				checkNum++;
        				chkRptst = true;
        			};
        			
        			if(gfnIsNull(this.dsTmpUser.getColumn(y, "USER_ID"))) {
        				var msg = this.dsTmpUser.getColumn(y, "SRC_GRP_ID") + "(" + this.dsSrcGrpLvl2.getColumn(x, "SRC_GRP_NM") + ")"+ gfnMultiLabel("EPRO_LABEL_01009");
        				var type = gfnMultiLabel("EPRO_LABEL_00770");
        				var objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        				arr.push(objParam);
        			}
        		}
        		if(!chkRptst && 0 < this.dsTmpUser.getRowCount()) {
        			var msg = this.dsSrcGrpLvl2.getColumn(x, "SRC_GRP_ID") + "(" + this.dsSrcGrpLvl2.getColumn(x, "SRC_GRP_NM") + ")"+ gfnMultiLabel("EPRO_LABEL_01012");
        			var type = gfnMultiLabel("EPRO_LABEL_01010");
        			var objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        			arr.push(objParam);
        		}
        		if(checkNum > 1) {
        			var msg = this.dsSrcGrpLvl2.getColumn(x, "SRC_GRP_ID") + "(" + this.dsSrcGrpLvl2.getColumn(x, "SRC_GRP_NM") + ")"+ gfnMultiLabel("EPRO_LABEL_01012");
        			var type = gfnMultiLabel("EPRO_LABEL_01011");
        			var objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        			arr.push(objParam);
        		}
        	}
        	this.dsTmpUser.set_enableevent(true);
        	
        	this.fnGrdListFilter(this.dsSrcGrpLvl2,"UP_SRC_GRP_ID",srcGrp2Data);
        	
        	if(!gfnIsNull(userData)){
        		this.fnGrdListFilter(this.dsTmpUser, "SRC_GRP_ID", userData);
        	}else{
        		this.fnGrdListFilter(this.dsTmpUser, "SRC_GRP_ID", "");
        	}
        	
        	return gfnValidate(this, true, arr);
        }

        /**
          * @함수명	: fnSave
          * @desc     	: (공통버튼)저장
          */
        this.fnSave = function()
        {
        	if (!this.fnPreSave()) return false;
        	
        	
        	if(!gfnConfirm("EPRO_LABEL_00001")) return;

        	var sSvcID = "saveMstSrcGrp";
        	var sController = "epro.mst.service.BMstService.saveMstSrcGrp";
        	var sInDatasets = "dsSrcGrpLvl1=dsSrcGrpLvl1:A dsSrcGrpLvl2=dsSrcGrpLvl2:A dsTmpUser=dsTmpUser:A";
        	var sOutDatasets = "dsTmpUser=dsTmpUser";
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

        	var sSvcID = "searchMstSrcGrp";
        	var sController = "epro.mst.service.BMstService.searchMstSrcGrp";
        	var sInDatasets = "dsCondition=dsCondition";
        	var sOutDatasets = "dsSrcGrpLvl1=dsSrcGrpLvl1 dsSrcGrpLvl2=dsSrcGrpLvl2 dsTmpUser=dsTmpUser";
        	var sCallbackFunc = "fnTrCallBack";
        				
        	var	oPaging = [	
        					//{inDs:this.dsCondition, grid:this.divViewCompBody00.grdList, divPaging:this.divViewCompBody00.divPaging}
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
        		case "searchMstSrcGrp" :
        			if(strErrMsg != "" && strErrCd == -1){
        				gfnAlert(strErrMsg);
        			}
        			
        			this.dsSrcGrpLvl1.set_rowposition(-1);
        			this.dsSrcGrpLvl2.filter("UP_SRC_GRP_ID==''");
        			
        			this.dsTmpUser.filter("SRC_GRP_ID==''");
        			this.dsSrcGrpUsr.clear();
        		break;
        		
        		case "saveMstSrcGrp" :
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
        				this.dsList.setColumn(i, "MDL_SRC_ID", this.dsReturn.getColumn(0, "MDL_SRC_ID"));
        				this.dsList.setColumn(i, "SRC_GRP_ID", this.dsReturn.getColumn(0, "MDL_SRC_ID"));
        				this.dsList.setColumn(i, "SRC_PATH", this.dsReturn.getColumn(0, "LRG_SRC_NM") + "> "
        				                                    + this.dsReturn.getColumn(0, "MDL_SRC_NM"));
        			}
        		}
        		
        	}else if(sPopupId == 'BUserSrchPopup'){
        		this.dsReturn.loadXML(rtn);
        		if(!gfnIsNull(this.dsReturn.getColumn(0,"USER_ID"))){
        		    var nRow = this.dsTmpUser.rowposition;
        			this.dsTmpUser.setColumn(nRow,"USER_ID",this.dsReturn.getColumn(0,"USER_ID"));
        			this.dsTmpUser.setColumn(nRow,"USER_NM",this.dsReturn.getColumn(0,"USER_NM"));
        			this.dsTmpUser.setColumn(nRow,"DEPT_CD",this.dsReturn.getColumn(0,"DEPT_CD"));
        			this.dsTmpUser.setColumn(nRow,"DEPT_NM",this.dsReturn.getColumn(0,"DEPT_NM"));
        		}
        	}
        	
        	
        }

        /**
          * @함수명	: fnBody02GrdListOncellclick
          * @desc     	: 구매담당자 주담당 CheckBox
          */
        this.fnBody02GrdListOncellclick = function(obj,e)
        {
        	if("ALT_RPTST_YN" == gfnGrdBindColNm(obj, obj.getCellPos())){
        		obj.updateToDataset();
        		
        		for(var i = 0 ; i < this.dsTmpUser.rowcount ; i++){
        		
        				this.dsTmpUser.setColumn(i,"ALT_RPTST_YN","");
        			
        		}
        		this.dsTmpUser.setColumn(e.row,"ALT_RPTST_YN","Y");
        		fv_chkRow = true;
        	}
        }

        /**
          * @함수명	: fnBody02GrdListOnkeydown
          * @desc     	: Enter key
          */
        this.fnBody02GrdListOnkeydown = function(obj,e)
        {	
        	if(e.keycode == "13") {
        		if("USER_NM" == gfnGrdBindColNm(obj, obj.getCellPos()) && "normal" == obj.getCurEditType()) {
        			obj.updateToDataset();			
        			this.fnearchComUserPopup();
        		}
        	}
        }

        /**
          * @함수명	: fnearchComUserPopup
          * @desc     	: 구매담당자 검색 팝업
          */
        this.fnearchComUserPopup = function()
        {
        	var sArg = { 
        					agv_id:""
        					,agv_nm:this.dsTmpUser.getColumn(this.dsTmpUser.rowposition, "USER_NM")
        					,agv_dept:""
        				};
        	gfnSearchComUser(this, "BUserSrchPopup", "fnPopCallBack", sArg)
        }

        /**
          * @함수명	: fnUsrAddOnclick
          * @desc     	: 구매담당자 추가
          */
        this.fnUsrAddOnclick = function(obj,e)
        {
        	if (this.dsSrcGrpLvl1.rowposition < 0 || this.dsSrcGrpLvl2.rowposition < 0)
        	{
        		gfnAlert("EPRO_LABEL_01015");
        		return;
        	}

        	var nRow = this.dsTmpUser.addRow();
        	var srcRow = this.dsSrcGrpLvl2.rowposition;

        	this.dsTmpUser.setColumn(nRow, "SRC_GRP_ID", this.dsSrcGrpLvl2.getColumn(srcRow, "UP_SRC_GRP_ID")+""+this.dsSrcGrpLvl2.getColumn(srcRow, "SRC_GRP_ID"));
        	this.dsTmpUser.setColumn(nRow, "USER_ID", "");	
        	this.dsTmpUser.setColumn(nRow, "USER_NM", "");
        	this.dsTmpUser.setColumn(nRow, "DEPT_NM", "");
        	this.dsTmpUser.setColumn(nRow, "ALT_RPTST_YN", "");
        	fv_addRow = true;
        }

        /**
          * @함수명	: fnUsrDelOnclick
          * @desc     	: 구매담당자 삭제
          */
        this.fnUsrDelOnclick = function(obj,e)
        {
        	//this.dsTmpUser.set_enableevent(false);
        	if(gfnChkDelConfirm(this.dsTmpUser)) {
        		fv_delRow = true;
        	}
        	//this.fnGrdListFilter(this.dsTmpUser, "SRC_GRP_ID", this.dsSrcGrpLvl2.getColumn(this.dsSrcGrpLvl2.rowposition,"SRC_GRP_ID"));
        }

        /**
          * @함수명	: fnGrdListFilter
          * @desc     	: 리스트 필터설정
          */
        this.fnGrdListFilter = function(objDs,filterCol,filterVal)
        {	
        	objDs.set_enableevent(false);
        	objDs.filter("");
        	objDs.filter(filterCol + "=='" + filterVal + "'");
        	objDs.set_enableevent(true);
        }

        /**
          * @함수명	: fnDsSrcGrpLvl1Onrowposchanged
          * @desc     	: 대분류 rowposition변경 이벤트
          */
        this.fnDsSrcGrpLvl1Onrowposchanged = function(obj,e)
        {
        	UP_SRC_ID = this.dsSrcGrpLvl1.getColumn(obj.rowposition,"SRC_GRP_ID");
        	UP_SRC_NM = this.dsSrcGrpLvl1.getColumn(obj.rowposition,"SRC_GRP_NM");
        	
        	
        	if(this.dsSrcGrpLvl1.getRowType(obj.rowposition) == 2){
        		this.divViewCompTitle00.btnSrcGrpLvl1Del.set_visible(true);
        	}else{
        		this.divViewCompTitle00.btnSrcGrpLvl1Del.set_visible(false);
        		this.divViewCompTitle01.btnSrcGrpLvl2Del.set_visible(false);
        	}
        	
        	
        	this.fnGrdListFilter(this.dsSrcGrpLvl2, "UP_SRC_GRP_ID", UP_SRC_ID);
        	//this.dsCondition.setColumn(0, "UP_SRC_GRP_ID", UP_SRC_ID);
        	this.fnGrdListFilter(this.dsTmpUser, "SRC_GRP_ID", "");
        }

        /**
          * @함수명	: fnDsSrcGrpLvl2Onrowposchanged
          * @desc     	: 중분류 rowposition변경 이벤트
          */
        this.fnDsSrcGrpLvl2Onrowposchanged = function(obj,e)
        {
        	
        	if(this.dsSrcGrpLvl2.getRowType(obj.rowposition) == 2){
        		this.divViewCompTitle01.btnSrcGrpLvl2Del.set_visible(true);
        	}else{
        		this.divViewCompTitle01.btnSrcGrpLvl2Del.set_visible(false);
        	}
        	
        	filter_2 = this.dsSrcGrpLvl2.getColumn(obj.rowposition,"UP_SRC_GRP_ID")+""+this.dsSrcGrpLvl2.getColumn(obj.rowposition,"SRC_GRP_ID");
        	//this.dsCondition.setColumn(0, "SRC_GRP_ID", filter_2);
        	this.fnGrdListFilter(this.dsTmpUser, "SRC_GRP_ID", filter_2);
        }

        /**
          * @함수명	: fnBody02GrdListOnexpandup
          * @desc     	: 확장버튼 클릭
          */
        this.fnBody02GrdListOnexpandup = function(obj,e)
        {
        	this.fnearchComUserPopup()
        }

        /**
          * @함수명	: fnDsSrcGrpLvl2Canrowposchange
          * @desc     	: 중분류 rowposition변경전 담당자정보 변경사항 체크
          */
        this.fnDsSrcGrpLvl2Canrowposchange = function(obj,e)
        {
        	var chkUpdate = false; //수정체크
        	for(var i = 0 ; i < this.dsTmpUser.getRowCount(); i++) {	
        		if(fv_addRow) chkUpdate = true;			
        		else if (fv_chkRow) chkUpdate = true;	
        		else if(fv_delRow)	chkUpdate = true;
        	}
        		 
        	if(chkUpdate) {
        		if(!gfnConfirm("EPRO_LABEL_01016")) {
        			return false;
        		} else {
        			fv_addRow = false;
        			fv_delRow = false;
        			fv_chkRow = false;
        			return true;
        		}
        	} 
        	
        	return true;
        }

        /**
          * @함수명	: fnLvl1AddOnclick
          * @desc     	: 대분류 추가
          */
        this.fnLvl1AddOnclick = function(obj,e)
        {	
        	var row = this.dsSrcGrpLvl1.addRow();
        	this.dsSrcGrpLvl1.setColumn(row, "ALT_USE", 1);
        }
        /**
          * @함수명	: fnLvl2AddOnclick
          * @desc     	: 중분류 추가
          */
        this.fnLvl2AddOnclick = function(obj,e)
        {
        	if (this.dsSrcGrpLvl1.rowposition < 0)
        	{
        		gfnAlert("EPRO_LABEL_01231");
        		return;
        	}else if(gfnIsNull(UP_SRC_ID)){
        		gfnAlert("EPRO_LABEL_01280");
        		return;
        	}
        	
        	
        	var isRow = this.dsSrcGrpLvl2.getColumn((this.dsSrcGrpLvl2.rowcount-1), "SRC_GRP_ID");
        	
        	var row = this.dsSrcGrpLvl2.addRow();
        	this.dsSrcGrpLvl2.setColumn(row, "ALT_USE", 1);
        	this.dsSrcGrpLvl2.setColumn(row, "UP_SRC_GRP_ID", UP_SRC_ID);
        	this.dsSrcGrpLvl2.setColumn(row, "SRC_GRP_NM2"  , UP_SRC_NM);	
        	
        }
        /**
          * @함수명	: dsSrcGrpLvl2_oncolumnchanged
          * @desc     	: 컬럼 변경
          */
        this.dsSrcGrpLvl2_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "SRC_GRP_NM"){
        		for(var i = 0 ;i< this.dsSrcGrpLvl2.getRowCount(); i++){
        			this.dsSrcGrpLvl2.setColumn(i, "SRC_GRP_NM2", this.dsSrcGrpLvl1.getColumn(this.dsSrcGrpLvl1.rowposition, "SRC_GRP_NM")+" 》"+this.dsSrcGrpLvl2.getColumn(i,"SRC_GRP_NM"));
        		}
        	}
        }
        /**
          * @함수명	: dsSrcGrpLvl2_oncolumnchanged
          * @desc     	: 컬럼 변경
          */
        this.fnLvl1ColumnChanged = function(obj,e)
        {
        	if(e.columnid == "SRC_GRP_ID"){
        		var row = e.row;
        		var checkUpId	= this.dsSrcGrpLvl1.getColumn(row,"SRC_GRP_ID");
        		var frontCheck	= this.dsSrcGrpLvl1.findRow("SRC_GRP_ID", checkUpId);
        		var backCheck	= this.dsSrcGrpLvl1.findRow("SRC_GRP_ID", checkUpId, (frontCheck+1));
        		
        		if(frontCheck == row && backCheck == -1 && !gfnIsNull(checkUpId)){
        			UP_SRC_ID = checkUpId;
        			for(var i = 0; i < this.dsSrcGrpLvl2.rowcount; i++){
        				if(!gfnIsNull(checkUpId)){
        					this.dsSrcGrpLvl2.setColumn(i, "UP_SRC_GRP_ID", UP_SRC_ID);
        				}
        			}
        		}else{
        			gfnAlert("EPRO_LABEL_01281");
        			this.dsSrcGrpLvl1.setColumn(e.row, "SRC_GRP_ID", UP_SRC_ID);
        			return false;
        		}
        	}else if(e.columnid == "SRC_GRP_NM"){
        		for(var i = 0 ;i< this.dsSrcGrpLvl2.getRowCount(); i++){
        			this.dsSrcGrpLvl2.setColumn(i, "SRC_GRP_NM2", this.dsSrcGrpLvl1.getColumn(e.row, "SRC_GRP_NM")+" 》"+this.dsSrcGrpLvl2.getColumn(i,"SRC_GRP_NM"));
        		}
        	}
        }
        /**
          * @함수명	: fnLvl1DelOnclick
          * @desc     	: 대분류 삭제
          */
        this.fnLvl1DelOnclick = function(obj,e)
        {
        	var nRow = this.dsSrcGrpLvl1.rowposition;
        	
        	if(this.dsSrcGrpLvl1.getRowType(nRow) == "2"){
        		if(!gfnConfirm("EPRO_LABEL_01297")) return;
        		this.dsSrcGrpLvl2.deleteAll();
        		this.dsSrcGrpLvl1.deleteRow(nRow);
        		
        	}
        	
        }
        /**
          * @함수명	: fnLvl2DelOnclick
          * @desc     	: 중분류 삭제
          */
        this.fnLvl2DelOnclick = function(obj,e)
        {
        	var nRow = this.dsSrcGrpLvl2.rowposition;
        	
        	if(this.dsSrcGrpLvl2.getRowType(nRow) == "2"){
        		if(!gfnConfirm("EPRO_LABEL_00897")) return;
        		
        		this.dsSrcGrpLvl2.deleteRow(nRow);
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsSrcGrpLvl1.addEventHandler("oncolumnchanged", this.fnLvl1ColumnChanged, this);
            this.dsSrcGrpLvl1.addEventHandler("onrowposchanged", this.fnDsSrcGrpLvl1Onrowposchanged, this);
            this.dsSrcGrpLvl2.addEventHandler("oncolumnchanged", this.dsSrcGrpLvl2_oncolumnchanged, this);
            this.dsSrcGrpLvl2.addEventHandler("onrowposchanged", this.fnDsSrcGrpLvl2Onrowposchanged, this);
            this.dsCopySrcGrpLvl.addEventHandler("oncolumnchanged", this.dsSrcGrpLvl2_oncolumnchanged, this);
            this.dsCopySrcGrpLvl.addEventHandler("onrowposchanged", this.fnDsSrcGrpLvl2Onrowposchanged, this);
            this.addEventHandler("canstepchange", this.BMtrlSrcGrp_canstepchange, this);
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.divViewCompTitle00.btnSrcGrpLvl1Add.addEventHandler("onclick", this.fnLvl1AddOnclick, this);
            this.divViewCompTitle00.btnSrcGrpLvl1Del.addEventHandler("onclick", this.fnLvl1DelOnclick, this);
            this.divViewCompTitle01.btnSrcGrpLvl2Add.addEventHandler("onclick", this.fnLvl2AddOnclick, this);
            this.divViewCompTitle01.btnSrcGrpLvl2Del.addEventHandler("onclick", this.fnLvl2DelOnclick, this);
            this.divViewCompTitle02.btnSrcGrpUsrDel.addEventHandler("onclick", this.fnUsrDelOnclick, this);
            this.divViewCompTitle02.btnSrcGrpUsrAdd.addEventHandler("onclick", this.fnUsrAddOnclick, this);
            this.divViewCompBody02.grdList.addEventHandler("oncellclick", this.fnBody02GrdListOncellclick, this);
            this.divViewCompBody02.grdList.addEventHandler("onexpandup", this.fnBody02GrdListOnexpandup, this);
            this.divViewCompBody02.grdList.addEventHandler("onkeydown", this.fnBody02GrdListOnkeydown, this);

        };

        this.loadIncludeScript("BMstSrcGrp.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
