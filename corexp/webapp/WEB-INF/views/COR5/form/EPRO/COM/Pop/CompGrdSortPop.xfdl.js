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
                this.set_name("CompGrdSortPop");
                this.set_titletext("그리드 소트 팝업");
                this._setFormPosition(0,0,325,237);
            }
            this.getSetter("_name").set("");
            this.getSetter("mmm").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsParentGrid", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_ID\" size=\"256\" type=\"STRING\"/><Column id=\"COL_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHECKED\" size=\"256\" type=\"STRING\"/><Column id=\"COLUMN\" size=\"256\" type=\"STRING\"/><Column id=\"SORT\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSort", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\" type=\"STRING\"/><Column id=\"DATA\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">ASC</Col><Col id=\"DATA\">오름차순</Col></Row><Row><Col id=\"CODE\">DESC</Col><Col id=\"DATA\">내림차순</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTemp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grd", "absolute", "10", "31", null, "171", "10", null, this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_binddataset("dsList");
            obj.set_cellclickbound("cell");
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" expr=\"\" text=\"항목\"/><Cell col=\"2\" expr=\"\" text=\"정렬\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\"/><Cell col=\"1\" combocodecol=\"COL_ID\" combodatacol=\"COL_NM\" combodataset=\"dsParentGrid\" combodisplay=\"display\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:COLUMN\"/><Cell col=\"2\" combocodecol=\"CODE\" combodatacol=\"DATA\" combodataset=\"dsSort\" combodisplay=\"display\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:SORT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd", "absolute", null, "5", "40", "20", "56", null, this);
            obj.set_taborder("1");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel", "absolute", null, "5", "40", "20", "14", null, this);
            obj.set_taborder("2");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btnApply", "absolute", null, "210", "40", "20", "10", null, this);
            obj.set_taborder("5");
            obj.set_text("적용");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 325, 237, this,
            	//-- Layout function
            	function(p) {
            		p.getSetter("_name").set("");
            		p.set_classname("GridSortPop");
            		p.getSetter("mmm").set("");
            		p.set_titletext("그리드 소트 팝업");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("CompGrdSortPop.xfdl", function(exports) {
        /**
         * @파일명       	: CompGrdSortPop.xfdl
         * @생성자       	: 한민희
         * @생성일자     	: 2017. 9. 22.
         * @설명			: 정렬
         * @최종수정자		: 한민희
         * @최종수정일자	: 2017. 9. 22.
        */ 

        this.popTitle = gfnMultiLabel("EPRO_LABEL_00620");
        this.fvGrid;	//대상 그리드

        /**
          * @함수명	: fnFormOnload
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.LoadEventInfo(이벤트변수)
          * @desc     	: 폼 onload이벤트
          */
        this.fnFormOnload = function(obj,e)
        {
        	var ownFrame = this.getOwnerFrame();	
        	this.fvGrid = ownFrame.arg_grid;
        	
        	for(i=0; i<this.fvGrid.getCellCount("Head"); i++){	
        		var sHeadText = this.fvGrid.getCellProperty("head", i, "text");		
        		if(gfnIsNull(sHeadText)) continue;
        		
        		var nRow = this.dsParentGrid.addRow();
        		
        		var arrBind = this.fvGrid.getCellProperty("body", i, "text").split("bind:");
        		this.dsParentGrid.setColumn(nRow, "COL_ID", arrBind[1]);
        		
        		this.dsParentGrid.setColumn(nRow, "COL_NM", sHeadText);
        	}
        	
        	this.dsParentGrid.set_rowposition(-1);
        	
        	//그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기
        	//gfnSetGrdFunc(this.grd, null, this);
        	
        	this.grd.dropdownCombo();
        }

        /**
          * @함수명	: fnBtnAddOnclick
          * @input    	: obj:Button(버튼 오브젝트), e:nexacro.ClickEventInfo(이벤트변수)
          * @desc     	: 추가
          */
        this.fnBtnAddOnclick = function(obj,e)
        {
        	var nRow = this.dsList.addRow();	
        	this.dsList.setColumn(nRow, "COLUMN", this.dsParentGrid.getColumn(0, "COL_ID"));
        	this.dsList.setColumn(nRow, "SORT", "ASC");
        	this.dsList.setColumn(nRow, "CHECKED", "");
        }

        /**
          * @함수명	: fnBtnDelOnclick
          * @input    	: obj:Button(버튼 오브젝트), e:nexacro.ClickEventInfo(이벤트변수)
          * @desc     	: 삭제
          */
        this.fnBtnDelOnclick = function(obj,e)
        {
        	gfnDsChkDel(this.dsList);
        }

        /**
          * @함수명	: fnBtnApplyOnclick
          * @input    	: obj:Button(버튼 오브젝트), e:nexacro.ClickEventInfo(이벤트변수)
          * @desc     	: 적용
          */
        this.fnBtnApplyOnclick = function(obj,e)
        {	
        	var ds = this.fvGrid.getBindDataset();
        	
        	this.fvGrid.set_enableevent(false);
        	ds.set_enableevent(false);	
        	
        	for(var i=0, x=this.fvGrid.getCellCount("body"); i<x; i++){
        		var sHeadText = this.fvGrid.getCellText(-1, i);		
        		if(sHeadText.indexOf("▲") > -1 || sHeadText.indexOf("▼") > -1){
        			sHeadText = sHeadText.substr(0, sHeadText.length -1);
        			this.fvGrid.setCellProperty( "head", i, "text", sHeadText);	
        		}
        	}
        	
        	var expr = "S:";
        	for(var i=0, x=this.dsList.rowcount; i<x; i++){	
        		var sort = ("ASC" == this.dsList.getColumn(i, "SORT")) ? "+" : "-";
        		expr += sort + this.dsList.getColumn(i, "COLUMN");

        		for(var j=0, y=this.fvGrid.getCellCount("body"); j<y; j++){		 
        			var bindColId = this.fvGrid.getCellProperty("body", j, "text").split("bind:").join("");
        			if(bindColId == this.dsList.getColumn(i, "COLUMN")){
        				var sHeadText = this.fvGrid.getCellText(-1, j);
        				var nLen = sHeadText.length - 1;  
        				
        				if(sHeadText.indexOf("▲") > -1 || sHeadText.indexOf("▼") > -1){
        					sHeadText = sHeadText.substr(0, nLen);
        				}else{
        					sHeadText = sHeadText;
        				}
        				
        				if(sort == "+"){
        					this.fvGrid.setCellProperty( "head", j, "text", sHeadText+ "▲");				
        				}else if(sort == "-"){
        					this.fvGrid.setCellProperty( "head", j, "text", sHeadText+ "▼");				
        				}
        					
        				break;
        			}
        		}
        	}	
        	
        	ds.set_keystring(expr);
        	
        	this.fvGrid.set_enableevent(true);
        	ds.set_enableevent(true);	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.btnAdd.addEventHandler("onclick", this.fnBtnAddOnclick, this);
            this.btnDel.addEventHandler("onclick", this.fnBtnDelOnclick, this);
            this.btnApply.addEventHandler("onclick", this.fnBtnApplyOnclick, this);

        };

        this.loadIncludeScript("CompGrdSortPop.xfdl", true);

       
    };
}
)();
