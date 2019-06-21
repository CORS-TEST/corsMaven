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
                this.set_name("CompGrdFilterPop");
                this.set_titletext("그리드 열 숨기기 및 숨기기 취소");
                this._setFormPosition(0,0,600,244);
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
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\" type=\"STRING\"/><Column id=\"DATA\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DATA\">포함</Col><Col id=\"CODE\">IN</Col></Row><Row><Col id=\"DATA\">비포함</Col><Col id=\"CODE\">NOT_IN</Col></Row><Row><Col id=\"DATA\">같음</Col><Col id=\"CODE\">==</Col></Row><Row><Col id=\"DATA\">다름</Col><Col id=\"CODE\">!=</Col></Row><Row><Col id=\"DATA\">&gt;</Col><Col id=\"CODE\">&gt;</Col></Row><Row><Col id=\"DATA\">&lt;</Col><Col id=\"CODE\">&lt;</Col></Row><Row><Col id=\"DATA\">&gt;=</Col><Col id=\"CODE\">&gt;=</Col></Row><Row><Col id=\"DATA\">&lt;=</Col><Col id=\"CODE\">&lt;=</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFilterList", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"COL_ID\" size=\"256\" type=\"STRING\"/><Column id=\"COL_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsParentGrid", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_ID\" size=\"256\" type=\"STRING\"/><Column id=\"COL_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdItemList", "absolute", "10", "27", "187", "182", null, null, this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsParentGrid");
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"143\"/></Columns><Rows><Row band=\"head\" size=\"27\"/><Row size=\"22\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"No\"/><Cell col=\"1\" expr=\"\" text=\"Column\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"decoratetext\" text=\"bind:COL_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd", "absolute", "210", "80", "45", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text(">>");
            this.addChild(obj.name, obj);

            obj = new Button("btnRemove", "absolute", "210", "130", "45", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_text("<<");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFilter", "absolute", "263", "27", "327", "182", null, null, this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_binddataset("dsFilterList");
            obj.set_taborder("3");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"No\"/><Cell col=\"1\" expr=\"\" text=\"Column\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" displaytype=\"decoratetext\" text=\"bind:COL_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnApply", "absolute", "424", "215", "50", "25", null, null, this);
            obj.set_taborder("4");
            obj.set_text("적용");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel", "absolute", "476", "215", "114", "25", null, null, this);
            obj.set_taborder("5");
            obj.set_text("전체 숨기기 취소");
            this.addChild(obj.name, obj);

            obj = new Static("staTtl", "absolute", "10", "4", "85", "24", null, null, this);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_taborder("6");
            obj.set_text("전체 열");
            this.addChild(obj.name, obj);

            obj = new Static("staTtl00", "absolute", "263", "4", "85", "24", null, null, this);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_taborder("7");
            obj.set_text("숨기기");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 600, 244, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("그리드 열 숨기기 및 숨기기 취소");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("btnRemoveLangBind2017110317184225442","btnRemove","text","gdsLabel","EPRO_LABEL_00494");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("CompGrdColumnHidePop.xfdl", function(exports) {
        /**
         * @파일명       	: CompGrdColumnHidePop.xfdl
         * @생성자       	: 한민희
         * @생성일자     	: 2017. 10. 16.
         * @설명			: 그리드 열 숨기기 및 숨기기 취소
         * @최종수정자		: 한민희
         * @최종수정일자	: 2017. 10. 16.
        */ 

        this.popTitle = gfnMultiLabel("EPRO_LABEL_01412");

        /**
          * @함수명	: fnFormOnload
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.LoadEventInfo(이벤트변수)
          * @desc     	: 폼 onload이벤트
          */
        this.fnFormOnload = function(obj,e)
        {
        	this.dsParentGrid.set_enableevent(false);
        	this.dsFilterList.set_enableevent(false);

        	var ownFrame = this.getOwnerFrame();	
        	var grid = ownFrame.arg_grid;
        	
        	for(i=0; i<grid.getCellCount("Head"); i++){	
        		var sHeadText = grid.getCellProperty("head", i, "text");		
        		if(gfnIsNull(sHeadText)) continue;
        		
        		var nRow = this.dsParentGrid.addRow();
        		
        		var arrBind = grid.getCellProperty("body", i, "text").split("bind:");
        		this.dsParentGrid.setColumn(nRow, "COL_ID", arrBind[1]);
        		
        		this.dsParentGrid.setColumn(nRow, "COL_NM", sHeadText);
        	}
        	
        	if(!gfnIsNull(grid.hidelist)){
        		var arrHideList = grid.hidelist.split("|");
        		for(var i=arrHideList.length-2; i>-1; i=i-2){	
        			var nRow = arrHideList[i-1];
        			var colId = this.dsParentGrid.getColumn(nRow, "COL_ID");
        			var colNm = this.dsParentGrid.getColumn(nRow, "COL_NM");
        			
        			var addRow = this.dsFilterList.addRow();
        			this.dsFilterList.setColumn(addRow, "COL_ID", colId);
        			this.dsFilterList.setColumn(addRow, "COL_NM", colNm);
        		}
        	}
        	
        	this.dsParentGrid.set_rowposition(0);	
        	this.grdFilter.dropdownCombo();
        	this.dsParentGrid.set_enableevent(true);
        	this.dsFilterList.set_enableevent(true);
        }

        /**
          * @함수명	: fnGrdItemListOncelldblclick
          * @input    	: obj:Grid(그리드 오브젝트), e:nexacro.GridClickEventInfo(이벤트변수)
          * @desc     	: 그리드 Oncelldblclick 이벤트시 filter 항목 추가
          */
        this.fnGrdItemListOncelldblclick = function(obj,e)
        {
        	this.fnBtnAddOnclick();
        }

        /**
          * @함수명	: fnBtnAddOnclick
          * @input    	: obj:Button(버튼 오브젝트), e:nexacro.ClickEventInfo(이벤트변수)
          * @desc     	: filter 항목 추가
          */
        this.fnBtnAddOnclick = function(obj,e)
        {
        	var fRow = this.dsFilterList.findRow("COL_ID", this.dsParentGrid.getColumn(this.dsParentGrid.rowposition, "COL_ID"));
        	if(fRow > -1) return;

        	var nRow = this.dsFilterList.addRow();
        	this.dsFilterList.setColumn(nRow, "COL_ID",	this.dsParentGrid.getColumn(this.dsParentGrid.rowposition, "COL_ID"));
        	this.dsFilterList.setColumn(nRow, "COL_NM",	this.dsParentGrid.getColumn(this.dsParentGrid.rowposition, "COL_NM"));}

        /**
          * @함수명	: fnBtnRemoveOnclick
          * @input    	: obj:Button(버튼 오브젝트), e:nexacro.ClickEventInfo(이벤트변수)
          * @desc     	: filter 항목 삭제
          */
        this.fnBtnRemoveOnclick = function(obj,e)
        {
        	this.dsFilterList.deleteRow(this.dsFilterList.rowposition);
        }

        /**
          * @함수명	: fnBtnApplyOnclick
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.KeyEventInfo(이벤트변수)
          * @desc     	: 적용
          */  
        this.CompGrdFilterPopOnkeyup = function(obj,e)
        {
        	//ESC
        	if(e.keycode == 27){
        		this.fnBtnCancelOnclick();
        	}
        	
        	//Enter
        	else if(e.keycode == 13){
        		this.fnBtnApplyOnclick();
        	}
        }

        /**
          * @함수명	: fnBtnCancelOnclick
          * @input    	: obj:Button(버튼 오브젝트), e:nexacro.ClickEventInfo(이벤트변수)
          * @desc     	: 전체 숨기기 취소
          */
        this.fnBtnCancelOnclick = function(obj,e)
        {	
        	var ownFrame = this.getOwnerFrame();	
        	var grid = ownFrame.arg_grid;
        	
        	if(gfnIsNull(grid.hidelist)) return;
        	
        	var arrHideList = grid.hidelist.split("|");	
        	for(var i=arrHideList.length-2;i>-1;i=i-2){
        		grid.setFormatColProperty(arrHideList[i-1], "size", arrHideList[i]);
        	}
        	grid.hidelist = "";
        	
        	this.dsFilterList.deleteAll();
        }

        /**
          * @함수명	: fnBtnApplyOnclick
          * @input    	: obj:Button(버튼 오브젝트), e:nexacro.ClickEventInfo(이벤트변수)
          * @desc     	: 적용
          */  
        this.fnBtnApplyOnclick = function(obj,e)
        {
        	var ownFrame = this.getOwnerFrame();	
        	var grid = ownFrame.arg_grid;
        	var ds = grid.getBindDataset();
        	
        	grid.set_enableevent(false);
        	ds.set_enableevent(false);	
        	
        	if(!gfnIsNull(grid.hidelist)){
        		var arrHideList = grid.hidelist.split("|");	
        		for(var i=arrHideList.length-2;i>-1;i=i-2){
        			grid.setFormatColProperty(arrHideList[i-1], "size", arrHideList[i]);
        		}		
        	}
        	
        	grid.hidelist = "";
        	for(var i=0, x=this.dsFilterList.rowcount; i<x; i++){
        		var nCell = grid.getBindCellIndex( "body", this.dsFilterList.getColumn(i, "COL_ID"));
        		var nCol = grid.getCellProperty("Head", nCell, "col");
        		grid.hidelist += String(nCell) + "|" + grid.getFormatColProperty(nCol, "size") + "|";
        		grid.setFormatColProperty(nCol, "size", 0);
        	}	
        		
        	ds.set_enableevent(true);
        	grid.set_enableevent(true);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ondeactivate", this.commGrdFilterPop_ondeactivate, this);
            this.addEventHandler("onkeyup", this.CompGrdFilterPopOnkeyup, this);
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.grdItemList.addEventHandler("oncelldblclick", this.fnGrdItemListOncelldblclick, this);
            this.btnAdd.addEventHandler("onclick", this.fnBtnAddOnclick, this);
            this.btnRemove.addEventHandler("onclick", this.fnBtnRemoveOnclick, this);
            this.btnApply.addEventHandler("onclick", this.fnBtnApplyOnclick, this);
            this.btnCancel.addEventHandler("onclick", this.fnBtnCancelOnclick, this);

        };

        this.loadIncludeScript("CompGrdColumnHidePop.xfdl", true);

       
    };
}
)();
