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
                this.set_name("CompCalFromTo");
                this.set_titletext("From~To 기간 Calendar");
                this._setFormPosition(0,0,198,21);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Calendar("cldFrom", "absolute", "0", "0", null, "24", "54.55%", null, this);
            this.addChild(obj.name, obj);
            obj.set_autoselect("true");
            obj.set_autoskip("true");
            obj.set_dateformat("yyyy.MM.dd");
            obj.set_editformat("yyyy.MM.dd");
            obj.set_locale("en_US");
            obj.getSetter("objNm").set("기간 From");
            obj.style.set_buttonsize("0");
            obj.style.set_popuptype("none");
            obj.set_taborder("1");
            obj.set_value("null");

            obj = new Calendar("cldTo", "absolute", "51.01%", "0", null, "24", "0%", null, this);
            this.addChild(obj.name, obj);
            obj.set_autoselect("true");
            obj.set_autoskip("true");
            obj.set_dateformat("yyyy.MM.dd");
            obj.set_editformat("yyyy.MM.dd");
            obj.set_locale("en_US");
            obj.getSetter("objNm").set("기간 To");
            obj.style.set_popuptype("none");
            obj.set_taborder("2");
            obj.set_value("null");

            obj = new Static("staSwungDash", "absolute", "44.44%", "0", null, "20", "47.98%", null, this);
            obj.style.set_align("center middle");
            obj.set_taborder("3");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdvCal", "absolute", "35", "55", "488", "302", null, null, this);
            obj.getSetter("objNm").set("달력 팝업Div");
            obj.set_visible("false");
            obj.style.set_background("transparent");
            this.addChild(obj.name, obj);
            obj = new Button("btnApply", "absolute", "42.01%", "267", null, "25", "40.98%", null, this.pdvCal);
            obj.getSetter("class").set("btn_rBox");
            obj.getSetter("objNm").set("적용");
            obj.set_taborder("32");
            obj.set_text("적용");
            obj.style.set_border("1 solid gray");
            this.pdvCal.addChild(obj.name, obj);
            obj = new Button("btnClose", "absolute", "59.84%", "267", null, "25", "23.36%", null, this.pdvCal);
            obj.getSetter("class").set("btn_rBox");
            obj.getSetter("objNm").set("닫기");
            obj.set_taborder("33");
            obj.set_text("닫기");
            obj.style.set_border("1 solid gray");
            this.pdvCal.addChild(obj.name, obj);
            obj = new Calendar("cldTo", "absolute", "50.61%", "15", null, "248", "3.07%", null, this.pdvCal);
            this.pdvCal.addChild(obj.name, obj);
            obj.set_dateformat("yyyy.MM.dd");
            obj.set_editformat("yyyy.MM.dd");
            obj.set_locale("en_US");
            obj.getSetter("objNm").set("달력 To");
            obj.style.set_popupsize("165 200");
            obj.set_taborder("34");
            obj.set_type("monthonly");
            obj.set_value("null");
            obj = new Calendar("cldFrom", "absolute", "3.89%", "15", null, "248", "49.8%", null, this.pdvCal);
            this.pdvCal.addChild(obj.name, obj);
            obj.set_dateformat("yyyy.MM.dd");
            obj.set_editformat("yyyy.MM.dd");
            obj.set_locale("en_US");
            obj.getSetter("objNm").set("달력 From");
            obj.style.set_popupsize("165 200");
            obj.set_taborder("35");
            obj.set_type("monthonly");
            obj.set_value("null");
            obj = new Button("btnYearAgo", "absolute", "18.24%", "267", null, "25", "58.81%", null, this.pdvCal);
            obj.getSetter("class").set("btn_rBox");
            obj.getSetter("objNm").set("과거1년");
            obj.set_taborder("37");
            obj.set_text("과거1년");
            obj.style.set_border("1 solid gray");
            this.pdvCal.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 488, 302, this.pdvCal,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("달력 팝업Div");
            		p.set_visible("false");
            		p.style.set_background("transparent");

            	}
            );
            this.pdvCal.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 198, 21, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("CompCalFromTo");
            		p.set_titletext("From~To 기간 Calendar");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("CompCalFromTo.xfdl", function(exports) {
        /**
         * @파일명       	: CompCalFromTo.xfdl
         * @생성자       	: 한민희
         * @생성일자     	: 2017. 9. 12.
         * @설명			: From~To 기간 Calendar
         * @최종수정자		: 한민희
         * @최종수정일자	: 2017. 9. 12.
        */  

        /**
          * @함수명	: fnSetDate
          * @input    	: objDs:Dataset(데이터셋 오브젝트), sFromDtCol(from 날짜), sToDtCol(to 날짜)
          * @desc     	: 데이터셋 입력된 날짜를 바인딩
          */
        this.fnSetDate = function(objDs,sFromDtCol,sToDtCol)
        {
        	this.removeChild("Bind01");
        	this.removeChild("Bind02");
        	
        	var objBindItem = new BindItem("Bind01", "cldFrom", "value", objDs.name, sFromDtCol);
        	this.addChild("Bind01", objBindItem);
        	objBindItem.bind();
        	
        	objBindItem = new BindItem("Bind02", "cldTo", "value", objDs.name, sToDtCol);
        	this.addChild("Bind02", objBindItem);
        	objBindItem.bind();
        }

        /**
          * @함수명	: calToOnlbuttonup
          * @input    	: obj:Calendar(달력 오브젝트), e:MouseEventInfo(이벤트변수)
          * @desc     	: 캘린더 Onlbuttonup 이벤트
          */
        this.calToOnlbuttonup = function(obj,e)
        {
        	if(e.fromreferenceobject.name == "dropbutton"){		
        		if(this.pdvCal.isPopup()){
        			this.pdvCal.closePopup("");
        		}
        		
        		var fromVal = gfnIsNull(this.cldFrom.value) ? gfnFirstDay() : this.cldFrom.value;	
        		this.pdvCal.cldFrom.set_value(fromVal);
        		
        		var toVal = gfnIsNull(obj.value) ? gfnToday() : obj.value;	
        		this.pdvCal.cldTo.set_value(toVal);
        		
        		this.pdvCal.trackPopupByComponent(this.cldFrom, -17, 10);		
        	}
        }

        /**
          * @함수명	: fnCompare
          * @desc     	: 캘린터 validation
          */
        this.fnCompare = function() 
        {
        	if(gfnIsNull(this.cldFrom.value) && gfnIsNull(this.cldTo.value)){		
        		return false;
        	}else{
        		if(this.cldFrom.value > this.cldTo.value){
        			gfnAlert(gfnMultiLabel("EPRO_LABEL_00985"));
        			this.cldTo.set_value("");
        			this.cldTo.setFocus();
        			return false;
        		}	
        	}
        		
        	return true;
        }

        /**
          * @함수명	: fnPdvCalBtnYearAgoOnclick
          * @input    	: obj:Button(버튼 오브젝트), e:nexacro.ClickEventInfo(이벤트변수)
          * @desc     	: 과거1년
          */
        this.fnPdvCalBtnYearAgoOnclick = function(obj,e)
        {
        	this.cldFrom.set_value(gfnAddMonth(gfnToday(), -12));
        	this.cldTo.set_value(this.pdvCal.cldTo.value);

        	var rtn = this.fnCompare();	
        	if(rtn) this.pdvCal.closePopup();
        }

        /**
          * @함수명	: fnPdvCalBtnApplyOnclick
          * @input    	: obj:Button(버튼 오브젝트), e:ClickEventInfo(이벤트변수)
          * @desc     	: 적용
          */
        this.fnPdvCalBtnApplyOnclick = function(obj,e)
        {	
        	this.cldFrom.set_value(this.pdvCal.cldFrom.value);
        	this.cldTo.set_value(this.pdvCal.cldTo.value);

        	var rtn = this.fnCompare();	
        	if(rtn) this.pdvCal.closePopup();
        }

        /**
          * @함수명	: fnPdvCalBtnCloseOnclick
          * @input    	: obj:Button(버튼 오브젝트), e:ClickEventInfo(이벤트변수)
          * @desc     	: 닫기
          */
        this.fnPdvCalBtnCloseOnclick = function(obj,e)
        {
        	this.pdvCal.closePopup();
        }
        this.cldTo_onchanged = function(obj,e)
        {
        	var fromV = this.cldFrom.value;
        	var toV = this.cldTo.value;
        	
        	if(!gfnIsNull(fromV) && !gfnIsNull(toV)){
        		this.fnCompare();
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkillfocus", this.fnOnKillFocus, this);
            this.addEventHandler("ontimer", this.comCalendar_ontimer, this);
            this.cldFrom.addEventHandler("onchanged", this.cldTo_onchanged, this);
            this.cldTo.addEventHandler("onchanged", this.cldTo_onchanged, this);
            this.cldTo.addEventHandler("oneditclick", this.cldTo_oneditclick, this);
            this.cldTo.addEventHandler("onlbuttonup", this.calToOnlbuttonup, this);
            this.pdvCal.btnApply.addEventHandler("onclick", this.fnPdvCalBtnApplyOnclick, this);
            this.pdvCal.btnClose.addEventHandler("onclick", this.fnPdvCalBtnCloseOnclick, this);
            this.pdvCal.btnYearAgo.addEventHandler("onclick", this.fnPdvCalBtnYearAgoOnclick, this);

        };

        this.loadIncludeScript("CompCalFromTo.xfdl", true);

       
    };
}
)();
