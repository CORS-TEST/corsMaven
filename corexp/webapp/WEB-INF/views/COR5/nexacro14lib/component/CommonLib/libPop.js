/*
 ===============================================================================
 == popup 관련 공통함수들은 여기에 작성한다.
 ===============================================================================
 ● gfnModalPop			: Modal 팝업
 ● gfnModalPopCallBack 	: Modal 팝업 callback
 ● gfnModelessPop			: Modeless 팝업
 */

/**
  * @함수명	: gfnModalPop
  * @input    	: sID {String} Popup Form의 ID
				  sUrl {String} Popup Form의 URL
				  sArg {String} Popup Form으로 전달될 Argument - sArg.arg_bBgColor:false 설정시 팝업시 주변이 어두워지는걸 방지.
 				  callback {String} Popup 닫힌 후 실행될 함수
 				  nLeft {String} Popup Form Left Position
 				  nTop {String} Popup Form Top Position
 				  nWidth {String} Popup Form Width
 				  nHeight {String} Popup Form Height
  * @return     : {String} Dialog창에서 close()에 의해 Return된 값
  * @desc     	: Modal 팝업
  */
gfnModalPop = function(obj, sID, sUrl, sArg, callback, nWidth, nHeight, nLeft, nTop)
{
 	if(gfnIsNull(callback)){
		callback = "";
 	}
	
	var sPopNm = "gfnModalPop_" + sID;
	if(obj.components[sPopNm]){
		obj.components[sPopNm].destroy();
	}
	
	var newChild = new ChildFrame;
	newChild.init(sID+"___"+callback, "absolute", nLeft, nTop, nWidth, nHeight, null, null, "CPOP::CCommonPop.xfdl");	
	newChild.set_openalign("center middle");
	newChild.set_dragmovetype("all");  
	newChild.set_showtitlebar(false);
	
	if(gfnIsNull(nWidth) || gfnIsNull(nHeight)){
		newChild.set_autosize(true);
	}else{
		newChild.set_autosize(false);
	}
	
	if(!gfnIsNull(sArg)){
		if(!gfnIsNull(sArg.arg_bBgColor)){
			newChild.style.set_overlaycolor("#ffffff00");
		}
	}
	
	sArg.agv_url = sUrl;

	var objParentFrame;
	if(obj.parent.name == "workFrame"){
		objParentFrame = obj.parent.parent;
	}else if(obj.parent.name == "loginFrame"){
		objParentFrame = obj.parent;
	}

	newChild.showModal(objParentFrame, sArg, obj, gfnModalPopCallBack);
}

/**
  * @함수명	: gfnModalPopCallBack
  * @input    	: popId {String} 팝업 name
				  rtn {String} 팝업 return 값
  * @return     : {String} Dialog창에서 close()에 의해 Return된 값
  * @desc     	: Modal 팝업 callback
  */
gfnModalPopCallBack = function(popId, rtn)
{
	var arrPopsId = popId.split("___");
	
// 	trace("popId : > " + popId +  "          rtn :> " + rtn);		
// 	trace("arrPopsId[0] : > " + arrPopsId[0] +  "          arrPopsId[1] :> " + arrPopsId[1]);
// 	trace("arrPopsId[1] :> " + arrPopsId[1] + "           this :> " + this + "         this.id :> " + this.id + "      this.parent :> " + this.parent + "          this.parent.id :> " + this.parent.id)
	
	if(!gfnIsNull(arrPopsId[1])){		
		eval("this." + arrPopsId[1] + "(arrPopsId[0], rtn)");
	}
}

/**
  * @함수명	: gfnModelessPop
  * @input    	: sID {String} Popup Form의 ID
				  sUrl {String} Popup Form의 URL
				  sArg {String} Popup Form으로 전달될 Argument
 				  callback {String} Popup 닫힌 후 실행될 함수
 				  nLeft {String} Popup Form Left Position
 				  nTop {String} Popup Form Top Position
 				  nWidth {String} Popup Form Width
 				  nHeight {String} Popup Form Height
  * @return     : {String} Dialog창에서 close()에 의해 Return된 값
  * @desc     	: Modeless 팝업
  */
gfnModelessPop = function(sID, sUrl, sArg, callback, nLeft, nTop, nWidth, nHeight)
{
	var openId = application.gdsOpenMenu.getColumn(application.gdsOpenMenu.rowposition, "OPEN_ID");
	var framesInfo = application.gv_workFrameSet.frames;

	if(application.popupframes[sID]){
		if(gfnConfirm("EPRO_LABEL_00917")){
			application.popupframes[sID].form.close(); 
		}else{
			return;
		} 
	}	
		
	var strOpenStyle = "showtitlebar=true showstatusbar=false";
	application.open(sID,sUrl,framesInfo[openId],sArg,strOpenStyle,nLeft,nTop,nWidth,nHeight,framesInfo[openId].form);
}


/*
 ===============================================================================
 == 공통팝업
 =============================================================================== 
 ● gfnSearchComMtrl            : 품목검색팝업
 ● gfnSearchComMtrlCallBack    : 품목검색팝업_콜백
 ● gfnSearchComSl              : 창고검색팝업
 ● gfnSearchComSlCallBack      : 창고검색팝업_콜백
 ● gfnSearchComUser            : 담당자검색팝업
 ● gfnSearchComUserCallBack    : 담당자검색팝업_콜백
 ● gfnSearchComPtnr            : 업체검색팝업
 ● gfnSearchComPtnrCallBack    : 업체검색팝업_콜백
 ● gfnSearchComAcnt            : 계정검색팝업
 ● gfnSearchComAcntCallBack    : 계정검색팝업_콜백
 ● gfnSearchComPorg            : 운영단위검색팝업
 ● gfnSearchComPorgCallBack    : 운영단위검색팝업_콜백
 */

// 팝업호출 전역변수 선언
this._fvPopArg;
this._fvPopCallBack;
this._fvPopSvcId;
this._fvObj;
this._fvMulti;

/**
  * @함수명	: gfnSearchComMtrl
  * @input		: obj {form} 폼 오브젝트
				  svcId {String} 호출ID
				  callback {String} 콜백함수명
				  arg {Object} 아규먼트 오브젝트
				  multiYn { String} 멀티팝업
  * @desc		: 품목검색팝업
  */
gfnSearchComMtrl = function(obj, svcId, callBack, arg , multiYn)
{
	this._fvPopArg = arg;
	this._fvPopCallBack = callBack;
	this._fvPopSvcId = svcId;
	this._fvObj = obj;
	this._fvMulti = multiYn;
	
	if(gfnIsNull(this._fvPopArg.agv_nm)){
		var sArg = { 
					agv_id : ""
					,agv_nm : ""
			   };
			   
		if(this._fvMulti == 'Y'){
			gfnModalPop(this._fvObj, this._fvPopSvcId, "CPOP::BMtrlSrchMultiPopup.xfdl", sArg, this._fvPopCallBack, 1100, 800);
			
		}else if(this._fvMulti == 'PR'){
			gfnModalPop(this._fvObj, this._fvPopSvcId, "CPOP::BMtrlPrSrchMultiPopup.xfdl", sArg, this._fvPopCallBack, 1100, 800);
			
		}else{
			gfnModalPop(this._fvObj, this._fvPopSvcId, "CPOP::BMtrlSrchPopup.xfdl", sArg, this._fvPopCallBack, 1100, 500);
		}
		
	} else{
		if(!gfnIsNull(this._fvObj._dsSrchOpt)) this._fvObj._dsSrchOpt = null;	
		if(!gfnIsNull(this._fvObj._dsList)) this._fvObj._dsList = null;
		
		var dsSrchOpt = new Dataset;
		var dsList = new Dataset;
		
		dsSrchOpt.addColumn("BRANCH_CD", "string");
		dsSrchOpt.addColumn("MTRL_NM", "string");
		dsSrchOpt.addColumn("SRCH_TYPE", "string");
		
		if(this._fvMulti == 'PR'){
			dsSrchOpt.addColumn("IN_STR_CD", "string");
			dsSrchOpt.addColumn("ALT_INVNTRY_MGMT", "string");
		}else if(this._fvMulti == 'Y'){
			dsSrchOpt.addColumn("MTRL_CD", "string");
			dsSrchOpt.addColumn("ALT_TOT_SRCH", "string");
			dsSrchOpt.addColumn("CD_DOC_CTGR", "string");
		}
		
		dsSrchOpt.addRow();
		dsSrchOpt.setColumn(0,"BRANCH_CD", application.gdsUserInfo.getColumn(0,"BRANCH_CD"));
		dsSrchOpt.setColumn(0,"MTRL_NM",this._fvPopArg.agv_nm);
		dsSrchOpt.setColumn(0,"SRCH_TYPE",this._fvMulti);
		
		if(this._fvMulti == 'PR'){
			dsSrchOpt.setColumn(0,"IN_STR_CD", application.gdsUserInfo.getColumn(0,"STR_CD"));
			dsSrchOpt.setColumn(0,"ALT_INVNTRY_MGMT", "");
		}else if(this._fvMulti == 'Y'){
			dsSrchOpt.setColumn(0,"CD_DOC_CTGR", this._fvPopArg.agv_cd_doc_ctgr);
			dsSrchOpt.setColumn(0,"ALT_TOT_SRCH", "Y");
		}else{
			dsSrchOpt.setColumn(0,"MTRL_CD",this._fvPopArg.agv_nm);
		}
		
		this._fvObj.addChild("_dsSrchOpt",dsSrchOpt);
		this._fvObj.addChild("_dsList",dsList);
		
		var sSvcID = "searchComMtrl";
		var sController = "epro.com.service.BComService.searchComMtrl";
		var sInDatasets = "dsSrchOpt=_dsSrchOpt";
		var sOutDatasets = "_dsList=dsList";
		var sCallbackFunc = "gfnSearchComMtrlCallBack";	
		gfnTran(this._fvObj, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
	}
}

/**
  * @함수명	: gfnSearchComMtrlCallBack
  * @desc		: 품목검색팝업 콜백
  */
gfnSearchComMtrlCallBack = function()
{
	
	if(this._fvObj._dsList.rowcount == 1){
		eval("this._fvObj." + this._fvPopCallBack + "(this._fvPopSvcId,this._fvObj._dsList.saveXML())");
		
	}else{
		var sArg = { 
					agv_id:""
					,agv_nm:this._fvPopArg.agv_nm
			   };
			   
		if(this._fvMulti == 'Y'){
			gfnModalPop(this._fvObj, this._fvPopSvcId, "CPOP::BMtrlSrchMultiPopup.xfdl", sArg, this._fvPopCallBack, 1100, 800);
			
		}else if(this._fvMulti == 'PR'){
			gfnModalPop(this._fvObj, this._fvPopSvcId, "CPOP::BMtrlPrSrchMultiPopup.xfdl", sArg, this._fvPopCallBack, 1100, 800);
			
		} else{
			gfnModalPop(this._fvObj, this._fvPopSvcId, "CPOP::BMtrlSrchPopup.xfdl", sArg, this._fvPopCallBack, 1100, 500);
		}
	}	
}

/**
  * @함수명	: gfnSearchComSl
  * @input		: obj {form} 폼 오브젝트
				  svcId {String} 호출ID
				  callback {String} 콜백함수명
				  arg {Object} 아규먼트 오브젝트
  * @desc		: 창고검색팝업
  */
gfnSearchComSl = function(obj, svcId, callBack, arg)
{
	this._fvPopArg = arg;
	this._fvPopCallBack = callBack;
	this._fvPopSvcId = svcId;
	this._fvObj = obj;

	if(gfnIsNull(this._fvPopArg.agv_nm)){
		var sArg = { 
					agv_id:""
					,agv_nm:this._fvPopArg.agv_nm
			   };
		gfnModalPop(this._fvObj, this._fvPopSvcId, "CPOP::BSlSrchPopup.xfdl", sArg, this._fvPopCallBack, 700, 500);
				
	} else{
		if(!gfnIsNull(this._fvObj._dsSrchOpt)) this._fvObj._dsSrchOpt = null;	
		if(!gfnIsNull(this._fvObj._dsList)) this._fvObj._dsList = null;
		
		var dsSrchOpt = new Dataset;
		var dsList = new Dataset;
		
		dsSrchOpt.addColumn("STR_CD", "string");
		dsSrchOpt.addColumn("SL_NM", "string");
		dsSrchOpt.addColumn("BRANCH_CD", "string");
		
		dsSrchOpt.addRow();
		dsSrchOpt.setColumn(0,"STR_CD",this._fvPopArg.agv_nm);
		dsSrchOpt.setColumn(0,"SL_NM",this._fvPopArg.agv_nm);
		dsSrchOpt.setColumn(0,"BRANCH_CD", application.gdsUserInfo.getColumn(0,"BRANCH_CD"));
		
		this._fvObj.addChild("_dsSrchOpt",dsSrchOpt);
		this._fvObj.addChild("_dsList",dsList);
		
		var sSvcID = "searchComSl";
		var sController = "epro.com.service.BComService.searchComSl";
		var sInDatasets = "dsSrchOpt=_dsSrchOpt";
		var sOutDatasets = "_dsList=dsList";
		var sCallbackFunc = "gfnSearchComSlCallBack";	
		gfnTran(this._fvObj, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
	}
}

/**
  * @함수명	: gfnSearchComSlCallBack
  * @desc		: 창고검색팝업 콜백
  */
gfnSearchComSlCallBack = function()
{
	if(this._fvObj._dsList.rowcount == 1){
		eval("this._fvObj." + this._fvPopCallBack + "(this._fvPopSvcId,this._fvObj._dsList.saveXML())");
		
	}else{
		var sArg = { 
					agv_id:""
					,agv_nm:this._fvPopArg.agv_nm
			   };
		gfnModalPop(this._fvObj, this._fvPopSvcId, "CPOP::BSlSrchPopup.xfdl", sArg, this._fvPopCallBack, 700, 500);
	}	
}

/**
  * @함수명	: gfnSearchComUser
  * @input		: obj {form} 폼 오브젝트
				  svcId {String} 호출ID
				  callback {String} 콜백함수명
				  arg {Object} 아규먼트 오브젝트
  * @desc		: 담당자검색팝업
  */
gfnSearchComUser = function(obj, svcId, callBack, arg)
{
	this._fvPopArg = arg;
	this._fvPopCallBack = callBack;
	this._fvPopSvcId = svcId;
	this._fvObj = obj;

	if(gfnIsNull(this._fvPopArg.agv_nm)){
		var sArg = { 
					agv_id:""
					,agv_nm:this._fvPopArg.agv_nm
					,agv_dept:this._fvPopArg.agv_dept
			   };
		gfnModalPop(this._fvObj, this._fvPopSvcId, "CPOP::BUserSrchPopup.xfdl", sArg, this._fvPopCallBack, 900, 500);
				
	} else{
		if(!gfnIsNull(this._fvObj._dsSrchOpt)) this._fvObj._dsSrchOpt = null;	
		if(!gfnIsNull(this._fvObj._dsList)) this._fvObj._dsList = null;
		
		var dsSrchOpt = new Dataset;
		var dsList = new Dataset;
		
		dsSrchOpt.addColumn("USER_ID", "string");
		dsSrchOpt.addColumn("USER_NM", "string");
		dsSrchOpt.addColumn("BRANCH_CD", "string");
		
		dsSrchOpt.addRow();
		dsSrchOpt.setColumn(0,"USER_ID",this._fvPopArg.agv_nm);
		dsSrchOpt.setColumn(0,"USER_NM",this._fvPopArg.agv_nm);
		dsSrchOpt.setColumn(0,"BRANCH_CD", application.gdsUserInfo.getColumn(0,"BRANCH_CD"));
		
		this._fvObj.addChild("_dsSrchOpt",dsSrchOpt);
		this._fvObj.addChild("_dsList",dsList);
		
		var sSvcID = "searchComUser";
		var sController = "epro.com.service.BComService.searchComUser";
		var sInDatasets = "dsSrchOpt=_dsSrchOpt";
		var sOutDatasets = "_dsList=dsList";
		var sCallbackFunc = "gfnSearchComUserCallBack";	
		gfnTran(this._fvObj, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
	}
}

/**
  * @함수명	    : gfnSearchComUserCallBack
  * @desc		: 담당자검색팝업 콜백
  */
gfnSearchComUserCallBack = function()
{
	if(this._fvObj._dsList.rowcount == 1){
		eval("this._fvObj." + this._fvPopCallBack + "(this._fvPopSvcId,this._fvObj._dsList.saveXML())");
		
	}else{
		var sArg = { 
					agv_id:""
					,agv_nm:this._fvPopArg.agv_nm
					,agv_dept:this._fvPopArg.agv_dept
			   };
		gfnModalPop(this._fvObj, this._fvPopSvcId, "CPOP::BUserSrchPopup.xfdl", sArg, this._fvPopCallBack, 900, 500);
	}	
}

/**
  * @함수명	: gfnSearchComPtnr
  * @input		: obj {form} 폼 오브젝트
				  svcId {String} 호출ID
				  callback {String} 콜백함수명
				  arg {Object} 아규먼트 오브젝트
  * @desc		: 업체검색팝업
  */
gfnSearchComPtnr = function(obj, svcId, callBack, arg)
{
	this._fvPopArg = arg;
	this._fvPopCallBack = callBack;
	this._fvPopSvcId = svcId;
	this._fvObj = obj;

	if(gfnIsNull(this._fvPopArg.agv_nm)){
		var sArg = { 
					agv_id:""
					,agv_nm:this._fvPopArg.agv_nm
			   };
		gfnModalPop(this._fvObj, this._fvPopSvcId, "CPOP::BPtnrSrchPopup.xfdl", sArg, this._fvPopCallBack, 900, 500);
				
	} else{
		if(!gfnIsNull(this._fvObj._dsSrchOpt)) this._fvObj._dsSrchOpt = null;	
		if(!gfnIsNull(this._fvObj._dsList)) this._fvObj._dsList = null;
		
		var dsSrchOpt = new Dataset;
		var dsList = new Dataset;
		
		dsSrchOpt.addColumn("PTNR_ID", "string");
		dsSrchOpt.addColumn("PTNR_NM", "string");
		dsSrchOpt.addColumn("BRANCH_CD", "string");
		
		dsSrchOpt.addRow();
		dsSrchOpt.setColumn(0,"PTNR_ID",this._fvPopArg.agv_nm);
		dsSrchOpt.setColumn(0,"PTNR_NM",this._fvPopArg.agv_nm);
		dsSrchOpt.setColumn(0,"BRANCH_CD", application.gdsUserInfo.getColumn(0,"BRANCH_CD"));
		
		this._fvObj.addChild("_dsSrchOpt",dsSrchOpt);
		this._fvObj.addChild("_dsList",dsList);
		
		var sSvcID = "searchComPtnr";
		var sController = "epro.com.service.BComService.searchComPtnr";
		var sInDatasets = "dsSrchOpt=_dsSrchOpt";
		var sOutDatasets = "_dsList=dsList";
		var sCallbackFunc = "gfnSearchComPtnrCallBack";	
		gfnTran(this._fvObj, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
	}
}

/**
  * @함수명	    : gfnSearchComPtnrCallBack
  * @desc		: 업체검색팝업 콜백
  */
gfnSearchComPtnrCallBack = function()
{
	
	if(this._fvObj._dsList.rowcount == 1){
		eval("this._fvObj." + this._fvPopCallBack + "(this._fvPopSvcId,this._fvObj._dsList.saveXML())");
		
	}else{
		var sArg = { 
					agv_id:""
					,agv_nm:this._fvPopArg.agv_nm
			   };
		gfnModalPop(this._fvObj, this._fvPopSvcId, "CPOP::BPtnrSrchPopup.xfdl", sArg, this._fvPopCallBack, 900, 500);
	}	
}

/**
  * @함수명	: gfnSearchComAcnt
  * @input		: obj {form} 폼 오브젝트
				  svcId {String} 호출ID
				  callback {String} 콜백함수명
				  arg {Object} 아규먼트 오브젝트
  * @desc		: 계정검색팝업
  */
gfnSearchComAcnt = function(obj, svcId, callBack, arg)
{
	this._fvPopArg = arg;
	this._fvPopCallBack = callBack;
	this._fvPopSvcId = svcId;
	this._fvObj = obj;

	if(gfnIsNull(this._fvPopArg.agv_nm)){
		var sArg = { 
					agv_id:""
					,agv_nm:this._fvPopArg.agv_nm
			   };
		gfnModalPop(this._fvObj, this._fvPopSvcId, "CPOP::BAcntSrchPopup.xfdl", sArg, this._fvPopCallBack, 900, 500);
				
	} else{
		if(!gfnIsNull(this._fvObj._dsSrchOpt)) this._fvObj._dsSrchOpt = null;	
		if(!gfnIsNull(this._fvObj._dsList)) this._fvObj._dsList = null;
		
		var dsSrchOpt = new Dataset;
		var dsList = new Dataset;
		
		dsSrchOpt.addColumn("ACNT_CD", "string");
		dsSrchOpt.addColumn("ACNT_NM", "string");
		dsSrchOpt.addColumn("BRANCH_CD", "string");
		
		dsSrchOpt.addRow();
		dsSrchOpt.setColumn(0,"ACNT_CD",this._fvPopArg.agv_nm);
		dsSrchOpt.setColumn(0,"ACNT_NM",this._fvPopArg.agv_nm);
		dsSrchOpt.setColumn(0,"BRANCH_CD", application.gdsUserInfo.getColumn(0,"BRANCH_CD"));
		
		this._fvObj.addChild("_dsSrchOpt",dsSrchOpt);
		this._fvObj.addChild("_dsList",dsList);
		
		var sSvcID = "searchComAcnt";
		var sController = "epro.com.service.BComService.searchComAccount";
		var sInDatasets = "dsSrchOpt=_dsSrchOpt";
		var sOutDatasets = "_dsList=dsList";
		var sCallbackFunc = "gfnSearchComAcntCallBack";	
		gfnTran(this._fvObj, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
	}
}

/**
  * @함수명	: gfnSearchComAcntCallBack
  * @desc		: 계정검색팝업 콜백
  */
gfnSearchComAcntCallBack = function()
{
	if(this._fvObj._dsList.rowcount == 1){
		eval("this._fvObj." + this._fvPopCallBack + "(this._fvPopSvcId,this._fvObj._dsList.saveXML())");
		
	}else{
		var sArg = { 
					agv_id:""
					,agv_nm:this._fvPopArg.agv_nm
			   };
		gfnModalPop(this._fvObj, this._fvPopSvcId, "CPOP::BAcntSrchPopup.xfdl", sArg, this._fvPopCallBack, 900, 500);
	}	
}

/**
  * @함수명	: gfnSearchComPorg
  * @input		: obj {form} 폼 오브젝트
				  svcId {String} 호출ID
				  callback {String} 콜백함수명
				  arg {Object} 아규먼트 오브젝트
  * @desc		: 운영단위검색팝업
  */
gfnSearchComPorg = function(obj, svcId, callBack, arg)
{
	this._fvPopArg = arg;
	this._fvPopCallBack = callBack;
	this._fvPopSvcId = svcId;
	this._fvObj = obj;

	if(gfnIsNull(this._fvPopArg.agv_nm)){
		var sArg = { 
					agv_id:""
					,agv_nm:this._fvPopArg.agv_nm
			   };
		gfnModalPop(this._fvObj, this._fvPopSvcId, "CPOP::BPorgSrchPopup.xfdl", sArg, this._fvPopCallBack, 900, 500);
				
	} else{
		if(!gfnIsNull(this._fvObj._dsSrchOpt)) this._fvObj._dsSrchOpt = null;	
		if(!gfnIsNull(this._fvObj._dsList)) this._fvObj._dsList = null;
		
		var dsSrchOpt = new Dataset;
		var dsList = new Dataset;
		
		dsSrchOpt.addColumn("BRANCH_CD", "string");
		dsSrchOpt.addColumn("BRANCH_NM", "string");
		
		dsSrchOpt.addRow();
		dsSrchOpt.setColumn(0,"BRANCH_CD",this._fvPopArg.agv_nm);
		dsSrchOpt.setColumn(0,"BRANCH_NM",this._fvPopArg.agv_nm);
		
		this._fvObj.addChild("_dsSrchOpt",dsSrchOpt);
		this._fvObj.addChild("_dsList",dsList);
		
		var sSvcID = "searchComPorg";
		var sController = "epro.com.service.BComService.searchComPorg";
		var sInDatasets = "dsSrchOpt=_dsSrchOpt";
		var sOutDatasets = "_dsList=dsList";
		var sCallbackFunc = "gfnSearchComPorgCallBack";	
		gfnTran(this._fvObj, sSvcID, sController, sInDatasets, sOutDatasets, sCallbackFunc);
	}
}

/**
  * @함수명	: gfnSearchComPorgCallBack
  * @desc		: 계정검색팝업 콜백
  */
gfnSearchComPorgCallBack = function()
{
	if(this._fvObj._dsList.rowcount == 1){
		eval("this._fvObj." + this._fvPopCallBack + "(this._fvPopSvcId,this._fvObj._dsList.saveXML())");
		
	}else{
		var sArg = { 
					agv_id:""
					,agv_nm:this._fvPopArg.agv_nm
			   };
		gfnModalPop(this._fvObj, this._fvPopSvcId, "CPOP::BPorgSrchPopup.xfdl", sArg, this._fvPopCallBack, 900, 500);
	}	
}