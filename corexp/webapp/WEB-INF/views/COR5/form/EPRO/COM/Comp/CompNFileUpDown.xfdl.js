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
                this.set_name("FileUpDownload");
                this.set_titletext("파일업다운로드");
                this._setFormPosition(0,0,1220,200);
            }
            this.style.set_font("9 Dotum");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_files", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHECKED\" size=\"256\" type=\"STRING\"/><Column id=\"fileid\" size=\"256\" type=\"STRING\"/><Column id=\"fileimg\" size=\"256\" type=\"STRING\"/><Column id=\"filename\" size=\"256\" type=\"STRING\"/><Column id=\"filetype\" size=\"256\" type=\"STRING\"/><Column id=\"filesize\" size=\"256\" type=\"INT\"/><Column id=\"tranfilesize\" size=\"256\" type=\"INT\"/><Column id=\"prog\" size=\"256\" type=\"INT\"/><Column id=\"rmimg\" size=\"256\" type=\"STRING\"/><Column id=\"status\" size=\"256\" type=\"STRING\"/><Column id=\"filekey\" size=\"256\" type=\"STRING\"/><Column id=\"downcnt\" size=\"256\" type=\"STRING\"/><Column id=\"compId\" size=\"256\" type=\"STRING\"/><Column id=\"EX_FILE_KEY\" size=\"600\" type=\"string\"/><Column id=\"FILE_DESC\" size=\"300\" type=\"string\"/><Column id=\"PHY_FILE_NM\" size=\"600\" type=\"string\"/><Column id=\"REF_KEY_1\" size=\"20\" type=\"string\"/><Column id=\"REF_KEY_3\" size=\"20\" type=\"string\"/><Column id=\"REF_CNT\" size=\"22\" type=\"int\"/><Column id=\"REF_KEY_2\" size=\"20\" type=\"string\"/><Column id=\"REF_KEY_5\" size=\"20\" type=\"string\"/><Column id=\"FILE_ID\" size=\"20\" type=\"string\"/><Column id=\"REF_KEY_4\" size=\"20\" type=\"string\"/><Column id=\"EX_FILE_NM\" size=\"600\" type=\"string\"/><Column id=\"FILE_PATH_ID\" size=\"20\" type=\"string\"/><Column id=\"CRTR_ID\" size=\"50\" type=\"string\"/><Column id=\"REF_TBL_NM\" size=\"150\" type=\"string\"/><Column id=\"FILE_EXTN\" size=\"300\" type=\"string\"/><Column id=\"LGCL_FILE_NM\" size=\"600\" type=\"string\"/><Column id=\"FILE_SIZE\" size=\"22\" type=\"int\"/><Column id=\"CRT_DT\" size=\"7\" type=\"string\"/><Column id=\"FILE_GUBUN\" size=\"256\" type=\"STRING\"/><Column id=\"ROW_NO\" size=\"256\" type=\"STRING\"/><Column id=\"FILE_SAVE_PATH\" size=\"256\" type=\"STRING\"/><Column id=\"ROW_TYPE\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_fileKey", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"REF_TBL_NM\" size=\"150\" type=\"string\"/><Column id=\"REF_KEY_1\" size=\"20\" type=\"string\"/><Column id=\"REF_KEY_2\" size=\"20\" type=\"string\"/><Column id=\"REF_KEY_3\" size=\"20\" type=\"string\"/><Column id=\"REF_KEY_4\" size=\"20\" type=\"string\"/><Column id=\"REF_KEY_5\" size=\"20\" type=\"string\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_delFiles", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"fileid\" size=\"256\" type=\"STRING\"/><Column id=\"fileimg\" size=\"256\" type=\"STRING\"/><Column id=\"filename\" size=\"256\" type=\"STRING\"/><Column id=\"filetype\" size=\"256\" type=\"STRING\"/><Column id=\"filesize\" size=\"256\" type=\"INT\"/><Column id=\"tranfilesize\" size=\"256\" type=\"INT\"/><Column id=\"prog\" size=\"256\" type=\"INT\"/><Column id=\"rmimg\" size=\"256\" type=\"STRING\"/><Column id=\"status\" size=\"256\" type=\"STRING\"/><Column id=\"filekey\" size=\"256\" type=\"STRING\"/><Column id=\"downcnt\" size=\"256\" type=\"STRING\"/><Column id=\"EX_FILE_KEY\" size=\"600\" type=\"string\"/><Column id=\"FILE_DESC\" size=\"300\" type=\"string\"/><Column id=\"PHY_FILE_NM\" size=\"600\" type=\"string\"/><Column id=\"REF_KEY_1\" size=\"20\" type=\"string\"/><Column id=\"REF_KEY_3\" size=\"20\" type=\"string\"/><Column id=\"REF_CNT\" size=\"22\" type=\"int\"/><Column id=\"REF_KEY_2\" size=\"20\" type=\"string\"/><Column id=\"REF_KEY_5\" size=\"20\" type=\"string\"/><Column id=\"FILE_ID\" size=\"20\" type=\"string\"/><Column id=\"REF_KEY_4\" size=\"20\" type=\"string\"/><Column id=\"EX_FILE_NM\" size=\"600\" type=\"string\"/><Column id=\"FILE_PATH_ID\" size=\"20\" type=\"string\"/><Column id=\"CRTR_ID\" size=\"50\" type=\"string\"/><Column id=\"REF_TBL_NM\" size=\"150\" type=\"string\"/><Column id=\"FILE_EXTN\" size=\"300\" type=\"string\"/><Column id=\"LGCL_FILE_NM\" size=\"600\" type=\"string\"/><Column id=\"FILE_SIZE\" size=\"22\" type=\"int\"/><Column id=\"CRT_DT\" size=\"7\" type=\"string\"/><Column id=\"FILE_GUBUN\" size=\"256\" type=\"STRING\"/><Column id=\"ROW_NO\" size=\"256\" type=\"STRING\"/><Column id=\"FILE_SAVE_PATH\" size=\"256\" type=\"STRING\"/><Column id=\"ROW_TYPE\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_filesOut", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"fileid\" size=\"256\" type=\"STRING\"/><Column id=\"fileimg\" size=\"256\" type=\"STRING\"/><Column id=\"filename\" size=\"256\" type=\"STRING\"/><Column id=\"filesize\" size=\"256\" type=\"STRING\"/><Column id=\"tranfilesize\" size=\"256\" type=\"STRING\"/><Column id=\"prog\" size=\"256\" type=\"STRING\"/><Column id=\"PHY_FILE_NM\" size=\"256\" type=\"STRING\"/><Column id=\"LGCL_FILE_NM\" size=\"256\" type=\"STRING\"/><Column id=\"FILE_SIZE\" size=\"256\" type=\"STRING\"/><Column id=\"FILE_GUBUN\" size=\"256\" type=\"STRING\"/><Column id=\"CHECKED\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new FileUpload("FileUpload", "absolute", null, "5", "70", "23", "63", null, this);
            obj.set_multiselect("true");
            obj.getSetter("retry").set("0");
            obj.style.set_editborder("0 none white");
            obj.style.set_editcolor("black");
            obj.style.set_buttontext("파일추가");
            obj.set_taborder("31");
            obj.set_uploadurl("http://localhost:8080/controller/updown/upTempFile?fileGubun=temp");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "0", "30", null, "163", "0", null, this);
            obj.set_autofittype("col");
            obj.set_binddataset("ds_files");
            obj.set_taborder("37");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"762\"/><Column size=\"75\"/><Column size=\"224\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" expr=\"\" text=\"파일명\"/><Cell col=\"2\" expr=\"\" text=\"다운로드\"/><Cell col=\"3\" expr=\"\" text=\"사이즈\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECKED\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:LGCL_FILE_NM\"/><Cell col=\"2\" displaytype=\"expr:filename==''?'nomal':'button'\" edittype=\"button\" style=\"controlbackground:URL('img::grdBtn_file.png') center middle;controlborder:1 none #808080ff ;\"/><Cell col=\"3\" style=\"align:right;\" text=\"bind:FILE_SIZE\"/></Band></Format><Format id=\"VMODE\"><Columns><Column size=\"762\"/><Column size=\"75\"/><Column size=\"224\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell expr=\"\" text=\"파일명\"/><Cell col=\"1\" expr=\"\" text=\"다운로드\"/><Cell col=\"2\" expr=\"\" text=\"사이즈\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:LGCL_FILE_NM\"/><Cell col=\"1\" displaytype=\"expr:filename==''?'nomal':'button'\" edittype=\"button\" style=\"controlbackground:URL('img::grdBtn_file.png') center middle;controlborder:1 none #808080ff ;\"/><Cell col=\"2\" style=\"align:right;\" text=\"bind:FILE_SIZE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("FileDelete", "absolute", null, "5", "58", "20", "0", null, this);
            obj.set_taborder("40");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1220, 200, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("FileUpDownload");
            		p.style.set_font("9 Dotum");
            		p.set_titletext("파일업다운로드");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("CompNFileUpDown.xfdl", function(exports) {
        this.isInit = false; //초기화 여부
        this.rowNo = 0; //임시저장을 위한 키값을 저장한다.
        this.readonlyYn = "N"; //읽기전용 모드
        this.parentForm;
        this.compId;
        this.parentDs;
        this.mainFileDs;
        this.arrFilterCond;
        this.fileExtAccess="";
        this.FileUpDownload_onload = function(obj,e)
        {
        	gfnSetGrdFunc(this.Grid00, null, this);
        }
        this.fnFileInit = function(obj,compId,parentDs,arrFilterCond,readonlyYn,userFilter,fileExt)
        {
        		if(!gfnIsNull(fileExt)){
        			this.fileExtAccess=fileExt;
        		}
        		this.ds_delFiles.clearData();
        		this.ds_files.clearData();
        		
        		this.parentForm = obj;
        		this.compId = compId;
        		this.parentDs = parentDs;
        		this.mainFileDs = this.parentForm._ds_mainFiles;
        		this.arrFilterCond=arrFilterCond;

        		userFilter = gfnIsNull(userFilter) ? "" : " && " + userFilter;
        		this.ds_files.set_useclientlayout(false);	
        			
        		if(this.mainFileDs.getConstCount()==0){
        			this.mainFileDs.addConstColumn("MAX_ROW_NO");
        			this.mainFileDs.setConstColumn("MAX_ROW_NO",0);
        		}
        		if(gfnIsNull(parentDs.getColumnInfo("ROW_NO"))){
        			parentDs.addColumn("ROW_NO");
        		}
        		
        		this.mainFileDs.filter("REF_TBL_NM=='" + this.compId +"'" + userFilter); 	
        		this.ds_files.copyData(this.mainFileDs, true); 	
        		this.mainFileDs.filter("");

        		if(readonlyYn == "Y")
        		{
        			this.Grid00.set_formatid("VMODE");
        			this.FileUpload.set_visible(false);
        			this.FileDelete.set_visible(false);
        		}

        	if(!gfnIsNull(parentDs.getColumn(parentDs.rowposition, "ROW_NO"))){
        		this.rowNo = parentDs.getColumn(parentDs.rowposition, "ROW_NO");   
         	}else{
        		var maxRowNo = Number(gfnNvl(this.mainFileDs.getConstColumn("MAX_ROW_NO"),0))+1;
        		this.rowNo = maxRowNo;
        		parentDs.setColumn(parentDs.rowposition, "ROW_NO", maxRowNo);
        		this.mainFileDs.setConstColumn("MAX_ROW_NO",maxRowNo);
         	}
         	if(!gfnIsNull(arrFilterCond))
         	{
        		var filterStr = "";
        		
        		if(parentDs.getRowType(parentDs.rowposition) == 2){
        			filterStr = "ROW_NO=='" + parentDs.getColumn(parentDs.rowposition, "ROW_NO")+"'";
         		}else{ //rowType Normal인 데이터 필터조회 처리
         			for(var i=0;i<arrFilterCond.length;i++)
         			{
         				if(filterStr!="") filterStr+="&&";
         				filterStr += "REF_KEY_" + (i+1) + "=='" + arrFilterCond[i]+"'";
         			}
         			if(!gfnIsNull(parentDs.getColumn(parentDs.rowposition, "ROW_NO"))){
        				filterStr += " || ROW_NO=='" + parentDs.getColumn(parentDs.rowposition, "ROW_NO")+"'";
         			}
         		}
        		this.ds_files.filter(filterStr);	
        	}
        }
        /**
          * @함수명	: fnSetFileMode
          * @input		: gubun(String) Y : 첨부가능한 모드, N : 읽기모드
          * @desc     	: 1.첨부 가능한 모드, 2.읽기모드로 세팅한다.
          */
        this.fnSetFileMode = function(gubun)
        {
        	if(gfnIsNull(gubun)) return;	
        	var readonlyYn = (gubun == "Y") ? true : false ;
        	if(!readonlyYn){
        		this.Grid00.set_formatid("VMODE");
        	}
        	this.FileUpload.set_visible(readonlyYn);
        	this.FileDelete.set_visible(readonlyYn);
        }
        this.FileUpload_onitemchanged = function(obj,e)
        {
         	this.FileUpload.set_uploadurl(application.gvDomain + "/controller/updown/upTempFile?fileGubun=temp&fileExtChk="+this.fileExtAccess); 	
         	this.FileUpload.upload();
         	this.setWaitCursor(true);
        }
        this.FileUpload01_onsuccess = function(obj,e)
        {
        	this.setWaitCursor(false);

        	if(e.datasets[0]){

        		//this.ds_filesOut.appendData(e.datasets[0],true,false);
        		for(var i=0;i<e.datasets[0].rowcount;i++){
        			var fRow = this.ds_files.addRow();
        			this.ds_files.setColumn(fRow,"filename", e.datasets[0].getColumn(i,"LGCL_FILE_NM"));
        			this.ds_files.setColumn(fRow,"PHY_FILE_NM",e.datasets[0].getColumn(i,"PHY_FILE_NM"));
        			this.ds_files.setColumn(fRow,"LGCL_FILE_NM",e.datasets[0].getColumn(i,"LGCL_FILE_NM"));
        			this.ds_files.setColumn(fRow,"FILE_SIZE",e.datasets[0].getColumn(i,"FILE_SIZE"));
        			this.ds_files.setColumn(fRow,"filesize",e.datasets[0].getColumn(i,"FILE_SIZE"));
        			this.ds_files.setColumn(fRow,"FILE_GUBUN",e.datasets[0].getColumn(i,"FILE_GUBUN"));
        			this.ds_files.setColumn(fRow,"REF_TBL_NM",this.compId);
        			this.ds_files.setColumn(fRow,"ROW_NO",this.rowNo);
        			
        			this.mainFileDs.set_updatecontrol(true);
        			var mRow = this.mainFileDs.addRow();
        			this.mainFileDs.copyRow(mRow, this.ds_files, fRow);
        			this.mainFileDs.setColumn(mRow,"ROW_TYPE","C");
        		}
        	}
        }
        this.FileUpload_onerror = function(obj,e)
        {
        	this.setWaitCursor(false);
        	gfnAlert(gfnMultiLabel(e.errormsg ));
        }
        this.fn_fileDelete = function(obj,e)
        {
        	this.ds_delFiles.clearData();
        	
        	for(var i=0; i<this.ds_files.getRowCount() ;i++){
        		if(this.ds_files.getColumn(i,"CHECKED")=="1"){
        			if(this.ds_files.getRowType(i) == 2){
        			//임시저장
        				var row = this.ds_delFiles.addRow();
        				this.ds_delFiles.copyRow(row, this.ds_files, i);
        			}
        		}
        	}
        	
        	if(this.ds_delFiles.getRowCount()>0){
        		var strSvcID =  "fileDelete:fn_trCallBack" ;			
        		var strURL = application.gvDomain + "/controller/updown/delTempFile";
        		var strInDatasets = "ds_filesOut=ds_delFiles";
        		var strOutDatasets = "";
        		var strArgument = "";	

        		var strCallbackFunc = function(strSvcID, errorCode, errorMsg){
        									gfnTranCallBack(this, strSvcID, errorCode, errorMsg)
        							  };

        		this.transaction(strSvcID, strURL, strInDatasets, strOutDatasets, strArgument, strCallbackFunc, true, 2);
        	}else{
        		for(var i=this.ds_files.getRowCount(); i>=0 ;i--){
        			if(this.ds_files.getColumn(i,"CHECKED")=="1"){
        				if(this.ds_files.getRowType(i) != 2){
        					//DB저장
        					var row = this.mainFileDs.findRow("FILE_ID",this.ds_files.getColumn(i,"FILE_ID"));
        					if(row >-1){
        						this.mainFileDs.deleteRow(row);
        						this.ds_files.deleteRow(i);
        					}
        				}
        			}
        		}
        	}
        }

        /**
        	@function	fn_trCallBack()
        	@desc   	Transaction Callback함수
        */
        this.fn_trCallBack = function(strSvcID,strErrCd,strErrMsg)
        {
        	if(strErrCd < 0)
        	{
        		alert(strErrMsg);
        		return;
        	}	
        	
        	switch(strSvcID)
        	{		
        		case "fileDelete" :	//조회
        			for(var i=this.ds_files.getRowCount(); i>=0 ;i--){
        				if(this.ds_files.getColumn(i,"CHECKED")=="1"){
        					if(this.ds_files.getRowType(i) == 2){
        						//임시저장
        						var row = this.mainFileDs.findRow("PHY_FILE_NM",this.ds_files.getColumn(i,"PHY_FILE_NM"));
        						if(row >-1){
        							this.mainFileDs.deleteRow(row);
        							this.ds_files.deleteRow(i);
        						}
        						
        					}else{
        						//DB저장
        						var row = this.mainFileDs.findRow("FILE_ID",this.ds_files.getColumn(i,"FILE_ID"));
        						if(row >-1){
        							this.mainFileDs.deleteRow(row);
        							this.ds_files.deleteRow(i);
        						}
        					}
        				}
        			}
        			//alert(strErrMsg);
        		break;	
        	}
        }

        /**
        	@function	fnOnCellClick()
        	@desc   	그리드 이미지 클릭 다운로드 이벤트
        */
        this.fnOnCellClick = function(obj,e)
        {	
        	var mode = this.Grid00.formatid;
        	var cell = mode=="VMODE"?"1":"2";
        	if(e.cell == cell && obj.getCurEditType() == "button"){
        		var rows = this.ds_files.findRow("CHECKED","1");
        		var downUrl = application.gvDomain + "/controller/updown/downFile?fileName="+this.ds_files.getColumn(e.row,"PHY_FILE_NM")+"&lgclFileNm="+escape(encodeURIComponent(this.ds_files.getColumn(e.row,"LGCL_FILE_NM")))+"&filePathId="+this.ds_files.getColumn(e.row,"FILE_GUBUN");
        		system.execBrowser(downUrl);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.FileUpDownload_onload, this);
            this.FileUpload.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.FileUpload.addEventHandler("onsuccess", this.FileUpload01_onsuccess, this);
            this.Grid00.addEventHandler("oncellclick", this.fnOnCellClick, this);
            this.FileDelete.addEventHandler("onclick", this.fn_fileDelete, this);

        };

        this.loadIncludeScript("CompNFileUpDown.xfdl", true);

       
    };
}
)();
