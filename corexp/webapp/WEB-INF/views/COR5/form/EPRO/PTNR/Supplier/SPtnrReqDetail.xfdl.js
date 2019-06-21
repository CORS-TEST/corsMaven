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
                this.set_titletext("신규업체등록상세");
                this._setFormPosition(0,0,1220,1868);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPtnr", this);
            obj._setContents("<ColumnInfo><Column id=\"PTNR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_PTNR_STTS\" size=\"256\" type=\"STRING\"/><Column id=\"BIZ_NO\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_NM\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_NM_GB\" size=\"256\" type=\"STRING\"/><Column id=\"HEAD_OFFCBIZ_NO\" size=\"256\" type=\"STRING\"/><Column id=\"CORP_REG_NO\" size=\"256\" type=\"STRING\"/><Column id=\"BIZ_CNDTN\" size=\"256\" type=\"STRING\"/><Column id=\"BIZ_TYPE\" size=\"256\" type=\"STRING\"/><Column id=\"BIZ_BGN_DAY\" size=\"256\" type=\"STRING\"/><Column id=\"RPRSTV_NM\" size=\"256\" type=\"STRING\"/><Column id=\"RPRSTV_HP\" size=\"256\" type=\"STRING\"/><Column id=\"RPRSTV_EMAIL\" size=\"256\" type=\"STRING\"/><Column id=\"ZIP_NO\" size=\"256\" type=\"STRING\"/><Column id=\"ADDR\" size=\"256\" type=\"STRING\"/><Column id=\"DTL_ADDR\" size=\"256\" type=\"STRING\"/><Column id=\"RPTST_TEL\" size=\"256\" type=\"STRING\"/><Column id=\"TEL\" size=\"256\" type=\"STRING\"/><Column id=\"FAX\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_USE\" size=\"256\" type=\"STRING\"/><Column id=\"ATTCH_FILE_CNT\" size=\"256\" type=\"INT\"/><Column id=\"TKEY\" size=\"256\" type=\"STRING\"/><Column id=\"RTN_RSN\" size=\"256\" type=\"STRING\"/><Column id=\"TRD_REQ_BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"RPTST_SRC_GRP_ID\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_CHT_DT\" size=\"256\" type=\"STRING\"/><Column id=\"RPTST_USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"AST\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"DEBT\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"CAPL\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"BIZ_PROFIT\" size=\"256\" type=\"STRING\"/><Column id=\"EMP_CNT\" size=\"256\" type=\"STRING\"/><Column id=\"PYMT_BNK\" size=\"256\" type=\"STRING\"/><Column id=\"BNK_OWNR\" size=\"256\" type=\"STRING\"/><Column id=\"BNK_ACNT_NO\" size=\"256\" type=\"STRING\"/><Column id=\"MJR_CSTMR\" size=\"256\" type=\"STRING\"/><Column id=\"YR_1\" size=\"256\" type=\"STRING\"/><Column id=\"YR_2\" size=\"256\" type=\"STRING\"/><Column id=\"YR_3\" size=\"256\" type=\"STRING\"/><Column id=\"SALES_AMT_1\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"SALES_AMT_2\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"SALES_AMT_3\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"PTNR_RMK\" size=\"256\" type=\"STRING\"/><Column id=\"EMP_CNT_KI\" size=\"256\" type=\"INT\"/><Column id=\"EMP_CNT_SA\" size=\"256\" type=\"INT\"/><Column id=\"EMP_CNT_ETC\" size=\"256\" type=\"INT\"/><Column id=\"APP_DOC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"APP_CMPLT_DT\" size=\"256\" type=\"STRING\"/><Column id=\"CD_PTNR_CTGR\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NATION\" size=\"256\" type=\"STRING\"/><Column id=\"NATION_RMK\" size=\"256\" type=\"STRING\"/><Column id=\"AREA\" size=\"256\" type=\"STRING\"/><Column id=\"BIZ_PROFIT_1\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"BIZ_PROFIT_2\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"BIZ_PROFIT_3\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"PYMT_BNK_ADDR\" size=\"256\" type=\"STRING\"/><Column id=\"CD_TRD_CRNC\" size=\"256\" type=\"STRING\"/><Column id=\"CD_INCOTERMS\" size=\"256\" type=\"STRING\"/><Column id=\"HM_PG\" size=\"256\" type=\"STRING\"/><Column id=\"CD_PYMT_CNDTN\" size=\"256\" type=\"STRING\"/><Column id=\"CRDT_GRD\" size=\"256\" type=\"STRING\"/><Column id=\"CACHE_GRADE\" size=\"256\" type=\"STRING\"/><Column id=\"CRDT_EVAL_ORG\" size=\"256\" type=\"STRING\"/><Column id=\"CRDT_EVAL_DAY\" size=\"256\" type=\"STRING\"/><Column id=\"CRTR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CRT_DT\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_CHGR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_CHG_DT\" size=\"256\" type=\"STRING\"/><Column id=\"LANG_CD\" size=\"256\" type=\"STRING\"/><Column id=\"LRG_GRP_ID\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUser", this);
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_USE\" size=\"256\" type=\"STRING\"/><Column id=\"INT_USER_TYPE\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"USER_NM\" size=\"256\" type=\"STRING\"/><Column id=\"USER_NM_GB\" size=\"256\" type=\"STRING\"/><Column id=\"DEPT_CD\" size=\"256\" type=\"STRING\"/><Column id=\"DEPT_NM\" size=\"256\" type=\"STRING\"/><Column id=\"PWDCH\" size=\"256\" type=\"STRING\"/><Column id=\"PWD\" size=\"256\" type=\"STRING\"/><Column id=\"FAX\" size=\"256\" type=\"STRING\"/><Column id=\"MJR_JOB\" size=\"256\" type=\"STRING\"/><Column id=\"TEL\" size=\"256\" type=\"STRING\"/><Column id=\"HP\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_SMS_RCV\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_MAIL_RCV\" size=\"256\" type=\"STRING\"/><Column id=\"PWD_EXPR_DAY\" size=\"256\" type=\"STRING\"/><Column id=\"PWD_CHG_DAY\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_LOGIN_DT\" size=\"256\" type=\"STRING\"/><Column id=\"COST_CNTR_CD\" size=\"256\" type=\"STRING\"/><Column id=\"CC_NM\" size=\"256\" type=\"STRING\"/><Column id=\"EMP_NO\" size=\"256\" type=\"STRING\"/><Column id=\"EMAIL\" size=\"256\" type=\"STRING\"/><Column id=\"LOGIN_SSN_INFO\" size=\"256\" type=\"STRING\"/><Column id=\"LOGIN_IP_ADDR\" size=\"256\" type=\"STRING\"/><Column id=\"CRTR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CRT_DT\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_CHGR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_CHG_DT\" size=\"256\" type=\"STRING\"/><Column id=\"PSTN\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_TEAM_LDR\" size=\"256\" type=\"STRING\"/><Column id=\"ABS_USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"ABS_ST_DAY\" size=\"256\" type=\"STRING\"/><Column id=\"ABS_ED_DAY\" size=\"256\" type=\"STRING\"/></ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_USE\" size=\"256\" type=\"STRING\"/><Column id=\"INT_USER_TYPE\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"USER_NM\" size=\"256\" type=\"STRING\"/><Column id=\"USER_NM_GB\" size=\"256\" type=\"STRING\"/><Column id=\"DEPT_CD\" size=\"256\" type=\"STRING\"/><Column id=\"DEPT_NM\" size=\"256\" type=\"STRING\"/><Column id=\"PWD\" size=\"256\" type=\"STRING\"/><Column id=\"FAX\" size=\"256\" type=\"STRING\"/><Column id=\"MJR_JOB\" size=\"256\" type=\"STRING\"/><Column id=\"TEL\" size=\"256\" type=\"STRING\"/><Column id=\"HP\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_SMS_RCV\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_MAIL_RCV\" size=\"256\" type=\"STRING\"/><Column id=\"PWD_EXPR_DAY\" size=\"256\" type=\"STRING\"/><Column id=\"PWD_CHG_DAY\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_LOGIN_DT\" size=\"256\" type=\"STRING\"/><Column id=\"COST_CNTR_CD\" size=\"256\" type=\"STRING\"/><Column id=\"CC_NM\" size=\"256\" type=\"STRING\"/><Column id=\"EMP_NO\" size=\"256\" type=\"STRING\"/><Column id=\"EMAIL\" size=\"256\" type=\"STRING\"/><Column id=\"LOGIN_SSN_INFO\" size=\"256\" type=\"STRING\"/><Column id=\"LOGIN_IP_ADDR\" size=\"256\" type=\"STRING\"/><Column id=\"CRTR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CRT_DT\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_CHGR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_CHG_DT\" size=\"256\" type=\"STRING\"/><Column id=\"PSTN\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_TEAM_LDR\" size=\"256\" type=\"STRING\"/><Column id=\"ABS_USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"ABS_ST_DAY\" size=\"256\" type=\"STRING\"/><Column id=\"ABS_ED_DAY\" size=\"256\" type=\"STRING\"/>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserChk", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReturn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPtnrFile", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_NM\" size=\"256\" type=\"STRING\"/><Column id=\"CHECKED\" size=\"256\" type=\"STRING\"/><Column id=\"NO\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"file\" size=\"256\" type=\"STRING\"/><Column id=\"NUM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"FILE_NM\">EPRO_LABEL_01146</Col><Col id=\"CHECKED\">1</Col><Col id=\"NO\">1</Col><Col id=\"file\"/><Col id=\"NUM\">1</Col></Row><Row><Col id=\"NO\">6</Col><Col id=\"CHECKED\">0</Col><Col id=\"FILE_NM\">EPRO_LABEL_01419</Col><Col id=\"file\">EPRO_LABEL_00003</Col><Col id=\"NUM\">2</Col></Row><Row><Col id=\"NO\">7</Col><Col id=\"CHECKED\">0</Col><Col id=\"FILE_NM\">EPRO_LABEL_01420</Col><Col id=\"file\">EPRO_LABEL_00003</Col><Col id=\"NUM\">3</Col></Row><Row><Col id=\"NO\">8</Col><Col id=\"FILE_NM\">EPRO_LABEL_01421</Col><Col id=\"CHECKED\">0</Col><Col id=\"file\"/><Col id=\"NUM\">4</Col></Row></Rows>");
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

            obj = new Dataset("dsCdCM15", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM13", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM22", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPtnrPlant", this);
            obj._setContents("<Column id=\"PTNR_PLANT_ID\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NATION\" size=\"256\" type=\"STRING\"/><Column id=\"NATION_RMK\" size=\"256\" type=\"STRING\"/><Column id=\"AREA\" size=\"256\" type=\"STRING\"/><Column id=\"ADDR\" size=\"256\" type=\"STRING\"/><Column id=\"GROSS_AREA\" size=\"256\" type=\"STRING\"/><Column id=\"CRTR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CRT_DT\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_CHGR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_CHG_DT\" size=\"256\" type=\"STRING\"/><ColumnInfo><Column id=\"PTNR_PLANT_ID\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"NATION_RMK\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_CHGR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_CHG_DT\" size=\"256\" type=\"STRING\"/><Column id=\"GROSS_AREA\" size=\"256\" type=\"STRING\"/><Column id=\"CRTR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CRT_DT\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NATION\" size=\"256\" type=\"STRING\"/><Column id=\"AREA\" size=\"256\" type=\"STRING\"/><Column id=\"ADDR\" size=\"256\" type=\"STRING\"/><Column id=\"CHECKED\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPtnrMaker", this);
            obj._setContents("<ColumnInfo><Column id=\"PTNR_MAKER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"MAKER\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_TS\" size=\"256\" type=\"STRING\"/><Column id=\"LIMIT_DAY\" size=\"256\" type=\"STRING\"/><Column id=\"CRTR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CRT_DT\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_CHGR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_CHG_DT\" size=\"256\" type=\"STRING\"/><Column id=\"CHECKED\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM16", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dslvl1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dslvl2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPtnrBind", this);
            obj._setContents("<ColumnInfo><Column id=\"COLID\" size=\"256\" type=\"STRING\"/><Column id=\"COMPID\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserBind", this);
            obj._setContents("<ColumnInfo><Column id=\"COLID\" size=\"256\" type=\"STRING\"/><Column id=\"COMPID\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Tab("tabPtnr", "absolute", "15", "5", null, "1843", "23", null, this);
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
            obj.set_taborder("6");
            this.tabPtnr.ptnrDetail.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "0", "255", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompTitle00);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.getSetter("objNm").set("기본정보");
            obj.set_taborder("0");
            obj.set_text("기본정보");
            this.tabPtnr.ptnrDetail.divViewCompTitle00.addChild(obj.name, obj);
            obj = new Div("divViewCompTitle03", "absolute", "0", "614", null, "24", "0", null, this.tabPtnr.ptnrDetail);
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            obj.set_taborder("7");
            this.tabPtnr.ptnrDetail.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle03", "absolute", "0", "0", "255", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompTitle03);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.getSetter("objNm").set("");
            obj.set_taborder("0");
            obj.set_text("사용자정보");
            this.tabPtnr.ptnrDetail.divViewCompTitle03.addChild(obj.name, obj);
            obj = new Div("divViewCompBody03", "absolute", "0", "643", null, "187", "0", null, this.tabPtnr.ptnrDetail);
            obj.getSetter("objNm").set("DIV-평가서 상세");
            obj.set_taborder("3");
            this.tabPtnr.ptnrDetail.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "1", null, "33", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody03);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("158");
            this.tabPtnr.ptnrDetail.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staUserNm", "absolute", "0", "1", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody03);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("사용담당자명");
            obj.set_positionstep("1");
            obj.set_taborder("159");
            obj.set_text("담당자명");
            this.tabPtnr.ptnrDetail.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "33", null, "33", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody03);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("160");
            this.tabPtnr.ptnrDetail.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staUserEmail", "absolute", "0", "33", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody03);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("사용자EMAIL");
            obj.set_positionstep("1");
            obj.set_taborder("161");
            obj.set_text("E-MAIL");
            this.tabPtnr.ptnrDetail.divViewCompBody03.addChild(obj.name, obj);
            obj = new Edit("edtUserNm", "absolute", "176", "5", "150", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody03);
            obj.set_lengthunit("ascii");
            obj.set_maxlength("40");
            obj.getSetter("objNm").set("사용담당자명");
            obj.set_positionstep("1");
            obj.style.set_align("left middle");
            obj.set_taborder("0");
            this.tabPtnr.ptnrDetail.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "65", null, "33", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody03);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("11");
            this.tabPtnr.ptnrDetail.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staUserPstn", "absolute", "0", "65", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody03);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("사용자직급");
            obj.set_positionstep("1");
            obj.set_taborder("165");
            obj.set_text("직급");
            this.tabPtnr.ptnrDetail.divViewCompBody03.addChild(obj.name, obj);
            obj = new Edit("edtPstn", "absolute", "176", "69", "150", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody03);
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.getSetter("objNm").set("직급");
            obj.set_positionstep("1");
            obj.style.set_align("left middle");
            obj.set_taborder("4");
            this.tabPtnr.ptnrDetail.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staUserHp", "absolute", "629", "33", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody03);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("사용자휴대전화");
            obj.set_positionstep("1");
            obj.set_taborder("167");
            obj.set_text("휴대전화");
            this.tabPtnr.ptnrDetail.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staUserDeptNm", "absolute", "629", "65", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody03);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("사용자부서");
            obj.set_positionstep("1");
            obj.set_taborder("169");
            obj.set_text("부서");
            this.tabPtnr.ptnrDetail.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staUserTel", "absolute", "629", "1", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody03);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("사용자연락처");
            obj.set_positionstep("1");
            obj.set_taborder("170");
            obj.set_text("연락처");
            this.tabPtnr.ptnrDetail.divViewCompBody03.addChild(obj.name, obj);
            obj = new Edit("edtDeptNm", "absolute", "805", "69", "150", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody03);
            obj.set_lengthunit("ascii");
            obj.set_maxlength("20");
            obj.getSetter("objNm").set("부서");
            obj.set_positionstep("1");
            obj.style.set_align("left middle");
            obj.set_taborder("5");
            this.tabPtnr.ptnrDetail.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staViewCompLine03", "absolute", "0", "97", null, "33", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody03);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("173");
            this.tabPtnr.ptnrDetail.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staViewCompLine04", "absolute", "0", "129", null, "33", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody03);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("174");
            this.tabPtnr.ptnrDetail.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staUserId", "absolute", "0", "97", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody03);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("사용자아이디");
            obj.set_positionstep("1");
            obj.set_taborder("175");
            obj.set_text("아이디");
            this.tabPtnr.ptnrDetail.divViewCompBody03.addChild(obj.name, obj);
            obj = new Edit("edtUserId", "absolute", "176", "101", "150", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody03);
            obj.set_inputtype("number,english,sign,symbol");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("18");
            obj.getSetter("objNm").set("사용자아이디");
            obj.set_positionstep("1");
            obj.style.set_align("left middle");
            obj.set_taborder("6");
            this.tabPtnr.ptnrDetail.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staUserFAX", "absolute", "629", "97", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody03);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("사용자FAX");
            obj.set_positionstep("1");
            obj.set_taborder("177");
            obj.set_text("FAX");
            this.tabPtnr.ptnrDetail.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "143", "165", "828", "16", null, null, this.tabPtnr.ptnrDetail.divViewCompBody03);
            obj.set_taborder("179");
            obj.set_text("<fc v='red'>* </fc>비밀번호는 6 ~ 16 자리이며 영문/특수문자 포함되어야 하며 영문은 대소문자를 구분합니다.");
            obj.set_usedecorate("true");
            obj.set_wordwrap("char");
            this.tabPtnr.ptnrDetail.divViewCompBody03.addChild(obj.name, obj);
            obj = new Button("btn_chkId", "absolute", "331", "101", "140", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody03);
            obj.getSetter("objNm").set("아이디중복체크");
            obj.set_taborder("7");
            obj.set_text("아이디중복체크");
            obj.set_visible("false");
            this.tabPtnr.ptnrDetail.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staUserPwCh", "absolute", "629", "129", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody03);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("사용자패스워드 확인");
            obj.set_positionstep("1");
            obj.set_taborder("181");
            obj.set_text("패스워드 확인");
            this.tabPtnr.ptnrDetail.divViewCompBody03.addChild(obj.name, obj);
            obj = new Edit("edtPWCH", "absolute", "805", "133", "150", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody03);
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("패스워드 확인");
            obj.set_password("true");
            obj.set_positionstep("1");
            obj.style.set_align("left middle");
            obj.set_taborder("10");
            this.tabPtnr.ptnrDetail.divViewCompBody03.addChild(obj.name, obj);
            obj = new Edit("edtPstn01", "absolute", "176", "133", "150", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody03);
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.getSetter("objNm").set("패스워드");
            obj.set_password("true");
            obj.set_positionstep("1");
            obj.style.set_align("left middle");
            obj.set_taborder("9");
            this.tabPtnr.ptnrDetail.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staUserPw", "absolute", "0", "129", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody03);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("사용자PW");
            obj.set_positionstep("1");
            obj.set_taborder("184");
            obj.set_text("패스워드");
            this.tabPtnr.ptnrDetail.divViewCompBody03.addChild(obj.name, obj);
            obj = new Edit("edtUserEmail", "absolute", "176", "38", "150", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody03);
            obj.set_lengthunit("ascii");
            obj.set_maxlength("200");
            obj.getSetter("objNm").set("사용자EMAIL");
            obj.set_positionstep("1");
            obj.set_taborder("2");
            this.tabPtnr.ptnrDetail.divViewCompBody03.addChild(obj.name, obj);
            obj = new Edit("edtUserHp", "absolute", "805", "5", "150", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody03);
            obj.set_inputfilter("sign,symbol");
            obj.set_inputtype("number");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("30");
            obj.getSetter("objNm").set("사용자연락처");
            obj.set_positionstep("1");
            obj.set_taborder("1");
            this.tabPtnr.ptnrDetail.divViewCompBody03.addChild(obj.name, obj);
            obj = new Edit("edtHp01", "absolute", "805", "37", "150", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody03);
            obj.set_inputfilter("sign,symbol");
            obj.set_inputtype("number");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("30");
            obj.getSetter("objNm").set("사용자휴대전화");
            obj.set_positionstep("1");
            obj.set_taborder("3");
            this.tabPtnr.ptnrDetail.divViewCompBody03.addChild(obj.name, obj);
            obj = new Edit("edtUserFax", "absolute", "805", "101", "150", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody03);
            obj.set_inputfilter("sign,symbol");
            obj.set_inputtype("number");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("30");
            obj.getSetter("objNm").set("사용자FAX");
            obj.set_positionstep("1");
            obj.set_taborder("8");
            this.tabPtnr.ptnrDetail.divViewCompBody03.addChild(obj.name, obj);
            obj = new Div("divViewCompTitle02", "absolute", "0", "466", null, "24", "3", null, this.tabPtnr.ptnrDetail);
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            obj.set_taborder("8");
            this.tabPtnr.ptnrDetail.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle02", "absolute", "0", "0", "255", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompTitle02);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.getSetter("objNm").set("사업장주소");
            obj.set_taborder("0");
            obj.set_text("사업장주소");
            this.tabPtnr.ptnrDetail.divViewCompTitle02.addChild(obj.name, obj);
            obj = new Div("divViewCompBody01", "absolute", "0", "375", null, "71", "0", null, this.tabPtnr.ptnrDetail);
            obj.getSetter("objNm").set("DIV-평가서 상세");
            obj.set_taborder("1");
            this.tabPtnr.ptnrDetail.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "1", null, "33", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody01);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("200");
            this.tabPtnr.ptnrDetail.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "33", null, "33", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody01);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("2");
            this.tabPtnr.ptnrDetail.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staRprstvNm", "absolute", "0", "1", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody01);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("대표자명");
            obj.set_positionstep("1");
            obj.set_taborder("202");
            obj.set_text("대표자명");
            obj.set_wordwrap("char");
            this.tabPtnr.ptnrDetail.divViewCompBody01.addChild(obj.name, obj);
            obj = new Edit("edtRprstvNm", "absolute", "176", "5", "150", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody01);
            obj.set_lengthunit("ascii");
            obj.set_maxlength("40");
            obj.getSetter("objNm").set("대표자명");
            obj.set_positionstep("1");
            obj.set_taborder("0");
            this.tabPtnr.ptnrDetail.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staRprstvEmail", "absolute", "0", "33", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody01);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("EMAIL");
            obj.set_positionstep("1");
            obj.set_taborder("204");
            obj.set_text("E-MAIL");
            obj.set_wordwrap("char");
            this.tabPtnr.ptnrDetail.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staRprstvHp", "absolute", "629", "33", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody01);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("휴대전화");
            obj.set_positionstep("1");
            obj.set_taborder("206");
            obj.set_text("휴대전화");
            obj.set_wordwrap("char");
            this.tabPtnr.ptnrDetail.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staRprstTel", "absolute", "629", "1", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody01);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("연락처");
            obj.set_positionstep("1");
            obj.set_taborder("208");
            obj.set_text("연락처");
            obj.set_wordwrap("char");
            this.tabPtnr.ptnrDetail.divViewCompBody01.addChild(obj.name, obj);
            obj = new Edit("edtRprstTel", "absolute", "805", "5", "150", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody01);
            obj.set_inputfilter("sign,symbol");
            obj.set_inputtype("number");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("40");
            obj.getSetter("objNm").set("HP3");
            obj.set_positionstep("1");
            obj.set_taborder("1");
            this.tabPtnr.ptnrDetail.divViewCompBody01.addChild(obj.name, obj);
            obj = new Edit("edtRprstvHp", "absolute", "805", "37", "150", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody01);
            obj.set_inputfilter("sign,symbol");
            obj.set_inputtype("number");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("40");
            obj.getSetter("objNm").set("HP3");
            obj.set_positionstep("1");
            obj.set_taborder("4");
            this.tabPtnr.ptnrDetail.divViewCompBody01.addChild(obj.name, obj);
            obj = new Edit("edtRprstvEmail", "absolute", "176", "38", "150", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody01);
            obj.set_lengthunit("ascii");
            obj.set_maxlength("200");
            obj.getSetter("objNm").set("EMAIL");
            obj.set_positionstep("1");
            obj.set_taborder("3");
            this.tabPtnr.ptnrDetail.divViewCompBody01.addChild(obj.name, obj);
            obj = new Div("divViewCompTitle01", "absolute", "0", "346", null, "24", "0", null, this.tabPtnr.ptnrDetail);
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            obj.set_taborder("9");
            this.tabPtnr.ptnrDetail.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle01", "absolute", "0", "0", "255", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompTitle01);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.getSetter("objNm").set("대표자정보");
            obj.set_taborder("0");
            obj.set_text("대표자정보");
            this.tabPtnr.ptnrDetail.divViewCompTitle01.addChild(obj.name, obj);
            obj = new Div("divViewCompBody02", "absolute", "0", "495", null, "99", "0", null, this.tabPtnr.ptnrDetail);
            obj.getSetter("objNm").set("DIV-평가서 상세");
            obj.set_taborder("2");
            this.tabPtnr.ptnrDetail.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "0", null, "33", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody02);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("206");
            this.tabPtnr.ptnrDetail.divViewCompBody02.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "32", null, "33", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody02);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("207");
            this.tabPtnr.ptnrDetail.divViewCompBody02.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "64", null, "33", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody02);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("208");
            this.tabPtnr.ptnrDetail.divViewCompBody02.addChild(obj.name, obj);
            obj = new Static("staZipNo", "absolute", "0", "0", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody02);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("우편번호");
            obj.set_positionstep("1");
            obj.set_taborder("209");
            obj.set_text("우편번호");
            obj.set_wordwrap("char");
            this.tabPtnr.ptnrDetail.divViewCompBody02.addChild(obj.name, obj);
            obj = new Edit("edtZipNo", "absolute", "176", "4", "150", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody02);
            obj.set_inputfilter("sign,symbol");
            obj.set_inputtype("number");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("6");
            obj.getSetter("objNm").set("우편번호");
            obj.set_positionstep("1");
            obj.set_readonly("true");
            obj.set_taborder("0");
            this.tabPtnr.ptnrDetail.divViewCompBody02.addChild(obj.name, obj);
            obj = new Static("staAddr", "absolute", "0", "32", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody02);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("주소");
            obj.set_positionstep("1");
            obj.set_taborder("211");
            obj.set_text("주소");
            obj.set_wordwrap("char");
            this.tabPtnr.ptnrDetail.divViewCompBody02.addChild(obj.name, obj);
            obj = new Edit("edtAddr", "absolute", "176", "36", "381", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody02);
            obj.set_lengthunit("ascii");
            obj.set_maxlength("100");
            obj.getSetter("objNm").set("주소");
            obj.set_positionstep("1");
            obj.set_taborder("2");
            this.tabPtnr.ptnrDetail.divViewCompBody02.addChild(obj.name, obj);
            obj = new Static("staDtlAddr", "absolute", "0", "64", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody02);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("상세주소");
            obj.set_positionstep("1");
            obj.set_taborder("213");
            obj.set_text("상세주소");
            obj.set_wordwrap("char");
            this.tabPtnr.ptnrDetail.divViewCompBody02.addChild(obj.name, obj);
            obj = new Edit("edtDtlAddr", "absolute", "176", "68", "381", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody02);
            obj.set_lengthunit("ascii");
            obj.set_maxlength("100");
            obj.getSetter("objNm").set("상세주소");
            obj.set_positionstep("1");
            obj.set_taborder("3");
            this.tabPtnr.ptnrDetail.divViewCompBody02.addChild(obj.name, obj);
            obj = new Button("btnZipNo", "absolute", "331", "4", "24", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody02);
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("평가담당자 검색 버튼");
            obj.set_taborder("1");
            this.tabPtnr.ptnrDetail.divViewCompBody02.addChild(obj.name, obj);
            obj = new Div("divViewCompTitle04", "absolute", "0", "850", null, "24", "0", null, this.tabPtnr.ptnrDetail);
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            obj.set_taborder("10");
            this.tabPtnr.ptnrDetail.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle04", "absolute", "0", "0", "255", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompTitle04);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.getSetter("objNm").set("경영실태현황");
            obj.set_taborder("0");
            obj.set_text("경영실태현황");
            this.tabPtnr.ptnrDetail.divViewCompTitle04.addChild(obj.name, obj);
            obj = new Div("divViewCompBody04", "absolute", "0", "879", null, "291", "0", null, this.tabPtnr.ptnrDetail);
            obj.getSetter("objNm").set("DIV-평가서 상세");
            obj.set_taborder("4");
            this.tabPtnr.ptnrDetail.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "1", null, "33", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("212");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "33", null, "33", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("213");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "65", null, "33", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("214");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staViewCompLine04", "absolute", "0", "97", null, "33", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("215");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staViewCompLine05", "absolute", "0", "161", null, "66", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("216");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staViewCompLine06", "absolute", "0", "226", null, "33", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.getSetter("objNm").set("");
            obj.set_taborder("217");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staAst", "absolute", "0", "1", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("자산총계");
            obj.set_positionstep("1");
            obj.set_taborder("218");
            obj.set_text("자산총계");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new MaskEdit("medAst", "absolute", "176", "5", "121", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_displaynulltext("0");
            obj.set_enable("true");
            obj.set_mask("9,999");
            obj.getSetter("objNm").set("자산총계");
            obj.set_readonly("true");
            obj.set_taborder("0");
            obj.set_visible("true");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staWon01", "absolute", "302", "8", "50", "20", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.style.set_align("left middle");
            obj.set_taborder("220");
            obj.set_text("원");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staCapl", "absolute", "0", "33", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("자본금총계");
            obj.set_positionstep("1");
            obj.set_taborder("221");
            obj.set_text("자본금총계");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new MaskEdit("medCapl", "absolute", "176", "37", "121", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_autoselect("true");
            obj.set_displaynulltext("0");
            obj.set_limitbymask("integer");
            obj.set_mask("99,999,999,999,999");
            obj.set_maskchar(" ");
            obj.getSetter("objNm").set("자본금총계");
            obj.set_taborder("1");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staWon02", "absolute", "302", "40", "50", "20", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.style.set_align("left middle");
            obj.set_taborder("223");
            obj.set_text("원");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staDebt", "absolute", "0", "65", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("부채총계");
            obj.set_positionstep("1");
            obj.set_taborder("224");
            obj.set_text("부채총계");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new MaskEdit("medDebt", "absolute", "176", "69", "121", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_autoselect("true");
            obj.set_displaynulltext("0");
            obj.set_limitbymask("integer");
            obj.set_mask("99,999,999,999,999");
            obj.set_maskchar(" ");
            obj.getSetter("objNm").set("부채총계");
            obj.set_taborder("2");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staWon03", "absolute", "302", "72", "50", "20", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.style.set_align("left middle");
            obj.set_taborder("226");
            obj.set_text("원");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staEmpCnt", "absolute", "0", "97", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("총인원");
            obj.set_positionstep("1");
            obj.set_taborder("227");
            obj.set_text("총인원");
            obj.set_wordwrap("char");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new MaskEdit("medEmpCnt", "absolute", "176", "101", "121", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_displaynulltext("0");
            obj.set_mask("9,999");
            obj.getSetter("objNm").set("총인원");
            obj.set_readonly("true");
            obj.set_taborder("3");
            obj.set_visible("true");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staPer01", "absolute", "302", "104", "50", "20", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.style.set_align("left middle");
            obj.set_taborder("229");
            obj.set_text("명");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staMjrCstmr", "absolute", "0", "161", "171", "66", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("주요거래처");
            obj.set_positionstep("1");
            obj.set_taborder("239");
            obj.set_text("주요거래처");
            obj.set_wordwrap("char");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staSales", "absolute", "0", "226", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("3개년 매출액");
            obj.style.set_align("left middle");
            obj.set_taborder("240");
            obj.set_text("3개년 매출액");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new MaskEdit("maeSalesAmt1", "absolute", "250", "230", "140", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_autoselect("true");
            obj.set_displaynulltext("0");
            obj.set_limitbymask("integer");
            obj.set_mask("999,999,999,999,999");
            obj.getSetter("objNm").set("3개년 매출액_1");
            obj.set_taborder("8");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staWon04", "absolute", "395", "233", "50", "20", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.getSetter("objNm").set("");
            obj.set_taborder("243");
            obj.set_text("원");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new MaskEdit("maeSalesAmt2", "absolute", "524", "230", "150", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_autoselect("true");
            obj.set_cssclass("mae_default_r");
            obj.set_displaynulltext("0");
            obj.set_limitbymask("integer");
            obj.set_mask("999,999,999,999,999");
            obj.getSetter("objNm").set("3개년 매출액_2");
            obj.set_taborder("9");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staWon05", "absolute", "679", "230", "50", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.getSetter("objNm").set("");
            obj.set_taborder("246");
            obj.set_text("원");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new MaskEdit("maeSalesAmt3", "absolute", "807", "230", "150", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_autoselect("true");
            obj.set_cssclass("mae_default_r");
            obj.set_displaynulltext("0");
            obj.set_limitbymask("integer");
            obj.set_mask("999,999,999,999,999");
            obj.getSetter("objNm").set("3개년 매출액_3");
            obj.style.set_font("9 Dotum");
            obj.set_taborder("10");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staWon06", "absolute", "962", "230", "50", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.getSetter("objNm").set("");
            obj.set_taborder("249");
            obj.set_text("원");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new TextArea("txtMjrCstmr", "absolute", "176", "165", "998", "59", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_lengthunit("ascii");
            obj.set_maxlength("1000");
            obj.getSetter("objNm").set("주요거래처");
            obj.set_scrollbars("autovert");
            obj.set_taborder("7");
            obj.set_wordwrap("char");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staViewCompLine03", "absolute", "0", "258", null, "33", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.getSetter("objNm").set("");
            obj.set_taborder("251");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("stabizProfit", "absolute", "0", "258", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("3개년 영업이익");
            obj.style.set_align("left middle");
            obj.set_taborder("252");
            obj.set_text("3개년 영업이익");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new MaskEdit("maebizProfit", "absolute", "250", "262", "140", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_autoselect("true");
            obj.set_displaynulltext("0");
            obj.set_limitbymask("integer");
            obj.set_mask("999,999,999,999,999");
            obj.getSetter("objNm").set("3개년 영업이익_1");
            obj.set_taborder("11");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staWon07", "absolute", "395", "265", "50", "20", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.getSetter("objNm").set("");
            obj.set_taborder("254");
            obj.set_text("원");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new MaskEdit("maebizProfit2", "absolute", "524", "262", "150", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_autoselect("true");
            obj.set_displaynulltext("0");
            obj.set_limitbymask("integer");
            obj.set_mask("999,999,999,999,999");
            obj.getSetter("objNm").set("3개년 영업이익_2");
            obj.set_taborder("12");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staWon08", "absolute", "679", "262", "50", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.getSetter("objNm").set("");
            obj.set_taborder("256");
            obj.set_text("원");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new MaskEdit("maebizProfit3", "absolute", "807", "262", "150", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_autoselect("true");
            obj.set_cssclass("mae_default_r");
            obj.set_displaynulltext("0");
            obj.set_limitbymask("integer");
            obj.set_mask("999,999,999,999,999");
            obj.getSetter("objNm").set("3개년 영업이익_3");
            obj.set_taborder("13");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staWon09", "absolute", "962", "262", "50", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.getSetter("objNm").set("");
            obj.set_taborder("258");
            obj.set_text("원");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("stabizProfitYr1", "absolute", "176", "265", "30", "20", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.style.set_align("right middle");
            obj.set_taborder("259");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("stabizProfitYr2", "absolute", "450", "265", "30", "20", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.style.set_align("right middle");
            obj.set_taborder("260");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("stabizProfitYr3", "absolute", "734", "265", "30", "20", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.style.set_align("right middle");
            obj.set_taborder("261");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staSalesYr2", "absolute", "450", "233", "30", "20", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.style.set_align("right middle");
            obj.set_taborder("263");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staSalesYr3", "absolute", "734", "233", "30", "20", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.style.set_align("right middle");
            obj.set_taborder("264");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "211", "233", "34", "20", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_taborder("265");
            obj.set_text("년");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staSalesYr1", "absolute", "176", "233", "30", "20", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.style.set_align("right middle");
            obj.set_taborder("266");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "211", "265", "34", "20", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_taborder("267");
            obj.set_text("년");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "485", "233", "34", "20", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_taborder("268");
            obj.set_text("년");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "485", "265", "34", "20", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_taborder("269");
            obj.set_text("년");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "769", "233", "33", "20", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_taborder("270");
            obj.set_text("년");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "769", "265", "34", "20", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_taborder("271");
            obj.set_text("년");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staViewCompLine07", "absolute", "0", "129", null, "33", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("272");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staEmpCntKi", "absolute", "0", "129", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("기능직");
            obj.set_positionstep("1");
            obj.set_taborder("273");
            obj.set_text("기능직");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new MaskEdit("medEmpCntKi", "absolute", "176", "133", "121", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_autoselect("true");
            obj.set_displaynulltext("0");
            obj.set_limitbymask("integer");
            obj.set_mask("9,999,999");
            obj.set_maskchar(" ");
            obj.getSetter("objNm").set("기능직");
            obj.set_taborder("4");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staPer02", "absolute", "302", "136", "50", "20", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.getSetter("objNm").set("");
            obj.style.set_align("left middle");
            obj.set_taborder("275");
            obj.set_text("명");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staEmpCntSa", "absolute", "357", "129", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("사무직");
            obj.set_positionstep("1");
            obj.set_taborder("276");
            obj.set_text("사무직");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new MaskEdit("medEmpCntSa", "absolute", "533", "133", "141", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_autoselect("true");
            obj.set_displaynulltext("0");
            obj.set_limitbymask("integer");
            obj.set_mask("9,999,999");
            obj.set_maskchar(" ");
            obj.getSetter("objNm").set("사무직");
            obj.set_taborder("5");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staPer03", "absolute", "679", "136", "50", "20", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.getSetter("objNm").set("");
            obj.style.set_align("left middle");
            obj.set_taborder("278");
            obj.set_text("명");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staEmpCntEtc", "absolute", "734", "129", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("기타직군");
            obj.set_positionstep("1");
            obj.set_taborder("279");
            obj.set_text("기타직군");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new MaskEdit("medEmpCntEtc", "absolute", "910", "133", "140", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.set_autoselect("true");
            obj.set_displaynulltext("0");
            obj.set_limitbymask("integer");
            obj.set_mask("9,999,999");
            obj.set_maskchar(" ");
            obj.getSetter("objNm").set("기타직군");
            obj.set_taborder("6");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staPer04", "absolute", "1055", "136", "50", "20", null, null, this.tabPtnr.ptnrDetail.divViewCompBody04);
            obj.getSetter("objNm").set("");
            obj.style.set_align("left middle");
            obj.set_taborder("281");
            obj.set_text("명");
            this.tabPtnr.ptnrDetail.divViewCompBody04.addChild(obj.name, obj);
            obj = new Div("divViewCompTitle06", "absolute", "0", "1204", null, "24", "0", null, this.tabPtnr.ptnrDetail);
            obj.getSetter("objNm").set("DIV-공장유무 타이틀");
            obj.set_taborder("11");
            this.tabPtnr.ptnrDetail.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle06", "absolute", "0", "0", "255", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompTitle06);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.getSetter("objNm").set("공장유무");
            obj.set_taborder("0");
            obj.set_text("공장유무");
            this.tabPtnr.ptnrDetail.divViewCompTitle06.addChild(obj.name, obj);
            obj = new Button("btnEvalView", "absolute", null, "0", "70", "24", "74", null, this.tabPtnr.ptnrDetail.divViewCompTitle06);
            obj.getSetter("objNm").set("평가보기 버튼");
            obj.set_taborder("1");
            obj.set_text("추가");
            this.tabPtnr.ptnrDetail.divViewCompTitle06.addChild(obj.name, obj);
            obj = new Button("btnEvalStr", "absolute", null, "0", "70", "24", "0", null, this.tabPtnr.ptnrDetail.divViewCompTitle06);
            obj.getSetter("objNm").set("평가하기 버튼");
            obj.set_taborder("2");
            obj.set_text("삭제");
            this.tabPtnr.ptnrDetail.divViewCompTitle06.addChild(obj.name, obj);
            obj = new Div("divViewCompBody06", "absolute", "0", "1233", null, "203", "0", null, this.tabPtnr.ptnrDetail);
            obj.getSetter("objNm").set("DIV-평가서 상세");
            obj.set_taborder("12");
            this.tabPtnr.ptnrDetail.addChild(obj.name, obj);
            obj = new Grid("grdPlant", "absolute", "0", "0", null, null, "0", "0", this.tabPtnr.ptnrDetail.divViewCompBody06);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsPtnrPlant");
            obj.getSetter("objNm").set("Plant");
            obj.set_taborder("183");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"180\"/><Column size=\"476\"/><Column size=\"300\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" colspan=\"2\" cssclass=\"Cellgrd_essential\" expr=\"\" text=\"국가\" tooltiptext=\"\"/><Cell col=\"3\" cssclass=\"Cellgrd_essential\" expr=\"\" text=\"지역\" tooltiptext=\"\"/><Cell col=\"4\" cssclass=\"Cellgrd_essential\" expr=\"\" text=\"주소\" tooltiptext=\"\"/><Cell col=\"5\" cssclass=\"Cellgrd_essential\" expr=\"\" text=\"비고\" tooltiptext=\"\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\"/><Cell col=\"1\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" combodataset=\"dsCdCM16\" combodisplay=\"display\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left middle;\" text=\"bind:CD_NATION\" tooltiptext=\"bind:CD_NATION\"/><Cell col=\"2\" displaytype=\"expr:CD_NATION=='CM16ETC' ? 'text' : 'none'\" editdisplay=\"expr:CD_NATION=='CM16ETC' ? 'display' : 'edit'\" editlengthunit=\"ascii\" editlimit=\"100\" edittype=\"expr:CD_NATION=='CM16ETC' ? 'text' : 'none'\" text=\"bind:NATION_RMK\"/><Cell col=\"3\" displaytype=\"text\" editdisplay=\"display\" editlengthunit=\"ascii\" editlimit=\"100\" edittype=\"text\" style=\"align:left middle;\" text=\"bind:AREA\" tooltiptext=\"bind:AREA\"/><Cell col=\"4\" displaytype=\"text\" editdisplay=\"display\" editlengthunit=\"ascii\" editlimit=\"500\" edittype=\"text\" style=\"align:left middle;\" text=\"bind:ADDR\" tooltiptext=\"bind:ADDR\"/><Cell col=\"5\" displaytype=\"text\" editdisplay=\"display\" editlengthunit=\"ascii\" editlimit=\"1000\" edittype=\"text\" style=\"align:left middle;\" text=\"bind:GROSS_AREA\" tooltiptext=\"bind:GROSS_AREA\"/></Band></Format></Formats>");
            this.tabPtnr.ptnrDetail.divViewCompBody06.addChild(obj.name, obj);
            obj = new Div("divViewCompBody00", "absolute", "0", "34", null, "292", "0", null, this.tabPtnr.ptnrDetail);
            obj.getSetter("objNm").set("DIV-평가서 상세");
            obj.set_taborder("0");
            this.tabPtnr.ptnrDetail.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "1", null, "33", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("13");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "33", null, "33", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("14");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "65", null, "33", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("15");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine03", "absolute", "0", "97", null, "33", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("16");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine04", "absolute", "0", "129", null, "33", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("17");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine05", "absolute", "0", "225", null, "65", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("18");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staCorpRegNo", "absolute", "629", "33", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("법인등록번호");
            obj.set_positionstep("1");
            obj.set_taborder("20");
            obj.set_text("법인등록번호");
            obj.set_wordwrap("char");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staBizCndtn", "absolute", "0", "97", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("업태");
            obj.set_positionstep("1");
            obj.set_taborder("21");
            obj.set_text("업태");
            obj.set_wordwrap("char");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staBizType", "absolute", "629", "97", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("종목");
            obj.set_positionstep("1");
            obj.set_taborder("22");
            obj.set_text("종목");
            obj.set_wordwrap("char");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staTel", "absolute", "0", "129", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("대표전화");
            obj.set_positionstep("1");
            obj.set_taborder("23");
            obj.set_text("대표전화");
            obj.set_wordwrap("char");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staFax", "absolute", "629", "129", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("FAX");
            obj.set_positionstep("1");
            obj.set_taborder("24");
            obj.set_text("FAX");
            obj.set_wordwrap("char");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staBizBgnDay", "absolute", "0", "65", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("설립연도");
            obj.set_positionstep("1");
            obj.set_taborder("25");
            obj.set_text("설립연도");
            obj.set_wordwrap("char");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Calendar("cldBizBgnDay", "absolute", "176", "69", "150", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj.set_autoselect("true");
            obj.set_dateformat("yyyy");
            obj.set_editformat("yyyy");
            obj.set_locale("en_US");
            obj.getSetter("objNm").set("설립연도");
            obj.set_taborder("4");
            obj.set_type("spin");
            obj.set_value("null");
            obj = new Edit("edtBizCndtn", "absolute", "176", "101", "150", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.getSetter("objNm").set("업태");
            obj.set_positionstep("1");
            obj.set_taborder("5");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtBizType", "absolute", "805", "101", "150", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.getSetter("objNm").set("종목");
            obj.set_positionstep("1");
            obj.set_taborder("6");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staBizNo", "absolute", "0", "33", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("사업자등록번호");
            obj.set_positionstep("1");
            obj.set_taborder("26");
            obj.set_text("사업자등록번호");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staPtnrNm", "absolute", "0", "1", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("업체명(한글)");
            obj.set_positionstep("1");
            obj.set_taborder("27");
            obj.set_text("업체명");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtPtnrNm", "absolute", "176", "5", "381", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.getSetter("objNm").set("업체명(한글)");
            obj.set_positionstep("1");
            obj.set_readonly("false");
            obj.set_taborder("0");
            obj.set_visible("true");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staRmark", "absolute", "0", "225", "171", "65", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("특기사항/연혁");
            obj.set_positionstep("1");
            obj.set_taborder("28");
            obj.set_text("특기사항/연혁");
            obj.set_wordwrap("char");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new MaskEdit("medBizNo", "absolute", "176", "37", "150", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_mask("999-99-99999");
            obj.getSetter("objNm").set("사업자등록번호");
            obj.set_readonly("true");
            obj.set_taborder("2");
            obj.set_type("string");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new MaskEdit("medtCorpRegNo", "absolute", "805", "37", "150", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_mask("999999-9999999");
            obj.getSetter("objNm").set("법인등록번호");
            obj.set_taborder("3");
            obj.set_type("string");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine06", "absolute", "0", "161", null, "33", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("29");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staNation", "absolute", "0", "161", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("국가");
            obj.set_positionstep("1");
            obj.set_taborder("30");
            obj.set_text("국가");
            obj.set_wordwrap("char");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staArea", "absolute", "629", "161", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("지역");
            obj.set_positionstep("1");
            obj.set_taborder("31");
            obj.set_text("지역");
            obj.set_wordwrap("char");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtArea", "absolute", "805", "165", "150", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_lengthunit("ascii");
            obj.set_maxlength("100");
            obj.getSetter("objNm").set("지역");
            obj.set_positionstep("1");
            obj.set_taborder("10");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine07", "absolute", "0", "193", null, "33", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("32");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staHPage", "absolute", "0", "193", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("HomePage");
            obj.set_positionstep("1");
            obj.set_taborder("33");
            obj.set_text("Hmepage");
            obj.set_wordwrap("char");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtHPage", "absolute", "176", "197", "381", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_lengthunit("ascii");
            obj.set_maxlength("200");
            obj.getSetter("objNm").set("HomePage");
            obj.set_positionstep("1");
            obj.set_taborder("11");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtFax", "absolute", "805", "133", "150", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_inputfilter("sign,symbol");
            obj.set_inputtype("number");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("40");
            obj.getSetter("objNm").set("FAX");
            obj.set_positionstep("1");
            obj.set_taborder("8");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtTel", "absolute", "176", "133", "150", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_inputfilter("sign,symbol");
            obj.set_inputtype("number");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("40");
            obj.getSetter("objNm").set("전화");
            obj.set_positionstep("1");
            obj.set_taborder("7");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Combo("cboHp02", "absolute", "698", "-611", "108", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_innerdataset("dsCdCM81");
            obj.getSetter("objNm").set("HP1");
            obj.set_taborder("34");
            obj = new Combo("cboNation", "absolute", "176", "165", "150", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_innerdataset("dsCdCM16");
            obj.getSetter("objNm").set("HP1");
            obj.set_taborder("9");
            obj = new TextArea("taRmark", "absolute", "176", "229", "998", "57", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_lengthunit("ascii");
            obj.set_maxlength("1000");
            obj.getSetter("objNm").set("특기사항/연혁");
            obj.set_taborder("12");
            obj.set_wordwrap("char");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtEctNation", "absolute", "331", "165", "226", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.set_lengthunit("ascii");
            obj.set_maxlength("100");
            obj.getSetter("objNm").set("기타국가");
            obj.set_positionstep("1");
            obj.set_taborder("35");
            obj.set_visible("false");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "564", "197", "386", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody00);
            obj.style.set_align("left bottom");
            obj.set_taborder("36");
            obj.set_text("<fc v='red'>* </fc>ex) www.humaxdigital.com");
            obj.set_usedecorate("true");
            obj.set_wordwrap("char");
            this.tabPtnr.ptnrDetail.divViewCompBody00.addChild(obj.name, obj);
            obj = new Div("divViewCompTitle07", "absolute", "0", "1571", null, "24", "0", null, this.tabPtnr.ptnrDetail);
            obj.getSetter("objNm").set("DIV-신용평가서 타이틀");
            obj.set_taborder("13");
            this.tabPtnr.ptnrDetail.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle087", "absolute", "0", "0", "255", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompTitle07);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.getSetter("objNm").set("MAKER");
            obj.set_taborder("0");
            obj.set_text("Maker");
            this.tabPtnr.ptnrDetail.divViewCompTitle07.addChild(obj.name, obj);
            obj = new Button("btnEvalView", "absolute", null, "0", "70", "24", "79", null, this.tabPtnr.ptnrDetail.divViewCompTitle07);
            obj.getSetter("objNm").set("평가보기 버튼");
            obj.set_taborder("1");
            obj.set_text("추가");
            this.tabPtnr.ptnrDetail.divViewCompTitle07.addChild(obj.name, obj);
            obj = new Button("btnEvalStr", "absolute", null, "0", "75", "24", "0", null, this.tabPtnr.ptnrDetail.divViewCompTitle07);
            obj.getSetter("objNm").set("평가하기 버튼");
            obj.set_taborder("2");
            obj.set_text("삭제");
            this.tabPtnr.ptnrDetail.divViewCompTitle07.addChild(obj.name, obj);
            obj = new Div("divViewCompBody07", "absolute", "0", "1600", null, null, "-5", "10", this.tabPtnr.ptnrDetail);
            obj.getSetter("objNm").set("DIV-주요실적");
            obj.set_taborder("14");
            this.tabPtnr.ptnrDetail.addChild(obj.name, obj);
            obj = new Grid("grdMaker", "absolute", "0", "0", null, null, "0", "0", this.tabPtnr.ptnrDetail.divViewCompBody07);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsPtnrMaker");
            obj.set_locale("en_US");
            obj.getSetter("objNm").set("Maker");
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"582\"/><Column size=\"290\"/><Column size=\"290\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" cssclass=\"Cellgrd_essential\" expr=\"\" text=\"Maker(Manufacturer)\" tooltiptext=\"\"/><Cell col=\"2\" expr=\"\" text=\"TS16949\" tooltiptext=\"\"/><Cell col=\"3\" expr=\"\" text=\"만료일자\" tooltiptext=\"\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\"/><Cell col=\"1\" displaytype=\"text\" editdisplay=\"display\" editlengthunit=\"ascii\" editlimit=\"500\" edittype=\"text\" style=\"align:left middle;\" text=\"bind:MAKER\" tooltiptext=\"bind:MAKER\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ALT_TS\"/><Cell calendardisplay=\"display\" calendardisplaynulltype=\"none\" col=\"3\" displaytype=\"date\" editlengthunit=\"ascii\" editlimit=\"8\" edittype=\"date\" mask=\"yyyy-MM-dd\" text=\"bind:LIMIT_DAY\" tooltiptext=\"bind:LIMIT_DAY\"/></Band></Format></Formats>");
            this.tabPtnr.ptnrDetail.divViewCompBody07.addChild(obj.name, obj);
            obj = new Div("divViewCompBody05", "absolute", "0", "1485", null, "66", "0", null, this.tabPtnr.ptnrDetail);
            obj.getSetter("objNm").set("DIV-평가서 상세");
            obj.set_taborder("15");
            this.tabPtnr.ptnrDetail.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "0", null, "33", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody05);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("193");
            this.tabPtnr.ptnrDetail.divViewCompBody05.addChild(obj.name, obj);
            obj = new Static("staCrdtGrd", "absolute", "0", "0", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody05);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.style.set_align("left middle");
            obj.set_taborder("194");
            obj.set_text("등급");
            obj.set_usedecorate("true");
            this.tabPtnr.ptnrDetail.divViewCompBody05.addChild(obj.name, obj);
            obj = new Edit("edtCrdtGrd", "absolute", "176", "5", "166", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody05);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("20");
            obj.getSetter("objNm").set("등급");
            obj.style.set_align("left middle");
            obj.set_taborder("195");
            this.tabPtnr.ptnrDetail.divViewCompBody05.addChild(obj.name, obj);
            obj = new Static("staCacheGrade", "absolute", "629", "0", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody05);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.style.set_align("left middle");
            obj.set_taborder("196");
            obj.set_text("현금흐름등급");
            obj.set_usedecorate("true");
            this.tabPtnr.ptnrDetail.divViewCompBody05.addChild(obj.name, obj);
            obj = new Edit("edtCacheGrade", "absolute", "805", "5", "166", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody05);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("20");
            obj.getSetter("objNm").set("현금흐름등급");
            obj.style.set_align("left middle");
            obj.set_taborder("197");
            this.tabPtnr.ptnrDetail.divViewCompBody05.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "32", null, "33", "0", null, this.tabPtnr.ptnrDetail.divViewCompBody05);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("198");
            this.tabPtnr.ptnrDetail.divViewCompBody05.addChild(obj.name, obj);
            obj = new Static("staCrdtEvalOrg", "absolute", "0", "32", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody05);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.style.set_align("left middle");
            obj.set_taborder("199");
            obj.set_text("발행기관");
            obj.set_usedecorate("true");
            this.tabPtnr.ptnrDetail.divViewCompBody05.addChild(obj.name, obj);
            obj = new Edit("edtCrdtEvalOrg", "absolute", "176", "36", "166", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody05);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("200");
            obj.getSetter("objNm").set("발행기관");
            obj.set_taborder("200");
            this.tabPtnr.ptnrDetail.divViewCompBody05.addChild(obj.name, obj);
            obj = new Static("staCrdtEvalDay", "absolute", "629", "32", "171", "33", null, null, this.tabPtnr.ptnrDetail.divViewCompBody05);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.style.set_align("left middle");
            obj.set_taborder("201");
            obj.set_text("발행일");
            obj.set_usedecorate("true");
            this.tabPtnr.ptnrDetail.divViewCompBody05.addChild(obj.name, obj);
            obj = new Calendar("cldCrdtEvalDay", "absolute", "805", "37", "166", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompBody05);
            this.tabPtnr.ptnrDetail.divViewCompBody05.addChild(obj.name, obj);
            obj.set_locale("en_US");
            obj.getSetter("objNm").set("발행일");
            obj.set_taborder("202");
            obj = new Div("divViewCompTitle05", "absolute", "0", "1456", null, "24", "0", null, this.tabPtnr.ptnrDetail);
            obj.getSetter("objNm").set("DIV-신용평가서 타이틀");
            obj.set_taborder("16");
            this.tabPtnr.ptnrDetail.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle05", "absolute", "0", "0", "255", "24", null, null, this.tabPtnr.ptnrDetail.divViewCompTitle05);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("0");
            obj.set_text("신용평가서");
            this.tabPtnr.ptnrDetail.divViewCompTitle05.addChild(obj.name, obj);
            obj = new Tabpage("srcGrp", this.tabPtnr);
            obj.set_text("소싱그룹");
            this.tabPtnr.addChild(obj.name, obj);
            obj = new Div("divViewCompTitle01", "absolute", "0", "87", null, "24", "0", null, this.tabPtnr.srcGrp);
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            obj.set_taborder("1");
            this.tabPtnr.srcGrp.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "0", "255", "24", null, null, this.tabPtnr.srcGrp.divViewCompTitle01);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("0");
            obj.set_text("소싱그룹 추가");
            this.tabPtnr.srcGrp.divViewCompTitle01.addChild(obj.name, obj);
            obj = new Div("divViewCompBody01", "absolute", "0", "116", null, "294", "0", null, this.tabPtnr.srcGrp);
            obj.getSetter("objNm").set("DIV-평가서 상세");
            obj.set_taborder("4");
            this.tabPtnr.srcGrp.addChild(obj.name, obj);
            obj = new Grid("grdLrgGrp", "absolute", "11", "0", "200", "291", null, null, this.tabPtnr.srcGrp.divViewCompBody01);
            obj.set_autofittype("col");
            obj.set_binddataset("dsLrgGrp");
            obj.getSetter("objNm").set("대분류grid");
            obj.set_taborder("5");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"151\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"대분류\" tooltiptext=\"\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:SRC_GRP_NM\" tooltiptext=\"bind:SRC_GRP_NM\"/></Band></Format></Formats>");
            this.tabPtnr.srcGrp.divViewCompBody01.addChild(obj.name, obj);
            obj = new Grid("grdMdlGrp", "absolute", "220", "0", "224", "291", null, null, this.tabPtnr.srcGrp.divViewCompBody01);
            obj.set_autofittype("col");
            obj.set_binddataset("dsMdlGrp");
            obj.getSetter("objNm").set("중분류grid");
            obj.set_taborder("6");
            obj._setContents("<Formats><Format id=\"MMODE\"><Columns><Column size=\"127\"/><Column size=\"54\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"중분류\" tooltiptext=\"\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:SRC_GRP_NM\" tooltiptext=\"bind:SRC_GRP_NM\"/><Cell col=\"1\" displaytype=\"button\" edittype=\"button\" expr=\"expr:(BTN == 'ADD') ? gfnMultiLabel(&quot;EPRO_LABEL_00144&quot;) : gfnMultiLabel(&quot;EPRO_LABEL_00172&quot;)\" text=\"bind:BTN\" tooltiptext=\"expr:(BTN == 'ADD') ? gfnMultiLabel(&quot;EPRO_LABEL_00144&quot;) : gfnMultiLabel(&quot;EPRO_LABEL_00172&quot;)\"/></Band></Format><Format id=\"VMODE\"><Columns><Column size=\"127\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"중분류\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:SRC_GRP_NM\"/></Band></Format></Formats>");
            this.tabPtnr.srcGrp.divViewCompBody01.addChild(obj.name, obj);
            obj = new Grid("grdSelectGrp", "absolute", "513", "0", "662", "291", null, null, this.tabPtnr.srcGrp.divViewCompBody01);
            obj.set_autofittype("col");
            obj.set_binddataset("dsSelectGrp");
            obj.getSetter("objNm").set("품목분류grid");
            obj.set_taborder("7");
            obj._setContents("<Formats><Format id=\"MMODE\"><Columns><Column size=\"484\"/><Column size=\"89\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"소싱그룹\" tooltiptext=\"\"/><Cell col=\"1\" displaytype=\"button\" edittype=\"button\" expr=\"\" style=\"padding:3 10 2 10;\" text=\"BTN\" tooltiptext=\"\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:SRC_GRP_NM2\" tooltiptext=\"bind:SRC_GRP_NM\"/><Cell col=\"1\" displaytype=\"button\" edittype=\"button\" expr=\"expr: gfnMultiLabel(&quot;EPRO_LABEL_00172&quot;)\" text=\"BTN\" tooltiptext=\"expr: gfnMultiLabel(&quot;EPRO_LABEL_00172&quot;)\"/></Band></Format><Format id=\"VMODE\"><Columns><Column size=\"400\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"소싱그룹\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:SRC_GRP_NM2\"/></Band></Format></Formats>");
            this.tabPtnr.srcGrp.divViewCompBody01.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer00", "absolute", "462", "132", "27", "28", null, null, this.tabPtnr.srcGrp.divViewCompBody01);
            obj.style.set_background("transparent URL('img::img_shift_04.png/')");
            obj.style.set_border("0 solid #bdbdbdff");
            obj.set_taborder("8");
            this.tabPtnr.srcGrp.divViewCompBody01.addChild(obj.name, obj);
            obj = new Div("divViewCompTitle00", "absolute", "0", "5", null, "24", "0", null, this.tabPtnr.srcGrp);
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            obj.set_taborder("6");
            this.tabPtnr.srcGrp.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "0", "255", "24", null, null, this.tabPtnr.srcGrp.divViewCompTitle00);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("0");
            obj.set_text("대표납품품목");
            this.tabPtnr.srcGrp.divViewCompTitle00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "34", null, "33", "0", null, this.tabPtnr.srcGrp);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("7");
            this.tabPtnr.srcGrp.addChild(obj.name, obj);
            obj = new Combo("cboSrclvl2", "absolute", "234", "38", "166", "24", null, null, this.tabPtnr.srcGrp);
            this.tabPtnr.srcGrp.addChild(obj.name, obj);
            obj.set_codecolumn("SRC_GRP_ID");
            obj.set_datacolumn("SRC_GRP_NM");
            obj.set_innerdataset("dslvl2");
            obj.getSetter("objNm").set("소싱그룹Lvl2");
            obj.set_taborder("8");
            obj = new Combo("cboSrclvl1", "absolute", "128", "38", "101", "24", null, null, this.tabPtnr.srcGrp);
            this.tabPtnr.srcGrp.addChild(obj.name, obj);
            obj.set_codecolumn("SRC_GRP_ID");
            obj.set_datacolumn("SRC_GRP_NM");
            obj.set_innerdataset("@dslvl1");
            obj.getSetter("objNm").set("소싱그룹Lvl1");
            obj.set_taborder("9");
            obj = new Static("staSrcGrp", "absolute", "0", "34", "120", "33", null, null, this.tabPtnr.srcGrp);
            obj.set_cssclass("sta_WF_Label_P");
            obj.style.set_background("#f6f7f9ff URL('theme://images/sta_WF_Label_P1.png') left middle");
            obj.style.set_padding("1 0 0 17");
            obj.style.set_align("left middle");
            obj.set_taborder("10");
            obj.set_text("대표납품품목");
            this.tabPtnr.srcGrp.addChild(obj.name, obj);
            obj = new Tabpage("relateDocument", this.tabPtnr);
            obj.set_text("관련문서");
            this.tabPtnr.addChild(obj.name, obj);
            obj = new Div("divViewCompTitle05", "absolute", "0", "1", null, "24", "0", null, this.tabPtnr.relateDocument);
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            obj.set_taborder("0");
            this.tabPtnr.relateDocument.addChild(obj.name, obj);
            obj = new Div("divViewCompBody05", "absolute", "0", "5", null, null, "0", "10", this.tabPtnr.relateDocument);
            obj.getSetter("objNm").set("DIV-평가서 상세");
            obj.set_taborder("2");
            this.tabPtnr.relateDocument.addChild(obj.name, obj);
            obj = new Grid("grdPtnrItem", "absolute", "0", "0", "1175", "319", null, null, this.tabPtnr.relateDocument.divViewCompBody05);
            obj.set_autofittype("col");
            obj.set_binddataset("dsPtnrFile");
            obj.set_cellclickbound("cell");
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"41\"/><Column size=\"840\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"100\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"NO\" tooltiptext=\"\"/><Cell col=\"1\" expr=\"\" text=\"첨부파일명\" tooltiptext=\"\"/><Cell col=\"2\" expr=\"\" text=\"필수여부\" tooltiptext=\"\"/><Cell col=\"3\" expr=\"\" text=\" \" tooltiptext=\"\"/><Cell col=\"4\" expr=\"\" text=\"파일첨부\" tooltiptext=\"\"/></Band><Band id=\"body\"><Cell text=\"bind:NUM\" tooltiptext=\"bind:NO\"/><Cell col=\"1\" displaytype=\"decoratetext\" expr=\"expr:gfnMultiLabel(FILE_NM)\" style=\"align:left;\" text=\"bind:FILE_NM\" tooltiptext=\"expr:gfnMultiLabel(FILE_NM)\"/><Cell col=\"2\" displaytype=\"checkbox\" text=\"bind:CHECKED\"/><Cell col=\"3\" displaytype=\"expr:file != '' ? 'button' : 'none'\" edittype=\"expr:file != '' ? 'button' : 'none'\" style=\"padding:2 5 2 5;\" text=\"expr:gfnMultiLabel(file)\"/><Cell col=\"4\" displaytype=\"button\" editdisplay=\"display\" edittype=\"button\" style=\"controlbackground:URL('img::grdBtn_file.png') center middle;controlborder:1 none #808080 ;\" text=\" \"/></Band></Format></Formats>");
            this.tabPtnr.relateDocument.divViewCompBody05.addChild(obj.name, obj);

            obj = new WebBrowser("wbBizNo", "absolute", null, "0", "183", "0", "0", null, this);
            obj.set_taborder("122");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.tabPtnr.ptnrDetail.divViewCompTitle00,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 타이틀");
            		p.set_taborder("6");

            	}
            );
            this.tabPtnr.ptnrDetail.divViewCompTitle00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.tabPtnr.ptnrDetail.divViewCompTitle03,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 타이틀");
            		p.set_taborder("7");

            	}
            );
            this.tabPtnr.ptnrDetail.divViewCompTitle03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 187, this.tabPtnr.ptnrDetail.divViewCompBody03,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 상세");
            		p.set_taborder("3");

            	}
            );
            this.tabPtnr.ptnrDetail.divViewCompBody03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.tabPtnr.ptnrDetail.divViewCompTitle02,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 타이틀");
            		p.set_taborder("8");

            	}
            );
            this.tabPtnr.ptnrDetail.divViewCompTitle02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 71, this.tabPtnr.ptnrDetail.divViewCompBody01,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 상세");
            		p.set_taborder("1");

            	}
            );
            this.tabPtnr.ptnrDetail.divViewCompBody01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.tabPtnr.ptnrDetail.divViewCompTitle01,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 타이틀");
            		p.set_taborder("9");

            	}
            );
            this.tabPtnr.ptnrDetail.divViewCompTitle01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 99, this.tabPtnr.ptnrDetail.divViewCompBody02,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 상세");
            		p.set_taborder("2");

            	}
            );
            this.tabPtnr.ptnrDetail.divViewCompBody02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.tabPtnr.ptnrDetail.divViewCompTitle04,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 타이틀");
            		p.set_taborder("10");

            	}
            );
            this.tabPtnr.ptnrDetail.divViewCompTitle04.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 291, this.tabPtnr.ptnrDetail.divViewCompBody04,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 상세");
            		p.set_taborder("4");

            	}
            );
            this.tabPtnr.ptnrDetail.divViewCompBody04.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.tabPtnr.ptnrDetail.divViewCompTitle06,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-공장유무 타이틀");
            		p.set_taborder("11");

            	}
            );
            this.tabPtnr.ptnrDetail.divViewCompTitle06.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1178, 203, this.tabPtnr.ptnrDetail.divViewCompBody06,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 상세");
            		p.set_taborder("12");

            	}
            );
            this.tabPtnr.ptnrDetail.divViewCompBody06.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 292, this.tabPtnr.ptnrDetail.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 상세");
            		p.set_taborder("0");

            	}
            );
            this.tabPtnr.ptnrDetail.divViewCompBody00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.tabPtnr.ptnrDetail.divViewCompTitle07,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-신용평가서 타이틀");
            		p.set_taborder("13");

            	}
            );
            this.tabPtnr.ptnrDetail.divViewCompTitle07.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tabPtnr.ptnrDetail.divViewCompBody07,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-주요실적");
            		p.set_taborder("14");

            	}
            );
            this.tabPtnr.ptnrDetail.divViewCompBody07.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 66, this.tabPtnr.ptnrDetail.divViewCompBody05,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 상세");
            		p.set_taborder("15");

            	}
            );
            this.tabPtnr.ptnrDetail.divViewCompBody05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.tabPtnr.ptnrDetail.divViewCompTitle05,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-신용평가서 타이틀");
            		p.set_taborder("16");

            	}
            );
            this.tabPtnr.ptnrDetail.divViewCompTitle05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1203, 1564, this.tabPtnr.ptnrDetail,
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
            obj = new Layout("default", "", 993, 139, this.tabPtnr.srcGrp.divViewCompTitle01,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 타이틀");
            		p.set_taborder("1");

            	}
            );
            this.tabPtnr.srcGrp.divViewCompTitle01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 294, this.tabPtnr.srcGrp.divViewCompBody01,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 상세");
            		p.set_taborder("4");

            	}
            );
            this.tabPtnr.srcGrp.divViewCompBody01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 24, this.tabPtnr.srcGrp.divViewCompTitle00,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 타이틀");
            		p.set_taborder("6");

            	}
            );
            this.tabPtnr.srcGrp.divViewCompTitle00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tabPtnr.srcGrp,
            	//-- Layout function
            	function(p) {
            		p.set_text("소싱그룹");

            	}
            );
            this.tabPtnr.srcGrp.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1200, 121, this.tabPtnr.relateDocument.divViewCompBody05,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 상세");
            		p.set_taborder("2");

            	}
            );
            this.tabPtnr.relateDocument.divViewCompBody05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1202, 1636, this.tabPtnr.relateDocument,
            	//-- Layout function
            	function(p) {
            		p.set_text("관련문서");

            	}
            );
            this.tabPtnr.relateDocument.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "Screen0", 1220, 1868, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("FrmTemplate100");
            		p.set_titletext("신규업체등록상세");

            	}
            );
            obj.set_stepcount("");
            obj.set_stepindex("");
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item36","tabPtnr.ptnrDetail.divViewCompBody04.staSalesYr1","text","dsPtnr","YR_1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("LabelLang4","tabPtnr.ptnrDetail.divViewCompBody00.staBizBgnDay","text","gdsLabel","EPRO_LABEL_00422");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("LabelLang8","tabPtnr.ptnrDetail.divViewCompBody00.staFax","text","gdsLabel","EPRO_LABEL_00078");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("LabelLang12","tabPtnr.ptnrDetail.divViewCompBody00.staRmark","text","gdsLabel","EPRO_LABEL_00037");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("LabelLang16","tabPtnr.ptnrDetail.divViewCompBody01.staRprstvEmail","text","gdsLabel","EPRO_LABEL_00089");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("LabelLang20","tabPtnr.ptnrDetail.divViewCompBody03.staUserTel","text","gdsLabel","EPRO_LABEL_00052");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("LabelLang24","tabPtnr.ptnrDetail.divViewCompBody03.staUserPstn","text","gdsLabel","EPRO_LABEL_00069");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("LabelLang28","tabPtnr.ptnrDetail.divViewCompBody03.staUserPwCh","text","gdsLabel","EPRO_LABEL_00445");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("LabelLang32","tabPtnr.ptnrDetail.divViewCompBody04.staAst","text","gdsLabel","EPRO_LABEL_01049");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("LabelLang39","tabPtnr.ptnrDetail.divViewCompBody04.staMjrCstmr","text","gdsLabel","EPRO_LABEL_00198");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("LabelLang43","tabPtnr.ptnrDetail.divViewCompBody04.staWon02","text","gdsLabel","EPRO_LABEL_00411");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("LabelLang50","tabPtnr.ptnrDetail.divViewCompBody04.staWon07","text","gdsLabel","EPRO_LABEL_00411");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("LabelLang54","tabPtnr.ptnrDetail.divViewCompBody04.staWon09","text","gdsLabel","EPRO_LABEL_00411");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("LabelLang66","tabPtnr.ptnrDetail.divViewCompTitle03.staViewCompTitle03","text","gdsLabel","EPRO_LABEL_00313");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("LabelLang75","tabPtnr.srcGrp.divViewCompTitle01.staViewCompTitle00","text","gdsLabel","EPRO_LABEL_01351");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","tabPtnr.ptnrDetail.divViewCompBody00.edtPtnrNm","value","dsPtnr","PTNR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","tabPtnr.ptnrDetail.divViewCompBody00.medBizNo","value","dsPtnr","BIZ_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","tabPtnr.ptnrDetail.divViewCompBody00.medtCorpRegNo","value","dsPtnr","CORP_REG_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","tabPtnr.ptnrDetail.divViewCompBody00.cldBizBgnDay","value","dsPtnr","BIZ_BGN_DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","tabPtnr.ptnrDetail.divViewCompBody00.edtBizCndtn","value","dsPtnr","BIZ_CNDTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","tabPtnr.ptnrDetail.divViewCompBody00.edtBizType","value","dsPtnr","BIZ_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","tabPtnr.ptnrDetail.divViewCompBody00.edtTel","value","dsPtnr","TEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","tabPtnr.ptnrDetail.divViewCompBody00.edtFax","value","dsPtnr","FAX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","tabPtnr.ptnrDetail.divViewCompBody00.cboNation","value","dsPtnr","CD_NATION");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","tabPtnr.ptnrDetail.divViewCompBody00.edtHPage","value","dsPtnr","HM_PG");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","tabPtnr.ptnrDetail.divViewCompBody01.edtRprstvNm","value","dsPtnr","RPRSTV_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","tabPtnr.ptnrDetail.divViewCompBody01.edtRprstTel","value","dsPtnr","RPTST_TEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","tabPtnr.ptnrDetail.divViewCompBody01.edtRprstvEmail","value","dsPtnr","RPRSTV_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","tabPtnr.ptnrDetail.divViewCompBody01.edtRprstvHp","value","dsPtnr","RPRSTV_HP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","tabPtnr.ptnrDetail.divViewCompBody02.edtZipNo","value","dsPtnr","ZIP_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","tabPtnr.ptnrDetail.divViewCompBody02.edtAddr","value","dsPtnr","ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","tabPtnr.ptnrDetail.divViewCompBody02.edtDtlAddr","value","dsPtnr","DTL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","tabPtnr.ptnrDetail.divViewCompBody03.edtUserNm","value","dsUser","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","tabPtnr.ptnrDetail.divViewCompBody03.edtUserHp","value","dsUser","TEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","tabPtnr.ptnrDetail.divViewCompBody03.edtUserEmail","value","dsUser","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","tabPtnr.ptnrDetail.divViewCompBody03.edtHp01","value","dsUser","HP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","tabPtnr.ptnrDetail.divViewCompBody03.edtPstn","value","dsUser","PSTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","tabPtnr.ptnrDetail.divViewCompBody03.edtDeptNm","value","dsUser","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","tabPtnr.ptnrDetail.divViewCompBody03.edtUserId","value","dsUser","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","tabPtnr.ptnrDetail.divViewCompBody03.edtUserFax","value","dsUser","FAX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","tabPtnr.ptnrDetail.divViewCompBody03.edtPstn01","value","dsUser","PWD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","tabPtnr.ptnrDetail.divViewCompBody03.edtPWCH","value","dsUser","PWDCH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","tabPtnr.ptnrDetail.divViewCompBody04.medAst","value","dsPtnr","AST");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","tabPtnr.ptnrDetail.divViewCompBody04.medCapl","value","dsPtnr","CAPL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","tabPtnr.ptnrDetail.divViewCompBody04.medDebt","value","dsPtnr","DEBT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","tabPtnr.ptnrDetail.divViewCompBody04.medEmpCnt","value","dsPtnr","EMP_CNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","tabPtnr.ptnrDetail.divViewCompBody04.stabizProfitYr1","text","dsPtnr","YR_1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item38","tabPtnr.ptnrDetail.divViewCompBody04.staSalesYr2","text","dsPtnr","YR_2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item39","tabPtnr.ptnrDetail.divViewCompBody04.stabizProfitYr2","text","dsPtnr","YR_2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item40","tabPtnr.ptnrDetail.divViewCompBody04.staSalesYr3","text","dsPtnr","YR_3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","tabPtnr.ptnrDetail.divViewCompBody04.stabizProfitYr3","text","dsPtnr","YR_3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item42","tabPtnr.ptnrDetail.divViewCompBody04.maeSalesAmt1","value","dsPtnr","SALES_AMT_1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item43","tabPtnr.ptnrDetail.divViewCompBody04.maeSalesAmt2","value","dsPtnr","SALES_AMT_2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item44","tabPtnr.ptnrDetail.divViewCompBody04.maeSalesAmt3","value","dsPtnr","SALES_AMT_3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item45","tabPtnr.ptnrDetail.divViewCompBody04.maebizProfit","value","dsPtnr","BIZ_PROFIT_1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item46","tabPtnr.ptnrDetail.divViewCompBody04.maebizProfit2","value","dsPtnr","BIZ_PROFIT_2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item47","tabPtnr.ptnrDetail.divViewCompBody04.maebizProfit3","value","dsPtnr","BIZ_PROFIT_3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item59","tabPtnr.ptnrDetail.divViewCompBody04.txtMjrCstmr","value","dsPtnr","MJR_CSTMR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item58","tabPtnr.aprvDetail.divViewCompBody00.cboIncoterms","value","dsPtnr","CD_INCOTERMS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item57","tabPtnr.aprvDetail.divViewCompBody00.cboCdPymtCndtn","value","dsPtnr","CD_PYMT_CNDTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item56","tabPtnr.aprvDetail.divViewCompBody00.cboCdTrdCrnc","value","dsPtnr","CD_TRD_CRNC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item55","tabPtnr.aprvDetail.divViewCompBody00.edtBnkAcntNo","value","dsPtnr","BNK_ACNT_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item54","tabPtnr.aprvDetail.divViewCompBody00.edtPymtBnkAddr","value","dsPtnr","PYMT_BNK_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item53","tabPtnr.aprvDetail.divViewCompBody00.edtBnkOwnr","value","dsPtnr","BNK_OWNR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item52","tabPtnr.aprvDetail.divViewCompBody00.edtPymtBnk","value","dsPtnr","PYMT_BNK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("LabelLang80","tabPtnr.aprvDetail.divViewCompBody00.staBnkAcntNo","text","gdsLabel","EPRO_LABEL_00055");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item62","tabPtnr.aprvDetail.divViewCompTitle00.staViewCompTitle00","text","gdsLabel","EPRO_LABEL_01037");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item63","tabPtnr.ptnrDetail.divViewCompBody00.edtArea","value","dsPtnr","AREA");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","tabPtnr.ptnrDetail.divViewCompBody00.taRmark","value","dsPtnr","PTNR_RMK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item67","tabPtnr.ptnrDetail.divViewCompBody04.Static03","text","gdsLabel","EPRO_LABEL_01137");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item73","tabPtnr.ptnrDetail.divViewCompBody00.edtEctNation","value","dsPtnr","NATION_RMK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item61","tabPtnr.srcGrp.cboSrclvl2","value","dsPtnr","RPTST_SRC_GRP_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item60","tabPtnr.srcGrp.cboSrclvl1","value","dsPtnr","LRG_GRP_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","tabPtnr.ptnrDetail.divViewCompBody04.medEmpCntKi","value","dsPtnr","EMP_CNT_KI");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","tabPtnr.ptnrDetail.divViewCompBody04.medEmpCntSa","value","dsPtnr","EMP_CNT_SA");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","tabPtnr.ptnrDetail.divViewCompBody04.medEmpCntEtc","value","dsPtnr","EMP_CNT_ETC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item48","tabPtnr.ptnrDetail.divViewCompBody05.edtCrdtGrd","value","dsPtnr","CRDT_GRD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item49","tabPtnr.ptnrDetail.divViewCompBody05.edtCacheGrade","value","dsPtnr","CACHE_GRADE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item50","tabPtnr.ptnrDetail.divViewCompBody05.edtCrdtEvalOrg","value","dsPtnr","CRDT_EVAL_ORG");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item51","tabPtnr.ptnrDetail.divViewCompBody05.cldCrdtEvalDay","value","dsPtnr","CRDT_EVAL_DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("LabelLang61","tabPtnr.ptnrDetail.divViewCompTitle07.btnEvalView","text","gdsLabel","EPRO_LABEL_00144");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item71","tabPtnr.relateDocument","text","gdsLabel","EPRO_LABEL_01036");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("SPtnrReqDetail.xfdl", function(exports) {
        /**
         * @파일명       	: SPtnrReqDetail.xfdl
         * @생성자       	: 한의봉
         * @생성일자     	: 2017. 9. 05
         * @설명			: 협력사등록
         * @최종수정자		: 안성민
         * @최종수정일자	: 2017. 11. 24.
        */

        this.isUserChk = false;
        this.isCnfrm = false;
        this.tmpSave = false;
        this.nFileRow = 0;

        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {
        	var param = [
        					 {code:"CM15", sSelectType:"S"} // 화폐단위
        					 ,{code:"CM13", sSelectType:"S"} // 지급조건
        					 ,{code:"CM22", sSelectType:"S"} // incotemr
        					 ,{code:"CM16", sSelectType:"S"} // 국가
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
          * @함수명	: fnFormOnload
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.LoadEventInfo(이벤트변수)
          * @return   :
          * @desc     	: 폼 onload이벤트
          */
        this.fnFormOnload = function(obj,e)
        {
        	gfnMakeFileDs(this);
        	this.dsPtnr.addRow();
        	this.dsUser.addRow();
        		
        	this.fnDsBindItem();
        	
        	var bizType = gfnGetTmprData("bizType");
        	var ptnrId = gfnGetTmprData("ptnrId");
        	var ptnrCtgr = gfnGetTmprData("ptnrCtgr");	
        	gfnClearTmprData();
        	//기본
        	this.dsPtnr.setColumn(0, "CD_NATION", "");
        	this.dsPtnr.setColumn(0, "CD_TRD_CRNC", "");
        	this.dsPtnr.setColumn(0, "CD_PYMT_CNDTN", "");
        	this.dsPtnr.setColumn(0, "CD_INCOTERMS", "");
        	this.dsPtnr.setColumn(0, "BIZ_BGN_DAY", gfnToday());
        	
        	
        	this.dsPtnr.setColumn(0, "AST", "0");
        	this.dsPtnr.setColumn(0, "CAPL", "0");
        	this.dsPtnr.setColumn(0, "DEBT", "0");
        	this.dsPtnr.setColumn(0, "EMP_CNT", "0");
        	this.dsPtnr.setColumn(0, "EMP_CNT_KI", "0");
        	this.dsPtnr.setColumn(0, "EMP_CNT_SA", "0");
        	this.dsPtnr.setColumn(0, "EMP_CNT_ETC", "0");
        	
        	this.dsPtnr.setColumn(0, "SALES_AMT_1", "0");
        	this.dsPtnr.setColumn(0, "SALES_AMT_2", "0");
        	this.dsPtnr.setColumn(0, "SALES_AMT_3", "0");
        	this.dsPtnr.setColumn(0, "BIZ_PROFIT_1", "0");
        	this.dsPtnr.setColumn(0, "BIZ_PROFIT_2", "0");
        	this.dsPtnr.setColumn(0, "BIZ_PROFIT_3", "0");
        	
        	if(bizType == "Biz") { //사업자
        		this.dsPtnr.setColumn(0, "CD_PTNR_CTGR", "SR12BZ");
        		this.dsPtnr.setColumn(0, "CD_NATION", "CM16KR");
        		this.fnBizTypeFormat("Biz");
        	
        		this.fnBizNoChk();
        	} else if(bizType == "Foreign") { //해외
        		this.dsPtnr.setColumn(0, "CD_PTNR_CTGR", "SR12AB");
        		this.fnBizTypeFormat("Foreign");
        		
        		this.fnSearch();
        	} else if(bizType == "CR") { //Charge Request
        		this.dsPtnr.setColumn(0,"PTNR_ID", ptnrId);
        		
        		if("SR12BZ" == ptnrCtgr) {
        			this.fnBizTypeFormat("Biz");
        		} else if("SR12AB" == ptnrCtgr) {
        			this.fnBizTypeFormat("Foreign");
        		}
        		
        		this.fnSearch();
        	} else if(bizType == "Personal") { //개인
        		this.dsPtnr.setColumn(0, "CD_PTNR_CTGR", "SR12PN");
        		this.fnBizNoChk();
        	} else {
        		gfnAlert("EPRO_LABEL_01135");
        	}
        }

        /**
          * @함수명	: fnBizTypeFormat
          * @desc     	: bizType에 따른 폼 변경
          */
        this.fnBizTypeFormat = function(bizType)
        {
        	if(bizType == "Biz") {
        		var body00 = this.tabPtnr.ptnrDetail.divViewCompBody00;
        		body00.staBizCndtn.set_cssclass("sta_WF_Label_P")
        		body00.staBizType.set_cssclass("sta_WF_Label_P")
        	} else if(bizType == "Foreign"){
        		//해외사업자는 사업자등록번호 사용안함
        		var body00 = this.tabPtnr.ptnrDetail.divViewCompBody00;
        		
        		body00.staBizCndtn.set_cssclass("sta_WF_Label")
        		body00.staBizType.set_cssclass("sta_WF_Label")
        		
        		body00.staBizNo.set_visible(false);
        		body00.medBizNo.set_visible(false);
        		
        		body00.staCorpRegNo.set_left(body00.staBizNo.left);
        		body00.medtCorpRegNo.set_left(body00.medBizNo.left);
        				
        		//우편번호 검색하지않고 직접입력
        		this.tabPtnr.ptnrDetail.divViewCompBody02.edtZipNo.set_readonly(false);
        		this.tabPtnr.ptnrDetail.divViewCompBody02.btnZipNo.set_visible(false);
        	}
        }

        /**
          * @함수명	: fnDsBindItem
          * @desc     	: 데이터셋이 바인드된 컴포넌트위 정보 저장
          */
        this.fnDsBindItem = function()
        {
        	var binds = this.binds;
        	for(var i=0; i<binds.length; i++) {
        		if("dsPtnr" == binds[i].datasetid) {
        			var nRow = this.dsPtnrBind.addRow();
        			this.dsPtnrBind.setColumn(nRow, "COLID", binds[i].columnid);
        			this.dsPtnrBind.setColumn(nRow, "COMPID", "this." + binds[i].compid);
        		} else if("dsUser" == binds[i].datasetid) {
        			var nRow = this.dsUserBind.addRow();
        			this.dsUserBind.setColumn(nRow, "COLID", binds[i].columnid);
        			this.dsUserBind.setColumn(nRow, "COMPID", "this." + binds[i].compid);
        		}
        	}
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

        	var sSvcID = "readPtnrReq";
        	var sController = "epro.ptnr.service.SPtnrService.readPtnrReq";
        	var sInDatasets = "dsPtnr=dsPtnr";
        	var sOutDatasets = "dsPtnr=dsPtnr dsPtnrMaker=dsPtnrMaker dsPtnrPlant=dsPtnrPlant dsUser=dsUser dsLrgGrp=dsLrgGrp dsMdlGrp=dsMdlGrp dsSelectGrp=dsSelectGrp dslvl1=dslvl1 dslvl2=dslvl2";
        	var sCallbackFunc = "fnTrCallBack";

            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
          * @함수명  : fnPreSave
          * @desc     : 저장 전  유효성체크
          */
        this.fnPreSave = function()
        {
        	// 아이디
        	var ds = "dsUser"
        	if(gfnIsNull(this.dsUser.getColumn(0,"USER_ID"))){
        		this.fnValidateFalse(ds, "USER_ID");
        		gfnAlert("EPRO_LABEL_00995");
        		return;
        	}else if(!this.isUserChk){
        		this.fnValidateFalse(ds, "USER_ID");
        		gfnAlert("EPRO_LABEL_01081");
        		return;
        	}
        	
        	//사용자명
        	if(gfnIsNull(this.dsUser.getColumn(0,"USER_NM"))){
        		this.fnValidateFalse(ds, "USER_NM");
        		gfnAlert("EPRO_LABEL_01066");
        		return;
        	}

        	// EMAIL
        	if(gfnIsNull(this.dsUser.getColumn(0, "EMAIL"))){
        		this.fnValidateFalse(ds, "EMAIL");
        		gfnAlert("EPRO_LABEL_01068");
        		return;
        	} else {
        		if(!gfnChkEmail(this.dsUser.getColumn(0, "EMAIL"))) {
        			this.fnValidateFalse(ds, "EMAIL");
        			gfnAlert("EPRO_LABEL_01211");
        			return;
        		}
        	}

        	

        	if("SR12AB" != this.dsPtnr.getColumn(0, "CD_PTNR_CTGR")){
        		if(gfnIsNull(this.dsUser.getColumn(0,"HP"))){
        			this.fnValidateFalse(ds, "HP");
        			gfnAlert("EPRO_LABEL_00998");
        			return;
        		} else {
        			if(!gfnIsTel(this.dsUser.getColumn(0,"HP"), "C") && telCheckBool) {
        				this.fnValidateFalse(ds, "HP");
        				gfnAlert("EPRO_LABEL_01212");
        				return;
        			}
        		}
        	}

        	if(!this.fnPwdCheck())return;
        	return gfnConfirm("EPRO_LABEL_00001");
        }

        this.fnTmpSave = function(obj,e) 
        {
        	if(!this.fnPreSave())return;
        	
        	this.fnSave(obj, e);
        }

        /**
          * @함수명  : fnSave
          * @input    : obj:Button,  e:nexacro.ClickEventInfo
          * @desc     : 협력사 임시저장
          */
        this.fnSave = function(obj,e)
        {
        	var bgnDay = this.dsPtnr.getColumn(0, "BIZ_BGN_DAY");
        	bgnDay = bgnDay.substring(0,4);
        	this.dsPtnr.setColumn(0, "BIZ_BGN_DAY", bgnDay);
        	
        	if(!gfnIsNull(this.dsPtnr.getColumn(0, "RPTST_SRC_GRP_ID"))) {
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
        	}
        	
        	var sSvcID = "saveTmpPtnrReq";
        	var sController = "epro.ptnr.service.SPtnrService.saveTmpPtnrReq";
        	var sInDatasets = "dsPtnr=dsPtnr:A dsPtnrMaker=dsPtnrMaker:A dsUser=dsUser dsPtnrPlant=dsPtnrPlant:A dsSelectGrp=dsSelectGrp:A dsPtnrFile=dsPtnrFile:A";
        	var sOutDatasets = "dsPtnr=dsPtnr dsPtnrPlant=dsPtnrPlant dsPtnrMaker=dsPtnrMaker dsUser=dsUser dsSelectGrp=dsSelectGrp";
        	var sCallbackFunc = "fnTrCallBack";

            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
          * @함수명  : fnPreCnfrm
          * @desc     : 등록요청 전  유효성체크
          */
        this.fnPreCnfrm = function()
        {
        	var arr = [];
        	var ds = "";
        	var telCheckBool = true; //해외사업자일 경우 false
        	if("SR12AB" == this.dsPtnr.getColumn(0, "CD_PTNR_CTGR")) {
        		telCheckBool = false;
        	}
        //기본정보
        	ds = "dsPtnr"
        	// 업체명(한글)
        	if(gfnIsNull(this.dsPtnr.getColumn(0,"PTNR_NM"))){
        		this.fnValidateFalse(ds, "PTNR_NM");
        		gfnAlert("EPRO_LABEL_01055");
        		return;
        	}
        	// 설립연도
        	if(gfnIsNull(this.dsPtnr.getColumn(0,"BIZ_BGN_DAY"))){
        		this.fnValidateFalse(ds, "BIZ_BGN_DAY");
        		gfnAlert("EPRO_LABEL_01057");
        		return;
        	// 오늘 날짜와 영업개시일자 비교
        	}else if(this.dsPtnr.getColumn(0,"BIZ_BGN_DAY")>gfnToday()){
        		this.fnValidateFalse(ds, "BIZ_BGN_DAY");
        		gfnAlert("EPRO_LABEL_01077");
        		return;
        	}
        	
        	// 업태
        	if(gfnIsNull(this.dsPtnr.getColumn(0,"BIZ_CNDTN")) && telCheckBool){
        		this.fnValidateFalse(ds, "BIZ_CNDTN");
        		gfnAlert("EPRO_LABEL_01058");
        		return;
        	}
        	// 종목
        	if(gfnIsNull(this.dsPtnr.getColumn(0,"BIZ_TYPE")) && telCheckBool){
        		this.fnValidateFalse(ds, "BIZ_TYPE");
        		gfnAlert("EPRO_LABEL_01060");
        		return;
        	} 
        	// 대표전화
        	if(gfnIsNull(this.dsPtnr.getColumn(0,"TEL"))){
        		this.fnValidateFalse(ds, "TEL");
        		gfnAlert("EPRO_LABEL_01059");
        		return;
        	} else if(!gfnIsNull(this.dsPtnr.getColumn(0,"TEL")) && telCheckBool) {
        		//해외일경우 유효성검사 제외
        		if(!gfnIsTel(this.dsPtnr.getColumn(0,"TEL"), "T")) {
        			this.fnValidateFalse(ds, "TEL");
        			gfnAlert("EPRO_LABEL_01204");
        			return;
        		}
        	}
        	// FAX
        	if(!gfnIsNull(this.dsPtnr.getColumn(0,"FAX")) && telCheckBool) {
        		//해외일경우 유효성검사 제외
        		if(!gfnIsTel(this.dsPtnr.getColumn(0,"FAX"), "T")) {
        			this.fnValidateFalse(ds, "FAX");
        			gfnAlert("EPRO_LABEL_01216");
        			return;
        		}
        	}
        	// 국가
        	if(gfnIsNull(this.dsPtnr.getColumn(0,"CD_NATION"))){
        		this.fnValidateFalse(ds, "CD_NATION");
        		gfnAlert("EPRO_LABEL_01061");
        		return;
        	// 기타일경우 비고 입력
        	} else if(!gfnIsNull(this.dsPtnr.getColumn(0,"CD_NATION")) && "CM16ETC" == this.dsPtnr.getColumn(0,"CD_NATION")){
        		if(gfnIsNull(this.dsPtnr.getColumn(0,"NATION_RMK"))) {
        			this.fnValidateFalse(ds, "NATION_RMK");
        			gfnAlert("EPRO_LABEL_01235");
        			return;
        		}
        	}
        // 대표자
        	// 대표자명
        	if(gfnIsNull(this.dsPtnr.getColumn(0,"RPRSTV_NM"))){
        		this.fnValidateFalse(ds, "RPRSTV_NM");
        		gfnAlert("EPRO_LABEL_01062");
        		return;
        	}
        	// 대표자E-MAIL
        	if(gfnIsNull(this.dsPtnr.getColumn(0, "RPRSTV_EMAIL"))){
        		this.fnValidateFalse(ds, "RPRSTV_EMAIL");
        		gfnAlert("EPRO_LABEL_01234");
        		return;
        	} else {
        		if(!gfnChkEmail(this.dsPtnr.getColumn(0, "RPRSTV_EMAIL"))) {
        			this.fnValidateFalse(ds, "RPRSTV_EMAIL");
        			gfnAlert("EPRO_LABEL_01205");
        			return;
        		}
        	}
        	// 연락처
        	if(!gfnIsNull(this.dsPtnr.getColumn(0,"RPTST_TEL")) && telCheckBool) {
        		if(!gfnIsTel(this.dsPtnr.getColumn(0,"RPTST_TEL"))) {
        			this.fnValidateFalse(ds, "RPTST_TEL");
        			gfnAlert("EPRO_LABEL_01206");
        			return;
        		}
        	}
        	// 휴대전화
        	if(!gfnIsNull(this.dsPtnr.getColumn(0,"RPRSTV_HP")) && telCheckBool) {
        		if(!gfnIsTel(this.dsPtnr.getColumn(0,"RPRSTV_HP"), "C")) {
        			this.fnValidateFalse(ds, "RPRSTV_HP");
        			gfnAlert("EPRO_LABEL_01207");
        			return;
        		}
        	}
        //사업장주소
        	// 우편번호
        	if(gfnIsNull(this.dsPtnr.getColumn(0,"ZIP_NO"))){
        		this.fnValidateFalse(ds, "ZIP_NO");
        		gfnAlert("EPRO_LABEL_01063");
        		return;
        	}
        	// 주소
        	if(gfnIsNull(this.dsPtnr.getColumn(0,"ADDR"))){
        		this.fnValidateFalse(ds, "ADDR");
        		gfnAlert("EPRO_LABEL_01064");
        		return;
        	}
        	// 상세주소
        	if(gfnIsNull(this.dsPtnr.getColumn(0,"DTL_ADDR"))){
        		this.fnValidateFalse(ds, "DTL_ADDR");
        		gfnAlert("EPRO_LABEL_01065");
        		return;
        	}
        //사용자정보
        	ds = "dsUser"
        	// 담당자명
        	if(gfnIsNull(this.dsUser.getColumn(0,"USER_NM"))){
        		this.fnValidateFalse(ds, "USER_NM");
        		gfnAlert("EPRO_LABEL_01066");
        		return;
        	}
        	// EMAIL
        	if(gfnIsNull(this.dsUser.getColumn(0, "EMAIL"))){
        		this.fnValidateFalse(ds, "EMAIL");
        		gfnAlert("EPRO_LABEL_01068");
        		return;
        	} else {
        		if(!gfnChkEmail(this.dsUser.getColumn(0, "EMAIL"))) {
        			this.fnValidateFalse(ds, "EMAIL");
        			gfnAlert("EPRO_LABEL_01211");
        			return;
        		}
        	}
        	// 연락처
        	if(gfnIsNull(this.dsUser.getColumn(0,"TEL"))){
        		this.fnValidateFalse(ds, "TEL");
        		gfnAlert("EPRO_LABEL_01213");
        		return;
        	} else {
        		if(!gfnIsTel(this.dsUser.getColumn(0,"TEL")) && telCheckBool) {
        			this.fnValidateFalse(ds, "TEL");
        			gfnAlert("EPRO_LABEL_01214");
        			return;
        		}
        	}
        	// 휴대전화
        	if(gfnIsNull(this.dsUser.getColumn(0,"HP"))){
        		this.fnValidateFalse(ds, "HP");
        		gfnAlert("EPRO_LABEL_00998");
        		return;
        	} else {
        		if(!gfnIsTel(this.dsUser.getColumn(0,"HP"), "C") && telCheckBool) {
        			this.fnValidateFalse(ds, "HP");
        			gfnAlert("EPRO_LABEL_01212");
        			return;
        		}
        	}
        	// FAX
        	if(!gfnIsNull(this.dsUser.getColumn(0,"FAX")) && telCheckBool) {
        		if(!gfnIsTel(this.dsUser.getColumn(0,"FAX"), "T")) {
        			this.fnValidateFalse(ds, "FAX");
        			gfnAlert("EPRO_LABEL_01215");
        			return;
        		}
        	}
        	// 아이디
        	if(gfnIsNull(this.dsUser.getColumn(0,"USER_ID"))){
        		this.fnValidateFalse(ds, "USER_ID");
        		gfnAlert("EPRO_LABEL_01107");
        		return;
        	}
        	if(!this.isUserChk){
        		this.fnValidateFalse(ds, "USER_ID");
        		gfnAlert("EPRO_LABEL_01081");
        		return;
        	}
        //경영실태현황
        	ds = "dsPtnr"
        	// 자본금총계
        	if(gfnIsNull(this.dsPtnr.getColumn(0,"CAPL"))){
        		this.fnValidateFalse(ds, "CAPL");
        		gfnAlert("EPRO_LABEL_01073");
        		return;
        	}
        	// 부채총계
        	if(gfnIsNull(this.dsPtnr.getColumn(0,"DEBT"))){
        		this.fnValidateFalse(ds, "DEBT");
        		gfnAlert("EPRO_LABEL_01074");
        		return;
        	}
        	// 자산총계
        	if(gfnIsNull(this.dsPtnr.getColumn(0,"AST"))){
        		this.fnValidateFalse(ds, "AST");
        		gfnAlert("EPRO_LABEL_01072");
        		return;
        	}
        	// 총인원
        	if(gfnIsNull(this.dsPtnr.getColumn(0,"EMP_CNT")) || 0 == this.dsPtnr.getColumn(0,"EMP_CNT")){
        		this.fnValidateFalse(ds, "EMP_CNT_KI");
        		this.fnValidateFalse(ds, "EMP_CNT_SA");
        		this.fnValidateFalse(ds, "EMP_CNT_ETC");
        		gfnAlert("EPRO_LABEL_01075");
        		return;
        	}
        	// 주요거래처
        	if(gfnIsNull(this.dsPtnr.getColumn(0,"MJR_CSTMR"))){
        		this.fnValidateFalse(ds, "MJR_CSTMR");
        		gfnAlert("EPRO_LABEL_01076");
        		return;
        	}
        	// 매출액1
        	if(gfnIsNull(this.dsPtnr.getColumn(0,"SALES_AMT_1"))){
        		this.fnValidateFalse(ds, "SALES_AMT_1");
        		gfnAlert(gfnLabelRep("EPRO_LABEL_01223", [this.dsPtnr.getColumn(0, "YR_1")]));
        		return;
        	}
        	// 매출액2
        	if(gfnIsNull(this.dsPtnr.getColumn(0,"SALES_AMT_2"))){
        		this.fnValidateFalse(ds, "SALES_AMT_2");
        		gfnAlert(gfnLabelRep("EPRO_LABEL_01223", [this.dsPtnr.getColumn(0, "YR_2")]));
        		return;
        	}
        	// 매출액3
        	if(gfnIsNull(this.dsPtnr.getColumn(0,"SALES_AMT_3"))){
        		this.fnValidateFalse(ds, "SALES_AMT_3");
        		gfnAlert(gfnLabelRep("EPRO_LABEL_01223", [this.dsPtnr.getColumn(0, "YR_3")]));
        		return;
        	}
        	// 영업이익1
        	if(gfnIsNull(this.dsPtnr.getColumn(0,"BIZ_PROFIT_1"))){
        		this.fnValidateFalse(ds, "BIZ_PROFIT_1");
        		gfnAlert(gfnLabelRep("EPRO_LABEL_01224", [this.dsPtnr.getColumn(0, "YR_1")]));
        		return;
        	}
        	// 영업이익2
        	if(gfnIsNull(this.dsPtnr.getColumn(0,"BIZ_PROFIT_2"))){
        		this.fnValidateFalse(ds, "BIZ_PROFIT_2");
        		gfnAlert(gfnLabelRep("EPRO_LABEL_01224", [this.dsPtnr.getColumn(0, "YR_2")]));
        		return;
        	}
        	// 영업이익3
        	if(gfnIsNull(this.dsPtnr.getColumn(0,"BIZ_PROFIT_3"))){
        		this.fnValidateFalse(ds, "BIZ_PROFIT_3");
        		gfnAlert(gfnLabelRep("EPRO_LABEL_01224", [this.dsPtnr.getColumn(0, "YR_3")]));
        		return;
        	}
        	//공장정보
        	for(var i=0; i<this.dsPtnrPlant.getRowCount(); i++) {
        		if(gfnIsNull(this.dsPtnrPlant.getColumn(i, "CD_NATION")) || gfnIsNull(this.dsPtnrPlant.getColumn(i, "AREA"))
        		   || gfnIsNull(this.dsPtnrPlant.getColumn(i, "ADDR")) || gfnIsNull(this.dsPtnrPlant.getColumn(i, "GROSS_AREA")) ) {
        			this.tabPtnr.set_tabindex(0);
        			this.tabPtnr.ptnrDetail.divViewCompBody06.grdPlant.setFocus();
        			gfnAlert("EPRO_LABEL_01141");
        			return;
        		} else if(this.dsPtnrPlant.getColumn(i, "CD_NATION") == "CM16ETC" && gfnIsNull(this.dsPtnrPlant.getColumn(i, "NATION_RMK"))) {
        			this.tabPtnr.set_tabindex(0);
        			this.tabPtnr.ptnrDetail.divViewCompBody06.grdPlant.setFocus();
        			gfnAlert("EPRO_LABEL_01141");
        			return;
        		}
        	}
        	//MAKER정보
        	for(var i=0; i<this.dsPtnrMaker.getRowCount(); i++) {
        		if(gfnIsNull(this.dsPtnrMaker.getColumn(i, "MAKER"))) {
        			this.tabPtnr.set_tabindex(0);
        			this.tabPtnr.ptnrDetail.divViewCompBody07.grdMaker.setFocus();
        			gfnAlert("EPRO_LABEL_01142");
        			return;
        		}
        		if(this.dsPtnrMaker.getColumn(i, "ALT_TS") == 1 && gfnIsNull(this.dsPtnrMaker.getColumn(i, "LIMIT_DAY"))  ){
        			this.tabPtnr.set_tabindex(0);
        			this.tabPtnr.ptnrDetail.divViewCompBody07.grdMaker.setFocus();
        			gfnAlert("EPRO_LABEL_01277");
        			return;
        		}
        	}
        //대표납품품목
        	//대표납품품목
        	if(gfnIsNull(this.dsPtnr.getColumn(0,"LRG_GRP_ID"))){
        		this.fnValidateFalse(ds, "LRG_GRP_ID");
        		gfnAlert("EPRO_LABEL_01395");
        		return;
        	}
        	if(gfnIsNull(this.dsPtnr.getColumn(0,"RPTST_SRC_GRP_ID"))){
        		this.fnValidateFalse(ds, "RPTST_SRC_GRP_ID");
        		gfnAlert("EPRO_LABEL_01396");
        		return;
        	}
        //첨부파일

        	if(this.dsPtnr.getColumn(0, "ATTCH_FILE_CNT")>0) {
        		
        	} else {
        		this.tabPtnr.set_tabindex(2);
        		this.tabPtnr.relateDocument.divViewCompBody05.grdPtnrItem.setFocus();
        		gfnAlert("EPRO_LABEL_01228");
        		return;
        	}
        	

        	if(!this.fnPwdCheck())return;
        	return gfnConfirm("EPRO_LABEL_01134");
        }

        /**
          * @함수명  : fnCnfrm
          * @input    : obj:Button,  e:nexacro.ClickEventInfo
          * @return   :
          * @desc     : 협력사 등록요청
          */
        this.fnCnfrm = function(obj,e)
        {
        	if(!this.fnPreCnfrm())return;
        	
        	this.isCnfrm = true
        	this.fnSave(obj, e);
        }

        /**
          * @함수명  : fnBizNoChk
          * @input    : obj:Button,  e:nexacro.ClickEventInfo
          * @return   :
          * @desc     : 사업자번호 중복체크
          */
        this.fnBizNoChk = function(obj,e)
        {
        	var sArg = {};
        	gfnModalPop(this,"SPtnrBizNoSrchPopup", "SPTNR::SPtnrBizNoSrchPopup.xfdl", sArg, "fnPopCallBack", 500, 100);
        }

        
        /**
          * @함수명  : fnUserIdChk
          * @input    : obj:Button,  e:nexacro.ClickEventInfo
          * @return   :
          * @desc     : 아이디 중복체크
          */
        this.fnUserIdChkBtn = function(obj,e)
        {
        	this.fnUserIdChk();
        }
        this.fnUserIdChk = function()
        {
        	this.tabPtnr.ptnrDetail.divViewCompBody03.edtUserId.updateToDataset();
        	if(gfnIsNull(this.dsUser.getColumn(0,"USER_ID"))){
        		gfnAlert("EPRO_LABEL_01124");
        		return;
        	 }
        	 this.dsUserChk.clearData();
        	 var nRow = this.dsUserChk.addRow();
        	 this.dsUserChk.setColumn(nRow,"USER_ID",this.dsUser.getColumn(0,"USER_ID"));

        	var sSvcID = "checkPtnrUserId";
        	var sController = "epro.ptnr.service.SPtnrService.checkPtnrUserId";
        	var sInDatasets = "dsUserChk=dsUserChk";
        	var sOutDatasets = "dsUserChk=dsUserChk";
        	var sCallbackFunc = "fnTrCallBack";

            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
          * @함수명  : btnCxl_onclick
          * @input    : obj:Button ,e:nexacro.ClickEventInfo
          * @return   :
          * @desc     : 취소버튼
          */
        this.btnCxl_onclick = function(obj,e)
        {
        	if(!gfnConfirm("EPRO_LABEL_01054")) return false;

        	application.gv_loginFrame.set_formurl("frame::loginFrame.xfdl");
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
        		case "readPtnrReq" :
        			if("SR10NREQ" == this.dsPtnr.getColumn(0, "CD_PTNR_STTS")) {
        				var sArg = [
        					{btnName:gfnMultiLabel("EPRO_LABEL_00523"), clickEventFunc:"fnCnfrm"}
        					,{btnName:gfnMultiLabel("EPRO_LABEL_00111"), clickEventFunc:"btnCxl_onclick"}
        					];
        				this.fnPopRemote(sArg);
        			} else {
        				var sArg = [
        					{btnName:gfnMultiLabel("EPRO_LABEL_00132"), clickEventFunc:"fnTmpSave"}
        					,{btnName:gfnMultiLabel("EPRO_LABEL_00233"), clickEventFunc:"fnCnfrm"}
        					,{btnName:gfnMultiLabel("EPRO_LABEL_00111"), clickEventFunc:"btnCxl_onclick"}
        					];
        				this.fnPopRemote(sArg);
        			}
        			
        			if(gfnIsNull(this.dsUser.getColumn(0,"USER_ID"))) {
        				this.isUserChk = false;
        				this.fnUserIdEditColor(this.isUserChk);
        				this.tabPtnr.ptnrDetail.divViewCompBody03.btn_chkId.set_visible(true);
        				this.tabPtnr.ptnrDetail.divViewCompBody03.edtUserId.set_enable(true);
        			} else {
        				this.isUserChk = true;
        				this.fnUserIdEditColor(this.isUserChk);
        				this.tabPtnr.ptnrDetail.divViewCompBody03.btn_chkId.set_visible(false);
        				this.tabPtnr.ptnrDetail.divViewCompBody03.edtUserId.set_enable(false);
        			}
        			//소싱그룹콤보에 --선택-- 넣어줌
        			this.dslvl1.insertRow(0)
        			this.dslvl1.setColumn(0, "SRC_GRP_ID", "");
        			this.dslvl1.setColumn(0, "SRC_GRP_NM", gfnMultiLabel("EPRO_LABEL_00785"));
        			this.dslvl2.insertRow(0)
        			this.dslvl2.setColumn(0, "SRC_GRP_ID", "");
        			this.dslvl2.setColumn(0, "SRC_GRP_NM", gfnMultiLabel("EPRO_LABEL_00785"));
        			this.dslvl2.filter("UP_SRC_GRP_ID=='" + this.dsPtnr.getColumn(0,"LRG_GRP_ID") + "' || SRC_GRP_ID==''");
        			 //국가코드가 비교일 경우
        			if("CM16ETC" == this.dsPtnr.getColumn(0, "CD_NATION")) {
        				this.tabPtnr.ptnrDetail.divViewCompBody00.edtEctNation.set_visible(true)
        			}			
        			break;
        		case "checkPtnrUserId" :
        			if(this.dsUserChk.getRowCount()>0){
        				gfnAlert("EPRO_LABEL_01125");
        				this.isUserChk = false;
        				this.fnUserIdEditColor(this.isUserChk);
        			}else{
        				gfnAlert("EPRO_LABEL_01126");
        				this.isUserChk = true;
        				this.fnUserIdEditColor(this.isUserChk);
        			}
        			break;

        		case "savePtnrReq" :
        			gfnAlert(strErrMsg);
        			application.gv_loginFrame.set_formurl("frame::loginFrame.xfdl");
        			break;

        		case "saveTmpPtnrReq" :
        			if(strErrCd == 1) {
        				gfnAlert(strErrMsg);
        			} else if(this.isCnfrm) {
        				var sSvcID = "savePtnrReq";
        				var sController = "epro.ptnr.service.SPtnrService.savePtnrReq";
        				var sInDatasets = "dsPtnr=dsPtnr dsSelectGrp=dsSelectGrp:A dsUser=dsUser dsPtnrPlant=dsPtnrPlant:A dsPtnrMaker=dsPtnrMaker:A";
        				var sOutDatasets = "dsPtnr=dsPtnr";
        				var sCallbackFunc = "fnTrCallBack";

        				gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        			} else {
        				if(!gfnIsNull(this.dsPtnr.getColumn(0, "PTNR_ID"))) {
        					if(gfnIsNull(this.dsUser.getColumn(0,"USER_ID"))) {
        						this.isUserChk = false;
        						this.tabPtnr.ptnrDetail.divViewCompBody03.btn_chkId.set_visible(true);
        						this.tabPtnr.ptnrDetail.divViewCompBody03.edtUserId.set_enable(true);
        					} else {
        						this.isUserChk = true;
        						this.tabPtnr.ptnrDetail.divViewCompBody03.btn_chkId.set_visible(false);
        						this.tabPtnr.ptnrDetail.divViewCompBody03.edtUserId.set_enable(false);
        					}
        				}
        				gfnAlert(strErrMsg);
        			}
        			break;

        		default:
        			gfnAlert(strErrMsg);
        			break;
        	}
        }

        /**
          * @함수명  : fnPopCallBack
          * @input    : sPopupId  ,rtn
          * @return   :
          * @desc     : 팝업 트랜잭션 콜백
          */
        this.fnPopCallBack = function(sPopupId,rtn)
        {	
        	if(gfnIsNull(rtn)){ //업체등록 취소
        		if(sPopupId == "SPtnrBizNoSrchPopup"){
        			application.gv_loginFrame.set_formurl("frame::loginFrame.xfdl");
        		}
        		return;
        	}
        	if(sPopupId == "SPtnrBizNoSrchPopup"){ //업체등록화면
        		this.dsReturn.loadXML(rtn);
        		//SRC를 가져오기 위해 사용
        		var ptnrId = this.dsReturn.getColumn(0,"PTNR_ID");
        		this.dsPtnr.setColumn(0,"BIZ_NO",this.dsReturn.getColumn(0,"BIZ_NO"));
        		this.dsPtnr.setColumn(0,"PTNR_ID", gfnIsNull(ptnrId)?"":ptnrId);
        		this.fnSearch();

        	}else if(sPopupId == "CompFileUpDownPopup"){ //파일팝업
        		this.dsReturn.loadXML(rtn);
        		if(this.nFileRow==0){
        			this.dsPtnr.setColumn(0, "ATTCH_FILE_CNT", this.dsReturn.getColumn(0, "FILE_COUNT"));
        		}
        	}
        }

        /**
          * @함수명  : fnPwdCheck
          * @input    :
          * @return   :
          * @desc     : 비밀번호 유효성체크
          */
        this.fnPwdCheck = function()
        {
        	var pwd = this.dsUser.getColumn(0,"PWD");
        	var repwd = this.dsUser.getColumn(0,"PWDCH");
        	var SamePass_0 = 0; //동일문자 카운트
        	var SamePass_1 = 0; //연속성(+) 카운드
        	var SamePass_2 = 0; //연속성(-) 카운드
        	
        	var ds = "dsUser"
        	if(gfnIsNull(pwd)){
        		this.fnValidateFalse(ds, "PWD");
        		gfnAlert("EPRO_LABEL_00934");
        		return false;
        	}
        	
        	if(!gfnIsNull(pwd)) {
        		var arr = [];
        		if(pwd.length < 6 || pwd.length > 16){
        			//this.fnValidateFalse(ds, "PWD");
        			arr.push(gfnMultiLabel("EPRO_LABEL_01129"));
        			//return false;
        		}

        		if(!pwd.match(/([a-zA-Z0-9].*[!,@,#,$,%,^,&,*,?,_,~])|([!,@,#,$,%,^,&,*,?,_,~].*[a-zA-Z0-9])/)){
        			//this.fnValidateFalse(ds, "PWD");
        			//gfnAlert("EPRO_LABEL_01130");
        			arr.push(gfnMultiLabel("EPRO_LABEL_01130"));
        			//return false;
        		}

        		if(this.dsUser.getColumn(0,"USER_ID").indexOf(pwd) > -1){
        			//this.fnValidateFalse(ds, "PWD");
        			//gfnAlert("EPRO_LABEL_01131");
        			arr.push(gfnMultiLabel("EPRO_LABEL_01131"));
        			//return;
        		}

        		for(var i = 0 ; i < pwd.length; i++){
        			var chrPass_0 = pwd.charAt(i);
        			var chrPass_1 = pwd.charAt(i+1);
        			var chrPass_2 = pwd.charAt(i+2);

        			if(chrPass_0 == chrPass_1){
        				SamePass_0 = SamePass_0 + 1;
        			}

        			if(chrPass_0.charCodeAt(0) - chrPass_1.charCodeAt(0) == 1 && chrPass_1.charCodeAt(0) - chrPass_2.charCodeAt(0) == 1){
        				SamePass_1 = SamePass_1 + 1;
        			}

        			if(chrPass_0.charCodeAt(0) - chrPass_1.charCodeAt(0) == -1 && chrPass_1.charCodeAt(0) - chrPass_2.charCodeAt(0) == -1){
        				SamePass_2 = SamePass_2 + 1;
        			}
        		}

        		if(SamePass_0 > 1){
        			//this.fnValidateFalse(ds, "PWD");
        			//gfnAlert("EPRO_LABEL_01132");
        			arr.push(gfnMultiLabel("EPRO_LABEL_01132"));
        			//return false;
        		}

        		if(SamePass_1 > 1 || SamePass_2 > 1){
        			//this.fnValidateFalse(ds, "PWD");
        			//gfnAlert("EPRO_LABEL_01133");
        			arr.push(gfnMultiLabel("EPRO_LABEL_01133"));
        			//return false;
        		}
        		
        		if(0 < arr.length) {
        			var str = ""
        			for(var i=0; i<arr.length; i++) {
        				str += (i+1) + "." + arr[i] + "\n"
        			}
        			this.fnValidateFalse(ds, "PWD");
        			gfnAlert(str);
        			return false;
        		}
        		if(gfnIsNull(repwd)){     
        			this.fnValidateFalse(ds, "PWDCH");
        			gfnAlert("EPRO_LABEL_01128");
        			return false;
        		}
        		
        		if(pwd != repwd){
        			this.fnValidateFalse(ds, "PWDCH");
        			gfnAlert("EPRO_LABEL_00927");
        			return false;
        		}
        	}

        	
        	return true;
        }

        /**
          * @함수명  : fnOntextchanged
          * @input    : obj:Edit, e:nexacro.TextChangedEventInfo(이벤트변수)
          * @return   :
          * @desc     : 아이디 변경시 체크여부 초기화
          */
        this.fnOntextchanged = function(obj,e)
        {
        	if(obj.name == "edtUserId"){
        		this.isUserChk = false;
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
        		if("SR12BZ" == this.dsPtnr.getColumn(0, "CD_PTNR_CTGR")) {
        			this.tabPtnr.ptnrDetail.divViewCompBody02.edtZipNo.style.set_background("#f4f4f4ff")
        		} else if("SR12AB" == this.dsPtnr.getColumn(0, "CD_PTNR_CTGR")) {
        			this.tabPtnr.ptnrDetail.divViewCompBody02.edtZipNo.style.set_background("#ffffffff")
        		}
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
        		
        		this.tabPtnr.ptnrDetail.divViewCompBody04.medAst.style.set_background("#f4f4f4ff");
        	}else if(e.columnid =="EMP_CNT_KI"||e.columnid =="EMP_CNT_SA"||e.columnid =="EMP_CNT_ETC"){
        		var intEmpCntKi = nexacro.toNumber(gfnNvl(this.dsPtnr.getColumn(0,"EMP_CNT_KI"),0));
        		var intEmpCntSa = nexacro.toNumber(gfnNvl(this.dsPtnr.getColumn(0,"EMP_CNT_SA"),0));
        		var intEmpCntEtc = nexacro.toNumber(gfnNvl(this.dsPtnr.getColumn(0,"EMP_CNT_ETC"),0));
        		
        		this.dsPtnr.setColumn(0,"EMP_CNT",(intEmpCntKi+intEmpCntSa+intEmpCntEtc));
        		
        		var body04 = this.tabPtnr.ptnrDetail.divViewCompBody04;
        		this.fnValOnChanged(body04.medEmpCntKi, nexacro.ChangeEventInfo);
        		this.fnValOnChanged(body04.medEmpCntSa, nexacro.ChangeEventInfo);
        		this.fnValOnChanged(body04.medEmpCntEtc, nexacro.ChangeEventInfo);
        	}
        }

        /**
        	@function	fnGrdPtnrItemClick()
        	@desc   	첨부파일 팝업 호출
        */
        this.fnGrdPtnrItemClick = function(obj,e)
        {
        	if(4 == e.col) { 
        		var sArg = {
        						agv_sTableNm:"MM_PTNR"
        						,gv_arrFileKey:[this.dsPtnr.getColumn(0, "PTNR_ID"), this.dsPtnrFile.getColumn(e.row,"NO")]
        						,agv_data:this.dsPtnrFile
        						,agv_form:this
        						,agv_view:"N"
        					};
        		this.nFileRow =e.row;			
        		
        		gfnModalPop(this, "CompFileUpDownPopup", "CPOP::CompFileUpDownPopup.xfdl", sArg, "fnPopCallBack", 900, 300);
        	}else if(3 == e.col){
        		if(!gfnIsNull(this.dsPtnrFile.getColumn(e.row,"file"))){
        			var fileNm = this.dsPtnrFile.getColumn(e.row,"FILE_NM");
        			
        			if(fileNm == "EPRO_LABEL_01419"){
        				fileNm = "06_PSA 평가 Check List.zip";
        			} else if(fileNm == "EPRO_LABEL_01420"){
        				fileNm = "4M 신고 확약서.pptx";
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
           @function   fnPlantAdd()
           @desc      협력사공장 추가
        */
        this.fnPlantAdd = function(obj,e)
        {
        	this.dsPtnrPlant.set_enableevent(false);
        	var nRow = this.dsPtnrPlant.addRow();
        	this.dsPtnrPlant.setColumn(nRow, "PTNR_ID", this.dsPtnr.getColumn(0, "PTNR_ID"));
        	this.dsPtnrPlant.setColumn(nRow, "CRTR_ID", "");
        	this.dsPtnrPlant.setColumn(nRow, "CD_NATION", "");
        	this.dsPtnrPlant.setColumn(nRow, "LAST_CHGR_ID", "");
        	this.dsPtnrPlant.set_enableevent(true);
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
           @function   fnMakerDel()
           @desc       협력사 메이커삭제
        */
        this.fnMakerDel = function(obj,e)
        {
        	gfnChkDelConfirm(this.dsPtnrMaker);
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
        	obj.style.set_background("#ffffffff");
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

        /**
           @function   fnUserIdEditColor()
           @desc       ID체크 색 변화
        */
        this.fnUserIdEditColor = function(bool)
        {
        	if(bool) {
        		this.tabPtnr.ptnrDetail.divViewCompBody03.edtUserId.style.set_background("#ffffffff")
        	} else {
        		this.tabPtnr.ptnrDetail.divViewCompBody03.edtUserId.style.set_background("bisque")
        		
        	}
        }

        /**
           @function   fnUserIdOnchanged()
           @desc       Id 변경시 다시 중복체크
        */
        this.fnUserIdOnchanged = function(obj,e)
        {
        	this.isUserChk = false;
        	this.fnUserIdEditColor(this.isUserChk);
        }

        /**
           @function   fnValOchanged()
           @desc       입력값 변경시 표시 변경
        */
        this.fnValOnChanged = function(obj,e)
        {
        	obj.style.set_background("#ffffffff");
        	obj.removeEventHandler("onchanged",this.fnValOchanged, this);
        }

        /**
           @function   fnValOchanged()
           @desc       유효성체크 실패시 표시
        */
        this.fnValidateFalse = function(ds,col)
        {
        	var comp
        	if("dsUser" == ds) {	
        		var fRow = this.dsUserBind.findRow("COLID", col);
        		comp = this.dsUserBind.getColumn(fRow, "COMPID");	
        	} else if("dsPtnr" == ds) {
        		var fRow = this.dsPtnrBind.findRow("COLID", col);
        		comp = this.dsPtnrBind.getColumn(fRow, "COMPID");
        	}
        	var tabpage = comp.split(".")[2];
        	var arrPage = this.tabPtnr.components;
        	for(var i=0; i<arrPage.length; i++) {
        		if(tabpage == arrPage[i].id) {
        			this.tabPtnr.set_tabindex(i);
        			break;
        		}
        	}
        	
        	eval(comp + ".setFocus()");
        	if("RPTST_SRC_GRP_ID" == col || "LRG_GRP_ID" == col) {	
        		this.tabPtnr.srcGrp.divViewCompTitle00.setFocus();
        		return;	
        	} else if("ZIP_NO" == col) {
        		if("SR12BZ" == this.dsPtnr.getColumn(0, "CD_PTNR_CTGR")) {
        			eval(comp + ".style.set_background('bisque')");
        			return;
        		}
        	}
        	eval(comp + ".setFocus()");
        	eval(comp + ".style.set_background('bisque')");
        	eval(comp + ".addEventHandler('onchanged', this.fnValOnChanged, this)");
        }

        /**
           @function   fnOnheadclick()
           @desc       그리드 체크박스 전체 체크/해제
        */
        this.fnOnheadclick = function(obj,e)
        {
        	gfnSetGrdHeadCheckbox(obj, e)
        }

        /**
           @function   fnUserIdOnkeyup()
           @desc       유저아이디 enterkey 이벤트
        */
        this.fnUserIdOnkeyup = function(obj,e)
        {
        	if(e.keycode == 13) {
        		this.fnUserIdChk();
        	}
        }

        /**
           @function   
           @desc       리모콘
        */
        this.btnPram;
        this.remoteObjDiv;
        this.remoteDivName = "ptnrReq_remoteDiv";
        this.fnPopRemote = function(btnParam)
        {
        	var divName = this.remoteDivName;
        	if(this.components[divName]) this.components[divName].destroy();
        	this.btnPram = btnParam;
        	var objDiv = new Div(divName, "absolute", null, 10, 150, 30, "1%", null);
        	this.addChild(divName, objDiv);
        	this.remoteBtnDiv = objDiv;
        	objDiv.set_url("CPOP::CompRemotePop.xfdl");
        	objDiv.set_scrollbars("none");
        	objDiv.show();	 
        	
        	this.addEventHandler("ondrag", this.fnRemoteOndrag, this);
         	this.addEventHandler("ondragmove", this.fnRemoteOndragmove, this);
        	this.remoteobjDiv = objDiv;
        }

        /**
          * @함수명	: gfnRemoteOndrag
          * @input    	: obj(폼 오브젝트)
        				  e:nexacro.DragEventInfo(이벤트 변수)
          * @desc     	: 리모콘 ondrag 이벤트
          */
        this.fnRemoteOndrag = function(obj,e)
        {
        	var objDiv = this.remoteobjDiv

        	if(objDiv){
        		var refObj = e.fromreferenceobject;	
        		if(refObj.name==this.remoteDivName || refObj.name=="divTitle"){
        			objDiv.xx = (objDiv.getOffsetLeft() - e.clientX);
        			objDiv.yy = (objDiv.getOffsetTop() - e.clientY);
        			return true;
        		}
        	}
        }

        /**
          * @함수명	: gfnRemoteOndragmove
          * @input    	: obj(폼 오브젝트)
        				  e:nexacro.DragEventInfo(이벤트 변수)
          * @desc     	: 리모콘 ondragmove 이벤트
          */
        this.fnRemoteOndragmove = function(obj,e)
        {
        	var objDiv = this.remoteobjDiv
        	if(objDiv){
        		objDiv.move(nexacro.toNumber(e.clientX) + nexacro.toNumber(objDiv.xx), e.clientY + objDiv.yy);
        	}
        }

        
        /**
          * @함수명	: fnBtnPram
          * @desc     	: 팝업 리모콘
        */
        this.fnBtnPram = function()
        {
        	this.remoteBtnDiv.fnSetBtn(this.btnPram);
        	this.btnPram = null;
        	
        }
        this.preScrollPos = 0;
        this.CSampleDetail_onvscroll = function(obj,e)
        {
        	var objDiv = this.remoteobjDiv
        	var divTop = objDiv.top;
        	var divReTop;
        	if(this.preScrollPos < e.pos) {
        		divReTop = objDiv.top + (e.pos - this.preScrollPos);
        	} else {
        		divReTop = objDiv.top - (this.preScrollPos - e.pos);
        	}
        	this.preScrollPos = e.pos
        	
        	objDiv.set_top(divReTop)
        	//var scrollbottom = (e.pos + this.height);
        	//var objbottom = (objDiv.top + objDiv.fvHeight);	
        // 	if(objDiv.top < e.pos) {
        // 		objDiv.set_top(e.pos + 10);
        // 	} else if(scrollbottom < objbottom) {
        // 		var nbottom = scrollbottom - objDiv.fvHeight - 10
        // 		objDiv.set_top(nbottom);
        // 	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPtnr.addEventHandler("oncolumnchanged", this.dsPtnr_oncolumnchanged, this);
            this.dsLrgGrp.addEventHandler("onrowposchanged", this.fnLrgGrpOnrowposChanged, this);
            this.dsPtnrPlant.addEventHandler("cancolumnchange", this.fnDsPtnrPlantCancolumnchange, this);
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.addEventHandler("onvscroll", this.CSampleDetail_onvscroll, this);
            this.tabPtnr.ptnrDetail.divViewCompTitle00.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.tabPtnr.ptnrDetail.divViewCompBody03.edtUserId.addEventHandler("onchanged", this.fnUserIdOnchanged, this);
            this.tabPtnr.ptnrDetail.divViewCompBody03.edtUserId.addEventHandler("onkeyup", this.fnUserIdOnkeyup, this);
            this.tabPtnr.ptnrDetail.divViewCompBody03.btn_chkId.addEventHandler("onclick", this.fnUserIdChkBtn, this);
            this.tabPtnr.ptnrDetail.divViewCompTitle02.staViewCompTitle02.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.tabPtnr.ptnrDetail.divViewCompTitle01.staViewCompTitle01.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.tabPtnr.ptnrDetail.divViewCompBody02.btnZipNo.addEventHandler("onclick", this.fnSearchZipNo, this);
            this.tabPtnr.ptnrDetail.divViewCompBody04.txtMjrCstmr.addEventHandler("oneditclick", this.Tab01_tabp01_TextArea00_oneditclick, this);
            this.tabPtnr.ptnrDetail.divViewCompBody04.staEmpCntKi.addEventHandler("onclick", this.divViewCompBody01_staCdEvalRunStts00_onclick, this);
            this.tabPtnr.ptnrDetail.divViewCompTitle06.btnEvalView.addEventHandler("onclick", this.fnPlantAdd, this);
            this.tabPtnr.ptnrDetail.divViewCompTitle06.btnEvalStr.addEventHandler("onclick", this.fnPlantDel, this);
            this.tabPtnr.ptnrDetail.divViewCompBody06.grdPlant.addEventHandler("oncellclick", this.fnOnComboDropDown, this);
            this.tabPtnr.ptnrDetail.divViewCompBody06.grdPlant.addEventHandler("onheadclick", this.fnOnheadclick, this);
            this.tabPtnr.ptnrDetail.divViewCompBody00.cldBizBgnDay.addEventHandler("onchanged", this.tabPtnr_ptnrDetail_divViewCompBody00_cldBizBgnDay_onchanged, this);
            this.tabPtnr.ptnrDetail.divViewCompBody00.edtPtnrNm.addEventHandler("onchanged", this.tabPtnr_ptnrDetail_divViewCompBody00_edtPtnrNm_onchanged, this);
            this.tabPtnr.ptnrDetail.divViewCompBody00.staRmark.addEventHandler("onclick", this.Tab00_tabpage1_divViewCompBody00_staRmark_onclick, this);
            this.tabPtnr.ptnrDetail.divViewCompBody00.cboNation.addEventHandler("onitemchanged", this.fncboNationOnitemchanged, this);
            this.tabPtnr.ptnrDetail.divViewCompTitle07.btnEvalView.addEventHandler("onclick", this.fnMakerAdd, this);
            this.tabPtnr.ptnrDetail.divViewCompTitle07.btnEvalStr.addEventHandler("onclick", this.fnMakerDel, this);
            this.tabPtnr.ptnrDetail.divViewCompBody07.grdMaker.addEventHandler("onheadclick", this.fnOnheadclick, this);
            this.tabPtnr.ptnrDetail.divViewCompBody05.edtCrdtGrd.addEventHandler("onkillfocus", this.Edit03_onkillfocus, this);
            this.tabPtnr.ptnrDetail.divViewCompBody05.edtCrdtGrd.addEventHandler("onsetfocus", this.Edit04_onsetfocus, this);
            this.tabPtnr.ptnrDetail.divViewCompBody05.edtCacheGrade.addEventHandler("onkillfocus", this.Edit03_onkillfocus, this);
            this.tabPtnr.ptnrDetail.divViewCompBody05.edtCacheGrade.addEventHandler("onsetfocus", this.Edit04_onsetfocus, this);
            this.tabPtnr.ptnrDetail.divViewCompBody05.edtCrdtEvalOrg.addEventHandler("onkillfocus", this.Edit03_onkillfocus, this);
            this.tabPtnr.ptnrDetail.divViewCompBody05.edtCrdtEvalOrg.addEventHandler("onsetfocus", this.Edit04_onsetfocus, this);
            this.tabPtnr.srcGrp.divViewCompTitle01.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.tabPtnr.srcGrp.divViewCompBody01.grdMdlGrp.addEventHandler("oncellclick", this.fnGrdMdlGrpOncellClick, this);
            this.tabPtnr.srcGrp.divViewCompBody01.grdSelectGrp.addEventHandler("oncellclick", this.fnGrdSeleteGrpOncellClick, this);
            this.tabPtnr.srcGrp.divViewCompBody01.grdSelectGrp.addEventHandler("onheadclick", this.fnGrdSeleteGrpOnHeadclick, this);
            this.tabPtnr.srcGrp.divViewCompTitle00.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.tabPtnr.srcGrp.cboSrclvl1.addEventHandler("onitemchanged", this.fnCboSrclvl1OnitemChanged, this);
            this.tabPtnr.relateDocument.divViewCompBody05.grdPtnrItem.addEventHandler("oncellclick", this.fnGrdPtnrItemClick, this);
            this.wbBizNo.addEventHandler("onusernotify", this.fnOnusernotify, this);

        };

        this.loadIncludeScript("SPtnrReqDetail.xfdl", true);

       
    };
}
)();
