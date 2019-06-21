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
                this.set_name("BTndrTypePopup");
                this.set_titletext("입찰유형");
                this._setFormPosition(0,0,700,400);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDocType", this);
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TNDR_BASIC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TTL\" type=\"STRING\" size=\"256\"/><Column id=\"RMARK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TNDR_MTHD\" type=\"STRING\" size=\"256\"/><Column id=\"CRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CRT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_CHGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_CHG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PYMT_CNDTN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BID_CRNC\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BID_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"LPRC_OPEN_PTNR_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_ATD_PTNR_OPEN\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_PRE_BID\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_LOW_FAIL_APLY\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_PUR_AMT_APLY\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_PUR_AMT_OPEN\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_CERT\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_CNFDNC_OBY_AGRMT\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_LPRC_PTNR_OPEN\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_LPRC_AMT_OPEN\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_TMP_BID\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_LST_RFQ\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_TOT_BID\" type=\"STRING\" size=\"256\"/><Column id=\"ROUND_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"BGN_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"ROUND_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"RST_TIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCondition", this);
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"100\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdList", "absolute", "10", "43", null, null, "10", "54", this);
            obj.set_taborder("0");
            obj.set_binddataset("dsDocType");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"450\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"70\"/></Rows><Band id=\"head\"><Cell text=\"명칭\"/><Cell col=\"1\" text=\"설명\"/></Band><Band id=\"body\"><Cell text=\"bind:TTL\"/><Cell col=\"1\" text=\"bind:RMARK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnRtn", "absolute", null, "8", "65", "24", "10", null, this);
            obj.set_taborder("1");
            obj.set_text("적용");
            obj.set_cssclass("btn_WF_CRUD");
            obj.getSetter("objNm").set("적용");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 700, 400, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("입찰유형");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("BTndrTypePopup.xfdl", function(exports) {
        /**
         * @파일명       	: BTndrTypePopup.xfdl
         * @생성자       	: 김승일
         * @생성일자     	: 2019. 06. 03.
         * @설명			: 입찰유형 팝업
         * @최종수정자		: 
         * @최종수정일자	: 
        */ 

        this.popTitle = "입찰유형 선택";

        /**
        	@function	pop_docType_onload()
        	@desc   	(팝업)폼 oninit이벤트
        */ 
        this.popDocTypeOnload = function(obj,e)
        {
        	this.dsCondition.setColumn(0,"BRANCH_CD",application.gdsUserInfo.getColumn(0,"BRANCH_CD"));
        	this.fnSearch();
        }

        /**
        	@function	fnSearch()
        	@desc   	조회 프로세스
        */
        this.fnSearch = function()
        {	
        	var sSvcID = "search";
        	var sController = "epro.tndr.service.BTndrService.tndrDocTypeSrch";
        	var sInDatasets = "dsCondition=dsCondition";
        	var sOutDatasets = "dsDocType=dsDocType";
        	var sCallbackFunc = "fnTrCallBack";
        	
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
        	@function	fn_trCallBack()
        	@desc   	Transaction Callback함수
        */
        this.fn_trCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	if(strErrCd < 0){
        		return;
        	}
        	
        	switch(strSvcID){
        		case "search" :	
        		break;
        		
        		default:
        		break;	
        	}
        }

        /**
        	@function	btn_rtn_onclick()
        	@desc   	(팝업)적용 버튼 클릭 이벤트
        */ 
        this.btn_rtn_onclick = function(obj,e)
        {
        	var rtn = gfnGetSelRowString(this.dsDocType);
        	if(rtn){
        		this.parent.close(rtn);
        	}	
        }

        /**
        	@function	grd_list_oncelldblclick()
        	@desc   	(팝업)그리드 더블클릭 이벤트
        */ 
        this.grd_list_oncelldblclick = function(obj,e)
        {
        	var rtn = gfnGetSelRowString(this.dsDocType);
        	
        	if(rtn){
        		this.close(rtn);
        	}
        }

        /**
        	@function	btn_close_onclick()
        	@desc   	(팝업)닫기 버튼 클릭 이벤트
        */ 
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.popDocTypeOnload, this);
            this.grdList.addEventHandler("oncelldblclick", this.grd_list_oncelldblclick, this);
            this.btnRtn.addEventHandler("onclick", this.btn_rtn_onclick, this);

        };

        this.loadIncludeScript("BTndrTypePopup.xfdl", true);

       
    };
}
)();
