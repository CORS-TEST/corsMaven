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
                this.set_name("CompOrderBy");
                this.set_titletext("정렬순서 컴포넌트");
                this._setFormPosition(0,0,969,27);
            }
            this.style.set_background("transparent");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Combo("cb_SortItem00", "absolute", "0%", "0", null, "24", "87%", null, this);
            this.addChild(obj.name, obj);
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_innerdataset("dsSortItem");
            obj.getSetter("objNm").set("정렬순서_1");
            obj.style.set_padding("0 0 0 25");
            obj.style.set_background("#ffffffff URL('img::sort1.png')");
            obj.set_taborder("1");

            obj = new Combo("cb_SortType00", "absolute", "13.31%", "0", null, "24", "76.37%", null, this);
            this.addChild(obj.name, obj);
            var cb_SortType00_innerdataset = new Dataset("cb_SortType00_innerdataset", this.cb_SortType00);
            cb_SortType00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">--선택--</Col></Row><Row><Col id=\"codecolumn\">ASC</Col><Col id=\"datacolumn\">오름차순</Col></Row><Row><Col id=\"codecolumn\">DESC</Col><Col id=\"datacolumn\">내림차순</Col></Row></Rows>");
            obj.set_innerdataset(cb_SortType00_innerdataset);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("objNm").set("정렬방식_1");
            obj.set_taborder("2");

            obj = new Combo("cb_SortItem01", "absolute", "24.05%", "0", null, "24", "62.02%", null, this);
            this.addChild(obj.name, obj);
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_innerdataset("dsSortItem");
            obj.getSetter("objNm").set("정렬순서_2");
            obj.style.set_padding("0 0 0 25");
            obj.style.set_background("#ffffffff URL('img::sort2.png')");
            obj.set_taborder("3");

            obj = new Combo("cb_SortType01", "absolute", "38.6%", "0", null, "24", "51.08%", null, this);
            this.addChild(obj.name, obj);
            var cb_SortType01_innerdataset = new Dataset("cb_SortType01_innerdataset", this.cb_SortType01);
            cb_SortType01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">--선택--</Col></Row><Row><Col id=\"codecolumn\">ASC</Col><Col id=\"datacolumn\">오름차순</Col></Row><Row><Col id=\"codecolumn\">DESC</Col><Col id=\"datacolumn\">내림차순</Col></Row></Rows>");
            obj.set_innerdataset(cb_SortType01_innerdataset);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("objNm").set("정렬방식_2");
            obj.set_taborder("4");

            obj = new Combo("cb_SortType02", "absolute", "63.98%", "0", null, "24", "25.7%", null, this);
            this.addChild(obj.name, obj);
            var cb_SortType02_innerdataset = new Dataset("cb_SortType02_innerdataset", this.cb_SortType02);
            cb_SortType02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">--선택--</Col></Row><Row><Col id=\"codecolumn\">ASC</Col><Col id=\"datacolumn\">오름차순</Col></Row><Row><Col id=\"codecolumn\">DESC</Col><Col id=\"datacolumn\">내림차순</Col></Row></Rows>");
            obj.set_innerdataset(cb_SortType02_innerdataset);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("objNm").set("정렬방식_3");
            obj.set_taborder("7");

            obj = new Combo("cb_SortItem02", "absolute", "49.43%", "0", null, "24", "36.64%", null, this);
            this.addChild(obj.name, obj);
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_innerdataset("dsSortItem");
            obj.getSetter("objNm").set("정렬순서_3");
            obj.style.set_padding("0 0 0 25");
            obj.style.set_background("#ffffffff URL('img::sort3.png')");
            obj.set_taborder("9");

            obj = new Combo("cb_SortType03", "absolute", "89.16%", "0", null, "24", "0.52%", null, this);
            this.addChild(obj.name, obj);
            var cb_SortType03_innerdataset = new Dataset("cb_SortType03_innerdataset", this.cb_SortType03);
            cb_SortType03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">--선택--</Col></Row><Row><Col id=\"codecolumn\">ASC</Col><Col id=\"datacolumn\">오름차순</Col></Row><Row><Col id=\"codecolumn\">DESC</Col><Col id=\"datacolumn\">내림차순</Col></Row></Rows>");
            obj.set_innerdataset(cb_SortType03_innerdataset);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("objNm").set("정렬방식_4");
            obj.set_taborder("10");

            obj = new Combo("cb_SortItem03", "absolute", "75.13%", "0", null, "24", "11.35%", null, this);
            this.addChild(obj.name, obj);
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_innerdataset("dsSortItem");
            obj.getSetter("objNm").set("정렬순서_4");
            obj.style.set_padding("0 0 0 25");
            obj.style.set_background("#ffffffff URL('img::sort4.png')");
            obj.set_taborder("12");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 969, 27, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("CompOrderBy");
            		p.style.set_background("transparent");
            		p.set_titletext("정렬순서 컴포넌트");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item14","cb_SortItem00","value","dsCondition","SORT_ITEM1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","cb_SortType00","value","dsCondition","SORT_TYPE1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","cb_SortItem01","value","dsCondition","SORT_ITEM2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","cb_SortType01","value","dsCondition","SORT_TYPE2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","cb_SortType02","value","dsCondition","SORT_TYPE3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","cb_SortItem02","value","dsCondition","SORT_ITEM3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","cb_SortType03","value","dsCondition","SORT_TYPE4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","cb_SortItem03","value","dsCondition","SORT_ITEM4");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("CompOrderBy.xfdl", function(exports) {
        /**
           @file       CompOrderBy.xfdl
           @desc       정렬순서 컴포넌트
           @author     배열
           @makedate   2015.08.20
           @history    
        */   

        
        /**
        	@function	cb_SortItem00_onitemchanged()
        	@desc   	
        */  
        this.cb_SortItem00_onitemchanged = function(obj,e)
        {
        	this.fn_Orerby_Control(obj, this.cb_SortType00);
        }

        /**
        	@function	cb_SortItem01_onitemchanged()
        	@desc   	
        */  
        this.cb_SortItem01_onitemchanged = function(obj,e)
        {
        	this.fn_Orerby_Control(obj, this.cb_SortType01);
        }

        /**
        	@function	cb_SortItem02_onitemchanged()
        	@desc   	
        */  
        this.cb_SortItem02_onitemchanged = function(obj,e)
        {
        	this.fn_Orerby_Control(obj, this.cb_SortType02);
        }

        /**
        	@function	cb_SortItem03_onitemchanged()
        	@desc   	
        */  
        this.cb_SortItem03_onitemchanged = function(obj,e)
        {
        	this.fn_Orerby_Control(obj, this.cb_SortType03);
        }

        /**
        	@function	fn_Orerby_Control()
        	@desc   	
        */  
        this.fn_Orerby_Control = function (obj,objType){
        	if(obj.index == 0) {
        		objType.set_index(0);
        	}
        	if(obj.index > 0 && objType.index <= 0) {
        		objType.set_index(2); //DESC
        	}
        }

        /**
        	@function	Div_SOption_cb_SortType00_onitemchanged()
        	@desc   	
        */  
        this.Div_SOption_cb_SortType00_onitemchanged = function(obj,e)
        {
        	if(obj.index == 0) this.cb_SortItem00.set_index(0);
        }

        /**
        	@function	Div_SOption_cb_SortType01_onitemchanged()
        	@desc   	
        */  
        this.Div_SOption_cb_SortType01_onitemchanged = function(obj,e)
        {
        	if(obj.index == 0) this.cb_SortItem01.set_index(0);
        }

        /**
        	@function	cb_SortType02_onitemchanged()
        	@desc   	
        */  
        this.cb_SortType02_onitemchanged = function(obj,e)
        {
        	if(obj.index == 0) this.cb_SortItem02.set_index(0);
        }

        /**
        	@function	cb_SortType03_onitemchanged()
        	@desc   	
        */  
        this.cb_SortType03_onitemchanged = function(obj,e)
        {
        	if(obj.index == 0) this.cb_SortItem03.set_index(0);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.cb_SortItem00.addEventHandler("onitemchanged", this.cb_SortItem00_onitemchanged, this);
            this.cb_SortType00.addEventHandler("onitemchanged", this.Div_SOption_cb_SortType00_onitemchanged, this);
            this.cb_SortItem01.addEventHandler("onitemchanged", this.cb_SortItem01_onitemchanged, this);
            this.cb_SortType01.addEventHandler("onitemchanged", this.Div_SOption_cb_SortType01_onitemchanged, this);
            this.cb_SortType02.addEventHandler("onitemchanged", this.cb_SortType02_onitemchanged, this);
            this.cb_SortItem02.addEventHandler("onitemchanged", this.cb_SortItem02_onitemchanged, this);
            this.cb_SortType03.addEventHandler("onitemchanged", this.cb_SortType03_onitemchanged, this);
            this.cb_SortItem03.addEventHandler("onitemchanged", this.cb_SortItem03_onitemchanged, this);

        };

        this.loadIncludeScript("CompOrderBy.xfdl", true);

       
    };
}
)();
