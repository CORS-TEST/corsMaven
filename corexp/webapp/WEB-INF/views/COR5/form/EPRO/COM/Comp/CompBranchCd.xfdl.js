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
                this.set_name("CompBranchCd");
                this.set_titletext("구매조직");
                this._setFormPosition(0,0,198,21);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBranchCd", this);
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"BRANCH_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"BRANCH_NM\">--전체--</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Combo("cboBranchCd", "absolute", "0", "0", null, null, "0", "0", this);
            this.addChild(obj.name, obj);
            obj.set_autoselect("true");
            obj.set_codecolumn("BRANCH_CD");
            obj.set_datacolumn("BRANCH_NM");
            obj.set_innerdataset("@dsBranchCd");
            obj.getSetter("objNm").set("구매조직");
            obj.set_taborder("0");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 198, 21, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("CompCalFromTo");
            		p.set_titletext("구매조직");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("CompBranchCd.xfdl", function(exports) {
        /**
         * @파일명       	: CompBranchCd.xfdl
         * @생성자       	: 한민희
         * @생성일자     	: 2017. 10. 12.
         * @설명			: 구매조직 공통 컴포넌트(콤보)
         * @최종수정자		: 한민희
         * @최종수정일자	: 2017. 10. 12.
        */  

        /**
          * @함수명	: fnSetBind
          * @input    	: objDs:Dataset(데이터셋 오브젝트), bindColumn(바인딩 할 컬럼), type(A:--전체--, S:--선택--)
          * @desc     	: 구매조직 데이터셋 바인딩
          */
        this.fnSetBind = function(objDs,bindColumn,type)
        {
         	this.removeChild("Bind01");
         	
         	var objBindItem = new BindItem("Bind01", "cboBranchCd", "value", objDs.name, bindColumn); 	
         	this.addChild("Bind01", objBindItem);
         	objBindItem.bind();
         	
         	this.cboBranchCd.type = type;
         	this.cboBranchCd.set_index(0);
        }

        /**
        	@함수명	fnFormOnload
        	@desc   	폼 onLoad 이벤트
        */
        this.fnFormOnload = function(obj,e)
        {
        	this.fnSearch();
        }

        /**
        	@함수명	fnSearch
        	@desc   	조회 프로세스
        */
        this.fnSearch = function()
        {
        	var sSvcID = "readCompBranchCd";
        	var sController = "epro.com.service.BComService.readCompBranchCd";
        	var sInDatasets = ""
        	var sOutDatasets = "dsBranchCd=dsBranchCd";
        	var sCallbackFunc = "fnTrCallBack";
        	
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc, null, null, null, false);
        }

        /**
        	@함수명	fnTrCallBack
        	@desc   	Transaction Callback함수
        */
        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	switch(strSvcID){
        		case "readCompBranchCd" :			
        			var type;
        			
        			if(this.cboBranchCd.type == "A"){		
        				type = GV_COMBO_A_K;
        			}else if(this.cboBranchCd.type == "S"){
        				type = GV_COMBO_S_K;
        			}
        			
        			var nRow = this.dsBranchCd.insertRow();				
        			if(nRow > -1){
        				this.dsBranchCd.setColumn(nRow, "BRANCH_CD", "");
        				this.dsBranchCd.setColumn(nRow, "BRANCH_NM", type);
        				this.cboBranchCd.set_index(nRow);
        			}
        		break;
        		
        		default:
        		break;	
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fnFormOnload, this);

        };

        this.loadIncludeScript("CompBranchCd.xfdl", true);

       
    };
}
)();
