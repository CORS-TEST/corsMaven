﻿(function()
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
                this.set_enableevent("true");
                this.set_name("BComObjMgmtPop");
                this.set_titletext("Object 관리");
                this._setFormPosition(0,0,900,786);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsObj", this);
            obj._setContents("<ColumnInfo><Column id=\"CHECKED\" size=\"1\" type=\"STRING\"/><Column id=\"COMP_ADD_DESC\" size=\"20\" type=\"STRING\"/><Column id=\"TEXT\" size=\"20\" type=\"STRING\"/><Column id=\"LEVEL\" size=\"2\" type=\"INT\"/><Column id=\"TYPE\" size=\"10\" type=\"STRING\"/><Column id=\"NAME\" size=\"20\" type=\"STRING\"/><Column id=\"PATH\" size=\"100\" type=\"STRING\"/><Column id=\"ENABLE_A\" size=\"1\" type=\"STRING\"/><Column id=\"ENABLE_B\" size=\"1\" type=\"STRING\"/><Column id=\"ENABLE_C\" size=\"1\" type=\"STRING\"/><Column id=\"ENABLE_D\" size=\"1\" type=\"STRING\"/><Column id=\"ENABLE_E\" size=\"1\" type=\"STRING\"/><Column id=\"ENABLE_F\" size=\"1\" type=\"STRING\"/><Column id=\"ENABLE_G\" size=\"1\" type=\"STRING\"/><Column id=\"ENABLE_H\" size=\"1\" type=\"STRING\"/><Column id=\"ENABLE_I\" size=\"1\" type=\"STRING\"/><Column id=\"ENABLE_J\" size=\"1\" type=\"STRING\"/><Column id=\"VISIBLE_A\" size=\"1\" type=\"STRING\"/><Column id=\"VISIBLE_B\" size=\"1\" type=\"STRING\"/><Column id=\"VISIBLE_C\" size=\"1\" type=\"STRING\"/><Column id=\"VISIBLE_D\" size=\"1\" type=\"STRING\"/><Column id=\"VISIBLE_E\" size=\"1\" type=\"STRING\"/><Column id=\"VISIBLE_F\" size=\"1\" type=\"STRING\"/><Column id=\"VISIBLE_G\" size=\"1\" type=\"STRING\"/><Column id=\"VISIBLE_H\" size=\"1\" type=\"STRING\"/><Column id=\"VISIBLE_I\" size=\"1\" type=\"STRING\"/><Column id=\"VISIBLE_J\" size=\"1\" type=\"STRING\"/><Column id=\"ESSENTIAL_A\" size=\"1\" type=\"STRING\"/><Column id=\"ESSENTIAL_B\" size=\"1\" type=\"STRING\"/><Column id=\"ESSENTIAL_C\" size=\"1\" type=\"STRING\"/><Column id=\"ESSENTIAL_D\" size=\"1\" type=\"STRING\"/><Column id=\"ESSENTIAL_E\" size=\"1\" type=\"STRING\"/><Column id=\"ESSENTIAL_F\" size=\"1\" type=\"STRING\"/><Column id=\"ESSENTIAL_G\" size=\"1\" type=\"STRING\"/><Column id=\"ESSENTIAL_H\" size=\"1\" type=\"STRING\"/><Column id=\"ESSENTIAL_I\" size=\"1\" type=\"STRING\"/><Column id=\"ESSENTIAL_J\" size=\"1\" type=\"STRING\"/><Column id=\"NUM_MAX_LEN\" size=\"5\" type=\"INT\"/><Column id=\"STR_MAX_LEN\" size=\"5\" type=\"INT\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSysPgm", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"PGM_ID\" size=\"40\" type=\"STRING\"/><Column id=\"OBJ\" size=\"4000\" type=\"STRING\"/><Column id=\"OBJ_BIND\" size=\"4000\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsObjBindEn", this);
            obj._setContents("<ColumnInfo><Column id=\"TYPE\" size=\"1\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsObjBindVi", this);
            obj._setContents("<ColumnInfo><Column id=\"TYPE\" size=\"1\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsObjBindEs", this);
            obj._setContents("<ColumnInfo><Column id=\"TYPE\" size=\"1\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDelChkObj", this);
            obj._setContents("<ColumnInfo><Column id=\"PATH\" size=\"100\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsObjList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHECKED\" size=\"1\" type=\"STRING\"/><Column id=\"ID\" size=\"20\" type=\"STRING\"/><Column id=\"NAME\" size=\"20\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CHECKED\">1</Col><Col id=\"ID\">[object Edit]</Col><Col id=\"NAME\">Edit</Col></Row><Row><Col id=\"CHECKED\">1</Col><Col id=\"ID\">[object MaskEdit]</Col><Col id=\"NAME\">EMask</Col></Row><Row><Col id=\"CHECKED\">1</Col><Col id=\"ID\">[object Combo]</Col><Col id=\"NAME\">Combo</Col></Row><Row><Col id=\"CHECKED\">1</Col><Col id=\"ID\">[object Div]</Col><Col id=\"NAME\">Div</Col></Row><Row><Col id=\"CHECKED\">1</Col><Col id=\"ID\">[object Button]</Col><Col id=\"NAME\">Btn</Col></Row><Row><Col id=\"CHECKED\">1</Col><Col id=\"ID\">[object TextArea]</Col><Col id=\"NAME\">TArea</Col></Row><Row><Col id=\"CHECKED\">1</Col><Col id=\"ID\">[object Radio]</Col><Col id=\"NAME\">Radio</Col></Row><Row><Col id=\"CHECKED\">1</Col><Col id=\"ID\">[object CheckBox]</Col><Col id=\"NAME\">Check</Col></Row><Row><Col id=\"CHECKED\">1</Col><Col id=\"ID\">[object PopupDiv]</Col><Col id=\"NAME\">PDiv</Col></Row><Row><Col id=\"CHECKED\">1</Col><Col id=\"ID\">[object Static]</Col><Col id=\"NAME\">Static</Col></Row><Row><Col id=\"CHECKED\">1</Col><Col id=\"ID\">[object Tab]</Col><Col id=\"NAME\">TAB</Col></Row><Row><Col id=\"CHECKED\">1</Col><Col id=\"ID\">[object Tabpage]</Col><Col id=\"NAME\">TAB Page</Col></Row><Row><Col id=\"CHECKED\">1</Col><Col id=\"ID\">[object Menu]</Col><Col id=\"NAME\">Menu</Col></Row><Row><Col id=\"CHECKED\">1</Col><Col id=\"ID\">[object ImageViewer]</Col><Col id=\"NAME\">ImgVr</Col></Row><Row><Col id=\"CHECKED\">1</Col><Col id=\"ID\">[object Calendar]</Col><Col id=\"NAME\">Calendar</Col></Row><Row><Col id=\"CHECKED\">1</Col><Col id=\"ID\">[object Spin]</Col><Col id=\"NAME\">Spin</Col></Row><Row><Col id=\"CHECKED\">1</Col><Col id=\"ID\">[object PopupMenu]</Col><Col id=\"NAME\">PMenu</Col></Row><Row><Col id=\"CHECKED\">1</Col><Col id=\"ID\">[object ProgressBar]</Col><Col id=\"NAME\">PBar</Col></Row><Row><Col id=\"CHECKED\">1</Col><Col id=\"ID\">[object GroupBox]</Col><Col id=\"NAME\">GBox</Col></Row><Row><Col id=\"CHECKED\">1</Col><Col id=\"ID\">[object Grid]</Col><Col id=\"NAME\">Grid</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsObjGrid", this);
            obj._setContents("<ColumnInfo><Column id=\"CHECKED\" size=\"256\" type=\"STRING\"/><Column id=\"TEXT\" size=\"256\" type=\"STRING\"/><Column id=\"NAME\" size=\"256\" type=\"STRING\"/><Column id=\"TYPE\" size=\"256\" type=\"STRING\"/><Column id=\"PATH\" size=\"256\" type=\"STRING\"/><Column id=\"COMP_ADD_DESC\" size=\"256\" type=\"STRING\"/><Column id=\"MODE_A\" size=\"256\" type=\"STRING\"/><Column id=\"MODE_B\" size=\"256\" type=\"STRING\"/><Column id=\"MODE_C\" size=\"256\" type=\"STRING\"/><Column id=\"MODE_D\" size=\"256\" type=\"STRING\"/><Column id=\"MODE_E\" size=\"256\" type=\"STRING\"/><Column id=\"MODE_F\" size=\"256\" type=\"STRING\"/><Column id=\"MODE_G\" size=\"256\" type=\"STRING\"/><Column id=\"MODE_H\" size=\"256\" type=\"STRING\"/><Column id=\"MODE_I\" size=\"256\" type=\"STRING\"/><Column id=\"MODE_J\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsObjBindGrid", this);
            obj._setContents("<ColumnInfo><Column id=\"TYPE\" size=\"1\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsObjDesc", this);
            obj._setContents("<ColumnInfo><Column id=\"TYPE\" size=\"256\" type=\"STRING\"/><Column id=\"RMARK\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"TYPE\">A</Col></Row><Row><Col id=\"TYPE\">B</Col></Row><Row><Col id=\"TYPE\">C</Col></Row><Row><Col id=\"TYPE\">D</Col></Row><Row><Col id=\"TYPE\">E</Col></Row><Row><Col id=\"TYPE\">F</Col></Row><Row><Col id=\"TYPE\">G</Col></Row><Row><Col id=\"TYPE\">H</Col></Row><Row><Col id=\"TYPE\">I</Col></Row><Row><Col id=\"TYPE\">J</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDelChkGridObj", this);
            obj._setContents("<ColumnInfo><Column id=\"PATH\" size=\"100\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new PopupDiv("pdvObjList", "absolute", "923", "5", "160", "247", null, null, this);
            obj.style.set_background("thistle");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Button("btnFilterApply", "absolute", "32.1%", "220", null, "24", "33.95%", null, this.pdvObjList);
            obj.set_taborder("1");
            obj.set_text("적용");
            this.pdvObjList.addChild(obj.name, obj);
            obj = new Grid("grdFilterList", "absolute", "0", "0", null, null, "0", "30", this.pdvObjList);
            obj.set_autofittype("col");
            obj.set_binddataset("dsObjList");
            obj.set_taborder("2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column band=\"left\" size=\"40\"/><Column size=\"120\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" expr=\"\" text=\"Object\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" editdisplay=\"display\" edittype=\"checkbox\" text=\"bind:CHECKED\"/><Cell col=\"1\" style=\"align:left middle;\" text=\"bind:NAME\"/></Band></Format></Formats>");
            this.pdvObjList.addChild(obj.name, obj);

            obj = new Button("btnSave", "absolute", null, "13", "58", "25", "25", null, this);
            obj.set_taborder("28");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Div("divViewCompBody00", "absolute", "10", "82", null, null, "20", "226", this);
            obj.set_taborder("30");
            this.addChild(obj.name, obj);
            obj = new Div("divPaging", "absolute", "0", null, null, "28", "0", "0", this.divViewCompBody00);
            obj.set_scrollbars("none");
            obj.set_taborder("1");
            obj.set_url("CCOMP::CompPaging.xfdl");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new ProgressBar("progress", "absolute", "31.95%", "206", "318", "30", null, null, this.divViewCompBody00);
            obj.style.set_bartype("normal");
            obj.style.set_bargradation("linear 0,0 #db0000ff 0,100 #f37321ff");
            obj.set_taborder("2");
            obj.set_text("진행중");
            obj.set_visible("false");
            this.divViewCompBody00.addChild(obj.name, obj);
            obj = new Grid("grdObj", "absolute", "0", "0", null, null, "0", "27", this.divViewCompBody00);
            obj.set_autoenter("select");
            obj.set_binddataset("dsObj");
            obj.set_cellclickbound("cell");
            obj.set_cellmovingtype("col");
            obj.set_cellsizebandtype("allband");
            obj.set_cellsizingtype("col");
            obj.set_taborder("3");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.set_useselcolor("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column band=\"left\" size=\"40\"/><Column band=\"left\" size=\"66\"/><Column band=\"left\" size=\"120\"/><Column size=\"350\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column band=\"right\" size=\"59\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"head\" size=\"24\"/><Row band=\"head\" size=\"24\"/><Row size=\"21\"/><Row band=\"summ\" size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" rowspan=\"3\"/><Cell col=\"1\" expr=\"\" rowspan=\"3\" text=\"화면에서&#13;&#10;추가&#13;&#10;or 없어진&#13;&#10;컴포넌트\"/><Cell col=\"2\" expr=\"\" rowspan=\"3\" text=\"오브젝트명(objNm)\"/><Cell col=\"3\" expr=\"\" rowspan=\"3\" text=\"PATH\"/><Cell col=\"4\" colspan=\"3\"><Cell/><Cell col=\"1\" text=\"A\"/><Cell col=\"2\"/></Cell><Cell col=\"7\" colspan=\"3\"><Cell/><Cell col=\"1\" text=\"B\"/><Cell col=\"2\"/></Cell><Cell col=\"10\" colspan=\"3\"><Cell/><Cell col=\"1\" text=\"C\"/><Cell col=\"2\"/></Cell><Cell col=\"13\" colspan=\"3\"><Cell/><Cell col=\"1\" text=\"D\"/><Cell col=\"2\"/></Cell><Cell col=\"16\" colspan=\"3\"><Cell/><Cell col=\"1\" text=\"E\"/><Cell col=\"2\"/></Cell><Cell col=\"19\" colspan=\"3\"><Cell/><Cell col=\"1\" text=\"F\"/><Cell col=\"2\"/></Cell><Cell col=\"22\" colspan=\"3\"><Cell/><Cell col=\"1\" text=\"G\"/><Cell col=\"2\"/></Cell><Cell col=\"25\" colspan=\"3\"><Cell/><Cell col=\"1\" text=\"H\"/><Cell col=\"2\"/></Cell><Cell col=\"28\" colspan=\"3\"><Cell/><Cell col=\"1\" text=\"I\"/><Cell col=\"2\"/></Cell><Cell col=\"31\" colspan=\"3\"><Cell/><Cell col=\"1\" text=\"J\"/><Cell col=\"2\"/></Cell><Cell col=\"34\" rowspan=\"3\"><Cell text=\"바인딩 된\"/><Cell row=\"1\" text=\"DB컬럼\"/><Cell row=\"2\" text=\"Byte\"/></Cell><Cell col=\"4\" expr=\"\" row=\"1\" text=\"En\" tooltiptext=\"\"/><Cell col=\"5\" expr=\"\" row=\"1\" text=\"Vi\" tooltiptext=\"\"/><Cell col=\"6\" expr=\"\" row=\"1\" text=\"Es\" tooltiptext=\"\"/><Cell col=\"7\" expr=\"\" row=\"1\" text=\"En\" tooltiptext=\"\"/><Cell col=\"8\" expr=\"\" row=\"1\" text=\"Vi\" tooltiptext=\"\"/><Cell col=\"9\" expr=\"\" row=\"1\" text=\"Es\" tooltiptext=\"\"/><Cell col=\"10\" expr=\"\" row=\"1\" text=\"En\" tooltiptext=\"\"/><Cell col=\"11\" expr=\"\" row=\"1\" text=\"Vi\" tooltiptext=\"\"/><Cell col=\"12\" expr=\"\" row=\"1\" text=\"Es\" tooltiptext=\"\"/><Cell col=\"13\" expr=\"\" row=\"1\" text=\"En\" tooltiptext=\"\"/><Cell col=\"14\" expr=\"\" row=\"1\" text=\"Vi\" tooltiptext=\"\"/><Cell col=\"15\" expr=\"\" row=\"1\" text=\"Es\" tooltiptext=\"\"/><Cell col=\"16\" expr=\"\" row=\"1\" text=\"En\" tooltiptext=\"\"/><Cell col=\"17\" expr=\"\" row=\"1\" text=\"Vi\" tooltiptext=\"\"/><Cell col=\"18\" expr=\"\" row=\"1\" text=\"Es\" tooltiptext=\"\"/><Cell col=\"19\" expr=\"\" row=\"1\" text=\"En\" tooltiptext=\"\"/><Cell col=\"20\" expr=\"\" row=\"1\" text=\"Vi\" tooltiptext=\"\"/><Cell col=\"21\" expr=\"\" row=\"1\" text=\"Es\" tooltiptext=\"\"/><Cell col=\"22\" expr=\"\" row=\"1\" text=\"En\" tooltiptext=\"\"/><Cell col=\"23\" expr=\"\" row=\"1\" text=\"Vi\" tooltiptext=\"\"/><Cell col=\"24\" expr=\"\" row=\"1\" text=\"Es\" tooltiptext=\"\"/><Cell col=\"25\" expr=\"\" row=\"1\" text=\"En\" tooltiptext=\"\"/><Cell col=\"26\" expr=\"\" row=\"1\" text=\"Vi\" tooltiptext=\"\"/><Cell col=\"27\" expr=\"\" row=\"1\" text=\"Es\" tooltiptext=\"\"/><Cell col=\"28\" expr=\"\" row=\"1\" text=\"En\" tooltiptext=\"\"/><Cell col=\"29\" expr=\"\" row=\"1\" text=\"Vi\" tooltiptext=\"\"/><Cell col=\"30\" expr=\"\" row=\"1\" text=\"Es\" tooltiptext=\"\"/><Cell col=\"31\" expr=\"\" row=\"1\" text=\"En\" tooltiptext=\"\"/><Cell col=\"32\" expr=\"\" row=\"1\" text=\"Vi\" tooltiptext=\"\"/><Cell col=\"33\" expr=\"\" row=\"1\" text=\"Es\" tooltiptext=\"\"/><Cell col=\"4\" displaytype=\"checkbox\" edittype=\"checkbox\" row=\"2\"/><Cell col=\"5\" displaytype=\"checkbox\" edittype=\"checkbox\" row=\"2\"/><Cell col=\"6\" displaytype=\"checkbox\" edittype=\"checkbox\" row=\"2\"/><Cell col=\"7\" displaytype=\"checkbox\" edittype=\"checkbox\" row=\"2\"/><Cell col=\"8\" displaytype=\"checkbox\" edittype=\"checkbox\" row=\"2\"/><Cell col=\"9\" displaytype=\"checkbox\" edittype=\"checkbox\" row=\"2\"/><Cell col=\"10\" displaytype=\"checkbox\" edittype=\"checkbox\" row=\"2\"/><Cell col=\"11\" displaytype=\"checkbox\" edittype=\"checkbox\" row=\"2\"/><Cell col=\"12\" displaytype=\"checkbox\" edittype=\"checkbox\" row=\"2\"/><Cell col=\"13\" displaytype=\"checkbox\" edittype=\"checkbox\" row=\"2\"/><Cell col=\"14\" displaytype=\"checkbox\" edittype=\"checkbox\" row=\"2\"/><Cell col=\"15\" displaytype=\"checkbox\" edittype=\"checkbox\" row=\"2\"/><Cell col=\"16\" displaytype=\"checkbox\" edittype=\"checkbox\" row=\"2\"/><Cell col=\"17\" displaytype=\"checkbox\" edittype=\"checkbox\" row=\"2\"/><Cell col=\"18\" displaytype=\"checkbox\" edittype=\"checkbox\" row=\"2\"/><Cell col=\"19\" displaytype=\"checkbox\" edittype=\"checkbox\" row=\"2\"/><Cell col=\"20\" displaytype=\"checkbox\" edittype=\"checkbox\" row=\"2\"/><Cell col=\"21\" displaytype=\"checkbox\" edittype=\"checkbox\" row=\"2\"/><Cell col=\"22\" displaytype=\"checkbox\" edittype=\"checkbox\" row=\"2\"/><Cell col=\"23\" displaytype=\"checkbox\" edittype=\"checkbox\" row=\"2\"/><Cell col=\"24\" displaytype=\"checkbox\" edittype=\"checkbox\" row=\"2\"/><Cell col=\"25\" displaytype=\"checkbox\" edittype=\"checkbox\" row=\"2\"/><Cell col=\"26\" displaytype=\"checkbox\" edittype=\"checkbox\" row=\"2\"/><Cell col=\"27\" displaytype=\"checkbox\" edittype=\"checkbox\" row=\"2\"/><Cell col=\"28\" displaytype=\"checkbox\" edittype=\"checkbox\" row=\"2\"/><Cell col=\"29\" displaytype=\"checkbox\" edittype=\"checkbox\" row=\"2\"/><Cell col=\"30\" displaytype=\"checkbox\" edittype=\"checkbox\" row=\"2\"/><Cell col=\"31\" displaytype=\"checkbox\" edittype=\"checkbox\" row=\"2\"/><Cell col=\"32\" displaytype=\"checkbox\" edittype=\"checkbox\" row=\"2\"/><Cell col=\"33\" displaytype=\"checkbox\" edittype=\"checkbox\" row=\"2\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\"/><Cell col=\"1\" text=\"bind:COMP_ADD_DESC\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" style=\"align:left middle;\" text=\"bind:TEXT\" tooltiptext=\"bind:TEXT\"/><Cell col=\"3\" displaytype=\"tree\" style=\"align:left;\" text=\"bind:PATH\" treelevel=\"bind:LEVEL\"/><Cell col=\"4\" displaytype=\"checkbox\" editdisplay=\"edit\" edittype=\"checkbox\" text=\"bind:ENABLE_A\"/><Cell col=\"5\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:VISIBLE_A\"/><Cell col=\"6\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ESSENTIAL_A\"/><Cell col=\"7\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ENABLE_B\"/><Cell col=\"8\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:VISIBLE_B\"/><Cell col=\"9\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ESSENTIAL_B\"/><Cell col=\"10\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ENABLE_C\"/><Cell col=\"11\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:VISIBLE_C\"/><Cell col=\"12\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ESSENTIAL_C\"/><Cell col=\"13\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ENABLE_D\"/><Cell col=\"14\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:VISIBLE_D\"/><Cell col=\"15\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ESSENTIAL_D\"/><Cell col=\"16\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ENABLE_E\"/><Cell col=\"17\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:VISIBLE_E\"/><Cell col=\"18\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ESSENTIAL_E\"/><Cell col=\"19\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ENABLE_F\"/><Cell col=\"20\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:VISIBLE_F\"/><Cell col=\"21\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ESSENTIAL_F\"/><Cell col=\"22\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ENABLE_G\"/><Cell col=\"23\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:VISIBLE_G\"/><Cell col=\"24\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ESSENTIAL_G\"/><Cell col=\"25\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ENABLE_H\"/><Cell col=\"26\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:VISIBLE_H\"/><Cell col=\"27\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ESSENTIAL_H\"/><Cell col=\"28\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ENABLE_I\"/><Cell col=\"29\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:VISIBLE_I\"/><Cell col=\"30\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ESSENTIAL_I\"/><Cell col=\"31\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ENABLE_J\"/><Cell col=\"32\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:VISIBLE_J\"/><Cell col=\"33\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ESSENTIAL_J\"/><Cell col=\"34\" displaytype=\"number\" editdisplay=\"display\" editlimitbymask=\"both\" edittype=\"text\" mask=\"####\" style=\"align:right;\" text=\"bind:STR_MAX_LEN\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" style=\"align:left;\" text=\"En : Enable,   Vi : Visible\"/><Cell col=\"3\" style=\"align:left;\" text=\"Es : Essential\"/><Cell col=\"4\" colspan=\"3\" displaytype=\"button\" style=\"align:center;\" text=\"A 모드 설명\"/><Cell col=\"7\" colspan=\"3\" displaytype=\"button\" style=\"align:center;\" text=\"B 모드 설명\"/><Cell col=\"10\" colspan=\"3\" displaytype=\"button\" style=\"align:center;\" text=\"C 모드 설명\"/><Cell col=\"13\" colspan=\"3\" displaytype=\"button\" style=\"align:center;\" text=\"D 모드 설명\"/><Cell col=\"16\" colspan=\"3\" displaytype=\"button\" style=\"align:center;\" text=\"E 모드 설명\"/><Cell col=\"19\" colspan=\"3\" displaytype=\"button\" style=\"align:center;\" text=\"F 모드 설명\"/><Cell col=\"22\" colspan=\"3\" displaytype=\"button\" style=\"align:center;\" text=\"G 모드 설명\"/><Cell col=\"25\" colspan=\"3\" displaytype=\"button\" style=\"align:center;\" text=\"H 모드 설명\"/><Cell col=\"28\" colspan=\"3\" displaytype=\"button\" style=\"align:center;\" text=\"I 모드 설명\"/><Cell col=\"31\" colspan=\"3\" displaytype=\"button\" style=\"align:center;\" text=\"J 모드 설명\"/><Cell col=\"34\"/></Band></Format></Formats>");
            this.divViewCompBody00.addChild(obj.name, obj);

            obj = new Div("divViewCompTitle00", "absolute", "10", "48", null, "24", "20", null, this);
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            obj.set_taborder("31");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "0", "194", "24", null, null, this.divViewCompTitle00);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("0");
            obj.set_text("컴포넌트");
            this.divViewCompTitle00.addChild(obj.name, obj);
            obj = new Button("btnFilterInit", "absolute", null, "0", "80", "23", "513", null, this.divViewCompTitle00);
            obj.set_taborder("1");
            obj.set_text("필터초기화");
            this.divViewCompTitle00.addChild(obj.name, obj);
            obj = new Button("btnFilter", "absolute", null, "0", "62", "23", "595", null, this.divViewCompTitle00);
            obj.set_taborder("2");
            obj.set_text("필터");
            this.divViewCompTitle00.addChild(obj.name, obj);
            obj = new Button("btnDelRow", "absolute", null, "0", "60", "23", "5", null, this.divViewCompTitle00);
            obj.set_taborder("3");
            obj.set_text("행삭제");
            this.divViewCompTitle00.addChild(obj.name, obj);
            obj = new Button("btnDelCompChk", "absolute", null, "0", "180", "23", "67", null, this.divViewCompTitle00);
            obj.set_taborder("4");
            obj.set_text("화면에 없어진 컴포넌트 체크");
            this.divViewCompTitle00.addChild(obj.name, obj);
            obj = new Button("btnCompLoadSrch", "absolute", null, "0", "140", "23", "249", null, this.divViewCompTitle00);
            obj.set_taborder("5");
            obj.set_text("추가된 컴포넌트 검색");
            this.divViewCompTitle00.addChild(obj.name, obj);
            obj = new Button("btnCompLoad", "absolute", null, "0", "120", "23", "391", null, this.divViewCompTitle00);
            obj.set_taborder("6");
            obj.set_text("컴포넌트 불러오기");
            obj.set_tooltiptext("기존에 저장되어 있던 데이터는 사라집니다.");
            obj.set_tooltiptype("default");
            this.divViewCompTitle00.addChild(obj.name, obj);

            obj = new Button("btnCompXml", "absolute", null, "13", "110", "25", "86", null, this);
            obj.set_taborder("34");
            obj.set_text("바인딩소스만들기");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdvModeDesc", "absolute", "944", "317", "320", "144", null, null, this);
            obj.style.set_background("thistle");
            this.addChild(obj.name, obj);
            obj = new TextArea("txaMode", "absolute", "10", "10", null, null, "10", "10", this.pdvModeDesc);
            obj.set_taborder("0");
            this.pdvModeDesc.addChild(obj.name, obj);

            obj = new Static("staDesc", "absolute", null, "15", "245", "19", "431", null, this);
            obj.style.set_align("right middle");
            obj.set_taborder("37");
            obj.set_text("※웹브라우저는 사용자 유효성체크로 해야함.");
            this.addChild(obj.name, obj);

            obj = new Div("divViewCompBody01", "absolute", "10", "599", null, null, "20", "13", this);
            obj.set_taborder("38");
            this.addChild(obj.name, obj);
            obj = new Grid("grdObjGrid", "absolute", "0", "0", null, null, "0", "0", this.divViewCompBody01);
            obj.set_autoenter("select");
            obj.set_binddataset("dsObjGrid");
            obj.set_cellclickbound("cell");
            obj.set_cellmovingtype("col");
            obj.set_cellsizebandtype("allband");
            obj.set_cellsizingtype("col");
            obj.getSetter("f_totalCnt").set("Y");
            obj.set_taborder("6");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.set_useselcolor("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column band=\"left\" size=\"40\"/><Column band=\"left\" size=\"66\"/><Column band=\"left\" size=\"120\"/><Column band=\"left\" size=\"350\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"23\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"\" text=\"추가or삭제\"/><Cell col=\"1\" expr=\"\" text=\"추가or삭제\"/><Cell col=\"2\" expr=\"\" text=\"오브젝트명(objNm)\"/><Cell col=\"3\" expr=\"\" text=\"PATH\"/><Cell col=\"4\" colspan=\"3\"><Cell/><Cell col=\"1\" text=\"A\"/><Cell col=\"2\"/></Cell><Cell col=\"7\" colspan=\"3\"><Cell/><Cell col=\"1\" text=\"B\"/><Cell col=\"2\"/></Cell><Cell col=\"10\" colspan=\"3\"><Cell/><Cell col=\"1\" text=\"C\"/><Cell col=\"2\"/></Cell><Cell col=\"13\" colspan=\"3\"><Cell/><Cell col=\"1\" text=\"D\"/><Cell col=\"2\"/></Cell><Cell col=\"16\" colspan=\"3\"><Cell/><Cell col=\"1\" text=\"E\"/><Cell col=\"2\"/></Cell><Cell col=\"19\" colspan=\"3\"><Cell/><Cell col=\"1\" text=\"F\"/><Cell col=\"2\"/></Cell><Cell col=\"22\" colspan=\"3\"><Cell/><Cell col=\"1\" text=\"G\"/><Cell col=\"2\"/></Cell><Cell col=\"25\" colspan=\"3\"><Cell/><Cell col=\"1\" text=\"H\"/><Cell col=\"2\"/></Cell><Cell col=\"28\" colspan=\"3\"><Cell/><Cell col=\"1\" text=\"I\"/><Cell col=\"2\"/></Cell><Cell col=\"31\" colspan=\"3\"><Cell/><Cell col=\"1\" text=\"J\"/><Cell col=\"2\"/></Cell></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\"/><Cell col=\"1\" text=\"bind:COMP_ADD_DESC\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" style=\"align:left middle;\" text=\"bind:TEXT\" tooltiptext=\"bind:TEXT\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:PATH\"/><Cell col=\"4\" colspan=\"3\" editdisplay=\"edit\" edittype=\"text\" style=\"align:left;\" text=\"bind:MODE_A\"/><Cell col=\"7\" colspan=\"3\" edittype=\"text\" style=\"align:left;\" text=\"bind:MODE_B\"/><Cell col=\"10\" colspan=\"3\" edittype=\"text\" style=\"align:left;\" text=\"bind:MODE_C\"/><Cell col=\"13\" colspan=\"3\" edittype=\"text\" style=\"align:left;\" text=\"bind:MODE_D\"/><Cell col=\"16\" colspan=\"3\" edittype=\"text\" style=\"align:left;\" text=\"bind:MODE_E\"/><Cell col=\"19\" colspan=\"3\" edittype=\"text\" style=\"align:left;\" text=\"bind:MODE_F\"/><Cell col=\"22\" colspan=\"3\" edittype=\"text\" style=\"align:left;\" text=\"bind:MODE_G\"/><Cell col=\"25\" colspan=\"3\" edittype=\"text\" style=\"align:left;\" text=\"bind:MODE_H\"/><Cell col=\"28\" colspan=\"3\" edittype=\"text\" style=\"align:left;\" text=\"bind:MODE_I\"/><Cell col=\"31\" colspan=\"3\" edittype=\"text\" style=\"align:left;\" text=\"bind:MODE_J\"/></Band></Format></Formats>");
            this.divViewCompBody01.addChild(obj.name, obj);
            obj = new ProgressBar("progress", "absolute", "31.95%", "318", "318", "30", null, null, this.divViewCompBody01);
            obj.style.set_bartype("normal");
            obj.style.set_bargradation("linear 0,0 #db0000ff 0,100 #f37321ff");
            obj.set_taborder("7");
            obj.set_text("진행중");
            obj.set_visible("false");
            this.divViewCompBody01.addChild(obj.name, obj);

            obj = new Div("divViewCompTitle01", "absolute", "10", "570", null, "24", "10", null, this);
            obj.getSetter("objNm").set("DIV-평가서 타이틀");
            obj.set_taborder("39");
            this.addChild(obj.name, obj);
            obj = new Static("staViewCompTitle00", "absolute", "0", "0", "194", "24", null, null, this.divViewCompTitle01);
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("11");
            obj.set_text("그리드 & 첨부파일 DIV");
            this.divViewCompTitle01.addChild(obj.name, obj);
            obj = new Button("btnGridXml", "absolute", null, "0", "142", "24", "58", null, this.divViewCompTitle01);
            obj.set_taborder("12");
            obj.set_text("그리드 바인딩소스만들기");
            this.divViewCompTitle01.addChild(obj.name, obj);
            obj = new Static("staGridDesc", "absolute", null, "0", "501", "19", "205", null, this.divViewCompTitle01);
            obj.style.set_align("right middle");
            obj.set_taborder("13");
            obj.set_text("1 그리드모드 입력안하면 default 포맷명으로 세팅. 2 첨부파일은 N:읽기모드, Y:첨부모드");
            this.divViewCompTitle01.addChild(obj.name, obj);
            obj = new Button("btnDelRowGridObj", "absolute", null, "0", "46", "23", "10", null, this.divViewCompTitle01);
            obj.set_taborder("14");
            obj.set_text("행삭제");
            this.divViewCompTitle01.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 160, 247, this.pdvObjList,
            	//-- Layout function
            	function(p) {
            		p.style.set_background("thistle");
            		p.set_visible("false");

            	}
            );
            this.pdvObjList.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.divViewCompBody00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("30");

            	}
            );
            this.divViewCompBody00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompTitle00,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 타이틀");
            		p.set_taborder("31");

            	}
            );
            this.divViewCompTitle00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 320, 144, this.pdvModeDesc,
            	//-- Layout function
            	function(p) {
            		p.style.set_background("thistle");

            	}
            );
            this.pdvModeDesc.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.divViewCompBody01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("38");

            	}
            );
            this.divViewCompBody01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 139, this.divViewCompTitle01,
            	//-- Layout function
            	function(p) {
            		p.getSetter("objNm").set("DIV-평가서 타이틀");
            		p.set_taborder("39");

            	}
            );
            this.divViewCompTitle01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 900, 786, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("FrmPopObjMgt");
            		p.set_enableevent("true");
            		p.set_titletext("Object 관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("btnDelRowGridObjLangBind201711031718426216","divViewCompTitle01.btnDelRowGridObj","text","gdsLabel","EPRO_LABEL_00481");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","pdvModeDesc.txaMode","value","dsObjDesc","RMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("btnDelCompChkLangBind2017110317184219133","divViewCompTitle00.btnDelCompChk","text","gdsLabel","EPRO_LABEL_00495");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompPaging.xfdl");
        };
        
        // User Script
        this.registerScript("BComObjMgmtPop.xfdl", function(exports) {
        /**
         * @파일명       	: BComObjMgmtPop.xfdl
         * @생성자       	: 김민성
         * @생성일자     	: 2017.09.08.
         * @설명			: 폼 오브젝트 관리 팝업
         * @최종수정자		: 한민희
         * @최종수정일자	: 2017.09.13.
        */  

        this.popTitle = "오브젝트 관리";
        this.fvForm;						// 업무화면 form
        this.fvWorkingRow = 0;				// 나눠서 로딩할때 마지막까지 로딩한 로우.
        this.fvRealBlock = 0; 				// 나눠서 로딩할 총 순번
        this.fvCntBlock = 0; 				// 나눠서 로딩할 때 진행중인 순번
        this.fvArrAllComp = new Array(); 	// obj 관리 하는 화면의 모든 컴포넌트가 담긴 배열.

        /**
          * @함수명	: fnOnLoad
          * @desc     	: 타이틀 접기/펼치기 기능
          */
        this.fnFold = function()
        {
        	/*
        		상단에서부터 div 순서대로 기입.
        		ttl:접기/펼치기 클릭 하는 컴포넌트, body:실제로 접혀지거나 펼쳐지는 컴포넌트, initFold:true면 접는다.
        	*/
        	var sArg = [ 
        				{ttl:this.divViewCompTitle00.staViewCompTitle00, body:this.divViewCompBody00}	//컴포넌트 타이틀
        				, {ttl:this.divViewCompTitle01.staViewCompTitle00, body:this.divViewCompBody01}	//그리드 타이틀
        		   ];		   
        	gfnDivFold(this, sArg);
        }

        /**
          * @함수명	: fnOnLoad
          * @desc     	: 폼 로드 이벤트
          */
        this.fnOnLoad = function(obj,e)
        {	
        	//타이틀 접기/펼치기 기능
        	this.fnFold();
        	
        	var ownFrame = this.getOwnerFrame();
        	this.fvForm = ownFrame.agv_form;
        	
        	this.dsSysPgm.addRow();
        	this.dsSysPgm.setColumn(0,"PGM_ID", ownFrame.agv_key);
        	
        	this.fnSearch();
        }

        /**
          * @함수명	: fnCheckedHeader
          * @input		: obj {Object} 화면 폼 오브젝트, ds 데이터셋, row 그리드 로우번호, colNm 데이터셋 바인드ID
          * @desc     	: 리스트 그리드 헤더 체크박스 클릭시 해당 열 전체 선택
          */
        this.fnCheckedHeader = function(obj,ds,row,colNm)
        {
        	var strVal = obj.getCellProperty("head", row, "expr");	
        	if(gfnIsNull(strVal)){
        		strVal = "0";
        	}

        	obj.setCellProperty("head", row, "expr", strVal=="0"?"1":"0");
        	strVal = (strVal=="0"?"1":"0");
        	
        	for(var i=0; i<ds.rowcount; i++){
        		ds.setColumn(i,colNm,strVal);
        	}
        }

        /**
          * @함수명	: fnSetCompGrdHeadCheckbox
          * @desc     	: 리스트 그리드 헤드 클릭 이벤트
          */
        this.fnSetCompGrdHeadCheckbox = function(obj,e)
        {	
        	switch(e.cell){		
        		case 0 : 
        			this.fnCheckedHeader(obj,this.dsObj,e.cell,"CHECKED");
        			break;
        			
        		case 45 : 
        			this.fnCheckedHeader(obj,this.dsObj,e.cell,"ENABLE_A");
        			break;
        		
        		case 46 : 
        			this.fnCheckedHeader(obj,this.dsObj,e.cell,"VISIBLE_A");
        			break;
        		
        		case 47 : 
        			this.fnCheckedHeader(obj,this.dsObj,e.cell,"ESSENTIAL_A");
        			break;
        		
        		case 48 : 
        			this.fnCheckedHeader(obj,this.dsObj,e.cell,"ENABLE_B");
        			break;
        		
        		case 49 : 
        			this.fnCheckedHeader(obj,this.dsObj,e.cell,"VISIBLE_B");
        			break;
        		
        		case 50 : 
        			this.fnCheckedHeader(obj,this.dsObj,e.cell,"ESSENTIAL_B");
        			break;
        		
        		case 51 : 
        			this.fnCheckedHeader(obj,this.dsObj,e.cell,"ENABLE_C");
        			break;
        		
        		case 52 : 
        			this.fnCheckedHeader(obj,this.dsObj,e.cell,"VISIBLE_C");
        			break;
        		
        		case 53 : 
        			this.fnCheckedHeader(obj,this.dsObj,e.cell,"ESSENTIAL_C");
        			break;
        		
        		case 54 : 
        			this.fnCheckedHeader(obj,this.dsObj,e.cell,"ENABLE_D");
        			break;
        		
        		case 55 : 
        			this.fnCheckedHeader(obj,this.dsObj,e.cell,"VISIBLE_D");
        			break;
        		
        		case 56 : 
        			this.fnCheckedHeader(obj,this.dsObj,e.cell,"ESSENTIAL_D");
        			break;
        		
        		case 57 : 
        			this.fnCheckedHeader(obj,this.dsObj,e.cell,"ENABLE_E");
        			break;
        		
        		case 58 : 
        			this.fnCheckedHeader(obj,this.dsObj,e.cell,"VISIBLE_E");
        			break;
        		
        		case 59 : 
        			this.fnCheckedHeader(obj,this.dsObj,e.cell,"ESSENTIAL_E");
        			break;
        		
        		case 60 : 
        			this.fnCheckedHeader(obj,this.dsObj,e.cell,"ENABLE_F");
        			break;
        		
        		case 61 : 
        			this.fnCheckedHeader(obj,this.dsObj,e.cell,"VISIBLE_F");
        			break;
        		
        		case 62 : 
        			this.fnCheckedHeader(obj,this.dsObj,e.cell,"ESSENTIAL_F");
        			break;
        		
        		case 63 : 
        			this.fnCheckedHeader(obj,this.dsObj,e.cell,"ENABLE_G");
        			break;
        		
        		case 64 : 
        			this.fnCheckedHeader(obj,this.dsObj,e.cell,"VISIBLE_G");
        			break;
        		
        		case 65 : 
        			this.fnCheckedHeader(obj,this.dsObj,e.cell,"ESSENTIAL_G");
        			break;
        		
        		case 66 : 
        			this.fnCheckedHeader(obj,this.dsObj,e.cell,"ENABLE_H");
        			break;
        		
        		case 67 : 
        			this.fnCheckedHeader(obj,this.dsObj,e.cell,"VISIBLE_H");
        			break;
        		
        		case 68 : 
        			this.fnCheckedHeader(obj,this.dsObj,e.cell,"ESSENTIAL_H");
        			break;
        		
        		case 69 : 
        			this.fnCheckedHeader(obj,this.dsObj,e.cell,"ENABLE_I");
        			break;
        		
        		case 70 : 
        			this.fnCheckedHeader(obj,this.dsObj,e.cell,"VISIBLE_I");
        			break;
        		
        		case 71 : 
        			this.fnCheckedHeader(obj,this.dsObj,e.cell,"ESSENTIAL_I");
        			break;
        		
        		case 72 : 
        			this.fnCheckedHeader(obj,this.dsObj,e.cell,"ENABLE_J");
        			break;
        		
        		case 73 : 
        			this.fnCheckedHeader(obj,this.dsObj,e.cell,"VISIBLE_J");
        			break;
        		
        		case 74 : 
        			this.fnCheckedHeader(obj,this.dsObj,e.cell,"ESSENTIAL_J");
        			break;
        		
        		default:
        			break;	
        	}
        }

        /**
          * @함수명	: fnGrdFilterHeadCheckbox
          * @desc     	: 필터 그리드 헤드 클릭 이벤트
          */
        this.fnGrdFilterHeadCheckbox = function(obj,e)
        {
        	if(e.cell==0){
        		var strVal = obj.getCellProperty("head", e.cell , "expr");	
        		if(gfnIsNull(strVal)){
        			strVal = "0";
        		}

        		obj.setCellProperty("head", e.cell, "expr", strVal=="0"?"1":"0");
        		strVal = (strVal=="0"?"1":"0");
        		
        		this.dsObjList.set_enableevent(false);
        		for(var i=0; i<this.dsObjList.rowcount; i++){
        			this.dsObjList.setColumn(i,"CHECKED",strVal);
        		}
        		this.dsObjList.set_enableevent(true);
        	}
        }

        
        /**
          * @함수명	: fnPreSearch
          * @desc     	: 조회 전 처리
          */
        this.fnPreSearch = function(){
        	return true;
        }

        /**
          * @함수명	: fnSearch
          * @desc     	: 조회 프로세스
          */
        this.fnSearch = function(){
        	
        	if(!this.fnPreSearch()) return false;

        	var sSvcID = "searchObjInfo";
        	var sController = "epro.sys.service.BSysService.searchObjInfo";
        	var sInDatasets = "dsSysPgm=dsSysPgm";
        	var sOutDatasets = "dsSysPgm=dsSysPgm";
        	var sCallbackFunc = "fnTrCallBack";	
        					
            gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
          * @함수명	: fnTrCallBack
          * @desc     	: 트랜잭션 콜백 함수
          */
        this.fnTrCallBack = function (strSvcID,strErrCd,strErrMsg)
        {
        	switch(strSvcID){
        		case "searchObjInfo" :
        			
        			if(this.dsSysPgm.getColumn(0,"OBJ")!=""){
        				var obj = this.dsSysPgm.getColumn(0,"OBJ");
        				var info = obj.split("ㅫ");				
        				this.dsObj.loadXML(info[0]);
        				this.dsObjGrid.loadXML(info[1]);
        				this.dsObjGrid.addColumn("CHECKED","string");
        				this.dsObjDesc.loadXML(info[2]);
        				
        				this.divViewCompBody00.divPaging.staTotalCnt.set_text("Total <fc v='#002266'><b v='true'>"+this.dsObj.rowcount+"</b></fc>");
        				this.divViewCompBody00.divPaging.staTotalCnt.set_visible(true);
        			}
        			if(this.dsSysPgm.getColumn(0,"OBJ_BIND")!=""){
        				var obj = this.dsSysPgm.getColumn(0,"OBJ_BIND");
        				var info = obj.split("ㅫ");
        				
        				this.dsObjBindEn.loadXML(info[0]);
        				this.dsObjBindVi.loadXML(info[1]);
        				this.dsObjBindEs.loadXML(info[2]);
        				this.dsObjBindGrid.loadXML(info[3]);
        			}
        			
        			break;
        		
        		case "savePgmObj" :
        			gfnAlert("저장 되었습니다.");			
        			this.fnSearch();
        			break;
        		
        		default:
        			break;	
        	}
        }

        /**
          * @함수명	: fnBtnFilterOnclick
          * @desc     	: 필터 버튼 Onclick 이벤트
          */
        this.fnBtnFilterOnclick = function(obj,e)
        {
        	this.pdvObjList.trackPopupByComponent(obj, 0, 20);
        }

        /**
          * @함수명	: fnBtnFilterInitOnclick
          * @desc     	: 필터초기화 버튼 Onclick 이벤트
          */
        this.fnBtnFilterInitOnclick = function(obj,e)
        {
        	this.dsObj.set_enableevent(false);
        	this.dsObj.filter("");
        	this.dsObj.set_enableevent(true);
        	for(var i=0;i<this.dsObjList.rowcount;i++){
        		this.dsObjList.setColumn(i,"CHECKED",1);
        	}
        }

        /**
          * @함수명	: fnBtnFilterApplyOnclick
          * @desc     	: 필터적용 버튼 Onclick 이벤트
          */
        this.fnBtnFilterApplyOnclick = function(obj,e)
        {
        	var sFilter = "1==2";
        	this.dsObj.set_enableevent(false);
        	for(var i=0;i<this.dsObjList.rowcount;i++){
        		sFilter += this.dsObjList.getColumn(i,"CHECKED")==1?" || TYPE=='"+this.dsObjList.getColumn(i,"ID")+"'":"";
        	}
        	this.dsObj.filter(sFilter);
        	this.dsObj.set_enableevent(true);
        	this.pdvObjList.closePopup();
        }

        /**
          * @함수명	: fnBtnCompLoadOnclick
          * @desc     	: 컴포넌트 불러오기 버튼 Onclick 이벤트. fnBtnCompLoadOnclick -> fnSearchComp -> fnSearchCompCallBack 순으로 호촐됨.
          */
        this.fnBtnCompLoadOnclick = function(obj,e)
        {
        	this.dsObj.clearData();
        	this.dsObjGrid.deleteAll();
        	this.dsObjBindEn.clear();
        	this.dsObjBindVi.clear();
        	this.dsObjBindEs.clear();
        	
        	this.divViewCompBody00.progress.set_pos(0);
        	this.fvWorkingRow = 0;				// 나눠서 로딩할때 마지막까지 로딩한 로우.
        	this.fvRealBlock = 0; 				// 나눠서 로딩할 총 순번
        	this.fvCntBlock = 0; 				// 나눠서 로딩할 때 진행중인 순번
        	this.fvArrAllComp = new Array();
        	
        	this.fnSearchComp(this.fvForm, 1);	
        }

        /**
          * @함수명	: fnSearchComp
          * @input		: obj(오브젝트)
          * @desc     	: 화면 컴포넌트를 조회하여 this.fvArrAllComp 배열에 담아 놓는다. fnBtnCompLoadOnclick -> fnSearchComp -> fnSearchCompCallBack 순으로 호촐됨.
          */
        var bFirstIn = true;	//처음 펑션 호출 하면 true로 바뀜. 최초 호출 여부 판단.
        var oLastComp = ""; 	//최초 호출시 마지막 컴포넌트 오브젝트. for문이 마지막 컴포넌트면 콜백함수 호출.
        this.fnSearchComp = function(obj)
        {	
        	if(bFirstIn){
        		oLastComp = obj.components[obj.components.length - 1];	
        		bFirstIn = false;
        	}
        	
        	var components = obj.components;
        	for(var i=0, x=components.length; i<x; i++){
        		this.fvArrAllComp[this.fvArrAllComp.length] = components[i];		
        		var url = components[i].url;
        		
        		var bChkCcomp = false;
        		if(!gfnIsNull(url) && url.indexOf("CCOMP::") >= 0){
        			bChkCcomp = true;
        		}
        		
        		if(!bChkCcomp){
        			var compVal = components[i].valueOf();
        			if(compVal == "[object Div]" || compVal == "[object Tab]" || compVal == "[object Tabpage]"){
        				this.fnSearchComp(components[i]);
        			}
        		}
        		
        		if(oLastComp.id == components[i].id){			
        			//콜백함수 호출 
        			this.fnSearchCompCallBack();
        			break;
        		}	
        	}
        }

        /**
          * @함수명	: fnSearchCompCallBack
          * @input		: obj(오브젝트)
          * @desc     	: fnSearchComp CallBack fnBtnCompLoadOnclick -> fnSearchComp -> fnSearchCompCallBack 순으로 호촐됨.
          */
        this.fnSearchCompCallBack = function()
        {	
        	var openId = application.gdsOpenMenu.getColumn(application.gdsOpenMenu.rowposition, "OPEN_ID");
        	var framesInfo = application.gv_workFrameSet.frames
        	
        	if(framesInfo[openId]){
        		//공통버튼
        		for(var i=0, x=framesInfo[openId].form.divComBtns.components.length; i<x; i++){			
        			this.fvArrAllComp[this.fvArrAllComp.length] = framesInfo[openId].form.divComBtns.components[i];
        		}		
        		
        		//리모콘 버튼
         		var oRemoteDiv = this.lookup(openId + "_divRemote"); 
        		if(oRemoteDiv){
        			for(var i=0, x=oRemoteDiv.components.length; i<x; i++){
        				if(oRemoteDiv.components[i] instanceof Button){
        					oRemoteDiv.components[i].objNm = "(리모콘)" + oRemoteDiv.components[i].text;
        					this.fvArrAllComp[this.fvArrAllComp.length] = oRemoteDiv.components[i];
        				}
        				
        			}
        		}
        	}
        	
        	this.fvRealBlock = Math.ceil(this.fvArrAllComp.length/10);
        	bFirstIn = true;

        	this.dsObj.set_enableevent(false);
        	this.dsObjGrid.set_enableevent(false);
        	this.divViewCompBody00.grdObj.set_enableevent(false);
        	this.divViewCompBody01.grdObjGrid.set_enableevent(false);
        	
        	this.setTimer(11, 100);

        	this.fnGetCompInfo();
        }

        /**
          * @함수명	: fnGetCompInfo
          * @input		: ingRow(작업중인 로우)
          * @desc     	: this.fvArrAllComp 배열에 담긴 컴포넌트 정보를 토대로 데이터셋 데이터 생성
          */
        this.fnGetCompInfo = function(ingRow)
        {
        	var i = (gfnIsNull(ingRow) ? 0 : ingRow);

        	for(var forCnt=i+10; i<forCnt; i++){
         		if(gfnIsNull(this.fvArrAllComp[i])) break;

         		var name = this.fvArrAllComp[i].name;
         		if(gfnIsNull(name)) continue;
         		
        		var url = this.fvArrAllComp[i].url;
        		var allCompVal = this.fvArrAllComp[i].valueOf();
        		if(allCompVal == "[object Grid]" || (url && url.indexOf("CompNFileUpDown") >= 0)){
        			var nRow = this.dsObjGrid.addRow();
        			this.dsObjGrid.setColumn(nRow,"TEXT", gfnGetObjNM(this.fvArrAllComp[i]));
        			this.dsObjGrid.setColumn(nRow,"NAME", name);
        			this.dsObjGrid.setColumn(nRow,"TYPE", allCompVal);
        			
        			var sPath = gfnGetCompPath(this.fvArrAllComp[i]).substr(8);
        			this.dsObjGrid.setColumn(nRow,"PATH", sPath);
        			continue;
         		}
         		
         		
         		
        //  		//if(!bChkCcomp){
        // 			if(allCompVal == "[object Tab]" || allCompVal == "[object Tabpage]"){
        // 				this.fnGetCompInfo(this.fvArrAllComp[i]);
        // 			}
        // 		//}
         		
         		if(name.indexOf("ViewComp") >= 0 || name.indexOf("staWarning") >= 0) continue;
         		
         		var idx = this.dsObj.addRow();
         		
         		var dupNameRow = this.dsObj.findRow("NAME", name);
         		if(dupNameRow > 0){
        			this.dsObj.setColumn(idx,"NAME",name + "_" + (dupNameRow+1));
         		}else{
        			this.dsObj.setColumn(idx,"NAME",name);
         		}

        	    this.dsObj.setColumn(idx,"TYPE",allCompVal);	    
        	    
        	    //공통버튼이면 substr 하지 않는다.
        	    var path = gfnGetCompPath(this.fvArrAllComp[i]);
        		if(path.indexOf("divComBtns") > -1){
        			this.dsObj.setColumn(idx,"PATH", path);
        		}else{
        			this.dsObj.setColumn(idx,"PATH", path.substr(8));
        			
        			path = path.substr(8);
        			path = String(path.match(/\./gi));
        			var arrRtn = path.split(",");
        			
        			if(gfnIsNull(arrRtn)){
        				this.dsObj.setColumn(idx,"LEVEL", 0);
        			}else{
        				this.dsObj.setColumn(idx,"LEVEL", arrRtn.length);
        			}			
        		}	
        	    
        	    var enableChk = (this.fvArrAllComp[i].enable ? 1 : 0 );
        	    var readChk = (this.fvArrAllComp[i].readonly ? 0 : 1 );
        	    
        	    if(allCompVal=="[object Edit]" || allCompVal=="[object MaskEdit]"
        			|| allCompVal=="[object Radio]" || allCompVal=="[object CheckBox]"
        			|| allCompVal=="[object Combo]" || allCompVal=="[object Calendar]"
        			|| allCompVal=="[object Spin]" || allCompVal=="[object TextArea]"){
        			this.dsObj.setColumn(idx,"ENABLE_A",readChk);
        		}else{
        			this.dsObj.setColumn(idx,"ENABLE_A",enableChk);
        		}
        	    this.dsObj.setColumn(idx,"ENABLE_B",0);
        	    this.dsObj.setColumn(idx,"ENABLE_C",0);
        	    this.dsObj.setColumn(idx,"ENABLE_D",0);
        	    this.dsObj.setColumn(idx,"ENABLE_E",0);
        	    this.dsObj.setColumn(idx,"ENABLE_F",0);
        	    this.dsObj.setColumn(idx,"ENABLE_G",0);
        	    this.dsObj.setColumn(idx,"ENABLE_H",0);
        	    this.dsObj.setColumn(idx,"ENABLE_I",0);
        	    this.dsObj.setColumn(idx,"ENABLE_J",0);
        	    
        	    var visibleChk = (this.fvArrAllComp[i].visible ? 1 : 0 );
        	    this.dsObj.setColumn(idx,"VISIBLE_A",visibleChk);
        	    this.dsObj.setColumn(idx,"VISIBLE_B",0);
        	    this.dsObj.setColumn(idx,"VISIBLE_C",0);
        	    this.dsObj.setColumn(idx,"VISIBLE_D",0);
        	    this.dsObj.setColumn(idx,"VISIBLE_E",0);
        	    this.dsObj.setColumn(idx,"VISIBLE_F",0);
        	    this.dsObj.setColumn(idx,"VISIBLE_G",0);
        	    this.dsObj.setColumn(idx,"VISIBLE_H",0);
        	    this.dsObj.setColumn(idx,"VISIBLE_I",0);
        	    this.dsObj.setColumn(idx,"VISIBLE_J",0);
        	    
        	    this.dsObj.setColumn(idx,"ESSENTIAL_A",0);
        	    this.dsObj.setColumn(idx,"ESSENTIAL_B",0);
        	    this.dsObj.setColumn(idx,"ESSENTIAL_C",0);
        	    this.dsObj.setColumn(idx,"ESSENTIAL_D",0);
        	    this.dsObj.setColumn(idx,"ESSENTIAL_E",0);
        	    this.dsObj.setColumn(idx,"ESSENTIAL_F",0);
        	    this.dsObj.setColumn(idx,"ESSENTIAL_G",0);
        	    this.dsObj.setColumn(idx,"ESSENTIAL_H",0);
        	    this.dsObj.setColumn(idx,"ESSENTIAL_I",0);
        	    this.dsObj.setColumn(idx,"ESSENTIAL_J",0);

        		this.dsObj.setColumn(idx,"TEXT", gfnGetObjNM(this.fvArrAllComp[i]));
        	}
        	
        	this.fvCntBlock++;	
        	this.fvWorkingRow = i;
        }

        /**
        	@function	fnBtnCompLoadSrch()
        	@desc   	추가된 컴포넌트 검색
        */
        this.fnBtnCompLoadSrch = function(obj,e)
        {
        	this.dsObjGrid.addColumn("COMP_ADD_DESC", "string");

        	this.fnGetAddCompInfo(this.fvForm);
        	this.divViewCompBody00.divPaging.staTotalCnt.set_text("Total <fc v='#002266'><b v='true'>"+this.dsObj.rowcount+"</b></fc>");
        	this.divViewCompBody00.divPaging.staTotalCnt.set_visible(true);
        }

        /**
        	@function	fnGetAddCompInfo()
        	@param		obj {Object} 화면 폼 오브젝트		
        	@desc   	화면 Form의 추가된 컴포넌트를 가져옴
        */
        this.fnGetAddCompInfo = function(obj)
        {
        	var components = obj.components;
        	
        	for(var i=0; i<components.length; i++){
        		
        		var name = components[i].name;
        		if(gfnIsNull(name)) continue;

        		var url = components[i].url;
        		var compVal = components[i].valueOf();
        		
        		if(compVal == "[object Grid]" || (url && url.indexOf("CompNFileUpDown") >= 0)){
        			var findRow = this.dsObjGrid.findRow("PATH", gfnGetCompPath(components[i]).substr(8));
        			if(findRow > -1) continue;
        			
        			var nRow = this.dsObjGrid.addRow();
        			this.dsObjGrid.setColumn(nRow,"TEXT", gfnGetObjNM(components[i]));
        			this.dsObjGrid.setColumn(nRow,"NAME", name);
        			this.dsObjGrid.setColumn(nRow,"TYPE", compVal);
        			this.dsObjGrid.setColumn(nRow,"PATH", gfnGetCompPath(components[i]).substr(8));			
        			this.dsObjGrid.setColumn(nRow,"COMP_ADD_DESC","추가");
        			continue;
         		}
         		
        		var bChkCcomp = false;
        		if(!gfnIsNull(url) && url.indexOf("CCOMP::") >= 0){
        			bChkCcomp = true;
        		}
        		
        		if(!bChkCcomp){			
        			if(compVal == "[object Div]" || compVal == "[object Tab]" || compVal == "[object Tabpage]"){
        				this.fnGetAddCompInfo(components[i]);
        			}
        		}
        		
        		if(name.indexOf("ViewComp") >= 0) continue;
        		if(name.indexOf("staWarning") >= 0) continue;
        	
        		var path = gfnGetCompPath(components[i]).substr(8);
        		
        		var chkIdx = this.dsObj.findRow("PATH",path);
        		if(chkIdx >= 0) continue;
        		
        		var idx = this.dsObj.addRow();
        		this.dsObj.setColumn(idx,"NAME",name);
        	    this.dsObj.setColumn(idx,"TYPE",compVal);
        	    this.dsObj.setColumn(idx,"COMP_ADD_DESC","추가");
        	    
        		//공통버튼이면 substr 하지 않는다.
        	    var path = gfnGetCompPath(components[i]);
        		if(path.indexOf("divComBtns") > -1){
        			this.dsObj.setColumn(idx,"PATH", path);
        		}else{
        			this.dsObj.setColumn(idx,"PATH", path.substr(8));
        			
        			path = path.substr(8);
        			path = String(path.match(/\./gi));
        			var arrRtn = path.split(",");
        			
        			if(gfnIsNull(arrRtn)){
        				this.dsObj.setColumn(idx,"LEVEL", 0);
        			}else{
        				this.dsObj.setColumn(idx,"LEVEL", arrRtn.length);
        			}	
        		}
        	    
        	    var enableChk = (components[i].enable ? 1 : 0 );
        	    var readChk = (components[i].readonly ? 0 : 1 );
        	    
        	    if(compVal=="[object Edit]" || compVal=="[object MaskEdit]"
        			|| compVal=="[object Radio]" || compVal=="[object CheckBox]"
        			|| compVal=="[object Combo]" || compVal=="[object Calendar]"
        			|| compVal=="[object Spin]" || compVal=="[object TextArea]"){
        			this.dsObj.setColumn(idx,"ENABLE_A",readChk);
        		}else{
        			this.dsObj.setColumn(idx,"ENABLE_A",enableChk);
        		}
        	    
        	    this.dsObj.setColumn(idx,"ENABLE_B",0);
        	    this.dsObj.setColumn(idx,"ENABLE_C",0);
        	    this.dsObj.setColumn(idx,"ENABLE_D",0);
        	    this.dsObj.setColumn(idx,"ENABLE_E",0);
        	    this.dsObj.setColumn(idx,"ENABLE_F",0);
        	    this.dsObj.setColumn(idx,"ENABLE_G",0);
        	    this.dsObj.setColumn(idx,"ENABLE_H",0);
        	    this.dsObj.setColumn(idx,"ENABLE_I",0);
        	    this.dsObj.setColumn(idx,"ENABLE_J",0);
        	    
        	    var visibleChk = (components[i].visible ? 1 : 0 );
        	    this.dsObj.setColumn(idx,"VISIBLE_A",visibleChk);
        	    this.dsObj.setColumn(idx,"VISIBLE_B",0);
        	    this.dsObj.setColumn(idx,"VISIBLE_C",0);
        	    this.dsObj.setColumn(idx,"VISIBLE_D",0);
        	    this.dsObj.setColumn(idx,"VISIBLE_E",0);
        	    this.dsObj.setColumn(idx,"VISIBLE_F",0);
        	    this.dsObj.setColumn(idx,"VISIBLE_G",0);
        	    this.dsObj.setColumn(idx,"VISIBLE_H",0);
        	    this.dsObj.setColumn(idx,"VISIBLE_I",0);
        	    this.dsObj.setColumn(idx,"VISIBLE_J",0);
        	    
        	    this.dsObj.setColumn(idx,"ESSENTIAL_A",0);
        	    this.dsObj.setColumn(idx,"ESSENTIAL_B",0);
        	    this.dsObj.setColumn(idx,"ESSENTIAL_C",0);
        	    this.dsObj.setColumn(idx,"ESSENTIAL_D",0);
        	    this.dsObj.setColumn(idx,"ESSENTIAL_E",0);
        	    this.dsObj.setColumn(idx,"ESSENTIAL_F",0);
        	    this.dsObj.setColumn(idx,"ESSENTIAL_G",0);
        	    this.dsObj.setColumn(idx,"ESSENTIAL_H",0);
        	    this.dsObj.setColumn(idx,"ESSENTIAL_I",0);
        	    this.dsObj.setColumn(idx,"ESSENTIAL_J",0);
        	    
        	    this.dsObj.setColumn(idx,"TEXT", gfnGetObjNM(components[i]));
        	}
        	
        	//추가된 컴포넌트 찾기, 화면에서 없어진 컴포넌트 찾기 전 공통버튼과 리모컨버튼의 오브젝트를 가진 배열을 구해온다.
        	var arrCommBtnIds = this.fnGetArrCommBtns();
        		
        	for(var i=0; i<arrCommBtnIds.length; i++){	
        		var nRow = this.dsObj.findRow("NAME", arrCommBtnIds[i].id);
        		if(nRow < 0){
        			var idx = this.dsObj.addRow();
        			var arrCommBtnIdsVal = arrCommBtnIds[i].valueOf();
        			this.dsObj.setColumn(idx,"NAME",arrCommBtnIds[i].id);
        			this.dsObj.setColumn(idx,"TYPE",arrCommBtnIdsVal);
        			this.dsObj.setColumn(idx,"COMP_ADD_DESC","추가");
        			
        			//공통버튼이면 substr 하지 않는다.
        			var path = gfnGetCompPath(arrCommBtnIds[i]);
        			this.dsObj.setColumn(idx,"PATH",path);
        			
        			//path = path.substr(8);
        			path = String(path.match(/\./gi));
        			var arrRtn = path.split(",");
        			
        			if(gfnIsNull(arrRtn)){
        				this.dsObj.setColumn(idx,"LEVEL", 0);
        			}else{
        				this.dsObj.setColumn(idx,"LEVEL", arrRtn.length);
        			}	
        	    
        			if(arrCommBtnIdsVal=="[object Edit]" || arrCommBtnIdsVal=="[object MaskEdit]"
        				|| arrCommBtnIdsVal=="[object Radio]" || arrCommBtnIdsVal=="[object CheckBox]"
        				|| arrCommBtnIdsVal=="[object Combo]" || arrCommBtnIdsVal=="[object Calendar]"
        				|| arrCommBtnIdsVal=="[object Spin]" || arrCommBtnIdsVal=="[object TextArea]"){
        				this.dsObj.setColumn(idx,"ENABLE_A",readChk);
        			}else{
        				this.dsObj.setColumn(idx,"ENABLE_A",enableChk);
        			}
        			
        			this.dsObj.setColumn(idx,"ENABLE_B",0);
        			this.dsObj.setColumn(idx,"ENABLE_C",0);
        			this.dsObj.setColumn(idx,"ENABLE_D",0);
        			this.dsObj.setColumn(idx,"ENABLE_E",0);
        			this.dsObj.setColumn(idx,"ENABLE_F",0);
        			this.dsObj.setColumn(idx,"ENABLE_G",0);
        			this.dsObj.setColumn(idx,"ENABLE_H",0);
        			this.dsObj.setColumn(idx,"ENABLE_I",0);
        			this.dsObj.setColumn(idx,"ENABLE_J",0);
        			
        			var visibleChk = (arrCommBtnIds[i].visible ? 1 : 0 );
        			this.dsObj.setColumn(idx,"VISIBLE_A",visibleChk);
        			this.dsObj.setColumn(idx,"VISIBLE_B",0);
        			this.dsObj.setColumn(idx,"VISIBLE_C",0);
        			this.dsObj.setColumn(idx,"VISIBLE_D",0);
        			this.dsObj.setColumn(idx,"VISIBLE_E",0);
        			this.dsObj.setColumn(idx,"VISIBLE_F",0);
        			this.dsObj.setColumn(idx,"VISIBLE_G",0);
        			this.dsObj.setColumn(idx,"VISIBLE_H",0);
        			this.dsObj.setColumn(idx,"VISIBLE_I",0);
        			this.dsObj.setColumn(idx,"VISIBLE_J",0);
        			
        			this.dsObj.setColumn(idx,"ESSENTIAL_A",0);
        			this.dsObj.setColumn(idx,"ESSENTIAL_B",0);
        			this.dsObj.setColumn(idx,"ESSENTIAL_C",0);
        			this.dsObj.setColumn(idx,"ESSENTIAL_D",0);
        			this.dsObj.setColumn(idx,"ESSENTIAL_E",0);
        			this.dsObj.setColumn(idx,"ESSENTIAL_F",0);
        			this.dsObj.setColumn(idx,"ESSENTIAL_G",0);
        			this.dsObj.setColumn(idx,"ESSENTIAL_H",0);
        			this.dsObj.setColumn(idx,"ESSENTIAL_I",0);
        			this.dsObj.setColumn(idx,"ESSENTIAL_J",0);
        			
        			this.dsObj.setColumn(idx,"TEXT", gfnGetObjNM(arrCommBtnIds[i]));
        		}
        	}
        }

        /**
          * @함수명	: fnGetArrCommBtns
          * @return		: arrCommBtn(Array) id1, id2, id3......
          * @desc     	: 추가된 컴포넌트 찾기, 화면에서 없어진 컴포넌트 찾기 전 공통버튼과 리모컨버튼의 오브젝트를 가진 배열을 구한다.
          */
        this.fnGetArrCommBtns = function()
        {
        	var openId = application.gdsOpenMenu.getColumn(application.gdsOpenMenu.rowposition, "OPEN_ID");
        	var framesInfo = application.gv_workFrameSet.frames;
        	
        	if(framesInfo[openId]){
        		//화면에 없어진 컴포넌트 체크시 공통버튼은 대상에서 제외
        		var arrCommBtn = new Array();
        		for(var i=0, x=framesInfo[openId].form.divComBtns.components.length; i<x; i++){
        			arrCommBtn[arrCommBtn.length] = framesInfo[openId].form.divComBtns.components[i];
        		}
        			
        		//화면에 없어진 컴포넌트 체크시 리모콘버튼은 대상에서 제외
        		var oRemoteDiv = this.lookup(openId + "_divRemote");
        		if(oRemoteDiv){
        			for(var i=0, x=oRemoteDiv.components.length; i<x; i++){
        				if(oRemoteDiv.components[i] instanceof Button){
        					oRemoteDiv.components[i].objNm = "(리모콘)" + oRemoteDiv.components[i].text;
        					arrCommBtn[arrCommBtn.length] = oRemoteDiv.components[i];
        				}
        			}
        		}
        			
        		return arrCommBtn;
        	}		
        }

        /**
        	@function	fnDelCompChk()
        	@desc   	화면에 없어진 컴포넌트 체크
        */
        this.fnDelCompChk = function(obj,e)
        {		
        	var strCommBtns = this.fnGetArrCommBtns();	
        	
        	var strCommBtnIds = "";
        	for(var i=0; i<strCommBtns.length; i++){
        		strCommBtnIds += strCommBtns[i].id;		
        		if(i > 0) strCommBtnIds += ",";
        	}
        	
        	this.fnGetDelCompInfo(this.fvForm);
        	
        	for(var i=0; i<this.dsObj.rowcount; i++){
        		var chkIdx = this.dsDelChkObj.findRow("PATH", this.dsObj.getColumn(i,"PATH"));
        		
        		/*
        			공통버튼, 리모콘버튼 제외 조건 - strCommBtnIds.indexOf(this.dsObj.getColumn(i,"NAME")) < 0
        		*/
        		if(chkIdx<0 && strCommBtnIds.indexOf(this.dsObj.getColumn(i,"NAME")) < 0){
        			this.dsObj.setColumn(i,"CHECKED",1);
        			this.dsObj.setColumn(i,"COMP_ADD_DESC","삭제");
        		}
        	}
        		
        	for(var i=0; i<this.dsObjGrid.rowcount; i++){
        		var chkIdx = this.dsDelChkGridObj.findRow("PATH", this.dsObjGrid.getColumn(i,"PATH"));
        		
        		if(chkIdx<0){
        			this.dsObjGrid.addColumn("COMP_ADD_DESC", "string");
        			this.dsObjGrid.setColumn(i, "COMP_ADD_DESC","삭제");
        		}
        	}
        }

        /**
          * @함수명	: fnGetDelCompInfo
          * @param		: obj {Object} 화면 폼 오브젝트	
          * @desc     	: 화면 Form에는 있는데 obj정보에는 없는 컴포넌트를 가져옴
          */
        this.fnGetDelCompInfo = function(obj)
        {
        	var components = obj.components;
        	
        	for(var i=0; i<components.length; i++){
        		
        		var name = components[i].name;
        		if(gfnIsNull(name)) continue;

        		var url = components[i].url;
        		var compVal = components[i].valueOf();
        		if(compVal == "[object Grid]" || (url && url.indexOf("CompNFileUpDown") >= 0)){
        			var idx = this.dsDelChkGridObj.addRow();
        			this.dsDelChkGridObj.setColumn(idx,"PATH", gfnGetCompPath(components[i]).substr(8));
        			continue;
         		}
        		
        		var bChkCcomp = false;
        		if(!gfnIsNull(url) && url.indexOf("CCOMP::") >= 0){
        			bChkCcomp = true;
        		}
        		
        		if(!bChkCcomp){
        			if(compVal == "[object Div]" || compVal == "[object Tab]" || compVal == "[object Tabpage]"){
        				this.fnGetDelCompInfo(components[i]);
        			}
        		}
        		
        		if(name.indexOf("ViewComp") >= 0) continue;
        		if(name.indexOf("staWarning") >= 0) continue;
        		
        		//공통버튼이면 substr 하지 않는다.
        		var idx = this.dsDelChkObj.addRow();
        		
        		var path = gfnGetCompPath(components[i]);
        		if(path.indexOf("divComBtns") > -1){
        			this.dsDelChkObj.setColumn(idx,"PATH", path);
        		}else{
        			this.dsDelChkObj.setColumn(idx,"PATH", path.substr(8));
        		}		
        	}
        }

        /**
        	@function	fnDelRow()
        	@desc   	컴포넌트 행삭제
        */
        this.fnDelRow = function(obj,e)
        {	
        	this.divViewCompBody00.grdObj.set_enableevent(false);
        	
        	gfnDsChkDel(this.dsObj);
        	
        	this.divViewCompBody00.grdObj.set_enableevent(true);
        }

        /**
        	@function	fnPreSave()
        	@desc   	저장 전 체크
        */
        this.fnPreSave = function()
        {
        	if(!this.confirm("저장 하시겠습니까?")) return false;

        	//컴포넌트 데이터 변환 시작
        	this.dsObjBindEn.clear();
        	this.dsObjBindVi.clear();
        	this.dsObjBindEs.clear();
        	
        	this.dsObjBindEn.addColumn("TYPE","string");
        	this.dsObjBindVi.addColumn("TYPE","string");
        	this.dsObjBindEs.addColumn("TYPE","string");	
        	
        	this.dsObj.set_enableevent(false);
        	this.dsObj.filter("");
        	
        	for(var i=0; i<this.dsObj.rowcount; i++){
        		if(this.dsObj.getColumn(i,"TYPE")=="[object Static]" || this.dsObj.getColumn(i,"TYPE")=="[object Button]"){
        			this.dsObj.setColumn(i, "ESSENTIAL_A", "");
        			this.dsObj.setColumn(i, "ESSENTIAL_B", "");
        			this.dsObj.setColumn(i, "ESSENTIAL_C", "");
        			this.dsObj.setColumn(i, "ESSENTIAL_D", "");
        			this.dsObj.setColumn(i, "ESSENTIAL_E", "");
        			this.dsObj.setColumn(i, "ESSENTIAL_F", "");
        			this.dsObj.setColumn(i, "ESSENTIAL_G", "");
        			this.dsObj.setColumn(i, "ESSENTIAL_H", "");
        			this.dsObj.setColumn(i, "ESSENTIAL_I", "");
        			this.dsObj.setColumn(i, "ESSENTIAL_J", "");
        		}
        	
        		this.dsObjBindEn.addColumn(this.dsObj.getColumn(i,"NAME"),"string");
        		this.dsObjBindVi.addColumn(this.dsObj.getColumn(i,"NAME"),"string");
        		this.dsObjBindEs.addColumn(this.dsObj.getColumn(i,"NAME"),"string");		
        		this.dsObj.setColumn(i, "CHECKED", "");
        		this.dsObj.setColumn(i, "COMP_ADD_DESC", "");
        	}	
        	
        	for(var i=0; i<10; i++){
        		var gubun = String.fromCharCode("A".charCodeAt(0) +i);
        		
        		this.dsObjBindEn.addRow();
        		this.dsObjBindVi.addRow();
        		this.dsObjBindEs.addRow();
        		
        		this.dsObjBindEn.setColumn(i,"TYPE",gubun);
        		this.dsObjBindVi.setColumn(i,"TYPE",gubun);
        		this.dsObjBindEs.setColumn(i,"TYPE",gubun);
        		
        		for(var j=0; j<this.dsObj.rowcount; j++){
        			var objId = this.dsObj.getColumn(j,"NAME");
        			
        			var colNm = "ENABLE_"+gubun;
        			var isEn;
        			
        			if(this.dsObj.getColumn(j,"TYPE")=="[object Edit]" || this.dsObj.getColumn(j,"TYPE")=="[object MaskEdit]"
        				|| this.dsObj.getColumn(j,"TYPE")=="[object Radio]" || this.dsObj.getColumn(j,"TYPE")=="[object CheckBox]"
        				|| this.dsObj.getColumn(j,"TYPE")=="[object Combo]" || this.dsObj.getColumn(j,"TYPE")=="[object Calendar]"
        				|| this.dsObj.getColumn(j,"TYPE")=="[object Spin]" || this.dsObj.getColumn(j,"TYPE")=="[object TextArea]"){
        				isEn = (this.dsObj.getColumn(j,colNm)=="1"?"false":"true");
        			}else{
        				isEn = (this.dsObj.getColumn(j,colNm)=="1"?"true":"false");
        			}
        			
        			this.dsObjBindEn.setColumn(i,objId,isEn);
        			
        			colNm = "VISIBLE_"+gubun;
        			var isVi = (this.dsObj.getColumn(j,colNm)=="1"?"true":"false");
        			
        			this.dsObjBindVi.setColumn(i,objId,isVi);
        			
        			colNm = "ESSENTIAL_"+gubun;
        			var isEs = (this.dsObj.getColumn(j,colNm)=="1"?"true":"false");
        			
        			this.dsObjBindEs.setColumn(i,objId,isEs);
        		}
        	}
        	//컴포넌트 데이터 변환 끝
        	
        	//그리드 데이터 변환 시작
        	this.dsObjBindGrid.clear();
        	this.dsObjBindGrid.addColumn("TYPE","string");
        	
        	for(var i=0; i<this.dsObjGrid.rowcount; i++){
        		this.dsObjBindGrid.addColumn(this.dsObjGrid.getColumn(i,"NAME"),"string");
        		this.dsObjGrid.setColumn(i, "CHECKED", "");
        		this.dsObjGrid.setColumn(i, "COMP_ADD_DESC", "");
        	}
        	
        	this.dsObjGrid.set_enableevent(false);
        	for(var i=0; i<10; i++){
        		var gubun = String.fromCharCode("A".charCodeAt(0) +i);
        		
        		this.dsObjBindGrid.addRow();
        		this.dsObjBindGrid.setColumn(i,"TYPE",gubun);
        		
        		for(var j=0; j<this.dsObjGrid.rowcount; j++){
        			var objId = this.dsObjGrid.getColumn(j,"NAME");
        			var value = this.dsObjGrid.getColumn(j,"MODE_" + gubun);
        			if(gfnIsNull(value)){
        				value = "default";
        			}
        			this.dsObjBindGrid.setColumn(i, objId, value);
        		}
        	}
        	this.dsObjGrid.set_enableevent(true);
        	//그리드 데이터 변환 끝
        	
        	var obj = this.dsObj.saveXML()+"ㅫ"+this.dsObjGrid.saveXML()+"ㅫ"+this.dsObjDesc.saveXML();
        	var objBind = this.dsObjBindEn.saveXML()+"ㅫ"+this.dsObjBindVi.saveXML()+"ㅫ"+this.dsObjBindEs.saveXML()+"ㅫ"+this.dsObjBindGrid.saveXML();
        	
        	this.dsSysPgm.setColumn(0,"OBJ",obj);
        	this.dsSysPgm.setColumn(0,"OBJ_BIND",objBind);
        	
        	this.dsObj.set_enableevent(true);
        	
        	return true;
        }

        /**
        	@function	fnSave()
        	@desc   	저장
        */
        this.fnSave = function(obj,e)
        {	
        	
        	if(!this.fnPreSave()) return false;

        	var sSvcID = "savePgmObj";
        	var sController = "epro.sys.service.BSysService.savePgmObj";
        	var sInDatasets = "dsSysPgm=dsSysPgm:U";
        	var sOutDatasets = "";
        	var sCallbackFunc = "fnTrCallBack";
        	gfnTran(this, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
        }

        /**
        	@function	fnCompXml()
        	@desc   	바인딩소스만들기
        */
        this.fnCompXml = function(obj,e)
        {
        	this.dsObj.set_enableevent(false);
        	var tmpDs = new Dataset;
        	
        	this.dsObj.filter("CHECKED==1 && String(PATH).indexOf('divComBtns') < 0");

        	if(this.dsObj.rowcount > 0){
        		tmpDs.copyData(this.dsObj, true);
        		this.dsObj.filter("");
        		this.dsObj.set_enableevent(true);
        	}else{
        		this.alert("선택된 행이 없습니다.");
        		this.dsObj.filter("");
        		this.dsObj.set_enableevent(true);
        		return;
        	}
        	
        	var str = "\n";
        		
        	for(var i=0; i<tmpDs.rowcount; i++){
        		
        		str += "<BindItem id=\"";
        		str += tmpDs.getColumn(i,"NAME")+"Vi\" compid=\"";
        		str += tmpDs.getColumn(i,"PATH")+"\" propid=\"visible\" ";
        		str += "datasetid=\"dsObjBindVi\" columnid=\"";
        		str += tmpDs.getColumn(i,"NAME")+"\"/>\n";
        		
        		if(tmpDs.getColumn(i,"TYPE")=="[object Edit]" || tmpDs.getColumn(i,"TYPE")=="[object MaskEdit]"			
        			|| tmpDs.getColumn(i,"TYPE")=="[object Radio]" || tmpDs.getColumn(i,"TYPE")=="[object CheckBox]"
        			|| tmpDs.getColumn(i,"TYPE")=="[object Combo]" || tmpDs.getColumn(i,"TYPE")=="[object Calendar]"
        			|| tmpDs.getColumn(i,"TYPE")=="[object Spin]" || tmpDs.getColumn(i,"TYPE")=="[object TextArea]"){
        			
        			str += "<BindItem id=\"";
        			str += tmpDs.getColumn(i,"NAME")+"En\" compid=\"";
        			str += tmpDs.getColumn(i,"PATH")+"\" propid=\"readonly\" ";
        			str += "datasetid=\"dsObjBindEn\" columnid=\"";
        			str += tmpDs.getColumn(i,"NAME")+"\"/>\n";
        			
        		}else{
        		
        			str += "<BindItem id=\"";
        			str += tmpDs.getColumn(i,"NAME")+"En\" compid=\"";
        			str += tmpDs.getColumn(i,"PATH")+"\" propid=\"enable\" ";
        			str += "datasetid=\"dsObjBindEn\" columnid=\"";
        			str += tmpDs.getColumn(i,"NAME")+"\"/>\n";
        			
        		}
        	}
        	
        	trace(str);
        }

        /**
          * @함수명	: fnGridXml
          * @desc     	: 그리드 바인딩소스만들기
          */
        this.fnGridXml = function(obj,e)
        {	
        	this.dsObjGrid.set_enableevent(false);
        	
        	var str = "\n";		
        	for(var i=0; i<this.dsObjGrid.rowcount; i++){
        		if(this.dsObjGrid.getColumn(i, "TYPE").indexOf("Grid") < 0) continue;
        		
        		str += "<BindItem id=\"";
        		str += this.dsObjGrid.getColumn(i,"NAME")+"FormatId\" compid=\"";
        		str += this.dsObjGrid.getColumn(i,"PATH")+"\" propid=\"formatid\" ";
        		str += "datasetid=\"dsObjBindGrid\" columnid=\"";
        		str += this.dsObjGrid.getColumn(i,"NAME")+"\"/>\n";
        	}
        	this.dsObjGrid.set_enableevent(true);
        	
        	trace(str);
        }

        /**
        	@function	fnClose()
        	@desc   	닫기
        */
        this.fnClose = function(obj,e)
        {
        	this.close();
        }

        this.BComObjMgmtPop_ontimer = function(obj,e)
        {
        	if(e.timerid == 11){		
        		if(this.fvRealBlock == this.fvCntBlock){
        			this.killTimer(11);
        			this.divViewCompBody00.progress.set_pos(100);
        			this.divViewCompBody00.progress.set_visible(false);
        		}else{
        			this.divViewCompBody00.progress.set_visible(true);
        			this.divViewCompBody00.progress.set_step( 100 / this.fvRealBlock );			
        			this.divViewCompBody00.progress.stepIt();
        			
        			this.fnGetCompInfo(this.fvWorkingRow);
        			
        			this.dsObj.set_enableevent(true);
        			this.dsObjGrid.set_enableevent(true);
        			this.divViewCompBody00.grdObj.set_enableevent(true);
        			this.divViewCompBody01.grdObjGrid.set_enableevent(true);
        		}
        		
        		this.divViewCompBody00.divPaging.staTotalCnt.set_text("Total <fc v='#002266'><b v='true'>"+this.dsObj.rowcount+"</b></fc>");
        		this.divViewCompBody00.divPaging.staTotalCnt.set_visible(true);
        	}
        }

        this.divViewCompBody00_grdObj_onhscroll = function(obj,e)
        {	
        // 	this.divViewCompBody01.grdObjGrid.removeEventHandler("onhscroll", this.divViewCompBody01_grdObjGrid_onhscroll, this);
         	this.divViewCompBody01.grdObjGrid.hscrollbar.set_pos(e.pos);	
        }

        this.divViewCompBody01_grdObjGrid_onhscroll = function(obj,e)
        {
        // 	this.divViewCompBody00.grdObj.removeEventHandler("onhscroll", this.divViewCompBody00_grdObj_onhscroll, this);
        // 	this.divViewCompBody00.grdObj.hscrollbar.set_pos(e.pos);
        }

        /**
          * @함수명	: fnGrdObjOnsummclick
          * @desc     	: 그리드에서 서머리 영역의 셀을 클릭했을 때 발생하는 이벤트입니다.
          */
        this.fnGrdObjOnsummclick = function(obj,e)
        {
        	var gubun = "";
        	switch(e.col){		
        		case 5 :
        			gubun = "A";
        		break;
        		
        		case 8 :
        			gubun = "B";
        		break;
        		
        		case 11 :
        			gubun = "C";
        		break;
        		
        		case 14 :
        			gubun = "D";
        		break;
        		
        		case 17 :
        			gubun = "E";
        		break;
        		
        		case 20 :
        			gubun = "F";
        		break;
        		
        		case 23 :
        			gubun = "G";
        		break;
        		
        		case 26 :
        			gubun = "H";
        		break;
        		
        		case 29 :
        			gubun = "I";
        		break;
        		
        		case 32 :
        			gubun = "J";
        		break;
        		
        		default:
        		break;
        	}
        	
        	var nRow = this.dsObjDesc.findRow("TYPE", gubun);
        	if(!gfnIsNull(nRow)) this.dsObjDesc.set_rowposition(nRow);
        	this.pdvModeDesc.trackPopupByComponent(this.divViewCompBody00.grdObj, 0, 0);	
        }

        /**
          * @함수명	: fnBtnDelRowGridObjOnclick
          * @desc     	: 그리드&첨부파일div 그리드 행삭제
          */
        this.fnBtnDelRowGridObjOnclick = function(obj,e)
        {
        	this.divViewCompBody01.grdObjGrid.set_enableevent(false);
        	
        	gfnDsChkDel(this.dsObjGrid);
        	
        	this.divViewCompBody01.grdObjGrid.set_enableevent(true);
        }

        /**
          * @함수명	: fnSetGrdHeadCheckbox
          * @desc     	: 리스트 그리드 헤드 클릭 이벤트
          */
        this.fnSetGrdHeadCheckbox = function(obj,e)
        {	
        	switch(e.cell){		
        		case 0 : 					
        			this.fnCheckedHeader(obj,this.dsObjGrid,e.cell,"CHECKED");
        			break;
        		
        		default:
        			break;	
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fnOnLoad, this);
            this.addEventHandler("ontimer", this.BComObjMgmtPop_ontimer, this);
            this.pdvObjList.btnFilterApply.addEventHandler("onclick", this.fnBtnFilterApplyOnclick, this);
            this.pdvObjList.grdFilterList.addEventHandler("onheadclick", this.fnGrdFilterHeadCheckbox, this);
            this.btnSave.addEventHandler("onclick", this.fnSave, this);
            this.divViewCompBody00.grdObj.addEventHandler("onheadclick", this.fnSetCompGrdHeadCheckbox, this);
            this.divViewCompBody00.grdObj.addEventHandler("onhscroll", this.divViewCompBody00_grdObj_onhscroll, this);
            this.divViewCompBody00.grdObj.addEventHandler("onsummclick", this.fnGrdObjOnsummclick, this);
            this.divViewCompTitle00.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompTitle00.btnFilterInit.addEventHandler("onclick", this.fnBtnFilterInitOnclick, this);
            this.divViewCompTitle00.btnFilter.addEventHandler("onclick", this.fnBtnFilterOnclick, this);
            this.divViewCompTitle00.btnDelRow.addEventHandler("onclick", this.fnDelRow, this);
            this.divViewCompTitle00.btnDelCompChk.addEventHandler("onclick", this.fnDelCompChk, this);
            this.divViewCompTitle00.btnCompLoadSrch.addEventHandler("onclick", this.fnBtnCompLoadSrch, this);
            this.divViewCompTitle00.btnCompLoad.addEventHandler("onclick", this.fnBtnCompLoadOnclick, this);
            this.btnCompXml.addEventHandler("onclick", this.fnCompXml, this);
            this.divViewCompBody01.grdObjGrid.addEventHandler("onheadclick", this.fnSetGrdHeadCheckbox, this);
            this.divViewCompBody01.grdObjGrid.addEventHandler("onhscroll", this.divViewCompBody01_grdObjGrid_onhscroll, this);
            this.divViewCompTitle01.staViewCompTitle00.addEventHandler("onclick", this.div_2_staSubTitle01_onclick, this);
            this.divViewCompTitle01.btnGridXml.addEventHandler("onclick", this.fnGridXml, this);
            this.divViewCompTitle01.btnDelRowGridObj.addEventHandler("onclick", this.fnBtnDelRowGridObjOnclick, this);

        };

        this.loadIncludeScript("BComObjMgmtPop.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
