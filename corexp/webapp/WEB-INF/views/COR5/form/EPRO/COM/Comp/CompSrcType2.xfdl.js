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
                this.set_enable("true");
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

            obj = new Combo("cboLvl1", "absolute", "0", "0", null, "23", "57%", null, this);
            this.addChild(obj.name, obj);
            obj.set_codecolumn("SRC_GRP_ID");
            obj.set_datacolumn("SRC_GRP_NM");
            obj.set_innerdataset("@dsLvl1");
            obj.getSetter("objNm").set("대분류");
            obj.set_taborder("1");
            obj.set_index("-1");

            obj = new Combo("cboLvl2", "absolute", "45%", "0", null, "23", "1.62%", null, this);
            this.addChild(obj.name, obj);
            obj.set_codecolumn("SRC_GRP_ID");
            obj.set_datacolumn("SRC_GRP_NM");
            obj.set_innerdataset("@dsLvl2");
            obj.getSetter("objNm").set("중분류");
            obj.set_taborder("2");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 185, 23, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("CompCalFromTo");
            		p.set_enable("true");
            		p.set_titletext("소싱그룹분류");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("CompSrcType2.xfdl", function(exports) {
        /**
           @file       CompSrcType.xfdl
           @desc       소싱그룹 컴포넌트
           @author     안성민
           @makedate   2017.11.30
           @desc       상세에서 소싱그룹 2레벨까지 보여줄때 사용
           @ FormOnload시 fnSetBind를 해주고 
        */

        /**
        	@function	fnOnLoad()
        	@desc   	폼 로드 이벤트
        */
        this.fnOnload = function(obj,e)
        {
        	this.fnSearchSrc();
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
          * @desc   : 소싱그룹조회
          */
        this.fnPreSearchSrc = function(){
        	return true;
        }

        /**
          * @함수명	: fnSrcLvl1
          * @desc   : 조회
          */
        this.fnSearchSrc = function(){
        	
        	if(!this.fnPreSearchSrc()) return false;
        	var sSvcID = "searchSrcGrp";
        	var sController = "epro.com.service.BComService.searchSrcGrp";
        	var sInDatasets = "dsCond=dsCond";
        	var sOutDatasets = "dsLvl1=dsLvl1 dsLvl2=dsLvl2";
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
        		case "searchSrcGrp" :
        			this.dsLvl1.insertRow(0);
        			this.dsLvl1.setColumn(0,"SRC_GRP_ID","");
        			this.dsLvl1.setColumn(0,"SRC_GRP_NM",gfnMultiLabel("EPRO_LABEL_00786"));
        			this.dsLvl2.insertRow(0);
        			this.dsLvl2.setColumn(0,"SRC_GRP_ID","");
        			this.dsLvl2.setColumn(0,"SRC_GRP_NM",gfnMultiLabel("EPRO_LABEL_00786"));
        			this.dsLvl2.setColumn(0,"UP_SRC_GRP_ID","");			

        			
        			//this.cboLvl1.set_index(0);
        			//this.cboLvl2.set_index(0);
        			break;
        			
        		default:
        			break;	
        	}
        }

        /**
        	@function	dsFilter()
        	@desc   	lvl2 필터
        */
        this.dsFilter = function(val)
        {
        	this.dsLvl2.set_enableevent(false);
        	this.dsLvl2.filter("UP_SRC_GRP_ID=='" + val + "' || SRC_GRP_ID==''");
        	this.dsLvl2.set_enableevent(true);
        }

        /**
        	@function	fnCboLvl1OnitemChanged()
        	@desc   	cbolvl1 item변경이벤트
        */
        this.fnCboLvl1OnitemChanged = function(obj,e)
        {
        	this.dsFilter(obj.value);
        	this.cboLvl2.set_value("")
        	if(gfnIsNull(obj.value)) {
        		this.cboLvl2.set_enable(false);
        	} else {
        		this.cboLvl2.set_enable(true);
        	}
        	
        }

        /**
        	@function	fnGetSrcNm()
        	@input      lvl1 : cbolvl1의 Nm를가져온다
        				lvl2 : cbolvl2의 Nm를가져온다.
        	@return     String
        	@desc   	cbolvl1 item변경이벤트
        */
        this.fnGetSrcNm = function(lvl) 
        {
        	if(lvl == "lvl1") {
        		return this.dsLvl1.lookup("SRC_GRP_ID", this.cboLvl1.value, "SRC_GRP_NM");
        	} else if(lvl == "lvl2") {
        		return this.dsLvl2.lookup("SRC_GRP_ID", this.cboLvl2.value, "SRC_GRP_NM");
        	}
        }

        /**
        	@function	fnGetSrcNm2()
        	@input      lvl1 : cbolvl1의 Nm2를가져온다
        				lvl2 : cbolvl2의 Nm2를가져온다.
        	@return     String
        	@desc   	cbolvl1 item변경이벤트
        */
        this.fnGetSrcNm2 = function(lvl) 
        {
        	if(lvl == "lvl1") {
        		return this.dsLvl1.lookup("SRC_GRP_ID", this.cboLvl1.value, "SRC_GRP_NM2");
        	} else if(lvl == "lvl2") {
        		return this.dsLvl2.lookup("SRC_GRP_ID", this.cboLvl2.value, "SRC_GRP_NM2");
        	}
        }

        this.fnSetView = function()
        {
        	if(gfnIsNull(this.cboLvl1.value)) {
        		this.cboLvl2.set_enable(false)
        	} else {
        		this.dsFilter(this.cboLvl1.value);
        		this.cboLvl2.set_enable(true);
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onactivate", this.CompSrcType_onactivate, this);
            this.addEventHandler("onload", this.fnOnload, this);
            this.cboLvl1.addEventHandler("onitemchanged", this.fnCboLvl1OnitemChanged, this);

        };

        this.loadIncludeScript("CompSrcType2.xfdl", true);

       
    };
}
)();
