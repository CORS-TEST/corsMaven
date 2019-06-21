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
                this.set_name("SCmmNoticeDetail");
                this.set_titletext("공지사항상세");
                this._setFormPosition(0,0,1220,1067);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBbs", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_BRANCH_CD\" size=\"10\" type=\"STRING\"/><Column id=\"BBS_CTGR\" size=\"10\" type=\"STRING\"/><Column id=\"DOC_NO\" size=\"20\" type=\"STRING\"/><Column id=\"CONTENT\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompTitle00", "absolute", "0", "0", null, "24", "0", null, this);
            obj.getSetter("objNm").set("DIV-기본정보 타이틀");
            obj.set_positionstep("0");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "0", "255", "24", null, null, this.divViewCompTitle00);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("21");
            obj.set_text("기본정보");
            this.divViewCompTitle00.addChild(obj.name, obj);

            obj = new Div("divViewCompBody00", "absolute", "0", "29", null, "70", "10", null, this);
            obj.set_cssclass("div_WF_DetailBg");
            obj.getSetter("objNm").set("DIV-평가서 상세");
            obj.set_positionstep("0");
            obj.set_taborder("101");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "0", null, "33", "0", null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("16");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staDocNm", "absolute", "0", "1", "171", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("제목");
            obj.set_positionstep("1");
            obj.set_taborder("2");
            obj.set_text("제목");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtDocNm", "absolute", "176", "5", "551", "24", null, null, this.divViewCompBody00);
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("제목");
            obj.set_positionstep("1");
            obj.set_taborder("6");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine04", "absolute", "0", "32", null, "33", "0", null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("20");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staWrtrInfo", "absolute", "0", "32", "171", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("작성자/작성일자");
            obj.set_positionstep("1");
            obj.set_taborder("22");
            obj.set_text("작성자 / 작성일자");
            obj.set_wordwrap("char");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staLastChgrInfo", "absolute", "581", "32", "171", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("수정자/수정일자");
            obj.set_positionstep("1");
            obj.set_taborder("23");
            obj.set_text("수정자 / 수정일자");
            obj.set_wordwrap("char");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtWrtrInfo", "absolute", "176", "37", "400", "24", null, null, this.divViewCompBody00);
            obj.set_cssclass("readonly_P");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("작성자/작성일자");
            obj.set_positionstep("1");
            obj.set_taborder("25");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtLastChgrInfo", "absolute", "757", "37", "400", "24", null, null, this.divViewCompBody00);
            obj.set_cssclass("readonly_P");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("수정자/수정일자");
            obj.set_positionstep("1");
            obj.set_taborder("27");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Div("divViewCompTitle01", "absolute", "0", "119", null, "24", "10", null, this);
            obj.getSetter("objNm").set("DIV-공지내용 타이틀");
            obj.set_positionstep("0");
            obj.set_taborder("104");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle01", "absolute", "0", "0", "255", "24", null, null, this.divViewCompTitle01);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("20");
            obj.set_text("공지내용");
            this.divViewCompTitle01.addChild(obj.name, obj);

            obj = new Div("divViewCompBody01", "absolute", "0", "148", null, "554", "10", null, this);
            obj.getSetter("objNm").set("DIV-대상업체 세부정보");
            obj.style.set_background("transparent");
            obj.set_taborder("107");
            this.addChild(obj.name, obj);
            obj = new TextArea("txaContent", "absolute", "0", "0", null, null, "0", "0", this.divViewCompBody01);
            obj.getSetter("objNm").set("공지사항내용");
            obj.set_taborder("0");
            this.divViewCompBody01.addChild(obj.name, obj);

            obj = new Div("divViewCompTitle02", "absolute", "0", "722", null, "24", "8", null, this);
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            obj.set_taborder("108");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle02", "absolute", "0", "0", "255", "24", null, null, this.divViewCompTitle02);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("0");
            obj.set_text("첨부파일");
            this.divViewCompTitle02.addChild(obj.name, obj);

            obj = new Div("divViewCompBody02", "absolute", "0", "751", null, "321", "0", null, this);
            obj.set_taborder("109");
            obj.set_url("CCOMP::CompNFileUpDown.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompTitle00,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-기본정보 타이틀");
            		p.set_positionstep("0");
            		p.set_taborder("1");

            	}
            );
            this.divViewCompTitle00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 70, this.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.set_cssclass("div_WF_DetailBg");
            		p.getSetter("objNm").set("DIV-평가서 상세");
            		p.set_positionstep("0");
            		p.set_taborder("101");

            	}
            );
            this.divViewCompBody00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompTitle01,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-공지내용 타이틀");
            		p.set_positionstep("0");
            		p.set_taborder("104");

            	}
            );
            this.divViewCompTitle01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1042, 386, this.divViewCompBody01,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-대상업체 세부정보");
            		p.style.set_background("transparent");
            		p.set_taborder("107");

            	}
            );
            this.divViewCompBody01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompTitle02,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 타이틀");
            		p.set_taborder("108");

            	}
            );
            this.divViewCompTitle02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "Screen0", 1220, 1067, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("FrmTemplate100");
            		p.set_titletext("공지사항상세");

            	}
            );
            obj.set_stepcount("");
            obj.set_stepindex("");
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","divViewCompBody00.edtDocNm","value","dsBbs","DOC_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","divViewCompBody00.edtWrtrInfo","value","dsBbs","WRTR_INFO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","divViewCompBody00.edtLastChgrInfo","value","dsBbs","LAST_WRTR_INFO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staDocNmVi","divViewCompBody00.staDocNm","visible","dsObjBindVi","staDocNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staDocNmEn","divViewCompBody00.staDocNm","enable","dsObjBindEn","staDocNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDocNmVi","divViewCompBody00.edtDocNm","visible","dsObjBindVi","edtDocNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDocNmEn","divViewCompBody00.edtDocNm","readonly","dsObjBindEn","edtDocNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staWrtrInfoVi","divViewCompBody00.staWrtrInfo","visible","dsObjBindVi","staWrtrInfo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staWrtrInfoEn","divViewCompBody00.staWrtrInfo","enable","dsObjBindEn","staWrtrInfo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staLastChgrInfoVi","divViewCompBody00.staLastChgrInfo","visible","dsObjBindVi","staLastChgrInfo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staLastChgrInfoEn","divViewCompBody00.staLastChgrInfo","enable","dsObjBindEn","staLastChgrInfo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtWrtrInfoVi","divViewCompBody00.edtWrtrInfo","visible","dsObjBindVi","edtWrtrInfo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtWrtrInfoEn","divViewCompBody00.edtWrtrInfo","readonly","dsObjBindEn","edtWrtrInfo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtLastChgrInfoVi","divViewCompBody00.edtLastChgrInfo","visible","dsObjBindVi","edtLastChgrInfo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtLastChgrInfoEn","divViewCompBody00.edtLastChgrInfo","readonly","dsObjBindEn","edtLastChgrInfo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","divViewCompBody01.txaContent","value","dsBbs","CONTENT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divViewCompBody01.txaContent","readonly","dsObjBindEn","txaContent");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","divViewCompBody01.txaContent","visible","dsObjBindVi","txaContent");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staLastChgrInfoLangBind2017110317184258367","divViewCompBody00.staLastChgrInfo","text","gdsLabel","EPRO_LABEL_00050");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompNFileUpDown.xfdl");
        };
        
        // User Script
        this.registerScript("SCmmNoticeDetail.xfdl", function(exports) {
        /**
         * @파일명       	: SCmmNoticeDetail.xfdl
         * @생성자       	: 배열
         * @생성일자     	: 2017. 9. 06.
         * @설명			: 공지사항 상세(외부)
         * @최종수정자		: 김승일
         * @최종수정일자	: 2017. 10. 31.
        */  
         

        /**
        	@함수명	fnFold
        	@desc   	타이틀 접기/펼치기 기능
        */
        this.fnFold = function()
        {
        	/*
        		상단에서부터 div 순서대로 기입.
        		ttl:접기/펼치기 클릭 하는 컴포넌트, body:실제로 접혀지거나 펼쳐지는 컴포넌트, initFold:true면 접는다.
        	*/
        	var sArg = [ 
        				{ttl:this.divViewCompTitle00.staViewCompTitle00, body:this.divViewCompBody00}	// 기본정보
        				,{ttl:this.divViewCompTitle01.staViewCompTitle01, body:this.divViewCompBody01}	// 공지내용
        				,{ttl:this.divViewCompTitle02.staViewCompTitle02, body:this.divViewCompBody02}	// 첨부파일
        		   ];		   
        	gfnDivFold(this, sArg);
        }

        /**
          * @함수명	: fnFormOnload()
          * @desc     	: 폼 onload이벤트
          */
        this.fnFormOnload = function(obj,e){
        	var docNo = gfnGetTmprData("DOC_NO");
        	var bbsCtgr = gfnGetTmprData("BBS_CTGR");
        	var docBranchCd = gfnGetTmprData("DOC_BRANCH_CD");
        	gfnClearTmprData();
        	
        	// 파일 데이터셋 생성
        	gfnMakeFileDs(this);
        	
        	// 타이틀 접기/펼치기 기능
        	this.fnFold();
        	
        	this.dsBbs.addRow();
        	this.dsBbs.setColumn(0, "DOC_NO",docNo);
        	this.dsBbs.setColumn(0, "BBS_CTGR",bbsCtgr);
        	this.dsBbs.setColumn(0, "DOC_BRANCH_CD",docBranchCd);
        	
        	this.fnSearch();
        }

        /**
        	@function	fnfileSet()
          * @input    	read모드 YN
        	@desc   	파일 구성
        */
        this.fnfileSet = function()
        {
        	var sTableNm = "MM_CM_BBS";
        	var arrFileKey = [this.dsBbs.getColumn(0, "DOC_NO")];
        	this.divViewCompBody02.fnFileInit(this, sTableNm, this.dsBbs, arrFileKey);
        }
         
        /**
        	@함수명	fnPreSearch()
        	@desc   	조회 전 처리
        */
        this.fnPreSearch = function(){
        	return true;
        }

        /**
        	@함수명	fnSearch
        	@desc   	조회 프로세스
        */
        this.fnSearch = function(){	
        	
        	var sSvcID = "readCmmNotice";
        	var sController = "epro.cmm.service.SCmmService.readCmmNotice";
        	var sInDatasets = "dsBbs=dsBbs";
        	var sOutDatasets = "dsBbs=dsBbs";
        	var sCallbackFunc = "fnTrCallBack";

            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc); 
        }

        /**
        	@함수명	fnClose()
        	@desc   	(공통버튼)닫기
        */
        this.fnClose = function(){
        	return true;
        }

        /**
        	@함수명	fnSave()
        	@desc   	(공통버튼)저장
        */
        this.fnSave = function(){	
        }

        

        /**
        	@function	fnTrCallBack()
        	@desc   	Transaction Callback함수
        */
        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg){
        	
        	if(strErrCd < 0){
        		return;
        	}	
        	
        	switch(strSvcID){		
        		case "readCmmNotice" :	//조회
        			gfnSetObj("A");
        			this.fnfileSet();
        			break;	
        		
        		default:
        			break;	
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.divViewCompTitle00.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);

        };

        this.loadIncludeScript("SCmmNoticeDetail.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
