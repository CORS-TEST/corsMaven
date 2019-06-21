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
                this.set_titletext("유비리포트 출력물 팝업");
                this.set_cssclass("frm_POP_Search");
                this._setFormPosition(0,0,934,918);
            }
            this.style.set_font("9 arial");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_params", this);
            obj._setContents("<ColumnInfo><Column id=\"JRF_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EXPORT_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"EXPORT_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EXPOTR_FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"IS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_1\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_2\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_html", this);
            obj._setContents("<ColumnInfo><Column id=\"contents\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_1\" type=\"STRING\" size=\"256\"/><Column id=\"REF_KEY_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new UbiReport4("UbiReport00", "absolute", "1.28%", "24", null, "874", "1.61%", null, this);
            obj.set_taborder("4");
            obj.set_text("UbiReport00");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 934, 918, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("UbiReport");
            		p.set_titletext("유비리포트 출력물 팝업");
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
        this.registerScript("ComUbiReportUnSign.xfdl", function(exports) {
        /**
           @file       PPOPC2500P00.xfdl
           @desc       유비리포트 출력물 팝업
           @author     한민희
           @makedate   2016.11.10
           @history      
        */

        this.popTitle = "Report"

        /***********************************************************************************************************
        	@author     한민희
        	@desc 		넘겨받는 아규먼트 종류 or 방법에 따라서 리포트를 조회하는 방법이 3가지가 있다.
        				
        				//부모창으로 부터 전달받은 값	
        				var ownFrame = this.getOwnerFrame(); 	
        				var localdatasets	= ownFrame.localdatasets;
        				var arg             = ownFrame.arg;
        				
        				1. 프린트 할 화면에서 localdatasets 인자에 데이터셋을 담아주면...
        				넘겨받은 데이터셋을 그대로 출력한다.
        				
        				2. 프린트 할 화면에서 arg 인자에 String 형태의 아규먼트를 넘겨주면... ex) key1#val1#key2#val2
        				아규먼트로 리포트 파일(jrf)에서 쿼리 조회하여 출력한다.
        				
        				3. 여러건을 한번에 프린트 할 때 arg 인자에 데이터셋 형태의 아규먼트를 넘겨주면... ex)arg:this.DataSet00
        				넘겨받은 데이터셋의 Row별로 아규먼트로 받아 리포트 파일(jrf)에서 쿼리 조회하여 출력한다.

        ***********************************************************************************************************/
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

        //svcurl = "http://rp.kpic.co.kr:8080/";	
        //svcurl = "D:/"

        
        svcurl = application.gvDomain+"/ubi4/export/"
        	
        this.UbiReport00.resource = application.gvDomain + "/ubi4/js";
        this.fv_directPrint = false;
        this.fv_reportFile = ""

        /**
        	@function	UbiReport_onload()
        	@desc   	
        */
        this.UbiReport_onload = function(obj,e)
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
        	//부모창으로 부터 전달받은 값	
         	var ownFrame = this.getOwnerFrame();
         	
         	var isRuntime 		= ownFrame.isRuntime;
         	var localdatasets	= ownFrame.localdatasets;
         	var datasets		= ownFrame.datasets;
         	var reportFile		= ownFrame.arg_file_nm
         	var title_ko		= ownFrame.title_ko;
         	var arg             = ownFrame.arg;
         	var orientation		= ownFrame.orientation; 	

         	 
         	this.fv_reportFile = reportFile

        	// ---------------------------------------
        	// 리포트 파라미터 설정
        	// ---------------------------------------
        	this.UbiReport00.jrffile = this.fv_reportFile+".urf";
        	// HTML의 리포트 통신을 담당할 URL 주소	
        	this.UbiReport00.ubiserverurl = application.gvDomain+"/ubi4/UbiServer.jsp?fileName="+this.fv_reportFile;
        	//this.UbiReport00.ubiserverurl = application.gvDomain+"/UbiServer";
        	trace(this.UbiReport00.ubiserverurl	)
        	//페이지 맞춤설정 -9998(폭맞춤) -9999(쪽맞춤)
            this.UbiReport00.set_scale("-9998") 
        	// 리포트 파일을 가져올 URL (ActiveX에서 사용) : 리포트 파일명을 제외한 디렉토리까지 정의
        	this.UbiReport00.reporturl = svcurl;
        	// 리포트에서 쓸 이미지 아규먼트
        	this.UbiReport00.resid = "UBIHTML_DEV";
        	//리포트 툴바
            this.UbiReport00.toolbar = true; 
            this.UbiReport00.setVisibleToolbar("PRINT", true);
            this.UbiReport00.setVisibleToolbar("PRINTSET", true);
            this.UbiReport00.setVisibleToolbar("SAVE",false);
            this.UbiReport00.setVisibleToolbar("SAVE_PPTX",false); //PPTX  
            
            //전용브라우저
            this.UbiReport00.setVisibleToolbar("EXPORT",false);
            this.UbiReport00.setVisibleToolbar("EXPORT_PDF",false);
            this.UbiReport00.setVisibleToolbar("EXPORT_EXCEL",false);
            this.UbiReport00.setVisibleToolbar("EXPORT_PPT",false);
            this.UbiReport00.setVisibleToolbar("EXPORT_DOC",false);
            this.UbiReport00.setVisibleToolbar("EXPORT_HWP",false);
            this.UbiReport00.setVisibleToolbar("EXPORT_HWPML",false);
        	
        	this.UbiReport00.retrieve(this, "");
        		
        	return;
        }
         
         
        /**
        	@function	btn_close_onclick()
        	@desc   	
        */
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.UbiReport_onload, this);

        };

        this.loadIncludeScript("ComUbiReportUnSign.xfdl", true);

       
    };
}
)();
