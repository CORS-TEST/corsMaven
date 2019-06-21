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
                this.set_name("commDebugDsPop");
                this.set_titletext("디버그 팝업");
                this._setFormPosition(0,0,1080,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_lcDsList", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"NM\" size=\"256\" type=\"STRING\"/><Column id=\"OWNER\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dsData", this);
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

            obj = new Dataset("ds_dsDel", this);
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

            obj = new Dataset("ds_gvDsList", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"NM\" size=\"256\" type=\"STRING\"/><Column id=\"OWNER\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_gvDsData", this);
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

            obj = new Dataset("ds_gvDsDel", this);
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


            
            // UI Components Initialize
            obj = new Tab("Tab00", "absolute", "6", "38", "1058", "715", null, null, this);
            obj.set_scrollbars("autoboth");
            obj.set_tabindex("0");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.Tab00);
            obj.set_text("Form 데이터셋");
            this.Tab00.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "930", "8", "120", "26", null, null, this.Tab00.tabpage1);
            obj.set_taborder("0");
            obj.set_text("가져오기");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "7", "25", "263", "633", null, null, this.Tab00.tabpage1);
            obj.set_autofittype("col");
            obj.set_binddataset("ds_lcDsList");
            obj.set_taborder("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"77\"/><Column size=\"139\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"NM\"/><Cell col=\"1\" expr=\"\" text=\"OWNER\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"readonly\" text=\"bind:NM\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"readonly\" text=\"bind:OWNER\"/></Band></Format></Formats>");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new TextArea("TextArea00", "absolute", "278", "454", "772", "204", null, null, this.Tab00.tabpage1);
            obj.set_taborder("2");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Grid("grd_dsData", "absolute", "278", "41", "772", "205", null, null, this.Tab00.tabpage1);
            obj.set_binddataset("ds_dsData");
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
            obj.set_taborder("3");
            obj._setContents("<Formats></Formats>");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Grid("grd_dsDel", "absolute", "278", "324", "772", "105", null, null, this.Tab00.tabpage1);
            obj.set_binddataset("ds_dsDel");
            obj.set_taborder("4");
            obj._setContents("<Formats></Formats>");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "278", "301", "120", "12", null, null, this.Tab00.tabpage1);
            obj.set_taborder("5");
            obj.set_text("삭제 데이터");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "278", "437", "120", "12", null, null, this.Tab00.tabpage1);
            obj.set_taborder("6");
            obj.set_text("XML");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "278", "25", "120", "12", null, null, this.Tab00.tabpage1);
            obj.set_taborder("7");
            obj.set_text("데이터");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Div("div_paing", "absolute", "26.47%", null, null, "28", "1.23%", "404", this.Tab00.tabpage1);
            obj.set_scrollbars("none");
            obj.set_taborder("8");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.Tab00);
            obj.set_text("Form 컴포넌트");
            this.Tab00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "164", "154", "120", "60", null, null, this.Tab00.tabpage2);
            obj.set_taborder("0");
            obj.set_text("개발예정");
            this.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "39", "44", "128", "41", null, null, this.Tab00.tabpage2);
            obj.set_taborder("1");
            obj.set_text("서비스 경로");
            this.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Button("btn_svcChk", "absolute", "152", "54", "77", "21", null, null, this.Tab00.tabpage2);
            obj.set_taborder("2");
            obj.set_text("확인");
            this.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "237", "55", "607", "20", null, null, this.Tab00.tabpage2);
            obj.set_taborder("3");
            this.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Tabpage("tabpage3", this.Tab00);
            obj.set_text("Global 데이터셋");
            this.Tab00.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "7", "25", "263", "633", null, null, this.Tab00.tabpage3);
            obj.set_autofittype("col");
            obj.set_binddataset("ds_gvDsList");
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"77\"/><Column size=\"139\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"NM\"/><Cell col=\"1\" expr=\"\" text=\"OWNER\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"readonly\" text=\"bind:NM\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"readonly\" text=\"bind:OWNER\"/></Band></Format></Formats>");
            this.Tab00.tabpage3.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "278", "25", "120", "12", null, null, this.Tab00.tabpage3);
            obj.set_taborder("1");
            obj.set_text("데이터");
            this.Tab00.tabpage3.addChild(obj.name, obj);
            obj = new Grid("grd_dsData", "absolute", "278", "41", "772", "232", null, null, this.Tab00.tabpage3);
            obj.set_binddataset("ds_gvDsData");
            obj.set_taborder("2");
            obj._setContents("<Formats></Formats>");
            this.Tab00.tabpage3.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "278", "301", "120", "12", null, null, this.Tab00.tabpage3);
            obj.set_taborder("3");
            obj.set_text("삭제 데이터");
            this.Tab00.tabpage3.addChild(obj.name, obj);
            obj = new Grid("grd_dsDel", "absolute", "278", "324", "772", "105", null, null, this.Tab00.tabpage3);
            obj.set_binddataset("ds_gvDsDel");
            obj.set_taborder("4");
            obj._setContents("<Formats></Formats>");
            this.Tab00.tabpage3.addChild(obj.name, obj);
            obj = new TextArea("TextArea00", "absolute", "278", "454", "772", "204", null, null, this.Tab00.tabpage3);
            obj.set_taborder("5");
            this.Tab00.tabpage3.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "278", "437", "120", "12", null, null, this.Tab00.tabpage3);
            obj.set_taborder("6");
            obj.set_text("XML");
            this.Tab00.tabpage3.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "930", "8", "120", "26", null, null, this.Tab00.tabpage3);
            obj.set_taborder("7");
            obj.set_text("가져오기");
            this.Tab00.tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "0", "30", "30", "8", null, this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab00.tabpage1,
            	//-- Layout function
            	function(p) {
            		p.set_text("Form 데이터셋");

            	}
            );
            this.Tab00.tabpage1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab00.tabpage2,
            	//-- Layout function
            	function(p) {
            		p.set_text("Form 컴포넌트");

            	}
            );
            this.Tab00.tabpage2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab00.tabpage3,
            	//-- Layout function
            	function(p) {
            		p.set_text("Global 데이터셋");

            	}
            );
            this.Tab00.tabpage3.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1080, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("commDebugDsPop");
            		p.set_titletext("디버그 팝업");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("Static01LangBind2017110317184213996","Tab00.tabpage2.Static01","text","gdsLabel","EPRO_LABEL_00330");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Button00LangBind2017110317184219983","Tab00.tabpage1.Button00","text","gdsLabel","EPRO_LABEL_00563");
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
        this.registerScript("CompDebugFormPop.xfdl", function(exports) {
        /**
           @file       CompDebugFormPop.xfdl
           @desc       디버그 팝업
           @author     김현욱
           @makedate   2015.09.08
           @history    
        */

        

        this.workForm = this.opener.divWork;

        /**
        	@function	commDebugDsPop_onload()
        	@desc   	폼 oninit 이벤트
        */
        this.commDebugDsPop_onload = function(obj,e)
        {
        	var objFrame = this.getOwnerFrame();
        	if(objFrame.agv_isPop == "Y") this.workForm = this.opener;	
        	
        	//로컬 데이터셋 가져오기
        	this.Tab00_tabpage1_Button00_onclick();
        	
        	//그리드 공통버튼 설정
        	this.Tab00.tabpage1.div_paing.fnDivGrdComBtnsInit(obj, this.Tab00.tabpage1.grd_dsData);
        		
        	//그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기
        	gfnSetGrdFunc(this.Tab00.tabpage1.grd_dsData);
        		
        }
         
        /**
        	@function	Tab00_tabpage1_Button00_onclick()
        	@desc   	로컬 데이터셋 가져오기
        */
        this.Tab00_tabpage1_Button00_onclick = function(obj,e)
        {
        	this.ds_lcDsList.set_enableevent(false);
        	this.ds_lcDsList.clearData();
        	this.fn_getLocalDatasets(this.workForm);
        	this.ds_lcDsList.set_rowposition(-1);
        	this.ds_lcDsList.set_enableevent(true);
        }

         
        /**
        	@function	ds_lcDsList_onrowposchanged()
        	@desc   	로컬 데이터셋
        */
        this.ds_lcDsList_onrowposchanged = function(obj,e)
        {
        	var id = obj.getColumn(e.newrow, "NM");
        	var owner = obj.getColumn(e.newrow, "OWNER");
        	var ds = this.fn_getDataset(owner, id);
        	
        	this.fn_DescriptDataset(ds, this.Tab00.tabpage1.grd_dsData, this.Tab00.tabpage1.grd_dsDel);
        	
        	this.Tab00.tabpage1.TextArea00.set_value(ds.saveXML());
        }
         
        /**
        	@function	ds_gvDsList_onrowposchanged()
        	@desc   	글로벌 데이터셋
        */
        this.ds_gvDsList_onrowposchanged = function(obj,e)
        {
        	var id = obj.getColumn(e.newrow, "NM");
        	var owner = obj.getColumn(e.newrow, "OWNER");
        	var ds = this.fn_getDataset(owner, id);
        	
        	this.fn_DescriptDataset(ds, this.Tab00.tabpage3.grd_dsData, this.Tab00.tabpage3.grd_dsDel);
        	
        	this.Tab00.tabpage3.TextArea00.set_value(ds.saveXML());
        }

        /**
        	@function	Tab00_tabpage3_Button00_onclick()
        	@desc   	글로벌 데이터셋 가져오기
        */
        this.Tab00_tabpage3_Button00_onclick = function(obj,e)
        {
        	this.ds_gvDsList.set_enableevent(false);
        	this.ds_gvDsList.clearData();
        	this.fn_getGvDatasets();
        	this.ds_gvDsList.set_rowposition(-1);
        	this.ds_gvDsList.set_enableevent(true);
        }
         
        /**
        	@function	fn_getLocalDatasets()
        	@desc   	로컬 데이터셋 가져오기
        */
        this.fn_getLocalDatasets = function(owner)
        {
            if(!(owner instanceof Tab))
            {
                 for(var i=0,size=owner.objects.length; i<size; i++)
                 {
                     var obj = owner.objects[i];
                     if(!(obj instanceof Dataset)) continue;

                     var nRow = this.ds_lcDsList.addRow();
                    
                     if(owner == this.workForm){
                         this.ds_lcDsList.setColumn(nRow, "OWNER", "this");
                         this.ds_lcDsList.setColumn(nRow, "NM", obj.name);
                     }else{
                         this.ds_lcDsList.setColumn(nRow, "OWNER", this.fn_fullId(owner));
                         this.ds_lcDsList.setColumn(nRow, "NM", obj.name);
                     }
                 }
            }
            
            for(var i=0; i<owner.components.length; i++)
            {
                var oComp = owner.components[i];

        		if(oComp instanceof Div || oComp instanceof Tab || oComp instanceof Tabpage){
                    this.fn_getLocalDatasets(oComp);
        		}
            }
        }

        /**
        	@function	fn_getGvDatasets()
        	@desc   	fn_getGvDatasets
        */
        this.fn_getGvDatasets = function()
        {
        	var appAll = application.all;
        	for(var i=0; i< appAll.length;i++)
        	{
        		if(!(appAll[i] instanceof Dataset)) continue;

        		var nRow = this.ds_gvDsList.addRow();
        		this.ds_gvDsList.setColumn(nRow, "OWNER", "application");
        		this.ds_gvDsList.setColumn(nRow, "NM", appAll[i].name);
        	}
        }

        /**
        	@function	fn_fullId()
        	@desc   	fn_fullId
        */
        this.fn_fullId = function(obj)
        {
            var sId = "";
            var rtn = "";
            do{
                sId = obj.name + "." +sId;
                obj = obj.parent;
            }while(obj != undefined && (obj+"") != "[object Form]" );
            
                
            if(sId.charAt(0) == "."){
                rtn = sId.substring(1, sId.length-1);
            }else{
                rtn =  sId.substring(0, sId.length-1);
            }
            
            if(rtn.indexOf(this.workForm.name) == 0)
            {
        		rtn = rtn.replace(this.workForm.name, "this");
            } 
            
            return rtn;
        }
         
        /**
        	@function	fn_getDataset()
        	@desc   	데이터셋 가져오기
        */
        this.fn_getDataset = function(sOwner,sDatasetName)
        {
        	switch(sOwner){
        		case "application":
        			return application.all[sDatasetName];
        		case "this":
        			return this.workForm[sDatasetName];
        		default:
        			if(this.workForm == this.opener)
        			{
        				return eval(sOwner +"." + sDatasetName);
        			}
        			else
        			{
        				var	sOwner = sOwner.replace("this", "");
        				return eval("this.opener.divWork" + sOwner +"." + sDatasetName);
        			}			
        	}
        }

        /**
        	@function	btn_close_onclick()
        	@desc   	닫기
        */
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        /**
        	@function	fn_DescriptDataset()
        	@desc   	그리드에 데이터셋 표현
        */
        this.fn_DescriptDataset = function(ds,objGrid,objDelGrid)
        {
        	var objDataDs = objGrid.getBindDataset();
        	var objDataDelDs = objDelGrid.getBindDataset();
        	
        	objDataDs.assign(ds);
        	
        	objDataDelDs.copyData(ds);
        	objDataDelDs.clearData();
        	
        	var aryObj = objDataDs.getDeletedRowset();
        	if(!gfnIsNull(aryObj)){
        		if( aryObj.length > 0 )
        		{
        			for(var i = 0 ; i < aryObj.length ; i++ ){
        				var nRow = objDataDelDs.addRow();
        				for( var j = 0 ; j < aryObj[i].length ; j++ ){
        					objDataDelDs.setColumn(i,j, aryObj[i][j] );
        				}
        			}
        		}
        		
        		////objDelGrid.set_binddataset("ds_dsDel");
        		objDelGrid.createFormat();		
        		objDelGrid.insertContentsCol('body', 0);
        		objDelGrid.setCellProperty("head", 0, "text", "No");
        		objDelGrid.setCellProperty("body", 0, "expr", "currow+1");
        	}

        	
        	objDataDs.set_filterstr(ds.filterstr);
        	
        	if(ds.getColCount() < 1 ) return;	

        	objGrid.createFormat();
        	
        	objDataDs.addColumn("rowType", 'string');

        	for(var i=0,size=objDataDs.rowcount; i<size; i++)
        	{
        		var sRowTypeText = "";
        		switch(objDataDs.getRowType(i)){
        			case Dataset.ROWTYPE_EMPTY : sRowTypeText = "empty"; break;
        			case Dataset.ROWTYPE_NORMAL: sRowTypeText = "normal"; break;
        			case Dataset.ROWTYPE_INSERT: sRowTypeText = "insert"; break;
        			case Dataset.ROWTYPE_UPDATE: sRowTypeText = "update"; break;
        			case Dataset.ROWTYPE_DELETE: sRowTypeText = "delete"; break;
        			case Dataset.ROWTYPE_GROUP : sRowTypeText = "group"; break;
        		}
        		
        		objDataDs.setColumn(i, "rowType", sRowTypeText);
        	}	
        	
        	if(objDataDs.getRowCount() > 0)
        	{
        		objGrid.insertContentsCol('body', 0);
        		objGrid.setCellProperty("head", 0, "text", "No");
        		objGrid.setCellProperty("body", 0, "expr", "currow+1");
        		
        		objGrid.setRealColSize(0, 40);
        		
        		//rowType 
        		objGrid.insertContentsCol('body', 1);
        		objGrid.setCellProperty("head", 1, "text", "rowType");
        		objGrid.setCellProperty("body", 1, "text", "bind:rowType");
        		
        		objGrid.setRealColSize(1, 70);
        		
        		for(var i=0,size=objDataDs.getColCount(); i<size; i++){
        			objGrid.setCellProperty("body", i, "displaytype", "normal");
        			objGrid.setCellProperty("body", i, "edittype", "normal");
        		}
        	}

        	objGrid.set_cellsizingtype('col');
        }

        /**
        	@function	Tab00_onchanged()
        	@desc   	Tab00 onchange 이벤트
        */
        this.Tab00_onchanged = function(obj,e)
        {
        	if(e.postindex == 2)
        	{
        		if(this.ds_gvDsList.rowcount == 0)
        		{
        			//글로벌 데이터셋 가져오기
        			this.Tab00_tabpage3_Button00_onclick();
        		}
        	}
        }

        /**
        	@function	Tab00_tabpage2_btn_svcChk_onclick()
        	@desc   	svcChk_onclick 이벤트
        */
        this.Tab00_tabpage2_btn_svcChk_onclick = function(obj,e)
        {
        	this.Tab00.tabpage2.Edit00.set_value(application.services["svcurl"].url);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_lcDsList.addEventHandler("onrowposchanged", this.ds_lcDsList_onrowposchanged, this);
            this.ds_gvDsList.addEventHandler("onrowposchanged", this.ds_gvDsList_onrowposchanged, this);
            this.addEventHandler("onload", this.commDebugDsPop_onload, this);
            this.Tab00.addEventHandler("onchanged", this.Tab00_onchanged, this);
            this.Tab00.tabpage1.Button00.addEventHandler("onclick", this.Tab00_tabpage1_Button00_onclick, this);
            this.Tab00.tabpage2.btn_svcChk.addEventHandler("onclick", this.Tab00_tabpage2_btn_svcChk_onclick, this);
            this.Tab00.tabpage3.Button00.addEventHandler("onclick", this.Tab00_tabpage3_Button00_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);

        };

        this.loadIncludeScript("CompDebugFormPop.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
