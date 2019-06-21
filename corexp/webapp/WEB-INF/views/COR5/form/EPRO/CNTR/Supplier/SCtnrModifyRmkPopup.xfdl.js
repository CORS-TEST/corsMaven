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
                this.set_name("pop_docType");
                this.set_titletext("취소사유");
                this.set_cssclass("frm_POP_Search");
                this._setFormPosition(0,0,382,195);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_reason", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"REASON\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new TextArea("txt_reason", "absolute", "4.19%", "39", null, "148", "3.14%", null, this);
            obj.set_taborder("5");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("자재텍스트");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_rtn00", "absolute", "79.58%", "10", null, "25", "3.4%", null, this);
            obj.set_taborder("6");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 382, 195, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("취소사유");
            		p.set_cssclass("frm_POP_Search");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item2","txt_reason","value","ds_reason","REASON");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("SCtnrModifyRmkPopup.xfdl", function(exports) {
        /***************************************************************************
         * Program ID    : SCtnrModifyRmkPopup.xfdl
         * Program Name  : 변경사유팝업
         * Author        : 안성민
         * Created On    : 2019.03.07
         * 개    요 	 :
         *
         * =========================================================================
         * 변경일자     수정자    내    용
         * =========================================================================
           
        **************************************************************************/

        this.popTitle = '변경사유'

        /***************************************************************************
         * 함  수  명		: btn_rtn_onclick()
         * 기      능		: 적용버튼 클릭 이벤트
         ***************************************************************************/
        this.btn_rtn_onclick = function(obj,e)
        {
        	var rtn = this.ds_reason.getColumn(0,"REASON");
        	if(gfnIsNull(rtn)) {
        		gfnAlert("사유를 입력해주세요.")
        		return;
        	}
        	this.parent.close(this.ds_reason.saveXML());

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.pop_docType_oninit, this);
            this.addEventHandler("onload", this.pop_docType_onload, this);
            this.txt_reason.addEventHandler("oneditclick", this.txt_reason_oneditclick, this);
            this.btn_rtn00.addEventHandler("onclick", this.btn_rtn_onclick, this);

        };

        this.loadIncludeScript("SCtnrModifyRmkPopup.xfdl", true);

       
    };
}
)();
