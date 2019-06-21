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
                this.set_dragscrolltype("none");
                this.set_name("MainPotal");
                this.set_titletext("내부 메인화면");
                this._setFormPosition(0,0,1262,992);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCount", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div01", "absolute", "5", "290", null, null, "5", "10", this);
            obj.style.set_border("0 none #808080ff");
            obj.set_taborder("14");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);
            obj = new Static("sta_ptnrChtDt", "absolute", "0", "21", null, null, "0", "4", this.Div01);
            obj.set_cssclass("sta_WF_Renewal2");
            obj.getSetter("objNm").set("");
            obj.style.set_shadow("outer 1,1 2 #e1e1e1ff");
            obj.set_taborder("0");
            this.Div01.addChild(obj.name, obj);
            obj = new Grid("Grid02", "absolute", "15", "66", null, null, "15", "13", this.Div01);
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj.set_cssclass("Maingrid1");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("신규등록요청 그리드");
            obj.set_scrollbars("autovert");
            obj.set_taborder("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"109\"/><Column size=\"62\"/><Column size=\"80\"/><Column size=\"573\"/><Column size=\"76\"/><Column size=\"76\"/><Column size=\"70\"/><Column size=\"64\"/><Column size=\"45\"/><Column size=\"44\"/></Columns><Rows><Row band=\"head\" size=\"36\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"소싱그룹\"/><Cell col=\"1\" text=\"담당자\"/><Cell col=\"2\" text=\"입찰번호\"/><Cell col=\"3\" text=\"입찰명\"/><Cell col=\"4\" text=\"상태\"/><Cell col=\"5\" text=\"공고일자\"/><Cell col=\"6\" text=\"완료일자\"/><Cell col=\"7\" text=\"구매상태\"/><Cell col=\"8\" text=\"기준\"/><Cell col=\"9\" text=\"일수\"/></Band><Band id=\"body\"><Cell style=\"align:left;color:red;color2:red;\" text=\"쿼리없음\"/><Cell col=\"1\" style=\"color2:EXPR(구매상태==&quot;지연&quot;?&quot;red&quot;:&quot;black&quot;);\" text=\"bind:CHRGR_NM\"/><Cell col=\"2\" style=\"color2:EXPR(구매상태==&quot;지연&quot;?&quot;red&quot;:&quot;black&quot;);\" text=\"bind:RFQ_REQ_NO\"/><Cell col=\"3\" style=\"align:left;color2: ;font:bold 9 arial;\" text=\"bind:TTL\"/><Cell col=\"4\" style=\"color:EXPR(구매상태==&quot;지연&quot;?&quot;red&quot;:&quot;black&quot;);color2:EXPR(구매상태==&quot;지연&quot;?&quot;red&quot;:&quot;black&quot;);\" text=\"bind:CD_RFQ_STTS_NM\"/><Cell col=\"5\" displaytype=\"date\" mask=\"yyyy-MM-dd\" style=\"color2:EXPR(구매상태==&quot;지연&quot;?&quot;red&quot;:&quot;black&quot;);\" text=\"bind:APP_CMPLT_DT\"/><Cell col=\"6\" displaytype=\"date\" mask=\"yyyy-MM-dd\" style=\"color2:EXPR(구매상태==&quot;지연&quot;?&quot;red&quot;:&quot;black&quot;);\" text=\"bind:RFQ_CLOSE_DAY\"/><Cell col=\"7\" style=\"color:red;color2:red;\" text=\"쿼리없음\"/><Cell col=\"8\" style=\"color:red;color2:red;\" text=\"쿼리없음\"/><Cell col=\"9\" style=\"color:red;color2:red;\" text=\"쿼리없음\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "14", "29", "11.74%", "36", null, null, this.Div01);
            obj.set_cssclass("sta_WF_maintit1");
            obj.set_taborder("2");
            obj.set_text("입찰진행현황");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("sta_grdStatus", "absolute", "161", "37", "32", "20", null, null, this.Div01);
            obj.set_cssclass("sta_WF_GrdTotal");
            obj.style.set_align("right middle");
            obj.set_taborder("3");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("sta_grdStatus00", "absolute", "193", "37", "50", "20", null, null, this.Div01);
            obj.set_cssclass("sta_WF_GrdTotal");
            obj.set_taborder("4");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);
            obj = new Radio("Radio00", "absolute", null, "33", "186", "21", "18", null, this.Div01);
            this.Div01.addChild(obj.name, obj);
            var Radio00_innerdataset = new Dataset("Radio00_innerdataset", this.Div01.Radio00);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">T</Col><Col id=\"datacolumn\">지연</Col></Row><Row><Col id=\"codecolumn\">F</Col><Col id=\"datacolumn\">정상</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.style.set_align("left middle");
            obj.set_taborder("5");
            obj.set_value("A");

            obj = new Div("divViewCompCond01", "absolute", "0", "0", null, "311", "0", null, this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "152", "138", "1050", "6", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_ProcessLine");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("");
            obj.set_taborder("1");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "42", "79", "117", "125", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_Order");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("");
            obj.set_taborder("2");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "53", "154", "95", "31", null, null, this.divViewCompCond01);
            obj.set_cssclass("btn_WF_Creation");
            obj.getSetter("lbcd").set("TTL_PO_CREATE");
            obj.getSetter("objNm").set("발주생성");
            obj.set_taborder("3");
            obj.set_text("입찰진행");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "83", "100", "51", "21", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_OrderCount");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("");
            obj.set_taborder("4");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "83", "126", "51", "21", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_OrderCount");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("");
            obj.style.set_color("red");
            obj.set_taborder("5");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "817", "101", "149", "80", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_ProcessLine2");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("");
            obj.set_taborder("6");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "310", "133", "16", "16", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_ProcessBullet");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("");
            obj.set_taborder("7");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Button("Button05", "absolute", "833", "53", "115", "41", null, null, this.divViewCompCond01);
            obj.set_cssclass("btn_WF_Process3");
            obj.set_enable("false");
            obj.getSetter("lbcd").set("TTL_PO_RECIPT");
            obj.getSetter("objNm").set("발주접수");
            obj.set_taborder("8");
            obj.set_text(" 유찰");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Button("Button06", "absolute", "208", "97", "129", "41", null, null, this.divViewCompCond01);
            obj.set_cssclass("btn_WF_Process4");
            obj.getSetter("lbcd").set("TTL_REQ");
            obj.getSetter("objNm").set("요청");
            obj.set_taborder("9");
            obj.set_text(" 입찰작성중");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "1096", "133", "16", "16", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_ProcessBullet");
            obj.set_enable("false");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("");
            obj.set_taborder("11");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "14", "14", "16.96%", "36", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_maintit1");
            obj.set_taborder("12");
            obj.set_text("구매진행현황");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Button("Button10", "absolute", "826", "186", "130", "41", null, null, this.divViewCompCond01);
            obj.set_cssclass("btn_WF_Process6");
            obj.set_enable("false");
            obj.getSetter("lbcd").set("TTL_GR");
            obj.getSetter("objNm").set("입고");
            obj.style.setStyleValue("padding", "disabled", "0 0 0 14");
            obj.set_taborder("13");
            obj.set_text(" 재입찰");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Button("Button04", "absolute", "1048", "94", "115", "41", null, null, this.divViewCompCond01);
            obj.set_cssclass("btn_WF_Process3");
            obj.getSetter("lbcd").set("TTL_PO_RECIPT");
            obj.getSetter("objNm").set("견적진행");
            obj.set_taborder("14");
            obj.set_text("낙찰");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "883", "95", "16", "16", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_ProcessBullet");
            obj.set_enable("false");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("");
            obj.set_taborder("15");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "883", "169", "16", "16", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_ProcessBullet");
            obj.set_enable("false");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("");
            obj.set_taborder("16");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "402", "133", "16", "16", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_ProcessBullet");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("");
            obj.set_taborder("20");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "576", "133", "16", "16", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_ProcessBullet");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("");
            obj.set_taborder("21");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "711", "133", "16", "16", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_ProcessBullet");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("");
            obj.set_taborder("22");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Button("Button03", "absolute", "648", "149", "142", "41", null, null, this.divViewCompCond01);
            obj.set_cssclass("btn_WF_Process2");
            obj.getSetter("lbcd").set("TTL_GR");
            obj.getSetter("objNm").set("입고");
            obj.style.set_background("URL('theme://beforeDesign/btn_WF_Process2.png') stretch");
            obj.set_taborder("25");
            obj.set_text("입찰심사중");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Button("Button01", "absolute", "321", "149", "177", "41", null, null, this.divViewCompCond01);
            obj.set_cssclass("btn_WF_Process2");
            obj.getSetter("lbcd").set("TTL_GR");
            obj.getSetter("objNm").set("입고");
            obj.style.set_background("URL('theme://beforeDesign/btn_WF_Process2.png') stretch");
            obj.set_taborder("26");
            obj.set_text(" 입찰공고승인중");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Button("Button02", "absolute", "503", "97", "161", "41", null, null, this.divViewCompCond01);
            obj.set_cssclass("btn_WF_Process3");
            obj.getSetter("lbcd").set("TTL_PO_RECIPT");
            obj.getSetter("objNm").set("견적진행");
            obj.style.set_background("URL('theme://beforeDesign/btn_WF_Process3.png') stretch");
            obj.set_taborder("27");
            obj.set_text("입찰진행중");
            this.divViewCompCond01.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "1091", "101", "51", "21", null, null, this.divViewCompCond01);
            obj.set_cssclass("sta_WF_OrderCount");
            obj.getSetter("lbcd").set("");
            obj.getSetter("objNm").set("");
            obj.set_taborder("30");
            this.divViewCompCond01.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.style.set_border("0 none #808080ff");
            		p.set_taborder("14");
            		p.set_text("Div01");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 311, this.divViewCompCond01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("15");

            	}
            );
            this.divViewCompCond01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1262, 992, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("MainPotal_01");
            		p.set_dragscrolltype("none");
            		p.set_titletext("내부 메인화면");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("MainPotal_BID_01.xfdl", function(exports) {
        /**
           @file       MainPotal_01.xfdl
           @desc       Buyer 메인화면
           @author     한민희
           @makedate   2016.07.18
           @history    
        */
         

        this.MainPotal_onload = function(obj,e)
        {
        	this.fnMainSearch();
        }

        
        /**
          * @함수명	: fnMainSearch
          * @desc     	: 조회 프로세스
          */
        this.fnMainSearch = function()
        {
        	
         	var sSvcID = "searchBMain";
         	var sController = "epro.com.service.BMainService.searchBMain";
         	var sInDatasets = "";
         	var sOutDatasets = "dsCount=dsCount dsList=dsList";
         	var sCallbackFunc = "fnTrCallBack";
        	
             gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
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
        	
        		case "searchBMain" :
        			this.Div01.sta_grdStatus.set_text(this.dsList.getRowCount());			
        		break;
        		
        		default:
        		break;	
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.MainPotal_onload, this);
            this.Div01.Grid02.addEventHandler("oncellclick", this.Tab00_tabpage1_div_toDoList_Grid02_oncellclick, this);
            this.Div01.Grid02.addEventHandler("oncelldblclick", this.div_toDoList_Grid02_oncelldblclick, this);
            this.Div01.Radio00.addEventHandler("onitemchanged", this.Div01_Radio00_onitemchanged, this);
            this.Div01.Radio00.addEventHandler("onitemclick", this.Div01_Radio00_onitemclick, this);
            this.divViewCompCond01.Button05.addEventHandler("onclick", this.Tab00_tabpage1_Button05_onclick, this);
            this.divViewCompCond01.Button06.addEventHandler("onclick", this.Tab00_tabpage1_Button06_onclick, this);
            this.divViewCompCond01.Button04.addEventHandler("onclick", this.Tab00_tabpage1_Button05_onclick, this);
            this.divViewCompCond01.Button03.addEventHandler("onclick", this.Tab00_tabpage1_div_purSttsFlow_Button03_onclick, this);
            this.divViewCompCond01.Button01.addEventHandler("onclick", this.Tab00_tabpage1_div_purSttsFlow_Button03_onclick, this);
            this.divViewCompCond01.Button02.addEventHandler("onclick", this.Tab00_tabpage1_Button05_onclick, this);

        };

        this.loadIncludeScript("MainPotal_BID_01.xfdl", true);

       
    };
}
)();
