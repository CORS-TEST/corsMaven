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
                this.set_cssclass("frm_pop_Bg");
                this.set_name("CCommonPop");
                this.set_titletext("팝업 틀");
                this._setFormPosition(0,0,196,129);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnClose", "absolute", null, "0", "30", "40", "5", null, this);
            obj.set_cssclass("btn_pop_close");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Div("divPopTitle", "absolute", "0", "0", null, "35", "39", null, this);
            obj.set_cssclass("div_PopTitle");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Div("divPopBody", "absolute", "0", "37", null, null, "0", "1", this);
            obj.set_async("false");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 196, 70, this.divPopBody,
            	//-- Layout function
            	function(p) {
            		p.set_async("false");
            		p.set_taborder("10");

            	}
            );
            this.divPopBody.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 196, 129, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.set_cssclass("frm_pop_Bg");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("팝업 틀");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("CCommonPop.xfdl", function(exports) {
        /**
         * @파일명       	: CCommonPop.xfdl
         * @생성자       	: 한민희
         * @생성일자     	: 2017. 8. 28.
         * @설명			: 팝업 틀
         * @최종수정자		: 한민희
         * @최종수정일자	: 2017. 8. 28.
        */  

        /**
          * @함수명	: CCommonPopOnload
          * @desc     	: 폼 onload이벤트
        */
        this.CCommonPopOnload = function(obj,e)
        {
        	var ownFrame = this.getOwnerFrame();
        	
        	if(gfnIsNull(ownFrame.agv_url)){
        		gfnAlert("아규먼트 agv_url 은(는) 필수입력입니다.");
        		return;
        	}
        	
        	if(!gfnIsNull(ownFrame.agv_remote) && ownFrame.agv_remote == "Y") {
        		this.fnPopRemote(ownFrame);
        	}
        	
        	this.divPopBody.set_url(ownFrame.agv_url);
        	this.divPopBody.resetScroll();
        	var title = ownFrame.popTitle ? ownFrame.popTitle : this.divPopBody.popTitle;	
        	this.divPopTitle.set_text(title);
        }

        /**
          * @함수명	: fnPopRemote
          * @desc     	: 팝업 리모콘
        */
        this.btnPram;
        this.remoteBtnDiv;
        this.fnPopRemote = function(ownFrame)
        {
        	var divName = ownFrame.id.split("_")[0] + "_remoteDiv";
        	if(this.components[divName]) this.components[divName].destroy();

        	this.btnPram = ownFrame.remote_btn;
        	var objDiv = new Div(divName, "absolute", null, 37, 150, 30, 10, null);
        	this.addChild(divName, objDiv);
        	this.remoteBtnDiv = objDiv;
        	objDiv.set_url("CPOP::CompRemotePop.xfdl");
        	objDiv.set_scrollbars("none");
        	objDiv.show();	
        }

        /**
          * @함수명	: fnBtnPram
          * @desc     	: 팝업 리모콘
        */
        this.fnBtnPram = function()
        {
        	this.remoteBtnDiv.fnSetBtn(this.btnPram);
        	this.btnPram = null;
        	
        }

        /**
          * @함수명	: btnCloseOnclick
          * @desc     	: 팝업닫기
          */
        this.btnCloseOnclick = function(obj,e){
        	var ownFrame = this.getOwnerFrame();
        	if(ownFrame.agv_url == 'CPOP::CompFileUpDownPopup.xfdl'){
        		var rtnDs = new Dataset;
        		rtnDs.load();
        		rtnDs.addColumn("FILE_COUNT");
        		rtnDs.addRow();
        		rtnDs.setColumn(0,"FILE_COUNT",this.divPopBody.Div00.Grid00.rowcount);
        		this.close(rtnDs.saveXML());
        	}
        	this.close();
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.CCommonPopOnload, this);
            this.btnClose.addEventHandler("onclick", this.btnCloseOnclick, this);

        };

        this.loadIncludeScript("CCommonPop.xfdl", true);

       
    };
}
)();
