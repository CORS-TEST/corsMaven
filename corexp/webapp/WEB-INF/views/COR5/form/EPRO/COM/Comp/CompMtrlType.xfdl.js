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
                this.set_name("CompMtrlType");
                this.set_titletext("품목대중소분류");
                this._setFormPosition(0,0,306,23);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMtrlType1", this);
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IS_ROLE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMtrlType2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMtrlType3", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "0%", "0", null, null, "0%", "40", this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cboMtrlType1", "absolute", "0", "0", null, "23", "75.5%", null, this);
            this.addChild(obj.name, obj);
            obj.set_codecolumn("MTRL_GRP_ID");
            obj.set_datacolumn("MTRL_GRP_NM");
            obj.set_innerdataset("@dsMtrlType1");
            obj.getSetter("objNm").set("대분류");
            obj.set_taborder("1");
            obj.set_index("-1");

            obj = new Combo("cboMtrlType2", "absolute", "25%", "0", null, "23", "40.5%", null, this);
            this.addChild(obj.name, obj);
            obj.set_codecolumn("MTRL_GRP_ID");
            obj.set_datacolumn("MTRL_GRP_NM");
            obj.set_innerdataset("@dsMtrlType2");
            obj.getSetter("objNm").set("중분류");
            obj.set_taborder("2");

            obj = new Combo("cboMtrlType3", "absolute", "60%", "0", null, "23", "0%", null, this);
            this.addChild(obj.name, obj);
            obj.set_codecolumn("MTRL_GRP_ID");
            obj.set_datacolumn("MTRL_GRP_NM");
            obj.set_innerdataset("@dsMtrlType3");
            obj.getSetter("objNm").set("소분류");
            obj.set_taborder("3");
            obj.set_index("-1");

            obj = new Edit("edtMtrlValue", "absolute", "399", "0", "158", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 306, 23, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("CompCalFromTo");
            		p.set_titletext("품목대중소분류");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("CompMtrlType.xfdl", function(exports) {
        /**
           @file       CompMtrlType.xfdl
           @desc       품목분류 컴포넌트
           @author     김민성
           @makedate   2019-04-30
           @history    파라다이스 로직 복원
        */

        /**
        	@var  this.fvMtrlGrpId
        	@desc 전역변수
        */
        this.fvMtrlGrpId = "";	

        /**
        	@var  this.fvRoleId
        	@desc 권한을 통한 컨트롤이 필요할 경우 등록하여 사용한다.
        */
        this.fvRoleId = "B_INSTALL,B_PUR_M,B_PUR,B_SYSTEM,B_WEBMASTER"

        
        /**
        	@function	fnOnLoad()
        	@desc   	폼 로드 이벤트
        */
        this.fnOnload = function(obj,e)
        {
        	this.fnSearch();
        }

        
        /**
        	@function	fnSetBind()
        	@desc   	데이터셋 입력된 날짜를 바인딩(데이터셋명, 대분류,중분류,소분류,레시피여부,문서유형)
        */ 
        this.fnSetBind = function(objDs,mtrlType1,mtrlType2,mtrlType3,type)
        {
        	this.removeChild("Bind01");
        	this.removeChild("Bind02");
        	this.removeChild("Bind03");
        	
        	if(type != "" && type != null){
        		this.fvMtrlGrpId = type;
        	}
        		
        	var objBindItem = new BindItem("Bind01", "cboMtrlType1", "value", objDs.name, mtrlType1);
        	this.addChild("Bind01", objBindItem);
        	objBindItem.bind();
        	
        	var objBindItem = new BindItem("Bind02", "cboMtrlType2", "value", objDs.name, mtrlType2);
        	this.addChild("Bind02", objBindItem);
        	objBindItem.bind();
        	
        	var objBindItem = new BindItem("Bind03", "cboMtrlType3", "value", objDs.name, mtrlType3);
        	this.addChild("Bind03", objBindItem);
        	objBindItem.bind();
        }

        /**
          * @함수명	: fnPreSearch
          * @desc     	: 조회 전 처리
          */
        this.fnPreSearch = function(){

        	this.dsMtrlType1.setColumn(0,"BRANCH_CD",application.gdsUserInfo.getColumn(0,"BRANCH_CD"));
        	
        	if(!gfnIsRole(this.fvRoleId)){
        		this.dsMtrlType1.setColumn(0,"IS_ROLE","Y");	
        	}

        	return true;
        }

        /**
          * @함수명	: fnSearch
          * @desc     	: 품목분류 조회 프로세스
          */
        this.fnSearch = function(){

        	if(!this.fnPreSearch()) return false;
        	
        	var sSvcID = "searchComMtrlCls";
        	var sController = "epro.com.service.BComService.searchComMtrlCls";
        	var sInDatasets = "dsCond=dsMtrlType1";
        	var sOutDatasets = "dsMtrlType1=dsMtrlType1 dsMtrlType2=dsMtrlType2 dsMtrlType3=dsMtrlType3";
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
        		case "searchComMtrlCls" :
        		
        			this.cboMtrlType2.set_readonly(true);
        			this.cboMtrlType3.set_readonly(true);
        			this.cboMtrlType1.set_value("");
        			this.cboMtrlType2.set_value("");
        			this.cboMtrlType3.set_value("");
        			
        			if(this.fvMtrlGrpId != ""){				
        				this.cboMtrlType1.set_value(this.fvMtrlGrpId);
        				this.dsMtrlType2.filter("UP_MTRL_GRP_ID == "+this.fvMtrlGrpId+" || MTRL_GRP_ID == ''");		
        				this.cboMtrlType2.set_value("");
        				this.cboMtrlType1.set_readonly(true);
        				this.cboMtrlType2.set_readonly(false);
        				
        			}
        			break;
        			
        		default:
        			break;	
        	}
        }

        this.fnType1OnItemChanged = function(obj,e)
        {
        	if(obj.value == ""){
        		this.dsMtrlType2.filter("");
        		this.dsMtrlType3.filter("");
        		this.cboMtrlType2.set_value("");
        		this.cboMtrlType3.set_value("");
        		this.cboMtrlType2.set_readonly(true);
        		this.cboMtrlType3.set_readonly(true);
        		this.edtMtrlValue.set_value("");
        	}else{
        		this.dsMtrlType2.filter("UP_MTRL_GRP_ID =="+obj.value+" || MTRL_GRP_ID == ''");
        		this.cboMtrlType2.set_readonly(false);
        		this.cboMtrlType2.set_value("");
        		this.cboMtrlType3.set_value("");
        		this.cboMtrlType3.set_readonly(true);
        		this.edtMtrlValue.set_value(obj.value);
        	}
        }

        this.fnType2OnItemChanged = function(obj,e)
        {
        	if(obj.value == ""){
        		this.dsMtrlType3.filter("");
        		this.cboMtrlType3.set_value("");
        		this.cboMtrlType3.set_readonly(true);
        	}else{
        		this.dsMtrlType3.filter("UP_MTRL_GRP_ID =="+obj.value+" || MTRL_GRP_ID == ''");
        		this.cboMtrlType3.set_value("");
        		this.cboMtrlType3.set_readonly(false);
        		this.edtMtrlValue.set_value(obj.value);
        	}
        }

        this.fnType3OnItemChanged = function(obj,e)
        {
        	this.edtMtrlValue.set_value(obj.value);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fnOnload, this);
            this.addEventHandler("ontimer", this.comCalendar_ontimer, this);
            this.cboMtrlType1.addEventHandler("onitemchanged", this.fnType1OnItemChanged, this);
            this.cboMtrlType2.addEventHandler("onitemchanged", this.fnType2OnItemChanged, this);
            this.cboMtrlType3.addEventHandler("onitemchanged", this.fnType3OnItemChanged, this);

        };

        this.loadIncludeScript("CompMtrlType.xfdl", true);

       
    };
}
)();
