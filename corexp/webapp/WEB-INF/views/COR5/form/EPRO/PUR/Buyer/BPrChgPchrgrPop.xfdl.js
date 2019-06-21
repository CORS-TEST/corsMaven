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
                this.set_name("BUserInfoPopup");
                this.set_titletext("구매요청취소및완료사유");
                this._setFormPosition(0,0,470,118);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsReturn", this);
            obj._setContents("<ColumnInfo><Column id=\"OPNN\" size=\"256\" type=\"STRING\"/><Column id=\"PR_ITEM_ID\" size=\"256\" type=\"STRING\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIN_USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPchrgr", this);
            obj._setContents("<ColumnInfo><Column id=\"PCHRGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PCHRGR_ID_BEFORE\" type=\"STRING\" size=\"256\"/><Column id=\"PCHRGR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PCHRGR_NM_BEFORE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btnChange", "absolute", null, "8", "60", "24", "10", null, this);
            obj.set_taborder("8");
            obj.set_text("변경");
            obj.set_cssclass("btn_WF_Ssign");
            obj.getSetter("objNm").set("구매담당자변경버튼");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("staViewCompLine01", "absolute", "10", "37", null, "33", "10", null, this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("staTtl", "absolute", "10", "37", "97", "33", null, null, this);
            obj.set_taborder("12");
            obj.set_text("기존담당자");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("0");
            obj.getSetter("objNm").set("기존담당자");
            this.addChild(obj.name, obj);

            obj = new Static("staViewCompLine00", "absolute", "10", "69", null, "33", "10", null, this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("staTtl00", "absolute", "10", "69", "97", "33", null, null, this);
            obj.set_taborder("14");
            obj.set_text("변경담당자");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("변경담당자");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPchrgrNmBefore", "absolute", "262", "41", "145", "24", null, null, this);
            obj.set_taborder("15");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("기존담당자명");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPchrgrIdBefore", "absolute", "112", "41", "145", "24", null, null, this);
            obj.set_taborder("16");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("기존담당자ID");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPchrgrIdAfter", "absolute", "112", "73", "145", "24", null, null, this);
            obj.set_taborder("17");
            obj.set_readonly("true");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("변경될담당자ID");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPchrgrNmAfter", "absolute", "262", "73", "145", "24", null, null, this);
            obj.set_taborder("18");
            obj.set_readonly("false");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("변경될담당자명");
            this.addChild(obj.name, obj);

            obj = new Button("btnPchrgr", "absolute", "407", "73", "24", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("구매요청자 검색 버튼");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 470, 118, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("구매요청취소및완료사유");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item104","edtPchrgrNmBefore","value","dsIv","TTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edtPchrgrIdBefore","value","dsIv","TTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edtPchrgrIdAfter","value","dsIv","TTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edtPchrgrNmAfter","value","dsIv","TTL");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("BPrChgPchrgrPop.xfdl", function(exports) {
        /**
         * @파일명       	: BPrClosePop.xfdl
         * @생성자       	: 배열
         * @생성일자     	: 2019.05.27
         * @설명			: 구매요청 취소 및 구매완료 사유 팝업
         * @최종수정자		: 배열
         * @최종수정일자	: 2019.05.27
        */

        this.popTitle = "구매담당자변경"
         
        /**
          * @함수명	: fnOnLoad
          * @desc   : 폼 onload이벤트
          */ 
        this.fnOnLoad = function(obj,e)
        {
        	var ownFrame = this.getOwnerFrame();
        	
        	this.dsPchrgr.addRow();
        	this.dsPchrgr.setColumn(0,"PCHRGR_ID_BEFORE",ownFrame.agv_id);
        	this.dsPchrgr.setColumn(0,"PCHRGR_NM_BEFORE",ownFrame.agv_nm);
        	
        }
          
        this.btnChange_onclick = function(obj,e)
        {
        	if("" == this.dsPchrgr.getColumn(0,"PCHRGR_ID")){
        		gfnAlert("변경담당자를 입력해주셔야 합니다."); 
        		return;
        	}
        	if(this.dsPchrgr.getColumn(0,"PCHRGR_ID_BEFORE") == this.dsPchrgr.getColumn(0,"PCHRGR_ID")){
        		gfnAlert("기존담당자와 변경담당자가 동일 합니다."); 
        		return;
        	}
        	
        	if(!gfnConfirm("구매담당자를 변경 하시겠습니까?")) return;
        	
        	var rtn = this.dsPchrgr.saveXML();
        	if(rtn){
        		this.close(rtn);
        	}		
        }

        this.btnPchrgr_onclick = function(obj,e)
        {
        	var sArg = { 
        				agv_id:""
        				,agv_nm:this.ds_pghrgr.getColumn(0,"PCHRGR_NM")
        				,agv_mode:"" 
        			   };
        	this.gfn_CPop_ComUser
        	Srch(sArg,"fn_popCallBack","PopupComUserSrch");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fnOnLoad, this);
            this.btnChange.addEventHandler("onclick", this.btnChange_onclick, this);
            this.btnPchrgr.addEventHandler("onclick", this.btnPchrgr_onclick, this);

        };

        this.loadIncludeScript("BPrChgPchrgrPop.xfdl", true);

       
    };
}
)();
