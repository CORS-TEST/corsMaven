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
                this.set_name("BCntrTemplateTypePop");
                this.set_titletext("계약템플릿유형");
                this._setFormPosition(0,0,443,94);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCtgr", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CNTR_CTGR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CNTR_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCT11", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCT12", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("staViewCompLine01", "absolute", "10", "49", null, "36", "10", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_rtn", "absolute", null, "14", "65", "25", "10", null, this);
            obj.set_taborder("2");
            obj.set_text("적용");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Combo("cboCdCntrCtgr", "absolute", "125", "53", "179", "28", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("계약유형");
            obj.set_innerdataset("@dsCdCT11");

            obj = new Static("staLabel01", "absolute", "10", "49", "110", "36", null, null, this);
            obj.set_taborder("14");
            obj.set_text("계약유형");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("cboCdCntrType", "absolute", "309", "53", "115", "28", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("계약유형");
            obj.set_value("1");
            obj.set_text("정형");
            obj.set_innerdataset("@dsCdCT12");
            obj.set_index("0");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 443, 94, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("계약템플릿유형");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item3","cboCdCntrCtgr","value","dsCtgr","CD_CNTR_CTGR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","cboCdCntrType","value","dsCtgr","CD_CNTR_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("BCntrTemplateTypePop.xfdl", function(exports) {
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
        					{code:"CT11", sSelectType:"S"} // 계약템플릿
        					,{code:"CT12", sSelectType:"S" ,sFiltered:"S:T15,T16"} // 계약서종류
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
        	this.dsCtgr.setColumn(0,"CD_CNTR_CTGR","");
        	this.dsCtgr.setColumn(0,"CD_CNTR_TYPE","");
        }

        /***************************************************************************
         * 함  수  명		: btn_rtn_onclick()
         * 기      능		: 적용버튼 클릭 이벤트
         ***************************************************************************/
        this.btn_rtn_onclick = function(obj,e)
        {
        	if(gfnIsNull(this.dsCtgr.getColumn(0,"CD_CNTR_CTGR"))){
        		gfnAlert("계약유형를 설정해 주세요.");
        		return;
        	}
        	if("CT11B03" != this.dsCtgr.getColumn(0, "CD_CNTR_CTGR")) {
        		if(gfnIsNull(this.dsCtgr.getColumn(0,"CD_CNTR_TYPE"))){
        			gfnAlert("계약서종류를 설정해 주세요.");
        			return;
        		}
        	}
        	
        	
        	this.parent.close(this.dsCtgr.saveXML());
        }

        this.fnCdCntrCtgrOnItemchanged = function(obj,e)
        {
        	if("CT11B03" == this.dsCtgr.getColumn(0, "CD_CNTR_CTGR")) {
        		this.dsCtgr.setColumn(0, "CD_CNTR_TYPE", "")
        		this.cboCdCntrType.set_enable(false)
        	} else {
        		this.cboCdCntrType.set_enable(true)
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fnOnLoad, this);
            this.addEventHandler("oninit", this.FormOninit, this);
            this.btn_rtn.addEventHandler("onclick", this.btn_rtn_onclick, this);
            this.cboCdCntrCtgr.addEventHandler("onitemchanged", this.fnCdCntrCtgrOnItemchanged, this);

        };

        this.loadIncludeScript("BCntrTemplateTypePop.xfdl", true);

       
    };
}
)();
