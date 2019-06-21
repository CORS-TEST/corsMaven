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
                this.set_name("BPrSavePop");
                this.set_titletext("물품요청 결재요청팝업");
                this.set_cssclass("frm_POP_Search");
                this.set_scrollbars("autoboth");
                this._setFormPosition(0,0,1000,731);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_pChkBdgt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pApp", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column type=\"STRING\" id=\"BRANCH_CD\" size=\"20\"/><Column type=\"STRING\" id=\"APP_DOC_ID\" size=\"20\"/><Column type=\"STRING\" id=\"REF_KEY_1\" size=\"40\"/><Column type=\"STRING\" id=\"CD_APRV_DOC_CTGR\" size=\"40\"/><Column type=\"STRING\" id=\"CD_APRV_MTHD\" size=\"40\"/><Column type=\"STRING\" id=\"TTL\" size=\"600\"/><Column type=\"STRING\" id=\"REQR_ID\" size=\"50\"/><Column type=\"STRING\" id=\"APRV_OPNN\" size=\"4000\"/><Column type=\"STRING\" id=\"APP_DOC\" size=\"4000\"/><Column type=\"STRING\" id=\"CD_APRV_STTS\" size=\"40\"/><Column id=\"ALT_INVNTRY_MGMT\" type=\"STRING\" size=\"1\"/><Column id=\"APRV_CNT\" type=\"INT\" size=\"10\"/><Column id=\"PR_NO\" type=\"STRING\" size=\"40\"/><Column id=\"GI_REQ_NO\" type=\"STRING\" size=\"40\"/><Column id=\"CRTR_ID\" type=\"STRING\" size=\"40\"/><Column id=\"LAST_CHGR_ID\" type=\"STRING\" size=\"40\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pAppLine", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHECKED\" type=\"STRING\" size=\"2\"/><Column id=\"APRVR_NM\" type=\"STRING\" size=\"256\"/><Column type=\"string\" id=\"APRVR_ID\" size=\"50\"/><Column type=\"int\" id=\"SEQ\" size=\"22\"/><Column type=\"string\" id=\"CRTR_ID\" size=\"50\"/><Column type=\"string\" id=\"APRV_DT\" size=\"7\"/><Column type=\"string\" id=\"CD_APRV_LN_STTS_NM\" size=\"40\"/><Column type=\"string\" id=\"CD_APRV_LN_STTS\" size=\"40\"/><Column type=\"string\" id=\"REQ_DT\" size=\"7\"/><Column type=\"string\" id=\"CD_APP_TYPE_NM\" size=\"40\"/><Column type=\"string\" id=\"CD_APP_TYPE\" size=\"40\"/><Column type=\"string\" id=\"LAST_CHG_DT\" size=\"7\"/><Column type=\"string\" id=\"OPNN\" size=\"1500\"/><Column type=\"string\" id=\"LAST_CHGR_ID\" size=\"50\"/><Column type=\"string\" id=\"APP_DOC_ID\" size=\"20\"/><Column type=\"string\" id=\"CRT_DT\" size=\"7\"/><Column type=\"string\" id=\"BRANCH_CD\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pAppRef", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"TRNR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TRNR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APP_DOC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mChkBdgt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mApp", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column type=\"STRING\" id=\"BRANCH_CD\" size=\"20\"/><Column type=\"STRING\" id=\"APP_DOC_ID\" size=\"20\"/><Column type=\"STRING\" id=\"REF_KEY_1\" size=\"40\"/><Column type=\"STRING\" id=\"CD_APRV_DOC_CTGR\" size=\"40\"/><Column type=\"STRING\" id=\"CD_APRV_MTHD\" size=\"40\"/><Column type=\"STRING\" id=\"TTL\" size=\"600\"/><Column type=\"STRING\" id=\"REQR_ID\" size=\"50\"/><Column type=\"STRING\" id=\"APRV_OPNN\" size=\"4000\"/><Column type=\"STRING\" id=\"APP_DOC\" size=\"4000\"/><Column type=\"STRING\" id=\"CD_APRV_STTS\" size=\"40\"/><Column id=\"ALT_INVNTRY_MGMT\" type=\"STRING\" size=\"1\"/><Column id=\"APRV_CNT\" type=\"INT\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mAppLine", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHECKED\" type=\"STRING\" size=\"2\"/><Column id=\"APRVR_NM\" type=\"STRING\" size=\"256\"/><Column type=\"string\" id=\"APRVR_ID\" size=\"50\"/><Column type=\"int\" id=\"SEQ\" size=\"22\"/><Column type=\"string\" id=\"CRTR_ID\" size=\"50\"/><Column type=\"string\" id=\"APRV_DT\" size=\"7\"/><Column type=\"string\" id=\"CD_APRV_LN_STTS_NM\" size=\"40\"/><Column type=\"string\" id=\"CD_APRV_LN_STTS\" size=\"40\"/><Column type=\"string\" id=\"REQ_DT\" size=\"7\"/><Column type=\"string\" id=\"CD_APP_TYPE_NM\" size=\"40\"/><Column type=\"string\" id=\"CD_APP_TYPE\" size=\"40\"/><Column type=\"string\" id=\"LAST_CHG_DT\" size=\"7\"/><Column type=\"string\" id=\"OPNN\" size=\"1500\"/><Column type=\"string\" id=\"LAST_CHGR_ID\" size=\"50\"/><Column type=\"string\" id=\"APP_DOC_ID\" size=\"20\"/><Column type=\"string\" id=\"CRT_DT\" size=\"7\"/><Column type=\"string\" id=\"BRANCH_CD\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mAppRef", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"TRNR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TRNR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APP_DOC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_return", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"APP_DOC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IS_SUCCESS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_popCallback", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPr", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column type=\"STRING\" id=\"BRANCH_CD\" size=\"20\"/><Column type=\"STRING\" id=\"APP_DOC_ID\" size=\"20\"/><Column type=\"STRING\" id=\"REF_KEY_1\" size=\"40\"/><Column type=\"STRING\" id=\"CD_APRV_DOC_CTGR\" size=\"40\"/><Column type=\"STRING\" id=\"CD_APRV_MTHD\" size=\"40\"/><Column type=\"STRING\" id=\"TTL\" size=\"600\"/><Column type=\"STRING\" id=\"REQR_ID\" size=\"50\"/><Column type=\"STRING\" id=\"APRV_OPNN\" size=\"4000\"/><Column type=\"STRING\" id=\"APP_DOC\" size=\"4000\"/><Column type=\"STRING\" id=\"CD_APRV_STTS\" size=\"40\"/><Column id=\"ALT_INVNTRY_MGMT\" type=\"STRING\" size=\"1\"/><Column id=\"APRV_CNT\" type=\"INT\" size=\"10\"/><Column id=\"PR_NO\" type=\"STRING\" size=\"40\"/><Column id=\"GI_REQ_NO\" type=\"STRING\" size=\"40\"/><Column id=\"CRTR_ID\" type=\"STRING\" size=\"40\"/><Column id=\"LAST_CHGR_ID\" type=\"STRING\" size=\"40\"/><Column id=\"CD_PR_STTS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PR_CTGR\" type=\"STRING\" size=\"256\"/><Column id=\"REQR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BDGT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RMARK\" type=\"STRING\" size=\"256\"/><Column id=\"PR_REQ_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"APRV_CMPLT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PR_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"ATTCH_FILE_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"TKEY\" type=\"STRING\" size=\"256\"/><Column id=\"CRT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_CHG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PR_ITEM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PR_ITEM_STTS\" type=\"STRING\" size=\"256\"/><Column id=\"STR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_STR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_REQ_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"INSP_CHRGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DPMT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DPMT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DOC_CTGR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPAppLine", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHECKED\" type=\"STRING\" size=\"2\"/><Column id=\"APRVR_NM\" type=\"STRING\" size=\"256\"/><Column type=\"string\" id=\"APRVR_ID\" size=\"50\"/><Column type=\"int\" id=\"SEQ\" size=\"22\"/><Column type=\"string\" id=\"CRTR_ID\" size=\"50\"/><Column type=\"string\" id=\"APRV_DT\" size=\"7\"/><Column type=\"string\" id=\"CD_APRV_LN_STTS_NM\" size=\"40\"/><Column type=\"string\" id=\"CD_APRV_LN_STTS\" size=\"40\"/><Column type=\"string\" id=\"REQ_DT\" size=\"7\"/><Column type=\"string\" id=\"CD_APP_TYPE_NM\" size=\"40\"/><Column type=\"string\" id=\"CD_APP_TYPE\" size=\"40\"/><Column type=\"string\" id=\"LAST_CHG_DT\" size=\"7\"/><Column type=\"string\" id=\"OPNN\" size=\"1500\"/><Column type=\"string\" id=\"LAST_CHGR_ID\" size=\"50\"/><Column type=\"string\" id=\"APP_DOC_ID\" size=\"20\"/><Column type=\"string\" id=\"CRT_DT\" size=\"7\"/><Column type=\"string\" id=\"BRANCH_CD\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReturn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("sta_title", "absolute", "0", "3", null, "30", "915", null, this);
            obj.set_taborder("3");
            obj.set_text("결재정보");
            obj.set_cssclass("sta_POP_PopTitle");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "0%", "0", null, null, "0%", "0", this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);
            obj = new Div("divViewCompTitle00", "absolute", "0", "0", null, "24", "0", null, this.Div00);
            obj.set_taborder("0");
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "0", "255", "24", null, null, this.Div00.divViewCompTitle00);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.getSetter("objNm").set("기본정보");
            this.Div00.divViewCompTitle00.addChild(obj.name, obj);
            obj = new Div("divViewCompCond01", "absolute", "8", "33", null, "162", "7", null, this.Div00);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_SearchBg");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("staItemSort", "absolute", "67", "10", "70", "24", null, null, this.Div00.divViewCompCond01);
            obj.set_taborder("0");
            obj.set_text("결제명");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_align("right middle");
            this.Div00.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staItemSort00", "absolute", "67", "79", "70", "24", null, null, this.Div00.divViewCompCond01);
            obj.set_taborder("1");
            obj.set_text("결제의견");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_align("right middle");
            this.Div00.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edt_ttl", "absolute", "149", "10", "450", "24", null, null, this.Div00.divViewCompCond01);
            obj.set_taborder("2");
            obj.set_lengthunit("utf8");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("결재명");
            this.Div00.divViewCompCond01.addChild(obj.name, obj);
            obj = new TextArea("txt_aprvOpnn", "absolute", "150", "40", null, "110", "18", null, this.Div00.divViewCompCond01);
            obj.set_taborder("3");
            obj.set_scrollbars("autovert");
            obj.set_wordwrap("char");
            obj.set_cssclass("txt_default");
            obj.getSetter("objNm").set("결재의견");
            this.Div00.divViewCompCond01.addChild(obj.name, obj);
            obj = new Combo("cbo_cdAprvStts", "absolute", null, "10", "130", "24", "18", null, this.Div00.divViewCompCond01);
            this.Div00.divViewCompCond01.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_innerdataset("ds_cdAP10");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_cssclass("cbo_default_r");
            obj.getSetter("objNm").set("결재상태");
            obj = new Static("staItemSort01", "absolute", "755", "10", "70", "24", null, null, this.Div00.divViewCompCond01);
            obj.set_taborder("5");
            obj.set_text("결제상태");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_align("right middle");
            this.Div00.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divViewCompTitle01", "absolute", "0", "206", null, "24", "0", null, this.Div00);
            obj.set_taborder("2");
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "0", "255", "24", null, null, this.Div00.divViewCompTitle01);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.getSetter("objNm").set("기본정보");
            obj.set_text("결제정보");
            this.Div00.divViewCompTitle01.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", null, "5", "70", "24", "6", null, this.Div00);
            obj.set_taborder("3");
            obj.set_text("결재요청");
            obj.set_cssclass("btn_WF_SearchBtn");
            obj.style.set_background("#888888ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 malgun gothic");
            obj.getSetter("objNm").set("물품요청");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0%", "242", null, null, "0%", "0", this);
            obj.set_taborder("5");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);
            obj = new Tab("Tab01", "absolute", "0", "0", null, null, "0", "10", this.Div01);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.set_cssclass("tab_default");
            obj.getSetter("objNm").set("TAB");
            this.Div01.addChild(obj.name, obj);
            obj = new Tabpage("tabp01", this.Div01.Tab01);
            obj.set_text("결재자정보");
            obj.style.set_background("white");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("기본정보");
            this.Div01.Tab01.addChild(obj.name, obj);
            obj = new Grid("grd_pAppLine", "absolute", "0", "36", null, null, "0", "0", this.Div01.Tab01.tabp01);
            obj.set_taborder("199");
            obj.set_binddataset("dsPAppLine");
            obj.set_autofittype("col");
            obj.getSetter("objNm").set("결재라인그리드");
            obj._setContents("<Formats><Format id=\"MMODE\"><Columns><Column size=\"40\"/><Column size=\"70\"/><Column size=\"129\"/><Column size=\"266\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"결재순번\"/><Cell col=\"2\" text=\"결재자ID\"/><Cell col=\"3\" text=\"결재자명\"/><Cell col=\"4\" text=\"결재유형\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:currow == 0 ? &quot;none&quot; : &quot;checkbox&quot;\" edittype=\"expr:currow == 0 ? &quot;none&quot; : &quot;checkbox&quot;\" text=\"bind:CHECKED\"/><Cell col=\"1\" text=\"bind:SEQ\"/><Cell col=\"2\" text=\"bind:APRVR_ID\"/><Cell col=\"3\" edittype=\"expr:currow == 0 ? none : &quot;text&quot;\" text=\"bind:APRVR_NM\" editdisplay=\"edit\" expandshow=\"expr:currow == 0 ? &quot;hide&quot; : &quot;show&quot;\" expandsize=\"21\" expandimage=\"URL('img::grd_WF_Expand.png')\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"expr:currow == 0 ? none : &quot;combo&quot;\" text=\"bind:CD_APP_TYPE_NM\" combodataset=\"ds_cdAP14\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" combodisplay=\"edit\"/></Band></Format><Format id=\"VMODE\"><Columns><Column size=\"40\"/><Column size=\"70\"/><Column size=\"129\"/><Column size=\"266\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\"/><Cell col=\"1\" text=\"결재순번\"/><Cell col=\"2\" text=\"결재자ID\"/><Cell col=\"3\" text=\"결재자명\"/><Cell col=\"4\" text=\"결재유형\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\"/><Cell col=\"1\" text=\"bind:SEQ\"/><Cell col=\"2\" text=\"bind:APRVR_ID\"/><Cell col=\"3\" text=\"bind:APRVR_NM\"/><Cell col=\"4\" text=\"bind:CD_APP_TYPE_NM\"/></Band></Format></Formats>");
            this.Div01.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Button("btn_add", "absolute", null, "10", "60", "24", "62", null, this.Div01.Tab01.tabp01);
            obj.set_taborder("200");
            obj.set_text(" 추가");
            obj.set_cssclass("btn_WF_Add");
            obj.getSetter("objNm").set("결재라인추가 버튼");
            obj.getSetter("lbcd").set("");
            this.Div01.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Button("btn_del", "absolute", null, "10", "60", "24", "0", null, this.Div01.Tab01.tabp01);
            obj.set_taborder("201");
            obj.set_text(" 삭제");
            obj.set_cssclass("btn_WF_Delete");
            obj.getSetter("objNm").set("결재라인삭제 버튼");
            obj.getSetter("lbcd").set("");
            this.Div01.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Tabpage("tabp02", this.Div01.Tab01);
            obj.set_text("회람처");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("텍스트");
            this.Div01.Tab01.addChild(obj.name, obj);
            obj = new Grid("grd_pAppRef", "absolute", "0", "36", null, null, "0", "0", this.Div01.Tab01.tabp02);
            obj.set_taborder("21");
            obj.set_binddataset("ds_pAppRef");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellclickbound("cell");
            obj.getSetter("objNm").set("회람처그리드");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"39\"/><Column size=\"167\"/><Column size=\"376\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"회람자ID\"/><Cell col=\"2\" text=\"회람자명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\"/><Cell col=\"1\" text=\"bind:TRNR_ID\"/><Cell col=\"2\" edittype=\"text\" text=\"bind:TRNR_NM\" editdisplay=\"edit\" expandshow=\"show\" expandsize=\"24\" expandimage=\"URL('img::grd_WF_Expand.png')\"/></Band></Format></Formats>");
            this.Div01.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Button("btn_addRef", "absolute", null, "10", "60", "24", "62", null, this.Div01.Tab01.tabp02);
            obj.set_taborder("22");
            obj.set_text(" 추가");
            obj.set_cssclass("btn_WF_Add");
            obj.getSetter("objNm").set("회람처추가 버튼");
            obj.getSetter("lbcd").set("");
            this.Div01.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Button("btn_delRef", "absolute", null, "10", "60", "24", "0", null, this.Div01.Tab01.tabp02);
            obj.set_taborder("23");
            obj.set_text(" 삭제");
            obj.set_cssclass("btn_WF_Delete");
            obj.getSetter("objNm").set("회람처삭제 버튼");
            obj.getSetter("lbcd").set("");
            this.Div01.Tab01.tabp02.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.Div00.divViewCompTitle00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.getSetter("objNm").set("DIV-평가서 타이틀");

            	}
            );
            this.Div00.divViewCompTitle00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 162, this.Div00.divViewCompCond01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_cssclass("div_WF_SearchBg");

            	}
            );
            this.Div00.divViewCompCond01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.Div00.divViewCompTitle01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.getSetter("objNm").set("DIV-평가서 타이틀");

            	}
            );
            this.Div00.divViewCompTitle01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Div01.Tab01.tabp01,
            	//-- Layout function
            	function(p) {
            		p.set_text("결재자정보");
            		p.style.set_background("white");
            		p.set_scrollbars("none");
            		p.getSetter("objNm").set("기본정보");

            	}
            );
            this.Div01.Tab01.tabp01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Div01.Tab01.tabp02,
            	//-- Layout function
            	function(p) {
            		p.set_text("회람처");
            		p.set_scrollbars("none");
            		p.getSetter("objNm").set("텍스트");

            	}
            );
            this.Div01.Tab01.tabp02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.set_text("Div01");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1000, 731, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("물품요청 결재요청팝업");
            		p.set_cssclass("frm_POP_Search");
            		p.set_scrollbars("autoboth");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item4","Div00.divViewCompCond01.edt_ttl","value","dsPr","TTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Div00.divViewCompCond01.txt_aprvOpnn","value","dsPr","APRV_OPNN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Div00.divViewCompCond01.cbo_cdAprvStts","value","dsPr","CD_APRV_STTS");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("BPrSavePop.xfdl", function(exports) {
        /**
           @file       BPrItemPop.xfdl
           @desc       물품요청 저장 pop
           @author     박소진
           @makedate   2019.05.02
           @history    
        */  

        // include "lib::lib_all.xjs"
        // 
        // this.formId = "";
        // var length;
        // var idNum;

        //권한을 통한 컨트롤이 필요할 경우 등록하여 사용한다.
        /*this.fv_roleId = "B_INSTALL,B_PUR_M,B_PUR,B_SYSTEM,B_WEBMASTER"*/

        

        
        /**
        	@function	pop_MatGroupSearch_onload()
        	@desc   	폼 onload 이벤트
        */
        this.fnFormOnload = function(obj,e)
        {

        	var ownerFrame = this.getOwnerFrame();//폼을 연 부모객체를 반환해줌. 화면에서 넘겨준 값을 가져오기 위해 씀
          	
          	this.dsPr.addRow();
          	this.dsPAppLine.addRow();
          	var mtrlNm= ownerFrame.mtrl_nm;
        	
          	//부모창으로 부터 전달받은 값을 NULL 이 아니면 검색조건 DataSet에 담는다.
        	if(!gfnIsNull(mtrlNm)){
        		
        		this.dsPr.setColumn(0, "TTL", "[물품요청] "  + mtrlNm);
        		this.dsPr.setColumn(0, "CD_APRV_STTS", ownerFrame.cd_stts_nm);
        		this.dsPr.setColumn(0, "APRV_OPNN", "결재를 요청합니다.");
        		
        		this.dsPr.setColumn(0, "MTRL_CD", ownerFrame.mtrl_cd);
        		this.dsPr.setColumn(0, "CD_PUR_UNIT", ownerFrame.cd_unit);
        		this.dsPr.setColumn(0, "QTY", ownerFrame.qty);
        		this.dsPr.setColumn(0, "PR_AMT", ownerFrame.req);
        		this.dsPr.setColumn(0, "DLV_REQ_DAY", ownerFrame.day);
        		this.dsPr.setColumn(0, "GR_ACNT_NM", ownerFrame.acnt_nm);
        		this.dsPr.setColumn(0, "RMARK", ownerFrame.rmark);
        		this.dsPr.setColumn(0, "ATTCH_FILE_CNT", ownerFrame.files);
        		this.dsPr.setColumn(0, "IN_STR_NM", ownerFrame.str);
        		this.dsPr.setColumn(0, "REQR_ID", application.gdsUserInfo.getColumn(0,"USER_ID"));
        		this.dsPr.setColumn(0, "REQR_NM", application.gdsUserInfo.getColumn(0,"USER_NM"));
        		

        		this.dsPAppLine.setColumn(0, "SEQ", "1");
        		this.dsPAppLine.setColumn(0, "CD_APP_TYPE" ,"AP14REQ");	//결재유형:승인	
        		this.dsPAppLine.setColumn(0, "APRVR_ID", application.gdsUserInfo.getColumn(0,"USER_ID"));
        		this.dsPAppLine.setColumn(0, "APRVR_NM", application.gdsUserInfo.getColumn(0,"USER_NM"));
        		
        		//this.fnSearch();
        		}
        		
        	//	alert(this.dsPr());
          	
          	}
          	alert(this.dsPr.loadXML());
          //	trace(this.dsPr);
        //추가 버튼
        this.Tab01_tabp01_btn_add_onclick = function(obj,e)
        {
        	this.dsPAppLine.addRow();
        // 	for(var j=2; j<this.dsReturn.rowcount; j++){
        // 					this.dsPAppLine.setColumn(0, "SEQ", j);
        // 					}
        	
        }

        

        //사용자 검색
        this.divViewCompBody00_grdList_onexpandup = function(obj,e)
        {
        	//입고부서
        	if("APRVR_NM" == gfnGrdBindColNm(obj, e.cell)){
        		
        		var sArg = { 
        					agv_nm : ""
        			   };
        			   
        		gfnModalPop(this, "searchUser", "CPOP::BUserSrchPopup.xfdl", sArg, "fnPopCallBack", 800, 600);
        		
        	}
        }

        //팝업콜백
        this.fnPopCallBack = function(sPopupId,rtn){ //닫기버튼 눌렀을때 팝업에서 넘겨온 값

        	
        if(gfnIsNull(rtn)) return;
        	alert(rtn);
        	
        	this.dsReturn.clear(); //팝업에서 넘겨온 값을 ㅇ여기서 쓰기 우ㅣ해 임시데이터셋 만들어준다.
        	this.dsReturn.loadXML(rtn);//팝업 닫힐때 xml정보 넘겨줌. 값이 있으면 dsReturn라는 임시데이터셋에 값세팅.

        	switch(sPopupId){
        		case "searchUser":
         			if(!gfnIsNull(this.dsReturn.getColumn(0,"USER_NM"))){
         			
        				this.dsPAppLine.set_enableevent(false);
        					for(var i=0; i<this.dsReturn.rowcount; i++){

        					this.dsPAppLine.setColumn(this.dsPAppLine.rowposition, "APRVR_NM", this.dsReturn.getColumn(i, "USER_NM"));
        					this.dsPAppLine.setColumn(this.dsPAppLine.rowposition, "APRVR_ID", this.dsReturn.getColumn(i, "USER_ID"));
        					
         					}
        				
        				this.dsPAppLine.set_enableevent(true);
         			}
        			break;
         			
        		default:
        		break;	
        	}
        	
        }

        
        //삭제버튼
        this.Tab01_tabp01_btn_del_onclick = function(obj,e)
        {

        	this.dsPAppLine.set_enableevent(false);
        	this.dsPAppLine.filter("CHECKED==1")
        	this.dsPAppLine.deleteAll();
        	this.dsPAppLine.filter("")//초기화
        	this.dsPAppLine.set_enableevent(true);//이벤트 다시 켜줌

        }

        
        //결재요청버튼
        this.Div00_Button00_onclick = function(obj,e)
        {
        	this.fnSave();
        }

        

        /**
        	@function	fn_commSave()
        	@desc   	(공통버튼)저장
        */
        this.fnSave = function(type)
        {
        	//if (!this.fn_preSave(type)) return false;
        	
        	var sSvcID = "savePr";
        	var sController = "epro.pur.service.BPrService.savePr";
        	var sInDatasets = "dsPr=dsPr dsPAppLine=dsPAppLine dsPrItem=dsPrItem";
        	var sOutDatasets = "dsPr=dsPr";
        	var sCallbackFunc = "fnTrCallBack";
        	
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_pAppLine.addEventHandler("onrowsetchanged", this.ds_pAppLine_onrowsetchanged, this);
            this.ds_mAppLine.addEventHandler("onrowsetchanged", this.ds_mAppLine_onrowsetchanged, this);
            this.dsPAppLine.addEventHandler("onrowsetchanged", this.ds_pAppLine_onrowsetchanged, this);
            this.addEventHandler("oninit", this.pop_appPop_oninit, this);
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.Div00.divViewCompTitle00.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.Div00.divViewCompTitle01.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.Div00.Button00.addEventHandler("onclick", this.Div00_Button00_onclick, this);
            this.Div01.Tab01.tabp01.grd_pAppLine.addEventHandler("onkeydown", this.fn_appline_onkeydown_event, this);
            this.Div01.Tab01.tabp01.grd_pAppLine.addEventHandler("ondropdown", this.Div03_Tab01_tabp01_grd_list01_ondropdown, this);
            this.Div01.Tab01.tabp01.grd_pAppLine.addEventHandler("ontextchanged", this.fn_ontextchanged_event, this);
            this.Div01.Tab01.tabp01.grd_pAppLine.addEventHandler("onexpandup", this.divViewCompBody00_grdList_onexpandup, this);
            this.Div01.Tab01.tabp01.btn_add.addEventHandler("onclick", this.Tab01_tabp01_btn_add_onclick, this);
            this.Div01.Tab01.tabp01.btn_del.addEventHandler("onclick", this.Tab01_tabp01_btn_del_onclick, this);
            this.Div01.Tab01.tabp02.grd_pAppRef.addEventHandler("onkeydown", this.fn_refline_onkeydown_event, this);
            this.Div01.Tab01.tabp02.grd_pAppRef.addEventHandler("oncelldblclick", this.grd_list_oncelldblclick, this);
            this.Div01.Tab01.tabp02.grd_pAppRef.addEventHandler("onexpandup", this.Tab01_tabp02_grd_list01_onexpandup, this);
            this.Div01.Tab01.tabp02.grd_pAppRef.addEventHandler("ontextchanged", this.fn_ontextchanged_event, this);
            this.Div01.Tab01.tabp02.btn_addRef.addEventHandler("onclick", this.Tab01_tabp02_btn_addRef_onclick, this);
            this.Div01.Tab01.tabp02.btn_delRef.addEventHandler("onclick", this.Tab01_tabp02_btn_delRef_onclick, this);

        };

        this.loadIncludeScript("BPrSavePop.xfdl", true);

       
    };
}
)();
