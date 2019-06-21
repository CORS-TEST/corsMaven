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
                this.set_name("popDocType");
                this.set_titletext("견적마감일 변경");
                this.set_cssclass("frm_POP_Search");
                this._setFormPosition(0,0,400,100);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsReturn", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RFQ_CLOSE_DAY\" type=\"STRING\" size=\"22\"/><Column id=\"RFQ_CLOSE_TIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btnRtn", "absolute", "300", "38", "65", "24", null, null, this);
            obj.set_taborder("2");
            obj.set_text("적용");
            obj.set_cssclass("btn_WF_CRUD");
            obj.getSetter("objNm").set("적용");
            this.addChild(obj.name, obj);

            obj = new Calendar("calRfqCloseDay", "absolute", "40", "38", "120", "24", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.getSetter("objNm").set("견적마감일자");
            obj.set_dateformat("yyyy.MM.dd ddd");
            obj.set_value("null");
            obj.set_editformat("yyyy.MM.dd");

            obj = new Static("Static01", "absolute", "160", "38", "24", "24", null, null, this);
            obj.set_taborder("4");
            obj.set_text("일");
            this.addChild(obj.name, obj);

            obj = new Spin("spnRfqCloseTime", "absolute", "189", "38", "65", "24", null, null, this);
            obj.set_taborder("6");
            obj.set_value("0");
            obj.set_max("23");
            obj.getSetter("objNm").set("견적마감시간");
            obj.set_cssclass("cal_default");
            obj.set_enableevent("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "254", "38", "29", "24", null, null, this);
            obj.set_taborder("5");
            obj.set_text("시");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 400, 100, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("견적마감일 변경");
            		p.set_cssclass("frm_POP_Search");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item2","calRfqCloseDay","value","dsReturn","RFQ_CLOSE_DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","spnRfqCloseTime","value","dsReturn","RFQ_CLOSE_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("BRfqClsDtChgPop.xfdl", function(exports) {
        /**
           @file       BRfqClsDtChgPop.xfdl
           @desc       견적마감일 변경
           @author     정현근
           @makedate   2019.05.02
           @history    
        */  

        this.popTitle = "견적마감일 변경";

        /**
        	@function	popDocTypeOnload()
        	@desc   	(팝업)폼 onload이벤트
        */
        this.popDocTypeOnload = function(obj,e)
        {
        	//시스템 공통함수 호출 : 팝업
        	this.gfnPopOnLoad(this);
        	//부모창으로 부터 전달받은 값		
        	this.dsReturn.addRow();
        	this.dsReturn.setColumn(0,"RFQ_CLOSE_DAY",this.gfnToday());
        	this.dsReturn.setColumn(0,"RFQ_CLOSE_TIME","23");
        }

        /**
        	@function	btnRtnOnclick()
        	@desc   	(팝업)적용 버튼 클릭 이벤트
        */
        this.btnRtnOnclick = function(obj,e)
        {
         	this.close(this.dsReturn.saveXML());
        }

        /**
        	@function	btnCloseOnclick()
        	@desc   	(팝업)닫기 버튼 클릭 이벤트
        */
        this.btnCloseOnclick = function(obj,e)
        {
        	this.close();
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.pop_docType_onload, this);
            this.btnRtn.addEventHandler("onclick", this.btnRtnOnclick, this);

        };

        this.loadIncludeScript("BRfqClsDtChgPop.xfdl", true);

       
    };
}
)();
