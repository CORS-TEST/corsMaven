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
                this.set_name("BPorDetail");
                this.set_titletext("발주상세");
                this.set_scrollbars("autoboth");
                this._setFormPosition(0,0,1220,1541);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj.getSetter("userdata").set("");
            obj._setContents("<ColumnInfo><ColuPmn id=\"PART_PAMT_RT\" size=\"22\" type=\"int\"/><Column id=\"CHRGR_ID\" size=\"50\" type=\"string\"/><Column id=\"CD_PYMT_CNDTN_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_PYMT_CNDTN\" size=\"40\" type=\"string\"/><Column id=\"ALT_EXCHG_RT_FIXD_YN\" size=\"1\" type=\"string\"/><Column id=\"PO_DAY\" size=\"8\" type=\"string\"/><Column id=\"TKEY\" size=\"20\" type=\"string\"/><Column id=\"PART_PAMT_DAY\" size=\"8\" type=\"string\"/><Column id=\"ADV_PYMT_RT\" size=\"22\" type=\"int\"/><Column id=\"TTL\" size=\"600\" type=\"string\"/><Column id=\"EXCHG_RT\" size=\"22\" type=\"int\"/><Column id=\"CRTR_ID\" size=\"50\" type=\"string\"/><Column id=\"WRTR_NM\" size=\"30\" type=\"string\"/><Column id=\"CNCL_RSN\" size=\"1500\" type=\"string\"/><Column id=\"CD_DOC_CTGR_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_DOC_CTGR\" size=\"40\" type=\"string\"/><Column id=\"PO_AMT\" size=\"22\" type=\"BIGDECIMAL\"/><Column id=\"TEL\" size=\"150\" type=\"string\"/><Column id=\"EMAIL\" size=\"100\" type=\"string\"/><Column id=\"LAST_CHGR_ID\" size=\"50\" type=\"string\"/><Column id=\"FAX\" size=\"50\" type=\"string\"/><Column id=\"PTNR_ID\" size=\"20\" type=\"string\"/><Column id=\"ADV_PYMT_DAY\" size=\"8\" type=\"string\"/><Column id=\"CD_PO_CRNC_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_PO_CRNC\" size=\"40\" type=\"string\"/><Column id=\"CD_PO_STTS_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_PO_STTS\" size=\"40\" type=\"string\"/><Column id=\"BALANCE_AMT_DAY\" size=\"8\" type=\"string\"/><Column id=\"CD_DLV_MTHD_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_DLV_MTHD\" size=\"40\" type=\"string\"/><Column id=\"WRTR_ID\" size=\"50\" type=\"string\"/><Column id=\"ATTCH_FILE_CNT\" size=\"22\" type=\"int\"/><Column id=\"CD_PO_CTGR_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_PO_CTGR\" size=\"40\" type=\"string\"/><Column id=\"RMARK\" size=\"3000\" type=\"string\"/><Column id=\"BDGT_NO\" size=\"300\" type=\"string\"/><Column id=\"BALANCE_AMT_RT\" size=\"22\" type=\"int\"/><Column id=\"CHRGR_NM\" size=\"30\" type=\"string\"/><Column id=\"PO_ISSUE_DT\" size=\"7\" type=\"datetime\"/><Column id=\"PO_NO\" size=\"20\" type=\"string\"/><Column id=\"LAST_CHG_DT\" size=\"7\" type=\"datetime\"/><Column id=\"APP_DOC_ID\" size=\"20\" type=\"string\"/><Column id=\"CRT_DT\" size=\"7\" type=\"datetime\"/><Column type=\"string\" id=\"RCVR_NM\" size=\"30\"/><Column type=\"string\" id=\"RCV_DT\" size=\"7\"/><Column type=\"string\" id=\"RCVR_ID\" size=\"50\"/><Column type=\"string\" id=\"BRANCH_CD\" size=\"50\"/><Column id=\"CD_FCTRY\" type=\"STRING\" size=\"40\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PR_ITEM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PTNR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TNDR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TNDR_ODR\" type=\"STRING\" size=\"256\"/><Column id=\"RFQ_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RFQ_ODR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CNST_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"GOALAMT\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_PARTIAL_DLV\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_PAY_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_GR_PYMT\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_GR_EVAL\" type=\"STRING\" size=\"256\"/><Column id=\"COREXP_KIDS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PAY_CTGR\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_GR_APP\" type=\"STRING\" size=\"256\"/><Column id=\"EXCHG_RMARK\" type=\"STRING\" size=\"256\"/><Column id=\"VAT\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DLV_AREA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPoItem", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SRC_GRP_NM\" size=\"0\" type=\"string\"/><Column id=\"CD_PO_ITM_STTS_NM\" size=\"0\" type=\"string\"/><Column id=\"CD_PO_ITM_STTS\" size=\"0\" type=\"string\"/><Column id=\"RCV_DT\" size=\"0\" type=\"datetime\"/><Column id=\"FWD_REMARK\" size=\"0\" type=\"string\"/><Column id=\"ITM_NO\" size=\"0\" type=\"INT\"/><Column id=\"ACNT_CD_NM\" size=\"0\" type=\"string\"/><Column id=\"ACNT_CD\" size=\"0\" type=\"string\"/><Column id=\"CRTR_ID\" size=\"0\" type=\"string\"/><Column id=\"DLV_REQ_DAY\" size=\"0\" type=\"string\"/><Column id=\"RCVR_NM\" size=\"0\" type=\"string\"/><Column id=\"DLV_AVL_DAY\" size=\"0\" type=\"string\"/><Column id=\"MTRL_GRP_ID\" size=\"0\" type=\"string\"/><Column id=\"PO_AMT\" size=\"100\" type=\"BIGDECIMAL\"/><Column id=\"DTL_ADDR\" size=\"0\" type=\"string\"/><Column id=\"QTY\" size=\"100\" type=\"BigDecimal\"/><Column id=\"MTRL_NM\" size=\"0\" type=\"string\"/><Column id=\"TNDR_ITEM_ID\" size=\"0\" type=\"string\"/><Column id=\"ADDR\" size=\"0\" type=\"string\"/><Column id=\"MTRL_CD_NM\" size=\"0\" type=\"string\"/><Column id=\"MTRL_CD\" size=\"0\" type=\"string\"/><Column id=\"PO_ITEM_ID\" size=\"0\" type=\"string\"/><Column id=\"LAST_CHGR_ID\" size=\"0\" type=\"string\"/><Column id=\"SRC_GRP_ID\" size=\"0\" type=\"string\"/><Column id=\"PTNR_ID\" size=\"0\" type=\"string\"/><Column id=\"RCVR_ID\" size=\"0\" type=\"string\"/><Column id=\"CD_FCTRY_NM\" size=\"0\" type=\"string\"/><Column id=\"CD_FCTRY\" size=\"0\" type=\"string\"/><Column id=\"CNTR_ITEM_ID\" size=\"0\" type=\"string\"/><Column id=\"COST_CD_NM\" size=\"0\" type=\"string\"/><Column id=\"COST_CD\" size=\"0\" type=\"string\"/><Column id=\"CD_UNIT_NM\" size=\"0\" type=\"string\"/><Column id=\"CD_UNIT\" size=\"0\" type=\"string\"/><Column id=\"INSP_CHRGR_ID\" size=\"0\" type=\"string\"/><Column id=\"INSP_CHRGR_ID2\" size=\"0\" type=\"string\"/><Column id=\"INSP_CHRGR_NM\" size=\"0\" type=\"string\"/><Column id=\"MTRL_GRP_NM\" size=\"0\" type=\"string\"/><Column id=\"DLV_PLC_NM\" size=\"0\" type=\"string\"/><Column id=\"ATTCH_FILE_CNT\" size=\"0\" type=\"int\"/><Column id=\"ACNT_NM\" size=\"0\" type=\"string\"/><Column id=\"RMARK\" size=\"0\" type=\"string\"/><Column id=\"PR_ITEM_ID\" size=\"0\" type=\"string\"/><Column id=\"LAST_CHG_DT\" size=\"0\" type=\"datetime\"/><Column id=\"PO_NO\" size=\"0\" type=\"string\"/><Column id=\"ZIP_NO\" size=\"0\" type=\"string\"/><Column id=\"PO_PRICE\" size=\"0\" type=\"BIGDECIMAL\"/><Column id=\"CRT_DT\" size=\"0\" type=\"datetime\"/><Column id=\"BRANCH_CD\" size=\"0\" type=\"string\"/><Column id=\"CHECKED\" type=\"STRING\" size=\"0\"/><Column id=\"RFQ_ODR\" type=\"STRING\" size=\"0\"/><Column id=\"TNDR_ODR\" type=\"STRING\" size=\"0\"/><Column id=\"RFQ_REQ_NO\" type=\"STRING\" size=\"0\"/><Column id=\"TNDR_NO\" type=\"STRING\" size=\"0\"/><Column id=\"PR_ITEM_ID\" type=\"STRING\" size=\"0\"/><Column id=\"PR_NO\" type=\"STRING\" size=\"0\"/><Column id=\"DLV_AVL_DAY\" size=\"0\" type=\"string\"/><Column id=\"COST_NM\" type=\"STRING\" size=\"0\"/><Column type=\"string\" id=\"REQR_ID\" size=\"0\"/><Column type=\"string\" id=\"REQR_NM\" size=\"0\"/><Column id=\"REQ_DT\" type=\"STRING\" size=\"0\"/><Column id=\"DLV_OVR_RT\" type=\"STRING\" size=\"0\"/><Column id=\"ALT_DLV_CMPLT\" type=\"STRING\" size=\"0\"/><Column id=\"GR_ACNT_CD\" type=\"STRING\" size=\"0\"/><Column id=\"SPEC_FILE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"VAT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPoHsty", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHRGR_ID\" size=\"50\" type=\"string\"/><Column id=\"DT\" size=\"7\" type=\"string\"/><Column id=\"CHRGR_NM\" size=\"30\" type=\"string\"/><Column id=\"SN\" size=\"22\" type=\"int\"/><Column id=\"PO_NO\" size=\"20\" type=\"string\"/><Column id=\"CNTNT\" size=\"1500\" type=\"string\"/><Column id=\"TYPE\" size=\"300\" type=\"string\"/><Column id=\"BRANCH_CD\" size=\"20\" type=\"string\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReturn", this);
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

            obj = new Dataset("dsBdgt", this);
            obj._setContents("<ColumnInfo><Column id=\"PO_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPoPay", this);
            obj._setContents("<ColumnInfo><Column id=\"ODR\" type=\"STRING\" size=\"256\"/><Column id=\"PYMT_RT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PYMT_PLN_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PYMT_PLN_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PO_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_PRCS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"INSP_REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_GR_PYMT\" type=\"STRING\" size=\"256\"/><Column id=\"RMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPoDlvItem", this);
            obj._setContents("<ColumnInfo><Column id=\"DLV_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"UNT_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"AMT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSpecFile", this);
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PO_ITEM_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPoFile", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdPO10", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdPO11", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdPO13", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdPO14", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM10", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM11", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM13", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM15", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdIV20", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdIV21", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdIV30", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_1", "absolute", "0", "0", null, "34", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.getSetter("objNm").set("DIV-입찰 진행 상세 ");
            obj.set_taborder("15");
            this.addChild(obj.name, obj);
            obj = new Edit("edtPoNo", "absolute", "160", "6", "220", "21", null, null, this.div_1);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_cssclass("edt_default_r");
            obj.getSetter("objNm").set("발주번호");
            this.div_1.addChild(obj.name, obj);
            obj = new Combo("cboDocType", "absolute", "5", "6", "150", "21", null, null, this.div_1);
            this.div_1.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_innerdataset("@dsCdCM10");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_cssclass("cbo_default_r");
            obj.set_enable("false");
            obj.getSetter("objNm").set("구매유형");

            obj = new Div("div_2", "absolute", "0", "44", null, "24", "10", null, this);
            obj.set_taborder("16");
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", null, "255", "24", null, "0", this.div_2);
            obj.set_taborder("3");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 2 17");
            this.div_2.addChild(obj.name, obj);

            obj = new Div("div_21", "absolute", "0%", "73", null, "328", "15", null, this);
            obj.set_taborder("17");
            this.addChild(obj.name, obj);
            obj = new Tab("Tab01", "absolute", "0", "0", null, "324", "0", null, this.div_21);
            obj.set_taborder("0");
            obj.set_preload("true");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.set_cssclass("tab_default");
            this.div_21.addChild(obj.name, obj);
            obj = new Tabpage("tabp01", this.div_21.Tab01);
            obj.set_text("기본정보");
            obj.set_scrollbars("none");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("기본정보");
            this.div_21.Tab01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "5", null, "33", "0", null, this.div_21.Tab01.tabp01);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staPoDay", "absolute", "581", "5", "160", "33", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("2");
            obj.set_text("발주일자");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("발주일자");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staTtl", "absolute", "0", "5", "171", "33", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("0");
            obj.set_text("발주서명");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "37", null, "33", "0", null, this.div_21.Tab01.tabp01);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staPoCtgr", "absolute", "581", "37", "160", "33", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("9");
            obj.set_text("발주유형");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("발주유형");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staAmtVat", "absolute", "0", "37", "171", "33", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("6");
            obj.set_text("공급가/부가세");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "69", null, "33", "0", null, this.div_21.Tab01.tabp01);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staDlvArea", "absolute", "581", "69", "160", "33", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("15");
            obj.set_text("배송처");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("배송처");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staPoAmt", "absolute", "0", "69", "171", "33", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("13");
            obj.set_text("총금액");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine03", "absolute", "0", "101", null, "33", "0", null, this.div_21.Tab01.tabp01);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staPymtCndtn", "absolute", "581", "101", "160", "33", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("20");
            obj.set_text("지급계정");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("지급계정");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staPtnr", "absolute", "0", "101", "171", "33", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("17");
            obj.set_text("협력사");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine04", "absolute", "581", "165", null, "33", "0", null, this.div_21.Tab01.tabp01);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staPayCtgr", "absolute", "581", "165", "160", "33", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("25");
            obj.set_text("정산유형");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("정산유형");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine05", "absolute", "581", "197", null, "33", "0", null, this.div_21.Tab01.tabp01);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staTaxKind", "absolute", "581", "197", "160", "33", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("27");
            obj.set_text("계산서종류");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("계산서종류");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine06", "absolute", "581", "229", null, "33", "0", null, this.div_21.Tab01.tabp01);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staTaxCd", "absolute", "581", "229", "160", "33", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("29");
            obj.set_text("계산서구분");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("계산서종류");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine07", "absolute", "581", "261", null, "33", "0", null, this.div_21.Tab01.tabp01);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staCardNo", "absolute", "581", "261", "160", "33", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("31");
            obj.set_text("카드번호");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("카드번호");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staCardAprvNo", "absolute", "903", "261", "140", "33", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("33");
            obj.set_text("카드 승인번호");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("카드 승인번호");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staDlvMthd", "absolute", "903", "5", "140", "33", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("4");
            obj.set_text("납품방법");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("납품방법");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine08", "absolute", "581", "133", null, "33", "0", null, this.div_21.Tab01.tabp01);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staTotPayCnt", "absolute", "581", "133", "160", "33", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("22");
            obj.set_text("지급회차");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("지급회차");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staAltPartialDlv", "absolute", "903", "37", "140", "33", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("11");
            obj.set_text("분할납품");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("분할납품");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Grid("grdPymtItem", "absolute", "0", "137", "580", null, null, "4", this.div_21.Tab01.tabp01);
            obj.set_taborder("44");
            obj.set_autoenter("select");
            obj.set_selecttype("cell");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.getSetter("f_filter").set("Y");
            obj.getSetter("f_excel").set("Y");
            obj.getSetter("f_hide").set("Y");
            obj.getSetter("f_find").set("Y");
            obj.getSetter("f_sort").set("Y");
            obj.getSetter("f_fix").set("Y");
            obj.getSetter("f_height").set("Y");
            obj.getSetter("f_save").set("Y");
            obj.getSetter("f_mode").set("Y");
            obj.getSetter("f_init").set("Y");
            obj.getSetter("f_colSize").set("Y");
            obj.getSetter("f_copyitemcolumn").set("MTRL_CD");
            obj.getSetter("f_editcol").set("MTRL_CD");
            obj.getSetter("f_version").set("Y");
            obj.set_autofittype("col");
            obj.getSetter("objNm").set("지급조건그리드");
            obj._setContents("<Formats><Format id=\"MMODE\"><Columns><Column size=\"50\"/><Column size=\"90\"/><Column size=\"130\"/><Column size=\"310\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"회차\"/><Cell col=\"1\" text=\"지급율(%)\"/><Cell col=\"2\" text=\"지급금액\"/><Cell col=\"3\" text=\"지급조건\"/></Band><Band id=\"body\"><Cell text=\"bind:ODR\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"masknumber\" text=\"bind:PYMT_RT\" mask=\"#,##0.00\" maskchar=\"_\" editdisplay=\"edit\" editlimitbymask=\"decimal\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:PYMT_PLN_AMT\" mask=\"#,##0\" editdisplay=\"edit\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"text\" style=\"align:left;\" text=\"bind:RMARK\" calendardisplay=\"edit\" calendardisplaynulltype=\"none\"/></Band></Format><Format id=\"VMODE\"><Columns><Column size=\"50\"/><Column size=\"90\"/><Column size=\"130\"/><Column size=\"310\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"회차\"/><Cell col=\"1\" text=\"지급율(%)\"/><Cell col=\"2\" text=\"지급금액\"/><Cell col=\"3\" text=\"지급조건\"/></Band><Band id=\"body\"><Cell style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:ODR\" tooltiptext=\"bind:ODR\"/><Cell col=\"1\" displaytype=\"number\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:PYMT_RT\" mask=\"#,##0.00\" tooltiptext=\"bind:PYMT_RT\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:PYMT_PLN_AMT\" mask=\"#,##0\" editdisplay=\"edit\" tooltiptext=\"bind:PYMT_PLN_AMT\"/><Cell col=\"3\" displaytype=\"normal\" style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:RMARK\" calendardisplay=\"edit\" calendardisplaynulltype=\"none\" tooltiptext=\"bind:RMARK\"/></Band></Format></Formats>");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new MaskEdit("maeTotAmt", "absolute", "177", "73", "220", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("14");
            obj.set_readonly("true");
            obj.set_mask("#,##0");
            obj.set_cssclass("input_point");
            obj.set_enable("false");
            obj.style.set_color("blue");
            obj.style.set_font("bold 10 Dotum");
            obj.getSetter("objNm").set("총금액");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new MaskEdit("maeVat", "absolute", "290", "42", "108", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_mask("#,##0");
            obj.set_cssclass("input_point");
            obj.set_enable("false");
            obj.style.set_color("blue");
            obj.style.set_font("bold 10 Dotum");
            obj.getSetter("objNm").set("부가세");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new MaskEdit("maePoAm", "absolute", "177", "42", "108", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_mask("#,##0");
            obj.set_cssclass("input_point");
            obj.set_enable("false");
            obj.style.set_color("blue");
            obj.style.set_font("bold 10 Dotum");
            obj.getSetter("objNm").set("공급가");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtPtnrNm", "absolute", "282", "105", "269", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("19");
            obj.getSetter("objNm").set("협력사명");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtPtnrNo", "absolute", "177", "105", "100", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("18");
            obj.set_readonly("true");
            obj.set_cssclass("edt_default_r");
            obj.getSetter("objNm").set("협력사번호");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtTtl", "absolute", "177", "9", "396", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("1");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("발주서명");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Calendar("calPoDay", "absolute", "747", "9", "150", "24", null, null, this.div_21.Tab01.tabp01);
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy.MM.dd ddd");
            obj.set_editformat("yyyy.MM.dd ddd");
            obj.getSetter("objNm").set("발주일자");
            obj = new Combo("cboPoCtgr", "absolute", "747", "42", "150", "24", null, null, this.div_21.Tab01.tabp01);
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.set_innerdataset("@dsCdPO13");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("배송처");
            obj = new Edit("edtCardNo", "absolute", "747", "265", "150", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("32");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("카드번호");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtCardAprvNo", "absolute", "1049", "265", "149", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("34");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("카드승인번호");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Combo("cboTaxCd", "absolute", "747", "233", "300", "24", null, null, this.div_21.Tab01.tabp01);
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("30");
            obj.set_innerdataset("@dsCdIV21");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("계산서구분");
            obj = new Combo("cboTaxKind", "absolute", "747", "201", "300", "24", null, null, this.div_21.Tab01.tabp01);
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            var cboTaxKind_innerdataset = new Dataset("cboTaxKind_innerdataset", this.div_21.Tab01.tabp01.cboTaxKind);
            cboTaxKind_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows/>");
            obj.set_innerdataset(cboTaxKind_innerdataset);
            obj.set_taborder("28");
            obj.set_innerdataset("@dsCdIV20");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("계산서종류");
            obj = new Combo("cboPayCtgr", "absolute", "747", "169", "150", "24", null, null, this.div_21.Tab01.tabp01);
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("26");
            obj.set_innerdataset("@dsCdIV30");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("정산유형");
            obj = new CheckBox("chkGrPymt", "absolute", "896", "137", "148", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("24");
            obj.set_text("입고 실적에 따라 지급");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_cssclass("chk_default");
            obj.getSetter("objNm").set("입고 실적에 따라 지급");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "747", "137", "58", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("45");
            obj.set_text("회차 지급");
            obj.getSetter("objNm").set("%");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Combo("cboTotPayCnt", "absolute", "747", "137", "61", "24", null, null, this.div_21.Tab01.tabp01);
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            var cboTotPayCnt_innerdataset = new Dataset("cboTotPayCnt_innerdataset", this.div_21.Tab01.tabp01.cboTotPayCnt);
            cboTotPayCnt_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">6</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">7</Col></Row><Row><Col id=\"codecolumn\">8</Col><Col id=\"datacolumn\">8</Col></Row><Row><Col id=\"codecolumn\">9</Col><Col id=\"datacolumn\">9</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row></Rows>");
            obj.set_innerdataset(cboTotPayCnt_innerdataset);
            obj.set_taborder("23");
            obj.set_value("1");
            obj.set_text("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("지급회차 콤보");
            obj.set_index("0");
            obj = new Combo("cboPymtCndtn", "absolute", "747", "106", "150", "24", null, null, this.div_21.Tab01.tabp01);
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("21");
            obj.set_innerdataset("@dsCdCM13");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("지급계정");
            obj = new Combo("cboDlvAddr", "absolute", "747", "73", "150", "24", null, null, this.div_21.Tab01.tabp01);
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("16");
            obj.set_innerdataset("@dsCdPO14");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("배송처");
            obj = new Edit("edtDlvMthd", "absolute", "1049", "9", "149", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("5");
            obj.set_enable("false");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "818", "138", "58", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("48");
            obj.set_text("회차 지급");
            obj.getSetter("objNm").set("%");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Radio("rdoPartialDlv", "absolute", "1049", "42", "149", "24", null, null, this.div_21.Tab01.tabp01);
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            var rdoPartialDlv_innerdataset = new Dataset("rdoPartialDlv_innerdataset", this.div_21.Tab01.tabp01.rdoPartialDlv);
            rdoPartialDlv_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">가능</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">불가능</Col></Row></Rows>");
            obj.set_innerdataset(rdoPartialDlv_innerdataset);
            obj.set_taborder("12");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_cssclass("rdo_default");
            obj.getSetter("objNm").set("분할납품");
            obj = new Button("btnPntr", "absolute", "551", "106", "24", "21", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("50");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("구매요청자 검색 버튼");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Tabpage("tabp02", this.div_21.Tab01);
            obj.set_text("통화정보");
            this.div_21.Tab01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "37", null, "33", "0", null, this.div_21.Tab01.tabp02);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Static("staExchgRt", "absolute", "0", "37", "171", "33", null, null, this.div_21.Tab01.tabp02);
            obj.set_taborder("2");
            obj.set_text("환율");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "5", null, "33", "0", null, this.div_21.Tab01.tabp02);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Static("staPoCrnc", "absolute", "0", "5", "171", "33", null, null, this.div_21.Tab01.tabp02);
            obj.set_taborder("0");
            obj.set_text("발주통화");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new MaskEdit("maeExchgRt", "absolute", "177", "41", "78", "24", null, null, this.div_21.Tab01.tabp02);
            obj.set_taborder("3");
            obj.set_mask("#,##0.00");
            obj.set_cssclass("mae_default");
            obj.getSetter("objNm").set("환율");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "258", "41", "17", "24", null, null, this.div_21.Tab01.tabp02);
            obj.set_taborder("7");
            obj.set_text("\\");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Combo("cboPoCrnc", "absolute", "177", "9", "181", "24", null, null, this.div_21.Tab01.tabp02);
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_cdCM15");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("발주통화");
            obj = new Edit("edtExchgRmark", "absolute", "288", "41", "460", "24", null, null, this.div_21.Tab01.tabp02);
            obj.set_taborder("4");
            obj.set_displaynulltext("고시환율 기준 입력");
            obj.set_lengthunit("utf8");
            obj.style.set_displaynulltextcolor("#999999ff");
            obj.getSetter("objNm").set("고시환율기준");
            this.div_21.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Tabpage("tabp03", this.div_21.Tab01);
            obj.set_text("특이사항");
            obj.getSetter("objNm").set("특이사항");
            this.div_21.Tab01.addChild(obj.name, obj);
            obj = new TextArea("txtRmark", "absolute", "0", "5", null, "263", "0", null, this.div_21.Tab01.tabp03);
            obj.set_taborder("0");
            obj.set_scrollbars("none");
            obj.set_wordwrap("char");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("500");
            obj.getSetter("objNm").set("특이사항");
            this.div_21.Tab01.tabp03.addChild(obj.name, obj);
            obj = new Tabpage("tabp04", this.div_21.Tab01);
            obj.set_text("첨부파일");
            obj.set_url("CCOMP::CompNFileUpDown.xfdl");
            obj.getSetter("objNm").set("첨부파일");
            this.div_21.Tab01.addChild(obj.name, obj);
            obj = new Tabpage("tabp05", this.div_21.Tab01);
            obj.set_text("발주담당자");
            obj.getSetter("objNm").set("발주담당자");
            this.div_21.Tab01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine03", "absolute", "0", "101", null, "33", "0", null, this.div_21.Tab01.tabp05);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_21.Tab01.tabp05.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "37", null, "33", "0", null, this.div_21.Tab01.tabp05);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_21.Tab01.tabp05.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "5", null, "33", "0", null, this.div_21.Tab01.tabp05);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_21.Tab01.tabp05.addChild(obj.name, obj);
            obj = new Static("staWrtr", "absolute", "0", "5", "171", "33", null, null, this.div_21.Tab01.tabp05);
            obj.set_taborder("0");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_21.Tab01.tabp05.addChild(obj.name, obj);
            obj = new Static("staTel", "absolute", "0", "37", "171", "33", null, null, this.div_21.Tab01.tabp05);
            obj.set_taborder("3");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_21.Tab01.tabp05.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "69", null, "33", "0", null, this.div_21.Tab01.tabp05);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_21.Tab01.tabp05.addChild(obj.name, obj);
            obj = new Static("staEmail", "absolute", "0", "69", "171", "33", null, null, this.div_21.Tab01.tabp05);
            obj.set_taborder("5");
            obj.set_text("e-Mail");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_21.Tab01.tabp05.addChild(obj.name, obj);
            obj = new Static("staFax", "absolute", "0", "101", "171", "33", null, null, this.div_21.Tab01.tabp05);
            obj.set_taborder("7");
            obj.set_text("Fax");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_21.Tab01.tabp05.addChild(obj.name, obj);
            obj = new Edit("edtFax", "absolute", "177", "105", "356", "24", null, null, this.div_21.Tab01.tabp05);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_cssclass("edt_default_r");
            obj.getSetter("objNm").set("Fax");
            this.div_21.Tab01.tabp05.addChild(obj.name, obj);
            obj = new Edit("edtEmail", "absolute", "177", "73", "356", "24", null, null, this.div_21.Tab01.tabp05);
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.set_cssclass("edt_default_r");
            obj.getSetter("objNm").set("e-Mail");
            this.div_21.Tab01.tabp05.addChild(obj.name, obj);
            obj = new Edit("edtTel", "absolute", "177", "41", "356", "24", null, null, this.div_21.Tab01.tabp05);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_cssclass("edt_default_r");
            obj.getSetter("objNm").set("전화번호");
            this.div_21.Tab01.tabp05.addChild(obj.name, obj);
            obj = new Edit("edtWrtrNm", "absolute", "282", "9", "250", "24", null, null, this.div_21.Tab01.tabp05);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_cssclass("edt_default_r");
            obj.getSetter("objNm").set("담당자명");
            this.div_21.Tab01.tabp05.addChild(obj.name, obj);
            obj = new Edit("edtWrtrId", "absolute", "177", "9", "100", "24", null, null, this.div_21.Tab01.tabp05);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_cssclass("edt_default_r");
            obj.getSetter("objNm").set("담당자ID");
            this.div_21.Tab01.tabp05.addChild(obj.name, obj);
            obj = new Tabpage("tabp06", this.div_21.Tab01);
            obj.set_text("발주이력");
            obj.getSetter("objNm").set("발주이력");
            this.div_21.Tab01.addChild(obj.name, obj);
            obj = new Grid("grdPoHsty", "absolute", "0%", "5", null, null, "0", "1", this.div_21.Tab01.tabp06);
            obj.set_taborder("0");
            obj.set_binddataset("dsPoHsty");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"62\"/><Column size=\"142\"/><Column size=\"828\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"담당자\"/><Cell col=\"3\" text=\"일시\"/><Cell col=\"4\" text=\"내용\"/></Band><Band id=\"body\" style=\"cellpadding:2 2 2 2;\"><Cell text=\"bind:SN\" expr=\"expr:dataset.rowcount - currow\" tooltiptext=\"expr:dataset.rowcount - currow\"/><Cell col=\"1\" style=\"align:center;\" text=\"bind:TYPE\" tooltiptext=\"bind:TYPE\"/><Cell col=\"2\" text=\"bind:CHRGR_NM\" tooltiptext=\"bind:CHRGR_NM\"/><Cell col=\"3\" displaytype=\"date\" text=\"bind:DT\" mask=\"yyyy.MM.dd HH:mm\" calendardisplaynulltype=\"none\" tooltiptext=\"bind:DT\"/><Cell col=\"4\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:CNTNT\" wordwrap=\"char\" tooltiptext=\"bind:CNTNT\" autosizerow=\"limitmin\"/></Band></Format></Formats>");
            this.div_21.Tab01.tabp06.addChild(obj.name, obj);

            obj = new Div("div_3", "absolute", "0", "419", null, "24", "10", null, this);
            obj.set_taborder("18");
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", null, "255", "24", null, "0", this.div_3);
            obj.set_taborder("0");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 2 17");
            this.div_3.addChild(obj.name, obj);
            obj = new Static("sta_dlvDay", "absolute", null, "0", "117", "24", "199", null, this.div_3);
            obj.set_taborder("1");
            obj.set_text("납품요청일자");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_visible("true");
            obj.getSetter("objNm").set("납품요청일자");
            this.div_3.addChild(obj.name, obj);
            obj = new Calendar("calDlvDayBat", "fixed", null, "0", "127", "24", "72", null, this.div_3);
            this.div_3.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.getSetter("objNm").set("납품일자 일괄설정 달력");
            obj = new Button("btn_Set_Day", "absolute", null, "0", "70", "24", "0", null, this.div_3);
            obj.set_taborder("3");
            obj.set_text("일괄적용");
            obj.set_visible("true");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("납품요청일자 일괄적용");
            this.div_3.addChild(obj.name, obj);

            obj = new Div("div_31", "absolute", "0", "447", null, "200", "15", null, this);
            obj.set_taborder("20");
            this.addChild(obj.name, obj);
            obj = new Grid("grdPoItem", "absolute", "0", "0", null, null, "0", "28", this.div_31);
            obj.set_taborder("6");
            obj.set_binddataset("dsPoItem");
            obj.set_autoenter("select");
            obj.set_selecttype("cell");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.getSetter("f_filter").set("Y");
            obj.getSetter("f_excel").set("Y");
            obj.getSetter("f_hide").set("Y");
            obj.getSetter("f_find").set("Y");
            obj.getSetter("f_sort").set("Y");
            obj.getSetter("f_fix").set("Y");
            obj.getSetter("f_height").set("Y");
            obj.getSetter("f_save").set("Y");
            obj.getSetter("f_mode").set("Y");
            obj.getSetter("f_init").set("Y");
            obj.getSetter("f_colSize").set("Y");
            obj.getSetter("f_copyitemcolumn").set("MTRL_CD");
            obj.getSetter("f_editcol").set("MTRL_CD");
            obj.getSetter("f_version").set("Y");
            obj.getSetter("objNm").set("품목그리드");
            obj._setContents("<Formats><Format id=\"MMODE\"><Columns><Column size=\"394\"/><Column size=\"82\"/><Column size=\"86\"/><Column size=\"89\"/><Column size=\"97\"/><Column size=\"97\"/><Column size=\"170\"/><Column size=\"170\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"135\"/><Column size=\"72\" band=\"right\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"품목명\"/><Cell col=\"1\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;수량\"/><Cell col=\"2\" text=\"단위\"/><Cell col=\"3\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;단가\"/><Cell col=\"4\" text=\"공급가\"/><Cell col=\"5\" text=\"부가세\"/><Cell col=\"6\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;계정명\"/><Cell col=\"7\" text=\"납품창고\"/><Cell col=\"8\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;납품요청일자\"/><Cell col=\"9\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;검수담당자\"/><Cell col=\"10\" text=\"품목특이사항\"/><Cell col=\"11\" text=\"시방서\"/></Band><Band id=\"body\"><Cell style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:MTRL_NM\" editdisplay=\"edit\" tooltiptext=\"bind:MTRL_NM\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:QTY\" mask=\"#,##0.00\" editautoselect=\"true\" editdisplay=\"edit\" combodisplay=\"edit\" tooltiptext=\"bind:QTY\"/><Cell col=\"2\" displaytype=\"combo\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:CD_UNIT\" combodataset=\"dsCdCM11\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" combodisplay=\"edit\" tooltiptext=\"bind:CD_UNIT\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"text\" editfilter=\"alpha,number,nosign\" style=\"align:right;background2: ;\" text=\"bind:PO_PRICE\" mask=\"#,##0.00\" editautoselect=\"true\" editdisplay=\"edit\" tooltiptext=\"bind:PO_PRICE\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:PO_AMT\" mask=\"#,##0\" tooltiptext=\"bind:PO_AMT\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:VAT\" mask=\"#,##0\" tooltiptext=\"bind:VAT\"/><Cell col=\"6\" edittype=\"text\" style=\"align:left;\" text=\"bind:ACNT_NM\" editautoselect=\"true\" expandshow=\"show\" expandsize=\"21\" expandimage=\"URL('img::grd_WF_Expand.png')\" tooltiptext=\"bind:ACNT_NM\"/><Cell col=\"7\" style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:SL_NM\" editdisplay=\"edit\" combodisplay=\"edit\" calendardisplay=\"edit\" tooltiptext=\"bind:SL_NM\"/><Cell col=\"8\" displaytype=\"date\" edittype=\"date\" text=\"bind:DLV_REQ_DAY\" mask=\"yyyy.MM.dd\" maskchar=\" \" editautoselect=\"true\" editdisplay=\"edit\" calendardisplaynulltype=\"none\" tooltiptext=\"bind:DLV_REQ_DAY\"/><Cell col=\"9\" edittype=\"text\" style=\"background2: ;\" text=\"bind:INSP_CHRGR_NM\" editautoselect=\"true\" expandshow=\"show\" expandsize=\"21\" expandimage=\"URL('img::grd_WF_Expand.png')\" tooltiptext=\"bind:INSP_CHRGR_NM\"/><Cell col=\"10\" displaytype=\"text\" edittype=\"text\" text=\"bind:RMARK\" editautoselect=\"true\" editdisplay=\"edit\" tooltiptext=\"bind:RMARK\"/><Cell col=\"11\" displaytype=\"button\" edittype=\"button\" text=\"expr:SPEC_FILE_NO == '' ? '첨부' : '조회'\"/></Band></Format><Format id=\"VMODE\"><Columns><Column size=\"394\"/><Column size=\"82\"/><Column size=\"86\"/><Column size=\"89\"/><Column size=\"97\"/><Column size=\"97\"/><Column size=\"170\"/><Column size=\"170\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"135\"/><Column size=\"72\" band=\"right\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"품목명\"/><Cell col=\"1\" text=\"수량\"/><Cell col=\"2\" text=\"단위\"/><Cell col=\"3\" text=\"단가\"/><Cell col=\"4\" text=\"공급가\"/><Cell col=\"5\" text=\"부가세\"/><Cell col=\"6\" text=\"계정명\"/><Cell col=\"7\" text=\"납품창고\"/><Cell col=\"8\" text=\"납품요청일자\"/><Cell col=\"9\" text=\"검수담당자\"/><Cell col=\"10\" text=\"품목특이사항\"/><Cell col=\"11\" text=\"시방서\"/></Band><Band id=\"body\"><Cell style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:MTRL_NM\" editdisplay=\"edit\" tooltiptext=\"bind:MTRL_NM\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:QTY\" mask=\"#,##0.00\" editautoselect=\"false\" editdisplay=\"edit\" combodisplay=\"edit\" tooltiptext=\"bind:QTY\"/><Cell col=\"2\" displaytype=\"combo\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:CD_UNIT\" combodataset=\"dsCdCM11\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" combodisplay=\"edit\" tooltiptext=\"bind:CD_UNIT\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:PO_PRICE\" mask=\"#,##0.00\" editdisplay=\"edit\" tooltiptext=\"bind:PO_PRICE\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:PO_AMT\" mask=\"#,##0\" tooltiptext=\"bind:PO_AMT\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:VAT\" mask=\"#,##0\" tooltiptext=\"bind:VAT\"/><Cell col=\"6\" style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:ACNT_NM\" tooltiptext=\"bind:ACNT_NM\"/><Cell col=\"7\" style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:SL_NM\" editdisplay=\"edit\" combodisplay=\"edit\" calendardisplay=\"edit\" tooltiptext=\"bind:SL_NM\"/><Cell col=\"8\" displaytype=\"date\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:DLV_REQ_DAY\" mask=\"yyyy.MM.dd\" maskchar=\" \" editdisplay=\"edit\" calendardisplaynulltype=\"none\" tooltiptext=\"bind:DLV_REQ_DAY\"/><Cell col=\"9\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:INSP_CHRGR_NM\" tooltiptext=\"bind:INSP_CHRGR_NM\"/><Cell col=\"10\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:RMARK\" editdisplay=\"edit\" tooltiptext=\"bind:RMARK\"/><Cell col=\"11\" displaytype=\"button\" edittype=\"button\" text=\"expr:SPEC_FILE_NO == '' ? '미첨부' : '조회'\"/></Band></Format><Format id=\"CHGMODE\"><Columns><Column size=\"394\"/><Column size=\"82\"/><Column size=\"86\"/><Column size=\"89\"/><Column size=\"97\"/><Column size=\"97\"/><Column size=\"170\"/><Column size=\"170\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"135\"/><Column size=\"72\" band=\"right\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"품목명\"/><Cell col=\"1\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;수량\"/><Cell col=\"2\" text=\"단위\"/><Cell col=\"3\" text=\"단가\"/><Cell col=\"4\" text=\"공급가\"/><Cell col=\"5\" text=\"부가세\"/><Cell col=\"6\" text=\"계정명\"/><Cell col=\"7\" text=\"납품창고\"/><Cell col=\"8\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;납품요청일자\"/><Cell col=\"9\" text=\"검수담당자\"/><Cell col=\"10\" text=\"품목특이사항\"/><Cell col=\"11\" text=\"시방서\"/></Band><Band id=\"body\"><Cell style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:MTRL_NM\" editdisplay=\"edit\" tooltiptext=\"bind:MTRL_NM\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"expr:CD_PO_ITM_STTS == &quot;PO12CLO&quot;  ? &quot;none&quot; : &quot;masknumber&quot;\" style=\"align:right;background:EXPR(CD_PO_ITM_STTS == &quot;PO12CLO&quot;  ? &quot;#f5f5f5ff&quot; : &quot;&quot;);background2:EXPR(CD_PO_ITM_STTS == &quot;PO12CLO&quot;  ? &quot;#f5f5f5ff&quot; : &quot;&quot;);\" text=\"bind:QTY\" mask=\"#,##0.00\" editautoselect=\"true\" editdisplay=\"edit\" combodisplay=\"edit\" tooltiptext=\"bind:QTY\"/><Cell col=\"2\" displaytype=\"combo\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:CD_UNIT\" combodataset=\"ds_cdCM11\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" combodisplay=\"edit\" tooltiptext=\"bind:CD_UNIT\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:PO_PRICE\" mask=\"#,##0.00\" editdisplay=\"edit\" tooltiptext=\"bind:PO_PRICE\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:PO_AMT\" mask=\"#,##0\" tooltiptext=\"bind:PO_AMT\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:VAT\" mask=\"#,##0\" tooltiptext=\"bind:VAT\"/><Cell col=\"6\" style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:ACNT_NM\" tooltiptext=\"bind:ACNT_NM\"/><Cell col=\"7\" style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:SL_NM\" editdisplay=\"edit\" combodisplay=\"edit\" calendardisplay=\"edit\" tooltiptext=\"bind:SL_NM\"/><Cell col=\"8\" displaytype=\"date\" edittype=\"expr:CD_PO_ITM_STTS == &quot;PO12CLO&quot;  ? &quot;none&quot; : &quot;date&quot;\" style=\"background:EXPR(CD_PO_ITM_STTS == &quot;PO12CLO&quot;  ? &quot;#f5f5f5ff&quot; : &quot;&quot;);background2:EXPR(CD_PO_ITM_STTS == &quot;PO12CLO&quot;  ? &quot;#f5f5f5ff&quot; : &quot;&quot;);\" text=\"bind:DLV_REQ_DAY\" mask=\"yyyy.MM.dd\" maskchar=\" \" editautoselect=\"true\" editdisplay=\"edit\" calendardisplaynulltype=\"none\" tooltiptext=\"bind:DLV_REQ_DAY\"/><Cell col=\"9\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:INSP_CHRGR_NM\" tooltiptext=\"bind:INSP_CHRGR_NM\"/><Cell col=\"10\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:RMARK\" tooltiptext=\"bind:RMARK\"/><Cell col=\"11\" displaytype=\"button\" edittype=\"button\" text=\"expr:SPEC_FILE_NO == '' ? '미첨부' : '조회'\"/></Band></Format></Formats>");
            this.div_31.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "0", this.div_31);
            obj.set_taborder("7");
            obj.set_scrollbars("none");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.div_31.addChild(obj.name, obj);

            obj = new Div("div_4", "absolute", "0", "667", null, "24", "15", null, this);
            obj.set_taborder("21");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", null, "255", "24", null, "0", this.div_4);
            obj.set_taborder("0");
            obj.set_text("품목 상세정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 2 17");
            this.div_4.addChild(obj.name, obj);

            obj = new Div("div_41", "absolute", "0", "696", null, "323", "15", null, this);
            obj.set_taborder("22");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Tab("Tab01", "absolute", "0", "34", null, "270", "0", null, this.div_41);
            obj.set_taborder("10");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            this.div_41.addChild(obj.name, obj);
            obj = new Tabpage("tabp01", this.div_41.Tab01);
            obj.set_text("상세데이터");
            obj.style.set_background("white");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("상세데이터");
            this.div_41.Tab01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "5", null, "33", "0", null, this.div_41.Tab01.tabp01);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staStrCd", "absolute", "0", "5", "171", "33", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("0");
            obj.set_text("납품창고");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "37", null, "33", "0", null, this.div_41.Tab01.tabp01);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staMtrl", "absolute", "0", "37", "171", "33", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("3");
            obj.set_text("품목코드(명)");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "69", null, "33", "0", null, this.div_41.Tab01.tabp01);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staPoPrice", "absolute", "421", "69", "160", "33", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("11");
            obj.set_text("단가");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("발주일자");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staQtyUnit", "absolute", "0", "69", "171", "33", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("8");
            obj.set_text("수량/단위");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine03", "absolute", "0", "101", null, "33", "0", null, this.div_41.Tab01.tabp01);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staDlvCmplt", "absolute", "421", "101", "160", "33", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("19");
            obj.set_text("납품완료");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("발주일자");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staDlvRate", "absolute", "0", "101", "171", "33", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("17");
            obj.set_text("납품허용율");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staAmtVat", "absolute", "741", "69", "160", "33", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("13");
            obj.set_text("공급가/부가세");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("카드 승인번호");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staPoItmStts", "absolute", "741", "37", "160", "33", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("6");
            obj.set_text("품목상태");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("발주일자");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtStrCd", "absolute", "177", "9", "100", "24", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("1");
            obj.set_cssclass("edt_default_r");
            obj.set_enable("true");
            obj.getSetter("objNm").set("창고코드");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtSlNm", "absolute", "282", "9", "452", "24", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("2");
            obj.set_cssclass("edt_default_r");
            obj.style.set_selectbackground("black");
            obj.getSetter("objNm").set("창고명");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtMtrlNm", "absolute", "282", "41", "452", "24", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_cssclass("edt_default_r");
            obj.style.set_selectbackground("black");
            obj.getSetter("objNm").set("품목명");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtMtrlCd", "absolute", "177", "41", "100", "24", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("4");
            obj.set_cssclass("edt_default_r");
            obj.set_enable("true");
            obj.getSetter("objNm").set("품목코드");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new MaskEdit("maeQty", "absolute", "177", "73", "100", "24", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("9");
            obj.set_mask("#,##0.00");
            obj.set_cssclass("input_point");
            obj.getSetter("objNm").set("수량");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Combo("cboUnit", "absolute", "282", "73", "90", "24", null, null, this.div_41.Tab01.tabp01);
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_cdCM11");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("단위");
            obj = new MaskEdit("maeDlvRate", "absolute", "177", "106", "61", "24", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("18");
            obj.set_mask(",");
            obj.set_cssclass("mae_default");
            obj.getSetter("objNm").set("납품허용율");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "243", "106", "24", "24", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("24");
            obj.set_text("%");
            obj.getSetter("objNm").set("%");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new CheckBox("chkDlvOk", "absolute", "586", "106", "98", "24", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("20");
            obj.set_text("납품완료");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.getSetter("objNm").set("납품완료");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new MaskEdit("maePrice", "absolute", "586", "73", "149", "24", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("12");
            obj.set_mask("#,##0.00");
            obj.set_cssclass("mae_default");
            obj.getSetter("objNm").set("단가");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtItemStatus", "absolute", "907", "41", "220", "24", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("7");
            obj.set_cssclass("edt_default_r");
            obj.set_enable("true");
            obj.getSetter("objNm").set("품목상태");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new MaskEdit("maePoAmt", "absolute", "907", "73", "108", "24", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("14");
            obj.set_mask("#,##0");
            obj.set_cssclass("input_point");
            obj.set_enable("true");
            obj.style.set_color("blue");
            obj.style.set_font("bold 10 Dotum");
            obj.getSetter("objNm").set("금액");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new MaskEdit("maeVat", "absolute", "1019", "73", "108", "24", null, null, this.div_41.Tab01.tabp01);
            obj.set_taborder("16");
            obj.set_mask("#,##0");
            obj.set_cssclass("input_point");
            obj.set_enable("true");
            obj.style.set_color("blue");
            obj.style.set_font("bold 10 Dotum");
            obj.getSetter("objNm").set("금액");
            this.div_41.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Tabpage("tabp02", this.div_41.Tab01);
            obj.set_text("품목 특이사항");
            obj.getSetter("objNm").set("품목 특이사항");
            this.div_41.Tab01.addChild(obj.name, obj);
            obj = new TextArea("txtItemTxt", "absolute", "0", "5", null, "131", "0", null, this.div_41.Tab01.tabp02);
            obj.set_taborder("0");
            obj.set_scrollbars("none");
            obj.set_wordwrap("char");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("500");
            obj.getSetter("objNm").set("품목 특이사항");
            this.div_41.Tab01.tabp02.addChild(obj.name, obj);
            obj = new Tabpage("tabp03", this.div_41.Tab01);
            obj.set_text("첨부파일");
            obj.set_url("CCOMP::CompNFileUpDown.xfdl");
            obj.getSetter("objNm").set("첨부파일");
            this.div_41.Tab01.addChild(obj.name, obj);
            obj = new Tabpage("tabp04", this.div_41.Tab01);
            obj.set_text("확인");
            obj.getSetter("objNm").set("확인");
            this.div_41.Tab01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "37", null, "33", "0", null, this.div_41.Tab01.tabp04);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_41.Tab01.tabp04.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "5", null, "33", "0", null, this.div_41.Tab01.tabp04);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_41.Tab01.tabp04.addChild(obj.name, obj);
            obj = new Static("staCnfrmUser", "absolute", "0", "5", "171", "33", null, null, this.div_41.Tab01.tabp04);
            obj.set_taborder("2");
            obj.set_text("확인자명");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_41.Tab01.tabp04.addChild(obj.name, obj);
            obj = new Static("staCnfrmDt", "absolute", "0", "37", "171", "33", null, null, this.div_41.Tab01.tabp04);
            obj.set_taborder("3");
            obj.set_text("확인일시");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_41.Tab01.tabp04.addChild(obj.name, obj);
            obj = new Edit("edtCnfrmUser", "absolute", "177", "9", "250", "24", null, null, this.div_41.Tab01.tabp04);
            obj.set_taborder("4");
            obj.set_enable("false");
            obj.getSetter("objNm").set("확인자명");
            this.div_41.Tab01.tabp04.addChild(obj.name, obj);
            obj = new MaskEdit("maeCnfrmDt", "absolute", "177", "41", "250", "24", null, null, this.div_41.Tab01.tabp04);
            obj.set_taborder("5");
            obj.set_type("string");
            obj.set_mask("####.##.##");
            obj.set_maskchar(" ");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "left middle");
            obj.getSetter("objNm").set("확인일시");
            this.div_41.Tab01.tabp04.addChild(obj.name, obj);
            obj = new Tabpage("tabp05", this.div_41.Tab01);
            obj.set_text("납품이력");
            obj.getSetter("objNm").set("납품이력");
            this.div_41.Tab01.addChild(obj.name, obj);
            obj = new Grid("grdPoDlvItem", "absolute", "0", "5", null, null, "0", "30", this.div_41.Tab01.tabp05);
            obj.set_taborder("0");
            obj.set_binddataset("dsPoDlvItem");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"105\"/><Column size=\"113\"/><Column size=\"121\"/><Column size=\"130\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"납품번호\"/><Cell col=\"1\" text=\"납품수량\"/><Cell col=\"2\" text=\"납품단가\"/><Cell col=\"3\" text=\"납품금액\"/></Band><Band id=\"body\" style=\"cellpadding:2 2 2 2 ;\"><Cell text=\"bind:DLV_NO\" tooltiptext=\"bind:DLV_NO\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:DLV_QTY\" mask=\"#,##0.00\" editdisplay=\"edit\" tooltiptext=\"bind:DLV_QTY\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:UNT_PRICE\" mask=\"#,##0.00\" tooltiptext=\"bind:UNT_PRICE\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AMT\" mask=\"#,##0\" tooltiptext=\"bind:AMT\"/></Band></Format></Formats>");
            this.div_41.Tab01.tabp05.addChild(obj.name, obj);
            obj = new Edit("edtItemNo", "absolute", "0", "0", "118", "24", null, null, this.div_41);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_cssclass("input_point");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("objNm").set("품번");
            this.div_41.addChild(obj.name, obj);
            obj = new Combo("cboItemChg", "absolute", "120", "0", "386", "24", null, null, this.div_41);
            this.div_41.addChild(obj.name, obj);
            obj.set_taborder("12");
            obj.set_innerdataset("dsPoItem");
            obj.set_codecolumn("PO_ITEM_ID");
            obj.set_datacolumn("MTRL_NM");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("품목명");
            obj = new Button("btnPoItemRowUp", "absolute", "508", "2", "21", "21", null, null, this.div_41);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_ListUp");
            obj.getSetter("objNm").set("Up");
            this.div_41.addChild(obj.name, obj);
            obj = new Button("btnPoItemRowDown", "absolute", "531", "2", "21", "21", null, null, this.div_41);
            obj.set_taborder("14");
            obj.getSetter("objNm").set("Down");
            obj.set_cssclass("btn_WF_ListDown");
            this.div_41.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 34, this.div_1,
            	//-- Layout function
            	function(p) {
            		p.set_cssclass("div_WF_SearchBg");
            		p.getSetter("objNm").set("DIV-입찰 진행 상세 ");
            		p.set_taborder("15");

            	}
            );
            this.div_1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.div_2,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("16");
            		p.getSetter("objNm").set("DIV-평가서 타이틀");

            	}
            );
            this.div_2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1042, 218, this.div_21.Tab01.tabp01,
            	//-- Layout function
            	function(p) {
            		p.set_text("기본정보");
            		p.set_scrollbars("none");
            		p.getSetter("lbcd").set("");
            		p.getSetter("objNm").set("기본정보");

            	}
            );
            this.div_21.Tab01.tabp01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_21.Tab01.tabp02,
            	//-- Layout function
            	function(p) {
            		p.set_text("통화정보");

            	}
            );
            this.div_21.Tab01.tabp02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_21.Tab01.tabp03,
            	//-- Layout function
            	function(p) {
            		p.set_text("특이사항");
            		p.getSetter("objNm").set("특이사항");

            	}
            );
            this.div_21.Tab01.tabp03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_21.Tab01.tabp05,
            	//-- Layout function
            	function(p) {
            		p.set_text("발주담당자");
            		p.getSetter("objNm").set("발주담당자");

            	}
            );
            this.div_21.Tab01.tabp05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_21.Tab01.tabp06,
            	//-- Layout function
            	function(p) {
            		p.set_text("발주이력");
            		p.getSetter("objNm").set("발주이력");

            	}
            );
            this.div_21.Tab01.tabp06.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 328, this.div_21,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("17");

            	}
            );
            this.div_21.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.div_3,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("18");
            		p.getSetter("objNm").set("DIV-평가서 타이틀");

            	}
            );
            this.div_3.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 200, this.div_31,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("20");

            	}
            );
            this.div_31.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.div_4,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("21");

            	}
            );
            this.div_4.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1042, 158, this.div_41.Tab01.tabp01,
            	//-- Layout function
            	function(p) {
            		p.set_text("상세데이터");
            		p.style.set_background("white");
            		p.set_scrollbars("none");
            		p.getSetter("objNm").set("상세데이터");

            	}
            );
            this.div_41.Tab01.tabp01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_41.Tab01.tabp02,
            	//-- Layout function
            	function(p) {
            		p.set_text("품목 특이사항");
            		p.getSetter("objNm").set("품목 특이사항");

            	}
            );
            this.div_41.Tab01.tabp02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_41.Tab01.tabp04,
            	//-- Layout function
            	function(p) {
            		p.set_text("확인");
            		p.getSetter("objNm").set("확인");

            	}
            );
            this.div_41.Tab01.tabp04.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_41.Tab01.tabp05,
            	//-- Layout function
            	function(p) {
            		p.set_text("납품이력");
            		p.getSetter("objNm").set("납품이력");

            	}
            );
            this.div_41.Tab01.tabp05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1042, 189, this.div_41,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("22");
            		p.set_scrollbars("none");

            	}
            );
            this.div_41.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1220, 1541, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("발주상세");
            		p.set_scrollbars("autoboth");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item50","divViewCompCond00.cboCdCntrTmplt","value","dsCntr","CD_CNTR_STTS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("LabelLang60","divViewCompTitle00.staViewCompTitle00","text","gdsLabel","EPRO_LABEL_00047");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","Div00.Tab01.tabp02.spn_advPymtRt","value","dsPo","ADV_PYMT_RT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","Div00.Tab01.tabp02.spn_partPymtRt","value","dsPo","PART_PAMT_RT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","Div00.Tab01.tabp02.spn_banlanceAmtRt","value","dsPo","BALANCE_AMT_RT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Div00.Tab01.tabp02.cbo_pymtCndtn","value","dsPo","CD_PYMT_CNDTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Div00.Tab01.tabp02.cal_advPymtDay","value","dsPo","ADV_PYMT_DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Div00.Tab01.tabp02.cal_partPymtDay","value","dsPo","PART_PAMT_DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Div00.Tab01.tabp02.cal_banlanceAmtDay","value","dsPo","BALANCE_AMT_DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Div00.Tab01.tabp02.cal_poDay","value","dsPo","PO_DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Div00.Tab01.tabp02.edt_ptnrNo","value","dsPo","PTNR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","Div00.Tab01.tabp02.edt_ptnrNm","value","dsPo","PTNR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","Div00.Tab01.tabp05.edt_wrtrId","value","dsPo","CHRGR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","Div00.Tab01.tabp05.edt_email","value","dsPo","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","Div00.Tab01.tabp05.edt_fax","value","dsPo","FAX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","Div00.Tab01.tabp01.edt_ttl","value","dsPo","TTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","Div00.Tab01.tabp05.edt_tel","value","dsPo","TEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item46","Div00.Tab01.tabpage6.grd_rfqItem","binddataset","dsPoHsty","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item48","Div00.Tab01.tabp05.edt_wrtrNm","value","dsPo","CHRGR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item59","Div00.Tab01.tabp01.mae_totAmt","value","dsPo","TOT_AMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item47","Div00.Tab01.tabp01.cbo_cdDlvMthd","value","dsPo","CD_DLV_MTHD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Div00.Tab01.tabp01.edt_ptnrNm","value","dsPo","PTNR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item56","Div00.Tab01.tabp01.edt_ptnrNo","value","dsPo","PTNR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item58","Div00.Tab01.tabp01.cal_poDay","value","dsPo","PO_DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","Div00.Tab01.tabp01.cbo_cdPymtCndtn","value","dsPo","CD_PYMT_CNDTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","Div00.Tab01.tabp03.txt_rmark","value","dsPo","RMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Div00.Tab01.tabp01.rdo_altPartialDlv","value","dsPo","ALT_PARTIAL_DLV");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item60","Div00.Tab01.tabp01.cbo_totPayCnt","value","dsPo","TOT_PAY_CNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item61","Div00.Tab01.tabp01.chk_altGrPymt","value","dsPo","ALT_GR_PYMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","Div00.Tab01.tabp01.cbo_cdPayCtgr","value","dsPo","CD_PAY_CTGR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","Div00.Tab01.tabp01.mae_poAm","value","dsPo","PO_AMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item64","Div00.Tab01.tabp01.mae_vat","value","dsPo","VAT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item70","Div00.Tab01.tabp01.edt_cdPoCtgr","value","dsPo","CD_PO_CTGR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item71","Div00.Tab01.tabpage7.edt_exchgRmark","value","dsPo","EXCHG_RMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item72","Div00.Tab01.tabp01.edt_cardNo","value","dsPo","CARD_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item73","Div00.Tab01.tabp01.cbo_cdTaxKind","value","dsPo","CD_TAX_KIND");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item74","Div00.Tab01.tabp01.edt_cardAppNo","value","dsPo","CARD_APRV_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item75","Div00.Tab01.tabp01.cbo_cdTaxCd","value","dsPo","CD_TAX_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Div00.Tab01.tabp01.cbo_dlvAddr","value","dsPo","CD_DLV_AREA");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Div00.Tab01.tabpage7.cbo_poCrnc","value","dsPo","CD_PO_CRNC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Div00.Tab01.tabpage7.mae_exchgRt","value","dsPo","EXCHG_RT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","divViewCompTitle01.staViewCompTitle00","text","gdsLabel","EPRO_LABEL_00047");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item39","div_41.Tab01.tabp04.edt_ptnrId","value","dsPoItem","PTNR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item40","div_41.Tab01.tabp04.edt_ptnrNm","value","dsPoItem","PTNR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","div_41.Tab01.tabp04.edt_zipCd","value","dsPoItem","ZIP_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item42","div_41.Tab01.tabp04.edt_addr1","value","dsPoItem","ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item43","div_41.Tab01.tabp04.edt_addr2","value","dsPoItem","DTL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item44","div_41.Tab01.tabp04.edt_dlvContent","value","dsPoItem","FWD_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item49","div_41.Tab01.tabp09.edt_confirmUser","value","dsPoItem","RCVR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","div_41.Tab01.tabp03.edt_acntCd","value","dsPoItem","ACNT_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","div_41.Tab01.tabp03.edt_costCd","value","dsPoItem","COST_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","div_41.Tab01.tabp03.edt_accNm","value","dsPoItem","ACNT_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","div_41.Tab01.tabp03.edt_costNm","value","dsPoItem","COST_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item53","div_41.edtItemNo","value","dsPoItem","ITM_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item57","div_41.cboItemChg","text","dsPoItem","MTRL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","div_41.Tab01.tabp02.grd_rfqItem","binddataset","dsPoItemDlv","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item45","div_41.Tab01.tabp05.txt_itemTxt","value","dsPoItem","RMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item63","div_41.Tab01.tabp09.ma_confirmDt","value","dsPoItem","RCV_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item97","div_21.Tab01.tabp01.maeTotAmt","value","dsPo","TOT_AMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item98","div_21.Tab01.tabp01.maeVat","value","dsPo","VAT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item101","div_21.Tab01.tabp01.maePoAm","value","dsPo","PO_AMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item102","div_21.Tab01.tabp01.edtPtnrNm","value","dsPo","PTNR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item103","div_21.Tab01.tabp01.edtPtnrNo","value","dsPo","PTNR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item104","div_21.Tab01.tabp01.edtTtl","value","dsPo","TTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item105","div_21.Tab01.tabp01.calPoDay","value","dsPo","PO_DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item106","div_21.Tab01.tabp01.cboPoCtgr","value","dsPo","CD_DLV_AREA");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item107","div_21.Tab01.tabp01.edtCardNo","value","dsPo","CARD_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item108","div_21.Tab01.tabp01.edtCardAprvNo","value","dsPo","CARD_APRV_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item109","div_21.Tab01.tabp01.cboTaxCd","value","dsPo","CD_TAX_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item110","div_21.Tab01.tabp01.cboTaxKind","value","dsPo","CD_TAX_KIND");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item111","div_21.Tab01.tabp01.cboPayCtgr","value","dsPo","CD_PAY_CTGR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item112","div_21.Tab01.tabp01.chkGrPymt","value","dsPo","ALT_GR_PYMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item113","div_21.Tab01.tabp01.cboTotPayCnt","value","dsPo","TOT_PAY_CNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item114","div_21.Tab01.tabp01.cboPymtCndtn","value","dsPo","CD_PYMT_CNDTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item115","div_21.Tab01.tabp01.cboDlvAddr","value","dsPo","CD_DLV_AREA");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item116","div_21.Tab01.tabp01.edtDlvMthd","value","dsPo","CD_DLV_MTHD_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item117","div_21.Tab01.tabp01.rdoPartialDlv","value","dsPo","ALT_PARTIAL_DLV");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item122","div_41.Tab01.tabp01.edtStrCd","value","dsPoItem","STR_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item123","div_41.Tab01.tabp01.edtSlNm","value","dsPoItem","SL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item126","div_41.Tab01.tabp01.edtMtrlNm","value","dsPoItem","MTRL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item127","div_41.Tab01.tabp01.edtMtrlCd","value","dsPoItem","MTRL_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item128","div_41.Tab01.tabp01.maeQty","value","dsPoItem","QTY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item129","div_41.Tab01.tabp01.cboUnit","value","dsPoItem","CD_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item130","div_41.Tab01.tabp01.maeDlvRate","value","dsPoItem","DLV_OVR_RT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item131","div_41.Tab01.tabp01.chkDlvOk","value","dsPoItem","ALT_DLV_CMPLT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item132","div_41.Tab01.tabp01.maePrice","value","dsPoItem","PO_PRICE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","div_41.Tab01.tabp01.edtItemStatus","value","dsPoItem","CD_PO_ITM_STTS_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","div_41.Tab01.tabp01.maePoAmt","value","dsPoItem","PO_AMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item133","div_41.Tab01.tabp01.maeVat","value","dsPoItem","VAT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item138","div_21.Tab01.tabp02.maeExchgRt","value","dsPo","EXCHG_RT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item139","div_21.Tab01.tabp02.cboPoCrnc","value","dsPo","CD_PO_CRNC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item140","div_21.Tab01.tabp02.edtExchgRmark","value","dsPo","EXCHG_RMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","div_21.Tab01.tabp05.edtFax","value","dsPo","FAX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","div_21.Tab01.tabp05.edtEmail","value","dsPo","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","div_21.Tab01.tabp05.edtTel","value","dsPo","TEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","div_21.Tab01.tabp05.edtWrtrNm","value","dsPo","CHRGR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","div_21.Tab01.tabp05.edtWrtrId","value","dsPo","CHRGR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","div_41.Tab01.tabp04.edtCnfrmUser","value","dsPoItem","RCVR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item38","div_41.Tab01.tabp04.maeCnfrmDt","value","dsPoItem","RCV_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item51","div_1.edtPoNo","value","dsPo","PO_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item54","div_1.cboDocType","value","dsPo","CD_DOC_CTGR");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompNFileUpDown.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompNFileUpDown.xfdl");
        };
        
        // User Script
        this.registerScript("BPorDetail.xfdl", function(exports) {
        /**
         * @파일명			: BPorDetail.xfdl
         * @생성자			: 한의봉
         * @생성일시		: 2019. 04. 28.
         * @설명			: 발주상세
         * @최종수정자		: 한의봉
         * @최종수정일시	: 2019. 04. 28.
        */  

        this.fv_appPopCall = false;			//전역변수 default:false. 결재팝업호출하면 true로 세팅.
        this.fv_appCheck = false;			//전역변수 default:false. 결재팝업호출하면 true로 세팅.
        this.fv_prReqPoYn = "N";			//전역변수 구매요청에서 발주작성시 여부. Y이면 구매요청에서 발주작성하는 상황이다.
        this.fv_prReqPoPrItemId = "";		//전역변수 구매요청에서 발주작성시 넘겨받는 prItemId_Array.

        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {
        	var param = [
        					 {code:"PO10", sSelectType:"S"} // 발주상태
        					,{code:"PO14", sSelectType:"S"} // 배송지역
        					,{code:"CM10", sSelectType:"S"} // 문서유형
        					,{code:"CM15", sSelectType:"S"} // 발주통화
        					,{code:"CM13", sSelectType:"S"} // 지급계정
        					,{code:"PO13", sSelectType:"S"} // 발주유형
        					,{code:"PO11", sSelectType:"S"} // 납품방법
        					,{code:"IV30", sSelectType:"S"} // 정산유형
        					,{code:"CM11", sSelectType:"S"} // 단위					
        					,{code:"IV20", sSelectType:"S"} // 계산서코드
        					,{code:"IV21", sSelectType:"S"} // 계산서구분		
        				];
        	gfnGetCode(this, param);
        }

        /**
          * @함수명	: fnRemote
          * @desc     	: 리모콘 버튼 생성
          */
        this.fnRemote = function()
        {
        	var sArg = [ 
        				{btnName:"발주요청", clickEventFunc:"fnPoReq"}
        				,{btnName:"내부결재", clickEventFunc:"fnPoAppReq"}
        				,{btnName:"품의문서보기", clickEventFunc:"fnPoAppView"}
        				
        		   ];		   
        	gfnRemote(this, sArg);
        }

        /**
          * @함수명	: BRfqPrgDetail_oninit
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.InitEventInfo(이벤트변수)
          * @desc     	: 폼 oninit이벤트
          */
        this.FormOninit = function(obj,e)
        {
        	this.fnSetCode();
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
          * @함수명	: FormOnload
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.InitEventInfo(이벤트변수)
          * @desc     	: 폼 onload이벤트
          */
        this.FormOnload = function(obj,e)
        {
            //그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기(그리드 컴포넌트, 페이징div 컴포넌트, 폼오브젝트(this))
         	gfnSetGrdFunc(this.div_31.grdPoItem , '', this);

        	gfnSetGrdFunc(this.div_31.grdPoItem , this.div_31.divPaging , this);

        	gfnMakeFileDs(this);
        	this.fnFold();
                                 
        	this.dsPo.setColumn(0, "PO_NO"			, gfnGetTmprData("PO_NO"));
        	
        	//구매요청에서 발주작성시 넘겨받는 파라미터
        	this.fv_prReqPoYn 			= gfnGetTmprData("PR_REQ_PO_YN");
        	this.fv_prReqPoPrItemId 	= gfnGetTmprData("PR_REQ_PO_PRITEMID");  //PR_ITEM_ID Array
        	
        	gfnClearTmprData(); 
        	
        	
        	//구매요청에서 발주작성시 품목정보 설정 
        	if(this.fv_prReqPoYn == "Y"){		
        		this.fn_prReqPoSrch();
        	}else if(gfnIsNull(this.dsPo.getColumn(0, "PO_NO"))){
        		this.dsPo.setColumn(0, "CD_PO_STTS", "PO10WRI");	//상태
        		this.dsPo.setColumn(0, "CD_PO_CTGR", "PO13NPO");	//발주유형
        		//this.dsPo.setColumn(0, "PO_DAY", this.gfn_today());//발주일자
        		this.dsPo.setColumn(0, "CD_PO_CRNC", "CM15KRW");	//발주통화
        		this.dsPo.setColumn(0, "EXCHG_RT", "1"); 			//환율
        		this.dsPo.setColumn(0, "CD_DLV_MTHD", "");			//납품방법
        		this.dsPo.setColumn(0, "CD_PYMT_CNDTN", "");		//지급계정
        		this.dsPo.setColumn(0, "WRTR_ID"  , application.gdsUserInfo.getColumn(0, "USER_ID"));	//담당자ID
        		this.dsPo.setColumn(0, "WRTR_NM"  , application.gdsUserInfo.getColumn(0, "USER_NM"));	//담당자명
        		this.dsPo.setColumn(0, "TEL"	  , application.gdsUserInfo.getColumn(0, "TEL"));
        		this.dsPo.setColumn(0, "EMAIL"	  , application.gdsUserInfo.getColumn(0, "EMAIL"));
        		this.dsPo.setColumn(0, "FAX" 	  , application.gdsUserInfo.getColumn(0, "FAX"));

        		//입고 실적에 따라 지급 여부가 체크되면 지급회차는 비활성화 된다.
        		this.fnCalCu_poPay(1);	
        	}else{
        		this.fnSearch();
        	}
        }

        /**
        	@function	fn_prReqPoSrch()
        	@desc   	구매요청에서 발주작성시 품목정보 조회
        */
        this.fn_prReqPoSrch = function()
        {		
        	this.dsReturn.addColumn("BRANCH_CD", "string");
        	this.dsReturn.addColumn("PR_ITEM_ID_ARR", "string");
        	this.dsReturn.addRow();
        	this.dsReturn.setColumn(0, "PR_ITEM_ID_ARR", this.fv_prReqPoPrItemId);
        	
        	var sSvcID = "Po_prReqPoSrch";
        	var sController = "epro.por.service.BPorService.searchPoPrReq";
        	var sInDatasets = "inDs=dsReturn:A";	
        	var sOutDatasets = "dsPo=dsPo dsPoItem=dsPoItem dsPoPay=dsPoPay";
        	var sCallbackFunc = "fnTrCallBack";
        		
         	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        	
        }

        this.fnSearch = function()
        {
        	var sSvcID = "readPo";
        	var sController = "epro.por.service.BPorService.readPo";
        	var sInDatasets = "dsPo=dsPo";
        	var sOutDatasets = "dsPo=dsPo dsPoPay=dsPoPay dsPoItem=dsPoItem dsPoHsty=dsPoHsty dsPoDlvItem=dsPoDlvItem dsSpecFile=dsSpecFile";
        	var sCallbackFunc = "fnTrCallBack";
        		
         	var	oPaging = [      
                            {inDs:this.dsReturn, grid:this.div_31.grdPoItem , divPaging:this.div_31.divPaging}
                        ];
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc, oPaging);

        }

        /**
        	@함수명	fnDelete
        	@desc   	(공통버튼)삭제
        */
        this.fnDelete = function()
        {
        	if(!gfnConfirm("삭제하시겠습니까?")) return;
        	
        	var sSvcID = "Po_chkRfxOrTndrDel";
        	var sController = "epro.cntr.service.BCntrService.chkPoDelete";
        	var sInDatasets = "inPoItem=dsPoItem"; 
        	var sOutDatasets = "dsReturn=dsChkRfxOrTndr";
        	var sCallbackFunc = "fnTrCallBack";
        		  
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        
        this.fnPreSave = function(svcId)
        {	    
        	//사용자 유효성 체크 추가
         	var arrUserErr = [];
         	
        	var headerTotAmt = Math.abs(Number(this.dsPo.getColumn(0, "PO_AMT")));
        	var totPlnAmt = Math.abs(Number(this.dsPoPay.getSum("PYMT_PLN_AMT")));
        	var totPlnRt = Math.abs(Number(this.dsPoPay.getSum("PYMT_RT")));

        	if(headerTotAmt != totPlnAmt || Number(100) != totPlnRt)
        	{		
        		if(Number(100) != totPlnRt)
        		{
        			var sMsg = "총지급율의 합은 100%가 되어야 합니다.";	
        			var objParam = {agv_msg:sMsg, agv_objComp:this.div_21.Tab01.tabp01.grdPymtItem, agv_errLvl:"E", agv_validType:"필수 체크"};
        			arrUserErr.push(objParam);
        		}
        		else if(headerTotAmt > totPlnAmt)
        		{
        			var sMsg = "총지급금액이 발주금액보다 적습니다.";	
        			var objParam = {agv_msg:sMsg, agv_objComp:this.div_21.Tab01.tabp01.grdPymtItem, agv_errLvl:"E", agv_validType:"필수 체크"};
        			arrUserErr.push(objParam);
        		}
        		else if(headerTotAmt < totPlnAmt)
        		{
        			var sMsg = "총지급금액이 발주금액보다 많습니다.";	
        			var objParam = {agv_msg:sMsg, agv_objComp:this.div_21.Tab01.tabp01.grdPymtItem, agv_errLvl:"E", agv_validType:"필수 체크"};
        			arrUserErr.push(objParam);
        		}
         	}
         	
         	//납품창고 코드 세팅
         	var nRow = this.dsPoItem.findRow("STR_CD", ""); 	
         	if(nRow > -1)
         	{
        		if(!gfnIsNull(this.dsPoItem.getColumn(nRow, "SL_NM")))
        		{
        			var sMsg = "( " + (nRow+1) + " Line) 납품창고코드 세팅을 위해 납품창고명을 다시 입력하세요.";	
        			var objParam = {agv_msg:sMsg, agv_objComp:this.div_31.grdPoItem, agv_errLvl:"E", agv_validType:"그리드 필수입력오류"};
        			arrUserErr.push(objParam);
        		}		
         	}
         	
         	//계정코드 세팅
         	var nRow = this.dsPoItem.findRow("GR_ACNT_CD", ""); 	
         	if(nRow > -1)
         	{
        		if(!gfnIsNull(this.dsPoItem.getColumn(nRow, "ACNT_NM")))
        		{
        			var sMsg = "( " + (nRow+1) + " Line) 계정코드 세팅을 위해 계정명을 다시 입력하세요.";	
        			var objParam = {agv_msg:sMsg, agv_objComp:this.div_31.grdPoItem, agv_errLvl:"E", agv_validType:"그리드 필수입력오류"};
        			arrUserErr.push(objParam);
        		}		
         	}
         	
         	//검수담당자 세팅
         	var nRow = this.dsPoItem.findRow("INSP_CHRGR_ID", ""); 	
         	if(nRow > -1)
         	{
        		if(!gfnIsNull(this.dsPoItem.getColumn(nRow, "INSP_CHRGR_NM")))
        		{
        			var sMsg = "( " + (nRow+1) + " Line) 검수담당자 세팅을 위해 검수담당자를 다시 입력하세요.";	
        			var objParam = {agv_msg:sMsg, agv_objComp:this.div_31.grdPoItem, agv_errLvl:"E", agv_validType:"그리드 필수입력오류"};
        			arrUserErr.push(objParam);
        		}		
         	}
         	
         	//단가 입력했는지 체크
         	this.dsPoItem.set_enableevent(false);
         	this.dsPoItem.filter("PO_PRICE == '0'"); 	
         	if(this.dsPoItem.getRowCount() > 0)
         	{
        		var sMsg = "품목 단가를 입력하세요.";	
        		var objParam = {agv_msg:sMsg, agv_objComp:this.div_31.grdPoItem, agv_errLvl:"E", agv_validType:"그리드 필수입력오류"};
        		arrUserErr.push(objParam);
         	}
         	this.dsPoItem.filter(""); 	
         	this.dsPoItem.set_enableevent(true);
         	
         	//수량 체크 	
         	//반품발주
        	if(this.dsPo.getColumn(0, "CD_PO_CTGR")=="PO13RPO")
        	{
        		this.dsPoItem.set_enableevent(false);
        		this.dsPoItem.filter("QTY >= 0"); 	
        		
        		if(this.dsPoItem.getRowCount() > 0)
        		{
        			var sMsg = "반품발주에서는 (-)수량만 입력가능합니다.";	
        			var objParam = {agv_msg:sMsg, agv_objComp:this.div_31.grdPoItem, agv_errLvl:"E", agv_validType:"그리드 입력오류"};
        			arrUserErr.push(objParam);
        		}
        		
        		this.dsPoItem.filter(""); 
        		this.dsPoItem.set_enableevent(true);
        	}
        	
        	//구매발주
        	else if(this.dsPo.getColumn(0, "CD_PO_CTGR")=="PO13NPO")
        	{
        		this.dsPoItem.set_enableevent(false);
        		this.dsPoItem.filter("QTY <= 0"); 	
        		
        		if(this.dsPoItem.getRowCount() > 0)
        		{
        			var sMsg = "구매발주에서는 (+)수량만 입력가능합니다.";	
        			var objParam = {agv_msg:sMsg, agv_objComp:this.div_31.grdPoItem, agv_errLvl:"E", agv_validType:"그리드 입력오류"};
        			arrUserErr.push(objParam);
        		}
        		
        		this.dsPoItem.filter(""); 
        		this.dsPoItem.set_enableevent(true);
        	} 	
         	
         	//계산서종류를 신용카드, 카드과세를 선택시 카드번호 및 카드승인번호는 필수
         	if(svcId)
         	{
        		if(this.dsPo.getColumn(0, "CD_TAX_KIND") == "IV20A1")
        		{
        			if(gfnIsNull(this.dsPo.getColumn(0, "CARD_NO")))
        			{
        				var sMsg = "카드번호는 필수입력입니다.";	
        				var objParam = {agv_msg:sMsg, agv_objComp:this.div_21.Tab01.tabp01.edt_cardNo, agv_errLvl:"E", agv_validType:"필수입력오류"};
        				arrUserErr.push(objParam);
        				
        				this.div_21.Tab01.set_tabindex(0);
        			}
        			
        			if(gfnIsNull(this.dsPo.getColumn(0, "CARD_APRV_NO")))
        			{
        				var sMsg = "카드승인번호는 필수입력입니다.";	
        				var objParam = {agv_msg:sMsg, agv_objComp:this.div_21.Tab01.tabp01.edt_cardAppNo, agv_errLvl:"E", agv_validType:"필수입력오류"};
        				arrUserErr.push(objParam);
        				
        				this.div_21.Tab01.set_tabindex(0);
        			}
        		}
         	}
         		 	
         	this.fnCalCu_poPay(this.dsPo.getColumn(0, "TOT_PAY_CNT")); 	
         	 	
        	if ("AP11POR" == svcId)
        	{
        		//N이면 필수체크
        		if(!this.gfn_validate(arrUserErr, "N", "")) return false;		
        		this.fv_appPopCall = "AP11POR";
        		
        	}	else if ("APP" == svcId)
        	{
        		//N이면 필수체크
        		if(!this.gfn_validate(arrUserErr, "N", "")) return false;		
        		this.fv_appPopCall = "APP";
        	}	
        	else
        	{
        		//Y이면 필수체크 제외
        		if(!this.gfn_validate(arrUserErr, "Y", "")) return false;
        	
        		if(!this.gfn_confirm("저장 하시겠습니까?")) return false;	
        		this.fv_appPopCall = false
        	}
        	return true;
        }

        /**
        	@function	fnSave()
        	@param		type {String} app:결재팝업호출전 저장. 그외:임시저장.
        	@desc   	(공통버튼)저장
        */
        this.fnSave = function()
        {
        	//if(!this.fnPreSave(type)) return false;
        	
        	var sSvcID = "save";
        	var sController = "epro.cntr.service.BCntrService.savePo";
        	var sInDatasets = "inPo=dsPo:A inPoItem=dsPoItem:A inPoPay=dsPoPay:A";
        	var sOutDatasets = "dsPo=inPo";
        	var sCallbackFunc = "fnTrCallBack";
        	
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);	
        }

        this.fnPoReq = function(type)
        {
        	if(!this.fnPreSave(type)) return false;
        	
        	this.dsPo.setColumn(0,"CD_PO_STTS","AP11POR");
        	
        	var sSvcID = "fnPoReq";
        	var sController = "epro.cntr.service.BCntrService.savePoReq";
        	var sInDatasets = "inPo=dsPo:A inPoItem=dsPoItem:A inPoPay=dsPoPay:A";
        	var sOutDatasets = "dsPo=inPo";
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
        	
        	switch(strSvcID)
        	{
        		//조회
        		case "read" :
        			
        			this._ds_mainFiles.mergeData(this.ds_specFile);
        						
        			//FILE_JOB_4 : 파일 부모 데이터셋에 시퀀스 추가			
        			this.gfn_fileDsSeq(this.dsPo);
        			this.gfn_fileDsSeq(this.dsPoItem);
        			
        			//FILE_JOB_5 : 저장 후 재조회를 마치고 나서 파일 컴포넌트에 파일정보를 재설정 한다.
        			this.fnFileload();
        			this.fn_getCompFileList2();
        					
        			this.fn_btnSetView();
        			this.div_21_Tab01_tabp01_chkGrPymt_onchanged();	
        			
        			//반품발주일 때
        			if(this.dsPo.getColumn(0, "CD_PO_CTGR")=="PO13RPO")
        			{
        				this.div_21.Tab01.tabp01.rdoPartialDlv.set_enable(false);
        				this.div_21.Tab01.tabp01.cboTotPayCnt.set_enable(false);
        				this.div_21.Tab01.tabp01.chkGrPymt.set_enable(false);
        				
        				this.div_21.Tab01.tabp01.edt_ptnrNm.set_enable(false);
        				this.div_21.Tab01.tabp01.btn_ptnr.set_visible(false);
        			}
        			
        			if(this.fv_appPopCall == "AP11POR")
        			{
        				if(!this.gfn_confirm("발주요청 하시겠습니까?")) return;
        				
        				var sSvcID = "App_MakeAppForm";
        				var sController = "App_MakeAppForm.do";
        				var sInDatasets = "in_ds=dsPo in_dsItem=dsPoItem in_dsPo=dsPoPay";
        				var sOutDatasets = "dsReturn=in_return";
        				var sCallbackFunc = "fn_trCallBack";
        				
        				this.gfn_tran(sSvcID, sController, sInDatasets, sOutDatasets,sCallbackFunc,"GUBUN='AP11POR'");
        				
        				this.fv_appPopCall = "";
        			} 
        			
        			if(this.fv_appCheck == true){
        				this.fv_appCheck = false;
        				
        				if(this.dsPo.getColumn(0,"CD_PO_STTS") == "PO10SND"){
        					gfnAlert("발주가 완료된 문서입니다.");
        					
        				} else{
        					if(application.services["svcurl"].url == "https://eps.paradian.com:8001/"){
        						this.WebBrowser00.callMethod("send",application.gv_portal+"/ekp/view/openapi/commonInterface?cmd=appView&token="+application.gv_ssoToken+"&appId="+this.dsPo.getColumn(0,"APP_DOC_ID"),"a");
        					}else{
        						this.WebBrowser00.callMethod("send",application.gv_portalDev+"/ekp/view/openapi/commonInterface?cmd=appView&token="+application.gv_ssoToken+"&appId="+this.dsPo.getColumn(0,"APP_DOC_ID"),"a");
        					}
        				}
        			}
        		break;
        		
        		//저장
        		case "save" : 
        			
        			this.gfn_setTmprData("PO_NO", this.dsPo.getColumn(0, "PO_NO"));
        			this.gfn_setTmprData("COREXP_KIDS", this.dsPo.getColumn(0, "COREXP_KIDS"));
        			this.fnSearch();	
        			
        			if(this.fv_appPopCall != "AP11POR"){
        				if(strErrMsg != "") gfnAlert(strErrMsg);
        			}
        			
        		break;
        		
        		//삭제 전 입찰 or 견적에서 생성된 발주서를 모두 삭제할 것인지 체크.
        		case "Po_chkRfxOrTndrDel" :
        		
        			if(!gfnIsNull(this.dsReturn.getColumn(0, "TNDR_PO_NO")) && this.dsReturn.getColumn(0, "TNDR_PO_NO")!="X")
        			{
        				var TNDR_PO_NO = this.dsReturn.getColumn(0, "TNDR_PO_NO")
        				var TNDR_PO_NO_CNT  = TNDR_PO_NO.split(',');
        				if(TNDR_PO_NO_CNT.length > 1){
        					if(!this.gfn_confirm("입찰 후 여러 발주서가 생성되었습니다.\n본 발주서를 삭제하면 입찰에서 동시에 생성된 발주서가 삭제됩니다.\n입찰번호:["+this.dsReturn.getColumn(0, "TNDR_NO")+"]\n발주서번호:[" + this.dsReturn.getColumn(0, "TNDR_PO_NO") + "]\n\n모두 삭제하시겠습니까?")) return;
        				}else{
        					if(!this.gfn_confirm("삭제 하시겠습니까?")) return false;
        				}
        			}
        			else if(!gfnIsNull(this.dsReturn.getColumn(0, "RFQ_PO_NO")) && this.dsReturn.getColumn(0, "RFQ_PO_NO")!="X")
        			{
        				var RFQ_PO_NO = this.dsReturn.getColumn(0, "RFQ_PO_NO")
        				var RFQ_PO_NO_CNT  = RFQ_PO_NO.split(',');
        				if(RFQ_PO_NO_CNT.length > 1){
        					if(!this.gfn_confirm("견적 후 여러 발주서가 생성되었습니다.\n본 발주서를 삭제하면 견적에서 동시에 생성된 발주서가 삭제됩니다.\n견적번호:["+this.dsReturn.getColumn(0, "RFQ_REQ_NO")+"]\n발주서번호:[" + this.dsReturn.getColumn(0, "RFQ_PO_NO") + "]\n\n모두 삭제하시겠습니까?")) return;
        				}else{
        					if(!this.gfn_confirm("삭제 하시겠습니까?")) return false;
        				}
        			}
        			else
        			{
        				if(!this.gfn_confirm("삭제 하시겠습니까?")) return false;
        			}
        			
        			var sSvcID = "Po_Del";
        			var sController = "Po_Del.do";
        			var sInDatasets = "in_po=dsPo in_poItem=dsPoItem"; 
        			var sOutDatasets = "";
        			var sCallbackFunc = "fn_trCallBack";
        			
        			//FILE_JOB_3 :  트랜잭션 gfn_fileTran 으로 변경
        			this.gfn_fileSaveTran(sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        		break;
        		
        		//삭제
        		case "Po_Del" :	
        			if(strErrMsg != ""){
        				gfnAlert(strErrMsg);
        				
        				if(application.gds_openMenu.rowcount >= application.gv_openMaxFrame){
        					this.parent.fn_close();
        				}else{
        					this.gfn_openMenuUrl("PORB::PPORB100L00", "Y");	//발주진행현황으로 이동.
        				}
        			}
        		break;
        		
        		//발주요청 조회
        		case "Po_prReqPoSrch" :						
        			this.fn_btnSetView();
        			//입고 실적에 따라 지급 여부가 체크되면 지급회차는 비활성화 된다.
        			this.div_21_Tab01_tabp01_chkGrPymt_onchanged();
        		break;
        		
        		case "App_MakeAppForm" :
        			this.fnSearch();	
        			this.WebBrowser00.callMethod("send",this.dsReturn.getColumn(0,"ACTION_URL"),this.dsReturn.getColumn(0,"PARAM_VALUE"));
        		break;
        				
        		default:
        		break;	
        	}
        }

        
        /**
        	@function	fn_btnSetView()
        	@desc   	상태별 버튼 View 제어
        */
        this.fn_btnSetView = function()
        {		
        	if(this.dsPo.getColumn(0,"CHRGR_ID") == application.gdsUserInfo.getColumn(0,"USER_ID"))
        	{	
        		//[작성중] 변경가능
        		if("PO10WRI" == this.dsPo.getColumn(0, "CD_PO_STTS"))
        		{		
        			this.gfn_objReSet(this, "U");
        			this.div_21.Tab01.tabp01.grdPymtItem.setFormat("MMODE");
        			this.div_31.grdPoItem.setFormat("MMODE");			
         			
         			if(!gfnIsNull(this.dsPo.getColumn(0,"PO_NO")))
         			{
        				this.parent.div_commBtns.btn_comDel.set_visible(true); //삭제
         			}
        			
        			this.parent.div_commBtns.btn_commSave.set_visible(true); //저장
        			
        			this.div_3.sta_dlvDay.set_visible(true); //납품요청일자 텍스트
        			
        			if(gfnIsNull(this.dsPo.getColumn(0,"PO_NO")) && !gfnIsNull(this.dsPo.getColumn(0,"PTNR_ID")))
        			{
        				this.div_21.Tab01.tabp01.edt_ptnrNm.set_readonly(true);
        				this.div_21.Tab01.tabp01.btn_ptnr.set_visible(false);
        			}
        			else
        			{
        				this.div_21.Tab01.tabp01.edt_ptnrNm.set_readonly(false);
        				this.div_21.Tab01.tabp01.btn_ptnr.set_visible(true);
        			}
        		}		
        		else if(this.dsPo.getColumn(0,"CD_PO_STTS") == "PO10WAT"){
        			this.gfn_objReSet(this, "R");
        			this.div_21.Tab01.tabp01.grdPymtItem.setFormat("VMODE");
        			this.div_31.grdPoItem.setFormat("VMODE");
        			
        			this.parent.div_commBtns.btn_comDel.set_visible(false); //삭제
        			this.parent.div_commBtns.btn_commSave.set_visible(false); //저장
        			
        			this.div_3.sta_dlvDay.set_visible(false); //납품요청일자 텍스트
        			this.div_1.btn_poReq.set_visible(false);
        			this.div_1.btn_poReq00.set_visible(true);
        			this.div_1.btn_poReq01.set_visible(false);
        		}
        		else if(this.dsPo.getColumn(0,"CD_PO_STTS") == "PO10APP"){
        			this.gfn_objReSet(this, "R");
        			this.div_21.Tab01.tabp01.grdPymtItem.setFormat("VMODE");
        			this.div_31.grdPoItem.setFormat("VMODE");
        			
        			this.parent.div_commBtns.btn_comDel.set_visible(false); //삭제
        			this.parent.div_commBtns.btn_commSave.set_visible(false); //저장
        			
        			this.div_3.sta_dlvDay.set_visible(false); //납품요청일자 텍스트
        			this.div_1.btn_poReq.set_visible(false);
        			this.div_1.btn_poReq00.set_visible(false);
        			this.div_1.btn_poReq01.set_visible(true);
        		}
        		//검수작성하기전에는 계속해서 변경가능 - 단 수량,납품요청일자만 변경가능
        		else if(this.dsPo.getColumn(0, "ALT_DLV")!="Y")
        		{				
        			this.gfn_objReSet(this, "R");
        			this.div_21.Tab01.tabp01.grdPymtItem.setFormat("VMODE");
        			this.div_31.grdPoItem.setFormat("CHGMODE");
         				
        			this.parent.div_commBtns.btn_comDel.set_visible(false); //삭제
        			this.parent.div_commBtns.btn_commSave.set_visible(false); //저장
        			
        			//납품요청일자 텍스트
        			this.div_3.sta_dlvDay.set_visible(true); 
        			
        			//납품요청일자 달력
        			this.div_3.calDlvDayBat.set_readonly(false);
        			this.div_3.calDlvDayBat.set_visible(true); 
        			
        			//납품요청일자 일괄설정 버튼
        			this.div_3.btn_Set_Day.set_enable(true); 
        			this.div_3.btn_Set_Day.set_visible(true);
        			
        			this.div_1.btn_poReq.set_visible(true); //발주요청
        			
        			this.div_21.Tab01.tabp01.edt_ptnrNm.set_readonly(true);
        			this.div_21.Tab01.tabp01.btn_ptnr.set_visible(false);
        		}		
        		else 
        		{
        			this.gfn_objReSet(this, "R");
        			this.div_21.Tab01.tabp01.grdPymtItem.setFormat("VMODE");
        			this.div_31.grdPoItem.setFormat("VMODE");
        			
        			this.parent.div_commBtns.btn_comDel.set_visible(false); //삭제
        			this.parent.div_commBtns.btn_commSave.set_visible(false); //저장
        			
        			this.div_3.sta_dlvDay.set_visible(false); //납품요청일자 텍스트
        		}
        	}
        	else
        	{
        		this.gfn_objReSet(this, "R");
        		this.div_21.Tab01.tabp01.grdPymtItem.setFormat("VMODE");
        		this.div_31.grdPoItem.setFormat("VMODE");
        		
        		this.parent.div_commBtns.btn_comDel.set_visible(false); //삭제
        		this.parent.div_commBtns.btn_commSave.set_visible(false); //저장
        		
        		this.div_3.sta_dlvDay.set_visible(false); //납품요청일자 텍스트
        	}
        		
        	this.gfn_btnRange(this.parent.div_commBtns.btn_commInit);
        	this.gfn_btnRange(this.div_1.btn_poReq);
        	
        	//고시환율 기준
        	if(gfnIsNull(this.dsPo.getColumn(0, "EXCHG_RMARK")))
        	{
        		this.dsPo.setColumn(0, "EXCHG_RMARK", null);
        	}
        	
        	//계산서코드 선택시 계산서구분 세팅	
        	this.div_21_Tab01_tabp01_cbo_cdTaxKind_onitem();	
        }

        this.btnPntr_onclick = function(obj,e)
        {
        	var sArg = { 
        			agv_nm:this.dsPo.getColumn(0,"PTNR_NM")
        	   }; 
        	   
        	gfnSearchComPtnr(this, "PtnrSingSrch", "fnPopCallBack", sArg);
        }

        
        this.dsPoItem_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid=="QTY" || e.columnid=="PO_PRICE")
        	{
        		//반품발주
        		if(this.dsPo.getColumn(0, "CD_PO_CTGR")=="PO13RPO")
        		{
        			if(this.dsPoItem.getColumn(this.dsPoItem.rowposition , "QTY") >= 0)
        			{
        				this.dsPoItem.setColumn(this.dsPoItem.rowposition, "QTY", e.oldvalue);
        				gfnAlert("수량에 양수를 입력할 수 없습니다.");
        				return;
        			}
        			
        			if(this.dsPoItem.getColumn(this.dsPoItem.rowposition , "PO_PRICE") >= 0)
        			{
        				this.dsPoItem.setColumn(this.dsPoItem.rowposition, "PO_PRICE", e.oldvalue);
        				gfnAlert("단가에 양수를 입력할 수 없습니다.");
        				return;
        			}
        		}
        		else
        		{
        			if(this.dsPoItem.getColumn(this.dsPoItem.rowposition , "QTY") <= 0)
        			{
        				this.dsPoItem.setColumn(this.dsPoItem.rowposition, "QTY", e.oldvalue);
        				gfnAlert("수량에 음수를 입력할 수 없습니다.");
        				return;
        			}
        			
        			if(this.dsPoItem.getColumn(this.dsPoItem.rowposition , "PO_PRICE") <= 0)
        			{
        				this.dsPoItem.setColumn(this.dsPoItem.rowposition, "PO_PRICE", e.oldvalue);
        				gfnAlert("단가에 음수를 입력할 수 없습니다.");
        				return;
        			}
        		}
        		
        		var poAmt=0;
        		var poVat=0;
        			
        		for(var i=0; i<this.dsPoItem.rowcount; i++)
        		{
        			var qtyRtn = this.dsPoItem.getColumn(i , "QTY");
        			var poPriceRtn = this.dsPoItem.getColumn(i , "PO_PRICE");
        				
        			if(gfnIsNull(qtyRtn)) qtyRtn = 0;	
        			if(gfnIsNull(poPriceRtn)) poPriceRtn = 0;
        				
        			this.dsPoItem.setColumn(i, "PO_AMT", (qtyRtn * poPriceRtn)); //품목별 총금액
        			
        			if(this.dsPoItem.getColumn(i, "VAT") > 0) 
        			{
        				this.dsPoItem.setColumn(i, "VAT", (qtyRtn * poPriceRtn * 0.1)); //품목별 부가세
        				poVat += (qtyRtn * poPriceRtn * 0.1);
        			}
        			
        			poAmt += (qtyRtn * poPriceRtn);
        		}
        		
        		this.dsPo.setColumn(0, "PO_AMT", poAmt);	//헤더 공급가
        		this.dsPo.setColumn(0, "VAT", poVat);	//헤더 공급가
        		this.dsPo.setColumn(0, "TOT_AMT", (poAmt + poVat));	//헤더 총금액
        			
        		//지급일정 금액계산
        		this.fnCalcu_PoPayPytmeRt();
        		
        		//지급일정 그리드 컨트롤
        		this.fnCalCu_poPay(this.dsPo.getColumn(0, "TOT_PAY_CNT"));		
        	}
        }

        /**
          *	@function	fnPopCallBack()
          *	@desc   	팝업 CallBack 함수
          */
        this.fnPopCallBack = function(sPopupId,rtn)
        {
        	this.dsReturn.clear();
        	this.dsReturn.loadXML(rtn);
        	if(this.dsReturn.getRowCount() < 1) return;
        	switch(sPopupId){

        		case "PopupComCopSrchItm" :		
        			this.dsPoItem.setColumn(this.dsPoItem.rowposition,"PTNR_ID",this.dsReturn.getColumn(0,"PTNR_ID"));
        			this.dsPoItem.setColumn(this.dsPoItem.rowposition,"PTNR_NM",this.dsReturn.getColumn(0,"PTNR_NM"));
        			
        			this.dsPoItem.setColumn(this.dsPoItem.rowposition,"ADDR",this.dsReturn.getColumn(0,"ADDR"));
        			this.dsPoItem.setColumn(this.dsPoItem.rowposition,"ZIP_NO",this.dsReturn.getColumn(0,"ZIP_NO"));
        			this.dsPoItem.setColumn(this.dsPoItem.rowposition,"DTL_ADDR",this.dsReturn.getColumn(0,"DTL_ADDR"));
        			break;

        		case "ctrReqPop" :
        			
        			var cntrNoArr = new Array();			
        			for(var i=0; i<this.dsReturn.getRowCount(); i++)
        			{
        				cntrNoArr[i] = this.dsReturn.getColumn(i, "CNTR_NO");				
        			}						
        			this.fn_cntrItemSrch(cntrNoArr);
        			break;

        		case "PPOPC1700P00" :		
        			this.dsPoItem.set_enableevent(false);
        				
        			for(var i=0; i<this.dsPoItem.getRowCount(); i++)
        			{
        				this.dsPoItem.setColumn(i, "STR_CD"	, this.dsReturn.getColumn(i, "STR_CD"));
        				this.dsPoItem.setColumn(i, "SL_NM" , this.dsReturn.getColumn(i, "SL_NM"));
        			}
        			
        			this.dsPoItem.set_enableevent(true);	
        			break;

        		case "StorageSingSrch" :
        			this.dsPoItem.setColumn(this.dsPoItem.rowposition, "STR_CD"	, this.dsReturn.getColumn(0, "STR_CD"));
        			this.dsPoItem.setColumn(this.dsPoItem.rowposition, "SL_NM" , this.dsReturn.getColumn(0, "SL_NM"));
        			break;
        		
        		case "PPOPC1600P00" :
        			this.dsPoItem.setColumn(this.dsPoItem.rowposition, "GR_ACNT_CD", this.dsReturn.getColumn(0,"ACNT_CD"));
        			this.dsPoItem.setColumn(this.dsPoItem.rowposition, "ACNT_NM", this.dsReturn.getColumn(0,"ACNT_NM"));
        			break;

        		case "PtnrSingSrch" :
        			this.dsPo.setColumn(0, "PTNR_ID" 		, this.dsReturn.getColumn(0,"PTNR_ID"));
        			this.dsPo.setColumn(0, "PTNR_NM" 		, this.dsReturn.getColumn(0,"PTNR_NM"));			
        			this.dsPo.setColumn(0, "CD_PO_CRNC" 	, this.dsReturn.getColumn(0,"CD_PO_CRNC"));
        			this.dsPo.setColumn(0, "CD_DLV_MTHD" 	, this.dsReturn.getColumn(0,"CD_DLV_MTHD"));
        			this.dsPo.setColumn(0, "CD_PYMT_CNDTN"	, this.dsReturn.getColumn(0,"CD_PYMT_CNDTN"));
        			this.dsPo.setColumn(0, "CD_PAY_CTGR" 	, this.dsReturn.getColumn(0,"CD_PAY_CTGR"));
        			this.dsPo.setColumn(0, "CD_TAX_KIND" 	, this.dsReturn.getColumn(0,"CD_TAX_KIND"));
        			this.dsPo.setColumn(0, "CD_TAX_CD" 	, this.dsReturn.getColumn(0,"CD_TAX_CD"));
        			this.dsPo.setColumn(0, "CD_DLV_AREA" 	, this.dsReturn.getColumn(0,"CD_DLV_AREA"));
        			
        			this.div_21_Tab01_tabp01_cbo_cdTaxKind_onitem();
        			break;

        		case "PopupAppReq" :
        			var isSucc = this.dsReturn.getColumn(0, "IS_SUCCESS");
        			
        			if(isSucc == "Y") this.fnSearch();
        			break;
        		
        		case "commSpecFilePop" :
        			this.dsPoItem.set_enableevent(false);
        			if(gfnIsNull(this.dsReturn.getColumn(0, "REF_KEY_2")))
        			{
        				this.dsPoItem.setColumn(this.dsPoItem.rowposition, "SPEC_FILE_NO", "");
        			}
        			else
        			{
        				this.dsPoItem.setColumn(this.dsPoItem.rowposition, "SPEC_FILE_NO", this.dsReturn.getColumn(0, "REF_KEY_2"));
        			}
        			this.dsPoItem.set_enableevent(true);
        			break;
        		case "PopupComUserSrch" :
        			this.dsPoItem.setColumn(this.dsPoItem.rowposition,"INSP_CHRGR_ID",this.dsReturn.getColumn(0,"USER_ID"));
        			this.dsPoItem.setColumn(this.dsPoItem.rowposition,"INSP_CHRGR_NM",this.dsReturn.getColumn(0,"USER_NM"));
        			break;
        			
        		default:
        		break;	
        	}
        }

        this.div_21_Tab01_tabp01_grdPymtItem_ontextchanged = function(obj,e)
        {
        	if(gfnGrdBindColId(this.div_21.Tab01.tabp01.grdPymtItem, this.div_21.Tab01.tabp01.grdPymtItem.getCellPos())=="PYMT_RT")
        	{
        		//지급일정 금액계산
        		this.fnCalcu_PoPayPytmeRt();
        	}
        }

        /**
        	@function	fnCalcu_PoPayPytmeRt()
        	@desc   	지급일정 금액계산
        */
        this.fnCalcu_PoPayPytmeRt = function()
        {
        	this.div_21.Tab01.tabp01.grdPymtItem.updateToDataset();
        	
        	for(var i=0; i<this.dsPoPay.getRowCount(); i++)
        	{
        		var caluAmt = (this.dsPo.getColumn(0, "PO_AMT") / 100 * this.dsPoPay.getColumn(i, "PYMT_RT")).toFixed(0);
        		this.dsPoPay.setColumn(i, "PYMT_PLN_AMT", caluAmt);		
        	}
        }

        
        this.div_21_Tab01_onchanged = function(obj,e)
        {
        	if(this.div_21.Tab01.tabindex == 3){
        		this.fnFileload();
        	}
        }

        this.div_41_Tab01_onchanged = function(obj,e)
        {
        	if(this.div_41.Tab01.tabindex == 2) //첨부파일
        	{
        		this.fnItemFileload();
        	}
        }

        /**
          * @함수명	: fnFileload
          * @desc     	: 첨부파일 셋팅
          */
        this.fnFileload= function()
        {
        	var array = [this.dsPo.getColumn(this.dsPo.rowposition, "PO_NO")];
        	var poStts = this.dsPo.getColumn(0,"CD_PO_STTS");
        	var fUse = "Y";

        	if(poStts == "PO10WRI" || poStts == "PO10CXL" || poStts == ""){
        		fUse = "N";
        	}
        		
        	var sTableNm = "MM_PO";
        	var arrFileKey = [this.dsPo.getColumn(0, "PO_NO")];
        	this.div_21.Tab01.tabp04.fnFileInit(this, sTableNm, this.dsPo, arrFileKey,fUse);
        }

        

        /**
        	@function	: fnItemFileload()
        	@desc   	: 아이템 첨부파일 셋팅
        */
        this.fnItemFileload = function()
        {
        	var array = [this.dsPoItem.getColumn(this.dsPoItem.rowposition, "PO_NO"),this.dsPoItem.getColumn(this.dsPoItem.rowposition, "PO_ITEM_ID")];
        	var poStts = this.dsPo.getColumn(0,"CD_PO_STTS");
        	var fUse = "Y";
        	
        	if(poStts == "PO10WRI" || poStts == "PO10CXL" || gfnIsNull(poStts)){
        		fUse = "N";
        	}

        	var sTableNm = "MM_PO_ITEM";
        	var arrFileKey = [this.dsPo.getColumn(0, "PO_NO")
        					,this.dsPoItem.getColumn(this.dsPoItem.rowposition,"PO_ITEM_ID")];
        	this.div_41.Tab01.tabp03.fnFileInit(this, sTableNm, this.dsPoItem, arrFileKey,fUse);
        }

        
        /**
        	@function	: dsPoItem_onrowposchanged()
        	@desc   	: 아이템 첨부파일 셋팅
        */
        this.dsPoItem_onrowposchanged = function(obj,e)
        {
        	this.div_41_Tab01_onchanged();
        	
        	//납품이력 필터링 걸자.
        	this.dsPoDlvItem.filter("PO_ITEM_ID=='" + this.dsPoItem.getColumn(this.dsPoItem.rowposition, "PO_ITEM_ID") + "'");
        }

        
        /**
        	@function	: fnAltGrPymt_onchanged()
        	@desc   	: 입고 실적에 따라 지급 여부가 체크되면 지급회차는 비활성환 된다.
        */
        this.fnAltGrPymt_onchanged = function(obj,e)
        {
        	if(obj.isChecked())
        	{
        		this.fnCalCu_poPay(1);
        		this.div_21.Tab01.tabp01.cboTotPayCnt.set_enable(false);
        		this.div_21.Tab01.tabp01.grdPymtItem.set_enable(false);
        		this.div_21.Tab01.tabp01.rdoPartialDlv.set_enable(true);
        	}
        	else
        	{	
        		this.div_21.Tab01.tabp01.cboTotPayCnt.set_enable(true);
        		this.div_21.Tab01.tabp01.grdPymtItem.set_enable(true);
        		this.div_21.Tab01.tabp01.rdoPartialDlv.set_enable(false);
        		this.dsPo.setColumn(0, "ALT_PARTIAL_DLV", "N");
        	}
        }

        /**
        	@function	fnTotPayCnt_onitemchanged()
        	@desc   	지급회차 콤보박스 변경
        */
        this.fnTotPayCnt_onitemchanged = function(obj,e)
        {
        	this.fnCalCu_poPay(this.dsPo.getColumn(0, "TOT_PAY_CNT"));
        }

        /**
        	@function	fnCalCu_poPay()
        	@param 		odr {String} 차수
        	@desc   	발주 지급일정 그리드 계산
        */
        this.fnCalCu_poPay = function(odr)
        {	
        	this.dsPo.setColumn(0, "TOT_PAY_CNT", odr);
        	
        	var rowCnt = this.dsPoPay.getRowCount();	
        	
        	if(odr == 1)
        	{	
        		var tmpRmark = this.dsPoPay.getColumn(0, "RMARK");
        		this.dsPoPay.deleteAll();
        		var nRow = this.dsPoPay.addRow();
        		this.dsPoPay.setColumn(nRow, "PYMT_RT"			, "100");		
        		this.dsPoPay.setColumn(nRow, "PYMT_PLN_AMT"	, this.dsPo.getColumn(0, "PO_AMT"));
        		this.dsPoPay.setColumn(nRow, "PYMT_PLN_DAY"	, "");
        		this.dsPoPay.setColumn(nRow, "RMARK"			, tmpRmark);		
        		
        		this.div_21.Tab01.tabp01.cboTotPayCnt.set_enable(false);
        		this.div_21.Tab01.tabp01.grdPymtItem.set_enable(false);
        		
        		if(this.dsPo.getColumn(0,"CHRGR_ID") == application.gdsUserInfo.getColumn(0,"USER_ID"))
        		{
        			//PO10REQ 변경요청, PO10WRI	작성중
        			if(this.dsPo.getColumn(0, "CD_PO_STTS") == "PO10REQ" || this.dsPo.getColumn(0, "CD_PO_STTS") == "PO10WRI")
        			{
        				this.div_21.Tab01.tabp01.rdoPartialDlv.set_enable(true);	
        			}
        		}
        	}
        	else if(rowCnt < odr)
        	{
        		var subtraction = Number(odr - rowCnt);
        		
        		for(var i=0; i<subtraction; i++)
        		{
        			var nRow = this.dsPoPay.addRow();			
        			//차수는 여기서 세팅안한다. dsPoPay_onrowsetchanged()에서 세팅한다.
        			this.dsPoPay.setColumn(nRow, "PYMT_RT"			, "");		
        			this.dsPoPay.setColumn(nRow, "PYMT_PLN_AMT"	, "");
        			this.dsPoPay.setColumn(nRow, "PYMT_PLN_DAY"	, "");
        		}
        	}
        	else if(rowCnt > odr)
        	{
        		var subtraction = Number(rowCnt - odr);
        		
        		for(var i=0; i<subtraction; i++)
        		{
        			this.dsPoPay.deleteRow();
        		}		
        	}	
        }

        /**
        	@function	dsPoPay_onrowsetchanged()
        	@desc   	dsPoPay rowchanged 이벤트 
        */
        this.dsPoPay_onrowsetchanged = function(obj,e)
        {
        	for(var i=0; i<this.dsPoPay.getRowCount(); i++)
        	{
        		this.dsPoPay.setColumn(i, "ODR" , i+1);
        	}	
        }

        /**
        	@function	div_31_grdPoItem_oncellclick()
        	@desc   	발주품목 클릭 이벤트
        */
        this.div_31_grdPoItem_oncellclick = function(obj,e)
        {
        	if(gfnGrdBindColId(obj, e.cell)=="RMARK")	//품목 특이사항
        	{
        		this.div_41.Tab01.set_tabindex(1);
        	}		
        	else if(gfnGrdBindColType(obj, e.cell)=="button")	//시방서ID
        	{
        		if(gfnIsNull(this.dsPo.getColumn(0, "PO_NO")))
        		{
        			gfnAlert("저장 후 시방서를 첨부하세요.");
        			return;
        		}
        		
        		var sArg = { agv_tbNm		 : "MM_MTRL_SFILE"
        					, agv_branchCd	 : application.gdsUserInfo.getColumn(0, "BRANCH_CD")					
        					, agv_refTblNm	 : "MM_PO_ITEM_ADD"
        					, agv_refKeyNm	 : "PO_ITEM_ID"
        					, agv_mode		 : this.div_31.grdPoItem.formatid
        					, agv_ds		 : this.dsSpecFile
        					, agv_keyArray   : [this.dsPoItem.getColumn(this.dsPoItem.rowposition, "MTRL_CD")
        										, this.dsPoItem.getColumn(this.dsPoItem.rowposition, "SPEC_FILE_NO")
        										, this.dsPoItem.getColumn(this.dsPoItem.rowposition, "PO_ITEM_ID")]
        					};
        		gfnModalPop(this, "commSpecFilePop", "CCOMP::PPOPC2300P00.xfdl", sArg, "fnPopCallBack");
        	}
        }

        /**
        	@function	div_31_grdPoItem_oncellclick()
        	@desc   	발주품목 더블클릭 이벤트
        */
        this.div_31_grdPoItem_oncelldblclick = function(obj,e)
        {
        	if(gfnIsNull(this.dsPoItem.getColumn(e.row, gfnGrdBindColId(obj, e.cell)))) return false;
        	
        	if(gfnGrdBindColId(obj, e.cell)=="MTRL_NM")	//품목코드
        	{
        		var sArg = { 
        						mtrl_cd:this.dsPoItem.getColumn(e.row, "MTRL_CD")	
        					};
        		gfnModalPop(this, "PopupComMtrlView", "CCOMP::PPOPC700P01.xfdl", sArg, "fnPopCallBack");
        	}
        	else if(gfnGrdBindColId(obj, e.cell)=="REQR_NM")	//요청자
        	{
        		var sArg = {	 branch_cd : application.gdsUserInfo.getColumn(0, "BRANCH_CD")
        						,  user_id : this.dsPoItem.getColumn(e.row, "REQR_ID")
        					};
        		gfnModalPop(this, "PopupUserInfo", "CCOMP::PPOPC000P05.xfdl", sArg, "fnPopCallBack");
        	}
        	else if(gfnGrdBindColId(obj, e.cell)=="SL_NM"){ //창고
        		var sArg = {strCd:this.dsPoItem.getColumn(e.row,"STR_CD")
        		            ,branchCd:application.gdsUserInfo.getColumn(0, "BRANCH_CD")};

        		gfnModalPop(this, "PPOPC400P00", "CCOMP::PPOPC400P00.xfdl", sArg, "fnPopCallBack");
        	}
        	
        	if(this.div_31.grdPoItem.formatid != "MMODE"){
        		if(gfnGrdBindColId(obj, e.cell)=="INSP_CHRGR_NM")	//검수담당자
        		{
        			var sArg = {	 branch_cd : application.gdsUserInfo.getColumn(0, "BRANCH_CD")
        							,  user_id : this.dsPoItem.getColumn(e.row, "INSP_CHRGR_ID")
        						};
        			gfnModalPop(this, "PopupUserInfo", "CCOMP::PPOPC000P05.xfdl", sArg, "fnPopCallBack");
        		}
        	}
        }

        /**
        	@function	div_31_grdPoItem_onexpandup()
        	@desc   	발주품목 onexpandup 이벤트
        */
        this.div_31_grdPoItem_onexpandup = function(obj,e)
        {	
        	alert("여기 공통팝업 함수 만들어야됨.");
        	obj.updateToDataset();
        	if("SL_NM" == gfnGrdBindColId(obj, obj.getCellPos()))	//창고
        	{		
        		var sArg = { 
        					agv_nm:this.dsPoItem.getColumn(this.dsPoItem.rowposition, "SL_NM")
        			   };
        		gfnCPopComStorageSrch(sArg,"fnPopCallBack","StorageSingSrch");
        	}
        	else if("ACNT_NM" == gfnGrdBindColId(obj, obj.getCellPos()))	//계정
        	{			
        		var sArg = { 
        						agv_nm:this.dsPoItem.getColumn(this.dsPoItem.rowposition, "ACNT_NM")
        					};
        		gfnCPopComAccountSrch(sArg,"fnPopCallBack","PPOPC1600P00");
        	}
        	else if("INSP_CHRGR_NM" == gfnGrdBindColId(obj, obj.getCellPos()))	//검수담당자
        	{		
        		var sArg = {
        						agv_id:""
        						,agv_nm:this.dsPoItem.getColumn(this.dsPoItem.rowposition,"INSP_CHRGR_NM")
        						,agv_mode:""
        					};
        		gfnCPopComUserSrch(sArg,"fnPopCallBack","PopupComUserSrch");
        	}
        }

        /**
        	@function	div_31_grdPoItem_onkeydown()
        	@desc   	발주품목 키다운 이벤트
        */
        this.div_31_grdPoItem_onkeydown = function(obj,e)
        {
        	if(e.keycode == "13")
        	{
        		obj.updateToDataset();
        	
        		if("SL_NM" == gfnGrdBindColId(obj, obj.getCellPos())
        		|| "ACNT_NM" == gfnGrdBindColId(obj, obj.getCellPos()))
        		{
        			this.div_31_grdPoItem_onexpandup(obj,e);
        		}
        		else if("INSP_CHRGR_NM" == gfnGrdBindColId(obj, obj.getCellPos()))
        		{
        			var sArg = {
        							agv_id:""
        							,agv_nm:this.dsPoItem.getColumn(this.dsPoItem.rowposition,"INSP_CHRGR_NM")
        							,agv_mode:""
        						};
        			gfnCPopComUserSrch(sArg,"fnPopCallBack","PopupComUserSrch");
        		}
        	}
        }

        /**
        	@function	div_31_grdPoItem_ontextchanged()
        	@desc   	발주품목 텍스트 이벤트
        */
        this.div_31_grdPoItem_ontextchanged = function(obj,e)
        {
        	if("SL_NM" == gfnGrdBindColId(obj, obj.getCellPos()))
        	{
        		gfnInitKey(this.dsPoItem,e,"STR_CD");
        	}
        	else if("ACNT_NM" == gfnGrdBindColId(obj, obj.getCellPos()))
        	{
        		gfnInitKey(this.dsPoItem,e,"GR_ACNT_CD");
        	}
        	else if("INSP_CHRGR_NM" == gfnGrdBindColId(obj, obj.getCellPos()))
        	{
        		gfnInitKey(this.dsPoItem,e,"INSP_CHRGR_ID");
        	}
        }

        /**
        	@function	fn_cntrItemSrch()
        	@desc   	계약품목 조회
        */
        this.fn_cntrItemSrch = function(cntrNoArr)
        {
        	this.dsReturn.deleteAll();
        	this.dsReturn.addColumn( "CNTR_NO_ARR", "string" );
        	var nRow = this.dsReturn.addRow();
        	this.dsReturn.setColumn(nRow, "CNTR_NO_ARR", cntrNoArr);

        	var sSvcID = "Po_CntrItemSrch";
        	var sController = "Po_CntrItemSrch.do";
        	var sInDatasets = "in_ds=dsReturn"; 
        	var sOutDatasets = "dsReturn=dsReturn";
        	var sCallbackFunc = "fn_trCallBack";
        	
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc, oPaging);
        }

        /**
        	@function	Div4_cbo_itemChg_onitemchanged()
        	@desc   	발주품목 콤보 선택 이벤트
        */
        this.Div4_cbo_itemChg_onitemchanged = function(obj,e)
        {
        	this.dsPoItem.set_rowposition(this.dsPoItem.findRow("PO_ITEM_ID",obj.value));
        }

        /**
        	@function	div_4_btn_poItemRowUp_onclick()
        	@desc   	자재를 위로 이동하여 편집
        */
        this.div_4_btn_poItemRowUp_onclick = function(obj,e)
        {
        	if(this.dsPoItem.rowposition==0) return;
        	this.dsPoItem.set_rowposition(this.dsPoItem.rowposition-1);
        }

        
        /**
        	@function	div_4_btn_poItemRowDown_onclick()
        	@desc   	자재를 아래로 이동하여 편집
        */
        this.div_4_btn_poItemRowDown_onclick = function(obj,e)
        {
        	if(this.dsPoItem.rowposition==this.dsPoItem.rowcount-1) return;
        	this.dsPoItem.set_rowposition(this.dsPoItem.rowposition+1);
        }

        
        /**
        	@function	fnOntextchanged()
        	@desc   	페이지 ontextchanged 이벤트
        */
        this.fnOntextchanged = function(obj,e)
        {
        	if(obj.name=="edt_ptnrNm")
        	{
        		gfnInitKey(this.dsPo,e,"PTNR_ID");		
        	}
        	else if(obj.name=="edt_slNm")
        	{
        		gfnInitKey(this.dsPoItem,e,"STR_CD");
        	}
        }

        /**
        	@function	fnOnkeydown()
        	@desc   	페이지 onkeydown 이벤트
        */
        this.fnOnkeydown = function(obj,e)
        {
        	if(e.keycode==13)
        	{
        		obj.updateToDataset();		
        		if(obj.name=="edt_ptnrNm")
        		{
        			var sArg = { 
        				agv_nm:this.ds_po.getColumn(0, "PTNR_NM")
        		   };
        			gfnSearchComPtnr(this, "PtnrSingSrch", "fnPopCallBack", sArg);
        		}
        		else if(obj.name=="edt_slNm")
        		{
        			var sArg = { 
        					agv_nm:this.dsPoItem.getColumn(this.dsPoItem.rowposition, "SL_NM")
        			   };
        			gfnCPopComStorageSrch(sArg,"fnPopCallBack","StorageSingSrch");
        		}
        	}
        }

        
        /**
        	@function	div_3_btn_Set_Day_onclick()
        	@desc   	납품요청일자 일괄변경
        */
        this.div_3_btn_Set_Day_onclick = function(obj,e)
        {
        	if(gfnIsNull(this.div_3.calDlvDayBat.value)) return;
        	
        	this.dsPoItem.set_enableevent(false);
        	
        	for(var i=0; i<this.dsPoItem.getRowCount(); i++)
        	{
        		this.dsPoItem.setColumn(i, "DLV_REQ_DAY", this.div_3.calDlvDayBat.value);
        	}
        	
        	this.dsPoItem.set_enableevent(true);
        }

        /**
        	@function	div_21_Tab01_tabp01_cbo_cdTaxKind_onitem()
        	@desc   	계산서코드 선택시 계산서구분 세팅
        */
        this.div_21_Tab01_tabp01_cbo_cdTaxKind_onitem = function(obj,e)
        {
         	var postVal = this.dsPo.getColumn(0, "CD_TAX_KIND");
         	this.dsCdIV21.filter("UP_CD_ID=='"+ postVal +"' || CD_ID==''");
         		
        	var nRow = this.dsCdIV21.findRow("CD_ID", this.dsPo.getColumn(0, "CD_TAX_CD"));	
        	if(nRow < 0)
        	{
        		this.dsPo.setColumn(0, "CD_TAX_CD", "");
        	}
        	
        	//계산서종류를 신용카드 선택시 카드번호 및 카드승인번호는 필수
        	if(postVal == "IV20A1")
        	{
        		this.div_21.Tab01.tabp01.sta_cdTaxkind.set_usedecorate(true);
        		this.div_21.Tab01.tabp01.sta_cardAppNo.set_usedecorate(true);		
        		this.div_21.Tab01.tabp01.sta_cdTaxkind.set_text("<fc v='red'>*</fc> 카드번호");
        		this.div_21.Tab01.tabp01.sta_cardAppNo.set_text("<fc v='red'>*</fc> 카드승인번호");
        	}
        	else
        	{
        		this.div_21.Tab01.tabp01.sta_cdTaxkind.set_usedecorate(false);
        		this.div_21.Tab01.tabp01.sta_cardAppNo.set_usedecorate(false);
        		this.div_21.Tab01.tabp01.sta_cdTaxkind.set_text("카드번호");
        		this.div_21.Tab01.tabp01.sta_cardAppNo.set_text("카드승인번호");
        	}
        }

        /**
        	@function	div_21_Tab01_tabp01_cbo_cdPymtCndtn_onitemchanged()
        	@desc   	지급계정별 계산서종류 세팅
        */
        this.div_21_Tab01_tabp01_cbo_cdPymtCndtn_onitemchanged = function(obj,e)
        {	
        	var postval = this.dsPo.getColumn(0, "CD_PYMT_CNDTN");
        	
        	//전도금(부서)
        	if(postval == "CM1311125020")
        	{
        		this.dsCdIV20.filter("CD_ID == 'IV20A1' || CD_ID == 'IV20B1' || CD_ID == 'IV20C0' || CD_ID == 'IV20C3' || CD_ID == '' ");		
        	}
        	
        	//[CM1311133010:선급금], [CM1321101000:외상매입금], [CM1321110010:미지급금]
        	else if(postval=="CM1311133010" || postval=="CM1321101000" || postval=="CM1321110010")
        	{
        		this.dsCdIV20.filter("CD_ID == 'IV20A1' || CD_ID == 'IV20B1' || CD_ID == 'IV20C0' || CD_ID == 'IV20C1' || CD_ID == 'IV20C3' || CD_ID == '' ");
        	}
        	
        	var nRow = this.dsCdIV20.findRow("CD_ID", this.dsPo.getColumn(0, "CD_TAX_KIND"));	
        	if(nRow < 0)
        	{
        		this.dsPo.setColumn(0, "CD_TAX_KIND", "");
        		this.dsPo.setColumn(0, "CD_TAX_CD", "");
        		this.dsCdIV21.filter("CD_ID == '' ");
        	}
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPo.addEventHandler("onrowposchanged", this.dsPo_onrowposchanged, this);
            this.dsPoItem.addEventHandler("onrowposchanged", this.dsPoItem_onrowposchanged, this);
            this.dsPoItem.addEventHandler("oncolumnchanged", this.dsPoItem_oncolumnchanged, this);
            this.dsPoPay.addEventHandler("onrowsetchanged", this.dsPoPay_onrowsetchanged, this);
            this.addEventHandler("oninit", this.FormOninit, this);
            this.addEventHandler("onload", this.FormOnload, this);
            this.div_2.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.div_21.Tab01.addEventHandler("onchanged", this.div_21_Tab01_onchanged, this);
            this.div_21.Tab01.tabp01.grdPymtItem.addEventHandler("ontextchanged", this.div_21_Tab01_tabp01_grdPymtItem_ontextchanged, this);
            this.div_21.Tab01.tabp01.edtPtnrNm.addEventHandler("onkeydown", this.fnOnkeydown, this);
            this.div_21.Tab01.tabp01.edtPtnrNm.addEventHandler("ontextchanged", this.fnOntextchanged, this);
            this.div_21.Tab01.tabp01.cboTaxKind.addEventHandler("onitemchanged", this.div_21_Tab01_tabp01_cbo_cdTaxKind_onitem, this);
            this.div_21.Tab01.tabp01.chkGrPymt.addEventHandler("onchanged", this.fnAltGrPymt_onchanged, this);
            this.div_21.Tab01.tabp01.cboTotPayCnt.addEventHandler("onitemchanged", this.fnTotPayCnt_onitemchanged, this);
            this.div_21.Tab01.tabp01.cboPymtCndtn.addEventHandler("onitemchanged", this.div_21_Tab01_tabp01_cbo_cdPymtCndtn_onitemchanged, this);
            this.div_21.Tab01.tabp01.rdoPartialDlv.addEventHandler("onitemclick", this.div_21_Tab01_tabp01_Radio00_onitemclick, this);
            this.div_21.Tab01.tabp01.btnPntr.addEventHandler("onclick", this.btnPntr_onclick, this);
            this.div_3.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.div_3.btn_Set_Day.addEventHandler("onclick", this.div_3_btn_Set_Day_onclick, this);
            this.div_31.grdPoItem.addEventHandler("onkeydown", this.div_31_grdPoItem_onkeydown, this);
            this.div_31.grdPoItem.addEventHandler("oncellclick", this.div_31_grdPoItem_oncellclick, this);
            this.div_31.grdPoItem.addEventHandler("oncelldblclick", this.div_31_grdPoItem_oncelldblclick, this);
            this.div_31.grdPoItem.addEventHandler("onexpandup", this.div_31_grdPoItem_onexpandup, this);
            this.div_31.grdPoItem.addEventHandler("ontextchanged", this.div_31_grdPoItem_ontextchanged, this);
            this.div_4.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.div_41.Tab01.addEventHandler("onchanged", this.div_41_Tab01_onchanged, this);
            this.div_41.Tab01.tabp01.edtSlNm.addEventHandler("onkeydown", this.fnOnkeydown, this);
            this.div_41.Tab01.tabp01.edtSlNm.addEventHandler("ontextchanged", this.fnOntextchanged, this);
            this.div_41.Tab01.tabp01.edtMtrlCd.addEventHandler("onkeydown", this.Div41_Tab01_tabp01_edt_MatCd_onkeydown, this);
            this.div_41.Tab01.tabp01.maeDlvRate.addEventHandler("oneditclick", this.div_41_Tab01_tabp01_mae_goalAmt00_oneditclick, this);
            this.div_41.cboItemChg.addEventHandler("onitemchanged", this.Div4_cbo_itemChg_onitemchanged, this);
            this.div_41.btnPoItemRowUp.addEventHandler("onclick", this.div_4_btn_poItemRowUp_onclick, this);
            this.div_41.btnPoItemRowDown.addEventHandler("onclick", this.div_4_btn_poItemRowDown_onclick, this);

        };

        this.loadIncludeScript("BPorDetail.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
