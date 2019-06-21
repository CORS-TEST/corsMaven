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
                this.set_name("BMstMtrlGrp");
                this.set_titletext("품목분류상세");
                this._setFormPosition(0,0,1220,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMtrlGrpLvl1", this);
            obj._setContents("<ColumnInfo><Column id=\"MTRL_GRP_ID\" size=\"256\" type=\"STRING\"/><Column id=\"UP_MTRL_GRP_ID\" size=\"256\" type=\"STRING\"/><Column id=\"LVL\" size=\"256\" type=\"STRING\"/><Column id=\"MTRL_GRP_NM\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_USE\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMtrlGrpLvl2", this);
            obj._setContents("<ColumnInfo><Column id=\"MTRL_GRP_ID\" size=\"256\" type=\"STRING\"/><Column id=\"UP_MTRL_GRP_ID\" size=\"256\" type=\"STRING\"/><Column id=\"LVL\" size=\"256\" type=\"STRING\"/><Column id=\"MTRL_GRP_NM\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_USE\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCondition", this);
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"LVL\" size=\"256\" type=\"STRING\"/><Column id=\"UP_MTRL_GRP_ID_MDL\" size=\"256\" type=\"STRING\"/><Column id=\"UP_MTRL_GRP_ID_LOW\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReturn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMtrlGrpLvl3", this);
            obj._setContents("<ColumnInfo><Column id=\"MTRL_GRP_ID\" size=\"256\" type=\"STRING\"/><Column id=\"UP_MTRL_GRP_ID\" size=\"256\" type=\"STRING\"/><Column id=\"LVL\" size=\"256\" type=\"STRING\"/><Column id=\"MTRL_GRP_NM\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_USE\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompTitle00", "absolute", "8", "32", "325", "24", null, null, this);
            obj.getSetter("objNm").set("대분류 타이틀");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "0", "195", "24", null, null, this.divViewCompTitle00);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.getSetter("objNm").set("대분류");
            obj.set_taborder("23");
            obj.set_text("대분류");
            this.divViewCompTitle00.addChild(obj.name, obj);
            obj = new Button("btnMtrlGrpLvl1Add", "absolute", null, "0", "60", "20", "0", null, this.divViewCompTitle00);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("대분류 추가");
            obj.set_positionstep("1");
            obj.set_taborder("24");
            obj.set_text("추가");
            this.divViewCompTitle00.addChild(obj.name, obj);
            obj = new Button("btnMtrlGrpLvl1Del", "absolute", null, "0", "60", "20", "64", null, this.divViewCompTitle00);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("대분류 추가");
            obj.set_positionstep("1");
            obj.set_taborder("25");
            obj.set_text("삭제");
            obj.set_visible("false");
            this.divViewCompTitle00.addChild(obj.name, obj);

            obj = new Div("divViewCompBody00", "absolute", "8", "64", "325", null, null, "10", this);
            obj.getSetter("objNm").set("DIV-대상업체 세부정보");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);
            obj = new Grid("grdMtrlGrpLvl1", "absolute", "0", "0", null, null, "0", "37", this.divViewCompBody00);
            obj.set_autofittype("col");
            obj.set_binddataset("dsMtrlGrpLvl1");
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
            obj._setContents("<Formats><Format id=\"MMODE\"><Columns><Column size=\"70\"/><Column size=\"139\"/><Column size=\"60\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"코드\"/><Cell col=\"1\" expr=\"\" text=\"코드명\"/><Cell col=\"2\" expr=\"\" text=\"사용여부\"/></Band><Band id=\"body\" style=\"cellpadding:2 2 2 2 ;\"><Cell displaytype=\"text\" editfilter=\"none\" editlengthunit=\"ascii\" editlimit=\"20\" edittype=\"expr:O_RGI==undefined?'text':'none'\" style=\"align: ;\" text=\"bind:MTRL_GRP_ID\" tooltiptext=\"bind:MTRL_GRP_ID\"/><Cell col=\"1\" displaytype=\"text\" editlengthunit=\"ascii\" editlimit=\"100\" edittype=\"text\" style=\"align:left middle;\" text=\"bind:MTRL_GRP_NM\" tooltiptext=\"bind:SRC_GRP_NM\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ALT_USE\"/></Band></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Div("divPaging1", "absolute", "0", null, null, "28", "0", "10", this.divViewCompBody00);
            obj.set_scrollbars("none");
            obj.set_taborder("7");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Div("divViewCompTitle01", "absolute", "346", "32", "401", "24", null, null, this);
            obj.getSetter("objNm").set("중분류 타이틀");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "0", "220", "24", null, null, this.divViewCompTitle01);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.getSetter("objNm").set("중분류");
            obj.set_taborder("28");
            obj.set_text("중분류");
            this.divViewCompTitle01.addChild(obj.name, obj);
            obj = new Button("btnMtrlGrpLvl2Add", "absolute", null, "0", "60", "20", "0", null, this.divViewCompTitle01);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("중분류 추가");
            obj.set_positionstep("1");
            obj.set_taborder("29");
            obj.set_text("추가");
            this.divViewCompTitle01.addChild(obj.name, obj);
            obj = new Button("btnMtrlGrpLvl2Del", "absolute", null, "0", "60", "20", "64", null, this.divViewCompTitle01);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("중분류 추가");
            obj.set_positionstep("1");
            obj.set_taborder("30");
            obj.set_text("삭제");
            obj.set_visible("false");
            this.divViewCompTitle01.addChild(obj.name, obj);

            obj = new Div("divViewCompBody01", "absolute", "346", "64", "402", null, null, "10", this);
            obj.getSetter("objNm").set("DIV-대상업체 세부정보");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);
            obj = new Grid("grdMtrlGrpLvl2", "absolute", "0", "0", null, null, "1", "37", this.divViewCompBody01);
            obj.set_autofittype("col");
            obj.set_binddataset("dsMtrlGrpLvl2");
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
            obj._setContents("<Formats><Format id=\"MMODE\"><Columns><Column size=\"71\"/><Column size=\"70\"/><Column size=\"143\"/><Column size=\"50\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"상위코드\"/><Cell col=\"1\" expr=\"\" text=\"코드\"/><Cell col=\"2\" expr=\"\" text=\"코드명\"/><Cell col=\"3\" expr=\"\" text=\"사용여부\"/></Band><Band id=\"body\" style=\"cellpadding:2 2 2 2 ;\"><Cell text=\"bind:UP_MTRL_GRP_ID\"/><Cell col=\"1\" displaytype=\"text\" editlengthunit=\"ascii\" editlimit=\"20\" edittype=\"expr:O_RGI==undefined?'text':'none'\" style=\"align: ;\" text=\"bind:MTRL_GRP_ID\" tooltiptext=\"bind:MTRL_GRP_ID\"/><Cell col=\"2\" displaytype=\"text\" editlengthunit=\"ascii\" editlimit=\"100\" edittype=\"text\" style=\"align:left middle;\" text=\"bind:MTRL_GRP_NM\" tooltiptext=\"bind:SRC_GRP_NM\"/><Cell col=\"3\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ALT_USE\"/></Band></Format></Formats>");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Div("divPaging2", "absolute", "0", null, null, "28", "0", "10", this.divViewCompBody01);
            obj.set_scrollbars("none");
            obj.set_taborder("1");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.divViewCompBody01.addChild(obj.name, obj);

            obj = new Div("divViewCompTitle02", "absolute", "760", "32", null, "24", "8", null, this);
            obj.getSetter("objNm").set("소분류 타이틀");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);
            obj = new Button("btnMtrlGrpLvl3Add", "absolute", null, "0", "60", "20", "0", null, this.divViewCompTitle02);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("소분류 추가");
            obj.set_positionstep("1");
            obj.set_taborder("27");
            obj.set_text("추가");
            this.divViewCompTitle02.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "0", "170", "24", null, null, this.divViewCompTitle02);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.getSetter("objNm").set("소분류");
            obj.set_taborder("28");
            obj.set_text("소분류");
            this.divViewCompTitle02.addChild(obj.name, obj);
            obj = new Button("btnMtrlGrpLvl3Del", "absolute", null, "0", "60", "20", "64", null, this.divViewCompTitle02);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("소분류 추가");
            obj.set_positionstep("1");
            obj.set_taborder("29");
            obj.set_text("삭제");
            obj.set_visible("false");
            this.divViewCompTitle02.addChild(obj.name, obj);

            obj = new Div("divViewCompBody02", "absolute", "760", "64", null, null, "8", "10", this);
            obj.getSetter("objNm").set("DIV-대상업체 세부정보");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);
            obj = new Grid("grdMtrlGrpLvl3", "absolute", "0", "0", null, null, "0", "37", this.divViewCompBody02);
            obj.set_autofittype("col");
            obj.set_binddataset("dsMtrlGrpLvl3");
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
            obj._setContents("<Formats><Format id=\"MMODE\"><Columns><Column size=\"92\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"60\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"상위코드\"/><Cell col=\"1\" cssclass=\"Cellgrd_essential\" expr=\"\" text=\"코드\"/><Cell col=\"2\" expr=\"\" text=\"코드명\"/><Cell col=\"3\" expr=\"\" text=\"사용여부\"/></Band><Band id=\"body\" style=\"cellpadding:2 2 2 2 ;\"><Cell text=\"bind:UP_MTRL_GRP_ID\"/><Cell col=\"1\" editlengthunit=\"ascii\" editlimit=\"20\" edittype=\"expr:O_RGI==undefined?'text':'none'\" expandsize=\"21\" style=\"align: ;\" text=\"bind:MTRL_GRP_ID\" tooltiptext=\"bind:MTRL_GRP_ID\"/><Cell col=\"2\" displaytype=\"text\" editlengthunit=\"ascii\" editlimit=\"100\" edittype=\"text\" style=\"align:left middle;\" text=\"bind:MTRL_GRP_NM\" tooltiptext=\"bind:DEPT_NM\"/><Cell col=\"3\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ALT_USE\" tooltiptext=\"bind:ALT_RPTST_YN\"/></Band></Format></Formats>");
            this.divViewCompBody02.addChild(obj.name, obj);
            obj = new Div("divPaging3", "absolute", "0", null, null, "28", "0", "10", this.divViewCompBody02);
            obj.set_scrollbars("none");
            obj.set_taborder("1");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.divViewCompBody02.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompTitle00,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("대분류 타이틀");
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
            		p.getSetter("objNm").set("중분류 타이틀");
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
            		p.getSetter("objNm").set("소분류 타이틀");
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
            		p.set_titletext("품목분류상세");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item3","divViewCompTitle00.staViewCompTitle00","text","gdsLabel","EPRO_LABEL_00276");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnMtrlGrpLvl1AddVi","divViewCompTitle00.btnMtrlGrpLvl1Add","visible","dsObjBindVi","btnMtrlGrpLvl1Add");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnMtrlGrpLvl1AddEn","divViewCompTitle00.btnMtrlGrpLvl1Add","enable","dsObjBindEn","btnMtrlGrpLvl1Add");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPaging1Vi","divViewCompBody00.divPaging1","visible","dsObjBindVi","divPaging1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPaging1En","divViewCompBody00.divPaging1","enable","dsObjBindEn","divPaging1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnMtrlGrpLvl2AddVi","divViewCompTitle01.btnMtrlGrpLvl2Add","visible","dsObjBindVi","btnMtrlGrpLvl2Add");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnMtrlGrpLvl2AddEn","divViewCompTitle01.btnMtrlGrpLvl2Add","enable","dsObjBindEn","btnMtrlGrpLvl2Add");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPaging2Vi","divViewCompBody01.divPaging2","visible","dsObjBindVi","divPaging2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPaging2En","divViewCompBody01.divPaging2","enable","dsObjBindEn","divPaging2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnMtrlGrpLvl3AddVi","divViewCompTitle02.btnMtrlGrpLvl3Add","visible","dsObjBindVi","btnMtrlGrpLvl3Add");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnMtrlGrpLvl3AddEn","divViewCompTitle02.btnMtrlGrpLvl3Add","enable","dsObjBindEn","btnMtrlGrpLvl3Add");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPaging3Vi","divViewCompBody02.divPaging3","visible","dsObjBindVi","divPaging3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divPaging3En","divViewCompBody02.divPaging3","enable","dsObjBindEn","divPaging3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("grdMtrlGrpLvl1FormatId","divViewCompBody00.grdMtrlGrpLvl1","formatid","dsObjBindGrid","grdMtrlGrpLvl1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("grdMtrlGrpLvl2FormatId","divViewCompBody01.grdMtrlGrpLvl2","formatid","dsObjBindGrid","grdMtrlGrpLvl2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("grdMtrlGrpLvl3FormatId","divViewCompBody02.grdMtrlGrpLvl3","formatid","dsObjBindGrid","grdMtrlGrpLvl3");
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
        this.registerScript("BMstMtrlGrp.xfdl", function(exports) {
        /**
         * @파일명       	: BMstMtrlGrp.xfdl
         * @생성자       	: 김동호
         * @생성일자     	: 2017. 12. 06.
         * @설명			: 품목분류상세
         * @최종수정자		: 김동호
         * @최종수정일자	: 2017. 12. 06.
        */  
        var UP_MTRL_GRP_ID_1 = ""; //중분류 추가시 넣을 UP_MTRL_GRP_ID
        var UP_MTRL_GRP_ID_2 = ""; //소분류 추가시 넣을 UP_MTRL_GRP_ID
        var checkCd = "";

        
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
        	this.dsCondition.setColumn(0,"UP_MTRL_GRP_ID_MDL", "");
        	this.dsCondition.setColumn(0,"UP_MTRL_GRP_ID_LOW", "");
        	var sArgEx_1 = {
        		isTran:"N", tranNm:"", dsParam:this.dsMtrlGrpLvl1
        	} 	
          	gfnSetGrdFunc(this.divViewCompBody00.grdMtrlGrpLvl1, this.divViewCompBody00.divPaging1, this, sArgEx_1);
          	var sArgEx_2 = {
        		isTran:"Y", tranNm:"BMstService.searchMstMtrlExcelMdl", dsParam:this.dsCondition
        	}
          	gfnSetGrdFunc(this.divViewCompBody01.grdMtrlGrpLvl2, this.divViewCompBody01.divPaging2, this, sArgEx_2);
          	var sArgEx_3 = {
        		isTran:"Y", tranNm:"BMstService.searchMstMtrlExcelLow", dsParam:this.dsCondition
        	}
          	gfnSetGrdFunc(this.divViewCompBody02.grdMtrlGrpLvl3, this.divViewCompBody02.divPaging3, this, sArgEx_3);
          	
          	
        	gfnSetObj("A");
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

        	var sSvcID = "searchMstMtrlGrp";
        	var sController = "epro.mst.service.BMstService.searchMstMtrlGrp";
        	var sInDatasets = "dsCondition=dsCondition";
        	var sOutDatasets = "dsMtrlGrpLvl1=dsMtrlGrpLvl1 dsMtrlGrpLvl2=dsMtrlGrpLvl2 dsMtrlGrpLvl3=dsMtrlGrpLvl3";
        	var sCallbackFunc = "fnTrCallBack";
        				
        	var	oPaging = [	
        					//{inDs:this.dsCondition, grid:this.divViewCompBody00.grdList, divPaging:this.divViewCompBody00.divPaging}
        				];
        				
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc, oPaging);
        }

        /**
          * @함수명	: fnPreSave
          * @desc     	: 저장 전 처리
          */
        this.fnPreSave = function()
        {
        	var arr = [];
        	
        	var lrg = this.dsMtrlGrpLvl1.getColumn(this.dsMtrlGrpLvl1,"MTRL_GRP_ID");
        	var mdl = this.dsMtrlGrpLvl2.getColumn(this.dsMtrlGrpLvl2,"MTRL_GRP_ID");
        	
        	this.dsMtrlGrpLvl1.filter("");
        	this.dsMtrlGrpLvl2.filter("");
        	this.dsMtrlGrpLvl3.filter("");
        	
        	//dsMtrlGrpLvl1 체크
        	for(var i = 0; i< this.dsMtrlGrpLvl1.getRowCount(); i++){
        		var cd = this.dsMtrlGrpLvl1.getColumn(i, "MTRL_GRP_ID");
        		var nm = this.dsMtrlGrpLvl1.getColumn(i, "MTRL_GRP_NM");
        		// 코드입력
        		if(gfnIsNull(cd)){ 
        			var msg = gfnMultiLabel("EPRO_LABEL_01334");;
        			var type = gfnMultiLabel("EPRO_LABEL_00770");
        			var objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        			arr.push(objParam);
        		// 코드명 입력
        		}else if(gfnIsNull(nm)){ 
        			
        			var msg = gfnMultiLabel("EPRO_LABEL_00276")+" "+this.dsMtrlGrpLvl1.getColumn(i,"MTRL_GRP_ID")+" "+gfnMultiLabel("EPRO_LABEL_01333");
        			var type = gfnMultiLabel("EPRO_LABEL_00770");
        			var objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        			arr.push(objParam);
        			
        		}
        	}
        	//dsMtrlGrpLvl2 체크
        	for(var i = 0; i< this.dsMtrlGrpLvl2.getRowCount(); i++){
        		var cd = this.dsMtrlGrpLvl2.getColumn(i, "MTRL_GRP_ID");
        		var nm = this.dsMtrlGrpLvl2.getColumn(i, "MTRL_GRP_NM");
        		// 코드입력
        		if(gfnIsNull(cd)){ 
        			var msg = gfnMultiLabel("EPRO_LABEL_00441")+" :"+this.dsMtrlGrpLvl2.getColumn(i,"UP_MTRL_GRP_ID")+" "+gfnMultiLabel("EPRO_LABEL_01278");;
        			var type = gfnMultiLabel("EPRO_LABEL_00770");
        			var objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        			arr.push(objParam);
        		// 코드명 입력
        		}else if(gfnIsNull(nm)){ 
        			
        			var msg = gfnMultiLabel("EPRO_LABEL_00441")+" :"+this.dsMtrlGrpLvl2.getColumn(i,"UP_MTRL_GRP_ID")+" "+gfnMultiLabel("EPRO_LABEL_00324")+" "+this.dsMtrlGrpLvl2.getColumn(i,"MTRL_GRP_ID")+" "+gfnMultiLabel("EPRO_LABEL_01333");
        			var type = gfnMultiLabel("EPRO_LABEL_00770");
        			var objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        			arr.push(objParam);
        			
        		}
        	}
        	
        	//dsMtrlGrpLvl3 체크
        	for(var i = 0; i< this.dsMtrlGrpLvl3.getRowCount(); i++){
        		var cd = this.dsMtrlGrpLvl3.getColumn(i, "MTRL_GRP_ID");
        		var nm = this.dsMtrlGrpLvl3.getColumn(i, "MTRL_GRP_NM");
        		// 코드입력
        		if(gfnIsNull(cd)){ 
        			var msg = gfnMultiLabel("EPRO_LABEL_00441")+" :"+this.dsMtrlGrpLvl3.getColumn(i,"UP_MTRL_GRP_ID")+" "+gfnMultiLabel("EPRO_LABEL_01335");;
        			var type = gfnMultiLabel("EPRO_LABEL_00770");
        			var objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        			arr.push(objParam);
        		// 코드명 입력
        		}else if(gfnIsNull(nm)){ 
        			
        			var msg = gfnMultiLabel("EPRO_LABEL_00441")+" :"+this.dsMtrlGrpLvl3.getColumn(i,"UP_MTRL_GRP_ID")+" "+gfnMultiLabel("EPRO_LABEL_00571")+" "+this.dsMtrlGrpLvl3.getColumn(i,"MTRL_GRP_ID")+" "+gfnMultiLabel("EPRO_LABEL_01333");
        			var type = gfnMultiLabel("EPRO_LABEL_00770");
        			var objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        			arr.push(objParam);
        			
        		}
        	}
        	this.dsMtrlGrpLvl1.filter("MTRL_GRP_ID>=0'");
        	this.dsMtrlGrpLvl2.filter("UP_MTRL_GRP_ID=='"+lrg+"'");
        	this.dsMtrlGrpLvl3.filter("UP_MTRL_GRP_ID=='"+mdl+"'");
        	
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

        	var sSvcID = "saveMstMtrlGrp";
        	var sController = "epro.mst.service.BMstService.saveMstMtrlGrp";
        	var sInDatasets = "dsMtrlGrpLvl1=dsMtrlGrpLvl1:A dsMtrlGrpLvl2=dsMtrlGrpLvl2:A dsMtrlGrpLvl3=dsMtrlGrpLvl3:A";
        	var sOutDatasets = "dsMtrlGrpLvl1=dsMtrlGrpLvl1 dsMtrlGrpLvl2=dsMtrlGrpLvl2 dsMtrlGrpLvl3=dsMtrlGrpLvl3";
        	var sCallbackFunc = "fnTrCallBack";
        	
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);	
            
        }
        /**
          * @함수명	: fnLvl1AddOnclick
          * @desc     	: LVL 1 추가
          */
        this.fnLvl1AddOnclick = function(obj,e)
        {
        	var row = this.dsMtrlGrpLvl1.addRow();
        	this.dsMtrlGrpLvl1.setColumn(row, "ALT_USE", 1);
        }
        /**
          * @함수명	: fnLvl1AddOnclick
          * @desc     	: LVL 2 추가
          */
        this.fnLvl2AddOnclick = function(obj,e)
        {
        	if (this.dsMtrlGrpLvl1.rowposition < 0)
        	{
        		gfnAlert("EPRO_LABEL_01231");
        		return;
        	}else if(gfnIsNull(UP_MTRL_GRP_ID_1)){
        		gfnAlert("EPRO_LABEL_01280");
        		return;
        	}
        	var isRow = this.dsMtrlGrpLvl2.getColumn((this.dsMtrlGrpLvl2.rowcount-1), "MTRL_GRP_ID");
        	var row = this.dsMtrlGrpLvl2.addRow();
        	this.dsMtrlGrpLvl2.setColumn(row, "UP_MTRL_GRP_ID", UP_MTRL_GRP_ID_1);	
        	this.dsMtrlGrpLvl2.setColumn(row, "ALT_USE", 1);
        }
        /**
          * @함수명	: fnLvl1AddOnclick
          * @desc     	: LVL 3 추가
          */
        this.fnLvl3AddOnclick = function(obj,e)
        {
        	
        	if (this.dsMtrlGrpLvl2.rowposition < 0)
        	{
        		gfnAlert("EPRO_LABEL_01245");
        		return;
        	}else if(gfnIsNull(UP_MTRL_GRP_ID_2)){
        		gfnAlert("EPRO_LABEL_01280");
        		return;
        	}
        	
        	var row = this.dsMtrlGrpLvl3.addRow();
        	this.dsMtrlGrpLvl3.setColumn(row, "UP_MTRL_GRP_ID", UP_MTRL_GRP_ID_2);	
        	this.dsMtrlGrpLvl3.setColumn(row, "ALT_USE", 1);	
        }
        /**
          * @함수명	: fnLvl1DelOnclick
          * @desc     	: 대분류 삭제
          */
        this.fnLvl1DelOnclick = function(obj,e)
        {
        	var nRow = this.dsMtrlGrpLvl1.rowposition;
        	
        	if(this.dsMtrlGrpLvl1.getRowType(nRow) == "2"){
        		if(!gfnConfirm("EPRO_LABEL_01297")) return;
        		
        		
        		for(var i =0; i< this.dsMtrlGrpLvl2.getRowCount(); i++){
        			this.dsMtrlGrpLvl2.set_rowposition(i);
        			if(!gfnIsNull(this.dsMtrlGrpLvl2.getColumn(i, "MTRL_GRP_ID"))){
        				this.dsMtrlGrpLvl3.filter("UP_MTRL_GRP_ID=='"+UP_MTRL_GRP_ID_2+"'")
        				this.dsMtrlGrpLvl3.deleteAll();
        			}
        		}
        		this.dsMtrlGrpLvl2.deleteAll();
        		this.dsMtrlGrpLvl1.deleteRow(nRow);
        		
        	}
        	
        }
        /**
          * @함수명	: fnLvl2DelOnclick
          * @desc     	: 중분류 삭제
          */
        this.fnLvl2DelOnclick = function(obj,e)
        {
        	var nRow = this.dsMtrlGrpLvl2.rowposition;
        	
        	if(this.dsMtrlGrpLvl2.getRowType(nRow) == "2"){
        		if(!gfnConfirm("EPRO_LABEL_01297")) return;
        		this.dsMtrlGrpLvl3.deleteAll;
        		this.dsMtrlGrpLvl2.deleteRow(nRow);
        	}
        }
        /**
          * @함수명	: fnLvl3DelOnclick
          * @desc     	: 소분류 삭제
          */
        this.fnLvl3DelOnclick = function(obj,e)
        {
        	var nRow = this.dsMtrlGrpLvl3.rowposition;
        	
        	if(this.dsMtrlGrpLvl3.getRowType(nRow) == "2"){
        		if(!gfnConfirm("EPRO_LABEL_01298")) return;
        		this.dsMtrlGrpLvl3.deleteRow(nRow);
        	}
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
        		case "searchMstMtrlGrp":
        			this.dsMtrlGrpLvl1.set_rowposition(-1);
        			this.dsMtrlGrpLvl2.filter("UP_MTRL_GRP_ID==''")
        			this.dsMtrlGrpLvl3.filter("UP_MTRL_GRP_ID==''")
        		break;
        		case "saveMstMtrlGrp":
        			gfnAlert(strErrMsg);
        			this.fnSearch();
        		break;
        		default:
        		break;	
        	}
        }

        /**
          * @함수명	: fnDsSrcGrpLvl1Onrowposchanged
          * @desc     	: 대분류 필터 이벤트
          */
        this.fnDsSrcGrpLvl1Onrowposchanged = function(obj,e)
        {
        	if(this.dsMtrlGrpLvl1.getRowType(obj.rowposition) == 2){
        		this.divViewCompTitle00.btnMtrlGrpLvl1Del.set_visible(true);
        		
        	}else{
        		this.divViewCompTitle00.btnMtrlGrpLvl1Del.set_visible(false);
        		this.divViewCompTitle01.btnMtrlGrpLvl2Del.set_visible(false);
        		this.divViewCompTitle02.btnMtrlGrpLvl3Del.set_visible(false);
        	}
        	
        	UP_MTRL_GRP_ID_1 = this.dsMtrlGrpLvl1.getColumn(obj.rowposition, "MTRL_GRP_ID");
        	this.fnGrdListFilter(this.dsMtrlGrpLvl2, "UP_MTRL_GRP_ID", UP_MTRL_GRP_ID_1);
        	this.dsCondition.setColumn(0, "UP_MTRL_GRP_ID_MDL", UP_MTRL_GRP_ID_1);
        	this.fnGrdListFilter(this.dsMtrlGrpLvl3, "UP_MTRL_GRP_ID", "");
        }

        /**
          * @함수명	: fnDsSrcGrpLvl1Onrowposchanged
          * @desc     	: 중분류 필터 이벤트
          */
        this.fnDsSrcGrpLvl2Onrowposchanged = function(obj,e)
        {

        	
        	if(this.dsMtrlGrpLvl2.getRowType(obj.rowposition) == 2){
        		this.divViewCompTitle01.btnMtrlGrpLvl2Del.set_visible(true);
        	}else{
        		this.divViewCompTitle01.btnMtrlGrpLvl2Del.set_visible(false);
        		this.divViewCompTitle02.btnMtrlGrpLvl3Del.set_visible(false);
        	}
        	
        	UP_MTRL_GRP_ID_2 = UP_MTRL_GRP_ID_1+""+this.dsMtrlGrpLvl2.getColumn(obj.rowposition, "MTRL_GRP_ID");
        	this.dsCondition.setColumn(0, "UP_MTRL_GRP_ID_LOW",UP_MTRL_GRP_ID_2);
        	this.fnGrdListFilter(this.dsMtrlGrpLvl3, "UP_MTRL_GRP_ID", UP_MTRL_GRP_ID_2);
        }
        /**
          * @함수명	: fnDsSrcGrpLvl3Onrowposchanged
          * @desc     	: 소분류 이벤트
          */
        this.fnDsSrcGrpLvl3Onrowposchanged = function(obj,e)
        {
        	if(this.dsMtrlGrpLvl3.getRowType(obj.rowposition) == 2){
        		this.divViewCompTitle02.btnMtrlGrpLvl3Del.set_visible(true);
        	}else{
        		this.divViewCompTitle02.btnMtrlGrpLvl3Del.set_visible(false);
        	}
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
          * @함수명	: fnLvl1ColumnChanged
          * @desc     	: 대분류 코드 변경
          */
        this.fnLvl1ColumnChanged = function(obj,e)
        {
        	
        	if(e.columnid == "MTRL_GRP_ID"){
        		
        		var checkUpId = this.dsMtrlGrpLvl1.getColumn(e.row, "MTRL_GRP_ID");
        		var frontCheck = this.dsMtrlGrpLvl1.findRow("MTRL_GRP_ID", checkUpId);
        		var backCheck = this.dsMtrlGrpLvl1.findRow("MTRL_GRP_ID", checkUpId, (frontCheck+1));
        		
        		if(frontCheck == e.row && backCheck == -1 && !gfnIsNull(checkUpId)){
        			UP_MTRL_GRP_ID_1 = checkUpId;
        			for(var i = 0; i < this.dsMtrlGrpLvl2.rowcount; i++){
        				if(!gfnIsNull(checkUpId)){
        					this.dsMtrlGrpLvl2.setColumn(i, "UP_MTRL_GRP_ID", UP_MTRL_GRP_ID_1);
        				}
        			}
        		}else{
        			gfnAlert("EPRO_LABEL_01281");
        			this.dsMtrlGrpLvl1.setColumn(e.row, "MTRL_GRP_ID", UP_MTRL_GRP_ID_1);
        			return false;
        		}
        		
        		if(!gfnIsNull(checkCd)){
        			if(!gfnConfirm("EPRO_LABEL_01309")){ 
        			this.dsMtrlGrpLvl1.setColumn(e.row, "MTRL_GRP_ID", UP_MTRL_GRP_ID_1);
        			return;
        			}
        		}
        	}
        }
        /**
          * @함수명	: fnLvl2CoumnChanged
          * @desc     	: 중분류 코드 변경
          */
        this.fnLvl2CoumnChanged = function(obj,e)
        {
        	if(e.columnid == "MTRL_GRP_ID"){
        		var cd = UP_MTRL_GRP_ID_2.slice(UP_MTRL_GRP_ID_1.length);
        		var mtrl_id = this.dsMtrlGrpLvl2.getColumn(e.row, "MTRL_GRP_ID");
        		var row = e.row;
        		var frontCheck = this.dsMtrlGrpLvl2.findRow("MTRL_GRP_ID", mtrl_id);
        		var backCheck = this.dsMtrlGrpLvl2.findRow("MTRL_GRP_ID", mtrl_id, (row+1));
        	
        		if(frontCheck == row && backCheck == -1&& !gfnIsNull(mtrl_id)){
        			
        			UP_MTRL_GRP_ID_2 = UP_MTRL_GRP_ID_1+""+mtrl_id;
        			for(var i = 0; i < this.dsMtrlGrpLvl3.rowcount; i++){
        				if(!gfnIsNull(mtrl_id)){
        					this.dsMtrlGrpLvl3.setColumn(i, "UP_MTRL_GRP_ID", UP_MTRL_GRP_ID_2);
        				}else{
        					this.dsMtrlGrpLvl3.setColumn(i, "UP_MTRL_GRP_ID", "");
        				}
        			}
        		}else{
        			gfnAlert("EPRO_LABEL_01281");
        			
        			if(!gfnIsNull(cd)) cd ="";
        			this.dsMtrlGrpLvl2.setColumn(e.row, "MTRL_GRP_ID", cd);
        			return false;
        			
        		}
        		if(!gfnIsNull(checkCd)){
        			
        			if(!gfnConfirm("EPRO_LABEL_01309")){ 
        				this.dsMtrlGrpLvl2.setColumn(e.row, "MTRL_GRP_ID", cd);
        				return false;
        			}
        		}
        		
        	}
        	if(e.columnid == "UP_MTRL_GRP_ID"){
        		
        		for(var i = 0; i < this.dsMtrlGrpLvl3.rowcount; i++){
        				var mtrl_id =  this.dsMtrlGrpLvl2.getColumn(e.row, "MTRL_GRP_ID");
        				UP_MTRL_GRP_ID_2 = UP_MTRL_GRP_ID_1 + mtrl_id;
        				if(!gfnIsNull(mtrl_id)){
        					this.dsMtrlGrpLvl3.setColumn(i, "UP_MTRL_GRP_ID", UP_MTRL_GRP_ID_2);
        				}
        			}
        	}
        }
        /**
          * @함수명	: fnLvl2CoumnChanged
          * @desc     	: 중분류 코드 변경
          */
        this.fnLvl3CoumnChanged = function(obj,e)
        {
        	if(e.columnid == "MTRL_GRP_ID"){
        		var mtrl_id = this.dsMtrlGrpLvl3.getColumn(e.row, "MTRL_GRP_ID");
        		var row = e.row;
        		var frontCheck = this.dsMtrlGrpLvl3.findRow("MTRL_GRP_ID", mtrl_id);
        		var backCheck = this.dsMtrlGrpLvl3.findRow("MTRL_GRP_ID", mtrl_id, (row+1));
        		
        		if(frontCheck < row || backCheck > row){			
        		gfnAlert("EPRO_LABEL_01281");
        			this.dsMtrlGrpLvl3.setColumn(row, "MTRL_GRP_ID", checkCd);
        		}
        	}
        }

        /**
          * @함수명	: fnLvl1ColumnChange
          * @desc     	: 대 분류 코드 변경 전
          */
        this.fnLvl1ColumnChange = function(obj,e)
        {
        	checkCd = this.dsMtrlGrpLvl1.getColumn(e.row, "MTRL_GRP_ID");
        }
        /**
          * @함수명	: fnLvl1ColumnChange
          * @desc     	: 중분류 코드 변경 전
          */
        this.fnLvl2CoumnChange = function(obj,e)
        {
        	checkCd = this.dsMtrlGrpLvl2.getColumn(e.row, "MTRL_GRP_ID");
        }

        /**
          * @함수명	: fnLvl1ColumnChange
          * @desc     	: 소분류 코드 변경 전
          */
        this.fnLvl3CoumnChange = function(obj,e)
        {
        	checkCd = this.dsMtrlGrpLvl2.getColumn(e.row, "MTRL_GRP_ID");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsMtrlGrpLvl1.addEventHandler("cancolumnchange", this.fnLvl1ColumnChange, this);
            this.dsMtrlGrpLvl1.addEventHandler("oncolumnchanged", this.fnLvl1ColumnChanged, this);
            this.dsMtrlGrpLvl1.addEventHandler("onrowposchanged", this.fnDsSrcGrpLvl1Onrowposchanged, this);
            this.dsMtrlGrpLvl2.addEventHandler("cancolumnchange", this.fnLvl2CoumnChange, this);
            this.dsMtrlGrpLvl2.addEventHandler("oncolumnchanged", this.fnLvl2CoumnChanged, this);
            this.dsMtrlGrpLvl2.addEventHandler("onrowposchanged", this.fnDsSrcGrpLvl2Onrowposchanged, this);
            this.dsMtrlGrpLvl3.addEventHandler("cancolumnchange", this.fnLvl3CoumnChange, this);
            this.dsMtrlGrpLvl3.addEventHandler("oncolumnchanged", this.fnLvl3CoumnChanged, this);
            this.dsMtrlGrpLvl3.addEventHandler("onrowposchanged", this.fnDsSrcGrpLvl3Onrowposchanged, this);
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.divViewCompTitle00.btnMtrlGrpLvl1Add.addEventHandler("onclick", this.fnLvl1AddOnclick, this);
            this.divViewCompTitle00.btnMtrlGrpLvl1Del.addEventHandler("onclick", this.fnLvl1DelOnclick, this);
            this.divViewCompTitle01.btnMtrlGrpLvl2Add.addEventHandler("onclick", this.fnLvl2AddOnclick, this);
            this.divViewCompTitle01.btnMtrlGrpLvl2Del.addEventHandler("onclick", this.fnLvl2DelOnclick, this);
            this.divViewCompTitle02.btnMtrlGrpLvl3Add.addEventHandler("onclick", this.fnLvl3AddOnclick, this);
            this.divViewCompTitle02.btnMtrlGrpLvl3Del.addEventHandler("onclick", this.fnLvl3DelOnclick, this);

        };

        this.loadIncludeScript("BMstMtrlGrp.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
