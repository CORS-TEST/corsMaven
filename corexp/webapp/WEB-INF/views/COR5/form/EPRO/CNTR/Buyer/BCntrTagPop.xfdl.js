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
                this.set_name("BPrHistPopup");
                this.set_titletext("계약태그팝업");
                this._setFormPosition(0,0,800,450);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"CNTR_TAG_NO\" size=\"256\" type=\"STRING\"/><Column id=\"CNTR_TAG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TAG_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_TAG_COL\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_USE\" type=\"STRING\" size=\"256\"/><Column id=\"CRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CRT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_CHGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_CHG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TAG_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCondition", this);
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_TAG_COL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TAG_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_USE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRtn", this);
            obj._setContents("<ColumnInfo><Column id=\"TAG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btnRtn", "absolute", null, "57", "65", "24", "10", null, this);
            obj.set_taborder("0");
            obj.set_text("적용");
            obj.getSetter("objNm").set("적용");
            this.addChild(obj.name, obj);

            obj = new Static("staViewCompCond00", "absolute", "10", "7", null, "45", "10", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("staMtrlCd", "absolute", "16", "17", "100", "24", null, null, this);
            obj.set_taborder("4");
            obj.set_text("태그타입");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("staPtnrNm", "absolute", "328", "17", "100", "24", null, null, this);
            obj.set_taborder("5");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch", "absolute", null, "16", "60", "24", "16", null, this);
            obj.set_taborder("7");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Combo("cboTagType", "absolute", "122", "17", "160", "23", null, null, this);
            this.addChild(obj.name, obj);
            var cboTagType_innerdataset = new Dataset("cboTagType_innerdataset", this.cboTagType);
            cboTagType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">[선택]</Col></Row><Row><Col id=\"codecolumn\">header</Col><Col id=\"datacolumn\">header</Col></Row><Row><Col id=\"codecolumn\">grid</Col><Col id=\"datacolumn\">grid</Col></Row></Rows>");
            obj.set_innerdataset(cboTagType_innerdataset);
            obj.set_taborder("8");
            obj.set_autoselect("true");
            obj.set_text("[선택]");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("사용여부");
            obj.set_index("0");

            obj = new Combo("cboAltUse", "absolute", "414", "17", "183", "23", null, null, this);
            this.addChild(obj.name, obj);
            var cboAltUse_innerdataset = new Dataset("cboAltUse_innerdataset", this.cboAltUse);
            cboAltUse_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">[선택]</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(cboAltUse_innerdataset);
            obj.set_taborder("9");
            obj.set_autoselect("true");
            obj.set_text("[선택]");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("사용여부");
            obj.set_readonly("true");
            obj.set_index("0");

            obj = new Grid("grdList", "absolute", "0", "86", null, null, "0", "3", this);
            obj.set_taborder("10");
            obj.set_binddataset("dsList");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj.getSetter("f_colSize").set("N");
            obj.getSetter("f_excel").set("Y");
            obj.getSetter("f_filter").set("N");
            obj.getSetter("f_find").set("N");
            obj.getSetter("f_fix").set("Y");
            obj.getSetter("f_height").set("N");
            obj.getSetter("f_hide").set("N");
            obj.getSetter("f_init").set("Y");
            obj.getSetter("f_mode").set("N");
            obj.getSetter("f_save").set("N");
            obj.getSetter("f_sort").set("N");
            obj.getSetter("f_totalCnt").set("N");
            obj.getSetter("objNm").set("검색결과 그리드");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"171\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" text=\"태그명\"/><Cell col=\"2\" text=\"타입\"/><Cell col=\"3\" text=\"컬럼ID\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\"/><Cell col=\"1\" style=\"align:left middle;\" text=\"bind:CNTR_TAG_NM\"/><Cell col=\"2\" style=\"align:left middle;selectbackground:EXPR(gfnIsNull(VALIDATE) ? '' : VALIDATE=='N' ? 'antiquewhite' : 'aquamarine');\" text=\"bind:CD_TAG_TYPE\"/><Cell col=\"3\" style=\"align:left middle;\" text=\"bind:CNTR_TAG_COL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 800, 450, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("계약태그팝업");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item3","cboCntrTagCol","value","dsCtgr","CD_CNST_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","cboTagType","value","dsCondition","CD_TAG_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","cboAltUse","value","dsCondition","ALT_USE");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("BCntrTagPop.xfdl", function(exports) {
        /**
         * @파일명       	: BPrHistPopup.xfdl
         * @생성자       	: 
         * @생성일자     	: 
         * @설명			: 
         * @최종수정자		: 
         * @최종수정일자	: 
        */

        this.popTitle = " 계약태그팝업";
         
        /**
          * @함수명	: fnOnLoad
          * @desc   : 폼 onload이벤트
          */ 
        this.fnOnLoad = function(obj,e)
        {
        	this.dsCondition.addRow();
        	this.dsCondition.setColumn(0,"CD_TAG_TYPE","header")
        	this.dsCondition.setColumn(0,"ALT_USE","Y")
        	
        	this.fnSearch();
        }

        this.fnSearch = function()
        {
        	var sSvcID = "searchCntrTaglist";
        	var sController = "epro.cntr.service.BCntrService.searchCntrTaglist";
        	var sInDatasets = "dsCondition=dsCondition";
        	var sOutDatasets = "dsList=dsTagList";
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
        		case "searchCntrTaglist" :	
        		break;
         
        		default:
        		break;	
        	}
        }

        
        this.fnRtnData = function(obj,e)
        {
        	if(this.dsList.getCaseCount("CHECKED == 1")!=1){
        		gfnAlert("하나의 행을 선택해 주시기 바랍니다.");
        		return;
        	}
        	
        	var nRow = this.dsList.findRow( "CHECKED", "1" );

        	var tag = "<input  ";
        		tag += "name='"+this.dsList.getColumn(nRow,"CD_TAG_TYPE_NM")+"※"+this.dsList.getColumn(nRow,"CNTR_TAG_COL")+"※'";
        		tag += "value='"+this.dsList.getColumn(nRow,"CNTR_TAG_NM")+"'";
        		tag += "size='20'";
        		tag += "style='border: 1px solid red; color: rgb(0, 0, 0); ";
        		tag += "readonly='readonly' ";
        		tag += "/>";
        		
        	this.dsRtn.setColumn(0,"TAG",tag)
        	this.parent.close(this.dsRtn.saveXML());
        }

        this.grdList_oncelldblclick = function(obj,e)
        {
        	var tag = "<input  ";
        		tag += "name='"+this.dsList.getColumn(e.row,"CD_TAG_TYPE_NM")+"※"+this.dsList.getColumn(e.row,"CNTR_TAG_COL")+"※'";
        		tag += "value='"+this.dsList.getColumn(e.row,"CNTR_TAG_NM")+"'";
        		tag += "size='20'";
        		tag += "style='border: 1px solid red; color: rgb(0, 0, 0); ";
        		tag += "readonly='readonly' ";
        		tag += "/>";
        	
        	this.dsRtn.setColumn(0,"TAG",tag)
        	this.parent.close(this.dsRtn.saveXML());
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fnOnLoad, this);
            this.btnRtn.addEventHandler("onclick", this.fnRtnData, this);
            this.btnSearch.addEventHandler("onclick", this.fnSearch, this);
            this.grdList.addEventHandler("oncelldblclick", this.grdList_oncelldblclick, this);

        };

        this.loadIncludeScript("BCntrTagPop.xfdl", true);

       
    };
}
)();
