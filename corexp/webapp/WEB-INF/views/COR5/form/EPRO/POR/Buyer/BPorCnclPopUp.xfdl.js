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
                this.set_name("BPorCnclPopUp");
                this.set_titletext("발주취소 사유");
                this.set_cssclass("frm_POP_Search");
                this._setFormPosition(0,0,382,200);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsRtn", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CNCL_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"PO_NO_ARR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("sta_title", "absolute", "0", "0", null, "30", "272", null, this);
            obj.set_text("변경요청 사유");
            obj.set_cssclass("sta_POP_PopTitle");
            obj.getSetter("objNm").set("취소사유");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_reason", "absolute", "10", "41", null, null, "10", "10", this);
            obj.set_taborder("5");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("취소사유");
            obj.set_maxlength("500");
            obj.set_lengthunit("utf8");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Button("btnCncl", "absolute", null, "11", "45", "24", "10", null, this);
            obj.set_taborder("6");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("취소버튼");
            this.addChild(obj.name, obj);

            obj = new Button("btnCnfrm", "absolute", null, "11", "45", "24", "60", null, this);
            obj.set_taborder("7");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("확인버튼");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 382, 200, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("발주취소 사유");
            		p.set_cssclass("frm_POP_Search");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item2","txt_reason","value","dsRtn","CNCL_RSN");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("BPorCnclPopUp.xfdl", function(exports) {
        /**
           @file       BPorCnclPopUp
           @desc       발주취소  사유입력 팝업
           @author     한의봉
           @makedate   
           @history    
        */

        this.popTitle = "발주취소 사유";

        /**
          * @함수명	: fnOnLoad
          * @desc		: 폼 onload이벤트
          */ 
        this.fnOnLoad = function(obj,e)
        {
        	var ownFrame = this.getOwnerFrame();
        	this.dsRtn.setColumn(0, "PO_NO_ARR", ownFrame.agv_poNoArr);
        }

        /**
          * @함수명	: btnCnfrm_onclick
          * @desc		: 적용
          */ 
        this.btnCnfrm_onclick = function(obj,e)
        {
        	if(gfnIsNull(this.dsRtn.getColumn(0,"CNCL_RSN"))){
        		gfnAlert("사유를 입력하시기 바랍니다.");
        		return;
        	}
        	
        	if(!gfnConfirm("발주번호 ["+this.dsRtn.getColumn(0,"PO_NO_ARR")+"]를 발주취소 하시겠습니까?")) return;
        	
        	this.parent.close(this.dsRtn.saveXML());
        }

        this.btnCncl_onclick = function(obj,e)
        {
        	this.parent.close();
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnCncl.addEventHandler("onclick", this.btnCncl_onclick, this);
            this.btnCnfrm.addEventHandler("onclick", this.btnCnfrm_onclick, this);

        };

        this.loadIncludeScript("BPorCnclPopUp.xfdl", true);

       
    };
}
)();
