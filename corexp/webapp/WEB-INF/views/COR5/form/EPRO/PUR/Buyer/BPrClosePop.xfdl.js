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
                this.set_name("BUserInfoPopup");
                this.set_titletext("구매요청취소및완료사유");
                this._setFormPosition(0,0,371,183);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsReturn", this);
            obj._setContents("<ColumnInfo><Column id=\"OPNN\" size=\"256\" type=\"STRING\"/><Column id=\"PR_ITEM_ID\" size=\"256\" type=\"STRING\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIN_USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btnAccept", "absolute", null, "8", "60", "24", "73", null, this);
            obj.set_taborder("8");
            obj.set_text("적용");
            obj.set_cssclass("btn_WF_Ssign");
            obj.getSetter("objNm").set("구매종료");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancle", "absolute", null, "8", "60", "24", "10", null, this);
            obj.set_taborder("9");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Ssign");
            obj.set_positionstep("-1");
            obj.getSetter("objNm").set("구매종료");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "10", "40", null, null, "10", "10", this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 371, 183, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("구매요청취소및완료사유");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","TextArea00","value","dsReturn","OPNN");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("BPrClosePop.xfdl", function(exports) {
        /**
         * @파일명       	: BPrClosePop.xfdl
         * @생성자       	: 배열
         * @생성일자     	: 2019.05.27
         * @설명			: 구매요청 취소 및 구매완료 사유 팝업
         * @최종수정자		: 배열
         * @최종수정일자	: 2019.05.27
        */

        this.popTitle = "구매종료사유입력"
         
        /**
          * @함수명	: fnOnLoad
          * @desc   : 폼 onload이벤트
          */ 
        this.fnOnLoad = function(obj,e)
        {
        	var ownFrame = this.getOwnerFrame();
        	
        	this.dsReturn.addRow();
        	this.dsReturn.setColumn(0,"PR_ITEM_ID",ownFrame.pr_item_id)
        	this.dsReturn.setColumn(0,"BRANCH_CD",application.gdsUserInfo.getColumn(0,"BRANCH_CD"));
        	this.dsReturn.setColumn(0,"OPNN","");
        	
        }
         
        /**
          * @함수명	: btnAccept_onclick
          * @desc   	: 구매종료처리 
          */ 
        this.btnAccept_onclick = function(obj,e)
        {
        	trace(this.dsReturn.saveXML());
        	if(this.dsReturn.getColumn(0,"OPNN")==""){
        		gfnAlert("사유를 입력해주세요");    
        		return;
        		
        	}
        	
        	if(!gfnConfirm("구매종료 처리하시겠습니까?")) return;
        	
        	this.parent.close(this.dsReturn.saveXML());
        }
        /**
          * @함수명	: btnCancle_onclick
          * @desc   	: 구매종료취소
          */ 
        this.btnCancle_onclick = function(obj,e)
        {
        	if(!gfnConfirm("취소하시겠습니까?")) return;
        	this.parent.close();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fnOnLoad, this);
            this.btnAccept.addEventHandler("onclick", this.btnAccept_onclick, this);
            this.btnCancle.addEventHandler("onclick", this.btnCancle_onclick, this);

        };

        this.loadIncludeScript("BPrClosePop.xfdl", true);

       
    };
}
)();
