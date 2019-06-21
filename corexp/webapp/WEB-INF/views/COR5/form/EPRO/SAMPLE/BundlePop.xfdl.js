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
                this.set_name("BundlePop");
                this.set_titletext("공통팝업모음");
                this._setFormPosition(0,0,1200,769);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCondition", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.getSetter("dsDescription").set("검색조건 데이터셋");
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_NM_M\" type=\"STRING\" size=\"256\"/><Column id=\"STR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PTNR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PTNR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACNT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USER_ID\"/><Col id=\"USER_NM\"/><Col id=\"MTRL_CD\"/><Col id=\"MTRL_NM\"/><Col id=\"MTRL_NM_M\"/><Col id=\"STR_CD\"/><Col id=\"SL_NM\"/><Col id=\"PTNR_ID\"/><Col id=\"PTNR_NM\"/><Col id=\"ACNT_CD\"/><Col id=\"ACNT_NM\"/><Col id=\"BRANCH_CD\"/><Col id=\"BRANCH_NM\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReturn", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAltInvntry", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ID\" type=\"STRING\" size=\"40\"/><Column id=\"CD_NM_LO\" type=\"STRING\" size=\"40\"/></ColumnInfo><Rows><Row><Col id=\"CD_ID\"/><Col id=\"CD_NM_LO\">[전체]</Col></Row><Row><Col id=\"CD_ID\">N</Col><Col id=\"CD_NM_LO\">구매대상</Col></Row><Row><Col id=\"CD_ID\">Y</Col><Col id=\"CD_NM_LO\">출고대상</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompBody01", "absolute", "428", "23", "300", "169", null, null, this);
            obj.set_taborder("95");
            obj.set_cssclass("div_WF_DetailBg");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "31", null, "33", "0", null, this.divViewCompBody01);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "-1", null, "33", "0", null, this.divViewCompBody01);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staMultyPop01", "absolute", "0", "-1", "100", "33", null, null, this.divViewCompBody01);
            obj.set_taborder("31");
            obj.set_text("업체검색");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("TTL_TOT_AMT");
            obj.style.set_color("transparent");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Button("btnMultyPop01", "absolute", "105", "5", "74", "21", null, null, this.divViewCompBody01);
            obj.set_taborder("41");
            obj.set_text("업체검색");
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("견적요청참조 버튼");
            obj.getSetter("lbcd").set("");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staMultyPop02", "absolute", "0", "31", "100", "33", null, null, this.divViewCompBody01);
            obj.set_taborder("46");
            obj.set_text("품목검색");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("TTL_TOT_AMT");
            obj.style.set_color("transparent");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Button("btnMultyPop02", "absolute", "105", "37", "74", "21", null, null, this.divViewCompBody01);
            obj.set_taborder("47");
            obj.set_text("품목검색");
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("견적요청참조 버튼");
            obj.getSetter("lbcd").set("");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "63", null, "33", "0", null, this.divViewCompBody01);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staMultyPop00", "absolute", "0", "63", "100", "33", null, null, this.divViewCompBody01);
            obj.set_taborder("50");
            obj.set_text("품목검색(PR)");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("TTL_TOT_AMT");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Edit("edtMultyPopNm01", "absolute", "105", "68", "150", "23", null, null, this.divViewCompBody01);
            obj.set_taborder("51");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("구매요청자명");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Button("btnSinglePop01", "absolute", "231", "68", "24", "23", null, null, this.divViewCompBody01);
            obj.set_taborder("52");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("구매요청자 검색 버튼");
            this.divViewCompBody01.addChild(obj.name, obj);

            obj = new Div("divViewCompBody00", "absolute", "-2", "23", "370", "369", null, null, this);
            obj.set_cssclass("div_WF_DetailBg");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "-1", null, "33", "0", null, this.divViewCompBody00);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "31", null, "33", "0", null, this.divViewCompBody00);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "63", null, "33", "0", null, this.divViewCompBody00);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine03", "absolute", "0", "95", null, "33", "0", null, this.divViewCompBody00);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine04", "absolute", "0", "127", null, "33", "0", null, this.divViewCompBody00);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staSinglePop00", "absolute", "0", "-1", "100", "33", null, null, this.divViewCompBody00);
            obj.set_taborder("0");
            obj.set_text("담당자검색");
            obj.set_cssclass("sta_WF_Label");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staSinglePop01", "absolute", "0", "31", "100", "33", null, null, this.divViewCompBody00);
            obj.set_taborder("1");
            obj.set_text("창고검색");
            obj.set_cssclass("sta_WF_Label");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staSinglePop02", "absolute", "0", "63", "100", "33", null, null, this.divViewCompBody00);
            obj.set_taborder("2");
            obj.set_text("협력사검색");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("거래중지포함");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staSinglePop03", "absolute", "0", "95", "100", "33", null, null, this.divViewCompBody00);
            obj.set_taborder("3");
            obj.set_text("계정검색");
            obj.set_cssclass("sta_WF_Label");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staSinglePop04", "absolute", "0", "127", "100", "33", null, null, this.divViewCompBody00);
            obj.set_taborder("4");
            obj.set_text("품목검색");
            obj.set_cssclass("sta_WF_Label");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtSinglePopId02", "absolute", "105", "68", "100", "23", null, null, this.divViewCompBody00);
            obj.set_taborder("16");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("objNm").set("구매요청자ID");
            obj.set_cssclass("readonly");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtSinglePopNm02", "absolute", "207", "68", "150", "23", null, null, this.divViewCompBody00);
            obj.set_taborder("17");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("구매요청자명");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnSinglePop02", "absolute", "333", "68", "24", "23", null, null, this.divViewCompBody00);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("구매요청자 검색 버튼");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtSinglePopId03", "absolute", "105", "100", "100", "23", null, null, this.divViewCompBody00);
            obj.set_taborder("19");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("objNm").set("구매요청자ID");
            obj.set_cssclass("readonly");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtSinglePopNm03", "absolute", "207", "100", "150", "23", null, null, this.divViewCompBody00);
            obj.set_taborder("20");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("구매요청자명");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnSinglePop03", "absolute", "333", "100", "24", "23", null, null, this.divViewCompBody00);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("구매요청자 검색 버튼");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtSinglePopId04", "absolute", "105", "132", "100", "23", null, null, this.divViewCompBody00);
            obj.set_taborder("22");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("objNm").set("구매요청자ID");
            obj.set_cssclass("readonly");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtSinglePopNm04", "absolute", "207", "132", "150", "23", null, null, this.divViewCompBody00);
            obj.set_taborder("23");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("구매요청자명");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnSinglePop04", "absolute", "333", "132", "24", "23", null, null, this.divViewCompBody00);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("구매요청자 검색 버튼");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtSinglePopId01", "absolute", "105", "36", "100", "23", null, null, this.divViewCompBody00);
            obj.set_taborder("25");
            obj.set_cssclass("readonly");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("objNm").set("구매요청자ID");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtSinglePopNm01", "absolute", "207", "36", "150", "23", null, null, this.divViewCompBody00);
            obj.set_taborder("26");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("구매요청자명");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnSinglePop01", "absolute", "333", "36", "24", "23", null, null, this.divViewCompBody00);
            obj.set_taborder("27");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("구매요청자 검색 버튼");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtSinglePopId00", "absolute", "105", "4", "100", "23", null, null, this.divViewCompBody00);
            obj.set_taborder("28");
            obj.set_cssclass("readonly");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("objNm").set("구매요청자ID");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtSinglePopNm00", "absolute", "207", "4", "150", "23", null, null, this.divViewCompBody00);
            obj.set_taborder("29");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("구매요청자명");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnSinglePop00", "absolute", "333", "4", "24", "23", null, null, this.divViewCompBody00);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("구매요청자 검색 버튼");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine05", "absolute", "0", "159", null, "33", "0", null, this.divViewCompBody00);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staSinglePop05", "absolute", "0", "159", "100", "33", null, null, this.divViewCompBody00);
            obj.set_taborder("31");
            obj.set_text("운영단위");
            obj.set_cssclass("sta_WF_Label");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtSinglePopId05", "absolute", "105", "164", "100", "23", null, null, this.divViewCompBody00);
            obj.set_taborder("36");
            obj.set_cssclass("readonly");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("objNm").set("구매요청자ID");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtSinglePopNm05", "absolute", "207", "164", "150", "23", null, null, this.divViewCompBody00);
            obj.set_taborder("37");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("구매요청자명");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnSinglePop05", "absolute", "333", "164", "24", "23", null, null, this.divViewCompBody00);
            obj.set_taborder("38");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("구매요청자 검색 버튼");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine13", "absolute", "0", "191", null, "33", "0", null, this.divViewCompBody00);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine14", "absolute", "0", "223", null, "33", "0", null, this.divViewCompBody00);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staSinglePop13", "absolute", "0", "191", "100", "33", null, null, this.divViewCompBody00);
            obj.set_taborder("65");
            obj.set_text("계약템플릿");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("TTL_TOT_AMT");
            obj.style.set_color("transparent");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staSinglePop14", "absolute", "0", "223", "100", "33", null, null, this.divViewCompBody00);
            obj.set_taborder("69");
            obj.set_text("스킨변경");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("TTL_TOT_AMT");
            obj.style.set_color("transparent");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine15", "absolute", "0", "255", null, "33", "0", null, this.divViewCompBody00);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staSinglePop15", "absolute", "0", "255", "100", "33", null, null, this.divViewCompBody00);
            obj.set_taborder("74");
            obj.set_text("관리자모드");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("TTL_TOT_AMT");
            obj.style.set_color("transparent");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine16", "absolute", "0", "287", null, "33", "0", null, this.divViewCompBody00);
            obj.set_taborder("78");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staSinglePop16", "absolute", "0", "287", "100", "33", null, null, this.divViewCompBody00);
            obj.set_taborder("80");
            obj.set_text("구매유형");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("TTL_TOT_AMT");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine17", "absolute", "0", "319", null, "33", "0", null, this.divViewCompBody00);
            obj.set_taborder("81");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staSinglePop17", "absolute", "0", "319", "100", "33", null, null, this.divViewCompBody00);
            obj.set_taborder("82");
            obj.set_text("계약유형");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("TTL_TOT_AMT");
            obj.style.set_color("transparent");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnCntrTmplt01", "absolute", "105", "197", "74", "21", null, null, this.divViewCompBody00);
            obj.set_taborder("33");
            obj.set_text("계약템플릿");
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("견적요청참조 버튼");
            obj.getSetter("lbcd").set("");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnCntrTmplt03", "absolute", "105", "261", "90", "21", null, null, this.divViewCompBody00);
            obj.set_taborder("49");
            obj.set_text("관리자모드변경");
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("견적요청참조 버튼");
            obj.getSetter("lbcd").set("");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnCntrTmplt04", "absolute", "105", "293", "74", "21", null, null, this.divViewCompBody00);
            obj.set_taborder("52");
            obj.set_text("구매유형");
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("견적요청참조 버튼");
            obj.getSetter("lbcd").set("");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnCntrTmplt05", "absolute", "105", "325", "74", "21", null, null, this.divViewCompBody00);
            obj.set_taborder("79");
            obj.set_text("계약유형");
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("견적요청참조 버튼");
            obj.getSetter("lbcd").set("");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnCntrTmplt02", "absolute", "105", "229", "74", "21", null, null, this.divViewCompBody00);
            obj.set_taborder("45");
            obj.set_text("스킨변경");
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("견적요청참조 버튼");
            obj.getSetter("lbcd").set("");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Div("divViewCompBody02", "absolute", "764", "23", "402", "109", null, null, this);
            obj.set_taborder("92");
            obj.set_cssclass("div_WF_DetailBg");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "-1", null, "33", "0", null, this.divViewCompBody02);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody02.addChild(obj.name, obj);
            obj = new Static("staViewPop01", "absolute", "0", "-1", "120", "33", null, null, this.divViewCompBody02);
            obj.set_taborder("3");
            obj.set_text("품목정보");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("TTL_TOT_AMT");
            obj.style.set_color("transparent");
            this.divViewCompBody02.addChild(obj.name, obj);
            obj = new Static("btnViewPop01", "absolute", "128", "5", "120", "23", null, null, this.divViewCompBody02);
            obj.set_taborder("13");
            obj.set_text("품목정보");
            obj.getSetter("lbcd").set("TTL_TOT_AMT");
            obj.style.set_color("blue");
            obj.style.set_cursor("hand");
            this.divViewCompBody02.addChild(obj.name, obj);
            obj = new Static("staViewCompLine07", "absolute", "0", "31", null, "33", "0", null, this.divViewCompBody02);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody02.addChild(obj.name, obj);
            obj = new Static("btnViewPop07", "absolute", "128", "37", "120", "23", null, null, this.divViewCompBody02);
            obj.set_taborder("27");
            obj.set_text("협력사정보");
            obj.style.set_color("blue");
            obj.style.set_cursor("hand");
            obj.getSetter("lbcd").set("TTL_TOT_AMT");
            this.divViewCompBody02.addChild(obj.name, obj);
            obj = new Static("staViewPop07", "absolute", "0", "31", "120", "33", null, null, this.divViewCompBody02);
            obj.set_taborder("28");
            obj.set_text("협력사정보");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("TTL_TOT_AMT");
            obj.style.set_color("transparent");
            this.divViewCompBody02.addChild(obj.name, obj);
            obj = new Static("staViewCompLine08", "absolute", "0", "63", null, "33", "0", null, this.divViewCompBody02);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody02.addChild(obj.name, obj);
            obj = new Static("staViewPop08", "absolute", "0", "63", "120", "33", null, null, this.divViewCompBody02);
            obj.set_taborder("30");
            obj.set_text("사용자정보");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("TTL_TOT_AMT");
            obj.style.set_color("transparent");
            this.divViewCompBody02.addChild(obj.name, obj);
            obj = new Static("btnViewPop08", "absolute", "128", "69", "120", "23", null, null, this.divViewCompBody02);
            obj.set_taborder("31");
            obj.set_text("사용자정보");
            obj.style.set_color("blue");
            obj.style.set_cursor("hand");
            obj.getSetter("lbcd").set("TTL_TOT_AMT");
            this.divViewCompBody02.addChild(obj.name, obj);

            obj = new Static("staViewCompTitle00", "absolute", "0", "0", "370", "23", null, null, this);
            obj.set_taborder("93");
            obj.set_text("싱글검색팝업");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("staViewCompTitle01", "absolute", "428", "0", "300", "23", null, null, this);
            obj.set_taborder("94");
            obj.set_text("멀티검색팝업");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("staViewCompTitle03", "absolute", "428", "210", "300", "23", null, null, this);
            obj.set_taborder("96");
            obj.set_text("입력팝업");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Div("divViewCompBody03", "absolute", "428", "233", "300", "265", null, null, this);
            obj.set_taborder("97");
            obj.set_cssclass("div_WF_DetailBg");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "-1", null, "33", "0", null, this.divViewCompBody03);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staInputPop00", "absolute", "0", "-1", "100", "33", null, null, this.divViewCompBody03);
            obj.set_taborder("50");
            obj.set_text("파일첨부");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("TTL_TOT_AMT");
            obj.style.set_color("transparent");
            this.divViewCompBody03.addChild(obj.name, obj);
            obj = new Button("btnInputPop00", "absolute", "105", "5", "98", "21", null, null, this.divViewCompBody03);
            obj.set_taborder("54");
            obj.set_text("파일첨부");
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("견적요청참조 버튼");
            obj.getSetter("lbcd").set("");
            this.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "31", null, "33", "0", null, this.divViewCompBody03);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staInputPop01", "absolute", "0", "31", "100", "33", null, null, this.divViewCompBody03);
            obj.set_taborder("56");
            obj.set_text("개인화설정");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("TTL_TOT_AMT");
            obj.style.set_color("transparent");
            this.divViewCompBody03.addChild(obj.name, obj);
            obj = new Button("btnInputPop01", "absolute", "105", "37", "98", "21", null, null, this.divViewCompBody03);
            obj.set_taborder("57");
            obj.set_text("개인화설정");
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("견적요청참조 버튼");
            obj.getSetter("lbcd").set("");
            this.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "63", null, "33", "0", null, this.divViewCompBody03);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staInputPop02", "absolute", "0", "63", "100", "33", null, null, this.divViewCompBody03);
            obj.set_taborder("59");
            obj.set_text("구매업무설정");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("TTL_TOT_AMT");
            obj.style.set_color("transparent");
            this.divViewCompBody03.addChild(obj.name, obj);
            obj = new Button("btnInputPop02", "absolute", "105", "69", "98", "21", null, null, this.divViewCompBody03);
            obj.set_taborder("60");
            obj.set_text("구매업무설정");
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("견적요청참조 버튼");
            obj.getSetter("lbcd").set("");
            this.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staViewCompLine03", "absolute", "0", "95", null, "33", "0", null, this.divViewCompBody03);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staInputPop03", "absolute", "0", "95", "100", "33", null, null, this.divViewCompBody03);
            obj.set_taborder("62");
            obj.set_text("신규상품등록");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("TTL_TOT_AMT");
            obj.style.set_color("transparent");
            this.divViewCompBody03.addChild(obj.name, obj);
            obj = new Button("btnInputPop03", "absolute", "105", "101", "98", "21", null, null, this.divViewCompBody03);
            obj.set_taborder("63");
            obj.set_text("신규상품등록");
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("견적요청참조 버튼");
            obj.getSetter("lbcd").set("");
            this.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staViewCompLine04", "absolute", "0", "127", null, "33", "0", null, this.divViewCompBody03);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staInputPop04", "absolute", "0", "127", "100", "33", null, null, this.divViewCompBody03);
            obj.set_taborder("65");
            obj.set_text("비밀번호변경");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("TTL_TOT_AMT");
            obj.style.set_color("transparent");
            this.divViewCompBody03.addChild(obj.name, obj);
            obj = new Button("btnInputPop04", "absolute", "105", "133", "98", "21", null, null, this.divViewCompBody03);
            obj.set_taborder("66");
            obj.set_text("비밀번호변경");
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("견적요청참조 버튼");
            obj.getSetter("lbcd").set("");
            this.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staViewCompLine05", "absolute", "0", "159", null, "33", "0", null, this.divViewCompBody03);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staInputPop05", "absolute", "0", "159", "100", "33", null, null, this.divViewCompBody03);
            obj.set_taborder("68");
            obj.set_text("ID/비밀번호");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("TTL_TOT_AMT");
            obj.style.set_color("transparent");
            this.divViewCompBody03.addChild(obj.name, obj);
            obj = new Button("btnInputPop05", "absolute", "105", "165", "98", "21", null, null, this.divViewCompBody03);
            obj.set_taborder("69");
            obj.set_text("ID/비밀번호찾기");
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("견적요청참조 버튼");
            obj.getSetter("lbcd").set("");
            this.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staViewCompLine06", "absolute", "0", "191", null, "33", "0", null, this.divViewCompBody03);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staInputPop06", "absolute", "0", "191", "100", "33", null, null, this.divViewCompBody03);
            obj.set_taborder("71");
            obj.set_text("멀티입력");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("TTL_TOT_AMT");
            obj.style.set_color("transparent");
            this.divViewCompBody03.addChild(obj.name, obj);
            obj = new Button("btnInputPop06", "absolute", "105", "197", "98", "21", null, null, this.divViewCompBody03);
            obj.set_taborder("72");
            obj.set_text("멀티입력");
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("견적요청참조 버튼");
            obj.getSetter("lbcd").set("");
            this.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staViewCompLine07", "absolute", "0", "223", null, "33", "0", null, this.divViewCompBody03);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody03.addChild(obj.name, obj);
            obj = new Static("staInputPop07", "absolute", "0", "223", "100", "33", null, null, this.divViewCompBody03);
            obj.set_taborder("74");
            obj.set_text("그리드붙이기");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("TTL_TOT_AMT");
            obj.style.set_color("transparent");
            this.divViewCompBody03.addChild(obj.name, obj);
            obj = new Button("btnInputPop07", "absolute", "105", "229", "98", "21", null, null, this.divViewCompBody03);
            obj.set_taborder("75");
            obj.set_text("그리드붙여넣기");
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("견적요청참조 버튼");
            obj.getSetter("lbcd").set("");
            this.divViewCompBody03.addChild(obj.name, obj);

            obj = new Static("staViewCompTitle02", "absolute", "764", "0", "370", "23", null, null, this);
            obj.set_taborder("98");
            obj.set_text("상세팝업");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 300, 169, this.divViewCompBody01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("95");
            		p.set_cssclass("div_WF_DetailBg");

            	}
            );
            this.divViewCompBody01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 370, 369, this.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.set_cssclass("div_WF_DetailBg");

            	}
            );
            this.divViewCompBody00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 402, 109, this.divViewCompBody02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("92");
            		p.set_cssclass("div_WF_DetailBg");

            	}
            );
            this.divViewCompBody02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 300, 265, this.divViewCompBody03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("97");
            		p.set_cssclass("div_WF_DetailBg");

            	}
            );
            this.divViewCompBody03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1200, 769, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("frmSearchCond");
            		p.set_titletext("공통팝업모음");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","divViewCompBody00.edtSinglePopNm04","value","dsCondition","MTRL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divViewCompBody00.edtSinglePopId04","value","dsCondition","MTRL_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divViewCompBody01.edtMultyPopNm01","value","dsCondition","MTRL_NM_M");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","divViewCompBody00.edtSinglePopNm01","value","dsCondition","SL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","divViewCompBody00.edtSinglePopId01","value","dsCondition","STR_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","divViewCompBody00.edtSinglePopNm00","value","dsCondition","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","divViewCompBody00.edtSinglePopId00","value","dsCondition","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","divViewCompBody00.edtSinglePopNm02","value","dsCondition","PTNR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","divViewCompBody00.edtSinglePopId02","value","dsCondition","PTNR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","divViewCompBody00.edtSinglePopId03","value","dsCondition","ACNT_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","divViewCompBody00.edtSinglePopNm03","value","dsCondition","ACNT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","divViewCompBody00.edtSinglePopId05","value","dsCondition","BRANCH_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","divViewCompBody00.edtSinglePopNm05","value","dsCondition","BRANCH_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("BundlePop.xfdl", function(exports) {
        /**
           @file       Popup.xfdl
           @desc       팝업샘플
           @author     김민성
           @makedate   2019.04.29
           @history    
        */

        this.fnFormOnload = function(obj,e)
        {
        	gfnSetObj("A");
        }

        /**
          * @함수명	: fnSrchUserSingle
          * @desc     	: 담당자검색(싱글)
          */
        this.fnSrchUserSingle = function(obj,e)
        {
        	var sArg = {
        		agv_id: ""
        		,agv_nm: this.dsCondition.getColumn(0,"USER_NM")
        	};
        	gfnSearchComUser(this, "BUserSrchPopup", "fnPopCallBack", sArg);
        }

        /**
          * @함수명	: fnSrchSlSingle
          * @desc     	: 부서검색(싱글)
          */
        this.fnSrchSlSingle = function(obj,e)
        {
        	var sArg = {
        		agv_id: ""
        		,agv_nm: this.dsCondition.getColumn(0,"SL_NM")
        	};
        	gfnSearchComSl(this, "BSlSrchPopup", "fnPopCallBack", sArg);
        }

        /**
          * @함수명	: fnSrchPtnrSingle
          * @desc     	: 협력사검색(싱글)
          */
        this.fnSrchPtnrSingle = function(obj,e)
        {
        	var sArg = {
        		agv_id: ""
        		,agv_nm: this.dsCondition.getColumn(0,"PTNR_NM")
        	};
        	gfnSearchComPtnr(this, "BPtnrSrchPopup", "fnPopCallBack", sArg);
        }

        /**
          * @함수명	: fnSrchAcntSingle
          * @desc     	: 계정검색(싱글)
          */
        this.fnSrchAcntSingle = function(obj,e)
        {
        	var sArg = {
        		agv_id: ""
        		,agv_nm: this.dsCondition.getColumn(0,"ACNT_NM")
        	};
        	gfnSearchComAcnt(this, "BAcntSrchPopup", "fnPopCallBack", sArg);
        }

        /**
          * @함수명	: fnSearchItem
          * @desc     	: 품목검색(싱글)
          */
        this.fnSearchItem = function(obj,e)
        {
        	var sArg = {
        		agv_id: ""
        		,agv_nm: this.dsCondition.getColumn(0,"MTRL_NM")
        	};
        	gfnSearchComMtrl(this, "BMtrlSrchPopup", "fnPopCallBack", sArg,"N");
        }

        /**
          * @함수명	: fnSrchPorgSingle
          * @desc     	: 운영단위검색(싱글)
          */
        this.fnSrchPorgSingle = function(obj,e)
        {
        	var sArg = {
        		agv_id: ""
        		,agv_nm: this.dsCondition.getColumn(0,"BRANCH_NM")
        	};
        	gfnSearchComPorg(this, "BPorgSrchPopup", "fnPopCallBack", sArg);
        }

        /**
          * @함수명	: fnSearchMultyItem
          * @desc     	: 품목검색(멀티)
          */
        this.fnSearchMultyItem = function(obj,e)
        {
        	var sArg = {
        		agv_id: ""
        		,agv_nm: ""
        	};
        	gfnSearchComMtrl(this, "BMtrlSrchMultyPopup", "fnPopCallBack", sArg,"Y");
        }

        /**
          * @함수명	: fnSearchPrItem
          * @desc     	: 품목검색(구매요청)
          */
        this.fnSearchPrItem = function(obj,e)
        {
        	var sArg = {
        		agv_id: ""
        		,agv_nm: this.dsCondition.getColumn(0,"MTRL_NM_M")
        	};
        	gfnSearchComMtrl(this, "BMtrlPrSrchMultiPopup", "fnPopCallBack", sArg,"PR");
        }

        /**
          * @함수명	: fnNewMtrlReg
          * @desc     	: 신규상품등록
          */
        this.fnNewMtrlReg = function(obj,e)
        {
        }

        /**
          * @함수명	: fnSelectPurType
          * @desc     	: 구매유형
          */
        this.fnSelectPurType = function(obj,e)
        {
        	var sArg = { 
        					agv_id:""
        			   };
        	gfnModalPop(this, "BPurTypePop", "CPOP::BPurTypePop.xfdl", sArg, "fnPopCallBack", 700, 500);
        }

        /**
        	@function	fnPopCallBack()
        	@desc   	팝업 CallBack 함수
        */
        this.fnPopCallBack = function(sPopupId,rtn)
        {
        	this.dsReturn.clear();
        	this.dsReturn.loadXML(rtn);
        	
        	switch(sPopupId){
        		case "BUserSrchPopup" :
        			this.dsCondition.setColumn(0,"USER_ID",this.dsReturn.getColumn(0,"USER_ID"));
        			this.dsCondition.setColumn(0,"USER_NM",this.dsReturn.getColumn(0,"USER_NM"));
        			break;
        		case "BSlSrchPopup" :
        			this.dsCondition.setColumn(0,"STR_CD",this.dsReturn.getColumn(0,"STR_CD"));
        			this.dsCondition.setColumn(0,"SL_NM",this.dsReturn.getColumn(0,"SL_NM"));
        			break;
        		case "BPtnrSrchPopup" :
        			this.dsCondition.setColumn(0,"PTNR_ID",this.dsReturn.getColumn(0,"PTNR_ID"));
        			this.dsCondition.setColumn(0,"PTNR_NM",this.dsReturn.getColumn(0,"PTNR_NM"));
        			break;
        		case "BAcntSrchPopup" :
        			this.dsCondition.setColumn(0,"ACNT_CD",this.dsReturn.getColumn(0,"ACNT_CD"));
        			this.dsCondition.setColumn(0,"ACNT_NM",this.dsReturn.getColumn(0,"ACNT_NM"));
        			break;
        		case "BMtrlSrchPopup" :
        			this.dsCondition.setColumn(0,"MTRL_CD",this.dsReturn.getColumn(0,"MTRL_CD"));
        			this.dsCondition.setColumn(0,"MTRL_NM",this.dsReturn.getColumn(0,"MTRL_NM2"));
        			break;
        		case "BPorgSrchPopup" :
        			this.dsCondition.setColumn(0,"BRANCH_CD",this.dsReturn.getColumn(0,"BRANCH_CD"));
        			this.dsCondition.setColumn(0,"BRANCH_NM",this.dsReturn.getColumn(0,"BRANCH_NM"));
        			break;
        		case "BPurTypePop" :
        			trace(this.dsReturn.saveXML());
        			break;
        		case "BMtrlPrSrchMultiPopup" :
        			trace(this.dsReturn.saveXML());
        			break;	
        		default:
        			break;	
        	}
        }

        /**
          * @함수명	: fnOnkeyup
          * @desc     	: Key Up 이벤트
          */
        this.fnOnkeyup = function(obj,e)
        {
        	if(e.keycode==13){
        		obj.updateToDataset();
        		
        		// 품목검색멀티팝업(PR)
        		if(obj.name=="edtMultyPopNm01"){
        			this.fnSearchPrItem();
        		
        		// 담당자검색 싱글팝업
        		}else if(obj.name=="edtSinglePopNm00"){
        			this.fnSrchUserSingle();
        		
        		// 창고검색 싱글팝업
        		}else if(obj.name=="edtSinglePopNm01"){
        			this.fnSrchSlSingle();
        		
        		// 협력사검색 싱글팝업
        		}else if(obj.name=="edtSinglePopNm02"){
        			this.fnSrchPtnrSingle();
        		
        		// 계정검색 싱글팝업
        		}else if(obj.name=="edtSinglePopNm03"){
        			this.fnSrchAcntSingle();
        		
        		// 계정검색 싱글팝업
        		}else if(obj.name=="edtSinglePopNm04"){
        			this.fnSearchItem();
        		
        		// 운영단위검색 싱글팝업
        		}else if(obj.name=="edtSinglePopNm05"){
        			this.fnSrchPorgSingle();
        			
        		}
        	}
        }

        /**
          * @함수명	: fnOnTextChanged
          * @desc     	: 텍스트 변환 이벤트
          */
        this.fnOnTextChanged = function(obj,e)
        {
        	if(obj.name=="edtSinglePopNm00"){
        		this.dsCondition.setColumn(0,"USER_ID","");
        	}else if(obj.name=="edtSinglePopNm01"){
        		this.dsCondition.setColumn(0,"STR_CD","");
        	}else if(obj.name=="edtSinglePopNm02"){
        		this.dsCondition.setColumn(0,"PTNR_ID","");
        	}else if(obj.name=="edtSinglePopNm03"){
        		this.dsCondition.setColumn(0,"ACNT_CD","");
        	}else if(obj.name=="edtSinglePopNm04"){
        		this.dsCondition.setColumn(0,"MTRL_CD","");
        	}else if(obj.name=="edtSinglePopNm05"){
        		this.dsCondition.setColumn(0,"BRANCH_CD","");
        	}
        }
         
        this.divViewCompBody02_btnViewPop01_onclick = function(obj,e)
        {
        	//var sArg = { agv_id : this.dsList.getColumn(e.row, "MTRL_CD")};
        	var sArg = { agv_id : "100000948"};
        	gfnModalPop(this, "readMtrlInfo", "CPOP::BMtrlInfoPopup.xfdl", sArg, "fnPopCallBack", 800, 500);
        }

        this.divViewCompBody02_btnViewPop07_onclick = function(obj,e)
        {
        		var sArg = { agv_id : "1078626829"
        				};
        	gfnModalPop(this, "CtnrPtnrInfo", "CPOP::BPtnrInfoPopup.xfdl", sArg, "fnPopCallBack", 550, 500);
        }

        this.divViewCompBody02_btnViewPop08_onclick = function(obj,e)
        {
        	var sArg = { agv_id : "B_SMAN"		};
        	gfnModalPop(this, "CtnrUserInfo", "CPOP::BUserInfoPopup.xfdl", sArg, "fnPopCallBack", 550, 230);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.divViewCompBody01.btnMultyPop02.addEventHandler("onclick", this.fnSearchMultyItem, this);
            this.divViewCompBody01.edtMultyPopNm01.addEventHandler("onkeyup", this.fnOnkeyup, this);
            this.divViewCompBody01.edtMultyPopNm01.addEventHandler("ontextchanged", this.fnOnTextChanged, this);
            this.divViewCompBody01.btnSinglePop01.addEventHandler("onclick", this.fnSearchPrItem, this);
            this.divViewCompBody00.edtSinglePopNm02.addEventHandler("onkeydown", this.fnOnkeyup, this);
            this.divViewCompBody00.edtSinglePopNm02.addEventHandler("ontextchanged", this.fnOnTextChanged, this);
            this.divViewCompBody00.btnSinglePop02.addEventHandler("onclick", this.fnSrchPtnrSingle, this);
            this.divViewCompBody00.edtSinglePopNm03.addEventHandler("onkeyup", this.fnOnkeyup, this);
            this.divViewCompBody00.edtSinglePopNm03.addEventHandler("ontextchanged", this.fnOnTextChanged, this);
            this.divViewCompBody00.btnSinglePop03.addEventHandler("onclick", this.fnSrchAcntSingle, this);
            this.divViewCompBody00.edtSinglePopNm04.addEventHandler("onkeyup", this.fnOnkeyup, this);
            this.divViewCompBody00.edtSinglePopNm04.addEventHandler("ontextchanged", this.fnOnTextChanged, this);
            this.divViewCompBody00.btnSinglePop04.addEventHandler("onclick", this.fnSearchItem, this);
            this.divViewCompBody00.edtSinglePopNm01.addEventHandler("onkeydown", this.fnOnkeyup, this);
            this.divViewCompBody00.edtSinglePopNm01.addEventHandler("ontextchanged", this.fnOnTextChanged, this);
            this.divViewCompBody00.btnSinglePop01.addEventHandler("onclick", this.fnSrchSlSingle, this);
            this.divViewCompBody00.edtSinglePopNm00.addEventHandler("onkeydown", this.fnOnkeyup, this);
            this.divViewCompBody00.edtSinglePopNm00.addEventHandler("ontextchanged", this.fnOnTextChanged, this);
            this.divViewCompBody00.btnSinglePop00.addEventHandler("onclick", this.fnSrchUserSingle, this);
            this.divViewCompBody00.edtSinglePopNm05.addEventHandler("onkeyup", this.fnOnkeyup, this);
            this.divViewCompBody00.edtSinglePopNm05.addEventHandler("ontextchanged", this.fnOnTextChanged, this);
            this.divViewCompBody00.btnSinglePop05.addEventHandler("onclick", this.fnSrchPorgSingle, this);
            this.divViewCompBody00.btnCntrTmplt04.addEventHandler("onclick", this.fnSelectPurType, this);
            this.divViewCompBody02.btnViewPop01.addEventHandler("onclick", this.divViewCompBody02_btnViewPop01_onclick, this);
            this.divViewCompBody02.btnViewPop07.addEventHandler("onclick", this.divViewCompBody02_btnViewPop07_onclick, this);
            this.divViewCompBody02.btnViewPop08.addEventHandler("onclick", this.divViewCompBody02_btnViewPop08_onclick, this);
            this.divViewCompBody03.btnInputPop03.addEventHandler("onclick", this.fnNewMtrlReg, this);

        };

        this.loadIncludeScript("BundlePop.xfdl", true);

       
    };
}
)();
