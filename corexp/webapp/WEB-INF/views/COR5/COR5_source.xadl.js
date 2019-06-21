(function()
{
    return function()
    {
        // Theme, Component URI Setting
        this._theme_uri = "./_theme_/";
        this._globalvar_uri = "globalvars.xml";
        this.loadTypedefition = function()
        {
            // this._addService(prefixid, type, url, cachelevel, codepage, language, version, communication);
            this._addService("default_typedef.xml", "svcurl", "JSP", "http://localhost:8080/controller/n/", "none", null, "", "0", "0");
            this._addService("default_typedef.xml", "img", "file", "./img/", "session", null, "", "0", "0");
            this._addService("default_typedef.xml", "lib", "file", "./nexacro14lib/component/CommonLib/", "session", null, "", "0", "0");
            this._addService("default_typedef.xml", "frame", "form", "./frame/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "CADMIN", "form", "./form/EPRO/COM/Admin", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "CCOMP", "form", "./form/EPRO/COM/Comp/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "CPOP", "form", "./form/EPRO/COM/Pop/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "BSYS", "form", "./form/EPRO/SYS/Buyer/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "BMST", "form", "./form/EPRO/MST/Buyer/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "BMTRL", "form", "./form/EPRO/MTRL/Buyer/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "BCMM", "form", "./form/EPRO/CMM/Buyer/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "SCMM", "form", "./form/EPRO/CMM/Supplier/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "BPTNR", "form", "./form/EPRO/PTNR/Buyer/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "SPTNR", "form", "./form/EPRO/PTNR/Supplier/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "BPUR", "form", "./form/EPRO/PUR/Buyer/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "BRFQ", "form", "./form/EPRO/RFQ/Buyer/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "SRFQ", "form", "./form/EPRO/RFQ/Supplier/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "BTNDR", "form", "./form/EPRO/TNDR/Buyer/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "STNDR", "form", "./form/EPRO/TNDR/Supplier/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "BCNTR", "form", "./form/EPRO/CNTR/Buyer/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "SCNTR", "form", "./form/EPRO/CNTR/Supplier/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "BPOR", "form", "./form/EPRO/POR/Buyer/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "SPOR", "form", "./form/EPRO/POR/Supplier/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "BDLV", "form", "./form/EPRO/DLV/Buyer/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "SDLV", "form", "./form/EPRO/DLV/Supplier/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "BINV", "form", "./form/EPRO/INV/Buyer/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "SINV", "form", "./form/EPRO/INV/Supplier/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "BEVL", "form", "./form/EPRO/EVL/Buyer/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "BREL", "form", "./form/EPRO/REL/Buyer/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "BAPRV", "form", "./form/EPRO/APRV/Buyer/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "BRPT", "form", "./form/EPRO/RPT/Buyer/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "url", "JSP", "http://localhost:8080/", "", null, "", "", "0");
            this._addService("default_typedef.xml", "SAMPLE", "form", "./form/EPRO/SAMPLE/", "", null, "", "", "0");

            this._component_uri = (this._arg_compurl ? this._arg_compurl : "./nexacro14lib/component/");
            // load components
            var registerclass = [
            		{"id":"Div", "classname":"nexacro.Div", "type":"JavaScript"},
            		{"id":"Button", "classname":"nexacro.Button", "type":"JavaScript"},
            		{"id":"PopupDiv", "classname":"nexacro.PopupDiv", "type":"JavaScript"},
            		{"id":"Combo", "classname":"nexacro.Combo", "type":"JavaScript"},
            		{"id":"CheckBox", "classname":"nexacro.CheckBox", "type":"JavaScript"},
            		{"id":"ListBox", "classname":"nexacro.ListBox", "type":"JavaScript"},
            		{"id":"Edit", "classname":"nexacro.Edit", "type":"JavaScript"},
            		{"id":"MaskEdit", "classname":"nexacro.MaskEdit", "type":"JavaScript"},
            		{"id":"TextArea", "classname":"nexacro.TextArea", "type":"JavaScript"},
            		{"id":"Menu", "classname":"nexacro.Menu", "type":"JavaScript"},
            		{"id":"Tab", "classname":"nexacro.Tab", "type":"JavaScript"},
            		{"id":"ImageViewer", "classname":"nexacro.ImageViewer", "type":"JavaScript"},
            		{"id":"Radio", "classname":"nexacro.Radio", "type":"JavaScript"},
            		{"id":"Calendar", "classname":"nexacro.Calendar", "type":"JavaScript"},
            		{"id":"Static", "classname":"nexacro.Static", "type":"JavaScript"},
            		{"id":"Grid", "classname":"nexacro.Grid", "type":"JavaScript"},
            		{"id":"Spin", "classname":"nexacro.Spin", "type":"JavaScript"},
            		{"id":"PopupMenu", "classname":"nexacro.PopupMenu", "type":"JavaScript"},
            		{"id":"GroupBox", "classname":"nexacro.GroupBox", "type":"JavaScript"},
            		{"id":"ProgressBar", "classname":"nexacro.ProgressBar", "type":"JavaScript"},
            		{"id":"Plugin", "classname":"nexacro.Plugin", "type":"JavaScript"},
            		{"id":"Dataset", "classname":"nexacro.NormalDataset", "type":"JavaScript"},
            		{"id":"WebBrowser", "classname":"nexacro.WebBrowser", "type":"JavaScript"},
            		{"id":"FileUpload", "classname":"nexacro.FileUpload", "type":"JavaScript"},
            		{"id":"UbiReport4", "classname":"nexacro.UbiViewer", "type":"JavaScript"}
            ];
            this._addClasses(registerclass);
        };
        
        this.on_loadGlobalVariables = function()
        {
            // global variable
            this._addVariable("gvDomain", null, false);
            this._addVariable("gv_UserId", null, false);
            this._addVariable("gv_portalPage", null, false);
            this._addVariable("gv_No", null, false);
            this._addVariable("gv_Odr", null, false);
            this._addVariable("gv_BranchCd", null, false);
            this._addVariable("gv_Type", null, false);
            this._addVariable("gv_Ad", null, false);
            this._addVariable("gv_FName", null, false);

            // global image

            // global dataset
            var obj = null;
            obj = new Dataset("gdsUserInfo", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gdsMenu", this);
            obj._setContents("");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gdsMyMenu", this);
            obj._setContents("");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gdsCommCd", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"VERSION\" type=\"STRING\" size=\"30\" value=\"2019030601\"/><Column id=\"CD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LABEL_STR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gdsUserRole", this);
            obj._setContents("");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gdsOpenMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"CHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"OPEN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LINK_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gdsGrdPopMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"menuLvl\" type=\"STRING\" size=\"256\" sumtext=\"그리드 우클릭 메뉴\"/><Column id=\"menuId\" type=\"STRING\" size=\"256\"/><Column id=\"menuNm\" type=\"STRING\" size=\"256\"/><Column id=\"enable\" type=\"STRING\" size=\"256\"/><Column id=\"hotkey\" type=\"STRING\" size=\"256\"/><Column id=\"visible\" type=\"STRING\" size=\"256\"/><Column id=\"menuGrp\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"menuLvl\">0</Col><Col id=\"menuId\">filter</Col><Col id=\"menuNm\">필터</Col><Col id=\"enable\">1</Col><Col id=\"hotkey\"/><Col id=\"visible\">true</Col><Col id=\"menuGrp\">filter</Col></Row><Row><Col id=\"menuLvl\">0</Col><Col id=\"menuId\">filtercancel</Col><Col id=\"menuNm\">필터 취소</Col><Col id=\"enable\">1</Col><Col id=\"hotkey\"/><Col id=\"visible\">true</Col><Col id=\"menuGrp\">filter</Col></Row><Row><Col id=\"menuLvl\">0</Col><Col id=\"menuId\"/><Col id=\"menuNm\">-</Col><Col id=\"enable\">0</Col><Col id=\"hotkey\"/><Col id=\"visible\">true</Col><Col id=\"menuGrp\">filter</Col></Row><Row><Col id=\"menuLvl\">0</Col><Col id=\"menuId\">fix</Col><Col id=\"menuNm\">틀고정</Col><Col id=\"enable\">1</Col><Col id=\"hotkey\"/><Col id=\"visible\">true</Col><Col id=\"menuGrp\">fix</Col></Row><Row><Col id=\"menuLvl\">0</Col><Col id=\"menuId\">fixcancel</Col><Col id=\"menuNm\">틀고정 취소</Col><Col id=\"enable\">1</Col><Col id=\"hotkey\"/><Col id=\"visible\">true</Col><Col id=\"menuGrp\">fix</Col></Row><Row><Col id=\"menuLvl\">0</Col><Col id=\"menuId\"/><Col id=\"menuNm\">-</Col><Col id=\"enable\">0</Col><Col id=\"hotkey\"/><Col id=\"visible\">true</Col><Col id=\"menuGrp\">fix</Col></Row><Row><Col id=\"menuLvl\">0</Col><Col id=\"menuId\">find</Col><Col id=\"menuNm\">검색</Col><Col id=\"enable\">1</Col><Col id=\"hotkey\"/><Col id=\"visible\">true</Col><Col id=\"menuGrp\">find</Col></Row><Row><Col id=\"menuLvl\">0</Col><Col id=\"menuId\"/><Col id=\"menuNm\">-</Col><Col id=\"enable\">0</Col><Col id=\"hotkey\"/><Col id=\"visible\">true</Col><Col id=\"menuGrp\">find</Col></Row><Row><Col id=\"menuLvl\">0</Col><Col id=\"menuId\">hide</Col><Col id=\"menuNm\">숨기기</Col><Col id=\"hotkey\"/><Col id=\"enable\">1</Col><Col id=\"visible\">true</Col><Col id=\"menuGrp\">hide</Col></Row><Row><Col id=\"menuLvl\">0</Col><Col id=\"menuId\">show</Col><Col id=\"menuNm\">숨기기 취소</Col><Col id=\"enable\">1</Col><Col id=\"hotkey\"/><Col id=\"visible\">true</Col><Col id=\"menuGrp\">hide</Col></Row><Row><Col id=\"menuLvl\">0</Col><Col id=\"menuId\"/><Col id=\"menuNm\">-</Col><Col id=\"enable\">0</Col><Col id=\"hotkey\"/><Col id=\"visible\">true</Col><Col id=\"menuGrp\">hide</Col></Row><Row><Col id=\"menuLvl\">0</Col><Col id=\"menuId\">allcancel</Col><Col id=\"menuNm\">전체 초기화</Col><Col id=\"enable\">1</Col><Col id=\"hotkey\"/><Col id=\"visible\">true</Col><Col id=\"menuGrp\">init</Col></Row><Row><Col id=\"menuLvl\">0</Col><Col id=\"menuId\"/><Col id=\"menuNm\">-</Col><Col id=\"enable\">0</Col><Col id=\"hotkey\"/><Col id=\"visible\">true</Col><Col id=\"menuGrp\">init</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gdsTmprData", this);
            obj._setContents("<ColumnInfo><Column id=\"key\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gdsValidScreen", this);
            obj._setContents("<ColumnInfo><Column id=\"OPEN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MSG\" type=\"STRING\" size=\"256\"/><Column id=\"VALID_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"IS_ESSENTIAL\" type=\"STRING\" size=\"256\"/><Column id=\"ERR_LVL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gdsMessage", this);
            obj._setContents("");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gdsLabel", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"VERSION\" type=\"STRING\" size=\"30\" value=\"2019030601\"/><Column id=\"EPRO_LABEL_00001\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            obj = null;


            

        };
        
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("COR5_source");
            this.set_version("");
            this.set_tracemode("none");
            this.set_themeid("theme01.xtheme");
            this.set_usecontextmenu("none");
            this.set_loadingimage("img::waitimage01.gif");

            if (this._is_attach_childframe)
            	return;

            // frame
            var mainframe = this.createMainFrame("Mainframe", "absolute", "0", "0", "1280", "1024", null, null, this);
            mainframe.set_resizable("true");
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("false");
            mainframe.set_showtitleicon("true");
            mainframe.set_showcascadestatustext("false");
            mainframe.set_showcascadetitletext("false");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;

            // tray
            var tray = null;

        };
        

        
        this.mainframe_createBodyFrame = function()
        {
            var frame0 = new VFrameSet("VFrameSet", "absolute", null, null, null, null, null, null, this);
            this.addChild(frame0.name, frame0);
            this.frame = frame0;
            frame0.set_separatesize("0,0,0,*");
            frame0.set_showtitleicon("false");

            
            var frame1 = new ChildFrame("TopFrame", "absolute", null, null, null, null, null, null, "", frame0);
            frame0.addChild(frame1.name, frame1);
            frame1.set_showtitleicon("false");
            frame1.set_showtitlebar("false");
            frame1.set_dragmovetype("none");
            var frame2 = new HFrameSet("HFrameSet", "absolute", null, null, null, null, null, null, frame0);
            frame0.addChild(frame2.name, frame2);
            frame2.set_showtitleicon("false");
            frame2.set_showtitlebar("false");

            
            var frame3 = new ChildFrame("LeftFrame", "absolute", null, null, null, null, null, null, "", frame2);
            frame2.addChild(frame3.name, frame3);
            frame3.set_dragmovetype("none");
            frame3.set_showtitlebar("false");
            frame3.set_showtitleicon("false");
            var frame4 = new VFrameSet("VFrameSet0", "absolute", null, null, null, null, null, null, frame2);
            frame2.addChild(frame4.name, frame4);
            frame4.set_showtitlebar("false");
            frame4.set_showtitleicon("false");

            
            var frame5 = new ChildFrame("TabFrame", "absolute", null, null, null, null, null, null, "", frame4);
            frame4.addChild(frame5.name, frame5);
            frame5.set_dragmovetype("none");
            frame5.set_showtitlebar("false");
            frame5.set_showtitleicon("false");
            var frame6 = new FrameSet("WorkFrameSet", "absolute", null, null, null, null, null, null, frame4);
            frame4.addChild(frame6.name, frame6);
            frame6.set_showtitleicon("false");
            frame6.set_showstatusbar("false");
            frame6.set_showtitlebar("false");

            
            var frame7 = new ChildFrame("MainForm", "absolute", null, null, null, null, null, null, "", frame4);
            frame4.addChild(frame7.name, frame7);
            frame7.set_showtitlebar("false");
            frame7.set_showtitleicon("false");
            frame7.set_dragmovetype("none");

            var frame8 = new ChildFrame("BottomFrame", "absolute", null, null, null, null, null, null, "", frame0);
            frame0.addChild(frame8.name, frame8);
            frame8.set_showtitleicon("false");
            frame8.set_showtitlebar("false");
            frame8.set_dragmovetype("none");

            var frame9 = new ChildFrame("loginFrame", "absolute", null, null, null, null, null, null, "", frame0);
            frame0.addChild(frame9.name, frame9);
            frame9.set_showstatusbar("false");
            frame9.set_showtitlebar("false");
            frame9.set_showtitleicon("false");
            frame9.set_dragmovetype("none");

        };
        
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.application_onload, this);
            this.addEventHandler("onerror", this.application_onerror, this);

        };
        
        // screeninfo
        this.loadScreenInfo = function()
        {

        }
        
        // script Compiler
        this.registerScript("COR5_source.xadl", function(exports) {
        this.gv_multyLangage = false;	//다국어적용여부

        //런타임 실행시 프로그램 이름(런타임시 alert, confirm 의 타이틀도 적용됨)
        this.GV_TITLE_TEXT = "CoreXp OPEN PURCHASING E-System";			

        this.fv_fixMenu = false;		//메뉴 고정 여부
        this.gv_mainFormUrl = "";		//메인화면 폼 url
        this.gv_secretKey;				//CryptoJS 시크릿키

        this.gv_mainframe  		= "";
        this.gv_vFrameSet  		= "";
        this.gv_topFrame   		= "";
        this.gv_hFrameSet  		= "";
        this.gv_bottomFrame   	= "";
        this.gv_loginFrame   	= "";
        this.gv_leftFrame  		= "";
        this.gv_vFrameSet0		= "";
        this.gv_tabFrame  		= "";
        this.gv_workFrameSet  	= "";
        this.gv_mainForm  		= "";

        /**
          * @함수명	: application_onload
          * @desc     	: application onload 이벤트.
          */
        this.application_onload = function(obj,e)
        {
        	var DomainPath = application.xadl;
        	
        	this.gv_certClassid     = "{A099920B-630C-426B-91EC-737685CEEE17}";
        	this.gv_certCodebase	= application.services["url"].url + "CrossCert/AxCrossCert.cab#Version=2,6,9,0";
        	
        	this.gv_ubiClassid      = "{9BE79626-84B2-489D-BBFC-8492339AF9C2}";
        	this.gv_ubiCodebase	    = application.services["url"].url + "ubi4/UbiViewerX4.cab#version=4,0,1807,501";
        	
        	//서비스 경로 세팅
        	if(system.navigatorname == "nexacro"){
        		var strSvcUrl = application.services["svcurl"].url;
        		application.gvDomain = strSvcUrl.substr(0, strSvcUrl.indexOf("/controller"));	
        	}else{		
        		if(DomainPath.indexOf('http:') >= 0 || DomainPath.indexOf('https:') >= 0){
        			var strSvcUrl = DomainPath.substr(0, DomainPath.indexOf("/COR5")) + "/controller/n/";
        			application.services["svcurl"].url = strSvcUrl;
        			application.gvDomain = DomainPath.substr(0, DomainPath.indexOf("/COR5"));
        		}
        	}
        	if(DomainPath.indexOf('QuickView:') < 0){
        		this.gv_multyLangage = false;	//다국어적용여부

        		//런타임 실행시 프로그램 이름(런타임시 alert, confirm 의 타이틀도 적용됨)
        		this.GV_TITLE_TEXT = "CoreXp OPEN PURCHASING E-System";	

        		this.fv_fixMenu = false;		//메뉴 고정 여부
        		this.gv_mainFormUrl = "";		//메인화면 폼 url
        		this.gv_secretKey;				//CryptoJS 시크릿키

        		this.gv_mainframe  		= application.Mainframe;                   										//Mainframe
        		this.gv_vFrameSet  		= application.Mainframe.VFrameSet;                   							//VFrameSet
        		this.gv_topFrame   		= application.Mainframe.VFrameSet.TopFrame;          							//TopFrame
        		this.gv_hFrameSet  		= application.Mainframe.VFrameSet.HFrameSet;                   					//HFrameSet
        		this.gv_bottomFrame   	= application.Mainframe.VFrameSet.BottomFrame;          						//BottomFrame
        		this.gv_loginFrame   	= application.Mainframe.VFrameSet.loginFrame;          							//LoginFrame
        		this.gv_leftFrame  		= application.Mainframe.VFrameSet.HFrameSet.LeftFrame;         					//LeftFrame		
        		this.gv_vFrameSet0		= application.Mainframe.VFrameSet.HFrameSet.VFrameSet0;             			//VFrameSet0
        		this.gv_tabFrame  		= application.Mainframe.VFrameSet.HFrameSet.VFrameSet0.TabFrame;				//TabFrame
        		this.gv_workFrameSet  	= application.Mainframe.VFrameSet.HFrameSet.VFrameSet0.WorkFrameSet;   			//WorkFrameSet
        		this.gv_mainForm  		= application.Mainframe.VFrameSet.HFrameSet.VFrameSet0.MainForm;				//MainForm
        		
        		this.gv_mainframe.set_titletext(this.GV_TITLE_TEXT);
        		this.gv_secretKey = "COREXP7890123456";
        		
        		if(application.gv_FName == "LOGIN_JSP"){
        			this.gv_loginFrame.set_formurl("frame::loginFrame_SUP.xfdl");
        		} else{
        			this.gv_loginFrame.set_formurl("frame::loginFrame.xfdl");
        		}
        	}
        }

        nexacro.Component.prototype.on_keydown_default_action = function()
        {
        	if(system.navigatorname != "nexacro"){
        		var e = window.event; 		
        		//Edit는 백스페이스 허용
        		if(this == "[object Edit]" || this == "[object TextArea]" 
        				|| this.id == "controledit" || this.id == "controlmaskedit" || this.id == "controltextarea"){
        			if(e.keyCode == 116) e.preventDefault(); 
        			
        		} else{
        			if(e.keyCode == 116 || e.keyCode == 8) e.preventDefault();
        		}
        	}
        }

        this.application_onerror = function(obj,e)
        {

        }
        
        });


        this.checkLicense("");
        this.loadTypedefition();
        this.loadScreenInfo();
        this.loadTheme("theme01.xtheme");


        this.loadIncludeScript("COR5_source.xadl", true);
    };
}
)();
