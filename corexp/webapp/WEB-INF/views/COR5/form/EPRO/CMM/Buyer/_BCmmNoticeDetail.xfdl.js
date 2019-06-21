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
                this.set_name("BCmmNoticeDetail");
                this.set_titletext("공지사항상세");
                this._setFormPosition(0,0,1220,1067);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBbs", this);
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"20\" type=\"STRING\"/><Column id=\"DOC_NO\" size=\"20\" type=\"STRING\"/><Column id=\"DOC_NM\" size=\"400\" type=\"STRING\"/><Column id=\"INT_OPEN_SITE\" size=\"1\" type=\"STRING\"/><Column id=\"BGN_DT\" size=\"8\" type=\"STRING\"/><Column id=\"END_DT\" size=\"8\" type=\"STRING\"/><Column id=\"ALT_TOP_DISP\" size=\"1\" type=\"STRING\"/><Column id=\"PWD\" size=\"100\" type=\"STRING\"/><Column id=\"ALT_POPUP_WIN\" size=\"1\" type=\"STRING\"/><Column id=\"WRTR_INFO\" size=\"40\" type=\"STRING\"/><Column id=\"CONTENT\" size=\"1000\" type=\"STRING\"/><Column id=\"USER_ID\" size=\"20\" type=\"STRING\"/><Column id=\"USER_NM\" size=\"20\" type=\"STRING\"/><Column id=\"RELOAD\" size=\"1\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM91", this);
            obj._setContents("");
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

            obj = new Div("divViewCompBody00", "absolute", "0", "24", null, "134", "10", null, this);
            obj.set_cssclass("div_WF_DetailBg");
            obj.getSetter("objNm").set("DIV-평가서 상세");
            obj.set_positionstep("0");
            obj.set_taborder("101");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "0", null, "33", "0", null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("16");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "32", null, "33", "0", null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("17");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "64", null, "33", "0", null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("18");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staBbsDay", "absolute", "0", "32", "171", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("공지기간");
            obj.set_positionstep("1");
            obj.set_taborder("4");
            obj.set_text("공지기간");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staDocNm", "absolute", "0", "0", "171", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("제목");
            obj.set_positionstep("1");
            obj.set_taborder("0");
            obj.set_text("제목");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staAltPopupWin", "absolute", "556", "32", "171", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("최상단여부");
            obj.set_positionstep("1");
            obj.set_taborder("6");
            obj.set_text("공지사항팝업여부");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtDocNm", "absolute", "176", "5", "359", "24", null, null, this.divViewCompBody00);
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("제목");
            obj.set_positionstep("1");
            obj.set_taborder("1");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Div("divBbsDay", "absolute", "176", "36", "230", "24", null, null, this.divViewCompBody00);
            obj.getSetter("objNm").set("공지기간");
            obj.set_positionstep("1");
            obj.set_taborder("5");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staIntOpenSite", "absolute", "556", "0", "171", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("공개여부");
            obj.set_positionstep("1");
            obj.set_taborder("2");
            obj.set_text("공개여부");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Combo("cboIntOpenSite", "absolute", "732", "5", "154", "24", null, null, this.divViewCompBody00);
            this.divViewCompBody00.addChild(obj.name, obj);
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_innerdataset("@dsCdCM91");
            obj.getSetter("objNm").set("공개여부");
            obj.set_positionstep("1");
            obj.set_taborder("3");
            obj = new Static("staPwd", "absolute", "0", "64", "171", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("패스워드");
            obj.set_positionstep("1");
            obj.set_taborder("8");
            obj.set_text("패스워드");
            obj.set_wordwrap("char");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staAltTopDisp", "absolute", "556", "64", "171", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("공지팝업여부");
            obj.set_positionstep("1");
            obj.set_taborder("10");
            obj.set_text("최상단여부");
            obj.set_wordwrap("char");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine04", "absolute", "0", "96", null, "33", "0", null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("20");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staWrtrInfo", "absolute", "0", "96", "171", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("작성자/작성일자");
            obj.set_positionstep("1");
            obj.set_taborder("12");
            obj.set_text("작성자 / 작성일자");
            obj.set_wordwrap("char");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staLastChgrInfo", "absolute", "556", "96", "171", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("수정자/수정일자");
            obj.set_positionstep("1");
            obj.set_taborder("14");
            obj.set_text("수정자 / 수정일자");
            obj.set_wordwrap("char");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtWrtrInfo", "absolute", "176", "100", "359", "24", null, null, this.divViewCompBody00);
            obj.set_cssclass("readonly_P");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("작성자/작성일자");
            obj.set_positionstep("1");
            obj.set_taborder("13");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtPwd", "absolute", "176", "68", "229", "24", null, null, this.divViewCompBody00);
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("패스워드");
            obj.set_password("true");
            obj.set_positionstep("1");
            obj.set_taborder("9");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtLastChgrInfo", "absolute", "732", "100", "400", "24", null, null, this.divViewCompBody00);
            obj.set_cssclass("readonly_P");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("수정자/수정일자");
            obj.set_positionstep("1");
            obj.set_taborder("15");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new CheckBox("cboAltPopupWin", "absolute", "732", "36", "182", "24", null, null, this.divViewCompBody00);
            obj.set_cssclass("chk_default");
            obj.set_falsevalue("N");
            obj.getSetter("objNm").set("예가공개 여부");
            obj.set_taborder("21");
            obj.set_text("사용");
            obj.set_truevalue("Y");
            obj.set_value("N");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new CheckBox("cboAltTopDisp", "absolute", "732", "68", "182", "24", null, null, this.divViewCompBody00);
            obj.set_cssclass("chk_default");
            obj.set_falsevalue("N");
            obj.getSetter("objNm").set("예가공개 여부");
            obj.set_taborder("23");
            obj.set_text("사용");
            obj.set_truevalue("Y");
            obj.set_value("N");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Div("divViewCompTitle01", "absolute", "0", "178", null, "24", "10", null, this);
            obj.getSetter("objNm").set("DIV-공지내용 타이틀");
            obj.set_positionstep("0");
            obj.set_taborder("104");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle01", "absolute", "0", "0", "255", "24", null, null, this.divViewCompTitle01);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("20");
            obj.set_text("공지내용");
            this.divViewCompTitle01.addChild(obj.name, obj);

            obj = new Div("divViewCompBody01", "absolute", "0", "207", null, "500", "10", null, this);
            obj.getSetter("objNm").set("DIV-대상업체 세부정보");
            obj.style.set_background("transparent");
            obj.set_taborder("107");
            this.addChild(obj.name, obj);
            obj = new TextArea("txtContent", "absolute", "0", "0", null, null, "0", "0", this.divViewCompBody01);
            obj.set_taborder("0");
            this.divViewCompBody01.addChild(obj.name, obj);

            obj = new Div("divViewCompTitle02", "absolute", "0", "727", null, "24", "8", null, this);
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            obj.set_taborder("108");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle02", "absolute", "0", "0", "255", "24", null, null, this.divViewCompTitle02);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("0");
            obj.set_text("첨부파일");
            this.divViewCompTitle02.addChild(obj.name, obj);

            obj = new Div("divViewCompBody02", "absolute", "0", "756", null, "236", "0", null, this);
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
            obj = new Layout("default", "", 0, 134, this.divViewCompBody00,
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
            obj = new BindItem("item2","divViewCompBody00.cboIntOpenSite","value","dsBbs","INT_OPEN_SITE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","divViewCompBody00.edtPwd","value","dsBbs","PWD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","divViewCompBody00.edtWrtrInfo","value","dsBbs","WRTR_INFO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","divViewCompBody00.edtLastChgrInfo","value","dsBbs","LAST_WRTR_INFO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staBbsDayVi","divViewCompBody00.staBbsDay","visible","dsObjBindVi","staBbsDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staBbsDayEn","divViewCompBody00.staBbsDay","enable","dsObjBindEn","staBbsDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staDocNmVi","divViewCompBody00.staDocNm","visible","dsObjBindVi","staDocNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staDocNmEn","divViewCompBody00.staDocNm","enable","dsObjBindEn","staDocNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAltPopupWinVi","divViewCompBody00.staAltPopupWin","visible","dsObjBindVi","staAltPopupWin");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAltPopupWinEn","divViewCompBody00.staAltPopupWin","enable","dsObjBindEn","staAltPopupWin");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDocNmVi","divViewCompBody00.edtDocNm","visible","dsObjBindVi","edtDocNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDocNmEn","divViewCompBody00.edtDocNm","readonly","dsObjBindEn","edtDocNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divBbsDayVi","divViewCompBody00.divBbsDay","visible","dsObjBindVi","divBbsDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divBbsDayEn","divViewCompBody00.divBbsDay","enable","dsObjBindEn","divBbsDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staIntOpenSiteVi","divViewCompBody00.staIntOpenSite","visible","dsObjBindVi","staIntOpenSite");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staIntOpenSiteEn","divViewCompBody00.staIntOpenSite","enable","dsObjBindEn","staIntOpenSite");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboIntOpenSiteVi","divViewCompBody00.cboIntOpenSite","visible","dsObjBindVi","cboIntOpenSite");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboIntOpenSiteEn","divViewCompBody00.cboIntOpenSite","readonly","dsObjBindEn","cboIntOpenSite");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPwdVi","divViewCompBody00.staPwd","visible","dsObjBindVi","staPwd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPwdEn","divViewCompBody00.staPwd","enable","dsObjBindEn","staPwd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAltTopDispVi","divViewCompBody00.staAltTopDisp","visible","dsObjBindVi","staAltTopDisp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAltTopDispEn","divViewCompBody00.staAltTopDisp","enable","dsObjBindEn","staAltTopDisp");
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
            obj = new BindItem("edtPwdVi","divViewCompBody00.edtPwd","visible","dsObjBindVi","edtPwd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPwdEn","divViewCompBody00.edtPwd","readonly","dsObjBindEn","edtPwd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtLastChgrInfoVi","divViewCompBody00.edtLastChgrInfo","visible","dsObjBindVi","edtLastChgrInfo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtLastChgrInfoEn","divViewCompBody00.edtLastChgrInfo","readonly","dsObjBindEn","edtLastChgrInfo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","divViewCompBody01.txtContent","value","dsBbs","CONTENT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAltPopupWinLangBind2017110317184262004","divViewCompBody00.staAltPopupWin","text","gdsLabel","EPRO_LABEL_00311");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staWrtrInfoLangBind2017110317184243437","divViewCompBody00.staWrtrInfo","text","gdsLabel","EPRO_LABEL_00125");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item67","divViewCompBody00.cboAltPopupWin","value","dsBbs","ALT_POPUP_WIN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkAltBdgtOpenVi","divViewCompBody00.cboAltPopupWin","visible","dsObjBindVi","cboAltPopupWin");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkAltBdgtOpenEn","divViewCompBody00.cboAltPopupWin","readonly","dsObjBindEn","cboAltPopupWin");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","divViewCompBody00.cboAltTopDisp","value","dsBbs","ALT_TOP_DISP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","divViewCompBody00.cboAltTopDisp","visible","dsObjBindVi","cboAltTopDisp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","divViewCompBody00.cboAltTopDisp","readonly","dsObjBindEn","cboAltTopDisp");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompCalFromTo.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompNFileUpDown.xfdl");
        };
        
        // User Script
        this.registerScript("_BCmmNoticeDetail.xfdl", function(exports) {
        /**
         * @파일명       	: BCmmNoticeDetail.xfdl
         * @생성자       	: 배열
         * @생성일자     	: 2017. 9. 06.
         * @설명			: 공지사항 상세(내부)
         * @최종수정자		: 김민성
         * @최종수정일자	: 2017. 9. 20.
        */  

         /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {

        	var param = [
        					{code:"CM91", sSelectType:"A", sFiltered:"S:B,S"}	
        				];
        	gfnGetCode(this, param);
        }

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

        this.fnFormOninit = function(obj,e)
        {
        	this.fnSetCode();
        }

        /**
          * @함수명	: fnFormOnload()
          * @desc     	: 폼 onload이벤트
          */
        this.fnFormOnload = function(obj,e){
        	
        	var docNo = gfnGetTmprData("DOC_NO");
        	var bbsCtgr = gfnGetTmprData("BBS_CTGR");
        	gfnClearTmprData();
        	
        	// 파일 데이터셋 생성
        	gfnMakeFileDs(this);
        	
        	// 타이틀 접기/펼치기 기능
        	this.fnFold();
        	
        	this.divViewCompBody00.divBbsDay.fnSetDate(this.dsBbs, "BGN_DT", "END_DT");
        	
        	//신규
        	if(gfnIsNull(docNo)){
        		gfnSetObj("A");
        		var date = new Date();
        		var wrtrInfo = "";
        		
        		if(application.gdsUserInfo.getColumn(0,"LANG_CD") == "CM34EN"&&!gfnIsNull(application.gdsUserInfo.getColumn(0,"USER_NM_GB"))){
        			wrtrInfo = application.gdsUserInfo.getColumn(0,"USER_NM_GB")+" / "+ date.toFormatString("yyyy-mm-dd");
        		}else{
        			wrtrInfo = application.gdsUserInfo.getColumn(0,"USER_NM")+" / "+ date.toFormatString("yyyy-mm-dd");
        		}
        		
        		this.dsBbs.addRow();
        		this.dsBbs.setColumn(0,"INT_OPEN_SITE","CM91A");
        		this.dsBbs.setColumn(0,"ALT_POPUP_WIN","");
        		this.dsBbs.setColumn(0,"ALT_TOP_DISP","");
        		this.dsBbs.setColumn(0,"WRTR_INFO",wrtrInfo);
        		
        		this.fnfileSet('N');//N
        		
        	}else{
        		this.dsBbs.addRow();
        		this.dsBbs.setColumn(0, "DOC_NO",docNo);
        		this.dsBbs.setColumn(0, "BBS_CTGR",bbsCtgr);
        		this.fnSearch();
        	}
        }

        /**
        	@function	fnfileSet()
          * @input    	read모드 YN
        	@desc   	파일 구성
        */
        this.fnfileSet = function(mode)
        {
        	var sTableNm = "MM_CM_BBS";
        	var arrFileKey = [this.dsBbs.getColumn(0, "DOC_NO")];
        	this.divViewCompBody02.fnFileInit(this, sTableNm, this.dsBbs, arrFileKey, mode);
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
        	var sController = "epro.cmm.service.BCmmService.readCmmNotice";
        	var sInDatasets = "dsBbs=dsBbs:A";
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
        	@함수명	fnPreSave()
        	@desc   	저장 전 처리
        */
        this.fnPreSave = function(){
        	
        	var arr = [];
        	var auth = application.gdsUserRole.findRow("ROLE_ID","B_WEBMASTER");
        	
        	if(auth == -1){
        		if(!gfnIsNull(this.dsBbs.getColumn(0,"DOC_NO")) && !gfnIsNull(this.dsBbs.getColumn(0,"PWD")) && (this.dsBbs.getColumn(0,"PWD") != this.dsBbs.getColumn(0,"OLD_PWD"))){
        			var msg = gfnMultiLabel("EPRO_LABEL_00927");
        			var type = gfnMultiLabel("EPRO_LABEL_00931");
        			var objParam = {agv_msg:msg, agv_type:type};
        			arr.push(objParam);
        		}
        		
        		if(!gfnValidate(this, true, arr)) return false;
        	}
        	
        	if(!gfnConfirm("EPRO_LABEL_00001")) return false;
        	
        	return true;
        }

        /**
        	@함수명	fnSave()
        	@desc   	(공통버튼)저장
        */
        this.fnSave = function(){
        	
        	if(!this.fnPreSave()) return false;
        	
        	var sSvcID = "saveCmmNotice";
        	var sController = "epro.cmm.service.BCmmService.saveCmmNotice";
        	var sInDatasets = "dsBbs=dsBbs:A";
        	var sOutDatasets = "dsBbs=dsBbs";
        	var sCallbackFunc = "fnTrCallBack";

            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc); 
        }

        /**
        	@함수명	fnPreDelete()
        	@desc   	삭제 전 처리
        */
        this.fnPreDelete = function(){
        	
        	var arr = [];
        	var auth = application.gdsUserRole.findRow("ROLE_ID","B_WEBMASTER");
        	
        	if(auth == -1){
        		if(gfnIsNull(this.dsBbs.getColumn(0,"PWD"))){
        			var msg = gfnMultiLabel("EPRO_LABEL_00934");
        			var type = gfnMultiLabel("EPRO_LABEL_00935");
        			var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        			arr.push(objParam);
        		}
        		
        		if(!gfnIsNull(this.dsBbs.getColumn(0,"PWD")) && this.dsBbs.getColumn(0,"PWD") != this.dsBbs.getColumn(0,"OLD_PWD")){
        			var msg = gfnMultiLabel("EPRO_LABEL_00927");
        			var type = gfnMultiLabel("EPRO_LABEL_00931");
        			var objParam = {agv_msg:msg, agv_type:type};
        			arr.push(objParam);
        		}
        		
        		if(!gfnValidate(this, false, arr)) return false;
        	}
        	
        	if(!gfnConfirm("EPRO_LABEL_00846")) return false;
        	
        	return true;
        }

        /**
        	@함수명	fnDelete()
        	@desc   	(공통버튼)삭제
        */
        this.fnDelete = function(){

        	if(!this.fnPreDelete()) return false;
        		
        	var sSvcID = "deleteCmmNotice";
        	var sController = "epro.cmm.service.BCmmService.deleteCmmNotice";
        	var sInDatasets = "dsBbs=dsBbs";
        	var sOutDatasets = "";
        	var sCallbackFunc = "fnTrCallBack";

        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
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
        			
        			gfnSetObj("B");
        			this.fnfileSet('N');
        			break;	
        		
        		case "saveCmmNotice" :	//저장			
        			if(!gfnIsNull(strErrMsg)) gfnAlert(strErrMsg);
        			this.dsBbs.setColumn(0,"RELOAD","Y")
        			this.fnSearch();
        			break;
        		
        		case "deleteCmmNotice" :	//저장			
        			if(!gfnIsNull(strErrMsg)) gfnAlert(strErrMsg);
        			this.parent.fnBtnComCloseOnclick();
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

        this.loadIncludeScript("_BCmmNoticeDetail.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
