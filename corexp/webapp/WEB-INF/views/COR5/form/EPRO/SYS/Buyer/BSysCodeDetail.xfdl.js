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
                this.set_name("BSysCodeDetail");
                this.set_titletext("코드관리");
                this._setFormPosition(0,0,1200,769);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGrp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCls", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAllCd", this);
            obj._setContents("<ColumnInfo><Column id=\"GUBUN\" size=\"256\" type=\"STRING\"/><Column id=\"CD_GRP\" size=\"256\" type=\"STRING\"/><Column id=\"CD_CLS\" size=\"256\" type=\"STRING\"/><Column id=\"CD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_btn", "absolute", "1340", "-5", null, "34", "-319", null, this);
            obj.getSetter("objNm").set("컨트롤 박스");
            obj.set_taborder("83");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Button("btn_systemApply", "absolute", null, "5", "92", "24", "10", null, this.div_btn);
            obj.set_cssclass("btn_WF_Com_R");
            obj.getSetter("objNm").set("메뉴삭제");
            obj.set_taborder("3");
            obj.set_text("시스템적용");
            this.div_btn.addChild(obj.name, obj);

            obj = new Div("divViewCompBody00", "absolute", "0%", "0", "48%", "261", null, null, this);
            obj.set_taborder("84");
            this.addChild(obj.name, obj);
            obj = new Grid("grdGrp", "absolute", "0%", "35", null, null, "60.07%", "0", this.divViewCompBody00);
            obj.set_autofittype("col");
            obj.set_binddataset("dsGrp");
            obj.set_taborder("7");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"152\"/></Columns><Rows><Row band=\"head\" size=\"27\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"그룹\"/><Cell col=\"1\" expr=\"\" text=\"코드명\"/></Band><Band id=\"body\"><Cell text=\"bind:CD_GRP\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:CD_NM_LO\"/></Band></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnGrpDel", "absolute", null, "10", "50", "21", "53", null, this.divViewCompBody00);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("코드그룹삭제버튼");
            obj.set_taborder("8");
            obj.set_text("삭제");
            obj.set_visible("true");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnGrpSave", "absolute", null, "10", "50", "21", "0", null, this.divViewCompBody00);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("코드그룹삭제버튼");
            obj.set_taborder("9");
            obj.set_text("저장");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "11", "254", "23", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("10");
            obj.set_text("코드그룹");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Div("divViewCompBody00", "absolute", "43.4%", "35", null, "226", "0%", null, this.divViewCompBody00);
            obj.set_cssclass("div_WF_DetailBg");
            obj.set_taborder("11");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "-1", null, "33", "0", null, this.divViewCompBody00.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("50");
            this.divViewCompBody00.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "31", null, "33", "0", null, this.divViewCompBody00.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("51");
            this.divViewCompBody00.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "63", null, "33", "0", null, this.divViewCompBody00.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("52");
            this.divViewCompBody00.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine04", "absolute", "0", "95", null, "33", "0", null, this.divViewCompBody00.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("53");
            this.divViewCompBody00.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine05", "absolute", "0", "127", null, "33", "0", null, this.divViewCompBody00.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("54");
            this.divViewCompBody00.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine06", "absolute", "0", "159", null, "33", "0", null, this.divViewCompBody00.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("55");
            this.divViewCompBody00.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine07", "absolute", "0", "191", null, "33", "0", null, this.divViewCompBody00.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("56");
            this.divViewCompBody00.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staCdId", "absolute", "0", "-1", "79", "33", null, null, this.divViewCompBody00.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("코드");
            obj.set_taborder("57");
            obj.set_text("코드");
            obj.set_usedecorate("true");
            this.divViewCompBody00.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtCdId", "absolute", "84", "4", "75", "23", null, null, this.divViewCompBody00.divViewCompBody00);
            obj.set_cssclass("readonly_P");
            obj.getSetter("lbcd").set("");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("코드");
            obj.set_readonly("true");
            obj.set_taborder("58");
            this.divViewCompBody00.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staCdNm", "absolute", "0", "63", "79", "33", null, null, this.divViewCompBody00.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("코드명한글");
            obj.set_taborder("59");
            obj.set_text("코드명(한)");
            obj.set_usedecorate("true");
            this.divViewCompBody00.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staCdGrp", "absolute", "0", "31", "79", "33", null, null, this.divViewCompBody00.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("그룹");
            obj.set_taborder("60");
            obj.set_text("그룹");
            obj.set_usedecorate("true");
            this.divViewCompBody00.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtCdGrp", "absolute", "84", "36", "75", "23", null, null, this.divViewCompBody00.divViewCompBody00);
            obj.getSetter("lbcd").set("");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("2");
            obj.getSetter("objNm").set("그룹");
            obj.set_taborder("61");
            this.divViewCompBody00.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staCdNmEn", "absolute", "0", "95", "79", "33", null, null, this.divViewCompBody00.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("코드명영문");
            obj.set_taborder("62");
            obj.set_text("코드명(영)");
            obj.set_usedecorate("true");
            this.divViewCompBody00.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staCdDesc", "absolute", "0", "127", "79", "33", null, null, this.divViewCompBody00.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("코드설명");
            obj.set_taborder("63");
            obj.set_text("코드설명");
            obj.set_usedecorate("true");
            this.divViewCompBody00.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staAltUse", "absolute", "0", "159", "79", "33", null, null, this.divViewCompBody00.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("사용여부");
            obj.set_taborder("64");
            obj.set_text("사용여부");
            obj.set_usedecorate("true");
            this.divViewCompBody00.divViewCompBody00.addChild(obj.name, obj);
            obj = new Radio("rdAltUse", "absolute", "84", "164", "180", "23", null, null, this.divViewCompBody00.divViewCompBody00);
            this.divViewCompBody00.divViewCompBody00.addChild(obj.name, obj);
            var rdAltUse_innerdataset = new Dataset("rdAltUse_innerdataset", this.divViewCompBody00.divViewCompBody00.rdAltUse);
            rdAltUse_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(rdAltUse_innerdataset);
            obj.set_codecolumn("codecolumn");
            obj.set_columncount("-1");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.getSetter("objNm").set("사용여부");
            obj.set_rowcount("-1");
            obj.style.set_textpadding("0 20 0 6");
            obj.style.set_padding("0 0 0 0");
            obj.set_taborder("65");
            obj.set_value("0");
            obj = new Static("staOrder", "absolute", "0", "191", "79", "33", null, null, this.divViewCompBody00.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("정렬순서");
            obj.set_taborder("66");
            obj.set_text("정렬순서");
            obj.set_usedecorate("true");
            this.divViewCompBody00.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staCdClass", "absolute", "164", "31", "79", "33", null, null, this.divViewCompBody00.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("클래스");
            obj.set_taborder("67");
            obj.set_text("클래스");
            obj.set_usedecorate("true");
            this.divViewCompBody00.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtCdClass", "absolute", "248", "36", "75", "23", null, null, this.divViewCompBody00.divViewCompBody00);
            obj.set_cssclass("readonly_P");
            obj.getSetter("lbcd").set("");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("클래스");
            obj.set_readonly("true");
            obj.set_taborder("68");
            this.divViewCompBody00.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtCdNm", "absolute", "84", "68", "236", "23", null, null, this.divViewCompBody00.divViewCompBody00);
            obj.getSetter("lbcd").set("");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("코드명한글");
            obj.set_taborder("69");
            this.divViewCompBody00.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtCdNmEn", "absolute", "84", "100", "236", "23", null, null, this.divViewCompBody00.divViewCompBody00);
            obj.getSetter("lbcd").set("");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("코드명영문");
            obj.set_taborder("70");
            this.divViewCompBody00.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtCdDesc", "absolute", "84", "132", "236", "23", null, null, this.divViewCompBody00.divViewCompBody00);
            obj.getSetter("lbcd").set("");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("코드설명");
            obj.set_taborder("71");
            this.divViewCompBody00.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtOrder", "absolute", "84", "196", "236", "23", null, null, this.divViewCompBody00.divViewCompBody00);
            obj.set_inputtype("number");
            obj.getSetter("lbcd").set("");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("정렬순서");
            obj.set_taborder("72");
            this.divViewCompBody00.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnGrpAdd", "absolute", null, "10", "50", "21", "106", null, this.divViewCompBody00);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("코드그룹추가버튼");
            obj.set_taborder("12");
            obj.set_text("추가");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Div("divViewCompBody01", "absolute", "49.67%", "0", null, "261", "2.08%", null, this);
            obj.set_taborder("85");
            this.addChild(obj.name, obj);
            obj = new Grid("grdCls", "absolute", "0%", "35", null, null, "59.76%", "0", this.divViewCompBody01);
            obj.set_autofittype("col");
            obj.set_binddataset("dsCls");
            obj.set_taborder("7");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"152\"/></Columns><Rows><Row band=\"head\" size=\"27\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"클래스\"/><Cell col=\"1\" expr=\"\" text=\"코드명\"/></Band><Band id=\"body\"><Cell text=\"bind:CD_CLS\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:CD_NM_LO\"/></Band></Format></Formats>");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Button("btnClsDel", "absolute", null, "10", "50", "21", "53", null, this.divViewCompBody01);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("코드그룹삭제버튼");
            obj.set_taborder("8");
            obj.set_text("삭제");
            obj.set_visible("true");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Button("btnClsSave", "absolute", null, "10", "50", "21", "0", null, this.divViewCompBody01);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("코드그룹삭제버튼");
            obj.set_taborder("9");
            obj.set_text("저장");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "11", "254", "23", null, null, this.divViewCompBody01);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("11");
            obj.set_text("코드클래스");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Button("btnClsAdd", "absolute", null, "10", "50", "21", "106", null, this.divViewCompBody01);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("코드그룹추가버튼");
            obj.set_taborder("12");
            obj.set_text("추가");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Div("divViewCompBody00", "absolute", "43.35%", "35", null, "226", "0%", null, this.divViewCompBody01);
            obj.set_cssclass("div_WF_DetailBg");
            obj.set_taborder("13");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "-1", null, "33", "0", null, this.divViewCompBody01.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("73");
            this.divViewCompBody01.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "31", null, "33", "0", null, this.divViewCompBody01.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("74");
            this.divViewCompBody01.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "63", null, "33", "0", null, this.divViewCompBody01.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("75");
            this.divViewCompBody01.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine04", "absolute", "0", "95", null, "33", "0", null, this.divViewCompBody01.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("76");
            this.divViewCompBody01.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine05", "absolute", "0", "127", null, "33", "0", null, this.divViewCompBody01.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("77");
            this.divViewCompBody01.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine06", "absolute", "0", "159", null, "33", "0", null, this.divViewCompBody01.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("78");
            this.divViewCompBody01.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine07", "absolute", "0", "191", null, "33", "0", null, this.divViewCompBody01.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("79");
            this.divViewCompBody01.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staCdId", "absolute", "0", "-1", "79", "33", null, null, this.divViewCompBody01.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("코드");
            obj.set_taborder("80");
            obj.set_text("코드");
            obj.set_usedecorate("true");
            this.divViewCompBody01.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtCdId", "absolute", "84", "4", "75", "23", null, null, this.divViewCompBody01.divViewCompBody00);
            obj.set_cssclass("readonly_P");
            obj.getSetter("lbcd").set("");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("코드");
            obj.set_readonly("true");
            obj.set_taborder("81");
            this.divViewCompBody01.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staCdNm", "absolute", "0", "63", "79", "33", null, null, this.divViewCompBody01.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("코드명한글");
            obj.set_taborder("82");
            obj.set_text("코드명(한)");
            obj.set_usedecorate("true");
            this.divViewCompBody01.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staCdGrp", "absolute", "0", "31", "79", "33", null, null, this.divViewCompBody01.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("그룹");
            obj.set_taborder("83");
            obj.set_text("그룹");
            obj.set_usedecorate("true");
            this.divViewCompBody01.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staCdNmEn", "absolute", "0", "95", "79", "33", null, null, this.divViewCompBody01.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("코드명영문");
            obj.set_taborder("85");
            obj.set_text("코드명(영)");
            obj.set_usedecorate("true");
            this.divViewCompBody01.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staCdDesc", "absolute", "0", "127", "79", "33", null, null, this.divViewCompBody01.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("코드설명");
            obj.set_taborder("86");
            obj.set_text("코드설명");
            obj.set_usedecorate("true");
            this.divViewCompBody01.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staAltUse", "absolute", "0", "159", "79", "33", null, null, this.divViewCompBody01.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("사용여부");
            obj.set_taborder("87");
            obj.set_text("사용여부");
            obj.set_usedecorate("true");
            this.divViewCompBody01.divViewCompBody00.addChild(obj.name, obj);
            obj = new Radio("rdAltUse", "absolute", "84", "164", "180", "23", null, null, this.divViewCompBody01.divViewCompBody00);
            this.divViewCompBody01.divViewCompBody00.addChild(obj.name, obj);
            var rdAltUse_innerdataset = new Dataset("rdAltUse_innerdataset", this.divViewCompBody01.divViewCompBody00.rdAltUse);
            rdAltUse_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(rdAltUse_innerdataset);
            obj.set_codecolumn("codecolumn");
            obj.set_columncount("-1");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.getSetter("objNm").set("사용여부");
            obj.set_rowcount("-1");
            obj.style.set_textpadding("0 20 0 6");
            obj.style.set_padding("0 0 0 0");
            obj.set_taborder("88");
            obj.set_value("0");
            obj = new Static("staOrder", "absolute", "0", "191", "79", "33", null, null, this.divViewCompBody01.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("정렬순서");
            obj.set_taborder("89");
            obj.set_text("정렬순서");
            obj.set_usedecorate("true");
            this.divViewCompBody01.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staCdClass", "absolute", "164", "31", "79", "33", null, null, this.divViewCompBody01.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("클래스");
            obj.set_taborder("90");
            obj.set_text("클래스");
            obj.set_usedecorate("true");
            this.divViewCompBody01.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtCdClass", "absolute", "248", "36", "75", "23", null, null, this.divViewCompBody01.divViewCompBody00);
            obj.getSetter("lbcd").set("");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("클래스");
            obj.set_taborder("91");
            this.divViewCompBody01.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtCdNm", "absolute", "84", "68", "236", "23", null, null, this.divViewCompBody01.divViewCompBody00);
            obj.getSetter("lbcd").set("");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("코드명한글");
            obj.set_taborder("92");
            this.divViewCompBody01.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtCdNmEn", "absolute", "84", "100", "236", "23", null, null, this.divViewCompBody01.divViewCompBody00);
            obj.getSetter("lbcd").set("");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("코드명영문");
            obj.set_taborder("93");
            this.divViewCompBody01.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtCdDesc", "absolute", "84", "132", "236", "23", null, null, this.divViewCompBody01.divViewCompBody00);
            obj.getSetter("lbcd").set("");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("코드설명");
            obj.set_taborder("94");
            this.divViewCompBody01.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtOrder", "absolute", "84", "196", "236", "23", null, null, this.divViewCompBody01.divViewCompBody00);
            obj.set_inputtype("number");
            obj.getSetter("lbcd").set("");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("정렬순서");
            obj.set_taborder("95");
            this.divViewCompBody01.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtCdGrp", "absolute", "84", "36", "75", "23", null, null, this.divViewCompBody01.divViewCompBody00);
            obj.set_enable("false");
            obj.getSetter("lbcd").set("");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("2");
            obj.getSetter("objNm").set("그룹");
            obj.set_taborder("97");
            this.divViewCompBody01.divViewCompBody00.addChild(obj.name, obj);

            obj = new Div("divViewCompBody02", "absolute", "0", "261", null, null, "25", "0", this);
            obj.set_taborder("86");
            this.addChild(obj.name, obj);
            obj = new Grid("grdCd", "absolute", "0", "35", null, null, "0", "29", this.divViewCompBody02);
            obj.set_autoenter("select");
            obj.set_binddataset("dsCd");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj.getSetter("objNm").set("품목 그리드");
            obj.set_selectscrollmode("scroll");
            obj.set_taborder("11");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column band=\"left\" size=\"31\"/><Column size=\"63\"/><Column size=\"64\"/><Column size=\"61\"/><Column size=\"67\"/><Column size=\"65\"/><Column size=\"172\"/><Column size=\"147\"/><Column size=\"166\"/><Column size=\"80\"/><Column size=\"83\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row band=\"head\" size=\"27\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" expr=\"\" text=\"그룹\"/><Cell col=\"2\" expr=\"\" text=\"클래스\"/><Cell col=\"3\" expr=\"\" text=\"코드\"/><Cell col=\"4\" expr=\"\" text=\"KEY\"/><Cell col=\"5\" expr=\"\" text=\"상위코드\"/><Cell col=\"6\" expr=\"\" text=\"코드명_한글\"/><Cell col=\"7\" cssclass=\"Cellgrd_edit\" expr=\"\" text=\"코드명_영문\"/><Cell col=\"8\" cssclass=\"Cellgrd_edit\" expr=\"\" text=\"코드설명\"/><Cell col=\"9\" cssclass=\"Cellgrd_edit\" expr=\"\" text=\"사용여부\"/><Cell col=\"10\" cssclass=\"Cellgrd_edit\" expr=\"\" text=\"정렬순서\"/><Cell col=\"11\" cssclass=\"Cellgrd_edit\" expr=\"\" text=\"설정1(숫자)\"/><Cell col=\"12\" cssclass=\"Cellgrd_edit\" expr=\"\" text=\"설정2(숫자)\"/><Cell col=\"13\" cssclass=\"Cellgrd_edit\" expr=\"\" text=\"설정3(숫자)\"/><Cell col=\"14\" cssclass=\"Cellgrd_edit\" expr=\"\" text=\"설정4(숫자)\"/><Cell col=\"15\" cssclass=\"Cellgrd_edit\" expr=\"\" text=\"설정5(숫자)\"/><Cell col=\"16\" cssclass=\"Cellgrd_edit\" expr=\"\" text=\"설정6(숫자)\"/><Cell col=\"17\" cssclass=\"Cellgrd_edit\" expr=\"\" text=\"설정7(숫자)\"/><Cell col=\"18\" cssclass=\"Cellgrd_edit\" expr=\"\" text=\"설정8(숫자)\"/><Cell col=\"19\" cssclass=\"Cellgrd_edit\" expr=\"\" text=\"설정1(문자)\"/><Cell col=\"20\" cssclass=\"Cellgrd_edit\" expr=\"\" text=\"설정2(문자)\"/><Cell col=\"21\" cssclass=\"Cellgrd_edit\" expr=\"\" text=\"설정3(문자)\"/><Cell col=\"22\" cssclass=\"Cellgrd_edit\" expr=\"\" text=\"설정4(문자)\"/><Cell col=\"23\" cssclass=\"Cellgrd_edit\" expr=\"\" text=\"설정5(문자)\"/><Cell col=\"24\" cssclass=\"Cellgrd_edit\" expr=\"\" text=\"설정6(문자)\"/><Cell col=\"25\" cssclass=\"Cellgrd_edit\" expr=\"\" text=\"설정7(문자)\"/><Cell col=\"26\" cssclass=\"Cellgrd_edit\" expr=\"\" text=\"설정8(문자)\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:CD == '00' ? &quot;none&quot;:&quot;checkbox&quot;\" edittype=\"expr:CD == '00' ? &quot;none&quot;:&quot;checkbox&quot;\" text=\"bind:CHECKED\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" style=\"background2: ;\" text=\"bind:CD_GRP\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" style=\"background2: ;\" text=\"bind:CD_CLS\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"expr:CD == '00' ? &quot;none&quot;:&quot;text&quot;\" style=\"align:left;background:EXPR(CD == '00' ? &quot;#ebebebff&quot;:&quot;&quot;);background2:EXPR(CD == '00' ? &quot;#ebebebff&quot;:&quot;&quot;);\" text=\"bind:CD\"/><Cell col=\"4\" style=\"align:left;background2: ;\" text=\"bind:CD_ID\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"text\" text=\"bind:UP_CD_ID\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:CD_NM_LO\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:CD_NM_GB\"/><Cell col=\"8\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:CD_DESC\" tooltiptext=\"bind:CD_DESC\"/><Cell col=\"9\" combodisplay=\"edit\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ALT_USE\"/><Cell col=\"10\" displaytype=\"number\" editlimit=\"2\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:ARY_ORDR\"/><Cell col=\"11\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:APPND_SET_NUM_1\"/><Cell col=\"12\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:APPND_SET_NUM_2\"/><Cell col=\"13\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:APPND_SET_NUM_3\"/><Cell col=\"14\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:APPND_SET_NUM_4\"/><Cell col=\"15\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:APPND_SET_NUM_5\"/><Cell col=\"16\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:APPND_SET_NUM_6\"/><Cell col=\"17\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:APPND_SET_NUM_7\"/><Cell col=\"18\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:APPND_SET_NUM_8\"/><Cell col=\"19\" displaytype=\"text\" edittype=\"text\" text=\"bind:APPND_SET_CHR_1\"/><Cell col=\"20\" displaytype=\"text\" edittype=\"text\" text=\"bind:APPND_SET_CHR_2\"/><Cell col=\"21\" displaytype=\"text\" edittype=\"text\" text=\"bind:APPND_SET_CHR_3\"/><Cell col=\"22\" displaytype=\"text\" edittype=\"text\" text=\"bind:APPND_SET_CHR_4\"/><Cell col=\"23\" displaytype=\"text\" edittype=\"text\" text=\"bind:APPND_SET_CHR_5\"/><Cell col=\"24\" displaytype=\"text\" edittype=\"text\" text=\"bind:APPND_SET_CHR_6\"/><Cell col=\"25\" displaytype=\"text\" edittype=\"text\" text=\"bind:APPND_SET_CHR_7\"/><Cell col=\"26\" displaytype=\"text\" edittype=\"text\" text=\"bind:APPND_SET_CHR_8\"/></Band></Format></Formats>");
            this.divViewCompBody02.addChild(obj.name, obj);
            obj = new Button("btnCdDel", "absolute", null, "10", "50", "21", "53", null, this.divViewCompBody02);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("코드그룹삭제버튼");
            obj.set_taborder("12");
            obj.set_text("삭제");
            obj.set_visible("true");
            this.divViewCompBody02.addChild(obj.name, obj);
            obj = new Button("btnCdSave", "absolute", null, "10", "50", "21", "0", null, this.divViewCompBody02);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("코드그룹삭제버튼");
            obj.set_taborder("13");
            obj.set_text("저장");
            this.divViewCompBody02.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "11", "254", "23", null, null, this.divViewCompBody02);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("14");
            obj.set_text("코드상세");
            this.divViewCompBody02.addChild(obj.name, obj);
            obj = new Button("btnCdAdd", "absolute", null, "10", "50", "21", "106", null, this.divViewCompBody02);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("코드그룹추가버튼");
            obj.set_taborder("15");
            obj.set_text("추가");
            this.divViewCompBody02.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 34, this.div_btn,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("컨트롤 박스");
            		p.set_taborder("83");
            		p.set_visible("false");

            	}
            );
            this.div_btn.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 226, this.divViewCompBody00.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.set_cssclass("div_WF_DetailBg");
            		p.set_taborder("11");

            	}
            );
            this.divViewCompBody00.divViewCompBody00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 261, this.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("84");

            	}
            );
            this.divViewCompBody00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 226, this.divViewCompBody01.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.set_cssclass("div_WF_DetailBg");
            		p.set_taborder("13");

            	}
            );
            this.divViewCompBody01.divViewCompBody00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 261, this.divViewCompBody01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("85");

            	}
            );
            this.divViewCompBody01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.divViewCompBody02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("86");

            	}
            );
            this.divViewCompBody02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1200, 769, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("FrmTemplate100");
            		p.set_titletext("코드관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item49","divViewCompBody01.divViewCompBody00.edtCdGrp","value","dsCls","CD_GRP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Div11.div_input.edt_cdId","value","ds_grp","CD_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","Div11.div_input.edt_cdNmLo","value","ds_grp","CD_NM_LO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Div11.div_input.edt_cdGrp","value","ds_grp","CD_GRP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Div11.div_input.edt_cdNmGb","value","ds_grp","CD_NM_GB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Div11.div_input.edt_cdDesc","value","ds_grp","CD_DESC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Div11.div_input.edt_aryOrdr","value","ds_grp","ARY_ORDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Div11.div_input.rdo_altUse","value","ds_grp","ALT_USE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Div21.div_input.edt_aryOrdr","value","ds_cls","ARY_ORDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Div21.div_input.rdo_altUse","value","ds_cls","ALT_USE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Div21.div_input.edt_cdDesc","value","ds_cls","CD_DESC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Div21.div_input.edt_cdNmGb","value","ds_cls","CD_NM_GB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Div21.div_input.edt_cdNmLo","value","ds_cls","CD_NM_LO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","Div21.div_input.edt_cdGrp","value","ds_cls","CD_GRP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","Div21.div_input.edt_cdCls","value","ds_cls","CD_CLS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","Div21.div_input.edt_cdId","value","ds_cls","CD_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","Div11.div_input.edt_cdCls","value","ds_grp","CD_CLS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","div_grp.div_input.edt_cdId","value","ds_grp","CD_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","div_grp.div_input.edt_cdGrp","value","ds_grp","CD_GRP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","div_grp.div_input.edt_cdCls","value","ds_grp","CD_CLS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","div_grp.div_input.edt_cdNmLo","value","ds_grp","CD_NM_LO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","div_grp.div_input.edt_cdNmGb","value","ds_grp","CD_NM_GB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","div_grp.div_input.edt_cdDesc","value","ds_grp","CD_DESC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","div_grp.div_input.rdo_altUse","value","ds_grp","ALT_USE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","div_grp.div_input.edt_aryOrdr","value","ds_grp","ARY_ORDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","div_cls.div_input.edt_aryOrdr","value","ds_cls","ARY_ORDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","div_cls.div_input.rdo_altUse","value","ds_cls","ALT_USE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","div_cls.div_input.edt_cdDesc","value","ds_cls","CD_DESC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","div_cls.div_input.edt_cdNmGb","value","ds_cls","CD_NM_GB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","div_cls.div_input.edt_cdNmLo","value","ds_cls","CD_NM_LO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","div_cls.div_input.edt_cdGrp","value","ds_cls","CD_GRP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","div_cls.div_input.edt_cdCls","value","ds_cls","CD_CLS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","div_cls.div_input.edt_cdId","value","ds_cls","CD_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","div_cls.div_input.edt_aryOrdr","value","ds_cls","ARY_ORDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","div_cls.div_input.rdo_altUse","value","ds_cls","ALT_USE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","div_cls.div_input.edt_cdDesc","value","ds_cls","CD_DESC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","div_cls.div_input.edt_cdNmGb","value","ds_cls","CD_NM_GB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","div_cls.div_input.edt_cdNmLo","value","ds_cls","CD_NM_LO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","div_cls.div_input.edt_cdGrp","value","ds_cls","CD_GRP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item38","div_cls.div_input.edt_cdCls","value","ds_cls","CD_CLS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item39","div_cls.div_input.edt_cdId","value","ds_cls","CD_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item40","divViewCompBody00.divViewCompBody00.edtCdId","value","dsGrp","CD_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","divViewCompBody00.divViewCompBody00.edtCdGrp","value","dsGrp","CD_GRP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item42","divViewCompBody00.divViewCompBody00.edtCdClass","value","dsGrp","CD_CLS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item43","divViewCompBody00.divViewCompBody00.edtCdNm","value","dsGrp","CD_NM_LO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item44","divViewCompBody00.divViewCompBody00.edtCdNmEn","value","dsGrp","CD_NM_GB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item45","divViewCompBody00.divViewCompBody00.edtCdDesc","value","dsGrp","CD_DESC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item46","divViewCompBody00.divViewCompBody00.rdAltUse","value","dsGrp","ALT_USE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item47","divViewCompBody00.divViewCompBody00.edtOrder","value","dsGrp","ARY_ORDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item48","divViewCompBody01.divViewCompBody00.edtCdId","value","dsCls","CD_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item50","divViewCompBody01.divViewCompBody00.edtCdClass","value","dsCls","CD_CLS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item51","divViewCompBody01.divViewCompBody00.edtCdNm","value","dsCls","CD_NM_LO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item52","divViewCompBody01.divViewCompBody00.edtCdNmEn","value","dsCls","CD_NM_GB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item53","divViewCompBody01.divViewCompBody00.edtCdDesc","value","dsCls","CD_DESC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item54","divViewCompBody01.divViewCompBody00.rdAltUse","value","dsCls","ALT_USE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item55","divViewCompBody01.divViewCompBody00.edtOrder","value","dsCls","ARY_ORDR");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("BSysCodeDetail.xfdl", function(exports) {
        /**
         * @파일명       	: BSysCodeDetail.xfdl
         * @생성자       	: 송태봉
         * @생성일자     	: 2017. 9. 05.
         * @설명			    : 코드관리
         * @최종수정자		: 송태봉
         * @최종수정일자	    : 2017. 9. 05.
        */ 

        /**
        	@function	fnOnload()
        	@desc   	폼 onload이벤트
        */   
        this.fnOnload = function(obj,e)
        {
        	//그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기
        	gfnSetGrdFunc(this.divViewCompBody01.grdCls, null, this);
        	gfnSetGrdFunc(this.divViewCompBody02.grdCd, null, this);
        	
        	this.dsAllCd.setColumn(0,"GUBUN","GRP");
        	this.fnSearch();
        }

        /**
        	@function	fnSearch()
        	@desc   	조회이벤트
        */   
        this.fnSearch = function()
        {
        	var sSvcID = "";
        	var sOutDatasets = "";
        	var gubun = this.dsAllCd.getColumn(0,"GUBUN");
        	
        	if(gubun == "GRP") { // 코드그룹
        		sSvcID = "searchSysCodeGrp"; 
        		sOutDatasets = "dsGrp=dsAllCd";
        		
        	} else if(gubun == "CLS") { // 코드클래스
        		sSvcID = "searchSysCodeCls"; 
        		sOutDatasets = "dsCls=dsAllCd";
        		
        	} else if(gubun == "CD") { // 코드
        		sSvcID = "searchSysCodeCd"; 
        		sOutDatasets = "dsCd=dsAllCd";
        	}

        	var sController = "epro.sys.service.BSysService.searchSysCode";
        	var sInDatasets = "dsAllCd=dsAllCd"
        	var sCallbackFunc = "fnTrCallBack";
        	
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
        	@function	fnTrCallBack()
        	@desc   	Transaction Callback함수
        */      
        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	switch(strSvcID){
        		case "searchSysCodeGrp" : 
        			this.dsGrp.set_enableevent(false);
        			
        			if(this.dsGrp.rowcount != 0){
        				this.dsAllCd.setColumn(0,"GUBUN","CLS");
        				this.dsAllCd.setColumn(0,"CD_GRP",this.dsGrp.getColumn(0,"CD_GRP"));
        			}
        			
        			this.dsGrp.set_enableevent(true);
        		break;
        		
        		case "searchSysCodeCls" :
        			this.dsCls.set_enableevent(false);
        			
        			if(this.dsCls.rowcount != 0){
        				this.dsAllCd.setColumn(0,"GUBUN","CD");
        				this.dsAllCd.setColumn(0,"CD_GRP",this.dsCls.getColumn(0,"CD_GRP"));
        				this.dsAllCd.setColumn(0,"CD_CLS",this.dsCls.getColumn(0,"CD_CLS"));	
        				
        			}  else{
        				this.dsCd.clear();
        			}
        			
        			this.dsCls.set_enableevent(true);
        		
        		break;
        		
        		case "searchSysCodeCd" : 
        			//onrowsetchanged 이벤트를 발생시키기 위해.
        			this.dsCd.set_enableevent(false); 
        			this.dsCd.set_enableevent(true);
        			
        		break;
        		
        		case "saveSysCodeGrp" :
        			gfnAlert(strErrMsg);
        		break;
        		
        		case "saveSysCodeCls" :
        			this.fnDsClsOnrowposchanged();
        			gfnAlert(strErrMsg);
        		break;
        		
        		case "saveSysCodeCd" :
        			gfnAlert(strErrMsg);
        		break;
        		
        		default:
        		break;	
        	}
        }

        /**
        	@function	fnDsGrpOnrowposchanged()
        	@desc   	코드그룹 row변경 이벤트
        */   
        this.fnDsGrpOnrowposchanged = function(obj,e)
        {
        	this.dsAllCd.setColumn(0,"GUBUN","CLS");
        	this.dsAllCd.setColumn(0,"CD_GRP",this.dsGrp.getColumn(this.dsGrp.rowposition,"CD_GRP"));
        	this.fnSearch();
        }

        /**
        	@function	fnDsGrpCanrowposchange()
        	@desc   	코드그룹 row변경전 이벤트
        */      
        this.fnDsGrpCanrowposchange = function(obj,e)
        {
        	for(var i = 0 ; i < this.dsCls.rowcount ; i++){
        		if(this.dsCls.getRowType(i) == 2){
        			if(gfnConfirm("코드클래스에 추가된 행이 있습니다.\n계속하시겠습니까?")){
        				return true;
        			} else{
        				return false;				
        			}
        		}
        	}
        }

        /**
        	@function	fnDsGrpCancolumnchange()
        	@desc   	코드그룹 column변경이벤트
        */      
        this.fnDsGrpCancolumnchange = function(obj,e)
        {
        	if(e.columnid == "CD_GRP" && !gfnIsNull(e.newvalue)){
        		var nRow = obj.findRow("CD_GRP",e.newvalue)
        		
        		if(nRow != -1){
        			gfnAlert("중복되는 코드그룹이 존재합니다.")
        			e.newvalue = e.oldvalue;
        		}
        	}
        }

        /**
        	@function	fnGrpAdd()
        	@desc   	코드그룹 추가 이벤트
        */
        this.fnGrpAdd = function(obj,e)
        {
        	var nRow = this.dsGrp.addRow();
        	var ordr = this.dsGrp.getMax("ARY_ORDR") == undefined ? 0 : this.dsGrp.getMax("ARY_ORDR") + 1;
        	
        	this.dsGrp.setColumn(nRow,"CD_GRP","");
        	this.dsGrp.setColumn(nRow,"CD_CLS","00");
        	this.dsGrp.setColumn(nRow,"CD","00");
        	this.dsGrp.setColumn(nRow,"CD_NM_LO","");
        	this.dsGrp.setColumn(nRow,"ALT_USE","Y");
        	this.dsGrp.setColumn(nRow,"ARY_ORDR",ordr);
        	this.dsGrp.setColumn(nRow,"CRTR_ID",application.gdsUserInfo.getColumn(0,"USER_ID"));
        	this.dsGrp.setColumn(nRow,"LAST_CHGR_ID",application.gdsUserInfo.getColumn(0,"USER_ID"));	
        }

        /**
        	@function	dfnGrpDel()
        	@desc   	코드그룹 row삭제
        */  
        this.dfnGrpDel = function(obj,e)
        {
        	if(!gfnConfirm("코드그룹을 삭제하시겠습니까?")) return;
        	
        	this.dsGrp.deleteRow(this.dsGrp.rowposition);
        }

        /**
        	@function	fnGrpSave()
        	@desc   	코드그룹 저장
        */  
        this.fnGrpSave = function(obj,e)
        {
        	if(!gfnConfirm("코드그룹을 저장하시겠습니까?")) return;
        	
        	var sSvcID = "saveSysCodeGrp";
        	var sController = "epro.sys.service.BSysService.saveSysCodeGrp";
        	var sInDatasets = "dsGrp=dsGrp"
        	var sOutDatasets = "dsGrp=dsGrp";
        	var sCallbackFunc = "fnTrCallBack";
        	
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
        	@function	fnDsClsOnrowposchanged()
        	@desc   	코드클래스 row변경 이벤트
        */   
        this.fnDsClsOnrowposchanged = function(obj,e)
        {
        	this.dsAllCd.setColumn(0,"GUBUN","CD");
        	this.dsAllCd.setColumn(0,"CD_GRP",this.dsCls.getColumn(this.dsCls.rowposition,"CD_GRP"));
        	this.dsAllCd.setColumn(0,"CD_CLS",this.dsCls.getColumn(this.dsCls.rowposition,"CD_CLS"));
        	
        	this.fnSearch();
        }

        /**
        	@function	fnDsClsCancolumnchange()
        	@desc   	코드클래스 column변경이벤트
        */
        this.fnDsClsCancolumnchange = function(obj,e)
        {
        	if(e.columnid == "CD_CLS" && !gfnIsNull(e.newvalue)){
        		var nRow = obj.findRow("CD_CLS",e.newvalue)
        		
        		if(nRow != -1){
        			gfnAlert("중복되는 코드클래스가 존재합니다.")
        			e.newvalue = e.oldvalue;
        		}
        	}
        }

        /**
        	@function	fnDsClsCanrowposchange()
        	@desc   	코드클래스 row변경전 이벤트
        */
        this.fnDsClsCanrowposchange = function(obj,e)
        {
        	for(var i = 0 ; i < this.dsCd.rowcount ; i++){
        		if(this.dsCd.getRowType(i) == 2){
        			if(gfnConfirm("코드에 추가된 행이 있습니다.\n계속하시겠습니까?")){
        				return true;
        			} else{
        				return false;				
        			}
        		}
        	}
        }

        /**
        	@function	fnClsAdd()
        	@desc   	코드클래스 row추가
        */
        this.fnClsAdd = function(obj,e)
        {	
        	var nRow = this.dsCls.addRow();
        	var ordr = this.dsCls.getMax("ARY_ORDR") + 1;
        	
        	this.dsCls.setColumn(nRow,"CD_GRP",this.dsGrp.getColumn(this.dsGrp.rowposition,"CD_GRP"));
        	this.dsCls.setColumn(nRow,"CD_CLS","");
        	this.dsCls.setColumn(nRow,"CD","00");
        	this.dsCls.setColumn(nRow,"CD_NM_LO","");
        	this.dsCls.setColumn(nRow,"ALT_USE","Y");
        	this.dsCls.setColumn(nRow,"ARY_ORDR",ordr);
        	this.dsCls.setColumn(nRow,"CRTR_ID",application.gdsUserInfo.getColumn(0,"USER_ID"));
        	this.dsCls.setColumn(nRow,"LAST_CHGR_ID",application.gdsUserInfo.getColumn(0,"USER_ID"));
        }

        /**
        	@function	fnClsDel()
        	@desc   	코드클래스 row삭제
        */
        this.fnClsDel = function(obj,e)
        {
        	if(this.dsCls.getColumn(this.dsCls.rowposition,"CD_CLS") == "00"){
        		gfnAlert("선택하신 코드클래스는 삭제하실 수 없습니다.");
        		return;
        	}

        	if(!gfnConfirm("코드클래스를 삭제하시겠습니까?")) return;
        	
        	this.dsCls.deleteRow(this.dsCls.rowposition);
        }

        /**
        	@function	fnClsSave()
        	@desc   	코드클래스 저장
        */
        this.fnClsSave = function(obj,e)
        {
        	if(!gfnConfirm("코드클래스를 저장하시겠습니까?")) return;
        	
        	var sSvcID = "saveSysCodeCls";
        	var sController = "epro.sys.service.BSysService.saveSysCodeCls";
        	var sInDatasets = "dsCls=dsCls"
        	var sOutDatasets = "dsCls=dsCls";
        	var sCallbackFunc = "fnTrCallBack";
        	
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
        	@function	fnCdAdd()
        	@desc   	코드 추가
        */
        this.fnCdAdd = function(obj,e)
        {	
        	var nRow = this.dsCd.addRow();
        	var ordr = this.dsCd.getMax("ARY_ORDR") + 1;
        	
        	this.dsCd.setColumn(nRow,"CD_GRP",this.dsCls.getColumn(this.dsCls.rowposition,"CD_GRP"));
        	this.dsCd.setColumn(nRow,"CD_CLS",this.dsCls.getColumn(this.dsCls.rowposition,"CD_CLS"));
        	this.dsCd.setColumn(nRow,"ALT_USE","Y");
        	this.dsCd.setColumn(nRow,"ARY_ORDR",ordr);
        	this.dsCd.setColumn(nRow,"CRTR_ID",application.gdsUserInfo.getColumn(0,"USER_ID"));
        	this.dsCd.setColumn(nRow,"LAST_CHGR_ID",application.gdsUserInfo.getColumn(0,"USER_ID"));
        }

        /**
        	@function	fnDsCdOncolumnchanged()
        	@desc   	코드 컬럼 변경 이벤트
        */
        this.fnDsCdOncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "CD"){
        		obj.setColumn(e.row,"CD_ID",obj.getColumn(e.row,"CD_GRP") + obj.getColumn(e.row,"CD_CLS") + obj.getColumn(e.row,"CD"));
        	}
        }

        /**
        	@function	fnDsCdCancolumnchange()
        	@desc   	코드 컬럼변경전 이벤트
        */
        this.fnDsCdCancolumnchange = function(obj,e)
        {
        	if(e.columnid == "CD" && !gfnIsNull(e.newvalue)){
        		var nRow = obj.findRow("CD",e.newvalue)
        		
        		if(nRow != -1){
        			gfnAlert("중복되는 코드가 존재합니다.")
        			e.newvalue = e.oldvalue;
        		}
        	}
        }

        /**
        	@function	fnCdDel()
        	@desc   	코드 삭제 이벤트
        */
        this.fnCdDel = function(obj,e)
        {	
        	if(this.dsCd.findRow("CHECKED","1") == -1){
        		gfnAlert("선택된 행이 없습니다.");
        		return;
        	}

        	if(!gfnConfirm("코드를 삭제하시겠습니까?")) return;
        	
        	for(var i = this.dsCd.rowcount ; i >= 0 ; i--){
        		if(this.dsCd.getColumn(i,"CHECKED") == "1" && this.dsCd.getColumn(i,"CD") != "00") this.dsCd.deleteRow(i);
        	}
        }

        /**
        	@function	fnCdSave()
        	@desc   	코드 저장 이벤트
        */
        this.fnCdSave = function(obj,e)
        {
        	if(!gfnConfirm("코드를 저장하시겠습니까?")) return;
        	
        	var sSvcID = "saveSysCodeCd";
        	var sController = "epro.sys.service.BSysService.saveSysCodeCd";
        	var sInDatasets = "dsCd=dsCd"
        	var sOutDatasets = "dsCd=dsCd";
        	var sCallbackFunc = "fnTrCallBack";
        	
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
        	@function	fnDsCdOnrowsetchanged()
        	@desc   	코드 onrowsetchanged 이벤트
        */
        this.fnDsCdOnrowsetchanged = function(obj,e)
        {
        	if(obj.rowcount == 0){
        		this.divViewCompBody02.btnCdAdd.set_enable(false);
        		this.divViewCompBody02.btnCdDel.set_enable(false);
        		this.divViewCompBody02.btnCdSave.set_enable(false);
        		
        		this.divViewCompBody01.btnClsDel.set_enable(true);
        		
        	} else if(obj.rowcount == 1){
        		this.divViewCompBody02.btnCdAdd.set_enable(true);
        		this.divViewCompBody02.btnCdDel.set_enable(false);
        		this.divViewCompBody02.btnCdSave.set_enable(true);
        		
        		this.divViewCompBody01.btnClsDel.set_enable(true);
        	
        	} else {
        		this.divViewCompBody02.btnCdAdd.set_enable(true);
        		this.divViewCompBody02.btnCdDel.set_enable(true);
        		this.divViewCompBody02.btnCdSave.set_enable(true);
        		
        		this.divViewCompBody01.btnClsDel.set_enable(false);
        	}
        }

        /**
        	@function	fnDsClsOnrowsetchanged()
        	@desc   	코드클래스 onrowsetchanged 이벤트
        */
        this.fnDsClsOnrowsetchanged = function(obj,e)
        {
        	if(obj.rowcount == 0){
        		this.divViewCompBody01.btnClsAdd.set_enable(false);
        		this.divViewCompBody01.btnClsDel.set_enable(false);
        		this.divViewCompBody01.btnClsSave.set_enable(false);
        		
        		this.divViewCompBody00.btnGrpDel.set_enable(true);
        		
        	} else if(obj.rowcount == 1){
        		this.divViewCompBody01.btnClsAdd.set_enable(true);
        		this.divViewCompBody01.btnClsDel.set_enable(false);
        		this.divViewCompBody01.btnClsSave.set_enable(true);
        		
        		this.divViewCompBody00.btnGrpDel.set_enable(true);
        	
        	} else {
        		this.divViewCompBody01.btnClsAdd.set_enable(true);
        		this.divViewCompBody01.btnClsDel.set_enable(true);
        		this.divViewCompBody01.btnClsSave.set_enable(true);
        		
        		this.divViewCompBody00.btnGrpDel.set_enable(false);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsGrp.addEventHandler("cancolumnchange", this.fnDsGrpCancolumnchange, this);
            this.dsGrp.addEventHandler("canrowposchange", this.fnDsGrpCanrowposchange, this);
            this.dsGrp.addEventHandler("onrowposchanged", this.fnDsGrpOnrowposchanged, this);
            this.dsCls.addEventHandler("cancolumnchange", this.fnDsClsCancolumnchange, this);
            this.dsCls.addEventHandler("canrowposchange", this.fnDsClsCanrowposchange, this);
            this.dsCls.addEventHandler("onrowposchanged", this.fnDsClsOnrowposchanged, this);
            this.dsCls.addEventHandler("onrowsetchanged", this.fnDsClsOnrowsetchanged, this);
            this.dsCd.addEventHandler("cancolumnchange", this.fnDsCdCancolumnchange, this);
            this.dsCd.addEventHandler("oncolumnchanged", this.fnDsCdOncolumnchanged, this);
            this.dsCd.addEventHandler("onrowsetchanged", this.fnDsCdOnrowsetchanged, this);
            this.addEventHandler("onload", this.fnOnload, this);
            this.div_btn.btn_systemApply.addEventHandler("onclick", this.fn_system, this);
            this.divViewCompBody00.btnGrpDel.addEventHandler("onclick", this.dfnGrpDel, this);
            this.divViewCompBody00.btnGrpSave.addEventHandler("onclick", this.fnGrpSave, this);
            this.divViewCompBody00.divViewCompBody00.staViewCompLine00.addEventHandler("onclick", this.Div21_Static01_onclick, this);
            this.divViewCompBody00.divViewCompBody00.staViewCompLine01.addEventHandler("onclick", this.Div21_Static01_onclick, this);
            this.divViewCompBody00.divViewCompBody00.staViewCompLine02.addEventHandler("onclick", this.Div21_Static01_onclick, this);
            this.divViewCompBody00.divViewCompBody00.staViewCompLine04.addEventHandler("onclick", this.Div21_Static01_onclick, this);
            this.divViewCompBody00.divViewCompBody00.staViewCompLine05.addEventHandler("onclick", this.Div21_Static01_onclick, this);
            this.divViewCompBody00.divViewCompBody00.staViewCompLine06.addEventHandler("onclick", this.Div21_Static01_onclick, this);
            this.divViewCompBody00.divViewCompBody00.staViewCompLine07.addEventHandler("onclick", this.Div21_Static01_onclick, this);
            this.divViewCompBody00.btnGrpAdd.addEventHandler("onclick", this.fnGrpAdd, this);
            this.divViewCompBody01.btnClsDel.addEventHandler("onclick", this.fnClsDel, this);
            this.divViewCompBody01.btnClsSave.addEventHandler("onclick", this.fnClsSave, this);
            this.divViewCompBody01.btnClsAdd.addEventHandler("onclick", this.fnClsAdd, this);
            this.divViewCompBody01.divViewCompBody00.staViewCompLine00.addEventHandler("onclick", this.Div21_Static01_onclick, this);
            this.divViewCompBody01.divViewCompBody00.staViewCompLine01.addEventHandler("onclick", this.Div21_Static01_onclick, this);
            this.divViewCompBody01.divViewCompBody00.staViewCompLine02.addEventHandler("onclick", this.Div21_Static01_onclick, this);
            this.divViewCompBody01.divViewCompBody00.staViewCompLine04.addEventHandler("onclick", this.Div21_Static01_onclick, this);
            this.divViewCompBody01.divViewCompBody00.staViewCompLine05.addEventHandler("onclick", this.Div21_Static01_onclick, this);
            this.divViewCompBody01.divViewCompBody00.staViewCompLine06.addEventHandler("onclick", this.Div21_Static01_onclick, this);
            this.divViewCompBody01.divViewCompBody00.staViewCompLine07.addEventHandler("onclick", this.Div21_Static01_onclick, this);
            this.divViewCompBody02.btnCdDel.addEventHandler("onclick", this.fnCdDel, this);
            this.divViewCompBody02.btnCdSave.addEventHandler("onclick", this.fnCdSave, this);
            this.divViewCompBody02.btnCdAdd.addEventHandler("onclick", this.fnCdAdd, this);

        };

        this.loadIncludeScript("BSysCodeDetail.xfdl", true);

       
    };
}
)();
