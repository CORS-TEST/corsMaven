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
                this.set_name("BPtnrDetail");
                this.set_titletext("협력사 상세");
                this._setFormPosition(0,0,1220,1840);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSample", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSampleItem", this);
            obj._setContents("<ColumnInfo><Column id=\"CHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PR_ITEM_STTS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_FCTRY\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_REQ_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"INSP_CHRGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ATTCH_FILE_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"RMARK\" type=\"STRING\" size=\"256\"/><Column id=\"PCHRGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RCV_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DPMT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DPMT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DOC_CTGR\" type=\"STRING\" size=\"256\"/><Column id=\"REQR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNCL_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"TKEY\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"STR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_STR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DUMY1\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_EMGCY\" type=\"STRING\" size=\"256\"/><Column id=\"CRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CRT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_CHGR_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReturn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCondition", this);
            obj._setContents("<ColumnInfo><Column id=\"MTRL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdPR13", this);
            obj._setContents("<ColumnInfo><Column id=\"MTRL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new PopupDiv("PopupDiv00", "absolute", "1286", "49", "458", "196", null, null, this);
            obj.set_text("PopupDiv00");
            this.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "0%", "0", null, null, "0%", "0", this.PopupDiv00);
            obj.set_autofittype("col");
            obj.set_binddataset("dsEvlTmplList");
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"349\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"평가서명\"/><Cell col=\"1\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:TTL\"/><Cell col=\"1\" displaytype=\"button\" expr=\"expr:gfnMultiLabel(&quot;EPRO_LABEL_01113&quot;)\" text=\"bind:BTN\"/></Band></Format></Formats>");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", null, "0", "15", null, "0", "0", this);
            obj.set_taborder("1");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Div("div_1", "absolute", "0", "0", null, "68", "15", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_SearchBg");
            obj.getSetter("objNm").set("DIV-입찰 진행 상세 ");
            this.addChild(obj.name, obj);
            obj = new Button("btnItemDel", "absolute", null, "32", "87", "24", "1", null, this.div_1);
            obj.set_taborder("3");
            obj.set_text("- 삭제");
            obj.set_cssclass("btn_WF_Ssign");
            this.div_1.addChild(obj.name, obj);
            obj = new Button("btnPrHsty", "absolute", null, "32", "87", "24", "90", null, this.div_1);
            obj.set_taborder("4");
            obj.set_text("+ 추가");
            obj.set_cssclass("btn_WF_Ssign");
            this.div_1.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "5", "101", null, null, "15", "0", this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);
            obj = new Grid("grdSampleItem", "absolute", "0", "0", null, null, "0", "36", this.Div00);
            obj.set_taborder("0");
            obj.set_binddataset("dsSampleItem");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_cellclickbound("cell");
            obj.getSetter("f_filter").set("Y");
            obj.getSetter("f_excel").set("Y");
            obj.getSetter("f_hide").set("Y");
            obj.getSetter("f_find").set("Y");
            obj.getSetter("f_sort").set("Y");
            obj.getSetter("f_fix").set("Y");
            obj.getSetter("f_height").set("Y");
            obj.getSetter("f_save").set("Y");
            obj.getSetter("f_mode").set("Y");
            obj.getSetter("f_init").set("Y");
            obj.getSetter("f_colSize").set("Y");
            obj.getSetter("f_copyitemcolumn").set("MTRL_CD");
            obj.getSetter("f_editcol").set("MTRL_CD");
            obj.getSetter("f_version").set("20161226");
            obj._setContents("<Formats><Format id=\"MMODE\"><Columns><Column size=\"40\"/><Column size=\"272\"/><Column size=\"62\"/><Column size=\"76\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"109\"/><Column size=\"125\"/><Column size=\"139\"/><Column size=\"137\"/><Column size=\"77\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;품목명\" combodisplaynulltext=\"TTL_MTRL_NM\"/><Cell col=\"2\" displaytype=\"normal\" text=\"단위\" combodisplaynulltext=\"TTL_UNIT\"/><Cell col=\"3\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;수량\"/><Cell col=\"4\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;예상단가\" combodisplaynulltext=\"TTL_UNT_PRICE\"/><Cell col=\"5\" text=\"금액\" combodisplaynulltext=\"TTL_AMT\"/><Cell col=\"6\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;입고부서\"/><Cell col=\"7\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;입고요청일자\" expandshow=\"hide\" expandsize=\"20\" combodisplaynulltext=\"TTL_DLV_REQ_DAY\"/><Cell col=\"8\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;계정명\"/><Cell col=\"9\" text=\"비고\"/><Cell col=\"10\" text=\"첨부파일\" expandshow=\"hide\" expandsize=\"24\" combodisplaynulltext=\"TTL_ATTCH_FILE\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\" editdisplay=\"display\" expandshow=\"hide\"/><Cell col=\"1\" edittype=\"none\" style=\"align:left;background:#ebebebff;background2:#ebebebff;\" cssclass=\"cell_link\" text=\"bind:MTRL_NM\" editdisplay=\"edit\" expandshow=\"hide\" tooltiptext=\"bind:MTRL_NM\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" style=\"background:#ebebebff;background2:#ebebebff;\" text=\"bind:CD_UNIT_NM\" combodisplay=\"edit\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:QTY\" mask=\"#,###.##\" editautoselect=\"true\" editdisplay=\"edit\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:REQ_PRICE\" mask=\"#,##0.00\" editautoselect=\"true\" editdisplay=\"edit\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background:#ebebebff;background2:#ebebebff;\" text=\"bind:REQ_AMT\" mask=\"#,##0\" editautoselect=\"true\"/><Cell col=\"6\" edittype=\"text\" text=\"bind:IN_STR_NM\" editautoselect=\"true\" expandshow=\"show\" expandsize=\"24\" expandimage=\"URL('img::grd_WF_Expand.png')\"/><Cell col=\"7\" displaytype=\"date\" edittype=\"date\" text=\"bind:DLV_REQ_DAY\" mask=\"yyyy.MM.dd\" editautoselect=\"true\" expandsize=\"13\" calendardisplay=\"edit\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" edittype=\"text\" style=\"align:left;\" text=\"bind:GR_ACNT_NM\" editautoselect=\"true\" editdisplay=\"edit\" expandshow=\"show\" expandsize=\"24\" expandimage=\"URL('img::grd_WF_Expand.png')\"/><Cell col=\"9\" edittype=\"text\" style=\"align:left;\" text=\"bind:RMARK\" editautoselect=\"true\"/><Cell col=\"10\" displaytype=\"button\" edittype=\"none\" style=\"background:#ebebebff;background2:#ebebebff;\" text=\"bind:ATTCH_FILE_CNT\"/></Band></Format><Format id=\"VMODE\"><Columns><Column size=\"300\"/><Column size=\"62\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"109\"/><Column size=\"110\"/><Column size=\"156\"/><Column size=\"137\"/><Column size=\"77\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;품목명\" combodisplaynulltext=\"TTL_MTRL_NM\"/><Cell col=\"1\" displaytype=\"normal\" text=\"단위\" combodisplaynulltext=\"TTL_UNIT\"/><Cell col=\"2\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;수량\"/><Cell col=\"3\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;예상단가\" combodisplaynulltext=\"TTL_UNT_PRICE\"/><Cell col=\"4\" text=\"금액\" combodisplaynulltext=\"TTL_AMT\"/><Cell col=\"5\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;입고부서\"/><Cell col=\"6\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;입고요청일자\" expandshow=\"hide\" expandsize=\"20\" combodisplaynulltext=\"TTL_DLV_REQ_DAY\"/><Cell col=\"7\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;계정명\"/><Cell col=\"8\" text=\"비고\"/><Cell col=\"9\" text=\"첨부파일\" expandshow=\"hide\" expandsize=\"24\" combodisplaynulltext=\"TTL_ATTCH_FILE\"/></Band><Band id=\"body\"><Cell edittype=\"none\" style=\"align:left;\" cssclass=\"cell_link\" text=\"bind:MTRL_NM\" editdisplay=\"edit\" expandshow=\"hide\" expandsize=\"24\" tooltiptext=\"bind:MTRL_NM\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"bind:CD_UNIT_NM\" combodisplay=\"edit\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:QTY\" mask=\"#,##0.00\" editdisplay=\"edit\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:REQ_PRICE\" mask=\"#,##0.00\" editdisplay=\"edit\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:REQ_AMT\" mask=\"#,##0\" editautoselect=\"true\"/><Cell col=\"5\" edittype=\"none\" cssclass=\"cell_link\" text=\"bind:IN_STR_NM\" expandshow=\"hide\" expandsize=\"24\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"none\" text=\"bind:DLV_REQ_DAY\" mask=\"yyyy.MM.dd\" editautoselect=\"true\" expandsize=\"13\" calendardisplay=\"edit\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" edittype=\"none\" style=\"align:left;\" text=\"bind:GR_ACNT_NM\" editdisplay=\"edit\" expandshow=\"hide\" expandsize=\"24\"/><Cell col=\"8\" edittype=\"none\" text=\"bind:RMARK\"/><Cell col=\"9\" displaytype=\"button\" edittype=\"none\" style=\"background:#ebebebff;background2:#ebebebff;\" text=\"bind:ATTCH_FILE_CNT\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 458, 196, this.PopupDiv00,
            	//-- Layout function
            	function(p) {
            		p.set_text("PopupDiv00");

            	}
            );
            this.PopupDiv00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 68, this.div_1,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.set_cssclass("div_WF_SearchBg");
            		p.getSetter("objNm").set("DIV-입찰 진행 상세 ");

            	}
            );
            this.div_1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "Screen0", 1220, 1840, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("FrmTemplate100");
            		p.set_titletext("협력사 상세");

            	}
            );
            obj.set_stepcount("");
            obj.set_stepindex("");
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("btnRemote_0Vi","PGM000000037_divRemote.btnRemote_0","visible","dsObjBindVi","btnRemote_0");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnRemote_0En","PGM000000037_divRemote.btnRemote_0","enable","dsObjBindEn","btnRemote_0");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnRemote_1Vi","PGM000000037_divRemote.btnRemote_1","visible","dsObjBindVi","btnRemote_1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnRemote_1En","PGM000000037_divRemote.btnRemote_1","enable","dsObjBindEn","btnRemote_1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("PopupDiv00Vi","PopupDiv00","visible","dsObjBindVi","PopupDiv00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("PopupDiv00En","PopupDiv00","enable","dsObjBindEn","PopupDiv00");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Detail2.xfdl", function(exports) {
        /**
         * @파일명       	: BPtnrDetail.xfdl
         * @생성자       	: 한의봉
         * @생성일자     	: 2017. 9. 05
         * @설명			: 협력사상세
         * @최종수정자		: 안성민
         * @최종수정일자	: 2017. 11. 16.
        */  
         
        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {
        	var param = [
        					{code:"PR13",sSelectType:"A"} 	// 물품요청품목상태
        				];

        	gfnGetCode(this, param);
        }

        /**
          * @함수명	: fnRemote
          * @desc     	: 잠재업체지정, 등록거부 리모콘 버튼 생성
          */
        this.fnRemote = function()
        {
        		var sArg = [ 
        					{btnName:"구매요청", clickEventFunc:"fnReqPr"}
        			];	
        	gfnRemote(this, sArg);
        }

        /**
          * @함수명	: fnFormOninit
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.InitEventInfo(이벤트변수)
          * @desc     	: 폼 oninit이벤트
          */
        this.fnFormOninit = function(obj,e)
        {
        	this.fnSetCode();
        }

         
        /**
          * @함수명	: fnFormOnload
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.LoadEventInfo(이벤트변수)
          * @return   : 
          * @desc     	: 폼 onload이벤트
          */
        this.fnFormOnload = function(obj,e)
        {
         
        	//그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기(그리드 컴포넌트, 페이징div 컴포넌트, 폼오브젝트(this))
         	gfnSetGrdFunc(this.Div00.grdSampleItem , '', this);
        }

          

        /**
        	@function	fnPopCallBack()
        	@desc   	팝업 CallBack 함수
        */
        this.fnPopCallBack = function(sPopupId,rtn)
        {
        	if(gfnIsNull(rtn)) return;
        	
        	this.dsReturn.loadXML(rtn);
        	
        	switch(sPopupId){
        		case "BMtrlPrSrchMultiPopup" : //품목검색팝업에서 데이터 내림
        				for(var i=0; i<this.dsReturn.rowcount; i++){
        					
        					var nRow = this.dsSampleItem.addRow();
        					
        					this.dsSampleItem.setColumn(nRow,"ITM_NO"		   ,(i+1)*10);
        					this.dsSampleItem.setColumn(nRow,"CD_PR_ITEM_STTS" ,"PR13WRI");
        					this.dsSampleItem.setColumn(nRow,"MTRL_GRP_ID"     ,this.dsReturn.getColumn(i,"MTRL_GRP_ID"));
        					this.dsSampleItem.setColumn(nRow,"MTRL_GRP_NM"     ,this.dsReturn.getColumn(i,"MTRL_GRP_NM"));
        					this.dsSampleItem.setColumn(nRow,"MTRL_CD"         ,this.dsReturn.getColumn(i,"MTRL_CD"));
        					this.dsSampleItem.setColumn(nRow,"MTRL_NM"         ,this.dsReturn.getColumn(i,"MTRL_NM"));
        					this.dsSampleItem.setColumn(nRow,"QTY"             ,this.dsReturn.getColumn(i,"QTY"));
        					this.dsSampleItem.setColumn(nRow,"CD_UNIT"         ,this.dsReturn.getColumn(i,"CD_UNIT"));
        					this.dsSampleItem.setColumn(nRow,"REQ_PRICE"       ,this.dsReturn.getColumn(i,"REQ_PRICE"));
        					this.dsSampleItem.setColumn(nRow,"REQ_AMT"         ,this.dsReturn.getColumn(i,"REQ_AMT"));
        					this.dsSampleItem.setColumn(nRow,"DLV_REQ_DAY"     ,this.dsReturn.getColumn(i,"DLV_REQ_DAY"));
        					this.dsSampleItem.setColumn(nRow,"CD_DOC_CTGR"     ,this.dsReturn.getColumn(i,"CD_DOC_CTGR"));
        					this.dsSampleItem.setColumn(nRow,"ATTCH_FILE_CNT"  ,"0");
        					this.dsSampleItem.setColumn(nRow,"INSP_CHRGR_ID"   ,application.gdsUserInfo.getColumn(0,"USER_ID"));
        					this.dsSampleItem.setColumn(nRow,"REQR_ID"         ,application.gdsUserInfo.getColumn(0,"USER_ID"));
        					this.dsSampleItem.setColumn(nRow,"REQR_NM"         ,application.gdsUserInfo.getColumn(0,"USER_NM"));
        					this.dsSampleItem.setColumn(nRow,"REQ_DPMT_CD"     ,application.gdsUserInfo.getColumn(0,"DEPT_CD"));
        					this.dsSampleItem.setColumn(nRow,"REQ_DPMT_NM"     ,application.gdsUserInfo.getColumn(0,"DEPT_NM"));
        				}
        			break;
        	
        		default:
        			break;	
        	}
        }

        

        

        

        

        

        

        

        

        
        /**
          * @함수명	: fnPreSearch
          * @desc     	: 조회 전 처리
          */
        this.fnPreSearch = function()
        {
        	return true;
        }

        /**
          * @함수명	: fnSearch
          * @desc     	: 조회 프로세스
          */
        this.fnSearch = function()
        {
        	if(!this.fnPreSearch()) return false;

        	var sSvcID = "readPtnr";
        	var sController = "epro.ptnr.service.BPtnrService.readPtnr";
        	var sInDatasets = "dsPtnr=dsPtnr";
        	var sOutDatasets = "dsPtnr=dsPtnr dsPtnrPlant=dsPtnrPlant dsPtnrMaker=dsPtnrMaker dsUser=dsUser dsEval=dsEval dsCard=dsCard dsLrgGrp=dsLrgGrp dsMdlGrp=dsMdlGrp dsSelectGrp=dsSelectGrp dslvl1=dslvl1 dslvl2=dslvl2 dsEvlTmplList=dsEvlTmplList";
        	var sCallbackFunc = "fnTrCallBack";

            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
          * @함수명  : fnPreSave
          * @input    : 
          * @return   : 
          * @desc     : 저장전 유효성체크
          */
        this.fnPreSave = function()
        {
        	var arr = [];
        	if(gfnIsNull(this.dsPtnr.getColumn(0, "RPTST_SRC_GRP_ID"))){
        		var msg = gfnMultiLabel("EPRO_LABEL_01090");
        		var type = gfnMultiLabel("EPRO_LABEL_01010");
        		var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        		arr.push(objParam);
        	}
         	
         	return gfnValidate(this, false, arr);
        }

        /** 
        	@함수명	fnSave
        	@desc   	저장 프로세스
        */
        this.fnSave = function(bValid)
        {

        	var sSvcID = "savePtnr";
        	var sController = "epro.ptnr.service.BPtnrService.savePtnr";
        	var sInDatasets = "dsPtnr=dsPtnr:A dsSelectGrp=dsSelectGrp:A";
        	var sOutDatasets = "dsPtnr=dsPtnr";
        	var sCallbackFunc = "fnTrCallBack";
        				
        	 gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        

        

        

        this.div_1_btnPrHsty_onclick = function(obj,e)
        {
        	var sArg = {
        					agv_id: ""
        				};
        	gfnSearchComMtrl(this, "BMtrlPrSrchMultiPopup", "fnPopCallBack", sArg,"PR");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.PopupDiv00.Grid00.addEventHandler("oncellclick", this.fnEvalGrdOnclick, this);
            this.div_1.btnItemDel.addEventHandler("onclick", this.divViewCompBody00_btnInvWrt_onclick, this);
            this.div_1.btnPrHsty.addEventHandler("onclick", this.div_1_btnPrHsty_onclick, this);
            this.Div00.grdSampleItem.addEventHandler("onkeydown", this.Div31_grd_PurItem_onkeydown, this);
            this.Div00.grdSampleItem.addEventHandler("oncellclick", this.Tab00_tabpage1_Div21_grd_PurItem_oncellclick, this);
            this.Div00.grdSampleItem.addEventHandler("oncelldblclick", this.Tab00_tabpage1_Div21_grd_PurItem_oncelldblclick, this);
            this.Div00.grdSampleItem.addEventHandler("onexpandup", this.Div31_grd_PurItem_onexpandup, this);
            this.Div00.grdSampleItem.addEventHandler("ontextchanged", this.Tab00_tabpage1_Div21_grd_PurItem_ontextchanged, this);

        };

        this.loadIncludeScript("Detail2.xfdl", true);

       
    };
}
)();
