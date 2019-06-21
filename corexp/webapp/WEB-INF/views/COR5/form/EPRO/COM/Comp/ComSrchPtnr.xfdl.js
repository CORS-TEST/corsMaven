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
                this.set_name("CompSrchUser");
                this.set_titletext("AddOn-협력사검색");
                this._setFormPosition(0,0,263,24);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsComReturn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Edit("edtComPtnrId", "absolute", "0", "0", "98", "24", null, null, this);
            obj.set_taborder("0");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("10");
            obj.set_enable("false");
            obj.style.setStyleValue("color", "disabled", "black");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("objNm").set("협력사ID");
            this.addChild(obj.name, obj);

            obj = new Edit("edtComPtnrNm", "absolute", "101", "0", "118", "24", null, null, this);
            obj.set_taborder("1");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("협력사명");
            this.addChild(obj.name, obj);

            obj = new Button("btnPtnrSrch", "absolute", "220", "0", "24", "24", null, null, this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("협력사검색 버튼");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 263, 24, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("CompCalFromTo");
            		p.set_titletext("AddOn-협력사검색");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("ComSrchPtnr.xfdl", function(exports) {
        /**
           @file       ComSrchPtnr.xfdl
           @desc       협력사검색 컴포넌트
           @author     배열
           @makedate   2019.06.03
           @history    
        */

        /**
          * @함수명	: fnSetDate
          * @input    	: objDs:Dataset(데이터셋 오브젝트), sFromDtCol(from 날짜), sToDtCol(to 날짜)
          * @desc     	: 데이터셋 입력된 날짜를 바인딩
          */
        this.fnSet = function(objDs,sFromDtCol,sToDtCol)
        {
        	this.removeChild("Bind01");
        	this.removeChild("Bind02");
        	var objBindItem = new BindItem("Bind01", "edtComPtnrId", "value", objDs.name,sFromDtCol);
        	this.addChild("Bind01", objBindItem);
        	objBindItem.bind();
        	
        	var objBindItem = new BindItem("Bind02", "edtComPtnrNm", "value", objDs.name,sToDtCol);
        	this.addChild("Bind02", objBindItem);
        	objBindItem.bind();
        }

        

        

        this.fnOnkeydownEvent = function(obj,e)
        {
        	
        	if(e.keycode == "13"){
        		this.fnComPtnrSrch();
        	}else if(e.keycode == "8"){
        		this.edtComPtnrId.set_value("");
        	}
        	
        }

        this.fnComPtnrSrch = function(obj,e)
        {
        	var sArg = {
        				agv_id 	: this.edtComPtnrId.value
        				,agv_nm : this.edtComPtnrNm.value
        				};
        	gfnModalPop(this, "comPtnrSrch", "CPOP::BPtnrSrchPopup.xfdl", sArg, "fnPopCallBack", 900, 500);
        }

        /**
        	@function	fn_popCallBack()
        	@desc   	팝업 CallBack 함수
        */
        this.fnPopCallBack = function(sPopupId,rtn)
        {
        	if(gfnIsNull(rtn)) return;
        	
        	if(rtn.indexOf("<Dataset id=") == 0){
        		
        		this.dsComReturn.loadXML(rtn);
        		
        		//요청창고 검색 CallBack
        		if(sPopupId == "comPtnrSrch"){
        			
        			this.edtComPtnrId.set_value(this.dsComReturn.getColumn(0,"PTNR_ID"));
        			this.edtComPtnrNm.set_value(this.dsComReturn.getColumn(0,"PTNR_NM"));
        			
        		}
        		
        	}
        }

         
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.edtComPtnrNm.addEventHandler("onkeydown", this.fnOnkeydownEvent, this);
            this.btnPtnrSrch.addEventHandler("onclick", this.fnComPtnrSrch, this);

        };

        this.loadIncludeScript("ComSrchPtnr.xfdl", true);

       
    };
}
)();
