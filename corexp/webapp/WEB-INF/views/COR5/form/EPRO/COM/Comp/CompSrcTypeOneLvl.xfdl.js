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
                this.set_titletext("소싱그룹 1레벨");
                this._setFormPosition(0,0,185,23);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"SRC_GRP_ID\" size=\"40\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsLvl1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "0%", "0", null, null, "0%", "40", this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cboLvl1", "absolute", "0", "0", null, null, "0", "0", this);
            this.addChild(obj.name, obj);
            obj.set_codecolumn("SRC_GRP_ID");
            obj.set_datacolumn("SRC_GRP_NM");
            obj.set_innerdataset("@dsLvl1");
            obj.getSetter("objNm").set("대분류");
            obj.set_taborder("1");
            obj.set_index("-1");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 185, 23, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("CompCalFromTo");
            		p.set_titletext("소싱그룹 1레벨");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("CompSrcTypeOneLvl.xfdl", function(exports) {
        /**
         * @파일명       	: CompSrcTypeOneLvl.xfdl
         * @생성자       	: 한민희
         * @생성일자     	: 2017. 11. 10.
         * @설명			: 소싱그룹 1레벨
         * @최종수정자		: 한민희
         * @최종수정일자	: 2017. 11. 10.
        */

        /**
          * @함수명	: fnOnload
          * @desc     	: 폼 로드 이벤트
          */
        this.fnOnload = function(obj,e)
        {
        	this.dsCond.addRow();
        	this.fnSrcLvl1();
        }

        /**
          * @함수명	: fnSetBind
          * @input    	: objDs:Dataset(데이터셋 오브젝트)
        					, lvl1:소싱그룹1레빌과 바인딩할 컬럼(데이터셋 오브젝트)
        					, type: [A: --전체--], [S: --선택--], 없으면 추가 안함.
          * @desc     	: 데이터셋 입력된 LVL1 바인딩
          */
        this.fnSetBind = function(objDs,lvl1,type)
        {
        	this.removeChild("Bind01");
        	
        	var objBindItem = new BindItem("Bind01", "cboLvl1", "value", objDs.name, lvl1);
        	this.addChild("Bind01", objBindItem);
        	objBindItem.bind();
        	
        	this.cboLvl1.type = type;
        }

        /**
          * @함수명	: fnSrcLvl1
          * @desc     	: 소싱그룹 LVL1 조회
          */  
        this.fnSrcLvl1 = function()
        {
        	var sSvcID = "searchComSrcLvl1";
        	var sController = "epro.com.service.BComService.searchComSrcLvl1";
        	var sInDatasets = "dsCond=dsCond";
        	var sOutDatasets = "dsLvl1=dsLvl1";
        	var sCallbackFunc = "fnTrCallBack";	
        					
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc, null);
        }

        /**
          * @함수명	: fnTrCallBack
          * @desc     	: 트랜잭션 콜백 함수
          */  
        this.fnTrCallBack = function (strSvcID,strErrCd,strErrMsg)
        {
        	switch(strSvcID){
        		case "searchComSrcLvl1" :
        			
        			if(this.cboLvl1.type == "A"){
        				this.dsLvl1.insertRow(0);
        				this.dsLvl1.setColumn(0, "SRC_GRP_ID", "");
        				this.dsLvl1.setColumn(0, "SRC_GRP_NM", gfnMultiLabel("EPRO_LABEL_00786"));
        			}
        			else if(this.cboLvl1.type == "S"){
        				this.dsLvl1.insertRow(0);
        				this.dsLvl1.setColumn(0, "SRC_GRP_ID", "");
        				this.dsLvl1.setColumn(0, "SRC_GRP_NM", gfnMultiLabel("EPRO_LABEL_00785"));
        			}
        		
        			this.dsLvl1.set_rowposition(0);
        		break;		
        			
        		default:
        		break;	
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fnOnload, this);
            this.addEventHandler("ontimer", this.comCalendar_ontimer, this);

        };

        this.loadIncludeScript("CompSrcTypeOneLvl.xfdl", true);

       
    };
}
)();
