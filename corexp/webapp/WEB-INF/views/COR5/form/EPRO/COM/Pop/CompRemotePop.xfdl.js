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
                this.set_cssclass("div_remote_bg");
                this.set_name("CompRemotePop");
                this.set_titletext("팝업리모콘");
                this.set_visible("false");
                this._setFormPosition(0,0,148,46);
            }
            this.style.set_background("@gradation");
            this.style.set_border("2 solid #808080ff");
            this.style.set_gradation("linear 0,0 darkgray 100,100 black");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divTitle", "absolute", "10", "0", "62", "24", null, null, this);
            obj.style.set_align("left middle");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            obj.set_taborder("8");
            obj.set_text("리모컨");
            this.addChild(obj.name, obj);

            obj = new Div("divRemoteBtnBack", "absolute", "0", "25", null, null, "0", "0", this);
            obj.style.set_background("white");
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Div("divCntrBtnBack", "absolute", null, "0", "74", "24", "0", null, this);
            obj.set_taborder("16");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);
            obj = new Div("divTopMove", "absolute", null, "2", "21", "21", "53", null, this.divCntrBtnBack);
            obj.style.set_background("URL('theme://img/btn_WF_ListUp_N.png')");
            obj.style.set_cursor("hand");
            obj.set_taborder("0");
            obj.set_tooltiptext("맨위로");
            this.divCntrBtnBack.addChild(obj.name, obj);
            obj = new Div("divBottomMove", "absolute", null, "2", "21", "21", "28", null, this.divCntrBtnBack);
            obj.style.set_background("URL('theme://img/btn_WF_ListDown_N.png')");
            obj.style.set_cursor("hand");
            obj.set_taborder("1");
            obj.set_tooltiptext("아래로");
            this.divCntrBtnBack.addChild(obj.name, obj);
            obj = new Div("divFold", "absolute", null, "2", "21", "21", "3", null, this.divCntrBtnBack);
            obj.style.set_background("URL('theme://img/btn_WF_minimi_N.png')");
            obj.set_taborder("2");
            obj.set_tooltiptext("이전 크기로 복원");
            this.divCntrBtnBack.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 21, 21, this.divCntrBtnBack.divBottomMove,
            	//-- Layout function
            	function(p) {
            		p.style.set_background("URL('theme://img/btn_WF_ListDown_N.png')");
            		p.style.set_cursor("hand");
            		p.set_taborder("1");
            		p.set_tooltiptext("아래로");

            	}
            );
            this.divCntrBtnBack.divBottomMove.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 21, 21, this.divCntrBtnBack.divFold,
            	//-- Layout function
            	function(p) {
            		p.style.set_background("URL('theme://img/btn_WF_minimi_N.png')");
            		p.set_taborder("2");
            		p.set_tooltiptext("이전 크기로 복원");

            	}
            );
            this.divCntrBtnBack.divFold.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 74, 24, this.divCntrBtnBack,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("16");
            		p.set_text("Div01");

            	}
            );
            this.divCntrBtnBack.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 148, 46, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("CompCalFromTo");
            		p.set_cssclass("div_remote_bg");
            		p.style.set_background("@gradation");
            		p.style.set_border("2 solid #808080ff");
            		p.style.set_gradation("linear 0,0 darkgray 100,100 black");
            		p.set_titletext("팝업리모콘");
            		p.set_visible("false");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item2","divCntrBtnBack.divTopMove","tooltiptext","gdsLabel","EPRO_LABEL_00790");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("CompRemotePop.xfdl", function(exports) {
        /**
         * @파일명       	: CompRemote.xfdl
         * @생성자       	: 한민희
         * @생성일자     	: 2017. 8. 17.
         * @설명			: 버튼 리모콘
         * @최종수정자		: 안성민
         * @최종수정일자	: 2017. 12. 05.
        */  

        this.fvMaxColCnt = 1;	// 가로로 만들 버튼 최대 갯수.(최대갯수를 넘어가면 다음 줄로 넘어감)
        this.fvWidth;	// 리모콘 div 넓이
        this.fvHeight;	// 리모콘 div 높이
        this.fvRight;	// 리모콘 div right
        this.fvLeft;	// 리모콘 div left

        /**
          * @함수명	: fnFormOnload
          * @input    	: obj:Form(폼 오브젝트), e:nexacro.LoadEventInfo(이벤트변수)
          * @desc     	: 폼 onload이벤트
          */
        this.fnFormOnload = function(obj,e)
        {
        	this.parent.fnBtnPram();	
        }

        /**
          * @함수명	: fnSetBtn
          * @input    	: arrparam:Object(버튼명과 클릭이벤트 함수가 들어있는 오브젝트)
          * @desc     	: 버튼을 생성한다.
          */
        this.fnSetBtn = function(arrparam)
        {	
        	this.set_visible(false);
        	
        	// 버튼 this.fvMaxColCnt * n 형태일때	
        	var initTop = 30;
        	var btnTop = initTop;
        	var initLeft = 10;
        	var btnLeft = initLeft;
        	
        	for(var i=0; i<arrparam.length; i++){	
        		//버튼 top 위치
        		if(i%this.fvMaxColCnt==0){
        			btnTop = initTop * (i/this.fvMaxColCnt + 1);
        			btnLeft = initLeft;
        		}else{
        			var prevBtn = this.lookup("btnRemote_" + (i-1));
        			btnLeft = btnLeft + prevBtn.getOffsetWidth() + 5;
        		}
        		// Create Object
        		var objButton = new Button("btnRemote_" + i, "absolute", btnLeft , btnTop, this.btnWidth, 24, 10, null);

        		objButton.set_text(arrparam[i].btnName);
        		if("CSampleDetail" == this.parent.name) {
        			var eventFunc = this.parent.lookup(arrparam[i].clickEventFunc);
        			objButton.addEventHandler("onclick", eventFunc, this.parent);
        		} else {
        			var eventFunc = this.parent.divPopBody.lookup(arrparam[i].clickEventFunc);
        			objButton.addEventHandler("onclick", eventFunc, this.parent.divPopBody);
        		}
        		if(!eventFunc) {
        			trace(arrparam[i].clickEventFunc + " => function 없음");
        		}
        		

        		// Add Object to Parent Form  
        		this.addChild("btnRemote_" + i, objButton); 
        		
        		// Show Object  
        		objButton.show();
        	}	
        	gfnRemoteBtnRange(this);
        		
        	this.fvWidth = this.getOffsetWidth();
        	this.fvHeight = this.getOffsetHeight();
        	this.fvRight = this.getOffsetRight();
        	this.fvLeft = this.getOffsetLeft();	
        }

        /**
          * @함수명	: fnDivFoldOnclick
          * @input    	: obj:Div(Div 오브젝트),  e:nexacro.ClickEventInfo(이벤트함수)
          * @desc     	: 폼을 접고, 펼치는 기능
          */
        this.fnDivFoldOnclick = function(obj,e)
        {
        	//접기
        	if(this.getOffsetWidth() > obj.getOffsetWidth() + 9){
         		
         		this.divTitle.set_visible(false);
        		this.setOffsetLeft(this.getOffsetLeft() + this.getOffsetWidth() - obj.getOffsetWidth() -9);		
         		this.setOffsetWidth(obj.getOffsetWidth() + 9);
         		this.setOffsetHeight(obj.getOffsetHeight() + 7);
         		
         		this.fnDivFoldImgChg("R");
        	}else{ //펼치기
        		
        		this.divTitle.set_visible(true);
        		this.setOffsetLeft(this.getOffsetLeft() - this.fvWidth + obj.getOffsetWidth() + 9);
        		this.setOffsetWidth(this.fvWidth);
        		this.setOffsetHeight(this.fvHeight);
        		
        		this.fnDivFoldImgChg("M");
        	}	
        }

        /**
          * @함수명	: fnDivFoldImgChg
          * @desc     	: 화면 스크롤 아래로 이동.
          */
        this.fnDivFoldImgChg = function(gubun)
        {
        	if(gubun == "R"){
        		this.divCntrBtnBack.divFold.set_style("background:URL('theme://img/btn_WF_remote_N.png')");
        	}else if(gubun == "M"){
        		this.divCntrBtnBack.divFold.set_style("background:URL('theme://img/btn_WF_minimi_N.png')");
        	}
        }

        /**
          * @함수명	: fnDivBottomMoveOnclick
          * @input    	: obj:Div(Div 오브젝트),  e:nexacro.ClickEventInfo(이벤트함수)
          * @desc     	: 화면 스크롤 아래로 이동.
          */
        this.fnDivBottomMoveOnclick = function(obj,e)
        {
        	var framesInfo
        	if("CSampleDetail" == this.parent.name) {
        		framesInfo = this.parent;
        	} else {
        		framesInfo = this.parent.divPopBody;
        		
        	}
        	
        	if(framesInfo){
        		var yy = framesInfo.vscrollbar.incbutton.getOffsetBottom();
        		framesInfo.vscrollbar.set_pos(yy);
        	}
        }

        /**
          * @함수명	: fnDivTopMoveOnclick
          * @input    	: obj:Div(Div 오브젝트),  e:nexacro.ClickEventInfo(이벤트함수)
          * @desc     	: 화면 스크롤 위로 이동.
          */
        this.fnDivTopMoveOnclick = function(obj,e)
        {	
        	var framesInfo
        	if("CSampleDetail" == this.parent.name) {
        		framesInfo = this.parent;
        	} else {
        		framesInfo = this.parent.divPopBody;
        	}

        	if(framesInfo){
        		var yy = framesInfo.vscrollbar.decbutton.getOffsetTop();
        		framesInfo.vscrollbar.set_pos(yy);
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.divCntrBtnBack.divTopMove.addEventHandler("onclick", this.fnDivTopMoveOnclick, this);
            this.divCntrBtnBack.divBottomMove.addEventHandler("onclick", this.fnDivBottomMoveOnclick, this);
            this.divCntrBtnBack.divFold.addEventHandler("onclick", this.fnDivFoldOnclick, this);

        };

        this.loadIncludeScript("CompRemotePop.xfdl", true);

       
    };
}
)();
