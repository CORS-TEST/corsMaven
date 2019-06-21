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
                this.set_name("BDlvPopup");
                this.set_titletext("검수문서생성");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_1", "absolute", "10", "46", null, "43", "10", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBg3");
            obj.getSetter("objNm").set("컨트롤 박스");
            this.addChild(obj.name, obj);
            obj = new Button("btn_dlvCreate", "absolute", null, "10", "93", "24", "5", null, this.div_1);
            obj.set_taborder("0");
            obj.set_text("검수문서생성");
            obj.set_cssclass("btn_WF_SearchBtn");
            obj.getSetter("objNm").set("납품서작성버튼");
            this.div_1.addChild(obj.name, obj);

            obj = new Div("div_2", "absolute", "10", "101", null, "24", "10", null, this);
            obj.set_taborder("1");
            obj.getSetter("objNm").set("DIV-헤더 타이틀");
            this.addChild(obj.name, obj);
            obj = new Button("btn_opHead", "absolute", "0", "0", "147", "24", null, null, this.div_2);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_cssclass("btn_WF_DivClose");
            obj.getSetter("lbcd").set("");
            this.div_2.addChild(obj.name, obj);

            obj = new Div("div_21", "absolute", "10", "131", null, "47", "15", null, this);
            obj.set_taborder("2");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("DIV-헤더 상세");
            this.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label01", "absolute", "0", "0", null, "38", "0", null, this.div_21);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_21.addChild(obj.name, obj);
            obj = new Static("sta_CrtrNm01", "absolute", "15", "7", "117", "24", null, null, this.div_21);
            obj.set_taborder("11");
            obj.set_text("<fc v='red'>* </fc>검수일자");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("objNm").set("작성자");
            obj.getSetter("lbcd").set("");
            this.div_21.addChild(obj.name, obj);
            obj = new Calendar("cal_dlvPlanDay", "absolute", "132", "7", "125", "24", null, null, this.div_21);
            this.div_21.addChild(obj.name, obj);
            obj.set_taborder("12");
            obj.set_dateformat("yyyy.MM.dd ddd");
            obj.set_editformat("yyyy.MM.dd ddd");
            obj.set_cssclass("cal_default");
            obj.getSetter("objNm").set("납품예정일자");
            obj = new Static("st_Ttl03", "absolute", "53.35%", "-101", null, "29", "33.83%", null, this.div_21);
            obj.set_taborder("13");
            obj.set_text("설명회  소요 시간");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("objNm").set("발주서명");
            this.div_21.addChild(obj.name, obj);
            obj = new Static("st_CrDt00", "absolute", "358", "7", "125", "24", null, null, this.div_21);
            obj.set_taborder("14");
            obj.set_text("분할납품");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("발주유형");
            this.div_21.addChild(obj.name, obj);
            obj = new Radio("Radio00", "absolute", "48.65%", "8", null, "21", "37.64%", null, this.div_21);
            this.div_21.addChild(obj.name, obj);
            var Radio00_innerdataset = new Dataset("Radio00_innerdataset", this.div_21.Radio00);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">가능</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">불가능</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_readonly("true");
            obj.set_direction("vertical");
            obj.set_enable("false");

            obj = new Div("div_3", "absolute", "10", "183", null, "24", "10", null, this);
            obj.set_taborder("3");
            obj.set_visible("false");
            obj.getSetter("objNm").set("DIV-품목 타이틀");
            this.addChild(obj.name, obj);
            obj = new Button("btn_opItem", "absolute", "0", "0", "160", "24", null, null, this.div_3);
            obj.set_taborder("42");
            obj.set_text("지급차수");
            obj.set_cssclass("btn_WF_DivClose");
            obj.getSetter("lbcd").set("");
            this.div_3.addChild(obj.name, obj);
            obj = new Static("st_Ttl03", "absolute", "53.39%", "-101", null, "29", "33.86%", null, this.div_3);
            obj.set_taborder("43");
            obj.set_text("설명회  소요 시간");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.getSetter("objNm").set("발주서명");
            this.div_3.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "96.09%", "3", null, "30", "1.07%", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_POP_CloseBtn");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title", "absolute", "0%", "3", null, "30", "89.84%", null, this);
            obj.set_taborder("5");
            obj.set_text("검수문서생성");
            obj.set_cssclass("sta_POP_PopTitle");
            this.addChild(obj.name, obj);

            obj = new Div("div_4", "absolute", "10", "348", null, "24", "10", null, this);
            obj.set_taborder("6");
            obj.set_text("Div_H01");
            obj.set_cssclass("div_WF_bg");
            obj.set_visible("false");
            obj.getSetter("objNm").set("DIV-품목 타이틀");
            this.addChild(obj.name, obj);
            obj = new Button("btn_OP_Item", "absolute", "0", "0", "105", "24", null, null, this.div_4);
            obj.set_taborder("0");
            obj.set_text("품목");
            obj.set_cssclass("btn_WF_DivClose");
            obj.getSetter("objNm").set("접기펼치기 버튼");
            obj.getSetter("lbcd").set("");
            this.div_4.addChild(obj.name, obj);

            obj = new Div("div_31", "absolute", "10", "215", null, "140", "10", null, this);
            obj.set_taborder("7");
            obj.set_visible("false");
            obj.getSetter("objNm").set("DIV-품목 상세");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_poPay", "absolute", "0", "0", null, null, "0", "20", this.div_31);
            obj.set_taborder("0");
            obj.set_binddataset("ds_poPay");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj.getSetter("objNm").set("품목 그리드");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"742\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"차수\"/><Cell col=\"1\" text=\"지급율(%)\"/><Cell col=\"2\" text=\"지급금액\"/><Cell col=\"3\" text=\"지급조건\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" style=\"background:expr:currow==dataset.getRowCount()-1 ? &quot;yellow&quot; : &quot;&quot;;background2:expr:currow==dataset.getRowCount()-1 ? &quot;yellow&quot; : &quot;&quot;;font: ;\" text=\"bind:ODR\" tooltiptext=\"bind:ODR\"/><Cell col=\"1\" displaytype=\"normal\" style=\"background:expr:currow==dataset.getRowCount()-1 ? &quot;yellow&quot; : &quot;&quot;;background2:expr:currow==dataset.getRowCount()-1 ? &quot;yellow&quot; : &quot;&quot;;font: ;\" text=\"bind:PYMT_RT\" tooltiptext=\"bind:PYMT_RT\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;background:expr:currow==dataset.getRowCount()-1 ? &quot;yellow&quot; : &quot;&quot;;background2:expr:currow==dataset.getRowCount()-1 ? &quot;yellow&quot; : &quot;&quot;;\" text=\"bind:PYMT_PLN_AMT\" mask=\"#,##0\" tooltiptext=\"bind:PYMT_PLN_AMT\"/><Cell col=\"3\" style=\"align:left;background:expr:currow==dataset.getRowCount()-1 ? &quot;yellow&quot; : &quot;&quot;;background2:expr:currow==dataset.getRowCount()-1 ? &quot;yellow&quot; : &quot;&quot;;\" text=\"bind:RMARK\" tooltiptext=\"bind:RMARK\"/></Band></Format></Formats>");
            this.div_31.addChild(obj.name, obj);

            obj = new Div("div_41", "absolute", "10", "380", null, null, "10", "0", this);
            obj.set_taborder("8");
            obj.set_visible("false");
            obj.getSetter("objNm").set("DIV-품목 상세");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_poItem", "absolute", "0", "0", null, null, "0", "10", this.div_41);
            obj.set_taborder("0");
            obj.set_binddataset("ds_poItem");
            obj.set_autoenter("select");
            obj.set_selecttype("cell");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj.set_enableevent("false");
            obj.style.set_background("transparent");
            obj.getSetter("objNm").set("품목 그리드");
            obj._setContents("<Formats><Format id=\"MMODE\"><Columns><Column size=\"40\"/><Column size=\"550\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"CHECKED\"/><Cell col=\"1\" text=\"품목명\"/><Cell col=\"2\" text=\"단위\"/><Cell col=\"3\" text=\"단가\"/><Cell col=\"4\" text=\"발주수량\"/><Cell col=\"5\" text=\"검수완료\"/><Cell col=\"6\" text=\"납품수량\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:ALT_DLV == &quot;Y&quot; ? &quot;none&quot; : &quot;checkbox&quot;\" edittype=\"expr:ALT_DLV == &quot;Y&quot; ? &quot;none&quot; : &quot;checkbox&quot;\" style=\"background:EXPR(ALT_DLV == &quot;Y&quot; ? &quot;#f5f5f5ff&quot; : &quot;&quot;);background2:EXPR(ALT_DLV == &quot;Y&quot; ? &quot;#f5f5f5ff&quot; : &quot;&quot;);\" text=\"bind:CHECKED\" editautoselect=\"true\"/><Cell col=\"1\" style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:MTRL_NM\" tooltiptext=\"bind:MTRL_NM\"/><Cell col=\"2\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:CD_UNIT_NM\" tooltiptext=\"bind:CD_UNIT_NM\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:PO_PRICE\" mask=\"#,##0.00\" tooltiptext=\"bind:PO_PRICE\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:QTY\" mask=\"#,##0.00\" tooltiptext=\"bind:QTY\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:TOT_DLV_QTY\" mask=\"#,##0.00\" tooltiptext=\"bind:TOT_DLV_QTY\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"expr:ALT_DLV == 'Y' ? 'none' : 'masknumber'\" style=\"align:right;background:EXPR(ALT_DLV == &quot;Y&quot; ? &quot;#f5f5f5ff&quot; : &quot;&quot;);background2:EXPR(ALT_DLV == &quot;Y&quot; ? &quot;#f5f5f5ff&quot; : &quot;&quot;);\" text=\"bind:DLV_PLAN_QTY\" expr=\"expr:ALT_DLV == &quot;Y&quot; ? 0 : DLV_PLAN_QTY\" mask=\"#,##0.00\" editautoselect=\"true\" editdisplay=\"edit\" tooltiptext=\"bind:DLV_PLAN_QTY\"/></Band></Format><Format id=\"VMODE\"><Columns><Column size=\"550\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"품목명\"/><Cell col=\"1\" text=\"단위\"/><Cell col=\"2\" text=\"단가\"/><Cell col=\"3\" text=\"발주수량\"/><Cell col=\"4\" text=\"검수완료\"/><Cell col=\"5\" text=\"납품수량\"/></Band><Band id=\"body\"><Cell style=\"align:left;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:MTRL_NM\" tooltiptext=\"bind:MTRL_NM\"/><Cell col=\"1\" style=\"background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:CD_UNIT_NM\" tooltiptext=\"bind:CD_UNIT_NM\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:PO_PRICE\" mask=\"#,##0.00\" tooltiptext=\"bind:PO_PRICE\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:QTY\" mask=\"#,##0.00\" tooltiptext=\"bind:QTY\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:TOT_DLV_QTY\" mask=\"#,##0.00\" tooltiptext=\"bind:TOT_DLV_QTY\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background:#f5f5f5ff;background2:#f5f5f5ff;\" text=\"bind:DLV_PLAN_QTY\" mask=\"#,##0.00\" editdisplay=\"edit\" tooltiptext=\"bind:DLV_PLAN_QTY\"/></Band></Format></Formats>");
            this.div_41.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_1,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_cssclass("div_WF_SearchBg3");
            		p.getSetter("objNm").set("컨트롤 박스");

            	}
            );
            this.div_1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.div_2,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.getSetter("objNm").set("DIV-헤더 타이틀");

            	}
            );
            this.div_2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 47, this.div_21,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.set_scrollbars("none");
            		p.getSetter("objNm").set("DIV-헤더 상세");

            	}
            );
            this.div_21.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.div_3,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.set_visible("false");
            		p.getSetter("objNm").set("DIV-품목 타이틀");

            	}
            );
            this.div_3.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.div_4,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.set_text("Div_H01");
            		p.set_cssclass("div_WF_bg");
            		p.set_visible("false");
            		p.getSetter("objNm").set("DIV-품목 타이틀");

            	}
            );
            this.div_4.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1037, 140, this.div_31,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("7");
            		p.set_visible("false");
            		p.getSetter("objNm").set("DIV-품목 상세");

            	}
            );
            this.div_31.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_41,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("8");
            		p.set_visible("false");
            		p.getSetter("objNm").set("DIV-품목 상세");

            	}
            );
            this.div_41.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("검수문서생성");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","div_21.cal_dlvPlanDay","value","ds_po","DLV_PLAN_DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","div_21.Radio00","value","ds_po","ALT_PARTIAL_DLV");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_1.btn_dlvCreate.addEventHandler("onclick", this.div_1_btn_dlvCreate_onclick, this);
            this.div_2.btn_opHead.addEventHandler("onclick", this.fn_fold_onclick, this);
            this.div_3.btn_opItem.addEventHandler("onclick", this.fn_fold_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.div_4.btn_OP_Item.addEventHandler("onclick", this.fn_fold_onclick, this);
            this.div_31.grd_poPay.addEventHandler("onheadclick", this.div_31_grd_poItem_onheadclick, this);
            this.div_41.grd_poItem.addEventHandler("onheadclick", this.div_31_grd_poItem_onheadclick, this);

        };

        this.loadIncludeScript("BDlvPopup.xfdl", true);

       
    };
}
)();
