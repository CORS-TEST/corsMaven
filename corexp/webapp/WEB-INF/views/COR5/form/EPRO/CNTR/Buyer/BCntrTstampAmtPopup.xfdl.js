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
                this.set_name("pop_docType");
                this.set_titletext("인지세란?");
                this.set_cssclass("frm_POP_Search");
                this._setFormPosition(0,0,837,559);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cdDocCtgr", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj.getSetter("dsDescription").set("검색된 데이터가 담기는 데이터셋");
            obj._setContents("<ColumnInfo><Column type=\"STRING\" id=\"구매유형\" size=\"256\"/><Column type=\"STRING\" id=\"다운로드\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"구매유형\">첨부파일1.xls</Col><Col id=\"다운로드\">첨부</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"AMT\" type=\"STRING\" size=\"256\"/><Column id=\"TAX\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"AMT\">1천만원 이하</Col><Col id=\"TAX\">비과세</Col></Row><Row><Col id=\"AMT\">1천만원 초과 ~ 3천만원 이하</Col><Col id=\"TAX\">2만원</Col></Row><Row><Col id=\"AMT\">3천만원 초과 ~ 5천만원 이하</Col><Col id=\"TAX\">4만원</Col></Row><Row><Col id=\"AMT\">5천만원 초과 ~ 1억원 이하</Col><Col id=\"TAX\">7만원</Col></Row><Row><Col id=\"AMT\">1억원 초과 ~ 10억원 이하</Col><Col id=\"TAX\">15만원</Col></Row><Row><Col id=\"AMT\">10억원 초과</Col><Col id=\"TAX\">35만원</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "3.35%", "38", null, "322", "2.99%", null, this);
            obj.set_taborder("11");
            obj.set_text("<인지세 시행령> 제2조 의3 【도급 및 위임 문서의 범위】에 따라 다음 각 호의 어느 하나에 해당하는 것은 인지세를 납부하여야 한다.\r\n\r\n    \r\n1.「건설산업기본법」 제22조에 따라 작성하는 도급문서\r\n2.「전기공사업법」 제12조에 따라 작성하는 도급문서\r\n3.「정보통신공사업법」 제26조에 따라 작성하는 도급문서\r\n4.「국가를 당사자로 하는 계약에 관한 법률」 제11조 또는 「지방자치단체를 당사자로 하는 계약에 관한 법률」 제14조에 따라 작성하는 도급문서\r\n5.「변호사법」 제3조에 따라 변호사가 작성하는 수임(수임)계약서\r\n6.「해양사고의 조사 및 심판에 관한 법률」 제29조에 따라 심판변론인이 작성하는 수임계약서\r\n7.「변리사법」 제2조에 따라 변리사가 작성하는 수임계약서\r\n8.「법무사법」 제2조에 따라 법무사가 작성하는 수임계약서\r\n9.「공인회계사법」 제2조에 따라 공인회계사가 작성하는 수임계약서\r\n10.「세무사법」 제2조에 따라 세무사가 작성하는 수임계약서\r\n11.「중소기업진흥에 관한 법률」 제46조 및 제55조에 따라 경영지도사 및 기술지도사가 작성하는 수임계약서\r\n12.「부동산 가격공시 및 감정평가에 관한 법률」 제22조에 따라 감정평가사가 작성하는 수임계약서\r\n13.「보험업법」 제188조에 따라 손해사정사가 작성하는 수임계약서\r\n14.「관세사법」 제2조에 따라 관세사가 작성하는 수임계약서\r\n15.「기술사법」 제3조에 따라 기술사가 작성하는 수임계약서\r\n16.「건축사법」 제19조에 따라 건축사가 작성하는 수임계약서\r\n17.「도선법」 제18조에 따라 도선사가 작성하는 수임계약서\r\n18.「측량ㆍ수로조사 및 지적에 관한 법률」 제39조에 따라 측량기술자가 작성하는 수임계약서");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_opHead", "absolute", "3.23%", "9", "147", "22", null, null, this);
            obj.set_taborder("12");
            obj.set_text("인지세 관련 법령");
            obj.set_cssclass("btn_WF_DivClose");
            obj.getSetter("objNm").set("접기펼치기 버튼");
            obj.getSetter("lbcd").set("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_opHead00", "absolute", "3.23%", "368", "197", "22", null, null, this);
            obj.set_taborder("13");
            obj.set_text("기재금액별 인지세액 구간");
            obj.set_cssclass("btn_WF_DivClose");
            obj.getSetter("objNm").set("접기펼치기 버튼");
            obj.getSetter("lbcd").set("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list", "absolute", "3.23%", "398", null, "146", "3.46%", null, this);
            obj.set_cssclass("grd_default");
            obj.set_taborder("14");
            obj.set_binddataset("ds_list");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.getSetter("objNm").set("검색결과 그리드");
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
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"502\"/><Column size=\"239\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"기재금액(VAT 포함)\"/><Cell col=\"1\" text=\"인지세액\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:AMT\"/><Cell col=\"1\" style=\"align:center;\" text=\"bind:TAX\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 837, 559, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("인지세란?");
            		p.set_cssclass("frm_POP_Search");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("BCntrTstampAmtPopup.xfdl", function(exports) {
        /***************************************************************************
         * Program ID    : BCntrTstampAmtPopup.xfdl
         * Program Name  : 인지세 팝업
         * Author        : 배열
         * Created On    : 2015.08.13
         * 개    요 	 :
         *
         * =========================================================================
         * 변경일자     수정자    내    용
         * =========================================================================
        ***************************************************************************/

        this.popTitle = '인지세란?' //gfnMultiLabel("EPRO_LABEL_01168");

        /***************************************************************************
         * 함  수  명		: FormOninit()
         * 기      능		: 폼 onlinit 이벤트
         ***************************************************************************/
        this.FormOninit = function(obj,e)
        {
        	
        }
        /***************************************************************************
         * 함  수  명		: FormOnload()
         * 기      능		: 폼 onload 이벤트
         ***************************************************************************/
        this.FormOnload = function(obj,e)
        {

        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.FormOninit, this);
            this.addEventHandler("onload", this.FormOnload, this);
            this.btn_opHead.addEventHandler("onclick", this.fn_fold_onclick, this);
            this.btn_opHead00.addEventHandler("onclick", this.fn_fold_onclick, this);
            this.grd_list.addEventHandler("oncelldblclick", this.div_body_grd_list_oncelldblclick, this);

        };

        this.loadIncludeScript("BCntrTstampAmtPopup.xfdl", true);

       
    };
}
)();
