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
                this.set_name("BPrHistPopup");
                this.set_titletext("구매요청 히스토리팝업");
                this._setFormPosition(0,0,700,250);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSrchOpt", this);
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"PR_ITEM_ID\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdList", "absolute", "10", "10", null, null, "10", "10", this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsSrchOpt");
            obj.set_cellclickbound("cell");
            obj.getSetter("f_colSize").set("N");
            obj.getSetter("f_excel").set("Y");
            obj.getSetter("f_filter").set("N");
            obj.getSetter("f_find").set("N");
            obj.getSetter("f_fix").set("Y");
            obj.getSetter("f_height").set("N");
            obj.getSetter("f_hide").set("N");
            obj.getSetter("f_init").set("Y");
            obj.getSetter("f_mode").set("N");
            obj.getSetter("f_save").set("N");
            obj.getSetter("f_sort").set("N");
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"100\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"300\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"일시\"/><Cell col=\"1\" expr=\"\" text=\"문서번호\"/><Cell col=\"2\" expr=\"\" text=\"구분\"/><Cell col=\"3\" expr=\"\" text=\"진행단계\"/><Cell col=\"4\" expr=\"\" text=\"비고\"/></Band><Band id=\"body\"><Cell calendardisplaynulltype=\"none\" displaytype=\"date\" mask=\"yyyy-MM-dd HH:mm:ss\" text=\"bind:CRT_DT\"/><Cell col=\"1\" text=\"bind:DOC_NO\"/><Cell col=\"2\" text=\"bind:CD_SUB_SYS_NM\"/><Cell col=\"3\" text=\"bind:CD_PRGRS_STEP_NM\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:RMARK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 700, 250, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("구매요청 히스토리팝업");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("BPrHistPopup.xfdl", function(exports) {
        /**
         * @파일명       	: BPrHistPopup.xfdl
         * @생성자       	: 송태봉
         * @생성일자     	: 2017. 9. 25.
         * @설명			    : 구매요청 히스토리팝업
         * @최종수정자		: 송태봉
         * @최종수정일자	    : 2017. 9. 25.
        */

        this.popTitle = "구매진행상태";
         
        /**
          * @함수명	: fnOnLoad
          * @desc   : 폼 onload이벤트
          */ 
        this.fnOnLoad = function(obj,e)
        {
        	var ownFrame = this.getOwnerFrame();
        	this.dsSrchOpt.setColumn(0,"BRANCH_CD",application.gdsUserInfo.getColumn(0,"BRANCH_CD"));
        	this.dsSrchOpt.setColumn(0,"PR_ITEM_ID",ownFrame.agv_id);
        	
        	this.fnSearch();
        }

        this.fnSearch = function()
        {
        	var sSvcID = "readComPrHist";
        	var sController = "epro.com.service.BComService.readComPrHist";
        	var sInDatasets = "dsSrchOpt=dsSrchOpt";
        	var sOutDatasets = "dsSrchOpt=dsSrchOpt";
        	var sCallbackFunc = "fnTrCallBack";	
        	
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
          * @함수명	: fnTrCallBack
          * @desc     	: Transaction Callback함수
          */
        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	if(strErrCd < 0){
        		return;
        	}
        	
        	switch(strSvcID){
        		case "readComUserInfo" :	
        		break;
         
        		default:
        		break;	
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fnOnLoad, this);
            this.grdList.addEventHandler("oncelldblclick", this.fnRtnData, this);
            this.grdList.addEventHandler("onkeydown", this.grdListOnkeydown, this);

        };

        this.loadIncludeScript("BPrHistPopup.xfdl", true);

       
    };
}
)();
