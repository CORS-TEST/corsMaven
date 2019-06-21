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
                this.set_name("BAprvDetail");
                this.set_titletext("승인상세(계약)");
                this._setFormPosition(0,0,1220,1067);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAprvInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"APP_DOC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"LOGIN_USER\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAprvLine", this);
            obj._setContents("<ColumnInfo><Column id=\"CHECKED\" size=\"256\" type=\"STRING\"/><Column id=\"APRV_ORDR\" size=\"256\" type=\"STRING\"/><Column id=\"APRVR_ID\" size=\"256\" type=\"STRING\"/><Column id=\"APRVR_NM\" size=\"256\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"APP_DOC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CD_APP_TYPE\" size=\"256\" type=\"STRING\"/><Column id=\"CD_APRV_LN_STTS\" size=\"256\" type=\"STRING\"/><Column id=\"CRTR_ID\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReturn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdAP13", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCdAP14", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divViewCompBody05", "absolute", "0", "1002", null, "230", "15", null, this);
            obj.set_taborder("4");
            obj.getSetter("objNm").set("DIV-평가서 상세");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "33", null, "33", "0", null, this.divViewCompBody05);
            obj.set_taborder("614");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody05.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "65", null, "33", "0", null, this.divViewCompBody05);
            obj.set_taborder("615");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody05.addChild(obj.name, obj);
            obj = new Static("staViewCompLine03", "absolute", "0", "97", null, "33", "0", null, this.divViewCompBody05);
            obj.set_taborder("616");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody05.addChild(obj.name, obj);
            obj = new Static("staViewCompLine04", "absolute", "0", "129", null, "33", "0", null, this.divViewCompBody05);
            obj.set_taborder("617");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody05.addChild(obj.name, obj);
            obj = new Static("staCompAAddr", "absolute", "0", "97", "171", "33", null, null, this.divViewCompBody05);
            obj.set_taborder("618");
            obj.set_text("사업장주소");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.divViewCompBody05.addChild(obj.name, obj);
            obj = new Static("staCompBPtnrNm", "absolute", "629", "65", "171", "33", null, null, this.divViewCompBody05);
            obj.set_taborder("619");
            obj.set_text("상호");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.divViewCompBody05.addChild(obj.name, obj);
            obj = new Static("staCompAPname", "absolute", "0", "129", "171", "33", null, null, this.divViewCompBody05);
            obj.set_taborder("620");
            obj.set_text("대표자");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.divViewCompBody05.addChild(obj.name, obj);
            obj = new Static("staCompBAddr", "absolute", "629", "97", "171", "33", null, null, this.divViewCompBody05);
            obj.set_taborder("621");
            obj.set_text("사업자주소");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.divViewCompBody05.addChild(obj.name, obj);
            obj = new Static("staCompAPtnrNm", "absolute", "0", "65", "171", "33", null, null, this.divViewCompBody05);
            obj.set_taborder("622");
            obj.set_text("상호");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.divViewCompBody05.addChild(obj.name, obj);
            obj = new Static("staCompABizNo", "absolute", "0", "33", "171", "33", null, null, this.divViewCompBody05);
            obj.set_taborder("623");
            obj.set_text("등록번호");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.divViewCompBody05.addChild(obj.name, obj);
            obj = new Static("staCompBBizNo", "absolute", "629", "33", "171", "33", null, null, this.divViewCompBody05);
            obj.set_taborder("624");
            obj.set_text("등록번호");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.divViewCompBody05.addChild(obj.name, obj);
            obj = new Static("staViewCompLine06", "absolute", "0", "161", null, "33", "0", null, this.divViewCompBody05);
            obj.set_taborder("625");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody05.addChild(obj.name, obj);
            obj = new Static("staCompAChargr", "absolute", "0", "161", "171", "33", null, null, this.divViewCompBody05);
            obj.set_taborder("626");
            obj.set_text("담당자");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.divViewCompBody05.addChild(obj.name, obj);
            obj = new Static("staCompBChargr", "absolute", "629", "161", "171", "33", null, null, this.divViewCompBody05);
            obj.set_taborder("627");
            obj.set_text("담당자");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.divViewCompBody05.addChild(obj.name, obj);
            obj = new Static("staCompBPname", "absolute", "629", "129", "171", "33", null, null, this.divViewCompBody05);
            obj.set_taborder("628");
            obj.set_text("대표자");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.divViewCompBody05.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "1", null, "33", "0", null, this.divViewCompBody05);
            obj.set_taborder("629");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody05.addChild(obj.name, obj);
            obj = new Static("staCompA", "absolute", "0", "1", "630", "33", null, null, this.divViewCompBody05);
            obj.set_taborder("630");
            obj.set_text("발 주 자");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.divViewCompBody05.addChild(obj.name, obj);
            obj = new Static("staCompB", "absolute", "629", "1", null, "33", "2", null, this.divViewCompBody05);
            obj.set_taborder("631");
            obj.set_text("계 약 자 ");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.divViewCompBody05.addChild(obj.name, obj);
            obj = new MaskEdit("mskABizNo", "absolute", "175", "37", "168", "24", null, null, this.divViewCompBody05);
            obj.set_taborder("632");
            obj.set_readonly("true");
            obj.set_type("string");
            obj.set_mask("@@@-@@-@@@@@");
            obj.set_maskchar(" ");
            obj.style.set_background("transparent");
            obj.style.set_border("0 solid #d5d5d5ff");
            obj.style.set_align("left");
            obj.style.setStyleValue("background", "disabled", "#f4f4f4ff");
            obj.style.setStyleValue("border", "disabled", "0 solid #bdbdbdff");
            this.divViewCompBody05.addChild(obj.name, obj);
            obj = new Edit("edtACorpNm", "absolute", "176", "69", "431", "24", null, null, this.divViewCompBody05);
            obj.set_taborder("633");
            obj.set_readonly("true");
            obj.set_lengthunit("utf8");
            obj.set_positionstep("1");
            obj.style.set_background("transparent");
            obj.style.set_border("0 solid #d5d5d5ff");
            obj.getSetter("objNm").set("업태");
            this.divViewCompBody05.addChild(obj.name, obj);
            obj = new Static("staViewCompLine05", "absolute", "0", "192", null, "33", "0", null, this.divViewCompBody05);
            obj.set_taborder("634");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody05.addChild(obj.name, obj);
            obj = new Static("staCompAAltSign", "absolute", "0", "192", "171", "33", null, null, this.divViewCompBody05);
            obj.set_taborder("635");
            obj.set_text("전자서명");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.divViewCompBody05.addChild(obj.name, obj);
            obj = new Static("staCompBAltSign", "absolute", "629", "192", "171", "33", null, null, this.divViewCompBody05);
            obj.set_taborder("636");
            obj.set_text("전자서명");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.divViewCompBody05.addChild(obj.name, obj);
            obj = new Edit("edtAAddr", "absolute", "176", "101", "431", "24", null, null, this.divViewCompBody05);
            obj.set_taborder("637");
            obj.set_readonly("true");
            obj.set_lengthunit("utf8");
            obj.set_positionstep("1");
            obj.style.set_background("transparent");
            obj.style.set_border("0 solid #d5d5d5ff");
            obj.getSetter("objNm").set("업태");
            this.divViewCompBody05.addChild(obj.name, obj);
            obj = new Edit("edtAPname", "absolute", "176", "134", "431", "24", null, null, this.divViewCompBody05);
            obj.set_taborder("638");
            obj.set_readonly("true");
            obj.set_lengthunit("utf8");
            obj.set_positionstep("1");
            obj.style.set_background("transparent");
            obj.style.set_border("0 solid #d5d5d5ff");
            obj.getSetter("objNm").set("업태");
            this.divViewCompBody05.addChild(obj.name, obj);
            obj = new Edit("edtAChrgr", "absolute", "176", "165", "431", "24", null, null, this.divViewCompBody05);
            obj.set_taborder("639");
            obj.set_readonly("true");
            obj.set_lengthunit("utf8");
            obj.set_positionstep("1");
            obj.style.set_background("transparent");
            obj.style.set_border("0 solid #d5d5d5ff");
            obj.getSetter("objNm").set("업태");
            this.divViewCompBody05.addChild(obj.name, obj);
            obj = new Edit("edtAAltSign", "absolute", "176", "197", "431", "24", null, null, this.divViewCompBody05);
            obj.set_taborder("640");
            obj.set_readonly("true");
            obj.set_lengthunit("utf8");
            obj.set_positionstep("1");
            obj.style.set_background("transparent");
            obj.style.set_border("0 solid #d5d5d5ff");
            obj.getSetter("objNm").set("업태");
            this.divViewCompBody05.addChild(obj.name, obj);
            obj = new MaskEdit("mskBBizNo", "absolute", "807", "37", "168", "24", null, null, this.divViewCompBody05);
            obj.set_taborder("641");
            obj.set_readonly("true");
            obj.set_type("string");
            obj.set_mask("@@@-@@-@@@@@");
            obj.set_maskchar(" ");
            obj.style.set_background("transparent");
            obj.style.set_border("0 solid #d5d5d5ff");
            obj.style.set_align("left");
            obj.style.setStyleValue("background", "disabled", "#f4f4f4ff");
            obj.style.setStyleValue("border", "disabled", "0 solid #bdbdbdff");
            this.divViewCompBody05.addChild(obj.name, obj);
            obj = new Edit("edtBCorpNm", "absolute", "808", "69", null, "24", "2", null, this.divViewCompBody05);
            obj.set_taborder("642");
            obj.set_readonly("true");
            obj.set_lengthunit("utf8");
            obj.set_positionstep("1");
            obj.style.set_background("transparent");
            obj.style.set_border("0 solid #d5d5d5ff");
            obj.getSetter("objNm").set("업태");
            this.divViewCompBody05.addChild(obj.name, obj);
            obj = new Edit("edtBAddr", "absolute", "808", "101", null, "24", "2", null, this.divViewCompBody05);
            obj.set_taborder("643");
            obj.set_readonly("true");
            obj.set_lengthunit("utf8");
            obj.set_positionstep("1");
            obj.style.set_background("transparent");
            obj.style.set_border("0 solid #d5d5d5ff");
            obj.getSetter("objNm").set("업태");
            this.divViewCompBody05.addChild(obj.name, obj);
            obj = new Edit("edtBPname", "absolute", "808", "133", null, "24", "2", null, this.divViewCompBody05);
            obj.set_taborder("644");
            obj.set_readonly("true");
            obj.set_lengthunit("utf8");
            obj.set_positionstep("1");
            obj.style.set_background("transparent");
            obj.style.set_border("0 solid #d5d5d5ff");
            obj.getSetter("objNm").set("업태");
            this.divViewCompBody05.addChild(obj.name, obj);
            obj = new Edit("edtBChrgr", "absolute", "808", "165", null, "24", "2", null, this.divViewCompBody05);
            obj.set_taborder("645");
            obj.set_readonly("true");
            obj.set_lengthunit("utf8");
            obj.set_positionstep("1");
            obj.style.set_background("transparent");
            obj.style.set_border("0 solid #d5d5d5ff");
            obj.getSetter("objNm").set("업태");
            this.divViewCompBody05.addChild(obj.name, obj);
            obj = new Edit("edtBAltSign", "absolute", "808", "197", null, "24", "2", null, this.divViewCompBody05);
            obj.set_taborder("646");
            obj.set_readonly("true");
            obj.set_lengthunit("utf8");
            obj.set_positionstep("1");
            obj.style.set_background("transparent");
            obj.style.set_border("0 solid #d5d5d5ff");
            obj.getSetter("objNm").set("업태");
            this.divViewCompBody05.addChild(obj.name, obj);

            obj = new Div("divViewCompBody04", "absolute", "0", "221", null, "521", "0", null, this);
            obj.set_taborder("5");
            obj.getSetter("objNm").set("DIV-평가서 상세");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompLine00", "absolute", "0", "1", null, "33", "0", null, this.divViewCompBody04);
            obj.set_taborder("559");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staViewCompLine01", "absolute", "0", "33", null, "33", "0", null, this.divViewCompBody04);
            obj.set_taborder("560");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staViewCompLine02", "absolute", "0", "65", null, "33", "0", null, this.divViewCompBody04);
            obj.set_taborder("561");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staViewCompLine03", "absolute", "0", "97", null, "33", "0", null, this.divViewCompBody04);
            obj.set_taborder("562");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staViewCompLine04", "absolute", "0", "129", null, "33", "0", null, this.divViewCompBody04);
            obj.set_taborder("563");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staAltSign", "absolute", "629", "1", "171", "33", null, null, this.divViewCompBody04);
            obj.set_taborder("564");
            obj.set_text("전자서명");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staCntrDt", "absolute", "0", "97", "171", "33", null, null, this.divViewCompBody04);
            obj.set_taborder("565");
            obj.set_text("계약기간");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label_P");
            obj.set_positionstep("1");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staAltTstamp", "absolute", "629", "65", "171", "33", null, null, this.divViewCompBody04);
            obj.set_taborder("566");
            obj.set_text("인지세금액");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staPtnr", "absolute", "0", "129", "171", "33", null, null, this.divViewCompBody04);
            obj.set_taborder("567");
            obj.set_text("계약자");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label_P");
            obj.set_positionstep("1");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staCntrDay", "absolute", "629", "97", "171", "33", null, null, this.divViewCompBody04);
            obj.set_taborder("568");
            obj.set_text("계약일자");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staCntrAmt", "absolute", "0", "65", "171", "33", null, null, this.divViewCompBody04);
            obj.set_taborder("569");
            obj.set_text("계약금액");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staCntrTtl", "absolute", "0", "33", "171", "33", null, null, this.divViewCompBody04);
            obj.set_taborder("570");
            obj.set_text("계약명");
            obj.set_cssclass("sta_WF_Label_P");
            obj.set_positionstep("1");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staCntrNo", "absolute", "0", "1", "171", "33", null, null, this.divViewCompBody04);
            obj.set_taborder("571");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staCdCntrTmplt", "absolute", "629", "33", "171", "33", null, null, this.divViewCompBody04);
            obj.set_taborder("572");
            obj.set_text("계약템플릿");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staViewCompLine06", "absolute", "0", "161", null, "33", "0", null, this.divViewCompBody04);
            obj.set_taborder("573");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staWorkPlce", "absolute", "0", "161", "171", "33", null, null, this.divViewCompBody04);
            obj.set_taborder("574");
            obj.set_text("이행장소");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label_P");
            obj.set_positionstep("1");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staCdFctry", "absolute", "629", "161", "171", "33", null, null, this.divViewCompBody04);
            obj.set_taborder("575");
            obj.set_text("사업장");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staViewCompLine09", "absolute", "0", "193", null, "106", "0", null, this.divViewCompBody04);
            obj.set_taborder("576");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staAltPymt", "absolute", "0", "193", "171", "106", null, null, this.divViewCompBody04);
            obj.set_taborder("577");
            obj.set_text("지불조건");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new MaskEdit("mskCntrNo", "absolute", "176", "5", "166", "24", null, null, this.divViewCompBody04);
            obj.set_taborder("578");
            obj.set_maskchar(" ");
            obj.set_enable("false");
            obj.style.setStyleValue("color", "disabled", "black");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staCntrOrdr", "absolute", "392", "1", "91", "33", null, null, this.divViewCompBody04);
            obj.set_taborder("579");
            obj.set_text("차수");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Edit("edtCntrTtl", "absolute", "176", "37", "432", "24", null, null, this.divViewCompBody04);
            obj.set_taborder("580");
            obj.set_lengthunit("utf8");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("업태");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new MaskEdit("mskCntrAmt", "absolute", "176", "69", "166", "24", null, null, this.divViewCompBody04);
            obj.set_taborder("581");
            obj.set_mask("#,##0");
            obj.set_maskchar(" ");
            obj.set_enable("false");
            obj.style.setStyleValue("color", "disabled", "black");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Edit("edtCntrAmtText", "absolute", "346", "69", "262", "24", null, null, this.divViewCompBody04);
            obj.set_taborder("582");
            obj.set_lengthunit("utf8");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("업태");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Div("divCntrDt", "absolute", "176", "102", "237", "24", null, null, this.divViewCompBody04);
            obj.set_taborder("583");
            obj.set_text("Div01");
            obj.getSetter("objNm").set("계약기간");
            obj.set_url("CCOMP::CompCalFromTo.xfdl");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Edit("edtCntrDtText", "absolute", "416", "101", "192", "24", null, null, this.divViewCompBody04);
            obj.set_taborder("584");
            obj.set_lengthunit("utf8");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("업태");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new MaskEdit("mskCntrOrdr", "absolute", "488", "5", "59", "24", null, null, this.divViewCompBody04);
            obj.set_taborder("585");
            obj.set_mask("#,##0");
            obj.set_enable("false");
            obj.style.setStyleValue("color", "disabled", "black");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new MaskEdit("mskCntrPtnr", "absolute", "176", "133", "166", "24", null, null, this.divViewCompBody04);
            obj.set_taborder("586");
            obj.set_maskchar("@@@-@@-@@@@@");
            obj.set_enable("false");
            obj.style.setStyleValue("color", "disabled", "black");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Edit("edtPtnrNm", "absolute", "346", "133", "232", "24", null, null, this.divViewCompBody04);
            obj.set_taborder("587");
            obj.set_lengthunit("utf8");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("업태");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Button("btnPtnrPop01", "absolute", "578", "133", "30", "24", null, null, this.divViewCompBody04);
            obj.set_taborder("588");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.getSetter("objNm").set("협력사 검색 버튼");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Edit("edtWorkPlce", "absolute", "176", "165", "432", "24", null, null, this.divViewCompBody04);
            obj.set_taborder("589");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("4");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("Homepage");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new CheckBox("chkBasicPymt", "absolute", "181", "200", "92", "20", null, null, this.divViewCompBody04);
            obj.set_taborder("590");
            obj.set_text("정기지불 :");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Edit("edtBasicPymtTxt", "absolute", "267", "198", "341", "23", null, null, this.divViewCompBody04);
            obj.set_taborder("591");
            obj.set_lengthunit("utf8");
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("견적요청명");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new CheckBox("chkSPymt", "absolute", "181", "225", "92", "20", null, null, this.divViewCompBody04);
            obj.set_taborder("592");
            obj.set_text("선 급 금 :");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Edit("edtSPymtTxt", "absolute", "267", "222", "341", "23", null, null, this.divViewCompBody04);
            obj.set_taborder("593");
            obj.set_lengthunit("utf8");
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("견적요청명");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new CheckBox("chkMPymt", "absolute", "181", "249", "82", "20", null, null, this.divViewCompBody04);
            obj.set_taborder("594");
            obj.set_text("기 성 금 :");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Edit("edtMPymtTxt", "absolute", "267", "246", "341", "23", null, null, this.divViewCompBody04);
            obj.set_taborder("595");
            obj.set_lengthunit("utf8");
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("견적요청명");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new CheckBox("chkCPymt", "absolute", "181", "274", "83", "20", null, null, this.divViewCompBody04);
            obj.set_taborder("596");
            obj.set_text("준 공 금 :");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Edit("edtCPymtTxt", "absolute", "267", "270", "341", "23", null, null, this.divViewCompBody04);
            obj.set_taborder("597");
            obj.set_lengthunit("utf8");
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("견적요청명");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new CheckBox("chkAltCntrGrnt", "absolute", "808", "229", "92", "20", null, null, this.divViewCompBody04);
            obj.set_taborder("598");
            obj.set_text("계약이행 :");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new CheckBox("chkAltPPayGrnt", "absolute", "808", "253", "92", "20", null, null, this.divViewCompBody04);
            obj.set_taborder("599");
            obj.set_text("선 급  금 :");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new CheckBox("chkAltCPayGrnt", "absolute", "808", "278", "92", "20", null, null, this.divViewCompBody04);
            obj.set_taborder("600");
            obj.set_text("하자이행 :");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Edit("edtAltCPayGrnt01", "absolute", "895", "276", "167", "21", null, null, this.divViewCompBody04);
            obj.set_taborder("601");
            obj.set_lengthunit("utf8");
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("견적요청명");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Edit("edtAltCPayGrnt02", "absolute", "1067", "276", "138", "21", null, null, this.divViewCompBody04);
            obj.set_taborder("602");
            obj.set_lengthunit("utf8");
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("견적요청명");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Edit("edtAltPPayGrnt02", "absolute", "1067", "252", "138", "21", null, null, this.divViewCompBody04);
            obj.set_taborder("603");
            obj.set_lengthunit("utf8");
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("견적요청명");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Edit("edtAltPPayGrnt01", "absolute", "895", "252", "167", "21", null, null, this.divViewCompBody04);
            obj.set_taborder("604");
            obj.set_lengthunit("utf8");
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("견적요청명");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Edit("edtAltCntrGrntTxt01", "absolute", "895", "228", "167", "21", null, null, this.divViewCompBody04);
            obj.set_taborder("605");
            obj.set_lengthunit("utf8");
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("견적요청명");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Edit("edtAltCntrGrntTxt02", "absolute", "1067", "228", "138", "21", null, null, this.divViewCompBody04);
            obj.set_taborder("606");
            obj.set_lengthunit("utf8");
            obj.set_cssclass("edt_default");
            obj.getSetter("objNm").set("견적요청명");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staAltGrnt", "absolute", "629", "193", "171", "106", null, null, this.divViewCompBody04);
            obj.set_taborder("607");
            obj.set_text("지불조건");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staViewCompLine05", "absolute", "799", "193", null, "33", "0", null, this.divViewCompBody04);
            obj.set_taborder("608");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new CheckBox("chkNoGrnt", "absolute", "808", "201", "176", "20", null, null, this.divViewCompBody04);
            obj.set_taborder("609");
            obj.set_text("해당사항없음");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staViewCompLine07", "absolute", "0", "298", null, "33", "0", null, this.divViewCompBody04);
            obj.set_taborder("610");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staCpayGrntDate", "absolute", "629", "298", "171", "33", null, null, this.divViewCompBody04);
            obj.set_taborder("611");
            obj.set_text("하자담보책임기간");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Edit("edtCpayGrntDate", "absolute", "805", "302", "400", "24", null, null, this.divViewCompBody04);
            obj.set_taborder("612");
            obj.set_lengthunit("utf8");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("지역");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Edit("edtCmpnsnAmtRate", "absolute", "176", "302", "431", "24", null, null, this.divViewCompBody04);
            obj.set_taborder("613");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("4");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("Homepage");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staCmpnsnAmtRate", "absolute", "0", "298", "171", "33", null, null, this.divViewCompBody04);
            obj.set_taborder("614");
            obj.set_text("지체상금율");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Radio("cboAltSign", "absolute", "808", "6", "104", "24", null, null, this.divViewCompBody04);
            this.divViewCompBody04.addChild(obj.name, obj);
            var cboAltSign_innerdataset = new Dataset("cboAltSign_innerdataset", this.divViewCompBody04.cboAltSign);
            cboAltSign_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">유</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">무</Col></Row></Rows>");
            obj.set_innerdataset(cboAltSign_innerdataset);
            obj.set_taborder("615");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("Y");
            obj.set_direction("vertical");
            obj.set_cssclass("rdo_default");
            obj.getSetter("objNm").set("유형자산");
            obj.set_index("0");
            obj = new Radio("cboAltTstamp", "absolute", "808", "71", "104", "24", null, null, this.divViewCompBody04);
            this.divViewCompBody04.addChild(obj.name, obj);
            var cboAltTstamp_innerdataset = new Dataset("cboAltTstamp_innerdataset", this.divViewCompBody04.cboAltTstamp);
            cboAltTstamp_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">유</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">무</Col></Row></Rows>");
            obj.set_innerdataset(cboAltTstamp_innerdataset);
            obj.set_taborder("618");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("Y");
            obj.set_direction("vertical");
            obj.set_cssclass("rdo_default");
            obj.getSetter("objNm").set("유형자산");
            obj.set_index("0");
            obj = new Static("staCdCnstType", "absolute", "629", "129", "171", "33", null, null, this.divViewCompBody04);
            obj.set_taborder("619");
            obj.set_text("계약유형");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Combo("cboCdCnstType", "absolute", "808", "136", "149", "21", null, null, this.divViewCompBody04);
            this.divViewCompBody04.addChild(obj.name, obj);
            var cboCdCnstType_innerdataset = new Dataset("cboCdCnstType_innerdataset", this.divViewCompBody04.cboCdCnstType);
            cboCdCnstType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">[전체]</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">계약서(공사)</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">상세계약서(공사)</Col></Row></Rows>");
            obj.set_innerdataset(cboCdCnstType_innerdataset);
            obj.set_taborder("620");
            obj.set_readonly("true");
            obj.set_innerdataset("dsCdZZ10");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("구분");
            obj.set_index("1");
            obj = new Combo("cboCdFctry", "absolute", "808", "167", "149", "21", null, null, this.divViewCompBody04);
            this.divViewCompBody04.addChild(obj.name, obj);
            var cboCdFctry_innerdataset = new Dataset("cboCdFctry_innerdataset", this.divViewCompBody04.cboCdFctry);
            cboCdFctry_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">[전체]</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">계약서(공사)</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">상세계약서(공사)</Col></Row></Rows>");
            obj.set_innerdataset(cboCdFctry_innerdataset);
            obj.set_taborder("621");
            obj.set_readonly("true");
            obj.set_innerdataset("dsCdCM20");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("구분");
            obj.set_index("1");
            obj = new Calendar("calCntrDay", "absolute", "808", "103", "149", "21", null, null, this.divViewCompBody04);
            this.divViewCompBody04.addChild(obj.name, obj);
            obj.set_taborder("622");
            obj.set_enable("false");
            obj = new MaskEdit("mskTstampAmt", "absolute", "911", "69", "125", "24", null, null, this.divViewCompBody04);
            obj.set_taborder("623");
            obj.set_mask("#,##0");
            obj.set_maskchar(" ");
            obj.set_enable("false");
            obj.style.setStyleValue("color", "disabled", "black");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Button("btnTstampAmtShow", "absolute", "1124", "72", "70", "20", null, null, this.divViewCompBody04);
            obj.set_taborder("624");
            obj.set_text("인지세란?");
            obj.set_cssclass("btn_WF_SearchBtn");
            obj.getSetter("objNm").set("평가보기 버튼");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Button("btnTstampAmt", "absolute", "1036", "69", "23", "24", null, null, this.divViewCompBody04);
            obj.set_taborder("625");
            obj.getSetter("objNm").set("총예산 계산 버튼");
            obj.style.set_background("#ffffffff URL('theme://images/btn_WF_CalculatorSmall.png') no-repeat center middle");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staViewCompLine08", "absolute", "0", "330", null, "67", "0", null, this.divViewCompBody04);
            obj.set_taborder("626");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new TextArea("teaCntrPaper", "absolute", "176", "334", "1029", "58", null, null, this.divViewCompBody04);
            obj.set_taborder("627");
            obj.set_scrollbars("autovert");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #d5d5d5ff");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staCntrPaper", "absolute", "0", "330", "171", "67", null, null, this.divViewCompBody04);
            obj.set_taborder("628");
            obj.set_text("계약서류");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staViewCompLine10", "absolute", "0", "396", null, "125", "0", null, this.divViewCompBody04);
            obj.set_taborder("629");
            obj.set_cssclass("sta_WF_Labelbg");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staEtcCntnt", "absolute", "0", "396", "171", "125", null, null, this.divViewCompBody04);
            obj.set_taborder("630");
            obj.set_text("특기사항");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new TextArea("teaEtcCntnt", "absolute", "176", "401", "432", "114", null, null, this.divViewCompBody04);
            obj.set_taborder("631");
            obj.set_dragscrolltype("none");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Static("staCntrCntnt", "absolute", "629", "396", "171", "125", null, null, this.divViewCompBody04);
            obj.set_taborder("632");
            obj.set_text("특약사항");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new TextArea("teaCntrCntnt", "absolute", "804", "401", "401", "114", null, null, this.divViewCompBody04);
            obj.set_taborder("633");
            this.divViewCompBody04.addChild(obj.name, obj);
            obj = new Combo("cboCdCntrTmpltCtgr", "absolute", "808", "39", "99", "21", null, null, this.divViewCompBody04);
            this.divViewCompBody04.addChild(obj.name, obj);
            obj.set_taborder("634");
            obj.set_readonly("true");
            obj.set_innerdataset("dsCdCT11");
            obj.set_codecolumn("CD_ID");
            obj.set_datacolumn("CD_NM_LO");
            obj.set_cssclass("cbo_default");
            obj.getSetter("objNm").set("구분");
            obj = new Edit("edtCntrTemplate", "absolute", "912", "37", "147", "24", null, null, this.divViewCompBody04);
            obj.set_taborder("635");
            obj.set_lengthunit("utf8");
            obj.set_enable("false");
            obj.set_positionstep("1");
            obj.getSetter("objNm").set("업태");
            this.divViewCompBody04.addChild(obj.name, obj);

            obj = new Div("divViewCompBody03", "absolute", "0", "778", null, "214", "15", null, this);
            obj.set_taborder("6");
            obj.set_scrollbars("none");
            obj.getSetter("objNm").set("DIV-입찰요청파일 상세");
            obj.set_url("CCOMP::CompNFileUpDown.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divViewCompTitle06", "absolute", "0", "759", null, "24", "10", null, this);
            obj.set_taborder("7");
            obj.getSetter("objNm").set("DIV-입찰요청파일 타이틀");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle02", "absolute", "0", "0", "255", "24", null, null, this.divViewCompTitle06);
            obj.set_taborder("0");
            obj.set_text("요청파일");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.getSetter("objNm").set("입찰요청파일타이틀");
            this.divViewCompTitle06.addChild(obj.name, obj);

            obj = new Div("divViewCompTitle05", "absolute", "0", "193", null, "24", "10", null, this);
            obj.set_taborder("8");
            obj.getSetter("objNm").set("DIV-품목정보 타이틀");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle01", "absolute", "0", "0", "255", "24", null, null, this.divViewCompTitle05);
            obj.set_taborder("0");
            obj.set_text("품목정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.getSetter("objNm").set("품목정보타이틀");
            this.divViewCompTitle05.addChild(obj.name, obj);

            obj = new Div("divViewCompBody01", "absolute", "0%", "20", null, "160", "15", null, this);
            obj.set_taborder("10");
            obj.getSetter("objNm").set("DIV-품목 상세");
            this.addChild(obj.name, obj);
            obj = new Grid("grdRfqItem", "absolute", "0", "5", null, null, "0", "0", this.divViewCompBody01);
            obj.set_taborder("0");
            obj.set_binddataset("dsCntrItem");
            obj.set_locale("en_US");
            obj.set_autoenter("select");
            obj.getSetter("f_colSize").set("N");
            obj.getSetter("f_excel").set("Y");
            obj.getSetter("f_filter").set("N");
            obj.getSetter("f_find").set("N");
            obj.getSetter("f_fix").set("Y");
            obj.getSetter("f_height").set("Y");
            obj.getSetter("f_hide").set("N");
            obj.getSetter("f_init").set("Y");
            obj.getSetter("f_mode").set("Y");
            obj.getSetter("f_save").set("N");
            obj.getSetter("f_sort").set("Y");
            obj.getSetter("objNm").set("품목정보");
            obj._setContents("<Formats><Format id=\"VMODE\"><Columns><Column size=\"70\"/><Column size=\"450\"/><Column size=\"82\"/><Column size=\"86\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"89\"/><Column size=\"97\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"품번\"/><Cell col=\"1\" text=\"품목명\"/><Cell col=\"2\" text=\"수량\"/><Cell col=\"3\" text=\"단위\"/><Cell col=\"4\" text=\"납품요청일자\"/><Cell col=\"5\" text=\"납품확정일자\"/><Cell col=\"6\" text=\"남품가능일자\"/><Cell col=\"7\" text=\"단가\"/><Cell col=\"8\" text=\"금액\"/><Cell col=\"9\" text=\"계정코드\"/><Cell col=\"10\" text=\"계정명\"/><Cell col=\"11\" text=\"예산번호\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"bind:ITM_NO\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left;\" text=\"bind:MTRL_NM\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:QTY\" mask=\"9,999.###\" editautoselect=\"true\" combodisplay=\"edit\"/><Cell col=\"3\" displaytype=\"combo\" text=\"bind:CD_UNIT\" combodataset=\"dsCdCM11\" combocodecol=\"CD_ID\" combodatacol=\"CD_NM_LO\"/><Cell col=\"4\" displaytype=\"date\" text=\"bind:REQ_DAY\" mask=\"yyyy.MM.dd\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" displaytype=\"date\" text=\"bind:DLV_CFM_DAY\" mask=\"yyyy.MM.dd\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"date\" text=\"bind:POSS_DAY\" mask=\"yyyy.MM.dd\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:UNT_PRICE\" mask=\"9,999.###\" editautoselect=\"true\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AMT\" mask=\"9,999.###\"/><Cell col=\"9\" text=\"bind:ACNT_CD\"/><Cell col=\"10\" style=\"align:left;\" text=\"bind:ACNT_NM\"/><Cell col=\"11\" text=\"bind:BDGT_NO\"/></Band></Format></Formats>");
            this.divViewCompBody01.addChild(obj.name, obj);

            obj = new Div("divViewCompTitle01", "absolute", "0", "0", null, "24", "10", null, this);
            obj.set_taborder("18");
            obj.getSetter("objNm").set("DIV-기본정보 타이틀");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "0", "255", "24", null, null, this.divViewCompTitle01);
            obj.set_taborder("0");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.getSetter("objNm").set("기본정보타이틀");
            this.divViewCompTitle01.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 230, this.divViewCompBody05,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.getSetter("objNm").set("DIV-평가서 상세");

            	}
            );
            this.divViewCompBody05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 521, this.divViewCompBody04,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.getSetter("objNm").set("DIV-평가서 상세");

            	}
            );
            this.divViewCompBody04.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompTitle06,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("7");
            		p.getSetter("objNm").set("DIV-입찰요청파일 타이틀");

            	}
            );
            this.divViewCompTitle06.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompTitle05,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("8");
            		p.getSetter("objNm").set("DIV-품목정보 타이틀");

            	}
            );
            this.divViewCompTitle05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1205, 187, this.divViewCompBody01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("10");
            		p.getSetter("objNm").set("DIV-품목 상세");

            	}
            );
            this.divViewCompBody01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompTitle01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("18");
            		p.getSetter("objNm").set("DIV-기본정보 타이틀");

            	}
            );
            this.divViewCompTitle01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "Screen0", 1220, 1067, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("FrmTemplate100");
            		p.set_titletext("승인상세(계약)");

            	}
            );
            obj.set_stepcount("");
            obj.set_stepindex("");
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item22","divViewCompBody04.cboCdCntrTmpltCtgr","value","dsCntr","CD_CNTR_CTGR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divViewCompBody04.edtCntrTtl","value","dsCntr","TTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","divViewCompBody04.mskCntrAmt","value","dsCntr","CNTR_AMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","divViewCompBody04.edtCntrAmtText","value","dsCntr","CNTR_AMT_TXT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","divViewCompBody04.edtCntrDtText","value","dsCntr","CNTR_DAY_TXT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","divViewCompBody04.mskCntrPtnr","value","dsCntr","PTNR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","divViewCompBody04.edtPtnrNm","value","dsCntr","PTNR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","divViewCompBody04.edtWorkPlce","value","dsCntr","WORK_PLCE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","divViewCompBody04.chkBasicPymt","value","dsCntr","ALT_BASIC_PYMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","divViewCompBody04.chkSPymt","value","dsCntr","ALT_SPYMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","divViewCompBody04.chkMPymt","value","dsCntr","ALT_MPYMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","divViewCompBody04.chkCPymt","value","dsCntr","ALT_CPYMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","divViewCompBody04.edtBasicPymtTxt","value","dsCntr","BASIC_PYMT_TXT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","divViewCompBody04.edtSPymtTxt","value","dsCntr","SPYMT_TXT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","divViewCompBody04.edtMPymtTxt","value","dsCntr","MPYMT_TXT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","divViewCompBody04.edtCPymtTxt","value","dsCntr","CPYMT_TXT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","divViewCompBody04.edtCmpnsnAmtRate","value","dsCntr","DFR_CMPNSN_AMT_RATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","divViewCompBody04.teaCntrPaper","value","dsCntr","CNTR_PAPER");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","divViewCompBody04.teaEtcCntnt","value","dsCntr","ETC_CNTNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","divViewCompBody04.cboAltSign","value","dsCntr","ALT_SIGN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","divViewCompBody04.cboAltTstamp","value","dsCntr","ALT_TSTAMP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","divViewCompBody04.mskTstampAmt","value","dsCntr","TSTAMP_AMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","divViewCompBody04.calCntrDay","value","dsCntr","CNTR_DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","divViewCompBody04.chkNoGrnt","value","dsCntr","ALT_NO_GRNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","divViewCompBody04.chkAltCntrGrnt","value","dsCntr","ALT_CNTR_GRNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","divViewCompBody04.chkAltPPayGrnt","value","dsCntr","ALT_PPAY_GRNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","divViewCompBody04.chkAltCPayGrnt","value","dsCntr","ALT_CPAY_GRNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","divViewCompBody04.edtAltCntrGrntTxt01","value","dsCntr","SPAY_GRNT_TXT1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","divViewCompBody04.edtAltCntrGrntTxt02","value","dsCntr","SPAY_GRNT_TXT2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","divViewCompBody04.edtAltPPayGrnt01","value","dsCntr","PPAY_GRNT_TXT1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","divViewCompBody04.edtAltPPayGrnt02","value","dsCntr","PPAY_GRNT_TXT2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","divViewCompBody04.edtAltCPayGrnt01","value","dsCntr","CPAY_GRNT_TXT1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","divViewCompBody04.edtAltCPayGrnt02","value","dsCntr","CPAY_GRNT_TXT2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","divViewCompBody04.edtCpayGrntDate","value","dsCntr","CPAY_GRNT_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","divViewCompBody04.teaCntrCntnt","value","dsCntr","CNTR_CNTNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","divViewCompBody04.mskCntrNo","value","dsCntr","CNTR_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item53","divViewCompBody04.edtCntrTemplate","value","dsCntr","CD_CNTR_TMPLT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item54","divViewCompBody04.cboCdFctry","value","dsCntr","CD_FCTRY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divViewCompBody04.mskCntrOrdr","value","dsCntr","CNTR_ORDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item38","divViewCompBody05.mskABizNo","value","dsCntrAdd","A_BIZ_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item39","divViewCompBody05.edtACorpNm","value","dsCntrAdd","A_CORP_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item40","divViewCompBody05.edtAAddr","value","dsCntrAdd","A_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","divViewCompBody05.edtAPname","value","dsCntrAdd","A_PNAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item42","divViewCompBody05.edtAChrgr","value","dsCntrAdd","A_CHARGR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item43","divViewCompBody05.edtAAltSign","value","dsCntrAdd","A_SIGN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item44","divViewCompBody05.mskBBizNo","value","dsCntrAdd","B_BIZ_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item45","divViewCompBody05.edtBCorpNm","value","dsCntrAdd","B_CORP_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item46","divViewCompBody05.edtBAddr","value","dsCntrAdd","B_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item47","divViewCompBody05.edtBPname","value","dsCntrAdd","B_PNAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item48","divViewCompBody05.edtBChrgr","value","dsCntrAdd","B_CHARGR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item49","divViewCompBody05.edtBAltSign","value","dsCntrAdd","B_SIGN");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompCalFromTo.xfdl");
            this._addPreloadList("fdl", "CCOMP::CompNFileUpDown.xfdl");
        };
        
        // User Script
        this.registerScript("BAprvDetail_Cntr.xfdl", function(exports) {
        /**
         * @파일명       	: BAprvDetailCntr.xfdl
         * @생성자       	: 
         * @생성일자     	: 2017. 9. 12.
         * @최종수정자		: 
         * @최종수정일자	    : 2017. 9. 12.
        */  

        this.fvGubun = "";
        this.fvTarget = -1;

        /**
          * @함수명	: fnSetCode
          * @desc     	: 글로벌 코드 데이터셋에서 사용할 코드 카피.
          */
        this.fnSetCode = function()
        {
        	 
        	var param = [
        					 {code:"AP13", sSelectType:"S"}
        					 ,{code:"AP14", sSelectType:"S"}
        				];

        	gfnGetCode(this, param);
        }

        /**
          * @함수명	: fnOnload
          * @desc   : 폼 onload이벤트
          */
        this.fnFormOninit = function(obj,e)
        {
        	//this.fnSetCode();
        }

        /**
          * @함수명	: fnOnload
          * @desc   : 폼 onload이벤트
          */
        this.fnOnload = function(obj,e)
        {
        	//gfnSetGrdFunc(this.divViewCompBody02.grdList, null, this);

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
        		default:
        		break;	
        	}
        }

        

        /**
        	@function	fnPopCallBack()
        	@desc   	팝업 CallBack 함수
        */
        this.fnPopCallBack = function(sPopupId,rtn)
        {
        	if(gfnIsNull(rtn)) return;

        	this.dsReturn.clear();
        	this.dsReturn.loadXML(rtn);
        	
        	switch(sPopupId){			
        		case "":
        		break;
        		
        		default:
        			break;	
        	}
        }

        this.fnBtnCntrTmptlViewOnClick = function(obj,e)
        {
        	if(gfnIsNull(this.parent.dsCntr.getColumn(0, "REPORT_NM"))) {
        		var sArg = { agv_branchCd: this.parent.dsCntr.getColumn(0, "BRANCH_CD"),
        					agv_no: this.parent.dsCntr.getColumn(0, "CNTR_NO"),
        					agv_ordr: this.parent.dsCntr.getColumn(0, "CNTR_ORDR"),
        					agv_content: this.parent.dsCntr.getColumn(0, "CONTENT")
        				};
        		gfnModalPop(this, "PopupTemplate", "BCNTR::BCntrTmpltPopup.xfdl", sArg, "fnPopCallBack", 1000, 1000);
        	} else {
        		var reportType = this.dsCntr.getColumn(0, "REPORT_NM") + ".jrf";
        	
        		this.dsPrint.deleteAll();
        		var nRow = this.dsPrint.addRow();
        		this.dsPrint.setColumn(nRow, "BRANCH_CD"	, this.dsCntr.getColumn(e.row,"BRANCH_CD"));
        		this.dsPrint.setColumn(nRow, "REF_KEY_1"	, this.dsCntr.getColumn(e.row,"CNTR_NO"));
        		this.dsPrint.setColumn(nRow, "REF_KEY_2"	, this.dsCntr.getColumn(e.row,"CNTR_ORDR"));
        		this.dsPrint.setColumn(nRow, "COL_NM1"		, "CNTR_NO");
        		this.dsPrint.setColumn(nRow, "COL_NM2"		, "CNTR_ORDR");
        		this.dsPrint.setColumn(nRow, "TBL_NM"		, "MM_CNTR_ADD");
        		
        		var sArg = { arg:this.dsPrint, reportFile:reportType};
        		gfnModalPop(this, "PopupReport", "CPOP::ComUbiReportNoSign.xfdl", sArg, "fnPopCallBack", 1000, 950);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.fnFormOninit, this);
            this.addEventHandler("onload", this.fnOnload, this);
            this.divViewCompBody04.edtPtnrNm.addEventHandler("onkeydown", this.fnKeydown, this);
            this.divViewCompBody04.btnPtnrPop01.addEventHandler("onclick", this.fnPtnrSearch, this);
            this.divViewCompBody04.chkBasicPymt.addEventHandler("onchanged", this.fnChkBasicPymtOnChanged, this);
            this.divViewCompBody04.chkSPymt.addEventHandler("onchanged", this.fnChkPymtOnChanged, this);
            this.divViewCompBody04.chkMPymt.addEventHandler("onchanged", this.fnChkPymtOnChanged, this);
            this.divViewCompBody04.chkCPymt.addEventHandler("onchanged", this.fnChkPymtOnChanged, this);
            this.divViewCompBody04.chkAltCntrGrnt.addEventHandler("onchanged", this.fnChkGrntOnChanged, this);
            this.divViewCompBody04.chkAltPPayGrnt.addEventHandler("onchanged", this.fnChkGrntOnChanged, this);
            this.divViewCompBody04.chkAltCPayGrnt.addEventHandler("onchanged", this.fnChkGrntOnChanged, this);
            this.divViewCompBody04.chkNoGrnt.addEventHandler("onchanged", this.fnChkNoGrntOnChanged, this);
            this.divViewCompBody04.cboAltSign.addEventHandler("onitemclick", this.rdo_altAsset02_onitemclick, this);
            this.divViewCompBody04.cboAltTstamp.addEventHandler("onitemchanged", this.cboAltTstampOnItemChanged, this);
            this.divViewCompBody04.btnTstampAmtShow.addEventHandler("onclick", this.btntTstampAmtShowOnclick, this);
            this.divViewCompBody04.btnTstampAmt.addEventHandler("onclick", this.btnTstampAmtOnClick, this);
            this.divViewCompBody04.teaEtcCntnt.addEventHandler("oneditclick", this.TextArea01_oneditclick, this);
            this.divViewCompBody01.grdRfqItem.addEventHandler("onkeydown", this.fnItmListKeyDown, this);
            this.divViewCompBody01.grdRfqItem.addEventHandler("oncellclick", this.grdCntrItemOnCellclick, this);
            this.divViewCompBody01.grdRfqItem.addEventHandler("oncelldblclick", this.grdCntrItemOnCelldbclick, this);
            this.divViewCompBody01.grdRfqItem.addEventHandler("onexpanddown", this.grdCntrItemExpandDown, this);

        };

        this.loadIncludeScript("BAprvDetail_Cntr.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
