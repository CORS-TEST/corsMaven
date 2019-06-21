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
                this.set_name("commGrdFixPop");
                this.set_titletext("그리드 고정 팝업");
                this._setFormPosition(0,0,348,35);
            }
            this.getSetter("_name").set("");
            this.getSetter("mmm").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsParentGrid", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_ID\" size=\"256\" type=\"STRING\"/><Column id=\"COL_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Combo("cboColumn", "absolute", "10", "8", null, "20", "65", null, this);
            this.addChild(obj.name, obj);
            obj.set_codecolumn("COL_ID");
            obj.set_datacolumn("COL_NM");
            obj.set_innerdataset("@dsParentGrid");
            obj.set_taborder("6");

            obj = new Button("btnInit", "absolute", null, "8", "48", "20", "10", null, this);
            obj.set_taborder("7");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 348, 35, this,
            	//-- Layout function
            	function(p) {
            		p.getSetter("_name").set("");
            		p.set_classname("GridSortPop");
            		p.getSetter("mmm").set("");
            		p.set_titletext("그리드 고정 팝업");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("CompGrdFixPop.xfdl", function(exports) {
        /**
         * @파일명       	: CompGrdFixPop.xfdl
         * @생성자       	: 한민희
         * @생성일자     	: 2017. 9. 22.
         * @설명			: 틀고정
         * @최종수정자		: 한민희
         * @최종수정일자	: 2017. 9. 22.
        */ 

        this.popTitle = gfnMultiLabel("EPRO_LABEL_00801");

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
        		//if(gfnIsNull(sHeadText)) continue;
        		
        		if(gfnIsNull(this.fvGrid.getCellProperty("body", i, "text"))) continue;

        		var nRow = this.dsParentGrid.addRow();
        		
        		var arrBind = this.fvGrid.getCellProperty("body", i, "text").split("bind:");
        		this.dsParentGrid.setColumn(nRow, "COL_ID", arrBind[1]);
        		
        		this.dsParentGrid.setColumn(nRow, "COL_NM", sHeadText);
        	}
        	
        	this.dsParentGrid.set_rowposition(0);
        }

        /**
          * @함수명	: btnInitOnclick
          * @input    	: obj:Button(버튼 오브젝트), e:nexacro.LoadEventInfo(이벤트변수)
          * @desc     	: 초기화
          */
        this.btnInitOnclick = function(obj,e)
        {
        	gfnCxlCellFix(this.fvGrid);
        }

        /**
          * @함수명	: cboColumnOnitemchanged
          * @input    	: obj:Combo(콤보 오브젝트), e:nexacro.ItemChangeEventInfo(이벤트변수)
          * @desc     	: 콤보 Onitemchanged 이벤트
          */
        this.cboColumnOnitemchanged = function(obj,e)
        {	
        	gfnCellFix(this.fvGrid, e.postindex);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.cboColumn.addEventHandler("onitemchanged", this.cboColumnOnitemchanged, this);
            this.btnInit.addEventHandler("onclick", this.btnInitOnclick, this);

        };

        this.loadIncludeScript("CompGrdFixPop.xfdl", true);

       
    };
}
)();
