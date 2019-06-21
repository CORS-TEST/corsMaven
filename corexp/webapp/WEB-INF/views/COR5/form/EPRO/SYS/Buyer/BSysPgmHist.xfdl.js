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
                this.set_name("BSysPgmHist");
                this.set_titletext("프로그램사용이력");
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
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCondition", this);
            obj._setContents("<ColumnInfo><Column id=\"SVC_NM\" size=\"256\" type=\"STRING\"/><Column id=\"METHOD\" size=\"256\" type=\"STRING\"/><Column id=\"START_DT\" size=\"256\" type=\"STRING\"/><Column id=\"END_DT\" size=\"256\" type=\"STRING\"/><Column id=\"USER_IP\" size=\"256\" type=\"STRING\"/><Column id=\"TYPE\" size=\"256\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGubun", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompCond01", "absolute", "0", "35", null, "85", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.getSetter("objNm").set("");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);
            obj = new Static("staWarning", "absolute", "0", "64", null, "19", "0", null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_SearchText");
            obj.set_taborder("12");
            obj.set_text("- 검색조건 없이 검색 시 속도가 저하 될 수 있습니다.");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staIp", "absolute", "0", "34", "160", "24", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_taborder("17");
            obj.set_text("접속자 IP");
            obj.style.set_align("right middle");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtIp", "absolute", "170", "34", "220", "24", null, null, this.divViewCompCond01);
            obj.set_inputtype("number,dot");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("평가담당자명");
            obj.set_taborder("19");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staGubun", "absolute", "0", "5", "160", "24", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_taborder("20");
            obj.set_text("서비스구분");
            obj.style.set_align("right middle");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Combo("cboGubun", "absolute", "170", "5", "120", "24", null, null, this.divViewCompCond01);
            this.divViewCompCond01.addChild(obj.name, obj);
            obj.set_codecolumn("SVC_ID");
            obj.set_datacolumn("SVC_GUBUN");
            obj.set_innerdataset("dsGubun");
            obj.getSetter("objNm").set("상태");
            obj.set_taborder("21");

            obj = new Div("divViewCompBody00", "absolute", "0", "136", null, null, "15", "0", this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "10", null, null, "0", "37", this.divViewCompBody00);
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
            obj.getSetter("f_mode").set("N");
            obj.getSetter("f_save").set("N");
            obj.getSetter("f_sort").set("N");
            obj.getSetter("f_totalCnt").set("Y");
            obj.getSetter("objNm").set("검색결과 그리드");
            obj.set_taborder("6");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"84\"/><Column size=\"84\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"접속시간\"/><Cell col=\"1\" text=\"서비스명\"/><Cell col=\"2\" text=\"메소드\"/><Cell col=\"3\" text=\"파라미터\"/><Cell col=\"4\" text=\"접속자 IP\"/><Cell col=\"5\" text=\"타입\"/><Cell col=\"6\" text=\"사용자\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" text=\"bind:CON_DT\" mask=\"yyyy-MM-dd HH:mm:ss\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:SVC_NM\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:METHOD\"/><Cell col=\"3\" style=\"align:center;color:EXPR(PARAMETER == '' ? '' : '#004db7ff');color2:EXPR(PARAMETER == '' ? '' : '#004db7ff');font:EXPR(PARAMETER == '' ? '9 Dotum' : '9 Dotum bold');cursor:EXPR(PARAMETER == '' ? '' : 'hand');selectcolor:EXPR(PARAMETER == '' ? '' : '#004db7ff');selectfont:EXPR(PARAMETER == '' ? '9 Dotum' : '9 Dotum bold');\" text=\"상세\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:CON_USR_IP\"/><Cell col=\"5\" text=\"bind:TYPE\"/><Cell col=\"6\" text=\"bind:USER_NM\"/></Band></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "10", this.divViewCompBody00);
            obj.set_scrollbars("none");
            obj.set_taborder("7");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Button("btnFold", "absolute", "45.66%", "120", "56", "17", null, null, this);
            obj.set_cssclass("btn_Fold_Close");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Div("divViewCompCond00", "absolute", "0", "0", null, "36", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);
            obj = new Static("staMethod", "absolute", "696", "5", "160", "24", null, null, this.divViewCompCond00);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_taborder("13");
            obj.set_text("메소드명");
            obj.style.set_align("right middle");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Edit("edtMethod", "absolute", "865", "5", "200", "24", null, null, this.divViewCompCond00);
            obj.getSetter("objNm").set("평가서명");
            obj.set_taborder("14");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staType", "absolute", "401", "5", "160", "24", null, null, this.divViewCompCond00);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_taborder("15");
            obj.set_text("타입");
            obj.style.set_align("right middle");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Combo("cboType", "absolute", "570", "5", "120", "24", null, null, this.divViewCompCond00);
            this.divViewCompCond00.addChild(obj.name, obj);
            var cboType_innerdataset = new Dataset("cboType_innerdataset", this.divViewCompCond00.cboType);
            cboType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">성공</Col></Row><Row><Col id=\"codecolumn\">E</Col><Col id=\"datacolumn\">에러</Col></Row></Rows>");
            obj.set_innerdataset(cboType_innerdataset);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("objNm").set("상태");
            obj.set_taborder("16");
            obj = new Div("divCondt", "absolute", "170", "5", "220", "24", null, null, this.divViewCompCond00);
            obj.getSetter("objNm").set("요청일자");
            obj.set_taborder("17");
            obj.set_text("Div01");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staCondt", "absolute", "0", "5", "160", "24", null, null, this.divViewCompCond00);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_taborder("18");
            obj.set_text("접속시간");
            obj.style.set_align("right middle");
            this.divViewCompCond00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 85, this.divViewCompCond01,
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
            		p.set_titletext("프로그램사용이력");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item5","divViewCompCond01.edtIp","value","dsCondition","USER_IP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divViewCompCond00.edtMethod","value","dsCondition","METHOD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divViewCompCond00.cboType","value","dsCondition","TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","divViewCompCond01.cboGubun","value","dsCondition","SVC_NM");
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
        this.registerScript("BSysPgmHist.xfdl", function(exports) {
        /**
         * @파일명       	: BSysPgmHist.xfdl
         * @생성자       	: 송태봉
         * @생성일자     	: 2017. 9. 26.
         * @최종수정자		: 안성민
         * @최종수정일자	: 2017. 11. 06.
        */  

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
        	gfnSetObj("A");

        	var sArgEx = {
        					isTran:"Y", tranNm:"BSysService.searchSysPgmHist", dsParam:this.dsCondition
        				}
        	gfnSetGrdFunc(this.divViewCompBody00.grdList, this.divViewCompBody00.divPaging, this, sArgEx);
         	this.divViewCompCond00.divCondt.fnSetDate(this.dsCondition, "START_DT", "END_DT");
         	this.dsCondition.setColumn(0, "START_DT", gfnAddDay(gfnToday(), -1));
            this.dsCondition.setColumn(0, "END_DT", gfnToday());
         	this.fnFold();
         	
         	this.dsCondition.setColumn(0,"TYPE","");
         	this.dsCondition.setColumn(0,"BRANCH_CD",application.gdsUserInfo.getColumn(0,"BRANCH_CD"));
        	
        	this.fnMethodGubun();
        	this.fnSearch();
        }

        /**
          * @함수명	: fnMethodGubun
          * @desc   : 서비스구분 조회
          */
        this.fnMethodGubun = function()
        {
        	var sSvcID = "readSysMethodGubun";
        	var sController = "epro.sys.service.BSysService.readSysMethodGubun";
        	var sInDatasets = "dsGubun=dsGubun";
        	var sOutDatasets = "dsGubun=dsGubun";
        	var sCallbackFunc = "fnTrCallBack";	
        	
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
          * @함수명	: fnSearch
          * @desc   : 조회
          */
        this.fnSearch = function()
        {
        	if(gfnIsNull(this.dsCondition.getColumn(0,"START_DT"))||gfnIsNull(this.dsCondition.getColumn(0,"END_DT"))){
        		gfnAlert(gfnMultiLabel("EPRO_LABEL_01405"));
        		return;
        	}

        	var sSvcID = "searchSysPgmHist";
        	var sController = "epro.sys.service.BSysService.searchSysPgmHist";
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
          * @desc     	: Transaction Callback함수
          */
        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	if(strErrCd < 0){
        		return;
        	}
        	
        	switch(strSvcID){
        		case "searchSysPgmHist" :
        		break;
        		
        		case "readSysMethodGubun" :
        			this.dsCondition.setColumn(0,"SVC_NM","");
        			
        		break;
         
        		default:
        		break;	
        	}
        }

        /**
          * @함수명	: fnListOncelldblclick
          * @desc   :
          */
        this.fnListOncelldblclick = function(obj,e)
        {
        	if(obj.getCellPos()==3){ 
        		if(this.dsList.getColumn(this.dsList.rowposition,"PARAMETER") != ""){
        			var sArg = {
        						agv_id:this.dsList.getColumn(this.dsList.rowposition,"SN")
        						,agv_Type:"PARAMETER"
        					};
        			gfnModalPop(this, "BSysParameterRead", "BSYS::BSysParameterRead.xfdl", sArg, "", 570, 560);
        		}
        	}
        }

        /**
          * @함수명	: fnOnkeydown
          * @desc   :
          */
        this.fnOnkeydown = function(obj,e)
        {
        	if(e.keycode == "13"){
        		obj.updateToDataset();
        		this.fnSearch();
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.divViewCompCond01.staIp.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.divViewCompCond01.edtIp.addEventHandler("onkeydown", this.fnOnkeydown, this);
            this.divViewCompBody00.grdList.addEventHandler("oncelldblclick", this.fnListOncelldblclick, this);
            this.divViewCompCond00.edtMethod.addEventHandler("onkeydown", this.fnOnkeydown, this);

        };

        this.loadIncludeScript("BSysPgmHist.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
