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
                this.set_name("compMultiInputPop");
                this.set_titletext("멀티입력팝업");
                this._setFormPosition(0,0,500,320);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMulti", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHECKED\" size=\"256\" type=\"STRING\"/><Column id=\"KEY\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("staWFDALabel01", "absolute", "16", "310", null, "29", "16", null, this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Tab("tabMain", "absolute", "16", "10", null, "266", "16", null, this);
            obj.getSetter("objNm").set("TAB");
            obj.set_scrollbars("autoboth");
            obj.set_tabindex("0");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabp01", this.tabMain);
            obj.getSetter("objNm").set("기본정보");
            obj.set_scrollbars("none");
            obj.set_text("Input Mode");
            this.tabMain.addChild(obj.name, obj);
            obj = new Grid("grList", "absolute", "0", "37", null, null, "0", "8", this.tabMain.tabp01);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsMulti");
            obj.set_cellclickbound("cell");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"425\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" expr=\"\" text=\"입력값\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expandshow=\"hide\" style=\"background: ;\" text=\"bind:CHECKED\"/><Cell col=\"1\" displaytype=\"text\" editdisplay=\"display\" edittype=\"text\" style=\"align: ;\" text=\"bind:KEY\"/></Band></Format></Formats>");
            this.tabMain.tabp01.addChild(obj.name, obj);
            obj = new Button("btnDel", "absolute", null, "8", "55", "24", "0", null, this.tabMain.tabp01);
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("삭제버튼");
            obj.set_taborder("2");
            obj.set_text(" 삭제");
            this.tabMain.tabp01.addChild(obj.name, obj);
            obj = new Button("btnAdd", "absolute", null, "8", "55", "24", "57", null, this.tabMain.tabp01);
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("추가버튼");
            obj.set_taborder("1");
            obj.set_text(" 추가");
            this.tabMain.tabp01.addChild(obj.name, obj);
            obj = new Tabpage("tabp02", this.tabMain);
            obj.getSetter("objNm").set("텍스트");
            obj.set_scrollbars("none");
            obj.set_text("Text Mode");
            this.tabMain.addChild(obj.name, obj);
            obj = new Button("btnRtn", "absolute", null, "41", "45", "24", "16", null, this.tabMain.tabp02);
            obj.set_taborder("2");
            obj.set_text("적용");
            this.tabMain.tabp02.addChild(obj.name, obj);
            obj = new Static("staWFDALabel05", "absolute", "0%", "10", null, "218", "0%", null, this.tabMain.tabp02);
            obj.set_taborder("3");
            this.tabMain.tabp02.addChild(obj.name, obj);
            obj = new Static("staRfqRemark", "absolute", "0", "10", "59", "218", null, null, this.tabMain.tabp02);
            obj.getSetter("objNm").set("헤더텍스트");
            obj.set_taborder("4");
            obj.set_text("텍스트");
            this.tabMain.tabp02.addChild(obj.name, obj);
            obj = new TextArea("txaInput", "absolute", "62", "14", "402", "210", null, null, this.tabMain.tabp02);
            obj.set_taborder("0");
            this.tabMain.tabp02.addChild(obj.name, obj);

            obj = new Edit("edtResult", "absolute", "78", "284", "403", "21", null, null, this);
            obj.set_readonly("true");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("staQtyUnit", "absolute", "16", "280", null, "29", "425", null, this);
            obj.set_taborder("5");
            obj.set_text("결과");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 468, 230, this.tabMain.tabp01,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("기본정보");
            		p.set_scrollbars("none");
            		p.set_text("Input Mode");

            	}
            );
            this.tabMain.tabp01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tabMain.tabp02,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("텍스트");
            		p.set_scrollbars("none");
            		p.set_text("Text Mode");

            	}
            );
            this.tabMain.tabp02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 500, 320, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("멀티입력팝업");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("btnDelLangBind2017110317184218727","tabMain.tabp01.btnDel","text","gdsLabel","EPRO_LABEL_00180");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("CompMultiInputPop.xfdl", function(exports) {
        /**
           @file       CompMultiInputPop.xfdl
           @desc       멀티검색조건검색팝업
           @author     정현근
           @makedate   2019.05.07
           @history    
        */

        this.popTitle = "검색조건 멀티입력"

        this.fv_objComp = null; //입력 컴포넌트

        /**
         	@function	compMultiInputPopOnload()
         	@desc		폼 onload 이벤트
         */  
        this.compMultiInputPopOnload = function(obj,e)
        {
        	var ownFrame = this.getOwnerFrame();
        	this.fv_objComp = ownFrame.agv_comp;
        		
        	//form에서 넘어온 값을 컴포넌트에 세팅함.
        	this.edtResult.set_value(gfnTrim(this.fv_objComp.value));
        	
        	//현재 보고있는 Mode의 컴포넌트에 세팅함.
        	this.tabMainOnchanged();
        	
        	this.tabMain.tabp01.grList.setFocus();
        	this.tabMain.tabp01.grList.setCellPos(1);
        	this.tabMain.tabp01.grList.showEditor();
        }

        /**
         	@function	fnSetDsMulti()
         	@desc		데이터셋 세팅
         */ 
        this.fnSetDsMulti = function()
        {
        	if(gfnIsNull(this.edtResult.value))
        	{
        		this.dsMulti.set_enableevent(false);
        		for(var i=0;i<this.dsMulti.rowcount;i++)
        		{
        			this.dsMulti.setColumn(i, "KEY", null);
        		}
        		this.dsMulti.set_enableevent(true);
        		return;
        	}
        	
        	var arrValue = this.edtResult.value.split(",");
        	
        	for(var i=0;i<this.dsMulti.rowcount;i++)
        	{
        		if(gfnIsNull(arrValue[i])) arrValue[i] = "";
        		this.dsMulti.setColumn(i, "KEY", arrValue[i]);
        	}
        }

        /**
         	@function	fnSetTxaMulti()
         	@desc		TextArea 세팅
         */  
        this.fnSetTxaMulti = function()
        {
        	if(gfnIsNull(this.edtResult.value)) return;
        	
        	this.tabMain.tabp02.txaInput.set_value(gfnTrim(this.edtResult.value).replace(/,/g, "\n"));
        }

        /**
         	@function	btnRtnOnclick()
         	@desc		적용
         */  
        this.btnRtnOnclick = function(obj,e)
        {
        	this.fv_objComp.set_value(this.edtResult.value);
        	this.close();
        }

        /**
         	@function	tabMainTabp01BtnAddOnclick()
         	@desc		행추가
         */  
        this.tabMainTabp01BtnAddOnclick = function(obj,e)
        {
        	this.dsMulti.addRow();
        }

        /**
         	@function	tabMainTabp01BtnDelOnclick()
         	@desc		행삭제
         */  
        this.tabMainTabp01BtnDelOnclick = function(obj,e)
        {
        	gfnDsChkDel(this.dsMulti);
        	this.dsMultiOncolumnchanged();
        }

        /**
         	@function	tabMainOnchanged()
         	@desc		탭변경 이벤트
         */  
        this.tabMainOnchanged = function(obj,e)
        {
        	if(this.tabMain.tabindex == 1) //Text 모드
        	{
        		this.fnSetTxaMulti();
        	}
        	else //Input 모드 (그리드)
        	{
        		this.fnSetDsMulti();
        	}
        }

        /**
         	@function	dsMultiOncolumnchanged()
         	@desc		데이터셋 oncolumnchanged
         */  
        this.dsMultiOncolumnchanged = function(obj,e)
        {
        	var str = "";
        	for(var i=0;i<this.dsMulti.rowcount;i++)
        	{
        		if(gfnIsNull(this.dsMulti.getColumn(i, "KEY"))) continue;
        		str += this.dsMulti.getColumn(i, "KEY") + ",";
        	}
        	
        	if(!gfnIsNull(str)) str = str.substr(0, str.length-1);
        	
        	this.edtResult.set_value(str);
        }

        /**
         	@function	tabMainTabp02TxaInputOntextchanged()
         	@desc		TextArea ontextchanged
         */  
        this.tabMainTabp02TxaInputOntextchanged = function(obj,e)
        {
        	var txtValue = gfnTrim(obj.value);
        	this.edtResult.set_value(txtValue.replace(/\n/g,","));
        }

        /**
         	@function	tabMainTabp01GrListOnheadclick()
         	@desc		그리드 onheadclick
         */  
        this.tabMainTabp01GrListOnheadclick = function(obj,e)
        {
        	gfnSetGrdHeadCheckbox(obj, e);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsMulti.addEventHandler("oncolumnchanged", this.dsMultiOncolumnchanged, this);
            this.addEventHandler("onload", this.compMultiInputPopOnload, this);
            this.tabMain.addEventHandler("onchanged", this.tabMainOnchanged, this);
            this.tabMain.tabp01.grList.addEventHandler("onheadclick", this.tabMainTabp01GrListOnheadclick, this);
            this.tabMain.tabp01.btnDel.addEventHandler("onclick", this.tabMainTabp01BtnDelOnclick, this);
            this.tabMain.tabp01.btnAdd.addEventHandler("onclick", this.tabMainTabp01BtnAddOnclick, this);
            this.tabMain.tabp02.btnRtn.addEventHandler("onclick", this.btnRtnOnclick, this);
            this.tabMain.tabp02.txaInput.addEventHandler("ontextchanged", this.tabMainTabp02TxaInputOntextchanged, this);

        };

        this.loadIncludeScript("CompMultiInputPop.xfdl", true);

       
    };
}
)();
