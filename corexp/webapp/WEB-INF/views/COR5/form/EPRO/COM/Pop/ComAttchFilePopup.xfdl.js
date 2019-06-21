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
                this.set_titletext("첨부파일팝업");
                this.set_cssclass("frm_POP_Search");
                this._setFormPosition(0,0,855,248);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFileCond", this);
            obj._setContents("<ColumnInfo><Column id=\"REF_TBL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_1\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_2\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_3\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_4\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_5\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_COL_1\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_COL_2\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_COL_3\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_COL_4\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_COL_5\" type=\"STRING\" size=\"256\"/><Column id=\"DS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "8", null, null, "0%", "8", this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Div("div_41", "absolute", "10", "30", null, "200", "10", null, this.Div00);
            obj.set_taborder("34");
            obj.set_text("Div04");
            obj.set_url("CCOMP::CompNFileUpDown.xfdl");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("btnSave", "absolute", null, "30", "75", "21", "149", null, this.Div00);
            obj.set_taborder("35");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Custom");
            obj.getSetter("objNm").set("구매요청복사버튼");
            obj.getSetter("lbcd").set("");
            this.Div00.addChild(obj.name, obj);


            
            // Layout Functions
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
            obj = new Layout("default", "", 855, 248, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("첨부파일팝업");
            		p.set_cssclass("frm_POP_Search");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompNFileUpDown.xfdl");
        };
        
        // User Script
        this.registerScript("ComAttchFilePopup.xfdl", function(exports) {
        /***************************************************************************
         * Program ID    : SCntrPrgAttchFilePopup.xfdl
         * Program Name  : 계약진행현황 첨부파일
         * Author        : 안성민
         * Created On    : 2019.03.07
        **************************************************************************/
        this.popTitle = "첨부파일"
        var mode = "";

        this.FormOnload = function(obj,e)
        {
        	gfnMakeFileDs(this);
        	var ownFrame = this.getOwnerFrame();
        		
        	var arg = ownFrame.arg;
        	
        	if("BPAY" == arg.getColumn(0,"REF_KEY_3")) this.popTitle = "착공계 첨부파일";
        	else if("CNTR" == arg.getColumn(0,"REF_KEY_3")) this.popTitle = "계약보증 첨부파일";
        	else if("PPAY" == arg.getColumn(0,"REF_KEY_3")) this.popTitle = "선급보증 첨부파일";
        	else if("CPAY" == arg.getColumn(0,"REF_KEY_3")) this.popTitle = "하자보증 첨부파일";
        		
        	this.dsFileCond.deleteAll();
        	this.dsFileCond.addRow()
        	this.dsFileCond.setColumn(0,"BRANCH_CD",arg.getColumn(0,"BRANCH_CD"));
        	this.dsFileCond.setColumn(0,"REF_TBL_NM",arg.getColumn(0,"REF_TBL_NM"));
        	this.dsFileCond.setColumn(0,"REF_KEY_1",arg.getColumn(0,"REF_KEY_1"));
        	this.dsFileCond.setColumn(0,"REF_KEY_2",arg.getColumn(0,"REF_KEY_2"));
        	this.dsFileCond.setColumn(0,"REF_KEY_3",arg.getColumn(0,"REF_KEY_3"));
        	this.dsFileCond.setColumn(0,"REF_KEY_4",arg.getColumn(0,"REF_KEY_4"));
        	this.dsFileCond.setColumn(0,"REF_KEY_5",arg.getColumn(0,"REF_KEY_5"));
        	this.dsFileCond.setColumn(0,"FILE_GUBUN",arg.getColumn(0,"FILE_GUBUN"));
        	this.dsFileCond.setColumn(0,"DS_NM",arg.getColumn(0,"DS_NM"));
        	
        	this.dsFileCond.set_updatecontrol(false);
        	this.dsFileCond.setRowType(0, Dataset.ROWTYPE_NORMAL);
        	this.dsFileCond.set_updatecontrol(true);
        	
        	mode = ownFrame.agv_mode;
        	
        	var ds = new Dataset;
        	ds.addColumn( "BRANCH_CD", "string", 256 );
        	ds.addColumn( arg.getColumn(0,"REF_KEY_COL_1"), "string", 256 );
        	ds.addColumn( arg.getColumn(0,"REF_KEY_COL_2"), "string", 256 );
        	ds.addColumn( arg.getColumn(0,"REF_KEY_COL_3"), "string", 256 );
        	ds.addColumn( arg.getColumn(0,"REF_KEY_COL_4"), "string", 256 );
        	ds.addColumn( arg.getColumn(0,"REF_KEY_COL_5"), "string", 256 );
        	ds.addColumn( arg.getColumn(0,"REF_KEY_COL_5"), "string", 256 );
        	ds.addRow();
        	
        	ds.setColumn(0, arg.getColumn(0,"REF_KEY_COL_1"), arg.getColumn(0,"REF_KEY_1"));
        	ds.setColumn(0, arg.getColumn(0,"REF_KEY_COL_2"), arg.getColumn(0,"REF_KEY_2"));
        	ds.setColumn(0, arg.getColumn(0,"REF_KEY_COL_3"), arg.getColumn(0,"REF_KEY_3"));
        	ds.setColumn(0, arg.getColumn(0,"REF_KEY_COL_4"), arg.getColumn(0,"REF_KEY_4"));
        	ds.setColumn(0, arg.getColumn(0,"REF_KEY_COL_5"), arg.getColumn(0,"REF_KEY_5"));
        	ds.setColumn(0, "BRANCH_CD", arg.getColumn(0,"BRANCH_CD"));
        	
        	ds.set_updatecontrol(false);
        	ds.setRowType(0, Dataset.ROWTYPE_NORMAL);
        	ds.set_updatecontrol(true);

        	this.addChild( arg.getColumn(0,"DS_NM"), ds); 
        	this.fnSearch();
        }

        this.fnSearch = function()
        {	
            var sSvcID = "searchAttchFile";
        	var sController = "epro.com.service.BComService.searchAttchFile";
        	var sInDatasets = "dsFileCond=dsFileCond " + this.dsFileCond.getColumn(0,"DS_NM") + "=" + this.dsFileCond.getColumn(0,"DS_NM");
        	var sOutDatasets = "dsFileCond=dsFileCond " + this.dsFileCond.getColumn(0,"DS_NM") + "=" + this.dsFileCond.getColumn(0,"DS_NM");
        	var sCallbackFunc = "fnTrCallBack";
        		  
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
          * @함수명	: fnFileload
          * @desc     	: 탭페이지 첨부파일 셋팅
          */
        this.fnFileload = function(fUse)
        {
        	var tablenm = this.dsFileCond.getColumn(0, "REF_TBL_NM");
        	var sTableNm = tablenm.substring(tablenm.indexOf("'")+1,tablenm.lastIndexOf("'"));
        	var arrFileKey = [ this.dsFileCond.getColumn(0, "REF_KEY_1")
         					 ,this.dsFileCond.getColumn(0, "REF_KEY_2")
         					 ,this.dsFileCond.getColumn(0, "REF_KEY_3")]		 
        	//this.Div00.div_41.fnFileInit(this, sTableNm, this.objects[this.dsFileCond.getColumn(0, "DS_NM")], arrFileKey, fUse);
        	this.Div00.div_41.fnFileInit(this, sTableNm, this.dsFileCond, arrFileKey, fUse);
        }

        
        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	if(strErrCd < 0){
        		return;
        	}
        	
        	switch(strSvcID)
        	{
        		case "searchAttchFile" :
        			if(mode == "Y") this.Div00.btnSave.set_visible(false);
        			this.fnFileload(mode);
        			break;
        		case "saveAttchFile" :
        			gfnAlert("저장되었습니다.");
        			this.fnSearch(); 
        			break;
        		default:
        			break;	
        	}
        }

        this.btnSaveOnclick = function(obj,e)
        {
        	var sSvcID = "saveAttchFile";
        	var sController = "epro.com.service.BComService.saveAttchFile";
        	var sInDatasets = "dsFileCond=dsFileCond " + this.dsFileCond.getColumn(0,"DS_NM") + "=" + this.dsFileCond.getColumn(0,"DS_NM");
        	var sOutDatasets = "dsFileCond=dsFileCond " + this.dsFileCond.getColumn(0,"DS_NM") + "=" + this.dsFileCond.getColumn(0,"DS_NM");
        	var sOutDatasets = "dsCntr=dsCntr";
        	var sCallbackFunc = "fnTrCallBack";
        		  
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.FormOnload, this);
            this.Div00.btnSave.addEventHandler("onclick", this.btnSaveOnclick, this);

        };

        this.loadIncludeScript("ComAttchFilePopup.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
