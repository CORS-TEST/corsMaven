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
                this.set_titletext("사전요청상세");
                this._setFormPosition(0,0,1220,1840);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPrePr", this);
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PR_STTS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PR_STTS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PRE_PR_DIST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PRE_PR_DIST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SRC_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TTL\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"HOPE_REPLY_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_CNTNT\" type=\"STRING\" size=\"256\"/><Column id=\"APP_DOC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ATTCH_FILE_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PCHRGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PCHRGR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RTN_CNTNT\" type=\"STRING\" size=\"256\"/><Column id=\"RCV_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RTN_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LINK_URL\" type=\"STRING\" size=\"256\"/><Column id=\"CRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DUMMY\" type=\"STRING\" size=\"256\"/><Column id=\"CRT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_CHGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LRG_SRC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MDL_SRC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIN_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIN_USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdPR14", this);
            obj._setContents("<ColumnInfo><Column id=\"MTRL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdPR15", this);
            obj._setContents("<ColumnInfo><Column id=\"MTRL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReturn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_1", "absolute", "0", "0", null, "34", "15", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_SearchBg");
            obj.getSetter("objNm").set("DIV-사전요청상세");
            this.addChild(obj.name, obj);
            obj = new Edit("edtPrNo", "absolute", "6", "4", "160", "24", null, null, this.div_1);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_cssclass("edt_default_r");
            obj.getSetter("objNm").set("사전요청번호");
            this.div_1.addChild(obj.name, obj);

            obj = new Div("div_2", "absolute", "0", "40", null, "24", "10", null, this);
            obj.set_taborder("5");
            obj.getSetter("objNm").set("DIV-기본정보타이틀");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", null, "255", "24", null, "0", this.div_2);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 2 17");
            this.div_2.addChild(obj.name, obj);

            obj = new Div("div_00", "absolute", "0", "203", null, "24", "10", null, this);
            obj.set_taborder("6");
            obj.getSetter("objNm").set("DIV-요청내역타이틀");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", null, "255", "24", null, "0", this.div_00);
            obj.set_taborder("0");
            obj.set_text("요청내역");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 2 17");
            this.div_00.addChild(obj.name, obj);

            obj = new Div("div_03", "absolute", "0", "619", null, "24", "15", null, this);
            obj.set_taborder("8");
            obj.getSetter("objNm").set("DIV-첨부파일타이틀");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", null, "255", "24", null, "0", this.div_03);
            obj.set_taborder("0");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 2 17");
            this.div_03.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "0", "619", null, "205", "15", null, this);
            obj.set_taborder("9");
            obj.set_text("Div02");
            obj.set_url("CCOMP::CompNFileUpDown.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "0", "64", null, "129", "15", null, this);
            obj.set_taborder("11");
            obj.style.set_background("aqua");
            obj.getSetter("objNm").set("DIV-기본정보");
            obj.set_text("Div03");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "0", null, "33", "0", null, this.Div03);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("staViewCompLine03", "absolute", "0", "96", null, "33", "0", null, this.Div03);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "64", null, "33", "0", null, this.Div03);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "32", null, "33", "0", null, this.Div03);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("staPoDay", "absolute", "581", "0", "160", "33", null, null, this.Div03);
            obj.set_taborder("4");
            obj.set_text("요청구분");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("요청구분");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("staPoCtgr", "absolute", "581", "32", "160", "33", null, null, this.Div03);
            obj.set_taborder("5");
            obj.set_text("구매담당자");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("구매담당자");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("staPoDay00", "absolute", "0", "0", "160", "33", null, null, this.Div03);
            obj.set_taborder("6");
            obj.set_text("요청명");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("요청명");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("staPoCtgr00", "absolute", "0", "32", "160", "33", null, null, this.Div03);
            obj.set_taborder("7");
            obj.set_text("소싱그룹분류");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("소싱그룹분류");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("staPoCtgr01", "absolute", "0", "64", "160", "33", null, null, this.Div03);
            obj.set_taborder("8");
            obj.set_text("희망회신일자");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("희망회신일자");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("staPoDay01", "absolute", "0", "96", "160", "33", null, null, this.Div03);
            obj.set_taborder("9");
            obj.set_text("참고사이트정보");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("참고사이트정보");
            this.Div03.addChild(obj.name, obj);
            obj = new Edit("edtTtl", "absolute", "165", "5", "408", "24", null, null, this.Div03);
            obj.set_taborder("10");
            obj.getSetter("objNm").set("요청명");
            this.Div03.addChild(obj.name, obj);
            obj = new Combo("cboPoCtgr01", "absolute", "747", "4", "151", "24", null, null, this.Div03);
            this.Div03.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_innerdataset("@dsCdPR15");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("요청구분");
            obj.set_type("filterlike");
            obj = new Edit("edtPchrgrNm", "absolute", "747", "36", "151", "24", null, null, this.Div03);
            obj.set_taborder("12");
            obj.set_readonly("true");
            obj.set_cssclass("edt_default_r");
            obj.getSetter("objNm").set("구매담당자");
            this.Div03.addChild(obj.name, obj);
            obj = new Calendar("calHopeReplyDay", "absolute", "165", "69", "150", "24", null, null, this.Div03);
            this.Div03.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_dateformat("yyyy.MM.dd ddd");
            obj.set_editformat("yyyy.MM.dd ddd");
            obj.getSetter("objNm").set("희망회신일자");
            obj = new Edit("edtLinkUrl", "absolute", "165", "101", "733", "24", null, null, this.Div03);
            obj.set_taborder("16");
            obj.getSetter("objNm").set("참고사이트정보");
            this.Div03.addChild(obj.name, obj);
            obj = new Div("divSrcGrp", "absolute", "164", "37", "409", "24", null, null, this.Div03);
            obj.set_taborder("17");
            obj.set_text("Div00");
            obj.set_url("CCOMP::CompSrcType.xfdl");
            this.Div03.addChild(obj.name, obj);
            obj = new ListBox("ListBox00", "absolute", "900", "4", "151", "25", null, null, this.Div03);
            this.Div03.addChild(obj.name, obj);
            var ListBox00_innerdataset = new Dataset("ListBox00_innerdataset", this.Div03.ListBox00);
            ListBox00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2</Col></Row></Rows>");
            obj.set_innerdataset(ListBox00_innerdataset);
            obj.set_taborder("19");
            obj.set_selectscrollmode("select");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new Tab("Tab00", "absolute", "0", "245", null, "363", "10", null, this);
            obj.set_taborder("12");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.Tab00);
            obj.set_text("요청내용");
            this.Tab00.addChild(obj.name, obj);
            obj = new Div("Div01", "absolute", "0%", "13", null, null, "0", "0", this.Tab00.tabpage1);
            obj.set_taborder("0");
            obj.getSetter("objNm").set("DIV-요청내역");
            obj.set_url("CCOMP::ComEditor.xfdl");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.Tab00);
            obj.set_text("답변내용");
            this.Tab00.addChild(obj.name, obj);
            obj = new Div("Div01", "absolute", "0%", "13", null, null, "0", "0", this.Tab00.tabpage2);
            obj.set_taborder("0");
            obj.getSetter("objNm").set("DIV-요청내역");
            obj.set_url("CCOMP::ComEditor.xfdl");
            this.Tab00.tabpage2.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 34, this.div_1,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_cssclass("div_WF_SearchBg");
            		p.getSetter("objNm").set("DIV-사전요청상세");

            	}
            );
            this.div_1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.div_2,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.getSetter("objNm").set("DIV-기본정보타이틀");

            	}
            );
            this.div_2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.div_00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.getSetter("objNm").set("DIV-요청내역타이틀");

            	}
            );
            this.div_00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.div_03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("8");
            		p.getSetter("objNm").set("DIV-첨부파일타이틀");

            	}
            );
            this.div_03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 129, this.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("11");
            		p.style.set_background("aqua");
            		p.getSetter("objNm").set("DIV-기본정보");
            		p.set_text("Div03");

            	}
            );
            this.Div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab00.tabpage1,
            	//-- Layout function
            	function(p) {
            		p.set_text("요청내용");

            	}
            );
            this.Tab00.tabpage1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab00.tabpage2,
            	//-- Layout function
            	function(p) {
            		p.set_text("답변내용");

            	}
            );
            this.Tab00.tabpage2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "Screen0", 1220, 1840, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("FrmTemplate100");
            		p.set_titletext("사전요청상세");

            	}
            );
            obj.set_stepcount("");
            obj.set_stepindex("");
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item6","div_1.edtPrNo","value","dsPrePr","PR_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","Div03.edtTtl","value","dsPrePr","TTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Div03.cboPoCtgr01","value","dsPrePr","CD_PRE_PR_DIST");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Div03.edtPchrgrNm","value","dsPrePr","PCHRGR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Div03.calHopeReplyDay","value","dsPrePr","HOPE_REPLY_DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Div03.edtLinkUrl","value","dsPrePr","LINK_URL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_1Vi","div_1","visible","dsObjBindVi","div_1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_1En","div_1","enable","dsObjBindEn","div_1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPrNoVi","div_1.edtPrNo","visible","dsObjBindVi","edtPrNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPrNoEn","div_1.edtPrNo","readonly","dsObjBindEn","edtPrNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_2Vi","div_2","visible","dsObjBindVi","div_2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_2En","div_2","enable","dsObjBindEn","div_2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_00Vi","div_00","visible","dsObjBindVi","div_00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_00En","div_00","enable","dsObjBindEn","div_00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_03Vi","div_03","visible","dsObjBindVi","div_03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_03En","div_03","enable","dsObjBindEn","div_03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Div03Vi","Div03","visible","dsObjBindVi","Div03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Div03En","Div03","enable","dsObjBindEn","Div03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoDayVi","Div03.staPoDay","visible","dsObjBindVi","staPoDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoDayEn","Div03.staPoDay","enable","dsObjBindEn","staPoDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoCtgrVi","Div03.staPoCtgr","visible","dsObjBindVi","staPoCtgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoCtgrEn","Div03.staPoCtgr","enable","dsObjBindEn","staPoCtgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoDay00Vi","Div03.staPoDay00","visible","dsObjBindVi","staPoDay00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoDay00En","Div03.staPoDay00","enable","dsObjBindEn","staPoDay00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoCtgr00Vi","Div03.staPoCtgr00","visible","dsObjBindVi","staPoCtgr00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoCtgr00En","Div03.staPoCtgr00","enable","dsObjBindEn","staPoCtgr00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoCtgr01Vi","Div03.staPoCtgr01","visible","dsObjBindVi","staPoCtgr01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoCtgr01En","Div03.staPoCtgr01","enable","dsObjBindEn","staPoCtgr01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoDay01Vi","Div03.staPoDay01","visible","dsObjBindVi","staPoDay01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPoDay01En","Div03.staPoDay01","enable","dsObjBindEn","staPoDay01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTtlVi","Div03.edtTtl","visible","dsObjBindVi","edtTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTtlEn","Div03.edtTtl","readonly","dsObjBindEn","edtTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboPoCtgr01Vi","Div03.cboPoCtgr01","visible","dsObjBindVi","cboPoCtgr01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboPoCtgr01En","Div03.cboPoCtgr01","readonly","dsObjBindEn","cboPoCtgr01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPchrgrNmVi","Div03.edtPchrgrNm","visible","dsObjBindVi","edtPchrgrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPchrgrNmEn","Div03.edtPchrgrNm","readonly","dsObjBindEn","edtPchrgrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calHopeReplyDayVi","Div03.calHopeReplyDay","visible","dsObjBindVi","calHopeReplyDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calHopeReplyDayEn","Div03.calHopeReplyDay","readonly","dsObjBindEn","calHopeReplyDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtLinkUrlVi","Div03.edtLinkUrl","visible","dsObjBindVi","edtLinkUrl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtLinkUrlEn","Div03.edtLinkUrl","readonly","dsObjBindEn","edtLinkUrl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divSrcGrpVi","Div03.divSrcGrp","visible","dsObjBindVi","divSrcGrp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("divSrcGrpEn","Div03.divSrcGrp","enable","dsObjBindEn","divSrcGrp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnRemote_0Vi","32_divRemote.btnRemote_0","visible","dsObjBindVi","btnRemote_0");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnRemote_0En","32_divRemote.btnRemote_0","enable","dsObjBindEn","btnRemote_0");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Tab00.tabpage2.Div01","visible","dsObjBindVi","Div01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Tab00.tabpage2.Div01","enable","dsObjBindEn","Div01");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompNFileUpDown.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompSrcType.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComEditor.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComEditor.xfdl");
        };
        
        // User Script
        this.registerScript("BPrePrDetail.xfdl", function(exports) {
        /**
         * @파일명       	: BPtnrDetail.xfdl
         * @생성자       	: 한의봉
         * @생성일자     	: 2017. 9. 05
         * @설명			: 협력사상세
         * @최종수정자		: 안성민
         * @최종수정일자	: 2017. 11. 16.
         * PR14WRI 작성중		: TYPE A			
         * PR14APP 품의중		: TYPE B
         * PR14WAT 품의작성중	: TYPE B
         * PR14REQ 요청완료	: TYPE B
         * PR14RCV 요청접수	: TYPE C
         * PR14RTN 답변완료	: TYPE A
        */  

        this.fv_cdPrStts = ""; 
         
         
        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {
        	var param = [
        					{code:"PR14",sSelectType:"S"}
        					,{code:"PR15",sSelectType:"S"}
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
        					{btnName:"요청", clickEventFunc:"fnReqPr"}
        					,{btnName:"답변", clickEventFunc:"fnRtnPr"}
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
        	this.fnSetCode();
        }

         
        /**
          * @함수명	: fnFormOnload
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.LoadEventInfo(이벤트변수)
          * @return   : 
          * @desc     	: 폼 onload이벤트
          */
        this.fnFormOnload = function(obj,e)
        {
        	gfnMakeFileDs(this);
        	
        	this.Div03.divSrcGrp.fnSetBind(this.dsPrePr,"LRG_SRC_ID","MDL_SRC_ID");
        		
        	if("" != gfnGetTmprData("PR_NO")){
        		
        		this.dsPrePr.addRow();
        		this.dsPrePr.setColumn(0, "PR_NO"			, gfnGetTmprData("PR_NO"));
        		this.fv_cdPrStts = gfnGetTmprData("CD_PR_STTS");
        		
        		
        		gfnClearTmprData();
        		this.fn_Search();
        		
        	}else{
        		this.dsPrePr.addRow();
        		gfnSetObj("A");
        		this.fnFileload("N");
        		
        		this.Tab00.tabpage1.Div01.fnEditorInit("","N");
        		this.Tab00.tabpage2.Div01.fnEditorInit("","N");
        		
        	
        	}
        	
        }

        this.fnFold = function()
        {
        	/*
        		상단에서부터 div 순서대로 기입.
        		ttl:접기/펼치기 클릭 하는 컴포넌트, body:실제로 접혀지거나 펼쳐지는 컴포넌트, initFold:true면 접는다.
        	*/
        	var sArg = [ 
        				{ttl:this.div_2.staViewCompTitle00 , body:this.div_21}	// 기본정보
        				,{ttl:this.div_3.staViewCompTitle00, body:this.div_31}	// 품목
        				,{ttl:this.div_4.staViewCompTitle00, body:this.div_41}	// 품목상세정보
        		   ];
        	gfnDivFold(this, sArg);
        }
          
        /**
          	@function	 fn_dlvSearch()
          	@desc  		 납품 조회 프로세스(건별송장작성)
         */
        this.fn_Search = function()
        {	 
        	var sSvcID = "prePrRead";
        	var sController = "epro.pur.service.BPrePrService.prePrRead";
        	var sInDatasets = "dsPrePr=dsPrePr";
        	var sOutDatasets = "dsPrePr=dsPrePr";
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
        		case "prePrRead" :
        			
        			if(this.fv_cdPrStts == "PR14WRI"){	
        				this.Tab00.tabpage1.Div01.fnEditorInit(this.dsPrePr.getColumn(0, "REQ_CNTNT"),"N");
        				this.Tab00.tabpage2.Div01.fnEditorInit(this.dsPrePr.getColumn(0, "RTN_CNTNT"),"N");
        				gfnSetObj("A");   
        				
        			}else if(this.fv_cdPrStts == "PR14RCV"){
        				this.Tab00.tabpage1.Div01.fnEditorInit(this.dsPrePr.getColumn(0, "REQ_CNTNT"),"Y");
        				this.Tab00.tabpage2.Div01.fnEditorInit(this.dsPrePr.getColumn(0, "RTN_CNTNT"),"N");
        				gfnSetObj("B");     
        			}else if(this.fv_cdPrStts == "PR14RTN"){
        				gfnSetObj("B");     
        				this.Tab00.tabpage1.Div01.fnEditorInit(this.dsPrePr.getColumn(0, "REQ_CNTNT"),"Y");
        				this.Tab00.tabpage2.Div01.fnEditorInit(this.dsPrePr.getColumn(0, "RTN_CNTNT"),"Y");
        				
        			}else{
        				gfnSetObj("C");     
        				this.Tab00.tabpage1.Div01.fnEditorInit(this.dsPrePr.getColumn(0, "REQ_CNTNT"),"N");
        				this.Tab00.tabpage2.Div01.fnEditorInit(this.dsPrePr.getColumn(0, "RTN_CNTNT"),"N");
        			}
        			 
        		break;
        		
        		case "prePrPchrgrUserSrch" :
        			this.dsPrePr.setColumn(0,"PCHRGR_ID",this.dsReturn.getColumn(0,"USER_ID"));
        			this.dsPrePr.setColumn(0,"PCHRGR_NM",this.dsReturn.getColumn(0,"USER_NM"));
        		break;
        		
        		case "prePrSave" :
        			this.fn_Search();
        		break;
        		
        		case "savePreAnswer" :
        			gfnAlert("답변이 등록되었습니다.");
        			this.fn_Search();
        		break;
        				  
        				
        		default:
        		break;	
        	}
        } 
         
        this.dsPrePr_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "MDL_SRC_ID" && !gfnIsNull(this.dsPrePr.getColumn(0,"MDL_SRC_ID"))){
        		var sSvcID = "prePrPchrgrUserSrch";
        		var sController = "epro.pur.service.BPrePrService.prePrPchrgrUserSrch";
        		var sInDatasets = "dsPrePr=dsPrePr";
        		var sOutDatasets = "dsReturn=dsReturn";
        		var sCallbackFunc = "fnTrCallBack";
        		
        		gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        	}	
        }

        this.fnPreSave = function(){
        	
        	this.Tab00.tabpage1.Div01.getContent(this.dsPrePr, 0, "REQ_CNTNT", "fnReqPr");
        	
        }

        

        
        this.fnReqPr = function(){

        	var sSvcID = "prePrSave";
        	var sController = "epro.pur.service.BPrePrService.prePrSave";
        	var sInDatasets = "dsPrePr=dsPrePr";
        	var sOutDatasets = "dsPrePr=dsPrePr";
        	var sCallbackFunc = "fnTrCallBack";
        	
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        
        this.fnRtnPr = function(){

        	var sArg = {
        				agv_id 	: ""
        				,agv_nm : ""
        				};
        	gfnModalPop(this, "prePrRtn", "BPUR::BPrePrRtnPop.xfdl", sArg, "fnPopCallBack", 1000, 600);
        }

        
        /**
          * @함수명	: fnFileload
          * @desc     	: 첨부파일 셋팅
          */
        this.fnFileload= function(fUse)
        {
        	var sTableNm = "MM_PRE_PR";
        	var arrFileKey = [this.dsPrePr.getColumn(0, "PR_NO")
         					 ,"NORMAL"];
        	this.Div02.fnFileInit(this, sTableNm, this.dsPrePr, arrFileKey,fUse);
        }

        /**
        	@function	fn_popCallBack()
        	@desc   	팝업 CallBack 함수
        */
        this.fnPopCallBack = function(sPopupId,rtn)
        {
        	if(gfnIsNull(rtn)) return;
        	
        	if(rtn.indexOf("<Dataset id=") == 0){
        		
        		this.dsReturn.loadXML(rtn);
        		
        		//요청창고 검색 CallBack
        		if(sPopupId == "prePrRtn"){
        			
        			this.dsPrePr.setColumn(0,"RTN_CNTNT",this.dsReturn.getColumn(0,"OPNN"));
        			
        			var sSvcID = "savePreAnswer";
        			var sController = "epro.pur.service.BPrePrService.savePreAnswer";
        			var sInDatasets = "dsPrePr=dsPrePr";
        			var sOutDatasets = "dsPrePr=dsPrePr";
        			var sCallbackFunc = "fnTrCallBack";
        			
        			gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        			 
        		} 
        	}
        }

        
        this.Tab00_onchanged = function(obj,e)
        {
        	if("1" == e.postindex){
        		if("PR14RTN" != this.dsPrePr.getColumn(0,"CD_PR_STTS")){
        			gfnAlert("아직 답변이 등록되지 않았습니다.");

        			//this.Tab00.tabpage1.Div01.fnEditorInit(this.dsPrePr.getColumn(0, "REQ_CNTNT"),"Y");
        			//this.Tab00.tabpage2.Div01.fnEditorInit(this.dsPrePr.getColumn(0, "RTN_CNTNT"),"N");
        			
        			this.Tab00.set_tabindex(0);
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPrePr.addEventHandler("oncolumnchanged", this.dsPrePr_oncolumnchanged, this);
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.div_2.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.div_00.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.div_03.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.Div03.edtTtl.addEventHandler("onkeydown", this.fnOnkeydown, this);
            this.Div03.edtTtl.addEventHandler("ontextchanged", this.fnOntextchanged, this);
            this.Div03.edtLinkUrl.addEventHandler("onkeydown", this.fnOnkeydown, this);
            this.Div03.edtLinkUrl.addEventHandler("ontextchanged", this.fnOntextchanged, this);
            this.Tab00.addEventHandler("onchanged", this.Tab00_onchanged, this);

        };

        this.loadIncludeScript("BPrePrDetail.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
