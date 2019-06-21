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
                this.set_name("BRfqPtnrPop");
                this.set_titletext("업체견적진행현황");
                this.set_cssclass("frm_POP_Search");
                this._setFormPosition(0,0,934,256);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsRfqPtnr", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj.getSetter("dsDescription").set("검색된 데이터가 담기는 데이터셋");
            obj._setContents("<ColumnInfo><Column type=\"string\" id=\"CD_RFQ_SUBM_STTS_NM\" size=\"40\"/><Column type=\"string\" id=\"CD_RFQ_SUBM_STTS\" size=\"40\"/><Column type=\"string\" id=\"RCVR_NM\" size=\"30\"/><Column type=\"string\" id=\"SBMTR_ID\" size=\"50\"/><Column type=\"string\" id=\"SBMT_DT\" size=\"7\"/><Column type=\"string\" id=\"RCV_DT\" size=\"7\"/><Column type=\"string\" id=\"PTNR_NM\" size=\"150\"/><Column type=\"string\" id=\"SBMTR_NM\" size=\"30\"/><Column type=\"string\" id=\"RCVR_ID\" size=\"50\"/><Column type=\"string\" id=\"PTNR_ID\" size=\"20\"/><Column type=\"string\" id=\"BRANCH_CD\" size=\"20\"/><Column type=\"string\" id=\"RFQ_REQ_NO\" size=\"40\"/><Column type=\"string\" id=\"RFQ_ODR\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdList", "absolute", "10", "5", null, null, "10", "50", this);
            obj.set_taborder("3");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("dsRfqPtnr");
            obj.set_cellclickbound("cell");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"150\"/><Column size=\"55\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"227\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"사업자번호\"/><Cell col=\"1\" text=\"협력사명\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"접수자\"/><Cell col=\"4\" text=\"접수일시\"/><Cell col=\"5\" text=\"제출자\"/><Cell col=\"6\" text=\"제출일시\"/><Cell col=\"7\" text=\"취소사유\"/></Band><Band id=\"body\"><Cell cssclass=\"cell_link\" text=\"bind:PTNR_ID\" mask=\"@@@-@@-@@@@@\"/><Cell col=\"1\" style=\"align:left;\" cssclass=\"cell_link\" text=\"bind:PTNR_NM\"/><Cell col=\"2\" text=\"bind:CD_RFQ_SUBM_STTS_NM\"/><Cell col=\"3\" cssclass=\"cell_link\" text=\"bind:RCVR_NM\"/><Cell col=\"4\" text=\"bind:RCV_DT\"/><Cell col=\"5\" cssclass=\"cell_link\" text=\"bind:SBMTR_NM\"/><Cell col=\"6\" text=\"bind:SBMT_DT\"/><Cell col=\"7\" style=\"align:left;\" text=\"bind:CNCL_RFQ_RSN\" tooltiptext=\"bind:CNCL_RFQ_RSN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 934, 256, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("업체견적진행현황");
            		p.set_cssclass("frm_POP_Search");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("BRfqPtnrPop.xfdl", function(exports) {
        /**
           @file       BRfqPtnrPop.xfdl
           @desc       업체견적진행현황 팝업
           @author     정현근
           @makedate   2019.05.07
           @history    
        */  

        this.popTitle = "업체견적진행현황"

        /**
        	@function	bRfqPtnrPopOninit()
        	@desc   	(팝업)폼 oninit이벤트
        */
        this.bRfqPtnrPopOninit = function(obj,e)
        {
        	//시스템 공통함수 호출 : 팝업
        	//gfnPopOnLoad(this);
        	 
        }

        /**
        	@function	bRfqPtnrPopOnload()
        	@desc   	(팝업)폼 onload 이벤트
        */
        this.bRfqPtnrPopOnload = function(obj,e)
        {
        	//부모창으로 부터 전달받은 값	
        	var ownFrame = this.getOwnerFrame();
        	
        	//부모창으로 부터 전달받은 값을 NULL 이 아니면 검색조건 DataSet에 담는다.
        	var nRow = this.dsRfqPtnr.addRow();
        	this.dsRfqPtnr.setColumn(nRow,"BRANCH_CD",ownFrame.branch_cd);
        	this.dsRfqPtnr.setColumn(nRow,"RFQ_REQ_NO",ownFrame.rfq_req_no);
        	this.dsRfqPtnr.setColumn(nRow,"RFQ_ODR",ownFrame.rfq_odr);
        	this.dsRfqPtnr.setColumn(nRow,"CD_RFQ_SUBM_STTS",ownFrame.rfq_sumb_stts);
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
        	
        	var sSvcID = "readRfqPtnrQuote";
        	var sController = "epro.rfq.service.BRfqService.readRfqPtnrQuote";
        	var sInDatasets = "dsRfqPtnr=dsRfqPtnr";
        	var sOutDatasets = "dsRfqPtnr=dsRfqPtnr";
        	var sCallbackFunc = "fnTrCallBack";
        	
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
        	@function	fnTrCallBack()
        	@desc   	Transaction Callback함수
        */
        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	if(strErrCd < 0)
        	{
        		return;
        	}

        	switch(strSvcID)
        	{				
        		case "searchRfqPtnrQuote" : 
        		break;
        		
        		default:
        		break;		
        	}
        }

        /**
        	@function	btnCloseOnclick()
        	@desc   	(팝업)닫기 버튼 클릭 이벤트
        */
        this.btnCloseOnclick = function(obj,e)
        {
        	this.close();
        }

        this.grdListOncelldblclick = function(obj,e)
        {
        	if(gfnGrdBindColName(obj, e.cell)=="PTNR_NM")	//협력사명
        	{
        		var sArg = { agv_ptnrId:this.dsRfqPtnr.getColumn(e.row, "PTNR_ID")};
        		gfnModal("PopupComCorpRead", "commPop::PPOPC500P04.xfdl", sArg, "fn_popCallBack");
        	} else if(gfnGrdBindColName(obj, e.cell)=="PTNR_ID")	//협력사명
        	{
        		var sArg = { agv_ptnrId:this.dsRfqPtnr.getColumn(e.row, "PTNR_ID")};
        		gfnModal("PopupComCorpRead", "commPop::PPOPC500P04.xfdl", sArg, "fn_popCallBack");
        	} else if(gfnGrdBindColName(obj, e.cell)=="SBMTR_NM")	//요청자
        	{
        		var sArg = {	 branch_cd : application.gdsUserInfo.getColumn(0, "BRANCH_CD")
        						,  agv_id : this.dsRfqPtnr.getColumn(e.row, "SBMTR_ID")
        					};
        		gfnModal("PopupUserInfo", "commPop::PPOPC000P05.xfdl", sArg, "fn_popCallBack");
        	} else if(gfnGrdBindColName(obj, e.cell)=="RCVR_NM")	//요청자
        	{
        		var sArg = {	 branch_cd : application.gdsUserInfo.getColumn(0, "BRANCH_CD")
        						,  agv_id : this.dsRfqPtnr.getColumn(e.row, "RCVR_ID")
        					};
        		gfnModal("PopupUserInfo", "commPop::PPOPC000P05.xfdl", sArg, "fn_popCallBack");
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.bRfqPtnrPopOninit, this);
            this.addEventHandler("onload", this.bRfqPtnrPopOnload, this);
            this.grdList.addEventHandler("oncelldblclick", this.grdListOncelldblclick, this);

        };

        this.loadIncludeScript("BRfqPtnrPop.xfdl", true);

       
    };
}
)();
