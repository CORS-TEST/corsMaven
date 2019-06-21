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
                this.set_name("BMtrlSrcGrpMappPop");
                this.set_titletext("소싱그룹매핑팝업");
                this._setFormPosition(0,0,513,63);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsReturn", this);
            obj._setContents("<ColumnInfo><Column id=\"LRG_SRC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"MDL_SRC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"SRC_GRP_NM2\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("staViewCompLine00", "absolute", "10", "15", null, "33", "20", null, this);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("staSrcLrgClsId", "absolute", "10", "15", "130", "33", null, null, this);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("TTL_TOT_AMT");
            obj.set_taborder("5");
            obj.set_text("소싱그룹");
            obj.set_tooltiptext("대분류");
            this.addChild(obj.name, obj);

            obj = new Div("divSrcGrp", "absolute", "148", "20", "267", "24", null, null, this);
            obj.set_taborder("6");
            obj.set_url("CCOMP::CompSrcType.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btnRtn", "absolute", "419", "20", "65", "24", null, null, this);
            obj.getSetter("objNm").set("적용");
            obj.set_taborder("0");
            obj.set_text("적용");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 513, 63, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("소싱그룹매핑팝업");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("divSrcGrpVi","divSrcGrp","visible","dsObjBindVi","divSrcGrp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divSrcGrpEn","divSrcGrp","enable","dsObjBindEn","divSrcGrp");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompSrcType.xfdl");
        };
        
        // User Script
        this.registerScript("BMstSrcGrpMappPop.xfdl", function(exports) {
        /**
         * @파일명       	: BMstSrcGrpMappPop.xfdl
         * @생성자       	: 정준화
         * @생성일자     	: 2017. 9. 04.
         * @설명			: 소싱그룹매핑 팝업
         * @최종수정자		: 정준화
         * @최종수정일자	: 2017. 9. 04.
        */ 

        this.popTitle = gfnMultiLabel("EPRO_LABEL_00192");

        /**
          * @함수명	: CSamplePopOnload
          * @desc     	: 폼 onload이벤트
          */
        this.BMtrlSrcGrpMappPopOnload = function(obj,e)
        {	
        	this.divSrcGrp.fnSetBind(this.dsReturn,"LRG_SRC_ID","MDL_SRC_ID");
        }
         
        /**
          * @함수명	: fnRtnData
          * @desc   : 
          */
        this.fnRtnData = function(obj,e)
        {	
        	if(gfnIsNull(this.dsReturn.getColumn(0,"LRG_SRC_ID"))){
        		gfnAlert("EPRO_LABEL_01231");
        		return;
        		
        	} else if(gfnIsNull(this.dsReturn.getColumn(0,"MDL_SRC_ID"))){
        		gfnAlert("EPRO_LABEL_01245");
        		return;
        	}
        	
        	var nRow = this.divSrcGrp.dsLvl2.findRow("SRC_GRP_ID",this.dsReturn.getColumn(0,"MDL_SRC_ID"))
        	var srcNm = this.divSrcGrp.dsLvl2.getColumn(nRow,"SRC_GRP_NM2");
        	this.dsReturn.setColumn(0,"SRC_GRP_NM2",srcNm);
        	
        	this.parent.close(this.dsReturn.saveXML());	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.BMtrlSrcGrpMappPopOninit, this);
            this.addEventHandler("onload", this.BMtrlSrcGrpMappPopOnload, this);
            this.btnRtn.addEventHandler("onclick", this.fnRtnData, this);

        };

        this.loadIncludeScript("BMstSrcGrpMappPop.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
