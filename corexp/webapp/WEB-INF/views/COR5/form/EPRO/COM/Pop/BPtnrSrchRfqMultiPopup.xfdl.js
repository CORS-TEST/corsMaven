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
                this.set_name("BPtnrSrchRfqMultiPopup");
                this.set_titletext("업체검색멀티팝업(입찰)");
                this._setFormPosition(0,0,1100,800);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSrchOpt", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"BIZ_NO\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_NM\" size=\"256\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"MTRL_CD\" size=\"256\" type=\"STRING\"/><Column id=\"BTN\" size=\"256\" type=\"STRING\"/><Column id=\"PO_NO\" size=\"256\" type=\"STRING\"/><Column id=\"SRC_LVL_1\" size=\"256\" type=\"STRING\"/><Column id=\"SRC_LVL_2\" size=\"256\" type=\"STRING\"/><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CD_PTNR_CTGR\" size=\"256\" type=\"STRING\"/><Column id=\"ALT_AUTO\" size=\"256\" type=\"STRING\"/><Column id=\"CD_PORG_UNIT_STTS\" size=\"256\" type=\"STRING\"/><Column id=\"PO_DAY_STR\" size=\"256\" type=\"STRING\"/><Column id=\"PO_DAY_END\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAddList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTemp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdSR20", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btnRtn", "absolute", null, "454", "65", "24", "10", null, this);
            obj.set_expr("expr:gfnMultiLabel(\"EPRO_LABEL_00410\")");
            obj.getSetter("objNm").set("적용");
            obj.set_taborder("22");
            obj.set_text("적용");
            this.addChild(obj.name, obj);

            obj = new Grid("grdAddList", "absolute", "10", "483", null, null, "10", "10", this);
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_binddataset("dsAddList");
            obj.set_cellclickbound("cell");
            obj.getSetter("f_excel").set("N");
            obj.getSetter("f_sort").set("N");
            obj.set_taborder("28");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"120\"/><Column size=\"300\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"300\"/><Column band=\"right\" size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"VENDOR\"/><Cell col=\"1\" expr=\"\" text=\"사업자번호\"/><Cell col=\"2\" expr=\"\" text=\"협력사명\"/><Cell col=\"3\" expr=\"\" text=\"최종평가\"/><Cell col=\"4\" expr=\"\" text=\"최종평가일\"/><Cell col=\"5\" expr=\"\" text=\"협력사 구분\"/><Cell col=\"6\" expr=\"\" text=\"대표자명\"/><Cell col=\"7\" expr=\"\" text=\"주소\"/><Cell col=\"8\"/></Band><Band id=\"body\"><Cell style=\"color:EXPR(PTNR_STTS == &quot;Y&quot; ? 'red':'');color2:EXPR(PTNR_STTS == &quot;Y&quot; ? 'red':'');\" text=\"bind:SAP_VENDOR\"/><Cell col=\"1\" text=\"bind:BIZ_NO\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:PTNR_NM\"/><Cell col=\"3\" displaytype=\"number\" mask=\"###\" maskchar=\" \" text=\"bind:SCJD_EVAL_SCORE\"/><Cell col=\"4\" displaytype=\"normal\" text=\"bind:SCJD_CMPLT_DT\"/><Cell col=\"5\" style=\"align:left;color:EXPR(PTNR_STTS == &quot;Y&quot; ? 'red':'');color2:EXPR(PTNR_STTS == &quot;Y&quot; ? 'red':'');\" text=\"bind:CD_PORG_UNIT_STTS_NM\"/><Cell col=\"6\" style=\"align:center;\" text=\"bind:RPRSTV_NM\"/><Cell col=\"7\" style=\"align:left;\" text=\"bind:ADDR\"/><Cell col=\"8\" displaytype=\"button\" expr=\"expr:BTN==&quot;추가&quot;?gfnMultiLabel(&quot;EPRO_LABEL_00144&quot;):gfnMultiLabel(&quot;EPRO_LABEL_00172&quot;)\" text=\"bind:BTN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Tab("tabPtnr", "absolute", "10", "10", null, "436", "10", null, this);
            obj.set_scrollbars("autoboth");
            obj.set_tabindex("0");
            obj.set_taborder("29");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabRfqPtnr", this.tabPtnr);
            obj.set_text("입찰참여협력사");
            this.tabPtnr.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "53", null, null, "0", "28", this.tabPtnr.tabRfqPtnr);
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_binddataset("dsList");
            obj.set_cellclickbound("cell");
            obj.set_cellmovingtype("none");
            obj.getSetter("f_excel").set("N");
            obj.getSetter("f_sort").set("N");
            obj.set_taborder("4");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"120\"/><Column size=\"300\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"300\"/><Column band=\"right\" size=\"60\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"VENDOR\"/><Cell col=\"1\" expr=\"\" text=\"사업자번호\"/><Cell col=\"2\" expr=\"\" text=\"협력사명\"/><Cell col=\"3\" expr=\"\" text=\"최종평가\"/><Cell col=\"4\" expr=\"\" text=\"최종평가일\"/><Cell col=\"5\" expr=\"\" text=\"협력사구분\"/><Cell col=\"6\" expr=\"\" text=\"대표자명\"/><Cell col=\"7\" expr=\"\" text=\"주소\"/><Cell col=\"8\"/></Band><Band id=\"body\"><Cell style=\"color:EXPR(PTNR_STTS == &quot;Y&quot; ? 'red':'');color2:EXPR(PTNR_STTS == &quot;Y&quot; ? 'red':'');\" text=\"bind:SAP_VENDOR\"/><Cell col=\"1\" text=\"bind:BIZ_NO\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:PTNR_NM\"/><Cell col=\"3\" displaytype=\"number\" mask=\"###\" text=\"bind:SCJD_EVAL_SCORE\"/><Cell col=\"4\" text=\"bind:SCJD_CMPLT_DT\"/><Cell col=\"5\" displaytype=\"normal\" style=\"color:EXPR(PTNR_STTS == &quot;Y&quot; ? 'red':'');color2:EXPR(PTNR_STTS == &quot;Y&quot; ? 'red':'');\" text=\"bind:CD_PORG_UNIT_STTS_NM\"/><Cell col=\"6\" style=\"align:center;\" text=\"bind:RPRSTV_NM\"/><Cell col=\"7\" style=\"align:left;\" text=\"bind:ADDR\"/><Cell col=\"8\" displaytype=\"button\" expr=\"expr:BTN==&quot;추가&quot;?gfnMultiLabel(&quot;EPRO_LABEL_00144&quot;):gfnMultiLabel(&quot;EPRO_LABEL_00172&quot;)\" text=\"bind:BTN\"/></Band></Format></Formats>");
            this.tabPtnr.tabRfqPtnr.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "0", this.tabPtnr.tabRfqPtnr);
            obj.set_scrollbars("none");
            obj.set_taborder("0");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.tabPtnr.tabRfqPtnr.addChild(obj.name, obj);
            obj = new Static("staViewCompCond00", "absolute", "0", "5", null, "40", "0", null, this.tabPtnr.tabRfqPtnr);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("1");
            this.tabPtnr.tabRfqPtnr.addChild(obj.name, obj);
            obj = new Button("btnRfqSearch", "absolute", null, "13", "60", "24", "16", null, this.tabPtnr.tabRfqPtnr);
            obj.set_expr("expr:gfnMultiLabel(\"EPRO_LABEL_00005\")");
            obj.set_taborder("2");
            obj.set_text("조회");
            this.tabPtnr.tabRfqPtnr.addChild(obj.name, obj);
            obj = new Static("staMtrlCd", "absolute", "16", "13", "85", "24", null, null, this.tabPtnr.tabRfqPtnr);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_expr("expr:gfnMultiLabel(\"EPRO_LABEL_00104\")");
            obj.set_taborder("3");
            obj.set_text("품목명");
            this.tabPtnr.tabRfqPtnr.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "10.85%", "13", "169", "25", null, null, this.tabPtnr.tabRfqPtnr);
            this.tabPtnr.tabRfqPtnr.addChild(obj.name, obj);
            obj.set_codecolumn("MTRL_CD");
            obj.set_datacolumn("MTRL_NM");
            obj.set_innerdataset("dsTemp");
            obj.set_taborder("5");
            obj.set_text("Combo00");
            obj = new Combo("Combo01", "absolute", "749", "13", "120", "25", null, null, this.tabPtnr.tabRfqPtnr);
            this.tabPtnr.tabRfqPtnr.addChild(obj.name, obj);
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_innerdataset("@dsCdSR20");
            obj.set_taborder("6");
            obj.set_text("Combo01");
            obj = new Static("staPtnrNm00", "absolute", "629", "13", "117", "24", null, null, this.tabPtnr.tabRfqPtnr);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_expr("expr:gfnMultiLabel(\"EPRO_LABEL_00703\")");
            obj.set_taborder("7");
            obj.set_text("협력사 구분");
            this.tabPtnr.tabRfqPtnr.addChild(obj.name, obj);
            obj = new Tabpage("tabPreRfq", this.tabPtnr);
            obj.set_text("이전발주참조");
            this.tabPtnr.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "53", null, null, "0", "28", this.tabPtnr.tabPreRfq);
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_binddataset("dsList");
            obj.set_cellclickbound("cell");
            obj.getSetter("f_excel").set("N");
            obj.getSetter("f_sort").set("N");
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"120\"/><Column size=\"300\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"149\"/><Column size=\"150\"/><Column size=\"90\"/><Column size=\"266\"/><Column band=\"right\" size=\"60\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"VENDOR\"/><Cell col=\"1\" expr=\"\" text=\"사업자번호\"/><Cell col=\"2\" expr=\"\" text=\"협력사명\"/><Cell col=\"3\" expr=\"\" text=\"최종평가\"/><Cell col=\"4\" expr=\"\" text=\"최종평가일\"/><Cell col=\"5\" expr=\"\" text=\"발주일자\"/><Cell col=\"6\" expr=\"\" text=\"협력사구분\"/><Cell col=\"7\" expr=\"\" text=\"대표자명\"/><Cell col=\"8\" expr=\"\" text=\"주소\"/><Cell col=\"9\"/></Band><Band id=\"body\"><Cell style=\"color:EXPR(PTNR_STTS == &quot;Y&quot; ? 'red':'');color2:EXPR(PTNR_STTS == &quot;Y&quot; ? 'red':'');\" text=\"bind:SAP_VENDOR\"/><Cell col=\"1\" text=\"bind:BIZ_NO\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:PTNR_NM\"/><Cell col=\"3\" displaytype=\"number\" mask=\"###\" text=\"bind:SCJD_EVAL_SCORE\"/><Cell col=\"4\" text=\"bind:SCJD_CMPLT_DT\"/><Cell col=\"5\" maskchar=\" \" text=\"bind:PO_DAY\"/><Cell col=\"6\" displaytype=\"combo\" style=\"align:left;color:EXPR(PTNR_STTS == &quot;Y&quot; ? 'red':'');color2:EXPR(PTNR_STTS == &quot;Y&quot; ? 'red':'');\" text=\"bind:CD_PORG_UNIT_STTS_NM\"/><Cell col=\"7\" style=\"align:center;\" text=\"bind:RPRSTV_NM\"/><Cell col=\"8\"/><Cell col=\"9\" displaytype=\"button\" expr=\"expr:BTN==&quot;추가&quot;?gfnMultiLabel(&quot;EPRO_LABEL_00144&quot;):gfnMultiLabel(&quot;EPRO_LABEL_00172&quot;)\" text=\"bind:BTN\"/></Band></Format></Formats>");
            this.tabPtnr.tabPreRfq.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "0", this.tabPtnr.tabPreRfq);
            obj.set_scrollbars("none");
            obj.set_taborder("1");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.tabPtnr.tabPreRfq.addChild(obj.name, obj);
            obj = new Static("staViewCompCond00", "absolute", "0", "5", null, "40", "0", null, this.tabPtnr.tabPreRfq);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("2");
            this.tabPtnr.tabPreRfq.addChild(obj.name, obj);
            obj = new Button("btnPreSearch", "absolute", null, "14", "60", "24", "16", null, this.tabPtnr.tabPreRfq);
            obj.set_expr("expr:gfnMultiLabel(\"EPRO_LABEL_00005\")");
            obj.set_taborder("3");
            obj.set_text("조회");
            this.tabPtnr.tabPreRfq.addChild(obj.name, obj);
            obj = new Static("staMtrlCd", "absolute", "16", "13", "85", "24", null, null, this.tabPtnr.tabPreRfq);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_taborder("5");
            obj.set_text("품목명");
            this.tabPtnr.tabPreRfq.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "10.85%", "13", "169", "25", null, null, this.tabPtnr.tabPreRfq);
            this.tabPtnr.tabPreRfq.addChild(obj.name, obj);
            obj.set_codecolumn("MTRL_CD");
            obj.set_datacolumn("MTRL_NM");
            obj.set_innerdataset("@dsTemp");
            obj.set_taborder("8");
            obj.set_text("Combo00");
            obj = new Div("divPoDay", "absolute", "603", "13", "220", "24", null, null, this.tabPtnr.tabPreRfq);
            obj.getSetter("objNm").set("입찰완료일자");
            obj.style.set_padding("0 10 0 10");
            obj.set_taborder("9");
            obj.set_text("발주일자");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.tabPtnr.tabPreRfq.addChild(obj.name, obj);
            obj = new Static("staRfqEndDt", "absolute", "432", "13", "170", "24", null, null, this.tabPtnr.tabPreRfq);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("objNm").set("발주일자");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.style.set_cursor("auto");
            obj.set_taborder("10");
            obj.set_text("발주일자");
            this.tabPtnr.tabPreRfq.addChild(obj.name, obj);
            obj = new Tabpage("tabpage5", this.tabPtnr);
            obj.set_text("소싱그룹별 협력사");
            this.tabPtnr.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "53", null, null, "0", "28", this.tabPtnr.tabpage5);
            obj.set_autoenter("select");
            obj.set_binddataset("dsList");
            obj.set_cellclickbound("cell");
            obj.getSetter("f_excel").set("N");
            obj.getSetter("f_sort").set("N");
            obj.set_taborder("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"120\"/><Column size=\"300\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"300\"/><Column band=\"right\" size=\"60\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"VENDOR\"/><Cell col=\"1\" expr=\"\" text=\"사업자번호\"/><Cell col=\"2\" expr=\"\" text=\"협력사명\"/><Cell col=\"3\" expr=\"\" text=\"최종평가\"/><Cell col=\"4\" expr=\"\" text=\"최종평가일\"/><Cell col=\"5\" expr=\"\" text=\"협력사구분\"/><Cell col=\"6\" expr=\"\" text=\"대표자명\"/><Cell col=\"7\" expr=\"\" text=\"주소\"/><Cell col=\"8\"/></Band><Band id=\"body\"><Cell style=\"color:EXPR(PTNR_STTS == &quot;Y&quot; ? 'orangered':'');color2:EXPR(PTNR_STTS == &quot;Y&quot; ? 'orangered':'');\" text=\"bind:SAP_VENDOR\"/><Cell col=\"1\" style=\"color: ;\" text=\"bind:BIZ_NO\"/><Cell col=\"2\" cssclass=\"cell_link\" style=\"align:left;color2: ;\" text=\"bind:PTNR_NM\"/><Cell col=\"3\" displaytype=\"number\" mask=\"###\" maskchar=\" \" style=\"color: ;\" text=\"bind:SCJD_EVAL_SCORE\"/><Cell calendardisplaynulltype=\"none\" col=\"4\" style=\"color: ;\" text=\"bind:SCJD_CMPLT_DT\"/><Cell col=\"5\" displaytype=\"normal\" style=\"align:left;color:EXPR(PTNR_STTS == &quot;Y&quot; ? 'red':'');color2:EXPR(PTNR_STTS == &quot;Y&quot; ? 'red':'');\" text=\"bind:CD_PORG_UNIT_STTS_NM\"/><Cell col=\"6\" style=\"align:center;color2: ;\" text=\"bind:RPRSTV_NM\"/><Cell col=\"7\" style=\"align:left;color2: ;\" text=\"bind:ADDR\"/><Cell col=\"8\" displaytype=\"button\" expr=\"expr:BTN==&quot;추가&quot;?gfnMultiLabel(&quot;EPRO_LABEL_00144&quot;):gfnMultiLabel(&quot;EPRO_LABEL_00172&quot;)\" text=\"bind:BTN\"/></Band></Format></Formats>");
            this.tabPtnr.tabpage5.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "0", this.tabPtnr.tabpage5);
            obj.set_scrollbars("none");
            obj.set_taborder("2");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.tabPtnr.tabpage5.addChild(obj.name, obj);
            obj = new Static("staViewCompCond00", "absolute", "0", "5", null, "40", "0", null, this.tabPtnr.tabpage5);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("11");
            this.tabPtnr.tabpage5.addChild(obj.name, obj);
            obj = new Combo("cbo_cdPorgUnitStts", "absolute", "845", "13", "120", "25", null, null, this.tabPtnr.tabpage5);
            this.tabPtnr.tabpage5.addChild(obj.name, obj);
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_innerdataset("@dsCdSR20");
            obj.set_taborder("12");
            obj = new Static("stacdPorgUnitStts", "absolute", "725", "13", "117", "24", null, null, this.tabPtnr.tabpage5);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_expr("expr:gfnMultiLabel(\"EPRO_LABEL_00703\")");
            obj.set_taborder("13");
            obj.set_text("협력사 구분");
            this.tabPtnr.tabpage5.addChild(obj.name, obj);
            obj = new Edit("edPtnrNm", "absolute", "522", "13", "200", "24", null, null, this.tabPtnr.tabpage5);
            obj.getSetter("objNm").set("협력사명");
            obj.set_taborder("14");
            this.tabPtnr.tabpage5.addChild(obj.name, obj);
            obj = new Static("staMtrlCd", "absolute", "431", "13", "85", "24", null, null, this.tabPtnr.tabpage5);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_expr("expr:gfnMultiLabel(\"EPRO_LABEL_00376\")");
            obj.set_taborder("15");
            obj.set_text("협력사명");
            this.tabPtnr.tabpage5.addChild(obj.name, obj);
            obj = new Button("btnSrcGrpSearch", "absolute", null, "13", "60", "24", "16", null, this.tabPtnr.tabpage5);
            obj.set_expr("expr:gfnMultiLabel(\"EPRO_LABEL_00005\")");
            obj.set_taborder("16");
            obj.set_text("조회");
            this.tabPtnr.tabpage5.addChild(obj.name, obj);
            obj = new Div("divComp01", "absolute", "147", "13", "233", "23", null, null, this.tabPtnr.tabpage5);
            obj.set_taborder("17");
            obj.set_url("CCOMP::CompSrcType2.xfdl");
            this.tabPtnr.tabpage5.addChild(obj.name, obj);
            obj = new Static("staMtrlNm00", "absolute", "16", "13", "123", "24", null, null, this.tabPtnr.tabpage5);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_expr("expr:gfnMultiLabel(\"EPRO_LABEL_00464\")");
            obj.style.set_align("right middle");
            obj.set_taborder("18");
            obj.set_text("소싱그룹");
            this.tabPtnr.tabpage5.addChild(obj.name, obj);
            obj = new Tabpage("tabFavPtnr", this.tabPtnr);
            obj.set_text("즐겨찾기 등록협력사");
            this.tabPtnr.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "5", null, null, "0", "28", this.tabPtnr.tabFavPtnr);
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_binddataset("dsList");
            obj.set_cellclickbound("cell");
            obj.getSetter("f_excel").set("N");
            obj.getSetter("f_sort").set("N");
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"120\"/><Column size=\"300\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"300\"/><Column band=\"right\" size=\"60\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"VENDOR\"/><Cell col=\"1\" expr=\"\" text=\"사업자번호\"/><Cell col=\"2\" expr=\"\" text=\"협력사명\"/><Cell col=\"3\" expr=\"\" text=\"최종평가\"/><Cell col=\"4\" expr=\"\" text=\"최종평가일\"/><Cell col=\"5\" expr=\"\" text=\"협력사구분\"/><Cell col=\"6\" expr=\"\" text=\"대표자명\"/><Cell col=\"7\" expr=\"\" text=\"주소\"/><Cell col=\"8\"/></Band><Band id=\"body\"><Cell style=\"color:EXPR(PTNR_STTS == &quot;Y&quot; ? 'red':'');color2:EXPR(PTNR_STTS == &quot;Y&quot; ? 'red':'');\" text=\"bind:SAP_VENDOR\"/><Cell col=\"1\" text=\"bind:BIZ_NO\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:PTNR_NM\"/><Cell col=\"3\" displaytype=\"number\" mask=\"###\" text=\"bind:SCJD_EVAL_SCORE\"/><Cell col=\"4\" text=\"bind:SCJD_CMPLT_DT\"/><Cell col=\"5\" displaytype=\"normal\" style=\"align:left;color:EXPR(PTNR_STTS == &quot;Y&quot; ? 'red':'');color2:EXPR(PTNR_STTS == &quot;Y&quot; ? 'red':'');\" text=\"bind:CD_PORG_UNIT_STTS_NM\"/><Cell col=\"6\" style=\"align:center;\" text=\"bind:RPRSTV_NM\"/><Cell col=\"7\" style=\"align:left;\" text=\"bind:ADDR\"/><Cell col=\"8\" displaytype=\"button\" expr=\"expr:BTN==&quot;추가&quot;?gfnMultiLabel(&quot;EPRO_LABEL_00144&quot;):gfnMultiLabel(&quot;EPRO_LABEL_00172&quot;)\" text=\"bind:BTN\"/></Band></Format></Formats>");
            this.tabPtnr.tabFavPtnr.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "0", this.tabPtnr.tabFavPtnr);
            obj.set_scrollbars("none");
            obj.set_taborder("1");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.tabPtnr.tabFavPtnr.addChild(obj.name, obj);
            obj = new Tabpage("tabComPtnr", this.tabPtnr);
            obj.set_text("협력사공통");
            this.tabPtnr.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "53", null, null, "0", "28", this.tabPtnr.tabComPtnr);
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_binddataset("dsList");
            obj.set_cellclickbound("cell");
            obj.getSetter("f_excel").set("N");
            obj.getSetter("f_sort").set("N");
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"120\"/><Column size=\"300\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"300\"/><Column band=\"right\" size=\"60\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"VENDOR\"/><Cell col=\"1\" expr=\"\" text=\"사업자번호\"/><Cell col=\"2\" expr=\"\" text=\"협력사명\"/><Cell col=\"3\" expr=\"\" text=\"최종평가\"/><Cell col=\"4\" expr=\"\" text=\"최종평가일\"/><Cell col=\"5\" expr=\"\" text=\"협력사구분\"/><Cell col=\"6\" expr=\"\" text=\"대표자명\"/><Cell col=\"7\" expr=\"\" text=\"주소\"/><Cell col=\"8\"/></Band><Band id=\"body\"><Cell style=\"color:EXPR(PTNR_STTS == &quot;Y&quot; ? 'orangered':'');color2:EXPR(PTNR_STTS == &quot;Y&quot; ? 'orangered':'');\" text=\"bind:SAP_VENDOR\"/><Cell col=\"1\" style=\"color: ;\" text=\"bind:BIZ_NO\"/><Cell col=\"2\" cssclass=\"cell_link\" style=\"align:left;color2: ;\" text=\"bind:PTNR_NM\"/><Cell col=\"3\" displaytype=\"number\" mask=\"###\" style=\"color: ;\" text=\"bind:SCJD_EVAL_SCORE\"/><Cell calendardisplaynulltype=\"none\" col=\"4\" maskchar=\" \" style=\"color: ;\" text=\"bind:SCJD_CMPLT_DT\"/><Cell col=\"5\" displaytype=\"normal\" style=\"align:left;color:EXPR(PTNR_STTS == &quot;Y&quot; ? 'red':'');color2:EXPR(PTNR_STTS == &quot;Y&quot; ? 'red':'');\" text=\"bind:CD_PORG_UNIT_STTS_NM\"/><Cell col=\"6\" style=\"align:center;color2: ;\" text=\"bind:RPRSTV_NM\"/><Cell col=\"7\" style=\"align:left;color2: ;\" text=\"bind:ADDR\"/><Cell col=\"8\" displaytype=\"button\" expr=\"expr:BTN==&quot;추가&quot;?gfnMultiLabel(&quot;EPRO_LABEL_00144&quot;):gfnMultiLabel(&quot;EPRO_LABEL_00172&quot;)\" text=\"bind:BTN\"/></Band></Format></Formats>");
            this.tabPtnr.tabComPtnr.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "0", this.tabPtnr.tabComPtnr);
            obj.set_scrollbars("none");
            obj.set_taborder("1");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.tabPtnr.tabComPtnr.addChild(obj.name, obj);
            obj = new Static("staViewCompCond00", "absolute", "0", "5", null, "40", "0", null, this.tabPtnr.tabComPtnr);
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_taborder("2");
            this.tabPtnr.tabComPtnr.addChild(obj.name, obj);
            obj = new Button("btnComSearch", "absolute", null, "13", "60", "24", "16", null, this.tabPtnr.tabComPtnr);
            obj.set_expr("expr:gfnMultiLabel(\"EPRO_LABEL_00005\")");
            obj.set_taborder("3");
            obj.set_text("조회");
            this.tabPtnr.tabComPtnr.addChild(obj.name, obj);
            obj = new Static("staMtrlCd", "absolute", "16", "13", "100", "24", null, null, this.tabPtnr.tabComPtnr);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_expr("expr:gfnMultiLabel(\"EPRO_LABEL_00376\")");
            obj.set_taborder("5");
            obj.set_text("협력사명");
            this.tabPtnr.tabComPtnr.addChild(obj.name, obj);
            obj = new Static("staPtnrNm", "absolute", "362", "13", "115", "24", null, null, this.tabPtnr.tabComPtnr);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_expr("expr:gfnMultiLabel(\"EPRO_LABEL_00149\")");
            obj.set_taborder("6");
            obj.set_text("사업자번호");
            this.tabPtnr.tabComPtnr.addChild(obj.name, obj);
            obj = new Edit("edBizNo", "absolute", "482", "13", "200", "24", null, null, this.tabPtnr.tabComPtnr);
            obj.getSetter("objNm").set("협력사명");
            obj.set_taborder("7");
            this.tabPtnr.tabComPtnr.addChild(obj.name, obj);
            obj = new Edit("edPtnrNm", "absolute", "116", "13", "200", "24", null, null, this.tabPtnr.tabComPtnr);
            obj.getSetter("objNm").set("협력사명");
            obj.set_taborder("8");
            this.tabPtnr.tabComPtnr.addChild(obj.name, obj);
            obj = new Combo("cbo_cdPorgUnitStts", "absolute", "821", "13", "120", "25", null, null, this.tabPtnr.tabComPtnr);
            this.tabPtnr.tabComPtnr.addChild(obj.name, obj);
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_innerdataset("@dsCdSR20");
            obj.set_taborder("9");
            obj = new Static("stacdPorgUnitStts", "absolute", "701", "13", "117", "24", null, null, this.tabPtnr.tabComPtnr);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_expr("expr:gfnMultiLabel(\"EPRO_LABEL_00703\")");
            obj.set_taborder("10");
            obj.set_text("협력사 구분");
            this.tabPtnr.tabComPtnr.addChild(obj.name, obj);

            obj = new CheckBox("chAltAuto", "absolute", "78.09%", "12", null, "23", "10.64%", null, this);
            obj.set_expr("expr:gfnMultiLabel(\"EPRO_LABEL_00807\")");
            obj.set_falsevalue("N");
            obj.set_taborder("30");
            obj.set_text("전장업체만조회");
            obj.set_truevalue("Y");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tabPtnr.tabRfqPtnr,
            	//-- Layout function
            	function(p) {
            		p.set_text("입찰참여협력사");

            	}
            );
            this.tabPtnr.tabRfqPtnr.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tabPtnr.tabPreRfq,
            	//-- Layout function
            	function(p) {
            		p.set_text("이전발주참조");

            	}
            );
            this.tabPtnr.tabPreRfq.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tabPtnr.tabpage5,
            	//-- Layout function
            	function(p) {
            		p.set_text("소싱그룹별 협력사");

            	}
            );
            this.tabPtnr.tabpage5.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tabPtnr.tabFavPtnr,
            	//-- Layout function
            	function(p) {
            		p.set_text("즐겨찾기 등록협력사");

            	}
            );
            this.tabPtnr.tabFavPtnr.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tabPtnr.tabComPtnr,
            	//-- Layout function
            	function(p) {
            		p.set_text("협력사공통");

            	}
            );
            this.tabPtnr.tabComPtnr.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1100, 800, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("업체검색멀티팝업(입찰)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","tabPtnr.tabpage5.edPtnrNm","value","dsSrchOpt","PTNR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","tabPtnr.tabpage5.cbo_cdPorgUnitStts","value","dsSrchOpt","CD_PORG_UNIT_STTS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Tab00.tabpage1.edPtnrNm","value","dsSrchOpt","PTNR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Tab00.tabpage2.edPtnrNm","value","dsSrchOpt","PTNR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Tab00.tabpage5.edPtnrNm","value","dsSrchOpt","PTNR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Tab00.tabpage5.edPtnrNm00","value","dsSrchOpt","PTNR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPtnrNmLangBind201711031718421134","Tab00.tabpage2.staPtnrNm","text","gdsLabel","EPRO_LABEL_00145");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnRtnLangBind2017110317184232069","btnRtn","text","gdsLabel","EPRO_LABEL_00410");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnSearchLangBind2017110317184298699","Tab00.tabpage5.btnSearch","text","gdsLabel","EPRO_LABEL_00005");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","tabPtnr.tabRfqPtnr.Combo01","value","dsSrchOpt","CD_PORG_UNIT_STTS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","tabPtnr.tabComPtnr.cbo_cdPorgUnitStts","value","dsSrchOpt","CD_PORG_UNIT_STTS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","chAltAuto","value","dsSrchOpt","ALT_AUTO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","tabPtnr.tabRfqPtnr.Combo00","value","dsSrchOpt","MTRL_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","tabPtnr.tabPreRfq.Combo00","value","dsSrchOpt","MTRL_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","tabPtnr.tabComPtnr.edPtnrNm","value","dsSrchOpt","PTNR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","tabPtnr.tabComPtnr.edBizNo","value","dsSrchOpt","BIZ_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","tabPtnr.tabComPtnr","text","gdsLabel","EPRO_LABEL_00822");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","tabPtnr.tabPreRfq.staMtrlCd","text","gdsLabel","EPRO_LABEL_00104");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompCalFromTo.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompSrcType2.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
        };
        
        // User Script
        this.registerScript("BPtnrSrchRfqMultiPopup.xfdl", function(exports) {
        /**
         * @파일명       	: BPtnrSrchMultiPopup.xfdl
         * @생성자       	: 송태봉
         * @생성일자     	: 2017. 8. 31.
         * @설명			: 입찰업체검색멀티팝업
         * @최종수정자		: 김동호
         * @최종수정일자	: 2017. 11. 10.
        */ 

        this.popTitle = "업체검색"
        /**
        * @함수명  : fnSetCode
        * @desc     : 글로벌 코드 데이터셋에서 사용할 코드 카피.
        */
        this.fnSetCode = function()
        {
        	var param = [
        					{code:"SR20", sSelectType:"A", sFiltered:"S:WAI,RST,REJ,PTNR"} // 협력사 구분
        				];
        	gfnGetCode(this, param);
        }

        /**
         * @함수명  : fnOninit
         * @input    : obj:Form(폼 오브젝트), e:nexacro.LoadEventInfo(이벤트변수)
         * @return   : 
         * @desc     : 폼 oninit 이벤트 
         */
        this.fnOninit = function(obj,e)
        {
        		this.fnSetCode();
        }

        /**
          * @함수명	: fnOnLoad
          * @desc   : 폼 onload이벤트
          */
        this.fnOnLoad = function(obj,e)
        {
        	//그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기
        	gfnSetGrdFunc(this.tabPtnr.tabRfqPtnr.grdList, this.tabPtnr.tabRfqPtnr.divPaging, this);
        	gfnSetGrdFunc(this.tabPtnr.tabPreRfq.grdList,  this.tabPtnr.tabPreRfq.divPaging, this);
        	gfnSetGrdFunc(this.tabPtnr.tabFavPtnr.grdList, this.tabPtnr.tabFavPtnr.divPaging, this);
        	gfnSetGrdFunc(this.tabPtnr.tabComPtnr.grdList, this.tabPtnr.tabComPtnr.divPaging, this);
        	gfnSetGrdFunc(this.tabPtnr.tabpage5.grdList, this.tabPtnr.tabpage5.divPaging, this);
        	
        	var ownFrame = this.getOwnerFrame();
        	this.dsTemp.loadXML(ownFrame.agv_data);
        		
        	for(var i =this.dsTemp.getRowCount()-1; i>=0;i--){
        		if(gfnIsNull(this.dsTemp.getColumn(i,"MTRL_CD"))){
        			this.dsTemp.deleteRow(i);
        		}
        	}
        	
        	this.dsTemp.insertRow(0);
        	this.dsTemp.setColumn(0, "MTRL_NM", gfnMultiLabel("EPRO_LABEL_00785"));
        	this.dsTemp.setColumn(0, "MTRL_CD", "");
        	
        	this.tabPtnr.tabpage5.divComp01.fnSetBind(this.dsSrchOpt,"SRC_LVL_1","SRC_LVL_2");
        	this.tabPtnr.tabPreRfq.divPoDay.fnSetDate(this.dsSrchOpt,"PO_DAY_STR","PO_DAY_END");
         	this.dsSrchOpt.addRow();
         	this.dsSrchOpt.setColumn(0,"PO_DAY_STR",gfnAddMonth(gfnToday(),-12));
         	this.dsSrchOpt.setColumn(0,"PO_DAY_END",gfnToday());
        	this.dsSrchOpt.setColumn(0,"MTRL_CD","");
        	this.dsSrchOpt.setColumn(0,"BRANCH_CD", application.gdsUserInfo.getColumn(0,"BRANCH_CD"));
        	this.dsSrchOpt.setColumn(0,"CD_PORG_UNIT_STTS", "SR20PTNR");
        	this.dsSrchOpt.setColumn(0,"ALT_AUTO", "N");
        	this.dsSrchOpt.setColumn(0,"SRC_LVL_1",ownFrame.agv_src_lvl_1);
        	this.tabPtnr.tabpage5.divComp01.dsFilter(ownFrame.agv_src_lvl_1);
        	this.dsSrchOpt.setColumn(0,"SRC_LVL_2",ownFrame.agv_src_lvl_2);
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
          * @함수명	: fnMtrlCdChk
          * @desc     	: 품목명 체크
          */
        this.fnMtrlCdChk = function(){
        	if(gfnIsNull(this.dsSrchOpt.getColumn(0,"MTRL_CD"))){
        		gfnAlert("EPRO_LABEL_00808");
        		return false;
        	}else{
        		return true;
        	}
        }
        /**
          * @함수명	: fnSearch
          * @desc     	: 입찰 참여 협력사 조회 프로세스
          */
        this.fnSearch = function(obj,e)
        {
        	if(!this.fnPreSearch()) return false;
        	
        	var	oPaging = "";		
        	
        	// 입찰참여협력사 tab
        	if(obj.name == "btnRfqSearch"){
        		if(!this.fnMtrlCdChk()) return false;
        		this.dsSrchOpt.setColumn(0, "BTN", "btnRfqSearch");
        		oPaging = [
        					{inDs:this.dsSrchOpt, grid:this.tabPtnr.tabRfqPtnr.grdList, divPaging:this.tabPtnr.tabRfqPtnr.divPaging}
        				];		
        	// 이전 발주 참조 tab
        	}else if(obj.name == "btnPreSearch"){
        		if(!this.fnMtrlCdChk()) return false;
        		this.dsSrchOpt.setColumn(0, "BTN", "btnPreSearch");
        		oPaging = [
        					{inDs:this.dsSrchOpt, grid:this.tabPtnr.tabPreRfq.grdList, divPaging:this.tabPtnr.tabPreRfq.divPaging}
        				];		
        	// 협력사 공통 tab
        	}else if(obj.name == "btnComSearch"){
        		this.dsSrchOpt.setColumn(0, "BTN", "btnComSearch");
        		oPaging = [
        					{inDs:this.dsSrchOpt, grid:this.tabPtnr.tabComPtnr.grdList, divPaging:this.tabPtnr.tabComPtnr.divPaging}
        				];		
        	}else if(obj.name == "btnSrcGrpSearch"){
        		this.dsSrchOpt.setColumn(0, "BTN", "btnSrcGrpSearch");
        		oPaging = [
        					{inDs:this.dsSrchOpt, grid:this.tabPtnr.tabpage5.grdList, divPaging:this.tabPtnr.tabpage5.divPaging}
        				];		
        	}
        	
        	var sController = "epro.com.service.BComService.searchComPtnr";
        	var sSvcID 		= "searchComPtnr";
        	var sInDatasets = "dsSrchOpt=dsSrchOpt";
        	var sOutDatasets = "dsList=dsList";
        	var sCallbackFunc = "fnTrCallBack";	
        	

            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc, oPaging);
        	
        }

        
        /**
          * @함수명	: fnTrCallBack
          * @desc     	: Transaction Callback함수
          */
        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	if(strErrCd < 0){
        		return;
        	}
        	
        	switch(strSvcID){
        		case "searchComPtnr" :	
        			
        			this.tabPtnr.tabRfqPtnr.grdList.setFocus();
        			
        			if(this.dsAddList.colcount == 0){
        				for(var i = 0 ; i < this.dsList.colcount ; i++){
        					this.dsAddList.addColumn(this.dsList.getColID(i),"STRING");
        				}
        			}
        			
        			if(this.dsAddList.rowcount != 0){
        				for(var i = 0 ; i < this.dsList.rowcount ; i++){
        					var nRow = this.dsAddList.findRow("BIZ_NO",this.dsList.getColumn(i,"BIZ_NO"));
        					
        					if(nRow != -1){
        						this.dsList.setColumn(i,"BTN","삭제");
        					}
        				}
        			}
        			
        		break;
         
        		default:
        		break;	
        	}
        }

        /**
          * @함수명	: fnAddData
          * @desc   : 목록에 추가하는 함수
          */
        this.fnAddData = function(obj)
        {
        	var bindDs = obj.getBindDataset();

        	if(bindDs.getColumn(bindDs.rowposition,"BTN") == "추가"){
        		if(this.dsList.getColumn(this.dsList.rowposition,"PTNR_STTS") == "Y"){
        			if(!gfnConfirm("EPRO_LABEL_01198")) return false; 
        		}
        	
        		this.dsList.setColumn(this.dsList.rowposition,"BTN","삭제");
        		var nRow = this.dsAddList.addRow();
        		this.dsAddList.copyRow(nRow,this.dsList,this.dsList.rowposition);
        		
        	} else{
        		var ptnrId = bindDs.getColumn(bindDs.rowposition,"PTNR_ID");
        		var nRow = this.dsAddList.findRow("PTNR_ID",ptnrId);
        		this.dsAddList.deleteRow(nRow);
        		
        		nRow = this.dsList.findRow("PTNR_ID",ptnrId);
        		this.dsList.setColumn(nRow,"BTN","추가");
        	}
        }
           
        /**
          * @함수명		: fnRtnData
          * @desc     	: 적용버튼 클릭 이벤트
          */   
        this.fnRtnData = function(obj,e)
        {
        	if(this.dsAddList.rowcount != 0){
        		this.parent.close(this.dsAddList.saveXML());
        		
        	} else{
        		gfnAlert("EPRO_LABEL_00937")
        	}
        }

        /**
          * @함수명	: grdListOnkeyup
          * @desc     	: 에디트 Onkeyup 이벤트
          */ 
        this.fnOnkeyup = function(obj,e)
        {
        	if(e.keycode == "13"){
        		obj.updateToDataset();
        		if(obj.name == "edBizNo" || obj.name == "edPtnrNm"){
        				this.fnSearch(this.tabPtnr.tabComPtnr.btnComSearch);
        			}
        		}
        }

        /**
          * @함수명	: grdListOnkeydown
          * @desc     	: 그리드 Onkeydown 이벤트
          */
        this.grdListOnkeydown = function(obj,e)
        {
        	if(e.keycode == "13"){
        		obj.updateToDataset();
        		this.fnAddData(obj);
        	}
        }

        /**
          * @함수명	: fnOnecellclick
          * @desc     	: 그리드 원클릭 이벤트
          */
        this.fnOnecellclick = function(obj,e)
        {
        	if(gfnGrdBindColId(obj,e.cell) == "BTN"){
        		this.fnAddData(obj);
        	}
        }

        /**
          * @함수명	: fnOncelldbClick
          * @desc     	: 그리드 더블클릭 이벤트
          */
        this.fnOncelldbClick = function(obj,e)
        {
        	if( gfnGrdBindColId(obj, obj.getCellPos()) == "PTNR_NM"){
        		var sArg = {
        						agv_id:this.dsList.getColumn(e.row,"PTNR_ID")
        					};
        		gfnModalPop(this, "BPtnrInfoPopup", "CPOP::BPtnrInfoPopup.xfdl", sArg, "fnPopCallBack", 570, 465);
        		
        	}else if(gfnGrdBindColId(obj,e.cell) != "BTN"){
        		this.fnAddData(obj);
        	}
        }

        this.fnTabChange = function(obj,e)
        {
        	this.dsList.clear();

        	if(obj.tabindex == "3"){
        		if(!this.fnPreSearch()) return false;

        		this.dsSrchOpt.setColumn(0, "BTN", "btnFavSearch");
        		var oPaging = [
        					{inDs:this.dsSrchOpt, grid:this.tabPtnr.tabFavPtnr.grdList, divPaging:this.tabPtnr.tabFavPtnr.divPaging}
        		];		
        			
        		var sController = "epro.com.service.BComService.searchComPtnr";
        		var sSvcID 		= "searchComPtnr";
        		var sInDatasets = "dsSrchOpt=dsSrchOpt";
        		var sOutDatasets = "dsList=dsList";
        		var sCallbackFunc = "fnTrCallBack";	
        	
        		gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc, oPaging);
        	}
        }

        this.fnPopCallBack = function()
        {
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsSrchOpt.addEventHandler("oncolumnchanged", this.dsSrchOpt_oncolumnchanged, this);
            this.addEventHandler("oninit", this.fnOninit, this);
            this.addEventHandler("onload", this.fnOnLoad, this);
            this.btnRtn.addEventHandler("onclick", this.fnRtnData, this);
            this.grdAddList.addEventHandler("oncellclick", this.fnOnecellclick, this);
            this.grdAddList.addEventHandler("oncelldblclick", this.fnOncelldbClick, this);
            this.grdAddList.addEventHandler("onkeydown", this.grdListOnkeydown, this);
            this.tabPtnr.addEventHandler("onchanged", this.fnTabChange, this);
            this.tabPtnr.tabRfqPtnr.grdList.addEventHandler("oncellclick", this.fnOnecellclick, this);
            this.tabPtnr.tabRfqPtnr.grdList.addEventHandler("oncelldblclick", this.fnOncelldbClick, this);
            this.tabPtnr.tabRfqPtnr.grdList.addEventHandler("onkeydown", this.grdListOnkeydown, this);
            this.tabPtnr.tabRfqPtnr.btnRfqSearch.addEventHandler("onclick", this.fnSearch, this);
            this.tabPtnr.tabPreRfq.grdList.addEventHandler("oncellclick", this.fnOnecellclick, this);
            this.tabPtnr.tabPreRfq.grdList.addEventHandler("oncelldblclick", this.fnOncelldbClick, this);
            this.tabPtnr.tabPreRfq.grdList.addEventHandler("onkeydown", this.grdListOnkeydown, this);
            this.tabPtnr.tabPreRfq.btnPreSearch.addEventHandler("onclick", this.fnSearch, this);
            this.tabPtnr.tabpage5.grdList.addEventHandler("oncellclick", this.fnOnecellclick, this);
            this.tabPtnr.tabpage5.grdList.addEventHandler("oncelldblclick", this.fnOncelldbClick, this);
            this.tabPtnr.tabpage5.grdList.addEventHandler("onkeydown", this.grdListOnkeydown, this);
            this.tabPtnr.tabpage5.edPtnrNm.addEventHandler("onkeyup", this.fnOnkeyup, this);
            this.tabPtnr.tabpage5.btnSrcGrpSearch.addEventHandler("onclick", this.fnSearch, this);
            this.tabPtnr.tabFavPtnr.grdList.addEventHandler("oncellclick", this.fnOnecellclick, this);
            this.tabPtnr.tabFavPtnr.grdList.addEventHandler("oncelldblclick", this.fnOncelldbClick, this);
            this.tabPtnr.tabFavPtnr.grdList.addEventHandler("onkeydown", this.grdListOnkeydown, this);
            this.tabPtnr.tabComPtnr.grdList.addEventHandler("oncellclick", this.fnOnecellclick, this);
            this.tabPtnr.tabComPtnr.grdList.addEventHandler("oncelldblclick", this.fnOncelldbClick, this);
            this.tabPtnr.tabComPtnr.grdList.addEventHandler("onkeydown", this.grdListOnkeydown, this);
            this.tabPtnr.tabComPtnr.btnComSearch.addEventHandler("onclick", this.fnSearch, this);
            this.tabPtnr.tabComPtnr.edBizNo.addEventHandler("onkeyup", this.fnOnkeyup, this);
            this.tabPtnr.tabComPtnr.edPtnrNm.addEventHandler("onkeyup", this.fnOnkeyup, this);
            this.chAltAuto.addEventHandler("onchanged", this.chAltAuto_onchanged, this);

        };

        this.loadIncludeScript("BPtnrSrchRfqMultiPopup.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
