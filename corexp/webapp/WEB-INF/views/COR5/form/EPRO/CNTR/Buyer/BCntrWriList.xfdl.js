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
                this.set_titletext("계약작성현황");
                this._setFormPosition(0,0,1220,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCdCT10", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

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

            obj = new Dataset("dsCdZZ10", this);
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

            obj = new Dataset("dsCdCT20", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPrint", this);
            obj._setContents("<ColumnInfo><Column id=\"REF_KEY_1\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_2\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM1\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"TBL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFile", this);
            obj._setContents("<ColumnInfo><Column id=\"CNTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_ORDR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCancel", this);
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTemplate", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFileCond", this);
            obj._setContents("<ColumnInfo><Column id=\"REF_TBL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_1\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_2\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_3\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_4\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_5\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_COL_1\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_COL_2\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_COL_3\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_COL_4\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_COL_5\" type=\"STRING\" size=\"256\"/><Column id=\"DS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompCond01", "absolute", "0", "36", null, "108", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.getSetter("objNm").set("");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            obj = new Static("staWarning", "absolute", "-1", "87", null, "19", "1", null, this.divViewCompCond01);
            obj.set_taborder("49");
            obj.set_text("- 검색조건 없이 검색 시 속도가 저하 될 수 있습니다.");
            obj.set_cssclass("sta_WF_SearchText");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("sta_srchPoDay", "absolute", "0", "5", "170", "24", null, null, this.divViewCompCond01);
            obj.set_taborder("50");
            obj.set_text("계약템플릿");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label11", "absolute", "0", "60", null, "21", "85.87%", null, this.divViewCompCond01);
            obj.set_taborder("52");
            obj.set_text("계약담당자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("sta_srchPoDay00", "absolute", "0", "34", "170", "21", null, null, this.divViewCompCond01);
            obj.set_taborder("54");
            obj.set_text("계약명");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Combo("cboCntrTmplt", "absolute", "115", "5", "261", "24", null, null, this.divViewCompCond01);
            this.divViewCompCond01.addChild(obj.name, obj);
            var cboCntrTmplt_innerdataset = new Dataset("cboCntrTmplt_innerdataset", this.divViewCompCond01.cboCntrTmplt);
            cboCntrTmplt_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">계약서(공사)</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">상세계약서(공사)</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">상세계약서(상시도급)</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">상세계약서(폐기물)</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">상세계약서(단가)</Col></Row></Rows>");
            obj.set_innerdataset(cboCntrTmplt_innerdataset);
            obj.set_taborder("55");
            obj.set_innerdataset("@dsTemplate");
            obj.set_codecolumn("CNTR_TMPLT_NO");
            obj.set_datacolumn("TTL");
            obj = new Edit("edtCtnrTtl", "absolute", "115", "34", "261", "21", null, null, this.divViewCompCond01);
            obj.set_taborder("56");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("자재그룹명");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edCntrChrgrId", "absolute", "115", "60", "121", "21", null, null, this.divViewCompCond01);
            obj.set_taborder("57");
            obj.set_enable("false");
            obj.style.setStyleValue("color", "disabled", "black");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("objNm").set("구매요청자ID");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edCntrChrgrNm", "absolute", "238", "60", "213", "21", null, null, this.divViewCompCond01);
            obj.set_taborder("58");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("구매요청자명");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label04", "absolute", "428", "5", "116", "21", null, null, this.divViewCompCond01);
            obj.set_taborder("59");
            obj.set_text("협력회사");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("sta_bsnsPlc", "absolute", "428", "34", "66", "21", null, null, this.divViewCompCond01);
            obj.set_taborder("60");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("CD_CNTR_TYPE");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("ed_ptnrNo", "absolute", "523", "5", "121", "21", null, null, this.divViewCompCond01);
            obj.set_taborder("61");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("10");
            obj.set_enable("false");
            obj.style.setStyleValue("color", "disabled", "black");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("objNm").set("자재그룹코드");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtPtnrNm", "absolute", "646", "5", "214", "21", null, null, this.divViewCompCond01);
            obj.set_taborder("62");
            obj.set_lengthunit("utf8");
            obj.getSetter("objNm").set("자재그룹명");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Edit("edtCntrNo", "absolute", "523", "34", "337", "21", null, null, this.divViewCompCond01);
            obj.set_taborder("63");
            obj.getSetter("objNm").set("");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Button("btnSinglePop00", "absolute", "860", "5", "24", "21", null, null, this.divViewCompCond01);
            obj.set_taborder("64");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("구매요청자 검색 버튼");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Button("btnSinglePop01", "absolute", "451", "60", "24", "21", null, null, this.divViewCompCond01);
            obj.set_taborder("65");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("구매요청자 검색 버튼");
            this.divViewCompCond01.addChild(obj.name, obj);

            obj = new Div("divViewCompBody00", "absolute", "0", "160", null, null, "15", "0", this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "32", null, null, "0", "37", this.divViewCompBody00);
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"117\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"97\"/><Column size=\"400\"/><Column size=\"80\"/><Column size=\"101\"/><Column size=\"90\"/><Column size=\"109\"/><Column size=\"124\"/><Column size=\"98\"/><Column size=\"98\"/><Column size=\"88\"/><Column size=\"95\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"계약번호\"/><Cell col=\"2\" text=\"계약차수\"/><Cell col=\"3\" text=\"상태\"/><Cell col=\"4\" text=\"계약구분\"/><Cell col=\"5\" text=\"계약명\"/><Cell col=\"6\" text=\"첨부파일\"/><Cell col=\"7\" text=\"계약금액\"/><Cell col=\"8\" text=\"사업자번호\"/><Cell col=\"9\" text=\"협력업체명\"/><Cell col=\"10\" text=\"계약담당자\"/><Cell col=\"11\" text=\"계약일자\"/><Cell col=\"12\" text=\"합의요청일자\"/><Cell col=\"13\" text=\"계약시작일자\"/><Cell col=\"14\" text=\"계약종료일자\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\"/><Cell col=\"1\" cssclass=\"cell_link\" text=\"bind:CNTR_NO\" maskchar=\" \"/><Cell col=\"2\" text=\"bind:CNTR_ORDR\"/><Cell col=\"3\" text=\"bind:CD_CNTR_STTS_NM\"/><Cell col=\"4\" text=\"bind:CD_CNST_TYPE_NM\"/><Cell col=\"5\" style=\"align:left;\" cssclass=\"cell_link\" text=\"bind:TTL\"/><Cell col=\"6\" cssclass=\"cell_link\" text=\"bind:ATTCH_FILE_CNT\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CNTR_AMT\"/><Cell col=\"8\" text=\"bind:BIZ_NO\" mask=\"@@@-@@-@@@@@@\" maskchar=\" \"/><Cell col=\"9\" style=\"align:left;\" cssclass=\"cell_link\" text=\"bind:PTNR_NM\"/><Cell col=\"10\" cssclass=\"cell_link\" text=\"bind:CNTR_CHRGR_NM\"/><Cell col=\"11\" displaytype=\"date\" text=\"bind:CNTR_DAY\" mask=\"yyyy.MM.dd\" calendardisplaynulltype=\"none\"/><Cell col=\"12\" displaytype=\"date\" text=\"bind:CNTR_REQ_DT\" mask=\"yyyy.MM.dd\" calendardisplaynulltype=\"none\"/><Cell col=\"13\" displaytype=\"date\" text=\"bind:CNTR_BGN_DAY\" mask=\"yyyy.MM.dd\" calendardisplaynulltype=\"none\"/><Cell col=\"14\" displaytype=\"date\" text=\"bind:CNTR_END_DAY\" mask=\"yyyy.MM.dd\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "10", this.divViewCompBody00);
            obj.getSetter("objNm").set("페이징");
            obj.set_scrollbars("none");
            obj.set_taborder("2");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Button("btnCntrCancel", "absolute", null, "0", "87", "25", "0", null, this.divViewCompBody00);
            obj.set_taborder("3");
            obj.set_text("계약취소");
            obj.set_cssclass("btn_WF_Ssign");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Div("divViewCompCond00", "absolute", "0", "0", null, "36", "15", null, this);
            obj.set_cssclass("div_WF_SearchBg");
            obj.style.set_align("center");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);
            obj = new Static("sta_bsnsPlc", "absolute", "12", "6", "116", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("0");
            obj.set_text("계약일자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Div("divCntrDt", "absolute", "134", "6", "309", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.getSetter("objNm").set("계약기간");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Static("sta_geayakGyelFgCdDist", "absolute", "467", "6", "133", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("2");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.divViewCompCond00.addChild(obj.name, obj);
            obj = new Combo("cbo_cdGeayakGyelFg", "absolute", "546", "6", "148", "24", null, null, this.divViewCompCond00);
            this.divViewCompCond00.addChild(obj.name, obj);
            var cbo_cdGeayakGyelFg_innerdataset = new Dataset("cbo_cdGeayakGyelFg_innerdataset", this.divViewCompCond00.cbo_cdGeayakGyelFg);
            cbo_cdGeayakGyelFg_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows/>");
            obj.set_innerdataset(cbo_cdGeayakGyelFg_innerdataset);
            obj.set_taborder("3");
            obj.set_innerdataset("dsCdCT10");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("구분");
            obj = new Combo("cbo_cdGongSa", "absolute", "841", "6", "185", "24", null, null, this.divViewCompCond00);
            this.divViewCompCond00.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_innerdataset("dsCdZZ10");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.getSetter("objNm").set("예산구분");
            obj = new Static("sta_finYn", "absolute", "745", "6", "119", "24", null, null, this.divViewCompCond00);
            obj.set_taborder("5");
            obj.set_text("계약구분");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("lbcd").set("");
            this.divViewCompCond00.addChild(obj.name, obj);

            obj = new Button("btnFold", "absolute", "45.66%", "142", "56", "17", null, null, this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_Fold_Close");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 108, this.divViewCompCond01,
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
            		p.set_titletext("계약작성현황");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","divViewCompCond00.cbo_cdGeayakGyelFg","value","dsCondition","CD_CNTR_STTS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divViewCompCond01.cboCntrTmplt","value","dsCondition","CD_CNTR_TMPLT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divViewCompCond01.edtCtnrTtl","value","dsCondition","TTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","divViewCompCond01.edtCntrNo","value","dsCondition","CNTR_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","divViewCompCond01.edCntrChrgrNm","value","dsCondition","CNTR_CHRGR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","divViewCompCond01.edCntrChrgrId","value","dsCondition","CNTR_CHRGR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","divViewCompCond01.edtPtnrNm","value","dsCondition","PTNR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","divViewCompCond01.ed_ptnrNo","value","dsCondition","PTNR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","divViewCompCond00.cbo_cdGongSa","value","dsCondition","CD_CNST_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompCalFromTo.xfdl");
        };
        
        // User Script
        this.registerScript("BCntrWriList.xfdl", function(exports) {
        /**
         * @파일명			: BCntrWriList
         * @생성자			: 안성민
         * @생성일시		: 2019. 02. 28.
         * @설명			: 계약진행현황
         * @최종수정자		: 안성민
         * @최종수정일시	: 2019. 02. 28.
        */  

        
        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {
        	var param = [
        					 {code:"CT10", sSelectType:"A"}
        					 , {code:"CT20", sSelectType:"A"}
        					 , {code:"ZZ10", sSelectType:"A"}
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
        	gfnSetObj("A");
        	gfnMakeFileDs(this);
        	//그리드 기능 추가 : 마우스우클릭, 체크박스, 복사 붙여넣기(그리드 컴포넌트, 페이징div 컴포넌트, 폼오브젝트(this))
         	gfnSetGrdFunc(this.divViewCompBody00.grdList, this.divViewCompBody00.divPaging, this,{isTran:"Y", tranNm:"BRptService.searchRptRfqPrg", dsParam:this.dsCondition});
         	
         	//조회조건 Div 접기/펼치기 세팅
         	this.fnFold();
         		
        	//요청일자 셋팅
        	this.divViewCompCond00.divCntrDt.fnSetDate(this.dsCondition, "DAY_STR", "DAY_END");	
        	//this.dsCondition.setColumn(0,"DAY_STR",gfnToday());
        	//this.dsCondition.setColumn(0,"DAY_END","");
        	this.dsCondition.setColumn(0,"CD_CNST_TYPE","");
        	this.dsCondition.setColumn(0,"CD_CNTR_TMPLT","");
        	this.dsCondition.setColumn(0,"CD_CNTR_STTS","");
         	//로그인정보에 담겨져 있는 개인정보를 검색조건에 셋팅한다.
        	if(application.gdsUserRole.findRow("ROLE_ID","B_MANAGER")< 0 ){
        		this.dsCondition.setColumn(0,"CNTR_CHRGR_ID",application.gdsUserInfo.getColumn(0,"USER_ID"));
        		this.dsCondition.setColumn(0,"CNTR_CHRGR_NM",application.gdsUserInfo.getColumn(0,"USER_NM"));
        	}
        	this.fnTemplateSearch();
        	this.fnSearch();
        }

        this.fnTemplateSearch = function()
        {
        	var sSvcID = "searchTmplList";
        	var sController = "epro.cntr.service.BCntrService.searchTmplList";
        	var sInDatasets = "";
        	var sOutDatasets = "dsTemplate=dsTemplate";
        	var sCallbackFunc = "fnTrCallBack";
        		  
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
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
        	var sController = "epro.cntr.service.BCntrService.searchCntrWriList";
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
        	
        		case "search" :
        			break;
        		case "cntrCancel" :
        			gfnAlert("계약취소 되었습니다.");
        			this.fnSearch();
        			break;
        		case "searchTmplList":
        			this.dsTemplate.set_enableevent(false);
        			this.dsTemplate.insertRow(0)
        			this.dsTemplate.setColumn(0, "TTL", application.gdsLabel.getColumn(application.gdsLabel.rowposition, "EPRO_LABEL_00786"))
        			this.dsTemplate.setColumn(0, "CNTR_TMPLT_NO", "")
        			this.dsTemplate.set_enableevent(true);
        			break;
        		
        		default:
        		break;	
        	}
        }

        /**
          * @함수명   : fnUserSearch
          * @desc     :  입찰담당자 팝업 이벤트
          */
        this.fnUserSearch = function(obj,e)
        {
        	var sArg = { 
        					agv_id:this.dsCondition.getColumn(0,"CNTR_CHRGR_ID")
        					,agv_nm:this.dsCondition.getColumn(0,"CNTR_CHRGR_NM")
        			   }; 
        	gfnSearchComUser(this, "BUserSrchPopup", "fnPopCallBack", sArg);
        }

        /**
          * @함수명   : fnPtnrSearch
          * @desc     :  입찰담당자 팝업 이벤트
          */
        this.fnPtnrSearch = function(obj,e)
        {
        	var sArg = { 
        					agv_id:this.dsCondition.getColumn(0,"PTNR_ID")
        					,agv_nm:this.dsCondition.getColumn(0,"PTNR_NM")
        			   }; 
        	gfnSearchComPtnr(this, "BPtnrSrchPopup", "fnPopCallBack", sArg);
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
        		case "BUserSrchPopup":
        			if(!gfnIsNull(this.dsReturn.getColumn(0,"USER_ID"))){
        					this.dsCondition.setColumn(0,"CNTR_CHRGR_ID",this.dsReturn.getColumn(0,"USER_ID"));
        					this.dsCondition.setColumn(0,"CNTR_CHRGR_NM",this.dsReturn.getColumn(0,"USER_NM"));
        			}
        			break;
        		case "BPtnrSrchPopup":
        			if(!gfnIsNull(this.dsReturn.getColumn(0,"PTNR_ID"))){
        					this.dsCondition.setColumn(0,"PTNR_ID",this.dsReturn.getColumn(0,"PTNR_ID"));
        					this.dsCondition.setColumn(0,"PTNR_NM",this.dsReturn.getColumn(0,"PTNR_NM"));
        			}
        			break;
        			
        		default:
        			break;	
        	}
        }

        /**
        	@function	fnKeydown
        	@desc   	에디터 키이벤트
        */
        this.fnKeydown = function(obj,e)
        {
        	if(e.keycode == "13"){
        		obj.updateToDataset();
        		if(obj.name == "edCntrChrgrNm"){
        			this.fnUserSearch();
        		}else if(obj.name == "edtPtnrNm"){
        			this.fnPtnrSearch();
        		}else if(obj.name == "edtCtnrTtl" || obj.name == "edtCntrNo"){
        			this.fnSearch();
        		}
        	} else if(e.keycode == "8"){
        		obj.updateToDataset();
        		if(obj.name == "edCntrChrgrNm"){
        			this.dsCondition.setColumn(0,"CNTR_CHRGR_ID","");
        		}else if(obj.name == "edtPtnrNm"){
        			this.dsCondition.setColumn(0,"PTNR_ID","");
        		}
        	}
        }

        
        this.grdListOnCelldblclick = function(obj,e)
        {
        	if(gfnIsNull(this.dsList.getColumn(e.row, gfnGrdBindColId(obj, e.cell)))) return false;
        	
        	if("CNTR_NO" == gfnGrdBindColId(obj, obj.getCellPos())){ 
        		gfnSetTmprData("CNTR_NO" ,this.dsList.getColumn(e.row, "CNTR_NO"));
        		gfnSetTmprData("CNTR_ORDR", this.dsList.getColumn(e.row, "CNTR_ORDR"));
        		gfnOpenMenuUrl("BCNTR::BCntrDetail");
        	} else if("PTNR_NM" == gfnGrdBindColId(obj, obj.getCellPos())){ 
        		
        		var sArg = { agv_id : this.dsList.getColumn(this.dsList.rowposition, "PTNR_ID"),
        					 agv_nm : this.dsList.getColumn(this.dsList.rowposition, "PTNR_NM")
        					};
        		gfnModalPop(this, "CtnrPtnrInfo", "CPOP::BPtnrInfoPopup.xfdl", sArg, "fnPopCallBack", 550, 470);
        	} else if("CNTR_CHRGR_NM" == gfnGrdBindColId(obj, obj.getCellPos())){ 
        		var sArg = { agv_id : this.dsList.getColumn(this.dsList.rowposition, "CNTR_CHRGR_ID") };
        		gfnModalPop(this, "CtnrUserInfo", "CPOP::BUserInfoPopup.xfdl", sArg, "fnPopCallBack", 550, 220);
        	} else if("TTL" == gfnGrdBindColId(obj, obj.getCellPos())){ 
        		//갑지
        		if("CT11B03" == this.dsList.getColumn(e.row,"CD_CNTR_CTGR")) {
        			this.dsFileCond.deleteAll();
        			this.dsFileCond.addRow();
        			this.dsFileCond.setColumn(0, "BRANCH_CD", this.dsList.getColumn(this.dsList.rowposition, "BRANCH_CD"));
        			this.dsFileCond.setColumn(0, "REF_TBL_NM", "'MM_CNTR'");
        			this.dsFileCond.setColumn(0, "REF_KEY_COL_1", "CNTR_NO");
        			this.dsFileCond.setColumn(0, "REF_KEY_1", this.dsList.getColumn(this.dsList.rowposition, "CNTR_NO"));
        			this.dsFileCond.setColumn(0, "REF_KEY_COL_2", "CNTR_ORDR");
        			this.dsFileCond.setColumn(0, "REF_KEY_2", this.dsList.getColumn(this.dsList.rowposition, "CNTR_ORDR"));
        			this.dsFileCond.setColumn(0, "REF_KEY_COL_3", "FILE_TYPE");
        			this.dsFileCond.setColumn(0, "REF_KEY_3", "NORMAL");
        			this.dsFileCond.setColumn(0, "DS_NM", "dsCntr");
        			this.dsFileCond.setColumn(0, "FILE_GUBUN", "CNTR")
        			
        			var sArg = { arg:this.dsFileCond, agv_mode:"Y" };			
        			gfnModalPop(this, "cntrPrgAttchFilePopup", "CPOP::ComAttchFilePopup.xfdl", sArg, "fnPopCallBack", 1000, 300);
        		} 
        		//리포트
        		else if ("CT12T15" == this.dsList.getColumn(e.row,"CD_CNTR_TYPE")) {
        			var reportType =  this.dsList.getColumn(e.row,"REPORT_NM") + ".jrf";

        			this.dsPrint.deleteAll();
        			var nRow = this.dsPrint.addRow();
        			this.dsPrint.setColumn(nRow, "BRANCH_CD"	, this.dsList.getColumn(e.row,"BRANCH_CD"));
        			this.dsPrint.setColumn(nRow, "REF_KEY_1"	, this.dsList.getColumn(e.row,"CNTR_NO"));
        			this.dsPrint.setColumn(nRow, "REF_KEY_2"	, this.dsList.getColumn(e.row,"CNTR_ORDR"));
        			this.dsPrint.setColumn(nRow, "COL_NM1"		, "CNTR_NO");
        			this.dsPrint.setColumn(nRow, "COL_NM2"		, "CNTR_ORDR");
        			this.dsPrint.setColumn(nRow, "TBL_NM"		, "MM_CNTR_ADD");
        			
        			var sArg = { arg:this.dsPrint, reportFile:reportType};			
        			gfnModalPop(this, "PopupReport", "CPOP::ComUbiReportNoSign.xfdl", sArg, "fnPopCallBack", 1000, 950);
        		} 
        		//템플릿
        		else {			
        			var sArg = { agv_branchCd: this.dsList.getColumn(this.dsList.rowposition, "BRANCH_CD"),
        					agv_no: this.dsList.getColumn(this.dsList.rowposition, "CNTR_NO"),
        					agv_ordr: this.dsList.getColumn(this.dsList.rowposition, "CNTR_ORDR"),
        					agv_search: "Y",
        					agv_readonly: "Y",
        				};
        			gfnModalPop(this, "PopupTemplate", "CPOP::BComTmpltPopup.xfdl", sArg, "fnPopCallBack", 1000, 1000);
        		}
        			
        	} else if("ATTCH_FILE_CNT" == gfnGrdBindColId(obj, obj.getCellPos())){ 		
        		this.dsFileCond.deleteAll();
        		this.dsFileCond.addRow();
        		this.dsFileCond.setColumn(0, "BRANCH_CD", this.dsList.getColumn(this.dsList.rowposition, "BRANCH_CD"));
        		this.dsFileCond.setColumn(0, "REF_TBL_NM", "'MM_CNTR'");
        		this.dsFileCond.setColumn(0, "REF_KEY_COL_1", "CNTR_NO");
        		this.dsFileCond.setColumn(0, "REF_KEY_1", this.dsList.getColumn(this.dsList.rowposition, "CNTR_NO"));
        		this.dsFileCond.setColumn(0, "REF_KEY_COL_2", "CNTR_ORDR");
        		this.dsFileCond.setColumn(0, "REF_KEY_2", this.dsList.getColumn(this.dsList.rowposition, "CNTR_ORDR"));
        		this.dsFileCond.setColumn(0, "REF_KEY_COL_3", "FILE_TYPE");
        		this.dsFileCond.setColumn(0, "REF_KEY_3", "NORMAL");
        		this.dsFileCond.setColumn(0, "DS_NM", "dsCntr");
        		this.dsFileCond.setColumn(0, "FILE_GUBUN", "CNTR")
        		
        		var sArg = { arg:this.dsFileCond, agv_mode:"Y" };
        						
        		gfnModalPop(this, "cntrPrgAttchFilePopup", "CPOP::ComAttchFilePopup.xfdl", sArg, "fnPopCallBack", 1000, 300);
        		
        		
        		
        	}
        	
        	
        	
        }

        /**
        	@function	btnCntrCancelOnclick
        	@desc   	계약취소
        */
        this.btnCntrCancelOnclick = function(obj,e)
        {
        	if(!gfnIsGrdChk(this.dsList,'CHECKED')){
        		gfnAlert("취소할 계약을 선택해주세요.");
        		return;
        	}
        	if(this.dsList.getCaseCount("CHECKED==1") > 1){
        		gfnAlert("하나의 계약을 선택해주세요");
        		return;
        	}
        	var row = this.dsList.findRow("CHECKED", 1);
        	if("CT10APP" == this.dsList.getColumn(row, "CD_CNTR_STTS")) {
        		gfnAlert("품의요청된 계약은 취소할수 없습니다.");
        		return;
        	}
        	if("CT10CXL" == this.dsList.getColumn(row, "CD_CNTR_STTS")) {
        		gfnAlert("이미 취소된 계약입니다.");
        		return;
        	}
        	if("CT10WRI" == this.dsList.getColumn(row, "CD_CNTR_STTS")) {
        		gfnAlert("작성중인 계약은 취소할수 없습니다.");
        		return;
        	}
        	
        	if(!gfnConfirm("계약취소하시겠습니까?")) return;
        	
        	
        	this.dsCancel.deleteAll();
        	this.dsCancel.addRow();
        	this.dsCancel.setColumn(0, "BRANCH_CD", this.dsList.getColumn(row, "BRANCH_CD"));
        	this.dsCancel.setColumn(0, "CNTR_NO", this.dsList.getColumn(row, "CNTR_NO"));
        	this.dsCancel.setColumn(0, "CNTR_ORDR", this.dsList.getColumn(row, "CNTR_ORDR"));
        	
        	var sSvcID = "cntrCancel";
        	var sController = "epro.cntr.service.BCntrService.updateCntrCancel";
        	var sInDatasets = "dsCancel=dsCancel";
        	var sOutDatasets = "";
        	var sCallbackFunc = "fnTrCallBack";
        		
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.FormOninit, this);
            this.addEventHandler("onload", this.FormOnload, this);
            this.divViewCompCond01.edtCtnrTtl.addEventHandler("onkeydown", this.fnKeydown, this);
            this.divViewCompCond01.edtCtnrTtl.addEventHandler("ontextchanged", this.div_condition1_ed_ptnrNm_ontextchanged, this);
            this.divViewCompCond01.edCntrChrgrNm.addEventHandler("onkeydown", this.fnKeydown, this);
            this.divViewCompCond01.sta_WFDA_Label04.addEventHandler("onclick", this.Div_SOption_sta_WFDA_Label04_onclick, this);
            this.divViewCompCond01.edtPtnrNm.addEventHandler("onkeydown", this.fnKeydown, this);
            this.divViewCompCond01.edtPtnrNm.addEventHandler("ontextchanged", this.div_condition1_ed_ptnrNm_ontextchanged, this);
            this.divViewCompCond01.edtCntrNo.addEventHandler("onkeydown", this.fnKeydown, this);
            this.divViewCompCond01.btnSinglePop00.addEventHandler("onclick", this.fnPtnrSearch, this);
            this.divViewCompCond01.btnSinglePop01.addEventHandler("onclick", this.fnUserSearch, this);
            this.divViewCompBody00.grdList.addEventHandler("oncelldblclick", this.grdListOnCelldblclick, this);
            this.divViewCompBody00.btnCntrCancel.addEventHandler("onclick", this.btnCntrCancelOnclick, this);
            this.divViewCompCond00.sta_geayakGyelFgCdDist.addEventHandler("onclick", this.div_condition_sta_geayakGyelFgCdDist_onclick, this);
            this.btnFold.addEventHandler("onclick", this.btnFold_onclick, this);

        };

        this.loadIncludeScript("BCntrWriList.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
