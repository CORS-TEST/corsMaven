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
                this.set_titletext("계약서 출력");
                this._setFormPosition(0,0,895,780);
            }
            this.style.set_font("9 arial");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn_close00", "absolute", "96.2%", "0", null, "30", "0.78%", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_POP_CloseBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 895, 780, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("UbiReport");
            		p.set_titletext("계약서 출력");
            		p.style.set_font("9 arial");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("PCTRB100P00_copy.xfdl", function(exports) {
        /**
           @file       PCTRB100POO.xfdl
           @desc       계약서출력
           @author     김민성
           @makedate   2016.04.08
           @history    
        */

        this.UbiReport00.resource = application.services["svcurl"].url+"ubireport/ajax/js4";

        /**
        	@function	UbiReport_onload()
        	@desc   	
        */
        this.UbiReport_onload = function(obj,e)
        {	
        	//부모창으로 부터 전달받은 값	
         	var ownFrame = this.getOwnerFrame();
         	
         	var isRuntime = ownFrame.isRuntime;
         	var localdatasets = ownFrame.localdatasets;
         	var datasets = ownFrame.datasets;
         	var reportFile =  ownFrame.reportFile;

        	//var isRuntime = this.parent.isRuntime;
        	//var gridObj = this.parent.gridobj;
        	//var datasets = this.parent.datasets;
        	//var localdatasets = this.parent.localdatasets;
        	//var reportFile = this.parent.reportfile;
        	
        	//var arg = "arg1#1111#arg2#2222#";//아규먼트명#값#다른아규먼트명#값1#.....#

        	// 리포트가 정의되지 않았을 경우 리턴
        	if (reportFile == undefined) {
        		alert("리포트 파일명이 정의되지 않았습니다.");
        		return;
        	}
        	
        	// ---------------------------------------
        	// 리포트 파라미터 설정
        	// ---------------------------------------
        	this.UbiReport00.jrffile = reportFile; 
        	// HTML의 리포트 통신을 담당할 URL 주소
        	//this.UbiReport00.aboutBox();
        	this.UbiReport00.gatewayurl = application.services["svcurl"].url+"UbiGateway";
        	// Runtime 실행에서 Data를 가져올 URL (ActiveX에서 사용)
        	this.UbiReport00.dataurl = application.services["svcurl"].url+"UbiData";
        	// 리포트 파일을 가져올 URL (ActiveX에서 사용) : 리포트 파일명을 제외한 디렉토리까지 정의
        	this.UbiReport00.reporturl = application.services["svcurl"].url+"ubireport/work/";
        	this.UbiReport00.resid = "UBIAJAX";
        	this.UbiReport00.toolbar = true;

        	//this.UbiReport00.arg = arg;

        	//this.UbiReport00.setPrintMenu("HTML");

        	if (isRuntime == true)
        	{
        		var formatRowCount = gridObj.getFormatRowCount();
        		var formatColCount = gridObj.getFormatColCount();

        		var widthArray = new Array;
        		var heightArray = new Array;

        		var headBgColor = "230.230.230";	// 헤더 배경색 
        		var summBgColor = "240.240.240";	// 합계 배경색 
        		var i=0;
        		var j=0;
        		var k=0;

        		// Grid의 Row의 높이를 도출
        		var subidx = 0;
        		var bandtype = "";
        		var prebandtype = "";
        		var bodyStartRow = 0;
        		var summStartRow = 0;
        		for (i=0; i<formatRowCount; i++) {
        			bandtype = gridObj.getFormatRowProperty(i,"band");
        			if (bandtype == prebandtype) {
        				subidx++;
        			} else {
        				subidx = 0;
        			}
        			
        			heightArray[i] = gridObj.getRealRowSize(i, subidx, false);
        			prebandtype = bandtype;
        		}
        		
        		// Grid의 Column 넓이 도출
        		for (i=0; i<formatColCount; i++) {
        			widthArray[i] = gridObj.getRealColSize(i);
        		}

        		var cellcount = 0;
        		var rowcount = 0;

        		// ------------------------------------------------------------
        		// 디자인정보를 담고있는 Dataset 생성
        		// ------------------------------------------------------------
        		var designDataset = new Dataset("dsDesign", this);
        		// 컬럼 생성
        		designDataset.addColumn("type", "string");
        		designDataset.addColumn("row", "string");
        		designDataset.addColumn("col", "string");
        		designDataset.addColumn("rowspan", "string");
        		designDataset.addColumn("colspan", "string");
        		designDataset.addColumn("align", "string");
        		designDataset.addColumn("text", "string", 10000);
        		designDataset.addColumn("bgcolor", "string");
        		
        		prebandtype = "";
        		var bandRow = 0;
        		var nRow = 0;
        		var rowidx = 0;
        		var colidx = 0;
        		var colspan = 0;
        		var rowspan = 0;
        		var colwidth = 0;
        		var colheight = 0;
        		var startIdx = 0;
        		var endIdx = 0;
        		var bgcolor = "";
        		
        		// 전체 높이와 넒이를 담은 Row 생성
        		nRow = designDataset.addRow();
        		designDataset.setColumn(nRow, "type", "widths");
        		designDataset.setColumn(nRow, "text", widthArray);
        		nRow = designDataset.addRow();
        		designDataset.setColumn(nRow, "type", "heights");
        		designDataset.setColumn(nRow, "text", heightArray);
        		
        		for (i=0; i<formatRowCount; i++) {
        			bandtype = gridObj.getFormatRowProperty(i,"band");
        			if (bandtype != prebandtype) {
        				if (bandtype == "head") {
        					bandRow = -1;
        					bgcolor = headBgColor;
        				} else if (bandtype == "body") {
        					bandRow = 0;
        					bgcolor = "";
        				} else if (bandtype == "summ") {
        					bandRow = -2;
        					bgcolor = summBgColor;
        				}
        				cellcount = gridObj.getCellCount(bandtype);
        				for (j=0; j<cellcount; j++) {
        					rowidx = gridObj.getCellProperty(bandtype,j,"row");
        					colidx = gridObj.getCellProperty(bandtype,j,"col");
        					rowspan = gridObj.getCellProperty(bandtype,j,"rowspan");
        					colspan = gridObj.getCellProperty(bandtype,j,"colspan");
        				
        					nRow = designDataset.addRow();
        					designDataset.setColumn(nRow, "type", bandtype);
        					designDataset.setColumn(nRow, "row", rowidx);
        					designDataset.setColumn(nRow, "col", colidx);
        					designDataset.setColumn(nRow, "rowspan", rowspan);
        					designDataset.setColumn(nRow, "colspan", colspan);
        					designDataset.setColumn(nRow, "align", gridObj.getCellProperty(bandtype,j,"align"));
        					if (bandRow != 0) {
        						designDataset.setColumn(nRow, "text", gridObj.getCellText(bandRow,j));
        					}
        					designDataset.setColumn(nRow, "bgcolor", bgcolor);
        				}
        			}
        			
        			prebandtype = bandtype;
        		}
        		this.addChild(designDataset.name, designDataset);
        		
        		// ------------------------------------------------------------
        		// 그리드의 텍스트를 Dataset으로 생성
        		// ------------------------------------------------------------
        		cellcount = gridObj.getCellCount("Body");
        		rowcount = gridObj.rowcount;
        		
        		var gridDataset = new Dataset("dsGrid", this);
        		this.addChild(gridDataset.name, gridDataset);
        		trace("cellcount : " + cellcount);
        		// column 생성
        		for (i=0; i<cellcount; i++) {
        			gridDataset.addColumn("column"+i, "string");
        		}
        		// 그리드 데이터 입력
        		for (j=0; j<rowcount; j++) {
        			gridDataset.addRow();
        			for (k=0; k<cellcount; k++) {
        				gridDataset.setColumn(j, k, gridObj.getCellText(j, k));
        			}
        		}
        		// ------------------------------------------------------------

        		// dataset SSV 전송에 필요한 정보 생성
        		this.UbiReport00.setRuntimeData(designDataset, gridDataset);
        	
        		// 동적으로 생성된 Dataset 제거
        		this.removeChild(designDataset.name);
        		this.removeChild(gridDataset.name);
        	}
        	else
        	{
        		this.UbiReport00.runtimedata = "";
        		if (datasets)
        		{
        			for (var i=0; i<datasets.length; i++)
        			{
        				var datasetinfo = datasets[i];
        				this.UbiReport00.addTransaction(this.parent.getOwnerFrame().frame.form, datasetinfo[0], datasetinfo[1], datasetinfo[2], datasetinfo[3], datasetinfo[4], datasetinfo[5]);
        			}
        		}

        		if (localdatasets)
        		{
        			for (var i=0; i<localdatasets.length; i++)
        			{
        				var datasetinfo = localdatasets[i];
        				//trace("datasetinfo[1] : " + datasetinfo[1].saveXML());
        				this.UbiReport00.setDataset(datasetinfo[0], datasetinfo[1]);
        			}
        		}
        	}
        	// retrieve(parent, callback 함수명);
        	this.UbiReport00.retrieve(this, "retrieveEnd");
        }

        /**
        	@function	retrieveEnd()
        	@desc   	
        */
        this.retrieveEnd = function()
        {
        //	this.UbiReport00.aboutBox();
        //	this.UbiReport00.exportPdf();
        //	this.UbiReport00.printSet();
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
            this.btn_close00.addEventHandler("onclick", this.btn_close_onclick, this);

        };

        this.loadIncludeScript("PCTRB100P00_copy.xfdl", true);

       
    };
}
)();
