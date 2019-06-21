var LocalStorageHandler=function(param){if(!param||"undefined"===param){var err={};err.code=3E7;err.message="[LocalStorageHandler Initializing Failed] the parameter value cannot be null.";err.detail=null;throw err;}var __storage=null;var __encrypt=null;try{__storage=new LocalStorage(param.err_code);__encrypt=new EncryptStorage(param.err_code)}catch(e){throw e;}var __json_init_cacerts=NPKICACertObject;var __json_certs=null;var __json_ca_certs=null;var __arr_list_user_certs=null;var __enc_algo=param.enc_algo;var __hash_algo=param.hash_algo;var __pki=param.pki;var __err_code=param.err_code;var __domain=param.domain;if(!__domain)__domain=document.domain;if(!__json_init_cacerts){var err={};err.code=__err_code.ERROR_CA_CERTS_FORM_IS_NOT_DOWNLOADED;err.message="[LocalStorageHandler Initializing Failed] ca certificates are not downloaded.";err.detail=null;throw err;}var console=window.console||{log:function(){}};return{InstallCACerts:function(pw){if(!pw){var err={};err.code=__err_code.ERROR_PARAMETER_VALUE_IS_NULL;err.message="[LocalStorageHandler InstallCACerts Failed] the parameter value cannot be null.";err.detail=null;throw err;}var strJson=null;try{strJson=JSON.stringify(__json_init_cacerts)}catch(e){var err={};err.code=__err_code.ERROR_JSON_OBJECT_TO_STRING;err.message="[LocalStorageHandler InstallCACerts Failed] json object to string is failed.";err.detail=e;throw err;}var secSt=null;try{secSt=__encrypt.MakeKey(pw,__enc_algo,__hash_algo)}catch(e){throw e;}var encItem=null;try{encItem=__encrypt.EncryptItem(__enc_algo,secSt.key,secSt.iv,strJson)}catch(e){throw e;}var strB64Id=null;try{strB64Id=crosscert.util.encode64(secSt.id)}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler InstallCACerts Failed][TOOLKIT ERROR][1] during encoding base64.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}var strB64EncItem=null;try{strB64EncItem=crosscert.util.encode64(encItem)}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler InstallCACerts Failed][TOOLKIT ERROR][2] during encoding base64.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}try{if("NPKI"===__pki)__storage.SetItem("N"+strB64Id,strB64EncItem);else if("GPKI"===__pki)__storage.SetItem("G"+strB64Id,strB64EncItem);else if("PPKI"===__pki)__storage.SetItem("P"+strB64Id,strB64EncItem);else;}catch(e){throw e;}return},LoadAllCerts:function(pw){if(!pw){var err={};err.code=__err_code.ERROR_PARAMETER_VALUE_IS_NULL;err.message="[LocalStorageHandler LoadAllCerts Failed] the parameter value cannot be null.";err.detail=null;throw err;}var secSt=null;try{secSt=__encrypt.MakeKey(pw,__enc_algo,__hash_algo)}catch(e){throw e;}var strB64Id=null;try{strB64Id=crosscert.util.encode64(secSt.id)}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler LoadAllCerts Failed][TOOLKIT ERROR] during encoding base64.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}var strB64EncItem=null;try{if("NPKI"===__pki)strB64EncItem=__storage.GetItem("N"+strB64Id);else if("GPKI"===__pki)strB64EncItem=__storage.GetItem("G"+strB64Id);else if("PPKI"===__pki)strB64EncItem=__storage.GetItem("P"+strB64Id);else;if(!strB64EncItem){var err={};err.code=__err_code.ERROR_FIRST_USING_OR_PASSWORD_IS_WRONG;err.message="[LocalStorageHandler LoadAllCerts Failed] first using or the storage password is wrong.";err.detail=null;throw err;}}catch(e){throw e;}var encItem=null;try{encItem=crosscert.util.decode64(strB64EncItem)}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler LoadAllCerts Failed][TOOLKIT ERROR] during decoding base64.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}var item=null;try{item=__encrypt.DecryptItem(__enc_algo,secSt.key,secSt.iv,encItem)}catch(e){throw e;}var objJson=null;try{objJson=JSON.parse(item)}catch(e){var err={};err.code=__err_code.ERROR_JSON_STRING_TO_OBJECT;err.message="[LocalStorageHandler LoadAllCerts Failed] json string to object is failed.";err.detail=e;throw err;}__json_certs=objJson;try{this.GetCACerts();this.GetUserCerts(pw)}catch(e){throw e;}pw=secSt=secSt.key=secSt.iv=secSt.id=null;return},GetCACerts:function(){if(!__json_ca_certs)if("NPKI"===__pki){var strJson="";var jsonObj=null;for(var ca in __json_certs){try{jsonObj=eval("__json_certs."+ca+".ca")}catch(e){var err={};err.code=__err_code.ERROR_UNSUPPORTING_CA;err.message="[LocalStorageHandler GetCACerts Failed] unsupporting ca.";err.detail=e;throw err;}for(var key in jsonObj){if(!jsonObj[key]||"undefined"===typeof jsonObj[key]){var err={};err.code=__err_code.ERROR_CA_CERT_IS_NULL;err.message="[LocalStorageHandler GetCACerts Failed] ca certificate is null.";err.detail=null;throw err;}strJson+='"'+key+'":"'+jsonObj[key]+'",'}}strJson=strJson.substring(0,strJson.length-1);strJson="{"+strJson+"}";try{__json_ca_certs=JSON.parse(strJson)}catch(e){var err={};err.code=__err_code.ERROR_JSON_STRING_TO_OBJECT;err.message="[LocalStorageHandler GetCACerts Failed] json string to object is failed.";err.detail=e;throw err;}}else if("GPKI"===__pki);else;return __json_ca_certs},GetUserCerts:function(pw){if(!pw){var err={};err.code=__err_code.ERROR_PARAMETER_VALUE_IS_NULL;err.message="[LocalStorageHandler GetUserCerts Failed] the parameter value cannot be null.";err.detail=null;throw err;}__arr_list_user_certs=new Array;var jsonObj=null;var listIdx=1;var secSt=null;try{secSt=__encrypt.MakeKey(pw,__enc_algo,__hash_algo)}catch(e){throw e;}var strB64Key=null;try{strB64Key=crosscert.util.encode64(secSt.key)}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler GetUserCerts Failed][TOOLKIT ERROR][1] during encoding base64.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}var secSt2=null;try{secSt2=__encrypt.MakeKey(strB64Key+__domain,__enc_algo,__hash_algo)}catch(e){throw e;}var p12key=null;try{p12key=crosscert.util.encode64(secSt2.key)}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler GetUserCerts Failed][TOOLKIT ERROR][2] during encoding base64.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}if("NPKI"===__pki)for(var ca in __json_certs){try{jsonObj=eval("__json_certs."+ca+".user")}catch(e){var err={};err.code=__err_code.ERROR_UNSUPPORTING_CA;err.message="[LocalStorageHandler GetUserCerts Failed] unsupporting ca.";err.detail=e;throw err;}if("undefined"===typeof jsonObj)continue;for(var b64dn in jsonObj){var b64p12,p12der,p12,certNKey;b64p12=p12der=p12=certNKey=null;if(!jsonObj[b64dn]||"undefined"===typeof jsonObj[b64dn]){var err={};err.code=__err_code.ERROR_USER_CERT_IS_NULL;err.message="[LocalStorageHandler GetUserCerts Failed] user certificate is null.";err.detail=null;throw err;}b64p12=jsonObj[b64dn];try{p12der=crosscert.asn1.fromDer(crosscert.util.decode64(b64p12));p12=crosscert.pkcs12.getCertNKeyFromPKCS12WithEncPKCS8(p12der,p12key);certNKey=p12.getCertAndKeyFromPKCS12(p12key)}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler GetUserCerts Failed][TOOLKIT ERROR] during parsing pkcs12.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}var struct=new Object;struct["ca"]=ca;var bindn=null;try{bindn=crosscert.util.decode64(b64dn)}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler GetUserCerts Failed][TOOLKIT ERROR] during decoding base64.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}var dn=null;try{dn=crosscert.util.decodeUtf8(bindn)}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler GetUserCerts Failed][TOOLKIT ERROR] during decoding utf8.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}struct["dn"]=dn;var signcert=null;try{signcert=crosscert.pki.certificateToBase64(certNKey.sign.cert)}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler GetUserCerts Failed][TOOLKIT ERROR] during sign certificate to base64.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}struct["signcert"]=signcert;var signpri=null;try{signpri=crosscert.pkcs8.encryptedPrivateKeyToBase64(certNKey.sign.prikey)}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler GetUserCerts Failed][TOOLKIT ERROR] during sign private key to base64.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}struct["signpri"]=signpri;if("undefined"!=typeof certNKey.km){var kmcert=null;try{kmcert=crosscert.pki.certificateToBase64(certNKey.km.cert)}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler GetUserCerts Failed][TOOLKIT ERROR] during km certificate to base64.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}struct["kmcert"]=kmcert;var kmpri=null;try{kmpri=crosscert.pkcs8.encryptedPrivateKeyToBase64(certNKey.km.prikey)}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler GetUserCerts Failed][TOOLKIT ERROR] during km private key to base64.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}struct["kmpri"]=kmpri}__arr_list_user_certs[listIdx++]=struct}}else if("GPKI"===__pki);else;pw=secSt=secSt.key=secSt.iv=secSt.id=secSt2=secSt2.key=secSt2.iv=secSt2.id=null;return __arr_list_user_certs},SetUserCertOnMemory:function(json_user_cert){if(!json_user_cert){var err={};err.code=__err_code.ERROR_PARAMETER_VALUE_IS_NULL;err.message="[LocalStorageHandler SetUserCertOnMemory Failed] the parameter value cannot be null.";err.detail=null;throw err;}__arr_list_user_certs=new Array;var struct=new Object;var listIdx=1;for(var objKey in json_user_cert)switch(objKey){case "signcert":struct["signcert"]=json_user_cert.signcert;break;case "signpri":struct["signpri"]=json_user_cert.signpri;break;case "kmcert":struct["kmcert"]=json_user_cert.kmcert;break;case "kmpri":struct["kmpri"]=json_user_cert.kmpri;break;default:break}__arr_list_user_certs[listIdx]=struct;return{"index":listIdx,"aluc":__arr_list_user_certs}},SaveUserCert:function(ca,json_user_new_cert,pw,dupl_check_flag){if(!ca||(!json_user_new_cert||(!pw||"boolean"!==typeof dupl_check_flag))){var err={};err.code=__err_code.ERROR_PARAMETER_VALUE_IS_NULL;err.message="[LocalStorageHandler SaveUserCert Failed] the parameter value cannot be null.";err.detail=null;throw err;}ca=ca.toLowerCase();var signCert,signPri,kmCert,kmPri,p12,strB64P12;signCert=signPri=kmCert=kmPri=p12=strB64P12=null;var secSt,secSt2,strB64Key,p12key;secSt=secSt2=strB64Key=p12key=null;try{secSt=__encrypt.MakeKey(pw,__enc_algo,__hash_algo)}catch(e){throw e;}try{strB64Key=crosscert.util.encode64(secSt.key)}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler SaveUserCert Failed][TOOLKIT ERROR][1] during encoding base64.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}try{secSt2=__encrypt.MakeKey(strB64Key+__domain,__enc_algo,__hash_algo)}catch(e){throw e;}try{p12key=crosscert.util.encode64(secSt2.key)}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler SaveUserCert Failed][TOOLKIT ERROR][2] during encoding base64.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}for(var objKey in json_user_new_cert)switch(objKey){case "signcert":try{signCert=crosscert.pki.certificateFromBase64(json_user_new_cert.signcert)}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler SaveUserCert Failed][TOOLKIT ERROR] during converting sign certificate from base64.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}break;case "signpri":try{signPri=crosscert.pkcs8.encryptedPrivateKeyFromBase64(json_user_new_cert.signpri)}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler SaveUserCert Failed][TOOLKIT ERROR] during converting sign private key from base64.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}break;case "kmcert":try{kmCert=crosscert.pki.certificateFromBase64(json_user_new_cert.kmcert)}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler SaveUserCert Failed][TOOLKIT ERROR] during converting km certificate from base64.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}break;case "kmpri":try{kmPri=crosscert.pkcs8.encryptedPrivateKeyFromBase64(json_user_new_cert.kmpri)}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler SaveUserCert Failed][TOOLKIT ERROR] during converting km private key from base64.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}break;default:break}try{p12=crosscert.pkcs12.makePKCS12FromCertNEncPKCS8(signCert,signPri,kmCert,kmPri,p12key,{useMac:true,generateLocalKeyId:true})}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler SaveUserCert Failed][TOOLKIT ERROR] during encrypting pkcs8 and making pkcs12.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}try{strB64P12=crosscert.util.encode64(crosscert.asn1.toDer(p12).getBytes())}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler SaveUserCert Failed][TOOLKIT ERROR][3] during encoding base64.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}try{crosscert.x509Certificate.parser(json_user_new_cert.signcert,"Base64")}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler SaveUserCert Failed][TOOLKIT ERROR] during parsing new x.509 certificate.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}var userDN=null;try{userDN=crosscert.x509Certificate.getSubjectName();console.log("SaveUserCert dn : ",userDN)}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler SaveUserCert Failed][TOOLKIT ERROR] during getting subject name.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}var binDN=null;try{binDN=crosscert.util.encodeUtf8(userDN);console.log("SaveUserCert bindn : ",binDN)}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler SaveUserCert Failed][TOOLKIT ERROR] during encoding utf8.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}var strB64DN=null;try{strB64DN=crosscert.util.encode64(binDN);console.log("SaveUserCert b64dn : ",strB64DN)}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler SaveUserCert Failed][TOOLKIT ERROR][3] during encoding base64.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}var user=null;try{user=eval("__json_certs."+ca+".user")}catch(e){var err={};err.code=__err_code.ERROR_UNSUPPORTING_CA;err.message="[LocalStorageHandler SaveUserCert Failed] unsupporting ca.";err.detail=e;throw err;}if(dupl_check_flag&&user[strB64DN]){var date=null;var newCertStartedDate=null;var newCertStartedMillisec=0;var newCertExpiredDate=null;var newCertExpiredMillisec=0;try{date=crosscert.x509Certificate.getNotBefore();newCertStartedDate=new Date(date);newCertStartedMillisec=newCertStartedDate.getTime();date=crosscert.x509Certificate.getNotAfter();newCertExpiredDate=new Date(date);newCertExpiredMillisec=newCertExpiredDate.getTime()}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler SaveUserCert Failed][TOOLKIT ERROR] during getting started and expired date of new certificate.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}var existb64signcert=null;try{var existp12bin=crosscert.util.decode64(user[strB64DN]);var existp12der=crosscert.asn1.fromDer(existp12bin);var existp12=crosscert.pkcs12.getCertNKeyFromPKCS12WithEncPKCS8(existp12der,p12key);var existcertnkey=existp12.getCertAndKeyFromPKCS12(p12key);existb64signcert=crosscert.pki.certificateToBase64(existcertnkey.sign.cert)}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler SaveUserCert Failed][TOOLKIT ERROR] during getting sign certificate from pkcs12.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}try{crosscert.x509Certificate.parser(existb64signcert,"Base64")}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler SaveUserCert Failed][TOOLKIT ERROR] during parsing original x.509 certificate.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}var existCertStartedDate=null;var existCertStartedMillisec=0;var existCertExpiredDate=null;var existCertExpiredMillisec=0;try{date=crosscert.x509Certificate.getNotBefore();existCertStartedDate=new Date(date);existCertStartedMillisec=existCertStartedDate.getTime();date=crosscert.x509Certificate.getNotAfter();existCertExpiredDate=new Date(date);existCertExpiredMillisec=existCertExpiredDate.getTime()}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler SaveUserCert Failed][TOOLKIT ERROR] during getting started and expired date of original certificate.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}var timegap=existCertExpiredMillisec-newCertExpiredMillisec;if(0===timegap){if(0<existCertStartedMillisec-newCertStartedMillisec){var err={};err.code=__err_code.ERROR_ORIGINAL_CERT_IS_LATEST;err.message="[LocalStorageHandler SaveUserCert Failed] original certificate is latest.";err.detail=null;throw err;}}else if(0>timegap);else{var err={};err.code=__err_code.ERROR_ORIGINAL_CERT_IS_LATEST;err.message="[LocalStorageHandler SaveUserCert Failed] original certificate is latest.";err.detail=null;throw err;}}user[strB64DN]=strB64P12;var encItem=null;try{encItem=__encrypt.EncryptItem(__enc_algo,secSt.key,secSt.iv,JSON.stringify(__json_certs))}catch(e){throw e;}var strB64Id=null;try{strB64Id=crosscert.util.encode64(secSt.id)}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler SaveUserCert Failed][TOOLKIT ERROR][4] during encoding base64.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}var strB64EncItem=null;try{strB64EncItem=crosscert.util.encode64(encItem)}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler SaveUserCert Failed][TOOLKIT ERROR][5] during encoding base64.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}pw=secSt=secSt.key=secSt.iv=secSt.id=secSt2=secSt2.key=secSt2.iv=secSt2.id=null;var pre=null;if("NPKI"===__pki)pre="N";else if("GPKI"===__pki)pre="G";else if("PPKI"===__pki)pre="P";else;try{__storage.SetItem(pre+strB64Id,strB64EncItem)}catch(e){signCert=signPri=kmCert=kmPri=p12=strB64P12=strB64EncItem=json_user_new_cert=strB64DN=strB64Id=strB64Key=p12key=null;throw e;}try{this.SetUserCertOnMemory(json_user_new_cert)}catch(e){signCert=signPri=kmCert=kmPri=p12=strB64P12=strB64EncItem=json_user_new_cert=strB64DN=strB64Id=strB64Key=p12key=null;throw e;}signCert=signPri=kmCert=kmPri=p12=strB64P12=strB64EncItem=json_user_new_cert=strB64DN=strB64Id=strB64Key=p12key=null;return},DeleteUserCertByIndex:function(index,pw){if(!index||!pw){var err={};err.code=__err_code.ERROR_PARAMETER_VALUE_IS_NULL;err.message="[LocalStorageHandler DeleteUserCertByIndex Failed] the parameter value cannot be null.";err.detail=null;throw err;}if("number"!=typeof index||1>index){var err={};err.code=__err_code.ERROR_PARAMETER_TYPE_OF_VALUE_OR_DATA_IS_WRONG;err.message="[LocalStorageHandler DeleteUserCertByIndex Failed] the parameter type of value or data is wrong.";err.detail=null;throw err;}if(!__arr_list_user_certs||0>=__arr_list_user_certs.length){var err={};err.code=__err_code.ERROR_NO_USER_CERT_ON_STORAGE_MEMORY;err.message="[LocalStorageHandler DeleteUserCertByIndex Failed] user certificate is not loaded or not exist.";err.detail=null;throw err;}var struct=__arr_list_user_certs[index];if(!struct||"undefined"===typeof struct){var err={};err.code=__err_code.ERROR_NO_USER_CERT_RESPONDED_BY_INDEX;err.message="[LocalStorageHandler DeleteUserCertByIndex Failed] no user certificate responded by the index.";err.detail=null;throw err;}var ca=struct["ca"];var dn=struct["dn"];try{this.DeleteUserCertByDN(ca,dn,pw)}catch(e){throw e;}return},DeleteUserCertByDN:function(ca,dn,pw){if(!ca||(!dn||!pw)){var err={};err.code=__err_code.ERROR_PARAMETER_VALUE_IS_NULL;err.message="[LocalStorageHandler DeleteUserCertByDN Failed] the parameter value cannot be null.";err.detail=null;throw err;}console.log("DeleteUserCertByDN dn : ",dn);ca=ca.toLowerCase();var binDN=null;try{binDN=crosscert.util.encodeUtf8(dn);console.log("DeleteUserCertByDN bindn : ",binDN)}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler SaveUserCert Failed][TOOLKIT ERROR] during encoding utf8.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}var strB64DN=null;try{strB64DN=crosscert.util.encode64(binDN);console.log("DeleteUserCertByDN b64dn : ",strB64DN)}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler DeleteUserCertByDN Failed][TOOLKIT ERROR][1] during encoding base64.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}var user=null;try{user=eval("__json_certs."+ca+".user")}catch(e){var err={};err.code=__err_code.ERROR_UNSUPPORTING_CA;err.message="[LocalStorageHandler DeleteUserCertByDN Failed] unsupporting ca.";err.detail=e;throw err;}if(user[strB64DN]){try{delete user[strB64DN]}catch(e){var err={};err.code=__err_code.ERROR_DELETING_USER_CERT_TO_STORAGE_MEMORY;err.message="[LocalStorageHandler DeleteUserCertByDN Failed] deleting user certificate to storage memory.";err.detail=e;throw err;}var secSt,encItem,strB64Id,strB64EncItem;secSt=encItem=strB64Id=strB64EncItem=null;try{secSt=__encrypt.MakeKey(pw,__enc_algo,__hash_algo)}catch(e){throw e;}try{encItem=__encrypt.EncryptItem(__enc_algo,secSt.key,secSt.iv,JSON.stringify(__json_certs))}catch(e){throw e;}try{strB64Id=crosscert.util.encode64(secSt.id)}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler DeleteUserCertByDN Failed][TOOLKIT ERROR][2] during encoding base64.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}try{strB64EncItem=crosscert.util.encode64(encItem)}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler DeleteUserCertByDN Failed][TOOLKIT ERROR][3] during encoding base64.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}var pre=null;if("NPKI"===__pki)pre="N";else if("GPKI"===__pki)pre="G";else if("PPKI"===__pki)pre="P";else;try{__storage.SetItem(pre+strB64Id,strB64EncItem)}catch(e){throw e;}}else{var err={};err.code=__err_code.ERROR_NO_USER_CERT_RESPONDED_BY_DN;err.message="[LocalStorageHandler DeleteUserCertByDN Failed] no user certificate responded by the dn.";err.detail=null;throw err;}return},SetP12OnMemory:function(b64_p12,pw){if(!b64_p12||!pw){console.log("***** SetP12OnMemory *****");console.log("Parameter value is null.");var err={};err.code=__err_code.ERROR_PARAMETER_VALUE_IS_NULL;err.message="[LocalStorageHandler SetP12OnMemory Failed] the parameter value cannot be null.";err.detail=null;throw err;}var console=window.console||{log:function(){}};var bin=null;try{bin=crosscert.util.decode64(b64_p12)}catch(e){console.log("***** SetP12OnMemory:decode64 *****");console.log("Err Code : ",e.code,"\nErr Msg : ",e.message);var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler SetP12OnMemory Failed][TOOLKIT ERROR] during decoding base64.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}var der=null;try{der=crosscert.asn1.fromDer(bin)}catch(e){console.log("***** SetP12OnMemory:fromDer *****");console.log("Err Code : ",e.code,"\nErr Msg : ",e.message);var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler SetP12OnMemory Failed][TOOLKIT ERROR] during loading binary on memory.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}var p12=null;try{p12=crosscert.pkcs12.getCertNKeyFromPKCS12(der,pw)}catch(e){console.log("***** SetP12OnMemory:getCertNKeyFromPKCS12 *****");console.log("Err Code : ",e.code,"\nErr Msg : ",e.message);var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler SetP12OnMemory Failed][TOOLKIT ERROR] during loading asn.1 on memory.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}var certNKey=null;try{certNKey=p12.getCertAndKeyFromPKCS12(pw)}catch(e){console.log("***** SetP12OnMemory:getCertAndKeyFromPKCS12 *****");console.log("Err Code : ",e.code,"\nErr Msg : ",e.message);var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler SetP12OnMemory Failed][TOOLKIT ERROR] during decoding pkcs#12.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}var jsonCert={};try{jsonCert["signcert"]=crosscert.pki.certificateToBase64(certNKey.sign.cert);jsonCert["signpri"]=crosscert.pkcs8.encryptedPrivateKeyToBase64(certNKey.sign.prikey);if("undefined"!==typeof certNKey.km){jsonCert["kmcert"]=crosscert.pki.certificateToBase64(certNKey.km.cert);jsonCert["kmpri"]=crosscert.pkcs8.encryptedPrivateKeyToBase64(certNKey.km.prikey)}}catch(e){console.log("***** SetP12OnMemory:pki&pkcs8 *****");console.log("Err Code : ",e.code,"\nErr Msg : ",e.message);var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler SetP12OnMemory Failed][TOOLKIT ERROR] during getting certificate n private key to base64.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}var jsonRv={};try{jsonRv=this.SetUserCertOnMemory(jsonCert)}catch(e){console.log("***** SetP12OnMemory:SetUserCertOnMemory *****");console.log("Err Code : ",e.code,"\nErr Msg : ",e.message);throw e;}return jsonRv},SetP12HexOnMemory:function(hex_p12,hex_pw){if(!hex_p12||!hex_pw){console.log("***** SetP12HexOnMemory *****");console.log("Parameter value is null.");var err={};err.code=__err_code.ERROR_PARAMETER_VALUE_IS_NULL;err.message="[LocalStorageHandler SetP12HexOnMemory Failed] the parameter value cannot be null.";err.detail=null;throw err;}var console=window.console||{log:function(){}};console.log("p12 hex : ",hex_p12,"\np12key hex : ",hex_pw);var bin=null;try{bin=crosscert.util.hexToBytes(hex_p12)}catch(e){console.log("***** SetP12HexOnMemory:hexToBytes *****");console.log("Err Code : ",e.code,"\nErr Msg : ",e.message);var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler SetP12HexOnMemory Failed][TOOLKIT ERROR] during decoding hex string.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}console.log("p12 bin : ",bin);var der=null;try{der=crosscert.asn1.fromDer(bin)}catch(e){console.log("***** SetP12HexOnMemory:fromDer *****");console.log("Err Code : ",e.code,"\nErr Msg : ",e.message);var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler SetP12HexOnMemory Failed][TOOLKIT ERROR] during loading binary on memory.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}console.log("p12 der : ",der);var p12=null;try{p12=crosscert.pkcs12.getCertNKeyFromPKCS12WithEncPKCS8(der,hex_pw)}catch(e){console.log("***** SetP12HexOnMemory:getCertNKeyFromPKCS12WithEncPKCS8 *****");console.log("Err Code : ",e.code,"\nErr Msg : ",e.message);var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler SetP12HexOnMemory Failed][TOOLKIT ERROR] during loading asn.1 on memory.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}console.log("p12 : ",p12);var certNKey=null;try{certNKey=p12.getCertAndKeyFromPKCS12(hex_pw)}catch(e){console.log("***** SetP12HexOnMemory:getCertAndKeyFromPKCS12 *****");console.log("Err Code : ",e.code,"\nErr Msg : ",e.message);var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler SetP12HexOnMemory Failed][TOOLKIT ERROR] during decoding pkcs#12.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}console.log("certNKey : ",certNKey);var jsonCert={};try{jsonCert["signcert"]=crosscert.pki.certificateToBase64(certNKey.sign.cert);jsonCert["signpri"]=crosscert.pkcs8.encryptedPrivateKeyToBase64(certNKey.sign.prikey);if("undefined"!==typeof certNKey.km){jsonCert["kmcert"]=crosscert.pki.certificateToBase64(certNKey.km.cert);jsonCert["kmpri"]=crosscert.pkcs8.encryptedPrivateKeyToBase64(certNKey.km.prikey)}}catch(e){console.log("***** SetP12HexOnMemory:pki&pkcs8 *****");console.log("Err Code : ",e.code,"\nErr Msg : ",e.message);var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler SetP12HexOnMemory Failed][TOOLKIT ERROR] during getting certificate n private key to base64.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}var jsonRv={};try{jsonRv=this.SetUserCertOnMemory(jsonCert)}catch(e){console.log("***** SetP12HexOnMemory:SetUserCertOnMemory *****");console.log("Err Code : ",e.code,"\nErr Msg : ",e.message);throw e;}return jsonRv},GetP12ForBuToPc:function(index,pw,retType){if(!index||!pw){var err={};err.code=__err_code.ERROR_PARAMETER_VALUE_IS_NULL;err.message="[LocalStorageHandler GetP12ForBuToPc Failed] the parameter value cannot be null.";err.detail=null;throw err;}if("number"!=typeof index||("string"!=typeof pw||(1>index||1>pw.length))){var err={};err.code=__err_code.ERROR_PARAMETER_TYPE_OF_VALUE_OR_DATA_IS_WRONG;err.message="[LocalStorageHandler GetP12ForBuToPc Failed] the parameter type of value or data is wrong.";err.detail=null;throw err;}if(!__arr_list_user_certs||0>=__arr_list_user_certs.length){var err={};err.code=__err_code.ERROR_NO_USER_CERT_ON_STORAGE_MEMORY;err.message="[LocalStorageHandler GetP12ForBuToPc Failed] user certificate is not loaded or not exist.";err.detail=null;throw err;}var b64SignCert,b64SignPri,b64KmCert,b64kmPri;b64SignCert=b64SignPri=b64KmCert=b64KmPri=null;var p12,p12bin;p12=p12bin=null;var struct=__arr_list_user_certs[index];if(!struct||"undefined"===typeof struct){var err={};err.code=__err_code.ERROR_NO_USER_CERT_RESPONDED_BY_INDEX;err.message="[LocalStorageHandler GetP12ForBuToPc Failed] no user certificate responded by the index.";err.detail=null;throw err;}var b64SignCert=struct["signcert"];var b64SignPri=struct["signpri"];if("undefined"!=typeof struct["kmcert"]){b64KmCert=struct["kmcert"];b64KmPri=struct["kmpri"]}var dn=null;try{crosscert.x509Certificate.parser(b64SignCert,"Base64");dn=crosscert.x509Certificate.getSubjectName()}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler GetP12ForBuToPc Failed][TOOLKIT ERROR] during parsing certificate and getting subject name.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}var signCert=null;try{signCert=crosscert.pki.certificateFromBase64(b64SignCert)}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler GetP12ForBuToPc Failed][TOOLKIT ERROR] during decoding sign certificate base64 to binary.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}var signPri=null;try{signPri=crosscert.pkcs8.encryptedPrivateKeyFromBase64(b64SignPri)}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler GetP12ForBuToPc Failed][TOOLKIT ERROR] during decoding sign private key base64 to binary.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}var kmCert=null;var kmPri=null;if(b64KmCert){try{kmCert=crosscert.pki.certificateFromBase64(b64KmCert)}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler GetP12ForBuToPc Failed][TOOLKIT ERROR] during decoding km certificate base64 to binary.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}try{kmPri=crosscert.pkcs8.encryptedPrivateKeyFromBase64(b64KmPri)}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler GetP12ForBuToPc Failed][TOOLKIT ERROR] during decoding km private key base64 to binary.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}}try{p12=crosscert.pkcs12.makePKCS12(signCert,signPri,kmCert,kmPri,pw,{useMac:true,generateLocalKeyId:true})}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler GetP12ForBuToPc Failed][TOOLKIT ERROR] during encoding pkcs#12.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}var p12der=null;try{p12der=crosscert.asn1.toDer(p12).getBytes()}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler GetP12ForBuToPc Failed][TOOLKIT ERROR] during getting pkcs#12 binary.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}if(retType=="base64"){var base64P12=crosscert.util.encode64(p12der);return{"p12":base64P12,"dn":dn}}else{var arr=new Array(p12der.length);for(var i=0;i<p12der.length;i++)arr[i]=p12der.charCodeAt(i);p12bin=new Uint8Array(arr);return{"p12":p12bin,"dn":dn}}},GetP12ForBuToMo:function(index,encoding){if(!index||!encoding){var err={};err.code=__err_code.ERROR_PARAMETER_VALUE_IS_NULL;err.message="[LocalStorageHandler GetP12ForBuToMo Failed] the parameter value cannot be null.";err.detail=null;throw err;}if("number"!=typeof index||("string"!=typeof encoding||1>index)){var err={};err.code=__err_code.ERROR_PARAMETER_TYPE_OF_VALUE_OR_DATA_IS_WRONG;err.message="[LocalStorageHandler GetP12ForBuToMo Failed] the parameter type of value or data is wrong.";err.detail=null;throw err;}if(!__arr_list_user_certs||0>=__arr_list_user_certs.length){var err={};err.code=__err_code.ERROR_NO_USER_CERT_ON_STORAGE_MEMORY;err.message="[LocalStorageHandler GetP12ForBuToMo Failed] user certificate is not loaded or not exist.";err.detail=null;throw err;}var b64SignCert,b64SignPri,b64KmCert,b64kmPri;b64SignCert=b64SignPri=b64KmCert=b64KmPri=null;var p12,strP12,p12key;p12=strP12=p12key=null;var struct=__arr_list_user_certs[index];if(!struct||"undefined"===typeof struct){var err={};err.code=__err_code.ERROR_NO_USER_CERT_RESPONDED_BY_INDEX;err.message="[LocalStorageHandler GetP12ForBuToMo Failed] no user certificate responded by the index.";err.detail=null;throw err;}var b64SignCert=struct["signcert"];var b64SignPri=struct["signpri"];if("undefined"!=typeof struct["kmcert"]){b64KmCert=struct["kmcert"];b64KmPri=struct["kmpri"]}try{p12key=crosscert.util.bytesToHex(crosscert.random.getBytes(4))}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler GetP12ForBuToMo Failed][TOOLKIT ERROR] during making random and converting to hex string.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}var signCert=null;try{signCert=crosscert.pki.certificateFromBase64(b64SignCert)}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler GetP12ForBuToMo Failed][TOOLKIT ERROR] during decoding sign certificate base64 to binary.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}var signPri=null;try{signPri=crosscert.pkcs8.encryptedPrivateKeyFromBase64(b64SignPri)}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler GetP12ForBuToMo Failed][TOOLKIT ERROR] during decoding sign private key base64 to binary.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}var kmCert=null;var kmPri=null;if(b64KmCert){try{kmCert=crosscert.pki.certificateFromBase64(b64KmCert)}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler GetP12ForBuToMo Failed][TOOLKIT ERROR] during decoding km certificate base64 to binary.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}try{kmPri=crosscert.pkcs8.encryptedPrivateKeyFromBase64(b64KmPri)}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler GetP12ForBuToMo Failed][TOOLKIT ERROR] during decoding km private key base64 to binary.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}}try{p12=crosscert.pkcs12.makePKCS12FromCertNEncPKCS8(signCert,signPri,kmCert,kmPri,p12key,{useMac:true,generateLocalKeyId:true})}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler GetP12ForBuToMo Failed][TOOLKIT ERROR] during encrypting pkcs#8 and making pkcs#12.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}try{if("hex"===encoding)strP12=crosscert.util.bytesToHex(crosscert.asn1.toDer(p12).getBytes());else strP12=crosscert.util.encode64(crosscert.asn1.toDer(p12).getBytes())}catch(e){var err={};err.code=__err_code.ERROR_JSUSTOOLKIT;err.message="[LocalStorageHandler GetP12ForBuToMo Failed][TOOLKIT ERROR] during encoding base64 string or converting hex string.";err.detail="error code : "+e.code+"\nerror message : "+e.message;throw err;}return{"p12":strP12,"key":p12key}}}};