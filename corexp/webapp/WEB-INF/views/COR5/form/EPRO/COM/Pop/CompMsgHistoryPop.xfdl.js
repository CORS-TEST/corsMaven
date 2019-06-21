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
                this.set_name("CompMultiMsgPop");
                this.set_titletext("화면정보, 메시지 내역 팝업");
                this.set_visible("true");
                this._setFormPosition(0,0,1000,800);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_chgPgm", this);
            obj._setContents("<ColumnInfo><Column id=\"CHECKED\" size=\"40\" type=\"string\"/><Column id=\"CD_PRCS_STTS_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_PRCS_STTS\" size=\"40\" type=\"string\"/><Column id=\"REQR_NM\" size=\"30\" type=\"string\"/><Column id=\"SN\" size=\"40\" type=\"string\"/><Column id=\"PRCS_CNTNT\" size=\"2000\" type=\"string\"/><Column id=\"CD_CHG_REQ_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_CHG_REQ\" size=\"40\" type=\"string\"/><Column id=\"PRCS_DT\" size=\"7\" type=\"string\"/><Column id=\"DOC_NO\" size=\"40\" type=\"string\"/><Column id=\"PRCSR_NM\" size=\"30\" type=\"string\"/><Column id=\"REQ_DT\" size=\"7\" type=\"string\"/><Column id=\"REQ_CNTNT\" size=\"2000\" type=\"string\"/><Column id=\"LAST_CHG_DT\" size=\"7\" type=\"string\"/><Column id=\"PGM_ID\" size=\"40\" type=\"string\"/><Column id=\"LAST_CHGR_ID\" size=\"50\" type=\"string\"/><Column id=\"BRANCH_CD\" size=\"20\" type=\"string\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_condition", this);
            obj._setContents("<ColumnInfo><Column id=\"LAST_LOGIN_DT\" size=\"256\" type=\"string\"/><Column id=\"USER_NM\" size=\"256\" type=\"string\"/><Column id=\"USER_ID\" size=\"256\" type=\"string\"/><Column id=\"URL\" size=\"256\" type=\"string\"/><Column id=\"PGM_ID\" size=\"256\" type=\"string\"/><Column id=\"TCODE\" size=\"256\" type=\"string\"/><Column id=\"RD_MODE\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_prcsruser", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM_LO\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD_ID\"/><Col id=\"CD_NM_LO\">[선택]</Col></Row><Row><Col id=\"CD_ID\">배열</Col><Col id=\"CD_NM_LO\">배열</Col></Row><Row><Col id=\"CD_ID\">정준화</Col><Col id=\"CD_NM_LO\">정준화</Col></Row><Row><Col id=\"CD_ID\">김민성</Col><Col id=\"CD_NM_LO\">김민성</Col></Row><Row><Col id=\"CD_ID\">한민희</Col><Col id=\"CD_NM_LO\">한민희</Col></Row><Row><Col id=\"CD_ID\">윤영호</Col><Col id=\"CD_NM_LO\">윤영호</Col></Row><Row><Col id=\"CD_ID\">한희규</Col><Col id=\"CD_NM_LO\">한희규</Col></Row><Row><Col id=\"CD_ID\">송태봉</Col><Col id=\"CD_NM_LO\">송태봉</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_help", this);
            obj._setContents("<ColumnInfo><Column id=\"PGM_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CNTNT\" size=\"256\" type=\"STRING\"/><Column id=\"CRTR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CRT_DT\" size=\"256\" type=\"STRING\"/><Column id=\"lAST_CHGR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_CHG_DT\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_close", "absolute", null, "0", "30", "30", "8", null, this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title", "absolute", "0", "0", null, "30", "640", null, this);
            obj.set_taborder("14");
            obj.set_text("화면정보");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00", "absolute", "10", "48", null, null, "10", "10", this);
            obj.set_scrollbars("autoboth");
            obj.set_tabindex("0");
            obj.set_taborder("30");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.Tab00);
            obj.set_text(" 화면 변경요청 ");
            this.Tab00.addChild(obj.name, obj);
            obj = new Grid("grd_reqApp", "absolute", "0", "256", null, null, "0", "1", this.Tab00.tabpage2);
            obj.set_autofittype("none");
            obj.set_binddataset("ds_chgPgm");
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"33\"/><Column size=\"74\"/><Column size=\"308\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"81\"/><Column size=\"381\"/></Columns><Rows><Row band=\"head\" size=\"31\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" expr=\"\" text=\"변경구분\"/><Cell col=\"2\" expr=\"\" text=\"내용\"/><Cell col=\"3\" expr=\"\" text=\"처리상태\"/><Cell col=\"4\" expr=\"\" text=\"요청자\"/><Cell col=\"5\" expr=\"\" text=\"요청일자\"/><Cell col=\"6\" expr=\"\" text=\"처리자\"/><Cell col=\"7\" expr=\"\" text=\"처리일자\"/><Cell col=\"8\" expr=\"\" text=\"문서번호\"/><Cell col=\"9\" expr=\"\" text=\"처리결과\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\"/><Cell col=\"1\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" combodataset=\"ds_cdSY31\" displaytype=\"combo\" edittype=\"none\" text=\"bind:CD_CHG_REQ\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" style=\"align:left;\" text=\"expr:REQ_CNTNT.split(&quot;\\n&quot;)[0]\" tooltiptext=\"bind:내용\"/><Cell col=\"3\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" combodataset=\"ds_cdSY32\" displaytype=\"combo\" edittype=\"none\" text=\"bind:CD_PRCS_STTS\"/><Cell col=\"4\" text=\"bind:REQR_NM\"/><Cell col=\"5\" mask=\"@@@@.@@.@@\" text=\"bind:REQ_DT\"/><Cell col=\"6\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" combodataset=\"ds_prcsruser\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:PRCSR_NM\"/><Cell col=\"7\" mask=\"@@@@.@@.@@\" text=\"bind:PRCS_DT\"/><Cell col=\"8\" text=\"bind:DOC_NO\"/><Cell col=\"9\" text=\"bind:PRCS_CNTNT\"/></Band></Format></Formats>");
            this.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Button("btn_popClose", "absolute", "93.27%", "2", "65", "25", null, null, this.Tab00.tabpage2);
            obj.set_taborder("2");
            obj.set_text("닫기");
            this.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Button("btn_Itm_Del", "absolute", null, "2", "65", "25", "68", null, this.Tab00.tabpage2);
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("품목삭제버튼");
            obj.set_taborder("4");
            obj.set_text("요청");
            this.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Radio("Radio00", "absolute", "1.02%", "226", null, "27", "81.33%", null, this.Tab00.tabpage2);
            this.Tab00.tabpage2.addChild(obj.name, obj);
            var Radio00_innerdataset = new Dataset("Radio00_innerdataset", this.Tab00.tabpage2.Radio00);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">R</Col><Col id=\"datacolumn\">요청</Col></Row><Row><Col id=\"codecolumn\">C</Col><Col id=\"datacolumn\">완료</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_taborder("27");
            obj = new Static("sta_WFDA_Label01", "absolute", "0", "32", null, "191", "0", null, this.Tab00.tabpage2);
            obj.set_taborder("31");
            this.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Static("edt_default_r", "absolute", "0", "36", "90", "29", null, null, this.Tab00.tabpage2);
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("총금액");
            obj.set_taborder("32");
            obj.set_text("변경구분");
            this.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Combo("Combo01", "absolute", "9.18%", "39", null, "24", "73.57%", null, this.Tab00.tabpage2);
            this.Tab00.tabpage2.addChild(obj.name, obj);
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_innerdataset("ds_cdSY31");
            obj.set_taborder("33");
            obj.set_index("-1");
            obj = new Static("ed_RfqAmt05", "absolute", "46", "80", "44", "73", null, null, this.Tab00.tabpage2);
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("총금액");
            obj.set_taborder("34");
            obj.set_text("요청\r\n\r\n내용");
            this.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new TextArea("TextArea00", "absolute", "90", "69", "876", null, null, "558", this.Tab00.tabpage2);
            obj.set_enable("true");
            obj.set_taborder("35");
            this.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Button("btn_Itm_Add", "absolute", "27.45%", "39", "65", "24", null, null, this.Tab00.tabpage2);
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("품목추가 버튼");
            obj.set_taborder("36");
            obj.set_text("요청추가");
            this.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Static("ed_RfqAmt00", "absolute", "46", "168", "44", "40", null, null, this.Tab00.tabpage2);
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("총금액");
            obj.set_taborder("37");
            obj.set_text("결과");
            this.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new TextArea("TextArea01", "absolute", "90", "157", "876", null, null, "502", this.Tab00.tabpage2);
            obj.set_readonly("true");
            obj.set_taborder("38");
            this.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Button("btn_Itm_Del00", "absolute", "71.33%", "2", "145", "25", null, null, this.Tab00.tabpage2);
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("품목삭제버튼");
            obj.set_taborder("39");
            obj.set_text("선택항목 확인완료");
            this.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.Tab00);
            obj.set_scrollbars("none");
            obj.set_text(" 화면정보 ");
            this.Tab00.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label01", "absolute", "0", "39", null, "75", "0", null, this.Tab00.tabpage1);
            obj.set_taborder("0");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Edit("edt_userId", "absolute", "83", "50", "116", "24", null, null, this.Tab00.tabpage1);
            obj.set_taborder("1");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Edit("edt_userNm", "absolute", "301", "50", "116", "24", null, null, this.Tab00.tabpage1);
            obj.set_taborder("2");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("ed_RfqAmt", "absolute", "0", "50", "80", "24", null, null, this.Tab00.tabpage1);
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("총금액");
            obj.set_taborder("3");
            obj.set_text("사용자ID");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("st_CrDt02", "absolute", "218", "50", "80", "24", null, null, this.Tab00.tabpage1);
            obj.getSetter("objNm").set("예산번호");
            obj.set_taborder("4");
            obj.set_text("사용자명");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("st_CrDt00", "absolute", "218", "79", "80", "24", null, null, this.Tab00.tabpage1);
            obj.getSetter("objNm").set("예산번호");
            obj.set_taborder("6");
            obj.set_text("TCODE");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("ed_RfqAmt00", "absolute", "0", "79", "80", "24", null, null, this.Tab00.tabpage1);
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("총금액");
            obj.set_taborder("7");
            obj.set_text("화면ID");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Edit("edt_pgmId", "absolute", "83", "79", "116", "24", null, null, this.Tab00.tabpage1);
            obj.set_taborder("8");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Edit("edt_tcode", "absolute", "301", "79", "116", "24", null, null, this.Tab00.tabpage1);
            obj.set_taborder("9");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("st_CrDt01", "absolute", "429", "79", "88", "24", null, null, this.Tab00.tabpage1);
            obj.getSetter("objNm").set("예산번호");
            obj.set_taborder("10");
            obj.set_text("경로");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Edit("edt_url", "absolute", "520", "79", "257", "24", null, null, this.Tab00.tabpage1);
            obj.set_taborder("11");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("st_CrDt03", "absolute", "429", "50", "88", "24", null, null, this.Tab00.tabpage1);
            obj.getSetter("objNm").set("예산번호");
            obj.set_taborder("12");
            obj.set_text("최종 로그인");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new MaskEdit("mae_lastLogin", "absolute", "520", "50", "257", "24", null, null, this.Tab00.tabpage1);
            obj.set_taborder("13");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Button("btn_popClose", "absolute", null, "9", "65", "24", "0", null, this.Tab00.tabpage1);
            obj.set_taborder("15");
            obj.set_text("닫기");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Button("btn_delMsg", "absolute", "816", "9", "89", "24", null, null, this.Tab00.tabpage1);
            obj.set_taborder("16");
            obj.set_text("메시지 삭제");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Grid("grd_msg", "absolute", "0", "136", null, null, "0", "0", this.Tab00.tabpage1);
            obj.set_autofittype("col");
            obj.set_taborder("17");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"343\"/><Column size=\"185\"/></Columns><Rows><Row band=\"head\" size=\"31\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"상태\"/><Cell col=\"1\" expr=\"\" text=\"메세지\"/><Cell col=\"2\" expr=\"\" text=\"일시\"/></Band><Band id=\"body\"><Cell displaytype=\"image\" text=\"expr:&quot;img::img_WF_&quot;+MSG_TYPE+&quot;.png&quot;\"/><Cell col=\"1\" edittype=\"none\" style=\"align:left;\" text=\"bind:MSG_CONTENTS\"/><Cell col=\"2\" displaytype=\"normal\" mask=\"####-##-## ##:##:##\" text=\"bind:MSG_DT\"/></Band></Format></Formats>");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "87.53%", "0", null, "10", "1.44%", null, this.Tab00.tabpage1);
            obj.style.set_background("#ff7272ff");
            obj.set_taborder("18");
            obj.set_text("h19");
            obj.set_visible("false");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "88.35%", "34", null, "5", "0.62%", null, this.Tab00.tabpage1);
            obj.style.set_background("#ff7272ff");
            obj.set_taborder("19");
            obj.set_text("h19");
            obj.set_visible("false");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "73.51%", "40", null, "10", "15.67%", null, this.Tab00.tabpage1);
            obj.style.set_background("#ff7272ff");
            obj.set_taborder("20");
            obj.set_text("h19");
            obj.set_visible("false");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "71.03%", "74", null, "5", "18.14%", null, this.Tab00.tabpage1);
            obj.style.set_background("#ff7272ff");
            obj.set_taborder("21");
            obj.set_text("h19");
            obj.set_visible("false");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "74.33%", "103", null, "10", "14.85%", null, this.Tab00.tabpage1);
            obj.style.set_background("#ff7272ff");
            obj.set_taborder("22");
            obj.set_text("h19");
            obj.set_visible("false");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "80.1%", "114", null, "23", "9.07%", null, this.Tab00.tabpage1);
            obj.style.set_background("#ff7272ff");
            obj.set_taborder("23");
            obj.set_text("h19");
            obj.set_visible("false");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Tabpage("tabpage3", this.Tab00);
            obj.set_text("화면정의서");
            this.Tab00.addChild(obj.name, obj);
            obj = new WebBrowser("wb_daumEditor", "absolute", "10", "49", null, null, "10", "10", this.Tab00.tabpage3);
            obj.getSetter("objNm").set("에디터");
            obj.set_taborder("0");
            this.Tab00.tabpage3.addChild(obj.name, obj);
            obj = new Button("btn_popClose00", "absolute", "92.45%", "10", "65", "25", null, null, this.Tab00.tabpage3);
            obj.set_taborder("1");
            obj.set_text("저장");
            this.Tab00.tabpage3.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab00.tabpage2,
            	//-- Layout function
            	function(p) {
            		p.set_text(" 화면 변경요청 ");

            	}
            );
            this.Tab00.tabpage2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab00.tabpage1,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_text(" 화면정보 ");

            	}
            );
            this.Tab00.tabpage1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab00.tabpage3,
            	//-- Layout function
            	function(p) {
            		p.set_text("화면정의서");

            	}
            );
            this.Tab00.tabpage3.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1000, 800, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("FrmPopCheckScreen");
            		p.set_titletext("화면정보, 메시지 내역 팝업");
            		p.set_visible("true");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item8","Tab00.tabpage1.edt_pgmId","value","ds_condition","PGM_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Tab00.tabpage1.edt_userId","value","ds_condition","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Tab00.tabpage1.edt_userNm","value","ds_condition","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Tab00.tabpage1.edt_tcode","value","ds_condition","TCODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","Tab00.tabpage1.edt_url","value","ds_condition","URL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","Tab00.tabpage1.mae_lastLogin","value","ds_condition","LAST_LOGIN_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","Tab00.tabpage2.Radio00","value","ds_condition","RD_MODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","Tab00.tabpage2.Combo01","value","ds_chgPgm","CD_CHG_REQ");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Tab00.tabpage2.TextArea00","value","ds_chgPgm","REQ_CNTNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Tab00.tabpage2.TextArea01","value","ds_chgPgm","PRCS_CNTNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("ed_RfqAmt00LangBind2017110317184218925","Tab00.tabpage2.ed_RfqAmt00","text","gdsLabel","EPRO_LABEL_00342");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("ed_RfqAmt00LangBind2017110317184232432","Tab00.tabpage1.ed_RfqAmt00","text","gdsLabel","EPRO_LABEL_00504");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static00LangBind2017110317184241403","Tab00.tabpage1.Static00","text","gdsLabel","EPRO_LABEL_00093");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static04LangBind2017110317184250659","Tab00.tabpage1.Static04","text","gdsLabel","EPRO_LABEL_00093");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btn_Itm_Del00LangBind2017110317184299682","Tab00.tabpage2.btn_Itm_Del00","text","gdsLabel","EPRO_LABEL_00165");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("CompMsgHistoryPop.xfdl", function(exports) {
        /**
           @file       CompMsgHistoryPop.xfdl
           @desc       화면정보, 메시지 내역 팝업
           @author     김현욱
           @makedate   2015.09.08
           @history    
        */

        

        
        var fv_oldUrl = "";
        var fv_frmae  = "";

        /**
         	@function	CompMultiMsgPop_oninit()
         	@desc		폼 oninit 이벤트
         */  
        this.CompMultiMsgPop_oninit = function(obj,e)
        {
        	this.fn_setCode();
        }

        /**
         	@function	fn_setCode()
         	@desc		코드생성
         */  
        this.fn_setCode = function(){
        	var param = [
        					 {code:"SY31", sSelectType:"S"} // 변경요청코드
        					,{code:"SY32", sSelectType:"S"} // 처리상태코드
        				];

        	//공통코드 데이터셋 생성 : "ds_cd" + code + sfx
        	gfnGetCode(this, param);
        }

        
        /**
         	@function	CompMultiMsgPop_onload()
         	@desc		폼 onload 이벤트
         */  
        this.CompMultiMsgPop_onload = function(obj,e)
        {
        	//시스템 공통함수 호출 : 팝업
        	this.gfn_popOnLoad(this);
        	
        	if(!this.gfn_isRole("B_WEBMASTER")){
        		this.Tab00.removeTabpage(2);
        		this.Tab00.removeTabpage(0);
        		
        	} else{
        		this.ds_help.addRow();
        		this.Tab00.tabpage3.wb_daumEditor.set_url(application.services["svcurl"].url+"daumeditor/editor.jsp");
        	}

        	fv_frmae = application.gv_workFrame.getActiveFrame();
        	var objDsHistory = fv_frmae.form.ds_msgHistory;
        		
        	this.Tab00.tabpage1.grd_msg.setBindDataset(objDsHistory);
        	
        	this.ds_condition.addRow();
        	this.ds_condition.setColumn(0,"USER_ID",application.gdsUserInfo.getColumn(0, "EMP_NO"))
        	this.ds_condition.setColumn(0,"USER_NM",application.gdsUserInfo.getColumn(0, "USER_NM"))
        	this.ds_condition.setColumn(0,"LAST_LOGIN_DT",application.gdsUserInfo.getColumn(0, "LAST_LOGIN_DT"))
        	
        	this.ds_condition.setColumn(0,"PGM_ID",fv_frmae.form.fv_menuId) //PGM_ID
        	this.ds_condition.setColumn(0,"TCODE",fv_frmae.form.fv_tCode)  //TCODE 	
        	this.ds_condition.setColumn(0,"URL",fv_frmae.form.fv_url)	   //URL
        	this.ds_condition.setColumn(0,"RD_MODE","R")	   //URL
        	
        	this.fn_search();
        }

        
        /**
        	@function	btn_popClose00_onclick
        	@param
        	@desc		저장
        */
        this.fn_search = function(obj,e)
        {
        	
        	var sSvcID = "Sys_ChgPgmSrch";
        	var sController = "Sys_ChgPgmSrch.do";
        	var sInDatasets = "in_condition=ds_condition";
        	var sOutDatasets = "ds_chgPgm=in_chgPgm ds_help=in_help";
        	var sCallbackFunc = "fn_trCallBack";
        	
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        

        /**
         	@function	btn_delMsg_onclick()
         	@desc		 
         */  
        this.btn_delMsg_onclick = function(obj,e)
        {
        	var objDs = this.grd_msg.getBindDataset();
        	objDs.clearData();
        }

        /**
        	@function	btn_popClose_onclick()
        	@param
        	@desc		화면정변경 팝업 닫기
        */
        this.btn_popClose_onclick = function(obj,e)
        {
        	this.close();
        }

        /**
        	@function	Div3_btn_Itm_Add_onclick()
        	@param
        	@desc		요청사항 추가버튼 클릭이벤트
        */
        this.Div3_btn_Itm_Add_onclick = function(obj,e)
        {
        	var rowCnt = this.ds_chgPgm.addRow();
        	this.ds_chgPgm.setColumn(rowCnt,"CD_CHG_REQ","");	//변경구분
        	this.ds_chgPgm.setColumn(rowCnt,"CD_PRCS_STTS","SY32REQ");	//처리상태는 요청중으로 셋팅
        	this.ds_chgPgm.setColumn(rowCnt,"PGM_ID",this.ds_condition.getColumn(0,"PGM_ID"));
        	this.ds_chgPgm.setColumn(rowCnt,"REQR_NM",application.gdsUserInfo.getColumn(0, "USER_NM"));
        	this.ds_chgPgm.setColumn(rowCnt,"REQ_DT",gfnToday());
        	this.ds_chgPgm.setColumn(rowCnt,"PRCSR_NM","배열");
        	
        	this.ds_chgPgm.setColumn(rowCnt,"CD_CHG_REQ","SY31UPC");
        	

        }

        /**
        	@function	Div3_btn_Itm_Del_onclick()
        	@param
        	@desc		요청삭제버튼 클릭이벤트
        */
        this.Div3_btn_Itm_Del_onclick = function(obj,e)
        {
        	
        	for(var i=this.ds_chgPgm.rowcount;i>=0;i--){
        		if(this.ds_chgPgm.getColumn(i,"CHECKED")==1){
        			this.ds_chgPgm.deleteRow(i);
        		}
        	}
        	
        	var sSvcID = "Sys_ChgPgmDel";
        	var sController = "Sys_ChgPgmSave.do";
        	var sInDatasets = "in_chgPgm=ds_chgPgm:A";
        	var sOutDatasets = "ds_chgPgm=in_chgPgm";
        	var sCallbackFunc = "fn_trCallBack";
        	
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        
        /**
        	@function	btn_delMsg00_onclick
        	@param
        	@desc		삭제
        */
        this.btn_delMsg00_onclick = function(obj,e)
        {
        	this.Div00.set_visible(true);
        	this.grd_msg.set_visible(false);
        }

        /**
        	@function	btn_popClose00_onclick
        	@param
        	@desc		저장
        */
        this.btn_popClose00_onclick = function(obj,e)
        {
        	this.Tab00.tabpage3.wb_daumEditor.callMethod("saveContent");
        }

        this.fn_commSave_data = function()
        {	
        	var sSvcID = "Sys_ChgPgmSaveHelp";
        	var sController = "Sys_ChgPgmSaveHelp.do";
        	var sInDatasets = "in_ds=ds_help:A";
        	var sOutDatasets = "ds_help=in_ds";
        	var sCallbackFunc = "fn_trCallBack";

            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
        	@function	fn_trCallBack
        	@param
        	@desc		콜백 함수
        */
        this.fn_trCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	if(strErrCd < 0){
        		return;
        	}
        	
        	switch(strSvcID){
        		case "Sys_ChgPgmSrch" :
        			if(this.ds_help.getRowCount() == 0) 
        			{
        				this.ds_help.addRow();
        				this.ds_help.setColumn(0,"PGM_ID",this.ds_condition.getColumn(0,"PGM_ID"));
        			}
        			
        // 			var rowCnt = this.ds_chgPgm.addRow();
        // 			this.ds_chgPgm.setColumn(rowCnt,"CD_CHG_REQ","");	//변경구분
        // 			this.ds_chgPgm.setColumn(rowCnt,"CD_PRCS_STTS","SY32REQ");	//처리상태는 요청중으로 셋팅
        // 			this.ds_chgPgm.setColumn(rowCnt,"PGM_ID",this.ds_condition.getColumn(0,"PGM_ID"));
        // 			this.ds_chgPgm.setColumn(rowCnt,"REQR_NM",application.gdsUserInfo.getColumn(0, "USER_NM"));
        // 			this.ds_chgPgm.setColumn(rowCnt,"REQ_DT",gfnToday());
        // 			this.ds_chgPgm.setColumn(rowCnt,"PRCSR_NM","배열");
        // 			
        // 			this.ds_chgPgm.setColumn(rowCnt,"CD_CHG_REQ","SY31UPC");
        			
        			
        		break;
        		case "Sys_ChgPgmSave" :	
        			alert(strErrMsg);
        			this.fn_search();
        		break;
        		
        		case "Sys_ChgPgmDel" :	
        			
        			this.fn_search();
        		break;
        		case "Sys_ChgPgmCmplHelp" :	
        			
        			this.fn_search();
        		break;
        		
        		
        		
        		
        		default:
        		break;	
        	}
        }
        /**
        	@function	Tab00_tabpage2_Radio00_onitemchanged
        	@param
        	@desc		함수 재호출
        */
        this.Tab00_tabpage2_Radio00_onitemchanged = function(obj,e)
        {
        	this.fn_search();
        }

        this.div_11_wb_daumEditor_onusernotify = function(obj,e)
        {
        	//런타임
        	if(obj.getProperty("document").getProperty("title").indexOf("▩") == 0){
        		//read
        		if (gfnReplace(obj.getProperty("document").getProperty("title"),"▩","") == "true"){
        			this.Tab00.tabpage3.wb_daumEditor.callMethod("setEditor",this.ds_help.getColumn(0,"CNTNT"));
        		//save
        		} else {
        			this.ds_help.setColumn(0,"CNTNT",gfnReplace(obj.getProperty("document").getProperty("title"),"▩",""));
        			this.fn_commSave_data();
        		}

        	//웹
        	} else if (e.userdata.indexOf("▦") == 0){
        		//read
        		if (gfnReplace(e.userdata,"▦","") == "true"){			
        			this.Tab00.tabpage3.wb_daumEditor.callMethod("setEditor",this.ds_help.getColumn(0,"CNTNT"));
        		//save
        		} else {
        			this.ds_help.setColumn(0,"CNTNT",gfnReplace(e.userdata,"▦",""));
        			this.fn_commSave_data();
        		}
        	}
        }

        this.Tab00_tabpage2_btn_Itm_Del00_onclick = function(obj,e)
        {
        	//선택된 아이템의 유무를 리턴한다.
        	if(!this.gfn_isGrdChk(this.ds_chgPgm)){
        		gfnAlert("선택된 아이템이 존재하지 않습니다."); 
        		return false;
        	}
        	
        	if(!this.gfnConfirm("완료처리 하시겠습니까?")) return false;
        	
        	var sSvcID = "Sys_ChgPgmCmplHelp";
        	var sController = "Sys_ChgPgmCmplHelp.do";
        	var sInDatasets = "in_ds=ds_chgPgm:A";
        	var sOutDatasets = "ds_help=in_ds";
        	var sCallbackFunc = "fn_trCallBack";

            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        	
        	
        }

        this.CompMultiMsgPop_ondeactivate = function(obj,e)
        {
        	fv_oldUrl = this.ds_condition.getColumn(0,"URL");
        }

        this.CompMultiMsgPop_onactivate = function(obj,e)
        {	
        	fv_frmae = application.gv_workFrame.getActiveFrame();
        	
        	if(fv_oldUrl != fv_frmae.form.fv_url && fv_oldUrl != ""){
        		fv_oldUrl ="";
        		this.ds_condition.setColumn(0,"URL",fv_frmae.form.fv_url)	   //URL
        		this.ds_condition.setColumn(0,"PGM_ID",fv_frmae.form.fv_menuId) //PGM_ID
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onactivate", this.CompMultiMsgPop_onactivate, this);
            this.addEventHandler("ondeactivate", this.CompMultiMsgPop_ondeactivate, this);
            this.addEventHandler("oninit", this.CompMultiMsgPop_oninit, this);
            this.addEventHandler("onload", this.CompMultiMsgPop_onload, this);
            this.btn_close.addEventHandler("onclick", this.btn_popClose_onclick, this);
            this.Tab00.tabpage2.grd_reqApp.addEventHandler("oncelldblclick", this.grd_page_oncelldblclick, this);
            this.Tab00.tabpage2.grd_reqApp.addEventHandler("onexpandup", this.grd_page_onexpandup, this);
            this.Tab00.tabpage2.btn_popClose.addEventHandler("onclick", this.btn_popClose_onclick, this);
            this.Tab00.tabpage2.btn_Itm_Del.addEventHandler("onclick", this.Div3_btn_Itm_Del_onclick, this);
            this.Tab00.tabpage2.Radio00.addEventHandler("onitemchanged", this.Tab00_tabpage2_Radio00_onitemchanged, this);
            this.Tab00.tabpage2.btn_Itm_Add.addEventHandler("onclick", this.Div3_btn_Itm_Add_onclick, this);
            this.Tab00.tabpage2.btn_Itm_Del00.addEventHandler("onclick", this.Tab00_tabpage2_btn_Itm_Del00_onclick, this);
            this.Tab00.tabpage1.btn_popClose.addEventHandler("onclick", this.btn_popClose_onclick, this);
            this.Tab00.tabpage1.btn_delMsg.addEventHandler("onclick", this.btn_delMsg_onclick, this);
            this.Tab00.tabpage1.grd_msg.addEventHandler("oncelldblclick", this.grd_page_oncelldblclick, this);
            this.Tab00.tabpage1.grd_msg.addEventHandler("onexpandup", this.grd_page_onexpandup, this);
            this.Tab00.tabpage3.wb_daumEditor.addEventHandler("onusernotify", this.div_11_wb_daumEditor_onusernotify, this);
            this.Tab00.tabpage3.btn_popClose00.addEventHandler("onclick", this.btn_popClose00_onclick, this);

        };

        this.loadIncludeScript("CompMsgHistoryPop.xfdl", true);

       
    };
}
)();
