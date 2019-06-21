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
                this.set_dragscrolltype("none");
                this.set_name("MainPotal");
                this.set_titletext("내부 메인화면");
                this._setFormPosition(0,0,1262,992);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCount", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsNotice", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_NO\" size=\"256\" type=\"STRING\"/><Column id=\"DENY\" size=\"256\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_ID\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DENY\">S</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM14", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSrchOpt", this);
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"DEPT_CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_DELAY_STTS\" size=\"256\" type=\"STRING\"/><Column id=\"LANG_CD\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTeamUser", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM_LO\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM90", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompCond01", "absolute", "0", "0", null, "266", "0", null, this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);
            obj = new Static("sta_ptnrChtDt00", "absolute", "5", "10", null, null, "5", "14", this.divViewCompCond01);
            obj.set_cssclass("sta_WF_Renewal2");
            obj.getSetter("objNm").set("");
            obj.style.set_border("1 solid #4d7990ff");
            obj.style.set_shadow("outer 1,1 2 #e1e1e1ff");
            obj.set_taborder("42");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "152", "144", "1024", "8", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_ProcessLine");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("");
            obj.set_taborder("1");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "42", "85", "117", "125", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_Order");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("");
            obj.set_taborder("2");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Button("btnRfq", "absolute", "53", "160", "95", "31", null, null, this.divViewCompCond01);
            obj.set_cssclass("btn_WF_Creation");
            obj.getSetter("lbcd").set("TTL_PO_CREATE");
            obj.getSetter("objNm").set("발주생성");
            obj.set_taborder("3");
            obj.set_text("입찰진행");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "83", "106", "51", "21", null, null, this.divViewCompCond01);
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("");
            obj.style.set_color("#ffffffff");
            obj.style.set_align("right middle");
            obj.style.set_font("bold 13 malgun gothic");
            obj.set_taborder("4");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "83", "132", "51", "21", null, null, this.divViewCompCond01);
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("");
            obj.style.set_color("red");
            obj.style.set_align("right middle");
            obj.style.set_font("bold 13 malgun gothic");
            obj.set_taborder("5");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "817", "107", "149", "80", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_ProcessLine2");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("");
            obj.set_taborder("6");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "310", "139", "16", "16", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_ProcessBullet");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("");
            obj.set_taborder("7");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Button("btn2_RREQ", "absolute", "833", "59", "122", "41", null, null, this.divViewCompCond01);
            obj.set_cssclass("btn_WF_Process3");
            obj.set_enable("false");
            obj.getSetter("lbcd").set("TTL_PO_RECIPT");
            obj.getSetter("objNm").set("발주접수");
            obj.set_taborder("8");
            obj.set_text(" 재입찰");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Button("btn2_WRI", "absolute", "208", "103", "129", "41", null, null, this.divViewCompCond01);
            obj.set_cssclass("btn_WF_Process4");
            obj.getSetter("lbcd").set("TTL_REQ");
            obj.getSetter("objNm").set("요청");
            obj.set_taborder("9");
            obj.set_text(" 입찰작성중");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "15", "14", "16.96%", "36", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_maintit1");
            obj.set_taborder("12");
            obj.set_text("구매진행현황");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Button("btn2_CXL", "absolute", "833", "192", "119", "41", null, null, this.divViewCompCond01);
            obj.set_cssclass("btn_WF_Process6");
            obj.set_enable("false");
            obj.getSetter("lbcd").set("TTL_GR");
            obj.getSetter("objNm").set("입고");
            obj.style.setStyleValue("padding", "disabled", "0 0 0 14");
            obj.set_taborder("13");
            obj.set_text(" 취소");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "883", "101", "16", "16", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_ProcessBullet");
            obj.set_enable("false");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("");
            obj.set_taborder("15");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "883", "175", "16", "16", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_ProcessBullet");
            obj.set_enable("false");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("");
            obj.set_taborder("16");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "402", "139", "16", "16", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_ProcessBullet");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("");
            obj.set_taborder("20");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "576", "139", "16", "16", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_ProcessBullet");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("");
            obj.set_taborder("21");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "711", "139", "16", "16", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_ProcessBullet");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("");
            obj.set_taborder("22");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Button("btn2_ANI", "absolute", "648", "155", "142", "41", null, null, this.divViewCompCond01);
            obj.set_cssclass("btn_WF_Process2");
            obj.getSetter("lbcd").set("TTL_GR");
            obj.getSetter("objNm").set("입고");
            obj.style.set_background("URL('theme://beforeDesign/btn_WF_Process2.png') stretch");
            obj.set_taborder("25");
            obj.set_text("입찰심사중");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Button("btn2_AREQ", "absolute", "321", "155", "177", "41", null, null, this.divViewCompCond01);
            obj.set_cssclass("btn_WF_Process2");
            obj.getSetter("lbcd").set("TTL_GR");
            obj.getSetter("objNm").set("입고");
            obj.style.set_background("URL('theme://beforeDesign/btn_WF_Process2.png') stretch");
            obj.set_taborder("26");
            obj.set_text(" 입찰공고승인중");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Button("btn2_REQ", "absolute", "515", "103", "141", "41", null, null, this.divViewCompCond01);
            obj.set_cssclass("btn_WF_Process3");
            obj.getSetter("lbcd").set("TTL_PO_RECIPT");
            obj.getSetter("objNm").set("견적진행");
            obj.style.set_background("URL('theme://beforeDesign/btn_WF_Process3.png') stretch");
            obj.set_taborder("27");
            obj.set_text("입찰진행중");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "1091", "107", "51", "21", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_OrderCount");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("");
            obj.set_taborder("30");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Button("btn_WRI", "absolute", "290", "109", "35", "20", null, null, this.divViewCompCond01);
            obj.set_cssclass("btn_WF_ProcessCount");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("");
            obj.style.set_font("bold 10 malgun gothic");
            obj.set_taborder("31");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Button("btn_AREQ", "absolute", "448", "166", "35", "20", null, null, this.divViewCompCond01);
            obj.set_cssclass("btn_WF_ProcessCount");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("");
            obj.style.set_font("bold 10 malgun gothic");
            obj.set_taborder("32");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Button("btn_REQ", "absolute", "607", "108", "35", "20", null, null, this.divViewCompCond01);
            obj.set_cssclass("btn_WF_ProcessCount");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("");
            obj.style.set_font("bold 10 malgun gothic");
            obj.set_taborder("33");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Button("btn_ANI", "absolute", "741", "166", "35", "20", null, null, this.divViewCompCond01);
            obj.set_cssclass("btn_WF_ProcessCount");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("");
            obj.style.set_font("bold 10 malgun gothic");
            obj.set_taborder("34");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Button("btn_RREQ", "absolute", "908", "64", "35", "20", null, null, this.divViewCompCond01);
            obj.set_cssclass("btn_WF_ProcessCount");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("");
            obj.style.set_font("bold 10 malgun gothic");
            obj.set_taborder("35");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Button("btn_CXL", "absolute", "906", "204", "35", "20", null, null, this.divViewCompCond01);
            obj.set_cssclass("btn_WF_ProcessCount");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("");
            obj.style.set_font("bold 10 malgun gothic");
            obj.set_taborder("36");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "1033", "107", "147", "80", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_ProcessLine2");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("");
            obj.set_taborder("38");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Button("btn2_CLOX", "absolute", "1037", "192", "134", "41", null, null, this.divViewCompCond01);
            obj.set_cssclass("btn_WF_Process2");
            obj.set_enable("true");
            obj.getSetter("lbcd").set("TTL_GR");
            obj.getSetter("objNm").set("입고");
            obj.style.setStyleValue("padding", "disabled", "0 0 0 14");
            obj.set_taborder("39");
            obj.set_text(" 완료");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "1099", "175", "16", "16", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_ProcessBullet");
            obj.set_enable("false");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("");
            obj.set_taborder("40");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Button("btn_CLOX", "absolute", "1127", "204", "34", "20", null, null, this.divViewCompCond01);
            obj.set_cssclass("btn_WF_ProcessCount");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("");
            obj.style.set_font("bold 10 malgun gothic");
            obj.set_taborder("41");
            this.divViewCompCond01.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "1096", "101", "16", "16", null, null, this);
            obj.set_cssclass("sta_WF_ProcessBullet");
            obj.set_enable("false");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("");
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Button("btn2_CLO", "absolute", "1037", "59", "134", "41", null, null, this);
            obj.set_cssclass("btn_WF_Process3");
            obj.getSetter("lbcd").set("TTL_PO_RECIPT");
            obj.getSetter("objNm").set("견적진행");
            obj.set_taborder("17");
            obj.set_text(" 낙찰");
            this.addChild(obj.name, obj);

            obj = new Button("btn_CLO", "absolute", "1127", "64", "34", "20", null, null, this);
            obj.set_cssclass("btn_WF_ProcessCount");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("");
            obj.style.set_font("bold 10 malgun gothic");
            obj.set_taborder("18");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "260", null, null, "0", "10", this);
            obj.style.set_border("0 none #808080ff");
            obj.set_taborder("19");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);
            obj = new Static("sta_ptnrChtDt00", "absolute", "5", "10", null, null, "5", "14", this.Div01);
            obj.set_cssclass("sta_WF_Renewal2");
            obj.getSetter("objNm").set("");
            obj.style.set_border("1 solid #4d7990ff");
            obj.style.set_shadow("outer 1,1 2 #e1e1e1ff");
            obj.set_taborder("13");
            this.Div01.addChild(obj.name, obj);
            obj = new Grid("Grid02", "absolute", "15", "66", null, null, "15", "25", this.Div01);
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("신규등록요청 그리드");
            obj.set_scrollbars("autovert");
            obj.set_taborder("7");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"125\"/><Column size=\"130\"/><Column size=\"380\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"40\"/></Columns><Rows><Row band=\"head\" size=\"36\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"소싱그룹\" tooltiptext=\"\"/><Cell col=\"1\" expr=\"\" text=\"담당자\" tooltiptext=\"\"/><Cell col=\"2\" expr=\"\" text=\"입찰번호\" tooltiptext=\"\"/><Cell col=\"3\" expr=\"\" text=\"입찰명\" tooltiptext=\"\"/><Cell col=\"4\" expr=\"\" text=\"상태\" tooltiptext=\"\"/><Cell col=\"5\" expr=\"\" text=\"공고일자\" tooltiptext=\"\"/><Cell col=\"6\" expr=\"\" text=\"완료일자\" tooltiptext=\"\"/><Cell col=\"7\" expr=\"\" text=\"기준\" tooltiptext=\"\"/><Cell col=\"8\" expr=\"\" text=\"일수\" tooltiptext=\"\"/></Band><Band id=\"body\"><Cell style=\"align:left;background: ;\" text=\"bind:SRC_GRP_NM2\" tooltiptext=\"bind:SRC_GRP_NM2\"/><Cell col=\"1\" style=\"align:center;background: ;\" text=\"bind:CHRGR_NM\" tooltiptext=\"bind:CHRGR_NM\"/><Cell col=\"2\" cssclass=\"cell_link\" style=\"color: ;\" text=\"bind:RFQ_REQ_NO_ODR\" tooltiptext=\"bind:RFQ_REQ_NO_ODR\"/><Cell col=\"3\" expandsize=\"20\" style=\"align:left;padding:0 0 0 20;font:9 aria;backgroundimage:EXPR(CD_DELAY_STTS ==&quot;CM14DLY&quot;?'img::btn_warning_1.png':'');\" text=\"bind:TTL\" tooltiptext=\"bind:TTL\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:CD_RFQ_STTS_NM\" tooltiptext=\"bind:CD_RFQ_STTS_NM\"/><Cell col=\"5\" displaytype=\"normal\" mask=\"####-##-##\" maskchar=\" \" style=\"align:center;background2: ;\" text=\"bind:REQ_DT\" tooltiptext=\"bind:REQ_DT\"/><Cell col=\"6\" displaytype=\"normal\" mask=\"####-##-##\" maskchar=\" \" style=\"align:center;background2: ;\" text=\"bind:RFQ_END_DT\" tooltiptext=\"bind:RFQ_END_DT\"/><Cell col=\"7\" displaytype=\"number\" maskchar=\" \" style=\"align:center;color: ;\" text=\"bind:APPND_SET_NUM_1\" tooltiptext=\"bind:APPND_SET_NUM_1\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;background2: ;color:EXPR(CD_DELAY_STTS ==&quot;CM14DLY&quot;?'red':'black');color2:EXPR(CD_DELAY_STTS ==&quot;CM14DLY&quot;?'red':'black');\" text=\"bind:STD_NUM_DAY\" tooltiptext=\"bind:STD_NUM_DAY\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "29", "11.74%", "36", null, null, this.Div01);
            obj.set_cssclass("sta_WF_maintit1");
            obj.set_taborder("8");
            obj.set_text("입찰진행현황");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("sta_grdStatus", "absolute", "160", "37", "57", "20", null, null, this.Div01);
            obj.set_cssclass("sta_WF_GrdTotal");
            obj.style.set_align("right middle");
            obj.style.set_font("bold 10 Gulim");
            obj.set_taborder("9");
            obj.set_text("0");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("sta_grdStatus00", "absolute", "225", "37", "50", "20", null, null, this.Div01);
            obj.style.set_font("bold 10 Gulim");
            obj.set_taborder("10");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);
            obj = new Combo("cboCdDlyStts", "absolute", null, "35", "127", "23", "23", null, this.Div01);
            this.Div01.addChild(obj.name, obj);
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_innerdataset("@dsCdCM14");
            obj.getSetter("objNm").set("대분류");
            obj.set_readonly("false");
            obj.set_taborder("12");
            obj.set_visible("true");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 266, this.divViewCompCond01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("15");

            	}
            );
            this.divViewCompCond01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.style.set_border("0 none #808080ff");
            		p.set_taborder("19");
            		p.set_text("Div01");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1262, 992, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("MainPotal_01");
            		p.set_dragscrolltype("none");
            		p.set_titletext("내부 메인화면");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item22","Div01.sta_grdStatus","text","dsCount","CNT_LIST_ALL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","divViewCompCond01.Static01","text","dsCount","CNT_ALL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","divViewCompCond01.Static02","text","dsCount","CNT_DLY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","divViewCompCond01.btn_WRI","text","dsCount","CNT_WRI");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","divViewCompCond01.btn_AREQ","text","dsCount","CNT_AREQ");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","divViewCompCond01.btn_REQ","text","dsCount","CNT_REQ");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","divViewCompCond01.btn_ANI","text","dsCount","CNT_ANI");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","divViewCompCond01.btn_RREQ","text","dsCount","CNT_RREQ");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","divViewCompCond01.btn_CXL","text","dsCount","CNT_CXL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","divViewCompCond01.btn_CLOX","text","dsCount","CNT_CLOX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","btn_CLO","text","dsCount","CNT_CLO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","Div01.cboCdDlyStts","value","dsSrchOpt","CD_DELAY_STTS");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("MainPotal_BBID.xfdl", function(exports) {
        /**
           @file       MainPotal_01.xfdl
           @desc       Buyer 메인화면
           @author     한민희
           @makedate   2016.07.18
           @history    
        */
         
        this.fnSetCode = function()
        {

        	var param = [
        					{code:"CM14", sSelectType:"A"}
        					,{code:"CM90", sSelectType:"A"}
        				];
        	gfnGetCode(this, param);
        }

        this.MainPotal_oninit = function(obj,e)
        {
        	this.fnSetCode();
        }

        this.MainPotal_onload = function(obj,e)
        {
        	this.dsSrchOpt.addRow();
        	this.dsSrchOpt.setColumn(0,"CD_DELAY_STTS","");
        	this.dsSrchOpt.setColumn(0,"BRANCH_CD",application.gdsUserInfo.getColumn(0,"BRANCH_CD"));
        	
        	if(!gfnIsNull(application.gv_portalPage)){
        		if(application.gv_portalPage == "APRV"){
        			gfnSetTmprData("APP_DOC_ID"		,application.gv_No);
        			gfnSetTmprData("GUBUN","REQ");
        			if(application.gv_Type=="AP11ARFQ"){
        				gfnOpenMenuUrl("BAPRV::BAprvDetailRfqReq");
        			}else if(application.gv_Type=="AP11RFQ"){
        				gfnOpenMenuUrl("BAPRV::BAprvDetailRfqAls");
        			}else if(application.gv_Type=="AP11EVL"){
        				gfnOpenMenuUrl("BAPRV::BAprvDetailScjdEval");
        			}else{
        				gfnOpenMenuUrl("BAPRV::BAprvReqList");
        			}			
        		}else if(application.gv_portalPage == "PTNR"){
        			gfnOpenMenuUrl("BAPRV::BAprvReqList");
        		}
        		application.gv_portalPage="";
        	}else{
        		if(application.gdsUserRole.getCaseCount("ROLE_ID =='B_PUR_TL'")>0){
        			this.divViewCompCond01.cboLvl1.set_visible(true);
        			this.divViewCompCond01.cboLvl2.set_visible(true);
        			this.divViewCompCond01.cboLvl1.set_readonly(false);
        			this.dsSrchOpt.setColumn(0,"DEPT_CD","");
        		}else if(application.gdsUserRole.getCaseCount("ROLE_ID =='B_PUR_M'")>0){
        			this.divViewCompCond01.cboLvl1.set_visible(true);
        			this.divViewCompCond01.cboLvl2.set_visible(true);
        			this.dsSrchOpt.setColumn(0,"DEPT_CD",application.gdsUserInfo.getColumn(0,"DEPT_CD"));
        		}else{
        			this.dsSrchOpt.setColumn(0,"USER_ID",application.gdsUserInfo.getColumn(0,"USER_ID"));
        		}

        		this.fnMainSearch();
        		this.fnNotice();
        	}
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
         	var sSvcID = "searchBMain";
         	var sController = "epro.com.service.BMainService.searchBMain";
         	var sInDatasets = "dsSrchOpt=dsSrchOpt";
         	var sOutDatasets = "dsCount=dsCount dsList=dsList dsTeamUser=dsTeamUser";
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
        	
        		case "searchBMain" :
        			this.Div01.sta_grdStatus.set_text(this.dsList.getRowCount());
        			
        			if(!gfnIsNull(this.dsSrchOpt.getColumn(0,"DEPT_CD"))&&this.dsSrchOpt.getColumn(0,"DEPT_CD").indexOf("CM90")<0){
        				this.dsSrchOpt.setColumn(0,"DEPT_CD", "CM90"+this.dsSrchOpt.getColumn(0,"DEPT_CD"));
        			}
        			if(this.dsTeamUser.getRowCount()>0){
        				var nRow = this.dsTeamUser.insertRow();
        				this.dsTeamUser.setColumn(nRow,"CD_ID","");
        				this.dsTeamUser.setColumn(nRow,"CD_NM_LO",gfnMultiLabel("EPRO_LABEL_00786"));
        			}
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
        /**
          * @함수명	: divViewCompCond01_btnRfq_onclick
          * @input    	: 
          * @desc     	: 입찰작성화면으로 이동한다.
          */
        this.divViewCompCond01_btnRfq_onclick = function(obj,e)
        {
        	gfnOpenMenuUrl("BRFQ::BRfqPrgDetail.xfdl");
        }

        /**
          * @함수명	: fnRfqDeatil
          * @desc     	: 상태별 화면이동 
          */
        this.fnRfqDeatil = function(obj,e)
        {
        	var rfqStts = obj.name.substr(4) ;
        	
        	gfnSetTmprData("RFQ_STTS","ET10"+rfqStts);

        	if(rfqStts =="RREQ"||rfqStts =="CLO"||rfqStts =="CXL"||rfqStts =="CLOX"){
        		gfnOpenMenuUrl("BRFQ::BRfqRstList.xfdl");
        	}else{
        		gfnOpenMenuUrl("BRFQ::BRfqPrgList.xfdl");
        	}
        }

        /**
          * @함수명	: fnRfqDeatil2
          * @desc     	: 상태별 화면이동 
          */
        this.fnRfqDeatil2 = function(obj,e)
        {
        	var rfqStts = obj.name.substr(5) ;
        	
        	gfnSetTmprData("RFQ_STTS","ET10"+rfqStts);

        	if(rfqStts =="RREQ"||rfqStts =="CLO"||rfqStts =="CXL"||rfqStts =="CLOX"){
        		gfnOpenMenuUrl("BRFQ::BRfqRstList.xfdl");
        	}else{
        		gfnOpenMenuUrl("BRFQ::BRfqPrgList.xfdl");
        	}
        }

        /**
          * @함수명	: Div01_Radio00_onitemchanged
          * @desc     	: 지연상태 클릭 이벤트
          */
        this.Div01_cboCdDlyStts_onitemchanged = function(obj,e)
        {
        	obj.updateToDataset;
        	this.fnMainSearch();
        }

        this.div_toDoList_Grid02_oncelldblclick = function(obj,e)
        {
        	if( gfnGrdBindColId(obj, obj.getCellPos()) == "RFQ_REQ_NO_ODR"){
        		var rfqStts = this.dsList.getColumn(e.row,"CD_RFQ_STTS");
        		gfnSetTmprData("RFQ_REQ_NO"	,this.dsList.getColumn(e.row, "RFQ_REQ_NO"));
        		gfnSetTmprData("RFQ_ODR"	,this.dsList.getColumn(e.row, "RFQ_ODR"));
        		gfnSetTmprData("BRANCH_CD"	,this.dsList.getColumn(e.row, "BRANCH_CD"));
        		
        		if(rfqStts =="ET10CLO"||rfqStts =="ET10CLOX"||rfqStts =="ET10CXL"||rfqStts =="ET10RREQ"
        			||application.gdsUserInfo.getColumn(0,"USER_ID")==this.dsList.getColumn(e.row,"CRTR_ID")){
        			if(rfqStts =="ET10WRI"||rfqStts =="ET10AREQ"){
        				gfnOpenMenuUrl("BRFQ::BRfqPrgDetail.xfdl");
        			}else if(rfqStts =="ET10REQ"){
        				gfnOpenMenuUrl("BRFQ::BRfqReqDetail.xfdl");
        			}else{
        				if(this.dsList.getColumn(e.row,"CD_RFQ_AIM")=="ET27TCO"||this.dsList.getColumn(e.row,"CD_RFQ_AIM")=="ET27DSG"){
        					gfnOpenMenuUrl("BRFQ::BRfqAlsTcoExpDetail.xfdl");
        				}else{
        					gfnOpenMenuUrl("BRFQ::BRfqAlsDetail.xfdl");
        				}
        			}
        		}else{
        			gfnAlert("EPRO_LABEL_01374");
        		}
        	}
        }

        this.cboLvl2_onitemchanged = function(obj,e)
        {
        	obj.updateToDataset;
        // 	if(this.dsSrchOpt.getColumn(0,"DEPT_CD").indexOf("CM90")>=0){
        // 		this.dsSrchOpt.setColumn(0,"DEPT_CD",this.dsSrchOpt.getColumn(0,"DEPT_CD").substr(4))
        // 	}
        	this.fnMainSearch();
        }

        
        this.fnPopCallBack = function(sPopupId,rtn)
        {

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.MainPotal_oninit, this);
            this.addEventHandler("onload", this.MainPotal_onload, this);
            this.divViewCompCond01.btnRfq.addEventHandler("onclick", this.divViewCompCond01_btnRfq_onclick, this);
            this.divViewCompCond01.btn2_RREQ.addEventHandler("onclick", this.fnRfqDeatil2, this);
            this.divViewCompCond01.btn2_WRI.addEventHandler("onclick", this.fnRfqDeatil2, this);
            this.divViewCompCond01.btn2_CXL.addEventHandler("onclick", this.fnRfqDeatil2, this);
            this.divViewCompCond01.btn2_ANI.addEventHandler("onclick", this.fnRfqDeatil2, this);
            this.divViewCompCond01.btn2_AREQ.addEventHandler("onclick", this.fnRfqDeatil2, this);
            this.divViewCompCond01.btn2_REQ.addEventHandler("onclick", this.fnRfqDeatil2, this);
            this.divViewCompCond01.btn_WRI.addEventHandler("onclick", this.fnRfqDeatil, this);
            this.divViewCompCond01.btn_AREQ.addEventHandler("onclick", this.fnRfqDeatil, this);
            this.divViewCompCond01.btn_REQ.addEventHandler("onclick", this.fnRfqDeatil, this);
            this.divViewCompCond01.btn_ANI.addEventHandler("onclick", this.fnRfqDeatil, this);
            this.divViewCompCond01.btn_RREQ.addEventHandler("onclick", this.fnRfqDeatil, this);
            this.divViewCompCond01.btn_CXL.addEventHandler("onclick", this.fnRfqDeatil, this);
            this.divViewCompCond01.btn2_CLOX.addEventHandler("onclick", this.fnRfqDeatil2, this);
            this.divViewCompCond01.btn_CLOX.addEventHandler("onclick", this.fnRfqDeatil, this);
            this.btn2_CLO.addEventHandler("onclick", this.fnRfqDeatil2, this);
            this.btn_CLO.addEventHandler("onclick", this.fnRfqDeatil, this);
            this.Div01.Grid02.addEventHandler("oncelldblclick", this.div_toDoList_Grid02_oncelldblclick, this);
            this.Div01.cboCdDlyStts.addEventHandler("onitemchanged", this.Div01_cboCdDlyStts_onitemchanged, this);

        };

        this.loadIncludeScript("MainPotal_BBID.xfdl", true);

       
    };
}
)();
