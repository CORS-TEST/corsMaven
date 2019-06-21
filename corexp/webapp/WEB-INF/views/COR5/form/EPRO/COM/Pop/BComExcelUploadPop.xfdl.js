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
                this.set_name("commExcelUpPoptoDataSet");
                this.set_titletext("엑셀 업로드 팝업");
                this._setFormPosition(0,0,864,551);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_importData", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"Column1\" size=\"256\" type=\"STRING\"/><Column id=\"Column2\" size=\"256\" type=\"STRING\"/><Column id=\"Column3\" size=\"256\" type=\"STRING\"/><Column id=\"Column4\" size=\"256\" type=\"STRING\"/><Column id=\"Column5\" size=\"256\" type=\"STRING\"/><Column id=\"Column6\" size=\"256\" type=\"STRING\"/><Column id=\"Column7\" size=\"256\" type=\"STRING\"/><Column id=\"Column8\" size=\"256\" type=\"STRING\"/><Column id=\"Column9\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mapping", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"exclude\" size=\"1\" type=\"INT\"/><Column id=\"gridHeadText\" size=\"256\" type=\"STRING\"/><Column id=\"col\" size=\"256\" type=\"STRING\"/><Column id=\"bindColumn\" size=\"256\" type=\"STRING\"/><Column id=\"columnSize\" size=\"4\" type=\"INT\"/><Column id=\"excelColumnIndex\" size=\"256\" type=\"STRING\"/><Column id=\"excelColumnName\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_excelColumn", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" size=\"256\" type=\"STRING\"/><Column id=\"data\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_preview", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "12", "41", null, "54", "12", null, this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);
            obj = new FileUpload("FileUpload", "absolute", null, "0", "83", "26", "580", null, this.Div00);
            obj.getSetter("retry").set("0");
            obj.style.set_itemheight("23");
            obj.style.set_buttonsize("80");
            obj.style.set_editborder("0 none white");
            obj.style.set_editpadding("1 5 0 5");
            obj.style.set_editcolor("black");
            obj.style.set_buttontext("엑셀업로드");
            obj.set_taborder("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grd_importRaw", "absolute", "16", "68", null, "143", "16", null, this);
            obj.set_binddataset("ds_importData");
            obj.set_cellsizingtype("col");
            obj.getSetter("objNm").set("가져온 엑셀 보기 그리드");
            obj.set_taborder("9");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj._setContents("<Formats><Format id=\"default\"></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "16", "232", "140", "26", null, null, this);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("objNm").set("2. 컬럼 연결하기");
            obj.set_taborder("27");
            obj.set_text("2. 컬럼 연결하기");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "375", "230", "140", "26", null, null, this);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("objNm").set("3. 미리보기 수행");
            obj.set_taborder("28");
            obj.set_text("3. 미리보기 수행");
            this.addChild(obj.name, obj);

            obj = new Button("btn_apply00", "absolute", "515", "230", "80", "26", null, null, this);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("미리보기");
            obj.set_taborder("29");
            obj.set_text("미리보기");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_mapping", "absolute", "16", "260", "344", "236", null, null, this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_autoupdatetype("comboselect");
            obj.set_binddataset("ds_mapping");
            obj.getSetter("objNm").set("컬럼 연결하기 그리드");
            obj.set_taborder("31");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"180\"/><Column size=\"180\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"화면의 컬럼\"/><Cell col=\"1\" expr=\"\" text=\"엑셀의 컬럼\"/></Band><Band id=\"body\" style=\"cellline: ;\"><Cell displaytype=\"normal\" style=\"padding: ;\" text=\"bind:gridHeadText\"/><Cell col=\"1\" combocodecol=\"code\" combodatacol=\"data\" combodataset=\"ds_excelColumn\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left middle;padding: ;\" text=\"bind:excelColumnIndex\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_preview", "absolute", "375", "260", "460", "236", null, null, this);
            obj.set_binddataset("ds_preview");
            obj.getSetter("objNm").set("미리보기 그리드");
            obj.set_taborder("32");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" style=\"align:center middle;padding:0 0 0 4;font:bold 9 Dotum;\" text=\"컬럼명\"/></Band><Band id=\"body\" style=\"cellline:1 solid #808080;\"><Cell suppress=\"1\" text=\"Data\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_finish", "absolute", "672", "513", "89", "30", null, null, this);
            obj.set_cssclass("btn_WF_Module");
            obj.set_enable("false");
            obj.getSetter("objNm").set("적용하기");
            obj.set_taborder("34");
            obj.set_text("적용하기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel", "absolute", "775", "512", "60", "30", null, null, this);
            obj.set_cssclass("btn_WF_Module");
            obj.getSetter("objNm").set("닫기");
            obj.set_taborder("35");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "16", "41", "179", "21", null, null, this);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("objNm").set("1. 가져온 엑셀 파일선택");
            obj.set_taborder("36");
            obj.set_text("1. 가져온 엑셀 파일선택");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "542", "517", "120", "26", null, null, this);
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("objNm").set("4. 견적 화면에 반영하기");
            obj.set_taborder("39");
            obj.set_text("4.화면에 반영하기");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 54, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 864, 551, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TabPage_Multiline_0");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("엑셀 업로드 팝업");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item4","btn_apply00","text","gdsLabel","EPRO_LABEL_00459");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Div00.FileUpload","buttontext","gdsLabel","EPRO_LABEL_00436");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("BComExcelUploadPop.xfdl", function(exports) {
        /**
           @file       commExcelUpPoptoDataSet.xfdl
           @desc       엑셀 업로드 팝업(데이터셋으로 리턴)
           @author     김민성
           @makedate   2016.08.01
           @history    
        */

        this.popTitle = gfnMultiLabel("EPRO_LABEL_00436");
        this.fv_targetGrid;

        /**
        	@function	form_onload()
        	@desc   	form_onload 이벤트
        */
        this.form_onload = function(obj,e)
        {
        	var ownFrame = this.getOwnerFrame();
        	if(gfnIsNull(ownFrame.agv_grid)) return;
        	
        	this.fv_targetGrid = ownFrame.agv_grid;
        }

        this.FileUpload_onitemchanged = function(obj,e)
        {	
        	this.Div00.FileUpload.set_uploadurl(application.gvDomain + "/controller/updown/upExcelTempFile?callModule=&methodName="); 
         	this.Div00.FileUpload.upload();
         	this.setWaitCursor(true);
        }
        this.FileUpload01_onsuccess = function(obj,e)
        {
        	this.setWaitCursor(false);

        	if(e.datasets[0]){
        		this.ds_importData.copyData(e.datasets[0]);
        		this.grd_importRaw.createFormat();
        		this.grd_importRaw.set_autofittype("col");
        		//this.grd_importRaw.setFormatRowProperty(0, "size", 1);		
        		this.fn_uploadInit();
        	}
        }

        this.FileUpload_onerror = function(obj,e)
        {
        	this.setWaitCursor(false);
        	gfnAlert("EPRO_LABEL_01102");
        }

        /**
        	@function	btn_close_onclick()
        	@desc   	팝업 닫기
        */
        this.btn_close_onclick = function(obj,e)
        {
        	this.parent.close();
        }

        this.previewFormats = ""; //preview grid format.
         
        /**
        	@function	fn_uploadInit()
        	@desc   	init. form 
        */
        this.fn_uploadInit = function()
        {
        	this.btn_finish.set_enable(false);	
        	
        	this.setPreviewFormats();
        	
        	this.ds_mapping.set_enableevent(false);
        	
        	this.clearDataset();
        	this.fn_clearSpecialletter(); //데이터의 특수문자 제거
        	this.setMappingColumn();
        	
        	this.ds_mapping.set_enableevent(true);
        }

        /**
        	@function	clearDataset()
        	@desc   	데이터셋 클리어
        */
        this.clearDataset = function()
        {
        	this.ds_excelColumn.clearData();
        	this.ds_mapping.clearData();
        	this.ds_preview.clear();
        }

        /**
        	@function	setPreviewFormats()
        	@desc   	포멧미리보기
        */
        this.setPreviewFormats = function()
        {
        	var previewFormats = "";
        	previewFormats += "<Formats>";
        	previewFormats += "<Format id='default'>";
        	previewFormats += "  <Columns>";
        	previewFormats += "    <Column size='100' />";
        	previewFormats += "  </Columns>";
        	previewFormats += "  <Rows>";
        	previewFormats += "    <Row size='32' band='head' />";
        	previewFormats += "    <Row size='27' />";
        	previewFormats += "  </Rows>";
        	previewFormats += "  <Band id='head'>";
        	previewFormats += "    <Cell style='align:center&#32;middle;padding:0&#32;0&#32;0&#32;4;font:bold&#32;9&#32;Dotum;' text='" + gfnMultiLabel("EPRO_LABEL_01101") + "'/>";
        	previewFormats += "  </Band>";
        	previewFormats += "  <Band id='body'>";
        	previewFormats += "    <Cell text='Data' suppress='1'/>";
        	previewFormats += "  </Band>";
        	previewFormats += "</Format>";
        	previewFormats += "</Formats>";

        	this.previewFormats = previewFormats;
        }

        /**
        	@function	setMappingColumn()
        	@desc   	컬럼매칭용 그리드 생성
        */
        this.setMappingColumn = function()
        {
        	var headTextList = this.getHeadTextList();	
        	var bindColumnInfo = this.getBodyBindColumnInfo();
        	var textInfo, col, bindColumn;
        	var headTextLen = headTextList.length;
        	var dsMapping = this.ds_mapping;
        	
        	for(var i=0; i < headTextLen; i++)
        	{
        		textInfo = headTextList[i];
        		col = textInfo.col;
        		bindColumn = bindColumnInfo[col];
        		textInfo["bindColumn"] = bindColumn;
        		textInfo["columnSize"] = this.fv_targetGrid.getRealColSize(i);
        	}

        	var row;
        	
        	var mappingGrid = this.grd_mapping;
        	mappingGrid.set_enableevent(false);
        	mappingGrid.set_enableredraw(false);
        	
        	var headInfo;
        	for(var i = 0; i < headTextLen; i++)
        	{
        		headInfo = headTextList[i];
        		if(gfnIsNull(headInfo.text)) continue;
        		headInfo.text = gfnReplace(headInfo.text, "\<fc v=\'red\'\\>\\* \<\\/fc\\>", "");
        		headInfo.text = gfnReplace(headInfo.text, "▲", "");
        		headInfo.text = gfnReplace(headInfo.text, "▼", "");
        		
        		row = dsMapping.addRow();
        		dsMapping.setColumn(row, "gridHeadText", headInfo.text);
        		dsMapping.setColumn(row, "col", headInfo.col);
        		dsMapping.setColumn(row, "bindColumn", headInfo.bindColumn);
        		dsMapping.setColumn(row, "columnSize", headInfo.columnSize);
        		dsMapping.setColumn(row, "excelColumnIndex", "-1");
        		
        	}	
        	
        	this.ds_excelColumn.addRow();
        	this.ds_excelColumn.setColumn(0, "code", "-1");
        	this.ds_excelColumn.setColumn(0, "data", gfnMultiLabel("EPRO_LABEL_01103"));
        	
        	var excelColumn;
        	var findRow = 0;

        	for(var i = 0; i < this.ds_importData.getColCount(); i++)
        	{
        		excelColumn = this.ds_importData.getColID(i);
        		
        		if(!gfnIsNull(excelColumn)){
        			row = this.ds_excelColumn.addRow();
        			this.ds_excelColumn.setColumn(row, "code", i);
        			this.ds_excelColumn.setColumn(row, "data", excelColumn.trim());
        			
        			findRow = dsMapping.findRow("gridHeadText", excelColumn);
        			
        			if(findRow > -1) dsMapping.setColumn(findRow, "excelColumnIndex", i);
        		}
        	}		

        	dsMapping.set_rowposition(-1);
        	
        	mappingGrid.set_enableevent(true);
        	mappingGrid.set_enableredraw(true);	
        	
        }
         
        /**
        	@function	fn_clearSpecialletter()
        	@desc   	데이터의 특수문자 제거
        */
        this.fn_clearSpecialletter = function()
        {
        	this.ds_importData.set_enableevent(false);
        	for(var i = 0; i < this.ds_importData.getColCount(); i++)
        	{
        		for(var k=0;k<this.ds_importData.rowcount;k++)
        		{
        			var dsValue = this.ds_importData.getColumn(k, i);
        			
        // 			dsValue = gfnReplace(dsValue, '\\.', '');
        // 			dsValue = gfnReplace(dsValue, '\\-', '');
        // 			dsValue = gfnReplace(dsValue, '\\/', '');
        //  			dsValue = gfnReplace(dsValue, '\\*', '');
        //  			dsValue = gfnReplace(dsValue, '\\,', '');
         			dsValue = gfnReplace(dsValue, '\\&', '＆');
        /* 			dsValue = gfnReplace(dsValue, '\\$', '');*/
         			dsValue = gfnTrim(dsValue);
        			
        			//특수문자 제거결과가 숫자일 경우에는 특수문자 제거한 값으로 세팅
        			if(!gfnIsNum(dsValue)) continue; 
        			
        			this.ds_importData.setColumn(k, i, dsValue);		
        		}
        	}
        	//수량과, 단가의 특수문자를 제거한다.
        	for(var i=0;i<this.grd_importRaw.getFormatColCount();i++){
        		var bindCol = this.ds_importData.getColID(i).toUpperCase();
        		if( (bindCol == gfnMultiLabel("EPRO_LABEL_00617").toUpperCase() || bindCol == gfnMultiLabel("EPRO_LABEL_00572").toUpperCase()) && this.ds_importData.rowcount > 1){
        			var sOld;
        			for(var j=0;j<this.ds_importData.rowcount;j++){
        				sOld = this.ds_importData.getColumn(j,i);
        				if(!gfnIsNull(sOld)){
        					var sNew = sOld.replace(/[^0-9]/g,''); 
        					this.ds_importData.setColumn(j,i,sNew);
        				}
        			}
        		}
        	}
        	this.ds_importData.set_enableevent(true);
        }
         
        /**
        	@function	getHeadTextList()
        	@desc   	body 밴드 컬럼에 일치되는 head text 정보를 반환한다.
        */ 
        this.getHeadTextList = function()
        {
        	var band = "head";
        	var cellCount = this.fv_targetGrid.getCellCount(band);
        	
        	if(cellCount == 0) return 0;
        	
        	var col = 0;
        	var textInfo = {};
        	var textList = [];
        	var text;
        	for (var i = 0; i < cellCount; i++) 
        	{
        		//Head Row가 2개이상일 경우, 첫번째 Head Text만 가저오게끔. 2개이상일시 col이 겹침.
        		if("0" == this.fv_targetGrid.getCellProperty(band, i,"row")){
        			col  = this.fv_targetGrid.getCellProperty(band, i,"col");
        			text = this.fv_targetGrid.getCellProperty(band, i,"text");
        			textInfo[col] = text;
        		}
        	}
        	
        	//head값을 col 값의 내림차순에 따라 정렬한다.
        	for(var name in textInfo)
        	{
        		textList.push({col:name, text: textInfo[name]});
        	}
        	
        	textList = textList.sort(this.sortAsc);
        	
        	return textList;
        }
         
         
        /**
        	@function	getBodyBindColumnInfo()
        	@desc   	body 밴드의 cellIndex별 bind column 정보를 반환한다.
        */  
        this.getBodyBindColumnInfo = function()
        {
        	//body의 bindColumn정보를 추출한다.
        	var band = "body";
        	var bodyCellCount = this.fv_targetGrid.getCellCount(band);
        	var tempText;
        	var bindColumnInfo = {};
        	for (var i = 0; i < bodyCellCount; i++) 
        	{
        		tempText = this.fv_targetGrid.getCellProperty(band, i, "text");
        		bindColumn = "";
        		
        		if(tempText && (tempText.indexOf("bind:") > -1) ) 
        		{
        			bindColumn = tempText.replace("bind:","");
        		}

        		bindColumnInfo[i] = bindColumn; 
            }
            
            return bindColumnInfo;
        }

        /**
        	@function	sortAsc()
        	@desc   	내림차순 정렬함수
        */  
        this.sortAsc = function(l,r) 
        {
          if ( l.col < r.col ) return -1;
          if ( l.col > r.col ) return 1;
          return 0;
        }
         
        /**
        	@function	btn_apply_onclick()
        	@desc   	컬럼매칭 미리보기
        */ 
        this.btn_apply_onclick = function(obj,e)
        {
        	if(gfnIsNull(this.previewFormats)){
        		gfnAlert("EPRO_LABEL_01104");
        		return;
        	}
        	
        	var dsMapping = this.ds_mapping;
        	var grdPreview = this.grd_preview;
        	var dsPreview = this.ds_preview;
        	
        	grdPreview.set_formats("<Formats>" + this.previewFormats + "</Formats>"); //초기화
        		
        	var rowCount = dsMapping.rowcount;
        	dsPreview.clear();
        	
        	grdPreview.set_enableevent(false);
        	grdPreview.set_enableredraw(false);
        	
        	var columnName;
        	var copyColumnInfo = "";
        	for(var i = 0; i < rowCount; i++)
        	{
        		if(dsMapping.getColumn(i, "excelColumnIndex") == "-1") continue;
        		
        		columnName = this.setGridPreiview(i);
        		dsMapping.setColumn(i, "excelColumnName", columnName);
        		
        		if(copyColumnInfo.length == 0)
        		{
        			copyColumnInfo = columnName + "="+ columnName;
        		}
        		else
        		{
        			copyColumnInfo += "," + columnName + "="+ columnName;
        		}
        		
        	}
        	
        	if(copyColumnInfo.length == 0)
        	{
        		gfnAlert("EPRO_LABEL_01105");
        		return;
        	}
        	
        	this.setPreviewData(copyColumnInfo);

        	grdPreview.set_enableevent(true);
        	grdPreview.set_enableredraw(true);	
        	
        	dsPreview.set_rowposition(0);
        	this.btn_finish.set_enable(true);	
        }

        /**
        	@function	setGridPreiview()
        	@desc   	미리보기
        */ 
        this.setGridPreiview = function(rowIndex)
        {
        	var dsMapping = this.ds_mapping;
        	var grdMapping = this.grd_mapping;
        	var grdPreview = this.grd_preview;
        	var gridHeadText = dsMapping.getColumn(rowIndex, "gridHeadText");
        	var columnSize = dsMapping.getColumn(rowIndex, "columnSize");
        	var excelColumnText = grdMapping.getCellText(rowIndex,2);
        	var excelColumnIndex = dsMapping.getColumn(rowIndex, "excelColumnIndex");
        	var columnInfo = this.ds_importData.getColumnInfo(nexacro.toNumber(excelColumnIndex));
        	var columnName = columnInfo.name;

        	var cellIndex = grdPreview.appendContentsCol("body");
        	
        	if(columnSize == 0) columnSize = 120;
        	
        	grdPreview.setFormatColProperty(cellIndex, "size", columnSize);
        	grdPreview.setCellProperty("Head", cellIndex, "text", gridHeadText);
        	
        	this.ds_preview.addColumn(columnName, "string");
        	
        	grdPreview.setCellProperty("body", cellIndex, "text", "bind:" + columnName);
        	return columnName;
        	
        }
         
        /**
        	@function	setPreviewData()
        	@desc   	미리보기data 생성
        */
        this.setPreviewData = function(copyColumnInfo)
        {
         	var dataset = this.ds_importData;
         	var dsPreview = this.ds_preview;
         	var rowCount = dataset.rowcount;	
        	var rowIndex = 0;
        	var i = 0;
        	
         	for(; i < rowCount; i++)
         	{
        		rowIndex = dsPreview.addRow();
        		dsPreview.copyRow(rowIndex, dataset, i, copyColumnInfo);
         	}
        }

        /**
        	@function	btn_finish_onclick()
        	@desc   	엑셀업로드 finish
        */
        this.btn_finish_onclick = function(obj,e)
        {	
        	var copyColumnInfo;	
        	
        	var dataset;
        	dataset = this.ds_importData;
        	copyColumnInfo = this.getCopyColumnInfo();
        	
        	var targetDataset = this.fv_targetGrid.getBindDataset();
        	var ds_temp = gfnGetTmpDs("ds_temp",targetDataset); 
        	ds_temp.clearData();
        	
        	var rowCount = dataset.rowcount;	
        	var rowIndex = 0;
        	var i = 0;
        	
        	for(; i < rowCount; i++)
        	{
        		rowIndex = ds_temp.addRow();
        		ds_temp.copyRow(rowIndex, dataset, i, copyColumnInfo);
        	}
        	
        	this.parent.close(ds_temp.saveXML());		
        }
         
        /**
        	@function	getCopyColumnInfo()
        	@desc   	dataset copyRow를 위한 컬럼정보를 반환한다.
        */ 
        this.getCopyColumnInfo = function()
        {	
        	var dsMapping = this.ds_mapping;
        	var rowCount = dsMapping.rowcount;
        	var columnName;
        	var copyColumnInfo = "";
        	for(var i = 0; i < rowCount; i++)
        	{
        		if(dsMapping.getColumn(i, "excelColumnIndex") == "-1") continue;
        		
        		columnName = dsMapping.getColumn(i, "bindColumn") + " = " + dsMapping.getColumn(i, "excelColumnName");
        		
        		if(copyColumnInfo.length == 0)
        		{
        			copyColumnInfo = columnName;
        		}
        		else
        		{
        			copyColumnInfo += "," + columnName;
        		}
        	}
        	
        	return copyColumnInfo;

        }

        /**
        	@function	ds_mapping_oncolumnchanged()
        	@desc   	ds_mapping_oncolumnchanged
        */ 
        this.ds_mapping_oncolumnchanged = function(obj,e)
        {
        	this.btn_finish.set_enable(false);	
        }

        /**
        	@function	btn_cancel_onclick()
        	@desc   	btn_cancel_onclick
        */ 
        this.btn_cancel_onclick = function(obj,e)
        {
        	this.parent.close();
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_mapping.addEventHandler("oncolumnchanged", this.ds_mapping_oncolumnchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.Div00.FileUpload.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.Div00.FileUpload.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.Div00.FileUpload.addEventHandler("onsuccess", this.FileUpload01_onsuccess, this);
            this.grd_importRaw.addEventHandler("oncelldblclick", this.fn_thisClose, this);
            this.grd_importRaw.addEventHandler("onkeydown", this.grd_page_onkeydown, this);
            this.btn_apply00.addEventHandler("onclick", this.btn_apply_onclick, this);
            this.btn_finish.addEventHandler("onclick", this.btn_finish_onclick, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_cancel_onclick, this);

        };

        this.loadIncludeScript("BComExcelUploadPop.xfdl", true);

       
    };
}
)();
