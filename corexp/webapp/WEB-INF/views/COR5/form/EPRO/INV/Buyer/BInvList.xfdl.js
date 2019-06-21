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
                this.set_name("BCntrWriList");
                this.set_titletext("방주진행현황");
                this._setFormPosition(0,0,1220,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsReturn", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsList", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"RFQ_REQ_NO\" size=\"20\" type=\"STRING\"/><Column id=\"RFQ_ODR\" size=\"256\" type=\"INT\"/><Column id=\"CD_RFQ_STTS\" size=\"40\" type=\"STRING\"/><Column id=\"CD_DOC_CTGR\" size=\"40\" type=\"STRING\"/><Column id=\"TTL\" size=\"100\" type=\"STRING\"/><Column id=\"RFQ_CLOSE_DAY\" size=\"8\" type=\"STRING\"/><Column id=\"RFQ_CLOSE_TIME\" size=\"6\" type=\"STRING\"/><Column id=\"GOALAMT\" size=\"15\" type=\"INT\"/><Column id=\"CHRGR_NM\" size=\"50\" type=\"STRING\"/><Column id=\"REQ_DT\" size=\"256\" type=\"DATE\"/><Column id=\"ITEM_CNT\" size=\"20\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"20\" type=\"STRING\"/><Column id=\"TNDR_NO\" size=\"256\" type=\"STRING\"/><Column id=\"PTNR_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCondition", this);
            obj._setContents("<ColumnInfo><Column id=\"DAY_STR\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_END\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CNTR_STTS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CNTR_TMPLT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CNST_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PTNR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PTNR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_CHRGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_CHRGR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TTL\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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

            obj = new Dataset("dsCdPO13", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompCond01", "absolute", "0", "35", null, "110", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.getSetter("objNm").set("");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            obj = new Static("staWarning", "absolute", "-1", "89", null, "19", "0", null, this.divViewCompCond01);
            obj.set_taborder("49");
            obj.set_text("- 검색조건 없이 검색 시 속도가 저하 될 수 있습니다.");
            obj.set_cssclass("sta_WF_SearchText");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staPtnrNm", "absolute", "0", "5", "170", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("66");
            obj.set_text("발주번호");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("검색어-발주번호");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staRprstvNm", "absolute", "0", "34", "170", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("67");
            obj.set_text("검수번호");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("검색어-검수번호");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staPtnrChgDt", "absolute", "0", "63", "170", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("68");
            obj.set_text("계산서종류");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("검색어-계산서종류");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staPtnrNm00", "absolute", "476", "5", "118", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("70");
            obj.set_text("지급계정");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("검색어-지급계정");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staPtnrNm01", "absolute", "476", "34", "118", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("71");
            obj.set_text("공제구분");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("검색어-공제구분");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Combo("cboCdPymtCndtn", "absolute", "594", "5", "141", "24", null, null, this.divViewCompCond01);
            this.divViewCompCond01.addChild(obj.name, obj);
            var cboCdPymtCndtn_innerdataset = new Dataset("cboCdPymtCndtn_innerdataset", this.divViewCompCond01.cboCdPymtCndtn);
            cboCdPymtCndtn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">계약서(공사)</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">상세계약서(공사)</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">상세계약서(상시도급)</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">상세계약서(폐기물)</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">상세계약서(단가)</Col></Row></Rows>");
            obj.set_innerdataset(cboCdPymtCndtn_innerdataset);
            obj.set_taborder("72");
            obj.set_innerdataset("@dsCdCM13");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("검색조건-지급계정");
            obj = new Combo("cboIntNtax", "absolute", "594", "34", "141", "24", null, null, this.divViewCompCond01);
            this.divViewCompCond01.addChild(obj.name, obj);
            var cboIntNtax_innerdataset = new Dataset("cboIntNtax_innerdataset", this.divViewCompCond01.cboIntNtax);
            cboIntNtax_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">[전체]</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">과세</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">비과세</Col></Row></Rows>");
            obj.set_innerdataset(cboIntNtax_innerdataset);
            obj.set_taborder("73");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("objNm").set("검색조건-공제구분");
            obj = new Static("staPtnrNm02", "absolute", "741", "5", "118", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("74");
            obj.set_text("발주일자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("검색어-발주일자");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divPoDt", "absolute", "864", "5", "301", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("75");
            obj.set_text("Div01");
            obj.getSetter("objNm").set("검색조건-발주일자");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staPtnrChgDt00", "absolute", "689", "35", "170", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("76");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("검색어-품목");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("staPtnrNm03", "absolute", "476", "62", "118", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("84");
            obj.set_text("발주유형");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("검색어-발주유형");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Combo("cboCdPoCtgr", "absolute", "594", "62", "141", "24", null, null, this.divViewCompCond01);
            this.divViewCompCond01.addChild(obj.name, obj);
            var cboCdPoCtgr_innerdataset = new Dataset("cboCdPoCtgr_innerdataset", this.divViewCompCond01.cboCdPoCtgr);
            cboCdPoCtgr_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">계약서(공사)</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">상세계약서(공사)</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">상세계약서(상시도급)</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">상세계약서(폐기물)</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">상세계약서(단가)</Col></Row></Rows>");
            obj.set_innerdataset(cboCdPoCtgr_innerdataset);
            obj.set_taborder("85");
            obj.set_innerdataset("@dsCdPO13");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("검색조건-발주유형");
            obj = new Combo("cboCdTaxKind", "absolute", "170", "63", "141", "24", null, null, this.divViewCompCond01);
            this.divViewCompCond01.addChild(obj.name, obj);
            var cboCdTaxKind_innerdataset = new Dataset("cboCdTaxKind_innerdataset", this.divViewCompCond01.cboCdTaxKind);
            cboCdTaxKind_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">계약서(공사)</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">상세계약서(공사)</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">상세계약서(상시도급)</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">상세계약서(폐기물)</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">상세계약서(단가)</Col></Row></Rows>");
            obj.set_innerdataset(cboCdTaxKind_innerdataset);
            obj.set_taborder("86");
            obj.set_innerdataset("@dsCdPO13");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("검색조건-");
            obj = new Combo("cboCdTaxCd", "absolute", "314", "63", "141", "24", null, null, this.divViewCompCond01);
            this.divViewCompCond01.addChild(obj.name, obj);
            var cboCdTaxCd_innerdataset = new Dataset("cboCdTaxCd_innerdataset", this.divViewCompCond01.cboCdTaxCd);
            cboCdTaxCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">계약서(공사)</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">상세계약서(공사)</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">상세계약서(상시도급)</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">상세계약서(폐기물)</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">상세계약서(단가)</Col></Row></Rows>");
            obj.set_innerdataset(cboCdTaxCd_innerdataset);
            obj.set_taborder("87");
            obj.set_innerdataset("@dsCdPO13");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("검색조건-");
            obj = new Div("divDlvNo", "absolute", "170", "34", "220", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("88");
            obj.set_text("Div00");
            obj.getSetter("objNm").set("검색조건-검수번호");
            obj.set_url("CCOMP::ComSrchInput.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divPoNo", "absolute", "170", "5", "220", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("89");
            obj.set_text("Div00");
            obj.getSetter("objNm").set("검색조건-발주번호");
            obj.set_url("CCOMP::ComSrchInput.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Div("divMtrl", "absolute", "864", "35", "292", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("90");
            obj.set_text("Div00");
            obj.getSetter("objNm").set("검색조건-품목");
            obj.set_url("CCOMP::ComSrchMtrl.xfdl");
            this.divViewCompCond01.addChild(obj.name, obj);

            obj = new Div("divViewCompBody00", "absolute", "0", "161", null, null, "15", "0", this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "29", null, null, "0", "37", this.divViewCompBody00);
            obj.set_autofittype("none");
            obj.set_binddataset("dsList");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
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
            obj.getSetter("objNm").set("검색결과 그리드");
            obj.set_taborder("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"32\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"90\"/><Column size=\"150\"/><Column size=\"90\"/><Column size=\"250\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"90\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"검수번호\"/><Cell col=\"2\" text=\"지급계정\"/><Cell col=\"3\" text=\"전표구분\"/><Cell col=\"4\" text=\"계산서종류\"/><Cell col=\"5\" text=\"공제구분\"/><Cell col=\"6\" text=\"내역\"/><Cell col=\"7\" text=\"사업자번호\"/><Cell col=\"8\" text=\"협력사명\"/><Cell col=\"9\" text=\"검수담당자\"/><Cell col=\"10\" text=\"검수완료일자\"/><Cell col=\"11\" text=\"발주번호\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\"/><Cell col=\"1\" edittype=\"none\" cssclass=\"cell_link\" text=\"bind:DLV_NO\" maskchar=\" \"/><Cell col=\"2\" text=\"bind:CD_PYMT_CNDTN_NM\"/><Cell col=\"3\" text=\"bind:ALT_ASSET_NM\"/><Cell col=\"4\" text=\"bind:CD_TAX_KIND_NM\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"none\" text=\"bind:INT_NTAX_NM\"/><Cell col=\"6\" style=\"align:left;\" text=\"bind:TTL\" maskchar=\"_\" suppressalign=\"first\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"none\" style=\"padding:3 3 3 3;\" text=\"bind:BIZ_NO\" editautoselect=\"true\" editdisplay=\"edit\"/><Cell col=\"8\" cssclass=\"cell_link\" text=\"bind:PTNR_NM\"/><Cell col=\"9\" displaytype=\"normal\" edittype=\"none\" text=\"bind:INSP_CHRGR_NM\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" displaytype=\"date\" edittype=\"date\" text=\"bind:INSP_CMPLT_DT\" mask=\"yyyy.MM.dd\"/><Cell col=\"11\" cssclass=\"cell_link\" text=\"bind:PO_NO\"/></Band></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "9", this.divViewCompBody00);
            obj.getSetter("objNm").set("페이징");
            obj.set_scrollbars("none");
            obj.set_taborder("2");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnInvWrt", "absolute", null, "0", "87", "24", "0", null, this.divViewCompBody00);
            obj.set_taborder("3");
            obj.set_text("송장작성");
            obj.set_cssclass("btn_WF_Ssign");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Div("divViewCompCond00", "absolute", "0", "0", null, "36", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.style.set_align("center");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);
            obj = new Div("divDlvDt", "absolute", "594", "6", "301", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.getSetter("objNm").set("검색조건-검수일자");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Combo("cboCdPymtCndtn", "absolute", "1004", "6", "185", "24", null, null, this.divViewCompCond00);
            this.divViewCompCond00.addChild(obj.name, obj);
            var cboCdPymtCndtn_innerdataset = new Dataset("cboCdPymtCndtn_innerdataset", this.divViewCompCond00.cboCdPymtCndtn);
            cboCdPymtCndtn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">[전체]</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">자산</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">비용</Col></Row></Rows>");
            obj.set_innerdataset(cboCdPymtCndtn_innerdataset);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("objNm").set("검색조건-전표구분");
            obj = new Static("staPtnrNm", "absolute", "0", "5", "170", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("6");
            obj.set_text("협력사");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("검색어-협력사");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staPtnrNm00", "absolute", "476", "5", "118", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("7");
            obj.set_text("검수일자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("검색어-검수일자");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("staPtnrNm01", "absolute", "886", "5", "118", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("8");
            obj.set_text("전표구분");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_padding("0 10 0 6");
            obj.style.set_align("right middle");
            obj.getSetter("objNm").set("검색어-전표구분");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Div("divPtnr", "absolute", "170", "5", "250", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("9");
            obj.set_text("Div00");
            obj.getSetter("objNm").set("검색조건-협력사");
            obj.set_url("CCOMP::ComSrchPtnr.xfdl");
            this.divViewCompCond00.addChild(obj.name, obj);

            obj = new Button("btnFold", "absolute", "45.66%", "145", "56", "17", null, null, this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_Fold_Close");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", null, "0", "15", null, "0", "0", this);
            obj.set_taborder("7");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "81.48%", "185", "211", "5", null, null, this);
            obj.set_taborder("11");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 110, this.divViewCompCond01,
            	//-- Layout function
            	function(p) {
            		p.set_cssclass("div_WF_SearchBg");
            		p.getSetter("objNm").set("");
            		p.set_taborder("0");

            	}
            );
            this.divViewCompCond01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_text("Div00");

            	}
            );
            this.divViewCompBody00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 36, this.divViewCompCond00,
            	//-- Layout function
            	function(p) {
            		p.set_cssclass("div_WF_SearchBg");
            		p.style.set_align("center");
            		p.set_taborder("3");

            	}
            );
            this.divViewCompCond00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1220, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("방주진행현황");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item8","divViewCompCond00.cboCdPymtCndtn","value","dsCondition","ALT_ASSET");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRprstvNmVi","divViewCompCond01.staRprstvNm","visible","dsObjBindVi","staRprstvNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staRprstvNmEn","divViewCompCond01.staRprstvNm","enable","dsObjBindEn","staRprstvNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPtnrChgDtVi","divViewCompCond01.staPtnrChgDt","visible","dsObjBindVi","staPtnrChgDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staPtnrChgDtEn","divViewCompCond01.staPtnrChgDt","enable","dsObjBindEn","staPtnrChgDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","divViewCompCond01.cboCdPymtCndtn","value","dsCondition","CD_PYMT_CNDTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","divViewCompCond01.cboIntNtax","value","dsCondition","INT_NTAX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","divViewCompCond01.staPtnrChgDt00","visible","dsObjBindVi","staPtnrChgDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","divViewCompCond01.staPtnrChgDt00","enable","dsObjBindEn","staPtnrChgDt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","divViewCompCond01.cboCdPoCtgr","value","dsCondition","CD_PO_CTGR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","divViewCompCond01.cboCdTaxKind","value","dsCondition","CD_TAX_KIND");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","divViewCompCond01.cboCdTaxCd","value","dsCondition","CD_TAX_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompCalFromTo.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComSrchInput.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComSrchInput.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComSrchMtrl.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompCalFromTo.xfdl");
            this._addPreloadList("fdl", "CCOMP::ComSrchPtnr.xfdl");
        };
        
        // User Script
        this.registerScript("BInvList.xfdl", function(exports) {
        /**
         * @파일명			: BInvList
         * @생성자			: 배열
         * @생성일시		: 2019. 04. 29.
         * @설명			: 건별송자장현황
         * @최종수정자		: 배열
         * @최종수정일시	: 2019. 04. 29.
        */  

        
        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {
        	var param = [
        					 {code:"IV20", sSelectType:"A"}
        					 , {code:"IV21", sSelectType:"A"}
        					 , {code:"CM13", sSelectType:"A"}
        					 , {code:"PO13", sSelectType:"A"}
        				];				
        	gfnGetCode(this, param);
        }

        /**
          * @함수명	: BRfqPrgList_oninit
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.InitEventInfo(이벤트변수)
          * @desc     	: 폼 oninit이벤트
          */
        this.FormOninit = function(obj,e)
        {
        	this.fnSetCode();
        }

        /**
        	@함수명	fnFold
        	@desc   	타이틀 접기/펼치기 기능
        */
        this.fnFold = function()
        {
        	var sArg = [ 
        				{ttl:this.btnFold, body:this.divViewCompCond01,initFold:true}
        		   ];		   
        	gfnDivFold(this, sArg);
        }

        /**
          * @함수명	: fnFormOnload
          * @input    	: obj:Form(폼 오브젝트), e:nexacr o.LoadEventInfo(이벤트변수)
          * @desc     	: 폼 onload이벤트
          */
        this.FormOnload = function(obj,e)
        {	
        	
        	gfnSetGrdFunc(this.divViewCompBody00.grdList
        				, this.divViewCompBody00.divPaging
        				, this
        				,{isTran:"Y", tranNm:"BRptService.searchRptRfqPrg", dsParam:this.dsCondition}
        				);

         		
        	//요청일자 셋팅
        	this.divViewCompCond00.divDlvDt.fnSetDate(this.dsCondition, "INSP_DAY_STR", "INSP_DAY_END");	
        	this.divViewCompCond00.divPtnr.fnSet(this.dsCondition, "PTNR_ID", "PTNR_NM");
        	this.divViewCompCond01.divPoDt.fnSetDate(this.dsCondition, "PO_DAY_STR", "PO_DAY_END");
        	this.divViewCompCond01.divPoNo.fnSet(this.dsCondition, "PO_NO_ARR", "fnSearch");
        	this.divViewCompCond01.divDlvNo.fnSet(this.dsCondition, "DLV_NO_ARR", "fnSearch");
        	this.divViewCompCond01.divMtrl.fnSet(this.dsCondition, "MTRL_CD", "MTRL_NM");
        	
        	this.dsCondition.addRow();	
        	this.dsCondition.setColumn(0, "CD_DOC_CTGR"		, "");
        	this.dsCondition.setColumn(0, "CD_PYMT_CNDTN"	, "");
        	this.dsCondition.setColumn(0, "INT_NTAX"		, "");
        	this.dsCondition.setColumn(0, "CD_TAX_KIND"		, "");
        	this.dsCondition.setColumn(0, "ALT_ASSET"		, "");
        	this.dsCondition.setColumn(0, "CD_PO_CTGR"		, "");
        	//this.dsCondition.setColumn(0, "INSP_DAY_STR",this.gfn_addDay(this.gfn_today(),-7));
         	//this.dsCondition.setColumn(0, "INSP_DAY_END",this.gfn_today());
        	
        	
        	gfnSetObj("A");
        	this.fnFold();
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
        this.fnSearch = function(svcId)
        {
        	if(!this.fnPreSearch()) return false;
        		
        	var sSvcID = "search";
        	var sController = "epro.inv.service.BInvService.ivEachSrch";
        	var sInDatasets = "dsCondition=dsCondition";
        	var sOutDatasets = "dsList=dsList";
        	var sCallbackFunc = "fnTrCallBack";
        		
         	var	oPaging = [      
                            {inDs:this.dsCondition, grid:this.divViewCompBody00.grdList, divPaging:this.divViewCompBody00.divPaging}
                        ];
             gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc, oPaging);
        }

        this.fnAdd = function() 
        {
        	gfnOpenMenuUrl("BCNTR::BCntrDetail");
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

        	}
        }

        /**
          * @함수명	: divViewCompCond00_btnPtnr_onclick
          * @input    	: strSvcID(트랜잭션 ID), strErrCd(트랜잭션 결과 코드), strErrMsg(트랜잭션 결과 메시지)
          * @desc     	: Transaction Callback함수
          */
        this.divViewCompCond00_btnPtnr_onclick = function(obj,e)
        {
        	var sArg = {
        				agv_id 	: this.dsCondition.getColumn(0,"PTNR_ID")
        				,agv_nm : this.dsCondition.getColumn(0,"PTNR_NM")
        				};
        	gfnModalPop(this, "searchPtnr", "CPOP::BPtnrSrchPopup.xfdl", sArg, "fnPopCallBack", 800, 600);
        }

        
        /**
        	@function	fnPopCallBack()
        	@desc   	팝업 CallBack 함수
        */
        this.fnPopCallBack = function(sPopupId,rtn)
        {
        	if(gfnIsNull(rtn)) return;
        	
        	this.dsReturn.loadXML(rtn);
        	
        	trace(this.dsReturn.saveXML());
        	
        	switch(sPopupId){
        			case "searchPtnr" :
        				this.dsCondition.setColumn(0,"PTNR_ID",this.dsReturn.getColumn(0,"PTNR_ID"));
        				this.dsCondition.setColumn(0,"PTNR_NM",this.dsReturn.getColumn(0,"PTNR_NM"));
        			break;
        		default:
        			break;	
        	}
        }

        this.divViewCompCond00_edtPtnrNm_onkeyup = function(obj,e)
        {
        	//Enter 입력시
        	if(e.keycode == "13")
        	{
        		if(obj.name == "edtPtnrNm")
        		{
        			this.divViewCompCond00_btnPtnr_onclick();
        		}
        	}
        }

        this.divViewCompCond00_edtPtnrNm_ontextchanged = function(obj,e)
        {
        	if(obj.name == "edtPtnrNm")
        	{
        		this.gfn_initKey(this.dsCondition,e,"PTNR_ID");	
        	}
        }

        /**
          * @함수명	: divViewCompBody00_grdList_oncelldblclick
          * @input    	: strSvcID(트랜잭션 ID), strErrCd(트랜잭션 결과 코드), strErrMsg(트랜잭션 결과 메시지)
          * @desc     	: Transaction Callback함수
          */
        this.divViewCompBody00_grdList_oncelldblclick = function(obj,e)
        {
        	if(gfnIsNull(this.dsList.getColumn(e.row,gfnGrdBindColId(obj, e.cell)))) return false;

        	if(gfnGrdBindColId(obj, e.cell)=="DLV_NO")	//검수번호
        	{
        		gfnSetTmprData("DLV_NO" ,this.dsList.getColumn(e.row, "DLV_NO"));
        		gfnOpenMenuUrl("BINV::BInvDetail");
        	}
        	else if(gfnGrdBindColId(obj, e.cell)=="PTNR_NM")	//협력사명
        	{
        		var sArg = { agv_id : this.dsList.getColumn(e.row, "PTNR_ID"),
        				 agv_nm : this.dsList.getColumn(e.row, "PTNR_NM")
        				};
        		gfnModalPop(this, "CtnrPtnrInfo", "CPOP::BPtnrInfoPopup.xfdl", sArg, "fnPopCallBack", 550, 500);
        	}
        	else if(gfnGrdBindColId(obj, e.cell)=="INSP_CHRGR_NM")	//검수담당자
        	{
        		var sArg = { agv_id : this.dsList.getColumn(this.dsList.rowposition, "INSP_CHRGR_NM") };
        		gfnModalPop(this, "CtnrUserInfo", "CPOP::BUserInfoPopup.xfdl", sArg, "fnPopCallBack", 550, 230);
        	}
        	else if(gfnGrdBindColId(obj, e.cell)=="PO_NO")	//발주번호
        	{
        		gfnSetTmprData("PO_NO" ,this.dsList.getColumn(e.row, "PO_NO"));
        		gfnOpenMenuUrl("BPOR::BPorDetail");
        	}
        }

        this.divViewCompBody00_btnInvWrt_onclick = function(obj,e)
        {
        	var rtn = gfnGetChkRowString(this.dsList);	
        	if(!rtn) return;
        	
        	gfnSetTmprData("DLV_NO"			, this.dsList.getColumn(this.dsList.rowposition,	"DLV_NO"));	
        	gfnSetTmprData("INT_NTAX"		, this.dsList.getColumn(this.dsList.rowposition,	"INT_NTAX"));
        	gfnSetTmprData("ALT_ASSET"		, this.dsList.getColumn(this.dsList.rowposition,	"ALT_ASSET"));
        	gfnSetTmprData("GUBUN"			, "ONE");
        	gfnOpenMenuUrl("BINV::BInvDetail.xfdl");
        	
        	this.dsList.deleteRow(this.dsList.rowposition);	
        }

        this.fnCboCdTaxKindOnitemchanged = function(obj,e)
        {
        	this.dsCondition.cboCdTaxCd.set_enable(true);

        	this.dsCdIV21.filter("UP_CD_ID=='"+ e.postvalue +"'");	
        	
        	var nRow = this.dsCdIV21.insertRow(0);
        	this.dsCdIV21.setColumn(nRow, "CD_ID", "");
        	this.dsCdIV21.setColumn(nRow, "CD_NM_LO", "[전체]");
        	
        	this.dsCondition.setColumn(0, "CD_TAX_CD", "");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.FormOninit, this);
            this.addEventHandler("onload", this.FormOnload, this);
            this.divViewCompCond01.staPtnrNm.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond01.staRprstvNm.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.divViewCompCond01.staPtnrNm00.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond01.staPtnrNm01.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond01.staPtnrNm02.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond01.staPtnrNm03.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond01.cboCdTaxKind.addEventHandler("onitemchanged", this.fnCboCdTaxKindOnitemchanged, this);
            this.divViewCompBody00.grdList.addEventHandler("oncelldblclick", this.divViewCompBody00_grdList_oncelldblclick, this);
            this.divViewCompBody00.btnInvWrt.addEventHandler("onclick", this.divViewCompBody00_btnInvWrt_onclick, this);
            this.divViewCompCond00.staPtnrNm.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond00.staPtnrNm00.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.divViewCompCond00.staPtnrNm01.addEventHandler("onclick", this.divViewCompCond00_staPtnrNm_onclick, this);
            this.btnFold.addEventHandler("onclick", this.btnFold_onclick, this);

        };

        this.loadIncludeScript("BInvList.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
