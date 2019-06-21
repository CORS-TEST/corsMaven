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
                this.set_name("topFrame");
                this.set_scrollbars("none");
                this.set_titletext("topFrame");
                this._setFormPosition(0,0,1280,50);
            }
            this.style.set_background("#ffffffff");
            this.style.set_color("#333333ff");
            this.style.set_padding("0 0 0 0");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staUserWelcome", "absolute", null, "18", "231", "22", "90", null, this);
            obj.style.set_color("black");
            obj.style.set_align("right middle");
            obj.set_text("<fs v='9'><b v='true'>홍길동</b></fs>님 환영합니다.");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "5", "9", "131", "45", null, null, this);
            obj.style.set_background("URL('theme://images/main_coreXp.png') stretch");
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Button("btnLogOut", "absolute", null, "18", "62", "20", "23", null, this);
            obj.style.set_background("#1e425aff");
            obj.style.set_border("1 solid white");
            obj.style.set_color("white");
            obj.style.set_bordertype("round 0 1");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Arial");
            obj.set_taborder("22");
            obj.set_text("Log-out");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1280, 50, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("top");
            		p.set_scrollbars("none");
            		p.style.set_background("#ffffffff");
            		p.style.set_color("#333333ff");
            		p.style.set_padding("0 0 0 0");
            		p.set_titletext("topFrame");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("topFrame.xfdl", function(exports) {
        /**
         * @파일명       	: topFrame.xfdl
         * @생성자       	: 한민희
         * @생성일자     	: 2017. 9. 8.
         * @설명			: 탑 프레임
         * @최종수정자		: 한민희
         * @최종수정일자	: 2017. 9. 8
        */   

        /**
          * @함수명	: fnFormOnload
          * @desc     	: 폼 onload 이벤트
          */
        this.fnFormOnload = function (obj,e)
        {
        	
        	this.fnSetUserInfo();	//OOO님 환영합니다.
        }

        /**
          * @함수명	: fnSetUserInfo
          * @desc     	: [ooo님 환영합니다.] 문구 세팅
          */
        this.fnSetUserInfo = function()
        {
        	var sText = "";	
        	var sUserNm = application.gdsUserInfo.getColumn(0,"USER_NM");
         	
          	sText = "<fs v='9'><b v='true'>"+sUserNm+"</b></fs> 님 환영합니다.";

        	this.staUserWelcome.set_text(sText);
        }

        
        /**
          * @함수명	: fnBtnLogOutOnclick
          */
        this.fnBtnLogOutOnclick = function(obj,e)
        {		
        	if(!gfnConfirm("로그아웃 하시겠습니까?")) return;		
        	
        	application.gdsUserInfo.clearData();
        	application.gdsMenu.clear();
        	application.gdsUserRole.clear();
        	application.gdsOpenMenu.clearData();
        	
        	application.gv_topFrame.set_formurl("");
        	application.gv_bottomFrame.set_formurl("");
        	application.gv_leftFrame.set_formurl("");
        	application.gv_tabFrame.set_formurl("");
        	application.gv_mainForm.set_formurl("");
        	application.gv_vFrameSet.set_separatesize("0,0,0,*");
        	
        	var framesInfo = application.gv_workFrameSet.frames;
        	for(var i=framesInfo.length-1; i>=0; i--){		
        		framesInfo[i].destroy();
        	}
        }

        /**
        	@function	fnTrCallBack()
        	@desc   	트랜잭션 콜백
        */
        this.fnTrCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	if(errCd < 0)
        	{
        		alert(errMsg);
        		gfnSetTmprData("CONFIRM_PASS", "Y");
        		application.exit();
        		return;
        	}
        		
        	try{
        	
        		if(system.navigatorname == "nexacro")
        		{		
        			application.mainframe.set_height("650");
        		}
        		
        		application.gv_mdiTabFrame.form.gfn_arrangeWin("closeAll");
        		application.gv_vFrameSet.set_separatesize("0,0,0,*");				
        		
        		// 각 Frame 화면의 초기화
        		if(this.Web_Search)
        		{
        			this.Web_Search.destroy();
        		}
        		
        		application.gv_loginFrame.form.reload();				
        // 		application.gv_leftFrame.form.reload();				
        // 		application.gv_topFrame.form.reload();				
        // 		application.gv_bottomFrame.form.reload();
        // 		application.gv_mdiTabFrame.form.reload();
        	
        	}catch(e){			
        		gfnSetTmprData("CONFIRM_PASS", "Y");
        		application.exit();
        	}
        }

        

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.staUserWelcome.addEventHandler("onclick", this.staUserWelcome_onclick, this);
            this.btnLogOut.addEventHandler("onclick", this.fnBtnLogOutOnclick, this);

        };

        this.loadIncludeScript("topFrame.xfdl", true);

       
    };
}
)();
