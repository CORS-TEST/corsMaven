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
                this.set_name("PCTRB100P00");
                this.set_titletext("유비리포트 출력물 컴포넌트");
                this.set_cssclass("frm_POP_Search");
                this._setFormPosition(0,0,934,858);
            }
            this.style.set_font("9 arial");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_params", this);
            obj._setContents("<ColumnInfo><Column id=\"JRF_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EXPORT_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"EXPORT_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EXPOTR_FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"IS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_1\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_2\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM1\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"MULTY_PARAM\" type=\"STRING\" size=\"256\"/><Column id=\"TBL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_MODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_html", this);
            obj._setContents("<ColumnInfo><Column id=\"contents\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_1\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_signData", this);
            obj._setContents("<ColumnInfo><Column id=\"TBL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_1\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_2\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_DATA\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM1\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_DATA_B\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_MODE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new UbiReport4("UbiReport00", "absolute", "10", "10", null, null, "10", "21", this);
            obj.set_taborder("6");
            obj.set_text("UbiReport00");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 934, 858, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("UbiReport");
            		p.set_titletext("유비리포트 출력물 컴포넌트");
            		p.style.set_font("9 arial");
            		p.set_cssclass("frm_POP_Search");

            	}
            );
            obj.set_stepcount("");
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("ComUbiReport.xfdl", function(exports) {
        /**
           @file       PPOPC2500P00.xfdl
           @desc       유비리포트 출력 및 서명
           @author     배열
           @makedate   2018.12.10
           @history    
        */

        this.popTitle = '리포트' //gfnMultiLabel("EPRO_LABEL_01168");

        var svcurl = "";
        var nowdate = new Date();
        var year  = nowdate.getFullYear();
        var month = nowdate.getMonth() + 1;   // 1월=0,12월=11이므로 1 더함
        var day   = nowdate.getDate();
        var hour  = nowdate.getHours();
        var min   = nowdate.getMinutes();
        var sec   = nowdate.getSeconds();
        var milsec = nowdate.getMilliseconds();

        if (("" + month).length == 1) { month = "0" + month; }
        if (("" + day).length   == 1) { day   = "0" + day;   }
        if (("" + hour).length  == 1) { hour  = "0" + hour;  }
        if (("" + min).length   == 1) { min   = "0" + min;   }
        if (("" + sec).length   == 1) { sec   = "0" + sec;   }

        this.UbiReport00.isStreaming = true;
        this.UbiReport00.scrollpage = "true";
        this.UbiReport00.key = ('' + year + month + day + hour + min + sec + milsec) + '_' + ((Math.random() * (1 << 30)).toString(16).replace('.',''));

        svcurl = application.gvDomain + "/";	
        	
        this.UbiReport00.resource = svcurl+"ubi4/js";
        this.fv_directPrint = false;
        this.fv_reportFile = ""

        this.fv_ref_key_1 = "";
        this.fv_ref_key_2 = "";
        this.fv_ref_key_3 = "";
        this.fv_col_nm1 = "";
        this.fv_col_nm2 = "";
        this.fv_col_nm3 = "";
        this.fv_multiArg = "";
        this.fv_tblNm = "";
        this.fv_signMode = "";

        
        /**
        	@function	UbiReportInit()
        	@desc   	
        */
        this.UbiReportInit = function(obj)
        {				 
        	if(this.UbiReport00.getTotalPage() == undefined)
        	{			
        		// Create Object 
        		var objPlugin = new Plugin("Plugin", "absolute", 30, 120, 196, 46, null, null);
        		// Add Object to Parent Form  
        		this.addChild("Plugin", objPlugin);
        		this.Plugin.set_classid(application.gv_ubiClassid);
        		this.Plugin.set_codebase(application.gv_ubiCodebase);

        		this.Plugin.show();

        		this.reload();

        	}
        	
         	var reportFile		= obj.getColumn(0, "REPORT_FILE");
         	this.fv_reportFile  = reportFile
         	var imgDir			= application.gvDomain + "/ubi4/work/images/#";	
         	var localdatasets   = obj.getColumn(0, "LOCAL_DATASET")
         	 	 	
        	// 리포트가 정의되지 않았을 경우 리턴
        	if (reportFile == undefined)
        	{
        		gfnAlert("리포트 파일명이 정의되지 않았습니다.");
        		return;
        	}

        	// ---------------------------------------
        	// 리포트 파라미터 설정
        	// ---------------------------------------
        	this.UbiReport00.jrffile = reportFile;

        	// HTML의 리포트 통신을 담당할 URL 주소	
        	this.UbiReport00.ubiserverurl = svcurl+"UbiServer";
        	//페이지 맞춤설정 -9998(폭맞춤) -9999(쪽맞춤)
            this.UbiReport00.set_scale("-9998") 
        	// 리포트 파일을 가져올 URL (ActiveX에서 사용) : 리포트 파일명을 제외한 디렉토리까지 정의
        	if(application.services["svcurl"].url.indexOf("local") > -1){
        		this.UbiReport00.reporturl = svcurl+"ubi4/work_dev/";
        	}else { 
        		this.UbiReport00.reporturl = svcurl+"ubi4/work_dev/";
        	}
        	// 리포트에서 쓸 이미지 아규먼트
        	var imgArg = "A_IMG#" + imgDir;
        	
        	// 하나의 리포트 파일을 여러 건의 파라미터를 넘겨 처리할 때.. ex) 아규먼트1#값1#값2#값3...
        	if(obj=="[object Dataset]")
        	{
        		this.UbiReport00.ismultireport = true;
        		this.UbiReport00.multicount = obj.getRowCount();
        		
        		var totalArg = "";
        		
        		if(obj.getRowCount() == 1){
        			this.fv_ref_key_1 	= obj.getColumn(0,"REF_KEY_1");
        			this.fv_ref_key_2 	= obj.getColumn(0,"REF_KEY_2");
        			this.fv_ref_key_3 	= obj.getColumn(0,"REF_KEY_3");
        			this.fv_col_nm1 	= obj.getColumn(0,"COL_NM1");
        			this.fv_col_nm2 	= obj.getColumn(0,"COL_NM2");
        			this.fv_col_nm3 	= obj.getColumn(0,"COL_NM3");
        			this.fv_tblNm		= obj.getColumn(0,"TBL_NM");
        			
        			if(this.fv_col_nm3 != ""){
        				totalArg = totalArg + imgArg + obj.getColumn(0,"COL_NM1")+ "#" +obj.getColumn(0,"REF_KEY_1")+ "#" +obj.getColumn(0,"COL_NM2")+ "#" +obj.getColumn(0,"REF_KEY_2")+"#" +obj.getColumn(0,"COL_NM3")+ "#" +obj.getColumn(0,"REF_KEY_3");	
        			}else{
        				totalArg = totalArg + imgArg + obj.getColumn(0,"COL_NM1")+ "#" +obj.getColumn(0,"REF_KEY_1")+ "#" +obj.getColumn(0,"COL_NM2")+ "#" +obj.getColumn(0,"REF_KEY_2");	
        			}

        		}else{
        			for(var i=0; i<obj.getRowCount(); i++)
        			{	
        				var multiArg = "";
        				
        				if(obj.getRowCount() > 1)	imgArg = "A_IMG." + (i+1) + "#" + imgDir;
        				
        				for(var k=0; k<obj.getColCount(); k++)
        				{
        					if(obj.getRowCount() > 1)
        						multiArg = multiArg + obj.getColID(k) + "." + (i+1) + "#" + obj.getColumn(i, obj.getColID(k)) + "#";
        					else
        						multiArg = multiArg + obj.getColID(k) + "#" + obj.getColumn(i, obj.getColID(k)) + "#";
        				}			
        				this.fv_multiArg = multiArg;
        				totalArg = totalArg + imgArg + multiArg;			
        			}
        		}
        		trace(totalArg);
        		this.UbiReport00.arg = totalArg;
        	}
        	else if(obj!="[object Dataset]")
        	{
        		
        		this.UbiReport00.arg = imgArg + obj;
        	}
        	
        	
        	if(application.services["svcurl"].url.indexOf("local") > -1)
        	{
        		this.UbiReport00.resid = "UBIHTML_DEV";
        	}
        	else
        	{
        		this.UbiReport00.resid = "UBIHTML_DEV";
        	}
         
        	if(gfnIsNull(localdatasets))
        	{
        		if(application.services["svcurl"].url.indexOf("local") > -1)
        		{
        			this.UbiReport00.datasource = "DEV";
        		}
        		else
        		{
        			this.UbiReport00.datasource = "DEV";
        		}
        	}
         	
         
         	this.UbiReport00.setVisibleToolbar("SAVE", false);
        	this.UbiReport00.setPrintMenu('PDF');
        	this.UbiReport00.setVisibleToolbar("PRINT_PDF",false);
        	this.UbiReport00.setVisibleToolbar("PRINT_HTML",false);
        	this.UbiReport00.setVisibleToolbar("PRINT_UBI",false);
        	this.UbiReport00.setVisibleToolbar("SAVE",false);
        	this.UbiReport00.setVisibleToolbar("SAVE_PPTX",false); 
        	this.UbiReport00.setVisibleToolbar("EXPORT",false);
        	this.UbiReport00.setVisibleToolbar("EXPORT_EXCEL",false);
            this.UbiReport00.setVisibleToolbar("EXPORT_PPT",false);
            this.UbiReport00.setVisibleToolbar("EXPORT_DOC",false);
            this.UbiReport00.setVisibleToolbar("EXPORT_HWP",false);
            this.UbiReport00.setVisibleToolbar("EXPORT_HWPML",false);

         	
        	//this.UbiReport00.retrieve(this, "");
        	this.UbiReport00.retrieve(this, "UbiPreviewEnd");
        		
        	return;
        }  

         
        this.UbiPreviewEnd = function()
        {
        	this.UbiReport00.setVisibleToolbar("SAVE", false);
        	this.UbiReport00.setPrintMenu('PDF');
        	this.UbiReport00.setVisibleToolbar("PRINT_PDF",false);
        	this.UbiReport00.setVisibleToolbar("PRINT_HTML",false);
        	this.UbiReport00.setVisibleToolbar("PRINT_UBI",false);
        	this.UbiReport00.setVisibleToolbar("SAVE",false);
        	this.UbiReport00.setVisibleToolbar("SAVE_PPTX",false); 
        	this.UbiReport00.setVisibleToolbar("EXPORT",false);
        	this.UbiReport00.setVisibleToolbar("EXPORT_EXCEL",false);
            this.UbiReport00.setVisibleToolbar("EXPORT_PPT",false);
            this.UbiReport00.setVisibleToolbar("EXPORT_DOC",false);
            this.UbiReport00.setVisibleToolbar("EXPORT_HWP",false);
            this.UbiReport00.setVisibleToolbar("EXPORT_HWPML",false);
        }
         

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        this.fnReSize = function()
        {
        	this.UbiReport00.set_top(0)
        	this.UbiReport00.set_height(0)
        	this.UbiReport00.set_bottom(10)
        	this.UbiReport00.set_left(0)
        }

        this.gettReportFileName = function()
        {
        	return this.fv_reportFile
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.UbiReport_onload, this);
            this.addEventHandler("oninit", this.PCTRB100P00_oninit, this);

        };

        this.loadIncludeScript("ComUbiReport.xfdl", true);

       
    };
}
)();
