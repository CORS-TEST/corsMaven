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
                this.set_name("BPtnrEvalPop");
                this.set_titletext("거래신청팝업");
                this._setFormPosition(0,0,900,562);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsEval", this);
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"EVAL_ID\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"EVAL_TMPL_ID\" size=\"256\" type=\"STRING\"/><Column id=\"BIZ_NO\" size=\"256\" type=\"STRING\"/><Column id=\"STTS\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsScale", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdList", "absolute", "10", "246", null, null, "10", "10", this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
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
            obj.getSetter("f_sort").set("Y");
            obj.set_taborder("29");
            obj._setContents("<Formats><Format id=\"MMODE\"><Columns><Column size=\"100\"/><Column size=\"0\"/><Column size=\"180\"/><Column size=\"340\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"28\"/><Row band=\"summ\" size=\"24\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"평가분류\"/><Cell col=\"1\" expr=\"\"/><Cell col=\"2\" expr=\"\" text=\"문항\"/><Cell col=\"3\" expr=\"\" text=\"평가Scale\"/><Cell col=\"4\" expr=\"\" text=\"최대\"/><Cell col=\"5\" expr=\"\" text=\"최소\"/><Cell col=\"6\" expr=\"\" text=\"점수\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" suppress=\"1\" text=\"bind:LGR_CLS_NM\"/><Cell col=\"1\" style=\"align:left;\" suppress=\"1\" text=\"bind:MDL_CLS_NM\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:EVAL_QSTN\"/><Cell col=\"3\" combocodecol=\"EVAL_SCALE_SEQ\" combodatacol=\"EVAL_SCALE\" combodataset=\"expr:&quot;dsCbo&quot; + EVAL_ITEM_SEQ\" combodisplay=\"display\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:EVAL_SCALE_SEQ\"/><Cell col=\"4\" style=\"align:right;\" text=\"bind:MAX_SCORE\"/><Cell col=\"5\" style=\"align:right;\" text=\"bind:MIN_SCORE\"/><Cell col=\"6\" style=\"align:right;\" text=\"bind:EVAL_SCORE\"/></Band><Band id=\"summary\"><Cell colspan=\"4\" expr=\"expr:gfnMultiLabel(&quot;EPRO_LABEL_00597&quot;)\" style=\"align:center;\"/><Cell col=\"4\" expr=\"expr:dataset.getSum(&quot;MAX_SCORE*1&quot;)\"/><Cell col=\"5\" expr=\"expr:dataset.getSum(&quot;MIN_SCORE*1&quot;)\"/><Cell col=\"6\" expr=\"expr:dataset.getSum(&quot;EVAL_SCORE*1&quot;)\"/></Band></Format><Format id=\"VMODE\"><Columns><Column size=\"100\"/><Column size=\"0\"/><Column size=\"180\"/><Column size=\"340\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"28\"/><Row band=\"summ\" size=\"24\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"평가분류\"/><Cell col=\"1\" expr=\"\" text=\"상세분류\"/><Cell col=\"2\" expr=\"\" text=\"문항\"/><Cell col=\"3\" expr=\"\" text=\"평가Scale\"/><Cell col=\"4\" expr=\"\" text=\"최대\"/><Cell col=\"5\" expr=\"\" text=\"최소\"/><Cell col=\"6\" expr=\"\" text=\"점수\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" suppress=\"1\" text=\"bind:LGR_CLS_NM\"/><Cell col=\"1\" style=\"align:left;\" suppress=\"1\" text=\"bind:MDL_CLS_NM\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:EVAL_QSTN\"/><Cell col=\"3\" combocodecol=\"EVAL_SCALE_SEQ\" combodatacol=\"EVAL_SCALE\" combodataset=\"dsScale\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:EVAL_SCALE_SEQ\"/><Cell col=\"4\" style=\"align:right;\" text=\"bind:MAX_SCORE\"/><Cell col=\"5\" style=\"align:right;\" text=\"bind:MIN_SCORE\"/><Cell col=\"6\" style=\"align:right;\" text=\"bind:EVAL_SCORE\"/></Band><Band id=\"summary\"><Cell colspan=\"4\" expr=\"expr:gfnMultiLabel(&quot;EPRO_LABEL_00597&quot;)\" style=\"align:center;\"/><Cell col=\"4\" expr=\"expr:dataset.getSum(&quot;MAX_SCORE*1&quot;)\"/><Cell col=\"5\" expr=\"expr:dataset.getSum(&quot;MIN_SCORE*1&quot;)\"/><Cell col=\"6\" expr=\"expr:dataset.getSum(&quot;EVAL_SCORE*1&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnClo", "absolute", null, "5", "75", "24", "10", null, this);
            obj.set_taborder("31");
            obj.set_text("평가완료");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "10", "34", null, "202", "10", null, this);
            obj.set_taborder("32");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompCond01", "absolute", "0", "33", null, "34", "0", null, this.Div00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("0");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("staViewCompCond00", "absolute", "0", "0", null, "34", "0", null, this.Div00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("1");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("staViewCompCond02", "absolute", "0", "66", null, "34", "0", null, this.Div00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("6");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("staViewCompCond03", "absolute", "0", "132", null, "66", "0", null, this.Div00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("9");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("staViewCompCond04", "absolute", "0", "99", null, "34", "0", null, this.Div00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("20");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("staEval", "absolute", "0", "0", "171", "34", null, null, this.Div00);
            obj.set_cssclass("sta_WF_Label");
            obj.set_taborder("21");
            obj.set_text("평가서");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("edtEvalId", "absolute", "176", "5", "110", "24", null, null, this.Div00);
            obj.set_readonly("true");
            obj.set_taborder("22");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("edtEvalNm", "absolute", "291", "5", "266", "24", null, null, this.Div00);
            obj.set_readonly("true");
            obj.set_taborder("23");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("staPtnrNm", "absolute", "0", "33", "171", "34", null, null, this.Div00);
            obj.set_cssclass("sta_WF_Label");
            obj.set_taborder("24");
            obj.set_text("협력사명");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("edtPtnrId", "absolute", "176", "38", "110", "24", null, null, this.Div00);
            obj.set_readonly("true");
            obj.set_taborder("25");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("edtPtnrNm", "absolute", "291", "38", "266", "24", null, null, this.Div00);
            obj.set_readonly("true");
            obj.set_taborder("26");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("staSco", "absolute", "0", "66", "171", "34", null, null, this.Div00);
            obj.set_cssclass("sta_WF_Label");
            obj.set_taborder("27");
            obj.set_text("평가점수");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("edtSco", "absolute", "176", "71", "110", "24", null, null, this.Div00);
            obj.set_readonly("true");
            obj.set_taborder("28");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("staUser", "absolute", "0", "99", "171", "34", null, null, this.Div00);
            obj.set_cssclass("sta_WF_Label");
            obj.set_taborder("29");
            obj.set_text("평가자");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("edtId", "absolute", "176", "104", "110", "24", null, null, this.Div00);
            obj.set_readonly("true");
            obj.set_taborder("30");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("edtNm", "absolute", "291", "104", "140", "24", null, null, this.Div00);
            obj.set_readonly("true");
            obj.set_taborder("31");
            this.Div00.addChild(obj.name, obj);
            obj = new TextArea("txtRmark", "absolute", "176", "137", "695", "56", null, null, this.Div00);
            obj.set_lengthunit("ascii");
            obj.set_maxlength("1000");
            obj.set_readonly("true");
            obj.set_taborder("32");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("staRmark", "absolute", "0", "132", "171", "66", null, null, this.Div00);
            obj.set_cssclass("sta_WF_Label");
            obj.set_taborder("33");
            obj.set_text("종합의견");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("staGubun", "absolute", "562", "33", "171", "34", null, null, this.Div00);
            obj.set_cssclass("sta_WF_Label");
            obj.set_taborder("34");
            obj.set_text("구분");
            this.Div00.addChild(obj.name, obj);
            obj = new Combo("cboEvalState", "absolute", "738", "5", "132", "24", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_readonly("true");
            obj.set_taborder("35");
            obj = new Static("staEvalState", "absolute", "562", "0", "171", "34", null, null, this.Div00);
            obj.set_cssclass("sta_WF_Label");
            obj.set_taborder("36");
            obj.set_text("평가상태");
            this.Div00.addChild(obj.name, obj);
            obj = new Combo("cboGubun", "absolute", "738", "38", "132", "24", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_readonly("true");
            obj.set_taborder("37");
            obj = new Calendar("calDay", "absolute", "738", "71", "132", "24", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_cssclass("cal_default");
            obj.set_locale("en_US");
            obj.getSetter("objNm").set("견적마감일");
            obj.set_readonly("true");
            obj.set_taborder("38");
            obj = new Static("staDay", "absolute", "562", "66", "171", "34", null, null, this.Div00);
            obj.set_cssclass("sta_WF_Label");
            obj.set_taborder("39");
            obj.set_text("평가일");
            this.Div00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 202, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("32");
            		p.set_text("Div00");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 900, 562, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("거래신청팝업");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Div00.edtEvalId","value","dsEval","EVAL_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Div00.edtEvalNm","value","dsEval","TTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Div00.edtPtnrId","value","dsEval","REF_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Div00.edtPtnrNm","value","dsEval","REF_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Div00.edtSco","value","dsEval","EVAL_SCORE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Div00.edtId","value","dsEval","EVAL_CHRGR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Div00.edtNm","value","dsEval","EVAL_CHRGR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Div00.txtRmark","value","dsEval","ALL_RMK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Div00.cboGubun","value","dsEval","CD_EVAL_TYPE_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Div00.calDay","value","dsEval","EVAL_END_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("BPtnrEvalPop.xfdl", function(exports) {
        /**
         * @파일명       	: BPtnrEvalPop.xfdl
         * @생성자       	: 송태봉
         * @생성일자     	: 2017. 11. 1.
         * @설명			    : 거래신청 팝업
         * @최종수정자		: 송태봉
         * @최종수정일자	    : 2017. 11. 22.
        */

        var fv_endFlag = false;
        this.popTitle = gfnMultiLabel("EPRO_LABEL_00229");

        /**
          * @함수명	: fnOnLoad
          * @desc   : 폼 onload이벤트
          */ 
        this.fnOnLoad = function(obj,e)
        {
        	//gfnSetGrdFunc(this.grdList, null, this);

        	var ownFrame = this.getOwnerFrame();
        	
        	if("Y" == ownFrame.agv_readYN) {
        		this.btnClo.set_visible(false);
        		this.Div00.set_top(5);
        		var grdTop = nexacro.toNumber(this.Div00.top) + nexacro.toNumber(this.Div00.height) + 10
        		this.grdList.set_top(grdTop);
        	} else {
        		this.btnClo.set_visible(true);
        	}

        	this.dsEval.setColumn(0,"BRANCH_CD",application.gdsUserInfo.getColumn(0,"BRANCH_CD"));
        	this.dsEval.setColumn(0,"EVAL_ID",ownFrame.agv_eval);
        	this.dsEval.setColumn(0,"EVAL_TMPL_ID",ownFrame.agv_tmpl);
        	this.dsEval.setColumn(0,"PTNR_ID",ownFrame.agv_ptnrId);
        	this.dsEval.setColumn(0,"BIZ_NO",ownFrame.agv_bizNo);
        	this.dsEval.setColumn(0,"STTS",ownFrame.agv_stts);
        	
        	this.fnSearch();
        }

        this.fnSearch = function()
        {
        	var sSvcID = "readEvalPtnr";
        	var sController = "epro.ptnr.service.BPtnrService.readEvalPtnr";
        	var sInDatasets = "dsEval=dsEval";
        	var sOutDatasets = "dsEval=dsEval dsList=dsList dsScale=dsScale";
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
        		case "readEvalPtnr" :	
        			if(fv_endFlag){
        				this.parent.close(this.dsEval.saveXML());
        				return;
        			}
        			
        			if(!gfnIsNull(this.dsEval.getColumn(0,"STTS"))){
        				if(gfnIsNull(this.dsEval.getColumn(0,"EVAL_ID"))){
        					this.dsEval.setColumn(0,"EVAL_CHRGR_ID",application.gdsUserInfo.getColumn(0,"USER_ID"));
        					this.dsEval.setColumn(0,"EVAL_CHRGR_NM",application.gdsUserInfo.getColumn(0,"USER_NM"));
        					
        					this.Div00.cboEvalState.set_text(gfnMultiLabel("EPRO_LABEL_01042"));
        					this.Div00.txtRmark.set_readonly(false);
        					//this.btnClo.set_visible(true);
        					
        					var nSum = 0;
        					for(var i = 0 ; i < this.dsList.rowcount ; i++){
        						var nMax = this.dsScale.getCaseMax("EVAL_ITEM_SEQ =='" + this.dsList.getColumn(i,"EVAL_ITEM_SEQ") + "'","SCORE");
        						var nMin = this.dsScale.getCaseMin("EVAL_ITEM_SEQ =='" + this.dsList.getColumn(i,"EVAL_ITEM_SEQ") + "'","SCORE");
        						
        						var seq = this.dsList.getColumn(i,"EVAL_ITEM_SEQ");
        						var nRow = this.dsScale.findRow("EVAL_ITEM_SEQ",seq);
        						for(var j = nRow ; j < this.dsScale.rowcount ; j++){
        							if(this.dsScale.getColumn(j,"ALT_DEFAULT") == "Y"){
        								this.dsList.setColumn(i,"EVAL_SCALE_SEQ",this.dsScale.getColumn(j,"EVAL_SCALE_SEQ"));
        								this.dsList.setColumn(i,"EVAL_SCORE",this.dsScale.getColumn(j,"SCORE"));
        								this.dsList.setColumn(i,"MAX_SCORE",nMax);
        								this.dsList.setColumn(i,"MIN_SCORE",nMin);
        								nSum += this.dsScale.getColumn(j,"SCORE");
        								
        								break;
        							}
        						}
        						
        						this.dsEval.setColumn(0,"EVAL_SCORE",nSum);
        						
        						var tmpDs = new Dataset;
        						var tmpNm = "dsCbo" + seq;
        						this.addChild(tmpNm, tmpDs);
        						
        						this.dsScale.filter("EVAL_ITEM_SEQ =='" + seq + "'");
        						tmpDs.copyData(this.dsScale,true);
        						this.dsScale.filter("");
        					}
        					
        				} else{
        					this.dsEval.setColumn(0,"EVAL_CHRGR_ID",application.gdsUserInfo.getColumn(0,"USER_ID"));
        					this.dsEval.setColumn(0,"EVAL_CHRGR_NM",application.gdsUserInfo.getColumn(0,"USER_NM"));
        					
        					this.Div00.cboEvalState.set_text(gfnMultiLabel("EPRO_LABEL_01042"));
        					this.Div00.txtRmark.set_readonly(false);
        					//this.btnClo.set_visible(true);
        				
        					for(var i = 0 ; i < this.dsList.rowcount; i++){
        						var nMax = this.dsScale.getCaseMax("EVAL_ITEM_SEQ =='" + this.dsList.getColumn(i,"EVAL_ITEM_SEQ") + "'","SCORE");
        						var nMin = this.dsScale.getCaseMin("EVAL_ITEM_SEQ =='" + this.dsList.getColumn(i,"EVAL_ITEM_SEQ") + "'","SCORE");
        						
        						this.dsList.setColumn(i,"MAX_SCORE",nMax);
        						this.dsList.setColumn(i,"MIN_SCORE",nMin);
        						
        						var seq = this.dsList.getColumn(i,"EVAL_ITEM_SEQ");
        						var tmpDs = new Dataset;
        						var tmpNm = "dsCbo" + seq;
        						this.removeChild(tmpNm);
        						this.addChild(tmpNm, tmpDs);
        						
        						this.dsScale.filter("EVAL_ITEM_SEQ =='" + seq + "'");
        						tmpDs.copyData(this.dsScale,true);
        						this.dsScale.filter("");
        					}
        				}
        				
        			} else{
        				this.Div00.cboEvalState.set_text(gfnMultiLabel("EPRO_LABEL_00074"));
        				this.Div00.txtRmark.set_readonly(true);
        				//this.btnClo.set_visible(false);
        				
        				for(var i = 0 ; i < this.dsList.rowcount; i++){
        					var nMax = this.dsScale.getCaseMax("EVAL_ITEM_SEQ =='" + this.dsList.getColumn(i,"EVAL_ITEM_SEQ") + "'","SCORE");
        					var nMin = this.dsScale.getCaseMin("EVAL_ITEM_SEQ =='" + this.dsList.getColumn(i,"EVAL_ITEM_SEQ") + "'","SCORE");
        					
        					this.dsList.setColumn(i,"MAX_SCORE",nMax);
        					this.dsList.setColumn(i,"MIN_SCORE",nMin);
        				}
        				
        				this.grdList.setFormat("VMODE");
        			}
        			
        			this.grdList.redraw();
        			
        			break;
        		
        		case "saveEvalPtnr" :
        			gfnAlert(strErrMsg);
        			fv_endFlag = true;
        			this.fnSearch();
        			
        			break;
         
        		default:
        		break;	
        	}
        }

        this.fnOncloseup = function(obj,e)
        {
        	obj.updateToDataset();
        	
        	var seq  = this.dsList.getColumn(this.dsList.rowposition,"EVAL_SCALE_SEQ");
        	var nRow = this.dsScale.findRow("EVAL_SCALE_SEQ",seq);
        	this.dsList.setColumn(this.dsList.rowposition,"EVAL_SCORE",this.dsScale.getColumn(nRow,"SCORE"));
        	
        	var nSum = 0;
        	for(var i = 0 ; i < this.dsList.rowcount ; i++){
        		nSum += parseInt(this.dsList.getColumn(i,"EVAL_SCORE"));
        	}
        	
        	this.dsEval.setColumn(0,"EVAL_SCORE",nSum);
        }

        this.fnSave = function(obj,e)
        {	
        	if(!gfnConfirm("EPRO_LABEL_01043")) return;
        	
        	var sSvcID = "saveEvalPtnr";
        	var sController = "epro.ptnr.service.BPtnrService.saveEvalPtnr";
        	var sInDatasets = "dsEval=dsEval dsList=dsList dsScale=dsScale";
        	var sOutDatasets = "dsEval=dsEval";
        	var sCallbackFunc = "fnTrCallBack";
        	
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fnOnLoad, this);
            this.grdList.addEventHandler("oncelldblclick", this.fnRtnData, this);
            this.grdList.addEventHandler("oncloseup", this.fnOncloseup, this);
            this.grdList.addEventHandler("onkeydown", this.grdListOnkeydown, this);
            this.btnClo.addEventHandler("onclick", this.fnSave, this);
            this.Div00.calDay.addEventHandler("oneditclick", this.div_21_Tab01_tabp01_cal_rfqCloseDay_oneditclick, this);

        };

        this.loadIncludeScript("BPtnrEvalPop.xfdl", true);

       
    };
}
)();
