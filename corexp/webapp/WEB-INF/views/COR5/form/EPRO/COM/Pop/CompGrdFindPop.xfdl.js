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
                this.set_name("GridFindPop");
                this.set_titletext("그리드 문자열 찾기");
                this._setFormPosition(0,0,315,95);
            }
            this.style.set_background("white");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsScope", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" size=\"256\" type=\"STRING\"/><Column id=\"data\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"code\">all</Col><Col id=\"data\">전체</Col></Row><Row><Col id=\"code\">row</Col><Col id=\"data\">행</Col></Row><Row><Col id=\"code\">col</Col><Col id=\"data\">열</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDirection", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" size=\"256\" type=\"STRING\"/><Column id=\"data\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"code\">prev</Col><Col id=\"data\">이전</Col></Row><Row><Col id=\"code\">next</Col><Col id=\"data\">다음</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "8", "9", "87", "18", null, null, this);
            obj.set_taborder("1");
            obj.set_text("찾기");
            this.addChild(obj.name, obj);

            obj = new Edit("edtFind", "absolute", "85", "8", null, "20", "10", null, this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Radio("rdCondition", "absolute", "85", "36", "117", "18", null, null, this);
            this.addChild(obj.name, obj);
            var rdCondition_innerdataset = new Dataset("rdCondition_innerdataset", this.rdCondition);
            rdCondition_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">equal</Col><Col id=\"datacolumn\">일치</Col></Row><Row><Col id=\"codecolumn\">like</Col><Col id=\"datacolumn\">포함</Col></Row></Rows>");
            obj.set_innerdataset(rdCondition_innerdataset);
            obj.set_codecolumn("codecolumn");
            obj.set_columncount("2");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("0");
            obj.set_taborder("6");
            obj.set_value("like");
            obj.set_index("1");

            obj = new Static("Static04", "absolute", "8", "36", "66", "18", null, null, this);
            obj.set_taborder("16");
            obj.set_text("찾을 조건");
            this.addChild(obj.name, obj);

            obj = new Button("btnFind", "absolute", null, null, "64", "24", "78", "10", this);
            obj.style.set_color("#7b8494ff");
            obj.style.set_gradation("linear 0,0 white 0,100 #f0f2f5ff");
            obj.set_taborder("17");
            obj.set_text("찾기");
            this.addChild(obj.name, obj);

            obj = new Button("btnInit", "absolute", null, null, "64", "24", "10", "10", this);
            obj.style.set_color("#7b8494ff");
            obj.style.set_gradation("linear 0,0 white 0,100 #f0f2f5ff");
            obj.set_taborder("18");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 315, 95, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("GridFindPop");
            		p.style.set_background("white");
            		p.set_titletext("그리드 문자열 찾기");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("CompGrdFindPop.xfdl", function(exports) {
        /**
         * @파일명       	: CompGrdFindPop.xfdl
         * @생성자       	: 한민희
         * @생성일자     	: 2017. 9. 4.
         * @설명			: 문자열 찾기
         * @최종수정자		: 한민희
         * @최종수정일자	: 2017. 9. 4.
        */ 

        this.popTitle = gfnMultiLabel("EPRO_LABEL_01414");

        /**
          * @함수명	: fnEdtFindOnkeydown
          * @input    	: obj:Edit(에디트 오브젝트), e:nexacro.KeyEventInfo(이벤트변수)
          * @desc     	: 엔터 이벤트
          */  
        this.fnEdtFindOnkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.fnBtnFindOnclick();
        	}
        }
         
        /**
          * @함수명	: fnBtnFindOnclick
          * @input    	: obj:Button(버튼 오브젝트), e:nexacro.ClickEventInfo(이벤트변수)
          * @desc     	: 찾기 버튼 Onclick 이벤트
          */
        this.fnBtnFindOnclick = function(obj,e)
        {
        	var ownFrame = this.getOwnerFrame();	
        	var grid = ownFrame.arg_grid;
        	var ds = grid.getBindDataset();	
        	grid.set_enableevent(false);
        	ds.set_enableevent(false);
        	
        	var openId = application.gdsOpenMenu.getColumn(application.gdsOpenMenu.rowposition, "OPEN_ID");
        	var framesInfo = application.gv_workFrameSet.frames;	
        	var edtVal = this.edtFind.value;

        	for(i=0; i<grid.getCellCount("body"); i++){
        		var nVal = "";		
        		var sInnerDsId = grid.getCellProperty("body", i, "combodataset");
        		var oInnerDs = framesInfo[openId].form.divWork.lookup(sInnerDsId)
        		var arrBind = grid.getCellProperty("body", i, "text").split("bind:");
        		var findOption = this.rdCondition.value;
        		var temp;
        		
        		if(gfnIsNull(oInnerDs)){
        			if(findOption == "equal"){
        				temp = arrBind[1] + "=='" + edtVal +"' ? 'yellow' : ''";
        			}else if(findOption == "like"){
        				temp = "String(" + arrBind[1] + ").indexOf('" + edtVal + "') >= 0 ? 'yellow' : ''";
        			}
        		}else{		
        			if(findOption == "equal"){
        				temp = arrBind[1] + "==" + this.fnFindCdId(oInnerDs, edtVal, findOption) +" ? 'yellow' : ''";
        			}else if(findOption == "like"){
        				temp = "String(" + arrBind[1] + ").indexOf('" + this.fnFindCdId(oInnerDs, edtVal, findOption) + "') >= 0 ? 'yellow' : ''";
        			}
        		}
        		
        		nVal = "EXPR("+ temp +")";
        				
        		grid.setCellProperty("Body", i, "background", nVal); 
        		grid.setCellProperty("Body", i, "background2", nVal); 
        	}
        	
        	ds.set_enableevent(true);
        	grid.set_enableevent(true);	
        }

        /**
          * @함수명	: fnFindCdId
          * @input    	: oInnerDs {dataset} 문자를 찾을 데이터셋
        				  edtVal {String} 찾는 문자
        				  findOption {String} 찾을 조건
          * @return		: rtnCdId {String} 코드 아이디
          * @desc     	: 코드값 일때 코드명으로 검색한다.
          */
        this.fnFindCdId = function(oInnerDs,edtVal,findOption)
        {			
        	var rtnCdId = "x";
        	var rowIdx;
        	
        	if(findOption == "equal"){
        		rowIdx = oInnerDs.findRowExpr("CD_NM_LO == '" + edtVal + "'");
        	}else if(findOption == "like"){
        		rowIdx = oInnerDs.findRowExpr("CD_NM_LO.indexOf('" + edtVal + "')>=0");
        	}
        	
        	if(rowIdx > -1){
        		rtnCdId = oInnerDs.getColumn(rowIdx , "CD_ID");
        	}
        	
        	return rtnCdId;
        }

        /**
          * @함수명	: fnBtnInitOnclick
          * @input    	: obj:Button(버튼 오브젝트), e:nexacro.ClickEventInfo(이벤트변수)
          * @desc     	: 초기화 버튼 Onclick 이벤트
          */
        this.fnBtnInitOnclick = function(obj,e)
        {
        	var ownFrame = this.getOwnerFrame();
        	var grid = ownFrame.arg_grid;
        	
        	grid.set_enableevent(false);
        	grid.set_formats(grid.orgFormatBak);
        	grid.set_enableevent(true);
        	
        	var ds = grid.getBindDataset();
        	ds.filter("");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.edtFind.addEventHandler("onkeydown", this.fnEdtFindOnkeydown, this);
            this.btnFind.addEventHandler("onclick", this.fnBtnFindOnclick, this);
            this.btnInit.addEventHandler("onclick", this.fnBtnInitOnclick, this);

        };

        this.loadIncludeScript("CompGrdFindPop.xfdl", true);

       
    };
}
)();
