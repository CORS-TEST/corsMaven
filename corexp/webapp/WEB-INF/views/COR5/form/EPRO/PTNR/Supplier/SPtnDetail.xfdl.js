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
                this.set_name("CSampleDetail");
                this.set_titletext("업체상세");
                this._setFormPosition(0,0,1220,1814);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPtnr", this);
            obj._setContents("<ColumnInfo><Column id=\"PTNR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CD_PTNR_STTS\" size=\"256\" type=\"STRING\"/><Column id=\"BIZ_NO_03\" size=\"256\" type=\"STRING\"/><Column id=\"BIZ_NO_02\" size=\"256\" type=\"STRING\"/><Column id=\"BIZ_NO_01\" size=\"256\" type=\"STRING\"/><Column id=\"BIZ_NO\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_NM\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_NM_GB\" size=\"256\" type=\"STRING\"/><Column id=\"HEAD_OFFCBIZ_NO_01\" size=\"256\" type=\"STRING\"/><Column id=\"HEAD_OFFCBIZ_NO_02\" size=\"256\" type=\"STRING\"/><Column id=\"HEAD_OFFCBIZ_NO_03\" size=\"256\" type=\"STRING\"/><Column id=\"HEAD_OFFCBIZ_NO\" size=\"256\" type=\"STRING\"/><Column id=\"CORP_REG_NO_01\" size=\"256\" type=\"STRING\"/><Column id=\"CORP_REG_NO_02\" size=\"256\" type=\"STRING\"/><Column id=\"CORP_REG_NO\" size=\"256\" type=\"STRING\"/><Column id=\"BIZ_CNDTN\" size=\"256\" type=\"STRING\"/><Column id=\"BIZ_TYPE\" size=\"256\" type=\"STRING\"/><Column id=\"BIZ_BGN_DAY\" size=\"256\" type=\"STRING\"/><Column id=\"RPRSTV_NM\" size=\"256\" type=\"STRING\"/><Column id=\"RPRSTV_HP_01\" size=\"256\" type=\"STRING\"/><Column id=\"RPRSTV_HP_02\" size=\"256\" type=\"STRING\"/><Column id=\"RPRSTV_HP_03\" size=\"256\" type=\"STRING\"/><Column id=\"RPRSTV_HP\" size=\"256\" type=\"STRING\"/><Column id=\"RPRSTV_EMAIL_01\" size=\"256\" type=\"STRING\"/><Column id=\"RPRSTV_EMAIL_02\" size=\"256\" type=\"STRING\"/><Column id=\"RPRSTV_EMAIL\" size=\"256\" type=\"STRING\"/><Column id=\"ZIP_NO\" size=\"256\" type=\"STRING\"/><Column id=\"ADDR\" size=\"256\" type=\"STRING\"/><Column id=\"DTL_ADDR\" size=\"256\" type=\"STRING\"/><Column id=\"RPTST_TEL_01\" size=\"256\" type=\"STRING\"/><Column id=\"RPTST_TEL_02\" size=\"256\" type=\"STRING\"/><Column id=\"RPTST_TEL_03\" size=\"256\" type=\"STRING\"/><Column id=\"RPTST_TEL\" size=\"256\" type=\"STRING\"/><Column id=\"TEL_01\" size=\"256\" type=\"STRING\"/><Column id=\"TEL_02\" size=\"256\" type=\"STRING\"/><Column id=\"TEL_03\" size=\"256\" type=\"STRING\"/><Column id=\"TEL\" size=\"256\" type=\"STRING\"/><Column id=\"FAX_01\" size=\"256\" type=\"STRING\"/><Column id=\"FAX_02\" size=\"256\" type=\"STRING\"/><Column id=\"FAX_03\" size=\"256\" type=\"STRING\"/><Column id=\"FAX\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_USE\" size=\"256\" type=\"STRING\"/><Column id=\"ATTCH_FILE_CNT\" size=\"256\" type=\"STRING\"/><Column id=\"TKEY\" size=\"256\" type=\"STRING\"/><Column id=\"RTN_RSN\" size=\"256\" type=\"STRING\"/><Column id=\"TRD_REQ_BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"RPTST_SRC_GRP_ID\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_CHT_DT\" size=\"256\" type=\"STRING\"/><Column id=\"RPTST_USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"AST\" size=\"256\" type=\"STRING\"/><Column id=\"DEBT\" size=\"256\" type=\"STRING\"/><Column id=\"CAPL\" size=\"256\" type=\"STRING\"/><Column id=\"BIZ_PROFIT\" size=\"256\" type=\"STRING\"/><Column id=\"EMP_CNT\" size=\"256\" type=\"STRING\"/><Column id=\"PYMT_BNK\" size=\"256\" type=\"STRING\"/><Column id=\"BNK_OWNR\" size=\"256\" type=\"STRING\"/><Column id=\"BNK_ACNT_NO\" size=\"256\" type=\"STRING\"/><Column id=\"MJR_CSTMR\" size=\"256\" type=\"STRING\"/><Column id=\"YR_1\" size=\"256\" type=\"STRING\"/><Column id=\"YR_2\" size=\"256\" type=\"STRING\"/><Column id=\"YR_3\" size=\"256\" type=\"STRING\"/><Column id=\"SALES_AMT_1\" size=\"256\" type=\"STRING\"/><Column id=\"SALES_AMT_2\" size=\"256\" type=\"STRING\"/><Column id=\"SALES_AMT_3\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_RMK\" size=\"256\" type=\"STRING\"/><Column id=\"EMP_CNT_KI\" size=\"256\" type=\"STRING\"/><Column id=\"EMP_CNT_SA\" size=\"256\" type=\"STRING\"/><Column id=\"EMP_CNT_ETC\" size=\"256\" type=\"STRING\"/><Column id=\"APP_DOC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"APP_CMPLT_DT\" size=\"256\" type=\"STRING\"/><Column id=\"CRTR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CRT_DT\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_CHGR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_CHG_DT\" size=\"256\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUser", this);
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_USE\" size=\"256\" type=\"STRING\"/><Column id=\"INT_USER_TYPE\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"USER_NM\" size=\"256\" type=\"STRING\"/><Column id=\"USER_NM_GB\" size=\"256\" type=\"STRING\"/><Column id=\"DEPT_CD\" size=\"256\" type=\"STRING\"/><Column id=\"DEPT_NM\" size=\"256\" type=\"STRING\"/><Column id=\"PWD\" size=\"256\" type=\"STRING\"/><Column id=\"PWD_CHK\" size=\"256\" type=\"STRING\"/><Column id=\"FAX\" size=\"256\" type=\"STRING\"/><Column id=\"MJR_JOB\" size=\"256\" type=\"STRING\"/><Column id=\"TEL\" size=\"256\" type=\"STRING\"/><Column id=\"HP_01\" size=\"256\" type=\"STRING\"/><Column id=\"HP_02\" size=\"256\" type=\"STRING\"/><Column id=\"HP_03\" size=\"256\" type=\"STRING\"/><Column id=\"HP\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_SMS_RCV\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_MAIL_RCV\" size=\"256\" type=\"STRING\"/><Column id=\"PWD_EXPR_DAY\" size=\"256\" type=\"STRING\"/><Column id=\"PWD_CHG_DAY\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_LOGIN_DT\" size=\"256\" type=\"STRING\"/><Column id=\"COST_CNTR_CD\" size=\"256\" type=\"STRING\"/><Column id=\"CC_NM\" size=\"256\" type=\"STRING\"/><Column id=\"EMP_NO\" size=\"256\" type=\"STRING\"/><Column id=\"EMAIL_01\" size=\"256\" type=\"STRING\"/><Column id=\"EMAIL_02\" size=\"256\" type=\"STRING\"/><Column id=\"EMAIL\" size=\"256\" type=\"STRING\"/><Column id=\"LOGIN_SSN_INFO\" size=\"256\" type=\"STRING\"/><Column id=\"LOGIN_IP_ADDR\" size=\"256\" type=\"STRING\"/><Column id=\"CRTR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CRT_DT\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_CHGR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_CHG_DT\" size=\"256\" type=\"STRING\"/><Column id=\"PSTN\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserChk", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReturn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM81", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM80", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPtnrFile", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_NM\" size=\"256\" type=\"STRING\"/><Column id=\"CHECKED\" size=\"256\" type=\"STRING\"/><Column id=\"NO\" size=\"256\" type=\"STRING\"/><Column id=\"KR\" size=\"256\" type=\"STRING\"/><Column id=\"EN\" size=\"256\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_ID\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"FILE_NM\">EPRO_LABEL_01146</Col><Col id=\"CHECKED\">1</Col><Col id=\"NO\">1</Col><Col id=\"KR\"/><Col id=\"EN\"/></Row><Row><Col id=\"FILE_NM\">EPRO_LABEL_01266</Col><Col id=\"CHECKED\">0</Col><Col id=\"NO\">2</Col><Col id=\"KR\"/><Col id=\"EN\"/></Row><Row><Col id=\"CHECKED\">0</Col><Col id=\"NO\">3</Col><Col id=\"FILE_NM\">EPRO_LABEL_01239</Col><Col id=\"EN\">EPRO_LABEL_00003</Col><Col id=\"KR\"/></Row><Row><Col id=\"CHECKED\">0</Col><Col id=\"NO\">4</Col><Col id=\"FILE_NM\">EPRO_LABEL_01240</Col><Col id=\"KR\">EPRO_LABEL_00003</Col><Col id=\"EN\">EPRO_LABEL_00003</Col></Row><Row><Col id=\"FILE_NM\">EPRO_LABEL_01241</Col><Col id=\"CHECKED\">0</Col><Col id=\"NO\">5</Col><Col id=\"KR\"/><Col id=\"EN\">EPRO_LABEL_00003</Col></Row><Row><Col id=\"FILE_NM\">EPRO_LABEL_01419</Col><Col id=\"CHECKED\">0</Col><Col id=\"NO\">6</Col><Col id=\"KR\">EPRO_LABEL_00003</Col><Col id=\"EN\"/></Row><Row><Col id=\"FILE_NM\">EPRO_LABEL_01420</Col><Col id=\"CHECKED\">0</Col><Col id=\"NO\">7</Col><Col id=\"KR\">EPRO_LABEL_00003</Col><Col id=\"EN\"/></Row><Row><Col id=\"FILE_NM\">EPRO_LABEL_01421</Col><Col id=\"CHECKED\">0</Col><Col id=\"NO\">8</Col><Col id=\"KR\"/><Col id=\"EN\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsLrgGrp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMdlGrp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSelectGrp", this);
            obj._setContents("<ColumnInfo><Column id=\"PTNR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"SRC_GRP_ID\" size=\"256\" type=\"STRING\"/><Column id=\"SRC_GRP_NM\" size=\"256\" type=\"STRING\"/><Column id=\"SRC_GRP_NM2\" size=\"256\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"CRTR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_CHGR_ID\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM16", this);
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

            obj = new Dataset("dslvl1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dslvl2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPtnrMaker", this);
            obj._setContents("<ColumnInfo><Column id=\"PTNR_MAKER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"MAKER\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_TS\" size=\"256\" type=\"STRING\"/><Column id=\"LIMIT_DAY\" size=\"256\" type=\"STRING\"/><Column id=\"CRTR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CRT_DT\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_CHGR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_CHG_DT\" size=\"256\" type=\"STRING\"/><Column id=\"CHECKED\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPtnrPlant", this);
            obj._setContents("<Column id=\"PTNR_PLANT_ID\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NATION\" size=\"256\" type=\"STRING\"/><Column id=\"NATION_RMK\" size=\"256\" type=\"STRING\"/><Column id=\"AREA\" size=\"256\" type=\"STRING\"/><Column id=\"ADDR\" size=\"256\" type=\"STRING\"/><Column id=\"GROSS_AREA\" size=\"256\" type=\"STRING\"/><Column id=\"CRTR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CRT_DT\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_CHGR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_CHG_DT\" size=\"256\" type=\"STRING\"/><ColumnInfo><Column id=\"PTNR_PLANT_ID\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"NATION_RMK\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_CHGR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_CHG_DT\" size=\"256\" type=\"STRING\"/><Column id=\"GROSS_AREA\" size=\"256\" type=\"STRING\"/><Column id=\"CRTR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CRT_DT\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NATION\" size=\"256\" type=\"STRING\"/><Column id=\"AREA\" size=\"256\" type=\"STRING\"/><Column id=\"ADDR\" size=\"256\" type=\"STRING\"/><Column id=\"CHECKED\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPtnrSampleFile", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_NM\" size=\"256\" type=\"STRING\"/><Column id=\"CHECKED\" size=\"256\" type=\"STRING\"/><Column id=\"NO\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CHECKED\">0</Col><Col id=\"NO\">1</Col><Col id=\"FILE_NM\">EPRO_LABEL_01239</Col></Row><Row><Col id=\"CHECKED\">0</Col><Col id=\"NO\">2</Col><Col id=\"FILE_NM\">EPRO_LABEL_01240</Col></Row><Row><Col id=\"FILE_NM\">EPRO_LABEL_01241</Col><Col id=\"CHECKED\">0</Col><Col id=\"NO\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPtnrSample", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPtnrMail", this);
            obj._setContents("<ColumnInfo><Column id=\"PTNR_NM\" size=\"256\" type=\"STRING\"/><Column id=\"CORP_REG_NO\" size=\"256\" type=\"STRING\"/><Column id=\"BIZ_NO\" size=\"256\" type=\"STRING\"/><Column id=\"BIZ_BGN_DAY\" size=\"256\" type=\"STRING\"/><Column id=\"BIZ_CNDTN\" size=\"256\" type=\"STRING\"/><Column id=\"BIZ_TYPE\" size=\"256\" type=\"STRING\"/><Column id=\"TEL\" size=\"256\" type=\"STRING\"/><Column id=\"FAX\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NATION\" size=\"256\" type=\"STRING\"/><Column id=\"NATION_RMARK\" size=\"256\" type=\"STRING\"/><Column id=\"AREA\" size=\"256\" type=\"STRING\"/><Column id=\"HM_PG\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_RMK\" size=\"256\" type=\"STRING\"/><Column id=\"RPRSTV_NM\" size=\"256\" type=\"STRING\"/><Column id=\"RPTST_TEL\" size=\"256\" type=\"STRING\"/><Column id=\"RPRSTV_EMAIL\" size=\"256\" type=\"STRING\"/><Column id=\"RPRSTV_HP\" size=\"256\" type=\"STRING\"/><Column id=\"ZIP_NO\" size=\"256\" type=\"STRING\"/><Column id=\"ADDR\" size=\"256\" type=\"STRING\"/><Column id=\"DTL_ADDR\" size=\"256\" type=\"STRING\"/><Column id=\"MAILCHECK\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new WebBrowser("wbBizNo", "absolute", null, "0", "183", "0", "24", null, this);
            obj.set_taborder("117");
            this.addChild(obj.name, obj);

            obj = new Tab("tabPtnr", "absolute", "0%", "5", null, "1491", "15", null, this);
            obj.set_cssclass("tab_default");
            obj.getSetter("objNm").set("TAB");
            obj.set_scrollbars("autoboth");
            obj.set_tabindex("0");
            obj.set_taborder("121");
            this.addChild(obj.name, obj);
            obj = new Tabpage("ptnrDetail", this.tabPtnr);
            obj.getSetter("objNm").set("기본정보");
            obj.set_scrollbars("none");
            obj.style.set_background("white");
            obj.set_text("회사기본정보");
            this.tabPtnr.addChild(obj.name, obj);
            obj = new Div("divViewCompTitle00", "absolute", "0", "5", null, "24", "0", null, this.tabPtnr.ptnrDetail);
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            obj.set_taborder("14");
            this.tabPtnr.ptnrDetail.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "0", "255", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompTitle00);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.getSetter("objNm").set("기본정보");
            obj.set_taborder("0");
            obj.set_text("기본정보");
            this.tabPtnr.ptnrDetail.divViewCompTitle00.addChild(obj.name, obj);
            obj = new Div("divViewCompTitle02", "absolute", "0", "449", null, "24", "3", null, this.tabPtnr.ptnrDetail);
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            obj.set_taborder("17");
            this.tabPtnr.ptnrDetail.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle02", "absolute", "0", "0", "255", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompTitle02);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.getSetter("objNm").set("사업장주소");
            obj.set_taborder("0");
            obj.set_text("사업장주소");
            this.tabPtnr.ptnrDetail.divViewCompTitle02.addChild(obj.name, obj);
            obj = new Div("divViewCompBody01", "absolute", "0", "363", null, "71", "0", null, this.tabPtnr.ptnrDetail);
            obj.getSetter("objNm").set("DIV-평가서 상세");
            obj.set_taborder("18");
            this.tabPtnr.ptnrDetail.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "1", null, "33", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody01);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("220");
            this.tabPtnr.ptnrDetail.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "33", null, "33", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody01);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("221");
            this.tabPtnr.ptnrDetail.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staRprstvNm", "absolute", "0", "1", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody01);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("대표자명");
            obj.set_positionstep("1");
            obj.set_taborder("222");
            obj.set_text("대표자명");
            obj.set_wordwrap("char");
            this.tabPtnr.ptnrDetail.divViewCompBody01.addChild(obj.name, obj);
            obj = new Edit("edtRprstvNm", "absolute", "176", "5", "380", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody01);
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("대표자명");
            obj.set_positionstep("1");
            obj.set_taborder("223");
            this.tabPtnr.ptnrDetail.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staRprstvEmail", "absolute", "0", "33", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody01);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("EMAIL");
            obj.set_positionstep("1");
            obj.set_taborder("224");
            obj.set_text("E-MAIL");
            obj.set_wordwrap("char");
            this.tabPtnr.ptnrDetail.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staRprstvHp", "absolute", "629", "33", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody01);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("휴대전화");
            obj.set_positionstep("1");
            obj.set_taborder("225");
            obj.set_text("휴대전화");
            obj.set_wordwrap("char");
            this.tabPtnr.ptnrDetail.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staRprstTel", "absolute", "629", "1", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody01);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("연락처");
            obj.set_positionstep("1");
            obj.set_taborder("226");
            obj.set_text("연락처");
            obj.set_wordwrap("char");
            this.tabPtnr.ptnrDetail.divViewCompBody01.addChild(obj.name, obj);
            obj = new Edit("edtHp", "absolute", "805", "5", "380", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody01);
            obj.set_inputfilter("sign,symbol");
            obj.set_inputtype("number");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("11");
            obj.getSetter("objNm").set("대표자 연락처");
            obj.set_positionstep("1");
            obj.set_taborder("227");
            this.tabPtnr.ptnrDetail.divViewCompBody01.addChild(obj.name, obj);
            obj = new Edit("edtHp01", "absolute", "805", "37", "380", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody01);
            obj.set_inputfilter("sign,symbol");
            obj.set_inputtype("number");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("11");
            obj.getSetter("objNm").set("대표자휴대전화");
            obj.set_positionstep("1");
            obj.set_taborder("228");
            this.tabPtnr.ptnrDetail.divViewCompBody01.addChild(obj.name, obj);
            obj = new Edit("edtEmail", "absolute", "176", "38", "380", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody01);
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("대표자 EMAIL");
            obj.set_positionstep("1");
            obj.set_taborder("229");
            this.tabPtnr.ptnrDetail.divViewCompBody01.addChild(obj.name, obj);
            obj = new Div("divViewCompTitle01", "absolute", "0", "339", null, "24", "0", null, this.tabPtnr.ptnrDetail);
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            obj.set_taborder("19");
            this.tabPtnr.ptnrDetail.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle01", "absolute", "0", "0", "255", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompTitle01);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.getSetter("objNm").set("대표자정보");
            obj.set_taborder("0");
            obj.set_text("대표자정보");
            this.tabPtnr.ptnrDetail.divViewCompTitle01.addChild(obj.name, obj);
            obj = new Div("divViewCompBody02", "absolute", "0", "473", null, "99", "0", null, this.tabPtnr.ptnrDetail);
            obj.getSetter("objNm").set("DIV-평가서 상세");
            obj.set_taborder("20");
            this.tabPtnr.ptnrDetail.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "0", null, "33", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody02);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("216");
            this.tabPtnr.ptnrDetail.divViewCompBody02.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "32", null, "33", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody02);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("217");
            this.tabPtnr.ptnrDetail.divViewCompBody02.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "64", null, "33", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody02);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("218");
            this.tabPtnr.ptnrDetail.divViewCompBody02.addChild(obj.name, obj);
            obj = new Static("staZipNo", "absolute", "0", "0", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody02);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("우편번호");
            obj.set_positionstep("1");
            obj.set_taborder("219");
            obj.set_text("우편번호");
            obj.set_wordwrap("char");
            this.tabPtnr.ptnrDetail.divViewCompBody02.addChild(obj.name, obj);
            obj = new Edit("edtZipNo", "absolute", "177", "4", "166", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody02);
            obj.set_inputfilter("sign,symbol");
            obj.set_inputtype("number");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("우편번호");
            obj.set_positionstep("1");
            obj.set_readonly("true");
            obj.set_taborder("220");
            this.tabPtnr.ptnrDetail.divViewCompBody02.addChild(obj.name, obj);
            obj = new Static("staAddr", "absolute", "0", "32", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody02);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("주소");
            obj.set_positionstep("1");
            obj.set_taborder("221");
            obj.set_text("주소");
            obj.set_wordwrap("char");
            this.tabPtnr.ptnrDetail.divViewCompBody02.addChild(obj.name, obj);
            obj = new Edit("edtAddr", "absolute", "177", "36", "421", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody02);
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("주소");
            obj.set_positionstep("1");
            obj.set_taborder("222");
            this.tabPtnr.ptnrDetail.divViewCompBody02.addChild(obj.name, obj);
            obj = new Static("staDtlAddr", "absolute", "0", "64", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody02);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("상세주소");
            obj.set_positionstep("1");
            obj.set_taborder("223");
            obj.set_text("상세주소");
            obj.set_wordwrap("char");
            this.tabPtnr.ptnrDetail.divViewCompBody02.addChild(obj.name, obj);
            obj = new Edit("edtDtlAddr", "absolute", "177", "68", "421", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody02);
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("상세주소");
            obj.set_positionstep("1");
            obj.set_taborder("224");
            this.tabPtnr.ptnrDetail.divViewCompBody02.addChild(obj.name, obj);
            obj = new Button("btnZipNo", "absolute", "348", "4", "24", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody02);
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("평가담당자 검색 버튼");
            obj.set_taborder("225");
            obj.set_visible("false");
            this.tabPtnr.ptnrDetail.divViewCompBody02.addChild(obj.name, obj);
            obj = new Div("divViewCompTitle04", "absolute", "0", "587", null, "24", "0", null, this.tabPtnr.ptnrDetail);
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            obj.set_taborder("21");
            this.tabPtnr.ptnrDetail.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle04", "absolute", "0", "0", "255", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompTitle04);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.getSetter("objNm").set("경영실태현황");
            obj.set_taborder("0");
            obj.set_text("경영실태현황");
            this.tabPtnr.ptnrDetail.divViewCompTitle04.addChild(obj.name, obj);
            obj = new Div("divViewCompBody04", "absolute", "0", "611", null, "291", "0", null, this.tabPtnr.ptnrDetail);
            obj.getSetter("objNm").set("DIV-평가서 상세");
            obj.set_taborder("22");
            this.tabPtnr.ptnrDetail.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "1", null, "33", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("259");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "33", null, "33", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("260");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "65", null, "33", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("261");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staViewCompLine04", "absolute", "0", "97", null, "33", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("262");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staViewCompLine05", "absolute", "0", "161", null, "66", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("263");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staViewCompLine06", "absolute", "0", "226", null, "33", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.getSetter("objNm").set("");
            obj.set_taborder("264");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staAst", "absolute", "0", "1", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("자산총계");
            obj.set_positionstep("1");
            obj.set_taborder("265");
            obj.set_text("자산총계");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new MaskEdit("medAst", "absolute", "176", "5", "140", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_displaynulltext("0");
            obj.set_mask("9,999");
            obj.getSetter("objNm").set("자산총계");
            obj.set_taborder("266");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staWon01", "absolute", "321", "8", "50", "20", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.style.set_align("left middle");
            obj.set_taborder("267");
            obj.set_text("원");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staCapl", "absolute", "0", "33", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("자본금총계");
            obj.set_positionstep("1");
            obj.set_taborder("268");
            obj.set_text("자본금총계");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new MaskEdit("medCapl", "absolute", "176", "37", "140", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_displaynulltext("0");
            obj.set_limitbymask("integer");
            obj.set_mask("99,999,999,999,999");
            obj.set_maskchar(" ");
            obj.getSetter("objNm").set("자본금총계");
            obj.set_taborder("269");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staWon02", "absolute", "321", "40", "50", "20", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.style.set_align("left middle");
            obj.set_taborder("270");
            obj.set_text("원");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staDebt", "absolute", "0", "65", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("부채총계");
            obj.set_positionstep("1");
            obj.set_taborder("271");
            obj.set_text("부채총계");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new MaskEdit("medDebt", "absolute", "176", "69", "140", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_displaynulltext("0");
            obj.set_limitbymask("integer");
            obj.set_mask("99,999,999,999,999");
            obj.set_maskchar(" ");
            obj.getSetter("objNm").set("부채총계");
            obj.set_taborder("272");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staWon03", "absolute", "321", "72", "50", "20", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.style.set_align("left middle");
            obj.set_taborder("273");
            obj.set_text("원");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staEmpCnt", "absolute", "0", "97", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("총인원");
            obj.set_positionstep("1");
            obj.set_taborder("274");
            obj.set_text("총인원");
            obj.set_wordwrap("char");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new MaskEdit("medEmpCnt", "absolute", "176", "101", "140", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_displaynulltext("0");
            obj.set_mask("9,999");
            obj.getSetter("objNm").set("총인원");
            obj.set_taborder("275");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staPer01", "absolute", "321", "104", "50", "20", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.style.set_align("left middle");
            obj.set_taborder("276");
            obj.set_text("명");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staMjrCstmr", "absolute", "0", "161", "171", "66", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("주요거래처");
            obj.set_positionstep("1");
            obj.set_taborder("286");
            obj.set_text("주요거래처");
            obj.set_wordwrap("char");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staSales", "absolute", "0", "226", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("3개년 매출액");
            obj.style.set_align("left middle");
            obj.set_taborder("287");
            obj.set_text("3개년 매출액");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staYr1", "absolute", "302", "260", "50", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_taborder("288");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new MaskEdit("maeSalesAmt1", "absolute", "250", "230", "140", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_autoselect("true");
            obj.set_cssclass("mae_default_r");
            obj.set_displaynulltext("0");
            obj.set_limitbymask("integer");
            obj.set_mask("999,999,999,999,999");
            obj.getSetter("objNm").set("3개년 매출액_1");
            obj.set_taborder("289");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staWon04", "absolute", "395", "233", "50", "20", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.getSetter("objNm").set("");
            obj.set_taborder("290");
            obj.set_text("원");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staYr2", "absolute", "582", "260", "50", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_taborder("291");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new MaskEdit("maeSalesAmt2", "absolute", "524", "230", "150", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_autoselect("true");
            obj.set_cssclass("mae_default_r");
            obj.set_displaynulltext("0");
            obj.set_limitbymask("integer");
            obj.set_mask("999,999,999,999,999");
            obj.getSetter("objNm").set("3개년 매출액_2");
            obj.set_taborder("292");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staWon05", "absolute", "679", "230", "50", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.getSetter("objNm").set("");
            obj.set_taborder("293");
            obj.set_text("원");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staYr3", "absolute", "882", "260", "50", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_taborder("294");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new MaskEdit("maeSalesAmt3", "absolute", "808", "230", "150", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_autoselect("true");
            obj.set_cssclass("mae_default_r");
            obj.set_displaynulltext("0");
            obj.set_limitbymask("integer");
            obj.set_mask("999,999,999,999,999");
            obj.getSetter("objNm").set("3개년 매출액_3");
            obj.set_taborder("295");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staWon06", "absolute", "963", "230", "50", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.getSetter("objNm").set("");
            obj.set_taborder("296");
            obj.set_text("원");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new TextArea("txtMjrCstmr", "absolute", "176", "165", "943", "59", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_maxlength("1000");
            obj.getSetter("objNm").set("주요거래처");
            obj.set_scrollbars("autovert");
            obj.set_taborder("297");
            obj.set_wordwrap("char");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staViewCompLine03", "absolute", "0", "258", null, "33", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.getSetter("objNm").set("");
            obj.set_taborder("298");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("stabizProfit", "absolute", "0", "258", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("3개년 영업이익");
            obj.style.set_align("left middle");
            obj.set_taborder("299");
            obj.set_text("3개년 영업이익");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new MaskEdit("maebizProfit", "absolute", "250", "262", "140", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_autoselect("true");
            obj.set_cssclass("mae_default_r");
            obj.set_displaynulltext("0");
            obj.set_limitbymask("integer");
            obj.set_mask("999,999,999,999,999");
            obj.getSetter("objNm").set("3개년 영업이익_1");
            obj.set_taborder("300");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staWon07", "absolute", "395", "265", "50", "20", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.getSetter("objNm").set("");
            obj.set_taborder("301");
            obj.set_text("원");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new MaskEdit("maebizProfit2", "absolute", "524", "262", "150", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_autoselect("true");
            obj.set_cssclass("mae_default_r");
            obj.set_displaynulltext("0");
            obj.set_limitbymask("integer");
            obj.set_mask("999,999,999,999,999");
            obj.getSetter("objNm").set("3개년 영업이익_2");
            obj.set_taborder("302");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staWon08", "absolute", "679", "262", "50", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.getSetter("objNm").set("");
            obj.set_taborder("303");
            obj.set_text("원");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new MaskEdit("maebizProfit3", "absolute", "808", "262", "150", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_autoselect("true");
            obj.set_cssclass("mae_default_r");
            obj.set_displaynulltext("0");
            obj.set_limitbymask("integer");
            obj.set_mask("999,999,999,999,999");
            obj.getSetter("objNm").set("3개년 영업이익_3");
            obj.set_taborder("304");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staWon09", "absolute", "963", "262", "50", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.getSetter("objNm").set("");
            obj.set_taborder("305");
            obj.set_text("원");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staSalesYr1", "absolute", "176", "233", "30", "20", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.style.set_align("right middle");
            obj.set_taborder("306");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "211", "233", "34", "20", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_taborder("307");
            obj.set_text("년");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staSalesYr00", "absolute", "176", "265", "30", "20", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.style.set_align("right middle");
            obj.set_taborder("308");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "211", "265", "34", "20", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_taborder("309");
            obj.set_text("년");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staSalesYr02", "absolute", "450", "233", "30", "20", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.style.set_align("right middle");
            obj.set_taborder("310");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "485", "233", "34", "20", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_taborder("311");
            obj.set_text("년");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staSalesYr03", "absolute", "734", "233", "30", "20", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.style.set_align("right middle");
            obj.set_taborder("312");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "769", "233", "34", "20", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_taborder("313");
            obj.set_text("년");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "485", "265", "34", "20", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_taborder("314");
            obj.set_text("년");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staSalesYr04", "absolute", "450", "265", "30", "20", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.style.set_align("right middle");
            obj.set_taborder("315");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "769", "265", "34", "20", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_taborder("316");
            obj.set_text("년");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staSalesYr05", "absolute", "734", "265", "30", "20", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.style.set_align("right middle");
            obj.set_taborder("317");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staViewCompLine07", "absolute", "0", "129", null, "33", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("318");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staEmpCntSa", "absolute", "376", "129", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("사무직");
            obj.set_positionstep("1");
            obj.set_taborder("319");
            obj.set_text("사무직");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new MaskEdit("medEmpCntSa", "absolute", "552", "133", "141", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_displaynulltext("0");
            obj.set_limitbymask("integer");
            obj.set_mask("9,999,999");
            obj.set_maskchar(" ");
            obj.getSetter("objNm").set("사무직");
            obj.set_taborder("320");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staPer03", "absolute", "698", "136", "50", "20", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.getSetter("objNm").set("");
            obj.style.set_align("left middle");
            obj.set_taborder("321");
            obj.set_text("명");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staEmpCntEtc", "absolute", "753", "129", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("기타직군");
            obj.set_positionstep("1");
            obj.set_taborder("322");
            obj.set_text("기타직군");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new MaskEdit("medEmpCntEtc", "absolute", "929", "133", "140", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_displaynulltext("0");
            obj.set_limitbymask("integer");
            obj.set_mask("9,999,999");
            obj.set_maskchar(" ");
            obj.getSetter("objNm").set("기타직군");
            obj.set_taborder("323");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staPer04", "absolute", "1074", "136", "50", "20", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.getSetter("objNm").set("");
            obj.style.set_align("left middle");
            obj.set_taborder("324");
            obj.set_text("명");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staEmpCntKi", "absolute", "0", "129", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("기능직");
            obj.set_positionstep("1");
            obj.set_taborder("325");
            obj.set_text("기능직");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new MaskEdit("medEmpCntKi", "absolute", "176", "133", "140", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_displaynulltext("0");
            obj.set_limitbymask("integer");
            obj.set_mask("9,999,999");
            obj.set_maskchar(" ");
            obj.getSetter("objNm").set("기능직");
            obj.set_taborder("326");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staPer02", "absolute", "321", "136", "50", "20", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.getSetter("objNm").set("");
            obj.style.set_align("left middle");
            obj.set_taborder("327");
            obj.set_text("명");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Div("divViewCompTitle05", "absolute", "0", "922", null, "24", "0", null, this.tabPtnr.ptnrDetail);
            obj.getSetter("objNm").set("DIV-공장유무 타이틀");
            obj.set_taborder("23");
            this.tabPtnr.ptnrDetail.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle05", "absolute", "0", "0", "255", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompTitle05);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.getSetter("objNm").set("공장유무");
            obj.set_taborder("0");
            obj.set_text("공장유무");
            this.tabPtnr.ptnrDetail.divViewCompTitle05.addChild(obj.name, obj);
            obj = new Button("btnPlantAdd", "absolute", null, "0", "70", null, "74", "0", this.tabPtnr.ptnrDetail.divViewCompTitle05);
            obj.getSetter("objNm").set("공장추가");
            obj.set_taborder("1");
            obj.set_text("추가");
            this.tabPtnr.ptnrDetail.divViewCompTitle05.addChild(obj.name, obj);
            obj = new Button("btnPlantDel", "absolute", null, "0", "70", null, "0", "0", this.tabPtnr.ptnrDetail.divViewCompTitle05);
            obj.getSetter("objNm").set("공장삭제");
            obj.set_taborder("2");
            obj.set_text("삭제");
            this.tabPtnr.ptnrDetail.divViewCompTitle05.addChild(obj.name, obj);
            obj = new Div("divViewCompBody05", "absolute", "0", "951", null, "161", "0", null, this.tabPtnr.ptnrDetail);
            obj.getSetter("objNm").set("DIV-평가서 상세");
            obj.set_taborder("24");
            this.tabPtnr.ptnrDetail.addChild(obj.name, obj);
            obj = new Grid("grdPlant", "absolute", "0", "0", null, null, "0", "0", this.tabPtnr.ptnrDetail.divViewCompBody05);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsPtnrPlant");
            obj.getSetter("objNm").set("Plant");
            obj.set_taborder("185");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"180\"/><Column size=\"476\"/><Column size=\"314\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" colspan=\"2\" expr=\"\" text=\"국가\"/><Cell col=\"3\" cssclass=\"Cellgrd_essential\" expr=\"\" text=\"지역\" tooltiptext=\"\"/><Cell col=\"4\" cssclass=\"Cellgrd_essential\" expr=\"\" text=\"주소\" tooltiptext=\"\"/><Cell col=\"5\" cssclass=\"Cellgrd_essential\" expr=\"\" text=\"비고\" tooltiptext=\"\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\"/><Cell col=\"1\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" combodataset=\"dsCdCM16\" combodisplay=\"display\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left middle;\" text=\"bind:CD_NATION\" tooltiptext=\"bind:CD_NATION\"/><Cell col=\"2\" displaytype=\"expr:CD_NATION=='CM16ETC' ? 'text' : 'none'\" editdisplay=\"expr:CD_NATION=='CM16ETC' ? 'display' : 'edit'\" editlengthunit=\"ascii\" editlimit=\"100\" edittype=\"expr:CD_NATION=='CM16ETC' ? 'text' : 'none'\" text=\"bind:NATION_RMK\"/><Cell col=\"3\" displaytype=\"text\" editdisplay=\"display\" editlengthunit=\"ascii\" editlimit=\"100\" edittype=\"text\" style=\"align:left middle;\" text=\"bind:AREA\" tooltiptext=\"bind:AREA\"/><Cell col=\"4\" displaytype=\"text\" editdisplay=\"display\" editlengthunit=\"ascii\" editlimit=\"500\" edittype=\"text\" style=\"align:left middle;\" text=\"bind:ADDR\" tooltiptext=\"bind:ADDR\"/><Cell col=\"5\" displaytype=\"text\" editdisplay=\"display\" editlengthunit=\"ascii\" editlimit=\"100\" edittype=\"text\" style=\"align:left middle;\" text=\"bind:GROSS_AREA\" tooltiptext=\"bind:GROSS_AREA\"/></Band></Format></Formats>");
            this.tabPtnr.ptnrDetail.divViewCompBody05.addChild(obj.name, obj);
            obj = new Div("divViewCompBody00", "absolute", "0", "34", null, "292", "0", null, this.tabPtnr.ptnrDetail);
            obj.getSetter("objNm").set("DIV-평가서 상세");
            obj.set_taborder("25");
            this.tabPtnr.ptnrDetail.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "1", null, "33", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("334");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "33", null, "33", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("335");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "65", null, "33", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("336");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine03", "absolute", "0", "97", null, "33", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("337");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine04", "absolute", "0", "129", null, "33", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("338");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine05", "absolute", "0", "225", null, "65", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("339");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staCorpRegNo", "absolute", "0", "33", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("법인등록번호");
            obj.set_positionstep("1");
            obj.set_taborder("341");
            obj.set_text("법인등록번호");
            obj.set_wordwrap("char");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staBizCndtn", "absolute", "0", "97", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("업태");
            obj.set_positionstep("1");
            obj.set_taborder("342");
            obj.set_text("업태");
            obj.set_wordwrap("char");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staBizType", "absolute", "629", "97", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("종목");
            obj.set_positionstep("1");
            obj.set_taborder("343");
            obj.set_text("업종");
            obj.set_wordwrap("char");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staTel", "absolute", "0", "129", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("대표전화");
            obj.set_positionstep("1");
            obj.set_taborder("344");
            obj.set_text("대표전화");
            obj.set_wordwrap("char");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staFax", "absolute", "629", "129", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("FAX");
            obj.set_positionstep("1");
            obj.set_taborder("345");
            obj.set_text("FAX");
            obj.set_wordwrap("char");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staBizBgnDay", "absolute", "0", "65", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("설립연도");
            obj.set_positionstep("1");
            obj.set_taborder("346");
            obj.set_text("영업개시일자");
            obj.set_wordwrap("char");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Calendar("cldBizBgnDay", "absolute", "176", "70", "150", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj.set_autoselect("true");
            obj.set_dateformat("yyyy");
            obj.set_editformat("yyyy");
            obj.set_locale("en_US");
            obj.getSetter("objNm").set("설립연도");
            obj.set_taborder("347");
            obj.set_type("spin");
            obj.set_value("null");
            obj = new Edit("edtBizCndtn", "absolute", "176", "101", "150", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("업태");
            obj.set_positionstep("1");
            obj.set_taborder("348");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtBizType", "absolute", "805", "101", "150", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("종목");
            obj.set_positionstep("1");
            obj.set_taborder("349");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staBizNo", "absolute", "629", "33", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("사업자등록번호");
            obj.set_positionstep("1");
            obj.set_taborder("351");
            obj.set_text("사업자번호");
            obj.set_visible("false");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staPtnrNm", "absolute", "0", "1", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("업체명(한글)");
            obj.set_positionstep("1");
            obj.set_taborder("352");
            obj.set_text("업체명");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtPtnrNm", "absolute", "176", "5", "380", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("업체명(한글)");
            obj.set_positionstep("1");
            obj.set_taborder("353");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staRmark", "absolute", "0", "225", "171", "65", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("특기사항/연혁");
            obj.set_positionstep("1");
            obj.set_taborder("354");
            obj.set_text("특기사항/연혁");
            obj.set_wordwrap("char");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new MaskEdit("medBizNo", "absolute", "805", "37", "150", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_mask("999-99-99999");
            obj.getSetter("objNm").set("사업자등록번호");
            obj.set_readonly("false");
            obj.set_taborder("356");
            obj.set_type("string");
            obj.set_visible("false");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new MaskEdit("medtCorpRegNo", "absolute", "176", "37", "150", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_mask("999999-9999999");
            obj.getSetter("objNm").set("법인등록번호");
            obj.set_taborder("357");
            obj.set_type("string");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine06", "absolute", "0", "161", null, "33", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("358");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staTel00", "absolute", "0", "161", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("국가");
            obj.set_positionstep("1");
            obj.set_taborder("359");
            obj.set_text("국가");
            obj.set_wordwrap("char");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staAddr", "absolute", "629", "161", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("지역");
            obj.set_positionstep("1");
            obj.set_taborder("360");
            obj.set_text("지역");
            obj.set_wordwrap("char");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtAddr", "absolute", "805", "165", "150", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("지역");
            obj.set_positionstep("1");
            obj.set_taborder("361");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine07", "absolute", "0", "193", null, "33", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("362");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staHPage", "absolute", "0", "193", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("HomePage");
            obj.set_positionstep("1");
            obj.set_taborder("363");
            obj.set_text("Hmepage");
            obj.set_wordwrap("char");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtHPage", "absolute", "176", "197", "380", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("HomePage");
            obj.set_positionstep("1");
            obj.set_taborder("364");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtFax", "absolute", "805", "133", "150", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_inputfilter("sign,symbol");
            obj.set_inputtype("number");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("FAX");
            obj.set_positionstep("1");
            obj.set_taborder("365");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtTel", "absolute", "176", "133", "150", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_inputfilter("sign,symbol");
            obj.set_inputtype("number");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("대표전화");
            obj.set_positionstep("1");
            obj.set_taborder("366");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Combo("cboHp02", "absolute", "698", "-611", "108", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_innerdataset("dsCdCM81");
            obj.getSetter("objNm").set("HP1");
            obj.set_taborder("367");
            obj = new Combo("cboCdNation", "absolute", "176", "165", "150", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_innerdataset("dsCdCM16");
            obj.getSetter("objNm").set("국가");
            obj.set_taborder("368");
            obj = new Edit("edtEctNation", "absolute", "331", "165", "225", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("기타국가");
            obj.set_positionstep("1");
            obj.set_taborder("371");
            obj.set_visible("false");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new TextArea("taRmark", "absolute", "176", "229", "943", "57", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.getSetter("objNm").set("특기사항/연혁");
            obj.set_taborder("372");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Div("divViewCompTitle06", "absolute", "0", "1247", null, "24", "0", null, this.tabPtnr.ptnrDetail);
            obj.getSetter("objNm").set("DIV-신용평가서 타이틀");
            obj.set_taborder("26");
            this.tabPtnr.ptnrDetail.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle06", "absolute", "0", "0", "255", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompTitle06);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.getSetter("objNm").set("MAKER");
            obj.set_taborder("0");
            obj.set_text("Maker");
            this.tabPtnr.ptnrDetail.divViewCompTitle06.addChild(obj.name, obj);
            obj = new Button("btnMakerAdd", "absolute", null, "0", "70", null, "79", "1", this.tabPtnr.ptnrDetail.divViewCompTitle06);
            obj.getSetter("objNm").set("Maker추가");
            obj.set_taborder("1");
            obj.set_text("추가");
            this.tabPtnr.ptnrDetail.divViewCompTitle06.addChild(obj.name, obj);
            obj = new Button("btnMakerDel", "absolute", null, "0", "75", "24", "0", null, this.tabPtnr.ptnrDetail.divViewCompTitle06);
            obj.getSetter("objNm").set("Maker삭제");
            obj.set_taborder("2");
            obj.set_text("삭제");
            this.tabPtnr.ptnrDetail.divViewCompTitle06.addChild(obj.name, obj);
            obj = new Div("divViewCompBody06", "absolute", "0", "1276", null, "174", "0", null, this.tabPtnr.ptnrDetail);
            obj.getSetter("objNm").set("DIV-주요실적");
            obj.set_taborder("27");
            this.tabPtnr.ptnrDetail.addChild(obj.name, obj);
            obj = new Grid("grdMaker", "absolute", "0", "0", null, null, "0", "0", this.tabPtnr.ptnrDetail.divViewCompBody06);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsPtnrMaker");
            obj.set_locale("en_US");
            obj.getSetter("objNm").set("Maker");
            obj.set_taborder("2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"582\"/><Column size=\"290\"/><Column size=\"290\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" cssclass=\"Cellgrd_essential\" expr=\"\" text=\"Maker(Manufacturer)\" tooltiptext=\"\"/><Cell col=\"2\" expr=\"\" text=\"TS16949\" tooltiptext=\"\"/><Cell col=\"3\" expr=\"\" text=\"만료일자\" tooltiptext=\"\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\"/><Cell col=\"1\" displaytype=\"text\" editlengthunit=\"ascii\" editlimit=\"500\" edittype=\"text\" style=\"align:left middle;\" text=\"bind:MAKER\" tooltiptext=\"bind:MAKER\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ALT_TS\"/><Cell calendardisplaynulltype=\"none\" col=\"3\" displaytype=\"date\" editlengthunit=\"ascii\" editlimit=\"8\" edittype=\"date\" mask=\"yyyy-MM-dd\" text=\"bind:LIMIT_DAY\" tooltiptext=\"bind:LIMIT_DAY\"/></Band></Format></Formats>");
            this.tabPtnr.ptnrDetail.divViewCompBody06.addChild(obj.name, obj);
            obj = new Div("divViewCompBody03", "absolute", "0", "1161", null, "66", "0", null, this.tabPtnr.ptnrDetail);
            obj.getSetter("objNm").set("DIV-평가서 상세");
            obj.set_taborder("28");
            this.tabPtnr.ptnrDetail.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "1", null, "33", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody03);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("195");
            this.tabPtnr.ptnrDetail.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staSquar", "absolute", "0", "1", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody03);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.style.set_align("left middle");
            obj.set_taborder("196");
            obj.set_text("등급");
            obj.set_usedecorate("true");
            this.tabPtnr.ptnrDetail.divViewCompBody03.addChild(obj.name, obj);
            obj = new Edit("edtSquar", "absolute", "176", "6", "166", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody03);
            obj.set_autoselect("true");
            obj.getSetter("objNm").set("등급");
            obj.style.set_align("left middle");
            obj.set_taborder("197");
            this.tabPtnr.ptnrDetail.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staSquar00", "absolute", "629", "1", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody03);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.style.set_align("left middle");
            obj.set_taborder("198");
            obj.set_text("현금흐름등급");
            obj.set_usedecorate("true");
            this.tabPtnr.ptnrDetail.divViewCompBody03.addChild(obj.name, obj);
            obj = new Edit("edtSquar00", "absolute", "805", "6", "166", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody03);
            obj.set_autoselect("true");
            obj.getSetter("objNm").set("현금흐름등급");
            obj.style.set_align("left middle");
            obj.set_taborder("199");
            this.tabPtnr.ptnrDetail.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "33", null, "33", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody03);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("200");
            this.tabPtnr.ptnrDetail.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staSquar01", "absolute", "0", "33", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody03);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.style.set_align("left middle");
            obj.set_taborder("201");
            obj.set_text("발행기관");
            obj.set_usedecorate("true");
            this.tabPtnr.ptnrDetail.divViewCompBody03.addChild(obj.name, obj);
            obj = new Edit("edtSquar01", "absolute", "176", "38", "166", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody03);
            obj.set_autoselect("true");
            obj.getSetter("objNm").set("발행기관");
            obj.set_taborder("202");
            this.tabPtnr.ptnrDetail.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staSquar02", "absolute", "629", "33", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody03);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.style.set_align("left middle");
            obj.set_taborder("203");
            obj.set_text("발행일");
            obj.set_usedecorate("true");
            this.tabPtnr.ptnrDetail.divViewCompBody03.addChild(obj.name, obj);
            obj = new Calendar("cldBizBgnDay", "absolute", "805", "38", "166", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody03);
            this.tabPtnr.ptnrDetail.divViewCompBody03.addChild(obj.name, obj);
            obj.set_locale("en_US");
            obj.getSetter("objNm").set("발행일");
            obj.style.set_align("left middle");
            obj.set_taborder("204");
            obj = new Div("divViewCompTitle03", "absolute", "0", "1132", null, "24", "0", null, this.tabPtnr.ptnrDetail);
            obj.getSetter("objNm").set("DIV-신용평가서 타이틀");
            obj.set_taborder("29");
            this.tabPtnr.ptnrDetail.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle03", "absolute", "0", "0", "255", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompTitle03);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("0");
            obj.set_text("신용평가서");
            this.tabPtnr.ptnrDetail.divViewCompTitle03.addChild(obj.name, obj);
            obj = new Tabpage("aprvDetail", this.tabPtnr);
            obj.set_text("결재정보");
            this.tabPtnr.addChild(obj.name, obj);
            obj = new Div("divViewCompBody00", "absolute", "0", "5", null, "228", "0", null, this.tabPtnr.aprvDetail);
            obj.getSetter("objNm").set("DIV-평가서 상세");
            obj.set_taborder("24");
            this.tabPtnr.aprvDetail.addChild(obj.name, obj);
            obj = new Div("divViewCompTitle00", "absolute", "0", "6", null, "24", "0", null, this.tabPtnr.aprvDetail.divViewCompBody00);
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            obj.set_taborder("0");
            this.tabPtnr.aprvDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "0", "255", "24", null, null, this.tabPtnr.aprvDetail.divViewCompBody00.divViewCompTitle00);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.getSetter("objNm").set("결제정보");
            obj.set_taborder("0");
            obj.set_text("결재정보");
            this.tabPtnr.aprvDetail.divViewCompBody00.divViewCompTitle00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine05", "absolute", "0", "0", null, "135", "0", null, this.tabPtnr.aprvDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("1");
            this.tabPtnr.aprvDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "0", null, "33", "0", null, this.tabPtnr.aprvDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("2");
            this.tabPtnr.aprvDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "64", null, "33", "0", null, this.tabPtnr.aprvDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("3");
            this.tabPtnr.aprvDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staPymtBnk", "absolute", "0", "0", "171", "33", null, null, this.tabPtnr.aprvDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("거래은행");
            obj.set_positionstep("1");
            obj.set_taborder("4");
            obj.set_text("거래은행");
            this.tabPtnr.aprvDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtPymtBnk", "absolute", "176", "4", "357", "24", null, null, this.tabPtnr.aprvDetail.divViewCompBody00);
            obj.set_autoselect("true");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("90");
            obj.getSetter("objNm").set("거래은행");
            obj.set_taborder("5");
            this.tabPtnr.aprvDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "96", null, "33", "0", null, this.tabPtnr.aprvDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("6");
            this.tabPtnr.aprvDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staPymtBnkAddr", "absolute", "0", "64", "171", "33", null, null, this.tabPtnr.aprvDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("거래은행주소");
            obj.set_positionstep("1");
            obj.set_taborder("7");
            obj.set_text("거래은행 주소");
            this.tabPtnr.aprvDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtPymtBnkAddr", "absolute", "176", "69", "357", "24", null, null, this.tabPtnr.aprvDetail.divViewCompBody00);
            obj.set_autoselect("true");
            obj.set_inputfilter("dot,comma,sign,space");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("50");
            obj.getSetter("objNm").set("거래은행 주소");
            obj.set_taborder("8");
            this.tabPtnr.aprvDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staBnkAcntNo", "absolute", "0", "96", "171", "33", null, null, this.tabPtnr.aprvDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("계좌정보");
            obj.set_positionstep("1");
            obj.set_taborder("9");
            obj.set_text("계좌정보");
            this.tabPtnr.aprvDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtBnkAcntNo", "absolute", "176", "100", "357", "24", null, null, this.tabPtnr.aprvDetail.divViewCompBody00);
            obj.set_autoselect("true");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.getSetter("objNm").set("계좌정보");
            obj.set_taborder("10");
            this.tabPtnr.aprvDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine07", "absolute", "0", "32", null, "33", "0", null, this.tabPtnr.aprvDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("20");
            this.tabPtnr.aprvDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtBnkOwnr", "absolute", "176", "36", "357", "24", null, null, this.tabPtnr.aprvDetail.divViewCompBody00);
            obj.set_autoselect("true");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("90");
            obj.getSetter("objNm").set("거래은행");
            obj.set_taborder("21");
            this.tabPtnr.aprvDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staBnkOwnr", "absolute", "0", "32", "171", "33", null, null, this.tabPtnr.aprvDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("예금주");
            obj.set_positionstep("1");
            obj.set_taborder("22");
            obj.set_text("예금주");
            this.tabPtnr.aprvDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Tabpage("relateDocument", this.tabPtnr);
            obj.set_text("관련문서");
            this.tabPtnr.addChild(obj.name, obj);
            obj = new Div("divViewCompTitle05", "absolute", "0", "1", null, "24", "0", null, this.tabPtnr.relateDocument);
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            obj.set_taborder("3");
            this.tabPtnr.relateDocument.addChild(obj.name, obj);
            obj = new Div("divViewCompBody00", "absolute", "0", "5", "1200", "252", null, null, this.tabPtnr.relateDocument);
            obj.getSetter("objNm").set("DIV-평가서 상세");
            obj.set_taborder("5");
            this.tabPtnr.relateDocument.addChild(obj.name, obj);
            obj = new Grid("grdPtnrFile", "absolute", "0", "0", null, null, "2", "0", this.tabPtnr.relateDocument.divViewCompBody00);
            obj.set_autofittype("col");
            obj.set_binddataset("dsPtnrFile");
            obj.set_cellclickbound("cell");
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"43\"/><Column size=\"600\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"No\"/><Cell col=\"1\" expr=\"\" text=\"첨부파일명\" tooltiptext=\"\"/><Cell col=\"2\" expr=\"\" text=\"필수여부\" tooltiptext=\"\"/><Cell col=\"3\" expr=\"\" text=\"서식(한글)\" tooltiptext=\"\"/><Cell col=\"4\" expr=\"\" text=\"서식(영문)\" tooltiptext=\"\"/><Cell col=\"5\" expr=\"\" text=\"파일첨부\" tooltiptext=\"\"/></Band><Band id=\"body\"><Cell text=\"bind:NO\" tooltiptext=\"bind:NO\"/><Cell col=\"1\" expr=\"expr:gfnMultiLabel(FILE_NM)\" style=\"align:left;\" text=\"bind:FILE_NM\" tooltiptext=\"expr:gfnMultiLabel(FILE_NM)\"/><Cell col=\"2\" displaytype=\"checkbox\" text=\"bind:CHECKED\"/><Cell col=\"3\" displaytype=\"expr:KR != '' ? 'button' : 'normal'\" edittype=\"expr:KR != '' ? 'button' : 'none'\" expr=\"expr:gfnMultiLabel(KR)\" text=\"bind:KR\" tooltiptext=\"expr:gfnMultiLabel(KR)\"/><Cell col=\"4\" displaytype=\"expr:EN != '' ? 'button' : 'normal'\" edittype=\"expr:EN != '' ? 'button' : 'none'\" expr=\"expr:gfnMultiLabel(EN)\" text=\"bind:EN\" tooltiptext=\"expr:gfnMultiLabel(EN)\"/><Cell col=\"5\" displaytype=\"button\" editdisplay=\"display\" edittype=\"button\" style=\"controlbackground:URL('img::grdBtn_file.png') center middle;controlborder:1 none #808080ff ;\"/></Band></Format></Formats>");
            this.tabPtnr.relateDocument.divViewCompBody00.addChild(obj.name, obj);

            obj = new WebBrowser("wbBizNo00", "absolute", null, "8", "183", "0", "16", null, this);
            obj.set_taborder("122");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.tabPtnr.ptnrDetail.divViewCompTitle00,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 타이틀");
            		p.set_taborder("14");

            	}
            );
            this.tabPtnr.ptnrDetail.divViewCompTitle00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.tabPtnr.ptnrDetail.divViewCompTitle02,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 타이틀");
            		p.set_taborder("17");

            	}
            );
            this.tabPtnr.ptnrDetail.divViewCompTitle02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 71, this.tabPtnr.ptnrDetail.divViewCompBody01,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 상세");
            		p.set_taborder("18");

            	}
            );
            this.tabPtnr.ptnrDetail.divViewCompBody01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.tabPtnr.ptnrDetail.divViewCompTitle01,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 타이틀");
            		p.set_taborder("19");

            	}
            );
            this.tabPtnr.ptnrDetail.divViewCompTitle01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 99, this.tabPtnr.ptnrDetail.divViewCompBody02,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 상세");
            		p.set_taborder("20");

            	}
            );
            this.tabPtnr.ptnrDetail.divViewCompBody02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.tabPtnr.ptnrDetail.divViewCompTitle04,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 타이틀");
            		p.set_taborder("21");

            	}
            );
            this.tabPtnr.ptnrDetail.divViewCompTitle04.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 291, this.tabPtnr.ptnrDetail.divViewCompBody04,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 상세");
            		p.set_taborder("22");

            	}
            );
            this.tabPtnr.ptnrDetail.divViewCompBody04.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.tabPtnr.ptnrDetail.divViewCompTitle05,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-공장유무 타이틀");
            		p.set_taborder("23");

            	}
            );
            this.tabPtnr.ptnrDetail.divViewCompTitle05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 161, this.tabPtnr.ptnrDetail.divViewCompBody05,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 상세");
            		p.set_taborder("24");

            	}
            );
            this.tabPtnr.ptnrDetail.divViewCompBody05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 292, this.tabPtnr.ptnrDetail.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 상세");
            		p.set_taborder("25");

            	}
            );
            this.tabPtnr.ptnrDetail.divViewCompBody00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.tabPtnr.ptnrDetail.divViewCompTitle06,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-신용평가서 타이틀");
            		p.set_taborder("26");

            	}
            );
            this.tabPtnr.ptnrDetail.divViewCompTitle06.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 174, this.tabPtnr.ptnrDetail.divViewCompBody06,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-주요실적");
            		p.set_taborder("27");

            	}
            );
            this.tabPtnr.ptnrDetail.divViewCompBody06.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 66, this.tabPtnr.ptnrDetail.divViewCompBody03,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 상세");
            		p.set_taborder("28");

            	}
            );
            this.tabPtnr.ptnrDetail.divViewCompBody03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.tabPtnr.ptnrDetail.divViewCompTitle03,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-신용평가서 타이틀");
            		p.set_taborder("29");

            	}
            );
            this.tabPtnr.ptnrDetail.divViewCompTitle03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tabPtnr.ptnrDetail,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("기본정보");
            		p.set_scrollbars("none");
            		p.style.set_background("white");
            		p.set_text("회사기본정보");

            	}
            );
            this.tabPtnr.ptnrDetail.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.tabPtnr.aprvDetail.divViewCompBody00.divViewCompTitle00,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 타이틀");
            		p.set_taborder("0");

            	}
            );
            this.tabPtnr.aprvDetail.divViewCompBody00.divViewCompTitle00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1203, 385, this.tabPtnr.aprvDetail.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 상세");
            		p.set_taborder("24");

            	}
            );
            this.tabPtnr.aprvDetail.divViewCompBody00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tabPtnr.aprvDetail,
            	//-- Layout function
            	function(p) {
            		p.set_text("결재정보");

            	}
            );
            this.tabPtnr.aprvDetail.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1200, 121, this.tabPtnr.relateDocument.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 상세");
            		p.set_taborder("5");

            	}
            );
            this.tabPtnr.relateDocument.divViewCompBody00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1203, 1411, this.tabPtnr.relateDocument,
            	//-- Layout function
            	function(p) {
            		p.set_text("관련문서");

            	}
            );
            this.tabPtnr.relateDocument.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "Screen0", 1220, 1814, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("FrmTemplate100");
            		p.set_titletext("업체상세");

            	}
            );
            obj.set_stepcount("");
            obj.set_stepindex("");
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item58","tabPtnr.ptnrDetail.divViewCompBody00.edtPtnrNm","value","dsPtnr","PTNR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item60","tabPtnr.ptnrDetail.divViewCompBody00.medBizNo","value","dsPtnr","BIZ_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item61","tabPtnr.ptnrDetail.divViewCompBody00.medtCorpRegNo","value","dsPtnr","CORP_REG_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item62","tabPtnr.ptnrDetail.divViewCompBody00.cldBizBgnDay","value","dsPtnr","BIZ_BGN_DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item63","tabPtnr.ptnrDetail.divViewCompBody00.edtBizCndtn","value","dsPtnr","BIZ_CNDTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item64","tabPtnr.ptnrDetail.divViewCompBody00.edtBizType","value","dsPtnr","BIZ_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item68","tabPtnr.ptnrDetail.divViewCompBody00.edtAddr","value","dsPtnr","AREA");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item69","tabPtnr.ptnrDetail.divViewCompBody00.edtHPage","value","dsPtnr","HM_PG");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item71","tabPtnr.ptnrDetail.divViewCompBody01.edtRprstvNm","value","dsPtnr","RPRSTV_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item75","tabPtnr.ptnrDetail.divViewCompBody02.edtZipNo","value","dsPtnr","ZIP_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item76","tabPtnr.ptnrDetail.divViewCompBody02.edtAddr","value","dsPtnr","ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item77","tabPtnr.ptnrDetail.divViewCompBody02.edtDtlAddr","value","dsPtnr","DTL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item88","tabPtnr.ptnrDetail.divViewCompBody04.medAst","value","dsPtnr","AST");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item89","tabPtnr.ptnrDetail.divViewCompBody04.medCapl","value","dsPtnr","CAPL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item90","tabPtnr.ptnrDetail.divViewCompBody04.medDebt","value","dsPtnr","DEBT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item94","tabPtnr.ptnrDetail.divViewCompBody04.txtMjrCstmr","value","dsPtnr","MJR_CSTMR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item95","tabPtnr.ptnrDetail.divViewCompBody04.maeSalesAmt1","value","dsPtnr","SALES_AMT_1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item96","tabPtnr.ptnrDetail.divViewCompBody04.maeSalesAmt2","value","dsPtnr","SALES_AMT_2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item97","tabPtnr.ptnrDetail.divViewCompBody04.maeSalesAmt3","value","dsPtnr","SALES_AMT_3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item98","tabPtnr.ptnrDetail.divViewCompBody04.maebizProfit","value","dsPtnr","BIZ_PROFIT_1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item99","tabPtnr.ptnrDetail.divViewCompBody04.maebizProfit2","value","dsPtnr","BIZ_PROFIT_2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item100","tabPtnr.ptnrDetail.divViewCompBody04.maebizProfit3","value","dsPtnr","BIZ_PROFIT_3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item109","tabPtnr.ptnrDetail.divViewCompBody00.staRmark","text","gdsLabel","EPRO_LABEL_00037");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item113","tabPtnr.ptnrDetail.divViewCompBody00.staTel","text","gdsLabel","EPRO_LABEL_00714");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item118","tabPtnr.ptnrDetail.divViewCompBody00.staFax","text","gdsLabel","EPRO_LABEL_00437");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item122","tabPtnr.ptnrDetail.divViewCompBody01.staRprstvNm","text","gdsLabel","EPRO_LABEL_00530");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item126","tabPtnr.ptnrDetail.divViewCompBody02.staDtlAddr","text","gdsLabel","EPRO_LABEL_00067");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item140","tabPtnr.ptnrDetail.divViewCompBody04.staEmpCnt","text","gdsLabel","EPRO_LABEL_01052");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item147","tabPtnr.ptnrDetail.divViewCompBody04.staWon04","text","gdsLabel","EPRO_LABEL_00411");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item151","tabPtnr.ptnrDetail.divViewCompBody04.staWon06","text","gdsLabel","EPRO_LABEL_00411");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item155","tabPtnr.ptnrDetail.divViewCompBody04.staWon01","text","gdsLabel","EPRO_LABEL_00411");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item163","tabPtnr.ptnrDetail.divViewCompTitle01.staViewCompTitle01","text","gdsLabel","EPRO_LABEL_00258");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item168","tabPtnr.srcGrp.divViewCompBody00.staPymtBnk","text","gdsLabel","EPRO_LABEL_00035");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item175","tabPtnr.aprvDetail.edtPymtBnk00","value","dsPtnr","BNK_OWNR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item178","tabPtnr.ptnrDetail.divViewCompBody04.medEmpCnt","value","dsPtnr","EMP_CNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item66","tabPtnr.ptnrDetail.divViewCompBody00.edtFax","value","dsPtnr","FAX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item192","tabPtnr.ptnrDetail.divViewCompBody01.edtHp","value","dsPtnr","RPTST_TEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item198","tabPtnr.ptnrDetail.divViewCompBody01.edtHp01","value","dsPtnr","RPRSTV_HP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item73","tabPtnr.ptnrDetail.divViewCompBody01.edtEmail","value","dsPtnr","RPRSTV_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item180","tabPtnr.ptnrDetail.divViewCompBody00.edtTel","value","dsPtnr","TEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item67","tabPtnr.ptnrDetail.divViewCompBody00.cboHp02","value","dsPtnr","RPTST_TEL_01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item219","tabPtnr.ptnrDetail.divViewCompBody00.cboCdNation","value","dsPtnr","CD_NATION");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("wbBizNoVi","wbBizNo","visible","dsObjBindVi","wbBizNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("wbBizNoEn","wbBizNo","enable","dsObjBindEn","wbBizNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabPtnrVi","tabPtnr","visible","dsObjBindVi","tabPtnr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabPtnrEn","tabPtnr","enable","dsObjBindEn","tabPtnr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("ptnrDetailVi","tabPtnr.ptnrDetail","visible","dsObjBindVi","ptnrDetail");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("ptnrDetailEn","tabPtnr.ptnrDetail","enable","dsObjBindEn","ptnrDetail");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRprstvNmVi","tabPtnr.ptnrDetail.divViewCompBody01.staRprstvNm","visible","dsObjBindVi","staRprstvNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRprstvNmEn","tabPtnr.ptnrDetail.divViewCompBody01.staRprstvNm","enable","dsObjBindEn","staRprstvNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRprstvNmVi","tabPtnr.ptnrDetail.divViewCompBody01.edtRprstvNm","visible","dsObjBindVi","edtRprstvNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRprstvNmEn","tabPtnr.ptnrDetail.divViewCompBody01.edtRprstvNm","readonly","dsObjBindEn","edtRprstvNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRprstvEmailVi","tabPtnr.ptnrDetail.divViewCompBody01.staRprstvEmail","visible","dsObjBindVi","staRprstvEmail");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRprstvEmailEn","tabPtnr.ptnrDetail.divViewCompBody01.staRprstvEmail","enable","dsObjBindEn","staRprstvEmail");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRprstvHpVi","tabPtnr.ptnrDetail.divViewCompBody01.staRprstvHp","visible","dsObjBindVi","staRprstvHp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRprstvHpEn","tabPtnr.ptnrDetail.divViewCompBody01.staRprstvHp","enable","dsObjBindEn","staRprstvHp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRprstTelVi","tabPtnr.ptnrDetail.divViewCompBody01.staRprstTel","visible","dsObjBindVi","staRprstTel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRprstTelEn","tabPtnr.ptnrDetail.divViewCompBody01.staRprstTel","enable","dsObjBindEn","staRprstTel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtHp3_26Vi","tabPtnr.ptnrDetail.divViewCompBody01.edtHp","visible","dsObjBindVi","edtHp3_26");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtHp3_26En","tabPtnr.ptnrDetail.divViewCompBody01.edtHp","readonly","dsObjBindEn","edtHp3_26");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtHp01_27Vi","tabPtnr.ptnrDetail.divViewCompBody01.edtHp01","visible","dsObjBindVi","edtHp01_27");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtHp01_27En","tabPtnr.ptnrDetail.divViewCompBody01.edtHp01","readonly","dsObjBindEn","edtHp01_27");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtEmail1_25Vi","tabPtnr.ptnrDetail.divViewCompBody01.edtEmail","visible","dsObjBindVi","edtEmail1_25");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtEmail1_25En","tabPtnr.ptnrDetail.divViewCompBody01.edtEmail","readonly","dsObjBindEn","edtEmail1_25");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staZipNoVi","tabPtnr.ptnrDetail.divViewCompBody02.staZipNo","visible","dsObjBindVi","staZipNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staZipNoEn","tabPtnr.ptnrDetail.divViewCompBody02.staZipNo","enable","dsObjBindEn","staZipNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtZipNoVi","tabPtnr.ptnrDetail.divViewCompBody02.edtZipNo","visible","dsObjBindVi","edtZipNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtZipNoEn","tabPtnr.ptnrDetail.divViewCompBody02.edtZipNo","readonly","dsObjBindEn","edtZipNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAddrVi","tabPtnr.ptnrDetail.divViewCompBody02.staAddr","visible","dsObjBindVi","staAddr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAddrEn","tabPtnr.ptnrDetail.divViewCompBody02.staAddr","enable","dsObjBindEn","staAddr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtAddrVi","tabPtnr.ptnrDetail.divViewCompBody02.edtAddr","visible","dsObjBindVi","edtAddr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtAddrEn","tabPtnr.ptnrDetail.divViewCompBody02.edtAddr","readonly","dsObjBindEn","edtAddr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staDtlAddrVi","tabPtnr.ptnrDetail.divViewCompBody02.staDtlAddr","visible","dsObjBindVi","staDtlAddr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staDtlAddrEn","tabPtnr.ptnrDetail.divViewCompBody02.staDtlAddr","enable","dsObjBindEn","staDtlAddr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDtlAddrVi","tabPtnr.ptnrDetail.divViewCompBody02.edtDtlAddr","visible","dsObjBindVi","edtDtlAddr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDtlAddrEn","tabPtnr.ptnrDetail.divViewCompBody02.edtDtlAddr","readonly","dsObjBindEn","edtDtlAddr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnZipNoVi","tabPtnr.ptnrDetail.divViewCompBody02.btnZipNo","visible","dsObjBindVi","btnZipNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnZipNoEn","tabPtnr.ptnrDetail.divViewCompBody02.btnZipNo","enable","dsObjBindEn","btnZipNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAstVi","tabPtnr.ptnrDetail.divViewCompBody04.staAst","visible","dsObjBindVi","staAst");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAstEn","tabPtnr.ptnrDetail.divViewCompBody04.staAst","enable","dsObjBindEn","staAst");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medAstVi","tabPtnr.ptnrDetail.divViewCompBody04.medAst","visible","dsObjBindVi","medAst");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medAstEn","tabPtnr.ptnrDetail.divViewCompBody04.medAst","readonly","dsObjBindEn","medAst");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staWon01Vi","tabPtnr.ptnrDetail.divViewCompBody04.staWon01","visible","dsObjBindVi","staWon01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staWon01En","tabPtnr.ptnrDetail.divViewCompBody04.staWon01","enable","dsObjBindEn","staWon01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCaplVi","tabPtnr.ptnrDetail.divViewCompBody04.staCapl","visible","dsObjBindVi","staCapl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCaplEn","tabPtnr.ptnrDetail.divViewCompBody04.staCapl","enable","dsObjBindEn","staCapl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medCaplVi","tabPtnr.ptnrDetail.divViewCompBody04.medCapl","visible","dsObjBindVi","medCapl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medCaplEn","tabPtnr.ptnrDetail.divViewCompBody04.medCapl","readonly","dsObjBindEn","medCapl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staWon02Vi","tabPtnr.ptnrDetail.divViewCompBody04.staWon02","visible","dsObjBindVi","staWon02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staWon02En","tabPtnr.ptnrDetail.divViewCompBody04.staWon02","enable","dsObjBindEn","staWon02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staDebtVi","tabPtnr.ptnrDetail.divViewCompBody04.staDebt","visible","dsObjBindVi","staDebt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staDebtEn","tabPtnr.ptnrDetail.divViewCompBody04.staDebt","enable","dsObjBindEn","staDebt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medDebtVi","tabPtnr.ptnrDetail.divViewCompBody04.medDebt","visible","dsObjBindVi","medDebt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medDebtEn","tabPtnr.ptnrDetail.divViewCompBody04.medDebt","readonly","dsObjBindEn","medDebt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staWon03Vi","tabPtnr.ptnrDetail.divViewCompBody04.staWon03","visible","dsObjBindVi","staWon03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staWon03En","tabPtnr.ptnrDetail.divViewCompBody04.staWon03","enable","dsObjBindEn","staWon03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staEmpCntVi","tabPtnr.ptnrDetail.divViewCompBody04.staEmpCnt","visible","dsObjBindVi","staEmpCnt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staEmpCntEn","tabPtnr.ptnrDetail.divViewCompBody04.staEmpCnt","enable","dsObjBindEn","staEmpCnt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medEmpCntVi","tabPtnr.ptnrDetail.divViewCompBody04.medEmpCnt","visible","dsObjBindVi","medEmpCnt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medEmpCntEn","tabPtnr.ptnrDetail.divViewCompBody04.medEmpCnt","readonly","dsObjBindEn","medEmpCnt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPer01Vi","tabPtnr.ptnrDetail.divViewCompBody04.staPer01","visible","dsObjBindVi","staPer01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPer01En","tabPtnr.ptnrDetail.divViewCompBody04.staPer01","enable","dsObjBindEn","staPer01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staMjrCstmrVi","tabPtnr.ptnrDetail.divViewCompBody04.staMjrCstmr","visible","dsObjBindVi","staMjrCstmr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staMjrCstmrEn","tabPtnr.ptnrDetail.divViewCompBody04.staMjrCstmr","enable","dsObjBindEn","staMjrCstmr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSalesVi","tabPtnr.ptnrDetail.divViewCompBody04.staSales","visible","dsObjBindVi","staSales");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSalesEn","tabPtnr.ptnrDetail.divViewCompBody04.staSales","enable","dsObjBindEn","staSales");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staYr1Vi","tabPtnr.ptnrDetail.divViewCompBody04.staYr1","visible","dsObjBindVi","staYr1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staYr1En","tabPtnr.ptnrDetail.divViewCompBody04.staYr1","enable","dsObjBindEn","staYr1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("maeSalesAmt1Vi","tabPtnr.ptnrDetail.divViewCompBody04.maeSalesAmt1","visible","dsObjBindVi","maeSalesAmt1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("maeSalesAmt1En","tabPtnr.ptnrDetail.divViewCompBody04.maeSalesAmt1","readonly","dsObjBindEn","maeSalesAmt1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staWon04Vi","tabPtnr.ptnrDetail.divViewCompBody04.staWon04","visible","dsObjBindVi","staWon04");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staWon04En","tabPtnr.ptnrDetail.divViewCompBody04.staWon04","enable","dsObjBindEn","staWon04");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staYr2Vi","tabPtnr.ptnrDetail.divViewCompBody04.staYr2","visible","dsObjBindVi","staYr2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staYr2En","tabPtnr.ptnrDetail.divViewCompBody04.staYr2","enable","dsObjBindEn","staYr2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("maeSalesAmt2Vi","tabPtnr.ptnrDetail.divViewCompBody04.maeSalesAmt2","visible","dsObjBindVi","maeSalesAmt2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("maeSalesAmt2En","tabPtnr.ptnrDetail.divViewCompBody04.maeSalesAmt2","readonly","dsObjBindEn","maeSalesAmt2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staWon05Vi","tabPtnr.ptnrDetail.divViewCompBody04.staWon05","visible","dsObjBindVi","staWon05");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staWon05En","tabPtnr.ptnrDetail.divViewCompBody04.staWon05","enable","dsObjBindEn","staWon05");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staYr3Vi","tabPtnr.ptnrDetail.divViewCompBody04.staYr3","visible","dsObjBindVi","staYr3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staYr3En","tabPtnr.ptnrDetail.divViewCompBody04.staYr3","enable","dsObjBindEn","staYr3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("maeSalesAmt3Vi","tabPtnr.ptnrDetail.divViewCompBody04.maeSalesAmt3","visible","dsObjBindVi","maeSalesAmt3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("maeSalesAmt3En","tabPtnr.ptnrDetail.divViewCompBody04.maeSalesAmt3","readonly","dsObjBindEn","maeSalesAmt3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staWon06Vi","tabPtnr.ptnrDetail.divViewCompBody04.staWon06","visible","dsObjBindVi","staWon06");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staWon06En","tabPtnr.ptnrDetail.divViewCompBody04.staWon06","enable","dsObjBindEn","staWon06");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txtMjrCstmrVi","tabPtnr.ptnrDetail.divViewCompBody04.txtMjrCstmr","visible","dsObjBindVi","txtMjrCstmr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txtMjrCstmrEn","tabPtnr.ptnrDetail.divViewCompBody04.txtMjrCstmr","readonly","dsObjBindEn","txtMjrCstmr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("stabizProfitVi","tabPtnr.ptnrDetail.divViewCompBody04.stabizProfit","visible","dsObjBindVi","stabizProfit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("stabizProfitEn","tabPtnr.ptnrDetail.divViewCompBody04.stabizProfit","enable","dsObjBindEn","stabizProfit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("maebizProfitVi","tabPtnr.ptnrDetail.divViewCompBody04.maebizProfit","visible","dsObjBindVi","maebizProfit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("maebizProfitEn","tabPtnr.ptnrDetail.divViewCompBody04.maebizProfit","readonly","dsObjBindEn","maebizProfit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staWon07Vi","tabPtnr.ptnrDetail.divViewCompBody04.staWon07","visible","dsObjBindVi","staWon07");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staWon07En","tabPtnr.ptnrDetail.divViewCompBody04.staWon07","enable","dsObjBindEn","staWon07");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("maebizProfit2Vi","tabPtnr.ptnrDetail.divViewCompBody04.maebizProfit2","visible","dsObjBindVi","maebizProfit2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("maebizProfit2En","tabPtnr.ptnrDetail.divViewCompBody04.maebizProfit2","readonly","dsObjBindEn","maebizProfit2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staWon08Vi","tabPtnr.ptnrDetail.divViewCompBody04.staWon08","visible","dsObjBindVi","staWon08");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staWon08En","tabPtnr.ptnrDetail.divViewCompBody04.staWon08","enable","dsObjBindEn","staWon08");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("maebizProfit3Vi","tabPtnr.ptnrDetail.divViewCompBody04.maebizProfit3","visible","dsObjBindVi","maebizProfit3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("maebizProfit3En","tabPtnr.ptnrDetail.divViewCompBody04.maebizProfit3","readonly","dsObjBindEn","maebizProfit3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staWon09Vi","tabPtnr.ptnrDetail.divViewCompBody04.staWon09","visible","dsObjBindVi","staWon09");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staWon09En","tabPtnr.ptnrDetail.divViewCompBody04.staWon09","enable","dsObjBindEn","staWon09");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCorpRegNoVi","tabPtnr.ptnrDetail.divViewCompBody00.staCorpRegNo","visible","dsObjBindVi","staCorpRegNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCorpRegNoEn","tabPtnr.ptnrDetail.divViewCompBody00.staCorpRegNo","enable","dsObjBindEn","staCorpRegNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staBizCndtnVi","tabPtnr.ptnrDetail.divViewCompBody00.staBizCndtn","visible","dsObjBindVi","staBizCndtn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staBizCndtnEn","tabPtnr.ptnrDetail.divViewCompBody00.staBizCndtn","enable","dsObjBindEn","staBizCndtn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staBizTypeVi","tabPtnr.ptnrDetail.divViewCompBody00.staBizType","visible","dsObjBindVi","staBizType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staBizTypeEn","tabPtnr.ptnrDetail.divViewCompBody00.staBizType","enable","dsObjBindEn","staBizType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTel_14Vi","tabPtnr.ptnrDetail.divViewCompBody00.staTel","visible","dsObjBindVi","staTel_14");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTel_14En","tabPtnr.ptnrDetail.divViewCompBody00.staTel","enable","dsObjBindEn","staTel_14");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staFaxVi","tabPtnr.ptnrDetail.divViewCompBody00.staFax","visible","dsObjBindVi","staFax");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staFaxEn","tabPtnr.ptnrDetail.divViewCompBody00.staFax","enable","dsObjBindEn","staFax");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staBizBgnDayVi","tabPtnr.ptnrDetail.divViewCompBody00.staBizBgnDay","visible","dsObjBindVi","staBizBgnDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staBizBgnDayEn","tabPtnr.ptnrDetail.divViewCompBody00.staBizBgnDay","enable","dsObjBindEn","staBizBgnDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cldBizBgnDayVi","tabPtnr.ptnrDetail.divViewCompBody00.cldBizBgnDay","visible","dsObjBindVi","cldBizBgnDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cldBizBgnDayEn","tabPtnr.ptnrDetail.divViewCompBody00.cldBizBgnDay","readonly","dsObjBindEn","cldBizBgnDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtBizCndtnVi","tabPtnr.ptnrDetail.divViewCompBody00.edtBizCndtn","visible","dsObjBindVi","edtBizCndtn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtBizCndtnEn","tabPtnr.ptnrDetail.divViewCompBody00.edtBizCndtn","readonly","dsObjBindEn","edtBizCndtn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtBizTypeVi","tabPtnr.ptnrDetail.divViewCompBody00.edtBizType","visible","dsObjBindVi","edtBizType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtBizTypeEn","tabPtnr.ptnrDetail.divViewCompBody00.edtBizType","readonly","dsObjBindEn","edtBizType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staBizNoVi","tabPtnr.ptnrDetail.divViewCompBody00.staBizNo","visible","dsObjBindVi","staBizNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staBizNoEn","tabPtnr.ptnrDetail.divViewCompBody00.staBizNo","enable","dsObjBindEn","staBizNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPtnrNmVi","tabPtnr.ptnrDetail.divViewCompBody00.staPtnrNm","visible","dsObjBindVi","staPtnrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPtnrNmEn","tabPtnr.ptnrDetail.divViewCompBody00.staPtnrNm","enable","dsObjBindEn","staPtnrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPtnrNmVi","tabPtnr.ptnrDetail.divViewCompBody00.edtPtnrNm","visible","dsObjBindVi","edtPtnrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPtnrNmEn","tabPtnr.ptnrDetail.divViewCompBody00.edtPtnrNm","readonly","dsObjBindEn","edtPtnrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRmarkVi","tabPtnr.ptnrDetail.divViewCompBody00.staRmark","visible","dsObjBindVi","staRmark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRmarkEn","tabPtnr.ptnrDetail.divViewCompBody00.staRmark","enable","dsObjBindEn","staRmark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medBizNoVi","tabPtnr.ptnrDetail.divViewCompBody00.medBizNo","visible","dsObjBindVi","medBizNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medBizNoEn","tabPtnr.ptnrDetail.divViewCompBody00.medBizNo","readonly","dsObjBindEn","medBizNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medtCorpRegNoVi","tabPtnr.ptnrDetail.divViewCompBody00.medtCorpRegNo","visible","dsObjBindVi","medtCorpRegNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medtCorpRegNoEn","tabPtnr.ptnrDetail.divViewCompBody00.medtCorpRegNo","readonly","dsObjBindEn","medtCorpRegNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTel00Vi","tabPtnr.ptnrDetail.divViewCompBody00.staTel00","visible","dsObjBindVi","staTel00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staTel00En","tabPtnr.ptnrDetail.divViewCompBody00.staTel00","enable","dsObjBindEn","staTel00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAddr_39Vi","tabPtnr.ptnrDetail.divViewCompBody00.staAddr","visible","dsObjBindVi","staAddr_39");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAddr_39En","tabPtnr.ptnrDetail.divViewCompBody00.staAddr","enable","dsObjBindEn","staAddr_39");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtAddr_40Vi","tabPtnr.ptnrDetail.divViewCompBody00.edtAddr","visible","dsObjBindVi","edtAddr_40");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtAddr_40En","tabPtnr.ptnrDetail.divViewCompBody00.edtAddr","readonly","dsObjBindEn","edtAddr_40");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staHPageVi","tabPtnr.ptnrDetail.divViewCompBody00.staHPage","visible","dsObjBindVi","staHPage");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staHPageEn","tabPtnr.ptnrDetail.divViewCompBody00.staHPage","enable","dsObjBindEn","staHPage");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtHPageVi","tabPtnr.ptnrDetail.divViewCompBody00.edtHPage","visible","dsObjBindVi","edtHPage");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtHPageEn","tabPtnr.ptnrDetail.divViewCompBody00.edtHPage","readonly","dsObjBindEn","edtHPage");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtFaxVi","tabPtnr.ptnrDetail.divViewCompBody00.edtFax","visible","dsObjBindVi","edtFax");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtFaxEn","tabPtnr.ptnrDetail.divViewCompBody00.edtFax","readonly","dsObjBindEn","edtFax");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTelVi","tabPtnr.ptnrDetail.divViewCompBody00.edtTel","visible","dsObjBindVi","edtTel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTelEn","tabPtnr.ptnrDetail.divViewCompBody00.edtTel","readonly","dsObjBindEn","edtTel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboHp02Vi","tabPtnr.ptnrDetail.divViewCompBody00.cboHp02","visible","dsObjBindVi","cboHp02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboHp02En","tabPtnr.ptnrDetail.divViewCompBody00.cboHp02","readonly","dsObjBindEn","cboHp02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboHp03Vi","tabPtnr.ptnrDetail.divViewCompBody00.cboCdNation","visible","dsObjBindVi","cboHp03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboHp03En","tabPtnr.ptnrDetail.divViewCompBody00.cboCdNation","readonly","dsObjBindEn","cboHp03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("srcGrpVi","tabPtnr.srcGrp","visible","dsObjBindVi","srcGrp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("srcGrpEn","tabPtnr.srcGrp","enable","dsObjBindEn","srcGrp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("aprvDetailVi","tabPtnr.aprvDetail","visible","dsObjBindVi","aprvDetail");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("aprvDetailEn","tabPtnr.aprvDetail","enable","dsObjBindEn","aprvDetail");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("relateDocumentVi","tabPtnr.relateDocument","visible","dsObjBindVi","relateDocument");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("relateDocumentEn","tabPtnr.relateDocument","enable","dsObjBindEn","relateDocument");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("wbBizNo00Vi","wbBizNo00","visible","dsObjBindVi","wbBizNo00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("wbBizNo00En","wbBizNo00","enable","dsObjBindEn","wbBizNo00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("grdLrgGrpFormatId","tabPtnr.srcGrp.divViewCompBody01.grdLrgGrp","formatid","dsObjBindGrid","grdLrgGrp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("grdMdlGrpFormatId","tabPtnr.srcGrp.divViewCompBody01.grdMdlGrp","formatid","dsObjBindGrid","grdMdlGrp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("grdSelectGrpFormatId","tabPtnr.srcGrp.divViewCompBody01.grdSelectGrp","formatid","dsObjBindGrid","grdSelectGrp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","tabPtnr.ptnrDetail.divViewCompBody04.staSalesYr1","text","dsPtnr","YR_1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","tabPtnr.ptnrDetail.divViewCompBody04.staSalesYr00","text","dsPtnr","YR_1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","tabPtnr.ptnrDetail.divViewCompBody04.staSalesYr02","text","dsPtnr","YR_2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","tabPtnr.ptnrDetail.divViewCompBody04.staSalesYr03","text","dsPtnr","YR_3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","tabPtnr.ptnrDetail.divViewCompBody04.staSalesYr04","text","dsPtnr","YR_2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","tabPtnr.ptnrDetail.divViewCompBody04.staSalesYr05","text","dsPtnr","YR_3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","tabPtnr.ptnrDetail.divViewCompBody00.edtEctNation","value","dsPtnr","NATION_RMK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPymtBnk_112Vi","tabPtnr.aprvDetail.divViewCompBody00.staPymtBnk","visible","dsObjBindVi","staPymtBnk_112");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPymtBnk_112En","tabPtnr.aprvDetail.divViewCompBody00.staPymtBnk","enable","dsObjBindEn","staPymtBnk_112");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item101","tabPtnr.aprvDetail.divViewCompBody00.edtPymtBnk","value","dsPtnr","PYMT_BNK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPymtBnkAddrVi","tabPtnr.aprvDetail.divViewCompBody00.staPymtBnkAddr","visible","dsObjBindVi","staPymtBnkAddr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPymtBnkAddrEn","tabPtnr.aprvDetail.divViewCompBody00.staPymtBnkAddr","enable","dsObjBindEn","staPymtBnkAddr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item102","tabPtnr.aprvDetail.divViewCompBody00.edtPymtBnkAddr","value","dsPtnr","PYMT_BNK_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPymtBnkAddrVi","tabPtnr.aprvDetail.divViewCompBody00.edtPymtBnkAddr","visible","dsObjBindVi","edtPymtBnkAddr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPymtBnkAddrEn","tabPtnr.aprvDetail.divViewCompBody00.edtPymtBnkAddr","readonly","dsObjBindEn","edtPymtBnkAddr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staBnkAcntNoVi","tabPtnr.aprvDetail.divViewCompBody00.staBnkAcntNo","visible","dsObjBindVi","staBnkAcntNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staBnkAcntNoEn","tabPtnr.aprvDetail.divViewCompBody00.staBnkAcntNo","enable","dsObjBindEn","staBnkAcntNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item103","tabPtnr.aprvDetail.divViewCompBody00.edtBnkAcntNo","value","dsPtnr","BNK_ACNT_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtBnkAcntNoVi","tabPtnr.aprvDetail.divViewCompBody00.edtBnkAcntNo","visible","dsObjBindVi","edtBnkAcntNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtBnkAcntNoEn","tabPtnr.aprvDetail.divViewCompBody00.edtBnkAcntNo","readonly","dsObjBindEn","edtBnkAcntNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtBnkOwnrVi","tabPtnr.aprvDetail.divViewCompBody00.edtBnkOwnr","visible","dsObjBindVi","edtBnkOwnr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtBnkOwnrEn","tabPtnr.aprvDetail.divViewCompBody00.edtBnkOwnr","readonly","dsObjBindEn","edtBnkOwnr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","tabPtnr.aprvDetail.divViewCompBody00.edtBnkOwnr","value","dsPtnr","BNK_OWNR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staBnkOwnrVi","tabPtnr.aprvDetail.divViewCompBody00.staBnkOwnr","visible","dsObjBindVi","staBnkOwnr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staBnkOwnrEn","tabPtnr.aprvDetail.divViewCompBody00.staBnkOwnr","enable","dsObjBindEn","staBnkOwnr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPymtBnkVi","tabPtnr.aprvDetail.divViewCompBody00.staPymtBnk","visible","dsObjBindVi","staPymtBnk");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPymtBnkEn","tabPtnr.aprvDetail.divViewCompBody00.staPymtBnk","enable","dsObjBindEn","staPymtBnk");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPymtBnkVi","tabPtnr.aprvDetail.divViewCompBody00.edtPymtBnk","visible","dsObjBindVi","edtPymtBnk");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPymtBnkEn","tabPtnr.aprvDetail.divViewCompBody00.edtPymtBnk","readonly","dsObjBindEn","edtPymtBnk");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","tabPtnr.ptnrDetail.divViewCompBody00.taRmark","value","dsPtnr","PTNR_RMK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("taRmarkVi","tabPtnr.ptnrDetail.divViewCompBody00.taRmark","visible","dsObjBindVi","taRmark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("taRmarkEn","tabPtnr.ptnrDetail.divViewCompBody00.taRmark","readonly","dsObjBindEn","taRmark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","tabPtnr.srcGrp","text","gdsLabel","EPRO_LABEL_00778");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","tabPtnr.srcGrp.divViewCompTitle00.staViewCompTitle00","text","gdsLabel","EPRO_LABEL_00035");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staEmpCntSaVi","tabPtnr.ptnrDetail.divViewCompBody04.staEmpCntSa","visible","dsObjBindVi","staEmpCntSa");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staEmpCntSaEn","tabPtnr.ptnrDetail.divViewCompBody04.staEmpCntSa","enable","dsObjBindEn","staEmpCntSa");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item92","tabPtnr.ptnrDetail.divViewCompBody04.medEmpCntSa","value","dsPtnr","EMP_CNT_SA");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medEmpCntSaVi","tabPtnr.ptnrDetail.divViewCompBody04.medEmpCntSa","visible","dsObjBindVi","medEmpCntSa");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medEmpCntSaEn","tabPtnr.ptnrDetail.divViewCompBody04.medEmpCntSa","readonly","dsObjBindEn","medEmpCntSa");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPer03Vi","tabPtnr.ptnrDetail.divViewCompBody04.staPer03","visible","dsObjBindVi","staPer03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPer03En","tabPtnr.ptnrDetail.divViewCompBody04.staPer03","enable","dsObjBindEn","staPer03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staEmpCntEtcVi","tabPtnr.ptnrDetail.divViewCompBody04.staEmpCntEtc","visible","dsObjBindVi","staEmpCntEtc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staEmpCntEtcEn","tabPtnr.ptnrDetail.divViewCompBody04.staEmpCntEtc","enable","dsObjBindEn","staEmpCntEtc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item93","tabPtnr.ptnrDetail.divViewCompBody04.medEmpCntEtc","value","dsPtnr","EMP_CNT_ETC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medEmpCntEtcVi","tabPtnr.ptnrDetail.divViewCompBody04.medEmpCntEtc","visible","dsObjBindVi","medEmpCntEtc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medEmpCntEtcEn","tabPtnr.ptnrDetail.divViewCompBody04.medEmpCntEtc","readonly","dsObjBindEn","medEmpCntEtc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPer04Vi","tabPtnr.ptnrDetail.divViewCompBody04.staPer04","visible","dsObjBindVi","staPer04");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPer04En","tabPtnr.ptnrDetail.divViewCompBody04.staPer04","enable","dsObjBindEn","staPer04");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staEmpCntKiVi","tabPtnr.ptnrDetail.divViewCompBody04.staEmpCntKi","visible","dsObjBindVi","staEmpCntKi");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staEmpCntKiEn","tabPtnr.ptnrDetail.divViewCompBody04.staEmpCntKi","enable","dsObjBindEn","staEmpCntKi");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item91","tabPtnr.ptnrDetail.divViewCompBody04.medEmpCntKi","value","dsPtnr","EMP_CNT_KI");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medEmpCntKiVi","tabPtnr.ptnrDetail.divViewCompBody04.medEmpCntKi","visible","dsObjBindVi","medEmpCntKi");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medEmpCntKiEn","tabPtnr.ptnrDetail.divViewCompBody04.medEmpCntKi","readonly","dsObjBindEn","medEmpCntKi");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPer02Vi","tabPtnr.ptnrDetail.divViewCompBody04.staPer02","visible","dsObjBindVi","staPer02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPer02En","tabPtnr.ptnrDetail.divViewCompBody04.staPer02","enable","dsObjBindEn","staPer02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","tabPtnr.ptnrDetail.divViewCompTitle05.btnEvalStr","text","gdsLabel","EPRO_LABEL_00172");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","tabPtnr.ptnrDetail.divViewCompTitle06.btnMakerDel","text","gdsLabel","EPRO_LABEL_00172");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSquarVi","tabPtnr.ptnrDetail.divViewCompBody03.staSquar","visible","dsObjBindVi","staSquar");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSquarEn","tabPtnr.ptnrDetail.divViewCompBody03.staSquar","enable","dsObjBindEn","staSquar");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSquarVi","tabPtnr.ptnrDetail.divViewCompBody03.edtSquar","visible","dsObjBindVi","edtSquar");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSquarEn","tabPtnr.ptnrDetail.divViewCompBody03.edtSquar","readonly","dsObjBindEn","edtSquar");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSquar00Vi","tabPtnr.ptnrDetail.divViewCompBody03.staSquar00","visible","dsObjBindVi","staSquar00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSquar00En","tabPtnr.ptnrDetail.divViewCompBody03.staSquar00","enable","dsObjBindEn","staSquar00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSquar00Vi","tabPtnr.ptnrDetail.divViewCompBody03.edtSquar00","visible","dsObjBindVi","edtSquar00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSquar00En","tabPtnr.ptnrDetail.divViewCompBody03.edtSquar00","readonly","dsObjBindEn","edtSquar00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","tabPtnr.ptnrDetail.divViewCompBody03.edtSquar","value","dsPtnr","CRDT_GRD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","tabPtnr.ptnrDetail.divViewCompBody03.edtSquar00","value","dsPtnr","CACHE_GRADE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSquar01Vi","tabPtnr.ptnrDetail.divViewCompBody03.staSquar01","visible","dsObjBindVi","staSquar01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSquar01En","tabPtnr.ptnrDetail.divViewCompBody03.staSquar01","enable","dsObjBindEn","staSquar01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSquar01Vi","tabPtnr.ptnrDetail.divViewCompBody03.edtSquar01","visible","dsObjBindVi","edtSquar01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSquar01En","tabPtnr.ptnrDetail.divViewCompBody03.edtSquar01","readonly","dsObjBindEn","edtSquar01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","tabPtnr.ptnrDetail.divViewCompBody03.edtSquar01","value","dsPtnr","CRDT_EVAL_ORG");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSquar02Vi","tabPtnr.ptnrDetail.divViewCompBody03.staSquar02","visible","dsObjBindVi","staSquar02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSquar02En","tabPtnr.ptnrDetail.divViewCompBody03.staSquar02","enable","dsObjBindEn","staSquar02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item38","tabPtnr.ptnrDetail.divViewCompBody03.cldBizBgnDay","visible","dsObjBindVi","cldBizBgnDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item39","tabPtnr.ptnrDetail.divViewCompBody03.cldBizBgnDay","readonly","dsObjBindEn","cldBizBgnDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item40","tabPtnr.ptnrDetail.divViewCompBody03.cldBizBgnDay","value","dsPtnr","CRDT_EVAL_DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnPlantAddVi","tabPtnr.ptnrDetail.divViewCompTitle04.btnPlantAdd","visible","dsObjBindVi","btnPlantAdd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnPlantAddEn","tabPtnr.ptnrDetail.divViewCompTitle04.btnPlantAdd","enable","dsObjBindEn","btnPlantAdd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnPlantDelVi","tabPtnr.ptnrDetail.divViewCompTitle04.btnPlantDel","visible","dsObjBindVi","btnPlantDel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnPlantDelEn","tabPtnr.ptnrDetail.divViewCompTitle04.btnPlantDel","enable","dsObjBindEn","btnPlantDel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnMakerAddVi","tabPtnr.ptnrDetail.divViewCompTitle06.btnMakerAdd","visible","dsObjBindVi","btnMakerAdd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnMakerAddEn","tabPtnr.ptnrDetail.divViewCompTitle06.btnMakerAdd","enable","dsObjBindEn","btnMakerAdd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnMakerDelVi","tabPtnr.ptnrDetail.divViewCompTitle06.btnMakerDel","visible","dsObjBindVi","btnMakerDel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnMakerDelEn","tabPtnr.ptnrDetail.divViewCompTitle06.btnMakerDel","enable","dsObjBindEn","btnMakerDel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("ImageViewer00Vi","tabPtnr.srcGrp.divViewCompBody01.ImageViewer00","visible","dsObjBindVi","ImageViewer00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("ImageViewer00En","tabPtnr.srcGrp.divViewCompBody01.ImageViewer00","enable","dsObjBindEn","ImageViewer00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","tabPtnr.ptnrDetail.divViewCompTitle05.btnPlantAdd","text","gdsLabel","EPRO_LABEL_00144");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("SPtnDetail.xfdl", function(exports) {
        /**
         * @파일명       	: SPtnrDetail.xfdl
         * @생성자       	: 한의봉
         * @생성일자     	: 2017. 9. 05
         * @설명			: 협력사상세
         * @최종수정자		: 김동호
         * @최종수정일자	: 2017. 11. 27.
        */
        this.isUserChk = false;

        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
        */  
          
        this.fnSetCode = function()
        {
        	/*
        		MM_SYS_CD 테이블의 컬럼 참조
        		
        		code: CD_GRP + CD_CLS 
        		
        		, sSelectType:[A : --전체--], [S : --선택--]
        		
        		, sFiltered(코드 필터링): 구분자:CD, CD, CD, CD ......
        									가져올 코드만 표시 방법 - S:WRI, ING, CXL, RTN ......
        									빼고 가져올 코드표시 방법 - D:WRI, ING, CXL, RTN ......
        	*/
        	
        	var param = [
        					 {code:"CM80", sSelectType:"S"} // 은행코드
        					 ,{code:"CM81", sSelectType:"S"} // 전화코드
        					 ,{code:"CM16", sSelectType:"S"} // 나라코드
        					 ,{code:"CM15", sSelectType:"S"} // 화폐단위
        					 ,{code:"CM13", sSelectType:"S"} // 대금지급조건
        					 ,{code:"CM22", sSelectType:"S"} // INCOTERMS
        				];

        	gfnGetCode(this, param);
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
        	@함수명	fnFold
        	@desc   	tab1 타이틀 접기/펼치기 기능
        */
        this.fnFold = function()
        {
        	var sArg = [
        				 {ttl:this.tabPtnr.ptnrDetail.divViewCompTitle00.staViewCompTitle00, body:this.tabPtnr.ptnrDetail.divViewCompBody00}	//서브타이틀0
        				,{ttl:this.tabPtnr.ptnrDetail.divViewCompTitle01.staViewCompTitle01, body:this.tabPtnr.ptnrDetail.divViewCompBody01}	//서브타이틀1
        				,{ttl:this.tabPtnr.ptnrDetail.divViewCompTitle02.staViewCompTitle02, body:this.tabPtnr.ptnrDetail.divViewCompBody02}	//서브타이틀2
        				,{ttl:this.tabPtnr.ptnrDetail.divViewCompTitle04.staViewCompTitle04, body:this.tabPtnr.ptnrDetail.divViewCompBody04}	//서브타이틀4
        				,{ttl:this.tabPtnr.ptnrDetail.divViewCompTitle05.staViewCompTitle05, body:this.tabPtnr.ptnrDetail.divViewCompBody05}	//서브타이틀5
        				,{ttl:this.tabPtnr.ptnrDetail.divViewCompTitle03.staViewCompTitle03, body:this.tabPtnr.ptnrDetail.divViewCompBody03}	//서브타이틀3
        				,{ttl:this.tabPtnr.ptnrDetail.divViewCompTitle06.staViewCompTitle06, body:this.tabPtnr.ptnrDetail.divViewCompBody06}	//서브타이틀6
        			];
        	gfnDivFold(this, sArg);
        }
        /**
        	@함수명	fnFold2
        	@desc   	tab2 타이틀 접기/펼치기 기능
        */
        this.fnFold2 = function()
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

        	//타이틀 접기/펼치기 기능
        	this.fnFold();
        	
        	/*체크박스 기능 적용*/
        	this.tabPtnr.ptnrDetail.divViewCompBody05.grdPlant.addEventHandler("onheadclick", gfnSetGrdHeadCheckbox, this);
        	this.tabPtnr.ptnrDetail.divViewCompBody06.grdMaker.addEventHandler("onheadclick", gfnSetGrdHeadCheckbox, this);
        	
        	
        	
        	gfnMakeFileDs(this);
        	
        	this.dsPtnr.addRow();
        	this.dsPtnr.setColumn(0,"PTNR_ID",application.gdsUserInfo.getColumn(0,"PTNR_ID"));
        	//this.tabPtnr.srcGrp.divViewCompBody00.divSrcGrpId.fnSetBind(this.dsPtnr, "LRG_GRP_ID", "RPTST_SRC_GRP_ID");
        	
        	this.fnSearch();
        	
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
        	var sController = "epro.ptnr.service.SPtnrService.readSPtnrDetail";
        	var sInDatasets = "dsPtnr=dsPtnr";
        	var sOutDatasets = "dsPtnr=dsPtnr dsLrgGrp=dsLrgGrp dsMdlGrp=dsMdlGrp dsSelectGrp=dsSelectGrp dslvl1=dslvl1 dslvl2=dslvl2 dsPtnrMaker=dsPtnrMaker dsPtnrPlant=dsPtnrPlant dsPtnrMail=dsPtnrMail";
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
        	var msg			= "";
        	var type		= "";
        	var objParam	= "";
        	
        	var telCheckBool; //해외사업자일 경우 false
        	if("SR12BZ" == this.dsPtnr.getColumn(0, "CD_PTNR_CTGR")) {
        		telCheckBool = true;
        	} else {
        		telCheckBool = false;
        	}
        	
        	// 필수 체크
        //기본정보
        	// 영업개시일자
        	if(gfnIsNull(this.dsPtnr.getColumn(0,"BIZ_BGN_DAY"))){
        		msg			= gfnMultiLabel("EPRO_LABEL_01138");
        		type		= gfnMultiLabel("EPRO_LABEL_00935");
        		objParam	= {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        		arr.push(objParam);
        	// 오늘 날짜와 설립연도 비교
        	}else if(this.dsPtnr.getColumn(0,"BIZ_BGN_DAY")>gfnToday()){
        		msg			= gfnMultiLabel("EPRO_LABEL_01077");
        		type		= gfnMultiLabel("EPRO_LABEL_01194");
        		objParam	= {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        		arr.push(objParam);
        	 }
        	// 업태
        	if(gfnIsNull(this.dsPtnr.getColumn(0,"BIZ_CNDTN")) && telCheckBool){
        		msg		= gfnMultiLabel("EPRO_LABEL_01058");
        		type	= gfnMultiLabel("EPRO_LABEL_00935");
        		objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        		arr.push(objParam);
        	}
        	// 업종
        	if(gfnIsNull(this.dsPtnr.getColumn(0,"BIZ_TYPE")) && telCheckBool){
        		msg		= gfnMultiLabel("EPRO_LABEL_01199");
        		type	= gfnMultiLabel("EPRO_LABEL_00935");
        		objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        		arr.push(objParam);
        	}
        	// 대표전화
        	if(gfnIsNull(this.dsPtnr.getColumn(0,"TEL"))){
        		msg		= gfnMultiLabel("EPRO_LABEL_01059");
        		type	= gfnMultiLabel("EPRO_LABEL_00935");
        		objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        		arr.push(objParam);
        	}else if(!gfnIsNull(this.dsPtnr.getColumn(0,"TEL")) && telCheckBool){
        		if(!gfnIsTel(this.dsPtnr.getColumn(0,"TEL"), "T")){
        			msg		= gfnMultiLabel("EPRO_LABEL_01204");
        			type	= gfnMultiLabel("EPRO_LABEL_01194");	
        			objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        			arr.push(objParam);
        		}
        	}
        	// FAX
        	if(!gfnIsNull(this.dsPtnr.getColumn(0,"FAX")) && telCheckBool) {
        		//해외일경우 유효성검사 제외
        		if(!gfnIsTel(this.dsPtnr.getColumn(0,"FAX"), "T")) {
        			msg		= gfnMultiLabel("EPRO_LABEL_01216");
        			type	= gfnMultiLabel("EPRO_LABEL_01194");
        			objParam = {agv_msg:msg, agv_type:type};
        			arr.push(objParam);
        		}
        	}
        	// 국가
        	if(gfnIsNull(this.dsPtnr.getColumn(0,"CD_NATION"))){
        		msg		= gfnMultiLabel("EPRO_LABEL_01061");
        		type	= gfnMultiLabel("EPRO_LABEL_00935");
        		objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        		arr.push(objParam);
        	} else if(!gfnIsNull(this.dsPtnr.getColumn(0,"CD_NATION")) && "CM16ETC" == this.dsPtnr.getColumn(0,"CD_NATION")) {
        		// 기타일경우 비고 입력
        		if(gfnIsNull(this.dsPtnr.getColumn(0,"NATION_RMK"))) {
        			msg		= gfnMultiLabel("EPRO_LABEL_01235");
        			type	= gfnMultiLabel("EPRO_LABEL_00935");
        			objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        			arr.push(objParam);
        		}
        	}
        //대표자정보
        	// 대표자명
        	if(gfnIsNull(this.dsPtnr.getColumn(0,"RPRSTV_NM"))){
        		msg		= gfnMultiLabel("EPRO_LABEL_01062");
        		type	= gfnMultiLabel("EPRO_LABEL_00935");
        		objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        		arr.push(objParam);
        	}
        	// 대표자E-MAIL
        	if(gfnIsNull(this.dsPtnr.getColumn(0,"RPRSTV_EMAIL"))){
        		msg		= gfnMultiLabel("EPRO_LABEL_01234");
        		type	= gfnMultiLabel("EPRO_LABEL_00935");
        		objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        		arr.push(objParam);
        	}
        	//연락처
        	if(!gfnIsNull(this.dsPtnr.getColumn(0,"RPTST_TEL")) && telCheckBool) {
        		if(!gfnIsTel(this.dsPtnr.getColumn(0,"RPTST_TEL"))) {
        			msg		= gfnMultiLabel("EPRO_LABEL_01206");
        			type	= gfnMultiLabel("EPRO_LABEL_01194");
        			objParam = {agv_msg:msg, agv_type:type};
        			arr.push(objParam);
        		}
        	}
        	// 휴대전화
        	if(!gfnIsNull(this.dsPtnr.getColumn(0,"RPRSTV_HP")) && telCheckBool) {
        		if(!gfnIsTel(this.dsPtnr.getColumn(0,"RPRSTV_HP"), "C")) {
        			msg		= gfnMultiLabel("EPRO_LABEL_01207");
        			type	= gfnMultiLabel("EPRO_LABEL_01194");
        			objParam = {agv_msg:msg, agv_type:type};
        			arr.push(objParam);
        		}
        	}
        //사업장주소
        	// 우편번호
        	if(gfnIsNull(this.dsPtnr.getColumn(0,"ZIP_NO"))){
        		msg		= gfnMultiLabel("EPRO_LABEL_01063");
        		type	= gfnMultiLabel("EPRO_LABEL_00935");
        		objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        		arr.push(objParam);
        	}
        	// 주소
        	if(gfnIsNull(this.dsPtnr.getColumn(0,"ADDR"))){
        		msg		= gfnMultiLabel("EPRO_LABEL_01064");
        		type	= gfnMultiLabel("EPRO_LABEL_00935");
        		objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        		arr.push(objParam);
        	}
        	// 상세주소
        	if(gfnIsNull(this.dsPtnr.getColumn(0,"DTL_ADDR"))){
        		msg		= gfnMultiLabel("EPRO_LABEL_01065");
        		type	= gfnMultiLabel("EPRO_LABEL_00935");
        		objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        		arr.push(objParam);
        	}
        //경영실태현황
        	// 자산총계
        	if(gfnIsNull(this.dsPtnr.getColumn(0,"AST"))){
        		msg		= gfnMultiLabel("EPRO_LABEL_01072");
        		type	= gfnMultiLabel("EPRO_LABEL_00935");
        		objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        		arr.push(objParam);
        	}
        	// 자본금총계
        	if(gfnIsNull(this.dsPtnr.getColumn(0,"CAPL"))){
        		msg		= gfnMultiLabel("EPRO_LABEL_01073");
        		type	= gfnMultiLabel("EPRO_LABEL_00935");
        		objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        		arr.push(objParam);
        	}
        	// 부채총계
        	if(gfnIsNull(this.dsPtnr.getColumn(0,"DEBT"))){
        		msg		= gfnMultiLabel("EPRO_LABEL_01074");
        		type	= gfnMultiLabel("EPRO_LABEL_00935");
        		objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        		arr.push(objParam);
        	}
        	// 총인원
        	if(gfnIsNull(this.dsPtnr.getColumn(0,"EMP_CNT")) || 0 == this.dsPtnr.getColumn(0,"EMP_CNT")){
        		msg		= gfnMultiLabel("EPRO_LABEL_01075");
        		type	= gfnMultiLabel("EPRO_LABEL_00935");
        		objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        		arr.push(objParam);
        	}
        	// 주요거래처
        	if(gfnIsNull(this.dsPtnr.getColumn(0,"MJR_CSTMR"))){
        		msg		= gfnMultiLabel("EPRO_LABEL_01076");
        		type	= gfnMultiLabel("EPRO_LABEL_00935");
        		objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        		arr.push(objParam);
        	}
        	// 매출액1 
        	if(gfnIsNull(this.dsPtnr.getColumn(0,"SALES_AMT_1"))){
        		msg		= gfnMultiLabel(gfnLabelRep("EPRO_LABEL_01223", [this.dsPtnr.getColumn(0, "YR_1")]));
        		type	= gfnMultiLabel("EPRO_LABEL_00935");	
        		objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        		arr.push(objParam);
        	}
        	// 매출액2
        	if(gfnIsNull(this.dsPtnr.getColumn(0,"SALES_AMT_2"))){
        		msg		= gfnMultiLabel(gfnLabelRep("EPRO_LABEL_01223", [this.dsPtnr.getColumn(0, "YR_2")]));
        		type	= gfnMultiLabel("EPRO_LABEL_00935");
        		objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        		arr.push(objParam);
        	}
        	// 매출액3
        	if(gfnIsNull(this.dsPtnr.getColumn(0,"SALES_AMT_3"))){
        		msg		= gfnMultiLabel(gfnLabelRep("EPRO_LABEL_01223", [this.dsPtnr.getColumn(0, "YR_3")]));
        		type	= gfnMultiLabel("EPRO_LABEL_00935");
        		objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        		arr.push(objParam);
        	}
        	// 영업이익1
        	if(gfnIsNull(this.dsPtnr.getColumn(0,"BIZ_PROFIT_1"))){
        		msg		= gfnMultiLabel(gfnLabelRep("EPRO_LABEL_01224", [this.dsPtnr.getColumn(0, "YR_3")]));
        		type	= gfnMultiLabel("EPRO_LABEL_00935");
        		objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        		arr.push(objParam);
        	}
        	// 영업이익2
        	if(gfnIsNull(this.dsPtnr.getColumn(0,"BIZ_PROFIT_2"))){
        		msg		= gfnMultiLabel(gfnLabelRep("EPRO_LABEL_01224", [this.dsPtnr.getColumn(0, "YR_3")]));
        		type	= gfnMultiLabel("EPRO_LABEL_00935");
        		objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        		arr.push(objParam);
        	}
        	// 영업이익3
        	if(gfnIsNull(this.dsPtnr.getColumn(0,"BIZ_PROFIT_3"))){
        		msg		= gfnMultiLabel(gfnLabelRep("EPRO_LABEL_01224", [this.dsPtnr.getColumn(0, "YR_3")]));
        		type	= gfnMultiLabel("EPRO_LABEL_00935");
        		objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        		arr.push(objParam);
        	}	
        	//공장정보
        	for(var i=0; i<this.dsPtnrPlant.getRowCount(); i++) {
        		if(gfnIsNull(this.dsPtnrPlant.getColumn(i, "CD_NATION")) || gfnIsNull(this.dsPtnrPlant.getColumn(i, "AREA"))
        		   || gfnIsNull(this.dsPtnrPlant.getColumn(i, "ADDR")) || gfnIsNull(this.dsPtnrPlant.getColumn(i, "GROSS_AREA")) ) {
        			msg		= gfnMultiLabel("EPRO_LABEL_01141");
        			type	= gfnMultiLabel("EPRO_LABEL_00935");
        			objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        			arr.push(objParam);
        		} else {
        			if(this.dsPtnrPlant.getColumn(i, "CD_NATION") == "CM16ETC" && gfnIsNull(this.dsPtnrPlant.getColumn(i, "NATION_RMK"))) {
        				msg		= gfnMultiLabel("EPRO_LABEL_01141");
        				type	= gfnMultiLabel("EPRO_LABEL_00935");
        				objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        				arr.push(objParam);
        			}
        		}
        	}
        	//MAKER정보
           for(var i=0; i<this.dsPtnrMaker.getRowCount(); i++) {
              if(gfnIsNull(this.dsPtnrMaker.getColumn(i, "MAKER"))){
        			msg		= gfnMultiLabel("EPRO_LABEL_01142");
        			type	= gfnMultiLabel("EPRO_LABEL_00935");
        			objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        			arr.push(objParam);
              }
              if(this.dsPtnrMaker.getColumn(i, "ALT_TS") == 1 && gfnIsNull(this.dsPtnrMaker.getColumn(i, "LIMIT_DAY"))  ){
        			msg		= gfnMultiLabel("EPRO_LABEL_01277");
        			type	= gfnMultiLabel("EPRO_LABEL_01201");
        			objParam = {agv_msg:msg, agv_type:type};
        			arr.push(objParam);
              }
           }
        	  
        	//소싱그룹
        	//대표소싱그룹
        	if(gfnIsNull(this.dsPtnr.getColumn(0,"RPTST_SRC_GRP_ID"))){
        		msg		= gfnMultiLabel("EPRO_LABEL_01090");
        		type	= gfnMultiLabel("EPRO_LABEL_01201");
        		objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        		arr.push(objParam);
        	}

        	this.dsPtnrFile.set_enableevent(false);
        	this.dsPtnrFile.filter("CHECKED==1");
        	if(0 < this.dsPtnrFile.getRowCount()) {
        		if(this.dsPtnrFile.getRowCount() <= this.dsPtnr.getColumn(0, "ATTCH_FILE_CNT")) {
        	
        		} else {
        			msg		= gfnMultiLabel("EPRO_LABEL_01228");
        			type	= gfnMultiLabel("EPRO_LABEL_01201");
        			objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        			arr.push(objParam);
        		}
        	}
        	this.dsPtnrFile.filter("");
        	this.dsPtnrFile.set_enableevent(true);
        	
        	//변경체크
        	var mailCheck = 0;
        	for(var i =0; i < this.dsPtnrMail.colcount; i++ ){
        		var colId = this.dsPtnrMail.getColID(i);
        		if("MAILCHECK" != colId) {
        			if(this.dsPtnr.getColumn(0, colId) != this.dsPtnrMail.getColumn(0, colId)){
        				mailCheck = 1;
        				break;
        			}
        		}
        		
        		
        		
        	}
        	this.dsPtnrMail.setColumn(0, "MAILCHECK", mailCheck);
        	
        	return gfnValidate(this, true, arr);
        }
        	
        /**
          * @함수명  : fnSave
          * @input    : obj:Button,  e:nexacro.ClickEventInfo
          * @return   : 
          * @desc     : 저장
          */
        this.fnSave = function(obj,e)
        {
        	if(!this.fnPreSave()) return false;
        	if(!gfnConfirm("EPRO_LABEL_00001")) return;
        	
        	var bgnDay = this.dsPtnr.getColumn(0, "BIZ_BGN_DAY");
        	bgnDay = bgnDay.substring(0,4);
        	this.dsPtnr.setColumn(0, "BIZ_BGN_DAY", bgnDay);
        	
        	var sSvcID = "savePtnr";
        	var sController = "epro.ptnr.service.SPtnrService.saveSPtnr";
        	var sInDatasets = "dsPtnr=dsPtnr:A dsUser=dsUser:A dsPtnrPlant=dsPtnrPlant:A dsPtnrMaker=dsPtnrMaker:A dsSelectGrp=dsSelectGrp:A dsPtnrFile=dsPtnrFile dsPtnrMail=dsPtnrMail";
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
        	if(strErrCd < 0){
        		return;
        	}	
        	
        	switch(strSvcID){				
        		case "readPtnr" :	//조회
        			//해외사업자
        			if("SR12AB" == this.dsPtnr.getColumn(0, "CD_PTNR_CTGR")) {
        				this.tabPtnr.ptnrDetail.divViewCompBody00.staBizType.set_cssclass("sta_WF_Label")
        				this.tabPtnr.ptnrDetail.divViewCompBody00.staBizCndtn.set_cssclass("sta_WF_Label")
        				gfnSetObj("B");
        			} else {
        				this.tabPtnr.ptnrDetail.divViewCompBody00.staBizType.set_cssclass("sta_WF_Label_P")
        				this.tabPtnr.ptnrDetail.divViewCompBody00.staBizCndtn.set_cssclass("sta_WF_Label_P")
        				gfnSetObj("A");
        			}
        			if("CM16ETC" == this.dsPtnr.getColumn(0, "CD_NATION")) {
        				this.tabPtnr.ptnrDetail.divViewCompBody00.edtEctNation.set_visible(true);
        			}
        			//this.tabPtnr.srcGrp.divViewCompBody00.divSrcGrpId.fnSetView()
        			
        			break;
        			
        		case "savePtnr" :	//저장
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
        	this.dsReturn.clear();
        	switch(sPopupId){
        		case "CompFileUpDownPopup" :
        			this.dsReturn.loadXML(rtn);
        			
        			this.dsPtnr.setColumn(0, "ATTCH_FILE_CNT", this.dsReturn.getColumn(0, "FILE_COUNT"));
        			
        		default:
        			break;	
        	}
        }

        /**
          * @함수명  : fnSearchZipNo
          * @input    : obj:Button, e:nexacro.ClickEventInfo(이벤트변수)
          * @return   : 
          * @desc     : 우편번호 검색팝업 호출
          */
        this.fnSearchZipNo = function(obj,e)
        {
        	//typeDefinition 에 svcurl 이 controller 까지 되어있어 주소 다 적음.( 추후 변경해야됨.)
        	this.wbBizNo.set_url(application.gvDomain + "/jsp/daumJuso.jsp");
        }

        /**
          * @함수명  : fnOnusernotify
          * @input    : obj:WebBrowser, e:nexacro.WebTitleChangeEventInfo(이벤트변수)
          * @return   : 
          * @desc     : 우편번호 검색팝업
          */
        this.fnOnusernotify = function(obj,e)
        {
        	if(obj.getProperty("document").getProperty("title").indexOf("▩") == 0 || e.userdata.indexOf("▦") == 0){
        		var text = "";
        		var addr = "";
        		var addrArr ;
        		
        		if(obj.getProperty("document").getProperty("title").indexOf("▩") == 0){
        			text = gfnReplace(obj.getProperty("document").getProperty("title"),"▩","");
        		} else if (e.userdata.indexOf("▦") == 0){
        			text = gfnReplace(e.userdata,"▦","");
        		}
        		addrArr = text.split("▧");
        		
        		if(addrArr[3]=="J"){
        			addr = addrArr[2];
        		}else{
        			addr = addrArr[1];
        		}
        		
        		this.dsPtnr.setColumn(0,"ZIP_NO",addrArr[0]);
        		this.dsPtnr.setColumn(0,"ADDR",addr)
        	}
        }

        /**
          * @함수명  : dsPtnr_oncolumnchanged()
          * @input    : obj::Dataset, e:nexacro.DSColChangeEventInfo(이벤트변수)
          * @return   : 
          * @desc     : 경영정보 합계산
          */
        this.dsPtnr_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid =="CAPL"||e.columnid =="DEBT"||e.columnid =="BIZ_PROFIT"){
        		var intCapl = nexacro.toNumber(gfnNvl(this.dsPtnr.getColumn(0,"CAPL"),0));
        		var intDebt = nexacro.toNumber(gfnNvl(this.dsPtnr.getColumn(0,"DEBT"),0));
        		var intBizProfit = nexacro.toNumber(gfnNvl(this.dsPtnr.getColumn(0,"BIZ_PROFIT"),0));
        		
        		this.dsPtnr.setColumn(0,"AST",(intCapl+intDebt+intBizProfit));
        	}else if(e.columnid =="EMP_CNT_KI"||e.columnid =="EMP_CNT_SA"||e.columnid =="EMP_CNT_ETC"){
        		var intEmpCntKi = nexacro.toNumber(gfnNvl(this.dsPtnr.getColumn(0,"EMP_CNT_KI"),0));
        		var intEmpCntSa = nexacro.toNumber(gfnNvl(this.dsPtnr.getColumn(0,"EMP_CNT_SA"),0));
        		var intEmpCntEtc = nexacro.toNumber(gfnNvl(this.dsPtnr.getColumn(0,"EMP_CNT_ETC"),0));
        		this.dsPtnr.setColumn(0,"EMP_CNT",(intEmpCntKi+intEmpCntSa+intEmpCntEtc)); 
        	}
        }

        
        /**
          * @함수명  : fnPtnrItemAdd
          * @input    : obj:Button, e:nexacro.ClickEventInfo(이벤트변수)
          * @return   : 
          * @desc     : 취급품목 추가
          */
        this.fnPtnrItemAdd = function(obj,e)
        {
        	this.dsPtnrItem.addRow();
        }

        /**
          * @함수명  : fnPtnrItemDel
          * @input    : obj:Button, e:nexacro.LoadEventInfo(이벤트변수)
          * @return   : 
          * @desc     : 취급품목 삭제
          */
        this.fnPtnrItemDel = function(obj,e)
        {
        	if(this.dsPtnrItem.getCaseCount("CHECKED==1")<1){
        		gfnAlert("EPRO_LABEL_00759");
        		return;
        	}
        	
        	for(var i=this.dsPtnrItem.getRowCount(); i>0;i--){
        		if(this.dsPtnrItem.getColumn(i,"CHECKED")==1){
        			this.dsPtnrItem.deleteRow(i);
        		}
        	}
        }

        /**
        	@function	fnGrdPtnrItemClick()
        	@desc   	첨부파일 팝업 호출
        */
        this.fnGrdPtnrItemClick = function(obj,e)
        {
        	if(5 == e.col) { 
        		var sArg = {
        					agv_sTableNm:"MM_PTNR"
        					,gv_arrFileKey:[this.dsPtnr.getColumn(0, "PTNR_ID"), this.dsPtnrFile.getColumn(e.row,"NO")]
        					,agv_data:this.dsPtnrFile
        					,agv_form:this
        					,agv_view:"N" 
        				};
        		gfnModalPop(this, "CompFileUpDownPopup", "CPOP::CompFileUpDownPopup.xfdl", sArg, "fnPopCallBack", 900, 400);
        	} else if(3 == e.col){ 
        		var nRow = this.dsPtnrFile.rowposition;

        		if(!gfnIsNull(this.dsPtnrFile.getColumn(nRow,"KR"))){
        			var fileNm = this.dsPtnrFile.getColumn(nRow,"FILE_NM");
        			
        			if(fileNm == "EPRO_LABEL_01240"){
        				fileNm = "1. (Kor)Supplier CSR Survey_131106.docx";
        			} else if(fileNm == "EPRO_LABEL_01419"){
        				fileNm = "06_PSA 평가 Check List.zip";
        			} else if(fileNm == "EPRO_LABEL_01420"){
        				fileNm = "4M 신고 확약서.pptx";
        			}
        			
        			var downUrl = application.gvDomain + "/ptnr/" + fileNm;
        			system.execBrowser(downUrl);
        		}
        		
        	} else if(4 == e.col){
        		var nRow = this.dsPtnrFile.rowposition;
        		
        		if(!gfnIsNull(this.dsPtnrFile.getColumn(nRow,"EN"))){
        			var fileNm = this.dsPtnrFile.getColumn(nRow,"FILE_NM");
        			
        			if(fileNm == "EPRO_LABEL_01239"){
        				fileNm = "0_HUMAX Supplier Questionnaire (Eng).doc";
        				
        			} else if(fileNm == "EPRO_LABEL_01240"){
        				fileNm = "2. (Eng)Supplier CSR Survey_131108.docx";
        				
        			} else if(fileNm == "EPRO_LABEL_01241"){
        				fileNm = "Supplier Self Audit Check List (Eng).xls";
        			}
        			
        			var downUrl = application.gvDomain + "/ptnr/" + fileNm;
        			system.execBrowser(downUrl);
        		}
        	}
        }

        /**
           @function   fnGrdLrgGrpOncellClick()
           @desc      소싱그룹탭 중분류 그리드 셀 클릭 이벤트
        */
        this.fnGrdMdlGrpOncellClick = function(obj,e)
        {
           if("BTN" == gfnGrdBindColId(obj, obj.getCellPos())){
              this.dsMdlGrp.set_enableevent(false);
              if("ADD" == obj.getCellValue(e.row, e.col)) {

                 var nRow = this.dsSelectGrp.addRow();

                 this.dsSelectGrp.setColumn(nRow, "PTNR_ID", this.dsPtnr.getColumn(0, "PTNR_ID"));
                 this.dsSelectGrp.setColumn(nRow, "BRANCH_CD", this.dsPtnr.getColumn(0, "BRANCH_CD"));
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
           @function   fnGrdSeleteGrpOncellClick()
           @desc      협력사 소싱그룹 그리드 셀 클릭 이벤트
        */
        this.fnGrdSeleteGrpOncellClick = function(obj,e)
        {
           if("BTN" == obj.getCellProperty("Body", e.col, "text")){
              this.fnGrdSeleteGrpDel(e.row);
           }
        }
        /**
           @function   fnLrgGrpOnrowposChanged()
           @desc      소싱그룹 대분류 rowposition 변경이벤트
        */
        this.fnLrgGrpOnrowposChanged = function(obj,e)
        {
           this.fnDsMdlGrpfilter();
        }
        /**
           @function   fnDsMdlGrpfilter()
           @desc      소싱그룹 중분류 필터
        */
        this.fnDsMdlGrpfilter = function()
        {
           this.dsMdlGrp.filter("UP_SRC_GRP_ID=='" + this.dsLrgGrp.getColumn(this.dsLrgGrp.rowposition, "SRC_GRP_ID") + "'");
        }

        /**
           @function   fnGrdSeleteGrpDel()
           @desc      협력사 소싱그룹 삭제
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
           @function   fnGrdSeleteGrpOnHeadclick()
           @desc      협력사 소싱그룹 그리드 헤드셀 클릭 이벤트
        */
        this.fnGrdSeleteGrpOnHeadclick = function(obj,e)
        {
           if("BTN" == obj.getCellProperty("Head", e.col, "text")){
              for(var i=this.dsSelectGrp.getRowCount()-1; i>=0; i--) {
                 this.fnGrdSeleteGrpDel(i);
              }
           }
        }
        /**
           @function   fnMakerAdd()
           @desc       협력사 메이커추가
        */
        this.fnMakerAdd = function(obj,e)
        {
        	var nRow = this.dsPtnrMaker.addRow();
        	this.dsPtnrMaker.setColumn(nRow, "PTNR_ID", this.dsPtnr.getColumn(0, "PTNR_ID"));
        	this.dsPtnrMaker.setColumn(nRow, "CRTR_ID", "");
        	this.dsPtnrMaker.setColumn(nRow, "LAST_CHGR_ID", "");
        }

        /**
           @function   fnPlantAdd()
           @desc      협력사공장 추가
        */
        this.fnPlantAdd = function(obj,e)
        {
        	var nRow = this.dsPtnrPlant.addRow();
        	this.dsPtnrPlant.setColumn(nRow, "PTNR_ID", this.dsPtnr.getColumn(0, "PTNR_ID"));
        	this.dsPtnrPlant.setColumn(nRow, "CRTR_ID", "");
        	this.dsPtnrPlant.setColumn(nRow, "LAST_CHGR_ID", "");
        	this.dsPtnrPlant.setColumn(nRow, "CD_NATION", "");
        }
        /**
           @function   fnMakerDel()
           @desc       협력사 메이커삭제
        */
        this.fnMakerDel = function(obj,e)
        {
        	gfnChkDelConfirm(this.dsPtnrMaker);
        }

        /**
           @function   fnPlantDel()
           @desc      협력사공장 삭제
        */
        this.fnPlantDel = function(obj,e)
        {
        	gfnChkDelConfirm(this.dsPtnrPlant);
        }

        /**
        	@function	fncboNationOnitemchanged()
        	@desc   	국가 기타 설정시 에디터창 활성화
        */
        this.fncboNationOnitemchanged = function(obj,e)
        {
        	if(e.postvalue == "CM16ETC") {
        		this.tabPtnr.ptnrDetail.divViewCompBody00.edtEctNation.set_visible(true);
        	} else {
        		this.tabPtnr.ptnrDetail.divViewCompBody00.edtEctNation.set_visible(false);
        		this.dsPtnr.setColumn(0, "NATION_RMK", "")
        	}
        }

        /**
           @function   fnOnComboDropDown()
           @desc       콤보한번에 열리기
        */
        this.fnOnComboDropDown = function(obj,e)
        {
        	obj.dropdownCombo();
        }

        /**
           @function   fnDsPtnrPlantCancolumnchange()
           @desc       국가비고
        */
        this.fnDsPtnrPlantCancolumnchange = function(obj,e)
        {
        	if(e.columnid == "CD_NATION") {
        		if(obj.getColumn(e.row, "CD_NATION") != "CM16ETC") {
        			obj.setColumn(e.row, "NATION_RMK", "")
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPtnr.addEventHandler("oncolumnchanged", this.dsPtnr_oncolumnchanged, this);
            this.dsLrgGrp.addEventHandler("onrowposchanged", this.fnLrgGrpOnrowposChanged, this);
            this.dsPtnrPlant.addEventHandler("oncolumnchanged", this.fnDsPtnrPlantCancolumnchange, this);
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.wbBizNo.addEventHandler("onusernotify", this.fnOnusernotify, this);
            this.tabPtnr.ptnrDetail.divViewCompTitle00.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.tabPtnr.ptnrDetail.divViewCompTitle02.staViewCompTitle02.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.tabPtnr.ptnrDetail.divViewCompTitle01.staViewCompTitle01.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.tabPtnr.ptnrDetail.divViewCompBody02.btnZipNo.addEventHandler("onclick", this.fnSearchZipNo, this);
            this.tabPtnr.ptnrDetail.divViewCompBody04.txtMjrCstmr.addEventHandler("oneditclick", this.Tab01_tabp01_TextArea00_oneditclick, this);
            this.tabPtnr.ptnrDetail.divViewCompBody04.staEmpCntKi.addEventHandler("onclick", this.divViewCompBody01_staCdEvalRunStts00_onclick, this);
            this.tabPtnr.ptnrDetail.divViewCompTitle05.btnPlantAdd.addEventHandler("onclick", this.fnPlantAdd, this);
            this.tabPtnr.ptnrDetail.divViewCompTitle05.btnPlantDel.addEventHandler("onclick", this.fnPlantDel, this);
            this.tabPtnr.ptnrDetail.divViewCompBody05.grdPlant.addEventHandler("oncellclick", this.fnOnComboDropDown, this);
            this.tabPtnr.ptnrDetail.divViewCompBody00.staRmark.addEventHandler("onclick", this.Tab00_tabpage1_divViewCompBody00_staRmark_onclick, this);
            this.tabPtnr.ptnrDetail.divViewCompBody00.cboCdNation.addEventHandler("onitemchanged", this.fncboNationOnitemchanged, this);
            this.tabPtnr.ptnrDetail.divViewCompTitle06.btnMakerAdd.addEventHandler("onclick", this.fnMakerAdd, this);
            this.tabPtnr.ptnrDetail.divViewCompTitle06.btnMakerDel.addEventHandler("onclick", this.fnMakerDel, this);
            this.tabPtnr.ptnrDetail.divViewCompBody03.edtSquar.addEventHandler("onkillfocus", this.Edit03_onkillfocus, this);
            this.tabPtnr.ptnrDetail.divViewCompBody03.edtSquar.addEventHandler("onsetfocus", this.Edit04_onsetfocus, this);
            this.tabPtnr.ptnrDetail.divViewCompBody03.edtSquar00.addEventHandler("onkillfocus", this.Edit03_onkillfocus, this);
            this.tabPtnr.ptnrDetail.divViewCompBody03.edtSquar00.addEventHandler("onsetfocus", this.Edit04_onsetfocus, this);
            this.tabPtnr.ptnrDetail.divViewCompBody03.edtSquar01.addEventHandler("onkillfocus", this.Edit03_onkillfocus, this);
            this.tabPtnr.ptnrDetail.divViewCompBody03.edtSquar01.addEventHandler("onsetfocus", this.Edit04_onsetfocus, this);
            this.tabPtnr.aprvDetail.divViewCompBody00.divViewCompTitle00.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.tabPtnr.relateDocument.divViewCompBody00.grdPtnrFile.addEventHandler("oncellclick", this.fnGrdPtnrItemClick, this);
            this.wbBizNo00.addEventHandler("onusernotify", this.fnOnusernotify, this);

        };

        this.loadIncludeScript("SPtnDetail.xfdl", true);

       
    };
}
)();
