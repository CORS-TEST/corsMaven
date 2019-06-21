/*
//-----------------------------------------------------------------------
// 아래 재정의는 2016.7월 정기 버전에 처리예정이며, 이후 버전은 제거
// platform.js override
// 아래는 제품에서 검토 필요.
//-----------------------------------------------------------------------
*/
var _pLoadManager = nexacro.LoadManager.prototype;
_pLoadManager.on_load_datamodule = function (svcid, errstatus, message, fireerrorcode, returncode, requesturi, locationuri) 
{
 var load_Item = this.getDataItem(svcid);
 if (load_Item) {
  var callback_id = load_Item._context_callback;
  var callback_func;
  if(typeof(callback_id) == "function")
  {
   callback_func = callback_id;
  } else {
   callback_func = this.context[callback_id];
  }
  //-------------------------------------------
  var ret = false;
  if (errstatus < 0 && fireerrorcode) {
   load_Item.errcode = errstatus;
   if (fireerrorcode != "comm_cancel_byuser" || fireerrorcode != "comm_stop_transaction_byesc" || 
    load_Item._is_cancel || !load_Item._handle || (load_Item._handle && !load_Item._handle._user_aborted && load_Item._handle._user_aborted !== undefined)) {
    ret = application._onHttpSystemError(this.context, true, this.context, fireerrorcode, requesturi, returncode, requesturi, locationuri);
    if (fireerrorcode != "comm_cancel_byuser" && fireerrorcode != "comm_stop_transaction_byesc") {
     ret = false;
    }
    if (ret) {
     return true;
    }
   }
  }
  if (fireerrorcode == "comm_cancel_byuser" || fireerrorcode == "comm_stop_transaction_byesc") {
   if (ret && load_Item._handle && !load_Item._handle._user_aborted && load_Item._handle._user_aborted !== undefined) {
    return ret;
   }
   if (load_Item._is_cancel !== undefined && !load_Item._is_cancel) {
    return ret;
   }
  }
  this.removeDataItem(svcid);
  this.removeTransactionItem(svcid);
  this.dataCnt--;
  if (callback_func && typeof (callback_func) == "function") {
   callback_func.call(this.context, svcid, errstatus, message);
   if (errstatus == 0) {
    load_Item._handle = null;
   }
  }
  return ret;
 }
};
delete _pLoadManager;