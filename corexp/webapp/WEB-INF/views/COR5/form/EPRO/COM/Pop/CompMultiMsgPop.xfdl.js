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
                this.set_name("CompMultiMsgPop");
                this.set_titletext("다중 메시지 팝업");
                this._setFormPosition(0,0,704,358);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_msg", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grd_page", "absolute", "15", "75", null, "236", "15", null, this);
            obj.set_binddataset("ds_msg");
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"140\"/><Column size=\"483\"/></Columns><Rows><Row band=\"head\" size=\"31\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"상태\"/><Cell col=\"1\" expr=\"\" text=\"분류\"/><Cell col=\"2\" expr=\"\" text=\"메세지\"/></Band><Band id=\"body\"><Cell displaytype=\"image\" text=\"expr:&quot;img::img_WF_&quot;+ERR_LVL+&quot;.png&quot;\"/><Cell col=\"1\" text=\"bind:VALID_TYPE\"/><Cell col=\"2\" displaytype=\"decoratetext\" edittype=\"none\" expandimage=\"URL('img::grd_WF_Expand.png')\" expandshow=\"show\" expandsize=\"21\" style=\"align:left;\" text=\"bind:MSG\" tooltiptext=\"bind:MSG\"/></Band></Format><Format id=\"debug\"><Columns><Column size=\"40\"/><Column size=\"140\"/><Column size=\"483\"/><Column size=\"300\"/><Column size=\"100\"/></Columns><Rows><Row band=\"head\" size=\"31\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"상태\"/><Cell col=\"1\" expr=\"\" text=\"분류\"/><Cell col=\"2\" expr=\"\" text=\"메세지\"/><Cell col=\"3\" expr=\"\" text=\"path\"/><Cell col=\"4\" expr=\"\" text=\"Column\"/></Band><Band id=\"body\"><Cell displaytype=\"image\" text=\"expr:&quot;img::img_WF_&quot;+ERR_LVL+&quot;.png&quot;\"/><Cell col=\"1\" text=\"bind:VALID_TYPE\"/><Cell col=\"2\" edittype=\"none\" expandimage=\"URL('img::grd_WF_Expand.png')\" expandshow=\"show\" expandsize=\"21\" style=\"align:left;\" text=\"bind:MSG\"/><Cell col=\"3\" edittype=\"readonly\" style=\"align:left;\" text=\"bind:PATH\"/><Cell col=\"4\" edittype=\"readonly\" text=\"bind:DS_COLUMN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popClose", "absolute", "88.49%", "45", "65", "25", null, null, this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "43", "324", "72", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_text("심각한 오류 :");
            this.addChild(obj.name, obj);

            obj = new Static("sta_stopCnt", "absolute", "17.19%", "324", null, "21", "78.13%", null, this);
            obj.style.set_color("red");
            obj.style.set_align("right middle");
            obj.set_taborder("6");
            obj.set_text("건수");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "165", "324", "32", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_text("건");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "243", "326", "20", "21", null, null, this);
            obj.style.set_background("transparent URL('img::img_WF_W.png')");
            obj.style.set_align("center middle");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("sta_warningCnt", "absolute", "44.03%", "324", null, "21", "51.14%", null, this);
            obj.style.set_color("blue");
            obj.style.set_align("right middle");
            obj.set_taborder("9");
            obj.set_text("건수");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "353", "324", "33", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_text("건");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "268", "324", "36", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_text("경고 :");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popSave", "absolute", "78.84%", "45", "65", "25", null, null, this);
            obj.set_enable("true");
            obj.set_taborder("12");
            obj.set_text("확인");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "0", "30", "30", "8", null, this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title", "absolute", "0", "0", null, "30", "640", null, this);
            obj.set_taborder("14");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "17", "326", "20", "21", null, null, this);
            obj.style.set_background("transparent URL('img::img_WF_E.png')");
            obj.style.set_align("center middle");
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_debug", "absolute", "634", "325", "62", "20", null, null, this);
            obj.set_taborder("16");
            obj.set_text("Debug");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 704, 358, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("FrmPopCheckScreen");
            		p.set_titletext("다중 메시지 팝업");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("Static05LangBind2017110317184268146","Static05","text","gdsLabel","EPRO_LABEL_00070");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btn_popSaveLangBind2017110317184265170","btn_popSave","text","gdsLabel","EPRO_LABEL_00544");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("CompMultiMsgPop.xfdl", function(exports) {
        /**
           @file       CompMultiMsgPop.xfdl
           @desc       다중 메시지 팝업
           @author     
           @makedate   2016.03.23.
           @history    
        */

        

        /**
        	@function	CompMultiMsgPop_onload
        	@desc   	
        */  
        this.CompMultiMsgPop_onload = function(obj,e)
        {
        	var frame = this.getOwnerFrame();
        	
        	if(this.gfn_isNull(frame.agv_objDs)) return;
        	
        	this.ds_msg.copyData(frame.agv_objDs);
        	
        	this.ds_msg.set_enableevent(false);
        		
        	var nAllCnt = this.ds_msg.rowcount;
        	this.ds_msg.filter("ERR_LVL=='W'");
        	var nWarningCnt = this.ds_msg.rowcount;
        	this.ds_msg.filter("");
        	this.sta_warningCnt.set_text(nWarningCnt);
        	this.sta_stopCnt.set_text(nAllCnt - nWarningCnt);
        	
        	this.ds_msg.set_enableevent(true);
        	
        	//경고만 있을때는 저장하게 해준다.
        	this.btn_popSave.set_visible(this.sta_stopCnt.text=="0"?true:false);
        	
        	//Status 처리
        	this.fn_setStatus();
        }

        /**
        	@function	btn_popSave_onclick	
        	@desc   	확인	
        */  
        this.btn_popSave_onclick = function(obj,e)
        {
        	var rtnStr = "save";
        	
        	var sFnNm = this.getOwnerFrame().agv_fnNm;
        	if(!this.gfn_isNull(sFnNm))
        	{
        		rtnStr += "|" + sFnNm;
        	}
        	
        	this.close(rtnStr);
        }

        
        /**
        	@function	btn_popClose_onclick
        	@desc   	닫기	
        */  
        this.btn_popClose_onclick = function(obj,e)
        {
        	this.close();
        }

        
        /**
        	@function	grd_page_onexpandup
        	@desc   	그리드 expand 버튼 클릭	
        */  
        this.grd_page_onexpandup = function(obj,e)
        {
        	var rtn = gfnGetSelRowString(this.ds_msg);
        	
        	if(rtn)
        	{
        		this.close(rtn);
        	}	
        }

        
        /**
        	@function	grd_page_oncelldblclick
        	@desc   	그리드 셀 더블클릭	
        */  
        this.grd_page_oncelldblclick = function(obj,e)
        {
        	this.grd_page_onexpandup();
        }

        /**
        	@function	fn_setStatus
        	@desc   	bottom 프레임 메시지 처리	
        */  
        this.fn_setStatus = function()
        {
        	//메시지 히스토리 기록
        	for(var i=0;i<this.ds_msg.rowcount;i++)
        	{
        		this.gfn_status(this.ds_msg.getColumn(i, "MSG"), null, null, this.ds_msg.getColumn(i, "ERR_LVL"));
        	}
        	
        	//전체 결과는 메시지 히스토리 기록 안함.
        	var sMsg = "오류 "+this.sta_stopCnt.text+ "건 경고 "+this.sta_warningCnt.text+"건 존재합니다.";
        	this.gfn_status(sMsg, null, false, this.gfn_constError());	
        }

        /**
        	@function	chk_debug_onchanged
        	@desc   	
        */  
        this.chk_debug_onchanged = function(obj,e)
        {
        	if(e.postvalue == 1)
        	{
        		this.grd_page.set_formatid("debug");
        	}
        	else
        	{
        		this.grd_page.set_formatid("default");
        	}
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.CompMultiMsgPop_onload, this);
            this.grd_page.addEventHandler("oncelldblclick", this.grd_page_oncelldblclick, this);
            this.grd_page.addEventHandler("onexpandup", this.grd_page_onexpandup, this);
            this.btn_popClose.addEventHandler("onclick", this.btn_popClose_onclick, this);
            this.btn_popSave.addEventHandler("onclick", this.btn_popSave_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_popClose_onclick, this);
            this.chk_debug.addEventHandler("onchanged", this.chk_debug_onchanged, this);

        };

        this.loadIncludeScript("CompMultiMsgPop.xfdl", true);

       
    };
}
)();
