<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="css/mystyles.css">
<script type="text/javascript" src="../ckeditor/ckeditor.js"></script>
<!-- <script src="//cdn.ckeditor.com/4.10.4/standard/ckeditor.js"></script> -->
<script type="text/javascript">
 	var ckEditor;
 	
 	function init() {
 		CKEDITOR.replace( 'editor',{
 			on: { 
 				'instanceReady': 
					function (evt){
						evt.editor.execCommand('maximize');
						ckEditor = evt.editor;
// 						evt.editor.setReadOnly(false);
 					}
 			}
 		});
 		
 		//ckEditor = CKEDITOR.editor; 	
 		//ckEditor.config.readOnly = false
	}
 	
 	function setReadMode(mode) {
 		if(mode == "Y") {
 			 CKEDITOR.config.readOnly = true;
 	    } else if(mode == "N") {
 	    	 CKEDITOR.config.readOnly = false;
 		}
 	}
	
	function FireUserNotify(userdata,type) {
		if (window.NEXACROWEBBROWSER) {
			if (type == "GET"){
				window.NEXACROWEBBROWSER.on_fire_onusernotify(window.NEXACROWEBBROWSER, "▦"+userdata);	
			} else if (type == "SET"){
				window.NEXACROWEBBROWSER.on_fire_onusernotify(window.NEXACROWEBBROWSER, "▦"+true);
			} else if(type == "SET_TAG"){
				window.NEXACROWEBBROWSER.on_fire_onusernotify(window.NEXACROWEBBROWSER, "▦"+"SET_TAG");
			} else if(type == "MODE"){
				window.NEXACROWEBBROWSER.on_fire_onusernotify(window.NEXACROWEBBROWSER, "▦"+"MODE");
			} 
	  	} else {	
	  		if (type == "GET"){
	  			window.document.title = "▩"+userdata;	
	  		} else if (type == "SET"){
	  			window.document.title = "▩"+true;	
	  		} else if (type == "SET_TAG"){
	  			window.document.title = "▩"+"SET_TAG";	
	  		} else if (type == "MODE"){
	  			window.document.title = "▩"+"MODE";	
	  		}
		}			
	}

	function saveContent(str){
		try {
		 	var data = ckEditor.getData();
			FireUserNotify(data,"GET");
		} catch(e) {
			alert(e + "error");
		}
    }

	function setEditor(str){
		document.getElementById("editor").value = str;
		FireUserNotify("","MODE");
	}
	
	function setTag(){
		try {
				FireUserNotify("","SET_TAG");
		} catch(e) {
				alert(e + "error");
		}
	}
	
	function setTagEditor(str) {
    	if(str != null && str != ""){
    		window.document.title ="";
    		ckEditor.insertHtml(str);
    	}
	}
	

</script>
<title>editor</title>
</head>
<body onload="init()">
		<form>
            <textarea name="editor" id="editor" ></textarea>
        </form>
</body>
</html>