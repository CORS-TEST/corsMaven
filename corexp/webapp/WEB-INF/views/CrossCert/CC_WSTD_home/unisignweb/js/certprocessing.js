var __certprocessing=function(a){var e=null,m=function(c){var h=function(){var b;b=window.XMLHttpRequest?new window.XMLHttpRequest:new ActiveXObject("MSXML2.XMLHTTP.3.0");b.open("GET",a.ESVS.SRCPath+"unisignweb/rsrc/layout/certprocessing.html?version="+a.ver,!1);b.send(null);return b.responseText},k=function(){var b;b=window.XMLHttpRequest?new window.XMLHttpRequest:new ActiveXObject("MSXML2.XMLHTTP.3.0");b.open("GET",a.ESVS.SRCPath+"unisignweb/rsrc/lang/"+a.ESVS.Language+"/certprocessing_"+a.ESVS.Language+".js?version="+a.ver,!1);b.send(null);return b.responseText};return function(){var b=eval(h),f=eval(eval(k)());e=f;a.ESVS.TargetObj.innerHTML=b();document.getElementById("us-cert-processing-img").setAttribute("src",a.ESVS.SRCPath+"unisignweb/rsrc/img/processing-img.gif",0);b=document.getElementById("us-cert-processing-text");"CERT_ISSUE"==c.type?b.appendChild(document.createTextNode(f.IDS_CERT_ISSUING)):"CERT_RENEWAL"==c.type?b.appendChild(document.createTextNode(f.IDS_CERT_RENEWING)):"CERT_REVOCATION"==c.type?b.appendChild(document.createTextNode(f.IDS_CERT_REVOKING)):"CERT_SOE"==c.type&&b.appendChild(document.createTextNode(f.IDS_CERT_SOEING));return document.getElementById("us-div-cert-processing")}()};return function(c){var h=a.uiLayerLevel,k=a.uiUtil().getOverlay(h);k.style.cursor="wait";var b=m({type:c.type,args:c.args,onConfirm:c.onConfirm,onCancel:c.onCancel});b.style.zIndex=h+1;a.ESVS.TargetObj.insertBefore(k,a.ESVS.TargetObj.firstChild);var f=window.onresize;return{show:function(){a.ActiveUI=this;draggable(b);k.style.display="block";a.uiUtil().offsetResize(b);window.onresize=function(){a.uiUtil().offsetResize(b);f&&f()};a.uiLayerLevel+=10;a.ESVS.TabIndex+=30},hide:function(){k.style.display="none";b.style.display="none"},dispose:function(g,l,h,m,n){window.onresize=function(){f&&f()};var d=null;if(m)if("CERT_ISSUE"==c.type)if(0!=g)switch(l){default:d=e.IDS_MSGBOX_CERT_ISSUE_ERROR+"<br><br>"+h+"<br><br>Error Code [ "+l+" ]"}else d=e.IDS_MSGBOX_CERT_ISSUED;else if("CERT_RENEWAL"==c.type)if(0!=g)switch(l){default:d=e.IDS_MSGBOX_CERT_RENEW_DENIED_ERROR+"<br><br>"+h+"<br><br>Error Code [ "+l+" ]"}else d=e.IDS_MSGBOX_CERT_RENEWED;else if("CERT_REVOCATION"==c.type)if(0==g)d=e.IDS_MSGBOX_CERT_REVOKED;else if("object"===typeof g)d=e.IDS_MSGBOX_CERT_REVOKE_DENIED_ERROR+"<br><br>"+g.msg+"<br><br>Error Code [ "+g.code+" ]";else switch(l){default:d=e.IDS_MSGBOX_CERT_REVOKE_DENIED_ERROR+"<br><br>"+h+"<br><br>Error Code [ "+l+" ]"}else if("CERT_SOE"==c.type)if(0!=g)switch(l){default:d=e.IDS_MSGBOX_CERT_SOE_DENIED_ERROR+"<br><br>"+h+"<br><br>Error Code [ "+l+" ]"}else d=e.IDS_MSGBOX_CERT_SOEED;g=b.parentNode;null!=g&&g.removeChild(b);null!=k.parentNode&&k.parentNode.removeChild(k);a.uiLayerLevel-=10;a.ESVS.TabIndex-=30;if(d){var p=a.loadUI("notice")({type:null,args:{msg:d},onConfirm:function(){p.dispose();n()},onCancel:function(){p.dispose();n()}});p.show()}else n()}}}};