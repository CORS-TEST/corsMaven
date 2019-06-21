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
                this.set_name("BPrDetail");
                this.set_titletext("구매요청작성");
                this._setFormPosition(0,0,1220,800);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPr", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column type=\"string\" id=\"BRANCH_CD\" size=\"20\"/><Column type=\"string\" id=\"PR_NO\" size=\"20\"/><Column id=\"CD_PR_STTS_NM\" type=\"STRING\" size=\"256\"/><Column type=\"string\" id=\"CD_PR_STTS\" size=\"20\"/><Column id=\"CD_PR_CTGR_NM\" type=\"STRING\" size=\"256\"/><Column type=\"string\" id=\"CD_PR_CTGR\" size=\"20\"/><Column type=\"string\" id=\"REQR_ID\" size=\"20\"/><Column type=\"string\" id=\"REQR_NM\" size=\"20\"/><Column type=\"string\" id=\"CD_BDGT_TYPE\" size=\"20\"/><Column type=\"string\" id=\"TTL\" size=\"20\"/><Column type=\"string\" id=\"RMARK\" size=\"20\"/><Column type=\"string\" id=\"PR_REQ_DAY\" size=\"20\"/><Column type=\"string\" id=\"REQ_DT\" size=\"20\"/><Column type=\"string\" id=\"APRV_CMPLT_DT\" size=\"20\"/><Column type=\"string\" id=\"PR_AMT\" size=\"20\"/><Column type=\"string\" id=\"APP_DOC_ID\" size=\"20\"/><Column type=\"string\" id=\"ATTCH_FILE_CNT\" size=\"20\"/><Column type=\"string\" id=\"TKEY\" size=\"20\"/><Column type=\"string\" id=\"CRTR_ID\" size=\"20\"/><Column type=\"string\" id=\"CRT_DT\" size=\"20\"/><Column type=\"string\" id=\"LAST_CHGR_ID\" size=\"20\"/><Column type=\"string\" id=\"LAST_CHG_DT\" size=\"20\"/></ColumnInfo><Rows><Row><Col id=\"CD_PR_CTGR\">PR20PR</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReturn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPrItem", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column type=\"string\" id=\"PR_ITEM_ID\" size=\"20\"/><Column type=\"string\" id=\"BRANCH_CD\" size=\"20\"/><Column type=\"string\" id=\"PR_NO\" size=\"20\"/><Column type=\"string\" id=\"ITM_NO\" size=\"20\"/><Column id=\"CD_PR_ITEM_STTS_NM\" type=\"STRING\" size=\"256\"/><Column type=\"string\" id=\"CD_PR_ITEM_STTS\" size=\"20\"/><Column type=\"string\" id=\"CD_FCTRY\" size=\"20\"/><Column type=\"string\" id=\"MTRL_GRP_ID\" size=\"20\"/><Column type=\"string\" id=\"MTRL_GRP_NM\" size=\"20\"/><Column type=\"string\" id=\"MTRL_CD\" size=\"20\"/><Column type=\"string\" id=\"MTRL_NM\" size=\"20\"/><Column type=\"string\" id=\"QTY\" size=\"20\"/><Column type=\"string\" id=\"CD_UNIT\" size=\"20\"/><Column id=\"CD_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column type=\"BIGDECIMAL\" id=\"REQ_PRICE\" size=\"20\"/><Column type=\"BIGDECIMAL\" id=\"REQ_AMT\" size=\"20\"/><Column type=\"string\" id=\"DLV_REQ_DAY\" size=\"20\"/><Column type=\"string\" id=\"INSP_CHRGR_ID\" size=\"20\"/><Column type=\"string\" id=\"ATTCH_FILE_CNT\" size=\"20\"/><Column type=\"string\" id=\"RMARK\" size=\"20\"/><Column type=\"string\" id=\"PCHRGR_ID\" size=\"20\"/><Column type=\"string\" id=\"RCV_DT\" size=\"20\"/><Column type=\"string\" id=\"REQ_DPMT_CD\" size=\"20\"/><Column type=\"string\" id=\"REQ_DPMT_NM\" size=\"20\"/><Column type=\"string\" id=\"CD_DOC_CTGR\" size=\"20\"/><Column type=\"string\" id=\"REQR_ID\" size=\"20\"/><Column type=\"string\" id=\"REQR_NM\" size=\"20\"/><Column type=\"string\" id=\"CNCL_RSN\" size=\"20\"/><Column type=\"string\" id=\"TKEY\" size=\"20\"/><Column type=\"string\" id=\"MTRL_REQ_NO\" size=\"20\"/><Column type=\"string\" id=\"IN_STR_CD\" size=\"20\"/><Column type=\"string\" id=\"OUT_STR_CD\" size=\"20\"/><Column type=\"string\" id=\"DUMY1\" size=\"20\"/><Column type=\"string\" id=\"ALT_EMGCY\" size=\"20\"/><Column type=\"string\" id=\"CRTR_ID\" size=\"20\"/><Column type=\"string\" id=\"CRT_DT\" size=\"20\"/><Column type=\"string\" id=\"LAST_CHGR_ID\" size=\"20\"/><Column type=\"string\" id=\"LAST_CHG_DT\" size=\"20\"/><Column type=\"string\" id=\"PTNR_ID\" size=\"20\"/><Column type=\"string\" id=\"DLV_PLC_NM\" size=\"20\"/><Column type=\"string\" id=\"ZIP_NO\" size=\"20\"/><Column type=\"string\" id=\"ADDR\" size=\"20\"/><Column type=\"string\" id=\"DTL_ADDR\" size=\"20\"/><Column type=\"string\" id=\"FWD_REMARK\" size=\"20\"/><Column type=\"string\" id=\"GR_ACNT_CD\" size=\"20\"/><Column type=\"string\" id=\"AST_NO\" size=\"20\"/><Column type=\"string\" id=\"AST_NM\" size=\"20\"/><Column type=\"string\" id=\"IM_ODR_NO\" size=\"20\"/><Column type=\"string\" id=\"IM_ODR_NM\" size=\"20\"/><Column type=\"string\" id=\"PO_PTNR_ID\" size=\"20\"/><Column type=\"string\" id=\"PO_PRICE\" size=\"20\"/><Column type=\"string\" id=\"BDGT_ADD_AMT\" size=\"20\"/><Column type=\"string\" id=\"BDGT_ADD_DT\" size=\"20\"/><Column type=\"string\" id=\"ALT_REQ_CXL\" size=\"20\"/><Column id=\"CHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"IN_STR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReturn2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM11", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM21", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdPR20", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_11", "absolute", "0%", "65", null, "167", "15", null, this);
            obj.set_taborder("0");
            obj.getSetter("objNm").set("DIV_헤더상");
            this.addChild(obj.name, obj);
            obj = new Tab("Tab01", "absolute", "0", "5", null, null, "0", "0", this.div_11);
            obj.set_taborder("0");
            obj.set_preload("true");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.set_cssclass("tab_default");
            this.div_11.addChild(obj.name, obj);
            obj = new Tabpage("tabp01", this.div_11.Tab01);
            obj.set_text("기본정보");
            obj.set_scrollbars("none");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("기본정보");
            this.div_11.Tab01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "5", null, "33", "0", null, this.div_11.Tab01.tabp01);
            obj.set_taborder("137");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staPoDay", "absolute", "581", "5", "160", "33", null, null, this.div_11.Tab01.tabp01);
            obj.set_taborder("138");
            obj.set_text("구매요청일자");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("발주일자");
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staTtl", "absolute", "0", "5", "171", "33", null, null, this.div_11.Tab01.tabp01);
            obj.set_taborder("139");
            obj.set_text("구매요청명");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "37", null, "33", "0", null, this.div_11.Tab01.tabp01);
            obj.set_taborder("140");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staPoCtgr", "absolute", "581", "37", "160", "33", null, null, this.div_11.Tab01.tabp01);
            obj.set_taborder("141");
            obj.set_text("결재완료일시");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("발주유형");
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staAmtVat", "absolute", "0", "37", "171", "33", null, null, this.div_11.Tab01.tabp01);
            obj.set_taborder("142");
            obj.set_text("구매요청금액");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "69", null, "33", "0", null, this.div_11.Tab01.tabp01);
            obj.set_taborder("143");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staDlvArea", "absolute", "581", "69", "160", "33", null, null, this.div_11.Tab01.tabp01);
            obj.set_taborder("144");
            obj.set_text("품의문서ID");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("배송처");
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Static("staPoAmt", "absolute", "0", "69", "171", "33", null, null, this.div_11.Tab01.tabp01);
            obj.set_taborder("145");
            obj.set_text("예산구분");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj = new MaskEdit("maePrAmt", "absolute", "177", "41", "220", "24", null, null, this.div_11.Tab01.tabp01);
            obj.set_taborder("146");
            obj.set_readonly("true");
            obj.set_mask("#,##0");
            obj.set_cssclass("input_point");
            obj.set_enable("false");
            obj.style.set_color("blue");
            obj.style.set_font("bold 10 Dotum");
            obj.getSetter("objNm").set("구매요청금");
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Edit("edtTtl", "absolute", "177", "9", "396", "24", null, null, this.div_11.Tab01.tabp01);
            obj.set_taborder("147");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("구매요청명");
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Calendar("calPrReqDay", "absolute", "747", "9", "150", "24", null, null, this.div_11.Tab01.tabp01);
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("148");
            obj.set_dateformat("yyyy.MM.dd ddd");
            obj.set_editformat("yyyy.MM.dd ddd");
            obj.getSetter("objNm").set("구매요청일");
            obj = new Edit("edtAprvCmpltDt", "absolute", "748", "41", "149", "24", null, null, this.div_11.Tab01.tabp01);
            obj.set_taborder("149");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("결재완료일시");
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Combo("cboBdgtType", "absolute", "177", "73", "220", "24", null, null, this.div_11.Tab01.tabp01);
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj.set_taborder("150");
            obj.set_innerdataset("dsCdCM21");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("예산구분");
            obj = new Edit("edtAppDocId", "absolute", "748", "73", "149", "24", null, null, this.div_11.Tab01.tabp01);
            obj.set_taborder("151");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("품의문서ID");
            this.div_11.Tab01.tabp01.addChild(obj.name, obj);
            obj = new Tabpage("tabp03", this.div_11.Tab01);
            obj.set_text("특이사항");
            obj.getSetter("objNm").set("특이사항");
            this.div_11.Tab01.addChild(obj.name, obj);
            obj = new TextArea("txtRmark", "absolute", "0", "5", null, null, "0", "0", this.div_11.Tab01.tabp03);
            obj.set_taborder("0");
            obj.set_scrollbars("none");
            obj.set_wordwrap("char");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("500");
            obj.getSetter("objNm").set("특이사항");
            this.div_11.Tab01.tabp03.addChild(obj.name, obj);
            obj = new Tabpage("tabp04", this.div_11.Tab01);
            obj.set_text("첨부파일");
            obj.getSetter("objNm").set("첨부파일");
            obj.set_url("CCOMP::CompNFileUpDown.xfdl");
            obj.set_enable("true");
            this.div_11.Tab01.addChild(obj.name, obj);
            obj = new Tabpage("tabp05", this.div_11.Tab01);
            obj.set_text("구매요청자");
            obj.getSetter("objNm").set("구매요청자");
            this.div_11.Tab01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "37", null, "33", "0", null, this.div_11.Tab01.tabp05);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_11.Tab01.tabp05.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "5", null, "33", "0", null, this.div_11.Tab01.tabp05);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_11.Tab01.tabp05.addChild(obj.name, obj);
            obj = new Static("staWrtr", "absolute", "0", "5", "171", "33", null, null, this.div_11.Tab01.tabp05);
            obj.set_taborder("40");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_11.Tab01.tabp05.addChild(obj.name, obj);
            obj = new Static("staTel", "absolute", "0", "37", "171", "33", null, null, this.div_11.Tab01.tabp05);
            obj.set_taborder("41");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.div_11.Tab01.tabp05.addChild(obj.name, obj);
            obj = new Edit("edtTel", "absolute", "177", "41", "356", "24", null, null, this.div_11.Tab01.tabp05);
            obj.set_taborder("42");
            obj.set_readonly("true");
            obj.set_cssclass("edt_default_r");
            obj.getSetter("objNm").set("전화번호");
            this.div_11.Tab01.tabp05.addChild(obj.name, obj);
            obj = new Edit("edtWrtrNm", "absolute", "282", "9", "250", "24", null, null, this.div_11.Tab01.tabp05);
            obj.set_taborder("43");
            obj.set_readonly("true");
            obj.set_cssclass("edt_default_r");
            obj.getSetter("objNm").set("담당자명");
            this.div_11.Tab01.tabp05.addChild(obj.name, obj);
            obj = new Edit("edtWrtrId", "absolute", "177", "9", "100", "24", null, null, this.div_11.Tab01.tabp05);
            obj.set_taborder("44");
            obj.set_readonly("true");
            obj.set_cssclass("edt_default_r");
            obj.getSetter("objNm").set("담당자ID");
            this.div_11.Tab01.tabp05.addChild(obj.name, obj);

            obj = new Div("div_1", "absolute", "0", "44", null, "24", "10", null, this);
            obj.set_taborder("1");
            obj.getSetter("objNm").set("DIV_헤더타이");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", null, "255", "24", null, "0", this.div_1);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 2 17");
            this.div_1.addChild(obj.name, obj);

            obj = new Div("div_0", "absolute", "0", "0", null, "34", "15", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_SearchBg");
            obj.getSetter("objNm").set("DIV_최상단");
            this.addChild(obj.name, obj);
            obj = new Edit("edtPrNo", "absolute", "160", "6", "220", "21", null, null, this.div_0);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_cssclass("edt_default_r");
            obj.getSetter("objNm").set("구매요청번호");
            this.div_0.addChild(obj.name, obj);
            obj = new Combo("cboPrCtgr", "absolute", "5", "6", "150", "21", null, null, this.div_0);
            this.div_0.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_innerdataset("dsCdPR20");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_cssclass("cbo_default_r");
            obj.set_enable("false");
            obj.getSetter("objNm").set("구매유형");

            obj = new Div("div_21", "absolute", "0", "275", null, null, "15", "0", this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.getSetter("objNm").set("Div_품목그리");
            this.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "0", null, null, "0", "0", this.div_21);
            obj.set_taborder("0");
            obj.set_binddataset("dsPrItem");
            obj.set_autoenter("select");
            obj.set_selecttype("cell");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.getSetter("f_colSize").set("N");
            obj.getSetter("f_excel").set("Y");
            obj.getSetter("f_filter").set("N");
            obj.getSetter("f_find").set("N");
            obj.getSetter("f_fix").set("Y");
            obj.getSetter("f_height").set("N");
            obj.getSetter("f_hide").set("N");
            obj.getSetter("f_init").set("Y");
            obj.getSetter("f_mode").set("Y");
            obj.getSetter("f_save").set("N");
            obj.getSetter("f_sort").set("Y");
            obj.getSetter("objNm").set("품목그리드");
            obj._setContents("<Formats><Format id=\"MMODE\"><Columns><Column size=\"43\"/><Column size=\"104\"/><Column size=\"288\"/><Column size=\"58\"/><Column size=\"61\"/><Column size=\"122\"/><Column size=\"110\"/><Column size=\"124\"/><Column size=\"94\"/><Column size=\"120\"/><Column size=\"147\"/><Column size=\"71\" band=\"right\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"품목코드\"/><Cell col=\"2\" text=\"품목명\"/><Cell col=\"3\" text=\"단위\"/><Cell col=\"4\" text=\"수량\"/><Cell col=\"5\" text=\"예상단가\"/><Cell col=\"6\" text=\"금액\"/><Cell col=\"7\" text=\"입고부서\"/><Cell col=\"8\" text=\"입고요청일\"/><Cell col=\"9\" text=\"입고계정\"/><Cell col=\"10\" text=\"비고\"/><Cell col=\"11\" text=\"첨부파일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\" maskchar=\" \" editdisplay=\"display\" expandshow=\"hide\"/><Cell col=\"1\" style=\"selectcolor:darkslateblue;\" text=\"bind:MTRL_CD\" tooltiptext=\"bind:MTRL_CD\"/><Cell col=\"2\" style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;selectcolor:darkslateblue;\" cssclass=\"cell_link\" text=\"bind:MTRL_NM\" tooltiptext=\"bind:DOC_NM\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:CD_UNIT\" maskchar=\" \" combodataset=\"dsCdCM11\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" tooltiptext=\"bind:CD_PUR_UNIT\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;color:royalblue;color2:royalblue;selectcolor:blue;selectfont:9 Dotum bold;\" text=\"bind:QTY\" editautoselect=\"true\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;color:salmon;color2:salmon;font:9 Dotum bold;selectcolor:fuchsia;selectfont:9 Dotum bold;\" text=\"bind:REQ_PRICE\" mask=\"#,##0.00\" editautoselect=\"true\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:REQ_AMT\" mask=\"#,##0\" editautoselect=\"true\"/><Cell col=\"7\" edittype=\"none\" text=\"bind:IN_STR_NM\" expandshow=\"show\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"8\" displaytype=\"date\" edittype=\"date\" text=\"bind:DLV_REQ_DAY\" mask=\"yyyy.MM.dd\" editautoselect=\"true\"/><Cell col=\"9\" edittype=\"none\" style=\"align:left;\" text=\"bind:GR_ACNT_NM\" editautoselect=\"true\" expandshow=\"show\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"10\" edittype=\"text\" style=\"align:left;\" text=\"bind:RMARK\" editautoselect=\"true\"/><Cell col=\"11\" displaytype=\"button\" text=\"expr:ATTCH_FILE_CNT == '0' ? '첨부' : '조회'\"/></Band></Format><Format id=\"VMODE\"><Columns><Column size=\"104\"/><Column size=\"288\"/><Column size=\"58\"/><Column size=\"61\"/><Column size=\"122\"/><Column size=\"110\"/><Column size=\"124\"/><Column size=\"94\"/><Column size=\"120\"/><Column size=\"147\"/><Column size=\"71\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"품목코드\"/><Cell col=\"1\" text=\"품목명\"/><Cell col=\"2\" text=\"단위\"/><Cell col=\"3\" text=\"수량\"/><Cell col=\"4\" text=\"예상단가\"/><Cell col=\"5\" text=\"금액\"/><Cell col=\"6\" text=\"입고부서\"/><Cell col=\"7\" text=\"입고요청일\"/><Cell col=\"8\" text=\"입고계정\"/><Cell col=\"9\" text=\"비고\"/><Cell col=\"10\" text=\"첨부파일\"/></Band><Band id=\"body\"><Cell style=\"selectcolor:darkslateblue;\" text=\"bind:MTRL_CD\" tooltiptext=\"bind:MTRL_CD\"/><Cell col=\"1\" edittype=\"none\" style=\"align:left;selectcolor:darkslateblue;\" cssclass=\"cell_link\" text=\"bind:MTRL_NM\" tooltiptext=\"bind:DOC_NM\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"none\" text=\"bind:CD_UNIT\" maskchar=\" \" combodataset=\"dsCdCM11\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\" tooltiptext=\"bind:CD_PUR_UNIT\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right;color:royalblue;color2:royalblue;selectcolor:blue;selectfont:9 Dotum bold;\" text=\"bind:QTY\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"none\" style=\"align:right;color:salmon;color2:salmon;font:9 Dotum bold;selectcolor:fuchsia;selectfont:9 Dotum bold;\" text=\"bind:REQ_PRICE\" mask=\"#,##0.00\" editautoselect=\"true\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:REQ_AMT\" mask=\"#,##0\" editautoselect=\"true\"/><Cell col=\"6\" edittype=\"none\" text=\"bind:IN_STR_NM\" expandshow=\"hide\"/><Cell col=\"7\" displaytype=\"date\" edittype=\"none\" text=\"bind:DLV_REQ_DAY\" mask=\"yyyy.MM.dd\" editautoselect=\"true\"/><Cell col=\"8\" edittype=\"none\" style=\"align:left;\" text=\"bind:GR_ACNT_NM\" editautoselect=\"true\" expandshow=\"hide\"/><Cell col=\"9\" edittype=\"none\" style=\"align:left;\" text=\"bind:RMARK\" editautoselect=\"true\"/><Cell col=\"10\" displaytype=\"text\" cssclass=\"cell_link\" text=\"bind:ATTCH_FILE_CNT\"/></Band></Format></Formats>");
            this.div_21.addChild(obj.name, obj);

            obj = new Div("div_2", "absolute", "0", "243", null, "30", "15", null, this);
            obj.set_taborder("4");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("DIV_품목타이");
            this.addChild(obj.name, obj);
            obj = new Button("btn_Req_New_item", "absolute", null, "3", "93", null, "163", "3", this.div_2);
            obj.set_taborder("16");
            obj.set_text("신규품목요청");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_visible("false");
            obj.style.set_background("#dfdfdfff");
            obj.getSetter("objNm").set("신규품목요청");
            this.div_2.addChild(obj.name, obj);
            obj = new Button("btn_Pre_Pr_Search", "absolute", null, "3", "100", null, "62", "3", this.div_2);
            obj.set_taborder("17");
            obj.set_text("+이전요청검색");
            obj.set_cssclass("btn_WF_Add");
            obj.style.set_background("#dfdfdfff");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("이전요청검색");
            this.div_2.addChild(obj.name, obj);
            obj = new Button("btn_Itm_Del", "absolute", null, "3", "60", null, "1", "3", this.div_2);
            obj.set_taborder("18");
            obj.set_text(" 삭제");
            obj.set_cssclass("btn_WF_Delete");
            obj.style.set_background("#dfdfdfff");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("행삭제");
            this.div_2.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "0", "76", null, null, "0", this.div_2);
            obj.set_taborder("19");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 2 17");
            this.div_2.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label", "absolute", "120", "0", "109", null, null, "0", this.div_2);
            obj.set_taborder("21");
            obj.set_text("검색 / 품목추가");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_align("right middle");
            obj.style.set_font("bold 10 malgun gothic");
            obj.getSetter("lbcd").set("");
            this.div_2.addChild(obj.name, obj);
            obj = new Edit("edtSrchMtrlNm", "absolute", "237", "1", "344", null, null, "1", this.div_2);
            obj.set_taborder("22");
            obj.set_lengthunit("utf8");
            obj.set_cssclass("edt_default");
            obj.style.set_font("10 malgun gothic");
            obj.getSetter("objNm").set("품목검색어");
            this.div_2.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "557", "1", "24", null, null, "1", this.div_2);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.style.set_font("9 Dotum");
            obj.getSetter("objNm").set("품목검색버튼");
            this.div_2.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1042, 218, this.div_11.Tab01.tabp01,
            	//-- Layout function
            	function(p) {
            		p.set_text("기본정보");
            		p.set_scrollbars("none");
            		p.getSetter("lbcd").set("");
            		p.getSetter("objNm").set("기본정보");

            	}
            );
            this.div_11.Tab01.tabp01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_11.Tab01.tabp03,
            	//-- Layout function
            	function(p) {
            		p.set_text("특이사항");
            		p.getSetter("objNm").set("특이사항");

            	}
            );
            this.div_11.Tab01.tabp03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_11.Tab01.tabp05,
            	//-- Layout function
            	function(p) {
            		p.set_text("구매요청자");
            		p.getSetter("objNm").set("구매요청자");

            	}
            );
            this.div_11.Tab01.tabp05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 167, this.div_11,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.getSetter("objNm").set("DIV_헤더상");

            	}
            );
            this.div_11.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.div_1,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.getSetter("objNm").set("DIV_헤더타이");

            	}
            );
            this.div_1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 34, this.div_0,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.set_cssclass("div_WF_SearchBg");
            		p.getSetter("objNm").set("DIV_최상단");

            	}
            );
            this.div_0.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_21,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.set_text("Div00");
            		p.getSetter("objNm").set("Div_품목그리");

            	}
            );
            this.div_21.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1202, 622, this.div_2,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_scrollbars("none");
            		p.getSetter("objNm").set("DIV_품목타이");

            	}
            );
            this.div_2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1220, 800, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("구매요청작성");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("div_2Vi","div_2","visible","dsObjBindVi","div_2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_2En","div_2","enable","dsObjBindEn","div_2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btn_Req_New_itemVi","div_2.btn_Req_New_item","visible","dsObjBindVi","btn_Req_New_item");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btn_Req_New_itemEn","div_2.btn_Req_New_item","enable","dsObjBindEn","btn_Req_New_item");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btn_Pre_Pr_SearchVi","div_2.btn_Pre_Pr_Search","visible","dsObjBindVi","btn_Pre_Pr_Search");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btn_Pre_Pr_SearchEn","div_2.btn_Pre_Pr_Search","enable","dsObjBindEn","btn_Pre_Pr_Search");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btn_Itm_DelVi","div_2.btn_Itm_Del","visible","dsObjBindVi","btn_Itm_Del");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btn_Itm_DelEn","div_2.btn_Itm_Del","enable","dsObjBindEn","btn_Itm_Del");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSrchMtrlNmVi","div_2.edtSrchMtrlNm","visible","dsObjBindVi","edtSrchMtrlNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSrchMtrlNmEn","div_2.edtSrchMtrlNm","readonly","dsObjBindEn","edtSrchMtrlNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Button00Vi","div_2.Button00","visible","dsObjBindVi","Button00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Button00En","div_2.Button00","enable","dsObjBindEn","Button00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sta_WFDA_LabelVi","div_2.sta_WFDA_Label","visible","dsObjBindVi","sta_WFDA_Label");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("sta_WFDA_LabelEn","div_2.sta_WFDA_Label","enable","dsObjBindEn","sta_WFDA_Label");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_21Vi","div_21","visible","dsObjBindVi","div_21");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_21En","div_21","enable","dsObjBindEn","div_21");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","div_0.edtPrNo","value","dsPr","PR_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","div_0.cboPrCtgr","value","dsPr","CD_PR_CTGR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_0Vi","div_0","visible","dsObjBindVi","div_0");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_0En","div_0","enable","dsObjBindEn","div_0");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboPrCtgrVi","div_0.cboPrCtgr","visible","dsObjBindVi","cboPrCtgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboPrCtgrEn","div_0.cboPrCtgr","readonly","dsObjBindEn","cboPrCtgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPrNoVi","div_0.edtPrNo","visible","dsObjBindVi","edtPrNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPrNoEn","div_0.edtPrNo","readonly","dsObjBindEn","edtPrNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_1Vi","div_1","visible","dsObjBindVi","div_1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_1En","div_1","enable","dsObjBindEn","div_1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_11.Tab01.tabp01.maePrAmt","value","dsPr","PR_AMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_11.Tab01.tabp01.edtTtl","value","dsPr","TTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","div_11.Tab01.tabp01.cboBdgtType","value","dsPr","CD_BDGT_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","div_11.Tab01.tabp01.edtAppDocId","value","dsPr","APP_DOC_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","div_11.Tab01.tabp01.edtAprvCmpltDt","value","dsPr","APRV_CMPLT_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","div_11.Tab01.tabp01.calPrReqDay","value","dsPr","PR_REQ_DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","div_11.Tab01.tabp03.txtRmark","value","dsPr","RMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_11Vi","div_11","visible","dsObjBindVi","div_11");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("div_11En","div_11","enable","dsObjBindEn","div_11");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab01Vi","div_11.Tab01","visible","dsObjBindVi","Tab01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab01En","div_11.Tab01","enable","dsObjBindEn","Tab01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp01Vi","div_11.Tab01.tabp01","visible","dsObjBindVi","tabp01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp01En","div_11.Tab01.tabp01","enable","dsObjBindEn","tabp01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("maePrAmtVi","div_11.Tab01.tabp01.maePrAmt","visible","dsObjBindVi","maePrAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("maePrAmtEn","div_11.Tab01.tabp01.maePrAmt","readonly","dsObjBindEn","maePrAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTtlVi","div_11.Tab01.tabp01.edtTtl","visible","dsObjBindVi","edtTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTtlEn","div_11.Tab01.tabp01.edtTtl","readonly","dsObjBindEn","edtTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calPrReqDayVi","div_11.Tab01.tabp01.calPrReqDay","visible","dsObjBindVi","calPrReqDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calPrReqDayEn","div_11.Tab01.tabp01.calPrReqDay","readonly","dsObjBindEn","calPrReqDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtAprvCmpltDtVi","div_11.Tab01.tabp01.edtAprvCmpltDt","visible","dsObjBindVi","edtAprvCmpltDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtAprvCmpltDtEn","div_11.Tab01.tabp01.edtAprvCmpltDt","readonly","dsObjBindEn","edtAprvCmpltDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboBdgtTypeVi","div_11.Tab01.tabp01.cboBdgtType","visible","dsObjBindVi","cboBdgtType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboBdgtTypeEn","div_11.Tab01.tabp01.cboBdgtType","readonly","dsObjBindEn","cboBdgtType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtAppDocIdVi","div_11.Tab01.tabp01.edtAppDocId","visible","dsObjBindVi","edtAppDocId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtAppDocIdEn","div_11.Tab01.tabp01.edtAppDocId","readonly","dsObjBindEn","edtAppDocId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp03Vi","div_11.Tab01.tabp03","visible","dsObjBindVi","tabp03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp03En","div_11.Tab01.tabp03","enable","dsObjBindEn","tabp03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txtRmarkVi","div_11.Tab01.tabp03.txtRmark","visible","dsObjBindVi","txtRmark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txtRmarkEn","div_11.Tab01.tabp03.txtRmark","readonly","dsObjBindEn","txtRmark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp05Vi","div_11.Tab01.tabp05","visible","dsObjBindVi","tabp05");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabp05En","div_11.Tab01.tabp05","enable","dsObjBindEn","tabp05");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTelVi","div_11.Tab01.tabp05.edtTel","visible","dsObjBindVi","edtTel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTelEn","div_11.Tab01.tabp05.edtTel","readonly","dsObjBindEn","edtTel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtWrtrNmVi","div_11.Tab01.tabp05.edtWrtrNm","visible","dsObjBindVi","edtWrtrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtWrtrNmEn","div_11.Tab01.tabp05.edtWrtrNm","readonly","dsObjBindEn","edtWrtrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtWrtrIdVi","div_11.Tab01.tabp05.edtWrtrId","visible","dsObjBindVi","edtWrtrId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtWrtrIdEn","div_11.Tab01.tabp05.edtWrtrId","readonly","dsObjBindEn","edtWrtrId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnRemote_0Vi","63_divRemote.btnRemote_0","visible","dsObjBindVi","btnRemote_0");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnRemote_0En","63_divRemote.btnRemote_0","enable","dsObjBindEn","btnRemote_0");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnRemote_1Vi","63_divRemote.btnRemote_1","visible","dsObjBindVi","btnRemote_1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnRemote_1En","63_divRemote.btnRemote_1","enable","dsObjBindEn","btnRemote_1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","div_11.Tab01.tabp04","enable","dsObjBindEn","Tab01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("grdListFormatId","div_21.grdList","formatid","dsObjBindGrid","grdList");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Grid00FormatId","Grid00","formatid","dsObjBindGrid","Grid00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Grid01FormatId","Grid01","formatid","dsObjBindGrid","Grid01");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompNFileUpDown.xfdl");
        };
        
        // User Script
        this.registerScript("BPrDetail.xfdl", function(exports) {
        /**
         * @파일명       	: readPr.xfdl
         * @생성자       	: 박소진
         * @생성일자     	: 2019. 04. 29
         * @설명			: BPur 디테일
         * @최종수정자		: 박소진
         * @최종수정일자	: 
        */

        
        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function(){

        	var param = [
        				{code:"CM11",sSelectType:"S"} 	// 단위
        				,{code:"CM21",sSelectType:"S"} 	// 예산구분
        				,{code:"PR20",sSelectType:"S"} 	// 구매요청유형
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
        				{btnName:"구매요청", clickEventFunc:"fnPrReq"}
        				,{btnName:"결재요청", clickEventFunc:"fnPrAppReq"}
        		   ];		   
        	gfnRemote(this, sArg);
        }

        /**
          * @함수명	: fnFormOninit
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.InitEventInfo(이벤트변수)
          * @desc     	: 화면이 최초 열렸을때 실행되는 이벤트.
          */
        this.fnFormOninit = function(obj,e)
        {
        	this.fnSetCode();
        }

        
        /**
        	@함수명	fnFold
        	@desc   	타이틀 접기/펼치기 기능
        **/
        this.fnFold = function()
        {
        	/*
        		상단에서부터 div 순서대로 기입.
        		ttl:접기/펼치기 클릭 하는 컴포넌트, body:실제로 접혀지거나 펼쳐지는 컴포넌트, initFold:true면 접는다.
        	*/
        	var sArg = [ 
        				{ttl:this.div_1.staViewCompTitle00 , body:this.div_11}	//기본정보
        				,{ttl:this.div_2.staViewCompTitle00 , body:this.div_21}	//품목정보
        		   ];
         	gfnDivFold(this, sArg);
        	
         	gfnSetGrdFunc(this.div_21.grdList , '', this);
        }

        /**
          * @함수명	: fnFormOnload
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.LoadEventInfo(이벤트변수)
          * @desc     	: 화면이 로딩 될때마다 실행되는 이벤트 
          */
        this.fnFormOnload = function(obj,e)
        {
            
        	this.fnFold();
        	gfnMakeFileDs(this);
        	
        	//구매요청현화에서 넘겨받는 파라미터
        	var prNo = gfnGetTmprData("PR_NO");
        	gfnClearTmprData(); 
        	
        	if(!gfnIsNull(prNo)) {
        		this.dsPr.setColumn(0, "PR_NO",prNo);
        		this.fnSearch();
        	} else {
        		gfnSetObj("A");
        		this.dsPr.setColumn(0,"CD_PR_STTS","PR11WRI");
        		this.dsPr.setColumn(0,"CD_BDGT_TYPE","");
        		this.fnFileload("N");
        	}
        }

        
        /**
        	@function	fn_preSearch()
        	@desc   	조회 전 처리
        */
        this.fnPreSearch = function(arg)
        {
        	// 물품요청 작성화면
        		if(this.dsPr.getRowCount()<1){
        			this.dsPr.addRow();
        		}
        		
        		if(arg != "" && arg != null){
        			this.dsPr.setColumn(0,"PR_NO",arg);
        		}

        	
        	return true;
        }

        /**
        	@function	fn_commSrch()
        	@desc   	조회 프로세스
        */
        this.fnSearch = function()
        {
        	//if(!this.fnPreSearch(arg)) return false;
        	
        	var sSvcID = "readPR"; //고유아이디
        	var sController = "epro.pur.service.BPrService.readPr"; //서버호출유알엘 service에 작성한 부분 호출
        	var sInDatasets = "inPr=dsPr";//오른쪽이 주는쪽 왼쪽이 받는쪽 이름.
        	var sOutDatasets = "dsPr=dsPr dsPrItem=dsPrItem";//서버에서 받아오는거
        	var sCallbackFunc = "fnTrCallBack";
        	
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        	

        }

        

        //물품검색 list
        this.fnEnterOnkeyup = function(obj,e)
        {

         	if(e.keycode == "13"){ //엔터 키코드=13 백스페이스=9
        		this.fnItemSearch(); 
             }
        }

        /**
        	@function	fnItemSearch()
        	@desc   	구매대상품목을 검색하여 추가함
        */
        this.fnItemSearch = function(obj,e)
        {
        	var sArg = {
        		agv_id: ""
        		,agv_nm: this.div_2.edtSrchMtrlNm.value
        	};
        	gfnSearchComMtrl(this, "BMtrlPrSrchMultiPopup", "fnPopCallBack", sArg,"PR");
        }

        

        //팝업콜백
        this.fnPopCallBack = function(sPopupId,rtn){ //닫기버튼 눌렀을때 팝업에서 넘겨온 값

        	
        if(gfnIsNull(rtn)) return;
        	//alert(rtn);
        	
        	this.dsReturn.clear(); //팝업에서 넘겨온 값을 ㅇ여기서 쓰기 우ㅣ해 임시데이터셋 만들어준다.
        	this.dsReturn.loadXML(rtn);//팝업 닫힐때 xml정보 넘겨줌. 값이 있으면 dsReturn라는 임시데이터셋에 값세팅.

        	switch(sPopupId){
        		//이전요청검색
        		case "searchPrPrePopup":
         			if(!gfnIsNull(this.dsReturn.getColumn(0,"MTRL_CD"))){
         			
        				this.dsPrItem.set_enableevent(false);
        					for(var i=0; i<this.dsReturn.rowcount; i++){
        				
        					var nRow = this.dsPrItem.addRow();
        					
        					this.dsPrItem.setColumn(nRow, "MTRL_CD", this.dsReturn.getColumn(i, "MTRL_CD"));
        					this.dsPrItem.setColumn(nRow, "MTRL_NM", this.dsReturn.getColumn(i, "MTRL_NM_SPEC"));
        					this.dsPrItem.setColumn(nRow,"CD_UNIT",this.dsReturn.getColumn(i,"CD_UNIT"));
        					this.dsPrItem.setColumn(nRow,"CD_UNIT_NM",this.dsReturn.getColumn(i,"CD_UNIT_NM"));
        					this.dsPrItem.setColumn(nRow,"REQ_PRICE",this.dsReturn.getColumn(i,"CNTR_PRICE"));
        					this.dsPrItem.setColumn(nRow,"DLV_REQ_DAY",this.dsReturn.getColumn(0,"DLV_DAY"));
        					this.dsPrItem.setColumn(nRow,"ATTCH_FILE_CNT","0");
        					this.dsPrItem.setColumn(nRow,"CD_PR_ITEM_STTS","PR13WRI");
        					this.dsPrItem.setColumn(nRow,"CD_PR_ITEM_STTS_NM","작성중");
         				
        					}
        				
        				this.dsPrItem.set_enableevent(true);
         			}
        			break;
        			
        		case "BMtrlPrSrchMultiPopup":
         			if(!gfnIsNull(this.dsReturn.getColumn(0,"MTRL_CD"))){
         			
        				this.dsPrItem.set_enableevent(false);
        					for(var i=0; i<this.dsReturn.rowcount; i++){
        				
        					var nRow = this.dsPrItem.addRow();
        					
        					this.dsPrItem.setColumn(nRow, "MTRL_CD", this.dsReturn.getColumn(i, "MTRL_CD"));
        					this.dsPrItem.setColumn(nRow, "MTRL_NM", this.dsReturn.getColumn(i, "MTRL_NM"));
        					this.dsPrItem.setColumn(nRow,"CD_UNIT",this.dsReturn.getColumn(i,"CD_PUR_UNIT"));
        					this.dsPrItem.setColumn(nRow,"REQ_PRICE",this.dsReturn.getColumn(i,"CNTR_PRICE"));
        					this.dsPrItem.setColumn(nRow,"DLV_REQ_DAY",this.dsReturn.getColumn(0,"DLV_DAY"));
        					this.dsPrItem.setColumn(nRow,"ATTCH_FILE_CNT","0");
        					this.dsPrItem.setColumn(nRow,"CD_PR_ITEM_STTS","PR13WRI");
        					this.dsPrItem.setColumn(nRow,"CD_PR_ITEM_STTS_NM","작성중");
         				
        					//this.fnSumAmt(nRow);
         					}
        				
        				this.dsPrItem.set_enableevent(true);
         			}
        			break;
        			
        		//입고부서	
        		case "searchDept":
         			if(!gfnIsNull(this.dsReturn.getColumn(0,"STR_CD"))){
         			
        				this.dsPrItem.set_enableevent(false);
        				this.dsPrItem.setColumn(this.dsPrItem.rowposition, "IN_STR_NM", this.dsReturn.getColumn(0, "SL_NM"));
        				this.dsPrItem.setColumn(this.dsPrItem.rowposition, "IN_STR_CD", this.dsReturn.getColumn(0, "STR_CD"));
        				this.dsPrItem.set_enableevent(true);
         			}
        			break;
        			
        			//계정명
        		case "searchAcnt":
        			if(!gfnIsNull(this.dsReturn.getColumn(0,"ACNT_CD"))){
        				this.dsPrItem.set_enableevent(false);
        				this.dsPrItem.setColumn(this.dsPrItem.rowposition, "GR_ACNT_CD", this.dsReturn.getColumn(0, "ACNT_CD"));
        				this.dsPrItem.setColumn(this.dsPrItem.rowposition, "GR_ACNT_NM", this.dsReturn.getColumn(0, "ACNT_NM"));
        				trace(this.dsReturn.getColumn(0, "ACNT_CD"));
        				trace(this.dsReturn.getColumn(0, "ACNT_NM"));
        				this.dsPrItem.set_enableevent(true);
         			}
        			break;
        		case "BAprvReqPopup":
        			this.fnSearch();
        			break;
        		default:
        		break;	
        	}
        	
        	
        }

        
         
        this.divViewCompBody00_grdList_onexpandup = function(obj,e)
        {
        	
        	//입고부서
        	if("IN_STR_NM" == gfnGrdBindColNm(obj, e.cell)){
        		
        		var sArg = { 
        					agv_nm : this.dsPrItem.getColumn(this.dsPrItem.rowposition,"IN_STR_NM")
        			   };
        			   
        		gfnModalPop(this, "searchDept", "CPOP::BSlSrchPopup.xfdl", sArg, "fnPopCallBack", 800, 600);
        		
        		//계정명
        	}else if("GR_ACNT_NM" == gfnGrdBindColNm(obj, e.cell)){
        	
        	var sArg = {
        				agv_nm : this.dsPrItem.getColumn(this.dsPrItem.rowposition,"GR_ACNT_NM")
        				};
        		gfnModalPop(this, "searchAcnt", "CPOP::BAcntSrchPopup.xfdl", sArg, "fnPopCallBack", 800, 600);
        	
        	}else if("ATTCH_FILE_CNT" == gfnGrdBindColNm(obj, e.cell)){
        	
        	//첨부파일
        	var sArg = {
        				compId : this.dsPrItem.getColumn(this.dsPrItem.rowposition,"ATTCH_FILE_CNT")
        				};
        		gfnModalPop(this, "searchFiles", "CCOMP::CompNFileUpDown.xfdl", sArg, "fnPopCallBack", 800, 600);
        	
        	}
        	

        }

        

        /**
        	@function	fnSave()
        	@param		type {String} app:결재팝업호출전 저장. 그외:임시저장.
        	@desc   	(공통버튼)저장
        */
        this.fnSave = function()
        {
        	if( !( gfnIsNull(this.dsPr.getColumn(0, "CD_PR_STTS")) || this.dsPr.getColumn(0,"CD_PR_STTS") == "PR11WRI" )){
        		alert("작성중인 상태가 아니라 저장할 수 없습니다.");
        		return false;
        	}
        	if(this.dsPrItem.rowcount==0){
        		alert("저장할 품목이 존재하지 않습니다.");
        		return false;
        	}
        	if(gfnIsNull(this.dsPr.getColumn(0, "CD_PR_STTS"))) this.dsPr.setColumn(0,"CD_PR_STTS","PR11WRI");
        	if(gfnIsNull(this.dsPr.getColumn(0,"CD_PR_CTGR"))) this.dsPr.setColumn(0, "CD_PR_CTGR"			, "PR20PR");
        	
        	var sSvcID = "save";
        	var sController = "epro.pur.service.BPrService.savePr";
        	var sInDatasets = "inPr=dsPr:A inPrItem=dsPrItem:A";
        	var sOutDatasets = "dsPr=inPr";
        	var sCallbackFunc = "fnTrCallBack";
        	
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        

        /**
        	@function	fnPrReq()
        	@param		inSvcID {String} 
        	@desc   	임시저장을 제외한 나머지 저장
        */
        this.fnSaveReq = function(inSvcID)
        {
        	var sSvcID = inSvcID;
        	var sController = "epro.pur.service.BPrService.savePr";
        	var sInDatasets = "inPr=dsPr:A inPrItem=dsPrItem:A";
        	var sOutDatasets = "dsPr=inPr";
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
        		case "readPR":
        			var prStts = this.dsPr.getColumn(0,"CD_PR_STTS");
        			
        			if(prStts=='PR11WRI'){
        				gfnSetObj("A");
        				this.fnFileload("N");
        			}else{
        				gfnSetObj("C");
        				this.fnFileload("Y");
        			}
        			
        			break;
         		//구매요청(내부결재없음)
         		case "reqPR" :	
        			//gfnSetTmprData("PO_NO", this.dsPo.getColumn(0, "PO_NO"));
        			//this.gfn_setTmprData("COREXP_KIDS", this.dsPo.getColumn(0, "COREXP_KIDS"));
        			this.fnSearch();	
        			break;		
         
         		//임시저장
         		case "save" :
        			alert("저장되었습니다.");
        			this.fnSearch();
        			break;
        			
        		case "reqApp":
        			var sArg = {
        					agv_doc:"AP11PUR"
        					,agv_mthd:"AP12SEQ" 
        					,agv_appdoc : this.dsPr.saveXML()+"▩"+this.dsPrItem.saveXML()
        					,agv_ttl:this.dsPr.getColumn(0,"TTL")
        					,agv_ref1:this.dsPr.getColumn(0,"PR_NO")
        					,agv_remote:"Y"
        					,remote_btn: [{btnName:"승인요청", clickEventFunc:"fnReq"}
        								 ,{btnName:"전결", clickEventFunc:"fnCfm"}]
        				};
        				
        			gfnModalPop(this, "BAprvReqPopup", "BAPRV::BAprvReqPopup.xfdl", sArg, "fnPopCallBack", 900, 800);
        			break;
        			
        		default:
        			break;		
         	}
         }

        //물품요청 버튼
        this.fnPrReq = function(obj,e)
        {
        	if(!this.fnPreSave("AP11PUR")) return false;
        	if(!application.confirm( "구매요청 하시겠습니까?" , "확인", "오류" )){
        		return false;
        	}
        	
        	//구매요청 헤더 작성
        	this.dsPr.setColumn(0, "CD_PR_STTS"			, "PR11REQ");
        	if (gfnIsNull(this.dsPr.getColumn(0,"CD_PR_CTGR"))) this.dsPr.setColumn(0, "CD_PR_CTGR"			, "PR20PR");
        	this.dsPr.setColumn(0, "PR_AMT" 			, this.dsPrItem.getSum("REQ_AMT"));
        	//Title 작성
        	var ttl = this.dsPrItem.rowcount == 1  ?"":" 외 " + (this.dsPrItem.rowcount-1) + "건";
        	if (gfnIsNull(this.dsPr.getColumn(0,"TTL"))) this.dsPr.setColumn(0, "TTL"				, this.dsPrItem.getColumn(0,"MTRL_NM") + ttl );
        	
        	//품목상태 설정
        	this.dsPrItem.set_enableevent(false);
        	for(var i=0; i<this.dsPrItem.rowcount; i++){
        		this.dsPrItem.setColumn(i,"CD_PR_ITEM_STTS","PR13RCV");
        	}
        	this.dsPrItem.set_enableevent(true);
        	//return;
        	this.fnSaveReq("reqPR");
        }

        //결재요청 버튼
        this.fnPrAppReq = function(obj,e)
        {
        	if(!application.confirm( "결재요청 하시겠습니까?" , "확인", "취소" )){
        		return false;
        	}
        	
        	//저장 후 팝업 호출해야됨
        	this.fnSaveReq("reqApp");
        }

        
        /**
          * @함수명  : fnPreSave
          * @input    : 
          * @return   : 
          * @desc     : 저장전 유효성체크
          */
        this.fnPreSave = function(type)
        {	
        	//사용자 유효성 체크 추가
         	var arrUserErr = [];

        // 	//데이터셋의 수정사항이 존재하는지 확인한다.
        // 	if(gfnIsNull(type)&&!gfnGetDsUpdate(this.dsPr)&&!gfnGetDsUpdate(this.dsPrItem)){
        // 		
        // 		gfnAlert("수정사항이 존재하지 않습니다.");
        // 		return false;
        // 		
        // 	}
        	
        	if(this.dsPrItem.getRowCount() < 1){
        		gfnAlert("품목은 1개 이상 추가하셔야 합니다.");
        		return;
        	}
        	
        	if(type == "AP11PUR"){
        		
        		for(var i=0; i<this.dsPrItem.rowcount; i++){
        			if(!gfnCheckPreDate(this.dsPrItem.getColumn(i,"DLV_REQ_DAY"))){
        				var sMsg = "납품일자는 현재일자보다 과거일 수 없습니다.";	
        				var objParam = {agv_msg:sMsg, agv_type:"필수입력오류", agv_isEs:"Y" };
        				arrUserErr.push(objParam);
        			}
        		}
        		this.dsPrItem.set_enableevent(false);
        		//단가 입력했는지 체크
        		this.dsPrItem.filter("REQ_PRICE == '0' || REQ_PRICE == '' || REQ_PRICE == null"); 	
        		if(this.dsPrItem.getRowCount() > 0)
        		{
        			var sMsg = "품목 단가를 입력하세요.";	
        			var objParam = {agv_msg:sMsg, agv_type:"필수입력오류", agv_isEs:"Y" };
        			arrUserErr.push(objParam);
        		}

        		//수량 체크
        		this.dsPrItem.filter("QTY == '0' || QTY == '' || QTY == null"); 	
        		if(this.dsPrItem.getRowCount() > 0)
        		{
        			var sMsg = "수량 0이상을 입력해주세요.";	
        			var objParam = {agv_msg:sMsg, agv_type:"필수입력오류", agv_isEs:"Y" };
        			arrUserErr.push(objParam);
        		}

        		//품목 체크
        		this.dsPrItem.filter("MTRL_CD == null && MTRL_REQ_NO == null "); 	
        		if(this.dsPrItem.getRowCount() > 0)
        		{
        			var sMsg = "품목코드나 자재등록요청번호는 필수입니다.";	
        			var objParam = {agv_msg:sMsg, agv_type:"필수입력오류", agv_isEs:"Y" };
        			arrUserErr.push(objParam);
        		}
        		this.dsPrItem.filter(""); 	
        		this.dsPrItem.set_enableevent(true);
        		
          	 	// 필수항목 체크
        		if(!gfnValidate(this, false, arrUserErr)){
        			return false;
        		}
        		
        		return true;
        	}
        }

        
        this.Div3_btn_Itm_Del_onclick = function(obj,e)
        {
        	gfnChkDelConfirm(this.dsPrItem);
        	this.dsPr.setColumn(0, "PR_AMT" , this.dsPrItem.getSum("REQ_AMT"));
        }

        

        /**
        	@function	dsPrItem_oncolumnchanged()
        	@desc   	그리드 바인딩된 데이터셋 값 변경후 이벤트
        */
        this.dsPrItem_oncolumnchanged = function(obj,e)
        {
        	// 금액계산
        	if(e.columnid=="QTY" || e.columnid=="REQ_PRICE"){
        		this.fnSumAmt(this.dsPrItem.rowposition);
        	}
        }

        
        /**
        	@function	fnSumAmt()
        	@desc   	금액계산
        */
        this.fnSumAmt = function(idx){
        	var qty = this.dsPrItem.getColumn(idx,"QTY");
        	var reqPrice = this.dsPrItem.getColumn(idx,"REQ_PRICE");

        	if(qty==null || reqPrice==null) return;

        	this.dsPrItem.setColumn(this.dsPrItem.rowposition,"REQ_AMT",qty*reqPrice);
        	this.dsPr.setColumn(0, "PR_AMT" 			, this.dsPrItem.getSum("REQ_AMT"));
        }

        this.fnSearchPrPre = function(obj,e)
        {
        	var sArg = {}; 
        	gfnModalPop(this, "searchPrPrePopup", "BPUR::BPrItemSearchPrePop.xfdl", sArg, "fnPopCallBack", 1000, 450);
        }

        this.fnItemReqCall = function(obj,e)
        {
        	alert("신규 품목등록 요청을 합니다.");
        }

        this.div_21_grdList_oncelldblclick = function(obj,e)
        {
        	if(gfnIsNull(this.dsPrItem.getColumn(e.row,gfnGrdBindColId(obj, e.cell)))) return false;

        	if(gfnGrdBindColId(obj, e.cell)=="MTRL_NM")	//품목정보
        	{
        		var sArg = { agv_id : this.dsPrItem.getColumn(e.row, "MTRL_CD")};
        		gfnModalPop(this, "readMtrlInfo", "CPOP::BMtrlInfoPopup.xfdl", sArg, "fnPopCallBack", 800, 500);
        	}	
        }

        this.div_21_grdList_oncellclick = function(obj,e)
        {
        	if(gfnGrdBindColType(obj, e.cell)=="button")	//첨부파일
        	{
        		var fileMode = "N";
        		
        		if(this.dsPr.getColumn(0,"CD_PR_STTS")!='PR11WRI'){
        			fileMode = "Y"
        		}
        	
        		var sArg = { 
        					agv_form : this
        					, agv_sTableNm		: "MM_PR_ITEM"
        					, agv_data			: this.dsPrItem
        					, agv_arrFileKey	: [this.dsPr.getColumn(0, "PR_NO"),this.dsPrItem.getColumn(e.row,"PR_ITEM_ID")]
        					, agv_view 			: fileMode
        					};
        		
        		gfnModalPop(this, "commSpecFilePop", "CPOP::CompFileUpDownPopup.xfdl", sArg, "fnPopCallBack","1000","300");
        	}
        }

        /**
          * @함수명	: fnFileload
          * @desc     	: 첨부파일 셋팅
          */
        this.fnFileload= function(fUse)
        {
        	var sTableNm = "MM_PR";
        	var arrFileKey = [this.dsPr.getColumn(0, "PR_NO")
         					 ];
        	this.div_11.Tab01.tabp04.fnFileInit(this, sTableNm, this.dsPr, arrFileKey,fUse);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPrItem.addEventHandler("oncolumnchanged", this.dsPrItem_oncolumnchanged, this);
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.div_11.Tab01.addEventHandler("onchanged", this.div_21_Tab01_onchanged, this);
            this.div_1.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.div_21.grdList.addEventHandler("oncellclick", this.div_21_grdList_oncellclick, this);
            this.div_21.grdList.addEventHandler("oncelldblclick", this.div_21_grdList_oncelldblclick, this);
            this.div_21.grdList.addEventHandler("onexpandup", this.divViewCompBody00_grdList_onexpandup, this);
            this.div_2.btn_Req_New_item.addEventHandler("onclick", this.fnItemReqCall, this);
            this.div_2.btn_Pre_Pr_Search.addEventHandler("onclick", this.fnSearchPrPre, this);
            this.div_2.btn_Itm_Del.addEventHandler("onclick", this.Div3_btn_Itm_Del_onclick, this);
            this.div_2.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.div_2.edtSrchMtrlNm.addEventHandler("onkeyup", this.fnEnterOnkeyup, this);
            this.div_2.Button00.addEventHandler("onclick", this.fnItemSearch, this);

        };

        this.loadIncludeScript("BPrDetail.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
