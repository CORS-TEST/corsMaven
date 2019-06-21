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
                this.set_name("BCntrTypePop");
                this.set_titletext("계약유형");
                this._setFormPosition(0,0,427,182);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCtgr", this);
            obj._setContents("<ColumnInfo><Column id=\"CNTR_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_TMPLT\" type=\"STRING\" size=\"256\"/><Column id=\"FCTRY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CNST_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CNTR_CTGR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdZZ10", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM20", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCT11", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTemplate", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("staViewCompLine01", "absolute", "10", "35", null, "36", "10", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_rtn", "absolute", null, "6", "65", "25", "10", null, this);
            obj.set_taborder("2");
            obj.set_text("적용");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("staViewCompLine00", "absolute", "10", "70", null, "36", "10", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("staViewCompLine02", "absolute", "10", "105", null, "36", "10", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("staViewCompLine03", "absolute", "10", "140", null, "36", "10", null, this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel01", "absolute", "10", "35", "134", "36", null, null, this);
            obj.set_taborder("6");
            obj.set_text("계약일자");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel02", "absolute", "10", "70", "134", "36", null, null, this);
            obj.set_taborder("7");
            obj.set_text("계약구분");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03", "absolute", "10", "105", "134", "36", null, null, this);
            obj.set_taborder("8");
            obj.set_text("계약템플릿");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel04", "absolute", "10", "140", "134", "36", null, null, this);
            obj.set_taborder("9");
            obj.set_text("사업장");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Calendar("calCntrDay", "absolute", "152", "43", null, "21", "16", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.set_cssclass("cal_default");
            obj.getSetter("objNm").set("견적마감일자");

            obj = new Combo("cboCdGongSa", "absolute", "152", "78", null, "21", "16", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("예산구분");
            obj.set_innerdataset("@dsCdZZ10");

            obj = new Combo("cboCntrTmpl", "absolute", "152", "113", null, "21", "176", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("12");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("예산구분");
            obj.set_innerdataset("@dsCdCT11");
            obj.set_index("-1");

            obj = new Combo("cboCdFctry", "absolute", "152", "148", null, "21", "16", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("예산구분");
            obj.set_innerdataset("@dsCdCM20");

            obj = new Combo("cboCntrTmpl00", "absolute", "256", "113", null, "21", "17", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("14");
            obj.set_innerdataset("@dsTemplate");
            obj.set_codecolumn("CNTR_TMPLT_NO");
            obj.set_datacolumn("TTL");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("예산구분");
            obj.set_index("-1");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 427, 182, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("계약유형");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item2","calCntrDay","value","dsCtgr","CNTR_DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","cboCdGongSa","value","dsCtgr","CD_CNST_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","cboCdFctry","value","dsCtgr","FCTRY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","cboCntrTmpl00","value","dsCtgr","CNTR_TMPLT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","cboCntrTmpl","value","dsCtgr","CD_CNTR_CTGR");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("BCntrTypePop.xfdl", function(exports) {
        /**
         * @파일명       	: BCntrTypePop.xfdl
         * @생성자       	: 안성민
         * @생성일자     	: 2019. 03. 06.
         * @설명			: 계약유형
         * @최종수정자		: 안성민
         * @최종수정일자	: 2019. 03. 06.
        */

        this.popTitle = '계약유형' //gfnMultiLabel("EPRO_LABEL_01168");

        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {

        	var param = [
        					{code:"ZZ10", sSelectType:"S"} // 공사구분
        					,{code:"CM20", sSelectType:"S"} // 사업장
        					,{code:"CT11", sSelectType:"S"} // 계약템플릿
        				];
        	gfnGetCode(this, param);
        }

        /**
          * @함수명	: BRfqPrgDetail_oninit
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.InitEventInfo(이벤트변수)
          * @desc     	: 폼 oninit이벤트
          */
        this.FormOninit = function(obj,e)
        {
        	this.fnSetCode();
        }

        /**
          * @함수명	: fnOnLoad
          * @desc   : 폼 onload이벤트
          */ 
        this.fnOnLoad = function(obj,e)
        {
        	var ownFrame = this.getOwnerFrame();
        	var fvData = ownFrame.agv_data;
        	var fvRfqPtnrId = ownFrame.agv_rfq_ptnr_id;
        	var fvRfqId = ownFrame.agv_rfq_item_id;
        	
        	var ownFrame = this.getOwnerFrame();
        	
        	this.dsCtgr.setColumn(0,"CNTR_DAY",gfnToday());
        	this.dsCtgr.setColumn(0,"CNTR_TMPLT","CT2010");
        	this.dsCtgr.setColumn(0,"CD_CNST_TYPE","");
        	this.dsCtgr.setColumn(0,"CD_CNTR_CTGR","");
        	
        	if(!gfnIsNull(ownFrame.cd_fctry)){
        		this.dsCtgr.setColumn(0,"FCTRY",ownFrame.cd_fctry);
        		this.cboCdFctry.set_readonly(true);
        	}else{
        		this.dsCtgr.setColumn(0,"FCTRY","");
        	}
        	this.fnTemplateSearch();
        	
        }

        this.fnTemplateSearch = function()
        {
        	var sSvcID = "searchTmplList";
        	var sController = "epro.cntr.service.BCntrService.searchTmplList";
        	var sInDatasets = "";
        	var sOutDatasets = "dsTemplate=dsTemplate";
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
        		case "searchTmplList":
        			this.dsTemplate.insertRow(0);
        			this.dsTemplate.setColumn(0, "CNTR_TMPLT_NO", "");
        			this.dsTemplate.setColumn(0, "TTL", '[선택]');
        			this.dsTemplate.set_enableevent(false);
        			this.dsTemplate.filter("CD_CNTR_CTGR==''||CNTR_TMPLT_NO==''");
        			this.dsCtgr.setColumn(0, "CNTR_TMPLT", "");
        			this.dsTemplate.set_enableevent(true);
        			break;
        	}
        }
        /***************************************************************************
         * 함  수  명		: btn_rtn_onclick()
         * 기      능		: 적용버튼 클릭 이벤트
         ***************************************************************************/
        this.btn_rtn_onclick = function(obj,e)
        {
        	if(gfnIsNull(this.dsCtgr.getColumn(0,"CNTR_DAY"))){
        		gfnAlert("계약일자를 설정해 주세요.");
        		return;
        	}  

        	else if(gfnIsNull(this.dsCtgr.getColumn(0,"CNTR_TMPLT"))){
        		gfnAlert("계약템플릿을 선택해 주세요.");
        		return;
        	
        	} else if(gfnIsNull(this.dsCtgr.getColumn(0,"FCTRY"))){
        		gfnAlert("사업장을 선택해 주세요.");
        		return;
        		
        	} else if(gfnIsNull(this.dsCtgr.getColumn(0,"CD_CNST_TYPE"))){
        		gfnAlert("공사구분을 선택해 주세요.");
        		return;
        	}
        	this.parent.close(this.dsCtgr.saveXML());
        }

        this.cboCntrTmplOnitemchanged = function(obj,e)
        {
        	var cdCtgr = obj.value
        	this.dsTemplate.set_enableevent(false);
        	this.dsTemplate.filter("CD_CNTR_CTGR=='" + cdCtgr + "'||CNTR_TMPLT_NO==''");
        	this.dsCtgr.setColumn(0, "CNTR_TMPLT", "")
        	this.dsTemplate.set_enableevent(true);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fnOnLoad, this);
            this.addEventHandler("oninit", this.FormOninit, this);
            this.btn_rtn.addEventHandler("onclick", this.btn_rtn_onclick, this);
            this.cboCntrTmpl.addEventHandler("onitemchanged", this.cboCntrTmplOnitemchanged, this);

        };

        this.loadIncludeScript("BCntrTypePop.xfdl", true);

       
    };
}
)();
