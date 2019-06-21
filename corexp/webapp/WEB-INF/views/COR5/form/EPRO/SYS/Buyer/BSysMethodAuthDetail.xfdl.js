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
                this.set_name("BSysMethodAuthDetail");
                this.set_titletext("메소드권한");
                this._setFormPosition(0,0,1220,711);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCondition", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_NM\" size=\"256\" type=\"STRING\"/><Column id=\"METHOD\" size=\"256\" type=\"STRING\"/><Column id=\"CHECKED\" size=\"256\" type=\"STRING\"/><Column id=\"SELECTED_SVC\" size=\"256\" type=\"STRING\"/><Column id=\"SELECTED_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAuth", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGubun", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCheck", this);
            obj._setContents("<ColumnInfo><Column id=\"CHECKED\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CHECKED\">Y</Col></Row><Row><Col id=\"CHECKED\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTmp", this);
            obj._setContents("<ColumnInfo><Column id=\"SVC_NM\" size=\"256\" type=\"STRING\"/><Column id=\"METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSvc", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompBody00", "absolute", "0", "46", null, null, "617", "0", this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "41", null, null, "0", "10", this.divViewCompBody00);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj.getSetter("objNm").set("검색결과 그리드");
            obj.set_taborder("6");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"160\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" cssclass=\"Cellgrd_essential\" text=\"서비스명\"/><Cell col=\"2\" cssclass=\"Cellgrd_essential\" text=\"메소드\"/><Cell col=\"3\" text=\"설명\"/><Cell col=\"4\" text=\"권한체크여부\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"expr:UP_YN == 'Y' ? 'none' : 'text'\" style=\"align:left;\" text=\"bind:SVC_NM\" editdisplay=\"expr:UP_YN == 'Y' ? 'edit' : 'display'\"/><Cell col=\"2\" edittype=\"expr:UP_YN == 'Y' ? 'none' : 'text'\" style=\"align:left;\" text=\"bind:METHOD\"/><Cell col=\"3\" edittype=\"text\" style=\"align:left;\" text=\"bind:EXPLN\"/><Cell col=\"4\" edittype=\"combo\" text=\"bind:AUTHCHK\" combodataset=\"dsCheck\" combocodecol=\"CHECKED\" combodatacol=\"CHECKED\"/></Band></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnAdd", "absolute", null, "10", "60", "24", "65", null, this.divViewCompBody00);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("코드그룹추가버튼");
            obj.set_taborder("7");
            obj.set_text("추가");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnDel", "absolute", null, "10", "60", "24", "0", null, this.divViewCompBody00);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("코드그룹삭제버튼");
            obj.set_taborder("8");
            obj.set_text("삭제");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "10", "254", "24", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("9");
            obj.set_text("메소드관리");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Div("divViewCompCond00", "absolute", "0", "0", null, "36", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);
            obj = new Static("staMethod", "absolute", "511", "5", "126", "24", null, null, this.divViewCompCond00);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_taborder("10");
            obj.set_text("메소드명");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Edit("edtMethod", "absolute", "637", "5", "150", "24", null, null, this.divViewCompCond00);
            obj.getSetter("objNm").set("평가서명");
            obj.set_taborder("11");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staGubun", "absolute", "0", "5", "111", "24", null, null, this.divViewCompCond00);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_taborder("12");
            obj.set_text("서비스구분");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Combo("cboGubun", "absolute", "111", "5", "120", "24", null, null, this.divViewCompCond00);
            this.divViewCompCond00.addChild(obj.name, obj);
            obj.set_codecolumn("SVC_ID");
            obj.set_datacolumn("SVC_GUBUN");
            obj.set_innerdataset("@dsGubun");
            obj.getSetter("objNm").set("상태");
            obj.set_taborder("13");
            obj = new Static("staCheck", "absolute", "239", "5", "135", "24", null, null, this.divViewCompCond00);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_taborder("14");
            obj.set_text("권한체크여부");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Combo("cboGubun00", "absolute", "374", "5", "120", "24", null, null, this.divViewCompCond00);
            this.divViewCompCond00.addChild(obj.name, obj);
            var cboGubun00_innerdataset = new Dataset("cboGubun00_innerdataset", this.divViewCompCond00.cboGubun00);
            cboGubun00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(cboGubun00_innerdataset);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("objNm").set("상태");
            obj.set_taborder("15");

            obj = new Div("divViewCompBody01", "absolute", null, "46", "550", null, "15", "0", this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);
            obj = new Grid("grdAuth", "absolute", "0", "41", null, null, "0", "10", this.divViewCompBody01);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsAuth");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj.getSetter("objNm").set("검색결과 그리드");
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"200\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"\"/><Cell col=\"1\" expr=\"\" text=\"권한ID\"/><Cell col=\"2\" expr=\"\" text=\"권한명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:ROLE_ID\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:ROLE_NM_LO\"/></Band></Format></Formats>");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle02", "absolute", "0", "10", "254", "24", null, null, this.divViewCompBody01);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("1");
            obj.set_text("권한관리");
            this.divViewCompBody01.addChild(obj.name, obj);


            
            // Layout Functions
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
            obj = new Layout("default", "", 550, 0, this.divViewCompBody01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");

            	}
            );
            this.divViewCompBody01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1220, 711, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("frmSearchCond");
            		p.set_titletext("메소드권한");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","divViewCompCond00.cboGubun","value","dsCondition","SVC_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divViewCompCond00.edtMethod","value","dsCondition","METHOD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","divViewCompCond00.cboGubun00","value","dsCondition","CHECKED");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("BSysMethodAuthDetail.xfdl", function(exports) {
        /**
         * @파일명       	: BSysMethodAuthDetail.xfdl
         * @생성자       	: 송태봉
         * @생성일자     	: 2017. 9. 19.
         * @최종수정자		: 안성민
         * @최종수정일자	: 2017. 11. 08.
        */  

        /**
          * @함수명	: fnFormOnload
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.LoadEventInfo(이벤트변수)
          * @desc     	: 폼 onload이벤트
          */
        this.fnFormOnload = function(obj,e)
        {
        	gfnSetGrdFunc(this.divViewCompBody00.grdList, null, this);
        	gfnSetGrdFunc(this.divViewCompBody01.grdAuth, null, this);
        	gfnSetObj("A");
        	
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
        	var sSvcID = "readSysMethod";
        	var sController = "epro.sys.service.BSysService.readSysMethod";
        	var sInDatasets = "dsCondition=dsCondition";
        	var sOutDatasets = "dsAuth=dsAuth dsList=dsList";
        	var sCallbackFunc = "fnTrCallBack";	
        	
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
          * @함수명	: fnMethodCheck
          * @desc   : 중복체크
          */
        this.fnMethodCheck = function()
        {
        	var sSvcID = "readMethodCheck";
        	var sController = "epro.sys.service.BSysService.readMethodCheck";
        	var sInDatasets = "dsTmp=dsTmp";
        	var sOutDatasets = "";
        	var sCallbackFunc = "fnTrCallBack";	
        	
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
          * @함수명	: fnPreSave
          * @desc   : 저장전 체크
          */
        this.fnPreSave = function()
        {	
        	var check = false;
        	var arr = [];
        	this.dsTmp.clearData();

        	for(var i = 0 ; i < this.dsList.rowcount ; i++){
        		if(this.dsList.getColumn(i,"UP_YN") != "Y"){
        			if(this.dsList.getColumn(i,"SVC_NM") == gfnMultiLabel("EPRO_LABEL_00707")){
        				var msg = gfnMultiLabel("EPRO_LABEL_00755"); //"서비스명을 선택 해 주세요."
        				var type = gfnMultiLabel("EPRO_LABEL_00753"); //"필수체크"
        				var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        				arr.push(objParam);
        				
        			} else if(gfnIsNull(this.dsList.getColumn(i,"METHOD"))){
        				var msg = gfnMultiLabel("EPRO_LABEL_00756"); //"메소드를 입력 해 주세요."
        				var type = gfnMultiLabel("EPRO_LABEL_00753"); //"필수체크"
        				var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        				arr.push(objParam);
        				
        			} else{
        				check = true;
        				var nRow = this.dsTmp.addRow();
        				this.dsTmp.copyRow(nRow,this.dsList,i);
        			}
        		}
        	}
        	
        	if(!gfnValidate(this, false, arr)) return;
        	
        	if(check){
        		this.fnMethodCheck();
        		return false;
        	}
        	
        	if(this.dsTmp.rowcount == 0) this.dsTmp.addRow();
        	
        	if(!gfnConfirm("EPRO_LABEL_00001")) return false;
        	
        	return true;
        }

        
        /**
          * @함수명	: fnSave
          * @desc   : 저장
          */
        this.fnSave = function()
        {
        	if(!this.fnPreSave()) return;
        	
        	var sSvcID = "saveMethodAuth";
        	var sController = "epro.sys.service.BSysService.saveMethodAuth";
        	var sInDatasets = "dsList=dsList:A dsAuth=dsAuth dsCondition=dsCondition";
        	var sOutDatasets = "dsList=dsList";
        	var sCallbackFunc = "fnTrCallBack";	
        	
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
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
        		case "readSysMethod" :
        			this.dsList.set_rowposition(1);
        			this.dsList.set_rowposition(0);
        		break;
        		
        		case "readMethodAuth" :
        		break;
        		
        		case "readSysMethodGubun" :
        			this.dsSvc.copyData(this.dsGubun);
        			this.dsSvc.setColumn(0,"SVC_ID",gfnMultiLabel("EPRO_LABEL_00707"));
        			
        			this.dsCondition.setColumn(0,"CHECKED","");
        			this.dsCondition.setColumn(0,"SVC_NM","");
        			
        		break;
        		
        		case "readMethodCheck": 
        			if(strErrMsg != ""){
        				var arr = [];
        				var str = strErrMsg.split(',');
        				for(var i = 0 ; i < str.length ; i++){
        					var msg = str[i] + gfnMultiLabel("EPRO_LABEL_00757");
        					var type = gfnMultiLabel("EPRO_LABEL_00757");
        					var objParam = {agv_msg:msg, agv_type:type};
        					arr.push(objParam);	
        				}
        				
        				if(!gfnValidate(this, false, arr)) return;
        			}
        			
        			if(!gfnConfirm("EPRO_LABEL_00001")) return;
        			
        			var sSvcID = "saveMethodAuth";
        			var sController = "epro.sys.service.BSysService.saveMethodAuth";
        			var sInDatasets = "dsList=dsList:A dsCondition=dsCondition";
        			var sOutDatasets = "dsList=dsList";
        			var sCallbackFunc = "fnTrCallBack";	
        			
        			gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        			
        		break;
        		
        		case "saveMethodAuth" :
        			gfnAlert(strErrMsg);
        			this.fnSearch();
        		break;
         
        		default:
        		break;	
        	}
        }

        /**
          * @함수명	: fnOnrowposchanged
          * @desc   : 메소드 선택시 메소드의 권한을 보여준다
          */
        this.fnOnrowposchanged = function(obj,e)
        {
        	var roleId = this.dsList.getColumn(this.dsList.rowposition, "ROLE_ID");
        	var arrRoleId = ""
        	if(!gfnIsNull(roleId)) var arrRoleId = roleId.split(",");
        	this.dsAuth.set_enableevent(false);	
        	for(var i=0; i<this.dsAuth.getRowCount(); i++) {
        		this.dsAuth.setColumn(i, "CHECKED", "0");
        	}
         	for(var i=0; i<arrRoleId.length; i++) {
         		var fRow = this.dsAuth.findRow("ROLE_ID", arrRoleId[i]);
         		this.dsAuth.setColumn(fRow, "CHECKED", "1");
         	} 	
         	this.dsAuth.set_enableevent(true);	
        }

        /**
          * @함수명	: fnOnkeydown
          * @desc   : 키다운 이벤트
          */
        this.fnOnkeydown = function(obj,e)
        {
        	if(e.keycode == "13"){
        		obj.updateToDataset();
        		this.fnSearch();
        	}
        }

        /**
          * @함수명	: fnAdd
          * @desc   : 추가버튼 클릭이벤트
          */
        this.fnAdd = function(obj,e)
        {
        	var nRow = this.dsList.addRow();
        	this.dsList.setColumn(nRow,"AUTHCHK","Y");
        	this.dsList.setColumn(nRow,"ROLE_ID","");
        }

        /**
          * @함수명	: fnDel
          * @desc   : 삭제버튼 클릭이벤트
          */
        this.fnDel = function(obj,e)
        {	
        	this.dsList.set_enableevent(false);

        	if(this.dsList.getMax("CHECKED") == 0){
        		this.dsList.set_enableevent(true);
        		gfnAlert("EPRO_LABEL_00759");
        		return;
        		
        	} else{
        		if(!gfnConfirm(gfnMultiLabel("EPRO_LABEL_00760"))){
        			this.dsList.set_enableevent(true);
        			return;
        			
        		} else{
        			for(var i = this.dsList.rowcount ; i >= 0 ; i--){
        				if(this.dsList.getColumn(i,"CHECKED") == "1"){
        					this.dsList.deleteRow(i);
        				}
        			}
        			this.dsList.set_enableevent(true);
        		}
        	}
        }

        /**
          * @함수명	: fnGrdAuthOnheadclick
          * @desc   : 권한전체 추가/삭제
          */
        this.fnGrdAuthOnheadclick = function(obj,e)
        {	
        	if(e.col == 0) {
        		var strVal = obj.getCellProperty("head", e.cell, "expr");
        		if(0 == strVal) {
        			this.dsList.setColumn(this.dsList.rowposition, "ROLE_ID", "");
        			var str = ""
        			for(var i=0; i<this.dsAuth.getRowCount(); i++) {
        				if(i==0) {
        					str += this.dsAuth.getColumn(i,"ROLE_ID");
        				} else {
        					str += ","+this.dsAuth.getColumn(i,"ROLE_ID");
        				}
        			}
        			this.dsList.setColumn(this.dsList.rowposition, "ROLE_ID", str);			
        		} else {
        			this.dsList.setColumn(this.dsList.rowposition, "ROLE_ID", "");
        		}
        	}
        }

        /**
          * @함수명	: fnAuthOncolumnChanged
          * @desc   : 권한 추가/삭제
          */
        this.fnAuthOncolumnChanged = function(obj,e)
        {
        	if(e.columnid == "CHECKED") {
        		//메소드가 가지고 있는 권한
        		var methodRoleId = this.dsList.getColumn(this.dsList.rowposition, "ROLE_ID");
        		//선택한 권한
        		var authId = obj.getColumn(e.row, "ROLE_ID");
        	
        		//권한추가
        		if("1" == obj.getColumn(e.row, "CHECKED")) {
        			if(gfnIsNull(methodRoleId)) {
        				this.dsList.setColumn(this.dsList.rowposition, "ROLE_ID", authId);
        				return;
        			} else {
        				var arrRoldeId = methodRoleId.split(",");
        				for(var i=0; i<arrRoldeId.length; i++) {
        					if(arrRoldeId[i] == authId) {
        						return;
        					}
        				}
        				this.dsList.setColumn(this.dsList.rowposition, "ROLE_ID", methodRoleId + "," + authId);
        			}
        		} //권한삭제
        		else if("0" == obj.getColumn(e.row, "CHECKED")) { 
        			var arrRoldeId = methodRoleId.split(",");
        			var strId = "";
        			var cnt = 0
        			for(var i=0; i<arrRoldeId.length; i++) {
        				if(arrRoldeId[i] != authId) {
        					if(cnt == 0) {
        						strId += arrRoldeId[i]
        						cnt++;
        					} else {
        						strId += ","+arrRoldeId[i]
        					}
        				}
        			}
        			this.dsList.setColumn(this.dsList.rowposition, "ROLE_ID", strId);
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsList.addEventHandler("onrowposchanged", this.fnOnrowposchanged, this);
            this.dsAuth.addEventHandler("oncolumnchanged", this.fnAuthOncolumnChanged, this);
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.divViewCompBody00.btnAdd.addEventHandler("onclick", this.fnAdd, this);
            this.divViewCompBody00.btnDel.addEventHandler("onclick", this.fnDel, this);
            this.divViewCompCond00.edtMethod.addEventHandler("onkeydown", this.fnOnkeydown, this);
            this.divViewCompBody01.grdAuth.addEventHandler("onheadclick", this.fnGrdAuthOnheadclick, this);

        };

        this.loadIncludeScript("BSysMethodAuthDetail.xfdl", true);

       
    };
}
)();
