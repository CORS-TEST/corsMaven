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
                this.set_name("pop_docType");
                this.set_titletext("인지세납부 증빙첨부");
                this.set_cssclass("frm_POP_Search");
                this._setFormPosition(0,0,529,394);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCntr", this);
            obj._setContents("<ColumnInfo><Column id=\"CNTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TSTAMP_RUN_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"ET_PAY_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "7", null, null, "0%", "0", this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Div("div_41", "absolute", "10", "112", null, "200", "10", null, this.Div00);
            obj.set_taborder("34");
            obj.set_text("Div04");
            obj.set_url("CCOMP::CompNFileUpDown.xfdl");
            this.Div00.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "3.4%", "312", null, "26", "9.45%", null, this.Div00);
            obj.set_taborder("35");
            obj.set_text("* 전자수입인지 또는 국세청납부확인서를 첨부하시기 바랍니다.");
            obj.style.set_color("red");
            obj.style.set_font("9 arial");
            this.Div00.addChild(obj.name, obj);
            obj = new Div("Div01", "absolute", "6.05%", "334", null, "24", "13.04%", null, this.Div00);
            obj.set_taborder("36");
            obj.set_text("* 인지세 납부증빙 첨부파일 안내");
            obj.style.set_align("left middle");
            this.Div00.addChild(obj.name, obj);
            obj = new Div("Div02", "absolute", "6.05%", "355", null, "24", "13.04%", null, this.Div00);
            obj.set_taborder("37");
            obj.set_text("* 인지세 관련 법령 및 금액 안내");
            obj.style.set_align("left middle");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("btnTstampFileInfo", "absolute", null, "338", "50", "18", "50", null, this.Div00);
            obj.set_taborder("38");
            obj.set_text("보기");
            obj.set_cssclass("btn_WF_Custom");
            obj.getSetter("objNm").set("구매요청복사버튼");
            obj.getSetter("lbcd").set("");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("btnTstampAmtInfo", "absolute", null, "359", "50", "18", "50", null, this.Div00);
            obj.set_taborder("39");
            obj.set_text("보기");
            obj.set_cssclass("btn_WF_Custom");
            obj.getSetter("objNm").set("구매요청복사버튼");
            obj.getSetter("lbcd").set("");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label05", "absolute", "10", "34", null, "33", "10", null, this.Div00);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("st_Ttl", "absolute", "10", "34", null, "33", "56.14%", null, this.Div00);
            obj.set_taborder("41");
            obj.set_text("전자수입인지 납부(고유)번호");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label00", "absolute", "10", "66", null, "33", "10", null, this.Div00);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("st_Ttl00", "absolute", "10", "66", null, "33", "56.14%", null, this.Div00);
            obj.set_taborder("43");
            obj.set_text("인지세(납부금액)");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            this.Div00.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit01", "absolute", "237", "71", null, "24", "20", null, this.Div00);
            obj.set_taborder("47");
            obj.set_mask("#,##0");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "237", "39", null, "24", "20", null, this.Div00);
            obj.set_taborder("48");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);
            obj = new Div("divViewCompTitle00", "absolute", "0", "7", null, "24", "10", null, this.Div00);
            obj.set_taborder("49");
            obj.getSetter("objNm").set("DIV-기본정보 타이틀");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "10", "0", "255", "24", null, null, this.Div00.divViewCompTitle00);
            obj.set_taborder("6");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.getSetter("objNm").set("기본정보타이틀");
            this.Div00.divViewCompTitle00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.Div00.divViewCompTitle00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("49");
            		p.getSetter("objNm").set("DIV-기본정보 타이틀");

            	}
            );
            this.Div00.divViewCompTitle00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_text("Div00");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 529, 394, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("인지세납부 증빙첨부");
            		p.set_cssclass("frm_POP_Search");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","Div00.MaskEdit01","value","dsCntr","TSTAMP_RUN_AMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Div00.Edit00","value","dsCntr","ET_PAY_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompNFileUpDown.xfdl");
        };
        
        // User Script
        this.registerScript("BCntrTstampPopup.xfdl", function(exports) {
        /***************************************************************************
         * Program ID    : SCntrPrgAttchFilePopup.xfdl
         * Program Name  : 계약진행현황 첨부파일
         * Author        : 안성민
         * Created On    : 2019.03.07
        **************************************************************************/
        this.popTitle = "인지세납부 증빙첨부"
        var mode = "";

        this.FormOnload = function(obj,e)
        {
        	gfnMakeFileDs(this);
        	var ownFrame = this.getOwnerFrame();
        	
        	this.dsCntr.setColumn(0,"BRANCH_CD",ownFrame.agv_branchCd);
        	this.dsCntr.setColumn(0,"CNTR_NO",ownFrame.agv_no);
        	this.dsCntr.setColumn(0,"CNTR_ORDR",ownFrame.agv_ordr);
        	this.dsCntr.setColumn(0,"FILE_TYPE",ownFrame.agv_type);
        	mode = ownFrame.agv_mode;
        	
        	this.fnSearch();
        }

        this.fnSearch = function()
        {	
            var sSvcID = "searchCntrTstamp";
        	var sController = "epro.cntr.service.BCntrService.searchCntrTstamp";
        	var sInDatasets = "dsCntr=dsCntr";
        	var sOutDatasets = "dsCntr=dsCntr";
        	var sCallbackFunc = "fnTrCallBack";
        		  
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
          * @함수명	: fnFileload
          * @desc     	: 탭페이지 첨부파일 셋팅
          */
        this.fnFileload= function(fUse)
        {
        	var sTableNm = "MM_CNTR";
        	var arrFileKey = [this.dsCntr.getColumn(0, "CNTR_NO")
         					 ,this.dsCntr.getColumn(0, "CNTR_ORDR")
         					 ,this.dsCntr.getColumn(0, "FILE_TYPE")]
         					 
        	this.Div00.div_41.fnFileInit(this, sTableNm, this.dsCntr, arrFileKey, fUse);
        }

        
        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	if(strErrCd < 0){
        		return;
        	}
        	
        	switch(strSvcID)
        	{
        		case "searchCntrTstamp" :
        			this.fnFileload("Y");
        			break;
        		default:
        			break;	
        	}
        }

        this.fnBtnTstampFileInfoOnclick = function(obj,e)
        {
        	gfnModalPop(this, "tstampAttchFileInfoPopup", "BCNTR::BCntrTstampAttchFileInfoPopup.xfdl", {}, "", 1000, 410);
        }

        this.fnBtnTstampAmtInfoOnclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.FormOnload, this);
            this.Div00.btnTstampFileInfo.addEventHandler("onclick", this.fnBtnTstampFileInfoOnclick, this);
            this.Div00.btnTstampAmtInfo.addEventHandler("onclick", this.fnBtnTstampAmtInfoOnclick, this);
            this.Div00.st_Ttl.addEventHandler("onclick", this.Div00_st_Ttl_onclick, this);

        };

        this.loadIncludeScript("BCntrTstampPopup.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
