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
                this.set_name("commPaging");
                this.set_titletext("페이징");
                this._setFormPosition(0,0,1087,28);
            }
            this.style.set_background("#e4e4e4ff");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divGrdComBtns", "absolute", null, "1", "330", "28", "4", null, this);
            obj.getSetter("objNm").set("그리드 기능 모음");
            obj.set_text("Div00");
            obj.set_url("CCOMP::CompGrdBtns.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("staTotalCnt", "absolute", "8", "4", "92", "20", null, null, this);
            obj.set_taborder("0");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("divPageArea", "absolute", "33%", "1", null, "66", "33%", null, this);
            obj.set_taborder("17");
            obj.set_text("divPageArea");
            this.addChild(obj.name, obj);
            obj = new Button("btnTenNext", "absolute", null, "3", "20", "20", "0", null, this.divPageArea);
            obj.set_cssclass("btn_WF_GrdPageNextP");
            obj.getSetter("objNm").set("10페이지 이후");
            obj.set_tooltiptext("10페이지 이후");
            obj.set_visible("false");
            this.divPageArea.addChild(obj.name, obj);
            obj = new Button("btnNext", "absolute", null, "3", "20", "20", "22", null, this.divPageArea);
            obj.set_cssclass("btn_WF_GrdPageNext");
            obj.getSetter("objNm").set("다음");
            obj.set_tooltiptext("다음");
            obj.set_visible("false");
            this.divPageArea.addChild(obj.name, obj);
            obj = new Static("staPaging09", "absolute", "273", "4", "16", "16", null, null, this.divPageArea);
            obj.style.set_align("center middle");
            obj.style.set_font("10 malgun gothic");
            obj.style.set_cursor("hand");
            obj.set_taborder("2");
            this.divPageArea.addChild(obj.name, obj);
            obj = new Static("staPaging08", "absolute", "249", "4", "16", "16", null, null, this.divPageArea);
            obj.style.set_align("center middle");
            obj.style.set_font("10 malgun gothic");
            obj.style.set_cursor("hand");
            obj.set_taborder("3");
            this.divPageArea.addChild(obj.name, obj);
            obj = new Static("staPaging07", "absolute", "225", "4", "16", "16", null, null, this.divPageArea);
            obj.style.set_align("center middle");
            obj.style.set_font("10 malgun gothic");
            obj.style.set_cursor("hand");
            obj.set_taborder("4");
            this.divPageArea.addChild(obj.name, obj);
            obj = new Static("staPaging06", "absolute", "201", "4", "16", "16", null, null, this.divPageArea);
            obj.style.set_align("center middle");
            obj.style.set_font("10 malgun gothic");
            obj.style.set_cursor("hand");
            obj.set_taborder("5");
            this.divPageArea.addChild(obj.name, obj);
            obj = new Static("staPaging05", "absolute", "177", "4", "16", "16", null, null, this.divPageArea);
            obj.style.set_align("center middle");
            obj.style.set_font("10 malgun gothic");
            obj.style.set_cursor("hand");
            obj.set_taborder("6");
            this.divPageArea.addChild(obj.name, obj);
            obj = new Static("staPaging04", "absolute", "153", "4", "16", "16", null, null, this.divPageArea);
            obj.style.set_align("center middle");
            obj.style.set_font("10 malgun gothic");
            obj.style.set_cursor("hand");
            obj.set_taborder("7");
            this.divPageArea.addChild(obj.name, obj);
            obj = new Static("staPaging03", "absolute", "129", "4", "16", "16", null, null, this.divPageArea);
            obj.style.set_align("center middle");
            obj.style.set_font("10 malgun gothic");
            obj.style.set_cursor("hand");
            obj.set_taborder("8");
            this.divPageArea.addChild(obj.name, obj);
            obj = new Static("staPaging02", "absolute", "105", "4", "16", "16", null, null, this.divPageArea);
            obj.style.set_align("center middle");
            obj.style.set_font("10 malgun gothic");
            obj.style.set_cursor("hand");
            obj.set_taborder("9");
            this.divPageArea.addChild(obj.name, obj);
            obj = new Static("staPaging01", "absolute", "81", "4", "16", "16", null, null, this.divPageArea);
            obj.style.set_align("center middle");
            obj.style.set_font("10 malgun gothic");
            obj.style.set_cursor("hand");
            obj.set_taborder("10");
            this.divPageArea.addChild(obj.name, obj);
            obj = new Static("staPaging00", "absolute", "57", "4", "16", "16", null, null, this.divPageArea);
            obj.style.set_align("center middle");
            obj.style.set_font("10 malgun gothic");
            obj.style.set_cursor("hand");
            obj.set_taborder("11");
            this.divPageArea.addChild(obj.name, obj);
            obj = new Button("btnPrev", "absolute", "22", "3", "20", "20", null, null, this.divPageArea);
            obj.set_cssclass("btn_WF_GrdPagePrevious");
            obj.getSetter("objNm").set("이전");
            obj.set_taborder("12");
            obj.set_tooltiptext("이전");
            obj.set_visible("false");
            this.divPageArea.addChild(obj.name, obj);
            obj = new Button("btnTenPrev", "absolute", "0", "3", "20", "20", null, null, this.divPageArea);
            obj.set_cssclass("btn_WF_GrdPagePreviousP");
            obj.getSetter("objNm").set("10페이지 이전");
            obj.set_taborder("13");
            obj.set_tooltiptext("10페이지 이전");
            obj.set_visible("false");
            this.divPageArea.addChild(obj.name, obj);

            obj = new Combo("cboMaxRowCnt", "absolute", "100", "4", "58", "20", null, null, this);
            this.addChild(obj.name, obj);
            var cboMaxRowCnt_innerdataset = new Dataset("cboMaxRowCnt_innerdataset", this.cboMaxRowCnt);
            cboMaxRowCnt_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row><Row><Col id=\"codecolumn\">200</Col><Col id=\"datacolumn\">200</Col></Row><Row><Col id=\"codecolumn\">500</Col><Col id=\"datacolumn\">500</Col></Row><Row><Col id=\"codecolumn\">1000</Col><Col id=\"datacolumn\">1000</Col></Row></Rows>");
            obj.set_innerdataset(cboMaxRowCnt_innerdataset);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("objNm").set("페이지 이동 콤보");
            obj.style.set_align("left middle");
            obj.set_taborder("1");
            obj.set_text("50");
            obj.set_value("50");
            obj.set_index("0");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 66, this.divPageArea,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("17");
            		p.set_text("divPageArea");

            	}
            );
            this.divPageArea.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1087, 28, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("commPaging");
            		p.style.set_background("#e4e4e4ff");
            		p.set_titletext("페이징");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item2","divPageArea.btnNext","tooltiptext","gdsLabel","EPRO_LABEL_00797");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CCOMP::CompGrdBtns.xfdl");
        };
        
        // User Script
        this.registerScript("CompPaging.xfdl", function(exports) {
        /**
         * @파일명			: CompPaging.xfdl
         * @생성자			: 한민희
         * @생성일시		: 2017. 8. 16.
         * @설명			: 페이징 컴포넌트
         * @최종수정자		: 한민희
         * @최종수정일시	: 2017. 8. 16.
        */ 

        this.gfvPagingGrid;
        this.gfvPagingForm;
        this.gfvPagingSvcId;
        this.gfvPagingSvcUrl;
        this.gfvPagingInDs;
        this.gfvPagingOutDs;
        this.gfvPagingCallbackFunc;	
        this.gfvPagingInfoObject;
        this.gfvPagingArgs;
        this.gfvMaxPageCnt = 10;	//최대 페이지 갯수
        this.gfvTotalBlockCnt = 0;	//전체 페이징 블록 갯수
        this.gfvCurrBlockCnt = 1;	//현재 블록 
        this.gfvCurrPageNo = 1;		//현재 페이지

        /**
          * @함수명	: fnDivGrdComBtnsInit
          * @desc     	: 그리드 공통버튼 세팅
          */
        this.fnDivGrdComBtnsInit = function(objForm,objGrid,objExcel)
        {
        	this.gfvPagingGrid = objGrid;
        	this.divGrdComBtns.fnDivGrdComBtnsInit(objForm, objGrid, this, objExcel);
        }

        /**
          * @함수명	: fnFormOnload
          * @desc     	: 페이지로딩시 페이징 관련 컴포넌트들을 모두 안보이게 한다.
          */
        this.fnFormOnload = function(obj,e)
        {
        	this.divPageArea.components["staPaging00"].set_visible(false);
        	this.divPageArea.components["staPaging01"].set_visible(false);
        	this.divPageArea.components["staPaging02"].set_visible(false);
        	this.divPageArea.components["staPaging03"].set_visible(false);
        	this.divPageArea.components["staPaging04"].set_visible(false);
        	this.divPageArea.components["staPaging05"].set_visible(false);
        	this.divPageArea.components["staPaging06"].set_visible(false);
        	this.divPageArea.components["staPaging07"].set_visible(false);
        	this.divPageArea.components["staPaging08"].set_visible(false);
        	this.divPageArea.components["staPaging09"].set_visible(false);
        	
        	this.divPageArea.components["btnTenPrev"].set_visible(false);
        	this.divPageArea.components["btnPrev"].set_visible(false);	
        	this.divPageArea.components["btnNext"].set_visible(false);
        	this.divPageArea.components["btnTenNext"].set_visible(false);
        	
        	this.components["staTotalCnt"].set_visible(false);
        	this.components["cboMaxRowCnt"].set_visible(false); 
        }

        /**
          * @함수명	: fnSetPaingArgument
          * @desc     	: 트랜잭션 정보 세팅.
          */
        this.fnSetPaingArgument = function(objForm,svcID,URL,inDatasets,outDatasets,callbackFunc,oPaging,argument,showProgress)
        {	
        	this.gfvPagingForm			= objForm;
        	this.gfvPagingSvcId			= svcID;
        	this.gfvPagingSvcUrl		= URL;
        	this.gfvPagingInDs			= inDatasets;
        	this.gfvPagingOutDs			= outDatasets;
        	this.gfvPagingCallbackFunc	= callbackFunc;	
        	this.gfvPagingInfoObject	= oPaging;
        	this.gfvPagingArgs			= argument;
        }

        /**
          * @함수명	: fnCboMaxRowCntOnitemchanged
          * @desc     	: max row number 변경시 Onitemchanged 이벤트
          */
        this.fnCboMaxRowCntOnitemchanged = function(obj,e)
        {
        	var totalRowCnt = this.gfvPagingGrid.getBindDataset().getColumn(0,"TOTAL_ITEM_COUNT");
        	var perCnt 		= this.cboMaxRowCnt.value;
        	this.gfvTotalBlockCnt = Math.ceil(totalRowCnt / perCnt);
        	
         	if(this.gfvCurrPageNo > this.gfvTotalBlockCnt){
         		this.gfvCurrPageNo = 1;
         		this.gfvCurrBlockCnt = parseInt(this.gfvCurrPageNo/this.gfvMaxPageCnt) * this.gfvMaxPageCnt+1;
         	}
         	
        	this.fnPagingTran(this.gfvPagingForm, this.gfvPagingSvcId, this.gfvPagingSvcUrl, this.gfvPagingInDs, this.gfvPagingOutDs, this.gfvPagingCallbackFunc, this.gfvPagingInfoObject);
        } 

        /**
          * @함수명	: fnPagingTran
          * @desc     	: 페이징 정보를 담아 트랜잭션 콜
          */
        this.fnPagingTran = function (objForm,svcID,URL,inDatasets,outDatasets,callbackFunc,oPaging,argument)
        {	
        	oPaging.inDs.addColumn( "PAGE_STR_NO", "Int" );
        	oPaging.inDs.addColumn( "PAGE_END_NO", "Int" );	
        	
        	if(oPaging.inDs.getRowCount() < 1){
        		oPaging.inDs.addRow();
        	}

        	oPaging.inDs.setColumn(0,"PAGE_STR_NO", ((this.gfvCurrPageNo - 1) * this.cboMaxRowCnt.value) + 1 );	
        	oPaging.inDs.setColumn(0,"PAGE_END_NO", this.gfvCurrPageNo * this.cboMaxRowCnt.value );
         	oPaging.grid.transactionType = "pagingTran";
         	
        	var temp = [
        					{
        						inDs:oPaging.inDs
        						, grid:oPaging.grid
        						, divPaging:oPaging.divPaging
        					}
        			];
        	
        	var arrInDatasets = inDatasets.split(" ");	
        	var serverIsDs = "";	
        	for(var i=0, x=arrInDatasets.length; i<x; i++){	
        		if(arrInDatasets[i].indexOf(oPaging.inDs.id) > -1){
        			serverIsDs = arrInDatasets[i].split("=")[0];
        			break;
        		}
        	}
        	
        	var arrOutDatasets = outDatasets.split(" ");	
        	var serverOutDs = "";	
        	for(var i=0, x=arrOutDatasets.length; i<x; i++){	
        		if(arrOutDatasets[i].indexOf(oPaging.grid.getBindDataset().id) > -1){
        			serverOutDs = arrOutDatasets[i].split("=")[1];
        			break;
        		}
        	}
        	
        	inDatasets = serverIsDs + "=" + oPaging.inDs.id;
        	outDatasets = oPaging.grid.getBindDataset().id + "=" + serverOutDs;
        	
        	gfnTran(objForm, svcID, URL, inDatasets, outDatasets, callbackFunc, temp, argument);
        }

        /**
          * @함수명	: pagingOnClickHandler
          * @desc     	: 페이지번호 클릭시 처리로직
          */
        this.pagingOnClickHandler = function(obj,e)
        {
        	this.gfvCurrPageNo = Number(obj.text);
        	this.fnPagingTran(this.gfvPagingForm, this.gfvPagingSvcId, this.gfvPagingSvcUrl, this.gfvPagingInDs, this.gfvPagingOutDs, this.gfvPagingCallbackFunc, this.gfvPagingInfoObject);
        }

        /**
          * @함수명	: fnCallPaging
          * @desc     	: 데이터 조회 이후 페이징화면을 구성한다.
          */
        this.fnCallPaging = function(dataset)
        {
        	var totalRowCnt = dataset.getColumn(0,"TOTAL_ITEM_COUNT");
        	
        	if(gfnIsNull(totalRowCnt) && dataset.getRowCount() > 0){
        		gfnAlert("조회 쿼리에\n<include refid='commonService.list-before' />\n<include refid='commonService.list-after' />\n누락!!!");
        	}
        	
        	var perCnt 		= this.cboMaxRowCnt.value;
        	this.gfvTotalBlockCnt = Math.ceil(totalRowCnt / perCnt);
        	
        	if(totalRowCnt == 0){
        		this.divPageArea.components["btnPrev"].set_visible(false);
        		this.divPageArea.components["btnTenPrev"].set_visible(false);
        		this.divPageArea.components["btnTenNext"].set_visible(false);
        		this.divPageArea.components["btnNext"].set_visible(false);
        		
        		this.components["staTotalCnt"].set_visible(false);
        		this.components["cboMaxRowCnt"].set_visible(false);
        	}else{
        		if(this.gfvCurrPageNo%10 != 0){
        			this.gfvCurrBlockCnt = parseInt(this.gfvCurrPageNo/this.gfvMaxPageCnt) * this.gfvMaxPageCnt + 1;
        		}else if(this.gfvCurrPageNo%10 == 0){
        			this.gfvCurrBlockCnt = this.gfvCurrPageNo - 9;
        		}
        			
        		for(var k=0; k<this.gfvMaxPageCnt; k++){
        			if(totalRowCnt < 1){
        				this.components["staTotalCnt"].set_visible(false);
        				this.components["cboMaxRowCnt"].set_visible(false);
        			}else{	
        				//현재페이지가 전체페이지수를 초과하면 1페이지로 세팅.
        				if(k==0){
        					if(Number(k + this.gfvCurrBlockCnt) > this.gfvTotalBlockCnt){
        						this.gfvCurrPageNo = 1;
        						this.gfvCurrBlockCnt = parseInt(this.gfvCurrPageNo/this.gfvMaxPageCnt) * this.gfvMaxPageCnt+1;
        					}
        				}
        				
        				this.divPageArea.components["staPaging0"+k].set_visible(false);			
        				this.divPageArea.components["staPaging0"+k].set_text( k + this.gfvCurrBlockCnt );
        				
        				//페이지 블록번호 넓이 조절 3자리되면 25, 2자리 16
        				var currBlockWidth = (k + this.gfvCurrBlockCnt) > 99 ? 25 : 16;
        				this.divPageArea.components["staPaging0"+k].set_width(currBlockWidth);
        				
        				//넓이 세팅 후 페이지 블록번호 간의 간격 조절
        				if(k > 0){
        					this.divPageArea.components["staPaging0"+k].set_left(this.divPageArea.components["staPaging0"+(k-1)].getOffsetRight()+ 8);
        				}
        				
         				if(Number(k + this.gfvCurrBlockCnt) <= this.gfvTotalBlockCnt){
        					this.divPageArea.components["staPaging0"+k].addEventHandler("onclick", this.pagingOnClickHandler, this);
        					
        					//선택한 페이지블록
        					if(this.gfvCurrPageNo == this.divPageArea.components["staPaging0"+k].text){
        						//this.divPageArea.components["staPaging0"+k].set_cssclass("sta_WF_GrdPageS");						
        						this.divPageArea.components["staPaging0"+k].style.set_color("#002266");	
        						this.divPageArea.components["staPaging0"+k].style.set_font_type("bold");

        					}else{
        						//this.divPageArea.components["staPaging0"+k].set_cssclass("sta_WF_GrdPage");						
        						this.divPageArea.components["staPaging0"+k].style.set_color("black");
        						this.divPageArea.components["staPaging0"+k].style.set_font_type("normal");
        					}
        					
        					//페이징 블록 div 넓이 조절					
        					var nextWidth = this.divPageArea.btnNext.getOffsetWidth();
        					var endWidth = this.divPageArea.btnTenNext.getOffsetWidth();
        					var divPageAreaWidth = this.divPageArea.components["staPaging0"+k].getOffsetRight() + nextWidth + endWidth + 15;
        					this.divPageArea.set_width(divPageAreaWidth);
        					
        					this.divPageArea.components["staPaging0"+k].set_visible(true);
        				}
        			}
        		}
        		
        		/*
        			페이징 위치조절
        				 - 화면이 좁으면 페이징 div 두줄로 나오도록 변경.
        				 - 화면이 넓으면 페이징 가운데 정렬
        		*/
        		var centerPosition = (this.parent.getOffsetWidth() - this.divPageArea.width) / 2 ; 
        		
        		//두줄로 나오게 한다.
        		if(this.cboMaxRowCnt.getOffsetRight()+10 > centerPosition){			
        			this.divPageArea.set_left(8);
        			this.divPageArea.set_top(25);
        	
        			if(this.gfvPagingInfoObject.divPaging.getOffsetHeight() < 48){
        				this.gfvPagingInfoObject.divPaging.setOffsetHeight(this.gfvPagingInfoObject.divPaging.getOffsetHeight() + 25);
        				this.gfvPagingInfoObject.grid.setOffsetHeight(this.gfvPagingInfoObject.grid.getOffsetHeight() - 25);
        			}			
        		}else{
        			//this.divPageArea.set_left(centerPosition);
        			
        		}
        	}
        	
        	if(gfnIsNull(totalRowCnt)){
        		totalRowCnt = 0;
        		this.fnSetTotalCnt(totalRowCnt);
        		
        		this.divPageArea.components["btnPrev"].set_visible(false);
        		this.divPageArea.components["btnTenPrev"].set_visible(false);
        		this.divPageArea.components["btnTenNext"].set_visible(false);
        		this.divPageArea.components["btnNext"].set_visible(false);
        		this.components["staTotalCnt"].set_visible(false);
        		this.components["cboMaxRowCnt"].set_visible(false);
        		
        		this.gfvPagingGrid.set_nodatatext(gfnMultiLabel("EPRO_LABEL_00003"));
        		return;
        	}

        	this.divPageArea.components["btnPrev"].set_visible(true);
        	this.divPageArea.components["btnTenPrev"].set_visible(true);
        	this.divPageArea.components["btnTenNext"].set_visible(true);
        	this.divPageArea.components["btnNext"].set_visible(true);
        	this.components["staTotalCnt"].set_visible(true);
        	this.components["cboMaxRowCnt"].set_visible(true);
        	
        	this.fnSetTotalCnt(totalRowCnt);
        }

        /**
          * @함수명	: fnSetTotalCnt
          * @input		: totalRowCnt(전체 건수)
          * @desc     	: 전체 건수 세팅.
          */ 
        this.fnSetTotalCnt = function(totalRowCnt)
        {
        	this.staTotalCnt.set_visible(true);
        	this.staTotalCnt.set_text("Total <fc v='#002266'><b v='true'>"+totalRowCnt+"</b></fc>");
        }

        /**
          * @함수명	: fnBtnPrevOnclick
          * @desc     	: 이전 페이지로 이동
          */ 
        this.fnBtnPrevOnclick = function(obj,e)
        {	
        	if(this.gfvCurrPageNo > 1){
        		//이전 페이지
        		this.gfvCurrPageNo = this.gfvCurrPageNo - 1;
        	
        		//페이징 데이터셋 세팅.
        		this.fnPagingTran(this.gfvPagingForm, this.gfvPagingSvcId, this.gfvPagingSvcUrl, this.gfvPagingInDs, this.gfvPagingOutDs, this.gfvPagingCallbackFunc, this.gfvPagingInfoObject);
         	}else{
        		gfnAlert("EPRO_LABEL_00987");
        	}	
        }

        /**
          * @함수명	: fnBtnNextOnclick
          * @desc     	: 다음 페이지로 이동
          */ 
        this.fnBtnNextOnclick = function(obj,e)
        {
        	if(this.gfvCurrPageNo < this.gfvTotalBlockCnt){	
        		//다음 페이지
        		this.gfvCurrPageNo = this.gfvCurrPageNo + 1;

        		//페이징 데이터셋 세팅.
        		this.fnPagingTran(this.gfvPagingForm, this.gfvPagingSvcId, this.gfvPagingSvcUrl, this.gfvPagingInDs, this.gfvPagingOutDs, this.gfvPagingCallbackFunc, this.gfvPagingInfoObject);
         	}else{
        		gfnAlert("EPRO_LABEL_00987");
        	}	
        }

        /**
          * @함수명	: fnBtnTenPrevOnclick
          * @desc     	: 10 페이지 이전으로 이동
          */ 
        this.fnBtnTenPrevOnclick = function(obj,e)
        {
        	if(this.gfvCurrPageNo > 1){
        		if(this.gfvCurrPageNo-this.gfvMaxPageCnt >= 1){
        			//이전 10 페이지
        			this.gfvCurrPageNo = this.gfvCurrPageNo - this.gfvMaxPageCnt;
        		}else if(this.gfvCurrPageNo-this.gfvMaxPageCnt < 1){
        			//이전 10 페이지
        			this.gfvCurrPageNo = 1;
        		}
        		
        		//페이징 데이터셋 세팅.
        		this.fnPagingTran(this.gfvPagingForm, this.gfvPagingSvcId, this.gfvPagingSvcUrl, this.gfvPagingInDs, this.gfvPagingOutDs, this.gfvPagingCallbackFunc, this.gfvPagingInfoObject);
         	}else{
        		gfnAlert("EPRO_LABEL_00987");
        	}	
        }

        /**
          * @함수명	: fnBtnTenNextOnclick
          * @desc     	: 10 페이지 이후로 이동
          */ 
        this.fnBtnTenNextOnclick = function(obj,e)
        {
        	if(this.gfvCurrPageNo < this.gfvTotalBlockCnt){
        		if(this.gfvCurrPageNo+this.gfvMaxPageCnt <= this.gfvTotalBlockCnt){
        			//다음 페이지
        			this.gfvCurrPageNo = this.gfvCurrPageNo + this.gfvMaxPageCnt;
        		}else if(this.gfvCurrPageNo+this.gfvMaxPageCnt > this.gfvTotalBlockCnt){
        			//다음 페이지
        			this.gfvCurrPageNo = this.gfvTotalBlockCnt;
        		}
        		
        		//페이징 데이터셋 세팅.
        		this.fnPagingTran(this.gfvPagingForm, this.gfvPagingSvcId, this.gfvPagingSvcUrl, this.gfvPagingInDs, this.gfvPagingOutDs, this.gfvPagingCallbackFunc, this.gfvPagingInfoObject);
        	}else{
        		gfnAlert("EPRO_LABEL_00987");
        	}	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fnFormOnload, this);
            this.divPageArea.btnTenNext.addEventHandler("onclick", this.fnBtnTenNextOnclick, this);
            this.divPageArea.btnNext.addEventHandler("onclick", this.fnBtnNextOnclick, this);
            this.divPageArea.btnPrev.addEventHandler("onclick", this.fnBtnPrevOnclick, this);
            this.divPageArea.btnTenPrev.addEventHandler("onclick", this.fnBtnTenPrevOnclick, this);
            this.cboMaxRowCnt.addEventHandler("onitemchanged", this.fnCboMaxRowCntOnitemchanged, this);

        };

        this.loadIncludeScript("CompPaging.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
