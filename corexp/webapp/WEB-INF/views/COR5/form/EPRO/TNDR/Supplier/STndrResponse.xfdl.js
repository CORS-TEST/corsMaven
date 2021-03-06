﻿(function()
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
                this.set_name("pop_tndrEndPop");
                this.set_titletext("협력사 응찰");
                this.set_cssclass("frm_POP_Search");
                this._setFormPosition(0,0,859,711);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTndr", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj.getSetter("dsDescription").set("검색된 데이터가 담기는 데이터셋");
            obj._setContents("<ColumnInfo><Column type=\"string\" id=\"TNDR_NO\" size=\"20\"/><Column type=\"string\" id=\"CD_BID_UNIT_NM\" size=\"40\"/><Column type=\"string\" id=\"CD_BID_UNIT\" size=\"40\"/><Column id=\"PTNR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column type=\"int\" id=\"TNDR_ODR\" size=\"22\"/><Column type=\"int\" id=\"GOALAMT\" size=\"22\"/><Column type=\"string\" id=\"CD_TNDR_MTHD_NM\" size=\"40\"/><Column type=\"string\" id=\"CD_TNDR_MTHD\" size=\"40\"/><Column type=\"string\" id=\"TTL\" size=\"600\"/><Column id=\"BID_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MODE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_CHGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TNDR_PTNR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRGRS_ROUND\" type=\"STRING\" size=\"256\"/><Column id=\"ROUND_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PTNR_BID_ITEM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ROUND_NEXT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"END_ROUND_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_DATA\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BID_CRNC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RFQ_AMT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTndrRound", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj.getSetter("dsDescription").set("검색된 데이터가 담기는 데이터셋");
            obj._setContents("<ColumnInfo><Column type=\"string\" id=\"TNDR_NO\" size=\"20\"/><Column type=\"int\" id=\"TNDR_ODR\" size=\"22\"/><Column type=\"int\" id=\"ROUND_SEQ\" size=\"22\"/><Column type=\"string\" id=\"PRGRS_DAY\" size=\"8\"/><Column type=\"string\" id=\"END_TIME\" size=\"6\"/><Column type=\"string\" id=\"CD_ROUND_NEXT_NM\" size=\"40\"/><Column type=\"string\" id=\"CD_ROUND_NEXT\" size=\"40\"/><Column type=\"string\" id=\"BGN_TIME\" size=\"6\"/><Column type=\"string\" id=\"BRANCH_CD\" size=\"20\"/><Column id=\"PRGRS_ROUND\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTndrPtnr", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj.getSetter("dsDescription").set("검색된 데이터가 담기는 데이터셋");
            obj._setContents("<ColumnInfo><Column type=\"string\" id=\"TNDR_NO\" size=\"20\"/><Column type=\"string\" id=\"TNDR_PTNR_ID\" size=\"20\"/><Column type=\"string\" id=\"BID_DT\" size=\"7\"/><Column type=\"int\" id=\"LANKING\" size=\"22\"/><Column type=\"int\" id=\"TNDR_ODR\" size=\"22\"/><Column type=\"string\" id=\"PTNR_NM\" size=\"4000\"/><Column type=\"string\" id=\"PTNR_ID\" size=\"20\"/><Column type=\"string\" id=\"BRANCH_CD\" size=\"20\"/><Column id=\"BID_AMT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTndrPtnrItem", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj.getSetter("dsDescription").set("검색된 데이터가 담기는 데이터셋");
            obj._setContents("<ColumnInfo><Column type=\"string\" id=\"CD_UNIT_NM\" size=\"40\"/><Column type=\"string\" id=\"CD_UNIT\" size=\"40\"/><Column type=\"int\" id=\"QTY\" size=\"22\"/><Column type=\"int\" id=\"BID_UNIT_PRICE\" size=\"22\"/><Column type=\"int\" id=\"RFQ_AMT\" size=\"22\"/><Column type=\"string\" id=\"MTRL_NM\" size=\"500\"/><Column type=\"BIGDECIMAL\" id=\"BID_AMT\" size=\"22\"/><Column type=\"string\" id=\"MTRL_CD\" size=\"20\"/><Column id=\"BID_ODR\" type=\"STRING\" size=\"256\"/><Column id=\"PTNR_BID_ITEM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TNDR_PTNR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TNDR_ITEM_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsInit", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"policies\" type=\"STRING\" size=\"256\"/><Column id=\"발행기관\" type=\"STRING\" size=\"256\"/><Column id=\"사용범위\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"policies\">1.2.410.200004.5.2.1.1</Col><Col id=\"발행기관\">한국정보인증</Col><Col id=\"사용범위\">법인</Col></Row><Row><Col id=\"policies\">1.2.410.200004.5.1.1.7</Col><Col id=\"발행기관\">한국증권전산</Col><Col id=\"사용범위\">법인, 단체, 개인사업자</Col></Row><Row><Col id=\"policies\">1.2.410.200005.1.1.5</Col><Col id=\"발행기관\">금융결제원</Col><Col id=\"사용범위\">법인, 임의단체, 개인사업자</Col></Row><Row><Col id=\"policies\">1.2.410.200004.5.3.1.1</Col><Col id=\"발행기관\">한국전산원</Col><Col id=\"사용범위\">기관(국가기관 및 비영리기관)</Col></Row><Row><Col id=\"policies\">1.2.410.200004.5.3.1.2</Col><Col id=\"발행기관\">한국전산원</Col><Col id=\"사용범위\">법인(국가기관 및 비영리기관을  제외한 공공기관, 법인)</Col></Row><Row><Col id=\"policies\">1.2.410.200004.5.4.1.2</Col><Col id=\"발행기관\">한국전자인증</Col><Col id=\"사용범위\">법인, 단체, 개인사업자</Col></Row><Row><Col id=\"policies\">1.2.410.200012.1.1.3</Col><Col id=\"발행기관\">한국무역정보통신</Col><Col id=\"사용범위\">법인</Col></Row><Row><Col id=\"policies\">1.2.410.200004.5.4.1.36</Col><Col id=\"발행기관\">대한유화 전용의 용도제한 인증서</Col><Col id=\"사용범위\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_1", "absolute", "3", "0", null, "49", "3", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBg");
            obj.getSetter("objNm").set("DIV-입찰 진행 상세 ");
            this.addChild(obj.name, obj);
            obj = new Static("sta_mode00", "absolute", "0", "10", "117", "24", null, null, this.div_1);
            obj.set_taborder("0");
            obj.set_text("예약응찰");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("red");
            obj.style.set_font("bold 12 arial");
            obj.getSetter("lbcd").set("");
            this.div_1.addChild(obj.name, obj);
            obj = new MaskEdit("edt_timer", "absolute", "211", "10", null, "24", "472", null, this.div_1);
            obj.set_taborder("1");
            obj.set_type("string");
            obj.set_mask("@@@@.@@.@@ @@:@@:@@");
            obj.set_cssclass("mae_default_r");
            obj.set_enable("false");
            obj.style.set_color("red");
            obj.style.set_font("bold 10 굴림");
            this.div_1.addChild(obj.name, obj);
            obj = new MaskEdit("mae_rfqAmt00", "absolute", "386", "10", "40", "24", null, null, this.div_1);
            obj.set_taborder("2");
            obj.set_mask("9,999.###");
            obj.set_autoselect("true");
            obj.set_cssclass("mae_default_r");
            obj.set_enable("false");
            obj.style.set_color("blue");
            obj.style.set_font("bold 10 굴림");
            obj.getSetter("objNm").set("라운드 횟수");
            this.div_1.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "442", "10", "54", "24", null, null, this.div_1);
            obj.set_taborder("3");
            obj.set_text("라운드");
            obj.style.set_font("bold 12 굴림");
            obj.getSetter("lbcd").set("");
            this.div_1.addChild(obj.name, obj);
            obj = new MaskEdit("edt_minute", "absolute", "503", "10", "60", "24", null, null, this.div_1);
            obj.set_taborder("4");
            obj.set_mask("9,999.###");
            obj.set_autoselect("true");
            obj.set_cssclass("mae_default_r");
            obj.set_enable("false");
            obj.style.set_color("red");
            obj.style.set_font("bold 10 굴림");
            obj.getSetter("objNm").set("라운드 남은시간 분");
            this.div_1.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "589", "10", "150", "24", null, null, this.div_1);
            obj.set_taborder("5");
            obj.set_text("남았습니다.");
            obj.style.set_font("bold 12 굴림");
            obj.getSetter("lbcd").set("");
            this.div_1.addChild(obj.name, obj);
            obj = new Button("btn_tndrAcp", "absolute", "777", "10", "60", "24", null, null, this.div_1);
            obj.set_taborder("6");
            obj.set_text("응찰");
            obj.set_cssclass("btn_WF_SearchBtn");
            obj.getSetter("objNm").set("응찰");
            this.div_1.addChild(obj.name, obj);

            obj = new Div("div_2", "absolute", "0", "55", null, "24", "10", null, this);
            obj.set_taborder("1");
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", null, "255", "24", null, "0", this.div_2);
            obj.set_taborder("0");
            obj.set_text("입찰정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 2 17");
            this.div_2.addChild(obj.name, obj);

            obj = new Static("staViewCompLine01", "absolute", "0", "85", null, "33", "0", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("staTtl", "absolute", "0", "85", "171", "33", null, null, this);
            obj.set_taborder("4");
            obj.set_text("입찰번호(명)");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("staViewCompLine00", "absolute", "0", "117", null, "33", "0", null, this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("staAmtVat", "absolute", "0", "117", "171", "33", null, null, this);
            obj.set_taborder("7");
            obj.set_text("응찰통화");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("staViewCompLine02", "absolute", "0", "149", null, "33", "0", null, this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("staPoAmt", "absolute", "0", "149", "171", "33", null, null, this);
            obj.set_taborder("10");
            obj.set_text("견적금액");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTtl", "absolute", "177", "89", "669", "24", null, null, this);
            obj.set_taborder("16");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("발주서명");
            this.addChild(obj.name, obj);

            obj = new Static("staPoCtgr", "absolute", "291", "117", "160", "33", null, null, this);
            obj.set_taborder("17");
            obj.set_text("구매목표가");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("발주유형");
            this.addChild(obj.name, obj);

            obj = new Static("staDlvArea", "absolute", "291", "149", "160", "33", null, null, this);
            obj.set_taborder("18");
            obj.set_text("응찰금액");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("배송처");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("maeVat", "absolute", "177", "122", "109", "24", null, null, this);
            obj.set_taborder("19");
            obj.set_readonly("true");
            obj.set_mask("#,##0");
            obj.set_cssclass("input_point");
            obj.set_enable("false");
            obj.style.set_color("blue");
            obj.style.set_font("bold 10 Dotum");
            obj.getSetter("objNm").set("부가세");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("maeTotAmt", "absolute", "177", "153", "109", "24", null, null, this);
            obj.set_taborder("20");
            obj.set_readonly("true");
            obj.set_mask("#,##0");
            obj.set_cssclass("input_point");
            obj.set_enable("false");
            obj.style.set_color("blue");
            obj.style.set_font("bold 10 Dotum");
            obj.getSetter("objNm").set("총금액");
            this.addChild(obj.name, obj);

            obj = new Static("staPoCtgr00", "absolute", "571", "117", "160", "33", null, null, this);
            obj.set_taborder("21");
            obj.set_text("입찰방법");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("발주유형");
            this.addChild(obj.name, obj);

            obj = new Static("staDlvArea00", "absolute", "571", "149", "160", "33", null, null, this);
            obj.set_taborder("22");
            obj.set_text("응찰단위");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("배송처");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("maeVat00", "absolute", "457", "122", "109", "24", null, null, this);
            obj.set_taborder("23");
            obj.set_readonly("true");
            obj.set_mask("#,##0");
            obj.set_cssclass("input_point");
            obj.set_enable("false");
            obj.style.set_color("blue");
            obj.style.set_font("bold 10 Dotum");
            obj.getSetter("objNm").set("부가세");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("maeTotAmt00", "absolute", "457", "153", "109", "24", null, null, this);
            obj.set_taborder("24");
            obj.set_readonly("true");
            obj.set_mask("#,##0");
            obj.set_cssclass("input_point");
            obj.set_enable("false");
            obj.style.set_color("blue");
            obj.style.set_font("bold 10 Dotum");
            obj.getSetter("objNm").set("총금액");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("maeVat01", "absolute", "737", "122", "109", "24", null, null, this);
            obj.set_taborder("25");
            obj.set_readonly("true");
            obj.set_mask("#,##0");
            obj.set_cssclass("input_point");
            obj.set_enable("false");
            obj.style.set_color("blue");
            obj.style.set_font("bold 10 Dotum");
            obj.getSetter("objNm").set("부가세");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("maeTotAmt01", "absolute", "737", "153", "109", "24", null, null, this);
            obj.set_taborder("26");
            obj.set_readonly("true");
            obj.set_mask("#,##0");
            obj.set_cssclass("input_point");
            obj.set_enable("false");
            obj.style.set_color("blue");
            obj.style.set_font("bold 10 Dotum");
            obj.getSetter("objNm").set("총금액");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 49, this.div_1,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_cssclass("div_WF_SearchBg");
            		p.getSetter("objNm").set("DIV-입찰 진행 상세 ");

            	}
            );
            this.div_1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.div_2,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.getSetter("objNm").set("DIV-평가서 타이틀");

            	}
            );
            this.div_2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 859, 711, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("협력사 응찰");
            		p.set_cssclass("frm_POP_Search");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item97","maeTotAmt","value","dsPo","TOT_AMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item98","maeVat","value","dsPo","VAT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","div_1.mae_rfqAmt00","value","ds_tndrRound","PRGRS_ROUND");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","div_1.mae_rfqAmt00","","ds_tndrRound","PRGRS_ROUND");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","div_1.edt_minute","","ds_tndrRound","PRGRS_ROUND");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item104","edtTtl","value","dsPo","TTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","maeVat00","value","dsPo","VAT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","maeTotAmt00","value","dsPo","TOT_AMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","maeVat01","value","dsPo","VAT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","maeTotAmt01","value","dsPo","TOT_AMT");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("STndrResponse.xfdl", "lib::lib_all.xjs");
        this.registerScript("STndrResponse.xfdl", function(exports) {
        /**
           @file       PTNDRB200P00.xfdl
           @desc       협력사 입찰참여,모의투찰,예약응찰 구성 화면
           @author     배열
           @makedate   2015.08.13
           @history    2016.04.11  정준화 주석 작업및 추가사항 정리
        */  

        if (this.executeIncludeScript) { this.executeIncludeScript("lib::lib_all.xjs", null, exports); }	//include "lib::lib_all.xjs"

        var signeddata;

        /**
        	@var  this.fv_day
        	@desc 전역변수 응찰 찬여 시간
        */
        this.fv_day = 0;			

        /**
        	@var  this.fv_hour
        	@desc 전역변수 응찰 찬여 시간
        */
        this.fv_hour = 0;			

        /**
        	@var  this.fv_minute
        	@desc 전역변수 응찰 잔여 분
        */
        this.fv_minute = 0;			
        this.fv_minFlag = false;

        /**
        	@var  this.fv_second
        	@desc 전역변수 응찰 잔여 초
        */
        this.fv_second = 0;			

        /**
        	@var  this.fn_mode
        	@desc 전역변수 모의투찰(TEST) , 예약응찰 (RESERVE) , 응찰 
        */
        this.fn_mode = "";			

        /**
        	@var  this.fn_timeMode
        	@desc 전역변수 타이머의 oN / oFF 처리
        */
        this.fn_timeMode = false;	

        /**
        	@var  this.roundCnt
        	@desc 전역변수 토탈 라운드 횟수와 현재 라운드를 비교
        */
        this.roundCnt = 0;			

        /**
        	@var  this.prgrsRound
        	@desc 전역변수 
        */
        this.prgrsRound  = 0;

        /**
        	@var  this.roundYn
        	@desc 전역변수 라운드 YN
        */
        this.roundYn = "";

        /**
        	@var  this.fv_befourBidAmt
        	@desc 전역변수 
        */
        this.fv_befourBidAmt = 0;

        /**
        	@var  this.fv_strTime
        	@desc 전역변수 시작시간
        */
        this.fv_strTime = 0;

        /**
        	@var  this.fv_endTime
        	@desc 전역변수 종료시간
        */
        this.fv_endTime = 0 ;

        /**
        	@var  this.fv_timeChk
        	@desc 전역변수 시간 체크
        */
        this.fv_timeChk = false;

        /**
        	@function	pop_tndrEndPop_onload()
        	@desc   	팝업폼 onload이벤트
        */
        this.pop_tndrEndPop_onload = function(obj,e)
        {
        	//시스템 공통함수 호출 : 팝업
        	this.gfn_popOnLoad(this);
        	
        	//부모창으로 부터 전달받은 값	
        	var ownFrame = this.getOwnerFrame();
        	//부모창으로 부터 전달받은 값을 NULL 이 아니면 검색조건 DataSet에 담는다.
        	this.ds_tndr.addRow();
        	this.ds_tndr.setColumn(0,"TNDR_NO",ownFrame.agv_id);
        	this.ds_tndr.setColumn(0,"TNDR_ODR",ownFrame.agv_odr);
        	this.ds_tndr.setColumn(0,"BRANCH_CD",ownFrame.agv_branch);
        	this.fn_mode = ownFrame.agv_mode;
        	
         	if(this.fn_mode == "TEST"){	//모의투찰
         		this.div_condition.sta_mode.set_visible(true);			//모의투찰 static 보임
         		this.div_condition.sta_mode00.set_visible(false);		//예약응찰 static 안보임
         		this.gfn_alert(this.roundCnt+" 라운드 모의투찰이 시작됩니다.\n 모의투찰은 1분단위로 휴식과 응찰을 반복합니다.");
         	}else if(this.fn_mode == "RESERVE"){	//예약응찰
         		this.div_condition.sta_mode.set_visible(false);			//모의투찰 static 안보임
         		this.div_condition.sta_mode00.set_visible(true);		//예약응찰 static 보임
         	}else{	//입찰참여
         		this.div_condition.sta_mode.set_visible(false);			//모의투찰 static 안보임
         		this.div_condition.sta_mode00.set_visible(false);		//예약응찰 static 안보임
         	}
         	
         	this.WebBrowser00.set_url(application.services["svcurl"].url+"crosscert/Object_chk.jsp");
         	this.WebBrowser01.set_url(application.services["svcurl"].url+"crosscert/SignData.jsp");
         	this.fn_search();
        }

        /**
        	@function	fn_preSearch()
        	@desc   	조회 전 처리
        */
        this.fn_preSearch = function()
        {
        	return true;
        }

        /**
        	@function	fn_search()
        	@desc   	조회 프로세스
        */
        this.fn_search = function()
        {
        	if(!this.fn_preSearch()) return false;
        	
        	var sSvcID = "STndr_GoRead";
        	var sController = "STndr_GoRead.do";
        	var sInDatasets = "in_tndr=ds_tndr";
        	var sOutDatasets = "ds_tndr=ds_tndr ds_tndrPtnr=ds_tndrPtnr ds_tndrRound=ds_tndrRound ds_tndrPtnrItem=ds_tndrPtnrItem";
        	var sCallbackFunc = "fn_trCallBack";
            this.gfn_tran(sSvcID, sController, sInDatasets, sOutDatasets,sCallbackFunc);
        }

        /**
        	@function	fn_trCallBack()
        	@desc   	Transaction Callback함수
        */
        this.fn_trCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	if(strErrCd < 0) return; 
        	
        	switch(strSvcID)
        	{
        		case "STndr_GoRead" :
        		
        			//총액응찰이 아닌경우 응찰금액을 넣지 못하게 한다.
        			if("Y" != this.ds_tndr.getColumn(0,"ALT_TOT_BID")){
        				this.mae_bidAmt.set_enable(false);
        				this.grd_list.setFormat("MMODE");
        			}else{
        				this.grd_list.setFormat("VMODE");
        // 				this.grd_list.setCellProperty("Body",5,"edittype","none");
        // 				this.grd_list.setCellProperty("Body",5,"editdisplay","edit");
        			}
        		
        			this.prgrsRound 	= 	this.ds_tndrRound.getColumn(0,"PRGRS_ROUND")-1;			//현재라운드 순서
        			this.roundYn		=	this.ds_tndrRound.getColumn(this.prgrsRound,"ROUND_YN");	//현재라운드 응찰가능여부
        			if("ET20ANI" == this.ds_tndr.getColumn(0,"CD_TNDR_STTS")){
        				this.gfn_alert("입찰이 완료 되었습니다.");
        				this.close();
        			}
        			
        			if("ET25TALM" == this.ds_tndr.getColumn(0,"CD_BID_RSLT")||
        				"ET25TALO" == this.ds_tndr.getColumn(0,"CD_BID_RSLT")||
        				"ET25TALU" == this.ds_tndr.getColumn(0,"CD_BID_RSLT")||
        				"ET25TALX" == this.ds_tndr.getColumn(0,"CD_BID_RSLT")||
        				"ET25TALD" == this.ds_tndr.getColumn(0,"CD_BID_RSLT")){
        				this.gfn_alert("입찰이 완료 되었습니다.");
        				this.close();
        			}
        			
        			
        			if(this.fn_mode == "TEST"){//모의투찰				
        				this.fv_minute = 1
        				this.fv_second = 0
        				this.setTimer(99,1000);
        			}else if(this.fn_mode == "RESERVE"){//예약응찰				
        				this.fv_day = nexacro.toNumber(this.ds_tndrRound.getColumn(this.prgrsRound,"TIME_DAY")) * 24* 60;
        				this.fv_hour = nexacro.toNumber(this.ds_tndrRound.getColumn(this.prgrsRound,"TIME_HOUR")) * 60;
        				this.fv_minute = nexacro.toNumber(this.ds_tndrRound.getColumn(this.prgrsRound,"TIME_MINUTE"))+this.fv_day+this.fv_hour;
        				this.fv_second = nexacro.toNumber(this.ds_tndrRound.getColumn(this.prgrsRound,"TIME_SECOND"));
        				this.setTimer(99,1000);
        			}else{//입찰참여
        				if("Y" == this.roundYn){	//현재는 응찰이 가능한 시간일때
        				
        					this.div_condition.btn_tndrAcp.set_enable(true);	//응찰버튼을 enable 시킨다.
        					this.fv_day = nexacro.toNumber(this.ds_tndrRound.getColumn(this.prgrsRound,"TIME_END_DAY")) * 24* 60;
        					this.fv_hour = nexacro.toNumber(this.ds_tndrRound.getColumn(this.prgrsRound,"TIME_END_HOUR")) * 60;
        					this.fv_minute = nexacro.toNumber(this.ds_tndrRound.getColumn(this.prgrsRound,"TIME_END_MINUTE"))+this.fv_day+this.fv_hour;
        					this.fv_second = nexacro.toNumber(this.ds_tndrRound.getColumn(this.prgrsRound,"TIME_END_SECOND"));
        					
        					this.ds_tndr.setColumn(0,"PRGRS_ROUND",this.ds_tndr.getColumn(0,"PRGRS_ROUND")+1);
        					this.ds_tndr.setColumn(0,"ROUND_NEXT_CD",this.ds_tndrRound.getColumn(this.prgrsRound,"CD_ROUND_NEXT"));
        					
        				}else{//응찰이 불가능한 시간일때
        					if(this.fn_mode == "RESERVE"){//모의투찰
        						this.div_condition.btn_tndrAcp.set_enable(true);	//응찰버튼을 enable 시킨다.
        					}else{
        						this.div_condition.btn_tndrAcp.set_enable(false);	//응찰버튼을 enable 시킨다.
        					}
        					if("0" == this.prgrsRound){
        						this.div_condition.Static00.set_text("후 시작 됩니다.");
        					}else{
        						this.div_condition.Static00.set_text("후 시작 됩니다.");
        					}
        					this.fv_day = nexacro.toNumber(this.ds_tndrRound.getColumn(this.prgrsRound,"TIME_DAY")) * 24* 60;
        					this.fv_hour = nexacro.toNumber(this.ds_tndrRound.getColumn(this.prgrsRound,"TIME_HOUR")) * 60;
        					this.fv_minute = nexacro.toNumber(this.ds_tndrRound.getColumn(this.prgrsRound,"TIME_MINUTE"))+this.fv_day+this.fv_hour;
        					this.fv_second = nexacro.toNumber(this.ds_tndrRound.getColumn(this.prgrsRound,"TIME_SECOND"));
        				}
        				this.fv_befourBidAmt = this.ds_tndr.getColumn(0,"BID_AMT");
        					this.setTimer(99,1000);
        			}
        			
        			
        			
        		break;
        		case "STndr_GoAcp" :
        			this.gfn_alert(strErrMsg);
        			if(strErrCd < 0){
        				this.close();
        			}else{
        				for(var i=0 ;i < this.ds_tndrPtnr.rowcount; i++){
        					if(application.gds_userInfo.getColumn(0,"PTNR_ID") == this.ds_tndrPtnr.getColumn(i,"PTNR_ID")){
        						this.ds_tndrPtnr.setColumn(i,"BID_AMT",this.fv_befourBidAmt);
        					}
        				}
        			}
        			
        		break;
        		case "STndr_GoReserveAcp" :	
        			this.gfn_alert("예약응찰되었습니다.");
        			for(var i=0 ;i < this.ds_tndrPtnr.rowcount; i++){
        				if(application.gds_userInfo.getColumn(0,"PTNR_ID") == this.ds_tndrPtnr.getColumn(i,"PTNR_ID")){
        					this.ds_tndrPtnr.setColumn(i,"BID_AMT",this.fv_befourBidAmt);
        				}
        			}
        		break;
        		case "STndr_TndrAcpEnd" :	
        			this.gfn_alert("입찰이 완료 되었습니다.");
        			this.close();
        		break;
        		case "STndr_TndrGoAcpRoundUpd" :	
        			this.prgrsRound = this.ds_tndr.getColumn(0,"PRGRS_ROUND")-1;
        			
        			if("ET20ANI" == this.ds_tndr.getColumn(0,"CD_TNDR_STTS")){
        				this.gfn_alert("입찰이 완료 되었습니다.");
        				this.close();
        			}
        			
        			if("ET25TALM" == this.ds_tndr.getColumn(0,"CD_BID_RSLT")||
        				"ET25TALO" == this.ds_tndr.getColumn(0,"CD_BID_RSLT")||
        				"ET25TALU" == this.ds_tndr.getColumn(0,"CD_BID_RSLT")||
        				"ET25TALX" == this.ds_tndr.getColumn(0,"CD_BID_RSLT")||
        				"ET25TALD" == this.ds_tndr.getColumn(0,"CD_BID_RSLT")){
        				this.gfn_alert("입찰이 완료 되었습니다.");
        				this.close();
        			}
        			
        			//테스트라운드 카운트와 총라운드카운트가 일치하면 모의투찰을 종료시킨다.		
        			if(this.prgrsRound == nexacro.toNumber(this.ds_tndr.getColumn(0,"ROUND_CNT"))){
        				//타이머를 종료시킨다
        				this.killTimer(99,1000);
        				this.div_condition.Static00.set_text("분 입찰이 마감되었습니다.");
        				this.fn_mode = "AcpEnd"
        				this.fn_reloadTndr();	
        				
        			//카운트가 일치하지 않는 경우에는 다음라운드로 변경 시킨다.
        			}else{
        				//this.div_condition.edt_round.set_value(this.ds_tndr.getColumn(0,"PRGRS_ROUND"));
        				this.div_condition.btn_tndrAcp.set_enable(false);			//응찰버튼을 enable 시킨다.
        				this.div_condition.Static00.set_text("후 시작 됩니다.");
        				this.fv_day = nexacro.toNumber(this.ds_tndrRound.getColumn(this.prgrsRound,"TIME_DAY")) * 24* 60;
        				this.fv_hour = nexacro.toNumber(this.ds_tndrRound.getColumn(this.prgrsRound,"TIME_HOUR")) * 60;
        				this.fv_minute = nexacro.toNumber(this.ds_tndrRound.getColumn(this.prgrsRound,"TIME_MINUTE"))+this.fv_day+this.fv_hour;
        				this.fv_second = nexacro.toNumber(this.ds_tndrRound.getColumn(this.prgrsRound,"TIME_SECOND"));
        			
        				this.setTimer(99,1000);
        			}
        			
        			//1라운드 종료되면 커서 위치가 응찰금액 위로 향하도록.
        			this.mae_bidAmt.setFocus();
        		break;
        		case "STndr_GoReadTime" :
        			
        			this.fv_endTime = this.gfn_getTodayTime();		//callBack을 받을때 까지 대기한 시간을 구한다.

        			var str = nexacro.toNumber(this.ds_tndrRound.getColumn(this.prgrsRound,"TIME_END_SECOND"))+nexacro.toNumber(this.fv_endTime) - nexacro.toNumber(this.fv_strTime);
        			if("Y" == this.roundYn){	//현재 라운드 진행중이면 종료시간에서 계산을 한다.
        				
        				if(str >= 60){
        					this.fv_day = nexacro.toNumber(this.ds_tndrRound.getColumn(this.prgrsRound,"TIME_END_DAY")) * 24* 60;
        					this.fv_hour = nexacro.toNumber(this.ds_tndrRound.getColumn(this.prgrsRound,"TIME_END_HOUR")) * 60;
        					this.fv_minute = nexacro.toNumber(this.ds_tndrRound.getColumn(this.prgrsRound,"TIME_END_MINUTE"))+this.fv_day+this.fv_hour+1;
        					this.fv_second = nexacro.toNumber(this.ds_tndrRound.getColumn(this.prgrsRound,"TIME_END_SECOND"))+nexacro.toNumber(this.fv_endTime) - nexacro.toNumber(this.fv_strTime)-60;
        				}else{
        					this.fv_day = nexacro.toNumber(this.ds_tndrRound.getColumn(this.prgrsRound,"TIME_END_DAY")) * 24* 60;
        					this.fv_hour = nexacro.toNumber(this.ds_tndrRound.getColumn(this.prgrsRound,"TIME_END_HOUR")) * 60;
        					this.fv_minute = nexacro.toNumber(this.ds_tndrRound.getColumn(this.prgrsRound,"TIME_END_MINUTE"))+this.fv_day+this.fv_hour;
        					this.fv_second = nexacro.toNumber(this.ds_tndrRound.getColumn(this.prgrsRound,"TIME_END_SECOND"))+nexacro.toNumber(this.fv_endTime) - nexacro.toNumber(this.fv_strTime);
        				}
        			}else{						//현재 라운드 진행시간이 아니면 다음라운드 시작시간으로 계산한다.
        				if(str >= 60){
        					this.fv_day = nexacro.toNumber(this.ds_tndrRound.getColumn(this.prgrsRound,"TIME_DAY")) * 24* 60;
        					this.fv_hour = nexacro.toNumber(this.ds_tndrRound.getColumn(this.prgrsRound,"TIME_HOUR")) * 60;
        					this.fv_minute = nexacro.toNumber(this.ds_tndrRound.getColumn(this.prgrsRound,"TIME_MINUTE"))+this.fv_day+this.fv_hour+1;
        					this.fv_second = nexacro.toNumber(this.ds_tndrRound.getColumn(this.prgrsRound,"TIME_SECOND"))+nexacro.toNumber(this.fv_endTime) - nexacro.toNumber(this.fv_strTime)-60;
        				}else{
        					this.fv_day = nexacro.toNumber(this.ds_tndrRound.getColumn(this.prgrsRound,"TIME_DAY")) * 24* 60;
        					this.fv_hour = nexacro.toNumber(this.ds_tndrRound.getColumn(this.prgrsRound,"TIME_HOUR")) * 60;
        					this.fv_minute = nexacro.toNumber(this.ds_tndrRound.getColumn(this.prgrsRound,"TIME_MINUTE"))+this.fv_day+this.fv_hour;
        					this.fv_second = nexacro.toNumber(this.ds_tndrRound.getColumn(this.prgrsRound,"TIME_SECOND"))+nexacro.toNumber(this.fv_endTime) - nexacro.toNumber(this.fv_strTime);
        				}
        			}
        			
        			if(this.fv_minute == 0){
        				this.fv_minute = 1;
        				this.fv_minFlag = true;
        			}
        			
        			this.div_condition.edt_minute.set_value(this.fv_minute);
        		//	this.div_condition.edt_second.set_value(this.fv_second);	
        			
        			this.div_condition.edt_timer.set_value(this.gfn_getTodayTime());
        			
        	
        		break;
        		default:
        		break;	
        	}
        }

        /**
        	@function	fn_reloadTndr()
        	@desc   	
        */
        this.fn_reloadTndr = function(arg){

        	if(this.fn_mode == "TEST"){	//모의투찰
        	}else if(this.fn_mode == "RESERVE"){	//예약응찰
        		var sSvcID = "STndr_TndrGoAcpRoundUpd";
        		var sController = "STndr_TndrGoAcpRoundUpd.do";
        		var sInDatasets = "in_tndr=ds_tndr";
        		var sOutDatasets = "ds_tndr=ds_tndr ds_tndrPtnr=ds_tndrPtnr ds_tndrRound=ds_tndrRound ds_tndrPtnrItem=ds_tndrPtnrItem";
        		var sCallbackFunc = "fn_trCallBack";
        		this.gfn_tran(sSvcID, sController, sInDatasets, sOutDatasets,sCallbackFunc);
        	}else if(this.fn_mode == "AcpEnd"){	//입찰완료처리
        		var sSvcID = "STndr_TndrAcpEnd";
        		var sController = "STndr_TndrAcpEnd.do";
        		var sInDatasets = "in_tndr=ds_tndr";
        		var sOutDatasets = "ds_tndr=ds_tndr";
        		var sCallbackFunc = "fn_trCallBack";
        		this.gfn_tran(sSvcID, sController, sInDatasets, sOutDatasets,sCallbackFunc);
        	}else{	//응찰
        		var sSvcID = "STndr_TndrGoAcpRoundUpd";
        		var sController = "STndr_TndrGoAcpRoundUpd.do";
        		var sInDatasets = "in_tndr=ds_tndr";
        		var sOutDatasets = "ds_tndr=ds_tndr ds_tndrPtnr=ds_tndrPtnr ds_tndrRound=ds_tndrRound ds_tndrPtnrItem=ds_tndrPtnrItem";
        		var sCallbackFunc = "fn_trCallBack";
        		this.gfn_tran(sSvcID, sController, sInDatasets, sOutDatasets,sCallbackFunc);
        	}
        }

        /**
        	@function	btn_close_onclick()
        	@desc   	팝업닫기
        */
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        /**
        	@function	ds_tndrPtnrItem_oncolumnchanged()
        	@desc   	응찰단가 입력시 금액 SUM
        */
        this.ds_tndrPtnrItem_oncolumnchanged = function(obj,e)
        {
        	//단가 및 수량의 컬럼에 데이터가 변경되면 총금액을 계산한다.
        	if(e.columnid=="BID_UNIT_PRICE"){
        		var nQty = ( e.columnid=="QTY"?e.newvalue:obj.getColumn(e.row,"QTY"));
        		var nPrice = ( e.columnid=="BID_UNIT_PRICE"?e.newvalue:obj.getColumn(e.row,"BID_UNIT_PRICE"));
        		if(this.gfn_isNull(nQty * nPrice)==false){
        			obj.setColumn(e.row,"BID_AMT", (nexacro.toNumber(nQty) * nexacro.toNumber(nPrice)));
        			this.ds_tndr.setColumn(0,"BID_AMT",obj.getSum("BID_AMT"));
        		}
        	}
        }

        /**
        	@function	div_condition_btn_tndrAcp_onclick()
        	@desc   	응찰버튼클릭 이벤트
        */
        this.div_condition_btn_tndrAcp_onclick = function(obj,e)
        {
         	
         	//응찰시 응찰단위를 체크한다.
         	var unit = nexacro.toNumber(this.gfn_replace(this.gfn_replace(this.ds_tndr.getColumn(0,"CD_BID_UNIT_NM"),"1",""),",","").length);
         	var bid_amt = ""+this.ds_tndr.getColumn(0,"BID_AMT"); 	
         	var unitCnt = bid_amt.substring(this.gfn_replace(bid_amt,",","").length-unit,bid_amt.length); 
         	 	
         	var unitnmcnt = this.gfn_replace(this.ds_tndr.getColumn(0,"CD_BID_UNIT_NM").replace("1",""),",","");
         	
         	//응찰단위
         	var dan = this.gfn_replace(this.gfn_replace(this.ds_tndr.getColumn(0,"CD_BID_UNIT_NM"),"1",""),",","");
         	//응찰금액
         	//var bb = this.gfn_replace(this.ds_tndr.getColumn(0,"BID_AMT"),",","");
        	
         	if(dan != unitCnt){
        		this.gfn_alert("응찰가를 "+this.ds_tndr.getColumn(0,"CD_BID_UNIT_NM")+"단위로 입력해 주십시요");
        		return;
         	}
         	//견적가격보다 낮게 입력하도록 처리
         	if("ET30H01" == this.ds_tndr.getColumn(0,"CD_TNDR_MTHD")){
         	}else{
        		if(this.ds_tndr.getColumn(0,"RFQ_AMT") <  this.ds_tndr.getColumn(0,"BID_AMT")){
        			this.gfn_alert("응찰 금액은 견적금액보다 크게 입력하실 수 없습니다.");
        			return;
        		}
         	}
         	//응찰차수가 1라운드가 아닐때 이전응찰단가보다 작으면 리턴한다.	
         	if("ET30H01" == this.ds_tndr.getColumn(0,"CD_TNDR_MTHD")){
        		if("1" != this.ds_tndr.getColumn(this.prgrsRound,"PRGRS_ROUND")){
        			if(this.ds_tndr.getColumn(0,"BID_AMT") >  this.ds_tndr.getColumn(0,"ROUND_BID_AMT")){
        				this.gfn_alert("응찰 금액은 이전 응찰금액보다 크게 입력 하셔야 합니다.");
        				return;
        			}
        		}
         	}else{
        		
        		if("1" != this.ds_tndr.getColumn(this.prgrsRound,"PRGRS_ROUND")){
        			if(this.ds_tndr.getColumn(0,"BID_AMT") >  this.ds_tndr.getColumn(0,"ROUND_BID_AMT")){
        				this.gfn_alert("응찰 금액은 이전 응찰금액보다 크거나 같을수 없습니다.");
        				return;
        			}
        		}
         	}
         	
         		//자재별 응찰일 경우에는 입찰단가 체크를 한다.
        	if("N" == this.ds_tndr.getColumn(0,"ALT_TOT_BID")){
        		for(var i = 0 ; i < this.ds_tndrPtnrItem.rowcount; i ++){
        			if("0" == this.ds_tndrPtnrItem.getColumn(i,"BID_AMT")){
        				this.gfn_alert(i+1 +"번째 행의 입찰금액을 넣어주세요");
        				return;
        			}
        		}
        	}	
         	
         	
         	
         	//인증서 사용여부가 Y이면 인증서 인증을 한다.
         	if("Y" == this.ds_tndr.getColumn(0,"ALT_CERT")){
        		if(!this.gfn_confirm(this.gfn_setComma(this.ds_tndr.getColumn(0,"BID_AMT")) +"원 으로 응찰 하시겠습니까?")) return;
        		this.SignData();
         	}else{
        		if(!this.gfn_confirm(this.gfn_setComma(this.ds_tndr.getColumn(0,"BID_AMT")) +"원 으로 응찰 하시겠습니까?")) return;
        		this.fv_befourBidAmt = this.ds_tndr.getColumn(0,"BID_AMT");
        		//응찰시 현재응찰의 라운드를 보여준다.
        		this.ds_tndrPtnrItem.setColumn(0,"BID_ODR",this.ds_tndr.getColumn(0,"PRGRS_ROUND")-1);
        		
        		if(this.fn_mode == "TEST"){
        			this.gfn_alert("응찰되었습니다");
        			return;
        		}else if(this.fn_mode == "RESERVE"){
        			var sSvcID = "STndr_GoReserveAcp";
        			var sController = "STndr_GoReserveAcp.do";
        			var sInDatasets = "in_tndr=ds_tndr in_tndrPtnr=ds_tndrPtnr in_tndrRound=ds_tndrRound in_tndrPtnrItem=ds_tndrPtnrItem";
        			var sOutDatasets = "ds_tndr=in_tndr ds_tndrPtnr=in_tndrPtnr ds_tndrRound=in_tndrRound ds_tndrPtnrItem=in_tndrPtnrItem";
        			var sCallbackFunc = "fn_trCallBack";
        			this.gfn_tran(sSvcID, sController, sInDatasets, sOutDatasets,sCallbackFunc);
        		}else{
        			var sSvcID = "STndr_GoAcp";
        			var sController = "STndr_GoAcp.do";
        			var sInDatasets = "in_tndr=ds_tndr in_tndrPtnr=ds_tndrPtnr in_tndrRound=ds_tndrRound in_tndrPtnrItem=ds_tndrPtnrItem";
        			var sOutDatasets = "ds_tndr=in_tndr ds_tndrPtnr=in_tndrPtnr ds_tndrRound=in_tndrRound ds_tndrPtnrItem=in_tndrPtnrItem";
        			var sCallbackFunc = "fn_trCallBack";
        			this.gfn_tran(sSvcID, sController, sInDatasets, sOutDatasets,sCallbackFunc);
        		}
         	}
         	

        
        }

        /**
        	@function	pop_tndrEndPop_ontimer()
        	@desc   	응찰시간계산
        */
        this.pop_tndrEndPop_ontimer = function(obj,e)
        {
        	if(this.fv_second==0&&this.fv_minFlag==true){
        		this.fv_minFlag = false;
        		if(this.fn_mode == "TEST"){	//모의투찰
        			//타이머를 종료시킨다
        			this.killTimer(99,1000);
        			//테스트라운드 카운트와 총라운드카운트가 일치하면 모의투찰을 종료시킨다.		
        			if(this.roundCnt == this.ds_tndr.getColumn(0,"ROUND_CNT")){
        				this.gfn_alert("모의투찰이 종료되었습니다.");
        				this.close();
        			//카운트가 일치하지 않는 경우에는 다음라운드로 변경 시킨다.
        			}else{
        				this.fv_minute = 2;
        				this.fv_second = 1;
        				this.setTimer(99,1000);
        			}
        			if(this.fn_timeMode){
        				this.div_condition.btn_tndrAcp.set_enable(true);			//응찰버튼을 enable 시킨다.
        				this.div_condition.Static00.set_text("남았습니다.");
        				this.fn_timeMode = false;
        				
        			}else{
        				this.div_condition.btn_tndrAcp.set_enable(false);			//응찰버튼을 enable 시킨다.
        				this.div_condition.Static00.set_text("후 시작 됩니다.");
        				this.fn_timeMode = true;
        			}
        			this.roundCnt = this.roundCnt+1;
        				
        		}else{	//응찰
        			//타이머를 종료시킨다
        			this.killTimer(99,1000);
        			if("Y" == this.roundYn){
        				this.roundYn = 'N';
        			}else{
        				this.roundYn = 'Y';
        			}
        			if("Y" == this.roundYn){	//현재는 응찰이 가능한 시간일때
        			
        				if(this.fn_mode == "RESERVE"){
        					this.div_condition.sta_mode00.set_visible(false);
        					this.fn_mode ="ACP";
        				}
        			
        				this.div_condition.btn_tndrAcp.set_enable(true);	//응찰버튼을 enable 시킨다.
        				this.div_condition.Static00.set_text("남았습니다.");
        				this.fv_minute = nexacro.toNumber(this.ds_tndrRound.getColumn(this.prgrsRound,"END_MINUTE"))
        								-nexacro.toNumber(this.ds_tndrRound.getColumn(this.prgrsRound,"MINUTE"));
        				if(this.fv_minute == 0){
        					this.fv_minFlag = true;
        					this.fv_minute = 1;
        				}
        				
        				this.fv_second = 0;
        				this.ds_tndr.setColumn(0,"PRGRS_ROUND",this.prgrsRound+2);
        				this.ds_tndr.setColumn(0,"ROUND_NEXT_CD",this.ds_tndrRound.getColumn(this.prgrsRound,"CD_ROUND_NEXT"));
        				this.setTimer(99,1000);
        				
        			}else{//응찰이 불가능한 시간일때
        				this.fn_reloadTndr();	
        			}
        		}	
        	}
        // 	else if(this.fv_second==10||
        // 				this.fv_second==20||
        // 				this.fv_second==30||
        // 				this.fv_second==40||
        // 				this.fv_second==50
        // 				){
        // 				if(this.fv_timeChk){
        // 					this.setReloadAmt();				
        // 					this.fv_timeChk = true;
        // 				}else{
        // 					if(this.fv_second==0){
        // 						this.fv_minute = this.fv_minute-1;
        // 						this.fv_second = 59;
        // 					} else {
        // 						this.fv_second = this.fv_second-1;
        // 					}
        // 					this.div_condition.edt_minute.set_value(this.fv_minute);
        // 					this.div_condition.edt_second.set_value(this.fv_second);
        // 					this.fv_timeChk = true;
        // 				}
        // 	}
        	else if(this.fv_second==5||
        				this.fv_second==15||
        				this.fv_second==25||
        				this.fv_second==35||
        				this.fv_second==45||
        				this.fv_second==55
        				){
        				if(this.fv_timeChk){
        					this.setReloadTime();	
        					this.fv_timeChk = true;
        				}else{
        					if(this.fv_second==0){
        						this.fv_minute = this.fv_minute-1;
        						this.fv_second = 59;
        					} else {
        						this.fv_second = this.fv_second-1;
        					}
        					
        					if(this.fv_minute == 0){
        						this.fv_minute = 1;
        						this.fv_minFlag = true;
        					}
        					
        					this.div_condition.edt_minute.set_value(this.fv_minute);
        				//	this.div_condition.edt_second.set_value(this.fv_second);
        					this.div_condition.edt_timer.set_value(this.gfn_getTodayTime());
        					this.fv_timeChk = true;
        				}
        	}
        	else{
        		if(this.fv_second==0){
        			this.fv_minute = this.fv_minute-1;
        			this.fv_second = 59;
        		} else {
        			this.fv_second = this.fv_second-1;
        		}
        		
        		if(this.fv_minute == 0){
        			this.fv_minute = 1;
        			this.fv_minFlag = true;
        		}
        		
        		this.div_condition.edt_minute.set_value(this.fv_minute);
        		//this.div_condition.edt_second.set_value(this.fv_second);
        		this.div_condition.edt_timer.set_value(this.gfn_getTodayTime());
        	}
        }

        
        /**
        	@function	setReloadTime()
        	@desc   	라운드 재설정하는 함수
        */
        this.setReloadTime = function(){
        	try{
        		this.fv_strTime = this.gfn_getTodayTime();		//라운드 재설정을 위해 라운드 시간을 가져오기 전 시간을 구한다.
        		
        		
        		var sSvcID = "STndr_GoReadTime";
        		var sController = "STndr_GoReadTime.do";
        		var sInDatasets = "in_tndr=ds_tndr";
        		var sOutDatasets = "ds_tndrRound=ds_tndrRound";
        		var sCallbackFunc = "fn_trCallBack";
        		this.gfn_tran(sSvcID, sController, sInDatasets, sOutDatasets,sCallbackFunc,'',true,false,false);
        	}catch(e){
        		trace(e.description);
        		trace(e.message);
        		trace(e.number & 0xFF);
        	}
        }

        /**
        	@function	setReloadAmt()
        	@desc   	업체 응찰금액 보여주는 함수
        */
        /*
        this.setReloadAmt = function(){

        	try{

        		if("Y" == this.ds_tndr.getColumn(0,"ALT_ATD_PTNR_OPEN")){
        			var sSvcID = "STndr_GoReadAmt";
        			var sController = "STndr_GoReadAmt.do";
        			var sInDatasets = "in_tndr=ds_tndr";
        			var sOutDatasets = "ds_tndrPtnr=ds_tndrPtnr";
        			var sCallbackFunc = "";
        			this.gfn_tran(sSvcID, sController, sInDatasets, sOutDatasets,sCallbackFunc,'',true,false,false);
        		}
        		this.fv_minute = nexacro.toNumber(this.div_condition.edt_minute.value);
        		this.fv_second = nexacro.toNumber(this.div_condition.edt_second.value);
        		
        		this.div_condition.edt_minute.set_value(this.fv_minute);
        		this.div_condition.edt_second.set_value(this.fv_second-1); 
        	}catch(e){
        		trace(e.description);
        		trace(e.message);
        		trace(e.number & 0xFF);
        	}
        }
        */

        /**
        	@function	SignData()
        	@desc   	전자인증
        */ 
        this.SignData = function()
        {
        	if(!this.Plugin00)
         	{
        		// Create Object
        		var objPlugin = new Plugin("Plugin00", "absolute", 30, 120, 196, 46, null, null);
        		// Add Object to Parent Form  
        		this.addChild("Plugin00", objPlugin);
        		this.Plugin00.set_visible(false);
        		this.Plugin00.set_classid(application.gv_certClassid);
        		this.Plugin00.set_codebase(application.gv_certCodebase);	
        		this.Plugin00.show();
        	}
        	
        	var app_tndr = this.ds_tndr.saveXML();
        	var app_tndrRound = this.ds_tndrRound.saveXML();
        	var app_tndrPtnr = this.ds_tndrPtnr.saveXML();
        	var app_tndrPtnrItem = this.ds_tndrPtnrItem.saveXML();
        	
        	var sign_data = app_tndr+"▩" 
        	                + app_tndrRound  + "▩"
        	                + app_tndrPtnr + "▩"
        	                + app_tndrPtnrItem + "▩";
        	                
        	//런타임 
        	if( system.navigatorname == "nexacro" ) { 
        	
        		// 환경설정 함수 콜
        		this.init_cross();

        		var ret;
        		var textin;
        		var userdn;

        		// 인증서 선택창 초기화 및 선택된 인증서의 DN 추출
        		// DN은 인증기관에서 유니크한 것임.
        		userdn = this.Plugin00.callMethod("GetUserDN");
        		if( userdn == null || userdn == "" )
        		{ 
        			return;
        		}
        		else
        		{

        			// 전자서명 생성
        			// BSTR *SignData(BSTR Source, BSTR HashAlgo, BSTR Password);
        			// parameters : 
        			//   Source : 전자서명할 메세지
        			//   HashAlgo : 서명 알고리즘 ("SHA1", "MD5") ==> SHA1이 표준
        			//   Password : 개인키 복호를 위한 패스워드
        			// return value : 생성된 전자서명 값
        			// 참 고 : 암호를 넣지 않았을 경우에는 암호 입력 다이얼로그 박스에 입력한다.
        			signeddata = this.Plugin00.callMethod("SignData", sign_data, "SHA1", ""); 
        			
        			if( signeddata == null || signeddata == "" )
        			{
        				errmsg = this.Plugin00.callMethod("GetErrorContent"); 
        				errcode = this.Plugin00.callMethod("GetErrorCode"); 
        				this.gfn_alert( "SignData :"+errmsg );
        				return;
        			}
        			else
        			{
        				getR = this.Plugin00.callMethod("GetRFromKey",userdn,""); 
        				if (getR == "")
        				{
        					alert("주민번호/사업자번호를 확인할 수 없는 인증서입니다.");
        					return;
        				}
        				
        				//개발시 개발 인증서의 사업자 번호는 청어람시스템으로 되어 있으므로 
        				//청어람시스템의 사업자 번호를 테스트 인증서의 사업자번호로 하드코딩 하여 테스트 진행함.
        				var sBizNo = this.gfn_replace(application.gds_userInfo.getColumn(0,"BIZ_NO"), "-", "");
        				ret = this.Plugin00.callMethod("ValidCert_VID",userdn, getR, sBizNo); 
        				
        				//인증서의 사업자 번호를 확인 하는 부분
        				//운영이 아래 주석 제거 후 배포해야함.
        				//ret = this.Plugin00.callMethod("ValidCert_VID",userdn, getR, this.ds_cntr.getColumn(0,"BIZ_NO")); 
        				
        				if (ret != "0"){
                            alert("인증서의 사업자번호가 일치하지 않습니다.\n대표사업자의 인증서로만 서명할 수 있습니다.\n인증서와 대표 사업자 번호를 확인해 주세요.");
                            return;
                        }
        			}
        			
        			this.fv_befourBidAmt = this.ds_tndr.getColumn(0,"BID_AMT");
        			//응찰시 현재응찰의 라운드를 보여준다.
        			this.ds_tndrPtnrItem.setColumn(0,"BID_ODR",this.ds_tndr.getColumn(0,"PRGRS_ROUND")-1);
        			this.ds_tndrPtnr.setColumn(0,"SIGN_DATA",signeddata);
        			if(this.fn_mode == "TEST"){
        			}else if(this.fn_mode == "RESERVE"){
        				var sSvcID = "STndr_GoReserveAcp";
        				var sController = "STndr_GoReserveAcp.do";
        				var sInDatasets = "in_tndr=ds_tndr in_tndrPtnr=ds_tndrPtnr in_tndrRound=ds_tndrRound in_tndrPtnrItem=ds_tndrPtnrItem";
        				var sOutDatasets = "ds_tndr=in_tndr ds_tndrPtnr=in_tndrPtnr ds_tndrRound=in_tndrRound ds_tndrPtnrItem=in_tndrPtnrItem";
        				var sCallbackFunc = "fn_trCallBack";
        				this.gfn_tran(sSvcID, sController, sInDatasets, sOutDatasets,sCallbackFunc);
        			}else{
        				var sSvcID = "STndr_GoAcp";
        				var sController = "STndr_GoAcp.do";
        				var sInDatasets = "in_tndr=ds_tndr in_tndrPtnr=ds_tndrPtnr in_tndrRound=ds_tndrRound in_tndrPtnrItem=ds_tndrPtnrItem";
        				var sOutDatasets = "ds_tndr=in_tndr ds_tndrPtnr=in_tndrPtnr ds_tndrRound=in_tndrRound ds_tndrPtnrItem=in_tndrPtnrItem";
        				var sCallbackFunc = "fn_trCallBack";
        				this.gfn_tran(sSvcID, sController, sInDatasets, sOutDatasets,sCallbackFunc);
        			}
        		}

        	// html5 
        	}else{ 		
        		this.WebBrowser01.callMethod("SignData",sign_data,this.ds_tndr.getColumn(0,"PTNR_ID"));
        	} 
        	
        	// Remove Object form Parent Form  
        	this.removeChild("Plugin00");
        }

        this.init_cross = function()
        {
        	var Ret;

        	var policies = "";

        	// 개인 범용 인증서정책(OID)
        	policies +="1.2.410.200004.5.2.1.2"    + "|";          // 한국정보인증               개인                                             
        	policies +="1.2.410.200004.5.1.1.5"    + "|";          // 한국증권전산               개인                                             
        	policies +="1.2.410.200005.1.1.1"      + "|";          // 금융결제원                 개인                                               
        	policies +="1.2.410.200004.5.4.1.1"    + "|";          // 한국전자인증               개인                                             
        	policies +="1.2.410.200012.1.1.1"      + "|";          // 한국무역정보통신           개인                                             
        	

        	// 개인 용도제한용 인증서정책(OID)                 용도                    공인인증기관
        	
        	policies += "1.2.410.200004.5.4.1.101|";        // 은행거래용/보험용       한국전자인증
        	policies += "1.2.410.200004.5.4.1.102|";        // 증권거래용              한국전자인증
        	policies += "1.2.410.200004.5.4.1.103|";        // 신용카드용              한국전자인증
        	policies += "1.2.410.200004.5.4.1.104|";        // 전자민원용              한국전자인증
        	policies += "1.2.410.200004.5.2.1.7.1|";        // 은행거래용/보험용       한국정보인증
        	policies += "1.2.410.200004.5.2.1.7.2|";        // 증권거래용/보험용       한국정보인증
        	policies += "1.2.410.200004.5.2.1.7.3|";        // 신용카드용              한국정보인증
        	policies += "1.2.410.200004.5.1.1.9|";          // 증권거래용/보험용       한국증전산
        	policies += "1.2.410.200004.5.1.1.9.2|";        // 신용카드용              한국증전산
        	policies += "1.2.410.200005.1.1.4|";            // 은행거래용/보험용       금융결제원
        	policies += "1.2.410.200005.1.1.6.2|";          // 신용카드용              금융결제원
        	policies += "1.2.410.200012.1.1.101|";          // 은행거래용/보험용       한국무역정보통신
        	policies += "1.2.410.200012.1.1.103|";          // 증권거래용/보험용       한국무역정보통신
        	policies += "1.2.410.200012.1.1.105";           // 신용카드용              한국무역정보통신

        	 /* 법인상호연동용(범용) */                            //
        	policies +="1.2.410.200004.5.2.1.1"    + "|";          // 한국정보인증               법인
        	policies +="1.2.410.200004.5.1.1.7"    + "|";          // 한국증권전산               법인, 단체, 개인사업자
        	policies +="1.2.410.200005.1.1.5"      + "|";          // 금융결제원                 법인, 임의단체, 개인사업자
        	policies +="1.2.410.200004.5.3.1.1"    + "|";          // 한국전산원                 기관(국가기관 및 비영리기관)
        	policies +="1.2.410.200004.5.3.1.2"    + "|";          // 한국전산원                 법인(국가기관 및 비영리기관을  제외한 공공기관, 법인)
        	policies +="1.2.410.200004.5.4.1.2"    + "|";          // 한국전자인증               법인, 단체, 개인사업자
        	policies +="1.2.410.200012.1.1.3"      + "|";          // 한국무역정보통신           법인

        	Ret =  this.Plugin00.callMethod("SetCommonInfoFromVal","211.192.169.70",4502, 
        														"211.192.169.180",389, 
        														"211.192.169.180",389,
        														"CN=ROOT-RSA-CRL,OU=ROOTCA,O=KISA,C=KR",
        														"no",
        														policies);
        	if ( Ret != 0 )
        	{ 
        		this.gfn_alert( "인증 초기 설정에 실패하였습니다." );
        		return false;
        	}
        	else
        	{
        		Ret = this.Plugin00.callMethod("SetPKCSInform", 1, 0, 0, 0, 0, 0, 0, 1, "SEED"); 
        		
        		
        		if ( Ret != 0 )
        		{ 
        			this.gfn_alert( "인증 초기 설정에 실패하였습니다." );
        			return false;
        		}
        		else
        		{
        			return true;
        		}
        	}	
        }
         
        /**
        	@function	pop_tndrEndPop_onbeforeclose()
        	@desc   	
        */
        this.pop_tndrEndPop_onbeforeclose = function(obj,e)
        {
        	
        }

        this.WebBrowser01_onusernotify = function(obj,e)
        {
        	//런타임 
        	if( system.navigatorname != "nexacro" ) { 
        		this.fv_befourBidAmt = this.ds_tndr.getColumn(0,"BID_AMT");
        		//응찰시 현재응찰의 라운드를 보여준다.
        		this.ds_tndrPtnrItem.setColumn(0,"BID_ODR",this.ds_tndr.getColumn(0,"PRGRS_ROUND")-1);
        		this.ds_tndrPtnr.setColumn(0,"SIGN_DATA",signeddata);
        		if(this.fn_mode == "TEST"){
        		}else if(this.fn_mode == "RESERVE"){
        			var sSvcID = "STndr_GoReserveAcp";
        			var sController = "STndr_GoReserveAcp.do";
        			var sInDatasets = "in_tndr=ds_tndr in_tndrPtnr=ds_tndrPtnr in_tndrRound=ds_tndrRound in_tndrPtnrItem=ds_tndrPtnrItem";
        			var sOutDatasets = "ds_tndr=in_tndr ds_tndrPtnr=in_tndrPtnr ds_tndrRound=in_tndrRound ds_tndrPtnrItem=in_tndrPtnrItem";
        			var sCallbackFunc = "fn_trCallBack";
        			this.gfn_tran(sSvcID, sController, sInDatasets, sOutDatasets,sCallbackFunc);
        		}else{
        			var sSvcID = "STndr_GoAcp";
        			var sController = "STndr_GoAcp.do";
        			var sInDatasets = "in_tndr=ds_tndr in_tndrPtnr=ds_tndrPtnr in_tndrRound=ds_tndrRound in_tndrPtnrItem=ds_tndrPtnrItem";
        			var sOutDatasets = "ds_tndr=in_tndr ds_tndrPtnr=in_tndrPtnr ds_tndrRound=in_tndrRound ds_tndrPtnrItem=in_tndrPtnrItem";
        			var sCallbackFunc = "fn_trCallBack";
        			this.gfn_tran(sSvcID, sController, sInDatasets, sOutDatasets,sCallbackFunc);
        		}
        	}
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTndrPtnrItem.addEventHandler("oncolumnchanged", this.ds_tndrPtnrItem_oncolumnchanged, this);
            this.addEventHandler("onload", this.pop_tndrEndPop_onload, this);
            this.addEventHandler("ontimer", this.pop_tndrEndPop_ontimer, this);
            this.addEventHandler("onbeforeclose", this.pop_tndrEndPop_onbeforeclose, this);
            this.div_1.btn_tndrAcp.addEventHandler("onclick", this.div_condition_btn_tndrAcp_onclick, this);
            this.div_2.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);

        };

        this.loadIncludeScript("STndrResponse.xfdl", true);

       
    };
}
)();
