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
                this.set_name("BPtnrTndrPrgListPopup");
                this.set_titletext("협력사 입찰진행현황");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTndrPtnr", this);
            obj._setContents("<ColumnInfo><Column id=\"BID_DT\" type=\"string\" size=\"7\"/><Column id=\"RCVR_NM\" type=\"string\" size=\"30\"/><Column id=\"CD_PTNR_BID_STTS_NM\" type=\"string\" size=\"40\"/><Column id=\"CD_PTNR_BID_STTS\" type=\"string\" size=\"40\"/><Column id=\"RCV_DT\" type=\"string\" size=\"7\"/><Column id=\"TNDR_PTNR_NM\" type=\"string\" size=\"4000\"/><Column id=\"BIDR_NM\" type=\"string\" size=\"30\"/><Column id=\"PTNR_ID\" type=\"string\" size=\"20\"/><Column id=\"TNDR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TNDR_ODR\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grd_list", "absolute", "10", "46", null, null, "10", "456", this);
            obj.set_taborder("0");
            obj.set_binddataset("dsTndrPtnr");
            obj.set_autoenter("select");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"85\"/><Column size=\"164\"/><Column size=\"87\"/><Column size=\"144\"/><Column size=\"140\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"협력사ID\"/><Cell col=\"1\" text=\"협력사명\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"참여담당자\"/><Cell col=\"4\" text=\"참여일시\"/><Cell col=\"5\" text=\"응찰담당자\"/><Cell col=\"6\" text=\"응찰일시\"/><Cell col=\"7\" text=\"취소사유\"/></Band><Band id=\"body\"><Cell cssclass=\"cell_link\" text=\"bind:PTNR_ID\"/><Cell col=\"1\" style=\"align:left;\" cssclass=\"cell_link\" text=\"bind:TNDR_PTNR_NM\"/><Cell col=\"2\" text=\"bind:CD_PTNR_BID_STTS_NM\"/><Cell col=\"3\" text=\"bind:RCVR_NM\"/><Cell col=\"4\" text=\"bind:RCV_DT\"/><Cell col=\"5\" text=\"bind:BIDR_NM\"/><Cell col=\"6\" text=\"bind:BID_DT\"/><Cell col=\"7\" style=\"align:left;\" text=\"bind:CNCL_TNDR_RSN\" tooltiptext=\"bind:CNCL_TNDR_RSN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("협력사 입찰진행현황");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("BPtnrTndrPrgListPopup.xfdl", function(exports) {
        /**
         * @파일명       	: BTndrRsltPopup.xfdl
         * @생성자       	: 김승일
         * @생성일자     	: 2019. 05. 17.
         * @설명			: 협력사 입찰진행현황  팝업
         * @최종수정자		: 
         * @최종수정일자	: 
        */ 

        this.popTitle = "협력사 입찰진행현황";

        

        /**
        	@function	pop_tndrGoPop_onload()
        	@desc   	폼 onload 이벤트
        */ 
        this.popTndrPrgListOnload = function(obj,e)
        {
        	//부모창으로 부터 전달받은 값	
        	var ownFrame = this.getOwnerFrame();
        	
        	//부모창으로 부터 전달받은 값을 NULL 이 아니면 검색조건 DataSet에 담는다.
        	var nRow = this.dsTndrPtnr.addRow();
        	this.dsTndrPtnr.setColumn(nRow,"TNDR_NO",ownFrame.agv_id);
        	this.dsTndrPtnr.setColumn(nRow,"TNDR_ODR",ownFrame.agv_tndr_odr);
        	this.dsTndrPtnr.setColumn(nRow,"BRANCH_CD",ownFrame.agv_branch_cd);
        	this.fnSearch();
        }

        /**
        	@function	fnPreSearch()
        	@desc   	조회 전 처리
        */ 
        this.fnPreSearch = function()
        {
        	return true;
        }

        /**
        	@function	fnSearch()
        	@desc   	조회 프로세스
        */ 
        this.fnSearch = function()
        {
        	if(!this.fnPreSearch()) return false;
        	
        	var sSvcID = "search";
        	var sController = "epro.tndr.service.BTndrService.tndrGoPtnrSrch";
        	var sInDatasets = "dsTndrPtnr=dsTndrPtnr";
        	var sOutDatasets = "dsTndrPtnr=dsTndrPtnr";
        	var sCallbackFunc = "fnTrCallBack";
        	
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        
        /**
          * @함수명	: fnTrCallBack
          * @input    	: strSvcID(트랜잭션 ID), strErrCd(트랜잭션 결과 코드), strErrMsg(트랜잭션 결과 메시지)
          * @desc     	: Transaction Callback함수
          */
        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	if(strErrCd < 0) return;
        	
        	switch(strSvcID){
        		case "search" :
        			
        		break;
        				
        		case "update" :
        			
        		break;
        		
        		default:
        		break;	
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.popTndrPrgListOnload, this);
            this.grd_list.addEventHandler("oncelldblclick", this.grd_list_oncelldblclick, this);

        };

        this.loadIncludeScript("BPtnrTndrPrgListPopup.xfdl", true);

       
    };
}
)();
