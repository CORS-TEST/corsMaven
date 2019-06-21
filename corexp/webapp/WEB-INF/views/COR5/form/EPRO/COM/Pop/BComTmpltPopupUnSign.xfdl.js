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
                this.set_name("BComTmpltPopup");
                this.set_titletext("계약템플릿 전자서명 복호화");
                this.set_cssclass("frm_POP_Search");
                this.set_visible("true");
                this._setFormPosition(0,0,995,903);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTmplt", this);
            obj._setContents("<ColumnInfo><Column id=\"CNTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"4000\"/><Column id=\"REF_KEY_1\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_2\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM1\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"TBL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_MODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsParams", this);
            obj._setContents("<ColumnInfo><Column id=\"JRF_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EXPORT_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"EXPORT_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EXPOTR_FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"IS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_1\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_3\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_2\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM1\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"MULTY_PARAM\" type=\"STRING\" size=\"256\"/><Column id=\"TBL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_MODE\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REF_TBL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSignData", this);
            obj._setContents("<ColumnInfo><Column id=\"TBL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_1\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_2\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_DATA_A\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM1\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_DATA_B\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_MODE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompBody05", "absolute", "10", "10", null, null, "10", "10", this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            obj.set_visible("false");
            obj.set_url("CCOMP::ComEditor.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 995, 903, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("계약템플릿 전자서명 복호화");
            		p.set_cssclass("frm_POP_Search");
            		p.set_visible("true");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::ComEditor.xfdl");
        };
        
        // User Script
        this.registerScript("BComTmpltPopupUnSign.xfdl", function(exports) {
        /***************************************************************************
         * Program ID    : BComTmpltPopup.xfdl
         * Program Name  : 계약템플릿 팝업
         * Author        : 안성민
         * Created On    : 2019.03.15
        **************************************************************************/
        this.popTitle = "계약내용"

        this.fv_branch_cd = "";
        this.fv_ref_key_1 = "";
        this.fv_ref_key_2 = "";
        this.fv_col_nm1 = "";
        this.fv_col_nm2 = "";
        this.fv_tblNm = "";
        this.fv_signMode = "";
        this.fv_readonly = "";

        this.FormOnload = function(obj,e)
        {	
        	var ownFrame = this.getOwnerFrame();
        	
        	var arg = ownFrame.arg
        	this.dsTmplt.setColumn(0,"BRANCH_CD", ownFrame.agv_branchCd);
        	this.dsTmplt.setColumn(0,"CNTR_NO", ownFrame.agv_no);
        	this.dsTmplt.setColumn(0,"CNTR_ORDR", ownFrame.agv_ordr);
        	this.dsTmplt.setColumn(0,"CONTENT", ownFrame.agv_content);
        	this.dsTmplt.setColumn(0,"REF_KEY_1",arg.getColumn(0,"REF_KEY_1"));
        	this.dsTmplt.setColumn(0,"REF_KEY_2",arg.getColumn(0,"REF_KEY_2"));
        	this.dsTmplt.setColumn(0,"COL_NM1",arg.getColumn(0,"COL_NM1"));
        	this.dsTmplt.setColumn(0,"COL_NM2",arg.getColumn(0,"COL_NM2"));
        	this.dsTmplt.setColumn(0,"TBL_NM",arg.getColumn(0,"TBL_NM"));
        	this.dsTmplt.setColumn(0,"SIGN_MODE",arg.getColumn(0,"SIGN_MODE"));
        	this.fv_readonly = ownFrame.agv_readonly;
        	this.fnSearch();
        }

        this.fnSearch = function()
        {	
            var sSvcID = "selectCntrTemplateUnSignPop";
        	var sController = "epro.com.service.BComService.selectCntrTemplateUnSignPop";
        	var sInDatasets = "dsTmplt=dsTmplt";
        	var sOutDatasets = "dsTmplt=dsTmplt";
        	var sCallbackFunc = "fnTrCallBack";
        		  
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	if(strErrCd < 0){
        		return;
        	}
        	
        	switch(strSvcID)
        	{
        		case "selectCntrTemplateUnSignPop" :
        			this.divViewCompBody05.set_visible(true)
        			var contentStr = decodeURI(this.dsTmplt.getColumn(0, "CONTENT")).split("▩");
        			this.divViewCompBody05.fnEditorInit(contentStr[0], this.fv_readonly);		
        			break;
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.FormOnload, this);

        };

        this.loadIncludeScript("BComTmpltPopupUnSign.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
