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
            obj = new Dataset("dsIvItem", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsIv", this);
            obj._setContents("<ColumnInfo><Column id=\"CHRGR_ID\" type=\"string\" size=\"256\"/><Column id=\"CD_PYMT_CNDTN_NM\" type=\"string\" size=\"256\"/><Column id=\"CD_PYMT_CNDTN\" type=\"string\" size=\"256\"/><Column id=\"WRITE_DAY\" type=\"string\" size=\"256\"/><Column id=\"PTNR_NM\" type=\"string\" size=\"256\"/><Column id=\"TOT_AMT\" type=\"string\" size=\"256\"/><Column id=\"ISSUE_DAY\" type=\"string\" size=\"256\"/><Column id=\"TTL\" type=\"string\" size=\"256\"/><Column id=\"CD_DOC_CTGR_NM\" type=\"string\" size=\"256\"/><Column id=\"CD_DOC_CTGR\" type=\"string\" size=\"256\"/><Column id=\"CNCL_RSN\" type=\"string\" size=\"256\"/><Column id=\"CMPUTE_DAY\" type=\"string\" size=\"256\"/><Column id=\"TEL\" type=\"string\" size=\"256\"/><Column id=\"CD_TAX_CD_NM\" type=\"string\" size=\"256\"/><Column id=\"CD_TAX_CD\" type=\"string\" size=\"256\"/><Column id=\"STR_CD\" type=\"string\" size=\"256\"/><Column id=\"EMAIL\" type=\"string\" size=\"256\"/><Column id=\"PTNR_ID\" type=\"string\" size=\"256\"/><Column id=\"FAX\" type=\"string\" size=\"256\"/><Column id=\"TAX_BILL\" type=\"string\" size=\"256\"/><Column id=\"USER_ID\" type=\"string\" size=\"256\"/><Column id=\"CD_INV_STTS_NM\" type=\"string\" size=\"256\"/><Column id=\"CD_INV_STTS\" type=\"string\" size=\"256\"/><Column id=\"CD_INV_CRNC_NM\" type=\"string\" size=\"256\"/><Column id=\"CD_INV_CRNC\" type=\"string\" size=\"256\"/><Column id=\"SPLY_VL\" type=\"string\" size=\"256\"/><Column id=\"RMARK\" type=\"string\" size=\"256\"/><Column id=\"CHRGR_NM\" type=\"string\" size=\"256\"/><Column id=\"VAT\" type=\"string\" size=\"256\"/><Column id=\"INV_NO\" type=\"string\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COREXP_KIDS\" type=\"STRING\" size=\"256\"/><Column id=\"INT_NTAX\" type=\"STRING\" size=\"256\"/><Column id=\"APPND_SET_CHR_2\" type=\"STRING\" size=\"256\"/><Column id=\"APPND_SET_CHR_1\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_ASSET\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TAX_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"INT_INV_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INT_INV_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"INSP_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"INSP_MONTH\" type=\"STRING\" size=\"256\"/><Column id=\"INSP_DAY_STR\" type=\"STRING\" size=\"256\"/><Column id=\"INSP_DAY_END\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReturn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsIvHsty", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPoItmDlv", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdIV10", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM10", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdIV20", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdIV21", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM13", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM11", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM15", this);
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

            obj = new Div("div_21", "absolute", "0%", "73", null, "241", "15", null, this);
            obj.set_taborder("17");
            this.addChild(obj.name, obj);
            obj = new Tab("Tab01", "absolute", "0", "0", null, "229", "0", null, this.div_21);
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
            obj.set_text("상태");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("발주일자");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staTtl", "absolute", "0", "5", "171", "33", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("0");
            obj.set_text("송장명");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "37", null, "33", "0", null, this.div_21.Tab01.tabp01);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staPoCtgr", "absolute", "581", "37", "160", "33", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("9");
            obj.set_text("지급계정");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("발주유형");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staPtnrNm", "absolute", "0", "37", "171", "33", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("6");
            obj.set_text("협력사");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "69", null, "33", "0", null, this.div_21.Tab01.tabp01);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staDlvArea", "absolute", "581", "69", "160", "33", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("15");
            obj.set_text("전표구분");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("배송처");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staTaxNo", "absolute", "0", "69", "171", "33", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("13");
            obj.set_text("세금계산서번호");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine03", "absolute", "0", "101", null, "33", "0", null, this.div_21.Tab01.tabp01);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staPymtCndtn", "absolute", "581", "101", "160", "33", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("20");
            obj.set_text("부가세");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("지급계정");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staAmt", "absolute", "0", "101", "171", "33", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("17");
            obj.set_text("공급가액");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine04", "absolute", "0", "165", null, "33", "0", null, this.div_21.Tab01.tabp01);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staPayCtgr", "absolute", "581", "165", "160", "33", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("25");
            obj.set_text("카드정보");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("정산유형");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine08", "absolute", "0", "133", null, "33", "0", null, this.div_21.Tab01.tabp01);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staTotPayCnt", "absolute", "581", "133", "160", "33", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("22");
            obj.set_text("총금액");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("지급회차");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtTtl", "absolute", "177", "9", "396", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("1");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("발주서명");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Combo("cboPoCtgr", "absolute", "747", "42", "150", "24", null, null, this.div_21.Tab01.tabp01);
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.set_innerdataset("@dsCdCM13");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("배송처");
            obj = new Edit("edtPtnrNo", "absolute", "177", "41", "100", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("51");
            obj.set_readonly("true");
            obj.set_cssclass("edt_default_r");
            obj.getSetter("objNm").set("협력사번호");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtPtnrNm", "absolute", "282", "41", "291", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("52");
            obj.getSetter("objNm").set("협력사명");
            obj.set_cssclass("edt_default_r");
            obj.set_readonly("true");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Combo("cboPoCtgr00", "absolute", "747", "9", "150", "24", null, null, this.div_21.Tab01.tabp01);
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("57");
            obj.set_innerdataset("dsCdIV10");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("배송처");
            obj = new Static("staAltPartialDlv", "absolute", "903", "69", "140", "33", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("58");
            obj.set_text("증빙일");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("분할납품");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Calendar("calPoDay", "absolute", "1049", "74", "150", "24", null, null, this.div_21.Tab01.tabp01);
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("59");
            obj.set_dateformat("yyyy.MM.dd ddd");
            obj.set_editformat("yyyy.MM.dd ddd");
            obj.getSetter("objNm").set("발주일자");
            obj = new Calendar("calPoDay00", "absolute", "1049", "105", "150", "24", null, null, this.div_21.Tab01.tabp01);
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("60");
            obj.set_dateformat("yyyy.MM.dd ddd");
            obj.set_editformat("yyyy.MM.dd ddd");
            obj.getSetter("objNm").set("발주일자");
            obj = new Static("staAltPartialDlv00", "absolute", "903", "101", "140", "33", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("61");
            obj.set_text("전기일");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("분할납품");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new MaskEdit("maeTotAmt00", "absolute", "177", "105", "238", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("63");
            obj.set_readonly("true");
            obj.set_cssclass("input_point");
            obj.set_enable("false");
            obj.style.set_color("blue");
            obj.style.set_font("bold 10 Dotum");
            obj.getSetter("objNm").set("총금액");
            obj.set_mask("#,##0");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtTtl00", "absolute", "177", "74", "396", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("64");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("발주서명");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staTaxCd", "absolute", "0", "165", "171", "33", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("65");
            obj.set_text("구분");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("지급계정");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staCdTax", "absolute", "0", "133", "171", "33", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("66");
            obj.set_text("계산서종류");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("배송처");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Combo("cboDlvAddr01", "absolute", "177", "137", "238", "24", null, null, this.div_21.Tab01.tabp01);
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("67");
            obj.set_innerdataset("@dsCdIV20");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("배송처");
            obj = new Combo("cboPymtCndtn00", "absolute", "177", "170", "238", "24", null, null, this.div_21.Tab01.tabp01);
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("68");
            obj.set_innerdataset("@dsCdIV21");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("지급계정");
            obj = new MaskEdit("maeTotAmt01", "absolute", "747", "137", "238", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("69");
            obj.set_readonly("true");
            obj.set_mask("#,##0");
            obj.set_cssclass("input_point");
            obj.set_enable("false");
            obj.style.set_color("blue");
            obj.style.set_font("bold 10 Dotum");
            obj.getSetter("objNm").set("총금액");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtPtnrNo00", "absolute", "747", "169", "100", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("70");
            obj.set_readonly("true");
            obj.set_cssclass("edt_default_r");
            obj.getSetter("objNm").set("협력사번호");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtPtnrNm00", "absolute", "852", "169", "269", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("71");
            obj.getSetter("objNm").set("협력사명");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Button("btnPntr", "absolute", "1121", "170", "24", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("72");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("구매요청자 검색 버튼");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtTtl01", "absolute", "747", "74", "150", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("73");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("발주서명");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
            obj = new MaskEdit("maeTotAmt02", "absolute", "747", "105", "150", "24", null, null, this.div_21.Tab01.tabp01);
            obj.set_taborder("74");
            obj.set_readonly("true");
            obj.set_mask("#,##0");
            obj.set_cssclass("input_point");
            obj.set_enable("false");
            obj.style.set_color("blue");
            obj.style.set_font("bold 10 Dotum");
            obj.getSetter("objNm").set("총금액");
            this.div_21.Tab01.tabp01.addChild(obj.name, obj);
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
            obj.set_text("담당자");
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
            obj.set_text("송장이력");
            obj.getSetter("objNm").set("발주이력");
            this.div_21.Tab01.addChild(obj.name, obj);
            obj = new Grid("grdPoHsty", "absolute", "0%", "5", null, null, "0", "1", this.div_21.Tab01.tabp06);
            obj.set_taborder("0");
            obj.set_binddataset("dsIvHsty");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"145\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"900\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"일시\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"담당자명\"/><Cell col=\"3\" text=\"내용\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" edittype=\"none\" text=\"bind:DT\" mask=\"yyyy.MM.dd HH:mm\" calendardisplaynulltype=\"none\" tooltiptext=\"bind:DT\"/><Cell col=\"1\" text=\"bind:TYPE\" tooltiptext=\"bind:TYPE\"/><Cell col=\"2\" text=\"bind:CHRGR_NM\" tooltiptext=\"bind:CHRGR_NM\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:CNTNT\" tooltiptext=\"bind:CNTNT\"/></Band></Format></Formats>");
            this.div_21.Tab01.tabp06.addChild(obj.name, obj);

            obj = new Div("div_3", "absolute", "0", "315", null, "24", "10", null, this);
            obj.set_taborder("18");
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", null, "255", "24", null, "0", this.div_3);
            obj.set_taborder("0");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 2 17");
            this.div_3.addChild(obj.name, obj);
            obj = new Button("btn_Set_Day", "absolute", null, "0", "70", "24", "5", null, this.div_3);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_visible("true");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("납품요청일자 일괄적용");
            this.div_3.addChild(obj.name, obj);

            obj = new Div("div_31", "absolute", "0", "343", null, null, "15", "10", this);
            obj.set_taborder("20");
            this.addChild(obj.name, obj);
            obj = new Grid("grdIvItem", "absolute", "0", "0", null, null, "0", "10", this.div_31);
            obj.set_taborder("6");
            obj.set_binddataset("dsIvItem");
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
            obj._setContents("<Formats><Format id=\"MMODE\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"220\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"160\"/><Column size=\"90\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" text=\"검수번호\"/><Cell col=\"2\" text=\"창고\"/><Cell col=\"3\" text=\"품목코드\"/><Cell col=\"4\" text=\"품목명\"/><Cell col=\"5\" text=\"수량\"/><Cell col=\"6\" text=\"단위\"/><Cell col=\"7\" text=\"단가\"/><Cell col=\"8\" text=\"공급가\"/><Cell col=\"9\" text=\"부가세\"/><Cell col=\"10\" text=\"총금액\"/><Cell col=\"11\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;계정코드\"/><Cell col=\"12\" displaytype=\"decoratetext\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;계정명\"/><Cell col=\"13\" text=\"자산번호\"/><Cell col=\"14\" text=\"구매요청번호\"/><Cell col=\"15\" text=\"발주번호\"/></Band><Band id=\"body\" style=\"cellpadding:2 2 2 2;\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\" editdisplay=\"display\" expandshow=\"hide\"/><Cell col=\"1\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:DLV_NO\" tooltiptext=\"bind:DLV_NO\"/><Cell col=\"2\" style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:SL_NM\" tooltiptext=\"bind:SL_NM\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:MTRL_CD\" editautoselect=\"true\" editdisplay=\"edit\" tooltiptext=\"bind:MTRL_CD\"/><Cell col=\"4\" edittype=\"none\" style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:MTRL_NM\" editdisplay=\"edit\" expandsize=\"21\" tooltiptext=\"bind:MTRL_NM\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:QTY\" mask=\"#,##0.00\" editautoselect=\"true\" editdisplay=\"edit\" tooltiptext=\"bind:QTY\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:CD_UNIT_NM\" combodataset=\"ds_cdCM11\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" combodisplay=\"display\" tooltiptext=\"bind:CD_UNIT_NM\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:UNT_PRICE\" mask=\"#,##0.00\" editautoselect=\"false\" editdisplay=\"edit\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:AMT\" mask=\"#,##0\" editautoselect=\"true\" tooltiptext=\"bind:AMT\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:VAT\" mask=\"#,##0\" tooltiptext=\"bind:VAT\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:ITM_TOT_AMT\" mask=\"#,##0\" tooltiptext=\"bind:ITM_TOT_AMT\"/><Cell col=\"11\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:GR_ACNT_CD\"/><Cell col=\"12\" displaytype=\"normal\" edittype=\"text\" style=\"align:left;\" text=\"bind:ACNT_NM\" editautoselect=\"true\" expandshow=\"show\" expandimage=\"URL('img::grd_WF_Expand.png')\" tooltiptext=\"bind:ACNT_NM\"/><Cell col=\"13\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:AST_NO\" tooltiptext=\"bind:AST_NO\"/><Cell col=\"14\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:PR_NO\" maskchar=\" \" tooltiptext=\"bind:PR_NO\"/><Cell col=\"15\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:PO_NO\" tooltiptext=\"bind:PO_NO\"/></Band></Format><Format id=\"VMODE\"><Columns><Column size=\"90\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"259\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"160\"/><Column size=\"90\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"검수번호\"/><Cell col=\"1\" text=\"창고\"/><Cell col=\"2\" text=\"품목코드\"/><Cell col=\"3\" text=\"품목명\"/><Cell col=\"4\" text=\"수량\"/><Cell col=\"5\" text=\"단위\"/><Cell col=\"6\" text=\"단가\"/><Cell col=\"7\" text=\"공급가\"/><Cell col=\"8\" text=\"부가세\"/><Cell col=\"9\" text=\"총금액\"/><Cell col=\"10\" text=\"계정코드\"/><Cell col=\"11\" text=\"계정명\"/><Cell col=\"12\" text=\"자산번호\"/><Cell col=\"13\" text=\"구매요청번호\"/><Cell col=\"14\" text=\"발주번호\"/></Band><Band id=\"body\" style=\"cellpadding:2 2 2 2;\"><Cell style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:DLV_NO\" tooltiptext=\"bind:DLV_NO\"/><Cell col=\"1\" style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:SL_NM\" tooltiptext=\"bind:SL_NM\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:MTRL_CD\" editautoselect=\"true\" editdisplay=\"edit\" tooltiptext=\"bind:MTRL_CD\"/><Cell col=\"3\" edittype=\"none\" style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:MTRL_NM\" editdisplay=\"edit\" expandsize=\"21\" tooltiptext=\"bind:MTRL_NM\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:QTY\" mask=\"#,##0.00\" editautoselect=\"true\" editdisplay=\"edit\" tooltiptext=\"bind:QTY\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:CD_UNIT_NM\" combodataset=\"ds_cdCM11\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" combodisplay=\"display\" tooltiptext=\"bind:CD_UNIT_NM\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:UNT_PRICE\" mask=\"#,##0.00\" editautoselect=\"false\" editdisplay=\"edit\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:AMT\" mask=\"#,##0\" editautoselect=\"true\" tooltiptext=\"bind:AMT\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:VAT\" mask=\"#,##0\" tooltiptext=\"bind:VAT\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:ITM_TOT_AMT\" mask=\"#,##0\" tooltiptext=\"bind:ITM_TOT_AMT\"/><Cell col=\"10\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:GR_ACNT_CD\"/><Cell col=\"11\" style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:ACNT_NM\" tooltiptext=\"bind:ACNT_NM\"/><Cell col=\"12\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:AST_NO\" tooltiptext=\"bind:AST_NO\"/><Cell col=\"13\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:PR_NO\" maskchar=\" \" tooltiptext=\"bind:PR_NO\"/><Cell col=\"14\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:PO_NO\" tooltiptext=\"bind:PO_NO\"/></Band></Format></Formats>");
            this.div_31.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "0", this.div_31);
            obj.set_taborder("7");
            obj.set_scrollbars("none");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.div_31.addChild(obj.name, obj);


            
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
            		p.set_text("담당자");
            		p.getSetter("objNm").set("발주담당자");

            	}
            );
            this.div_21.Tab01.tabp05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_21.Tab01.tabp06,
            	//-- Layout function
            	function(p) {
            		p.set_text("송장이력");
            		p.getSetter("objNm").set("발주이력");

            	}
            );
            this.div_21.Tab01.tabp06.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 241, this.div_21,
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
            obj = new Layout("default", "", 0, 0, this.div_31,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("20");

            	}
            );
            this.div_31.addLayout(obj.name, obj);

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
            obj = new BindItem("item104","div_21.Tab01.tabp01.edtTtl","value","dsIv","TTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item106","div_21.Tab01.tabp01.cboPoCtgr","value","dsIv","CD_PYMT_CNDTN");
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
            obj = new BindItem("item29","div_21.Tab01.tabp05.edtFax","value","dsIv","FAX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","div_21.Tab01.tabp05.edtEmail","value","dsIv","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","div_21.Tab01.tabp05.edtTel","value","dsIv","TEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","div_21.Tab01.tabp05.edtWrtrNm","value","dsIv","CHRGR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","div_21.Tab01.tabp05.edtWrtrId","value","dsIv","CHRGR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item51","div_1.edtPoNo","value","dsPo","PO_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item54","div_1.cboDocType","value","dsPo","CD_DOC_CTGR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item103","div_21.Tab01.tabp01.edtPtnrNo","value","dsIv","PTNR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item102","div_21.Tab01.tabp01.edtPtnrNm","value","dsIv","PTNR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","div_21.Tab01.tabp01.cboPoCtgr00","value","dsIv","CD_INV_STTS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item105","div_21.Tab01.tabp01.calPoDay","value","dsIv","ISSUE_DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","div_21.Tab01.tabp01.calPoDay00","value","dsIv","WRITE_DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","div_21.Tab01.tabp01.maeTotAmt00","value","dsIv","SPLY_VL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","div_21.Tab01.tabp01.edtTtl00","value","dsIv","TAX_BILL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","div_21.Tab01.tabp01.cboDlvAddr01","value","dsIv","CD_TAX_KIND");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","div_21.Tab01.tabp01.cboPymtCndtn00","value","dsIv","CD_TAX_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","div_21.Tab01.tabp01.maeTotAmt01","value","dsIv","TOT_AMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item38","div_21.Tab01.tabp01.edtPtnrNo00","value","dsIv","CARD_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item39","div_21.Tab01.tabp01.edtPtnrNm00","value","dsIv","CARD_APRV_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item40","div_21.Tab01.tabp01.edtTtl01","value","dsIv","INT_INV_TYPE_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","div_21.Tab01.tabp01.maeTotAmt02","value","dsIv","VAT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","div_21.Tab01.tabp03.txtRmark","value","dsIv","RMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompNFileUpDown.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
        };
        
        // User Script
        this.registerScript("BInvDetail.xfdl", function(exports) {
        /**
         * @파일명			: BInvDetail.xfdl
         * @생성자			: 배열
         * @생성일시		: 2019. 05. 16.
         * @설명			: 송장상세
         * @최종수정자		: 배열
         * @최종수정일시	: 2019. 05. 16.
        */  

        
        this.fv_appPopCall = false;
        this.fv_appCheck = false;
        this.fv_prReqPoYn = "N";

        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {
        	var param = [
        					{code:"CM10", sSelectType:"S"} 	// 문서유형
        					,{code:"CM13", sSelectType:"S"} // 지급계정
        					,{code:"CM11", sSelectType:"S"} // 단위
        					,{code:"CM15", sSelectType:"S"} // 통화
        					,{code:"IV10", sSelectType:"S"} // 송장상태
        					,{code:"IV20", sSelectType:"S"} // 계산서종류
        					,{code:"IV21", sSelectType:"S"} // 계산서구분(세금코드)
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
        				{btnName:"계산서발행요청", clickEventFunc:"fnPoReq"}
        				,{btnName:"계산서수취완료", clickEventFunc:"fnPoAppReq"}
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
         
        /**
          * @함수명	: FormOnload
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.InitEventInfo(이벤트변수)
          * @desc     	: 폼 onload이벤트
          */
        this.FormOnload = function(obj,e)
        {
            //그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기(그리드 컴포넌트, 페이징div 컴포넌트, 폼오브젝트(this))
         	gfnSetGrdFunc(this.div_31.grdIvItem , '', this);

        	gfnSetGrdFunc(this.div_31.grdIvItem , this.div_31.divPaging , this);

        	gfnMakeFileDs(this);
                                 
        	//이전화면에서 넘어오는 파라미터를 받는다.
        	var dlvNo	= gfnGetTmprData("DLV_NO");
        	var dlvKid	= gfnGetTmprData("DLV_COREXP_KIDS");
        	var intNtax	= gfnGetTmprData("INT_NTAX");
        	var invNo	= gfnGetTmprData("INV_NO");
        	var invKid	= gfnGetTmprData("INV_COREXP_KIDS");
        	var invStts	= gfnGetTmprData("CD_INV_STTS");
        	
        	var gubun	= gfnGetTmprData("GUBUN");	// 구분. 건별:ONE, 일괄:ALL, 일합:DAY, 월합:MONTH
        	
        	//일괄송장작성할때 가져옴
        	var altAsset		= gfnGetTmprData("ALT_ASSET");
        	var cdPymtCndtn		= gfnGetTmprData("CD_PYMT_CNDTN");
        	var cdTaxKind		= gfnGetTmprData("CD_TAX_KIND");
        	var cdTaxCd			= gfnGetTmprData("CD_TAX_CD");
        	var ptnrId			= gfnGetTmprData("PTNR_ID");
        	var inspDayStr		= gfnGetTmprData("INSP_DAY_STR");
        	var inspDayEnd		= gfnGetTmprData("INSP_DAY_END");
        	var inspDay			= gfnGetTmprData("INSP_DAY");
        	var inspMonth		= gfnGetTmprData("INSP_MONTH");	
        	
        	gfnClearTmprData(); 
        	
        	if(gfnIsNull(invNo))
        	{
        		trace("1");
        		this.dsIv.deleteAll();
        		this.dsIv.addRow();
        		
        		this.dsIv.setColumn(0, "CD_INV_STTS"	, "IV10WRI");
        		this.dsIv.setColumn(0, "CD_PYMT_CNDTN"	, "");
        		this.dsIv.setColumn(0, "STR_CD"		, "");
        		//this.dsIv.setColumn(0, "CD_TAX_CD"		, "");
        		
        		//신규 작성 시 파일내부의 Dataset을 초기화 시켜준다.
        		//this.gfn_newFileDsInit(this.dsIv, this.dsIvItem);
        		
        		if(gubun == "ALL")
        		{
        			this.dsIv.setColumn(0, "INSP_DAY_STR", inspDayStr);
        			this.dsIv.setColumn(0, "INSP_DAY_END", inspDayEnd);
        		}
        		else if(gubun == "DAY")
        		{
        			this.dsIv.setColumn(0, "INSP_DAY", inspDay);
        		}
        				
        		//ALL:일괄, DAY:일합
        		if(gubun == "ALL" || gubun == "DAY")
        		{
        			this.dsIv.setColumn(0, "GUBUN"			, gubun);
        			this.dsIv.setColumn(0, "DLV_NO"			, dlvNo);
        			this.dsIv.setColumn(0, "COREXP_KIDS"	, dlvKid);
        			this.dsIv.setColumn(0, "ALT_ASSET"		, altAsset);
        			this.dsIv.setColumn(0, "CD_PYMT_CNDTN"	, cdPymtCndtn);
        			this.dsIv.setColumn(0, "INT_NTAX"		, intNtax);
        			this.dsIv.setColumn(0, "CD_TAX_KIND"	, cdTaxKind);
        			this.dsIv.setColumn(0, "CD_TAX_CD"		, cdTaxCd);
        			this.dsIv.setColumn(0, "PTNR_ID"		, ptnrId);
        			
        			// 시스템 공통함수 호출
        			//this.gfn_formOnLoad(obj, "C", this.fn_dlvReadEnBloc);
        			
        		}		
        		else if(gubun == "ONE")	//건별송장작성		
        		{		
        			this.dsIv.setColumn(0, "DLV_NO"			, dlvNo);
        			this.dsIv.setColumn(0, "INT_NTAX"		, intNtax);
        			this.dsIv.setColumn(0, "ALT_ASSET"		, altAsset);
        			this.dsIv.setColumn(0, "COREXP_KIDS"	, dlvKid);
        			
        			// 시스템 공통함수 호출
        			//this.gfn_formOnLoad(obj, "C", this.fn_dlvSearch);
        		}
        		this.fn_dlvSearch();
        	}
        	else	//송장 작성 후 Read
        	{
        	trace("2");
        		this.dsIv.deleteAll();
        		this.dsIv.addRow();
        		this.dsIv.setColumn(0, "INV_NO"			, invNo);
        		this.dsIv.setColumn(0, "COREXP_KIDS"		, invKid);
        		
        		// 시스템 공통함수 호출
        		//this.gfn_formOnLoad(obj, "R", this.fn_search);
        	}
        	
        	this.fnRemote();
        	
        	
        	
        }
         
        /**
          	@function	 fn_dlvSearch()
          	@desc  		 납품 조회 프로세스(건별송장작성)
         */
        this.fn_dlvSearch = function()
        {	 
        	var sSvcID = "dlvRead";
        	var sController = "epro.inv.service.BInvService.dlvRead";
        	var sInDatasets = "dsIv=dsIv";
        	var sOutDatasets = "dsIv=dsIv dsIvItem=dsIvItem";
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
        		case "dlvRead" :
        			trace(this.dsIvItem.saveXML());
        			this.div_21_Tab01_tabp01_cboDlvAddr01_onitemchanged();
        			
        			this.fnStatusControl(this.dsIv.getColumn(0, "CD_INV_STTS"));
        						
        			this.fn_getTotAmt();
        			
        		break;
        				
        		default:
        		break;	
        	}
        }

        /**
          	@function	 fn_statusControl()
          	@desc  		 버튼 처리
         */
        this.fnStatusControl = function(status)
        {
        	/*버튼처리*/	
        	if(status=="IV10CLO" || status=="IV10REQ" || status=="IV10TAX" || this.gfn_isNull(status))
        	{	
        		//this.gfn_objReSet(this, "R");
        		var sArg = [ 
        		   ];		   
        		gfnRemote(this, sArg);
        		
        		
        							
        		this.div_31.grd_ivItem.setFormat("VMODE");
        		this.parent.div_commBtns.btn_comDel.set_visible(false); //삭제
        		this.parent.div_commBtns.btn_commSave.set_visible(false); //저장			
        	}
        	else if(status=="IV10WRI")
        	{		
        		if(this.gfn_isNull(this.ds_iv.getColumn(0, "INV_NO")))
        		{
        			this.gfn_objReSet(this, "C");
        			this.parent.div_commBtns.btn_comDel.set_visible(false); //삭제
        			this.parent.div_commBtns.btn_commSave.set_visible(true); //저장
        		}
        		else
        		{
        			this.gfn_objReSet(this, "U");
        			this.parent.div_commBtns.btn_comDel.set_visible(true); //삭제
        			this.parent.div_commBtns.btn_commSave.set_visible(true); //저장	
        		}
        		
        		this.div_21_Tab01_tabp01_cb_cdPymtCndtn_onitemchanged();
        		this.div_21_Tab01_tabp01_cbo_billType_onitemchanged();
        		this.div_21_Tab01_tabp01_cbo_cdTaxCd_onitemchanged();
        	}
        	else if(status=="IV10CXL")
        	{
        		this.gfn_objReSet(this, "U");
        		this.parent.div_commBtns.btn_comDel.set_visible(true); //삭제
        		this.parent.div_commBtns.btn_commSave.set_visible(true); //저장
        		
        		this.div_21_Tab01_tabp01_cb_cdPymtCndtn_onitemchanged();
        		this.div_21_Tab01_tabp01_cbo_billType_onitemchanged();
        		this.div_21_Tab01_tabp01_cbo_cdTaxCd_onitemchanged();		
        	}
        	
        	this.gfn_btnRange(this.parent.div_commBtns.btn_commInit);
        } 
         
         
        /**
          	@function	 div_31_grdIvItem_oncelldblclick()
          	@desc  		 품목그리드 더블클릭 이벤트
         */
        this.div_31_grdIvItem_oncelldblclick = function(obj,e)
        {
        	if(gfnIsNull(this.dsIvItem.getColumn(e.row,gfnGrdBindColId(obj, e.cell)))) return false;
        	
        	if(gfnGrdBindColId(obj, e.cell)=="DLV_NO")	//검수번호 클릭
        	{
        		gfnSetTmprData("DLV_NO" ,this.dsIvItem.getColumn(e.row, "DLV_NO"));
        		gfnOpenMenuUrl("BDLV::BDlvDetail");
        	}
        	else if(gfnGrdBindColId(obj, e.cell)=="MTRL_CD")	//품목코드 클릭
        	{
        		var sArg = { 
        					mtrl_cd : this.dsIvItem.getColumn(e.row, "MTRL_CD")
        					};
        		alert("품목정보상세팝업");
        		//gfnModalPop(this, "CtnrPtnrInfo", "CPOP::BPtnrInfoPopup.xfdl", sArg, "fnPopCallBack", 550, 500);
        	}
        	else if(gfnGrdBindColId(obj, e.cell)=="PR_NO")	//구매요청번호 클릭
        	{
        		gfnSetTmprData("PR_NO" ,this.dsIvItem.getColumn(e.row, "PR_NO"));
        		gfnOpenMenuUrl("BPUR::BPurDetail");
        	}
        	else if(gfnGrdBindColId(obj, e.cell)=="PO_NO")	//발주번호 클릭
        	{
        		gfnSetTmprData("PO_NO" ,this.dsIvItem.getColumn(e.row, "PO_NO"));
        		gfnOpenMenuUrl("BPOR::BPorDetail");
        	}
        }

        
        /**
          	@function	 div_21_Tab01_tabp01_cboDlvAddr01_onitemchanged()
          	@desc  		 기본정보의 계산서정보 클릭시 변경처리
         */
        this.div_21_Tab01_tabp01_cboDlvAddr01_onitemchanged = function(obj,e)
        {
        	var postVal = this.dsIv.getColumn(0, "CD_TAX_KIND");
        	
         	this.dsCdIV21.filter("UP_CD_ID=='"+ postVal +"' || CD_ID==''");
         	
         	var nRow = this.dsCdIV21.findRow("CD_ID", this.dsIv.getColumn(0, "CD_TAX_CD"));	
        	if(nRow < 0)
        	{
        		this.dsIv.setColumn(0, "CD_TAX_CD", "");
        	}
        	
        	//계산서종류를 신용카드 선택시 카드번호 및 카드승인번호는 필수
        	if(postVal == "IV20A1")
        	{
        		this.div_21.Tab01.tabp01.staPayCtgr.set_usedecorate(true);
        		this.div_21.Tab01.tabp01.staPayCtgr.set_text("<fc v='red'>*</fc> 카드정보");	
        	}
        	else
        	{
        		this.div_21.Tab01.tabp01.staPayCtgr.set_usedecorate(false);
        		this.div_21.Tab01.tabp01.staPayCtgr.set_text("카드정보");	
        	}
        	
        	//전자세금계산서
        	if(postVal == "IV20C1")
        	{		
        		var sArg = [ 
        					{btnName:"계산서수취완료", clickEventFunc:"fnPoAppReq"}
        			   ];		   
        		gfnRemote(this, sArg);
        	}
        	else
        	{	
        		var sArg = [ 
        					{btnName:"계산서발행요청", clickEventFunc:"fnPoReq"}
        			   ];		   
        		gfnRemote(this, sArg);
        		this.dsIv.setColumn(0, "TAX_BILL", "");
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.FormOninit, this);
            this.addEventHandler("onload", this.FormOnload, this);
            this.div_2.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.div_21.Tab01.addEventHandler("onchanged", this.div_21_Tab01_onchanged, this);
            this.div_21.Tab01.tabp01.edtPtnrNm.addEventHandler("onkeydown", this.fnOnkeydown, this);
            this.div_21.Tab01.tabp01.edtPtnrNm.addEventHandler("ontextchanged", this.fnOntextchanged, this);
            this.div_21.Tab01.tabp01.cboDlvAddr01.addEventHandler("onitemchanged", this.div_21_Tab01_tabp01_cboDlvAddr01_onitemchanged, this);
            this.div_21.Tab01.tabp01.cboPymtCndtn00.addEventHandler("onitemchanged", this.div_21_Tab01_tabp01_cbo_cdPymtCndtn_onitemchanged, this);
            this.div_21.Tab01.tabp01.edtPtnrNm00.addEventHandler("onkeydown", this.fnOnkeydown, this);
            this.div_21.Tab01.tabp01.edtPtnrNm00.addEventHandler("ontextchanged", this.fnOntextchanged, this);
            this.div_21.Tab01.tabp01.btnPntr.addEventHandler("onclick", this.btnPntr_onclick, this);
            this.div_3.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.div_3.btn_Set_Day.addEventHandler("onclick", this.div_3_btn_Set_Day_onclick, this);
            this.div_31.grdIvItem.addEventHandler("oncelldblclick", this.div_31_grdIvItem_oncelldblclick, this);

        };

        this.loadIncludeScript("BInvDetail.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
