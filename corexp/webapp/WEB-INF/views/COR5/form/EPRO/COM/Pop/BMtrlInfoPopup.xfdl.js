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
                this.set_name("BMtrlInfoPopup");
                this.set_titletext("품목정보 팝업");
                this._setFormPosition(0,0,674,291);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMtrl", this);
            obj._setContents("<ColumnInfo><Column id=\"MTRL_CD\" size=\"256\" type=\"STRING\"/><Column id=\"MTRL_NM\" size=\"256\" type=\"STRING\"/><Column id=\"UP_SRC_GRP_NM\" size=\"256\" type=\"STRING\"/><Column id=\"SRC_GRP_NM\" size=\"256\" type=\"STRING\"/><Column id=\"SUB_MTRL_GRP_NM\" size=\"256\" type=\"STRING\"/><Column id=\"MTRL_GRP_NM\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Tab("tabMtrl", "absolute", "0.74%", "8", null, "274", "0.74%", null, this);
            obj.set_scrollbars("autoboth");
            obj.set_tabindex("0");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpMtrlInfo", this.tabMtrl);
            obj.set_text("품목정보");
            this.tabMtrl.addChild(obj.name, obj);
            obj = new Static("staViewCompCond03", "absolute", "8", "172", null, "34", "10", null, this.tabMtrl.tabpMtrlInfo);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("0");
            this.tabMtrl.tabpMtrlInfo.addChild(obj.name, obj);
            obj = new Static("staViewCompCond00", "absolute", "8", "10", null, "34", "10", null, this.tabMtrl.tabpMtrlInfo);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("2");
            this.tabMtrl.tabpMtrlInfo.addChild(obj.name, obj);
            obj = new Static("staViewCompCond01", "absolute", "8", "42", null, "34", "10", null, this.tabMtrl.tabpMtrlInfo);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("3");
            this.tabMtrl.tabpMtrlInfo.addChild(obj.name, obj);
            obj = new Static("staViewCompCond02", "absolute", "8", "74", null, "34", "10", null, this.tabMtrl.tabpMtrlInfo);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("5");
            this.tabMtrl.tabpMtrlInfo.addChild(obj.name, obj);
            obj = new Static("staMtrlCd", "absolute", "8", "10", "171", "34", null, null, this.tabMtrl.tabpMtrlInfo);
            obj.set_cssclass("sta_WF_Label");
            obj.set_taborder("7");
            obj.set_text("자재코드");
            this.tabMtrl.tabpMtrlInfo.addChild(obj.name, obj);
            obj = new Edit("edtMtrlCd", "absolute", "184", "15", null, "24", "17", null, this.tabMtrl.tabpMtrlInfo);
            obj.set_readonly("true");
            obj.set_taborder("8");
            this.tabMtrl.tabpMtrlInfo.addChild(obj.name, obj);
            obj = new Static("staMtrlNm", "absolute", "8", "42", "171", "34", null, null, this.tabMtrl.tabpMtrlInfo);
            obj.set_cssclass("sta_WF_Label");
            obj.set_taborder("9");
            obj.set_text("자재명");
            this.tabMtrl.tabpMtrlInfo.addChild(obj.name, obj);
            obj = new Edit("edtMtrlNm", "absolute", "184", "47", null, "24", "17", null, this.tabMtrl.tabpMtrlInfo);
            obj.set_readonly("true");
            obj.set_taborder("10");
            this.tabMtrl.tabpMtrlInfo.addChild(obj.name, obj);
            obj = new Static("staGrp", "absolute", "8", "74", "171", "34", null, null, this.tabMtrl.tabpMtrlInfo);
            obj.set_cssclass("sta_WF_Label");
            obj.set_taborder("13");
            obj.set_text("소싱그룹");
            this.tabMtrl.tabpMtrlInfo.addChild(obj.name, obj);
            obj = new Static("staUnit00", "absolute", "8", "172", "171", "34", null, null, this.tabMtrl.tabpMtrlInfo);
            obj.set_cssclass("sta_WF_Label");
            obj.set_taborder("17");
            obj.set_text("단위");
            this.tabMtrl.tabpMtrlInfo.addChild(obj.name, obj);
            obj = new Edit("edtPoUnit", "absolute", "184", "176", null, "24", "341", null, this.tabMtrl.tabpMtrlInfo);
            obj.set_readonly("true");
            obj.set_taborder("28");
            this.tabMtrl.tabpMtrlInfo.addChild(obj.name, obj);
            obj = new Edit("edtSrcGrpId", "absolute", "184", "79", "137", "24", null, null, this.tabMtrl.tabpMtrlInfo);
            obj.set_readonly("true");
            obj.set_taborder("29");
            this.tabMtrl.tabpMtrlInfo.addChild(obj.name, obj);
            obj = new Edit("edtSrcGrpNm2", "absolute", "326", "79", null, "24", "17", null, this.tabMtrl.tabpMtrlInfo);
            obj.set_readonly("true");
            obj.set_taborder("30");
            this.tabMtrl.tabpMtrlInfo.addChild(obj.name, obj);
            obj = new Static("staViewCompCond04", "absolute", "8", "106", null, "34", "10", null, this.tabMtrl.tabpMtrlInfo);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("33");
            this.tabMtrl.tabpMtrlInfo.addChild(obj.name, obj);
            obj = new Static("staSubMtrlGrpNm", "absolute", "8", "106", "171", "34", null, null, this.tabMtrl.tabpMtrlInfo);
            obj.set_cssclass("sta_WF_Label");
            obj.set_taborder("34");
            obj.set_text("자재그룹명");
            this.tabMtrl.tabpMtrlInfo.addChild(obj.name, obj);
            obj = new Edit("edtMtrlGrpNm", "absolute", "326", "111", null, "24", "17", null, this.tabMtrl.tabpMtrlInfo);
            obj.set_readonly("true");
            obj.set_taborder("35");
            this.tabMtrl.tabpMtrlInfo.addChild(obj.name, obj);
            obj = new Static("staViewCompCond06", "absolute", "8", "139", null, "34", "10", null, this.tabMtrl.tabpMtrlInfo);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("36");
            this.tabMtrl.tabpMtrlInfo.addChild(obj.name, obj);
            obj = new Static("staSubMtrlGrpNm00", "absolute", "8", "139", "171", "34", null, null, this.tabMtrl.tabpMtrlInfo);
            obj.set_cssclass("sta_WF_Label");
            obj.set_taborder("37");
            obj.set_text("서브자재그룹");
            this.tabMtrl.tabpMtrlInfo.addChild(obj.name, obj);
            obj = new Edit("edtSubMtrlGrpNm", "absolute", "326", "144", null, "24", "17", null, this.tabMtrl.tabpMtrlInfo);
            obj.set_readonly("true");
            obj.set_taborder("38");
            this.tabMtrl.tabpMtrlInfo.addChild(obj.name, obj);
            obj = new Static("staViewCompCond05", "absolute", "8", "204", null, "34", "10", null, this.tabMtrl.tabpMtrlInfo);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("40");
            this.tabMtrl.tabpMtrlInfo.addChild(obj.name, obj);
            obj = new Static("staUnit01", "absolute", "8", "204", "171", "34", null, null, this.tabMtrl.tabpMtrlInfo);
            obj.set_cssclass("sta_WF_Label");
            obj.set_taborder("39");
            obj.set_text("최종발주일자/최종입고일자");
            this.tabMtrl.tabpMtrlInfo.addChild(obj.name, obj);
            obj = new Edit("edtMtrlGrpId", "absolute", "184", "111", "137", "24", null, null, this.tabMtrl.tabpMtrlInfo);
            obj.set_readonly("true");
            obj.set_taborder("42");
            this.tabMtrl.tabpMtrlInfo.addChild(obj.name, obj);
            obj = new Edit("edtSubMtrlGrpId", "absolute", "184", "144", "137", "24", null, null, this.tabMtrl.tabpMtrlInfo);
            obj.set_readonly("true");
            obj.set_taborder("43");
            this.tabMtrl.tabpMtrlInfo.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "323", "208", "10", "22", null, null, this.tabMtrl.tabpMtrlInfo);
            obj.set_taborder("44");
            obj.set_text("/");
            this.tabMtrl.tabpMtrlInfo.addChild(obj.name, obj);
            obj = new MaskEdit("maeLstPoDay", "absolute", "183", "208", "138", "24", null, null, this.tabMtrl.tabpMtrlInfo);
            obj.set_displaynulltext(" ");
            obj.set_limitbymask("decimal");
            obj.set_mask("####-##-##");
            obj.set_maskchar(" ");
            obj.set_readonly("true");
            obj.set_taborder("46");
            obj.set_type("string");
            this.tabMtrl.tabpMtrlInfo.addChild(obj.name, obj);
            obj = new MaskEdit("maeLstGrDay", "absolute", "331", "208", null, "24", "193", null, this.tabMtrl.tabpMtrlInfo);
            obj.set_displaynulltext(" ");
            obj.set_mask("####-##-##");
            obj.set_maskchar(" ");
            obj.set_readonly("true");
            obj.set_taborder("47");
            obj.set_type("string");
            this.tabMtrl.tabpMtrlInfo.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 934, 506, this.tabMtrl.tabpMtrlInfo,
            	//-- Layout function
            	function(p) {
            		p.set_text("품목정보");

            	}
            );
            this.tabMtrl.tabpMtrlInfo.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 674, 291, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("품목정보 팝업");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item28","Tab00.tabpage1.edtMtrlCd","value","dsMtrl","MTRL_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","Tab00.tabpage1.edtMtrlNm","value","dsMtrl","MTRL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Tab00.tabpage1.edtMtrlNm02","value","dsMtrl","MTRL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Tab00.tabpage1.edtMtrlNm03","value","dsMtrl","MTRL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Tab00.tabpage1.edtMtrlNm04","value","dsMtrl","PO_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item61","Tab00.tabpage1.cboSrclvl2","value","dsPtnr","RPTST_SRC_GRP_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item60","Tab00.tabpage1.cboSrclvl1","value","dsPtnr","LRG_GRP_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","tabMtrl.tabpage1.edtLvl1","value","dsMtrl","UP_SRC_GRP_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","tabMtrl.tabpage1.edtMtrlCd","value","dsMtrl","MTRL_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","tabMtrl.tabpage1.edtMtrlNm","value","dsMtrl","MTRL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","tabMtrl.tabpage1.edtLvl2","value","dsMtrl","SRC_GRP_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","tabMtrl.tabpage1.edtSubMtrlGrpNm","value","dsMtrl","SUB_MTRL_GRP_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","tabMtrl.tabpMtrlInfo.staGrp","text","gdsLabel","EPRO_LABEL_00778");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","tabMtrl.tabpMtrlInfo.edtMtrlCd","value","dsMtrl","MTRL_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","tabMtrl.tabpMtrlInfo.edtMtrlNm","value","dsMtrl","MTRL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","tabMtrl.tabpMtrlInfo.edtSrcGrpId","value","dsMtrl","SRC_GRP_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","tabMtrl.tabpMtrlInfo.edtSrcGrpNm2","value","dsMtrl","SRC_GRP_NM2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","tabMtrl.tabpMtrlInfo.edtMtrlGrpNm","value","dsMtrl","MTRL_GRP_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","tabMtrl.tabpMtrlInfo.edtPoUnit","value","dsMtrl","BASIC_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","tabMtrl.tabpMtrlInfo.edtSubMtrlGrpNm","value","dsMtrl","SUB_MTRL_GRP_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","tabMtrl.tabpMtrlInfo.edtMtrlGrpId","value","dsMtrl","MTRL_GRP_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","tabMtrl.tabpMtrlInfo.edtSubMtrlGrpId","value","dsMtrl","SUB_MTRL_GRP_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","tabMtrl.tabpMtrlInfo.maeLstPoDay","value","dsMtrl","LST_PO_DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","tabMtrl.tabpMtrlInfo.maeLstGrDay","value","dsMtrl","LST_GR_DAY");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("BMtrlInfoPopup.xfdl", function(exports) {
        /**
         * @파일명       	: BMtrlInfoPopup.xfdl
         * @생성자       	: 송태봉
         * @생성일자     	: 2017. 9. 26.
         * @설명			    : 품목정보 팝업
         * @최종수정자		: 김동호
         * @최종수정일자	: 2017. 11. 30.
        */

        //this.popTitle = gfnMultiLabel("EPRO_LABEL_00947");
        this.popTitle = "품목정보";

        /**
          * @함수명	: fnOnLoad
          * @desc   : 폼 onload이벤트
          */ 
        this.fnOnLoad = function(obj,e)
        {
        	gfnMakeFileDs(this);

        	var ownFrame = this.getOwnerFrame();

        	this.dsMtrl.setColumn(0,"BRANCH_CD",application.gdsUserInfo.getColumn(0,"BRANCH_CD"));

        	this.dsMtrl.addRow();
        	this.dsMtrl.setColumn(0,"MTRL_CD",ownFrame.agv_id);
        	
        	this.fnSearch();
        }

        this.fnSearch = function()
        {
        	var sSvcID = "readComMtrlInfo";
        	var sController = "epro.com.service.BComService.readComMtrlInfo";
        	var sInDatasets = "dsMtrl=dsMtrl";
        	var sOutDatasets = "dsMtrl=dsMtrl";
        	var sCallbackFunc = "fnTrCallBack";	
        	
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
          * @함수명	: fnTrCallBack
          * @desc     	: Transaction Callback함수
          */
        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	if(strErrCd < 0){
        		return;
        	}
        	
        	switch(strSvcID){
        		case "readComMtrlInfo" :	
        			/*var sTableNm = "MM_MTRL";
        			var arrFileKey = [this.dsMtrl.getColumn(0, "MTRL_CD")];
        			this.divFile.fnFileInit(this, sTableNm, this.dsMtrl, arrFileKey, "Y");*/
        			
        		break;
         
        		default:
        		break;	
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fnOnLoad, this);

        };

        this.loadIncludeScript("BMtrlInfoPopup.xfdl", true);

       
    };
}
)();
