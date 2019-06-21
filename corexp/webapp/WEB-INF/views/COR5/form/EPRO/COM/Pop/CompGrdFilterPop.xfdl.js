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
                this.set_titletext("그리드 필터 팝업");
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
            obj._setContents("<ColumnInfo><Column id=\"COL_ID\" size=\"256\" type=\"STRING\"/><Column id=\"COL_NM\" size=\"256\" type=\"STRING\"/><Column id=\"CONDITION\" size=\"256\" type=\"STRING\"/><Column id=\"KEYWORD\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsParentGrid", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_ID\" size=\"256\" type=\"STRING\"/><Column id=\"COL_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdItemList", "absolute", "10", "10", "187", "199", null, null, this);
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

            obj = new Grid("grdFilter", "absolute", "263", "10", "327", "199", null, null, this);
            obj.set_autofittype("col");
            obj.set_binddataset("dsFilterList");
            obj.set_taborder("3");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"No\"/><Cell col=\"1\" expr=\"\" text=\"Column\"/><Cell col=\"2\" expr=\"\" text=\"condition\"/><Cell col=\"3\" expr=\"\" text=\"keyword\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" displaytype=\"decoratetext\" text=\"bind:COL_NM\"/><Cell col=\"2\" combocodecol=\"CODE\" combodatacol=\"DATA\" combodataset=\"dsCondition\" combodisplay=\"display\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:CONDITION\"/><Cell col=\"3\" editdisplay=\"display\" edittype=\"text\" text=\"bind:KEYWORD\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnApply", "absolute", "488", "215", "50", "25", null, null, this);
            obj.set_taborder("4");
            obj.set_text("적용");
            this.addChild(obj.name, obj);

            obj = new Button("btnInit", "absolute", "540", "215", "50", "25", null, null, this);
            obj.set_taborder("5");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 600, 244, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("그리드 필터 팝업");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("CompGrdFilterPop.xfdl", function(exports) {
        /**
         * @파일명       	: CompGrdFilterPop.xfdl
         * @생성자       	: 한민희
         * @생성일자     	: 2017. 9. 4.
         * @설명			: 필터
         * @최종수정자		: 한민희
         * @최종수정일자	: 2017. 9. 4.
        */ 

        this.popTitle = gfnMultiLabel("EPRO_LABEL_01413");

        /**
          * @함수명	: fnFormOnload
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.LoadEventInfo(이벤트변수)
          * @desc     	: 폼 onload이벤트
          */
        this.fnFormOnload = function(obj,e)
        {
        	var ownFrame = this.getOwnerFrame();	
        	var grid = ownFrame.arg_grid;
        	
        	//그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기
        	gfnSetGrdFunc(this.grdFilter, null, this);

        	for(i=0; i<grid.getCellCount("Head"); i++){	
        		var sHeadText = grid.getCellProperty("head", i, "text");		
        		if(gfnIsNull(sHeadText)) continue;
        		
        		var nRow = this.dsParentGrid.addRow();
        		
        		var arrBind = grid.getCellProperty("body", i, "text").split("bind:");
        		this.dsParentGrid.setColumn(nRow, "COL_ID", arrBind[1]);
        		
        		this.dsParentGrid.setColumn(nRow, "COL_NM", sHeadText);
        	}
        	
        	this.dsParentGrid.set_rowposition(0);
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
        	this.dsFilterList.setColumn(nRow, "COL_NM",	this.dsParentGrid.getColumn(this.dsParentGrid.rowposition, "COL_NM"));
        	this.dsFilterList.setColumn(nRow, "CONDITION", "");
        	this.dsFilterList.setColumn(nRow, "KEYWORD", 	"");
        }

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
        		this.fnbtnInitOnclick();
        	}
        	
        	//Enter
        	else if(e.keycode == 13){
        		this.fnBtnApplyOnclick();
        	}
        }

        /**
          * @함수명	: fnbtnInitOnclick
          * @input    	: obj:Button(버튼 오브젝트), e:nexacro.ClickEventInfo(이벤트변수)
          * @desc     	: 닫기
          */
        this.fnbtnInitOnclick = function(obj,e)
        {
        	var ownFrame = this.getOwnerFrame();
        	var grid = ownFrame.arg_grid;
        	
        	grid.set_enableevent(false);
        	grid.set_formats(grid.orgFormatBak);
        	grid.set_enableevent(true);
        	
        	var ds = grid.getBindDataset();
        	ds.filter("");
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
        	var divPaging = ownFrame.arg_divPaging;	
        	var ds = grid.getBindDataset();
        	
        	grid.set_enableevent(false);
        	ds.set_enableevent(false);
        	
        	var expr = "";
        	
        	for(i=0; i<this.dsFilterList.getRowCount(); i++){	
        	
        		var colId = this.dsFilterList.getColumn(i, "COL_ID");		
        		var condition = this.dsFilterList.getColumn(i, "CONDITION");				 
        		var keyword = this.dsFilterList.getColumn(i, "KEYWORD");
        		
        		if(gfnIsNull(condition) || gfnIsNull(keyword)){
        			gfnAlert("입력하지 않은 행이 존재합니다.");
        			return;
        		}

        		if(condition == "IN"){
        			expr += "(";
        			expr += " String(" + colId + ").indexOf('" + keyword.toUpperCase() + "') >= 0";			
        			expr += " || ";
        			expr += " String(" + colId + ").indexOf('" + keyword.toLowerCase() + "') >= 0";			
        			expr += ")";
        		}else if(condition == "NOT_IN"){
        			expr += "(";
        			expr += " String(" + colId + ").indexOf('" + keyword.toUpperCase() + "') < 0";
        			expr += " && ";
        			expr += " String(" + colId + ").indexOf('" + keyword.toLowerCase() + "') < 0";
        			expr += ")";
        		}else{
        			expr += "(";
        			expr += colId + condition + "'" + keyword.toUpperCase() + "'";
        			expr += condition == "==" ? " || " : " && ";
        			expr += colId + condition + "'" + keyword.toLowerCase() + "'";
        			expr += ")";
        		}
        		
        		if(i != this.dsFilterList.getRowCount()-1) expr += " && ";
        	}
        	
        	ds.filter(expr);
        	
        	ds.set_enableevent(true);
        	grid.set_enableevent(true);
        	
        	divPaging.fnSetTotalCnt(ds.getRowCount());
        }

        this.grdFilter_oncellclick = function(obj,e)
        {
        	this.grdFilter.dropdownCombo();
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
            this.grdFilter.addEventHandler("oncellclick", this.grdFilter_oncellclick, this);
            this.btnApply.addEventHandler("onclick", this.fnBtnApplyOnclick, this);
            this.btnInit.addEventHandler("onclick", this.fnbtnInitOnclick, this);

        };

        this.loadIncludeScript("CompGrdFilterPop.xfdl", true);

       
    };
}
)();
