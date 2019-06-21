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
                this.set_name("BSysCodeTree");
                this.set_titletext("코드관리");
                this._setFormPosition(0,0,1200,769);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCd", this);
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" size=\"256\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCheckId", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ID\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdRsrc", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" size=\"256\" type=\"STRING\"/><Column id=\"Column1\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM34", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTreeStatus", this);
            obj._setContents("<ColumnInfo><Column id=\"PATH\" size=\"256\" type=\"STRING\"/><Column id=\"STATUS\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdTree", "absolute", "0", "39", null, null, "720", "6", this);
            obj.set_autofittype("col");
            obj.set_binddataset("dsCd");
            obj.set_taborder("137");
            obj.set_treeinitstatus("collapse,all");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\" band=\"left\"/><Column size=\"200\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"코드명\"/></Band><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" style=\"background:EXPR(gfnIsNull(CD_CLS) || gfnIsNull(CD) || gfnIsNull(CD_GRP)? 'antiquewhite' : '');background2:EXPR(gfnIsNull(CD_CLS) || gfnIsNull(CD) || gfnIsNull(CD_GRP)? 'antiquewhite' : '');font:EXPR(LEVEL == '1' ? 'bold 9 Dotum' : '');selectfont:EXPR(LEVEL == '1' ? 'bold 9 Dotum' : '');\" text=\"bind:CD_ID2\" treelevel=\"bind:LEVEL\"/><Cell col=\"1\" style=\"align:left middle;background:EXPR(gfnIsNull(CD_CLS) || gfnIsNull(CD) || gfnIsNull(CD_GRP)? 'antiquewhite' : '');background2:EXPR(gfnIsNull(CD_CLS) || gfnIsNull(CD) || gfnIsNull(CD_GRP)? 'antiquewhite' : '');font:EXPR(LEVEL == '1' ? 'bold 9 Dotum' : '');selectfont:EXPR(LEVEL == '1' ? 'bold 9 Dotum' : '');\" text=\"bind:CD_NM_LO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divViewCompBody00", "absolute", null, "39", "686", null, "14", "6", this);
            obj.set_cssclass("div_WF_DetailBg");
            obj.getSetter("objNm").set("DIV-헤더 상세");
            obj.set_scrollbars("none");
            obj.style.set_background("#ffffffff");
            obj.set_taborder("138");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompLine12", "absolute", "0", "383", null, "33", "0", null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("271");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine07", "absolute", "0", "255", null, "33", "0", null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("254");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine08", "absolute", "0", "287", null, "33", "0", null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("259");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine09", "absolute", "0", "319", null, "33", "0", null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("264");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine06", "absolute", "0", "223", null, "33", "0", null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("249");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine04", "absolute", "0", "127", null, "33", "0", null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("241");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "-1", null, "33", "0", null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("196");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staPgmId", "absolute", "0", "-1", "117", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("상위코드");
            obj.set_taborder("222");
            obj.set_text("상위코드");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtUpCd", "absolute", "122", "4", "211", "23", null, null, this.divViewCompBody00);
            obj.getSetter("objNm").set("상위코드");
            obj.set_readonly("false");
            obj.set_taborder("223");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "31", null, "33", "0", null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("226");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staPgmId00", "absolute", "0", "31", "117", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("코드그룹");
            obj.set_taborder("227");
            obj.set_text("코드그룹");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtCdGrp", "absolute", "122", "36", "211", "23", null, null, this.divViewCompBody00);
            obj.set_cssclass("essential");
            obj.getSetter("objNm").set("코드그룹");
            obj.set_readonly("false");
            obj.set_taborder("228");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtCdCls", "absolute", "493", "36", "193", "23", null, null, this.divViewCompBody00);
            obj.set_cssclass("essential");
            obj.getSetter("objNm").set("코드클래스");
            obj.set_readonly("false");
            obj.set_taborder("225");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staLastChgDay00", "absolute", "371", "31", "117", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("코드클래스");
            obj.set_taborder("224");
            obj.set_text("코드클래스");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "63", null, "33", "0", null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("229");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staPgmId01", "absolute", "0", "63", "117", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("코드");
            obj.set_taborder("230");
            obj.set_text("코드");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtCd", "absolute", "122", "68", "211", "23", null, null, this.divViewCompBody00);
            obj.set_cssclass("essential");
            obj.set_imemode("none");
            obj.getSetter("objNm").set("코드");
            obj.set_taborder("231");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtCdId", "absolute", "493", "68", "193", "23", null, null, this.divViewCompBody00);
            obj.set_cssclass("essential");
            obj.getSetter("objNm").set("코드ID");
            obj.set_taborder("232");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staLastChgDay01", "absolute", "371", "63", "117", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("objNm").set("코드ID");
            obj.set_taborder("233");
            obj.set_text("코드ID");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine03", "absolute", "0", "95", null, "33", "0", null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("234");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staCdNmLo", "absolute", "0", "95", "117", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label_P");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("코드명(한)");
            obj.set_taborder("235");
            obj.set_text("코드명(한)");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtCdNmLo", "absolute", "122", "100", "211", "23", null, null, this.divViewCompBody00);
            obj.set_cssclass("essential");
            obj.getSetter("objNm").set("코드명(한)");
            obj.set_taborder("236");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staDesc", "absolute", "0", "127", "117", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("코드설명");
            obj.set_taborder("239");
            obj.set_text("코드설명");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtDesc", "absolute", "122", "132", "564", "23", null, null, this.divViewCompBody00);
            obj.getSetter("objNm").set("코드설명");
            obj.set_taborder("240");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine05", "absolute", "0", "159", null, "33", "0", null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("242");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staOrdr", "absolute", "0", "159", "117", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("정렬순서");
            obj.set_taborder("243");
            obj.set_text("정렬순서");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staAltUse", "absolute", "371", "159", "117", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("사용여부");
            obj.set_taborder("245");
            obj.set_text("사용여부");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Combo("cboAltUse", "absolute", "493", "164", "193", "23", null, null, this.divViewCompBody00);
            this.divViewCompBody00.addChild(obj.name, obj);
            var cboAltUse_innerdataset = new Dataset("cboAltUse_innerdataset", this.divViewCompBody00.cboAltUse);
            cboAltUse_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(cboAltUse_innerdataset);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_taborder("246");
            obj.set_text("사용");
            obj.set_value("Y");
            obj.getSetter("objNm").set("사용여부");
            obj.set_index("0");
            obj = new Static("staSetNum1", "absolute", "0", "223", "117", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("설정1(숫자)");
            obj.set_taborder("247");
            obj.set_text("설정1(숫자)");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtSetNum1", "absolute", "122", "228", "211", "23", null, null, this.divViewCompBody00);
            obj.set_inputtype("number");
            obj.getSetter("objNm").set("설정1(숫자)");
            obj.set_taborder("248");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staSetNum2", "absolute", "371", "223", "117", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("설정2(숫자)");
            obj.set_taborder("250");
            obj.set_text("설정2(숫자)");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtSetNum2", "absolute", "493", "228", "193", "23", null, null, this.divViewCompBody00);
            obj.set_inputtype("number");
            obj.getSetter("objNm").set("설정2(숫자)");
            obj.set_taborder("251");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staSetNum3", "absolute", "0", "255", "117", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("설정3(숫자)");
            obj.set_taborder("252");
            obj.set_text("설정3(숫자)");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtSetNum3", "absolute", "122", "260", "211", "23", null, null, this.divViewCompBody00);
            obj.set_inputtype("number");
            obj.getSetter("objNm").set("설정3(숫자)");
            obj.set_taborder("253");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staSetNum4", "absolute", "371", "255", "117", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("설정4(숫자)");
            obj.set_taborder("255");
            obj.set_text("설정4(숫자)");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtSetNum4", "absolute", "493", "260", "193", "23", null, null, this.divViewCompBody00);
            obj.set_inputtype("number");
            obj.getSetter("objNm").set("설정4(숫자)");
            obj.set_taborder("256");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staSetNum5", "absolute", "0", "287", "117", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("설정5(숫자)");
            obj.set_taborder("257");
            obj.set_text("설정5(숫자)");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtSetNum5", "absolute", "122", "292", "211", "23", null, null, this.divViewCompBody00);
            obj.set_inputtype("number");
            obj.getSetter("objNm").set("설정5(숫자)");
            obj.set_taborder("258");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staSetNum6", "absolute", "371", "287", "117", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("설정6(숫자)");
            obj.set_taborder("260");
            obj.set_text("설정6(숫자)");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtSetNum6", "absolute", "493", "292", "193", "23", null, null, this.divViewCompBody00);
            obj.set_inputtype("number");
            obj.getSetter("objNm").set("설정6(숫자)");
            obj.set_taborder("261");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staSetNum7", "absolute", "0", "319", "117", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("설정7(숫자)");
            obj.set_taborder("262");
            obj.set_text("설정7(숫자)");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtSetNum7", "absolute", "122", "324", "211", "23", null, null, this.divViewCompBody00);
            obj.set_inputtype("number");
            obj.getSetter("objNm").set("설정7(숫자)");
            obj.set_taborder("263");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staSetNum8", "absolute", "371", "319", "117", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("설정8(숫자)");
            obj.set_taborder("265");
            obj.set_text("설정8(숫자)");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtSetNum8", "absolute", "493", "324", "193", "23", null, null, this.divViewCompBody00);
            obj.set_inputtype("number");
            obj.getSetter("objNm").set("설정8(숫자)");
            obj.set_taborder("266");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine10", "absolute", "0", "191", null, "33", "0", null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center");
            obj.set_taborder("267");
            obj.set_text("추가설정숫자");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine11", "absolute", "0", "351", null, "33", "0", null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center");
            obj.set_taborder("268");
            obj.set_text("추가설정문자");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staSetChar1", "absolute", "0", "383", "117", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("설정1(문자)");
            obj.set_taborder("269");
            obj.set_text("설정1(문자)");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtSetChar1", "absolute", "122", "388", "211", "23", null, null, this.divViewCompBody00);
            obj.getSetter("objNm").set("설정1(문자)");
            obj.set_taborder("270");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staSetChar2", "absolute", "371", "383", "117", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("설정2(문자)");
            obj.set_taborder("272");
            obj.set_text("설정2(문자)");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtSetChar2", "absolute", "493", "388", "193", "23", null, null, this.divViewCompBody00);
            obj.set_inputfilter("digit");
            obj.getSetter("objNm").set("설정2(문자)");
            obj.set_taborder("273");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine13", "absolute", "0", "415", null, "33", "0", null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("274");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staSetChar3", "absolute", "0", "415", "117", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("설정3(문자)");
            obj.set_taborder("275");
            obj.set_text("설정3(문자)");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtSetChar00", "absolute", "122", "420", "211", "23", null, null, this.divViewCompBody00);
            obj.set_inputfilter("digit");
            obj.getSetter("objNm").set("설정3(문자)");
            obj.set_taborder("276");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staSetChar4", "absolute", "371", "415", "117", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("설정4(문자)");
            obj.set_taborder("277");
            obj.set_text("설정4(문자)");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtSetChar03", "absolute", "493", "420", "193", "23", null, null, this.divViewCompBody00);
            obj.set_inputfilter("digit");
            obj.getSetter("objNm").set("설정4(문자)");
            obj.set_taborder("278");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine14", "absolute", "0", "447", null, "33", "0", null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("279");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staSetChar5", "absolute", "0", "447", "117", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("설정5(문자)");
            obj.set_taborder("280");
            obj.set_text("설정5(문자)");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtSetChar04", "absolute", "122", "452", "211", "23", null, null, this.divViewCompBody00);
            obj.set_inputfilter("digit");
            obj.getSetter("objNm").set("설정5(문자)");
            obj.set_taborder("281");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staSetChar6", "absolute", "371", "447", "117", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("설정6(문자)");
            obj.set_taborder("282");
            obj.set_text("설정6(문자)");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtSetChar05", "absolute", "493", "452", "193", "23", null, null, this.divViewCompBody00);
            obj.set_inputfilter("digit");
            obj.getSetter("objNm").set("설정6(문자)");
            obj.set_taborder("283");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine15", "absolute", "0", "479", null, "33", "0", null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("284");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staSetChar7", "absolute", "0", "479", "117", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("설정7(문자)");
            obj.set_taborder("285");
            obj.set_text("설정7(문자)");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtSetChar06", "absolute", "122", "484", "211", "23", null, null, this.divViewCompBody00);
            obj.set_inputfilter("digit");
            obj.getSetter("objNm").set("설정7(문자)");
            obj.set_taborder("286");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Static("staSetChar8", "absolute", "371", "479", "117", "33", null, null, this.divViewCompBody00);
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("설정8(문자)");
            obj.set_taborder("287");
            obj.set_text("설정8(문자)");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Edit("edtSetChar07", "absolute", "493", "484", "193", "23", null, null, this.divViewCompBody00);
            obj.set_inputfilter("digit");
            obj.getSetter("objNm").set("설정8(문자)");
            obj.set_taborder("288");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "0%", "522", null, "189", "0.14%", null, this.divViewCompBody00);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsCdRsrc");
            obj.set_taborder("289");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"500\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"언어\"/><Cell col=\"1\" text=\"언어명\"/></Band><Band id=\"body\"><Cell style=\"align:left middle;\" text=\"bind:CD_NM_LO\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" style=\"align:left middle;\" text=\"bind:RSRC_NM\" editlimit=\"200\" editlengthunit=\"ascii\"/></Band></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Spin("spnAryOrdr", "absolute", "122", "164", "211", "23", null, null, this.divViewCompBody00);
            obj.set_max("999");
            obj.set_min("1");
            obj.set_taborder("290");
            obj.set_value("0");
            obj.getSetter("objNm").set("정렬순서");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Button("btnAddUnderRow", "absolute", null, "10", "122", "24", "216", null, this);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("하위레벨코드추가");
            obj.set_taborder("139");
            obj.set_text("하위레벨코드추가");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddSameRow", "absolute", null, "10", "122", "24", "91", null, this);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("동일레벨코드추가");
            obj.set_taborder("140");
            obj.set_text("동일레벨코드추가");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelMenu", "absolute", null, "10", "74", "24", "14", null, this);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("코드삭제");
            obj.set_taborder("141");
            obj.set_text("코드삭제");
            this.addChild(obj.name, obj);

            obj = new Static("staViewCompTitle00", "absolute", "0", "10", "254", "24", null, null, this);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("142");
            obj.set_text("코드조회");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 686, 0, this.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.set_cssclass("div_WF_DetailBg");
            		p.getSetter("objNm").set("DIV-헤더 상세");
            		p.set_scrollbars("none");
            		p.style.set_background("#ffffffff");
            		p.set_taborder("138");

            	}
            );
            this.divViewCompBody00.addLayout(obj.name, obj);

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
            obj = new BindItem("edtOrdrVi","divViewCompBody00.spnAryOrdr","visible","dsObjBindVi","edtOrdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtOrdrEn","divViewCompBody00.spnAryOrdr","readonly","dsObjBindEn","edtOrdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","divViewCompBody00.edtUpCd","value","dsCd","UP_CD_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divViewCompBody00.edtCdGrp","value","dsCd","CD_GRP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divViewCompBody00.edtCd","value","dsCd","CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","divViewCompBody00.edtCdNmLo","value","dsCd","CD_NM_LO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","divViewCompBody00.edtDesc","value","dsCd","CD_DESC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","divViewCompBody00.edtSetNum1","value","dsCd","APPND_SET_NUM_1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","divViewCompBody00.edtSetNum3","value","dsCd","APPND_SET_NUM_3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","divViewCompBody00.edtSetNum5","value","dsCd","APPND_SET_NUM_5");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","divViewCompBody00.edtSetNum7","value","dsCd","APPND_SET_NUM_7");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","divViewCompBody00.edtSetChar1","value","dsCd","APPND_SET_CHR_1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","divViewCompBody00.edtSetChar00","value","dsCd","APPND_SET_CHR_3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","divViewCompBody00.edtSetChar04","value","dsCd","APPND_SET_CHR_5");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","divViewCompBody00.edtSetChar06","value","dsCd","APPND_SET_CHR_7");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","divViewCompBody00.edtSetChar07","value","dsCd","APPND_SET_CHR_8");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","divViewCompBody00.edtSetChar05","value","dsCd","APPND_SET_CHR_6");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","divViewCompBody00.edtSetChar03","value","dsCd","APPND_SET_CHR_4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","divViewCompBody00.edtSetChar2","value","dsCd","APPND_SET_CHR_2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","divViewCompBody00.edtSetNum8","value","dsCd","APPND_SET_NUM_8");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","divViewCompBody00.edtSetNum6","value","dsCd","APPND_SET_NUM_6");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","divViewCompBody00.edtSetNum4","value","dsCd","APPND_SET_NUM_4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","divViewCompBody00.edtSetNum2","value","dsCd","APPND_SET_NUM_2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","divViewCompBody00.cboAltUse","value","dsCd","ALT_USE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","divViewCompBody00.edtCdId","value","dsCd","CD_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","divViewCompBody00.edtCdCls","value","dsCd","CD_CLS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPgmIdVi","divViewCompBody00.staPgmId","visible","dsObjBindVi","staPgmId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPgmIdEn","divViewCompBody00.staPgmId","enable","dsObjBindEn","staPgmId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtUpCdVi","divViewCompBody00.edtUpCd","visible","dsObjBindVi","edtUpCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtUpCdEn","divViewCompBody00.edtUpCd","readonly","dsObjBindEn","edtUpCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPgmId00Vi","divViewCompBody00.staPgmId00","visible","dsObjBindVi","staPgmId00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPgmId00En","divViewCompBody00.staPgmId00","enable","dsObjBindEn","staPgmId00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCdGrpVi","divViewCompBody00.edtCdGrp","visible","dsObjBindVi","edtCdGrp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCdGrpEn","divViewCompBody00.edtCdGrp","readonly","dsObjBindEn","edtCdGrp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCdClsVi","divViewCompBody00.edtCdCls","visible","dsObjBindVi","edtCdCls");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCdClsEn","divViewCompBody00.edtCdCls","readonly","dsObjBindEn","edtCdCls");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staLastChgDay00Vi","divViewCompBody00.staLastChgDay00","visible","dsObjBindVi","staLastChgDay00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staLastChgDay00En","divViewCompBody00.staLastChgDay00","enable","dsObjBindEn","staLastChgDay00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPgmId01Vi","divViewCompBody00.staPgmId01","visible","dsObjBindVi","staPgmId01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPgmId01En","divViewCompBody00.staPgmId01","enable","dsObjBindEn","staPgmId01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCdVi","divViewCompBody00.edtCd","visible","dsObjBindVi","edtCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCdEn","divViewCompBody00.edtCd","readonly","dsObjBindEn","edtCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCdIdVi","divViewCompBody00.edtCdId","visible","dsObjBindVi","edtCdId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCdIdEn","divViewCompBody00.edtCdId","readonly","dsObjBindEn","edtCdId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staLastChgDay01Vi","divViewCompBody00.staLastChgDay01","visible","dsObjBindVi","staLastChgDay01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staLastChgDay01En","divViewCompBody00.staLastChgDay01","enable","dsObjBindEn","staLastChgDay01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCdNmLoVi","divViewCompBody00.staCdNmLo","visible","dsObjBindVi","staCdNmLo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staCdNmLoEn","divViewCompBody00.staCdNmLo","enable","dsObjBindEn","staCdNmLo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCdNmLoVi","divViewCompBody00.edtCdNmLo","visible","dsObjBindVi","edtCdNmLo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCdNmLoEn","divViewCompBody00.edtCdNmLo","readonly","dsObjBindEn","edtCdNmLo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staDescVi","divViewCompBody00.staDesc","visible","dsObjBindVi","staDesc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staDescEn","divViewCompBody00.staDesc","enable","dsObjBindEn","staDesc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDescVi","divViewCompBody00.edtDesc","visible","dsObjBindVi","edtDesc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDescEn","divViewCompBody00.edtDesc","readonly","dsObjBindEn","edtDesc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staOrdrVi","divViewCompBody00.staOrdr","visible","dsObjBindVi","staOrdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staOrdrEn","divViewCompBody00.staOrdr","enable","dsObjBindEn","staOrdr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAltUseVi","divViewCompBody00.staAltUse","visible","dsObjBindVi","staAltUse");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staAltUseEn","divViewCompBody00.staAltUse","enable","dsObjBindEn","staAltUse");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboAltUseVi","divViewCompBody00.cboAltUse","visible","dsObjBindVi","cboAltUse");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cboAltUseEn","divViewCompBody00.cboAltUse","readonly","dsObjBindEn","cboAltUse");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSetNum1Vi","divViewCompBody00.staSetNum1","visible","dsObjBindVi","staSetNum1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSetNum1En","divViewCompBody00.staSetNum1","enable","dsObjBindEn","staSetNum1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSetNum1Vi","divViewCompBody00.edtSetNum1","visible","dsObjBindVi","edtSetNum1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSetNum1En","divViewCompBody00.edtSetNum1","readonly","dsObjBindEn","edtSetNum1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSetNum2Vi","divViewCompBody00.staSetNum2","visible","dsObjBindVi","staSetNum2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSetNum2En","divViewCompBody00.staSetNum2","enable","dsObjBindEn","staSetNum2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSetNum2Vi","divViewCompBody00.edtSetNum2","visible","dsObjBindVi","edtSetNum2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSetNum2En","divViewCompBody00.edtSetNum2","readonly","dsObjBindEn","edtSetNum2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSetNum3Vi","divViewCompBody00.staSetNum3","visible","dsObjBindVi","staSetNum3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSetNum3En","divViewCompBody00.staSetNum3","enable","dsObjBindEn","staSetNum3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSetNum3Vi","divViewCompBody00.edtSetNum3","visible","dsObjBindVi","edtSetNum3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSetNum3En","divViewCompBody00.edtSetNum3","readonly","dsObjBindEn","edtSetNum3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSetNum4Vi","divViewCompBody00.staSetNum4","visible","dsObjBindVi","staSetNum4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSetNum4En","divViewCompBody00.staSetNum4","enable","dsObjBindEn","staSetNum4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSetNum4Vi","divViewCompBody00.edtSetNum4","visible","dsObjBindVi","edtSetNum4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSetNum4En","divViewCompBody00.edtSetNum4","readonly","dsObjBindEn","edtSetNum4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSetNum5Vi","divViewCompBody00.staSetNum5","visible","dsObjBindVi","staSetNum5");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSetNum5En","divViewCompBody00.staSetNum5","enable","dsObjBindEn","staSetNum5");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSetNum5Vi","divViewCompBody00.edtSetNum5","visible","dsObjBindVi","edtSetNum5");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSetNum5En","divViewCompBody00.edtSetNum5","readonly","dsObjBindEn","edtSetNum5");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSetNum6Vi","divViewCompBody00.staSetNum6","visible","dsObjBindVi","staSetNum6");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSetNum6En","divViewCompBody00.staSetNum6","enable","dsObjBindEn","staSetNum6");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSetNum6Vi","divViewCompBody00.edtSetNum6","visible","dsObjBindVi","edtSetNum6");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSetNum6En","divViewCompBody00.edtSetNum6","readonly","dsObjBindEn","edtSetNum6");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSetNum7Vi","divViewCompBody00.staSetNum7","visible","dsObjBindVi","staSetNum7");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSetNum7En","divViewCompBody00.staSetNum7","enable","dsObjBindEn","staSetNum7");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSetNum7Vi","divViewCompBody00.edtSetNum7","visible","dsObjBindVi","edtSetNum7");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSetNum7En","divViewCompBody00.edtSetNum7","readonly","dsObjBindEn","edtSetNum7");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSetNum8Vi","divViewCompBody00.staSetNum8","visible","dsObjBindVi","staSetNum8");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSetNum8En","divViewCompBody00.staSetNum8","enable","dsObjBindEn","staSetNum8");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSetNum8Vi","divViewCompBody00.edtSetNum8","visible","dsObjBindVi","edtSetNum8");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSetNum8En","divViewCompBody00.edtSetNum8","readonly","dsObjBindEn","edtSetNum8");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSetChar1Vi","divViewCompBody00.staSetChar1","visible","dsObjBindVi","staSetChar1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSetChar1En","divViewCompBody00.staSetChar1","enable","dsObjBindEn","staSetChar1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSetChar1Vi","divViewCompBody00.edtSetChar1","visible","dsObjBindVi","edtSetChar1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSetChar1En","divViewCompBody00.edtSetChar1","readonly","dsObjBindEn","edtSetChar1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSetChar2Vi","divViewCompBody00.staSetChar2","visible","dsObjBindVi","staSetChar2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSetChar2En","divViewCompBody00.staSetChar2","enable","dsObjBindEn","staSetChar2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSetChar2Vi","divViewCompBody00.edtSetChar2","visible","dsObjBindVi","edtSetChar2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSetChar2En","divViewCompBody00.edtSetChar2","readonly","dsObjBindEn","edtSetChar2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSetChar3Vi","divViewCompBody00.staSetChar3","visible","dsObjBindVi","staSetChar3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSetChar3En","divViewCompBody00.staSetChar3","enable","dsObjBindEn","staSetChar3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSetChar00Vi","divViewCompBody00.edtSetChar00","visible","dsObjBindVi","edtSetChar00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSetChar00En","divViewCompBody00.edtSetChar00","readonly","dsObjBindEn","edtSetChar00");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSetChar4Vi","divViewCompBody00.staSetChar4","visible","dsObjBindVi","staSetChar4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSetChar4En","divViewCompBody00.staSetChar4","enable","dsObjBindEn","staSetChar4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSetChar03Vi","divViewCompBody00.edtSetChar03","visible","dsObjBindVi","edtSetChar03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSetChar03En","divViewCompBody00.edtSetChar03","readonly","dsObjBindEn","edtSetChar03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSetChar5Vi","divViewCompBody00.staSetChar5","visible","dsObjBindVi","staSetChar5");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSetChar5En","divViewCompBody00.staSetChar5","enable","dsObjBindEn","staSetChar5");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSetChar04Vi","divViewCompBody00.edtSetChar04","visible","dsObjBindVi","edtSetChar04");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSetChar04En","divViewCompBody00.edtSetChar04","readonly","dsObjBindEn","edtSetChar04");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSetChar6Vi","divViewCompBody00.staSetChar6","visible","dsObjBindVi","staSetChar6");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSetChar6En","divViewCompBody00.staSetChar6","enable","dsObjBindEn","staSetChar6");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSetChar05Vi","divViewCompBody00.edtSetChar05","visible","dsObjBindVi","edtSetChar05");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSetChar05En","divViewCompBody00.edtSetChar05","readonly","dsObjBindEn","edtSetChar05");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSetChar7Vi","divViewCompBody00.staSetChar7","visible","dsObjBindVi","staSetChar7");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSetChar7En","divViewCompBody00.staSetChar7","enable","dsObjBindEn","staSetChar7");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSetChar06Vi","divViewCompBody00.edtSetChar06","visible","dsObjBindVi","edtSetChar06");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSetChar06En","divViewCompBody00.edtSetChar06","readonly","dsObjBindEn","edtSetChar06");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSetChar8Vi","divViewCompBody00.staSetChar8","visible","dsObjBindVi","staSetChar8");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staSetChar8En","divViewCompBody00.staSetChar8","enable","dsObjBindEn","staSetChar8");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSetChar07Vi","divViewCompBody00.edtSetChar07","visible","dsObjBindVi","edtSetChar07");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSetChar07En","divViewCompBody00.edtSetChar07","readonly","dsObjBindEn","edtSetChar07");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnAddUnderRowVi","btnAddUnderRow","visible","dsObjBindVi","btnAddUnderRow");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnAddUnderRowEn","btnAddUnderRow","enable","dsObjBindEn","btnAddUnderRow");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnAddSameRowVi","btnAddSameRow","visible","dsObjBindVi","btnAddSameRow");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnAddSameRowEn","btnAddSameRow","enable","dsObjBindEn","btnAddSameRow");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnDelMenuVi","btnDelMenu","visible","dsObjBindVi","btnDelMenu");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnDelMenuEn","btnDelMenu","enable","dsObjBindEn","btnDelMenu");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","divViewCompBody00.spnAryOrdr","value","dsCd","ARY_ORDR");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("BSysCodeTree.xfdl", function(exports) {
        /**
         * @파일명       	: BSysCodeTree.xfdl
         * @생성자       	: 송태봉
         * @생성일자     	: 2017. 9. 14.
         * @설명			: 코드관리
         * @최종수정자		: 안성민
         * @최종수정일자	: 2017. 11. 03.
        */  

        
        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {

        	var param = [
        					{code:"CM34"} //  언어
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
          * @desc     	: 폼 onload이벤트
          */
        this.fnFormOnload = function(obj,e)
        {
        	gfnSetObj("A");
        	this.fnSearch();
        }

        /**
        	@함수명	fnPreSave()
        	@desc   	저장전 처리
        */ 
        this.fnPreSave = function()
        {
        	this.dsCheckId.deleteAll();
        	
        	var arr = [];
        	for(var i = 0 ; i < this.dsCd.rowcount ; i++){
        		if(gfnIsNull(this.dsCd.getColumn(i,"CD_GRP"))){
        			var msg = gfnMultiLabel("EPRO_LABEL_00761"); //"코드그룹을 입력 해 주세요.";
        			var type = gfnMultiLabel("EPRO_LABEL_00753"); //"필수";
        			var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        			arr.push(objParam);
        			
        		} else if(gfnIsNull(this.dsCd.getColumn(i,"CD_CLS"))){
        			var msg = gfnMultiLabel("EPRO_LABEL_00762"); //"코드클래스를 입력 해 주세요.";
        			var type = gfnMultiLabel("EPRO_LABEL_00753"); //"필수";
        			var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        			arr.push(objParam);
        			
        		} else if(gfnIsNull(this.dsCd.getColumn(i,"CD"))){
        			var msg = gfnMultiLabel("EPRO_LABEL_00763"); //"코드를 입력 해 주세요.";
        			var type = gfnMultiLabel("EPRO_LABEL_00753"); //"필수";
        			var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        			arr.push(objParam);
        			
        		} else if(gfnIsNull(this.dsCd.getColumn(i,"CD_NM_LO"))){
        			var msg = gfnMultiLabel("EPRO_LABEL_00764"); //"코드명(한)을 입력 해 주세요.";
        			var type = gfnMultiLabel("EPRO_LABEL_00753"); //"필수";
        			var objParam = {agv_msg:msg, agv_type:type, agv_isEs:"Y"};
        			arr.push(objParam);
        		}
        		
        		if(this.dsCd.getColumn(i,"CD_ID") != this.dsCd.getColumn(i,"OLD_CD_ID")){
        			var nRow = this.dsCheckId.addRow();
        			this.dsCheckId.setColumn(nRow,"CD_ID",this.dsCd.getColumn(i,"CD_ID"));
        		}
        	}
        	
        	if(!gfnValidate(this, false, arr)) return false;
        	
        	if(this.dsCheckId.rowcount != 0){
        		var sSvcID = "checkSysCdId";
        		var sController = "epro.sys.service.BSysService.checkSysCdId";
        		var sInDatasets = "dsCheckId=dsCheckId";
        		var sOutDatasets = "dsCheckId=dsCheckId";
        		var sCallbackFunc = "fnTrCallBack";	
        						
        		gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        		
        		return false;
        	}

        	return true;
        }
        /**
        	@함수명	코드중복체크
        	@desc   	fnDupCheck
        */ 
        this.fnDupCheck = function(cRow)
        {
        	var arr = [];
        	// 비교할 코드
        	var cdId = this.dsCd.getColumn(cRow, "CD_ID");
        	//전 비교
        	var findCdRow = this.dsCd.findRow("CD_ID", cdId, 0, cRow);
        	// 후 비교
        	if(findCdRow < 0){
        		findCdRow = this.dsCd.findRow("CD_ID", cdId, cRow+1, this.dsCd.rowcount);
        	}
        	
        	// 코드 중복체크 (찾은 ROW과 현재 ROW를 비교한다.)
        	if(findCdRow >= 0 && findCdRow != cRow){
        		var msg = gfnMultiLabel("EPRO_LABEL_00765");
        		var type = gfnMultiLabel("EPRO_LABEL_00935");
        		var objParam = {agv_msg:msg, agv_type:type,agv_isEs:"Y"};
        		var cd =  this.dsCd.getColumn(cRow, "CD");
        		// 값 초기화
        		var cdRow = (cdId.length - cd.length);
        		var slice = cdId.slice(0,cdRow);
        		this.dsCd.setColumn(cRow, "CD_ID", slice);
        		this.dsCd.setColumn(cRow, "CD", "");
        		
        		arr.push(objParam);
        	}
        	
        	return gfnValidate(this, true, arr);
        }
        /**
        	@함수명	fnSave()
        	@desc   	저장
        */ 
        this.fnSave = function()
        {
        	if(!this.fnPreSave()) return;
        	
        	if(!gfnConfirm("EPRO_LABEL_00001")) return;
        	
        	var sSvcID = "saveSysCd";
        	var sController = "epro.sys.service.BSysService.saveSysCd";
        	var sInDatasets = "dsCd=dsCd:A dsCdRsrc=dsCdRsrc:A";
        	var sOutDatasets = "dsCd=dsCd dsCdRsrc=dsCdRsrc";
        	var sCallbackFunc = "fnTrCallBack";	
        					
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
        	@함수명	fnSearch()
        	@desc   	조회 프로세스
        	
        */ 
        this.fnSearch = function()
        {
        	var sSvcID = "readSysCdTree";
        	var sController = "epro.sys.service.BSysService.readSysCdTree";
        	var sInDatasets = "dsCd=dsCd"
        	var sOutDatasets = "dsCd=dsCd dsCdRsrc=dsCdRsrc";
        	var sCallbackFunc = "fnTrCallBack";
        	
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
        	@함수명	fnTrCallBack()
        	@desc   	Transaction Callback함수
        */      
        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	switch(strSvcID){
        		case "readSysCdTree" :
        			this.grdTree.set_treepathdelimiter("/") 
        			this.grdTree.set_enableevent(false);
        			this.dsCdRsrc.filter("MM_CD_ID=='"+this.dsCd.getColumn(this.dsCd.rowposition, "CD_ID")+"'");
        			for(var i=0; i<this.dsTreeStatus.getRowCount(); i++) {
        				var treeRow = this.grdTree.getTreeRow(this.dsTreeStatus.getColumn(i, "PATH"))
        				if(-1 < treeRow) {
        					this.grdTree.setTreeStatus(treeRow, true)
        				}
        			}
        			this.grdTree.set_enableevent(true);
        		break;
        		
        		case "checkSysCdId" :
        			if(strErrMsg != ""){
        				var arr = [];
        				var str = strErrMsg.split(',');
        				for(var i = 0 ; i < str.length ; i++){
        					var msg = str[i] + gfnMultiLabel("EPRO_LABEL_00765"); //" 코드ID가 중복됩니다.";
        					var type = gfnMultiLabel("EPRO_LABEL_00757"); //"중복체크";
        					var objParam = {agv_msg:msg, agv_type:type};
        					arr.push(objParam);
        				}
        				
        				if(!gfnValidate(this, false, arr)) return;
        			}
        			
        			if(!gfnConfirm("EPRO_LABEL_00001")) return;
        			
        			var sSvcID = "saveSysCd";
        			var sController = "epro.sys.service.BSysService.saveSysCd";
        			var sInDatasets = "dsCd=dsCd:A dsCdRsrc=dsCdRsrc:A";
        			var sOutDatasets = "dsCd=dsCd dsCdRsrc=dsCdRsrc";
        			var sCallbackFunc = "fnTrCallBack";	
        							
        			gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        			
        		break;
        		
        		case "saveSysCd" :
        			this.dsCd.applyChange();
        			gfnAlert(strErrMsg);
        			this.fnSearch();
        			
        		break;
        		
        		default:
        		break;	
        	}
        }

        /**
        	@함수명	fnAddUnderRow()
        	@desc   	하위레벨 코드 추가
        */    
        this.fnAddUnderRow = function(obj,e)
        {
        	if(gfnIsNull(this.dsCd.getColumn(this.dsCd.rowposition,"CD_GRP"))){
        		gfnAlert("EPRO_LABEL_00761");
        		return;
        		
        	} else if(gfnIsNull(this.dsCd.getColumn(this.dsCd.rowposition,"CD_CLS"))){
        		gfnAlert("EPRO_LABEL_00762");
        		return;
        	
        	} else if(gfnIsNull(this.dsCd.getColumn(this.dsCd.rowposition,"CD"))){
        		gfnAlert("EPRO_LABEL_00763");
        		return;
        	}

        	var inRow = "";
        	var nRow = this.dsCd.rowposition;
        	var bro = this.grdTree.getTreeSiblingRow(nRow,1,true)
        	//형제노드가 있을때
        	if(bro > -1){
        		inRow = bro;
        	} else{
        		//자식이 없는 노드
        		if(this.grdTree.isTreeLeafRow(nRow)){
        			inRow = nRow + 1;
        		} else{//자식이 있는노드
        			inRow = this.grdTree.getTreeChildRow(nRow,-1,true); //자식의 마지막로우
        			if(0 < this.grdTree.getTreeChildRow(inRow,-1,true)){ //자식의 자식이 있는지 확인
        				inRow = this.grdTree.getTreeChildRow(inRow,-1,true) //손주의 마지막 로우
        			}
        			inRow+=1 //확인된 마지막 로우에 +1
        		}
        	}
        	
        	this.dsCd.insertRow(inRow);
        	this.dsCd.setColumn(inRow, "CD_ID", "");
        	this.dsCd.setColumn(inRow, "LEVEL", this.dsCd.getColumn(nRow,"LEVEL") + 1);	
        	this.dsCd.setColumn(inRow, "UP_CD_ID", this.dsCd.getColumn(nRow,"CD_ID"));
        	this.dsCd.setColumn(inRow, "CD_GRP", this.dsCd.getColumn(nRow,"CD_GRP"));
        	this.dsCd.setColumn(inRow, "ALT_USE", "Y");
        	
        	this.grdTree.setTreeStatus(this.grdTree.getTreeRow(nRow), true);

        	this.fnAddRsrc(inRow);
        	
        }

        /**
        	@함수명	fnAddSameRow()
        	@desc   	동일레벨 코드 추가
        */   
        this.fnAddSameRow = function(obj,e)
        {
        	var inRow = "";
        	var nRow = this.dsCd.rowposition;
        	var par = this.grdTree.getTreeParentRow(nRow)
        	//부모가 있는경우
        	if(par > -1){
        		for(var i = par+1; i < this.dsCd.rowcount ; i++){
        			if((Number(this.dsCd.getColumn(par,"LEVEL")) == Number(this.dsCd.getColumn(i,"LEVEL"))) 
        				|| Number(this.dsCd.getColumn(par,"LEVEL")) > Number(this.dsCd.getColumn(i,"LEVEL"))){
        				inRow = i;
        				break;
        			}
        			if(inRow == "") inRow = this.dsCd.rowcount;
        		}
        		
        	} else {
        		inRow = this.dsCd.rowcount;
        	}
        	this.dsCd.insertRow(inRow);
        	this.dsCd.setColumn(inRow, "CD_ID", "");
        	this.dsCd.setColumn(inRow, "LEVEL", this.dsCd.getColumn(nRow,"LEVEL"));
        	this.dsCd.setColumn(inRow, "ALT_USE", "Y");
        	
        	if(par > -1){
        		this.dsCd.setColumn(inRow, "UP_CD_ID", this.dsCd.getColumn(par,"CD_ID"));
        		this.dsCd.setColumn(inRow, "CD_GRP", this.dsCd.getColumn(par,"CD_GRP"));
        	}
        	
        	this.fnAddRsrc(inRow);
        }

        /**
        	@함수명	fnDelCode()
        	@desc   	코드 삭제
        */ 
        this.fnDelCode = function(obj,e)
        {
        	var nRow = this.dsCd.rowposition;
        	trace("nRow => "+nRow)
        	var child = this.grdTree.getTreeChildCount(nRow);
        	var msg = "";
        	
        	if(child == 0) msg = gfnMultiLabel("EPRO_LABEL_00766"); //"선택된 코드를 삭제하시겠습니까?";
        	else msg = gfnMultiLabel("EPRO_LABEL_00767"); //"선택된 코드와 하위레벨코드가 함께 삭제됩니다.\n삭제하시겠습니까?"
        	
        	if(!gfnConfirm(msg)) return;
        	
        	var bro = this.grdTree.getTreeSiblingRow(nRow,1)
        	var tbro = this.grdTree.getTreeSiblingRow(nRow,-1)
        	//형제노드가 있을때
        	if(bro > -1){
        		for(var i = bro - 1 ; i >= nRow ; i--){
        			this.fnDelCdRsrc(i)
        			this.dsCd.deleteRow(i);
        		}
        	} else {
        		if(child == 0) {
        			this.fnDelCdRsrc(nRow)
        			this.dsCd.deleteRow(nRow);
        		} else {
        			child = this.grdTree.getTreeChildRow(nRow,-1);
        			
        			for(var i = child ; i >= nRow ; i--){
        				this.fnDelCdRsrc(i)
        				this.dsCd.deleteRow(i);
        			}
        		}
        	}
        	if(0 > bro) {
        		this.dsCd.set_rowposition(tbro)
        	}
        	
        	this.fnDsFilter();
        }

        this.fnDelCdRsrc = function(row)
        {
        	if(this.dsCd.getRowType(row) == "2") {
        		this.dsCdRsrc.filter("TEMPKEY=='"+this.dsCd.getColumn(row, "TEMPKEY")+"'");
        	} else {
        		this.dsCdRsrc.filter("MM_CD_ID=='"+this.dsCd.getColumn(row, "CD_ID")+"'");
        	}
        	this.dsCdRsrc.deleteAll();
        }

        /**
        	@함수명	fnOncolumnchanged()
        	@desc   	컬럼의 내용 변경후 이벤트
        */ 
        this.fnOncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "CD_GRP" || e.columnid == "CD_CLS" || e.columnid == "CD"){
        		var grp = obj.getColumn(e.row,"CD_GRP");
        		var cls = obj.getColumn(e.row,"CD_CLS");
        		var cd  = obj.getColumn(e.row,"CD")
        		
        		if(gfnIsNull(grp)) grp = "";
        		if(gfnIsNull(cls)) cls = "";
        		if(gfnIsNull(cd))  cd = "";
        		
        		var cdId = grp + cls + cd;
        		obj.setColumn(e.row,"CD_ID",cdId);
        				
        		if(obj.getColumn(e.row,"LEVEL") == "1"){
        			obj.setColumn(e.row,"CD_ID2",grp);
        		
        		} else if(obj.getColumn(e.row,"LEVEL") == "2"){
        			obj.setColumn(e.row,"CD_ID2",grp+cls);
        			
        		} else{
        			obj.setColumn(e.row,"CD_ID2",cdId);
        		}
        		this.fnDsFilter()
        		this.fnRsrcCdIdChange(e.row);
        	}
        	if(e.columnid == "CD"){
        		// 중복체크 
        		this.fnDupCheck(e.row);
        	}
        	
        	
        }
        /**
        	@함수명	fnRsrcCdIdChange()
        	@desc   	언어의 CD_ID 변경
        */ 
        this.fnRsrcCdIdChange = function(row)
        {	
        	this.dsCdRsrc.set_enableevent(false);
        	for(var i=0; i<this.dsCdRsrc.getRowCount(); i++) {
        		this.dsCdRsrc.setColumn(i, "MM_CD_ID", this.dsCd.getColumn(row, "CD_ID"))
        	}
        	this.dsCdRsrc.set_enableevent(true);
        }

        /**
        	@함수명	fnOnrowposchanged()
        	@desc   	그리드의 rowposition 변경
        */ 
        this.fnOnrowposchanged = function(obj,e)
        {
        // 	// insert 상태일때
        // 	if(obj.getRowType(e.newrow) == "2") {
        // 		gfnSetObj("A");
        // 	// level이 1일때	
        // 	}else if(this.dsCd.getColumn(e.newrow, "LEVEL") == 1){
        // 		gfnSetObj("C");
        // 	// RowType 텅빈 상태가 아닐때	
        // 	}else if(obj.getRowType(e.newrow) != "0") {
        // 		gfnSetObj("B");
        // 	}
        // 	
        	this.fnDsFilter();
        }

        /**
        	@함수명	fnOncelldblclick()
        	@desc   	그리드 트리셀 더블클릭
        */ 
        this.fnOncelldblclick = function(obj,e)
        {
        	var nRow = this.grdTree.getTreeRow(this.dsCd.rowposition);
        	
        	if(this.grdTree.getTreeStatus(nRow) == 0){
        		this.grdTree.setTreeStatus(nRow, true);
        		
        	} else if(this.grdTree.getTreeStatus(nRow) == 1){
        		this.grdTree.setTreeStatus(nRow, false);
        	}	
        }

        /**
        	@함수명	fnAddRsrc()
        	@desc   	언어추가
        */ 
        this.fnAddRsrc = function(inRow)
        {
        	this.dsCdRsrc.set_enableevent(false);
        	this.dsCdRsrc.filter("");
        	var tempKey = gfnMakeTempKey();
        	this.dsCd.setColumn(inRow, "TEMPKEY", tempKey);
        	for(var i=0; i<this.dsCdCM34.getRowCount(); i++) {
        		var nRow = this.dsCdRsrc.addRow();
        		this.dsCdRsrc.setColumn(nRow, "TEMPKEY", tempKey);
        		this.dsCdRsrc.setColumn(nRow, "CD", this.dsCdRsrc.getColumn(i, "CD"));
        		this.dsCdRsrc.setColumn(nRow, "CD_ID", this.dsCdRsrc.getColumn(i, "CD_ID"));
        		this.dsCdRsrc.setColumn(nRow, "CD_NM_LO", this.dsCdRsrc.getColumn(i, "CD_NM_LO"));
        	}
        	
        	this.fnDsFilter();
        	this.dsCdRsrc.set_enableevent(true);
        }

        /**
        	@함수명	fnDsFilter()
        	@desc   	그리드 필터설정
        */
        this.fnDsFilter = function() 
        {
        		if(this.dsCd.getRowType(this.dsCd.rowposition) == "2"){
        			this.dsCdRsrc.filter("TEMPKEY=='"+this.dsCd.getColumn(this.dsCd.rowposition, "TEMPKEY")+"'");
        		} else {
        			this.dsCdRsrc.filter("MM_CD_ID=='"+this.dsCd.getColumn(this.dsCd.rowposition, "CD_ID")+"' && TEMPKEY==''");
        		}
        }	

        /**
        	@함수명	fnOncellclick()
        	@desc   	그리드 셀 클릭시 필터변경
        */ 
        this.fnOncellclick = function(obj,e)
        {
        	this.fnDsFilter();
        }

        /**
        	@함수명	fnGrdTreeOntreeStatusChanged()
        	@desc   	
        */ 
        this.fnGrdTreeOntreeStatusChange = function(obj,e)
        {
        	if(e.reason == 1) {
        		var nRow = this.dsTreeStatus.addRow();
        		this.dsTreeStatus.setColumn(nRow, "PATH", obj.getTreePath(e.realrow, true));
        		this.dsTreeStatus.setColumn(nRow, "STATUS", e.reason);
        	} else {
        		var row = this.dsTreeStatus.findRowAs("PATH", obj.getTreePath(e.realrow, true));
        		while(row > -1) {
        			this.dsTreeStatus.deleteRow(row);
        			row = this.dsTreeStatus.findRowAs("PATH", obj.getTreePath(e.realrow, true));
        		}
        		
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsCd.addEventHandler("oncolumnchanged", this.fnOncolumnchanged, this);
            this.dsCd.addEventHandler("onrowposchanged", this.fnOnrowposchanged, this);
            this.dsCdRsrc.addEventHandler("oncolumnchanged", this.fnOncolumnchanged, this);
            this.dsCdRsrc.addEventHandler("onrowposchanged", this.fnOnrowposchanged, this);
            this.dsCdCM34.addEventHandler("oncolumnchanged", this.fnOncolumnchanged, this);
            this.dsCdCM34.addEventHandler("onrowposchanged", this.fnOnrowposchanged, this);
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.grdTree.addEventHandler("cantreestatuschange", this.fnGrdTreeOntreeStatusChange, this);
            this.grdTree.addEventHandler("oncellclick", this.fnOncellclick, this);
            this.grdTree.addEventHandler("oncelldblclick", this.fnOncelldblclick, this);
            this.grdTree.addEventHandler("ontreestatuschanged", this.grdTree_ontreestatuschanged, this);
            this.btnAddUnderRow.addEventHandler("onclick", this.fnAddUnderRow, this);
            this.btnAddSameRow.addEventHandler("onclick", this.fnAddSameRow, this);
            this.btnDelMenu.addEventHandler("onclick", this.fnDelCode, this);

        };

        this.loadIncludeScript("BSysCodeTree.xfdl", true);

       
    };
}
)();
