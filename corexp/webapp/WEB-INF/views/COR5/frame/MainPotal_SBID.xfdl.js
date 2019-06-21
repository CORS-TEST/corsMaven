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
                this.set_name("MainPotal_03");
                this.set_titletext("외부 메인화면");
                this._setFormPosition(0,0,1262,698);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsNewRfq", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsIngRfq", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEndRfq", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsNotice", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_NO\" size=\"256\" type=\"STRING\"/><Column id=\"DENY\" size=\"256\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_ID\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DENY\">B</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPtnr", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdET15", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div01", "absolute", "20", "20", "460", "658", null, null, this);
            obj.set_scrollbars("none");
            obj.set_taborder("110");
            this.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "0", "236", null, "154", "0", null, this.Div01);
            obj.set_cssclass("sta_WF_MainPortlet3");
            obj.getSetter("objNm").set("공지사항");
            obj.style.set_shadow("outer 1,1 2 #e1e1e1ff");
            obj.set_taborder("0");
            this.Div01.addChild(obj.name, obj);
            obj = new Button("Button04", "absolute", null, "139", "21", "18", "0", null, this.Div01);
            obj.set_cssclass("btn_LOGIN_More");
            obj.set_enable("true");
            obj.getSetter("objNm").set("");
            obj.style.set_background("#ffffffff URL('img::btn_move3.png') center");
            obj.style.set_border("1 none #d5d5d5ff");
            obj.set_taborder("1");
            obj.set_visible("true");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static54", "absolute", "11", "546", "428", "27", null, null, this.Div01);
            obj.getSetter("objNm").set("");
            obj.style.set_font("bold 10 Gulim");
            obj.set_taborder("77");
            obj.set_text("홍 길동 과장");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("sta_ptnrChtDt", "absolute", "0", "0", null, "107", "0%", null, this.Div01);
            obj.set_cssclass("sta_WF_Renewal3");
            obj.getSetter("objNm").set("");
            obj.style.set_shadow("outer 1,1 2 #e1e1e1ff");
            obj.set_taborder("81");
            this.Div01.addChild(obj.name, obj);
            obj = new Button("btn_corpInfo", "absolute", null, "15", "108", "30", "0", null, this.Div01);
            obj.set_cssclass("btn_WF_Com_G");
            obj.getSetter("objNm").set("정보변경");
            obj.style.set_border("1 solid #808080ff");
            obj.set_taborder("82");
            obj.set_text("정보변경");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", "12", "156", "36", null, null, this.Div01);
            obj.set_cssclass("sta_WF_maintit1");
            obj.set_taborder("83");
            obj.set_text("회사정보갱신 : ");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("edt_001", "absolute", "164", "15", "180", "30", null, null, this.Div01);
            obj.set_cssclass("txt_main2");
            obj.getSetter("objNm").set("발주명");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            obj.set_taborder("85");
            this.Div01.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "0", "172", null, "201", "0", null, this.Div01);
            obj.set_autofittype("col");
            obj.set_binddataset("dsNotice");
            obj.set_cssclass("grd_LOGIN_Notice");
            obj.getSetter("objNm").set("공지사항 그리드");
            obj.style.set_background("#f7f7f7ff");
            obj.style.set_cursor("auto");
            obj.set_taborder("92");
            obj.set_useselcolor("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"261\"/><Column size=\"80\"/></Columns><Rows><Row size=\"35\"/></Rows><Band id=\"body\"><Cell cssclass=\"cell_link\" style=\"align:left;\" text=\"bind:DOC_NM\"/><Cell col=\"1\" mask=\"####-##-##\" text=\"bind:CRT_DT\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0%", "509", "40.43%", "36", null, null, this.Div01);
            obj.set_cssclass("sta_WF_maintit1");
            obj.set_taborder("93");
            obj.set_text("시스템 사용 문의");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "0%", "130", "40.43%", "36", null, null, this.Div01);
            obj.set_cssclass("sta_WF_maintit1");
            obj.set_taborder("95");
            obj.set_text("공지사항");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "18", "556", "180", "1", null, null, this.Div01);
            obj.set_cssclass("sta_LOGIN_Line");
            obj.getSetter("objNm").set("");
            obj.set_taborder("96");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "2.39%", "573", "428", "27", null, null, this.Div01);
            obj.getSetter("objNm").set("");
            obj.style.set_font("bold 10 Gulim");
            obj.set_taborder("98");
            obj.set_text("010-9999-0976");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "2.39%", "600", "428", "27", null, null, this.Div01);
            obj.getSetter("objNm").set("");
            obj.style.set_font("bold 10 Gulim");
            obj.set_taborder("99");
            obj.set_text("admin@cors.com");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "2.39%", "448", null, "56", "0", null, this.Div01);
            obj.getSetter("objNm").set("");
            obj.style.set_align("left top");
            obj.style.set_font("bold 10 Gulim");
            obj.set_taborder("100");
            obj.set_text("각 입찰 담당자에게 문의하시기 바랍니다.");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "0%", "405", "40.43%", "36", null, null, this.Div01);
            obj.set_cssclass("sta_WF_maintit1");
            obj.set_taborder("101");
            obj.set_text("입찰관련 문의");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "23", "532", "180", "1", null, null, this.Div01);
            obj.set_cssclass("sta_LOGIN_Line");
            obj.getSetter("objNm").set("");
            obj.set_taborder("102");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "60", "156", "36", null, null, this.Div01);
            obj.set_cssclass("sta_WF_maintit1");
            obj.set_taborder("106");
            obj.set_text("회사평가등급 : ");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("sta_baseDay1", "absolute", "61.52%", "68", null, "20", "21.96%", null, this.Div01);
            obj.style.set_font("bold 10 Gulim");
            obj.set_taborder("108");
            obj.set_text("평가일자 :");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "35.65%", "60", "94", "35", null, null, this.Div01);
            obj.getSetter("objNm").set("");
            obj.style.set_color("gray");
            obj.style.set_font("9 BOLD 14 Dotum");
            obj.set_taborder("109");
            obj.set_text("99");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("edt_baseDay", "absolute", "81.74%", "68", "70", "20", null, null, this.Div01);
            obj.set_cssclass("sta_WF_MainDate2");
            obj.set_taborder("110");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("sta_baseDay00", "absolute", "56.52%", "68", null, "20", "38.91%", null, this.Div01);
            obj.style.set_font("bold 10 Gulim");
            obj.set_taborder("111");
            obj.set_text("(");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("sta_baseDay02", "absolute", null, "67", "17", "20", "-8", null, this.Div01);
            obj.style.set_font("bold 10 Gulim");
            obj.set_taborder("112");
            obj.set_text(")");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "512", "20", null, "660", "20", null, this);
            obj.set_scrollbars("none");
            obj.set_taborder("109");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Grid("Grid01", "absolute", "0%", "482", null, null, "0%", "0", this.Div00);
            obj.set_autofittype("col");
            obj.set_binddataset("dsEndRfq");
            obj.set_cssclass("Maingrid1");
            obj.getSetter("objNm").set("오픈견적현황 그리드");
            obj.set_taborder("48");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"318\"/><Column size=\"97\"/><Column size=\"85\"/></Columns><Rows><Row band=\"head\" size=\"37\"/><Row size=\"36\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"입찰명\"/><Cell col=\"1\" expr=\"\" text=\"완료일자\"/><Cell col=\"2\" expr=\"\" text=\"상태\"/></Band><Band id=\"body\"><Cell cssclass=\"cell_link\" style=\"align:left;\" text=\"bind:TTL\" tooltiptext=\"bind:TTL\"/><Cell calendardisplay=\"edit\" col=\"1\" edittype=\"none\" mask=\"####-##-##\" maskchar=\" \" style=\"align:center;\" text=\"bind:RFQ_END_DT\" tooltiptext=\"bind:RFQ_END_DT\"/><Cell col=\"2\" style=\"color:EXPR(CD_ALT_PWIN_PTNR =='ET15AWD'?'blue':'');color2:EXPR(CD_ALT_PWIN_PTNR =='ET15AWD'?'blue':'');font:bold 9 arial;\" text=\"bind:CD_ALT_PWIN_PTNR_NM\" tooltiptext=\"bind:CD_ALT_PWIN_PTNR_NM\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("btn_CLO", "absolute", null, "450", "18", "18", "0%", null, this.Div00);
            obj.set_cssclass("btn_LOGIN_More");
            obj.getSetter("objNm").set("");
            obj.style.set_background("#ffffffff URL('img::btn_move3.png') center");
            obj.style.set_border("1 none #d5d5d5ff");
            obj.set_taborder("49");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0%", "440", "19.95%", "36", null, null, this.Div00);
            obj.set_cssclass("sta_WF_maintit1");
            obj.set_taborder("80");
            obj.set_text("종료된 입찰");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("sta_endCnt", "absolute", "209", "67.88%", "32", "20", null, null, this.Div00);
            obj.style.set_color("navy");
            obj.style.set_align("right middle");
            obj.style.set_font("bold 10 Gulim");
            obj.set_taborder("81");
            obj.set_text("000");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("sta_grdStatus00", "absolute", "250", "67.88%", "50", "20", null, null, this.Div00);
            obj.style.set_font("bold 10 Gulim");
            obj.set_taborder("88");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "0%", "267", null, null, "0%", "231", this.Div00);
            obj.set_autofittype("col");
            obj.set_binddataset("dsIngRfq");
            obj.set_cssclass("Maingrid1");
            obj.getSetter("objNm").set("오픈견적현황 그리드");
            obj.set_taborder("89");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"318\"/><Column size=\"104\"/><Column size=\"109\"/><Column size=\"86\"/></Columns><Rows><Row band=\"head\" size=\"37\"/><Row size=\"36\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"입찰명\"/><Cell col=\"1\" expr=\"\" text=\"담당자\"/><Cell col=\"2\" expr=\"\" text=\"마감일시\"/><Cell col=\"3\" expr=\"\" text=\"상태\"/></Band><Band id=\"body\"><Cell cssclass=\"cell_link\" style=\"align:left;\" text=\"bind:TTL\" tooltiptext=\"bind:TTL\"/><Cell col=\"1\" style=\"align: ;\" text=\"bind:CHRGR_NM\" tooltiptext=\"bind:CHRGR_NM\"/><Cell calendardisplay=\"edit\" col=\"2\" edittype=\"none\" mask=\"####-##-##\" maskchar=\" \" text=\"bind:RFQ_CLOSE\" tooltiptext=\"bind:RFQ_CLOSE\"/><Cell col=\"3\" style=\"color:EXPR(CD_SUBM_STTS=='ET12TALM'?'red':'');color2:EXPR(CD_SUBM_STTS=='ET12TALM'?'red':'');font:bold 9 arial;\" text=\"bind:CD_SUBM_STTS_NM\" tooltiptext=\"bind:CD_SUBM_STTS_NM\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("btn_VIW", "absolute", null, "235", "18", "18", "0%", null, this.Div00);
            obj.set_cssclass("btn_LOGIN_More");
            obj.getSetter("objNm").set("");
            obj.style.set_background("#ffffffff URL('img::btn_move3.png') center");
            obj.style.set_border("1 none #d5d5d5ff");
            obj.set_taborder("90");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0%", "225", "23.32%", "36", null, null, this.Div00);
            obj.set_cssclass("sta_WF_maintit1");
            obj.set_taborder("91");
            obj.set_text("진행중인 입찰");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("sta_ingCnt", "absolute", "209", "35.3%", "32", "20", null, null, this.Div00);
            obj.style.set_color("navy");
            obj.style.set_align("right middle");
            obj.style.set_font("bold 10 Gulim");
            obj.set_taborder("92");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("sta_grdStatus02", "absolute", "250", "35.3%", "50", "20", null, null, this.Div00);
            obj.style.set_font("bold 10 Gulim");
            obj.set_taborder("93");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);
            obj = new Grid("Grid02", "absolute", "0%", "50", null, null, "0%", "448", this.Div00);
            obj.set_autofittype("col");
            obj.set_binddataset("dsNewRfq");
            obj.set_cssclass("Maingrid1");
            obj.getSetter("objNm").set("오픈견적현황 그리드");
            obj.set_taborder("95");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"318\"/><Column size=\"104\"/><Column size=\"97\"/></Columns><Rows><Row band=\"head\" size=\"37\"/><Row size=\"36\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"입찰명\"/><Cell col=\"1\" expr=\"\" text=\"담당자\"/><Cell col=\"2\" expr=\"\" text=\"공고일자\"/></Band><Band id=\"body\"><Cell cssclass=\"cell_link\" style=\"align:left;\" text=\"bind:TTL\" tooltiptext=\"bind:TTL\"/><Cell col=\"1\" style=\"align: ;\" text=\"bind:CHRGR_NM\" tooltiptext=\"bind:CHRGR_NM\"/><Cell calendardisplay=\"edit\" col=\"2\" edittype=\"none\" text=\"bind:APP_CMPLT_DT\" tooltiptext=\"bind:APP_CMPLT_DT\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("btn_REQ", "absolute", null, "16", "18", "18", "0%", null, this.Div00);
            obj.getSetter("objNm").set("");
            obj.style.set_background("#ffffffff URL('img::btn_move3.png') center");
            obj.style.set_border("1 none #d5d5d5ff");
            obj.set_taborder("96");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0%", "6", "23.32%", "36", null, null, this.Div00);
            obj.set_cssclass("sta_WF_maintit1");
            obj.set_taborder("97");
            obj.set_text("신규요청 입찰");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("sta_newCnt", "absolute", "209", "2.12%", "32", "20", null, null, this.Div00);
            obj.style.set_color("navy");
            obj.style.set_align("right middle");
            obj.style.set_font("bold 10 Gulim");
            obj.set_taborder("98");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("sta_grdStatus04", "absolute", "250", "2.12%", "50", "20", null, null, this.Div00);
            obj.style.set_font("bold 10 Gulim");
            obj.set_taborder("99");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 460, 658, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_taborder("110");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 660, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_taborder("109");
            		p.set_text("Div00");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1262, 698, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("MainPotal_01");
            		p.set_titletext("외부 메인화면");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item8","Div01.edt_001","value","dsPtnr","PTNR_CHT_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Div00.sta_grdStatus02","text","gdsLabel","EPRO_LABEL_00070");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Div01.Static02","text","dsPtnr","EVAL_GRADE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","Div01.edt_baseDay","text","dsPtnr","EVAL_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","Div01.Static02","color","dsPtnr","EVAL_COLOR");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("MainPotal_SBID.xfdl", function(exports) {
        /**
           @file       MainPotal_SBID.xfdl
           @desc       Supplier 메인화면
           @author     한민희
           @makedate   2016.07.18
           @history    
        */
         /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {
        	var param = [
        	
        					{code:"ET15", sSelectType:"S"}
        				];
        	gfnGetCode(this, param);
        }

        this.MainPotal_03_oninit = function(obj,e)
        {
        	this.fnSetCode();
        }

        this.MainPotal_onload = function(obj,e)
        {
        	//this.fnMainSearch();
        	//this.fnNotice();
        }

        /**
          * @함수명	: fnSearch
          * @desc     	: 조회 프로세스
          */
        this.fnNotice = function()
        {	
        	var sSvcID = "readNoticePop";
        	var sController = "epro.com.service.BMainService.readNoticePop";
        	var sInDatasets = "dsNotice=dsNotice";
        	var sOutDatasets = "dsNotice=dsNotice";
        	var sCallbackFunc = "fnTrCallBack";

            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc); 
        }

        /**
          * @함수명	: fnMainSearch
          * @desc     	: 조회 프로세스
          */
        this.fnMainSearch = function()
        {
        	
         	var sSvcID = "searchSMain";
         	var sController = "epro.com.service.SMainService.searchSMain";
         	var sInDatasets = "";
         	var sOutDatasets = "dsPtnr=dsPtnr dsNotice=dsNotice dsNewRfq=dsNewRfq dsIngRfq=dsIngRfq dsEndRfq=dsEndRfq";
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
        	
        		case "searchSMain" :
        			this.Div00.sta_newCnt.set_text(this.dsNewRfq.getRowCount());			
        			this.Div00.sta_ingCnt.set_text(this.dsIngRfq.getRowCount());			
        			this.Div00.sta_endCnt.set_text(this.dsEndRfq.getRowCount());			
        		break;
        		
        		case "readNoticePop" :
        			var today = "";
        			for(var i=0; i<this.dsNotice.rowcount; i++)
        			{	
        				today = this.dsNotice.getColumn(i,"TODAY");
        				if(gfnIsNull(application.getPrivateProfile(today))){
        					var sArg = {
        										agv_id:this.dsNotice.getColumn(i,"DOC_NO")
        										};

        					var xLeft = i*100;
        					var yTop  = i*100;
        					
        					if(application.popupframes["modeless_"+ i]){
        						continue;
        					}
        					
        					var strOpenStyle = "showtitlebar=true showstatusbar=false";
        					application.open("modeless_" + i,"CPOP::BComNoticePopup.xfdl",this.parent,sArg,strOpenStyle,xLeft,yTop,700,800,this);
        				}
        			}
        		
        		break;
        		
        		default:
        		break;	
        	}
        }
        this.fnRfqList = function(obj,e)
        {
        	var rfqStts = obj.name.substr(4) ;
        	gfnSetTmprData("RFQ_STTS","ET11"+rfqStts);

        	if(rfqStts =="REQ"||rfqStts =="VIW"){
        		gfnOpenMenuUrl("SRFQ::SRfqPrgList.xfdl");
        	}else{
        		gfnOpenMenuUrl("SRFQ::SRfqRstList.xfdl");
        	}
        }

        this.Div01_Button04_onclick = function(obj,e)
        {
        	gfnOpenMenuUrl("SCMM::SCmmNoticeList.xfdl");
        }

        this.Div01_btn_corpInfo_onclick = function(obj,e)
        {
        	gfnOpenMenuUrl("SPTNR::SPtnDetail.xfdl");
        }

        /**
          * @함수명	: Div00_Grid02_oncelldblclick
          * @desc     	: 신규리스트 상세이동
          */
        this.Div00_Grid02_oncelldblclick = function(obj,e)
        {
        	if( gfnGrdBindColId(obj, obj.getCellPos()) == "TTL"){
        		gfnSetTmprData("RFQ_REQ_NO"	,this.dsNewRfq.getColumn(e.row, "RFQ_REQ_NO"));
        		gfnSetTmprData("RFQ_ODR"	,this.dsNewRfq.getColumn(e.row, "RFQ_ODR"));
        		gfnSetTmprData("BRANCH_CD"	,this.dsNewRfq.getColumn(e.row, "BRANCH_CD"));
        		gfnSetTmprData("RFQ_PTNR_ID"	,this.dsNewRfq.getColumn(e.row, "RFQ_PTNR_ID"));			 
        		gfnOpenMenuUrl("SRFQ::SRfqPrgDetail.xfdl");	
        	}
        }

        /**
          * @함수명	: Div00_Grid00_oncelldblclick
          * @desc     	: 진행리스트 상세이동
          */
        this.Div00_Grid00_oncelldblclick = function(obj,e)
        {
        	if( gfnGrdBindColId(obj, obj.getCellPos()) == "TTL"){
        		gfnSetTmprData("RFQ_REQ_NO"	,this.dsIngRfq.getColumn(e.row, "RFQ_REQ_NO"));
        		gfnSetTmprData("RFQ_ODR"	,this.dsIngRfq.getColumn(e.row, "RFQ_ODR"));
        		gfnSetTmprData("BRANCH_CD"	,this.dsIngRfq.getColumn(e.row, "BRANCH_CD"));
        		gfnSetTmprData("RFQ_PTNR_ID"	,this.dsIngRfq.getColumn(e.row, "RFQ_PTNR_ID"));
        		gfnSetTmprData("TCO_BGN_YR"	,this.dsIngRfq.getColumn(e.row, "TCO_BGN_YR"));
        		
        		if(this.dsIngRfq.getColumn(e.row,"CD_RFQ_AIM")=="ET27TCO"){
        			gfnOpenMenuUrl("SRFQ::SRfqSmtTco.xfdl");
        		}else if(this.dsIngRfq.getColumn(e.row,"CD_RFQ_AIM")=="ET27DSG"){
        			gfnOpenMenuUrl("SRFQ::SRfqSmtExp.xfdl");
        		}else{
        			gfnOpenMenuUrl("SRFQ::SRfqSmt.xfdl");
        		}
        	}
        }

        /**
          * @함수명	: Div00_Grid01_oncelldblclick
          * @desc     	: 결과리스트 상세이동
          */
        this.Div00_Grid01_oncelldblclick = function(obj,e)
        {
        	if( gfnGrdBindColId(obj, obj.getCellPos()) == "TTL"){
        		gfnSetTmprData("RFQ_STTS","ET11CLO");
        		gfnOpenMenuUrl("SRFQ::SRfqRstList.xfdl");
        	}
        }

        

        this.Div01_Grid00_oncellclick = function(obj,e)
        {
        	if( gfnGrdBindColId(obj, obj.getCellPos()) == "DOC_NM"){
        		gfnOpenMenuUrl("SCMM::SCmmNoticeList.xfdl");
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.MainPotal_03_oninit, this);
            this.addEventHandler("onload", this.MainPotal_onload, this);
            this.Div01.Static10.addEventHandler("onclick", this.Static10_onclick, this);
            this.Div01.Button04.addEventHandler("onclick", this.Div01_Button04_onclick, this);
            this.Div01.btn_corpInfo.addEventHandler("onclick", this.Div01_btn_corpInfo_onclick, this);
            this.Div01.Grid00.addEventHandler("oncellclick", this.Div01_Grid00_oncellclick, this);
            this.Div00.Grid01.addEventHandler("oncelldblclick", this.Div00_Grid01_oncelldblclick, this);
            this.Div00.btn_CLO.addEventHandler("onclick", this.fnRfqList, this);
            this.Div00.sta_endCnt.addEventHandler("onclick", this.fnRfqList, this);
            this.Div00.Grid00.addEventHandler("oncelldblclick", this.Div00_Grid00_oncelldblclick, this);
            this.Div00.btn_VIW.addEventHandler("onclick", this.fnRfqList, this);
            this.Div00.Grid02.addEventHandler("oncelldblclick", this.Div00_Grid02_oncelldblclick, this);
            this.Div00.btn_REQ.addEventHandler("onclick", this.fnRfqList, this);

        };

        this.loadIncludeScript("MainPotal_SBID.xfdl", true);

       
    };
}
)();
