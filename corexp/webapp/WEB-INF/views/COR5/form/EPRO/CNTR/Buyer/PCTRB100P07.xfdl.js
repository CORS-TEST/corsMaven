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
                this.set_name("pop_mtrlSrch");
                this.set_titletext("계약회람(뷰)");
                this.set_cssclass("frm_POP_Search");
                this._setFormPosition(0,0,980,268);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_condition", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TRNR_BGN_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"TRNR_END_DAY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_return", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"CHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"PSTN\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_MAIL_RCV\" type=\"STRING\" size=\"256\"/><Column id=\"POST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TRNR_BGN_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"TRNR_END_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("sta_title", "absolute", "0", "4", null, "30", "940", null, this);
            obj.set_text("계약회람");
            obj.set_cssclass("sta_POP_PopTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "0", "30", "30", "8", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_POP_CloseBtn");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list", "absolute", "10", "42", null, null, "10", "10", this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_list");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellclickbound("cell");
            obj.getSetter("f_filter").set("N");
            obj.getSetter("f_excel").set("Y");
            obj.getSetter("f_hide").set("N");
            obj.getSetter("f_find").set("N");
            obj.getSetter("f_sort").set("Y");
            obj.getSetter("f_fix").set("N");
            obj.getSetter("f_height").set("N");
            obj.getSetter("f_save").set("N");
            obj.getSetter("f_mode").set("Y");
            obj.getSetter("f_init").set("N");
            obj.getSetter("f_colSize").set("N");
            obj._setContents("<Formats><Format id=\"MMODE\"><Columns><Column size=\"117\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"86\"/><Column size=\"208\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"부서\"/><Cell col=\"1\" text=\"사용자명\"/><Cell col=\"2\" text=\"직책\"/><Cell col=\"3\" text=\"회람시작일자\"/><Cell col=\"4\" text=\"회람종료일자\"/><Cell col=\"5\" text=\"회람여부\"/><Cell col=\"6\" text=\"이메일\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:DEPT_NM\"/><Cell col=\"1\" style=\"align: ;\" cssclass=\"cell_link\" text=\"bind:USER_NM\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:POST_NM\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"none\" text=\"bind:TRNR_BGN_DAY\" mask=\"yyyy.MM.dd\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"none\" text=\"bind:TRNR_END_DAY\" mask=\"yyyy.MM.dd\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" text=\"bind:ALT_CHK\"/><Cell col=\"6\" style=\"align:left;\" text=\"bind:EMAIL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00", "absolute", "0", "4", null, "30", "580", null, this);
            obj.set_taborder("5");
            obj.set_text("계약회람");
            obj.set_cssclass("sta_POP_PopTitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title01", "absolute", "0", "4", null, "30", "897", null, this);
            obj.set_taborder("7");
            obj.set_text("계약회람");
            obj.set_cssclass("sta_POP_PopTitle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 980, 268, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("계약회람(뷰)");
            		p.set_cssclass("frm_POP_Search");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("PCTRB100P07.xfdl", "lib::lib_all.xjs");
        this.registerScript("PCTRB100P07.xfdl", function(exports) {
        /**
           @file       PCTRB100P06.xfdl
           @desc       계약회람
           @author     한민희
           @makedate   2017.02.20
           @history    
        */  
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::lib_all.xjs", null, exports); }	//include "lib::lib_all.xjs"

        this.fv_cntr_no;
        this.fv_branch_cd;

        /**
        	@function	pop_MatGroupSearch_onload()
        	@desc   	폼 onload 이벤트
        */
        this.pop_MatGroupSearch_onload = function(obj,e)
        {
        	//시스템 공통함수 호출 : 팝업
        	this.gfn_popOnLoad(this);
        	
        	//부모창으로 부터 전달받은 값	
        	var ownFrame = this.getOwnerFrame();
        	
        	this.fv_cntr_no = ownFrame.cntr_no;
        	this.fv_branch_cd = application.gds_userInfo.getColumn(0, "BRANCH_CD");
        	
         	this.ds_condition.setColumn(0, "CNTR_NO", this.fv_cntr_no);
         	this.ds_condition.setColumn(0, "BRANCH_CD", this.fv_branch_cd);
         	
        	this.fn_trnrUserSrch();
        }
         
        /**
        	@function	fn_preSearch()
        	@desc   	조회 전 처리
        */
        this.fn_preSearch = function()
        {
        	return true;
        }

        /**
        	@function	fn_ptnrUserSrch()
        	@desc   	계약회람 메일 보낼 협력업체 사용자 조회
        */
        this.fn_trnrUserSrch = function()
        {
        	if(!this.fn_preSearch()) return false;
        	
        	var sSvcID = "Ctr_trnrUserSrch";
        	var sController = "Ctr_trnrUserSrch.do";
        	var sInDatasets = "in_ds=ds_condition";
        	var sOutDatasets = "ds_list=ds_srch";
        	var sCallbackFunc = "fn_trCallBack";
        	
            this.gfn_tran(sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
        	@function	fn_callBack()
        	@desc   	Transaction Callback함수
        */
        this.fn_trCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	if(strErrCd < 0)
        	{
        		return;
        	}
        	
        	switch(strSvcID)
        	{		
        		case "Ctr_MailSend" :	
        			if(!this.gfn_isNull(strErrMsg)) this.gfn_alert(strErrMsg);
        		break;
        				
        		default:
        		break;	
        	}
        }

        /**
        	@function	btn_close_onclick()
        	@desc   	팝업닫기
        */
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        /**
        	@function	fn_popCallBack()
        	@desc   	팝업 CallBack 함수
        */
        this.fn_popCallBack = function(sPopupId,rtn)
        {
        	if(sPopupId == "PopupComUserSrch")
        	{
        		if(this.gfn_isNull(rtn))
        		{
        			this.ds_list.deleteRow(this.ds_list.rowcount -1 );
        			return;
        		}
        		
        		this.ds_return.loadXML(rtn);
        		
        		var nRow = this.ds_list.findRow("USER_ID", this.ds_return.getColumn(0, "USER_ID"));
        		if(nRow > -1)
        		{
        			this.ds_list.deleteRow(this.ds_list.rowcount -1 );
        			this.gfn_alert("이미 추가한 사용자입니다.");
        			return;
        		}
        		
        		this.ds_list.setColumn(this.ds_list.rowposition,"USER_ID",this.ds_return.getColumn(0,"USER_ID"));
        		this.ds_list.setColumn(this.ds_list.rowposition,"USER_NM",this.ds_return.getColumn(0,"USER_NM"));
        		this.ds_list.setColumn(this.ds_list.rowposition,"DEPT_NM",this.ds_return.getColumn(0,"DEPT_NM"));
        		this.ds_list.setColumn(this.ds_list.rowposition,"POST_NM",this.ds_return.getColumn(0,"POST_NM"));		
        		this.ds_list.setColumn(this.ds_list.rowposition,"TRNR_BGN_DAY",this.gfn_today());
        		this.ds_list.setColumn(this.ds_list.rowposition,"TRNR_END_DAY",this.gfn_addDay(this.gfn_today(), 7));		
        		this.ds_list.setColumn(this.ds_list.rowposition,"ALT_MAIL_RCV",this.ds_return.getColumn(0,"ALT_MAIL_RCV"));
        		this.ds_list.setColumn(this.ds_list.rowposition,"EMAIL",this.ds_return.getColumn(0,"EMAIL"));
        		this.ds_list.setColumn(this.ds_list.rowposition,"BRANCH_CD", this.fv_branch_cd);
        		this.ds_list.setColumn(this.ds_list.rowposition,"CNTR_NO", this.fv_cntr_no);
        	}
        }

        /**
        	@function	grd_list_oncelldblclick()
        	@desc   	그리드 oncelldblclick 이벤트
        */
        this.grd_list_oncelldblclick = function(obj,e)
        {
        	if(this.gfn_grdBindColName(obj, e.cell)=="USER_NM")
        	{
        		var sArg = {	 branch_cd : application.gds_userInfo.getColumn(0, "BRANCH_CD")
        						,  user_id : this.ds_list.getColumn(this.ds_list.rowposition, "USER_ID")
        					};
        		this.gfn_dialog("PopupUserInfo", "commPop::PPOPC000P05.xfdl", sArg, "fn_popCallBack");
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.pop_MatGroupSearch_onload, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.grd_list.addEventHandler("onexpandup", this.grd_list_onexpandup, this);
            this.grd_list.addEventHandler("onkeydown", this.grd_list_onkeydown, this);
            this.grd_list.addEventHandler("ontextchanged", this.grd_list_ontextchanged, this);
            this.grd_list.addEventHandler("oncelldblclick", this.grd_list_oncelldblclick, this);

        };

        this.loadIncludeScript("PCTRB100P07.xfdl", true);

       
    };
}
)();
