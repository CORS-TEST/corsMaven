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
                this.set_titletext("반품교환접수비고팝업");
                this._setFormPosition(0,0,500,211);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAnswer", this);
            obj._setContents("<ColumnInfo><Column id=\"INT_TYPE\" size=\"1\" type=\"STRING\"/><Column id=\"RTN_CNTNT\" type=\"STRING\" size=\"2000\"/></ColumnInfo><Rows><Row/></Rows>");
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

            obj = new Radio("rdoRtnChg", "absolute", "10", "8", "150", "24", null, null, this);
            this.addChild(obj.name, obj);
            var rdoRtnChg_innerdataset = new Dataset("rdoRtnChg_innerdataset", this.rdoRtnChg);
            rdoRtnChg_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">반품</Col></Row><Row><Col id=\"codecolumn\">B</Col><Col id=\"datacolumn\">교환</Col></Row></Rows>");
            obj.set_innerdataset(rdoRtnChg_innerdataset);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 500, 211, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("반품교환접수비고팝업");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","TextArea00","value","dsReturn","OPNN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","rdoRtnChg","value","ds_answer","INT_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("BPrReturnRmarkPop.xfdl", function(exports) {
        /**
         * @파일명       	: BPrReturnRmarkPop.xfdl
         * @생성자       	: 배열
         * @생성일자     	: 2019.05.27
         * @설명			: 반품교환접수비고팝업
         * @최종수정자		: 배열
         * @최종수정일자	: 2019.05.27
        */

        this.popTitle = "반품교환접수비고팝업"

        /**
        	@var  this.fv_gubun
        	@desc 전역변수 버튼명 구분값
        */
        this.fvGubun = ""; 
         
        /**
          * @함수명	: fnOnLoad
          * @desc   : 폼 onload이벤트
          */ 
        this.fnOnLoad = function(obj,e)
        {
        	var ownFrame = this.getOwnerFrame();

        	//부모창으로 부터 전달받은 값	
        	var ownFrame = this.getOwnerFrame();
        	
        	this.fvGubun = ownFrame.gubun;
        	
        	//부모창으로 부터 전달받은 값으로 폼을 세팅한다.
        	if(this.fvGubun=="RCV"){
        		
        		//this.sta_title.set_text("반품/교환 접수");
        		this.btnAccept.set_text("접수");
        		this.dsAnswer.setColumn(0,"INT_TYPE",ownFrame.intType);
        		
        	}else if(this.fvGubun=="CHG"){
        	
        		//this.sta_rtnChg.set_visible(false);
        		//this.sta_title.set_text("교환완료");
        		this.rdoRtnChg.set_visible(false);
        		this.btnAccept.set_text("완료");
        		
        		
        		
        	}else if(this.fvGubun=="RTN"){
        		
        		//this.sta_rtnChg.set_visible(false);
        		//this.sta_title.set_text("반려");
        		this.rdoRtnChg.set_visible(false);
        		this.btnAccept.set_text("반려");
        	}
        	
        	this.dsAnswer.setColumn(0,"RTN_CNTNT","")

        
        }
          
        /**
          * @함수명	: btnCancle_onclick
          * @desc   	: 구매종료취소
          */ 
        this.btnCancle_onclick = function(obj,e)
        {
        	if(!gfnConfirm(this.btn_cmpt.text+" 하시겠습니까?")) return;
        	this.parent.close();
        }

        this.btnAcceptOnclick = function(obj,e)
        {
        	if(this.dsReturn.getColumn(0,"OPNN")==""){
        		gfnAlert("사유를 입력해주세요");    
        		return;
        		
        	}
        	
        	if(!gfnConfirm("구매종료 처리하시겠습니까?")) return;
        	
        	this.parent.close(this.dsReturn.saveXML());
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fnOnLoad, this);
            this.btnAccept.addEventHandler("onclick", this.btnAcceptOnclick, this);
            this.btnCancle.addEventHandler("onclick", this.btnCancle_onclick, this);

        };

        this.loadIncludeScript("BPrReturnRmarkPop.xfdl", true);

       
    };
}
)();
