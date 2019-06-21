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
                this.set_name("CompSrcType");
                this.set_titletext("소싱그룹분류");
                this._setFormPosition(0,0,185,23);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"SRC_GRP_ID\" size=\"40\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsLvl1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsLvl2", this);
            obj._setContents("<ColumnInfo><Column id=\"SRC_GRP_ID\" size=\"256\" type=\"STRING\"/><Column id=\"SRC_GRP_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SRC_GRP_NM\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "0%", "0", null, null, "0%", "40", this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cboLvl1", "absolute", "0", "0", null, "23", "59.46%", null, this);
            this.addChild(obj.name, obj);
            obj.set_codecolumn("SRC_GRP_ID");
            obj.set_datacolumn("SRC_GRP_NM");
            obj.set_innerdataset("@dsLvl1");
            obj.getSetter("objNm").set("대분류");
            obj.set_taborder("1");
            obj.set_index("-1");

            obj = new Combo("cboLvl2", "absolute", "41.62%", "0", null, "23", "1.62%", null, this);
            this.addChild(obj.name, obj);
            obj.set_codecolumn("SRC_GRP_ID");
            obj.set_datacolumn("SRC_GRP_NM");
            obj.set_enable("false");
            obj.set_innerdataset("@dsLvl2");
            obj.getSetter("objNm").set("중분류");
            obj.set_taborder("2");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 185, 23, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("CompCalFromTo");
            		p.set_titletext("소싱그룹분류");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("CompSrcType.xfdl", function(exports) {
        /**
           @file       CompSrcType.xfdl
           @desc       소싱그룹 컴포넌트
           @author     송태봉
           @makedate   2017.09.13
           @history    
        */

        /**
        	@function	fnOnLoad()
        	@desc   	폼 로드 이벤트
        */
        this.fnOnload = function(obj,e)
        {
        	this.dsCond.addRow();
        	this.dsLvl2.setColumn(0,"SRC_GRP_NM",gfnMultiLabel("EPRO_LABEL_00786"));
        	
        	this.fnSrcLvl1();
        }

        
        /**
        	@function	fnSetBind()
        	@param		objDs {Dataset}
        				sFromDtCol {String}
        				sToDtCol {String}
        	@desc   	데이터셋 입력된 LVL1 LVL2 바인딩
        */ 
        this.fnSetBind = function(objDs,lvl1,lvl2)
        {
        	this.removeChild("Bind01");
        	this.removeChild("Bind02");
        	
        	var objBindItem = new BindItem("Bind01", "cboLvl1", "value", objDs.name, lvl1);
        	this.addChild("Bind01", objBindItem);
        	objBindItem.bind();
        	
        	objBindItem = new BindItem("Bind02", "cboLvl2", "value", objDs.name, lvl2);
        	this.addChild("Bind02", objBindItem);
        	objBindItem.bind();
        }

        /**
          * @함수명	: fnPreSrcLvl1
          * @desc   : LVL1 조회 전 처리
          */
        this.fnPreSrcLvl1 = function(){
        	return true;
        }

        /**
          * @함수명	: fnSrcLvl1
          * @desc   : LVL1 조회
          */
        this.fnSrcLvl1 = function(){
        	
        	if(!this.fnPreSrcLvl1()) return false;

        	var sSvcID = "searchComSrcLvl1";
        	var sController = "epro.com.service.BComService.searchComSrcLvl1";
        	var sInDatasets = "dsCond=dsCond";
        	var sOutDatasets = "dsLvl1=dsLvl1";
        	var sCallbackFunc = "fnTrCallBack";	
        					
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc, null);
        }

        
        /**
          * @함수명	: fnPreSrcLvl2
          * @desc     	: LVL2 조회 전 처리
          */
        this.fnPreSrcLvl2 = function(){
        	return true;
        }

        /**
          * @함수명	: fnSrcLvl2
          * @desc     	: LVL2 조회
          */
        this.fnSrcLvl2 = function(){
        	
        	if(!this.fnPreSrcLvl2()) return false;

        	var sSvcID = "searchComSrcLvl2";
        	var sController = "epro.com.service.BComService.searchComSrcLvl2";
        	var sInDatasets = "dsCond=dsCond";
        	var sOutDatasets = "dsLvl2=dsLvl2";
        	var sCallbackFunc = "fnTrCallBack";	
        					
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc, null);
        }

        /**
        	@function	fnTrCallBack()
        	@desc   	트랜잭션 콜백 함수
        */
        this.fnTrCallBack = function (strSvcID,strErrCd,strErrMsg)
        {
        	switch(strSvcID){
        		case "searchComSrcLvl1" :
        			this.dsLvl1.insertRow(0);
        			this.dsLvl1.setColumn(0,"SRC_GRP_ID","");
        			this.dsLvl1.setColumn(0,"SRC_GRP_NM",gfnMultiLabel("EPRO_LABEL_00786"));
        			
        			this.cboLvl1.set_index(0);
        			this.cboLvl2.set_index(0);
        			break;
        		
        		case "searchComSrcLvl2" :
        			this.dsLvl2.insertRow(0);
        			this.dsLvl2.setColumn(0,"SRC_GRP_ID","");
        			this.dsLvl2.setColumn(0,"SRC_GRP_NM",gfnMultiLabel("EPRO_LABEL_00786"));
        			
        			this.cboLvl2.set_index(0);
        			break;
        			
        		default:
        			break;	
        	}
        }

        /**
        	@function	fnOnLvl1Change()
        	@desc   	LVL1 컴포넌트 체인지 이벤트
        */
        this.fnOnLvl1Change = function(obj,e)
        {
        	if(e.postvalue==""){
        		this.dsLvl2.clearData();
        		this.dsLvl2.addRow();
        		this.dsLvl2.setColumn(0,"SRC_GRP_ID","");
        		this.dsLvl2.setColumn(0,"SRC_GRP_NM",gfnMultiLabel("EPRO_LABEL_00786"));
        		this.cboLvl2.set_index(0);
        		this.cboLvl2.set_enable(false);
        		
        	}else{
        		this.dsCond.setColumn(0,"SRC_GRP_ID",e.postvalue);
        		this.cboLvl2.set_enable(true);
        		this.fnSrcLvl2();
        	}	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fnOnload, this);
            this.addEventHandler("ontimer", this.comCalendar_ontimer, this);
            this.cboLvl1.addEventHandler("onitemchanged", this.fnOnLvl1Change, this);

        };

        this.loadIncludeScript("CompSrcType.xfdl", true);

       
    };
}
)();
