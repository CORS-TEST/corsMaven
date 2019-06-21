/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	
	// %REMOVE_START%
	// The configuration options below are needed when running CKEditor from source files.
	config.plugins = 'dialogui,dialog,about,a11yhelp,basicstyles,blockquote,notification,button,toolbar,clipboard,panel,floatpanel,menu,contextmenu,resize,elementspath,enterkey,entities,popup,filetools,filebrowser,floatingspace,listblock,richcombo,format,horizontalrule,htmlwriter,wysiwygarea,image,indent,indentlist,fakeobjects,link,list,magicline,maximize,pastetext,pastefromword,removeformat,showborders,sourcearea,specialchar,menubutton,scayt,stylescombo,tab,table,tabletools,tableselection,undo,lineutils,widgetselection,widget,notificationaggregator,uploadwidget,uploadimage,wsc';
	config.skin = 'moonocolor';
	// %REMOVE_END%

	// Define changes to default configuration here.
	// For complete reference see:
	// https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_config.html

	// The toolbar groups arrangement, optimized for two toolbar rows.
	config.toolbarGroups = [
		{ name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
		{ name: 'links' },
		{ name: 'insert' },
		{ name: 'forms' },
		{ name: 'tools' },
		{ name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'others' },
		'/',
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
		{ name: 'styles' },
		{ name: 'colors' },
		{ name: 'about' }
	];

	// Remove some buttons provided by the standard plugins, which are
	// not needed in the Standard(s) toolbar.
	config.removeButtons = 'Underline,Subscript,Superscript';

	// Set the most common block elements.
//	config.format_tags = 'p;h1;h2;h3;pre';

	// Simplify the dialog windows.
//	config.removeDialogTabs = 'image:advanced;link:advanced';
	
//	config.removeButtons = 'Subscript,Superscript,Cut,Copy,Paste,PasteText,PasteFromWord,Undo,Redo,Anchor,About,Format,Styles,Scayt,Indent,Outdent';

	// Set the most common block elements.
	config.format_tags = 'p;h1;h2;h3;pre';
	
	
	//본문내용에 테두리 쳐줘서 나오도록 css 추가. ebhan
	config.contentsCss =[ 'https://cdn.ckeditor.com/4.8.0/full-all/contents.css', 'css/mystyles.css' ]
	config.bodyClass = 'document-editor';
	
	//ckeditor에서 <p>태그가 줄바꿈으로 이용되므로.
	//그걸 br태그로 바꿔서 사용가능.
	config.enterMode = CKEDITOR.ENTER_BR;
	
	//p태그가 들어가면 자동 으로 한줄이 더 들어가므로 그걸 없애는법
	config.fillEmptyBlocks = false;

	// Simplify the dialog windows.
	config.removeDialogTabs = 'image:advanced;link:advanced';
	
	config.allowedContent = true;
	
	//'inputtag',
//	config.extraPlugins = ['font','print'];
	
	
	config.removePlugins = 'easyimage, cloudservices';
};
