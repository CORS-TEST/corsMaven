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
            obj = new Dataset("dsReturn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"STR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACNT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PTNR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PTNR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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

            obj = new Edit("edDeptCd", "absolute", "148", "12", "121", "24", null, null, this);
            obj.set_taborder("2");
            obj.set_enable("false");
            obj.style.setStyleValue("color", "disabled", "black");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("objNm").set("구매요청자ID");
            this.addChild(obj.name, obj);

            obj = new Edit("edDeptNm", "absolute", "272", "12", "181", "24", null, null, this);
            obj.set_taborder("3");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("구매요청자명");
            this.addChild(obj.name, obj);

            obj = new Button("btnSinglePop00", "absolute", "452", "13", "24", "24", null, null, this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("구매요청자 검색 버튼");
            this.addChild(obj.name, obj);

            obj = new Static("staPtnrChgDt00", "absolute", "-30", "12", "170", "24", null, null, this);
            obj.set_taborder("5");
            obj.set_text("부서검색");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edAcntCd", "absolute", "148", "44", "121", "24", null, null, this);
            obj.set_taborder("6");
            obj.set_enable("false");
            obj.style.setStyleValue("color", "disabled", "black");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("objNm").set("구매요청자ID");
            this.addChild(obj.name, obj);

            obj = new Edit("edAcntNm", "absolute", "272", "44", "181", "24", null, null, this);
            obj.set_taborder("7");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("구매요청자명");
            this.addChild(obj.name, obj);

            obj = new Button("btnAcnt", "absolute", "452", "44", "24", "24", null, null, this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("구매요청자 검색 버튼");
            this.addChild(obj.name, obj);

            obj = new Static("staPtnrChgDt01", "absolute", "-30", "44", "170", "24", null, null, this);
            obj.set_taborder("9");
            obj.set_text("계정검색");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edMtrlCd", "absolute", "148", "76", "121", "24", null, null, this);
            obj.set_taborder("10");
            obj.set_enable("false");
            obj.style.setStyleValue("color", "disabled", "black");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("objNm").set("구매요청자ID");
            this.addChild(obj.name, obj);

            obj = new Edit("edMtrlNm", "absolute", "272", "76", "181", "24", null, null, this);
            obj.set_taborder("11");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("구매요청자명");
            this.addChild(obj.name, obj);

            obj = new Button("btnMtrl", "absolute", "452", "76", "24", "24", null, null, this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("구매요청자 검색 버튼");
            this.addChild(obj.name, obj);

            obj = new Static("staPtnrChgDt02", "absolute", "-30", "76", "170", "24", null, null, this);
            obj.set_taborder("13");
            obj.set_text("품목검색");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edUserId", "absolute", "148", "108", "121", "24", null, null, this);
            obj.set_taborder("14");
            obj.set_enable("false");
            obj.style.setStyleValue("color", "disabled", "black");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("objNm").set("구매요청자ID");
            this.addChild(obj.name, obj);

            obj = new Edit("edUserNm", "absolute", "272", "108", "181", "24", null, null, this);
            obj.set_taborder("15");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("구매요청자명");
            this.addChild(obj.name, obj);

            obj = new Button("btnUser", "absolute", "452", "108", "24", "24", null, null, this);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("구매요청자 검색 버튼");
            this.addChild(obj.name, obj);

            obj = new Static("staPtnrChgDt03", "absolute", "-30", "108", "170", "24", null, null, this);
            obj.set_taborder("17");
            obj.set_text("사용자검색");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edPtnrCd", "absolute", "148", "140", "121", "24", null, null, this);
            obj.set_taborder("18");
            obj.set_enable("false");
            obj.style.setStyleValue("color", "disabled", "black");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("objNm").set("구매요청자ID");
            this.addChild(obj.name, obj);

            obj = new Edit("edPtnrNm", "absolute", "272", "140", "181", "24", null, null, this);
            obj.set_taborder("19");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("구매요청자명");
            this.addChild(obj.name, obj);

            obj = new Button("btnPtnr", "absolute", "452", "140", "24", "24", null, null, this);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("구매요청자 검색 버튼");
            this.addChild(obj.name, obj);

            obj = new Static("staPtnrChgDt04", "absolute", "-30", "140", "170", "24", null, null, this);
            obj.set_taborder("21");
            obj.set_text("협력업체검색");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);


            
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
            obj = new BindItem("item10","edDeptCd","value","dsData","STR_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","edDeptNm","value","dsData","SL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","staPtnrChgDt00","visible","dsObjBindVi","staPtnrChgDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","staPtnrChgDt00","enable","dsObjBindEn","staPtnrChgDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edAcntCd","value","dsData","ACNT_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edAcntNm","value","dsData","ACNT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","staPtnrChgDt01","visible","dsObjBindVi","staPtnrChgDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","staPtnrChgDt01","enable","dsObjBindEn","staPtnrChgDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edMtrlCd","value","dsData","MTRL_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edMtrlNm","value","dsData","MTRL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","staPtnrChgDt02","visible","dsObjBindVi","staPtnrChgDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","staPtnrChgDt02","enable","dsObjBindEn","staPtnrChgDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","edUserId","value","dsData","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","edUserNm","value","dsData","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","staPtnrChgDt03","visible","dsObjBindVi","staPtnrChgDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","staPtnrChgDt03","enable","dsObjBindEn","staPtnrChgDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","edPtnrCd","value","dsData","PTNR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","edPtnrNm","value","dsData","PTNR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","staPtnrChgDt04","visible","dsObjBindVi","staPtnrChgDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","staPtnrChgDt04","enable","dsObjBindEn","staPtnrChgDt");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Popup.xfdl", function(exports) {
        /**
         * @파일명       	: BPtnrDetail.xfdl
         * @생성자       	: 한의봉
         * @생성일자     	: 2017. 9. 05
         * @설명			: 협력사상세
         * @최종수정자		: 안성민
         * @최종수정일자	: 2017. 11. 16.
        */  

        this.isUserChk = false;
        this.ptnrSel = false;

        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {
        	var param = [
        					{code:"SR13", sSelectType:"S"} //벤더타입
        					,{code:"CM16", sSelectType:"S"} //국가
        					,{code:"CM15", sSelectType:"S"} //거래통화
        					,{code:"CM13", sSelectType:"S"} //지급조건
        					,{code:"CM22", sSelectType:"S"} //incoterms
        					,{code:"SR14", sSelectType:"S"} //내/외자
        					,{code:"CM99"}
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
        					{btnName:"승인", clickEventFunc:"fnPtnrSel"}
        					,{btnName:"반려", clickEventFunc:"fnRtnRsn"}
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
        //	this.fnSetCode();
        }

        /**
        	@함수명	fnFold
        	@desc   	타이틀 접기/펼치기 기능
        */
        this.fnFold = function()
        {
        }

        /**
          * @함수명	: fnFormOnload
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.LoadEventInfo(이벤트변수)
          * @return   : 
          * @desc     	: 폼 onload이벤트
          */
        this.fnFormOnload = function(obj,e)
        {
        	
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
          * @함수명  : fnTrCallBack
          * @input    : strSvcID ,strErrCd ,strErrMsg
          * @return   : 
          * @desc     : 트랜잭션 콜백
          */
        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	if(strErrCd < 0) return;	
        	
        	switch(strSvcID){		
        		case "readPtnr" : //조회		
        			break;
        		default:
        			break;	
        	}
        }

        
        /**
        	@function	fnPopCallBack()
        	@desc   	팝업 CallBack 함수
        */
        this.fnPopCallBack = function(sPopupId,rtn)
        {
        	if(gfnIsNull(rtn)) return;
        	
        	this.dsReturn.loadXML(rtn);
        	
        	trace(this.dsReturn.saveXML());
        	
        	switch(sPopupId){
        		
        			case "searchDept" :
        				this.dsData.setColumn(0,"STR_CD",this.dsReturn.getColumn(0,"STR_CD"));
        				this.dsData.setColumn(0,"SL_NM",this.dsReturn.getColumn(0,"SL_NM"));
        			break;
        			case "searchAcnt" :
        				this.dsData.setColumn(0,"ACNT_CD",this.dsReturn.getColumn(0,"ACNT_CD"));
        				this.dsData.setColumn(0,"ACNT_NM",this.dsReturn.getColumn(0,"ACNT_NM"));			
        			break;
        			case "searchMtrl" :
        				this.dsData.setColumn(0,"MTRL_CD",this.dsReturn.getColumn(0,"MTRL_CD"));
        				this.dsData.setColumn(0,"MTRL_NM",this.dsReturn.getColumn(0,"MTRL_NM"));
        			break;
        			case "searchUser" :
        				this.dsData.setColumn(0,"USER_ID",this.dsReturn.getColumn(0,"USER_ID"));
        				this.dsData.setColumn(0,"USER_NM",this.dsReturn.getColumn(0,"USER_NM"));
        			break;
        			case "searchPtnr" :
        				this.dsData.setColumn(0,"PTNR_ID",this.dsReturn.getColumn(0,"PTNR_ID"));
        				this.dsData.setColumn(0,"PTNR_NM",this.dsReturn.getColumn(0,"PTNR_NM"));
        			break;
        		default:
        			break;	
        	}
        }
        this.fnSlPop = function(obj,e)
        {
        	var sArg = {
        				agv_id 	: this.dsData.getColumn(0,"STR_CD")
        				,agv_nm : this.dsData.getColumn(0,"SL_NM")
        				};
        	gfnModalPop(this, "searchDept", "CPOP::BSlSrchPopup.xfdl", sArg, "fnPopCallBack", 800, 600);
        }

        this.btnAcnt_onclick = function(obj,e)
        {
        	var sArg = {
        				agv_id 	: this.dsData.getColumn(0,"ACNT_CD")
        				,agv_nm : this.dsData.getColumn(0,"ACNT_NM")
        				};
        	gfnModalPop(this, "searchAcnt", "CPOP::BAcntSrchPopup.xfdl", sArg, "fnPopCallBack", 800, 600);
        }

        this.btnMtrl_onclick = function(obj,e)
        {
        	var sArg = {
        				agv_id 	: this.dsData.getColumn(0,"MTRL_CD")
        				,agv_nm : this.dsData.getColumn(0,"MTRL_NM")
        				};
        	gfnModalPop(this, "searchMtrl", "CPOP::BMtrlSrchPopup.xfdl", sArg, "fnPopCallBack", 800, 600);
        }

        this.btnUser_onclick = function(obj,e)
        {
        	var sArg = {
        				agv_id 	: this.dsData.getColumn(0,"USER_ID")
        				,agv_nm : this.dsData.getColumn(0,"USER_NM")
        				};
        	gfnModalPop(this, "searchUser", "CPOP::BUserSrchPopup.xfdl", sArg, "fnPopCallBack", 800, 600);
        }

        this.btnPtnr_onclick = function(obj,e)
        {
        	var sArg = {
        				agv_id 	: this.dsData.getColumn(0,"PTNR_ID")
        				,agv_nm : this.dsData.getColumn(0,"PTNR_NM")
        				};
        	gfnModalPop(this, "searchPtnr", "CPOP::BPtnrSrchPopup.xfdl", sArg, "fnPopCallBack", 800, 600);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.PopupDiv00.Grid00.addEventHandler("oncellclick", this.fnEvalGrdOnclick, this);
            this.edDeptNm.addEventHandler("onkeydown", this.fnKeydown, this);
            this.btnSinglePop00.addEventHandler("onclick", this.fnSlPop, this);
            this.edAcntNm.addEventHandler("onkeydown", this.fnKeydown, this);
            this.btnAcnt.addEventHandler("onclick", this.btnAcnt_onclick, this);
            this.edMtrlNm.addEventHandler("onkeydown", this.fnKeydown, this);
            this.btnMtrl.addEventHandler("onclick", this.btnMtrl_onclick, this);
            this.edUserNm.addEventHandler("onkeydown", this.fnKeydown, this);
            this.btnUser.addEventHandler("onclick", this.btnUser_onclick, this);
            this.edPtnrNm.addEventHandler("onkeydown", this.fnKeydown, this);
            this.btnPtnr.addEventHandler("onclick", this.btnPtnr_onclick, this);

        };

        this.loadIncludeScript("Popup.xfdl", true);

       
    };
}
)();
