﻿/*
 ===============================================================================
 == Dataset 관련 공통함수들은 여기에 작성한다.
 ===============================================================================
 ● gfnGetDsUpdate       : 데이터셋 수정여부 체크
 ● gfnGetChkRowString   : 데이터셋 체크된 행만 saveXML 리턴(팝업에서 사용됨)
 ● gfnGetSelRowString   : 데이터셋 선택된 행 saveXML 리턴(팝업에서 사용됨)
 ● gfnChkDelConfirm     : 데이터셋(그리드) 체크된 행 Confirm 받고 삭제
 ● gfnDsChkDel          : 데이터셋(그리드) 체크된 행 삭제
 ● gfnIsGrdChk          : 데이터셋(그리드) 체크된 행 유무 리턴
 ● gfnGetTmpDs          : 임시 데이터셋 생성
 ● gfnCheckDataOverlap 	: dataset에 입력받은 데이터와 같은 값이 있는지 체크한다.
 */


/*********************************************************************
 * 함 수 명 	: gfnGetDsUpdate
 * 함수설명 	: 데이터셋 수정여부 체크
 * 입    력 	: obj {Dataset} 체크할 데이터셋
				  bMsg {Boolean} Alert 메시지 출력여부
				  sExcpColNm {String} 체크 제외할 컬럼, 2개이상 일경우 구분자 : ","
				  obj:Dataset, bMsg, sExcpColNm
 *********************************************************************/
gfnGetDsUpdate = function(formObj, obj, bMsg, sExcpColNm)
{
	if(gfnIsNull(obj) || obj.toString().toUpperCase() != "[OBJECT DATASET]")
	{
		trace("comm warning : gfnGetDsUpdate() 함수의 인자가 잘못 되었습니다.");
		return false;
	}
	
    //------------------------------------------------------------------------------------
    //현재포커스의object의 bind정보에 반영한다.
    //------------------------------------------------------------------------------------
    
    var objComp = formObj.getFocus();
  
    if(objComp != null && (objComp instanceof Calendar || objComp instanceof CheckBox|| objComp instanceof Combo || objComp instanceof Edit || objComp instanceof Grid || 
     objComp instanceof ListBox || objComp instanceof MaskEdit || objComp instanceof Radio || objComp instanceof Spin || objComp instanceof TextArea))
    {
        formObj.getFocus().updateToDataset();
    }

	if ( typeof bMsg == "undefined" ) bMsg = false;
		
	if ( obj.getDeletedRowCount() > 0 )
	{
		return true;
	}
	else
	{
		if ( obj.getRowCount() == 0 )
		{
			if(bMsg == true)
			{
				//gfnAlert("I", "처리할 데이타가 존재하지 않습니다.");
				gfnAlert("EPRO_LABEL_00898");
			}
			
			return false;
		}
	}
	
	var arrColNm = new Array();
	
	if(!gfnIsNull(sExcpColNm)) arrColNm = sExcpColNm.replace(" ","").split(",");

	for(var i = 0, x=obj.getRowCount() ; i < x ; i++ ){
		if( obj.getRowType(i) == 1 || obj.getRowType(i) == 16 ){	//RowType : normal, 그룹
		}else if( obj.getRowType(i) == 2 || obj.getRowType(i) == 8 ){ //RowType : 추가, 삭제
			return true; 
		}else{ // RowType : 수정			
			for( var j = 0, y=obj.getColCount() ; j < y; j++ ){		
				trace(obj.getRowType(i))
				var bFlag = false;
				for( var k=0, z=arrColNm.length;k<z;k++) {
					trace("컬럼제외");
					//제외할 컬럼
					if( obj.getColID(j) == arrColNm[k]){
						//레이블 for문 버그 발생함
						//break aaa;
						bFlag = true;
						break;	
					}
				}
				
				if(bFlag) continue; //제외할 컬럼을 만났을때는 Col을 넘어감.
				
				//if( !Eco.isEmpty(obj.getOrgColumn(i, j)) && !Eco.isEmpty(obj.getColumn(i, j)) ){
				trace("getOrgColumn => " + obj.getOrgColumn(i, j))
				trace("getColumn => " + obj.getColumn(i, j))
					if( obj.getOrgColumn(i, j) != obj.getColumn(i, j) ){
						if(gfnIsNull(obj.getOrgColumn(i, j))) continue;
						return true;  
					}
				//}				
			}
		}
	}
	
	if ( bMsg == true ) 
	{
		//gfnAlert("I", "변경내역이 없습니다.");
		gfnAlert("EPRO_LABEL_00771");
	}
	
	return false;
}

/*********************************************************************
 * 함 수 명 	: gfnGetChkRowString
 * 함수설명 	: 데이터셋 체크된 행만 saveXML 리턴
 * 입    력 	: obj {Dataset} 데이터셋
				  colId {String} 체크 컬럼명
 * 반    환     : String
 *********************************************************************/
gfnGetChkRowString = function(obj, colId)
{
	if(!gfnIsGrdChk(obj)){
		gfnAlert("선택된 행이 없습니다.");
		return false;
	}
	
	var sColId = gfnIsNull(colId) ? "CHECKED" : colId;

	obj.set_enableevent(false);
	obj.filter(sColId + "== '1'");
		
	var objTmpDs = new Dataset;
	objTmpDs.copyData(obj, true);
	
	obj.filter("");
	obj.set_enableevent(true);
		
	return objTmpDs.saveXML();
}


/**
	@function	gfnGetSelRowString()
	@param		ds {Dataset} 데이터셋
	@return		saveXML {String} 데이터셋 포멧
	@desc   	데이터셋 선택된 행 saveXML 리턴
*/ 
gfnGetSelRowString = function(ds)
{	
	if(ds.rowposition < 0){
		gfnAlert("선택된 행이 없습니다.");
		return false;
	}
	
	var objTmpDs = gfnGetTmpDs("objTmpDs", ds);
	
	//선택 행 복사
	var nRow = objTmpDs.addRow();
	objTmpDs.copyRow(nRow, ds, ds.rowposition);
	
	return objTmpDs.saveXML();
}

/**
  * @함수명	: gfnDsChkDel
  * @input    	: ds:Dataset(그리드 바인드 된 데이터셋), chkColId:String(체크박스 컬럼 ID, Default:'CHECKED')
  * @desc     	: 데이터셋 체크된 행 삭제
  */
gfnDsChkDel = function(ds, chkColId)
{
	var sColId = gfnIsNull(chkColId) ? 'CHECKED' : chkColId;	
	var chkCount = ds.getCaseCount(sColId + " == '1'");

	if(chkCount < 1){
		gfnAlert("EPRO_LABEL_00895");
		return false;
	}
	
	ds.set_enableevent(false);	
	for(var i=ds.getRowCount(); i>=0; i--){
		if(ds.getColumn(i, sColId) == 1){
			ds.deleteRow(i);
		}		
	}
	ds.set_enableevent(true);
	
	return true;
}

/**
  * @함수명	: gfnChkDelConfirm
  * @input    	: ds:Dataset(그리드 바인드 된 데이터셋)
					, chkColId:String(체크박스 컬럼 ID, Default:'CHECKED')
					, msg(삭제시 gfnConfirm 메시지, Default:'선택된 행을 삭제하시겠습니까?')
  * @desc     	: 데이터셋 체크된 행 삭제시 원하는 gfnConfirm 메시지 띄우기
  */
gfnChkDelConfirm = function(ds, chkColId, msg)
{
	var sColId = gfnIsNull(chkColId) ? 'CHECKED' : chkColId;	
	var chkCount = ds.getCaseCount(sColId + " == '1'");

	if(chkCount < 1){
		gfnAlert("EPRO_LABEL_00895");
		return false;
	}
	
	var sMsg = !gfnIsNull(msg) ? msg : "EPRO_LABEL_00897";
	if(!gfnConfirm(sMsg)) return false;
	
	ds.set_enableevent(false);	
	for(var i=ds.getRowCount(); i>=0; i--){
		if(ds.getColumn(i, sColId) == 1){
			ds.deleteRow(i);
		}		
	}
	ds.set_enableevent(true);
	
	return true;
}

/*--------------------------------------------------------------------------------------------------
 * Desc      : 데이터셋 체크된 행과 관련되어 있는 다른 데이터셋의 데이터를  삭제 후 gfnAlert, Status 처리
 * Argument  : obj{Dataset} 그리드 bind Dataset
               colId{String} 체크박스 컬럼 ID, Default:'CHECKED'
               obj:Dataset,subObj:Dataset, colId
 * Return    : Boolean
 *-------------------------------------------------------------------------------------------------*/
gfnDsChkDelItm = function(obj,subObj, colId)
{	
	var sColId = 'CHECKED';
	if(!gfnIsNull(colId)) sColId = colId;

	obj.filter("CHECKED==1");

	if(obj.rowcount < 1)
	{
		obj.filter("");
		gfnAlert("EPRO_LABEL_00895");
		return false;
	}else{
	
		subObj.set_enableevent(false);
		for(var i=0, x=obj.rowcount ; i < x ;i++){
			var nItmNo = obj.getColumn(i,"ITM_NO");
			subObj.filter("ITM_NO=="+nItmNo);
			subObj.deleteAll();
		}
		subObj.set_enableevent(true);
		
		obj.set_enableevent(false);
		obj.deleteAll();
		obj.filter("");
		obj.set_enableevent(true);
	}
	return true;
	
}


/*--------------------------------------------------------------------------------------------------
 * Desc      :  체크된 행 유무 리턴
 * Argument  :  {Dataset}	obj	- 그리드 bind Dataset
                {String}    colId = 체크박스 컬럼 ID, Default:'CHECKED'
 * Return    : Boolean
 *-------------------------------------------------------------------------------------------------*/

/**
  * @함수명	: gfnIsGrdChk
  * @input		: sDsNm {String}  : 임시 데이터셋 명
				  colInfoDs {Dataset}  : 컬럼정보 상속받을 데이터셋 
  * @return		: objTmpDs {dataset} 데이터셋
  * @desc		: 임시 데이터셋 생성
  */
gfnIsGrdChk = function(obj, colId)
{
	var sColId = gfnIsNull(colId) ? "CHECKED" : colId;

	var nCnt = 0;
	nCnt = obj.getCaseCount(sColId + "== '1'");

	return nCnt < 1 ? false : true;
}

/**
  * @함수명	: gfnGetTmpDs
  * @input		: sDsNm {String}  : 임시 데이터셋 명
				  colInfoDs {Dataset}  : 컬럼정보 상속받을 데이터셋 
  * @return		: objTmpDs {dataset} 데이터셋
  * @desc		: 임시 데이터셋 생성
  */
gfnGetTmpDs = function(sDsNm, ds)
{	
	var objTmpDs = new Dataset;
	
	ds.set_enableevent(false);
	for(var i=0, x=ds.colcount; i<x; i++){
		var colInfo = ds.getColumnInfo(i);
		objTmpDs.addColumnInfo(colInfo.name, colInfo);		
	}
	ds.set_enableevent(true);
			
	return objTmpDs;
}

/**
  * @함수명	: gfnCheckDataOverlap
  * @input		: data {String} 입력받는 데이터	
				  dataSet {String} 같은데이터가 있는지 확인할 dataset 
				  colNm {String} 데이터셋에 확인할 컬럼명
				  idx {String} 체크에서 제외할 데이터
  * @return		: {boolean} 중복이면 false, 없으면  true
  * @desc		: dataset에 입력받은 데이터와 같은 값이 있는지 체크한다.
  */
gfnCheckDataOverlap = function(data,dataSet,colNm,idx)
{
	dataSet.set_enableevent(false);
	for(var i=0, x=dataSet.rowcount; i<x; i++){
		if(idx!=i && dataSet.getColumn(i,colNm)==data){
			return false;
		}
	}
	dataSet.set_enableevent(true);
	
	return true;
}

/**
  * @함수명	: gfnMakeFileDs
  * @input		: obj {form}  : form object
  * @return		: null
  * @desc		: 파일오브젝트생성
  */
gfnMakeFileDs = function(obj)
{	
	var objTmpDs = new Dataset;
	objTmpDs.set_name("_ds_mainFiles");
	obj.addChild("_ds_mainFiles", objTmpDs);
	obj._ds_mainFiles.addColumn( "CHECKED", "STRING" );
	obj._ds_mainFiles.addColumn( "fileid", "STRING" );
	obj._ds_mainFiles.addColumn( "fileimg", "STRING" );
	obj._ds_mainFiles.addColumn( "filename", "STRING" );
	obj._ds_mainFiles.addColumn( "filetype", "STRING" );
	obj._ds_mainFiles.addColumn( "filesize", "INT" );
	obj._ds_mainFiles.addColumn( "tranfilesize", "INT" );
	obj._ds_mainFiles.addColumn( "prog", "INT" );
	obj._ds_mainFiles.addColumn( "rmimg", "STRING" );
	obj._ds_mainFiles.addColumn( "status", "STRING" );
	obj._ds_mainFiles.addColumn( "filekey", "STRING" );
	obj._ds_mainFiles.addColumn( "downcnt", "STRING" );
	obj._ds_mainFiles.addColumn( "compId", "STRING" );
	obj._ds_mainFiles.addColumn( "EX_FILE_KEY", "STRING" );
	obj._ds_mainFiles.addColumn( "FILE_DESC", "STRING" );
	obj._ds_mainFiles.addColumn( "PHY_FILE_NM", "STRING" );
	obj._ds_mainFiles.addColumn( "REF_KEY_1", "STRING" );
	obj._ds_mainFiles.addColumn( "REF_KEY_2", "STRING" );
	obj._ds_mainFiles.addColumn( "REF_KEY_3", "STRING" );
	obj._ds_mainFiles.addColumn( "REF_KEY_4", "STRING" );
	obj._ds_mainFiles.addColumn( "REF_KEY_5", "STRING" );
	obj._ds_mainFiles.addColumn( "REF_CNT", "INT" );
	obj._ds_mainFiles.addColumn( "FILE_ID", "STRING" );
	obj._ds_mainFiles.addColumn( "EX_FILE_NM", "STRING" );
	obj._ds_mainFiles.addColumn( "FILE_PATH_ID", "STRING" );
	obj._ds_mainFiles.addColumn( "CRTR_ID", "STRING" );
	obj._ds_mainFiles.addColumn( "REF_TBL_NM", "STRING" );
	obj._ds_mainFiles.addColumn( "FILE_EXTN", "STRING" );
	obj._ds_mainFiles.addColumn( "LGCL_FILE_NM", "STRING" );
	obj._ds_mainFiles.addColumn( "FILE_SIZE", "INT" );
	obj._ds_mainFiles.addColumn( "CRT_DT", "STRING" );
	obj._ds_mainFiles.addColumn( "FILE_GUBUN", "STRING" );
	obj._ds_mainFiles.addColumn( "ROW_NO", "STRING" );
	obj._ds_mainFiles.addColumn( "FILE_SAVE_PATH", "STRING" );
	obj._ds_mainFiles.addColumn( "ROW_TYPE", "STRING" );
	obj._ds_mainFiles.addColumn( "PK1_NAME", "STRING" );
	obj._ds_mainFiles.addColumn( "PK2_NAME", "STRING" );
	obj._ds_mainFiles.addColumn( "PK3_NAME", "STRING" );
	obj._ds_mainFiles.addColumn( "PK4_NAME", "STRING" );
	obj._ds_mainFiles.addColumn( "PK5_NAME", "STRING" );
	obj._ds_mainFiles.set_useclientlayout(true);	
}

