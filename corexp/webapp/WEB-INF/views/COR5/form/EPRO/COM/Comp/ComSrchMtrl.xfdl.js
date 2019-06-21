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
                this.set_name("CompSrchMtrl");
                this.set_titletext("AddOn-품목검색");
                this._setFormPosition(0,0,350,24);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsComReturn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Edit("edtComMtrlCd", "absolute", "0", "0", "28%", "24", null, null, this);
            obj.set_taborder("0");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("10");
            obj.set_enable("false");
            obj.style.setStyleValue("color", "disabled", "black");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("objNm").set("구매담당자ID");
            this.addChild(obj.name, obj);

            obj = new Edit("edtComMtrlNm", "absolute", "28.86%", "0", "62.57%", "24", null, null, this);
            obj.set_taborder("1");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("구매담당자명");
            this.addChild(obj.name, obj);

            obj = new Button("btnPchrgrSrch", "absolute", "91.71%", "0", "24", "24", null, null, this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("입고창고 버튼");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 350, 24, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("CompCalFromTo");
            		p.set_titletext("AddOn-품목검색");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("ComSrchMtrl.xfdl", function(exports) {
        /**
           @file       CompSrcType.xfdl
           @desc       소싱그룹 컴포넌트
           @author     송태봉
           @makedate   2017.09.13
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
        	var objBindItem = new BindItem("Bind01", "edtComMtrlCd", "value", objDs.name,sFromDtCol);
        	this.addChild("Bind01", objBindItem);
        	objBindItem.bind();
        	
        	var objBindItem = new BindItem("Bind02", "edtComMtrlNm", "value", objDs.name,sToDtCol);
        	this.addChild("Bind02", objBindItem);
        	objBindItem.bind();
        }

        

        

        this.fnOnkeydownEvent = function(obj,e)
        {
        	if(e.keycode == "13"){
        		this.fnComMtrlSrch();
        	}else if(e.keycode == "8"){
        		this.edtComMtrlCd.set_value("");
        	}
        	
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
        		if(sPopupId == "mtrlSearch"){
        			
        			this.edtComMtrlCd.set_value(this.dsComReturn.getColumn(0,"MTRL_CD"));
        			this.edtComMtrlNm.set_value(this.dsComReturn.getColumn(0,"MTRL_NM"));
        			
        		}
        		
        	}
        }

        this.fnComMtrlSrch = function(obj,e)
        {
        	var sArg = {
        				agv_id 	: this.edtComMtrlCd.value
        				,agv_nm : this.edtComMtrlNm.value
        				};
        	gfnModalPop(this, "mtrlSearch", "CPOP::BMtrlSrchPopup.xfdl", sArg, "fnPopCallBack", 1000, 600);	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.edtComMtrlNm.addEventHandler("onkeydown", this.fnOnkeydownEvent, this);
            this.edtComMtrlNm.addEventHandler("ontextchanged", this.fnOntextchanged, this);
            this.btnPchrgrSrch.addEventHandler("onclick", this.fnComMtrlSrch, this);

        };

        this.loadIncludeScript("ComSrchMtrl.xfdl", true);

       
    };
}
)();
