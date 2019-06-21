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
                this.set_name("SDlvPopup");
                this.set_titletext("납품서팝업");
                this._setFormPosition(0,0,1057,1100);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPo", this);
            obj._setContents("<ColumnInfo><Column id=\"PORG_ID\" size=\"20\" type=\"string\"/><Column id=\"CD_DOC_CTGR_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_DOC_CTGR\" size=\"40\" type=\"string\"/><Column id=\"DLV_PLAN_DAY\" size=\"8\" type=\"string\"/><Column id=\"DLV_AMT\" size=\"22\" type=\"string\"/><Column id=\"CD_PYMT_CNDTN_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_PYMT_CNDTN\" size=\"40\" type=\"string\"/><Column id=\"PO_NO\" size=\"40\" type=\"string\"/><Column id=\"WRTR_ID\" size=\"50\" type=\"string\"/><Column id=\"WRTR_NM\" size=\"30\" type=\"string\"/><Column id=\"INSP_CHRGR_ID\" size=\"50\" type=\"string\"/><Column id=\"CHRGR_NM\" size=\"30\" type=\"string\"/><Column id=\"CRTR_ID\" size=\"50\" type=\"string\"/><Column id=\"LAST_CHGR_ID\" size=\"50\" type=\"string\"/><Column id=\"TTL\" size=\"600\" type=\"string\"/><Column id=\"DLV_NO\" size=\"256\" type=\"string\"/><Column id=\"CD_FCTRY_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_FCTRY\" size=\"40\" type=\"string\"/><Column id=\"CD_DLV_STTS\" size=\"40\" type=\"string\"/><Column id=\"CD_CRNC\" size=\"40\" type=\"string\"/><Column id=\"ALT_PARTIAL_DLV\" type=\"STRING\" size=\"256\"/><Column id=\"INSP_RTN_RMARK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PO_CTGR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"PO_NO\" size=\"40\" type=\"string\"/><Column id=\"DLV_ITM_NO\" size=\"40\" type=\"string\"/><Column id=\"CD_UNIT_NM\" size=\"40\" type=\"string\"/><Column id=\"CD_UNIT\" size=\"40\" type=\"string\"/><Column id=\"DLV_NO\" size=\"256\" type=\"string\"/><Column id=\"ITM_NO\" size=\"5\" type=\"string\"/><Column id=\"DLV_PLAN_QTY\" size=\"22\" type=\"bigdecimal\"/><Column id=\"CHECKED\" size=\"1\" type=\"string\"/><Column id=\"CRTR_ID\" size=\"256\" type=\"string\"/><Column id=\"TOT_DLV_PLAN_QTY\" size=\"22\" type=\"bigdecimal\"/><Column id=\"DLV_REQ_DAY\" size=\"8\" type=\"string\"/><Column id=\"AMT\" size=\"22\" type=\"bigdecimal\"/><Column id=\"RMARK\" size=\"4000\" type=\"string\"/><Column id=\"QTY\" size=\"22\" type=\"bigdecimal\"/><Column id=\"DLV_ITEM_ID\" size=\"256\" type=\"string\"/><Column id=\"LAST_CHG_DT\" size=\"256\" type=\"string\"/><Column id=\"MTRL_GRP_NM\" size=\"500\" type=\"string\"/><Column id=\"MTRL_GRP_ID\" size=\"20\" type=\"string\"/><Column id=\"MTRL_NM\" size=\"500\" type=\"string\"/><Column id=\"MTRL_CD\" size=\"20\" type=\"string\"/><Column id=\"LAST_CHGR_ID\" size=\"256\" type=\"string\"/><Column id=\"PO_ITEM_ID\" size=\"40\" type=\"string\"/><Column id=\"UNT_PRICE\" size=\"22\" type=\"bigdecimal\"/><Column id=\"CRT_DT\" size=\"256\" type=\"string\"/><Column id=\"PORG_ID\" size=\"20\" type=\"string\"/><Column id=\"DLV_OVR_RT\" size=\"22\" type=\"bigdecimal\"/><Column id=\"STR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCondition", this);
            obj._setContents("<ColumnInfo><Column id=\"PO_NO\" size=\"40\" type=\"string\"/><Column id=\"DLV_NO\" size=\"40\" type=\"string\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"STR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COREXP_KIDS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdPO10", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM10", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM15", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdPO13", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM13", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdCM11", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsExp", this);
            obj._setContents("<ColumnInfo><Column id=\"CHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_ITEM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EFF_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_QTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PO_ITEM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"STR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_1", "absolute", "10", "2", null, "43", "10", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBg");
            obj.getSetter("objNm").set("컨트롤 박스");
            this.addChild(obj.name, obj);
            obj = new Edit("edt_poNo", "absolute", "168", "9", "250", "24", null, null, this.div_1);
            obj.set_taborder("23");
            obj.set_readonly("true");
            obj.set_cssclass("edt_default_r");
            obj.getSetter("objNm").set("문서번호");
            this.div_1.addChild(obj.name, obj);
            obj = new Combo("cbo_cdDocCtgr", "absolute", "10", "9", "150", "24", null, null, this.div_1);
            this.div_1.addChild(obj.name, obj);
            obj.set_taborder("24");
            obj.set_readonly("false");
            obj.set_innerdataset("@dsCdCM10");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_cssclass("cbo_default_r");
            obj.getSetter("objNm").set("구매유형");
            obj = new Button("Button01", "absolute", null, "10", "70", "24", "86", null, this.div_1);
            obj.set_taborder("25");
            obj.set_text("임시저장");
            obj.set_cssclass("btn_WF_Com_G");
            this.div_1.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", null, "10", "78", "24", "4", null, this.div_1);
            obj.set_taborder("26");
            obj.set_text("납품서작성");
            obj.set_cssclass("btn_WF_Com_G");
            this.div_1.addChild(obj.name, obj);

            obj = new Div("div_21", "absolute", "10", "89", null, "224", "10", null, this);
            obj.set_taborder("2");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("DIV-헤더 상세");
            this.addChild(obj.name, obj);
            obj = new Tab("tab_head", "absolute", "0", "0", null, "223", "0", null, this.div_21);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.set_cssclass("tab_default");
            this.div_21.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.div_21.tab_head);
            obj.set_text("기본정보");
            this.div_21.tab_head.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "0", "0", null, null, "0", "48", this.div_21.tab_head.tabpage1);
            obj.set_taborder("39");
            obj.style.set_border("0 none #808080ff");
            this.div_21.tab_head.tabpage1.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "5", null, "33", "0", null, this.div_21.tab_head.tabpage1.Div00);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_21.tab_head.tabpage1.Div00.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "37", null, "33", "0", null, this.div_21.tab_head.tabpage1.Div00);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_21.tab_head.tabpage1.Div00.addChild(obj.name, obj);
            obj = new Static("sta_CrtrNm01", "absolute", "0", "37", "170", "33", null, null, this.div_21.tab_head.tabpage1);
            obj.set_taborder("24");
            obj.set_text("<fc v='red'>* </fc>납품예정일자");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("작성자");
            obj.getSetter("lbcd").set("");
            this.div_21.tab_head.tabpage1.addChild(obj.name, obj);
            obj = new Static("sta_CrtrNm02", "absolute", "715", "41", "115", "24", null, null, this.div_21.tab_head.tabpage1);
            obj.set_taborder("25");
            obj.set_text("납품금액");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("objNm").set("작성자");
            obj.getSetter("lbcd").set("");
            this.div_21.tab_head.tabpage1.addChild(obj.name, obj);
            obj = new Calendar("cal_dlvPlanDay", "absolute", "176", "41", "125", "24", null, null, this.div_21.tab_head.tabpage1);
            this.div_21.tab_head.tabpage1.addChild(obj.name, obj);
            obj.set_taborder("27");
            obj.set_dateformat("yyyy.MM.dd ddd");
            obj.set_editformat("yyyy.MM.dd ddd");
            obj.set_cssclass("cal_default");
            obj.getSetter("objNm").set("납품예정일자");
            obj = new MaskEdit("me_porTotAmt", "absolute", "830", "41", "150", "24", null, null, this.div_21.tab_head.tabpage1);
            obj.set_taborder("28");
            obj.set_readonly("true");
            obj.set_mask("#,##0");
            obj.set_autoselect("true");
            obj.set_cssclass("input_point");
            obj.set_enable("false");
            obj.style.set_color("blue");
            obj.style.set_font("bold 10 Dotum");
            obj.getSetter("objNm").set("");
            this.div_21.tab_head.tabpage1.addChild(obj.name, obj);
            obj = new Static("st_CrDt00", "absolute", "329", "41", "125", "24", null, null, this.div_21.tab_head.tabpage1);
            obj.set_taborder("29");
            obj.set_text("분할납품");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("발주유형");
            this.div_21.tab_head.tabpage1.addChild(obj.name, obj);
            obj = new Radio("rdo_altPartialDlv", "absolute", "460", "41", "120", "24", null, null, this.div_21.tab_head.tabpage1);
            this.div_21.tab_head.tabpage1.addChild(obj.name, obj);
            var rdo_altPartialDlv_innerdataset = new Dataset("rdo_altPartialDlv_innerdataset", this.div_21.tab_head.tabpage1.rdo_altPartialDlv);
            rdo_altPartialDlv_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">가능</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">불가능</Col></Row></Rows>");
            obj.set_innerdataset(rdo_altPartialDlv_innerdataset);
            obj.set_taborder("30");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("true");
            obj.set_direction("vertical");
            obj.set_cssclass("rdo_default");
            obj.set_enable("false");
            obj.getSetter("objNm").set("분할납품");
            obj = new Static("sta_docNm", "absolute", "0", "5", "170", "33", null, null, this.div_21.tab_head.tabpage1);
            obj.set_taborder("37");
            obj.set_text("발주명");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("objNm").set("작성자");
            obj.getSetter("lbcd").set("");
            this.div_21.tab_head.tabpage1.addChild(obj.name, obj);
            obj = new Edit("edt_Ttl", "absolute", "176", "9", "211", "24", null, null, this.div_21.tab_head.tabpage1);
            obj.set_taborder("38");
            obj.set_readonly("true");
            obj.set_lengthunit("utf8");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_default_r");
            obj.getSetter("objNm").set("발주명");
            this.div_21.tab_head.tabpage1.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.div_21.tab_head);
            obj.set_text("첨부파일");
            this.div_21.tab_head.addChild(obj.name, obj);
            obj = new Div("divViewCompBody02", "absolute", "0", "4", null, "188", "0", null, this.div_21.tab_head.tabpage2);
            obj.set_taborder("0");
            obj.set_url("CCOMP::CompNFileUpDown.xfdl");
            this.div_21.tab_head.tabpage2.addChild(obj.name, obj);

            obj = new Div("div_4", "absolute", "10", "578", null, "24", "10", null, this);
            obj.set_taborder("4");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divViewCompTitle01", "absolute", "10", "336", null, "24", "-1", null, this);
            obj.set_taborder("9");
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", null, "255", "24", null, "5", this.divViewCompTitle01);
            obj.set_taborder("2");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 2 17");
            this.divViewCompTitle01.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0.95%", "311", "211", "20", null, null, this);
            obj.set_taborder("10");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Div("divViewCompTitle00", "absolute", "10", "61", null, "24", "-9", null, this);
            obj.set_taborder("11");
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", null, "255", "24", null, "0", this.divViewCompTitle00);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 2 17");
            this.divViewCompTitle00.addChild(obj.name, obj);

            obj = new Div("divViewCompBody00", "absolute", "10", "360", null, "224", "10", null, this);
            obj.set_taborder("12");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "0", null, "224", "0", null, this.divViewCompBody00);
            obj.set_taborder("3");
            obj.set_binddataset("dsPoItem");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"52\"/><Column size=\"267\"/><Column size=\"96\"/><Column size=\"78\"/><Column size=\"138\"/><Column size=\"72\"/><Column size=\"77\"/><Column size=\"73\"/><Column size=\"98\"/><Column size=\"60\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"품번\"/><Cell col=\"2\" text=\"품목명\"/><Cell col=\"3\" text=\"창고\"/><Cell col=\"4\" text=\"단위\"/><Cell col=\"5\" text=\"단가\"/><Cell col=\"6\" text=\"발주수량\"/><Cell col=\"7\" text=\"발행수량\"/><Cell col=\"8\" text=\"납품수량\"/><Cell col=\"9\" text=\"납품요청일자\"/><Cell col=\"10\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:CD_PO_CTGR == &quot;PO13NPO&quot; &amp;&amp; (QTY&lt;= TOT_DLV_QTY || ALT_DLV_CMPLT == &quot;Y&quot;) ? &quot;none&quot; : &quot;checkbox&quot;\" edittype=\"expr:QTY&lt;= TOT_DLV_QTY || ALT_DLV_CMPLT == &quot;Y&quot; ? &quot;none&quot; : &quot;checkbox&quot;\" style=\"background:EXPR(QTY&lt;= TOT_DLV_QTY || ALT_DLV_CMPLT == &quot;Y&quot;  ? &quot;#f5f5f5ff&quot; : &quot;&quot;);background2:EXPR(QTY&lt;= TOT_DLV_QTY || ALT_DLV_CMPLT == &quot;Y&quot;  ? &quot;#f5f5f5ff&quot; : &quot;&quot;);\" text=\"bind:CHECKED\"/><Cell col=\"1\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:ITM_NO\"/><Cell col=\"2\" style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:MTRL_NM\"/><Cell col=\"3\" edittype=\"none\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:SL_NM\"/><Cell col=\"4\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:CD_UNIT_NM\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"none\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" cssclass=\"cell_link\" text=\"bind:PO_PRICE\" mask=\"#,##0.00\"/><Cell col=\"6\" displaytype=\"number\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:QTY\" mask=\"#,##0.00\"/><Cell col=\"7\" displaytype=\"number\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:TOT_DLV_QTY\" mask=\"#,##0.00\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"expr:ALT_DLV_CMPLT == 'Y' ? 'none' : 'masknumber'\" style=\"align:right;background:EXPR(QTY&lt;= TOT_DLV_QTY || ALT_DLV_CMPLT == &quot;Y&quot; ? &quot;#f5f5f5ff&quot; : &quot;&quot;);background2:EXPR(QTY&lt;= TOT_DLV_QTY || ALT_DLV_CMPLT == &quot;Y&quot; ? &quot;#f5f5f5ff&quot; : &quot;&quot;);\" text=\"bind:DLV_PLAN_QTY\" mask=\"#,##0.00\" editdisplay=\"edit\"/><Cell col=\"9\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:DLV_REQ_DAY\" mask=\"expr:yyyy.MM.dd\"/><Cell col=\"10\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:RMARK\"/></Band></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0.95%", "584", "211", "20", null, null, this);
            obj.set_taborder("14");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Div("divViewCompTitle02", "absolute", "10", "604", null, "24", "-34", null, this);
            obj.set_taborder("15");
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", null, "255", "24", null, "0", this.divViewCompTitle02);
            obj.set_taborder("0");
            obj.set_text("품목 상세정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 2 17");
            this.divViewCompTitle02.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0.95%", "890", "211", "20", null, null, this);
            obj.set_taborder("26");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Div("divViewCompTitle03", "absolute", "10", "910", null, "24", "10", null, this);
            obj.set_taborder("27");
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            obj.set_text("지급차수");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle01", "absolute", "0", "0", "256", "24", null, null, this.divViewCompTitle03);
            obj.set_taborder("1");
            obj.set_text("지급차수");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 2 17");
            this.divViewCompTitle03.addChild(obj.name, obj);

            obj = new Div("divvidg", "absolute", "10", "939", null, "145", "10", null, this);
            obj.set_taborder("28");
            obj.set_visible("true");
            obj.getSetter("objNm").set("");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_poPay", "absolute", "0", "0", null, "142", "0", null, this.divvidg);
            obj.set_cssclass("grd_default");
            obj.set_taborder("0");
            obj.set_binddataset("ds_poPay");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
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
            obj.set_visible("true");
            obj._setContents("<Formats><Format id=\"MMODE\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"720\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"회차\"/><Cell col=\"1\" text=\"지급율(%)\"/><Cell col=\"2\" text=\"지급금액\"/><Cell col=\"3\" text=\"지급조건\"/></Band><Band id=\"body\"><Cell text=\"bind:ODR\"/><Cell col=\"1\" displaytype=\"number\" text=\"bind:PYMT_RT\" mask=\"#,##0.00\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PYMT_PLN_AMT\" mask=\"#,##0\" editdisplay=\"edit\"/><Cell col=\"3\" style=\"align: ;\" text=\"bind:RMARK\" calendardisplay=\"edit\" calendardisplaynulltype=\"none\"/></Band></Format><Format id=\"VMODE\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"720\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"회차\"/><Cell col=\"1\" text=\"지급율(%)\"/><Cell col=\"2\" text=\"지급금액\"/><Cell col=\"3\" text=\"지급조건\"/></Band><Band id=\"body\"><Cell text=\"bind:ODR\"/><Cell col=\"1\" displaytype=\"number\" text=\"bind:PYMT_RT\" mask=\"#,##0.00\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PYMT_PLN_AMT\" mask=\"#,##0\" editdisplay=\"edit\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:RMARK\" calendardisplay=\"edit\" tooltiptext=\"bind:RMARK\"/></Band></Format></Formats>");
            this.divvidg.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "10", "633", null, "258", "10", null, this);
            obj.set_taborder("29");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Combo("cbo_itemChg", "absolute", "124", "0", "386", "24", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_poItem");
            obj.set_codecolumn("PO_ITEM_ID");
            obj.set_datacolumn("MTRL_NM");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("품목명");
            obj = new Edit("edt_itemNo", "absolute", "0", "0", "118", "24", null, null, this.Div00);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_cssclass("input_point");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("objNm").set("품번");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("btn_poItemRowUp", "absolute", "512", "2", "23", "23", null, null, this.Div00);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_ListUp");
            obj.style.set_background("transparent URL('theme://img/btn_WF_ListUp_N.png')");
            obj.style.set_border("1 none #d5d5d5ff");
            obj.getSetter("objNm").set("Up");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("btn_poItemRowDown", "absolute", "535", "2", "23", "23", null, null, this.Div00);
            obj.set_taborder("3");
            obj.style.set_background("transparent URL('theme://img/btn_WF_ListDown_N.png')");
            obj.style.set_border("1 none #d5d5d5ff");
            obj.getSetter("objNm").set("Down");
            this.Div00.addChild(obj.name, obj);
            obj = new Tab("tab_item", "absolute", "0", "34", null, "224", "0", null, this.Div00);
            obj.set_taborder("4");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            this.Div00.addChild(obj.name, obj);
            obj = new Tabpage("tabp05", this.Div00.tab_item);
            obj.set_text("비고");
            obj.getSetter("objNm").set("품목 특이사항");
            this.Div00.tab_item.addChild(obj.name, obj);
            obj = new TextArea("txt_itemTxt", "absolute", "0", "10", null, null, "1", "0", this.Div00.tab_item.tabp05);
            obj.set_taborder("0");
            obj.set_scrollbars("none");
            obj.set_wordwrap("char");
            obj.set_readonly("true");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("500");
            obj.getSetter("objNm").set("품목 특이사항");
            this.Div00.tab_item.tabp05.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.Div00.tab_item);
            obj.set_text("유효기간관리");
            this.Div00.tab_item.addChild(obj.name, obj);
            obj = new Grid("grid_exp", "absolute", "0", "39", null, null, "0", "10", this.Div00.tab_item.tabpage2);
            obj.set_taborder("18");
            obj.set_binddataset("dsExp");
            obj.set_selecttype("cell");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"MMODE\"><Columns><Column size=\"40\"/><Column size=\"187\"/><Column size=\"606\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"납품수량\"/><Cell col=\"2\" text=\"유효일자\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:DLV_ITEM_ID==&quot;&quot; ? &quot;checkbox&quot; : &quot;none&quot;\" edittype=\"expr:DLV_ITEM_ID==&quot;&quot; ? &quot;checkbox&quot; : &quot;none&quot;\" text=\"bind:CHECKED\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:DLV_QTY\" mask=\"#,##0.00\" tooltiptext=\"bind:DLV_QTY\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"date\" text=\"bind:EFF_DAY\" mask=\"yyyy.MM.dd\" calendardisplay=\"edit\" calendardisplaynulltype=\"none\" tooltiptext=\"bind:EFF_DAY\"/></Band></Format><Format id=\"VMODE\"><Columns><Column size=\"187\"/><Column size=\"606\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"납품수량\"/><Cell col=\"1\" text=\"유효일자\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" style=\"align:right;\" text=\"bind:DLV_QTY\" mask=\"#,##0.00\" tooltiptext=\"bind:DLV_QTY\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:EFF_DAY\" mask=\"yyyy.MM.dd\" calendardisplay=\"edit\" calendardisplaynulltype=\"none\" tooltiptext=\"bind:EFF_DAY\"/></Band></Format></Formats>");
            this.Div00.tab_item.tabpage2.addChild(obj.name, obj);
            obj = new Button("btn_Itm_Add", "absolute", null, "10", "60", "24", "67", null, this.Div00.tab_item.tabpage2);
            obj.set_taborder("19");
            obj.set_text(" 추가");
            obj.set_cssclass("btn_WF_Com_G");
            obj.set_visible("false");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("품목 그리드 행추가");
            this.Div00.tab_item.tabpage2.addChild(obj.name, obj);
            obj = new Button("btn_Itm_Del", "absolute", null, "10", "60", "24", "3", null, this.Div00.tab_item.tabpage2);
            obj.set_taborder("20");
            obj.set_text(" 삭제");
            obj.set_cssclass("btn_WF_Com_G");
            obj.set_visible("false");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("품목 그리드 행삭제");
            this.Div00.tab_item.tabpage2.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_1,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_cssclass("div_WF_SearchBg");
            		p.getSetter("objNm").set("컨트롤 박스");

            	}
            );
            this.div_1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_21.tab_head.tabpage1.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("39");
            		p.style.set_border("0 none #808080ff");

            	}
            );
            this.div_21.tab_head.tabpage1.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_21.tab_head.tabpage1,
            	//-- Layout function
            	function(p) {
            		p.set_text("기본정보");

            	}
            );
            this.div_21.tab_head.tabpage1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_21.tab_head.tabpage2,
            	//-- Layout function
            	function(p) {
            		p.set_text("첨부파일");

            	}
            );
            this.div_21.tab_head.tabpage2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 224, this.div_21,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.set_scrollbars("none");
            		p.getSetter("objNm").set("DIV-헤더 상세");

            	}
            );
            this.div_21.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.div_4,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_visible("false");

            	}
            );
            this.div_4.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompTitle01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("9");
            		p.getSetter("objNm").set("DIV-평가서 타이틀");

            	}
            );
            this.divViewCompTitle01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompTitle00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("11");
            		p.getSetter("objNm").set("DIV-평가서 타이틀");

            	}
            );
            this.divViewCompTitle00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 748, 431, this.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("12");
            		p.set_text("Div01");

            	}
            );
            this.divViewCompBody00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompTitle02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("15");
            		p.getSetter("objNm").set("DIV-평가서 타이틀");

            	}
            );
            this.divViewCompTitle02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompTitle03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("27");
            		p.getSetter("objNm").set("DIV-평가서 타이틀");
            		p.set_text("지급차수");

            	}
            );
            this.divViewCompTitle03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 145, this.divvidg,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("28");
            		p.set_visible("true");
            		p.getSetter("objNm").set("");

            	}
            );
            this.divvidg.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Div00.tab_item.tabp05,
            	//-- Layout function
            	function(p) {
            		p.set_text("비고");
            		p.getSetter("objNm").set("품목 특이사항");

            	}
            );
            this.Div00.tab_item.tabp05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Div00.tab_item.tabpage2,
            	//-- Layout function
            	function(p) {
            		p.set_text("유효기간관리");

            	}
            );
            this.Div00.tab_item.tabpage2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 258, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("29");
            		p.set_text("Div00");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1057, 1100, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("납품서팝업");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item4","div_1.cbo_cdDocCtgr","value","dsPo","CD_DOC_CTGR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","div_1.edt_poNo","value","dsPo","PO_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_21.tab_head.tabpage1.cal_dlvPlanDay","value","dsPo","DLV_PLAN_DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_21.tab_head.tabpage1.me_porTotAmt","value","dsPo","DLV_AMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","div_21.tab_head.tabpage1.rdo_altPartialDlv","value","dsPo","ALT_PARTIAL_DLV");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","div_21.tab_head.tabpage1.edt_Ttl","value","dsPo","TTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Div00.cbo_itemChg","text","dsPoItem","MTRL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Div00.edt_itemNo","value","dsPoItem","ITM_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Div00.tab_item.tabp05.txt_itemTxt","value","dsPoItem","RMARK");
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
        this.registerScript("SDlvPopup.xfdl", function(exports) {
        /**
         * @파일명       	: SDlvPopup.xfdl
         * @생성자       	: 이준호
         * @생성일자     	: 2019. 04. 26
         * @설명			: 납품서 팝업
         * @최종수정자		: 이준호
         * @최종수정일자	: 2019. 04. 26
        */
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
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function(){
        	
        	var param = [
        					//{code:"PO10", sSelectType:"S"} // 발주상태
        					{code:"CM10", sSelectType:"S"} // 문서유형
        					//,{code:"CM15", sSelectType:"S"} // 발주통화
        					//,{code:"PO13", sSelectType:"S"} // 발주유형
        					//,{code:"CM13", sSelectType:"S"} // 지급조건
        					,{code:"CM11", sSelectType:"S"} // 단위
        				];
        	gfnGetCode(this, param);
        }
        /**
          * @함수명	: fnFormOnload
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.LoadEventInfo(이벤트변수)
          * @desc     	: 화면이 로딩 될때마다 실행되는 이벤트 
          */
        this.fnFormOnload = function(obj,e)
        {	
        	gfnSetGrdFunc(this.divViewCompBody00.grdList, this.divViewCompBody00.divPaging, this);
        	var ownFrame = this.getOwnerFrame();
        	
        	var poNo = ownFrame.pop_poNo;
        	var branchCd = ownFrame.pop_branchCd;
        	var strCd = ownFrame.pop_strCd;
        	var kid = ownFrame.pop_kid;
        	var dlvNo = ownFrame.pop_dlvNo;
        	var type = ownFrame.agv_type;
        	
        	this.dsCondition.addRow();

        	if(gfnIsNull(type))
        	{
        		gfnAlert("시스템 오류입니다. 관리자에게 문의하세요.");
        		this.parent.close();
        	}
        	//else if(this.fv_type == "mgr" || !this.gfn_isNull(ownFrame.agv_dlvNo))
        	else if(type == "mgr" ) //납품서 관리
        	{
        		this.dsCondition.setColumn(0, "DLV_NO"		, dlvNo);
        		this.dsCondition.setColumn(0, "PO_NO"		, poNo);
        		this.dsCondition.setColumn(0, "COREXP_KIDS", kid);
        		this.dsCondition.setColumn(0, "BRANCH_CD"	, branchCd);
        		this.dsCondition.setColumn(0, "STR_CD"		, strCd);
        		this.div_21.tab_head.tabpage1.sta_docNm.set_text("납품서명");
        		this.fnSearch();
        	}	
        	else if(type == "wri") //납품서 작성
        	{
        		this.dsCondition.setColumn(0, "PO_NO"		, poNo);
        		this.dsCondition.setColumn(0, "COREXP_KIDS" , kid);
        		this.dsCondition.setColumn(0, "BRANCH_CD"	, branchCd);
        		this.dsCondition.setColumn(0, "STR_CD"		, strCd);
        		this.fnSearch2();
        	}
        }

        
        /**
        	@function	fnSearch()
        	@desc  		납품서 작성 조회.
        */
        this.fnSearch = function()
        {
        	if(!this.fnPreSearch()) return false;
        		
        	var sSvcID = "readDlvMgmt"; 
        	var sController = "epro.dlv.service.SDlvService.readDlvMgmt";
        	var sInDatasets = "dsCondition=dsCondition:A";
        	var sOutDatasets = "dsPo=dsPo ds_poPay=ds_poPay dsPoItem=dsPoItem ds_exp=ds_exp";
        	var sCallbackFunc = "fnTrCallBack";

           gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }
        /**
        	@function	fnPreSearch()
        	@desc   	납품서 작성 조회 전 처리
        */
        this.fn_preSearch = function()
        {
        	return true;
        }
        /**
        	@function	fnSearch2()
        	@desc  		납품서 관리 조회.
        */
        this.fnSearch2 = function()
        {
        	if(!this.fnPreSearch2()) return false;
        		
        	var sSvcID = "readDlv"; 
        	var sController = "epro.dlv.service.SDlvService.readDlv";
        	var sInDatasets = "dsCondition=dsCondition:A";
        	var sOutDatasets = "dsPo=dsPo ds_poPay=ds_poPay dsPoItem=dsPoItem ds_exp=ds_exp";
        	var sCallbackFunc = "fnTrCallBack";

           gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
        	@function	fnPreSearch2()
        	@desc   	납품서 관리 조회 전 처리
        */
        this.fnPreSearch2 = function()
        {
        	if(!gfnIsNull(this.dsPo.getColumn(0, "DLV_NO")))
        	{
        		this.dsCondition.setColumn(0, "DLV_NO", this.dsPo.getColumn(0, "DLV_NO"));
        		this.dsCondition.setColumn(0, "BRANCH_CD", this.dsPo.getColumn(0, "BRANCH_CD"));
        	}
        	return true;
        }
        /**
          * @함수명	: fnTrCallBack
          * @input  	: strSvcID, strErrCd, strErrMsg
          * @desc     	: 콜백 함수
          */
        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg)
        {	
        	//alert(this.dsPoItem.getColumn(0, "CD_UNIT"));
        	//alert(this.dsPoItem.getColumn(0, "CD_UNIT_NM"));
        	///*/*/alert(this.dsPoItem.saveXML());
        	//trace(this.dsCdCM11.saveXML());
        }

        this.divViewCompBody00_grdList_oncellclick = function(obj,e)
        {
        	//품목 상세사항 탭 바뀌는 부분 
        	//if(this.dsPoItem.getColumn(e.row, "DLV_PLAN_QTY")>0){
        	//	alert(33);
        	//}
        }

        this.divViewCompBody00_grdList_onheadclick = function(obj,e)
        { //체크 한꺼번에 했을때 금액 변경 
        	if(e.col == 0)
        	{
        		var strVal = obj.getCellProperty("head", e.cell, "expr");
        	
        		if(gfnIsNull(strVal) || strVal == 0)
        		{					
        			var totAmt = this.dsPoItem.getSum("DLV_PLAN_QTY * PO_PRICE");
        			this.dsPo.setColumn(0, "DLV_AMT", totAmt);
        		}
        		else
        		{
        			this.dsPo.setColumn(0, "DLV_AMT", 0);
        		}		
        	}
        }

        
        this.dsPoItemOncolumnchanged = function(obj,e)
        {
        	this.dsPoItem.set_enableevent(false);
        	this.dsPoItem.filter("CHECKED == 1");
        	var totAmt = this.dsPoItem.getSum("DLV_PLAN_QTY * PO_PRICE");
        	this.dsPo.setColumn(0, "DLV_AMT", totAmt);
        	this.dsPoItem.filter("");
        	this.dsPoItem.set_enableevent(true);
        }

        this.div_1_Button00_onclick = function(obj,e)
        {
        	//if(!this.gfnConfirm("납품서를 작성 하시겠습니까?")) return;
        	if(!application.confirm( "납품서를 작성 하시겠습니까?" , "확인", "오류" )){
        		return false;
        	}
        	application.gdsUserInfo.setColumn(0, "BRANCH_CD", this.dsPo.getColumn(0, "BRANCH_CD"));

        	var sSvcID = "saveDlv"; 
        	var sController = "epro.dlv.service.SDlvService.saveDlv";
        	var sInDatasets = "dsPo=dsPo:A dsPoItem=dsPoItem:A in_exp=ds_exp:A";
        	var sOutDatasets = "ds_po=in_po";
        	var sCallbackFunc = "fnTrCallBack";
        	
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        
        /**
        	@function	poItemRowUp
        	@desc   	자재를 위로 이동하여 편집
        */
        this.poItemRowUp = function(obj,e)
        {
        	if(this.dsPoItem.rowposition==0) return;
        	this.dsPoItem.set_rowposition(this.dsPoItem.rowposition-1);	
        }

        /**
        	@function	poItemRowDown
        	@desc   	자재를 아래로 이동하여 편집
        */
        this.poItemRowDown = function(obj,e)
        {
        	if(this.dsPoItem.rowposition==this.dsPoItem.rowcount-1) return;
        	this.dsPoItem.set_rowposition(this.dsPoItem.rowposition+1);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPoItem.addEventHandler("oncolumnchanged", this.dsPoItemOncolumnchanged, this);
            this.dsPoItem.addEventHandler("onrowposchanged", this.ds_poItem_onrowposchanged, this);
            this.dsExp.addEventHandler("oncolumnchanged", this.ds_exp_oncolumnchanged, this);
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.div_1.Button00.addEventHandler("onclick", this.div_1_Button00_onclick, this);
            this.div_21.tab_head.addEventHandler("onchanged", this.div_21_tab_head_onchanged, this);
            this.div_21.tab_head.tabpage1.rdo_altPartialDlv.addEventHandler("onitemclick", this.div_21_Tab01_tabp01_Radio00_onitemclick, this);
            this.divViewCompTitle01.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompTitle00.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompBody00.grdList.addEventHandler("oncelldblclick", this.grdListDblclick, this);
            this.divViewCompBody00.grdList.addEventHandler("oncellclick", this.divViewCompBody00_grdList_oncellclick, this);
            this.divViewCompBody00.grdList.addEventHandler("onheadclick", this.divViewCompBody00_grdList_onheadclick, this);
            this.divViewCompTitle02.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompTitle03.staViewCompTitle01.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divvidg.grd_poPay.addEventHandler("onkeyup", this.div_21_Tab01_tabp01_grd_poPay_onkeyup, this);
            this.divvidg.grd_poPay.addEventHandler("onmouseleave", this.div_21_Tab01_tabp01_grd_poPay_onmouseleave, this);
            this.Div00.cbo_itemChg.addEventHandler("onitemchanged", this.Div4_cbo_itemChg_onitemchanged, this);
            this.Div00.btn_poItemRowUp.addEventHandler("onclick", this.poItemRowUp, this);
            this.Div00.btn_poItemRowDown.addEventHandler("onclick", this.poItemRowDown, this);
            this.Div00.tab_item.tabpage2.grid_exp.addEventHandler("ontextchanged", this.div_41_tab_item_tabpage2_grid_exp_ontextchanged, this);
            this.Div00.tab_item.tabpage2.btn_Itm_Add.addEventHandler("onclick", this.div_41_tab_item_tabpage2_btn_Itm_Add_onclick, this);
            this.Div00.tab_item.tabpage2.btn_Itm_Del.addEventHandler("onclick", this.div_41_tab_item_tabpage2_btn_Itm_Del_onclick, this);

        };

        this.loadIncludeScript("SDlvPopup.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
