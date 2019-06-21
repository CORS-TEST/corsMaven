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
            obj = new Dataset("dsPtnr", this);
            obj._setContents("<ColumnInfo><Column id=\"PTNR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CD_PTNR_STTS\" size=\"256\" type=\"STRING\"/><Column id=\"BIZ_NO_03\" size=\"256\" type=\"STRING\"/><Column id=\"BIZ_NO_02\" size=\"256\" type=\"STRING\"/><Column id=\"BIZ_NO_01\" size=\"256\" type=\"STRING\"/><Column id=\"BIZ_NO\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_NM\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_NM_GB\" size=\"256\" type=\"STRING\"/><Column id=\"HEAD_OFFCBIZ_NO_01\" size=\"256\" type=\"STRING\"/><Column id=\"HEAD_OFFCBIZ_NO_02\" size=\"256\" type=\"STRING\"/><Column id=\"HEAD_OFFCBIZ_NO_03\" size=\"256\" type=\"STRING\"/><Column id=\"HEAD_OFFCBIZ_NO\" size=\"256\" type=\"STRING\"/><Column id=\"CORP_REG_NO_01\" size=\"256\" type=\"STRING\"/><Column id=\"CORP_REG_NO_02\" size=\"256\" type=\"STRING\"/><Column id=\"CORP_REG_NO\" size=\"256\" type=\"STRING\"/><Column id=\"BIZ_CNDTN\" size=\"256\" type=\"STRING\"/><Column id=\"BIZ_TYPE\" size=\"256\" type=\"STRING\"/><Column id=\"BIZ_BGN_DAY\" size=\"256\" type=\"STRING\"/><Column id=\"RPRSTV_NM\" size=\"256\" type=\"STRING\"/><Column id=\"RPRSTV_HP_01\" size=\"256\" type=\"STRING\"/><Column id=\"RPRSTV_HP_02\" size=\"256\" type=\"STRING\"/><Column id=\"RPRSTV_HP_03\" size=\"256\" type=\"STRING\"/><Column id=\"RPRSTV_HP\" size=\"256\" type=\"STRING\"/><Column id=\"RPRSTV_EMAIL_01\" size=\"256\" type=\"STRING\"/><Column id=\"RPRSTV_EMAIL_02\" size=\"256\" type=\"STRING\"/><Column id=\"RPRSTV_EMAIL\" size=\"256\" type=\"STRING\"/><Column id=\"ZIP_NO\" size=\"256\" type=\"STRING\"/><Column id=\"ADDR\" size=\"256\" type=\"STRING\"/><Column id=\"DTL_ADDR\" size=\"256\" type=\"STRING\"/><Column id=\"RPTST_TEL_01\" size=\"256\" type=\"STRING\"/><Column id=\"RPTST_TEL_02\" size=\"256\" type=\"STRING\"/><Column id=\"RPTST_TEL_03\" size=\"256\" type=\"STRING\"/><Column id=\"RPTST_TEL\" size=\"256\" type=\"STRING\"/><Column id=\"TEL_01\" size=\"256\" type=\"STRING\"/><Column id=\"TEL_02\" size=\"256\" type=\"STRING\"/><Column id=\"TEL_03\" size=\"256\" type=\"STRING\"/><Column id=\"TEL\" size=\"256\" type=\"STRING\"/><Column id=\"FAX_01\" size=\"256\" type=\"STRING\"/><Column id=\"FAX_02\" size=\"256\" type=\"STRING\"/><Column id=\"FAX_03\" size=\"256\" type=\"STRING\"/><Column id=\"FAX\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_USE\" size=\"256\" type=\"STRING\"/><Column id=\"ATTCH_FILE_CNT\" size=\"256\" type=\"STRING\"/><Column id=\"TKEY\" size=\"256\" type=\"STRING\"/><Column id=\"RTN_RSN\" size=\"256\" type=\"STRING\"/><Column id=\"TRD_REQ_BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"RPTST_SRC_GRP_ID\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_CHT_DT\" size=\"256\" type=\"STRING\"/><Column id=\"RPTST_USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"AST\" size=\"256\" type=\"STRING\"/><Column id=\"DEBT\" size=\"256\" type=\"STRING\"/><Column id=\"CAPL\" size=\"256\" type=\"STRING\"/><Column id=\"BIZ_PROFIT\" size=\"256\" type=\"STRING\"/><Column id=\"EMP_CNT\" size=\"256\" type=\"STRING\"/><Column id=\"PYMT_BNK\" size=\"256\" type=\"STRING\"/><Column id=\"BNK_OWNR\" size=\"256\" type=\"STRING\"/><Column id=\"BNK_ACNT_NO\" size=\"256\" type=\"STRING\"/><Column id=\"MJR_CSTMR\" size=\"256\" type=\"STRING\"/><Column id=\"YR_1\" size=\"256\" type=\"STRING\"/><Column id=\"YR_2\" size=\"256\" type=\"STRING\"/><Column id=\"YR_3\" size=\"256\" type=\"STRING\"/><Column id=\"SALES_AMT_1\" size=\"256\" type=\"STRING\"/><Column id=\"SALES_AMT_2\" size=\"256\" type=\"STRING\"/><Column id=\"SALES_AMT_3\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_RMK\" size=\"256\" type=\"STRING\"/><Column id=\"EMP_CNT_KI\" size=\"256\" type=\"STRING\"/><Column id=\"EMP_CNT_SA\" size=\"256\" type=\"STRING\"/><Column id=\"EMP_CNT_ETC\" size=\"256\" type=\"STRING\"/><Column id=\"APP_DOC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"APP_CMPLT_DT\" size=\"256\" type=\"STRING\"/><Column id=\"CRTR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CRT_DT\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_CHGR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_CHG_DT\" size=\"256\" type=\"STRING\"/><Column id=\"EVAL_SCORE\" size=\"256\" type=\"STRING\"/><Column id=\"SAP_VENDOR\" size=\"256\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"LANG_CD\" size=\"256\" type=\"STRING\"/><Column id=\"PCHRGR_ID\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUser", this);
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_USE\" size=\"256\" type=\"STRING\"/><Column id=\"INT_USER_TYPE\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"USER_NM\" size=\"256\" type=\"STRING\"/><Column id=\"USER_NM_GB\" size=\"256\" type=\"STRING\"/><Column id=\"DEPT_CD\" size=\"256\" type=\"STRING\"/><Column id=\"DEPT_NM\" size=\"256\" type=\"STRING\"/><Column id=\"PWD\" size=\"256\" type=\"STRING\"/><Column id=\"PWD_CHK\" size=\"256\" type=\"STRING\"/><Column id=\"FAX\" size=\"256\" type=\"STRING\"/><Column id=\"MJR_JOB\" size=\"256\" type=\"STRING\"/><Column id=\"TEL\" size=\"256\" type=\"STRING\"/><Column id=\"HP_01\" size=\"256\" type=\"STRING\"/><Column id=\"HP_02\" size=\"256\" type=\"STRING\"/><Column id=\"HP_03\" size=\"256\" type=\"STRING\"/><Column id=\"HP\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_SMS_RCV\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_MAIL_RCV\" size=\"256\" type=\"STRING\"/><Column id=\"PWD_EXPR_DAY\" size=\"256\" type=\"STRING\"/><Column id=\"PWD_CHG_DAY\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_LOGIN_DT\" size=\"256\" type=\"STRING\"/><Column id=\"COST_CNTR_CD\" size=\"256\" type=\"STRING\"/><Column id=\"CC_NM\" size=\"256\" type=\"STRING\"/><Column id=\"EMP_NO\" size=\"256\" type=\"STRING\"/><Column id=\"EMAIL_01\" size=\"256\" type=\"STRING\"/><Column id=\"EMAIL_02\" size=\"256\" type=\"STRING\"/><Column id=\"EMAIL\" size=\"256\" type=\"STRING\"/><Column id=\"LOGIN_SSN_INFO\" size=\"256\" type=\"STRING\"/><Column id=\"LOGIN_IP_ADDR\" size=\"256\" type=\"STRING\"/><Column id=\"CRTR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CRT_DT\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_CHGR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_CHG_DT\" size=\"256\" type=\"STRING\"/><Column id=\"PSTN\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReturn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPtnrFile", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPtnrMaker", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdSR13", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM16", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCard", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsLrgGrp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMdlGrp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReqFile", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_NM\" size=\"256\" type=\"STRING\"/><Column id=\"CHECKED\" size=\"256\" type=\"STRING\"/><Column id=\"NO\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"FILE_NM\">EPRO_LABEL_01146</Col><Col id=\"CHECKED\">1</Col><Col id=\"NO\">1</Col></Row><Row><Col id=\"FILE_NM\">EPRO_LABEL_01266</Col><Col id=\"CHECKED\">0</Col><Col id=\"NO\">2</Col></Row><Row><Col id=\"CHECKED\">0</Col><Col id=\"NO\">3</Col><Col id=\"FILE_NM\">EPRO_LABEL_01239</Col></Row><Row><Col id=\"CHECKED\">0</Col><Col id=\"NO\">4</Col><Col id=\"FILE_NM\">EPRO_LABEL_01240</Col></Row><Row><Col id=\"FILE_NM\">EPRO_LABEL_01241</Col><Col id=\"CHECKED\">0</Col><Col id=\"NO\">5</Col></Row><Row><Col id=\"FILE_NM\">EPRO_LABEL_01419</Col><Col id=\"CHECKED\">0</Col><Col id=\"NO\">6</Col></Row><Row><Col id=\"FILE_NM\">EPRO_LABEL_01420</Col><Col id=\"CHECKED\">0</Col><Col id=\"NO\">7</Col></Row><Row><Col id=\"FILE_NM\">EPRO_LABEL_01421</Col><Col id=\"CHECKED\">0</Col><Col id=\"NO\">8</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEval", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSelectGrp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dslvl1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dslvl2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPtnrPlant", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM15", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM13", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM22", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEvlTmplList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdSR14", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSysCard", this);
            obj._setContents("<ColumnInfo><Column id=\"MGMT_HSTR_NO\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"TTL\" size=\"256\" type=\"STRING\"/><Column id=\"CD_MGMT_TYPE\" size=\"256\" type=\"STRING\"/><Column id=\"MGMT_MEMO\" size=\"256\" type=\"STRING\"/><Column id=\"ATTCH_FILE_CNT\" size=\"256\" type=\"STRING\"/><Column id=\"CRTR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_CHGR_ID\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM99", this);
            obj._setContents("");
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

            obj = new Tab("Tab00", "absolute", "0", "8", null, "1795", "11", null, this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.Tab00);
            obj.set_text("기본정보");
            this.Tab00.addChild(obj.name, obj);
            obj = new Div("divViewCompTitle00", "absolute", "0", "5", null, "24", "10", null, this.Tab00.tabpage1);
            obj.set_taborder("35");
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", null, "255", "24", null, "0", this.Tab00.tabpage1.divViewCompTitle00);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 2 17");
            this.Tab00.tabpage1.divViewCompTitle00.addChild(obj.name, obj);
            obj = new Div("divViewCompTitle03", "absolute", "0", "639", null, "24", "0", null, this.Tab00.tabpage1);
            obj.set_taborder("36");
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle03", "absolute", "0", "0", "255", "24", null, null, this.Tab00.tabpage1.divViewCompTitle03);
            obj.set_taborder("0");
            obj.set_text("사용자정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Tab00.tabpage1.divViewCompTitle03.addChild(obj.name, obj);
            obj = new Div("divViewCompBody03", "absolute", "0", "668", null, "103", "0", null, this.Tab00.tabpage1);
            obj.set_taborder("37");
            obj.getSetter("objNm").set("DIV-평가서 상세");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "1", null, "33", "0", null, this.Tab00.tabpage1.divViewCompBody03);
            obj.set_taborder("117");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab00.tabpage1.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staUserNm", "absolute", "0", "1", "171", "33", null, null, this.Tab00.tabpage1.divViewCompBody03);
            obj.set_taborder("118");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.Tab00.tabpage1.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "33", null, "33", "0", null, this.Tab00.tabpage1.divViewCompBody03);
            obj.set_taborder("119");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab00.tabpage1.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staEmail", "absolute", "0", "33", "171", "33", null, null, this.Tab00.tabpage1.divViewCompBody03);
            obj.set_taborder("120");
            obj.set_text("E-MAIL");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.Tab00.tabpage1.divViewCompBody03.addChild(obj.name, obj);
            obj = new Edit("edtUserNm", "absolute", "176", "5", "166", "24", null, null, this.Tab00.tabpage1.divViewCompBody03);
            obj.set_taborder("121");
            obj.set_lengthunit("utf8");
            obj.set_positionstep("1");
            obj.style.set_align("left middle");
            obj.getSetter("objNm").set("대표사용자이름");
            this.Tab00.tabpage1.divViewCompBody03.addChild(obj.name, obj);
            obj = new Edit("edtEmail", "absolute", "176", "37", "166", "24", null, null, this.Tab00.tabpage1.divViewCompBody03);
            obj.set_taborder("122");
            obj.set_lengthunit("utf8");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("대표사용자EMAIL");
            this.Tab00.tabpage1.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "65", null, "33", "0", null, this.Tab00.tabpage1.divViewCompBody03);
            obj.set_taborder("123");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab00.tabpage1.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staPstn", "absolute", "0", "65", "171", "33", null, null, this.Tab00.tabpage1.divViewCompBody03);
            obj.set_taborder("124");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.Tab00.tabpage1.divViewCompBody03.addChild(obj.name, obj);
            obj = new Edit("edtPstn", "absolute", "176", "69", "166", "24", null, null, this.Tab00.tabpage1.divViewCompBody03);
            obj.set_taborder("125");
            obj.set_lengthunit("utf8");
            obj.set_positionstep("1");
            obj.style.set_align("left middle");
            obj.getSetter("objNm").set("대표사용자직급");
            this.Tab00.tabpage1.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staHp", "absolute", "629", "33", "171", "33", null, null, this.Tab00.tabpage1.divViewCompBody03);
            obj.set_taborder("126");
            obj.set_text("휴대전화");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.Tab00.tabpage1.divViewCompBody03.addChild(obj.name, obj);
            obj = new Edit("edtHp", "absolute", "805", "37", "166", "24", null, null, this.Tab00.tabpage1.divViewCompBody03);
            obj.set_taborder("127");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("4");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("대표사용자휴대폰");
            this.Tab00.tabpage1.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staDeptNm", "absolute", "629", "65", "171", "33", null, null, this.Tab00.tabpage1.divViewCompBody03);
            obj.set_taborder("128");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.Tab00.tabpage1.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staTel", "absolute", "629", "1", "171", "33", null, null, this.Tab00.tabpage1.divViewCompBody03);
            obj.set_taborder("129");
            obj.set_text("연락처");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.Tab00.tabpage1.divViewCompBody03.addChild(obj.name, obj);
            obj = new Edit("edtTel", "absolute", "805", "5", "166", "24", null, null, this.Tab00.tabpage1.divViewCompBody03);
            obj.set_taborder("130");
            obj.set_lengthunit("utf8");
            obj.set_positionstep("1");
            obj.style.set_align("left middle");
            obj.getSetter("objNm").set("대표사용자연락처");
            this.Tab00.tabpage1.divViewCompBody03.addChild(obj.name, obj);
            obj = new Edit("edtDeptNm", "absolute", "805", "69", "166", "24", null, null, this.Tab00.tabpage1.divViewCompBody03);
            obj.set_taborder("131");
            obj.set_lengthunit("utf8");
            obj.set_positionstep("1");
            obj.style.set_align("left middle");
            obj.getSetter("objNm").set("대표사용자부서");
            this.Tab00.tabpage1.divViewCompBody03.addChild(obj.name, obj);
            obj = new WebBrowser("wbBizNo", "absolute", null, "0", "183", "0", "0", null, this.Tab00.tabpage1);
            obj.set_taborder("38");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Div("divViewCompTitle02", "absolute", "0", "491", null, "24", "3", null, this.Tab00.tabpage1);
            obj.set_taborder("39");
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle02", "absolute", "0", "0", "255", "24", null, null, this.Tab00.tabpage1.divViewCompTitle02);
            obj.set_taborder("0");
            obj.set_text("사업장주소");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Tab00.tabpage1.divViewCompTitle02.addChild(obj.name, obj);
            obj = new Div("divViewCompBody01", "absolute", "0", "405", null, "66", "0", null, this.Tab00.tabpage1);
            obj.set_taborder("40");
            obj.getSetter("objNm").set("DIV-평가서 상세");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "1", null, "33", "0", null, this.Tab00.tabpage1.divViewCompBody01);
            obj.set_taborder("190");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab00.tabpage1.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "33", null, "33", "0", null, this.Tab00.tabpage1.divViewCompBody01);
            obj.set_taborder("191");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab00.tabpage1.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staRprstvNm", "absolute", "0", "1", "171", "33", null, null, this.Tab00.tabpage1.divViewCompBody01);
            obj.set_taborder("192");
            obj.set_text("대표자명");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.Tab00.tabpage1.divViewCompBody01.addChild(obj.name, obj);
            obj = new Edit("edtRprstvNm", "absolute", "176", "5", "166", "24", null, null, this.Tab00.tabpage1.divViewCompBody01);
            obj.set_taborder("193");
            obj.set_lengthunit("utf8");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("대표자명");
            this.Tab00.tabpage1.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staRprstvEmail", "absolute", "0", "33", "171", "33", null, null, this.Tab00.tabpage1.divViewCompBody01);
            obj.set_taborder("194");
            obj.set_text("E-MAIL");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.Tab00.tabpage1.divViewCompBody01.addChild(obj.name, obj);
            obj = new Edit("edtRprstvEmail", "absolute", "176", "37", "166", "24", null, null, this.Tab00.tabpage1.divViewCompBody01);
            obj.set_taborder("195");
            obj.set_lengthunit("utf8");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("대표자 EMAIL");
            this.Tab00.tabpage1.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staRprstvHp", "absolute", "629", "33", "171", "33", null, null, this.Tab00.tabpage1.divViewCompBody01);
            obj.set_taborder("196");
            obj.set_text("휴대전화");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.Tab00.tabpage1.divViewCompBody01.addChild(obj.name, obj);
            obj = new Edit("edtRprstvHp", "absolute", "805", "37", "166", "24", null, null, this.Tab00.tabpage1.divViewCompBody01);
            obj.set_taborder("197");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("4");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("대표자 휴대전화");
            this.Tab00.tabpage1.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staRprstTel", "absolute", "629", "1", "171", "33", null, null, this.Tab00.tabpage1.divViewCompBody01);
            obj.set_taborder("198");
            obj.set_text("연락처");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.Tab00.tabpage1.divViewCompBody01.addChild(obj.name, obj);
            obj = new Edit("edtRprstTel", "absolute", "805", "5", "166", "24", null, null, this.Tab00.tabpage1.divViewCompBody01);
            obj.set_taborder("199");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("4");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("대표자연락처");
            this.Tab00.tabpage1.divViewCompBody01.addChild(obj.name, obj);
            obj = new PopupDiv("PopupDiv00", "absolute", "52.11%", "-115", null, "100", "29.49%", null, this.Tab00.tabpage1.divViewCompBody01);
            obj.set_text("PopupDiv00");
            this.Tab00.tabpage1.divViewCompBody01.addChild(obj.name, obj);
            obj = new Div("divViewCompTitle01", "absolute", "0", "376", null, "24", "0", null, this.Tab00.tabpage1);
            obj.set_taborder("41");
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle01", "absolute", "0", "0", "255", "24", null, null, this.Tab00.tabpage1.divViewCompTitle01);
            obj.set_taborder("0");
            obj.set_text("대표자정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Tab00.tabpage1.divViewCompTitle01.addChild(obj.name, obj);
            obj = new Div("divViewCompBody02", "absolute", "0", "520", null, "99", "0", null, this.Tab00.tabpage1);
            obj.set_taborder("42");
            obj.getSetter("objNm").set("DIV-평가서 상세");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "0", null, "33", "0", null, this.Tab00.tabpage1.divViewCompBody02);
            obj.set_taborder("197");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab00.tabpage1.divViewCompBody02.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "32", null, "33", "0", null, this.Tab00.tabpage1.divViewCompBody02);
            obj.set_taborder("198");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab00.tabpage1.divViewCompBody02.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "64", null, "33", "0", null, this.Tab00.tabpage1.divViewCompBody02);
            obj.set_taborder("199");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab00.tabpage1.divViewCompBody02.addChild(obj.name, obj);
            obj = new Static("staZipNo", "absolute", "0", "0", "171", "33", null, null, this.Tab00.tabpage1.divViewCompBody02);
            obj.set_taborder("200");
            obj.set_text("우편번호");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.Tab00.tabpage1.divViewCompBody02.addChild(obj.name, obj);
            obj = new Edit("edtZipNo", "absolute", "176", "4", "166", "24", null, null, this.Tab00.tabpage1.divViewCompBody02);
            obj.set_taborder("201");
            obj.set_lengthunit("utf8");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("우편번호");
            this.Tab00.tabpage1.divViewCompBody02.addChild(obj.name, obj);
            obj = new Static("staAddr", "absolute", "0", "32", "171", "33", null, null, this.Tab00.tabpage1.divViewCompBody02);
            obj.set_taborder("202");
            obj.set_text("주소");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.Tab00.tabpage1.divViewCompBody02.addChild(obj.name, obj);
            obj = new Edit("edtAddr", "absolute", "176", "36", "398", "24", null, null, this.Tab00.tabpage1.divViewCompBody02);
            obj.set_taborder("203");
            obj.set_lengthunit("utf8");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("주소");
            this.Tab00.tabpage1.divViewCompBody02.addChild(obj.name, obj);
            obj = new Static("staDtlAddr", "absolute", "0", "64", "171", "33", null, null, this.Tab00.tabpage1.divViewCompBody02);
            obj.set_taborder("204");
            obj.set_text("상세주소");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.Tab00.tabpage1.divViewCompBody02.addChild(obj.name, obj);
            obj = new Edit("edtDtlAddr", "absolute", "176", "68", "398", "24", null, null, this.Tab00.tabpage1.divViewCompBody02);
            obj.set_taborder("205");
            obj.set_lengthunit("utf8");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("상세주소");
            this.Tab00.tabpage1.divViewCompBody02.addChild(obj.name, obj);
            obj = new Div("divViewCompTitle04", "absolute", "0", "791", null, "24", "0", null, this.Tab00.tabpage1);
            obj.set_taborder("43");
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle04", "absolute", "0", "0", "255", "24", null, null, this.Tab00.tabpage1.divViewCompTitle04);
            obj.set_taborder("0");
            obj.set_text("경영실태현황");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Tab00.tabpage1.divViewCompTitle04.addChild(obj.name, obj);
            obj = new Div("divViewCompBody04", "absolute", "0", "820", null, "290", "0", null, this.Tab00.tabpage1);
            obj.set_taborder("44");
            obj.getSetter("objNm").set("DIV-평가서 상세");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "1", null, "33", "0", null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("188");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "33", null, "33", "0", null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("189");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "65", null, "33", "0", null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("190");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staViewCompLine04", "absolute", "0", "97", null, "33", "0", null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("191");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staViewCompLine05", "absolute", "0", "160", null, "66", "0", null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("192");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staViewCompLine06", "absolute", "-8", "224", null, "33", "0", null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("193");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staAst", "absolute", "0", "1", "171", "33", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("194");
            obj.set_text("자산");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new MaskEdit("medAst", "absolute", "176", "5", "140", "24", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("195");
            obj.set_displaynulltext("0");
            obj.set_mask("9,999");
            obj.getSetter("objNm").set("자산");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staWon01", "absolute", "321", "8", "50", "20", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("196");
            obj.set_text("원");
            obj.style.set_align("left middle");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staCapl", "absolute", "0", "33", "171", "33", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("197");
            obj.set_text("자본금");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new MaskEdit("medCapl", "absolute", "176", "37", "140", "24", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("198");
            obj.set_displaynulltext("0");
            obj.set_mask("9,999");
            obj.set_maskchar(" ");
            obj.getSetter("objNm").set("자본금");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staWon02", "absolute", "321", "40", "50", "20", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("199");
            obj.set_text("원");
            obj.style.set_align("left middle");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staDebt", "absolute", "0", "65", "171", "33", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("200");
            obj.set_text("부채총액");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new MaskEdit("medDebt", "absolute", "176", "69", "140", "24", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("201");
            obj.set_displaynulltext("0");
            obj.set_mask("9,999");
            obj.set_maskchar(" ");
            obj.getSetter("objNm").set("부채총액");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staWon03", "absolute", "321", "72", "50", "20", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("202");
            obj.set_text("원");
            obj.style.set_align("left middle");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staEmpCnt", "absolute", "0", "97", "171", "33", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("203");
            obj.set_text("종업원수");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new MaskEdit("medEmpCnt", "absolute", "176", "101", "140", "24", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("204");
            obj.set_displaynulltext("0");
            obj.set_mask("9,999");
            obj.getSetter("objNm").set("종업원수");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staPer01", "absolute", "321", "104", "50", "20", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("205");
            obj.set_text("명");
            obj.style.set_align("left middle");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staMjrCstmr", "absolute", "0", "160", "171", "65", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("206");
            obj.set_text("주요거래처");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staSales", "absolute", "0", "224", "171", "33", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("207");
            obj.set_text("3개년 매출액");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("left middle");
            obj.getSetter("lbcd").set("");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staYr1", "absolute", "176", "232", "30", "20", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("208");
            obj.style.set_align("right middle");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new MaskEdit("maeSalesAmt1", "absolute", "250", "229", "140", "24", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("209");
            obj.set_mask("9,999");
            obj.set_autoselect("true");
            obj.style.set_font("9 Dotum");
            obj.getSetter("objNm").set("3개년 매출액 1");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "395", "232", "50", "20", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("210");
            obj.set_text("원");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staYr2", "absolute", "450", "232", "30", "20", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("211");
            obj.style.set_align("right middle");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new MaskEdit("maeSalesAmt2", "absolute", "524", "229", "150", "24", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("212");
            obj.set_mask("9,999");
            obj.set_autoselect("true");
            obj.style.set_font("9 Dotum");
            obj.getSetter("objNm").set("3개년 매출액 2");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "679", "229", "50", "24", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("213");
            obj.set_text("원");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staYr3", "absolute", "734", "232", "30", "20", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("214");
            obj.style.set_align("right middle");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new MaskEdit("maeSalesAmt3", "absolute", "808", "229", "150", "24", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("215");
            obj.set_mask("9,999");
            obj.set_autoselect("true");
            obj.style.set_font("9 Dotum");
            obj.getSetter("objNm").set("3개년 매출액 3");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "963", "229", "50", "24", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("216");
            obj.set_text("원");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new TextArea("txt_mjrCstmr", "absolute", "176", "163", "978", "59", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("217");
            obj.set_scrollbars("autovert");
            obj.set_wordwrap("char");
            obj.set_maxlength("1000");
            obj.getSetter("objNm").set("주요거래처");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staViewCompLine07", "absolute", "0", "256", null, "33", "0", null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("218");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staSales00", "absolute", "0", "256", "171", "33", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("219");
            obj.set_text("3개년 영업이익");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("left middle");
            obj.getSetter("lbcd").set("");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staYr00", "absolute", "176", "263", "30", "20", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("220");
            obj.style.set_align("right middle");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new MaskEdit("maeSalesAmt00", "absolute", "250", "260", "140", "24", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("221");
            obj.set_mask("9,999");
            obj.set_autoselect("true");
            obj.style.set_font("9 Dotum");
            obj.getSetter("objNm").set("3개년 매출액 1");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "395", "263", "50", "20", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("222");
            obj.set_text("원");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staYr04", "absolute", "450", "263", "30", "20", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("223");
            obj.style.set_align("right middle");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new MaskEdit("maeSalesAmt04", "absolute", "524", "260", "150", "24", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("224");
            obj.set_mask("9,999");
            obj.set_autoselect("true");
            obj.style.set_font("9 Dotum");
            obj.getSetter("objNm").set("3개년 매출액 2");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "679", "260", "50", "24", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("225");
            obj.set_text("원");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staYr05", "absolute", "734", "263", "30", "20", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("226");
            obj.style.set_align("right middle");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new MaskEdit("maeSalesAmt05", "absolute", "808", "260", "150", "24", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("227");
            obj.set_mask("9,999");
            obj.set_autoselect("true");
            obj.style.set_font("9 Dotum");
            obj.getSetter("objNm").set("3개년 매출액 3");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "963", "260", "50", "24", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("228");
            obj.set_text("원");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "211", "232", "34", "20", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("229");
            obj.set_text("년");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "211", "263", "34", "20", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("230");
            obj.set_text("년");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "485", "232", "34", "20", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("231");
            obj.set_text("년");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "485", "263", "34", "20", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("232");
            obj.set_text("년");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "769", "232", "34", "20", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("233");
            obj.set_text("년");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "769", "263", "34", "20", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("234");
            obj.set_text("년");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staViewCompLine03", "absolute", "0", "128", null, "33", "0", null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("235");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staEmpCntKi", "absolute", "0", "128", "171", "33", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("236");
            obj.set_text("기능직");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new MaskEdit("medEmpCntKi", "absolute", "176", "132", "140", "24", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("237");
            obj.set_displaynulltext("0");
            obj.set_mask("9,999");
            obj.set_maskchar(" ");
            obj.getSetter("objNm").set("기능직");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staPer02", "absolute", "321", "136", "50", "20", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("238");
            obj.set_text("명");
            obj.style.set_align("left middle");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staEmpCntSa", "absolute", "376", "128", "171", "33", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("239");
            obj.set_text("사무직");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new MaskEdit("medEmpCntSa", "absolute", "552", "132", "141", "24", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("240");
            obj.set_displaynulltext("0");
            obj.set_mask("9,999");
            obj.set_maskchar(" ");
            obj.getSetter("objNm").set("사무직");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staPer03", "absolute", "698", "136", "50", "20", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("241");
            obj.set_text("명");
            obj.style.set_align("left middle");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staEmpCntEtc", "absolute", "753", "128", "171", "33", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("242");
            obj.set_text("기타직");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new MaskEdit("medEmpCntEtc", "absolute", "929", "132", "140", "24", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("243");
            obj.set_displaynulltext("0");
            obj.set_mask("9,999");
            obj.set_maskchar(" ");
            obj.getSetter("objNm").set("기타직");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staPer04", "absolute", "1074", "136", "50", "20", null, null, this.Tab00.tabpage1.divViewCompBody04);
            obj.set_taborder("244");
            obj.set_text("명");
            obj.style.set_align("left middle");
            this.Tab00.tabpage1.divViewCompBody04.addChild(obj.name, obj);
            obj = new Div("divViewCompTitle05", "absolute", "0", "1130", null, "24", "0", null, this.Tab00.tabpage1);
            obj.set_taborder("45");
            obj.getSetter("objNm").set("DIV-공장유무 타이틀");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle05", "absolute", "0", "0", "255", "24", null, null, this.Tab00.tabpage1.divViewCompTitle05);
            obj.set_taborder("0");
            obj.set_text("공장유무");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Tab00.tabpage1.divViewCompTitle05.addChild(obj.name, obj);
            obj = new Div("divViewCompTitle06", "absolute", "0", "1352", null, "24", "1", null, this.Tab00.tabpage1);
            obj.set_taborder("46");
            obj.getSetter("objNm").set("DIV-신용평가서 타이틀");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle06", "absolute", "0", "0", "255", "24", null, null, this.Tab00.tabpage1.divViewCompTitle06);
            obj.set_taborder("0");
            obj.set_text("신용평가서");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Tab00.tabpage1.divViewCompTitle06.addChild(obj.name, obj);
            obj = new Div("divViewCompBody05", "absolute", "0", "1159", null, "173", "0", null, this.Tab00.tabpage1);
            obj.set_taborder("47");
            obj.getSetter("objNm").set("DIV-평가서 상세");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Grid("grdPlant", "absolute", "0", "0", null, null, "0", "0", this.Tab00.tabpage1.divViewCompBody05);
            obj.set_taborder("0");
            obj.set_binddataset("dsPtnrPlant");
            obj.set_autofittype("col");
            obj.getSetter("objNm").set("Maker");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"180\"/><Column size=\"476\"/><Column size=\"360\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" expr=\"\" text=\"국가\" tooltiptext=\"\"/><Cell col=\"2\" expr=\"\" text=\"지역\" tooltiptext=\"\"/><Cell col=\"3\" expr=\"\" text=\"주소\" tooltiptext=\"\"/><Cell col=\"4\" expr=\"\" text=\"비고\" tooltiptext=\"\"/></Band><Band id=\"body\"><Cell text=\"bind:CD_NATION_NM\" tooltiptext=\"bind:CD_NATION_NM\"/><Cell col=\"1\" displaytype=\"expr:CD_NATION=='CM16ETC' ? 'text' : 'none'\" text=\"bind:NATION_RMK\"/><Cell col=\"2\" text=\"bind:AREA\" tooltiptext=\"bind:AREA\"/><Cell col=\"3\" style=\"align:left middle;\" text=\"bind:ADDR\" tooltiptext=\"bind:ADDR\"/><Cell col=\"4\" style=\"align:left middle;\" text=\"bind:GROSS_AREA\" tooltiptext=\"bind:GROSS_AREA\"/></Band></Format></Formats>");
            this.Tab00.tabpage1.divViewCompBody05.addChild(obj.name, obj);
            obj = new Div("divViewCompBody06", "absolute", "0", "1381", null, "66", "0", null, this.Tab00.tabpage1);
            obj.set_taborder("48");
            obj.getSetter("objNm").set("DIV-평가서 상세");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "1", null, "33", "0", null, this.Tab00.tabpage1.divViewCompBody06);
            obj.set_taborder("185");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab00.tabpage1.divViewCompBody06.addChild(obj.name, obj);
            obj = new Static("staSquar", "absolute", "0", "1", "171", "33", null, null, this.Tab00.tabpage1.divViewCompBody06);
            obj.set_taborder("186");
            obj.set_text("등급");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("left middle");
            obj.getSetter("lbcd").set("");
            this.Tab00.tabpage1.divViewCompBody06.addChild(obj.name, obj);
            obj = new Edit("edtSquar", "absolute", "176", "6", "166", "24", null, null, this.Tab00.tabpage1.divViewCompBody06);
            obj.set_taborder("187");
            obj.set_autoselect("true");
            obj.style.set_align("left middle");
            obj.getSetter("objNm").set("등급");
            this.Tab00.tabpage1.divViewCompBody06.addChild(obj.name, obj);
            obj = new Static("staSquar00", "absolute", "629", "1", "171", "33", null, null, this.Tab00.tabpage1.divViewCompBody06);
            obj.set_taborder("188");
            obj.set_text("현금흐름등급");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("left middle");
            obj.getSetter("lbcd").set("");
            this.Tab00.tabpage1.divViewCompBody06.addChild(obj.name, obj);
            obj = new Edit("edtSquar00", "absolute", "805", "6", "166", "24", null, null, this.Tab00.tabpage1.divViewCompBody06);
            obj.set_taborder("189");
            obj.set_autoselect("true");
            obj.style.set_align("left middle");
            obj.getSetter("objNm").set("현금흐름등급");
            this.Tab00.tabpage1.divViewCompBody06.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "33", null, "33", "0", null, this.Tab00.tabpage1.divViewCompBody06);
            obj.set_taborder("190");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab00.tabpage1.divViewCompBody06.addChild(obj.name, obj);
            obj = new Static("staSquar01", "absolute", "0", "33", "171", "33", null, null, this.Tab00.tabpage1.divViewCompBody06);
            obj.set_taborder("191");
            obj.set_text("발행기관");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("left middle");
            obj.getSetter("lbcd").set("");
            this.Tab00.tabpage1.divViewCompBody06.addChild(obj.name, obj);
            obj = new Edit("edtSquar01", "absolute", "176", "38", "166", "24", null, null, this.Tab00.tabpage1.divViewCompBody06);
            obj.set_taborder("192");
            obj.set_autoselect("true");
            obj.getSetter("objNm").set("발행기관");
            this.Tab00.tabpage1.divViewCompBody06.addChild(obj.name, obj);
            obj = new Static("staSquar02", "absolute", "629", "33", "171", "33", null, null, this.Tab00.tabpage1.divViewCompBody06);
            obj.set_taborder("193");
            obj.set_text("발행일");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("left middle");
            obj.getSetter("lbcd").set("");
            this.Tab00.tabpage1.divViewCompBody06.addChild(obj.name, obj);
            obj = new Calendar("cldBizBgnDay", "absolute", "805", "38", "166", "24", null, null, this.Tab00.tabpage1.divViewCompBody06);
            this.Tab00.tabpage1.divViewCompBody06.addChild(obj.name, obj);
            obj.set_taborder("194");
            obj.set_locale("en_US");
            obj.style.set_align("left middle");
            obj.getSetter("objNm").set("발행일");
            obj = new Div("divViewCompBody00", "absolute", "0", "34", null, "322", "0", null, this.Tab00.tabpage1);
            obj.set_taborder("49");
            obj.getSetter("objNm").set("DIV-평가서 상세");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "1", null, "33", "0", null, this.Tab00.tabpage1.divViewCompBody00);
            obj.set_taborder("247");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab00.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "33", null, "33", "0", null, this.Tab00.tabpage1.divViewCompBody00);
            obj.set_taborder("248");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab00.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "65", null, "33", "0", null, this.Tab00.tabpage1.divViewCompBody00);
            obj.set_taborder("249");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab00.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine03", "absolute", "0", "97", null, "33", "0", null, this.Tab00.tabpage1.divViewCompBody00);
            obj.set_taborder("250");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab00.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine04", "absolute", "0", "129", null, "33", "0", null, this.Tab00.tabpage1.divViewCompBody00);
            obj.set_taborder("251");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab00.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine05", "absolute", "0", "225", null, "65", "0", null, this.Tab00.tabpage1.divViewCompBody00);
            obj.set_taborder("252");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab00.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine07", "absolute", "0", "289", null, "33", "0", null, this.Tab00.tabpage1.divViewCompBody00);
            obj.set_taborder("253");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab00.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staCorpRegNo", "absolute", "629", "33", "171", "33", null, null, this.Tab00.tabpage1.divViewCompBody00);
            obj.set_taborder("254");
            obj.set_text("법인번호");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.Tab00.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staBizCndtn", "absolute", "0", "97", "171", "33", null, null, this.Tab00.tabpage1.divViewCompBody00);
            obj.set_taborder("255");
            obj.set_text("업태");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.Tab00.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staBizType", "absolute", "629", "97", "171", "33", null, null, this.Tab00.tabpage1.divViewCompBody00);
            obj.set_taborder("256");
            obj.set_text("종목");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.Tab00.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staTel", "absolute", "0", "129", "171", "33", null, null, this.Tab00.tabpage1.divViewCompBody00);
            obj.set_taborder("257");
            obj.set_text("대표번호");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.Tab00.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staFax", "absolute", "629", "129", "171", "33", null, null, this.Tab00.tabpage1.divViewCompBody00);
            obj.set_taborder("258");
            obj.set_text("FAX");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.Tab00.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staBizBgnDay", "absolute", "0", "65", "171", "33", null, null, this.Tab00.tabpage1.divViewCompBody00);
            obj.set_taborder("259");
            obj.set_text("설립연도");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.Tab00.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Calendar("cldBizBgnDay", "absolute", "176", "70", "166", "24", null, null, this.Tab00.tabpage1.divViewCompBody00);
            this.Tab00.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj.set_taborder("260");
            obj.set_type("spin");
            obj.set_dateformat("yyyy");
            obj.set_editformat("yyyy");
            obj.set_locale("en_US");
            obj.getSetter("objNm").set("영업개시일자");
            obj = new Edit("edtBizCndtn", "absolute", "176", "101", "166", "24", null, null, this.Tab00.tabpage1.divViewCompBody00);
            obj.set_taborder("261");
            obj.set_lengthunit("utf8");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("업태");
            this.Tab00.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtBizType", "absolute", "805", "101", "150", "24", null, null, this.Tab00.tabpage1.divViewCompBody00);
            obj.set_taborder("262");
            obj.set_lengthunit("utf8");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("업종");
            this.Tab00.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtTel", "absolute", "176", "133", "166", "24", null, null, this.Tab00.tabpage1.divViewCompBody00);
            obj.set_taborder("263");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("4");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("대표번호");
            this.Tab00.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtFax", "absolute", "805", "133", "150", "24", null, null, this.Tab00.tabpage1.divViewCompBody00);
            obj.set_taborder("264");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("4");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("FAX");
            this.Tab00.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staBizNo", "absolute", "0", "33", "171", "33", null, null, this.Tab00.tabpage1.divViewCompBody00);
            obj.set_taborder("265");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.Tab00.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staPtnrNm", "absolute", "0", "1", "171", "33", null, null, this.Tab00.tabpage1.divViewCompBody00);
            obj.set_taborder("266");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.Tab00.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtPtnrNm", "absolute", "176", "5", "432", "24", null, null, this.Tab00.tabpage1.divViewCompBody00);
            obj.set_taborder("267");
            obj.set_lengthunit("utf8");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("협력사명");
            this.Tab00.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staSapVendor", "absolute", "629", "65", "171", "33", null, null, this.Tab00.tabpage1.divViewCompBody00);
            obj.set_taborder("268");
            obj.set_text("SAP Vendor");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.Tab00.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtSapVendor", "absolute", "805", "69", "150", "24", null, null, this.Tab00.tabpage1.divViewCompBody00);
            obj.set_taborder("269");
            obj.set_lengthunit("utf8");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("sap vendor");
            this.Tab00.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staRmark", "absolute", "0", "225", "171", "65", null, null, this.Tab00.tabpage1.divViewCompBody00);
            obj.set_taborder("270");
            obj.set_text("특기사항/연혁");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.Tab00.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staEval", "absolute", "0", "289", "171", "33", null, null, this.Tab00.tabpage1.divViewCompBody00);
            obj.set_taborder("271");
            obj.set_text("평가점수");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label_P");
            obj.set_positionstep("1");
            this.Tab00.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtEval", "absolute", "176", "293", "166", "24", null, null, this.Tab00.tabpage1.divViewCompBody00);
            obj.set_taborder("272");
            obj.set_lengthunit("utf8");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("평가점수");
            this.Tab00.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnEvalView", "absolute", "347", "293", "70", "24", null, null, this.Tab00.tabpage1.divViewCompBody00);
            obj.set_taborder("273");
            obj.set_text("평가보기");
            obj.set_visible("false");
            obj.getSetter("objNm").set("평가보기 버튼");
            this.Tab00.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staEval00", "absolute", "629", "289", "171", "33", null, null, this.Tab00.tabpage1.divViewCompBody00);
            obj.set_taborder("274");
            obj.set_text("평가자(평가일시)");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label_P");
            obj.set_positionstep("1");
            this.Tab00.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtEvalerId", "absolute", "805", "293", "148", "24", null, null, this.Tab00.tabpage1.divViewCompBody00);
            obj.set_taborder("275");
            obj.getSetter("objNm").set("평가자명");
            this.Tab00.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new MaskEdit("medBizNo", "absolute", "176", "37", "166", "24", null, null, this.Tab00.tabpage1.divViewCompBody00);
            obj.set_taborder("276");
            obj.set_type("string");
            obj.set_mask("999-99-99999");
            obj.set_maskchar(" ");
            obj.getSetter("objNm").set("사업자번호");
            this.Tab00.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new MaskEdit("medtCorpRegNo", "absolute", "805", "37", "150", "24", null, null, this.Tab00.tabpage1.divViewCompBody00);
            obj.set_taborder("277");
            obj.set_type("string");
            obj.set_mask("999999-9999999");
            obj.set_maskchar(" ");
            obj.getSetter("objNm").set("법인번호");
            this.Tab00.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine06", "absolute", "0", "161", null, "33", "0", null, this.Tab00.tabpage1.divViewCompBody00);
            obj.set_taborder("278");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab00.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staNation", "absolute", "0", "161", "171", "33", null, null, this.Tab00.tabpage1.divViewCompBody00);
            obj.set_taborder("279");
            obj.set_text("국가");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.Tab00.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staArea", "absolute", "629", "161", "171", "33", null, null, this.Tab00.tabpage1.divViewCompBody00);
            obj.set_taborder("280");
            obj.set_text("지역");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.Tab00.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtArea", "absolute", "805", "165", "150", "24", null, null, this.Tab00.tabpage1.divViewCompBody00);
            obj.set_taborder("281");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("4");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("지역");
            this.Tab00.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine09", "absolute", "0", "193", null, "33", "0", null, this.Tab00.tabpage1.divViewCompBody00);
            obj.set_taborder("282");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab00.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staHompage", "absolute", "0", "193", "171", "33", null, null, this.Tab00.tabpage1.divViewCompBody00);
            obj.set_taborder("283");
            obj.set_text("Homepage");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.Tab00.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Combo("cboNation", "absolute", "176", "165", "166", "24", null, null, this.Tab00.tabpage1.divViewCompBody00);
            this.Tab00.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj.set_taborder("284");
            obj.set_innerdataset("@dsCdCM16");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("ojbNm").set("국가");
            obj = new Edit("edtHomepge", "absolute", "176", "197", "432", "24", null, null, this.Tab00.tabpage1.divViewCompBody00);
            obj.set_taborder("285");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("4");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("Homepage");
            this.Tab00.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnEvalStr", "absolute", "422", "293", "70", "24", null, null, this.Tab00.tabpage1.divViewCompBody00);
            obj.set_taborder("286");
            obj.set_text("평가하기");
            obj.set_visible("false");
            obj.getSetter("objNm").set("평가하기 버튼");
            this.Tab00.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new MaskEdit("medtEvalDate", "absolute", "958", "293", "242", "24", null, null, this.Tab00.tabpage1.divViewCompBody00);
            obj.set_taborder("287");
            obj.set_type("string");
            obj.getSetter("objNm").set("평가일시");
            this.Tab00.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new TextArea("taRmark", "absolute", "176", "229", "1025", "57", null, null, this.Tab00.tabpage1.divViewCompBody00);
            obj.set_taborder("288");
            obj.getSetter("objNm").set("특기사항/연혁");
            this.Tab00.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtEctNation", "absolute", "347", "165", "261", "24", null, null, this.Tab00.tabpage1.divViewCompBody00);
            obj.set_taborder("289");
            obj.set_lengthunit("utf8");
            obj.set_visible("false");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("기타국가");
            this.Tab00.tabpage1.divViewCompBody00.addChild(obj.name, obj);
            obj = new Div("divViewCompTitle07", "absolute", "0", "1467", null, "24", "1", null, this.Tab00.tabpage1);
            obj.set_taborder("50");
            obj.getSetter("objNm").set("DIV-신용평가서 타이틀");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle07", "absolute", "0", "0", "255", "24", null, null, this.Tab00.tabpage1.divViewCompTitle07);
            obj.set_taborder("0");
            obj.set_text("Maker");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Tab00.tabpage1.divViewCompTitle07.addChild(obj.name, obj);
            obj = new Div("divViewCompBody07", "absolute", "0", "1496", null, "196", "0", null, this.Tab00.tabpage1);
            obj.set_taborder("51");
            obj.getSetter("objNm").set("DIV-주요실적");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Grid("grdMaker", "absolute", "0", "0", null, null, "0", "0", this.Tab00.tabpage1.divViewCompBody07);
            obj.set_taborder("0");
            obj.set_binddataset("dsPtnrMaker");
            obj.set_autofittype("col");
            obj.getSetter("objNm").set("Maker");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"582\"/><Column size=\"290\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"Maker(Manufacturer)\"/><Cell col=\"1\" text=\"만료일자\"/></Band><Band id=\"body\"><Cell style=\"align:left middle;\" text=\"bind:MAKER\" tooltiptext=\"bind:MAKER\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:LIMIT_DAY\" mask=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" tooltiptext=\"bind:LIMIT_DAY\"/></Band></Format></Formats>");
            this.Tab00.tabpage1.divViewCompBody07.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.Tab00);
            obj.set_text("구매정보");
            this.Tab00.addChild(obj.name, obj);
            obj = new Div("divViewCompBody00", "absolute", "0", "5", null, "230", "0", null, this.Tab00.tabpage2);
            obj.set_taborder("0");
            obj.getSetter("objNm").set("DIV-평가서 상세");
            this.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "1", null, "33", "0", null, this.Tab00.tabpage2.divViewCompBody00);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab00.tabpage2.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "65", null, "33", "0", null, this.Tab00.tabpage2.divViewCompBody00);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab00.tabpage2.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "97", null, "33", "0", null, this.Tab00.tabpage2.divViewCompBody00);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab00.tabpage2.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine06", "absolute", "0", "193", null, "33", "0", null, this.Tab00.tabpage2.divViewCompBody00);
            obj.set_taborder("35");
            obj.set_text("staViewCompLine02");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab00.tabpage2.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine04", "absolute", "0", "129", null, "33", "0", null, this.Tab00.tabpage2.divViewCompBody00);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab00.tabpage2.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine05", "absolute", "0", "161", null, "33", "0", null, this.Tab00.tabpage2.divViewCompBody00);
            obj.set_taborder("37");
            obj.set_text("staViewCompLine02");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab00.tabpage2.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staAltAuto", "absolute", "0", "1", "171", "33", null, null, this.Tab00.tabpage2.divViewCompBody00);
            obj.set_taborder("38");
            obj.set_text("전장업체구분");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.Tab00.tabpage2.divViewCompBody00.addChild(obj.name, obj);
            obj = new CheckBox("cbxAltAuto", "absolute", "176", "1", "96", "33", null, null, this.Tab00.tabpage2.divViewCompBody00);
            obj.set_taborder("39");
            obj.getSetter("objNm").set("전장업체구분 체크박스");
            this.Tab00.tabpage2.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staVendorType", "absolute", "0", "65", "171", "33", null, null, this.Tab00.tabpage2.divViewCompBody00);
            obj.set_taborder("40");
            obj.set_text("Vendor 성격");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.Tab00.tabpage2.divViewCompBody00.addChild(obj.name, obj);
            obj = new Combo("cboVendorType", "absolute", "176", "69", "166", "24", null, null, this.Tab00.tabpage2.divViewCompBody00);
            this.Tab00.tabpage2.divViewCompBody00.addChild(obj.name, obj);
            obj.set_taborder("41");
            obj.set_innerdataset("dsCdSR13");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("Vendor 성격");
            obj = new Static("staInoutType", "absolute", "0", "97", "171", "33", null, null, this.Tab00.tabpage2.divViewCompBody00);
            obj.set_taborder("42");
            obj.set_text("내/외자 구분");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.Tab00.tabpage2.divViewCompBody00.addChild(obj.name, obj);
            obj = new Combo("cboInoutType", "absolute", "176", "101", "166", "24", null, null, this.Tab00.tabpage2.divViewCompBody00);
            this.Tab00.tabpage2.divViewCompBody00.addChild(obj.name, obj);
            obj.set_taborder("43");
            obj.set_innerdataset("@dsCdSR14");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("내/외자구분");
            obj = new Static("staViewCompLine03", "absolute", "0", "33", null, "33", "0", null, this.Tab00.tabpage2.divViewCompBody00);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab00.tabpage2.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staAltSubc", "absolute", "0", "33", "171", "33", null, null, this.Tab00.tabpage2.divViewCompBody00);
            obj.set_taborder("45");
            obj.set_text("하도급업체구분");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.Tab00.tabpage2.divViewCompBody00.addChild(obj.name, obj);
            obj = new CheckBox("cbxAltSubc", "absolute", "176", "33", "96", "33", null, null, this.Tab00.tabpage2.divViewCompBody00);
            obj.set_taborder("46");
            obj.getSetter("objNm").set("하도급업체");
            this.Tab00.tabpage2.divViewCompBody00.addChild(obj.name, obj);
            obj = new Div("divViewCompTitle04", "absolute", "0", "186", null, "24", "0", null, this.Tab00.tabpage2.divViewCompBody00);
            obj.set_taborder("47");
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            this.Tab00.tabpage2.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staTrdCrnc", "absolute", "0", "129", "171", "33", null, null, this.Tab00.tabpage2.divViewCompBody00);
            obj.set_taborder("48");
            obj.set_text("화폐단위");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.Tab00.tabpage2.divViewCompBody00.addChild(obj.name, obj);
            obj = new Combo("cboTrdCrnc", "absolute", "176", "133", "168", "24", null, null, this.Tab00.tabpage2.divViewCompBody00);
            this.Tab00.tabpage2.divViewCompBody00.addChild(obj.name, obj);
            obj.set_taborder("49");
            obj.set_innerdataset("dsCdCM15");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("화폐단위");
            obj = new Static("staPymtCndTn", "absolute", "0", "161", "171", "33", null, null, this.Tab00.tabpage2.divViewCompBody00);
            obj.set_taborder("50");
            obj.set_text("대금지급조건");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.Tab00.tabpage2.divViewCompBody00.addChild(obj.name, obj);
            obj = new Combo("cboPymtCndTn", "absolute", "176", "165", "168", "24", null, null, this.Tab00.tabpage2.divViewCompBody00);
            this.Tab00.tabpage2.divViewCompBody00.addChild(obj.name, obj);
            obj.set_taborder("51");
            obj.set_innerdataset("dsCdCM13");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("대금지급조건");
            obj = new Static("staIncotrms", "absolute", "0", "193", "171", "33", null, null, this.Tab00.tabpage2.divViewCompBody00);
            obj.set_taborder("52");
            obj.set_text("Incoterms");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.Tab00.tabpage2.divViewCompBody00.addChild(obj.name, obj);
            obj = new Combo("cboIncotrms", "absolute", "176", "197", "168", "24", null, null, this.Tab00.tabpage2.divViewCompBody00);
            this.Tab00.tabpage2.divViewCompBody00.addChild(obj.name, obj);
            obj.set_taborder("53");
            obj.set_innerdataset("dsCdCM22");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("Incoterms");
            obj = new Tabpage("tabpage3", this.Tab00);
            obj.set_text("관리카드");
            this.Tab00.addChild(obj.name, obj);
            obj = new Div("divViewCompBody02", "absolute", "0", "34", null, "403", "0", null, this.Tab00.tabpage3);
            obj.set_taborder("3");
            obj.getSetter("objNm").set("DIV-평가서 상세");
            this.Tab00.tabpage3.addChild(obj.name, obj);
            obj = new Grid("grdMgmt", "absolute", "0", "0", null, null, "0", "0", this.Tab00.tabpage3.divViewCompBody02);
            obj.set_taborder("0");
            obj.set_binddataset("dsCard");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.getSetter("objNm").set("관리카드grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"80\"/><Column size=\"205\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"관리번호\" tooltiptext=\"\"/><Cell col=\"1\" expr=\"\" text=\"관리유형\" tooltiptext=\"\"/><Cell col=\"2\" expr=\"\" text=\"제목\" tooltiptext=\"\"/><Cell col=\"3\" expr=\"\" text=\"작성자\" tooltiptext=\"\"/><Cell col=\"4\" expr=\"\" text=\"작성일\" tooltiptext=\"\"/></Band><Band id=\"body\"><Cell text=\"bind:MGMT_HSTR_NO\" tooltiptext=\"bind:MGMT_HSTR_NO\"/><Cell col=\"1\" text=\"bind:CD_MGMT_TYPE_NM\" tooltiptext=\"bind:CD_MGMT_TYPE_NM\"/><Cell col=\"2\" cssclass=\"cell_link\" style=\"align:left;\" text=\"bind:TTL\" tooltiptext=\"bind:TTL\"/><Cell col=\"3\" text=\"bind:CRTR_NM\" tooltiptext=\"bind:CRTR_NM\"/><Cell calendardisplaynulltype=\"none\" col=\"4\" displaytype=\"date\" mask=\"yyyy.MM.dd\" text=\"bind:CRT_DT\" tooltiptext=\"bind:CRT_DT\"/></Band></Format></Formats>");
            this.Tab00.tabpage3.divViewCompBody02.addChild(obj.name, obj);
            obj = new Button("btnMgntAdd", "absolute", null, "5", "76", "24", "0", null, this.Tab00.tabpage3);
            obj.set_taborder("4");
            obj.set_text("추가");
            this.Tab00.tabpage3.addChild(obj.name, obj);
            obj = new Tabpage("tabpage4", this.Tab00);
            obj.set_text("사용자현황");
            this.Tab00.addChild(obj.name, obj);
            obj = new Div("divViewCompTitle00", "absolute", "0", "8", null, "24", "0", null, this.Tab00.tabpage4);
            obj.set_taborder("2");
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            this.Tab00.tabpage4.addChild(obj.name, obj);
            obj = new Div("divViewCompBody00", "absolute", "0", "5", null, "477", "0", null, this.Tab00.tabpage4);
            obj.set_taborder("3");
            obj.getSetter("objNm").set("DIV-평가서 상세");
            this.Tab00.tabpage4.addChild(obj.name, obj);
            obj = new Grid("grdUser", "absolute", "0", "0", null, null, "0", "0", this.Tab00.tabpage4.divViewCompBody00);
            obj.set_taborder("0");
            obj.set_binddataset("dsUser");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.getSetter("f_colSize").set("N");
            obj.getSetter("f_excel").set("Y");
            obj.getSetter("f_filter").set("N");
            obj.getSetter("f_find").set("N");
            obj.getSetter("f_fix").set("Y");
            obj.getSetter("f_height").set("N");
            obj.getSetter("f_hide").set("N");
            obj.getSetter("f_init").set("Y");
            obj.getSetter("f_mode").set("N");
            obj.getSetter("f_save").set("N");
            obj.getSetter("f_sort").set("N");
            obj.getSetter("objNm").set("사용자현황grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"90\"/><Column size=\"200\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"110\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"사용자ID\" tooltiptext=\"\"/><Cell col=\"1\" expr=\"\" text=\"사용자명\" tooltiptext=\"\"/><Cell col=\"2\" expr=\"\" text=\"E-MAIL\" tooltiptext=\"\"/><Cell col=\"3\" expr=\"\" text=\"휴대전화\" tooltiptext=\"\"/><Cell col=\"4\" expr=\"\" text=\"전화번호\" tooltiptext=\"\"/><Cell col=\"5\" expr=\"\" text=\"사용여부\" tooltiptext=\"\"/><Cell col=\"6\" expr=\"\" text=\"대표사용자여부\" tooltiptext=\"\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:USER_ID\" tooltiptext=\"bind:USER_ID\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:USER_NM\" tooltiptext=\"bind:USER_NM\"/><Cell col=\"2\" displaytype=\"normal\" editdisplay=\"edit\" edittype=\"none\" style=\"align:left;\" text=\"bind:EMAIL\" tooltiptext=\"bind:EMAIL\"/><Cell col=\"3\" displaytype=\"normal\" editdisplay=\"edit\" edittype=\"none\" text=\"bind:HP\" tooltiptext=\"bind:HP\"/><Cell col=\"4\" text=\"bind:TEL\" tooltiptext=\"bind:TEL\"/><Cell col=\"5\" text=\"bind:ALT_USE\" tooltiptext=\"bind:ALT_USE\"/><Cell col=\"6\" displaytype=\"normal\" text=\"bind:IS_RPTST\" tooltiptext=\"bind:IS_RPTST\"/></Band></Format></Formats>");
            this.Tab00.tabpage4.divViewCompBody00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage6", this.Tab00);
            obj.set_text("결재정보");
            this.Tab00.addChild(obj.name, obj);
            obj = new Div("divViewCompBody00", "absolute", "0%", "5", null, "192", "0%", null, this.Tab00.tabpage6);
            obj.set_taborder("0");
            obj.set_text("divViewCompBody00");
            obj.getSetter("objNm").set("DIV-평가서 상세");
            this.Tab00.tabpage6.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "0", null, "33", "0", null, this.Tab00.tabpage6.divViewCompBody00);
            obj.set_taborder("68");
            obj.set_text("staViewCompLine00");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab00.tabpage6.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "31", null, "33", "0", null, this.Tab00.tabpage6.divViewCompBody00);
            obj.set_taborder("69");
            obj.set_text("staViewCompLine01");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab00.tabpage6.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "63", null, "33", "0", null, this.Tab00.tabpage6.divViewCompBody00);
            obj.set_taborder("70");
            obj.set_text("staViewCompLine02");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab00.tabpage6.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staPymtBnk", "absolute", "0", "0", "171", "33", null, null, this.Tab00.tabpage6.divViewCompBody00);
            obj.set_taborder("71");
            obj.set_text("거래은행");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.Tab00.tabpage6.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staPymtBnkAddr", "absolute", "0", "31", "171", "33", null, null, this.Tab00.tabpage6.divViewCompBody00);
            obj.set_taborder("72");
            obj.set_text("거래은행주소");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.Tab00.tabpage6.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staBnkAcntNo", "absolute", "0", "63", "171", "33", null, null, this.Tab00.tabpage6.divViewCompBody00);
            obj.set_taborder("73");
            obj.set_text("계좌정보");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.Tab00.tabpage6.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtPymtBnk", "absolute", "176", "4", "357", "24", null, null, this.Tab00.tabpage6.divViewCompBody00);
            obj.set_taborder("74");
            obj.set_lengthunit("utf8");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("거래은행");
            this.Tab00.tabpage6.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtPymtBnkAddr", "absolute", "176", "35", "357", "24", null, null, this.Tab00.tabpage6.divViewCompBody00);
            obj.set_taborder("75");
            obj.set_lengthunit("utf8");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("거래은행주소");
            this.Tab00.tabpage6.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtBnkAcntNo", "absolute", "176", "67", "357", "24", null, null, this.Tab00.tabpage6.divViewCompBody00);
            obj.set_taborder("76");
            obj.set_inputtype("number");
            obj.set_lengthunit("utf8");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("계좌정보");
            this.Tab00.tabpage6.divViewCompBody00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage7", this.Tab00);
            obj.set_text("정기평가이력");
            this.Tab00.addChild(obj.name, obj);
            obj = new Div("divViewCompBody00", "absolute", "0", "5", null, "363", "0", null, this.Tab00.tabpage7);
            obj.set_taborder("0");
            obj.getSetter("objNm").set("DIV-평가서 상세");
            this.Tab00.tabpage7.addChild(obj.name, obj);
            obj = new Grid("grdEvalList", "absolute", "0", "0", null, null, "0", "0", this.Tab00.tabpage7.divViewCompBody00);
            obj.set_taborder("0");
            obj.set_binddataset("dsEval");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellclickbound("cell");
            obj.getSetter("objNm").set("평가이력 grid");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"125\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"114\"/><Column size=\"90\"/><Column size=\"160\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"평가완료일시\" tooltiptext=\"\"/><Cell col=\"1\" expr=\"\" text=\"평가점수\" tooltiptext=\"\"/><Cell col=\"2\" expr=\"\" text=\"품질\" tooltiptext=\"\"/><Cell col=\"3\" expr=\"\" text=\"원가절감\" tooltiptext=\"\"/><Cell col=\"4\" expr=\"\" text=\"기술력\" tooltiptext=\"\"/><Cell col=\"5\" expr=\"\" text=\"납기관리\" tooltiptext=\"\"/><Cell col=\"6\" expr=\"\" text=\"경영/재무\" tooltiptext=\"\"/><Cell col=\"7\" expr=\"\" text=\"평가기준일(FROM)\" tooltiptext=\"\"/><Cell col=\"8\" expr=\"\" text=\"평가기준일(TO)\" tooltiptext=\"\"/><Cell col=\"9\" expr=\"\" text=\"평가자\" tooltiptext=\"\"/></Band><Band id=\"body\"><Cell calendardisplaynulltype=\"none\" displaytype=\"normal\" text=\"bind:EVAL_CMPLT_DT\" tooltiptext=\"bind:EVAL_CMPLT_DT\"/><Cell col=\"1\" style=\"color:EXPR(ALT_EVAL_CMPLT==&quot;Y&quot;?&quot;#0044ffff&quot;:&quot;&quot;);color2:EXPR(ALT_EVAL_CMPLT==&quot;Y&quot;?&quot;#0044ffff&quot;:&quot;&quot;);font:EXPR(ALT_EVAL_CMPLT==&quot;Y&quot;?&quot;underline 9 Gulim&quot;:&quot;&quot;);selectcolor:EXPR(ALT_EVAL_CMPLT==&quot;Y&quot;?&quot;#0044ffff&quot;:&quot;&quot;);\" text=\"bind:EVAL_SCORE\" tooltiptext=\"bind:EVAL_SCORE\"/><Cell col=\"2\" text=\"bind:RT_Q\" tooltiptext=\"bind:RT_Q\"/><Cell col=\"3\" text=\"bind:RT_C\" tooltiptext=\"bind:RT_C\"/><Cell col=\"4\" text=\"bind:RT_T\" tooltiptext=\"bind:RT_T\"/><Cell col=\"5\" text=\"bind:RT_D\" tooltiptext=\"bind:RT_D\"/><Cell col=\"6\" text=\"bind:RT_F\" tooltiptext=\"bind:RT_F\"/><Cell calendardisplaynulltype=\"none\" col=\"7\" displaytype=\"date\" mask=\"yyyy-MM-dd\" text=\"bind:EVAL_STD_BGN_DAY\" tooltiptext=\"bind:EVAL_STD_BGN_DAY\"/><Cell calendardisplaynulltype=\"none\" col=\"8\" displaytype=\"date\" mask=\"yyyy-MM-dd\" text=\"bind:EVAL_STD_END_DAY\" tooltiptext=\"bind:EVAL_STD_END_DAY\"/><Cell col=\"9\" text=\"bind:EVAL_CHRGR_NM\" tooltiptext=\"bind:EVAL_CHRGR_NM\"/></Band></Format></Formats>");
            this.Tab00.tabpage7.divViewCompBody00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage8", this.Tab00);
            obj.set_text("관련문서");
            this.Tab00.addChild(obj.name, obj);
            obj = new Div("divViewCompBody01", "absolute", "0", "5", "1000", "252", null, null, this.Tab00.tabpage8);
            obj.set_taborder("0");
            obj.set_text("divViewCompBody01");
            obj.getSetter("objNm").set("DIV-평가서 상세");
            this.Tab00.tabpage8.addChild(obj.name, obj);
            obj = new Grid("grdReqFile", "absolute", "0", "0", null, null, "0", "0", this.Tab00.tabpage8.divViewCompBody01);
            obj.set_taborder("0");
            obj.set_binddataset("dsReqFile");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("comboselect");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_cellclickbound("cell");
            obj.set_selectscrollmode("scroll");
            obj.getSetter("objNm").set("요청파일grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"43\"/><Column size=\"750\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"첨부파일명\"/><Cell col=\"2\" text=\"필수여부\"/><Cell col=\"3\" text=\"다운로드\"/></Band><Band id=\"body\"><Cell text=\"bind:NO\" tooltiptext=\"bind:NO\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:FILE_NM\" expr=\"expr:gfnMultiLabel(FILE_NM)\" tooltiptext=\"expr:gfnMultiLabel(FILE_NM)\"/><Cell col=\"2\" displaytype=\"checkbox\" text=\"bind:CHECKED\"/><Cell col=\"3\" displaytype=\"button\" edittype=\"button\" style=\"controlbackground:center middle;controlborder:1 none #808080ff ;\" text=\" \" editdisplay=\"display\"/></Band></Format></Formats>");
            this.Tab00.tabpage8.divViewCompBody01.addChild(obj.name, obj);


            
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
            obj = new Layout("default", "", 993, 139, this.Tab00.tabpage1.divViewCompTitle00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("35");
            		p.getSetter("objNm").set("DIV-평가서 타이틀");

            	}
            );
            this.Tab00.tabpage1.divViewCompTitle00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.Tab00.tabpage1.divViewCompTitle03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("36");
            		p.getSetter("objNm").set("DIV-평가서 타이틀");

            	}
            );
            this.Tab00.tabpage1.divViewCompTitle03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 103, this.Tab00.tabpage1.divViewCompBody03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("37");
            		p.getSetter("objNm").set("DIV-평가서 상세");

            	}
            );
            this.Tab00.tabpage1.divViewCompBody03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.Tab00.tabpage1.divViewCompTitle02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("39");
            		p.getSetter("objNm").set("DIV-평가서 타이틀");

            	}
            );
            this.Tab00.tabpage1.divViewCompTitle02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 66, this.Tab00.tabpage1.divViewCompBody01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("40");
            		p.getSetter("objNm").set("DIV-평가서 상세");

            	}
            );
            this.Tab00.tabpage1.divViewCompBody01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.Tab00.tabpage1.divViewCompTitle01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("41");
            		p.getSetter("objNm").set("DIV-평가서 타이틀");

            	}
            );
            this.Tab00.tabpage1.divViewCompTitle01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 99, this.Tab00.tabpage1.divViewCompBody02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("42");
            		p.getSetter("objNm").set("DIV-평가서 상세");

            	}
            );
            this.Tab00.tabpage1.divViewCompBody02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.Tab00.tabpage1.divViewCompTitle04,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("43");
            		p.getSetter("objNm").set("DIV-평가서 타이틀");

            	}
            );
            this.Tab00.tabpage1.divViewCompTitle04.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 290, this.Tab00.tabpage1.divViewCompBody04,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("44");
            		p.getSetter("objNm").set("DIV-평가서 상세");

            	}
            );
            this.Tab00.tabpage1.divViewCompBody04.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.Tab00.tabpage1.divViewCompTitle05,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("45");
            		p.getSetter("objNm").set("DIV-공장유무 타이틀");

            	}
            );
            this.Tab00.tabpage1.divViewCompTitle05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.Tab00.tabpage1.divViewCompTitle06,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("46");
            		p.getSetter("objNm").set("DIV-신용평가서 타이틀");

            	}
            );
            this.Tab00.tabpage1.divViewCompTitle06.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 173, this.Tab00.tabpage1.divViewCompBody05,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("47");
            		p.getSetter("objNm").set("DIV-평가서 상세");

            	}
            );
            this.Tab00.tabpage1.divViewCompBody05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 66, this.Tab00.tabpage1.divViewCompBody06,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("48");
            		p.getSetter("objNm").set("DIV-평가서 상세");

            	}
            );
            this.Tab00.tabpage1.divViewCompBody06.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 322, this.Tab00.tabpage1.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("49");
            		p.getSetter("objNm").set("DIV-평가서 상세");

            	}
            );
            this.Tab00.tabpage1.divViewCompBody00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.Tab00.tabpage1.divViewCompTitle07,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("50");
            		p.getSetter("objNm").set("DIV-신용평가서 타이틀");

            	}
            );
            this.Tab00.tabpage1.divViewCompTitle07.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 196, this.Tab00.tabpage1.divViewCompBody07,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("51");
            		p.getSetter("objNm").set("DIV-주요실적");

            	}
            );
            this.Tab00.tabpage1.divViewCompBody07.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1207, 1764, this.Tab00.tabpage1,
            	//-- Layout function
            	function(p) {
            		p.set_text("기본정보");

            	}
            );
            this.Tab00.tabpage1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 230, this.Tab00.tabpage2.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.getSetter("objNm").set("DIV-평가서 상세");

            	}
            );
            this.Tab00.tabpage2.divViewCompBody00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab00.tabpage2,
            	//-- Layout function
            	function(p) {
            		p.set_text("구매정보");

            	}
            );
            this.Tab00.tabpage2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 403, this.Tab00.tabpage3.divViewCompBody02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.getSetter("objNm").set("DIV-평가서 상세");

            	}
            );
            this.Tab00.tabpage3.divViewCompBody02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab00.tabpage3,
            	//-- Layout function
            	function(p) {
            		p.set_text("관리카드");

            	}
            );
            this.Tab00.tabpage3.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 477, this.Tab00.tabpage4.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.getSetter("objNm").set("DIV-평가서 상세");

            	}
            );
            this.Tab00.tabpage4.divViewCompBody00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab00.tabpage4,
            	//-- Layout function
            	function(p) {
            		p.set_text("사용자현황");

            	}
            );
            this.Tab00.tabpage4.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 192, this.Tab00.tabpage6.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("divViewCompBody00");
            		p.getSetter("objNm").set("DIV-평가서 상세");

            	}
            );
            this.Tab00.tabpage6.divViewCompBody00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1207, 1764, this.Tab00.tabpage6,
            	//-- Layout function
            	function(p) {
            		p.set_text("결재정보");

            	}
            );
            this.Tab00.tabpage6.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 363, this.Tab00.tabpage7.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.getSetter("objNm").set("DIV-평가서 상세");

            	}
            );
            this.Tab00.tabpage7.divViewCompBody00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab00.tabpage7,
            	//-- Layout function
            	function(p) {
            		p.set_text("정기평가이력");

            	}
            );
            this.Tab00.tabpage7.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1000, 252, this.Tab00.tabpage8.divViewCompBody01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("divViewCompBody01");
            		p.getSetter("objNm").set("DIV-평가서 상세");

            	}
            );
            this.Tab00.tabpage8.divViewCompBody01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1207, 1764, this.Tab00.tabpage8,
            	//-- Layout function
            	function(p) {
            		p.set_text("관련문서");

            	}
            );
            this.Tab00.tabpage8.addLayout(obj.name, obj);

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
            obj = new BindItem("medtEvalDateVi","Tab00.tabpage1.divViewCompBody00.medtEvalDate","visible","dsObjBindVi","medtEvalDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medtEvalDateEn","Tab00.tabpage1.divViewCompBody00.medtEvalDate","readonly","dsObjBindEn","medtEvalDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("LabelLang3","Tab00.tabpage1.divViewCompBody00.staCorpRegNo","text","gdsLabel","EPRO_LABEL_00534");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("LabelLang7","Tab00.tabpage1.divViewCompBody00.staBizType","text","gdsLabel","EPRO_LABEL_00491");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("LabelLang15","Tab00.tabpage1.divViewCompBody00.staEval","text","gdsLabel","EPRO_LABEL_00215");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("LabelLang20","Tab00.tabpage1.divViewCompBody01.staRprstvHp","text","gdsLabel","EPRO_LABEL_00604");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("LabelLang24","Tab00.tabpage1.divViewCompBody03.staUserNm","text","gdsLabel","EPRO_LABEL_00082");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("LabelLang28","Tab00.tabpage1.divViewCompBody03.staHp","text","gdsLabel","EPRO_LABEL_00604");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("LabelLang32","Tab00.tabpage1.divViewCompBody04.staDebt","text","gdsLabel","EPRO_LABEL_00095");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("LabelLang40","Tab00.tabpage1.divViewCompBody04.staWon03","text","gdsLabel","EPRO_LABEL_00411");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("LabelLang48","Tab00.tabpage1.divViewCompBody04.staSales00","text","gdsLabel","EPRO_LABEL_01034");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("LabelLang52","Tab00.tabpage1.divViewCompBody04.Static01","text","gdsLabel","EPRO_LABEL_00411");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("LabelLang56","Tab00.tabpage1.divViewCompTitle04.staViewCompTitle04","text","gdsLabel","EPRO_LABEL_00336");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("LabelLang60","Tab00.tabpage1.divViewCompTitle00.staViewCompTitle00","text","gdsLabel","EPRO_LABEL_00047");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("LabelLang64","Tab00.tabpage1.divViewCompBody06.staSquar","text","gdsLabel","EPRO_LABEL_01022");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("LabelLang71","Tab00.tabpage2.divViewCompBody00.staInoutType","text","gdsLabel","EPRO_LABEL_00554");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("LabelLang80","Tab00.tabpage5","text","gdsLabel","EPRO_LABEL_00778");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("LabelLang95","Tab00.tabpage1.divViewCompBody00.staNation","text","gdsLabel","EPRO_LABEL_01033");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("LabelLang106","Tab00.tabpage8","text","gdsLabel","EPRO_LABEL_01036");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab00Vi","Tab00","visible","dsObjBindVi","Tab00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab00En","Tab00","enable","dsObjBindEn","Tab00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabpage1Vi","Tab00.tabpage1","visible","dsObjBindVi","tabpage1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabpage1En","Tab00.tabpage1","enable","dsObjBindEn","tabpage1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staUserNmVi","Tab00.tabpage1.divViewCompBody03.staUserNm","visible","dsObjBindVi","staUserNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staUserNmEn","Tab00.tabpage1.divViewCompBody03.staUserNm","enable","dsObjBindEn","staUserNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staEmailVi","Tab00.tabpage1.divViewCompBody03.staEmail","visible","dsObjBindVi","staEmail");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staEmailEn","Tab00.tabpage1.divViewCompBody03.staEmail","enable","dsObjBindEn","staEmail");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtUserNmVi","Tab00.tabpage1.divViewCompBody03.edtUserNm","visible","dsObjBindVi","edtUserNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtUserNmEn","Tab00.tabpage1.divViewCompBody03.edtUserNm","readonly","dsObjBindEn","edtUserNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtEmailVi","Tab00.tabpage1.divViewCompBody03.edtEmail","visible","dsObjBindVi","edtEmail");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtEmailEn","Tab00.tabpage1.divViewCompBody03.edtEmail","readonly","dsObjBindEn","edtEmail");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPstnVi","Tab00.tabpage1.divViewCompBody03.staPstn","visible","dsObjBindVi","staPstn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPstnEn","Tab00.tabpage1.divViewCompBody03.staPstn","enable","dsObjBindEn","staPstn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPstnVi","Tab00.tabpage1.divViewCompBody03.edtPstn","visible","dsObjBindVi","edtPstn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPstnEn","Tab00.tabpage1.divViewCompBody03.edtPstn","readonly","dsObjBindEn","edtPstn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staHpVi","Tab00.tabpage1.divViewCompBody03.staHp","visible","dsObjBindVi","staHp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staHpEn","Tab00.tabpage1.divViewCompBody03.staHp","enable","dsObjBindEn","staHp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtHpVi","Tab00.tabpage1.divViewCompBody03.edtHp","visible","dsObjBindVi","edtHp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtHpEn","Tab00.tabpage1.divViewCompBody03.edtHp","readonly","dsObjBindEn","edtHp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staDeptNmVi","Tab00.tabpage1.divViewCompBody03.staDeptNm","visible","dsObjBindVi","staDeptNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staDeptNmEn","Tab00.tabpage1.divViewCompBody03.staDeptNm","enable","dsObjBindEn","staDeptNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTelVi","Tab00.tabpage1.divViewCompBody03.staTel","visible","dsObjBindVi","staTel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTelEn","Tab00.tabpage1.divViewCompBody03.staTel","enable","dsObjBindEn","staTel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTelVi","Tab00.tabpage1.divViewCompBody03.edtTel","visible","dsObjBindVi","edtTel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTelEn","Tab00.tabpage1.divViewCompBody03.edtTel","readonly","dsObjBindEn","edtTel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDeptNmVi","Tab00.tabpage1.divViewCompBody03.edtDeptNm","visible","dsObjBindVi","edtDeptNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDeptNmEn","Tab00.tabpage1.divViewCompBody03.edtDeptNm","readonly","dsObjBindEn","edtDeptNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("wbBizNoVi","Tab00.tabpage1.wbBizNo","visible","dsObjBindVi","wbBizNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("wbBizNoEn","Tab00.tabpage1.wbBizNo","enable","dsObjBindEn","wbBizNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRprstvNmVi","Tab00.tabpage1.divViewCompBody01.staRprstvNm","visible","dsObjBindVi","staRprstvNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRprstvNmEn","Tab00.tabpage1.divViewCompBody01.staRprstvNm","enable","dsObjBindEn","staRprstvNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRprstvNmVi","Tab00.tabpage1.divViewCompBody01.edtRprstvNm","visible","dsObjBindVi","edtRprstvNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRprstvNmEn","Tab00.tabpage1.divViewCompBody01.edtRprstvNm","readonly","dsObjBindEn","edtRprstvNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRprstvEmailVi","Tab00.tabpage1.divViewCompBody01.staRprstvEmail","visible","dsObjBindVi","staRprstvEmail");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRprstvEmailEn","Tab00.tabpage1.divViewCompBody01.staRprstvEmail","enable","dsObjBindEn","staRprstvEmail");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRprstvEmailVi","Tab00.tabpage1.divViewCompBody01.edtRprstvEmail","visible","dsObjBindVi","edtRprstvEmail");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRprstvEmailEn","Tab00.tabpage1.divViewCompBody01.edtRprstvEmail","readonly","dsObjBindEn","edtRprstvEmail");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRprstvHpVi","Tab00.tabpage1.divViewCompBody01.staRprstvHp","visible","dsObjBindVi","staRprstvHp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRprstvHpEn","Tab00.tabpage1.divViewCompBody01.staRprstvHp","enable","dsObjBindEn","staRprstvHp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRprstvHpVi","Tab00.tabpage1.divViewCompBody01.edtRprstvHp","visible","dsObjBindVi","edtRprstvHp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRprstvHpEn","Tab00.tabpage1.divViewCompBody01.edtRprstvHp","readonly","dsObjBindEn","edtRprstvHp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRprstTelVi","Tab00.tabpage1.divViewCompBody01.staRprstTel","visible","dsObjBindVi","staRprstTel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRprstTelEn","Tab00.tabpage1.divViewCompBody01.staRprstTel","enable","dsObjBindEn","staRprstTel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRprstTelVi","Tab00.tabpage1.divViewCompBody01.edtRprstTel","visible","dsObjBindVi","edtRprstTel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRprstTelEn","Tab00.tabpage1.divViewCompBody01.edtRprstTel","readonly","dsObjBindEn","edtRprstTel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staZipNoVi","Tab00.tabpage1.divViewCompBody02.staZipNo","visible","dsObjBindVi","staZipNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staZipNoEn","Tab00.tabpage1.divViewCompBody02.staZipNo","enable","dsObjBindEn","staZipNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtZipNoVi","Tab00.tabpage1.divViewCompBody02.edtZipNo","visible","dsObjBindVi","edtZipNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtZipNoEn","Tab00.tabpage1.divViewCompBody02.edtZipNo","readonly","dsObjBindEn","edtZipNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAddrVi","Tab00.tabpage1.divViewCompBody02.staAddr","visible","dsObjBindVi","staAddr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAddrEn","Tab00.tabpage1.divViewCompBody02.staAddr","enable","dsObjBindEn","staAddr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtAddrVi","Tab00.tabpage1.divViewCompBody02.edtAddr","visible","dsObjBindVi","edtAddr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtAddrEn","Tab00.tabpage1.divViewCompBody02.edtAddr","readonly","dsObjBindEn","edtAddr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staDtlAddrVi","Tab00.tabpage1.divViewCompBody02.staDtlAddr","visible","dsObjBindVi","staDtlAddr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staDtlAddrEn","Tab00.tabpage1.divViewCompBody02.staDtlAddr","enable","dsObjBindEn","staDtlAddr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDtlAddrVi","Tab00.tabpage1.divViewCompBody02.edtDtlAddr","visible","dsObjBindVi","edtDtlAddr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDtlAddrEn","Tab00.tabpage1.divViewCompBody02.edtDtlAddr","readonly","dsObjBindEn","edtDtlAddr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAstVi","Tab00.tabpage1.divViewCompBody04.staAst","visible","dsObjBindVi","staAst");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAstEn","Tab00.tabpage1.divViewCompBody04.staAst","enable","dsObjBindEn","staAst");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medAstVi","Tab00.tabpage1.divViewCompBody04.medAst","visible","dsObjBindVi","medAst");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medAstEn","Tab00.tabpage1.divViewCompBody04.medAst","readonly","dsObjBindEn","medAst");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staWon01Vi","Tab00.tabpage1.divViewCompBody04.staWon01","visible","dsObjBindVi","staWon01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staWon01En","Tab00.tabpage1.divViewCompBody04.staWon01","enable","dsObjBindEn","staWon01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCaplVi","Tab00.tabpage1.divViewCompBody04.staCapl","visible","dsObjBindVi","staCapl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCaplEn","Tab00.tabpage1.divViewCompBody04.staCapl","enable","dsObjBindEn","staCapl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medCaplVi","Tab00.tabpage1.divViewCompBody04.medCapl","visible","dsObjBindVi","medCapl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medCaplEn","Tab00.tabpage1.divViewCompBody04.medCapl","readonly","dsObjBindEn","medCapl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staWon02Vi","Tab00.tabpage1.divViewCompBody04.staWon02","visible","dsObjBindVi","staWon02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staWon02En","Tab00.tabpage1.divViewCompBody04.staWon02","enable","dsObjBindEn","staWon02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staDebtVi","Tab00.tabpage1.divViewCompBody04.staDebt","visible","dsObjBindVi","staDebt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staDebtEn","Tab00.tabpage1.divViewCompBody04.staDebt","enable","dsObjBindEn","staDebt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medDebtVi","Tab00.tabpage1.divViewCompBody04.medDebt","visible","dsObjBindVi","medDebt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medDebtEn","Tab00.tabpage1.divViewCompBody04.medDebt","readonly","dsObjBindEn","medDebt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staWon03Vi","Tab00.tabpage1.divViewCompBody04.staWon03","visible","dsObjBindVi","staWon03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staWon03En","Tab00.tabpage1.divViewCompBody04.staWon03","enable","dsObjBindEn","staWon03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staEmpCntVi","Tab00.tabpage1.divViewCompBody04.staEmpCnt","visible","dsObjBindVi","staEmpCnt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staEmpCntEn","Tab00.tabpage1.divViewCompBody04.staEmpCnt","enable","dsObjBindEn","staEmpCnt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medEmpCntVi","Tab00.tabpage1.divViewCompBody04.medEmpCnt","visible","dsObjBindVi","medEmpCnt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medEmpCntEn","Tab00.tabpage1.divViewCompBody04.medEmpCnt","readonly","dsObjBindEn","medEmpCnt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPer01Vi","Tab00.tabpage1.divViewCompBody04.staPer01","visible","dsObjBindVi","staPer01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPer01En","Tab00.tabpage1.divViewCompBody04.staPer01","enable","dsObjBindEn","staPer01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staMjrCstmrVi","Tab00.tabpage1.divViewCompBody04.staMjrCstmr","visible","dsObjBindVi","staMjrCstmr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staMjrCstmrEn","Tab00.tabpage1.divViewCompBody04.staMjrCstmr","enable","dsObjBindEn","staMjrCstmr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSalesVi","Tab00.tabpage1.divViewCompBody04.staSales","visible","dsObjBindVi","staSales");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSalesEn","Tab00.tabpage1.divViewCompBody04.staSales","enable","dsObjBindEn","staSales");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staYr1Vi","Tab00.tabpage1.divViewCompBody04.staYr1","visible","dsObjBindVi","staYr1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staYr1En","Tab00.tabpage1.divViewCompBody04.staYr1","enable","dsObjBindEn","staYr1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("maeSalesAmt1Vi","Tab00.tabpage1.divViewCompBody04.maeSalesAmt1","visible","dsObjBindVi","maeSalesAmt1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("maeSalesAmt1En","Tab00.tabpage1.divViewCompBody04.maeSalesAmt1","readonly","dsObjBindEn","maeSalesAmt1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static06Vi","Tab00.tabpage1.divViewCompBody04.Static06","visible","dsObjBindVi","Static06");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static06En","Tab00.tabpage1.divViewCompBody04.Static06","enable","dsObjBindEn","Static06");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staYr2Vi","Tab00.tabpage1.divViewCompBody04.staYr2","visible","dsObjBindVi","staYr2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staYr2En","Tab00.tabpage1.divViewCompBody04.staYr2","enable","dsObjBindEn","staYr2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("maeSalesAmt2Vi","Tab00.tabpage1.divViewCompBody04.maeSalesAmt2","visible","dsObjBindVi","maeSalesAmt2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("maeSalesAmt2En","Tab00.tabpage1.divViewCompBody04.maeSalesAmt2","readonly","dsObjBindEn","maeSalesAmt2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static14Vi","Tab00.tabpage1.divViewCompBody04.Static14","visible","dsObjBindVi","Static14");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static14En","Tab00.tabpage1.divViewCompBody04.Static14","enable","dsObjBindEn","Static14");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staYr3Vi","Tab00.tabpage1.divViewCompBody04.staYr3","visible","dsObjBindVi","staYr3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staYr3En","Tab00.tabpage1.divViewCompBody04.staYr3","enable","dsObjBindEn","staYr3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("maeSalesAmt3Vi","Tab00.tabpage1.divViewCompBody04.maeSalesAmt3","visible","dsObjBindVi","maeSalesAmt3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("maeSalesAmt3En","Tab00.tabpage1.divViewCompBody04.maeSalesAmt3","readonly","dsObjBindEn","maeSalesAmt3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static16Vi","Tab00.tabpage1.divViewCompBody04.Static16","visible","dsObjBindVi","Static16");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static16En","Tab00.tabpage1.divViewCompBody04.Static16","enable","dsObjBindEn","Static16");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txt_mjrCstmrVi","Tab00.tabpage1.divViewCompBody04.txt_mjrCstmr","visible","dsObjBindVi","txt_mjrCstmr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txt_mjrCstmrEn","Tab00.tabpage1.divViewCompBody04.txt_mjrCstmr","readonly","dsObjBindEn","txt_mjrCstmr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSales00Vi","Tab00.tabpage1.divViewCompBody04.staSales00","visible","dsObjBindVi","staSales00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSales00En","Tab00.tabpage1.divViewCompBody04.staSales00","enable","dsObjBindEn","staSales00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staYr00Vi","Tab00.tabpage1.divViewCompBody04.staYr00","visible","dsObjBindVi","staYr00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staYr00En","Tab00.tabpage1.divViewCompBody04.staYr00","enable","dsObjBindEn","staYr00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("maeSalesAmt00Vi","Tab00.tabpage1.divViewCompBody04.maeSalesAmt00","visible","dsObjBindVi","maeSalesAmt00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("maeSalesAmt00En","Tab00.tabpage1.divViewCompBody04.maeSalesAmt00","readonly","dsObjBindEn","maeSalesAmt00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static00Vi","Tab00.tabpage1.divViewCompBody04.Static00","visible","dsObjBindVi","Static00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static00En","Tab00.tabpage1.divViewCompBody04.Static00","enable","dsObjBindEn","Static00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staYr04Vi","Tab00.tabpage1.divViewCompBody04.staYr04","visible","dsObjBindVi","staYr04");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staYr04En","Tab00.tabpage1.divViewCompBody04.staYr04","enable","dsObjBindEn","staYr04");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("maeSalesAmt04Vi","Tab00.tabpage1.divViewCompBody04.maeSalesAmt04","visible","dsObjBindVi","maeSalesAmt04");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("maeSalesAmt04En","Tab00.tabpage1.divViewCompBody04.maeSalesAmt04","readonly","dsObjBindEn","maeSalesAmt04");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static01Vi","Tab00.tabpage1.divViewCompBody04.Static01","visible","dsObjBindVi","Static01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static01En","Tab00.tabpage1.divViewCompBody04.Static01","enable","dsObjBindEn","Static01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staYr05Vi","Tab00.tabpage1.divViewCompBody04.staYr05","visible","dsObjBindVi","staYr05");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staYr05En","Tab00.tabpage1.divViewCompBody04.staYr05","enable","dsObjBindEn","staYr05");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("maeSalesAmt05Vi","Tab00.tabpage1.divViewCompBody04.maeSalesAmt05","visible","dsObjBindVi","maeSalesAmt05");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("maeSalesAmt05En","Tab00.tabpage1.divViewCompBody04.maeSalesAmt05","readonly","dsObjBindEn","maeSalesAmt05");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static02Vi","Tab00.tabpage1.divViewCompBody04.Static02","visible","dsObjBindVi","Static02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static02En","Tab00.tabpage1.divViewCompBody04.Static02","enable","dsObjBindEn","Static02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSquarVi","Tab00.tabpage1.divViewCompBody06.staSquar","visible","dsObjBindVi","staSquar");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSquarEn","Tab00.tabpage1.divViewCompBody06.staSquar","enable","dsObjBindEn","staSquar");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSquarVi","Tab00.tabpage1.divViewCompBody06.edtSquar","visible","dsObjBindVi","edtSquar");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSquarEn","Tab00.tabpage1.divViewCompBody06.edtSquar","readonly","dsObjBindEn","edtSquar");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSquar00Vi","Tab00.tabpage1.divViewCompBody06.staSquar00","visible","dsObjBindVi","staSquar00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSquar00En","Tab00.tabpage1.divViewCompBody06.staSquar00","enable","dsObjBindEn","staSquar00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSquar00Vi","Tab00.tabpage1.divViewCompBody06.edtSquar00","visible","dsObjBindVi","edtSquar00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSquar00En","Tab00.tabpage1.divViewCompBody06.edtSquar00","readonly","dsObjBindEn","edtSquar00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCorpRegNoVi","Tab00.tabpage1.divViewCompBody00.staCorpRegNo","visible","dsObjBindVi","staCorpRegNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCorpRegNoEn","Tab00.tabpage1.divViewCompBody00.staCorpRegNo","enable","dsObjBindEn","staCorpRegNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staBizCndtnVi","Tab00.tabpage1.divViewCompBody00.staBizCndtn","visible","dsObjBindVi","staBizCndtn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staBizCndtnEn","Tab00.tabpage1.divViewCompBody00.staBizCndtn","enable","dsObjBindEn","staBizCndtn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staBizTypeVi","Tab00.tabpage1.divViewCompBody00.staBizType","visible","dsObjBindVi","staBizType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staBizTypeEn","Tab00.tabpage1.divViewCompBody00.staBizType","enable","dsObjBindEn","staBizType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTel_12Vi","Tab00.tabpage1.divViewCompBody00.staTel","visible","dsObjBindVi","staTel_12");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTel_12En","Tab00.tabpage1.divViewCompBody00.staTel","enable","dsObjBindEn","staTel_12");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staFaxVi","Tab00.tabpage1.divViewCompBody00.staFax","visible","dsObjBindVi","staFax");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staFaxEn","Tab00.tabpage1.divViewCompBody00.staFax","enable","dsObjBindEn","staFax");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staBizBgnDayVi","Tab00.tabpage1.divViewCompBody00.staBizBgnDay","visible","dsObjBindVi","staBizBgnDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staBizBgnDayEn","Tab00.tabpage1.divViewCompBody00.staBizBgnDay","enable","dsObjBindEn","staBizBgnDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cldBizBgnDay_83Vi","Tab00.tabpage1.divViewCompBody00.cldBizBgnDay","visible","dsObjBindVi","cldBizBgnDay_83");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cldBizBgnDay_83En","Tab00.tabpage1.divViewCompBody00.cldBizBgnDay","readonly","dsObjBindEn","cldBizBgnDay_83");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtBizCndtnVi","Tab00.tabpage1.divViewCompBody00.edtBizCndtn","visible","dsObjBindVi","edtBizCndtn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtBizCndtnEn","Tab00.tabpage1.divViewCompBody00.edtBizCndtn","readonly","dsObjBindEn","edtBizCndtn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtBizTypeVi","Tab00.tabpage1.divViewCompBody00.edtBizType","visible","dsObjBindVi","edtBizType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtBizTypeEn","Tab00.tabpage1.divViewCompBody00.edtBizType","readonly","dsObjBindEn","edtBizType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTel_13Vi","Tab00.tabpage1.divViewCompBody00.edtTel","visible","dsObjBindVi","edtTel_13");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTel_13En","Tab00.tabpage1.divViewCompBody00.edtTel","readonly","dsObjBindEn","edtTel_13");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtFaxVi","Tab00.tabpage1.divViewCompBody00.edtFax","visible","dsObjBindVi","edtFax");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtFaxEn","Tab00.tabpage1.divViewCompBody00.edtFax","readonly","dsObjBindEn","edtFax");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staBizNoVi","Tab00.tabpage1.divViewCompBody00.staBizNo","visible","dsObjBindVi","staBizNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staBizNoEn","Tab00.tabpage1.divViewCompBody00.staBizNo","enable","dsObjBindEn","staBizNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPtnrNmVi","Tab00.tabpage1.divViewCompBody00.staPtnrNm","visible","dsObjBindVi","staPtnrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPtnrNmEn","Tab00.tabpage1.divViewCompBody00.staPtnrNm","enable","dsObjBindEn","staPtnrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPtnrNmVi","Tab00.tabpage1.divViewCompBody00.edtPtnrNm","visible","dsObjBindVi","edtPtnrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPtnrNmEn","Tab00.tabpage1.divViewCompBody00.edtPtnrNm","readonly","dsObjBindEn","edtPtnrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSapVendorVi","Tab00.tabpage1.divViewCompBody00.staSapVendor","visible","dsObjBindVi","staSapVendor");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSapVendorEn","Tab00.tabpage1.divViewCompBody00.staSapVendor","enable","dsObjBindEn","staSapVendor");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSapVendorVi","Tab00.tabpage1.divViewCompBody00.edtSapVendor","visible","dsObjBindVi","edtSapVendor");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSapVendorEn","Tab00.tabpage1.divViewCompBody00.edtSapVendor","readonly","dsObjBindEn","edtSapVendor");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRmarkVi","Tab00.tabpage1.divViewCompBody00.staRmark","visible","dsObjBindVi","staRmark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRmarkEn","Tab00.tabpage1.divViewCompBody00.staRmark","enable","dsObjBindEn","staRmark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staEvalVi","Tab00.tabpage1.divViewCompBody00.staEval","visible","dsObjBindVi","staEval");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staEvalEn","Tab00.tabpage1.divViewCompBody00.staEval","enable","dsObjBindEn","staEval");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtEvalVi","Tab00.tabpage1.divViewCompBody00.edtEval","visible","dsObjBindVi","edtEval");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtEvalEn","Tab00.tabpage1.divViewCompBody00.edtEval","readonly","dsObjBindEn","edtEval");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnEvalVi","Tab00.tabpage1.divViewCompBody00.View","visible","dsObjBindVi","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staEval00Vi","Tab00.tabpage1.divViewCompBody00.staEval00","visible","dsObjBindVi","staEval00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staEval00En","Tab00.tabpage1.divViewCompBody00.staEval00","enable","dsObjBindEn","staEval00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtEvalerIdVi","Tab00.tabpage1.divViewCompBody00.edtEvalerId","visible","dsObjBindVi","edtEvalerId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtEvalerIdEn","Tab00.tabpage1.divViewCompBody00.edtEvalerId","readonly","dsObjBindEn","edtEvalerId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medBizNoVi","Tab00.tabpage1.divViewCompBody00.medBizNo","visible","dsObjBindVi","medBizNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medBizNoEn","Tab00.tabpage1.divViewCompBody00.medBizNo","readonly","dsObjBindEn","medBizNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medtCorpRegNoVi","Tab00.tabpage1.divViewCompBody00.medtCorpRegNo","visible","dsObjBindVi","medtCorpRegNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medtCorpRegNoEn","Tab00.tabpage1.divViewCompBody00.medtCorpRegNo","readonly","dsObjBindEn","medtCorpRegNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabpage2Vi","Tab00.tabpage2","visible","dsObjBindVi","tabpage2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabpage2En","Tab00.tabpage2","enable","dsObjBindEn","tabpage2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAltAutoVi","Tab00.tabpage2.divViewCompBody00.staAltAuto","visible","dsObjBindVi","staAltAuto");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAltAutoEn","Tab00.tabpage2.divViewCompBody00.staAltAuto","enable","dsObjBindEn","staAltAuto");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cbxAltAutoVi","Tab00.tabpage2.divViewCompBody00.cbxAltAuto","visible","dsObjBindVi","cbxAltAuto");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cbxAltAutoEn","Tab00.tabpage2.divViewCompBody00.cbxAltAuto","readonly","dsObjBindEn","cbxAltAuto");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staVendorTypeVi","Tab00.tabpage2.divViewCompBody00.staVendorType","visible","dsObjBindVi","staVendorType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staVendorTypeEn","Tab00.tabpage2.divViewCompBody00.staVendorType","enable","dsObjBindEn","staVendorType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboVendorTypeVi","Tab00.tabpage2.divViewCompBody00.cboVendorType","visible","dsObjBindVi","cboVendorType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboVendorTypeEn","Tab00.tabpage2.divViewCompBody00.cboVendorType","readonly","dsObjBindEn","cboVendorType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabpage3Vi","Tab00.tabpage3","visible","dsObjBindVi","tabpage3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabpage3En","Tab00.tabpage3","enable","dsObjBindEn","tabpage3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabpage4Vi","Tab00.tabpage4","visible","dsObjBindVi","tabpage4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabpage4En","Tab00.tabpage4","enable","dsObjBindEn","tabpage4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabpage5Vi","Tab00.tabpage5","visible","dsObjBindVi","tabpage5");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabpage5En","Tab00.tabpage5","enable","dsObjBindEn","tabpage5");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("ImageViewer00Vi","Tab00.tabpage5.divViewCompBody01.ImageViewer00","visible","dsObjBindVi","ImageViewer00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("ImageViewer00En","Tab00.tabpage5.divViewCompBody01.ImageViewer00","enable","dsObjBindEn","ImageViewer00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabpage7Vi","Tab00.tabpage7","visible","dsObjBindVi","tabpage7");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabpage7En","Tab00.tabpage7","enable","dsObjBindEn","tabpage7");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabpage8Vi","Tab00.tabpage8","visible","dsObjBindVi","tabpage8");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabpage8En","Tab00.tabpage8","enable","dsObjBindEn","tabpage8");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabpage6Vi","Tab00.tabpage6","visible","dsObjBindVi","tabpage6");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabpage6En","Tab00.tabpage6","enable","dsObjBindEn","tabpage6");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPymtBnkVi","Tab00.tabpage6.divViewCompBody00.staPymtBnk","visible","dsObjBindVi","staPymtBnk");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPymtBnkEn","Tab00.tabpage6.divViewCompBody00.staPymtBnk","enable","dsObjBindEn","staPymtBnk");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPymtBnkAddrVi","Tab00.tabpage6.divViewCompBody00.staPymtBnkAddr","visible","dsObjBindVi","staPymtBnkAddr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPymtBnkAddrEn","Tab00.tabpage6.divViewCompBody00.staPymtBnkAddr","enable","dsObjBindEn","staPymtBnkAddr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staBnkAcntNoVi","Tab00.tabpage6.divViewCompBody00.staBnkAcntNo","visible","dsObjBindVi","staBnkAcntNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staBnkAcntNoEn","Tab00.tabpage6.divViewCompBody00.staBnkAcntNo","enable","dsObjBindEn","staBnkAcntNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPymtBnkVi","Tab00.tabpage6.divViewCompBody00.edtPymtBnk","visible","dsObjBindVi","edtPymtBnk");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPymtBnkEn","Tab00.tabpage6.divViewCompBody00.edtPymtBnk","readonly","dsObjBindEn","edtPymtBnk");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPymtBnkAddrVi","Tab00.tabpage6.divViewCompBody00.edtPymtBnkAddr","visible","dsObjBindVi","edtPymtBnkAddr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPymtBnkAddrEn","Tab00.tabpage6.divViewCompBody00.edtPymtBnkAddr","readonly","dsObjBindEn","edtPymtBnkAddr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtBnkAcntNoVi","Tab00.tabpage6.divViewCompBody00.edtBnkAcntNo","visible","dsObjBindVi","edtBnkAcntNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtBnkAcntNoEn","Tab00.tabpage6.divViewCompBody00.edtBnkAcntNo","readonly","dsObjBindEn","edtBnkAcntNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staNationVi","Tab00.tabpage1.divViewCompBody00.staNation","visible","dsObjBindVi","staNation");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staNationEn","Tab00.tabpage1.divViewCompBody00.staNation","enable","dsObjBindEn","staNation");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAreaVi","Tab00.tabpage1.divViewCompBody00.staArea","visible","dsObjBindVi","staArea");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAreaEn","Tab00.tabpage1.divViewCompBody00.staArea","enable","dsObjBindEn","staArea");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtAreaVi","Tab00.tabpage1.divViewCompBody00.edtArea","visible","dsObjBindVi","edtArea");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtAreaEn","Tab00.tabpage1.divViewCompBody00.edtArea","readonly","dsObjBindEn","edtArea");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staHompageVi","Tab00.tabpage1.divViewCompBody00.staHompage","visible","dsObjBindVi","staHompage");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staHompageEn","Tab00.tabpage1.divViewCompBody00.staHompage","enable","dsObjBindEn","staHompage");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboNationVi","Tab00.tabpage1.divViewCompBody00.cboNation","visible","dsObjBindVi","cboNation");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboNationEn","Tab00.tabpage1.divViewCompBody00.cboNation","readonly","dsObjBindEn","cboNation");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtHomepgeVi","Tab00.tabpage1.divViewCompBody00.edtHomepge","visible","dsObjBindVi","edtHomepge");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtHomepgeEn","Tab00.tabpage1.divViewCompBody00.edtHomepge","readonly","dsObjBindEn","edtHomepge");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staInoutTypeVi","Tab00.tabpage2.divViewCompBody00.staInoutType","visible","dsObjBindVi","staInoutType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staInoutTypeEn","Tab00.tabpage2.divViewCompBody00.staInoutType","enable","dsObjBindEn","staInoutType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboInoutTypeVi","Tab00.tabpage2.divViewCompBody00.cboInoutType","visible","dsObjBindVi","cboInoutType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboInoutTypeEn","Tab00.tabpage2.divViewCompBody00.cboInoutType","readonly","dsObjBindEn","cboInoutType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("grdMakerFormatId","Tab00.tabpage1.divViewCompBody07.grdMaker","formatid","dsObjBindGrid","grdMaker");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("grdMgmtFormatId","Tab00.tabpage3.divViewCompBody02.grdMgmt","formatid","dsObjBindGrid","grdMgmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("grdUserFormatId","Tab00.tabpage4.divViewCompBody00.grdUser","formatid","dsObjBindGrid","grdUser");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("grdLrgGrpFormatId","Tab00.tabpage5.divViewCompBody01.grdLrgGrp","formatid","dsObjBindGrid","grdLrgGrp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("grdMdlGrpFormatId","Tab00.tabpage5.divViewCompBody01.grdMdlGrp","formatid","dsObjBindGrid","grdMdlGrp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("grdSelectGrpFormatId","Tab00.tabpage5.divViewCompBody01.grdSelectGrp","formatid","dsObjBindGrid","grdSelectGrp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("grdReqFileFormatId","Tab00.tabpage8.divViewCompBody01.grdReqFile","formatid","dsObjBindGrid","grdReqFile");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("grdPlantFormatId","Tab00.tabpage1.divViewCompBody05.grdPlant","formatid","dsObjBindGrid","grdPlant");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","Tab00.tabpage1.divViewCompBody00.edtPtnrNm","value","dsPtnr","PTNR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Tab00.tabpage1.divViewCompBody00.medBizNo","value","dsPtnr","BIZ_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Tab00.tabpage1.divViewCompBody00.medtCorpRegNo","value","dsPtnr","CORP_REG_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Tab00.tabpage1.divViewCompBody00.cldBizBgnDay","value","dsPtnr","BIZ_BGN_DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Tab00.tabpage1.divViewCompBody00.edtSapVendor","value","dsPtnr","SAP_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Tab00.tabpage1.divViewCompBody00.edtBizCndtn","value","dsPtnr","BIZ_CNDTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Tab00.tabpage1.divViewCompBody00.edtBizType","value","dsPtnr","BIZ_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Tab00.tabpage1.divViewCompBody00.edtTel","value","dsPtnr","TEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Tab00.tabpage1.divViewCompBody00.edtFax","value","dsPtnr","FAX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Tab00.tabpage1.divViewCompBody00.edtEval","value","dsPtnr","TRD_EVAL_SCORE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","Tab00.tabpage1.divViewCompBody00.edtEvalerId","value","dsPtnr","EVAL_CHRG_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","Tab00.tabpage1.divViewCompBody01.edtRprstvNm","value","dsPtnr","RPRSTV_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","Tab00.tabpage1.divViewCompBody01.edtRprstvEmail","value","dsPtnr","RPRSTV_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","Tab00.tabpage1.divViewCompBody01.edtRprstvHp","value","dsPtnr","RPRSTV_HP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","Tab00.tabpage1.divViewCompBody01.edtRprstTel","value","dsPtnr","RPTST_TEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","Tab00.tabpage1.divViewCompBody02.edtZipNo","value","dsPtnr","ZIP_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","Tab00.tabpage1.divViewCompBody02.edtAddr","value","dsPtnr","ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","Tab00.tabpage1.divViewCompBody02.edtDtlAddr","value","dsPtnr","DTL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","Tab00.tabpage1.divViewCompBody03.edtUserNm","value","dsPtnr","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","Tab00.tabpage1.divViewCompBody03.edtTel","value","dsPtnr","USER_TEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","Tab00.tabpage1.divViewCompBody03.edtEmail","value","dsPtnr","USER_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","Tab00.tabpage1.divViewCompBody03.edtHp","value","dsPtnr","USER_HP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","Tab00.tabpage1.divViewCompBody03.edtPstn","value","dsPtnr","USER_PSTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","Tab00.tabpage1.divViewCompBody03.edtDeptNm","value","dsPtnr","USER_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","Tab00.tabpage1.divViewCompBody04.medAst","value","dsPtnr","AST");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","Tab00.tabpage1.divViewCompBody04.medDebt","value","dsPtnr","DEBT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","Tab00.tabpage1.divViewCompBody04.medCapl","value","dsPtnr","CAPL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","Tab00.tabpage1.divViewCompBody04.medEmpCnt","value","dsPtnr","EMP_CNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","Tab00.tabpage1.divViewCompBody04.txt_mjrCstmr","value","dsPtnr","MJR_CSTMR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","Tab00.tabpage1.divViewCompBody04.staYr1","text","dsPtnr","YR_1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item38","Tab00.tabpage1.divViewCompBody04.staYr00","text","dsPtnr","YR_1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item39","Tab00.tabpage1.divViewCompBody04.staYr2","text","dsPtnr","YR_2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item40","Tab00.tabpage1.divViewCompBody04.staYr04","text","dsPtnr","YR_2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","Tab00.tabpage1.divViewCompBody04.staYr3","text","dsPtnr","YR_3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item42","Tab00.tabpage1.divViewCompBody04.staYr05","text","dsPtnr","YR_3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item47","Tab00.tabpage2.divViewCompBody00.cbxAltAuto","value","dsPtnr","ALT_AUTO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item49","Tab00.tabpage2.divViewCompBody00.cboVendorType","value","dsPtnr","CD_VTYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item50","Tab00.tabpage2.divViewCompBody00.cboInoutType","value","dsPtnr","CD_INOUT_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item45","Tab00.tabpage1.divViewCompBody00.edtArea","value","dsPtnr","AREA");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item51","Tab00.tabpage1.divViewCompBody00.edtHomepge","value","dsPtnr","HM_PG");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item52","Tab00.tabpage1.divViewCompBody00.cboNation","value","dsPtnr","CD_NATION");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item62","Tab00.tabpage6.divViewCompBody00.edtPymtBnk","value","dsPtnr","PYMT_BNK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item63","Tab00.tabpage6.divViewCompBody00.edtPymtBnkAddr","value","dsPtnr","PYMT_BNK_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item64","Tab00.tabpage6.divViewCompBody00.edtBnkAcntNo","value","dsPtnr","BNK_ACNT_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","Tab00.tabpage1.divViewCompBody00.medtEvalDate","value","dsPtnr","TRDEVAL_END_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item43","Tab00.tabpage1.divViewCompBody04.maeSalesAmt1","value","dsPtnr","SALES_AMT_1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item44","Tab00.tabpage1.divViewCompBody04.maeSalesAmt2","value","dsPtnr","SALES_AMT_2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item56","Tab00.tabpage1.divViewCompBody04.maeSalesAmt3","value","dsPtnr","SALES_AMT_3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item57","Tab00.tabpage1.divViewCompBody04.maeSalesAmt00","value","dsPtnr","BIZ_PROFIT_1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item58","Tab00.tabpage1.divViewCompBody04.maeSalesAmt04","value","dsPtnr","BIZ_PROFIT_2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item60","Tab00.tabpage1.divViewCompBody04.maeSalesAmt05","value","dsPtnr","BIZ_PROFIT_3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item61","Tab00.tabpage1.divViewCompBody06.edtSquar","value","dsPtnr","CRDT_GRD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item67","Tab00.tabpage1.divViewCompBody06.edtSquar00","value","dsPtnr","CACHE_GRADE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item70","Tab00.tabpage1.divViewCompBody00.taRmark","value","dsPtnr","PTNR_RMK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item71","Tab00.tabpage1.divViewCompBody00.taRmark","visible","dsObjBindVi","edtRmark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item73","Tab00.tabpage1.divViewCompBody00.taRmark","readonly","dsObjBindEn","edtRmark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item75","Tab00.tabpage1.divViewCompBody04.Static07","text","gdsLabel","EPRO_LABEL_01137");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item78","Tab00.tabpage1.divViewCompBody00.edtEctNation","value","dsPtnr","NATION_RMK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static03Vi","Tab00.tabpage1.divViewCompBody04.Static03","visible","dsObjBindVi","Static03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static03En","Tab00.tabpage1.divViewCompBody04.Static03","enable","dsObjBindEn","Static03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static04Vi","Tab00.tabpage1.divViewCompBody04.Static04","visible","dsObjBindVi","Static04");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static04En","Tab00.tabpage1.divViewCompBody04.Static04","enable","dsObjBindEn","Static04");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static05Vi","Tab00.tabpage1.divViewCompBody04.Static05","visible","dsObjBindVi","Static05");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static05En","Tab00.tabpage1.divViewCompBody04.Static05","enable","dsObjBindEn","Static05");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static07Vi","Tab00.tabpage1.divViewCompBody04.Static07","visible","dsObjBindVi","Static07");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static07En","Tab00.tabpage1.divViewCompBody04.Static07","enable","dsObjBindEn","Static07");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static08Vi","Tab00.tabpage1.divViewCompBody04.Static08","visible","dsObjBindVi","Static08");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static08En","Tab00.tabpage1.divViewCompBody04.Static08","enable","dsObjBindEn","Static08");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static09Vi","Tab00.tabpage1.divViewCompBody04.Static09","visible","dsObjBindVi","Static09");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static09En","Tab00.tabpage1.divViewCompBody04.Static09","enable","dsObjBindEn","Static09");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("taRmarkVi","Tab00.tabpage1.divViewCompBody00.taRmark","visible","dsObjBindVi","taRmark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("taRmarkEn","Tab00.tabpage1.divViewCompBody00.taRmark","readonly","dsObjBindEn","taRmark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtEctNationVi","Tab00.tabpage1.divViewCompBody00.edtEctNation","visible","dsObjBindVi","edtEctNation");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtEctNationEn","Tab00.tabpage1.divViewCompBody00.edtEctNation","readonly","dsObjBindEn","edtEctNation");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnEvalViewVi","Tab00.tabpage1.divViewCompBody00.btnEvalView","visible","dsObjBindVi","btnEvalView");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnEvalViewEn","Tab00.tabpage1.divViewCompBody00.btnEvalView","enable","dsObjBindEn","btnEvalView");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnEvalStrVi","Tab00.tabpage1.divViewCompBody00.btnEvalStr","visible","dsObjBindVi","btnEvalStr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnEvalStrEn","Tab00.tabpage1.divViewCompBody00.btnEvalStr","enable","dsObjBindEn","btnEvalStr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSrcGrpVi","Tab00.tabpage5.staSrcGrp","visible","dsObjBindVi","staSrcGrp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSrcGrpEn","Tab00.tabpage5.staSrcGrp","enable","dsObjBindEn","staSrcGrp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboSrclvl1Vi","Tab00.tabpage5.cboSrclvl1","visible","dsObjBindVi","cboSrclvl1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboSrclvl1En","Tab00.tabpage5.cboSrclvl1","readonly","dsObjBindEn","cboSrclvl1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item46","Tab00.tabpage5.cboSrclvl1","value","dsPtnr","LRG_GRP_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboSrclvl2Vi","Tab00.tabpage5.cboSrclvl2","visible","dsObjBindVi","cboSrclvl2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboSrclvl2En","Tab00.tabpage5.cboSrclvl2","readonly","dsObjBindEn","cboSrclvl2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item53","Tab00.tabpage5.cboSrclvl2","value","dsPtnr","RPTST_SRC_GRP_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staEmpCntKiVi","Tab00.tabpage1.divViewCompBody04.staEmpCntKi","visible","dsObjBindVi","staEmpCntKi");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staEmpCntKiEn","Tab00.tabpage1.divViewCompBody04.staEmpCntKi","enable","dsObjBindEn","staEmpCntKi");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medEmpCntKiVi","Tab00.tabpage1.divViewCompBody04.medEmpCntKi","visible","dsObjBindVi","medEmpCntKi");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medEmpCntKiEn","Tab00.tabpage1.divViewCompBody04.medEmpCntKi","readonly","dsObjBindEn","medEmpCntKi");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","Tab00.tabpage1.divViewCompBody04.medEmpCntKi","value","dsPtnr","EMP_CNT_KI");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPer02Vi","Tab00.tabpage1.divViewCompBody04.staPer02","visible","dsObjBindVi","staPer02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPer02En","Tab00.tabpage1.divViewCompBody04.staPer02","enable","dsObjBindEn","staPer02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staEmpCntSaVi","Tab00.tabpage1.divViewCompBody04.staEmpCntSa","visible","dsObjBindVi","staEmpCntSa");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staEmpCntSaEn","Tab00.tabpage1.divViewCompBody04.staEmpCntSa","enable","dsObjBindEn","staEmpCntSa");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medEmpCntSaVi","Tab00.tabpage1.divViewCompBody04.medEmpCntSa","visible","dsObjBindVi","medEmpCntSa");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medEmpCntSaEn","Tab00.tabpage1.divViewCompBody04.medEmpCntSa","readonly","dsObjBindEn","medEmpCntSa");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","Tab00.tabpage1.divViewCompBody04.medEmpCntSa","value","dsPtnr","EMP_CNT_SA");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPer03Vi","Tab00.tabpage1.divViewCompBody04.staPer03","visible","dsObjBindVi","staPer03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPer03En","Tab00.tabpage1.divViewCompBody04.staPer03","enable","dsObjBindEn","staPer03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staEmpCntEtcVi","Tab00.tabpage1.divViewCompBody04.staEmpCntEtc","visible","dsObjBindVi","staEmpCntEtc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staEmpCntEtcEn","Tab00.tabpage1.divViewCompBody04.staEmpCntEtc","enable","dsObjBindEn","staEmpCntEtc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medEmpCntEtcVi","Tab00.tabpage1.divViewCompBody04.medEmpCntEtc","visible","dsObjBindVi","medEmpCntEtc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medEmpCntEtcEn","Tab00.tabpage1.divViewCompBody04.medEmpCntEtc","readonly","dsObjBindEn","medEmpCntEtc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","Tab00.tabpage1.divViewCompBody04.medEmpCntEtc","value","dsPtnr","EMP_CNT_ETC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPer04Vi","Tab00.tabpage1.divViewCompBody04.staPer04","visible","dsObjBindVi","staPer04");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPer04En","Tab00.tabpage1.divViewCompBody04.staPer04","enable","dsObjBindEn","staPer04");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSquar01Vi","Tab00.tabpage1.divViewCompBody06.staSquar01","visible","dsObjBindVi","staSquar01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSquar01En","Tab00.tabpage1.divViewCompBody06.staSquar01","enable","dsObjBindEn","staSquar01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSquar01Vi","Tab00.tabpage1.divViewCompBody06.edtSquar01","visible","dsObjBindVi","edtSquar01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSquar01En","Tab00.tabpage1.divViewCompBody06.edtSquar01","readonly","dsObjBindEn","edtSquar01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item68","Tab00.tabpage1.divViewCompBody06.edtSquar01","value","dsPtnr","CRDT_EVAL_ORG");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSquar02Vi","Tab00.tabpage1.divViewCompBody06.staSquar02","visible","dsObjBindVi","staSquar02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSquar02En","Tab00.tabpage1.divViewCompBody06.staSquar02","enable","dsObjBindEn","staSquar02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cldBizBgnDayVi","Tab00.tabpage1.divViewCompBody06.cldBizBgnDay","visible","dsObjBindVi","cldBizBgnDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cldBizBgnDayEn","Tab00.tabpage1.divViewCompBody06.cldBizBgnDay","readonly","dsObjBindEn","cldBizBgnDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item69","Tab00.tabpage1.divViewCompBody06.cldBizBgnDay","value","dsPtnr","CRDT_EVAL_DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAltSubcVi","Tab00.tabpage2.divViewCompBody00.staAltSubc","visible","dsObjBindVi","staAltSubc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAltSubcEn","Tab00.tabpage2.divViewCompBody00.staAltSubc","enable","dsObjBindEn","staAltSubc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cbxAltSubcVi","Tab00.tabpage2.divViewCompBody00.cbxAltSubc","visible","dsObjBindVi","cbxAltSubc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cbxAltSubcEn","Tab00.tabpage2.divViewCompBody00.cbxAltSubc","readonly","dsObjBindEn","cbxAltSubc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item48","Tab00.tabpage2.divViewCompBody00.cbxAltSubc","value","dsPtnr","ALT_SUBC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item84","Tab00.tabpage3.btnMgntAdd","text","gdsLabel","EPRO_LABEL_00144");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTrdCrncVi","Tab00.tabpage2.divViewCompBody00.staTrdCrnc","visible","dsObjBindVi","staTrdCrnc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTrdCrncEn","Tab00.tabpage2.divViewCompBody00.staTrdCrnc","enable","dsObjBindEn","staTrdCrnc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboTrdCrncVi","Tab00.tabpage2.divViewCompBody00.cboTrdCrnc","visible","dsObjBindVi","cboTrdCrnc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboTrdCrncEn","Tab00.tabpage2.divViewCompBody00.cboTrdCrnc","readonly","dsObjBindEn","cboTrdCrnc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item59","Tab00.tabpage2.divViewCompBody00.cboTrdCrnc","value","dsPtnr","CD_TRD_CRNC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPymtCndTnVi","Tab00.tabpage2.divViewCompBody00.staPymtCndTn","visible","dsObjBindVi","staPymtCndTn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPymtCndTnEn","Tab00.tabpage2.divViewCompBody00.staPymtCndTn","enable","dsObjBindEn","staPymtCndTn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboPymtCndTnVi","Tab00.tabpage2.divViewCompBody00.cboPymtCndTn","visible","dsObjBindVi","cboPymtCndTn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboPymtCndTnEn","Tab00.tabpage2.divViewCompBody00.cboPymtCndTn","readonly","dsObjBindEn","cboPymtCndTn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item65","Tab00.tabpage2.divViewCompBody00.cboPymtCndTn","value","dsPtnr","CD_PYMT_CNDTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staIncotrmsVi","Tab00.tabpage2.divViewCompBody00.staIncotrms","visible","dsObjBindVi","staIncotrms");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staIncotrmsEn","Tab00.tabpage2.divViewCompBody00.staIncotrms","enable","dsObjBindEn","staIncotrms");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboIncotrmsVi","Tab00.tabpage2.divViewCompBody00.cboIncotrms","visible","dsObjBindVi","cboIncotrms");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboIncotrmsEn","Tab00.tabpage2.divViewCompBody00.cboIncotrms","readonly","dsObjBindEn","cboIncotrms");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item66","Tab00.tabpage2.divViewCompBody00.cboIncotrms","value","dsPtnr","CD_INCOTERMS");
            this.addChild(obj.name, obj);
            obj.bind();
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

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("_BPtnrDetail.xfdl", function(exports) {
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
        					{btnName:gfnMultiLabel("EPRO_LABEL_00017"), clickEventFunc:"fnPtnrSel"}
        					,{btnName:gfnMultiLabel("EPRO_LABEL_00096"), clickEventFunc:"fnRtnRsn"}
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
        	var sArg = [ 
        				 {ttl:this.Tab00.tabpage1.divViewCompTitle00.staViewCompTitle00, body:this.Tab00.tabpage1.divViewCompBody00}	//서브타이틀1
        				,{ttl:this.Tab00.tabpage1.divViewCompTitle01.staViewCompTitle01, body:this.Tab00.tabpage1.divViewCompBody01}	//서브타이틀2
        				,{ttl:this.Tab00.tabpage1.divViewCompTitle02.staViewCompTitle02, body:this.Tab00.tabpage1.divViewCompBody02}	//서브타이틀3
        				,{ttl:this.Tab00.tabpage1.divViewCompTitle03.staViewCompTitle03, body:this.Tab00.tabpage1.divViewCompBody03}	//서브타이틀4
        				,{ttl:this.Tab00.tabpage1.divViewCompTitle04.staViewCompTitle04, body:this.Tab00.tabpage1.divViewCompBody04}	//서브타이틀5
        				,{ttl:this.Tab00.tabpage1.divViewCompTitle05.staViewCompTitle05, body:this.Tab00.tabpage1.divViewCompBody05}	//서브타이틀6
        				,{ttl:this.Tab00.tabpage1.divViewCompTitle06.staViewCompTitle06, body:this.Tab00.tabpage1.divViewCompBody06}	//서브타이틀7
        				,{ttl:this.Tab00.tabpage1.divViewCompTitle07.staViewCompTitle07, body:this.Tab00.tabpage1.divViewCompBody07}	//서브타이틀8
        		   ];		   
        	gfnDivFold(this, sArg);
        }

        /**
          * @함수명	: fnFormOnload
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.LoadEventInfo(이벤트변수)
          * @return   : 
          * @desc     	: 폼 onload이벤트
          */
        this.fnFormOnload = function(obj,e)
        {
        	//타이틀 접기/펼치기 기능
        //	this.fnFold();
        	
        	//그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기
        //	gfnMakeFileDs(this);
        	
        // 	var strPtnrId = gfnGetTmprData("PTNR_ID");
        // 	var forCheck = gfnGetTmprData("FOR_CHECK");
        // 	gfnClearTmprData();
        // 	this.dsPtnr.addRow();
        // 	this.dsPtnr.setColumn(0,"PTNR_ID",strPtnrId);
        // 	
        // 	this.fnSearch();
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
          * @함수명	: fnSearch
          * @desc     	: 조회 프로세스
          */
        this.fnSearch = function()
        {
        	if(!this.fnPreSearch()) return false;

        	var sSvcID = "readPtnr";
        	var sController = "epro.ptnr.service.BPtnrService.readPtnr";
        	var sInDatasets = "dsPtnr=dsPtnr";
        	var sOutDatasets = "dsPtnr=dsPtnr dsPtnrPlant=dsPtnrPlant dsPtnrMaker=dsPtnrMaker dsUser=dsUser dsEval=dsEval dsCard=dsCard dsLrgGrp=dsLrgGrp dsMdlGrp=dsMdlGrp dsSelectGrp=dsSelectGrp dslvl1=dslvl1 dslvl2=dslvl2 dsEvlTmplList=dsEvlTmplList";
        	var sCallbackFunc = "fnTrCallBack";

            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
          * @함수명  : fnPreSave
          * @input    : 
          * @return   : 
          * @desc     : 저장전 유효성체크
          */
        this.fnPreSave = function()
        {
        	var arr = [];
        	if(gfnIsNull(this.dsPtnr.getColumn(0, "RPTST_SRC_GRP_ID"))){
        		var msg = gfnMultiLabel("EPRO_LABEL_01090");
        		var type = gfnMultiLabel("EPRO_LABEL_01010");
        		var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        		arr.push(objParam);
        	}
         	
         	return gfnValidate(this, false, arr);
        }

        /** 
        	@함수명	fnSave
        	@desc   	저장 프로세스
        */
        this.fnSave = function(bValid)
        {
        	if(!this.ptnrSel) {
        		if(!this.fnPreSave()) return false;
        		if(!gfnConfirm("EPRO_LABEL_00001")) return;
        	} 
        		
        	if(-1 == this.dsSelectGrp.findRow("SRC_GRP_ID", this.dsPtnr.getColumn(0, "RPTST_SRC_GRP_ID"))) {
        		this.dsMdlGrp.set_enableevent(false);
        		this.dsSelectGrp.set_enableevent(false);
        		
        		this.dsSelectGrp.insertRow(0);
        		
        		this.dsSelectGrp.setColumn(0, "PTNR_ID", this.dsPtnr.getColumn(0, "PTNR_ID"));
                this.dsSelectGrp.setColumn(0, "BRANCH_CD", this.dsPtnr.getColumn(0, "BRANCH_CD"));
                this.dsSelectGrp.setColumn(0, "SRC_GRP_ID", this.dsPtnr.getColumn(0, "RPTST_SRC_GRP_ID"));
                this.dsMdlGrp.filter("")
                var fRow = this.dsMdlGrp.findRow("SRC_GRP_ID", this.dsPtnr.getColumn(0, "RPTST_SRC_GRP_ID"));
                
                this.dsSelectGrp.setColumn(0, "SRC_GRP_NM", this.dsMdlGrp.getColumn(fRow, "SRC_GRP_NM"));
                this.dsSelectGrp.setColumn(0, "SRC_GRP_NM2", this.dsMdlGrp.getColumn(fRow, "SRC_GRP_NM2"));
                
                this.dsMdlGrp.setColumn(fRow, "BTN", "DEL");       
                 
                this.fnDsMdlGrpfilter();
                       
                this.dsSelectGrp.set_enableevent(true);
        		this.dsMdlGrp.set_enableevent(true);
        	}
        	
        	var sSvcID = "savePtnr";
        	var sController = "epro.ptnr.service.BPtnrService.savePtnr";
        	var sInDatasets = "dsPtnr=dsPtnr:A dsSelectGrp=dsSelectGrp:A";
        	var sOutDatasets = "dsPtnr=dsPtnr";
        	var sCallbackFunc = "fnTrCallBack";
        				
        	 gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
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
        			var msk = "";
        			if(!gfnIsNull(this.dsPtnr.getColumn(0,"TRDEVAL_END_DT"))) msk = "####-##-## ##:##:##";
        			this.Tab00.tabpage1.divViewCompBody00.medtEvalDate.set_mask(msk);
        		
        			var strLeft = this.Tab00.tabpage1.divViewCompBody00.btnEvalStr.left
        			var viewLeft = this.Tab00.tabpage1.divViewCompBody00.btnEvalView.left
        			this.fnSrclvl1Filter(this.dsPtnr.getColumn(0, "LRG_GRP_ID"));
        			this.fnDsMdlGrpfilter();
        			if("SR20REJ" == this.dsPtnr.getColumn(0, "CD_PORG_UNIT_STTS")) { //거래중지
        				this.Tab00.tabpage1.divViewCompBody00.btnEvalView.set_left(viewLeft);
        				this.Tab00.tabpage1.divViewCompBody00.btnEvalStr.set_left(strLeft);
        				this.Tab00.tabpage1.divViewCompBody00.btnEvalView.set_visible(true);
        				this.Tab00.tabpage1.divViewCompBody00.btnEvalStr.set_visible(true);
        				gfnSetObj("C");
        			} else if("SR10NREJ" == this.dsPtnr.getColumn(0, "CD_PTNR_STTS")) { //등록거부
        				if(gfnIsNull(this.dsPtnr.getColumn(0,"TRD_EVAL_ID"))) { //평가없음
        					this.Tab00.tabpage1.divViewCompBody00.btnEvalStr.set_left(viewLeft);
        					this.Tab00.tabpage1.divViewCompBody00.btnEvalView.set_visible(false);
        					this.Tab00.tabpage1.divViewCompBody00.btnEvalStr.set_visible(false);
        				} else { //있음
        					this.Tab00.tabpage1.divViewCompBody00.btnEvalStr.set_visible(false);
        					this.Tab00.tabpage1.divViewCompBody00.btnEvalView.set_visible(true);
        				}
        				gfnSetObj("D");
        			} else if("SR10NREQ" == this.dsPtnr.getColumn(0, "CD_PTNR_STTS")) { //신규요청
        				if(gfnIsNull(this.dsPtnr.getColumn(0,"TRD_EVAL_ID"))) { //평가없음
        					this.Tab00.tabpage1.divViewCompBody00.btnEvalStr.set_left(viewLeft);
        					this.Tab00.tabpage1.divViewCompBody00.btnEvalView.set_visible(false);
        					this.Tab00.tabpage1.divViewCompBody00.btnEvalStr.set_visible(true);
        				} else { //있음
        					this.Tab00.tabpage1.divViewCompBody00.btnEvalStr.set_visible(true);
        					this.Tab00.tabpage1.divViewCompBody00.btnEvalView.set_visible(true);
        				}
        				gfnSetObj("A");
        			} else if("SR10NCLO" == this.dsPtnr.getColumn(0, "CD_PTNR_STTS")) { //등록완료
        				this.Tab00.tabpage1.divViewCompBody00.btnEvalStr.set_visible(false);
        				this.Tab00.tabpage1.divViewCompBody00.btnEvalView.set_visible(true);
        				gfnSetObj("B");
        			}
        			//국가코드
        			if("CM16ETC" == this.dsPtnr.getColumn(0, "CD_NATION")) {
        				this.Tab00.tabpage1.divViewCompBody00.edtEctNation.set_visible(true)
        			} 
        			//담당자확인
        //			if("Y" == this.dsPtnr.getColumn(0, "PCHRGR_YN")) {
        				this.Tab00.tabpage3.btnMgntAdd.set_visible(true);
        				//this.Tab00.tabpage3.divViewCompBody02.set_top(34)
        // 			} else {
        // 				this.Tab00.tabpage3.btnMgntAdd.set_visible(false);
        // 				this.Tab00.tabpage3.divViewCompBody02.set_top(5)
        // 			}
        			 
        			break;
        		case "searchCard" : //관리카드 조회
        			break;
        		case "savePtnr" : //저장
        			if(this.ptnrSel) {
        				var sSvcID = "savePtnrSel";
        				var sController = "epro.ptnr.service.BPtnrService.savePtnrSel";
        				var sInDatasets = "dsPtnr=dsPtnr dsSysCard=dsSysCard";
        				var sOutDatasets = "dsPtnr=dsPtnr";
        				var sCallbackFunc = "fnTrCallBack";			
        				gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        				
        			} else {
        				gfnAlert(strErrMsg);
        				this.fnSearch();
        			}
        			break;
        		case "savePtnrSel" : //잠재업체지정
        			this.ptnrSel = false;
        			gfnAlert(strErrMsg);
        			this.fnSearch();
        			break;
        		case "savePtnrRej" : //등록거부
        			gfnAlert(strErrMsg);
        			this.fnSearch();
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
        	
        	switch(sPopupId){
        		case "BAprvReqPopup" : //결재
        			this.fnSearch();
        			break;
        		case "PopupCardAdd" : //카드추가
        			var sSvcID = "searchCard";
        			var sController = "epro.ptnr.service.BPtnrService.searchCard";
        			var sInDatasets = "dsPtnr=dsPtnr";
        			var sOutDatasets = "dsCard=dsCard";
        			var sCallbackFunc = "fnTrCallBack";
        						
        			gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        			break;
        		case "RtnRsnPopup" : //등록거부 사유
        			
        			if(!gfnConfirm("EPRO_LABEL_01029")) return;
        			this.dsPtnr.setColumn(0, "RTN_RSN", this.dsReturn.getColumn(0, "MSG"));
        			
        			this.dsSysCard.deleteAll();
        			var nRow = this.dsSysCard.addRow();
        			this.dsSysCard.setColumn(nRow, "MGMT_HSTR_NO", "");
        			this.dsSysCard.setColumn(nRow, "PTNR_ID", "");
        			this.dsSysCard.setColumn(nRow, "CD_MGMT_TYPE", "");
        			this.dsSysCard.setColumn(nRow, "ATTCH_FILE_CNT", "");
        			this.dsSysCard.setColumn(nRow, "CRTR_ID", "");
        			this.dsSysCard.setColumn(nRow, "LAST_CHGR_ID", "");
        			this.dsSysCard.setColumn(nRow, "TTL", gfnMultiLabel("EPRO_LABEL_00096"));
        			this.dsSysCard.setColumn(nRow, "MGMT_MEMO", this.dsReturn.getColumn(0, "MSG"));
        			
        			var sSvcID = "savePtnrRej";
        			var sController = "epro.ptnr.service.BPtnrService.savePtnrRej";
        			var sInDatasets = "dsPtnr=dsPtnr dsSysCard=dsSysCard";
        			var sOutDatasets = "dsPtnr=dsPtnr";
        			var sCallbackFunc = "fnTrCallBack";
        						
        			gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        			break;
        			
        		case "PtnrEvalPopup" :
        			if(gfnIsNull(this.dsPtnr.getColumn(0,"TRDEVAL_END_DT"))){
        				this.Tab00.tabpage1.divViewCompBody00.medtEvalDate.set_mask("####-##-## ##:##:##");
        			}
        			
        			if(this.dsPtnr.getColumn(0, "CD_PTNR_STTS") == "SR10NREQ"){
        				if(gfnIsNull(this.dsPtnr.getColumn(0,"TRD_EVAL_ID"))){
        					this.Tab00.tabpage1.divViewCompBody00.btnEvalView.set_left(303);
        					this.Tab00.tabpage1.divViewCompBody00.btnEvalStr.set_left(378);
        					this.Tab00.tabpage1.divViewCompBody00.btnEvalView.set_visible(true);
        					this.Tab00.tabpage1.divViewCompBody00.btnEvalStr.set_visible(true);
        				}
        			}
        			
        			this.dsPtnr.setColumn(0,"TRD_EVAL_ID",this.dsReturn.getColumn(0,"EVAL_ID"));
        			this.dsPtnr.setColumn(0,"EVAL_CHRG_NM",this.dsReturn.getColumn(0,"EVAL_CHRGR_NM"));
        			this.dsPtnr.setColumn(0,"TRD_EVAL_SCORE",this.dsReturn.getColumn(0,"EVAL_SCORE"));
        			this.dsPtnr.setColumn(0,"TRDEVAL_END_DT",this.dsReturn.getColumn(0,"EVAL_END_DT"));
        			
        			break;
        			
        		default:
        			break;	
        	}
        }

        /**
        	@function	fnGrdPtnrItemClick()
        	@desc   	첨부파일 팝업 호출
        */
        this.fnGrdPtnrItemClick = function(obj,e)
        {
        	if(3 == e.col) {
        		var sArg = {
        						agv_sTableNm:"MM_PTNR"
        						,gv_arrFileKey:[this.dsPtnr.getColumn(0, "PTNR_ID"),this.dsReqFile.getColumn(e.row,"NO")]
        						,agv_data:this.dsReqFile
        						,agv_form:this
        						,agv_view:"Y"
        					}; 
        		gfnModalPop(this, "CompFileUpDownPopup", "CPOP::CompFileUpDownPopup.xfdl", sArg, "fnPopCallBack", 900, 350);
        	}
        }

        
        /**
        	@function	fnBtnAddCardClick()
        	@desc   	관리카드 추가버튼 클릭 이벤트
        */
        this.fnBtnAddCardClick = function(obj,e)
        {
        	var sArg = { 
        				 agv_ptnr: this.dsPtnr.getColumn(0,"PTNR_ID")
        				};
        	gfnModalPop(this, "PopupCardAdd", "BPTNR::BPtnrCardPopup.xfdl",sArg, "fnPopCallBack", 640, 640);
        }

        /**
        	@function	fnGrdLrgGrpOncellClick() 
        	@desc   	소싱그룹탭 중분류 그리드 셀 클릭 이벤트
        */
        this.fnGrdMdlGrpOncellClick = function(obj,e)
        {
        	if("BTN" == gfnGrdBindColId(obj, obj.getCellPos())){
        		this.dsMdlGrp.set_enableevent(false);
        		if("ADD" == obj.getCellValue(e.row, e.col)) {
        			var nRow = this.dsSelectGrp.addRow();
        			
        			this.dsSelectGrp.setColumn(nRow, "PTNR_ID", this.dsPtnr.getColumn(0, "PTNR_ID"));
        			this.dsSelectGrp.setColumn(nRow, "BRANCH_CD", "");
        			this.dsSelectGrp.setColumn(nRow, "SRC_GRP_ID", this.dsMdlGrp.getColumn(e.row, "SRC_GRP_ID"));
        			this.dsSelectGrp.setColumn(nRow, "SRC_GRP_NM", this.dsMdlGrp.getColumn(e.row, "SRC_GRP_NM"));
        			this.dsSelectGrp.setColumn(nRow, "SRC_GRP_NM2", this.dsMdlGrp.getColumn(e.row, "SRC_GRP_NM2"));
        			
        			this.dsMdlGrp.setColumn(e.row, "BTN", "DEL");
        		} else {
        			var delRow = this.dsSelectGrp.findRow("SRC_GRP_ID", this.dsMdlGrp.getColumn(e.row, "SRC_GRP_ID"));
        			this.dsSelectGrp.deleteRow(delRow);
        			
        			this.dsMdlGrp.setColumn(e.row, "BTN", "ADD");
        		}
        		this.dsMdlGrp.set_enableevent(true);
        	}
        }

        
        /**
        	@function	fnGrdSeleteGrpDel() 
        	@desc   	협력사 소싱그룹 삭제
        */
        this.fnGrdSeleteGrpDel = function(row)
        {
        	this.dsMdlGrp.set_enableevent(false);
        	this.dsMdlGrp.filter("");
        	var sRow = this.dsMdlGrp.findRow("SRC_GRP_ID", this.dsSelectGrp.getColumn(row, "SRC_GRP_ID"));
        	this.dsMdlGrp.setColumn(sRow, "BTN", "ADD");
        	this.dsSelectGrp.deleteRow(row);
        	this.fnDsMdlGrpfilter();
        	this.dsMdlGrp.set_enableevent(true);
        }

        /**
        	@function	fnGrdSeleteGrpOncellClick() 
        	@desc   	협력사 소싱그룹 그리드 셀 클릭 이벤트
        */
        this.fnGrdSeleteGrpOncellClick = function(obj,e)
        {
        	if("BTN" == obj.getCellProperty("Body", e.col, "text")){
        		this.fnGrdSeleteGrpDel(e.row);
        	}
        }

        /**
        	@function	fnGrdSeleteGrpOnHeadclick() 
        	@desc   	협력사 소싱그룹 그리드 헤드셀 클릭 이벤트
        */
        this.fnGrdSeleteGrpOnHeadclick = function(obj,e)
        {
        	if("BTN" == obj.getCellProperty("Head", e.col, "text")){
        		if(gfnConfirm("EPRO_LABEL_00846")) {
        			for(var i=this.dsSelectGrp.getRowCount()-1; i>=0; i--) {
        				this.fnGrdSeleteGrpDel(i);
        			}
        		}
        		
        	}
        }

        
        /**
        	@function	fnDsMdlGrpfilter() 
        	@desc   	소싱그룹 중분류 필터
        */
        this.fnDsMdlGrpfilter = function()
        {
        	this.dsMdlGrp.filter("UP_SRC_GRP_ID=='" + this.dsLrgGrp.getColumn(this.dsLrgGrp.rowposition, "SRC_GRP_ID") + "'");
        }

        /**
        	@function	fnGrdLrgGrpOncellClick()
        	@desc   	대표납품품목 콤보 변경 이벤트
        */
        this.fnCboSrclvl1OnitemChanged = function(obj,e)
        {
        	this.fnSrclvl1Filter(e.postvalue);
        	this.dsPtnr.setColumn(0, "RPTST_SRC_GRP_ID", "");
        }

        /**
        	@function	fnSrclvl1Filter()
        	@desc   	대표납품품목 필터
        */
        this.fnSrclvl1Filter = function(id)
        {
        	this.dslvl2.set_enableevent(false)
        	this.dslvl2.filter("UP_SRC_GRP_ID=='" + id + "' || SRC_GRP_ID==''");
        	this.dslvl2.set_enableevent(true)
        }

        

        /**
        	@function	fnLrgGrpOnrowposChanged()
        	@desc   	소싱그룹 대분류 rowposition 변경이벤트
        */
        this.fnLrgGrpOnrowposChanged = function(obj,e)
        {
        	this.fnDsMdlGrpfilter();
        }

        /**
        	@function	fnMgmtCardOnCelldblclick()
        	@desc   	관리카드 상세팝업
        */
        this.fnMgmtCardOnCelldblclick = function(obj,e)
        {
        	if("TTL" == gfnGrdBindColId(obj, obj.getCellPos())){ 
        		var sArg = { 
        					agv_id:this.dsCard.getColumn(e.row, "MGMT_HSTR_NO")
        					,agv_ptnr:this.dsPtnr.getColumn(0, "PTNR_ID")
        			   };
        		gfnModalPop(this, "CardPopup", "BPTNR::BPtnrCardPopup.xfdl", sArg, "fnPopCallBack", 640, 640);
        	}
        }

        this.fnPrePtnrSel = function()
        {
        	var arr = [];
        	if(gfnIsNull(this.dsPtnr.getColumn(0, "RPTST_SRC_GRP_ID"))){
        		var msg = gfnMultiLabel("EPRO_LABEL_01090");
        		var type = gfnMultiLabel("EPRO_LABEL_01010");
        		var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        		arr.push(objParam);
        	}
        	
        	if(gfnIsNull(this.dsPtnr.getColumn(0, "TRD_EVAL_ID"))) {
        		var msg = gfnMultiLabel("EPRO_LABEL_01110");
        		var type = gfnMultiLabel("EPRO_LABEL_01010");
        		var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        		arr.push(objParam);
        	}
        	
         	var nRow = this.dsCdCM99.findRow("CD_ID","CM99PTNR");
         	if(nexacro.toNumber(this.dsCdCM99.getColumn(nRow,"APPND_SET_NUM_1"))>nexacro.toNumber(this.dsPtnr.getColumn(0,"TRD_EVAL_SCORE"))){
        		var msg = gfnMultiLabel("EPRO_LABEL_01397");
        		var type = gfnMultiLabel("EPRO_LABEL_00817");
        		var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        		arr.push(objParam);
        	}
         	
         	return gfnValidate(this, false, arr);
        }

        /**
        	@function	fnPtnrSel()
        	@desc   	잠재업체 지정
        */
        this.fnPtnrSel = function()
        {
        	if(!this.fnPrePtnrSel()) return;
        	
        	if(!gfnConfirm("EPRO_LABEL_00841")) return;
        	this.ptnrSel = true;
        	
        	this.dsSysCard.deleteAll();
        	var nRow = this.dsSysCard.addRow();
        	this.dsSysCard.setColumn(nRow, "MGMT_HSTR_NO", "");
        	this.dsSysCard.setColumn(nRow, "PTNR_ID", "");
        	this.dsSysCard.setColumn(nRow, "CD_MGMT_TYPE", "");
        	this.dsSysCard.setColumn(nRow, "ATTCH_FILE_CNT", "");
        	this.dsSysCard.setColumn(nRow, "CRTR_ID", "");
        	this.dsSysCard.setColumn(nRow, "LAST_CHGR_ID", "");
        	this.dsSysCard.setColumn(nRow, "TTL", gfnMultiLabel("EPRO_LABEL_00017"));
        	this.dsSysCard.setColumn(nRow, "MGMT_MEMO", gfnMultiLabel("EPRO_LABEL_00843"));
        	this.fnSave();
        }

        /**
        	@function	fnBtnDenialOnclick()
        	@desc   	등록거부 버튼클릭
        */
        this.fnRtnRsn = function()
        {
        	var sArg = {};
        	gfnModalPop(this, "RtnRsnPopup", "BPTNR::BPtnrRtnRsnPop.xfdl", sArg, "fnPopCallBack", 400, 250);
        }

        /**
        	@function	fnBtnEvalViewOnclick()
        	@desc   	평가보기 버튼클릭
        */
        this.fnBtnEvalViewOnclick = function(obj,e)
        {
          	if(gfnIsNull(this.dsPtnr.getColumn(0,"TRD_EVAL_ID"))) {
          		gfnAlert("EPRO_LABEL_01030");
          		return;
          	}
          	
          	var stts = "";
          	if(gfnIsNull(this.dsPtnr.getColumn(0,"TRD_EVAL_ID"))) {
        		stts = "up";
        	}
          	//if(this.dsPtnr.getColumn(0, "CD_PTNR_STTS") == "SR10NREQ") stts = "up";
        	
        	var sArg = { 
        				agv_eval : this.dsPtnr.getColumn(0,"TRD_EVAL_ID")
        				,agv_ptnrId :this.dsPtnr.getColumn(0,"PTNR_ID")
        				,agv_bizNo : this.dsPtnr.getColumn(0,"BIZ_NO")
        				,agv_readYN : "Y"
        				,agv_stts :  stts
        			};
        	gfnModalPop(this, "PtnrEvalPopup", "BPTNR::BPtnrEvalPop.xfdl", sArg, "fnPopCallBack", 900, 600);
        }

        /**
        	@function	fnBtnEvalDoOnclick()
        	@desc   	평가하기 버튼클릭
        */
        this.fnBtnEvalDoOnclick = function(obj,e)
        {
        	this.PopupDiv00.trackPopupByComponent(obj, 0, Number(obj.height));
        }

        this.fnEvalGrdOnclick = function(obj,e)
        {
        	if("BTN" == gfnGrdBindColId(obj, obj.getCellPos())){
        		var sArg = { 
        					agv_tmpl :   this.dsEvlTmplList.getColumn(this.dsEvlTmplList.rowposition,"EVAL_TMPL_ID")
        					,agv_ptnrId :this.dsPtnr.getColumn(0,"PTNR_ID")
        					,agv_bizNo : this.dsPtnr.getColumn(0,"BIZ_NO")
        					,agv_stts :  "new"
        				};
        		gfnModalPop(this, "PtnrEvalPopup", "BPTNR::BPtnrEvalPop.xfdl", sArg, "fnPopCallBack", 900, 550);
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPtnr.addEventHandler("oncolumnchanged", this.dsPtnr_oncolumnchanged, this);
            this.dsLrgGrp.addEventHandler("onrowposchanged", this.fnLrgGrpOnrowposChanged, this);
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.PopupDiv00.Grid00.addEventHandler("oncellclick", this.fnEvalGrdOnclick, this);
            this.Tab00.tabpage1.divViewCompTitle00.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.Tab00.tabpage1.wbBizNo.addEventHandler("onusernotify", this.fnOnusernotify, this);
            this.Tab00.tabpage1.divViewCompTitle02.staViewCompTitle02.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.Tab00.tabpage1.divViewCompTitle01.staViewCompTitle01.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.Tab00.tabpage1.divViewCompBody04.txt_mjrCstmr.addEventHandler("oneditclick", this.Tab01_tabp01_TextArea00_oneditclick, this);
            this.Tab00.tabpage1.divViewCompBody04.staSales00.addEventHandler("onclick", this._tabpage1_divViewCompBody04_staSales00_onclick, this);
            this.Tab00.tabpage1.divViewCompBody04.staEmpCntKi.addEventHandler("onclick", this.divViewCompBody01_staCdEvalRunStts00_onclick, this);
            this.Tab00.tabpage1.divViewCompBody06.edtSquar.addEventHandler("onsetfocus", this.Edit04_onsetfocus, this);
            this.Tab00.tabpage1.divViewCompBody06.edtSquar.addEventHandler("onkillfocus", this.Edit03_onkillfocus, this);
            this.Tab00.tabpage1.divViewCompBody06.edtSquar00.addEventHandler("onsetfocus", this.Edit04_onsetfocus, this);
            this.Tab00.tabpage1.divViewCompBody06.edtSquar00.addEventHandler("onkillfocus", this.Edit03_onkillfocus, this);
            this.Tab00.tabpage1.divViewCompBody06.edtSquar01.addEventHandler("onsetfocus", this.Edit04_onsetfocus, this);
            this.Tab00.tabpage1.divViewCompBody06.edtSquar01.addEventHandler("onkillfocus", this.Edit03_onkillfocus, this);
            this.Tab00.tabpage1.divViewCompBody00.staRmark.addEventHandler("onclick", this.Tab00_tabpage1_divViewCompBody00_staRmark_onclick, this);
            this.Tab00.tabpage1.divViewCompBody00.btnEvalView.addEventHandler("onclick", this.fnBtnEvalViewOnclick, this);
            this.Tab00.tabpage1.divViewCompBody00.btnEvalStr.addEventHandler("onclick", this.fnBtnEvalDoOnclick, this);
            this.Tab00.tabpage1.divViewCompBody00.medtEvalDate.addEventHandler("oneditclick", this.Tab00_tabpage1_divViewCompBody00_medtEvalDate_oneditclick, this);
            this.Tab00.tabpage3.divViewCompBody02.grdMgmt.addEventHandler("oncelldblclick", this.fnMgmtCardOnCelldblclick, this);
            this.Tab00.tabpage3.btnMgntAdd.addEventHandler("onclick", this.fnBtnAddCardClick, this);
            this.Tab00.tabpage7.divViewCompBody00.grdEvalList.addEventHandler("oncellclick", this.div_body_grd_list_oncellclick, this);
            this.Tab00.tabpage7.divViewCompBody00.grdEvalList.addEventHandler("oncelldblclick", this.div_body_grd_list_oncelldblclick, this);
            this.Tab00.tabpage8.divViewCompBody01.grdReqFile.addEventHandler("oncellclick", this.fnGrdPtnrItemClick, this);

        };

        this.loadIncludeScript("_BPtnrDetail.xfdl", true);

       
    };
}
)();
